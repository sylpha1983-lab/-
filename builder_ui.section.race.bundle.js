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
        summary.style.cssText = "padding:8px 10px; cursor:pointer; font-weight:bold;";
        details.appendChild(summary);
        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:8px;";
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
        details.style.cssText = "margin-bottom:8px; border:1px solid #ddd; border-radius:6px; background:#fafafa;";
        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "padding:8px 10px; cursor:pointer; font-weight:bold;";
        details.appendChild(summary);
        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:8px;";
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
      { label: "🦈 鮫娘セット (Shark Girl)", val: "shark girl, prominent dorsal fin, thick muscular shark tail, rows of serrated teeth, predatory eyes, gill slits, rough dermal denticles texture, apex predator aura, not cosplay, true biological fusion" },
      { label: "🐊 ワニ娘セット (Crocodile Girl)", val: "crocodile girl, armored reptilian scales, powerful jawline, serrated teeth, crocodile tail, dorsal scutes, slit pupils, ambush predator aura, not cosplay, true biological fusion" },
      { label: "🐍 蛇娘セット (Snake Girl)", val: "snake girl, scaled skin, serpentine tail, forked tongue, slit pupils, venomous fangs, coiling posture, cold predatory gaze, not cosplay, true biological fusion" },
      { label: "🐟 深海魚娘セット (Deep-Sea Fish Girl)", val: "deep sea fish girl, abyssal bioluminescence, anglerfish lure, translucent fins, irregular teeth, blackened scales, uncanny asymmetry, deep-sea predator aura, not cosplay, true biological fusion" }
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
        details.style.cssText = "margin-bottom:8px; border:1px solid #ddd; border-radius:6px; background:#fafafa;";
        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "padding:8px 10px; cursor:pointer; font-weight:bold;";
        details.appendChild(summary);
        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(160px, 1fr)); gap:8px;";
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
      { label: "ゴルゴン（種族）", val: "gorgon, serpent-haired being, ancient cursed race, scaled skin, reptilian slit pupils, petrifying gaze aura" },
      { label: "└ メデューサ型（安定生成）", val: "medusa, beautiful medusa, snake hair replacing normal hair, human upper body, single head, no hydra, no extra snakes except hair, petrifying gaze aura, elegant serpent queen presence" },
      { label: "└ 怪物型ゴルゴン", val: "monstrous gorgon, distorted serpent hair, heavy scales, fanged mouth, ancient curse presence, inhuman gaze" },
      { label: "└ ナーガ混成型", val: "gorgon naga hybrid, serpent hair, scaled upper body, serpentine lower form implied, cold reptilian presence" },

      { label: "ラミア（種族）", val: "lamia, monster girl, snake lower body, coiled tail, scales" },
      { label: "└ ブースト：質感・演出", val: "glossy scales, iridescent sheen, wet highlights, hypnotic gaze, eerie beauty" },
      { label: "└ 本命：ラミア（安定）", val: "lamia girl, human upper body, serpentine lower body, coiled tail, elegant pose, refined face" },
      { label: "└ 補助：変種・混成", val: "cobra hood motif, viper fangs, venomous aura, tail wrapping, temple ruins, moonlit fog" },

      { label: "アラクネ（種族）", val: "arachne, monster girl, spider lower body, web, silk threads" },
      { label: "└ ブースト：質感・演出", val: "silk shimmer, sticky strands, web glint, chitin reflections, night forest haze" },
      { label: "└ 本命：アラクネ（安定）", val: "arachne girl, human upper body, spider abdomen, multiple legs, web weaving pose, calm smile" },
      { label: "└ 補助：変種・混成", val: "black widow motif, orb-weaver pattern, cocoon props, predator stance, dungeon lair" },

      { label: "ケンタウロス（種族）", val: "centaur girl, human upper body, horse body, hooves, tail" },
      { label: "└ ブースト：質感・演出", val: "muscle definition, coat shine, flowing mane, dust motes, golden hour light" },
      { label: "└ 本命：ケンタウロス（安定）", val: "centaur heroine, graceful stance, archer posture, noble expression, fantasy armor accents" },
      { label: "└ 補助：変種・混成", val: "zebra stripes, unicorn horn, bard gear, forest clearing, gallop motion blur" },

      { label: "アルラウネ（種族）", val: "alraune, plant monster girl, flower petals, vine hair, floral scent" },
      { label: "└ ブースト：質感・演出", val: "pollen sparkles, dew drops, translucent petals, soft bioluminescence" },
      { label: "└ 本命：アルラウネ（安定）", val: "alraune girl, petal dress, vine ornaments, gentle smile, garden throne" },
      { label: "└ 補助：変種・混成", val: "poisonous bloom, thorny vines, carnivorous flower, misty greenhouse, fantasy forest" },

      { label: "ハーピー（種族）", val: "harpy girl, bird wings, talons, feathers, avian" },
      { label: "└ ブースト：質感・演出", val: "feather gloss, wind gusts, sky particles, sun flare, high altitude" },
      { label: "└ 本命：ハーピー（安定）", val: "harpy maiden, wide wings spread, perched pose, confident look, cliff edge" },
      { label: "└ 補助：変種・混成", val: "owl eyes, raven feathers, siren song vibe, storm clouds, dynamic dive" },

      { label: "スライム（種族）", val: "slime girl, gelatin body, translucent skin, goo, liquid form" },
      { label: "└ ブースト：質感・演出", val: "refraction, caustics, glossy wet surface, bubbles inside, dripping trails" },
      { label: "└ 本命：スライム（安定）", val: "slime girl, semi-transparent body, cute expression, gentle pose, soft glow" },
      { label: "└ 補助：変種・混成", val: "colored slime gradients, crystal slime, metallic slime, laboratory glass, neon lighting" },

      { label: "ドライアド（種族）", val: "dryad, tree spirit girl, bark texture, leaf hair, forest guardian" },
      { label: "└ ブースト：質感・演出", val: "moss detail, bark pores, floating leaves, god rays, woodland particles" },
      { label: "└ 本命：ドライアド（安定）", val: "dryad girl, wooden skin accents, leaf dress, serene eyes, ancient tree backdrop" },
      { label: "└ 補助：変種・混成", val: "autumn leaves, sakura petals, hollow tree altar, spirit wisps, enchanted forest" },
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
  "🦄 角・突起 (Horns & Spikes)": [
    { ja: "小さな角（控えめ）", en: "small horns, subtle horns" },
    { ja: "短い角", en: "short horns" },
    { ja: "曲がった角（控えめ）", en: "curved horns, subtle" },
    { ja: "一本角（控えめ）", en: "single horn, subtle" },
    { ja: "棘（小）", en: "small spikes, subtle spikes" }
  ],
  "👤 頭部パーツ (Head Parts)": [
    { ja: "触角（細）", en: "thin antennae, delicate antennae" },
    { ja: "昆虫触角", en: "insect antennae" },
    { ja: "角ばった触角", en: "segmented antennae" },
    { ja: "額の第三の目", en: "third eye on forehead" },
    { ja: "追加の目（頬まわり）", en: "extra eyes on face, extra eyes near cheeks" },
    { ja: "発光する瞳", en: "glowing eyes" },
    { ja: "縦長の瞳孔", en: "vertical slit pupils" },
    { ja: "蛇髪（控えめ）", en: "snake hair, subtle medusa hair" },
    { ja: "ひれ耳（頭部）", en: "head fins, fin-like ears" },
    { ja: "鰭冠・頭頂ヒレ", en: "crest fin, head crest fin" },
    { ja: "エラ飾り（頬）", en: "gill fins on cheeks, cheek fins" },
    { ja: "牙（長め）", en: "long fangs" }
  ],
  "🦊 尾 (Tail)": [
    { ja: "細い尻尾", en: "thin tail" },
    { ja: "長い尻尾（控えめ）", en: "long tail, subtle" },
    { ja: "悪魔尾（先端スペード・控えめ）", en: "spade tail, subtle" },
    { ja: "獣尾（控えめ）", en: "fluffy tail, subtle" }
  ],
  "🦎 鱗・模様 (Scales - Partial)": [
    { ja: "局所鱗（頬/首/肩）", en: "subtle scales, partial scales, scales on cheeks, scales on neck, scales on shoulders" },
    { ja: "鱗模様（控えめ）", en: "scale pattern, subtle" },
    { ja: "虹彩鱗（控えめ）", en: "iridescent scales, subtle" }
  ],
  "🐟 ヒレ・鰓 (Fins & Gills)": [
    { ja: "背びれ（小）", en: "small dorsal fin" },
    { ja: "耳ヒレ（控えめ）", en: "ear fins, delicate fins" },
    { ja: "鰓（控えめ）", en: "gill slits, subtle" }
  ],
  "🐙 触手 (Tentacles - Subtle)": [
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
        details.style.cssText = "margin-bottom:8px; border:1px solid #ddd; border-radius:6px; background:#fafafa;";

        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:8px 10px; cursor:pointer; background:#f9f9f9; color:#555;";
        details.appendChild(summary);

        const content = document.createElement("div");

        const getLabelText = (it) => (it.label || it.ja || "").trim();
        // └ が含まれているかチェック（シマエナガ型・棚化の判定）
        const hasIndented = items.some(it => getLabelText(it).startsWith("└"));

        if (hasIndented) {
          // ▼▼▼ 修正版：シマエナガ風の棚表示ロジック ▼▼▼
          content.style.cssText = "padding:12px 8px; display:flex; flex-direction:column; gap:16px;";

          // チェックボックス＆テキストを作る共通関数
          const makeCheckboxCard = (it, isHead = false) => {
            const label = document.createElement("label");

            // 親（種族名）か、子（ブースト等）かでデザインを分ける
            if (isHead) {
              label.style.cssText = "display:flex; align-items:flex-start; gap:8px; cursor:pointer; padding:10px 12px; background:#eff6ff; border-bottom:1px solid #bfdbfe; font-weight:bold; color:#1e3a8a; width:100%; box-sizing:border-box;";
            } else {
              label.style.cssText = "display:flex; align-items:flex-start; gap:6px; cursor:pointer; padding:8px; border:1px solid #e5e7eb; border-radius:6px; background:#fff; font-size:0.9em; width:100%; box-sizing:border-box; box-shadow:0 1px 2px rgba(0,0,0,0.02);";
            }

            const cb = document.createElement("input");
            cb.type = "checkbox";
            cb.style.marginTop = "3px";

            const v = it.val || it.en;
            if (v) cb.dataset.val = v;
            if (it.links) cb.dataset.links = it.links;
            label.title = v || "";

            label.appendChild(cb);

            const txt = document.createElement("span");
            txt.style.cssText = "line-height:1.4; word-break:break-word;";
            txt.textContent = getLabelText(it).replace(/^└\s*/, "");
            label.appendChild(txt);

            return label;
          };

          // 棚（箱）を組み立てる関数
          const makeShelf = (head, children) => {
            const shelf = document.createElement("div");
            shelf.className = "race-shelf";
            shelf.style.cssText = "border:2px dashed #60a5fa; border-radius:8px; background:#f8fafc; overflow:hidden; display:flex; flex-direction:column; width:100%; box-sizing:border-box;";

            // 1. ヘッダー（親要素）
            shelf.appendChild(makeCheckboxCard(head, true));

            // 2. 子要素グリッド
            const grid = document.createElement("div");
            grid.style.cssText = "padding:10px; display:grid; grid-template-columns:repeat(auto-fill, minmax(150px, 1fr)); gap:8px; width:100%; box-sizing:border-box;";

            children.forEach(ch => {
              grid.appendChild(makeCheckboxCard(ch, false));
            });

            shelf.appendChild(grid);
            return shelf;
          };

          // データを親と子に振り分けて箱を生成
          let currentHead = null;
          let currentChildren = [];
          const flush = () => {
            if (!currentHead) return;
            content.appendChild(makeShelf(currentHead, currentChildren));
            currentHead = null;
            currentChildren = [];
          };

          items.forEach(it => {
            const name = getLabelText(it);
            if (!name.startsWith("└")) {
              flush();
              currentHead = it;
            } else {
              currentChildren.push(it);
            }
          });
          flush();
          // ▲▲▲ 修正版ロジック ここまで ▲▲▲

        } else {
          // 従来通りのフラット表示（└がない場合）
          content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(140px, 1fr)); gap:8px;";
          items.forEach(item => {
            const label = document.createElement("label");
            label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
            const cb = document.createElement("input");
            cb.type = "checkbox";
            cb.style.marginRight = "6px";

            if (item.val) {
              cb.dataset.val = item.val;
              if (item.links) cb.dataset.links = item.links;
              label.title = item.val;
              label.appendChild(cb);
              label.appendChild(document.createTextNode(item.label));
            } else {
              cb.dataset.val = item.en;
              label.title = item.en;
              label.appendChild(cb);
              label.appendChild(document.createTextNode(item.ja));
            }
            content.appendChild(label);
          });
        }

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
      wingsContainer.style.cssText = "margin-bottom:8px; border:1px solid #ddd; border-radius:6px; background:#fafafa;";
      wingsContainer.open = false; // ★閉じた状態でスタート

      const mainSummary = document.createElement("summary");
      mainSummary.textContent = "🪽 Wings Collection (翼・ウィング)";
      mainSummary.style.cssText = "padding:8px 10px; cursor:pointer; font-weight:bold;";
      wingsContainer.appendChild(mainSummary);

      const contentWrapper = document.createElement("div");
      contentWrapper.style.padding = "10px";

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "race-cat";
        details.style.cssText = "margin-bottom:8px; border:1px solid #ddd; border-radius:6px; background:#fafafa;";
        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "padding:8px 10px; cursor:pointer; font-weight:bold;";
        details.appendChild(summary);
        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(140px, 1fr)); gap:8px;";
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



