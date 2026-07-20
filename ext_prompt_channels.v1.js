(function(){
  "use strict";

  if(window.__SHIMA_PROMPT_CHANNELS_V1__) return;
  window.__SHIMA_PROMPT_CHANNELS_V1__ = true;

  const VERSION = 53;
  const KEY = "quality_preset";
  const POSITIVE_EXPRESSION_PRESETS = [
    {
      key:"pixel-art",
      label:"🟪 ドット絵・16bit表現",
      val:"pixel art, low resolution, limited color palette, color dithering, hard pixel edges, nearest-neighbor scaling, sprite art, retro game graphics",
      desc:"解像度の低さや色数制限を欠点ではなく、意図したドット絵表現としてPositiveへ出力します。"
    },
    {
      key:"retro-anime",
      label:"📺 旧アニメ・セル画放送",
      val:"retro anime, 1980s anime style, cel animation, hand-painted cels, limited animation, analog film grain, faded colors, vintage broadcast look",
      desc:"セル画、フィルム粒子、退色を含む旧アニメ風の見た目をPositiveへ出力します。"
    },
    {
      key:"vhs-jpeg",
      label:"📼 VHS・JPEG劣化",
      val:"low quality, VHS artifacts, analog video noise, scanlines, tape distortion, chromatic aberration, jpeg artifacts, compression artifacts",
      desc:"low qualityや圧縮ノイズを、映像・画像の意図的な経年劣化としてPositiveへ出力します。"
    },
    {
      key:"early-game-cg",
      label:"🕹 昔のゲームCG・初期3D",
      val:"low quality, retro game CG, early 3D graphics, low-poly model, low-resolution textures, limited color depth, texture warping, jagged edges",
      desc:"初期3D、低解像度テクスチャ、荒い輪郭を昔のゲームCG表現としてPositiveへ出力します。"
    },
    {
      key:"surreal-anatomy",
      label:"🫧 意図的異形・人体実験表現",
      val:"bad anatomy, deformed proportions, mutated anatomy, asymmetrical body, disjointed limbs, extra limbs, surreal body distortion, uncanny anatomy",
      desc:"人体の崩れや非対称を、異形・シュール・実験表現として意図的にPositiveへ出力します。"
    }
  ];
  const POSITIVE_SUPPRESSION_GROUPS = [
    {
      key:"text-free",
      label:"文字・ロゴを置かない状態",
      items:[
        { key:"no-text", label:"文字なし", val:"no text", desc:"文字を置かない状態をPositive側の条件として指定します。" },
        { key:"textless", label:"文字要素なし", val:"textless", desc:"文字のない絵としてPositive側へ指定します。" },
        { key:"no-logo", label:"ロゴなし", val:"no logo", desc:"ロゴのない状態をPositive側へ指定します。" },
        { key:"logo-free", label:"ロゴ要素なし", val:"logo-free", desc:"ロゴを含まないデザインとしてPositive側へ指定します。" },
        { key:"no-watermark", label:"透かしなし", val:"no watermark", desc:"透かしのない状態をPositive側へ指定します。" }
      ]
    },
    {
      key:"scene-free",
      label:"群衆・小物を置かない状態",
      items:[
        { key:"no-crowd", label:"群衆なし", val:"no crowd", desc:"群衆を置かない構成としてPositive側へ指定します。" },
        { key:"no-bg-characters", label:"背景人物なし", val:"no background characters", desc:"背景人物のいない構成としてPositive側へ指定します。" },
        { key:"no-props", label:"小物なし", val:"no props", desc:"余計な小物を置かない状態としてPositive側へ指定します。" },
        { key:"unarmed", label:"武器を持たない", val:"unarmed", desc:"武器を所持していない状態としてPositive側へ指定します。" },
        { key:"bareheaded", label:"帽子・頭装備なし", val:"bareheaded", desc:"頭装備のない状態としてPositive側へ指定します。" }
      ]
    }
  ];

  const NEGATIVE_PRESETS = [
    {
      key:"basic",
      label:"基本破綻防止",
      val:"low quality, worst quality, out of focus, ugly, error, jpeg artifacts, lowres, blurry",
      desc:"定番の画質低下・ノイズ・ピンぼけをNegative専用欄で抑えます。bokehは含めません。"
    },
    {
      key:"anatomy",
      label:"人体崩壊防止",
      val:"bad anatomy, long neck, deformed, mutated, disfigured, malformed hands, missing limb, floating limbs, disconnected limbs, extra limb, missing fingers, extra fingers, liquid fingers, poorly drawn hands, mutation",
      desc:"手・指・四肢・体の破綻をNegative専用欄で抑えます。"
    },
    {
      key:"text-logo",
      label:"文字・ロゴ・透かし除去",
      val:"text, watermark, signature, username, logo, qr code, bar code",
      desc:"文字、署名、ロゴ、コード類をNegative専用欄でまとめて抑えます。"
    },
    {
      key:"focus",
      label:"焦点・ボケ抑制",
      val:"out of focus, blurry, motion blur, bokeh, shallow depth of field",
      desc:"ピンぼけやボケ表現を避けたい時だけ使うNegative専用セットです。"
    },
    {
      key:"background-people",
      label:"背景人物・余分な人物除去",
      val:"crowd, background characters, extra person, duplicate person, cloned face, photobomber",
      desc:"背景の群衆、余分な人物、人物複製をNegative専用欄で抑えます。"
    },
    {
      key:"eye-highlight",
      label:"目のハイライト抑制",
      val:"eye highlight, reflection, sparkle, light particles, bright eyes, beautiful detailed eyes, happy, vibrant eyes",
      desc:"目の反射や輝きをNegative専用欄で抑え、無機質な目へ寄せます。"
    }
  ];

  const NEGATIVE_WORD_GROUPS = [
    {
      key:"quality",
      label:"画質・品質の破綻",
      items:[
        ["low-quality","低品質","low quality"],
        ["worst-quality","最低品質","worst quality"],
        ["jpeg","JPEGノイズ","jpeg artifacts"],
        ["blurry","ぼやけ","blurry"],
        ["lowres","低解像度","lowres"],
        ["error","エラー","error"],
        ["pixelated","ピクセル化","pixelated"]
      ]
    },
    {
      key:"anatomy",
      label:"人体・手指の破綻",
      items:[
        ["bad-anatomy","崩れた解剖学","bad anatomy"],
        ["bad-hands","崩れた手","bad hands"],
        ["malformed-hands","奇形の手","malformed hands"],
        ["missing-fingers","欠損した指","missing fingers"],
        ["extra-fingers","余分な指","extra fingers"],
        ["long-neck","長い首","long neck"],
        ["deformed","変形","deformed"],
        ["mutated","突然変異","mutated"],
        ["floating-limbs","浮遊する肢","floating limbs"],
        ["extra-limbs","余分な手足","extra limbs"]
      ]
    },
    {
      key:"unwanted",
      label:"文字・透かし・不要物",
      items:[
        ["text","テキスト","text"],
        ["watermark","透かし","watermark"],
        ["signature","署名","signature"],
        ["username","ユーザー名","username"],
        ["logo","ロゴ","logo"],
        ["qr","QRコード","qr code"],
        ["barcode","バーコード","bar code"]
      ]
    },
    {
      key:"eyes",
      label:"目の反射・輝き",
      items:[
        ["eye-highlight","目のハイライト","eye highlight"],
        ["reflection","目の反射","reflection"],
        ["sparkle","キラキラ・輝き","sparkle"],
        ["light-particles","光の粒子","light particles"],
        ["beautiful-eyes","美しい目","beautiful detailed eyes"],
        ["bright-eyes","明るい目","bright eyes"]
      ]
    },
    {
      key:"focus",
      label:"焦点・ボケを抑える",
      items:[
        ["out-of-focus","ピンぼけ","out of focus"],
        ["focus-blurry","全体のぼやけ","blurry"],
        ["bokeh","ボケ表現","bokeh"]
      ]
    }
  ];

  const state = { mounted:false, timer:0, lastScan:null };
  const ui = {};

  function create(tag, className, text){
    const node = document.createElement(tag);
    if(className) node.className = className;
    if(text != null) node.textContent = String(text);
    return node;
  }

  function qsAll(root, selector){
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }

  function cleanText(value){
    return String(value || "").replace(/[★☆]/g, "").replace(/\s+/g, " ").trim();
  }

  function splitPrompt(text){
    const result = [];
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
        if(buffer.trim()) result.push(buffer.trim());
        buffer = "";
      }else buffer += char;
    }
    if(buffer.trim()) result.push(buffer.trim());
    return result;
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

  function valueOf(input){
    return input && input.dataset ? input.dataset.val || input.dataset.en || "" : "";
  }

  function safeKey(value){
    return String(value || "item").toLowerCase().replace(/[^a-z0-9_-]+/g, "-").replace(/^-+|-+$/g, "") || "item";
  }

  function makeNotice(tone, title, lines){
    const notice = create("div", "qp-v51-notice");
    notice.dataset.tone = tone;
    notice.appendChild(create("strong", "", title));
    (lines || []).forEach(function(line){ notice.appendChild(create("p", "", line)); });
    return notice;
  }

  function makeShelf(id, title, badge, tone){
    const details = create("details", "qp-main-acc qp-v51-shelf");
    details.id = id;
    details.open = false;
    details.dataset.tone = tone;
    const summary = create("summary", "qp-v51-summary");
    summary.appendChild(create("span", "qp-v51-summary-title", title));
    const count = create("span", "qp-v51-summary-count", badge || "0選択");
    summary.appendChild(count);
    const content = create("div", "qp-section-content qp-v51-content");
    content.id = id + "-content";
    details.appendChild(summary);
    details.appendChild(content);
    return { root:details, content:content, count:count };
  }

  function makeItem(item, options){
    const opts = options || {};
    const label = create("label", "qp-item qp-v51-item");
    label.dataset.tone = opts.tone || "positive";
    const input = create("input");
    input.type = "checkbox";
    input.id = opts.idPrefix + "-" + safeKey(item.key || item.label);
    input.dataset.val = String(item.val || "");
    input.dataset.en = String(item.val || "");
    input.dataset.ja = String(item.label || item.val || "項目");
    input.dataset.label = String(item.label || item.val || "項目");
    input.dataset.outputChannel = opts.channel || "positive";
    input.dataset.promptIntent = opts.intent || "positive-expression";
    input.setAttribute("autocomplete", "off");

    const body = create("span", "qp-v51-item-body");
    const titleRow = create("span", "qp-v51-item-title-row");
    titleRow.appendChild(create("strong", "qp-v51-item-title", item.label || item.val));
    const badge = create("small", "qp-v51-route-badge", opts.badge || "POS");
    badge.dataset.tone = opts.tone || "positive";
    titleRow.appendChild(badge);
    body.appendChild(titleRow);
    body.appendChild(create("span", "qp-v51-item-value", item.val));
    if(item.desc) body.appendChild(create("span", "qp-v51-item-desc", item.desc));
    label.appendChild(input);
    label.appendChild(body);
    return label;
  }

  function makeGroup(title, items, options){
    const opts = options || {};
    const details = create("details", "qp-sub-acc qp-v51-group");
    details.open = false;
    const summary = create("summary", "qp-v51-group-summary");
    summary.appendChild(create("span", "", title));
    summary.appendChild(create("small", "", String((items || []).length)));
    details.appendChild(summary);
    const grid = create("div", "qp-content-grid qp-v51-grid");
    (items || []).forEach(function(item){ grid.appendChild(makeItem(item, opts)); });
    details.appendChild(grid);
    return details;
  }

  function titleNodeFor(label, input){
    const next = input && input.nextElementSibling;
    if(next){
      if(next.matches && next.matches(".qp-item-text")) return next;
      const leaves = qsAll(next, "div,span").filter(function(node){
        return !node.querySelector("div,span") && cleanText(node.textContent);
      });
      if(leaves.length) return leaves[0];
      if(cleanText(next.textContent)) return next;
    }
    const textNode = Array.prototype.find.call(label.childNodes, function(node){
      return node.nodeType === 3 && cleanText(node.textContent);
    });
    return textNode || null;
  }

  function decorateExistingDetails(details, options){
    if(!details) return;
    const opts = options || {};
    if(opts.summary){
      const summary = details.querySelector(":scope > summary");
      if(summary) summary.textContent = opts.summary;
    }
    qsAll(details, 'input[type="checkbox"][data-val]').forEach(function(input, index){
      const label = input.closest("label");
      if(!label) return;
      let value = input.dataset.val || "";
      if(/\blowers\b/i.test(value)){
        value = value.replace(/\blowers\b/gi, "lowres");
        input.dataset.val = value;
      }
      const currentTitle = cleanText(input.dataset.ja || input.dataset.label || (titleNodeFor(label, input) || {}).textContent || "項目");
      const mapped = opts.rename && opts.rename[currentTitle] ? opts.rename[currentTitle] : currentTitle;
      const titleNode = titleNodeFor(label, input);
      if(titleNode){
        if(titleNode.nodeType === 3) titleNode.textContent = mapped;
        else titleNode.textContent = mapped;
      }
      input.id = input.id || opts.idPrefix + "-" + index;
      input.dataset.en = value;
      input.dataset.ja = mapped;
      input.dataset.label = mapped;
      input.dataset.outputChannel = "positive";
      input.dataset.promptIntent = opts.intent;
      label.classList.add("qp-v51-existing-item");
      label.dataset.tone = opts.tone;
      const oldBadge = label.querySelector(":scope > .qp-v51-route-badge");
      if(!oldBadge){
        const badge = create("small", "qp-v51-route-badge", opts.badge);
        badge.dataset.tone = opts.tone;
        label.appendChild(badge);
      }
      let desc = label.querySelector(":scope > .qp-item-desc");
      if(!desc){
        desc = create("div", "qp-item-desc");
        label.appendChild(desc);
      }
      desc.textContent = opts.description;
    });
  }

  function findGroupBySummary(root, pattern){
    return qsAll(root, ":scope > details").find(function(details){
      const summary = details.querySelector(":scope > summary");
      return summary && pattern.test(summary.textContent || "");
    }) || null;
  }

  function buildPositiveSuppression(peopleDetails){
    const shelf = makeShelf("qp-v51-positive-suppression", "🛡 Positive側の抑制・不在指定", "POSへ出力", "suppression");
    shelf.content.appendChild(makeNotice("suppression", "Positiveへ出力されます", [
      "存在しない状態そのものを、絵の条件としてモデルへ伝える棚です。",
      "Negative専用欄には送りません。"
    ]));
    if(peopleDetails){
      decorateExistingDetails(peopleDetails, {
        summary:"人物を出さない状態",
        idPrefix:"qp-v51-pos-suppression-people",
        intent:"positive-suppression",
        tone:"suppression",
        badge:"POS抑制",
        description:"Positiveへ出力し、人物が存在しない状態として指定します。"
      });
      shelf.content.appendChild(peopleDetails);
    }
    POSITIVE_SUPPRESSION_GROUPS.forEach(function(group){
      shelf.content.appendChild(makeGroup(group.label, group.items, {
        idPrefix:"qp-v51-pos-suppression-" + group.key,
        channel:"positive",
        intent:"positive-suppression",
        tone:"suppression",
        badge:"POS抑制"
      }));
    });
    ui.positiveSuppressionCount = shelf.count;
    return shelf.root;
  }

  function buildPositiveExpression(setDetails, wordDetails){
    const shelf = makeShelf("qp-v51-positive-expression", "🎞 Positive側の意図的劣化・実験表現", "POSへ出力", "expression");
    shelf.content.appendChild(makeNotice("expression", "Positiveへ出力されます", [
      "low quality、jpeg artifacts、bad anatomy等を、あえて古い絵・ドット絵・異形・実験表現として描かせます。",
      "既存のPositive側ワードは削除していません。"
    ]));

    shelf.content.appendChild(makeGroup("⚡ すぐ使える意図的表現セット", POSITIVE_EXPRESSION_PRESETS, {
      idPrefix:"qp-v53-pos-expression-preset",
      channel:"positive",
      intent:"positive-expression",
      tone:"expression",
      badge:"POS表現"
    }));

    const presetGroup = setDetails ? findGroupBySummary(setDetails, /ネガティブプリセット/) : null;
    if(presetGroup){
      decorateExistingDetails(presetGroup, {
        summary:"📦 意図的劣化セット（旧ネガティブプリセット）",
        idPrefix:"qp-v51-pos-expression-set",
        intent:"positive-expression",
        tone:"expression",
        badge:"POS表現",
        description:"Positiveへ出力し、劣化・崩れ・輝きなどを意図的な表現として描かせます。",
        rename:{
          "基本ネガティブ":"基本劣化・旧画質表現",
          "人体崩壊防止":"人体崩壊・異形実験",
          "目のハイライト完全除去":"目の反射・輝き表現"
        }
      });
      shelf.content.appendChild(presetGroup);
    }

    if(wordDetails){
      qsAll(wordDetails, ":scope > details").forEach(function(details, index){
        const summary = details.querySelector(":scope > summary");
        const text = summary ? summary.textContent || "" : "";
        let replacement = text;
        if(/Low Quality|画質・品質/.test(text)) replacement = "画質劣化・旧画像表現";
        else if(/Bad Anatomy|人体崩壊/.test(text)) replacement = "人体崩壊・異形表現";
        else if(/Unwanted|不要な要素/.test(text)) replacement = "文字・透かし・ノイズ表現";
        else if(/目のハイライト/.test(text)) replacement = "👁 目の反射・輝き表現";
        decorateExistingDetails(details, {
          summary:replacement,
          idPrefix:"qp-v51-pos-expression-word-" + index,
          intent:"positive-expression",
          tone:"expression",
          badge:"POS表現",
          description:"Positiveへ出力し、この特徴を意図的な劣化・レトロ・実験表現として描かせます。"
        });
        shelf.content.appendChild(details);
      });
    }
    ui.positiveExpressionCount = shelf.count;
    return shelf.root;
  }

  function buildNegativeShelf(){
    const shelf = makeShelf("qp-v51-negative-only", "🚫 Negative専用プロンプト", "NEG専用", "negative");
    shelf.content.appendChild(makeNotice("negative", "Negative欄だけに出力されます", [
      "Positive側には出力されません。",
      "同じ英語ワードがPositive側にも存在できます。選んだ棚によって出力先が決まります。"
    ]));

    shelf.content.appendChild(makeGroup("📦 まとめて破綻防止", NEGATIVE_PRESETS, {
      idPrefix:"qp-v51-neg-preset",
      channel:"negative",
      intent:"negative-only",
      tone:"negative",
      badge:"NEG専用"
    }));
    NEGATIVE_WORD_GROUPS.forEach(function(group){
      const items = group.items.map(function(item){
        return {
          key:item[0],
          label:item[1],
          val:item[2],
          desc:"Negative欄だけに出力し、「" + item[2] + "」を抑えます。"
        };
      });
      shelf.content.appendChild(makeGroup(group.label, items, {
        idPrefix:"qp-v51-neg-word-" + group.key,
        channel:"negative",
        intent:"negative-only",
        tone:"negative",
        badge:"NEG専用"
      }));
    });

    const status = create("div", "qp-v51-channel-status");
    status.id = "qp-v51-channel-status";
    status.appendChild(create("strong", "", "✓ 出力先衝突なし"));
    status.appendChild(create("p", "", "PositiveとNegativeに同じ語が入った時だけ警告します。自動解除はしません。"));
    shelf.content.insertBefore(status, shelf.content.children[1] || null);
    ui.channelStatus = status;
    ui.negativeCount = shelf.count;
    return shelf.root;
  }

  function selectedInputs(channel){
    const selector = channel === "negative"
      ? '#sections input[type="checkbox"][data-output-channel="negative"]:checked'
      : '#sections input[type="checkbox"]:checked:not([data-zero-ignore="1"]):not([data-output-channel="negative"])';
    return qsAll(document, selector).filter(function(input){ return !!valueOf(input); });
  }

  function tokensForInputs(inputs){
    const tokens = [];
    (inputs || []).forEach(function(input){
      splitPrompt(valueOf(input)).forEach(function(token){ if(token) tokens.push(token); });
    });
    return tokens;
  }

  function duplicateTerms(tokens){
    const counts = new Map();
    (tokens || []).forEach(function(token){
      const core = coreOf(token);
      if(core && core !== "break") counts.set(core, (counts.get(core) || 0) + 1);
    });
    return Array.from(counts.entries()).filter(function(entry){ return entry[1] > 1; });
  }

  function scanChannels(){
    const positiveTokens = tokensForInputs(selectedInputs("positive"));
    let negativeTokens = tokensForInputs(selectedInputs("negative"));
    qsAll(document, '#qp-v49-quality-control input[data-shima-negative-tag]:checked').forEach(function(input){
      if(input.dataset.shimaNegativeTag) negativeTokens.push(input.dataset.shimaNegativeTag);
    });
    const positiveCores = new Set(positiveTokens.map(coreOf).filter(Boolean));
    const collisions = [];
    const seen = new Set();
    negativeTokens.forEach(function(token){
      const core = coreOf(token);
      if(!core || !positiveCores.has(core) || seen.has(core)) return;
      seen.add(core);
      collisions.push(core);
    });
    return {
      positiveTokens:positiveTokens,
      negativeTokens:negativeTokens,
      positiveDuplicates:duplicateTerms(positiveTokens),
      negativeDuplicates:duplicateTerms(negativeTokens),
      collisions:collisions
    };
  }

  function updateCounts(){
    if(ui.positiveSuppressionCount){
      ui.positiveSuppressionCount.textContent = "選択 " + document.querySelectorAll('#qp-v51-positive-suppression input[type="checkbox"]:checked').length;
    }
    if(ui.positiveExpressionCount){
      ui.positiveExpressionCount.textContent = "選択 " + document.querySelectorAll('#qp-v51-positive-expression input[type="checkbox"]:checked').length;
    }
    if(ui.negativeCount){
      ui.negativeCount.textContent = "選択 " + document.querySelectorAll('#qp-v51-negative-only input[type="checkbox"]:checked').length;
    }
  }

  function renderScan(scan){
    state.lastScan = scan;
    if(!ui.channelStatus) return;
    const title = ui.channelStatus.querySelector("strong");
    const detail = ui.channelStatus.querySelector("p");
    if(scan.collisions.length){
      ui.channelStatus.dataset.tone = "warning";
      title.textContent = "⚠ Positive／Negativeの出力先衝突 " + scan.collisions.length + "語";
      detail.textContent = scan.collisions.slice(0, 8).join("、") + (scan.collisions.length > 8 ? " ほか" + (scan.collisions.length - 8) + "語" : "") + "。意図的なら残せます。自動では解除しません。";
    }else{
      ui.channelStatus.dataset.tone = "ok";
      title.textContent = "✓ 出力先衝突なし";
      const posDup = scan.positiveDuplicates.length;
      const negDup = scan.negativeDuplicates.length;
      detail.textContent = posDup || negDup
        ? "同じ出力内の重複：Positive " + posDup + "語・Negative " + negDup + "語。既存の診断でも確認できます。"
        : "PositiveとNegativeは独立しています。同じ語を両方で選んだ時だけ警告します。";
    }
  }

  function refresh(){
    updateCounts();
    renderScan(scanChannels());
    try {
      if(window.ShimaQualityControl && typeof window.ShimaQualityControl.refresh === "function"){
        window.ShimaQualityControl.refresh();
      }
    } catch(e) {}
  }

  function scheduleRefresh(delay){
    clearTimeout(state.timer);
    state.timer = setTimeout(function(){
      state.timer = 0;
      refresh();
    }, delay == null ? 40 : delay);
  }

  function addOutputRouteNote(){
    if(document.getElementById("qp-v51-output-route-note")) return;
    const tabs = document.getElementById("qp-v49-output-tabs");
    if(!tabs || !tabs.parentNode) return;
    const note = create("div", "qp-v51-output-route-note");
    note.id = "qp-v51-output-route-note";
    note.appendChild(create("span", "", "POS：通常語＋POS抑制＋POS表現"));
    note.appendChild(create("span", "", "NEG：NEG専用のみ"));
    tabs.insertAdjacentElement("beforebegin", note);
  }

  function ensureStyles(){
    if(document.getElementById("qp-v51-prompt-channel-style")) return;
    const style = create("style");
    style.id = "qp-v51-prompt-channel-style";
    style.textContent = `
      #qp-v51-positive-suppression,#qp-v51-positive-expression,#qp-v51-negative-only{
        margin:9px 0 !important; overflow:hidden !important; border:1px solid #b9d7e0 !important; border-radius:16px !important;
        background:#fff !important; box-shadow:0 6px 20px rgba(45,99,118,.08) !important;
      }
      .qp-v51-shelf > .qp-v51-summary{ display:flex !important; align-items:center !important; justify-content:space-between !important; gap:8px !important; padding:12px 14px !important; color:#173f4d !important; font-weight:950 !important; }
      .qp-v51-shelf[data-tone="suppression"] > .qp-v51-summary{ background:linear-gradient(135deg,#effcff,#e6f7ff) !important; }
      .qp-v51-shelf[data-tone="expression"] > .qp-v51-summary{ background:linear-gradient(135deg,#fffaf0,#fff1da) !important; }
      .qp-v51-shelf[data-tone="negative"] > .qp-v51-summary{ background:linear-gradient(135deg,#fff5f8,#ffe9f0) !important; }
      .qp-v51-summary-title{ min-width:0; font-size:14px; overflow-wrap:anywhere; }
      .qp-v51-summary-count{ flex:0 0 auto; padding:3px 8px; border:1px solid #bdd8e1; border-radius:999px; background:#fff; color:#426774; font-size:9px; }
      .qp-v51-content{ display:flex !important; grid-template-columns:none !important; flex-direction:column !important; gap:8px !important; padding:10px !important; }
      .qp-v51-notice{ padding:10px; border:1px solid #cfe2e8; border-radius:12px; background:#f8fcfd; }
      .qp-v51-notice[data-tone="suppression"]{ border-color:#abd7e5; background:#f0fbff; }
      .qp-v51-notice[data-tone="expression"]{ border-color:#e8cf9b; background:#fffaf0; }
      .qp-v51-notice[data-tone="negative"]{ border:2px solid #e4a9ba; background:#fff4f8; }
      .qp-v51-notice strong{ display:block; color:#194b5a; font-size:12px; }
      .qp-v51-notice[data-tone="negative"] strong{ color:#9b3557; font-size:13px; }
      .qp-v51-notice p{ margin:4px 0 0; color:#59727b; font-size:10px; line-height:1.5; }
      .qp-v51-notice[data-tone="negative"] p:first-of-type{ color:#b32955; font-weight:950; }
      .qp-v51-group{ margin:0 !important; border:1px solid #d7e6eb !important; border-radius:12px !important; background:#fbfeff !important; overflow:hidden; }
      .qp-v51-group > .qp-v51-group-summary{ display:flex !important; justify-content:space-between !important; gap:8px; padding:9px 10px !important; background:#f7fbfc !important; color:#315966 !important; font-size:11px !important; font-weight:900 !important; }
      .qp-v51-group-summary small{ display:grid; place-items:center; min-width:22px; min-height:22px; border-radius:999px; background:#e7f1f4; color:#5a7480; font-size:9px; }
      .qp-v51-grid{ display:grid !important; grid-template-columns:1fr !important; gap:7px !important; padding:8px !important; }
      #sections .qp-v51-item{ display:flex !important; align-items:flex-start !important; gap:9px !important; min-width:0; padding:9px !important; border:1px solid #d9e6ea !important; border-radius:11px !important; background:#fff !important; color:#244b59 !important; }
      #sections .qp-v51-item:has(input:checked),#sections .qp-v51-existing-item:has(input:checked){ border-color:#58b9b1 !important; background:#f0fcf8 !important; }
      .qp-v51-item > input{ flex:0 0 auto; width:18px; height:18px; margin:2px 0 0; accent-color:#279c9e; }
      .qp-v51-item-body{ display:flex; flex:1 1 auto; min-width:0; flex-direction:column; gap:3px; }
      .qp-v51-item-title-row{ display:flex; align-items:flex-start; justify-content:space-between; gap:7px; }
      .qp-v51-item-title{ color:#234957; font-size:11px; overflow-wrap:anywhere; }
      .qp-v51-item-value{ color:#476c78; font:9px/1.45 ui-monospace,SFMono-Regular,Consolas,monospace; overflow-wrap:anywhere; }
      .qp-v51-item-desc{ color:#6a8088; font-size:9px; line-height:1.45; }
      #sections .qp-v51-existing-item{ position:relative; }
      #sections .qp-v51-existing-item > .qp-v51-route-badge{ position:absolute; top:7px; right:7px; }
      #sections .qp-v51-existing-item > .qp-item-desc{ padding-right:62px; }
      .qp-v51-route-badge{ display:inline-flex; flex:0 0 auto; padding:3px 6px; border:1px solid #afd4df; border-radius:999px; background:#eefaff; color:#247087; font-size:8px; font-weight:950; font-style:normal; }
      .qp-v51-route-badge[data-tone="expression"]{ border-color:#e1c27e; background:#fff7df; color:#845b0b; }
      .qp-v51-route-badge[data-tone="negative"]{ border-color:#dfa6b8; background:#fff0f5; color:#a2385c; }
      .qp-v51-channel-status{ padding:9px 10px; border:1px solid #b9ddd4; border-radius:11px; background:#f1fcf8; }
      .qp-v51-channel-status[data-tone="warning"]{ border-color:#e4bd65; background:#fff8e8; }
      .qp-v51-channel-status strong{ display:block; color:#236453; font-size:11px; }
      .qp-v51-channel-status[data-tone="warning"] strong{ color:#8c5b08; }
      .qp-v51-channel-status p{ margin:4px 0 0; color:#687d84; font-size:9px; line-height:1.45; }
      .qp-v51-output-route-note{ display:flex; flex-wrap:wrap; gap:6px; margin:9px 0 6px; }
      .qp-v51-output-route-note span{ padding:4px 7px; border:1px solid #c8dfe6; border-radius:999px; background:#f3fbfd; color:#3d6573; font-size:9px; font-weight:850; }
      .qp-v51-output-route-note span:last-child{ border-color:#e1b8c6; background:#fff5f8; color:#91445f; }
      .zero-selection-chip__jump .zero-selection-chip__channel{ display:inline-flex !important; align-items:center; align-self:flex-start; padding:2px 5px; border:1px solid #b7d7df; border-radius:999px; background:#effafd; color:#237086; font-size:7px; font-weight:950; font-style:normal; line-height:1.2; }
      .zero-selection-chip__jump .zero-selection-chip__channel[data-tone="expression"]{ border-color:#e1c27e; background:#fff7df; color:#845b0b; }
      .zero-selection-chip__jump .zero-selection-chip__channel[data-tone="negative"]{ border-color:#dfa6b8; background:#fff0f5; color:#a2385c; }
      .zero-selection-chip[data-output-channel="negative"]{ border-color:#ddaabd !important; background-image:linear-gradient(110deg,#fff,#fff2f7) !important; }
      @media(min-width:760px){ .qp-v51-grid{ grid-template-columns:repeat(2,minmax(0,1fr)) !important; } }
      @media(max-width:430px){ .qp-v51-summary-title{ font-size:12px; } .qp-v51-summary-count{ font-size:8px; } }
    `;
    document.head.appendChild(style);
  }

  function mount(){
    if(state.mounted || document.getElementById("qp-v51-positive-suppression")) return;
    const oldSets = document.getElementById("qp-neg-sets");
    const oldWords = document.getElementById("qp-neg-words");
    const root = document.querySelector(".quality-preset-integrated");
    if(!oldSets || !oldWords || !root || !oldSets.parentNode) return;
    ensureStyles();

    const setContent = document.getElementById("qp-neg-sets-content");
    const wordContent = document.getElementById("qp-neg-words-content");
    const peopleDetails = wordContent ? findGroupBySummary(wordContent, /人物除外|People Exclusion/) : null;
    if(peopleDetails) peopleDetails.remove();

    const posSuppression = buildPositiveSuppression(peopleDetails);
    const posExpression = buildPositiveExpression(setContent, wordContent);
    const negative = buildNegativeShelf();
    const parent = oldSets.parentNode;
    const trigger = document.getElementById("qp-neg-trigger-wrap");
    parent.insertBefore(posSuppression, oldSets);
    parent.insertBefore(posExpression, oldSets);
    if(trigger) parent.insertBefore(trigger, oldSets);
    parent.insertBefore(negative, oldSets);
    oldSets.remove();
    oldWords.remove();
    state.mounted = true;
    addOutputRouteNote();
    bindGlobal();
    scheduleRefresh(0);
  }

  function bindGlobal(){
    if(document.documentElement.dataset.qpV51Bound === "1") return;
    document.documentElement.dataset.qpV51Bound = "1";
    document.addEventListener("change", function(event){
      const input = event.target;
      if(!input || !input.matches || !input.matches('#sections input[type="checkbox"]')) return;
      scheduleRefresh(20);
    }, true);
    document.addEventListener("builderResetAll", function(){ scheduleRefresh(30); }, true);
    window.addEventListener("builderHistoryRestored", function(){ scheduleRefresh(40); });
    document.addEventListener("builderQualityQuickPresetChanged", function(){ scheduleRefresh(30); }, true);
  }

  function init(){
    ensureStyles();
    mount();
    addOutputRouteNote();
    setTimeout(function(){ mount(); addOutputRouteNote(); }, 0);
    setTimeout(function(){ mount(); addOutputRouteNote(); refresh(); }, 320);
  }

  const API = { initUI:init, getTags:function(){ return []; } };
  window.ShimaPromptChannels = {
    scan:function(){ const scan = scanChannels(); renderScan(scan); return scan; },
    getNegativeTags:function(){ return tokensForInputs(selectedInputs("negative")); },
    getPositiveSuppressionTags:function(){
      return tokensForInputs(qsAll(document, '#qp-v51-positive-suppression input[type="checkbox"]:checked'));
    },
    refresh:refresh
  };

  if(typeof window.__registerPromptPart === "function") window.__registerPromptPart(KEY, VERSION, API);
  else document.addEventListener("DOMContentLoaded", init, { once:true });
})();
