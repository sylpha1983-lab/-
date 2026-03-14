(function(){
  "use strict";

  const VERSION = 32;
  const KEY = "attire";
  const CONTAINER_CLASS = "attire-v32-role-expansion";
  const BREAK_TOKEN = "BREAK";

  // Duo-only safety guard: current role split is intentionally limited to 1boy + 1girl.
  const MULTI_COUNT_RE = /^(?:[2-9]boys|[2-9]girls|boys|girls)$/i;

  const MALE_CATEGORIES = {
    "🤵 男性専用・正装 (Male Formal)": [
      { ja: "メンズスーツ", en: "men's business suit" },
      { ja: "三つ揃いスーツ", en: "three-piece suit" },
      { ja: "タキシード", en: "tuxedo" },
      { ja: "燕尾服", en: "tailcoat" },
      { ja: "執事服", en: "butler outfit" },
      { ja: "王子衣装", en: "prince outfit" },
      { ja: "王子礼装", en: "prince ceremonial uniform" },
      { ja: "ボディガードスーツ", en: "bodyguard suit" },
      { ja: "バーテンダーベスト", en: "bartender vest" },
      { ja: "探偵スーツ", en: "detective suit" }
    ],
    "🏫 男子制服・学園 (Boys Schoolwear)": [
      { ja: "男子ブレザー制服", en: "boys school blazer uniform" },
      { ja: "学ラン", en: "gakuran" },
      { ja: "夏服学ラン", en: "summer gakuran" },
      { ja: "詰襟制服", en: "stand-collar school uniform" },
      { ja: "男子ニットベスト制服", en: "boys sweater vest uniform" },
      { ja: "男子カーディガン制服", en: "boys cardigan school uniform" },
      { ja: "応援団学ラン", en: "ouendan gakuran" },
      { ja: "番長学ラン", en: "banchou gakuran" },
      { ja: "男子体育ジャージ", en: "boys track suit" },
      { ja: "男子野球部ユニフォーム", en: "boys baseball uniform" }
    ],
    "🪖 男性専用・職業/戦闘 (Male Duty & Combat)": [
      { ja: "男性軍服", en: "male military uniform" },
      { ja: "士官軍服", en: "officer military uniform" },
      { ja: "将校礼装", en: "officer ceremonial uniform" },
      { ja: "男性警察制服", en: "male police uniform" },
      { ja: "男性警備制服", en: "male security guard uniform" },
      { ja: "パイロット制服", en: "pilot uniform" },
      { ja: "整備士ツナギ", en: "mechanic jumpsuit" },
      { ja: "消防士装備", en: "firefighter gear" },
      { ja: "戦術オペレーター装備", en: "male tactical operator gear" },
      { ja: "スナイパースーツ", en: "sniper suit" }
    ],
    "⚔️ 男性専用・和装/戦士 (Male Traditional & Warrior)": [
      { ja: "侍装束", en: "samurai attire" },
      { ja: "羽織袴", en: "haori and hakama" },
      { ja: "新選組風隊服", en: "shinsengumi uniform" },
      { ja: "陰陽師狩衣", en: "male onmyoji robes" },
      { ja: "神官装束", en: "male priest robes" },
      { ja: "僧兵装束", en: "war monk attire" },
      { ja: "忍者装束", en: "male ninja outfit" },
      { ja: "武闘家装束", en: "male martial artist outfit" },
      { ja: "剣士コート", en: "swordsman coat" },
      { ja: "騎士礼装", en: "male knight uniform" }
    ],
    "🧥 男性専用・現代カジュアル (Male Casual)": [
      { ja: "男子ストリートウェア", en: "male streetwear" },
      { ja: "男子パーカーコーデ", en: "boys hoodie outfit" },
      { ja: "男子スタジャンコーデ", en: "boys varsity jacket outfit" },
      { ja: "男子レザージャケット", en: "men's leather jacket outfit" },
      { ja: "男子デニムジャケット", en: "men's denim jacket outfit" },
      { ja: "男子ロングコート", en: "men's long coat outfit" },
      { ja: "男子モッズコート", en: "men's mods coat" },
      { ja: "男子タートルニット", en: "men's turtleneck outfit" },
      { ja: "男子セットアップ", en: "men's setup outfit" },
      { ja: "男子アイドル衣装", en: "male idol costume" }
    ]
  };

  const FEMALE_CATEGORIES = {
    "👙 女性専用・水着/露出 (Female Swim & Revealing)": [
      { ja: "競泳水着(ハイレグ)", en: "competition swimsuit highleg" },
      { ja: "競泳水着", en: "competition swimsuit" },
      { ja: "スクール水着(旧)", en: "old school swimsuit" },
      { ja: "スクール水着", en: "school swimsuit" },
      { ja: "マイクロビキニ", en: "micro bikini" },
      { ja: "スリングショット", en: "slingshot swimsuit" },
      { ja: "モノキニ", en: "monokini" },
      { ja: "極小水着", en: "tiny swimwear" },
      { ja: "貝殻ビキニ", en: "shell bikini" },
      { ja: "チューブトップビキニ", en: "bandeau bikini" }
    ],
    "👗 女性専用・ドレス/花嫁 (Female Dresses & Bridal)": [
      { ja: "ドレス", en: "dress" },
      { ja: "ウェディングドレス", en: "wedding dress" },
      { ja: "舞踏会ドレス", en: "ballgown" },
      { ja: "イブニングドレス", en: "evening gown" },
      { ja: "パーティードレス", en: "party dress" },
      { ja: "プリンセスライン", en: "princess line dress" },
      { ja: "マーメイドドレス", en: "mermaid dress" },
      { ja: "ホルタードレス", en: "halter dress" },
      { ja: "ストラップレスドレス", en: "strapless dress" },
      { ja: "ボディコンドレス", en: "bodycon dress" }
    ],
    "🎀 女性専用・メイド/アイドル/可憐 (Female Cute Performance)": [
      { ja: "メイド服", en: "maid dress" },
      { ja: "バニースーツ", en: "bunny suit" },
      { ja: "アイドル衣装", en: "idol costume" },
      { ja: "女子チア衣装", en: "female cheerleader outfit" },
      { ja: "フィギュアスケート衣装", en: "figure skating dress" },
      { ja: "レースクイーン衣装", en: "race queen outfit" },
      { ja: "オフィスレディ制服", en: "office lady uniform" },
      { ja: "ウェイトレスエプロン", en: "waitress apron" },
      { ja: "CA制服", en: "flight attendant uniform" },
      { ja: "巫女装束", en: "miko attire" }
    ],
    "🏫 女性専用・学園/制服 (Girls Schoolwear)": [
      { ja: "セーラー服", en: "sailor uniform" },
      { ja: "女子ブレザー制服", en: "girls school blazer uniform" },
      { ja: "女子カーディガン制服", en: "girls cardigan school uniform" },
      { ja: "女子ニットベスト制服", en: "girls sweater vest uniform" },
      { ja: "ブルマ", en: "bloomers" },
      { ja: "体操服+ブルマ", en: "gym uniform, bloomers" },
      { ja: "女子水泳部水着", en: "girls swim club swimsuit" }
    ]
  };

  const MALE_SET = new Set();
  Object.values(MALE_CATEGORIES).forEach(items => items.forEach(item => MALE_SET.add(item.en.toLowerCase())));
  const FEMALE_SET = new Set();
  Object.values(FEMALE_CATEGORIES).forEach(items => items.forEach(item => FEMALE_SET.add(item.en.toLowerCase())));

  const ROLE_OVERRIDES = {
    "1boy": "male",
    "1girl": "female",
    "small girl": "female",
    "masculine male": "male",
    "female teacher": "female",
    "female spy": "female",
    "mature female": "female",
    "mature widow": "female",
    "widow": "female",
    "magical girl": "female",
    "bunny girl": "female",
    "beast girl": "female",
    "alien girl": "female",
    "dark elf warrior": "female",
    "princess knight": "female",
    "office lady uniform": "female",
    "flight attendant uniform": "female",
    "girls swim club swimsuit": "female",
    "gym uniform": "female",
    "bloomers": "female",
    "competition swimsuit highleg": "female",
    "competition swimsuit": "female",
    "old school swimsuit": "female",
    "school swimsuit": "female",
    "micro bikini": "female",
    "slingshot swimsuit": "female",
    "monokini": "female",
    "tiny swimwear": "female",
    "shell bikini": "female",
    "bandeau bikini": "female",
    "maid dress": "female",
    "maid apron": "female",
    "idol costume": "female",
    "idol-style outfit": "shared",
    "frilly dress": "female",
    "layered skirt": "female",
    "short layered skirt": "female",
    "pleated skirt": "female",
    "ribbon tie": "female",
    "soft feather hairclip": "female",
    "white and pastel blue frilly dress": "female",
    "female idol dress": "female",
    "female detective attire": "female",
    "cocktail waitress dress": "female",
    "female surgeon scrubs": "female",
    "miko attire": "female",
    "race queen outfit": "female",
    "figure skating dress": "female",
    "female cheerleader outfit": "female",
    "sailor uniform": "female",
    "girls school blazer uniform": "female",
    "girls cardigan school uniform": "female",
    "girls sweater vest uniform": "female",
    "male military uniform": "male",
    "bodyguard suit": "male",
    "butler outfit": "male",
    "prince outfit": "male",
    "prince ceremonial uniform": "male",
    "gakuran": "male",
    "male tactical operator gear": "male",
    "male police uniform": "male",
    "male security guard uniform": "male",
    "male priest robes": "male",
    "samurai attire": "male",
    "male ninja outfit": "male",
    "male martial artist outfit": "male",
    "male knight uniform": "male",
    "boys school blazer uniform": "male",
    "boys sweater vest uniform": "male",
    "boys cardigan school uniform": "male",
    "boys track suit": "male",
    "boys baseball uniform": "male",
    "male streetwear": "male",
    "male idol costume": "male",
    "idol performance suit": "male",
    "stage prince outfit": "male",
    "male detective coat": "male",
    "male bartender vest": "male",
    "male surgeon scrubs": "male",
    "men's business suit": "male"
  };

  const MALE_HINTS = [
    /\b1boy\b/i,
    /\bmale\b/i,
    /\bman\b/i,
    /\bboy\b/i,
    /\bmasculine\b/i,
    /\bprince\b/i,
    /\bbutler\b/i,
    /\bbodyguard\b/i,
    /\bmen'?s\b/i,
    /\bboys\b/i,
    /\bgakuran\b/i,
    /\bsamurai\b/i,
    /\bmale military\b/i,
    /\bmale police\b/i,
    /\bmale security\b/i,
    /\bmale priest\b/i,
    /\bmale ninja\b/i,
    /\bmale knight\b/i,
    /\bmale idol\b/i,
    /\bidol performance suit\b/i,
    /\bstage prince outfit\b/i,
    /\bmale detective coat\b/i,
    /\bmale bartender vest\b/i,
    /\bmale surgeon scrubs\b/i
  ];

  const FEMALE_HINTS = [
    /\b1girl\b/i,
    /\bfemale\b/i,
    /\bgirl\b/i,
    /\bwoman\b/i,
    /\bwidow\b/i,
    /\bmaid\b/i,
    /\bbunny girl\b/i,
    /\bmagical girl\b/i,
    /\bgyaru\b/i,
    /\bmiko\b/i,
    /\bsuccubus\b/i,
    /\bcourtesan\b/i,
    /\bbloomers\b/i,
    /\bcompetition swimsuit\b/i,
    /\bschool swimsuit\b/i,
    /\bbikini\b/i,
    /\bmonokini\b/i,
    /\bdress\b/i,
    /\bgown\b/i,
    /\bsailor uniform\b/i,
    /\bprincess knight\b/i,
    /\bdark elf warrior\b/i,
    /\bfemale teacher\b/i,
    /\bfemale spy\b/i,
    /\boffice lady\b/i,
    /\bflight attendant\b/i,
    /\bidol-style outfit\b/i,
    /\bfrilly dress\b/i,
    /\blayered skirt\b/i,
    /\bshort layered skirt\b/i,
    /\bpleated skirt\b/i,
    /\bribbon tie\b/i,
    /\bhairclip\b/i,
    /\bsoft feather hairclip\b/i,
    /\bpastel blue frilly dress\b/i,
    /\bwhite and pastel blue frilly dress\b/i,
    /\bfemale idol dress\b/i,
    /\bfemale detective attire\b/i,
    /\bcocktail waitress dress\b/i,
    /\bfemale surgeon scrubs\b/i
  ];

  const SHARED_HINTS = [
    /\bclassroom\b/i,/\bsunset\b/i,/\bchurch\b/i,/\baltar\b/i,/\bmoonlight\b/i,/\bneon\b/i,/\balley\b/i,
    /\bbed\b/i,/\blighting\b/i,/\bfog\b/i,/\bsmoke\b/i,/\btears\b/i,/\bblushing\b/i,/\bkissing\b/i,
    /\bromantic\b/i,/\bsize difference\b/i,/\bheight difference\b/i,/\bafter school\b/i,/\bonsen\b/i,/\btentacles\b/i
  ];

  function splitTags(str) {
    const s = String(str || "");
    const out = [];
    let buf = "";
    let depth = 0;
    for (let i = 0; i < s.length; i++) {
      const ch = s[i];
      if (ch === "(" || ch === "[" || ch === "{") depth++;
      if (ch === ")" || ch === "]" || ch === "}") depth = Math.max(0, depth - 1);
      if (ch === "," && depth === 0) {
        if (buf.trim()) out.push(buf.trim());
        buf = "";
      } else {
        buf += ch;
      }
    }
    if (buf.trim()) out.push(buf.trim());
    return out;
  }

  function norm(tag) {
    return String(tag || "")
      .replace(/[\(\)\[\]\{\}]/g, "")
      .replace(/:[\d\.]+%?/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  }

  function classifyGlobalTag(tag) {
    const n = norm(tag);
    if (!n) return "shared";
    if (ROLE_OVERRIDES[n]) return ROLE_OVERRIDES[n];
    if (MALE_SET.has(n)) return "male";
    if (FEMALE_SET.has(n)) return "female";
    if (MALE_HINTS.some(re => re.test(n))) return "male";
    if (FEMALE_HINTS.some(re => re.test(n))) return "female";
    if (SHARED_HINTS.some(re => re.test(n))) return "shared";
    return "shared";
  }

  function uniqPush(bucket, seen, tag) {
    const k = norm(tag);
    if (!k || seen.has(k)) return;
    seen.add(k);
    bucket.push(String(tag).trim());
  }

  function getSelectedRawTags() {
    try {
      if (!window.UI_REG || typeof window.UI_REG.getAllSelected !== "function") return [];
      const raw = window.UI_REG.getAllSelected();
      const tags = [];
      raw.forEach(item => {
        const inheritedRole = classifyGlobalTag(item);
        splitTags(item).forEach(t => {
          tags.push({ tag: t, inheritedRole: inheritedRole, source: item });
        });
      });
      return tags;
    } catch (_e) {
      return [];
    }
  }

  function hasMultiCount(tokens) {
    for (let i = 0; i < tokens.length; i++) {
      if (MULTI_COUNT_RE.test(norm(tokens[i]))) return true;
    }
    return false;
  }

  function rewritePromptForRoles() {
    const out = document.getElementById("out");
    if (!out) return;

    const selectedEntries = getSelectedRawTags();
    if (!selectedEntries.length) return;

    const selectedTags = selectedEntries.map(entry => entry.tag);
    const selectedNorms = new Set(selectedTags.map(norm).filter(Boolean));
    const currentTokens = splitTags(out.value || "");
    if (!currentTokens.length) return;
    if (hasMultiCount(currentTokens) || hasMultiCount(selectedTags)) return; // duo-only safety

    const externalTokens = [];
    currentTokens.forEach(t => {
      const n = norm(t);
      if (!n) return;
      if (!selectedNorms.has(n) && n !== "break") externalTokens.push(t);
    });

    const male = [], female = [], shared = [];
    const maleSeen = new Set(), femaleSeen = new Set(), sharedSeen = new Set();
    let has1boy = false, has1girl = false;

    currentTokens.forEach(t => {
      const n = norm(t);
      if (n === "1boy") has1boy = true;
      if (n === "1girl") has1girl = true;
    });

    selectedEntries.forEach(entry => {
      const tag = entry && entry.tag != null ? entry.tag : "";
      const n = norm(tag);
      if (!n || n === "break") return;
      if (n === "1boy") { has1boy = true; return; }
      if (n === "1girl") { has1girl = true; return; }
      let role = entry && entry.inheritedRole ? entry.inheritedRole : "shared";
      if (role !== "male" && role !== "female" && role !== "shared") role = "shared";
      if (role === "shared") role = classifyGlobalTag(tag);
      if (role === "male") uniqPush(male, maleSeen, tag);
      else if (role === "female") uniqPush(female, femaleSeen, tag);
      else uniqPush(shared, sharedSeen, tag);
    });

    const hasRoleful = male.length > 0 || female.length > 0;
    if (!(has1boy && has1girl && hasRoleful)) return;

    const final = [];
    const finalSeen = new Set();

    uniqPush(final, finalSeen, "1boy");
    male.forEach(t => uniqPush(final, finalSeen, t));
    final.push(BREAK_TOKEN);
    uniqPush(final, finalSeen, "1girl");
    female.forEach(t => uniqPush(final, finalSeen, t));

    externalTokens.forEach(t => {
      const role = classifyGlobalTag(t);
      if (role === "male") uniqPush(male, maleSeen, t);
      else if (role === "female") uniqPush(female, femaleSeen, t);
      else uniqPush(shared, sharedSeen, t);
    });

    const rebuilt = [];
    const rebuiltSeen = new Set();
    uniqPush(rebuilt, rebuiltSeen, "1boy");
    male.forEach(t => uniqPush(rebuilt, rebuiltSeen, t));
    rebuilt.push(BREAK_TOKEN);
    uniqPush(rebuilt, rebuiltSeen, "1girl");
    female.forEach(t => uniqPush(rebuilt, rebuiltSeen, t));

    if (shared.length) {
      rebuilt.push(BREAK_TOKEN);
      shared.forEach(t => uniqPush(rebuilt, rebuiltSeen, t));
    }

    const compact = [];
    for (let i = 0; i < rebuilt.length; i++) {
      const t = rebuilt[i];
      if (t === BREAK_TOKEN && (compact.length === 0 || compact[compact.length - 1] === BREAK_TOKEN)) continue;
      compact.push(t);
    }
    while (compact[compact.length - 1] === BREAK_TOKEN) compact.pop();

    out.value = compact.join(", ");
    out.dispatchEvent(new Event("input", { bubbles: true }));
    return;

  }

  function bindGenerateRewrite() {
    if (window.__ATTIRE_ROLE_ENGINE_BOUND__) return;
    window.__ATTIRE_ROLE_ENGINE_BOUND__ = true;
    document.addEventListener("click", function(e){
      const btn = e.target && e.target.closest ? e.target.closest("button") : null;
      if (!btn) return;
      const text = String(btn.textContent || "");
      if (!/生成|Generate/.test(text)) return;
      setTimeout(rewritePromptForRoles, 120);
    }, true);
  }

  function makeCheckbox(item) {
    const label = document.createElement("label");
    label.style.cssText = "display:flex; align-items:center; font-size:0.92em; cursor:pointer;";
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.dataset.en = item.en;
    cb.style.marginRight = "6px";
    label.appendChild(cb);
    label.appendChild(document.createTextNode(item.ja + " / " + item.en));
    return label;
  }

  function appendPack(root, titleText, titleStyle, categories, detailClass) {
    const sep = document.createElement("div");
    sep.style.cssText = "margin:18px 0 10px 0; border-top:2px dashed " + (titleStyle.border || "#3559e0") + "; text-align:center; color:" + (titleStyle.color || "#3559e0") + "; font-size:0.92em; font-weight:bold;";
    sep.textContent = titleText;
    root.appendChild(sep);

    Object.entries(categories).forEach(([cat, items]) => {
      const details = document.createElement("details");
      details.className = detailClass;
      details.style.cssText = "margin-bottom:6px; border:1px solid " + (titleStyle.box || "#8fb3ff") + "; border-radius:6px; background:#fff;";
      const summary = document.createElement("summary");
      summary.textContent = cat;
      summary.style.cssText = "font-weight:bold; padding:8px 10px; cursor:pointer; background:" + (titleStyle.bg || "#eef4ff") + "; color:" + (titleStyle.color || "#2442ad") + ";";
      details.appendChild(summary);
      const content = document.createElement("div");
      content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(160px, 1fr)); gap:6px;";
      items.forEach(item => content.appendChild(makeCheckbox(item)));
      details.appendChild(content);
      root.appendChild(details);
    });
  }

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-attire") || container;
      if (!parent) return;
      if (parent.querySelector("." + CONTAINER_CLASS)) return;

      const root = document.createElement("div");
      root.className = CONTAINER_CLASS;

      appendPack(root, "▼ 男性専用衣装・拡張パック (Male Attire Expansion) ▼", {
        border: "#3559e0", color: "#2442ad", box: "#8fb3ff", bg: "#eef4ff"
      }, MALE_CATEGORIES, "attire-cat attire-v31-male");

      appendPack(root, "▼ 女性専用衣装・判定強化パック (Female Attire Label Pack) ▼", {
        border: "#d94c8a", color: "#b0306c", box: "#f3a9c7", bg: "#fff0f6"
      }, FEMALE_CATEGORIES, "attire-cat attire-v31-female");

      const mountPoint = parent.querySelector(".section-content") || parent;
      mountPoint.appendChild(root);

      if (window.__outputTranslation && typeof window.__outputTranslation.register === "function") {
        const dict = {};
        Object.values(MALE_CATEGORIES).forEach(items => items.forEach(item => { dict[item.en] = item.ja; }));
        Object.values(FEMALE_CATEGORIES).forEach(items => items.forEach(item => { dict[item.en] = item.ja; }));
        window.__outputTranslation.register(dict);
      }
    },
    getTags() {
      const root = document.querySelector("." + CONTAINER_CLASS);
      if (!root) return [];
      const tags = [];
      root.querySelectorAll("input[type='checkbox']:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };

  function registerPartWhenReady(retry) {
    if (typeof window.__registerPromptPart === "function") {
      window.__registerPromptPart(KEY, VERSION, API);
      setTimeout(function(){
        try { if (typeof window.__triggerUIMount === "function") window.__triggerUIMount(); } catch(_e) {}
      }, 120);
      return;
    }
    if (retry < 80) setTimeout(function(){ registerPartWhenReady(retry + 1); }, 100);
  }

  registerPartWhenReady(0);
  bindGenerateRewrite();
  console.log("👗 Loaded: ./ext_attire_role_engine.js v32 (preset pair assist phase2)");
})();
