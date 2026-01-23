// Auto-generated bundle for section 'effect'
// Contains 3 versions stacked in ascending order.

(function(){
// --- builder_ui.section.effect.v1.js ---
(function(){
  "use strict";
  const VERSION = 1; 
  const KEY = "effect";

  const CATEGORIES = {
    "🔥 自然元素 (Elemental)": [
      { ja: "炎・火", en: "fire" }, { ja: "青い炎", en: "blue fire" }, { ja: "爆発", en: "explosion" },
      { ja: "水", en: "water" }, { ja: "水しぶき", en: "water splash" }, { ja: "水滴", en: "water droplets" },
      { ja: "氷", en: "ice" }, { ja: "氷の結晶", en: "ice crystals" }, { ja: "雪", en: "snow" },
      { ja: "雷", en: "lightning" }, { ja: "電気・スパーク", en: "electricity" },
      { ja: "風", en: "wind" }, { ja: "竜巻", en: "tornado" }, { ja: "砂嵐", en: "sandstorm" },
      { ja: "煙", en: "smoke" }, { ja: "蒸気", en: "steam" }, { ja: "霧", en: "fog" }
    ],
    "✨ 魔法・オーラ (Magic & Aura)": [
      { ja: "魔法陣", en: "magic circle" }, { ja: "魔法の呪文", en: "magic spell" },
      { ja: "オーラ", en: "aura" }, { ja: "輝くオーラ", en: "glowing aura" }, { ja: "炎のオーラ", en: "fiery aura" },
      { ja: "エネルギー球", en: "energy ball" }, { ja: "ビーム", en: "beam" }, { ja: "レーザー", en: "laser" },
      { ja: "召喚", en: "summoning" }, { ja: "結界", en: "barrier" }
    ],
    "🌸 パーティクル・浮遊物 (Particles)": [
      { ja: "光の粒子", en: "light particles" }, { ja: "キラキラ", en: "sparkles" },
      { ja: "花弁", en: "falling petals" }, { ja: "桜吹雪", en: "cherry blossom petals" },
      { ja: "羽", en: "feathers" }, { ja: "黒い羽", en: "black feathers" },
      { ja: "紙吹雪", en: "confetti" }, { ja: "火の粉", en: "embers" },
      { ja: "埃・塵", en: "dust" }, { ja: "泡", en: "bubbles" }, { ja: "紅葉", en: "autumn leaves" }
    ],
    "💥 バトル・衝撃 (Battle Impact)": [
      { ja: "斬撃エフェクト", en: "slash effect" }, { ja: "衝撃波", en: "shockwave" },
      { ja: "残像", en: "afterimage" }, { ja: "スピード線", en: "speed lines" },
      { ja: "ブラー (ブレ)", en: "motion blur" }, { ja: "血しぶき", en: "blood splash" },
      { ja: "瓦礫", en: "debris" }, { ja: "ひび割れ", en: "cracked ground" }
    ]
  
    ,
    "🤖 メカ設計・説得力 (Mechanical Credibility)": [
      { ja: "機械設計感", en: "mechanical design" },
      { ja: "工業デザイン感", en: "industrial design" },
      { ja: "精密工学っぽさ", en: "precision engineering" },
      { ja: "高精細ディテール", en: "high fidelity details" },
      { ja: "製品化前提の完成度", en: "production-ready design" },
      { ja: "機能優先デザイン", en: "functional design" },
      { ja: "設計図っぽい正確さ", en: "orthographic design feel" },
      { ja: "輪郭が読みやすい", en: "clean silhouette" }
    ]
};

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-effect") || container;
      parent.innerHTML = "";

      const section = document.createElement("div");
      section.className = "effect-v1";

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.className = "effect-cat";
        details.style.marginBottom = "6px";
        details.style.border = "1px solid #eee";
        details.style.borderRadius = "4px";
        details.style.background = "#fff";
        details.open = false; 

        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.fontWeight = "bold";
        summary.style.padding = "6px 10px";
        summary.style.cursor = "pointer";
        summary.style.background = "#f9f9f9";
        summary.style.color = "#555";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.padding = "8px";
        content.style.display = "grid";
        content.style.gridTemplateColumns = "repeat(auto-fill, minmax(130px, 1fr))";
        content.style.gap = "6px";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.display = "flex";
          label.style.alignItems = "center";
          label.style.fontSize = "0.9em";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          cb.style.marginRight = "6px";
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        details.appendChild(content);
        section.appendChild(details);
      });

      parent.appendChild(section);

      // 翻訳辞書登録
      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(item => {
          if (item.en && item.ja) dict[item.en] = item.ja;
        });
        window.__outputTranslation.register(dict);
      }
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".effect-v1 input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();

(function(){
// --- builder_ui.section.effect.v2.js ---
(function(){
  "use strict";

  const VERSION = 2; // Enhanced Aura & Effect
  const KEY = "effect";

  const CATEGORIES = {
    "🔥 オーラ・気 (Aura & Energy)": [
      { ja: "オーラ (基本)", en: "aura" },
      { ja: "エネルギーオーラ", en: "energy aura" },
      { ja: "霊的オーラ", en: "spiritual aura" },
      { ja: "力のオーラ", en: "power aura" },
      { ja: "気のオーラ", en: "ki aura" },
      { ja: "聖なるオーラ", en: "holy aura" },
      { ja: "神性の輝き", en: "divine radiance" },
      { ja: "闇のオーラ", en: "dark aura" },
      { ja: "影のオーラ", en: "shadow aura" },
      { ja: "不穏なオーラ", en: "ominous aura" },
      { ja: "呪いのオーラ", en: "cursed aura" },
      { ja: "炎のオーラ", en: "flame aura" },
      { ja: "煙っぽいオーラ", en: "smoky aura" },
      { ja: "脈動するオーラ", en: "pulsing aura" },
      { ja: "震えるオーラ", en: "vibrating aura" },
      { ja: "輪郭発光", en: "glowing outline" },
      { ja: "縁の光", en: "rim glow" },
      { ja: "逆光オーラ", en: "backlit aura" },
      { ja: "ハロー光", en: "halo glow" }
    ],
    "⚡ スパーク・粒子 (Sparks & Particles)": [
      { ja: "火花オーラ", en: "aura sparks" },
      { ja: "エネルギー火花", en: "energy sparks" },
      { ja: "電撃オーラ", en: "electric aura" },
      { ja: "静電気", en: "static electricity" },
      { ja: "稲妻アーク", en: "lightning arcs" },
      { ja: "電気アーク", en: "electric arcs" },
      { ja: "バリバリしたエネルギー", en: "crackling energy" },
      { ja: "プラズマオーラ", en: "plasma aura" },
      { ja: "粒子オーラ", en: "particle aura" },
      { ja: "エネルギー粒子", en: "energy particles" },
      { ja: "きらめく粒", en: "glittering particles" },
      { ja: "漂う微粒子", en: "floating motes" },
      { ja: "火の粉", en: "embers" },
      { ja: "オーラの霧", en: "aura mist" },
      { ja: "エネルギーの霧", en: "energy mist" }
    ],
    "🌀 波動・リング (Waves & Rings)": [
      { ja: "エネルギー波", en: "energy waves" },
      { ja: "衝撃波オーラ", en: "shockwave aura" },
      { ja: "オーラの波", en: "aura waves" },
      { ja: "放射するエネルギー", en: "radiating energy" },
      { ja: "同心円リング", en: "concentric rings" },
      { ja: "エネルギーリング", en: "energy rings" },
      { ja: "衝撃波リング", en: "shockwave rings" },
      { ja: "波動リング", en: "wave rings" },
      { ja: "放射状の波", en: "radial waves" },
      { ja: "空気の波紋", en: "ripples in air" },
      { ja: "歪み波", en: "distortion waves" },
      { ja: "エネルギー歪み", en: "energy distortion" },
      // ★修正: 翻訳漏れを防ぐため分割
      { ja: "空気の歪み", en: "air distortion" },
      { ja: "陽炎 (Heat Haze)", en: "heat haze" }
    ],
    "🌪️ 渦・バリア (Swirl & Barrier)": [
      { ja: "渦巻くオーラ", en: "swirling aura" },
      { ja: "螺旋エネルギー", en: "spiraling energy" },
      { ja: "エネルギー渦", en: "energy vortex" },
      { ja: "風の渦", en: "wind swirl" },
      { ja: "風の軌跡", en: "gust trails" },
      { ja: "フォースフィールド", en: "force field" },
      { ja: "エネルギーシールド", en: "energy shield" },
      { ja: "オーラバリア", en: "aura barrier" },
      { ja: "防護オーラ", en: "protective aura" }
    ],
    "💨 演出・漫画効果 (Anime Effects)": [
      { ja: "スピード線", en: "speed lines" },
      { ja: "集中線", en: "radial speed lines" },
      { ja: "衝撃線", en: "impact lines" },
      { ja: "ダイナミック線", en: "dynamic lines" },
      { ja: "漫画エフェクト", en: "manga effects" },
      { ja: "アニメ演出", en: "anime effects" },
      { ja: "モーションストリーク", en: "motion streaks" }
    ],
    "🔯 魔法陣・シンボル (Symbols)": [
      { ja: "チャクラ発光", en: "chakra glow" },
      { ja: "魔法陣発光", en: "sigil glow" },
      { ja: "魔法陣オーラ", en: "magic circle aura" },
      { ja: "ルーン浮遊", en: "runes floating" },
      { ja: "エネルギー文字", en: "energy glyphs" },
      { ja: "鬼火", en: "spirit flames" },
      { ja: "ウィスプ (光球)", en: "will-o'-the-wisp" }
    ]
  
    ,
    "🤖 メカ設計・説得力 (Mechanical Credibility)": [
      { ja: "機械設計感", en: "mechanical design" },
      { ja: "工業デザイン感", en: "industrial design" },
      { ja: "精密工学っぽさ", en: "precision engineering" },
      { ja: "高精細ディテール", en: "high fidelity details" },
      { ja: "製品化前提の完成度", en: "production-ready design" },
      { ja: "機能優先デザイン", en: "functional design" },
      { ja: "設計図っぽい正確さ", en: "orthographic design feel" },
      { ja: "輪郭が読みやすい", en: "clean silhouette" }
    ]
};

  const API = {
    initUI(container) {
      const section = container.querySelector(".effect-section") || document.createElement("div");
      if (!section.className) {
        section.className = "effect-section";
        const h = document.createElement("div");
        h.textContent = "✨ エフェクト・演出 (Effects)";
        h.style.fontWeight = "bold"; h.style.color = "#8e44ad"; h.style.marginBottom = "8px";
        section.appendChild(h);
        container.appendChild(section);
      }

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.open = false; 
        details.style.marginBottom = "8px";
        details.style.border = "1px solid #d0e0ff"; 
        details.style.borderRadius = "4px";
        
        const summary = document.createElement("summary");
        summary.innerHTML = `${cat} <span style="font-size:0.8em; color:#0056b3;">(Ex)</span>`;
        summary.style.cursor = "pointer";
        summary.style.fontSize = "0.9em";
        summary.style.fontWeight = "bold";
        summary.style.padding = "6px";
        summary.style.backgroundColor = "#f0f8ff";
        summary.style.color = "#004080";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.display = "flex";
        content.style.flexWrap = "wrap";
        content.style.gap = "6px";
        content.style.padding = "8px";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.fontSize = "0.85em";
          label.style.display = "flex";
          label.style.alignItems = "center";
          label.style.backgroundColor = "#fff"; 
          label.style.padding = "4px 8px";
          label.style.borderRadius = "4px";
          label.style.border = "1px solid #d0d0f0";
          label.style.cursor = "pointer";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          cb.style.marginRight = "6px";
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.ja));
          content.appendChild(label);
        });

        details.appendChild(content);
        section.appendChild(details);
      });

      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(i => dict[i.en] = i.ja);
        window.__outputTranslation.register(dict);
      }
    },
    getTags() {
      const tags = [];
      document.querySelectorAll(".effect-section input[type='checkbox']:checked").forEach(cb => {
        if(cb.dataset.en) tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.effect.v3.js ---
(function(){
  "use strict";
  const VERSION = 3; // 拡張パック: デジタル・UI・画面演出 (完成版)
  const KEY = "effect";

  const CATEGORIES = {
    "📺 配信・実況・SNS (Stream & Social)": [
      { ja: "配信画面 (Livestream)", en: "livestream, live streaming interface, overlay, viewer count" },
      { ja: "YouTube風 (再生画面)", en: "youtube interface, video player, progress bar, play button, red accent" },
      { ja: "Twitch風 (紫/ゲーミング)", en: "twitch interface, purple theme, live chat overlay, facecam frame, gamer room" },
      { ja: "ニコニコ風 (流れる文字)", en: "niconico, danmaku, scrolling text overlay, many comments on screen" },
      // ★TikTok修正: スマホ本体が出ないよう、UIパーツのみを指定
      { ja: "TikTok風 (縦動画UI)", en: "tiktok interface, vertical video, social media app, music note icon, heart button, share icon, ui overlay" },
      { ja: "コメント欄オーバーレイ", en: "comment stream, chat log, text overlay, live reaction" },
      { ja: "ウェブカメラ枠 (ワイプ)", en: "webcam window, picture in picture, facecam, rectangle frame" },
      { ja: "SNS画面 (インスタ風)", en: "instagram interface, social media post, heart icon, smartphone screen" },
      { ja: "自撮り構図 (スマホ持ち)", en: "mirror selfie, holding phone, phone screen reflection" },
      { ja: "フェイクスクショ (枠)", en: "fake screenshot, screen capture, user interface" },
      { ja: "VTuber風", en: "vtuber, virtual youtuber, 2d avatar, anime avatar, facecam" }
    ],
    "🎮 ゲームUI・HUD (Game Interface)": [
      { ja: "ゲームプレイ画面 (FPS/RPG)", en: "gameplay screenshot, in-game ui, video game mechanics" },
      { ja: "HUD (SF/未来的)", en: "hud, heads-up display, futuristic ui, sci-fi interface" },
      { ja: "HPバー/体力ゲージ", en: "health bar, life gauge, status bar, game icons" },
      { ja: "ミニマップ", en: "minimap, radar, compass overlay" },
      { ja: "スキルアイコン/スロット", en: "skill icons, inventory slots, hotbar" },
      { ja: "テキストボックス (RPG風)", en: "rpg text box, dialogue window, pixel text" },
      { ja: "ノベルゲーム風 (ADV)", en: "visual novel style, dating sim interface, text box at bottom" },
      { ja: "ドット絵・レトロゲー", en: "pixel art, 8-bit, 16-bit, retro game style" },
      { ja: "ガチャ画面風", en: "gacha screen, summon result, ssr, rarity stars" }
    ],
    "📹 モニター・画質演出 (Screen Artifacts)": [
      { ja: "VHS (ビデオテープ風)", en: "vhs artifacts, tracking error, magnetic tape noise, 90s footage" },
      { ja: "グリッチ (バグ・ノイズ)", en: "glitch art, datamoshing, digital distortion, corrupted image" },
      { ja: "砂嵐・スタティック", en: "static noise, television snow, grainy texture" },
      { ja: "走査線 (スキャンライン)", en: "scanlines, crt screen effect, interlaced video" },
      { ja: "監視カメラ (CCTV)", en: "cctv overlay, security camera, night vision, rec icon, monochrome" },
      { ja: "低画質 (圧縮ノイズ)", en: "lowres, jpeg artifacts, compression noise, blurry" },
      { ja: "魚眼レンズ", en: "fisheye lens, distorted view, gopro footage" }
    ],
    "🖼️ 枠・フレーム (Frames)": [
      // ★レターボックス強化: 強調構文と映画用語を追加
      { ja: "レターボックス (映画枠)", en: "letterbox, (black bars:1.4), movie screencap, cinematic aspect ratio, widescreen, anamorphic lens, 2.35:1" },
      { ja: "ポラロイド枠", en: "polaroid frame, instant photo border" },
      { ja: "スマホ画面越し", en: "view through smartphone, phone camera interface, rec button" }
    ]
  
    ,
    "🤖 メカ設計・説得力 (Mechanical Credibility)": [
      { ja: "機械設計感", en: "mechanical design" },
      { ja: "工業デザイン感", en: "industrial design" },
      { ja: "精密工学っぽさ", en: "precision engineering" },
      { ja: "高精細ディテール", en: "high fidelity details" },
      { ja: "製品化前提の完成度", en: "production-ready design" },
      { ja: "機能優先デザイン", en: "functional design" },
      { ja: "設計図っぽい正確さ", en: "orthographic design feel" },
      { ja: "輪郭が読みやすい", en: "clean silhouette" }
    ]
};

  const DICT = {
    // 配信・SNS系
    "livestream": "配信画面", "live streaming interface": "配信UI", "overlay": "オーバーレイ", "viewer count": "視聴者数",
    "youtube interface": "YouTube風UI", "video player": "動画プレーヤー", "progress bar": "進行バー", "play button": "再生ボタン", "red accent": "赤アクセント",
    "twitch interface": "Twitch風UI", "purple theme": "紫テーマ", "live chat overlay": "チャット欄", "facecam frame": "顔出し枠", "gamer room": "ゲーミング部屋",
    "niconico": "ニコニコ", "danmaku": "弾幕", "scrolling text overlay": "流れるコメント", "many comments on screen": "画面コメント",
    
    // TikTok関連
    "tiktok interface": "TikTok風UI", "vertical video": "縦動画", "social media app": "SNSアプリ", "music note icon": "音符アイコン", "heart button": "いいねボタン", "share icon": "シェアボタン", "ui overlay": "UI表示",
    
    "comment stream": "コメント欄", "chat log": "チャットログ", "text overlay": "テキスト表示", "live reaction": "リアクション",
    "webcam window": "ワイプ枠", "picture in picture": "PinP", "facecam": "顔出し", "rectangle frame": "長方形枠",
    "instagram interface": "インスタ風UI", "social media post": "SNS投稿", "heart icon": "ハートアイコン", "smartphone screen": "スマホ画面",
    "mirror selfie": "鏡越し自撮り", "holding phone": "スマホ持ち", "phone screen reflection": "画面反射",
    "fake screenshot": "フェイクスクショ", "screen capture": "キャプチャ", "user interface": "UI",
    "vtuber": "VTuber", "virtual youtuber": "バーチャルYouTuber", "2d avatar": "2Dアバター", "anime avatar": "アニメアバター",

    // ゲーム系
    "gameplay screenshot": "ゲーム画面", "in-game ui": "ゲームUI", "video game mechanics": "ゲームシステム",
    "hud": "HUD", "heads-up display": "ヘッドアップディスプレイ", "futuristic ui": "未来風UI", "sci-fi interface": "SF風UI",
    "health bar": "体力ゲージ", "life gauge": "HPバー", "status bar": "ステータスバー", "game icons": "ゲームアイコン",
    "minimap": "ミニマップ", "radar": "レーダー", "compass overlay": "コンパス",
    "skill icons": "スキルアイコン", "inventory slots": "インベントリ", "hotbar": "ホットバー",
    "rpg text box": "RPG風テキスト枠", "dialogue window": "会話ウィンドウ", "pixel text": "ドット文字",
    "visual novel style": "ノベルゲー風", "dating sim interface": "恋愛シムUI", "text box at bottom": "下部テキスト枠",
    "pixel art": "ドット絵", "8-bit": "8bit", "16-bit": "16bit", "retro game style": "レトロゲー風",
    "gacha screen": "ガチャ画面", "summon result": "召喚結果", "ssr": "SSR", "rarity stars": "レアリティ星",

    // モニター・画質系
    "vhs artifacts": "VHSノイズ", "tracking error": "トラッキングエラー", "magnetic tape noise": "磁気テープノイズ", "90s footage": "90年代映像",
    "glitch art": "グリッチ", "datamoshing": "データモッシュ", "digital distortion": "デジタル歪み", "corrupted image": "破損画像",
    "static noise": "砂嵐", "television snow": "TVノイズ", "grainy texture": "粒子感",
    "scanlines": "走査線", "crt screen effect": "CRT画面効果", "interlaced video": "インターレース",
    "cctv overlay": "監視カメラ枠", "security camera": "防犯カメラ", "night vision": "暗視", "rec icon": "RECアイコン", "monochrome": "モノクロ",
    "lowres": "低解像度", "jpeg artifacts": "JPEGノイズ", "compression noise": "圧縮ノイズ", "blurry": "ピンボケ",
    "fisheye lens": "魚眼レンズ", "distorted view": "歪んだ視界", "gopro footage": "GoPro映像",

    // フレーム
    "letterbox": "レターボックス", "(black bars:1.4)": "黒帯(強)", "movie screencap": "映画スクショ風", "cinematic aspect ratio": "シネマ比率", "widescreen": "ワイドスクリーン", "anamorphic lens": "アナモルフィックレンズ", "2.35:1": "シネスコ",
    "black bars": "黒帯",
    "polaroid frame": "ポラロイド枠", "instant photo border": "インスタント写真枠",
    "view through smartphone": "スマホ画面越し", "phone camera interface": "カメラインターフェース", "rec button": "録画ボタン"
  };

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      let parent = document.querySelector("#list-effect");
      if (!parent) return;

      const root = document.createElement("div");
      root.className = "effect-v3-container";

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "effect-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #dcdcdc; border-radius:4px; background:#fff;";
        details.open = false; 

        const summary = document.createElement("summary");
        summary.innerHTML = `${title} <span style="font-size:0.8em; color:#20c997;">(UI)</span>`;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f0fff9; color:#0c855a;";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:6px;";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          cb.style.marginRight = "6px";
          
          label.appendChild(cb);
          // 日本語のみ表示（マウスオーバーで英語）
          label.appendChild(document.createTextNode(`${item.ja}`));
          label.title = item.en;
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".effect-v3-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

