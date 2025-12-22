(function(){
  "use strict";
  const VERSION = 3; // 拡張パック: デジタル・UI・画面演出 (誘導ワード強化版)
  const KEY = "effect";

  const CATEGORIES = {
    "📺 配信・実況・SNS (Stream & Social)": [
      { ja: "配信画面 (Livestream)", en: "livestream, live streaming interface, overlay, viewer count" },
      { ja: "YouTube風 (再生画面)", en: "youtube interface, video player, progress bar, play button, red accent" },
      { ja: "Twitch風 (紫/ゲーミング)", en: "twitch interface, purple theme, live chat overlay, facecam frame, gamer room" },
      { ja: "ニコニコ風 (流れる文字)", en: "niconico, danmaku, scrolling text overlay, many comments on screen" },
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
      { ja: "レターボックス (映画枠)", en: "letterbox, cinematic aspect ratio, black bars" },
      { ja: "ポラロイド枠", en: "polaroid frame, instant photo border" },
      { ja: "スマホ画面越し", en: "view through smartphone, phone camera interface, rec button" }
    ]
  };

  const DICT = {
    "livestream": "配信画面", "video player": "動画プレーヤー", "progress bar": "進行バー",
    "play button": "再生ボタン", "twitch interface": "Twitch風UI", "purple theme": "紫テーマ",
    "scrolling text": "流れる文字", "danmaku": "弾幕", "comment stream": "コメント欄",
    "webcam window": "ワイプ枠", "instagram interface": "インスタ風UI", "smartphone screen": "スマホ画面",
    "gameplay screenshot": "ゲーム画面", "hud": "HUD", "health bar": "体力ゲージ",
    "minimap": "ミニマップ", "visual novel style": "ノベルゲー風", "pixel art": "ドット絵",
    "vhs artifacts": "VHSノイズ", "glitch art": "グリッチ", "scanlines": "走査線",
    "cctv overlay": "監視カメラ枠", "letterbox": "レターボックス"
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

