(function(){
  "use strict";
  const VERSION = 10; // R-18専用 (Fixed & Lightweight v3)
  const KEY = "quality_preset";
  const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  // =============================================================================
  // 🔞 R-18 統合プリセットデータ (UI Definition)
  // ※ 翻訳データは builder_data.translation.v1.js に移動済み
  // =============================================================================
  const R18_FULL_DATA = {
    "⚠️ NSFWフラグ・基本 (Flags)": [
      { label: "NSFW (基本)", val: "nsfw, (uncensored)" },
      { label: "R-18 (卑猥)", val: "r-18, (lewd), (erotic), (sexual)" },
      { label: "ヌード許可", val: "nude, naked, (nipples), (pussy), (no clothes)" },
      { label: "体液・汚れ", val: "(sweat), (wet skin), (saliva), (cum), (sticky texture), (messy body)" },
      { label: "高画質R-18補正", val: "(masterpiece:1.3), (best quality:1.3), (ultra high resolution:1.3), (intricate details:1.3), (realistic textures:1.2), (extremely detailed skin:1.3), (cinematic lighting:1.2), (depth of field:1.1)" }
    ],
    "⚡ 濃厚・Hシチュエーション (Induction)": [
      { label: "⚡ 濃厚セックスセット", val: "nsfw, (uncensored), r-18, (lewd), (sexual), (1boy), (1girl), (heterosexual), (sex), (intimate), (couple), (sweat), (hardcore), (vaginal sex:1.3)", desc: "これをONにしてポーズを選ぶだけで完璧なHシーンに" },
      { label: "⚡ 激しい動き・エフェクト", val: "(hips moving rhythmically), (fully thrusting), (fast motion), (afterimage of hips), (piston motion), (shaking hips), (foggy breath trails), (smeared heart-shaped breath patches), (erotic moan text floating), (heart particles:1.3), (pink atmosphere)" },
      { label: "中出し (Creampie)", val: "(cum inside), (creampie), (overflowing cum), (filling womb), (semen gushing deep inside)" },
      { label: "断面図 (X-Ray)", val: "(cross-section), (x-ray), (internal view), (cervix penetration), (womb marking), (glowing womb)" }
    ],
    "🐙 触手・スライム (Tentacles & Slime)": [
      { label: "触手基本セット", val: "(tentacles), (slime), (mucus), (living tentacles), (bioluminescent), (thick tentacle), (slimy texture), (wriggling)" },
      { label: "生体スーツ・モノキニ", val: "(living monokini), (tentacle suit), (slime bodysuit), (pulsing texture), (fused with skin), (translucent slime), (jelly fabric), (glowing seams), (clinging tightly)" },
      { label: "スライム拘束・責め", val: "(slime suit attack), (slime groping breasts), (slime sucking nipples), (arms locked behind back), (bound by slime), (unable to resist)" },
      { label: "体内侵入・寄生", val: "(tentacles invade mouth), (deep throat), (stomach bulge), (internal view), (parasite), (eggs), (impregnation), (tentacles invade deep within her body cavity)" },
      { label: "触手搾乳", val: "(tentacle milking), (suction cups), (breast milking), (nipple stimulation), (milking devices), (petal-shaped tentacle motifs), (squeezing breasts)" }
    ],
    "🧘 体位・基本48手 (Positions)": [
      { label: "正常位 (Missionary)", val: "(missionary position), (lying on back), (legs spread), (looking at viewer), (holding hands), (loving sex)" },
      { label: "騎乗位 (Cowgirl)", val: "(cowgirl position), (straddling), (sitting on lap), (bouncing breasts), (looking down), (dominant female)" },
      { label: "背面騎乗位 (Reverse Cowgirl)", val: "(reverse cowgirl position), (showing ass), (back to viewer), (arched back), (looking back)" },
      { label: "バック (Doggystyle)", val: "(doggystyle), (on all fours), (from behind), (grabbing hips), (ass focus), (deep penetration), (curved silhouette)" },
      { label: "対面座位 (Mating Press)", val: "(mating press), (legs on shoulders), (deepest penetration), (folded body), (intense eye contact)" },
      { label: "駅弁 (Standing)", val: "(standing sex), (lifted up), (carrying), (legs wrapped around waist), (against wall)" },
      { label: "側位 (Spoon)", val: "(spooning sex), (lying on side), (hugging from behind), (gentle sex), (intimate)" },
      { label: "屈曲位 (Prone Bone)", val: "(prone bone), (lying on stomach), (hips raised), (face in pillow), (helpless)" },
      { label: "M字開脚", val: "(m-shaped posture), (legs spread wide), (knees raised), (presenting), (open legs)" }
    ],
    "👅 奉仕・ご奉仕 (Service)": [
      { label: "フェラチオ", val: "(fellatio), (blowjob), (sucking penis), (cheeks hollowed), (looking up), (bobbing head)" },
      { label: "パイズリ", val: "(paizuri), (titfuck), (sandwiching penis), (breasts squished), (cleavage), (looking at penis)" },
      { label: "手コキ", val: "(handjob), (stroking), (jerking off), (saliva lubrication), (glans focus)" },
      { label: "イラマチオ", val: "(irrumatio), (deep throat), (face fuck), (gagging), (tears), (choking), (grabbed by hair)" },
      { label: "69 (シックスナイン)", val: "(69 position), (simultaneous oral), (mutual pleasure), (top view)" },
      { label: "足コキ", val: "(footjob), (soles), (toes), (rubbing with feet), (trampling), (looking down)" },
      { label: "クンニ", val: "(cunnilingus), (licking pussy), (tongue), (spread legs), (pleasure face)" }
    ],
    "👗 着衣プレイ・チラリズム (Clothed Sex)": [
      { label: "たくし上げ (Lifted)", val: "(skirt lifted), (clothes lifted), (exposing panties), (access to crotch), (hiding face)" },
      { label: "ずらし (Pulled Aside)", val: "(panties pulled aside), (crotchless panties), (fingering through clothes), (quickie)" },
      { label: "半脱ぎ (Half-off)", val: "(clothes half removed), (bra pulled down), (shoulders bare), (disheveled), (messy clothes)" },
      { label: "着衣セックス", val: "(clothed sex), (sex with clothes on), (school uniform), (public indecency), (hastily)" }
    ],
    "👫 男女・シチュエーション (Relations)": [
      { label: "純愛・見つめ合い", val: "(1boy), (1girl), (missionary position), (sex), (locking eyes), (loving sex), (blushing), (intertwined fingers), (kissing), (romantic)" },
      { label: "体格差・巨根", val: "(1boy), (1girl), (size difference), (height difference), (giant penis), (small girl), (stretching), (bulge), (masculine male)" },
      { label: "寝取られ (NTR)", val: "(ntr), (cheating), (cuckold), (watching from closet), (video call), (crying), (forced smile)" }
    ],
    "🍆 挿入・ピストン (Insertion)": [
      { label: "結合部アップ", val: "(penetration clearly visible:1.3), (connection point), (inserting), (glans inside), (close up)" },
      { label: "激しいピストン", val: "(fast piston motion), (blur), (afterimage), (intense sex), (clapping sounds)" },
      { label: "最奥突き", val: "(cervix penetration), (womb marking), (deepest part), (stomach bulge)" },
      { label: "クリ責め", val: "(clitoris stimulation), (rubbing clit), (fingering), (pearl)" },
      { label: "ダブルピース・アヘ顔", val: "(double peace sign), (ahegao), (rolling eyes), (tongue out), (mind break), (drooling)" }
    ],
    "🤪 R-18 表情・精神 (Expressions)": [
      { label: "あへ顔", val: "(ahegao:1.3), (rolling eyes), (tongue out), (drooling), (v-shaped eyebrows)" },
      { label: "ハート目", val: "(heart-shaped pupils), (pink eyes), (infatuated), (love struck)" },
      { label: "虚ろ目・レイプ目", val: "(vacant eyes), (empty eyes), (no pupil highlights), (glassy eyes), (mind break), (broken expression)" },
      { label: "快楽堕ち", val: "(pleasure face), (blush), (slobber), (euphoric tears), (ecstatic expression)" },
      { label: "涙目・懇願", val: "(tears), (crying), (begging), (humiliation), (flushed face), (desperate moan)" },
      { label: "絶頂・震え", val: "(orgasm), (girl trembling in climax:1.5), (shaking), (arched back), (toes curling), (spasms), (body control)" }
    ],
    "💦 演出・液体 (Fluids)": [
      { label: "大量射精", val: "(copious cum), (cumshot), (splashing cum), (cum everywhere), (cum explosion)" },
      { label: "顔射", val: "(cum on face), (bukkake), (sticky face), (eye closed)" },
      { label: "潮吹き", val: "(squirting), (gushing liquid), (wet sheets), (fountain), (pussy juice splash)" },
      { label: "精液溜まり", val: "(cum pool), (puddle of cum), (messy bed), (sheets covered in fluids)" },
      { label: "吐息・ハート", val: "(foggy breath trails), (smeared heart-shaped breath patches), (erotic moan text floating), (heart particles:1.3), (pink atmosphere)" },
      { label: "粘液・融合", val: "(wet mucus fuses with her body), (slime coating skin), (oily sheen), (translucent slime), (dripping)" }
    ],
    "🪟 硝子・密着 (Glass)": [
      { label: "窓ガラス押し付け", val: "(pressed against glass:1.3), (window view), (flattened breasts), (breath on glass), (face smeared across surface)" },
      { label: "ガラス越し視点", val: "(view through glass), (fogged glass), (hand print on glass), (voyeur), (moisture trails on glass)" },
      { label: "ガラス押し付け・背面", val: "(viewed from the front through fogged glass panel), (girl in doggystyle position), (breasts pressed and flattened against the glass), (nipples clearly visible through pressure), (steam)" }
    ],
    "🕰️ R-18 ストーリー (Time)": [
      { label: "脱衣・恥じらい", val: "(undressing), (clothes half off), (panties down), (covering body), (shy), (blushing), (looking away)" },
      { label: "事後・余韻", val: "(after sex), (messy hair), (lying on bed), (exhausted), (heavy breathing), (cum on sheets), (disheveled), (peaceful face), (cuddle)" },
      { label: "朝チュン", val: "(morning after), (waking up), (naked in bed), (messy room), (sunlight), (hickey), (memory of last night), (kissing)" }
    ],
    "🧸 玩具・責め (Toys)": [
      { label: "バイブ", val: "(vibrator), (dildo), (sex toy), (insertion)" },
      { label: "ローター", val: "(pink rotor), (wired toy), (remote control)" },
      { label: "口内責め", val: "(tentacles invade deep within her mouth), (mouth gaping), (tongue extended), (throat fucking), (saliva splattering), (choking)" },
      { label: "触手搾乳", val: "(tentacle milking), (breast fondling), (nipple stimulation), (lactation), (squeezing breasts)" }
    ],
    "🏩 H-ロケーション (Locations)": [
      { label: "ラブホテル", val: "(love hotel), (mirror room), (neon lights), (fancy bed), (pillows)" },
      { label: "お風呂・温泉", val: "(bathroom), (onsen), (steam), (wet body), (tiled wall), (soap)" },
      { label: "マジックミラー号", val: "(magic mirror truck), (vehicle interior), (city street outside window), (exposed to public), (voyeurism)" },
      { label: "公衆トイレ", val: "(public toilet stall), (cramped), (sitting on toilet), (pants down), (graffiti), (dirty tiles), (secret sex)" },
      { label: "スライムの巣", val: "(slime nest), (gloomy hall), (dimly lit), (covered in slime), (sticky floor)" }
    ],
    "🌳 野外・露出 (Outdoor)": [
      { label: "野外露出", val: "(outdoor sex), (public nudity), (exposure), (shame), (risk of being seen)" },
      { label: "公園", val: "(public park), (bench), (night park), (bushes), (street lamp)" },
      { label: "路地裏", val: "(back alley), (trash cans), (dark), (wall press), (dirty)" },
      { label: "森の中", val: "(forest), (nature), (grass), (leaves), (secluded)" }
    ],
    "🏫 学園・背徳 (School)": [
      { label: "体育倉庫", val: "(gym storage room), (sweat), (sportswear), (bloomers), (ball cart), (dusty), (after school)" },
      { label: "放課後の教室", val: "(classroom), (sunset), (on desk), (skirt lifted), (messy clothes), (blackboard), (watching door)" },
      { label: "指導室・土下座", val: "(teacher office), (scolding), (kneeling), (looking up), (submission), (desk), (pleading)" }
    ],
    "👯 乱交・複数 (Group)": [
      { label: "3P (2男1女)", val: "(threesome), (2boys), (1girl), (sandwich)" },
      { label: "輪姦・ギャングバング", val: "(gangbang), (multiple boys), (group sex), (bukkake)" },
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

  const API = {
    initUI(container) {
      if (!IS_UNLOCKED) return;
      // ★ 辞書登録処理は builder_data.translation.v1.js に委任したため削除

      const mount = () => {
        const root = document.getElementById("qp-root-container");
        if(!root || !window.__QP_UTILS) { setTimeout(mount, 50); return; }
        
        // 既存のR-18セクションがあれば削除（重複防止）
        const old = document.getElementById("qp-r18-category");
        if(old) old.remove();

        const secR18 = window.__QP_UTILS.createMainSection("qp-r18-category", "🔞 R-18・H設定 (Adult Settings)", { 
          sumBg: "#fff0f0", sumColor: "#d00", className: "qp-r18-root" 
        });
        const conR18 = secR18.querySelector(".qp-section-content");

        // データを生成
        Object.entries(R18_FULL_DATA).forEach(([title, items]) => {
          conR18.appendChild(window.__QP_UTILS.createSubAccordion(title, items, "secret"));
        });

        // 戦闘アクション(qp-combat)の前、なければ末尾に追加
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