(function(){
// --- builder_ui.section.race.v6.js ---
(function(){
  "use strict";
  const VERSION = 6;
  const KEY = "race";

  const MARINE_PARTS_DATA = {
    "🦈 海洋パーツ (Marine Traits)": [
      { ja: "背びれ", en: "prominent dorsal fin" },
      { ja: "大型の背びれ", en: "large dorsal fin" },
      { ja: "鮫の尾", en: "thick muscular shark tail" },
      { ja: "しなる鮫尾", en: "powerful shark tail" },
      { ja: "鰓裂", en: "gill slits" },
      { ja: "首の鰓裂", en: "gill slits on neck" },
      { ja: "鋸歯状の歯列", en: "rows of serrated teeth" },
      { ja: "鮫の歯", en: "shark teeth" },
      { ja: "鮫肌", en: "rough dermal denticles texture" },
      { ja: "控えめな鱗肌", en: "subtle body scales" },
      { ja: "捕食者の目", en: "predatory eyes" },
      { ja: "捕食者の笑み", en: "predatory shark smile" },
      { ja: "水棲オーラ", en: "aquatic creature aura" },
      { ja: "頂点捕食者の気配", en: "apex predator aura" }
    ]
  };

  const DICT = {
    "prominent dorsal fin": "背びれ",
    "large dorsal fin": "大型の背びれ",
    "thick muscular shark tail": "鮫の尾",
    "powerful shark tail": "しなる鮫尾",
    "gill slits": "鰓裂",
    "gill slits on neck": "首の鰓裂",
    "rows of serrated teeth": "鋸歯状の歯列",
    "shark teeth": "鮫の歯",
    "rough dermal denticles texture": "鮫肌",
    "subtle body scales": "控えめな鱗肌",
    "predatory eyes": "捕食者の目",
    "predatory shark smile": "捕食者の笑み",
    "aquatic creature aura": "水棲オーラ",
    "apex predator aura": "頂点捕食者の気配"
  };

  const API = {
    initUI() {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      const partsRoot = document.getElementById("race-root-parts-content");
      if (!partsRoot) return;
      if (partsRoot.querySelector('.race-marine-container')) return;

      const marineContainer = document.createElement("details");
      marineContainer.className = "race-marine-container";
      marineContainer.style.cssText = "margin-bottom:10px; border:2px dashed #63b3ed; border-radius:6px; background:#fff;";
      marineContainer.open = false;

      const mainSummary = document.createElement("summary");
      mainSummary.textContent = "🦈 Marine Traits Collection (海洋パーツ)";
      mainSummary.style.cssText = "font-weight:bold; padding:10px; cursor:pointer; background:#e6f4ff; color:#234; font-size:1.0em;";
      marineContainer.appendChild(mainSummary);

      const contentWrapper = document.createElement("div");
      contentWrapper.style.padding = "10px";

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "race-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #d7ebff; border-radius:4px; background:#fff;";
        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f5fbff; color:#345;";
        details.appendChild(summary);
        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(140px, 1fr)); gap:8px;";
        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.style.marginRight = "6px";
          cb.dataset.val = item.en;
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.ja));
          label.title = item.en;
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      Object.entries(MARINE_PARTS_DATA).forEach(([cat, items]) => {
        contentWrapper.appendChild(createCat(cat, items));
      });

      marineContainer.appendChild(contentWrapper);

      const wingsContainer = partsRoot.querySelector('.race-wings-container');
      if (wingsContainer && wingsContainer.parentNode === partsRoot) {
        partsRoot.insertBefore(marineContainer, wingsContainer);
      } else {
        partsRoot.appendChild(marineContainer);
      }
    },
    getTags() { return []; }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

})();


