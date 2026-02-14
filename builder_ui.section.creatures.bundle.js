// Auto-generated bundle for section 'creatures'
// Contains 1 versions stacked in ascending order.

(function(){
  // --- builder_ui.section.creatures.v1.js ---
  (function(){
    "use strict";
    const VERSION = 1;
    const KEY = "creatures";

    // ---- Data ----
    const DATA_SHIMAENAGA = [
      { ja: "白頭固定（推奨）", en: "(white head Shima-enaga bushtit), tiny black beak" },
      { ja: "通称ブースト", en: "shima-enaga, small black beak" },
      { ja: "種名保険", en: "long-tailed bushtit, short black beak" }
    ];

    const DATA_BIRDS_OTHER = [
      { ja: "フクロウ", en: "owl, nocturnal bird" },
      { ja: "ワシ", en: "eagle, large bird of prey" },
      { ja: "カラス", en: "crow, black bird" },
      { ja: "ハト", en: "pigeon, city bird" },
      { ja: "スズメ", en: "sparrow, small bird" },
      { ja: "ペリカン", en: "pelican, large water bird" }
    ];

    const DATA_PENGUIN = [
      { ja: "皇帝ペンギン", en: "emperor penguin, large penguin" },
      { ja: "アデリーペンギン", en: "adelie penguin, small penguin, white eye ring" }
    ];

    // Reptiles (baseline; later expand freely)
    const DATA_REPTILES = [
      // Lizards
      { ja: "イグアナ", en: "iguana, reptile, lizard" },
      { ja: "カメレオン", en: "chameleon, reptile, lizard" },
      { ja: "ヤモリ", en: "gecko, reptile, lizard" },
      { ja: "オオトカゲ", en: "monitor lizard, reptile" },

      // Snakes
      { ja: "コブラ", en: "cobra, snake, reptile" },
      { ja: "ニシキヘビ", en: "python, snake, reptile" },
      { ja: "ボア", en: "boa constrictor, snake, reptile" },
      { ja: "ガラガラヘビ", en: "rattlesnake, snake, reptile" },

      // Turtles
      { ja: "ウミガメ", en: "sea turtle, reptile" },
      { ja: "リクガメ", en: "tortoise, reptile" },

      // Crocodilians
      { ja: "クロコダイル", en: "crocodile, reptile" },
      { ja: "アリゲーター", en: "alligator, reptile" }
    ];


// ✅ Primates (under Real Animals)
const DATA_PRIMATES = [
  { ja: "ショウガラゴ", en: "galago, bushbaby, prosimian, primate" },
  { ja: "ワオキツネザル", en: "ring-tailed lemur, prosimian, primate" },
  { ja: "アイアイ", en: "aye-aye, prosimian, primate" },
  { ja: "スローロリス", en: "slow loris, prosimian, primate" },
  { ja: "メガネザル", en: "tarsier, prosimian, primate" },
  { ja: "キヌザル", en: "marmoset, new world monkey, primate" },
  { ja: "タマリン", en: "tamarin, new world monkey, primate" },
  { ja: "リスザル", en: "squirrel monkey, new world monkey, primate" },
  { ja: "オマキザル", en: "capuchin monkey, new world monkey, primate" },
  { ja: "クモザル", en: "spider monkey, new world monkey, primate" },
  { ja: "ホエザル", en: "howler monkey, new world monkey, primate" },
  { ja: "ヨザル", en: "night monkey, new world monkey, primate" },
  { ja: "マカク", en: "macaque, monkey, primate" },
  { ja: "ニホンザル", en: "japanese macaque, monkey, primate" },
  { ja: "ヒヒ", en: "baboon, monkey, primate" },
  { ja: "マンドリル", en: "mandrill, monkey, primate" },
  { ja: "ラングール", en: "langur, monkey, primate" },
  { ja: "コロブス", en: "colobus monkey, monkey, primate" },
  { ja: "ベルベットモンキー", en: "vervet monkey, monkey, primate" },
  { ja: "シロテテナガザル", en: "lar gibbon, white-handed gibbon, gibbon, primate" },
  { ja: "シアマン", en: "siamang, gibbon, primate" },
  { ja: "フクロテナガザル", en: "hoolock gibbon, gibbon, primate" },
  { ja: "カンムリテナガザル", en: "crested gibbon, gibbon, primate" },
  { ja: "チンパンジー", en: "chimpanzee, primate" },
  { ja: "ボノボ", en: "bonobo, primate" },
  { ja: "ゴリラ", en: "gorilla, primate" },
  { ja: "オランウータン", en: "orangutan, primate" },
];

const DATA_PRIMATES_PROSIMIANS = [
  { ja: "ショウガラゴ", en: "galago, bushbaby, prosimian, primate" },
  { ja: "ワオキツネザル", en: "ring-tailed lemur, prosimian, primate" },
  { ja: "アイアイ", en: "aye-aye, prosimian, primate" },
  { ja: "スローロリス", en: "slow loris, prosimian, primate" },
  { ja: "メガネザル", en: "tarsier, prosimian, primate" },
];

const DATA_PRIMATES_NEW_WORLD = [
  { ja: "キヌザル", en: "marmoset, new world monkey, primate" },
  { ja: "タマリン", en: "tamarin, new world monkey, primate" },
  { ja: "リスザル", en: "squirrel monkey, new world monkey, primate" },
  { ja: "オマキザル", en: "capuchin monkey, new world monkey, primate" },
  { ja: "クモザル", en: "spider monkey, new world monkey, primate" },
  { ja: "ホエザル", en: "howler monkey, new world monkey, primate" },
  { ja: "ヨザル", en: "night monkey, new world monkey, primate" },
];

const DATA_PRIMATES_OLD_WORLD = [
  { ja: "マカク", en: "macaque, monkey, primate" },
  { ja: "ニホンザル", en: "japanese macaque, monkey, primate" },
  { ja: "ヒヒ", en: "baboon, monkey, primate" },
  { ja: "マンドリル", en: "mandrill, monkey, primate" },
  { ja: "ラングール", en: "langur, monkey, primate" },
  { ja: "コロブス", en: "colobus monkey, monkey, primate" },
  { ja: "ベルベットモンキー", en: "vervet monkey, monkey, primate" },
];

const DATA_PRIMATES_GIBBONS = [
  { ja: "シロテテナガザル", en: "lar gibbon, white-handed gibbon, gibbon, primate" },
  { ja: "シアマン", en: "siamang, gibbon, primate" },
  { ja: "フクロテナガザル", en: "hoolock gibbon, gibbon, primate" },
  { ja: "カンムリテナガザル", en: "crested gibbon, gibbon, primate" },
];

const DATA_PRIMATES_APES = [
  { ja: "チンパンジー", en: "chimpanzee, primate" },
  { ja: "ボノボ", en: "bonobo, primate" },
  { ja: "ゴリラ", en: "gorilla, primate" },
  { ja: "オランウータン", en: "orangutan, primate" },
];



    // Dogs: baseline common breeds
    const DATA_DOG = [
      { ja: "柴犬", en: "shiba inu, dog" },
      { ja: "ゴールデンレトリバー", en: "golden retriever, dog" },
      { ja: "ラブラドールレトリバー", en: "labrador retriever, dog" },
      { ja: "シベリアンハスキー", en: "siberian husky, dog" },
      { ja: "チワワ", en: "chihuahua, small dog" },
      { ja: "トイプードル", en: "toy poodle, dog" },
      { ja: "フレンチブルドッグ", en: "french bulldog, dog" },
      { ja: "ビーグル", en: "beagle, dog" }
    ];

    // Cats: baseline common types/breeds
    const DATA_CAT = [
      { ja: "アメリカンショートヘア", en: "american shorthair, cat" },
      { ja: "スコティッシュフォールド", en: "scottish fold, cat, folded ears" },
      { ja: "マンチカン", en: "munchkin, cat, short legs" },
      { ja: "ラグドール", en: "ragdoll, cat" },
      { ja: "メインクーン", en: "maine coon, large cat" },
      { ja: "ベンガル", en: "bengal cat, spotted coat" },
      { ja: "三毛猫", en: "calico cat, tricolor fur" }
    ];

    const DATA_RELATIONS = [
      { ja: "肩にとまる", en: "perched on shoulder" },
      { ja: "頭の上にとまる", en: "perched on head" },
      { ja: "手の上にとまる", en: "perched on hand" },
      { ja: "周囲を飛ぶ", en: "flying around" },
      { ja: "群れで飛ぶ", en: "a flock of birds" },
      { ja: "目線を合わせる", en: "eye contact with the bird" },
      { ja: "寄り添う相棒", en: "animal companion" }
    ];

    // ---- Marine Life (Real Animals) ----
    const DATA_MARINE_FISH = [
      { ja: "マグロ", en: "tuna, fish" },
      { ja: "サバ", en: "mackerel, fish" },
      { ja: "サケ", en: "salmon, fish" },
      { ja: "イワシ（魚群）", en: "sardine school, schooling fish" },
      { ja: "トビウオ", en: "flying fish, fish" },
      { ja: "クマノミ", en: "clownfish, reef fish" },
      { ja: "エンゼルフィッシュ", en: "angelfish, tropical reef fish" },
      { ja: "チョウチョウウオ", en: "butterflyfish, reef fish" },
      { ja: "ハタ", en: "grouper, reef fish" },
      { ja: "ハタタテダイ", en: "bannerfish, reef fish" },
      { ja: "カサゴ", en: "scorpionfish, fish" },
      { ja: "ハナミノカサゴ", en: "lionfish, venomous fish" },
      { ja: "タツノオトシゴ", en: "seahorse, fish" },
      { ja: "ウツボ", en: "moray eel, fish" }
    ];

    const DATA_MARINE_CARTILAGINOUS = [
      { ja: "ホオジロザメ", en: "great white shark, shark" },
      { ja: "シュモクザメ", en: "hammerhead shark, shark" },
      { ja: "ジンベエザメ", en: "whale shark, shark" },
      { ja: "マンタ", en: "manta ray, ray" },
      { ja: "アカエイ", en: "stingray, ray" },
      { ja: "ノコギリエイ", en: "sawfish, ray" }
    ];

    const DATA_MARINE_CRUSTACEANS = [
      { ja: "カニ", en: "crab, crustacean" },
      { ja: "ヤドカリ", en: "hermit crab, crustacean" },
      { ja: "イセエビ", en: "spiny lobster, crustacean" },
      { ja: "ロブスター", en: "lobster, crustacean" },
      { ja: "エビ（群れ）", en: "shrimp swarm, crustacean" },
      { ja: "シャコ", en: "mantis shrimp, crustacean" }
    ];

    const DATA_MARINE_MOLLUSKS = [
      { ja: "タコ", en: "octopus, mollusk" },
      { ja: "大ダコ", en: "giant octopus, mollusk" },
      { ja: "イカ", en: "squid, mollusk" },
      { ja: "ダイオウイカ", en: "giant squid, mollusk" },
      { ja: "コウイカ", en: "cuttlefish, mollusk" },
      { ja: "オウムガイ", en: "nautilus, mollusk" },
      { ja: "アサリ", en: "clam, bivalve" },
      { ja: "カキ", en: "oyster, bivalve" }
    ];

    const DATA_MARINE_CNIDARIANS = [
      { ja: "クラゲ（群れ）", en: "jellyfish swarm" },
      { ja: "発光クラゲ（群れ）", en: "bioluminescent jellyfish swarm" },
      { ja: "イソギンチャク", en: "sea anemone" },
      { ja: "サンゴ", en: "coral colony" },
      { ja: "クシクラゲ", en: "comb jelly, ctenophore" },
      { ja: "カツオノエボシ", en: "Portuguese man o' war, siphonophore" }
    ];

    const DATA_MARINE_MAMMALS = [
      { ja: "イルカ", en: "dolphin, marine mammal" },
      { ja: "シャチ", en: "orca, killer whale, marine mammal" },
      { ja: "クジラ", en: "whale, marine mammal" },
      { ja: "ザトウクジラ", en: "humpback whale, marine mammal" },
      { ja: "アザラシ", en: "seal, marine mammal" },
      { ja: "アシカ", en: "sea lion, marine mammal" }
    ];

    const DATA_MARINE_EXOTIC = [
      { ja: "フグ", en: "pufferfish, fish" },
      { ja: "マンボウ", en: "ocean sunfish (mola mola), fish" },
      { ja: "ガルパーウナギ", en: "gulper eel, deep sea fish" },
      { ja: "デメニギス", en: "barreleye fish, deep sea fish" },
      { ja: "アンコウ", en: "anglerfish, deep sea fish" },
      { ja: "カエルアンコウ", en: "frogfish, fish" }
    ];

    // Marine environments (NOT locations; ecological conditions)
    const DATA_MARINE_ENV_CORAL = [
      { ja: "珊瑚礁生態系", en: "coral reef ecosystem" },
      { ja: "礁斜面", en: "reef slope habitat" },
      { ja: "ラグーン", en: "lagoon waters" }
    ];
    const DATA_MARINE_ENV_OPEN = [
      { ja: "外洋表層", en: "open ocean surface" },
      { ja: "外洋中層", en: "open ocean midwater" },
      { ja: "回遊帯", en: "migratory ocean corridor" }
    ];
    const DATA_MARINE_ENV_DEEP = [
      { ja: "深海（暗黒層）", en: "deep sea aphotic zone" },
      { ja: "深海溝", en: "abyssal trench waters" },
      { ja: "深海底近く", en: "near seafloor abyssal zone" }
    ];
    const DATA_MARINE_ENV_COASTAL = [
      { ja: "沿岸浅瀬", en: "coastal shallows" },
      { ja: "干潟", en: "tidal flats" },
      { ja: "岩礁帯", en: "rocky shore waters" }
    ];
    const DATA_MARINE_ENV_COLD = [
      { ja: "寒冷海域", en: "cold water seas" },
      { ja: "流氷縁", en: "pack ice edge waters" },
      { ja: "亜寒帯海域", en: "subarctic waters" }
    ];

    // Recommended relation tags per environment (biological interactions; avoid generic VFX)
    const DATA_ENVREL_CORAL = [
      { ja: "共生（共存）", en: "symbiotic coexistence" },
      { ja: "縄張り防衛", en: "territorial defense" },
      { ja: "群れの回遊", en: "schooling behavior" },
      { ja: "擬態・溶け込み", en: "camouflage merge" },
      { ja: "相互クリーニング", en: "mutual cleaning" }
    ];
    const DATA_ENVREL_OPEN = [
      { ja: "編隊同行", en: "escort formation" },
      { ja: "集団連携", en: "pod coordination" },
      { ja: "追跡狩り", en: "pursuit hunting" },
      { ja: "回遊整列", en: "migratory alignment" },
      { ja: "外洋優位", en: "open water dominance" }
    ];
    const DATA_ENVREL_DEEP = [
      { ja: "待ち伏せ", en: "ambush predator" },
      { ja: "静かな追尾", en: "silent stalking" },
      { ja: "発光の視線", en: "bioluminescent gaze" },
      { ja: "深淵の守護", en: "guardian bond (deep)" },
      { ja: "深海の合図", en: "bioluminescent signaling" }
    ];
    const DATA_ENVREL_COASTAL = [
      { ja: "浅瀬の待ち伏せ", en: "shoreline ambush" },
      { ja: "潮汐の干渉", en: "tidal interaction" },
      { ja: "協力狩り", en: "cooperative hunting" },
      { ja: "巣の防衛", en: "nesting protection" },
      { ja: "人の気配", en: "human proximity awareness" }
    ];
    const DATA_ENVREL_COLD = [
      { ja: "群れの連携", en: "pack hunting" },
      { ja: "呼吸の同期", en: "surface breathing sync" },
      { ja: "氷縁の出現", en: "ice edge emergence" },
      { ja: "耐寒の絆", en: "thermal endurance bond" },
      { ja: "母性の護り", en: "maternal protection" }
    ];

    // Deep Sea 3rd-level sub-shelves (biolum / pressure-shadow / ruins-vents)
    const DATA_DEEP_BIOLUM = [
      { ja: "誘引灯（獲物誘導）", en: "lure light (prey guidance)" },
      { ja: "威嚇発光", en: "warning bioluminescence" },
      { ja: "合図発光（群れ）", en: "signal glow (school)" },
      { ja: "視線発光（眼光）", en: "glowing gaze" },
      { ja: "追尾光（背面誘導）", en: "trailing light lure" },
      { ja: "同調点滅", en: "synchronized pulsing" },
      { ja: "対向照明（影消し）", en: "counterillumination" }
    ];
    const DATA_DEEP_PRESSURE = [
      { ja: "高圧域の緊張", en: "high-pressure tension" },
      { ja: "影の輪郭（輪郭だけ）", en: "silhouette-only presence" },
      { ja: "暗闇の凝視", en: "stare from darkness" },
      { ja: "遠距離の接近", en: "approach in the dark" }
    ];
    const DATA_DEEP_RUINS = [
      { ja: "沈殿した遺構", en: "submerged ruins remnants" },
      { ja: "噴出孔の熱流", en: "hydrothermal vent currents" },
      { ja: "深海礫の回廊", en: "abyssal rubble corridor" },
      { ja: "遺跡の巡回", en: "patrol around ruins" }
    ];

    // ---- Relations (nested 7 categories) ----
    const DATA_REL_CONTACT = [
      { ja: "寄り添う", en: "snuggling close" },
      { ja: "肩にとまる", en: "perched on shoulder" },
      { ja: "頭の上にとまる", en: "perched on head" },
      { ja: "手の上にとまる", en: "perched on hand" },
      { ja: "頬に触れる", en: "nuzzling cheek" },
      { ja: "足元に寄る", en: "by your feet" },
      { ja: "膝の上", en: "on lap" }
    ];
    const DATA_REL_GAZE = [
      { ja: "目線を合わせる", en: "eye contact" },
      { ja: "じっと見つめる", en: "intense gaze" },
      { ja: "安心した目", en: "calm, trusting eyes" },
      { ja: "警戒の視線", en: "wary gaze" },
      { ja: "発光の視線", en: "bioluminescent gaze" }
    ];
    const DATA_REL_ACTIONS = [
      { ja: "周囲を泳ぐ", en: "swimming around" },
      { ja: "周囲を飛ぶ", en: "flying around" },
      { ja: "先導する", en: "leading the way" },
      { ja: "護衛する", en: "escorting" },
      { ja: "追尾する", en: "following closely" },
      { ja: "群れで移動", en: "moving as a group" }
    ];
    const DATA_REL_PRIMATE = [
      { ja: "道具を使う", en: "tool use behavior" },
      { ja: "合図で連携", en: "gesture communication" },
      { ja: "模倣する", en: "imitation learning" },
      { ja: "知的観察", en: "curious intelligent observation" }
    ];
    const DATA_REL_COIL = [
      { ja: "巻き付く", en: "coiling around" },
      { ja: "腕に絡む", en: "wrapped around arm" },
      { ja: "腰に絡む", en: "wrapped around waist" },
      { ja: "締め付ける", en: "constricting hold" }
    ];
    const DATA_REL_AQUATIC = [
      { ja: "伴泳（並走）", en: "swimming alongside" },
      { ja: "水面へ誘導", en: "guiding to the surface" },
      { ja: "群れが道を作る", en: "school forming a pathway" },
      { ja: "クラゲの回廊", en: "jellyfish corridor" },
      { ja: "泡を避けて進む", en: "moving through bubble streams" }
    ];
    const DATA_REL_GUARD = [
      { ja: "守護する", en: "guardian bond" },
      { ja: "契約の印", en: "bond mark" },
      { ja: "従者として同行", en: "faithful companion" },
      { ja: "主従の誓い", en: "oath of loyalty" }
    ];


    // ---- UI helpers ----
    function el(tag, attrs={}, children=[]) {
      const n = document.createElement(tag);
      if (!Array.isArray(children)) children = [children];
      Object.keys(attrs).forEach(k => {
        if (k === "style") n.style.cssText = attrs[k];
        else if (k === "class") n.className = attrs[k];
        else if (k === "text") n.textContent = attrs[k];
        else n.setAttribute(k, attrs[k]);
      });
      (children || []).forEach(c => {
        if (c == null) return;
        if (typeof c === "string") n.appendChild(document.createTextNode(c));
        else n.appendChild(c);
      });
      return n;
    }

    function makeCheckboxRow(item) {
      const id = `cr_${Math.random().toString(36).slice(2)}`;
      const cb = el("input", { type: "checkbox", id, "data-val": item.en });
      const lb = el("label", { for: id, text: `${item.ja} / ${item.en}` });

      // Strong wrapping + no horizontal overflow (mobile safe)
      lb.style.display = "block";
      lb.style.whiteSpace = "normal";
      lb.style.wordBreak = "break-word";
      lb.style.overflowWrap = "anywhere";
      lb.style.minWidth = "0";
      lb.style.maxWidth = "100%";
      lb.style.fontSize = "12px";
      lb.style.lineHeight = "1.25";

      // Grid keeps label width stable even if parent is flex
      const row = el("div", {
        class: "row",
        style: "display:grid; grid-template-columns:26px 1fr; column-gap:8px; align-items:start; margin:6px 0; min-width:0; max-width:100%; box-sizing:border-box;"
      }, [cb, lb]);

      return row;
    }
// Alias for backward-compat: some groups call makeCheck()
function makeCheck(item){
  return makeCheckboxRow(item);
}

function makeSectionDivider(icon, title, subtitle){
  const wrap = el("div", { 
    style: [
      "margin:14px 0 8px",
      "padding:10px 12px",
      "border-radius:12px",
      "border:2px solid rgba(0,0,0,0.10)",
      "background:linear-gradient(90deg, rgba(0,150,255,0.12), rgba(255,255,255,0.0))",
      "box-shadow:0 1px 0 rgba(0,0,0,0.03) inset"
    ].join(";")
  });
  const t = el("div", { style: "font-weight:800; font-size:14px; display:flex; align-items:center; gap:8px;" });
  const ic = el("span", { style: "font-size:16px;" }, icon || "");
  const tx = el("span", {}, title || "");
  t.appendChild(ic); t.appendChild(tx);

  const sub = el("div", { style: "margin-top:2px; font-size:11px; opacity:0.72; line-height:1.25;" }, subtitle || "");
  wrap.appendChild(t);
  wrap.appendChild(sub);
  return wrap;
}

function makeGroup(title, items, accent) {
      const det = el("details", { class: "creatures-acc", style: `margin:10px 0; border:2px solid ${accent}; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box; min-width:0; overflow:hidden;` });
      det.open = false;
      const sum = el("summary", { text: title, style: "cursor:pointer; font-weight:800; font-size:14px; padding:4px 2px; line-height:1.1; display:flex; align-items:center; gap:8px; min-height:32px;" });
      const box = el("div", { class: "creatures-box", style: "margin-top:6px; display:block; min-width:0; max-width:100%; box-sizing:border-box;" });
      items.forEach(it => box.appendChild(makeCheckboxRow(it)));
      det.appendChild(sum);
      det.appendChild(box);
      return det;
    }

    // Group container (allows nested sub-groups) - safe wrapper around the same visual style as makeGroup()
    function makeGroupContainer(title, accent) {
      const det = el("details", { class: "creatures-acc", style: `margin:10px 0; border:2px solid ${accent}; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box; min-width:0; overflow:hidden;` });
      det.open = false;
      const sum = el("summary", { text: title, style: "cursor:pointer; font-weight:800; font-size:14px; padding:4px 2px; line-height:1.1; display:flex; align-items:center; gap:8px; min-height:32px;" });
      const box = el("div", { class: "creatures-box", style: "margin-top:6px; display:block; min-width:0; max-width:100%; box-sizing:border-box;" });
      det.appendChild(sum);
      det.appendChild(box);
      return { det, box };
    }

    // Dogs / Cats (simple, non-abstract buckets)
    function makeDogGroup() {
      const outer = makeGroupContainer("🐶 犬 / Dog", "#1e88e5");

      const dogLarge = [
        { ja:"ゴールデンレトリバー", en:"golden retriever, large dog" },
        { ja:"ラブラドールレトリバー", en:"labrador retriever, large dog" },
        { ja:"ジャーマンシェパード", en:"german shepherd, large dog" },
        { ja:"秋田犬", en:"akita inu, large dog" },
        { ja:"シベリアンハスキー", en:"siberian husky, large dog" },
        { ja:"アラスカンマラミュート", en:"alaskan malamute, large dog" },
        { ja:"サモエド", en:"samoyed, fluffy white dog" },
        { ja:"セントバーナード", en:"saint bernard, giant dog" },
        { ja:"グレートデーン", en:"great dane, giant dog" },
        { ja:"グレートピレニーズ", en:"great pyrenees, large dog" },
        { ja:"バーニーズマウンテンドッグ", en:"bernese mountain dog, large dog" },
        { ja:"ニューファンドランド", en:"newfoundland dog, giant dog" },
        { ja:"レオンベルガー", en:"leonberger, giant dog" },
        { ja:"カネコルソ", en:"cane corso, large dog" },
        { ja:"ロットワイラー", en:"rottweiler, large dog" },
        { ja:"チベタンマスティフ", en:"tibetan mastiff, giant dog" },
        { ja:"アイリッシュウルフハウンド", en:"irish wolfhound, giant dog" },
        { ja:"ベルジアンマリノア", en:"belgian malinois, large dog" },
      ];

      const dogMedium = [
        { ja:"ボーダーコリー", en:"border collie, medium dog" },
        { ja:"シバイヌ", en:"shiba inu, medium dog" },
        { ja:"ビーグル", en:"beagle, medium dog" },
        { ja:"ブルドッグ", en:"bulldog, medium dog" },
        { ja:"スタンダードプードル", en:"standard poodle, medium dog" },
        { ja:"ボクサー", en:"boxer, medium dog" },
        { ja:"オーストラリアンシェパード", en:"australian shepherd, medium dog" },
        { ja:"シェットランドシープドッグ", en:"shetland sheepdog, medium dog" },
        { ja:"バセンジー", en:"basenji, medium dog" },
        { ja:"ウィペット", en:"whippet, medium dog" },
        { ja:"アメリカンコッカースパニエル", en:"american cocker spaniel, medium dog" },
        { ja:"イングリッシュコッカースパニエル", en:"english cocker spaniel, medium dog" },
        { ja:"スタンダードシュナウザー", en:"standard schnauzer, medium dog" },
      ];

      const dogSmall = [
        { ja:"ミニチュアダックスフンド", en:"miniature dachshund, small dog" },
        { ja:"チワワ", en:"chihuahua, small dog" },
        { ja:"ポメラニアン", en:"pomeranian, small dog" },
        { ja:"トイプードル", en:"toy poodle, small dog" },
        { ja:"ヨークシャーテリア", en:"yorkshire terrier, small dog" },
        { ja:"マルチーズ", en:"maltese, small dog" },
        { ja:"パグ", en:"pug, small dog" },
        { ja:"シーズー", en:"shih tzu, small dog" },
        { ja:"パピヨン", en:"papillon, small dog" },
        { ja:"ミニチュアシュナウザー", en:"miniature schnauzer, small dog" },
        { ja:"ボストンテリア", en:"boston terrier, small dog" },
        { ja:"コーギー", en:"corgi, small dog" },
      ];

      outer.box.appendChild(makeGroup("🦴 大型犬 / Large Dogs", dogLarge, "#1e88e5"));
      outer.box.appendChild(makeGroup("🐾 中型犬 / Medium Dogs", dogMedium, "#1e88e5"));
      outer.box.appendChild(makeGroup("🧸 小型犬 / Small Dogs", dogSmall, "#1e88e5"));
      return outer.det;
    }

    function makeCatGroup() {
      const outer = makeGroupContainer("🐱 猫 / Cat", "#43a047");

      const catLong = [
        { ja:"ペルシャ", en:"persian cat, long hair" },
        { ja:"ノルウェージャンフォレストキャット", en:"norwegian forest cat, long hair" },
        { ja:"メインクーン", en:"maine coon, large long hair cat" },
        { ja:"ラグドール", en:"ragdoll cat, long hair" },
        { ja:"サイベリアン", en:"siberian cat, long hair" },
        { ja:"ターキッシュアンゴラ", en:"turkish angora, long hair" },
        { ja:"ヒマラヤン", en:"himalayan cat, long hair" },
      ];

      const catShort = [
        { ja:"雑種猫", en:"domestic shorthair cat" },
        { ja:"ブリティッシュショートヘア", en:"british shorthair cat" },
        { ja:"ロシアンブルー", en:"russian blue cat" },
        { ja:"シャム", en:"siamese cat" },
        { ja:"スコティッシュフォールド", en:"scottish fold cat" },
        { ja:"マンチカン", en:"munchkin cat, short legs" },
        { ja:"スフィンクス", en:"sphynx cat, hairless" },
        { ja:"アメリカンショートヘア", en:"american shorthair cat" },
        { ja:"ベンガル", en:"bengal cat" },
        { ja:"オリエンタルショートヘア", en:"oriental shorthair cat" },
        { ja:"アビシニアン", en:"abyssinian cat" },
        { ja:"アメリカンカール", en:"american curl cat" },
        { ja:"エジプシャンマウ", en:"egyptian mau cat" },
      ];

      const catPattern = [
        { ja:"黒猫", en:"black cat" },
        { ja:"白猫", en:"white cat" },
        { ja:"茶トラ", en:"orange tabby cat" },
        { ja:"サバトラ", en:"gray tabby cat" },
        { ja:"三毛猫", en:"calico cat" },
        { ja:"ハチワレ", en:"bicolor cat" },
        { ja:"キジトラ", en:"brown tabby cat" },
        { ja:"シルバータビー", en:"silver tabby cat" },
        { ja:"ポイント柄", en:"point coloration cat" },
        { ja:"オッドアイ", en:"heterochromia cat" },
        { ja:"白黒猫", en:"tuxedo cat" },
      ];

      outer.box.appendChild(makeGroup("🧶 ロングヘアー / Longhair", catLong, "#43a047"));
      outer.box.appendChild(makeGroup("🧼 ショートヘアー / Shorthair", catShort, "#43a047"));
      outer.box.appendChild(makeGroup("🎨 柄・色 / Patterns", catPattern, "#43a047"));
      return outer.det;
    }


    // ---- Birds ----
    function makeBirdsGroup() {
      const det = el("details", { class: "creatures-acc", style: "margin:10px 0; border:2px solid #2c3e50; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box; min-width:0; overflow:hidden;" });
      det.open = false;
      const sum = el("summary", { text: "🕊 鳥類 / Birds", style: "cursor:pointer; font-weight:800; font-size:14px; padding:4px 2px; line-height:1.1; display:flex; align-items:center; gap:8px; min-height:32px;" });

      const box = el("div", { class: "creatures-box", style: "margin-top:6px; display:flex; flex-wrap:wrap; gap:12px; align-items:flex-start; min-width:0; max-width:100%; box-sizing:border-box;" });

      // -------------------------
      // 🪶 Real Birds
      // -------------------------
      const real = el("details", { class: "creatures-acc", style: "margin:8px 0; border:2px solid #1f2937; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box; min-width:0; overflow:hidden;" });
      real.style.flex = "1 1 320px";
      real.style.minWidth = "0";
      real.style.maxWidth = "100%";
      real.open = false;

      const realSum = el("summary", { text: "🪶 現実の鳥 / Real Birds", style: "cursor:pointer; font-weight:800; font-size:13px; padding:3px 2px; line-height:1.1; display:flex; align-items:center; gap:8px; min-height:32px;" });
      const realBox = el("div", { class: "creatures-box", style: "margin-top:6px; display:block; min-width:0; max-width:100%; box-sizing:border-box;" });

      // Small birds
      const small = el("details", { class: "creatures-acc", style: "margin:8px 0; border:2px dashed #2563eb; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box; min-width:0; overflow:hidden;" });
      small.open = false;
      const smallSum = el("summary", { text: "🐤 小鳥 / Small Birds", style: "cursor:pointer; font-weight:800; font-size:13px; padding:3px 2px; line-height:1.1; display:flex; align-items:center; gap:8px; min-height:32px;" });
      const smallBox = el("div", { class: "creatures-box", style: "margin-top:6px; display:block; min-width:0; max-width:100%; box-sizing:border-box;" });

      // Shima-enaga variants
      const shima = el("details", { class: "creatures-acc", style: "margin:8px 0; border:2px dashed #2563eb; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box; min-width:0; overflow:hidden;" });
      shima.open = false;
      const shimaSum = el("summary", { text: "🐦 シマエナガ / Shima-enaga", style: "cursor:pointer; font-weight:800; font-size:13px; padding:3px 2px; line-height:1.1; display:flex; align-items:center; gap:8px; min-height:32px;" });
      const shimaBox = el("div", { class: "creatures-box", style: "margin-top:6px; display:block; min-width:0; max-width:100%; box-sizing:border-box;" });

      DATA_SHIMAENAGA.forEach(it => shimaBox.appendChild(makeCheckboxRow({ ja: `シマエナガ：${it.ja}`, en: it.en })));
      shima.appendChild(shimaSum);
      shima.appendChild(shimaBox);
      smallBox.appendChild(shima);

      // Baseline small birds
      smallBox.appendChild(makeCheckboxRow({ ja: "スズメ", en: "sparrow, small bird" }));
      smallBox.appendChild(makeCheckboxRow({ ja: "ツバメ", en: "swallow, small bird" }));

      small.appendChild(smallSum);
      small.appendChild(smallBox);
      realBox.appendChild(small);

      // Raptors
      const raptor = el("details", { class: "creatures-acc", style: "margin:8px 0; border:2px dashed #f59e0b; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box; min-width:0; overflow:hidden;" });
      raptor.open = false;
      const raptorSum = el("summary", { text: "🦅 猛禽類 / Birds of Prey", style: "cursor:pointer; font-weight:800; font-size:13px; padding:3px 2px; line-height:1.1; display:flex; align-items:center; gap:8px; min-height:32px;" });
      const raptorBox = el("div", { class: "creatures-box", style: "margin-top:6px; display:block; min-width:0; max-width:100%; box-sizing:border-box;" });

      raptorBox.appendChild(makeCheckboxRow({ ja: "フクロウ", en: "owl" }));
      raptorBox.appendChild(makeCheckboxRow({ ja: "ワシ", en: "eagle" }));
      raptorBox.appendChild(makeCheckboxRow({ ja: "タカ", en: "hawk" }));

      raptor.appendChild(raptorSum);
      raptor.appendChild(raptorBox);
      realBox.appendChild(raptor);

      // Water birds
      const water = el("details", { class: "creatures-acc", style: "margin:8px 0; border:2px dashed #06b6d4; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box; min-width:0; overflow:hidden;" });
      water.open = false;
      const waterSum = el("summary", { text: "🌊 水鳥 / Water Birds", style: "cursor:pointer; font-weight:800; font-size:13px; padding:3px 2px; line-height:1.1; display:flex; align-items:center; gap:8px; min-height:32px;" });
      const waterBox = el("div", { class: "creatures-box", style: "margin-top:6px; display:block; min-width:0; max-width:100%; box-sizing:border-box;" });

      waterBox.appendChild(makeCheckboxRow({ ja: "ペリカン", en: "pelican, large water bird" }));
      waterBox.appendChild(makeCheckboxRow({ ja: "白鳥", en: "swan, water bird" }));

      // Penguins
      const peng = el("details", { class: "creatures-acc", style: "margin:8px 0; border:2px dashed #06b6d4; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box; min-width:0; overflow:hidden;" });
      peng.open = false;
      const pengSum = el("summary", { text: "🐧 ペンギン / Penguin", style: "cursor:pointer; font-weight:800; font-size:13px; padding:3px 2px; line-height:1.1; display:flex; align-items:center; gap:8px; min-height:32px;" });
      const pengBox = el("div", { class: "creatures-box", style: "margin-top:6px; display:block; min-width:0; max-width:100%; box-sizing:border-box;" });

      DATA_PENGUIN.forEach(it => pengBox.appendChild(makeCheckboxRow({ ja: `ペンギン：${it.ja}`, en: it.en })));
      peng.appendChild(pengSum);
      peng.appendChild(pengBox);
      waterBox.appendChild(peng);

      water.appendChild(waterSum);
      water.appendChild(waterBox);
      realBox.appendChild(water);

      // Urban birds
      const urban = el("details", { class: "creatures-acc", style: "margin:8px 0; border:2px dashed #10b981; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box; min-width:0; overflow:hidden;" });
      urban.open = false;
      const urbanSum = el("summary", { text: "🏙 都市鳥 / Urban Birds", style: "cursor:pointer; font-weight:800; font-size:13px; padding:3px 2px; line-height:1.1; display:flex; align-items:center; gap:8px; min-height:32px;" });
      const urbanBox = el("div", { class: "creatures-box", style: "margin-top:6px; display:block; min-width:0; max-width:100%; box-sizing:border-box;" });

      urbanBox.appendChild(makeCheckboxRow({ ja: "カラス", en: "crow" }));
      urbanBox.appendChild(makeCheckboxRow({ ja: "ハト", en: "pigeon" }));

      urban.appendChild(urbanSum);
      urban.appendChild(urbanBox);
      realBox.appendChild(urban);

      real.appendChild(realSum);
      real.appendChild(realBox);
      box.appendChild(real);

      // -------------------------
      // ✨ Mythic Birds
      // -------------------------
      const myth = el("details", { class: "creatures-acc", style: "margin:8px 0; border:2px solid #7c3aed; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box; min-width:0; overflow:hidden;" });
      myth.style.flex = "1 1 320px";
      myth.style.minWidth = "0";
      myth.style.maxWidth = "100%";
      myth.open = false;

      const mythSum = el("summary", {
        text: "✨ 神話・伝説の鳥 / Mythic Birds",
        style: "cursor:pointer; font-weight:800; font-size:13px; padding:3px 2px; line-height:1.1; display:flex; align-items:center; gap:8px; min-height:32px;"
      });

      const mythBox = el("div", { class: "creatures-box", style: "margin-top:6px; display:block; min-width:0; max-width:100%; box-sizing:border-box;" });

      // Mythic bird skeleton items (placeholders; expand later)
      mythBox.appendChild(makeCheckboxRow({ ja: "神話鳥：火焔の不死鳥", en: "phoenix, mythical bird, rebirth, flaming wings" }));
      mythBox.appendChild(makeCheckboxRow({ ja: "神話鳥：雷光の天翔鳥", en: "thunder bird, mythical bird, storm bringer" }));
      mythBox.appendChild(makeCheckboxRow({ ja: "神話鳥：月影の夜鶴", en: "moon crane, mythical bird, night omen" }));
      mythBox.appendChild(makeCheckboxRow({ ja: "神話鳥：日輪の王鷲", en: "sun eagle, symbol of sovereignty, divine authority" }));
      mythBox.appendChild(makeCheckboxRow({ ja: "神話鳥：冥界の鴉", en: "death crow, messenger of fate, between life and death" }));
      mythBox.appendChild(makeCheckboxRow({ ja: "神話鳥：白初鳥", en: "primordial white bird, origin of the sky" }));

      myth.appendChild(mythSum);
      myth.appendChild(mythBox);
      box.appendChild(myth);

      det.appendChild(sum);
      det.appendChild(box);
      return det;
    }

    // ---- Reptiles (Birds-like nested: 4 splits) ----
    function classifyReptile(item) {
      const en = String(item.en || "").toLowerCase();
      if (
        en.includes("snake") || en.includes("python") || en.includes("cobra") || en.includes("viper") ||
        en.includes("anaconda") || en.includes("boa") || en.includes("rattlesnake") || en.includes("mamba") || en.includes("taipan")
      ) return "snakes";
      if (en.includes("turtle") || en.includes("tortoise")) return "turtles";
      if (en.includes("croc") || en.includes("alligator") || en.includes("caiman")) return "crocodilians";
      // default to lizards bucket (keeps “unknown reptiles” from vanishing)
      return "lizards";
    }

    function makeReptilesGroup() {
      const root = el("details", { class: "creatures-acc", style: "margin:10px 0; border:2px solid #2c3e50; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box; min-width:0; overflow:hidden;" });
      root.open = false;

      const summary = el("summary", { text: "🦎 爬虫類 / Reptiles", style: "cursor:pointer; font-weight:800; font-size:14px; padding:4px 2px; line-height:1.1; display:flex; align-items:center; gap:8px; min-height:32px;" });
      root.appendChild(summary);

      // inner wrap (same feel as birds columns, but simple vertical)
      const inner = el("div", { style: "padding: 6px 0 0 0; min-width:0; max-width:100%; box-sizing:border-box;" });


const makeSectionDivider = (icon, title, subtitle) => {
  const wrap = el("div", { style: "margin:14px 0 8px; padding:8px 10px; background:linear-gradient(90deg, rgba(14,165,233,0.16), rgba(14,165,233,0.00)); border-left:4px solid #0ea5e9; border-radius:10px; box-sizing:border-box;" });
  const t = el("div", { text: `${icon} ${title}`, style: "font-weight:900; font-size:13px; line-height:1.15;" });
  const sub = el("div", { text: subtitle, style: "margin-top:2px; font-weight:700; font-size:11px; opacity:0.75; line-height:1.2;" });
  wrap.appendChild(t);
  wrap.appendChild(sub);
  return wrap;
};

      const buckets = { lizards: [], snakes: [], turtles: [], crocodilians: [] };
      DATA_REPTILES.forEach(it => buckets[classifyReptile(it)].push(it));

      const makeSub = (title, items, accent) => {
        const d = el("details", { class: "creatures-acc", style: `margin:8px 0; border:2px dashed ${accent}; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box; min-width:0; overflow:hidden;` });
        d.open = false;
        const s = el("summary", { text: title, style: "cursor:pointer; font-weight:800; font-size:13px; padding:3px 2px; line-height:1.1; display:flex; align-items:center; gap:8px; min-height:32px;" });
        const box = el("div", { class: "creatures-box", style: "margin-top:6px; display:block; min-width:0; max-width:100%; box-sizing:border-box;" });
        items.forEach(it => box.appendChild(makeCheckboxRow(it)));
        d.appendChild(s);
        d.appendChild(box);
        return d;
      };

      inner.appendChild(makeSub("🦎 トカゲ類 / Lizards", buckets.lizards, "#2563eb"));
      inner.appendChild(makeSub("🐍 ヘビ類 / Snakes", buckets.snakes, "#ef4444"));
      inner.appendChild(makeSub("🐢 カメ類 / Turtles", buckets.turtles, "#10b981"));
      inner.appendChild(makeSub("🐊 ワニ類 / Crocodilians", buckets.crocodilians, "#f59e0b"));

      root.appendChild(inner);
      return root;
    }
function makePrimatesGroup() {
  // Self-contained (no external helpers) to avoid ReferenceError in different core builds.
  const outer = document.createElement("details");
  outer.className = "group-root";
  outer.open = false;

  // Match other group frames
  outer.style.margin = "10px 0";
  outer.style.border = "2px solid #8b5a2b";
  outer.style.borderRadius = "14px";
  outer.style.padding = "10px";
  outer.style.background = "#fff";

  const sum = document.createElement("summary");
  sum.className = "group-title";
  sum.textContent = "🐒 霊長類 / Primates";
  outer.appendChild(sum);

  const content = document.createElement("div");
  content.className = "group-content";
  content.style.border = "2px solid #8B5A2B";
  content.style.borderRadius = "14px";
  content.style.padding = "10px";
  content.style.marginTop = "8px";

  // grid container
  const grid = document.createElement("div");
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = "repeat(auto-fit, minmax(220px, 1fr))";
  grid.style.gap = "10px";

  function makeSub(title, emoji, items) {
    const sub = document.createElement("details");
    sub.className = "subgroup";
    sub.open = false;

    const s = document.createElement("summary");
    s.className = "subgroup-title";
    s.textContent = `${emoji} ${title}`;
    sub.appendChild(s);

    const box = document.createElement("div");
    box.className = "subgroup-content";
    box.style.padding = "8px";
    box.style.marginTop = "6px";
    box.style.border = "1px dashed rgba(0,0,0,.25)";
    box.style.borderRadius = "12px";

    (items || []).forEach(it => box.appendChild(makeCheck(it)));
    sub.appendChild(box);
    return sub;
  }

  // Buckets
  grid.appendChild(makeSub("原猿類 / Prosimians", "🌙", (typeof DATA_PRIMATES_PROSIMIANS !== "undefined") ? DATA_PRIMATES_PROSIMIANS : []));
  grid.appendChild(makeSub("南米の新世界ザル / New World Monkeys", "🌿", (typeof DATA_PRIMATES_NEW_WORLD !== "undefined") ? DATA_PRIMATES_NEW_WORLD : []));
  grid.appendChild(makeSub("旧世界ザル / Old World Monkeys", "🏞️", (typeof DATA_PRIMATES_OLD_WORLD !== "undefined") ? DATA_PRIMATES_OLD_WORLD : []));
  grid.appendChild(makeSub("テナガザル / Gibbons", "🪢", (typeof DATA_PRIMATES_GIBBONS !== "undefined") ? DATA_PRIMATES_GIBBONS : []));
  grid.appendChild(makeSub("類人猿 / Great Apes", "🦍", (typeof DATA_PRIMATES_APES !== "undefined") ? DATA_PRIMATES_APES : []));

  content.appendChild(grid);
  outer.appendChild(content);
  return outer;
}


    

    // ---- Marine Life UI ----
    function makeMarineLifeGroup() {
      const root = el("details", { class: "creatures-acc", style: "margin:10px 0; border:2px solid #0ea5e9; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box; min-width:0; overflow:hidden;" });
      root.open = false;

      const summary = el("summary", { text: "🐠 海洋生物 / Marine Life", style: "cursor:pointer; font-weight:800; font-size:14px; padding:4px 2px; line-height:1.1; display:flex; align-items:center; gap:8px; min-height:32px;" });
      root.appendChild(summary);

      const inner = el("div", { style: "padding: 6px 0 0 0; min-width:0; max-width:100%; box-sizing:border-box;" });

      const makeSub = (title, items, accent) => {
        const d = el("details", { class: "creatures-acc", style: `margin:8px 0; border:2px dashed ${accent}; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box; min-width:0; overflow:hidden;` });
        d.open = false;
        const s = el("summary", { text: title, style: "cursor:pointer; font-weight:800; font-size:13px; padding:3px 2px; line-height:1.1; display:flex; align-items:center; gap:8px; min-height:32px;" });
        const box = el("div", { class: "creatures-box", style: "margin-top:6px; display:block; min-width:0; max-width:100%; box-sizing:border-box;" });
        (items || []).forEach(it => box.appendChild(makeCheckboxRow(it)));
        d.appendChild(s);
        d.appendChild(box);
        return d;
      };

      const makeEnv = (title, envItems, recItems, accent, deepThird) => {
        const d = el("details", { class: "creatures-acc", style: `margin:8px 0; border:2px dashed ${accent}; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box; min-width:0; overflow:hidden;` });
        d.open = false;

        const s = el("summary", { text: title, style: "cursor:pointer; font-weight:800; font-size:13px; padding:3px 2px; line-height:1.1; display:flex; align-items:center; gap:8px; min-height:32px;" });
        d.appendChild(s);

        const box = el("div", { class: "creatures-box", style: "margin-top:6px; display:block; min-width:0; max-width:100%; box-sizing:border-box;" });
        (envItems || []).forEach(it => box.appendChild(makeCheckboxRow(it)));

        // Recommended relations (2nd-level hinting)
        const hint = el("details", { class: "creatures-acc", style: "margin:10px 0 0 0; border:2px solid #64748b; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box; min-width:0; overflow:hidden;" });
        hint.open = false;
        hint.appendChild(el("summary", { text: "🔗 推奨関係 / Recommended Relations", style: "cursor:pointer; font-weight:800; font-size:12px; padding:2px 2px; line-height:1.1; display:flex; align-items:center; gap:8px; min-height:28px;" }));
        const hbox = el("div", { class: "creatures-box", style: "margin-top:6px; display:block; min-width:0; max-width:100%; box-sizing:border-box;" });
        (recItems || []).forEach(it => hbox.appendChild(makeCheckboxRow(it)));
        hint.appendChild(hbox);

        // Deep Sea third-level shelves (biological, not VFX)
        if (deepThird) {
          const deepWrap = el("div", { style: "margin-top:10px;" });
          const makeThird = (t, items) => {
            const td = el("details", { class: "creatures-acc", style: "margin:8px 0 0 0; border:2px dashed #334155; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box; min-width:0; overflow:hidden;" });
            td.open = false;
            td.appendChild(el("summary", { text: t, style: "cursor:pointer; font-weight:800; font-size:12px; padding:2px 2px; line-height:1.1; display:flex; align-items:center; gap:8px; min-height:28px;" }));
            const tbox = el("div", { class: "creatures-box", style: "margin-top:6px; display:block; min-width:0; max-width:100%; box-sizing:border-box;" });
            (items || []).forEach(it => tbox.appendChild(makeCheckboxRow(it)));
            td.appendChild(tbox);
            return td;
          };
          deepWrap.appendChild(makeThird("✨ 生物発光 / Bioluminescence", (typeof DATA_DEEP_BIOLUM !== "undefined") ? DATA_DEEP_BIOLUM : []));
          deepWrap.appendChild(makeThird("⚫ 圧力・影 / Pressure & Shadow", (typeof DATA_DEEP_PRESSURE !== "undefined") ? DATA_DEEP_PRESSURE : []));
          deepWrap.appendChild(makeThird("🏛 遺跡・噴出孔 / Ruins & Vents", (typeof DATA_DEEP_RUINS !== "undefined") ? DATA_DEEP_RUINS : []));
          hint.appendChild(deepWrap);
        }

        box.appendChild(hint);
        d.appendChild(box);
        return d;
      };

      // Section: Classification
      inner.appendChild(makeSectionDivider("🧬", "生物分類 / Classification", "Marine Life 内の生物カテゴリ（種の分類レイヤー）"));

      // Species shelves
      inner.appendChild(makeSub("🐟 魚類 / Fish", (typeof DATA_MARINE_FISH !== "undefined") ? DATA_MARINE_FISH : [], "#2563eb"));
      inner.appendChild(makeSub("🦈 軟骨魚類 / Cartilaginous Fish", (typeof DATA_MARINE_CARTILAGINOUS !== "undefined") ? DATA_MARINE_CARTILAGINOUS : [], "#ef4444"));
      inner.appendChild(makeSub("🦀 甲殻類 / Crustaceans", (typeof DATA_MARINE_CRUSTACEANS !== "undefined") ? DATA_MARINE_CRUSTACEANS : [], "#f59e0b"));
      inner.appendChild(makeSub("🐙 軟体動物 / Mollusks", (typeof DATA_MARINE_MOLLUSKS !== "undefined") ? DATA_MARINE_MOLLUSKS : [], "#8b5cf6"));
      inner.appendChild(makeSub("🌊 刺胞・浮遊系 / Cnidarians & Drifters", (typeof DATA_MARINE_CNIDARIANS !== "undefined") ? DATA_MARINE_CNIDARIANS : [], "#22c55e"));
      inner.appendChild(makeSub("🐋 海洋哺乳類 / Marine Mammals", (typeof DATA_MARINE_MAMMALS !== "undefined") ? DATA_MARINE_MAMMALS : [], "#0f766e"));
      inner.appendChild(makeSub("🐡 特殊・異形魚 / Exotic Marine", (typeof DATA_MARINE_EXOTIC !== "undefined") ? DATA_MARINE_EXOTIC : [], "#e11d48"));

      // Section: Environments (sub-layer)
      inner.appendChild(makeSectionDivider("🌍", "環境（生態条件） / Environments", "※サブカテゴリー：生物分類とは別の“生態条件レイヤー”"));

      // Environment shelves + recommended relations
      inner.appendChild(makeEnv("🪸 珊瑚礁域 / Coral Reef", (typeof DATA_MARINE_ENV_CORAL !== "undefined") ? DATA_MARINE_ENV_CORAL : [], (typeof DATA_ENVREL_CORAL !== "undefined") ? DATA_ENVREL_CORAL : [], "#14b8a6", false));
      inner.appendChild(makeEnv("🌊 外洋 / Open Ocean", (typeof DATA_MARINE_ENV_OPEN !== "undefined") ? DATA_MARINE_ENV_OPEN : [], (typeof DATA_ENVREL_OPEN !== "undefined") ? DATA_ENVREL_OPEN : [], "#0ea5e9", false));
      inner.appendChild(makeEnv("🌑 深海 / Deep Sea", (typeof DATA_MARINE_ENV_DEEP !== "undefined") ? DATA_MARINE_ENV_DEEP : [], (typeof DATA_ENVREL_DEEP !== "undefined") ? DATA_ENVREL_DEEP : [], "#334155", true));
      inner.appendChild(makeEnv("🏝 沿岸・浅瀬 / Coastal", (typeof DATA_MARINE_ENV_COASTAL !== "undefined") ? DATA_MARINE_ENV_COASTAL : [], (typeof DATA_ENVREL_COASTAL !== "undefined") ? DATA_ENVREL_COASTAL : [], "#f97316", false));
      inner.appendChild(makeEnv("🧊 寒冷海域 / Cold Waters", (typeof DATA_MARINE_ENV_COLD !== "undefined") ? DATA_MARINE_ENV_COLD : [], (typeof DATA_ENVREL_COLD !== "undefined") ? DATA_ENVREL_COLD : [], "#60a5fa", false));

      root.appendChild(inner);
      return root;
    }

    // ---- Relations UI (nested 7 categories) ----
    function makeRelationsGroup() {
      const root = el("details", { class: "creatures-acc", style: "margin:10px 0; border:2px solid #8e44ad; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box; min-width:0; overflow:hidden;" });
      root.open = false;

      const summary = el("summary", { text: "🦴 状態・関係 / Relations", style: "cursor:pointer; font-weight:800; font-size:14px; padding:4px 2px; line-height:1.1; display:flex; align-items:center; gap:8px; min-height:32px;" });
      root.appendChild(summary);

      const inner = el("div", { style: "padding: 6px 0 0 0; min-width:0; max-width:100%; box-sizing:border-box;" });

      const makeSub = (title, items, accent) => {
        const d = el("details", { class: "creatures-acc", style: `margin:8px 0; border:2px dashed ${accent}; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box; min-width:0; overflow:hidden;` });
        d.open = false;
        const s = el("summary", { text: title, style: "cursor:pointer; font-weight:800; font-size:13px; padding:3px 2px; line-height:1.1; display:flex; align-items:center; gap:8px; min-height:32px;" });
        const box = el("div", { class: "creatures-box", style: "margin-top:6px; display:block; min-width:0; max-width:100%; box-sizing:border-box;" });
        (items || []).forEach(it => box.appendChild(makeCheckboxRow(it)));
        d.appendChild(s);
        d.appendChild(box);
        return d;
      };

      inner.appendChild(makeSub("🤝 接触・距離 / Contact & Proximity", (typeof DATA_REL_CONTACT !== "undefined") ? DATA_REL_CONTACT : [], "#2563eb"));
      inner.appendChild(makeSub("👀 視線・感情 / Gaze & Emotion", (typeof DATA_REL_GAZE !== "undefined") ? DATA_REL_GAZE : [], "#ef4444"));
      inner.appendChild(makeSub("🐾 行動・動作 / Actions", (typeof DATA_REL_ACTIONS !== "undefined") ? DATA_REL_ACTIONS : [], "#10b981"));
      inner.appendChild(makeSub("🧠 知性・霊長類 / Primate Behaviors", (typeof DATA_REL_PRIMATE !== "undefined") ? DATA_REL_PRIMATE : [], "#f59e0b"));
      inner.appendChild(makeSub("🐍 巻き付き系 / Coiling & Wrap", (typeof DATA_REL_COIL !== "undefined") ? DATA_REL_COIL : [], "#8b5cf6"));
      inner.appendChild(makeSub("🌊 水中関係 / Aquatic Interaction", (typeof DATA_REL_AQUATIC !== "undefined") ? DATA_REL_AQUATIC : [], "#0ea5e9"));
      inner.appendChild(makeSub("🛡 守護・契約 / Guardian & Bond", (typeof DATA_REL_GUARD !== "undefined") ? DATA_REL_GUARD : [], "#334155"));

      root.appendChild(inner);
      return root;
    }
const API = {
      initUI(container) {
        const parent = document.querySelector("#list-creatures") || container;
        // core already renders title/controls; we only populate content
        const contentArea = parent.querySelector(".section-content") || parent;
        contentArea.innerHTML = "";

        const note = el("div", { class: "creatures-note", style: "font-size:12px; opacity:0.85; margin:6px 0 10px 0;" });
        note.textContent = "生物は“存在”。小物と混ぜない。ここで同行・群れ・目線まで制御する。";
        contentArea.appendChild(note);

        // Birds first (keep try/catch; birds is the heaviest DOM)
        try {
          contentArea.appendChild(makeBirdsGroup());
        } catch (e) {
          const err = el("div", { style: "margin:8px 0; padding:8px; border:2px solid #e11d48; border-radius:10px; background:#fff0f3; font-size:12px; white-space:pre-wrap;" });
          err.textContent = "[Creatures/Birds UI Error]\n" + (e && e.stack ? e.stack : String(e));
          contentArea.appendChild(err);
        }

        // Reptiles (nested 4 split)
        try {
          contentArea.appendChild(makeReptilesGroup());
          contentArea.appendChild(makePrimatesGroup());
          contentArea.appendChild(makeDogGroup());
          contentArea.appendChild(makeCatGroup());
          contentArea.appendChild(makeMarineLifeGroup());
        } catch (e) {
          const err = el("div", { style: "margin:8px 0; padding:8px; border:2px solid #e11d48; border-radius:10px; background:#fff0f3; font-size:12px; white-space:pre-wrap;" });
          err.textContent = "[Creatures/Reptiles UI Error]\n" + (e && e.stack ? e.stack : String(e));
          contentArea.appendChild(err);
        }

        // Dogs / Cats / Relations
        contentArea.appendChild(makeRelationsGroup());
      },

      getTags() {
        const root = document.querySelector("#list-creatures");
        if (!root) return [];
        const tags = [];
        root.querySelectorAll("input[type='checkbox']:checked").forEach(cb => {
          const v = cb.dataset.val;
          if (v) tags.push(v);
        });
        return tags;
      }
    };

    window.__registerPromptPart(KEY, VERSION, API);
  })();
})();