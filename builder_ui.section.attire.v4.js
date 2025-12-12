(function(){
  "use strict";
  const VERSION = 4; // 下着・水着・足元の決定版
  const KEY = "attire";

  const CATEGORIES = {
    "👙 水着・スイムウェア (Swimwear Types)": [
      { ja: "ビキニ", en: "bikini" },
      { ja: "ワンピース水着", en: "one-piece swimsuit" },
      { ja: "モノキニ", en: "monokini" }, // ★追加
      { ja: "タンキニ", en: "tankini" }, // ★追加
      { ja: "マイクロビキニ", en: "micro bikini" },
      { ja: "紐ビキニ", en: "string bikini" }, // ★追加
      { ja: "フロントタイ (前結び)", en: "front-tie bikini" }, // ★追加
      { ja: "競泳水着", en: "competition swimsuit" },
      { ja: "スクール水着", en: "school swimsuit" },
      { ja: "白スク水", en: "white school swimsuit" }, // ★追加
      { ja: "スリングショット", en: "slingshot swimsuit" },
      { ja: "バンドゥビキニ", en: "bandeau bikini" }, // ★追加
      { ja: "フリルビキニ", en: "frilled bikini" }, // ★追加
      { ja: "ハイレグ", en: "highleg swimsuit" }
    ],
    "👙 下着・ランジェリー (Underwear/Lingerie)": [
      { ja: "ランジェリー (総称)", en: "lingerie" },
      { ja: "ブラジャー", en: "bra" },
      { ja: "スポーツブラ", en: "sports bra" },
      { ja: "パンティ", en: "panties" },
      { ja: "紐パン", en: "side-tie panties" },
      { ja: "縞パン (ボーダー)", en: "striped panties" }, // ★追加
      { ja: "Tバック/Gストリング", en: "thong" }, // ★追加
      { ja: "レースの下着", en: "lace underwear" }, // ★追加
      { ja: "サテンの下着", en: "satin lingerie" }, // ★追加
      { ja: "ベビードール", en: "babydoll" },
      { ja: "キャミソール", en: "camisole" },
      { ja: "コルセット", en: "corset" }, // ★追加
      { ja: "テディ", en: "teddy" }, // ★追加
      { ja: "さらし (胸)", en: "sarashi" }, // ★追加
      { ja: "ふんどし", en: "fundoshi" }, // ★追加
      { ja: "ニプレス", en: "pasties" } // ★追加
    ],
    "🧦 レッグウェア・靴下 (Legwear)": [
      { ja: "ニーソックス", en: "kneehighs" },
      { ja: "オーバーニー", en: "thighhighs" },
      { ja: "サイハイソックス", en: "thighhighs" },
      { ja: "パンスト", en: "pantyhose" },
      { ja: "黒タイツ", en: "black tights" },
      { ja: "網タイツ", en: "fishnets" },
      { ja: "ガーターベルト", en: "garter belt" },
      { ja: "白ソックス", en: "white socks" }, // ★追加
      { ja: "ルーズソックス", en: "loose socks" }, // ★追加
      { ja: "レッグウォーマー", en: "leg warmers" }, // ★追加
      { ja: "足袋 (タビ)", en: "tabi" } // ★追加
    ],
    "👠 靴 (Footwear)": [
      { ja: "スニーカー", en: "sneakers" },
      { ja: "ブーツ", en: "boots" },
      { ja: "ハイヒール", en: "high heels" },
      { ja: "ローファー", en: "loafers" },
      { ja: "サンダル", en: "sandals" },
      { ja: "裸足", en: "barefoot" }
    ],
    "😳 着こなし・状態 (State/Fetish)": [
      { ja: "絶対領域", en: "zettai ryouiki" },
      { ja: "透け感 (シースルー)", en: "see-through" },
      { ja: "濡れた服", en: "wet clothes" },
      { ja: "はだけた", en: "open clothes" },
      { ja: "ぴっちり (Skintight)", en: "skintight" },
      { ja: "胸元・谷間", en: "cleavage" },
      { ja: "へそ出し", en: "midriff" },
      { ja: "肩出し", en: "bare shoulders" },
      { ja: "食い込み", en: "clothing cutout" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-attire");
      if (!parent) return;

      const section = document.createElement("div");
      section.className = "attire-v4-container";

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
      document.querySelectorAll(".attire-v4-container input[type='checkbox']:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

