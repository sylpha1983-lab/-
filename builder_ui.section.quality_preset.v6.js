(function(){
  "use strict";
  const VERSION = 6; 
  const KEY = "quality_preset";
  const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  // 通常パック (省略なし)
  const PACK_DATA = {
    "💼 職業・なりきりパック": [
      { label: "メイド・お給仕", val: "(maid outfit), (holding serving tray), (curtsy), (classic maid), (mansion interior), (elegant), (frills), (tea set)", links: ["立ちポーズ"] },
      { label: "ナース・診察", val: "(nurse uniform), (holding syringe), (clipboard), (hospital room), (white background), (clean atmosphere), (medical checkup)", links: ["病院"] },
      { label: "OL・オフィス", val: "(office lady), (business suit), (holding documents), (modern office), (desk work), (glasses), (smart look), (high rise building view)", links: ["眼鏡"] },
      { label: "ポリス・逮捕", val: "(police uniform), (holding handcuffs), (police hat), (arresting pose), (cool expression), (patrol car background), (justice)", links: ["キメポーズ"] },
      { label: "バニーガール", val: "(bunny girl suit), (rabbit ears), (fishnet tights), (holding tray), (casino background), (roulette), (neon lights), (glamorous)", links: ["セクシー"] },
      { label: "巫女・神社", val: "(miko outfit), (holding broom), (shrine background), (sweeping leaves), (traditional japanese), (sacred atmosphere), (red hakama)", links: ["和風"] }
    ],
    "🎉 イベント・行事": [
      { label: "クリスマス", val: "(santa costume), (christmas tree), (holding gift box), (snowy background), (lights and ornaments), (happy smile), (winter holiday)" },
      { label: "ハロウィン", val: "(witch costume), (holding pumpkin), (jack-o'-lantern), (bats), (purple and orange theme), (spooky castle background), (magic hat)" },
      { label: "ウェディング", val: "(wedding dress), (holding bouquet), (church interior), (white veil), (stained glass), (happy tears), (marriage ceremony), (pure white)" },
      { label: "温泉旅行", val: "(wearing yukata), (onsen), (steam), (open air bath), (wooden bucket), (relaxing), (flushed face), (night scenery)", links: ["和風"] }
    ],
    "🍽️ 食事・グルメ": [
      { label: "ファストフード", val: "(eating hamburger), (holding burger with both hands), (fast food restaurant), (french fries), (cola), (happy eating face), (open mouth)", links: ["もぐもぐ"] },
      { label: "ティータイム", val: "(afternoon tea), (holding tea cup), (cake stand), (garden terrace), (elegant dress), (sipping tea), (relaxing afternoon)", links: ["カフェ"] },
      { label: "居酒屋で乾杯", val: "(izakaya), (holding beer mug), (kanpai), (yakitori), (lively atmosphere), (drinking), (slightly drunk), (lanterns)", links: ["和風"] }
    ],
    "💕 デート・恋愛": [
      { label: "水族館デート", val: "(aquarium date), (looking at fish), (blue ambient light), (reflection on glass), (romantic atmosphere), (walking together), (happy expression)", links: ["デートスポット"] },
      { label: "映画館デート", val: "(movie theater), (sitting next to each other), (eating popcorn), (dim lighting), (screen light reflecting on face), (intimate moment), (date night)", links: ["デートスポット"] },
      { label: "遊園地・観覧車", val: "(amusement park date), (ferris wheel in background), (holding crepe), (colorful lights), (happy smile), (vibrant atmosphere), (casual clothes)" },
      { label: "夜景・展望台", val: "(observation deck), (night city view), (sparkling city lights), (leaning on railing), (romantic mood), (couple atmosphere), (elegant)", links: ["夜"] },
      { label: "放課後デート", val: "(walking home together), (holding hands), (sunset glow), (school uniform), (blushing), (sentimental atmosphere), (residential street)", links: ["夕方"] }
    ],
    "😱 感情・スリル": [
      { label: "追跡者からの逃走", val: "(running away:1.3), (looking back:1.3), (scared expression), (tears), (sweat), (abandoned hallway), (motion blur:1.2), (scary monster chasing from behind:1.3), (pursuer looming in background), (cinematic lighting), (dynamic angle), (dramatic shadows)", links: ["ダイナミックポーズ", "ホラー"] },
      { label: "ロッカーに隠れる", val: "(hiding in locker), (pov from inside), (peeking through slit), (scared face), (covering mouth), (heavy breathing), (killer outside), (darkness), (ray tracing), (claustrophobic)", links: ["ホラー"] },
      { label: "絶望的な遭遇", val: "(sitting on floor), (backing away), (screaming), (wide eyes), (horror on face), (monster looming), (low angle), (dutch angle), (dim lighting), (volumetric lighting), (shadows)", links: ["座りポーズ"] },
      { label: "ヤンデレ・束縛", val: "(yandere), (empty eyes), (scary smile), (holding knife behind back), (shadow over face), (obsessed), (love hearts in eyes), (dark atmosphere)" },
      { label: "ツンデレ・赤面", val: "(tsundere), (arms crossed), (looking away), (blush), (pout), (angry but shy), (school uniform), (cute angry face)" },
      { label: "クーデレ・無口", val: "(expressionless), (staring), (quiet atmosphere), (beautiful detailed eyes), (cool beauty), (emotionless), (mysterious)" },
      { label: "ジェットコースター", val: "(roller coaster), (screaming), (hands up), (wind blowing hair), (speed lines), (high altitude), (fear and excitement), (blue sky)", links: ["ダイナミックポーズ"] }
    ],
    "👻 ホラー・サスペンス": [
      { label: "心霊写真風", val: "(daily life photo), (peace sign), (group photo), (ghost face behind), (transparent spirit), (cursed image), (noise), (low quality style), (vhs artifact), (film grain)" },
      { label: "儀式の生贄", val: "(lying on altar), (bound hands), (unconscious), (magic circle), (red candles), (hooded figures), (ritual chamber), (high angle shot), (glowing magic), (atmospheric lighting)", links: ["寝ポーズ"] }
    ]
  };

  // ==============================================================================
  // 🔞 R-18 / NSFW シークレットパック
  // ==============================================================================
  const SECRET_PACK_DATA = {
    // 1. 男女・ノーマル
    "👫 男女・ノーマル (Boy & Girl / Straight)": [
      { label: "男女・基本セット", val: "(1boy), (1girl), (heterosexual), (male focus), (female focus), (sex), (intimate), (couple)", desc: "異性愛を強力に指定します" },
      { label: "純愛・見つめ合い", val: "(1boy), (1girl), (missionary position), (sex), (locking eyes), (loving sex), (blushing), (intertwined fingers), (kissing), (romantic)", links: ["Basic R-18"] },
      { label: "激しいセックス", val: "(1boy), (1girl), (doggystyle), (intense sex), (sweat), (messy hair), (breasts bouncing), (grabbing hips), (climax), (hardcore)", links: ["Basic R-18"] },
      { label: "体格差・巨根", val: "(1boy), (1girl), (size difference), (height difference), (giant penis), (small girl), (stretching), (bulge), (masculine male)", links: ["Basic R-18"] },
      { label: "対面座位・密着", val: "(1boy), (1girl), (mating press), (legs on shoulders), (deepest penetration), (eye contact), (womb marking), (internal view)", links: ["Basic R-18"] }
    ],
    
    // 2. 表情・精神
    "🤪 R-18 表情・精神 (Expressions & Mind)": [
      { label: "アヘ顔・ダブルピース", val: "(ahegao), (double peace sign), (rolling eyes), (tongue out), (saliva), (blushing heavily), (drooling), (happy)", desc: "快楽に溺れるド定番。" },
      { label: "絶頂・イキ顔", val: "(orgasm face), (heavy breathing), (sweat), (climax), (toes curling), (shaking), (cum on face), (pleasure)", desc: "リアリティのある絶頂。" },
      { label: "精神崩壊・レイプ目", val: "(mind break), (empty eyes), (no highlights in eyes), (open mouth), (drooling), (broken), (despair), (unable to resist)", desc: "心が壊れた状態。" },
      { label: "メス顔・ハート目", val: "(heart-shaped pupils), (heart eyes), (seductive smile), (wanting more), (aroused), (horny), (lust), (looking at viewer)", desc: "好意と性欲。" },
      { label: "屈辱・悔し涙", val: "(humiliation), (crying), (tears), (biting lip), (forced), (looking away), (covering face), (shame)", desc: "不本意なセックス。" },
      { label: "嫌悪・蔑み", val: "(disgusted face), (looking down on viewer), (scorn), (cold eyes), (glaring), (furrowed brows)", desc: "ゴミを見るような目。" }
    ],

    // 3. 演出・液体
    "💦 演出・液体・状態 (Effects & Fluids)": [
      // ★追加: ハート演出喘ぎ
      { label: "うめきハード・ハート乱舞", val: "(heart particles:1.3), (floating pink hearts around her:1.3), (moaning heart symbols:1.2), (moaning with hearts:1.2), (background glowing with heart effects:1.2)", desc: "空間をハートで埋め尽くす。" },
      { label: "液体まみれ・ドロドロ", val: "(messy body), (sweat), (saliva), (cum on body), (bukkake), (sticky), (wet skin), (glistening skin)", desc: "全身を汚す。" },
      { label: "大量射精・中出し", val: "(excessive cum), (creampie), (cum overflow), (cum dripping), (after sex), (puddle of cum), (leaking)", desc: "量の強調。" },
      { label: "断面図・内部透視", val: "(cross section), (x-ray), (internal view), (cervix), (womb), (cum inside), (cutaway)", desc: "内部構造の描写。" },
      { label: "発情・ヒート", val: "(heat), (steam), (heavy blush), (panties aside), (fingering), (masturbation), (exhaling)", desc: "ムラムラした状態。" },
      { label: "精液膨張・腹ボテ", val: "(stomach bulge), (cum inflation), (distended belly), (full), (pregnant pose), (navel press)", desc: "お腹の膨らみ。" }
    ],

    // 4. ストーリー
    "🕰️ R-18 ストーリー・前後 (Time & Sequence)": [
      { label: "脱衣・恥じらい (Before)", val: "(undressing), (clothes half off), (panties down), (covering body), (shy), (blushing), (looking away), (reluctant), (waiting on bed)", desc: "行為前の緊張感。" },
      { label: "シャワー・準備 (Before)", val: "(showering), (bathroom), (naked), (wet hair), (steam), (washing body), (soap), (anticipation)", desc: "体を清める。" },
      { label: "焦らし・寸止め (Teasing)", val: "(teasing), (denial), (hovering), (begging), (wanting it), (impatience), (legs spread), (fingering)", desc: "高まる期待。" },
      { label: "事後・余韻 (After)", val: "(after sex), (messy hair), (lying on bed), (exhausted), (heavy breathing), (cum on sheets), (disheveled), (peaceful face), (cuddle)", desc: "行為後の賢者タイム。" },
      { label: "朝チュン (Morning)", val: "(morning after), (waking up), (naked in bed), (messy room), (sunlight), (hickey), (memory of last night), (kissing)", desc: "翌朝の風景。" }
    ],

    // 5. 玩具
    "🧸 R-18 玩具・器具 (Toys & Devices)": [
      { label: "バイブ・ローター", val: "(sex toys), (vibrator), (dildo), (pink rotor), (holding toy), (masturbation), (pleasure), (buzzing)", desc: "自慰や責めに。" },
      { label: "浣腸・アナル責め", val: "(enema), (enema kit), (anal play), (plugged), (butt plug), (anal beads), (bent over), (shaking)", desc: "背徳的なプレイ。" },
      { label: "拘束具・猿轡", val: "(ball gag), (handcuffs), (rope), (shibari), (collar), (leash), (bound arms), (drooling), (muffled scream)", desc: "自由を奪う。" },
      { label: "医療プレイ・診察台", val: "(gynecological chair), (stirrups), (legs spread), (speculum), (medical exam), (embarrassed), (doctor and patient)", desc: "医療的な恥辱。" },
      { label: "スライム風呂・ローション", val: "(slime bath), (lotion), (viscous liquid), (slippery), (trapped), (massage), (nurunuru)", desc: "ヌルヌルの感触。" }
    ],

    // 既存カテゴリー群
    "🏩 H-ロケーション": [
      { label: "ラブホ・鏡張り", val: "(love hotel), (mirror chair), (glass wall), (pink lighting), (erotic atmosphere), (bed), (condom wrapper), (neon signs)", links: ["Basic R-18"] },
      { label: "マジックミラー号", val: "(magic mirror truck), (vehicle interior), (city street outside window), (exposed to public), (voyeurism), (passing pedestrians), (crowd outside)", links: ["Basic R-18"] },
      { label: "公衆トイレ", val: "(public toilet stall), (cramped), (sitting on toilet), (pants down), (graffiti), (dirty tiles), (secret sex), (flushing sound)", links: ["Basic R-18"] },
      { label: "混浴露天風呂", val: "(mixed bath), (onsen), (steam), (naked), (peeking), (outdoor sex), (rock bath), (night), (wet body), (blushing)", links: ["Basic R-18"] },
      { label: "保健室のベッド", val: "(school infirmary), (curtain closed), (lying on bed), (nurse play), (after school sex), (creaking bed), (medicine cabinet)", links: ["Basic R-18"] },
      { label: "更衣室・盗撮", val: "(locker room), (changing clothes), (half naked), (hidden camera angle), (voyeurism), (gym clothes), (school swimsuit)", links: ["Basic R-18"] }
    ],
    "🏫 学園・背徳": [
      { label: "体育倉庫", val: "(gym storage room), (sweat), (sportswear), (bloomers), (ball cart), (dusty), (after school), (mat)", links: ["Basic R-18"] },
      { label: "放課後の教室", val: "(classroom), (sunset), (on desk), (skirt lifted), (messy clothes), (blackboard), (watching door), (secret relationship)", links: ["Basic R-18"] },
      { label: "指導室・土下座", val: "(teacher office), (scolding), (kneeling), (looking up), (submission), (desk), (pleading), (punishment)", links: ["Basic R-18"] },
      { label: "プール・夜", val: "(school pool), (night), (moonlight), (wet swimsuit), (floating), (sneaking in), (water reflection)", links: ["Basic R-18"] },
      { label: "図書室・静寂", val: "(library), (bookshelves), (quiet), (covering mouth), (secret sex), (skirt lifted), (looking around)", links: ["Basic R-18"] }
    ],
    "🏠 生活・密着": [
      { label: "裸エプロン", val: "(naked apron), (kitchen), (cooking), (from behind), (messy hair), (apron only), (side breast), (domestic)", links: ["Basic R-18"] },
      { label: "ソファーで密着", val: "(living room), (sofa), (cuddling), (legs wrapped), (tv light), (relaxing), (missionary), (intimate)", links: ["Basic R-18"] },
      { label: "寝起きドッキリ", val: "(bedroom), (morning), (straddling), (waking up), (pajamas), (messy hair), (morning wood), (surprise)", links: ["Basic R-18"] },
      { label: "一緒にお風呂", val: "(bathroom), (bathtub), (washing body), (bubbles), (steam), (facing each other), (wet skin), (shampoo)", links: ["Basic R-18"] },
      { label: "玄関で待ち伏せ", val: "(entrance hall), (welcome home), (hugging), (standing sex), (still in shoes), (impatience), (kissing)", links: ["Basic R-18"] }
    ],
    "👯 乱交・複数": [
      { label: "おじさん・醜男", val: "(ugly bastard), (fat man), (sweaty), (grinning), (ntr), (corruption), (forced), (contrast)", links: ["Basic R-18"] },
      { label: "輪姦・回し", val: "(gangbang), (multiple boys), (surrounded), (bukkake), (messy body), (white fluids), (ahegao), (mind break)", links: ["Basic R-18"] },
      { label: "ダブル貫通", val: "(double penetration), (dp), (two penises), (vaginal and anal), (stretching), (agony/pleasure), (cross section), (full)", links: ["Basic R-18"] },
      { label: "サンドイッチ", val: "(spitroast), (double blowjob), (face fuck), (anal and oral), (messy face), (drooling), (hardcore)", links: ["Basic R-18"] },
      { label: "異種姦パーティ", val: "(monster gangbang), (orcs), (goblins), (slime), (tentacles), (breeding), (defeat), (messy)", links: ["Basic R-18"] }
    ],
    "😈 陵辱・ハード": [
      // ★追加: 激しい挿入・指挿入
      { label: "NSFW挿入 (激)", val: "(rape), (vaginal penetration with thick penis)", desc: "激しい挿入" },
      { label: "NSFW指挿入 (激)", val: "(rape), (vaginal penetration with thick finger)", desc: "激しい指入れ" },
      
      { label: "満員電車・痴漢", val: "(crowded train), (chikan), (groping), (molestation), (surrounded by men), (blushing), (trying not to voice), (public transport), (sweat)", links: ["Basic R-18"] },
      { label: "肉便器・公衆", val: "(public use), (cum dump), (messy body), (ahegao), (writing on body), (leash), (toilet), (submissive), (used)", links: ["Basic R-18"] },
      { label: "敗北・オーク", val: "(defeated), (lying on ground), (torn clothes), (crying), (orc looming), (goblin), (messy hair), (despair), (battlefield)", links: ["Basic R-18"] },
      { label: "眠姦・睡眠", val: "(sleeping), (asleep), (molestation), (unaware), (bed), (night), (pajamas), (touching), (prank)", links: ["Basic R-18"] },
      { label: "強制・レイプ", val: "(rape), (forced), (struggling), (pinned down), (tears), (fear), (ripped clothes), (hand over mouth)", links: ["Basic R-18"] }
    ],
    "💊 催眠・変容": [
      { label: "時間停止", val: "(time stop), (frozen people background), (pause button), (powerless), (unaware), (monochrome background), (colorful character), (statue)", links: ["Basic R-18"] },
      { label: "催眠・洗脳", val: "(hypnotized), (empty eyes), (swirl eyes), (mind control), (drooling), (obeying orders), (dull eyes), (slave), (trance)", links: ["Basic R-18"] },
      { label: "常識改変・露出", val: "(walking nude), (public), (smiling), (unaware), (hypnosis), (common sense alteration), (happy), (crowd)", links: ["Basic R-18"] },
      { label: "石化進行", val: "(petrification), (turning to stone), (grey skin), (statue), (immobile), (half stone), (fear), (partial)", links: ["Basic R-18"] },
      { label: "寄生・苗床", val: "(stomach bulge), (pregnant), (impregnation), (alien), (parasite), (eggs), (x-ray), (birthing), (breeder)", links: ["Basic R-18"] }
    ],
    "🦶 フェチ・奉仕": [
      { label: "足舐め・踏み", val: "(footjob), (trampling), (licking feet), (soles), (toes), (looking down), (scorn), (dominance)", links: ["Basic R-18"] },
      { label: "顔面騎乗", val: "(facesitting), (suffocation), (thighs), (pussy view), (ass view), (smothering), (cant breathe)", links: ["Basic R-18"] },
      { label: "脇コキ・匂い", val: "(armpit sex), (sniffing), (sweaty armpits), (arms up), (hair), (pheromones), (titjob)", links: ["Basic R-18"] },
      { label: "トイレ・放尿", val: "(peeing), (watersports), (toilet), (skirt lifted), (puddle), (relief), (embarrassed)", links: ["Basic R-18"] },
      { label: "ご奉仕・手コキ", val: "(handjob), (service), (kneeling), (looking at viewer), (tongue out), (saliva trail), (upward glance)", links: ["Basic R-18"] }
    ],
    "⛓️ 拘束・責め": [
      { label: "緊縛・吊り", val: "(shibari), (rope bondage), (suspension), (hanging), (bound wrists), (bound legs), (rope marks), (kinbaku), (struggling)", links: ["Basic R-18"] },
      { label: "拘束椅子・機械", val: "(bondage chair), (restrained), (spread legs), (sex machine), (dildo machine), (vibrator), (helpless), (mechanical arms)", links: ["Basic R-18"] },
      { label: "三角木馬", val: "(wooden horse), (torture device), (straddling), (painful expression), (rope), (dungeon), (weights)", links: ["Basic R-18"] },
      { label: "壁埋まり", val: "(stuck in wall), (glory hole), (ass exposed), (stuck from waist down), (helpless), (struggling), (public use)", links: ["Basic R-18"] },
      { label: "目隠し・猿轡", val: "(blindfold), (gag), (ball gag), (drooling), (sensory deprivation), (bound arms), (muffled screams)", links: ["Basic R-18"] }
    ]
  };

  const DICT = {
    // Basic
    "maid outfit": "メイド服", "holding serving tray": "トレイを持つ", "curtsy": "カーテシー", "classic maid": "クラシックメイド",
    "mansion interior": "屋敷の内装", "frills": "フリル", "tea set": "ティーセット", "nurse uniform": "ナース服",
    "holding syringe": "注射器を持つ", "clipboard": "カルテ", "medical checkup": "診察", "office lady": "OL",
    "business suit": "スーツ", "holding documents": "書類を持つ", "modern office": "オフィス", "desk work": "デスクワーク",
    "glasses": "眼鏡", "smart look": "知的", "high rise building view": "高層ビルの眺め", "police uniform": "警官の制服",
    "holding handcuffs": "手錠を持つ", "police hat": "警帽", "arresting pose": "逮捕ポーズ", "patrol car background": "パトカー",
    "justice": "正義", "bunny girl suit": "バニーガール", "rabbit ears": "うさ耳", "fishnet tights": "網タイツ",
    "holding tray": "トレイを持つ", "casino background": "カジノ", "roulette": "ルーレット", "neon lights": "ネオンライト",
    "glamorous": "魅力的", "miko outfit": "巫女服", "holding broom": "箒を持つ", "shrine background": "神社",
    "sweeping leaves": "掃除", "traditional japanese": "日本の伝統", "sacred atmosphere": "神聖な雰囲気", "red hakama": "赤袴",
    "santa costume": "サンタコス", "christmas tree": "クリスマスツリー", "holding gift box": "プレゼントを持つ", "snowy background": "雪景色",
    "lights and ornaments": "電飾と飾り", "happy smile": "幸せな笑顔", "winter holiday": "冬休み", "witch costume": "魔女コス",
    "holding pumpkin": "カボチャを持つ", "jack-o'-lantern": "ジャック・オー・ランタン", "bats": "コウモリ", "purple and orange theme": "紫とオレンジ",
    "spooky castle background": "不気味な城", "magic hat": "魔法の帽子", "wedding dress": "ウェディングドレス", "holding bouquet": "ブーケを持つ",
    "church interior": "教会", "white veil": "ベール", "stained glass": "ステンドグラス", "happy tears": "嬉し泣き",
    "marriage ceremony": "結婚式", "pure white": "純白", "wearing yukata": "浴衣", "onsen": "温泉", "open air bath": "露天風呂",
    "wooden bucket": "木桶", "flushed face": "上気した顔", "night scenery": "夜景", "eating hamburger": "ハンバーガーを食べる",
    "holding burger with both hands": "両手で持つ", "fast food restaurant": "ファストフード店", "french fries": "ポテト", "cola": "コーラ",
    "happy eating face": "幸せそうに食べる", "open mouth": "口を開ける", "afternoon tea": "アフタヌーンティー", "holding tea cup": "カップを持つ",
    "cake stand": "ケーキスタンド", "garden terrace": "テラス", "elegant dress": "エレガントなドレス", "sipping tea": "紅茶をすする",
    "relaxing afternoon": "午後のひととき", "izakaya": "居酒屋", "holding beer mug": "ビールジョッキ", "kanpai": "乾杯",
    "yakitori": "焼き鳥", "lively atmosphere": "活気ある雰囲気", "drinking": "飲む", "slightly drunk": "ほろ酔い", "lanterns": "提灯",
    "aquarium date": "水族館デート", "looking at fish": "魚を見る", "reflection on glass": "ガラスの反射", "walking together": "一緒に歩く",
    "happy expression": "幸せな表情", "movie theater": "映画館", "sitting next to each other": "隣同士に座る", "eating popcorn": "ポップコーン",
    "screen light reflecting on face": "スクリーンの光", "intimate moment": "親密な瞬間", "amusement park date": "遊園地デート",
    "ferris wheel in background": "背景に観覧車", "holding crepe": "クレープを持つ", "colorful lights": "カラフルな光",
    "vibrant atmosphere": "活気ある雰囲気", "casual clothes": "私服", "observation deck": "展望台", "night city view": "夜景",
    "sparkling city lights": "煌めく街", "leaning on railing": "手すりにもたれる", "romantic mood": "ロマンチックなムード", "couple atmosphere": "カップル",
    "walking home together": "一緒に下校", "sunset glow": "夕焼け", "blushing": "赤面", "sentimental atmosphere": "感傷的",
    "running away": "逃げる", "looking back": "振り返る", "scared expression": "怯えた顔", "tears": "涙", "sweat": "冷や汗",
    "abandoned hallway": "廃墟の廊下", "motion blur": "モーションブラー", "scary monster chasing from behind": "背後から迫る怪物",
    "pursuer looming in background": "背景に迫る追跡者", "cinematic lighting": "シネマティック照明", "dynamic angle": "ダイナミックなアングル",
    "dramatic shadows": "劇的な影", "hiding in locker": "ロッカーに隠れる", "pov from inside": "中からの視点", "peeking through slit": "隙間から覗く",
    "scared face": "恐怖顔", "covering mouth": "口を覆う", "heavy breathing": "荒い息", "killer outside": "外に殺人鬼",
    "darkness": "暗闇", "ray tracing": "レイトレーシング", "claustrophobic": "閉塞感", "sitting on floor": "床に座り込む", "backing away": "後ずさる",
    "screaming": "悲鳴", "wide eyes": "見開いた目", "horror on face": "恐怖の表情", "monster looming": "怪物が迫る", "low angle": "ローアングル",
    "dutch angle": "ダッチアングル", "dim lighting": "薄暗い照明", "volumetric lighting": "ボリュメトリック照明", "shadows": "影",
    "yandere": "ヤンデレ", "empty eyes": "虚ろな目", "scary smile": "怖い笑顔", "holding knife behind back": "背後にナイフ",
    "shadow over face": "顔に影", "obsessed": "執着", "love hearts in eyes": "目にハート", "tsundere": "ツンデレ", "arms crossed": "腕組み",
    "looking away": "そっぽを向く", "pout": "ふくれっ面", "angry but shy": "怒りつつ照れ", "school uniform": "制服",
    "cute angry face": "可愛い怒り顔", "expressionless": "無表情", "staring": "じっと見る", "cool beauty": "クールビューティー",
    "emotionless": "感情がない", "mysterious": "ミステリアス", "reading book": "読書", "intellectual": "知的", "calm demeanor": "落ち着いた態度",
    "slight smile": "微かな笑み", "soft blush": "ほんのり赤面", "rare expression": "珍しい表情", "looking at viewer": "こっちを見る",
    "gentle atmosphere": "優しい雰囲気", "holding cat": "猫を抱く", "gap moe": "ギャップ萌え", "roller coaster": "ジェットコースター",
    "hands up": "手を上げる", "speed lines": "集中線", "high altitude": "高所", "fear and excitement": "恐怖と興奮",
    "haunted house attraction": "お化け屋敷", "clinging to arm": "腕にしがみつく", "ghost prop in background": "背景にお化け", "surprise": "驚き",
    // R-18 Translations
    "love hotel": "ラブホ", "mirror chair": "鏡張りの椅子", "magic mirror truck": "マジックミラー号", "vehicle interior": "車内",
    "voyeurism": "盗撮・覗き", "public toilet stall": "公衆トイレ", "cramped": "狭い", "mixed bath": "混浴", "rock bath": "岩風呂",
    "crowded train": "満員電車", "chikan": "痴漢", "molestation": "痴漢行為", "time stop": "時間停止", "pause button": "一時停止",
    "hypnotized": "催眠", "swirl eyes": "ぐるぐる目", "mind control": "洗脳", "public use": "公衆便所(隠語)", "cum dump": "肉便器",
    "defeated": "敗北", "torn clothes": "破れた服", "orc looming": "オーク", "goblin": "ゴブリン", "shibari": "緊縛",
    "rope bondage": "縄縛り", "suspension": "吊り", "bondage chair": "拘束椅子", "sex machine": "セックスマシーン", "wooden horse": "三角木馬",
    "stuck in wall": "壁埋まり", "glory hole": "グローリーホール", "blindfold": "目隠し", "ball gag": "ボールギャグ", "sensory deprivation": "感覚遮断",
    "oviposition": "産卵", "belly bulge": "腹ボテ", "encased in slime": "スライム漬け", "melting clothes": "溶ける服",
    "bestiality": "獣姦", "knotting": "ノッティング", "forced fellatio": "無理やりフェラ", "irrumatio": "イラマチオ", "double blowjob": "ダブルフェラ",
    "spitroast": "サンドイッチ/輪姦", "footjob": "足コキ", "trampling": "踏みつけ", "handjob": "手コキ", "service": "奉仕",
    "outdoor sex": "野外セックス", "humiliation": "羞恥", "skirt lift": "スカートめくり", "panchira": "パンチラ", "selfie": "自撮り", "mirror selfie": "鏡越し自撮り",
    "nude": "ヌード", "naked": "全裸", "ahegao": "アヘ顔", "tentacles": "触手", "bondage": "拘束", "nsfw": "R-18", "uncensored": "無修正",
    "locker room": "更衣室", "changing clothes": "着替え", "half naked": "半裸", "hidden camera angle": "隠しカメラ視点", "gym clothes": "体操服",
    "school swimsuit": "スクール水着", "sleeping": "睡眠", "asleep": "寝ている", "unaware": "気づかない", "collar": "首輪", "leash": "リード",
    "chain": "鎖", "on all fours": "四つん這い", "pet play": "ペットプレイ", "bowl": "ボウル", "dog ears": "犬耳", "tail": "尻尾",
    "stomach deformation": "お腹変形", "dissolving": "溶解", "bubbles": "泡", "mating": "交尾", "animal penis": "動物のペニス",
    "parasite": "寄生", "crawling on skin": "肌を這う", "eggs": "卵", "nest": "巣", "bound by worms": "蟲拘束", "petrification": "石化",
    "statue": "石像", "frozen": "凍結", "turning to stone": "石化中", "grey skin": "灰色の肌", "partially petrified": "部分石化",
    "horrified expression": "恐怖の表情", "cum on breasts": "パイ射", "upward glance": "上目遣い", "nude in public": "公衆露出",
    "laughed at": "笑われる", "covering body": "体を隠す", "surrounded": "囲まれる", "camera": "カメラ", "live streaming": "ライブ配信",
    "showing body": "体を見せる", "nude filter": "裸フィルター", "condom wrapper": "コンドームの袋", "neon signs": "ネオンサイン",
    "passing pedestrians": "通行人", "crowd outside": "外の人混み", "graffiti": "落書き", "dirty tiles": "汚れたタイル", "secret sex": "秘密のセックス",
    "flushing sound": "流れる音", "peeking": "覗き", "wet body": "濡れた体", "nurse play": "ナースプレイ", "after school sex": "放課後セックス",
    "creaking bed": "きしむベッド", "medicine cabinet": "薬棚", "gym storage room": "体育倉庫", "bloomers": "ブルマ", "ball cart": "ボールカゴ",
    "teacher office": "指導室", "scolding": "説教", "kneeling": "土下座",
    "pleading": "懇願", "punishment": "お仕置き", "school pool": "プール", "bookshelves": "本棚", "naked apron": "裸エプロン", "side breast": "横乳",
    "domestic": "家庭的", "waking up": "寝起き", "morning wood": "朝立ち", "washing body": "体を洗う", "facing each other": "対面", "entrance hall": "玄関",
    "welcome home": "おかえり", "still in shoes": "靴のまま", "impatience": "焦燥", "ugly bastard": "おじさん/醜男", "fat man": "デブ", "ntr": "寝取られ",
    "double penetration": "ダブル貫通", "monster gangbang": "異種姦パーティ", "rape": "レイプ", "pinned down": "押さえつけ", "common sense alteration": "常識改変",
    "breeder": "苗床", "peeing": "放尿", "watersports": "聖水", "armpit sex": "脇コキ", "sniffing": "匂いを嗅ぐ", "titjob": "パイズリ", "facesitting": "顔面騎乗",
    "suffocation": "窒息", "cant breathe": "息ができない",
    "vaginal penetration with thick penis": "極太ペニス挿入", "vaginal penetration with thick finger": "太い指挿入",
    // Boy Girl
    "1boy": "男", "1girl": "女", "heterosexual": "異性愛", "male focus": "男焦点", "female focus": "女焦点", "intimate": "親密", "couple": "カップル",
    "locking eyes": "見つめ合う", "loving sex": "愛のあるセックス", "intertwined fingers": "恋人繋ぎ", "intense sex": "激しいセックス",
    "grabbing hips": "腰を掴む", "climax": "絶頂", "hardcore": "ハードコア", "size difference": "体格差", "height difference": "身長差",
    "giant penis": "巨根", "small girl": "小柄な少女", "masculine male": "男らしい", "mating press": "対面座位", "legs on shoulders": "足を肩に",
    "deepest penetration": "最奥挿入", "womb marking": "子宮刻印",
    // New Expression & Effects
    "heart particles": "ハートの粒子", "floating pink hearts around her": "舞うピンクのハート", "moaning heart symbols": "ハートの喘ぎ",
    "moaning with hearts": "ハート付きの喘ぎ", "background glowing with heart effects": "輝くハート背景",
    // Story & Toys
    "undressing": "脱衣中", "clothes half off": "着衣半脱ぎ", "panties down": "パンツ下ろし", "covering body": "体を隠す", "shy": "恥じらい",
    "reluctant": "嫌がる", "waiting on bed": "ベッドで待機", "showering": "シャワー", "wet hair": "濡れ髪", "washing body": "体を洗う", "soap": "石鹸",
    "anticipation": "期待", "teasing": "焦らし", "denial": "お預け", "hovering": "寸止め", "begging": "懇願", "impatience": "焦燥",
    "after sex": "事後", "messy hair": "乱れ髪", "exhausted": "疲弊", "cum on sheets": "シーツの汚れ", "disheveled": "着衣乱れ",
    "morning after": "翌朝", "hickey": "キスマーク", "memory of last night": "昨夜の記憶", "sex toys": "大人のおもちゃ", "vibrator": "バイブ",
    "dildo": "ディルド", "pink rotor": "ローター", "holding toy": "おもちゃを持つ", "buzzing": "振動音", "enema": "浣腸", "enema kit": "浣腸キット",
    "anal play": "アナル遊び", "plugged": "栓", "butt plug": "アナルプラグ", "anal beads": "アナルビーズ", "gynecological chair": "診察台",
    "stirrups": "足乗せ台", "speculum": "クスコ", "medical exam": "触診", "slime bath": "スライム風呂", "lotion": "ローション",
    "viscous liquid": "粘液", "slippery": "ヌルヌル", "massage": "マッサージ", "nurunuru": "ぬるぬる"
  };

  function createSubAccordion(title, items, isSecret) { 
    const details = document.createElement("details"); details.className = "qp-sub-acc"; details.style.marginBottom = "6px"; details.style.border = "1px solid #eee"; details.style.borderRadius = "4px"; details.style.background = "#fff"; details.open = false; 
    const summary = document.createElement("summary"); summary.textContent = title; summary.style.fontWeight = "bold"; summary.style.padding = "6px 10px"; summary.style.cursor = "pointer"; summary.style.background = "#f9f9f9"; 
    
    if (isSecret) summary.style.color = "#d00";

    details.appendChild(summary); 
    const content = document.createElement("div"); content.className = "qp-content-grid"; content.style.padding = "8px"; content.style.display = "grid"; content.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))"; content.style.gap = "6px"; 
    items.forEach(item => { 
      const label = document.createElement("label"); label.style.display = "flex"; label.style.alignItems = "center"; label.style.fontSize = "0.9em"; label.style.cursor = "pointer"; 
      const cb = document.createElement("input"); cb.type = "checkbox"; cb.style.marginRight = "6px"; cb.dataset.val = item.val || item.en; 
      label.appendChild(cb); label.appendChild(document.createTextNode(item.label || `${item.ja}/${item.en}`)); 
      if(item.links) cb.dataset.links = item.links.join(","); content.appendChild(label); 
    }); 
    details.appendChild(content); return details; 
  }

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      
      const sharedContent = document.getElementById("qp-packs-content");
      if (sharedContent) {
        Object.entries(PACK_DATA).forEach(([k,v]) => { sharedContent.appendChild(createSubAccordion(k, v)); });
        
        if (IS_UNLOCKED) {
          const secretHeader = document.createElement("div");
          secretHeader.style.cssText = "margin:15px 0 5px; color:#d00; font-weight:bold; border-bottom:2px solid #d00; padding-bottom:3px;";
          secretHeader.textContent = "⚠️ R-18 Situations (Adult Only)";
          sharedContent.appendChild(secretHeader);

          Object.entries(SECRET_PACK_DATA).forEach(([k,v]) => {
            sharedContent.appendChild(createSubAccordion(k, v, true));
          });
        }

      } else {
        const root = document.querySelector(".quality-preset-integrated");
        if (root) {
          Object.entries(PACK_DATA).forEach(([k,v]) => root.appendChild(createSubAccordion(k, v)));
          if(IS_UNLOCKED) Object.entries(SECRET_PACK_DATA).forEach(([k,v]) => root.appendChild(createSubAccordion(k, v, true)));
        }
      }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

