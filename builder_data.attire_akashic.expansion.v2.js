(function(){
  "use strict";

  const EXPANSION_ID = "attire-akashic-expansion-v2";
  const categoriesByGroup = {
    quick: [
      {
        key: "v2-genre-protagonists",
        title: "🎬 ジャンル主人公・完成コーデ",
        note: "物語の役割が一目で伝わる、汎用性の高い主人公級セット。",
        items: [
          ["occult-detective", "怪異事件の探偵", "occult detective outfit, dark tailored coat, evidence satchel, protective gloves, sturdy lace-up boots"],
          ["sky-courier", "空路便の配達人", "sky courier outfit, cropped flight jacket, sealed message harness, windproof trousers, lightweight flight boots"],
          ["desert-relic-hunter", "砂漠遺跡の探索者", "desert relic hunter outfit, sun-shielding hooded coat, layered utility vest, artifact pouches, sand gaiter boots"],
          ["clockwork-noble", "時計仕掛けの貴族", "clockwork aristocrat outfit, fitted brocade coat, gear-shaped fasteners, high waistcoat, polished tall boots"],
          ["deep-sea-researcher", "深海調査員", "deep-sea researcher outfit, pressure-ready field suit, reinforced collar, specimen belt, sealed expedition boots"],
          ["urban-exorcist", "都市の祓魔師", "urban exorcist outfit, modern long jacket, layered ritual sash, charm cases, flexible combat shoes"],
          ["monster-ecologist", "魔物生態調査員", "monster ecologist outfit, durable survey coat, field notebook harness, sample containers, rugged trail boots"],
          ["dream-cartographer", "夢境地図師", "dream cartographer outfit, layered map-print robe, compass sash, scroll cases, softly structured ankle boots"]
        ]
      },
      {
        key: "v2-modern-occasions",
        title: "🏙️ 現代シーン・完成コーデ",
        note: "日常の具体的な場面へ、そのまま置ける軽量な完成服。",
        items: [
          ["museum-date", "美術館デート", "museum date outfit, refined knit top, tailored midi skirt, light structured coat, quiet leather loafers"],
          ["bookstore-day", "書店巡りの日", "bookstore outing outfit, soft cardigan, collared shirt, relaxed trousers, canvas shoulder bag, comfortable shoes"],
          ["airport-travel", "空港トラベル", "airport travel outfit, wrinkle-resistant jacket, layered stretch top, tapered utility pants, slip-on walking shoes"],
          ["rooftop-party", "ルーフトップパーティー", "rooftop party outfit, sleek evening jacket, satin inner top, tailored wide trousers, metallic accent shoes"],
          ["rainy-cafe", "雨の日カフェ", "rainy cafe outfit, water-resistant trench coat, fine knit layers, cropped trousers, polished waterproof boots"],
          ["art-festival", "アートフェス巡り", "art festival outfit, graphic overshirt, asymmetric layered top, practical cargo skirt, creative sneakers"],
          ["night-market", "夜市の街歩き", "night market outfit, lightweight utility jacket, breathable layered shirt, relaxed pants, secure walking sandals"],
          ["country-cycling", "田園サイクリング", "countryside cycling outfit, fitted windbreaker, moisture-wicking jersey, flexible shorts over leggings, cycling shoes"]
        ]
      },
      {
        key: "v2-original-concepts",
        title: "💡 オリジナル概念服・完成セット",
        note: "既存ジャンルに寄せすぎず、衣装から新しい世界観を起こす。",
        items: [
          ["aurora-tailor", "オーロラ仕立屋", "aurora tailor outfit, gradient layered coat, luminous thread spools, measuring sash, iridescent work boots"],
          ["glass-garden-envoy", "硝子庭園の使節", "glass garden envoy attire, translucent petal mantle, crystal-edged tunic, botanical waist chain, clear heeled boots"],
          ["ink-constellation-scholar", "墨星座の学者", "ink constellation scholar outfit, black-white flowing robe, star-chart embroidery, brush case belt, folded cloth shoes"],
          ["moon-postal-knight", "月光郵便騎士", "moonlight postal knight attire, silver-trimmed courier armor, crescent mail satchel, sealed cape, plated riding boots"],
          ["coral-clockmaker", "珊瑚時計師", "coral clockmaker outfit, reef-toned artisan coat, tiny dial fasteners, precision tool apron, shell-edged boots"],
          ["paper-theater-conductor", "紙劇場の指揮者", "paper theater conductor attire, folded-panel tailcoat, layered script sash, ribbon baton holder, crisp formal shoes"],
          ["thunder-botanist", "雷花植物学者", "thunder botanist outfit, stormproof greenhouse coat, electric-flower embroidery, insulated specimen belt, rubberized field boots"],
          ["snow-archive-keeper", "雪の記録庫番", "snow archive keeper attire, insulated white-gray robe coat, document clasps, frost-pattern cuffs, quiet winter boots"]
        ]
      }
    ],
    daily: [
      {
        key: "v2-smart-layering",
        title: "🧥 重ね着・レイヤード実用編",
        note: "単調になりにくく、日常へ使いやすい重ね着の完成形。",
        items: [
          ["shirt-knit-vest", "シャツ＋ニットベスト", "crisp shirt layered under a textured knit vest, straight trousers, simple leather shoes"],
          ["tee-overshirt", "Tシャツ＋オーバーシャツ", "plain T-shirt under a loose utility overshirt, relaxed jeans, low-profile sneakers"],
          ["turtleneck-slip-layer", "タートル＋スリップレイヤー", "fitted turtleneck under a structured slip dress, opaque tights, ankle boots"],
          ["hoodie-trench", "フーディ＋トレンチ", "light hoodie layered under a belted trench coat, tapered pants, clean walking shoes"],
          ["cardigan-jumpsuit", "カーディガン＋ジャンプスーツ", "soft cardigan over a belted utility jumpsuit, rolled cuffs, practical loafers"],
          ["denim-knit-layer", "デニム＋薄手ニット", "lightweight knit top under a faded denim jacket, pleated long skirt, canvas sneakers"],
          ["blazer-graphic-layer", "ブレザー＋グラフィックトップ", "relaxed blazer over a graphic top, wide cropped trousers, contemporary lace-up shoes"],
          ["long-vest-shirt", "ロングベスト＋シャツ", "long tailored vest over an oversized shirt, slim trousers, square-toe flats"]
        ]
      },
      {
        key: "v2-climate-daily",
        title: "🌤️ 気候別デイリーウェア",
        note: "暑さ、湿気、風、寒暖差へ合わせた日常衣装。",
        items: [
          ["humid-summer", "高湿度の夏服", "humid summer outfit, breathable open-weave shirt, loose cropped trousers, moisture-friendly sandals"],
          ["dry-heat", "乾燥地の薄着", "dry heat outfit, sun-shielding overshirt, airy inner layer, lightweight long pants, closed desert shoes"],
          ["coastal-breeze", "海風の街着", "coastal breeze outfit, light striped knit, windproof short coat, linen trousers, deck shoes"],
          ["mountain-chill", "山間の防寒レイヤー", "mountain chill outfit, fleece mid-layer, compact shell jacket, durable pants, trail shoes"],
          ["snow-commute", "雪国の通勤着", "snow commute outfit, insulated wool coat, thermal inner layers, lined trousers, non-slip winter boots"],
          ["monsoon-city", "雨季の都市服", "monsoon city outfit, packable rain shell, quick-dry tunic, water-resistant pants, drainage shoes"],
          ["desert-night", "砂漠の夜用レイヤー", "desert night outfit, light wrap coat, breathable daytime layers, warm scarf, sandproof ankle boots"],
          ["spring-wind", "春風の軽装", "spring wind outfit, cropped blouson, soft blouse, flowing midi skirt, stable low heels"]
        ]
      },
      {
        key: "v2-niche-casual",
        title: "🪴 ニッチ・カジュアルスタイル",
        note: "派手すぎず、キャラクター差を作れる現代の小系統。",
        items: [
          ["clean-workwear", "クリーンワークウェア", "clean workwear outfit, chore jacket, heavyweight plain tee, straight utility pants, leather work shoes"],
          ["retro-outdoor", "レトロアウトドア", "retro outdoor outfit, color-block windbreaker, fleece vest, hiking shorts over leggings, trail sneakers"],
          ["soft-utilitarian", "ソフトユーティリティ", "soft utilitarian outfit, draped pocket shirt, belted wide pants, muted webbing details, minimal shoes"],
          ["art-student-casual", "美術学生カジュアル", "art student casual outfit, paint-marked overshirt, layered tee, loose carpenter pants, worn canvas shoes"],
          ["bookish-casual", "読書家カジュアル", "bookish casual outfit, textured cardigan, band-collar shirt, corduroy trousers, quiet loafers"],
          ["tech-minimal", "テックミニマル", "tech-minimal outfit, seamless zip jacket, monochrome fitted top, tapered technical pants, streamlined sneakers"],
          ["urban-hiking", "アーバンハイキング", "urban hiking outfit, compact shell vest, breathable long-sleeve top, articulated cargo pants, trail-inspired shoes"],
          ["handmade-natural", "手仕事ナチュラル", "handmade natural outfit, undyed linen smock, woven vest, relaxed cotton trousers, handcrafted leather shoes"]
        ]
      }
    ],
    role: [
      {
        key: "v2-craft-professions",
        title: "🛠️ 工芸・創作の仕事着",
        note: "手仕事の内容が小物と構造から伝わる専門職衣装。",
        items: [
          ["ceramicist", "陶芸家", "ceramic artist workwear, clay-resistant apron, rolled-sleeve shirt, durable trousers, slip-resistant studio shoes"],
          ["glassblower", "ガラス職人", "glassblower protective outfit, heat-resistant jacket, leather apron, forearm guards, reinforced workshop boots"],
          ["bookbinder", "製本職人", "bookbinder work outfit, fitted canvas apron, sleeve protectors, tool pockets, comfortable closed shoes"],
          ["florist", "フローリスト", "florist workwear, water-resistant cross-back apron, light blouse, practical pants, floral shears holster"],
          ["watchmaker", "時計技師", "watchmaker uniform, precision work coat, magnifier pocket, fine tool loops, clean low-profile shoes"],
          ["textile-dyer", "染色職人", "textile dyer workwear, dye-marked smock coat, protective apron, tied sleeves, rubber-soled workshop shoes"],
          ["luthier", "弦楽器職人", "luthier workshop outfit, wood-dust apron, fitted work shirt, measurement pockets, quiet leather shoes"],
          ["stage-carpenter", "舞台大道具職人", "stage carpenter workwear, dark utility coveralls, reinforced knee panels, tool belt, safety-toe boots"]
        ]
      },
      {
        key: "v2-infrastructure-transport",
        title: "🚆 交通・インフラ専門制服",
        note: "都市や移動を支える、役割の明確な現場制服。",
        items: [
          ["railway-duty-conductor", "長距離列車の車掌", "railway conductor uniform, structured service jacket, peaked cap, ticket pouch, polished duty shoes"],
          ["station-attendant", "駅係員", "station attendant uniform, high-visibility trimmed jacket, neat trousers, radio clip, practical formal shoes"],
          ["harbor-pilot", "港湾水先案内人", "harbor pilot uniform, weatherproof navy coat, flotation vest, navigation pouch, non-slip deck boots"],
          ["air-traffic-controller", "航空管制官", "air traffic controller outfit, professional headset-ready shirt, fitted vest, ID lanyard, tailored trousers"],
          ["postal-courier", "都市郵便の配達員", "postal courier uniform, weatherproof delivery jacket, sorting satchel, flexible trousers, all-day walking shoes"],
          ["survey-technician", "測量技師", "survey technician field uniform, high-visibility utility vest, instrument harness, cargo trousers, terrain boots"],
          ["power-line-inspector", "送電設備点検員", "power line inspector gear, insulated work jacket, safety harness, protective gloves, electrical hazard boots"],
          ["waterworks-engineer", "水道設備技師", "waterworks engineer uniform, waterproof utility coat, tool belt, reinforced work pants, rubber safety boots"]
        ]
      },
      {
        key: "v2-field-science-service",
        title: "🔬 調査・公共・科学サービス",
        note: "調査、保存、安全管理などの専門性を表現する制服。",
        items: [
          ["field-archaeologist", "発掘考古学者", "field archaeologist outfit, sun-protective field shirt, specimen vest, reinforced trousers, excavation boots"],
          ["volcanologist", "火山学者", "volcanologist field gear, heat-resistant shell, sensor harness, protective gloves, rugged ashproof boots"],
          ["meteorologist", "気象観測員", "meteorological observer uniform, layered weather shell, instrument pouch, windproof pants, station boots"],
          ["wildlife-ranger", "野生動物レンジャー", "wildlife ranger uniform, durable field jacket, binocular harness, utility trousers, quiet trail boots"],
          ["forensic-analyst", "鑑識分析官", "forensic analyst uniform, clean protective coat, evidence gloves, sealed sample pouches, clinical work shoes"],
          ["emergency-coordinator", "災害対策調整員", "emergency coordinator uniform, marked command vest, radio harness, weatherproof trousers, response boots"],
          ["museum-conservator", "文化財修復士", "museum conservator outfit, lint-free work coat, delicate tool apron, protective gloves, quiet studio shoes"],
          ["food-safety-inspector", "食品衛生監視員", "food safety inspector uniform, clean inspection coat, protective cap, sample kit belt, washable work shoes"]
        ]
      }
    ],
    formal: [
      {
        key: "v2-formal-silhouettes",
        title: "🎩 礼装シルエット拡張",
        note: "式典や夜会で使える、輪郭の異なる正統派礼装。",
        items: [
          ["ceremonial-morning-coat", "モーニングコート式典仕立て", "formal morning coat ensemble, striped trousers, fitted waistcoat, crisp shirt, polished dress shoes"],
          ["white-tie", "ホワイトタイ礼装", "white-tie evening attire, black tailcoat, white piqué waistcoat, formal shirt, patent dress shoes"],
          ["high-collar-evening-suit", "ハイカラー夜会スーツ", "high-collar evening suit, long fitted jacket, concealed fastening, satin side panels, sleek formal shoes"],
          ["integrated-cape-gown", "ケープ一体型ガウン", "formal cape gown, structured shoulders, fitted bodice, floor-length skirt, integrated flowing cape"],
          ["minimal-column-gown", "ミニマル・コラムラインガウン", "column silhouette evening gown, clean vertical drape, restrained waist detail, floor-length hem"],
          ["tea-length-formal", "ティーレングス礼装", "tea-length formal dress, sculpted waist, layered mid-calf skirt, short tailored jacket, elegant pumps"],
          ["architectural-tuxedo", "建築的タキシード", "architectural tuxedo, angular lapels, asymmetric closure, sharply tailored trousers, geometric formal shoes"],
          ["velvet-dinner-suit", "ベルベット・ディナースーツ", "velvet dinner suit, satin shawl collar, fine dress shirt, tailored trousers, polished loafers"]
        ]
      },
      {
        key: "v2-avant-runway",
        title: "🧊 アヴァンギャルド・ランウェイ",
        note: "構造や素材で魅せる、撮影・舞台向けの実験的礼装。",
        items: [
          ["sculptural-pleats", "彫刻プリーツ・クチュール", "sculptural pleated couture outfit, rigid folded volumes, fitted inner column, minimal fasteners"],
          ["floating-panels", "浮遊パネル礼装", "avant-garde formalwear, suspended fabric panels, hidden support structure, clean monochrome base"],
          ["translucent-overlays", "透過レイヤー・クチュール", "couture outfit with translucent architectural overlays, opaque fitted foundation, layered clear hems"],
          ["metallic-origami", "メタリック折紙ドレス", "metallic origami-inspired formal outfit, sharply folded panels, reflective edges, compact structured silhouette"],
          ["deconstructed-tailoring", "解体再構築テーラリング", "deconstructed formal tailoring, displaced lapels, exposed seam architecture, asymmetric layered trousers"],
          ["kinetic-fringe", "キネティック・フリンジ礼装", "kinetic fringe couture, graduated moving strands, fitted formal base, weighted geometric hem"],
          ["geometric-cocoon", "幾何学コクーン礼装", "geometric cocoon formalwear, rounded structured volume, narrow openings, precise panel seams"],
          ["monochrome-volume", "単色ボリューム・クチュール", "monochrome volume couture, oversized sculpted sleeves, controlled waist, dramatic layered lower silhouette"]
        ]
      },
      {
        key: "v2-special-ceremonies",
        title: "🏛️ 式典・文化行事の装い",
        note: "目的の違う公式行事へ合わせた、場面別の完成礼装。",
        items: [
          ["camera-award-attire", "カメラ対応の授賞式礼装", "award ceremony attire, camera-ready formal jacket, refined draped inner layer, elegant full-length trousers"],
          ["diplomatic-reception", "外交レセプション礼装", "diplomatic reception attire, restrained formal coat, ceremonial sash, subtle insignia, polished shoes"],
          ["opera-premiere", "オペラ初日礼装", "opera premiere outfit, dramatic evening cape, sophisticated fitted formalwear, satin gloves, dress shoes"],
          ["graduation-guest", "卒業式ゲスト礼装", "graduation guest attire, conservative tailored coat, refined blouse, formal midi skirt, low polished heels"],
          ["charity-gala", "チャリティーガラ礼装", "charity gala outfit, elegant long formal silhouette, tasteful metallic accents, structured evening clutch belt"],
          ["court-audience", "謁見の正装", "court audience attire, embroidered long coat, formal mantle, rank sash, immaculate ceremonial boots"],
          ["winter-banquet", "冬の晩餐会礼装", "winter banquet attire, velvet formal coat, insulated satin layers, restrained fur-like trim, closed dress shoes"],
          ["garden-ceremony", "庭園式典の礼装", "garden ceremony attire, light formal jacket, botanical jacquard layers, flowing mid-length hem, stable dress shoes"]
        ]
      }
    ],
    swim: [
      {
        key: "v2-water-sports",
        title: "🏄 水上競技・アクティブ装備",
        note: "泳ぐ、漕ぐ、潜るなど用途から選べる機能的な水辺衣装。",
        items: [
          ["performance-surf-suit", "競技用サーフスーツ", "performance surf suit, long-sleeve rash guard, flexible board shorts, secure water shoes"],
          ["dive-skin", "ダイブスキン", "streamlined dive skin, reinforced knee panels, compact utility belt, fitted reef boots"],
          ["sailing-gear", "セーリング装備", "sailing outfit, spray-resistant jacket, buoyancy vest, quick-dry trousers, non-slip deck shoes"],
          ["paddle-outfit", "パドルスポーツウェア", "paddle sport outfit, sleeveless splash top, flexible water leggings, compact flotation vest, grip shoes"],
          ["water-rescue", "水難救助装備", "water rescue uniform, high-visibility rash suit, rescue harness, utility flotation vest, drainage boots"],
          ["swim-training-system", "競泳トレーニング一式", "competition swim training suit, hydrodynamic full-coverage cut, team warm-up jacket, pool sandals"],
          ["beach-volleyball", "ビーチバレーウェア", "beach volleyball outfit, supportive sports top, flexible athletic shorts, light warm-up layer, sand socks"],
          ["canyoning-gear", "キャニオニング装備", "canyoning outfit, protective water suit, reinforced seat panels, flotation harness, high-grip river boots"]
        ]
      },
      {
        key: "v2-resort-layers",
        title: "🏝️ リゾート・羽織り拡張",
        note: "水着の上へ足しやすい、形の異なる軽量レイヤー。",
        items: [
          ["linen-coverup", "リネン・カバーアップ", "airy linen beach cover-up, open front, rolled sleeves, side vents"],
          ["wrap-sarong-set", "ラップサロン・セット", "coordinated resort wrap sarong, fitted swim layer, knotted waist drape, flat sandals"],
          ["hooded-beach-tunic", "フード付きビーチチュニック", "light hooded beach tunic, quick-dry fabric, loose sleeves, curved hem"],
          ["sleeveless-duster", "ノースリーブ・リゾートダスター", "sleeveless resort duster, flowing ankle-length panels, open front, lightweight woven fabric"],
          ["resort-jumpsuit", "リゾート・ジャンプスーツ", "airy resort jumpsuit, adjustable waist tie, wide cropped legs, breathable layered top"],
          ["sun-protection-shirt", "UVサンシャツ", "sun-protective beach shirt, high collar, ventilated long sleeves, loose quick-dry cut"],
          ["deck-cardigan", "デッキ・カーディガン", "light deck cardigan, open knit texture, relaxed long sleeves, thigh-length hem"],
          ["poolside-shirt-set", "プールサイド・シャツセット", "poolside shirt set, loose short-sleeve overshirt, coordinated relaxed shorts, simple slides"]
        ]
      },
      {
        key: "v2-cozy-loungewear",
        title: "🛋️ 上質ルームウェア拡張",
        note: "素材と温度感で選べる、健全な室内・睡眠用衣装。",
        items: [
          ["waffle-robe", "ワッフル織ローブ", "waffle-knit lounge robe, shawl collar, belted waist, roomy patch pockets"],
          ["thermal-lounge", "サーマル・ラウンジセット", "thermal lounge set, ribbed long-sleeve top, soft tapered pants, warm house socks"],
          ["piped-satin-nightwear", "パイピング・サテンナイトウェア", "refined satin pajama set, piped button shirt, relaxed full-length trousers, soft slippers"],
          ["flannel-sleep-set", "フランネル睡眠セット", "brushed flannel sleep set, checked button top, drawstring pants, lined slippers"],
          ["jersey-sleep-set", "ジャージー睡眠セット", "soft jersey sleepwear, relaxed crew top, wide lounge pants, lightweight house shoes"],
          ["knit-lounge-dress", "ニット・ラウンジドレス", "comfortable knit lounge dress, long sleeves, loose straight silhouette, soft leg warmers"],
          ["house-cardigan", "ロングハウスカーディガン", "long house cardigan over simple lounge layers, deep pockets, soft knit belt"],
          ["travel-sleepwear", "旅用パッカブル寝間着", "packable travel sleepwear, wrinkle-resistant top, relaxed pants, compact robe layer, foldable slippers"]
        ]
      }
    ],
    traditional: [
      {
        key: "v2-japan-regional-history",
        title: "🗾 日本・地域と時代の装い",
        note: "時代や地域の構造を明示し、曖昧な和風へまとめない。",
        items: [
          ["heian-court-layering", "平安朝の重ね装束", "Heian court layered attire, multiple color-coordinated robes, long trailing hems, formal sash"],
          ["kamakura-warrior-formal", "鎌倉武家の直垂", "Kamakura warrior formal hitatare, wide sleeves, pleated hakama, tied waist cords"],
          ["edo-townsperson", "江戸町人の着流し", "Edo townsperson kimono, practical striped fabric, narrow obi, haori jacket, traditional sandals"],
          ["meiji-student-style", "明治期の学生装", "Meiji-era student attire, dark hakama, high-collar upper garment, leather school shoes"],
          ["taisho-modern-kimono", "大正モダン着物", "Taisho modern kimono ensemble, bold geometric textile, decorative obi, lace-up boots"],
          ["festival-happi", "祭礼の法被装束", "Japanese festival happi coat, patterned sash, fitted festival trousers, tabi footwear"],
          ["okinawan-bingata", "沖縄紅型の晴れ装束", "Okinawan bingata ceremonial ensemble, vivid resist-dyed robe, coordinated sash, layered traditional garments"],
          ["ainu-attush", "アイヌのアットゥシ装束", "Ainu attush robe ensemble, woven elm-bark textile, traditional embroidered borders, wrapped sash, leggings"]
        ]
      },
      {
        key: "v2-world-historical",
        title: "🏺 世界史シルエット拡張",
        note: "古代から近代まで、年代の違いが形で分かる歴史衣装。",
        items: [
          ["roman-formal", "古代ローマの正装", "ancient Roman formal attire, carefully draped toga, bordered tunic, leather sandals"],
          ["classical-greek-himation", "ヒマティオン重ねのギリシャ礼装", "ancient Greek chiton ensemble, pinned shoulders, belted waist, layered himation, strapped sandals"],
          ["byzantine-court", "ビザンツ宮廷装束", "Byzantine court attire, richly patterned dalmatic, jeweled belt, rectangular mantle, soft boots"],
          ["medieval-merchant", "中世商人の服", "medieval merchant attire, wool tunic, fitted hose, practical hooded cloak, leather belt pouches"],
          ["renaissance-artisan", "ルネサンス職人服", "Renaissance artisan outfit, fitted doublet, rolled shirt sleeves, knee breeches, workshop apron"],
          ["georgian-riding", "ジョージアン乗馬服", "Georgian riding attire, tailored long coat, waistcoat, fitted breeches, tall riding boots"],
          ["regency-daywear", "リージェンシー昼間着", "Regency daywear ensemble, high-waisted long silhouette, spencer jacket, fine gloves, walking shoes"],
          ["edwardian-travel", "エドワード朝旅行着", "Edwardian travel outfit, structured long coat, high-collar blouse, practical long skirt, button boots"]
        ]
      },
      {
        key: "v2-ceremonial-textiles",
        title: "🧵 世界の礼装・織物",
        note: "文化名と主要構造を尊重して記した、地域別の正装。",
        items: [
          ["korean-ceremonial-hanbok", "韓国の儀礼用韓服", "Korean ceremonial hanbok, structured jeogori, full layered chima, embroidered formal overcoat"],
          ["chinese-formal-hanfu", "中国の礼装漢服", "formal Chinese hanfu, cross-collar layered robes, wide sleeves, long embroidered outer garment"],
          ["indian-anarkali", "インドのアナルカリ礼装", "formal Indian Anarkali ensemble, long flared embroidered kurta, fitted trousers, draped dupatta"],
          ["vietnamese-ao-dai", "ベトナムのアオザイ礼装", "formal Vietnamese ao dai, fitted high-collar long tunic, flowing side panels, silk trousers"],
          ["indonesian-kebaya", "インドネシアのクバヤ礼装", "formal Indonesian kebaya ensemble, fitted embroidered blouse, wrapped batik lower garment, ceremonial sash"],
          ["philippine-barong", "フィリピンのバロン礼装", "formal Filipino barong ensemble, embroidered translucent formal shirt, neat undershirt, tailored trousers"],
          ["moroccan-caftan", "モロッコのカフタン礼装", "formal Moroccan caftan, long embroidered robe, decorative front closures, ornate waist belt"],
          ["west-african-agbada", "西アフリカのアグバダ礼装", "West African agbada ensemble, wide embroidered outer robe, coordinated long tunic, tailored trousers"]
        ]
      }
    ],
    fantasy: [
      {
        key: "v2-rare-rpg-roles",
        title: "🧭 珍しいRPG職業装備",
        note: "王道職の隣に置ける、役割の具体的な冒険者衣装。",
        items: [
          ["runesmith", "ルーン鍛冶師", "runesmith outfit, heat-resistant leather apron, rune-etched bracers, heavy tool belt, reinforced forge boots"],
          ["beast-tamer", "魔獣調教師", "fantasy beast tamer attire, flexible leather coat, whistle cord, reinforced gloves, trail boots"],
          ["dungeon-cartographer", "迷宮地図師", "dungeon cartographer outfit, hooded survey cloak, map tube harness, chalk pouches, quiet exploration boots"],
          ["spirit-medium", "精霊交信師", "spirit medium attire, layered ritual robe, charm cords, bell sash, soft ceremonial footwear"],
          ["relic-appraiser", "遺物鑑定士", "relic appraiser outfit, scholarly travel coat, lens cases, padded artifact gloves, secure satchel belt"],
          ["battlefield-medic", "戦場治療師", "fantasy battlefield medic attire, reinforced healing coat, potion harness, bandage pouches, durable boots"],
          ["skyship-rigger", "飛空艇索具士", "fantasy skyship rigger outfit, windproof short coat, rope harness, climbing gloves, grip-soled boots"],
          ["royal-falconer", "王宮鷹匠", "royal falconer attire, fitted hunting coat, protective gauntlet, lure pouch belt, tall field boots"]
        ]
      },
      {
        key: "v2-elemental-orders",
        title: "🌩️ 属性騎士団・守護者",
        note: "元素や自然現象を、身体ではなく衣装意匠として加える。",
        items: [
          ["glacier-warden", "氷河守護騎士", "glacier warden armor, layered white-blue plates, insulated mantle, crystalline edge guards, snow boots"],
          ["thunder-monk", "雷鳴の武僧", "thunder monk attire, fitted wrap robes, lightning-pattern sash, insulated bracers, flexible cloth boots"],
          ["ember-dancer", "残火の舞踏衣", "ember dancer costume, layered flame-colored fabric panels, heat-glow embroidery, fitted dance shoes"],
          ["tide-oracle", "潮流の神託衣", "tide oracle robes, flowing blue-green layers, wave-embroidered mantle, shell clasp belt, ceremonial sandals"],
          ["moss-guardian", "苔森の守護服", "moss guardian attire, layered green-brown cloak, bark-textured armor panels, vine fasteners, forest boots"],
          ["crystal-lancer", "結晶槍騎士", "crystal lancer armor, faceted translucent pauldrons, fitted silver cuirass, prismatic waist guards, armored boots"],
          ["eclipse-priest", "日蝕祭司の装束", "eclipse priest attire, black-gold circular mantle, layered ceremonial tunic, ring-shaped clasps, formal boots"],
          ["storm-navigator", "嵐航路の導師", "storm navigator outfit, weatherproof arcane coat, wind-map sash, brass compass harness, high-grip boots"]
        ]
      },
      {
        key: "v2-original-fantasy",
        title: "🗝️ オリジナル幻想職",
        note: "名前から物語が生まれ、衣装としても再現できる創作職業。",
        items: [
          ["memory-weaver", "記憶織り師", "memory weaver attire, layered thread-map robe, spool harness, mnemonic knot embroidery, soft work shoes"],
          ["gravity-duelist", "重力決闘士", "gravity duelist outfit, asymmetrically weighted coat, orbiting-ring motifs, reinforced belt, balanced combat boots"],
          ["time-orchard-keeper", "時果樹園の番人", "time orchard keeper attire, season-layered work coat, clock-fruit clasps, pruning tool sash, garden boots"],
          ["lantern-oath-knight", "灯誓騎士", "lantern oath knight armor, warm-lit chest emblem, dark layered surcoat, oath ribbons, plated boots"],
          ["mirror-labyrinth-guide", "鏡迷宮の案内人", "mirror labyrinth guide outfit, reflective paneled coat, directional sash, silver gloves, quiet formal boots"],
          ["cloud-library-curator", "雲上図書館司書", "cloud library curator attire, airy layered robe coat, floating-page embroidery, book harness, soft high boots"],
          ["dream-locksmith", "夢錠前師", "dream locksmith outfit, midnight artisan coat, key-ring belt, lockplate cuffs, sturdy workshop shoes"],
          ["starfall-undertaker", "星葬の送葬士", "starfall undertaker attire, solemn long coat, meteor-dust trim, ceremonial sash, polished closed boots"]
        ]
      }
    ],
    sf: [
      {
        key: "v2-space-specialists",
        title: "🛰️ 宇宙開発スペシャリスト",
        note: "船外・惑星・軌道作業を支える専門職スーツ。",
        items: [
          ["orbital-geologist", "軌道地質学者", "orbital geologist suit, sample-resistant field shell, mineral case harness, pressure gloves, magnetic boots"],
          ["zero-g-medic", "無重力医療士", "zero-gravity medic uniform, compact medical jacket, anchored supply pouches, restraint straps, soft magnetic shoes"],
          ["exoplanet-botanist", "系外惑星植物学者", "exoplanet botanist suit, sealed greenhouse coat, specimen sleeve cases, filtration collar, terrain boots"],
          ["quantum-technician", "量子設備技師", "quantum technician uniform, insulated clean suit, calibrated tool rails, shielding gloves, grounded work boots"],
          ["docking-marshal", "ドッキング誘導員", "spaceport docking marshal uniform, high-visibility pressure jacket, signal gauntlets, tether belt, magnetic deck boots"],
          ["cryogenic-keeper", "低温睡眠管理士", "cryogenic systems keeper uniform, thermal control coat, frostproof gloves, sensor harness, insulated facility shoes"],
          ["signal-linguist", "異星信号言語士", "extraterrestrial signal linguist outfit, layered interface jacket, translation panel sash, data gloves, quiet station shoes"],
          ["debris-salvager", "軌道漂流物回収員", "orbital debris salvager suit, reinforced maneuver shell, tether reels, cutting tool harness, armored magnetic boots"]
        ]
      },
      {
        key: "v2-mecha-pilot-systems",
        title: "🤖 機動兵器パイロット拡張",
        note: "機体タイプと任務から選べる、露出を抑えた実用飛行服。",
        items: [
          ["modular-flight-suit", "モジュール式飛行服", "modular mecha flight suit, interchangeable torso panels, compact restraint harness, reinforced gloves, pilot boots"],
          ["neural-interface-jacket", "神経接続ジャケット", "neural interface pilot jacket, conductive seam network, fitted inner suit, connection collar, insulated footwear"],
          ["rescue-mech-pilot", "救難機パイロット", "rescue mecha pilot suit, high-visibility armored vest, emergency harness, utility gauntlets, traction boots"],
          ["heavy-frame-pilot", "重装機パイロット", "heavy-frame pilot suit, pressure-support torso shell, reinforced limb panels, impact gloves, braced boots"],
          ["recon-rider", "偵察機ライダー", "recon mecha rider outfit, low-profile flight shell, sensor capelet, compact data belt, flexible pilot boots"],
          ["drone-squad-operator", "ドローン群管制士", "drone squad operator uniform, multi-screen command vest, gesture-control gloves, cable-managed jacket, quiet shoes"],
          ["prototype-test-pilot", "試作機テストパイロット", "prototype test pilot suit, asymmetric sensor panels, diagnostic harness, marked safety seams, reinforced flight boots"],
          ["ceremonial-ace", "エースパイロット礼装", "ceremonial ace pilot uniform, tailored flight coat, metallic rank cords, compact wing insignia, polished pilot boots"]
        ]
      },
      {
        key: "v2-post-cyber-concepts",
        title: "🌐 ポストサイバー概念服",
        note: "暗いサイバーパンク以外の未来生活と職業を描く。",
        items: [
          ["bioluminescent-city", "生体発光都市服", "bioluminescent city outfit, softly glowing seam jacket, translucent layered shirt, adaptive trousers, light-soled shoes"],
          ["soft-exoskeleton-commute", "通勤用ソフト外骨格", "commuter outfit with soft exoskeleton supports, tailored utility coat, flexible joint bands, streamlined walking shoes"],
          ["analog-cyberpunk", "アナログ・サイバーパンク", "analog cyberpunk outfit, cassette-device harness, patched technical jacket, cable loops, rugged street boots"],
          ["solarpunk-engineer", "ソーラーパンク技師", "solarpunk engineer attire, light utility overalls, plant-safe tool vest, solar fabric panels, durable sandals"],
          ["lunar-nomad", "月面遊牧服", "lunar nomad outfit, layered dustproof cloak, compact life-support sash, thermal trousers, sealed walking boots"],
          ["data-monastery", "データ修道院装束", "data monastery attire, minimalist long tech robe, encrypted border patterns, interface cuffs, silent shoes"],
          ["hologram-artisan", "ホログラム工芸師", "hologram artisan outfit, translucent work coat, projection-tool belt, calibration gloves, studio footwear"],
          ["synthetic-weather-worker", "人工気象作業員", "synthetic weather worker uniform, climate-control jacket, sensor hood, insulated utility pants, sealed field boots"]
        ]
      }
    ],
    subculture: [
      {
        key: "v2-emerging-cores",
        title: "🧷 現代コア系統・追加",
        note: "検索語として使われやすい小系統を、衣装要素まで具体化。",
        items: [
          ["contemporary-balletcore", "コンテンポラリー・バレエコア", "balletcore outfit, wrap cardigan, fitted practice top, flowing warm-up skirt, ribboned flats"],
          ["blokecore", "ブロークコア", "blokecore outfit, retro football jersey, loose straight jeans, vintage track jacket, terrace sneakers"],
          ["playground-kidcore", "プレイグラウンド・キッドコア", "kidcore fashion, primary-color knit, playful patchwork overalls, novelty socks, chunky colorful sneakers"],
          ["whimsigoth", "ウィムジゴス", "whimsigoth outfit, celestial velvet layers, flared sleeves, patterned long skirt, ornate ankle boots"],
          ["fairy-grunge", "フェアリーグランジ", "fairy grunge outfit, distressed layered knit, earthy slip dress, worn utility belt, rugged lace-up boots"],
          ["coastal-vintage", "コースタル・ヴィンテージ", "coastal vintage outfit, cable-knit cardigan, striped shirt, relaxed linen trousers, classic deck shoes"],
          ["museumcore", "ミュージアムコア", "museumcore outfit, archival-print scarf, tailored neutral coat, refined knit layers, quiet leather loafers"],
          ["retrofuturism", "レトロフューチャー", "retrofuturist fashion, streamlined color-block jacket, metallic trim, tapered trousers, rounded space-age shoes"]
        ]
      },
      {
        key: "v2-performance-hobbies",
        title: "🎟️ パフォーマンス・趣味スタイル",
        note: "競技、音楽、創作活動を衣装から伝える趣味系セット。",
        items: [
          ["roller-derby", "ローラーダービー", "roller derby uniform, numbered sleeveless top, protective pads, durable shorts over leggings, quad skates"],
          ["fencing-club", "フェンシング部", "fencing club outfit, protective white jacket, fitted breeches, glove and mask harness, fencing shoes"],
          ["esports-team", "eスポーツチーム", "esports team uniform, branded performance jacket, breathable jersey, tapered track pants, lightweight sneakers"],
          ["street-dancer", "ストリートダンサー", "street dance outfit, oversized layered top, flexible cargo pants, supportive high-top sneakers, wrist bands"],
          ["circus-aerialist", "サーカス空中演技者", "circus aerialist costume, secure fitted unitard, reinforced grip panels, decorative waist drape, soft performance shoes"],
          ["indie-band", "インディーバンド衣装", "indie band stage outfit, thrifted statement jacket, graphic layered shirt, slim worn jeans, vintage boots"],
          ["club-dj", "クラブDJスタイル", "club DJ outfit, reflective bomber jacket, fitted technical top, utility trousers, cushioned platform sneakers"],
          ["cosplay-maker", "コスプレ制作者", "cosplay maker work outfit, multi-pocket crafting apron, comfortable layered shirt, tool wristbands, studio shoes"]
        ]
      },
      {
        key: "v2-original-movements",
        title: "🪄 オリジナル・ファッション系統",
        note: "既成ジャンルをなぞらず、組み合わせの核になる創作スタイル。",
        items: [
          ["snowpunk", "スノーパンク", "snowpunk fashion, insulated white utility layers, icy hardware, thermal straps, heavy winter street boots"],
          ["library-punk", "ライブラリーパンク", "library punk outfit, reinforced book-pocket coat, annotated fabric patches, belt-mounted index cards, sturdy loafers"],
          ["harbor-gothic", "ハーバーゴシック", "harbor gothic outfit, dark weatherproof long coat, rope-knot fasteners, striped inner layers, tall deck boots"],
          ["botanical-techwear", "ボタニカルテックウェア", "botanical techwear, modular green-black shell, seed capsule pockets, vine-like webbing, trail sneakers"],
          ["celestial-workwear", "天体ワークウェア", "celestial workwear, star-map chore jacket, constellation stitching, utility trousers, metallic work shoes"],
          ["porcelain-street", "ポーセリン・ストリート", "porcelain street fashion, blue-white patterned jacket, crackle-line embroidery, clean wide pants, glazed accent shoes"],
          ["paper-craft-couture", "ペーパークラフト・クチュール", "paper craft couture, folded textile panels, cutwork edges, layered geometric skirt, crisp structured shoes"],
          ["analog-spacewear", "アナログ宇宙服ファッション", "analog spacewear, padded retro jacket, mechanical dial patches, wide utility trousers, rounded moon boots"]
        ]
      }
    ],
    adjust: [
      {
        key: "v2-structural-cuts",
        title: "📐 構造カット・パネル設計",
        note: "既存衣装の輪郭を変える、縫製と切替の具体的な部品。",
        items: [
          ["diagonal-placket", "斜め前立て", "diagonal front placket with concealed fastening"],
          ["spiral-seams", "螺旋シーム", "spiraling garment seams wrapping around the torso and sleeves"],
          ["floating-yoke", "浮きヨーク構造", "floating shoulder yoke layered above the main garment"],
          ["split-peplum", "分割ペプラム", "split structured peplum with separate side panels"],
          ["modular-hem", "モジュール式ヘム", "modular garment hem with detachable length panels"],
          ["curved-paneling", "曲線パネル切替", "curved contrast panel construction following the garment silhouette"],
          ["layered-side-drape", "側面レイヤードドレープ", "layered side drape attached beneath a fitted waist seam"],
          ["transformable-length", "可変丈構造", "transformable garment length using hidden tabs and fold-up sections"]
        ]
      },
      {
        key: "v2-technical-materials",
        title: "🧶 特殊素材・表面仕上げ",
        note: "同じ形を別の時代・用途へ展開できる素材指定。",
        items: [
          ["brushed-wool", "起毛ウール", "soft brushed wool garment surface with dense warm texture"],
          ["waxed-cotton", "ワックスドコットン", "weather-resistant waxed cotton fabric with a subtle matte sheen"],
          ["ripstop-nylon", "リップストップナイロン", "light ripstop nylon garment panels with visible reinforcement grid"],
          ["layered-organza", "積層オーガンザ", "multiple translucent organza layers over an opaque garment base"],
          ["matte-neoprene", "マットネオプレン", "structured matte neoprene fabric with clean bonded edges"],
          ["hammered-satin", "ハンマードサテン", "hammered satin surface with irregular soft reflections"],
          ["cork-textile", "コルクテキスタイル", "flexible cork textile panels used as lightweight garment accents"],
          ["recycled-patchwork", "再生布パッチワーク", "carefully arranged recycled fabric patchwork with reinforced seams"]
        ]
      },
      {
        key: "v2-utility-details",
        title: "🧲 機能ディテール・留め具",
        note: "テック、仕事着、旅装へ足しやすい実用構造。",
        items: [
          ["magnetic-closures", "マグネット留め", "low-profile magnetic garment closures along the front opening"],
          ["double-zipper", "ダブルジッパー", "two-way front zipper with reinforced zipper guards"],
          ["carabiner-loops", "カラビナループ", "small reinforced carabiner loops attached to the waist seams"],
          ["removable-pouch", "着脱式ポーチ", "detachable flat utility pouch secured to a garment rail"],
          ["hidden-pocket-network", "隠しポケット網", "network of concealed garment pockets integrated into lining panels"],
          ["adjustable-tabs", "可変フィットタブ", "adjustable fit tabs at cuffs, waist, and lower hem"],
          ["cable-routing-loops", "ケーブル配線ループ", "neat cable-routing loops integrated along technical garment seams"],
          ["modular-badge-rail", "モジュール徽章レール", "slim modular badge rail mounted on the upper garment panel"]
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

    target.version = "2.0.0";
    target.expectedCount = 750;
    target.expansions = applied.concat(EXPANSION_ID);
    return true;
  }

  window.SHIMA_ATTIRE_AKASHIC_EXPANSION_V2 = {
    version: "2.0.0",
    id: EXPANSION_ID,
    addedCount: 240,
    categoriesByGroup: categoriesByGroup,
    apply: applyExpansion
  };

  applyExpansion();
})();
