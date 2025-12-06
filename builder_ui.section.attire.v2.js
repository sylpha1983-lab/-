(function(){
  "use strict";

  const VERSION = 2; // v1を上書きする拡張版
  const KEY = "attire";

  const CATEGORIES = {
    // ★ 新規追加: ファッションスタイルを最上段に
    "ファッションスタイル (Fashion Styles)": [
      { ja: "テックウェア", en: "techwear" }, { ja: "ストリート系", en: "streetwear" },
      { ja: "ロリータ", en: "lolita fashion" }, { ja: "クラシックロリータ", en: "classic lolita" },
      { ja: "ゴスロリ", en: "gothic lolita" }, { ja: "スチームパンク", en: "steampunk attire" },
      { ja: "ギャル", en: "gyaru" }, { ja: "森ガール", en: "mori girl" },
      { ja: "病みかわ", en: "yami kawaii" }, { ja: "パステルゴス", en: "pastel goth" },
      { ja: "サイバーファッション", en: "cyber fashion" },
      { ja: "グランジ", en: "grunge style" }, { ja: "ボヘミアン", en: "bohemian style" },
      { ja: "アメカジ", en: "american casual" }, { ja: "プレッピースタイル", en: "preppy style" },
      { ja: "80年代風", en: "80s style" }, { ja: "大正ロマン", en: "taisho roman" },
      { ja: "ヴィクトリア朝", en: "victorian style" }
    ],
    "現代・カジュアル (Modern/Casual)": [
      { ja: "Tシャツ", en: "t-shirt" }, { ja: "シャツ/ブラウス", en: "shirt" }, { ja: "白シャツ", en: "white shirt" },
      { ja: "パーカー", en: "hoodie" }, { ja: "セーター", en: "sweater" }, { ja: "タンクトップ", en: "tank top" },
      { ja: "キャミソール", en: "camisole" }, { ja: "ジャケット", en: "jacket" }, { ja: "コート", en: "coat" },
      { ja: "ジーンズ/デニム", en: "jeans" }, { ja: "ショートパンツ", en: "shorts" }, { ja: "スカート", en: "skirt" },
      { ja: "ミニスカート", en: "miniskirt" }, { ja: "プリーツスカート", en: "pleated skirt" }, { ja: "ワンピース", en: "dress" },
      { ja: "サロペット/オーバーオール", en: "overalls" }, { ja: "部屋着/パジャマ", en: "pajamas" }, { ja: "ジャージ", en: "track suit" },
      { ja: "タートルネック", en: "turtleneck" }, { ja: "オフショルダー", en: "off-shoulder" },
      { ja: "カーディガン", en: "cardigan" }, { ja: "ベスト", en: "vest" }, { ja: "レインコート", en: "raincoat" }
    ],
    "制服・職業 (Uniforms/Jobs)": [
      { ja: "セーラー服", en: "sailor uniform" }, { ja: "ブレザー制服", en: "school uniform (blazer)" },
      { ja: "スクール水着", en: "school swimsuit" }, { ja: "体操服", en: "gym uniform" }, { ja: "ブルマ", en: "bloomers" },
      { ja: "メイド服", en: "maid apron" }, { ja: "ナース服", en: "nurse uniform" }, { ja: "シスター/修道女", en: "nun habit" },
      { ja: "巫女服", en: "miko attire" }, { ja: "チャイナドレス", en: "china dress" }, { ja: "警察官", en: "police uniform" },
      { ja: "軍服", en: "military uniform" }, { ja: "スーツ", en: "business suit" }, { ja: "白衣", en: "lab coat" },
      { ja: "バニーガール", en: "bunny suit" }, { ja: "レースクイーン", en: "race queen" }, { ja: "チアリーダー", en: "cheerleader" },
      { ja: "OL制服", en: "office lady uniform" }, { ja: "CA制服", en: "flight attendant uniform" },
      { ja: "アイドル衣装", en: "idol clothes" }, { ja: "シェフ/コック", en: "chef uniform" }, { ja: "探偵", en: "detective attire" }
    ],
    "ファンタジー・特殊 (Fantasy/Costume)": [
      { ja: "鎧/アーマー", en: "armor" }, { ja: "プレートアーマー", en: "plate armor" }, { ja: "ビキニアーマー", en: "bikini armor" },
      { ja: "ローブ", en: "robe" }, { ja: "マント", en: "cloak" }, { ja: "魔女の帽子", en: "witch hat" },
      { ja: "冒険者の服", en: "adventurer outfit" }, { ja: "サイバーパンク衣装", en: "cyberpunk attire" },
      { ja: "ボディスーツ", en: "bodysuit" }, { ja: "プラグスーツ風", en: "mechanical suit" },
      { ja: "ウェディングドレス", en: "wedding dress" }, { ja: "イブニングドレス", en: "evening gown" },
      { ja: "踊り子衣装", en: "dancer outfit" }, { ja: "サンタ衣装", en: "santa costume" }, { ja: "忍者", en: "ninja" }, { ja: "着ぐるみ", en: "kigurumi" }
    ],
    "世界観・民族衣装 (World/Traditional)": [
      { ja: "着物", en: "kimono" }, { ja: "振袖", en: "furisode" }, { ja: "浴衣", en: "yukata" }, { ja: "袴", en: "hakama" },
      { ja: "法被 (ハッピ)", en: "happi coat" }, { ja: "羽織", en: "haori" },
      { ja: "漢服", en: "hanfu" }, { ja: "チャイナドレス(詳細)", en: "cheongsam" },
      { ja: "ディアンドル (独)", en: "dirndl" }, { ja: "サリー (印)", en: "sari" },
      { ja: "アオザイ (越)", en: "ao dai" }, { ja: "アラビアン", en: "arabian clothes" },
      { ja: "エジプト風", en: "egyptian clothes" }, { ja: "ポンチョ", en: "poncho" },
      { ja: "ヴァイキング", en: "viking clothes" }, { ja: "カウボーイ", en: "cowboy costume" }
    ],
    "下着・水着 (Underwear/Swimwear)": [
      { ja: "ビキニ", en: "bikini" }, { ja: "マイクロビキニ", en: "micro bikini" }, { ja: "競泳水着", en: "competition swimsuit" },
      { ja: "ワンピース水着", en: "one-piece swimsuit" }, { ja: "水着パーカー", en: "swim parka" },
      { ja: "ランジェリー", en: "lingerie" }, { ja: "ブラジャー", en: "bra" }, { ja: "パンティ", en: "panties" },
      { ja: "紐パン", en: "side-tie panties" }, { ja: "スポーツブラ", en: "sports bra" },
      { ja: "ベビードール", en: "babydoll" }, { ja: "コルセット", en: "corset" }, { ja: "サラシ", en: "sarashi" },
      { ja: "フロントホック", en: "front hook bra" }, { ja: "ふんどし", en: "fundoshi" },
      { ja: "キャットスーツ", en: "catsuit" }, { ja: "スリングショット", en: "slingshot swimsuit" }
    ],
    "靴・履物詳細 (Footwear Types)": [
      { ja: "スニーカー", en: "sneakers" }, { ja: "ハイカットスニーカー", en: "high-top sneakers" },
      { ja: "ブーツ", en: "boots" }, { ja: "編み上げブーツ", en: "lace-up boots" }, { ja: "コンバットブーツ", en: "combat boots" },
      { ja: "ニーハイブーツ", en: "thigh high boots" }, { ja: "ハイヒール", en: "high heels" },
      { ja: "パンプス", en: "pumps" }, { ja: "ローファー", en: "loafers" }, { ja: "サンダル", en: "sandals" },
      { ja: "上履き", en: "uwabaki" }, { ja: "厚底靴", en: "platform shoes" }, { ja: "足袋", en: "tabi" },
      { ja: "下駄", en: "geta" }, { ja: "草履", en: "zori" }, { ja: "裸足", en: "barefoot" },
      { ja: "ローラースケート", en: "roller skates" }
    ],
    "レッグウェア (Legwear)": [
      { ja: "ニーソックス", en: "kneehighs" }, { ja: "オーバーニー", en: "thighhighs" },
      { ja: "パンティストッキング", en: "pantyhose" }, { ja: "黒タイツ", en: "black tights" }, { ja: "網タイツ", en: "fishnets" },
      { ja: "ガーターベルト", en: "garter belt" }, { ja: "ルーズソックス", en: "loose socks" },
      { ja: "ボーダー靴下", en: "striped socks" }, { ja: "左右非対称靴下", en: "uneven socks" },
      { ja: "トレンカ", en: "stirrup legwear" }
    ],
    "小物・アクセサリー (Accessories)": [
      { ja: "眼鏡", en: "glasses" }, { ja: "サングラス", en: "sunglasses" }, { ja: "眼帯", en: "eyepatch" },
      { ja: "マスク", en: "mask" }, { ja: "ガスマスク", en: "gas mask" },
      { ja: "帽子", en: "hat" }, { ja: "キャップ", en: "baseball cap" }, { ja: "ベレー帽", en: "beret" },
      { ja: "ヘッドフォン", en: "headphones" }, { ja: "イヤーマフ", en: "earmuffs" },
      { ja: "マフラー", en: "scarf" }, { ja: "ネクタイ", en: "necktie" }, { ja: "リボンタイ", en: "bowtie" },
      { ja: "手袋", en: "gloves" }, { ja: "指なし手袋", en: "fingerless gloves" },
      { ja: "チョーカー", en: "choker" }, { ja: "首輪", en: "collar" }, { ja: "鎖", en: "chain" },
      { ja: "ネックレス", en: "necklace" }, { ja: "指輪", en: "ring" }, { ja: "ピアス", en: "piercing" }
    ],
    "柄・模様 (Patterns & Prints)": [
      { ja: "ストライプ", en: "striped" }, { ja: "ボーダー", en: "horizontal stripes" },
      { ja: "チェック柄", en: "plaid" }, { ja: "アーガイル", en: "argyle" },
      { ja: "水玉 (ドット)", en: "polka dot" }, { ja: "花柄", en: "floral print" },
      { ja: "ヒョウ柄", en: "leopard print" }, { ja: "迷彩柄", en: "camouflage" },
      { ja: "和柄", en: "japanese pattern" }, { ja: "千鳥格子", en: "houndstooth" }
    ],
    "素材・ディテール (Details/Material)": [
      { ja: "フリル", en: "frills" }, { ja: "レース", en: "lace" }, { ja: "リボン装飾", en: "ribbon trim" },
      { ja: "透け感 (シースルー)", en: "see-through" }, { ja: "濡れた服", en: "wet clothes" },
      { ja: "はだけた服", en: "open clothes" }, { ja: "破れた服", en: "torn clothes" },
      { ja: "レザー", en: "leather" }, { ja: "デニム", en: "denim" },
      { ja: "サテン", en: "satin" }, { ja: "ニット", en: "ribbed sweater" }, { ja: "ツイード", en: "tweed" },
      { ja: "血まみれ", en: "bloodstained clothes" }, { ja: "泥汚れ", en: "muddy clothes" }
    ],
    "萌え属性・フェチ (Moe Attributes/Fetish)": [
      { ja: "絶対領域", en: "zettai ryouiki" }, { ja: "ぴっちり (スキンテイト)", en: "skintight" },
      { ja: "へそ出し", en: "midriff" }, { ja: "胸元開き", en: "cleavage cutout" }, { ja: "背中開き", en: "bare back" },
      { ja: "下乳 (アンダーブーブ)", en: "underboob" }, { ja: "横乳 (サイドブーブ)", en: "sideboob" },
      { ja: "谷間", en: "cleavage" }, { ja: "食い込み", en: "clothing cutout" },
      { ja: "シャツ捲り", en: "shirt lift" }, { ja: "スカート捲り", en: "skirt lift" },
      { ja: "パンチラ", en: "panties peeking" }, { ja: "ノーブラ", en: "no bra" }
    ],
    "バッグ・携行品 (Bags & Carried)": [
      { ja: "リュック/バックパック", en: "backpack" }, { ja: "ランドセル", en: "randoseru" },
      { ja: "スクールバッグ", en: "school bag" }, { ja: "トートバッグ", en: "tote bag" },
      { ja: "ハンドバッグ", en: "handbag" }, { ja: "ショルダーバッグ", en: "shoulder bag" },
      { ja: "痛バッグ", en: "itabag" }, { ja: "武器ケース", en: "weapon case" },
      { ja: "ホルスター", en: "holster" }, { ja: "刀剣ベルト", en: "sword belt" }
    ],
    "メイク・ボディ装飾 (Makeup & Body Art)": [
      { ja: "口紅/リップ", en: "lipstick" }, { ja: "アイシャドウ", en: "eyeshadow" }, { ja: "マスカラ", en: "mascara" },
      { ja: "チーク", en: "blush" }, { ja: "ネイル/マニキュア", en: "nail polish" }, { ja: "ペディキュア", en: "pedicure" },
      { ja: "タトゥー", en: "tattoo" }, { ja: "紋様 (ボディペイント)", en: "body paint" },
      { ja: "ピアス", en: "piercing" }, { ja: "へそピアス", en: "navel piercing" }, { ja: "鼻ピアス", en: "nose piercing" }
    ],
    "フェティッシュ・拘束 (Fetish/Bondage)": [
      { ja: "ハーネス", en: "harness" }, { ja: "緊縛", en: "shibari" }, { ja: "包帯巻き", en: "bandages" },
      { ja: "全身タイツ", en: "zentai" }, { ja: "ラバースーツ", en: "rubber suit" }, { ja: "手錠", en: "handcuffs" },
      { ja: "目隠し", en: "blindfold" }, { ja: "口枷", en: "ball gag" }
    ],
    "人外・パーツ (Non-Human/Wings)": [
      { ja: "天使の翼", en: "angel wings" }, { ja: "悪魔の翼", en: "demon wings" },
      { ja: "機械の翼", en: "mechanical wings" }, { ja: "妖精の羽", en: "fairy wings" },
      { ja: "猫耳", en: "cat ears" }, { ja: "狐耳", en: "fox ears" },
      { ja: "ウサギ耳", en: "rabbit ears" }, { ja: "尻尾", en: "tail" },
      { ja: "悪魔の尻尾", en: "demon tail" }, { ja: "天使の輪", en: "halo" },
      { ja: "角 (ツノ)", en: "horns" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-attire") || container;
      parent.innerHTML = ""; // v2はv1を上書きするためクリア

      const section = document.createElement("div");
      section.className = "attire-v2-revised"; 

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.className = "attire-cat";
        details.open = false; // ★ デフォルトで閉じる

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
        
        section.appendChild(details);
      });

      parent.appendChild(section);

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
      document.querySelectorAll(".attire-v2-revised input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

