(function(){
  "use strict";
  const VERSION = 6; 
  const KEY = "quality_preset";
  const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  // ==============================================================================
  // 通常パック (General Packs)
  // ==============================================================================
  const PACK_DATA = {
    "💼 職業・なりきりパック": [
      { label: "アイドル・シマエナガ風", val: "(idol-style outfit), (white and pastel blue frilly dress), (feather embroidery), (fluffy sleeves), (short layered skirt), (down feather texture), (translucent ribbons), (soft feather hairclip)", desc: "シマエナガモチーフのアイドル衣装" },
      { label: "メイド・お給仕", val: "(maid outfit), (holding serving tray), (curtsy), (classic maid), (mansion interior), (elegant), (frills), (tea set)", links: ["立ちポーズ"] },
      { label: "ナース・診察", val: "(nurse uniform), (holding syringe), (clipboard), (hospital room), (white background), (clean atmosphere), (medical checkup)", links: ["病院"] },
      { label: "OL・オフィス", val: "(office lady), (business suit), (holding documents), (modern office), (desk work), (glasses), (smart look), (high rise building view)", links: ["眼鏡"] },
      { label: "ポリス・逮捕", val: "(police uniform), (holding handcuffs), (police hat), (arresting pose), (cool expression), (patrol car background), (justice)", links: ["キメポーズ"] },
      { label: "バニーガール", val: "(bunny girl suit), (rabbit ears), (fishnet tights), (holding tray), (casino background), (roulette), (neon lights), (glamorous)", links: ["セクシー"] },
      { label: "巫女・神社", val: "(miko outfit), (holding broom), (shrine background), (sweeping leaves), (traditional japanese), (sacred atmosphere), (red hakama)", links: ["和風"] }
    ],
    // ★テーマ別・持ち物セット
    "🎒 テーマ別・持ち物セット (Item Sets)": [
      { label: "医者セット", val: "(holding stethoscope), (clipboard under arm), (holding syringe), (medical tools), (pen in pocket)", desc: "診察に必要な道具一式" },
      { label: "ゴスロリセット", val: "(holding frilled parasol), (lace headdress), (cross necklace), (holding gothic doll), (rose decoration)", desc: "ゴシックな装飾品セット" },
      { label: "現代っ子セット", val: "(holding smartphone), (drinking bubble tea), (headphones around neck), (stylish backpack), (mask)", desc: "今風のアイテムセット" },
      { label: "冒険者セット", val: "(holding map), (compass), (lantern), (potion flask on belt), (leather backpack), (dagger)", desc: "旅の必需品セット" },
      { label: "魔法使いセット", val: "(holding magic staff), (grimoire), (potion bottles), (crystal ball), (magic components)", desc: "魔法研究の道具" },
      { label: "アイドルセット", val: "(holding microphone), (glow stick), (bouquet), (fan letter), (towel)", desc: "ステージ映えする小物" },
      { label: "画材・美術セット", val: "(holding paintbrush), (palette), (easel), (apron with paint stains), (sketchbook), (pencils)", desc: "絵を描く道具" },
      { label: "読書・勉強セット", val: "(open book), (stack of books), (glasses), (pen), (notebook), (library card)", desc: "知的なアイテム" }
    ],
    "💦 演出・エフェクト (Effects)": [
      { label: "舞い散る羽根", val: "(floating feathers), (white feathers), (angelic atmosphere), (soft focus), (dreamy)" },
      { label: "ハートのボケ", val: "(bokeh heart shapes), (pink atmosphere), (romantic light), (sparkles), (glowing particles)" },
      { label: "雪の結晶", val: "(snowflake decorations), (winter theme), (glowing snowflakes), (cold breath), (magical atmosphere)" },
      { label: "キラキラ粒子", val: "(faint sparkles), (light particles), (shimmering air), (magical dust), (fantasy setting)" },
      { label: "ポラロイド写真", val: "(polaroid photo developing mid-air), (floating photos), (memories), (nostalgic)" }
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

    // 🍆 挿入・ピストン
    "🍆 挿入・ピストン (Insertion & Motion)": [
      { label: "明確な挿入描写", val: "(penetration clearly visible:1.3), (vaginal sex:1.3), (connection point), (inserting), (glans inside)", desc: "結合部をはっきり描く。" },
      { label: "激しいピストン", val: "(hips moving rhythmically), (fully thrusting), (fast motion), (afterimage of hips), (piston motion), (shaking hips)", desc: "動きの激しさを強調。" },
      { label: "腰ガッチリ・密着", val: "(his hands gripping her hips firmly), (keeping her pressed), (tight grip), (skin indentation), (no escape)", desc: "逃さないホールド感。" },
      { label: "溢れる愛液・結合", val: "(crotch overflowing with fluids), (inner thighs wet and glistening), (semen dripping), (juicy), (wet sounds)", desc: "液体のリアリティ。" },
      { label: "ガラス越し・激", val: "(breasts flattened against glass), (nipple pressure visible), (fully thrusting from behind), (glass reflection layering:1.3), (foggy breath)", desc: "硝子プレイの激しい版。" }
    ],
    
    // 2. 表情・精神
    "🤪 R-18 表情・精神 (Expressions & Mind)": [
      { label: "ハート目・催眠", val: "(hypnotic heart eyes), (pink rings fading into pupils), (vacant smile), (euphoric tears), (drooling), (mind break)", desc: "トロトロに溶けた表情。" },
      { label: "絶頂・震え", val: "(orgasm), (girl trembling in climax:1.5), (shaking), (arched back), (toes curling), (spasms)", desc: "限界を迎えた震え。" },
      { label: "荒い呼吸・喘ぎ", val: "(rough breathing:1.5), (panting), (heavy breathing), (open mouth), (saliva), (sweat)", desc: "息遣いを感じる描写。" },
      { label: "恍惚の溜息", val: "(ecstatic sighs), (trance), (half-closed eyes), (blushing), (drooling), (pleasure)", desc: "快楽に浸る表情。" },
      { label: "アヘ顔・ダブルピース", val: "(ahegao), (double peace sign), (rolling eyes), (tongue out), (saliva), (blushing heavily), (drooling), (happy)", desc: "快楽に溺れるド定番。" },
      { label: "屈辱・悔し涙", val: "(humiliation), (crying), (tears), (biting lip), (forced), (looking away), (covering face), (shame)", desc: "不本意なセックス。" },
      { label: "嫌悪・蔑み", val: "(disgusted face), (looking down on viewer), (scorn), (cold eyes), (glaring), (furrowed brows)", desc: "ゴミを見るような目。" }
    ],

    // 3. 演出・液体
    "💦 演出・液体・状態 (Effects & Fluids)": [
      { label: "吐息・ハート", val: "(foggy breath trails), (smeared heart-shaped breath patches), (erotic moan text floating), (heart particles:1.3), (pink atmosphere)", desc: "息で曇ったガラスとハート。" },
      { label: "子宮紋・発光", val: "(womb symbol glowing softly through skin), (magic sigils), (pink-dimmed magical space), (glowing abdomen)", desc: "お腹の紋章が光る。" },
      { label: "粘液・融合", val: "(wet mucus fuses with her body), (slime coating skin), (oily sheen), (translucent slime), (dripping)", desc: "粘液と肌の一体化。" },
      { label: "うめきハード・ハート乱舞", val: "(heart particles:1.3), (floating pink hearts around her:1.3), (moaning heart symbols:1.2), (moaning with hearts:1.2), (background glowing with heart effects:1.2)", desc: "空間をハートで埋め尽くす。" },
      { label: "液体まみれ・ドロドロ", val: "(messy body), (sweat), (saliva), (cum on body), (bukkake), (sticky), (wet skin), (glistening skin)", desc: "全身を汚す。" },
      { label: "大量射精・中出し", val: "(semen gushing deep inside her), (crotch visibly overflowing), (fluid streaking down her trembling thighs), (creampie), (messy)", desc: "溢れ出る量。" },
      { label: "断面図・内部透視", val: "(cross section), (x-ray), (internal view), (cervix), (womb), (cum inside), (cutaway)", desc: "内部構造の描写。" },
      { label: "発情・ヒート", val: "(heat), (steam), (heavy blush), (panties aside), (fingering), (masturbation), (exhaling)", desc: "ムラムラした状態。" },
      { label: "精液膨張・腹ボテ", val: "(stomach bulge), (cum inflation), (distended belly), (full), (pregnant pose), (navel press)", desc: "お腹の膨らみ。" }
    ],

    // 🪟 硝子・密着 (Glass & Press)
    "🪟 硝子・密着 (Glass & Press)": [
      { label: "ガラス押し付け・背面", val: "(viewed from the front through fogged glass panel), (girl in doggystyle position), (breasts pressed and flattened against the glass), (nipples clearly visible through pressure), (moisture trails on glass), (steam)", desc: "曇りガラス越しに胸が押し付けられる。" },
      { label: "顔面プレス", val: "(face pressed against glass), (cheeks flattened), (open mouth), (saliva spreading on glass), (foggy glass), (distorted face)", desc: "顔がガラスにムギュっと。" },
      { label: "ガラス越しバック", val: "(from behind glass), (doggystyle), (male partner behind), (fully inserted), (hands on glass), (sweat condensation), (privacy glass)", desc: "ガラスの向こうでの営み。" },
      { label: "鏡越し・対面", val: "(looking in mirror), (reflection), (sex in front of mirror), (watching herself), (embarrassed), (steam)", desc: "鏡を使ったプレイ。" }
    ],

    // 4. ストーリー
    "🕰️ R-18 ストーリー・前後 (Time & Sequence)": [
      { label: "スライムプール拘束", val: "(trapped in a pool of shimmering slime), (bird's-eye view), (legs spread wide), (unable to move), (sinking)", desc: "スライムの海に沈む。" },
      { label: "脱衣・恥じらい (Before)", val: "(undressing), (clothes half off), (panties down), (covering body), (shy), (blushing), (looking away), (reluctant), (waiting on bed)", desc: "行為前の緊張感。" },
      { label: "シャワー・準備 (Before)", val: "(showering), (bathroom), (naked), (wet hair), (steam), (washing body), (soap), (anticipation)", desc: "体を清める。" },
      { label: "焦らし・寸止め (Teasing)", val: "(teasing), (denial), (hovering), (begging), (wanting it), (impatience), (legs spread), (fingering)", desc: "高まる期待。" },
      { label: "事後・余韻 (After)", val: "(after sex), (messy hair), (lying on bed), (exhausted), (heavy breathing), (cum on sheets), (disheveled), (peaceful face), (cuddle)", desc: "行為後の賢者タイム。" },
      { label: "朝チュン (Morning)", val: "(morning after), (waking up), (naked in bed), (messy room), (sunlight), (hickey), (memory of last night), (kissing)", desc: "翌朝の風景。" }
    ],

    // 5. 玩具
    "🧸 R-18 玩具・責め (Toys & Torture)": [
      { label: "口内責め・侵入", val: "(tentacles invade deep within her mouth), (mouth gaping), (tongue extended), (throat fucking), (saliva splattering), (choking)", desc: "口の中を蹂躙。" },
      { label: "触手搾乳・愛撫", val: "(tentacle milking), (breast fondling), (nipple stimulation), (lactation), (squeezing breasts)", desc: "胸への集中攻撃。" },
      { label: "バイブ・ローター", val: "(sex toys), (vibrator), (dildo), (pink rotor), (holding toy), (masturbation), (pleasure), (buzzing)", desc: "自慰や責めに。" },
      { label: "浣腸・アナル責め", val: "(enema), (enema kit), (anal play), (plugged), (butt plug), (anal beads), (bent over), (shaking)", desc: "背徳的なプレイ。" },
      { label: "拘束具・猿轡", val: "(ball gag), (handcuffs), (rope), (shibari), (collar), (leash), (bound arms), (drooling), (muffled scream)", desc: "自由を奪う。" },
      { label: "医療プレイ・診察台", val: "(gynecological chair), (stirrups), (legs spread), (speculum), (medical exam), (embarrassed), (doctor and patient)", desc: "医療的な恥辱。" },
      { label: "スライム風呂・ローション", val: "(slime bath), (lotion), (viscous liquid), (slippery), (trapped), (massage), (nurunuru)", desc: "ヌルヌルの感触。" }
    ],

    // 6. H-ロケーション
    "🏩 H-ロケーション": [
      { label: "ラブホ・鏡張り", val: "(love hotel), (mirror chair), (glass wall), (pink lighting), (erotic atmosphere), (bed), (condom wrapper), (neon signs)", links: ["Basic R-18"] },
      { label: "マジックミラー号", val: "(magic mirror truck), (vehicle interior), (city street outside window), (exposed to public), (voyeurism), (passing pedestrians), (crowd outside)", links: ["Basic R-18"] },
      { label: "公衆トイレ", val: "(public toilet stall), (cramped), (sitting on toilet), (pants down), (graffiti), (dirty tiles), (secret sex), (flushing sound)", links: ["Basic R-18"] },
      { label: "混浴露天風呂", val: "(mixed bath), (onsen), (steam), (naked), (peeking), (outdoor sex), (rock bath), (night), (wet body), (blushing)", links: ["Basic R-18"] },
      { label: "保健室のベッド", val: "(school infirmary), (curtain closed), (lying on bed), (nurse play), (after school sex), (creaking bed), (medicine cabinet)", links: ["Basic R-18"] },
      { label: "更衣室・盗撮", val: "(locker room), (changing clothes), (half naked), (hidden camera angle), (voyeurism), (gym clothes), (school swimsuit)", links: ["Basic R-18"] }
    ],
    // 7. 学園
    "🏫 学園・背徳": [
      { label: "体育倉庫", val: "(gym storage room), (sweat), (sportswear), (bloomers), (ball cart), (dusty), (after school), (mat)", links: ["Basic R-18"] },
      { label: "放課後の教室", val: "(classroom), (sunset), (on desk), (skirt lifted), (messy clothes), (blackboard), (watching door), (secret relationship)", links: ["Basic R-18"] },
      { label: "指導室・土下座", val: "(teacher office), (scolding), (kneeling), (looking up), (submission), (desk), (pleading), (punishment)", links: ["Basic R-18"] },
      { label: "プール・夜", val: "(school pool), (night), (moonlight), (wet swimsuit), (floating), (sneaking in), (water reflection)", links: ["Basic R-18"] },
      { label: "図書室・静寂", val: "(library), (bookshelves), (quiet), (covering mouth), (secret sex), (skirt lifted), (looking around)", links: ["Basic R-18"] }
    ],
    // 8. 生活
    "🏠 生活・密着": [
      { label: "裸エプロン", val: "(naked apron), (kitchen), (cooking), (from behind), (messy hair), (apron only), (side breast), (domestic)", links: ["Basic R-18"] },
      { label: "ソファーで密着", val: "(living room), (sofa), (cuddling), (legs wrapped), (tv light), (relaxing), (missionary), (intimate)", links: ["Basic R-18"] },
      { label: "寝起きドッキリ", val: "(bedroom), (morning), (straddling), (waking up), (pajamas), (messy hair), (morning wood), (surprise)", links: ["Basic R-18"] },
      { label: "一緒にお風呂", val: "(bathroom), (bathtub), (washing body), (bubbles), (steam), (facing each other), (wet skin), (shampoo)", links: ["Basic R-18"] },
      { label: "玄関で待ち伏せ", val: "(entrance hall), (welcome home), (hugging), (standing sex), (still in shoes), (impatience), (kissing)", links: ["Basic R-18"] }
    ],
    // 9. 乱交
    "👯 乱交・複数": [
      { label: "おじさん・醜男", val: "(ugly bastard), (fat man), (sweaty), (grinning), (ntr), (corruption), (forced), (contrast)", links: ["Basic R-18"] },
      { label: "輪姦・回し", val: "(gangbang), (multiple boys), (surrounded), (bukkake), (messy body), (white fluids), (ahegao), (mind break)", links: ["Basic R-18"] },
      { label: "ダブル貫通", val: "(double penetration), (dp), (two penises), (vaginal and anal), (stretching), (agony/pleasure), (cross section), (full)", links: ["Basic R-18"] },
      { label: "サンドイッチ", val: "(spitroast), (double blowjob), (face fuck), (anal and oral), (messy face), (drooling), (hardcore)", links: ["Basic R-18"] },
      { label: "異種姦パーティ", val: "(monster gangbang), (orcs), (goblins), (slime), (tentacles), (breeding), (defeat), (messy)", links: ["Basic R-18"] }
    ],
    // 10. 陵辱・ハード
    "😈 陵辱・ハード": [
      { label: "NSFW挿入 (激)", val: "(rape), (vaginal penetration with thick penis)", desc: "激しい挿入" },
      { label: "NSFW指挿入 (激)", val: "(rape), (vaginal penetration with thick finger)", desc: "激しい指入れ" },
      { label: "満員電車・痴漢", val: "(crowded train), (chikan), (groping), (molestation), (surrounded by men), (blushing), (trying not to voice), (public transport), (sweat)", links: ["Basic R-18"] },
      { label: "肉便器・公衆", val: "(public use), (cum dump), (messy body), (ahegao), (writing on body), (leash), (toilet), (submissive), (used)", links: ["Basic R-18"] },
      { label: "敗北・オーク", val: "(defeated), (lying on ground), (torn clothes), (crying), (orc looming), (goblin), (messy hair), (despair), (battlefield)", links: ["Basic R-18"] },
      { label: "眠姦・睡眠", val: "(sleeping), (asleep), (molestation), (unaware), (bed), (night), (pajamas), (touching), (prank)", links: ["Basic R-18"] },
      { label: "強制・レイプ", val: "(rape), (forced), (struggling), (pinned down), (tears), (fear), (ripped clothes), (hand over mouth)", links: ["Basic R-18"] }
    ],
    // 11. 催眠
    "💊 催眠・変容": [
      { label: "時間停止", val: "(time stop), (frozen people background), (pause button), (powerless), (unaware), (monochrome background), (colorful character), (statue)", links: ["Basic R-18"] },
      { label: "催眠・洗脳", val: "(hypnotized), (empty eyes), (swirl eyes), (mind control), (drooling), (obeying orders), (dull eyes), (slave), (trance)", links: ["Basic R-18"] },
      { label: "常識改変・露出", val: "(walking nude), (public), (smiling), (unaware), (hypnosis), (common sense alteration), (happy), (crowd)", links: ["Basic R-18"] },
      { label: "石化進行", val: "(petrification), (turning to stone), (grey skin), (statue), (immobile), (half stone), (fear), (partial)", links: ["Basic R-18"] },
      { label: "寄生・苗床", val: "(stomach bulge), (pregnant), (impregnation), (alien), (parasite), (eggs), (x-ray), (birthing), (breeder)", links: ["Basic R-18"] }
    ],
    // 12. フェチ
    "🦶 フェチ・奉仕": [
      { label: "足舐め・踏み", val: "(footjob), (trampling), (licking feet), (soles), (toes), (looking down), (scorn), (dominance)", links: ["Basic R-18"] },
      { label: "顔面騎乗", val: "(facesitting), (suffocation), (thighs), (pussy view), (ass view), (smothering), (cant breathe)", links: ["Basic R-18"] },
      { label: "脇コキ・匂い", val: "(armpit sex), (sniffing), (sweaty armpits), (arms up), (hair), (pheromones), (titjob)", links: ["Basic R-18"] },
      { label: "トイレ・放尿", val: "(peeing), (watersports), (toilet), (skirt lifted), (puddle), (relief), (embarrassed)", links: ["Basic R-18"] },
      { label: "ご奉仕・手コキ", val: "(handjob), (service), (kneeling), (looking at viewer), (tongue out), (saliva trail), (upward glance)", links: ["Basic R-18"] }
    ],
    // 13. 拘束
    "⛓️ 拘束・責め": [
      { label: "緊縛・吊り", val: "(shibari), (rope bondage), (suspension), (hanging), (bound wrists), (bound legs), (rope marks), (kinbaku), (struggling)", links: ["Basic R-18"] },
      { label: "拘束椅子・機械", val: "(bondage chair), (restrained), (spread legs), (sex machine), (dildo machine), (vibrator), (helpless), (mechanical arms)", links: ["Basic R-18"] },
      { label: "三角木馬", val: "(wooden horse), (torture device), (straddling), (painful expression), (rope), (dungeon), (weights)", links: ["Basic R-18"] },
      { label: "壁埋まり", val: "(stuck in wall), (glory hole), (ass exposed), (stuck from waist down), (helpless), (struggling), (public use)", links: ["Basic R-18"] },
      { label: "目隠し・猿轡", val: "(blindfold), (gag), (ball gag), (drooling), (sensory deprivation), (bound arms), (muffled screams)", links: ["Basic R-18"] }
    ]
  };

  const DICT = {
    // 既存
    "maid outfit": "メイド服", "holding serving tray": "トレイを持つ", 
    
    // ★追加: セットアイテムの翻訳
    "holding stethoscope": "聴診器を持つ", "clipboard under arm": "クリップボードを挟む", "holding syringe": "注射器を持つ",
    "medical tools": "医療器具", "pen in pocket": "ポケットのペン", "holding frilled parasol": "フリルの日傘を持つ",
    "lace headdress": "レースのヘッドドレス", "cross necklace": "十字架のネックレス", "holding gothic doll": "ゴシックドールを抱く",
    "rose decoration": "薔薇の装飾", "holding smartphone": "スマホを持つ", "drinking bubble tea": "タピオカを飲む",
    "headphones around neck": "首掛けヘッドフォン", "stylish backpack": "おしゃれなリュック", "mask": "マスク",
    "holding map": "地図を持つ", "compass": "コンパス", "lantern": "ランタン", "potion flask on belt": "腰にポーション",
    "leather backpack": "革のリュック", "dagger": "短剣", "holding magic staff": "魔法の杖を持つ", "grimoire": "魔導書",
    "potion bottles": "ポーション瓶", "crystal ball": "水晶玉", "magic components": "魔法の触媒", "holding microphone": "マイクを持つ",
    "glow stick": "サイリウム", "bouquet": "花束", "fan letter": "ファンレター", "towel": "タオル", "holding paintbrush": "筆を持つ",
    "palette": "パレット", "easel": "イーゼル", "apron with paint stains": "絵の具で汚れたエプロン", "sketchbook": "スケッチブック",
    "pencils": "鉛筆", "open book": "開いた本", "stack of books": "積まれた本", "glasses": "眼鏡", "pen": "ペン",
    "notebook": "ノート", "library card": "図書カード",

    // その他追加
    "trembling in climax": "絶頂で震える", "rough breathing": "荒い呼吸", "ecstatic sighs": "恍惚の溜息",
    "wet mucus fuses with her body": "粘液が体と融合", "slime coating skin": "スライムが肌を覆う", "oily sheen": "油膜の光沢",
    "translucent slime": "半透明のスライム", "clothes dissolving": "服が溶ける",
    "fragments of refracted floating light": "屈折して浮遊する光の破片", "trapped in a pool of shimmering slime": "煌めくスライムプールに囚われる",
    "mouth gaping": "口を大きく開ける", "throat fucking": "イラマチオ", "tentacle milking": "触手搾乳", "breast fondling": "胸愛撫",
    "hypnotic heart eyes": "催眠ハート目", "pink rings fading into pupils": "瞳に溶けるピンクの輪", "vacant smile": "虚ろな笑み",
    "euphoric tears": "歓喜の涙", "semen gushing deep inside her": "奥深くに注がれる精液",
    "crotch visibly overflowing": "股間から溢れ出る", "fluid streaking down her trembling thighs": "震える太ももを伝う愛液",
    "foggy breath trails": "白い吐息の跡", "smeared heart-shaped breath patches": "曇ったガラスにハート",
    "womb symbol glowing softly through skin": "肌に浮かぶ子宮紋", "viewed from the front through fogged glass panel": "曇りガラス越し",
    "breasts pressed and flattened against the glass": "ガラスに押し付けられた胸", "nipples clearly visible through pressure": "圧迫された乳首",
    "moisture trails on glass": "ガラスの湿気", "face pressed against glass": "顔面プレス", "steam": "湯気",
    "privacy glass": "すりガラス", "looking in mirror": "鏡を見る", "penetration clearly visible": "結合部がはっきり見える",
    "connection point": "結合部", "inserting": "挿入中", "glans inside": "中にある亀頭", "hips moving rhythmically": "リズミカルに動く腰",
    "fully thrusting": "根元まで突き入れる", "fast motion": "高速ピストン", "afterimage of hips": "腰の残像", "piston motion": "ピストン運動",
    "shaking hips": "震える腰", "his hands gripping her hips firmly": "腰を強く掴む", "keeping her pressed": "押し付け続ける",
    "tight grip": "強いグリップ", "skin indentation": "肌の食い込み", "no escape": "逃げ場なし", "semen dripping": "精液が垂れる",
    "juicy": "ジューシー", "wet sounds": "水音", "fully thrusting from behind": "背後から激しく突く", "demon lord bedroom": "魔王の寝室",
    "luxurious dark bed": "豪華な闇のベッド", "canopy": "天蓋", "harem": "ハーレム", "room": "部屋(自室)", "breasts bouncing": "胸揺れ",
    "grabbing hips": "腰を掴む", "climax": "絶頂", "hardcore": "ハードコア", "vaginal sex": "膣セックス", "orgasm": "オーガズム",
    "girl trembling in climax": "絶頂で震える少女", "shaking": "震え", "arched back": "背中を反らす", "toes curling": "足の指が縮こまる",
    "spasms": "痙攣", "ecstatic sighs": "恍惚の溜息", "trance": "トランス状態", "half-closed eyes": "半目", "pleasure": "快楽",
    "erotic moan text floating": "浮かぶエッチな喘ぎ文字", "heart particles": "ハートの粒子", "idol-style outfit": "アイドル衣装",
    "white and pastel blue frilly dress": "白と水色のフリルドレス", "feather embroidery": "羽の刺繍", "fluffy sleeves": "ふわふわ袖",
    "short layered skirt": "短い段フリルスカート", "down feather texture": "綿毛の質感", "translucent ribbons": "半透明のリボン",
    "soft feather hairclip": "羽の髪飾り", "floating feathers": "舞い散る羽根", "white feathers": "白い羽", "dreamy": "夢のような",
    "bokeh heart shapes": "ハート型のボケ", "pink atmosphere": "ピンクの雰囲気", "romantic light": "ロマンチックな光", "glowing particles": "光る粒子",
    "snowflake decorations": "雪の結晶の飾り", "winter theme": "冬のテーマ", "glowing snowflakes": "光る雪の結晶", "cold breath": "白い息",
    "magical atmosphere": "魔法の雰囲気", "faint sparkles": "ほのかな輝き", "light particles": "光の粒子", "shimmering air": "揺らめく空気",
    "magical dust": "魔法の粉", "fantasy setting": "ファンタジー設定", "polaroid photo developing mid-air": "空中に浮かぶポラロイド",
    "floating photos": "浮遊する写真", "memories": "思い出", "nostalgic": "ノスタルジック", "holding a plush doll": "ぬいぐるみを抱く",
    "hugging plushie": "ハグする", "stuffed animal": "ぬいぐるみ", "lovingly": "愛おしそうに", "chest press": "胸に押し付ける",
    "white head Shima-enaga bushtit plush": "シマエナガのぬいぐるみ", "tiny beady eyes": "つぶらな瞳", "soft round shape": "丸いフォルム",
    "bird doll": "鳥の人形", "wing shaped hair accessory": "翼型の髪飾り", "white hair ornament": "白い髪飾り"
  };

  function createSubAccordion(title, items, isSecret) { 
    const details = document.createElement("details"); details.className = "qp-sub-acc"; 
    const summary = document.createElement("summary"); summary.textContent = title; 
    if (isSecret) summary.style.color = "#d00";
    details.appendChild(summary); 
    const content = document.createElement("div"); content.className = "qp-content-grid"; 
    items.forEach(item => { 
      const label = document.createElement("label"); const cb = document.createElement("input"); 
      cb.type = "checkbox"; cb.dataset.val = item.val || item.en; 
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
          Object.entries(SECRET_PACK_DATA).forEach(([k,v]) => { sharedContent.appendChild(createSubAccordion(k, v, true)); });
        }
      }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

