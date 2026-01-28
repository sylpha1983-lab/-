// Auto-generated bundle for section 'race'
// Contains 5 versions stacked in ascending order.

(function(){
// --- builder_ui.section.race.v1.js ---
(function(){
  "use strict";
  const VERSION = 1; 
  const KEY = "race"; 

  const DATA_SETS = {
    "基本ファンタジー種族 (Basic Fantasy)": [
      { ja: "人間", en: "human" }, { ja: "エルフ", en: "elf" }, 
      { ja: "ダークエルフ", en: "dark elf" }, { ja: "ドワーフ", en: "dwarf" }, 
      { ja: "ハーフリング/小人", en: "halfling" }, { ja: "巨人", en: "giant" },
      { ja: "オーク", en: "orc" }, { ja: "ゴブリン", en: "goblin" }
    ],
    "神聖・邪悪 (Holy & Evil)": [
      { ja: "天使", en: "angel" }, { ja: "堕天使", en: "fallen angel" },
      { ja: "悪魔", en: "demon" }, { ja: "サキュバス", en: "succubus" }
    ]
  };

  const DATA_PARTS = {
    "🎨 肌の色・スキン属性 (Skin Types)": [
      { ja: "褐色肌", en: "dark skin" }, { ja: "日焼け肌", en: "tan" },
      { ja: "色白", en: "pale skin" }, { ja: "異色肌", en: "colored skin" },
      { ja: "青肌", en: "blue skin" }, { ja: "緑肌", en: "green skin" },
      { ja: "赤肌", en: "red skin" }, { ja: "グレー肌", en: "grey skin" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-race") || container;
      if (!parent.id) {
         parent.id = "list-race";
         const h2 = document.createElement("h2");
         h2.textContent = "2. 種族・素体 (Race)";
         const existingH2 = parent.querySelector("h2");
         if(existingH2) existingH2.remove();
         parent.prepend(h2);
      }

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.innerHTML = ""; 

      const createRootAcc = (id, title, color) => {
        const det = document.createElement("details");
        det.id = id;
        det.className = "race-root-acc";
        det.style.cssText = "margin-bottom:10px; border:2px solid " + color + "; border-radius:6px; background:#fff;";
        
        // 初期状態は閉じる
        det.open = false; 

        const sum = document.createElement("summary");
        sum.textContent = title;
        sum.style.cssText = "font-weight:bold; padding:10px; background:" + color + "22; cursor:pointer; font-size:1.1em; color:#333;";
        const con = document.createElement("div");
        con.id = id + "-content";
        con.style.padding = "10px";
        det.appendChild(sum);
        det.appendChild(con);
        contentArea.appendChild(det);
        return con;
      };

      const setsRoot = createRootAcc("race-root-sets", "📦 キャラクターセット (Full Sets)", "#007bff");
      const partsRoot = createRootAcc("race-root-parts", "🧩 身体パーツ・特徴 (Parts & Traits)", "#28a745");

      const createSubCat = (targetRoot, title, items) => {
        const details = document.createElement("details");
        details.className = "race-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #ccc; border-radius:4px; background:#fff;";
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
          
          // ★修正: セット(val)がある場合、それをlinks(連動対象)としても登録する
          if(item.val) {
             cb.dataset.val = item.val;
             // これにより、Coreの連動機能が働き、ON/OFFが同期されます
             cb.dataset.links = item.links; 
          } else {
             cb.dataset.en = item.en;
          }
          
          cb.style.marginRight = "6px";
          label.appendChild(cb); label.appendChild(document.createTextNode(item.ja));
          content.appendChild(label);
        });
        details.appendChild(content);
        targetRoot.appendChild(details);
      };

      Object.entries(DATA_SETS).forEach(([t, i]) => createSubCat(setsRoot, t, i));
      Object.entries(DATA_PARTS).forEach(([t, i]) => createSubCat(partsRoot, t, i));

      if (window.__outputTranslation) {
        const dict = {};
        [...Object.values(DATA_SETS), ...Object.values(DATA_PARTS)].flat().forEach(i => dict[i.en] = i.ja);
        window.__outputTranslation.register(dict);
      }
    },
    getTags() {
      const tags = [];
      const roots = document.querySelectorAll("#race-root-sets, #race-root-parts");
      roots.forEach(r => {
        r.querySelectorAll("input[type='checkbox']:checked").forEach(cb => {
            const val = cb.dataset.val || cb.dataset.en;
            if(val) tags.push(val);
        });
      });
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.race.v2.js ---
(function(){
  "use strict";
  const VERSION = 2; 
  const KEY = "race";

  const SETS_DATA = {
    "🐱 ケモミミ・獣人セット (Kemonomimi Sets)": [
      { label: "猫娘", val: "catgirl, cat ears, cat tail" },
      { label: "犬娘", val: "dog girl, dog ears, dog tail" },
      { label: "狐娘", val: "fox girl, fox ears, fox tail, fluffy tail" },
      { label: "ウサギ娘", val: "rabbit girl, rabbit ears, rabbit tail" },
      { label: "狼娘", val: "wolf girl, wolf ears, wolf tail" },
      { label: "タヌキ娘", val: "raccoon girl, raccoon ears, raccoon tail" },
      { label: "牛娘", val: "cow girl, cow ears, cow tail, horns" },
      { label: "羊娘", val: "sheep girl, sheep ears, sheep horns" },
      { label: "ネズミ娘", val: "mouse girl, mouse ears, mouse tail" },
      { label: "虎娘", val: "tiger girl, tiger ears, tiger tail, tiger stripes" }
    ]
  };

  const PARTS_DATA = {
    "👂 耳パーツ (Ears Only)": [
      { ja: "猫耳", en: "cat ears" }, { ja: "犬耳", en: "dog ears" },
      { ja: "狐耳", en: "fox ears" }, { ja: "ウサギ耳", en: "rabbit ears" },
      { ja: "垂れ耳", en: "floppy ears" }, { ja: "狼耳", en: "wolf ears" },
      { ja: "熊耳", en: "bear ears" }, { ja: "ネズミ耳", en: "mouse ears" },
      { ja: "尖った耳", en: "pointy ears" }, { ja: "ヘッドフォン", en: "headphones" }, 
      { ja: "偽の獣耳", en: "fake animal ears" }
    ],
    "🐈 尻尾パーツ (Tail Only)": [
      { ja: "猫尻尾", en: "cat tail" }, { ja: "犬尻尾", en: "dog tail" },
      { ja: "狐尻尾", en: "fox tail" }, { ja: "ウサギ尻尾", en: "rabbit tail" },
      { ja: "狼尻尾", en: "wolf tail" }, { ja: "悪魔の尻尾", en: "demon tail" },
      { ja: "複数の尻尾", en: "multiple tails" }, { ja: "九尾", en: "nine tails" },
      { ja: "長い尻尾", en: "long tail" }, { ja: "短い尻尾", en: "short tail" }
    ],
    "🐾 動物的特徴 (Animal Traits)": [
      { ja: "肉球", en: "paw pads" }, { ja: "動物の手", en: "paws" },
      { ja: "鋭い爪", en: "claws" }, { ja: "牙", en: "fangs" },
      { ja: "八重歯", en: "snaggletooth" }, { ja: "動物の鼻", en: "animal nose" },
      { ja: "ひげ", en: "whiskers" }, { ja: "体毛", en: "fur" },
      { ja: "スリット瞳", en: "slit pupils" }, { ja: "異形肌", en: "colored skin" }
    ]
  };

  const DICT = {
    "catgirl": "猫娘", "cat ears": "猫耳", "cat tail": "猫尻尾",
    "dog girl": "犬娘", "dog ears": "犬耳", "dog tail": "犬尻尾",
    "fox girl": "狐娘", "fox ears": "狐耳", "fox tail": "狐尻尾", "fluffy tail": "ふさふさ尻尾",
    "rabbit girl": "ウサギ娘", "rabbit ears": "ウサギ耳", "rabbit tail": "ウサギ尻尾",
    "wolf girl": "狼娘", "wolf ears": "狼耳", "wolf tail": "狼尻尾",
    "raccoon girl": "タヌキ娘", "raccoon ears": "タヌキ耳", "raccoon tail": "タヌキ尻尾",
    "cow girl": "牛娘", "cow ears": "牛耳", "cow tail": "牛尻尾", "horns": "角",
    "sheep girl": "羊娘", "sheep ears": "羊耳", "sheep horns": "羊の角",
    "mouse girl": "ネズミ娘", "mouse ears": "ネズミ耳", "mouse tail": "ネズミ尻尾",
    "tiger girl": "虎娘", "tiger ears": "虎耳", "tiger tail": "虎尻尾", "tiger stripes": "虎縞",
    "floppy ears": "垂れ耳", "bear ears": "熊耳", "pointy ears": "尖った耳",
    "headphones": "ヘッドフォン", "fake animal ears": "偽の獣耳", "demon tail": "悪魔の尻尾",
    "multiple tails": "複数の尻尾", "nine tails": "九尾", "long tail": "長い尻尾", "short tail": "短い尻尾",
    "paw pads": "肉球", "paws": "動物の手", "claws": "爪", "fangs": "牙",
    "snaggletooth": "八重歯", "animal nose": "動物の鼻", "whiskers": "ひげ",
    "fur": "体毛", "slit pupils": "縦長の瞳", "colored skin": "異色肌"
  };

  const API = {
    initUI() {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      const setsRoot = document.getElementById("race-root-sets-content");
      const partsRoot = document.getElementById("race-root-parts-content");
      if (!setsRoot || !partsRoot) return; 

      const createCat = (target, title, items) => {
        const details = document.createElement("details");
        details.className = "race-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
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
          cb.style.marginRight = "6px";
          
          if (item.val) { 
             cb.dataset.val = item.val;
             // ★修正: 連動機能を有効化
             cb.dataset.links = item.links; 
             label.title = item.val; 
             label.appendChild(cb); 
             label.appendChild(document.createTextNode(item.label)); 
          } else { 
             cb.dataset.en = item.en; // 互換性
             cb.dataset.val = item.en; // 新仕様
             label.appendChild(cb); 
             label.appendChild(document.createTextNode(`${item.ja}`)); 
          }
          content.appendChild(label);
        });
        details.appendChild(content);
        target.appendChild(details);
      };

      Object.entries(SETS_DATA).forEach(([t, i]) => createCat(setsRoot, t, i));
      Object.entries(PARTS_DATA).forEach(([t, i]) => createCat(partsRoot, t, i));
    },
    getTags() { return []; } 
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.race.v3.js ---
(function(){
  "use strict";
  const VERSION = 3; 
  const KEY = "race";

  const SETS_DATA = {
    "🧝 エルフ・亜人セット (Demihuman Sets)": [
      { label: "エルフセット", val: "elf, pointy ears, nature, forest background, green clothes" },
      { label: "ダークエルフセット", val: "dark elf, dark skin, white hair, pointy ears, glowing eyes" },
      { label: "ドワーフセット", val: "dwarf, short stature, beard, muscular, armor, holding axe" },
      { label: "オークセット", val: "orc, green skin, fangs, muscular, tribal clothes" },
      { label: "鬼・オーガセット", val: "oni, horns, tiger skin, kanabo, sharp teeth, japanese style" }
    ],
    "👼 天使・悪魔セット (Celestial/Abyssal Sets)": [
      { label: "天使セット", val: "angel, large wings, halo, white dress, holy light, feathers" },
      { label: "堕天使セット", val: "fallen angel, black wings, broken halo, dark atmosphere, gothic clothes" },
      { label: "悪魔セット", val: "demon, demon wings, horns, devil tail, sharp teeth, evil smile" },
      { label: "サキュバスセット", val: "succubus, bat wings, heart tail, horns, alluring pose" },
      { label: "ヴァンパイアセット", val: "vampire, fangs, pale skin, red eyes, coffin, gothic" },
      { label: "死神セット", val: "grim reaper, skeleton, holding scythe, black robe, hood, skull" }
    ],
    "😈 魔族セット (Demonic Race Sets)": [
      { label: "😈 魔族セット (Demonkin)", val: "demonkin, demonic humanoid, horns, devil tail, infernal aura, glowing eyes" },
      { label: "👑 高位魔族セット (Archdemon)", val: "archdemon, demonic royalty, large horns, ornate dark armor, hellfire aura, intimidating presence" }
    ],
    "🐉 ドラゴン娘セット (Dragon Girl Sets)": [
      { label: "🔥 火竜娘セット (Fire Dragon Girl)", val: "dragon girl, draconic humanoid, dragon horns, dragon tail, dragon wings, dragon scales, slit pupils, non-human fantasy anatomy, fire dragon girl, flame aura, ember particles, molten glow between scales, heat distortion, warm red-orange lighting", links:"dragon horns, dragon tail, dragon wings, dragon scales, slit pupils" },
      { label: "💧 水竜娘セット (Water Dragon Girl)", val: "dragon girl, draconic humanoid, dragon horns, dragon tail, dragon wings, dragon scales, slit pupils, non-human fantasy anatomy, water dragon girl, water aura, splashing water, flowing droplets, mist spray, blue lighting, wet scales", links:"dragon horns, dragon tail, dragon wings, dragon scales, slit pupils" },
      { label: "❄ 氷竜娘セット (Ice Dragon Girl)", val: "dragon girl, draconic humanoid, dragon horns, dragon tail, dragon wings, dragon scales, slit pupils, non-human fantasy anatomy, ice dragon girl, frost aura, crystalline scales, cold mist breath, snow particles, icy blue-white lighting", links:"dragon horns, dragon tail, dragon wings, dragon scales, slit pupils" },
      { label: "🌱 土竜娘セット (Earth Dragon Girl)", val: "dragon girl, draconic humanoid, dragon horns, dragon tail, dragon wings, dragon scales, slit pupils, non-human fantasy anatomy, earth dragon girl, stone-like scales, moss accents, dust particles, rugged texture, earthy tones", links:"dragon horns, dragon tail, dragon wings, dragon scales, slit pupils" },
      { label: "🪙 金竜娘セット (Metal/Gold Dragon Girl)", val: "dragon girl, draconic humanoid, dragon horns, dragon tail, dragon wings, dragon scales, slit pupils, non-human fantasy anatomy, metal dragon girl, golden scales, metallic sheen, reflective highlights, ornate armor accents, warm gold light", links:"dragon horns, dragon tail, dragon wings, dragon scales, slit pupils" },
      { label: "🌪 風竜娘セット (Wind Dragon Girl)", val: "dragon girl, draconic humanoid, dragon horns, dragon tail, dragon wings, dragon scales, slit pupils, non-human fantasy anatomy, wind dragon girl, wind aura, swirling air currents, flowing ribbons, motion blur, airy atmosphere", links:"dragon horns, dragon tail, dragon wings, dragon scales, slit pupils" },
      { label: "⚡ 雷竜娘セット (Lightning Dragon Girl)", val: "dragon girl, draconic humanoid, dragon horns, dragon tail, dragon wings, dragon scales, slit pupils, non-human fantasy anatomy, lightning dragon girl, electric aura, lightning arcs, charged particles, high contrast lighting", links:"dragon horns, dragon tail, dragon wings, dragon scales, slit pupils" },
      { label: "☀ 光竜娘セット (Light Dragon Girl)", val: "dragon girl, draconic humanoid, dragon horns, dragon tail, dragon wings, dragon scales, slit pupils, non-human fantasy anatomy, light dragon girl, radiant aura, holy glow, sun rays, shimmering particles, soft bloom", links:"dragon horns, dragon tail, dragon wings, dragon scales, slit pupils" },
      { label: "🌑 闇竜娘セット (Dark Dragon Girl)", val: "dragon girl, draconic humanoid, dragon horns, dragon tail, dragon wings, dragon scales, slit pupils, non-human fantasy anatomy, dark dragon girl, shadow aura, void mist, dark particles, ominous glow, low-key lighting", links:"dragon horns, dragon tail, dragon wings, dragon scales, slit pupils" }
    ],
    "🧚 妖精セット (Fairy Sets)": [
      { label: "🌸 花妖精セット (Flower Fairy)", val: "fairy, fairy wings, translucent wings, ethereal body, glowing skin, petite mythical anatomy, magical aura, floating, flower fairy, petals swirling, pollen sparkle, floral hair ornaments, pastel glow", links:"fairy wings, butterfly wings, pointy ears, flower crown, floating limbs, floating hair, fairy kei", links:"fairy wings, butterfly wings, pointy ears, flower crown, floating limbs, floating hair, fairy kei" },
      { label: "🔥 火妖精セット (Fire Fairy)", val: "fairy, fairy wings, translucent wings, ethereal body, glowing skin, petite mythical anatomy, magical aura, floating, fire fairy, flame aura, ember sparkles, warm glow", links:"fairy wings, butterfly wings, pointy ears, flower crown, floating limbs, floating hair, fairy kei" },
      { label: "💧 水妖精セット (Water Fairy)", val: "fairy, fairy wings, translucent wings, ethereal body, glowing skin, petite mythical anatomy, magical aura, floating, water fairy, water aura, droplets, soft mist, blue glow", links:"fairy wings, butterfly wings, pointy ears, flower crown, floating limbs, floating hair, fairy kei", links:"fairy wings, butterfly wings, pointy ears, flower crown, floating limbs, floating hair, fairy kei" },
      { label: "❄ 氷妖精セット (Ice Fairy)", val: "fairy, fairy wings, translucent wings, ethereal body, glowing skin, petite mythical anatomy, magical aura, floating, ice fairy, frost aura, snow sparkles, crystalline shimmer", links:"fairy wings, butterfly wings, pointy ears, flower crown, floating limbs, floating hair, fairy kei", links:"fairy wings, butterfly wings, pointy ears, flower crown, floating limbs, floating hair, fairy kei" },
      { label: "🌱 土妖精セット (Earth Fairy)", val: "fairy, fairy wings, translucent wings, ethereal body, glowing skin, petite mythical anatomy, magical aura, floating, earth fairy, leaf dust, moss accents, earthy glow", links:"fairy wings, butterfly wings, pointy ears, flower crown, floating limbs, floating hair, fairy kei", links:"fairy wings, butterfly wings, pointy ears, flower crown, floating limbs, floating hair, fairy kei" },
      { label: "🌪 風妖精セット (Wind Fairy)", val: "fairy, fairy wings, translucent wings, ethereal body, glowing skin, petite mythical anatomy, magical aura, floating, wind fairy, swirling air, flowing ribbons, airy particles", links:"fairy wings, butterfly wings, pointy ears, flower crown, floating limbs, floating hair, fairy kei", links:"fairy wings, butterfly wings, pointy ears, flower crown, floating limbs, floating hair, fairy kei" },
      { label: "⚡ 雷妖精セット (Lightning Fairy)", val: "fairy, fairy wings, translucent wings, ethereal body, glowing skin, petite mythical anatomy, magical aura, floating, lightning fairy, electric sparkles, lightning arcs, sharp contrast", links:"fairy wings, butterfly wings, pointy ears, flower crown, floating limbs, floating hair, fairy kei", links:"fairy wings, butterfly wings, pointy ears, flower crown, floating limbs, floating hair, fairy kei" },
      { label: "☀ 光妖精セット (Light Fairy)", val: "fairy, fairy wings, translucent wings, ethereal body, glowing skin, petite mythical anatomy, magical aura, floating, light fairy, radiant aura, sun rays, soft bloom", links:"fairy wings, butterfly wings, pointy ears, flower crown, floating limbs, floating hair, fairy kei", links:"fairy wings, butterfly wings, pointy ears, flower crown, floating limbs, floating hair, fairy kei" },
      { label: "🌑 闇妖精セット (Dark Fairy)", val: "fairy, fairy wings, translucent wings, ethereal body, glowing skin, petite mythical anatomy, magical aura, floating, dark fairy, shadow aura, void sparkles, low-key glow", links:"fairy wings, butterfly wings, pointy ears, flower crown, floating limbs, floating hair, fairy kei", links:"fairy wings, butterfly wings, pointy ears, flower crown, floating limbs, floating hair, fairy kei" }
    ],
    "🌊 海洋・深海セット (Aquatic/Deep Sea Sets)": [
      { label: "🧜 マーメイドセット (Mermaid)", val: "mermaid, fish tail, fins, seashells, underwater, bubbles" },
      { label: "🪼 クラゲ娘セット (Jellyfish Girl)", val: "jellyfish girl, translucent body, bioluminescence, tentacles, underwater, floating, glowing particles" },
      { label: "🦈 鮫娘セット (Shark Girl)", val: "shark girl, dorsal fin, sharp teeth, shark tail, ocean, water droplets, predatory eyes" }
    ],
    "🐉 伝説・精霊セット (Mythical Sets)": [
      { label: "雪女セット", val: "yuki-onna, pale skin, kimono, snow, ice breath, cold atmosphere" },
      { label: "天狗セット", val: "tengu, black wings, crow mask, traditional japanese clothes, holding fan" }
    ],
    "👻 アンデッド・異形セット (Undead Sets)": [
      { label: "キョンシーセット", val: "jiangshi, chinese zombie, talisman on forehead, qing dynasty clothes, stiff arms" },
      { label: "ゾンビセット", val: "zombie, undead, pale skin, stitches, scars, torn clothes" },
      { label: "ミイラセット", val: "mummy, bandaged, bandages covering body, ancient egypt style" },
      { label: "幽霊セット", val: "ghost, translucent, floating, white kimono, hitodama" }
    ]
  };

  const DICT = { "elf": "エルフ", "pointy ears": "尖った耳", "nature": "自然", "forest background": "森の背景", "green clothes": "緑の服", "dark elf": "ダークエルフ", "dark skin": "褐色肌", "white hair": "白髪", "glowing eyes": "光る目", "dwarf": "ドワーフ", "short stature": "低身長", "beard": "髭", "muscular": "筋肉質", "armor": "鎧", "holding axe": "斧を持つ", "orc": "オーク", "green skin": "緑肌", "fangs": "牙", "tribal clothes": "部族の服", "oni": "鬼", "horns": "角", "tiger skin": "虎柄", "kanabo": "金棒", "sharp teeth": "鋭い歯", "japanese style": "和風", "angel": "天使", "large wings": "大きな翼", "halo": "天使の輪", "white dress": "白いドレス", "holy light": "聖なる光", "feathers": "羽", "fallen angel": "堕天使", "black wings": "黒い翼", "broken halo": "壊れた輪", "dark atmosphere": "暗い雰囲気", "gothic clothes": "ゴシック服", "demon": "悪魔", "demon wings": "悪魔の翼", "devil tail": "悪魔の尻尾", "evil smile": "邪悪な笑み", "succubus": "サキュバス", "bat wings": "コウモリ翼", "heart tail": "ハート尻尾", "alluring pose": "魅惑的なポーズ", "vampire": "吸血鬼", "pale skin": "色白肌", "red eyes": "赤い目", "coffin": "棺桶", "gothic": "ゴシック", "grim reaper": "死神", "skeleton": "骸骨", "holding scythe": "大鎌を持つ", "black robe": "黒ローブ", "hood": "フード", "skull": "ドクロ", "dragon girl": "ドラゴン娘", "dragon wings": "竜の翼", "dragon tail": "竜の尻尾", "scales": "鱗", "claws": "爪", "fairy": "妖精", "translucent wings": "半透明の羽", "mini girl": "小人", "floating": "浮遊", "sparkles": "キラキラ", "mermaid": "人魚", "fish tail": "魚の尾", "fins": "ヒレ", "seashells": "貝殻", "underwater": "水中", "bubbles": "泡", "yuki-onna": "雪女", "kimono": "着物", "snow": "雪", "ice breath": "氷の息", "cold atmosphere": "冷たい雰囲気", "tengu": "天狗", "crow mask": "カラス天狗の面", "traditional japanese clothes": "和装", "holding fan": "扇子を持つ", "jiangshi": "キョンシー", "chinese zombie": "チャイニーズゾンビ", "talisman on forehead": "額にお札", "qing dynasty clothes": "清朝の服", "stiff arms": "硬直した腕", "zombie": "ゾンビ", "undead": "アンデッド", "stitches": "縫い目", "scars": "傷跡", "torn clothes": "破れた服", "mummy": "ミイラ", "bandaged": "包帯巻き", "bandages covering body": "全身包帯", "ancient egypt style": "古代エジプト風", "ghost": "幽霊", "translucent": "半透明", "white kimono": "白装束", "hitodama": "人魂" };

  const API = {
    initUI() {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      const setsRoot = document.getElementById("race-root-sets-content");
      if (!setsRoot) return; 

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "race-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f9f9f9; color:#555;";
        details.appendChild(summary);
        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(160px, 1fr)); gap:6px;";
        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          const cb = document.createElement("input"); 
          cb.type = "checkbox"; 
          cb.style.marginRight = "6px";
          
          // ★修正: 連動機能を有効化
          cb.dataset.val = item.val; 
          cb.dataset.links = item.links;
          
          label.title = item.val; 
          label.appendChild(cb); 
          label.appendChild(document.createTextNode(item.label));
          content.appendChild(label);
        });
        details.appendChild(content);
        setsRoot.appendChild(details);
      };

      Object.entries(SETS_DATA).forEach(([t, i]) => createCat(t, i));
    },
    getTags() { return []; }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.race.v4.js ---
(function(){
  "use strict";
  const VERSION = 4; 
  const KEY = "race";

  const PARTS_DATA_1 = {
    "🎨 肌色・スキンカラー (Skin Colors)": [
      { ja: "褐色肌", en: "dark skin" }, { ja: "日焼け肌", en: "tanned skin" },
      { ja: "色白", en: "pale skin" }, { ja: "アルビノ", en: "albino" },
      { ja: "青肌", en: "blue skin" }, { ja: "緑肌", en: "green skin" },
      { ja: "赤肌", en: "red skin" }, { ja: "紫肌", en: "purple skin" },
      { ja: "灰色の肌", en: "grey skin" }, { ja: "金属肌", en: "metallic skin" }
    ]
  };

  const SETS_DATA = {
    "🤖 メカ・サイボーグセット (Mecha Sets)": [
      { label: "アンドロイドセット", val: "android, artificial human, joints, mechanical parts, glowing lines" },
      { label: "サイボーグセット", val: "cyborg, mechanical limbs, half human, sci-fi, armor" },
      { label: "ドールセット", val: "ball-jointed doll, doll joints, artificial skin, porcelain skin" },
      { label: "メカ娘", val: "mecha girl, full armor, robot, helmet, futuristic weapons" },
      { label: "オートマタ", val: "automaton, clockwork, gears, steampunk, keyhole on back" }
    ],
    "🐍 異形・モンスター娘セット (Monster Sets)": [
      { label: "ラミアセット", val: "lamia, monster girl, snake body, snake tail, scales, long tail" },
      { label: "アラクネセット", val: "arachne, monster girl, spider body, spider legs, multiple eyes" },
      { label: "ケンタウロスセット", val: "centaur, monster girl, horse body, 4 legs, tail" },
      { label: "アルラウネセット", val: "alraune, monster girl, flower body, vines, petals, nature" },
      { label: "ハーピーセット", val: "harpy, monster girl, bird wings, bird legs, talons, feathers" },
      { label: "スライム娘セット", val: "slime girl, liquid body, translucent skin, glossy, melting" }
    ]
  };
  
  const PARTS_DATA_2 = {
    "💪 特殊な肉体パーツ (Body Traits)": [
      { ja: "多腕", en: "multiple arms, 4 arms" }, { ja: "多脚", en: "multiple legs" },
      { ja: "単眼", en: "cyclops, single eye" }, { ja: "三つ目", en: "third eye" },
      { ja: "複眼", en: "compound eyes" }, { ja: "異形頭", en: "object head" },
      { ja: "翼", en: "wings" }, { ja: "コウモリ翼", en: "bat wings" }
    ]
  };// --- Parts (Support): subtle add-ons to complement Full Sets ---
const PARTS_DATA_3 = {
  "🧩 パーツ（補助）角・突起 (Horns & Spikes)": [
    { ja: "小さな角（控えめ）", en: "small horns, subtle horns" },
    { ja: "短い角", en: "short horns" },
    { ja: "曲がった角（控えめ）", en: "curved horns, subtle" },
    { ja: "一本角（控えめ）", en: "single horn, subtle" },
    { ja: "棘（小）", en: "small spikes, subtle spikes" }
  ],
  "🧩 パーツ（補助）尾 (Tail)": [
    { ja: "細い尻尾", en: "thin tail" },
    { ja: "長い尻尾（控えめ）", en: "long tail, subtle" },
    { ja: "悪魔尾（先端スペード・控えめ）", en: "spade tail, subtle" },
    { ja: "獣尾（控えめ）", en: "fluffy tail, subtle" }
  ],
  "🧩 パーツ（補助）鱗・模様 (Scales - Partial)": [
    { ja: "局所鱗（頬/首/肩）", en: "subtle scales, partial scales, scales on cheeks, scales on neck, scales on shoulders" },
    { ja: "鱗模様（控えめ）", en: "scale pattern, subtle" },
    { ja: "虹彩鱗（控えめ）", en: "iridescent scales, subtle" }
  ],
  "🧩 パーツ（補助）ヒレ・鰓 (Fins & Gills)": [
    { ja: "背びれ（小）", en: "small dorsal fin" },
    { ja: "耳ヒレ（控えめ）", en: "ear fins, delicate fins" },
    { ja: "鰓（控えめ）", en: "gill slits, subtle" }
  ],
  "🧩 パーツ（補助）触手 (Tentacles - Subtle)": [
    { ja: "小さな触手（髪飾り風）", en: "small tentacles, hair-like tentacles, subtle tentacles" },
    { ja: "触手の尾（控えめ）", en: "tentacle tail, subtle" },
    { ja: "浮遊触手（控えめ）", en: "floating tentacle appendages, subtle" }
  ]
};

  const DICT = { "dark skin": "褐色肌", "tanned skin": "日焼け肌", "pale skin": "色白肌", "albino": "アルビノ", "blue skin": "青肌", "green skin": "緑肌", "red skin": "赤肌", "purple skin": "紫肌", "grey skin": "灰色の肌", "metallic skin": "金属肌", "android": "アンドロイド", "artificial human": "人造人間", "joints": "関節", "mechanical parts": "機械部品", "glowing lines": "光るライン", "cyborg": "サイボーグ", "mechanical limbs": "機械の四肢", "half human": "半人間", "sci-fi": "SF", "armor": "アーマー", "ball-jointed doll": "球体関節人形", "doll joints": "ドール関節", "artificial skin": "人工皮膚", "porcelain skin": "陶器の肌", "mecha girl": "メカ娘", "full armor": "フルアーマー", "robot": "ロボット", "helmet": "ヘルメット", "futuristic weapons": "未来的な武器", "automaton": "オートマタ", "clockwork": "時計仕掛け", "gears": "歯車", "steampunk": "スチームパンク", "keyhole on back": "背中の鍵穴", "lamia": "ラミア", "monster girl": "モンスター娘", "snake body": "蛇の体", "snake tail": "蛇の尾", "scales": "鱗", "long tail": "長い尻尾", "arachne": "アラクネ", "spider body": "蜘蛛の体", "spider legs": "蜘蛛の脚", "multiple eyes": "複数の目", "centaur": "ケンタウロス", "horse body": "馬の体", "4 legs": "四本足", "tail": "尻尾", "alraune": "アルラウネ", "flower body": "花の体", "vines": "ツタ", "petals": "花弁", "nature": "自然", "harpy": "ハーピー", "bird wings": "鳥の翼", "bird legs": "鳥の脚", "talons": "鉤爪", "feathers": "羽", "slime girl": "スライム娘", "liquid body": "液体の体", "translucent skin": "半透明の肌", "glossy": "光沢", "melting": "溶解", "multiple arms": "多腕", "4 arms": "4本腕", "multiple legs": "多脚", "cyclops": "単眼", "single eye": "一つ目", "third eye": "三つ目", "compound eyes": "複眼", "object head": "異形頭", "wings": "翼", "bat wings": "コウモリ翼" };

  const API = {
    initUI() {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      const setsRoot = document.getElementById("race-root-sets-content");
      const partsRoot = document.getElementById("race-root-parts-content");
      if (!setsRoot || !partsRoot) return; 

      const createCat = (target, title, items) => {
        const details = document.createElement("details");
        details.className = "race-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
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
          cb.style.marginRight = "6px";
          
          if (item.val) { 
             // ★修正: 連動機能を有効化
             cb.dataset.val = item.val; 
             cb.dataset.links = item.links;
             label.title = item.val; 
             label.appendChild(cb); 
             label.appendChild(document.createTextNode(item.label)); 
          } else { 
             cb.dataset.en = item.en; 
             cb.dataset.val = item.en;
             label.appendChild(cb); 
             label.appendChild(document.createTextNode(item.ja)); 
          }
          content.appendChild(label);
        });
        details.appendChild(content);
        target.appendChild(details);
      };

      Object.entries(PARTS_DATA_1).forEach(([t, i]) => createCat(partsRoot, t, i));
      Object.entries(SETS_DATA).forEach(([t, i]) => createCat(setsRoot, t, i));
      Object.entries(PARTS_DATA_2).forEach(([t, i]) => createCat(partsRoot, t, i));
      if (typeof PARTS_DATA_3 !== 'undefined') {
        Object.entries(PARTS_DATA_3).forEach(([t, i]) => createCat(partsRoot, t, i));
      }
    },
    getTags() { return []; }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.race.v5.js ---
(function(){
  "use strict";
  const VERSION = 5; 
  const KEY = "race";

  const WING_DATA = {
    "🪶 天使・鳥・生物翼 (Biological)": [
      { ja: "天使の翼 (白)", en: "angel wings, white wings, feathered wings" },
      { ja: "堕天使の翼 (黒)", en: "fallen angel wings, black wings, feathered wings" },
      { ja: "悪魔の翼 (コウモリ)", en: "demon wings, bat wings, membranous wings" },
      { ja: "ドラゴンの翼", en: "dragon wings, scales, huge wings" },
      { ja: "鳥の翼 (一般)", en: "bird wings" },
      { ja: "鷹/鷲の翼", en: "eagle wings, hawk wings, large wings" },
      { ja: "カラスの翼", en: "raven wings, crow wings, glossy black wings" },
      { ja: "フクロウの翼", en: "owl wings, fluffy wings" }
    ],
    "🦋 昆虫・妖精・植物翼 (Insect & Nature)": [
      { ja: "妖精の羽 (透明)", en: "fairy wings, translucent wings" },
      { ja: "蝶の羽 (バタフライ)", en: "butterfly wings, multicolored wings" },
      { ja: "蛾の羽 (モス)", en: "moth wings" },
      { ja: "トンボの羽", en: "dragonfly wings, iridescent wings" },
      { ja: "ハチの羽", en: "bee wings" },
      { ja: "花弁の翼 (花)", en: "flower wings, petal wings" },
      { ja: "葉っぱの翼", en: "leaf wings, plant wings" }
    ],
    "⚙️ メカ・SF・人工翼 (Artificial & Tech)": [
      { ja: "メカニカルウィング", en: "mechanical wings, robot wings, metal wings" },
      { ja: "スチームパンク翼 (歯車)", en: "steampunk wings, clockwork wings, gear wings, brass wings" },
      { ja: "サイバーパンク翼 (ネオン)", en: "cyberpunk wings, neon wings, glowing lines" },
      { ja: "光の翼 (ホログラム)", en: "holographic wings, energy wings, light wings, glowing wings" },
      { ja: "ジェットウィング (推進器)", en: "jet wings, thrusters, booster wings" },
      { ja: "ブレードウィング (刃)", en: "blade wings, sharp wings, sword wings" },
      { ja: "クリスタルウィング", en: "crystal wings, gem wings, prism wings" }
    ],
    "🔥 属性・魔法翼 (Elemental & Magic)": [
      { ja: "炎の翼", en: "fire wings, burning wings, wings of fire" },
      { ja: "氷の翼", en: "ice wings, frozen wings" },
      { ja: "水の翼", en: "water wings, liquid wings" },
      { ja: "雷の翼", en: "lightning wings, electric wings" },
      { ja: "影の翼", en: "shadow wings, darkness wings, smoky wings" },
      { ja: "骨の翼 (ボーン)", en: "bone wings, skeletal wings" },
      { ja: "触手の翼", en: "tentacle wings, fleshy wings" }
    ],
    "📐 形状・数・配置 (Shape & Arrange)": [
      { ja: "巨大な翼", en: "huge wings, wide wingspan" },
      { ja: "小さな翼", en: "tiny wings, small wings" },
      { ja: "片翼", en: "single wing, one winged" },
      { ja: "非対称な翼", en: "asymmetrical wings" },
      { ja: "4枚翼", en: "4 wings, multiple wings" },
      { ja: "6枚翼", en: "6 wings, seraphim wings" },
      { ja: "腰の翼", en: "wings on hips, waist wings" },
      { ja: "頭の翼", en: "wings on head, head wings" },
      { ja: "浮遊する翼", en: "detached wings, floating wings" },
      { ja: "折りたたんだ翼", en: "folded wings" },
      { ja: "広げた翼", en: "spread wings" }
    ]
  };

  const DICT = { "angel wings": "天使の翼", "white wings": "白い翼", "feathered wings": "羽毛の翼", "fallen angel wings": "堕天使の翼", "black wings": "黒い翼", "demon wings": "悪魔の翼", "bat wings": "コウモリ翼", "membranous wings": "皮膜の翼", "dragon wings": "ドラゴンの翼", "bird wings": "鳥の翼", "eagle wings": "鷲の翼", "raven wings": "カラスの翼", "owl wings": "フクロウの翼", "fairy wings": "妖精の羽", "translucent wings": "半透明の羽", "butterfly wings": "蝶の羽", "moth wings": "蛾の羽", "dragonfly wings": "トンボの羽", "flower wings": "花の羽", "mechanical wings": "機械翼", "robot wings": "ロボット翼", "metal wings": "金属翼", "steampunk wings": "スチームパンク翼", "clockwork wings": "時計仕掛けの翼", "cyberpunk wings": "サイバーパンク翼", "neon wings": "ネオン翼", "holographic wings": "ホログラム翼", "energy wings": "エネルギー翼", "jet wings": "ジェット翼", "blade wings": "刃の翼", "crystal wings": "水晶の翼", "fire wings": "炎の翼", "burning wings": "燃える翼", "ice wings": "氷の翼", "water wings": "水の翼", "lightning wings": "雷の翼", "shadow wings": "影の翼", "bone wings": "骨の翼", "tentacle wings": "触手の翼", "huge wings": "巨大な翼", "tiny wings": "小さな翼", "single wing": "片翼", "asymmetrical wings": "非対称の翼", "4 wings": "4枚翼", "6 wings": "6枚翼", "wings on hips": "腰に翼", "wings on head": "頭に翼", "detached wings": "浮遊翼", "folded wings": "折りたたんだ翼", "spread wings": "広げた翼" };

  const API = {
    initUI() {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      const partsRoot = document.getElementById("race-root-parts-content");
      if (!partsRoot) return;

      // ★ご要望対応: 翼コレクション全体を折りたたみ（初期閉じ）にする
      const wingsContainer = document.createElement("details");
      wingsContainer.className = "race-wings-container";
      wingsContainer.style.cssText = "margin-bottom:10px; border:2px dashed #bbb; border-radius:6px; background:#fff;";
      wingsContainer.open = false; // ★閉じた状態でスタート

      const mainSummary = document.createElement("summary");
      mainSummary.textContent = "🦇 Wings Collection (翼・ウィング)";
      mainSummary.style.cssText = "font-weight:bold; padding:10px; cursor:pointer; background:#eee; color:#333; font-size:1.0em;";
      wingsContainer.appendChild(mainSummary);

      const contentWrapper = document.createElement("div");
      contentWrapper.style.padding = "10px";

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "race-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f9f9f9; color:#555;";
        details.appendChild(summary);
        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(140px, 1fr)); gap:6px;";
        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          const cb = document.createElement("input"); cb.type = "checkbox"; cb.style.marginRight = "6px";
          cb.dataset.val = item.en; 
          label.appendChild(cb); label.appendChild(document.createTextNode(item.ja)); label.title = item.en;
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      Object.entries(WING_DATA).forEach(([cat, items]) => {
        contentWrapper.appendChild(createCat(cat, items));
      });

      wingsContainer.appendChild(contentWrapper);
      partsRoot.appendChild(wingsContainer);
    },
    getTags() { return []; }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

