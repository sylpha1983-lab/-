(function(){
  "use strict";

  // Preset Packs DB
  // - ここは「まとめて刺す」系のプリセット置き場。
  // - UI 側は window.__PP_DB.packs を読む（無ければ __PRESET_PACKS_DB / __QP_DB.packs も探索）。

  if (!window.__PP_DB) window.__PP_DB = {};

  // packs: { "Group Title": [ {label, val, desc?, links?}, ... ], ... }
  window.__PP_DB.packs = {
    "🎭 表情演出プリセット (Expression FX Packs)": [
{ type: "header", id: "fx_hdr_joy", label: "😊 喜び・笑い", desc: "喜び／笑い" },
    { label: "喜び演出セット", desc: "笑顔＋輝き瞳", val: "happy, smile, shining_eyes, sparkling_eyes" },
    { label: "無邪気演出セット", desc: "きゃっ＋目きら", val: "happy, open_mouth, wide-eyed, sparkling_eyes" },
    { label: "爆笑演出セット", desc: "大笑い＋涙目", val: "laughing, open_mouth, tears_in_eyes" },
    { label: "照れ笑い演出セット", desc: "赤面＋笑顔＋目逸らし", val: "blush, nervous_smile, looking_away, shy" },


{ type: "header", id: "fx_hdr_anger", label: "🔥 怒り・狂気", desc: "怒り／狂気" },
    { label: "怒り演出セット", desc: "眉圧＋歯噛み＋睨み", val: "angry, furrowed_brow, clenched_teeth, glaring" },
    { label: "狂気演出セット", desc: "瞳開き＋不穏な笑み", val: "crazy_eyes, wide-eyed, evil_smile, stare" },

{ type: "header", id: "fx_hdr_panic", label: "⚡ 焦り・パニック", desc: "焦り／動揺／驚き" },
    { label: "焦る演出セット", desc: "焦る＋目を見開く＋汗", val: "panic, wide-eyed, sweat, sweatdrop" },
    { label: "動揺演出セット", desc: "動揺＋目が泳ぐ＋汗", val: "nervous, blank_stare, sweatdrop, sweating" },
    { label: "驚き演出セット", desc: "驚き＋目見開き＋口開け", val: "surprised, wide-eyed, open_mouth, gasp" },

{ type: "header", id: "fx_hdr_fear", label: "🕯 恐怖・怯え", desc: "恐怖／怯え／泣き" },
    { label: "怯え演出セット", desc: "怯える＋震える＋涙目", val: "scared, trembling, watery_eyes, tears_in_eyes" },
    { label: "泣き演出セット", desc: "泣き＋嗚咽＋涙", val: "crying, sobbing, streaming_tears, trembling_lips" },

{ type: "header", id: "fx_hdr_disdain", label: "🧊 嫌悪・軽蔑", desc: "嫌悪／軽蔑" },
    { label: "嫌悪演出セット", desc: "嫌悪＋軽蔑＋目細め", val: "disgust, contempt, squinting, glaring" },

{ type: "header", id: "fx_hdr_restraint", label: "🫧 我慢・抑制", desc: "我慢／強がり／疲労" },
    { label: "我慢演出セット", desc: "唇噛み＋歯噛み＋緊張", val: "restrained, biting_lip, clenched_teeth, nervous_sweat" },
    { label: "強がり演出セット", desc: "強気＋涙目＋目逸らし", val: "forced_smile, watery_eyes, looking_away, trembling_lips" },
    { label: "疲労演出セット", desc: "虚ろ目＋ため息＋汗", val: "tired, glazed_eyes, sigh, sweating" },

{ type: "header", id: "fx_hdr_shy", label: "🌸 恥・照れ・誘惑", desc: "恥／照れ／誘惑" },
    { label: "照れ演出セット", desc: "全顔赤面＋目逸らし", val: "bashful, full-face_blush, looking_away, shy" },
    { label: "恥演出セット", desc: "鼻赤＋汗＋視線逸らし", val: "embarrassed, nose_blush, sweatdrop, looking_away" },
    { label: "誘惑演出セット", desc: "誘う＋視線＋唇", val: "seductive_smile, half-closed_eyes, parted_lips, stare" },

{ type: "header", id: "fx_hdr_sleepy", label: "💤 眠気・脱力", desc: "眠気／脱力" },
    { label: "眠気演出セット", desc: "とろ目＋口半開き", val: "sleepy_eyes, half-closed_eyes, open_mouth, tired" },

{ type: "header", id: "fx_hdr_r18", label: "🔞 R-18 心理（非露骨）", desc: "露骨ではなく心理寄り" },
    { label: "抑圧演出セット", desc: "視線逸らし＋汗＋口元固め", val: "suppressed_heat, looking_away, sweatdrop, trembling_lips" },
    { label: "背徳演出セット", desc: "ためらい＋赤面＋目逸らし", val: "forbidden, full-face_blush, looking_away, nervous" },
    { label: "支配演出セット", desc: "強い視線＋眉圧＋緊張", val: "dominant, glare, furrowed_brow, nervous_sweat" },
    { label: "従属演出セット", desc: "伏し目＋赤面＋震え", val: "submissive, downcast_eyes, blush, trembling" }
  ],
    "📸 写真系エフェクトパック (Photo Effect Packs)": [
      { label: "映画調（Anamorphic Film）", desc: "王道フィルム", val: "(cinematic lighting), (anamorphic lens flare), (subtle film grain), (soft contrast curve), (teal-orange color grading)" },
      { label: "柔光夢幻（Soft Bloom）", desc: "ポートレート柔光", val: "(soft lighting), (subtle bloom), (gentle highlight roll-off), (pastel color grading), (low contrast)" },
      { label: "低キー陰影（Low-Key Noir）", desc: "影で語る", val: "(low-key lighting), (strong shadow contrast), (vignette), (desaturated color grading), (shadow emphasis)" },
      { label: "透明感強調（High-Key Clean）", desc: "清潔・商品", val: "(high-key lighting), (even exposure), (minimal shadow), (clean color balance), (highlight preservation)" },
      { label: "クラシック写真（Vintage Film）", desc: "古典フィルム", val: "(vintage film look), (warm color cast), (subtle grain), (lowered saturation), (soft vignette)" },
      { label: "スナップ自然光（Natural Light Photo）", desc: "撮れた感", val: "(natural lighting), (realistic exposure), (soft shadow transition), (neutral color grading), (documentary style)" },
      { label: "ドラマ照明（Dramatic Portrait）", desc: "人物立体感", val: "(rim lighting), (face-focused lighting), (controlled highlights), (contrast emphasis), (portrait color grading)" },
      { label: "逆光演出（Backlight Glow）", desc: "エモ逆光", val: "(strong backlight), (light bloom), (rim glow), (atmospheric haze), (highlight diffusion)" },
      { label: "高精細写真（Studio Sharp）", desc: "スタジオ硬質", val: "(studio lighting), (high clarity), (sharp detail), (controlled reflections), (neutral color tone)" },
      { label: "夜景写真（Night City Photo）", desc: "夜ネオン", val: "(night lighting), (neon highlights), (high dynamic range), (urban color grading), (light reflections)" }
    ],

    "🎮 ゲーム/3D系エフェクトパック (Game & 3D Effect Packs)": [
      { label: "リアルタイムGI（Lumen GI）", desc: "ゲーム的光", val: "(unreal engine 5), (lumen global illumination), (realistic lighting), (ambient occlusion), (high dynamic range)" },
      { label: "PBR強調（PBR Boost）", desc: "材質の説得力", val: "(physically based rendering), (realistic textures), (specular response), (roughness variation), (clearcoat reflections)" },
      { label: "霧体積（Volumetric Fog）", desc: "空気が出る", val: "(volumetric lighting), (volumetric fog), (god rays), (atmospheric perspective), (light scattering)" },
      { label: "高密度ジオメトリ（Nanite Detail）", desc: "造形密度", val: "(nanite geometry), (ultra detailed), (micro details), (edge fidelity), (high poly)" },
      { label: "パストレ（Path Tracing）", desc: "物理寄り", val: "(path tracing), (ray tracing), (global illumination), (soft shadows), (accurate reflections)" },
      { label: "シネゲーム（Cinematic Game Look）", desc: "映画×ゲーム", val: "(cinematic lighting), (unreal engine rendering), (lens effects), (depth of field), (color grading)" },
      { label: "ハードシャドウ（Contact Shadow）", desc: "影を締める", val: "(contact shadow), (hard shadows), (ambient occlusion), (sharp edges), (high contrast)" },
      { label: "金属映り込み（Metal Reflections）", desc: "反射強め", val: "(environment reflections), (specular highlights), (anisotropic highlights), (reflection clarity), (polished metal)" }
    ],

    "📷 レンズ・ポスト (Lens & Post)": [
      { label: "広角シネマ", desc: "迫力", val: "(wide-angle lens), (cinematic framing), (strong perspective), (depth of field)" },
      { label: "ポートレート", desc: "背景ボケ", val: "(portrait lens), (shallow depth of field), (bokeh background)" },
      { label: "フィルムルック", desc: "質感", val: "(film grain), (Kodak Portra 400), (low contrast), (natural color grading)" },
      { label: "シャープ強め", desc: "輪郭", val: "(ultra sharp), (high detail), (micro-contrast)" }
    ],

    "💡 照明・ライティング (Lighting & Shadow)": [
      { label: "ソフト自然光", desc: "柔らか", val: "(soft natural lighting), (diffused light), (gentle shadows)" },
      { label: "リムライト", desc: "縁取り", val: "(rim light), (backlight), (glow outline)" },
      { label: "スポットライト", desc: "舞台", val: "(spotlight), (high contrast), (stage lighting)" },
      { label: "夜ネオン", desc: "都会", val: "(neon lighting), (wet reflections), (night city)" }
    ],

    "✨ 演出・エフェクト (Effects)": [
      { label: "シネマティック", desc: "映画感", val: "(cinematic lighting), (film still), (dramatic), (depth of field)" },
      { label: "ホログラム", desc: "SF演出", val: "(holographic), (scanlines), (glitch), (neon rimlight)" },
      { label: "ゴッドレイ", desc: "光条", val: "(god rays), (volumetric lighting), (dust particles)" },
      { label: "粒子・スパークル", desc: "きらめき", val: "(sparkles), (floating particles), (bokeh)" },
      { label: "モーションブラー", desc: "疾走", val: "(motion blur), (dynamic action), (speed lines)" }
    ],

    "📍 場所・シチュエーション (Place & Situation)": [
      { label: "都会・交差点", desc: "日常", val: "(busy city street), (scramble crossing), (daytime)" },
      { label: "夜のネオン街", desc: "サイバー", val: "(neon city), (rainy street), (reflections), (night)" },
      { label: "教室", desc: "学園", val: "(classroom), (sunlight through window), (school life)" },
      { label: "カフェ席", desc: "窓辺", val: "(window seat), (cafe), (bokeh), (relaxing)" },
      { label: "ファンタジー酒場", desc: "冒険", val: "(fantasy tavern), (quest board), (fireplace)" }
    ],

    "🎉 イベント・行事 (Events)": [
      { label: "学園祭", desc: "青春", val: "(school festival), (yukata), (lanterns), (booth stalls), (crowd)" },
      { label: "ハロウィン", desc: "仮装", val: "(halloween), (costume), (pumpkins), (spooky cute)" },
      { label: "クリスマス", desc: "冬", val: "(christmas), (snow), (lights), (warm atmosphere)" },
      { label: "新年", desc: "和", val: "(new year), (kimono), (shrine), (lucky charm)" }
    ],

    "🍽️ 食事・グルメ (Food)": [
      { label: "カフェ", desc: "ほっこり", val: "(cozy cafe), (coffee), (dessert), (warm light), (relaxing)" },
      { label: "居酒屋", desc: "夜", val: "(izakaya), (yakitori), (warm lantern light), (cheerful)" },
      { label: "屋台", desc: "祭り", val: "(food stall), (festival), (street food), (night lights)" }
    ],

    "🧑‍🎭 職業・なりきりパック (Job & Roleplay)": [
      { label: "魔法少女", desc: "変身・キラキラ", val: "(magical girl), (transformation), (sparkles), (cute pose), (pastel glow)" },
      { label: "騎士・戦士", desc: "王道バトル", val: "(knight), (warrior), (armor), (heroic), (battle-ready), (cinematic)" },
      { label: "忍者", desc: "隠密", val: "(ninja), (stealth), (smoke), (night mission), (dynamic pose)" },
      { label: "サイバーパンク", desc: "ネオン×未来", val: "(cyberpunk), (neon), (futuristic city), (techwear), (holograms)" },
      { label: "メイド", desc: "王道", val: "(maid), (frilly apron), (classic uniform), (gentle smile)" },
      { label: "バニーガール", desc: "パーティ", val: "(bunny girl), (cocktail party), (glossy fabric), (club lights)" },
      { label: "看護師", desc: "清潔感", val: "(nurse), (clean room), (medical), (soft light)" },
      { label: "制服・学生", desc: "学園", val: "(school uniform), (teen), (classroom), (青春), (anime school life)" }
    ],

    "🧰 テーマ別・持ち物セット (Item Sets)": [
      { label: "カメラ持ち", desc: "撮影", val: "(holding camera), (photographer), (candid), (street snap)" },
      { label: "剣と盾", desc: "冒険", val: "(sword), (shield), (adventure), (fantasy)" },
      { label: "魔導書", desc: "魔法", val: "(spellbook), (magic circle), (arcane), (glowing runes)" },
      { label: "傘", desc: "雨", val: "(umbrella), (rain), (wet street reflections), (moody)" },
      { label: "花束", desc: "告白", val: "(bouquet), (romantic), (soft blush), (gentle)" }
    ],

    "💞 感情・スリル (Emotions)": [
      { label: "ときめき", desc: "恋", val: "(romantic), (heart eyes), (soft blush), (gentle smile)" },
      { label: "緊張", desc: "ドキドキ", val: "(nervous), (sweat drop), (tense), (close-up)" },
      { label: "昂揚", desc: "興奮", val: "(excited), (wide eyes), (dynamic pose)" }
    ],

    "👻 ホラー・サスペンス (Horror & Suspense)": [
      { label: "廃墟", desc: "不穏", val: "(abandoned building), (fog), (eerie), (low light), (creepy)" },
      { label: "怪異", desc: "影", val: "(mysterious shadow), (dark atmosphere), (ominous)" },
      { label: "サスペンス", desc: "追跡", val: "(thriller), (chase), (dramatic shadows), (noir)" }
    ],

    "⚔️ 戦闘・アクション (Combat & Action)": [
      { label: "剣戟", desc: "斬撃", val: "(sword fight), (dynamic action), (motion blur), (dramatic)" },
      { label: "魔法戦", desc: "詠唱", val: "(magic battle), (spell casting), (glowing particles), (energy)" },
      { label: "銃撃", desc: "近未来", val: "(gunfight), (tactical), (cover), (muzzle flash)" }
    ],
        "🤖 メカ脳パック (Mechanical Packs)": [
      { label: "🧠 Mechanical Brain ON（設計者の脳）", desc: "設計思想・完成度の底上げ", val: "mechanical design, industrial design, precision engineering, production-ready design, functional design, orthographic design feel, clean silhouette, high fidelity details" },
      { label: "🔩 Hard Surface｜Clean（精密外装）", desc: "硬質で読みやすい外装言語", val: "sharp edges, chamfered edges, beveled edges, panel lines, tight tolerances, clean silhouette" },
      { label: "🔩 Hard Surface｜Dense（装甲密度）", desc: "装甲・パネル・部品感を濃く", val: "layered armor plates, interlocking panels, panel lines, greeble details, kitbash look, tight tolerances" },
      { label: "⚙️ Mechanical Structure｜Exposed（構造根拠）", desc: "動く理由・支える理由を足す", val: "exposed joints, actuators, hydraulic pistons, servo motors, gear assemblies, hinges, bearing housings, reinforced frame, load-bearing structure" },
      { label: "🏭 Manufactured Reality（製造の痕跡）", desc: "工程のリアリティで“玩具感”を消す", val: "machined parts, CNC machining marks, weld seams, rivets and bolts, brushed metal, anodized aluminum, powder-coated metal, heat discoloration, oil stains" },
      { label: "📐 Readable Mecha Detail（整理された密度）", desc: "注意ラベル/番号/整備印字で情報設計", val: "micro details, fine surface detail, decals, warning labels, serial numbers, maintenance markings, controlled greebles, edge wear, subtle scratches" },
      { label: "🌐 Mecha Context（文化圏）", desc: "軍用/宇宙/産業/近未来などの文脈", val: "mecha engineering, military hardware, aerospace hardware, robotics, industrial machinery, dieselpunk machinery, near-future tech" }
    ],

"🔞 R-18": [
      { type: "header", id: "r18_hdr_intensity", label: "⚙️ 強度・制御 (Intensity)", desc: "" },
      { label: "強度：Soft（匂わせ）", desc: "R-18の前提だけ薄く", val: "mature, subtle sensuality" },
      { label: "強度：Mild（官能）", desc: "穏やかに明確化", val: "mature, sensual atmosphere" },
      { label: "強度：Explicit（露骨寄り）", desc: "官能を強く", val: "mature, explicit sensual mood" },
      { label: "強度：Extreme（最終稿）", desc: "決定稿向け", val: "mature, extreme sensuality, explicit" },
      { type: "header", id: "r18_hdr_mood", label: "🎭 ムード・感情 (Mood)", desc: "" },
      { label: "ムード：誘惑", desc: "誘う空気", val: "seductive mood, alluring gaze" },
      { label: "ムード：親密", desc: "距離の近さ", val: "intimate atmosphere, close emotional distance" },
      { label: "ムード：余韻", desc: "静かな余韻", val: "afterglow mood, calm breathing, warm tone" },
      { label: "ムード：甘美", desc: "甘く熱い", val: "romantic heat, passionate mood" },
      { label: "ムード：緊張", desc: "張り詰めた空気", val: "tension, restrained desire" },
      { label: "ムード：背徳", desc: "禁忌の気配", val: "forbidden aura, taboo mood" },
      { type: "header", id: "r18_hdr_scene", label: "🏠 シーン・状況 (Scene)", desc: "" },
      { label: "シーン：私室（Boudoir）", desc: "私的空間", val: "boudoir setting, private room" },
      { label: "シーン：寝室（Bedside）", desc: "ベッド周り", val: "bedside scene, bedroom atmosphere" },
      { label: "シーン：二人きり", desc: "隔離された時間", val: "private moment, secluded atmosphere" },
      { label: "シーン：密会", desc: "隠された出会い", val: "secret encounter, hidden meeting" },
      { type: "header", id: "r18_hdr_camera", label: "📷 カメラ・アングル (Camera & Angle)", desc: "" },
      { label: "カメラ：接写", desc: "顔〜上半身寄り", val: "close-up emphasis, face focus" },
      { label: "カメラ：フレーミング", desc: "体の見せ方を整える", val: "body framing, composition focus" },
      { label: "カメラ：芸術構図", desc: "静的で美しい構図", val: "fine art composition, artistic framing" },
      { type: "header", id: "r18_hdr_pose", label: "🧍 ポーズ・身体 (Pose & Body)", desc: "" },
      { label: "ポーズ：体線強調", desc: "ラインを整える", val: "body line emphasis, graceful pose" },
      { label: "ポーズ：緊張姿勢", desc: "張り詰めた身体", val: "tense posture, restrained movement" },
      { label: "ポーズ：無防備", desc: "力を抜いた雰囲気", val: "relaxed posture, vulnerable pose" },
      { type: "header", id: "r18_hdr_lighting", label: "💡 ライティング・質感 (Lighting)", desc: "" },
      { label: "光：柔官能（Soft Focus）", desc: "柔らかい艶", val: "soft focus, subtle bloom" },
      { label: "光：陰影官能", desc: "陰で魅せる", val: "shadow emphasis, rim lighting" },
      { label: "光：夜の輪郭", desc: "夜＋縁取り", val: "night silhouette, rim light" },
      { label: "光：肌優先", desc: "肌の階調を守る", val: "soft lighting, gentle highlight roll-off" }
    ]
};
})();