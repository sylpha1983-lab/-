(function(){
  "use strict";

  function variant(slug, ja, en){ return [slug, ja, en]; }
  function base(key, title, en, note, description){ return [key, title, en, note, description]; }

  const HAIR_VARIANTS = [
    variant("balanced", "均整仕上げ", "balanced sectioning, clean readable hair silhouette"),
    variant("soft-layer", "柔らかレイヤー", "soft layered ends, gentle strand overlap"),
    variant("crisp-line", "くっきりライン", "crisp contour lines, precisely separated locks"),
    variant("airy", "空気感仕上げ", "airy volume, lightly lifted outer strands"),
    variant("sleek", "艶やかスリーク", "sleek controlled surface, tidy aligned strands"),
    variant("natural", "自然なほぐし", "natural loosened texture, restrained flyaway strands"),
    variant("fine-strands", "細束ディテール", "finely divided hair strands, clear strand hierarchy"),
    variant("asymmetric", "片側アクセント", "subtle asymmetrical styling, one emphasized side section"),
    variant("woven-accent", "編み込みアクセント", "small integrated braid accent, hairstyle remains clearly readable"),
    variant("motion-ready", "動き対応仕上げ", "light motion-ready strand flow, stable core hairstyle")
  ];

  const POSE_VARIANTS = [
    variant("relaxed", "自然な重心", "relaxed weight distribution, natural joint alignment"),
    variant("symmetric", "均整シルエット", "balanced symmetry, clearly separated limbs"),
    variant("shifted", "片重心", "asymmetrical weight shift, stable planted balance"),
    variant("open", "開いた輪郭", "open readable silhouette, hands and limbs clearly visible"),
    variant("compact", "コンパクト輪郭", "compact controlled silhouette, coherent limb overlap"),
    variant("graceful", "優雅な流線", "graceful line of action, smooth counterbalance"),
    variant("powerful", "力強い流線", "powerful line of action, grounded body mechanics"),
    variant("precise", "精密な関節", "precise limb placement, anatomically coherent joint angles"),
    variant("counter", "自然な対角線", "natural contralateral counterbalance, clear torso-to-hip relation"),
    variant("depth", "奥行き強調", "controlled foreshortening, unambiguous near and far limbs")
  ];

  const WEAPON_VARIANTS = [
    variant("field", "実戦標準", "practical field construction, functional grip and fittings"),
    variant("polished", "研磨鋼", "polished steel finish, crisp edge and hardware separation"),
    variant("dark-alloy", "黒色合金", "dark alloy construction, low-gloss reinforced surfaces"),
    variant("ceremonial", "儀礼装飾", "restrained ceremonial ornament, balanced metallic inlay"),
    variant("weathered", "歴戦風化", "weathered service marks, maintained functional edges"),
    variant("arcane", "術式刻印", "fine arcane inlay, controlled luminous engraved lines"),
    variant("frost", "氷晶意匠", "frost-crystal motif, pale blue reflective accents"),
    variant("ember", "熾火意匠", "ember-red motif, heat-darkened metal accents"),
    variant("storm", "雷紋意匠", "storm-line motif, restrained electric-blue conductor details"),
    variant("pearl", "白銀真珠", "pale silver and pearl finish, precise refined fittings")
  ];

  const BACKGROUND_VARIANTS = [
    variant("dawn", "夜明け", "at dawn, cool early light, long soft shadows"),
    variant("day", "晴天の昼", "under clear daytime conditions, readable environmental detail"),
    variant("golden", "黄金時間", "during golden hour, warm grazing environmental light"),
    variant("dusk", "薄暮", "at dusk, blue-orange ambient transition"),
    variant("night", "静かな夜", "at night, restrained practical lights, deep readable shadows"),
    variant("rain", "雨天", "in steady rain, wet surfaces, controlled reflections"),
    variant("snow", "降雪", "during light snowfall, accumulated snow on environmental surfaces"),
    variant("mist", "薄霧", "in thin atmospheric mist, layered depth separation"),
    variant("overcast", "曇天", "under overcast light, soft low-contrast environmental shading"),
    variant("moon", "月明かり", "under moonlight, cool edge illumination and quiet shadows")
  ];

  const EFFECT_VARIANTS = [
    variant("cyan", "蒼光", "cyan and pale-blue energy palette, clean luminous edges"),
    variant("crimson", "紅光", "crimson and deep-red energy palette, controlled hot core"),
    variant("gold", "黄金光", "gold and warm-white energy palette, radiant fine particles"),
    variant("violet", "紫光", "violet and indigo energy palette, layered arcane glow"),
    variant("emerald", "翠光", "emerald and teal energy palette, clear translucent layers"),
    variant("white", "白光", "white and silver energy palette, crisp high-value core"),
    variant("void", "虚空色", "black-violet energy palette, luminous negative-space edges"),
    variant("spectrum", "虹彩", "controlled spectral energy palette, separated color bands"),
    variant("ice", "氷青", "ice-blue energy palette, faceted crystalline highlights"),
    variant("amber", "琥珀光", "amber and copper energy palette, dense glowing motes")
  ];

  const FORMAL_VARIANTS = [
    variant("ivory", "象牙白", "ivory palette, fine tonal embroidery"),
    variant("black", "漆黒", "deep black palette, restrained satin accents"),
    variant("navy", "夜紺", "midnight navy palette, pale metal detailing"),
    variant("burgundy", "葡萄酒色", "burgundy palette, dark velvet-look accents"),
    variant("emerald", "深翠", "deep emerald palette, subtle botanical embroidery"),
    variant("silver", "月銀", "silver-gray palette, precise bead-like trim"),
    variant("gold", "古金", "warm antique-gold palette, controlled metallic edging"),
    variant("lavender", "藤紫", "muted lavender palette, delicate tonal appliqué"),
    variant("rose", "灰桜", "dusty rose palette, restrained petal-like detailing"),
    variant("teal", "深青緑", "deep teal palette, clean geometric trim")
  ];

  const ARMOR_VARIANTS = [
    variant("steel", "磨鋼", "polished steel plates, dark leather-like straps"),
    variant("blackened", "黒焼鋼", "blackened steel plates, low-gloss reinforced edges"),
    variant("bronze", "古銅", "aged bronze plates, maintained structural joints"),
    variant("silver", "白銀", "pale silver armor, precise blue-gray inlay"),
    variant("gold", "儀礼金", "restrained gold armor accents over practical base plates"),
    variant("crimson", "深紅差し", "dark steel armor with controlled crimson textile accents"),
    variant("frost", "氷晶装甲", "frosted alloy armor, pale crystalline edge motifs"),
    variant("ember", "熾火装甲", "heat-darkened armor, ember-red seam accents"),
    variant("forest", "森護装甲", "muted green armor panels, leaf-shaped reinforced edges"),
    variant("arcane", "術式装甲", "engraved arcane armor lines, subtle controlled glow")
  ];

  const VEHICLE_VARIANTS = [
    variant("utility", "実用仕様", "practical utility configuration, clearly functional components"),
    variant("streamlined", "流線仕様", "streamlined body panels, clean aerodynamic silhouette"),
    variant("expedition", "遠征仕様", "expedition configuration, secured cargo and navigation equipment"),
    variant("rescue", "救難仕様", "rescue configuration, high-visibility markers and emergency equipment"),
    variant("ceremonial", "儀礼仕様", "restrained ceremonial trim, polished formal finish"),
    variant("weathered", "歴戦仕様", "weathered service finish, maintained moving parts"),
    variant("arctic", "雪原仕様", "arctic configuration, insulated panels and pale navigation lights"),
    variant("desert", "砂海仕様", "desert configuration, dust filters and sand-resistant fittings"),
    variant("night", "夜行仕様", "night-operation configuration, low-glare surfaces and clear marker lights"),
    variant("arcane", "術式仕様", "arcane-powered configuration, controlled luminous circuit motifs")
  ];

  function makeCategory(row, variants, defaults){
    const key = row[0];
    const title = row[1];
    const basePrompt = row[2];
    const note = row[3] || defaults.note || "";
    const description = row[4] || defaults.description || note;
    return {
      key:key,
      title:title,
      note:note,
      selection:defaults.selection || "single",
      kind:defaults.kind || "item",
      items:variants.map(function(v){
        return {
          slug:v[0],
          ja:v[1] + "・" + title,
          en:basePrompt + ", " + v[2],
          description:description + "／仕上げ・方向性：" + v[1]
        };
      })
    };
  }

  function group(key, title, note, rows, variants, options){
    const settings = options || {};
    return {
      key:key,
      title:title,
      note:note,
      selection:settings.selection || "single",
      kind:settings.kind || "item",
      categories:rows.map(function(row){ return makeCategory(row, variants, settings); })
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
          c.items.forEach(function(item){ rows.push(Object.assign({ collection:result.key, group:g.key, category:c.key, kind:c.kind, selection:c.selection }, item)); });
        });
      });
      return rows;
    };
    return result;
  }

  const hair = buildCollection({
    key:"hair", section:"hair", registerVersion:500, tone:"aqua",
    eyebrow:"HAIR AKASHIC / 髪型アカシックレコード", title:"💇 髪型特化コレクション",
    note:"完成髪型80・基本髪型240・髪専用調整40。髪色を固定せず、形と仕上げを選べます。",
    guide:"迷ったら完成髪型を1つ。細かく決める時は長さ・前髪・結び方を選び、最後に濡れ・風・毛束表現だけを足します。人物の性別・年齢・顔・髪色・背景・品質は固定しません。",
    groups:[
      group("quick", "✨ おまかせ完成髪型", "前髪・長さ・まとめ方まで一度に決める80セット。髪色は含めません。", [
        base("soft-short", "軽やかショート完成形", "complete short hairstyle, softly tapered nape, face-framing side locks, light separated fringe", "短丈を迷わず整える。", "構成：短丈ベース／襟足／横髪／前髪"),
        base("classic-bob", "端正ボブ完成形", "complete chin-length bob hairstyle, rounded outer contour, tidy inward-curved ends, balanced fringe", "輪郭の整った定番ボブ。", "構成：顎丈ボブ／丸い外形／内巻き毛先／前髪"),
        base("layered-lob", "レイヤーロブ完成形", "complete collarbone-length layered lob hairstyle, long face-framing layers, softly graduated ends", "肩まわりで扱いやすい中間丈。", "構成：鎖骨丈／顔周りレイヤー／段差毛先／分け目"),
        base("flowing-long", "流線ロング完成形", "complete long hairstyle, mid-back length, smooth cascading sections, controlled face-framing locks", "長髪の基本構成をまとめる。", "構成：背中丈／流れる毛束／横髪／前髪"),
        base("neat-pony", "端正ポニーテール完成形", "complete ponytail hairstyle, secured mid-height tie, clean crown, defined tail volume, loose face-framing strands", "結び髪の定番を一式化。", "構成：中位置結び／頭頂整理／尾束／後れ毛"),
        base("braided-crown", "編み冠完成形", "complete crown-braid hairstyle, continuous woven band, secured rear join, soft remaining lengths", "編み込みを主役にした完成形。", "構成：冠編み／後部固定／残り髪／横髪"),
        base("formal-chignon", "礼装シニヨン完成形", "complete formal chignon hairstyle, low gathered bun, smooth side sections, precise pinned structure", "礼装向けのまとめ髪。", "構成：低い髷／側面整理／ピン留め構造／後れ毛"),
        base("adventure-braid", "冒険者編み髪完成形", "complete practical adventure hairstyle, partial rear braid, secured loose lengths, clear face area, compact tie points", "動きやすい長髪構成。", "構成：部分編み／長髪固定／顔周り整理／結び点")
      ], HAIR_VARIANTS, { kind:"set", selection:"single" }),
      group("length", "📏 長さ・基本シルエット", "髪の全体長と輪郭から選ぶ60種。", [
        base("pixie", "ピクシーカット", "pixie haircut, short tapered sides and nape, longer textured crown", "短く軽い輪郭。"),
        base("short-bob", "ショートボブ", "short bob hairstyle, ear-to-jaw length, compact rounded silhouette", "耳下から顎丈のボブ。"),
        base("shoulder", "肩丈ミディアム", "shoulder-length medium hairstyle, balanced volume, clean outer contour", "肩に触れる扱いやすい長さ。"),
        base("midback", "背中丈ロング", "mid-back long hairstyle, layered cascading lengths, controlled outer silhouette", "標準的な長髪。"),
        base("waist", "腰丈ロング", "waist-length hairstyle, clearly separated long sections, controlled lower volume", "腰まで届く長髪。"),
        base("floor", "超ロングヘア", "extremely long hairstyle reaching below the knees, organized flowing sections, readable strand direction", "非常に長い髪を破綻しにくく整理。")
      ], HAIR_VARIANTS, { kind:"item", selection:"single" }),
      group("fringe", "✂️ 前髪・横髪", "顔まわりの印象を調整する40種。", [
        base("blunt-fringe", "ぱっつん前髪", "straight blunt fringe, even brow-level edge, tidy side transition", "水平に揃えた前髪。"),
        base("curtain-fringe", "カーテン前髪", "curtain fringe, center opening, soft cheek-framing sections", "中央から左右へ流す前髪。"),
        base("side-fringe", "流し前髪", "side-swept fringe, diagonal forehead line, smoothly joined side locks", "片側へ流す前髪。"),
        base("open-forehead", "額出し", "open-forehead hairstyle, fringe swept away from the face, clean hairline presentation", "前髪を上げて額を見せる。")
      ], HAIR_VARIANTS, { kind:"item", selection:"single" }),
      group("braid", "🪢 編み込み", "編み方そのものを選ぶ30種。", [
        base("single-braid", "一本編み", "single long braid, evenly woven sections, secured compact end", "後方へ一本に編む。"),
        base("twin-braid", "二本編み", "paired braids, symmetrical starting points, evenly woven lengths", "左右二本の編み髪。"),
        base("fishtail", "フィッシュテール編み", "fishtail braid hairstyle, fine alternating woven sections, clearly tapered end", "細かな魚骨状の編み。")
      ], HAIR_VARIANTS, { kind:"item", selection:"single" }),
      group("updo", "🎀 結び・アップ", "ポニーテール、ツイン、髷から選ぶ30種。", [
        base("ponytail", "ポニーテール", "ponytail hairstyle, clearly secured tie point, defined tail mass, controlled crown", "一本結びの基本。"),
        base("twin-tail", "ツインテール", "twin-tail hairstyle, paired secured tie points, balanced tail volume", "左右二本結び。"),
        base("bun", "お団子・シニヨン", "gathered bun hairstyle, compact pinned structure, smooth supporting sections", "髪を丸くまとめる。")
      ], HAIR_VARIANTS, { kind:"item", selection:"single" }),
      group("unisex", "🧭 ユニセックス・シャープ", "着用者の性別を固定しない40種。", [
        base("crop", "テクスチャークロップ", "unisex textured crop hairstyle, short sides, layered top, clean nape", "短く実用的な輪郭。"),
        base("undercut", "アンダーカット", "unisex undercut hairstyle, closely cropped lower sections, longer controlled top", "上下の長さ差を見せる。"),
        base("wolf", "ウルフカット", "unisex wolf-cut hairstyle, layered crown volume, tapered nape lengths", "段差と襟足を活かす。"),
        base("shag", "シャグ・マレット", "unisex shag-mullet hairstyle, textured crown layers, extended rear sections", "無造作な段差と後ろ丈。")
      ], HAIR_VARIANTS, { kind:"item", selection:"single" }),
      group("fantasy", "✨ 幻想・SF髪型", "形状・素材感を強める40種。人物種族は固定しません。", [
        base("gravity", "重力反転ヘア", "gravity-defying hairstyle, upward-floating organized locks, stable root structure", "上向きに浮く髪形。"),
        base("crystal", "結晶毛束ヘア", "hairstyle with translucent crystal-like strand sections, flexible hair-root structure", "一部毛束を結晶質にする。"),
        base("flame", "炎尾シルエットヘア", "hairstyle with flame-shaped tapered ends, clearly defined non-burning hair locks", "毛先を炎形に整える。"),
        base("filament", "機械フィラメントヘア", "hairstyle with fine mechanical filament-like strands, articulated flexible sections", "細い機械繊維の髪表現。")
      ], HAIR_VARIANTS, { kind:"item", selection:"single" }),
      group("state", "🌬️ 濡れ・風・動き", "元髪型を残して状態だけ足す20部品。", [
        base("wet-state", "濡れ髪状態", "wet hairstyle state, grouped damp strands, controlled water weight, original hairstyle preserved", "濡れによる束感だけを追加。"),
        base("wind-state", "風になびく状態", "wind-swept hairstyle state, directional strand flow, anchored roots, original hairstyle preserved", "風向きによる動きだけを追加。")
      ], HAIR_VARIANTS, { kind:"part", selection:"multi" }),
      group("finish", "🔬 毛束・艶・透過調整", "髪そのものの描写だけを補強する20部品。", [
        base("strand-finish", "毛束分離調整", "hair-only strand definition, layered lock separation, preserved base hairstyle and color", "毛束階層を読みやすくする。"),
        base("surface-finish", "髪表面反応調整", "hair-only controlled sheen and subtle strand translucency, preserved base hairstyle and color", "艶と透過を髪だけに加える。")
      ], HAIR_VARIANTS, { kind:"part", selection:"multi" })
    ]
  });

  const pose = buildCollection({
    key:"pose", section:"pose", registerVersion:500, tone:"mint",
    eyebrow:"POSE ACTION ARCHIVE / ポーズ行動記録庫", title:"🏃 ポーズ・行動特化コレクション",
    note:"日常から戦闘、複数人物、浮遊まで360種。背景・衣装・人物属性は固定しません。",
    guide:"まず姿勢の大分類を1つ選び、必要なら手の動きや奥行き方向を追加します。複数人物カテゴリだけは二人以上を前提とします。表情・衣装・背景・品質は別棚で決めてください。",
    groups:[
      group("quick", "✨ おまかせ完成ポーズ", "全身の重心・手・視線方向をまとめる60セット。", [
        base("portrait-neutral", "立ち絵基本ポーズ", "complete neutral character-standing pose, relaxed upright torso, arms resting naturally, gaze toward viewer", "立ち絵の標準構成。", "構成：直立／自然な腕／安定重心／正面視線"),
        base("heroic-full", "英雄立ち完成ポーズ", "complete heroic full-body pose, widened stable stance, raised chest, one hand near the waist, clear forward gaze", "堂々とした全身立ち。", "構成：広めの足幅／胸を張る／片手腰付近／前方視線"),
        base("casual-talk", "会話中完成ポーズ", "complete conversational pose, relaxed standing balance, one open hand gesturing, torso slightly turned toward a partner", "会話の自然な動きをまとめる。", "構成：片手ジェスチャー／体の向き／自然な重心／相手方向"),
        base("formal", "礼装向け完成ポーズ", "complete formal presentation pose, aligned posture, hands composed in front, restrained foot placement, calm forward orientation", "式典・礼装向け。", "構成：整った姿勢／前で揃える手／小さな足幅／正面"),
        base("action-ready", "行動開始完成ポーズ", "complete action-ready pose, lowered center of gravity, staggered feet, open defensive arms, clear movement direction", "動き出す直前の構え。", "構成：低重心／前後足／防御的な腕／進行方向"),
        base("quiet-reflection", "静かな思索完成ポーズ", "complete reflective pose, slightly bowed head, one hand near the chin, relaxed supporting arm, stable seated-or-standing balance", "考え込む姿勢。", "構成：軽い俯き／顎付近の手／支える腕／静かな重心")
      ], POSE_VARIANTS, { kind:"set", selection:"single" }),
      group("standing", "🧍 立つ・歩く", "静止立ちから移動中まで40種。", [
        base("contrapposto", "コントラポスト立ち", "contrapposto standing pose, weight on one leg, natural hip and shoulder counter-tilt", "片脚重心の自然な立ち姿。"),
        base("upright", "端正な直立", "upright standing pose, aligned spine, evenly placed feet, relaxed shoulders", "真っ直ぐ整った立ち姿。"),
        base("lean", "寄りかかり", "casual leaning pose, supported shoulder or back, one relaxed bent leg", "壁などへの寄りかかり。"),
        base("walk", "歩行途中", "mid-step walking pose, natural opposite arm swing, clear heel-to-toe transfer", "一歩進む瞬間。")
      ], POSE_VARIANTS, { kind:"item", selection:"single" }),
      group("seated", "🪑 座る・膝をつく", "椅子・床・膝立ちから40種。", [
        base("chair", "椅子座り", "seated-on-chair pose, supported pelvis, naturally bent knees, readable hand placement", "椅子に座る基本。"),
        base("floor", "床座り", "seated-on-floor pose, grounded hips, clearly arranged legs, stable supporting hands", "床に座る姿勢。"),
        base("kneel", "膝立ち", "kneeling pose, weight distributed across knees and lower legs, upright controlled torso", "両膝をつく姿勢。"),
        base("crossleg", "あぐら・脚組み座り", "cross-legged seated pose, grounded pelvis, clearly interlaced lower-leg placement", "脚を組んで床に座る。")
      ], POSE_VARIANTS, { kind:"item", selection:"single" }),
      group("recline", "🛏️ 寝る・横たわる", "仰向け・横向き・うつ伏せの30種。", [
        base("supine", "仰向け", "supine lying pose, back supported on a surface, limbs arranged with clear anatomical separation", "背中を下にして横たわる。"),
        base("side", "横向き寝", "side-lying pose, supported shoulder and hip, clearly stacked or staggered legs", "体側を下にして横たわる。"),
        base("prone", "うつ伏せ", "prone lying pose, torso supported from the front, head turned clearly, limbs placed without tangling", "体の前面を下にして横たわる。")
      ], POSE_VARIANTS, { kind:"item", selection:"single" }),
      group("hands", "🤲 手・腕ジェスチャー", "上半身に追加しやすい40種。", [
        base("behind", "手を後ろで組む", "hands clasped behind the back, relaxed elbows, visible shoulder alignment", "両手を背面でまとめる。"),
        base("crossed", "腕組み", "arms crossed over the torso, clearly separated forearms and hands, relaxed shoulders", "胸前で腕を組む。"),
        base("hip", "片手を腰へ", "one hand resting on the waist, clear elbow angle, other arm naturally relaxed", "片手腰の定番。"),
        base("reach", "手を差し出す", "one open hand reaching forward, fingers naturally separated, shoulder and elbow aligned", "前へ手を伸ばす。")
      ], POSE_VARIANTS, { kind:"part", selection:"multi" }),
      group("action", "⚡ アクション・戦闘", "走る、跳ぶ、避ける、蹴る、舞う50種。", [
        base("run", "疾走", "running pose, airborne transition between steps, opposite arm drive, clear forward momentum", "走行中の全身動作。"),
        base("jump", "跳躍", "jumping pose, compressed-to-extended body mechanics, clearly lifted feet, readable landing direction", "地面から跳ぶ動作。"),
        base("dodge", "回避", "evasive dodge pose, shifted center of gravity, torso twist, clear incoming-threat direction", "攻撃を避ける動き。"),
        base("kick", "蹴り", "controlled kicking pose, supporting leg grounded, extended leg clearly separated, balanced torso counter-motion", "片脚で蹴る動作。"),
        base("dance", "舞踏・ダンス", "dance pose, continuous line of action, coordinated arm and leg rhythm, stable balance", "踊りの流線を作る。")
      ], POSE_VARIANTS, { kind:"item", selection:"single" }),
      group("activity", "📚 日常動作", "読む・飲む・操作・運ぶ40種。", [
        base("read", "読書", "reading pose, object held at a natural viewing distance, relaxed elbows, focused head angle", "本や資料を読む。"),
        base("drink", "飲み物を口元へ", "drinking pose, vessel held securely near the mouth, natural wrist and elbow alignment", "飲み物を持つ動作。"),
        base("device", "端末操作", "handheld-device interaction pose, readable screen-facing hand placement, natural viewing angle", "スマート端末などを操作。"),
        base("carry", "物を運ぶ", "carrying pose, object weight supported coherently, arms and torso counterbalancing the load", "荷物の重量を感じる運搬。")
      ], POSE_VARIANTS, { kind:"item", selection:"single" }),
      group("pair", "👥 二人・複数人物", "この群だけ二人以上を前提にする30種。", [
        base("back-to-back", "背中合わせ", "two-subject back-to-back pose, separate silhouettes, balanced opposite-facing stances", "二人の背中を合わせる。"),
        base("face-to-face", "向かい合う", "two-subject face-to-face pose, clear interpersonal distance, readable eye-line relation", "二人が正面で向き合う。"),
        base("side-by-side", "並んで立つ", "two-subject side-by-side pose, distinct non-overlapping silhouettes, coordinated forward orientation", "二人が横に並ぶ。")
      ], POSE_VARIANTS, { kind:"item", selection:"single" }),
      group("special", "🫧 浮遊・水中・無重力", "通常重力から外れる30種。", [
        base("float", "静かな浮遊", "levitating pose above the ground, relaxed dangling limbs, coherent suspended center of mass", "空中に静止する。"),
        base("underwater", "水中漂流", "underwater floating pose, buoyant limb placement, slowed hair-and-clothing-independent body motion", "水中の浮力を反映。"),
        base("zero-g", "無重力移動", "zero-gravity pose, free-floating body orientation, controlled limb spread, no ground contact", "上下のない空間で漂う。")
      ], POSE_VARIANTS, { kind:"item", selection:"single" })
    ]
  });

  const weapon = buildCollection({
    key:"weapon", section:"accessories", registerVersion:500, tone:"steel",
    eyebrow:"ARMAMENT AKASHIC / 武装アカシックレコード", title:"⚔️ 武器・武装特化コレクション",
    note:"近接・遠隔・銃器・魔導・防具・SF・調整まで360種。固有作品名は使いません。",
    guide:"武器本体を1つ選び、必要な時だけ握り・鞘・状態・装飾を追加します。人物・衣装・ポーズ・背景・品質は含めないため、別棚の選択を壊しません。",
    groups:[
      group("blade", "🗡️ 剣・刃物", "直剣、刺突剣、曲刀、片刃、短剣から50種。", [
        base("straight-sword", "直剣", "straight double-edged sword, balanced guard, practical one-handed grip", "汎用的な片手直剣。"),
        base("longsword", "長剣", "long two-handed sword, extended grip, straight crossguard, balanced blade geometry", "両手対応の長い直剣。"),
        base("rapier", "刺突剣", "slender thrusting sword, protective swept hilt, narrow rigid blade", "細身の刺突武器。"),
        base("saber", "曲刀・サーベル", "single-edged curved saber, guarded one-handed hilt, forward-cutting blade profile", "緩やかに反った片手剣。"),
        base("dagger", "短剣・ダガー", "compact dagger, double-edged short blade, secure hand guard, practical sheath fit", "携行しやすい短い刃。")
      ], WEAPON_VARIANTS, { kind:"item", selection:"single" }),
      group("pole", "🔱 槍・斧・長柄", "間合いを取る長柄武器40種。", [
        base("spear", "長槍", "long spear, reinforced shaft, leaf-shaped thrusting head, balanced rear counterweight", "突きを主用途にする槍。"),
        base("glaive", "薙刀・グレイブ", "glaive polearm, long curved cutting blade, reinforced shaft collar", "長柄の斬撃武器。"),
        base("halberd", "ハルバード", "halberd polearm, axe blade, thrusting spike, rear hook, reinforced long shaft", "斬る・突く・引く複合長柄。"),
        base("war-axe", "戦斧", "two-handed war axe, broad reinforced blade, long shock-resistant haft", "大きな斧頭の両手武器。")
      ], WEAPON_VARIANTS, { kind:"item", selection:"single" }),
      group("ranged", "🏹 弓・投擲", "静かな遠距離武器40種。", [
        base("longbow", "ロングボウ", "tall longbow, simple recurveless limbs, wrapped grip, taut bowstring", "長い単純弓。"),
        base("recurve", "リカーブボウ", "recurve bow, curved limb tips, compact reinforced riser, taut string", "反り返った弓端を持つ弓。"),
        base("crossbow", "クロスボウ", "crossbow, short reinforced prod, secure stock, visible trigger mechanism", "機械式に保持する弓。"),
        base("throwing", "投擲刃セット", "balanced throwing-blade set, compact matched blades, secured carrying loops", "投げるための小型刃。")
      ], WEAPON_VARIANTS, { kind:"item", selection:"single" }),
      group("firearm", "🔫 銃器・火器", "固有メーカー名を使わない汎用火器40種。", [
        base("revolver", "回転式拳銃", "generic revolver, visible cylinder, practical grip, compact iron sights", "回転弾倉式の拳銃。"),
        base("pistol", "自動式拳銃", "generic semi-automatic pistol, squared slide, practical grip panels, iron sights", "自動装填式の拳銃。"),
        base("lever-rifle", "レバーアクション銃", "generic lever-action rifle, tubular magazine, visible operating lever, shoulder stock", "レバーで作動する長銃。"),
        base("precision-rifle", "精密射撃銃", "generic precision rifle, free-floating barrel, adjustable stock, optical sight, bipod mount", "遠距離精密射撃向け。")
      ], WEAPON_VARIANTS, { kind:"item", selection:"single" }),
      group("arcane", "🔮 魔導・聖遺物", "術具・書物・宝珠40種。", [
        base("wand", "魔法杖・ワンド", "compact magic wand, clear handle and focusing tip, fine engraved channels", "片手用の短い術具。"),
        base("staff", "魔導スタッフ", "long magic staff, reinforced shaft, prominent focusing head, balanced base cap", "両手でも扱える長杖。"),
        base("grimoire", "魔導書", "closed-or-open arcane grimoire, reinforced cover, readable page layers, engraved clasp", "術式を記す書物。"),
        base("orb", "魔力宝珠", "handheld arcane orb, stable circular core, protective ring frame, controlled inner glow", "球形の集束術具。")
      ], WEAPON_VARIANTS, { kind:"item", selection:"single" }),
      group("defense", "🛡️ 盾・防御装備", "大きさの異なる盾30種。", [
        base("round-shield", "円盾", "round shield, reinforced rim, central boss, secured rear arm straps", "取り回しの良い円形盾。"),
        base("tower-shield", "大盾", "tall tower shield, full-body protective profile, reinforced edge, stable rear grips", "全身を覆う縦長盾。"),
        base("buckler", "小盾・バックラー", "small buckler shield, central hand grip, compact reinforced boss, agile defensive profile", "拳付近で扱う小盾。")
      ], WEAPON_VARIANTS, { kind:"item", selection:"single" }),
      group("scifi", "🚀 SF・機械武装", "架空技術の武装40種。", [
        base("plasma-blade", "プラズマ刃", "fictional plasma blade weapon, solid emitter hilt, contained luminous blade field", "発光刃を形成する架空武器。"),
        base("rail-rifle", "レールライフル", "fictional rail rifle, twin acceleration rails, reinforced power housing, clear sight line", "電磁加速式の架空銃。"),
        base("beam-cannon", "携行ビーム砲", "fictional portable beam cannon, compact energy chamber, heat vents, shoulder support", "大型の架空光線武器。"),
        base("drone-control", "戦術ドローン群", "small tactical drone weapon group, distinct hovering units, central control module, visible sensor arrays", "複数小型機による武装。")
      ], WEAPON_VARIANTS, { kind:"item", selection:"single" }),
      group("special", "🪭 特殊・変則武器", "扇、鎖、トンファー、槌から40種。", [
        base("war-fan", "鉄扇", "reinforced war fan, visible metal ribs, sharpened outer leaves, secure pivot", "扇形の近接武器。"),
        base("chain-whip", "鎖鞭", "segmented chain whip, clearly linked metal sections, weighted terminal end, secured handle", "連結節を持つ柔軟武器。"),
        base("tonfa", "トンファー", "paired tonfa batons, perpendicular side handles, reinforced striking shafts", "腕沿いに構える棒武器。"),
        base("war-hammer", "戦槌", "war hammer, compact striking head, rear pick, reinforced medium-length haft", "打撃と穿孔の複合武器。")
      ], WEAPON_VARIANTS, { kind:"item", selection:"single" }),
      group("modifier", "🧰 携行・握り・状態調整", "武器本体を残して後付けする40部品。", [
        base("grip", "握り・保持調整", "weapon-only grip ergonomics, clearly wrapped handle, secure hand-contact surfaces, original weapon form preserved", "握り部分だけを補強。"),
        base("sheath", "鞘・ホルスター", "weapon-matched sheath or holster, secure attachment points, original weapon fully preserved", "携行具を追加。"),
        base("condition", "使用状態・傷", "weapon-only controlled service wear, edge nicks and surface scratches without structural damage", "使用感を追加。"),
        base("ornament", "紋章・刻印", "weapon-only restrained crest engraving and inlay, functional surfaces kept clear", "装飾だけを追加。")
      ], WEAPON_VARIANTS, { kind:"part", selection:"multi" })
    ]
  });

  const background = buildCollection({
    key:"background", section:"background", registerVersion:500, tone:"sky",
    eyebrow:"WORLD ARCHIVE / 背景建築アカシックレコード", title:"🏞️ 背景・建築特化コレクション",
    note:"自然・都市・室内・歴史・幻想・SF・気候・抽象まで360景。人物を含めません。",
    guide:"場所本体を1つ選び、必要なら時間・天候・密度調整を追加します。この棚は背景だけを作り、人物・衣装・ポーズ・品質を固定しません。クイックシーンより細かく場所を決めたい時に使います。",
    groups:[
      group("nature", "🌲 自然景観", "森・山・海・砂漠・湿地50景。", [
        base("forest", "深い森林", "uninhabited deep forest background, layered old trees, mossy ground, winding natural path", "樹木の層で奥行きを作る。"),
        base("mountain", "山岳稜線", "uninhabited mountain-ridge background, layered peaks, exposed rock faces, distant atmospheric depth", "高低差のある山岳。"),
        base("coast", "海岸と断崖", "uninhabited coastal-cliff background, visible shoreline, layered rock formations, open sea horizon", "海と岩場の境界。"),
        base("desert", "砂漠・砂丘", "uninhabited desert background, layered dunes, wind-shaped ridges, distant rocky outcrops", "砂丘の反復と遠景。"),
        base("wetland", "湿地・水辺", "uninhabited wetland background, shallow reflective water, reeds, small raised islands, layered vegetation", "浅水と植生の景観。")
      ], BACKGROUND_VARIANTS, { kind:"item", selection:"single" }),
      group("urban", "🏙️ 都市・街路", "大都市から小路まで50景。", [
        base("downtown", "高層都市街区", "empty downtown background, tall mixed-use buildings, broad avenue, readable storefront architecture", "高層建築の都市中心部。"),
        base("alley", "路地裏", "empty narrow urban alley background, service doors, pipes, signs, layered side passages", "狭い街路の生活設備。"),
        base("shopping", "商店街", "empty covered shopping-street background, repeated storefronts, overhead arcade roof, clear central walkway", "連続店舗の通り。"),
        base("suburb", "郊外住宅街", "empty suburban residential background, varied houses, sidewalks, utility details, gentle street curve", "落ち着いた住宅地。"),
        base("rooftop", "都市屋上", "empty city rooftop background, safety railings, ventilation equipment, layered skyline", "屋上設備と遠景都市。")
      ], BACKGROUND_VARIANTS, { kind:"item", selection:"single" }),
      group("interior", "🏠 室内・日常施設", "暮らしと仕事の室内40景。", [
        base("living", "居間・リビング", "empty lived-in living-room background, seating area, low table, shelves, clear circulation space", "日常的な居間。"),
        base("kitchen", "台所・キッチン", "empty functional kitchen background, counters, storage, sink, cooking area, organized utensils", "調理設備のある室内。"),
        base("library", "図書室・書庫", "empty library background, tall bookcases, reading desks, ladders, layered aisle depth", "本棚が続く静かな空間。"),
        base("workshop", "工房・作業場", "empty craft workshop background, sturdy workbenches, organized tools, material shelves, open work zone", "道具と材料の作業空間。")
      ], BACKGROUND_VARIANTS, { kind:"item", selection:"single" }),
      group("heritage", "🏛️ 歴史・建築様式", "城、寺院、宮殿、遺跡、工業建築50景。", [
        base("castle", "石造城塞", "empty stone castle background, defensive walls, gatehouse, towers, layered courtyards", "防御構造を持つ石造建築。"),
        base("temple", "柱列神殿", "empty monumental temple background, repeated columns, broad steps, deep central sanctuary axis", "柱と階段の宗教建築。"),
        base("palace", "宮殿大広間", "empty palace great-hall background, high ceiling, ceremonial stairs, galleries, symmetrical architectural axis", "儀礼向けの大空間。"),
        base("ruins", "古代遺跡", "empty ancient-ruin background, broken masonry, half-buried foundations, carved fragments, layered passageways", "崩れた古代構造物。"),
        base("industrial", "産業革命工場", "empty historic industrial-interior background, iron trusses, brick walls, large mechanical housings, elevated walkways", "煉瓦と鉄骨の工業建築。")
      ], BACKGROUND_VARIANTS, { kind:"item", selection:"single" }),
      group("fantasy", "🏰 幻想世界", "空中都市・精霊森・地下都・巨塔40景。", [
        base("floating-city", "空中都市", "uninhabited floating-city background, suspended districts, bridges between islands, layered clouds below", "空に浮く都市群。"),
        base("spirit-grove", "精霊樹林", "uninhabited enchanted-grove background, luminous ancient trees, circular stone clearings, subtle floating motes", "幻想的な森の聖域。"),
        base("undercity", "地下大都市", "uninhabited subterranean-city background, immense cavern, terraced architecture, bridges, deep vertical layers", "巨大洞窟に広がる都市。"),
        base("mage-tower", "魔導巨塔", "uninhabited colossal magic-tower interior background, concentric platforms, suspended stairways, engraved structural rings", "術式構造を持つ塔内。")
      ], BACKGROUND_VARIANTS, { kind:"item", selection:"single" }),
      group("scifi", "🛰️ SF・未来施設", "宇宙港、研究所、船内、機械都市40景。", [
        base("spaceport", "宇宙港", "empty futuristic spaceport background, docking platforms, service gantries, distant launch towers", "大型発着設備。"),
        base("laboratory", "先端研究所", "empty advanced laboratory background, sealed workstations, transparent partitions, modular instruments", "清潔な研究施設。"),
        base("starship", "宇宙船内部", "empty starship interior background, ribbed corridors, navigation panels, sealed bulkhead doors", "宇宙船の通路・区画。"),
        base("machine-city", "機械都市", "uninhabited machine-city background, stacked mechanical architecture, transit rails, immense moving structures", "機械構造が都市化した景観。")
      ], BACKGROUND_VARIANTS, { kind:"item", selection:"single" }),
      group("environment", "🌦️ 季節・気候レイヤー", "元背景へ加える環境条件40種。", [
        base("spring", "春の環境層", "background-only early-spring environment layer, fresh buds, scattered petals, mild moisture", "春の植物と空気を追加。"),
        base("summer", "夏の環境層", "background-only midsummer environment layer, dense foliage, heat shimmer, strong seasonal growth", "夏の密度と熱気を追加。"),
        base("autumn", "秋の環境層", "background-only autumn environment layer, dry leaves, muted warm vegetation, crisp air", "紅葉と乾いた空気を追加。"),
        base("winter", "冬の環境層", "background-only winter environment layer, bare branches, frost, thin snow accumulation", "冬枯れと霜を追加。")
      ], BACKGROUND_VARIANTS, { kind:"part", selection:"multi" }),
      group("stage", "🎭 舞台・抽象空間", "撮影、劇場、夢、巨大スケール30景。", [
        base("studio", "撮影スタジオ", "empty photography-studio background, seamless backdrop, visible light stands, marked floor area", "撮影設備のあるスタジオ。"),
        base("theater", "劇場舞台", "empty theater-stage background, curtains, proscenium arch, layered wings, visible stage floor", "舞台機構を持つ劇場。"),
        base("surreal", "夢幻抽象空間", "uninhabited surreal abstract background, suspended geometric planes, impossible stairs, layered negative space", "現実法則から外れた空間。")
      ], BACKGROUND_VARIANTS, { kind:"item", selection:"single" }),
      group("modifier", "🔬 背景密度・奥行き調整", "場所を変えず描写量だけ調整する20部品。", [
        base("depth", "背景奥行き階層", "background-only foreground middle-ground and distance separation, original location preserved", "前景・中景・遠景を分ける。"),
        base("density", "環境ディテール密度", "background-only controlled architectural and environmental micro-detail, original location preserved", "場所固有の細部を増やす。")
      ], BACKGROUND_VARIANTS, { kind:"part", selection:"multi" })
    ]
  });

  const effect = buildCollection({
    key:"effect", section:"effect", registerVersion:500, tone:"violet",
    eyebrow:"EFFECT FORGE / 魔法・必殺演出工房", title:"✨ 魔法・必殺技・演出特化コレクション",
    note:"元素・術式・衝撃・オーラ・漫画演出・粒子・ホログラム・決め技まで300種。",
    guide:"効果の種類を選び、色相・密度・輪郭を1つ決めます。人物の能力名や固有作品名は使わず、視覚的に描ける現象だけを出力します。背景・ポーズ・品質は固定しません。",
    groups:[
      group("element", "🔥 元素現象", "炎・水・氷・雷・風・土60種。", [
        base("fire", "炎の奔流", "controlled fire torrent effect, visible hot core, layered flame tongues, separated sparks", "流れる炎の主効果。"),
        base("water", "水流旋回", "spiraling water-current effect, transparent layered flow, suspended droplets, readable current direction", "水の渦と飛沫。"),
        base("ice", "氷晶展開", "expanding ice-crystal effect, branching facets, frost particles, clear growth direction", "結晶が広がる演出。"),
        base("lightning", "雷撃走査", "branching lightning effect, bright conductive core, secondary arcs, controlled discharge path", "稲妻の分岐と進路。"),
        base("wind", "風圧環", "compressed wind-ring effect, visible air distortion, curved motion streaks, lifted particles", "空気の圧力を輪で見せる。"),
        base("earth", "岩盤隆起", "rising stone-and-earth effect, fractured ground plates, suspended debris, clear upward force", "地面がせり上がる演出。")
      ], EFFECT_VARIANTS, { kind:"item", selection:"multi" }),
      group("magic", "🔮 術式・召喚", "魔法陣、ルーン、門、結界40種。", [
        base("circle", "多層魔法陣", "multi-layer magic-circle effect, concentric glyph rings, precise radial markings, controlled glow", "幾重もの円形術式。"),
        base("rune", "浮遊ルーン群", "floating rune effect, distinct glyph plates, layered orbit paths, readable spacing", "文字記号が周回する。"),
        base("portal", "転移門", "arcane portal effect, stable circular opening, layered spatial distortion, clear inner depth", "空間を開く門。"),
        base("barrier", "防護結界", "protective barrier effect, coherent curved surface, impact ripples, visible boundary thickness", "透明な防御面。")
      ], EFFECT_VARIANTS, { kind:"item", selection:"multi" }),
      group("impact", "💥 衝撃・戦闘ヒット", "斬撃、打撃、爆発、貫通40種。", [
        base("slash", "斬撃軌跡", "curved slash-trail effect, sharp leading edge, fading energy wake, clear swing direction", "刃の通過線。"),
        base("strike", "打撃衝撃", "impact-burst effect, compressed contact core, radial shock lines, displaced dust", "接触点から広がる衝撃。"),
        base("explosion", "爆発雲", "controlled explosion effect, bright central flash, layered pressure cloud, separated debris", "中心から膨張する爆発。"),
        base("pierce", "貫通光条", "piercing energy-line effect, narrow luminous core, entry-and-exit flare, straight directional wake", "細い貫通軌跡。")
      ], EFFECT_VARIANTS, { kind:"item", selection:"multi" }),
      group("aura", "🌌 オーラ・状態異常", "加護、威圧、呪い、回復40種。", [
        base("blessing", "加護オーラ", "protective blessing aura, layered soft halo, upward fine particles, stable boundary", "守護の光をまとう。"),
        base("pressure", "威圧オーラ", "intimidating pressure aura, dense downward energy flow, subtle space distortion", "重い圧力感。"),
        base("curse", "呪詛オーラ", "curse aura effect, broken glyph fragments, creeping dark tendrils, controlled boundary", "不穏な侵食表現。"),
        base("healing", "治癒オーラ", "healing aura effect, gentle rising motes, soft concentric pulses, clear restorative flow", "穏やかな回復光。")
      ], EFFECT_VARIANTS, { kind:"item", selection:"multi" }),
      group("graphic", "💬 漫画・モーション記号", "速度線、集中線、残像30種。", [
        base("speedline", "速度線", "graphic speed-line effect, consistent directional convergence, clean subject separation", "移動方向を強める線。"),
        base("focusline", "集中線", "graphic focus-line effect, radial convergence toward one focal point, controlled line density", "注目点へ線を集める。"),
        base("afterimage", "多重残像", "controlled motion-afterimage effect, sequential silhouette offsets, clear primary position", "動きの連続を残像で示す。")
      ], EFFECT_VARIANTS, { kind:"part", selection:"multi" }),
      group("particle", "🌸 環境粒子・舞い物", "花弁、羽、火花30種。", [
        base("petal", "舞う花弁", "airborne petal-particle effect, varied depth scale, coherent wind direction, sparse foreground overlap", "花弁の流れを追加。"),
        base("feather", "舞う羽根", "airborne feather-particle effect, layered slow rotation, coherent drift direction", "羽根が漂う演出。"),
        base("spark", "微細な火花", "fine spark-particle effect, varied trail lengths, controlled density, clear emission direction", "細かな発光粒子。")
      ], EFFECT_VARIANTS, { kind:"part", selection:"multi" }),
      group("hologram", "🧿 ホログラム・情報演出", "UI環、投影図、データ雨30種。", [
        base("hud", "環状HUD", "holographic circular HUD effect, layered interface rings, readable segmented markers, transparent projection", "対象周囲の情報環。"),
        base("schematic", "立体投影図", "holographic three-dimensional schematic effect, wireframe layers, labeled structural nodes without readable text", "構造を立体線画で投影。"),
        base("data-rain", "データ粒子雨", "falling digital-particle effect, vertical segmented light traces, varied depth, no readable text", "縦方向の情報粒子。")
      ], EFFECT_VARIANTS, { kind:"item", selection:"multi" }),
      group("finisher", "🌠 必殺技フィニッシュ", "天を裂く・地を割る・空間停止30種。", [
        base("skybreak", "天裂光柱", "finishing-move skybreak effect, immense vertical energy column, parted cloud layers, radial ground illumination", "上空へ抜ける巨大光柱。"),
        base("groundbreak", "大地断裂", "finishing-move groundbreak effect, expanding fractured terrain lines, rising debris wall, clear impact epicenter", "地面を割る大衝撃。"),
        base("timefreeze", "時空停止演出", "finishing-move time-freeze effect, suspended particles, concentric temporal distortion rings, sharply isolated motion", "動きが止まった空間表現。")
      ], EFFECT_VARIANTS, { kind:"set", selection:"multi" })
    ]
  });

  const formal = buildCollection({
    key:"formal", section:"attire", registerVersion:500, tone:"rose",
    eyebrow:"CEREMONIAL WARDROBE / 礼装アカシック", title:"👑 ドレス・礼装特化コレクション",
    note:"夜会・式典・宮廷・仕事・伝統・幻想・ユニセックス・調整まで240着。",
    guide:"完成礼装を1着選び、襟・袖・裾・装飾を必要な分だけ追加します。着用者の性別・年齢・髪・体型・背景・ポーズ・品質は固定しません。",
    groups:[
      group("evening", "🌙 夜会・舞踏会", "ドレスと夜会服40着。", [
        base("ballgown", "舞踏会ボールガウン", "formal ball gown, structured fitted bodice, full floor-length skirt, layered petticoat silhouette", "大きな裾の舞踏会礼装。"),
        base("evening", "流線イブニングドレス", "formal evening gown, elongated clean silhouette, floor-length skirt, restrained draped neckline", "縦の線を重視した夜会服。"),
        base("cocktail", "カクテル礼装", "formal cocktail attire, knee-to-calf length tailored garment, refined neckline, controlled volume", "中丈の社交礼装。"),
        base("tuxedo", "タキシード礼装", "formal unisex tuxedo ensemble, structured dinner jacket, crisp shirt front, tailored trousers, bow tie", "性別を固定しない夜会スーツ。")
      ], FORMAL_VARIANTS, { kind:"set", selection:"single" }),
      group("ceremony", "💍 式典・婚礼", "婚礼、卒業、授賞30着。", [
        base("wedding", "婚礼ロングドレス", "ceremonial wedding gown, structured bodice, long layered skirt, detachable train, restrained veil attachment points", "婚礼用の長い礼装。"),
        base("graduation", "卒業式礼装", "formal graduation ensemble, long ceremonial robe, structured shoulder yoke, clean front closure, academic hood", "学位式典向け。"),
        base("award", "授賞式礼装", "formal award-ceremony ensemble, refined tailored silhouette, clean statement collar, restrained metallic accents", "表彰舞台向け。")
      ], FORMAL_VARIANTS, { kind:"set", selection:"single" }),
      group("court", "🏰 宮廷・王侯", "宮廷服、謁見服、外交服30着。", [
        base("court-gown", "宮廷大礼服", "court ceremonial gown, structured torso, layered floor-length skirt, formal mantle attachment, heraldic trim zones", "宮廷儀礼用の大礼服。"),
        base("audience", "謁見礼装", "formal audience attire, high structured collar, long fitted coat, layered sash, precise cuff details", "謁見・任官向け。"),
        base("diplomatic", "外交使節礼装", "formal diplomatic ensemble, tailored long coat, ceremonial sash, polished boots, restrained insignia positions", "外交儀礼用の一式。")
      ], FORMAL_VARIANTS, { kind:"set", selection:"single" }),
      group("business", "💼 仕事・公式行事", "スーツ、制服、舞台司会30着。", [
        base("business-suit", "公式ビジネススーツ", "formal unisex business suit, tailored jacket, pressed shirt, straight trousers, restrained neckwear", "公式会議向け。"),
        base("service-uniform", "式典サービス制服", "formal service uniform, structured jacket, clean shirt, tailored lower garment, precise insignia zones", "接遇・式典の制服。"),
        base("host", "司会・プレゼンター礼装", "formal presenter ensemble, clean tailored silhouette, statement lapel, movement-friendly fitted layers", "舞台司会に適した礼装。")
      ], FORMAL_VARIANTS, { kind:"set", selection:"single" }),
      group("traditional", "🎎 伝統儀礼", "和・東アジア・中東系の抽象的礼装30着。", [
        base("japanese", "和式儀礼装束", "formal Japanese-inspired ceremonial attire, layered wrapped robes, structured wide sash, long controlled sleeves", "特定人物を固定しない和式礼装。"),
        base("east-asian", "東アジア宮廷風礼装", "formal East-Asian-court-inspired attire, crossed collar layers, long structured outer robe, restrained embroidered borders", "抽象化した宮廷風の重ね着。"),
        base("west-asian", "西アジア宮廷風礼装", "formal West-Asian-court-inspired attire, long tailored robe, layered sash, geometric embroidered borders, structured shoulder cape", "抽象化した長衣礼装。")
      ], FORMAL_VARIANTS, { kind:"set", selection:"single" }),
      group("fantasy", "✨ 幻想礼装", "星、海、森を抽象化した30着。", [
        base("astral", "星界礼装", "fantasy formal attire, layered star-map embroidery, long structured mantle, geometric celestial trim", "星図意匠の礼装。"),
        base("tide", "潮廷礼装", "fantasy formal attire, wave-layered hem, pearl-like structured trim, long flowing outer panels", "海の層を意匠化。"),
        base("forest", "樹冠礼装", "fantasy formal attire, leaf-geometry embroidery, layered bark-like structured panels, long ceremonial cape", "森林意匠の礼装。")
      ], FORMAL_VARIANTS, { kind:"set", selection:"single" }),
      group("unisex", "🧭 メンズ・ユニセックス礼装", "着用者の性別を英語promptで固定しない30着。", [
        base("tailcoat", "燕尾服", "unisex formal tailcoat ensemble, fitted double-breasted front, long split tails, crisp shirt, tailored trousers", "古典的な夜会スーツ。"),
        base("mandarin", "立襟ロングスーツ", "unisex formal high-collar long-suit ensemble, concealed front closure, straight tailored trousers, structured cuffs", "縦長の立襟礼装。"),
        base("cape-suit", "ケープスーツ", "unisex formal cape-suit ensemble, tailored inner suit, shoulder-fastened half cape, clean trouser line", "スーツと短い外套の一式。")
      ], FORMAL_VARIANTS, { kind:"set", selection:"single" }),
      group("modifier", "✂️ 礼装専用調整", "元衣装を残して礼装要素だけ足す20部品。", [
        base("silhouette", "礼装シルエット調整", "formalwear-only structured waist and controlled hem-volume adjustment, original garment identity preserved", "腰線と裾量だけを整える。"),
        base("trim", "礼装装飾調整", "formalwear-only restrained embroidery beadwork and ceremonial piping, original garment identity preserved", "刺繍・縁取りだけを追加。")
      ], FORMAL_VARIANTS, { kind:"part", selection:"multi" })
    ]
  });

  const armor = buildCollection({
    key:"armor", section:"attire", registerVersion:501, tone:"steel",
    eyebrow:"ARMOR VAULT / 鎧・戦闘衣装庫", title:"🛡️ 鎧・戦闘衣装特化コレクション",
    note:"軽装・中装・重装・歴史風・幻想・SF・防護服・損耗調整まで240着。",
    guide:"防御段階を1つ選び、素材・可動部・損耗状態を後から調整します。人物の性別・種族・体型・武器・背景・ポーズ・品質は固定しません。",
    groups:[
      group("light", "🪶 軽装鎧", "機動性を優先する30着。", [
        base("leather", "積層革鎧", "light layered leather armor, reinforced torso panels, flexible shoulder guards, secured utility belt", "革系の軽防具。"),
        base("scout", "斥候軽装", "light scout armor, fitted protective vest, compact forearm guards, knee protection, quiet flexible layers", "探索向けの軽装。"),
        base("duelist", "決闘者軽鎧", "light duelist armor, asymmetrical shoulder guard, fitted chest protection, flexible fencing gloves, tall boots", "片側防御を強めた軽鎧。")
      ], ARMOR_VARIANTS, { kind:"set", selection:"single" }),
      group("medium", "⚔️ 中装鎧", "防御と可動の均衡30着。", [
        base("brigandine", "ブリガンダイン", "medium brigandine armor, riveted internal plates, fitted torso coat, articulated shoulder protection", "鋲留め板を内蔵した中装。"),
        base("lamellar", "札甲・ラメラー", "medium lamellar armor, overlapping laced plates, articulated skirt guards, flexible arm protection", "小札を連ねた中装。"),
        base("mercenary", "傭兵中装", "medium mercenary armor, mixed plate-and-mail protection, reinforced gambeson, practical pouches", "複合素材の実戦装備。")
      ], ARMOR_VARIANTS, { kind:"set", selection:"single" }),
      group("heavy", "🏰 重装鎧", "全身板金と大防御30着。", [
        base("plate", "全身板金鎧", "heavy full plate armor, articulated torso and limb plates, enclosed joint protection, balanced helmet", "全身を覆う板金鎧。"),
        base("siege", "攻城重装", "heavy siege armor, reinforced layered breastplate, broad shoulder plates, thick limb guards, grounded boots", "攻城戦向けの大型装甲。"),
        base("guardian", "守護騎士重装", "heavy guardian armor, broad shield-side shoulder protection, layered chest plates, articulated long tassets", "防衛役の重装。")
      ], ARMOR_VARIANTS, { kind:"set", selection:"single" }),
      group("heritage", "🏺 歴史風鎧", "古代・中世・東洋風30着。", [
        base("classical", "古典胸甲装備", "historical-inspired classical armor, shaped metal cuirass, layered protective skirt strips, reinforced greaves", "古代地中海風を抽象化。"),
        base("medieval", "中世騎士装備", "historical-inspired medieval armor, mail underlayer, plate torso, articulated gauntlets, practical surcoat", "中世西洋風を抽象化。"),
        base("eastern", "東洋武者装備", "historical-inspired East-Asian warrior armor, lamellar torso, layered shoulder guards, segmented skirt armor", "東アジア武具を抽象化。")
      ], ARMOR_VARIANTS, { kind:"set", selection:"single" }),
      group("fantasy", "🐉 幻想鎧", "竜・聖域・深淵意匠30着。", [
        base("dragon", "竜鱗鎧", "fantasy dragon-scale armor, overlapping scale plates, horn-shaped reinforced edges, articulated tail-free silhouette", "竜意匠の防具。"),
        base("sanctuary", "聖域守護鎧", "fantasy sanctuary armor, bright layered plates, wing-like shoulder geometry, restrained sacred engravings", "光と翼形状の守護鎧。"),
        base("abyss", "深淵装甲", "fantasy abyss armor, dark segmented plates, recessed luminous seams, asymmetrical protective ridges", "深海・深淵意匠の装甲。")
      ], ARMOR_VARIANTS, { kind:"set", selection:"single" }),
      group("scifi", "🤖 SF・機動装甲", "戦術服、外骨格、宇宙装甲30着。", [
        base("tactical", "近未来戦術装甲", "science-fiction tactical armor, modular torso plates, flexible undersuit, compact sensor mounts, sealed knee guards", "モジュール式の近未来防具。"),
        base("exosuit", "動力外骨格", "science-fiction powered exosuit armor, external articulated support frame, protected joints, compact power unit", "身体を補助する外骨格。"),
        base("space", "宇宙作戦装甲", "science-fiction space-operation armor, sealed pressure underlayer, rigid torso shell, maneuvering attachment points", "真空活動向け装甲。")
      ], ARMOR_VARIANTS, { kind:"set", selection:"single" }),
      group("protective", "⛑️ 非戦闘防護服", "救助・危険環境向け20着。", [
        base("rescue", "災害救助装備", "protective rescue suit, reinforced helmet, high-visibility panels, impact guards, secured tool attachment points", "救助活動向け。"),
        base("hazard", "危険環境防護服", "sealed hazardous-environment suit, filtered helmet, layered protective shell, sealed gloves and boots", "有害環境向け。")
      ], ARMOR_VARIANTS, { kind:"set", selection:"single" }),
      group("modifier", "🔧 装甲改造・損耗", "元鎧を残して後付けする40部品。", [
        base("joint", "可動関節強化", "armor-only articulated joint reinforcement, clear flexible gaps, original armor silhouette preserved", "肘・膝・肩の可動を改善。"),
        base("layer", "追加装甲板", "armor-only removable reinforcement plates, secured attachment points, original armor identity preserved", "必要部位へ装甲を追加。"),
        base("weather", "歴戦損耗", "armor-only controlled battle wear, scratches dents and chipped paint without catastrophic breakage", "傷と使用感を追加。"),
        base("heraldry", "部隊紋章", "armor-only restrained heraldic markings and unit-color trims, functional surfaces preserved", "紋章と識別色を追加。")
      ], ARMOR_VARIANTS, { kind:"part", selection:"multi" })
    ]
  });

  const vehicle = buildCollection({
    key:"vehicle", section:"accessories", registerVersion:501, tone:"amber",
    eyebrow:"MOBILITY WORKSHOP / 乗り物・メカ・騎乗工房", title:"🚗 乗り物・メカ・騎乗特化コレクション",
    note:"陸路・海空・小型移動・メカ・宇宙・幻想騎乗・動物用具・改造まで240種。",
    guide:"乗り物本体を1つ選び、必要な時だけ積載・外装・走行状態を追加します。人物・運転者・動物本体・背景・ポーズ・品質は固定しません。動物騎乗具は生物棚と組み合わせてください。",
    groups:[
      group("road", "🚙 陸上車両", "乗用・貨物・二輪30台。", [
        base("car", "汎用乗用車", "generic road car, four-door body, clearly defined wheels, practical cabin proportions", "固有メーカーを持たない乗用車。"),
        base("truck", "貨物トラック", "generic cargo truck, separated cab and load bed, reinforced chassis, visible utility mirrors", "荷物運搬用の車両。"),
        base("motorcycle", "オートバイ", "generic motorcycle, exposed frame, two clearly aligned wheels, practical fuel tank and seat", "二輪の動力車。")
      ], VEHICLE_VARIANTS, { kind:"item", selection:"single" }),
      group("transit", "🚆 鉄道・船・航空", "列車、船、飛行機30機。", [
        base("train", "鉄道列車", "generic passenger train, multiple connected cars, clear rail bogies, streamlined front cab", "旅客用の鉄道車両。"),
        base("ship", "中型航海船", "generic medium ocean-going vessel, clear hull, deckhouse, mast equipment, visible lifeboat positions", "海上航行する船。"),
        base("aircraft", "固定翼航空機", "generic fixed-wing aircraft, balanced wings, clear cockpit, landing gear, twin control surfaces", "固有機種を持たない航空機。")
      ], VEHICLE_VARIANTS, { kind:"item", selection:"single" }),
      group("personal", "🛹 小型・個人移動", "自転車、ボード、車椅子30台。", [
        base("bicycle", "自転車", "generic bicycle, diamond frame, two aligned wheels, chain drive, practical handlebar and saddle", "人力二輪車。"),
        base("board", "走行ボード", "personal ride board, stable deck, clearly visible wheel or hover units, practical foot placement area", "地上または浮上式の小型板。"),
        base("wheelchair", "機動車椅子", "modern mobility wheelchair, two main wheels, front casters, supportive seat, accessible controls", "移動補助の車椅子。")
      ], VEHICLE_VARIANTS, { kind:"item", selection:"single" }),
      group("mecha", "🤖 メカ・ロボット", "人型、作業、四脚、巨大機40機。", [
        base("humanoid", "人型機動メカ", "fictional humanoid mobile mecha, articulated limbs, armored torso, clearly separated mechanical joints", "人型の搭乗・遠隔機。"),
        base("worker", "作業用メカ", "fictional industrial work mecha, reinforced manipulator arms, stable wide legs, visible tool mounts", "建設・作業向け機械。"),
        base("quadruped", "四脚機動メカ", "fictional quadruped mecha, four articulated load-bearing legs, central armored body, sensor head", "四脚で移動する機械。"),
        base("colossus", "巨大機動要塞", "fictional colossal mobile fortress, layered armored superstructure, multiple articulated support legs, visible hangar sections", "都市級の巨大移動構造。")
      ], VEHICLE_VARIANTS, { kind:"item", selection:"single" }),
      group("space", "🛸 宇宙・未来移動", "宇宙船、艇、浮上車30機。", [
        base("starship", "長距離宇宙船", "fictional long-range starship, distinct engine section, habitat modules, sensor arrays, docking ports", "長期航行向け宇宙船。"),
        base("shuttle", "軌道シャトル", "fictional orbital shuttle, compact lifting body, heat-shielded underside, maneuvering thrusters", "地上と軌道を往復する艇。"),
        base("hovercar", "浮上車", "fictional hover car, wheel-free low body, visible lift emitters, enclosed practical cabin", "地面から浮いて走る車。")
      ], VEHICLE_VARIANTS, { kind:"item", selection:"single" }),
      group("fantasy", "🐉 幻想乗り物", "飛空艇、帆走台車、魔導車30台。", [
        base("airship", "幻想飛空艇", "fantasy airship, suspended hull, multiple lift envelopes or arcane lift rings, visible rudders and deck", "空を航行する船。"),
        base("land-sailer", "砂海帆走車", "fantasy land sailer, wheeled or sled chassis, large controllable sail, reinforced steering rig", "風で地上を走る車。"),
        base("arcane-carriage", "魔導自走馬車", "fantasy self-propelled carriage, enclosed cabin, arcane drive housing, visible suspension, no draft animal", "動物なしで走る馬車形車両。")
      ], VEHICLE_VARIANTS, { kind:"item", selection:"single" }),
      group("mount", "🐎 動物騎乗具", "動物本体を含めず鞍と車だけ20種。", [
        base("saddle", "汎用騎乗鞍", "animal-mounted riding saddle and bridle equipment only, adjustable secure straps, balanced stirrups, no animal specified", "生物棚へ後付けする鞍具。"),
        base("cart", "牽引カート・荷車", "animal-drawn cart equipment only, two-or-four wheel chassis, visible harness attachment bar, no animal specified", "動物棚と組む牽引車。")
      ], VEHICLE_VARIANTS, { kind:"part", selection:"multi" }),
      group("modifier", "🔧 車両改造・走行状態", "本体を残して後付けする30部品。", [
        base("cargo", "積載・収納拡張", "vehicle-only secured cargo racks and modular storage, original vehicle identity preserved", "荷物と収納を追加。"),
        base("body", "外装・保護パネル", "vehicle-only fitted protective body panels and guards, original vehicle identity preserved", "外装防護を追加。"),
        base("motion", "走行・航行状態", "vehicle-only coherent motion state, wheel rotation or propulsion wake and directional dust, original vehicle preserved", "移動中の現象を追加。")
      ], VEHICLE_VARIANTS, { kind:"part", selection:"multi" })
    ]
  });

  const collections = [hair, pose, weapon, background, effect, formal, armor, vehicle];
  const totalItems = collections.reduce(function(sum, collection){ return sum + collection.expectedCount; }, 0);
  const totalCategories = collections.reduce(function(sum, collection){ return sum + collection.expectedCategories; }, 0);

  window.SHIMA_OMNI_AKASHIC_V1 = {
    version:"1.0.0",
    packageVersion:"SHIMA OMNI AKASHIC v5.0",
    expectedCollections:8,
    expectedCount:2460,
    expectedCategories:246,
    totalItems:totalItems,
    totalCategories:totalCategories,
    collections:collections,
    byKey:Object.fromEntries(collections.map(function(collection){ return [collection.key, collection]; })),
    allItems:function(){ return collections.flatMap(function(collection){ return collection.allItems(); }); }
  };
})();
