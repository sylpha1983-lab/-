(function(){
  "use strict";
  const VERSION = 9; // 拡張パックI (ヘッドウェア・フットウェア詳細)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "🎩 帽子・被り物 (Headwear)": [
      { ja: "野球キャップ", en: "baseball cap" }, { ja: "ニット帽 (ビーニー)", en: "beanie" },
      { ja: "ベレー帽", en: "beret" }, { ja: "バケットハット", en: "bucket hat" },
      { ja: "麦わら帽子", en: "straw hat" }, { ja: "サンバイザー", en: "sun visor" },
      { ja: "キャスケット", en: "newsboy cap" }, { ja: "フェドラ (中折れ帽)", en: "fedora" },
      { ja: "シルクハット", en: "top hat" }, { ja: "カウボーイハット", en: "cowboy hat" },
      { ja: "魔女の帽子", en: "witch hat" }, { ja: "ナースキャップ", en: "nurse cap" },
      { ja: "ポリスキャップ", en: "police cap" }, { ja: "フード", en: "hood" },
      { ja: "ボンネット", en: "bonnet" }, { ja: "ベール", en: "veil" }
    ],
    "👑 髪飾り・ヘッドアクセ (Hair Accessories)": [
      { ja: "ヘアリボン", en: "hair ribbon" }, { ja: "カチューシャ", en: "headband" },
      { ja: "アリスバンド", en: "alice band" }, { ja: "シュシュ", en: "scrunchie" },
      { ja: "ヘアピン/クリップ", en: "hair clip" }, { ja: "ヘアゴム", en: "hair tie" },
      { ja: "花の髪飾り", en: "hair flower" }, { ja: "かんざし", en: "kanzashi" },
      { ja: "ティアラ", en: "tiara" }, { ja: "王冠 (クラウン)", en: "crown" },
      { ja: "メイドヘッドドレス", en: "maid headdress" }, { ja: "シニヨンカバー", en: "hair bun cover" },
      { ja: "天使の輪 (ハロ)", en: "halo" }, { ja: "ヘッドフォン", en: "headphones" }
    ],
    "👠 靴・フットウェア (Footwear)": [
      { ja: "スニーカー", en: "sneakers" }, { ja: "ハイカット", en: "high-top sneakers" },
      { ja: "ローファー", en: "loafers" }, { ja: "上履き", en: "uwabaki" },
      { ja: "ハイヒール", en: "high heels" }, { ja: "パンプス", en: "pumps" },
      { ja: "厚底靴", en: "platform shoes" }, { ja: "サンダル", en: "sandals" },
      { ja: "グラディエーター", en: "gladiator sandals" }, { ja: "ブーツ", en: "boots" },
      { ja: "アンクルブーツ", en: "ankle boots" }, { ja: "コンバットブーツ", en: "combat boots" },
      { ja: "ニーハイブーツ", en: "thigh high boots" }, { ja: "下駄", en: "geta" },
      { ja: "草履", en: "zori" }, { ja: "裸足", en: "barefoot" }
    ],
    "🧦 レッグウェア・靴下 (Legwear)": [
      { ja: "ニーソックス", en: "kneehighs" }, { ja: "オーバーニー", en: "thighhighs" },
      { ja: "サイハイソックス", en: "thighhighs" }, { ja: "ルーズソックス", en: "loose socks" },
      { ja: "ラインソックス", en: "striped socks" }, { ja: "スクールソックス", en: "white socks" },
      { ja: "黒タイツ", en: "black tights" }, { ja: "パンスト", en: "pantyhose" },
      { ja: "網タイツ", en: "fishnets" }, { ja: "ガーターベルト", en: "garter belt" },
      { ja: "レッグウォーマー", en: "leg warmers" }, { ja: "トレンカ", en: "stirrup legwear" },
      { ja: "足袋 (タビ)", en: "tabi" }, { ja: "裸足 (脚)", en: "bare legs" }
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
      root.className = "attire-v9-container";
      
      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v9-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
