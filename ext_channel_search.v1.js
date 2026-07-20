(function(){
  "use strict";

  if(window.__SHIMA_CHANNEL_SEARCH_V1__) return;
  window.__SHIMA_CHANNEL_SEARCH_V1__ = true;

  const VERSION = "1.1.0";
  const FILTERS = new Set(["all", "positive", "negative"]);
  const state = {
    mounted:false,
    filter:"all",
    timer:0,
    nativeTimer:0,
    inputs:null,
    counts:null,
    indexed:false,
    negativeDetails:[],
    negativeOpenState:new Map(),
    targetSerial:0,
    targets:new Map()
  };
  const ui = { buttons:{} };
  const searchTextCache = new WeakMap();

  function create(tag, className, text){
    const node = document.createElement(tag);
    if(className) node.className = className;
    if(text != null) node.textContent = String(text);
    return node;
  }

  function cleanText(value){
    return String(value || "").replace(/[★☆]/g, "").replace(/\s+/g, " ").trim();
  }

  function promptCheckboxes(){
    if(Array.isArray(state.inputs)) return state.inputs;
    state.inputs = Array.prototype.slice.call(document.querySelectorAll('#sections input[type="checkbox"]:not([data-zero-ignore="1"])')).filter(function(input){
      return !input.dataset || input.dataset.shimaPackPreviewHidden !== "1" || input.checked;
    });
    return state.inputs;
  }

  function clearChannelIndex(){
    // NEG表示中に記録した開閉状態を失う前に、元の棚状態へ戻す。
    restoreNegativeOpenState();
    document.querySelectorAll(
      "#sections .shima-channel-negative-item," +
      "#sections .shima-channel-has-negative," +
      "#sections .shima-channel-negative-only"
    ).forEach(function(node){
      node.classList.remove("shima-channel-negative-item", "shima-channel-has-negative", "shima-channel-negative-only");
    });
    state.negativeDetails = [];
    state.negativeOpenState.clear();
    state.counts = null;
    state.indexed = false;
  }

  function prepareChannelIndex(){
    if(state.indexed && state.counts) return state.counts;
    clearChannelIndex();
    const inputs = promptCheckboxes();
    const counts = { all:inputs.length, positive:0, negative:0 };
    const negativeInputs = [];
    const negativeDetails = new Set();
    const negativeRoots = new Set();

    inputs.forEach(function(input){
      const channel = channelOf(input);
      counts[channel]++;
      if(channel !== "negative") return;
      negativeInputs.push(input);
      const label = input.closest ? input.closest("label") : null;
      if(label) label.classList.add("shima-channel-negative-item");
      const closestDetails = input.closest ? input.closest("details") : null;
      if(closestDetails) negativeRoots.add(closestDetails);
      let node = label ? label.parentElement : input.parentElement;
      while(node && node.id !== "sections"){
        node.classList.add("shima-channel-has-negative");
        if(node.tagName === "DETAILS") negativeDetails.add(node);
        node = node.parentElement;
      }
    });

    negativeRoots.forEach(function(details){
      const own = Array.prototype.slice.call(details.querySelectorAll('input[type="checkbox"]:not([data-zero-ignore="1"])')).filter(function(input){
        return !input.dataset || input.dataset.shimaPackPreviewHidden !== "1" || input.checked;
      });
      if(own.length && own.every(function(input){ return channelOf(input) === "negative"; })){
        details.classList.add("shima-channel-negative-only");
      }
    });

    state.counts = counts;
    state.negativeDetails = Array.from(negativeDetails);
    state.indexed = true;
    return counts;
  }

  function restoreNegativeOpenState(){
    state.negativeOpenState.forEach(function(wasOpen, details){
      if(details && details.isConnected) details.open = wasOpen;
    });
    state.negativeOpenState.clear();
  }

  function applyChannelMode(filter){
    prepareChannelIndex();
    const next = FILTERS.has(filter) ? filter : "all";
    document.body.dataset.shimaChannelMode = next;
    if(ui.root) ui.root.dataset.filter = next;

    if(next === "negative"){
      state.negativeDetails.forEach(function(details){
        if(!state.negativeOpenState.has(details)) state.negativeOpenState.set(details, !!details.open);
        details.open = true;
      });
    }else{
      restoreNegativeOpenState();
    }
  }

  function channelOf(input){
    return input && input.dataset && input.dataset.outputChannel === "negative" ? "negative" : "positive";
  }

  function intentMeta(input){
    const data = input && input.dataset ? input.dataset : {};
    if(data.outputChannel === "negative") return { label:"NEG専用", tone:"negative" };
    if(data.promptIntent === "positive-suppression") return { label:"POS抑制", tone:"suppression" };
    if(data.promptIntent === "positive-expression") return { label:"POS表現", tone:"expression" };
    return { label:"POS通常", tone:"positive" };
  }

  function searchText(label, input){
    if(label && searchTextCache.has(label)) return searchTextCache.get(label);
    const data = input && input.dataset ? input.dataset : {};
    const labelSource = cleanText(label ? label.textContent : "")
      .replace(/\b(?:POS通常|POS抑制|POS表現|NEG専用)\b/g, " ");
    const value = cleanText([
      data.ja || "",
      data.label || "",
      data.en || "",
      data.val || "",
      labelSource
    ].join(" ")).toLowerCase();
    if(label) searchTextCache.set(label, value);
    return value;
  }

  function matches(input){
    if(input && input.dataset && input.dataset.shimaPackPreviewHidden === "1" && !input.checked) return false;
    if(state.filter === "all") return true;
    if(!input || !input.matches || !input.matches('input[type="checkbox"]')) return false;
    return channelOf(input) === state.filter;
  }

  function searchInput(){
    return document.querySelector("#ui-search-bar input");
  }

  function currentTerm(){
    const input = searchInput();
    return cleanText(input ? input.value : "").toLowerCase();
  }

  function matchesTerm(input, term){
    if(!term) return true;
    const label = input && input.closest ? input.closest("label") : null;
    return searchText(label, input).includes(term);
  }

  function splitPrompt(text){
    const output = [];
    let buffer = "";
    let depth = 0;
    let quote = "";
    const source = String(text || "");
    for(let index = 0; index < source.length; index++){
      const char = source[index];
      if(quote){
        buffer += char;
        if(char === quote && source[index - 1] !== "\\") quote = "";
        continue;
      }
      if(char === '"' || char === "'"){
        quote = char;
        buffer += char;
        continue;
      }
      if(char === "(" || char === "[" || char === "{") depth++;
      else if(char === ")" || char === "]" || char === "}") depth = Math.max(0, depth - 1);
      if(char === "," && depth === 0){
        if(buffer.trim()) output.push(buffer.trim());
        buffer = "";
      }else buffer += char;
    }
    if(buffer.trim()) output.push(buffer.trim());
    return output;
  }

  function coreOf(value){
    return String(value || "")
      .toLowerCase()
      .replace(/^[\s\(\[\{"']+/, "")
      .replace(/[\s\)\]\}"']+$/, "")
      .replace(/:\s*[-+]?\d+(?:\.\d+)?%?\s*$/, "")
      .replace(/[-_]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function singleCore(input){
    const data = input && input.dataset ? input.dataset : {};
    const parts = splitPrompt(data.val || data.en || "");
    return parts.length === 1 ? coreOf(parts[0]) : "";
  }

  function targetKey(input){
    if(!input) return "";
    if(input.dataset && input.dataset.shimaChannelSearchTarget){
      const known = input.dataset.shimaChannelSearchTarget;
      state.targets.set(known, input);
      return known;
    }
    const key = input.id ? "id:" + input.id : "search-target-" + (++state.targetSerial);
    if(input.dataset) input.dataset.shimaChannelSearchTarget = key;
    state.targets.set(key, input);
    return key;
  }

  function ensureRouteBadge(input){
    const label = input && input.closest ? input.closest("label") : null;
    if(!label) return null;
    let badge = label.querySelector(".shima-channel-search-route");
    if(badge) return badge;
    const meta = intentMeta(input);
    badge = label.querySelector(".qp-v51-route-badge");
    if(badge){
      badge.classList.add("shima-channel-search-route");
      badge.dataset.generated = "0";
    }else{
      badge = create("span", "shima-channel-search-route", meta.label + " ↗");
      badge.dataset.generated = "1";
      badge.dataset.tone = meta.tone;
      label.appendChild(badge);
    }
    badge.dataset.shimaChannelSearchTarget = targetKey(input);
    badge.setAttribute("role", "button");
    badge.tabIndex = 0;
    badge.title = meta.label + "の元の棚を開く";
    return badge;
  }

  function openAncestors(input){
    let node = input;
    while(node && node !== document.body){
      if(node.tagName === "DETAILS"){
        node.open = true;
        node.style.display = "";
      }
      if(node.classList && node.classList.contains("section")) node.style.display = "";
      if(node.id === "sections") break;
      node = node.parentElement;
    }
  }

  function fallbackReveal(input){
    setFilter("all", { dispatch:false });
    const query = searchInput();
    if(query){
      query.value = "";
      query.dispatchEvent(new Event("input", { bubbles:true }));
    }
    openAncestors(input);
    const label = input && input.closest ? input.closest("label") : null;
    if(!label) return;
    label.style.display = "";
    setTimeout(function(){
      try { label.scrollIntoView({ behavior:"smooth", block:"center" }); }
      catch(e){ try { label.scrollIntoView(); } catch(_) {} }
      label.classList.remove("shima-channel-search-jump");
      void label.offsetWidth;
      label.classList.add("shima-channel-search-jump");
    }, 30);
  }

  function reveal(input){
    if(!input) return;
    if(window.ZeroAssist && typeof window.ZeroAssist.reveal === "function"){
      window.ZeroAssist.reveal(input);
      return;
    }
    fallbackReveal(input);
  }

  function updateFilterButtons(counts){
    ["all", "positive", "negative"].forEach(function(key){
      const button = ui.buttons[key];
      if(!button) return;
      const label = key === "all" ? "全部" : key === "positive" ? "POS" : "NEG";
      const count = key === "all" ? counts.all : counts[key];
      button.querySelector("span").textContent = label;
      button.querySelector("strong").textContent = String(count);
      const active = state.filter === key;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function renderPairs(boxes, term){
    if(!ui.pairs) return;
    ui.pairs.textContent = "";
    ui.pairs.hidden = true;
    if(!term) return;

    const groups = new Map();
    boxes.forEach(function(input){
      const core = singleCore(input);
      if(!core) return;
      if(!groups.has(core)) groups.set(core, { positive:[], negative:[] });
      groups.get(core)[channelOf(input)].push(input);
    });
    const pairs = Array.from(groups.entries()).filter(function(entry){
      return entry[1].positive.length && entry[1].negative.length;
    }).slice(0, 8);
    if(!pairs.length) return;

    const heading = create("div", "shima-channel-pairs__heading");
    heading.appendChild(create("strong", "", "同語の出力先"));
    heading.appendChild(create("small", "", "同じ英語でも別用途です。移動先を選べます。"));
    ui.pairs.appendChild(heading);

    pairs.forEach(function(entry){
      const core = entry[0];
      const group = entry[1];
      const row = create("div", "shima-channel-pair");
      row.appendChild(create("code", "", core));
      const actions = create("div", "shima-channel-pair__actions");
      ["positive", "negative"].forEach(function(channel){
        const targets = group[channel];
        const button = create("button", "", (channel === "positive" ? "POS " : "NEG ") + targets.length + " ↗");
        button.type = "button";
        button.dataset.tone = channel;
        button.dataset.shimaChannelSearchTarget = targetKey(targets[0]);
        actions.appendChild(button);
      });
      row.appendChild(actions);
      ui.pairs.appendChild(row);
    });
    ui.pairs.hidden = false;
  }

  function refresh(){
    if(!state.mounted) return;
    const term = currentTerm();
    const baseCounts = prepareChannelIndex();
    const matched = term
      ? promptCheckboxes().filter(function(input){ return matchesTerm(input, term); })
      : [];
    const counts = term ? { all:matched.length, positive:0, negative:0 } : baseCounts;
    if(term) matched.forEach(function(input){ counts[channelOf(input)]++; });
    updateFilterButtons(counts);

    if(ui.status){
      if(term){
        ui.status.textContent = "「" + term + "」：POS " + counts.positive + "件／NEG " + counts.negative + "件";
      }else if(state.filter === "all"){
        ui.status.textContent = "同じ語がPOSとNEGにある場合も、出力先を見分けて探せます。";
      }else{
        ui.status.textContent = (state.filter === "positive" ? "Positive側" : "Negative専用") + "だけを表示中";
      }
    }

    document.body.dataset.shimaChannelSearchActive = term ? "1" : "0";
    if(term){
      let decorated = 0;
      matched.forEach(function(input){
        if(!matches(input) || decorated >= 400) return;
        ensureRouteBadge(input);
        decorated++;
      });
    }
    renderPairs(matched, term);
  }

  function scheduleRefresh(delay){
    clearTimeout(state.timer);
    state.timer = setTimeout(function(){
      state.timer = 0;
      refresh();
    }, delay == null ? 30 : delay);
  }

  function scheduleNativeSearch(delay){
    clearTimeout(state.nativeTimer);
    state.nativeTimer = setTimeout(function(){
      state.nativeTimer = 0;
      const input = searchInput();
      if(input) input.dispatchEvent(new Event("input", { bubbles:true }));
    }, delay == null ? 90 : delay);
  }

  function setFilter(filter, options){
    const next = FILTERS.has(filter) ? filter : "all";
    state.filter = next;
    applyChannelMode(next);
    const opts = options || {};
    const term = currentTerm();
    if(term){
      updateFilterButtons(state.counts || { all:0, positive:0, negative:0 });
      if(ui.status) ui.status.textContent = (next === "all" ? "全出力先" : next === "positive" ? "Positive側" : "Negative専用") + "で検索中";
      scheduleRefresh(90);
      if(opts.dispatch !== false) scheduleNativeSearch(100);
    }else{
      clearTimeout(state.nativeTimer);
      state.nativeTimer = 0;
      refresh();
    }
    if(opts.dispatch === false) return;
    try {
      window.dispatchEvent(new CustomEvent("shimaChannelSearchChanged", { detail:{ filter:next } }));
    } catch(e) {}
  }

  function bind(){
    document.addEventListener("click", function(event){
      const filter = event.target && event.target.closest ? event.target.closest("[data-shima-channel-filter]") : null;
      if(filter){
        event.preventDefault();
        setFilter(filter.dataset.shimaChannelFilter);
        return;
      }
      const jump = event.target && event.target.closest ? event.target.closest("[data-shima-channel-search-target]") : null;
      if(!jump) return;
      const input = state.targets.get(jump.dataset.shimaChannelSearchTarget);
      if(!input) return;
      event.preventDefault();
      event.stopPropagation();
      reveal(input);
    }, true);

    document.addEventListener("keydown", function(event){
      const jump = event.target && event.target.closest ? event.target.closest(".shima-channel-search-route") : null;
      if(!jump || (event.key !== "Enter" && event.key !== " ")) return;
      event.preventDefault();
      jump.click();
    }, true);

    document.addEventListener("input", function(event){
      if(event.target === searchInput()){
        applyChannelMode(state.filter);
        scheduleRefresh(90);
      }
    });
    window.addEventListener("promptPartMounted", function(){
      state.inputs = null;
      clearChannelIndex();
      scheduleRefresh(80);
    });
    window.addEventListener("builderHistoryRestored", function(){ scheduleRefresh(80); });
  }

  function ensureStyles(){
    if(document.getElementById("shima-channel-search-style")) return;
    const style = create("style");
    style.id = "shima-channel-search-style";
    style.textContent = `
      #shima-channel-search{ display:flex; flex-direction:column; gap:7px; margin-top:8px; padding:8px; border:1px solid #bfdbe3; border-radius:13px; background:rgba(255,255,255,.92); box-shadow:0 6px 18px rgba(52,102,119,.07); }
      .shima-channel-search__top{ display:flex; align-items:center; gap:7px; }
      .shima-channel-search__label{ flex:0 0 auto; color:#51717d; font-size:10px; font-weight:900; }
      .shima-channel-search__filters{ display:grid; flex:1 1 auto; grid-template-columns:repeat(3,minmax(0,1fr)); gap:5px; }
      .shima-channel-filter{ display:flex !important; align-items:center; justify-content:center; gap:5px; min-height:34px !important; padding:5px 8px !important; border:1px solid #c7dce3 !important; border-radius:10px !important; background:#f7fbfc !important; color:#55727d !important; font-size:10px !important; font-weight:900 !important; box-shadow:none !important; }
      .shima-channel-filter strong{ display:grid; place-items:center; min-width:20px; min-height:20px; padding:0 4px; border-radius:999px; background:#e8f1f4; color:#56717b; font-size:8px; }
      .shima-channel-filter.is-active{ border-color:#5fc2bb !important; background:#eafaf7 !important; color:#176b69 !important; }
      .shima-channel-filter[aria-pressed="true"]{ border-color:#5fc2bb !important; background:#eafaf7 !important; color:#176b69 !important; }
      .shima-channel-filter[data-shima-channel-filter="negative"].is-active{ border-color:#dc9fb5 !important; background:#fff0f5 !important; color:#9d3b5e !important; }
      .shima-channel-filter[data-shima-channel-filter="negative"][aria-pressed="true"]{ border-color:#dc9fb5 !important; background:#fff0f5 !important; color:#9d3b5e !important; }
      .shima-channel-search__status{ margin:0; color:#647f89; font-size:9px; line-height:1.45; }
      .shima-channel-pairs{ display:flex; flex-direction:column; gap:5px; padding-top:7px; border-top:1px solid #d9e7eb; }
      .shima-channel-pairs[hidden]{ display:none !important; }
      .shima-channel-pairs__heading{ display:flex; align-items:baseline; justify-content:space-between; gap:8px; }
      .shima-channel-pairs__heading strong{ color:#264f5d; font-size:10px; }
      .shima-channel-pairs__heading small{ color:#71868d; font-size:8px; text-align:right; }
      .shima-channel-pair{ display:flex; align-items:center; justify-content:space-between; gap:8px; padding:6px 7px; border:1px solid #d9e6ea; border-radius:9px; background:#fbfeff; }
      .shima-channel-pair code{ min-width:0; color:#234c5a; font-size:9px; overflow-wrap:anywhere; }
      .shima-channel-pair__actions{ display:flex; flex:0 0 auto; gap:4px; }
      .shima-channel-pair__actions button{ min-height:28px !important; padding:4px 7px !important; border:1px solid #a9d5d7 !important; border-radius:8px !important; background:#effbf9 !important; color:#176c6b !important; font-size:8px !important; font-weight:950 !important; box-shadow:none !important; }
      .shima-channel-pair__actions button[data-tone="negative"]{ border-color:#dfafc0 !important; background:#fff2f6 !important; color:#973c5d !important; }
      .shima-channel-search-route{ cursor:pointer; }
      .shima-channel-search-route[data-generated="1"]{ display:none; flex:0 0 auto; margin-left:auto; padding:3px 6px; border:1px solid #afd4df; border-radius:999px; background:#eefaff; color:#247087; font-size:8px; font-weight:950; line-height:1.25; }
      .shima-channel-search-route[data-generated="1"][data-tone="expression"]{ border-color:#e1c27e; background:#fff7df; color:#845b0b; }
      .shima-channel-search-route[data-generated="1"][data-tone="negative"]{ border-color:#dfa6b8; background:#fff0f5; color:#a2385c; }
      body[data-shima-channel-search-active="1"] label:not(.zero-assist-filter-hidden) > .shima-channel-search-route[data-generated="1"]{ display:inline-flex; }
      body[data-shima-channel-mode="positive"] #sections .shima-channel-negative-only,
      body[data-shima-channel-mode="positive"] #sections label.shima-channel-negative-item{ display:none !important; }
      body[data-shima-channel-mode="negative"] #sections > .section:not(.shima-channel-has-negative),
      body[data-shima-channel-mode="negative"] #sections details:not(.shima-channel-has-negative){ display:none !important; }
      body[data-shima-channel-mode="negative"] #sections .shima-channel-has-negative > :not(summary):not(.shima-channel-has-negative):not(.shima-channel-negative-item){ display:none !important; }
      .shima-channel-search-jump{ animation:shimaChannelSearchJump 1.5s ease both; }
      @keyframes shimaChannelSearchJump{ 0%,100%{ box-shadow:inherit; } 20%,70%{ box-shadow:0 0 0 3px rgba(83,194,187,.32),0 8px 22px rgba(32,118,117,.18) !important; } }
      @media(max-width:430px){
        #shima-channel-search{ padding:7px; }
        .shima-channel-search__top{ align-items:stretch; flex-direction:column; gap:5px; }
        .shima-channel-search__label{ padding-left:2px; }
        .shima-channel-filter{ min-height:38px !important; padding:5px !important; }
        .shima-channel-pairs__heading{ align-items:flex-start; flex-direction:column; gap:2px; }
        .shima-channel-pairs__heading small{ text-align:left; }
      }
      @media(prefers-reduced-motion:reduce){ .shima-channel-search-jump{ animation:none !important; } }
    `;
    document.head.appendChild(style);
  }

  function mount(){
    if(state.mounted) return true;
    const bar = document.getElementById("ui-search-bar");
    const input = searchInput();
    if(!bar || !input) return false;
    ensureStyles();

    const root = create("section", "shima-channel-search");
    root.id = "shima-channel-search";
    root.setAttribute("aria-label", "検索する出力先");
    const top = create("div", "shima-channel-search__top");
    top.appendChild(create("span", "shima-channel-search__label", "出力先で探す"));
    const filters = create("div", "shima-channel-search__filters");
    filters.setAttribute("role", "group");
    ["all", "positive", "negative"].forEach(function(key){
      const button = create("button", "shima-channel-filter");
      button.type = "button";
      button.dataset.shimaChannelFilter = key;
      button.appendChild(create("span", "", key === "all" ? "全部" : key === "positive" ? "POS" : "NEG"));
      button.appendChild(create("strong", "", "0"));
      filters.appendChild(button);
      ui.buttons[key] = button;
    });
    top.appendChild(filters);
    root.appendChild(top);
    ui.status = create("p", "shima-channel-search__status");
    root.appendChild(ui.status);
    ui.pairs = create("div", "shima-channel-pairs");
    ui.pairs.hidden = true;
    root.appendChild(ui.pairs);
    bar.appendChild(root);
    ui.root = root;
    state.mounted = true;
    bind();
    applyChannelMode(state.filter);
    refresh();
    setTimeout(refresh, 400);
    setTimeout(refresh, 1200);
    return true;
  }

  function boot(attempt){
    if(mount()) return;
    if(attempt > 100) return;
    setTimeout(function(){ boot(attempt + 1); }, 120);
  }

  window.ShimaChannelSearch = {
    version:VERSION,
    getFilter:function(){ return state.filter; },
    setFilter:setFilter,
    matches:matches,
    searchText:searchText,
    refresh:refresh,
    applyDomFilter:function(){ applyChannelMode(state.filter); },
    invalidate:function(){
      state.inputs = null;
      clearChannelIndex();
      scheduleRefresh(60);
    },
    reveal:reveal,
    getState:function(){
      return {
        filter:state.filter,
        term:currentTerm(),
        mounted:state.mounted,
        indexed:state.indexed,
        inputCount:state.counts ? state.counts.all : 0,
        nativeSearchPending:!!state.nativeTimer
      };
    }
  };

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", function(){ boot(0); }, { once:true });
  }else boot(0);
})();
