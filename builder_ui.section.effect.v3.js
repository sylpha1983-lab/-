(function(){
  "use strict";
  const VERSION = 3; // 拡張パック: デジタル・UI・画面演出
  const KEY = "effect";

  const CATEGORIES = {
    "📺 配信・実況・SNS (Stream & Social)": [
      { ja: "配信画面 (Livestream)", en: "livestream" },
      { ja: "YouTube風", en: "youtube" },
      { ja: "Twitch風", en: "twitch" },
      { ja: "ニコニコ動画風", en: "niconico" },
      { ja: "フェイクスクショ", en: "fake screenshot" },
      { ja: "スクリーンキャプチャ", en: "screen capture" },
      { ja: "コメント欄/流れる文字", en: "comment stream, scrolling text" },
      { ja: "ウェブカメラ枠", en: "webcam window" },
      { ja: "SNS画面", en: "social media" },
      { ja: "インスタグラム風", en: "instagram" },
      { ja: "自撮り構図", en: "selfie" }
    ],
    "🎮 ゲームUI・HUD (Game Interface)": [
      { ja: "ゲーム画面 (Gameplay)", en: "gameplay mechanics" },
      { ja: "HUD (ヘッドアップディスプレイ)", en: "hud" },
      { ja: "ユーザーインターフェース", en: "user interface" },
      { ja: "HPバー/体力ゲージ", en: "health bar" },
      { ja: "ミニマップ", en: "minimap" },
      { ja: "スキルアイコン", en: "skill icon" },
      { ja: "テキストボックス", en: "text box" },
      { ja: "吹き出し", en: "speech bubble" },
      { ja: "ノベルゲーム風", en: "visual novel" },
      { ja: "恋愛シミュレーション風", en: "dating sim" },
      { ja: "ピクセルアート/ドット絵", en: "pixel art, 8-bit" }
    ],
    "📹 モニター・画質演出 (Screen Artifacts)": [
      { ja: "VHS (ビデオテープ風)", en: "vhs" },
      { ja: "グリッチ (バグ表示)", en: "glitch" },
      { ja: "ノイズ・砂嵐", en: "noise, static noise" },
      { ja: "走査線 (スキャンライン)", en: "scanlines" },
      { ja: "色収差 (ズレ)", en: "chromatic aberration" },
      { ja: "魚眼レンズ", en: "fisheye" },
      { ja: "CCTV (監視カメラ)", en: "cctv" },
      { ja: "データモッシング", en: "datamoshing" },
      { ja: "低画質 (Low Res)", en: "lowres, bad quality" },
      { ja: "1990年代風", en: "1990s (style)" },
      { ja: "レトロTV", en: "retro tv" }
    ],
    "🖼️ 枠・フレーム (Frames)": [
      { ja: "レターボックス (映画枠)", en: "letterbox" },
      { ja: "ポラロイド枠", en: "polaroid frame" },
      { ja: "額縁", en: "framed" },
      { ja: "コラージュ", en: "collage" },
      { ja: "分割画面", en: "split screen" },
      { ja: "ピクチャーインピクチャー", en: "pip" }
    ]
  };

  const DICT = {
    "livestream": "配信画面", "fake screenshot": "フェイクスクショ", "screen capture": "キャプチャ",
    "comment stream": "コメント欄", "webcam window": "ワイプ枠", "social media": "SNS",
    "gameplay mechanics": "ゲーム画面", "hud": "HUD", "user interface": "UI",
    "health bar": "体力ゲージ", "minimap": "ミニマップ", "visual novel": "ノベルゲー",
    "pixel art": "ドット絵", "vhs": "VHS", "glitch": "グリッチ", "scanlines": "走査線",
    "chromatic aberration": "色収差", "cctv": "監視カメラ", "letterbox": "レターボックス"
  };

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      // v1/v2が作成した親を探す
      let parent = document.querySelector("#list-effect");
      if (!parent) return;

      const root = document.createElement("div");
      root.className = "effect-v3-container";

      // ヘルパー
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
