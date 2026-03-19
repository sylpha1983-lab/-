// Auto-generated bundle for section 'accessories'
// Contains 1 versions stacked in ascending order.

(function(){
// --- builder_ui.section.accessories.v1.js ---
(function(){
  "use strict";

  const VERSION = 1;
  const KEY = "accessories";

  const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  const CATEGORIES = {
    "👒 頭部の装飾・帽子 (Headgear)": {
      items: [
        { ja: "帽子 (ハット)", en: "hat" }, { ja: "キャップ", en: "cap" }, { ja: "ベレー帽", en: "beret" }, { ja: "ニット帽", en: "beanie" }, { ja: "麦わら帽子", en: "straw hat" }, { ja: "サンバイザー", en: "visor" }, { ja: "ヘルメット", en: "helmet" }, { ja: "フード", en: "hood" }, { ja: "リボン (髪飾り)", en: "hair ribbon" }, { ja: "半透明のリボン", en: "translucent ribbon" }, { ja: "カチューシャ", en: "hairband" }, { ja: "シュシュ", en: "scrunchie" }, { ja: "ヘアピン", en: "hairclip" }, { ja: "バレッタ", en: "hair ornament" }, { ja: "羽根の髪飾り", en: "feather hairclip" }, { ja: "花飾り", en: "flower hair ornament" }, { ja: "ティアラ/王冠", en: "crown" }, { ja: "ベール", en: "veil" }, { ja: "ヘッドフォン", en: "headphones" }, { ja: "狐面", en: "fox mask" }, { ja: "マスク", en: "mask" }, { ja: "眼帯", en: "eyepatch" }, { ja: "サングラス", en: "sunglasses" }, { ja: "眼鏡", en: "glasses" }
      ]
    },
    "💎 ジュエリー・装身具 (Jewelry)": {
      items: [
        { ja: "イヤリング/ピアス", en: "earrings" }, { ja: "ネックレス", en: "necklace" }, { ja: "チョーカー", en: "choker" }, { ja: "首輪", en: "collar" }, { ja: "指輪", en: "ring" }, { ja: "ブレスレット", en: "bracelet" }, { ja: "腕時計", en: "wristwatch" }, { ja: "ブローチ", en: "brooch" }, { ja: "真珠 (パール)", en: "pearls" }, { ja: "宝石", en: "gemstone" }, { ja: "ボディピアス", en: "body piercing" }, { ja: "ネイルアート", en: "nail art" }
      ]
    },
    "🧣 服飾小物・背部 (Clothing Acc)": {
      items: [
        { ja: "ネクタイ", en: "necktie" }, { ja: "蝶ネクタイ", en: "bowtie" }, { ja: "スカーフ/マフラー", en: "scarf" }, { ja: "手袋 (グローブ)", en: "gloves" }, { ja: "ベルト", en: "belt" }, { ja: "ガーターベルト", en: "garter belt" }, { ja: "リュックサック", en: "backpack" }, { ja: "カバン/バッグ", en: "bag" }, { ja: "ショルダーバッグ", en: "shoulder bag" }, { ja: "トートバッグ", en: "tote bag" }, { ja: "翼 (ウィング)", en: "wings" }, { ja: "悪魔の翼", en: "demon wings" }, { ja: "天使の翼", en: "angel wings" }, { ja: "マント/ケープ", en: "cape" }, { ja: "尻尾", en: "tail" }
      ]
    },
    "🧸 手持ち・ぬいぐるみ (Handheld)": {
      isTarget: true,
      items: [
        { ja: "ぬいぐるみ", en: "stuffed toy" }, { ja: "くまのぬいぐるみ", en: "teddy bear" }, { ja: "うさぎのぬいぐるみ", en: "stuffed bunny" }, { ja: "シマエナガのぬいぐるみ", en: "white head Shima-enaga bushtit plush" }, { ja: "スマホ", en: "smartphone" }, { ja: "本/魔導書", en: "book" }, { ja: "手紙/ラブレター", en: "letter" }, { ja: "花束", en: "bouquet" }, { ja: "一輪の花", en: "flower" }, { ja: "傘 (アンブレラ)", en: "umbrella" }, { ja: "日傘 (パラソル)", en: "parasol" }, { ja: "扇子", en: "folding fan" }, { ja: "うちわ", en: "hand fan" }, { ja: "風船", en: "balloon" }, { ja: "ランタン", en: "lantern" }, { ja: "懐中電灯", en: "flashlight" }, { ja: "カメラ", en: "camera" }
      ]
    },
    // --- 武器・食べ物（オリジナルの全データをここに保持） ---
    "⚔️ 武器・兵器 / 各種武器 / 近接武器（剣・短剣・斧・槌・鎌）": { isTarget: true, items: [{ ja: "剣 (ソード)", en: "sword" }, { ja: "刀 (カタナ)", en: "katana" }, { ja: "太刀", en: "tachi" }, { ja: "脇差", en: "wakizashi" }, { ja: "短刀", en: "tanto" }, { ja: "大太刀", en: "odachi" }, { ja: "野太刀", en: "nodachi" }, { ja: "忍者刀", en: "ninjato" }, { ja: "短剣 (ダガー)", en: "dagger" }, { ja: "大剣", en: "greatsword" }, { ja: "斧 (アックス)", en: "axe" }, { ja: "ハンマー", en: "hammer" }, { ja: "ウォーハンマー", en: "warhammer" }, { ja: "モール", en: "maul weapon" }, { ja: "メイス", en: "mace weapon" }, { ja: "モーニングスター", en: "morning star weapon" }, { ja: "フレイル", en: "flail" }, { ja: "鎌 (サイズ)", en: "scythe" }, { ja: "ウォーサイズ", en: "war scythe" }, { ja: "コンバットナイフ", en: "combat knife" }, { ja: "バヨネット", en: "bayonet" }, { ja: "儀礼剣", en: "ritual blade" }, { ja: "儀式用斧", en: "ceremonial axe" }, { ja: "象徴剣", en: "symbolic sword" }] },
    "⚔️ 武器・兵器 / 各種武器 / 長柄武器（槍・薙刀・ポールアーム）": { isTarget: true, items: [{ ja: "槍 (スピア)", en: "spear" }, { ja: "槍", en: "yari" }, { ja: "長槍", en: "long yari" }, { ja: "十文字槍", en: "jumonji yari" }, { ja: "鎌槍", en: "kama yari" }, { ja: "薙刀", en: "naginata" }, { ja: "トライデント", en: "trident" }, { ja: "ハルバード", en: "halberd" }, { ja: "グレイブ", en: "glaive" }, { ja: "ポールアーム", en: "polearm" }, { ja: "ポールアックス", en: "poleaxe" }, { ja: "神官の槍", en: "cleric spear" }, { ja: "牙の槍", en: "fang spear" }, { ja: "プラズマランス", en: "plasma lance" }] },
    "⚔️ 武器・兵器 / 各種武器 / 弓・クロスボウ・射出": { isTarget: true, items: [{ ja: "弓 (ボウ)", en: "bow weapon" }, { ja: "和弓", en: "yumi bow" }, { ja: "矢", en: "arrow" }, { ja: "矢（複数）", en: "arrows" }, { ja: "クロスボウ用クランク", en: "crossbow crank" }, { ja: "投槍器", en: "atlatl" }, { ja: "スリングスタッフ", en: "sling staff" }, { ja: "ネットランチャー", en: "net launcher" }, { ja: "吹き矢", en: "blowgun" }] },
    "⚔️ 武器・兵器 / 各種武器 / 投擲武器": { isTarget: true, items: [{ ja: "チャクラム", en: "chakram" }, { ja: "投擲円盤", en: "throwing disc" }, { ja: "ブーメラン", en: "boomerang" }, { ja: "ダーツ", en: "darts" }, { ja: "投げナイフ", en: "throwing knife" }, { ja: "投げ針", en: "throwing needle" }, { ja: "スリング", en: "sling" }, { ja: "投げ斧", en: "throwing axe" }, { ja: "投げ槍", en: "throwing spear" }, { ja: "投げハンマー", en: "throwing hammer" }, { ja: "分銅鎖", en: "weighted chain" }, { ja: "ボーラ", en: "bola weapon" }] },
    "⚔️ 武器・兵器 / 各種武器 / 鞭・ロッド・バトン": { isTarget: true, items: [{ ja: "鞭", en: "whip" }, { ja: "ロングウィップ", en: "long whip" }, { ja: "ショートウィップ", en: "short whip" }, { ja: "レザーウィップ", en: "leather whip" }, { ja: "チェーンウィップ", en: "chain whip" }, { ja: "茨の鞭", en: "thorn whip" }, { ja: "蔦の鞭", en: "vine whip" }, { ja: "植物の鞭", en: "plant whip" }, { ja: "触手鞭", en: "tentacle whip" }, { ja: "生体鞭", en: "living whip" }, { ja: "骨の鞭", en: "bone whip" }, { ja: "電気鞭", en: "electric whip" }, { ja: "雷鞭", en: "lightning whip" }, { ja: "炎の鞭", en: "flame whip" }, { ja: "氷の鞭", en: "ice whip" }, { ja: "闇の鞭", en: "dark whip" }, { ja: "光の鞭", en: "holy whip" }, { ja: "エネルギーウィップ", en: "energy whip" }, { ja: "プラズマウィップ", en: "plasma whip" }, { ja: "レーザーウィップ", en: "laser whip" }, { ja: "ヒートロッド", en: "heat rod" }, { ja: "スタンロッド", en: "stun rod" }, { ja: "電撃バトン", en: "electric baton" }, { ja: "警棒", en: "baton" }, { ja: "拘束バトン", en: "control baton" }] },
    "⚔️ 武器・兵器 / 各種武器 / 盾・防具系": { isTarget: true, items: [{ ja: "盾 (シールド)", en: "shield" }, { ja: "タクティカルシールド", en: "tactical shield" }] },
    "⚔️ 武器・兵器 / 各種武器 / 銃火器": { isTarget: true, items: [{ ja: "銃 (ガン)", en: "gun" }, { ja: "ライフル", en: "rifle" }, { ja: "二丁拳銃", en: "dual guns" }, { ja: "ピストル", en: "pistol" }, { ja: "リボルバー", en: "revolver" }, { ja: "自動拳銃", en: "automatic handgun" }, { ja: "アサルトライフル", en: "assault rifle" }, { ja: "バトルライフル", en: "battle rifle" }, { ja: "カービンライフル", en: "carbine rifle" }, { ja: "スナイパーライフル", en: "sniper rifle" }, { ja: "マークスマンライフル", en: "marksman rifle" }, { ja: "ショットガン", en: "shotgun" }, { ja: "サブマシンガン", en: "submachine gun" }, { ja: "ライトマシンガン", en: "light machine gun" }, { ja: "スタンライフル", en: "stun rifle" }] },
    "⚔️ 武器・兵器 / 各種武器 / SF武器（エネルギー・レール系）": { isTarget: true, items: [{ ja: "レーザーソード", en: "laser sword" }, { ja: "ライトセーバー", en: "lightsaber" }, { ja: "エネルギーブレード", en: "energy blade" }, { ja: "プラズマソード", en: "plasma sword" }, { ja: "レーザーライフル", en: "laser rifle" }, { ja: "プラズマライフル", en: "plasma rifle" }, { ja: "レールガン", en: "railgun" }, { ja: "ガウスライフル", en: "gauss rifle" }, { ja: "パルスライフル", en: "pulse rifle" }, { ja: "パルスキャノン", en: "pulse cannon" }] },
    "⚔️ 武器・兵器 / 各種武器 / 罠・拘束（非エロ）": { isTarget: true, items: [{ ja: "罠網", en: "net trap" }, { ja: "捕獲ネット", en: "capture net" }, { ja: "投網", en: "throwing net" }, { ja: "拘束ロープ", en: "binding rope" }, { ja: "拘束チェーン", en: "binding chain" }, { ja: "捕縛具", en: "restraint device" }, { ja: "捕獲用ケーブル", en: "capture cable" }, { ja: "スネアトラップ", en: "snare trap" }, { ja: "ワイヤートラップ", en: "wire trap" }, { ja: "落とし穴", en: "pitfall trap" }, { ja: "スパイクトラップ", en: "spike trap" }, { ja: "拘束プレート", en: "restraining plate" }, { ja: "捕獲罠", en: "hunting trap" }, { ja: "足くくり罠", en: "foot snare" }, { ja: "熊罠", en: "bear trap" }, { ja: "落石罠", en: "rockfall trap" }, { ja: "拘束フィールド", en: "containment field" }, { ja: "スタンネット", en: "stun net" }, { ja: "拘束ドローン", en: "capture drone" }, { ja: "拘束装置", en: "containment device" }, { ja: "グラップリングフック", en: "grappling hook" }, { ja: "捕獲フック", en: "capture hook" }, { ja: "投げ縄", en: "lasso" }, { ja: "電磁ネット", en: "electromagnetic net" }] },
    "⚔️ 武器・兵器 / 各種武器 / 攻城兵器": { isTarget: true, items: [{ ja: "バリスタ", en: "ballista" }, { ja: "投石機", en: "catapult" }, { ja: "トレビュシェット", en: "trebuchet" }, { ja: "破城槌", en: "battering ram" }, { ja: "攻城塔", en: "siege tower" }, { ja: "移動式盾", en: "mantlet" }, { ja: "火炎投射器（古代）", en: "ancient flamethrower" }, { ja: "投槍機", en: "scorpion siege weapon" }] },
    "⚔️ 武器・兵器 / 各種武器 / 魔法・儀式・特殊": { isTarget: true, items: [{ ja: "魔法の杖", en: "magic staff" }, { ja: "王権の杖", en: "scepter weapon" }, { ja: "骨の武器", en: "bone weapon" }, { ja: "結晶剣", en: "crystal blade" }, { ja: "黒曜石の刃", en: "obsidian blade" }, { ja: "有機的武器", en: "organic weapon" }] },
    "⚔️ 武器・兵器 / 各種武器 / 忍具・格闘武器": { isTarget: true, items: [{ ja: "手裏剣", en: "shuriken" }, { ja: "クナイ", en: "kunai" }, { ja: "鎖鎌", en: "kusarigama" }, { ja: "サイ", en: "sai" }, { ja: "ヌンチャク", en: "nunchaku" }] },
    "⚔️ 武器・兵器 / 武器の外観・状態 / 外観・状態タグ": { isTarget: true, items: [{ ja: "新品の武器", en: "brand-new weapon" }, { ja: "使い込まれた武器", en: "well-worn weapon" }, { ja: "古びた武器", en: "old weapon" }, { ja: "錆びた武器", en: "rusty weapon" }, { ja: "破損した武器", en: "damaged weapon" }, { ja: "折れた武器", en: "broken weapon" }, { ja: "修理された武器", en: "repaired weapon" }, { ja: "欠けた刃", en: "chipped blade" }, { ja: "刃こぼれした武器", en: "dulled blade" }, { ja: "装飾過多の武器", en: "ornate weapon" }, { ja: "彫刻入りの武器", en: "engraved weapon" }, { ja: "宝石装飾の武器", en: "jeweled weapon" }, { ja: "金装飾の武器", en: "gold-trimmed weapon" }, { ja: "銀装飾の武器", en: "silver-inlaid weapon" }, { ja: "豪華な柄の武器", en: "luxurious hilt" }, { ja: "精巧な武器", en: "finely crafted weapon" }, { ja: "古代の武器", en: "ancient weapon" }, { ja: "伝説の武器", en: "legendary weapon" }, { ja: "王家の武器", en: "royal weapon" }, { ja: "儀式用の武器", en: "ceremonial weapon" }, { ja: "聖なる武器", en: "sacred weapon" }, { ja: "呪われた武器", en: "cursed weapon" }, { ja: "禁断の武器", en: "forbidden weapon" }, { ja: "炎を帯びた武器", en: "flaming weapon" }, { ja: "氷属性の武器", en: "ice-infused weapon" }, { ja: "雷属性の武器", en: "lightning-infused weapon" }, { ja: "闇の武器", en: "dark weapon" }, { ja: "光の武器", en: "holy weapon" }, { ja: "エネルギー武器", en: "energy weapon" }, { ja: "発光する武器", en: "glowing weapon" }, { ja: "血痕のある武器", en: "bloodstained weapon" }, { ja: "煤けた武器", en: "soot-covered weapon" }, { ja: "焦げ跡のある武器", en: "scorched weapon" }, { ja: "戦場で汚れた武器", en: "battle-worn weapon" }] },
    "🍱 食べ物・飲み物 / 🌍 世界観別フード / 🍞 日常食": { icon: "🍞", items: [{ ja: "食パン", en: "sliced bread" }, { ja: "トースト", en: "toast" }, { ja: "バゲット", en: "baguette" }, { ja: "クロワッサン", en: "croissant" }, { ja: "ベーグル", en: "bagel" }, { ja: "サンドイッチ", en: "sandwich" }, { ja: "ハムサンド", en: "ham sandwich" }, { ja: "卵サンド", en: "egg sandwich" }, { ja: "サラダ", en: "salad" }, { ja: "シーザーサラダ", en: "caesar salad" }, { ja: "スープ", en: "soup" }, { ja: "野菜スープ", en: "vegetable soup" }, { ja: "チキンスープ", en: "chicken soup" }, { ja: "クラムチャウダー", en: "clam chowder" }, { ja: "シチュー", en: "stew" }, { ja: "カレーライス", en: "curry rice" }, { ja: "オムレツ", en: "omelet" }, { ja: "スクランブルエッグ", en: "scrambled eggs" }, { ja: "目玉焼き", en: "fried egg" }, { ja: "ベーコン", en: "bacon" }, { ja: "ソーセージ", en: "sausage" }, { ja: "ポテトサラダ", en: "potato salad" }, { ja: "フルーツ盛り合わせ", en: "fruit platter" }, { ja: "フルーツサラダ", en: "fruit salad" }, { ja: "リンゴ", en: "apple" }, { ja: "バナナ", en: "banana" }, { ja: "オレンジ", en: "orange" }, { ja: "ぶどう", en: "grapes" }, { ja: "いちご", en: "strawberries" }, { ja: "ヨーグルト", en: "yogurt" }, { ja: "シリアル", en: "cereal" }, { ja: "グラノーラ", en: "granola" }, { ja: "パンケーキ", en: "pancakes" }, { ja: "ワッフル", en: "waffles" }, { ja: "マフィン", en: "muffin" }, { ja: "クッキー", en: "cookies" }, { ja: "チョコレート", en: "chocolate" }, { ja: "お弁当", en: "bento lunch" }, { ja: "ランチボックス", en: "lunch box" }, { ja: "おにぎり弁当", en: "onigiri bento" }, { ja: "ポテトフライ", en: "french fries" }, { ja: "コロッケ", en: "croquette" }, { ja: "ハンバーグ", en: "hamburger steak" }, { ja: "ピザトースト", en: "pizza toast" }] },
    "🍱 食べ物・飲み物 / 🌍 世界観別フード / 🍢 屋台・酒場": { icon: "🍢", items: [{ ja: "串焼き", en: "skewered meat" }, { ja: "焼き鳥", en: "yakitori" }, { ja: "ソーセージ", en: "sausage" }, { ja: "串団子", en: "dango skewer" }, { ja: "串魚", en: "grilled fish skewer" }, { ja: "煮込み", en: "stew" }, { ja: "シチュー", en: "stewed dish" }, { ja: "ポトフ", en: "pot-au-feu" }, { ja: "おでん", en: "oden" }, { ja: "黒パン", en: "dark bread" }, { ja: "丸パン", en: "round bread" }, { ja: "パンとスープ", en: "bread and soup" }, { ja: "シチューパン", en: "bread with stew" }, { ja: "ロースト肉", en: "roasted meat" }, { ja: "チーズ", en: "cheese" }, { ja: "干し肉", en: "dried meat" }, { ja: "ナッツ盛り", en: "assorted nuts" }] },
    "🍱 食べ物・飲み物 / 🌍 世界観別フード / 🧪 ファンタジー食": { icon: "🧪", items: [{ ja: "魔獣肉", en: "magical beast meat" }, { ja: "妖精果実", en: "fairy fruit" }, { ja: "エルフパン", en: "elf bread" }, { ja: "ドワーフシチュー", en: "dwarf stew" }, { ja: "魔導チーズ", en: "arcane cheese" }, { ja: "古代穀物", en: "ancient grain" }, { ja: "聖樹の実", en: "sacred tree fruit" }, { ja: "幻獣卵", en: "mythic beast egg" }, { ja: "魔力茸", en: "mana mushroom" }, { ja: "錬金スープ", en: "alchemy soup" }, { ja: "星屑砂糖", en: "stardust sugar" }, { ja: "月光蜂蜜", en: "moonlight honey" }, { ja: "深海藻", en: "abyssal seaweed" }, { ja: "霊泉水", en: "spirit spring water" }, { ja: "魔法スープ", en: "magical soup" }, { ja: "謎肉", en: "mystery meat" }, { ja: "発光果実", en: "glowing fruit" }, { ja: "錬金パン", en: "alchemy bread" }, { ja: "魔力飴", en: "mana candy" }, { ja: "スライムゼリー", en: "slime jelly" }, { ja: "竜肉", en: "dragon meat" }, { ja: "フェニックス卵", en: "phoenix egg" }, { ja: "妖精蜜", en: "fairy honey" }, { ja: "エルフワイン", en: "elf wine" }, { ja: "ドワーフエール", en: "dwarf ale" }, { ja: "ポーション", en: "potion" }, { ja: "エリクサー", en: "elixir" }, { ja: "マナポーション", en: "mana potion" }, { ja: "回復薬", en: "healing potion" }, { ja: "強化薬", en: "strength potion" }, { ja: "解毒薬", en: "antidote" }, { ja: "魔素水", en: "mana water" }, { ja: "錬金チーズ", en: "alchemy cheese" }, { ja: "魔導ビスケット", en: "arcane biscuit" }, { ja: "ルーンパン", en: "rune bread" }, { ja: "魔石糖", en: "mana crystal sugar" }, { ja: "星屑塩", en: "stardust salt" }, { ja: "月光砂糖", en: "moonlight sugar" }, { ja: "火竜香辛料", en: "fire dragon spice" }, { ja: "氷竜香辛料", en: "ice dragon spice" }, { ja: "ゴブリンシチュー", en: "goblin stew" }, { ja: "オークソーセージ", en: "orc sausage" }, { ja: "グリフォンステーキ", en: "griffin steak" }, { ja: "クラーケン干物", en: "kraken jerky" }, { ja: "ユニコーンミルク", en: "unicorn milk" }, { ja: "マンドラゴラ根", en: "mandrake root" }, { ja: "エーテル茶", en: "aether tea" }, { ja: "霊薬", en: "spirit elixir" }, { ja: "聖餐パン", en: "sacrament bread" }, { ja: "悪魔香辛料", en: "demon spice" }, { ja: "魔界チョコ", en: "nether chocolate" }, { ja: "古代米", en: "ancient rice" }, { ja: "結晶果実", en: "crystal fruit" }, { ja: "幻獣バター", en: "chimera butter" }] },
    "🍱 食べ物・飲み物 / 🌍 世界観別フード / 🚀 SF・未来食": { icon: "🚀", items: [{ ja: "合成肉", en: "synthetic meat" }, { ja: "培養肉", en: "cultured meat" }, { ja: "栄養ブロック", en: "nutrition block" }, { ja: "完全食", en: "complete meal" }, { ja: "ナノフード", en: "nano food" }, { ja: "分子料理", en: "molecular cuisine" }, { ja: "宇宙食", en: "space food" }, { ja: "凍結乾燥食", en: "freeze-dried food" }, { ja: "カプセル食", en: "capsule food" }, { ja: "ゲル食", en: "gel food" }, { ja: "ペースト食", en: "paste food" }, { ja: "高密度栄養食", en: "high-density ration" }, { ja: "量子スナック", en: "quantum snack" }, { ja: "バイオスープ", en: "bio soup" }, { ja: "人工果実", en: "artificial fruit" }, { ja: "合成果汁", en: "synthetic juice" }, { ja: "プロテインペレット", en: "protein pellets" }, { ja: "エネルギーバー", en: "energy bar" }, { ja: "冷凍栄養食", en: "frozen ration" }] },
    "🍱 食べ物・飲み物 / 🌍 世界観別フード / 🪖 戦場・終末食": { icon: "🪖", items: [{ ja: "干し肉", en: "dried meat" }, { ja: "塩漬け肉", en: "salted meat" }, { ja: "黒パン", en: "dark bread" }, { ja: "乾燥パン", en: "dried bread" }, { ja: "クラッカー", en: "hard cracker" }, { ja: "乾燥チーズ", en: "dried cheese" }, { ja: "ナッツ", en: "nuts" }, { ja: "豆類", en: "dried beans" }, { ja: "スープ粉末", en: "soup powder" }, { ja: "乾燥スープ", en: "dried soup" }, { ja: "簡易シチュー", en: "simple stew" }, { ja: "軍用レーション", en: "military ration" }, { ja: "保存食", en: "preserved food" }, { ja: "乾パン", en: "hardtack" }, { ja: "缶詰", en: "canned food" }, { ja: "乾燥肉", en: "dried meat" }, { ja: "燻製肉", en: "smoked meat" }, { ja: "携行食", en: "field ration" }, { ja: "非常食", en: "emergency food" }, { ja: "代用食", en: "substitute food" }, { ja: "合成食", en: "synthetic ration" }, { ja: "高栄養食", en: "high-nutrition ration" }, { ja: "粉末食", en: "powdered food" }, { ja: "圧縮食", en: "compressed food" }, { ja: "栄養ペースト", en: "nutrition paste" }, { ja: "放射線食", en: "irradiated food" }, { ja: "汚染食", en: "contaminated food" }, { ja: "終末スープ", en: "apocalypse soup" }, { ja: "地下農産物", en: "underground produce" }, { ja: "菌類食", en: "fungal food" }, { ja: "再生食", en: "recycled food" }] },
    "🍱 食べ物・飲み物 / 🍽️ 料理ジャンル別 / 🍜 和食": { icon: "🍜", items: [{ ja: "ご飯", en: "steamed rice" }, { ja: "おにぎり", en: "rice ball" }, { ja: "お茶漬け", en: "ochazuke" }, { ja: "卵かけご飯", en: "rice with raw egg" }, { ja: "ラーメン", en: "ramen" }, { ja: "うどん", en: "udon noodles" }, { ja: "そば", en: "soba noodles" }, { ja: "焼きそば", en: "yakisoba" }, { ja: "寿司", en: "sushi" }, { ja: "刺身", en: "sashimi" }, { ja: "海鮮丼", en: "seafood rice bowl" }, { ja: "天ぷら", en: "tempura" }, { ja: "唐揚げ", en: "fried chicken karaage" }, { ja: "焼き鳥", en: "yakitori" }, { ja: "おでん", en: "oden" }, { ja: "味噌汁", en: "miso soup" }, { ja: "豚汁", en: "pork miso soup" }, { ja: "団子", en: "dango" }, { ja: "大福", en: "daifuku mochi" }, { ja: "たい焼き", en: "taiyaki" }] },
    "🍱 食べ物・飲み物 / 🍽️ 料理ジャンル別 / 🍖 洋食": { icon: "🍖", items: [{ ja: "ステーキ", en: "steak" }, { ja: "ハンバーガー", en: "hamburger" }, { ja: "ホットドッグ", en: "hot dog" }, { ja: "ローストビーフ", en: "roast beef" }, { ja: "グリルチキン", en: "grilled chicken" }, { ja: "ビーフシチュー", en: "beef stew" }, { ja: "シーフードグラタン", en: "seafood gratin" }, { ja: "ラザニア", en: "lasagna" }, { ja: "スパゲッティ", en: "spaghetti" }, { ja: "カルボナーラ", en: "carbonara" }, { ja: "ミートソース", en: "meat sauce pasta" }, { ja: "ピザ", en: "pizza" }, { ja: "マルゲリータ", en: "margherita pizza" }, { ja: "リゾット", en: "risotto" }, { ja: "オムライス", en: "omelette rice" }, { ja: "ドリア", en: "doria" }, { ja: "グリルソーセージ", en: "grilled sausage" }, { ja: "ポークチョップ", en: "pork chop" }, { ja: "チキンカツ", en: "chicken cutlet" }, { ja: "ビーフカツ", en: "beef cutlet" }, { ja: "えびフライ", en: "fried shrimp" }, { ja: "アジフライ", en: "fried horse mackerel" }, { ja: "白身魚フライ", en: "fried white fish" }, { ja: "カキフライ", en: "fried oyster" }, { ja: "イカフライ", en: "fried squid" }, { ja: "ホタテフライ", en: "fried scallop" }, { ja: "チキンフライ", en: "fried chicken cutlet" }, { ja: "ポークフライ", en: "fried pork cutlet" }, { ja: "ビーフフライ", en: "fried beef cutlet" }] },
    "🍱 食べ物・飲み物 / 🍽️ 料理ジャンル別 / 🥟 中華": { icon: "🥟", items: [{ ja: "麻婆豆腐", en: "mapo tofu" }, { ja: "酢豚", en: "sweet and sour pork" }, { ja: "回鍋肉", en: "twice-cooked pork" }, { ja: "青椒肉絲", en: "stir-fried pork with green pepper" }, { ja: "八宝菜", en: "mixed vegetables stir-fry" }, { ja: "餃子", en: "dumplings" }, { ja: "焼売", en: "shumai" }, { ja: "小籠包", en: "xiaolongbao" }, { ja: "春巻き", en: "spring rolls" }, { ja: "肉まん", en: "steamed pork bun" }, { ja: "あんまん", en: "steamed sweet bean bun" }, { ja: "中華粥", en: "rice porridge" }, { ja: "チャーハン", en: "fried rice" }, { ja: "天津飯", en: "tenshinhan" }, { ja: "中華そば", en: "chinese noodles" }, { ja: "担々麺", en: "tantanmen" }, { ja: "酸辣湯", en: "hot and sour soup" }, { ja: "杏仁豆腐", en: "almond tofu" }, { ja: "ごま団子", en: "sesame balls" }] },
    "🍱 食べ物・飲み物 / 🍽️ 料理ジャンル別 / 🍔 ジャンクフード": { icon: "🍔", items: [{ ja: "フライドポテト", en: "french fries" }, { ja: "ナゲット", en: "chicken nuggets" }, { ja: "オニオンリング", en: "onion rings" }, { ja: "チリドッグ", en: "chili dog" }, { ja: "チーズバーガー", en: "cheeseburger" }, { ja: "ベーコンバーガー", en: "bacon burger" }, { ja: "フィッシュバーガー", en: "fish burger" }, { ja: "ピザスライス", en: "pizza slice" }, { ja: "タコス", en: "tacos" }, { ja: "ブリトー", en: "burrito" }, { ja: "ケサディーヤ", en: "quesadilla" }, { ja: "ポテトチップス", en: "potato chips" }, { ja: "コーンチップス", en: "corn chips" }, { ja: "チーズナチョス", en: "cheese nachos" }, { ja: "ホットサンド", en: "hot sandwich" }, { ja: "ミートパイ", en: "meat pie" }, { ja: "ソーセージロール", en: "sausage roll" }, { ja: "フライドチキン", en: "fried chicken" }, { ja: "ポップコーン", en: "popcorn" }] },
    "🍱 食べ物・飲み物 / 🍽️ 料理ジャンル別 / 🍰 デザート": { icon: "🍰", items: [{ ja: "ジェラート", en: "gelato" }, { ja: "フローズンヨーグルト", en: "frozen yogurt" }, { ja: "アイスキャンディー", en: "ice pop" }, { ja: "アイスバー", en: "ice bar" }, { ja: "アイスサンド", en: "ice cream sandwich" }, { ja: "かき氷", en: "shaved ice" }, { ja: "フローズンフルーツ", en: "frozen fruit" }, { ja: "グラニテ", en: "granita" }, { ja: "セミフレッド", en: "semifreddo" }, { ja: "フローズンケーキ", en: "frozen cake" }, { ja: "アイスモナカ", en: "ice cream monaka" }, { ja: "フローズンカスタード", en: "frozen custard" }, { ja: "フローズンムース", en: "frozen mousse" }, { ja: "羊羹", en: "yokan" }, { ja: "水羊羹", en: "mizu yokan" }, { ja: "最中", en: "monaka" }, { ja: "大福", en: "daifuku" }, { ja: "いちご大福", en: "strawberry daifuku" }, { ja: "柏餅", en: "kashiwa mochi" }, { ja: "草餅", en: "kusa mochi" }, { ja: "わらび餅", en: "warabi mochi" }, { ja: "ういろう", en: "uiro" }, { ja: "きんつば", en: "kintsuba" }, { ja: "練り切り", en: "nerikiri" }, { ja: "落雁", en: "rakugan" }, { ja: "饅頭", en: "manju" }, { ja: "桜餅", en: "sakura mochi" }, { ja: "ショートケーキ", en: "shortcake" }, { ja: "チョコレートケーキ", en: "chocolate cake" }, { ja: "チーズケーキ", en: "cheesecake" }, { ja: "モンブラン", en: "mont blanc" }, { ja: "ロールケーキ", en: "roll cake" }, { ja: "パンケーキ", en: "pancakes" }, { ja: "ワッフル", en: "waffles" }, { ja: "ドーナツ", en: "donuts" }, { ja: "マカロン", en: "macarons" }, { ja: "シュークリーム", en: "cream puff" }, { ja: "プリン", en: "pudding" }, { ja: "ティラミス", en: "tiramisu" }, { ja: "ババロア", en: "bavarois" }, { ja: "ムース", en: "mousse" }, { ja: "ゼリー", en: "jelly" }, { ja: "フルーツタルト", en: "fruit tart" }, { ja: "アップルパイ", en: "apple pie" }, { ja: "チェリーパイ", en: "cherry pie" }, { ja: "ブラウニー", en: "brownie" }, { ja: "クッキー", en: "cookies" }, { ja: "アイスクリーム", en: "ice cream" }, { ja: "ソフトクリーム", en: "soft serve" }, { ja: "シャーベット", en: "sorbet" }, { ja: "パフェ", en: "parfait" }, { ja: "あんみつ", en: "anmitsu" }, { ja: "たい焼き", en: "taiyaki" }, { ja: "どら焼き", en: "dorayaki" }] },
    "🍱 食べ物・飲み物 / 🥤 飲み物 / カフェ・甘味": { icon: "☕", items: [{ ja: "カフェラテ", en: "caffe latte" }, { ja: "カプチーノ", en: "cappuccino" }, { ja: "エスプレッソ", en: "espresso" }, { ja: "アメリカーノ", en: "americano" }, { ja: "カフェモカ", en: "cafe mocha" }, { ja: "キャラメルラテ", en: "caramel latte" }, { ja: "バニララテ", en: "vanilla latte" }, { ja: "抹茶ラテ", en: "matcha latte" }, { ja: "チャイ", en: "chai" }, { ja: "ミルクティー", en: "milk tea" }, { ja: "タピオカミルクティー", en: "bubble milk tea" }, { ja: "ココア", en: "cocoa" }, { ja: "ホットチョコレート", en: "hot chocolate" }, { ja: "フラッペ", en: "frappe" }, { ja: "シェイク", en: "milkshake" }, { ja: "スムージー", en: "smoothie" }, { ja: "フルーツスムージー", en: "fruit smoothie" }, { ja: "ヨーグルトドリンク", en: "yogurt drink" }, { ja: "フロート", en: "float" }, { ja: "コーラフロート", en: "cola float" }, { ja: "クリームソーダ", en: "cream soda" }] },
    "🎸 音楽・趣味・その他 (Hobbies)": { isTarget: true, items: [{ ja: "マイク", en: "microphone" }, { ja: "ギター", en: "guitar" }, { ja: "ベース", en: "bass guitar" }, { ja: "ヴァイオリン", en: "violin" }, { ja: "ドラムスティック", en: "drumsticks" }, { ja: "スケッチブック", en: "sketchbook" }, { ja: "筆/ブラシ", en: "paintbrush" }, { ja: "パレット", en: "palette" }, { ja: "ゲームコントローラー", en: "game controller" }, { ja: "トランプ", en: "playing cards" }, { ja: "タバコ", en: "cigarette" }, { ja: "キセル", en: "kiseru" }] },
    "🤲 アイテムの状態・動作 / 🤝 保持・提示": {
      isAction: true,
      items: [
        { ja: "手に持つ (基本)", en: "holding" },
        { ja: "両手で持つ", en: "holding with both hands" },
        { ja: "握りしめる (強く)", en: "gripping" },
        { ja: "抱きしめる (ハグ)", en: "hugging" },
        { ja: "抱える (腕に)", en: "carrying" },
        { ja: "差し出す", en: "offering" },
        { ja: "見せる", en: "showing" },
        { ja: "落とす", en: "dropping" },
        { ja: "拾う", en: "picking up" }
      ]
    },
    "🤲 アイテムの状態・動作 / 🍽 食事・口元": {
      isAction: true,
      items: [
        { ja: "口にくわえる", en: "in mouth" },
        { ja: "噛む/かじりつく", en: "biting" },
        { ja: "舐める", en: "licking" },
        { ja: "食べる", en: "eating" },
        { ja: "飲む", en: "drinking" },
        { ja: "手掴みで食べる", en: "eating with hands" },
        { ja: "指でつまんで食べる", en: "eating with fingers" },
        { ja: "箸で食べる", en: "eating with chopsticks" },
        { ja: "フォークで食べる", en: "eating with fork" },
        { ja: "スプーンで食べる", en: "eating with spoon" },
        { ja: "ナイフとフォークで食べる", en: "eating with knife and fork" }
      ]
    },
    "🤲 アイテムの状態・動作 / 👒 装着・配置": {
      isAction: true,
      items: [
        { ja: "背負う", en: "on back" },
        { ja: "腰に下げる", en: "on belt" },
        { ja: "頭に乗せる", en: "on head" },
        { ja: "ポケットに入れる", en: "in pocket" }
      ]
    },
    // 食感・食材系も保持
    "🍱 食べ物・飲み物 / 🍴 食感・質感 / 🔥 焼き・揚げ": { icon: "🔥", items: [{ ja: "サクサク", en: "crispy" }, { ja: "カリカリ", en: "crunchy" }, { ja: "ジューシー", en: "juicy" }] },
    "🍱 食べ物・飲み物 / 🥩 食材 / 🥩 肉": { icon: "🥩", items: [{ ja: "ソーセージ串", en: "sausage skewer" }, { ja: "骨付き肉", en: "bone-in meat" }, { ja: "漫画肉", en: "manga meat" }] }
  };

  // 🔒 シークレット表示：R-18 アクセサリー
  const SECRET_CATEGORIES = {
    "🧸 R-18: おもちゃ・アイテム (Adult Toys)": {
      isTarget: true,
      items: [
        { ja: "バイブレーター", en: "vibrator" }, { ja: "小型ローター", en: "bullet vibrator" }, { ja: "電マ (マッサージ器)", en: "magic wand" }, { ja: "ディルド", en: "dildo" }, { ja: "ダブルディルド", en: "double dildo" }, { ja: "ガラスのディルド", en: "glass dildo" }, { ja: "触手型ディルド", en: "tentacle dildo" }, { ja: "アナルプラグ", en: "butt plug" }, { ja: "アナルビーズ", en: "anal beads" }, { ja: "アナルフック", en: "anal hook" }, { ja: "ペニスバンド", en: "strap-on" }, { ja: "オナホール", en: "fleshlight" }, { ja: "コックリング", en: "cock ring" }, { ja: "バイブパンツ", en: "vibrating panties" }, { ja: "クリスター (浣腸器)", en: "enema" }, { ja: "媚薬の小瓶", en: "aphrodisiac potion" }
      ]
    },
    "⛓️ R-18: 拘束具・BDSM (Restraints & BDSM)": {
      items: [
        { ja: "手錠", en: "handcuffs" }, { ja: "亀甲縛り（縄）", en: "kikkou shibari, rope bondage" }, { ja: "目隠し", en: "blindfold" }, { ja: "ボールガグ（猿ぐつわ）", en: "ball gag" }, { ja: "リングガグ", en: "ring gag" }, { ja: "奴隷の首輪", en: "slave collar" }, { ja: "トゲ付き首輪", en: "spiked collar" }, { ja: "首輪とリード", en: "collar and leash" }, { ja: "手枷 / 足枷", en: "shackles" }, { ja: "拘束衣（ストレートジャケット）", en: "straitjacket" }, { ja: "拘束ベルト（BDSM）", en: "bondage belts" }, { ja: "三角木馬", en: "wooden horse, pillory" }
      ]
    },
    "🐙 R-18: 触手・スライム・生物 (Tentacles & Slime)": {
      isTarget: true,
      items: [
        { ja: "触手（基本）", en: "tentacles" }, { ja: "巨大な触手", en: "giant tentacles" }, { ja: "吸盤のある触手", en: "suction cup tentacles" }, { ja: "スライム触手", en: "slime tentacles" }, { ja: "スライム触手搾乳装置", en: "(Slime Tentacle Milking Device)" }, { ja: "機械の触手 (ケーブル)", en: "mechanical tentacles, cables" }, { ja: "植物の蔓による拘束", en: "vine bondage" }, { ja: "透明な触手", en: "transparent tentacles" }, { ja: "体に絡みつく触手", en: "tentacles wrapping around body" }, { ja: "スライム（生物）", en: "slime (monster)" }, { ja: "体にまとわりつくスライム", en: "slime covering body" }, { ja: "粘液 / ネバネバした液体", en: "viscous liquid, sticky slime" }, { ja: "クモの巣（拘束）", en: "spider web bondage" }, { ja: "寄生生物", en: "parasite" }, { ja: "蟲・ワームの群れ", en: "worms, swarming insects" }, { ja: "生いた肉壁", en: "living flesh wall" }, { ja: "ペニス", en: "penis" }
      ]
    },
    "🔞 R-18: 特殊装飾・印 (Marks & Piercings)": {
      items: [
        { ja: "淫紋（子宮紋）", en: "womb tattoo, crotch tattoo" }, { ja: "奴隷の刻印", en: "slave mark, brand" }, { ja: "ボディペイント（落書き）", en: "body writing" }, { ja: "正の字（カウント）", en: "tally mark" }, { ja: "乳首ピアス", en: "nipple piercing" }, { ja: "へそピアス", en: "navel piercing" }, { ja: "陰部ピアス", en: "genital piercing" }, { ja: "舌ピアス", en: "tongue piercing" }, { ja: "ニップルキャップ / クリップ", en: "nipple clamps" }
      ]
    },
    // 🔥 追加：R-18用動作棚
    "🤲 R-18: 動作・状態 (Secret Actions)": {
      isAction: true,
      items: [
        { ja: "膣に挿入、性行為", en: "in pussy, sex" },
        { ja: "深く挿入", en: "inserted deeply" },
        { ja: "最奥まで", en: "bottoming out" },
        { ja: "半挿入", en: "half-inserted" },
        { ja: "激しい挿入", en: "thrusting" },
        { ja: "振動中", en: "vibrating" },
        { ja: "脈打つ", en: "pulsating" },
        { ja: "締め付け", en: "constricting" },
        { ja: "巻き付き", en: "wrapping around" },
        { ja: "絡みつく", en: "entwining" },
        { ja: "ヌルヌル", en: "covered in slime" },
        { ja: "クリ責め", en: "clitoral stimulation" },
        { ja: "焦らし", en: "teasing" },
        { ja: "拡張", en: "stretched" },
        { ja: "抵抗", en: "struggling against" },
        { ja: "震え", en: "trembling" },
        { ja: "潮吹き", en: "squirting" },
        { ja: "絶頂", en: "orgasm" }
      ]
    }

  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-accessories") || container;
      parent.innerHTML = "";
      const section = document.createElement("div");
      section.className = "accessories-section";
      const h = document.createElement("div");
      h.textContent = "💍 アクセサリ・小物 (Accessories)";
      h.style.fontWeight = "bold"; h.style.color = "#c71585"; h.style.marginBottom = "8px";
      section.appendChild(h);

      const entries = Object.entries(CATEGORIES);
      const weaponEntries = entries.filter(([n]) => n.startsWith("⚔️ 武器・兵器 /"));
      const foodEntries = entries.filter(([n]) => n.startsWith("🍱 食べ物・飲み物 /"));
      const itemActionEntries = entries.filter(([n]) => n.startsWith("🤲 アイテムの状態・動作"));
      const otherEntries = entries.filter(([n]) => !n.startsWith("🤲 アイテムの状態・動作") && !n.startsWith("⚔️ 武器・兵器 /") && !n.startsWith("🍱 食べ物・飲み物 /"));

      const renderCategory = (catName, catData, mount) => {
        const details = document.createElement("details");
        details.style.border = "1px solid #ddd"; details.style.marginBottom = "6px"; details.style.borderRadius = "6px"; details.style.padding = "6px";
        const summary = document.createElement("summary");
        summary.textContent = catName; summary.style.cursor = "pointer"; summary.style.fontWeight = "bold";
        details.appendChild(summary);
        const content = document.createElement("div");
        content.style.marginTop = "6px"; content.style.display = "flex"; content.style.flexWrap = "wrap"; content.style.gap = "6px";
        catData.items.forEach(item => {
          const label = document.createElement("label");
          label.style.border = "1px solid #ddd"; label.style.padding = "4px 8px"; label.style.borderRadius = "6px"; label.style.fontSize = "0.85em"; label.style.display = "flex"; label.style.alignItems = "center"; label.style.cursor = "pointer";
          const cb = document.createElement("input");
          cb.type = "checkbox"; cb.dataset.en = item.en;
          if(catData.isAction) cb.dataset.type = "action"; else if(catData.isTarget) cb.dataset.type = "target"; else cb.dataset.type = "normal";
          cb.style.marginRight = "4px"; label.appendChild(cb); label.appendChild(document.createTextNode(item.ja)); content.appendChild(label);
        });
        details.appendChild(content); mount.appendChild(details);
      };

      if (itemActionEntries.length) {
        const actionRoot = document.createElement("details");
        const actionSum = document.createElement("summary"); actionSum.textContent = "🤲 アイテムの状態・動作"; actionRoot.appendChild(actionSum);
        itemActionEntries.forEach(([k, cat]) => renderCategory(k.split(" / ").pop(), cat, actionRoot));
        section.appendChild(actionRoot);
      }
      otherEntries.forEach(([catName, catData]) => renderCategory(catName, catData, section));

      if (foodEntries.length) {
        const foodWrap = document.createElement("details");
        const foodSum = document.createElement("summary"); foodSum.textContent = "🍱 食べ物・飲み物"; foodWrap.appendChild(foodSum);
        foodEntries.forEach(([k, cat]) => renderCategory(k.split(" / ").pop(), cat, foodWrap));
        section.appendChild(foodWrap);
      }
      if (weaponEntries.length) {
        const weaponRoot = document.createElement("details");
        const weaponSum = document.createElement("summary"); weaponSum.textContent = "⚔️ 武器・兵器"; weaponRoot.appendChild(weaponSum);
        weaponEntries.forEach(([k, cat]) => renderCategory(k.split(" / ").pop(), cat, weaponRoot));
        section.appendChild(weaponRoot);
      }

      if (IS_UNLOCKED) {
        const secretRoot = document.createElement("details");
        secretRoot.style.border = "1px solid #ffcccc";
        const secretSum = document.createElement("summary"); secretSum.textContent = "🔒 R-18"; secretSum.style.color = "#b00000";
        secretRoot.appendChild(secretSum);
        const secretWrap = document.createElement("div");
        Object.entries(SECRET_CATEGORIES).forEach(([name, data]) => renderCategory(name, data, secretWrap));
        secretRoot.appendChild(secretWrap); section.appendChild(secretRoot);
      }
      parent.appendChild(section);
    },

    getTags() {
      const normalTags = []; const targetTags = []; const actionTags = [];
      document.querySelectorAll(".accessories-section input:checked").forEach(cb => {
        const type = cb.dataset.type; const val = cb.dataset.en;
        if (type === "action") actionTags.push(val); else if (type === "target") targetTags.push(val); else normalTags.push(val);
      });

      const finalTags = [...normalTags];
      if (actionTags.length > 0 && targetTags.length > 0) {
        actionTags.forEach(action => {
          targetTags.forEach(target => {
            const suffixActions = ["in mouth", "on back", "on belt", "on head", "in pocket", "in pussy, sex", "inserted deeply", "vibrating", "constricting", "wrapping around", "covered in slime"];
            if (suffixActions.includes(action)) {
              finalTags.push(`${target} ${action}`); 
            } else {
              finalTags.push(`${action} ${target}`); 
            }
          });
        });
      } else {
        finalTags.push(...targetTags, ...actionTags);
      }
      return finalTags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();
