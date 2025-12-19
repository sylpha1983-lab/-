(function(){
  "use strict";
  const VERSION = 13; // 拡張パックM (労働・和カジュアル・人生)
  const KEY = "attire";

  const CATEGORIES = {
    "🛠️ ワーク・軽作業 (Labor & Part-time)": [
      { ja: "エプロン (カフェ)", en: "apron, cafe uniform" },
      { ja: "割烹着", en: "kappogi, white apron" },
      { ja: "スーパーの制服", en: "supermarket uniform, polo shirt, apron" },
      { ja: "コンビニ制服", en: "convenience store uniform" },
      { ja: "ガソリンスタンド", en: "gas station uniform" },
      { ja: "清掃員 (ツナギ)", en: "janitor uniform, jumpsuit" },
      { ja: "作業着 (工事)", en: "construction worker, safety vest, helmet" },
      { ja: "農作業着", en: "farming clothes, straw hat, towel around neck" },
      { ja: "オーバーオール", en: "dungarees" },
      { ja: "配達員", en: "delivery uniform, cap" }
    ],
    "👘 和装・くつろぎ (Japanese Casual)": [
      { ja: "甚平 (じんべい)", en: "jinbei" },
      { ja: "作務衣 (さむえ)", en: "samue" },
      { ja: "旅館の浴衣", en: "ryokan yukata, simple pattern" },
      { ja: "半纏 (はんてん)", en: "hanten, winter japanese coat" },
      { ja: "着崩した着物", en: "loose kimono, disheveled" },
      { ja: "さらし (胸)", en: "sarashi, breast wrap" },
      { ja: "ふんどし", en: "fundoshi" }, // v4にもあるが和装セットとして
      { ja: "湯上がりタオル", en: "towel around body, bath towel" },
      { ja: "手ぬぐい", en: "tenugui" }
    ],
    "🏥 ライフ・シチュエーション (Life Events)": [
      { ja: "入院着 (患者衣)", en: "hospital gown" },
      { ja: "パジャマ (病院)", en: "hospital pajamas" },
      { ja: "マタニティドレス", en: "maternity dress" },
      { ja: "喪服 (着物)", en: "mourning kimono, black kimono" },
      { ja: "喪服 (洋装)", en: "black mourning dress, veil" },
      { ja: "卒業ガウン", en: "graduation gown, mortarboard" },
      { ja: "囚人服 (縞)", en: "striped prison uniform" },
      { ja: "囚人服 (オレンジ)", en: "orange jumpsuit, prison uniform" },
      { ja: "拘束衣", en: "straitjacket" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-attire");
      if (!parent) return;

      // 既存コンテナ削除
      const existing = parent.querySelector(".attire-v13-container");
      if(existing) existing.remove();

      const section = document.createElement("div");
      section.className = "attire-v13-container";
      
      // 区切り線
      const sep = document.createElement("div");
      sep.style.cssText = "margin:15px 0 10px 0; border-top:1px dashed #ccc; text-align:center; color:#888; font-size:0.8em;";
      sep.textContent = "▼ ワーク・ライフスタイル (v13 Expanded) ▼";
      section.appendChild(sep);

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.style.marginBottom = "6px";
        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.fontWeight = "bold";
        summary.style.cursor = "pointer";
        summary.style.background = "#f9f9f9";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.padding = "8px";
        content.style.display = "grid";
        content.style.gridTemplateColumns = "repeat(auto-fill, minmax(140px, 1fr))";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.display = "flex";
          label.style.alignItems = "center";
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        details.appendChild(content);
        section.appendChild(details);
      });
      
      parent.appendChild(section);

      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(i => dict[i.en] = i.ja);
        window.__outputTranslation.register(dict);
      }
    },
    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v13-container input[type='checkbox']:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

