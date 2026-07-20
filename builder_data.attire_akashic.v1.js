(function(){
  "use strict";

  const groups = [
    {
      key: "quick",
      categories: [
        {
          key: "royal-road",
          title: "🔥 王道人気・完成コーデ",
          note: "人気の高い定番衣装を、ひと押しでまとまった姿にする完成セット。",
          items: [
            ["classic-maid", "クラシックメイド", "classic maid outfit, black dress, white apron, maid headpiece"],
            ["academy-uniform", "王道学園制服", "classic academy uniform, fitted blazer, pleated skirt, ribbon tie, knee socks"],
            ["smart-office", "スマートオフィス", "smart office outfit, tailored jacket, neat blouse, pencil skirt, pumps"],
            ["evening-elegance", "優雅なイブニングドレス", "elegant evening gown, fitted bodice, flowing floor-length skirt, refined drapery"],
            ["heroic-knight", "英雄騎士", "heroic knight attire, polished plate armor, heraldic surcoat, leather boots"],
            ["wizard-academy", "魔法学園生", "wizard academy uniform, trimmed robe, fitted vest, spellbook belt, ankle boots"],
            ["cyber-street", "サイバーストリート", "cyberpunk street outfit, cropped tech jacket, layered utility wear, luminous accents"],
            ["formal-kimono", "晴れ着の着物", "formal kimono ensemble, decorative obi, layered collar, elegant long sleeves"],
            ["idol-stage", "王道アイドルステージ", "idol stage costume, sparkling fitted jacket, layered stage skirt, decorative boots"],
            ["resort-day", "南国リゾート", "tropical resort outfit, airy resort dress, light cover-up, woven sandals"]
          ]
        },
        {
          key: "daily-one-tap",
          title: "☕ 日常・ワンタップコーデ",
          note: "現代の日常シーンへすぐ置ける、まとまりのよい普段着。",
          items: [
            ["clean-casual", "清潔感カジュアル", "clean casual outfit, crisp shirt, straight trousers, simple sneakers"],
            ["smart-casual", "上品スマートカジュアル", "smart casual outfit, knit top, tailored slacks, loafers"],
            ["cozy-knit", "ふんわりニットコーデ", "cozy knit outfit, oversized sweater, long skirt, ankle boots"],
            ["urban-street", "都会のストリート", "urban streetwear outfit, layered hoodie, cargo pants, high-top sneakers"],
            ["minimal-monochrome", "ミニマル・モノトーン", "minimal monochrome outfit, structured top, wide-leg pants, clean lines"],
            ["modern-preppy", "現代プレッピー", "modern preppy outfit, cardigan, collared shirt, pleated skirt, loafers"],
            ["denim-weekend", "デニム休日コーデ", "weekend denim outfit, denim jacket, graphic tee, relaxed jeans, sneakers"],
            ["athleisure-town", "街歩きアスレジャー", "athleisure outfit, zip track jacket, fitted leggings, running shoes"],
            ["cottage-day", "コテージの普段着", "cottage casual outfit, puff-sleeve blouse, linen skirt, lace-up shoes"],
            ["travel-comfort", "旅の快適コーデ", "comfortable travel outfit, light jacket, layered top, stretch pants, walking shoes"]
          ]
        },
        {
          key: "role-one-tap",
          title: "🧰 人気職業・ワンタップ制服",
          note: "職業と役割が一目で伝わる、定番の仕事着セット。",
          items: [
            ["doctor-ready", "医師セット", "doctor outfit, white coat, collared shirt, tailored trousers, medical ID badge"],
            ["nurse-ready", "看護師セット", "modern nurse uniform, clean tunic, practical trousers, medical shoes"],
            ["scientist-ready", "研究者セット", "laboratory scientist outfit, lab coat, protective gloves, practical slacks"],
            ["chef-ready", "料理人セット", "professional chef uniform, double-breasted chef jacket, apron, chef trousers"],
            ["barista-ready", "バリスタセット", "barista uniform, rolled-sleeve shirt, cross-back apron, dark trousers"],
            ["flight-attendant-ready", "客室乗務員セット", "flight attendant uniform, tailored jacket, neck scarf, fitted skirt, low heels"],
            ["police-ready", "警察官セット", "police officer uniform, duty shirt, structured trousers, utility belt, patrol shoes"],
            ["firefighter-ready", "消防士セット", "firefighter turnout gear, protective coat, reinforced trousers, safety boots"],
            ["mechanic-ready", "整備士セット", "mechanic workwear, durable coveralls, utility belt, reinforced work boots"],
            ["librarian-ready", "司書セット", "librarian outfit, neat cardigan, collared blouse, midi skirt, comfortable loafers"]
          ]
        },
        {
          key: "fantasy-one-tap",
          title: "🗺️ RPG人気職・完成装備",
          note: "ファンタジー作品の主役級ロールを一度に決める完成衣装。",
          items: [
            ["knight-ready", "王道騎士", "fantasy knight outfit, plate cuirass, chainmail layers, heraldic cape, armored boots"],
            ["paladin-ready", "聖騎士", "holy paladin attire, white-gold armor, sacred tabard, flowing mantle"],
            ["mage-ready", "宮廷魔術師", "court mage outfit, long arcane robe, embroidered mantle, jeweled belt"],
            ["witch-ready", "森の魔女", "forest witch attire, layered dark dress, weathered cloak, pointed hat, lace-up boots"],
            ["cleric-ready", "癒やしの聖職者", "healer cleric outfit, ceremonial robe, protective mantle, holy sash"],
            ["ranger-ready", "森のレンジャー", "forest ranger outfit, hooded cloak, leather jerkin, fitted trousers, trail boots"],
            ["rogue-ready", "俊敏なローグ", "agile rogue outfit, fitted leather armor, layered belts, hood, soft boots"],
            ["royal-ready", "ファンタジー王族", "fantasy royal attire, embroidered coat, jeweled sash, formal cape, polished boots"],
            ["pirate-ready", "冒険海賊", "adventure pirate outfit, long captain coat, ruffled shirt, waist sash, tall boots"],
            ["alchemist-ready", "旅する錬金術師", "traveling alchemist outfit, utility coat, vial harness, leather gloves, sturdy boots"]
          ]
        },
        {
          key: "season-one-tap",
          title: "🌦️ 季節・デート・行事コーデ",
          note: "季節感と場面を同時に立てる、使いやすい完成コーデ。",
          items: [
            ["spring-picnic", "春のピクニック", "spring picnic outfit, light cardigan, floral midi dress, woven flats"],
            ["rainy-day", "雨の日コーデ", "rainy day outfit, hooded raincoat, layered knitwear, waterproof ankle boots"],
            ["summer-festival", "夏祭りコーデ", "summer festival yukata, decorative obi, drawstring pouch, geta sandals"],
            ["autumn-cafe", "秋のカフェコーデ", "autumn cafe outfit, plaid coat, turtleneck, long skirt, leather boots"],
            ["winter-snow", "雪の日コーデ", "winter snow outfit, warm wool coat, thick scarf, knit gloves, snow boots"],
            ["christmas-party", "クリスマスパーティー", "Christmas party outfit, velvet dress, faux-fur trim, festive ribbon accents"],
            ["halloween-chic", "ハロウィン・シック", "elegant Halloween outfit, black layered dress, orange accents, patterned tights"],
            ["valentine-date", "バレンタインデート", "romantic date outfit, soft knit top, flared skirt, ribbon details, ankle boots"],
            ["graduation-day", "卒業式コーデ", "graduation ceremony outfit, formal academic gown, neat collar, polished shoes"],
            ["wedding-guest", "結婚式ゲスト", "wedding guest outfit, refined cocktail dress, light formal shawl, elegant pumps"]
          ]
        }
      ]
    },
    {
      key: "daily",
      categories: [
        {
          key: "tops",
          title: "👚 定番トップス大全",
          note: "現代衣装の基礎になる、重ねやすい上半身アイテム。",
          items: [
            ["oxford-shirt", "オックスフォードシャツ", "Oxford button-down shirt"],
            ["bow-blouse", "ボウタイブラウス", "bow-tie blouse"],
            ["crew-tee", "クルーネックTシャツ", "crew-neck T-shirt"],
            ["henley-top", "ヘンリーネックトップ", "Henley-neck top"],
            ["polo-shirt", "ポロシャツ", "classic polo shirt"],
            ["ribbed-turtleneck", "リブタートルネック", "ribbed turtleneck sweater"],
            ["cable-knit", "ケーブルニット", "cable-knit sweater"],
            ["button-cardigan", "ボタンカーディガン", "button-front cardigan"],
            ["peasant-blouse", "ペザントブラウス", "peasant blouse, gathered neckline"],
            ["long-tunic", "ロングチュニック", "long tunic top, side slits"]
          ]
        },
        {
          key: "bottoms",
          title: "👖 定番ボトムス大全",
          note: "シルエット差を作りやすいパンツ・スカートの基本形。",
          items: [
            ["straight-jeans", "ストレートジーンズ", "straight-leg jeans"],
            ["wide-trousers", "ワイドパンツ", "wide-leg trousers"],
            ["cargo-pants", "カーゴパンツ", "utility cargo pants"],
            ["chino-pants", "チノパン", "classic chino pants"],
            ["pleated-midi-skirt", "プリーツミディスカート", "pleated midi skirt"],
            ["a-line-skirt", "切替Aラインミディスカート", "paneled A-line midi skirt"],
            ["pencil-skirt", "ペンシルスカート", "tailored pencil skirt"],
            ["bermuda-shorts", "バミューダショーツ", "tailored Bermuda shorts"],
            ["culottes", "キュロット", "flowing culottes"],
            ["paperbag-pants", "ペーパーバッグパンツ", "paperbag-waist pants"]
          ]
        },
        {
          key: "one-piece",
          title: "👗 ワンピース・オールインワン",
          note: "一着で全身の印象を決められる日常向けシルエット。",
          items: [
            ["shirt-dress", "シャツワンピース", "button-front shirt dress"],
            ["wrap-dress", "ラップワンピース", "wrap dress, tied waist"],
            ["sweater-dress", "ニットワンピース", "knitted sweater dress"],
            ["pinafore-dress", "ピナフォアワンピース", "pinafore dress over blouse"],
            ["sundress", "サンドレス", "lightweight sundress"],
            ["utility-jumpsuit", "ユーティリティジャンプスーツ", "utility jumpsuit, belted waist"],
            ["casual-romper", "カジュアルロンパース", "casual romper, short sleeves"],
            ["slip-dress-layered", "重ね着スリップドレス", "slip dress layered over fitted top"],
            ["smock-dress", "スモックワンピース", "loose smock dress"],
            ["overall-dress", "デニムジャンパースカート", "denim overall dress"]
          ]
        },
        {
          key: "outerwear",
          title: "🧥 人気アウター",
          note: "季節とキャラクター性を一枚で足せる定番の上着。",
          items: [
            ["trench-coat", "トレンチコート", "classic belted trench coat"],
            ["pea-coat", "ピーコート", "double-breasted pea coat"],
            ["duffle-coat", "ダッフルコート", "hooded duffle coat, toggle fasteners"],
            ["bomber-jacket", "ボンバージャケット", "bomber jacket, ribbed cuffs"],
            ["denim-jacket", "デニムジャケット", "classic denim jacket"],
            ["moto-jacket", "ライダースジャケット", "fitted leather moto jacket"],
            ["field-parka", "フィールドパーカ", "hooded field parka, utility pockets"],
            ["puffer-jacket", "パファージャケット", "quilted puffer jacket"],
            ["tailored-blazer", "テーラードブレザー", "structured tailored blazer"],
            ["chore-jacket", "ワークジャケット", "cotton chore jacket, patch pockets"]
          ]
        },
        {
          key: "modern-styles",
          title: "🛹 現代カジュアル系統",
          note: "一語で全体の方向を決める、人気の現代ファッション系統。",
          items: [
            ["normcore", "ノームコア", "normcore outfit, understated basics, neutral palette"],
            ["gorpcore", "ゴープコア", "gorpcore outfit, outdoor technical layers, trail footwear"],
            ["casual-techwear", "カジュアルテックウェア", "casual techwear outfit, functional layers, utility straps"],
            ["skater-style", "スケータースタイル", "skater outfit, oversized tee, loose pants, skate shoes"],
            ["modern-y2k", "モダンY2K", "modern Y2K outfit, fitted top, low-rise cargo pants, metallic accents"],
            ["vintage-campus", "ヴィンテージキャンパス", "vintage campus outfit, varsity knit, pleated trousers, loafers"],
            ["coastal-style", "コースタルスタイル", "coastal outfit, linen shirt, light trousers, woven shoes"],
            ["dark-academia", "ダークアカデミア", "dark academia outfit, tweed blazer, turtleneck, plaid trousers"],
            ["light-academia", "ライトアカデミア", "light academia outfit, cream cardigan, collared shirt, pleated skirt"],
            ["modern-boho", "モダンボヘミアン", "modern bohemian outfit, embroidered blouse, layered maxi skirt"]
          ]
        }
      ]
    },
    {
      key: "role",
      categories: [
        {
          key: "school",
          title: "🏫 学校・学園制服大全",
          note: "学園ものの定番から海外校・専門校まで使える制服。",
          items: [
            ["sailor-uniform", "セーラー服", "Japanese sailor school uniform, sailor collar, pleated skirt"],
            ["blazer-uniform", "ブレザー制服", "school blazer uniform, ribbon tie, pleated skirt"],
            ["gakuran", "学ラン", "Japanese gakuran uniform, stand collar, brass buttons"],
            ["school-cardigan", "カーディガン制服", "school cardigan outfit, collared shirt, tie, pleated skirt"],
            ["summer-school", "夏服制服", "summer school uniform, short-sleeve shirt, light pleated skirt"],
            ["winter-school", "冬服制服", "winter school uniform, wool blazer, sweater vest, long socks"],
            ["boarding-school", "寄宿学校制服", "boarding school uniform, piped blazer, crest, striped tie"],
            ["art-school", "芸術学校制服", "art school uniform, creative smock jacket, practical trousers"],
            ["magic-school", "魔法学校制服", "magic school uniform, trimmed academy robe, crest vest"],
            ["academy-cadet", "士官学校制服", "academy cadet uniform, structured tunic, shoulder cords, tall boots"]
          ]
        },
        {
          key: "service",
          title: "🫖 メイド・執事・接客制服",
          note: "館・ホテル・飲食店など、人気のサービス系衣装。",
          items: [
            ["victorian-maid", "ヴィクトリアンメイド", "Victorian maid uniform, long black dress, white apron, mob cap"],
            ["modern-maid", "モダンメイド", "modern maid uniform, fitted dress, neat apron, simple headband"],
            ["classic-butler", "クラシック執事", "classic butler uniform, tailcoat, waistcoat, white gloves"],
            ["housekeeper", "ハウスキーパー", "housekeeper uniform, practical dress, apron, comfortable shoes"],
            ["hotel-concierge", "ホテルコンシェルジュ", "hotel concierge uniform, tailored suit, name badge, polished shoes"],
            ["bellhop", "ベルボーイ", "hotel bellhop uniform, fitted jacket, pillbox cap, formal trousers"],
            ["fine-waiter", "高級店ウェイター", "fine dining waiter uniform, white shirt, black vest, long apron"],
            ["cafe-server", "カフェ店員", "cafe server uniform, casual shirt, waist apron, dark pants"],
            ["pastry-chef", "パティシエ", "pastry chef uniform, clean chef coat, neckerchief, waist apron"],
            ["bakery-staff", "パン屋スタッフ", "bakery uniform, rolled-sleeve shirt, bib apron, baker cap"]
          ]
        },
        {
          key: "office",
          title: "💼 オフィス・専門職",
          note: "現代の職場や企業キャラクターを表現する仕事着。",
          items: [
            ["business-suit", "ビジネススーツ", "professional business suit, tailored jacket, straight trousers"],
            ["skirt-suit", "スカートスーツ", "professional skirt suit, fitted jacket, knee-length skirt"],
            ["pantsuit", "パンツスーツ", "modern pantsuit, structured blazer, wide-leg trousers"],
            ["office-vest", "事務服ベスト", "office vest uniform, blouse, fitted vest, neat skirt"],
            ["bank-teller", "銀行員制服", "bank teller uniform, conservative jacket, neck scarf, name badge"],
            ["receptionist", "受付制服", "receptionist uniform, tailored dress, neck scarf, low heels"],
            ["executive", "エグゼクティブ", "executive business attire, premium tailored suit, silk shirt"],
            ["legal-professional", "法務・弁護士", "legal professional attire, dark formal suit, crisp shirt, leather shoes"],
            ["creative-office", "クリエイティブ職", "creative office outfit, relaxed blazer, monochrome top, tapered pants"],
            ["news-anchor", "ニュースキャスター", "news anchor outfit, camera-ready tailored jacket, refined blouse"]
          ]
        },
        {
          key: "medical-science",
          title: "🧪 医療・研究・技術制服",
          note: "医療、研究所、クリーン環境に対応する専門衣装。",
          items: [
            ["physician-coat", "医師の白衣", "physician white coat over professional clothing"],
            ["modern-nurse", "現代看護師", "modern nurse scrub uniform, clean tunic, practical pants"],
            ["surgeon-scrubs", "外科医スクラブ", "surgical scrubs, scrub cap, protective footwear"],
            ["paramedic", "救急救命士", "paramedic uniform, high-visibility medical jacket, cargo trousers"],
            ["pharmacist", "薬剤師", "pharmacist coat, neat shirt, professional slacks"],
            ["lab-researcher", "ラボ研究員", "laboratory researcher outfit, lab coat, safety glasses, gloves"],
            ["veterinarian", "獣医師", "veterinarian scrubs, practical lab coat, clinic shoes"],
            ["dentist", "歯科医師", "dentist uniform, clean clinical tunic, protective mask"],
            ["radiology-tech", "放射線技師", "radiology technician scrubs, protective medical apron"],
            ["cleanroom-tech", "クリーンルーム技術者", "cleanroom technician suit, hood, gloves, shoe covers"]
          ]
        },
        {
          key: "public-technical",
          title: "🚨 公共・交通・現場制服",
          note: "安全、交通、整備など、役割が明確な現場系ユニフォーム。",
          items: [
            ["patrol-police", "巡査制服", "patrol police uniform, duty shirt, utility belt, patrol boots"],
            ["fire-rescue", "消防救助服", "fire rescue uniform, protective jacket, reflective bands, safety boots"],
            ["military-dress", "軍礼装", "military dress uniform, structured tunic, medals, polished boots"],
            ["security-guard", "警備員制服", "security guard uniform, peaked cap, utility belt, dark trousers"],
            ["airline-pilot", "航空パイロット", "airline pilot uniform, epaulet shirt, dark jacket, peaked cap"],
            ["cabin-crew", "客室乗務員", "cabin crew uniform, tailored jacket, neck scarf, formal shoes"],
            ["train-conductor", "鉄道車掌", "train conductor uniform, formal jacket, conductor cap, white gloves"],
            ["auto-mechanic", "自動車整備士", "automotive mechanic coveralls, work gloves, reinforced boots"],
            ["construction-worker", "建設作業員", "construction workwear, high-visibility vest, utility trousers, hard hat"],
            ["postal-worker", "郵便配達員", "postal worker uniform, service jacket, delivery satchel, walking shoes"]
          ]
        }
      ]
    },
    {
      key: "formal",
      categories: [
        {
          key: "gowns",
          title: "💎 ドレス・ガウン大全",
          note: "舞踏会、式典、夜会で使える主要なドレスシルエット。",
          items: [
            ["ball-gown", "ボールガウン", "grand ball gown, fitted bodice, voluminous floor-length skirt"],
            ["a-line-gown", "Aラインガウン", "formal A-line gown, graceful floor-length skirt"],
            ["empire-gown", "エンパイアドレス", "empire-waist formal gown, flowing skirt"],
            ["mermaid-gown", "マーメイドドレス", "mermaid silhouette evening gown, flared hem"],
            ["column-gown", "コラムドレス", "sleek column evening gown"],
            ["tea-dress", "ティーレングスドレス", "tea-length formal dress, flared skirt"],
            ["cocktail-dress", "カクテルドレス", "refined cocktail dress, structured silhouette"],
            ["cape-gown", "ケープガウン", "formal cape gown, flowing shoulder drape"],
            ["velvet-gown", "ベルベット夜会服", "velvet evening gown, rich drapery"],
            ["beaded-gown", "ビーズ刺繍ガウン", "beaded formal gown, intricate embellishment"]
          ]
        },
        {
          key: "suits",
          title: "🤵 スーツ・タキシード",
          note: "性別を問わず使える礼装・正装の基本セット。",
          items: [
            ["classic-tuxedo", "クラシックタキシード", "classic black tuxedo, satin lapels, bow tie"],
            ["white-dinner-jacket", "白いディナージャケット", "white dinner jacket, black formal trousers, bow tie"],
            ["three-piece-suit", "スリーピーススーツ", "three-piece formal suit, waistcoat, necktie"],
            ["double-breasted-suit", "ダブルスーツ", "double-breasted formal suit, peak lapels"],
            ["morning-coat", "モーニングコート", "morning coat ensemble, waistcoat, striped trousers"],
            ["tailcoat", "燕尾服", "formal tailcoat, white waistcoat, white bow tie"],
            ["formal-pantsuit", "フォーマルパンツスーツ", "elegant formal pantsuit, satin blouse"],
            ["velvet-suit", "ベルベットスーツ", "velvet evening suit, refined tailoring"],
            ["ceremonial-uniform", "式典制服", "ceremonial uniform, braided trim, polished buttons"],
            ["opera-cloak", "オペラクローク礼装", "formal evening suit with opera cloak"]
          ]
        },
        {
          key: "wedding",
          title: "💐 婚礼・式典衣装",
          note: "結婚式、卒業、授賞式など人生行事のための衣装。",
          items: [
            ["princess-wedding", "プリンセスウェディングドレス", "princess wedding gown, fitted bodice, full skirt, long veil"],
            ["minimal-wedding", "ミニマルウェディング", "minimalist wedding dress, clean lines, chapel veil"],
            ["lace-wedding", "レースウェディング", "lace wedding gown, long sleeves, delicate train"],
            ["wedding-suit", "ウェディングスーツ", "formal wedding suit, boutonniere, waistcoat"],
            ["bridesmaid-dress", "ブライズメイドドレス", "coordinated bridesmaid dress, flowing chiffon skirt"],
            ["graduation-gown", "卒業ガウン", "academic graduation gown, stole, mortarboard"],
            ["award-ceremony", "授賞式ドレス", "award ceremony gown, elegant structured draping"],
            ["debutante-dress", "デビュタントドレス", "debutante ball gown, white gloves, refined embellishment"],
            ["formal-mourning", "正礼装の喪服", "formal mourning attire, restrained black tailoring"],
            ["state-banquet", "国賓晩餐会礼装", "state banquet attire, ceremonial sash, formal evening dress"]
          ]
        },
        {
          key: "stage",
          title: "🎤 ステージ・アイドル・ショー",
          note: "ライブ、演劇、ダンスで映える非日常の舞台衣装。",
          items: [
            ["pop-idol", "ポップアイドル衣装", "pop idol costume, sparkling jacket, layered skirt, stage boots"],
            ["prince-idol", "王子様アイドル衣装", "prince-style idol costume, decorated tailcoat, fitted trousers"],
            ["dance-unit", "ダンスユニット衣装", "coordinated dance unit costume, cropped jacket, flexible stage pants"],
            ["rock-vocalist", "ロックボーカル衣装", "rock vocalist outfit, statement jacket, layered black clothing, boots"],
            ["jazz-singer", "ジャズシンガー衣装", "jazz singer evening outfit, satin gown, elegant gloves"],
            ["musical-theater", "ミュージカル衣装", "musical theater costume, expressive period-inspired tailoring"],
            ["circus-ringmaster", "サーカス団長", "circus ringmaster costume, red tailcoat, gold braid, tall boots"],
            ["magician-stage", "ステージマジシャン", "stage magician outfit, fitted tailcoat, waistcoat, white gloves"],
            ["ballroom-dance", "社交ダンス衣装", "ballroom dance costume, flowing dance skirt, rhinestone accents"],
            ["figure-skating", "フィギュア衣装", "figure skating costume, fitted performance suit, crystal embellishment"]
          ]
        },
        {
          key: "events",
          title: "🎊 季節イベント・祝祭衣装",
          note: "年間行事やパーティーへすぐ使える華やかな衣装。",
          items: [
            ["christmas-formal", "クリスマス礼装", "Christmas formal outfit, deep red velvet, white trim, gold accents"],
            ["new-year-formal", "新年祝賀衣装", "New Year celebration attire, formal layers, auspicious gold accents"],
            ["halloween-witch", "ハロウィン魔女衣装", "Halloween witch costume, layered black dress, pointed hat"],
            ["masquerade", "仮面舞踏会衣装", "masquerade ball attire, ornate formalwear, decorative half mask"],
            ["carnival", "カーニバル衣装", "carnival costume, bright layered fabric, feathered accents"],
            ["valentine-formal", "バレンタイン礼装", "Valentine formal outfit, romantic red and pink accents"],
            ["spring-festival", "春祭り衣装", "spring festival attire, pastel formalwear, floral embroidery"],
            ["summer-gala", "サマーガラ", "summer gala outfit, lightweight formal fabric, elegant open collar"],
            ["harvest-festival", "収穫祭衣装", "harvest festival outfit, warm layered fabrics, rustic embroidery"],
            ["winter-gala", "冬の祝賀会", "winter gala attire, velvet formalwear, faux-fur mantle"]
          ]
        }
      ]
    },
    {
      key: "swim",
      categories: [
        {
          key: "one-piece-swim",
          title: "🏊 ワンピース水着",
          note: "競泳からレトロまで、露出度を調整しやすい一体型水着。",
          items: [
            ["classic-one-piece", "クラシックワンピース水着", "classic one-piece swimsuit"],
            ["racerback-swim", "レーサーバック水着", "athletic racerback swimsuit"],
            ["high-neck-swim", "ハイネック水着", "high-neck one-piece swimsuit"],
            ["long-sleeve-swim", "長袖スイムスーツ", "long-sleeve swim suit"],
            ["skirted-swim", "スカート付き水着", "skirted one-piece swimsuit"],
            ["colorblock-swim", "カラーブロック水着", "color-block one-piece swimsuit"],
            ["retro-swim", "レトロワンピース水着", "retro belted one-piece swimsuit"],
            ["surf-suit", "サーフスーツ", "short-sleeve surf suit"],
            ["competition-swim", "競泳水着", "streamlined competition swimsuit"],
            ["modest-swim", "モデストスイムウェア", "modest full-coverage swimwear"]
          ]
        },
        {
          key: "two-piece-swim",
          title: "🌊 ツーピース水着",
          note: "形状とスポーティーさを選べる主要なツーピース。",
          items: [
            ["high-waist-bikini", "ハイウエストビキニ", "high-waisted bikini"],
            ["halter-bikini", "ホルターネックビキニ", "halter-neck bikini"],
            ["sport-bikini", "スポーツビキニ", "athletic sport bikini"],
            ["bandeau-bikini", "ツイストバンドゥビキニ", "twist-front bandeau bikini"],
            ["ruffle-bikini", "フリルビキニ", "ruffled bikini"],
            ["wrap-bikini", "ラップビキニ", "wrap-front bikini"],
            ["longline-bikini", "ロングラインビキニ", "longline bikini top, matching bottoms"],
            ["tankini", "タンキニ", "tankini swimsuit"],
            ["tropical-bikini", "トロピカル柄ビキニ", "tropical-print bikini"],
            ["crochet-swim", "クロシェ水着", "crochet swimwear, lined fabric"]
          ]
        },
        {
          key: "resort",
          title: "🏝️ リゾート・ビーチレイヤー",
          note: "水着の上から重ねる衣装と、海辺の完成コーデ。",
          items: [
            ["sarong-wrap", "サロン巻き", "swimwear with wrapped sarong"],
            ["beach-kaftan", "ビーチカフタン", "lightweight beach kaftan"],
            ["mesh-coverup", "メッシュカバーアップ", "long mesh swim cover-up"],
            ["oversized-beach-shirt", "オーバーサイズビーチシャツ", "oversized linen beach shirt over swimwear"],
            ["linen-resort-set", "リネンリゾートセット", "linen resort set, relaxed shirt and shorts"],
            ["maxi-resort-dress", "マキシリゾートドレス", "flowing maxi resort dress"],
            ["poolside-robe", "プールサイドローブ", "light poolside robe over swimwear"],
            ["boardshort-set", "ボードショーツセット", "rash guard and board shorts"],
            ["beach-hoodie", "ビーチパーカー", "lightweight beach hoodie and swim shorts"],
            ["sailor-resort", "マリンリゾート", "nautical resort outfit, striped top, white shorts"]
          ]
        },
        {
          key: "sleep-lounge",
          title: "🌙 パジャマ・部屋着",
          note: "寝室、休日、室内シーンに使えるリラックス衣装。",
          items: [
            ["cotton-pajamas", "コットンパジャマ", "button-front cotton pajama set"],
            ["satin-pajamas", "サテンパジャマ", "satin pajama set, piped trim"],
            ["nightshirt", "ナイトシャツ", "oversized nightshirt"],
            ["bathrobe", "バスローブ", "soft belted bathrobe"],
            ["sweat-loungewear", "スウェット部屋着", "matching sweatshirt and lounge pants"],
            ["knit-loungewear", "ニットラウンジウェア", "soft knit lounge set"],
            ["hooded-onesie", "フード付き着ぐるみパジャマ", "hooded animal onesie pajamas"],
            ["camisole-pajamas", "キャミソールパジャマ", "camisole pajama top and loose shorts"],
            ["thermal-sleepwear", "冬用サーマル部屋着", "thermal sleepwear set, long sleeves"],
            ["house-dress", "ハウスドレス", "comfortable house dress"]
          ]
        },
        {
          key: "base-layers",
          title: "🧦 インナー・基礎レイヤー",
          note: "透け・重ね着・防寒を調整する非R18の実用的な基礎衣装。",
          items: [
            ["cotton-undershirt", "コットンアンダーシャツ", "cotton undershirt"],
            ["ribbed-tank", "リブタンクトップ", "ribbed tank top"],
            ["layering-camisole", "重ね着キャミソール", "layering camisole"],
            ["full-slip", "フルスリップ", "full slip underdress"],
            ["petticoat", "ペチコート", "layered petticoat"],
            ["opaque-leggings", "オペークレギンス", "opaque layering leggings"],
            ["warm-tights", "防寒タイツ", "warm opaque tights"],
            ["compression-base", "コンプレッションウェア", "athletic compression base layer"],
            ["thermal-underwear", "サーマルインナー", "thermal underwear base layer"],
            ["dance-bodysuit", "ダンス用ボディスーツ", "full-coverage dance bodysuit base layer"]
          ]
        }
      ]
    },
    {
      key: "traditional",
      categories: [
        {
          key: "japanese",
          title: "🗾 日本の伝統衣装",
          note: "日常和装から礼装、神職までを押さえた日本衣装の基本。",
          items: [
            ["furisode", "振袖", "formal furisode kimono, long sleeves, decorative obi"],
            ["tomesode", "留袖", "formal tomesode kimono, patterned hem, maru obi"],
            ["houmongi", "訪問着", "houmongi kimono, flowing shoulder-and-hem pattern"],
            ["yukata", "浴衣", "summer yukata, hanhaba obi, geta sandals"],
            ["hakama", "袴姿", "kimono with pleated hakama"],
            ["haori", "羽織スタイル", "kimono with haori jacket"],
            ["samue", "作務衣", "traditional samue workwear"],
            ["jinbei", "甚平", "summer jinbei set"],
            ["miko", "巫女装束", "Shinto shrine maiden outfit, white kosode, red hakama"],
            ["kariginu", "狩衣", "Heian kariginu court robe, wide sleeves"]
          ]
        },
        {
          key: "east-asia",
          title: "🐉 東アジア伝統衣装",
          note: "中国・韓国・周辺文化圏の代表的な正装と日常衣装。",
          items: [
            ["ruqun-hanfu", "襦裙漢服", "ruqun hanfu, cross-collar top, flowing pleated skirt"],
            ["round-collar-hanfu", "円領袍", "round-collar hanfu robe, leather belt"],
            ["ming-hanfu", "明代漢服", "Ming dynasty hanfu, stand collar jacket, horse-face skirt"],
            ["qipao", "旗袍", "classic qipao, high collar, frog closures"],
            ["changshan", "長衫", "traditional changshan long robe"],
            ["hanbok", "韓服", "traditional hanbok, jeogori jacket, full chima skirt"],
            ["male-hanbok", "男性韓服", "traditional male hanbok, jeogori, baji, durumagi"],
            ["royal-hanbok", "宮廷韓服", "royal Korean hanbok, embroidered ceremonial layers"],
            ["mongol-deel", "モンゴルのデール", "Mongolian deel robe, sash, high boots"],
            ["tibetan-chuba", "チベットのチュバ", "Tibetan chuba robe, striped apron, layered shirt"]
          ]
        },
        {
          key: "south-southeast-asia",
          title: "🪷 南・東南アジア伝統衣装",
          note: "布の巻き方と地域性が映える、人気の民族衣装。",
          items: [
            ["sari", "サリー", "traditional sari, draped pallu, fitted blouse"],
            ["lehenga", "レヘンガ・チョリ", "lehenga choli, embroidered skirt, dupatta"],
            ["salwar-kameez", "サルワール・カミーズ", "salwar kameez, long tunic, loose trousers, dupatta"],
            ["sherwani", "シェルワニ", "formal sherwani, churidar trousers, embroidered collar"],
            ["ao-dai", "アオザイ", "Vietnamese ao dai, long fitted tunic, flowing trousers"],
            ["kebaya", "クバヤ", "traditional kebaya blouse, batik sarong"],
            ["barong-tagalog", "バロン・タガログ", "Barong Tagalog, embroidered sheer formal shirt"],
            ["chut-thai", "チュット・タイ", "traditional Thai formal dress, wrapped silk skirt, shoulder sash"],
            ["sampot", "サンポット", "Cambodian sampot, fitted traditional wrap, silk top"],
            ["batik-formal", "バティック礼装", "formal batik outfit, patterned wrap skirt, fitted jacket"]
          ]
        },
        {
          key: "west-asia-africa",
          title: "🌍 西アジア・アフリカ伝統衣装",
          note: "地域ごとの形と織物を尊重した代表的な衣装。",
          items: [
            ["formal-kaftan", "フォーマルカフタン", "formal embroidered kaftan, long flowing sleeves"],
            ["abaya", "アバヤ", "elegant abaya, flowing modest silhouette"],
            ["thobe", "トーブ", "traditional thobe, long clean robe"],
            ["djellaba", "ジェラバ", "Moroccan djellaba, hooded long robe"],
            ["dashiki", "ダシキ", "West African dashiki, embroidered neckline"],
            ["grand-boubou", "グラン・ブーブー", "grand boubou, wide flowing embroidered robe"],
            ["kente-outfit", "ケンテ衣装", "formal kente cloth outfit, geometric woven pattern"],
            ["habesha-kemis", "ハベシャ・ケミス", "Habesha kemis, white woven dress, colorful tibeb borders"],
            ["maasai-shuka", "マサイのシュカ", "Maasai shuka wrap, red checked cloth, layered drape"],
            ["amazigh-dress", "アマジグ衣装", "Amazigh traditional dress, geometric embroidery, woven belt"]
          ]
        },
        {
          key: "historical-west",
          title: "🏛️ 欧州・古代・近代史衣装",
          note: "古代から20世紀まで、時代を一目で伝える代表衣装。",
          items: [
            ["greek-chiton", "古代ギリシャのキトン", "ancient Greek chiton, draped fabric, belted waist"],
            ["roman-toga", "古代ローマのトガ", "ancient Roman tunic and draped toga"],
            ["medieval-kirtle", "中世のカートル", "medieval kirtle dress, fitted bodice, long skirt"],
            ["renaissance-doublet", "ルネサンスのダブレット", "Renaissance doublet, puffed sleeves, fitted hose"],
            ["georgian-court", "ジョージアン宮廷服", "Georgian court dress, embroidered coat, waistcoat, breeches"],
            ["regency-dress", "リージェンシードレス", "Regency empire-waist dress, short puff sleeves"],
            ["victorian-bustle", "ヴィクトリアン・バッスルドレス", "Victorian bustle dress, high collar, layered overskirt"],
            ["edwardian-day", "エドワーディアン衣装", "Edwardian day dress, high neck blouse, long trumpet skirt"],
            ["flapper-1920s", "1920年代フラッパー", "1920s flapper dress, dropped waist, beaded fringe"],
            ["new-look-1950s", "1950年代ニュールック", "1950s New Look dress, fitted waist, full midi skirt"]
          ]
        }
      ]
    },
    {
      key: "fantasy",
      categories: [
        {
          key: "warriors",
          title: "🛡️ 戦士・騎士・重装職",
          note: "ファンタジー戦闘職の核になる防具と役割衣装。",
          items: [
            ["plate-knight", "プレートナイト", "full plate knight armor, articulated plates, heraldic surcoat"],
            ["chainmail-warrior", "チェインメイル戦士", "chainmail warrior outfit, padded gambeson, leather belt"],
            ["holy-paladin", "聖騎士装束", "holy paladin armor, white-gold plate, sacred tabard"],
            ["dark-knight", "暗黒騎士", "dark knight armor, blackened plate, layered cape"],
            ["shield-maiden", "シールドメイデン", "shield-maiden attire, scale armor, fur mantle, leather boots"],
            ["samurai-fantasy", "幻想侍鎧", "fantasy samurai armor, layered lamellar plates, armored sleeves"],
            ["dragon-knight", "竜騎士", "dragon knight armor, scaled pauldrons, long battle coat"],
            ["royal-guard", "王宮近衛兵", "royal guard uniform, polished cuirass, ceremonial cape"],
            ["mercenary", "傭兵装備", "mercenary outfit, mixed leather and metal armor, travel cloak"],
            ["arena-gladiator", "闘技場戦士", "fantasy arena gladiator armor, asymmetrical plates, reinforced sandals"]
          ]
        },
        {
          key: "magic",
          title: "🔮 魔術・信仰・学術職",
          note: "魔法の系統や所属を衣装で表すローブ・礼装。",
          items: [
            ["archmage", "大魔導師", "archmage robes, layered arcane mantle, embroidered constellations"],
            ["elemental-mage", "元素魔術師", "elemental mage attire, flowing robe, elemental color accents"],
            ["battle-mage", "戦闘魔術師", "battle mage outfit, armored robe, reinforced gloves, high boots"],
            ["forest-druid", "森のドルイド", "forest druid robes, natural woven layers, leaf mantle"],
            ["temple-cleric", "神殿聖職者", "temple cleric vestments, long ceremonial robe, sacred stole"],
            ["oracle", "神託の巫者", "oracle attire, layered translucent veils, celestial embroidery"],
            ["necromancer", "死霊術師", "necromancer robes, weathered black layers, bone-pattern trim"],
            ["rune-scholar", "ルーン学者", "rune scholar outfit, academic robe, inscribed sash, utility satchel"],
            ["summoner", "召喚士", "summoner attire, long split coat, talisman belts, ceremonial gloves"],
            ["artificer", "魔導技師", "fantasy artificer outfit, reinforced apron, tool harness, rune-lit gloves"]
          ]
        },
        {
          key: "rogues-explorers",
          title: "🏹 斥候・盗賊・冒険者",
          note: "軽装、探索、旅、海上冒険に向く機動的な衣装。",
          items: [
            ["forest-ranger", "森林レンジャー", "forest ranger attire, hooded cloak, leather jerkin, trail boots"],
            ["desert-ranger", "砂漠レンジャー", "desert ranger outfit, wrapped scarf, light leather armor, travel boots"],
            ["urban-rogue", "都市ローグ", "urban rogue outfit, fitted dark layers, hidden pockets, soft boots"],
            ["treasure-hunter", "トレジャーハンター", "treasure hunter outfit, utility vest, map satchel, rugged trousers"],
            ["monster-hunter", "魔物ハンター", "monster hunter attire, reinforced long coat, leather armor, tall boots"],
            ["adventurer", "王道冒険者", "classic adventurer outfit, travel cloak, leather vest, sturdy boots"],
            ["pirate-captain", "海賊船長", "pirate captain outfit, ornate long coat, waist sash, tall boots"],
            ["airship-pirate", "空賊", "airship pirate attire, cropped flight coat, harness belt, high boots"],
            ["bard", "吟遊詩人", "traveling bard outfit, colorful doublet, short cape, fitted trousers"],
            ["cartographer", "冒険地図師", "fantasy cartographer outfit, field coat, map cases, practical boots"]
          ]
        },
        {
          key: "royal",
          title: "👑 王族・貴族・宮廷",
          note: "身分、権威、宮廷文化を表現する豪華な衣装。",
          items: [
            ["fantasy-king", "幻想王衣装", "fantasy king attire, embroidered long coat, royal mantle"],
            ["fantasy-queen", "幻想女王衣装", "fantasy queen gown, structured bodice, jeweled mantle"],
            ["crown-prince", "王太子礼装", "crown prince uniform, ornate fitted coat, ceremonial sash"],
            ["royal-princess", "王女の宮廷服", "royal princess court dress, layered skirt, embroidered sleeves"],
            ["duke", "公爵礼装", "ducal court attire, brocade coat, waistcoat, formal cape"],
            ["court-lady", "宮廷女官", "court lady gown, elegant layered sleeves, jeweled belt"],
            ["royal-advisor", "王国宰相", "royal advisor robes, high collar, official sash, long coat"],
            ["ambassador", "幻想外交官", "fantasy ambassador attire, formal long coat, symbolic embroidery"],
            ["court-jester", "宮廷道化師", "court jester costume, parti-color doublet, decorative hood"],
            ["royal-page", "王宮小姓", "royal page uniform, fitted tunic, short cape, tights"]
          ]
        },
        {
          key: "mythic",
          title: "🪽 神話・異種族・概念衣装",
          note: "種族性や超常性を服の形へ落とし込む幻想衣装。",
          items: [
            ["elven-court", "エルフ宮廷服", "elven court attire, flowing layered fabric, leaf-shaped embroidery"],
            ["dwarven-forge", "ドワーフ鍛冶装束", "dwarven forge attire, heavy leather apron, metal fittings, sturdy boots"],
            ["fairy-noble", "妖精貴族衣装", "fairy noble outfit, petal-like layered fabric, iridescent trim"],
            ["angelic-vestment", "天使の祭服", "angelic vestments, white layered robes, gold celestial trim"],
            ["demonic-noble", "魔族貴族衣装", "demonic noble attire, dark formal coat, crimson lining, horn-shaped ornaments"],
            ["dragon-priest", "竜神官", "dragon priest robes, scaled mantle, ceremonial sash"],
            ["merfolk-royal", "海の王族衣装", "merfolk royal attire, shell-like armor, flowing translucent drapery"],
            ["celestial-weaver", "星織りの衣", "celestial woven robes, starfield fabric, luminous thread"],
            ["nature-spirit", "自然精霊衣装", "nature spirit attire, layered leaves, bark-textured fabric, vine sash"],
            ["winter-spirit", "冬精霊衣装", "winter spirit robes, crystalline trim, soft white layered fabric"]
          ]
        }
      ]
    },
    {
      key: "sf",
      categories: [
        {
          key: "cyberpunk",
          title: "🌃 サイバーパンク衣装",
          note: "ネオン都市、情報戦、裏社会に合う近未来ストリート衣装。",
          items: [
            ["neon-runner", "ネオンランナー", "cyberpunk runner outfit, luminous piping, utility jacket, fitted tech pants"],
            ["netrunner", "ネットランナー", "netrunner suit, hooded interface jacket, data gloves, cable ports"],
            ["street-samurai", "ストリートサムライ", "street samurai outfit, armored long coat, tactical hakama pants"],
            ["cyber-detective", "サイバー探偵", "cyber detective attire, dark trench coat, augmented visor, smart gloves"],
            ["neon-idol", "ネオンアイドル", "neon idol costume, holographic jacket, luminous stage skirt"],
            ["corporate-agent", "企業エージェント", "corporate agent suit, sharp tailoring, concealed tech harness"],
            ["tech-gang", "テックギャング", "tech gang streetwear, patched jacket, modular straps, heavy sneakers"],
            ["holo-fashion", "ホログラムファッション", "holographic fashion outfit, translucent layers, shifting color panels"],
            ["cyber-medic", "サイバー衛生兵", "cyber medic uniform, luminous medical jacket, compact utility pouches"],
            ["drone-operator", "ドローンオペレーター", "drone operator outfit, smart vest, control gauntlets, utility trousers"]
          ]
        },
        {
          key: "space",
          title: "🚀 宇宙・航宙衣装",
          note: "船内勤務、船外活動、植民地生活までをカバーする宇宙服。",
          items: [
            ["eva-suit", "船外活動宇宙服", "EVA spacesuit, pressurized layers, life-support backpack"],
            ["flight-suit", "宇宙飛行服", "spaceflight suit, mission patches, pressure fittings"],
            ["starship-captain", "宇宙船船長制服", "starship captain uniform, structured jacket, command insignia"],
            ["starship-crew", "宇宙船クルー制服", "starship crew uniform, color-coded panels, utility boots"],
            ["space-marine", "宇宙海兵隊", "space marine armor, sealed combat suit, reinforced boots"],
            ["colony-worker", "宇宙植民地作業服", "space colony workwear, pressure-ready coveralls, tool harness"],
            ["lunar-scientist", "月面研究員", "lunar researcher suit, dust-resistant lab layers, helmet collar"],
            ["orbital-diplomat", "軌道外交官", "orbital diplomat attire, sleek formal coat, metallic trim"],
            ["space-trader", "宇宙商人", "space trader outfit, layered travel coat, cargo sash, magnetic boots"],
            ["zero-g-sport", "無重力スポーツウェア", "zero-gravity sport suit, fitted flexible panels, grip footwear"]
          ]
        },
        {
          key: "android-mecha",
          title: "🦾 アンドロイド・メカ装備",
          note: "機械身体、操縦、外骨格との接続を意識した衣装。",
          items: [
            ["android-skin-suit", "アンドロイドスキンスーツ", "android synthetic skin suit, segmented seam lines, luminous joints"],
            ["service-android", "サービスアンドロイド制服", "service android uniform, clean geometric panels, identity lights"],
            ["combat-android", "戦闘アンドロイド装甲", "combat android armor, segmented plating, reinforced joints"],
            ["mecha-pilot", "メカパイロットスーツ", "mecha pilot suit, fitted pressure panels, neural interface collar"],
            ["exo-frame", "外骨格フレーム装備", "powered exoskeleton suit, articulated frame, protective underlayer"],
            ["maintenance-cyborg", "サイボーグ整備服", "cyborg maintenance outfit, access-panel vest, insulated gloves"],
            ["synthetic-idol", "人工生命アイドル", "synthetic idol costume, luminous geometric dress, holographic accents"],
            ["robotic-priest", "機械司祭", "machine priest robes, cable mantle, metallic vestments"],
            ["bio-mech-suit", "バイオメカスーツ", "bio-mechanical suit, organic armor panels, flexible ribbing"],
            ["remote-avatar", "遠隔アバター衣装", "remote avatar suit, motion-capture panels, sensor markers"]
          ]
        },
        {
          key: "tactical",
          title: "☢️ 戦術・終末・サバイバル",
          note: "危険環境、災害後、特殊任務に耐える機能衣装。",
          items: [
            ["urban-tactical", "都市戦術装備", "urban tactical outfit, armored vest, cargo trousers, combat boots"],
            ["stealth-ops", "ステルスオペレーター", "stealth operations suit, matte fitted layers, low-profile armor"],
            ["hazmat", "化学防護服", "hazmat suit, sealed hood, protective gloves, reinforced boots"],
            ["radiation-scout", "放射線スカウト", "radiation scout outfit, protective coat, respirator harness, dosimeter"],
            ["wasteland-survivor", "荒野サバイバー", "wasteland survivor outfit, patched layered clothing, utility belts"],
            ["disaster-rescue", "災害救助隊", "disaster rescue uniform, high-visibility armored jacket, cargo pants"],
            ["arctic-expedition", "極地探査装備", "arctic expedition suit, insulated layers, sealed hood, snow boots"],
            ["desert-expedition", "砂漠探査装備", "desert expedition outfit, sun-protective wraps, cooling vest"],
            ["underwater-ops", "水中作戦スーツ", "underwater operations suit, reinforced wetsuit, equipment harness"],
            ["biohazard-response", "生物災害対応服", "biohazard response suit, sealed protective layers, medical utility pack"]
          ]
        },
        {
          key: "future-civic",
          title: "🏙️ 未来都市・科学職",
          note: "明るい未来社会、研究都市、公共サービス向けの衣装。",
          items: [
            ["future-doctor", "未来医師", "futuristic doctor uniform, clean smart coat, luminous medical interface"],
            ["quantum-scientist", "量子研究者", "quantum scientist outfit, modular lab coat, sensor gloves"],
            ["city-administrator", "未来都市行政官", "future city administrator uniform, minimalist formal coat, civic insignia"],
            ["transit-officer", "未来交通局員", "future transit officer uniform, smart jacket, holographic badge"],
            ["climate-engineer", "気候技師", "climate engineer suit, environmental sensor vest, field trousers"],
            ["arcology-worker", "アーコロジー作業員", "arcology worker uniform, modular coveralls, utility harness"],
            ["future-teacher", "未来学園教師", "future teacher attire, clean layered suit, digital cuff display"],
            ["spaceport-staff", "宇宙港スタッフ", "spaceport staff uniform, streamlined jacket, service insignia"],
            ["hologram-designer", "ホログラムデザイナー", "hologram designer outfit, translucent layered jacket, smart gloves"],
            ["utopian-citizen", "未来市民服", "utopian civilian outfit, seamless tailored layers, soft luminous trim"]
          ]
        }
      ]
    },
    {
      key: "subculture",
      categories: [
        {
          key: "lolita-gothic",
          title: "🖤 ロリータ・ゴシック大全",
          note: "主要ロリータ系統とゴシック派生を分けて選べる衣装。",
          items: [
            ["classic-lolita", "クラシカルロリータ", "classic lolita dress, high neckline, lace trim, knee-length bell skirt"],
            ["sweet-lolita", "スウィートロリータ", "sweet lolita dress, pastel colors, bows, layered petticoat"],
            ["gothic-lolita", "ゴシックロリータ", "gothic lolita dress, black lace, structured bell skirt"],
            ["country-lolita", "カントリーロリータ", "country lolita outfit, floral dress, apron, straw bonnet"],
            ["sailor-lolita", "セーラーロリータ", "sailor lolita dress, sailor collar, ribbon, bell skirt"],
            ["military-lolita", "ミリタリーロリータ", "military lolita outfit, fitted jacket, braid trim, pleated bell skirt"],
            ["ouji-fashion", "王子系ファッション", "ouji fashion, tailored short coat, ruffled shirt, knee breeches"],
            ["aristocrat-goth", "ゴシックアリストクラット", "gothic aristocrat outfit, long tailored coat, high collar, waistcoat"],
            ["romantic-goth", "ロマンティックゴス", "romantic goth outfit, flowing black dress, lace sleeves, velvet accents"],
            ["industrial-goth", "インダストリアルゴス", "industrial goth outfit, black utility layers, straps, heavy platform boots"]
          ]
        },
        {
          key: "harajuku-kawaii",
          title: "🌈 原宿・カワイイ・デコラ",
          note: "色、レイヤー、小物量で個性を作る日本発ストリート系統。",
          items: [
            ["decora", "デコラ", "decora fashion, colorful layered clothing, abundant cute accessories"],
            ["fairy-kei", "フェアリー系", "fairy kei outfit, pastel oversized sweatshirt, tulle skirt, colorful tights"],
            ["pop-kei", "ポップ系", "Japanese pop-kei outfit, bold color blocking, playful layered pieces"],
            ["cult-party-kei", "カルトパーティー系", "cult party kei outfit, white layered vintage dress, soft lace, ribbon details"],
            ["mori-kei", "森ガール", "mori kei outfit, natural layered dress, knit vest, earthy fabrics"],
            ["dolly-kei", "ドーリー系", "dolly kei outfit, antique-inspired layered dress, tapestry fabric"],
            ["visual-kawaii", "ビジュアルカワイイ", "visual kawaii outfit, bright dramatic layers, patterned stockings"],
            ["kawaii-street", "カワイイストリート", "kawaii streetwear, pastel hoodie, pleated skirt, chunky sneakers"],
            ["character-fashion", "キャラクターファッション", "character-themed fashion, motif hoodie, coordinated color accents"],
            ["rainbow-layered", "レインボーレイヤード", "rainbow layered outfit, colorful knitwear, patterned skirt, bright shoes"]
          ]
        },
        {
          key: "music",
          title: "🎸 音楽・ライブ系ファッション",
          note: "音楽ジャンルと演者の個性を衣装で見せるステージ系統。",
          items: [
            ["punk-rock", "パンクロック", "punk rock outfit, patched leather jacket, tartan trousers, combat boots"],
            ["glam-rock", "グラムロック", "glam rock outfit, metallic fitted jacket, flared trousers, platform boots"],
            ["visual-kei", "ヴィジュアル系", "visual kei outfit, dramatic black layers, ornate jacket, platform boots"],
            ["metal-band", "メタルバンド衣装", "heavy metal stage outfit, black leather, studded details, tall boots"],
            ["indie-musician", "インディーミュージシャン", "indie musician outfit, vintage jacket, graphic tee, relaxed trousers"],
            ["hip-hop-stage", "ヒップホップステージ", "hip-hop stage outfit, oversized jacket, loose pants, statement sneakers"],
            ["electro-dj", "エレクトロDJ", "electronic DJ outfit, reflective jacket, fitted black layers, headphones"],
            ["jazz-band", "ジャズバンド衣装", "jazz band attire, formal shirt, waistcoat, tailored trousers"],
            ["folk-singer", "フォークシンガー", "folk singer outfit, embroidered blouse, denim, worn leather boots"],
            ["orchestra-formal", "オーケストラ礼装", "orchestra concert attire, formal black suit or long black dress"]
          ]
        },
        {
          key: "trend-cores",
          title: "📱 現代トレンド・コア系",
          note: "SNSや若者文化で使われる、分かりやすい美学ベースの服装。",
          items: [
            ["cottagecore", "コテージコア", "cottagecore outfit, floral dress, puff sleeves, woven accessories"],
            ["royalcore", "ロイヤルコア", "royalcore outfit, brocade coat, elegant blouse, jeweled accents"],
            ["fairycore", "フェアリーコア", "fairycore outfit, layered sheer fabric, floral embroidery, iridescent accents"],
            ["goblincore", "ゴブリンコア", "goblincore outfit, earthy layered knits, patched trousers, practical boots"],
            ["kidcore", "キッドコア", "kidcore outfit, primary colors, playful prints, chunky sneakers"],
            ["balletcore", "バレエコア", "balletcore outfit, wrap cardigan, soft tulle skirt, leg warmers"],
            ["tenniscore", "テニスコア", "tenniscore outfit, pleated sport skirt, knit vest, clean sneakers"],
            ["old-money", "オールドマネー風", "old money style, fine knit polo, tailored trousers, leather loafers"],
            ["coquette", "コケットスタイル", "coquette outfit, fitted cardigan, ribbon details, soft flared skirt"],
            ["clean-girl", "クリーンガール風", "clean minimalist outfit, fitted neutral top, tailored pants, simple loafers"]
          ]
        },
        {
          key: "sports-leisure",
          title: "🏁 スポーツ・趣味・競技スタイル",
          note: "競技の雰囲気を保ちながら、キャラクター衣装として使いやすい服。",
          items: [
            ["skateboard", "スケートボードスタイル", "skateboard outfit, oversized tee, loose jeans, skate shoes"],
            ["street-dance", "ストリートダンス", "street dance outfit, cropped track jacket, loose cargo pants, sneakers"],
            ["esports-player", "eスポーツ選手", "esports team jersey, performance jacket, athletic pants"],
            ["racing-driver", "レーシングドライバー", "professional racing suit, sponsor patches, protective gloves"],
            ["pit-crew", "ピットクルー", "motorsport pit crew uniform, team coveralls, utility gloves"],
            ["cheer-uniform", "チアユニフォーム", "cheerleading uniform, fitted team top, pleated sport skirt"],
            ["dance-practice", "ダンス練習着", "dance practice wear, fitted top, warm-up pants, dance sneakers"],
            ["martial-arts", "武道練習着", "martial arts training uniform, wrapped jacket, tied belt"],
            ["cycling-kit", "サイクルウェア", "professional cycling kit, fitted jersey, padded shorts"],
            ["climbing-gear", "クライミングウェア", "climbing outfit, flexible technical clothing, safety harness"]
          ]
        }
      ]
    },
    {
      key: "adjust",
      categories: [
        {
          key: "silhouettes",
          title: "📐 シルエット調整",
          note: "衣装全体の幅、丈、重心を後から調整する語。",
          items: [
            ["fitted-silhouette", "身体に沿うシルエット", "fitted clothing silhouette"],
            ["relaxed-silhouette", "ゆったりシルエット", "relaxed clothing silhouette"],
            ["oversized-silhouette", "オーバーサイズ", "oversized clothing silhouette"],
            ["boxy-silhouette", "ボクシーシルエット", "boxy clothing silhouette"],
            ["a-line-silhouette", "Aラインシルエット", "A-line clothing silhouette"],
            ["column-silhouette", "縦長コラムシルエット", "long column silhouette"],
            ["hourglass-tailoring", "砂時計型テーラリング", "hourglass tailored silhouette"],
            ["high-waist-shape", "ハイウエスト重心", "high-waisted silhouette"],
            ["cropped-proportion", "クロップド丈バランス", "cropped upper-body proportion"],
            ["longline-proportion", "ロングライン", "longline clothing proportion"]
          ]
        },
        {
          key: "necklines",
          title: "🔻 襟・ネックライン",
          note: "顔まわりと衣装ジャンルを決める主要な襟型。",
          items: [
            ["stand-collar", "スプリットスタンドカラー", "split stand collar"],
            ["mandarin-collar", "マンダリンカラー", "mandarin collar"],
            ["sailor-collar", "大きなセーラーカラー", "oversized sailor collar"],
            ["peter-pan-collar", "ピーターパンカラー", "Peter Pan collar"],
            ["shawl-collar", "ショールカラー", "shawl collar"],
            ["notched-lapel", "ノッチドラペル", "notched lapels"],
            ["peak-lapel", "ピークドラペル", "peak lapels"],
            ["square-neckline", "スクエアネック", "square neckline"],
            ["boat-neckline", "ボートネック", "boat neckline"],
            ["keyhole-neckline", "キーホールネック", "keyhole neckline"]
          ]
        },
        {
          key: "sleeves",
          title: "🪡 袖デザイン",
          note: "時代感、ボリューム、動きを作る袖の主要形状。",
          items: [
            ["bishop-sleeves", "ビショップスリーブ", "bishop sleeves"],
            ["bell-sleeves", "レイヤードベルスリーブ", "layered bell sleeves"],
            ["puff-sleeves", "ギャザーパフスリーブ", "gathered puff sleeves"],
            ["leg-mutton-sleeves", "レッグオブマトンスリーブ", "leg-of-mutton sleeves"],
            ["kimono-sleeves", "キモノスリーブ", "wide kimono sleeves"],
            ["raglan-sleeves", "ラグランスリーブ", "raglan sleeves"],
            ["cap-sleeves", "キャップスリーブ", "cap sleeves"],
            ["split-sleeves", "スプリットスリーブ", "split sleeves"],
            ["detached-sleeves", "リボン留めデタッチドスリーブ", "ribbon-tied detached sleeves"],
            ["rolled-sleeves", "袖まくり", "rolled-up sleeves"]
          ]
        },
        {
          key: "layers-fasteners",
          title: "🧷 重ね方・留め方",
          note: "衣装の構造と着こなしを具体化するレイヤー・留め具。",
          items: [
            ["layered-vest", "ベスト重ね着", "layered vest over shirt"],
            ["double-layer-skirt", "二重スカート", "double-layered skirt"],
            ["asymmetrical-layer", "左右非対称レイヤー", "asymmetrical layered clothing"],
            ["cross-wrap", "クロスラップ構造", "cross-wrapped garment"],
            ["double-breasted", "ダブルブレスト", "double-breasted front"],
            ["frog-closures", "チャイナボタン", "decorative frog closures"],
            ["toggle-fasteners", "トグル留め", "toggle fasteners"],
            ["corset-lacing", "編み上げ構造", "decorative corset lacing"],
            ["side-buckles", "サイドバックル", "side buckle fasteners"],
            ["hidden-zipper", "隠しファスナー", "concealed zipper construction"]
          ]
        },
        {
          key: "materials-patterns",
          title: "🧵 生地・柄・表面",
          note: "既存衣装を別素材・別柄へ展開する汎用調整語。",
          items: [
            ["herringbone", "ヘリンボーン生地", "herringbone fabric"],
            ["houndstooth", "千鳥格子", "houndstooth pattern"],
            ["windowpane-check", "ウィンドウペーン柄", "windowpane check pattern"],
            ["pinstripe", "ピンストライプ", "fine pinstripe pattern"],
            ["tartan", "タータンチェック", "tartan plaid fabric"],
            ["brocade", "ブロケード織", "ornate brocade fabric"],
            ["jacquard", "ジャカード織", "jacquard woven fabric"],
            ["washed-denim", "ウォッシュドデニム", "washed denim texture"],
            ["quilted-fabric", "キルティング生地", "quilted fabric panels"],
            ["color-gradient", "布のグラデーション", "gradient-dyed fabric"]
          ]
        },
        {
          key: "footwear",
          title: "👢 靴・足元の定番",
          note: "衣装の時代、役割、活動性を最後に整える主要な靴。",
          items: [
            ["penny-loafers", "ペニーローファー", "penny loafers"],
            ["mary-janes", "メリージェーン", "Mary Jane shoes"],
            ["oxford-shoes", "オックスフォードシューズ", "Oxford dress shoes"],
            ["ankle-boots", "アンクルブーツ", "leather ankle boots"],
            ["knee-boots", "ロングブーツ", "knee-high leather boots"],
            ["combat-boots", "コンバットブーツ", "lace-up combat boots"],
            ["riding-boots", "乗馬ブーツ", "tall riding boots"],
            ["platform-sneakers", "厚底スニーカー", "platform sneakers"],
            ["ballet-flats", "バレエフラット", "ballet flats"],
            ["strappy-sandals", "ストラップサンダル", "strappy flat sandals"]
          ]
        }
      ]
    }
  ];

  window.SHIMA_ATTIRE_AKASHIC_V1 = {
    version: "1.0.0",
    groups: groups
  };
})();
