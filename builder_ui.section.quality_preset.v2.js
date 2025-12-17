(function(){
  "use strict";
  const VERSION = 2; // シチュエーション & テーマパック (戦闘拡張版)
  const KEY = "quality_preset";

  // ==============================================================================
  // 🎬 1. シチュエーション (Situations) - 場所・環境 (前回から維持)
  // ==============================================================================
  const SITUATION_DATA = {
    "📍 スポット・お店": [
      { label: "アイドルステージ", val: "(idol focus), (live concert), (stage lights), (sparkles), (soft ambient stage illumination), (cinematic glow), (performance)", links: ["シネマティック"] },
      { label: "おしゃれカフェ", val: "(cozy modern café), (indoor), (window seat), (coffee), (sweets), (string lights), (decorations), (bokeh)", links: ["ボケ"] },
      { label: "バー・パブ", val: "(bar counter), (bottles on shelves), (dim lighting), (bartender), (cocktail), (glass), (jazz bar vibes), (adult atmosphere)", links: ["シネマティック"] },
      { label: "コンビニ", val: "(convenience store), (bright fluorescent light), (shelves of snacks), (refrigerator), (night shift), (modern japan)" },
      { label: "スーパーマーケット", val: "(supermarket), (grocery shopping), (aisle), (shopping basket), (fruit and vegetables), (bright lighting)" },
      { label: "図書館", val: "(library), (bookshelves), (quiet atmosphere), (reading), (sunlight through window), (dust particles), (studying)" },
      { label: "病院・病室", val: "(hospital room), (white bed), (medical equipment), (clean atmosphere), (sterile), (curtain), (window)" },
      { label: "デートスポット", val: "(date night), (romantic atmosphere), (city lights), (holding hands), (blush), (fashionable clothes), (restaurant), (dinner)" }
    ],
    "🌌 SF・宇宙": [
      { label: "宇宙船コックピット", val: "(spaceship cockpit), (holographic interface), (stars through window), (futuristic controls), (sci-fi interior), (pilot seat), (glowing buttons)", links: ["サイバー・ネオン"] },
      { label: "宇宙ステーション", val: "(space station corridor), (white panels), (artificial gravity), (view of earth), (clean aesthetic), (futuristic), (zero gravity hair)" },
      { label: "サイバーパンク都市", val: "(cyberpunk city), (neon rain), (hologram billboards), (flying cars), (wet street), (night), (high tech low life)", links: ["サイバー・ネオン"] },
      { label: "アンドロイド研究所", val: "(cybernetics lab), (robot parts), (cables), (server racks), (blue light), (data screen), (mechanical arm), (repairing)" },
      { label: "異星の惑星", val: "(alien planet), (strange plants), (two moons), (purple sky), (rocky terrain), (unknown civilization), (sci-fi landscape)", links: ["ファンタジー"] }
    ],
    "⛩️ 和風・歴史": [
      { label: "神社・鳥居", val: "(shinto shrine), (red torii gate), (stone steps), (sacred atmosphere), (paper lantern), (autumn leaves), (traditional japan)" },
      { label: "縁側・日本庭園", val: "(wooden engawa), (japanese garden), (koi pond), (bamboo pipe), (relaxing), (drinking tea), (sunny afternoon), (peaceful)" },
      { label: "夏祭り・花火", val: "(summer festival), (fireworks in sky), (yukata), (stalls), (paper lanterns), (crowd), (night), (festive atmosphere)", links: ["夜"] },
      { label: "竹林", val: "(bamboo forest), (sunlight filtering through bamboo), (green atmosphere), (pathway), (nature), (quiet), (misty)" },
      { label: "畳の部屋", val: "(tatami room), (shoji screen), (hanging scroll), (flower arrangement), (sunlight patterns), (traditional interior), (seiza)" },
      { label: "戦場・合戦跡", val: "(ancient battlefield), (broken arrows), (smoke), (sunset), (flags), (dramatic atmosphere), (historical)" }
    ],
    "🏫 学園・青春": [
      { label: "教室・授業中", val: "(classroom), (school desks), (chalkboard), (sunlight through window), (friends), (school uniform), (anime school life)" },
      { label: "学校の廊下", val: "(school hallway), (lockers), (cleaning time), (sunlight), (after school), (perspective), (shiny floor)" },
      { label: "屋上", val: "(school rooftop), (fence), (blue sky), (clouds), (wind blowing hair), (cityscape in background), (secret base), (lunch break)", links: ["青空", "風"] },
      { label: "体育館", val: "(school gymnasium), (basketball hoop), (wooden floor), (indoor shoes), (sports equipment), (large windows), (echoing)" },
      { label: "保健室", val: "(school infirmary), (white bed), (curtain), (medicine cabinet), (quiet), (resting), (afternoon sun)" },
      { label: "通学路", val: "(street to school), (cherry blossoms falling), (morning sunlight), (telephone poles), (residential area), (walking), (chatting)" },
      { label: "部室", val: "(club room), (messy desk), (hobby items), (after school), (sunset glow), (friends gathering), (cozy)" }
    ],
    "🏠 家・日常": [
      { label: "リビング", val: "(living room), (sofa), (television), (carpet), (relaxing), (cozy atmosphere), (family time), (indoor plants)" },
      { label: "キッチン", val: "(modern kitchen), (cooking), (apron), (vegetables), (knife), (frying pan), (steam), (morning breakfast)" },
      { label: "寝室・ベッド", val: "(bedroom), (messy bed), (white sheets), (pillow), (morning light), (pajamas), (stretching), (private space)" },
      { label: "バスルーム", val: "(bathroom), (bathtub), (steam), (bubbles), (wet skin), (tiles), (mirror), (shampoo)", links: ["濡れた肌"] },
      { label: "和室", val: "(japanese style room), (tatami mats), (shoji screen), (kotatsu), (tea cup), (cushion), (calm atmosphere)" },
      { label: "玄関", val: "(entrance hall), (shoes), (umbrella stand), (welcome home), (door open), (leaving home)" },
      { label: "ベランダ", val: "(apartment balcony), (laundry hanging), (potted plants), (city view), (railing), (breeze), (relaxing)" }
    ],
    "🏰 ファンタジー・RPG": [
      { label: "ファンタジーの森", val: "(fantasy forest), (glowing plants), (magic particles), (ancient trees), (mysterious), (fairy tale), (lush vegetation)", links: ["ファンタジー"] },
      { label: "王宮・城", val: "(royal palace), (throne room), (chandelier), (red carpet), (marble pillars), (luxurious), (gold decorations), (king and queen)" },
      { label: "ダンジョン", val: "(stone dungeon), (torch light), (dark atmosphere), (cobwebs), (stone walls), (treasure chest), (adventure), (danger)" },
      { label: "冒険者ギルド", val: "(fantasy tavern), (wooden tables), (beer mugs), (lively atmosphere), (adventurers), (candle light), (fireplace), (quest board)" },
      { label: "魔法研究所", val: "(alchemist lab), (potions), (scrolls), (books), (magic circle), (glowing crystals), (cluttered), (mysterious)" },
      { label: "天空の城", val: "(floating island), (castle in the sky), (clouds), (waterfall into void), (fantasy landscape), (dreamy), (epic scale)", links: ["広角"] },
      { label: "廃墟・遺跡", val: "(ancient ruins), (overgrown with moss), (broken pillars), (stone statues), (mysterious), (lost civilization), (sunlight filtering)" }
    ],
    "🏙️ 都会・ストリート": [
      { label: "繁華街", val: "(busy city street), (scramble crossing), (crowd), (skyscrapers), (billboards), (modern city), (daytime), (energetic)" },
      { label: "路地裏", val: "(back alley), (narrow street), (pipes), (vending machine), (trash cans), (stray cat), (shadows), (gritty)" },
      { label: "駅のホーム", val: "(train station platform), (train arriving), (commuters), (electric overhead lines), (sunset), (waiting), (travel)" },
      { label: "夜のネオン街", val: "(cyberpunk city), (neon signs), (rainy street), (reflections), (night), (futuristic), (vibrant colors)", links: ["サイバー・ネオン"] },
      { label: "公園", val: "(public park), (bench), (trees), (fountain), (pigeons), (relaxing), (peaceful), (lunch break)" },
      { label: "ビルの屋上", val: "(skyscraper rooftop), (night city view), (railing), (windy), (city lights), (lonely), (dramatic)" }
    ],
    "🌺 自然・絶景": [
      { label: "花畑", val: "(flower field), (sunflowers), (blue sky), (wind), (petals scattered), (bright colors), (summer), (nature)" },
      { label: "雪山", val: "(snowy mountain), (winter landscape), (snowing), (white world), (cold atmosphere), (pine trees), (footprints)" },
      { label: "ビーチ", val: "(tropical beach), (white sand), (blue ocean), (emerald water), (palm trees), (cumulus clouds), (summer vacation)", links: ["夏・海"] },
      { label: "洞窟", val: "(underground cave), (stalactites), (underground lake), (glowing crystals), (dark and cool), (echo), (mystery)" },
      { label: "夕暮れの海", val: "(sunset beach), (orange sky), (reflection on water), (waves), (silhouette), (romantic), (sentimental)", links: ["夕暮れ"] },
      { label: "星空", val: "(starry sky), (milky way), (shooting star), (night landscape), (silhouette of mountains), (beautiful), (universe)" }
    ],
    "👻 ホラー・怪奇": [
      { label: "廃病院", val: "(abandoned hospital), (broken windows), (debris), (peeling paint), (wheelchair), (creepy corridor), (blood stains), (dark atmosphere)", links: ["ホラー"] },
      { label: "不気味な洋館", val: "(haunted mansion), (cobwebs), (dusty), (dim candle light), (old portraits), (thunderstorm outside), (gothic interior)" },
      { label: "深夜の墓地", val: "(graveyard), (tombstones), (fog), (full moon), (will-o'-the-wisp), (dead trees), (blue ambient light), (spooky)" },
      { label: "儀式の間", val: "(ritual chamber), (magic circle), (red candles), (skulls), (blood sacrifice), (ominous atmosphere), (stone altar)" },
      { label: "廃校・深夜の学校", val: "(abandoned school), (broken desks), (shattered glass), (dark corridor), (moonlight through window), (eerie silence), (cursed)" },
      { label: "地下牢・拷問部屋", val: "(dungeon cell), (chains), (iron bars), (stone walls), (cold atmosphere), (torture devices), (shadows)" },
      { label: "異界・裏世界", val: "(otherworld), (red sky), (distorted reality), (floating rocks), (blood ocean), (surreal), (nightmare)", links: ["ファンタジー"] },
      { label: "樹海・呪われた森", val: "(cursed forest), (twisted trees), (dense fog), (hanging ropes), (darkness), (lost path), (ghostly figures)", links: ["森"] }
    ],
    "🌅 朝": [
      { label: "爽やかな朝", val: "(morning light:1.3), (soft sunlight), (light leaks), (low contrast), (soft shadows), (fresh atmosphere), (depth of field), (white bed sheets)", links: ["ソフトライティング"] },
      { label: "木漏れ日", val: "(sunlight through leaves), (dappled sunlight), (tyndall effect), (nature focus), (soft focus), (forest background), (peaceful)", links: ["ボリュメトリック"] },
      { label: "窓辺の光", val: "(sunlight through window), (god rays), (dust particles), (indoor), (backlighting), (soft ambient light), (warm white balance)", links: ["God Rays"] },
      { label: "朝のカフェ", val: "(morning light:1.3), (cozy cafe), (sunlight through window), (steam rising from coffee), (fresh atmosphere), (white tablecloth), (soft focus), (peaceful morning)", links: ["座りポーズ"] },
      { label: "目覚めのベッド", val: "(morning light), (bedroom), (white bed sheets), (messy hair), (stretching), (light leaks), (soft shadows), (intimate), (pov)", links: ["伸びポーズ"] },
      { label: "登校中", val: "(morning sunlight), (street to school), (cherry blossoms falling), (soft breeze), (school uniform), (lens flare), (youthful atmosphere), (clear sky)", links: ["立ちポーズ"] }
    ],
    "☀️ 昼": [
      { label: "快晴・青空", val: "(intense sunlight), (blue sky), (cumulus clouds), (vibrant colors), (sharp focus), (high contrast), (dynamic shadows), (summer vibes)", links: ["夏・海", "広角"] },
      { label: "日常・自然光", val: "(natural lighting), (daylight), (neutral colors), (realistic shadows), (clear sky), (casual atmosphere), (detailed background)" },
      { label: "真夏の日差し", val: "(harsh sunlight), (strong shadows), (lens flare), (heat haze), (saturated colors), (shimmering air), (sweat)", links: ["濡れた肌"] },
      { label: "昼のカフェ", val: "(daylight), (modern cafe), (bustling atmosphere), (bright interior), (green plants), (sharp focus), (vibrant colors), (lunch time), (clear glass window)", links: ["座りポーズ"] },
      { label: "教室の休み時間", val: "(daylight), (classroom), (sunlight pouring in), (blue sky outside window), (desks and chairs), (chalkboard), (friends chatting), (anime school life)", links: ["日常ポーズ"] },
      { label: "真夏のビーチ", val: "(intense sunlight), (tropical beach), (blue ocean), (white sand), (cumulus clouds), (high contrast), (heat haze), (wet skin), (summer vibes)", links: ["濡れた肌"] },
      { label: "ショッピング街", val: "(city street), (shopping district), (clear blue sky), (fashionable shops), (crowd), (dynamic shadows), (casual date), (vibrant)", links: ["立ちポーズ"] }
    ],
    "🌇 夕方": [
      { label: "マジックアワー", val: "(golden hour:1.4), (sunset), (warm lighting), (orange and purple sky), (long shadows), (sentimental atmosphere), (cinematic lighting)", links: ["シネマティック"] },
      { label: "逆光・シルエット", val: "(strong backlighting), (rim light), (silhouette), (lens flare), (sun behind character), (glowing outline), (dramatic contrast)", links: ["リムライト"] },
      { label: "黄昏", val: "(twilight), (blue hour), (fading light), (street lights turning on), (nostalgic), (soft bokeh), (melancholic)", links: ["ボケ"] },
      { label: "夕暮れのカフェ", val: "(golden hour:1.3), (cafe terrace), (warm orange lighting), (long shadows), (sunset glow), (relaxing after work), (nostalgic atmosphere), (coffee cup)", links: ["座りポーズ"] },
      { label: "放課後の教室", val: "(sunset), (orange sky through window), (empty classroom), (silhouette against window), (sentimental), (dust particles), (magic hour), (shadows stretching)", links: ["黄昏"] },
      { label: "帰り道", val: "(twilight), (residential street), (telephone poles), (street lights turning on), (fading light), (emotional), (backlighting), (rim light)", links: ["日常ポーズ"] }
    ],
    "🌃 夜": [
      { label: "都会のネオン", val: "(night city), (neon lights), (colorful bokeh), (wet street reflections), (cyberpunk vibes), (high contrast), (cinematic lighting), (dark shadows)", links: ["サイバー・ネオン", "シネマティック"] },
      { label: "月明かり", val: "(moonlight), (full moon), (cold color palette), (blue tint), (rim light), (mysterious atmosphere), (soft glow), (dark ambient)", links: ["リムライト"] },
      { label: "暗闇とスポット", val: "(darkness), (spotlight), (chiaroscuro), (dramatic shadows), (mystery), (focus on face), (black background)", links: ["レイトレーシング"] },
      { label: "夜のカフェバー", val: "(night cafe), (dim lighting), (warm string lights), (candle light), (romantic atmosphere), (bokeh background), (reflection in window), (jazz bar vibes)", links: ["シネマティック"] },
      { label: "ネオン街", val: "(cyberpunk city), (neon signs), (rainy street), (reflections), (night), (futuristic), (vibrant colors)", links: ["サイバー・ネオン"] },
      { label: "月夜の寝室", val: "(midnight), (dark bedroom), (moonlight through window), (blue tint), (cold atmosphere), (lonely), (dim ambient light), (shadows)", links: ["寝ポーズ"] },
      { label: "夜景デート", val: "(observation deck), (city night view), (sparkling city lights), (bokeh), (couple atmosphere), (elegant), (dark sky), (stars)", links: ["キメポーズ"] }
    ],
    "💡 スタジオ・特殊": [
      { label: "スタジオ撮影", val: "(studio lighting), (professional photography), (perfect lighting), (neutral background), (softbox), (high definition), (clean visual)" },
      { label: "レンブラント", val: "(rembrandt lighting), (dramatic shading), (triangle of light), (artistic lighting), (classic painting style), (rich shadows)" },
      { label: "映画的演出", val: "(cinematic lighting), (teal and orange), (anamorphic lens flare), (widescreen), (movie scene), (color grading), (dramatic atmosphere)", links: ["シネマティック"] }
    ],
    "🍃 季節・空気感": [
      { label: "幻想的", val: "(dreamlike atmosphere), (soft focus), (faint sparkles), (floating feathers), (bokeh heart shapes), (pastel theme), (innocent)" },
      { label: "春・桜", val: "(spring season), (cherry blossoms), (pink atmosphere), (soft sunlight), (warm breeze)" },
      { label: "夏・海", val: "(summer season), (intense sunlight), (blue sky), (heat haze), (vibrant colors), (high contrast)" },
      { label: "秋・紅葉", val: "(autumn season), (fallen leaves), (orange and red theme), (warm lighting), (nostalgic atmosphere)" },
      { label: "冬・雪", val: "(winter season), (snowing), (snowy landscape), (cold atmosphere), (breath steam), (pale colors), (overcast)" },
      { label: "夕暮れ", val: "(sunset), (golden hour), (orange sky), (dramatic shadows), (lens flare), (sentimental), (rim light)" },
      { label: "深夜の静寂", val: "(midnight), (starry sky), (moonlight), (darkness), (quiet atmosphere), (blue tint), (cinematic lighting)" },
      { label: "雨の情緒", val: "(raining), (wet ground), (reflections), (gloomy sky), (cinematic lighting), (atmospheric perspective)" }
    ]
  };

  // ==============================================================================
  // 📦 2. テーマ別パック (Theme Packs) - 大幅拡張
  // ==============================================================================
  const PACK_DATA = {
    "⚔️ 剣戟・刀パック (Sword Battle)": [
      { label: "居合・抜刀", val: "(drawing katana), (iai stance), (hand on hilt), (sparkles), (cherry blossoms falling), (samurai style), (focused expression), (motion blur), (kimono or armor)", links: ["和風", "ダイナミックポーズ"] },
      { label: "二刀流・乱舞", val: "(dual wielding), (two swords), (spinning attack), (slashing effects), (dynamic action), (afterimage), (speed lines), (intense battle)", links: ["ダイナミックポーズ", "エフェクト"] },
      { label: "聖騎士の誓い", val: "(kneeling with sword), (sword planted in ground), (praying), (holy light), (knight armor), (cathedral background), (solemn), (god rays)", links: ["ファンタジー"] },
      { label: "大剣・一撃", val: "(holding giant sword), (heavy weapon), (swinging sword), (ground cracking), (debris flying), (power stance), (screaming), (impact frame)", links: ["アクション"] }
    ],
    "🔫 銃撃・射撃パック (Gun Action)": [
      { label: "二丁拳銃・乱射", val: "(dual guns), (firing both hands), (jumping sideways), (bullet time), (muzzle flash), (debris), (action movie shot), (flying cartridges)", links: ["アクション"] },
      { label: "スナイパー・狙撃", val: "(holding sniper rifle), (looking through scope), (lying prone), (rooftop), (cityscape in background), (one eye closed), (windy), (serious face)", links: ["都市"] },
      { label: "リロード・遮蔽物", val: "(reloading gun), (magazine in air), (hiding behind cover), (sweat), (intense battle), (bullets flying), (wall damage), (tactical gear)", links: ["アクション"] },
      { label: "制圧射撃", val: "(holding assault rifle), (firing stance), (muzzle flash), (shell casings), (aggressive expression), (warzone), (smoke and fire)", links: ["アクション"] }
    ],
    "🧙‍♀️ 魔法・召喚パック (Magic & Summon)": [
      { label: "爆裂魔法・炎", val: "(fire magic), (fireball in hand), (flames surrounding), (burning eyes), (floating hair), (intense heat), (explosion background), (casting spell)", links: ["エフェクト"] },
      { label: "召喚術・顕現", val: "(summoning ritual), (summoning circle on ground), (giant monster emerging), (holding grimoire), (chanting), (glowing runes), (mystical atmosphere)", links: ["ファンタジー"] },
      { label: "ヒーラー・癒やし", val: "(casting healing magic), (gentle light), (feathers falling), (praying hands), (angelic atmosphere), (soft focus), (warm colors)", links: ["ファンタジー"] }
    ],
    "👊 格闘・近接パック (Melee & Brawler)": [
      { label: "飛び蹴り", val: "(flying kick), (dynamic pose), (shoe sole focus), (impact effect), (shattered glass), (street fight), (high angle), (action lines)", links: ["ダイナミックポーズ"] },
      { label: "クロスカウンター", val: "(punching), (fist clash), (sweat flying), (intense face), (motion blur), (close up), (fighting stance), (knuckles)", links: ["アクション"] },
      { label: "気功・オーラ", val: "(martial arts stance), (glowing aura), (energy gathering), (power up), (floating rocks), (dragon effect), (intense eyes)", links: ["エフェクト"] }
    ],
    "🏹 特殊武器・その他 (Special Weapons)": [
      { label: "弓矢・必中", val: "(drawing bow), (energy arrow), (aiming at camera), (forest background), (elf style), (concentration), (wind blowing hair), (sharp eyes)", links: ["ファンタジー"] },
      { label: "大鎌・死神", val: "(holding scythe), (grim reaper style), (full moon), (dark aura), (floating), (gothic dress), (menacing), (black feathers)", links: ["ホラー"] },
      { label: "槍・突撃", val: "(holding spear), (thrusting pose), (charging forward), (speed lines), (army behind), (warrior scream), (battlefield)", links: ["アクション"] }
    ],
    "💼 職業・なりきりパック (Job & Cosplay)": [
      { label: "メイド・お給仕", val: "(maid outfit), (holding serving tray), (curtsy), (classic maid), (mansion interior), (elegant), (frills), (tea set)", links: ["立ちポーズ"] },
      { label: "ナース・診察", val: "(nurse uniform), (holding syringe), (clipboard), (hospital room), (white background), (clean atmosphere), (medical checkup)", links: ["病院"] },
      { label: "OL・オフィス", val: "(office lady), (business suit), (holding documents), (modern office), (desk work), (glasses), (smart look), (high rise building view)", links: ["眼鏡"] },
      { label: "ポリス・逮捕", val: "(police uniform), (holding handcuffs), (police hat), (arresting pose), (cool expression), (patrol car background), (justice)", links: ["キメポーズ"] },
      { label: "バニーガール・カジノ", val: "(bunny girl suit), (rabbit ears), (fishnet tights), (holding tray), (casino background), (roulette), (neon lights), (glamorous)", links: ["セクシー"] },
      { label: "巫女・神社", val: "(miko outfit), (holding broom), (shrine background), (sweeping leaves), (traditional japanese), (sacred atmosphere), (red hakama)", links: ["和風"] }
    ],
    "🎉 イベント・行事パック (Events)": [
      { label: "クリスマス・サンタ", val: "(santa costume), (christmas tree), (holding gift box), (snowy background), (lights and ornaments), (happy smile), (winter holiday)" },
      { label: "ハロウィン・魔女", val: "(witch costume), (holding pumpkin), (jack-o'-lantern), (bats), (purple and orange theme), (spooky castle background), (magic hat)" },
      { label: "ウェディング・花嫁", val: "(wedding dress), (holding bouquet), (church interior), (white veil), (stained glass), (happy tears), (marriage ceremony), (pure white)" },
      { label: "温泉旅行・浴衣", val: "(wearing yukata), (onsen), (steam), (open air bath), (wooden bucket), (relaxing), (flushed face), (night scenery)", links: ["和風"] }
    ],
    "🍽️ 食事・グルメパック (Food & Eating)": [
      { label: "ファストフード", val: "(eating hamburger), (holding burger with both hands), (fast food restaurant), (french fries), (cola), (happy eating face), (open mouth)", links: ["もぐもぐ"] },
      { label: "優雅なティータイム", val: "(afternoon tea), (holding tea cup), (cake stand), (garden terrace), (elegant dress), (sipping tea), (relaxing afternoon)", links: ["カフェ"] },
      { label: "居酒屋で乾杯", val: "(izakaya), (holding beer mug), (kanpai), (yakitori), (lively atmosphere), (drinking), (slightly drunk), (lanterns)", links: ["和風"] }
    ],
    "💕 デート・恋愛パック (Romance)": [
      { label: "水族館デート", val: "(aquarium date), (looking at fish), (blue ambient light), (reflection on glass), (romantic atmosphere), (walking together), (happy expression)", links: ["デートスポット"] },
      { label: "映画館デート", val: "(movie theater), (sitting next to each other), (eating popcorn), (dim lighting), (screen light reflecting on face), (intimate moment), (date night)", links: ["デートスポット"] },
      { label: "遊園地・観覧車", val: "(amusement park date), (ferris wheel in background), (holding crepe), (colorful lights), (happy smile), (vibrant atmosphere), (casual clothes)" },
      { label: "夜景・展望台", val: "(observation deck), (night city view), (sparkling city lights), (leaning on railing), (romantic mood), (couple atmosphere), (elegant)", links: ["夜"] },
      { label: "放課後デート", val: "(walking home together), (holding hands), (sunset glow), (school uniform), (blushing), (sentimental atmosphere), (residential street)", links: ["夕方"] }
    ],
    "🎤 アイドル・ステージパック (Idol)": [
      { label: "ライブ・クライマックス", val: "(live concert), (singing), (holding microphone), (sweat and sparkles), (joyful smile), (audience light sticks), (confetti), (stage lighting), (idol costume)", links: ["アイドル"] },
      { label: "ファンサ・ウインク", val: "(winking), (pointing at viewer), (finger heart), (cute pose), (idol smile), (close up), (bright background), (charming)", links: ["キメポーズ"] },
      { label: "楽屋・出番前", val: "(dressing room), (looking in mirror), (nervous expression), (makeup items), (backstage), (preparing), (idol outfit), (quiet moment)" }
    ],
    "👻 ホラーパック (Horror)": [
      { label: "追跡者からの逃走", val: "(running away:1.3), (looking back:1.3), (scared expression), (tears), (sweat), (abandoned hallway), (motion blur:1.2), (scary monster chasing from behind:1.3), (pursuer looming in background), (cinematic lighting), (dynamic angle), (dramatic shadows)", links: ["ダイナミックポーズ", "ホラー"] },
      { label: "ロッカーに隠れる", val: "(hiding in locker), (pov from inside), (peeking through slit), (scared face), (covering mouth), (heavy breathing), (killer outside), (darkness), (ray tracing), (claustrophobic)", links: ["ホラー"] },
      { label: "絶望的な遭遇", val: "(sitting on floor), (backing away), (screaming), (wide eyes), (horror on face), (monster looming), (low angle), (dutch angle), (dim lighting), (volumetric lighting), (shadows)", links: ["座りポーズ"] },
      { label: "侵食・発狂", val: "(insane expression), (wide open eyes), (laughing), (blood on face), (distorted background), (glitch effect), (mental corruption), (psychedelic horror), (chromatic aberration), (intricate eyes)" },
      { label: "儀式の生贄", val: "(lying on altar), (bound hands), (unconscious), (magic circle), (red candles), (hooded figures), (ritual chamber), (high angle shot), (glowing magic), (atmospheric lighting)", links: ["寝ポーズ"] },
      { label: "心霊写真風", val: "(daily life photo), (peace sign), (group photo), (ghost face behind), (transparent spirit), (cursed image), (noise), (low quality style), (vhs artifact), (film grain)" }
    ],
    "🔪 ヤンデレパック (Yandere)": [
      { label: "虚ろな目・愛の重さ", val: "(yandere), (empty eyes), (scary smile), (holding knife behind back), (shadow over face), (obsessed), (love hearts in eyes), (dark atmosphere)" },
      { label: "監禁・束縛", val: "(yandere), (chains), (dark room), (sitting on lap), (possessive hug), (crazy eyes), (dim lighting), (blood stains on clothes)", links: ["ホラー"] },
      { label: "血まみれの愛", val: "(blood on face), (holding sharp object), (psychotic smile), (yandere trance), (intense staring), (dutch angle), (horror theme)" }
    ],
    "😡 ツンデレパック (Tsundere)": [
      { label: "素直になれない", val: "(tsundere), (arms crossed), (looking away), (blush), (pout), (angry but shy), (school uniform), (cute angry face)" },
      { label: "プレゼント（赤面）", val: "(shoving gift box), (blushing heavily), (looking down), (embarrassed), (valentine chocolate), (shy expression), (tsundere pose)" },
      { label: "怒ってるけど好き", val: "(angry expression), (tears in eyes), (pointing finger), (frustrated), (blushing cheeks), (emotional), (school setting)" }
    ],
    "❄️ クーデレパック (Kuudere)": [
      { label: "無表情・クール", val: "(expressionless), (staring), (quiet atmosphere), (beautiful detailed eyes), (cool beauty), (emotionless), (mysterious)" },
      { label: "読書・静寂", val: "(reading book), (library), (glasses), (intellectual), (calm demeanor), (sunlight through window), (dust particles)", links: ["図書館"] },
      { label: "微かなデレ", val: "(slight smile), (soft blush), (rare expression), (looking at viewer), (gentle atmosphere), (holding cat), (gap moe)" }
    ],
    "🎢 絶叫・スリルパック (Thrill)": [
      { label: "ジェットコースター", val: "(roller coaster), (screaming), (hands up), (wind blowing hair), (speed lines), (high altitude), (fear and excitement), (blue sky)", links: ["ダイナミックポーズ"] },
      { label: "お化け屋敷（驚き）", val: "(haunted house attraction), (clinging to arm), (scared expression), (tears), (ghost prop in background), (dark corridor), (surprise)" }
    ]
  };

  // 翻訳辞書 (戦闘系追加)
  const DICT = {
    // Battle Packs
    "drawing katana": "抜刀", "iai stance": "居合の構え", "hand on hilt": "柄に手", "cherry blossoms falling": "桜吹雪",
    "samurai style": "侍スタイル", "kimono or armor": "着物か鎧", "dual wielding": "二刀流", "two swords": "二本の剣",
    "spinning attack": "回転攻撃", "slashing effects": "斬撃エフェクト", "dynamic action": "ダイナミックアクション",
    "afterimage": "残像", "speed lines": "スピード線", "intense battle": "激戦", "kneeling with sword": "剣に跪く",
    "sword planted in ground": "地面に刺さった剣", "praying": "祈り", "holy light": "聖なる光", "knight armor": "騎士の鎧",
    "cathedral background": "大聖堂の背景", "solemn": "厳粛", "god rays": "ゴッドレイ", "holding giant sword": "大剣を持つ",
    "heavy weapon": "重火器", "swinging sword": "剣を振る", "ground cracking": "地割れ", "debris flying": "破片が飛ぶ",
    "power stance": "パワースタンス", "impact frame": "インパクトフレーム", "dual guns": "二丁拳銃", "firing both hands": "両手撃ち",
    "jumping sideways": "横っ飛び", "bullet time": "バレットタイム", "muzzle flash": "マズルフラッシュ", "debris": "瓦礫",
    "action movie shot": "アクション映画風", "flying cartridges": "薬莢が飛ぶ", "holding sniper rifle": "スライパーライフルを持つ",
    "looking through scope": "スコープを覗く", "lying prone": "伏せ撃ち", "rooftop": "屋上", "cityscape in background": "街並み",
    "one eye closed": "片目をつぶる", "windy": "風", "serious face": "真剣な顔", "reloading gun": "リロード",
    "magazine in air": "宙に浮くマガジン", "hiding behind cover": "物陰に隠れる", "sweat": "汗", "bullets flying": "飛び交う弾丸",
    "wall damage": "壁の損傷", "tactical gear": "タクティカルギア", "holding assault rifle": "アサルトライフルを持つ",
    "firing stance": "射撃姿勢", "shell casings": "薬莢", "aggressive expression": "攻撃的な表情", "warzone": "戦場",
    "smoke and fire": "煙と炎", "fire magic": "炎魔法", "fireball in hand": "火の玉", "flames surrounding": "炎に包まれる",
    "burning eyes": "燃える瞳", "floating hair": "浮遊する髪", "intense heat": "高熱", "explosion background": "爆発背景",
    "casting spell": "詠唱", "summoning ritual": "召喚儀式", "summoning circle on ground": "召喚陣", "giant monster emerging": "巨大モンスター出現",
    "holding grimoire": "魔導書を持つ", "chanting": "詠唱", "glowing runes": "光るルーン", "mystical atmosphere": "神秘的な雰囲気",
    "casting healing magic": "回復魔法", "gentle light": "優しい光", "feathers falling": "舞い散る羽", "praying hands": "祈る手",
    "angelic atmosphere": "天使のような", "soft focus": "ソフトフォーカス", "warm colors": "暖色", "flying kick": "飛び蹴り",
    "dynamic pose": "ダイナミックポーズ", "shoe sole focus": "靴底フォーカス", "impact effect": "衝撃エフェクト", "shattered glass": "割れるガラス",
    "street fight": "ストリートファイト", "high angle": "ハイアングル", "action lines": "アクション線", "punching": "パンチ",
    "fist clash": "拳の激突", "sweat flying": "飛び散る汗", "intense face": "激しい顔", "motion blur": "モーションブラー",
    "close up": "接写", "fighting stance": "ファイティングポーズ", "knuckles": "拳", "martial arts stance": "武道の構え",
    "glowing aura": "光るオーラ", "energy gathering": "エネルギー充填", "power up": "パワーアップ", "floating rocks": "浮遊する岩",
    "dragon effect": "龍のエフェクト", "intense eyes": "鋭い眼光", "drawing bow": "弓を引く", "energy arrow": "エネルギーの矢",
    "aiming at camera": "カメラを狙う", "forest background": "森の背景", "elf style": "エルフ風", "concentration": "集中",
    "wind blowing hair": "風になびく髪", "sharp eyes": "鋭い目", "holding scythe": "大鎌を持つ", "grim reaper style": "死神風",
    "full moon": "満月", "dark aura": "闇のオーラ", "floating": "浮遊", "gothic dress": "ゴシックドレス", "menacing": "威圧的",
    "black feathers": "黒い羽", "holding spear": "槍を持つ", "thrusting pose": "突き", "charging forward": "突撃",
    "army behind": "背後に軍勢", "warrior scream": "雄叫び", "battlefield": "戦場",
    // Job & Cosplay
    "maid outfit": "メイド服", "holding serving tray": "トレイを持つ", "curtsy": "カーテシー", "classic maid": "クラシックメイド",
    "mansion interior": "屋敷の内装", "frills": "フリル", "tea set": "ティーセット",
    "nurse uniform": "ナース服", "holding syringe": "注射器を持つ", "clipboard": "カルテ", "medical checkup": "診察",
    "office lady": "OL", "business suit": "スーツ", "holding documents": "書類を持つ", "modern office": "オフィス", "desk work": "デスクワーク",
    "high rise building view": "高層ビルの眺め", "police uniform": "警官の制服", "holding handcuffs": "手錠を持つ", "police hat": "警帽",
    "arresting pose": "逮捕ポーズ", "patrol car background": "パトカー", "justice": "正義",
    "bunny girl suit": "バニーガール", "rabbit ears": "うさ耳", "fishnet tights": "網タイツ", "casino background": "カジノ", "roulette": "ルーレット",
    "miko outfit": "巫女服", "holding broom": "箒を持つ", "shrine background": "神社", "sweeping leaves": "掃除", "red hakama": "赤袴",
    // Events
    "santa costume": "サンタコス", "christmas tree": "クリスマスツリー", "holding gift box": "プレゼントを持つ", "snowy background": "雪景色",
    "lights and ornaments": "電飾と飾り", "winter holiday": "冬休み", "witch costume": "魔女コス", "holding pumpkin": "カボチャを持つ",
    "jack-o'-lantern": "ジャック・オー・ランタン", "bats": "コウモリ", "purple and orange theme": "紫とオレンジ", "spooky castle background": "不気味な城",
    "magic hat": "魔法の帽子", "wedding dress": "ウェディングドレス", "holding bouquet": "ブーケを持つ", "church interior": "教会",
    "white veil": "ベール", "stained glass": "ステンドグラス", "happy tears": "嬉し泣き", "marriage ceremony": "結婚式", "pure white": "純白",
    "wearing yukata": "浴衣", "onsen": "温泉", "open air bath": "露天風呂", "wooden bucket": "木桶", "flushed face": "上気した顔",
    // Food
    "eating hamburger": "ハンバーガーを食べる", "holding burger with both hands": "両手で持つ", "fast food restaurant": "ファストフード店",
    "french fries": "ポテト", "cola": "コーラ", "happy eating face": "幸せそうに食べる", "open mouth": "口を開ける",
    "afternoon tea": "アフタヌーンティー", "holding tea cup": "カップを持つ", "cake stand": "ケーキスタンド", "garden terrace": "テラス",
    "sipping tea": "紅茶をすする", "relaxing afternoon": "午後のひととき",
    "izakaya": "居酒屋", "holding beer mug": "ビールジョッキ", "kanpai": "乾杯", "yakitori": "焼き鳥", "slightly drunk": "ほろ酔い", "lanterns": "提灯",
    // Spots & Shops (Existing)
    "idol focus": "アイドル", "live concert": "ライブ", "stage lights": "ステージ照明", "sparkles": "キラキラ",
    "cinematic glow": "映画的輝き", "performance": "パフォーマンス", "cozy modern café": "モダンカフェ",
    "coffee": "コーヒー", "sweets": "スイーツ", "string lights": "イルミネーション", "bar counter": "バーカウンター",
    "bottles on shelves": "棚のボトル", "bartender": "バーテンダー", "cocktail": "カクテル", "jazz bar vibes": "ジャズバー",
    "adult atmosphere": "大人の雰囲気", "convenience store": "コンビニ", "bright fluorescent light": "蛍光灯",
    "shelves of snacks": "お菓子棚", "refrigerator": "冷蔵庫", "night shift": "夜勤", "modern japan": "現代日本",
    "supermarket": "スーパー", "grocery shopping": "買い物", "shopping basket": "カゴ", "fruit and vegetables": "青果",
    "library": "図書館", "bookshelves": "本棚", "quiet atmosphere": "静寂", "reading": "読書", "hospital room": "病室",
    "white bed": "白いベッド", "medical equipment": "医療機器", "sterile": "無菌", "date night": "夜デート",
    "romantic atmosphere": "ロマンチック", "city lights": "街明かり", "holding hands": "手繋ぎ", "restaurant": "レストラン",
    "dinner": "ディナー", 
    // SF
    "spaceship cockpit": "宇宙船コックピット", "holographic interface": "ホログラム画面", "stars through window": "窓の外の星",
    "futuristic controls": "未来的な操作盤", "sci-fi interior": "SF風内装", "pilot seat": "パイロット席", "glowing buttons": "光るボタン",
    "space station corridor": "宇宙ステーションの廊下", "white panels": "白いパネル", "artificial gravity": "人工重力", "view of earth": "地球の眺め",
    "clean aesthetic": "清潔な美学", "zero gravity hair": "無重力の髪", "neon rain": "ネオンの雨", "hologram billboards": "ホログラム看板",
    "flying cars": "空飛ぶ車", "high tech low life": "ハイテク・ローライフ", "cybernetics lab": "サイバネティクス研究所", "robot parts": "ロボット部品",
    "server racks": "サーバーラック", "blue light": "青い光", "data screen": "データ画面", "mechanical arm": "機械アーム", "repairing": "修理中",
    "alien planet": "異星", "strange plants": "奇妙な植物", "two moons": "二つの月", "purple sky": "紫の空", "rocky terrain": "岩場",
    "unknown civilization": "未知の文明", "sci-fi landscape": "SF風景",
    // Japanese
    "shinto shrine": "神社", "red torii gate": "赤い鳥居", "stone steps": "石段", "sacred atmosphere": "神聖な雰囲気", "paper lantern": "提灯",
    "autumn leaves": "紅葉", "traditional japan": "日本の伝統", "wooden engawa": "縁側", "japanese garden": "日本庭園", "koi pond": "鯉の池",
    "bamboo pipe": "ししおどし", "drinking tea": "お茶を飲む", "sunny afternoon": "晴れた午後", "summer festival": "夏祭り", "fireworks in sky": "打ち上げ花火",
    "yukata": "浴衣", "stalls": "屋台", "festive atmosphere": "お祭りの雰囲気", "bamboo forest": "竹林", "sunlight filtering through bamboo": "竹林の木漏れ日",
    "green atmosphere": "緑の雰囲気", "pathway": "小道", "misty": "霧がかった", "tatami room": "畳の部屋", "hanging scroll": "掛け軸",
    "flower arrangement": "生け花", "sunlight patterns": "光の模様", "traditional interior": "伝統的な内装", "seiza": "正座",
    "ancient battlefield": "古戦場", "broken arrows": "折れた矢", "smoke": "煙", "flags": "旗", "dramatic atmosphere": "ドラマチック", "historical": "歴史的",
    // School
    "classroom": "教室", "school desks": "机", "chalkboard": "黒板", "friends": "友達",
    "school uniform": "制服", "school hallway": "廊下", "lockers": "ロッカー", "cleaning time": "掃除時間",
    "school rooftop": "屋上", "fence": "フェンス", "wind blowing hair": "風になびく髪", "secret base": "秘密基地",
    "school gymnasium": "体育館", "basketball hoop": "バスケゴール", "wooden floor": "床", "indoor shoes": "上履き",
    "school infirmary": "保健室", "medicine cabinet": "薬棚", "street to school": "通学路", "telephone poles": "電柱",
    "club room": "部室", "messy desk": "散らかった机", 
    // Home
    "living room": "リビング", "sofa": "ソファ", "television": "テレビ",
    "carpet": "カーペット", "family time": "団欒", "modern kitchen": "キッチン", "cooking": "料理", "apron": "エプロン",
    "vegetables": "野菜", "frying pan": "フライパン", "bedroom": "寝室", "messy bed": "乱れたベッド", "white sheets": "シーツ",
    "pillow": "枕", "pajamas": "パジャマ", "bathroom": "バスルーム", "bathtub": "バスタブ", "steam": "湯気", "bubbles": "泡",
    "wet skin": "濡れた肌", "japanese style room": "和室", "tatami mats": "畳", "shoji screen": "障子", "kotatsu": "こたつ",
    "entrance hall": "玄関", "shoes": "靴", "umbrella stand": "傘立て", "welcome home": "おかえり", "apartment balcony": "ベランダ",
    "laundry hanging": "洗濯物", "potted plants": "鉢植え", 
    // Fantasy
    "fantasy forest": "ファンタジーの森", "glowing plants": "光る植物",
    "magic particles": "魔法の粒子", "ancient trees": "古代樹", "royal palace": "王宮", "throne room": "玉座の間",
    "chandelier": "シャンデリア", "red carpet": "赤絨毯", "marble pillars": "大理石の柱", "luxurious": "豪華な",
    "gold decorations": "金の装飾", "stone dungeon": "ダンジョン", "torch light": "松明", "cobwebs": "蜘蛛の巣",
    "stone walls": "石壁", "treasure chest": "宝箱", "fantasy tavern": "冒険者ギルド", "wooden tables": "木のテーブル",
    "beer mugs": "ジョッキ", "adventurers": "冒険者", "quest board": "掲示板", "alchemist lab": "魔法研究所", "potions": "ポーション",
    "scrolls": "巻物", "magic circle": "魔法陣", "glowing crystals": "水晶", "floating island": "浮遊島", "castle in the sky": "天空の城",
    "waterfall into void": "奈落の滝", "epic scale": "壮大", "ancient ruins": "古代遺跡", "overgrown with moss": "苔むした",
    "broken pillars": "壊れた柱", "stone statues": "石像", 
    // Horror
    "abandoned hospital": "廃病院", "broken windows": "割れた窓", "debris": "瓦礫", "peeling paint": "剥げたペンキ",
    "wheelchair": "車椅子", "creepy corridor": "不気味な廊下", "blood stains": "血痕", "dark atmosphere": "暗い雰囲気",
    "haunted mansion": "お化け屋敷", "dusty": "埃っぽい", "dim candle light": "薄暗い蝋燭", "old portraits": "古い肖像画",
    "thunderstorm outside": "外は嵐", "gothic interior": "ゴシック内装", "graveyard": "墓地", "tombstones": "墓石",
    "fog": "霧", "will-o'-the-wisp": "鬼火", "dead trees": "枯れ木", "blue ambient light": "青い環境光", "spooky": "不気味",
    "ritual chamber": "儀式の間", "skulls": "頭蓋骨", "blood sacrifice": "生贄", "ominous atmosphere": "不穏な空気",
    "stone altar": "石の祭壇", "abandoned school": "廃校", "shattered glass": "割れたガラス", "dark corridor": "暗い廊下",
    "eerie silence": "不気味な静寂", "cursed": "呪われた", "dungeon cell": "地下牢", "chains": "鎖", "iron bars": "鉄格子",
    "torture devices": "拷問器具", "shadows": "影", "otherworld": "異界", "red sky": "赤い空", "distorted reality": "歪んだ現実",
    "floating rocks": "浮遊する岩", "blood ocean": "血の海", "surreal": "シュール", "nightmare": "悪夢",
    "cursed forest": "呪われた森", "twisted trees": "歪んだ木", "dense fog": "濃霧", "hanging ropes": "吊るされた縄",
    "lost path": "迷い道", "ghostly figures": "幽霊の姿",
    // Packs (Existing)
    "casting magic spell": "魔法詠唱", "floating in air": "浮遊", "intense energy": "強烈なエネルギー", "wind blowing clothes": "服が風になびく",
    "fantasy battle": "ファンタジーバトル", "dynamic pose": "ダイナミックポーズ", "holding sword": "剣を持つ", "battle stance": "戦闘態勢",
    "slashing effect": "斬撃エフェクト", "sparkles from blade": "刃の火花", "intense expression": "真剣な表情", "focused eyes": "集中した目",
    "enemy in background": "背景に敵", "walking away from explosion": "爆発から立ち去る", "cool guys don't look at explosions": "爆発を振り返らない",
    "debris flying": "破片が飛ぶ", "fire and smoke": "炎と煙", "dramatic lighting": "劇的な照明", "action movie style": "アクション映画風",
    "holding gun": "銃を持つ", "aiming": "狙う", "muzzle flash": "マズルフラッシュ", "bullet shells": "薬莢", "taking cover": "隠れる",
    "urban warfare": "市街戦", "detailed weapon": "詳細な武器",
    "singing": "歌う", "holding microphone": "マイクを持つ", "sweat and sparkles": "汗と輝き", "joyful smile": "喜びの笑顔",
    "audience light sticks": "観客のペンライト", "confetti": "紙吹雪", "stage lighting": "ステージ照明", "idol costume": "アイドル衣装",
    "winking": "ウインク", "pointing at viewer": "指差し", "finger heart": "指ハート", "cute pose": "可愛いポーズ",
    "idol smile": "アイドルスマイル", "close up": "アップ", "bright background": "明るい背景", "charming": "魅力的",
    "dressing room": "楽屋", "looking in mirror": "鏡を見る", "nervous expression": "緊張した顔", "makeup items": "メイク道具",
    "backstage": "舞台裏", "preparing": "準備中", "idol outfit": "アイドル衣装", "quiet moment": "静かな瞬間",
    "aquarium date": "水族館デート", "looking at fish": "魚を見る", "reflection on glass": "ガラスの反射", "walking together": "一緒に歩く",
    "happy expression": "幸せな表情", "movie theater": "映画館", "sitting next to each other": "隣同士に座る", "eating popcorn": "ポップコーン",
    "screen light reflecting on face": "スクリーンの光", "intimate moment": "親密な瞬間", "amusement park date": "遊園地デート",
    "ferris wheel in background": "背景に観覧車", "holding crepe": "クレープを持つ", "colorful lights": "カラフルな光", "happy smile": "幸せな笑顔",
    "vibrant atmosphere": "活気ある雰囲気", "casual clothes": "私服", "observation deck": "展望台", "night city view": "夜景",
    "sparkling city lights": "煌めく街", "leaning on railing": "手すりにもたれる", "romantic mood": "ロマンチックなムード", "couple atmosphere": "カップル",
    "walking home together": "一緒に下校", "sunset glow": "夕焼け", "blushing": "赤面", "sentimental atmosphere": "感傷的",
    "yandere": "ヤンデレ", "empty eyes": "虚ろな目", "scary smile": "怖い笑顔", "holding knife behind back": "背後にナイフ",
    "shadow over face": "顔に影", "obsessed": "執着", "love hearts in eyes": "目にハート", "possessive hug": "独占欲のハグ",
    "crazy eyes": "狂った目", "blood stains on clothes": "服に血痕", "holding sharp object": "刃物を持つ", "psychotic smile": "精神異常の笑み",
    "yandere trance": "ヤンデレトランス", "intense staring": "凝視",
    "tsundere": "ツンデレ", "arms crossed": "腕組み", "looking away": "そっぽを向く", "pout": "ふくれっ面", "angry but shy": "怒りつつ照れ",
    "cute angry face": "可愛い怒り顔", "shoving gift box": "箱を押し付ける", "blushing heavily": "真っ赤", "looking down": "うつむく",
    "embarrassed": "恥ずかしい", "valentine chocolate": "バレンタインチョコ", "shy expression": "照れ顔", "tsundere pose": "ツンデレポーズ",
    "angry expression": "怒り顔", "tears in eyes": "涙目", "pointing finger": "指差す", "frustrated": "苛立ち", "blushing cheeks": "頬を赤らめる",
    "emotional": "感情的", "school setting": "学校設定",
    "expressionless": "無表情", "staring": "じっと見る", "cool beauty": "クールビューティー", "emotionless": "感情がない", "mysterious": "ミステリアス",
    "reading book": "読書", "glasses": "眼鏡", "intellectual": "知的", "calm demeanor": "落ち着いた態度", "slight smile": "微かな笑み",
    "soft blush": "ほんのり赤面", "rare expression": "珍しい表情", "looking at viewer": "こっちを見る", "gentle atmosphere": "優しい雰囲気",
    "holding cat": "猫を抱く", "gap moe": "ギャップ萌え",
    "roller coaster": "ジェットコースター", "hands up": "手を上げる", "speed lines": "集中線", "high altitude": "高所",
    "fear and excitement": "恐怖と興奮", "haunted house attraction": "お化け屋敷", "clinging to arm": "腕にしがみつく",
    "ghost prop in background": "背景にお化け", "surprise": "驚き",
    "running away": "逃げる", "looking back": "振り返る", "scared expression": "怯えた顔", "tears": "涙", "sweat": "冷や汗",
    "abandoned hallway": "廃墟の廊下", "motion blur": "モーションブラー", "scary monster chasing from behind": "背後から迫る恐ろしい怪物",
    "pursuer looming in background": "背景に迫る追跡者", "cinematic lighting": "シネマティック照明", "dynamic angle": "ダイナミックなアングル",
    "dramatic shadows": "劇的な影", "hiding in locker": "ロッカーに隠れる", "pov from inside": "中からの視点", "peeking through slit": "隙間から覗く",
    "scared face": "恐怖顔", "covering mouth": "口を覆う", "heavy breathing": "荒い息", "killer outside": "外に殺人鬼",
    "darkness": "暗闇", "ray tracing": "レイトレーシング", "claustrophobic": "閉塞感", "sitting on floor": "床に座り込む", "backing away": "後ずさる",
    "screaming": "悲鳴", "wide eyes": "見開いた目", "horror on face": "恐怖の表情", "monster looming": "怪物が迫る", "low angle": "ローアングル",
    "dutch angle": "ダッチアングル", "dim lighting": "薄暗い照明", "volumetric lighting": "ボリュメトリック照明", "insane expression": "狂気の表情",
    "wide open eyes": "カッと開いた目", "laughing": "笑う", "blood on face": "顔に血", "distorted background": "歪んだ背景", "glitch effect": "グリッチ効果",
    "mental corruption": "精神汚染", "psychedelic horror": "サイケデリックホラー", "chromatic aberration": "色収差", "intricate eyes": "詳細な瞳",
    "lying on altar": "祭壇に横たわる", "bound hands": "縛られた手", "unconscious": "気絶", "hooded figures": "フードの人物",
    "high angle shot": "ハイアングル", "glowing magic": "魔法の輝き", "atmospheric lighting": "雰囲気のある照明", "daily life photo": "日常写真",
    "peace sign": "ピースサイン", "group photo": "集合写真", "ghost face behind": "背後に幽霊", "transparent spirit": "透けた霊",
    "cursed image": "呪いの画像", "noise": "ノイズ", "low quality style": "低画質風", "vhs artifact": "VHSノイズ", "film grain": "フィルムグレイン",
    // Urban
    "busy city street": "繁華街", "scramble crossing": "スクランブル交差点",
    "crowd": "人混み", "billboards": "看板", "skyscrapers": "高層ビル", "back alley": "路地裏", "vending machine": "自販機",
    "trash cans": "ゴミ箱", "stray cat": "野良猫", "pipes": "配管", "gritty": "無骨な", "train station platform": "駅のホーム",
    "train arriving": "電車到着", "commuters": "通勤客", "cyberpunk city": "ネオン街", "neon signs": "ネオンサイン",
    "rainy street": "雨の通り", "public park": "公園", "bench": "ベンチ", "fountain": "噴水", "skyscraper rooftop": "ビルの屋上",
    "night city view": "夜景",
    // Nature
    "flower field": "花畑", "sunflowers": "ひまわり", "snowy mountain": "雪山", "winter landscape": "冬景色", "snowing": "雪",
    "white world": "銀世界", "tropical beach": "ビーチ", "white sand": "砂浜", "blue ocean": "青い海", "palm trees": "ヤシの木",
    "underground cave": "洞窟", "stalactites": "鍾乳石", "underground lake": "地底湖", "sunset beach": "夕暮れの海",
    "reflection on water": "水面の反射", "waves": "波", "starry sky": "星空", "milky way": "天の川", "shooting star": "流れ星",
    // Time & Tech
    "morning light": "朝の光", "light leaks": "光漏れ", "soft shadows": "柔らかな影", "fresh atmosphere": "爽やか",
    "sunlight through leaves": "木漏れ日", "dappled sunlight": "まだらな日差し",
    "tyndall effect": "チンダル現象", "god rays": "ゴッドレイ", "dust particles": "舞う埃", "backlighting": "逆光",
    "intense sunlight": "強い日差し", "blue sky": "青空", "cumulus clouds": "入道雲", "summer vibes": "夏の雰囲気",
    "natural lighting": "自然光", "daylight": "日光", "harsh sunlight": "厳しい日差し", "heat haze": "陽炎",
    "golden hour": "ゴールデンアワー", "sunset": "夕日", "orange and purple sky": "夕焼け空", "long shadows": "長い影",
    "silhouette": "シルエット", "sun behind character": "背後の太陽", "twilight": "黄昏", "blue hour": "ブルーアワー",
    "night city": "夜の街", "colorful bokeh": "カラフルなボケ", "moonlight": "月光", "full moon": "満月",
    "spotlight": "スポットライト", "chiaroscuro": "明暗法", "night cafe": "夜カフェ",
    "candle light": "キャンドル", "cherry blossoms": "桜", "raining": "雨", "wet ground": "濡れた地面"
  };

  function createSubAccordion(title, items, type) { 
    const details = document.createElement("details"); details.className = "qp-sub-acc"; details.style.marginBottom = "6px"; details.style.border = "1px solid #eee"; details.style.borderRadius = "4px"; details.style.background = "#fff"; details.open = false; 
    const summary = document.createElement("summary"); summary.textContent = title; summary.style.fontWeight = "bold"; summary.style.padding = "6px 10px"; summary.style.cursor = "pointer"; summary.style.background = "#f9f9f9"; details.appendChild(summary); 
    const content = document.createElement("div"); content.className = "qp-content-grid"; content.style.padding = "8px"; content.style.display = "grid"; content.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))"; content.style.gap = "6px"; 
    
    if(items && Array.isArray(items)){
      items.forEach(item => { 
        const label = document.createElement("label"); label.style.display = "flex"; label.style.alignItems = "center"; label.style.fontSize = "0.9em"; label.style.cursor = "pointer"; 
        const cb = document.createElement("input"); cb.type = "checkbox"; cb.style.marginRight = "6px"; 
        
        if (item.val) {
          cb.dataset.val = item.val;
          label.title = item.val;
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.label));
        } else if (item.en) {
          cb.dataset.val = item.en;
          label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
        }
        if(item.links) cb.dataset.links = item.links.join(",");
        content.appendChild(label); 
      });
    }
    details.appendChild(content); return details; 
  }

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      const root = document.querySelector(".quality-preset-integrated");
      if (!root) return;

      const sec = document.createElement("details"); sec.className = "qp-main-acc";
      sec.style.cssText = "margin-bottom:10px; border:1px solid #ccc; border-radius:6px; background:#fff;";
      const summary = document.createElement("summary"); summary.innerHTML = `<span style="margin-right:8px;">▶</span>🎬 シチュエーション・環境 (Situations)`; 
      summary.style.cssText = "font-weight:bold; padding:10px 14px; cursor:pointer; background:#eef2f6; list-style:none;";
      sec.appendChild(summary);
      const content = document.createElement("div"); content.className = "qp-section-content"; content.style.padding = "10px";
      sec.appendChild(content);

      Object.entries(SITUATION_DATA).forEach(([k,v]) => { content.appendChild(createSubAccordion(k, v)); });
      root.appendChild(sec);

      // ★テーマ別パック (Theme Packs)
      const secPack = document.createElement("details"); secPack.className = "qp-main-acc";
      secPack.style.cssText = "margin-bottom:10px; border:1px solid #99c; border-radius:6px; background:#f4f4ff;";
      const sumPack = document.createElement("summary"); sumPack.innerHTML = `<span style="margin-right:8px;">▶</span>📦 テーマ別シチュエーションパック (Theme Packs)`; 
      sumPack.style.cssText = "font-weight:bold; padding:10px 14px; cursor:pointer; background:#e0e0ff; color:#336; list-style:none;";
      secPack.appendChild(sumPack);
      const conPack = document.createElement("div"); conPack.className = "qp-section-content"; conPack.style.padding = "10px";
      secPack.appendChild(conPack);

      Object.entries(PACK_DATA).forEach(([k,v]) => { conPack.appendChild(createSubAccordion(k, v)); });
      root.appendChild(secPack);
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

