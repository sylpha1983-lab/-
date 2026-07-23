(function(){
  "use strict";

  function variant(slug, ja, en){ return [slug, ja, en]; }
  function base(key, title, en, note, description){ return [key, title, en, note, description]; }

  function makeCategory(row, variants, defaults){
    const settings = defaults || {};
    return {
      key: row[0],
      title: row[1],
      note: row[3] || settings.note || "",
      selection: settings.selection || "multi",
      kind: settings.kind || "part",
      items: variants.map(function(v){
        return {
          slug: v[0],
          ja: v[1] + "・" + row[1],
          en: row[2] + ", " + v[2],
          description: (row[4] || row[3] || settings.description || "後付けディテール") + "／方向性：" + v[1]
        };
      })
    };
  }

  function group(key, title, note, rows, variants, options){
    const settings = options || {};
    return {
      key: key,
      title: title,
      note: note,
      selection: settings.selection || "multi",
      kind: settings.kind || "part",
      categories: rows.map(function(row){ return makeCategory(row, variants, settings); })
    };
  }

  function buildCollection(def){
    const result = Object.assign({}, def);
    result.expectedCategories = result.groups.reduce(function(sum, g){ return sum + g.categories.length; }, 0);
    result.expectedCount = result.groups.reduce(function(sum, g){
      return sum + g.categories.reduce(function(inner, c){ return inner + c.items.length; }, 0);
    }, 0);
    result.allItems = function(){
      const rows = [];
      result.groups.forEach(function(g){
        g.categories.forEach(function(c){
          c.items.forEach(function(item){
            rows.push(Object.assign({
              collection: result.key,
              group: g.key,
              category: c.key,
              kind: c.kind,
              selection: c.selection,
              adultOnly: !!result.adultOnly
            }, item));
          });
        });
      });
      return rows;
    };
    return result;
  }

  const QUICK_VARIANTS = [
    variant("clean", "端正", "cleanly coordinated details, restrained visual hierarchy"),
    variant("soft", "柔和", "softly coordinated details, gentle fabric transitions"),
    variant("elegant", "優雅", "elegant coordinated details, refined ornamental balance"),
    variant("street", "都会", "modern street-fashion coordination, practical layered accents"),
    variant("gothic", "ゴシック", "gothic coordination, dark ornamental accents, controlled contrast"),
    variant("fantasy", "幻想", "fantasy coordination, delicate symbolic ornaments"),
    variant("cyber", "サイバー", "cyber coordination, precise luminous hardware accents"),
    variant("winter", "雪原", "winter coordination, pale frost-inspired detailing"),
    variant("night", "夜景", "night-scene coordination, dark reflective accents"),
    variant("jewel", "宝石", "gem-inspired coordination, small faceted decorative highlights")
  ];

  const LEG_VARIANTS = [
    variant("black-matte", "黒マット", "matte black textile, low-reflection finish"),
    variant("ivory", "象牙白", "ivory textile, fine tonal edging"),
    variant("sheer", "薄手シアー", "sheer fabric, controlled transparency, reinforced seams"),
    variant("satin", "サテン艶", "satin finish, smooth narrow highlights"),
    variant("lace", "レース縁", "lace-edged construction, delicate repeating trim"),
    variant("ribbed", "リブ編み", "fine ribbed knit texture, even vertical structure"),
    variant("patterned", "小紋柄", "small repeating pattern, clearly separated motif scale"),
    variant("gradient", "淡色グラデ", "subtle tonal gradient, controlled color transition"),
    variant("metallic", "金属光沢", "soft metallic textile sheen, restrained reflective threads"),
    variant("frost", "氷晶意匠", "pale frost-crystal motifs, cool reflective accents")
  ];

  const DETAIL_VARIANTS = [
    variant("minimal", "ミニマル", "minimal detailing, uncluttered focal hierarchy"),
    variant("delicate", "繊細", "delicate fine-scale detailing, precise small accents"),
    variant("bold", "大胆", "bold readable detailing, strong controlled silhouette"),
    variant("geometric", "幾何学", "geometric detailing, repeated clean line motifs"),
    variant("botanical", "植物意匠", "botanical detailing, small leaf and vine motifs"),
    variant("crystal", "結晶意匠", "faceted crystal-like detailing, restrained reflective points"),
    variant("gothic", "ゴシック", "gothic detailing, pointed arches and dark trim"),
    variant("mechanical", "機械意匠", "mechanical detailing, articulated precision hardware"),
    variant("arctic", "雪原意匠", "arctic detailing, pale feather and frost-line motifs"),
    variant("luminous", "微光意匠", "subtle luminous detailing, controlled edge glow")
  ];

  const MATERIAL_VARIANTS = [
    variant("leather", "レザー", "supple leather material, visible fine grain, controlled sheen"),
    variant("latex", "ラテックス", "high-gloss latex material, smooth continuous reflections"),
    variant("satin", "サテン", "luminous satin material, soft flowing highlights"),
    variant("velvet", "ベルベット", "deep velvet material, directional low-gloss pile"),
    variant("lace", "レース", "openwork lace material, fine repeated woven motifs"),
    variant("sheer", "シアー", "sheer layered textile, controlled transparency, clear finished edges"),
    variant("wet-look", "濡れ光沢", "wet-look coated textile, narrow liquid-like specular highlights"),
    variant("metallic", "メタリック", "metallic woven material, restrained polished reflections"),
    variant("translucent", "半透明", "translucent structured material, softly diffused inner layers"),
    variant("knit", "編み地", "fine knit material, visible loop structure, soft elastic drape")
  ];

  const WEAR_VARIANTS = [
    variant("subtle", "控えめ", "subtle adjustment, original outfit structure clearly preserved"),
    variant("one-side", "片側だけ", "one-sided adjustment, deliberate asymmetrical balance"),
    variant("neat", "端正", "neatly controlled adjustment, clean folds and fastening points"),
    variant("relaxed", "ゆるめ", "relaxed adjustment, soft loosened folds"),
    variant("layered", "重ね着", "layer-aware adjustment, clearly separated garment layers"),
    variant("wind-shifted", "風ずれ", "light wind-shifted adjustment, anchored garment structure"),
    variant("active", "活動後", "light activity-related adjustment, practical displaced folds"),
    variant("formal", "礼装風", "formal styling adjustment, refined controlled drape"),
    variant("street", "ストリート風", "street-fashion adjustment, casual intentional imbalance"),
    variant("dramatic", "強調", "visibly emphasized adjustment, readable silhouette without garment removal")
  ];

  const STATE_VARIANTS = [
    variant("light", "軽度", "light localized state, restrained surface change"),
    variant("fresh", "直後", "freshly changed state, clear small environmental traces"),
    variant("even", "均一", "evenly distributed state, coherent surface response"),
    variant("partial", "部分的", "partial state concentrated around edges and outer layers"),
    variant("dynamic", "動きあり", "dynamic state with readable directional movement"),
    variant("calm", "静穏", "calm settled state, gentle material response"),
    variant("cool", "寒色寄り", "cool-toned environmental response, pale reflected accents"),
    variant("warm", "暖色寄り", "warm-toned environmental response, soft reflected accents"),
    variant("backlit", "逆光輪郭", "backlit state, controlled rim definition around the chosen detail"),
    variant("close-detail", "細部強調", "close-detail emphasis, visible material microstructure")
  ];

  const FRAME_VARIANTS = [
    variant("balanced", "均整", "balanced framing, complete readable focal area"),
    variant("close", "接写", "close framing, precise detail visibility without cropping ambiguity"),
    variant("medium", "中距離", "medium framing, focal detail shown with outfit context"),
    variant("profile", "側面", "profile-oriented framing, clear contour separation"),
    variant("three-quarter", "斜め三分", "three-quarter framing, layered depth around the focal detail"),
    variant("over-shoulder", "肩越し", "over-the-shoulder framing, readable rear and side details"),
    variant("low-view", "低め視点", "slightly low viewpoint, natural perspective, no extreme distortion"),
    variant("high-view", "高め視点", "slightly high viewpoint, natural perspective, coherent proportions"),
    variant("silhouette", "輪郭重視", "silhouette-led framing, clean negative space around the focal detail"),
    variant("reflection", "反射構図", "reflection-assisted framing, one coherent mirrored view")
  ];

  const ADULT_VARIANTS = [
    variant("black", "漆黒", "deep black palette, restrained glossy accents"),
    variant("ivory", "象牙白", "ivory palette, delicate tonal trim"),
    variant("crimson", "深紅", "crimson palette, dark coordinated hardware"),
    variant("violet", "紫紺", "deep violet palette, muted metallic accents"),
    variant("gold", "古金", "antique-gold accents, dark supporting textile"),
    variant("silver", "月銀", "silver-gray palette, cool polished hardware"),
    variant("sheer", "薄手", "controlled sheer layers, clearly finished borders"),
    variant("gloss", "高光沢", "high-gloss surface, clean continuous reflections"),
    variant("lace", "レース", "fine openwork lace accents, repeated ornamental weave"),
    variant("iridescent", "虹彩", "restrained iridescent surface, separated spectral highlights")
  ];

  const normal = buildCollection({
    key: "fetish", section: "attire", registerVersion: 502, idPrefix: "shima-v51-fetish", adultOnly: false,
    eyebrow: "FETISH DETAIL AKASHIC / 後付け意匠録",
    title: "💎 フェチ・ディテール特化コレクション",
    note: "完成セット100・後付け部品560。脚線、手元、素材、着こなし、視線誘導まで衣装を壊さず追加します。",
    guide: "迷った時は『おまかせ完成セット』を1つ。細かく作る時は、部位→素材→状態→見せ方の順に必要な軸だけ選びます。通常側は非露骨な表現だけです。",
    groups: [
      group("quick", "✨ おまかせフェチ完成セット", "名前の下に構成要素を表示する100セット。1つ選ぶだけで部位・衣装・素材・見せ方が揃います。", [
        base("stocking-line", "黒ストッキング脚線セット", "coordinated legwear detail set, thigh-high stockings, subtle garter accents, ankle-strap shoes, leg-line-aware standing presentation", "脚線と足元を一度に整える。", "構成：腿丈ストッキング／ガーター意匠／足首ストラップ靴／立ち姿"),
        base("wet-hair-nape", "濡れ髪とうなじセット", "coordinated nape detail set, damp grouped hair strands, visible nape line, off-shoulder outer layer, over-the-shoulder presentation", "髪とうなじを静かに見せる。", "構成：濡れ毛束／うなじ／肩落ち外衣／肩越し構図"),
        base("jewel-glove", "宝飾手袋・指先セット", "coordinated hand detail set, fitted gloves, layered rings, precise nail accents, elegant finger gesture", "手元を主役にする。", "構成：手袋／指輪／ネイル／指の仕草"),
        base("open-back-formal", "背中開き礼装セット", "coordinated open-back formalwear detail set, clean open-back frame, shoulder jewelry, long gloves, rear three-quarter presentation", "礼装の背面をまとめる。", "構成：背中開き礼装／肩飾り／長手袋／背面三分構図"),
        base("gloss-tactical", "光沢レザー戦闘装備セット", "coordinated glossy tactical detail set, fitted leather panels, utility straps, armored gloves, controlled reflective edging", "戦闘衣装へ艶と部品感を足す。", "構成：光沢レザー／実用ストラップ／装甲手袋／反射縁"),
        base("winter-legwear", "雪原レッグウェアセット", "coordinated winter legwear detail set, ribbed thigh-high socks, compact leg warmers, insulated ankle boots, pale frost trim", "冬の足元を一式化。", "構成：リブニーハイ／レッグウォーマー／防寒靴／氷晶縁"),
        base("glasses-tie", "眼鏡と緩めネクタイセット", "coordinated face-and-neck detail set, refined glasses, lightly loosened necktie, rolled sleeves, calm direct gaze", "知的な着崩しをまとめる。", "構成：眼鏡／緩めネクタイ／袖まくり／正面視線"),
        base("lace-veil", "レース手袋・ヴェールセット", "coordinated lace detail set, lace gloves, short face veil, fine wrist jewelry, delicate hand-to-face gesture", "レースの顔周りと手元。", "構成：レース手袋／短いヴェール／手首宝飾／顔へ添える手"),
        base("cyber-harness", "サイバーストラップセット", "coordinated cyber strap detail set, geometric fashion harness, luminous belt hardware, fingerless tech gloves, controlled edge lights", "機械的な線を衣装へ足す。", "構成：幾何ハーネス／発光金具／指抜き手袋／縁光"),
        base("crystal-nonhuman", "結晶人外ディテールセット", "coordinated nonhuman detail set, compact crystal horns, translucent ear ornaments, articulated tail accessory, faceted shoulder accents", "人外意匠を小物としてまとめる。", "構成：結晶角／耳飾り／可動尾飾り／肩結晶")
      ], QUICK_VARIANTS, { kind: "set", selection: "single" }),

      group("legwear", "🦵 脚線・レッグウェア", "丈、素材、縁、足元のつながりを選ぶ80部品。元の人物属性は固定しません。", [
        base("thigh-high", "腿丈ストッキング", "thigh-high stockings, clean upper bands, smooth leg-following fit", "腿丈の基本。"),
        base("pantyhose", "パンティストッキング", "full-length pantyhose, continuous even fabric tension, clean waistband transition", "脚全体を一枚で覆う。"),
        base("knee-socks", "膝丈ソックス", "knee-high socks, even top cuffs, tidy shaped ankles", "膝下の定番。"),
        base("ankle-socks", "足首ソックス", "ankle socks, compact cuffs, clearly shaped heel and toe sections", "靴と合わせやすい短丈。"),
        base("leg-warmers", "レッグウォーマー", "layered leg warmers, soft gathered folds, readable ankle opening", "足首へ量感を足す。"),
        base("garter-stockings", "ガーター付きストッキング", "garter-supported stockings, visible suspender clips, balanced strap spacing", "吊り構造を見せる。"),
        base("fitted-leggings", "密着レギンス", "fitted leggings, clean seam paths, controlled stretch around the legs", "活動向けの密着脚衣。"),
        base("laceup-legwear", "編み上げレッグウェア", "lace-up legwear, evenly spaced eyelets, controlled cross-lacing along the outer legs", "編み上げ線を脚へ足す。")
      ], LEG_VARIANTS, { kind: "part", selection: "multi" }),

      group("hands", "🧤 手元・指先", "手袋、指輪、爪、袖口、持ち方を整える60部品。", [
        base("gloved-hands", "フィット手袋", "fitted gloves, articulated finger seams, clean wrist closure", "手袋の基本形。"),
        base("fingerless", "指抜き手袋", "fingerless gloves, reinforced openings, visible articulated fingertips", "指先を残す手袋。"),
        base("ring-stack", "重ね指輪", "layered finger rings, varied band widths, clear separation between jewelry pieces", "指輪を重ねる。"),
        base("nail-detail", "ネイルディテール", "precise nail styling, consistent nail shape, small controlled accent details", "爪を細かく整える。"),
        base("sleeve-over-hand", "手を包む長袖", "extra-long sleeves covering part of the hands, soft cuff folds, visible fingertips", "袖余りを手元へ使う。"),
        base("precision-grip", "美しい保持手", "precise object-holding hand pose, readable fingers, natural grip pressure", "小物や武器を持つ手を整える。")
      ], DETAIL_VARIANTS, { kind: "part", selection: "multi" }),

      group("material", "✨ 素材・表面フェチ", "レザー、ラテックス、サテン、レース、半透明素材など80部品。素材だけを置換します。", [
        base("outer-panel", "外衣パネル素材", "outfit outer panels replaced with the selected material, original garment cut preserved", "外衣の主面を置換。"),
        base("accent-panel", "差し色パネル素材", "selected material used only for accent panels, clear boundary from the base fabric", "一部パネルだけ置換。"),
        base("trim", "縁取り素材", "selected material applied to garment edging and trim, narrow consistent borders", "縁だけ置換。"),
        base("sleeves", "袖素材", "sleeves replaced with the selected material, original sleeve shape preserved", "袖だけ置換。"),
        base("skirt", "スカート素材", "skirt panels replaced with the selected material, original hem and silhouette preserved", "下衣の素材を変更。"),
        base("bodice", "胴衣素材", "bodice panels replaced with the selected material, original seams and fastening preserved", "胴体部分だけ変更。"),
        base("leg-panel", "脚衣素材", "legwear panels rendered in the selected material, clean elastic transitions", "脚衣へ素材を適用。"),
        base("accessory-overlay", "小物オーバーレイ素材", "small outfit accessories overlaid with the selected material, controlled limited coverage", "小物だけ素材を合わせる。")
      ], MATERIAL_VARIANTS, { kind: "part", selection: "single" }),

      group("wear", "👔 着崩し・隙間", "袖、襟、結び目、上着を非露骨な範囲で調整する60部品。衣装自体は残します。", [
        base("rolled-sleeves", "袖まくり", "rolled-up sleeves, even compact cuff rolls, original sleeves retained", "袖だけを上げる。"),
        base("loose-tie", "ネクタイを緩める", "slightly loosened necktie, lowered knot, collar still neatly readable", "首元を軽く緩める。"),
        base("off-shoulder", "片肩落とし", "outer garment resting off one shoulder, inner layer retained, controlled drape", "上着を片肩だけ落とす。"),
        base("open-outerwear", "上着を開く", "outerwear worn open, front panels clearly separated, inner outfit fully retained", "外衣だけを開く。"),
        base("asymmetric-layer", "非対称レイヤー", "asymmetrically arranged outfit layers, one side tucked and one side loose", "左右差を作る。"),
        base("partial-tuck", "片側タックイン", "partial shirt tuck, one side secured at the waist, remaining fabric naturally draped", "裾を片側だけ入れる。")
      ], WEAR_VARIANTS, { kind: "part", selection: "multi" }),

      group("body-focus", "🪞 うなじ・肩・背中・鎖骨", "露骨にせず、衣装設計と光の当て方で部位を見せる40部品。", [
        base("nape", "うなじの見せ方", "visible nape framed by raised or side-swept hair, outfit collar kept clear", "髪と襟でうなじを整理。"),
        base("collarbone", "鎖骨の見せ方", "collarbone-framing neckline, restrained highlights along the collarbone line", "首元と光で鎖骨を見せる。"),
        base("shoulders", "肩線の見せ方", "shoulder-framing garment cut, clear shoulder contour, balanced fabric support", "肩の輪郭を整える。"),
        base("back", "背中の見せ方", "open-back garment framing, clean rear seam architecture, readable back silhouette", "背面の衣装構造を見せる。")
      ], DETAIL_VARIANTS, { kind: "part", selection: "multi" }),

      group("face", "👓 眼鏡・仮面・ヴェール", "顔を隠しすぎず、表情と両立させる40部品。", [
        base("eyewear", "眼鏡アレンジ", "face-framing eyewear, clear lenses, precise temple and bridge construction", "眼鏡で顔周りを整える。"),
        base("mask", "仮面アレンジ", "decorative partial face mask, eyes left clearly visible, clean attachment points", "表情を残す部分仮面。"),
        base("veil", "ヴェールアレンジ", "short face veil, controlled translucent layering, clear finished border", "短い透過布を顔前へ。"),
        base("face-jewelry", "顔周り宝飾", "small face-framing jewelry, balanced cheek and temple accents, unobstructed expression", "こめかみや頬へ小宝飾。")
      ], DETAIL_VARIANTS, { kind: "part", selection: "multi" }),

      group("straps", "🧷 ベルト・ストラップ・ハーネス", "衣装用の装飾・実用部品として加える40部品。拘束行為は含みません。", [
        base("waist-belts", "腰ベルト構成", "layered fashion waist belts, functional buckles, clearly separated belt paths", "腰回りへ線を足す。"),
        base("chest-straps", "胸部ストラップ構成", "decorative fashion chest straps over intact clothing, symmetric connector hardware", "衣装の上から装飾線を足す。"),
        base("shoulder-straps", "肩ストラップ構成", "decorative shoulder straps, clear anchor points, balanced tension over intact clothing", "肩と胴をつなぐ。"),
        base("thigh-straps", "太腿ストラップ構成", "fashion thigh straps over legwear, even spacing, small functional buckles", "脚衣へ装飾帯を足す。")
      ], MATERIAL_VARIANTS, { kind: "part", selection: "multi" }),

      group("state", "💧 雨・運動後・雪解け・風", "完成衣装を残したまま、環境による状態だけを足す40部品。", [
        base("rain", "雨濡れ状態", "rain-damp outfit state, small water droplets, darkened outer fabric, original outfit retained", "雨による濡れ。"),
        base("post-exercise", "運動後状態", "post-exercise outfit state, light perspiration, loosened outer folds, original outfit retained", "活動後の熱と乱れ。"),
        base("snowmelt", "雪解け状態", "melting snow on hair and shoulders, small cold droplets, original outfit retained", "雪が溶ける細部。"),
        base("wind", "風になびく状態", "wind-shifted outfit state, directional loose fabric, secure core fastenings, original outfit retained", "風向きだけを追加。")
      ], STATE_VARIANTS, { kind: "part", selection: "multi" }),

      group("framing", "📸 フェチを見せる構図", "脚、手、背面、顔周りへ視線を誘導する40部品。極端な歪みは避けます。", [
        base("legs", "脚線フォーカス", "composition emphasizing legwear and leg silhouette, complete joints, coherent lower-body perspective", "脚衣を中心に見せる。"),
        base("hands", "手元フォーカス", "composition emphasizing hands, gloves, rings and held objects, complete readable fingers", "手と指先を中心に見せる。"),
        base("rear", "背面フォーカス", "composition emphasizing rear garment design, nape, shoulders and back silhouette", "後ろ姿の衣装を見せる。"),
        base("face-accessory", "顔周りフォーカス", "composition emphasizing eyewear, mask, veil and face jewelry while preserving the expression", "顔小物と表情を両立。")
      ], FRAME_VARIANTS, { kind: "part", selection: "single" }),

      group("contrast", "🤝 身長差・体格差・硬軟対比", "複数人物や衣装の対比を整理する40部品。年齢・性別は固定しません。", [
        base("height", "身長差対比", "clear height contrast between adult characters, balanced shared framing, both full silhouettes readable", "身長差を構図へ反映。"),
        base("build", "体格差対比", "clear adult body-build contrast, proportionate anatomy, balanced visual importance", "体格差を自然に見せる。"),
        base("material", "硬質・柔素材対比", "contrasting rigid and soft outfit materials, clearly separated surface responses", "素材の硬軟を並べる。"),
        base("costume", "礼装・ストリート対比", "contrasting formal and street-fashion outfits, coordinated shared accent motif", "異なる服装系統を同居させる。")
      ], DETAIL_VARIANTS, { kind: "part", selection: "multi" }),

      group("nonhuman", "🪽 人外耳・角・尾・翼・機械関節", "人物本体を置き換えず、意匠部品として後付けする40部品。", [
        base("ears-tail", "耳・尾アクセント", "coordinated nonhuman ear and tail accents, clear attachment anatomy, outfit-compatible placement", "耳と尾を一式で足す。"),
        base("horn-halo", "角・環アクセント", "coordinated horn and halo accents, balanced head silhouette, clear separation from hair", "頭部シルエットを拡張。"),
        base("wings", "翼アクセント", "wearer-compatible wing accents, clear shoulder-blade attachment, folded readable silhouette", "背面へ翼を足す。"),
        base("mechanical-joints", "機械関節アクセント", "visible articulated mechanical joint accents, clean interfaces with clothing, precise segment separation", "関節の一部を機械意匠化。")
      ], DETAIL_VARIANTS, { kind: "part", selection: "multi" })
    ]
  });

  const adult = buildCollection({
    key: "adult-fetish", section: "attire", registerVersion: 504, adultOnly: true,
    eyebrow: "ADULT FETISH DETAIL LAB / 成人専用",
    title: "🔞 成人向けフェチ・ディテール工房",
    note: "成人キャラクター専用1000点。おまかせ840・後付け160を、R-18解放時だけ専用ゾーンへ出します。",
    guide: "15テーマの完成セットから方向性を1つ選びます。学園風・運動・水着・ドレス・文化礼装・神性・悪魔・ランジェリー・職業・神話も成人衣装として収録。細かく作る時だけ、開口、艶素材、着崩れ、装飾ハーネス、見せ方を後付けします。全項目は成人・合意を前提としたPositive出力です。",
    groups: [
      group("quick-night", "🌙 夜会・ラウンジ おまかせセット", "ドレス、カクテル、仮面舞踏会など、夜の大人向け完成セット60。", [
        base("evening-reveal", "夜会ドレス・大胆アレンジ", "adult character, consensual presentation, coordinated revealing evening-dress details, deep neckline, high side slit, long gloves, refined heels", "夜会衣装を大胆に整える。", "構成：深い襟元／片側ハイスリット／長手袋／礼装靴"),
        base("lace-cocktail", "黒レース・カクテルセット", "adult character, consensual presentation, coordinated lace cocktail attire, structured cocktail dress, lace gloves, patterned stockings, jeweled choker", "レース主体の夜遊び礼装。", "構成：構築的カクテルドレス／レース手袋／柄ストッキング／宝石チョーカー"),
        base("satin-lounge", "高級サテン・ラウンジセット", "adult character, consensual presentation, coordinated luxury lounge attire, satin slip dress, long draped robe, pearl body chain, ankle-strap heels", "柔らかな艶を中心にする。", "構成：サテンスリップドレス／長いローブ／真珠ボディチェーン／足首ストラップ靴"),
        base("casino-glamour", "カジノ・グラマーセット", "adult character, consensual presentation, coordinated casino glamour attire, fitted halter dress, opera gloves, card-suit jewelry, polished high heels", "カード意匠の華やかな夜装。", "構成：ホルタードレス／オペラ手袋／カード意匠宝飾／光沢ヒール"),
        base("velvet-masquerade", "ベルベット仮面舞踏会セット", "adult character, consensual presentation, coordinated masquerade attire, velvet evening gown, lace half-mask, thigh-high stockings, ornamental fan", "仮面と深い布艶を組み合わせる。", "構成：ベルベット夜会服／レース半仮面／腿丈ストッキング／装飾扇"),
        base("disheveled-formal", "着崩れ礼装セット", "adult character, consensual presentation, coordinated disheveled formalwear, loosened closure, off-shoulder outer layer, displaced sash, controlled garment coverage", "礼装の着崩れを一式化。", "構成：緩い留め具／肩落ち外衣／ずれた帯／被覆維持")
      ], ADULT_VARIANTS, { kind: "set", selection: "single" }),

      group("quick-material", "🫧 光沢・レース・脚線 おまかせセット", "ラテックス、レース、コルセット、脚衣を主役にした完成セット60。", [
        base("gloss-harness", "光沢ハーネス衣装セット", "adult character, consensual presentation, coordinated glossy fashion-harness outfit, fitted outer layer, decorative body straps, thigh straps, polished buckles", "艶素材と帯構造をまとめる。", "構成：光沢外衣／装飾ハーネス／腿帯／金属留め具"),
        base("sheer-veil-stockings", "シアーヴェール・ストッキングセット", "adult character, consensual presentation, coordinated sheer veil and stocking details, lace edging, garter hardware, elegant rear three-quarter framing", "透過布と脚衣をまとめる。", "構成：短ヴェール／シアーストッキング／レース縁／背面三分構図"),
        base("corset-garter", "コルセット・ガーターセット", "adult character, consensual presentation, coordinated corset and garter attire, structured corset bodice, garter stockings, lace gloves, narrow choker", "胴と脚の線を一式化。", "構成：構築コルセット／ガーターストッキング／レース手袋／細チョーカー"),
        base("mesh-layer", "ボディストッキング・レイヤーセット", "adult character, consensual presentation, coordinated mesh bodystocking layers, open tailored jacket, decorative thigh straps, high ankle boots", "網地を外衣と重ねる。", "構成：メッシュボディストッキング／開いた仕立て上着／装飾腿帯／ハイアンクルブーツ"),
        base("wetlook-rain", "濡れ光沢・雨夜セット", "adult character, consensual presentation, coordinated wet-look evening attire, coated fitted dress, transparent rain cape, glossy stockings, water-beaded gloves", "雨と濡れ光沢をまとめる。", "構成：コート加工ドレス／透明レインケープ／艶ストッキング／水滴手袋"),
        base("leather-rider", "レザーライダー・夜走りセット", "adult character, consensual presentation, coordinated leather rider attire, fitted leather suit, cropped riding jacket, long gloves, tall riding boots", "レザーの層と長靴を主役にする。", "構成：密着レザースーツ／短丈ライダージャケット／長手袋／ロングブーツ")
      ], ADULT_VARIANTS, { kind: "set", selection: "single" }),

      group("quick-role", "🎭 職業・ステージ おまかせセット", "成人の仕事着や舞台衣装をフェチ方向へまとめた完成セット40。", [
        base("executive-afterhours", "深夜エグゼクティブセット", "adult character, consensual presentation, coordinated after-hours executive attire, tailored blouse, fitted pencil skirt, loosened necktie, refined glasses", "成人の仕事着を夜向けに着崩す。", "構成：仕立てブラウス／タイトスカート／緩めネクタイ／上品な眼鏡"),
        base("cabaret-stage", "キャバレー舞台セット", "adult character, consensual presentation, coordinated cabaret stage attire, corset bodice, fringed short skirt, opera gloves, feather headpiece", "舞台の動きと装飾をまとめる。", "構成：コルセット胴衣／フリンジスカート／オペラ手袋／羽根髪飾り"),
        base("stage-magician", "大人の舞台魔術師セット", "adult character, consensual presentation, coordinated stage-magician attire, fitted tailcoat, corset waistcoat, thigh-high boots, white performance gloves", "燕尾服と脚衣を組み合わせる。", "構成：フィット燕尾服／コルセット風胴衣／腿丈ブーツ／白舞台手袋"),
        base("mature-maid", "成人クラシックメイドセット", "adult character, consensual presentation, coordinated adult maid-inspired attire, fitted dark dress, lace apron, thigh-high stockings, ribbon choker", "成人専用のクラシック給仕衣装。", "構成：濃色フィットドレス／レースエプロン／腿丈ストッキング／リボンチョーカー")
      ], ADULT_VARIANTS, { kind: "set", selection: "single" }),

      group("quick-fantasy", "😈 幻想・人外 おまかせセット", "悪魔、吸血鬼、魔女、人外耳を成人衣装としてまとめた完成セット40。", [
        base("demon-night", "成人デーモン夜装セット", "adult character, consensual presentation, coordinated demon-inspired night attire, compact horns, cutout evening gown, wing ornaments, jeweled tail accessory", "悪魔意匠を夜会服へまとめる。", "構成：小型角／カットアウト夜会服／翼飾り／宝石尾飾り"),
        base("vampire-noble", "吸血鬼貴族・夜宴セット", "adult character, consensual presentation, coordinated vampire-noble attire, velvet long coat, high-collar inner dress, thigh-high boots, gemstone choker", "貴族調の濃色レイヤー。", "構成：ベルベット長衣／高襟インナードレス／腿丈ブーツ／宝石チョーカー"),
        base("moon-witch", "月夜の成人魔女セット", "adult character, consensual presentation, coordinated moon-witch attire, high-slit ritual dress, sheer sleeves, rune garter, veiled pointed hat", "月と術式を衣装部品へ落とす。", "構成：ハイスリット儀式服／シアー袖／術式ガーター／ヴェール付き尖り帽"),
        base("feline-nightlife", "猫系ナイトライフセット", "adult character, consensual presentation, coordinated feline-inspired nightlife attire, cat-ear headband, glossy fitted suit, articulated tail accessory, bell choker", "猫意匠を都会の夜装へまとめる。", "構成：猫耳ヘッドバンド／艶フィットスーツ／可動尾飾り／鈴チョーカー")
      ], ADULT_VARIANTS, { kind: "set", selection: "single" }),

      group("quick-sf", "🤖 SF・サイバー おまかせセット", "機械関節、発光線、透明パネル、戦術帯をまとめた完成セット40。", [
        base("cyber-bodysuit", "サイバーボディスーツセット", "adult character, consensual presentation, coordinated cyber bodysuit attire, fitted technical suit, luminous seam lines, transparent accent panels, utility thigh harness", "発光線と透明パネルをまとめる。", "構成：技術ボディスーツ／発光シーム／透明差しパネル／実用腿ハーネス"),
        base("android-seam", "アンドロイド継ぎ目ドレスセット", "adult character, consensual presentation, coordinated android-inspired attire, liquid-metal dress, visible artificial joint accents, interface collar, articulated gloves", "人工関節を礼装へなじませる。", "構成：液体金属ドレス／人工関節意匠／接続襟／可動手袋"),
        base("hologram-lounge", "ホログラムラウンジセット", "adult character, consensual presentation, coordinated holographic lounge attire, translucent light dress, luminous garter bands, clear heels, narrow visor", "透明感と光帯を主役にする。", "構成：半透明ライトドレス／発光ガーターバンド／クリアヒール／細型バイザー"),
        base("stealth-infiltration", "成人ステルス潜入セット", "adult character, consensual presentation, coordinated stealth-infiltration attire, fitted dark tactical suit, decorative chest harness, thigh equipment straps, reinforced gloves", "暗色戦術衣装をフェチ方向へ整える。", "構成：暗色フィット戦術服／装飾胸部ハーネス／腿装備帯／補強手袋")
      ], ADULT_VARIANTS, { kind: "set", selection: "single" }),

      group("quick-academy", "🎓 成人学園風・学生服 おまかせセット", "学生服モチーフを成人コスチュームとして扱う完成セット60。未成年設定は含みません。", [
        base("mature-blazer", "成人向け学生服風・ブレザーセット", "adult character, consensual costume presentation, mature academy-inspired blazer uniform, tailored blazer, pleated skirt, neck ribbon, knee-high socks", "成人の学園風ブレザー衣装。", "構成：仕立てブレザー／プリーツスカート／ネックリボン／膝丈ソックス"),
        base("sailor-collar", "成人向けセーラー襟・制服風セット", "adult character, consensual costume presentation, mature sailor-collar academy uniform, fitted sailor blouse, pleated skirt, neckerchief, loafers", "成人コスチュームとしてのセーラー襟。", "構成：セーラー襟ブラウス／プリーツスカート／ネッカチーフ／ローファー"),
        base("campus-cardigan", "成人キャンパス・カーディガンセット", "adult character, consensual costume presentation, mature campus-inspired attire, soft cardigan, collared shirt, checked skirt, ribbed socks", "落ち着いた成人キャンパス風。", "構成：柔らかいカーディガン／襟付きシャツ／チェック柄スカート／リブソックス"),
        base("academy-council", "成人アカデミー評議会セット", "adult character, consensual costume presentation, mature academy-council attire, structured jacket, waistcoat, narrow tie, polished boots", "規律的な成人学園役職衣装。", "構成：構築ジャケット／ウエストコート／細ネクタイ／光沢ブーツ"),
        base("graduation-formal", "成人卒業式・セレモニーセット", "adult character, consensual costume presentation, adult graduation ceremonial attire, fitted formal dress, academic stole, short cape, heeled shoes", "成人の修了式を礼装化。", "構成：式典ドレス／アカデミックストール／短いケープ／ヒール靴"),
        base("art-college", "成人芸術学院・制作服セット", "adult character, consensual costume presentation, mature art-academy attire, rolled-sleeve blouse, fitted vest, utility apron, lace-up boots", "制作作業と制服風を両立。", "構成：袖まくりブラウス／フィットベスト／実用エプロン／編み上げブーツ")
      ], ADULT_VARIANTS, { kind: "set", selection: "single" }),

      group("quick-athletic", "🤸 成人体操服・レオタード おまかせセット", "体操服、レオタード、舞踊・氷上競技を成人スポーツ衣装としてまとめた完成セット60。", [
        base("adult-gymwear", "成人向け体操服・トレーニングセット", "adult character, consensual athletic presentation, mature gym-training uniform, fitted athletic top, short training bottoms, striped socks, indoor sneakers", "成人向け運動衣装として構成。", "構成：フィット運動トップ／短いトレーニングボトム／ラインソックス／室内シューズ"),
        base("gymnast-leotard", "成人体操・レオタードセット", "adult character, consensual athletic presentation, adult artistic-gymnastics leotard, sculpted paneling, crystal trim, wrist guards, competition slippers", "競技体操の線を主役にする。", "構成：競技レオタード／立体パネル／クリスタル縁／競技シューズ"),
        base("rhythmic-gymnast", "成人新体操・リボンセット", "adult character, consensual athletic presentation, adult rhythmic-gymnastics attire, ornate leotard, sheer sleeves, ribbon apparatus, toe shoes", "新体操の道具と衣装を統一。", "構成：装飾レオタード／シアー袖／演技リボン／トーシューズ"),
        base("ballet-practice", "成人バレエ・練習レオタードセット", "adult character, consensual dance presentation, adult ballet practice attire, scoop-back leotard, wrap skirt, leg warmers, soft ballet shoes", "練習着の重なりを整える。", "構成：背中開きレオタード／巻きスカート／レッグウォーマー／バレエシューズ"),
        base("figure-skating", "成人フィギュアスケート衣装セット", "adult character, consensual athletic presentation, adult figure-skating costume, asymmetric leotard dress, crystal mesh sleeves, skating tights, figure skates", "氷上用の輝きと可動性。", "構成：非対称レオタードドレス／結晶メッシュ袖／スケートタイツ／フィギュア靴"),
        base("retro-aerobics", "成人レトロエアロビクスセット", "adult character, consensual athletic presentation, adult retro aerobics attire, high-cut leotard, cropped warmup jacket, leg warmers, training shoes", "鮮やかな運動レイヤー。", "構成：ハイカットレオタード／短丈ウォームアップ／レッグウォーマー／運動靴")
      ], ADULT_VARIANTS, { kind: "set", selection: "single" }),

      group("quick-swim", "🏖 成人水着・リゾート おまかせセット", "ビキニ、モノキニ、競泳、レトロ、羽織、ウェットスーツの完成セット60。", [
        base("glamour-bikini", "成人グラマラス・ビキニセット", "adult character, consensual swimwear presentation, coordinated glamour bikini, structured bikini top, side-tie bottoms, body chain, platform sandals", "リゾート向けの華やかな水着。", "構成：構築ビキニトップ／サイドタイボトム／ボディチェーン／厚底サンダル"),
        base("poolside-monokini", "成人プールサイド・モノキニセット", "adult character, consensual swimwear presentation, coordinated poolside monokini, cutout one-piece swimsuit, sheer waist wrap, wide hat, heeled sandals", "カットアウトと羽織を一式化。", "構成：カットアウトモノキニ／シアー腰巻き／広つば帽／ヒールサンダル"),
        base("competition-swim", "成人競泳スタイル・水着セット", "adult character, consensual swimwear presentation, adult competition-swim attire, streamlined racing swimsuit, swim cap, mirrored goggles, pool slides", "競技形状をシャープにまとめる。", "構成：競泳水着／スイムキャップ／ミラーゴーグル／プールサンダル"),
        base("retro-pinup-swim", "成人レトロ・ピンナップ水着セット", "adult character, consensual swimwear presentation, adult retro pinup swimwear, halter one-piece swimsuit, waist belt, cat-eye sunglasses, wedge sandals", "古典的な曲線と小物。", "構成：ホルターワンピース水着／腰ベルト／キャットアイ眼鏡／ウェッジサンダル"),
        base("tropical-coverup", "成人トロピカル・カバーアップセット", "adult character, consensual swimwear presentation, adult tropical resort attire, bandeau bikini, translucent long coverup, shell jewelry, barefoot anklet", "水着と長い羽織を重ねる。", "構成：バンドゥビキニ／半透明ロングカバーアップ／貝殻宝飾／アンクレット"),
        base("night-wetsuit", "成人ナイトビーチ・ウェットスーツセット", "adult character, consensual swimwear presentation, adult night-beach wetsuit attire, fitted short wetsuit, front zip, neoprene gloves, water shoes", "暗色機能素材を主役にする。", "構成：短丈ウェットスーツ／前面ジップ／ネオプレン手袋／ウォーターシューズ")
      ], ADULT_VARIANTS, { kind: "set", selection: "single" }),

      group("quick-dress", "👗 ドレス・ガウン おまかせセット", "カクテル、マーメイド、背中開き、舞踏会、祝宴、レッドカーペットの完成セット60。", [
        base("little-black-dress", "リトルブラックドレス・夜装セット", "adult character, consensual presentation, coordinated little black dress attire, fitted cocktail dress, sheer gloves, gemstone earrings, pointed heels", "小さな黒ドレスを端正に仕上げる。", "構成：フィットカクテルドレス／シアー手袋／宝石耳飾り／ポインテッドヒール"),
        base("mermaid-gown", "マーメイドライン・ガウンセット", "adult character, consensual presentation, coordinated mermaid evening gown, sculpted bodice, flared hem, opera gloves, jeweled heels", "裾の広がる曲線的な礼装。", "構成：立体胴衣／マーメイド裾／オペラ手袋／宝石ヒール"),
        base("backless-column", "背中開き・コラムドレスセット", "adult character, consensual presentation, coordinated backless column dress, low rear frame, draped shoulder chain, long slit, minimalist heels", "背面と縦線を主役にする。", "構成：背中開きコラムドレス／肩ドレープ鎖／ロングスリット／細身ヒール"),
        base("royal-ballgown", "王道プリンセス・舞踏会セット", "adult character, consensual presentation, coordinated royal ballgown, corseted bodice, layered full skirt, elbow gloves, crystal tiara", "華やかな舞踏会の完成形。", "構成：コルセット胴衣／多層フルスカート／肘丈手袋／結晶ティアラ"),
        base("bridal-reception", "成人ブライダル・祝宴ドレスセット", "adult character, consensual presentation, adult bridal reception attire, fitted reception dress, detachable overskirt, lace gloves, pearl hairpiece", "成人の祝宴用ドレス。", "構成：フィット祝宴ドレス／着脱式オーバースカート／レース手袋／真珠髪飾り"),
        base("red-carpet", "レッドカーペット・非対称ドレスセット", "adult character, consensual presentation, coordinated red-carpet attire, asymmetric evening dress, sculptural shoulder detail, thigh slit, metallic clutch", "非対称の礼装を一式化。", "構成：非対称イブニングドレス／立体肩飾り／腿スリット／金属クラッチ")
      ], ADULT_VARIANTS, { kind: "set", selection: "single" }),

      group("quick-cultural", "🌏 チャイナドレス・文化礼装 おまかせセット", "各文化の衣装構造を尊重し、成人の祝宴・舞台衣装としてまとめた完成セット60。", [
        base("qipao-banquet", "成人チャイナドレス・祝宴セット", "adult character, consensual presentation, adult qipao banquet attire, high-collar fitted qipao, side slit, embroidered shawl, ornamental heels", "祝宴向けの伝統形状を整える。", "構成：高襟フィットチャイナドレス／サイドスリット／刺繍ショール／装飾ヒール"),
        base("modern-qipao", "成人モダンチャイナドレス・ラウンジセット", "adult character, consensual presentation, modern adult qipao lounge attire, asymmetric qipao dress, sheer sleeves, jade earrings, ankle-strap heels", "現代的な非対称チャイナドレス。", "構成：非対称チャイナドレス／シアー袖／翡翠耳飾り／足首ストラップ靴"),
        base("kimono-evening", "成人着物・夜会アレンジセット", "adult character, consensual presentation, adult kimono evening attire, formal kimono layers, structured obi, decorative hairpin, platform sandals", "着物の層と帯を夜会向けに整える。", "構成：礼装着物レイヤー／構築帯／装飾かんざし／厚底草履"),
        base("hanfu-celestial", "成人漢服・天上舞台セット", "adult character, consensual presentation, adult hanfu-inspired stage attire, crossed-collar robe, flowing translucent sleeves, waist sash, cloud hair ornament", "流れる袖を舞台衣装として扱う。", "構成：交領ローブ／透過長袖／腰帯／雲形髪飾り"),
        base("ao-dai-garden", "成人アオザイ・夜庭セット", "adult character, consensual presentation, adult ao-dai evening attire, fitted long tunic, flowing side panels, silk trousers, floral hair ornament", "長い縦線と側面布を活かす。", "構成：フィットロングチュニック／流れる側面布／絹パンツ／花髪飾り"),
        base("sari-gala", "成人サリー・ガラセット", "adult character, consensual presentation, adult sari gala attire, draped sari, embellished blouse, jeweled waist chain, ornate sandals", "ドレープと宝飾を祝宴向けに構成。", "構成：ドレープサリー／装飾ブラウス／宝石腰鎖／装飾サンダル")
      ], ADULT_VARIANTS, { kind: "set", selection: "single" }),

      group("quick-divine", "✨ 美の女神・神性 おまかせセット", "美、海、月、暁、宝石、勝利を成人の神性衣装へまとめた完成セット60。", [
        base("beauty-goddess", "美の女神・神殿礼装セット", "adult character, consensual divine presentation, beauty-goddess attire, draped divine gown, gold body jewelry, translucent veil, laurel crown", "美の女神を優雅な神殿礼装にする。", "構成：ドレープ神衣／金の身体宝飾／半透明ヴェール／月桂冠"),
        base("sea-goddess", "海の女神・真珠潮流セット", "adult character, consensual divine presentation, sea-goddess attire, wave-cut gown, pearl harness jewelry, shell crown, translucent fin veil", "海の曲線と真珠を主役にする。", "構成：波形ガウン／真珠ハーネス宝飾／貝殻冠／半透明フィンヴェール"),
        base("moon-goddess", "月の女神・銀夜セット", "adult character, consensual divine presentation, moon-goddess attire, crescent-cut dress, silver armlets, star veil, moonstone heels", "月光の銀色レイヤー。", "構成：三日月カットドレス／銀腕輪／星ヴェール／月長石ヒール"),
        base("dawn-goddess", "暁の女神・朝焼けセット", "adult character, consensual divine presentation, dawn-goddess attire, gradient flowing gown, sunburst collar, luminous bracelets, winged sandals", "朝焼けの色と光輪をまとめる。", "構成：暁グラデーション神衣／日輪襟／発光腕輪／翼サンダル"),
        base("jewel-goddess", "宝石の女神・結晶礼装セット", "adult character, consensual divine presentation, jewel-goddess attire, faceted crystal dress, gemstone body chains, prism gloves, crystal crown", "多面体の宝石意匠を一式化。", "構成：多面結晶ドレス／宝石ボディチェーン／プリズム手袋／結晶冠"),
        base("winged-victory", "翼ある勝利の女神セット", "adult character, consensual divine presentation, winged victory attire, wind-swept divine dress, feather shoulder armor, laurel belt, strapped sandals", "風と翼の勝利神衣装。", "構成：風になびく神衣／羽肩甲／月桂樹ベルト／ストラップサンダル")
      ], ADULT_VARIANTS, { kind: "set", selection: "single" }),

      group("quick-demon", "🔥 淫欲の悪魔・誘惑魔 おまかせセット", "悪魔的な誘惑意匠を成人の合意済み衣装表現としてまとめた完成セット60。", [
        base("lust-demon", "淫欲の悪魔・深紅夜宴セット", "adult character, consensual fantasy presentation, lust-demon-inspired attire, horned corset gown, heart-shaped cutouts, wing ornaments, jeweled tail accessory", "淫欲の悪魔を衣装意匠として表現。", "構成：角付きコルセットガウン／心形カットアウト／翼飾り／宝石尾飾り"),
        base("succubus-night", "成人サキュバス・月夜セット", "adult character, consensual fantasy presentation, adult succubus-inspired attire, bat-wing bodysuit, thigh-high boots, crescent choker, small horn crown", "夜の悪魔意匠をまとめる。", "構成：蝙蝠翼ボディスーツ／腿丈ブーツ／三日月チョーカー／小角冠"),
        base("infernal-duchess", "煉獄公爵夫人・礼装セット", "adult character, consensual fantasy presentation, infernal duchess attire, flame-edged evening gown, armored corset, long gloves, obsidian crown", "貴族悪魔の威厳を礼装化。", "構成：炎縁イブニングガウン／装甲コルセット／長手袋／黒曜石冠"),
        base("dream-demon", "夢魔・薄明ヴェールセット", "adult character, consensual fantasy presentation, dream-demon attire, translucent layered dress, ribbon harness accents, dreamstone jewelry, veiled horns", "夢と透過布を悪魔衣装へ落とす。", "構成：透過多層ドレス／リボンハーネス飾り／夢石宝飾／ヴェール付き角"),
        base("crimson-devil", "深紅の契約悪魔・正装セット", "adult character, consensual fantasy presentation, crimson contract-devil attire, fitted tailcoat dress, sigil waist belt, claw gloves, horned headpiece", "契約印と正装を組み合わせる。", "構成：フィット燕尾ドレス／印章腰帯／鉤爪手袋／角付き髪飾り"),
        base("fallen-temptress", "堕天の誘惑者・黒翼セット", "adult character, consensual fantasy presentation, fallen celestial temptress attire, dark halo dress, black feather wings, chain jewelry, high lace-up boots", "堕天と誘惑を衣装だけで表す。", "構成：暗色光輪ドレス／黒羽翼／鎖宝飾／編み上げロングブーツ")
      ], ADULT_VARIANTS, { kind: "set", selection: "single" }),

      group("quick-boudoir", "🕯 ランジェリー・寝室礼装 おまかせセット", "サテン、レース、コルセット、ローブ、ナイトウェアを成人向け完成衣装としてまとめた60セット。", [
        base("satin-camisole", "サテンキャミソール・ナイトセット", "adult character, consensual boudoir presentation, coordinated satin camisole attire, lace-trim camisole, matching shorts, silk robe, heeled slippers", "柔らかな夜着を一式化。", "構成：レース縁キャミソール／揃いのショーツ／絹ローブ／ヒールスリッパ"),
        base("lace-teddy", "レーステディ・ジュエルセット", "adult character, consensual boudoir presentation, coordinated lace teddy attire, paneled lace bodysuit, jeweled choker, sheer stockings, ankle-strap heels", "レースと宝飾をまとめる。", "構成：パネルレーステディ／宝石チョーカー／シアーストッキング／足首ストラップ靴"),
        base("corset-robe", "コルセット・ローブセット", "adult character, consensual boudoir presentation, coordinated corset robe attire, structured corset, long translucent robe, garter stockings, velvet slippers", "硬い胴衣と柔らかな羽織。", "構成：構築コルセット／半透明ロングローブ／ガーターストッキング／ベルベットスリッパ"),
        base("bridal-lingerie", "成人ブライダル・ランジェリーセット", "adult character, consensual boudoir presentation, adult bridal lingerie attire, ivory bustier, lace garter, short veil, pearl anklet", "成人の婚礼内衣を端正に構成。", "構成：象牙色ビスチェ／レースガーター／短いヴェール／真珠アンクレット"),
        base("luxury-sleepwear", "高級ナイトウェア・ラウンジセット", "adult character, consensual boudoir presentation, coordinated luxury sleepwear, silk slip dress, feather-trim robe, pendant necklace, satin mules", "ホテルラウンジ風の夜着。", "構成：絹スリップドレス／羽縁ローブ／ペンダント／サテンミュール"),
        base("garter-boudoir", "ガーター・ブドワールセット", "adult character, consensual boudoir presentation, coordinated garter boudoir attire, balconette corset, garter belt, thigh-high stockings, long lace gloves", "胴と脚衣の線を揃える。", "構成：バルコネットコルセット／ガーターベルト／腿丈ストッキング／長レース手袋")
      ], ADULT_VARIANTS, { kind: "set", selection: "single" }),

      group("quick-service", "🪪 成人制服・サービス職 おまかせセット", "接客、移動、医療・治安モチーフを成人の舞台・ファッション制服としてまとめた完成セット60。", [
        base("casino-dealer", "成人カジノディーラー・制服セット", "adult character, consensual role-costume presentation, adult casino dealer attire, fitted waistcoat, collared blouse, bow tie, card-suit cufflinks", "テーブル接客の正装。", "構成：フィットウエストコート／襟付きブラウス／蝶ネクタイ／カード意匠カフス"),
        base("cocktail-bartender", "成人カクテルバーテンダーセット", "adult character, consensual role-costume presentation, adult cocktail bartender attire, rolled-sleeve shirt, corset vest, utility apron, polished boots", "バーの実用服を艶やかに整える。", "構成：袖まくりシャツ／コルセットベスト／実用エプロン／光沢ブーツ"),
        base("cabin-crew", "成人キャビンクルー風セット", "adult character, consensual role-costume presentation, adult cabin-crew-inspired attire, tailored jacket dress, neck scarf, pillbox hat, heeled pumps", "移動サービス制服の端正な形。", "構成：仕立てジャケットドレス／ネックスカーフ／小型帽／ヒールパンプス"),
        base("medical-couture", "成人メディカル・クチュールセット", "adult character, consensual role-costume presentation, adult medical-inspired couture, fitted wrap dress, short utility coat, thigh holster pouch, clean ankle boots", "医療モチーフを舞台衣装化。", "構成：フィット巻きドレス／短丈ユーティリティコート／腿ポーチ／清潔なアンクルブーツ"),
        base("patrol-fashion", "成人パトロール・ファッション制服セット", "adult character, consensual role-costume presentation, adult patrol-inspired fashion uniform, fitted uniform dress, decorative badge belt, peaked cap, knee-high boots", "治安制服モチーフをファッション化。", "構成：フィット制服ドレス／装飾バッジベルト／制帽／膝丈ブーツ"),
        base("officer-gala", "成人士官・ガラ制服セット", "adult character, consensual role-costume presentation, adult officer gala attire, structured military jacket, corset waist, medal sash, tall polished boots", "式典士官服を曲線的に整える。", "構成：構築士官ジャケット／コルセット腰／勲章サッシュ／光沢ロングブーツ")
      ], ADULT_VARIANTS, { kind: "set", selection: "single" }),

      group("quick-mythic", "🐉 神話種族・異世界女王 おまかせセット", "エルフ、竜、海妖、狐霊、闇司祭、星の託宣者を成人衣装としてまとめた完成セット60。", [
        base("elf-queen", "成人エルフ女王・森冠セット", "adult character, consensual fantasy presentation, adult elf-queen attire, leaf-cut royal gown, branch crown, arm bracers, vine-wrapped boots", "森の女王礼装を一式化。", "構成：葉形王礼ドレス／枝冠／腕甲／蔓巻きブーツ"),
        base("dragon-empress", "成人竜皇后・鱗甲セット", "adult character, consensual fantasy presentation, adult dragon-empress attire, scale-paneled gown, horn crown, wing mantle, clawed heels", "竜の硬質意匠と礼装を統合。", "構成：鱗パネルガウン／角冠／翼マント／鉤爪ヒール"),
        base("mermaid-siren", "成人海妖・セイレーンセット", "adult character, consensual fantasy presentation, adult siren attire, shell bodice, scaled tail skirt, fin veil, pearl armlets", "海妖の鱗と薄布をまとめる。", "構成：貝殻胴衣／鱗テールスカート／フィンヴェール／真珠腕輪"),
        base("fox-spirit", "成人狐霊・月宴セット", "adult character, consensual fantasy presentation, adult fox-spirit attire, layered ceremonial robe, multiple tail ornaments, fox mask, platform sandals", "狐霊の尾と仮面を夜宴衣装へ。", "構成：多層儀式ローブ／複数尾飾り／狐仮面／厚底サンダル"),
        base("dark-priestess", "成人闇司祭・儀式セット", "adult character, consensual fantasy presentation, adult dark-priestess attire, high-slit ritual gown, rune stole, chain veil, armored boots", "暗色の儀式衣装を端正に構成。", "構成：ハイスリット儀式ガウン／ルーンストール／鎖ヴェール／装甲ブーツ"),
        base("stellar-oracle", "成人星界託宣者セット", "adult character, consensual fantasy presentation, adult stellar-oracle attire, constellation dress, floating ring ornaments, star gloves, crystal sandals", "星図と浮遊環を衣装化。", "構成：星座ドレス／浮遊環飾り／星手袋／結晶サンダル")
      ], ADULT_VARIANTS, { kind: "set", selection: "single" }),

      group("exposure", "✂️ 成人向け開口・被覆調整", "開口部を衣装設計として扱う40部品。人物は必ず成人として出力します。", [
        base("deep-neckline", "深いネックライン", "adult character, consensual presentation, adult garment with a deep neckline, clean reinforced edges, stable garment support", "襟元を深く設計。"),
        base("open-back", "大胆な背中開き", "adult character, consensual presentation, adult garment with a broad open-back frame, low rear fastening, clean finished border", "背面を大きく開く。"),
        base("high-slit", "ハイスリット", "adult character, consensual presentation, adult garment with a very high side slit, reinforced slit edge, stable central panel", "脚側面へ深い切れ込み。"),
        base("cutout-panels", "カットアウトパネル", "adult character, consensual presentation, adult garment with strategically placed cutout panels, precise borders, secure connector straps", "衣装面へ窓を作る。")
      ], ADULT_VARIANTS, { kind: "part", selection: "single" }),

      group("material", "🫧 成人向け艶・透過素材", "密着、透過、強い反射を選ぶ30部品。元衣装の形は維持します。", [
        base("latex", "高光沢ラテックス置換", "adult character, consensual presentation, adult garment material changed to fitted latex, continuous specular highlights, original garment cut preserved", "艶の強い弾性素材。"),
        base("sheer-lace", "シアーレース置換", "adult character, consensual presentation, adult garment material changed to layered sheer lace, clear ornamental weave, finished opaque borders", "透過レースの重なり。"),
        base("vinyl", "艶ビニール置換", "adult character, consensual presentation, adult garment material changed to glossy vinyl, crisp curved reflections, reinforced panel seams", "硬めの光沢膜。")
      ], ADULT_VARIANTS, { kind: "part", selection: "single" }),

      group("disarray", "🔥 成人向け着崩れ・損傷", "衣装が残る範囲で緩みや損傷を足す30部品。", [
        base("loose-closures", "留め具の緩み", "adult character, consensual presentation, adult garment with loosened closures, visible slack fastenings, controlled displaced folds", "留め具を段階的に緩める。"),
        base("slipped-shoulder", "肩からのずれ", "adult character, consensual presentation, adult garment slipping from one shoulder, inner layer retained, controlled fabric support", "片肩の着崩れ。"),
        base("localized-damage", "局所的な衣装損傷", "adult character, consensual presentation, adult garment with localized tears and frayed edges, remaining garment structure intact", "部分的な破れだけ追加。")
      ], ADULT_VARIANTS, { kind: "part", selection: "multi" }),

      group("restraint", "⛓ 合意済み装飾ハーネス・拘束意匠", "衣装アクセサリーとして扱う30部品。暴力・強制表現は含みません。", [
        base("collar-chain", "首輪・細鎖装飾", "adult character, consensual fashion restraint styling, decorative collar and fine chain accents, comfortable spacing, no coercion", "首元へ装飾金具を足す。"),
        base("body-harness", "全身ファッションハーネス", "adult character, consensual fashion restraint styling, decorative full-body harness over intact clothing, balanced strap paths, no coercion", "衣装上へ帯構造を重ねる。"),
        base("decorative-cuffs", "装飾カフ・連結具", "adult character, consensual fashion restraint styling, decorative wrist cuffs with detachable connectors, relaxed hands, no coercion", "手首へ着脱式装飾を足す。")
      ], ADULT_VARIANTS, { kind: "part", selection: "multi" }),

      group("framing", "📸 成人向けフェチ構図", "露出そのものより衣装部位と素材へ視線を導く30部品。", [
        base("rear-look", "背面振り返り", "adult character, consensual presentation, rear three-quarter composition emphasizing open-back garment design and over-the-shoulder gaze", "背中と視線を同時に見せる。"),
        base("legwear-close", "レッグウェア接写", "adult character, consensual presentation, close composition emphasizing stockings, garter hardware and footwear, coherent leg anatomy", "脚衣と金具へ寄る。"),
        base("material-close", "艶素材接写", "adult character, consensual presentation, close composition emphasizing reflective adult garment material and seam construction, coherent body proportions", "素材反射と縫製を見せる。")
      ], ADULT_VARIANTS, { kind: "part", selection: "single" })
    ]
  });

  const collections = [normal, adult];
  const allItems = function(){
    return collections.reduce(function(rows, collection){ return rows.concat(collection.allItems()); }, []);
  };

  window.SHIMA_FETISH_DETAIL_AKASHIC_V1 = {
    version: "1.3.0",
    packageVersion: "SHIMA ADULT START DECK v5.4",
    expectedCollections: 2,
    expectedCategories: 166,
    expectedNormalCount: 660,
    expectedAdultCount: 1000,
    expectedCount: 1660,
    totalCategories: normal.expectedCategories + adult.expectedCategories,
    totalItems: normal.expectedCount + adult.expectedCount,
    collections: collections,
    normal: normal,
    adult: adult,
    allItems: allItems
  };
})();