(function(){
// --- builder_ui.section.race.v7.js ---
(function(){
  "use strict";
  const VERSION = 7;
  const KEY = "race";

  const DRAGON_PARTS_DATA = {
    "🐉 竜パーツ (Dragon Traits)": [
      { ja: "竜の角", en: "dragon horns" },
      { ja: "大型の竜角", en: "large dragon horns" },
      { ja: "湾曲した竜角", en: "curved dragon horns" },
      { ja: "竜の翼", en: "dragon wings" },
      { ja: "大型の竜翼", en: "large dragon wings" },
      { ja: "革質の竜翼", en: "leathery dragon wings" },
      { ja: "竜の尾", en: "dragon tail" },
      { ja: "長い竜尾", en: "long dragon tail" },
      { ja: "先端の尖った竜尾", en: "spaded dragon tail" },
      { ja: "竜鱗", en: "dragon scales" },
      { ja: "結晶の竜鱗", en: "crystalline dragon scales" },
      { ja: "発光する竜眼", en: "glowing dragon eyes" },
      { ja: "縦長の竜瞳", en: "slit pupils" },
      { ja: "竜のオーラ", en: "draconic aura" },
      { ja: "古竜の気配", en: "ancient dragon presence" }
    ]
  };

  const DICT = {
    "dragon horns": "竜の角",
    "large dragon horns": "大型の竜角",
    "curved dragon horns": "湾曲した竜角",
    "dragon wings": "竜の翼",
    "large dragon wings": "大型の竜翼",
    "leathery dragon wings": "革質の竜翼",
    "dragon tail": "竜の尾",
    "long dragon tail": "長い竜尾",
    "spaded dragon tail": "先端の尖った竜尾",
    "dragon scales": "竜鱗",
    "crystalline dragon scales": "結晶の竜鱗",
    "glowing dragon eyes": "発光する竜眼",
    "slit pupils": "縦長の竜瞳",
    "draconic aura": "竜のオーラ",
    "ancient dragon presence": "古竜の気配"
  };

  const API = {
    initUI() {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      const partsRoot = document.getElementById("race-root-parts-content");
      if (!partsRoot) return;
      if (partsRoot.querySelector('.race-dragon-container')) return;

      const dragonContainer = document.createElement("details");
      dragonContainer.className = "race-dragon-container";
      dragonContainer.style.cssText = "margin-bottom:10px; border:2px dashed #9f7aea; border-radius:6px; background:#fff;";
      dragonContainer.open = false;

      const mainSummary = document.createElement("summary");
      mainSummary.textContent = "🐉 Dragon Traits Collection (竜パーツ)";
      mainSummary.style.cssText = "font-weight:bold; padding:10px; cursor:pointer; background:#f3ecff; color:#3b2b59; font-size:1.0em;";
      dragonContainer.appendChild(mainSummary);

      const contentWrapper = document.createElement("div");
      contentWrapper.style.padding = "10px";

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "race-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #e5dbff; border-radius:4px; background:#fff;";
        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#faf7ff; color:#4d3b75;";
        details.appendChild(summary);
        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(140px, 1fr)); gap:8px;";
        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.style.marginRight = "6px";
          cb.dataset.val = item.en;
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.ja));
          label.title = item.en;
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      Object.entries(DRAGON_PARTS_DATA).forEach(([cat, items]) => {
        contentWrapper.appendChild(createCat(cat, items));
      });

      dragonContainer.appendChild(contentWrapper);

      const marineContainer = partsRoot.querySelector('.race-marine-container');
      const wingsContainer = partsRoot.querySelector('.race-wings-container');
      if (marineContainer && marineContainer.parentNode === partsRoot) {
        partsRoot.insertBefore(dragonContainer, marineContainer.nextSibling);
      } else if (wingsContainer && wingsContainer.parentNode === partsRoot) {
        partsRoot.insertBefore(dragonContainer, wingsContainer);
      } else {
        partsRoot.appendChild(dragonContainer);
      }
    },
    getTags() { return []; }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

})();


