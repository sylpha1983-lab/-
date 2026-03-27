// Auto-generated bundle for section 'attire'
const SHIMA_BRAND_CORE = "Shima-enaga inspired design language, based on a small round white long-tailed bushtit, very compact round upper-body silhouette, noticeably small and fluffy proportions, snow-white and charcoal-black signature palette, bold symmetrical black circular eye-ring markings as a visible motif (patch/embroidery/print), tiny subtle beak motif detail, small subtle feather crest accent, long narrow avian tail feathers made of multiple thin layered plumes, thin elegant bird tail fan structure, not mammal tail, minimal decorative feather accents, no animal ears, no large angel wings, no giant feather spread, balanced proportions, bird-like but wearable";
// Contains 20 versions stacked in ascending order.

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


(function(){
// --- builder_ui.section.attire.v20.js ---
(function(){
  "use strict";
  const VERSION = 20; // 節分・鬼 (日本伝承イベント)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "👹 節分・鬼衣装 (Setsubun Oni Attire)": [
      { ja: "鬼の衣装 (オニコス)", en: "oni costume" },
      { ja: "鬼の羽織", en: "oni haori" },
      { ja: "鬼の着物", en: "oni kimono" },
      { ja: "鬼の腹掛け", en: "oni haragake" },
      { ja: "鬼のふんどし", en: "oni fundoshi" }
    ],
    "🐯 虎柄・鬼パンツ (Tiger Stripes)": [
      { ja: "虎柄 (タイガープリント)", en: "tiger print" },
      { ja: "虎縞 (タイガーストライプ)", en: "tiger stripes" },
      { ja: "虎柄のふんどし", en: "tiger-striped fundoshi" },
      { ja: "虎柄の腰布", en: "tiger-striped loincloth" },
      { ja: "虎柄のパンツ", en: "tiger-striped pants" }
    ]
  };

  const DICT = {};
  Object.values(ATTIRE_DATA).flat().forEach(item => {
    if (item.en && item.ja) DICT[item.en] = item.ja;
  });

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      const parent = document.querySelector("#list-attire") || container;
      if (!parent) return;

      // 既存があれば削除（更新用）
      const existing = parent.querySelector(".attire-v20-container");
      if (existing) existing.remove();

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "attire-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        details.open = false;

        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#fff8f0; color:#7a3b00;";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(140px, 1fr)); gap:6px;";

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
      root.className = "attire-v20-container";

      const sep = document.createElement("div");
      sep.style.cssText = "margin:15px 0 10px 0; border-top:1px dashed #cc9; text-align:center; color:#a66; font-size:0.8em;";
      sep.textContent = "▼ 節分・鬼 (v20) ▼";
      root.appendChild(sep);

      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v20-container input[type='checkbox']:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

// --- builder_ui.section.attire.v21.js ---
(function(){
  "use strict";
  const VERSION = 21; // シマエナガ・コレクション (特別衣装セット拡張)
  const KEY = "attire";

  // 56 curated Shima-enaga themed outfit sets (JA title + short EN label + full prompt tag)
  const SETS = [
    // Casual / Daily (7)
    {ja:"シマエナガ・カジュアル雪街", en:"Shima Casual Snow Street", group:"casual", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga inspired winter casual outfit, based on a small round white long-tailed bushtit, very compact round upper-body silhouette, noticeably small and fluffy proportions, slightly oversized white feather-layered short puffer jacket, smooth rounded bird-head hood, clear bold symmetrical black circular eye-ring markings on hood sides, very small subtle beak motif detail, no animal ears, no large angel wings, no giant feather spread, small subtle feather crest on hood top, visible contour feather layering with rachis detailing, lightweight airy texture, long narrow avian tail feathers made of multiple thin layered plumes, thin elegant bird tail fan structure, not mammal tail, minimal decorative feather accents, urban snow-town street fashion, calm understated presence, balanced proportions, bird-like but casual and wearable"},
    {ja:"シマエナガ・ゆめかわパーカー", en:"Shima YumeKawa Hoodie", group:"casual", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga pastel casual hoodie, feather trims, cloud-like puff sleeves, cute bird motif patches, soft pastel palette, yume-kawaii streetwear"},
    {ja:"シマエナガ・春のライトジャケット", en:"Shima Spring Jacket", group:"casual", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga light jacket, white bomber with subtle feather texture, sakura and snowflake mixed embroidery, clean casual look"},
    {ja:"シマエナガ・部屋着もふもふ", en:"Shima Fluffy Loungewear", group:"casual", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga fluffy loungewear set, oversized sweater with feather pattern, soft pajama shorts, cozy home outfit"},
    {ja:"シマエナガ・カフェ店員カジュアル", en:"Shima Cafe Casual", group:"casual", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga cafe casual uniform, apron with bird face emblem, white shirt, feather hairclip, warm friendly vibe"},
    {ja:"シマエナガ・スポーツジャージ", en:"Shima Sport Jersey", group:"casual", tag: SHIMA_BRAND_CORE + ", " + "Long-tailed bushtit inspired sports tracksuit, white rounded chest panel resembling fluffy shima-enaga face, small black circular eye emblems on chest, beak-shaped zipper charm, feather-pattern side stripes on sleeves and pants, tail-feather motif extending from lower back, soft white faux-fur trimmed collar, multiple embroidered shima-enaga patches, snow-white and sky-blue color scheme, rounded silhouette design"},
    {ja:"シマエナガ・レインコート", en:"Shima Raincoat", group:"casual", tag: SHIMA_BRAND_CORE + ", " + "Long-tailed bushtit inspired raincoat, translucent white and icy blue material, hood shaped like fluffy shima-enaga head, small black eye embroidery on hood, rounded body silhouette, tail-feather shaped back panel, visible shima-enaga stickers beneath transparent layer, feather-textured inner lining, bird-shaped zipper pull, snow-white and soft blue color balance"},

    // School / Uniform (23)
    {ja:"シマエナガ・学園制服ブレザー", en:"Shima School Blazer", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga school uniform blazer, white blazer with feather piping, snowflake crest, pleated skirt, ribbon tie"},
    {ja:"シマエナガ・セーラー服氷彩", en:"Shima Sailor Ice", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga sailor uniform, icy blue sailor collar, feather-shaped scarf, crisp pleated skirt"},
    {ja:"シマエナガ・冬制服コート", en:"Shima Winter Uniform", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga winter school coat, white duffle coat with feather fur trim, snowflake buttons, scarf"},
    {ja:"シマエナガ・体育着ブルマ風", en:"Shima PE Retro", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga retro PE uniform, white and blue gym outfit, sporty bloomers style, feather logo"},
    {ja:"シマエナガ・学園アイドル制服", en:"Shima Idol Uniform", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga idol school uniform, short jacket, layered skirt, feather accessories, stage-ready cute"},
    {ja:"シマエナガ・図書委員", en:"Shima Library Prefect", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga librarian uniform, cardigan, ribbon, modest skirt, feather bookmark accessories"},
    {ja:"シマエナガ・生徒会正装", en:"Shima Student Council", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga student council uniform, formal white blazer, armband with bird crest, ceremonial vibe"},

    {ja:"シマエナガ・夏制服セーラー薄羽", en:"Shima Summer Sailor", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga summer sailor uniform, light short-sleeve top, ice-blue collar, subtle feather stitch, airy pleated skirt"},
    {ja:"シマエナガ・夏制服シャツリボン", en:"Shima Summer Shirt & Ribbon", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga summer school shirt, crisp white short sleeves, sky-blue ribbon, tiny bird crest patch, neat pleated skirt"},
    {ja:"シマエナガ・学ラン黒羽", en:"Shima Gakuran Black Feather", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga gakuran, classic black uniform, feather-shaped metal buttons, small shima-enaga crest embroidery, clean silhouette"},
    {ja:"シマエナガ・秋制服上着つき", en:"Shima Autumn Jacket Uniform", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga autumn uniform with jacket, lightweight bomber/blouson, feather stripe cuffs, small patch, layered school look"},
    {ja:"シマエナガ・通学ニットベスト", en:"Shima Knit Vest", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga school knit vest, white and gray color-block, subtle feather knit pattern, tiny patch, tidy preppy style"},
    {ja:"シマエナガ・冬制服マフラー", en:"Shima Winter Scarf Uniform", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga winter uniform with scarf, soft knit scarf with feather motif ends, minimal crest, warm layered look"},

    // School / Uniform Expansion (+10)
    {ja:"シマエナガ・春制服カーディガン", en:"Shima Spring Cardigan Uniform", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga spring uniform with cardigan, light knit cardigan, feather-line trim, small chest patch, soft pastel accent, neat pleated skirt"},
    {ja:"シマエナガ・春制服ライトブレザー", en:"Shima Spring Light Blazer", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga spring blazer uniform, thin blazer, subtle feather piping, small crest, airy layers, clean school look"},
    {ja:"シマエナガ・梅雨レイン通学", en:"Shima Rainy Commute", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga rainy commute uniform, water-repellent school coat, minimal droplet pattern, feather-shimmer lining, discreet bird patch, tidy silhouette"},
    {ja:"シマエナガ・梅雨傘通学仕様", en:"Shima Umbrella Commute", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga umbrella commute style, school uniform with clear umbrella, subtle feather motif on handle strap, small sticker patch, rain-speckled fabric"},
    {ja:"シマエナガ・体育祭体操服", en:"Shima Sports Day Gym", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga sports day gym uniform, athletic jersey and shorts, feather stripe accents, small team patch, zipper charm, clean sporty silhouette"},
    {ja:"シマエナガ・体育祭応援団", en:"Shima Sports Day Cheer", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga sports festival cheer outfit, light cheer jacket, feather-lined hem, armband patch, headband with small feather motif, energetic school spirit"},
    {ja:"シマエナガ・文化祭メイド制服", en:"Shima Culture Fest Maid", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga culture festival maid uniform, classic maid dress with subtle feather embroidery, small apron patch, tidy frills kept minimal, school cafe vibe"},
    {ja:"シマエナガ・文化祭ステージ衣装", en:"Shima Culture Fest Stage", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga culture festival stage costume, school idol stage uniform variant, ribbon with feather pattern, small crest, glossy trim, performance-ready but still school themed"},
    {ja:"シマエナガ・スケ番仕様", en:"Shima Sukeban Style", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga sukeban style uniform, long skirt, modified blazer, bold but controlled feather embroidery, small bird patch, tough school vibe"},
    {ja:"シマエナガ・番長ヤンキー仕様", en:"Shima Banchou Yankee", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga banchou/yankee uniform, open-collar shirt, embroidered jacket with feather motif, armband patch, confident delinquent aura"},


    // Force / Tactical (7)
    {ja:"シマエナガフォース・フロストパイロット", en:"Force Frost Pilot", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga force pilot suit, sleek white tactical flight suit, icy blue lines, feather armor panels, helmet with bird crest"},
    {ja:"シマエナガフォース・オペレータースーツ", en:"Force Operator", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga force operator suit, white stealth bodysuit, feather camo pattern, utility belt, comms headset"},
    {ja:"シマエナガフォース・セレモニードレスユニフォーム", en:"Force Ceremony Dress", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga force formal uniform dress, high-collar coat dress, feather epaulets, snowflake medals"},
    {ja:"シマエナガフォース・メカニック", en:"Force Mechanic", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga force mechanic jumpsuit, white coverall, feather patch, tool harness, oil smudges, garage vibe"},
    {ja:"シマエナガフォース・スナイパーギリー", en:"Force Sniper Ghillie", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga force ghillie suit, white feather ghillie, snow camouflage, cold-breath haze"},
    {ja:"シマエナガフォース・医療班", en:"Force Medic", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga force medic uniform, white tactical medic coat, feather insignia, medical pouch, clean sterile"},
    {ja:"シマエナガフォース・艦橋クルー", en:"Force Bridge Crew", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga force bridge crew uniform, sleek white suit, holographic panels, feather badge"},

    // Dresses / Gowns (7)
    {ja:"シマエナガ・羽衣レガリア", en:"Feather Regalia", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga motif outfit set, white feather bolero, snowflake embroidery, round fluffy A-line silhouette, elegant winter regalia"},
    {ja:"シマエナガ・ストリートゆめかわ", en:"Street YumeKawa", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga street yume-kawaii dress, pastel layers, feather ribbons, cute bird motifs, playful"},
    {ja:"シマエナガ・ゴスロリ雪影", en:"Gothic Snow Lolita", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga gothic lolita dress, black and white, feather lace, snowflake patterns, mini top hat with feathers"},
    {ja:"シマエナガ・ホワイトバレエ", en:"White Ballet", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga ballet costume, white tutu like fluffy feathers, delicate snowflake sequins, graceful"},
    {ja:"シマエナガ・聖夜のドレス", en:"Holy Night Dress", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga holy night gown, luminous white fabric, feather halo accessories, soft glow"},
    {ja:"シマエナガ・星空の歌姫", en:"Starlit Diva", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga diva stage dress, shimmering feathers, starry gradient, microphone accessory, spotlight"},
    {ja:"シマエナガ・氷晶プリンセス", en:"Ice Crystal Princess", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga princess gown, ice-crystal ornaments, feather cape, glittering snow particles"},

    // China / Eastern (7)
    {ja:"攻めチャイナ・雪羽スリット", en:"Bold Cheongsam Snow", group:"east", tag: SHIMA_BRAND_CORE + ", " + "bold cheongsam dress, Shima-enaga motif, white silk, feather embroidery, high slit, icy jewelry"},
    {ja:"攻めチャイナ・サイバー氷龍", en:"Cyber Cheongsam", group:"east", tag: SHIMA_BRAND_CORE + ", " + "cyber cheongsam, Shima-enaga motif, neon ice-blue circuits, feather patterns, futuristic accessories"},
    {ja:"チャイナ・純白羽紋", en:"White Feather Cheongsam", group:"east", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga cheongsam, pure white, feather brocade, snowflake buttons, elegant"},
    {ja:"チャイナ・黒銀雪影", en:"Black Silver Cheongsam", group:"east", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga black cheongsam with silver feather embroidery, winter night vibe"},
    {ja:"チャイナ・シマエナガステッカー密着", en:"Shima Sticker Print Cheongsam", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "white qipao, elegant chinese dress, mandarin collar, frog buttons, fitted waist, side slits, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the dress surface, all sticker motifs stay on the dress only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on chest, waist, hem, and side panels, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, black, soft gray, deep navy accents, subtle floral embroidery"},
    {ja:"シマエナガ・ゆめかわステッカー密着", en:"Shima Sticker YumeKawa", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "pastel yume-kawaii outfit, frilly dress, oversized sleeves, ribbon decorations, soft silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the dress surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on chest, skirt, sleeves, and hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, pastel pink, baby blue, white, lavender accents"},
    {ja:"シマエナガ・ゴスロリステッカー密着", en:"Shima Sticker Gothic Lolita", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "black and white gothic lolita dress, layered skirt, lace trim, ribbon corset details, elegant gothic silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the dress surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, sleeves, skirt, and hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, black, white, silver-gray accents, subtle gothic embroidery"},
    {ja:"シマエナガ・カジュアルステッカー密着", en:"Shima Sticker Casual", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "casual outfit, oversized hoodie, pleated skirt, relaxed silhouette, everyday fashion, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the clothing surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on hoodie, sleeves, skirt, and chest, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, soft gray, black, navy accents"},
    {ja:"シマエナガ・ドレスステッカー密着", en:"Shima Sticker Princess Dress", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "elegant princess dress, flowing skirt, refined bodice, layered fabric, graceful formal silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the dress surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, waist, skirt, and hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, pearl gray, silver, deep navy accents"},
    {ja:"シマエナガ・冬服ステッカー密着", en:"Shima Sticker Winter Coat", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "winter coat outfit, fluffy long coat, soft knit innerwear, layered winter fashion, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the clothing surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on coat, chest, sleeves, hem, and scarf, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, black, soft gray, deep navy accents, subtle snowflake embroidery"},
    {ja:"シマエナガ・和装ステッカー密着", en:"Shima Sticker Wa Dress", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "modern kimono dress, elegant wa-style outfit, obi accents, long sleeves, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the clothing surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on sleeves, obi, hem, and chest, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, pale blue, soft gray, deep navy accents, subtle floral embroidery"},
    {ja:"シマエナガ・制服ステッカー密着", en:"Shima Sticker Uniform", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "school uniform outfit, sailor collar, pleated skirt, ribbon tie, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the clothing surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on collar, chest, sleeves, and skirt, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, navy, soft gray accents"},
    {ja:"シマエナガ・アイドルステッカー密着", en:"Shima Sticker Idol", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "idol stage outfit, frilled mini dress, ribbon accessories, performance costume, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the dress surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, skirt, sleeves, and waist, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, ice blue, silver, pastel accents"},
    {ja:"シマエナガ・ストリートステッカー密着", en:"Shima Sticker Street", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "street fashion outfit, oversized jacket, layered top, short skirt, urban silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the clothing surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on jacket, chest, sleeves, and skirt, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, black, gray, deep navy accents"},
    {ja:"シマエナガ・ルームウェアステッカー密着", en:"Shima Sticker Roomwear", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "roomwear outfit, soft cardigan, cozy top, short lounge skirt, relaxed home fashion, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the clothing surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on cardigan, chest, sleeves, and hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, soft lavender, pale blue, gray accents"},
    {ja:"シマエナガ・フェミニンステッカー密着", en:"Shima Sticker Feminine", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "feminine outfit, soft blouse, ribbon waist, flared skirt, graceful everyday silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on blouse, waist ribbon, cuffs, and skirt hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, pale pink, light gray, deep navy accents"},
    {ja:"シマエナガ・水着ステッカー密着", en:"Shima Sticker Swimwear", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "cute swimwear outfit, fitted swimsuit silhouette, summery styling, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the swimwear fabric, bird sticker decals attached flat onto the clothing surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on chest, side panels, waistline, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, aqua, soft gray, navy accents"},
    {ja:"シマエナガ・バニーステッカー密着", en:"Shima Sticker Bunny", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "bunny outfit, sleek bodysuit, cuffs, collar, elegant playful silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, waist, cuffs, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, black, silver-gray, deep navy accents"},
    {ja:"シマエナガ・クラシックバニーステッカー密着", en:"Shima Sticker Classic Bunny", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "classic bunny suit, polished bodysuit, white cuffs, satin collar, stage-ready silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, waist, cuffs, collar, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, black, silver-gray, deep navy accents"},
    {ja:"シマエナガ・逆バニーステッカー密着", en:"Shima Sticker Reverse Bunny", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "reverse bunny outfit, dramatic open styling, sleek formal bunny silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice panels, waistline, cuffs, collar, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, black, midnight navy, silver accents"},
    {ja:"シマエナガ・フリルバニーステッカー密着", en:"Shima Sticker Frill Bunny", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "frilled bunny outfit, cute bodysuit, ribbon trim, playful idol-like silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, frills, waist ribbon, cuffs, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, pale pink, black, soft gray accents"},
    {ja:"シマエナガ・サイバーバニーステッカー密着", en:"Shima Sticker Cyber Bunny", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "cyber bunny outfit, futuristic bodysuit, luminous trim, sleek nightclub silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, side panels, cuffs, collar, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, black, neon cyan, deep navy accents"},
    {ja:"シマエナガ・メイドステッカー密着", en:"Shima Sticker Maid", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "classic maid outfit, frilled apron dress, puff sleeves, elegant service silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on apron, bodice, sleeves, and skirt hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, black, pale blue, soft gray accents"},
    {ja:"シマエナガ・天使ステッカー密着", en:"Shima Sticker Angel", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "angelic dress outfit, celestial white costume, graceful layered fabric, halo-like elegance, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on chest, sleeves, waist, and hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, pearl gray, soft gold, pale blue accents"},
    {ja:"シマエナガ・悪魔ステッカー密着", en:"Shima Sticker Devil", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "devilish outfit, dark elegant costume, sharp silhouette, gothic fantasy styling, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, sleeves, waist, and hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, black, crimson, silver-gray, deep navy accents"},
    {ja:"シマエナガ・サイバーステッカー密着", en:"Shima Sticker Cyber", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "cyber fashion outfit, futuristic jacket, sleek bodysuit layering, techno silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on jacket, chest, sleeves, and hip panels, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, black, neon blue, metallic gray accents"},
    {ja:"シマエナガ・和ロリステッカー密着", en:"Shima Sticker Wa Lolita", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "wa-lolita outfit, kimono-inspired lolita dress, ribbon obi, frilled sleeves, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on sleeves, obi, bodice, and skirt hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, pale pink, soft blue, deep navy accents"},
    {ja:"シマエナガ・中華ロリステッカー密着", en:"Shima Sticker Qi Lolita", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "qi-lolita outfit, chinese lolita dress, mandarin collar, layered frills, elegant eastern silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, sleeves, waist, and layered skirt hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, red, soft gray, deep navy accents"},
    {ja:"シマエナガ・春色カーデステッカー密着", en:"Shima Sticker Spring Cardigan", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "spring cardigan outfit, soft pastel cardigan, light inner dress, gentle daily silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on cardigan, chest, cuffs, and hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, pale mint, soft pink, light gray accents"},
    {ja:"シマエナガ・ニットワンピステッカー密着", en:"Shima Sticker Knit Onepiece", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "knit one-piece dress, soft ribbed knit texture, cozy feminine silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the dress surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on chest, sleeves, waist, and hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, ivory, soft gray, pale blue, deep navy accents"},
    {ja:"シマエナガ・デニムカジュアルステッカー密着", en:"Shima Sticker Denim Casual", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "denim casual outfit, short denim jacket, pleated skirt, everyday street-casual balance, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on jacket, chest, back panel, and skirt hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, washed blue, white, black, soft gray accents"},
    {ja:"シマエナガ・クラロリステッカー密着", en:"Shima Sticker Classic Lolita", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "classic lolita dress, refined frills, elegant ribbon waist, structured skirt silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the dress surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, cuffs, waist ribbon, and skirt hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, dusty blue, silver-gray, ivory accents"},
    {ja:"シマエナガ・セレモニーステッカー密着", en:"Shima Sticker Ceremony Dress", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "ceremony dress outfit, refined formalwear, neat ribbon details, graceful event silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the dress surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on chest, cuffs, waist, and skirt hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, pearl gray, navy, soft silver accents"},
    {ja:"シマエナガ・ライブステージステッカー密着", en:"Shima Sticker Live Stage", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "live stage costume, sparkling performance dress, layered mini skirt, energetic show silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the dress surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, sleeves, waist, and layered skirt hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, ice blue, pastel violet, silver accents"},
    {ja:"シマエナガ・浴衣ステッカー密着", en:"Shima Sticker Yukata", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "summer yukata outfit, light fabric, obi sash, elegant seasonal silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the clothing surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on sleeves, obi, hem, and back panel, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, pale blue, indigo, soft gray accents"},
    {ja:"シマエナガ・和モダンステッカー密着", en:"Shima Sticker Modern Wa", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "modern wa-fashion outfit, kimono sleeve top, short layered skirt, obi belt accents, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the clothing surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on sleeves, obi belt, chest, and layered hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, vermilion, pale gold, soft gray accents"},
    {ja:"シマエナガ・漢服ステッカー密着", en:"Shima Sticker Hanfu", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "hanfu-inspired outfit, flowing layered sleeves, elegant eastern silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the clothing surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on sleeves, waist sash, chest, and hemline, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, jade green, pale blue, deep navy accents"},
    {ja:"シマエナガ・テックウェアステッカー密着", en:"Shima Sticker Techwear", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "techwear outfit, utility straps, layered black jacket, urban functional silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on jacket, utility panels, sleeves, and thigh straps, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, black, white, graphite, neon blue accents"},
    {ja:"シマエナガ・近未来パーカーステッカー密着", en:"Shima Sticker Future Hoodie", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "near-future hoodie outfit, sleek oversized hoodie, luminous trim, sporty urban silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on hood, chest, sleeves, and hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, black, cyan, metallic gray accents"},
    {ja:"シマエナガ・ネオンストリートステッカー密着", en:"Shima Sticker Neon Street", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "neon street outfit, cropped jacket, layered top, urban nightlife silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on jacket, chest, sleeves, and skirt or shorts hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, black, white, neon pink, electric blue accents"},
    {ja:"シマエナガ・ゴシックシスターステッカー密着", en:"Shima Sticker Gothic Sister", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "gothic sister outfit, modest layered dress, veil-inspired elegance, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on chest, cuffs, hem, and veil edge, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, black, white, silver-gray, deep navy accents"},
    {ja:"シマエナガ・パラディンステッカー密着", en:"Shima Sticker Paladin", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "paladin-inspired dress armor outfit, elegant white armor panels, ceremonial fantasy silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric and armor panels, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on chest armor, sleeves, waist guard, and hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, silver, pale blue, gold accents"},
    {ja:"シマエナガ・ダークメイドステッカー密着", en:"Shima Sticker Dark Maid", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "dark maid outfit, frilled apron dress, gothic service styling, elegant shadowy silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on apron, bodice, cuffs, and skirt hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, black, crimson, soft gray, deep navy accents"},
    {ja:"シマエナガ・フリルビキニステッカー密着", en:"Shima Sticker Frill Bikini", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "frilled bikini swimsuit, cute layered ruffles, soft resort silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the swimsuit surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bikini top, side ties, frill edges, and pareo accents, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, pale aqua, pastel pink, navy accents"},
    {ja:"シマエナガ・ワンピース水着ステッカー密着", en:"Shima Sticker Onepiece Swim", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "one-piece swimsuit, smooth fitted silhouette, elegant swimwear styling, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the swimsuit surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on chest, side panels, waist line, and hip curve, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, navy, pale blue, silver-gray accents"},
    {ja:"シマエナガ・リゾート水着ステッカー密着", en:"Shima Sticker Resort Swim", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "resort swim outfit, layered swimwear with pareo, relaxed beach silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the swim fabric, bird sticker decals attached flat onto the clothing surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bikini or swimsuit panels, pareo edge, chest, and waist ribbon, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, turquoise, soft coral, deep navy accents"},

    {ja:"シマエナガ・競泳ステッカー密着", en:"Shima Sticker Competitive Swim", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "competitive racing swimsuit, sleek athletic silhouette, streamlined sporty styling, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the swimsuit surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on chest, side panels, waistline, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, navy, racing blue, silver-gray accents"},
    {ja:"シマエナガ・スポーティビキニステッカー密着", en:"Shima Sticker Sporty Bikini", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "sporty bikini swimwear, active beach silhouette, sharp clean cut, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the swimsuit surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bikini top, side straps, waistline, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, aqua, navy, sporty cyan accents"},
    {ja:"シマエナガ・ラッシュガードステッカー密着", en:"Shima Sticker Rash Guard", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "rash guard swimwear, sporty zip-front top, sleek beach athletic silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the swimwear fabric, bird sticker decals attached flat onto the clothing surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on chest, sleeves, side panels, waistline, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, aqua, sporty navy, silver-gray accents"},
    {ja:"シマエナガ・競泳ハイレグステッカー密着", en:"Shima Sticker High-Leg Racing Swim", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "high-leg racing swimsuit, sleek athletic silhouette, dynamic competitive swim styling, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the swimsuit surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on chest, side panels, waistline, straps, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, navy, racing blue, silver-gray accents"},
    {ja:"シマエナガ・セーラー水着ステッカー密着", en:"Shima Sticker Sailor Swim", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "sailor style swimwear, sailor collar, ribbon front, cute nautical swimsuit silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the swimwear fabric, bird sticker decals attached flat onto the clothing surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on collar, chest, waistline, hem, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, navy, aqua, soft gray accents"},
    {ja:"シマエナガ・南国パレオステッカー密着", en:"Shima Sticker Tropical Pareo", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "tropical swimwear with pareo wrap, resort beach styling, breezy summery silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the swimwear and pareo fabric, bird sticker decals attached flat onto the clothing surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on chest, pareo wrap, waistline, hem, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, tropical aqua, leaf green, soft gray accents"},
    {ja:"シマエナガ・リボンバニーステッカー密着", en:"Shima Sticker Ribbon Bunny", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "ribbon bunny outfit, playful bodysuit, bow accents, cute stage silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, ribbon bows, cuffs, waistline, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, pale pink, black, silver-gray accents"},
    {ja:"シマエナガ・アイドルバニーステッカー密着", en:"Shima Sticker Idol Bunny", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "idol bunny outfit, performance bodysuit, sparkling trim, cheerful spotlight silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, collar, cuffs, waist ribbon, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, gold, pastel blue, silver-gray accents"},
    {ja:"シマエナガ・ゴシックバニーステッカー密着", en:"Shima Sticker Gothic Bunny", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "gothic bunny outfit, dark elegant bodysuit, lace accents, refined nocturne silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, lace edges, cuffs, collar, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, black, wine red, silver-gray accents"},
    {ja:"シマエナガ・ロイヤルバニーステッカー密着", en:"Shima Sticker Royal Bunny", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "royal bunny outfit, elegant bodysuit, jeweled collar, regal stage silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, collar, cuffs, waist, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, royal blue, gold, silver-gray accents"},
    {ja:"シマエナガ・和バニーステッカー密着", en:"Shima Sticker Wa Bunny", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "wa-style bunny outfit, obi-inspired waist, kimono sleeve accents, elegant festive bunny silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, obi line, cuffs, collar, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, crimson, deep navy, soft gold accents"},
    {ja:"シマエナガ・中華バニーステッカー密着", en:"Shima Sticker Chinese Bunny", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "chinese style bunny outfit, mandarin collar details, qipao-inspired bunny silhouette, elegant festive styling, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, collar, side panels, cuffs, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, red, black, gold accents"},
    {ja:"シマエナガ・メイドバニーステッカー密着", en:"Shima Sticker Maid Bunny", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "maid bunny outfit, apron details, frilled bodysuit, sweet service silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, apron, cuffs, collar, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, black, pale blue, silver-gray accents"},
    {ja:"東方・巫女装束雪祈", en:"Miko Snow Prayer", group:"east", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga miko outfit, white and red, feather tassels, snow shrine atmosphere"},
    {ja:"和洋折衷・羽織ドレス", en:"Haori Dress Fusion", group:"east", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga haori dress fusion, kimono sleeves, modern skirt, feather patterns"},
    {ja:"中華・龍鳳羽冠", en:"Dragon-Phoenix Crown", group:"east", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga chinese ceremonial outfit, dragon-phoenix headdress with feathers, ornate silk"},

    // Gravure / Glam (7)
    {ja:"グラビア・フェザー水着", en:"Feather Swimsuit", group:"gravure", tag: SHIMA_BRAND_CORE + ", " + "gravure idol costume, Shima-enaga motif swimsuit, white and ice-blue, feather frills, glossy"},
    {ja:"グラビア・ビキニ雪結晶", en:"Snowflake Bikini", group:"gravure", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga snowflake bikini, feather accessories, sparkling ice crystals, beach winter fantasy"},
    {ja:"グラビア・ランジェリー羽紋", en:"Feather Lingerie", group:"gravure", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga motif lingerie set, white lace like feathers, delicate snowflake charms"},
    {ja:"グラビア・ボディスーツ艶", en:"Gloss Bodysuit", group:"gravure", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga glossy bodysuit, feather pattern, sleek silhouette, high-fashion gravure"},
    {ja:"グラビア・ファーコート脱ぎかけ", en:"Half-Off Fur Coat", group:"gravure", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga fur coat, feather trim, glamorous pose, teasing fashion (non-explicit)"},
    {ja:"グラビア・ナイトクラブドレス", en:"Night Club Dress", group:"gravure", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga night club mini dress, feather boa, neon lighting, glam"},
    {ja:"グラビア・撮影会セット", en:"Photoshoot Set", group:"gravure", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga gravure photoshoot outfit, studio lights, feather props, glossy makeup"},

    // Fantasy / Role (7)
    {ja:"シマ騎士・白羽の鎧", en:"Shima Knight", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga knight armor, white feather pauldrons, snowflake crest, elegant plate armor"},
    {ja:"シマ魔導士・氷紋ローブ", en:"Shima Mage", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga mage robe, icy runes, feather-lined hood, magical aura"},
    {ja:"シマ忍者・雪迷彩", en:"Shima Ninja", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga ninja outfit, white stealth suit, feather mask, snow camouflage"},
    {ja:"シマ海賊・羽根帽子", en:"Shima Pirate", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga pirate outfit, tricorne hat with feathers, white coat, winter sea vibe"},
    {ja:"シマ天使・白羽の礼装", en:"Shima Angel", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga angelic attire, feather wings motif, halo, pure white dress"},
    {ja:"シマ悪魔・黒羽の誘惑", en:"Shima Devil", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga devilish outfit, black feathers, sharp accessories, seductive gothic fashion"},
    {ja:"シマ巫女・雪神楽", en:"Shima Kagura Miko", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga kagura miko outfit, ceremonial sleeves, feather ornaments, sacred snow"},

    // Seasonal / Event (7)
    {ja:"シマエナガ・浴衣夏氷", en:"Shima Yukata", group:"season", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga yukata, pale blue patterns, feather obi, summer night festival"},
    {ja:"シマエナガ・着物冬白", en:"Shima Kimono", group:"season", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga kimono, white and gray, feather crest, snowy garden"},
    {ja:"シマエナガ・クリスマスサンタ", en:"Shima Santa", group:"season", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga santa outfit, fluffy white fur trim, feather pompom, festive"},
    {ja:"シマエナガ・ハロウィン梟魔女", en:"Shima Owl Witch", group:"season", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga witch costume, feather hat, moonlight, playful spooky"},
    {ja:"シマエナガ・新年晴れ着", en:"Shima New Year", group:"season", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga new year haregi, elegant kimono, feather ornament, shrine visit"},
    {ja:"シマエナガ・節分鬼かわ", en:"Shima Oni Cute", group:"season", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga cute oni costume, small horns, tiger stripes, feather cape"},
    {ja:"シマエナガ・花嫁純白", en:"Shima Bride", group:"season", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga bridal gown, feather veil, snowflake tiara, pure white"},

    // --- Expanded Shima Collection (44) ---
    {ja:"シマエナガ・ライトフェザー", en:"Shima Light Feather Variant", group:"casual", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga outfit, lightweight feather-themed casual attire, white head motif accents, subtle feather embroidery, soft white/gray palette"},
    {ja:"シマエナガ・ヘヴィフェザー", en:"Shima Heavy Feather Variant", group:"casual", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga outfit, heavier feather motif layering, thick feather-textured trims, monochrome white/black accents, cozy silhouette"},
    {ja:"シマエナガ・祭り羽織", en:"Shima Festival Feather Dress", group:"east", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga festival attire, feather-pattern yukata/haori fusion, snowflake and feather motifs, elegant yet playful"},
    {ja:"シマエナガ・天体羽衣", en:"Shima Celestial Plume Edition", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga celestial outfit, starlight embroidery, moon-and-feather ornaments, luminous fabric, night fantasy vibe"},
    {ja:"シマエナガ・雪花タイプ", en:"Shima Snow Blossom Type", group:"season", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga winter outfit, snow blossom embroidery, fluffy white trims, ice-blue highlights, gentle cute silhouette"},
    {ja:"シマエナガ・アーバン羽根フーディ", en:"Shima Urban Feather Hoodie", group:"casual", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga street hoodie, feather stripe accents, bird patch set, white/ice-blue color blocking, casual"},
    {ja:"シマエナガ・ロイヤル白羽根", en:"Shima Royal White Plume", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga royal attire, white plume capelet, subtle crown motifs, refined ceremonial styling, jewel accents"},
    {ja:"シマエナガ・フライトギア", en:"Shima Flight-Ready Gear", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga tactical flight outfit, feather-shaped panels, streamlined silhouette, wing-like back details, crisp white/gray"},
    {ja:"シマエナガ・夜咲きプルーム", en:"Shima Night Bloom Plume", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga night attire, dark-to-light gradient, feather shimmer embroidery, elegant seductive mood"},
    {ja:"シマエナガ・巫女融合", en:"Shima Shrine Maiden Fusion", group:"east", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga shrine maiden outfit, white/red accents, feather talismans, bird crest patches, sacred cute vibe"},
    {ja:"シマエナガ・ホロフェザー", en:"Shima Holo Feather Shine", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga holographic feather outfit, iridescent feather trims, hologram panels, futuristic shine"},
    {ja:"シマエナガ・黎明ローブ", en:"Shima Dawn Light Robe", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga robe, dawn glow gradient, feather-lined hood, soft luminous fabric, serene"},
    {ja:"シマエナガ・バトルトリム", en:"Shima Battle-Trimmed Feathers", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga battle attire, feather-edged armor trims, reinforced panels, wing insignia, awakened feel"},
    {ja:"シマエナガ・サファイア羽根", en:"Shima Sapphire Plume Variant", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga dress, sapphire jewel feather ornaments, crystalline accents, luxurious ceremonial styling"},
    {ja:"シマエナガ・竜羽融合", en:"Shima Dragon Plume Fusion", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga fusion attire with dragon-inspired feather armor, scaled sheen, wing-like back unit, awakened battle form"},
    {ja:"シマエナガ・白炎フェニックス", en:"Shima Phoenix White Blaze", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga phoenix-inspired regalia, white flame motifs, glowing feather layers, radiant ceremonial dress"},
    {ja:"シマエナガ・天使翼フォーム", en:"Shima Celestial Angel Wing Form", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga angelic form, translucent feather wings, halo ornaments, luminous white/ice-blue dress"},
    {ja:"シマエナガ・結晶進化", en:"Shima Crystal Feather Evolution", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga evolved dress, crystal feather adornments, prismatic highlights, high-end ritual fashion"},
    {ja:"シマエナガ・フロストウィング極", en:"Shima Frost Wing Full Regalia", group:"season", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga frost wing regalia, layered ice-feather cape, cold glow particles, majestic winter queen vibe"},
    {ja:"シマエナガ・星雲シマー", en:"Shima Nebula Shimmer Dress", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga nebula dress, stardust shimmer fabric, floating feather particles, deep night fantasy"},
    {ja:"シマエナガ・月護り", en:"Shima Lunar Guardian Attire", group:"season", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga lunar guardian outfit, crescent motifs, feather armor panels, sacred warrior styling"},
    {ja:"シマエナガ・風霊マント", en:"Shima Wind Spirit Mantle", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga wind spirit mantle, feather ribbons flowing, airy translucent layers, ethereal"},
    {ja:"シマエナガ・聖騎士羽装甲", en:"Shima Holy Knight Plume Armor", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga holy knight armor, plume pauldrons, wing crest, white steel + feather fusion"},
    {ja:"シマエナガ・聖歌隊ローブ", en:"Shima Sacred Choir White Robe", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga choir ceremonial robe, feather embroidery, cathedral elegance, pure white layers"},
    {ja:"シマエナガ・浮遊アークヘイロー", en:"Shima Floating Arc Halo Dress", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga dress with floating arc halo ornaments, luminous feathers orbiting, divine atmosphere"},
    {ja:"シマエナガ・雪皇后神話", en:"Shima Mythic Snow Empress Form", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga mythic snow empress, heavy feather mantle, ice crystal crown, regal winter form"},
    {ja:"シマエナガ・光の聖堂ドレス", en:"Shima Radiant Light Cathedral Gown", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga cathedral gown, stained-glass light motifs, feather veil layers, ritual luxury"},
    {ja:"シマエナガ・星海ローブ", en:"Shima Star Ocean Plume Robe", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga star-ocean robe, cosmic gradients, plume-lined cape, astral shimmer"},
    {ja:"シマエナガ・アーコン礼装", en:"Shima Archon Attire", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga archon regalia, emblematic feathers, sovereign aura, high ritual form"},
    {ja:"シマエナガ・神権プルーム", en:"Shima Divine Sovereign Plume", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga divine sovereign regalia, crown-like plume halo, gilded feather ornaments, supreme ceremonial dress"},
    {ja:"シマエナガ・無限白翼", en:"Shima Infinite White Wing Form", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga infinite white wing form, massive ethereal wings, pure light feathers, transcendent aura"},
    {ja:"シマエナガ・超越レガリア", en:"Shima Transcendence Feather Regalia", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga transcendence regalia, layered feather architecture, luminous gradients, mythic elegance"},
    {ja:"シマエナガ・天冠", en:"Shima Celestial Crown Shima", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga celestial crown attire, crown and halo fusion, crystal feather tiara, radiant"},
    {ja:"シマエナガ・終光アバター", en:"Shima Final Light Avatar", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga final light avatar, light-body silhouette, feather particles, divine manifestation"},
    {ja:"シマエナガ・聖断マント", en:"Shima Sacred Judgment Mantle", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga mantle of judgment, wing sigils, sharp feather edges, holy authority"},
    {ja:"シマエナガ・永劫エーテル", en:"Shima Ethereal Eternity Dress", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga eternity dress, endless flowing feather layers, soft glow, timeless serenity"},
    {ja:"シマエナガ・極寒女王", en:"Shima Ultimate Frost Queen Form", group:"season", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga ultimate frost queen, ice-feather armor, blizzard aura, regal dominance"},
    {ja:"シマエナガ・黎明女帝", en:"Shima Luminous Dawn Empress", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga dawn empress, sunrise gradients, feather crown, imperial regalia"},
    {ja:"シマエナガ・至高戴冠", en:"Shima Supreme Halo Coronation", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga coronation attire, supreme halo rings, floating feathers, ceremonial grandeur"},
    {ja:"シマエナガ・星図の書記", en:"Shima Astral Archive Keeper", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga archive keeper outfit, astral script motifs, feather cape, scholarly divine vibe"},
    {ja:"シマエナガ・白宇宙の化身", en:"Shima White Cosmos Incarnation", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga cosmos incarnation, white cosmic textures, nebula feathers, abstract divinity"},
    {ja:"シマエナガ・神光プライム", en:"Shima Godlight Feather Prime", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga godlight prime, concentrated luminous feathers, prismatic highlights, ultimate form"},
    {ja:"シマエナガ・オーロラ玉座", en:"Shima Aurora Throne Regalia", group:"season", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga aurora regalia, aurora ribbon feathers, throne-worthy mantle, polar light"},
    {ja:"シマエナガ・原初フォーム", en:"Shima Origin Form", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga origin form, pure simplified feather symbolism, primal white/black balance, iconic silhouette"},

    // Spicy Special Glam +30
    {ja:"攻めスペシャル・サテン深スリット", en:"Spicy Special Satin Deep Slit", spicyGroup:"glam_dress", group:"spicy", label:"SPICY", tag: "satin gown, deep slit, glossy drape, elegant glam, refined silhouette"},
    {ja:"攻めスペシャル・ベルベット夜会", en:"Spicy Special Velvet Gala", spicyGroup:"glam_dress", group:"spicy", label:"SPICY", tag: "velvet evening dress, soft sheen, luxe texture, cinematic night glam"},
    {ja:"攻めスペシャル・クリスタル縁ビスチェ", en:"Spicy Special Crystal Bustier", spicyGroup:"glam_dress", group:"spicy", label:"SPICY", tag: "crystal-trim bustier, structured fit, jewel accents, high-fashion glam"},
    {ja:"攻めスペシャル・シルクホルター艶", en:"Spicy Special Silk Halter", spicyGroup:"glam_dress", group:"spicy", label:"SPICY", tag: "silk halter dress, smooth fabric flow, flattering neckline, elegant shine"},
    {ja:"攻めスペシャル・レースマーメイド", en:"Spicy Special Lace Mermaid", spicyGroup:"glam_dress", group:"spicy", label:"SPICY", tag: "lace mermaid dress, intricate lace, bodyline elegance, mature glam"},
    {ja:"攻めスペシャル・片肩グラム", en:"Spicy Special One-Shoulder", spicyGroup:"mode_bodycon", group:"spicy", label:"SPICY", tag: "one-shoulder cocktail dress, asymmetric cut, sleek glam, modern silhouette"},
    {ja:"攻めスペシャル・オペラグローブ礼装", en:"Spicy Special Opera Gloves", spicyGroup:"glam_dress", group:"spicy", label:"SPICY", tag: "opera gloves, gala styling, satin shine, classic luxury mood"},
    {ja:"攻めスペシャル・背中リボン背面魅せ", en:"Spicy Special Backless Ribbon", spicyGroup:"glam_dress", group:"spicy", label:"SPICY", tag: "backless dress, ribbon back detail, elegant exposure, tasteful allure"},
    {ja:"攻めスペシャル・真珠チェーン背中飾り", en:"Spicy Special Pearl Chain", spicyGroup:"glam_dress", group:"spicy", label:"SPICY", tag: "pearl chain back accessory, luxe sparkle, refined detailing"},
    {ja:"攻めスペシャル・透けレイヤー正装", en:"Spicy Special Sheer Overlay", spicyGroup:"glam_dress", group:"spicy", label:"SPICY", tag: "sheer overlay layers, subtle translucency, light-catching fabric, elegant glam"},
    {ja:"攻めスペシャル・ネオン艶ボディコン", en:"Spicy Special Neon Bodycon", spicyGroup:"mode_bodycon", group:"spicy", label:"SPICY", tag: "neon shimmer bodycon, nightclub glow, sleek fit, city night vibe"},
    {ja:"攻めスペシャル・ルーフトップ風スリット", en:"Spicy Special Rooftop Slit", spicyGroup:"glam_dress", group:"spicy", label:"SPICY", tag: "wind-slit skirt, rooftop night, dynamic hem, dramatic silhouette"},
    {ja:"攻めスペシャル・反射素材シティナイト", en:"Spicy Special Reflective Night", spicyGroup:"mode_bodycon", group:"spicy", label:"SPICY", tag: "reflective fabric accents, city lights, glossy highlights, modern glam"},
    {ja:"攻めスペシャル・月光シースルーカーデ", en:"Spicy Special Moonlit Cardigan", spicyGroup:"outer_gloss", group:"spicy", label:"SPICY", tag: "moonlit sheer cardigan, soft translucency, gentle drape, night elegance"},
    {ja:"攻めスペシャル・スポットライト礼装スーツ", en:"Spicy Special Spotlight Suit", spicyGroup:"suit_formal", group:"spicy", label:"SPICY", tag: "spotlight glam suit, tailored lines, stage-ready shine, confident presence"},
    {ja:"攻めスペシャル・ホログラムミニドレス", en:"Spicy Special Holo Mini", spicyGroup:"glam_dress", group:"spicy", label:"SPICY", tag: "holographic mini dress, prism sheen, edgy glam, club fashion"},
    {ja:"攻めスペシャル・雨夜グロスレザー", en:"Spicy Special Rain Gloss", spicyGroup:"glam_dress", group:"spicy", label:"SPICY", tag: "gloss leather look, rainy night reflections, sharp highlights, urban edge"},
    {ja:"攻めスペシャル・夜景ベルベットジャケット", en:"Spicy Special Velvet Jacket", spicyGroup:"suit_formal", group:"spicy", label:"SPICY", tag: "velvet jacket styling, skyline night, luxe texture, chic layering"},
    {ja:"攻めスペシャル・プリズムクラブドレス", en:"Spicy Special Prism Club", spicyGroup:"glam_dress", group:"spicy", label:"SPICY", tag: "prism shimmer club dress, luminous gradients, vivid nightlife glow"},
    {ja:"攻めスペシャル・シルエットロングコート艶", en:"Spicy Special Long Coat", spicyGroup:"outer_gloss", group:"spicy", label:"SPICY", tag: "sleek long coat dress, slit detail, silhouette emphasis, night chic"},
    {ja:"攻めスペシャル・ゴシックレース深V", en:"Spicy Special Gothic Lace", spicyGroup:"leather_goth", group:"spicy", label:"SPICY", tag: "gothic lace deep v, dark elegance, lace detail, dramatic glam"},
    {ja:"攻めスペシャル・ブラックサテンコルセット", en:"Spicy Special Satin Corset", spicyGroup:"leather_goth", group:"spicy", label:"SPICY", tag: "black satin corset set, structured waist, luxurious sheen, bold glam"},
    {ja:"攻めスペシャル・黒薔薇シマー", en:"Spicy Special Black Rose", spicyGroup:"leather_goth", group:"spicy", label:"SPICY", tag: "black rose accents, shimmer fabric, dark romantic glam"},
    {ja:"攻めスペシャル・影スリットレイヤード", en:"Spicy Special Shadow Slit", spicyGroup:"glam_dress", group:"spicy", label:"SPICY", tag: "layered dress, shadow slit, subtle exposure, cinematic contrast"},
    {ja:"攻めスペシャル・紅差しダークグラム", en:"Spicy Special Crimson Accent", spicyGroup:"leather_goth", group:"spicy", label:"SPICY", tag: "crimson accent details, dark glam palette, striking contrast"},
    {ja:"攻めスペシャル・構築モード輪郭セット", en:"Spicy Special Structured Mode", spicyGroup:"mode_bodycon", group:"spicy", label:"SPICY", tag: "structured high-fashion set, contour lines, modern cut, runway vibe"},
    {ja:"攻めスペシャル・彫刻肩モードトップ", en:"Spicy Special Sculpted Shoulder", spicyGroup:"mode_bodycon", group:"spicy", label:"SPICY", tag: "sculpted shoulder top, sharp silhouette, fashion-forward glam"},
    {ja:"攻めスペシャル・ハイウエスト光沢パンツ", en:"Spicy Special Gloss Trousers", spicyGroup:"mode_bodycon", group:"spicy", label:"SPICY", tag: "high-waist gloss trousers, sleek tailoring, reflective finish, chic"},
    {ja:"攻めスペシャル・ミニマルシルクスーツ", en:"Spicy Special Minimal Silk", spicyGroup:"suit_formal", group:"spicy", label:"SPICY", tag: "minimal silk suit, clean lines, subtle shine, refined presence"},
    {ja:"攻めスペシャル・スリットコートドレス", en:"Spicy Special Coat Dress", spicyGroup:"outer_gloss", group:"spicy", label:"SPICY", tag: "coat dress with slit, modern minimal glam, elegant cut"},
  
  { ja:"攻めスペシャル・ダークベルベットスリップ", en:"Spicy Special Dark Velvet Slip", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "black velvet slip dress, subtle sheen, lace trim, night glamour" },
  { ja:"攻めスペシャル・漆黒レースボディスーツ", en:"Spicy Special Obsidian Lace Bodysuit", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "black lace bodysuit, sheer panels, elegant sensuality" },
  { ja:"攻めスペシャル・黒薔薇コルセット", en:"Spicy Special Black Rose Corset", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "corset with black rose embroidery, satin ribbons, hourglass silhouette" },
  { ja:"攻めスペシャル・スモークシフォンガウン", en:"Spicy Special Smoke Chiffon Gown", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "smoky chiffon gown, translucent layers, floating hem, moody lighting" },
  { ja:"攻めスペシャル・ダークサテンローブ", en:"Spicy Special Dark Satin Robe", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "dark satin robe, glossy drape, deep neckline, luxe loungewear" },
  { ja:"攻めスペシャル・影羽ケープドレス", en:"Spicy Special Shadow Feather Cape Dress", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "cape dress, feather-like gradient cape, dramatic silhouette, noir glamour" },
  { ja:"攻めスペシャル・月影シアードレス", en:"Spicy Special Moonshadow Sheer Dress", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "sheer dress, layered mesh, moonlit shimmer, elegant conceal-reveal" },
  { ja:"攻めスペシャル・黒曜スリットドレス", en:"Spicy Special Obsidian Slit Dress", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "high slit dress, obsidian shine, sleek lines, confident stance" },
  { ja:"攻めスペシャル・ダークグロススカートスーツ", en:"Spicy Special Dark Gloss Skirt Suit", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "glossy skirt suit, sharp shoulders, noir chic, subtle sparkle" },
  { ja:"攻めスペシャル・黒金ハーネスドレス", en:"Spicy Special Black-Gold Harness Dress", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "black and gold harness accents, elegant dress, refined edgy" },
  { ja:"攻めスペシャル・夜霧ネグリジェ", en:"Spicy Special Nightmist Negligee", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "negligee, soft lace, misty translucence, romantic noir" },
  { ja:"攻めスペシャル・黒真珠チョーカードレス", en:"Spicy Special Black Pearl Choker Dress", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "dress with black pearl choker collar, glossy fabric, elegant" },
  { ja:"攻めスペシャル・ダークレザータイトワンピ", en:"Spicy Special Dark Leather Bodycon", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "dark leather bodycon dress, matte+gloss contrast, sleek" },
  { ja:"攻めスペシャル・影織りロンググローブ", en:"Spicy Special Shadow-Weave Long Gloves", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "opera gloves, sheer pattern, shadow motif, classy allure" },
  { ja:"攻めスペシャル・暗紅シルクチャイナ", en:"Spicy Special Deep Crimson Silk Cheongsam", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "deep crimson silk cheongsam, black lace edging, sultry elegance" },
  { ja:"攻めスペシャル・漆黒ベールヘッドピース", en:"Spicy Special Obsidian Veil Headpiece", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "black veil headpiece, subtle sparkle, gothic chic" },
  { ja:"攻めスペシャル・ダークスパンコールミニ", en:"Spicy Special Dark Sequin Mini", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "dark sequin mini dress, shimmer, stage-ready glamour" },
  { ja:"攻めスペシャル・黒影オフショルドレス", en:"Spicy Special Noir Off-Shoulder Dress", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "off-shoulder dress, soft drape, noir elegance, collarbone highlight" },
  { ja:"攻めスペシャル・夜光タトゥーストッキング", en:"Spicy Special Nightglow Tattoo Stockings", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "patterned stockings, tattoo-like motifs, faint glow, stylish" },
  { ja:"攻めスペシャル・黒煙フードマント", en:"Spicy Special Black Smoke Hooded Mantle", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "hooded mantle, smoky gradient, cinematic silhouette, mysterious" },
  { ja:"攻めスペシャル・高級ビキニ雪結晶", en:"Spicy Special Luxury Bikini Snowflake", group:"spicy", label:"SPICY", spicyGroup:"luxury_swim", tag: "luxury bikini, ice-blue, snowflake charm, glossy fabric" },
  { ja:"攻めスペシャル・高級ワンピース水着シルク", en:"Spicy Special Luxury One-piece Silk Swim", group:"spicy", label:"SPICY", spicyGroup:"luxury_swim", tag: "one-piece swimsuit, silk-like sheen, minimal cut, premium" },
  { ja:"攻めスペシャル・高級ラッシュガード艶", en:"Spicy Special Glossy Rash Guard", group:"spicy", label:"SPICY", spicyGroup:"luxury_swim", tag: "glossy rash guard, feather stripe lines, sleek sport glam" },
  { ja:"攻めスペシャル・高級ビキニ羽根ライン", en:"Spicy Special Feather-Line Luxury Bikini", group:"spicy", label:"SPICY", spicyGroup:"luxury_swim", tag: "bikini, feather line accents, refined, high-end resort" },
  { ja:"攻めスペシャル・高級モノキニ宝石", en:"Spicy Special Jewel Monokini", group:"spicy", label:"SPICY", spicyGroup:"luxury_swim", tag: "monokini with jewel connector, reflective, couture swim" },
  { ja:"攻めスペシャル・高級シアーパレオ", en:"Spicy Special Sheer Pareo", group:"spicy", label:"SPICY", spicyGroup:"luxury_swim", tag: "sheer pareo wrap, translucent shimmer, elegant beachwear" },
  { ja:"攻めスペシャル・高級ビーチガウン", en:"Spicy Special Luxury Beach Gown", group:"spicy", label:"SPICY", spicyGroup:"luxury_swim", tag: "beach gown, flowing chiffon, subtle glitter, premium resort" },
  { ja:"攻めスペシャル・高級ハイウエスト水着", en:"Spicy Special High-Waist Luxury Swim", group:"spicy", label:"SPICY", spicyGroup:"luxury_swim", tag: "high-waist bikini, sculpted lines, satin gloss, classy" },
  { ja:"攻めスペシャル・高級水着ボンデージライン", en:"Spicy Special Couture Strapline Swim", group:"spicy", label:"SPICY", spicyGroup:"luxury_swim", tag: "couture swimwear, strapline detailing, tasteful edgy" },
  { ja:"攻めスペシャル・高級スイムキャップ羽チャーム", en:"Spicy Special Swim Cap Feather Charm", group:"spicy", label:"SPICY", spicyGroup:"luxury_swim", tag: "swim cap, feather charm, polished sporty luxury" },
  { ja:"攻めスペシャル・ハイブランドボディコン", en:"Spicy Special High-Brand Bodycon", group:"spicy", label:"SPICY", spicyGroup:"highbrand_mode", tag: "designer bodycon, clean cut, premium fabric, runway vibe" },
  { ja:"攻めスペシャル・ハイブランドシルクブラウス", en:"Spicy Special Designer Silk Blouse", group:"spicy", label:"SPICY", spicyGroup:"highbrand_mode", tag: "silk blouse, subtle sheen, tailored cuffs, luxury" },
  { ja:"攻めスペシャル・ハイブランドペンシルスカート", en:"Spicy Special Designer Pencil Skirt", group:"spicy", label:"SPICY", spicyGroup:"highbrand_mode", tag: "pencil skirt, precise tailoring, high-end minimal" },
  { ja:"攻めスペシャル・ハイブランドトレンチ艶", en:"Spicy Special Designer Gloss Trench", group:"spicy", label:"SPICY", spicyGroup:"highbrand_mode", tag: "gloss trench coat, belt cinch, modern luxury" },
  { ja:"攻めスペシャル・ハイブランドカットアウトドレス", en:"Spicy Special Designer Cutout Dress", group:"spicy", label:"SPICY", spicyGroup:"highbrand_mode", tag: "cutout dress, tasteful geometry, couture minimal" },
  { ja:"攻めスペシャル・ハイブランドレザースカート", en:"Spicy Special Designer Leather Skirt", group:"spicy", label:"SPICY", spicyGroup:"highbrand_mode", tag: "leather skirt, matte-gloss mix, chic" },
  { ja:"攻めスペシャル・ハイブランドジャケットミニ", en:"Spicy Special Designer Jacket Mini", group:"spicy", label:"SPICY", spicyGroup:"highbrand_mode", tag: "cropped jacket, mini dress layering, runway styling" },
  { ja:"攻めスペシャル・ハイブランドストラップヒール", en:"Spicy Special Designer Strap Heels", group:"spicy", label:"SPICY", spicyGroup:"highbrand_mode", tag: "strap heels, metallic accent, high fashion" },
  { ja:"攻めスペシャル・ハイブランドシアートップス", en:"Spicy Special Designer Sheer Top", group:"spicy", label:"SPICY", spicyGroup:"highbrand_mode", tag: "sheer top, fine mesh, luxury layering, elegant" },
  { ja:"攻めスペシャル・ハイブランドグローブバッグ", en:"Spicy Special Designer Glove & Bag", group:"spicy", label:"SPICY", spicyGroup:"highbrand_mode", tag: "long gloves and mini bag, logo-less luxury, refined" },
  { ja:"攻めスペシャル・異世界艶サイバー魔装", en:"Spicy Special Cyber Arcane Glam Armor", group:"spicy", label:"SPICY", spicyGroup:"isekai_glam", tag: "cyber arcane armor, glowing runes, sleek plating, sensual silhouette" },
  { ja:"攻めスペシャル・異世界艶ナノスーツ", en:"Spicy Special Futuristic Nano Suit", group:"spicy", label:"SPICY", spicyGroup:"isekai_glam", tag: "futuristic nano suit, reflective, body-hugging, luminous seams" },
  { ja:"攻めスペシャル・異世界艶魔導スーツ", en:"Spicy Special Arcane Suit", group:"spicy", label:"SPICY", spicyGroup:"isekai_glam", tag: "arcane suit, magic circuits, glossy fabric, mystic tech" },
  { ja:"攻めスペシャル・異世界艶星屑マント", en:"Spicy Special Stardust Cape", group:"spicy", label:"SPICY", spicyGroup:"isekai_glam", tag: "stardust cape, floating particles, dramatic, otherworldly" },
  { ja:"攻めスペシャル・異世界艶ホログラムドレス", en:"Spicy Special Hologram Dress", group:"spicy", label:"SPICY", spicyGroup:"isekai_glam", tag: "hologram dress, shifting iridescence, sci-fi couture" },
  { ja:"攻めスペシャル・異世界艶魔装ボディスーツ", en:"Spicy Special Enchanted Bodysuit", group:"spicy", label:"SPICY", spicyGroup:"isekai_glam", tag: "enchanted bodysuit, rune patterns, sleek armor joints" },
  { ja:"攻めスペシャル・異世界艶ウィングユニット", en:"Spicy Special Wing Unit Harness", group:"spicy", label:"SPICY", spicyGroup:"isekai_glam", tag: "back-mounted wing unit, slim harness, energy feathers" },
  { ja:"攻めスペシャル・異世界艶プラズマコート", en:"Spicy Special Plasma Coat", group:"spicy", label:"SPICY", spicyGroup:"isekai_glam", tag: "plasma-lined coat, glowing edges, futuristic glam" },
  { ja:"攻めスペシャル・異世界艶光剣ホルスター", en:"Spicy Special Lightblade Holster", group:"spicy", label:"SPICY", spicyGroup:"isekai_glam", tag: "lightblade holster accessory, sleek belts, sci-fi fantasy" },
  { ja:"攻めスペシャル・異世界艶魔晶アクセ", en:"Spicy Special Magic Crystal Accessories", group:"spicy", label:"SPICY", spicyGroup:"isekai_glam", tag: "magic crystals, floating shards, elegant sparkle" },
  { ja:"攻めスペシャル・異世界艶戦術ドレスアーマー", en:"Spicy Special Tactical Dress Armor", group:"spicy", label:"SPICY", spicyGroup:"isekai_glam", tag: "dress armor hybrid, armored bodice, flowing skirt panels" },
  { ja:"攻めスペシャル・異世界艶月光ヘルム", en:"Spicy Special Moonlight Helm", group:"spicy", label:"SPICY", spicyGroup:"isekai_glam", tag: "moonlight helm, open-face, elegant, luminous" },
  { ja:"ナイトクラブ艶・ネオン透過ドレス", en:"Nightclub Glam Neon Sheer Dress", tag: "nightclub neon sheer dress, translucent panels, neon edge piping, glow trim, sleek nightlife silhouette", group:"spicy", label:"SPICY", spicyGroup:"nightclub_glam" },
  { ja:"ナイトクラブ艶・メタリックボディスーツ", en:"Nightclub Glam Metallic Bodysuit", tag: "metallic glossy bodysuit, reflective chrome fabric, club lighting shine, sculpted silhouette", group:"spicy", label:"SPICY", spicyGroup:"nightclub_glam" },
  { ja:"ナイトクラブ艶・リキッドラメスリットドレス", en:"Nightclub Glam Liquid Glitter Slit Dress", tag: "liquid glitter dress, wet-look shimmer, high slit, glossy highlights, nightclub vibe", group:"spicy", label:"SPICY", spicyGroup:"nightclub_glam" },
  { ja:"ナイトクラブ艶・レーザーカットジャケット", en:"Nightclub Glam Laser-Cut Jacket", tag: "laser-cut short jacket, geometric cutouts, neon underglow, nightlife styling", group:"spicy", label:"SPICY", spicyGroup:"nightclub_glam" },
  { ja:"ナイトクラブ艶・ネオンハーネスセット", en:"Nightclub Glam Neon Harness Set", tag: "neon harness accessories over sleek outfit, minimal straps, luminous accents, clubwear", group:"spicy", label:"SPICY", spicyGroup:"nightclub_glam" },,
  { ja:"和艶・高級・黒振袖スリット", en:"Waglam Luxury Black Furisode Slit", tag: "black furisode with daring slit, luxurious silk sheen, elegant drape", group:"spicy", label:"SPICY", spicyGroup:"wa_lux_glam" },
  { ja:"和艶・高級・金箔羽織", en:"Waglam Luxury Gold Leaf Haori", tag: "gold leaf haori, gilded patterns, opulent shimmer, refined layering", group:"spicy", label:"SPICY", spicyGroup:"wa_lux_glam" },
  { ja:"和艶・高級・漆塗り質感帯", en:"Waglam Luxury Lacquer Obi Texture", tag: "lacquered obi texture, glossy urushi finish, deep reflective shine", group:"spicy", label:"SPICY", spicyGroup:"wa_lux_glam" },
  { ja:"和艶・高級・金襴刺繍の襟元", en:"Waglam Luxury Kinran Embroidered Collar", tag: "kinran brocade embroidery, gold thread collar, premium detail", group:"spicy", label:"SPICY", spicyGroup:"wa_lux_glam" },
  { ja:"和艶・高級・簪と艶髪", en:"Waglam Luxury Kanzashi & Gloss Hair", tag: "kanzashi hairpin, glossy black hair, elegant shine, high-end finish", group:"spicy", label:"SPICY", spicyGroup:"wa_lux_glam" },

  { ja:"未来ランウェイ艶・ホログラム布コート", en:"Future Runway Glam Hologram Coat", tag: "holographic fabric long coat, shifting iridescence, runway silhouette, premium sheen", group:"spicy", label:"SPICY", spicyGroup:"futuristic_runway_glam" },
  { ja:"未来ランウェイ艶・半透明ハイブランドスーツ", en:"Future Runway Glam Translucent Luxury Suit", tag: "semi-transparent luxury suit, layered sheer panels, high-fashion cut, glossy finish", group:"spicy", label:"SPICY", spicyGroup:"futuristic_runway_glam" },
  { ja:"未来ランウェイ艶・光沢アシンメトリードレス", en:"Future Runway Glam Glossy Asymmetric Dress", tag: "glossy asymmetric dress, sharp couture lines, reflective highlights, runway drama", group:"spicy", label:"SPICY", spicyGroup:"futuristic_runway_glam" },
  { ja:"未来ランウェイ艶・LEDステッチドレス", en:"Future Runway Glam LED Stitch Dress", tag: "LED stitch accents, luminous seams, minimalist couture, futuristic runway styling", group:"spicy", label:"SPICY", spicyGroup:"futuristic_runway_glam" },
  { ja:"未来ランウェイ艶・クリア素材ヒールブーツ", en:"Future Runway Glam Clear Heel Boots", tag: "clear material high-heel boots, transparent gloss, designer runway accessory", group:"spicy", label:"SPICY", spicyGroup:"futuristic_runway_glam" },
  { ja:"冷艶・氷結スリットドレス", en:"Cold Glam Frozen Slit Dress", tag: "ice-themed slit dress, frosted gloss, cold shimmer, crystalline highlights", group:"spicy", label:"SPICY", spicyGroup:"cold_glam" },
  { ja:"冷艶・結晶ビキニ", en:"Cold Glam Crystal Bikini", tag: "crystal bikini, snowflake facets, icy shine, sparkling frost accents", group:"spicy", label:"SPICY", spicyGroup:"cold_glam" },
  { ja:"冷艶・冷光スーツ", en:"Cold Glam Cold-Light Suit", tag: "cold light suit, pale luminous trim, sleek glossy fabric, winter glow", group:"spicy", label:"SPICY", spicyGroup:"cold_glam" },
  { ja:"冷艶・霜羽ケープ", en:"Cold Glam Frost Feather Cape", tag: "frost feather cape, translucent feather layers, icy sheen, winter glamour", group:"spicy", label:"SPICY", spicyGroup:"cold_glam" },
  { ja:"冷艶・氷霧ボディコン", en:"Cold Glam Ice-Mist Bodycon", tag: "bodycon dress with ice-mist gradient, glossy finish, chilled aura, sleek silhouette", group:"spicy", label:"SPICY", spicyGroup:"cold_glam" },
];

  function escapeHTML(str){
    return String(str||"")
      .replace(/&/g,"&amp;")
      .replace(/</g,"&lt;")
      .replace(/>/g,"&gt;")
      .replace(/"/g,"&quot;")
      .replace(/'/g,"&#39;");
  }

  // Card builder (shared by grouped / flat sections)
  function makeCard(s, idPrefix, index){
    const card = document.createElement("label");
    card.className = "shima-card";
    const id = `${idPrefix}_${index}`;
    const badge = (typeof badgeFor === "function") ? badgeFor(s) : { key: "sh", label: "SHIMA" };
    card.innerHTML = `
      <input id="${id}" type="checkbox" data-en="${escapeHTML(s.tag||"")}">
      <div class="shima-title"><span class="shima-feather">🪶</span>${escapeHTML(s.ja)}<span class="shima-badge shima-badge-${badge.key}">${badge.label}</span></div>
      <div class="shima-sub">${escapeHTML(s.en)}</div>
    `;
    return card;
  }

  function isSpicy(s){
  const grp = String(s && s.group || "");
  const sGrp = String(s && s.spicyGroup || "");
  if (grp === "spicy") return true;
  if (s && s.spicyTag) return true;
  // spicyGroup が付いているものは「攻め」確定
  if (sGrp) return true;
  return false;
}

function badgeFor(s){
    const ja = (s.ja||"");
    const tag = (s.tag||"").toLowerCase();
    if (isSpicy(s)) {
      const sg = (s.spicyGroup||"");
      const map = {glam_dress:"GLAM", suit_formal:"SUIT", outer_gloss:"OUTER", leather_goth:"GOTH", mode_bodycon:"MODE"};
      const lbl = map[sg] || "SPICY";
      return {key:"spicy", label:lbl};
    }
    if (ja.includes("制服") || ja.includes("学園") || ja.includes("学生") || ja.includes("図書") || ja.includes("生徒会") || tag.includes("uniform")) return {key:"uniform", label:"SHIMA"};
    if (ja.includes("カジュアル") || ja.includes("ストリート") || ja.includes("ゆめかわ") || ja.includes("カフェ") || tag.includes("casual") || tag.includes("street")) return {key:"casual", label:"SHIMA"};
    if (ja.includes("フォース") || ja.includes("パイロット") || ja.includes("オペレーター") || tag.includes("force") || tag.includes("tactical") || tag.includes("pilot")) return {key:"force", label:"SHIMA"};
    if (ja.includes("レガリア") || ja.includes("聖夜") || ja.includes("プリンセス") || ja.includes("ドレス") || tag.includes("gown") || tag.includes("regalia") || tag.includes("princess")) return {key:"dress", label:"SHIMA"};
    return {key:"shima", label:"SHIMA"};
  }


  function ensureStyles(){
    if (document.getElementById("attire-v21-shima-style")) return;
    const st = document.createElement("style");
    st.id = "attire-v21-shima-style";
    st.textContent = `
      /* v51: make Shima wrapper stretch full width even inside flex containers */
      .attire-v21-mounted{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box;align-self:stretch!important;flex:1 1 auto!important;}
      .attire-v21-parent{align-items:stretch!important;}
      .attire-v21-shima details{border:1px solid #cfe3ef; background:rgba(255,255,255,0.78); border-radius:14px; overflow:hidden;}
      .attire-v21-shima summary{cursor:pointer; list-style:none; padding:10px 12px; font-weight:800; display:flex; align-items:center; gap:8px;
        background:linear-gradient(90deg, rgba(210,240,255,0.90), rgba(255,255,255,0.70)); color:#123;}
      .attire-v21-shima summary .shima-title-jp{flex:1; min-width:0; white-space:normal; word-break:normal; overflow-wrap:anywhere;}
      .attire-v21-shima summary .shima-count{margin-left:auto; white-space:nowrap;}
      .attire-v21-shima summary.spicy{background:linear-gradient(90deg, rgba(255,225,235,0.90), rgba(255,255,255,0.70));}
      .attire-v21-shima summary::-webkit-details-marker{display:none;}
@media (min-width: 740px){ .attire-v21-shima .shima-grid{grid-template-columns:1fr;} }
      @media (min-width: 980px){ .attire-v21-shima .shima-grid{grid-template-columns:repeat(3,minmax(0,1fr));} }
      .attire-v21-shima .shima-card{
        position:relative;
        display:grid;
        grid-template-columns:28px 1fr;
        grid-auto-rows:min-content;
        column-gap:10px;
        row-gap:6px;
        align-items:start;
        padding:12px;
        border:1px solid rgba(0,0,0,0.08);
        border-radius:12px;
        background:rgba(255,255,255,0.92);
        box-shadow:0 1px 2px rgba(0,0,0,0.04);
        overflow:hidden;
      }
      .attire-v21-shima .shima-card > input[type="checkbox"]{
        grid-column:1;
        grid-row:1 / span 2;
        align-self:start;
        justify-self:start;
        margin-top:4px;
        width:22px; height:22px;
      }

      .attire-v21-shima .shima-card:hover{box-shadow:0 4px 14px rgba(0,0,0,0.10);}
      .attire-v21-shima .shima-card input{ /* checkbox is laid out by grid; keep empty to override legacy */ }
      .attire-v21-shima .shima-title{margin-left:0; font-size:0.95em; font-weight:900; color:#122; line-height:1.10;
        white-space:normal; word-break:keep-all; overflow-wrap:anywhere;}
      .attire-v21-shima .shima-sub{margin-left:0; margin-top:4px; font-size:0.78em; color:#345; line-height:1.15;
        white-space:normal; overflow-wrap:anywhere; word-break:break-word;}
      .attire-v21-shima .shima-title{grid-column:2; grid-row:1;}
      .attire-v21-shima .shima-sub{grid-column:2; grid-row:2;}
      .attire-v21-shima .shima-feather{opacity:0.95; margin-right:6px;}
      .attire-v21-shima .shima-badge{display:inline-block; margin-left:8px; padding:2px 8px; border-radius:999px; font-size:0.70em;
        font-weight:900; letter-spacing:0.02em; vertical-align:middle; border:1px solid rgba(0,0,0,0.08); background:rgba(220,240,255,0.85); color:#124;white-space:nowrap;}
      .attire-v21-shima .shima-badge-uniform{background:rgba(225,255,235,0.90); color:#124;}
      .attire-v21-shima .shima-badge-casual{background:rgba(240,235,255,0.90); color:#124;}
      .attire-v21-shima .shima-badge-force{background:rgba(230,245,255,0.90); color:#124;}
      .attire-v21-shima .shima-badge-dress{background:rgba(235,250,255,0.90); color:#124;}
      .attire-v21-shima .shima-badge-spicy{background:rgba(255,230,240,0.92); color:#400;}
    
@media (max-width: 560px){
.attire-v21-shima .shima-title-en{display:none !important;}
}

/* Shima grouped subsections */
.attire-subsection{margin:10px 0;border:1px solid rgba(0,0,0,.08);border-radius:12px;overflow:hidden;background:#fff;}
.attire-subsummary{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;cursor:pointer;user-select:none;font-weight:700;background:rgba(0,0,0,.03);}
.attire-subsummary::-webkit-details-marker{display:none;}
.attire-subtitle{font-size:14px;line-height:1.2;}
.attire-subcount{min-width:2.2em;text-align:center;font-weight:800;padding:2px 8px;border-radius:999px;background:rgba(0,0,0,.06);}

.attire-v21-shima .attire-subsummary{ min-width:0; }
.attire-v21-shima .attire-subtitle{
  flex:1; min-width:0;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
@media (max-width:560px){
  .attire-v21-shima .attire-subtitle{ white-space:normal; overflow:visible; text-overflow:clip; }
}


/* v44 mobile readability: hide EN to avoid vertical wrap; stretch shima cards full width */
.attire-v21-shima .shima-grid{width:100%;justify-items:stretch}
.attire-v21-shima .shima-card{width:100%;max-width:none;justify-self:stretch;box-sizing:border-box}
@media (max-width:520px){
  .attire-v21-shima .shima-sub{display:none !important}
}


/* v53: force Shima root to span full row in parent grids */
.attire-v21-parent > .attire-v21-shima{grid-column:1/-1!important;width:100%!important;max-width:100%!important;justify-self:stretch!important;align-self:stretch!important;}
/* v45: force Shima panels to full width (fix left-aligned/narrow column on mobile) */
.attire-v21-shima .shima-grouped-body{width:100%!important;box-sizing:border-box;padding-left:0;padding-right:0;}
.attire-v21-shima .shima-panels{display:flex!important;flex-direction:column!important;align-items:stretch!important;width:100%!important;box-sizing:border-box;margin:0;}
.attire-v21-shima .shima-panels > details{width:100%!important;display:block!important;}
.attire-v21-shima .shima-grouped{width:100%!important;max-width:100%!important;display:block!important;box-sizing:border-box;grid-column:1/-1;justify-self:stretch;align-self:stretch;flex-basis:100%;}
.attire-v21-shima .shima-grouped > summary{width:100%!important;display:block!important;box-sizing:border-box;}
.attire-v21-shima details{width:100%!important;box-sizing:border-box;}
/* v50: even stronger full-width enforcement (covers nested details + summary) */
.attire-v21-shima details.shima-grouped{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box;}
.attire-v21-shima details.shima-grouped > summary{display:flex!important;width:100%!important;box-sizing:border-box;}
.attire-v21-shima details.shima-grouped .shima-grouped-body{width:100%!important;max-width:100%!important;box-sizing:border-box;}
.attire-v21-shima details.shima-grouped .shima-panels{width:100%!important;max-width:100%!important;box-sizing:border-box;}
.attire-v21-shima details.shima-grouped .shima-panels > details{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box;}
.attire-v21-shima details.shima-grouped .shima-panels > details > summary{width:100%!important;box-sizing:border-box;}

.attire-v21-shima summary{width:100%!important;box-sizing:border-box;}
.attire-v21-shima .shima-grid{display:grid!important;width:100%!important;justify-items:stretch;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;}
@media (max-width:520px){.attire-v21-shima .shima-grid{grid-template-columns:1fr !important;}}
@media (min-width:980px){.attire-v21-shima .shima-grid{grid-template-columns:repeat(3,minmax(0,1fr));}}


      /* v63: FORCE single-column for Shima grouped body + panels */
      .attire-v21-shima .shima-grouped-body{display:block!important;grid-template-columns:1fr!important;grid-auto-flow:row!important;}
      .attire-v21-shima .shima-panels{display:block!important;width:100%!important;max-width:none!important;}

      /* v58: FORCE single-column for Shima panels + kill any fixed-width rows inside accordion content */
      .attire-v21-shima .shima-panels{display:block!important;flex-direction:column!important;align-items:stretch!important;}
      .attire-v21-shima .shima-panels>*{width:100%!important;max-width:none!important;flex:0 0 auto!important;}
      .attire-v21-shima details.accordion-wrap,
      .attire-v21-shima details.accordion-wrap > .section-content,
      .attire-v21-shima details.accordion-wrap .section-content,
      .attire-v21-shima details.accordion-wrap .box,
      .attire-v21-shima details.accordion-wrap .box > *,
      .attire-v21-shima details.accordion-wrap .items,
      .attire-v21-shima details.accordion-wrap .item,
      .attire-v21-shima details.accordion-wrap .opt,
      .attire-v21-shima details.accordion-wrap .opt-row,
      .attire-v21-shima details.accordion-wrap label{
        width:100%!important;
        max-width:none!important;
        box-sizing:border-box!important;
      }
      .attire-v21-shima details.accordion-wrap .opt-row,
      .attire-v21-shima details.accordion-wrap .item{
        display:flex!important;
      }
      .attire-v21-shima details.accordion-wrap .opt-row>*,
      .attire-v21-shima details.accordion-wrap .item>*{
        min-width:0!important;
      }

      /* If there is a second empty panel, collapse it */
      .attire-v21-shima .shima-panels > :nth-child(2):empty{display:none!important;}
      .attire-v21-shima .shima-panels > :nth-child(2):not(:empty){width:100%!important;max-width:none!important;}

`;
    document.head.appendChild(st);
    // Also inject into shadow roots (mobile/encapsulated UI)
    try{
      document.querySelectorAll('.attire-v21-shima').forEach((host)=>{
        if(host && host.shadowRoot){
          if(!host.shadowRoot.querySelector('#attire-v21-shima-style')){
            const clone = st.cloneNode(true);
            host.shadowRoot.appendChild(clone);
          }
        }
      });
    }catch(e){}

  }

  
  // Hood state UI (worn/down/auto)
  let __shimaHoodMode = "down"; // default
  const __HOOD_WORN = "hood worn over head, bird-like hood clearly visible";
  const __HOOD_DOWN = "hood resting on back, not worn, back-attached hood visible";

const API = {
    initUI(parent){
      // Robust mount: some core call sites may invoke initUI with no args.
      if(!parent){
        parent = document.getElementById("section-attire") || document.getElementById("list-attire") || document.body;
      }
      ensureStyles();
      const listRoot = (document.getElementById("list-attire") || parent);
      const details = (listRoot && listRoot.querySelector) ? listRoot.querySelector("details.accordion-wrap") : null;
      const accordionBody = details ? (details.querySelector(".accordion-body") || details.querySelector(".accordion-content") || details) : null;
      const contentArea = accordionBody || ((parent && parent.querySelector) ? (parent.querySelector(".section-content") || parent) : (document.getElementById("list-attire") || document.body));
      try{ if(contentArea && contentArea.classList) contentArea.classList.add('attire-v21-parent'); }catch(e){}

      // avoid double mount
      if (contentArea.querySelector(".attire-v21-shima")) return;

      const wrap = document.createElement("div");
      wrap.className = "attire-v21-shima";

      // Hood state selector
      const hoodBox = document.createElement("div");
      hoodBox.className = "shima-hood-state";
      hoodBox.style.cssText = "display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin:10px 0 14px 0;padding:10px 12px;border:1px solid rgba(0,0,0,.12);border-radius:10px;background:rgba(255,255,255,.6);";
      const hoodTitle = document.createElement("div");
      hoodTitle.textContent = "🧥 フード状態";
      hoodTitle.style.cssText = "font-weight:800;margin-right:8px;";
      hoodBox.appendChild(hoodTitle);

      const makeRadio = (label, value) => {
        const lab = document.createElement("label");
        lab.style.cssText = "display:flex;gap:6px;align-items:center;cursor:pointer;user-select:none;";
        const r = document.createElement("input");
        r.type = "radio";
        r.name = "shima-hood-mode";
        r.value = value;
        r.checked = (__shimaHoodMode === value);
        r.addEventListener("change", () => { __shimaHoodMode = value; });
        const t = document.createElement("span");
        t.textContent = label;
        lab.appendChild(r);
        lab.appendChild(t);
        return lab;
      };

      hoodBox.appendChild(makeRadio("被る", "worn"));
      hoodBox.appendChild(makeRadio("下ろす（デフォルト）", "down"));
      hoodBox.appendChild(makeRadio("自動（記述しない）", "auto"));
      wrap.appendChild(hoodBox);

  // v53: make Shima root span full width even inside grid/flex parents
  try{wrap.style.cssText += ";width:100%!important;max-width:100%!important;box-sizing:border-box;grid-column:1/-1!important;justify-self:stretch!important;align-self:stretch!important;flex:1 1 100%!important;";}catch(e){}

      wrap.classList.add("attire-v21-mounted");
      // v51: force wrapper to full width even if parent aligns flex-start
      wrap.style.display='block';
      wrap.style.width='100%';
      wrap.style.maxWidth='100%';
      wrap.style.boxSizing='border-box';
      wrap.style.alignSelf='stretch';
      wrap.style.flex='1 1 auto';

      const isSpicy = (s)=>{
        const grp = String(s?.group || "");
        const sGrp = String(s?.spicyGroup || "");
        const ja = String(s?.ja||"");
        const en = String(s?.en||"");
        const tagRaw = String(s?.tag||"");
        const tag = tagRaw.toLowerCase();
        // Hard routing: explicit group/spicyGroup/tag forces "Spicy Special"
        if (grp === "spicy") return true;
        // Explicit non-spicy group blocks legacy heuristic routing
        if (grp && grp !== "spicy") return false;
        if (tag.includes("spicy") || tagRaw.toUpperCase() === "SPICY") return true;
        if (["nightclub_glam","wa_lux_glam","futuristic_runway_glam","cold_glam"].includes(sGrp)) return true;
        // Heuristic routing (legacy)
        return ja.includes("攻め") || ja.includes("グラビア") || en.toLowerCase().includes("bold") || en.toLowerCase().includes("gravure") || tag.includes("gravure") || tag.includes("lingerie") || tag.includes("bikini") || tag.includes("swimsuit") || tag.includes("night club");
      };

      const spicySets = SETS.filter(isSpicy);
      const shimaSets = SETS.filter(s=>!isSpicy(s));

      
function splitTitle(title){
  const s = String(title||"").trim();
  const m = s.match(/^(.*?)\s*\((.*?)\)\s*$/);
  if(!m) return {jp:s, en:""};
  return {jp:(m[1]||"").trim(), en:(m[2]||"").trim()};
}

function buildSection(opts){
        const details = document.createElement("details");
        details.open = !!opts.open;
  // v50: force full-width for each nested <details> accordion section
  details.style.display = "block";
  details.style.width = "100%";
  details.style.maxWidth = "100%";
  details.style.boxSizing = "border-box";


        // ▼ v47: force details to full width on mobile (prevents shrink-to-content)
        details.style.cssText = "display: block !important; width: 100% !important; margin-bottom: 8px;";

        const summary = document.createElement("summary");
        summary.className = opts.summaryClass || "";
        const t = splitTitle(opts.title);
        summary.innerHTML = `<span class="shima-feather">${opts.icon}</span> ` +
          `<span class="shima-title-jp">${escapeHTML(t.jp)}</span>` +
          ((!opts.hideEn && t.en) ? ` <span class="shima-title-en">(${escapeHTML(t.en)})</span>` : ``) +
          ` <span style="margin-left:auto; font-weight:800; color:#234; font-size:0.92em;">${opts.count}</span>`;
        details.appendChild(summary);

        const grid = document.createElement("div");
        grid.className = "shima-grid";

        opts.items.forEach((s, i) => {
          const card = document.createElement("label");
          card.className = "shima-card";
          const id = `${opts.idPrefix}_${i}`;
          const badge = badgeFor(s);

          card.innerHTML = `
            <input id="${id}" type="checkbox" data-en="${escapeHTML(s.tag||"")}">
            <div class="shima-title"><span class="shima-feather">🪶</span>${escapeHTML(s.ja)}<span class="shima-badge shima-badge-${badge.key}">${badge.label}</span></div>
            <div class="shima-sub">${escapeHTML(s.en)}</div>
          `;
          grid.appendChild(card);
        });

        details.appendChild(grid);
        return details;
      }

      // Build dynamic groups (auto-categorize all non-spicy Shima sets so UI count matches)
            const SHIMA_GROUP_BY_JA = {
        "シマエナガ・ゆめかわパーカー":"casual",
        "シマエナガ・アーバン羽根フーディ":"casual",
        "シマエナガ・カジュアル雪街":"casual",
        "シマエナガ・カフェ店員カジュアル":"casual",
        "シマエナガ・スポーツジャージ":"casual",
        "シマエナガ・ヘヴィフェザー":"casual",
        "シマエナガ・ライトフェザー":"casual",
        "シマエナガ・レインコート":"casual",
        "シマエナガ・春のライトジャケット":"casual",
        "シマエナガ・部屋着もふもふ":"casual",
        "シマエナガ・セーラー服氷彩":"school",
        "シマエナガ・体育着ブルマ風":"school",
        "シマエナガ・冬制服コート":"school",
        "シマエナガ・図書委員":"school",
        "シマエナガ・学園アイドル制服":"school",
        "シマエナガ・学園制服ブレザー":"school",
        "シマエナガ・生徒会正装":"school",
        "シマエナガフォース・オペレータースーツ":"force",
        "シマエナガフォース・スナイパーギリー":"force",
        "シマエナガフォース・セレモニードレスユニフォーム":"force",
        "シマエナガフォース・フロストパイロット":"force",
        "シマエナガフォース・メカニック":"force",
        "シマエナガフォース・医療班":"force",
        "シマエナガフォース・艦橋クルー":"force",
        "シマエナガ・バトルトリム":"force",
        "シマエナガ・フライトギア":"force",
        "シマエナガ・原初フォーム":"force",
        "シマエナガ・天使翼フォーム":"force",
        "シマエナガ・白炎フェニックス":"force",
        "シマエナガ・竜羽融合":"force",
        "シマエナガ・結晶進化":"force",
        "シマエナガ・聖騎士羽装甲":"force",
        "シマエナガ・アーコン礼装":"dress",
        "シマエナガ・ゴスロリ雪影":"dress",
        "シマエナガ・ストリートゆめかわ":"dress",
        "シマエナガ・ホワイトバレエ":"dress",
        "シマエナガ・光の聖堂ドレス":"dress",
        "シマエナガ・天冠":"dress",
        "シマエナガ・星海ローブ":"dress",
        "シマエナガ・星空の歌姫":"dress",
        "シマエナガ・氷晶プリンセス":"dress",
        "シマエナガ・永劫エーテル":"dress",
        "シマエナガ・浮遊アークヘイロー":"dress",
        "シマエナガ・無限白翼":"dress",
        "シマエナガ・神光プライム":"dress",
        "シマエナガ・神権プルーム":"dress",
        "シマエナガ・終光アバター":"dress",
        "シマエナガ・羽衣レガリア":"dress",
        "シマエナガ・聖夜のドレス":"dress",
        "シマエナガ・聖歌隊ローブ":"dress",
        "シマエナガ・至高戴冠":"dress",
        "シマエナガ・超越レガリア":"dress",
        "シマエナガ・雪皇后神話":"dress",
        "シマエナガ・黎明ローブ":"dress",
        "シマエナガ・黎明女帝":"dress",
        "シマエナガ・巫女融合":"east",
        "シマエナガ・祭り羽織":"east",
        "チャイナ・純白羽紋":"east",
        "チャイナ・黒銀雪影":"east",
        "中華・龍鳳羽冠":"east",
        "和洋折衷・羽織ドレス":"east",
        "東方・巫女装束雪祈":"east",
        "シマエナガ・サファイア羽根":"role",
        "シマエナガ・ホロフェザー":"role",
        "シマエナガ・ロイヤル白羽根":"role",
        "シマエナガ・夜咲きプルーム":"role",
        "シマエナガ・天体羽衣":"role",
        "シマエナガ・星図の書記":"role",
        "シマエナガ・星雲シマー":"role",
        "シマエナガ・白宇宙の化身":"role",
        "シマエナガ・聖断マント":"role",
        "シマエナガ・風霊マント":"role",
        "シマ天使・白羽の礼装":"role",
        "シマ巫女・雪神楽":"role",
        "シマ忍者・雪迷彩":"role",
        "シマ悪魔・黒羽の誘惑":"role",
        "シマ海賊・羽根帽子":"role",
        "シマ騎士・白羽の鎧":"role",
        "シマ魔導士・氷紋ローブ":"role",
        "シマエナガ・オーロラ玉座":"season",
        "シマエナガ・クリスマスサンタ":"season",
        "シマエナガ・ハロウィン梟魔女":"season",
        "シマエナガ・フロストウィング極":"season",
        "シマエナガ・新年晴れ着":"season",
        "シマエナガ・月護り":"season",
        "シマエナガ・極寒女王":"season",
        "シマエナガ・浴衣夏氷":"season",
        "シマエナガ・着物冬白":"season",
        "シマエナガ・節分鬼かわ":"season",
        "シマエナガ・花嫁純白":"season",
        "チャイナ・シマエナガステッカー密着":"sticker",
        "シマエナガ・ゆめかわステッカー密着":"sticker",
        "シマエナガ・ゴスロリステッカー密着":"sticker",
        "シマエナガ・カジュアルステッカー密着":"sticker",
        "シマエナガ・ドレスステッカー密着":"sticker",
        "シマエナガ・冬服ステッカー密着":"sticker",
        "シマエナガ・和装ステッカー密着":"sticker",
        "シマエナガ・制服ステッカー密着":"sticker",
        "シマエナガ・アイドルステッカー密着":"sticker",
        "シマエナガ・ストリートステッカー密着":"sticker",
        "シマエナガ・ルームウェアステッカー密着":"sticker",
        "シマエナガ・フェミニンステッカー密着":"sticker",
        "シマエナガ・水着ステッカー密着":"sticker",
        "シマエナガ・バニーステッカー密着":"sticker",
        "シマエナガ・メイドステッカー密着":"sticker",
        "シマエナガ・天使ステッカー密着":"sticker",
        "シマエナガ・悪魔ステッカー密着":"sticker",
        "シマエナガ・サイバーステッカー密着":"sticker",
        "シマエナガ・和ロリステッカー密着":"sticker",
        "シマエナガ・中華ロリステッカー密着":"sticker",
        "シマエナガ・春色カーデステッカー密着":"sticker",
        "シマエナガ・ニットワンピステッカー密着":"sticker",
        "シマエナガ・デニムカジュアルステッカー密着":"sticker",
        "シマエナガ・クラロリステッカー密着":"sticker",
        "シマエナガ・セレモニーステッカー密着":"sticker",
        "シマエナガ・ライブステージステッカー密着":"sticker",
        "シマエナガ・浴衣ステッカー密着":"sticker",
        "シマエナガ・和モダンステッカー密着":"sticker",
        "シマエナガ・漢服ステッカー密着":"sticker",
        "シマエナガ・テックウェアステッカー密着":"sticker",
        "シマエナガ・近未来パーカーステッカー密着":"sticker",
        "シマエナガ・ネオンストリートステッカー密着":"sticker",
        "シマエナガ・ゴシックシスターステッカー密着":"sticker",
        "シマエナガ・パラディンステッカー密着":"sticker",
        "シマエナガ・ダークメイドステッカー密着":"sticker",
        "シマエナガ・フリルビキニステッカー密着":"sticker",
        "シマエナガ・ワンピース水着ステッカー密着":"sticker",
        "シマエナガ・リゾート水着ステッカー密着":"sticker",
        "シマエナガ・雪花タイプ":"season"
      };

      function detectShimaGroup(s){
        return (s && s.group) || SHIMA_GROUP_BY_JA[s.ja] || "role";
      }


      let GROUPS = [
        { key: "casual", title: "日常・カジュアル", icon: "🧣", items: [] },
        { key: "school", title: "学園・制服", icon: "🎓", items: [] },
        { key: "force", title: "フォース・戦術", icon: "🛡️", items: [] },
        { key: "dress", title: "ドレス・礼装", icon: "👗", items: [] },
        { key: "east", title: "東方・中華", icon: "🐉", items: [] },
        { key: "sticker", title: "ステッカー密着コレクション", icon: "🏷️", items: [] },
        { key: "gravure", title: "グラビア・撮影", icon: "📸", items: [] },
        { key: "role", title: "異世界・ロール", icon: "✨", items: [] },
        { key: "season", title: "季節・イベント", icon: "🎐", items: [] },
      ];

      const groupMap = Object.create(null);
      GROUPS.forEach(g => { groupMap[g.key] = g; });

      // Distribute ALL sets (except spicy ones) into groups
      SETS.forEach(s => {
        if (isSpicy(s)
            || String(s?.label ?? '').toUpperCase().includes('SPICY')
            || String(s?.group ?? '').toLowerCase().startsWith('spicy')
            || /^(ナイトクラブ艶|和艶・高級|未来ランウェイ艶|冷艶)/.test(String(s?.ja ?? ''))
          ) return;
        const k = detectShimaGroup(s);
        (groupMap[k] || groupMap.casual).items.push(s);
      });

      // Remove empty groups (keeps UI compact)
      GROUPS = GROUPS.filter(g => g.items && g.items.length);


      const STICKER_SUBGROUP_BY_JA = {
        "チャイナ・シマエナガステッカー密着":"east_lolita",
        "シマエナガ・和装ステッカー密着":"east_lolita",
        "シマエナガ・和ロリステッカー密着":"east_lolita",
        "シマエナガ・中華ロリステッカー密着":"east_lolita",
        "シマエナガ・浴衣ステッカー密着":"east_lolita",
        "シマエナガ・和モダンステッカー密着":"east_lolita",
        "シマエナガ・漢服ステッカー密着":"east_lolita",
        "シマエナガ・ゆめかわステッカー密着":"daily",
        "シマエナガ・カジュアルステッカー密着":"daily",
        "シマエナガ・冬服ステッカー密着":"daily",
        "シマエナガ・ルームウェアステッカー密着":"daily",
        "シマエナガ・フェミニンステッカー密着":"daily",
        "シマエナガ・春色カーデステッカー密着":"daily",
        "シマエナガ・ニットワンピステッカー密着":"daily",
        "シマエナガ・デニムカジュアルステッカー密着":"daily",
        "シマエナガ・ゴスロリステッカー密着":"dress_stage",
        "シマエナガ・ドレスステッカー密着":"dress_stage",
        "シマエナガ・制服ステッカー密着":"dress_stage",
        "シマエナガ・アイドルステッカー密着":"dress_stage",
        "シマエナガ・クラロリステッカー密着":"dress_stage",
        "シマエナガ・セレモニーステッカー密着":"dress_stage",
        "シマエナガ・ライブステージステッカー密着":"dress_stage",
        "シマエナガ・水着ステッカー密着":"swimwear",
        "シマエナガ・フリルビキニステッカー密着":"swimwear",
        "シマエナガ・ワンピース水着ステッカー密着":"swimwear",
        "シマエナガ・リゾート水着ステッカー密着":"swimwear",
        "シマエナガ・競泳ステッカー密着":"swimwear",
        "シマエナガ・スポーティビキニステッカー密着":"swimwear",
        "シマエナガ・ラッシュガードステッカー密着":"swimwear",
        "シマエナガ・競泳ハイレグステッカー密着":"swimwear",
        "シマエナガ・セーラー水着ステッカー密着":"swimwear",
        "シマエナガ・南国パレオステッカー密着":"swimwear",
        "シマエナガ・バニーステッカー密着":"bunny",
        "シマエナガ・クラシックバニーステッカー密着":"bunny",
        "シマエナガ・逆バニーステッカー密着":"bunny",
        "シマエナガ・フリルバニーステッカー密着":"bunny",
        "シマエナガ・サイバーバニーステッカー密着":"bunny",
        "シマエナガ・リボンバニーステッカー密着":"bunny",
        "シマエナガ・アイドルバニーステッカー密着":"bunny",
        "シマエナガ・ゴシックバニーステッカー密着":"bunny",
        "シマエナガ・ロイヤルバニーステッカー密着":"bunny",
        "シマエナガ・和バニーステッカー密着":"bunny",
        "シマエナガ・中華バニーステッカー密着":"bunny",
        "シマエナガ・メイドバニーステッカー密着":"bunny",
        "シマエナガ・メイドステッカー密着":"fantasy_role",
        "シマエナガ・天使ステッカー密着":"fantasy_role",
        "シマエナガ・悪魔ステッカー密着":"fantasy_role",
        "シマエナガ・ゴシックシスターステッカー密着":"fantasy_role",
        "シマエナガ・パラディンステッカー密着":"fantasy_role",
        "シマエナガ・ダークメイドステッカー密着":"fantasy_role",
        "シマエナガ・ストリートステッカー密着":"urban_future",
        "シマエナガ・サイバーステッカー密着":"urban_future",
        "シマエナガ・テックウェアステッカー密着":"urban_future",
        "シマエナガ・近未来パーカーステッカー密着":"urban_future",
        "シマエナガ・ネオンストリートステッカー密着":"urban_future"
      };

      const STICKER_SUBGROUPS_DEF = [
        { key:"daily", icon:"🫧", ja:"日常・やわらか系" },
        { key:"dress_stage", icon:"🎀", ja:"ドレス・学園・舞台" },
        { key:"east_lolita", icon:"🎎", ja:"和装・中華・ロリィタ" },
        { key:"urban_future", icon:"🌃", ja:"ストリート・サイバー" },
        { key:"fantasy_role", icon:"🪽", ja:"メイド・天使・悪魔" },
        { key:"swimwear", icon:"🏖️", ja:"水着" },
        { key:"bunny", icon:"🐇", ja:"バニー" }
      ];

      function detectStickerSubgroup(s){
        if (!s) return "daily";
        return STICKER_SUBGROUP_BY_JA[s.ja] || "daily";
      }

      function buildStickerGroupedSection(opts){
        const groups = STICKER_SUBGROUPS_DEF.map(g => ({...g, items: []}));
        const idx = Object.fromEntries(groups.map(g => [g.key, g]));
        (opts.items || []).forEach(s => {
          const k = detectStickerSubgroup(s);
          (idx[k] || idx.daily).items.push(s);
        });
        const liveGroups = groups.filter(g => g.items && g.items.length);

        const wrap = document.createElement("details");
        wrap.className = "subgroup-details sticker-group-wrap";
        wrap.open = false;

        const sum = document.createElement("summary");
        sum.className = "shima-accordion";
        sum.innerHTML = `<span class="summary-left"><span class="icon">${opts.icon || "🏷️"}</span><span class="title">${opts.title || "ステッカー密着コレクション"}</span></span><span class="summary-right"><span class="count">${opts.count || 0}</span></span>`;

        const panelsWrap = document.createElement("div");
        panelsWrap.className = "group-panels sticker-sub-panels";
        panelsWrap.style.display = "flex";
        panelsWrap.style.flexDirection = "column";
        panelsWrap.style.gap = "10px";
        panelsWrap.style.width = "100%";

        liveGroups.forEach(g => {
          const sec = buildSection({
            title: g.ja,
            icon: g.icon,
            items: g.items,
            count: g.items.length,
            summaryClass: "shima-accordion",
            detailsClass: "subgroup-details",
            idPrefix: `${opts.idPrefix || "attire_v21_shima"}_sticker`,
            hideEn: true
          });
          panelsWrap.appendChild(sec);
        });

        wrap.appendChild(sum);
        wrap.appendChild(panelsWrap);
        return wrap;
      }

        // ===== 🌶️ Spicy Special: explicit labeling & grouping (NO auto classification) =====
  const SPICY_GROUP_BY_JA = {
  "攻めスペシャル・サテン深スリット":"glam_dress",
  "攻めスペシャル・ベルベット夜会":"glam_dress",
  "攻めスペシャル・クリスタル縁ビスチェ":"glam_dress",
  "攻めスペシャル・シルクホルター艶":"glam_dress",
  "攻めスペシャル・レースマーメイド":"glam_dress",
  "攻めスペシャル・片肩グラム":"mode_bodycon",
  "攻めスペシャル・オペラグローブ礼装":"glam_dress",
  "攻めスペシャル・背中リボン背面魅せ":"glam_dress",
  "攻めスペシャル・真珠チェーン背中飾り":"glam_dress",
  "攻めスペシャル・透けレイヤー正装":"glam_dress",
  "攻めスペシャル・ネオン艶ボディコン":"mode_bodycon",
  "攻めスペシャル・ルーフトップ風スリット":"glam_dress",
  "攻めスペシャル・反射素材シティナイト":"mode_bodycon",
  "攻めスペシャル・月光シースルーカーデ":"outer_gloss",
  "攻めスペシャル・スポットライト礼装スーツ":"suit_formal",
  "攻めスペシャル・ホログラムミニドレス":"glam_dress",
  "攻めスペシャル・夜景ベルベットジャケット":"suit_formal",
  "攻めスペシャル・プリズムクラブドレス":"glam_dress",
  "攻めスペシャル・シルエットロングコート艶":"outer_gloss",
  "攻めスペシャル・ゴシックレース深V":"leather_goth",
  "攻めスペシャル・ブラックサテンコルセット":"leather_goth",
  "攻めスペシャル・黒薔薇シマー":"leather_goth",
  "攻めスペシャル・紅差しダークグラム":"leather_goth",
  "攻めスペシャル・構築モード輪郭セット":"mode_bodycon",
  "攻めスペシャル・彫刻肩モードトップ":"mode_bodycon",
  "攻めスペシャル・ハイウエスト光沢パンツ":"mode_bodycon",
  "攻めスペシャル・ミニマルシルクスーツ":"suit_formal",
  "攻めスペシャル・スリットコートドレス":"outer_gloss"
};
  const SPICY_GROUPS_DEF = [
    { key:"glam_dress", icon:"💎", ja:"グラム・ドレス", en:"Glam Dresses" },
    { key:"suit_formal", icon:"🕴️", ja:"スーツ・礼装", en:"Suits & Formal" },
    { key:"outer_gloss", icon:"🧥", ja:"アウター艶", en:"Glossy Outerwear" },
    { key:"leather_goth", icon:"🖤", ja:"レザー・ゴシック", en:"Leather & Gothic" },
    { key:"mode_bodycon", icon:"✨", ja:"モード・ボディコン", en:"Mode & Bodycon" },
    { key:"dark_glam", icon:"🌑", ja:"ダーク艶", en:"Dark Glam" },
    { key:"luxury_swim", icon:"🩱", ja:"高級水着艶", en:"Luxury Swim Glam" },
    { key:"highbrand_mode", icon:"👜", ja:"ハイブランド艶", en:"High-Brand Mode" },
    { key:"nightclub_glam", icon:"🌃", ja:"ナイトクラブ艶", en:"Nightclub Glam" },
    { key:"wa_lux_glam", icon:"🎴", ja:"和艶・高級", en:"Luxury Wa Glam" },
    { key:"futuristic_runway_glam", icon:"🪩", ja:"未来ランウェイ艶", en:"Future Runway Glam" },
    { key:"cold_glam", icon:"❄️", ja:"冷艶", en:"Ice & Snow Glam" },

    { key:"isekai_glam", icon:"🛸", ja:"異世界艶", en:"Isekai Glam" },
  ];

  function detectSpicyGroup(s) {
    if (!s) return "glam_dress";
    if (s.spicyGroup) return s.spicyGroup;
    return SPICY_GROUP_BY_JA[s.ja] || "glam_dress";
  }
// Prebuild spicy groups from spicySets (strict mapping; missing => glam_dress)
let SPICY_GROUPS = SPICY_GROUPS_DEF.map(g => ({...g, items: []}));
const SPICY_GROUP_INDEX = Object.fromEntries(SPICY_GROUPS.map(g => [g.key, g]));
spicySets.forEach(s => {
  const k = detectSpicyGroup(s);
  (SPICY_GROUP_INDEX[k] || SPICY_GROUP_INDEX.glam_dress).items.push(s);
});
SPICY_GROUPS = SPICY_GROUPS.filter(g => g.items.length > 0);
  function buildSpicyGroupedSection(opts) {
    const {
      title,
      icon,
      count,
      summaryClass="section-summary spicy-special",
      detailsClass="section-details spicy-special-details",
      groups,
    } = opts || {};

    const wrap = document.createElement("details");
    wrap.className = detailsClass;
    wrap.open = false;

    const sum = document.createElement("summary");
    sum.className = summaryClass;
    sum.innerHTML = `<span class="summary-left"><span class="icon">${icon || ""}</span><span class="title">${title || ""}</span></span>` +
      `<span class="summary-right"><span class="count">${count || 0}</span></span>`;

    const panelsWrap = document.createElement("div");
    panelsWrap.className = "group-panels";
    // Force single-column layout (override any grid styles)
    panelsWrap.style.display = "flex";
    panelsWrap.style.flexDirection = "column";
    panelsWrap.style.gap = "10px";
    panelsWrap.style.width = "100%";

    (groups || []).forEach(g => {
      const sec = buildSection({
        title: g.ja,
        icon: g.icon,
        items: g.items,
        count: g.items.length,
        summaryClass: "shima-accordion",
        detailsClass: "subgroup-details",
        idPrefix: `spicy_`,
        hideEn: true,
      });
      panelsWrap.appendChild(sec);
    });

    wrap.appendChild(sum);
    wrap.appendChild(panelsWrap);
    return wrap;
  }

// Grouped variant for Shima-enaga Collection (nested subsections)
      function buildShimaGroupedSection(opts){
  const wrap = document.createElement("details");
  wrap.className = "shima-grouped";
	  // NOTE: diagnostic outline removed (was causing a visible magenta frame around the section)
wrap.open = false;
  // v54: force this grouped block to span full row in grid/flex layouts (fix narrow left column)
  try{
    wrap.style.width = "100%";
    wrap.style.maxWidth = "100%";
    wrap.style.display = "block";
    wrap.style.boxSizing = "border-box";
    wrap.style.gridColumn = "1 / -1";
    wrap.style.justifySelf = "stretch";
    wrap.style.alignSelf = "stretch";
    wrap.style.flexBasis = "100%";
  }catch(e){}

  const title = document.createElement("summary");
  title.className = "shima-grouped-title";
  title.innerHTML = `${opts.icon||""} ${opts.title||"シマエナガ・コレクション"} <span class="shima-count">${opts.count||""}</span>`;

  const body = document.createElement("div");
  body.className = "shima-grouped-body";

  const panelsWrap = document.createElement("div");
  panelsWrap.className = "shima-panels";

  GROUPS.forEach(g=>{
    const panel = (g.key === "sticker")
      ? buildStickerGroupedSection({
          title: g.title,
          icon: g.icon,
          items: g.items,
          count: (g.items ? g.items.length : 0),
          idPrefix: opts.idPrefix
        })
      : buildSection({
          title: g.title,
          icon: g.icon,
          items: g.items,
          count: (g.items?g.items.length:0),
          idPrefix: opts.idPrefix,
          badge: g.badge,
          summaryClass: "shima-accordion",
          hideEn: true
        });
    panelsWrap.appendChild(panel);
  });

  body.appendChild(panelsWrap);

  
// v56 DIAG: overlay panel to print actual computed widths/styles (mobile debug)
// Release build: disabled by default. Enable only with URL parameter ?diag=1
try{
  const __shDiag = (typeof location !== 'undefined') && /(?:\?|&)diag=1(?:&|$)/.test(location.search);
  if(__shDiag && !window.__SHIMA_ATTIRE_DIAG_PANEL__){
    window.__SHIMA_ATTIRE_DIAG_PANEL__ = true;
    const panel = document.createElement('div');
    panel.id = 'shima-attire-diag';
    panel.style.cssText = [
      'position:fixed','left:8px','top:8px','z-index:2147483647',
      'background:rgba(0,0,0,0.72)','color:#fff','padding:8px 10px',
      'border-radius:10px','font:12px/1.25 monospace','max-width:92vw',
      'white-space:pre','pointer-events:auto'
    ].join(';');
    panel.addEventListener('click', ()=>{ panel.style.opacity = (panel.style.opacity==='0.15'?'1':'0.15'); });
    document.body.appendChild(panel);

    const fmt = (el,label)=>{
      if(!el) return label+': (null)';
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      const w = Math.round(r.width);
      const ml = cs.marginLeft, mr = cs.marginRight;
      const disp = cs.display;
      const pos = cs.position;
      const mw = cs.maxWidth;
      const fw = cs.flexWrap;
      const ai = cs.alignItems;
      const jc = cs.justifyContent;
      const col = cs.gridTemplateColumns;
      return `${label}: w=${w}px, display=${disp}, pos=${pos}, maxW=${mw}, mL=${ml}, mR=${mr}, flexWrap=${fw}, alignItems=${ai}, justify=${jc}, gridCols=${col}`;
    };

    const update = ()=>{
      const host = document.querySelector('.attire-v21-shima') || document.querySelector('[data-section="attire"]') || document.body;
      const lines = [];
      lines.push('SHIMA ATTIRE DIAG (tap to fade)');
      lines.push(`viewport: ${window.innerWidth}x${window.innerHeight}, dpr=${window.devicePixelRatio}`);
      lines.push(fmt(host,'.attire-v21-shima(host)'));
      lines.push(fmt(host.querySelector('.shima-grouped-body'),'.shima-grouped-body'));
      lines.push(fmt(host.querySelector('.shima-panels'),'.shima-panels'));
      lines.push(fmt(host.querySelector('.shima-panels > details'),'.shima-panels>details(first)'));
      lines.push(fmt(host.querySelector('.shima-panels > details > summary'),'.details>summary(first)'));
      lines.push(fmt(host.querySelector('.shima-grouped-span'),'.shima-grouped-span'));
      lines.push(fmt(host.querySelector('.shima-grouped-row'),'.shima-grouped-row'));
// ancestor chain: find who is constraining width
function nodeLabel(el){
  if(!el) return '(null)';
  var cls = (el.className && typeof el.className==='string') ? el.className.trim() : '';
  cls = cls ? ('.'+cls.split(/\s+/).slice(0,4).join('.')) : '';
  return el.tagName.toLowerCase()+cls;
}
function styleSummary(el){
  if(!el) return '(null)';
  var cs = getComputedStyle(el);
  var r = el.getBoundingClientRect();
  return 'w=' + Math.round(r.width) + 'px'
    + ', maxW=' + cs.maxWidth
    + ', minW=' + cs.minWidth
    + ', disp=' + cs.display
    + ', pos=' + cs.position
    + ', flex=' + cs.flex
    + ', flexDir=' + cs.flexDirection
    + ', align=' + cs.alignItems
    + ', justify=' + cs.justifyContent
    + ', box=' + cs.boxSizing
    + ', padLR=' + cs.paddingLeft + '/' + cs.paddingRight
    + ', marLR=' + cs.marginLeft + '/' + cs.marginRight;
}
lines.push('--- ancestors (host -> up) ---');
var cur = host;
for(var i=0;i<14 && cur;i++){
  lines.push(i + ': ' + nodeLabel(cur) + ' | ' + styleSummary(cur));
  cur = cur.parentElement;
}
      panel.textContent = lines.join('\n');
    };

    update();
    window.addEventListener('resize', ()=>requestAnimationFrame(update));
    document.addEventListener('toggle', ()=>requestAnimationFrame(update), true);
    document.addEventListener('click', ()=>setTimeout(update,0), true);
  }else{
    // already exists, refresh once
    const p=document.getElementById('shima-attire-diag');
    if(p) p.style.display='block';
  }
}catch(e){}

wrap.appendChild(title);
  wrap.appendChild(body);
  return wrap;
}
      wrap.appendChild(buildShimaGroupedSection({
        idPrefix: "attire_v21_shima",
        icon: "🐦",
        title: "シマエナガ・コレクション (Shima-enaga Collection)",
        count: shimaSets.length,
        items: shimaSets,
        open: false
      }));

      if (spicySets.length){
    wrap.appendChild(buildSpicyGroupedSection({
      title: "🌶️ 攻め・スペシャル (Spicy Special)",
      icon: "🌶️",
      count: spicySets.length,
      groups: SPICY_GROUPS,
    }));
  }

      // prepend to top so it doesn't get buried by older versions
      if (contentArea.firstChild) if(contentArea && contentArea.insertBefore){
        contentArea.insertBefore(wrap, contentArea.firstChild);
      } else if(listRoot && listRoot.appendChild){
        listRoot.appendChild(wrap);
      }
      else contentArea.appendChild(wrap);
    },

    getTags(){
      const tags = [];
      document.querySelectorAll(".attire-v21-shima input[type='checkbox']:checked").forEach(cb => {
        const v = cb.dataset.en;
        if (v) tags.push(v);
      });

      // Apply hood state only when Shima-enaga themed attire is selected
      const hasShima = tags.some(t => /Shima-enaga|long-tailed bushtit/i.test(t));
      if (hasShima) {
        // Apply hood state ONLY when the selected Shima outfit already implies a hood/outerwear.
        // This avoids forcing hooded parkas onto ceremonial/maid/etc outfits.
        const hasHoodCapable = tags.some(t => /(hood|hoodie|parka|puffer|jacket|coat|anorak|down jacket|padded)/i.test(t));
        if (hasHoodCapable && __shimaHoodMode && __shimaHoodMode !== "auto") {
          if (__shimaHoodMode === "worn") tags.unshift(__HOOD_WORN);
          else if (__shimaHoodMode === "down") tags.unshift(__HOOD_DOWN);
        }
      }
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();


// --- Attire Mobile Debug Overlay (no-PC) ---
(function(){
  "use strict";
  function isEnabled(){
    try{
      if (typeof location !== "undefined" && location && typeof location.search === "string"){
        if (/(?:\?|&)attire_debug=1(?:&|$)/.test(location.search)) return true;
      }
      return (typeof localStorage !== "undefined" && localStorage.getItem("ATTIRE_DEBUG") === "1");
    }catch(e){ return false; }
  }

  function safeStringify(obj){
    try{
      return JSON.stringify(obj, function(k,v){
        if (v && v.nodeType) return "[DOMNode]";
        if (typeof v === "function") return "[Function]";
        return v;
      }, 2);
    }catch(e){
      try{ return String(obj); }catch(_){ return "[unstringifiable]"; }
    }
  }

  function make(tag, attrs, text){
    var el = document.createElement(tag);
    if (attrs){
      Object.keys(attrs).forEach(function(k){
        if (k === "style" && attrs.style && typeof attrs.style === "object"){
          Object.assign(el.style, attrs.style);
        } else if (k === "onclick"){
          el.addEventListener("click", attrs.onclick);
        } else {
          el.setAttribute(k, attrs[k]);
        }
      });
    }
    if (text != null) el.textContent = text;
    return el;
  }

  function ensurePanel(){
    if (document.getElementById("__attire_debug_panel__")) return document.getElementById("__attire_debug_panel__");

    var panel = make("div", { id: "__attire_debug_panel__", style: {
      position: "fixed", left: "8px", bottom: "8px", zIndex: 2147483647,
      width: "min(92vw, 520px)", maxHeight: "55vh",
      background: "rgba(0,0,0,0.78)", color: "#fff",
      fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
      fontSize: "12px", borderRadius: "12px", boxShadow: "0 8px 28px rgba(0,0,0,0.35)",
      overflow: "hidden"
    }});

    var header = make("div", { style: { display: "flex", gap: "6px", alignItems: "center", padding: "10px", borderBottom: "1px solid rgba(255,255,255,0.15)" }});
    header.appendChild(make("div", { style: { fontWeight: "700", marginRight: "auto" }}, "ATTIRE DEBUG"));

    var btnDump = make("button", { style: { padding: "6px 10px", borderRadius: "10px", border: "0", background: "rgba(255,255,255,0.14)", color: "#fff" },
      onclick: function(){ dump(); }
    }, "Dump");

    var btnRemount = make("button", { style: { padding: "6px 10px", borderRadius: "10px", border: "0", background: "rgba(255,255,255,0.14)", color: "#fff" },
      onclick: function(){
        try{
          if (typeof window.__triggerUIMount === "function") window.__triggerUIMount();
          logLine("called __triggerUIMount()");
        }catch(e){ logLine("remount error: " + (e && e.message ? e.message : e)); }
      }
    }, "Remount");

    var btnShow = make("button", { style: { padding: "6px 10px", borderRadius: "10px", border: "0", background: "rgba(255,255,255,0.14)", color: "#fff" },
      onclick: function(){ panel.style.display = "none"; toggleBtn.style.display = "block"; }
    }, "Hide");

    header.appendChild(btnDump);
    header.appendChild(btnRemount);
    header.appendChild(btnShow);

    var body = make("div", { style: { padding: "8px 10px" }});

    var hint = make("div", { style: { opacity: "0.9", marginBottom: "8px", lineHeight: "1.35" }},
      "Enable: ?attire_debug=1  /  Persist: press 'Persist ON'\nUse 'Dump' then copy log."
    );
    body.appendChild(hint);

    var row2 = make("div", { style: { display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "8px" }});

    var btnPersistOn = make("button", { style: { padding: "6px 10px", borderRadius: "10px", border: "0", background: "rgba(90,200,90,0.22)", color: "#fff" },
      onclick: function(){
        try{ localStorage.setItem("ATTIRE_DEBUG","1"); logLine("Persist ON (localStorage ATTIRE_DEBUG=1)"); }catch(e){ logLine("Persist ON failed: "+e); }
      }
    }, "Persist ON");

    var btnPersistOff = make("button", { style: { padding: "6px 10px", borderRadius: "10px", border: "0", background: "rgba(255,90,90,0.22)", color: "#fff" },
      onclick: function(){
        try{ localStorage.removeItem("ATTIRE_DEBUG"); logLine("Persist OFF (localStorage cleared)"); }catch(e){ logLine("Persist OFF failed: "+e); }
      }
    }, "Persist OFF");

    var btnMakeVisible = make("button", { style: { padding: "6px 10px", borderRadius: "10px", border: "0", background: "rgba(255,255,255,0.14)", color: "#fff" },
      onclick: function(){
        try{
          var nodes = document.querySelectorAll('[data-section="attire"], .attire, [class*="attire"]');
          nodes.forEach(function(n){
            try{ n.style.display="block"; n.style.visibility="visible"; n.style.opacity="1"; }catch(_){}
          });
          logLine("forced visible on " + nodes.length + " nodes");
        }catch(e){ logLine("MakeVisible error: "+e); }
      }
    }, "MakeVisible");

    var btnCopy = make("button", { style: { padding: "6px 10px", borderRadius: "10px", border: "0", background: "rgba(255,255,255,0.14)", color: "#fff" },
      onclick: async function(){
        try{
          var txt = textarea.value || "";
          if (!txt) { logLine("nothing to copy"); return; }
          if (navigator.clipboard && navigator.clipboard.writeText){
            await navigator.clipboard.writeText(txt);
            logLine("copied to clipboard");
          } else {
            textarea.focus(); textarea.select();
            document.execCommand("copy");
            logLine("copied (execCommand)");
          }
        }catch(e){ logLine("copy failed: "+e); }
      }
    }, "CopyLog");

    row2.appendChild(btnPersistOn);
    row2.appendChild(btnPersistOff);
    row2.appendChild(btnMakeVisible);
    row2.appendChild(btnCopy);
    body.appendChild(row2);

    var textarea = make("textarea", { id: "__attire_debug_log__", style: {
      width: "100%", height: "26vh", minHeight: "140px",
      background: "rgba(255,255,255,0.06)", color: "#fff",
      border: "1px solid rgba(255,255,255,0.18)", borderRadius: "10px",
      padding: "8px", boxSizing: "border-box", resize: "vertical", outline: "none"
    }});
    body.appendChild(textarea);

    panel.appendChild(header);
    panel.appendChild(body);
    document.body.appendChild(panel);

    var toggleBtn = make("button", { id: "__attire_debug_toggle__", style: {
      position: "fixed", left: "8px", bottom: "8px", zIndex: 2147483646,
      padding: "10px 12px", borderRadius: "999px", border: "0",
      background: "rgba(0,0,0,0.72)", color: "#fff",
      display: "none", boxShadow: "0 8px 28px rgba(0,0,0,0.35)"
    }, onclick: function(){ panel.style.display="block"; toggleBtn.style.display="none"; }}, "ATTIRE DBG");
    document.body.appendChild(toggleBtn);

    function logLine(s){
      var t = new Date().toISOString().replace("T"," ").replace("Z","");
      textarea.value += (textarea.value ? "\n" : "") + "["+t+"] " + s;
      textarea.scrollTop = textarea.scrollHeight;
    }
    function dump(){
      try{
        var pp = window.__PROMPT_PARTS__ || {};
        var attire = pp.attire || pp["attire"] || null;
        var versions = attire ? Object.keys(attire).sort(function(a,b){return (+a)-(+b);}) : [];
        var list = document.getElementById("list-attire");
        var domCount = list ? list.querySelectorAll("*").length : 0;
        var shimaCount = document.querySelectorAll(".attire-v21-shima").length;
        var spicyCount = document.querySelectorAll(".attire-v21-spicy").length;
        var containers = {
          sections: !!document.querySelector("#sections"),
          listAttire: !!document.querySelector("#list-attire"),
          sectionContent: !!document.querySelector("#list-attire .section-content"),
          accordionWrap: !!document.querySelector("#list-attire details.accordion-wrap"),
          body: !!document.body
        };
        var payload = {
          ua: navigator.userAgent,
          url: String(location.href),
          attire_versions: versions,
          attire_apis: attire ? versions.reduce(function(acc,v){
            var a = attire[v];
            acc[v] = { hasInitUI: typeof a?.initUI === "function", mounted: !!a?._mounted, keys: Object.keys(a||{}).slice(0,20) };
            return acc;
          }, {}) : null,
          attire_dom_count: domCount,
          attire_shima_nodes: shimaCount,
          attire_spicy_nodes: spicyCount,
          containers: containers
        };
        textarea.value = safeStringify(payload);
        logLine("dump ok (versions=" + versions.length + ", dom=" + domCount + ")");
        // also mirror to console if available
        try{ console.log("[ATTIRE DEBUG]", payload); }catch(_){}
      }catch(e){
        logLine("dump error: " + (e && e.stack ? e.stack : e));
      }
    }

    // expose small helpers
    window.__ATTIRE_DEBUG__ = { dump: dump };

    logLine("panel ready");
    // auto dump once
    setTimeout(function(){ dump(); }, 600);

    return panel;
  }

  function boot(){
    try{
      if (!isEnabled()) return;
      if (!document || !document.body) return;
      ensurePanel();
    }catch(e){}
  }

  if (document.readyState === "complete" || document.readyState === "interactive"){
    setTimeout(boot, 0);
  } else {
    document.addEventListener("DOMContentLoaded", boot);
  }
})();
// --- builder_ui.section.attire.v22.js ---
(function(){
  "use strict";
  const VERSION = 22; // 拡張パックS (限界突破R-18・フェティッシュ全部乗せ)
  const KEY = "attire";

  // ★ シークレットモード判定
  const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  const ATTIRE_DATA = {
    "🤯 極限着衣崩れ・チラリズム (Extreme Disheveled)": [
      { ja: "片乳出し", en: "one breast exposed, clothes slipping off" },
      { ja: "パンツ片足引っ掛け", en: "panties around one leg" },
      { ja: "ジッパー半開き", en: "zipper half down, skirt unzipped" },
      { ja: "ボタン弾け飛び", en: "buttons popping off, clothes bursting open" },
      { ja: "ノーブラ浮き出し", en: "no bra, nipples visible through clothes, tight shirt" },
      { ja: "パンチラ (風・動き)", en: "upskirt, panties visible" },
      { ja: "服ビリビリ (大破)", en: "heavily torn clothes, almost naked" }
    ],
    "⛓️ 限界拘束・洗脳 (Hardcore Bondage & Mind Control)": [
      { ja: "洗脳奴隷の首輪", en: "mind control collar, slave collar, glowing runes, blank stare" },
      { ja: "リード付き首輪", en: "collar and leash, held by leash" },
      { ja: "重厚な鎖と枷", en: "heavy metal shackles, chains, chained to wall" },
      { ja: "スプレッダーバー", en: "spreader bar, spread legs, metal cuffs" },
      { ja: "真空ベッド", en: "vacuum bed bondage, latex, sealed" },
      { ja: "完全感覚遮断", en: "sensory deprivation, blindfold, headphones, gag" },
      { ja: "吊り下げ拘束", en: "suspension bondage, hoisted up" }
    ],
    "🧞‍♀️ 異世界・スレイブ (Fantasy Dark/Slave)": [
      { ja: "奴隷のボロ布", en: "slave rags, dirty clothes, iron collar" },
      { ja: "淫魔の過激アーマー", en: "revealing succubus armor, demonic motifs, barely clothed" },
      { ja: "金属ビキニ", en: "metal bikini armor, chainmail bikini" },
      { ja: "透視魔法の服", en: "x-ray magic, clothes partly transparent, magical glow" },
      { ja: "娼館の踊り子服", en: "harem dancer outfit, revealing silk, gold chains" },
      { ja: "生贄の祭祀服", en: "sacrificial maiden outfit, sheer white fabric, bound" }
    ],
    "👙 変態ランジェリー (Abnormal Lingerie)": [
      { ja: "Vストリング", en: "v-string, extremely thin thong" },
      { ja: "パールショーツ", en: "pearl thong" },
      { ja: "マイクロ貝殻ブラ", en: "tiny shell bra, pasties size" },
      { ja: "葉っぱ一枚", en: "single leaf covering, nature's clothes" },
      { ja: "全身網タイツ", en: "bodystocking, fishnet body suit" },
      { ja: "穴あき全身網タイツ", en: "crotchless bodystocking, torn fishnets" },
      { ja: "極細紐パン", en: "micro string panties" }
    ],
    "🐙 異種姦・生体侵食+ (Alien & Parasite)": [
      { ja: "スライム半溶解服", en: "clothes melted by slime, partially transparent, sticky clothes" },
      { ja: "触手コルセット", en: "tentacle laced corset, living restraints" },
      { ja: "膨満腹強調スーツ", en: "tight clothes highlighting pregnant belly, stomach bulge" },
      { ja: "寄生植物の蔦", en: "parasitic plant clothes, vines wrapping body, flower blooming from body" },
      { ja: "異形の粘液コート", en: "alien mucus coating, slimy layer" }
    ]
  };

  const DICT = {
    "one breast exposed": "片乳出し", "panties around one leg": "片足パンツ", "zipper half down": "ジッパー半開き",
    "buttons popping off": "ボタン弾け", "nipples visible through clothes": "ノーブラ浮き出し",
    "mind control collar": "洗脳の首輪", "slave collar": "奴隷の首輪", "collar and leash": "リード付き首輪",
    "heavy metal shackles": "重厚な枷", "spreader bar": "スプレッダーバー", "vacuum bed bondage": "真空ベッド",
    "sensory deprivation": "感覚遮断", "slave rags": "奴隷のボロ布", "revealing succubus armor": "過激サキュバスアーマー",
    "metal bikini armor": "金属ビキニ", "x-ray magic": "透視魔法", "harem dancer outfit": "娼館踊り子服",
    "v-string": "Vストリング", "pearl thong": "パールショーツ", "tiny shell bra": "極小貝殻ブラ",
    "single leaf covering": "葉っぱ一枚", "bodystocking": "ボディストッキング", "crotchless bodystocking": "穴あき全身網タイツ",
    "clothes melted by slime": "スライム溶解服", "tentacle laced corset": "触手コルセット",
    "tight clothes highlighting pregnant belly": "膨満腹強調服", "parasitic plant clothes": "寄生植物の服"
  };

  const API = {
    initUI(container) {
      if (!IS_UNLOCKED) return;
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      const mount = (retry = 0) => {
        let parent = document.querySelector("#list-attire");
        if (!parent) { 
          if (retry < 50) setTimeout(() => mount(retry + 1), 100);
          return; 
        }

        // 重複防止
        if (parent.querySelector(".attire-v22-container")) return;

        const createCat = (title, items) => {
          const details = document.createElement("details");
          details.className = "attire-cat attire-r18-max";
          // 限界突破用により過激な色枠に
          details.style.cssText = "margin-bottom:6px; border:2px solid #ff0055; border-radius:6px; background:#fff;";
          const summary = document.createElement("summary");
          summary.textContent = title;
          summary.style.cssText = "font-weight:bold; padding:8px 10px; cursor:pointer; background:#fff0f5; color:#cc0044;";
          details.appendChild(summary);
          const content = document.createElement("div");
          content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(140px, 1fr)); gap:6px;";
          items.forEach(item => {
            const label = document.createElement("label");
            label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
            const cb = document.createElement("input");
            cb.type = "checkbox"; cb.dataset.en = item.en; cb.style.marginRight = "6px";
            label.appendChild(cb); label.appendChild(document.createTextNode(`${item.ja}`));
            label.title = item.en; // 英語はツールチップで表示
            content.appendChild(label);
          });
          details.appendChild(content);
          return details;
        };

        const root = document.createElement("div");
        root.className = "attire-v22-container";
        
        const sep = document.createElement("div");
        sep.style.cssText = "margin:20px 0 10px 0; border-top:2px dashed #ff0055; text-align:center; color:#ff0055; font-size:0.9em; font-weight:bold;";
        sep.textContent = "🔥 R-18 限界突破・マニアック (Max Fetish) 🔥"; 
        
        root.appendChild(sep);
        Object.entries(ATTIRE_DATA).forEach(([cat, items]) => root.appendChild(createCat(cat, items)));
        
        const contentArea = parent.querySelector(".section-content") || parent;
        contentArea.appendChild(root);
      };

      mount();
    },
    getTags() {
      const tags = [];
      const root = document.querySelector(".attire-v22-container");
      if(root) {
        root.querySelectorAll("input:checked").forEach(cb => tags.push(cb.dataset.en));
      }
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();


(function(){
  "use strict";
  const VERSION = 23; // チャイナ服特化コレクション
  const KEY = "attire";

  const CHINA_ATTIRE_DATA = {
    "🐉 チャイナ基本シルエット (Core Cheongsam Silhouettes)": [
      { ja: "王道チャイナドレス", en: "cheongsam, chinese clothes" },
      { ja: "クラシック旗袍", en: "classic cheongsam, traditional chinese dress" },
      { ja: "モダン旗袍", en: "modern cheongsam, fashion qipao" },
      { ja: "ミニチャイナ", en: "short cheongsam, mini qipao" },
      { ja: "ロングチャイナ", en: "long cheongsam, floor-length qipao" },
      { ja: "ハイウエスト旗袍", en: "high-waist cheongsam" },
      { ja: "ボディライン強調旗袍", en: "fitted cheongsam, body-hugging qipao" },
      { ja: "Aライン中華ドレス", en: "a-line cheongsam" },
      { ja: "マーメイド旗袍", en: "mermaid cheongsam" },
      { ja: "マント付き中華ドレス", en: "cheongsam with cape" },
      { ja: "羽織付きチャイナ", en: "cheongsam with sheer outer robe" },
      { ja: "レイヤード旗袍", en: "layered cheongsam, double-layer qipao" }
    ],
    "✂️ スリット・丈・攻め形状 (Slits, Length & Bold Cuts)": [
      { ja: "ハイスリットチャイナ", en: "cheongsam, high slit" },
      { ja: "両脚スリット旗袍", en: "double slit cheongsam" },
      { ja: "深スリットミニチャイナ", en: "short cheongsam, high slit, thighs" },
      { ja: "前開きスリット旗袍", en: "front slit cheongsam" },
      { ja: "サイドカット旗袍", en: "cheongsam with side cutout" },
      { ja: "ウエストカット旗袍", en: "cheongsam with waist cutout" },
      { ja: "胸開きチャイナ", en: "cheongsam, cleavage cutout" },
      { ja: "肩見せチャイナ", en: "bare shoulders, cheongsam" },
      { ja: "背中開き旗袍", en: "backless cheongsam" },
      { ja: "横乳チャイナ", en: "china dress, sideboob" },
      { ja: "太もも魅せ旗袍", en: "china dress, thighs, high slit" },
      { ja: "攻めチャイナ雛形", en: "bare shoulders, china dress, chinese clothes, short dress, cleavage cutout, sideboob, thighs" }
    ],
    "🧵 襟・袖・上半身ディテール (Collar, Sleeves & Upper Details)": [
      { ja: "立ち襟チャイナ", en: "mandarin collar cheongsam" },
      { ja: "低め襟旗袍", en: "low mandarin collar cheongsam" },
      { ja: "ノースリーブ旗袍", en: "sleeveless cheongsam" },
      { ja: "半袖チャイナ", en: "short-sleeve cheongsam" },
      { ja: "長袖チャイナ", en: "long-sleeve cheongsam" },
      { ja: "透け袖中華ドレス", en: "cheongsam with sheer sleeves" },
      { ja: "パフ袖チャイナ", en: "puff-sleeve cheongsam" },
      { ja: "オフショル旗袍", en: "off-shoulder cheongsam" },
      { ja: "ワンショルダーチャイナ", en: "one-shoulder cheongsam" },
      { ja: "胸元キーホール旗袍", en: "keyhole cheongsam" },
      { ja: "チャイナボタン強調", en: "frog buttons, cheongsam" },
      { ja: "お団子髪セット向け", en: "hair bun, cheongsam" }
    ],
    "🪭 素材・色・柄・装飾 (Materials, Colors & Ornament)": [
      { ja: "赤金チャイナ", en: "red and gold cheongsam" },
      { ja: "黒金チャイナ", en: "black and gold cheongsam" },
      { ja: "純白旗袍", en: "white cheongsam" },
      { ja: "翡翠グリーン旗袍", en: "jade green cheongsam" },
      { ja: "深紅シルクチャイナ", en: "deep crimson silk cheongsam" },
      { ja: "サテン旗袍", en: "satin cheongsam" },
      { ja: "シルク旗袍", en: "silk cheongsam" },
      { ja: "ベルベット中華ドレス", en: "velvet cheongsam" },
      { ja: "レース重ねチャイナ", en: "lace-trimmed cheongsam" },
      { ja: "刺繍鳳凰チャイナ", en: "phoenix embroidery cheongsam" },
      { ja: "刺繍龍紋旗袍", en: "dragon embroidery cheongsam" },
      { ja: "花柄チャイナ", en: "floral cheongsam" },
      { ja: "牡丹柄旗袍", en: "peony pattern cheongsam" },
      { ja: "竹柄中華ドレス", en: "bamboo motif cheongsam" },
      { ja: "流紋光沢チャイナ", en: "glossy cheongsam, reflective silk" }
    ],
    "🌙 派生・融合チャイナ (Hybrid & Themed Chinese Looks)": [
      { ja: "ゴシックチャイナ", en: "gothic cheongsam" },
      { ja: "ロリィタチャイナ", en: "qi-lolita, chinese lolita dress" },
      { ja: "メイドチャイナ", en: "maid cheongsam" },
      { ja: "バニーチャイナ", en: "chinese style bunny outfit, qipao-inspired bunny silhouette" },
      { ja: "サイバーチャイナ", en: "cyber cheongsam" },
      { ja: "テックウェア旗袍", en: "techwear cheongsam" },
      { ja: "武侠ヒロインチャイナ", en: "wuxia heroine outfit, cheongsam" },
      { ja: "仙女風チャイナ", en: "xianxia-inspired cheongsam" },
      { ja: "宮廷中華ドレス", en: "chinese ceremonial outfit" },
      { ja: "漢服ミックス旗袍", en: "hanfu-inspired cheongsam" },
      { ja: "近未来ネオン旗袍", en: "futuristic cheongsam, neon accents" },
      { ja: "雪国チャイナ", en: "winter cheongsam, fur trim" }
    ],
    "👠 合わせ技パーツ (Pairing Parts for Cheongsam Looks)": [
      { ja: "網タイツ合わせ", en: "cheongsam, fishnet pantyhose" },
      { ja: "パンスト合わせ", en: "cheongsam, pantyhose" },
      { ja: "ニーハイ合わせ", en: "cheongsam, thighhighs" },
      { ja: "ハイヒール合わせ", en: "cheongsam, high heels" },
      { ja: "チャイナシューズ合わせ", en: "cheongsam, chinese shoes" },
      { ja: "簪・髪飾り合わせ", en: "cheongsam, ornate hairpin" },
      { ja: "扇子合わせ", en: "cheongsam, folding fan" },
      { ja: "手袋合わせ", en: "cheongsam, long gloves" }
    ]
  };

  const DICT = {
    "cheongsam, chinese clothes": "王道チャイナドレス",
    "classic cheongsam, traditional chinese dress": "クラシック旗袍",
    "modern cheongsam, fashion qipao": "モダン旗袍",
    "short cheongsam, mini qipao": "ミニチャイナ",
    "long cheongsam, floor-length qipao": "ロングチャイナ",
    "high-waist cheongsam": "ハイウエスト旗袍",
    "fitted cheongsam, body-hugging qipao": "ボディライン強調旗袍",
    "a-line cheongsam": "Aライン中華ドレス",
    "mermaid cheongsam": "マーメイド旗袍",
    "cheongsam with cape": "マント付き中華ドレス",
    "cheongsam with sheer outer robe": "羽織付きチャイナ",
    "layered cheongsam, double-layer qipao": "レイヤード旗袍",
    "cheongsam, high slit": "ハイスリットチャイナ",
    "double slit cheongsam": "両脚スリット旗袍",
    "short cheongsam, high slit, thighs": "深スリットミニチャイナ",
    "front slit cheongsam": "前開きスリット旗袍",
    "cheongsam with side cutout": "サイドカット旗袍",
    "cheongsam with waist cutout": "ウエストカット旗袍",
    "cheongsam, cleavage cutout": "胸開きチャイナ",
    "bare shoulders, cheongsam": "肩見せチャイナ",
    "backless cheongsam": "背中開き旗袍",
    "china dress, sideboob": "横乳チャイナ",
    "china dress, thighs, high slit": "太もも魅せ旗袍",
    "bare shoulders, china dress, chinese clothes, short dress, cleavage cutout, sideboob, thighs": "攻めチャイナ雛形",
    "mandarin collar cheongsam": "立ち襟チャイナ",
    "low mandarin collar cheongsam": "低め襟旗袍",
    "sleeveless cheongsam": "ノースリーブ旗袍",
    "short-sleeve cheongsam": "半袖チャイナ",
    "long-sleeve cheongsam": "長袖チャイナ",
    "cheongsam with sheer sleeves": "透け袖中華ドレス",
    "puff-sleeve cheongsam": "パフ袖チャイナ",
    "off-shoulder cheongsam": "オフショル旗袍",
    "one-shoulder cheongsam": "ワンショルダーチャイナ",
    "keyhole cheongsam": "胸元キーホール旗袍",
    "frog buttons, cheongsam": "チャイナボタン強調",
    "hair bun, cheongsam": "お団子髪セット向け",
    "red and gold cheongsam": "赤金チャイナ",
    "black and gold cheongsam": "黒金チャイナ",
    "white cheongsam": "純白旗袍",
    "jade green cheongsam": "翡翠グリーン旗袍",
    "deep crimson silk cheongsam": "深紅シルクチャイナ",
    "satin cheongsam": "サテン旗袍",
    "silk cheongsam": "シルク旗袍",
    "velvet cheongsam": "ベルベット中華ドレス",
    "lace-trimmed cheongsam": "レース重ねチャイナ",
    "phoenix embroidery cheongsam": "刺繍鳳凰チャイナ",
    "dragon embroidery cheongsam": "刺繍龍紋旗袍",
    "floral cheongsam": "花柄チャイナ",
    "peony pattern cheongsam": "牡丹柄旗袍",
    "bamboo motif cheongsam": "竹柄中華ドレス",
    "glossy cheongsam, reflective silk": "流紋光沢チャイナ",
    "gothic cheongsam": "ゴシックチャイナ",
    "qi-lolita, chinese lolita dress": "ロリィタチャイナ",
    "maid cheongsam": "メイドチャイナ",
    "chinese style bunny outfit, qipao-inspired bunny silhouette": "バニーチャイナ",
    "cyber cheongsam": "サイバーチャイナ",
    "techwear cheongsam": "テックウェア旗袍",
    "wuxia heroine outfit, cheongsam": "武侠ヒロインチャイナ",
    "xianxia-inspired cheongsam": "仙女風チャイナ",
    "chinese ceremonial outfit": "宮廷中華ドレス",
    "hanfu-inspired cheongsam": "漢服ミックス旗袍",
    "futuristic cheongsam, neon accents": "近未来ネオン旗袍",
    "winter cheongsam, fur trim": "雪国チャイナ",
    "cheongsam, fishnet pantyhose": "網タイツ合わせ",
    "cheongsam, pantyhose": "パンスト合わせ",
    "cheongsam, thighhighs": "ニーハイ合わせ",
    "cheongsam, high heels": "ハイヒール合わせ",
    "cheongsam, chinese shoes": "チャイナシューズ合わせ",
    "cheongsam, ornate hairpin": "簪・髪飾り合わせ",
    "cheongsam, folding fan": "扇子合わせ",
    "cheongsam, long gloves": "手袋合わせ"
  };

  const API = {
    initUI(container) {
      const mount = (retry = 0) => {
        const parent = document.querySelector("#list-attire") || container;
        if (!parent) {
          if (retry < 50) setTimeout(() => mount(retry + 1), 100);
          return;
        }
        if (parent.querySelector(".attire-v23-container")) return;

        const root = document.createElement("div");
        root.className = "attire-v23-container";

        const sep = document.createElement("div");
        sep.style.cssText = "margin:18px 0 10px 0; border-top:1px dashed #cc3344; text-align:center; color:#aa2233; font-size:0.88em; font-weight:bold;";
        sep.textContent = "🐉 チャイナ服特化コレクション (v23) 🐉";
        root.appendChild(sep);

        const makeCategory = (title, items) => {
          const details = document.createElement("details");
          details.className = "attire-cat attire-v23-cat";
          details.style.cssText = "margin-bottom:6px; border:1px solid #e8d3d8; border-radius:8px; background:#fff; overflow:hidden;";

          const summary = document.createElement("summary");
          summary.textContent = title;
          summary.style.cssText = "font-weight:bold; padding:8px 10px; cursor:pointer; background:#fff7f8;";
          details.appendChild(summary);

          const content = document.createElement("div");
          content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(160px, 1fr)); gap:6px;";

          items.forEach(item => {
            const label = document.createElement("label");
            label.style.cssText = "display:flex; align-items:center; gap:6px; font-size:0.9em; cursor:pointer; line-height:1.25;";
            const cb = document.createElement("input");
            cb.type = "checkbox";
            cb.dataset.en = item.en;
            label.appendChild(cb);
            label.appendChild(document.createTextNode(item.ja));
            label.title = item.en;
            content.appendChild(label);
          });

          details.appendChild(content);
          return details;
        };

        Object.entries(CHINA_ATTIRE_DATA).forEach(([cat, items]) => {
          root.appendChild(makeCategory(cat, items));
        });

        const contentArea = parent.querySelector(".section-content") || parent;
        contentArea.appendChild(root);

        if (window.__outputTranslation) {
          window.__outputTranslation.register(DICT);
        }
      };
      mount();
    },
    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v23-container input[type='checkbox']:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
