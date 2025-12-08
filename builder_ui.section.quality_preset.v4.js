(function(){
  "use strict";
  const VERSION = 4; // 拡張パックC (世界観・メディア・素材)
  const KEY = "quality_preset";

  // ==========================================
  // 1. 拡張データ (v4)
  // ==========================================

  const PRESETS_DATA = {};

  PRESETS_DATA["🌏 世界観・文化 (World & Culture)"] = [
    { label: "中華風・武侠 (Wuxia)", val: "(wuxia), (chinese traditional clothes), (hanfu), (ink wash style background), (floating swords), (mystical atmosphere), (lotus patterns)" },
    { label: "アラビアン (Arabian)", val: "(arabian nights), (desert night), (golden ornaments), (magic lamp), (belly dancer style), (exotic dancer), (veil)" },
    { label: "北欧神話 (Norse)", val: "(norse mythology), (viking style), (runes), (snowy mountain), (fur armor), (braided hair), (warrior spirit)" },
    { label: "和風ゴシック (J-Goth)", val: "(japanese gothic), (kimono and apron), (taisho roman), (dark atmosphere), (red spider lily), (stained glass), (retro modern)" },
    { label: "ケルト・ドルイド (Celtic)", val: "(celtic mythology), (druid), (forest magic), (celtic knot), (green robe), (nature spirit), (ancient ruins)" }
  ];

  PRESETS_DATA["📦 メディア・製品 (Media & Product)"] = [
    { label: "雑誌の表紙 (Magazine)", val: "(magazine cover), (vogue style), (typography), (fashion shot), (barcode), (price tag), (trendy layout)" },
    { label: "TCGカード風 (Card Game)", val: "(trading card game art), (fantasy creature), (dynamic composition), (elemental effects), (decorative border), (card frame)" },
    { label: "プラモ箱絵 (Box Art)", val: "(plastic model box art), (dynamic action pose), (explosion background), (detailed painting style), (gunpla style), (mecha)" },
    { label: "アルバムジャケット (Album)", val: "(album cover), (music cd), (square format), (artistic composition), (band logo), (abstract art), (emotional)" },
    { label: "映画ポスター (Movie)", val: "(movie poster), (cinematic text), (credits at bottom), (dramatic lighting), (hollywood style), (blockbuster)" }
  ];

  PRESETS_DATA["🧱 特殊素材・質感 (Material)"] = [
    { label: "陶器・ドール (Porcelain)", val: "(porcelain skin), (ball jointed doll), (bjd), (cracked texture), (glossy glaze), (delicate), (ceramic)" },
    { label: "液体金属 (Liquid Metal)", val: "(liquid metal), (chrome skin), (melting form), (reflective surface), (t-1000 style), (quicksilver)" },
    { label: "ステッカーボム (Stickerbomb)", val: "(stickerbomb), (many stickers), (pop culture icons), (colorful chaotic), (street style), (laptop cover style)" },
    { label: "氷・氷像 (Ice)", val: "(ice sculpture), (frozen), (translucent blue), (frost texture), (cold atmosphere), (crystal clear)" },
    { label: "ラテックス (Latex)", val: "(latex suit), (shiny rubber), (tight fit), (glossy reflection), (fetish fashion), (black rubber)" }
  ];

  const EXTRA_QUALITY = {
    "構図・アングル (Angle+)": [
      { ja: "自撮り", en: "selfie" }, { ja: "鏡越し", en: "mirror selfie" },
      { ja: "上目遣い", en: "looking up" }, { ja: "見下ろし", en: "looking down" },
      { ja: "覗き込み", en: "peeking" }, { ja: "横顔", en: "profile" },
      { ja: "背中越し", en: "from behind" }, { ja: "超広角 (魚眼)", en: "fisheye" }
    ],
    "照明・ライティング (Light+)": [
      { ja: "逆光", en: "backlighting" }, { ja: "木漏れ日", en: "dappled sunlight" },
      { ja: "リムライト", en: "rim light" }, { ja: "スポットライト", en: "spotlight" },
      { ja: "月光", en: "moonlight" }, { ja: "生物発光", en: "bioluminescence" },
      { ja: "炎の照り返し", en: "firelight" }
    ]
  };

  // === v4用 辞書 (翻訳漏れ防止) ===
  const V4_DICT = {
    // World
    "wuxia": "武侠(中華ファンタジー)", "chinese traditional clothes": "中国伝統衣装", "hanfu": "漢服",
    "ink wash style background": "水墨画風背景", "floating swords": "浮遊する剣", "mystical atmosphere": "神秘的な雰囲気", "lotus patterns": "蓮の模様",
    "arabian nights": "アラビアンナイト", "desert night": "砂漠の夜", "golden ornaments": "金の装飾", "magic lamp": "魔法のランプ",
    "belly dancer style": "ベリーダンサー風", "exotic dancer": "エキゾチックダンサー", "veil": "ベール",
    "norse mythology": "北欧神話", "viking style": "ヴァイキング風", "runes": "ルーン文字", "snowy mountain": "雪山",
    "fur armor": "毛皮の鎧", "braided hair": "編み込み髪", "warrior spirit": "戦士の魂",
    "japanese gothic": "和風ゴシック", "kimono and apron": "着物にエプロン", "red spider lily": "彼岸花", "retro modern": "レトロモダン",
    "celtic mythology": "ケルト神話", "druid": "ドルイド", "forest magic": "森の魔法", "celtic knot": "ケルト結び",
    "green robe": "緑のローブ", "nature spirit": "自然の精霊", "ancient ruins": "古代遺跡",

    // Media
    "magazine cover": "雑誌の表紙", "vogue style": "ヴォーグ風", "typography": "タイポグラフィ", "fashion shot": "ファッション撮影",
    "barcode": "バーコード", "price tag": "値札", "trendy layout": "流行のレイアウト",
    "trading card game art": "TCGイラスト風", "card frame": "カード枠", "plastic model box art": "プラモ箱絵",
    "dynamic action pose": "ダイナミックなアクションポーズ", "explosion background": "爆発背景", "gunpla style": "ガンプラ風",
    "album cover": "アルバムジャケット", "music cd": "音楽CD", "square format": "正方形フォーマット", "band logo": "バンドロゴ", "abstract art": "抽象芸術",
    "cinematic text": "映画風テキスト", "credits at bottom": "下部にクレジット", "hollywood style": "ハリウッド風", "blockbuster": "超大作映画",

    // Material
    "porcelain skin": "陶器のような肌", "ball jointed doll": "球体関節人形", "bjd": "BJD", "cracked texture": "ひび割れた質感",
    "glossy glaze": "光沢のある釉薬", "ceramic": "セラミック", "liquid metal": "液体金属", "chrome skin": "クロムの肌",
    "melting form": "溶けた形状", "quicksilver": "水銀", "t-1000 style": "T-1000風",
    "stickerbomb": "ステッカーボム", "many stickers": "大量のステッカー", "pop culture icons": "ポップカルチャーアイコン",
    "colorful chaotic": "カラフルで混沌", "street style": "ストリートスタイル", "laptop cover style": "PCカバー風",
    "ice sculpture": "氷像", "frozen": "凍結", "translucent blue": "半透明の青", "frost texture": "霜の質感", "cold atmosphere": "冷たい雰囲気",
    "crystal clear": "水晶のように澄んだ", "latex suit": "ラテックススーツ", "shiny rubber": "光沢のあるゴム", "tight fit": "タイトフィット",
    "glossy reflection": "光沢反射", "fetish fashion": "フェティッシュファッション", "black rubber": "黒ゴム",

    // Angle & Light
    "selfie": "自撮り", "mirror selfie": "鏡越し自撮り", "looking up": "見上げる", "looking down": "見下ろす",
    "peeking": "覗き込む", "profile": "横顔", "from behind": "背後から", "fisheye": "魚眼",
    "backlighting": "逆光", "dappled sunlight": "木漏れ日", "rim light": "リムライト", "spotlight": "スポットライト",
    "moonlight": "月光", "bioluminescence": "生物発光", "firelight": "炎の照り返し"
  };

  // UIヘルパー
  function createSubAccordion(title, items, type) {
    const details = document.createElement("details");
    details.className = "qp-sub-acc";
    details.style.marginBottom = "6px";
    details.style.border = "1px solid #eee";
    details.style.borderRadius = "4px";
    details.style.background = "#fff";
    details.open = false; 

    const summary = document.createElement("summary");
    summary.textContent = title;
    summary.style.fontWeight = "bold";
    summary.style.padding = "6px 10px";
    summary.style.cursor = "pointer";
    summary.style.background = "#f9f9f9";
    summary.style.fontSize = "0.9em";
    summary.style.color = "#555";
    details.appendChild(summary);

    const content = document.createElement("div");
    content.className = "qp-content-grid";
    content.style.padding = "8px";
    content.style.display = "grid";
    content.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))";
    content.style.gap = "6px";

    items.forEach(item => {
      const label = document.createElement("label");
      label.style.display = "flex";
      label.style.alignItems = "center";
      label.style.fontSize = "0.9em";
      label.style.cursor = "pointer";
      
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.style.marginRight = "6px";

      if (type === "preset") {
        cb.dataset.val = item.val;
        label.title = item.val;
        label.appendChild(cb);
        label.appendChild(document.createTextNode(item.label));
        if(window.__outputTranslation && item.label && !V4_DICT[item.label]) V4_DICT[item.label] = item.label;
      } else {
        cb.dataset.val = item.en;
        label.appendChild(cb);
        label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
        if(window.__outputTranslation && item.en && item.ja) V4_DICT[item.en] = item.ja;
      }
      content.appendChild(label);
    });

    details.appendChild(content);
    return details;
  }

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(V4_DICT);

      // マウント先 (v1が作成)
      const presetsContainer = document.querySelector("#qp-presets .qp-section-content");
      const qualityContainer = document.querySelector("#qp-quality .qp-section-content");

      // コンテナが存在する場合のみ追記
      if (presetsContainer) {
        Object.entries(PRESETS_DATA).forEach(([k,v]) => presetsContainer.appendChild(createSubAccordion(k, v, "preset")));
      }
      if (qualityContainer) {
        Object.entries(EXTRA_QUALITY).forEach(([k,v]) => qualityContainer.appendChild(createSubAccordion(k, v, "word")));
      }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