(function(){
// --- builder_ui.section.race.v8.js ---
(function(){
  "use strict";
  const VERSION = 8;
  const KEY = "race";

  const CELESTIAL_PARTS_DATA = {
    "😇 天使パーツ (Celestial Traits)": [
      { ja: "光輪", en: "halo" },
      { ja: "壊れた光輪", en: "broken halo" },
      { ja: "天使の翼", en: "angel wings" },
      { ja: "白い羽翼", en: "white feathered wings" },
      { ja: "聖なる羽", en: "holy feathers" },
      { ja: "神聖なオーラ", en: "divine aura" },
      { ja: "聖印", en: "holy sigils" },
      { ja: "神々しい瞳", en: "radiant holy eyes" },
      { ja: "天使の気配", en: "celestial presence" }
    ],
    "👑 天使位階パーツ (Celestial Rank Traits)": [
      { ja: "多重光輪", en: "multiple halo rings" },
      { ja: "層状光輪", en: "layered halo rings" },
      { ja: "王冠状光輪", en: "crown halo" },
      { ja: "6枚翼", en: "6 wings" },
      { ja: "多翼の天使", en: "many-winged angel" },
      { ja: "燃える聖翼", en: "burning holy wings" },
      { ja: "審判の神眼", en: "divine judgment eyes" },
      { ja: "浮遊する聖印", en: "floating holy sigils" },
      { ja: "玉座の光輪", en: "throne halo ring" },
      { ja: "熾天の威光", en: "seraphic radiance" }
    ]
  };

  const DEMON_PARTS_DATA = {
    "😈 悪魔パーツ (Demonic Traits)": [
      { ja: "悪魔の角", en: "demon horns" },
      { ja: "大型の悪魔角", en: "large demon horns" },
      { ja: "湾曲した悪魔角", en: "curved demon horns" },
      { ja: "コウモリ翼", en: "bat wings" },
      { ja: "大型のコウモリ翼", en: "large bat wings" },
      { ja: "悪魔の尾", en: "demon tail" },
      { ja: "スペード状の悪魔尾", en: "spade demon tail" },
      { ja: "発光する魔眼", en: "glowing demonic eyes" },
      { ja: "縦長の魔瞳", en: "demonic slit pupils" },
      { ja: "悪魔のオーラ", en: "demonic aura" },
      { ja: "地獄火の気配", en: "hellfire aura" },
      { ja: "禍々しい気配", en: "dark demonic presence" }
    ],
    "👑 悪魔位階パーツ (Infernal Rank Traits)": [
      { ja: "王冠状の悪魔角", en: "crown-like demon horns" },
      { ja: "深淵の巨角", en: "abyssal giant horns" },
      { ja: "魔王級の翼", en: "demon king wings" },
      { ja: "黒き堕天翼", en: "black fallen wings" },
      { ja: "砕けた堕天光輪", en: "shattered fallen halo" },
      { ja: "地獄の王の魔眼", en: "hell sovereign eyes" },
      { ja: "浮遊する呪印", en: "floating curse sigils" },
      { ja: "深淵王の威圧", en: "abyssal sovereign presence" },
      { ja: "魔炎の外套", en: "hellfire mantle" },
      { ja: "大悪魔の気配", en: "archdemon presence" }
    ]
  };

  const DICT = {
    "halo": "光輪",
    "broken halo": "壊れた光輪",
    "angel wings": "天使の翼",
    "white feathered wings": "白い羽翼",
    "holy feathers": "聖なる羽",
    "divine aura": "神聖なオーラ",
    "holy sigils": "聖印",
    "radiant holy eyes": "神々しい瞳",
    "celestial presence": "天使の気配",
    "multiple halo rings": "多重光輪",
    "layered halo rings": "層状光輪",
    "crown halo": "王冠状光輪",
    "6 wings": "6枚翼",
    "many-winged angel": "多翼の天使",
    "burning holy wings": "燃える聖翼",
    "divine judgment eyes": "審判の神眼",
    "floating holy sigils": "浮遊する聖印",
    "throne halo ring": "玉座の光輪",
    "seraphic radiance": "熾天の威光",
    "demon horns": "悪魔の角",
    "large demon horns": "大型の悪魔角",
    "curved demon horns": "湾曲した悪魔角",
    "bat wings": "コウモリ翼",
    "large bat wings": "大型のコウモリ翼",
    "demon tail": "悪魔の尾",
    "spade demon tail": "スペード状の悪魔尾",
    "glowing demonic eyes": "発光する魔眼",
    "demonic slit pupils": "縦長の魔瞳",
    "demonic aura": "悪魔のオーラ",
    "hellfire aura": "地獄火の気配",
    "dark demonic presence": "禍々しい気配",
    "crown-like demon horns": "王冠状の悪魔角",
    "abyssal giant horns": "深淵の巨角",
    "demon king wings": "魔王級の翼",
    "black fallen wings": "黒き堕天翼",
    "shattered fallen halo": "砕けた堕天光輪",
    "hell sovereign eyes": "地獄の王の魔眼",
    "floating curse sigils": "浮遊する呪印",
    "abyssal sovereign presence": "深淵王の威圧",
    "hellfire mantle": "魔炎の外套",
    "archdemon presence": "大悪魔の気配"
  };

  const API = {
    initUI() {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      const partsRoot = document.getElementById("race-root-parts-content");
      if (!partsRoot) return;
      if (partsRoot.querySelector('.race-celestial-demonic-container')) return;

      const groupContainer = document.createElement("details");
      groupContainer.className = "race-celestial-demonic-container race-demon-container";
      groupContainer.style.cssText = "margin-bottom:10px; border:2px dashed #e2a7d6; border-radius:6px; background:#fff; width:100%; box-sizing:border-box;";
      groupContainer.open = false;

      const mainSummary = document.createElement("summary");
      mainSummary.textContent = "😇😈 Celestial/Abyssal Traits Collection (天使・悪魔パーツ)";
      mainSummary.style.cssText = "font-weight:bold; padding:10px; cursor:pointer; background:#fff6fb; color:#5f2f55; font-size:1.0em; word-break:break-word; overflow-wrap:anywhere;";
      groupContainer.appendChild(mainSummary);

      const contentWrapper = document.createElement("div");
      contentWrapper.style.padding = "10px";

      const createCat = (title, items, theme) => {
        const details = document.createElement("details");
        details.className = "race-cat";
        details.style.cssText = `margin-bottom:8px; border:1px solid ${theme.border}; border-radius:4px; background:#fff; width:100%; box-sizing:border-box;`;
        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = `font-weight:bold; padding:6px 10px; cursor:pointer; background:${theme.summaryBg}; color:${theme.summaryColor}; word-break:break-word; overflow-wrap:anywhere;`;
        details.appendChild(summary);
        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(140px, 1fr)); gap:8px;";
        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer; word-break:break-word; overflow-wrap:anywhere;";
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.style.marginRight = "6px";
          cb.dataset.val = item.en;
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.ja));
          label.title = item.en;
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const celestialTheme = { border: '#d9dfff', summaryBg: '#f7f9ff', summaryColor: '#334a8a' };
      const demonicTheme = { border: '#ffd7d7', summaryBg: '#fff7f7', summaryColor: '#7a3333' };

      Object.entries(CELESTIAL_PARTS_DATA).forEach(([cat, items]) => {
        contentWrapper.appendChild(createCat(cat, items, celestialTheme));
      });
      Object.entries(DEMON_PARTS_DATA).forEach(([cat, items]) => {
        contentWrapper.appendChild(createCat(cat, items, demonicTheme));
      });

      groupContainer.appendChild(contentWrapper);

      const dragonContainer = partsRoot.querySelector('.race-dragon-container');
      const wingsContainer = partsRoot.querySelector('.race-wings-container');
      if (dragonContainer && dragonContainer.parentNode === partsRoot) {
        partsRoot.insertBefore(groupContainer, dragonContainer.nextSibling);
      } else if (wingsContainer && wingsContainer.parentNode === partsRoot) {
        partsRoot.insertBefore(groupContainer, wingsContainer);
      } else {
        partsRoot.appendChild(groupContainer);
      }
    },
    getTags() { return []; }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.race.v9.js ---
(function(){
  "use strict";
  const VERSION = 9;
  const KEY = "race";

  const VAMPIRE_PARTS_DATA = {
    "🦇 吸血鬼パーツ (Vampire Traits)": [
      { ja: "吸血牙", en: "vampire fangs" },
      { ja: "長い吸血牙", en: "long vampire fangs" },
      { ja: "青白い吸血肌", en: "pale vampire skin" },
      { ja: "赤い吸血眼", en: "crimson vampire eyes" },
      { ja: "妖しい吸血眼", en: "mesmerizing vampire eyes" },
      { ja: "コウモリ翼", en: "bat wings" },
      { ja: "大型のコウモリ翼", en: "large bat wings" },
      { ja: "貴族的な闇オーラ", en: "dark noble aura" },
      { ja: "血への渇き", en: "bloodlust aura" },
      { ja: "夜の支配者の気配", en: "lord of the night presence" }
    ]
  };

  const DICT = {
    "vampire fangs": "吸血牙",
    "long vampire fangs": "長い吸血牙",
    "pale vampire skin": "青白い吸血肌",
    "crimson vampire eyes": "赤い吸血眼",
    "mesmerizing vampire eyes": "妖しい吸血眼",
    "dark noble aura": "貴族的な闇オーラ",
    "bloodlust aura": "血への渇き",
    "lord of the night presence": "夜の支配者の気配"
  };

  const API = {
    initUI() {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      const partsRoot = document.getElementById("race-root-parts-content");
      if (!partsRoot) return;
      if (partsRoot.querySelector('.race-vampire-container')) return;

      const vampireContainer = document.createElement("details");
      vampireContainer.className = "race-vampire-container";
      vampireContainer.style.cssText = "margin-bottom:10px; border:2px dashed #7b4fa1; border-radius:6px; background:#fff;";
      vampireContainer.open = false;

      const mainSummary = document.createElement("summary");
      mainSummary.textContent = "🦇 Vampire Traits Collection (吸血鬼パーツ)";
      mainSummary.style.cssText = "font-weight:bold; padding:10px; cursor:pointer; background:#f7f0ff; color:#40205f; font-size:1.0em;";
      vampireContainer.appendChild(mainSummary);

      const contentWrapper = document.createElement("div");
      contentWrapper.style.padding = "10px";

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "race-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eadcff; border-radius:4px; background:#fff;";
        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#fcf9ff; color:#5b3b77;";
        details.appendChild(summary);
        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(140px, 1fr)); gap:8px;";
        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.style.marginRight = "6px";
          cb.dataset.val = item.en;
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.ja));
          label.title = item.en;
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      Object.entries(VAMPIRE_PARTS_DATA).forEach(([cat, items]) => {
        contentWrapper.appendChild(createCat(cat, items));
      });

      vampireContainer.appendChild(contentWrapper);

      const demonContainer = partsRoot.querySelector('.race-demon-container');
      const wingsContainer = partsRoot.querySelector('.race-wings-container');
      if (demonContainer && demonContainer.parentNode === partsRoot) {
        partsRoot.insertBefore(vampireContainer, demonContainer.nextSibling);
      } else if (wingsContainer && wingsContainer.parentNode === partsRoot) {
        partsRoot.insertBefore(vampireContainer, wingsContainer);
      } else {
        partsRoot.appendChild(vampireContainer);
      }
    },
    getTags() { return []; }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

})();


(function(){
// --- builder_ui.section.race.v10.js ---
(function(){
  "use strict";
  const VERSION = 10;
  const KEY = "race";

  const SERPENT_PARTS_DATA = {
    "🐍 蛇鱗パーツ (Serpent Traits)": [
      { ja: "蛇鱗", en: "snake scales" },
      { ja: "控えめな蛇鱗", en: "subtle snake scales" },
      { ja: "蛇の下半身", en: "snake lower body" },
      { ja: "長い蛇尾", en: "long serpentine tail" },
      { ja: "蛇の巻き付き", en: "coiled serpent body" },
      { ja: "二股の舌", en: "forked tongue" },
      { ja: "爬虫類の目", en: "reptilian eyes" },
      { ja: "縦長の蛇瞳", en: "serpent slit pupils" },
      { ja: "メデューサの蛇髪", en: "medusa hair snakes" },
      { ja: "首元の蛇鱗", en: "snake scales on neck" },
      { ja: "冷血のオーラ", en: "cold-blooded aura" },
      { ja: "蛇の気配", en: "serpent aura" },
      { ja: "石化の魔性", en: "petrifying presence" }
    ]
  };

  const DICT = {
    "snake scales": "蛇鱗",
    "subtle snake scales": "控えめな蛇鱗",
    "snake lower body": "蛇の下半身",
    "long serpentine tail": "長い蛇尾",
    "coiled serpent body": "蛇の巻き付き",
    "forked tongue": "二股の舌",
    "reptilian eyes": "爬虫類の目",
    "serpent slit pupils": "縦長の蛇瞳",
    "medusa hair snakes": "メデューサの蛇髪",
    "snake scales on neck": "首元の蛇鱗",
    "cold-blooded aura": "冷血のオーラ",
    "serpent aura": "蛇の気配",
    "petrifying presence": "石化の魔性"
  };

  const API = {
    initUI() {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      const partsRoot = document.getElementById("race-root-parts-content");
      if (!partsRoot) return;
      if (partsRoot.querySelector('.race-serpent-container')) return;

      const serpentContainer = document.createElement("details");
      serpentContainer.className = "race-serpent-container";
      serpentContainer.style.cssText = "margin-bottom:10px; border:2px dashed #5bb37b; border-radius:6px; background:#fff;";
      serpentContainer.open = false;

      const mainSummary = document.createElement("summary");
      mainSummary.textContent = "🐍 Serpent Traits Collection (蛇鱗パーツ)";
      mainSummary.style.cssText = "font-weight:bold; padding:10px; cursor:pointer; background:#eefcf2; color:#20482d; font-size:1.0em;";
      serpentContainer.appendChild(mainSummary);

      const contentWrapper = document.createElement("div");
      contentWrapper.style.padding = "10px";

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "race-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #d7f0df; border-radius:4px; background:#fff;";
        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f8fff9; color:#2f6340;";
        details.appendChild(summary);
        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(140px, 1fr)); gap:8px;";
        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.style.marginRight = "6px";
          cb.dataset.val = item.en;
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.ja));
          label.title = item.en;
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      Object.entries(SERPENT_PARTS_DATA).forEach(([cat, items]) => {
        contentWrapper.appendChild(createCat(cat, items));
      });

      serpentContainer.appendChild(contentWrapper);

      const vampireContainer = partsRoot.querySelector('.race-vampire-container');
      const wingsContainer = partsRoot.querySelector('.race-wings-container');
      if (vampireContainer && vampireContainer.parentNode === partsRoot) {
        partsRoot.insertBefore(serpentContainer, vampireContainer.nextSibling);
      } else if (wingsContainer && wingsContainer.parentNode === partsRoot) {
        partsRoot.insertBefore(serpentContainer, wingsContainer);
      } else {
        partsRoot.appendChild(serpentContainer);
      }
    },
    getTags() { return []; }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

})();


(function(){
// --- builder_ui.section.race.v11.js ---
(function(){
  "use strict";
  const VERSION = 11;
  const KEY = "race";

  function textOfSummary(node){
    const sum = node && node.querySelector(':scope > summary');
    return sum ? (sum.textContent || '').trim() : '';
  }

  function getBySummaryContains(root, needle){
    return Array.from(root.children).find(el => textOfSummary(el).includes(needle)) || null;
  }

  function ensureOrder(root, nodes){
    const frag = document.createDocumentFragment();
    const used = new Set();
    nodes.forEach(node => {
      if (node && node.parentNode === root && !used.has(node)) {
        frag.appendChild(node);
        used.add(node);
      }
    });
    Array.from(root.children).forEach(node => {
      if (!used.has(node)) frag.appendChild(node);
    });
    root.appendChild(frag);
  }

  const API = {
    initUI() {
      const partsRoot = document.getElementById('race-root-parts-content');
      if (!partsRoot) return;

      const marine = partsRoot.querySelector('.race-marine-container');
      const dragon = partsRoot.querySelector('.race-dragon-container');
      const demon = partsRoot.querySelector('.race-demon-container');
      const vampire = partsRoot.querySelector('.race-vampire-container');
      const serpent = partsRoot.querySelector('.race-serpent-container');
      const wings = partsRoot.querySelector('.race-wings-container');

      const skinTypes = getBySummaryContains(partsRoot, '肌の色・スキン属性');
      const skinColors = getBySummaryContains(partsRoot, '肌色・スキンカラー');
      const scales = getBySummaryContains(partsRoot, '鱗・模様');
      const horns = getBySummaryContains(partsRoot, '角・突起');
      const ears = getBySummaryContains(partsRoot, '耳パーツ');
      const bodyTraits = getBySummaryContains(partsRoot, '特殊な肉体パーツ');
      const finsGills = getBySummaryContains(partsRoot, 'ヒレ・鰓');
      const tentacles = getBySummaryContains(partsRoot, '触手');
      const tailOnly = getBySummaryContains(partsRoot, '尻尾パーツ');
      const animalTraits = getBySummaryContains(partsRoot, '動物的特徴');
      const auxTail = getBySummaryContains(partsRoot, 'パーツ（補助） 尾');

      ensureOrder(partsRoot, [
        marine,
        dragon,
        demon,
        vampire,
        serpent,
        skinTypes,
        skinColors,
        scales,
        horns,
        ears,
        bodyTraits,
        finsGills,
        tentacles,
        tailOnly,
        animalTraits,
        auxTail,
        wings
      ]);
    },
    getTags() { return []; }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();


(function(){
// --- builder_ui.section.race.v12.js ---
(function(){
  "use strict";
  const VERSION = 12;
  const KEY = "race";

  function textOfSummary(node){
    const sum = node && node.querySelector(':scope > summary');
    return sum ? (sum.textContent || '').trim() : '';
  }

  function getBySummaryContains(root, needle){
    return Array.from(root.children).find(el => textOfSummary(el).includes(needle)) || null;
  }

  function getContentBox(details){
    return details ? details.querySelector(':scope > div') : null;
  }

  function makeLabel(item, checked){
    const label = document.createElement('label');
    label.style.cssText = 'display:flex; align-items:center; font-size:0.9em; cursor:pointer;';
    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.dataset.en = item.en;
    cb.style.marginRight = '6px';
    if (checked) cb.checked = true;
    label.appendChild(cb);
    label.appendChild(document.createTextNode(item.ja));
    return label;
  }

  function collectState(...detailsNodes){
    const state = new Map();
    detailsNodes.forEach(details => {
      const box = getContentBox(details);
      if (!box) return;
      box.querySelectorAll('label').forEach(label => {
        const cb = label.querySelector('input[type="checkbox"]');
        if (!cb) return;
        const en = (cb.dataset.en || cb.dataset.val || '').trim();
        if (!en) return;
        const ja = label.textContent.trim();
        if (!state.has(en)) state.set(en, { ja, checked: !!cb.checked });
        else if (cb.checked) state.get(en).checked = true;
      });
    });
    return state;
  }

  function fillBox(details, items, state){
    const box = getContentBox(details);
    if (!box) return;
    box.innerHTML = '';
    items.forEach(item => {
      const st = state.get(item.en);
      box.appendChild(makeLabel(item, !!(st && st.checked)));
    });
  }

  const SKIN_COLORS = [
    { ja: '褐色肌', en: 'dark skin' },
    { ja: '日焼け肌', en: 'tanned skin' },
    { ja: '色白', en: 'pale skin' },
    { ja: 'アルビノ', en: 'albino' },
    { ja: '異色肌', en: 'colored skin' },
    { ja: '青肌', en: 'blue skin' },
    { ja: '緑肌', en: 'green skin' },
    { ja: '赤肌', en: 'red skin' },
    { ja: '紫肌', en: 'purple skin' },
    { ja: '灰色の肌', en: 'grey skin' }
  ];

  const SKIN_TRAITS = [
    { ja: '金属肌', en: 'metallic skin' },
    { ja: '光沢肌', en: 'glossy skin' },
    { ja: '濡れた肌', en: 'wet skin' },
    { ja: 'オイリー肌', en: 'oily skin' },
    { ja: '半透明肌', en: 'translucent skin' },
    { ja: '結晶肌', en: 'crystalline skin' },
    { ja: '石肌', en: 'stone skin' },
    { ja: 'なめらかな肌', en: 'smooth skin' },
    { ja: 'ざらついた肌', en: 'rough skin' }
  ];

  const API = {
    initUI() {
      const partsRoot = document.getElementById('race-root-parts-content');
      if (!partsRoot) return;

      const skinTraits = getBySummaryContains(partsRoot, '肌の色・スキン属性')
        || getBySummaryContains(partsRoot, 'スキン属性');
      const skinColors = getBySummaryContains(partsRoot, '肌色・スキンカラー')
        || getBySummaryContains(partsRoot, 'スキンカラー');
      if (!skinTraits || !skinColors) return;

      const state = collectState(skinTraits, skinColors);

      const traitsSummary = skinTraits.querySelector(':scope > summary');
      const colorsSummary = skinColors.querySelector(':scope > summary');
      if (traitsSummary) traitsSummary.textContent = '🧬 スキン属性 (Skin Traits)';
      if (colorsSummary) colorsSummary.textContent = '🎨 スキンカラー (Skin Colors)';

      fillBox(skinTraits, SKIN_TRAITS, state);
      fillBox(skinColors, SKIN_COLORS, state);
    },
    getTags() { return []; }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();


(function(){
// --- builder_ui.section.race.v14.js ---
(function(){
  "use strict";
  const VERSION = 14;
  const KEY = "race";

  const EYE_TRAITS_DATA = {
    "👁 Eye Traits (目パーツ)": [
      { ja: "発光する目", en: "glowing eyes" },
      { ja: "赤い発光眼", en: "glowing red eyes" },
      { ja: "青い発光眼", en: "glowing blue eyes" },
      { ja: "金色の瞳", en: "golden eyes" },
      { ja: "虹彩異色", en: "heterochromia" },
      { ja: "縦長の瞳孔", en: "vertical slit pupils" },
      { ja: "爬虫類の瞳", en: "reptilian eyes" },
      { ja: "猫の瞳", en: "catlike eyes" },
      { ja: "蛇の眼差し", en: "serpentine gaze" },
      { ja: "悪魔の瞳", en: "demonic eyes" },
      { ja: "吸血鬼の赤眼", en: "crimson vampire eyes" },
      { ja: "竜眼", en: "draconic eyes" },
      { ja: "複眼", en: "compound eyes" },
      { ja: "追加の目", en: "multiple eyes" },
      { ja: "額の第三の目", en: "third eye on forehead" },
      { ja: "石化の魔眼", en: "petrifying eyes" },
      { ja: "星の瞳", en: "starry eyes" },
      { ja: "機械眼", en: "cybernetic eye" }
    ]
  };

  const DICT = {
    "glowing eyes": "発光する目",
    "glowing red eyes": "赤い発光眼",
    "glowing blue eyes": "青い発光眼",
    "golden eyes": "金色の瞳",
    "heterochromia": "虹彩異色",
    "vertical slit pupils": "縦長の瞳孔",
    "reptilian eyes": "爬虫類の瞳",
    "catlike eyes": "猫の瞳",
    "serpentine gaze": "蛇の眼差し",
    "demonic eyes": "悪魔の瞳",
    "crimson vampire eyes": "吸血鬼の赤眼",
    "draconic eyes": "竜眼",
    "compound eyes": "複眼",
    "multiple eyes": "追加の目",
    "third eye on forehead": "額の第三の目",
    "petrifying eyes": "石化の魔眼",
    "starry eyes": "星の瞳",
    "cybernetic eye": "機械眼"
  };

  function textOfSummary(node){
    const sum = node && node.querySelector(':scope > summary');
    return sum ? (sum.textContent || '').trim() : '';
  }

  function getBySummaryContains(root, needle){
    return Array.from(root.children).find(el => textOfSummary(el).includes(needle)) || null;
  }

  const API = {
    initUI() {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      const partsRoot = document.getElementById('race-root-parts-content');
      if (!partsRoot) return;
      if (partsRoot.querySelector('.race-eye-container')) return;

      const eyeContainer = document.createElement('details');
      eyeContainer.className = 'race-eye-container';
      eyeContainer.style.cssText = 'margin-bottom:8px; border:1px solid #ddd; border-radius:6px; background:#fafafa;';
      eyeContainer.open = false;

      const mainSummary = document.createElement('summary');
      mainSummary.textContent = '👁 目パーツ (Eye Traits Collection)';
      mainSummary.style.cssText = 'padding:8px 10px; cursor:pointer; font-weight:bold;';
      eyeContainer.appendChild(mainSummary);

      const contentWrapper = document.createElement('div');
      contentWrapper.style.padding = '10px';

      Object.entries(EYE_TRAITS_DATA).forEach(([cat, items]) => {
        const details = document.createElement('details');
        details.className = 'race-cat';
        details.style.cssText = 'margin-bottom:8px; border:1px solid #ddd; border-radius:6px; background:#fafafa;';

        const summary = document.createElement('summary');
        summary.textContent = cat;
        summary.style.cssText = 'padding:8px 10px; cursor:pointer; font-weight:bold;';
        details.appendChild(summary);

        const content = document.createElement('div');
        content.style.cssText = 'padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(140px, 1fr)); gap:8px;';
        items.forEach(item => {
          const label = document.createElement('label');
          label.style.cssText = 'display:flex; align-items:center; font-size:0.9em; cursor:pointer;';
          const cb = document.createElement('input');
          cb.type = 'checkbox';
          cb.style.marginRight = '6px';
          cb.dataset.val = item.en;
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.ja));
          label.title = item.en;
          content.appendChild(label);
        });
        details.appendChild(content);
        contentWrapper.appendChild(details);
      });

      eyeContainer.appendChild(contentWrapper);

      const headParts = getBySummaryContains(partsRoot, '頭部パーツ');
      const ears = getBySummaryContains(partsRoot, '耳パーツ');
      if (headParts && headParts.nextSibling) {
        partsRoot.insertBefore(eyeContainer, headParts.nextSibling);
      } else if (ears) {
        partsRoot.insertBefore(eyeContainer, ears);
      } else {
        partsRoot.appendChild(eyeContainer);
      }
    },
    getTags() { return []; }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();


(function(){
(function(){
  "use strict";
  const VERSION = 15;
  const KEY = "race";

  const MOUTH_TRAITS_DATA = {
    "🦷 Mouth Traits Collection (口パーツ)": [
      { ja: "牙", en: "fangs" },
      { ja: "吸血牙", en: "vampire fangs" },
      { ja: "長く鋭い牙", en: "long sharp fangs" },
      { ja: "獣牙", en: "beast fangs" },
      { ja: "悪魔の牙", en: "demon fangs" },
      { ja: "竜牙", en: "dragon fangs" },
      { ja: "爬虫類の歯", en: "reptilian teeth" },
      { ja: "鮫の歯", en: "shark teeth" },
      { ja: "鋸歯状の歯", en: "serrated teeth" },
      { ja: "針のような歯", en: "needle teeth" },
      { ja: "複数列の歯", en: "multiple rows of teeth" },
      { ja: "発光する口内", en: "glowing mouth" },
      { ja: "炎を宿す口", en: "fiery breath mouth" },
      { ja: "毒液を滴らせる牙", en: "venom dripping fangs" },
      { ja: "二股の蛇舌", en: "forked serpent tongue" },
      { ja: "長い悪魔の舌", en: "long demon tongue" },
      { ja: "怪物の大顎", en: "monster maw" },
      { ja: "裂けた顎", en: "split jaw" }
    ]
  };

  function pickHelpers() {
    const H = window.__BUILDER_RACE_UI_HELPERS__ || {};
    return {
      textOfSummary: H.textOfSummary || (el => ((el && el.querySelector && el.querySelector(':scope > summary')) || {}).textContent || ''),
      getBySummaryContains: H.getBySummaryContains || ((root, needle) => Array.from(root.children).find(el => (((el && el.querySelector && el.querySelector(':scope > summary')) || {}).textContent || '').includes(needle)) || null),
      appendPromptCheckbox: H.appendPromptCheckbox || ((wrap, item) => {
        const label = document.createElement('label');
        label.style.cssText = 'display:block; margin:6px 0;';
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.dataset.tagJa = item.ja;
        input.dataset.tagEn = item.en;
        input.style.marginRight = '6px';
        label.appendChild(input);
        label.appendChild(document.createTextNode(item.ja));
        wrap.appendChild(label);
      })
    };
  }

  const API = {
    render(root) {
      if (!root || root.querySelector('[data-race-mouth-v15="1"]')) return;
      const partsRoot = root.querySelector('.race-parts-root, .parts-root') || root;
      const { getBySummaryContains, appendPromptCheckbox } = pickHelpers();

      const mouthContainer = document.createElement('details');
      mouthContainer.dataset.raceMouthV15 = '1';
      mouthContainer.className = 'race-mouth-container';
      mouthContainer.style.cssText = 'margin-bottom:10px; border:2px dashed #f6ad55; border-radius:6px; background:#fff;';
      mouthContainer.open = false;

      const mainSummary = document.createElement('summary');
      mainSummary.textContent = '🦷 Mouth Traits Collection (口パーツ)';
      mainSummary.style.cssText = 'font-weight:bold; padding:10px; cursor:pointer; background:#fff8f0; color:#633; font-size:1.0em;';
      mouthContainer.appendChild(mainSummary);

      const contentWrapper = document.createElement('div');
      contentWrapper.style.padding = '10px';

      Object.entries(MOUTH_TRAITS_DATA).forEach(([cat, items]) => {
        const details = document.createElement('details');
        details.className = 'race-cat';
        details.style.cssText = 'margin-bottom:8px; border:1px solid #ddd; border-radius:6px; background:#fafafa;';
        const summary = document.createElement('summary');
        summary.textContent = cat;
        summary.style.cssText = 'padding:8px 10px; cursor:pointer; font-weight:bold;';
        details.appendChild(summary);
        const content = document.createElement('div');
        content.style.cssText = 'padding:8px 10px;';
        items.forEach(item => appendPromptCheckbox(content, item));
        details.appendChild(content);
        contentWrapper.appendChild(details);
      });

      mouthContainer.appendChild(contentWrapper);

      const eye = getBySummaryContains(partsRoot, 'Eye Traits');
      const ears = getBySummaryContains(partsRoot, '耳パーツ');
      const horns = getBySummaryContains(partsRoot, '角・突起');
      if (eye && eye.nextSibling) {
        partsRoot.insertBefore(mouthContainer, eye.nextSibling);
      } else if (ears) {
        partsRoot.insertBefore(mouthContainer, ears);
      } else if (horns) {
        partsRoot.insertBefore(mouthContainer, horns);
      } else {
        partsRoot.appendChild(mouthContainer);
      }
    },
    getTags() { return []; }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();


(function(){
// --- builder_ui.section.race.v18.js ---
(function(){
  "use strict";
  const VERSION = 18;
  const KEY = "race";

  function getSummaryText(el){
    const s = el && el.querySelector ? el.querySelector(':scope > summary') : null;
    return (s ? s.textContent : el?.textContent || '').trim();
  }

  function pickNodes(root, matchers){
    const pool = Array.from(root.children);
    const picked = [];
    for (const matcher of matchers){
      const idx = pool.findIndex(el => matcher(getSummaryText(el), el));
      if (idx >= 0){
        picked.push(pool[idx]);
        pool.splice(idx, 1);
      }
    }
    return picked;
  }

  function makeSection(title, color, openDefault){
    const wrap = document.createElement('section');
    wrap.className = 'race-group-block';
    wrap.style.cssText = [
      'display:block',
      'width:100%',
      'max-width:none',
      'box-sizing:border-box',
      'margin:0 0 12px 0',
      'border:2px solid ' + color,
      'border-radius:12px',
      'background:#fff',
      'overflow:hidden'
    ].join(';');

    const head = document.createElement('button');
    head.type = 'button';
    head.setAttribute('aria-expanded', openDefault ? 'true' : 'false');
    head.style.cssText = [
      'display:flex',
      'align-items:center',
      'justify-content:space-between',
      'gap:10px',
      'width:100%',
      'padding:10px 12px',
      'font-weight:700',
      'font-size:1.02em',
      'line-height:1.35',
      'color:#333',
      'background:' + color + '18',
      'border:0',
      'text-align:left',
      'cursor:pointer',
      'word-break:break-word'
    ].join(';');

    const titleSpan = document.createElement('span');
    titleSpan.textContent = title;
    titleSpan.style.cssText = [
      'flex:1 1 auto',
      'min-width:0',
      'white-space:normal',
      'word-break:break-word',
      'overflow-wrap:anywhere'
    ].join(';');

    const chevron = document.createElement('span');
    chevron.textContent = openDefault ? '▼' : '▶';
    chevron.style.cssText = [
      'flex:0 0 auto',
      'font-size:0.95em',
      'line-height:1',
      'opacity:0.9'
    ].join(';');

    const body = document.createElement('div');
    body.className = 'race-group-body';
    body.style.cssText = [
      'display:' + (openDefault ? 'block' : 'none'),
      'width:100%',
      'max-width:none',
      'box-sizing:border-box',
      'padding:10px',
      'overflow:hidden'
    ].join(';');

    head.addEventListener('click', () => {
      const open = body.style.display !== 'none';
      body.style.display = open ? 'none' : 'block';
      chevron.textContent = open ? '▶' : '▼';
      head.setAttribute('aria-expanded', open ? 'false' : 'true');
    });

    head.appendChild(titleSpan);
    head.appendChild(chevron);
    wrap.appendChild(head);
    wrap.appendChild(body);
    return {wrap, body};
  }

  function normalizeChild(el){
    if (!el || !el.style) return;
    el.style.width = '100%';
    el.style.maxWidth = 'none';
    el.style.boxSizing = 'border-box';
    el.style.marginBottom = '10px';
    const summary = el.querySelector(':scope > summary');
    if (summary){
      summary.style.whiteSpace = 'normal';
      summary.style.wordBreak = 'break-word';
      summary.style.overflowWrap = 'anywhere';
      summary.style.lineHeight = '1.3';
    }
    el.querySelectorAll('label, span, div').forEach(node => {
      if (!node.style) return;
      node.style.wordBreak = 'break-word';
      node.style.overflowWrap = 'anywhere';
    });
  }

  const API = {
    initUI(){
      setTimeout(() => {
        const partsRoot = document.getElementById('race-root-parts-content');
        if (!partsRoot) return;
        if (partsRoot.dataset.speciesReorgDone === '18') return;
        partsRoot.dataset.speciesReorgDone = '18';

        // remove old reorg wrappers if any
        Array.from(partsRoot.querySelectorAll(':scope > .race-group-block')).forEach(n => n.remove());

        const all = Array.from(partsRoot.children).filter(el => !el.classList.contains('race-group-block'));
        if (!all.length) return;

        const speciesMatchers = [
          t => t.includes('Marine Traits') || t.includes('海洋パーツ'),
          t => t.includes('Dragon Traits') || t.includes('竜パーツ'),
          t => t.includes('Celestial/Abyssal Traits') || t.includes('天使・悪魔パーツ') || t.includes('Demonic Traits') || t.includes('悪魔パーツ') || t.includes('Celestial Traits') || t.includes('天使パーツ'),
          t => t.includes('Vampire Traits') || t.includes('吸血鬼パーツ'),
          t => t.includes('Serpent Traits') || t.includes('蛇鱗パーツ'),
          t => t.includes('Beast Traits') || t.includes('獣系パーツ'),
          t => t.includes('Insect Traits') || t.includes('昆虫パーツ') || t.includes('昆虫種族パーツ'),
        ];
        const headMatchers = [
          t => t.includes('Head Parts') || t.includes('頭部パーツ'),
          t => t.includes('Eye Traits') || t.includes('目パーツ'),
          t => t.includes('Mouth Traits') || t.includes('口パーツ'),
          t => t.includes('Ears Only') || t.includes('耳パーツ'),
          t => t.includes('Horns & Spikes') || t.includes('角・突起'),
        ];
        const bodyMatchers = [
          t => t.includes('Skin Traits') || t.includes('スキン属性') || t.includes('肌の色・スキン属性'),
          t => t.includes('Skin Colors') || t.includes('スキンカラー') || t.includes('肌色・スキンカラー'),
          t => t.includes('Scales - Partial') || t.includes('鱗・模様'),
          t => t.includes('Wings Collection') || t.includes('翼・ウィング'),
          t => t.includes('Body Traits') || t.includes('特殊な肉体パーツ'),
          t => t.includes('Animal Traits') || t.includes('動物的特徴'),
          t => t.includes('Fins & Gills') || t.includes('ヒレ・鰓'),
          t => t.includes('Tentacles - Subtle') || t.includes('触手'),
          t => t.includes('Tail Only') || t.includes('尻尾パーツ'),
          t => t.includes('パーツ（補助）尾') || (t.includes('Tail)') && t.includes('補助')),
        ];

        const speciesNodes = pickNodes(partsRoot, speciesMatchers);
        const headNodes = pickNodes(partsRoot, headMatchers);
        const bodyNodes = pickNodes(partsRoot, bodyMatchers);
        const remaining = Array.from(partsRoot.children).filter(el => !speciesNodes.includes(el) && !headNodes.includes(el) && !bodyNodes.includes(el));

        partsRoot.innerHTML = '';
        partsRoot.style.display = 'block';
        partsRoot.style.width = '100%';
        partsRoot.style.maxWidth = 'none';
        partsRoot.style.boxSizing = 'border-box';

        const appendSection = (title, color, nodes, openDefault) => {
          if (!nodes.length) return;
          const sec = makeSection(title, color, openDefault === true);
          nodes.forEach(n => {
            normalizeChild(n);
            sec.body.appendChild(n);
          });
          partsRoot.appendChild(sec.wrap);
        };

        appendSection('🧬 種族パーツ (Species Traits)', '#4CAF50', speciesNodes, false);
        appendSection('🧠 頭部・顔パーツ (Head & Face)', '#7E57C2', headNodes, false);
        appendSection('🧍 身体・付属パーツ (Body & Attachments)', '#26A69A', bodyNodes, false);
        appendSection('🧩 その他パーツ (Misc Parts)', '#90A4AE', remaining, false);
      }, 140);
    },
    getTags(){ return []; }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();


(function(){
// --- builder_ui.section.race.v19.beast.js ---
(function(){
  "use strict";
  const VERSION = 19;
  const KEY = "race";

  const BEAST_PARTS_DATA = {
    "🐾 獣系パーツ (Beast Traits)": [
      { ja: "獣耳", en: "animal ears" },
      { ja: "狐耳", en: "fox ears" },
      { ja: "狼耳", en: "wolf ears" },
      { ja: "猫耳", en: "cat ears" },
      { ja: "獣の牙", en: "beast fangs" },
      { ja: "獣の爪", en: "beast claws" },
      { ja: "狐尾", en: "fox tail" },
      { ja: "複数の狐尾", en: "multiple fox tails" },
      { ja: "狼尾", en: "wolf tail" },
      { ja: "猫尾", en: "cat tail" },
      { ja: "獣脚", en: "digitigrade legs" },
      { ja: "肉球の手", en: "paw hands" },
      { ja: "肉球の足", en: "paw feet" },
      { ja: "獣の瞳", en: "feral eyes" },
      { ja: "野性のオーラ", en: "wild beast aura" },
      { ja: "獣化の気配", en: "bestial presence" }
    ]
  };

  const DICT = {
    "animal ears": "獣耳",
    "fox ears": "狐耳",
    "wolf ears": "狼耳",
    "cat ears": "猫耳",
    "beast fangs": "獣の牙",
    "beast claws": "獣の爪",
    "fox tail": "狐尾",
    "multiple fox tails": "複数の狐尾",
    "wolf tail": "狼尾",
    "cat tail": "猫尾",
    "digitigrade legs": "獣脚",
    "paw hands": "肉球の手",
    "paw feet": "肉球の足",
    "feral eyes": "獣の瞳",
    "wild beast aura": "野性のオーラ",
    "bestial presence": "獣化の気配"
  };

  const API = {
    initUI() {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      const partsRoot = document.getElementById("race-root-parts-content");
      if (!partsRoot) return;
      if (partsRoot.querySelector('.race-beast-container')) return;

      const beastContainer = document.createElement("details");
      beastContainer.className = "race-beast-container";
      beastContainer.style.cssText = "margin-bottom:10px; border:2px dashed #8bc34a; border-radius:6px; background:#fff; width:100%; box-sizing:border-box;";
      beastContainer.open = false;

      const mainSummary = document.createElement("summary");
      mainSummary.textContent = "🐾 Beast Traits Collection (獣系パーツ)";
      mainSummary.style.cssText = "font-weight:bold; padding:10px; cursor:pointer; background:#f3fde7; color:#335522; font-size:1.0em; word-break:break-word; overflow-wrap:anywhere;";
      beastContainer.appendChild(mainSummary);

      const contentWrapper = document.createElement("div");
      contentWrapper.style.padding = "10px";

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "race-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #d9efbe; border-radius:4px; background:#fff; width:100%; box-sizing:border-box;";
        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#fbfff6; color:#46622b; word-break:break-word; overflow-wrap:anywhere;";
        details.appendChild(summary);
        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(140px, 1fr)); gap:8px;";
        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer; word-break:break-word; overflow-wrap:anywhere;";
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.style.marginRight = "6px";
          cb.dataset.val = item.en;
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.ja));
          label.title = item.en;
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      Object.entries(BEAST_PARTS_DATA).forEach(([cat, items]) => {
        contentWrapper.appendChild(createCat(cat, items));
      });

      beastContainer.appendChild(contentWrapper);

      const serpentContainer = partsRoot.querySelector('.race-serpent-container');
      const wingsContainer = partsRoot.querySelector('.race-wings-container');
      if (serpentContainer && serpentContainer.parentNode === partsRoot) {
        if (serpentContainer.nextSibling) {
          partsRoot.insertBefore(beastContainer, serpentContainer.nextSibling);
        } else {
          partsRoot.appendChild(beastContainer);
        }
      } else if (wingsContainer && wingsContainer.parentNode === partsRoot) {
        partsRoot.insertBefore(beastContainer, wingsContainer);
      } else {
        partsRoot.appendChild(beastContainer);
      }
    },
    getTags(){ return []; }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();
})();


(function(){
// --- builder_ui.section.race.v20.insect.js ---
(function(){
  "use strict";
  const VERSION = 20;
  const KEY = "race";

  const INSECT_PARTS_DATA = {
    "🦋 昆虫パーツ (Insect Traits)": [
      { ja: "昆虫触角", en: "insect antennae" },
      { ja: "蝶の触角", en: "butterfly antennae" },
      { ja: "蛾の触角", en: "moth antennae" },
      { ja: "複眼", en: "compound eyes" },
      { ja: "昆虫の顎", en: "insect mandibles" },
      { ja: "甲殻質の外殻", en: "chitin exoskeleton" },
      { ja: "節のある昆虫脚", en: "segmented insect limbs" },
      { ja: "甲虫の羽", en: "beetle wing covers" },
      { ja: "透明な昆虫翅", en: "transparent insect wings" },
      { ja: "蝶の翅", en: "butterfly wings" },
      { ja: "蛾の翅", en: "moth wings" },
      { ja: "蜂の翅", en: "wasp wings" },
      { ja: "昆虫の腹部", en: "insect abdomen" },
      { ja: "昆虫の尾節", en: "insect tail segments" },
      { ja: "昆虫の気配", en: "insect aura" },
      { ja: "女王蜂の気配", en: "queen bee aura" },
      { ja: "カマキリの鎌腕", en: "mantis scythe arms" },
      { ja: "蜘蛛脚風の補助肢", en: "spider-like auxiliary limbs" },
      { ja: "玉虫色の外殻", en: "iridescent exoskeleton" },
      { ja: "発光する昆虫翅", en: "glowing insect wings" }
    ]
  };

  const DICT = {
    "insect antennae": "昆虫触角",
    "butterfly antennae": "蝶の触角",
    "moth antennae": "蛾の触角",
    "compound eyes": "複眼",
    "insect mandibles": "昆虫の顎",
    "chitin exoskeleton": "甲殻質の外殻",
    "segmented insect limbs": "節のある昆虫脚",
    "beetle wing covers": "甲虫の羽",
    "transparent insect wings": "透明な昆虫翅",
    "butterfly wings": "蝶の翅",
    "moth wings": "蛾の翅",
    "wasp wings": "蜂の翅",
    "insect abdomen": "昆虫の腹部",
    "insect tail segments": "昆虫の尾節",
    "insect aura": "昆虫の気配",
    "queen bee aura": "女王蜂の気配",
    "mantis scythe arms": "カマキリの鎌腕",
    "spider-like auxiliary limbs": "蜘蛛脚風の補助肢",
    "iridescent exoskeleton": "玉虫色の外殻",
    "glowing insect wings": "発光する昆虫翅"
  };

  const API = {
    initUI() {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      const partsRoot = document.getElementById("race-root-parts-content");
      if (!partsRoot) return;
      if (partsRoot.querySelector('.race-insect-container')) return;

      const insectContainer = document.createElement("details");
      insectContainer.className = "race-insect-container";
      insectContainer.style.cssText = "margin-bottom:10px; border:2px dashed #66bb6a; border-radius:6px; background:#fff; width:100%; box-sizing:border-box;";
      insectContainer.open = false;

      const mainSummary = document.createElement("summary");
      mainSummary.textContent = "🦋 Insect Traits Collection (昆虫パーツ)";
      mainSummary.style.cssText = "font-weight:bold; padding:10px; cursor:pointer; background:#f3fff4; color:#2f5a35; font-size:1.0em; word-break:break-word; overflow-wrap:anywhere;";
      insectContainer.appendChild(mainSummary);

      const contentWrapper = document.createElement("div");
      contentWrapper.style.padding = "10px";

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "race-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #d5ecd7; border-radius:4px; background:#fff; width:100%; box-sizing:border-box;";
        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#fbfffb; color:#3f6244; word-break:break-word; overflow-wrap:anywhere;";
        details.appendChild(summary);
        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(140px, 1fr)); gap:8px;";
        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer; word-break:break-word; overflow-wrap:anywhere;";
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.style.marginRight = "6px";
          cb.dataset.val = item.en;
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.ja));
          label.title = item.en;
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      Object.entries(INSECT_PARTS_DATA).forEach(([cat, items]) => {
        contentWrapper.appendChild(createCat(cat, items));
      });

      insectContainer.appendChild(contentWrapper);

      const beastContainer = partsRoot.querySelector('.race-beast-container');
      const wingsContainer = partsRoot.querySelector('.race-wings-container');
      if (beastContainer && beastContainer.parentNode === partsRoot) {
        if (beastContainer.nextSibling) {
          partsRoot.insertBefore(insectContainer, beastContainer.nextSibling);
        } else {
          partsRoot.appendChild(insectContainer);
        }
      } else if (wingsContainer && wingsContainer.parentNode === partsRoot) {
        partsRoot.insertBefore(insectContainer, wingsContainer);
      } else {
        partsRoot.appendChild(insectContainer);
      }
    },
    getTags(){ return []; }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();
})();
