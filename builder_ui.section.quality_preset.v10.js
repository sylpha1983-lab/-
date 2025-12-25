(function(){
  "use strict";
  const VERSION = 10; // R-18専用
  const KEY = "quality_preset";
  const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  // R-18 統合データ
  const R18_FULL_DATA = {
    "⚠️ NSFWフラグ・基本 (Flags)": [
      { label: "NSFW (基本)", val: "nsfw, (uncensored)" },
      { label: "R-18 (卑猥)", val: "r-18, (lewd), (erotic), (sexual)" },
      { label: "ヌード許可", val: "nude, naked, (nipples), (pussy)" },
      { label: "体液・汚れ", val: "(sweat), (wet skin), (saliva), (cum), (sticky texture)" }
    ],
    "⚡ 濃厚・Hシチュエーション (Induction)": [
      { label: "⚡ 濃厚セックスセット", val: "nsfw, (uncensored), r-18, (lewd), (sexual), (1boy), (1girl), (heterosexual), (sex), (intimate), (couple), (sweat), (hardcore), (vaginal sex:1.3)", desc: "これをONにしてポーズを選ぶだけで完璧なHシーンに" },
      { label: "⚡ 激しい動き・エフェクト", val: "(hips moving rhythmically), (fully thrusting), (fast motion), (afterimage of hips), (piston motion), (shaking hips), (foggy breath trails), (smeared heart-shaped breath patches), (erotic moan text floating), (heart particles:1.3), (pink atmosphere)" },
      { label: "中出し (Creampie)", val: "(cum inside), (creampie), (overflowing cum)" },
      { label: "断面図 (X-Ray)", val: "(cross-section), (x-ray), (internal view)" }
    ],
    "👫 男女・ノーマル (Boy & Girl)": [
      { label: "男女・基本セット", val: "(1boy), (1girl), (heterosexual), (male focus), (female focus), (sex), (intimate), (couple)" },
      { label: "純愛・見つめ合い", val: "(1boy), (1girl), (missionary position), (sex), (locking eyes), (loving sex), (blushing), (intertwined fingers), (kissing), (romantic)" },
      { label: "激しいセックス", val: "(1boy), (1girl), (doggystyle), (intense sex), (sweat), (messy hair), (breasts bouncing), (grabbing hips), (climax), (hardcore)" },
      { label: "体格差・巨根", val: "(1boy), (1girl), (size difference), (height difference), (giant penis), (small girl), (stretching), (bulge), (masculine male)" },
      { label: "対面座位・密着", val: "(1boy), (1girl), (mating press), (legs on shoulders), (deepest penetration), (eye contact), (womb marking), (internal view)" }
    ],
    "🍆 挿入・ピストン (Insertion)": [
      { label: "結合部アップ", val: "(penetration clearly visible:1.3), (connection point), (inserting), (glans inside)" },
      { label: "激しいピストン", val: "(fast piston motion), (blur), (afterimage), (intense sex)" },
      { label: "最奥突き", val: "(cervix penetration), (womb marking), (deepest part)" },
      { label: "腰ガッチリ・密着", val: "(his hands gripping her hips firmly), (keeping her pressed), (tight grip), (skin indentation), (no escape)" },
      { label: "クリ責め", val: "(clitoris stimulation), (rubbing clit), (fingering)" },
      { label: "溢れる愛液・結合", val: "(crotch overflowing with fluids), (inner thighs wet and glistening), (semen dripping), (juicy), (wet sounds)" }
    ],
    "🤪 R-18 表情・精神 (Expressions)": [
      { label: "あへ顔", val: "(ahegao), (rolling eyes), (tongue out), (drooling)" },
      { label: "ハート目", val: "(heart-shaped pupils), (pink eyes), (infatuated)" },
      { label: "快楽堕ち", val: "(mind break), (empty eyes), (pleasure face), (blush)" },
      { label: "涙目・懇願", val: "(tears), (crying), (begging), (humiliation)" },
      { label: "絶頂・震え", val: "(orgasm), (girl trembling in climax:1.5), (shaking), (arched back), (toes curling), (spasms)" }
    ],
    "💦 演出・液体 (Fluids)": [
      { label: "大量射精", val: "(copious cum), (cumshot), (splashing cum), (cum everywhere)" },
      { label: "顔射", val: "(cum on face), (bukkake), (sticky face)" },
      { label: "潮吹き", val: "(squirting), (gushing liquid), (wet sheets)" },
      { label: "精液溜まり", val: "(cum pool), (puddle of cum), (messy bed)" },
      { label: "吐息・ハート", val: "(foggy breath trails), (smeared heart-shaped breath patches), (erotic moan text floating), (heart particles:1.3), (pink atmosphere)" },
      { label: "粘液・融合", val: "(wet mucus fuses with her body), (slime coating skin), (oily sheen), (translucent slime), (dripping)" }
    ],
    "🪟 硝子・密着 (Glass)": [
      { label: "窓ガラス押し付け", val: "(pressed against glass), (window view), (flattened breasts)" },
      { label: "ガラス越し視点", val: "(view through glass), (fogged glass), (hand print on glass)" },
      { label: "ガラス押し付け・背面", val: "(viewed from the front through fogged glass panel), (girl in doggystyle position), (breasts pressed and flattened against the glass), (nipples clearly visible through pressure), (moisture trails on glass), (steam)" }
    ],
    "🕰️ R-18 ストーリー (Time)": [
      { label: "脱衣・恥じらい", val: "(undressing), (clothes half off), (panties down), (covering body), (shy), (blushing), (looking away)" },
      { label: "事後・余韻", val: "(after sex), (messy hair), (lying on bed), (exhausted), (heavy breathing), (cum on sheets), (disheveled), (peaceful face)" },
      { label: "朝チュン", val: "(morning after), (waking up), (naked in bed), (messy room), (sunlight), (hickey), (memory of last night), (kissing)" }
    ],
    "🧸 玩具・責め (Toys)": [
      { label: "バイブ", val: "(vibrator), (dildo), (sex toy)" },
      { label: "ローター", val: "(pink rotor), (wired toy)" },
      { label: "口内責め", val: "(tentacles invade deep within her mouth), (mouth gaping), (tongue extended), (throat fucking), (saliva splattering), (choking)" },
      { label: "触手搾乳", val: "(tentacle milking), (breast fondling), (nipple stimulation), (lactation), (squeezing breasts)" }
    ],
    "🏩 H-ロケーション (Locations)": [
      { label: "ラブホテル", val: "(love hotel), (mirror room), (neon lights), (fancy bed)" },
      { label: "お風呂・温泉", val: "(bathroom), (onsen), (steam), (wet body), (tiled wall)" },
      { label: "マジックミラー号", val: "(magic mirror truck), (vehicle interior), (city street outside window), (exposed to public), (voyeurism)" },
      { label: "公衆トイレ", val: "(public toilet stall), (cramped), (sitting on toilet), (pants down), (graffiti), (dirty tiles), (secret sex)" }
    ],
    "🏫 学園・背徳 (School)": [
      { label: "体育倉庫", val: "(gym storage room), (sweat), (sportswear), (bloomers), (ball cart), (dusty), (after school)" },
      { label: "放課後の教室", val: "(classroom), (sunset), (on desk), (skirt lifted), (messy clothes), (blackboard), (watching door)" },
      { label: "指導室・土下座", val: "(teacher office), (scolding), (kneeling), (looking up), (submission), (desk), (pleading)" }
    ],
    "👯 乱交・複数 (Group)": [
      { label: "3P (2男1女)", val: "(threesome), (2boys), (1girl), (sandwich)" },
      { label: "輪姦・ギャングバング", val: "(gangbang), (multiple boys), (group sex)" },
      { label: "おじさん・醜男", val: "(ugly bastard), (fat man), (sweaty), (grinning), (ntr), (corruption), (forced)" },
      { label: "異種姦パーティ", val: "(monster gangbang), (orcs), (goblins), (slime), (tentacles), (breeding), (defeat)" }
    ],
    "😈 陵辱・ハード (Hard)": [
      { label: "NSFW挿入 (激)", val: "(rape), (vaginal penetration with thick penis)" },
      { label: "肉便器・公衆", val: "(public use), (cum dump), (messy body), (ahegao), (writing on body), (leash), (toilet)" },
      { label: "敗北・オーク", val: "(defeated), (lying on ground), (torn clothes), (crying), (orc looming), (goblin), (messy hair)" },
      { label: "強制・レイプ", val: "(rape), (forced), (struggling), (pinned down), (tears), (fear), (ripped clothes)" }
    ],
    "💊 催眠・変容 (Hypno)": [
      { label: "時間停止", val: "(time stop), (frozen people background), (pause button), (powerless), (unaware)" },
      { label: "催眠・洗脳", val: "(hypnotized), (empty eyes), (swirl eyes), (mind control), (drooling), (obeying orders)" },
      { label: "寄生・苗床", val: "(stomach bulge), (pregnant), (impregnation), (alien), (parasite), (eggs), (x-ray)" }
    ],
    "⛓️ 拘束・ハード (Bondage)": [
      { label: "緊縛・吊り", val: "(shibari), (rope bondage), (suspension), (hanging), (bound wrists), (bound legs)" },
      { label: "拘束椅子", val: "(bondage chair), (restrained), (spread legs), (sex machine), (dildo machine), (helpless)" },
      { label: "目隠し・猿轡", val: "(blindfold), (gag), (ball gag), (drooling), (sensory deprivation)" }
    ]
  };

  const R18_DICT = {
    "trembling in climax": "絶頂で震える", "rough breathing": "荒い呼吸", "ecstatic sighs": "恍惚の溜息",
    "wet mucus fuses with her body": "粘液が体と融合", "slime coating skin": "スライムが肌を覆う", "oily sheen": "油膜の光沢",
    "translucent slime": "半透明のスライム", "clothes dissolving": "服が溶ける", "mouth gaping": "口を大きく開ける",
    "throat fucking": "イラマチオ", "tentacle milking": "触手搾乳", "breast fondling": "胸愛撫",
    "hypnotic heart eyes": "催眠ハート目", "pink rings fading into pupils": "瞳に溶けるピンクの輪", "vacant smile": "虚ろな笑み",
    "euphoric tears": "歓喜の涙", "semen gushing deep inside her": "奥深くに注がれる精液", "crotch visibly overflowing": "股間から溢れ出る",
    "fluid streaking down her trembling thighs": "震える太ももを伝う愛液", "foggy breath trails": "白い吐息の跡",
    "smeared heart-shaped breath patches": "曇ったガラスにハート", "womb symbol glowing softly through skin": "肌に浮かぶ子宮紋",
    "breasts pressed and flattened against the glass": "ガラスに押し付けられた胸", "nipples clearly visible through pressure": "圧迫された乳首",
    "face pressed against glass": "顔面プレス", "penetration clearly visible": "結合部がはっきり見える",
    "connection point": "結合部", "inserting": "挿入中", "glans inside": "中にある亀頭", "hips moving rhythmically": "リズミカルに動く腰",
    "fully thrusting": "根元まで突き入れる", "fast motion": "高速ピストン", "afterimage of hips": "腰の残像", "piston motion": "ピストン運動",
    "shaking hips": "震える腰", "his hands gripping her hips firmly": "腰を強く掴む", "keeping her pressed": "押し付け続ける",
    "semen dripping": "精液が垂れる", "juicy": "ジューシー", "wet sounds": "水音", "fully thrusting from behind": "背後から激しく突く",
    "demon lord bedroom": "魔王の寝室", "luxurious dark bed": "豪華な闇のベッド", "canopy": "天蓋", "harem": "ハーレム",
    "grabbing hips": "腰を掴む", "climax": "絶頂", "hardcore": "ハードコア", "vaginal sex": "膣セックス", "orgasm": "オーガズム",
    "girl trembling in climax": "絶頂で震える少女", "shaking": "震え", "arched back": "背中を反らす", "toes curling": "足の指が縮こまる",
    "spasms": "痙攣", "trance": "トランス状態", "pleasure": "快楽", "erotic moan text floating": "浮かぶエッチな喘ぎ文字",
    "heart particles": "ハートの粒子", "pink atmosphere": "ピンクの雰囲気"
  };

  const API = {
    initUI(container) {
      if (!IS_UNLOCKED) return;
      if (window.__outputTranslation) window.__outputTranslation.register(R18_DICT);

      const mount = () => {
        const root = document.getElementById("qp-root-container");
        if(!root || !window.__QP_UTILS) { setTimeout(mount, 50); return; }
        
        // R-18セクション作成
        const secR18 = window.__QP_UTILS.createMainSection("qp-r18-category", "🔞 R-18・H設定 (Adult Settings)", { 
          sumBg: "#fff0f0", sumColor: "#d00", className: "qp-r18-root" 
        });
        const conR18 = secR18.querySelector(".qp-section-content");

        // データを生成
        Object.entries(R18_FULL_DATA).forEach(([title, items]) => {
          conR18.appendChild(window.__QP_UTILS.createSubAccordion(title, items, "secret"));
        });

        // 戦闘アクション(qp-combat)の前に追加
        const combat = document.getElementById("qp-combat");
        if(combat) root.insertBefore(secR18, combat);
        else root.appendChild(secR18);
      };
      mount();
    },
    getTags() { return []; } 
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();
