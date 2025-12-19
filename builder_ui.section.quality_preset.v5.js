(function(){
  "use strict";
  const VERSION = 5; 
  const KEY = "quality_preset";
  const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  // ==============================================================================
  // 🌍 世界観・ジャンル (World & Genre) - 通常
  // ==============================================================================
  const GENRE_DATA = {
    "🌌 SF・宇宙 (Sci-Fi)": [
      { label: "宇宙船コックピット", val: "(spaceship cockpit), (holographic interface), (stars through window), (futuristic controls), (sci-fi interior), (pilot seat), (glowing buttons)", links: ["サイバー・ネオン"] },
      { label: "宇宙ステーション", val: "(space station corridor), (white panels), (artificial gravity), (view of earth), (clean aesthetic), (futuristic), (zero gravity hair)" },
      { label: "サイバーパンク都市", val: "(cyberpunk city), (neon rain), (hologram billboards), (flying cars), (wet street), (night), (high tech low life)", links: ["サイバー・ネオン"] },
      { label: "アンドロイド研究所", val: "(cybernetics lab), (robot parts), (cables), (server racks), (blue light), (data screen), (mechanical arm), (repairing)" },
      { label: "異星の惑星", val: "(alien planet), (strange plants), (two moons), (purple sky), (rocky terrain), (unknown civilization), (sci-fi landscape)", links: ["ファンタジー"] }
    ],
    "⛩️ 和風・歴史 (Japanese)": [
      { label: "神社・鳥居", val: "(shinto shrine), (red torii gate), (stone steps), (sacred atmosphere), (paper lantern), (autumn leaves), (traditional japan)" },
      { label: "縁側・日本庭園", val: "(wooden engawa), (japanese garden), (koi pond), (bamboo pipe), (relaxing), (drinking tea), (sunny afternoon), (peaceful)" },
      { label: "夏祭り・花火", val: "(summer festival), (fireworks in sky), (yukata), (stalls), (paper lanterns), (crowd), (night), (festive atmosphere)", links: ["夜"] },
      { label: "竹林", val: "(bamboo forest), (sunlight filtering through bamboo), (green atmosphere), (pathway), (nature), (quiet), (misty)" },
      { label: "畳の部屋", val: "(tatami room), (shoji screen), (hanging scroll), (flower arrangement), (sunlight patterns), (traditional interior), (seiza)" },
      { label: "戦場・合戦跡", val: "(ancient battlefield), (broken arrows), (smoke), (sunset), (flags), (dramatic atmosphere), (historical)" }
    ],
    "🏰 ファンタジー・RPG (Fantasy)": [
      { label: "ファンタジーの森", val: "(fantasy forest), (glowing plants), (magic particles), (ancient trees), (mysterious), (fairy tale), (lush vegetation)", links: ["ファンタジー"] },
      { label: "王宮・城", val: "(royal palace), (throne room), (chandelier), (red carpet), (marble pillars), (luxurious), (gold decorations), (king and queen)" },
      { label: "ダンジョン", val: "(stone dungeon), (torch light), (dark atmosphere), (cobwebs), (stone walls), (treasure chest), (adventure), (danger)" },
      { label: "冒険者ギルド", val: "(fantasy tavern), (wooden tables), (beer mugs), (lively atmosphere), (adventurers), (candle light), (fireplace), (quest board)" },
      { label: "魔法研究所", val: "(alchemist lab), (potions), (scrolls), (books), (magic circle), (glowing crystals), (cluttered), (mysterious)" },
      { label: "天空の城", val: "(floating island), (castle in the sky), (clouds), (waterfall into void), (fantasy landscape), (dreamy), (epic scale)", links: ["広角"] },
      { label: "廃墟・遺跡", val: "(ancient ruins), (overgrown with moss), (broken pillars), (stone statues), (mysterious), (lost civilization), (sunlight filtering)" }
    ],
    "👻 ホラー・怪奇 (Horror)": [
      { label: "廃病院", val: "(abandoned hospital), (broken windows), (debris), (peeling paint), (wheelchair), (creepy corridor), (blood stains), (dark atmosphere)", links: ["ホラー"] },
      { label: "不気味な洋館", val: "(haunted mansion), (cobwebs), (dusty), (dim candle light), (old portraits), (thunderstorm outside), (gothic interior)" },
      { label: "深夜の墓地", val: "(graveyard), (tombstones), (fog), (full moon), (will-o'-the-wisp), (dead trees), (blue ambient light), (spooky)" },
      { label: "儀式の間", val: "(ritual chamber), (magic circle), (red candles), (skulls), (blood sacrifice), (ominous atmosphere), (stone altar)" },
      { label: "異界・裏世界", val: "(otherworld), (red sky), (distorted reality), (floating rocks), (blood ocean), (surreal), (nightmare)", links: ["ファンタジー"] }
    ]
  };

  // ==============================================================================
  // 🧚‍♀️ 種族・ファンタジーライフ (Racial Life) - 通常
  // ==============================================================================
  const RACIAL_DATA = {
    "🧝‍♀️ エルフ・森の民 (Elf)": [
      { label: "森の守護者", val: "(in ancient forest), (sitting on tree branch), (surrounded by nature), (sunlight filtering through leaves), (birds), (peaceful), (fantasy nature)", links: ["ファンタジー"] },
      { label: "精霊との対話", val: "(talking to spirits), (glowing wisps), (mystical atmosphere), (gentle expression), (magic forest), (fireflies), (night)" },
      { label: "弓の練習", val: "(practicing archery), (forest clearing), (target in distance), (concentration), (traditional elf clothes)" }
    ],
    "👼 天使・聖なる者 (Angel)": [
      { label: "天空からの降臨", val: "(descending from sky), (spread wings), (feathers falling), (holy light), (clouds), (god rays), (angelic), (divine atmosphere)", links: ["ファンタジー"] },
      { label: "祈り", val: "(kneeling on cloud), (praying hands), (closed eyes), (halo), (peaceful), (white dress), (soft light)" }
    ],
    "👿 悪魔・魔族 (Demon)": [
      { label: "玉座の支配者", val: "(sitting on throne), (crossing legs), (arrogant expression), (wine glass), (dark castle), (red carpet), (demon wings), (horns)", links: ["ファンタジー"] },
      { label: "契約の誘惑", val: "(reaching out hand), (seductive smile), (contract scroll), (dark aura), (glowing eyes), (shadows), (temptation)" }
    ],
    "🐾 獣人・ワイルド (Beastkin)": [
      { label: "野生の狩り", val: "(crouching in tall grass), (stalking prey), (animal ears perked), (focused eyes), (wild nature), (dynamic pose), (tail wagging)" },
      { label: "日向ぼっこ", val: "(sleeping on grass), (sunshine), (relaxed), (curled up), (peaceful face), (warm atmosphere), (fluffy)" }
    ]
  };

  // ==============================================================================
  // 🔞 R-18 ファンタジー・異種姦 (Fantasy NSFW) - 新設拡張
  // ==============================================================================
  const SECRET_FANTASY_DATA = {
    "🐙 触手・モンスター (Tentacles & Monsters)": [
      { label: "触手プレイ・基本", val: "(nude), (restrained by tentacles), (tentacle penetration), (vaginal), (anal), (double penetration), (ahegao), (tears of pleasure), (slime), (monster)", links: ["Basic R-18"] },
      { label: "スライム触手・全身", val: "(restrained by slime tentacles), (translucent tentacles), (wrapping around body), (nipple penetration), (vaginal penetration), (clitoris stimulation), (slime dripping), (glowing blue slime), (dungeon)", links: ["Basic R-18"] },
      { label: "深海クラーケン", val: "(mermaid), (attacked by kraken), (large thick tentacles), (suckers), (deep sea background), (bubbles), (tentacle in mouth), (double penetration), (breast squeeze), (struggling)", links: ["Basic R-18"] },
      { label: "植物触手・蔦", val: "(adventurer), (carnivorous plant), (vine tentacles), (aphrodisiac pollen), (spreading legs), (flower blooming), (jungle ruins), (sweat and nectar), (mind break)", links: ["Basic R-18"] },
      { label: "異次元ポータル", val: "(mage girl), (tentacles emerging from magic portal), (glowing purple tentacles), (levitating), (all holes penetrated), (breast milking), (excessive cum), (magic circle), (orgasm overload)", links: ["Basic R-18"] },
      { label: "産卵・寄生", val: "(oviposition), (tentacles inserting eggs), (bulging belly), (pleasure pain face), (monster lair), (eggs visible), (translucent tentacles), (mucus), (stomach deformation)", links: ["Basic R-18"] },
      { label: "微細触手・責め", val: "(hundreds of small tentacles), (teasing nipples), (urethra play), (extreme sensitivity), (squirting), (continuous orgasm), (altar), (offering)", links: ["Basic R-18"] },
      { label: "ドラゴン触手", val: "(dragon tentacles), (thick scaled tentacles), (wrapping body), (deep penetration), (cum inflation), (fire breath background), (treasure room), (submissive)", links: ["Basic R-18"] }
    ],
    "🧝‍♀️ エルフ・ダークエルフ (Elf & Dark Elf)": [
      { label: "エルフの誘惑", val: "(elf), (pointy ears), (long silver hair), (green eyes), (nude), (large breasts), (detailed skin), (forest background), (moonlight), (seductive pose), (nsfw)", links: ["Basic R-18"] },
      { label: "ダークエルフ・奴隷", val: "(dark elf), (dark skin), (white hair), (collar), (leash), (on all fours), (doggystyle), (from behind), (sex), (slave), (chains), (dungeon), (red eyes), (submission)", links: ["Basic R-18"] }
    ],
    "😈 サキュバス・魔族 (Succubus & Demon)": [
      { label: "サキュバス・騎乗位", val: "(succubus), (demon wings), (tail), (horns), (red skin), (glowing eyes), (cowgirl position), (straddling), (sex), (vaginal), (penis in pussy), (ahegao), (tongue out), (heart-shaped pupils)", links: ["Basic R-18"] },
      { label: "夢魔の搾精", val: "(succubus), (draining energy), (kissing), (saliva), (seductive smile), (thighs), (paizuri), (titjob), (cum on face), (aphrodisiac)", links: ["Basic R-18"] }
    ],
    "🐉 ドラゴン・人外娘 (Monster Girls)": [
      { label: "ドラゴン娘・交尾", val: "(dragon girl), (scales), (horns), (dragon tail), (large breasts), (wet skin), (cowgirl position), (intense sex), (breasts bouncing), (moaning), (sweat), (fire background), (detailed pussy)", links: ["Basic R-18"] },
      { label: "ユニコーン・純粋", val: "(unicorn girl), (horn), (white hair), (pure white skin), (missionary position), (loving sex), (gentle expression), (magical aura), (flower field), (virgin)", links: ["Basic R-18"] }
    ],
    "🧙‍♀️ 魔女・魔法 (Witch & Magic)": [
      { label: "魔女の儀式", val: "(witch), (black hat), (thighhighs), (open robe), (nude under robe), (magic circle), (tentacles from portal), (breast grab), (pussy penetration), (orgasm), (glowing runes)", links: ["Basic R-18"] },
      { label: "魔法洗脳", val: "(mind break), (hypnosis), (magic spell), (empty eyes), (obeying), (wand), (magical girl), (corruption), (fallen)", links: ["Basic R-18"] },
      { label: "媚薬・発情", val: "(drinking potion), (aphrodisiac), (heat), (sweaty), (flushed face), (drooling), (horny), (masturbation), (fingering)", links: ["Basic R-18"] }
    ]
  };

  // ==============================================================================
  // 📚 v5専用辞書 (Local Dictionary for v5)
  // ==============================================================================
  const DICT = {
    // SF
    "spaceship cockpit": "宇宙船コックピット", "holographic interface": "ホログラム画面", "stars through window": "窓の外の星",
    "futuristic controls": "未来的な操作盤", "sci-fi interior": "SF風内装", "pilot seat": "パイロット席", "glowing buttons": "光るボタン",
    "space station corridor": "宇宙ステーションの廊下", "white panels": "白いパネル", "artificial gravity": "人工重力", "view of earth": "地球の眺め",
    "clean aesthetic": "清潔な美学", "zero gravity hair": "無重力の髪", "neon rain": "ネオンの雨", "hologram billboards": "ホログラム看板",
    "flying cars": "空飛ぶ車", "wet street": "濡れた路面", "high tech low life": "ハイテク・ローライフ", "cybernetics lab": "サイバネティクス研究所",
    "robot parts": "ロボット部品", "server racks": "サーバーラック", "blue light": "青い光", "data screen": "データ画面", "mechanical arm": "機械アーム",
    "repairing": "修理中", "alien planet": "異星", "strange plants": "奇妙な植物", "two moons": "二つの月", "purple sky": "紫の空",
    "rocky terrain": "岩場", "unknown civilization": "未知の文明", "sci-fi landscape": "SF風景",
    // Japanese
    "shinto shrine": "神社", "red torii gate": "赤い鳥居", "stone steps": "石段", "sacred atmosphere": "神聖な雰囲気", "paper lantern": "提灯",
    "autumn leaves": "紅葉", "traditional japan": "日本の伝統", "wooden engawa": "縁側", "japanese garden": "日本庭園", "koi pond": "鯉の池",
    "bamboo pipe": "ししおどし", "drinking tea": "お茶を飲む", "sunny afternoon": "晴れた午後", "summer festival": "夏祭り", "fireworks in sky": "打ち上げ花火",
    "yukata": "浴衣", "stalls": "屋台", "crowd": "人混み", "festive atmosphere": "お祭りの雰囲気", "bamboo forest": "竹林",
    "sunlight filtering through bamboo": "竹林の木漏れ日", "green atmosphere": "緑の雰囲気", "pathway": "小道", "nature": "自然", "quiet": "静か",
    "misty": "霧がかった", "tatami room": "畳の部屋", "shoji screen": "障子", "hanging scroll": "掛け軸", "flower arrangement": "生け花",
    "sunlight patterns": "光の模様", "traditional interior": "伝統的な内装", "seiza": "正座", "ancient battlefield": "古戦場", "broken arrows": "折れた矢",
    "smoke": "煙", "sunset": "夕日", "flags": "旗", "dramatic atmosphere": "ドラマチック", "historical": "歴史的",
    // Fantasy
    "fantasy forest": "ファンタジーの森", "glowing plants": "光る植物", "magic particles": "魔法の粒子", "ancient trees": "古代樹",
    "mysterious": "神秘的", "fairy tale": "おとぎ話", "lush vegetation": "生い茂る植生", "royal palace": "王宮", "throne room": "玉座の間",
    "chandelier": "シャンデリア", "red carpet": "赤絨毯", "marble pillars": "大理石の柱", "luxurious": "豪華な", "gold decorations": "金の装飾",
    "stone dungeon": "ダンジョン", "torch light": "松明", "dark atmosphere": "暗い雰囲気", "cobwebs": "蜘蛛の巣", "stone walls": "石壁",
    "treasure chest": "宝箱", "adventure": "冒険", "danger": "危険", "fantasy tavern": "冒険者ギルド", "wooden tables": "木のテーブル",
    "beer mugs": "ジョッキ", "lively atmosphere": "活気ある雰囲気", "adventurers": "冒険者", "candle light": "蝋燭の光", "fireplace": "暖炉",
    "quest board": "掲示板", "alchemist lab": "魔法研究所", "potions": "ポーション", "scrolls": "巻物", "books": "本", "magic circle": "魔法陣",
    "glowing crystals": "水晶", "cluttered": "散らかった", "floating island": "浮遊島", "castle in the sky": "天空の城", "clouds": "雲",
    "waterfall into void": "奈落の滝", "fantasy landscape": "ファンタジー風景", "dreamy": "夢幻的", "epic scale": "壮大", "ancient ruins": "古代遺跡",
    "overgrown with moss": "苔むした", "broken pillars": "壊れた柱", "stone statues": "石像", "lost civilization": "失われた文明", "sunlight filtering": "木漏れ日",
    // Horror
    "abandoned hospital": "廃病院", "broken windows": "割れた窓", "debris": "瓦礫", "peeling paint": "剥げたペンキ", "wheelchair": "車椅子",
    "creepy corridor": "不気味な廊下", "blood stains": "血痕", "haunted mansion": "お化け屋敷", "dusty": "埃っぽい", "dim candle light": "薄暗い蝋燭",
    "old portraits": "古い肖像画", "thunderstorm outside": "外は嵐", "gothic interior": "ゴシック内装", "graveyard": "墓地", "tombstones": "墓石",
    "fog": "霧", "full moon": "満月", "will-o'-the-wisp": "鬼火", "dead trees": "枯れ木", "blue ambient light": "青い環境光", "spooky": "不気味",
    "ritual chamber": "儀式の間", "red candles": "赤い蝋燭", "skulls": "頭蓋骨", "blood sacrifice": "生贄", "ominous atmosphere": "不穏な空気",
    "stone altar": "石の祭壇", "otherworld": "異界", "red sky": "赤い空", "distorted reality": "歪んだ現実", "floating rocks": "浮遊する岩",
    "blood ocean": "血の海", "surreal": "シュール", "nightmare": "悪夢",
    // Racial
    "in ancient forest": "古代の森", "sitting on tree branch": "木の枝に座る", "surrounded by nature": "自然に囲まれる", "birds": "鳥",
    "peaceful": "平和", "fantasy nature": "ファンタジーな自然", "talking to spirits": "精霊と話す", "glowing wisps": "光るウィスプ",
    "gentle expression": "優しい表情", "magic forest": "魔法の森", "fireflies": "蛍", "night": "夜", "practicing archery": "弓の練習",
    "forest clearing": "森の空き地", "target in distance": "遠くの的", "concentration": "集中", "traditional elf clothes": "エルフの服",
    "descending from sky": "空から降臨", "spread wings": "翼を広げる", "feathers falling": "舞い散る羽", "holy light": "聖なる光",
    "god rays": "ゴッドレイ", "angelic": "天使のような", "divine atmosphere": "神々しい雰囲気", "holding flaming sword": "炎の剣を持つ",
    "flying": "飛行", "looking down": "見下ろす", "stern expression": "厳しい表情", "battlefield below": "眼下の戦場", "judgment": "審判",
    "powerful": "力強い", "kneeling on cloud": "雲に跪く", "praying hands": "祈る手", "closed eyes": "目を閉じる", "halo": "光輪",
    "white dress": "白いドレス", "soft light": "柔らかな光", "sitting on throne": "玉座に座る", "crossing legs": "足を組む",
    "arrogant expression": "傲慢な表情", "wine glass": "ワイングラス", "dark castle": "闇の城", "demon wings": "悪魔の翼", "horns": "角",
    "reaching out hand": "手を伸ばす", "seductive smile": "魅惑的な笑み", "contract scroll": "契約書", "dark aura": "闇のオーラ",
    "glowing eyes": "光る目", "temptation": "誘惑", "flying in night sky": "夜空を飛ぶ", "full moon background": "満月を背景に",
    "bat wings": "コウモリの翼", "city lights below": "眼下の街明かり", "freedom": "自由", "cool pose": "クールなポーズ",
    "crouching in tall grass": "草むらに隠れる", "stalking prey": "獲物を狙う", "animal ears perked": "耳を立てる", "focused eyes": "鋭い眼光",
    "wild nature": "野生", "dynamic pose": "ダイナミックポーズ", "tail wagging": "尻尾を振る", "sleeping on grass": "草の上で寝る",
    "sunshine": "日差し", "relaxed": "リラックス", "curled up": "丸まる", "peaceful face": "安らかな顔", "warm atmosphere": "暖かい雰囲気",
    "fluffy": "モフモフ",
    // Fantasy R-18
    "pointy ears": "尖った耳", "long silver hair": "銀髪ロング", "green eyes": "緑の瞳", "nude": "ヌード", "large breasts": "巨乳",
    "detailed skin": "肌の書き込み", "forest background": "森の背景", "moonlight": "月光", "seductive pose": "誘惑ポーズ", "dark elf": "ダークエルフ",
    "dark skin": "褐色肌", "white hair": "白髪", "collar": "首輪", "leash": "リード", "on all fours": "四つん這い", "doggystyle": "バック",
    "from behind": "後ろから", "sex": "セックス", "slave": "奴隷", "chains": "鎖", "dungeon": "地下牢", "red eyes": "赤い瞳",
    "submission": "服従", "impregnation": "種付け/受精", "creampie": "中出し", "ahegao": "アヘ顔", "heart pupils": "ハート目",
    "cum flowing": "精液垂れ流し", "breeding": "繁殖", "messy body": "汚れた体", "succubus": "サキュバス", "tail": "尻尾",
    "red skin": "赤い肌", "cowgirl position": "騎乗位", "straddling": "跨る", "vaginal": "膣内", "penis in pussy": "挿入",
    "tongue out": "舌出し", "heart-shaped pupils": "ハート目", "draining energy": "精気吸収", "kissing": "キス", "saliva": "唾液",
    "thighs": "太もも", "paizuri": "パイズリ", "titjob": "パイズリ", "cum on face": "顔射", "aphrodisiac": "媚薬", "demon girl": "悪魔娘",
    "contract": "契約", "sitting on lap": "膝に乗る", "whispering": "囁き", "corrupted": "堕落", "fallen angel": "堕天使", "black wings": "黒翼",
    "dragon girl": "ドラゴン娘", "scales": "鱗", "dragon tail": "ドラゴンの尾", "wet skin": "濡れた肌", "intense sex": "激しいセックス",
    "breasts bouncing": "胸揺れ", "moaning": "喘ぎ", "sweat": "汗", "fire background": "炎の背景", "detailed pussy": "詳細な女性器",
    "unicorn girl": "ユニコーン娘", "horn": "角", "pure white skin": "純白の肌", "missionary position": "正常位", "loving sex": "愛のあるセックス",
    "magical aura": "魔法のオーラ", "flower field": "花畑", "virgin": "処女", "slime girl": "スライム娘", "translucent skin": "半透明な肌",
    "liquid body": "液体の体", "melting": "溶ける", "engulfing": "飲み込む", "x-ray": "断面図", "internal view": "体内視点", "blue skin": "青い肌",
    "viscous": "粘液", "witch": "魔女", "black hat": "黒帽子", "thighhighs": "ニーソックス", "open robe": "ローブはだけ", "nude under robe": "ローブの下は裸",
    "magic circle": "魔法陣", "tentacles from portal": "ポータルから触手", "breast grab": "胸を掴む", "pussy penetration": "膣内挿入", "orgasm": "絶頂",
    "glowing runes": "光るルーン", "mind break": "精神崩壊", "hypnosis": "催眠", "magic spell": "魔法", "empty eyes": "虚ろな目",
    "obeying": "服従", "wand": "杖", "magical girl": "魔法少女", "fallen": "堕ちた", "drinking potion": "ポーションを飲む", "heat": "発情",
    "sweaty": "汗だく", "flushed face": "上気した顔", "drooling": "よだれ", "horny": "欲情", "masturbation": "オナニー", "fingering": "指マン",
    "restrained by tentacles": "触手拘束", "tentacle penetration": "触手挿入", "anal": "アナル", "double penetration": "二穴/ダブル",
    "tears of pleasure": "嬉し泣き/快感の涙", "slime": "スライム/粘液", "monster": "モンスター", "orc": "オーク", "goblin": "ゴブリン",
    "giant penis": "巨根", "size difference": "体格差", "forced": "強制", "defeat": "敗北", "crying": "泣く", "stomach bulge": "腹ボテ",
    "mimic": "ミミック", "chest monster": "宝箱モンスター", "trapped": "罠", "vines": "蔦", "living plant": "植物モンスター", "clothes dissolving": "服溶解",
    // New Tentacle specifics
    "translucent tentacles": "半透明の触手", "wrapping around body": "体に巻き付く", "nipple penetration": "乳首責め", "clitoris stimulation": "クリ責め",
    "slime dripping": "粘液が滴る", "glowing blue slime": "光る青い粘液", "mermaid": "人魚", "attacked by kraken": "クラーケンに襲われる",
    "large thick tentacles": "太い触手", "suckers": "吸盤", "deep sea background": "深海の背景", "tentacle in mouth": "イラマチオ(触手)",
    "breast squeeze": "胸揉み", "adventurer": "冒険者", "carnivorous plant": "人食い植物", "vine tentacles": "蔦の触手", "aphrodisiac pollen": "媚薬花粉",
    "spreading legs": "開脚", "flower blooming": "開花", "jungle ruins": "ジャングルの遺跡", "sweat and nectar": "汗と蜜",
    "tentacles emerging from magic portal": "ポータルから触手", "glowing purple tentacles": "光る紫の触手", "levitating": "浮遊",
    "all holes penetrated": "全穴貫通", "breast milking": "搾乳", "excessive cum": "大量射精", "orgasm overload": "絶頂地獄",
    "oviposition": "産卵", "tentacles inserting eggs": "卵挿入", "bulging belly": "腹ボテ", "pleasure pain face": "苦悶と快楽",
    "monster lair": "怪物の巣", "eggs visible": "卵が見える", "stomach deformation": "お腹変形",
    "hundreds of small tentacles": "無数の微細触手", "teasing nipples": "乳首いじり", "urethra play": "尿道責め", "extreme sensitivity": "超感度",
    "squirting": "潮吹き", "continuous orgasm": "連続絶頂", "altar": "祭壇", "offering": "供物",
    "dragon tentacles": "ドラゴン触手", "thick scaled tentacles": "鱗の触手", "cum inflation": "精液注入(膨張)", "fire breath background": "炎のブレス"
  };

  function createSubAccordion(title, items, isSecret) { 
    const details = document.createElement("details"); details.className = "qp-sub-acc"; details.style.marginBottom = "6px"; details.style.border = "1px solid #eee"; details.style.borderRadius = "4px"; details.style.background = "#fff"; details.open = false; 
    const summary = document.createElement("summary"); summary.textContent = title; summary.style.fontWeight = "bold"; summary.style.padding = "6px 10px"; summary.style.cursor = "pointer"; summary.style.background = "#f9f9f9"; 
    
    if(isSecret) summary.style.color = "#d00";

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
      const generalArea = document.getElementById("qp-situations-general-area");
      
      if (generalArea) {
        // Genre
        const groupGenre = document.createElement("details");
        groupGenre.style.cssText = "margin-bottom:8px; border-left:2px solid #ddd; padding-left:8px;"; groupGenre.open = false;
        const sumGenre = document.createElement("summary"); sumGenre.textContent = "🌍 世界観・ジャンル (World & Genre)"; sumGenre.style.fontWeight = "bold"; sumGenre.style.cursor="pointer";
        groupGenre.appendChild(sumGenre);
        const conGenre = document.createElement("div"); groupGenre.appendChild(conGenre);
        Object.entries(GENRE_DATA).forEach(([k,v]) => { conGenre.appendChild(createSubAccordion(k, v)); });
        generalArea.appendChild(groupGenre);

        // Racial
        const groupRacial = document.createElement("details");
        groupRacial.style.cssText = "margin-bottom:8px; border-left:2px solid #ddd; padding-left:8px;"; groupRacial.open = false;
        const sumRacial = document.createElement("summary"); sumRacial.textContent = "🧚‍♀️ 種族・ファンタジーライフ (Racial Life)"; sumRacial.style.fontWeight = "bold"; sumRacial.style.cursor="pointer";
        groupRacial.appendChild(sumRacial);
        const conRacial = document.createElement("div"); groupRacial.appendChild(conRacial);
        Object.entries(RACIAL_DATA).forEach(([k,v]) => { conRacial.appendChild(createSubAccordion(k, v)); });
        generalArea.appendChild(groupRacial);

        // Secret
        if (IS_UNLOCKED) {
          const secretHeader = document.createElement("div");
          secretHeader.style.cssText = "margin:15px 0 5px; color:#d00; font-weight:bold; border-bottom:2px solid #d00; padding-bottom:3px;";
          secretHeader.textContent = "⚠️ R-18 Fantasy & Monster (Adult Only)";
          generalArea.appendChild(secretHeader);
          
          Object.entries(SECRET_FANTASY_DATA).forEach(([k,v]) => { 
            generalArea.appendChild(createSubAccordion(k, v, true)); 
          });
        }
      } else {
        // フォールバック
        const root = document.querySelector(".quality-preset-integrated");
        if(root) {
           Object.entries(GENRE_DATA).forEach(([k,v]) => root.appendChild(createSubAccordion(k, v)));
           Object.entries(RACIAL_DATA).forEach(([k,v]) => root.appendChild(createSubAccordion(k, v)));
           if(IS_UNLOCKED) Object.entries(SECRET_FANTASY_DATA).forEach(([k,v]) => root.appendChild(createSubAccordion(k, v, true)));
        }
      }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

