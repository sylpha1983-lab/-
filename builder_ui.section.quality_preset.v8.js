(function(){
  "use strict";
  const VERSION = 8; // 拡張パックG (音楽・ファッション・RPG)
  const KEY = "quality_preset";

  // ==========================================
  // 拡張データ定義
  // ==========================================

  // スタイル系 (#qp-styles) に追加
  const EXTRA_STYLES = {
    "🎵 音楽・カルチャー (Music & Culture)": [
      { ja: "ヘヴィメタル風", en: "heavy metal aesthetic" }, 
      { ja: "ヒップホップ/ストリート", en: "hip hop style" },
      { ja: "ジャズ/ノワール", en: "film noir style" },
      { ja: "K-POP/アイドル", en: "k-pop aesthetic" },
      { ja: "ビジュアル系", en: "visual kei" },
      { ja: "パンクロック", en: "punk rock style" },
      { ja: "EDM/レイブ", en: "rave style" },
      { ja: "グランジロック", en: "grunge aesthetic" }
    ],
    "👗 ファッション・スタイル (Fashion)": [
      { ja: "オートクチュール", en: "haute couture" },
      { ja: "テックウェア", en: "techwear" },
      { ja: "森ガール", en: "mori girl" },
      { ja: "ギャル (Y2K)", en: "gyaru style" },
      { ja: "ゴスロリ", en: "gothic lolita" },
      { ja: "ストリートファッション", en: "streetwear" },
      { ja: "アヴァンギャルド", en: "avant-garde fashion" }
    ]
  };

  // プリセット (#qp-presets) に追加
  const EXTRA_PRESETS_SETS = {
    "⚔️ ファンタジー職業 (RPG Classes)": [
      { label: "騎士 (Knight)", val: "(knight armor), (plate mail), (sword and shield), (heroic pose), (battlefield background), (metallic texture), (cape), (fantasy)" },
      { label: "魔法使い (Mage)", val: "(mage robe), (wizard hat), (magic staff), (spell casting), (glowing runes), (mystical aura), (library background)" },
      { label: "暗殺者 (Rogue)", val: "(assassin outfit), (hooded), (daggers), (leather armor), (shadows), (stealthy), (dynamic pose), (dark atmosphere)" },
      { label: "聖職者 (Healer)", val: "(cleric robe), (holy light), (healing magic), (peaceful atmosphere), (white and gold), (sacred staff), (church background)" },
      { label: "格闘家 (Monk)", val: "(martial artist), (light armor), (fighting stance), (dynamic angle), (aura), (muscular), (action shot)" }
    ],
    "🎬 シチュエーション (Situations)": [
      { label: "ライブコンサート (Concert)", val: "(live concert), (stage lights), (crowd), (performance), (microphone), (energetic), (confetti), (spotlight)" },
      { label: "壮大なバトル (Epic Battle)", val: "(epic battle), (fighting), (dynamic action), (explosions), (debris), (intense), (motion blur), (cinematic)" },
      { label: "日常・スライスオブライフ (Slice of Life)", val: "(slice of life), (daily life), (casual atmosphere), (soft sunlight), (peaceful), (detailed background), (anime style)" },
      { label: "デート (Date Night)", val: "(date night), (romantic atmosphere), (city lights), (holding hands), (blush), (fashionable clothes), (restaurant)" },
      { label: "学園生活 (School Life)", val: "(school life), (classroom), (school uniform), (sunlight through window), (friends), (youthful), (anime style)" }
    ]
  };

  // === v8用 翻訳辞書 ===
  const V8_DICT = {
    // Music
    "heavy metal aesthetic": "ヘヴィメタル風", "dark and gritty": "ダークで無骨", "spikes and leather": "スパイクとレザー",
    "hip hop style": "ヒップホップ風", "street art background": "ストリートアート背景", "baggy clothes": "ダボダボの服", "urban vibe": "都会的な雰囲気",
    "film noir style": "フィルム・ノワール風", "jazz atmosphere": "ジャズの雰囲気", "classy": "高級感",
    "k-pop aesthetic": "K-POP風", "stage lighting": "ステージ照明", "fashion photography": "ファッション写真", "glitter": "キラキラ",
    "visual kei": "ビジュアル系", "gothic rock": "ゴシックロック", "elaborate costume": "凝った衣装", "dramatic makeup": "劇的メイク", "androgynous": "中性的",
    "punk rock style": "パンクロック風", "rave style": "レイブ風", "grunge aesthetic": "グランジ風",

    // Fashion
    "haute couture": "オートクチュール", "high fashion": "ハイファッション", "runway model": "ランウェイモデル", "avant-garde": "アヴァンギャルド", "avant-garde fashion": "アヴァンギャルドファッション", "designer clothes": "デザイナーズ服",
    "techwear": "テックウェア", "urban ninja": "アーバン忍者", "futuristic clothing": "未来的服装", "straps and buckles": "ストラップとバックル", "cyberpunk fashion": "サイバーパンクファッション",
    "mori girl": "森ガール", "forest aesthetic": "森の美学", "natural fabrics": "天然素材", "layers": "重ね着", "earth tones": "アースカラー",
    "gyaru style": "ギャル風", "gal": "ギャル", "tanned skin": "日焼け肌", "bleached hair": "脱色髪", "flashy accessories": "派手なアクセ", "y2k fashion": "Y2Kファッション",
    "gothic lolita": "ゴスロリ", "streetwear": "ストリートウェア",

    // RPG Classes
    "knight armor": "騎士の鎧", "plate mail": "プレートメイル", "sword and shield": "剣と盾", "heroic pose": "英雄的なポーズ", "battlefield background": "戦場背景", "cape": "マント",
    "mage robe": "魔道士のローブ", "wizard hat": "魔法使いの帽子", "magic staff": "魔法の杖", "spell casting": "呪文詠唱", "glowing runes": "輝くルーン", "mystical aura": "神秘的なオーラ", "library background": "図書館背景",
    "assassin outfit": "暗殺者の服", "hooded": "フード付き", "daggers": "短剣", "leather armor": "革鎧", "shadows": "影", "stealthy": "隠密",
    "cleric robe": "聖職者のローブ", "holy light": "聖なる光", "healing magic": "回復魔法", "peaceful atmosphere": "平和な雰囲気", "sacred staff": "聖なる杖", "church background": "教会背景",
    "martial artist": "格闘家", "light armor": "軽装", "fighting stance": "戦闘の構え", "muscular": "筋肉質",

    // Situations
    "live concert": "ライブコンサート", "stage lights": "ステージライト", "performance": "パフォーマンス", "microphone": "マイク", "energetic": "エネルギッシュ", "confetti": "紙吹雪",
    "epic battle": "壮大なバトル", "fighting": "戦闘", "dynamic action": "ダイナミックなアクション", "explosions": "爆発", "debris": "瓦礫", "intense": "激しい",
    "slice of life": "日常系", "daily life": "日常生活", "casual atmosphere": "カジュアルな雰囲気", "soft sunlight": "柔らかな日差し",
    "date night": "デートナイト", "romantic atmosphere": "ロマンチックな雰囲気", "city lights": "街の灯り", "holding hands": "手をつなぐ", "blush": "赤面", "fashionable clothes": "おしゃれな服", "restaurant": "レストラン",
    "school life": "学園生活", "classroom": "教室", "school uniform": "制服", "sunlight through window": "窓からの日差し", "friends": "友達", "youthful": "若々しい"
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
        if(window.__outputTranslation && item.label && !V8_DICT[item.label]) V8_DICT[item.label] = item.label;
      } else {
        cb.dataset.val = item.en;
        label.appendChild(cb);
        label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
        if(window.__outputTranslation && item.en && item.ja) V8_DICT[item.en] = item.ja;
      }
      content.appendChild(label);
    });

    details.appendChild(content);
    return details;
  }

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(V8_DICT);

      const presetsContainer = document.querySelector("#qp-presets .qp-section-content");
      const stylesContainer = document.querySelector("#qp-styles .qp-section-content");

      // コンテナがあれば追加
      if (presetsContainer) {
        Object.entries(EXTRA_PRESETS_SETS).forEach(([k,v]) => presetsContainer.appendChild(createSubAccordion(k, v, "preset")));
      }
      if (stylesContainer) {
        Object.entries(EXTRA_STYLES).forEach(([k,v]) => stylesContainer.appendChild(createSubAccordion(k, v, "style")));
      }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

