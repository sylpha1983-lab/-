(function(){
  "use strict";
  const VERSION = 15; // 拡張パックO (全身コーデ・セットプリセット)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "🏫 学校・スクールセット (School Sets)": [
      { label: "セーラー服セット (Sailor)", val: "sailor uniform, pleated skirt, neckerchief, loafers, school bag, kneehighs" },
      { label: "ブレザーセット (Blazer)", val: "school uniform, blazer, white shirt, plaid skirt, bow tie, loafers, black tights" },
      { label: "体操服セット (Gym)", val: "gym uniform, bloomer, white t-shirt, sneakers, white socks" },
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

  // 翻訳辞書
  // セット名そのものと、セットに含まれる主要な単語を登録
  const DICT = {
    // Labels
    "sailor uniform, pleated skirt, neckerchief, loafers, school bag, kneehighs": "セーラー服セット",
    "school uniform, blazer, white shirt, plaid skirt, bow tie, loafers, black tights": "ブレザーセット",
    "gym uniform, bloomer, white t-shirt, sneakers, white socks": "体操服セット",
    "school swimsuit, swimming cap, goggles, barefoot, wet skin": "スク水セット",
    "school uniform, glasses, sweater vest, long skirt, holding book": "優等生セット",
    "school uniform, loose socks, cardigan, short skirt, unbuttoned shirt, makeup": "ギャルJKセット",
    
    "business suit, pencil skirt, white shirt, black tights, high heels, glasses": "OLスーツセット",
    "maid, apron, long dress, frills, headdress, white stockings, mary janes": "メイドフルセット",
    "nurse uniform, nurse cap, white thighhighs, clipboard, stethoscope": "ナースセット",
    "miko attire, hakama, tabi, zori, hair ribbon": "巫女セット",
    "china dress, high slit, hair bun, pantyhose, high heels": "チャイナセット",
    "bunny suit, rabbit ears, fishnets, high heels, cuffs, collar": "バニーセット",
    "police uniform, police cap, handcuffs, miniskirt, boots": "ポリスセット",

    "full armor, plate armor, gauntlets, cape, sword, shield, helmet": "騎士フル装備",
    "wizard robe, wizard hat, magic staff, cape, grimoire": "魔法使いセット",
    "bikini armor, pauldrons, gauntlets, greaves, cape, sword": "ビキニアーマーセット",
    "adventurer outfit, leather armor, backpack, boots, pouch, belt": "冒険者セット",
    "elf, green dress, leaf design, tiara, bow and arrow, forest background": "エルフセット",

    "t-shirt, jeans, sneakers, casual, backpack": "カジュアルデニムセット",
    "oversized hoodie, panties, barefoot, off-shoulder, messy hair": "部屋着パーカーセット",
    "pajamas, holding plush toy, bed, messy hair": "パジャマセット",
    "dress, cardigan, handbag, pumps, necklace, earrings": "デートコーデセット",
    "shorts, tank top, sunglasses, hat, wristband, sneakers": "夏フェスセット",

    // Components (Missing ones)
    "neckerchief": "ネッカチーフ", "bow tie": "ボウタイ", "swimming cap": "水泳帽", "sweater vest": "セーターベスト",
    "pencil skirt": "タイトスカート", "clipboard": "クリップボード", "stethoscope": "聴診器",
    "hair bun": "お団子髪", "cuffs": "カフス", 
    "full armor": "フルアーマー", "helmet": "兜", "grimoire": "魔導書", "greaves": "すね当て", "pouch": "ポーチ",
    "messy hair": "寝癖/ボサボサ髪", "wristband": "リストバンド"
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
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#fff0f5; color:#d63384;"; // セット系は色を変えて目立たせる
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(150px, 1fr)); gap:6px;";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.val = item.val; // セットなのでvalを使用
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
