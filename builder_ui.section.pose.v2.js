(function(){
  "use strict";

  const VERSION = 2; // ★ v1 に続く拡張なので v2
  const KEY = "pose";

  // 新規追加カテゴリ
  const CATEGORIES = {
    "ペア・カップルポーズ (Duo/Couple Tropes)": [
      { ja: "お姫様抱っこ", en: "princess carry" },
      { ja: "壁ドン", en: "kabedon" },
      { ja: "顎クイ", en: "chin lift (ago-kui)" },
      { ja: "膝枕", en: "lap pillow" },
      { ja: "バックハグ", en: "back hug" },
      { ja: "頭を撫でる", en: "head pat" },
      { ja: "あーん (食事させる)", en: "feeding someone" },
      { ja: "背中合わせ", en: "back-to-back" },
      { ja: "ダンス (ワルツ)", en: "dancing waltz" }
    ],
    "趣味・日常アクション (Hobby/Daily Actions)": [
      { ja: "ギターを弾く", en: "playing guitar" },
      { ja: "料理をする", en: "cooking" },
      { ja: "絵を描く", en: "drawing" },
      { ja: "写真を撮る", en: "taking a photo" },
      { ja: "掃除をする", en: "cleaning" },
      { ja: "お茶を飲む", en: "drinking tea" },
      { ja: "化粧をする", en: "applying makeup" },
      { ja: "ネクタイを結ぶ", en: "tying necktie" }
    ],
    "スポーツ・運動 (Sports/Exercise)": [
      { ja: "ストレッチ", en: "stretching" },
      { ja: "ヨガのポーズ", en: "yoga pose" },
      { ja: "走る (陸上)", en: "sprinting" },
      { ja: "泳ぐ", en: "swimming" },
      { ja: "ボールを蹴る", en: "kicking ball" },
      { ja: "ラケットを振る", en: "swinging racket" },
      { ja: "ボクシングの構え", en: "boxing stance" }
    ],
    "無重力・水中 (Zero Gravity/Underwater)": [
      { ja: "無重力浮遊", en: "zero gravity pose" },
      { ja: "水中浮遊", en: "floating underwater" },
      { ja: "髪が広がる (浮遊)", en: "hair floating" },
      { ja: "服が広がる (浮遊)", en: "clothes floating" },
      { ja: "逆さま", en: "upside-down" }
    ]
  };

  const API = {
    initUI(container) {
      // 既存の v1 の表示の下に追加する
      const section = document.createElement("div");
      section.className = "pose-v2-addon";
      section.style.borderTop = "2px dashed #ccc";
      section.style.marginTop = "10px";
      section.style.paddingTop = "10px";

      const title = document.createElement("div");
      title.textContent = "▼ 拡張パック (v2 Add-on)";
      title.style.fontSize = "0.9em";
      title.style.color = "#666";
      title.style.marginBottom = "5px";
      section.appendChild(title);

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.className = "pose-cat";
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
    },
    getTags() {
      const tags = [];
      document.querySelectorAll(".pose-v2-addon input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
