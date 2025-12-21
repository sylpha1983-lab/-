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
    "🐉 伝説・精霊セット (Mythical Sets)": [
      { label: "ドラゴン娘セット", val: "dragon girl, dragon wings, dragon tail, horns, scales, claws" },
      { label: "妖精セット", val: "fairy, translucent wings, mini girl, floating, sparkles, nature" },
      { label: "マーメイドセット", val: "mermaid, fish tail, fins, seashells, underwater, bubbles" },
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

  // 辞書はv3と同じ内容 (省略せず再定義)
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
          const cb = document.createElement("input"); cb.type = "checkbox"; cb.style.marginRight = "6px";
          cb.dataset.val = item.val; label.title = item.val; label.appendChild(cb); label.appendChild(document.createTextNode(item.label));
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

