(function(){
  "use strict";
  const VERSION = 2; // 制服・職業・スポーツ (大幅増量版)
  const KEY = "attire";

  const CATEGORIES = {
    "🏫 学校制服 (School Uniforms)": [
      { ja: "セーラー服", en: "sailor uniform" }, { ja: "夏服セーラー", en: "summer sailor uniform" },
      { ja: "ブレザー制服", en: "school uniform, blazer" }, { ja: "学ラン", en: "gakuran" },
      { ja: "カーディガン制服", en: "school uniform, cardigan" }, { ja: "ベスト制服", en: "school uniform, sweater vest" },
      { ja: "ジャンパースカート", en: "jumper skirt" }, { ja: "チェック柄スカート", en: "plaid skirt" },
      { ja: "体操服 (ブルマ)", en: "gym uniform, bloomers" }, { ja: "体操服 (短パン)", en: "gym uniform, gym shorts" },
      { ja: "スクール水着", en: "school swimsuit" }, { ja: "上履き", en: "uwabaki" }
    ],
    "💼 職業・公務 (Professional/Service)": [
      { ja: "スーツ (ビジネス)", en: "business suit" }, { ja: "OL制服 (ベスト)", en: "office lady uniform" },
      { ja: "警察官", en: "police uniform" }, { ja: "軍服", en: "military uniform" },
      { ja: "CA (客室乗務員)", en: "flight attendant uniform" }, { ja: "パイロット", en: "pilot uniform" },
      { ja: "探偵コート", en: "detective trench coat" }, { ja: "警備員", en: "security guard uniform" },
      { ja: "シェフ/コック", en: "chef uniform" }, { ja: "カフェ店員", en: "waitress apron" },
      { ja: "整備士 (ツナギ)", en: "mechanic jumpsuit" }, { ja: "巫女服", en: "miko attire" },
      { ja: "シスター", en: "nun habit" }, { ja: "消防士", en: "firefighter uniform" }
    ],
    "💉 医療・科学 (Medical/Science)": [
      { ja: "ナース服 (白)", en: "nurse uniform" }, { ja: "ナース服 (ピンク)", en: "pink nurse uniform" },
      { ja: "手術着 (スクラブ)", en: "scrubs" }, { ja: "白衣 (ドクター)", en: "lab coat" },
      { ja: "聴診器", en: "stethoscope" }, { ja: "眼帯 (医療用)", en: "medical eyepatch" }
    ],
    "🎉 エンタメ・衣装 (Entertainment)": [
      { ja: "メイド服", en: "maid apron" }, { ja: "クラシックメイド", en: "long maid dress" },
      { ja: "バニーガール", en: "bunny suit" }, { ja: "レースクイーン", en: "race queen" },
      { ja: "チアリーダー", en: "cheerleader" }, { ja: "アイドル衣装", en: "idol clothes" },
      { ja: "サンタコス", en: "santa costume" }, { ja: "チャイナドレス", en: "cheongsam" }
    ],
    "🏅 スポーツ・競技 (Sports/Athletics)": [
      { ja: "スポーツウェア", en: "sportswear" }, { ja: "ジャージ", en: "track suit" },
      { ja: "テニスウェア", en: "tennis uniform" }, { ja: "バレーユニフォーム", en: "volleyball uniform" },
      { ja: "バスケユニフォーム", en: "basketball jersey" }, { ja: "サッカーユニフォーム", en: "soccer uniform" },
      { ja: "野球ユニフォーム", en: "baseball uniform" }, { ja: "競泳水着", en: "competition swimsuit" },
      { ja: "陸上ユニフォーム", en: "track and field uniform" }, { ja: "フィギュア衣装", en: "figure skating dress" }
    ],
    "🥋 武道・格闘技 (Martial Arts)": [
      { ja: "柔道着/空手着", en: "gi" }, { ja: "剣道着", en: "kendo uniform" },
      { ja: "弓道着", en: "kyudo uniform" }, { ja: "ボクシングパンツ", en: "boxing shorts" },
      { ja: "カンフー服", en: "kung fu outfit" }, { ja: "忍者スーツ", en: "ninja suit" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-attire") || container;
      // v2はv1の下に追加する想定だが、単独動作も考慮
      
      // 既存のv2コンテナがあれば削除（更新用）
      const existing = parent.querySelector(".attire-v2-container");
      if(existing) existing.remove();

      const section = document.createElement("div");
      section.className = "attire-v2-container";
      
      // 区切り線
      const sep = document.createElement("div");
      sep.style.cssText = "margin:15px 0 10px 0; border-top:1px dashed #ccc; text-align:center; color:#888; font-size:0.8em;";
      sep.textContent = "▼ 制服・職業・スポーツ (v2 Expanded) ▼";
      section.appendChild(sep);

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.style.marginBottom = "6px";
        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.fontWeight = "bold";
        summary.style.cursor = "pointer";
        summary.style.background = "#f0f8ff"; // 薄い青で区別
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
      document.querySelectorAll(".attire-v2-container input[type='checkbox']:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

