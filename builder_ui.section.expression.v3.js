(function(){
  "use strict";

  const VERSION = 3; // ★ 拡張パックB
  const KEY = "expression";

  const CATEGORIES = {
    "戦闘・ダメージ・苦痛 (Combat & Pain)": [
      { ja: "雄叫び", en: "shouting battle cry" },
      { ja: "歯を食いしばる (苦痛)", en: "gritting teeth in pain" },
      { ja: "痛みに耐える", en: "enduring pain" },
      { ja: "絶望的な叫び", en: "desperate screaming" },
      { ja: "殺気立った目", en: "bloodlust eyes" },
      { ja: "虚ろな目 (ダメージ)", en: "empty eyes (trauma)" },
      { ja: "意識が遠のく", en: "losing consciousness" },
      { ja: "死に顔", en: "dead expression" }
    ],
    "異形・超常・ホラー (Supernatural & Horror)": [
      { ja: "目が光る (発光)", en: "glowing eyes" },
      { ja: "影に覆われた顔", en: "face shadowed by darkness" },
      { ja: "狂気じみた笑顔 (ヤンデレ)", en: "yandere smile" },
      { ja: "爬虫類の目", en: "reptilian eyes" },
      { ja: "ぐるぐる目 (催眠)", en: "hypnotized eyes" },
      { ja: "顔がない (のっぺらぼう)", en: "faceless" },
      { ja: "目が複数ある", en: "multiple eyes" },
      { ja: "口が裂ける", en: "slit mouth" }
    ],
    "食事・口元の詳細 (Eating & Mouth Actions)": [
      { ja: "舌なめずり", en: "licking lips" },
      { ja: "舌を出す (挑発)", en: "sticking tongue out" },
      { ja: "何かをくわえる", en: "holding object in mouth" },
      { ja: "噛みつく", en: "biting" },
      { ja: "キス顔", en: "kissing face" },
      { ja: "口を膨らませる (不満)", en: "pouting cheeks" },
      { ja: "もぐもぐ (食事)", en: "chewing food" },
      { ja: "飲み込む", en: "swallowing" }
    ],
    "視線・アングルの強調 (Gaze & Angles)": [
      { ja: "上目遣い", en: "looking up" },
      { ja: "見下ろす (蔑み)", en: "looking down (scorn)" },
      { ja: "横目で見る", en: "sideways glance" },
      { ja: "振り返って見る", en: "looking back" },
      { ja: "目を逸らす", en: "looking away" },
      { ja: "カメラ目線", en: "looking at viewer" },
      { ja: "じっと見つめる", en: "staring intently" }
    ]
  };

  const API = {
    initUI(container) {
      // 合体モード：既存のUIを消さずに、下に追加する
      const section = document.createElement("div");
      section.className = "expression-v3-addon";
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
        details.className = "expression-cat";
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

        // 排他制御
        details.addEventListener("change", e => {
          if (e.target.type === "checkbox" && e.target.checked) {
            details.querySelectorAll("input[type='checkbox']").forEach(c => {
              if (c !== e.target) c.checked = false;
            });
          }
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
      document.querySelectorAll(".expression-v3-addon input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

