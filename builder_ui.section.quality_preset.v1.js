(function(){
  "use strict";
  const VERSION = 1; 
  const KEY = "quality_preset";

  // DBロード
  const DB = window.__QP_DB || { base:{}, situations:{}, styles:{}, eras:{}, quality:{}, negatives:{}, beginner:{} };
  const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  // シークレット注入
  if (IS_UNLOCKED && DB.secret && DB.base && DB.base["💎 ハイエンド・特化 (High-End Specialized)"]) {
    const arr = DB.base["💎 ハイエンド・特化 (High-End Specialized)"];
    if (arr.length > 0 && arr[0].label !== DB.secret.label) {
      arr.unshift(DB.secret);
    }
  }

  // ==============================================================================
  // 📚 翻訳辞書 (拡張版)
  // ==============================================================================
  const MANUAL_DICT = {
    // --- Quality & Tech ---
    "masterpiece": "傑作", "best quality": "最高画質", "high resolution": "高解像度",
    "ultra high resolution": "超高解像度", "photorealistic": "フォトリアル", "realistic": "リアル", 
    "8k": "8K", "raw photo": "RAW写真", "detailed skin texture": "肌の質感", 
    "hyperrealistic": "超リアル", "octane render": "Octane Render",
    "ray tracing": "レイトレーシング", "global illumination": "グローバル照明・GI", 
    "physically based rendering": "PBR", "unreal engine 5": "UE5", "lumen reflections": "Lumen反射", 
    "nanite geometry": "Nanite", "8k uhd": "8K UHD", "realistic lighting": "リアルな照明", 
    "subsurface scattering": "SSS・表面下散乱", "volumetric lighting": "ボリュメトリック照明", 
    "ambient occlusion": "AO・環境光遮蔽", "arnold render": "Arnold Render", "v-ray": "V-Ray", 
    "cycles render": "Cycles Render", "zbrush sculpt": "ZBrushスカルプト", "digital sculpting": "デジタル彫刻", 
    "clay render style": "クレイ風", "substance painter": "Substance Painter", "pbr textures": "PBRテクスチャ", 
    "intricate texture": "複雑なテクスチャ", "cinema 4d render": "C4Dレンダー", 
    "studio lighting": "スタジオ照明", "clean render": "クリーンレンダー",

    // --- Situations: Spots & Shops ---
    "idol focus": "アイドル", "live concert": "ライブ", "stage lights": "ステージ照明", "sparkles": "キラキラ",
    "cinematic glow": "映画的輝き", "performance": "パフォーマンス", "cozy modern café": "モダンカフェ",
    "coffee": "コーヒー", "sweets": "スイーツ", "string lights": "イルミネーション",
    "bar counter": "バーカウンター", "bottles on shelves": "棚のボトル", "bartender": "バーテンダー", "cocktail": "カクテル",
    "jazz bar vibes": "ジャズバー", "adult atmosphere": "大人の雰囲気",
    "convenience store": "コンビニ", "bright fluorescent light": "蛍光灯", "shelves of snacks": "お菓子の棚", 
    "refrigerator": "冷蔵庫", "night shift": "夜勤", "modern japan": "現代日本", "glass door": "ガラス戸",
    "supermarket": "スーパー", "grocery shopping": "買い物", "shopping basket": "買い物かご",
    "aisle": "通路", "fruit and vegetables": "青果",
    "library": "図書館", "bookshelves": "本棚", "quiet atmosphere": "静寂", "reading": "読書", "ladder": "梯子", "studying": "勉強中",
    "hospital room": "病室", "white bed": "白いベッド", "medical equipment": "医療機器", "sterile": "無菌", "curtain": "カーテン",
    "date night": "夜のデート", "romantic atmosphere": "ロマンチック", "city lights": "街明かり", "holding hands": "手繋ぎ",
    "restaurant": "レストラン", "dinner": "ディナー",

    // --- Situations: School & Youth ---
    "classroom": "教室", "school desks": "学校の机", "chalkboard": "黒板", "friends": "友達", "school uniform": "制服",
    "school hallway": "学校の廊下", "lockers": "ロッカー", "cleaning time": "掃除の時間", "after school": "放課後",
    "perspective": "パース", "shiny floor": "輝く床",
    "school rooftop": "学校の屋上", "fence": "フェンス", "wind blowing hair": "風になびく髪", "secret base": "秘密基地",
    "school gymnasium": "体育館", "basketball hoop": "バスケットゴール", "wooden floor": "板張りの床", 
    "indoor shoes": "上履き", "sports equipment": "スポーツ用具", "large windows": "大きな窓", "echoing": "反響",
    "school infirmary": "保健室", "medicine cabinet": "薬棚", "resting": "休憩", "afternoon sun": "午後の日差し",
    "street to school": "通学路", "telephone poles": "電柱", "residential area": "住宅街", "walking": "歩く", "chatting": "おしゃべり",
    "club room": "部室", "messy desk": "散らかった机", "hobby items": "趣味の道具", "friends gathering": "たまり場", "sunset glow": "夕焼け",

    // --- Situations: Home & Daily Life ---
    "living room": "リビング", "sofa": "ソファ", "television": "テレビ", "carpet": "カーペット", "family time": "団欒", "indoor plants": "観葉植物",
    "modern kitchen": "キッチン", "cooking": "料理中", "apron": "エプロン", "vegetables": "野菜", "frying pan": "フライパン", "morning breakfast": "朝食",
    "bedroom": "寝室", "messy bed": "乱れたベッド", "white sheets": "白いシーツ", "pillow": "枕", "pajamas": "パジャマ", "private space": "プライベート空間",
    "bathroom": "バスルーム", "bathtub": "バスタブ", "steam": "湯気", "bubbles": "泡", "wet skin": "濡れた肌", "tiles": "タイル", "mirror": "鏡", "shampoo": "シャンプー",
    "japanese style room": "和室", "tatami mats": "畳", "shoji screen": "障子", "kotatsu": "こたつ", "cushion": "座布団", "tea cup": "湯呑み", "calm atmosphere": "穏やかな雰囲気",
    "entrance hall": "玄関", "shoes": "靴", "umbrella stand": "傘立て", "welcome home": "おかえり", "door open": "ドアが開く", "leaving home": "出かける",
    "apartment balcony": "ベランダ", "laundry hanging": "洗濯物", "potted plants": "植木鉢", "city view": "街の眺め", "railing": "手すり", "breeze": "そよ風",

    // --- Situations: Fantasy & RPG ---
    "fantasy forest": "ファンタジーの森", "glowing plants": "光る植物", "magic particles": "魔法の粒子", "ancient trees": "古代樹",
    "royal palace": "王宮", "throne room": "玉座の間", "chandelier": "シャンデリア", "red carpet": "赤絨毯", "marble pillars": "大理石の柱",
    "luxurious": "豪華な", "gold decorations": "金の装飾", "king and queen": "王と女王",
    "stone dungeon": "ダンジョン", "torch light": "松明の光", "cobwebs": "蜘蛛の巣", "stone walls": "石壁", "treasure chest": "宝箱", "adventure": "冒険", "danger": "危険",
    "fantasy tavern": "冒険者ギルド", "wooden tables": "木のテーブル", "beer mugs": "ジョッキ", "adventurers": "冒険者", "quest board": "掲示板", "lively atmosphere": "活気ある雰囲気", "fireplace": "暖炉",
    "alchemist lab": "魔法研究所", "potions": "ポーション", "scrolls": "巻物", "books": "本", "magic circle": "魔法陣", "glowing crystals": "光る水晶", "cluttered": "散らかった",
    "floating island": "天空の城", "castle in the sky": "空の城", "waterfall into void": "奈落への滝", "epic scale": "壮大", "fantasy landscape": "ファンタジーな風景", "dreamy": "夢のような",
    "ancient ruins": "古代遺跡", "overgrown with moss": "苔むした", "broken pillars": "壊れた柱", "stone statues": "石像", "lost civilization": "失われた文明", "sunlight filtering": "木漏れ日",

    // --- Situations: Urban & Street ---
    "busy city street": "繁華街", "scramble crossing": "スクランブル交差点", "crowd": "人混み", "billboards": "看板", "skyscrapers": "高層ビル", "modern city": "近代都市", "daytime": "昼間", "energetic": "エネルギッシュ",
    "back alley": "路地裏", "narrow street": "狭い通り", "vending machine": "自販機", "trash cans": "ゴミ箱", "stray cat": "野良猫", "pipes": "配管", "gritty": "無骨な",
    "train station platform": "駅のホーム", "train arriving": "電車の到着", "commuters": "通勤客", "electric overhead lines": "架線", "waiting": "待ち", "travel": "旅行",
    "cyberpunk city": "ネオン街", "neon signs": "ネオンサイン", "rainy street": "雨の通り", "wet street reflections": "路面の反射", "futuristic": "近未来的",
    "public park": "公園", "bench": "ベンチ", "fountain": "噴水", "pigeons": "鳩",
    "skyscraper rooftop": "ビルの屋上", "night city view": "夜景", "windy": "風が強い", "lonely": "孤独",

    // --- Situations: Nature & Scenery ---
    "flower field": "花畑", "sunflowers": "ひまわり", "petals scattered": "花弁が舞う", "bright colors": "明るい色", "summer": "夏", "nature": "自然",
    "snowy mountain": "雪山", "winter landscape": "冬景色", "snowing": "降雪", "white world": "銀世界", "pine trees": "松の木", "cold atmosphere": "冷たい", "footprints": "足跡",
    "tropical beach": "ビーチ", "white sand": "白い砂浜", "blue ocean": "青い海", "emerald water": "エメラルドの海", "palm trees": "ヤシの木", "summer vacation": "夏休み",
    "underground cave": "洞窟", "stalactites": "鍾乳石", "underground lake": "地底湖", "dark and cool": "暗くて涼しい", "mystery": "神秘", "echo": "反響",
    "sunset beach": "夕暮れの海", "reflection on water": "水面の反射", "waves": "波",
    "starry sky": "星空", "milky way": "天の川", "shooting star": "流れ星", "night landscape": "夜の風景", "silhouette of mountains": "山のシルエット", "beautiful": "美しい", "universe": "宇宙",

    // --- General & Time ---
    "morning light": "朝の光", "light leaks": "光漏れ", "soft shadows": "柔らかな影", "fresh atmosphere": "爽やか",
    "depth of field": "被写界深度", "sunlight through leaves": "木漏れ日", "dappled sunlight": "まだらな日差し",
    "tyndall effect": "チンダル現象", "god rays": "ゴッドレイ", "dust particles": "舞う埃", "backlighting": "逆光",
    "intense sunlight": "強い日差し", "blue sky": "青空", "cumulus clouds": "入道雲", "summer vibes": "夏の雰囲気",
    "natural lighting": "自然光", "daylight": "日光", "harsh sunlight": "厳しい日差し", "heat haze": "陽炎",
    "golden hour": "ゴールデンアワー", "sunset": "夕日", "orange and purple sky": "夕焼け空", "long shadows": "長い影",
    "silhouette": "シルエット", "sun behind character": "背後の太陽", "twilight": "黄昏", "blue hour": "ブルーアワー",
    "night city": "夜の街", "colorful bokeh": "カラフルなボケ", "moonlight": "月光", "full moon": "満月",
    "darkness": "暗闇", "spotlight": "スポットライト", "chiaroscuro": "明暗法", "night cafe": "夜カフェ",
    "candle light": "キャンドル", "cherry blossoms": "桜", "raining": "雨", "wet ground": "濡れた地面",
    "Kodak Portra 400": "Portra 400・フィルム"
  };

  // --- ヘルパー関数 ---
  function createSubAccordion(title, items, type) { 
    const details = document.createElement("details"); details.className = "qp-sub-acc"; details.style.marginBottom = "6px"; details.style.border = "1px solid #eee"; details.style.borderRadius = "4px"; details.style.background = "#fff"; details.open = false; 
    const summary = document.createElement("summary"); summary.textContent = title; summary.style.fontWeight = "bold"; summary.style.padding = "6px 10px"; summary.style.cursor = "pointer"; summary.style.background = "#f9f9f9"; details.appendChild(summary); 
    const content = document.createElement("div"); content.className = "qp-content-grid"; content.style.padding = "8px"; content.style.display = "grid"; content.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))"; content.style.gap = "6px"; 
    
    if(items && Array.isArray(items)){
      items.forEach(item => { 
        const label = document.createElement("label"); label.style.display = "flex"; label.style.alignItems = "center"; label.style.fontSize = "0.9em"; label.style.cursor = "pointer"; 
        const cb = document.createElement("input"); cb.type = "checkbox"; cb.style.marginRight = "6px"; 
        
        if (item.val) {
          cb.dataset.val = item.val;
          label.title = item.val;
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.label));
        } else if (item.en) {
          cb.dataset.val = item.en;
          label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
        }
        if(item.links) cb.dataset.links = item.links.join(",");
        content.appendChild(label); 
      });
    }
    details.appendChild(content); return details; 
  }

  function createMainSection(id, title) { 
    const details = document.createElement("details"); details.id = id; details.className = "qp-main-acc"; details.style.marginBottom = "10px"; details.style.border = "1px solid #ccc"; details.style.borderRadius = "6px"; details.style.background = "#fff"; details.open = false; 
    const summary = document.createElement("summary"); summary.innerHTML = `<span style="margin-right:8px;">▶</span>${title}`; summary.style.fontWeight = "bold"; summary.style.padding = "10px 14px"; summary.style.cursor = "pointer"; summary.style.background = "#eef2f6"; summary.style.listStyle = "none"; 
    details.appendChild(summary); 
    const wrapper = document.createElement("div"); wrapper.className = "qp-section-content"; wrapper.style.padding = "10px"; 
    details.appendChild(wrapper); 
    return details; 
  }

  function createBeginnerGuide(data) {
    if (!data) return null;
    const root = document.createElement("details");
    root.className = "beginner-guide-root";
    root.style.cssText = "margin-bottom:20px; border:2px solid #89CFF0; border-radius:8px; background:#F0F8FF; display:block;";
    
    const summary = document.createElement("summary");
    summary.innerHTML = "🔰 <b>初心者ガイド：迷ったらここから選ぶ</b>";
    summary.style.cssText = "padding:10px; cursor:pointer; font-weight:bold; list-style:none; outline:none;";
    root.appendChild(summary);

    const contentWrapper = document.createElement("div");
    contentWrapper.style.cssText = "padding:10px; border-top:1px solid #89CFF0; display:flex; flex-direction:column; gap:15px;";

    Object.entries(data).forEach(([title, items]) => {
      const section = document.createElement("div");
      section.style.cssText = "border:1px solid #bce; background:#fff; border-radius:8px; padding:10px; width:100%; box-sizing:border-box;";
      const h4 = document.createElement("h4");
      h4.textContent = title;
      h4.style.cssText = "margin:5px 0 8px 0; font-size:0.95em; color:#0056b3; border-bottom:1px dashed #bce; padding-bottom:3px;";
      section.appendChild(h4);
      const grid = document.createElement("div");
      grid.style.cssText = "display:grid; gap:8px; grid-template-columns: 1fr;";

      items.forEach(item => {
        const label = document.createElement("label");
        label.style.cssText = "display:flex; align-items:center; background:#f9f9f9; padding:8px; border-radius:4px; cursor:pointer; border:1px solid #eee;";
        const cb = document.createElement("input");
        cb.type = "checkbox";
        cb.dataset.val = item.val;
        cb.style.marginRight = "10px";
        cb.style.flexShrink = "0"; 
        const textDiv = document.createElement("div");
        textDiv.innerHTML = `<div style="font-weight:bold; font-size:0.95em; color:#333;">${item.label}</div><div style="font-size:0.85em; color:#666; margin-top:2px;">${item.desc}</div>`;
        label.appendChild(cb);
        label.appendChild(textDiv);
        grid.appendChild(label);
      });
      section.appendChild(grid);
      contentWrapper.appendChild(section);
    });
    root.appendChild(contentWrapper);
    return root;
  }

  function createNegativeSeparator() { const div = document.createElement("div"); div.style.marginTop = "30px"; div.style.marginBottom = "10px"; div.style.borderTop = "2px dashed #ffb3b3"; div.innerHTML = `<div style="margin-top:-12px; text-align:center;"><span style="background:#fff0f0; padding:0 15px; color:#d9534f; font-size:0.9em; font-weight:bold; border-radius:10px; border:1px solid #ffb3b3;">⚠️ NEGATIVE PROMPTS</span></div>`; return div; }

  const API = {
    initUI(container) {
      if (window.__outputTranslation) {
        // 手動辞書のみを登録
        window.__outputTranslation.register(MANUAL_DICT);
        
        const dict = {};
        const registerFromData = (dataObj) => {
          if(!dataObj) return;
          Object.values(dataObj).forEach(items => {
            if(Array.isArray(items)){
              items.forEach(item => {
                if (item.en && item.ja) { 
                  dict[item.en] = item.ja;
                }
              });
            }
          });
        };
        // DBからの辞書登録
        if(DB.base) registerFromData(DB.base);
        if(DB.situations) registerFromData(DB.situations);
        if(DB.styles) registerFromData(DB.styles);
        if(DB.eras) registerFromData(DB.eras);
        if(DB.quality) registerFromData(DB.quality);
        if(DB.negatives) registerFromData(DB.negatives);
        window.__outputTranslation.register(dict);
      }

      const parent = document.querySelector("#list-quality_preset") || container; parent.innerHTML = ""; 
      const root = document.createElement("div"); root.className = "quality-preset-integrated";
      
      // 0. 初心者ガイド
      if (DB.beginner) root.appendChild(createBeginnerGuide(DB.beginner));

      // 1. 画風・品質
      const secPresets = createMainSection("qp-presets", "📦 画風・品質プリセット (Art Styles & Quality)");
      let clickCount = 0; let clickTimer = null;
      secPresets.querySelector("summary").addEventListener("click", (e) => {
        clickCount++;
        if(clickTimer) clearTimeout(clickTimer);
        clickTimer = setTimeout(() => { clickCount = 0; }, 2000); 
        if (clickCount >= 5) {
          const unlocked = localStorage.getItem("MY_SECRET_UNLOCK") === "true";
          if (unlocked) {
            if (confirm("シークレットモードを解除（非表示）にしますか？")) { localStorage.removeItem("MY_SECRET_UNLOCK"); location.reload(); }
          } else {
            if (confirm("シークレットモードを解放しますか？")) { localStorage.setItem("MY_SECRET_UNLOCK", "true"); location.reload(); }
          }
          clickCount = 0;
        }
      });
      if(DB.base) Object.entries(DB.base).forEach(([k,v]) => { secPresets.querySelector(".qp-section-content").appendChild(createSubAccordion(k, v)); });
      root.appendChild(secPresets);

      // 2. シチュエーション
      const secSituation = createMainSection("qp-situations", "🎬 シチュエーション・環境 (Situations & Environment)");
      if(DB.situations) Object.entries(DB.situations).forEach(([k,v]) => { secSituation.querySelector(".qp-section-content").appendChild(createSubAccordion(k, v)); });
      root.appendChild(secSituation);

      // 3. スタイル
      const secStyles = createMainSection("qp-styles", "🎨 スタイル・文化 (Styles & Culture)");
      if(DB.styles) Object.entries(DB.styles).forEach(([k,v]) => { secStyles.querySelector(".qp-section-content").appendChild(createSubAccordion(k, v)); });
      root.appendChild(secStyles);

      // 4. 品質・技術
      const secQuality = createMainSection("qp-quality", "🔧 品質・技術・ツール (Quality & Tech)");
      if(DB.quality) Object.entries(DB.quality).forEach(([k,v]) => { secQuality.querySelector(".qp-section-content").appendChild(createSubAccordion(k, v)); });
      root.appendChild(secQuality);

      // 5. 時代
      const secEras = createMainSection("qp-eras", "🕰️ 時代・年代 (Era Words)");
      if(DB.eras) Object.entries(DB.eras).forEach(([k,v]) => { secEras.querySelector(".qp-section-content").appendChild(createSubAccordion(k, v)); });
      root.appendChild(secEras);

      // 6. ネガティブ
      root.appendChild(createNegativeSeparator());
      const secNegSets = createMainSection("qp-neg-sets", "🚫 ネガティブプリセット (Negative Sets)");
      secNegSets.querySelector("summary").style.background = "#fff0f0"; secNegSets.querySelector("summary").style.color = "#d00";
      if(DB.negatives) Object.entries(DB.negatives).forEach(([k,v]) => { secNegSets.querySelector(".qp-section-content").appendChild(createSubAccordion(k, v)); });
      root.appendChild(secNegSets);
      
      const secNegWords = createMainSection("qp-neg-words", "🗑️ ネガティブ (Negative Words)");
      secNegWords.querySelector("summary").style.background = "#fff0f0"; secNegWords.querySelector("summary").style.color = "#d00";
      root.appendChild(secNegWords);
      
      parent.appendChild(root);
    },
    getTags() { 
      const tags = []; 
      document.querySelectorAll(".quality-preset-integrated input[type='checkbox']:checked").forEach(cb => { tags.push(cb.dataset.val); }); 
      document.querySelectorAll(".beginner-guide-root input[type='checkbox']:checked").forEach(cb => { tags.push(cb.dataset.val); });
      return tags; 
    }
  };

  if (!document.getElementById("qp-styles-css")) { const style = document.createElement('style'); style.id = "qp-styles-css"; style.textContent = `.qp-main-acc { margin-bottom:10px; border:1px solid #ccc; border-radius:6px; background:#fff; } .qp-sub-acc { margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff; } .qp-content-grid { padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:6px; } .qp-content-grid label { display:flex; align-items:center; font-size:0.9em; cursor:pointer; } .qp-content-grid input { margin-right:6px; flex-shrink: 0; }`; document.head.appendChild(style); }
  window.__registerPromptPart(KEY, VERSION, API);
})();

