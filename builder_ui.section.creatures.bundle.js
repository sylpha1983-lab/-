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

    // Reptiles
    const DATA_REPTILES = [
      { ja: "イグアナ", en: "iguana, reptile, lizard" },
      { ja: "カメレオン", en: "chameleon, reptile, lizard" },
      { ja: "ヤモリ", en: "gecko, reptile, lizard" },
      { ja: "オオトカゲ", en: "monitor lizard, reptile" },
      { ja: "コブラ", en: "cobra, snake, reptile" },
      { ja: "ニシキヘビ", en: "python, snake, reptile" },
      { ja: "ボア", en: "boa constrictor, snake, reptile" },
      { ja: "ガラガラヘビ", en: "rattlesnake, snake, reptile" },
      { ja: "ウミガメ", en: "sea turtle, reptile" },
      { ja: "リクガメ", en: "tortoise, reptile" },
      { ja: "クロコダイル", en: "crocodile, reptile" },
      { ja: "アリゲーター", en: "alligator, reptile" }
    ];

    // Primates
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

    // Marine Life
    const DATA_MARINE_FISH = [
      { ja: "マグロ", en: "tuna, fish" }, { ja: "サバ", en: "mackerel, fish" }, { ja: "サケ", en: "salmon, fish" },
      { ja: "イワシ（魚群）", en: "sardine school, schooling fish" }, { ja: "トビウオ", en: "flying fish, fish" },
      { ja: "クマノミ", en: "clownfish, reef fish" }, { ja: "エンゼルフィッシュ", en: "angelfish, tropical reef fish" },
      { ja: "チョウチョウウオ", en: "butterflyfish, reef fish" }, { ja: "ハタ", en: "grouper, reef fish" },
      { ja: "ハタタテダイ", en: "bannerfish, reef fish" }, { ja: "カサゴ", en: "scorpionfish, fish" },
      { ja: "ハナミノカサゴ", en: "lionfish, venomous fish" }, { ja: "タツノオトシゴ", en: "seahorse, fish" },
      { ja: "ウツボ", en: "moray eel, fish" }
    ];
    const DATA_MARINE_CARTILAGINOUS = [
      { ja: "ホオジロザメ", en: "great white shark, shark" }, { ja: "シュモクザメ", en: "hammerhead shark, shark" },
      { ja: "ジンベエザメ", en: "whale shark, shark" }, { ja: "マンタ", en: "manta ray, ray" },
      { ja: "アカエイ", en: "stingray, ray" }, { ja: "ノコギリエイ", en: "sawfish, ray" }
    ];
    const DATA_MARINE_CRUSTACEANS = [
      { ja: "カニ", en: "crab, crustacean" }, { ja: "ヤドカリ", en: "hermit crab, crustacean" },
      { ja: "イセエビ", en: "spiny lobster, crustacean" }, { ja: "ロブスター", en: "lobster, crustacean" },
      { ja: "エビ（群れ）", en: "shrimp swarm, crustacean" }, { ja: "シャコ", en: "mantis shrimp, crustacean" }
    ];
    const DATA_MARINE_MOLLUSKS = [
      { ja: "タコ", en: "octopus, mollusk" }, { ja: "大ダコ", en: "giant octopus, mollusk" },
      { ja: "イカ", en: "squid, mollusk" }, { ja: "ダイオウイカ", en: "giant squid, mollusk" },
      { ja: "コウイカ", en: "cuttlefish, mollusk" }, { ja: "オウムガイ", en: "nautilus, mollusk" },
      { ja: "アサリ", en: "clam, bivalve" }, { ja: "カキ", en: "oyster, bivalve" }
    ];
    const DATA_MARINE_CNIDARIANS = [
      { ja: "クラゲ（群れ）", en: "jellyfish swarm" }, { ja: "発光クラゲ（群れ）", en: "bioluminescent jellyfish swarm" },
      { ja: "イソギンチャク", en: "sea anemone" }, { ja: "サンゴ", en: "coral colony" },
      { ja: "クシクラゲ", en: "comb jelly, ctenophore" }, { ja: "カツオノエボシ", en: "Portuguese man o' war, siphonophore" }
    ];
    const DATA_MARINE_MAMMALS = [
      { ja: "イルカ", en: "dolphin, marine mammal" }, { ja: "シャチ", en: "orca, killer whale, marine mammal" },
      { ja: "クジラ", en: "whale, marine mammal" }, { ja: "ザトウクジラ", en: "humpback whale, marine mammal" },
      { ja: "アザラシ", en: "seal, marine mammal" }, { ja: "アシカ", en: "sea lion, marine mammal" }
    ];
    const DATA_MARINE_EXOTIC = [
      { ja: "フグ", en: "pufferfish, fish" }, { ja: "マンボウ", en: "ocean sunfish (mola mola), fish" },
      { ja: "ガルパーウナギ", en: "gulper eel, deep sea fish" }, { ja: "デメニギス", en: "barreleye fish, deep sea fish" },
      { ja: "アンコウ", en: "anglerfish, deep sea fish" }, { ja: "カエルアンコウ", en: "frogfish, fish" }
    ];

    // Marine Env
    const DATA_MARINE_ENV_CORAL = [ { ja: "珊瑚礁生態系", en: "coral reef ecosystem" }, { ja: "礁斜面", en: "reef slope habitat" }, { ja: "ラグーン", en: "lagoon waters" } ];
    const DATA_MARINE_ENV_OPEN = [ { ja: "外洋表層", en: "open ocean surface" }, { ja: "外洋中層", en: "open ocean midwater" }, { ja: "回遊帯", en: "migratory ocean corridor" } ];
    const DATA_MARINE_ENV_DEEP = [ { ja: "深海（暗黒層）", en: "deep sea aphotic zone" }, { ja: "深海溝", en: "abyssal trench waters" }, { ja: "深海底近く", en: "near seafloor abyssal zone" } ];
    const DATA_MARINE_ENV_COASTAL = [ { ja: "沿岸浅瀬", en: "coastal shallows" }, { ja: "干潟", en: "tidal flats" }, { ja: "岩礁帯", en: "rocky shore waters" } ];
    const DATA_MARINE_ENV_COLD = [ { ja: "寒冷海域", en: "cold water seas" }, { ja: "流氷縁", en: "pack ice edge waters" }, { ja: "亜寒帯海域", en: "subarctic waters" } ];
    
    // Marine Relations
    const DATA_ENVREL_CORAL = [ { ja: "共生（共存）", en: "symbiotic coexistence" }, { ja: "縄張り防衛", en: "territorial defense" }, { ja: "群れの回遊", en: "schooling behavior" }, { ja: "擬態・溶け込み", en: "camouflage merge" }, { ja: "相互クリーニング", en: "mutual cleaning" } ];
    const DATA_ENVREL_OPEN = [ { ja: "編隊同行", en: "escort formation" }, { ja: "集団連携", en: "pod coordination" }, { ja: "追跡狩り", en: "pursuit hunting" }, { ja: "回遊整列", en: "migratory alignment" }, { ja: "外洋優位", en: "open water dominance" } ];
    const DATA_ENVREL_DEEP = [ { ja: "待ち伏せ", en: "ambush predator" }, { ja: "静かな追尾", en: "silent stalking" }, { ja: "発光の視線", en: "bioluminescent gaze" }, { ja: "深淵の守護", en: "guardian bond (deep)" }, { ja: "深海の合図", en: "bioluminescent signaling" } ];
    const DATA_ENVREL_COASTAL = [ { ja: "浅瀬の待ち伏せ", en: "shoreline ambush" }, { ja: "潮汐の干渉", en: "tidal interaction" }, { ja: "協力狩り", en: "cooperative hunting" }, { ja: "巣の防衛", en: "nesting protection" }, { ja: "人の気配", en: "human proximity awareness" } ];
    const DATA_ENVREL_COLD = [ { ja: "群れの連携", en: "pack hunting" }, { ja: "呼吸の同期", en: "surface breathing sync" }, { ja: "氷縁の出現", en: "ice edge emergence" }, { ja: "耐寒の絆", en: "thermal endurance bond" }, { ja: "母性の護り", en: "maternal protection" } ];
    const DATA_DEEP_BIOLUM = [ { ja: "誘引灯（獲物誘導）", en: "lure light (prey guidance)" }, { ja: "威嚇発光", en: "warning bioluminescence" }, { ja: "合図発光（群れ）", en: "signal glow (school)" }, { ja: "視線発光（眼光）", en: "glowing gaze" }, { ja: "追尾光（背面誘導）", en: "trailing light lure" }, { ja: "同調点滅", en: "synchronized pulsing" }, { ja: "対向照明（影消し）", en: "counterillumination" } ];
    const DATA_DEEP_PRESSURE = [ { ja: "高圧域の緊張", en: "high-pressure tension" }, { ja: "影の輪郭（輪郭だけ）", en: "silhouette-only presence" }, { ja: "暗闇の凝視", en: "stare from darkness" }, { ja: "遠距離の接近", en: "approach in the dark" } ];
    const DATA_DEEP_RUINS = [ { ja: "沈殿した遺構", en: "submerged ruins remnants" }, { ja: "噴出孔の熱流", en: "hydrothermal vent currents" }, { ja: "深海礫の回廊", en: "abyssal rubble corridor" }, { ja: "遺跡の巡回", en: "patrol around ruins" } ];

    // ---- Relations (Original 7 + New 3) ----
    const DATA_REL_CONTACT = [
      { ja: "寄り添う", en: "snuggling close" }, { ja: "肩にとまる", en: "perched on shoulder" },
      { ja: "頭の上にとまる", en: "perched on head" }, { ja: "手の上にとまる", en: "perched on hand" },
      { ja: "頬に触れる", en: "nuzzling cheek" }, { ja: "足元に寄る", en: "by your feet" },
      { ja: "膝の上", en: "on lap" }
    ];
    const DATA_REL_GAZE = [
      { ja: "目線を合わせる", en: "eye contact" }, { ja: "じっと見つめる", en: "intense gaze" },
      { ja: "安心した目", en: "calm, trusting eyes" }, { ja: "警戒の視線", en: "wary gaze" },
      { ja: "発光の視線", en: "bioluminescent gaze" }
    ];
    const DATA_REL_ACTIONS = [
      { ja: "周囲を泳ぐ", en: "swimming around" }, { ja: "周囲を飛ぶ", en: "flying around" },
      { ja: "先導する", en: "leading the way" }, { ja: "護衛する", en: "escorting" },
      { ja: "追尾する", en: "following closely" }, { ja: "群れで移動", en: "moving as a group" }
    ];
    const DATA_REL_PRIMATE = [
      { ja: "道具を使う", en: "tool use behavior" }, { ja: "合図で連携", en: "gesture communication" },
      { ja: "模倣する", en: "imitation learning" }, { ja: "知的観察", en: "curious intelligent observation" }
    ];
    const DATA_REL_COIL = [
      { ja: "巻き付く", en: "coiling around" }, { ja: "腕に絡む", en: "wrapped around arm" },
      { ja: "腰に絡む", en: "wrapped around waist" }, { ja: "締め付ける", en: "constricting hold" }
    ];
    const DATA_REL_AQUATIC = [
      { ja: "伴泳（並走）", en: "swimming alongside" }, { ja: "水面へ誘導", en: "guiding to the surface" },
      { ja: "群れが道を作る", en: "school forming a pathway" }, { ja: "クラゲの回廊", en: "jellyfish corridor" },
      { ja: "泡を避けて進む", en: "moving through bubble streams" }
    ];
    const DATA_REL_GUARD = [
      { ja: "守護する", en: "guardian bond" }, { ja: "契約の印", en: "bond mark" },
      { ja: "従者として同行", en: "faithful companion" }, { ja: "主従の誓い", en: "oath of loyalty" }
    ];

    const DATA_REL_DOG = [
      { ja: "お座り/待て", en: "dog sitting, waiting command" },
      { ja: "お手/おかわり", en: "dog paw shake, trick" },
      { ja: "伏せ", en: "dog lying down" },
      { ja: "おいで（呼び戻し）", en: "dog recall, running to master" },
      { ja: "じゃれつく/甘噛み", en: "playful biting, puppy play" },
      { ja: "尻尾を振る", en: "dog wagging tail, happy" },
      { ja: "腹を見せる", en: "dog belly up, submissive pose" },
      { ja: "ボール遊び", en: "playing fetch with ball" }
    ];
    
    const DATA_REL_CAT = [
      { ja: "ふみふみ（前足）", en: "cat kneading, making biscuits" },
      { ja: "香箱座り", en: "cat loaf, sitting with paws tucked" },
      { ja: "すりすり（マーキング）", en: "cat rubbing against leg, scent marking" },
      { ja: "毛づくろい", en: "cat grooming, licking fur" },
      { ja: "シャー（威嚇）", en: "cat hissing, arched back" },
      { ja: "狩りの姿勢（お尻フリフリ）", en: "cat hunting pose, pouncing preparation" },
      { ja: "へそ天（リラックス）", en: "cat sleeping on back, relaxed" }
    ];

    const DATA_REL_MUTUAL = [
      { ja: "追いかけっこ", en: "chasing each other, playful chase" },
      { ja: "威嚇し合う", en: "facing off, hissing at each other" },
      { ja: "微妙な距離感", en: "keeping distance, awkward tension" },
      { ja: "同じ場所で寝る", en: "sleeping together, cuddling animals" },
      { ja: "匂いを嗅ぎ合う", en: "sniffing each other, greeting" },
      { ja: "鼻と鼻を合わせる", en: "nose boop, animal greeting" },
      { ja: "縄張り争い", en: "turf war, fighting" }
    ];

    const DATA_REL_PACK_TERRITORY = [
      { ja: "群れ（編隊・隊列）", en: "moving in formation, group formation" },
      { ja: "群れの連携", en: "pack coordination, coordinated movement" },
      { ja: "群れの防衛", en: "group defense, protective formation" },
      { ja: "縄張り（テリトリー）", en: "territory, territorial behavior" },
      { ja: "縄張りの巡回", en: "territory patrol" },
      { ja: "マーキング（匂い）", en: "scent marking, territorial marking" },
      { ja: "威嚇・誇示", en: "dominance display, threat display" },
      { ja: "序列（ボス/リーダー）", en: "hierarchy, alpha leader" },
      { ja: "発情期・求愛", en: "mating season, courtship behavior" },
      { ja: "巣の領域", en: "nest territory, nesting area" },
      { ja: "回遊ルート", en: "migration route, migratory path" }
    ];

    // ✅ NEW DATA: Small Animals
    const DATA_SMALL_RABBITS = [
      { ja: "うさぎ（一般）", en: "rabbit, bunny" },
      { ja: "ネザーランドドワーフ", en: "Netherland Dwarf rabbit, small ears" },
      { ja: "ホーランドロップ", en: "Holland Lop rabbit, lop ears" },
      { ja: "アンゴラウサギ", en: "Angora rabbit, fluffy long hair" },
      { ja: "野うさぎ", en: "hare, wild rabbit" },
      { ja: "白うさぎ", en: "white rabbit, red eyes" }
    ];

    const DATA_SMALL_MUSTELIDS = [
      { ja: "フェレット", en: "ferret" },
      { ja: "イタチ", en: "weasel" },
      { ja: "オコジョ（冬毛）", en: "stoat, ermine, white winter fur" },
      { ja: "カワウソ", en: "otter, river otter" },
      { ja: "ミンク", en: "mink" },
      { ja: "アナグマ", en: "badger" }
    ];

    const DATA_SMALL_HEDGE = [
      { ja: "ハリネズミ", en: "hedgehog, spiky" },
      { ja: "モグラ", en: "mole, digging" },
      { ja: "トガリネズミ", en: "shrew, tiny snout" }
    ];

    const DATA_SMALL_GLIDERS = [
      { ja: "フクロモモンガ", en: "sugar glider, gliding" },
      { ja: "モモンガ", en: "Japanese dwarf flying squirrel, momonga" },
      { ja: "ムササビ", en: "giant flying squirrel" }
    ];

    const DATA_SMALL_MARSUPIALS = [
      { ja: "ウォンバット", en: "wombat, sturdy burrowing marsupial, rounded ears" },
      { ja: "コアラ", en: "koala, tree-dwelling marsupial" },
      { ja: "クオッカ", en: "quokka, small smiling marsupial" },
      { ja: "ワラビー", en: "wallaby, small kangaroo-like marsupial" },
      { ja: "カンガルー", en: "kangaroo, large hopping marsupial, powerful hind legs" },
      { ja: "タスマニアデビル", en: "Tasmanian devil, stocky carnivorous marsupial" }
    ];

    const DATA_SMALL_CUTE = [
      { ja: "ふわふわの毛", en: "fluffy fur, soft texture" },
      { ja: "つぶらな瞳", en: "round beady eyes" },
      { ja: "小さな手足", en: "tiny paws" },
      { ja: "鼻をヒクヒク", en: "twitching nose" },
      { ja: "丸まった姿", en: "curled up ball" }
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

    function textHasAny(text, words) {
      const t = String(text || "").toLowerCase();
      return (words || []).some(w => t.includes(String(w || "").toLowerCase()));
    }

    function isCreaturePoseRelationLike(item) {
      const t = `${item && item.ja || ""} ${item && item.en || ""}`.toLowerCase();
      return textHasAny(t, [
        "beside human", "with human", "human holding", "human carries", "riding",
        "eye contact", "trust bond", "guarding", "protecting", "following",
        "relationship", "companion distance", "pack formation", "territory",
        "creature looks at", "動物の視線", "関係", "接触", "守護", "群れ"
      ]);
    }

    function classifyCreaturePoseShortcut(item) {
      if (!item || !item.en || isCreaturePoseRelationLike(item)) return null;
      const t = `${item.ja || ""} ${item.en || ""}`.toLowerCase();

      if (textHasAny(t, [
        "shima-enaga", "bushtit", "long-tailed bushtit", "white head shima",
        "sparrow", "swallow", "owl", "eagle", "hawk", "pelican", "swan",
        "penguin", "crow", "pigeon", "bird", "phoenix", "thunder bird", "crane"
      ])) {
        return {
          family: "bird",
          targetShelf: "🐦 鳥・翼の動き",
          focusLabel: "人物＋選択中の鳥：肩に止まる＋別個体",
          title: "鳥類に合うポーズ候補"
        };
      }

      if (textHasAny(t, [
        "galago", "bushbaby", "prosimian", "primate", "aye-aye", "tarsier",
        "marmoset", "new world monkey", "tamarin", "capuchin", "night monkey",
        "macaque", "monkey", "japanese macaque", "baboon", "mandrill",
        "langur", "colobus", "vervet", "gibbon", "siamang", "hoolock",
        "chimpanzee", "bonobo", "gorilla", "orangutan"
      ])) {
        return {
          family: "primate",
          targetShelf: "🐒 霊長類・樹上動物",
          focusLabel: "人物＋選択中の霊長類：少し離れて並ぶ＋別個体",
          title: "霊長類に合うポーズ候補"
        };
      }

      if (textHasAny(t, [
        "hamster", "guinea pig", "marmot", "chinchilla", "degu", "mouse", "rat",
        "gerbil", "dormouse", "lemming", "jerboa", "kangaroo rat", "squirrel",
        "chipmunk", "prairie dog", "rodent"
      ])) {
        return {
          family: "small_rodent",
          targetShelf: "🐹 小型齧歯類・小動物",
          focusLabel: "人物＋選択中の小型齧歯類：手の上＋餌持ち＋別個体",
          title: "小型齧歯類に合うポーズ候補"
        };
      }

      if (textHasAny(t, ["flying squirrel", "sugar glider", "gliding membrane", "gliding"])) {
        return {
          family: "glider",
          targetShelf: "🦘 有袋類・珍獣",
          focusLabel: "人物＋選択中の滑空小動物：肩・腕に乗る＋別個体",
          title: "滑空小動物に合うポーズ候補"
        };
      }

      if (textHasAny(t, ["rabbit", "hare", "bunny", "pika"])) {
        return {
          family: "rabbit",
          targetShelf: "🐰 うさぎ・小型哺乳類",
          focusLabel: "人物＋うさぎ：膝前のうさぎ＋別個体",
          title: "うさぎ類に合うポーズ候補"
        };
      }

      if (textHasAny(t, ["mink", "ferret", "weasel", "otter", "stoat", "ermine", "badger", "mustelid", "hedgehog", "mole", "shrew"])) {
        return {
          family: "small_mammal",
          targetShelf: "🐰 うさぎ・小型哺乳類",
          focusLabel: "人物＋選択中の小型哺乳類：膝前＋別個体",
          title: "小型哺乳類に合うポーズ候補"
        };
      }

      if (textHasAny(t, ["kangaroo", "wallaby", "koala", "wombat", "quokka", "tasmanian devil", "marsupial"])) {
        return {
          family: "marsupial",
          targetShelf: "🦘 有袋類・珍獣",
          focusLabel: "人物＋選択中の有袋類：少し離れて並ぶ＋別個体",
          title: "有袋類に合うポーズ候補"
        };
      }

      if (textHasAny(t, ["cat", "feline", "lion", "tiger", "leopard", "panther", "lynx"])) {
        return {
          family: "cat",
          targetShelf: "🐱 猫・ネコ科",
          focusLabel: "人物＋猫：膝の上の猫＋撫でる手＋別個体",
          title: "猫・ネコ科に合うポーズ候補"
        };
      }

      if (textHasAny(t, ["dog", "puppy", "wolf", "fox", "canine", "hound", "retriever", "terrier", "poodle", "shiba", "akita", "husky"])) {
        return {
          family: "dog",
          targetShelf: "🐶 犬・狼・狐",
          focusLabel: "人物＋犬：隣でおすわり＋撫でる手＋別個体",
          title: "犬・狼・狐に合うポーズ候補"
        };
      }

      if (textHasAny(t, ["horse", "deer", "stag", "giraffe", "elephant", "zebra", "cow", "goat", "sheep", "antelope"])) {
        return {
          family: "large_herbivore",
          targetShelf: "🐴 馬・鹿・大型草食",
          focusLabel: "馬・鹿単体：ギャロップ＋前脚上げ＋鹿の跳躍",
          title: "大型草食動物に合うポーズ候補"
        };
      }

      if (textHasAny(t, ["bear", "panda", "red panda", "raccoon"])) {
        return {
          family: "large_mammal",
          targetShelf: "🐻 熊・大型哺乳類",
          focusLabel: "大型哺乳類単体：二本立ち＋のし歩き＋鮭を捕る",
          title: "大型哺乳類に合うポーズ候補"
        };
      }

      if (textHasAny(t, ["snake", "python", "cobra", "viper", "boa", "lizard", "iguana", "gecko", "turtle", "tortoise", "crocodile", "alligator", "frog", "toad", "reptile", "amphibian"])) {
        return {
          family: "reptile",
          targetShelf: "🦎 爬虫類・両生類",
          focusLabel: "爬虫類・両生類単体：低い這い＋とぐろ＋しゃがみ",
          title: "爬虫類・両生類に合うポーズ候補"
        };
      }

      if (textHasAny(t, ["oyster", "bivalve", "clam", "scallop", "mussel", "sea anemone", "coral", "portuguese man o' war", "siphonophore", "jellyfish"])) {
        return {
          family: "marine_invertebrate",
          targetShelf: "🪸 海洋無脊椎・浮遊生物",
          focusLabel: "海洋無脊椎：殻・触手・群体を見せる",
          title: "海洋無脊椎・浮遊生物の構図候補"
        };
      }

      if (textHasAny(t, ["fish", "shark", "dolphin", "whale", "seal", "sea lion", "otter", "aquatic", "marine"])) {
        return {
          family: "aquatic",
          targetShelf: "🐬 水生動物",
          focusLabel: "水生動物単体：イルカジャンプ＋ラッコ浮遊＋サメ旋回",
          title: "水生動物に合うポーズ候補"
        };
      }

      if (textHasAny(t, ["butterfly", "mantis", "spider", "bee", "beetle", "scorpion", "crab", "insect", "arthropod", "crustacean"])) {
        return {
          family: "insect",
          targetShelf: "🦋 昆虫・節足動物",
          focusLabel: "昆虫・節足動物単体：蝶羽休め＋カマキリ構え＋サソリ尾上げ",
          title: "昆虫・節足動物に合うポーズ候補"
        };
      }

      if (textHasAny(t, ["dragon", "griffin", "unicorn", "cerberus", "mythical", "fantasy creature"])) {
        return {
          family: "fantasy",
          targetShelf: "🐉 幻獣・ドラゴン",
          focusLabel: "ドラゴン単体：翼広げ＋飛び立ち＋咆哮",
          title: "幻獣・ドラゴンに合うポーズ候補"
        };
      }

      return null;
    }

    function getCreaturePoseShortcutBox(anchorRow) {
      // v18連動案内は、棚の奥ではなく画面下部の固定カードへ出す。
      // 選択した動物の直下へ差し込む方式だと、固定出力バーや深い棚で見失いやすいため。
      let box = document.getElementById("creature-pose-shortcut-box");

      if (!box) {
        box = el("div", {
          id: "creature-pose-shortcut-box",
          style: [
            "display:none",
            "position:fixed",
            "left:10px",
            "right:10px",
            "bottom:12px",
            "z-index:2147483640",
            "box-sizing:border-box",
            "padding:10px",
            "border:2px solid #16a34a",
            "border-radius:14px",
            "background:#f0fdf4",
            "box-shadow:0 8px 24px rgba(0,0,0,0.20)",
            "font-size:13px",
            "line-height:1.35",
            "color:#14532d"
          ].join(";")
        });
        document.body.appendChild(box);
      }

      return box;
    }

    function openCreatureShortcutPoseSectionOnly() {
      const poseSection = document.getElementById("list-pose");
      const poseRoot = document.getElementById("pose-master-root");
      const target = poseRoot || poseSection;
      if (!target) return false;

      try {
        if (poseSection) {
          const directDetails = Array.from(poseSection.children || []).find(ch => ch && ch.tagName === "DETAILS");
          if (directDetails) directDetails.open = true;
        }
        let node = target;
        while (node && node !== document.body) {
          if (node.tagName === "DETAILS") node.open = true;
          node = node.parentElement;
        }
      } catch(_) {}

      try {
        (poseRoot || poseSection).scrollIntoView({ behavior: "smooth", block: "center" });
      } catch(_) {
        try { (poseRoot || poseSection).scrollIntoView(false); } catch(__) {}
      }
      return true;
    }

    function requestCreaturePoseShortcut(detail) {
      if (!detail) return false;

      window.__SHIMA_PENDING_CREATURE_POSE_SHORTCUT__ = detail;

      let handled = false;
      try {
        if (typeof window.__SHIMA_HANDLE_CREATURE_POSE_SHORTCUT__ === "function") {
          handled = !!window.__SHIMA_HANDLE_CREATURE_POSE_SHORTCUT__(detail);
        }
      } catch(_) {}

      try {
        window.dispatchEvent(new CustomEvent("shima:creature-pose-shortcut", { detail }));
      } catch(_) {
        try {
          const ev = document.createEvent("CustomEvent");
          ev.initCustomEvent("shima:creature-pose-shortcut", true, true, detail);
          window.dispatchEvent(ev);
        } catch(__) {}
      }

      if (!handled) {
        try {
          if (typeof window.__SHIMA_HANDLE_CREATURE_POSE_SHORTCUT__ === "function") {
            handled = !!window.__SHIMA_HANDLE_CREATURE_POSE_SHORTCUT__(detail);
          }
        } catch(_) {}
      }

      // Pose側のリスナーがまだ未準備でも、少なくともPose欄本体へは移動する。
      if (!handled) handled = openCreatureShortcutPoseSectionOnly();

      // Pose v18 が後から描画された場合に備えて、保留データをもう一度処理する。
      setTimeout(() => {
        try {
          if (typeof window.__SHIMA_HANDLE_CREATURE_POSE_SHORTCUT__ === "function") {
            window.__SHIMA_HANDLE_CREATURE_POSE_SHORTCUT__(window.__SHIMA_PENDING_CREATURE_POSE_SHORTCUT__ || detail);
          }
        } catch(_) {}
      }, 160);

      setTimeout(() => {
        try {
          if (typeof window.__SHIMA_HANDLE_CREATURE_POSE_SHORTCUT__ === "function") {
            window.__SHIMA_HANDLE_CREATURE_POSE_SHORTCUT__(window.__SHIMA_PENDING_CREATURE_POSE_SHORTCUT__ || detail);
          }
        } catch(_) {}
      }, 520);

      return handled;
    }

    function showCreaturePoseShortcut(item, target, anchorRow) {
      const box = getCreaturePoseShortcutBox(anchorRow);
      if (!box || !target) return;

      const animalName = item && item.ja ? item.ja : "選択した動物";
      box.innerHTML = "";
      box.style.display = "block";

      const msg = el("div", { style: "font-weight:800; margin-bottom:6px;" }, `🐾 ${animalName}：${target.title || "対応ポーズ候補"}があります。`);
      const sub = el("div", { style: "margin-bottom:8px;" }, `Pose欄の「${target.targetShelf}」へショートカットしますか？`);
      const actions = el("div", { style: "display:flex; flex-wrap:wrap; gap:8px; justify-content:flex-end;" });

      const noBtn = el("button", { type: "button", style: "border:1px solid #94a3b8; background:#fff; border-radius:999px; padding:6px 10px; font-weight:700; flex:1 1 120px;" }, "いいえ");
      const yesBtn = el("button", { type: "button", style: "border:1px solid #16a34a; background:#dcfce7; color:#14532d; border-radius:999px; padding:6px 10px; font-weight:800; flex:1 1 150px;" }, "はい：ポーズへ移動");

      noBtn.addEventListener("click", () => { box.style.display = "none"; });
      yesBtn.addEventListener("click", () => {
        const detail = {
          source: "creatures",
          animalName,
          creatureValue: item && item.en || "",
          family: target.family,
          targetShelf: target.targetShelf,
          focusLabel: target.focusLabel
        };

        yesBtn.disabled = true;
        yesBtn.textContent = "移動中…";
        const moved = requestCreaturePoseShortcut(detail);

        if (moved) {
          setTimeout(() => { box.style.display = "none"; }, 180);
        } else {
          sub.textContent = "Pose欄の準備待ちです。Pose欄を開いてから、もう一度「はい」を押してください。";
          yesBtn.disabled = false;
          yesBtn.textContent = "はい：ポーズへ移動";
        }
      });

      actions.appendChild(noBtn);
      actions.appendChild(yesBtn);
      box.appendChild(msg);
      box.appendChild(sub);
      box.appendChild(actions);

      // 固定カードなので、棚内スクロール位置は動かさない。
    }

    function makeCheckboxRow(item) {
      const id = `cr_${Math.random().toString(36).slice(2)}`;
      const cb = el("input", { type: "checkbox", id, "data-val": item.en });
      const lb = el("label", { for: id, text: `${item.ja} / ${item.en}` });
      lb.style.display = "block";
      lb.style.whiteSpace = "normal";
      lb.style.wordBreak = "break-word";
      lb.style.overflowWrap = "anywhere";
      lb.style.minWidth = "0";
      lb.style.maxWidth = "100%";
      lb.style.fontSize = "12px";
      lb.style.lineHeight = "1.25";
      const row = el("div", {
        class: "row",
        style: "display:grid; grid-template-columns:26px 1fr; column-gap:8px; align-items:start; margin:6px 0; min-width:0; max-width:100%; box-sizing:border-box;"
      }, [cb, lb]);

      cb.addEventListener("change", () => {
        if (!cb.checked) return;
        const target = classifyCreaturePoseShortcut(item);
        if (target) showCreaturePoseShortcut(item, target, row);
      });

      return row;
    }

    // Alias for backward-compat
    function makeCheck(item){ return makeCheckboxRow(item); }

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

    function makeGroupContainer(title, accent) {
      const det = el("details", { class: "creatures-acc", style: `margin:10px 0; border:2px solid ${accent}; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box; min-width:0; overflow:hidden;` });
      det.open = false;
      const sum = el("summary", { text: title, style: "cursor:pointer; font-weight:800; font-size:14px; padding:4px 2px; line-height:1.1; display:flex; align-items:center; gap:8px; min-height:32px;" });
      const box = el("div", { class: "creatures-box", style: "margin-top:6px; display:block; min-width:0; max-width:100%; box-sizing:border-box;" });
      det.appendChild(sum);
      det.appendChild(box);
      return { det, box };
    }

    // Dogs / Cats Generators
    function makeDogGroup() {
      const outer = makeGroupContainer("🐶 犬 / Dog", "#1e88e5");
      const dogLarge = [
        { ja:"ゴールデンレトリバー", en:"golden retriever, large dog" }, { ja:"ラブラドールレトリバー", en:"labrador retriever, large dog" },
        { ja:"ジャーマンシェパード", en:"german shepherd, large dog" }, { ja:"秋田犬", en:"akita inu, large dog" },
        { ja:"シベリアンハスキー", en:"siberian husky, large dog" }, { ja:"アラスカンマラミュート", en:"alaskan malamute, large dog" },
        { ja:"サモエド", en:"samoyed, fluffy white dog" }, { ja:"セントバーナード", en:"saint bernard, giant dog" },
        { ja:"グレートデーン", en:"great dane, giant dog" }, { ja:"グレートピレニーズ", en:"great pyrenees, large dog" },
        { ja:"バーニーズマウンテンドッグ", en:"bernese mountain dog, large dog" }, { ja:"ニューファンドランド", en:"newfoundland dog, giant dog" },
        { ja:"レオンベルガー", en:"leonberger, giant dog" }, { ja:"カネコルソ", en:"cane corso, large dog" },
        { ja:"ロットワイラー", en:"rottweiler, large dog" }, { ja:"チベタンマスティフ", en:"tibetan mastiff, giant dog" },
        { ja:"アイリッシュウルフハウンド", en:"irish wolfhound, giant dog" }, { ja:"ベルジアンマリノア", en:"belgian malinois, large dog" },
        { ja:"スタンダードプードル", en:"standard poodle, large dog" }, { ja:"ドーベルマン", en:"doberman, large dog" },
        { ja:"ボルゾイ", en:"borzoi, large dog" }, { ja:"グレートスイスマウンテンドッグ", en:"greater swiss mountain dog, large dog" }
      ];
      const dogMedium = [
        { ja:"ボーダーコリー", en:"border collie, medium dog" }, { ja:"シバイヌ", en:"shiba inu, medium dog" },
        { ja:"ビーグル", en:"beagle, medium dog" }, { ja:"ブルドッグ", en:"bulldog, medium dog" },
        { ja:"スタンダードプードル", en:"standard poodle, medium dog" }, { ja:"ボクサー", en:"boxer, medium dog" },
        { ja:"オーストラリアンシェパード", en:"australian shepherd, medium dog" }, { ja:"シェットランドシープドッグ", en:"shetland sheepdog, medium dog" },
        { ja:"バセンジー", en:"basenji, medium dog" }, { ja:"ウィペット", en:"whippet, medium dog" },
        { ja:"アメリカンコッカースパニエル", en:"american cocker spaniel, medium dog" }, { ja:"イングリッシュコッカースパニエル", en:"english cocker spaniel, medium dog" },
        { ja:"スタンダードシュナウザー", en:"standard schnauzer, medium dog" }, { ja:"キャバリア", en:"cavalier king charles spaniel, medium dog" },
        { ja:"ジャックラッセルテリア", en:"jack russell terrier, medium dog" }, { ja:"甲斐犬", en:"kai ken, medium dog" },
        { ja:"ウェルシュコーギー", en:"pembroke welsh corgi, medium dog" }, { ja:"バセットハウンド", en:"basset hound, medium dog" },
        { ja:"ポメスキー", en:"pomeranian x husky, medium dog, pomsky" }, { ja:"キャバプー", en:"cavalier x poodle, medium dog, cavapoo" },
        { ja:"コッカプー", en:"cocker spaniel x poodle, medium dog, cockapoo" }, { ja:"ポメ柴", en:"pomeranian x shiba, small to medium dog, pom-shiba" },
        { ja:"柴チワ", en:"shiba x chihuahua, small to medium dog, shiba-chi" }
      ];
      const dogSmall = [
        { ja:"ミニチュアダックスフンド", en:"miniature dachshund, small dog" }, { ja:"チワワ", en:"chihuahua, small dog" },
        { ja:"ポメラニアン", en:"pomeranian, small dog" }, { ja:"トイプードル", en:"toy poodle, small dog" },
        { ja:"ヨークシャーテリア", en:"yorkshire terrier, small dog" }, { ja:"マルチーズ", en:"maltese, small dog" },
        { ja:"パグ", en:"pug, small dog" }, { ja:"シーズー", en:"shih tzu, small dog" },
        { ja:"パピヨン", en:"papillon, small dog" }, { ja:"ミニチュアシュナウザー", en:"miniature schnauzer, small dog" },
        { ja:"ボストンテリア", en:"boston terrier, small dog" }, { ja:"コーギー", en:"corgi, small dog" },
        { ja:"ペキニーズ", en:"pekingese, small dog" }, { ja:"ミニチュアピンシャー", en:"miniature pinscher, small dog" },
        { ja:"ウェスティ", en:"west highland white terrier, small dog, westie" }, { ja:"マルプー", en:"maltipoo, small dog" },
        { ja:"ポメプー", en:"pomapoo, small dog" }, { ja:"チワプー", en:"chihuahua x toy poodle, small dog, chi-poo" },
        { ja:"チワックス", en:"dachshund x chihuahua, small dog, chiweenie" }
      ];
      outer.box.appendChild(makeGroup("🦴 大型犬 / Large Dogs", dogLarge, "#1e88e5"));
      outer.box.appendChild(makeGroup("🐾 中型犬 / Medium Dogs", dogMedium, "#1e88e5"));
      outer.box.appendChild(makeGroup("🧸 小型犬 / Small Dogs", dogSmall, "#1e88e5"));
      return outer.det;
    }

    function makeCatGroup() {
      const outer = makeGroupContainer("🐱 猫 / Cat", "#43a047");
      const catLong = [
        { ja:"ペルシャ", en:"persian cat, long hair" }, { ja:"ノルウェージャンフォレストキャット", en:"norwegian forest cat, long hair" },
        { ja:"メインクーン", en:"maine coon, large long hair cat" }, { ja:"ラグドール", en:"ragdoll cat, long hair" },
        { ja:"サイベリアン", en:"siberian cat, long hair" }, { ja:"ターキッシュアンゴラ", en:"turkish angora, long hair" },
        { ja:"ヒマラヤン", en:"himalayan cat, long hair" }, { ja:"ラガマフィン", en:"ragamuffin cat, long hair" },
        { ja:"ブリティッシュロングヘア", en:"british longhair cat" }, { ja:"ミヌエット", en:"minuet cat, long hair, napoleon cat" }
      ];
      const catShort = [
        { ja:"雑種猫", en:"domestic shorthair cat" }, { ja:"ブリティッシュショートヘア", en:"british shorthair cat" },
        { ja:"ロシアンブルー", en:"russian blue cat" }, { ja:"シャム", en:"siamese cat" },
        { ja:"スコティッシュフォールド", en:"scottish fold cat" }, { ja:"マンチカン", en:"munchkin cat, short legs" },
        { ja:"スフィンクス", en:"sphynx cat, hairless" }, { ja:"アメリカンショートヘア", en:"american shorthair cat" },
        { ja:"ベンガル", en:"bengal cat" }, { ja:"オリエンタルショートヘア", en:"oriental shorthair cat" },
        { ja:"アビシニアン", en:"abyssinian cat" }, { ja:"アメリカンカール", en:"american curl cat" },
        { ja:"エジプシャンマウ", en:"egyptian mau cat" }, { ja:"エキゾチックショートヘア", en:"exotic shorthair cat" },
        { ja:"デボンレックス", en:"devon rex cat" }, { ja:"セルカークレックス", en:"selkirk rex cat" }
      ];
      const catPattern = [
        { ja:"黒猫", en:"black cat" }, { ja:"白猫", en:"white cat" }, { ja:"茶トラ", en:"orange tabby cat" },
        { ja:"サバトラ", en:"gray tabby cat" }, { ja:"三毛猫", en:"calico cat" }, { ja:"ハチワレ", en:"bicolor cat" },
        { ja:"キジトラ", en:"brown tabby cat" }, { ja:"シルバータビー", en:"silver tabby cat" },
        { ja:"ポイント柄", en:"point coloration cat" }, { ja:"オッドアイ", en:"heterochromia cat" },
        { ja:"白黒猫", en:"tuxedo cat" }, { ja:"サビ猫", en:"tortoiseshell cat" },
        { ja:"クリームタビー", en:"cream tabby cat" }, { ja:"白茶", en:"orange and white bicolor cat" },
        { ja:"ブルー系", en:"blue coat cat" }, { ja:"クリーム系", en:"cream coat cat" },
        { ja:"シールポイント", en:"seal point cat" }, { ja:"リンクスポイント", en:"lynx point cat" },
        { ja:"シルバーシェーデッド", en:"silver shaded cat" }, { ja:"ゴールデンシェーデッド", en:"golden shaded cat" },
        { ja:"オッドアイ白猫", en:"odd-eyed white cat, heterochromia" }
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

      // Real Birds
      const real = el("details", { class: "creatures-acc", style: "margin:8px 0; border:2px solid #1f2937; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box; min-width:0; overflow:hidden; flex:1 1 320px; max-width:100%;" });
      real.open = false;
      const realSum = el("summary", { text: "🪶 現実の鳥 / Real Birds", style: "cursor:pointer; font-weight:800; font-size:13px; padding:3px 2px; line-height:1.1; display:flex; align-items:center; gap:8px; min-height:32px;" });
      const realBox = el("div", { class: "creatures-box", style: "margin-top:6px; display:block; min-width:0; max-width:100%; box-sizing:border-box;" });

      const small = el("details", { class: "creatures-acc", style: "margin:8px 0; border:2px dashed #2563eb; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box;" });
      small.open = false;
      small.appendChild(el("summary", { text: "🐤 小鳥 / Small Birds", style: "cursor:pointer; font-weight:800; font-size:13px;" }));
      const smallBox = el("div", { style: "margin-top:6px" });
      
      const shima = el("details", { class: "creatures-acc", style: "margin:8px 0; border:2px dashed #2563eb; border-radius:10px; background:#fff; padding:8px;" });
      shima.open = false;
      shima.appendChild(el("summary", { text: "🐦 シマエナガ / Shima-enaga", style: "cursor:pointer; font-weight:800; font-size:13px;" }));
      const shimaBox = el("div", { style: "margin-top:6px" });
      DATA_SHIMAENAGA.forEach(it => shimaBox.appendChild(makeCheckboxRow({ ja: `シマエナガ：${it.ja}`, en: it.en })));
      shima.appendChild(shimaBox);
      smallBox.appendChild(shima);
      smallBox.appendChild(makeCheckboxRow({ ja: "スズメ", en: "sparrow, small bird" }));
      smallBox.appendChild(makeCheckboxRow({ ja: "ツバメ", en: "swallow, small bird" }));
      small.appendChild(smallBox);
      realBox.appendChild(small);

      // Raptors
      const raptor = el("details", { class: "creatures-acc", style: "margin:8px 0; border:2px dashed #f59e0b; border-radius:10px; background:#fff; padding:8px;" });
      raptor.open = false;
      raptor.appendChild(el("summary", { text: "🦅 猛禽類 / Birds of Prey", style: "cursor:pointer; font-weight:800; font-size:13px;" }));
      const raptorBox = el("div", { style: "margin-top:6px" });
      raptorBox.appendChild(makeCheckboxRow({ ja: "フクロウ", en: "owl" }));
      raptorBox.appendChild(makeCheckboxRow({ ja: "ワシ", en: "eagle" }));
      raptorBox.appendChild(makeCheckboxRow({ ja: "タカ", en: "hawk" }));
      raptor.appendChild(raptorBox);
      realBox.appendChild(raptor);

      // Water / Urban
      const water = el("details", { class: "creatures-acc", style: "margin:8px 0; border:2px dashed #06b6d4; border-radius:10px; background:#fff; padding:8px;" });
      water.open = false;
      water.appendChild(el("summary", { text: "🌊 水鳥 / Water Birds", style: "cursor:pointer; font-weight:800; font-size:13px;" }));
      const waterBox = el("div", { style: "margin-top:6px" });
      waterBox.appendChild(makeCheckboxRow({ ja: "ペリカン", en: "pelican, large water bird" }));
      waterBox.appendChild(makeCheckboxRow({ ja: "白鳥", en: "swan, water bird" }));
      const peng = el("details", { class: "creatures-acc", style: "margin:8px 0; border:2px dashed #06b6d4; border-radius:10px; background:#fff; padding:8px;" });
      peng.open = false;
      peng.appendChild(el("summary", { text: "🐧 ペンギン / Penguin", style: "cursor:pointer; font-weight:800; font-size:13px;" }));
      const pengBox = el("div", { style: "margin-top:6px" });
      DATA_PENGUIN.forEach(it => pengBox.appendChild(makeCheckboxRow({ ja: `ペンギン：${it.ja}`, en: it.en })));
      peng.appendChild(pengBox);
      waterBox.appendChild(peng);
      water.appendChild(waterBox);
      realBox.appendChild(water);

      const urban = el("details", { class: "creatures-acc", style: "margin:8px 0; border:2px dashed #10b981; border-radius:10px; background:#fff; padding:8px;" });
      urban.open = false;
      urban.appendChild(el("summary", { text: "🏙 都市鳥 / Urban Birds", style: "cursor:pointer; font-weight:800; font-size:13px;" }));
      const urbanBox = el("div", { style: "margin-top:6px" });
      urbanBox.appendChild(makeCheckboxRow({ ja: "カラス", en: "crow" }));
      urbanBox.appendChild(makeCheckboxRow({ ja: "ハト", en: "pigeon" }));
      urban.appendChild(urbanBox);
      realBox.appendChild(urban);

      real.appendChild(realSum);
      real.appendChild(realBox);
      box.appendChild(real);

      // Mythic
      const myth = el("details", { class: "creatures-acc", style: "margin:8px 0; border:2px solid #7c3aed; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box; flex:1 1 320px; max-width:100%;" });
      myth.open = false;
      myth.appendChild(el("summary", { text: "✨ 神話・伝説の鳥 / Mythic Birds", style: "cursor:pointer; font-weight:800; font-size:13px;" }));
      const mythBox = el("div", { style: "margin-top:6px" });
      mythBox.appendChild(makeCheckboxRow({ ja: "神話鳥：火焔の不死鳥", en: "phoenix, mythical bird, rebirth, flaming wings" }));
      mythBox.appendChild(makeCheckboxRow({ ja: "神話鳥：雷光の天翔鳥", en: "thunder bird, mythical bird, storm bringer" }));
      mythBox.appendChild(makeCheckboxRow({ ja: "神話鳥：月影の夜鶴", en: "moon crane, mythical bird, night omen" }));
      mythBox.appendChild(makeCheckboxRow({ ja: "神話鳥：日輪の王鷲", en: "sun eagle, symbol of sovereignty, divine authority" }));
      mythBox.appendChild(makeCheckboxRow({ ja: "神話鳥：冥界の鴉", en: "death crow, messenger of fate, between life and death" }));
      mythBox.appendChild(makeCheckboxRow({ ja: "神話鳥：白初鳥", en: "primordial white bird, origin of the sky" }));
      myth.appendChild(mythBox);
      box.appendChild(myth);

      det.appendChild(sum);
      det.appendChild(box);
      return det;
    }

    function classifyReptile(item) {
      const en = String(item.en || "").toLowerCase();
      if (en.includes("snake") || en.includes("python") || en.includes("cobra") || en.includes("viper") || en.includes("boa")) return "snakes";
      if (en.includes("turtle") || en.includes("tortoise")) return "turtles";
      if (en.includes("croc") || en.includes("alligator")) return "crocodilians";
      return "lizards";
    }

    function makeReptilesGroup() {
      const root = el("details", { class: "creatures-acc", style: "margin:10px 0; border:2px solid #2c3e50; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box;" });
      root.open = false;
      root.appendChild(el("summary", { text: "🦎 爬虫類 / Reptiles", style: "cursor:pointer; font-weight:800; font-size:14px; padding:4px 2px; line-height:1.1; display:flex; align-items:center; gap:8px; min-height:32px;" }));
      
      const inner = el("div", { style: "padding: 6px 0 0 0;" });
      const buckets = { lizards: [], snakes: [], turtles: [], crocodilians: [] };
      DATA_REPTILES.forEach(it => buckets[classifyReptile(it)].push(it));

      const makeSub = (title, items, accent) => {
        const d = el("details", { class: "creatures-acc", style: `margin:8px 0; border:2px dashed ${accent}; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box;` });
        d.open = false;
        d.appendChild(el("summary", { text: title, style: "cursor:pointer; font-weight:800; font-size:13px;" }));
        const box = el("div", { style: "margin-top:6px" });
        items.forEach(it => box.appendChild(makeCheckboxRow(it)));
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
      const outer = document.createElement("details");
      outer.className = "group-root";
      outer.open = false;
      outer.style.cssText = "margin:10px 0; border:2px solid #8b5a2b; border-radius:14px; padding:10px; background:#fff;";
      
      const sum = document.createElement("summary");
      sum.className = "group-title";
      sum.textContent = "🐒 霊長類 / Primates";
      sum.style.cssText = "cursor:pointer; font-weight:800; font-size:14px;";
      outer.appendChild(sum);

      const content = document.createElement("div");
      content.className = "group-content";
      content.style.cssText = "border:2px solid #8B5A2B; border-radius:14px; padding:10px; margin-top:8px;";

      const grid = document.createElement("div");
      grid.style.cssText = "display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:10px;";

      function makeSub(title, emoji, items) {
        const sub = document.createElement("details");
        sub.className = "subgroup";
        sub.open = false;
        const s = document.createElement("summary");
        s.textContent = `${emoji} ${title}`;
        s.style.cursor = "pointer";
        sub.appendChild(s);
        const box = document.createElement("div");
        box.style.cssText = "padding:8px; margin-top:6px; border:1px dashed rgba(0,0,0,.25); border-radius:12px;";
        (items || []).forEach(it => box.appendChild(makeCheck(it)));
        sub.appendChild(box);
        return sub;
      }

      grid.appendChild(makeSub("原猿類 / Prosimians", "🌙", DATA_PRIMATES_PROSIMIANS));
      grid.appendChild(makeSub("南米の新世界ザル / New World Monkeys", "🌿", DATA_PRIMATES_NEW_WORLD));
      grid.appendChild(makeSub("旧世界ザル / Old World Monkeys", "🏞️", DATA_PRIMATES_OLD_WORLD));
      grid.appendChild(makeSub("テナガザル / Gibbons", "🪢", DATA_PRIMATES_GIBBONS));
      grid.appendChild(makeSub("類人猿 / Great Apes", "🦍", DATA_PRIMATES_APES));
      
      content.appendChild(grid);
      outer.appendChild(content);
      return outer;
    }

    // ✅ FIXED RODENTS GROUP (Corrected logic)
    function makeRodentsGroup() {
      // makeGroupContainer returns { det: <details>, box: <div> }
      const outer = makeGroupContainer("🐹 齧歯類 / Rodents", "#6d4c41");

      const makeSub = (title, items, accent) => {
        const d = el("details", { class: "creatures-acc", style: `margin:8px 0; border:2px dashed ${accent}; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box;` });
        d.open = false;
        d.appendChild(el("summary", { text: title, style: "cursor:pointer; font-weight:800; font-size:13px;" }));
        const box = el("div", { style: "margin-top:6px" });
        items.forEach(it => box.appendChild(makeCheckboxRow(it)));
        d.appendChild(box);
        return d;
      };

      const hamsters = [
        { ja:"ゴールデンハムスター", en:"golden hamster" },
        { ja:"ジャンガリアンハムスター", en:"dwarf hamster" },
        { ja:"ロボロフスキーハムスター", en:"Roborovski hamster" },
        { ja:"チャイニーズハムスター", en:"Chinese hamster" },
        { ja:"キンクマハムスター", en:"teddy bear hamster" }
      ];

      const smallRodents = [
        { ja:"モルモット", en:"guinea pig" },
        { ja:"マーモット", en:"marmot" },
        { ja:"チンチラ", en:"chinchilla" },
        { ja:"デグー", en:"degu" },
        { ja:"ハツカネズミ", en:"house mouse" },
        { ja:"ラット", en:"rat" },
        { ja:"スナネズミ", en:"gerbil" },
        { ja:"ヤマネ", en:"dormouse" },
        { ja:"レミング", en:"lemming" },
        { ja:"トビネズミ", en:"jerboa, long hind legs" },
        { ja:"カンガルーネズミ", en:"kangaroo rat, long hind legs" },
        { ja:"リス", en:"squirrel" },
        { ja:"シマリス", en:"chipmunk, striped squirrel" },
        { ja:"モモンガ", en:"flying squirrel, gliding membrane" }
      ];

      const others = [
        { ja:"ビーバー", en:"beaver" },
        { ja:"カピバラ", en:"capybara" },
        { ja:"ヤマアラシ", en:"porcupine" },
        { ja:"プレーリードッグ", en:"prairie dog" },
        { ja:"ヌートリア", en:"coypu, nutria, semi-aquatic rodent" },
        { ja:"マスクラット", en:"muskrat, semi-aquatic rodent" },
        { ja:"ハダカデバネズミ", en:"naked mole-rat" },
        { ja:"パカラナ", en:"pacarana, large rodent" }
      ];

      // Fix: Append to outer.box (the content div), not outer (the object)
      outer.box.appendChild(makeSub("🐹 ハムスター / Hamsters", hamsters, "#6d4c41"));
      outer.box.appendChild(makeSub("🐭 小型齧歯類 / Small Rodents", smallRodents, "#6d4c41"));
      outer.box.appendChild(makeSub("🦫 その他 / Others", others, "#6d4c41"));

      // Fix: Return the actual details element
      return outer.det;
    }

    // ✅ NEW GROUP: Small Animals
    function makeSmallAnimalsGroup() {
      const outer = makeGroupContainer("🐰 小動物 / Small Animals", "#fb8c00");

      const makeSub = (title, items, accent) => {
        const d = el("details", { class: "creatures-acc", style: `margin:8px 0; border:2px dashed ${accent}; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box;` });
        d.open = false;
        d.appendChild(el("summary", { text: title, style: "cursor:pointer; font-weight:800; font-size:13px;" }));
        const box = el("div", { style: "margin-top:6px" });
        (items || []).forEach(it => box.appendChild(makeCheckboxRow(it)));
        d.appendChild(box);
        return d;
      };

      outer.box.appendChild(makeSub("🐰 うさぎ類 / Rabbits", DATA_SMALL_RABBITS, "#fb8c00"));
      outer.box.appendChild(makeSub("🦦 イタチ科・フェレット / Mustelids", DATA_SMALL_MUSTELIDS, "#fb8c00"));
      outer.box.appendChild(makeSub("🦔 ハリネズミ・地下系 / Hedgehogs", DATA_SMALL_HEDGE, "#fb8c00"));
      outer.box.appendChild(makeSub("🪽 滑空・珍獣 / Gliders", DATA_SMALL_GLIDERS, "#fb8c00"));
      outer.box.appendChild(makeSub("🦘 有袋類 / Marsupials", DATA_SMALL_MARSUPIALS, "#fb8c00"));
      outer.box.appendChild(makeSub("✨ かわいさ補助 / Cute Extras", DATA_SMALL_CUTE, "#fb8c00"));

      return outer.det;
    }

    function makeMarineLifeGroup() {
      const root = el("details", { class: "creatures-acc", style: "margin:10px 0; border:2px solid #0ea5e9; border-radius:10px; background:#fff; padding:8px;" });
      root.open = false;
      root.appendChild(el("summary", { text: "🐠 海洋生物 / Marine Life", style: "cursor:pointer; font-weight:800; font-size:14px;" }));
      
      const inner = el("div", { style: "padding:6px 0 0 0;" });

      const makeSub = (title, items, accent) => {
        const d = el("details", { class: "creatures-acc", style: `margin:8px 0; border:2px dashed ${accent}; border-radius:10px; background:#fff; padding:8px;` });
        d.open = false;
        d.appendChild(el("summary", { text: title, style: "cursor:pointer; font-weight:800; font-size:13px;" }));
        const box = el("div", { style: "margin-top:6px" });
        (items || []).forEach(it => box.appendChild(makeCheckboxRow(it)));
        d.appendChild(box);
        return d;
      };

      const makeEnv = (title, envItems, recItems, accent, deepThird) => {
        const d = el("details", { class: "creatures-acc", style: `margin:8px 0; border:2px dashed ${accent}; border-radius:10px; background:#fff; padding:8px;` });
        d.open = false;
        d.appendChild(el("summary", { text: title, style: "cursor:pointer; font-weight:800; font-size:13px;" }));
        const box = el("div", { style: "margin-top:6px" });
        (envItems || []).forEach(it => box.appendChild(makeCheckboxRow(it)));

        const hint = el("details", { style: "margin:10px 0 0 0; border:2px solid #64748b; border-radius:10px; background:#fff; padding:8px;" });
        hint.open = false;
        hint.appendChild(el("summary", { text: "🔗 推奨関係 / Recommended Relations", style: "cursor:pointer; font-weight:800; font-size:12px;" }));
        const hbox = el("div", { style: "margin-top:6px" });
        (recItems || []).forEach(it => hbox.appendChild(makeCheckboxRow(it)));
        hint.appendChild(hbox);

        if (deepThird) {
          const deepWrap = el("div", { style: "margin-top:10px;" });
          const makeThird = (t, items) => {
            const td = el("details", { style: "margin:8px 0 0 0; border:2px dashed #334155; border-radius:10px; background:#fff; padding:8px;" });
            td.open = false;
            td.appendChild(el("summary", { text: t, style: "cursor:pointer; font-weight:800; font-size:12px;" }));
            const tbox = el("div", { style: "margin-top:6px" });
            (items || []).forEach(it => tbox.appendChild(makeCheckboxRow(it)));
            td.appendChild(tbox);
            return td;
          };
          deepWrap.appendChild(makeThird("✨ 生物発光 / Bioluminescence", DATA_DEEP_BIOLUM));
          deepWrap.appendChild(makeThird("⚫ 圧力・影 / Pressure & Shadow", DATA_DEEP_PRESSURE));
          deepWrap.appendChild(makeThird("🏛 遺跡・噴出孔 / Ruins & Vents", DATA_DEEP_RUINS));
          hint.appendChild(deepWrap);
        }
        box.appendChild(hint);
        d.appendChild(box);
        return d;
      };

      inner.appendChild(makeSectionDivider("🧬", "生物分類 / Classification", "Marine Life 内の生物カテゴリ"));
      inner.appendChild(makeSub("🐟 魚類 / Fish", DATA_MARINE_FISH, "#2563eb"));
      inner.appendChild(makeSub("🦈 軟骨魚類 / Cartilaginous Fish", DATA_MARINE_CARTILAGINOUS, "#ef4444"));
      inner.appendChild(makeSub("🦀 甲殻類 / Crustaceans", DATA_MARINE_CRUSTACEANS, "#f59e0b"));
      inner.appendChild(makeSub("🐙 軟体動物 / Mollusks", DATA_MARINE_MOLLUSKS, "#8b5cf6"));
      inner.appendChild(makeSub("🌊 刺胞・浮遊系 / Cnidarians & Drifters", DATA_MARINE_CNIDARIANS, "#22c55e"));
      inner.appendChild(makeSub("🐋 海洋哺乳類 / Marine Mammals", DATA_MARINE_MAMMALS, "#0f766e"));
      inner.appendChild(makeSub("🐡 特殊・異形魚 / Exotic Marine", DATA_MARINE_EXOTIC, "#e11d48"));

      inner.appendChild(makeSectionDivider("🌍", "環境（生態条件） / Environments", "生態条件レイヤー"));
      inner.appendChild(makeEnv("🪸 珊瑚礁域 / Coral Reef", DATA_MARINE_ENV_CORAL, DATA_ENVREL_CORAL, "#14b8a6", false));
      inner.appendChild(makeEnv("🌊 外洋 / Open Ocean", DATA_MARINE_ENV_OPEN, DATA_ENVREL_OPEN, "#0ea5e9", false));
      inner.appendChild(makeEnv("🌑 深海 / Deep Sea", DATA_MARINE_ENV_DEEP, DATA_ENVREL_DEEP, "#334155", true));
      inner.appendChild(makeEnv("🏝 沿岸・浅瀬 / Coastal", DATA_MARINE_ENV_COASTAL, DATA_ENVREL_COASTAL, "#f97316", false));
      inner.appendChild(makeEnv("🧊 寒冷海域 / Cold Waters", DATA_MARINE_ENV_COLD, DATA_ENVREL_COLD, "#60a5fa", false));
      
      root.appendChild(inner);
      return root;
    }

    // ---- Relations UI (Layout Fixed: Flex + Wrap) ----
    function makeRelationsGroup() {
      const root = el("details", { class: "creatures-acc", style: "margin:10px 0; border:2px solid #8e44ad; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box;" });
      root.open = false;
      root.appendChild(el("summary", { text: "🦴 状態・関係 / Relations", style: "cursor:pointer; font-weight:800; font-size:14px; padding:4px 2px; line-height:1.1; display:flex; align-items:center; gap:8px; min-height:32px;" }));

      // ✅ Changed to FLEX WRAP to allow multiple rows
      const inner = el("div", { 
        style: "padding: 6px 0 0 0; display:flex; flex-wrap:wrap; gap:8px; align-items:flex-start; width:100%; box-sizing:border-box;" 
      });

      const makeSub = (title, items, accent) => {
        // Flex item sizing: approx 48% allows 2 columns with a small gap
        const d = el("details", { class: "creatures-acc", style: `margin:0; border:2px dashed ${accent}; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box; flex: 1 1 45%; min-width:300px; max-width:100%;` });
        d.open = false;
        d.appendChild(el("summary", { text: title, style: "cursor:pointer; font-weight:800; font-size:13px;" }));
        const box = el("div", { style: "margin-top:6px" });
        (items || []).forEach(it => box.appendChild(makeCheckboxRow(it)));
        d.appendChild(box);
        return d;
      };

      // Original 7
      inner.appendChild(makeSub("🤝 接触・距離", DATA_REL_CONTACT, "#2563eb"));
      inner.appendChild(makeSub("👀 視線・感情", DATA_REL_GAZE, "#ef4444"));
      inner.appendChild(makeSub("🐾 行動・動作", DATA_REL_ACTIONS, "#10b981"));
      inner.appendChild(makeSub("🧠 知性・霊長類", DATA_REL_PRIMATE, "#f59e0b"));
      inner.appendChild(makeSub("🐍 巻き付き系", DATA_REL_COIL, "#8b5cf6"));
      inner.appendChild(makeSub("🌊 水中関係", DATA_REL_AQUATIC, "#0ea5e9"));
      inner.appendChild(makeSub("🛡 守護・契約", DATA_REL_GUARD, "#334155"));
      
      // ✅ Added New Categories
      inner.appendChild(makeSub("🐶 犬のしぐさ", DATA_REL_DOG, "#d97706"));
      inner.appendChild(makeSub("🐱 猫のしぐさ", DATA_REL_CAT, "#ec4899"));
      inner.appendChild(makeSub("🐶🐱 相互関係", DATA_REL_MUTUAL, "#8b5cf6"));

      // ✅ Added Worldbuilding shelf
      inner.appendChild(makeSub("🐾 群れ・縄張り", DATA_REL_PACK_TERRITORY, "#8e44ad"));

      root.appendChild(inner);
      return root;
    }

    const API = {
      initUI(container) {
        const parent = document.querySelector("#list-creatures") || container;
        const contentArea = parent.querySelector(".section-content") || parent;
        contentArea.innerHTML = "";

        const note = el("div", { class: "creatures-note", style: "font-size:12px; opacity:0.85; margin:6px 0 10px 0;" });
        note.textContent = "生物は“存在”。小物と混ぜない。ここで同行・群れ・目線まで制御する。";
        contentArea.appendChild(note);

        try { contentArea.appendChild(makeBirdsGroup()); } catch (e) { console.error(e); }
        try {
          contentArea.appendChild(makeReptilesGroup());
          contentArea.appendChild(makePrimatesGroup());
          contentArea.appendChild(makeDogGroup());
          contentArea.appendChild(makeCatGroup());
          contentArea.appendChild(makeRodentsGroup()); // 🐹 Now works correctly
          contentArea.appendChild(makeSmallAnimalsGroup()); // 🐰 NEW: Added safely here
          contentArea.appendChild(makeMarineLifeGroup());
        } catch (e) { console.error(e); }

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

