(function(){
  "use strict";
  const VERSION = 5; // 拡張パックE (デザイン詳細・柄・装飾)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "👚 袖・肩・腕 (Sleeves & Arms)": [
      { ja: "ノースリーブ (袖なし)", en: "sleeveless" }, { ja: "半袖", en: "short sleeves" },
      { ja: "長袖", en: "long sleeves" }, { ja: "パフスリーブ", en: "puff sleeves" },
      { ja: "萌え袖", en: "sleeves past fingers" }, { ja: "付け袖 (分離袖)", en: "detached sleeves" },
      { ja: "ベルスリーブ (広がり)", en: "bell sleeves" }, { ja: "オフショルダー", en: "off-shoulder" },
      { ja: "肩出し (ベアショルダー)", en: "bare shoulders" }, { ja: "ワイドスリーブ", en: "wide sleeves" }
    ],
    "🧣 襟・首元 (Neckline & Collars)": [
      { ja: "セーラー襟", en: "sailor collar" }, { ja: "タートルネック", en: "turtleneck" },
      { ja: "ホルターネック", en: "halterneck" }, { ja: "Vネック", en: "v-neck" },
      { ja: "深いVネック (胸元)", en: "plunging neckline" }, { ja: "襟付き", en: "collared" },
      { ja: "スタンドカラー", en: "stand collar" }, { ja: "フード付き", en: "hooded" }
    ],
    "👗 形状・フィット (Shape & Fit)": [
      { ja: "オーバーサイズ (だぼだぼ)", en: "oversized" }, { ja: "タイト (ぴっちり)", en: "tight" },
      { ja: "ボディコン", en: "bodycon" }, { ja: "ハイウエスト", en: "high waist" },
      { ja: "ローライズ", en: "low-rise" }, { ja: "Aライン", en: "a-line" },
      { ja: "スリット入り", en: "slit" }, { ja: "アシンメトリー (左右非対称)", en: "asymmetrical" }
    ],
    "🏁 柄・プリント (Patterns)": [
      { ja: "チェック柄 (プレイド)", en: "plaid" }, { ja: "タータンチェック", en: "tartan" },
      { ja: "ストライプ (縦縞)", en: "striped" }, { ja: "ボーダー (横縞)", en: "horizontal stripes" },
      { ja: "水玉 (ドット)", en: "polka dot" }, { ja: "花柄", en: "floral print" },
      { ja: "迷彩柄", en: "camouflage" }, { ja: "ヒョウ柄", en: "leopard print" },
      { ja: "アーガイル", en: "argyle" }, { ja: "和柄", en: "japanese pattern" },
      { ja: "ロゴプリント", en: "print shirt" }, { ja: "無地", en: "plain" }
    ],
    "🎀 装飾・ディテール (Decorations)": [
      { ja: "フリル", en: "frills" }, { ja: "レース", en: "lace" },
      { ja: "リボン", en: "ribbon" }, { ja: "大きなリボン", en: "big ribbon" },
      { ja: "ボタン", en: "buttons" }, { ja: "ファスナー/ジッパー", en: "zipper" },
      { ja: "ベルト/バックル", en: "belt" }, { ja: "チェーン (鎖)", en: "chain" },
      { ja: "コルセット編み上げ", en: "laced up" }, { ja: "ファー (毛皮)", en: "fur trim" },
      { ja: "ポンポン", en: "pom pom" }, { ja: "刺繍", en: "embroidery" }
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
      root.className = "attire-v5-container";
      
      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v5-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.val || cb.dataset.en); // val優先、なければen
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
