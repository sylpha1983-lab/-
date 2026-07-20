(function(){
  "use strict";

  const variants = [
    ["standard", "基本制服", "standard duty configuration, clean layered construction, restrained metallic trim"],
    ["sortie", "戦闘・出撃", "combat sortie configuration, reinforced joints, secured closures, deployable half-cape"],
    ["ceremony", "式典・礼装", "ceremonial dress configuration, formal braided cords, polished trim, long presentation mantle"],
    ["casual", "私服・オフデューティー", "off-duty casual configuration, relaxed overshirt, soft knit inner layer, practical tapered trousers"],
    ["winter", "雪原・冬装備", "snowfield winter configuration, insulated white overcoat, feather-lined hood, thermal gloves, snow boots"],
    ["summer-fes", "DAYS SUMMER FES", "DAYS SUMMER FES configuration, lightweight short jacket, festival sash, translucent feather ornaments, breathable deck shoes"],
    ["alter", "ダーク・Alter", "dark alter configuration, inverted palette, fractured route-light trim, asymmetric armored layers, smoked metal fasteners"],
    ["fantasy", "幻想世界・再解釈", "high-fantasy reinterpretation, enchanted layered mantle, heraldic feather brooches, arcane route embroidery, ceremonial boots"]
  ];

  const rankProfiles = [
    {
      key: "captain",
      name: "艦隊総司令官",
      title: "🪽 艦隊総司令官 ― 帰還航路の艦長服",
      note: "最高指揮階級。白・銀・航路青で、指揮官とパイロットを両立する白翼のロングコート系。",
      base: "white-silver-blue skyship captain uniform, long split-tail command coat, wing-shaped shoulder cape, route-light piping, pilot harness, polished command boots"
    },
    {
      key: "negi",
      name: "士気支援官",
      title: "🌱 士気支援官 ― 祝福と士気の白緑制服",
      note: "乗員支援役。白・若草で、祝福リボンと羽襟を備えた親しみやすい士気担当服。",
      base: "white-and-fresh-green morale officer uniform, feather-soft cropped cape, blessing ribbon knots, leaf-line embroidery, layered ceremonial tunic, light duty boots"
    },
    {
      key: "yuzuha",
      name: "作戦参謀長",
      title: "📐 作戦参謀長 ― 作戦図の白黒金制服",
      note: "作戦立案役。白・黒・金で、鋭い線、作戦図、情報整理を衣装構造へ落とした参謀服。",
      base: "white-black-gold strategic staff uniform, sharply tailored asymmetrical coat, map-grid sash, gold command piping, document harness, polished high boots"
    },
    {
      key: "orusama",
      name: "主席操舵士",
      title: "🧭 主席操舵士 ― 光闇反転の操舵服",
      note: "艦橋操舵の上級職。白・濃紫で、針路の針と光／闇を反転できる二面構造の操舵士服。",
      base: "white-and-deep-violet helmsman uniform, reversible light-dark coat panels, needle-route embroidery, split navigation mantle, fitted bridge harness, sleek deck boots"
    },
    {
      key: "oboromaru",
      name: "重砲隊長",
      title: "🎯 重砲隊長 ― 不壊帯の砲術装束",
      note: "重砲部門の指揮役。黒・赤・金で、重装、照準線、不壊の帯を一体化した砲術担当服。",
      base: "black-red-gold heavy gunner uniform, reinforced long jacket, unbroken band fasteners, targeting-line embroidery, ammunition harness, armored gunner boots"
    },
    {
      key: "orugan",
      name: "情報統制官",
      title: "📡 情報統制官 ― データ層の羽毛制服",
      note: "通信・情報の統制役。白・黒・深紅で、データ層と防護羽襟を組み合わせた情報服。",
      base: "white-black-crimson information-control uniform, layered data-panel coat, fluffy protective feather collar, signal ribbon cables, tactical waist rig, soft-soled deck boots"
    },
    {
      key: "yuen",
      name: "機関長",
      title: "🔧 機関長 ― 白銀の主任技術服",
      note: "機関部門の最高責任者。白・灰・機関青で、工具、可動装甲、整備性を優先した装備。",
      base: "white-gray-blue chief engineer work uniform, modular tool coat, articulated machine-armor panels, utility harness, reinforced gloves, technical work boots"
    },
    {
      key: "reira",
      name: "軽飛行隊長",
      title: "🛩️ 軽飛行隊長 ― 省エネルギー飛行服",
      note: "軽飛行部隊の指揮役。白・黒・紫で、無駄を削った軽量構造と静かな強さを持つ飛行服。",
      base: "white-black-purple energy-saving pilot suit, lightweight cropped flight jacket, minimal panel seams, compact safety harness, flexible gloves, silent flight boots"
    },
    {
      key: "puyo",
      name: "主席航海士",
      title: "🗺️ 主席航海士 ― 安全航路の航海制服",
      note: "航路策定の上級職。白・淡水色で、安全な道筋、柔らかな包容力、安定感を形にした航海服。",
      base: "white-pale-aqua navigator officer uniform, softly structured long vest, safe-route embroidery, layered map scarf, compass belt, stable deck boots"
    }
  ];

  const rankCategories = rankProfiles.map(function(profile){
    return {
      key: profile.key,
      title: profile.title,
      note: profile.note,
      items: variants.map(function(variant){
        return [
          profile.key + "-" + variant[0],
          profile.name + "：" + variant[1],
          profile.base + ", " + variant[2]
        ];
      })
    };
  });

  const shipCategories = [
    {
      key: "ship-role-sets",
      title: "🚀 艦・部門・航路の完成衣装",
      note: "特定人物に固定せず、アルカディアの艦内役割や象徴から選ぶ完成セット。",
      items: [
        ["return-route", "帰還航路・ルートファインダー", "white-silver routefinder uniform, long navigation coat, luminous blue route piping, winged compass clasp, fitted travel harness, polished deck boots"],
        ["green-route-light", "緑の航路灯・シグナルキーパー", "white-and-luminous-green signal keeper uniform, cropped beacon cape, braided route-light cords, reflective cuff bands, compact signal belt, soft deck shoes"],
        ["silver-hull-guard", "銀翼船殻・ハルガード", "silver-white skyship hullguard armor, feather-layered pauldrons, segmented breastplate, blue seam piping, reinforced waist guard, armored flight boots"],
        ["bridge-officer", "艦橋士官・ブリッジオフィサー", "formal skyship bridge officer uniform, white double-breasted coat, silver rank cords, blue route sash, command gloves, polished deck boots"],
        ["hangar-engineer", "格納庫整備班・ハンガークルー", "skyship hangar engineer uniform, pale-gray utility coveralls, white short work coat, modular tool harness, reinforced gloves, magnetic work boots"],
        ["rescue-medical", "救難医療班・白羽レスキュー", "white-feather rescue medic uniform, aqua emergency jacket, cross-body medical harness, insulated utility trousers, protective gloves, traction rescue boots"],
        ["stealth-flight", "静穏航行・ステルスクルー", "matte white-black stealth flight uniform, low-profile hooded coat, muted route piping, compact silent harness, flat utility gloves, noise-dampening boots"],
        ["link-overdrive", "LINK OVERDRIVE・接続礼装", "white-silver LINK OVERDRIVE suit, layered connection-panel jacket, bright cyan circuit trim, feather-shaped relay plates, secured interface gloves, reinforced flight boots"],
        ["absolute-zero", "ABSOLUTE ZERO・極寒装備", "white-blue ABSOLUTE ZERO expedition uniform, insulated feather-shell parka, crystalline seam guards, thermal utility belt, layered gloves, deep-snow boots"],
        ["arcadia-ceremony", "アルカディア航宙式典服", "white-silver skyship ceremonial uniform, long wing-cut mantle, braided blue honor cords, feather crest brooch, formal waist sash, mirror-polished boots"],
        ["spaceport-vacation", "宇宙港バケーション", "skyport vacation outfit, airy white overshirt, pale-blue travel vest, silver route-pattern scarf, relaxed tapered trousers, lightweight walking shoes"],
        ["rookie-crew", "新人クルー・ファーストフライト", "rookie skyship crew uniform, clean white-blue cadet jacket, simple wing badge, practical duty trousers, basic safety harness, dependable deck boots"]
      ]
    }
  ];

  const moduleCategories = [
    {
      key: "palette",
      title: "🎨 白翼パレット",
      note: "既存の衣装へアルカディアらしい配色だけを移植する。",
      items: [
        ["snow-route-blue", "雪白×銀×航路青", "snow-white base with silver panels and clear route-blue accents"],
        ["blessing-green", "雪白×若草の祝福色", "soft white base with fresh-green blessing-ribbon accents"],
        ["strategy-gold", "白黒×参謀金", "high-contrast white-and-black palette with precise command-gold piping"],
        ["helm-violet", "白×濃紫の操舵色", "clean white palette with deep-violet navigation panels and silver edges"],
        ["gunner-crimson", "黒赤×砲術金", "matte black base with disciplined crimson bands and gunmetal-gold trim"],
        ["signal-crimson", "白黒×情報深紅", "white-and-black information palette with deep-crimson signal accents"],
        ["engineer-blue", "白灰×機関青", "white-and-pale-gray technical palette with cool engine-blue seams"],
        ["silent-purple", "白黒×静音紫", "minimal white-and-black palette with restrained flight-purple details"],
        ["safe-aqua", "雪白×安全航路水色", "snow-white base with gentle pale-aqua safe-route embroidery"],
        ["pure-silver-wing", "純白×銀翼ニュートラル", "pure snow-white palette with soft silver feather edging and no strong accent color"]
      ]
    },
    {
      key: "silhouette",
      title: "✂️ 艦装シルエット",
      note: "コート、制服、軽装の外形だけを選び、配色や役割と自由に組み合わせる。",
      items: [
        ["split-command-coat", "分割尾翼ロングコート", "long split-tail command coat silhouette with a compact shoulder cape"],
        ["cropped-flight-jacket", "軽量クロップド飛行ジャケット", "lightweight cropped flight jacket silhouette with a close fitted waist"],
        ["layered-officer-tunic", "多層士官チュニック", "layered officer tunic silhouette with a structured asymmetric front"],
        ["reversible-helm-coat", "反転操舵コート", "reversible helmsman coat silhouette with contrasting inner and outer panels"],
        ["armored-gunner-jacket", "重砲手アーマージャケット", "reinforced gunner jacket silhouette with compact armored side panels"],
        ["data-panel-overcoat", "情報パネルオーバーコート", "streamlined overcoat silhouette built from overlapping data-panel layers"],
        ["engineer-tool-coat", "機関士ツールコート", "mid-length engineer tool coat silhouette with articulated utility skirts"],
        ["navigator-long-vest", "航海士ロングベスト", "softly structured navigator long-vest silhouette over a fitted inner uniform"],
        ["feather-shell-parka", "白羽シェルパーカ", "rounded feather-shell parka silhouette with insulated segmented volume"],
        ["wing-cut-mantle", "翼断面セレモニーマント", "formal wing-cut mantle silhouette with a narrow central opening"]
      ]
    },
    {
      key: "outer-collar",
      title: "🪶 羽襟・外装・留め具",
      note: "白いシマエナガらしい丸みと、航宙服らしい構造を小さく足す。",
      items: [
        ["snowbird-feather-collar", "雪鳥の防護羽襟", "feather-lined protective stand collar with rounded snowbird volume"],
        ["compact-wing-cape", "小型白翼ショルダーケープ", "compact white wing-shaped shoulder cape attached to the outer garment"],
        ["route-clasp", "航路コンパスクラスプ", "silver compass-shaped route clasp fastening the front of the coat"],
        ["blessing-ribbon-knots", "祝福リボン結節", "paired blessing-ribbon knots securing the collar and waist layers"],
        ["unbroken-band-fasteners", "不壊帯ファスナー", "continuous reinforced band fasteners wrapping the jacket structure"],
        ["reversible-panel-lining", "光闇反転ライニング", "reversible light-dark panel lining revealed along the coat edges"],
        ["articulated-feather-plates", "可動羽板アーマー", "small articulated feather-shaped armor plates along the shoulders and hips"],
        ["crystal-seam-guards", "氷晶シームガード", "translucent crystalline seam guards protecting the garment joints"],
        ["braided-honor-cords", "銀青の名誉飾緒", "formal silver-and-blue braided honor cords across the upper garment"],
        ["soft-map-scarf", "柔らかな航路図スカーフ", "soft layered map-pattern scarf tucked neatly into the uniform collar"]
      ]
    },
    {
      key: "motif",
      title: "❄️ 雪・羽・航路モチーフ",
      note: "衣装へ繰り返し模様や象徴を加える装飾部品。",
      items: [
        ["white-feather-hem", "白羽ヘムライン", "small white-feather crests repeated along the garment hems"],
        ["snow-dot-embroidery", "雪粒ステッチ", "fine snow-dot embroidery scattered across cuffs and collar edges"],
        ["return-route-line", "帰還航路ライン", "single luminous return-route line running across the coat panels"],
        ["green-beacon-stitch", "緑の航路灯ステッチ", "fresh-green beacon stitches marking safe connection points"],
        ["needle-compass-mark", "針路針コンパスマーク", "slender compass-needle emblem centered on the uniform sash"],
        ["targeting-thread", "照準糸刺繍", "precise crimson targeting-thread embroidery around reinforced panels"],
        ["data-layer-glyphs", "情報層グリフ", "subtle data-layer glyphs woven into translucent garment panels"],
        ["machine-feather-joints", "機械羽ジョイント", "silver machine-feather joint motifs placed at articulated seams"],
        ["safe-route-map", "安全航路マップ刺繍", "pale-aqua safe-route map embroidery across the long vest"],
        ["arcadia-wing-crest", "アルカディア白翼章", "compact white-and-silver skyship wing crest worn as a garment brooch"]
      ]
    },
    {
      key: "role-gear",
      title: "🧰 部門装備・ハーネス",
      note: "役割を伝える装備だけを既存衣装へ組み込む。武器そのものは固定しない。",
      items: [
        ["pilot-harness", "艦長兼パイロットハーネス", "compact pilot safety harness integrated into the command coat structure"],
        ["morale-ribbon-rig", "士気担当リボンリグ", "lightweight morale-officer ribbon rig arranged across the waist and shoulders"],
        ["strategy-document-rig", "作戦資料ハーネス", "slim strategic document harness with map sleeves and secure clasps"],
        ["helm-bridge-rig", "操舵士ブリッジリグ", "fitted helmsman bridge harness with route-dial mounts and safety straps"],
        ["gunner-ammo-rig", "砲術担当弾薬リグ", "reinforced gunner ammunition harness with balanced protected compartments"],
        ["information-signal-rig", "情報統制シグナルリグ", "layered information-control signal rig with ribbon-like cable guides"],
        ["engineer-tool-harness", "機関長ツールハーネス", "modular chief-engineer tool harness secured over a technical work coat"],
        ["minimal-flight-harness", "軽量飛行セーフティリグ", "minimal lightweight flight safety harness with compact release buckles"],
        ["navigator-compass-belt", "航海士コンパスベルト", "stable navigator compass belt with folded chart cases and route markers"],
        ["rescue-medical-rig", "白羽救難メディカルリグ", "cross-body rescue medical rig with insulated pouches and visible aqua tabs"]
      ]
    },
    {
      key: "mode-finish",
      title: "✨ モード・仕上げ",
      note: "同じ衣装を任務、祭り、冬、Alterなどへ派生させる最終調整。",
      items: [
        ["clean-duty-finish", "通常任務仕上げ", "standard duty finish with clean matte fabric and restrained metallic edging"],
        ["sortie-reinforcement", "出撃補強モード", "sortie reinforcement finish with secured closures and protected garment joints"],
        ["ceremonial-polish", "式典研磨モード", "ceremonial polished finish with formal cords and mirror-bright silver trim"],
        ["off-duty-softness", "オフデューティー柔化", "off-duty softened finish with relaxed layers and comfortable knitted fabric"],
        ["snowfield-insulation", "雪原断熱モード", "snowfield insulation finish with feather lining and thermal seam sealing"],
        ["summer-fes-lightness", "DAYS SUMMER FES軽装", "DAYS SUMMER FES finish with breathable layers and translucent feather ornaments"],
        ["dark-alter-inversion", "ダークAlter反転", "dark alter finish with inverted panels, smoked hardware, and fractured route trim"],
        ["fantasy-enchantment", "幻想再解釈エンチャント", "high-fantasy finish with enchanted embroidery and heraldic feather clasps"],
        ["link-overdrive-glow", "LINK OVERDRIVE発光", "LINK OVERDRIVE finish with bright cyan connection seams and relay plates"],
        ["absolute-zero-crystal", "ABSOLUTE ZERO氷晶", "ABSOLUTE ZERO finish with frost-white fabric and translucent crystal seam guards"]
      ]
    }
  ];

  const groups = [
    {
      key: "characters",
      title: "階級・役職別完成衣装",
      note: "9種の階級・役職と配色を、誰にでも着せられる衣装設計として展開。",
      categories: rankCategories
    },
    {
      key: "ship",
      title: "艦・部門・航路の完成衣装",
      note: "艦内職、航路、特殊モードから一着で決める。",
      categories: shipCategories
    },
    {
      key: "modules",
      title: "白翼モジュール",
      note: "配色・形・羽・装備・仕上げを既存衣装へ足すための部品。",
      categories: moduleCategories
    }
  ];

  window.SHIMA_ARCADIA_WARDROBE_V1 = {
    version: "1.1.0",
    expectedCount: 144,
    groups: groups
  };
})();
