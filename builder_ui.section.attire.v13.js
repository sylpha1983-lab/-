(function(){
  "use strict";
  const VERSION = 13; // 拡張パックM (ワーク・和装・ライフスタイル)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "🛠️ ワーク・作業着 (Work & Labor)": [
      { ja: "ツナギ (ジャンプスーツ)", en: "jumpsuit" }, { ja: "作業着 (オーバーオール)", en: "dungarees" },
      { ja: "エプロン (カフェ)", en: "apron" }, { ja: "割烹着", en: "kappogi" },
      { ja: "安全ベスト", en: "safety vest" }, { ja: "ヘルメット (工事)", en: "hard hat" },
      { ja: "溶接マスク", en: "welding mask" }, { ja: "清掃員ユニフォーム", en: "janitor uniform" },
      { ja: "配達員ユニフォーム", en: "delivery uniform" }, { ja: "消防服", en: "firefighter uniform" }
    ],
    "👘 和装・カジュアル (Japanese Casual)": [
      { ja: "甚平", en: "jinbei" }, { ja: "作務衣", en: "samue" },
      { ja: "半纏 (はんてん)", en: "hanten" }, { ja: "浴衣ドレス", en: "yukata dress" },
      { ja: "花魁風", en: "oiran" }, { ja: "着物 (はだけ)", en: "open kimono" },
      { ja: "さらし (胸)", en: "sarashi" }, { ja: "足袋 (黒)", en: "black tabi" },
      { ja: "草履", en: "zori" }, { ja: "狐の面 (頭)", en: "fox mask on head" }
    ],
    "⚾ スポーツ・武道 (Sports & Martial Arts)": [
      { ja: "野球ユニフォーム", en: "baseball uniform" }, { ja: "サッカーユニフォーム", en: "soccer uniform" },
      { ja: "バスケユニフォーム", en: "basketball jersey" }, { ja: "剣道着", en: "kendo uniform" },
      { ja: "弓道着", en: "kyudo uniform" }, { ja: "空手着/柔道着", en: "karate gi" },
      { ja: "ボクシングパンツ", en: "boxing shorts" }, { ja: "フィギュアスケート衣装", en: "figure skating dress" },
      { ja: "新体操レオタード", en: "rhythmic gymnastics leotard" }, { ja: "ゴルフウェア", en: "golf wear" }
    ],
    "🏥 ライフ・シチュエーション (Life Events)": [
      { ja: "入院着 (患者衣)", en: "hospital gown" }, { ja: "パジャマ (病院)", en: "hospital pajamas" },
      { ja: "喪服 (着物)", en: "mourning kimono" }, { ja: "喪服 (ドレス)", en: "black mourning dress" },
      { ja: "マタニティドレス", en: "maternity dress" }, { ja: "卒業ガウン (アカデミック)", en: "graduation gown" },
      { ja: "囚人服 (縞)", en: "striped prison uniform" }, { ja: "拘束衣", en: "straitjacket" }
    ]
  };

  // 翻訳辞書
  const DICT = {};
  Object.values(ATTIRE_DATA).flat().forEach(item => {
    if(item.en && item.ja) DICT[item.en] = item.ja;
  });

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      let parent = document.querySelector("#list-attire");
      if (!parent) return;

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "attire-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        details.open = false; 

        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f9f9f9; color:#555;";
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
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const root = document.createElement("div");
      root.className = "attire-v13-container";
      
      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v13-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
