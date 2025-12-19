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

