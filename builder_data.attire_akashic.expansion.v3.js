(function(){
  "use strict";

  const EXPANSION_ID = "attire-akashic-expansion-v3";
  const categoriesByGroup = {
    quick: [
      {
        key: "v3-world-journey-sets",
        title: "🌍 世界の旅・完成コーデ",
        note: "移動手段と気候が一目で伝わる、旅行用の完成服。",
        items: [
          ["alpine-rail-traveler", "アルプス鉄道の旅人", "alpine rail travel outfit, warm belted coat, layered knit top, tailored wool trousers, compact luggage gloves, non-slip boots"],
          ["desert-night-caravan", "砂漠夜行キャラバン", "desert night caravan outfit, breathable long tunic, insulated wrap cloak, sand scarf, utility sash, closed walking boots"],
          ["northern-harbor-traveler", "北方港の旅支度", "northern harbor travel outfit, water-resistant pea coat, cable knit layers, durable straight pants, wool cap, deck-ready boots"],
          ["island-ferry-passenger", "島嶼フェリーの旅人", "island ferry travel outfit, airy overshirt, sun-protective inner layer, loose linen trousers, woven tote, secure sandals"],
          ["rainforest-lodge-guest", "熱帯雨林ロッジ滞在服", "rainforest lodge outfit, quick-dry field shirt, ventilated travel vest, lightweight long pants, insect-shield socks, trail shoes"],
          ["old-town-walking-tour", "古都街歩きツアー", "old town walking outfit, refined short jacket, breathable blouse, flexible midi skirt, crossbody map bag, cushioned shoes"],
          ["sleeper-train-voyage", "大陸寝台列車の旅装", "long-distance sleeper train outfit, wrinkle-resistant cardigan coat, soft layered shirt, relaxed tailored pants, cabin slippers, walking shoes"],
          ["polar-base-visitor", "極地基地訪問コーデ", "polar base visitor outfit, insulated expedition parka, thermal mid-layers, snow bib trousers, liner gloves, traction winter boots"]
        ]
      },
      {
        key: "v3-life-event-sets",
        title: "🎉 節目・招待日の完成コーデ",
        note: "卒業、再会、オープニングなど、現代の具体的な日にすぐ使える。",
        items: [
          ["graduation-portrait-day", "卒業記念撮影の装い", "graduation portrait outfit, neat academic gown layer, crisp formal shirt, tailored lower garment, polished shoes"],
          ["gallery-opening-guest", "ギャラリー開幕招待客", "gallery opening guest outfit, sculptural light jacket, refined monochrome inner layer, tailored wide trousers, artistic accent shoes"],
          ["winter-wedding-guest", "冬の結婚式ゲスト", "winter wedding guest attire, elegant long-sleeve formal dress, warm dress coat, refined gloves, closed formal shoes"],
          ["garden-wedding-guest", "夏のガーデン婚ゲスト", "summer garden wedding guest attire, breathable formal ensemble, light structured shawl, graceful midi hem, stable dress shoes"],
          ["reunion-dinner", "久しぶりの再会ディナー", "reunion dinner outfit, polished casual jacket, softly draped top, tailored trousers, understated jewelry accents, elegant loafers"],
          ["book-launch-reception", "出版記念レセプション", "book launch reception outfit, literary smart jacket, fine knit inner layer, pleated long skirt, compact document clutch, quiet formal shoes"],
          ["community-award-night", "地域表彰式の夜", "community award night attire, dignified formal coat, clean high-neck inner layer, full-length tailored trousers, ceremonial pin, polished shoes"],
          ["charity-gala-volunteer", "チャリティ式典運営スタッフ", "charity gala volunteer uniform, discreet formal jacket, event credential sash, flexible dress trousers, comfortable polished shoes"]
        ]
      },
      {
        key: "v3-original-callings-sets",
        title: "🌠 オリジナル職業・完成衣装",
        note: "アルカディアとは独立した、一般創作世界の新しい職業服。",
        items: [
          ["memory-restorer", "記憶修復師", "memory restorer outfit, layered archive coat, translucent index tabs, precision glove set, labeled vial belt, quiet work boots"],
          ["weather-library-courier", "天候図書館の配達人", "weather library courier outfit, cloud-map jacket, sealed forecast satchel, wind ribbon fasteners, water-resistant trousers, storm boots"],
          ["whisper-clock-caretaker", "囁き時計の管理人", "whisper clock caretaker attire, sound-dampening artisan coat, tiny key harness, padded cuffs, timing tool belt, soft-soled shoes"],
          ["floating-orchard-ranger", "浮遊果樹園のレンジャー", "floating orchard ranger outfit, leaf-panel flight vest, fruit collecting harness, rope utility belt, flexible field trousers, grip boots"],
          ["echo-museum-guide", "残響博物館の案内人", "echo museum guide uniform, wave-pattern long jacket, acoustic badge collar, exhibit key sash, tailored trousers, silent walking shoes"],
          ["comet-laundry-artisan", "彗星クリーニング職人", "comet laundry artisan workwear, heat-shield apron coat, luminous fabric clips, long protective sleeves, sorting pouch belt, insulated shoes"],
          ["shadow-lantern-inspector", "影灯籠の検査官", "shadow lantern inspector outfit, dark reflective trench, light-meter chest rig, sealed sample cases, fitted gloves, reinforced ankle boots"],
          ["dream-seed-broker", "夢種の仲介人", "dream seed broker attire, botanical ledger coat, seed capsule bandolier, layered negotiation sash, elegant gloves, polished travel boots"]
        ]
      }
    ],
    daily: [
      {
        key: "v3-season-transitions",
        title: "🌦️ 季節の変わり目コーデ",
        note: "朝晩の寒暖差や急な天候変化へ対応する、普段着の完成形。",
        items: [
          ["early-spring-thaw", "早春の雪解け服", "early spring transition outfit, light insulated jacket, breathable knit layer, water-resistant trousers, thaw-season ankle boots"],
          ["late-spring-showers", "晩春の通り雨コーデ", "late spring shower outfit, packable rain coat, airy collared shirt, cropped quick-dry pants, compact umbrella strap, waterproof loafers"],
          ["midsummer-sun-shield", "真夏の日差し対策服", "midsummer sun-shield outfit, UV-protective overshirt, breathable inner top, loose long trousers, shade hat, ventilated shoes"],
          ["late-summer-evening", "晩夏の夕風レイヤー", "late summer evening outfit, light open cardigan, moisture-friendly shirt, flowing ankle pants, thin scarf, comfortable sandals"],
          ["early-autumn-breeze", "初秋の風コーデ", "early autumn outfit, cropped field jacket, fine gauge knit, relaxed pleated trousers, lightweight socks, walking shoes"],
          ["deep-autumn-commute", "深秋の通勤レイヤー", "deep autumn commute outfit, lined trench coat, warm vest layer, tailored pants, compact gloves, weather-ready boots"],
          ["first-snow-errand", "初雪の買い物服", "first snow errand outfit, short insulated parka, thermal sweatshirt, lined easy pants, knit cap, non-slip snow shoes"],
          ["indoor-outdoor-swing", "室内外寒暖差コーデ", "temperature-swing daily outfit, removable overshirt jacket, breathable base layer, adjustable trousers, packable scarf, all-season shoes"]
        ]
      },
      {
        key: "v3-adaptive-daily",
        title: "🫧 アダプティブ・着脱しやすい日常服",
        note: "動きやすさ、感覚の快適さ、着脱の容易さを衣装構造で支える。",
        items: [
          ["magnetic-front-daily", "マグネット前開きデイリー", "adaptive daily outfit, discreet magnetic front closures, soft collarless top, pull-on trousers, easy-entry shoes"],
          ["seated-comfort-daily", "座位快適コーデ", "seated-comfort outfit, higher back waistline, pressure-reducing flat seams, relaxed thigh panels, side-access pockets, secure shoes"],
          ["sensory-soft-layers", "感覚に優しいソフトレイヤー", "sensory-friendly outfit, tagless soft knit layers, covered interior seams, gentle waistband, smooth socks, lightweight shoes"],
          ["one-hand-dressing", "片手で着脱しやすい服", "one-hand dressing outfit, large easy-grip zipper pulls, side-opening top, elastic-back trousers, hook-free slip-on shoes"],
          ["adjustable-fit-daily", "体調変化対応フィット", "adjustable-fit daily outfit, concealed waist tabs, flexible side panels, variable cuff openings, supportive walking shoes"],
          ["high-contrast-fasteners", "高コントラスト留め具服", "accessible daily outfit, high-contrast fastening points, tactile zipper tabs, simple layered top, straight trousers, stable shoes"],
          ["medical-access-layering", "医療アクセス対応レイヤー", "medical-access daily outfit, discreet sleeve and side openings, soft layered shirt, adjustable loose trousers, easy-clean footwear"],
          ["low-fatigue-lightwear", "低負担ライトウェア", "low-fatigue daily outfit, ultralight cardigan jacket, breathable relaxed top, minimal-hardware pants, cushioned lightweight shoes"]
        ]
      },
      {
        key: "v3-neighborhood-life",
        title: "🏘️ 街の過ごし方・普段着",
        note: "近所の用事や趣味に小さな個性を与える、現代の生活服。",
        items: [
          ["coworking-freelancer", "コワーキングのフリーランス", "coworking day outfit, relaxed blazer cardigan, clean layered tee, flexible tapered pants, laptop sleeve bag, quiet sneakers"],
          ["neighborhood-market", "近所のマーケット巡り", "neighborhood market outfit, practical overshirt, breathable top, easy straight pants, reusable tote harness, walking sandals"],
          ["public-library-day", "公共図書館で過ごす日", "public library outfit, soft structured cardigan, band-collar shirt, quiet wide trousers, book tote, soft-soled loafers"],
          ["weekend-pottery-class", "週末の陶芸教室", "weekend pottery class outfit, washable smock apron, rolled-sleeve shirt, durable relaxed jeans, clay-friendly slip-on shoes"],
          ["balcony-gardening", "ベランダ園芸の普段着", "balcony gardening outfit, pocketed chore vest, breathable long-sleeve top, knee-friendly pants, compact tool apron, rubber garden shoes"],
          ["evening-study-session", "夜の勉強会コーデ", "evening study outfit, cozy zip cardigan, layered collared top, comfortable straight trousers, document shoulder bag, simple sneakers"],
          ["record-shop-browsing", "レコードショップ巡り", "record shop browsing outfit, vintage-cut short jacket, graphic knit top, relaxed dark jeans, canvas record tote, retro sneakers"],
          ["community-cleanup-day", "地域清掃デー", "community cleanup outfit, visible utility vest, washable long-sleeve shirt, reinforced work pants, protective gloves, sturdy walking shoes"]
        ]
      }
    ],
    role: [
      {
        key: "v3-backstage-production",
        title: "🎭 舞台・映像の裏方服",
        note: "撮影、音響、照明、進行を支える、目立たず機能的な専門服。",
        items: [
          ["stage-lighting-technician", "舞台照明技師", "stage lighting technician workwear, matte black utility shirt, cable-safe trousers, focus tool belt, grip gloves, safety shoes"],
          ["live-sound-engineer", "ライブ音響エンジニア", "live sound engineer outfit, dark pocketed jacket, headset cable loops, equipment pass lanyard, flexible cargo pants, quiet shoes"],
          ["stage-manager", "舞台監督", "stage manager workwear, black structured overshirt, cue book harness, compact communication belt, stretch trousers, silent non-slip shoes"],
          ["costume-dresser", "衣装進行スタッフ", "costume dresser uniform, pin-safe utility apron, fitted dark shirt, alteration tool pockets, flexible trousers, backstage shoes"],
          ["prop-master", "小道具管理主任", "prop master workwear, reinforced workshop vest, labeled pocket system, dark work trousers, protective gloves, safety-toe shoes"],
          ["camera-assistant", "撮影カメラアシスタント", "camera assistant outfit, lens-cloth vest, weatherproof field shirt, battery pouch belt, articulated pants, set-ready boots"],
          ["broadcast-floor-director", "放送フロアディレクター", "broadcast floor director uniform, headset-ready blazer, cue card pocket, discreet belt pack, tailored stretch pants, studio shoes"],
          ["museum-installation-crew", "博物館展示施工スタッフ", "museum installation crew workwear, clean protective overshirt, padded tool vest, dust-safe trousers, handling gloves, non-marking safety shoes"]
        ]
      },
      {
        key: "v3-emergency-support",
        title: "🚨 救助・災害対応・復旧服",
        note: "危険を煽る演出ではなく、安全と識別を優先した実務装備。",
        items: [
          ["mountain-rescue-team", "山岳救助隊", "mountain rescue uniform, high-visibility insulated shell, climbing harness access, rescue radio vest, reinforced trousers, alpine boots"],
          ["flood-response-team", "水害対応チーム", "flood response gear, high-visibility waterproof dry suit layer, flotation vest, sealed radio pockets, grip gloves, water rescue boots"],
          ["wildfire-lookout", "山火事監視員", "wildfire lookout uniform, flame-resistant field shirt, smoke-protective neck cover, observation pouch belt, durable pants, heat-ready boots"],
          ["emergency-dispatcher", "緊急指令員", "emergency dispatcher uniform, professional headset-ready shirt, identification vest, comfortable tailored trousers, utility cardigan, quiet office shoes"],
          ["mobile-clinic-staff", "巡回診療スタッフ", "mobile clinic uniform, clean field coat, organized medical pocket panels, washable trousers, protective gloves, non-slip shoes"],
          ["disaster-logistics-coordinator", "災害物流調整員", "disaster logistics uniform, high-visibility coordination vest, map case harness, weatherproof shirt, cargo trousers, durable boots"],
          ["coastal-watch-officer", "沿岸監視員", "coastal watch uniform, weatherproof patrol jacket, binocular harness, radio chest pocket, wind-resistant trousers, deck boots"],
          ["utility-restoration-crew", "インフラ復旧作業員", "utility restoration workwear, arc-rated high-visibility jacket, insulated tool belt, reinforced work pants, protective gloves, safety boots"]
        ]
      },
      {
        key: "v3-food-agriculture-hospitality",
        title: "🌾 食・農・おもてなしの専門服",
        note: "食材の生産から加工、接客までを、道具と機能で描き分ける。",
        items: [
          ["artisan-pastry-chef", "パティスリー職人", "artisan pastry chef uniform, double-breasted short chef jacket, fine piping, waist apron, heat cloth loop, non-slip kitchen shoes"],
          ["tea-sommelier", "ティーソムリエ", "tea sommelier uniform, refined stand-collar jacket, tasting spoon pocket, tea cloth sash, tailored trousers, quiet service shoes"],
          ["coffee-roaster", "コーヒー焙煎士", "coffee roaster workwear, heat-resistant canvas apron, rolled work shirt, sample spoon loops, durable trousers, workshop shoes"],
          ["artisan-cheesemaker", "チーズ熟成職人", "artisan cheesemaker uniform, washable dairy coat, waterproof apron, sleeve guards, practical trousers, slip-resistant work boots"],
          ["greenhouse-grower", "温室栽培家", "greenhouse grower workwear, breathable utility overshirt, pruning tool apron, moisture-resistant pants, light gloves, washable garden shoes"],
          ["apiary-keeper", "養蜂場の管理人", "apiary keeper suit, ventilated protective jacket, integrated mesh veil, secured cuffs, reinforced light trousers, closed field boots"],
          ["heritage-hotel-concierge", "クラシックホテルのコンシェルジュ", "heritage hotel concierge uniform, tailored long jacket, discreet brass buttons, service waistcoat, formal trousers, polished shoes"],
          ["dining-car-steward", "食堂車スチュワード", "dining car steward uniform, fitted service jacket, compact apron panel, ticket and order pockets, tailored trousers, stable formal shoes"]
        ]
      }
    ],
    formal: [
      {
        key: "v3-formal-dress-codes",
        title: "🎖️ 礼装コード・公式の格",
        note: "式典の格と時間帯を衣装構造で描き分ける。",
        items: [
          ["white-tie-evening", "ホワイトタイ夜礼装", "white-tie evening ensemble, formal tailcoat, white bow tie, white waistcoat, high-waisted dress trousers, patent shoes"],
          ["creative-black-tie", "クリエイティブ・ブラックタイ", "creative black-tie attire, velvet dinner jacket, refined tonal shirt, formal wide trousers, artistic lapel accent, polished shoes"],
          ["daytime-state-ceremony", "昼の国家式典礼装", "daytime state ceremony attire, formal long coat, restrained waistcoat, crisp shirt, tailored trousers, ceremonial gloves, dress shoes"],
          ["international-summit-reception", "国際首脳会議レセプション礼装", "international summit reception attire, dignified formal jacket, discreet insignia placement, elegant full-length lower garment, polished closed shoes"],
          ["academic-convocation", "大学式典のアカデミックドレス", "academic convocation attire, formal academic gown, discipline-colored hood, structured cap, neat formal clothing beneath, polished shoes"],
          ["opera-premiere-guest", "オペラプレミア招待客", "opera premiere guest attire, dramatic formal coat, refined evening inner ensemble, elegant long silhouette, subtle gloves, dress shoes"],
          ["civil-ceremony-formal", "公的証明式の礼装", "civil ceremony formal outfit, clean tailored suit, understated formal shirt, restrained accessories, straight dress trousers, polished shoes"],
          ["royal-garden-reception", "王室庭園レセプション風礼装", "royal garden reception attire, elegant daytime coat ensemble, formal hat, refined gloves, graceful mid-length hem, dress shoes"]
        ]
      },
      {
        key: "v3-performance-formal",
        title: "🎼 舞台ジャンル別ステージ衣装",
        note: "舞踊、音楽、話芸など、演者の動きと役割に合わせる。",
        items: [
          ["contemporary-dance-stage", "コンテンポラリー舞踊衣装", "contemporary dance costume, flexible asymmetrical tunic, stretch fitted base layer, flowing movement panels, barefoot-compatible leggings"],
          ["chamber-soloist", "室内楽ソリスト", "chamber soloist concert attire, refined fitted jacket, movement-friendly sleeves, formal long lower garment, understated stage shoes"],
          ["opera-chorus-costume", "オペラ合唱衣装", "opera chorus costume, period-neutral formal robe ensemble, stage-readable layered silhouette, concealed movement gussets, stable shoes"],
          ["stage-illusionist", "ステージ・イリュージョニスト", "stage illusionist costume, sharp tailcoat, concealed prop pockets, contrasting waistcoat, fitted trousers, polished performance boots"],
          ["ballroom-exhibition", "ボールルーム・エキシビション", "ballroom exhibition costume, sculpted dance bodice, sweeping movement skirt panels, secure decorative trim, flexible dance shoes"],
          ["aerial-performance-suit", "エアリアル演技スーツ", "aerial performance costume, full-coverage stretch unitard, reinforced grip zones, seamless waist, secure low-profile decoration, flexible foot coverings"],
          ["spoken-word-stage", "スポークンワード衣装", "spoken-word stage outfit, expressive long jacket, monochrome layered shirt, relaxed tailored trousers, minimal stage shoes"],
          ["orchestra-conductor-stage", "オーケストラ指揮者の舞台服", "orchestra conductor concert attire, formal tailcoat with free shoulder movement, crisp shirt, high-waisted trousers, silent dress shoes"]
        ]
      },
      {
        key: "v3-commemoration-formal",
        title: "🎆 祝典・記念・謝意の礼装",
        note: "喜び、感謝、追悼など、式の意味に合わせた落ち着きある装い。",
        items: [
          ["silver-anniversary", "銀婚式の記念礼装", "silver anniversary attire, refined formal ensemble, subtle silver textile accents, elegant long silhouette, polished closed shoes"],
          ["winter-solstice-banquet", "冬至の祝宴礼装", "winter solstice banquet attire, deep-toned velvet formal coat, warm layered inner garment, metallic seasonal trim, dress boots"],
          ["harvest-thanksgiving-formal", "収穫感謝式の装い", "harvest thanksgiving formal attire, earth-toned structured ensemble, woven grain motif trim, layered sash, polished leather shoes"],
          ["naming-ceremony-guest", "命名式ゲスト礼装", "naming ceremony guest attire, gentle formal jacket, light layered garment, restrained celebratory accents, comfortable closed shoes"],
          ["civic-honors-reception", "市民栄誉レセプション", "civic honors reception attire, dignified formal suit, ceremonial pin area, refined shirt, full-length trousers, polished shoes"],
          ["memorial-service-attire", "追悼式の端正な礼装", "memorial service attire, restrained dark formal coat, simple high-neck inner layer, unadorned tailored trousers, quiet black shoes"],
          ["new-year-reception", "新年祝賀会の礼装", "new year reception attire, crisp formal jacket, subtle celebratory woven accents, elegant long lower garment, polished dress shoes"],
          ["cultural-exchange-night", "文化交流レセプション", "cultural exchange reception attire, contemporary formal ensemble, respectful textile accent panel, tailored silhouette, understated accessories, formal shoes"]
        ]
      }
    ],
    swim: [
      {
        key: "v3-marine-work-rescue",
        title: "🛟 水辺の仕事・救助ウェア",
        note: "レジャーではなく、水上安全と海洋作業を支える機能服。",
        items: [
          ["professional-lifeguard", "プロ・ライフガード", "professional lifeguard uniform, high-visibility rash guard, rescue flotation belt, quick-dry shorts over fitted swim layer, water shoes"],
          ["swiftwater-rescuer", "急流救助員", "swiftwater rescue gear, protective dry suit, high-buoyancy rescue vest, helmet-compatible collar, reinforced gloves, river boots"],
          ["offshore-sailing-crew", "外洋セーリングクルー", "offshore sailing gear, waterproof foul-weather jacket, high-waist bib trousers, safety harness access, deck gloves, non-slip boots"],
          ["sea-kayak-guide", "シーカヤックガイド", "sea kayak guide outfit, paddling dry top, articulated water pants, low-profile flotation vest, spray skirt waist seal, water shoes"],
          ["dive-support-deck", "ダイビング支援デッキクルー", "dive support deck uniform, quick-dry coverall, equipment checklist vest, waterproof radio pocket, grip gloves, deck boots"],
          ["shore-survey-biologist", "沿岸生物調査員", "shore survey biologist outfit, sun-protective field shirt, wading overalls, specimen pouch belt, waterproof gloves, tidal-zone boots"],
          ["paddle-race-team", "パドルレースチーム", "paddle race uniform, fitted performance top, streamlined team vest, flexible paddling shorts, grip gloves, secure water footwear"],
          ["pool-safety-instructor", "プール安全講師", "pool safety instructor uniform, full-coverage training swimwear, high-visibility instructor shirt, whistle lanyard, poolside sandals"]
        ]
      },
      {
        key: "v3-spa-pool-layers",
        title: "🧼 スパ・プールサイドの羽織り",
        note: "水着の上から快適に移動するための、露出を調整できるレイヤー。",
        items: [
          ["terry-cloth-spa-robe", "テリークロス・スパローブ", "plush terry cloth spa robe, shawl collar, secure waist belt, deep patch pockets, washable spa slippers"],
          ["resort-wellness-set", "リゾート・ウェルネスセット", "resort wellness outfit, light wrap jacket, relaxed full-length lounge pants, breathable inner layer, woven spa sandals"],
          ["sauna-cooling-robe", "サウナ後のクーリングローブ", "sauna cooling robe, loose breathable linen weave, wide sleeves, secure wrap closure, absorbent shoulder towel, simple sandals"],
          ["poolside-long-kaftan", "プールサイド・ロングカフタン", "poolside long kaftan, opaque lightweight fabric, side ventilation slits, relaxed long sleeves, tasseled drawcord, flat sandals"],
          ["cabana-lounge-layer", "カバナ・ラウンジレイヤー", "cabana lounge outfit, airy long overshirt, loose drawstring trousers, full-coverage inner layer, sun hat, resort slides"],
          ["mineral-bath-robe", "ミネラルバスのローブ", "mineral bath robe, soft waffle cotton texture, cross-over front, wide belt, deep sleeves, moisture-friendly slippers"],
          ["aquatic-therapy-layer", "水中セラピー用レイヤー", "aquatic therapy outfit, full-coverage stretch swim layer, easy-entry zip jacket, supportive water leggings, non-slip pool shoes"],
          ["seaside-retreat-wrap", "海辺リトリートのラップ", "seaside retreat outfit, soft woven wrap coat, breathable lounge tunic, relaxed ankle trousers, light scarf, woven sandals"]
        ]
      },
      {
        key: "v3-travel-sleepwear",
        title: "🌙 旅・滞在先のスリープウェア",
        note: "寝台列車、山小屋、長距離移動など、家以外でも使いやすい。",
        items: [
          ["sleeper-train-nightwear", "寝台列車のナイトウェア", "sleeper train nightwear, modest button-front pajama top, relaxed full-length pants, compact robe, soft cabin slippers"],
          ["long-haul-flight-comfort", "長距離フライト快適服", "long-haul flight comfort outfit, soft zip cardigan, breathable layered top, stretch lounge trousers, compression socks, slip-on shoes"],
          ["capsule-hotel-set", "カプセルホテル滞在セット", "capsule hotel sleep set, compact wrap top, loose full-length pants, light privacy robe, washable slippers"],
          ["mountain-lodge-sleepwear", "山小屋の防寒寝間着", "mountain lodge sleepwear, thermal henley top, warm relaxed pants, fleece vest, thick socks, insulated cabin shoes"],
          ["summer-cotton-nightwear", "夏のコットン寝間着", "summer cotton nightwear, breathable loose button shirt, full-length light cotton pants, soft house sandals"],
          ["winter-flannel-nightwear", "冬のフランネル寝間着", "winter flannel nightwear, brushed long-sleeve pajama shirt, warm full-length pants, quilted robe, lined slippers"],
          ["recovery-lounge-set", "リカバリー・ラウンジセット", "recovery lounge outfit, supportive soft-knit top, gentle compression lounge pants, light wrap cardigan, cushioned indoor shoes"],
          ["house-guest-morning-set", "宿泊客の朝セット", "house guest morning outfit, neat lounge cardigan, modest sleep shirt, relaxed full-length pants, clean indoor slippers"]
        ]
      }
    ],
    traditional: [
      {
        key: "v3-asia-historical-formal",
        title: "🎎 東・東南アジアの歴史礼装",
        note: "国・地域名と衣装構造を明記し、異なる文化を曖昧に混ぜない。",
        items: [
          ["edo-merchant-ensemble", "江戸の商家アンサンブル", "Edo-period Japanese merchant ensemble, striped kimono, practical haori jacket, narrow obi, split-toe socks, traditional sandals"],
          ["korean-durumagi-formal", "韓国トゥルマギ礼装", "Korean durumagi formal ensemble, long overcoat, layered jeogori and full lower garment, traditional fabric ties, beoseon socks, traditional shoes"],
          ["vietnamese-nhat-binh", "ベトナムのニャットビン礼装", "Vietnamese nhat binh court robe ensemble, square-collar outer robe, patterned border bands, layered long garment, formal headpiece"],
          ["thai-boromphiman-formal", "タイのチュットタイ・ボロムピマーン", "Thai chut thai boromphiman formal dress, long-sleeve high-neck blouse, ankle-length sinh skirt, gold belt, formal closed shoes"],
          ["javanese-beskap-batik", "ジャワのベスカップとバティック", "Javanese formal ensemble, fitted beskap jacket, batik kain lower wrap, traditional waist sash, blangkon headcloth, formal slippers"],
          ["filipino-barong-formal", "フィリピンのバロン・タガログ礼装", "Filipino barong Tagalog formal ensemble, embroidered sheer overshirt over an opaque undershirt, dark formal trousers, polished shoes"],
          ["mongolian-deel-travel", "モンゴルの旅用デール", "Mongolian deel travel ensemble, long cross-over robe, wide woven sash, fitted trousers, traditional hat, sturdy riding boots"],
          ["tibetan-chuba-layered", "チベットのチュバ重ね着", "Tibetan chuba layered attire, long wrapped robe, striped woven apron panel, warm inner blouse, waist sash, highland boots"]
        ]
      },
      {
        key: "v3-world-regional-ceremony",
        title: "🌐 世界の地域礼装・式典服",
        note: "地域固有の裁断、織物、着装構造を一着ずつ独立して扱う。",
        items: [
          ["norwegian-bunad-formal", "ノルウェーのブーナッド礼装", "Norwegian bunad formal ensemble, fitted embroidered bodice, white blouse, full wool skirt, woven apron, silver fasteners, formal shoes"],
          ["romanian-ie-ensemble", "ルーマニアのイェ刺繍礼装", "Romanian traditional ensemble, embroidered ie blouse, woven waist belt, full patterned skirt, layered vest, leather shoes"],
          ["georgian-chokha-ceremony", "ジョージアのチョハ式典服", "Georgian chokha ceremonial attire, fitted wool coat with cartridge-style chest ornaments, high collar, belt, trousers, tall boots"],
          ["moroccan-takchita-formal", "モロッコのタクシータ礼装", "Moroccan takchita formal ensemble, layered long caftan, ornate sfifa trim, decorative belt, long sleeves, embroidered slippers"],
          ["ghanaian-kente-ceremony", "ガーナのケンテ式典衣装", "Ghanaian kente ceremonial attire, handwoven geometric cloth arranged in a formal draped wrap, coordinated undergarment, traditional sandals"],
          ["mexican-charro-gala", "メキシコのチャロ・ガラ礼装", "Mexican charro gala suit, short fitted jacket, embroidered side-seam trousers, wide bow tie, decorated belt, polished boots"],
          ["andean-pollera-festival", "アンデスのポジェラ祭礼衣装", "Andean pollera festival ensemble, layered full skirts, embroidered shawl, fitted blouse, bowler-style hat, sturdy dress shoes"],
          ["sami-gakti-ceremony", "サーミのガクティ式典衣装", "Sámi gákti ceremonial ensemble, brightly trimmed wool tunic, woven belt, fitted trousers or skirt, traditional cap, cold-climate shoes"]
        ]
      },
      {
        key: "v3-heritage-textile-festival",
        title: "🪡 伝統工芸・祭礼テキスタイル",
        note: "染め、織り、刺繍の見える特徴を、地域ごとに明確に指定する。",
        items: [
          ["japanese-indigo-festival", "日本の藍染祭り装束", "Japanese indigo festival outfit, short happi coat, resist-dyed cotton pattern, tied waist sash, fitted festival trousers, split-toe footwear"],
          ["okinawan-bingata-formal", "沖縄の紅型礼装", "Okinawan bingata formal ensemble, brightly stencil-dyed robe, layered collar, wide sash, long flowing sleeves, traditional sandals"],
          ["ainu-attus-robe", "アイヌのアットゥシローブ", "Ainu attus robe, woven elm-bark textile, traditional geometric appliqué and embroidery along borders, straight long sleeves, woven sash"],
          ["indian-bandhani-celebration", "インドのバンダニ祝祭衣装", "Indian bandhani celebration ensemble, tie-dyed dotted textile, draped dupatta, fitted long tunic, coordinated full lower garment, traditional shoes"],
          ["indonesian-songket-ceremony", "インドネシアのソンケット式典服", "Indonesian songket ceremonial ensemble, metallic-thread woven cloth, structured blouse or jacket, wrapped lower garment, formal sash, traditional footwear"],
          ["palestinian-tatreez-dress", "パレスチナのタトリーズ刺繍ドレス", "Palestinian tatreez embroidered dress, long thobe silhouette, dense geometric cross-stitch panels, full sleeves, woven waist sash"],
          ["ukrainian-vyshyvanka-festival", "ウクライナのヴィシヴァンカ祝祭服", "Ukrainian vyshyvanka celebration outfit, embroidered linen shirt, woven sash, full skirt or tailored trousers, leather boots"],
          ["guatemalan-huipil-corte", "グアテマラのウィピルとコルテ", "Guatemalan traditional ensemble, handwoven huipil blouse, wrapped corte skirt, woven faja belt, regional geometric textile patterns, leather sandals"]
        ]
      }
    ],
    fantasy: [
      {
        key: "v3-fantasy-civilian-trades",
        title: "🍞 幻想世界の生活職",
        note: "騎士と魔法使い以外の、町や施設を動かす仕事服。",
        items: [
          ["rune-baker", "ルーンパン職人", "rune baker workwear, flour-resistant tunic, heatproof rune apron, ingredient pouch belt, rolled sleeves, sturdy kitchen clogs"],
          ["griffin-stablekeeper", "グリフォン厩務員", "griffin stablekeeper outfit, feather-resistant leather vest, reinforced grooming sleeves, feed pouch belt, durable trousers, claw-safe boots"],
          ["potion-library-clerk", "薬液図書館の司書", "potion library clerk outfit, stain-resistant archive coat, bottle index straps, protective cuffs, catalog sash, closed work shoes"],
          ["enchanted-tailor", "魔法仕立て師", "enchanted tailor workwear, measuring-tape sash, floating pin guards, layered fabric apron, spell-thread spool belt, soft workshop shoes"],
          ["bridge-toll-warden", "巨橋の関所守", "fantasy bridge toll warden uniform, weathered long tabard, token pouch harness, ledger case, layered rain cape, durable boots"],
          ["crystal-orchard-keeper", "結晶果樹園の管理人", "crystal orchard keeper outfit, padded harvesting coat, shard-safe gloves, prism basket harness, flexible trousers, reinforced garden boots"],
          ["moonwell-healer", "月井の療し手", "moonwell healer attire, layered water-resistant robe, herb vial sash, silver basin gloves, soft wrapped trousers, quiet sandals"],
          ["dragon-egg-conservator", "竜卵保全官", "dragon egg conservator uniform, heat-buffered field coat, padded cradle harness, temperature gauge belt, protective gloves, insulated boots"]
        ]
      },
      {
        key: "v3-fantasy-biome-expeditions",
        title: "🏔️ 異世界バイオーム探査装備",
        note: "環境ごとに素材と防護構造を変える、非汎用の探索服。",
        items: [
          ["volcanic-ruin-expedition", "火山遺跡探査装備", "volcanic ruin expedition gear, heat-reflective hooded coat, ash-filter scarf, insulated tool vest, reinforced trousers, lava-field boots"],
          ["floating-island-survey", "浮遊島測量装備", "floating island survey outfit, wind-stable short cloak, safety tether harness, map instrument belt, fitted trousers, grip-soled boots"],
          ["frozen-ruin-expedition", "氷結遺跡探査装備", "frozen ruin expedition gear, layered frostproof parka, insulated relic satchel, thermal bib trousers, climbing gloves, ice-grip boots"],
          ["enchanted-swamp-alchemist", "魔法湿地の錬金術師", "enchanted swamp alchemist outfit, sealed long field coat, reagent bottle harness, waterproof gloves, high wading trousers, marsh boots"],
          ["crystal-cavern-spelunker", "結晶洞窟のケイバー", "crystal cavern spelunker gear, padded reflective jacket, shard-safe helmet hood, climbing harness, abrasion-resistant pants, cave boots"],
          ["storm-coast-scout", "嵐の海岸偵察", "storm coast scout outfit, wind-locked cape jacket, saltproof armor panels, signal pouch belt, flexible trousers, cliff grip boots"],
          ["fungal-forest-ranger", "菌糸森のレンジャー", "fungal forest ranger outfit, spore-filter hood, waxed field coat, specimen pouch harness, gaiter trousers, moisture-resistant boots"],
          ["mirage-desert-mapper", "蜃気楼砂漠の地図師", "mirage desert mapper attire, layered sun cloak, lens-shade hood, compass tablet sash, loose protective trousers, sandproof boots"]
        ]
      },
      {
        key: "v3-magic-academy-departments",
        title: "🏫 魔法学院・学科別制服",
        note: "学院生でひとまとめにせず、実習内容が見える専攻別の服。",
        items: [
          ["alchemy-lab-uniform", "錬金術科実習制服", "alchemy academy lab uniform, reagent-resistant short robe, protective apron panel, vial loops, fitted trousers, closed laboratory shoes"],
          ["celestial-observatory-uniform", "天文魔法科制服", "celestial observatory uniform, star-chart mantle, fitted academy coat, telescope tool sash, warm trousers, quiet observatory boots"],
          ["magical-beast-care-uniform", "魔法生物飼育科制服", "magical beast care uniform, durable padded vest, treat pouch belt, scratch-resistant sleeves, flexible pants, stable boots"],
          ["ward-maintenance-uniform", "結界保全科制服", "ward maintenance academy uniform, reinforced rune jacket, seal chalk harness, insulated gloves, utility trousers, protective boots"],
          ["healing-practicum-uniform", "治癒魔法科実習制服", "healing practicum uniform, clean layered academy coat, herb and bandage pockets, washable cuffs, straight trousers, non-slip shoes"],
          ["magic-archaeology-uniform", "魔法考古学科制服", "magic archaeology academy uniform, dustproof field robe, artifact brush loops, map case belt, reinforced pants, excavation boots"],
          ["spell-law-uniform", "魔法法学科制服", "spell law academy uniform, formal high-collar coat, document sash, seal case, tailored trousers, polished academic shoes"],
          ["elemental-engineering-uniform", "元素工学科実習制服", "elemental engineering uniform, insulated multi-panel jacket, tool harness, reinforced gloves, articulated trousers, safety boots"]
        ]
      }
    ],
    sf: [
      {
        key: "v3-space-civilian-specialists",
        title: "🌌 宇宙生活を支える専門職",
        note: "戦闘とパイロット以外の、軌道社会の日常を作る仕事服。",
        items: [
          ["orbital-traffic-controller", "軌道交通管制官", "orbital traffic controller uniform, console-ready fitted jacket, data cuff panels, identification collar, stretch trousers, magnetic-sole shoes"],
          ["lunar-greenhouse-tech", "月面温室テクニシャン", "lunar greenhouse technician outfit, sealed horticulture coverall, nutrient tool belt, breathable hood collar, grip gloves, habitat boots"],
          ["asteroid-survey-specialist", "小惑星資源調査員", "asteroid survey suit, compact pressure layer, sample canister harness, abrasion armor panels, tether points, magnetic expedition boots"],
          ["zero-g-cargo-handler", "無重力カーゴ作業員", "zero-gravity cargo handler uniform, padded utility jumpsuit, multi-directional grip loops, cargo scanner cuff, reinforced gloves, anchor shoes"],
          ["orbital-habitat-chef", "軌道居住区の調理師", "orbital habitat chef uniform, secured short kitchen jacket, floating-tool retention loops, sealed apron panel, tapered trousers, grip shoes"],
          ["exoplanet-linguist", "系外惑星言語学者", "exoplanet linguist field uniform, translation console vest, sample-safe long coat, audio sensor collar, flexible trousers, survey boots"],
          ["space-weather-analyst", "宇宙天気解析官", "space weather analyst uniform, radiation-monitoring jacket, data display cuffs, console harness, tailored utility pants, station shoes"],
          ["station-medical-officer", "宇宙ステーション医療官", "space station medical uniform, sterile modular coat, secured instrument pockets, flexible underlayer, tapered trousers, magnetic non-slip shoes"]
        ]
      },
      {
        key: "v3-planetary-environment-gear",
        title: "🪐 惑星環境別サバイバルギア",
        note: "粉塵、氷、放射線、重力差など、環境の問題を服の構造で解く。",
        items: [
          ["venus-cloud-platform", "金星雲上プラットフォーム作業服", "Venus cloud platform suit, acid-resistant sealed outer layer, cooling collar, pressure-safe gloves, tether harness, chemical-resistant boots"],
          ["mars-dust-engineer", "火星砂塵エンジニア", "Mars dust engineer suit, electrostatic dust-shedding shell, sealed tool ports, reinforced knees, filtration backpack interface, pressure boots"],
          ["europa-ice-diver", "エウロパ氷床ダイバー", "Europa ice diver suit, cryogenic insulated pressure layer, under-ice navigation harness, reinforced gloves, sealed helmet collar, thermal boots"],
          ["titan-methane-field", "タイタンメタン湖調査服", "Titan methane field suit, extreme-cold sealed shell, hydrocarbon-resistant panels, sample hose ports, insulated gloves, pressure boots"],
          ["lunar-night-maintenance", "月面夜間保守スーツ", "lunar night maintenance suit, deep-cold thermal layers, high-contrast work lights, tool rail harness, articulated joints, magnetic boots"],
          ["high-gravity-miner", "高重力鉱山作業服", "high-gravity mining suit, load-distributing exoframe clothing, compressed utility vest, reinforced joints, supportive gloves, weighted work boots"],
          ["low-gravity-construction", "低重力建設作業服", "low-gravity construction suit, tether-ready coverall, impact padding, modular tool rails, grip gloves, anchor-point boots"],
          ["radiation-storm-crew", "放射線嵐対応クルー", "radiation storm response suit, layered shielding vest, sealed hood interface, exposure monitor badges, protective gloves, shelter duty boots"]
        ]
      },
      {
        key: "v3-alternative-futures",
        title: "🌱 オルタナティブ未来の生活服",
        note: "サイバーパンクだけに寄せず、環境再生やアナログ未来も選べる。",
        items: [
          ["solarpunk-gardener", "ソーラーパンク庭園師", "solarpunk gardener outfit, light plant-fiber utility jacket, flexible solar textile panels, seed tool belt, breathable trousers, garden boots"],
          ["biotech-tissue-designer", "バイオテック組織デザイナー", "biotech tissue designer uniform, sterile soft-shell coat, organic sample pockets, translucent protective sleeves, clean trousers, laboratory shoes"],
          ["cassette-future-operator", "カセットフューチャー管制員", "cassette-futurist operator outfit, boxy console jacket, physical media pockets, coiled cable loops, straight utility trousers, retro technical shoes"],
          ["ocean-habitat-citizen", "海洋居住区の市民服", "ocean habitat daily outfit, humidity-resistant layered tunic, pressure-door identification band, quick-dry trousers, anti-slip shoes"],
          ["post-scarcity-artisan", "ポスト希少社会のクラフト作家", "post-scarcity artisan outfit, customizable modular smock, material sample panels, tool-free attachment rails, relaxed pants, studio shoes"],
          ["climate-restoration-engineer", "気候修復エンジニア", "climate restoration engineer uniform, weather sensor jacket, filtration scarf, field tablet harness, durable trousers, terrain boots"],
          ["analog-space-clerk", "アナログ宇宙局の事務官", "analog space agency clerk uniform, retro-future short jacket, paper file pockets, mechanical badge reel, pressed trousers, formal station shoes"],
          ["algae-textile-designer", "藻類テキスタイル設計師", "algae textile designer outfit, biofabric sample coat, translucent green-blue paneling, wet-lab cuff guards, tailored pants, clean studio shoes"]
        ]
      }
    ],
    subculture: [
      {
        key: "v3-music-scene-styles",
        title: "🎧 音楽シーン別スタイル",
        note: "楽器を持たせるのではなく、シルエットと素材でシーンの空気を作る。",
        items: [
          ["shoegaze-layered-style", "シューゲイズ・レイヤード", "shoegaze-inspired outfit, oversized washed cardigan, faded graphic shirt, loose dark jeans, worn canvas sneakers"],
          ["city-pop-revival", "シティポップ・リバイバル", "city-pop revival outfit, pastel short blazer, silky open-collar shirt, high-waisted pleated trousers, clean retro loafers"],
          ["darkwave-club-style", "ダークウェーヴ・クラブ", "darkwave club outfit, long black mesh-layered coat, fitted high-neck top, structured narrow trousers, polished platform boots"],
          ["modern-jazz-lounge", "モダンジャズ・ラウンジ", "modern jazz lounge outfit, relaxed velvet jacket, fine dark knit, wide tailored trousers, understated leather shoes"],
          ["indie-folk-tour", "インディーフォーク・ツアー", "indie folk tour outfit, textured overshirt, natural-fiber layered top, patched straight pants, weathered leather boots"],
          ["drum-bass-street", "ドラムンベース・ストリート", "drum and bass street outfit, lightweight technical windbreaker, fitted performance top, articulated cargo pants, fast-profile sneakers"],
          ["synth-pop-stage-casual", "シンセポップ・ステージカジュアル", "synth-pop stage casual outfit, color-block satin bomber, geometric knit top, tapered trousers, reflective accent sneakers"],
          ["post-rock-monochrome", "ポストロック・モノクローム", "post-rock monochrome outfit, long minimal overshirt, layered charcoal tops, wide black trousers, heavy lace-up shoes"]
        ]
      },
      {
        key: "v3-maker-hobby-communities",
        title: "🧰 メイカー・趣味コミュニティ",
        note: "何が好きかが道具収納と動きやすさから伝わる、趣味の普段着。",
        items: [
          ["scale-model-maker", "スケールモデル制作者", "scale model maker outfit, fine-pocket work apron, lint-free overshirt, precision tool loops, relaxed trousers, clean workshop shoes"],
          ["tabletop-game-club", "テーブルトップゲーム会", "tabletop game club outfit, comfortable themed cardigan, layered graphic shirt, relaxed pants, dice pouch, casual sneakers"],
          ["retro-computer-hobbyist", "レトロPC愛好家", "retro computer hobbyist outfit, boxy knit vest, striped long-sleeve shirt, corduroy trousers, cable pouch, vintage sneakers"],
          ["urban-sketch-walk", "アーバンスケッチ散歩", "urban sketching outfit, pocketed field jacket, washable layered shirt, flexible trousers, compact art satchel, walking shoes"],
          ["film-camera-walk", "フィルムカメラ散歩", "film camera walk outfit, vintage utility jacket, soft knit layer, straight jeans, film canister pouch, comfortable leather sneakers"],
          ["cosplay-prop-workshop", "コスプレ小道具工房服", "cosplay prop workshop outfit, glue-safe apron, respirator-ready overshirt, cutting tool pockets, durable trousers, protective studio shoes"],
          ["community-radio-volunteer", "コミュニティFMボランティア", "community radio volunteer outfit, headset-friendly cardigan, station badge shirt, cable clip belt, comfortable trousers, quiet shoes"],
          ["maker-faire-exhibitor", "メイカーフェア出展者", "maker faire exhibitor outfit, project display vest, modular tool pockets, branded overshirt, flexible cargo pants, all-day sneakers"]
        ]
      },
      {
        key: "v3-original-fusion-fashions",
        title: "🪄 オリジナル・フュージョンファッション",
        note: "既存の一語ジャンルをなぞらず、素材と生活用途の組み合わせから新系統を作る。",
        items: [
          ["archive-industrial", "アーカイブ・インダストリアル", "archive industrial outfit, reinforced book-pocket coat, typographic patch shirt, strap-bound trousers, metal index tabs, heavy loafers"],
          ["phytocircuit-streetwear", "フィトサーキット・ストリート", "phytocircuit streetwear outfit, leaf-vein technical shell, modular seed pockets, breathable fitted layer, articulated pants, trail sneakers"],
          ["ceramic-goth", "セラミックゴス", "ceramic goth outfit, porcelain-matte structured coat, crackle-glaze pattern panels, dark layered shirt, narrow trousers, polished boots"],
          ["cloud-prep", "クラウドプレップ", "cloud prep outfit, pale layered varsity cardigan, translucent striped shirt, pleated wide trousers, soft gray loafers"],
          ["mineral-academia", "ミネラル・アカデミア", "mineral academia outfit, stone-toned tweed coat, crystal-button waistcoat, fine shirt, tailored trousers, sturdy scholar shoes"],
          ["nocturne-workwear", "ノクターン・ワークウェア", "nocturne workwear outfit, midnight utility jacket, reflective seam piping, dark layered top, reinforced straight pants, black work shoes"],
          ["folklore-minimalism", "フォークロア・ミニマリズム", "folklore minimalism outfit, clean long tunic, restrained woven border motifs, simple sash, straight trousers, handmade leather shoes"],
          ["transitcore", "トランジットコア", "transitcore outfit, route-map utility jacket, ticket slot pockets, layered commuter top, durable tapered pants, platform-ready sneakers"]
        ]
      }
    ],
    adjust: [
      {
        key: "v3-silhouette-volume",
        title: "📐 シルエット・ボリューム設計",
        note: "衣装全体の重心と膨らみを後から調整する構造語。",
        items: [
          ["volume-cocoon-shell", "コクーン型ボリューム", "rounded cocoon garment silhouette with a tapered lower opening"],
          ["volume-lantern-sleeves", "立体ランタンスリーブ", "structured lantern sleeves with controlled volume between fitted cuff and upper arm"],
          ["volume-balloon-hem", "バルーンヘム構造", "balloon hem gathered inward beneath a rounded garment volume"],
          ["volume-dropped-waist", "ローウエスト切替", "elongated torso silhouette with a clearly lowered waist seam"],
          ["volume-raised-waist", "ハイウエスト切替", "raised waist seam with long uninterrupted lower garment panels"],
          ["volume-barrel-trousers", "バレルライン・トラウザー", "barrel-leg trousers with curved outer seams and tapered ankles"],
          ["volume-boxy-crop", "ボクシー・クロップド構造", "boxy cropped upper garment with a straight wide body and clean hem"],
          ["volume-extended-shoulder", "エクステンドショルダー", "extended shoulder line with controlled straight volume beyond the natural shoulder"]
        ]
      },
      {
        key: "v3-edge-trim-finishes",
        title: "🪡 端処理・トリム・縫製仕上げ",
        note: "襟、袖、裾、切替線の見え方を変える、小さく効く仕上げ。",
        items: [
          ["finish-contrast-binding", "コントラストバインディング", "narrow contrast fabric binding cleanly finishing garment edges"],
          ["finish-scalloped-piping", "スカラップ・パイピング", "small scalloped piping following collar, cuff, and hem edges"],
          ["finish-raw-fringe", "ローエッジ・フリンジ", "controlled raw fabric edge with short even fringe and reinforced inner seam"],
          ["finish-laser-cut", "レーザーカット端処理", "precise laser-cut garment edges with clean repeating perforation details"],
          ["finish-blanket-stitch", "ハンド・ブランケットステッチ", "visible hand-worked blanket stitch along heavy textile edges"],
          ["finish-braided-cord", "ブレイドコード縁取り", "slim braided cord trim outlining major garment seams and closures"],
          ["finish-edge-micropleats", "端のマイクロプリーツ", "dense micro-pleated trim inserted along sleeve and lower garment edges"],
          ["finish-quilted-channel", "キルティングチャネル縁", "narrow channel-quilted trim reinforcing garment borders and openings"]
        ]
      },
      {
        key: "v3-mobility-weather-details",
        title: "🧷 動作・天候対応ディテール",
        note: "伸びる、しゃがむ、風雨を防ぐといった実用性を、構造だけ追加する。",
        items: [
          ["motion-underarm-gusset", "脇下モーションガゼット", "diamond-shaped underarm gussets allowing a wide range of sleeve movement"],
          ["motion-articulated-knees", "立体膝パネル", "articulated knee panels shaped for bending without fabric tension"],
          ["motion-vented-back", "背面ベンチレーション", "overlapping ventilated back yoke with concealed breathable mesh"],
          ["weather-double-storm-flap", "二重ストームフラップ", "double storm flap shielding the front and upper back garment openings"],
          ["weather-packable-hood", "収納式フード", "light weather hood folding into a slim concealed collar compartment"],
          ["motion-rollup-sleeve-tabs", "ロールアップ袖タブ", "reinforced inner sleeve tabs securing neatly rolled sleeves"],
          ["motion-convertible-cuffs", "可変カフス", "convertible cuffs switching between close wrist fit and wide protective coverage"],
          ["weather-weighted-wind-hem", "防風ウェイトヘム", "lightly weighted lower hem keeping long garment panels stable in strong wind"]
        ]
      }
    ]
  };

  function applyExpansion(){
    const target = window.SHIMA_ATTIRE_AKASHIC_V1;
    if (!target || !Array.isArray(target.groups)) return false;
    const applied = Array.isArray(target.expansions) ? target.expansions : [];
    if (applied.indexOf(EXPANSION_ID) >= 0) return true;

    Object.keys(categoriesByGroup).forEach(function(groupKey){
      const group = target.groups.find(function(entry){ return entry && entry.key === groupKey; });
      if (!group) return;
      const existing = new Set((group.categories || []).map(function(category){ return category.key; }));
      categoriesByGroup[groupKey].forEach(function(category){
        if (!existing.has(category.key)) group.categories.push(category);
      });
    });

    target.version = "3.0.0";
    target.expectedCount = 990;
    target.expansions = applied.concat(EXPANSION_ID);
    return true;
  }

  window.SHIMA_ATTIRE_AKASHIC_EXPANSION_V3 = {
    version: "3.0.0",
    id: EXPANSION_ID,
    addedCount: 240,
    categoriesByGroup: categoriesByGroup,
    apply: applyExpansion
  };

  applyExpansion();
})();
