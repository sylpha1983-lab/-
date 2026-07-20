(function () {
  "use strict";

  if (window.SHIMA_ACCESSORY_AKASHIC_V1) return;

  const item = (slug, name, prompt, description) => description
    ? [slug, name, prompt, description]
    : [slug, name, prompt];
  const category = (key, title, note, items) => ({ key, title, note, items });
  const group = (key, title, description, categories) => ({ key, title, description, categories });

  const groups = [
    group("quick", "✨ おまかせ装備セット", "迷った時に、役割の揃った装飾と小物を一度で加える完成セット。", [
      category("daily", "☕ 日常・街歩き", "普段着へ合わせやすい軽量セット。", [
        item("daily-minimal", "デイリー・ミニマル", "small stud earrings, slim wristwatch, compact shoulder bag, understated accessory styling", "控えめな普段着向け。小粒ピアス／細身腕時計／小型ショルダーバッグ／主張を抑えた装飾。"),
        item("city-walk", "街歩きナチュラル", "soft beret, lightweight scarf, crossbody satchel, simple wrist accessories", "柔らかな街歩きコーデ向け。ベレー帽／軽いスカーフ／斜め掛けサッチェル／素朴な手首飾り。"),
        item("book-lover", "読書家セット", "round reading glasses, leather bookmark, canvas book bag, delicate pendant", "本好き・図書館シーン向け。丸眼鏡／革のしおり／帆布ブックバッグ／華奢なペンダント。"),
        item("cafe-day", "カフェ休日セット", "hair ribbon, small hoop earrings, mini tote bag, smartphone charm", "軽やかな休日カフェ向け。髪リボン／小型フープピアス／ミニトート／スマホチャーム。"),
        item("creative-day", "創作休日セット", "paint-splashed hair clip, sketchbook case, pen pouch, woven bracelets", "絵描き・創作活動向け。絵具跡のヘアクリップ／スケッチブックケース／ペンポーチ／編み腕輪。"),
        item("student-clean", "清潔な学生小物", "neat hairpin, school badge, simple backpack, compact wristwatch", "端正で実用的な学生像向け。整ったヘアピン／校章／シンプルなリュック／小型腕時計。"),
        item("rainy-walk", "雨の日散歩セット", "transparent rain hat, folded umbrella, waterproof sling bag, reflective bag charm", "雨天の外出向け。透明レインハット／折り畳み傘／防水スリングバッグ／反射チャーム。"),
        item("night-city", "夜の街セット", "tinted glasses, metallic ear cuff, compact clutch bag, subtle luminous bracelet", "都会的で中性的な夜歩き向け。色付き眼鏡／メタルイヤーカフ／小型クラッチ／淡く光るブレスレット。")
      ]),
      category("elegant", "💎 上品・式典", "フォーマル、舞踏会、式典向け。", [
        item("pearl-formal", "真珠の式典セット", "pearl drop earrings, layered pearl necklace, pearl hair comb, satin evening clutch", "真珠で統一した女性寄りの式典装飾。真珠ドロップピアス／重ねネックレス／真珠コーム／サテンクラッチ。"),
        item("royal-gala", "王宮ガラセット", "jeweled tiara, ceremonial brooch, long dress gloves, ornate hand fan", "華やかな王宮晩餐会向け。宝石ティアラ／儀礼ブローチ／ロンググローブ／装飾扇。"),
        item("black-tie", "黒タイ正装セット", "silk bow tie, silver cufflinks, polished wristwatch, folded pocket square", "男性・中性の黒タイ礼装向け。絹の蝶ネクタイ／銀カフリンクス／磨いた腕時計／ポケットチーフ。"),
        item("opera-night", "オペラ鑑賞セット", "feathered hair ornament, opera glasses, velvet choker, beaded evening bag", "クラシカルな劇場鑑賞向け。羽根髪飾り／オペラグラス／ベルベットチョーカー／ビーズバッグ。"),
        item("garden-party", "庭園パーティーセット", "flower fascinator, lace gloves, parasol, floral pendant necklace", "昼の上品な庭園会向け。花ファシネーター／レース手袋／日傘／花ペンダント。"),
        item("ceremony-white", "白の式典セット", "white veil headpiece, crystal earrings, white gloves, silver ceremonial brooch", "清楚な白系式典向け。白ベール飾り／水晶ピアス／白手袋／銀の儀礼ブローチ。"),
        item("noble-red", "深紅の貴族セット", "garnet pendant, crimson hair ribbon, gold shoulder chain, embossed clutch bag", "深紅と金の貴族的な装い向け。ガーネット／深紅リボン／金ショルダーチェーン／型押しクラッチ。"),
        item("moonlit-ball", "月夜の舞踏会セット", "crescent tiara, moonstone earrings, silver waist chain, translucent folding fan", "幻想的な夜会向け。三日月ティアラ／月長石ピアス／銀ウエストチェーン／半透明の扇。")
      ]),
      category("adventure", "🧭 冒険・旅装", "ファンタジーから現代探検まで使える携行セット。", [
        item("novice-traveler", "旅人の基本装備", "weathered satchel, rolled map case, utility belt pouches, brass compass pendant", "王道の徒歩旅行者向け。使い込んだサッチェル／地図筒／多目的腰ポーチ／真鍮コンパス。"),
        item("forest-scout", "森林斥候セット", "leaf-shaped hair clasp, green hood clasp, compact field pouch, leather wrist guards", "森で目立ちにくい斥候向け。葉型髪留め／緑のフード留め／小型野外ポーチ／革リストガード。"),
        item("desert-caravan", "砂漠隊商セット", "protective face scarf, brass goggles, water flask harness, sun-weathered travel bag", "砂塵と日差しに備える隊商向け。顔覆いスカーフ／真鍮ゴーグル／水筒ハーネス／日焼けした旅行鞄。"),
        item("snow-expedition", "雪原遠征セット", "fur-lined ear protectors, snow goggles, insulated backpack, climbing rope coil", "寒冷地の本格遠征向け。毛皮耳当て／雪面ゴーグル／断熱リュック／登攀ロープ。"),
        item("ruin-explorer", "遺跡探索セット", "headlamp goggles, artifact satchel, rugged gloves, chalk and marker pouch", "暗い遺跡の調査員向け。ヘッドランプゴーグル／遺物サッチェル／頑丈な手袋／印付けポーチ。"),
        item("sky-voyager", "空艇航海セット", "aviator goggles, wind scarf, navigation wrist compass, strapped document case", "風を受ける空艇乗り向け。飛行ゴーグル／風除けスカーフ／腕部方位計／固定式書類ケース。"),
        item("sea-navigator", "海洋航海セット", "naval cap, brass spyglass, waterproof map tube, rope-knot bracelet", "海図を読む航海士向け。制帽／真鍮望遠鏡／防水海図筒／ロープ結び腕輪。"),
        item("monster-scholar", "魔物研究者セット", "protective spectacles, specimen case, field notebook pouch, reinforced handling gloves", "危険生物を調べる研究者向け。保護眼鏡／標本ケース／野帳ポーチ／補強採取手袋。")
      ]),
      category("future", "🤖 SF・サイバー", "近未来、宇宙、サイバー衣装の仕上げ。", [
        item("cyber-street", "サイバーストリート", "luminous ear implants, transparent visor, modular belt pouches, holographic wrist display", "都会のサイバー系ストリート向け。発光耳デバイス／透明バイザー／モジュール腰ポーチ／ホロ腕端末。"),
        item("space-crew", "宇宙船クルー", "communications earpiece, magnetic utility badge, compact oxygen monitor, zero-gravity tool pouch", "実務的な宇宙船乗員向け。通信イヤーピース／磁気バッジ／酸素モニター／無重力ツールポーチ。"),
        item("android-formal", "アンドロイド正装", "sleek temple interface, geometric collar module, metallic wrist bands, precision chest insignia", "無機質で端正な人造人間向け。こめかみ端末／幾何学カラー／金属リストバンド／精密胸章。"),
        item("neon-idol", "ネオンステージセット", "LED hair clips, glowing ear cuffs, holographic microphone pack, illuminated ankle bands", "未来的なライブ出演者向け。LED髪留め／発光イヤーカフ／ホロマイクパック／光る足首バンド。"),
        item("data-runner", "データランナー装備", "augmented reality glasses, encrypted data pendant, finger control rings, slim tech sling bag", "情報を運ぶ俊敏な工作員向け。AR眼鏡／暗号データペンダント／操作リング／薄型テックスリング。"),
        item("orbital-scientist", "軌道研究員セット", "clear lab visor, sensor badge, sample capsule belt, articulated forearm terminal", "軌道施設の研究者向け。透明ラボバイザー／センサー章／試料カプセルベルト／可動前腕端末。"),
        item("mecha-pilot", "機体操縦士セット", "pilot headset, harness control buckles, tactical wrist console, emergency signal beacon", "メカ・航空機の操縦士向け。パイロットヘッドセット／制御バックル／腕部コンソール／緊急ビーコン。"),
        item("quantum-mage", "量子術式セット", "floating circuit halo, crystal data pendant, luminous fingertip rings, holographic spell interface", "科学と魔法を融合した術者向け。浮遊回路環／結晶データペンダント／発光指輪／ホロ術式画面。")
      ]),
      category("seasonal", "🎉 季節・イベント", "季節感や催しを小物だけで素早く追加。", [
        item("spring-blossom", "春花見セット", "cherry blossom hairpin, pale silk scarf, picnic basket bag, petal-shaped earrings", "春の花見・公園散策向け。桜ヘアピン／淡色絹スカーフ／ピクニック籠バッグ／花びらピアス。"),
        item("summer-festival", "夏祭り小物セット", "festival hair ornament, folding fan, drawstring pouch, glass wind-chime earrings", "浴衣にも普段着にも合う夏祭り向け。祭り髪飾り／扇子／巾着／ガラス風鈴ピアス。"),
        item("autumn-harvest", "秋収穫祭セット", "maple leaf brooch, woven shoulder basket, warm neck scarf, acorn pendant", "温かな秋の収穫祭向け。紅葉ブローチ／編み肩籠／暖色スカーフ／どんぐりペンダント。"),
        item("winter-snow", "冬雪あそびセット", "fluffy earmuffs, knitted scarf, insulated mittens, snowflake bag charm", "可愛く防寒する雪遊び向け。ふわふわ耳当て／編みスカーフ／断熱ミトン／雪結晶チャーム。"),
        item("halloween-night", "ハロウィン小物セット", "miniature witch hat, pumpkin lantern, bat-shaped ear cuffs, candy pouch", "軽い仮装で楽しむ夜向け。ミニ魔女帽／かぼちゃランタン／蝙蝠イヤーカフ／菓子ポーチ。"),
        item("winter-holiday", "冬の祝祭セット", "holly hair clip, bell choker, ribboned gift bag, star-shaped earrings", "冬の贈り物イベント向け。柊ヘアクリップ／鈴チョーカー／リボン付きギフトバッグ／星ピアス。"),
        item("new-year", "新年祝いセット", "decorative hair comb, braided cord ornament, folding fan, lucky charm pouch", "和洋どちらにも足せる新年祝い向け。装飾コーム／組紐飾り／扇／縁起物の小袋。"),
        item("star-festival", "星祭りセット", "star hair chains, celestial pendant, translucent ribbon streamers, glowing wish-card charm", "幻想的な星の祭典向け。星の髪鎖／天体ペンダント／半透明リボン／光る願い札チャーム。")
      ]),
      category("personas", "🧑‍🔧 人物像・職業", "役割がひと目で伝わる、職能別の携行品セット。", [
        item("urban-detective", "都会の探偵セット", "folding magnifier, pocket case notebook, black fountain pen, vintage wristwatch", "冷静な都市探偵向け。折り畳み拡大鏡／ポケット手帳／黒い万年筆／古風な腕時計。"),
        item("field-alchemist", "野外錬金術師セット", "protective alchemy goggles, padded reagent vial case, brass measuring tongs, formula notebook", "旅先で調合する錬金術師向け。錬金保護眼鏡／試薬瓶ケース／真鍮計量トング／調合法手帳。"),
        item("precision-mechanic", "精密機械整備士セット", "clear safety goggles, magnetic tool bracelet, precision screwdriver case, oilcloth work gloves", "細かな機械を扱う整備士向け。透明保護眼鏡／磁気工具ブレスレット／精密ドライバーケース／油布手袋。"),
        item("roaming-naturalist", "巡回自然研究者セット", "compact field binoculars, specimen tube case, waterproof observation notebook, botanical measuring compass", "野外を歩いて記録する研究者向け。小型双眼鏡／標本管ケース／防水観察手帳／植物計測コンパス。"),
        item("traveling-merchant", "旅商人セット", "divided coin purse, compact price ledger, portable balance scale, carved seal stamp", "各地で品物を取引する商人向け。仕切り付き銭入れ／小型価格帳／携帯天秤／彫刻入り印章。"),
        item("museum-curator", "博物館学芸員セット", "archival white gloves, folding inspection lens, accession tag case, slim catalog tablet", "収蔵品を丁寧に調査する学芸員向け。資料用白手袋／折り畳み検品鏡／管理札ケース／薄型目録端末。"),
        item("street-reporter", "街頭記者セット", "press identification badge, shorthand notebook, compact voice recorder, reinforced camera strap", "現場を駆け回る取材記者向け。記者証／速記手帳／小型録音機／補強カメラストラップ。"),
        item("touring-musician", "巡業音楽家セット", "silver tuning fork, sheet music tube, metronome charm, custom in-ear monitors", "各地で演奏する音楽家向け。銀の音叉／楽譜筒／メトロノームチャーム／専用イヤーモニター。"),
        item("herbal-apothecary", "薬草調合師セット", "labeled herb pouch, amber dropper bottle case, tiny brass mortar charm, dosage notebook", "薬草を選別して処方する調合師向け。ラベル付き薬草袋／褐色滴瓶ケース／真鍮乳鉢チャーム／用量手帳。"),
        item("postal-courier", "郵便配達人セット", "letter sorting satchel, route map tube, brass service whistle, compact wax seal kit", "手紙を安全に届ける配達人向け。仕分けサッチェル／配達地図筒／真鍮ホイッスル／携帯封蝋セット。"),
        item("star-chart-traveler", "星詠み旅人セット", "brass direction compass, rolled star chart case, celestial pendant, pocket telescope", "星を道標に旅する観測者向け。真鍮方位計／巻き星図ケース／天体ペンダント／小型望遠鏡。"),
        item("court-scribe", "宮廷書記官セット", "engraved quill case, wax note tablet, official signet ring, bound document ribbons", "公文書を扱う宮廷書記官向け。彫刻入り羽根筆ケース／蝋メモ板／官印指輪／文書綴じリボン。")
      ]),
      category("eras", "🕰️ 時代・文化", "年代や文化圏の気配を、小物だけで添えるセット。", [
        item("taisho-promenade", "大正浪漫散策セット", "slender round spectacles, lacquered hair comb, metal-clasp handbag, pocket poetry notebook", "和洋折衷の街歩き向け。細身丸眼鏡／漆塗りコーム／口金ハンドバッグ／小型詩集手帳。"),
        item("victorian-afternoon", "ヴィクトリアン午後会セット", "cameo brooch, lace parasol, glove button hook, frame coin purse", "古典的な午後の訪問会向け。カメオブローチ／レース日傘／手袋ボタンフック／口金銭入れ。"),
        item("showa-cafe", "昭和レトロ喫茶セット", "enamel hair clip, kiss-lock coin purse, fountain pen case, square analog wristwatch", "懐かしい喫茶店めぐり向け。七宝髪留め／がま口銭入れ／万年筆ケース／角形アナログ腕時計。"),
        item("art-deco-evening", "アールデコ夜会セット", "geometric jeweled headband, long bead necklace, engraved compact mirror, angular evening clutch", "幾何学的で華やかな夜会向け。宝石ヘッドバンド／ロングビーズネックレス／彫刻コンパクト鏡／角形クラッチ。"),
        item("medieval-scriptorium", "中世写本工房セット", "handheld reading lens, miniature ink horn, feather quill tube, parchment folio satchel", "写本を制作する古い工房向け。手持ち読書鏡／小型インク角／羽根筆筒／羊皮紙サッチェル。"),
        item("renaissance-atelier", "ルネサンス工房セット", "palette-shaped brooch, chalk holder case, leather sketch folio, brass drawing divider", "古典的な美術工房の制作者向け。パレット型ブローチ／白墨ケース／革スケッチ帖／真鍮ディバイダー。"),
        item("silk-road-market", "シルクロード交易セット", "mixed coin necklace, carved bead bracelet, embroidered spice pouch, engraved travel mirror", "長距離交易の市場歩き向け。異国銭ネックレス／彫刻ビーズ腕輪／刺繍香辛料袋／彫金旅鏡。"),
        item("edo-stroll", "江戸町歩きセット", "carved netsuke pouch, painted folding fan, wooden pocket comb, drawstring coin purse", "江戸風の町人散策向け。根付付き小袋／絵入り扇子／木製懐中櫛／紐締め銭入れ。"),
        item("belle-epoque-salon", "ベルエポック応接室セット", "feathered hatpin, cameo ribbon choker, folding lorgnette, beaded reticule bag", "優雅な世紀末サロン向け。羽根ハットピン／カメオリボンチョーカー／折り畳みロルネット／ビーズ手提げ。"),
        item("sixties-pop", "六〇年代ポップセット", "oval tinted sunglasses, stacked enamel bangles, vinyl-record mini bag, daisy hair clip", "明るいレトロポップ表現向け。楕円色付き眼鏡／重ね七宝バングル／レコード型ミニバッグ／デイジー髪留め。"),
        item("eighties-citypop", "八〇年代シティポップセット", "mirrored sunglasses, portable cassette player, colorful hoop earrings, square digital watch", "都会的な八〇年代音楽感向け。ミラーサングラス／携帯カセットプレーヤー／色彩フープピアス／角形デジタル時計。"),
        item("y2k-street", "Y2Kストリートセット", "tinted shield glasses, metallic mini shoulder bag, beaded phone strap, translucent resin bangles", "光沢感のある二〇〇〇年代風街着向け。色付きシールド眼鏡／金属調ミニバッグ／ビーズ携帯ストラップ／半透明バングル。")
      ]),
      category("genres", "🪄 ジャンル・世界観", "物語ジャンルを象徴する装備だけをまとめたセット。", [
        item("arcane-city-guide", "魔導都市案内人セット", "crystal monocle, rune transit map, mana token purse, floating key charm", "魔法都市を案内する実務者向け。水晶片眼鏡／ルーン交通図／魔力硬貨入れ／浮遊鍵チャーム。"),
        item("wasteland-scavenger", "終末世界探索者セット", "sealed dust goggles, modular salvage pouch, hand-crank pocket radio, filtered field canteen", "荒廃地から資材を探す探索者向け。密閉防塵眼鏡／回収品ポーチ／手回し小型ラジオ／浄水野外ボトル。"),
        item("interstellar-navigator", "恒星間航法士セット", "constellation projector disc, deep-space communication pin, sample capsule rack, stellar navigation wrist unit", "長距離宇宙航路を読む航法士向け。星座投影盤／深宇宙通信ピン／試料カプセル架／恒星航法腕端末。"),
        item("yokai-investigator", "妖怪奇譚調査セット", "small fox half-mask, warding bell, paper talisman case, braided red cord bracelet", "怪異の痕跡を追う調査者向け。小型狐半面／魔除け鈴／紙札ケース／編み赤紐腕輪。"),
        item("undersea-citizen", "海底都市生活セット", "bubble-lens visor, pearl communication earpiece, pressure gauge wristband, coral-shaped access key", "水中都市で暮らす住民向け。気泡レンズバイザー／真珠通信耳飾り／圧力計腕輪／珊瑚型アクセスキー。"),
        item("steam-city-engineer", "蒸気都市技師セット", "brass loupe monocle, miniature pressure-gauge brooch, gear tool case, reinforced leather wrist brace", "蒸気機関を点検する技師向け。真鍮拡大片眼鏡／圧力計ブローチ／歯車工具ケース／補強革リストガード。"),
        item("magic-academy", "魔法学園実習セット", "spellbook satchel, academy crest pin, wand carrying loop, potion-ink pen", "魔法学園の実習生向け。魔導書サッチェル／学園章／杖携行ループ／薬液インクペン。"),
        item("phantom-thief", "怪盗予告状セット", "sleek half mask, retractable line cuff, marked card case, jeweled calling card", "華麗な潜入を演出する怪盗向け。流線型半面／巻取り索カフ／印付きカードケース／宝石予告状。"),
        item("royal-messenger", "王都伝令セット", "royal message seal, weatherproof route map case, silver signal whistle, gauntlet-shaped service token", "重要文書を運ぶ王都伝令向け。王家伝令印／耐候地図ケース／銀信号笛／籠手型任務章。"),
        item("dragon-ruin-scholar", "竜遺跡調査セット", "heat-resistant goggles, rune measuring caliper, scale specimen box, fireproof sampling gloves", "熱を帯びた竜遺跡の調査者向け。耐熱眼鏡／ルーン計測ノギス／鱗標本箱／耐火採取手袋。"),
        item("dreamwalker", "夢界渡航セット", "dream direction compass, translucent glass key, sealed memory bottle, moon-thread bracelet", "夢の境界を渡る旅人向け。夢路コンパス／半透明ガラス鍵／封印記憶瓶／月糸ブレスレット。"),
        item("spirit-binder", "精霊契約者セット", "elemental charm rings, portable spirit lantern, oath ribbon seal, crystal seed case", "小精霊と契約する術者向け。元素チャーム指輪／携帯精霊灯／誓約リボン印／水晶種ケース。")
      ]),
      category("activities", "🚶 行動・場面", "その日の行動を小物4点で素早く伝えるセット。", [
        item("rainy-commute", "雨の日通勤セット", "transparent folding umbrella, waterproof wristwatch, wireless earbuds, packable tote bag", "雨天の通勤や通学向け。透明折り畳み傘／防水腕時計／無線イヤホン／収納式トート。"),
        item("winter-stargazing", "冬の星見セット", "knitted ear warmers, insulated thermos flask, pocket telescope, laminated star chart case", "寒い夜の天体観測向け。編み耳当て／断熱水筒／小型望遠鏡／防水星図ケース。"),
        item("night-market-stroll", "夜市散策セット", "paper lantern charm, divided coin pouch, compact folding fan, small woven crossbody basket", "賑やかな夜市の食べ歩き向け。紙灯籠チャーム／仕切り銭入れ／小型扇子／編み斜め掛け籠。"),
        item("photography-trip", "写真旅行セット", "cross-body camera harness, spare battery pouch, padded lens cloth case, location notebook", "旅先で撮影を続ける写真家向け。斜め掛けカメラハーネス／予備電池袋／レンズ布ケース／撮影地手帳。"),
        item("museum-hopping", "美術館巡りセット", "audio guide earpiece, slim ticket wallet, pocket sketch memo, enamel museum pin", "複数の展示を静かに巡る鑑賞者向け。音声案内イヤーピース／薄型チケット入れ／鑑賞メモ／七宝館章。"),
        item("outdoor-sketching", "屋外スケッチセット", "rolled pencil organizer, folding watercolor palette, clip-on drawing board, collapsible water cup", "景色をその場で描く制作者向け。巻き鉛筆入れ／折り畳み水彩パレット／留め式画板／収納式水入れ。"),
        item("morning-running", "朝のランニングセット", "bone-conduction sport earpiece, fitness wrist tracker, slim running waist pouch, reflective wrist bands", "早朝の軽い運動向け。骨伝導スポーツ耳機／活動量腕時計／薄型ランニング腰袋／反射リストバンド。"),
        item("seaside-walk", "海辺散歩セット", "wide sun visor, shell pendant, woven mini shoulder bag, polarized sunglasses", "晴れた海辺を歩く休日向け。広つばサンバイザー／貝殻ペンダント／編みミニバッグ／偏光サングラス。"),
        item("rail-journey", "鉄道旅行セット", "sectioned ticket wallet, engraved luggage tag, timetable pocketbook, dual-time travel watch", "長距離列車で旅する乗客向け。仕切り乗車券入れ／彫刻荷札／時刻表手帳／二時刻表示腕時計。"),
        item("antique-book-fair", "古書市巡りセット", "thin reading glasses, reinforced cloth book bag, price memo pad, antique metal bookmark", "古書を探して歩く愛好家向け。細身読書眼鏡／補強布ブックバッグ／価格メモ／古金属しおり。"),
        item("music-festival", "音楽フェスセット", "musician earplug case, fabric event wrist pass, compact stage binoculars, waterproof phone pouch", "屋外ライブを一日楽しむ観客向け。音楽用耳栓ケース／布製入場腕章／小型舞台双眼鏡／防水携帯袋。"),
        item("nightscape-photography", "夜景撮影セット", "wireless camera remote, folded tripod carrying strap, lens filter case, touchscreen thermal gloves", "冷える夜の長時間撮影向け。無線カメラリモコン／三脚携行ストラップ／レンズフィルターケース／操作対応防寒手袋。")
      ]),
      category("originals", "🌌 非アルカディア創作", "固有作品名に依存しない、完全創作モチーフの小物セット。", [
        item("moon-sea-route", "月海航路セット", "crescent ear cuff, tide-glass pendant, pearl direction compass, moonlit ribbon charm", "月光と静かな海を重ねた旅装向け。三日月イヤーカフ／潮硝子ペンダント／真珠方位計／月光リボンチャーム。"),
        item("frost-crystal-garden", "氷晶庭園セット", "frost crystal hairpin, clear resin ring, silver leaf brooch, snow-glass vial", "透明な冬の庭園を思わせる装飾向け。霜水晶ヘアピン／透明樹脂指輪／銀葉ブローチ／雪硝子小瓶。"),
        item("clockwork-gardener", "時計仕掛けの庭師セット", "gear flower brooch, precision pruning shears, antique key ring, miniature mechanical bird", "機械植物を手入れする庭師向け。歯車花ブローチ／精密剪定鋏／古鍵束／小型機械鳥。"),
        item("ink-gold-fantasy", "墨金幻想セット", "black lacquer hairpin, gold-ink folding fan, carved seal-stone pendant, slim calligraphy brush case", "黒と金の筆致をまとう幻想表現向け。黒漆ヘアピン／金墨扇／印石ペンダント／細身筆ケース。"),
        item("stardust-post-office", "星屑郵便局セット", "constellation stamp case, comet-shaped letter opener, star-envelope satchel, luminous address tag", "星から星へ手紙を運ぶ配達役向け。星座切手ケース／彗星レターオープナー／星封筒サッチェル／発光宛名札。"),
        item("sky-library", "雲上図書館セット", "feather bookmark, cloud-glass spectacles, floating catalog cards, silver book clasp", "空に浮かぶ書庫の利用者向け。羽根しおり／雲硝子眼鏡／浮遊目録カード／銀の書留め。"),
        item("abyss-glass", "深海硝子セット", "jellyfish drop earrings, abyss-blue viewing lens, bubble pendant, translucent shell purse", "暗い海の透明感をまとう装飾向け。海月ドロップピアス／深青観測レンズ／気泡ペンダント／半透明貝殻ポーチ。"),
        item("sunset-engine", "夕焼け機関セット", "copper sun goggles, ember dial wristwatch, gradient glass brooch, small clockwork key", "夕焼けで動く架空機関の技師向け。銅製太陽眼鏡／残光文字盤時計／階調硝子ブローチ／小型ぜんまい鍵。"),
        item("rain-song-mineral", "雨音鉱石セット", "raindrop ear cuff, resonant crystal pendant, glass chime charm, slate-blue coin purse", "雨音を結晶に閉じ込めた装飾向け。雨粒イヤーカフ／共鳴水晶ペンダント／硝子鈴チャーム／青灰銭入れ。"),
        item("flower-clock-greenhouse", "花時計温室セット", "botanical dial watch, pressed-flower locket, vine-shaped hair clasp, tiny watering ampoule", "時を刻む植物温室の管理者向け。植物文字盤時計／押し花ロケット／蔓型髪留め／小型給水アンプル。"),
        item("white-porcelain-dream", "白磁夢殿セット", "white porcelain hair ornament, blue-glaze earrings, ceramic seal ring, silk tassel pouch", "白磁と青釉で静けさを表す装飾向け。白磁髪飾り／青釉ピアス／陶印指輪／絹房小袋。"),
        item("luminous-whale-route", "光鯨航路セット", "whale-shaped brooch, luminous route map cylinder, wave-glass bracelet, miniature beacon lantern", "光る鯨を追う架空航路の旅人向け。鯨型ブローチ／発光航路筒／波硝子腕輪／小型標識灯。")
      ])
    ]),

    group("head", "👒 頭・髪・顔・耳", "視線が最初に集まる顔まわり。髪飾り、帽子、眼鏡、耳装備を細分化。", [
      category("hair-ornaments", "🌸 髪留め・コーム", "髪の一部へ固定する小型装飾。", [
        item("pearl-hairpin", "一粒真珠ヘアピン", "single pearl hairpin above one ear"),
        item("crystal-hair-comb", "水晶ヘアコーム", "faceted crystal hair comb catching the light"),
        item("gold-leaf-clasp", "金葉の髪留め", "gold leaf-shaped hair clasp"),
        item("silver-feather-pin", "銀羽根ヘアピン", "slender silver feather hairpin"),
        item("pressed-flower-comb", "押し花コーム", "transparent hair comb with pressed flowers"),
        item("star-chain-hairpin", "星鎖ヘアピン", "star hairpin with delicate hanging chains"),
        item("lacquered-kanzashi", "漆塗りかんざし", "lacquered ornamental kanzashi with fine inlay"),
        item("mechanical-hair-clamp", "機械式ヘアクランプ", "precision mechanical hair clamp with tiny gears")
      ]),
      category("bands-ribbons", "🎀 リボン・ヘッドバンド", "頭を囲む帯状・布状アクセサリー。", [
        item("velvet-headband", "ベルベット細身カチューシャ", "slim velvet headband"),
        item("braided-cord-band", "編み紐ヘッドバンド", "braided cord headband with small beads"),
        item("wide-satin-ribbon", "幅広サテンリボン", "wide satin hair ribbon tied at the back"),
        item("sheer-bow-band", "透け感ボウカチューシャ", "sheer bow headband with translucent edges"),
        item("flower-crown-band", "小花冠ヘッドバンド", "delicate wildflower crown headband"),
        item("metal-halo-band", "金属ハローバンド", "thin metallic halo headband"),
        item("sport-sweatband", "スポーツヘッドバンド", "clean athletic headband with moisture-wicking texture"),
        item("circuit-ribbon", "回路模様リボン", "hair ribbon patterned with luminous circuit lines")
      ]),
      category("hats", "🎩 帽子・冠・防護帽", "日常帽から儀礼・作業用まで。", [
        item("ribbon-cloche", "リボンクロッシェ帽", "elegant cloche hat with a side ribbon"),
        item("newsboy-cap", "クラシックキャスケット", "classic newsboy cap with a short brim"),
        item("wide-travel-hat", "広つば旅帽", "wide-brimmed travel hat with a weathered band"),
        item("mini-fascinator", "ミニファシネーター", "small tilted fascinator with feathers"),
        item("ceremonial-circlet", "細身の儀礼冠", "slender ceremonial circlet with engraved motifs"),
        item("field-boonie", "野外ブーニーハット", "practical field boonie hat with loops"),
        item("transparent-safety-helmet", "透明安全ヘルメット", "transparent protective helmet with clean contours"),
        item("space-hood-helmet", "宇宙フードヘルメット", "compact open-face space hood helmet")
      ]),
      category("eyewear", "👓 眼鏡・バイザー・片眼鏡", "目元の印象と役割を変える。", [
        item("thin-round-glasses", "極細丸眼鏡", "ultra-thin round-frame glasses"),
        item("half-rim-glasses", "知的ハーフリム眼鏡", "refined half-rim glasses"),
        item("heart-sunglasses", "ハート型サングラス", "heart-shaped tinted sunglasses"),
        item("side-monocle", "鎖付き片眼鏡", "ornate monocle with a fine chain"),
        item("amber-goggles", "琥珀レンズゴーグル", "brass goggles with amber lenses"),
        item("snow-visor", "雪原用ワイドバイザー", "wide snow visor with mirrored lens"),
        item("tactical-eye-display", "片目タクティカル表示器", "single-eye tactical display mounted at the temple"),
        item("holo-face-visor", "半透明ホロバイザー", "translucent holographic face visor")
      ]),
      category("ear-face", "🎧 耳装備・顔まわり", "耳飾り、通信機、顔の小型装備。", [
        item("pearl-ear-cuff", "真珠イヤーカフ", "pearl ear cuff tracing the outer ear"),
        item("chain-drop-earrings", "細鎖ドロップピアス", "fine chain drop earrings"),
        item("wing-ear-ornaments", "翼型イヤーオーナメント", "small wing-shaped ear ornaments"),
        item("flower-ear-clips", "花びらイヤークリップ", "petal-shaped ear clips"),
        item("bone-conduction-set", "骨伝導イヤーセット", "sleek bone-conduction earpiece"),
        item("radio-earpiece", "透明チューブ通信イヤホン", "clear-tube radio earpiece"),
        item("decorative-face-chain", "頬を渡るフェイスチェーン", "delicate decorative chain draped across one cheek"),
        item("cheek-sensor", "頬部センサーパッチ", "small luminous sensor patch on the cheek")
      ])
    ]),

    group("neck", "💎 首・胸・肩", "ペンダント、襟元、徽章、肩飾りで所属や格を表現。", [
      category("pendants", "📿 ネックレス・ペンダント", "首元の中心に置く装飾。", [
        item("moonstone-pendant", "月長石ペンダント", "moonstone pendant on a fine silver chain"),
        item("locket-necklace", "写真入りロケット", "small heirloom locket necklace"),
        item("key-pendant", "古鍵ペンダント", "antique key pendant"),
        item("glass-vial-pendant", "ガラス小瓶ペンダント", "tiny glass vial pendant with suspended particles"),
        item("compass-necklace", "方位磁針ネックレス", "miniature working compass necklace"),
        item("crystal-drop-necklace", "結晶雫ネックレス", "faceted crystal drop necklace"),
        item("geometric-necklace", "幾何学プレートネックレス", "layered geometric plate necklace"),
        item("data-core-pendant", "データコアペンダント", "luminous data-core pendant in a metal frame")
      ]),
      category("collars", "🖤 チョーカー・カラー", "首に沿う短い装飾。", [
        item("velvet-gem-choker", "宝石付きベルベットチョーカー", "velvet choker with a single gemstone"),
        item("lace-ribbon-choker", "レースリボンチョーカー", "delicate lace ribbon choker"),
        item("braided-leather-collar", "編み革カラー", "braided leather collar with a small clasp"),
        item("pearl-strand-choker", "真珠一連チョーカー", "close-fitting single-strand pearl choker"),
        item("metal-segment-collar", "分節メタルカラー", "segmented metal collar with smooth joints"),
        item("embroidered-standing-collar", "刺繍立ち襟飾り", "detachable embroidered standing collar"),
        item("ceremonial-neck-ring", "儀礼用ネックリング", "engraved ceremonial neck ring"),
        item("luminous-interface-collar", "発光インターフェースカラー", "luminous interface collar with subtle indicators")
      ]),
      category("neckwear", "🧣 スカーフ・タイ・襟元", "布で輪郭と動きを加える。", [
        item("silk-neck-scarf", "短いシルクネックスカーフ", "short silk neck scarf with a neat knot"),
        item("long-wind-scarf", "風になびく長スカーフ", "long lightweight scarf flowing in the wind"),
        item("ascot-tie", "クラシックアスコットタイ", "classic ascot tie with a jeweled pin"),
        item("ribbon-bow-tie", "細リボンボウタイ", "slender ribbon bow tie"),
        item("cravat-frill", "フリルクラバット", "layered frilled cravat"),
        item("sailor-neckerchief", "端正なネッカチーフ", "neatly folded sailor neckerchief"),
        item("desert-face-wrap", "砂塵よけネックラップ", "light desert neck wrap ready to cover the face"),
        item("heated-tech-scarf", "温調テックスカーフ", "temperature-regulating tech scarf with fine luminous seams")
      ]),
      category("brooches", "🏅 ブローチ・徽章・名札", "所属、実績、テーマを胸元へ。", [
        item("cameo-brooch", "古典カメオブローチ", "classical cameo brooch"),
        item("flower-enamel-brooch", "七宝花ブローチ", "enamel flower brooch with gold edging"),
        item("wing-insignia", "翼章インシグニア", "polished wing insignia on the chest"),
        item("service-medal-bar", "略綬メダルバー", "neat service medal ribbon bar"),
        item("guild-badge", "ギルド所属章", "engraved guild membership badge"),
        item("research-nameplate", "研究員ネームプレート", "minimal research staff nameplate"),
        item("hologram-id-badge", "浮遊ホロIDバッジ", "floating holographic identification badge"),
        item("snow-bird-emblem", "白い小鳥の紋章", "white small-bird emblem pin with pale blue enamel")
      ]),
      category("shoulder-chest", "🪽 肩飾り・胸飾り", "肩線と胸元へ立体感を足す。", [
        item("gold-shoulder-chain", "金のショルダーチェーン", "fine gold chain draped from shoulder to chest"),
        item("tassel-epaulette", "房飾りエポレット", "ornate tasselled epaulette on one shoulder"),
        item("flower-shoulder-corsage", "肩置きフラワーコサージュ", "floral corsage resting on one shoulder"),
        item("feather-shoulder-clip", "羽根の肩クリップ", "layered feather shoulder clip"),
        item("crystal-chest-chain", "水晶チェストチェーン", "delicate crystal chest chain over clothing"),
        item("ceremonial-sash-clasp", "式典サッシュ留め", "decorative clasp securing a ceremonial sash"),
        item("tactical-shoulder-beacon", "肩部シグナルビーコン", "compact signal beacon mounted on the shoulder"),
        item("floating-shoulder-halo", "浮遊ショルダーハロ", "small luminous halo hovering above one shoulder")
      ])
    ]),

    group("arms", "🧤 腕・手・指", "手元の演技を強めるグローブ、指輪、腕輪、端末。", [
      category("gloves", "🧤 手袋・グローブ", "素材と用途を分けた手袋。", [
        item("short-lace-gloves", "短丈レース手袋", "short lace gloves with scalloped edges"),
        item("long-satin-gloves", "長丈サテングローブ", "long satin evening gloves"),
        item("fingerless-leather-gloves", "指抜き革グローブ", "fingerless leather gloves with reinforced palms"),
        item("knit-mittens", "編み込みミトン", "warm cable-knit mittens"),
        item("white-service-gloves", "白い式典手袋", "pristine white ceremonial gloves"),
        item("gardening-gloves", "園芸作業グローブ", "practical gardening gloves with floral stitching"),
        item("tactical-grip-gloves", "滑り止め戦術グローブ", "tactical gloves with textured grip pads"),
        item("hologram-control-gloves", "ホロ操作グローブ", "sleek control gloves with luminous fingertip sensors")
      ]),
      category("bracelets", "⭕ ブレスレット・バングル", "手首を囲む装飾。", [
        item("charm-bracelet", "物語チャームブレスレット", "charm bracelet with several tiny keepsakes"),
        item("thin-gold-bangles", "細金バングル重ね", "stacked thin gold bangles"),
        item("woven-friendship-bracelet", "編み込み友情ブレスレット", "colorful woven friendship bracelet"),
        item("gem-tennis-bracelet", "一列宝石ブレスレット", "single-line gemstone tennis bracelet"),
        item("wood-bead-bracelet", "木珠ブレスレット", "polished wooden bead bracelet"),
        item("engraved-cuff", "彫刻メタルカフ", "wide engraved metal cuff bracelet"),
        item("medical-id-bracelet", "医療情報ブレスレット", "clean medical identification bracelet"),
        item("pulse-light-bracelet", "脈動ライトブレスレット", "translucent bracelet with a soft pulsing light")
      ]),
      category("rings", "💍 指輪・フィンガー装飾", "指先のクローズアップ向け。", [
        item("delicate-stacking-rings", "華奢リング重ね付け", "several delicate stacking rings"),
        item("signet-ring", "紋章シグネットリング", "engraved signet ring"),
        item("flower-ring", "小花モチーフリング", "tiny flower motif ring"),
        item("raw-crystal-ring", "原石クリスタルリング", "ring set with a small raw crystal"),
        item("chain-linked-rings", "細鎖連結リング", "two finger rings connected by a fine chain"),
        item("armor-knuckle-ring", "甲冑風ナックルリング", "articulated armor-inspired knuckle ring"),
        item("interface-control-ring", "操作インターフェースリング", "smart control ring projecting a tiny interface"),
        item("constellation-rings", "星座配置リング", "constellation-inspired rings across several fingers")
      ]),
      category("wrist-tech", "⌚ 時計・リスト端末", "時刻、計測、通信を担う腕装備。", [
        item("classic-leather-watch", "革ベルト機械式時計", "classic mechanical wristwatch with leather strap"),
        item("delicate-chain-watch", "細鎖ジュエリー時計", "delicate chain bracelet watch"),
        item("rugged-field-watch", "堅牢フィールドウォッチ", "rugged field watch with compass bezel"),
        item("diving-watch", "深海ダイバーズウォッチ", "heavy-duty diving watch"),
        item("medical-wrist-monitor", "生体情報リストモニター", "compact biometric wrist monitor"),
        item("map-projector-bracer", "地図投影リスト端末", "wrist device projecting a small map"),
        item("translator-wrist-unit", "翻訳リストユニット", "multilingual translator wrist unit"),
        item("transparent-smart-cuff", "透明スマートカフ", "transparent smart cuff with floating indicators")
      ]),
      category("arm-hand", "🛡️ 腕当て・手甲・手元飾り", "前腕と手の甲へ装備感を加える。", [
        item("embroidered-arm-cuffs", "刺繍アームカフ", "embroidered fabric arm cuffs"),
        item("leaf-vine-armlet", "蔓葉アームレット", "leaf-and-vine upper armlet"),
        item("pearl-hand-chain", "真珠ハンドチェーン", "pearl hand chain linking wrist and finger"),
        item("leather-bracers", "旅人の革ブレーサー", "weathered leather forearm bracers"),
        item("silver-gauntlet", "銀装飾の片手甲", "single silver ornamental gauntlet"),
        item("crystal-hand-guard", "結晶ハンドガード", "translucent crystal guard over the back of the hand"),
        item("mechanic-wrist-guards", "整備士リストガード", "oil-marked mechanic wrist guards"),
        item("energy-forearm-frame", "発光前腕フレーム", "open-frame energy bracer around the forearm")
      ])
    ]),

    group("waist", "🧷 腰・脚・足元", "全身絵の密度を上げるベルト、ポーチ、脚部装飾、靴の追加部品。", [
      category("belts", "🪢 ベルト・バックル", "腰の中心線と機能を作る。", [
        item("thin-double-belt", "細身ダブルベルト", "two slim layered waist belts"),
        item("ornate-buckle-belt", "彫刻バックルベルト", "belt with an ornate engraved buckle"),
        item("corset-style-belt", "コルセット風ワイドベルト", "wide corset-inspired waist belt worn over clothing"),
        item("woven-sash-belt", "織りサッシュベルト", "woven sash belt with long knotted ends"),
        item("rope-knot-belt", "結び縄ベルト", "decorative rope-knot belt"),
        item("tool-loop-belt", "道具ループベルト", "practical belt with several empty tool loops"),
        item("magnetic-buckle-belt", "磁気バックルベルト", "sleek belt with a magnetic clasp"),
        item("luminous-line-belt", "発光ラインベルト", "minimal belt traced by a soft luminous line")
      ]),
      category("waist-pouches", "👝 腰ポーチ・チェーン", "小型収納と腰回りの装飾。", [
        item("coin-pouch", "革のコインポーチ", "small leather coin pouch at the waist"),
        item("herb-pouches", "薬草小袋セット", "several labeled herb pouches on a belt"),
        item("scroll-case", "腰差し巻物筒", "slim scroll case attached at the waist"),
        item("camera-lens-pouch", "レンズ用腰ポーチ", "padded camera lens pouch on the hip"),
        item("decorative-waist-chain", "二連ウエストチェーン", "double decorative waist chain"),
        item("crystal-vial-belt", "結晶小瓶ベルト", "belt carrying tiny crystal vials"),
        item("modular-utility-pouches", "モジュール式腰ポーチ", "modular utility pouches arranged at the waist"),
        item("holo-data-capsules", "ホロデータカプセル腰装備", "small holographic data capsules clipped to the belt")
      ]),
      category("leg", "🦵 太腿・膝・脚部装備", "脚線に沿う実用・装飾パーツ。", [
        item("ribbon-thigh-band", "リボン太腿バンド", "decorative ribbon band around one thigh over clothing"),
        item("utility-thigh-pouch", "太腿ユーティリティポーチ", "compact utility pouch strapped to the thigh"),
        item("map-thigh-case", "太腿マップケース", "transparent map case secured to the thigh"),
        item("decorative-knee-guards", "装飾ニーパッド", "slim decorative knee guards"),
        item("leather-leg-wraps", "革紐レッグラップ", "crossed leather straps around the lower legs"),
        item("ceremonial-leg-chains", "儀礼用レッグチェーン", "fine ceremonial chains draped at the outer thigh"),
        item("mechanical-knee-brace", "機械式ニーブレース", "articulated mechanical knee brace"),
        item("luminous-leg-bands", "発光レッグバンド", "paired luminous bands around the lower legs")
      ]),
      category("anklets", "🔔 アンクレット・足首飾り", "歩きや足元の演出に。", [
        item("single-bell-anklet", "一鈴アンクレット", "delicate anklet with a single small bell"),
        item("shell-anklet", "貝殻アンクレット", "anklet made of tiny polished shells"),
        item("flower-chain-anklet", "小花鎖アンクレット", "fine flower-chain anklet"),
        item("silver-leaf-anklet", "銀葉アンクレット", "silver leaf anklet"),
        item("woven-cord-anklet", "編み紐アンクレット", "colorful woven cord anklet"),
        item("crystal-drop-anklet", "結晶雫アンクレット", "crystal drop anklet catching the light"),
        item("tracker-anklet", "探査用足首トラッカー", "compact expedition tracker at the ankle"),
        item("holographic-ankle-ring", "ホログラム足首リング", "holographic ring hovering around the ankle")
      ]),
      category("footwear-parts", "🥾 靴の追加部品", "衣装を置換せず、足元へ後付けする部品。", [
        item("ribbon-shoe-clips", "リボン靴クリップ", "removable ribbon clips on the shoes"),
        item("gem-shoe-buckles", "宝石靴バックル", "jeweled buckles on the footwear"),
        item("winged-ankle-ornaments", "翼型アンクル飾り", "small wing ornaments at the ankles"),
        item("boot-chain-wraps", "ブーツチェーン巻き", "decorative chains wrapped around the boots"),
        item("travel-spats", "旅装スパッツ", "protective travel spats over the lower boots"),
        item("riding-spurs", "乗馬用小型拍車", "small polished riding spurs"),
        item("magnetic-sole-modules", "磁気ソールモジュール", "magnetic sole modules attached beneath the boots"),
        item("hover-heel-units", "浮遊ヒールユニット", "compact hovering units beneath the heels")
      ])
    ]),

    group("back", "🎒 背中・バッグ・携行", "収納、旅、翼、背負い装備を用途別に整理。", [
      category("backpacks", "🎒 リュック・背負い袋", "容量と世界観を選び分ける。", [
        item("small-canvas-backpack", "小型キャンバスリュック", "small canvas backpack with leather straps"),
        item("rolltop-travel-pack", "ロールトップ旅リュック", "roll-top travel backpack with side pockets"),
        item("school-box-backpack", "箱型スクールバッグ", "structured box-shaped school backpack"),
        item("picnic-basket-pack", "背負いピクニック籠", "woven picnic basket backpack"),
        item("alchemist-pack", "錬金術師バックパック", "alchemist backpack fitted with padded bottle racks"),
        item("mountaineering-pack", "登山遠征パック", "large mountaineering pack with rolled bedding"),
        item("transparent-tech-pack", "透明テックリュック", "transparent technical backpack with organized modules"),
        item("floating-orb-pack", "浮遊球体バックパック", "compact spherical backpack hovering just behind the body")
      ]),
      category("shoulder-bags", "👜 肩掛け・斜め掛けバッグ", "日常から任務用まで。", [
        item("mini-saddle-bag", "ミニサドルバッグ", "small saddle-shaped crossbody bag"),
        item("crescent-shoulder-bag", "三日月ショルダーバッグ", "crescent-shaped shoulder bag"),
        item("book-shaped-bag", "本型ショルダーケース", "book-shaped shoulder case with metal corners"),
        item("camera-messenger-bag", "カメラ用メッセンジャー", "padded camera messenger bag"),
        item("herbalist-satchel", "薬草師サッチェル", "weathered herbalist satchel with labeled pockets"),
        item("medical-field-bag", "救護フィールドバッグ", "clean medical field shoulder bag"),
        item("hard-shell-sling", "ハードシェルスリング", "compact hard-shell sling bag"),
        item("hologram-envelope-bag", "ホログラム封筒バッグ", "translucent envelope bag with holographic edges")
      ]),
      category("cases", "💼 ケース・筒・携行容器", "中身を守る硬質携行具。", [
        item("document-tube", "防水書類筒", "waterproof document tube with shoulder strap"),
        item("instrument-case", "細身楽器ケース", "slim hard instrument case"),
        item("specimen-case", "標本携行ケース", "reinforced specimen carrying case"),
        item("tea-set-case", "旅行茶器ケース", "compact travel tea-set case"),
        item("artist-portfolio", "画材ポートフォリオケース", "large flat artist portfolio case"),
        item("tool-roll", "巻き式ツールロール", "rolled tool organizer tied with straps"),
        item("sealed-data-case", "封印データケース", "sealed high-security data case"),
        item("cryogenic-sample-case", "低温試料ケース", "small cryogenic sample case with frost on its edges")
      ]),
      category("back-ornaments", "🪽 背中装飾・翼補助", "衣装の背面シルエットを作る装飾。", [
        item("ribbon-back-bow", "大型バックリボン", "large structured ribbon bow at the lower back"),
        item("flower-back-cascade", "背中の花飾りカスケード", "cascade of small flowers down the upper back"),
        item("feather-back-fan", "羽根の背面扇飾り", "fan-shaped feather ornament mounted behind the shoulders"),
        item("ceremonial-back-banner", "儀礼用背旗", "small ceremonial back banner with embroidered crest"),
        item("crystal-wing-frame", "結晶翼フレーム", "open crystal frame suggesting stylized wings"),
        item("mechanical-wing-harness", "機械翼ハーネス", "compact mechanical wing support harness"),
        item("floating-rune-ring", "背面浮遊ルーン環", "large rune ring hovering behind the back"),
        item("snow-bird-winglet", "白い小鳥の翼飾り", "small white bird-inspired winglets at the shoulder blades")
      ]),
      category("mounted-gear", "🧰 背負い機材・支援装備", "装備として背面へ固定する機材。", [
        item("rolled-bedroll", "背負い寝具ロール", "rolled bedroll secured across the backpack"),
        item("rope-and-carabiners", "登攀ロープとカラビナ", "coiled climbing rope and carabiners on the back"),
        item("compact-oxygen-tank", "小型酸素タンク", "compact oxygen tank mounted on the back"),
        item("radio-pack", "長距離無線パック", "long-range radio pack with a flexible antenna"),
        item("field-solar-panel", "折り畳み太陽電池", "folded portable solar panel attached to the pack"),
        item("medical-support-frame", "救護支援フレーム", "lightweight medical support frame carried on the back"),
        item("micro-jetpack", "小型マイクロジェットパック", "compact micro jetpack with shielded nozzles"),
        item("sensor-mast-pack", "センサーマストパック", "back-mounted sensor mast with rotating scanners")
      ])
    ]),

    group("tools", "🧰 生活・職業・趣味道具", "人物の役割を一目で伝える、非武器の小道具。", [
      category("creative", "🎨 創作・撮影", "絵、写真、映像制作の携行品。", [
        item("spiral-sketchbook", "リング式スケッチブック", "open spiral sketchbook held at the side"),
        item("brush-roll-case", "筆巻きケース", "rolled case filled with clean paintbrushes"),
        item("compact-watercolor-set", "携帯水彩セット", "compact watercolor palette and water brush"),
        item("film-camera", "クラシック銀塩カメラ", "classic film camera with a woven strap"),
        item("instant-camera", "インスタントカメラ", "instant camera with a photo emerging"),
        item("handheld-camcorder", "小型ハンドカム", "compact handheld video camera"),
        item("storyboard-tablet", "絵コンテタブレット", "drawing tablet displaying storyboard panels"),
        item("portable-light-meter", "携帯ライトメーター", "small professional light meter")
      ]),
      category("study-medical", "📚 学術・医療", "研究、観察、診療の道具。", [
        item("annotated-notebook", "書き込み研究ノート", "well-used research notebook filled with annotations"),
        item("magnifying-loupe", "精密観察ルーペ", "precision magnifying loupe"),
        item("folding-microscope", "折り畳み顕微鏡", "compact folding field microscope"),
        item("sample-vial-rack", "試料小瓶ラック", "portable rack of labeled sample vials"),
        item("stethoscope-case", "聴診器ケース", "neatly coiled stethoscope in an open case"),
        item("medical-scanner", "携帯医療スキャナー", "handheld noninvasive medical scanner"),
        item("anatomy-chart-tablet", "解剖図タブレット", "tablet displaying a clean anatomy diagram"),
        item("field-test-kit", "現地検査キット", "compact field testing kit with color indicators")
      ]),
      category("craft-cooking", "🍳 料理・工芸", "職人や店員の手元へ。", [
        item("recipe-card-holder", "レシピカードホルダー", "small recipe card holder with handwritten notes"),
        item("pastry-piping-bag", "菓子用絞り袋", "pastry piping bag fitted with a metal tip"),
        item("tea-scoop-case", "茶匙と茶筒", "tea scoop beside a small artisan tea caddy"),
        item("barista-tamping-kit", "バリスタ用タンピング具", "compact barista tamper and dosing tool"),
        item("sewing-kit", "携帯裁縫箱", "open travel sewing kit with colorful threads"),
        item("embroidery-hoop", "刺繍枠", "small embroidery hoop with work in progress"),
        item("jeweler-pliers", "宝飾用精密プライヤー", "fine jeweler pliers and wire spool"),
        item("woodcarving-tool-roll", "木彫り工具巻き", "rolled set of small woodcarving tools")
      ]),
      category("music-stage", "🎵 音楽・舞台", "演奏、歌唱、舞台裏の道具。", [
        item("vintage-microphone", "ヴィンテージマイク", "vintage chrome stage microphone"),
        item("wireless-headset-mic", "ワイヤレスヘッドセットマイク", "discreet wireless headset microphone"),
        item("conductor-baton-case", "指揮棒ケース", "slim conductor baton case"),
        item("sheet-music-folder", "楽譜フォルダー", "black music folder with marked sheet music"),
        item("guitar-pick-necklace", "ピックホルダーネックレス", "guitar pick holder worn as a necklace"),
        item("stage-in-ear-monitors", "舞台用インイヤーモニター", "custom stage in-ear monitors"),
        item("portable-mixer", "小型音響ミキサー", "compact portable audio mixer"),
        item("holographic-songbook", "ホログラム歌詞ブック", "floating holographic songbook interface")
      ]),
      category("field-travel", "🧭 野外・旅行", "移動、観測、キャンプの道具。", [
        item("brass-compass", "真鍮方位磁針", "open brass compass in one hand"),
        item("folded-topographic-map", "折り畳み地形図", "folded topographic map with marked routes"),
        item("compact-binoculars", "小型双眼鏡", "compact field binoculars"),
        item("metal-water-bottle", "金属水筒", "durable metal water bottle with strap"),
        item("camp-lantern", "折り畳みキャンプランタン", "collapsible camping lantern"),
        item("multi-tool", "携帯マルチツール", "folding multipurpose tool"),
        item("weather-meter", "携帯気象計", "handheld weather meter with small impeller"),
        item("satellite-messenger", "衛星通信メッセンジャー", "compact satellite messenger with map coordinates")
      ])
    ]),

    group("special", "🛡️ 魔法・SF・戦術支援", "武器棚と重ならない、防護・観測・補助装備。", [
      category("catalysts", "🔮 魔法触媒", "術式の焦点になる非武器アイテム。", [
        item("floating-spellbook", "浮遊魔導書", "open spellbook floating beside the caster"),
        item("crystal-focus-orb", "結晶フォーカスオーブ", "small crystal focus orb hovering above the palm"),
        item("rune-card-deck", "ルーンカードデッキ", "deck of rune cards orbiting in a neat arc"),
        item("elemental-vial-set", "元素小瓶セット", "belt set of softly glowing elemental vials"),
        item("astral-compass", "星界コンパス", "ornate astral compass with rotating rings"),
        item("spell-thread-spool", "魔力糸スプール", "spool of luminous spell thread"),
        item("memory-crystal", "記憶結晶", "faceted memory crystal containing faint scenes"),
        item("portable-ritual-frame", "携帯儀式フレーム", "folding ritual frame inscribed with tiny sigils")
      ]),
      category("talismans", "🧿 護符・遺物・聖具", "信仰、守護、封印を示す。", [
        item("paper-talisman-case", "紙護符ケース", "lacquered case holding folded paper talismans"),
        item("protective-knot-charm", "守護結びチャーム", "intricate protective knot charm"),
        item("sun-relic-medallion", "太陽遺物メダリオン", "ancient sun relic medallion"),
        item("moon-prayer-beads", "月祈祷ビーズ", "moonlit prayer beads wrapped around the wrist"),
        item("sealed-bell", "封印鈴", "small ritual bell wrapped with sealing cords"),
        item("saint-feather-reliquary", "聖羽根の聖遺物箱", "tiny reliquary containing a pale feather"),
        item("guardian-eye-amulet", "守護眼アミュレット", "guardian-eye amulet with blue enamel"),
        item("floating-sanctuary-sigil", "浮遊聖域印", "small sanctuary sigil floating before the chest")
      ]),
      category("defense", "🛡️ 防護・救難", "攻撃ではなく生存性を上げる装備。", [
        item("folding-arm-shield", "折り畳み腕部シールド", "compact folding shield mounted on the forearm"),
        item("impact-collar", "衝撃保護カラー", "soft impact-protection collar around the neck"),
        item("rescue-beacon", "救難ビーコン", "bright emergency rescue beacon clipped to the chest"),
        item("thermal-blanket-pouch", "保温シートポーチ", "compact thermal blanket pouch at the waist"),
        item("filter-mask-case", "防塵マスクケース", "sealed protective mask case on a shoulder strap"),
        item("healing-charm-pack", "治癒護符パック", "small pouch of organized healing charms"),
        item("personal-barrier-emitter", "個人障壁エミッター", "personal barrier emitter mounted at the belt"),
        item("emergency-stasis-capsule", "緊急静止カプセル", "small emergency stasis capsule in a protected holster")
      ]),
      category("cyber-wearables", "🦾 サイバー装着機器", "身体へ装着する補助インターフェース。", [
        item("temple-data-port", "こめかみデータポート", "sleek data port at the temple"),
        item("neck-interface-nodes", "首筋インターフェースノード", "small interface nodes along the side of the neck"),
        item("finger-motion-caps", "指先モーションキャップ", "motion-capture caps on the fingertips"),
        item("spine-light-modules", "背骨沿いライトモジュール", "small luminous modules aligned over clothing along the spine"),
        item("biometric-chest-patch", "胸部バイオメトリックパッチ", "thin biometric patch on the upper chest"),
        item("augmented-knee-servos", "膝部補助サーボ", "compact assistive servos beside the knees"),
        item("haptic-glove-nodes", "触覚グローブノード", "fine haptic nodes across the gloves"),
        item("floating-ui-bracelet", "浮遊UIブレスレット", "bracelet projecting a layered floating interface")
      ]),
      category("drones", "🛰️ ドローン・支援ユニット", "人物とは別個体の小型支援機。", [
        item("camera-orb-drone", "撮影球体ドローン", "small camera orb drone hovering nearby"),
        item("lantern-drone", "灯火ドローン", "compact lantern drone casting soft light"),
        item("medical-assistant-drone", "救護アシストドローン", "white medical assistant drone with folded tools"),
        item("map-scout-drone", "地図偵察ドローン", "small scout drone projecting a terrain map"),
        item("parcel-carrier-drone", "荷物運搬ドローン", "quiet carrier drone holding a small parcel"),
        item("butterfly-sensor-drones", "蝶型センサードローン群", "several butterfly-shaped sensor drones"),
        item("bird-companion-drone", "小鳥型コンパニオンドローン", "friendly small-bird companion drone perched nearby"),
        item("shield-orbit-drone", "周回防護ドローン", "compact protective drone orbiting the character")
      ])
    ]),

    group("design", "🎨 素材・色・状態調整", "選んだ装備へ後付けする質感・素材・状態。単独でも装備全体の統一指示として使える。", [
      category("metals", "⚙️ 金属仕上げ", "装備の金属部分を統一。", [
        item("brushed-silver", "つや消し銀仕上げ", "brushed silver accessory details with restrained reflections"),
        item("polished-gold", "鏡面金仕上げ", "polished gold accessory details with clean highlights"),
        item("antique-brass", "古美真鍮仕上げ", "antique brass accessory details with darkened recesses"),
        item("rose-gold", "ローズゴールド仕上げ", "rose-gold accessory details with warm reflections"),
        item("blackened-steel", "黒染め鋼仕上げ", "blackened steel accessory details with subtle edge wear"),
        item("iridescent-titanium", "虹色チタン仕上げ", "iridescent titanium accessory details"),
        item("white-ceramic-metal", "白磁金属仕上げ", "white ceramic-coated metal accessory surfaces"),
        item("frosted-chrome", "霜銀クローム仕上げ", "frosted chrome accessory details with icy blue reflections")
      ]),
      category("gems", "💠 宝石・結晶仕上げ", "主石と装飾石の見え方。", [
        item("clear-crystal-inlay", "透明水晶インレイ", "clear crystal inlays within the accessories"),
        item("moonstone-cabochons", "月長石カボション", "softly luminous moonstone cabochons"),
        item("opal-mosaic", "オパールモザイク", "fine opal mosaic across accessory surfaces"),
        item("ruby-accents", "深紅ルビーアクセント", "small deep-ruby accents on the accessories"),
        item("sapphire-line", "蒼玉ライン装飾", "slender sapphire line inlays"),
        item("emerald-drops", "翠玉ドロップ装飾", "small emerald drop ornaments"),
        item("raw-quartz-clusters", "原石石英クラスター", "tiny raw quartz clusters integrated into the gear"),
        item("snowflake-crystals", "雪結晶カット装飾", "snowflake-cut crystal decorations")
      ]),
      category("soft-materials", "🧵 布・革・自然素材", "硬い装備を衣装へ馴染ませる。", [
        item("velvet-trim", "ベルベット縁取り", "soft velvet trim on accessory edges"),
        item("silk-wrapped", "絹巻き仕上げ", "accessory handles and bands wrapped in silk"),
        item("embossed-leather", "型押し革仕上げ", "embossed leather accessory surfaces"),
        item("woven-cord-details", "組紐ディテール", "intricate woven cord details"),
        item("lace-overlay", "レース重ね仕上げ", "fine lace overlay on selected accessories"),
        item("fur-lined", "毛皮内張り仕上げ", "soft fur lining on cold-weather accessories"),
        item("wood-and-resin", "木材と樹脂の複合仕上げ", "polished wood and clear resin accessory construction"),
        item("pressed-flower-resin", "押し花樹脂仕上げ", "pressed flowers sealed inside transparent resin accessories")
      ]),
      category("transparent", "🌈 透明・発光・ホログラム", "未来感や幻想感を追加。", [
        item("clear-acrylic", "透明アクリル装備", "clear acrylic accessory parts with crisp edges"),
        item("frosted-glass", "曇りガラス装備", "frosted glass accessory surfaces"),
        item("translucent-pastel", "半透明パステル素材", "translucent pastel accessory materials"),
        item("holographic-film", "ホログラムフィルム加工", "holographic film coating across accessory surfaces"),
        item("edge-lit-panels", "エッジ発光パネル", "transparent accessory panels lit along their edges"),
        item("floating-light-particles", "微光粒子内包", "tiny light particles suspended inside transparent accessories"),
        item("liquid-core", "液体コア装飾", "transparent accessories containing gently moving liquid cores"),
        item("aurora-glass", "オーロラガラス装飾", "aurora-tinted glass accessory details")
      ]),
      category("condition", "🛠️ 状態・使い込み・演出", "新品、旅装、戦歴、環境反応を表す。", [
        item("newly-crafted", "作りたての装備", "newly crafted accessories with pristine surfaces"),
        item("well-maintained", "手入れされた愛用品", "well-maintained accessories with gentle signs of use"),
        item("travel-worn", "旅で使い込んだ装備", "travel-worn accessories with softened edges and dust"),
        item("rain-dappled", "雨粒の残る装備", "accessories dotted with fresh rain droplets"),
        item("snow-dusted", "雪化粧した装備", "accessories lightly dusted with fresh snow"),
        item("battle-scratched", "戦歴の浅い傷", "accessories marked by controlled battle scratches"),
        item("restored-antique", "修復された古装備", "restored antique accessories retaining subtle age marks"),
        item("magic-responsive", "魔力反応する装備", "accessories activating with faint responsive runes")
      ])
    ])
  ];

  const countItems = () => groups.reduce((sum, currentGroup) => (
    sum + currentGroup.categories.reduce((groupSum, currentCategory) => groupSum + currentCategory.items.length, 0)
  ), 0);

  window.SHIMA_ACCESSORY_AKASHIC_V1 = Object.freeze({
    version: "1.2.0",
    title: "ACCESSORY ARSENAL / 装備アカシックレコード",
    expectedCount: 420,
    groups,
    countItems
  });
})();
