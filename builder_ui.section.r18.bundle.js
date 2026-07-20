
/* builder_ui.section.r18.bundle.js
   R-18 aggregator section: labels Japanese, output English
*/
(() => {
  const KEY = "r18";
  // IMPORTANT: builder_core.v1.js mounts parts by numeric version keys.
  // If we register a non-numeric version string, parseInt() becomes NaN and the UI never mounts.
  const VERSION = 1;

  // ---- Data: label(ja) / output(en)
  const GROUPS = [
    {
      titleJa: "NSFWフラグ・基本",
      items: [
        { ja: "NSFW", en: "nsfw" },
        { ja: "モザイク", en: "censored" },
        { ja: "無修正", en: "uncensored" },
        { ja: "露骨", en: "explicit" },
        { ja: "成人向け", en: "mature" },
      ],
    },
    {
      titleJa: "H-ロケーション",
      items: [
        { ja: "ラブホテル", en: "love hotel" },
        { ja: "マジックミラー号", en: "magic mirror van" },
        { ja: "野外露出", en: "public exhibition" },
        { ja: "お風呂・温泉", en: "bath, hot spring" },
        { ja: "公衆トイレ", en: "public restroom" },
        { ja: "放課後の教室", en: "after-school classroom" },
        { ja: "車内", en: "inside car" },
        { ja: "狭い部屋", en: "confined room" },
      ],
    },
    {
      titleJa: "男女・シチュエーション",
      items: [
        { ja: "純愛・見つめ合い", en: "mutual love, eye contact" },
        { ja: "体格差", en: "size difference" },
        { ja: "寝取られ（NTR）", en: "netorare, NTR" },
        { ja: "着衣セックス", en: "clothed sex" },
        { ja: "一夜の関係", en: "one-night stand" },
        { ja: "秘密の関係", en: "secret affair" },
      ],
    },
    {
      titleJa: "主導タイプ",
      items: [
        { ja: "主導｜制御された欲望", en: "lead, controlled desire" },
        { ja: "許容｜静かな受容", en: "allow, quiet acceptance" },
        { ja: "遊び｜からかいの距離", en: "play, teasing proximity" },
      ],
    },
    {
      titleJa: "距離・空気",
      items: [
        { ja: "近いが触れない", en: "close but not touching" },
        { ja: "呼吸の間に沈黙", en: "silence between breaths" },
        { ja: "狭い空間", en: "confined space" },
        { ja: "低照度の夜", en: "low light, night" },
        { ja: "黄昏の熱", en: "warm dusk heat" },
        { ja: "無時間（夢／虚）", en: "timeless, dreamlike" },
      ],
    },
    {
      titleJa: "強度",
      items: [
        { ja: "微か", en: "subtle" },
        { ja: "抑制", en: "restrained" },
        { ja: "徐々に上がる", en: "slowly escalating" },
        { ja: "切羽詰まる", en: "desperate" },
      ],
    },
    {
      titleJa: "R-18 表情・精神（目／口／呼吸）",
      items: [
        { ja: "あへ顔", en: "ahegao" },
        { ja: "ハート目", en: "heart-shaped pupils" },
        { ja: "虚ろ目", en: "vacant eyes" },
        { ja: "息荒い", en: "heavy breathing" },
        { ja: "噛みしめる口", en: "biting lip" },
        { ja: "よだれ", en: "drooling" },
        { ja: "涙目", en: "teary eyes" },
      ],
    },
    {
      titleJa: "触手・スライム（R-18）",
      items: [
        { ja: "触手", en: "tentacles" },
        { ja: "スライム", en: "slime" },
        { ja: "拘束", en: "bondage, restraint" },
        { ja: "粘液", en: "viscous fluid" },
      ],
    },
    {
      titleJa: "衣装｜完全露出・裸 (Nude & Naked)",
      items: [
        { ja: "全裸 (Nude)", en: "nude" },
        { ja: "トップレス", en: "topless" },
        { ja: "ボトムレス (下履いてない)", en: "bottomless" },
        { ja: "ニプレスのみ", en: "pasties only" },
        { ja: "前貼り (C-string)", en: "c-string" },
        { ja: "手ブラ", en: "hand bra" },
        { ja: "全裸待機", en: "waiting nude, naked standing" },
      ],
    },
    {
      titleJa: "カメラ｜性行為・内部視点 (Sex POV)",
      items: [
        { ja: "フェラチオ視点", en: "pov, fellatio" },
        { ja: "セックス視点", en: "pov, sex" },
        { ja: "騎乗位視点", en: "pov, cowgirl position" },
        { ja: "内部視点 (膣内)", en: "internal view" },
        { ja: "断面図 (X-Ray)", en: "cross section, x-ray" },
        { ja: "子宮口", en: "cervix" },
      ],
    },
    {
      titleJa: "質感｜R-18 液体・白濁 (Adult Fluids)",
      items: [
        { ja: "精液 (白濁液)", en: "cum, white fluid" },
        { ja: "大量の精液", en: "excessive cum" },
        { ja: "顔射 (顔にかかる)", en: "cum on face" },
        { ja: "全身精液まみれ", en: "cum on body, messy body" },
        { ja: "口内射精", en: "cum in mouth" },
        { ja: "愛液・よだれ", en: "saliva, drooling, vaginal fluids" },
        { ja: "母乳", en: "breast milk" },
      ],
    },
    {
      titleJa: "プリセット｜敗北・リョナ (Defeat & Ryona)",
      items: [
        { ja: "敗北・地面に", en: "(defeated), (lying on ground), (injured), (torn clothes), (dirt), (bleeding), (crying), (messy hair), (despair)" },
        { ja: "拘束戦闘", en: "(fighting while bound), (handcuffs), (struggling), (shibari combat), (disadvantage), (glaring), (sweat)" },
        { ja: "服ビリビリ", en: "(clothes torn), (armor broken), (exposed skin), (breast slip), (panchira), (damage), (embarrassed but fighting)" },
        { ja: "腹パン・苦悶", en: "(stomach punch), (gut punch), (painful expression), (saliva), (doubled over), (gasping), (impact)" },
        { ja: "強制・絶望", en: "(grabbed by face), (lifted up), (feet off ground), (tears), (terror), (overwhelming power), (bad ending)" },
      ],
    },
    {
      titleJa: "プリセット｜R-18 表情・精神 (Expressions)",
      items: [
        { ja: "あへ顔", en: "(ahegao:1.3), (rolling eyes), (tongue out), (drooling), (v-shaped eyebrows)" },
        { ja: "ハート目", en: "(heart-shaped pupils), (pink eyes), (infatuated), (love struck)" },
        { ja: "虚ろ目・レイプ目", en: "(vacant eyes), (empty eyes), (no pupil highlights), (glassy eyes), (mind break), (broken expression)" },
        { ja: "快楽堕ち", en: "(pleasure face), (blush), (slobber), (euphoric tears), (ecstatic expression)" },
        { ja: "涙目・懇願", en: "(tears), (crying), (begging), (humiliation), (flushed face), (desperate moan)" },
        { ja: "絶頂・震え", en: "(orgasm), (girl trembling in climax:1.5), (shaking), (arched back), (toes curling), (spasms), (body control)" },
      ],
    },
    {
      titleJa: "プリセット｜R-18 ストーリー (Time)",
      items: [
        { ja: "脱衣・恥じらい", en: "(undressing), (clothes half off), (panties down), (covering body), (shy), (blushing), (looking away)" },
        { ja: "事後・余韻", en: "(after sex), (messy hair), (lying on bed), (exhausted), (heavy breathing), (cum on sheets), (disheveled), (peaceful face), (cuddle)" },
        { ja: "朝チュン", en: "(morning after), (waking up), (naked in bed), (messy room), (sunlight), (hickey), (memory of last night), (kissing)" },
      ],
    },
  ];

  function ensureRoot(container) {
    let root = container.querySelector(`#list-${KEY}`);
    if (!root) {
      root = document.createElement("div");
      root.id = `list-${KEY}`;
      root.className = "builder-list";
      container.appendChild(root);
    }
    return root;
  }

  function createGroupCard(group) {
    const wrap = document.createElement("div");
    wrap.className = "builder-card";

    const head = document.createElement("div");
    head.className = "builder-card-head";
    head.textContent = group.titleJa;
    wrap.appendChild(head);

    const grid = document.createElement("div");
    grid.className = "builder-grid";

    for (const it of group.items) {
      const label = document.createElement("label");
      label.className = "builder-chip";

      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.className = "builder-checkbox";
      cb.dataset.en = it.en;
      cb.dataset.ja = it.ja;

      const span = document.createElement("span");
      span.className = "builder-chip-text";
      span.textContent = it.ja; // 表示は日本語

      label.appendChild(cb);
      label.appendChild(span);
      grid.appendChild(label);
    }

    wrap.appendChild(grid);
    return wrap;
  }

  function getCheckedTags(container) {
    const root = container.querySelector(`#list-${KEY}`);
    if (!root) return [];
    const inputs = [...root.querySelectorAll("input[type=checkbox]")];
    const tags = inputs.filter(i => i.checked).map(i => i.dataset.en).filter(Boolean);
    return tags;
  }

  function getCheckedTagsFromRoot(root) {
    if (!root) return [];
    const inputs = [...root.querySelectorAll("input[type=checkbox]")];
    return inputs.filter(i => i.checked).map(i => i.dataset.en).filter(Boolean);
  }



  const API = {
    title: "🔞. R-18",
    description: "表記は日本語／生成は英語（タグ）",
    // builder_core.v1.js mounts sections via initUI().
    // Without initUI, this section stays empty and won't appear as an accordion.
    initUI(container) {
      return this.render(container);
    },
    render(container) {
      const root = ensureRoot(container);
      root.innerHTML = "";
      for (const g of GROUPS) root.appendChild(createGroupCard(g));
    },
    getTags() {
      const root = document.getElementById(`list-${KEY}`);
      return getCheckedTagsFromRoot(root);
    },
  };

  if (window && typeof window.__registerPromptPart === "function") {
    window.__registerPromptPart(KEY, VERSION, API);
  } else {
    // Fallback: expose for debug
    window.__R18_SECTION__ = { KEY, VERSION, API, GROUPS };
  }
})();
