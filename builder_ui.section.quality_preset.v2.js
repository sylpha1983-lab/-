(function(){
  "use strict";

  const VERSION = 2; // v2: ネガティブ・作家・時代拡張
  const KEY = "quality_preset";

  const NEGATIVES = [
    { label: "基本ネガティブ (Basic Negative)", val: "low quality, worst quality, out of focus, ugly, error, jpeg artifacts, lowers, blurry, bokeh" },
    { label: "人体崩壊防止 (Bad Anatomy)", val: "bad anatomy, long neck, deformed, mutated, disfigured, malformed hands, missing limb, floating limbs, disconnected limbs, extra limb, missing fingers, extra fingers, liquid fingers, poorly drawn hands, mutation" },
    { label: "テキスト・署名排除 (No Text)", val: "text, signature, watermark, username, artist name, copyright name" },
    { label: "3D・実写排除 (2D Only)", val: "3d, realistic, photorealistic, photo, real life" },
    { label: "2D・アニメ排除 (Realistic Only)", val: "illustration, painting, cartoon, anime, 2d, sketch, drawing" }
  ];

  const STYLES = [
    { label: "スタジオジブリ風 (Ghibli Style)", val: "studio ghibli style, miyazaki hayao style, anime screencap, vibrant colors, detailed scenery, picturesque" },
    { label: "新海誠風 (Shinkai Style)", val: "shinkai makoto style, kimi no na wa style, highly detailed clouds, lens flare, cinematic lighting, beautiful scenery, comet in sky" },
    { label: "京都アニメーション風 (KyoAni Style)", val: "kyoto animation style, detailed eyes, moe, soft lighting, emotional, high quality animation" },
    { label: "アルフォンス・ミュシャ風 (Art Nouveau)", val: "alphonse mucha style, art nouveau, intricate details, flower decorations, stained glass, elegant" },
    { label: "印象派・油絵 (Impressionism)", val: "impressionism style, claude monet style, oil painting, visible brushstrokes, light and color, plein air" },
    { label: "サイバーパンク風 (Trigger Style)", val: "studio trigger style, cyberpunk edgerunners style, neon colors, sharp lines, dynamic action, exaggerated perspective" },
    { label: "80s シティポップ (City Pop Art)", val: "hiroshi nagai style, city pop, clear blue sky, pool side, palm trees, 80s aesthetics, flat color" }
  ];

  const ERAS = [
    { label: "1990年代アニメ (90s Anime)", val: "1990s style, 90s anime, cel shading, retro anime, noise, vhs effect, low resolution style, nostalgic" },
    { label: "1980年代レトロ (80s Retro)", val: "1980s style, retro style, neon lights, synthwave, vhs glitch, analog photography style" },
    { label: "昭和レトロ (Showa Retro)", val: "showa era style, sepia tone, japanese retro, old tokyo, nostalgic atmosphere, wooden architecture" },
    { label: "大正ロマン (Taisho Roman)", val: "taisho roman, hakama, western and japanese blend, retro modern, stained glass, romantic atmosphere" },
    { label: "江戸時代 (Edo Period)", val: "edo period, ukiyo-e style, samurai era, japanese castle, kimono, woodblock print style" },
    { label: "ヴィクトリア朝 (Victorian)", val: "victorian era, steampunk, gothic fashion, industrial revolution, gears and steam, foggy london" },
    { label: "Y2K (2000年代)", val: "y2k aesthetic, 2000s fashion, shiny materials, colorful, cyber fashion, futuristic retro" },
    { label: "近未来 (Near Future)", val: "near future, high tech, clean white, holograms, glass architecture, utopia" },
    { label: "ポストアポカリプス (Post-Apocalypse)", val: "post-apocalyptic, ruined city, overgrown nature, survival gear, rusty texture, dust and debris" }
  ];

  // ★ v2用の完全補完辞書
  // ここに含まれるすべての単語を網羅しています
  const V2_DICT = {
    // Negatives
    "low quality": "低品質", "worst quality": "最低品質", "out of focus": "ピンボケ", "ugly": "醜い", "error": "エラー",
    "jpeg artifacts": "JPEGノイズ", "lowers": "低解像度", "blurry": "ぼやけた", "bokeh": "ボケ",
    "bad anatomy": "崩れた解剖学", "long neck": "長い首", "deformed": "変形", "mutated": "突然変異",
    "disfigured": "崩れた", "malformed hands": "奇形の手", "missing limb": "欠損した肢",
    "floating limbs": "浮遊する肢", "disconnected limbs": "切断された肢", "extra limb": "余分な肢",
    "missing fingers": "欠損した指", "extra fingers": "余分な指", "liquid fingers": "溶けた指",
    "poorly drawn hands": "下手に描かれた手", "mutation": "変異",
    "text": "テキスト", "signature": "署名", "watermark": "透かし", "username": "ユーザー名",
    "artist name": "作家名", "copyright name": "著作権名",
    "3d": "3D", "realistic": "リアル", "photorealistic": "フォトリアル", "photo": "写真", "real life": "実写",
    "illustration": "イラスト", "painting": "絵画", "cartoon": "カートゥーン", "anime": "アニメ",
    "2d": "2D", "sketch": "スケッチ", "drawing": "ドローイング",

    // Styles
    "studio ghibli style": "スタジオジブリ風", "miyazaki hayao style": "宮崎駿風",
    "anime screencap": "アニメキャプチャ風", "vibrant colors": "鮮やかな色",
    "detailed scenery": "詳細な風景", "picturesque": "絵のような",
    "shinkai makoto style": "新海誠風", "kimi no na wa style": "君の名は風",
    "highly detailed clouds": "超詳細な雲", "lens flare": "レンズフレア",
    "cinematic lighting": "シネマティック照明", "beautiful scenery": "美しい風景", "comet in sky": "空に彗星",
    "kyoto animation style": "京都アニメーション風", "detailed eyes": "詳細な目", "moe": "萌え",
    "soft lighting": "柔らかな光", "emotional": "エモーショナル", "high quality animation": "高品質アニメーション",
    "alphonse mucha style": "アルフォンス・ミュシャ風", "art nouveau": "アール・ヌーヴォー",
    "intricate details": "複雑な詳細", "flower decorations": "花の装飾", "stained glass": "ステンドグラス", "elegant": "エレガント",
    "impressionism style": "印象派", "claude monet style": "クロード・モネ風", "oil painting": "油絵",
    "visible brushstrokes": "筆致が見える", "light and color": "光と色", "plein air": "外光派",
    "studio trigger style": "TRIGGER風", "cyberpunk edgerunners style": "サイバーパンク風",
    "neon colors": "ネオンカラー", "sharp lines": "鋭い線", "dynamic action": "動的なアクション",
    "exaggerated perspective": "誇張されたパース",
    "hiroshi nagai style": "永井博風", "city pop": "シティポップ", "clear blue sky": "澄んだ青空",
    "pool side": "プールサイド", "palm trees": "ヤシの木", "80s aesthetics": "80年代の美学", "flat color": "フラットカラー",

    // Eras
    "1990s style": "90年代風", "90s anime": "90年代アニメ", "cel shading": "セル画塗り",
    "retro anime": "レトロアニメ", "noise": "ノイズ", "vhs effect": "VHSエフェクト",
    "low resolution style": "低解像度スタイル", "nostalgic": "ノスタルジック",
    "1980s style": "80年代風", "retro style": "レトロスタイル", "neon lights": "ネオンライト",
    "synthwave": "シンセウェーブ", "vhs glitch": "VHSグリッチ", "analog photography style": "アナログ写真風",
    "showa era style": "昭和レトロ", "sepia tone": "セピア調", "japanese retro": "日本レトロ",
    "old tokyo": "古き良き東京", "nostalgic atmosphere": "懐かしい雰囲気", "wooden architecture": "木造建築",
    "taisho roman": "大正ロマン", "hakama": "袴", "western and japanese blend": "和洋折衷",
    "retro modern": "レトロモダン", "romantic atmosphere": "ロマンチックな雰囲気",
    "edo period": "江戸時代", "ukiyo-e style": "浮世絵風", "samurai era": "侍の時代",
    "japanese castle": "日本城", "kimono": "着物", "woodblock print style": "木版画風",
    "victorian era": "ヴィクトリア朝", "steampunk": "スチームパンク", "gothic fashion": "ゴシックファッション",
    "industrial revolution": "産業革命", "gears and steam": "歯車と蒸気", "foggy london": "霧のロンドン",
    "y2k aesthetic": "Y2K", "2000s fashion": "2000年代ファッション", "shiny materials": "光沢素材",
    "colorful": "カラフル", "cyber fashion": "サイバーファッション", "futuristic retro": "近未来レトロ",
    "near future": "近未来", "high tech": "ハイテク", "clean white": "清潔な白",
    "holograms": "ホログラム", "glass architecture": "ガラス建築", "utopia": "ユートピア",
    "post-apocalyptic": "ポストアポカリプス", "ruined city": "荒廃した都市", "overgrown nature": "植物に覆われた",
    "survival gear": "サバイバル装備", "rusty texture": "錆びた質感", "dust and debris": "埃と瓦礫"
  };

  function createAccordionGroup(title, items) {
    const details = document.createElement("details");
    details.style.marginBottom = "8px";
    details.style.border = "1px solid #ddd";
    details.style.borderRadius = "6px";
    details.style.background = "#fff"; 
    details.open = false; 

    const summary = document.createElement("summary");
    summary.textContent = title;
    summary.style.fontWeight = "bold";
    summary.style.padding = "8px 12px";
    summary.style.cursor = "pointer";
    summary.style.background = "#eef2f6";
    summary.style.borderBottom = "1px solid #ddd";
    summary.style.color = "#444";
    summary.style.listStyle = "none";
    details.appendChild(summary);

    const contentDiv = document.createElement("div");
    contentDiv.style.padding = "10px";
    contentDiv.style.display = "grid";
    contentDiv.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))";
    contentDiv.style.gap = "8px";

    items.forEach(item => {
      const label = document.createElement("label");
      label.className = "tag-label";
      label.style.display = "flex";
      label.style.alignItems = "center";
      label.style.fontSize = "0.9em";
      label.style.cursor = "pointer";
      label.title = item.val;

      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.dataset.val = item.val;
      cb.style.marginRight = "6px";

      label.appendChild(cb);
      label.appendChild(document.createTextNode(item.label));
      contentDiv.appendChild(label);
    });

    details.appendChild(contentDiv);
    return details;
  }

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-quality_preset") || container;

      const separator = document.createElement("div");
      separator.style.marginTop = "15px";
      separator.style.marginBottom = "10px";
      separator.style.borderTop = "2px dashed #ddd";
      separator.innerHTML = `
        <div style="margin-top:-12px; text-align:center;">
          <span style="background:#f4f6f9; padding:0 10px; color:#888; font-size:0.8em; font-weight:bold;">
            EXT PACK v2 (Styles & Negatives)
          </span>
        </div>
      `;
      parent.appendChild(separator);

      const section = document.createElement("div");
      section.className = "quality-preset-v2-ext";

      section.appendChild(createAccordionGroup("🚫 ネガティブ (Negative Prompts)", NEGATIVES));
      section.appendChild(createAccordionGroup("🎨 作家・スタジオ (Artist & Styles)", STYLES));
      section.appendChild(createAccordionGroup("🕰️ 時代・年代 (Time Period)", ERAS));

      parent.appendChild(section);

      // ★ 翻訳辞書登録
      if (window.__outputTranslation) {
        window.__outputTranslation.register(V2_DICT);
      }
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".quality-preset-v2-ext input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.val);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

