(function () {
  "use strict";

  if (window.__SHIMA_NAVIGATION_V1__) return;
  window.__SHIMA_NAVIGATION_V1__ = true;

  const VERSION = "1.1.0";
  const STORAGE = {
    route: "shimaBuilderV5.shimaNavigation.route.v1",
    collapsed: "shimaBuilderV5.shimaNavigation.collapsed.v1",
    mobileView: "shimaBuilderV5.shimaNavigation.mobileView.v1"
  };

  const STAGES = {
    quality: {
      label: "品質",
      caption: "生成ベースと画風を決めます",
      targets: ["list-quality_preset", "list-preset_packs", "list-style", "list-texture"]
    },
    subject: {
      label: "主体・人数",
      caption: "人数、種族、体格を決めます",
      targets: ["list-race", "list-bodytype", "list-anatomy"],
      subjectPattern: /(?:^|[\s,(])(?:solo|1girl|1boy|2girls|2boys|3girls|3boys|multiple girls|multiple boys|group|couple)(?:$|[\s,)])/i
    },
    character: {
      label: "キャラ設計",
      caption: "髪、特徴、表情を組み立てます",
      targets: ["list-hair", "list-skin_details", "list-traits", "list-expression", "list-accessories"]
    },
    cast: {
      label: "登場人物",
      caption: "複数人物の特徴と関係を整えます",
      targets: ["list-race", "list-bodytype", "list-hair", "list-expression", "list-narrative", "list-attire"]
    },
    registered: {
      label: "うちの子情報",
      caption: "固定キャラの一時メモを確認します",
      targets: ["ext-char-details"],
      custom: "registered"
    },
    attire: {
      label: "衣装",
      caption: "衣装と装飾品を選びます",
      targets: ["list-attire", "list-accessories"]
    },
    machine: {
      label: "機体設計",
      caption: "形状、材質、機械的特徴を決めます",
      targets: ["list-style", "list-anatomy", "list-bodytype", "list-creatures"]
    },
    armor: {
      label: "装甲・材質",
      caption: "装甲、外装、質感を積みます",
      targets: ["list-attire", "list-accessories", "list-texture"]
    },
    pose: {
      label: "ポーズ",
      caption: "動きと仕草を決めます",
      targets: ["list-pose"]
    },
    composition: {
      label: "構図・カメラ",
      caption: "画面配置と視点を決めます",
      targets: ["list-composition", "list-camera"]
    },
    scene: {
      label: "背景・世界",
      caption: "場所と世界観を選びます",
      targets: ["list-background"]
    },
    camera: {
      label: "カメラ",
      caption: "距離、角度、レンズ感を決めます",
      targets: ["list-camera"]
    },
    lighting: {
      label: "光・空気",
      caption: "照明、影、空気感を整えます",
      targets: ["list-lighting", "list-shadow", "list-atmosphere"]
    },
    effects: {
      label: "演出・仕上げ",
      caption: "エフェクトと後処理を加えます",
      targets: ["list-effect", "list-postprocessing", "list-filter"]
    },
    background: {
      label: "背景・光",
      caption: "背景、照明、空気感を仕上げます",
      targets: ["list-background", "list-lighting", "list-shadow", "list-atmosphere", "list-effect", "list-postprocessing", "list-filter"]
    },
    output: {
      label: "出力",
      caption: "組み上がったプロンプトを確認します",
      targets: ["out"],
      custom: "output"
    }
  };

  const ROUTES = {
    solo: {
      icon: "◉",
      label: "1人キャラ",
      description: "一人を主役に、衣装から背景まで組み立てる",
      stages: ["quality", "subject", "character", "attire", "pose", "background", "output"]
    },
    group: {
      icon: "◎",
      label: "複数人物",
      description: "人数と関係を先に決め、画面を整理する",
      stages: ["quality", "subject", "cast", "pose", "composition", "background", "output"]
    },
    original: {
      icon: "✦",
      label: "うちの子",
      description: "うちの子情報を軸に、今回の衣装と場面を作る",
      stages: ["quality", "registered", "character", "attire", "pose", "background", "output"]
    },
    mecha: {
      icon: "◇",
      label: "メカ・ロボット",
      description: "機体設計、装甲、構図、戦場演出を積む",
      stages: ["quality", "machine", "armor", "pose", "composition", "background", "output"]
    },
    scenery: {
      icon: "△",
      label: "背景・世界観",
      description: "人物より世界、光、空気を主役にする",
      stages: ["quality", "scene", "composition", "camera", "lighting", "effects", "output"]
    },
    free: {
      icon: "❄",
      label: "自由に組む",
      description: "順番に縛られず、必要な棚だけ使う",
      stages: ["quality", "subject", "character", "attire", "pose", "background", "output"]
    }
  };

  const state = {
    mounted: false,
    route: readRoute(),
    collapsed: readBoolean(STORAGE.collapsed, false),
    mobileView: readMobileView(),
    refreshTimer: 0,
    selectionObserver: null
  };

  const ui = {
    deck: null,
    deckBody: null,
    deckToggle: null,
    currentRoute: null,
    routeGrid: null,
    status: null,
    continueButton: null,
    routeNav: null,
    routeNavList: null,
    routeProgress: null,
    routeHint: null,
    mobileSwitch: null,
    mobileSelected: null,
    mobileSelectedCount: null
  };

  function readRoute() {
    try {
      const value = localStorage.getItem(STORAGE.route);
      return ROUTES[value] ? value : "solo";
    } catch (_) {
      return "solo";
    }
  }

  function readBoolean(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      if (value === null) return fallback;
      return value === "true";
    } catch (_) {
      return fallback;
    }
  }

  function readMobileView() {
    try {
      const value = localStorage.getItem(STORAGE.mobileView);
      if (value === "selected" || value === "output" || value === "shelf") return value;
    } catch (_) {}
    return "shelf";
  }

  function persist(key, value) {
    try { localStorage.setItem(key, String(value)); } catch (_) {}
  }

  function create(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function createStartDeck() {
    const search = document.getElementById("ui-search-bar");
    if (!search || document.getElementById("shima-start-deck")) return false;

    const deck = create("section", "shima-start-deck");
    deck.id = "shima-start-deck";
    deck.setAttribute("aria-labelledby", "shima-start-title");

    const header = create("div", "shima-start-deck__header");
    const crest = create("span", "shima-start-deck__crest");
    crest.setAttribute("aria-hidden", "true");

    const heading = create("div", "shima-start-deck__heading");
    heading.appendChild(create("span", "shima-nav-eyebrow", "SHIMA START DECK"));
    const title = create("h2", "", "今日は何を描く？");
    title.id = "shima-start-title";
    heading.appendChild(title);
    heading.appendChild(create("p", "", "ルートは棚を案内するだけ。タグは勝手に追加しません。"));

    const headerActions = create("div", "shima-start-deck__header-actions");
    const current = create("span", "shima-start-deck__current");
    current.id = "shima-current-route";
    const toggle = create("button", "shima-deck-toggle");
    toggle.type = "button";
    toggle.dataset.shimaAction = "toggle-deck";
    headerActions.appendChild(current);
    headerActions.appendChild(toggle);

    header.appendChild(crest);
    header.appendChild(heading);
    header.appendChild(headerActions);

    const body = create("div", "shima-start-deck__body");
    const routeGrid = create("div", "shima-route-grid");
    routeGrid.setAttribute("role", "group");
    routeGrid.setAttribute("aria-label", "制作ルート");

    Object.keys(ROUTES).forEach(function (key) {
      const route = ROUTES[key];
      const button = create("button", "shima-route-card");
      button.type = "button";
      button.dataset.shimaRoute = key;
      button.setAttribute("aria-pressed", "false");

      const icon = create("span", "shima-route-card__icon", route.icon);
      icon.setAttribute("aria-hidden", "true");
      const copy = create("span", "shima-route-card__copy");
      copy.appendChild(create("strong", "", route.label));
      copy.appendChild(create("small", "", route.description));
      const marker = create("span", "shima-route-card__marker", "選択");

      button.appendChild(icon);
      button.appendChild(copy);
      button.appendChild(marker);
      routeGrid.appendChild(button);
    });

    const quick = create("div", "shima-start-quick");
    quick.appendChild(makeQuickButton("↻", "前回の続き", "continue"));
    quick.appendChild(makeQuickButton("☆", "お気に入り", "favorites"));
    quick.appendChild(makeQuickButton("◆", "マイプリセット", "presets"));

    const status = create("p", "shima-start-status", "ルートを選ぶと、次に見る棚を光で案内します。");
    status.id = "shima-start-status";
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");

    body.appendChild(routeGrid);
    body.appendChild(quick);
    body.appendChild(status);
    deck.appendChild(header);
    deck.appendChild(body);

    search.insertAdjacentElement("afterend", deck);

    ui.deck = deck;
    ui.deckBody = body;
    ui.deckToggle = toggle;
    ui.currentRoute = current;
    ui.routeGrid = routeGrid;
    ui.status = status;
    ui.continueButton = quick.querySelector('[data-shima-action="continue"]');
    applyDeckState();
    return true;
  }

  function makeQuickButton(icon, label, action) {
    const button = create("button", "shima-start-quick__button");
    button.type = "button";
    button.dataset.shimaAction = action;
    button.appendChild(create("span", "", icon));
    button.appendChild(document.createTextNode(" " + label));
    return button;
  }

  function createRouteNavigation() {
    if (!ui.deck || document.getElementById("shima-route-navigation")) return false;

    const navigation = create("section", "shima-route-navigation");
    navigation.id = "shima-route-navigation";
    navigation.setAttribute("aria-labelledby", "shima-route-navigation-title");

    const header = create("div", "shima-route-navigation__header");
    const titleWrap = create("div", "shima-route-navigation__title");
    titleWrap.appendChild(create("span", "shima-nav-eyebrow", "CREATION ROUTE"));
    const title = create("strong", "", "制作航路");
    title.id = "shima-route-navigation-title";
    titleWrap.appendChild(title);
    const progress = create("span", "shima-route-progress", "0 / 7");
    header.appendChild(titleWrap);
    header.appendChild(progress);

    const list = create("div", "shima-route-navigation__list");
    list.setAttribute("role", "list");
    const hint = create("p", "shima-route-navigation__hint");

    navigation.appendChild(header);
    navigation.appendChild(list);
    navigation.appendChild(hint);
    ui.deck.insertAdjacentElement("afterend", navigation);

    ui.routeNav = navigation;
    ui.routeNavList = list;
    ui.routeProgress = progress;
    ui.routeHint = hint;
    return true;
  }

  function enhanceMobileSwitch() {
    const navigation = document.getElementById("zero-mobile-view-switch");
    if (!navigation) return false;

    const shelf = navigation.querySelector('[data-zero-mobile-view="shelf"]');
    const output = navigation.querySelector('[data-zero-mobile-view="output"]');
    if (!shelf || !output) return false;

    if (!document.getElementById("shima-mobile-selected-view")) {
      shelf.textContent = "☷ 棚";

      const oldCount = output.querySelector("#zero-mobile-selection-count");
      output.textContent = "❄ 出力 ";
      if (oldCount) output.appendChild(oldCount);

      const selected = create("button", "", "◉ 選択中 ");
      selected.type = "button";
      selected.id = "shima-mobile-selected-view";
      selected.dataset.shimaMobileView = "selected";
      selected.setAttribute("aria-pressed", "false");
      const count = create("span", "", "0");
      count.id = "shima-mobile-selected-count";
      selected.appendChild(count);
      navigation.insertBefore(selected, output);

      ui.mobileSelected = selected;
      ui.mobileSelectedCount = count;
    } else {
      ui.mobileSelected = document.getElementById("shima-mobile-selected-view");
      ui.mobileSelectedCount = document.getElementById("shima-mobile-selected-count");
    }

    ui.mobileSwitch = navigation;
    if (!shelf.__shimaNavigationBound) {
      shelf.__shimaNavigationBound = true;
      shelf.addEventListener("click", function () { applyMobileView("shelf", true, false); });
    }
    if (!output.__shimaNavigationBound) {
      output.__shimaNavigationBound = true;
      output.addEventListener("click", function () { applyMobileView("output", true, false); });
    }
    applyMobileView(state.mobileView, false, true);
    return true;
  }

  function applyDeckState() {
    if (!ui.deck) return;
    const route = ROUTES[state.route];
    ui.deck.classList.toggle("is-collapsed", state.collapsed);
    ui.deckToggle.textContent = state.collapsed ? "入口を開く" : "入口をたたむ";
    ui.deckToggle.setAttribute("aria-expanded", String(!state.collapsed));
    ui.currentRoute.textContent = route ? route.icon + " " + route.label : "ルート未選択";
    ui.routeGrid.querySelectorAll("[data-shima-route]").forEach(function (button) {
      const active = button.dataset.shimaRoute === state.route;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
      const marker = button.querySelector(".shima-route-card__marker");
      if (marker) marker.textContent = active ? "航路中" : "選択";
    });
  }

  function selectedContext() {
    const selected = Array.from(document.querySelectorAll('#sections input[type="checkbox"]:checked:not([data-zero-ignore="1"])'));
    const bySection = new Map();
    selected.forEach(function (input) {
      const id = sectionIdForInput(input);
      if (id) bySection.set(id, (bySection.get(id) || 0) + 1);
    });
    return { selected: selected, bySection: bySection };
  }

  function sectionIdForInput(input) {
    const section = input.closest('.section[id^="list-"]') || input.closest('[id^="list-"]');
    return section && section.id ? section.id : "";
  }

  function countStage(stage, context) {
    if (stage.custom === "output") {
      const output = document.getElementById("out");
      return output && output.value.trim() ? 1 : 0;
    }
    if (stage.custom === "registered") {
      const input = document.getElementById("ext-char-name-input");
      const inputCount = input && input.value.trim() ? 1 : 0;
      return inputCount + sumTargets(stage.targets, context.bySection);
    }

    const matched = new Set();
    stage.targets.forEach(function (id) {
      context.selected.forEach(function (input) {
        if (sectionIdForInput(input) === id) matched.add(input);
      });
    });
    if (stage.subjectPattern) {
      context.selected.forEach(function (input) {
        const value = [input.value, input.dataset && input.dataset.val, input.getAttribute("data-en")].filter(Boolean).join(" ");
        if (stage.subjectPattern.test(value)) matched.add(input);
      });
    }
    return matched.size;
  }

  function sumTargets(targets, map) {
    return targets.reduce(function (sum, id) { return sum + (map.get(id) || 0); }, 0);
  }

  function refreshNavigation() {
    if (!state.mounted || !ui.routeNavList) return;
    const route = ROUTES[state.route] || ROUTES.solo;
    const context = selectedContext();
    const results = route.stages.map(function (key) {
      const stage = STAGES[key];
      const count = countStage(stage, context);
      return { key: key, stage: stage, count: count, complete: count > 0 };
    });

    let currentIndex = results.findIndex(function (item) { return !item.complete; });
    if (currentIndex < 0) currentIndex = results.length - 1;
    const completeCount = results.filter(function (item) { return item.complete; }).length;

    ui.routeNavList.textContent = "";
    results.forEach(function (item, index) {
      const button = create("button", "shima-route-stage");
      button.type = "button";
      button.dataset.shimaStage = item.key;
      button.dataset.shimaStageIndex = String(index);
      button.classList.toggle("is-complete", item.complete);
      button.classList.toggle("is-current", index === currentIndex);
      button.setAttribute("role", "listitem");
      button.setAttribute("aria-label", (index + 1) + ". " + item.stage.label + "、" + item.stage.caption);

      const number = create("span", "shima-route-stage__number", item.complete ? "✓" : String(index + 1));
      const copy = create("span", "shima-route-stage__copy");
      copy.appendChild(create("strong", "", item.stage.label));
      copy.appendChild(create("small", "", item.stage.custom === "output" ? (item.complete ? "生成済み" : "未生成") : item.count + "件"));
      button.appendChild(number);
      button.appendChild(copy);
      ui.routeNavList.appendChild(button);
    });

    ui.routeProgress.textContent = completeCount + " / " + results.length;
    ui.routeProgress.classList.toggle("is-complete", completeCount === results.length);
    const current = results[currentIndex];
    if (completeCount === results.length) {
      ui.routeHint.textContent = "航路完成。出力を確認し、必要なら棚へ戻って調整できます。";
    } else {
      ui.routeHint.textContent = "次は「" + current.stage.label + "」へ — " + current.stage.caption;
    }

    ui.continueButton.disabled = context.selected.length === 0;
    updateRouteHighlights(results, currentIndex);
    updateSelectionCount(context.selected.length);
  }

  function updateRouteHighlights(results, currentIndex) {
    document.querySelectorAll(".shima-route-target, .shima-route-current").forEach(function (element) {
      element.classList.remove("shima-route-target", "shima-route-current");
    });

    let currentMarked = false;
    results.forEach(function (item, index) {
      item.stage.targets.forEach(function (id) {
        const target = document.getElementById(id);
        const section = target && (target.classList.contains("section") ? target : target.closest(".section"));
        if (!section) return;
        section.classList.add("shima-route-target");
        if (index === currentIndex && !currentMarked) {
          section.classList.add("shima-route-current");
          currentMarked = true;
        }
      });
    });
  }

  function scheduleRefresh(delay) {
    clearTimeout(state.refreshTimer);
    state.refreshTimer = setTimeout(refreshNavigation, delay === undefined ? 100 : delay);
  }

  function setRoute(key, announceChange) {
    if (!ROUTES[key]) return;
    state.route = key;
    persist(STORAGE.route, key);
    applyDeckState();
    refreshNavigation();
    if (announceChange !== false) {
      announce("「" + ROUTES[key].label + "」航路を表示しました。タグはまだ変更していません。");
    }
  }

  function announce(message) {
    if (!ui.status) return;
    ui.status.textContent = message;
    ui.status.classList.remove("is-flash");
    void ui.status.offsetWidth;
    ui.status.classList.add("is-flash");
  }

  function clearSearchAndFilters() {
    const search = document.querySelector("#ui-search-bar input");
    if (search && search.value) {
      search.value = "";
      search.dispatchEvent(new Event("input", { bubbles: true }));
    }
    ["zero-selected-filter", "zero-favorites-filter"].forEach(function (id) {
      const button = document.getElementById(id);
      if (button && button.getAttribute("aria-pressed") === "true") button.click();
    });
  }

  function openAncestors(element) {
    let current = element;
    while (current && current !== document.body) {
      if (current.tagName === "DETAILS") current.open = true;
      current = current.parentElement;
    }
  }

  function jumpToStage(stageKey) {
    const stage = STAGES[stageKey];
    if (!stage) return;

    if (stage.custom === "output") {
      applyMobileView("output", true, true);
      const output = document.getElementById("out");
      if (output) {
        output.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(function () { output.focus({ preventScroll: true }); }, 320);
      }
      announce("組み上がったプロンプトの確認へ移動しました。");
      return;
    }

    clearSearchAndFilters();
    applyMobileView("shelf", true, true);
    const target = stage.targets.map(function (id) { return document.getElementById(id); }).find(Boolean);
    if (!target) {
      announce("この航路に対応する棚は、現在の構成では見つかりませんでした。");
      return;
    }

    openAncestors(target);
    if (target.tagName === "DETAILS") target.open = true;
    const outer = target.classList.contains("section")
      ? Array.from(target.children).find(function (child) { return child.tagName === "DETAILS"; }) || target.querySelector("details")
      : null;
    if (outer) outer.open = true;
    target.classList.add("shima-route-jump-highlight");
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(function () { target.classList.remove("shima-route-jump-highlight"); }, 1900);
    announce("「" + stage.label + "」の棚へ移動しました。");
  }

  function continueWork() {
    const first = document.querySelector('#sections input[type="checkbox"]:checked:not([data-zero-ignore="1"])');
    if (!first) {
      announce("現在の選択はまだありません。制作ルートから始めましょう。");
      return;
    }

    if (window.matchMedia && window.matchMedia("(max-width: 700px)").matches) {
      applyMobileView("selected", true, true);
      announce("現在の装備一覧を開きました。");
      return;
    }

    clearSearchAndFilters();
    openAncestors(first);
    const target = first.closest("label") || first;
    target.classList.add("shima-route-jump-highlight");
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(function () { target.classList.remove("shima-route-jump-highlight"); }, 1900);
    announce("前回選んだ項目へ戻りました。");
  }

  function openFavorites() {
    const selected = document.getElementById("zero-selected-filter");
    const favorites = document.getElementById("zero-favorites-filter");
    if (selected && selected.getAttribute("aria-pressed") === "true") selected.click();
    if (favorites && favorites.getAttribute("aria-pressed") !== "true") favorites.click();
    applyMobileView("shelf", true, true);
    if (favorites) favorites.scrollIntoView({ behavior: "smooth", block: "center" });
    announce("お気に入りだけを表示しました。");
  }

  function openPresets() {
    if (window.ZeroAssist && typeof window.ZeroAssist.openPresets === "function") {
      window.ZeroAssist.openPresets();
      announce("マイプリセットを開きました。");
    }
  }

  function updateSelectionCount(count) {
    if (ui.mobileSelectedCount) ui.mobileSelectedCount.textContent = String(count);
  }

  function applyMobileView(view, shouldPersist, delegateToZero) {
    const next = view === "selected" ? "selected" : view === "output" ? "output" : "shelf";
    state.mobileView = next;

    if (delegateToZero && window.ZeroAssist && typeof window.ZeroAssist.setMobileView === "function") {
      window.ZeroAssist.setMobileView(next === "selected" ? "shelf" : next);
    }

    document.body.dataset.shimaMobileView = next;
    if (next === "selected") document.body.dataset.zeroMobileView = "selected";
    if (shouldPersist !== false) persist(STORAGE.mobileView, next);
    syncMobileButtons();
    scheduleRefresh(60);
  }

  function syncMobileButtons() {
    if (!ui.mobileSwitch) return;
    ui.mobileSwitch.querySelectorAll("[data-zero-mobile-view], [data-shima-mobile-view]").forEach(function (button) {
      const view = button.dataset.shimaMobileView || button.dataset.zeroMobileView;
      const active = view === state.mobileView;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function bindEvents() {
    document.addEventListener("click", function (event) {
      if (event.target.closest && event.target.closest("#resetBtn")) return;
      const routeButton = event.target.closest && event.target.closest("[data-shima-route]");
      if (routeButton) {
        event.preventDefault();
        setRoute(routeButton.dataset.shimaRoute, true);
        return;
      }

      const stageButton = event.target.closest && event.target.closest("[data-shima-stage]");
      if (stageButton) {
        event.preventDefault();
        jumpToStage(stageButton.dataset.shimaStage);
        return;
      }

      const selectedView = event.target.closest && event.target.closest('[data-shima-mobile-view="selected"]');
      if (selectedView) {
        event.preventDefault();
        applyMobileView("selected", true, true);
        return;
      }

      const zeroView = event.target.closest && event.target.closest("#zero-mobile-view-switch [data-zero-mobile-view]");
      if (zeroView) {
        const view = zeroView.dataset.zeroMobileView === "output" ? "output" : "shelf";
        setTimeout(function () { applyMobileView(view, true, false); }, 0);
        return;
      }

      const action = event.target.closest && event.target.closest("[data-shima-action]");
      if (!action) {
        scheduleRefresh(180);
        return;
      }

      event.preventDefault();
      switch (action.dataset.shimaAction) {
        case "toggle-deck":
          state.collapsed = !state.collapsed;
          persist(STORAGE.collapsed, state.collapsed);
          applyDeckState();
          break;
        case "continue":
          continueWork();
          break;
        case "favorites":
          openFavorites();
          break;
        case "presets":
          openPresets();
          break;
      }
    });

    document.addEventListener("change", function () {
      if (window.__SHIMA_BULK_RESET__) return;
      scheduleRefresh(40);
    });
    document.addEventListener("builderResetAll", function () { scheduleRefresh(0); });
    document.addEventListener("input", function (event) {
      if (event.target && (event.target.id === "out" || event.target.id === "ext-char-name-input")) scheduleRefresh(90);
    });
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) scheduleRefresh(0);
    });
  }

  function observeSelectionTray() {
    const chips = document.getElementById("zero-selection-chips");
    if (!chips || state.selectionObserver) return;
    state.selectionObserver = new MutationObserver(function () { scheduleRefresh(60); });
    state.selectionObserver.observe(chips, { childList: true });
  }

  function mount() {
    if (state.mounted) return true;
    const ready = document.getElementById("sections") &&
      document.getElementById("ui-search-bar") &&
      document.getElementById("zero-assist-toolbar") &&
      document.getElementById("zero-selection-tray") &&
      document.getElementById("zero-mobile-view-switch") &&
      window.ZeroAssist;
    if (!ready) return false;

    state.mounted = true;
    createStartDeck();
    createRouteNavigation();
    enhanceMobileSwitch();
    bindEvents();
    observeSelectionTray();
    applyDeckState();
    refreshNavigation();
    setTimeout(function () { scheduleRefresh(0); }, 700);
    setTimeout(function () { scheduleRefresh(0); }, 1800);
    setTimeout(function () { scheduleRefresh(0); }, 3600);

    window.ShimaNavigation = {
      version: VERSION,
      setRoute: function (key) { setRoute(key, true); },
      setMobileView: function (view) { applyMobileView(view, true, true); },
      refresh: function () { refreshNavigation(); },
      getState: function () {
        return {
          route: state.route,
          collapsed: state.collapsed,
          mobileView: state.mobileView,
          selected: document.querySelectorAll('#sections input[type="checkbox"]:checked:not([data-zero-ignore="1"])').length
        };
      }
    };

    window.dispatchEvent(new CustomEvent("shimaNavigationMounted", { detail: { version: VERSION } }));
    return true;
  }

  function boot(attempt) {
    if (mount()) return;
    if (attempt > 120) return;
    setTimeout(function () { boot(attempt + 1); }, 180);
  }

  window.addEventListener("zeroAssistMounted", function () { boot(0); }, { once: true });
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { boot(0); }, { once: true });
  } else {
    boot(0);
  }
})();
