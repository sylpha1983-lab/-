(function(){
  "use strict";
  const VERSION = 1; // 現代ファッション基本編 (ドレス・スカート形状強化版)
  const KEY = "attire";

  const CATEGORIES = {
    "👚 トップス・シャツ (Tops & Shirts)": [
      { ja: "Tシャツ", en: "t-shirt" }, { ja: "白シャツ", en: "white shirt" },
      { ja: "ブラウス", en: "blouse" }, { ja: "Yシャツ", en: "collared shirt" },
      { ja: "タンクトップ", en: "tank top" }, { ja: "キャミソール", en: "camisole" },
      { ja: "チューブトップ", en: "tube top" }, { ja: "クロップトップ (へそ出し)", en: "crop top" },
      { ja: "ホルターネック", en: "halterneck" }, { ja: "ノースリーブシャツ", en: "sleeveless shirt" },
      { ja: "シースルーシャツ", en: "see-through shirt" }, { ja: "ポロシャツ", en: "polo shirt" },
      { ja: "タートルネック", en: "turtleneck" }, { ja: "胸空きタートル", en: "keyhole turtleneck" },
      { ja: "リブセーター", en: "ribbed sweater" }, { ja: "オフショルニット", en: "off-shoulder sweater" },
      { ja: "オーバーサイズパーカー", en: "oversized hoodie" }, { ja: "パーカー", en: "hoodie" },
      { ja: "カーディガン", en: "cardigan" }, { ja: "ベスト", en: "vest" }
    ],
    "🧥 アウター・ジャケット (Outerwear)": [
      { ja: "ジャケット", en: "jacket" }, { ja: "ブレザー", en: "blazer" },
      { ja: "トレンチコート", en: "trench coat" }, { ja: "ダッフルコート", en: "duffle coat" },
      { ja: "ピーコート", en: "peacoat" }, { ja: "ダウンジャケット", en: "puffer jacket" },
      { ja: "ライダース (革ジャン)", en: "biker jacket" }, { ja: "デニムジャケット", en: "denim jacket" },
      { ja: "スタジャン", en: "varsity jacket" }, { ja: "スカジャン", en: "sukajan" },
      { ja: "MA-1 (ボンバー)", en: "bomber jacket" }, { ja: "ウィンドブレーカー", en: "windbreaker" },
      { ja: "ボレロ", en: "bolero" }, { ja: "ポンチョ", en: "poncho" },
      { ja: "ケープコート", en: "cape coat" }, { ja: "腰巻きカーディガン", en: "cardigan around waist" },
      { ja: "肩掛けジャケット", en: "jacket over shoulders" }
    ],
    "👗 スカート・形状 (Skirts & Shapes)": [
      { ja: "ミニスカート", en: "miniskirt" }, { ja: "ロングスカート", en: "long skirt" },
      { ja: "プリーツスカート", en: "pleated skirt" }, { ja: "チェック柄スカート", en: "plaid skirt" },
      { ja: "タイトスカート (ペンシル)", en: "pencil skirt" }, { ja: "フレアスカート", en: "flared skirt" },
      { ja: "Aラインスカート", en: "a-line skirt" }, { ja: "フリルスカート", en: "frilled skirt" },
      { ja: "ティアード (段々)", en: "tiered skirt" }, { ja: "レイヤード (重ね)", en: "layered skirt" },
      { ja: "バルーンスカート", en: "bubble skirt" }, { ja: "巻きスカート", en: "wrap skirt" },
      { ja: "スリット入りスカート", en: "slit skirt" }, { ja: "ハイロースカート (前後丈違)", en: "high-low skirt" },
      { ja: "サスペンダースカート", en: "suspender skirt" }, { ja: "ジャンパースカート", en: "jumper skirt" },
      { ja: "サーキュラースカート", en: "circle skirt" }, { ja: "チュールスカート", en: "tulle skirt" }
    ],
    "💃 ドレス・ワンピース (Dresses & Gowns)": [
      { ja: "ワンピース", en: "one-piece dress" }, { ja: "サマードレス", en: "sundress" },
      { ja: "マキシ丈ワンピ", en: "maxi dress" }, { ja: "ミニワンピ", en: "mini dress" },
      { ja: "ニットワンピ", en: "sweater dress" }, { ja: "シャツワンピ", en: "shirt dress" },
      { ja: "ボディコンワンピ", en: "bodycon dress" }, { ja: "スリップドレス", en: "slip dress" },
      { ja: "カクテルドレス", en: "cocktail dress" }, { ja: "イブニングドレス", en: "evening gown" },
      { ja: "パーティードレス", en: "party dress" }, { ja: "舞踏会ドレス", en: "ballgown" },
      { ja: "プリンセスライン", en: "princess line dress" }, { ja: "Aラインドレス", en: "a-line dress" },
      { ja: "マーメイドドレス", en: "mermaid dress" }, { ja: "エンパイアウエスト", en: "empire waist dress" },
      { ja: "ホルターネックドレス", en: "halter dress" }, { ja: "ベアドレス (肩出し)", en: "strapless dress" },
      { ja: "背中空きドレス", en: "backless dress" }, { ja: "チャイナドレス", en: "cheongsam" } // v3/v12にもあるが人気なのでここにも
    ],
    "👖 ボトムス・パンツ (Pants & Shorts)": [
      { ja: "ジーンズ", en: "jeans" }, { ja: "ダメージジーンズ", en: "ripped jeans" },
      { ja: "スキニージーンズ", en: "skinny jeans" }, { ja: "ショートパンツ", en: "shorts" },
      { ja: "ホットパンツ", en: "hot pants" }, { ja: "デニムショーツ", en: "denim shorts" },
      { ja: "ドルフィンショーツ", en: "dolphin shorts" }, { ja: "カーゴパンツ", en: "cargo pants" },
      { ja: "レギンス/スパッツ", en: "leggings" }, { ja: "ハーレムパンツ", en: "harem pants" },
      { ja: "ベルボトム", en: "bell-bottoms" }, { ja: "ワイドパンツ", en: "wide leg pants" },
      { ja: "サブリナパンツ", en: "capri pants" }, { ja: "レザーパンツ", en: "leather pants" },
      { ja: "オーバーオール", en: "overalls" }, { ja: "サロペット", en: "salopette" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-attire") || container;
      parent.innerHTML = ""; 

      const section = document.createElement("div");
      section.className = "attire-v1-container";

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
      document.querySelectorAll(".attire-v1-container input[type='checkbox']:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

