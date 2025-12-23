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

