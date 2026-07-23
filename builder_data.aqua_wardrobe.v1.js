(function(){
  "use strict";

  const coastalPalettes = [
    ["pearl-sky", "真珠白×空色", "pearl-white and clear sky-blue palette, fine shell-edge piping"],
    ["coral-cream", "珊瑚色×クリーム", "soft coral and warm cream palette, restrained scallop edging"],
    ["marine-navy", "マリン紺×白", "deep marine navy and clean white palette, narrow nautical stripe accents"],
    ["mint-silver", "ミント×銀", "cool mint and pale silver palette, small sea-glass trim"],
    ["sunset-orange", "夕焼け橙×紫", "sunset orange and dusk-violet palette, controlled gradient panels"],
    ["lavender-aqua", "藤色×アクア", "lavender and clear aqua palette, delicate ripple-line accents"],
    ["black-gold", "黒×シャンパン金", "matte black and champagne-gold palette, precise metallic piping"],
    ["tropical-green", "南国緑×黄", "tropical green and citrus-yellow palette, compact leaf-print accents"],
    ["rose-burgundy", "ローズ×深紅", "dusty rose and burgundy palette, refined petal-shaped edging"],
    ["pastel-spectrum", "淡色スペクトラム", "controlled pastel-spectrum palette, softly separated color-block panels"]
  ];

  const designFinishes = [
    ["clean-seam", "クリーンシーム", "clean mapped seams, balanced solid-color panels"],
    ["ruched-panel", "サイドギャザー", "controlled side ruching, smooth central panel"],
    ["contrast-piping", "コントラスト縁取り", "precise contrast piping along every garment edge"],
    ["scallop-edge", "波型スカラップ", "small wave-shaped scallop edging, restrained trim density"],
    ["geometric-block", "幾何学カラーブロック", "geometric color-block construction, clearly separated panels"],
    ["botanical-print", "小花ボタニカル", "compact coastal botanical print, clean solid-color borders"],
    ["nautical-stripe", "細身マリンストライプ", "fine nautical stripes, solid side panels, tidy spacing"],
    ["pearl-trim", "小粒パールトリム", "small pearl-like trim fixed securely along the neckline"],
    ["sport-zip", "スポーティージップ", "short functional front zip, athletic seam mapping"],
    ["ombre-ripple", "波紋オンブレ", "controlled ripple-like ombre transition across the swim fabric"]
  ];

  const separateFinishes = [
    ["solid-minimal", "無地ミニマル", "minimal solid-color construction, clean elastic edges"],
    ["two-tone-band", "二色バンド", "two-tone banded construction, clear top-and-bottom color balance"],
    ["micro-stripe", "極細ストライプ", "fine vertical stripe print, solid-color binding"],
    ["gingham", "海辺ギンガム", "small gingham swim print, neat contrast ties"],
    ["tropical-leaf", "南国リーフ", "compact tropical-leaf print, controlled motif spacing"],
    ["shell-border", "貝殻ボーダー", "small shell-border motif, plain central swim panels"],
    ["color-block", "スポーツ配色", "athletic color-block panels, precise seam separation"],
    ["ripple-gradient", "水面グラデーション", "water-ripple gradient, clearly bounded garment edges"],
    ["metallic-piping", "細身メタル縁", "slender metallic piping, matte swim-fabric base"],
    ["embroidered-edge", "刺繍風エッジ", "swim-safe embroidered-look edging, restrained decorative density"]
  ];

  const technicalFinishes = [
    ["navy-red", "紺×救難赤", "navy technical swim fabric with restrained rescue-red markers"],
    ["black-cyan", "黒×シアン", "matte black technical swim fabric with clear cyan seam lines"],
    ["white-blue", "白×競技青", "white and competition-blue panel layout with crisp lane-style accents"],
    ["charcoal-lime", "炭灰×ライム", "charcoal technical fabric with high-visibility lime edge bands"],
    ["ocean-teal", "深海ティール", "deep-ocean teal technical palette with pale sea-glass seams"],
    ["coral-navy", "珊瑚×紺", "coral and navy athletic panels with balanced contrast zones"],
    ["silver-violet", "銀×紫", "pale silver and violet technical panels with low-profile reflective trim"],
    ["sand-aqua", "砂色×アクア", "sand-beige and aqua technical palette with clean utility markings"],
    ["monochrome", "白黒モノクロ", "high-contrast black-and-white technical panel construction"],
    ["signal-spectrum", "信号色スペクトラム", "controlled signal-color accents over a neutral technical base"]
  ];

  const heritageFinishes = [
    ["polka-dot", "水玉クラシック", "small polka-dot swim print, clean solid-color binding"],
    ["sailor-stripe", "船員ストライプ", "heritage sailor stripes, narrow contrast borders"],
    ["gingham-check", "ギンガムチェック", "small gingham-check swim textile, tidy matching ties"],
    ["art-deco", "アールデコ", "restrained Art Deco fan geometry, balanced metallic accents"],
    ["midcentury-floral", "ミッドセンチュリー花柄", "mid-century floral swim print, controlled motif scale"],
    ["island-tapa", "島嶼タパ風", "tapa-inspired geometric print, respectful abstract motif treatment"],
    ["mediterranean-tile", "地中海タイル風", "Mediterranean tile-inspired repeat pattern, crisp blue-white rhythm"],
    ["wax-print", "ワックスプリント風", "wax-print-inspired geometric color rhythm, clean garment borders"],
    ["seigaiha", "青海波モチーフ", "stylized seigaiha wave motif, restrained repeat scale"],
    ["ikat", "イカット風", "ikat-inspired softened geometric bands, balanced color spacing"]
  ];

  const mythicFinishes = [
    ["pearl-tide", "真珠潮", "pearl-tide ornament, layered nacre-like swim panels"],
    ["moon-jelly", "月海月", "moon-jelly inspired translucent-look ruffles over opaque swim fabric"],
    ["coral-court", "珊瑚宮廷", "coral-branch inspired trim, structured reef-like garment edging"],
    ["abyss-blue", "深淵青", "abyss-blue gradient panels, small bioluminescent-look seam marks"],
    ["sea-dragon", "海竜鱗", "sea-dragon scale motif, streamlined fin-shaped garment panels"],
    ["foam-crown", "白波冠", "white-seafoam layered edging, compact crown-like neckline detail"],
    ["tide-oracle", "潮汐術式", "tidal sigil embroidery, concentric current-line garment motifs"],
    ["sunken-gold", "沈都古金", "weathered antique-gold trim, submerged-ruin geometric ornament"],
    ["storm-current", "嵐潮", "storm-current spiral pattern, secured asymmetric swim panels"],
    ["crystal-lagoon", "結晶礁湖", "crystal-lagoon color facets, translucent-look trim over opaque lining"]
  ];

  const elementalFinishes = [
    ["water", "清流", "flowing-water motif, layered ripple edging"],
    ["ice", "氷海", "ice-crystal motif, frosted-looking trim over flexible swim fabric"],
    ["fire", "火山潮", "volcanic ember motif, dark swim fabric with controlled flame-like piping"],
    ["wind", "海風", "sea-wind ribbon motif, securely anchored streaming garment tabs"],
    ["lightning", "雷雨", "lightning-line motif, sharp electric accent seams"],
    ["forest", "海岸樹林", "coastal-leaf motif, layered green swim panels"],
    ["sun", "太陽潮", "solar-disc motif, radiant gold-orange garment borders"],
    ["moon", "月潮", "crescent-tide motif, silver-blue reflective-look piping"],
    ["mist", "朝霧", "sea-mist gradient, softly diffused color transitions"],
    ["rainbow", "虹潮", "controlled rainbow-current motif, clearly separated swimwear panels"]
  ];

  const sciFiFinishes = [
    ["aqua-circuit", "アクア回路", "aqua circuit seam lines, compact waterproof interface tabs"],
    ["pressure-shell", "水圧シェル", "segmented pressure-shell swim panels, flexible articulated joins"],
    ["holo-current", "ホロ潮流", "holographic-current film accents over opaque technical swim fabric"],
    ["sonar-grid", "ソナーグリッド", "sonar-grid motif, concentric signal markings on the garment"],
    ["reef-drone", "リーフドローン", "reef-drone inspired modular trim, small detachable utility tabs"],
    ["zero-buoyancy", "ゼロ浮力", "zero-buoyancy training configuration, balanced compression panels"],
    ["bio-lumen", "生体発光ライン", "bioluminescent-look fiber seams, opaque swimwear construction"],
    ["orbital-pool", "軌道プール", "orbital-pool uniform styling, clean white-aqua technical panels"],
    ["deep-sea-lab", "深海研究所", "deep-sea laboratory styling, instrument-blue markers and sealed seams"],
    ["transform-panel", "可変パネル", "convertible modular swim panels, secured adjustable coverage sections"]
  ];

  const marineMotifs = [
    ["manta", "マンタ翼", "manta-ray inspired wing-shaped garment panels, smooth black-blue swim fabric"],
    ["dolphin", "イルカ流線", "dolphin-inspired streamlined seam mapping, silver-aqua accents"],
    ["orca", "シャチ配色", "orca-inspired black-and-white color blocking, clean curved boundaries"],
    ["clownfish", "クマノミ帯", "clownfish-inspired orange-white banding with dark trim"],
    ["seahorse", "タツノオトシゴ", "seahorse-inspired curled embroidery and segmented gold-aqua details"],
    ["jellyfish", "クラゲ傘", "jellyfish-bell inspired layered ruffles over opaque swimwear"],
    ["nautilus", "オウムガイ螺旋", "nautilus spiral motif, pearl-bronze geometric swim panels"],
    ["coral", "珊瑚枝", "coral-branch motif, reef-red accents on a clean neutral base"],
    ["sea-turtle", "海亀甲羅", "sea-turtle shell geometry, emerald and sand-colored swim panels"],
    ["flying-fish", "飛魚翼", "flying-fish inspired fin-like side panels, silver-blue streamlined trim"]
  ];

  function makeCategory(config){
    return {
      key: config.key,
      title: config.title,
      note: config.note,
      selection: config.selection || "single",
      kind: config.kind || "item",
      items: config.variants.map(function(variant){
        const description = config.componentsJa
          ? "構成：" + config.componentsJa + "／" + variant[1] + "の配色・意匠"
          : "";
        return {
          slug: variant[0],
          ja: variant[1] + "・" + config.baseJa,
          en: config.baseEn + ", " + variant[2],
          description: description
        };
      })
    };
  }

  function makePartCategory(key, title, note, rows){
    return {
      key: key,
      title: title,
      note: note,
      selection: "multi",
      kind: "part",
      items: rows.map(function(row){
        return { slug: row[0], ja: row[1], en: row[2], description: row[3] || "" };
      })
    };
  }

  const groups = [
    {
      key: "quick",
      title: "✨ おまかせ完成水着",
      note: "水着・羽織・足元・小物まで一度に決める60セット。構成をカードで確認できます。",
      selection: "single",
      categories: [
        makeCategory({ key:"beach-stroll", title:"🏖️ 海辺散歩コーデ", note:"歩きやすい軽装と日差し対策をまとめる。", kind:"set", baseJa:"海辺散歩セット", baseEn:"complete beach-stroll swim coordinate, classic one-piece swimsuit, airy short beach shirt, woven sun hat, flat waterproof sandals, compact shell tote", componentsJa:"ワンピース水着／短丈ビーチシャツ／麦わら帽子／防水サンダル／小型トート", variants:coastalPalettes }),
        makeCategory({ key:"resort-pool", title:"🏨 リゾートプールコーデ", note:"上品な水着とホテル向け小物を揃える。", kind:"set", baseJa:"リゾートプールセット", baseEn:"complete resort-pool swim coordinate, asymmetric one-piece swimsuit, knee-length sheer-look cover-up over opaque swimwear, wide-brim visor, pool slides, waterproof mini pouch", componentsJa:"アシンメトリー水着／膝丈カバーアップ／ワイドバイザー／プールサンダル／防水ポーチ", variants:coastalPalettes }),
        makeCategory({ key:"tropical-cruise", title:"🛳️ トロピカルクルーズ", note:"船上休暇に似合う軽快なリゾート一式。", kind:"set", baseJa:"クルーズ休暇セット", baseEn:"complete tropical-cruise swim coordinate, halter bikini, tied sarong skirt, packable sun hat, rope-detail sandals, small deck bag", componentsJa:"ホルタービキニ／結びサロン／携帯サンハット／ロープサンダル／デッキバッグ", variants:coastalPalettes }),
        makeCategory({ key:"water-park", title:"🛟 ウォーターパーク", note:"動いても外れにくい安全重視の完成セット。", kind:"set", baseJa:"ウォーターパークセット", baseEn:"complete water-park swim coordinate, secure zip-front tankini, fitted swim shorts, compact rash vest, grip water shoes, wrist locker band", componentsJa:"ジップタンキニ／フィットスイムショーツ／ラッシュベスト／ウォーターシューズ／ロッカーバンド", variants:technicalFinishes }),
        makeCategory({ key:"spa-retreat", title:"♨️ スパ・ウェルネス", note:"落ち着いた水着と柔らかな館内羽織をまとめる。", kind:"set", baseJa:"スパ休息セット", baseEn:"complete spa-wellness swim coordinate, softly draped one-piece swimsuit, lightweight wrap robe, washable spa slippers, folded spa head wrap, compact amenity pouch", componentsJa:"ドレープ水着／軽量ラップローブ／スパスリッパ／スパ用ヘッドラップ／アメニティポーチ", variants:coastalPalettes }),
        makeCategory({ key:"active-coast", title:"🏄 アクティブビーチ", note:"泳ぐ・遊ぶ・移動するを一式で支える。", kind:"set", baseJa:"海岸アクティブセット", baseEn:"complete active-coast swim coordinate, long-sleeve rash guard, board shorts, supportive swim inner layer, reef-safe water shoes, compact dry bag", componentsJa:"長袖ラッシュガード／ボードショーツ／スイムインナー／リーフシューズ／ドライバッグ", variants:technicalFinishes })
      ]
    },
    {
      key: "onepiece",
      title: "🩱 ワンピース・モノキニ",
      note: "一枚で形が決まる定番から構築的なデザインまで40着。",
      selection: "single",
      categories: [
        makeCategory({ key:"classic-onepiece", title:"定番ワンピース", note:"癖の少ない基本形。", baseJa:"定番ワンピース水着", baseEn:"classic one-piece swimsuit, balanced scoop neckline, medium shoulder straps, fully lined swimwear construction", variants:designFinishes }),
        makeCategory({ key:"halter-onepiece", title:"ホルターワンピース", note:"首まわりの線を主役にする。", baseJa:"ホルターワンピース水着", baseEn:"halter-neck one-piece swimsuit, secured neck band, open shoulder line, fully lined swimwear construction", variants:designFinishes }),
        makeCategory({ key:"swim-dress", title:"スイムドレス", note:"短いスカート層を一体化した水着。", baseJa:"スイムドレス", baseEn:"one-piece swim dress, integrated short overskirt, fitted swim base, secure underwater construction", variants:designFinishes }),
        makeCategory({ key:"monokini", title:"構築モノキニ", note:"左右や中央の接続をデザインとして見せる。", baseJa:"構築モノキニ", baseEn:"architectural monokini swimsuit, connected upper and lower swim panels, controlled side cutouts, fully lined opaque construction", variants:designFinishes })
      ]
    },
    {
      key: "bikini",
      title: "👙 ビキニ・セパレート",
      note: "上下一体感、安定感、装飾量から選ぶ50着。",
      selection: "single",
      categories: [
        makeCategory({ key:"triangle-bikini", title:"トライアングル", note:"調整しやすい定番セパレート。", baseJa:"トライアングルビキニ", baseEn:"triangle bikini set, adjustable secured ties, lined swim cups, matching medium-rise swim bottoms", variants:separateFinishes }),
        makeCategory({ key:"bandeau-bikini", title:"バンドゥ", note:"水平ラインを活かすストラップレス系。", baseJa:"バンドゥビキニ", baseEn:"bandeau bikini set, structured strapless swim top with optional removable neck strap, matching lined swim bottoms", variants:separateFinishes }),
        makeCategory({ key:"high-waist-bikini", title:"ハイウエスト", note:"腰位置の高いレトロ寄り構成。", baseJa:"ハイウエストビキニ", baseEn:"high-waisted bikini set, supportive swim top, high-rise lined swim bottoms, clean waist panel", variants:separateFinishes }),
        makeCategory({ key:"tankini", title:"タンキニ", note:"トップ丈を長くした動きやすい二部構成。", baseJa:"タンキニセット", baseEn:"tankini swim set, fitted longline swim top, matching secure swim bottoms, fully lined quick-dry construction", variants:separateFinishes }),
        makeCategory({ key:"ruffle-skirted", title:"フリル・スカート", note:"小さな布量追加で柔らかな輪郭を作る。", baseJa:"フリルスカートビキニ", baseEn:"ruffled skirted bikini set, secure swim top, compact ruffle edging, short integrated swim skirt over lined bottoms", variants:separateFinishes })
      ]
    },
    {
      key: "sport",
      title: "🏊 競泳・サーフ・機能水着",
      note: "競技、波、水中活動、浜辺スポーツへ対応する40着。",
      selection: "single",
      categories: [
        makeCategory({ key:"competition", title:"競泳レーシング", note:"抵抗を抑えた競技型。", baseJa:"競泳レーシング水着", baseEn:"competition racing swimsuit, streamlined bonded seams, secure racerback construction, hydrodynamic technical swim fabric", variants:technicalFinishes }),
        makeCategory({ key:"surf-rashguard", title:"サーフ・ラッシュガード", note:"日差しと擦れを防ぐ上下セット。", baseJa:"サーフラッシュセット", baseEn:"surf rash-guard swim set, long-sleeve fitted rash top, secured board shorts, flatlock seams, flexible quick-dry fabric", variants:technicalFinishes }),
        makeCategory({ key:"dive-shorty", title:"ダイブ・ショーティー", note:"短丈ウェットスーツ系の機能服。", baseJa:"ダイブショーティースーツ", baseEn:"shorty dive swim suit, front-sealed technical zip, flexible neoprene-like swim panels, reinforced flat seams, movement-ready cut", variants:technicalFinishes }),
        makeCategory({ key:"beach-sports", title:"ビーチスポーツ", note:"走る・投げる・漕ぐ動作を邪魔しない。", baseJa:"ビーチスポーツ水着", baseEn:"beach-sports swim uniform, supportive swim top, fitted quick-dry shorts, secure broad straps, flexible athletic seam mapping", variants:technicalFinishes })
      ]
    },
    {
      key: "unisex",
      title: "🩳 メンズ・ユニセックス",
      note: "着用者の性別をpromptで固定しない、汎用的な40着。",
      selection: "single",
      categories: [
        makeCategory({ key:"board-shorts", title:"ボードショーツ", note:"膝上丈を中心にしたサーフ系。", baseJa:"ボードショーツ", baseEn:"unisex board-short swimwear, knee-above length, secured drawcord waist, quick-dry technical fabric, practical side pocket", variants:technicalFinishes }),
        makeCategory({ key:"swim-trunks", title:"スイムトランクス", note:"シンプルな中短丈の水着。", baseJa:"スイムトランクス", baseEn:"unisex swim trunks, mid-short length, elastic drawcord waist, mesh-lined quick-dry construction, clean side seams", variants:technicalFinishes }),
        makeCategory({ key:"unisex-rash-set", title:"ユニセックス・ラッシュセット", note:"長袖上衣と短パンの汎用セット。", baseJa:"ユニセックスラッシュセット", baseEn:"unisex rash-guard swim set, long-sleeve fitted swim top, matching mid-thigh swim shorts, flatlock seams, secure coverage", variants:technicalFinishes }),
        makeCategory({ key:"aquatic-utility", title:"アクアユーティリティ", note:"水辺作業や長時間活動向けの多層構成。", baseJa:"アクアユーティリティ水着", baseEn:"unisex aquatic utility swimwear, sleeveless technical swim top, flexible swim leggings, modular belt loops, sealed utility pocket, quick-dry panels", variants:technicalFinishes })
      ]
    },
    {
      key: "heritage",
      title: "🌴 レトロ・リゾート・文化モチーフ",
      note: "年代感と各地の模様を、着用者を固定せず水着へ翻案した30着。",
      selection: "single",
      categories: [
        makeCategory({ key:"retro-fifties", title:"1950sクラシック", note:"高めの腰線と整った縁取り。", baseJa:"50年代風クラシック水着", baseEn:"1950s-inspired swimwear, structured halter swim top, high-waisted lined bottoms, modest gathered side panels", variants:heritageFinishes }),
        makeCategory({ key:"retro-surf", title:"1970sサーフ", note:"スポーティーな色面とレトロな線。", baseJa:"70年代風サーフ水着", baseEn:"1970s-inspired surf swimwear, zip-neck swim top, short board bottoms, curved retro color panels, secure athletic construction", variants:heritageFinishes }),
        makeCategory({ key:"world-resort", title:"世界模様リゾート", note:"伝統模様を抽象化し、敬意ある装飾として使う。", baseJa:"世界模様リゾート水着", baseEn:"resort swimwear with respectfully abstracted heritage-inspired textile motifs, lined one-piece construction, clean solid-color borders", variants:heritageFinishes })
      ]
    },
    {
      key: "fantasy",
      title: "🫧 ファンタジー・SF・特殊水着",
      note: "海の幻想、生物、元素、未来技術を衣装構造へ落とした40着。",
      selection: "single",
      categories: [
        makeCategory({ key:"mythic-tide", title:"神話潮流", note:"真珠・珊瑚・潮汐術式の幻想水着。", baseJa:"神話潮流水着", baseEn:"mythic ocean-inspired swimsuit, layered opaque swim panels, ceremonial aquatic trim, secure wearable construction", variants:mythicFinishes }),
        makeCategory({ key:"elemental-aqua", title:"元素アクア", note:"自然元素を泳げる衣装として翻案する。", baseJa:"元素アクア水着", baseEn:"elemental-themed swimsuit, flexible opaque swim fabric, secured decorative edging, clearly wearable aquatic garment", variants:elementalFinishes }),
        makeCategory({ key:"future-aquatic", title:"未来アクアテック", note:"水圧・信号・可変構造を持つSF水着。", baseJa:"未来アクアテック水着", baseEn:"futuristic aquatic swimsuit, sealed technical swim fabric, modular panel construction, waterproof interface detailing", variants:sciFiFinishes }),
        makeCategory({ key:"marine-creature", title:"海洋生物モチーフ", note:"生物の色・流線・鰭を衣装意匠へ変換する。", baseJa:"海洋生物モチーフ水着", baseEn:"marine-creature inspired swimsuit, opaque lined swimwear base, motif-shaped garment panels, practical secured edges", variants:marineMotifs })
      ]
    },
    {
      key: "modifiers",
      title: "🧪 水着専用カスタム",
      note: "一般の衣装改造工房と重ねず、水着固有の線・素材・機能だけを40部品で後付け。",
      selection: "multi",
      categories: [
        makePartCategory("strap-neckline", "ストラップ・ネックライン", "水着の肩・首・胸元の支持構造を変える。", [
          ["cross-back-straps","クロスバックストラップ","cross-back swimsuit straps, secured adjustable sliders"],
          ["wide-support-straps","幅広サポートストラップ","wide supportive swimsuit shoulder straps, reinforced attachment points"],
          ["halter-neck-band","ホルターネックバンド","secured halter-neck swimsuit band, flat comfortable fastening"],
          ["one-shoulder-strap","ワンショルダーストラップ","single-shoulder swimsuit strap, reinforced asymmetric support"],
          ["removable-neck-strap","着脱式ネックストラップ","removable swimsuit neck strap with visible secure anchor loops"],
          ["double-thin-straps","二重細ストラップ","paired thin swimsuit straps, separated parallel routing"],
          ["sport-racerback","競技レーサーバック","racerback swimsuit strap structure, streamlined central join"],
          ["square-neck-swim","スクエアネック水着線","square swimsuit neckline, clean bound corners"],
          ["high-neck-swim","ハイネック水着線","high-neck swimsuit panel, short sealed collar edge"],
          ["scalloped-neckline","波型ネックライン","wave-scalloped swimsuit neckline, compact stable edging"]
        ]),
        makePartCategory("cut-coverage", "カット・カバー範囲", "泳ぎやすさを保ったまま水着の面積と線を調整する。", [
          ["high-waist-bottom","ハイウエストボトム化","high-waisted swimsuit bottom panel, clean supportive waistband"],
          ["boyleg-bottom","ボーイレッグ化","boyleg swimsuit bottom cut, short fitted leg panels"],
          ["swim-skirt-overlay","スイムスカート追加","short integrated swim skirt overlay over secure swim bottoms"],
          ["mid-rise-legline","標準ミッドライズ","medium-rise swimsuit leg line, balanced coverage"],
          ["athletic-high-leg","競技ハイレッグ","athletic high-cut swimsuit leg line, streamlined bound edges"],
          ["full-back-panel","フルバックパネル","full-coverage swimsuit back panel, clean central seam"],
          ["keyhole-back","キーホールバック","small keyhole opening in the swimsuit back, reinforced bound edge"],
          ["side-panel-bridge","サイドブリッジ接続","structured side bridge panels connecting swimsuit sections"],
          ["waist-cutout-pair","左右ウエストカット","paired controlled waist cutouts on a lined monokini, reinforced borders"],
          ["longline-top","ロングライン水着トップ","longline swimsuit top extending to the upper waist, supportive lower band"]
        ]),
        makePartCategory("swim-material", "水着素材・表面", "水、塩、塩素、伸縮を意識した専用素材へ置き換える。", [
          ["matte-chlorine-resistant","耐塩素マット生地","matte chlorine-resistant swimsuit fabric, dense smooth stretch weave"],
          ["ribbed-swim-knit","リブスイムニット","ribbed swimsuit knit, fine vertical texture, lined aquatic construction"],
          ["recycled-ocean-fiber","再生海洋繊維","recycled ocean-fiber swimsuit textile, smooth compact weave"],
          ["neoprene-panel","薄手ネオプレンパネル","thin neoprene-like swimsuit panels, flexible sealed edges"],
          ["hydrophobic-satin","撥水サテン調","hydrophobic satin-look swimsuit fabric, controlled soft sheen"],
          ["seersucker-swim","サッカー織り水着地","seersucker-textured swimsuit fabric, fine puckered aquatic weave"],
          ["mesh-vent-panel","裏付きメッシュ通気部","lined swimsuit mesh ventilation panels, opaque backing, clean borders"],
          ["metallic-swim-film","薄膜メタリック水着地","thin metallic-finish swimsuit textile, flexible low-profile reflections"],
          ["iridescent-scale-knit","偏光鱗ニット","iridescent scale-knit swimsuit fabric, small controlled color shifts"],
          ["thermal-swim-lining","保温スイム裏地","thermal swimsuit lining, soft insulated inner layer, flexible outer shell"]
        ]),
        makePartCategory("aquatic-function", "水辺機能・着こなし", "泳ぐ、潜る、移動する時だけ必要な機能を足す。", [
          ["flatlock-seams","フラットロック縫製","flatlock swimsuit seams, low-friction interior construction"],
          ["sealed-pocket","防水ミニポケット","small sealed swimsuit utility pocket with flush waterproof closure"],
          ["boardshort-drawcord","固定ドローコード","secured internal board-short drawcord, low-profile knot channel"],
          ["zip-guard","ジップガード","soft swimsuit zip guard, protected pull tab, smooth inner facing"],
          ["anti-slip-hem","滑り止めヘム","gentle anti-slip swimsuit hem band, flat concealed grip surface"],
          ["reef-shoe-loop","リーフシューズ連結ループ","small swimsuit-to-reef-shoe retention loops, detachable safety cords"],
          ["quick-drain-panels","排水パネル","quick-drain swimsuit panels, discreet perforated channels with lining"],
          ["uv-rash-sleeves","着脱UVラッシュ袖","detachable UV rash-guard sleeves, secured swimsuit-compatible anchors"],
          ["towel-wrap-ready","タオルラップ留め","compact swimsuit waist tabs designed to secure a towel wrap"],
          ["convertible-sarong-tabs","サロン連結タブ","discreet swimsuit side tabs for attaching a removable sarong"]
        ])
      ]
    },
    {
      key: "coverup",
      title: "🧺 カバーアップ完成コーデ",
      note: "水着を隠さず活かす羽織と足元まで揃えた20セット。構成を常時表示します。",
      selection: "single",
      categories: [
        makeCategory({ key:"light-coverup", title:"軽やか羽織", note:"シャツ、パレオ、短丈カフタン中心。", kind:"set", baseJa:"軽やかカバーアップコーデ", baseEn:"complete swim cover-up coordinate, lined one-piece swimsuit, open airy beach shirt, tied short pareo, flat waterproof sandals, woven mini bag", componentsJa:"ワンピース水着／開襟ビーチシャツ／短丈パレオ／防水サンダル／編みミニバッグ", variants:coastalPalettes }),
        makeCategory({ key:"resort-layer", title:"上質リゾートレイヤー", note:"ロングカフタンやパンツを重ねる。", kind:"set", baseJa:"上質リゾートレイヤーコーデ", baseEn:"complete resort swim layer coordinate, structured swimsuit, long side-slit caftan, lightweight wide resort trousers, pool slides, compact sun visor", componentsJa:"構築水着／ロングカフタン／軽量ワイドパンツ／プールサンダル／サンバイザー", variants:coastalPalettes })
      ]
    }
  ];

  function allItems(){
    return groups.flatMap(function(group){
      return group.categories.flatMap(function(category){
        return category.items.map(function(item){
          return Object.assign({ group:group.key, category:category.key, kind:category.kind || group.kind || "item" }, item);
        });
      });
    });
  }

  window.SHIMA_AQUA_WARDROBE_V1 = {
    version: "1.0.0",
    expectedCount: 360,
    expectedCategories: 36,
    groups: groups,
    allItems: allItems
  };
})();
