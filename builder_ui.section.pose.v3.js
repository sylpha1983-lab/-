(function(){
  "use strict";

  const VERSION = 3; // ★ 拡張パックB
  const KEY = "pose";

  const CATEGORIES = {
    "武器・戦闘アクション (Weapon & Combat)": [
      { ja: "剣を抜く", en: "drawing sword" },
      { ja: "剣を構える", en: "holding sword stance" },
      { ja: "銃を構える", en: "aiming gun" },
      { ja: "二丁拳銃", en: "dual wielding guns" },
      { ja: "弓を引く", en: "drawing bow" },
      { ja: "魔法を詠唱する", en: "casting spell gesture" },
      { ja: "盾で防ぐ", en: "blocking with shield" },
      { ja: "ナイフを逆手持ち", en: "reverse grip knife" },
      { ja: "殴りかかる", en: "punching motion" },
      { ja: "ハイキック", en: "high kick" }
    ],
    "身だしなみ・服の調整 (Grooming & Clothing)": [
      { ja: "髪を結ぶ", en: "tying hair" },
      { ja: "髪をかき上げる", en: "brushing hair back" },
      { ja: "ネクタイを緩める", en: "loosening tie" },
      { ja: "シャツのボタンを外す", en: "unbuttoning shirt" },
      { ja: "スカートをたくし上げる", en: "lifting skirt" },
      { ja: "靴下を履く/直す", en: "adjusting socks" },
      { ja: "眼鏡を直す", en: "adjusting glasses" },
      { ja: "手袋をはめる/脱ぐ", en: "putting on gloves" },
      { ja: "帽子を押さえる", en: "holding hat" }
    ],
    "パース・カメラ相互作用 (Perspective & Camera)": [
      { ja: "手を伸ばす (手前)", en: "reaching towards viewer" },
      { ja: "踏みつける (カメラ)", en: "stepping on camera" },
      { ja: "覗き込む (アップ)", en: "looking into camera close-up" },
      { ja: "魚眼レンズ構図", en: "fisheye lens perspective" },
      { ja: "自撮りポーズ", en: "taking selfie" },
      { ja: "背中越しに振り返る", en: "looking back over shoulder" },
      { ja: "極端なローアングル", en: "extreme low angle view" },
      { ja: "極端なハイアングル", en: "extreme high angle view" }
    ],
    "環境・家具との相互作用 (Environment & Furniture)": [
      { ja: "壁にもたれる", en: "leaning against wall" },
      { ja: "机に座る", en: "sitting on desk" },
      { ja: "窓の外を見る", en: "looking out window" },
      { ja: "ドアから顔を出す", en: "peeking through door" },
      { ja: "ベッドでうつ伏せ", en: "lying on stomach on bed" },
      { ja: "椅子に逆向きに座る", en: "sitting on chair backwards" },
      { ja: "手すりに寄りかかる", en: "leaning on railing" }
    ]
  };

  const API = {
    initUI(container) {
      const section = document.createElement("div");
      section.className = "pose-v3-addon";
      section.style.borderTop = "2px dashed #ccc";
      section.style.marginTop = "10px";
      section.style.paddingTop = "10px";

      const title = document.createElement("div");
      title.textContent = "▼ 拡張パックB (v3 Add-on)";
      title.style.fontSize = "0.9em";
      title.style.color = "#666";
      title.style.marginBottom = "5px";
      section.appendChild(title);

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.className = "pose-cat";
        details.open = false; // ★ 閉じておく

        const summary = document.createElement("summary");
        summary.textContent = cat;
        details.appendChild(summary);

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.display = "block";
          label.textContent = `${item.ja} / ${item.en}`;
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          label.prepend(cb);
          details.appendChild(label);
        });
        section.appendChild(details);
      });
      container.appendChild(section);

      // ★ 翻訳辞書への登録
      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(item => {
          if (item.en && item.ja) {
            dict[item.en] = item.ja;
          }
        });
        window.__outputTranslation.register(dict);
      }
    },
    getTags() {
      const tags = [];
      document.querySelectorAll(".pose-v3-addon input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

