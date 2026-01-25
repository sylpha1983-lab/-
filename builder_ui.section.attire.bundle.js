// Auto-generated bundle for section 'attire'
// Contains 19 versions stacked in ascending order.

(function(){
// --- builder_ui.section.attire.v1.js ---
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

})();

(function(){
// --- builder_ui.section.attire.v2.js ---
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

})();

(function(){
// --- builder_ui.section.attire.v3.js ---
(function(){
  "use strict";
  const VERSION = 3; // ファンタジー・民族・現代スタイル (統合版)
  const KEY = "attire";

  const CATEGORIES = {
    "⚔️ ファンタジー・RPGジョブ (Fantasy Class)": [
      { ja: "プレートアーマー (重装)", en: "plate armor" },
      { ja: "チェインメイル (鎖帷子)", en: "chainmail armor" },
      { ja: "レザーアーマー (軽装)", en: "leather armor" },
      { ja: "ビキニアーマー", en: "bikini armor" },
      { ja: "聖騎士 (パラディン)", en: "paladin armor" },
      { ja: "蛮族 (バーバリアン)", en: "barbarian clothes, fur trim" },
      { ja: "修道士 (モンク)", en: "monk robe" },
      { ja: "魔法使い (ローブ)", en: "wizard robe" },
      { ja: "司祭/クレリック", en: "cleric vestments" },
      { ja: "ドルイド (自然)", en: "druid clothes, leaf pattern" },
      { ja: "盗賊/ローグ", en: "thief clothes, hood" },
      { ja: "吟遊詩人 (バード)", en: "bard clothes" },
      { ja: "踊り子 (ダンサー)", en: "dancer outfit, belly dancer" },
      { ja: "死霊術師 (ネクロ)", en: "necromancer robe, skull accessories" }
    ],
    "🌏 世界の民族衣装 (World Traditional)": [
      { ja: "チャイナドレス (旗袍)", en: "cheongsam" },
      { ja: "漢服 (中国古典)", en: "hanfu" },
      { ja: "アオザイ (ベトナム)", en: "ao dai" },
      { ja: "チマチョゴリ (韓国)", en: "hanbok" },
      { ja: "サリー (インド)", en: "sari" },
      { ja: "ディアンドル (ドイツ)", en: "dirndl" },
      { ja: "レーダーホーゼン", en: "lederhosen" },
      { ja: "キルト (スコットランド)", en: "kilt" },
      { ja: "フラメンコドレス", en: "flamenco dress" },
      { ja: "マタドール (闘牛士)", en: "matador costume" },
      { ja: "カフタン (中東)", en: "kaftan" },
      { ja: "ネイティブアメリカン", en: "native american regalia" },
      { ja: "フラダンス衣装", en: "hula outfit" }
    ],
    "👘 日本の伝統衣装 (Japanese Traditional)": [
      { ja: "着物 (基本)", en: "kimono" },
      { ja: "振袖", en: "furisode" },
      { ja: "留袖", en: "tomesode" },
      { ja: "白無垢 (花嫁)", en: "shiromuku" },
      { ja: "色打掛", en: "uchikake" },
      { ja: "浴衣", en: "yukata" },
      { ja: "袴 (ハカマ)", en: "hakama" },
      { ja: "巫女服", en: "miko attire" },
      { ja: "忍者装束", en: "ninja suit" },
      { ja: "侍 (着流し)", en: "samurai clothes" },
      { ja: "法被 (ハッピ)", en: "happi coat" }
    ],
    "🕶️ ファッションスタイル (Modern Styles)": [
      { ja: "ストリート系", en: "streetwear, oversized" },
      { ja: "テックウェア (機能的)", en: "techwear, straps, black" },
      { ja: "サイバーパンク", en: "cyberpunk attire, neon" },
      { ja: "スチームパンク", en: "steampunk attire, gears, brown" },
      { ja: "ゴシック", en: "gothic fashion" },
      { ja: "パンク", en: "punk fashion" },
      { ja: "グランジ", en: "grunge fashion" },
      { ja: "プレッピー (優等生)", en: "preppy style" },
      { ja: "ダークアカデミア", en: "dark academia, tweed, vintage" }, // ★追加
      { ja: "コテージコア (田舎風)", en: "cottagecore, peasant dress" }, // ★追加
      { ja: "ボヘミアン", en: "bohemian style" },
      { ja: "ヴィンテージ/レトロ", en: "vintage style" },
      { ja: "オートクチュール", en: "haute couture, avant-garde" }, // ★追加
      { ja: "アスレジャー (スポーティ)", en: "athleisure, sporty" }, // ★追加
      { ja: "ミニマリスト", en: "minimalist fashion" } // ★追加
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-attire");
      if (!parent) return;

      const existing = parent.querySelector(".attire-v3-container");
      if(existing) existing.remove();

      const section = document.createElement("div");
      section.className = "attire-v3-container";
      
      const sep = document.createElement("div");
      sep.style.cssText = "margin:15px 0 10px 0; border-top:1px dashed #ccc; text-align:center; color:#888; font-size:0.8em;";
      sep.textContent = "▼ ファンタジー・民族・スタイル (v3 Expanded) ▼";
      section.appendChild(sep);

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.style.marginBottom = "6px";
        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.fontWeight = "bold";
        summary.style.cursor = "pointer";
        summary.style.background = "#fff8e1"; 
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
      document.querySelectorAll(".attire-v3-container input[type='checkbox']:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.attire.v4.js ---
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

})();

(function(){
// --- builder_ui.section.attire.v5.js ---
(function(){
  "use strict";
  const VERSION = 5; // 拡張パックE (デザイン詳細・柄)
  const KEY = "attire";

  const ATTIRE_DATA = {

    "🪩 ホログラフィック衣装 (Holographic Outfits)": [
      { ja: "ホログラフィック・ボディスーツ", en: "holographic bodysuit" },
      { ja: "ホログラフィック・タクティカルスーツ", en: "holographic tactical suit" },
      { ja: "ホログラフィック・オペレーターユニフォーム", en: "holographic operator uniform" },
      { ja: "ホログラフィック・ドレス", en: "holographic dress" },
      { ja: "透明ホロ・クローク", en: "transparent holo-cloak" },
      { ja: "プリズム発光アーマー", en: "prismatic light-emitting armor" }
    ],

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
      // リボンやベルトは accessories に移動したため削除
      { ja: "ボタン", en: "buttons" }, { ja: "ファスナー/ジッパー", en: "zipper" },
      { ja: "コルセット編み上げ", en: "laced up" }, 
      { ja: "ファー (トリミング)", en: "fur trim" }, // 部分的なファーは装飾として残す
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
        tags.push(cb.dataset.val || cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.attire.v6.js ---
(function(){
  "use strict";
  const VERSION = 6; // 拡張パックF (状態・ダメージ・着こなし)
  const KEY = "attire";

  // ★ 素材(Leather等)や質感(Shiny等)を削除し、状態異常に特化
  const ATTIRE_DATA = {
    "💥 ダメージ・汚れ (Damage & Dirt)": [
      { ja: "破れた服", en: "torn clothes" },
      { ja: "ボロボロ", en: "tattered" },
      { ja: "ダメージ加工", en: "distressed clothes" },
      { ja: "切り裂かれた", en: "slashed clothes" },
      { ja: "泥汚れ", en: "muddy" },
      { ja: "血まみれ", en: "bloodstained" },
      { ja: "オイル汚れ", en: "oil stains" },
      { ja: "焦げ跡", en: "burnt clothes" },
      { ja: "濡れた服", en: "wet clothes" }
    ],
    "😳 着崩し・脱衣 (Undressing & Open)": [
      { ja: "はだけた", en: "open clothes" },
      { ja: "前開き", en: "unzipped" },
      { ja: "ボタン外し", en: "unbuttoned" },
      { ja: "脱ぎかけ", en: "undressing" },
      { ja: "肩出し (オフショル)", en: "off-shoulder" },
      { ja: "片方だけ脱げた", en: "clothes slipping off" },
      { ja: "ブラが見えている", en: "bra visible" },
      { ja: "パンツが見えている", en: "panties visible" },
      { ja: "シャツを捲り上げる", en: "shirt lift" },
      { ja: "スカート捲り", en: "skirt lift" }
    ],
    "サイズ感・フィット (Fit)": [
      { ja: "オーバーサイズ (ぶかぶか)", en: "oversized" },
      { ja: "萌え袖", en: "sleeves past fingers" },
      { ja: "ピチピチ (タイト)", en: "tight clothes" },
      { ja: "ボディコンシャス", en: "bodycon" },
      { ja: "サイズが合っていない", en: "ill-fitted clothes" }
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
        // 特殊な状態指定なので、デフォルトは閉じておく
        details.open = false; 

        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#fff0f5; color:#8b0000;";
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
      root.className = "attire-v6-container";
      
      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v6-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.attire.v7.js ---
(function(){
  "use strict";
  const VERSION = 7; // 拡張パックG (ファッション系統・サブカル)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "🦄 原宿・カワイイ系 (Harajuku/Kawaii)": [
      { ja: "ゆめかわいい", en: "yume kawaii" }, 
      { ja: "病みかわいい", en: "yami kawaii" },
      { ja: "フェアリー系", en: "fairy kei" }, 
      { ja: "デコラ (派手)", en: "decora" },
      { ja: "ポップ系", en: "pop kei" }, 
      { ja: "ロリータ (基本)", en: "lolita fashion" },
      { ja: "原宿スタイル", en: "harajuku style" }
    ],
    "🖤 地雷・量産・ゴシック (Dark/Girly)": [
      { ja: "地雷系 (Jiraikei)", en: "jiraikei" }, 
      { ja: "量産型 (Ryousangata)", en: "ryousangata" },
      { ja: "パステルゴス", en: "pastel goth" }, 
      { ja: "ゴシック", en: "gothic" },
      { ja: "メンヘラ", en: "menhera" }, 
      { ja: "パンク", en: "punk fashion" },
      { ja: "ロック", en: "rock style" }
    ],
    "🌺 ギャル・レトロ・森 (Gal/Retro/Mori)": [
      { ja: "ギャル", en: "gyaru" }, 
      { ja: "姫ギャル", en: "hime gyaru" },
      { ja: "コギャル (90s)", en: "kogal" }, 
      { ja: "森ガール", en: "mori girl" },
      { ja: "ドーリー系 (人形)", en: "dolly kei" }, 
      { ja: "カルトパーティ系", en: "cult party kei" },
      { ja: "アンティークドール", en: "antique doll" },
      { ja: "Y2Kファッション", en: "y2k fashion" }
    ],
    "🎀 ロリータ派生 (Lolita Subgenres)": [
      { ja: "甘ロリ (スウィート)", en: "sweet lolita" }, 
      { ja: "クラロリ (クラシック)", en: "classic lolita" },
      { ja: "ゴスロリ", en: "gothic lolita" }, 
      { ja: "和ロリ (着物風)", en: "wa-lolita" },
      { ja: "中華ロリ (チャイナ風)", en: "qi-lolita" }, 
      { ja: "ミリタリーロリータ", en: "military lolita" },
      { ja: "パンクロリータ", en: "punk lolita" }, 
      { ja: "姫ロリ", en: "hime lolita" }
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
      root.className = "attire-v7-container";
      
      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      // v1のコンテナに追加
      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v7-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();

(function(){
// --- builder_ui.section.attire.v8.js ---
(function(){
  "use strict";
  const VERSION = 8; // 拡張パックH (SF・戦術・特殊衣装)
  const KEY = "attire";

  // ★ 小物(ゴーグル等)は accessories.v1.js に移動し、スーツ本体のみ残す
  const ATTIRE_DATA = {
    "🤖 SF・近未来スーツ (Sci-Fi Suits)": [
      { ja: "プラグスーツ", en: "plugsuit" }, { ja: "パイロットスーツ", en: "pilot suit" },
      { ja: "メカニカルスーツ", en: "mechanical suit" }, { ja: "サイバースーツ", en: "cybersuit" },
      { ja: "宇宙服", en: "space suit" }, { ja: "強化外骨格", en: "exoskeleton" },
      { ja: "ナノスーツ", en: "nano suit" }, { ja: "アンドロイドパーツ", en: "android parts" },
      { ja: "発光スーツ", en: "glowing suit" }, { ja: "ボディアーマー (SF)", en: "sci-fi armor" }
    ],
    "🔫 タクティカル・軍事 (Tactical Gear)": [
      { ja: "タクティカルベスト", en: "tactical vest" }, { ja: "プレートキャリア", en: "plate carrier" },
      { ja: "チェストリグ", en: "chest rig" }, { ja: "防弾チョッキ", en: "bulletproof vest" },
      { ja: "コンバットシャツ", en: "combat shirt" }, { ja: "カーゴパンツ", en: "cargo pants" },
      { ja: "ギリースーツ", en: "ghillie suit" }, { ja: "迷彩服 (カモ)", en: "camouflage uniform" },
      { ja: "軍用ハーネス", en: "military harness" }
      // ガスマスク、暗視ゴーグルは accessories へ移動
    ],
    "🦸 ヒーロー・バトル (Hero & Battle)": [
      { ja: "ヒーロースーツ", en: "superhero suit" }, { ja: "戦隊スーツ", en: "sentai suit" },
      { ja: "バトルスーツ", en: "battlesuit" }, { ja: "レオタード", en: "leotard" },
      { ja: "ハイレグ", en: "highleg" }, { ja: "忍者スーツ", en: "ninja suit" },
      { ja: "くノ一衣装", en: "kunoichi outfit" }, { ja: "格闘着", en: "fighting suit" },
      { ja: "レーシングスーツ", en: "racing suit" }, { ja: "ライダースーツ", en: "rider suit" }
    ],
    "⚠️ ユニーク・特殊衣装 (Unique/Special)": [
      { ja: "拘束衣", en: "straitjacket" }, { ja: "防護服 (ハズマット)", en: "hazmat suit" },
      { ja: "囚人服", en: "prison uniform" }, { ja: "包帯巻き", en: "bandaged" },
      { ja: "ミイラ", en: "mummy" }, { ja: "スケルトンスーツ", en: "skeleton suit" },
      { ja: "透明レインコート", en: "transparent raincoat" }, { ja: "ビニール服", en: "plastic clothes" },
      { ja: "ボロ布", en: "rags" }, { ja: "裸エプロン", en: "naked apron" },
      { ja: "裸リボン", en: "naked ribbon" }
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
      root.className = "attire-v8-container";
      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });
      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },
    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v8-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.attire.v9.js ---
(function(){
  "use strict";
  const VERSION = 9; // 拡張パックI (フットウェア・レッグウェア詳細)
  const KEY = "attire";

  // ★ 帽子や髪飾りは accessories.v1.js に任せ、足元詳細に特化
  const ATTIRE_DATA = {
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

})();

(function(){
// --- builder_ui.section.attire.v10.js ---
(function(){
  "use strict";
  const VERSION = 10; // 拡張パックJ (部屋着・スポーツ・コスプレ詳細)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "🛌 部屋着・リラックス (Roomwear)": [
      { ja: "パジャマ", en: "pajamas" }, { ja: "ネグリジェ", en: "negligee" },
      { ja: "ベビードール", en: "babydoll" }, { ja: "キャミソール", en: "camisole" },
      { ja: "オーバーサイズパーカー", en: "oversized hoodie" }, { ja: "彼シャツ (Yシャツ一枚)", en: "boyfriend shirt" },
      { ja: "パーカー＆パンツ", en: "hoodie and panties" }, { ja: "タンクトップ＆短パン", en: "tank top and shorts" },
      { ja: "バスローブ", en: "bathrobe" }, { ja: "タオル一枚", en: "towel" }
    ],
    "🏃 スポーツ・アクティブ (Activewear)": [
      { ja: "ヨガパンツ", en: "yoga pants" }, { ja: "レギンス", en: "leggings" },
      { ja: "スポーツブラ", en: "sports bra" }, { ja: "トラックジャケット", en: "track jacket" },
      { ja: "テニスウェア", en: "tennis uniform" }, { ja: "バレーユニフォーム", en: "volleyball uniform" },
      { ja: "ラッシュガード", en: "rash guard" }, { ja: "ウェットスーツ", en: "wetsuit" },
      { ja: "バイカーショーツ", en: "bike shorts" }, { ja: "サンバイザー", en: "sun visor" }
    ],
    "🎃 コスプレ・職業詳細 (Cosplay/Jobs)": [
      { ja: "レースクイーン", en: "race queen" }, { ja: "チアリーダー", en: "cheerleader" },
      { ja: "バニーガール", en: "bunny suit" }, { ja: "逆バニー", en: "reverse bunny suit" },
      { ja: "ミニスカポリス", en: "police miniskirt" }, { ja: "ナース (ミニ)", en: "nurse dress" },
      { ja: "メイド (ミニ)", en: "maid mini dress" }, { ja: "フレンチメイド", en: "french maid" },
      { ja: "シスター (ミニ)", en: "nun mini habit" }, { ja: "チャイナ (スリット)", en: "china dress high slit" },
      { ja: "サンタ (ビキニ)", en: "santa bikini" }, { ja: "くノ一 (忍者)", en: "kunoichi" }
    ],
    "👙 水着・露出高め (Swimwear+)": [
      { ja: "マイクロビキニ", en: "micro bikini" }, { ja: "スリングショット", en: "slingshot swimsuit" },
      { ja: "競泳水着 (ハイレグ)", en: "competition swimsuit highleg" }, { ja: "スクール水着 (旧)", en: "old school swimsuit" },
      { ja: "貝殻ビキニ", en: "shell bikini" }, { ja: "チューブトップビキニ", en: "bandeau bikini" },
      { ja: "モノキニ", en: "monokini" }, { ja: "パレオ", en: "pareo" },
      { ja: "極小水着", en: "tiny swimwear" }
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
      root.className = "attire-v10-container";
      
      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v10-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();

(function(){
// --- builder_ui.section.attire.v11.js ---
(function(){
  "use strict";
  const VERSION = 11; // 拡張パックK (ネイル・手元特化)
  const KEY = "attire";

  // ★ 小物・武器・マスクは accessories.v1.js に任せ、手元・ネイルに特化
  const ATTIRE_DATA = {
    "💅 ネイル・爪 (Nails & Claws)": [
      { ja: "マニキュア/ネイル", en: "nail polish" }, { ja: "赤ネイル", en: "red nails" },
      { ja: "黒ネイル", en: "black nails" }, { ja: "ピンクネイル", en: "pink nails" },
      { ja: "フレンチネイル", en: "french manicure" },
      { ja: "長い爪", en: "long nails" }, { ja: "鋭い爪 (Claws)", en: "claws" },
      { ja: "ネイルアート", en: "nail art" }, { ja: "グラデーションネイル", en: "gradient nails" },
      { ja: "グリッターネイル", en: "glitter nails" }
    ],
    "🧤 手袋・ハンドウェア (Gloves & Hands)": [
      { ja: "指なし手袋", en: "fingerless gloves" },
      { ja: "ロンググローブ", en: "long gloves" },
      { ja: "革手袋", en: "leather gloves" },
      { ja: "レース手袋", en: "lace gloves" },
      { ja: "ラテックス手袋", en: "latex gloves" },
      { ja: "ミトン", en: "mittens" },
      { ja: "ボクシンググローブ", en: "boxing gloves" },
      { ja: "包帯 (手)", en: "bandaged hands" }
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
      root.className = "attire-v11-container";
      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });
      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },
    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v11-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.attire.v12.js ---
(function(){
  "use strict";
  const VERSION = 12; // 拡張パックL (サーカス・歴史・概念・無法者)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "🎪 サーカス・舞台衣装 (Circus & Stage)": [
      { ja: "ピエロ衣装", en: "clown suit" },
      { ja: "道化師 (ジェスター)", en: "jester costume" },
      { ja: "団長 (リングマスター)", en: "ringmaster outfit" },
      { ja: "マジシャン燕尾服", en: "magician suit, tailcoat" },
      { ja: "バニーマジシャン", en: "magician bunny suit" },
      { ja: "バレエ (チュチュ)", en: "ballet tutu" },
      { ja: "レオタード (曲芸)", en: "acrobat leotard" },
      { ja: "カーニバル衣装", en: "carnival costume, feathers" },
      { ja: "仮面舞踏会ドレス", en: "masquerade dress" },
      { ja: "歌姫ドレス (オペラ)", en: "diva dress, opera gown" },
      { ja: "バーレスク衣装", en: "burlesque outfit" }
    ],
    "🏛️ 古典・歴史的衣装 (Ancient & Historical)": [
      { ja: "トーガ (古代ローマ)", en: "toga" },
      { ja: "チュニック", en: "tunic" },
      { ja: "グラディエーター鎧", en: "gladiator armor" },
      { ja: "シュミーズ (中世下着)", en: "chemise" },
      { ja: "コルセットドレス", en: "corset dress" },
      { ja: "クリノリン (骨組み)", en: "crinoline" },
      { ja: "バッスルドレス (腰当)", en: "bustle dress" },
      { ja: "貴族の服", en: "aristocrat clothes" },
      { ja: "農民の服", en: "peasant clothes" },
      { ja: "王族のマント", en: "royal cape" },
      { ja: "宮廷ドレス (ロココ)", en: "rococo gown" },
      { ja: "ハイネックドレス (ヴィクトリアン)", en: "victorian dress" }
    ],
    "🏴‍☠️ 海賊・無法者 (Pirate & Outlaw)": [
      { ja: "海賊コート", en: "pirate coat" },
      { ja: "ボーダーシャツ", en: "striped shirt, torn" },
      { ja: "カウボーイベスト", en: "cowboy vest" },
      { ja: "チャップス (革脚絆)", en: "chaps" },
      { ja: "ポンチョ (西部劇)", en: "poncho" },
      { ja: "盗賊の服", en: "bandit clothes" },
      { ja: "ローグ/暗殺者", en: "assassin outfit, hood" },
      { ja: "バイカーベスト", en: "biker vest, leather" },
      { ja: "囚人服 (中世)", en: "medieval prisoner rags" }
    ],
    "🌌 概念・エレメンタル (Conceptual & Elemental)": [
      { ja: "炎のドレス", en: "dress made of fire" },
      { ja: "水の服", en: "clothes made of water" },
      { ja: "氷のアーマー", en: "ice armor" },
      { ja: "光る服", en: "glowing clothes" },
      { ja: "影の服", en: "shadow clothes" },
      { ja: "花のドレス", en: "flower dress" },
      { ja: "葉っぱの服", en: "leaf clothes" },
      { ja: "雲のドレス", en: "cloud dress" },
      { ja: "銀河のドレス", en: "galaxy dress" },
      { ja: "不可視 (インビジブル)", en: "invisible clothes" },
      { ja: "エネルギー体", en: "energy body" },
      { ja: "ホログラム服", en: "holographic clothing" }
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

      // 既存コンテナ削除
      const existing = parent.querySelector(".attire-v12-container");
      if(existing) existing.remove();

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
      root.className = "attire-v12-container";
      
      // 区切り線
      const sep = document.createElement("div");
      sep.style.cssText = "margin:15px 0 10px 0; border-top:1px dashed #ccc; text-align:center; color:#888; font-size:0.8em;";
      sep.textContent = "▼ サーカス・歴史・概念 (v12 Expanded) ▼";
      root.appendChild(sep);

      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v12-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.attire.v13.js ---
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

})();

(function(){
// --- builder_ui.section.attire.v14.js ---
(function(){
  "use strict";
  const VERSION = 14; // 拡張パックN (カラーパレット・配色)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "🎨 基本カラー (Basic Colors)": [
      { ja: "白 (ホワイト)", en: "white" }, { ja: "黒 (ブラック)", en: "black" },
      { ja: "赤 (レッド)", en: "red" }, { ja: "青 (ブルー)", en: "blue" },
      { ja: "緑 (グリーン)", en: "green" }, { ja: "黄 (イエロー)", en: "yellow" },
      { ja: "ピンク", en: "pink" }, { ja: "紫 (パープル)", en: "purple" },
      { ja: "オレンジ", en: "orange" }, { ja: "茶色 (ブラウン)", en: "brown" },
      { ja: "灰色 (グレー)", en: "grey" }, { ja: "ベージュ", en: "beige" }
    ],
    "🌈 ニュアンス・トーン (Tone & Nuance)": [
      { ja: "パステルカラー", en: "pastel colors" }, { ja: "ネオンカラー", en: "neon colors" },
      { ja: "ダークカラー", en: "dark colors" }, { ja: "ライトカラー (淡い)", en: "light colors" },
      { ja: "ビビッド (鮮やか)", en: "vivid colors" }, { ja: "モノクロ", en: "monochrome" },
      { ja: "マットカラー", en: "matte color" }, { ja: "メタリックカラー", en: "metallic color" },
      { ja: "金 (ゴールド)", en: "gold" }, { ja: "銀 (シルバー)", en: "silver" }
    ],
    "🖌️ 特殊色・詳細 (Specific Colors)": [
      { ja: "クリムゾン (深紅)", en: "crimson" }, { ja: "ワインレッド", en: "wine red" },
      { ja: "ネイビー (紺)", en: "navy blue" }, { ja: "ティール (青緑)", en: "teal" },
      { ja: "アクア", en: "aqua" }, { ja: "エメラルド", en: "emerald" },
      { ja: "ラベンダー", en: "lavender" }, { ja: "マゼンタ", en: "magenta" },
      { ja: "オリーブ", en: "olive" }, { ja: "カーキ", en: "khaki" },
      { ja: "クリーム色", en: "cream" }, { ja: "アイボリー", en: "ivory" }
    ],
    "🎭 配色パターン (Color Schemes)": [
      { ja: "ツートンカラー", en: "two-tone" }, { ja: "マルチカラー", en: "multicolored" },
      { ja: "グラデーション", en: "gradient" }, { ja: "レインボー", en: "rainbow" },
      { ja: "トリコロール", en: "tricolor" }, { ja: "白黒 (パンダ)", en: "black and white" },
      { ja: "赤と黒", en: "red and black" }, { ja: "青と白", en: "blue and white" },
      { ja: "ピンクと白", en: "pink and white" }, { ja: "迷彩色の", en: "camouflage colored" }
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
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#fff0f5; color:#d63384;"; // 色選択だとわかるように少し色を変える
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
      root.className = "attire-v14-container";
      
      // 区切り線を入れる
      const sep = document.createElement("div");
      sep.style.cssText = "margin:15px 0 10px 0; border-top:1px dashed #ccc; text-align:center; color:#888; font-size:0.8em;";
      sep.textContent = "▼ カラーリング (Coloring) ▼";
      root.appendChild(sep);

      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v14-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();

(function(){
// --- builder_ui.section.attire.v15.js ---
(function(){
  "use strict";
  const VERSION = 15; // 拡張パックO (全身コーデ・セットプリセット)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "🏫 学校・スクールセット (School Sets)": [
      { label: "セーラー服セット (Sailor)", val: "sailor uniform, pleated skirt, neckerchief, loafers, school bag, kneehighs" },
      { label: "ブレザーセット (Blazer)", val: "school uniform, blazer, white shirt, plaid skirt, bow tie, loafers, black tights" },
      { label: "体操服セット (Gym)", val: "gym uniform, bloomers, white t-shirt, sneakers, white socks" },
      { label: "スク水セット (Swim)", val: "school swimsuit, swimming cap, goggles, barefoot, wet skin" },
      { label: "優等生風 (Honor)", val: "school uniform, glasses, sweater vest, long skirt, holding book" },
      { label: "ギャルJK風 (Gal)", val: "school uniform, loose socks, cardigan, short skirt, unbuttoned shirt, makeup" }
    ],
    "🏢 職業・コスプレセット (Job/Cosplay Sets)": [
      { label: "OLスーツセット (Office)", val: "business suit, pencil skirt, white shirt, black tights, high heels, glasses" },
      { label: "メイドフルセット (Maid)", val: "maid, apron, long dress, frills, headdress, white stockings, mary janes" },
      { label: "ナースセット (Nurse)", val: "nurse uniform, nurse cap, white thighhighs, clipboard, stethoscope" },
      { label: "巫女セット (Miko)", val: "miko attire, hakama, tabi, zori, hair ribbon" },
      { label: "チャイナセット (China)", val: "china dress, high slit, hair bun, pantyhose, high heels" },
      { label: "バニーセット (Bunny)", val: "bunny suit, rabbit ears, fishnets, high heels, cuffs, collar" },
      { label: "ポリスセット (Police)", val: "police uniform, police cap, handcuffs, miniskirt, boots" }
    ],
    "⚔️ ファンタジーセット (Fantasy Sets)": [
      { label: "騎士フル装備 (Knight)", val: "full armor, plate armor, gauntlets, cape, sword, shield, helmet" },
      { label: "魔法使いセット (Mage)", val: "wizard robe, wizard hat, magic staff, cape, grimoire" },
      { label: "ビキニアーマー (Bikini)", val: "bikini armor, pauldrons, gauntlets, greaves, cape, sword" },
      { label: "冒険者セット (Adventurer)", val: "adventurer outfit, leather armor, backpack, boots, pouch, belt" },
      { label: "エルフセット (Elf)", val: "elf, green dress, leaf design, tiara, bow and arrow, forest background" }
    ],
    "🛋️ 日常・リラックスセット (Casual/Room)": [
      { label: "カジュアルデニム (Denim)", val: "t-shirt, jeans, sneakers, casual, backpack" },
      { label: "部屋着パーカー (Hoodie)", val: "oversized hoodie, panties, barefoot, off-shoulder, messy hair" },
      { label: "パジャマセット (Pajama)", val: "pajamas, holding plush toy, bed, messy hair" },
      { label: "デートコーデ (Date)", val: "dress, cardigan, handbag, pumps, necklace, earrings" },
      { label: "夏フェス (Festival)", val: "shorts, tank top, sunglasses, hat, wristband, sneakers" }
    ]
  };

  // 翻訳辞書 (構成要素を完全網羅)
  const DICT = {
    // School Components
    "sailor uniform": "セーラー服", "pleated skirt": "プリーツスカート", "neckerchief": "ネッカチーフ",
    "loafers": "ローファー", "school bag": "通学鞄", "kneehighs": "ニーソックス",
    "school uniform": "学校制服", "blazer": "ブレザー", "white shirt": "白シャツ",
    "plaid skirt": "チェック柄スカート", "bow tie": "ボウタイ", "black tights": "黒タイツ",
    "gym uniform": "体操服", "bloomers": "ブルマ", "white t-shirt": "白Tシャツ",
    "sneakers": "スニーカー", "white socks": "白ソックス",
    "school swimsuit": "スクール水着", "swimming cap": "水泳帽", "goggles": "ゴーグル",
    "barefoot": "裸足", "wet skin": "濡れた肌",
    "glasses": "眼鏡", "sweater vest": "セーターベスト", "long skirt": "ロングスカート",
    "holding book": "本を持つ",
    "loose socks": "ルーズソックス", "cardigan": "カーディガン", "short skirt": "ミニスカート",
    "unbuttoned shirt": "ボタンを外したシャツ", "makeup": "メイク",

    // Job/Cosplay Components
    "business suit": "スーツ", "pencil skirt": "タイトスカート", "high heels": "ハイヒール",
    "maid": "メイド", "apron": "エプロン", "long dress": "ロングドレス", "frills": "フリル",
    "headdress": "ヘッドドレス", "white stockings": "白ストッキング", "mary janes": "メリージェーン靴",
    "nurse uniform": "ナース服", "nurse cap": "ナースキャップ", "white thighhighs": "白ニーソ",
    "clipboard": "クリップボード", "stethoscope": "聴診器",
    "miko attire": "巫女服", "hakama": "袴", "tabi": "足袋", "zori": "草履", "hair ribbon": "髪リボン",
    "china dress": "チャイナドレス", "high slit": "深いスリット", "hair bun": "お団子髪", "pantyhose": "パンスト",
    "bunny suit": "バニースーツ", "rabbit ears": "うさ耳", "fishnets": "網タイツ", "cuffs": "カフス", "collar": "首輪/襟",
    "police uniform": "警官の制服", "police cap": "警官帽", "handcuffs": "手錠", "miniskirt": "ミニスカート", "boots": "ブーツ",

    // Fantasy Components
    "full armor": "フルアーマー", "plate armor": "プレートアーマー", "gauntlets": "ガントレット",
    "cape": "マント", "sword": "剣", "shield": "盾", "helmet": "兜",
    "wizard robe": "魔法使いのローブ", "wizard hat": "魔法使いの帽子", "magic staff": "魔法の杖", "grimoire": "魔導書",
    "bikini armor": "ビキニアーマー", "pauldrons": "肩当て", "greaves": "すね当て",
    "adventurer outfit": "冒険者の服", "leather armor": "革鎧", "backpack": "バックパック",
    "pouch": "ポーチ", "belt": "ベルト",
    "elf": "エルフ", "green dress": "緑のドレス", "leaf design": "葉のデザイン",
    "tiara": "ティアラ", "bow and arrow": "弓矢", "forest background": "森の背景",

    // Casual Components
    "t-shirt": "Tシャツ", "jeans": "ジーンズ", "casual": "カジュアル",
    "oversized hoodie": "特大パーカー", "panties": "パンティ", "off-shoulder": "オフショルダー",
    "messy hair": "ボサボサ髪/寝癖",
    "pajamas": "パジャマ", "holding plush toy": "ぬいぐるみを抱く", "bed": "ベッド",
    "dress": "ワンピース", "handbag": "ハンドバッグ", "pumps": "パンプス",
    "necklace": "ネックレス", "earrings": "イヤリング",
    "shorts": "ショートパンツ", "tank top": "タンクトップ", "sunglasses": "サングラス",
    "hat": "帽子", "wristband": "リストバンド"
  };

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
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#fff0f5; color:#d63384;";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(150px, 1fr)); gap:6px;";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.val = item.val; 
          cb.style.marginRight = "6px";
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.label));
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const root = document.createElement("div");
      root.className = "attire-v15-container";
      
      // 区切り線
      const sep = document.createElement("div");
      sep.style.cssText = "margin:15px 0 10px 0; border-top:1px dashed #ccc; text-align:center; color:#888; font-size:0.8em;";
      sep.textContent = "▼ コーディネートセット (Outfit Sets) ▼";
      root.appendChild(sep);

      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v15-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.val);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.attire.v16.js ---
(function(){
  "use strict";
  const VERSION = 16; // 拡張パックP (拡張コーデセット: サブカル・イベント・人外)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "🎀 サブカル・ファッションセット (Subculture Sets)": [
      { label: "甘ロリセット (Sweet)", val: "sweet lolita, pink dress, frills, bows, bonnet, mary janes, white tights" },
      { label: "ゴスロリセット (Gothic)", val: "gothic lolita, black dress, cross, headdress, lace, platform shoes" },
      { label: "地雷系セット (Jirai)", val: "jiraikei, black and pink, ribbon, backpack, platform shoes, makeup, dark atmosphere" },
      { label: "スチームパンクセット (Steam)", val: "steampunk, corset, gears, goggles, brown leather, boots, brass accessories" },
      { label: "サイバーパンクセット (Cyber)", val: "cyberpunk, techwear, neon lights, jacket, bodysuit, futuristic visor, mechanical parts" }
    ],
    "💍 イベント・ステージ衣装セット (Event/Stage Sets)": [
      { label: "ウェディングセット (Bride)", val: "wedding dress, white, veil, bouquet, tiara, jewelry, church background" },
      { label: "アイドル衣装セット (Idol)", val: "idol clothes, shiny, frills, microphone, stage lights, energetic pose, ribbon" },
      { label: "レースクイーンセット (RQ)", val: "race queen, highleg, umbrella, boots, cap, circuit background" },
      { label: "チアリーダーセット (Cheer)", val: "cheerleader, pom poms, crop top, miniskirt, sneakers, energetic" },
      { label: "バレリーナセット (Ballet)", val: "ballet tutu, ballet shoes, tights, bun hair, elegant pose, stage" }
    ],
    "👹 ファンタジー・人外セット (Fantasy/Non-Human Sets)": [
      { label: "悪魔/サキュバスセット (Demon)", val: "succubus, demon wings, horns, tail, black outfit, gothic" },
      { label: "天使セット (Angel)", val: "angel, white wings, halo, white dress, holy light, feathers" },
      { label: "ヴァンパイアセット (Vampire)", val: "vampire, gothic clothes, cape, fangs, red eyes, coffin, dark atmosphere" },
      { label: "魔女セット (Witch)", val: "witch, robe, witch hat, broom, magic book, potion" },
      { label: "くノ一セット (Ninja)", val: "kunoichi, ninja suit, scarf, katana, mask, japanese dojo background" }
    ]
  };

  // 翻訳辞書 (構成要素を完全網羅)
  const DICT = {
    // Subculture
    "sweet lolita": "甘ロリ", "pink dress": "ピンクのドレス", "frills": "フリル", "bows": "リボン",
    "bonnet": "ボンネット", "mary janes": "メリージェーン靴", "white tights": "白タイツ",
    "gothic lolita": "ゴスロリ", "black dress": "黒ドレス", "cross": "十字架",
    "headdress": "ヘッドドレス", "lace": "レース", "platform shoes": "厚底靴",
    "jiraikei": "地雷系", "black and pink": "黒とピンク", "ribbon": "リボン",
    "backpack": "リュック", "makeup": "メイク", "dark atmosphere": "暗い雰囲気",
    "steampunk": "スチームパンク", "corset": "コルセット", "gears": "歯車",
    "goggles": "ゴーグル", "brown leather": "茶色の革", "boots": "ブーツ", "brass accessories": "真鍮アクセ",
    "cyberpunk": "サイバーパンク", "techwear": "テックウェア", "neon lights": "ネオンライト",
    "jacket": "ジャケット", "bodysuit": "ボディスーツ", "futuristic visor": "未来的なバイザー", "mechanical parts": "機械部品",

    // Event
    "wedding dress": "ウェディングドレス", "white": "白", "veil": "ベール",
    "bouquet": "ブーケ", "tiara": "ティアラ", "jewelry": "ジュエリー", "church background": "教会背景",
    "idol clothes": "アイドル衣装", "shiny": "光沢", "microphone": "マイク",
    "stage lights": "ステージ照明", "energetic pose": "元気なポーズ",
    "race queen": "レースクイーン", "highleg": "ハイレグ", "umbrella": "傘",
    "cap": "帽子/キャップ", "circuit background": "サーキット背景",
    "cheerleader": "チアリーダー", "pom poms": "ポンポン", "crop top": "クロップトップ",
    "miniskirt": "ミニスカート", "sneakers": "スニーカー", "energetic": "エネルギッシュ",
    "ballet tutu": "チュチュ", "ballet shoes": "バレエシューズ", "tights": "タイツ",
    "bun hair": "お団子髪", "elegant pose": "優雅なポーズ", "stage": "ステージ",

    // Fantasy
    "succubus": "サキュバス", "demon wings": "悪魔の翼", "horns": "角", "tail": "尻尾",
    "black outfit": "黒い衣装", "gothic": "ゴシック",
    "angel": "天使", "white wings": "白い翼", "halo": "天使の輪", "white dress": "白いドレス",
    "holy light": "聖なる光", "feathers": "羽",
    "vampire": "ヴァンパイア", "gothic clothes": "ゴシック服", "cape": "マント",
    "fangs": "牙", "red eyes": "赤い目", "coffin": "棺桶",
    "witch": "魔女", "robe": "ローブ", "witch hat": "魔女の帽子", "broom": "箒",
    "magic book": "魔法の本", "potion": "ポーション",
    "kunoichi": "くノ一", "ninja suit": "忍者スーツ", "scarf": "スカーフ/マフラー",
    "katana": "刀", "mask": "マスク/面", "japanese dojo background": "道場背景"
  };

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
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#fff0f5; color:#d63384;";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(150px, 1fr)); gap:6px;";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.val = item.val; 
          cb.style.marginRight = "6px";
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.label));
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const root = document.createElement("div");
      root.className = "attire-v16-container";
      
      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v16-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.val);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.attire.v17.js ---
(function(){
  "use strict";
  const VERSION = 17; // 拡張パックR (R-18/NSFW特化・Syntax Fixed)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "🔞 完全露出・裸 (Nude & Naked)": [
      { ja: "全裸 (Nude)", en: "nude" },
      { ja: "トップレス", en: "topless" },
      { ja: "ボトムレス (下履いてない)", en: "bottomless" },
      { ja: "ニプレスのみ", en: "pasties only" },
      { ja: "前貼り (C-string)", en: "c-string" },
      { ja: "手ブラ", en: "hand bra" },
      { ja: "全裸待機", en: "waiting nude, naked standing" }
    ],
    "🐙 侵食・生体スーツ (Living & Parasitic Suits)": [
      { ja: "生体モノキニ", en: "living monokini, organic armor, pulsating texture" },
      { ja: "スライムボディスーツ", en: "slime bodysuit, translucent slime, fusing with skin" },
      { ja: "触手スーツ", en: "tentacle suit, tentacles wrapped around body, living clothes" },
      { ja: "半透明ゼリースーツ", en: "semi-transparent jelly suit, glowing internal organs view" },
      { ja: "脈打つ血管スーツ", en: "veiny bodysuit, pulsing veins, bio-organic" },
      { ja: "肉壁スーツ", en: "flesh wall suit, membrane, organic texture" },
      { ja: "拘束スライム", en: "bound by slime, slime covering body, melting clothes" },
      { ja: "花弁状の触手服", en: "petal-shaped tentacle motifs, anemone patterns" },
      { ja: "溶けた服", en: "melting clothes, clothes dissolving into slime" }
    ],
    "👙 裸＋α・チラリズム (Naked + X)": [
      { ja: "裸エプロン", en: "naked apron" },
      { ja: "裸リボン", en: "naked ribbon" },
      { ja: "裸ワイシャツ", en: "naked shirt, boyfriend shirt" },
      { ja: "裸パーカー", en: "naked hoodie" },
      { ja: "スケスケレインコート (中身裸)", en: "transparent raincoat, naked under raincoat" },
      { ja: "テープ拘束服", en: "tape outfit, electrical tape covering nipples" },
      { ja: "リボンマミー (包帯)", en: "ribbon mummy, ribbon bondage" },
      { ja: "ボディペイント衣装", en: "body paint outfit, painted clothes" },
      { ja: "たくし上げ (全裸)", en: "clothes lifted, exposing everything" }
    ],
    "⛓️ ボンテージ・ハード拘束 (Hard Bondage)": [
      { ja: "ボンテージ衣装", en: "bondage outfit, leather, spikes" },
      { ja: "ラバースーツ", en: "latex suit, rubber catsuit" },
      { ja: "真空スーツ", en: "vacuum suit, vacuum sealed, definition of body" },
      { ja: "犬具・ハーネス", en: "harness, dog collar, leash" },
      { ja: "首輪と鎖", en: "collar and chain, metal chain" },
      { ja: "猿轡 (ボールギャグ)", en: "ball gag, ring gag, drooling" },
      { ja: "目隠し", en: "blindfold, sensory deprivation" },
      { ja: "手錠・足枷", en: "handcuffs, shackles, metal cuffs" },
      { ja: "緊縛 (亀甲縛り)", en: "shibari, rope bondage, suspension" },
      { ja: "拘束椅子", en: "bondage chair, restrained" }
    ],
    "📐 極小露出・食い込み (Extreme Exposure)": [
      { ja: "マイクロビキニ", en: "micro bikini" },
      { ja: "スリングショット (V字)", en: "slingshot swimsuit" },
      { ja: "極小下着", en: "micro panties, tiny bra" },
      { ja: "穴あき下着", en: "crotchless panties" },
      { ja: "穴あきブラ", en: "open bra, cupless bra" },
      { ja: "股間ジッパー", en: "zipper crotch" },
      { ja: "乳首透け", en: "nipples visible through clothes, see-through" },
      { ja: "透け透けの服", en: "transparent clothes, sheer fabric" },
      { ja: "食い込み (マン筋)", en: "cameltoe, clothes tight fit" },
      { ja: "お尻の食い込み", en: "wedgie, ass focus" }
    ],
    "💦 汚濁・液体まみれ (Messy & Fluids)": [
      { ja: "精液まみれの服", en: "bukkake on clothes, cum on clothes, stained clothes" },
      { ja: "白濁液まみれ", en: "covered in white liquid, sticky texture" },
      { ja: "濡れ透け (激)", en: "soaked clothes, wet transparency, clinging to skin" },
      { ja: "泥・オイルまみれ", en: "muddy, covered in oil, shiny skin" },
      { ja: "破れたストッキング", en: "torn pantyhose, laddered tights" }
    ]
  };

  const DICT = {
    "nude": "全裸", "topless": "トップレス", "bottomless": "ボトムレス", "pasties only": "ニプレスのみ",
    "c-string": "前貼り", "hand bra": "手ブラ", "naked apron": "裸エプロン", "naked ribbon": "裸リボン",
    "naked shirt": "裸Yシャツ", "naked hoodie": "裸パーカー", "transparent raincoat": "スケスケ合羽",
    "tape outfit": "テープ拘束服", "ribbon mummy": "リボンマミー", "body paint outfit": "ボディペイント衣装",
    "bondage outfit": "ボンテージ", "latex suit": "ラバースーツ", "vacuum suit": "真空スーツ",
    "harness": "ハーネス", "collar and chain": "首輪と鎖", "ball gag": "猿轡", "blindfold": "目隠し",
    "handcuffs": "手錠", "shibari": "緊縛", "micro bikini": "マイクロビキニ", "slingshot swimsuit": "スリングショット",
    "crotchless panties": "穴あきパンツ", "open bra": "穴あきブラ", "zipper crotch": "股間ジッパー",
    "nipples visible through clothes": "乳首透け", "transparent clothes": "透け服", "cameltoe": "食い込み(前)", "wedgie": "食い込み(後)",
    "bukkake on clothes": "服に精液", "slime clothes": "スライム服", "tentacle suit": "触手服", "melting clothes": "溶けた服",
    "living monokini": "生体モノキニ", "organic armor": "生体アーマー", "slime bodysuit": "スライムスーツ",
    "pulsing veins": "脈打つ血管", "flesh wall suit": "肉壁スーツ", "semi-transparent jelly suit": "半透明ゼリースーツ"
  };

  const API = {
    initUI(container) {
      // R-18ロック時は即終了
      const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";
      if (!IS_UNLOCKED) return;

      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      
      // ★リトライ制限付きマウント処理 (修正箇所)
      const mount = (retry = 0) => {
        let parent = document.querySelector("#list-attire");
        
        // 親が見つからない場合のリトライ処理
        if (!parent) { 
          // 50回(約5秒)試行してもダメなら諦める（無限ループ防止）
          if (retry < 50) {
            setTimeout(() => mount(retry + 1), 100);
          } else {
            console.warn("⏳ attire.v17 mount skipped: parent #list-attire not found after retries.");
          }
          return; 
        }

        // 重複防止
        if (parent.querySelector(".attire-v17-container")) return;

        // --- UI生成処理 ---
        const createCat = (title, items) => {
          const details = document.createElement("details");
          details.className = "attire-cat attire-r18";
          details.style.cssText = "margin-bottom:6px; border:1px solid #ffcccc; border-radius:4px; background:#fff;";
          const summary = document.createElement("summary");
          summary.textContent = title;
          summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#ffeeee; color:#d00;";
          details.appendChild(summary);
          const content = document.createElement("div");
          content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:6px;";
          items.forEach(item => {
            const label = document.createElement("label");
            label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
            const cb = document.createElement("input");
            cb.type = "checkbox"; cb.dataset.en = item.en; cb.style.marginRight = "6px";
            label.appendChild(cb); label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
            content.appendChild(label);
          });
          details.appendChild(content);
          return details;
        };

        const root = document.createElement("div");
        root.className = "attire-v17-container";
        
        const sep = document.createElement("div");
        sep.style.cssText = "margin:15px 0 10px 0; border-top:2px solid #d00; text-align:center; color:#d00; font-size:0.9em; font-weight:bold;";
        
        // ★修正ポイント: 安全な文字列リテラルに変更 (絵文字による構文エラー回避)
        sep.textContent = "⚠️ R-18 / NSFW (Adult Only)"; 
        
        root.appendChild(sep);
        Object.entries(ATTIRE_DATA).forEach(([cat, items]) => root.appendChild(createCat(cat, items)));
        const contentArea = parent.querySelector(".section-content") || parent;
        contentArea.appendChild(root);
      };

      mount(); // 実行
    },
    getTags() {
      const tags = [];
      const root = document.querySelector(".attire-v17-container");
      if(root) {
        root.querySelectorAll("input:checked").forEach(cb => tags.push(cb.dataset.en));
      }
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.attire.v18.js ---
(function(){
  "use strict";
  const VERSION = 18; // 拡張パックQ (セクシー・コスプレ・トレンド)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "💃 セクシーファッション (Sexy Fashion)": [
      { ja: "露出度の高い服", en: "revealing clothes" },
      { ja: "キャミソール＆短パン", en: "camisole, short shorts" },
      { ja: "へそ出しコーデ", en: "crop top, midriff, denim shorts" },
      { ja: "胸元開き (カットアウト)", en: "cleavage cutout" },
      { ja: "胸開きタートル", en: "keyhole turtleneck" },
      { ja: "童貞を殺すセーター", en: "virgin killer sweater, backless sweater" },
      { ja: "横乳 (サイドブーブ)", en: "sideboob" },
      { ja: "下乳 (アンダーブーブ)", en: "underboob" },
      { ja: "絶対領域", en: "zettai ryouiki" },
      { ja: "ハイスリット", en: "high slit" }
    ],
    "👘 コスプレ・職業バリエーション (Cosplay)": [
      { ja: "セクシーナース", en: "nurse, short dress, cleavage, white stockings" },
      { ja: "セクシーポリス", en: "police uniform, pencil skirt, unbuttoned shirt" },
      { ja: "セクシーチャイナ", en: "china dress, high slit, cleavage cutout" },
      { ja: "くノ一 (忍者)", en: "kunoichi, ninja, fishnets" },
      { ja: "メイド服 (ミニ)", en: "maid, mini skirt, apron" },
      { ja: "バニーガール", en: "bunny girl, leotard, fishnets, rabbit ears" },
      { ja: "レースクイーン", en: "race queen, highleg, boots" },
      { ja: "魔法少女", en: "magical girl, frilled dress, ribbons" },
      { ja: "明治袴 (ハイカラ)", en: "meiji schoolgirl uniform, hakama, lace-up boots" },
      { ja: "シスター (聖職者)", en: "nun, nun habit" },
      { ja: "踊り子 (ベリーダンス)", en: "belly dancer, harem outfit" }
    ],
    "🏃 スポーツ・アクティブ (Sporty & Active)": [
      { ja: "競泳水着", en: "competition swimsuit" },
      { ja: "レオタード", en: "leotard" },
      { ja: "レスリング衣装", en: "wrestling outfit, singlet" },
      { ja: "チアリーダー", en: "cheerleader, crop top, miniskirt" },
      { ja: "テニスウェア", en: "tennis uniform" },
      { ja: "全身タイツ (ゼンタイ)", en: "zentai, full body suit" }
    ],
    "👙 ランジェリー・特殊インナー (Lingerie & Inner)": [
      { ja: "猫ランジェリー", en: "cat keyhole lingerie, neko lingerie" },
      { ja: "ベビードール", en: "babydoll" },
      { ja: "コルセット", en: "corset" },
      { ja: "ガーターストッキング", en: "garter belt, stockings" },
      { ja: "網タイツ", en: "fishnets" },
      { ja: "黒ストッキング", en: "black pantyhose" }
    ],
    "🛀 シチュエーション衣装 (Situational)": [
      { ja: "バスタオル姿", en: "towel, towel around body" },
      { ja: "濡れ透けシャツ", en: "wet shirt, wet clothes" },
      { ja: "はだけた浴衣", en: "yukata, open clothes" }
    ]
  };

  const DICT = {
    "revealing clothes": "露出度の高い服", "camisole": "キャミソール", "short shorts": "ショートパンツ",
    "crop top": "へそ出しトップス", "cleavage cutout": "胸元開き", "keyhole turtleneck": "胸開きタートル",
    "virgin killer sweater": "童貞を殺すセーター", "backless sweater": "背中開きセーター",
    "sideboob": "横乳", "underboob": "下乳", "zettai ryouiki": "絶対領域", "high slit": "ハイスリット",
    "nurse": "ナース", "police uniform": "ポリス", "china dress": "チャイナドレス",
    "kunoichi": "くノ一", "maid": "メイド", "bunny girl": "バニーガール", "race queen": "レースクイーン",
    "magical girl": "魔法少女", "meiji schoolgirl uniform": "明治女学生", "nun": "シスター",
    "belly dancer": "ベリーダンサー", "competition swimsuit": "競泳水着", "leotard": "レオタード",
    "wrestling outfit": "レスリング衣装", "cheerleader": "チアリーダー", "zentai": "全身タイツ",
    "cat keyhole lingerie": "猫ランジェリー", "babydoll": "ベビードール", "corset": "コルセット",
    "towel around body": "バスタオル巻き", "wet shirt": "濡れシャツ"
  };

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      let parent = document.querySelector("#list-attire");
      if (!parent) return;

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "attire-cat attire-v18";
        details.style.cssText = "margin-bottom:6px; border:1px solid #ddd; border-radius:4px; background:#fff;";
        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f9f0ff; color:#6a0dad;";
        details.appendChild(summary);
        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:6px;";
        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          const cb = document.createElement("input");
          cb.type = "checkbox"; cb.dataset.en = item.en; cb.style.marginRight = "6px";
          label.appendChild(cb); label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const root = document.createElement("div");
      root.className = "attire-v18-container";
      
      const sep = document.createElement("div");
      sep.style.cssText = "margin:15px 0 10px 0; border-top:1px dashed #ccc; text-align:center; color:#888; font-size:0.8em;";
      sep.textContent = "▼ セクシー & コスプレ拡張 (v18 Expanded) ▼";
      root.appendChild(sep);

      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => root.appendChild(createCat(cat, items)));
      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },
    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v18-container input:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();
})();

(function(){
// --- builder_ui.section.attire.v19.js ---
(function(){
  "use strict";
  const VERSION = 19; // 拡張パックQ (年代別・レトロ・歴史的スタイル)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "💃 1920s-1940s (Jazz & Noir)": [
      { ja: "フラッパードレス (20s)", en: "flapper dress, fringe, beads" },
      { ja: "モガ (モダンガール)", en: "moga, taisho roman, kimono and apron" },
      { ja: "アールデコ風", en: "art deco style dress" },
      { ja: "フィルム・ノワール (妖艶)", en: "film noir style, femme fatale, evening gown, fur stole" },
      { ja: "戦時中の服 (40s)", en: "1940s fashion, utility clothes, victory rolls hair" }
    ],
    "🎸 1950s-1960s (Rock & Mod)": [
      { ja: "水玉ワンピース (50s)", en: "polka dot dress, 1950s fashion" },
      { ja: "プードルスカート", en: "poodle skirt, swing skirt" },
      { ja: "ロカビリー", en: "rockabilly style" },
      { ja: "ピンナップガール", en: "pin-up girl, retro swimsuit, high heels" },
      { ja: "モッズファッション (60s)", en: "mod dress, geometric print, mini dress, gogo boots" },
      { ja: "ヒッピースタイル (60s)", en: "hippie clothes, tie-dye, bell bottoms, headband" }
    ],
    "🕺 1970s-1990s (Disco & Bubble)": [
      { ja: "ディスコ衣装 (70s)", en: "disco outfit, jumpsuit, sequins, afro" },
      { ja: "ベルボトム (パンタロン)", en: "bell-bottoms, flared pants" },
      { ja: "パワースーツ (80s)", en: "1980s fashion, power suit, shoulder pads" },
      { ja: "エアロビクス (レオタード)", en: "aerobics outfit, leotard, leg warmers, headband" },
      { ja: "バブル時代のボディコン", en: "bodycon dress, 80s style, fan" },
      { ja: "グランジ (90s)", en: "grunge fashion, flannel shirt, ripped jeans, unkempt" },
      { ja: "コギャル (90s)", en: "90s schoolgirl, loose socks, tanned skin" }
    ],
    "🏛️ 貴族・ヴィクトリアン (Victorian/Royal)": [
      { ja: "舞踏会ドレス (ボールガウン)", en: "ballgown, voluminous skirt" },
      { ja: "ヴィクトリア朝のドレス", en: "victorian dress, bustle, high collar, lace" },
      { ja: "ロココ調 (マリー・アントワネット)", en: "rococo dress, pannier, extravagant" },
      { ja: "エンパイアドレス", en: "empire waist dress, regency era" },
      { ja: "公爵夫人の服", en: "duchess outfit, elegant, jewelry" },
      { ja: "コルセットドレス", en: "corset dress, tight lacing" }
    ]
  };

  const DICT = {
    "flapper dress": "フラッパードレス", "fringe": "フリンジ", "beads": "ビーズ",
    "moga": "モダンガール", "taisho roman": "大正浪漫", "art deco": "アールデコ",
    "film noir": "フィルムノワール", "femme fatale": "ファムファタール",
    "polka dot dress": "水玉ドレス", "poodle skirt": "プードルスカート",
    "rockabilly": "ロカビリー", "pin-up girl": "ピンナップガール",
    "mod dress": "モッズドレス", "geometric print": "幾何学模様", "gogo boots": "ゴーゴーブーツ",
    "hippie clothes": "ヒッピー服", "tie-dye": "タイダイ", "bell-bottoms": "ベルボトム",
    "disco outfit": "ディスコ衣装", "sequins": "スパンコール",
    "power suit": "パワースーツ", "shoulder pads": "肩パッド",
    "aerobics outfit": "エアロビ衣装", "leg warmers": "レッグウォーマー",
    "grunge fashion": "グランジ", "flannel shirt": "ネルシャツ",
    "ballgown": "舞踏会ドレス", "victorian dress": "ヴィクトリアンドレス", "bustle": "バッスル",
    "rococo dress": "ロココドレス", "pannier": "パニエ", "empire waist": "エンパイアウエスト"
  };

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      let parent = document.querySelector("#list-attire");
      if (!parent) return;

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "attire-cat attire-v19";
        details.style.cssText = "margin-bottom:6px; border:1px solid #dcdcdc; border-radius:4px; background:#fff;";
        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f0e68c; color:#555;"; // レトロっぽい色
        details.appendChild(summary);
        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(140px, 1fr)); gap:6px;";
        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          const cb = document.createElement("input");
          cb.type = "checkbox"; cb.dataset.en = item.en; cb.style.marginRight = "6px";
          label.appendChild(cb); label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const root = document.createElement("div");
      root.className = "attire-v19-container";
      const sep = document.createElement("div");
      sep.style.cssText = "margin:15px 0 10px 0; border-top:1px dashed #ccc; text-align:center; color:#888; font-size:0.8em;";
      sep.textContent = "▼ 年代別・レトロスタイル (v19 Retro) ▼";
      root.appendChild(sep);
      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => root.appendChild(createCat(cat, items)));
      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },
    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v19-container input:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();
})();

