// Auto-generated bundle for section 'expression'
// Contains 3 versions stacked in ascending order.

(function(){
// --- builder_ui.section.expression.v1.js ---
(function(){
  "use strict";
  const VERSION = 1; // 統合版: 基本感情のみ (視線はv2へ移動)
  const KEY = "expression";

  const EXPRESSION_DATA = {
    "😊 基本感情 (Basic Emotions)": [
      { ja: "笑顔 (スマイル)", en: "smile" }, { ja: "幸せそう", en: "happy" },
      { ja: "大笑い", en: "laughing" }, { ja: "微笑み", en: "light smile" },
      { ja: "怒り", en: "angry" }, { ja: "激怒", en: "furious" },
      { ja: "悲しい", en: "sad" }, { ja: "泣いている", en: "crying" },
      { ja: "真剣", en: "serious" }, { ja: "無表情", en: "expressionless" },
      { ja: "驚き", en: "surprised" }, { ja: "恥ずかしい", en: "embarrassed" },
      { ja: "照れ隠し", en: "shy" }, { ja: "神経質/不安", en: "nervous" }
    ]
  };

  const FACE_EFFECTS_GROUPS = [
    {
      title: "🌸 赤面・火照り (Blush & Heat)",
      ens: ["blush", "heavy blush", "full-face blush", "flushed face", "heart cheek mark", "floating hearts"]
    },
    {
      title: "😭 涙・泣き (Tears & Crying)",
      ens: ["tearing up", "tear tracks", "streaming tears", "watery eyes", "puffy eyes"]
    },
    {
      title: "💦 汗・焦り (Sweat & Panic)",
      ens: ["flying sweatdrops", "sweatdrop", "nervous sweat", "stress lines", "sweat running down face", "sigh"]
    },
    {
      title: "💥 漫符・記号 (Symbols & Manga FX)",
      ens: ["anger vein", "scribble symbol", "exclamation mark symbol", "question mark symbol", "music note symbol", "light bulb symbol", "sleeping bubble", "zzz", "dizzy stars", "steam from face", "spiral eyes effect", "shock lines", "gloom lines", "sparkle effect around face"]
    },
    {
      title: "🤒 不調・崩れ (Fatigue & Breakdown)",
      ens: ["blue lines on face", "shadow over face", "nosebleed", "drooling", "freckles", "bandage on face", "dark circles under eyes", "runny nose", "saliva trail", "pale face", "ominous shadow over face"]
    }
  ];



  const SECRET_SCENE_FACE_DATA = {
    "🔞 高揚・熱感 (Secret Heat & Arousal Faces)": [
      { ja: "熱っぽい顔", en: "heavy blush, parted lips, watery eyes, heated expression" },
      { ja: "高揚うるみ顔", en: "watery eyes, flushed cheeks, excited expression, trembling lips" },
      { ja: "火照り顔", en: "flushed face, half-lidded eyes, soft open mouth, warm expression" },
      { ja: "息荒れ顔", en: "panting, parted lips, flushed cheeks, unsteady breathing" }
    ],
    "🔞 恥じらい・照れ艶 (Secret Blushing & Shy Faces)": [
      { ja: "艶照れ顔", en: "shy blush, moist eyes, embarrassed smile, sensual expression" },
      { ja: "恥じらい顔", en: "looking away, deep blush, trembling lips, shy expression" },
      { ja: "目逸らし艶顔", en: "averted gaze, soft blush, half-lidded eyes, bashful expression" },
      { ja: "赤面うるみ顔", en: "heavy blush, watery eyes, parted lips, flustered face" }
    ],
    "🔞 余裕・誘い (Secret Tempting Faces)": [
      { ja: "誘い笑顔", en: "seductive smile, inviting gaze, half-lidded eyes, soft blush" },
      { ja: "艶視線顔", en: "sultry gaze, half-lidded eyes, glossy lips, teasing expression" },
      { ja: "甘い誘い顔", en: "gentle smile, inviting look, warm blush, alluring expression" },
      { ja: "余裕艶顔", en: "confident smile, calm gaze, seductive composure, soft blush" }
    ],
    "🔞 我慢・揺らぎ (Secret Restraint Faces)": [
      { ja: "我慢顔", en: "biting lip, trembling face, flushed cheeks, restrained expression" },
      { ja: "こらえ顔", en: "clenched expression, watery eyes, blushing, trying to endure" },
      { ja: "乱れかけ顔", en: "shaky breath, unfocused eyes, flushed face, wavering composure" },
      { ja: "崩れ寸前顔", en: "teary eyes, trembling lips, heavy blush, on-the-edge expression" }
    ],
    "🔞 とろけ・夢心地 (Secret Melting Faces)": [
      { ja: "艶とろ顔", en: "dreamy eyes, soft blush, parted lips, melting expression" },
      { ja: "夢心地艶顔", en: "blissful face, half-lidded eyes, warm blush, dreamy expression" },
      { ja: "うるみとろ顔", en: "watery eyes, relaxed smile, flushed face, melting look" },
      { ja: "溶け顔", en: "slack expression, dreamy smile, soft blush, dazed face" }
    ],
    "🔞 余韻・満ち足り (Secret Afterglow Faces)": [
      { ja: "余韻顔", en: "dazed smile, flushed cheeks, relaxed eyes, lingering afterglow" },
      { ja: "満ち足り顔", en: "satisfied smile, soft blush, relaxed face, fulfilled expression" },
      { ja: "力抜け顔", en: "slack shoulders, half-lidded eyes, loose expression, exhausted bliss" },
      { ja: "静かな満足顔", en: "calm smile, soft blush, peaceful satisfied expression" }
    ],
    "🔞 いたずら・挑発 (Secret Teasing & Provocative Faces)": [
      { ja: "挑発顔", en: "provocative smirk, daring gaze, teasing expression, half-lidded eyes" },
      { ja: "いたずら艶顔", en: "playful smile, sultry eyes, mischievous expression, soft blush" },
      { ja: "からかい艶顔", en: "teasing grin, alluring gaze, amused expression, warm blush" },
      { ja: "仕掛け顔", en: "scheming smile, seductive eyes, playful provocation, confident expression" }
    ],
    "🔞 支配・主導 (Secret Dominant Faces)": [
      { ja: "支配顔", en: "dominant gaze, composed smile, controlling presence, half-lidded eyes" },
      { ja: "主導顔", en: "confident expression, steady gaze, leading presence, calm smile" },
      { ja: "見下し艶顔", en: "condescending smile, sultry eyes, superior expression, teasing dominance" },
      { ja: "優位顔", en: "victorious smirk, confident gaze, superior composure, dominant expression" }
    ],
    "🔞 うるみ・涙目 (Secret Watery & Teary Faces)": [
      { ja: "うるみ顔", en: "watery eyes, trembling lashes, soft blush, emotional expression" },
      { ja: "涙目艶顔", en: "teary eyes, flushed cheeks, parted lips, sensual glossy expression" },
      { ja: "潤み見上げ顔", en: "upturned watery eyes, soft blush, pleading glossy look" },
      { ja: "泣き艶顔", en: "tearful eyes, trembling lips, heavy blush, emotionally melted expression" }
    ],
    "🔞 息乱れ・呼吸感 (Secret Breathless Faces)": [
      { ja: "息乱れ顔", en: "uneven breathing, parted lips, flushed face, dazed expression" },
      { ja: "荒息顔", en: "panting, trembling shoulders, open mouth, heated blush" },
      { ja: "呼吸熱顔", en: "hot breath, half-lidded eyes, flushed cheeks, unsteady expression" },
      { ja: "吐息顔", en: "soft exhale, relaxed lips, dreamy eyes, warm blush" }
    ],
    "🔞 視線・見つめ (Secret Gazing Faces)": [
      { ja: "見上げ艶顔", en: "upward sultry gaze, moist eyes, soft blush, inviting expression" },
      { ja: "見つめ艶顔", en: "locked gaze, half-lidded eyes, glossy lips, intense allure" },
      { ja: "流し目艶顔", en: "side glance, teasing eyes, soft smile, sensual expression" },
      { ja: "離せない顔", en: "unbroken gaze, entranced eyes, flushed face, unable to look away" }
    ],
    "🔞 口元・微開き (Secret Lips & Parted Mouth Faces)": [
      { ja: "口半開き顔", en: "slightly open mouth, dazed eyes, soft blush, breathless expression" },
      { ja: "唇震え顔", en: "trembling lips, watery eyes, flushed cheeks, wavering composure" },
      { ja: "噛み唇顔", en: "biting lip, heated blush, half-lidded eyes, restrained desire" },
      { ja: "声漏れ顔", en: "parted lips, shaky breath, trembling expression, flushed face" }
    ],
    "🔞 受け・委ね (Secret Yielding Faces)": [
      { ja: "委ね顔", en: "surrendered expression, relaxed eyes, soft blush, trusting face" },
      { ja: "身任せ顔", en: "letting-go expression, half-lidded eyes, warm blush, passive surrender" },
      { ja: "逆らえない顔", en: "helpless gaze, trembling lips, flushed cheeks, unable to resist" },
      { ja: "力抜け委ね顔", en: "loosened posture, slack lips, watery eyes, fully yielding expression" }
    ],
    "🔞 余裕崩れ (Secret Composure Breaking Faces)": [
      { ja: "余裕崩れ顔", en: "cracking smirk, shaken gaze, flushed face, composure slipping" },
      { ja: "強気崩れ顔", en: "broken bravado, trembling lips, heated blush, confidence falling apart" },
      { ja: "平静失い顔", en: "lost composure, unfocused eyes, uneven breathing, flushed cheeks" },
      { ja: "表情乱れ顔", en: "disturbed expression, watery eyes, trembling mouth, emotional breakdown" }
    ],
    "🔞 🔥 焦り・寸前 (Secret Instinctive Urgency)": [
      { ja: "焦らし顔", en: "restless eyes, flushed face, desperate heat, drooling, panting" },
      { ja: "張りつめ顔", en: "tense expression, focused eyes, biting lip, restrained heat" },
      { ja: "寸前硬直顔", en: "frozen in pleasure, rolling eyes, trembling lips, stiffened body, mindless heat" },
      { ja: "息止め顔", en: "holding breath, flushed cheeks, intense eyes, stiffened posture" }
    ],
    "🔞 ⚔ 反撃・主導奪取 (Secret Lecherous Takeover)": [
      { ja: "反撃笑顔", en: "lewd smile, dominant gaze, predatory smirk, flushed face" },
      { ja: "主導奪取顔", en: "confident expression, steady gaze, leading presence, calm smile" },
      { ja: "逆転余裕顔", en: "victorious smirk, confident gaze, superior composure, dominant expression" },
      { ja: "仕返し顔", en: "naughty grin, possessive look, teasing dominance, heavy breath" }
    ],
    "🔞 🫀 執着深化 (Secret Obsessive Lust)": [
      { ja: "離したくない顔", en: "clinging expression, lustful gaze, desperate attachment, heavy blush" },
      { ja: "強い執着顔", en: "intense obsession, dilated pupils, predatory eyes, deep desire" },
      { ja: "逃がさない顔", en: "unbroken gaze, entranced eyes, flushed face, unable to look away" },
      { ja: "目で縛る顔", en: "locked-on gaze, dilated pupils, predatory eyes, intense desire" }
    ],
    "🔞 👑 満足・優位 (Secret Corrupted Satisfaction)": [
      { ja: "満足勝ち顔", en: "satisfied smirk, blissful daze, euphoric dominance, flushed face" },
      { ja: "優位確信顔", en: "confident lewd smile, superior look, heavy breathing, mocking eyes" },
      { ja: "してやったり顔", en: "smug grin, satisfied eyes, playful confidence, triumphant expression" },
      { ja: "勝ち気満足顔", en: "confident smirk, steady gaze, relaxed face, certain victory expression" }
    ]
  };

  const SCENE_FACE_DATA = {
    "🌶 食リアクション (Food Reaction Faces)": [
      { ja: "辛い顔", en: "full-face blush, flushed face, tearing up, sweat beads, steam from face, tongue out, open mouth, shock lines" },
      { ja: "美味すぎて昇天顔", en: "sparkles on face, watery eyes, soft smile, rosy cheeks, floating hearts, blissful expression" },
      { ja: "酸っぱすぎる顔", en: "puckered lips, watery eyes, sweatdrop, confusion lines, shocked expression" },
      { ja: "熱すぎる顔", en: "full-face blush, steam from face, panic sweat, open mouth, shock lines" },
      { ja: "激辛悶絶顔", en: "full-face blush, tearing up, streaming tears, sweat beads, steam from face, tongue out, mouth wide open, agony, shock lines" },
      { ja: "美味感涙顔", en: "watery eyes, tearing up, blissful expression, soft smile, rosy cheeks, floating hearts, sparkles on face" },
      { ja: "熱々涙目顔", en: "full-face blush, watery eyes, tearing up, steam from face, panic sweat, open mouth, shock lines" },
      { ja: "酸っぱしわ顔", en: "puckered lips, wrinkled face, watery eyes, squeezed eyes, confusion lines, shocked expression" },
      { ja: "苦味崩壊顔", en: "grimace, twisted face, disgust, squeezed eyes, tongue out, stress lines, shock lines" }
    ],
    "🎭 キャラ性・演技 (Character & Dramatic Faces)": [
      { ja: "悪役顔", en: "evil face, sinister grin, wicked smirk, triumphant expression, plotting expression, narrowed eyes, cold gaze, shadowed eyes" },
      { ja: "勝者の顔", en: "smug smile, half-lidded eyes, confident look, triumphant expression" },
      { ja: "小悪魔の顔", en: "smirk, teasing look, half-lidded eyes, sparkle effect around face" },
      { ja: "企み顔", en: "plotting expression, narrowed eyes, smirk, shadow over eyes" },
      { ja: "冷酷悪役顔", en: "cold gaze, emotionless face, narrowed eyes, shadowed eyes, villainous aura, intimidating expression" },
      { ja: "狂気悪役顔", en: "manic grin, crazy eyes, wide eyes, twitching face, unhinged expression, shadow over face" },
      { ja: "悪役余裕顔", en: "sinister grin, half-lidded eyes, smug smile, composed expression, cold gaze" },
      { ja: "勝者余裕顔", en: "smug smile, half-lidded eyes, confident look, victorious expression, relaxed face" },
      { ja: "小悪魔あざと顔", en: "teasing smile, smug face, half-lidded eyes, playful wink, flirtatious expression" },
      { ja: "企み成就顔", en: "triumphant smirk, narrowed eyes, satisfied expression, villain smile, shadow over eyes" }
    ],
    "⚠ トラブル・出来事 (Situation Faces)": [
      { ja: "バレた時の顔", en: "panic sweat, shock lines, averted gaze, embarrassment lines, wide eyes" },
      { ja: "ホラー遭遇顔", en: "pale face, shock lines, wide eyes, trembling, sweatdrop" },
      { ja: "体調不良顔", en: "pale face, blank face, dark circles under eyes, runny nose" },
      { ja: "やらかし顔", en: "sweatdrop, confusion lines, embarrassed expression, averted gaze" },
      { ja: "バレ硬直顔", en: "wide eyes, frozen expression, panic sweat, shock lines, stiff face" },
      { ja: "失態青ざめ顔", en: "pale face, panic sweat, embarrassed expression, confusion lines, shock lines" },
      { ja: "ホラー絶叫顔", en: "screaming, wide eyes, pale face, trembling, shock lines, terror" },
      { ja: "寝不足限界顔", en: "dark circles under eyes, half-closed eyes, exhausted face, pale face, messy expression" },
      { ja: "不調ぐったり顔", en: "pale face, droopy eyes, dark circles under eyes, blank face, exhausted expression" }
    ],
    "🍽 食リアクション・拡張 (Expanded Food Reaction Faces)": [
      { ja: "幸福満面顔", en: "big smile, glowing face, soft blush, sparkling eyes, blissful expression, happy aura" },
      { ja: "一口感動顔", en: "wide eyes, soft smile, watery eyes, sparkles on face, amazed expression, rosy cheeks" },
      { ja: "口福とろけ顔", en: "melted smile, half-lidded eyes, rosy cheeks, blissful expression, dreamy face" },
      { ja: "猫舌困り顔", en: "panic sweat, pursed lips, watery eyes, troubled face, steam from face, flustered expression" },
      { ja: "甘味とろけ顔", en: "soft smile, dreamy eyes, rosy cheeks, blissful expression, floating hearts, relaxed face" },
      { ja: "爆食夢中顔", en: "focused eyes, puffed cheeks, eager expression, messy mouth, intense eating face, lively expression" }
    ],
    "😳 照れ・気まずさ (Embarrassed & Awkward Faces)": [
      { ja: "気まず笑い顔", en: "awkward smile, averted gaze, sweatdrop, embarrassed expression, stiff face" },
      { ja: "誤魔化し笑顔", en: "forced smile, shifting eyes, sweatdrop, nervous grin, embarrassed face" },
      { ja: "目逸らし赤面顔", en: "heavy blush, looking away, shy expression, lips pressed together, flustered face" },
      { ja: "褒められ照れ顔", en: "soft blush, shy smile, sparkling eyes, embarrassed expression, looking away" },
      { ja: "見られ硬直顔", en: "wide eyes, frozen smile, embarrassment lines, stiff face, panic sweat" },
      { ja: "言葉詰まり顔", en: "open mouth, hesitant expression, averted gaze, blush, nervous face, awkward pause" }
    ],
    "😱 パニック・事故 (Panic & Mishap Faces)": [
      { ja: "大惨事直前顔", en: "panic sweat, wide eyes, alarmed expression, shock lines, tense face" },
      { ja: "完全フリーズ顔", en: "blank stare, frozen expression, wide eyes, stiff face, shock lines" },
      { ja: "現実逃避顔", en: "empty smile, unfocused eyes, blank face, soul leaving body, awkward calm" },
      { ja: "修羅場突入顔", en: "sweat beads, gritted teeth, tense eyes, panic expression, crisis face" },
      { ja: "大汗焦り顔", en: "heavy sweat, flustered expression, wide eyes, panic face, trembling" },
      { ja: "泣き寸前顔", en: "watery eyes, trembling lips, panicked face, holding back tears, shocked expression" }
    ],
    "😈 悪役・企み (Villain & Plotting Faces)": [
      { ja: "薄笑い悪役顔", en: "thin smile, cold gaze, half-lidded eyes, villainous expression, shadow over eyes" },
      { ja: "見下し顔", en: "disdainful expression, lowered eyelids, slight smirk, cold gaze, superior attitude" },
      { ja: "愉悦悪役顔", en: "sadistic smile, delighted eyes, sinister grin, cruel amusement, villainous aura" },
      { ja: "黒幕満足顔", en: "satisfied smirk, shadowed eyes, composed expression, mastermind vibe, cold confidence" },
      { ja: "計画通り顔", en: "knowing grin, narrowed eyes, smug smile, plotting expression, satisfied face" },
      { ja: "勝利確信顔", en: "confident smirk, steady gaze, relaxed face, certain victory expression, intimidating calm" }
    ],
    "💤 疲労・不調 (Fatigue & Sickly Faces)": [
      { ja: "徹夜死に顔", en: "dark circles under eyes, lifeless eyes, exhausted face, pale face, empty expression" },
      { ja: "眠気限界顔", en: "half-closed eyes, drooping eyelids, yawning face, sleepy expression, tired blush" },
      { ja: "集中切れ顔", en: "blank stare, tired eyes, slack mouth, worn-out face, mental fatigue" },
      { ja: "熱っぽい顔", en: "flushed face, droopy eyes, weak expression, feverish blush, exhausted face" },
      { ja: "力尽き顔", en: "empty eyes, exhausted expression, pale face, limp face, drained energy" },
      { ja: "虚ろ疲労顔", en: "vacant eyes, dark circles under eyes, pale face, weak expression, listless face" }
    ],
    "👻 ホラー・恐怖 (Horror & Fear Faces)": [
      { ja: "血の気引き顔", en: "pale face, trembling lips, wide eyes, fear expression, blood draining from face" },
      { ja: "青ざめ凝視顔", en: "staring eyes, pale face, frozen fear, tense face, shock lines" },
      { ja: "息呑み顔", en: "sharp inhale, wide eyes, frozen mouth, tense expression, sudden fear" },
      { ja: "声失い顔", en: "silent scream, wide eyes, pale face, trembling, speechless terror" },
      { ja: "震え固まり顔", en: "shaking, frozen body, fearful eyes, pale face, stiff expression" },
      { ja: "背筋凍る顔", en: "cold sweat, horrified eyes, pale face, tense mouth, terror, dread" }
    ],
    "💘 魅了・小悪魔 (Seductive & Teasing Faces)": [
      { ja: "じっと誘惑顔", en: "seductive gaze, half-lidded eyes, slight smile, inviting look, alluring expression" },
      { ja: "甘え上目顔", en: "upturned eyes, soft blush, pleading smile, cute expression, affectionate face" },
      { ja: "からかい笑顔", en: "teasing smile, playful eyes, smug face, light blush, mischievous expression" },
      { ja: "流し目誘惑顔", en: "side glance, seductive smile, half-lidded eyes, alluring look, teasing expression" },
      { ja: "見透かし笑顔", en: "knowing smile, half-lidded eyes, calm gaze, teasing confidence, smug expression" },
      { ja: "思わせぶり顔", en: "ambiguous smile, soft gaze, slight blush, flirtatious expression, unreadable charm" }
    ],
    "🏆 勝利・達成 (Victory & Achievement Faces)": [
      { ja: "完全勝利顔", en: "triumphant smile, proud face, confident eyes, victory expression, composed confidence" },
      { ja: "してやったり顔", en: "smug grin, satisfied eyes, playful confidence, triumphant expression, relaxed face" },
      { ja: "ドヤ満足顔", en: "smug smile, raised chin, confident look, satisfied expression, prideful face" },
      { ja: "会心笑み顔", en: "knowing smile, confident eyes, fulfilled expression, soft smirk, success face" },
      { ja: "任務完了顔", en: "calm smile, relieved expression, steady eyes, composed face, mission accomplished vibe" },
      { ja: "逆転勝利顔", en: "victorious grin, intense eyes, relieved confidence, triumphant face, comeback energy" }    ],
    "💗 好意・ときめき (Affection & Heartflutter Faces)": [
      { ja: "好き漏れ顔", en: "soft blush, shy smile, eyes full of affection, flustered expression, heartwarming gaze" },
      { ja: "ときめき顔", en: "sparkling eyes, soft blush, lips slightly parted, enchanted expression, heart-throbbing look" },
      { ja: "胸きゅん顔", en: "warm blush, shining eyes, touched expression, gentle smile, overwhelmed with affection" },
      { ja: "恋うっとり顔", en: "half-lidded dreamy eyes, soft blush, relaxed smile, lovestruck expression, dreamy face" },
      { ja: "会えて嬉しい顔", en: "bright smile, watery eyes, joyful blush, relieved expression, happiness overflowing" },
      { ja: "見つめ照れ顔", en: "looking into someone's eyes, shy blush, nervous smile, flustered expression, bashful face" }
    ],
    "😊 喜び・幸福 (Joy & Happiness Faces)": [
      { ja: "嬉しさ満開顔", en: "full smile, glowing face, sparkling eyes, cheerful blush, happiness overflowing" },
      { ja: "幸福満面顔", en: "radiant smile, soft blush, warm eyes, deeply happy expression, blissful face" },
      { ja: "ご満悦顔", en: "satisfied smile, proud but soft expression, relaxed eyes, content face" },
      { ja: "報われ顔", en: "relieved smile, teary eyes, soft blush, fulfilled expression, emotional satisfaction" },
      { ja: "褒められ嬉し顔", en: "bashful smile, bright eyes, soft blush, pleased expression, happy reaction to praise" },
      { ja: "しみじみ幸せ顔", en: "gentle smile, calm eyes, soft blush, peaceful happiness, quietly fulfilled expression" }
    ],
    "✨ 期待・きらめき (Expectation & Sparkling Faces)": [
      { ja: "目輝き顔", en: "sparkling eyes, excited smile, eager expression, bright face, lively anticipation" },
      { ja: "期待満ち顔", en: "hopeful eyes, soft smile, uplifted expression, bright anticipation, gentle excitement" },
      { ja: "わくわく顔", en: "wide sparkling eyes, excited smile, eager expression, energetic anticipation" },
      { ja: "胸高鳴り顔", en: "slightly parted lips, bright eyes, soft blush, thrilled expression, heart-racing face" },
      { ja: "待ちきれない顔", en: "restless excitement, shining eyes, eager smile, impatient anticipation, lively face" },
      { ja: "希望きらめき顔", en: "radiant eyes, hopeful smile, soft glow, inspired expression, shining anticipation" }
    ],
    "🥺 甘え・お願い (Pleading & Needy Faces)": [
      { ja: "甘え上目顔", en: "puppy eyes, needy gaze, slightly upward eyes, soft pleading expression, tender dependence" },
      { ja: "おねだり顔", en: "begging face, asking expression, hopeful eyes, slightly pouting lips, cute request" },
      { ja: "お願い顔", en: "pleading expression, earnest eyes, gentle asking face, soft hopeful look" },
      { ja: "拗ね甘え顔", en: "sulky needy face, pouting lips, clingy expression, soft eyes, playful dependence" },
      { ja: "かまって顔", en: "attention-seeking face, needy expression, expectant eyes, subtle pout, wanting affection" },
      { ja: "許して顔", en: "sorry pleading face, apologetic eyes, timid begging expression, soft vulnerable look" }
    ],
    "🤝 信頼・安心 (Trust & Relief Faces)": [
      { ja: "安心しきり顔", en: "fully relieved face, relaxed expression, gentle calm eyes, soft smile, feeling safe" },
      { ja: "信頼まなざし顔", en: "trusting gaze, warm eyes, sincere gentle expression, soft relaxed face" },
      { ja: "ほっと安堵顔", en: "relieved face, soft exhale expression, calm relaxed features, quiet comfort" },
      { ja: "任せきり顔", en: "relying expression, trusting face, calm dependence, soft smile, leaving it to someone" },
      { ja: "守られ安心顔", en: "protected relieved face, safe expression, softened eyes, gentle comfort" },
      { ja: "心許し顔", en: "opened-heart expression, trusting relaxed face, gentle smile, emotional ease" }
    ],
    "🌸 癒やし・穏やか (Healing & Peaceful Faces)": [
      { ja: "癒やし微笑顔", en: "healing smile, gentle eyes, soft peaceful expression, calm warmth" },
      { ja: "穏やか微笑顔", en: "calm smile, relaxed eyes, serene expression, quiet tenderness" },
      { ja: "やさし包み顔", en: "embracing gentle face, warm eyes, soft caring expression, soothing presence" },
      { ja: "見守り笑顔", en: "watching-over smile, kind eyes, calm supportive expression, soft warmth" },
      { ja: "ほのぼの顔", en: "cozy peaceful face, gentle smile, relaxed features, heartwarming mood" },
      { ja: "安らぎ満ち顔", en: "restful expression, peaceful eyes, soft smile, filled with comfort" }
    ],
    "🎁 驚き・感激 (Surprise & Deep Emotion Faces)": [
      { ja: "感激うるみ顔", en: "moved teary eyes, touched expression, trembling smile, emotional warmth" },
      { ja: "うれし驚き顔", en: "happy surprise face, widened shining eyes, open smile, bright reaction" },
      { ja: "思わず息呑み顔", en: "gasping in amazement, breath-catching expression, widened eyes, emotional shock" },
      { ja: "胸打たれ顔", en: "deeply moved face, soft stunned eyes, emotional silence, touched expression" },
      { ja: "言葉失い顔", en: "speechless emotional face, stunned eyes, trembling lips, overwhelmed feeling" },
      { ja: "贈り物感激顔", en: "gift-received emotional face, watery eyes, grateful smile, overwhelmed happiness" }
    ],
    "🙌 達成・開放感 (Achievement & Release Faces)": [
      { ja: "やり切り顔", en: "accomplished face, relieved smile, loosened tension, fulfilled expression" },
      { ja: "達成満面顔", en: "achievement-filled smile, bright satisfied face, proud joy, fulfilled look" },
      { ja: "解放安堵顔", en: "released relief face, deep exhale, softened eyes, tension finally gone" },
      { ja: "勝ち抜き顔", en: "survived-and-won face, confident relief, strong satisfied expression" },
      { ja: "終わった顔", en: "it's finally over face, exhausted relief, slackened tension, liberated expression" },
      { ja: "報酬待ち顔", en: "reward-awaiting grin, excited relief, satisfied expectation, playful confidence" }
    ],
    "🤲 受け止め・包容 (Acceptance & Embrace Faces)": [
      { ja: "受け止め微笑顔", en: "accepting gentle smile, soft eyes, warm understanding expression" },
      { ja: "包み込み顔", en: "embracing face, caring eyes, protective smile, soft emotional warmth" },
      { ja: "大丈夫顔", en: "it's okay face, calm reassuring eyes, gentle supportive smile" },
      { ja: "寄り添い顔", en: "close comforting face, tender gaze, empathetic smile, quiet support" },
      { ja: "許し受容顔", en: "forgiving accepting face, softened eyes, kind expression, emotional openness" },
      { ja: "静か肯定顔", en: "quiet affirming face, calm smile, understanding eyes, peaceful approval" }
    ],
    "🤍 切なさ・余韻 (Bittersweet & Lingering Faces)": [
      { ja: "切なみ顔", en: "bittersweet face, fragile eyes, quiet ache, soft emotional tremble" },
      { ja: "名残惜し顔", en: "reluctant-to-part face, lingering gaze, soft sadness, tender restraint" },
      { ja: "しんみり顔", en: "wistful face, softened eyes, quiet reflection, subdued emotion" },
      { ja: "遠い目余韻顔", en: "lingering distant gaze face, reflective eyes, emotional afterglow, quiet memory" },
      { ja: "言えない想い顔", en: "unspoken feelings face, hesitant lips, moist eyes, hidden affection" },
      { ja: "余韻うるみ顔", en: "teary lingering emotion face, shimmering eyes, emotional aftertaste, quiet depth" }
    ],
    "🔥 闘志・気合 (Fighting Spirit & Determination Faces)": [
      { ja: "闘志燃え顔", en: "burning fighting spirit face, fierce eyes, heated resolve, battle-ready expression" },
      { ja: "気合満ち顔", en: "determination-filled face, focused eyes, gathered spirit, intense readiness" },
      { ja: "やる気全開顔", en: "fully fired-up face, energetic eyes, pumped-up mood, eager intensity" },
      { ja: "勝負顔", en: "game face, sharpened stare, serious focus, ready-to-win expression" },
      { ja: "食いしばり気合顔", en: "gritted-teeth determination face, tensed jaw, stubborn will, pushing forward" },
      { ja: "本気突入顔", en: "serious-mode face, locked-in eyes, total commitment, full-intensity expression" }
    ],
    "🫠 とろけ・夢見心地 (Melting & Dreamy Faces)": [
      { ja: "とろけ顔", en: "melting face, softened eyes, dissolved tension, blissful warmth" },
      { ja: "夢見心地顔", en: "dreamy bliss face, hazy eyes, floating mood, gentle happiness" },
      { ja: "うっとりとろ顔", en: "entranced melting face, heavy-lidded eyes, sweet daze, soft surrender" },
      { ja: "幸せとろ顔", en: "happily melted face, loosened smile, warm comfort, glowing contentment" },
      { ja: "ぽやぽや顔", en: "fluffy absent-minded face, softened focus, airy mood, gentle blankness" },
      { ja: "甘夢うっとり顔", en: "sweet dreamy entranced face, rosy calm, drifting bliss, tender fascination" }
    ],
    "🌀 混乱・処理落ち (Confusion & Brain Lag Faces)": [
      { ja: "処理落ち顔", en: "brain-lag face, frozen thinking, delayed reaction, overloaded expression" },
      { ja: "混乱ぐるぐる顔", en: "swirling confusion face, dizzy thoughts, spinning focus, mental overload" },
      { ja: "情報過多顔", en: "too-much-information face, overwhelmed eyes, crowded thoughts, sensory overload" },
      { ja: "理解追いつか顔", en: "can't-keep-up face, lost processing, delayed understanding, stunned confusion" },
      { ja: "思考停止顔", en: "thought-stopped face, blank stare, halted mind, unable to process" },
      { ja: "混線ぽかん顔", en: "cross-wired blank face, dazed confusion, open-mouthed pause, tangled thoughts" }
    ]
  };

  const DICT = {
    "smile": "笑顔", "happy": "幸せ", "laughing": "大笑い", "light smile": "微笑み",
    "angry": "怒り", "furious": "激怒", "sad": "悲しい", "crying": "泣く",
    "serious": "真剣", "expressionless": "無表情", "surprised": "驚き",
    "embarrassed": "恥じらい", "shy": "照れ", "nervous": "不安"
  };

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      let parent = document.querySelector("#list-expression");
      if (!parent) {
        parent = document.createElement("div");
        parent.id = "list-expression";
        parent.className = "section";
        const h2 = document.createElement("h2");
        h2.textContent = "4. 表情 (Expression)"; 
        parent.appendChild(h2);
        document.getElementById("sections").appendChild(parent);
      } else {
        // 重複防止：古いv1コンテナがあれば消す
        const old = parent.querySelector(".expression-v1-container");
        if(old) old.remove();
      }

      const ensureTopGroups = () => {
  let contentArea = parent.querySelector(".section-content");
  if (!contentArea) {
    contentArea = document.createElement("div");
    contentArea.className = "section-content";
    parent.appendChild(contentArea);
  }

  let wrapper = contentArea.querySelector('.expression-top-groups');
  if (!wrapper) {
    wrapper = document.createElement('div');
    wrapper.className = 'expression-top-groups';
    wrapper.style.cssText = 'display:flex; flex-direction:column; gap:10px;';
    contentArea.appendChild(wrapper);
  }

  const makeTopGroup = (cls, title, border, bg) => {
    let details = wrapper.querySelector(`.${cls}`);
    if (!details) {
      details = document.createElement('details');
      details.className = `expression-top-group ${cls}`;
      details.open = false;
      details.style.cssText = `margin-bottom:4px; border:2px solid ${border}; border-radius:8px; background:#fff; overflow:hidden;`;

      const summary = document.createElement('summary');
      summary.textContent = title;
      summary.style.cssText = `font-weight:bold; padding:10px 12px; cursor:pointer; font-size:1.08em; color:#333; background:${bg}; list-style:none; outline:none;`;
      details.appendChild(summary);

      const inner = document.createElement('div');
      inner.className = 'expression-top-group-content';
      inner.style.cssText = 'padding:10px; display:flex; flex-direction:column; gap:8px;';
      details.appendChild(inner);
      wrapper.appendChild(details);
    }
    return details.querySelector('.expression-top-group-content');
  };

  return {
    emotion: makeTopGroup('expression-top-emotion', '😊 感情設計 (Emotion Design)', '#d9c6ff', '#faf7ff'),
    facial: makeTopGroup('expression-top-facial', '🧩 顔パーツ・演出 (Facial Parts & FX)', '#bfe3ff', '#f5fbff'),
    scene: makeTopGroup('expression-top-scene', '🎬 シーン顔 (Scene Faces)', '#ffd59e', '#fff8ef')
  };
};

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "expression-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        
        details.open = false; // ★初期閉

        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f9f9f9; color:#555;";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:6px;";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.style.marginRight = "6px";
          cb.dataset.val = item.en;
          label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const root = document.createElement("div");
      root.className = "expression-v1-container";
      
      Object.entries(EXPRESSION_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const sceneRoot = document.createElement("div");
      sceneRoot.className = "expression-scene-container";
      if (IS_UNLOCKED && typeof SECRET_SCENE_FACE_DATA !== "undefined") {
        Object.entries(SECRET_SCENE_FACE_DATA).forEach(([cat, items]) => {
          sceneRoot.appendChild(createCat(cat, items, true));
        });
      }
      Object.entries(SCENE_FACE_DATA).forEach(([cat, items]) => {
        sceneRoot.appendChild(createCat(cat, items, false));
      });

      const groups = ensureTopGroups();
      groups.emotion.appendChild(root);
      if (!groups.facial.querySelector('.expression-v2-container')) {
        groups.facial.appendChild(facialRoot);
      }
      if (!groups.scene.querySelector('.expression-scene-container')) {
        groups.scene.appendChild(sceneRoot);
      }
    },

    getTags() {
      const tags = [];
      const parent = document.querySelector("#list-expression");
      if (parent) {
        parent.querySelectorAll("input[type='checkbox']:checked").forEach(cb => {
          if (cb.dataset && cb.dataset.val) tags.push(cb.dataset.val);
        });
      }
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

// --- builder_ui.section.expression.v2.js ---
(function(){
  "use strict";
  const VERSION = 2; // 統合版: 目(色・形・瞳孔・視線) & 口 & 漫符
  const KEY = "expression";

  // ★グループ1: 目の詳細セット
  const EYES_DATA = {
    "🎨 目の色 (Eye Colors)": [
      { ja: "赤目 (レッド)", en: "red eyes" }, { ja: "青目 (ブルー)", en: "blue eyes" },
      { ja: "緑目 (グリーン)", en: "green eyes" }, { ja: "黄目 (イエロー)", en: "yellow eyes" },
      { ja: "ピンク目", en: "pink eyes" }, { ja: "紫目 (パープル)", en: "purple eyes" },
      { ja: "茶目 (ブラウン)", en: "brown eyes" }, { ja: "オレンジ目", en: "orange eyes" },
      { ja: "黒目 (ブラック)", en: "black eyes" }, { ja: "白目 (ホワイト)", en: "white eyes" },
      { ja: "灰目 (グレー)", en: "grey eyes" },
      { ja: "金目 (ゴールド)", en: "gold eyes" }, { ja: "銀目 (シルバー)", en: "silver eyes" },
      { ja: "真紅の瞳 (クリムゾン)", en: "crimson eyes" }, { ja: "琥珀色の瞳 (アンバー)", en: "amber eyes" },
      { ja: "オッドアイ (左右異色)", en: "heterochromia" }, 
      { ja: "赤/青オッドアイ", en: "heterochromia blue and red" },
      { ja: "グラデーションアイ", en: "gradient eyes" },
      { ja: "多色瞳 (マルチカラー)", en: "multicolored eyes" }, 
      { ja: "輝く目", en: "glowing eyes" }, { ja: "宇宙の瞳 (ギャラクシー)", en: "galaxy eyes" }
    ],
    "👀 目の形 (Eye Shapes)": [
      { ja: "ツリ目", en: "tsurime" }, { ja: "タレ目", en: "tareme" },
      { ja: "半目 (ジト目)", en: "jitome" }, { ja: "三白眼", en: "sanpaku" },
      { ja: "目を閉じる", en: "closed eyes" }, { ja: "片目閉じ (ウインク)", en: "one eye closed" },
      { ja: "細めた目", en: "squinting" }, { ja: "見開いた目", en: "wide eyes" },
      { ja: "非対称な目", en: "asymmetrical eyes" }, { ja: "眠そうな目", en: "sleepy eyes" }
    ],
    "👁️ 瞳孔・ハイライト (Pupils & Highlights)": [
      { ja: "ハート目", en: "heart-shaped pupils" }, { ja: "星目", en: "star-shaped pupils" },
      { ja: "ダイヤ目", en: "diamond-shaped pupils" }, { ja: "しいたけ目", en: "symbol-shaped pupils" },
      { ja: "花の瞳孔 (フラワー)", en: "flower-shaped pupils" }, { ja: "桜の瞳孔", en: "cherry blossom-shaped pupils" },
      { ja: "十字の瞳孔 (クロス)", en: "cross-shaped pupils" }, { ja: "×印の瞳孔", en: "x-shaped pupils" },
      { ja: "歯車の瞳孔 (ギア)", en: "gear-shaped pupils" }, { ja: "ターゲット (照準)", en: "target eyes" },
      { ja: "ボタン目", en: "button eyes" }, { ja: "グリッチ (ノイズ)", en: "glitch eyes" },
      { ja: "ぐるぐる目 (スパイラル)", en: "spiral eyes" }, { ja: "波紋・輪廻眼", en: "ringed eyes" },
      { ja: "猫目 (縦長瞳孔)", en: "slit pupils" }, { ja: "ヤギ目 (横長瞳孔)", en: "horizontal pupils" },
      { ja: "四角い瞳孔", en: "rectangular pupils" }, { ja: "三角の瞳孔", en: "triangle pupils" },
      { ja: "散瞳 (デカ目)", en: "dilated pupils" }, { ja: "収縮 (極小)", en: "small pupils, constricted pupils" },
      { ja: "瞳孔なし", en: "no pupils" },
      { ja: "ハイライトなし", en: "empty eyes" }, { ja: "生気のない目", en: "lifeless eyes" },
      { ja: "死んだ目", en: "dead eyes" }, { ja: "濁った目", en: "dull eyes" },
      { ja: "虚無の目 (ベタ塗り)", en: "void eyes" }, { ja: "目元の影", en: "shadow over eyes" }
    ],
    "👁️ 視線・目線 (Gaze)": [ 
      { ja: "カメラ目線", en: "looking at viewer" }, { ja: "よそ見", en: "looking away" },
      { ja: "振り返り", en: "looking back" }, { ja: "横目", en: "sideways glance" },
      { ja: "見上げる", en: "looking up" }, { ja: "見下ろす", en: "looking down" },
      { ja: "目を合わせる", en: "eye contact" }, { ja: "覗き込む", en: "peeking" },
      { ja: "目を逸らす", en: "averting eyes" }, { ja: "遠くを見る", en: "looking afar" }
    ]
  };

  // ★グループ2: その他
  const OTHER_DATA = {
    "👄 口・舌・歯 (Mouth)": [
      { ja: "口を開ける", en: "open mouth" }, { ja: "口を閉じる", en: "closed mouth" },
      { ja: "半開き", en: "parted lips" }, { ja: "むくれ顔", en: "pout" },
      { ja: "舌出し", en: "tongue out" }, { ja: "猫口 (:3)", en: "cat mouth" },
      { ja: "三角口", en: "triangle mouth" }, { ja: "牙", en: "fangs" },
      { ja: "ギザ歯", en: "shark teeth" }, { ja: "歯を食いしばる", en: "clenched teeth" },
      { ja: "リップ (化粧)", en: "lipstick" }
    ],
    "😳 顔面演出・漫符 (Face Effects)": [
      { ja: "赤面", en: "blush" }, { ja: "激しい赤面", en: "heavy blush" },
      { ja: "青ざめる", en: "blue lines on face" }, { ja: "顔に影", en: "shadow over face" },
      { ja: "涙目", en: "tearing up" }, { ja: "鼻血", en: "nosebleed" },
      { ja: "よだれ", en: "drooling" }, { ja: "そばかす", en: "freckles" },
      { ja: "怒りマーク", en: "anger vein" }, { ja: "汗", en: "flying sweatdrops" },
      { ja: "ため息", en: "sigh" }, { ja: "絆創膏", en: "bandage on face" },
      { ja: "顔全体の赤面", en: "full-face blush" }, { ja: "火照った顔", en: "flushed face" },
      { ja: "こめかみ汗", en: "sweatdrop" }, { ja: "冷や汗", en: "nervous sweat" },
      { ja: "青筋・ストレス線", en: "stress lines" }, { ja: "困惑マーク", en: "scribble symbol" },
      { ja: "びっくりマーク", en: "exclamation mark symbol" }, { ja: "はてなマーク", en: "question mark symbol" },
      { ja: "音符マーク", en: "music note symbol" }, { ja: "電球マーク", en: "light bulb symbol" },
      { ja: "眠り泡", en: "sleeping bubble" }, { ja: "zzz演出", en: "zzz" },
      { ja: "くらくら星", en: "dizzy stars" }, { ja: "顔から湯気", en: "steam from face" },
      { ja: "涙が頬を伝う", en: "tear tracks" }, { ja: "滝涙", en: "streaming tears" },
      { ja: "泣き腫らした目元", en: "puffy eyes" }, { ja: "目の下のクマ", en: "dark circles under eyes" },
      { ja: "鼻水", en: "runny nose" }, { ja: "よだれの糸", en: "saliva trail" },
      { ja: "顔面蒼白", en: "pale face" }, { ja: "不穏な影", en: "ominous shadow over face" },
      { ja: "うるうる目", en: "watery eyes" }, { ja: "汗だらだら", en: "sweat running down face" },
      { ja: "ぐるぐる目演出", en: "spiral eyes effect" }, { ja: "ショック線", en: "shock lines" },
      { ja: "ガーン線", en: "gloom lines" }, { ja: "キラキラ演出", en: "sparkle effect around face" },
      { ja: "ハート飛び", en: "floating hearts" }, { ja: "頬ハート", en: "heart cheek mark" },
      { ja: "うっすら赤面", en: "light blush" },       { ja: "耳まで赤い", en: "ear blush" },       { ja: "頬の赤らみ", en: "rosy cheeks" },       { ja: "赤くなった耳", en: "blushing ears" },       { ja: "片涙", en: "single tear" },       { ja: "涙ぐんだ目", en: "teary eyes" },       { ja: "涙の粒", en: "tear droplets" },       { ja: "涙がにじむ", en: "eyes welling with tears" },       { ja: "汗の粒", en: "sweat beads" },       { ja: "冷や汗だらだら", en: "cold sweat" },       { ja: "焦り汗", en: "panic sweat" },       { ja: "震え", en: "trembling" },       { ja: "唇の震え", en: "trembling lips" },       { ja: "困惑線", en: "confusion lines" },       { ja: "照れ線", en: "embarrassment lines" },       { ja: "頬ふくらませ", en: "puffed cheeks" },       { ja: "むっとした頬", en: "sulking cheeks" },       { ja: "ぼんやり顔", en: "blank face" },       { ja: "放心顔", en: "spaced-out face" },       { ja: "虚ろ目顔", en: "vacant stare" },       { ja: "目の焦点ずれ", en: "unfocused eyes" },       { ja: "口元の泡", en: "foamy mouth" },       { ja: "吐息もれ", en: "soft panting" },       { ja: "顔のきらめき", en: "sparkles on face" },       { ja: "顔のひび影", en: "cracked shadow effect" }
    ]
  };

  const DICT = {
    "red eyes": "赤目", "blue eyes": "青目", "green eyes": "緑目", "yellow eyes": "黄目", 
    "pink eyes": "ピンク目", "purple eyes": "紫目", "brown eyes": "茶目", "orange eyes": "オレンジ目", 
    "black eyes": "黒目", "white eyes": "白目", "grey eyes": "灰目", "gold eyes": "金目", "silver eyes": "銀目", 
    "crimson eyes": "真紅の瞳", "amber eyes": "琥珀色の瞳", "heterochromia": "オッドアイ", 
    "heterochromia blue and red": "赤青オッドアイ", "gradient eyes": "グラデーション瞳", 
    "multicolored eyes": "多色瞳", "glowing eyes": "輝く目", "galaxy eyes": "宇宙の瞳",
    "tsurime": "ツリ目", "tareme": "タレ目", "jitome": "ジト目", "sanpaku": "三白眼", 
    "closed eyes": "閉じた目", "one eye closed": "片目閉じ", "squinting": "細めた目", 
    "wide eyes": "見開き目", "asymmetrical eyes": "非対称な目", "sleepy eyes": "眠そうな目",
    "heart-shaped pupils": "ハート目", "star-shaped pupils": "星目", "diamond-shaped pupils": "ダイヤ目",
    "symbol-shaped pupils": "しいたけ目", "flower-shaped pupils": "花の瞳孔", "cherry blossom-shaped pupils": "桜の瞳孔",
    "cross-shaped pupils": "十字瞳孔", "x-shaped pupils": "×印瞳孔", "gear-shaped pupils": "歯車瞳孔",
    "target eyes": "ターゲット目", "button eyes": "ボタン目", "glitch eyes": "グリッチ目",
    "spiral eyes": "ぐるぐる目", "ringed eyes": "波紋眼", "slit pupils": "猫目", "horizontal pupils": "ヤギ目",
    "rectangular pupils": "四角い瞳孔", "triangle pupils": "三角瞳孔", "dilated pupils": "散瞳",
    "small pupils": "収縮瞳孔", "no pupils": "瞳孔なし",
    "empty eyes": "ハイライトなし", "lifeless eyes": "生気のない目", "dead eyes": "死んだ目", 
    "dull eyes": "濁った目", "void eyes": "虚無の目", "shadow over eyes": "目元の影",
    "looking at viewer": "カメラ目線", "looking away": "よそ見", "looking back": "振り返り", 
    "sideways glance": "横目", "looking up": "見上げ", "looking down": "見下ろし", 
    "eye contact": "アイコンタクト", "peeking": "覗き見", "averting eyes": "目を逸らす", "looking afar": "遠くを見る",
    "open mouth": "開口", "closed mouth": "閉口", "parted lips": "半開き", "pout": "むくれ", 
    "tongue out": "舌出し", "cat mouth": "猫口", "triangle mouth": "三角口", "fangs": "牙", 
    "shark teeth": "ギザ歯", "clenched teeth": "食いしばり", "lipstick": "リップ",
    "blush": "赤面", "heavy blush": "激しい赤面", "blue lines on face": "青ざめ", 
    "shadow over face": "顔に影", "tearing up": "涙目", "nosebleed": "鼻血", "drooling": "よだれ", 
    "freckles": "そばかす", "anger vein": "怒りマーク", "flying sweatdrops": "飛び散る汗", 
    "sigh": "ため息", "bandage on face": "絆創膏", "full-face blush": "顔全体の赤面",
    "flushed face": "火照った顔", "sweatdrop": "こめかみ汗", "nervous sweat": "冷や汗",
    "stress lines": "青筋・ストレス線", "scribble symbol": "困惑マーク",
    "exclamation mark symbol": "びっくりマーク", "question mark symbol": "はてなマーク",
    "music note symbol": "音符マーク", "light bulb symbol": "電球マーク",
    "sleeping bubble": "眠り泡", "zzz": "zzz演出", "dizzy stars": "くらくら星",
    "steam from face": "顔から湯気", "tear tracks": "涙が頬を伝う",
    "streaming tears": "滝涙", "puffy eyes": "泣き腫らした目元",
    "dark circles under eyes": "目の下のクマ", "runny nose": "鼻水",
    "saliva trail": "よだれの糸", "pale face": "顔面蒼白",
    "ominous shadow over face": "不穏な影", "watery eyes": "うるうる目",
    "sweat running down face": "汗だらだら", "spiral eyes effect": "ぐるぐる目演出",
    "shock lines": "ショック線", "gloom lines": "ガーン線",
    "sparkle effect around face": "キラキラ演出", "floating hearts": "ハート飛び",
    "heart cheek mark": "頬ハート",
    "light blush": "うっすら赤面", "ear blush": "耳まで赤い", "rosy cheeks": "頬の赤らみ", "blushing ears": "赤くなった耳",
    "single tear": "片涙", "teary eyes": "涙ぐんだ目", "tear droplets": "涙の粒", "eyes welling with tears": "涙がにじむ",
    "sweat beads": "汗の粒", "cold sweat": "冷や汗だらだら", "panic sweat": "焦り汗", "trembling": "震え", "trembling lips": "唇の震え",
    "confusion lines": "困惑線", "embarrassment lines": "照れ線", "puffed cheeks": "頬ふくらませ", "sulking cheeks": "むっとした頬",
    "blank face": "ぼんやり顔", "spaced-out face": "放心顔", "vacant stare": "虚ろ目顔", "unfocused eyes": "目の焦点ずれ",
    "foamy mouth": "口元の泡", "soft panting": "吐息もれ", "sparkles on face": "顔のきらめき", "cracked shadow effect": "顔のひび影"
  };

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      let parent = document.querySelector("#list-expression");
      if (!parent) return; 

      const ensureTopGroups = () => {
  let contentArea = parent.querySelector(".section-content");
  if (!contentArea) {
    contentArea = document.createElement("div");
    contentArea.className = "section-content";
    parent.appendChild(contentArea);
  }

  let wrapper = contentArea.querySelector('.expression-top-groups');
  if (!wrapper) {
    wrapper = document.createElement('div');
    wrapper.className = 'expression-top-groups';
    wrapper.style.cssText = 'display:flex; flex-direction:column; gap:10px;';
    contentArea.appendChild(wrapper);
  }

  const makeTopGroup = (cls, title, border, bg) => {
    let details = wrapper.querySelector(`.${cls}`);
    if (!details) {
      details = document.createElement('details');
      details.className = `expression-top-group ${cls}`;
      details.open = false;
      details.style.cssText = `margin-bottom:4px; border:2px solid ${border}; border-radius:8px; background:#fff; overflow:hidden;`;

      const summary = document.createElement('summary');
      summary.textContent = title;
      summary.style.cssText = `font-weight:bold; padding:10px 12px; cursor:pointer; font-size:1.08em; color:#333; background:${bg}; list-style:none; outline:none;`;
      details.appendChild(summary);

      const inner = document.createElement('div');
      inner.className = 'expression-top-group-content';
      inner.style.cssText = 'padding:10px; display:flex; flex-direction:column; gap:8px;';
      details.appendChild(inner);
      wrapper.appendChild(details);
    }
    return details.querySelector('.expression-top-group-content');
  };

  return {
    emotion: makeTopGroup('expression-top-emotion', '😊 感情設計 (Emotion Design)', '#d9c6ff', '#faf7ff'),
    facial: makeTopGroup('expression-top-facial', '🧩 顔パーツ・演出 (Facial Parts & FX)', '#bfe3ff', '#f5fbff'),
    scene: makeTopGroup('expression-top-scene', '🎬 シーン顔 (Scene Faces)', '#ffd59e', '#fff8ef')
  };
};

      const root = document.createElement("div");
      root.className = "expression-v2-container";

      const createItemGrid = (items) => {
        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(2, 1fr); gap:6px;";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          const cb = document.createElement("input");
          cb.type = "checkbox"; cb.style.marginRight = "6px"; cb.dataset.val = item.en;
          label.appendChild(cb); label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          if(item.desc) label.title = item.desc;
          content.appendChild(label);
        });
        return content;
      };

      const createSubCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "expression-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        details.open = false; 
        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f9f9f9; color:#555;";
        details.appendChild(summary);
        details.appendChild(createItemGrid(items));
        return details;
      };

      const createFaceEffectsCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "expression-cat expression-cat-faceeffects";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        details.open = false;

        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f9f9f9; color:#555;";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:flex; flex-direction:column; gap:8px;";

        const byEn = new Map(items.map(item => [item.en, item]));
        const used = new Set();

        FACE_EFFECTS_GROUPS.forEach(group => {
          const groupItems = group.ens.map(en => byEn.get(en)).filter(Boolean);
          groupItems.forEach(item => used.add(item.en));
          if (!groupItems.length) return;
          content.appendChild(createSubCat(group.title, groupItems));
        });

        const leftovers = items.filter(item => !used.has(item.en));
        if (leftovers.length) {
          content.appendChild(createSubCat("📦 その他 (Other)", leftovers));
        }

        details.appendChild(content);
        return details;
      };

      const eyesRoot = document.createElement("details");
      eyesRoot.className = "expression-root-eyes";
      eyesRoot.style.cssText = "margin-bottom:10px; border:2px solid #89CFF0; border-radius:6px; background:#fff;";
      
      eyesRoot.open = false; 

      const eyesSummary = document.createElement("summary");
      eyesSummary.textContent = "👁️ 目・瞳・視線 (Eyes)";
      eyesSummary.style.cssText = "font-weight:bold; padding:10px; cursor:pointer; font-size:1.1em; color:#333; background:#f9f9f9; display:flex; align-items:center; list-style:none; outline:none;";
      eyesRoot.appendChild(eyesSummary);

      const eyesContent = document.createElement("div");
      eyesContent.style.padding = "10px";
      eyesContent.style.display = "flex";
      eyesContent.style.flexDirection = "column";
      eyesContent.style.gap = "8px";
      
      Object.entries(EYES_DATA).forEach(([cat, items]) => {
        eyesContent.appendChild(createSubCat(cat, items));
      });
      eyesRoot.appendChild(eyesContent);
      root.appendChild(eyesRoot);

      Object.entries(OTHER_DATA).forEach(([cat, items]) => {
        if (cat === "😳 顔面演出・漫符 (Face Effects)") {
          root.appendChild(createFaceEffectsCat(cat, items));
        } else {
          root.appendChild(createSubCat(cat, items));
        }
      });

      const groups = ensureTopGroups();
      groups.facial.appendChild(root);
    },

    getTags() {
      const tags = [];
      const parent = document.querySelector("#list-expression");
      if (parent) {
        parent.querySelectorAll("input[type='checkbox']:checked").forEach(cb => {
          if (cb.dataset && cb.dataset.val) tags.push(cb.dataset.val);
        });
      }
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

// --- builder_ui.section.expression.v3.js ---
(function(){
  "use strict";
  const VERSION = 3; // 統合版: ニュアンス & アクション + ガン詰めR-18シークレット
  const KEY = "expression";

  // v2から統合: 顔パーツ・演出 (Facial Parts & FX)
  const FACIAL_EYES_DATA = {
    "🎨 目の色 (Eye Colors)": [
      { ja: "赤目 (レッド)", en: "red eyes" }, { ja: "青目 (ブルー)", en: "blue eyes" },
      { ja: "緑目 (グリーン)", en: "green eyes" }, { ja: "黄目 (イエロー)", en: "yellow eyes" },
      { ja: "ピンク目", en: "pink eyes" }, { ja: "紫目 (パープル)", en: "purple eyes" },
      { ja: "茶目 (ブラウン)", en: "brown eyes" }, { ja: "オレンジ目", en: "orange eyes" },
      { ja: "黒目 (ブラック)", en: "black eyes" }, { ja: "白目 (ホワイト)", en: "white eyes" },
      { ja: "灰目 (グレー)", en: "grey eyes" }, { ja: "金目 (ゴールド)", en: "gold eyes" },
      { ja: "銀目 (シルバー)", en: "silver eyes" }, { ja: "真紅の瞳 (クリムゾン)", en: "crimson eyes" },
      { ja: "琥珀色の瞳 (アンバー)", en: "amber eyes" }, { ja: "オッドアイ (左右異色)", en: "heterochromia" },
      { ja: "赤/青オッドアイ", en: "heterochromia blue and red" }, { ja: "グラデーションアイ", en: "gradient eyes" },
      { ja: "多色瞳 (マルチカラー)", en: "multicolored eyes" }, { ja: "輝く目", en: "glowing eyes" }, { ja: "宇宙の瞳 (ギャラクシー)", en: "galaxy eyes" }
    ],
    "👀 目の形 (Eye Shapes)": [
      { ja: "ツリ目", en: "tsurime" }, { ja: "タレ目", en: "tareme" }, { ja: "半目 (ジト目)", en: "jitome" },
      { ja: "三白眼", en: "sanpaku" }, { ja: "目を閉じる", en: "closed eyes" }, { ja: "片目閉じ (ウインク)", en: "one eye closed" },
      { ja: "細めた目", en: "squinting" }, { ja: "見開いた目", en: "wide eyes" }, { ja: "非対称な目", en: "asymmetrical eyes" }, { ja: "眠そうな目", en: "sleepy eyes" }
    ],
    "👁️ 瞳孔・ハイライト (Pupils & Highlights)": [
      { ja: "ハート目", en: "heart-shaped pupils" }, { ja: "星目", en: "star-shaped pupils" }, { ja: "ダイヤ目", en: "diamond-shaped pupils" },
      { ja: "しいたけ目", en: "symbol-shaped pupils" }, { ja: "花の瞳孔 (フラワー)", en: "flower-shaped pupils" }, { ja: "桜の瞳孔", en: "cherry blossom-shaped pupils" },
      { ja: "十字の瞳孔 (クロス)", en: "cross-shaped pupils" }, { ja: "×印の瞳孔", en: "x-shaped pupils" }, { ja: "歯車の瞳孔 (ギア)", en: "gear-shaped pupils" },
      { ja: "ターゲット (照準)", en: "target eyes" }, { ja: "ボタン目", en: "button eyes" }, { ja: "グリッチ (ノイズ)", en: "glitch eyes" },
      { ja: "ぐるぐる目 (スパイラル)", en: "spiral eyes" }, { ja: "波紋・輪廻眼", en: "ringed eyes" }, { ja: "猫目 (縦長瞳孔)", en: "slit pupils" },
      { ja: "ヤギ目 (横長瞳孔)", en: "horizontal pupils" }, { ja: "四角い瞳孔", en: "rectangular pupils" }, { ja: "三角の瞳孔", en: "triangle pupils" },
      { ja: "散瞳 (デカ目)", en: "dilated pupils" }, { ja: "収縮 (極小)", en: "small pupils, constricted pupils" }, { ja: "瞳孔なし", en: "no pupils" },
      { ja: "ハイライトなし", en: "empty eyes" }, { ja: "生気のない目", en: "lifeless eyes" }, { ja: "死んだ目", en: "dead eyes" }, { ja: "濁った目", en: "dull eyes" },
      { ja: "虚無の目 (ベタ塗り)", en: "void eyes" }, { ja: "目元の影", en: "shadow over eyes" }
    ],
    "👁️ 視線・目線 (Gaze)": [
      { ja: "カメラ目線", en: "looking at viewer" }, { ja: "よそ見", en: "looking away" }, { ja: "振り返り", en: "looking back" },
      { ja: "横目", en: "sideways glance" }, { ja: "見上げる", en: "looking up" }, { ja: "見下ろす", en: "looking down" },
      { ja: "目を合わせる", en: "eye contact" }, { ja: "覗き込む", en: "peeking" }, { ja: "目を逸らす", en: "averting eyes" }, { ja: "遠くを見る", en: "looking afar" }
    ]
  };

  const FACIAL_OTHER_DATA = {
    "👄 口・舌・歯 (Mouth)": [
      { ja: "口を開ける", en: "open mouth" }, { ja: "口を閉じる", en: "closed mouth" }, { ja: "半開き", en: "parted lips" }, { ja: "むくれ顔", en: "pout" },
      { ja: "舌出し", en: "tongue out" }, { ja: "猫口 (:3)", en: "cat mouth" }, { ja: "三角口", en: "triangle mouth" }, { ja: "牙", en: "fangs" },
      { ja: "ギザ歯", en: "shark teeth" }, { ja: "歯を食いしばる", en: "clenched teeth" }, { ja: "リップ (化粧)", en: "lipstick" }
    ],
    "😳 顔面演出・漫符 (Face Effects)": [
      { ja: "赤面", en: "blush" }, { ja: "激しい赤面", en: "heavy blush" }, { ja: "青ざめる", en: "blue lines on face" }, { ja: "顔に影", en: "shadow over face" },
      { ja: "涙目", en: "tearing up" }, { ja: "鼻血", en: "nosebleed" }, { ja: "よだれ", en: "drooling" }, { ja: "そばかす", en: "freckles" },
      { ja: "怒りマーク", en: "anger vein" }, { ja: "汗", en: "flying sweatdrops" }, { ja: "ため息", en: "sigh" }, { ja: "絆創膏", en: "bandage on face" },
      { ja: "顔全体の赤面", en: "full-face blush" }, { ja: "火照った顔", en: "flushed face" }, { ja: "こめかみ汗", en: "sweatdrop" }, { ja: "冷や汗", en: "nervous sweat" },
      { ja: "青筋・ストレス線", en: "stress lines" }, { ja: "困惑マーク", en: "scribble symbol" }, { ja: "びっくりマーク", en: "exclamation mark symbol" }, { ja: "はてなマーク", en: "question mark symbol" },
      { ja: "音符マーク", en: "music note symbol" }, { ja: "電球マーク", en: "light bulb symbol" }, { ja: "眠り泡", en: "sleeping bubble" }, { ja: "zzz演出", en: "zzz" },
      { ja: "くらくら星", en: "dizzy stars" }, { ja: "顔から湯気", en: "steam from face" }, { ja: "涙が頬を伝う", en: "tear tracks" }, { ja: "滝涙", en: "streaming tears" },
      { ja: "泣き腫らした目元", en: "puffy eyes" }, { ja: "目の下のクマ", en: "dark circles under eyes" }, { ja: "鼻水", en: "runny nose" }, { ja: "よだれの糸", en: "saliva trail" },
      { ja: "顔面蒼白", en: "pale face" }, { ja: "不穏な影", en: "ominous shadow over face" }, { ja: "うるうる目", en: "watery eyes" }, { ja: "汗だらだら", en: "sweat running down face" },
      { ja: "ぐるぐる目演出", en: "spiral eyes effect" }, { ja: "ショック線", en: "shock lines" }, { ja: "ガーン線", en: "gloom lines" }, { ja: "キラキラ演出", en: "sparkle effect around face" },
      { ja: "ハート飛び", en: "floating hearts" }, { ja: "頬ハート", en: "heart cheek mark" },
      { ja: "うっすら赤面", en: "light blush" }, { ja: "耳まで赤い", en: "ear blush" }, { ja: "頬の赤らみ", en: "rosy cheeks" }, { ja: "赤くなった耳", en: "blushing ears" },
      { ja: "片涙", en: "single tear" }, { ja: "涙ぐんだ目", en: "teary eyes" }, { ja: "涙の粒", en: "tear droplets" }, { ja: "涙がにじむ", en: "eyes welling with tears" },
      { ja: "汗の粒", en: "sweat beads" }, { ja: "冷や汗だらだら", en: "cold sweat" }, { ja: "焦り汗", en: "panic sweat" }, { ja: "震え", en: "trembling" }, { ja: "唇の震え", en: "trembling lips" },
      { ja: "困惑線", en: "confusion lines" }, { ja: "照れ線", en: "embarrassment lines" }, { ja: "頬ふくらませ", en: "puffed cheeks" }, { ja: "むっとした頬", en: "sulking cheeks" },
      { ja: "ぼんやり顔", en: "blank face" }, { ja: "放心顔", en: "spaced-out face" }, { ja: "虚ろ目顔", en: "vacant stare" }, { ja: "目の焦点ずれ", en: "unfocused eyes" },
      { ja: "口元の泡", en: "foamy mouth" }, { ja: "吐息もれ", en: "soft panting" }, { ja: "顔のきらめき", en: "sparkles on face" }, { ja: "顔のひび影", en: "cracked shadow effect" }
    ],
    "🪶 軽量補助束 (Quick Support Bundles)": [
      { ja: "😌 安心束", en: "relieved smile, soft eyes, rosy cheeks" },
      { ja: "🫶 親愛束", en: "soft smile, watery eyes, rosy cheeks" },
      { ja: "✨ 見惚れ束", en: "sparkles on face, wide eyes, soft smile" },
      { ja: "💞 ときめき束", en: "floating hearts, heart cheek mark, watery eyes" },
      { ja: "🙂 納得束", en: "small nod, relieved smile, soft eyes" },
      { ja: "⏳ 焦れ束", en: "restless eyes, impatience lines, soft panting" },
      { ja: "😬 気まずさ束", en: "sweatdrop, embarrassment lines, averted gaze" },
      { ja: "🫣 目逸らし束", en: "averted gaze, light blush, embarrassment lines" },
      { ja: "😤 強がり束", en: "forced smile, light blush, averted gaze" },
      { ja: "😾 拗ね束", en: "sulking cheeks, pout, averted gaze" },
      { ja: "🛡 警戒束", en: "sharp eyes, sweatdrop, wary look" },
      { ja: "🤨 疑い束", en: "half-lidded eyes, question mark symbol, distrustful look" },
      { ja: "👑 勝ち気束", en: "smug, anger vein, confident smile" },
      { ja: "🏆 優越束", en: "smug smile, half-lidded eyes, confident look" },
      { ja: "🦊 企み束", en: "smirk, half-lidded eyes, sparkle effect around face" },
      { ja: "😼 いたずら束", en: "playful grin, sparkle effect around face, mischievous look" },
      { ja: "💢 怒気束", en: "anger vein, stress lines, exclamation mark symbol" },
      { ja: "😨 恐怖束", en: "pale face, sweatdrop, shock lines" },
      { ja: "😵 混乱束", en: "question mark symbol, confusion lines, sweatdrop" },
      { ja: "😵‍💫 眩暈束", en: "dizzy stars, spiral eyes effect, blank face" },
      { ja: "🌸 赤面束", en: "blush, light blush, rosy cheeks" },
      { ja: "😳 照れ束", en: "embarrassment lines, light blush, blushing ears" },
      { ja: "😂 泣き笑い束", en: "single tear, smile, watery eyes" },
      { ja: "😢 涙束", en: "tearing up, watery eyes, tear tracks" },
      { ja: "✨ きらめき束", en: "sparkle effect around face, sparkles on face, music note symbol" },
      { ja: "💦 汗束", en: "flying sweatdrops, nervous sweat, cold sweat" },
      { ja: "🔥 火照り束", en: "full-face blush, flushed face, steam from face" },
      { ja: "😪 脱力束", en: "sigh, spaced-out face, soft panting" },
      { ja: "😮‍💨 あきれ束", en: "half-lidded eyes, sigh, blank face" },
      { ja: "⛓ 観念束", en: "downcast eyes, single tear, resigned expression" },
      { ja: "🌫 崩れ束", en: "shadow over face, blank face, unfocused eyes" }
    ],
    "🔞 軽量補助束 (Secret Quick Support Bundles)": [
      { ja: "🤍 甘やかし束", en: "soft smile, watery eyes, rosy cheeks" },
      { ja: "🙏 懇願束", en: "tearing up, downcast eyes, trembling lips" },
      { ja: "🙈 羞恥こらえ束", en: "heavy blush, trembling lips, averted gaze" },
      { ja: "🥀 背徳束", en: "light blush, averted gaze, ominous shadow over face" },
      { ja: "🚪 露見焦り束", en: "panic sweat, shock lines, averted gaze" },
      { ja: "😏 挑発束", en: "smirk, half-lidded eyes, teasing look" },
      { ja: "🔒 独占束", en: "half-lidded eyes, possessive look, floating hearts" },
      { ja: "👠 支配束", en: "smug smile, half-lidded eyes, confident look" },
      { ja: "💧 涙目服従束", en: "tearing up, single tear, nervous sweat" },
      { ja: "⛓ 服従観念束", en: "downcast eyes, single tear, resigned expression" },
      { ja: "⛓ 焦汗服従束", en: "panic sweat, trembling lips, shadow over face" },
      { ja: "💚 嫉妬束", en: "side glare, heavy blush, tension lines" },
      { ja: "🗣 言いよどみ束", en: "parted lips, averted gaze, light blush" },
      { ja: "🕯 焦らし束", en: "half-lidded eyes, soft panting, sparkle effect around face" },
      { ja: "💓 密着火照り束", en: "full-face blush, flushed face, soft panting" },
      { ja: "🥵 上気とろみ束", en: "steam from face, drooling, unfocused eyes" },
      { ja: "🌑 背徳影顔束", en: "ominous shadow over face, blush, watery eyes" },
      { ja: "🌙 名残惜しさ束", en: "watery eyes, soft smile, downcast eyes" },
      { ja: "💞 幸福余韻束", en: "relieved smile, soft eyes, rosy cheeks" },
      { ja: "🕊 許し束", en: "soft eyes, relieved smile, watery eyes" },
      { ja: "🫠 余韻放心束", en: "spaced-out face, saliva trail, soft panting" },
      { ja: "🫥 余裕崩れ束", en: "forced smile, nervous sweat, unfocused eyes" },
      { ja: "🔞 🔥 焦り寸前束", en: "restless eyes, flushed face, desperate heat, drooling, panting" },
      { ja: "🔞 ⚔ 反撃奪取束", en: "lewd smile, dominant gaze, predatory smirk, flushed face, heavy breath" },
      { ja: "🔞 🫀 執着深化束", en: "clinging expression, lustful gaze, dilated pupils, desperate attachment" },
      { ja: "🔞 👑 満足優位束", en: "satisfied smirk, blissful daze, euphoric dominance, flushed face, mocking eyes" }
    ]
  };

  const FACIAL_FACE_EFFECTS_GROUPS = [
    { title: "🌸 赤面・火照り (Blush & Heat)", ens: ["blush", "heavy blush", "full-face blush", "flushed face", "heart cheek mark", "floating hearts", "light blush", "ear blush", "rosy cheeks", "blushing ears"] },
    { title: "😭 涙・泣き (Tears & Crying)", ens: ["tearing up", "tear tracks", "streaming tears", "watery eyes", "puffy eyes", "single tear", "teary eyes", "tear droplets", "eyes welling with tears"] },
    { title: "💦 汗・焦り (Sweat & Panic)", ens: ["flying sweatdrops", "sweatdrop", "nervous sweat", "stress lines", "sweat running down face", "sigh", "sweat beads", "cold sweat", "panic sweat", "trembling", "trembling lips"] },
    { title: "💥 漫符・記号 (Symbols & Manga FX)", ens: ["anger vein", "scribble symbol", "exclamation mark symbol", "question mark symbol", "music note symbol", "light bulb symbol", "sleeping bubble", "zzz", "dizzy stars", "steam from face", "spiral eyes effect", "shock lines", "gloom lines", "sparkle effect around face", "confusion lines", "embarrassment lines", "puffed cheeks", "sulking cheeks", "sparkles on face"] },
    { title: "🤒 不調・崩れ (Fatigue & Breakdown)", ens: ["blue lines on face", "shadow over face", "nosebleed", "drooling", "freckles", "bandage on face", "dark circles under eyes", "runny nose", "saliva trail", "pale face", "ominous shadow over face", "blank face", "spaced-out face", "vacant stare", "unfocused eyes", "foamy mouth", "soft panting", "cracked shadow effect"] }
  ];

  // ★ シークレットモード判定
  const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  const EXPRESSION_DATA = {
    "😏 ニュアンス・性格 (Nuance)": [
      { ja: "ドヤ顔 (Smug)", en: "smug" }, { ja: "軽蔑", en: "disdain" },
      { ja: "誘惑的", en: "seductive smile" }, { ja: "病み顔 (ヤンデレ)", en: "yandere" },
      { ja: "恍惚 (トロ顔)", en: "ahegao" }, { ja: "絶望", en: "despair" },
      { ja: "狂気", en: "crazy" }, { ja: "パニック (あわわ)", en: "panicked" },
      { ja: "ツンデレ", en: "tsundere" }, { ja: "クーデレ (無口)", en: "kuudere" },
      { ja: "邪悪な笑み", en: "evil smile" }, { ja: "優しい笑み", en: "gentle smile" }
    ],
    "🗣️ アクション・状態 (Actions)": [
      { ja: "食べる (もぐもぐ)", en: "eating" }, { ja: "飲む", en: "drinking" },
      { ja: "寝る (睡眠)", en: "sleeping" }, { ja: "あくび", en: "yawning" },
      { ja: "キス顔", en: "kissing" }, { ja: "投げキッス", en: "blowing kiss" },
      { ja: "ウインク", en: "wink" }, { ja: "叫ぶ", en: "shouting" },
      { ja: "舐める", en: "licking" }, { ja: "噛む (咀嚼)", en: "chewing" },
      { ja: "あごに手", en: "hand on chin" }, { ja: "頬杖", en: "head resting on hand" },
      { ja: "シーッ (静かに)", en: "shushing" }
    ]
  };

  // ==========================================
  // ★ R-18（シークレット）専用 ガン詰め表情データ
  // ==========================================
  const SECRET_EXPRESSION_DATA = {
    "🤪 恍惚・快楽 (Ecstasy)": [
      { ja: "アヘ顔 (強)", en: "ahegao:1.3" }, 
      { ja: "白目・上転", en: "rolling eyes" }, 
      { ja: "涎・よだれ", en: "drooling" },
      { ja: "長い舌出し", en: "tongue out:1.2" }, 
      { ja: "だらしなく開いた口", en: "mouth wide open, gaping" },
      { ja: "V字眉毛 (困り眉)", en: "v-shaped eyebrows" },
      { ja: "快楽堕ち", en: "pleasure face, euphoric expression" },
      { ja: "発情・欲情", en: "in heat, lustful expression" }
    ],
    "🥴 酩酊・洗脳・催眠 (Mind Alteration)": [
      { ja: "酔っ払い (酩酊)", en: "drunk, flushed from alcohol, tipsy" },
      { ja: "催眠・洗脳", en: "hypnotized, mind control" },
      { ja: "ぐるぐる目", en: "swirl eyes" },
      { ja: "焦点の合わない目", en: "unfocused eyes, glazed eyes" },
      { ja: "トランス状態", en: "trance, blank stare" },
      { ja: "思考放棄", en: "empty mind, drooling" }
    ],
    "😈 下品・メスガキ・挑発 (Vulgar & Provocative)": [
      { ja: "下品な笑み", en: "lewd smile, vulgar expression" },
      { ja: "メスガキスマイル", en: "smug face, mocking smile, bratty" },
      { ja: "淫らな誘惑", en: "seductive gaze, inviting look" },
      { ja: "舌なめずり", en: "licking lips" },
      { ja: "卑しい顔", en: "naughty face, perverted smile" }
    ],
    "🥺 苦痛・羞恥・涙 (Pain & Shame)": [
      { ja: "涙目・号泣", en: "tears, crying uncontrollably" },
      { ja: "激しい赤面", en: "heavy blush, flushed face" },
      { ja: "懇願・許しを乞う", en: "begging expression" },
      { ja: "羞恥に耐える", en: "embarrassed, looking away shyly" },
      { ja: "屈辱・悔し泣き", en: "humiliation, frustrated tears" },
      { ja: "苦悶・痛み", en: "painful expression, grimace" },
      { ja: "歯を食いしばる", en: "clenched teeth, biting lip" }
    ],
    "👀 狂気・虚無の瞳 (Broken Eyes)": [
      { ja: "ハイライト消滅", en: "empty eyes, no pupil highlights" },
      { ja: "レイプ目・虚無", en: "vacant eyes, glassy eyes" },
      { ja: "ハート目", en: "heart-shaped pupils" },
      { ja: "ピンクに染まった瞳", en: "pink eyes, love struck" },
      { ja: "精神崩壊", en: "mind break, broken expression" }
    ],
    "👄 吐息・口元の状態 (Mouth Status)": [
      { ja: "激しい息・荒い息", en: "heavy breathing, panting" },
      { ja: "滴るよだれの糸", en: "stringy saliva, saliva trail" },
      { ja: "何かを咥えている", en: "something in mouth" },
      { ja: "咽ぶ・えづく", en: "gagging, choking" },
      { ja: "顔面まみれ", en: "messy face" }
    ]
  };

  const SECRET_SCENE_FACE_DATA = {
    "🔞 高揚・熱感 (Secret Heat & Arousal Faces)": [
      { ja: "熱っぽい顔", en: "heavy blush, parted lips, watery eyes, heated expression" },
      { ja: "高揚うるみ顔", en: "watery eyes, flushed cheeks, excited expression, trembling lips" },
      { ja: "火照り顔", en: "flushed face, half-lidded eyes, soft open mouth, warm expression" },
      { ja: "息荒れ顔", en: "panting, parted lips, flushed cheeks, unsteady breathing" }
    ],
    "🔞 恥じらい・照れ艶 (Secret Blushing & Shy Faces)": [
      { ja: "艶照れ顔", en: "shy blush, moist eyes, embarrassed smile, sensual expression" },
      { ja: "恥じらい顔", en: "looking away, deep blush, trembling lips, shy expression" },
      { ja: "目逸らし艶顔", en: "averted gaze, soft blush, half-lidded eyes, bashful expression" },
      { ja: "赤面うるみ顔", en: "heavy blush, watery eyes, parted lips, flustered face" }
    ],
    "🔞 余裕・誘い (Secret Tempting Faces)": [
      { ja: "誘い笑顔", en: "seductive smile, inviting gaze, half-lidded eyes, soft blush" },
      { ja: "艶視線顔", en: "sultry gaze, half-lidded eyes, glossy lips, teasing expression" },
      { ja: "甘い誘い顔", en: "gentle smile, inviting look, warm blush, alluring expression" },
      { ja: "余裕艶顔", en: "confident smile, calm gaze, seductive composure, soft blush" }
    ],
    "🔞 我慢・揺らぎ (Secret Restraint Faces)": [
      { ja: "我慢顔", en: "biting lip, trembling face, flushed cheeks, restrained expression" },
      { ja: "こらえ顔", en: "clenched expression, watery eyes, blushing, trying to endure" },
      { ja: "乱れかけ顔", en: "shaky breath, unfocused eyes, flushed face, wavering composure" },
      { ja: "崩れ寸前顔", en: "teary eyes, trembling lips, heavy blush, on-the-edge expression" }
    ],
    "🔞 とろけ・夢心地 (Secret Melting Faces)": [
      { ja: "艶とろ顔", en: "dreamy eyes, soft blush, parted lips, melting expression" },
      { ja: "夢心地艶顔", en: "blissful face, half-lidded eyes, warm blush, dreamy expression" },
      { ja: "うるみとろ顔", en: "watery eyes, relaxed smile, flushed face, melting look" },
      { ja: "溶け顔", en: "slack expression, dreamy smile, soft blush, dazed face" }
    ],
    "🔞 余韻・満ち足り (Secret Afterglow Faces)": [
      { ja: "余韻顔", en: "dazed smile, flushed cheeks, relaxed eyes, lingering afterglow" },
      { ja: "満ち足り顔", en: "satisfied smile, soft blush, relaxed face, fulfilled expression" },
      { ja: "力抜け顔", en: "slack shoulders, half-lidded eyes, loose expression, exhausted bliss" },
      { ja: "静かな満足顔", en: "calm smile, soft blush, peaceful satisfied expression" }
    ],
    "🔞 いたずら・挑発 (Secret Teasing & Provocative Faces)": [
      { ja: "挑発顔", en: "provocative smirk, daring gaze, teasing expression, half-lidded eyes" },
      { ja: "いたずら艶顔", en: "playful smile, sultry eyes, mischievous expression, soft blush" },
      { ja: "からかい艶顔", en: "teasing grin, alluring gaze, amused expression, warm blush" },
      { ja: "仕掛け顔", en: "scheming smile, seductive eyes, playful provocation, confident expression" }
    ],
    "🔞 支配・主導 (Secret Dominant Faces)": [
      { ja: "支配顔", en: "dominant gaze, composed smile, controlling presence, half-lidded eyes" },
      { ja: "主導顔", en: "confident expression, steady gaze, leading presence, calm smile" },
      { ja: "見下し艶顔", en: "condescending smile, sultry eyes, superior expression, teasing dominance" },
      { ja: "優位顔", en: "victorious smirk, confident gaze, superior composure, dominant expression" }
    ],
    "🔞 うるみ・涙目 (Secret Watery & Teary Faces)": [
      { ja: "うるみ顔", en: "watery eyes, trembling lashes, soft blush, emotional expression" },
      { ja: "涙目艶顔", en: "teary eyes, flushed cheeks, parted lips, sensual glossy expression" },
      { ja: "潤み見上げ顔", en: "upturned watery eyes, soft blush, pleading glossy look" },
      { ja: "泣き艶顔", en: "tearful eyes, trembling lips, heavy blush, emotionally melted expression" }
    ],
    "🔞 息乱れ・呼吸感 (Secret Breathless Faces)": [
      { ja: "息乱れ顔", en: "uneven breathing, parted lips, flushed face, dazed expression" },
      { ja: "荒息顔", en: "panting, trembling shoulders, open mouth, heated blush" },
      { ja: "呼吸熱顔", en: "hot breath, half-lidded eyes, flushed cheeks, unsteady expression" },
      { ja: "吐息顔", en: "soft exhale, relaxed lips, dreamy eyes, warm blush" }
    ],
    "🔞 視線・見つめ (Secret Gazing Faces)": [
      { ja: "見上げ艶顔", en: "upward sultry gaze, moist eyes, soft blush, inviting expression" },
      { ja: "見つめ艶顔", en: "locked gaze, half-lidded eyes, glossy lips, intense allure" },
      { ja: "流し目艶顔", en: "side glance, teasing eyes, soft smile, sensual expression" },
      { ja: "離せない顔", en: "unbroken gaze, entranced eyes, flushed face, unable to look away" }
    ],
    "🔞 口元・微開き (Secret Lips & Parted Mouth Faces)": [
      { ja: "口半開き顔", en: "slightly open mouth, dazed eyes, soft blush, breathless expression" },
      { ja: "唇震え顔", en: "trembling lips, watery eyes, flushed cheeks, wavering composure" },
      { ja: "噛み唇顔", en: "biting lip, heated blush, half-lidded eyes, restrained desire" },
      { ja: "声漏れ顔", en: "parted lips, shaky breath, trembling expression, flushed face" }
    ],
    "🔞 受け・委ね (Secret Yielding Faces)": [
      { ja: "委ね顔", en: "surrendered expression, relaxed eyes, soft blush, trusting face" },
      { ja: "身任せ顔", en: "letting-go expression, half-lidded eyes, warm blush, passive surrender" },
      { ja: "逆らえない顔", en: "helpless gaze, trembling lips, flushed cheeks, unable to resist" },
      { ja: "力抜け委ね顔", en: "loosened posture, slack lips, watery eyes, fully yielding expression" }
    ],
     "🔞 余裕崩れ (Secret Composure Breaking Faces)": [
      { ja: "余裕崩れ顔", en: "cracking smirk, shaken gaze, flushed face, composure slipping" },
      { ja: "強気崩れ顔", en: "broken bravado, trembling lips, heated blush, confidence falling apart" },
      { ja: "平静失い顔", en: "lost composure, unfocused eyes, uneven breathing, flushed cheeks" },
      { ja: "表情乱れ顔", en: "disturbed expression, watery eyes, trembling mouth, emotional breakdown" }
    ],
    "🔞 🔥 焦り・寸前 (Secret Instinctive Urgency)": [
      { ja: "焦らし顔", en: "restless eyes, flushed face, desperate heat, drooling, panting" },
      { ja: "張りつめ顔", en: "tense expression, focused eyes, biting lip, restrained heat" },
      { ja: "寸前硬直顔", en: "frozen in pleasure, rolling eyes, trembling lips, stiffened body, mindless heat" },
      { ja: "息止め顔", en: "holding breath, flushed cheeks, intense eyes, stiffened posture" }
    ],
    "🔞 ⚔ 反撃・主導奪取 (Secret Lecherous Takeover)": [
      { ja: "反撃笑顔", en: "lewd smile, dominant gaze, predatory smirk, flushed face" },
      { ja: "主導奪取顔", en: "confident expression, steady gaze, leading presence, calm smile" },
      { ja: "逆転余裕顔", en: "victorious smirk, confident gaze, superior composure, dominant expression" },
      { ja: "仕返し顔", en: "naughty grin, possessive look, teasing dominance, heavy breath" }
    ],
    "🔞 🫀 執着深化 (Secret Obsessive Lust)": [
      { ja: "離したくない顔", en: "clinging expression, lustful gaze, desperate attachment, heavy blush" },
      { ja: "強い執着顔", en: "intense obsession, dilated pupils, predatory eyes, deep desire" },
      { ja: "逃がさない顔", en: "unbroken gaze, entranced eyes, flushed face, unable to look away" },
      { ja: "目で縛る顔", en: "locked-on gaze, dilated pupils, predatory eyes, intense desire" }
    ],
    "🔞 👑 満足・優位 (Secret Corrupted Satisfaction)": [
      { ja: "満足勝ち顔", en: "satisfied smirk, blissful daze, euphoric dominance, flushed face" },
      { ja: "優位確信顔", en: "confident lewd smile, superior look, heavy breathing, mocking eyes" },
      { ja: "してやったり顔", en: "smug grin, satisfied eyes, playful confidence, triumphant expression" },
      { ja: "勝ち気満足顔", en: "confident smirk, steady gaze, relaxed face, certain victory expression" }
    ]
  };


  const SCENE_FACE_DATA = {
    "🌶 食リアクション (Food Reaction Faces)": [
      { ja: "辛い顔", en: "full-face blush, flushed face, tearing up, sweat beads, steam from face, tongue out, open mouth, shock lines" },
      { ja: "美味すぎて昇天顔", en: "sparkles on face, watery eyes, soft smile, rosy cheeks, floating hearts, blissful expression" },
      { ja: "酸っぱすぎる顔", en: "puckered lips, watery eyes, sweatdrop, confusion lines, shocked expression" },
      { ja: "熱すぎる顔", en: "full-face blush, steam from face, panic sweat, open mouth, shock lines" },
      { ja: "激辛悶絶顔", en: "full-face blush, tearing up, streaming tears, sweat beads, steam from face, tongue out, mouth wide open, agony, shock lines" },
      { ja: "美味感涙顔", en: "watery eyes, tearing up, blissful expression, soft smile, rosy cheeks, floating hearts, sparkles on face" },
      { ja: "熱々涙目顔", en: "full-face blush, watery eyes, tearing up, steam from face, panic sweat, open mouth, shock lines" },
      { ja: "酸っぱしわ顔", en: "puckered lips, wrinkled face, watery eyes, squeezed eyes, confusion lines, shocked expression" },
      { ja: "苦味崩壊顔", en: "grimace, twisted face, disgust, squeezed eyes, tongue out, stress lines, shock lines" }
    ],
    "🎭 キャラ性・演技 (Character & Dramatic Faces)": [
      { ja: "悪役顔", en: "evil face, sinister grin, wicked smirk, triumphant expression, plotting expression, narrowed eyes, cold gaze, shadowed eyes" },
      { ja: "勝者の顔", en: "smug smile, half-lidded eyes, confident look, triumphant expression" },
      { ja: "小悪魔の顔", en: "smirk, teasing look, half-lidded eyes, sparkle effect around face" },
      { ja: "企み顔", en: "plotting expression, narrowed eyes, smirk, shadow over eyes" },
      { ja: "冷酷悪役顔", en: "cold gaze, emotionless face, narrowed eyes, shadowed eyes, villainous aura, intimidating expression" },
      { ja: "狂気悪役顔", en: "manic grin, crazy eyes, wide eyes, twitching face, unhinged expression, shadow over face" },
      { ja: "悪役余裕顔", en: "sinister grin, half-lidded eyes, smug smile, composed expression, cold gaze" },
      { ja: "勝者余裕顔", en: "smug smile, half-lidded eyes, confident look, victorious expression, relaxed face" },
      { ja: "小悪魔あざと顔", en: "teasing smile, smug face, half-lidded eyes, playful wink, flirtatious expression" },
      { ja: "企み成就顔", en: "triumphant smirk, narrowed eyes, satisfied expression, villain smile, shadow over eyes" }
    ],
    "⚠ トラブル・出来事 (Situation Faces)": [
      { ja: "バレた時の顔", en: "panic sweat, shock lines, averted gaze, embarrassment lines, wide eyes" },
      { ja: "ホラー遭遇顔", en: "pale face, shock lines, wide eyes, trembling, sweatdrop" },
      { ja: "体調不良顔", en: "pale face, blank face, dark circles under eyes, runny nose" },
      { ja: "やらかし顔", en: "sweatdrop, confusion lines, embarrassed expression, averted gaze" },
      { ja: "バレ硬直顔", en: "wide eyes, frozen expression, panic sweat, shock lines, stiff face" },
      { ja: "失態青ざめ顔", en: "pale face, panic sweat, embarrassed expression, confusion lines, shock lines" },
      { ja: "ホラー絶叫顔", en: "screaming, wide eyes, pale face, trembling, shock lines, terror" },
      { ja: "寝不足限界顔", en: "dark circles under eyes, half-closed eyes, exhausted face, pale face, messy expression" },
      { ja: "不調ぐったり顔", en: "pale face, droopy eyes, dark circles under eyes, blank face, exhausted expression" }
    ],
    "🍽 食リアクション・拡張 (Expanded Food Reaction Faces)": [
      { ja: "幸福満面顔", en: "big smile, glowing face, soft blush, sparkling eyes, blissful expression, happy aura" },
      { ja: "一口感動顔", en: "wide eyes, soft smile, watery eyes, sparkles on face, amazed expression, rosy cheeks" },
      { ja: "口福とろけ顔", en: "melted smile, half-lidded eyes, rosy cheeks, blissful expression, dreamy face" },
      { ja: "猫舌困り顔", en: "panic sweat, pursed lips, watery eyes, troubled face, steam from face, flustered expression" },
      { ja: "甘味とろけ顔", en: "soft smile, dreamy eyes, rosy cheeks, blissful expression, floating hearts, relaxed face" },
      { ja: "爆食夢中顔", en: "focused eyes, puffed cheeks, eager expression, messy mouth, intense eating face, lively expression" }
    ],
    "😳 照れ・気まずさ (Embarrassed & Awkward Faces)": [
      { ja: "気まず笑い顔", en: "awkward smile, averted gaze, sweatdrop, embarrassed expression, stiff face" },
      { ja: "誤魔化し笑顔", en: "forced smile, shifting eyes, sweatdrop, nervous grin, embarrassed face" },
      { ja: "目逸らし赤面顔", en: "heavy blush, looking away, shy expression, lips pressed together, flustered face" },
      { ja: "褒められ照れ顔", en: "soft blush, shy smile, sparkling eyes, embarrassed expression, looking away" },
      { ja: "見られ硬直顔", en: "wide eyes, frozen smile, embarrassment lines, stiff face, panic sweat" },
      { ja: "言葉詰まり顔", en: "open mouth, hesitant expression, averted gaze, blush, nervous face, awkward pause" }
    ],
    "😱 パニック・事故 (Panic & Mishap Faces)": [
      { ja: "大惨事直前顔", en: "panic sweat, wide eyes, alarmed expression, shock lines, tense face" },
      { ja: "完全フリーズ顔", en: "blank stare, frozen expression, wide eyes, stiff face, shock lines" },
      { ja: "現実逃避顔", en: "empty smile, unfocused eyes, blank face, soul leaving body, awkward calm" },
      { ja: "修羅場突入顔", en: "sweat beads, gritted teeth, tense eyes, panic expression, crisis face" },
      { ja: "大汗焦り顔", en: "heavy sweat, flustered expression, wide eyes, panic face, trembling" },
      { ja: "泣き寸前顔", en: "watery eyes, trembling lips, panicked face, holding back tears, shocked expression" }
    ],
    "😈 悪役・企み (Villain & Plotting Faces)": [
      { ja: "薄笑い悪役顔", en: "thin smile, cold gaze, half-lidded eyes, villainous expression, shadow over eyes" },
      { ja: "見下し顔", en: "disdainful expression, lowered eyelids, slight smirk, cold gaze, superior attitude" },
      { ja: "愉悦悪役顔", en: "sadistic smile, delighted eyes, sinister grin, cruel amusement, villainous aura" },
      { ja: "黒幕満足顔", en: "satisfied smirk, shadowed eyes, composed expression, mastermind vibe, cold confidence" },
      { ja: "計画通り顔", en: "knowing grin, narrowed eyes, smug smile, plotting expression, satisfied face" },
      { ja: "勝利確信顔", en: "confident smirk, steady gaze, relaxed face, certain victory expression, intimidating calm" }
    ],
    "💤 疲労・不調 (Fatigue & Sickly Faces)": [
      { ja: "徹夜死に顔", en: "dark circles under eyes, lifeless eyes, exhausted face, pale face, empty expression" },
      { ja: "眠気限界顔", en: "half-closed eyes, drooping eyelids, yawning face, sleepy expression, tired blush" },
      { ja: "集中切れ顔", en: "blank stare, tired eyes, slack mouth, worn-out face, mental fatigue" },
      { ja: "熱っぽい顔", en: "flushed face, droopy eyes, weak expression, feverish blush, exhausted face" },
      { ja: "力尽き顔", en: "empty eyes, exhausted expression, pale face, limp face, drained energy" },
      { ja: "虚ろ疲労顔", en: "vacant eyes, dark circles under eyes, pale face, weak expression, listless face" }
    ],
    "👻 ホラー・恐怖 (Horror & Fear Faces)": [
      { ja: "血の気引き顔", en: "pale face, trembling lips, wide eyes, fear expression, blood draining from face" },
      { ja: "青ざめ凝視顔", en: "staring eyes, pale face, frozen fear, tense face, shock lines" },
      { ja: "息呑み顔", en: "sharp inhale, wide eyes, frozen mouth, tense expression, sudden fear" },
      { ja: "声失い顔", en: "silent scream, wide eyes, pale face, trembling, speechless terror" },
      { ja: "震え固まり顔", en: "shaking, frozen body, fearful eyes, pale face, stiff expression" },
      { ja: "背筋凍る顔", en: "cold sweat, horrified eyes, pale face, tense mouth, terror, dread" }
    ],
    "💘 魅了・小悪魔 (Seductive & Teasing Faces)": [
      { ja: "じっと誘惑顔", en: "seductive gaze, half-lidded eyes, slight smile, inviting look, alluring expression" },
      { ja: "甘え上目顔", en: "upturned eyes, soft blush, pleading smile, cute expression, affectionate face" },
      { ja: "からかい笑顔", en: "teasing smile, playful eyes, smug face, light blush, mischievous expression" },
      { ja: "流し目誘惑顔", en: "side glance, seductive smile, half-lidded eyes, alluring look, teasing expression" },
      { ja: "見透かし笑顔", en: "knowing smile, half-lidded eyes, calm gaze, teasing confidence, smug expression" },
      { ja: "思わせぶり顔", en: "ambiguous smile, soft gaze, slight blush, flirtatious expression, unreadable charm" }
    ],
    "🏆 勝利・達成 (Victory & Achievement Faces)": [
      { ja: "完全勝利顔", en: "triumphant smile, proud face, confident eyes, victory expression, composed confidence" },
      { ja: "してやったり顔", en: "smug grin, satisfied eyes, playful confidence, triumphant expression, relaxed face" },
      { ja: "ドヤ満足顔", en: "smug smile, raised chin, confident look, satisfied expression, prideful face" },
      { ja: "会心笑み顔", en: "knowing smile, confident eyes, fulfilled expression, soft smirk, success face" },
      { ja: "任務完了顔", en: "calm smile, relieved expression, steady eyes, composed face, mission accomplished vibe" },
      { ja: "逆転勝利顔", en: "victorious grin, intense eyes, relieved confidence, triumphant face, comeback energy" }    ],
    "💗 好意・ときめき (Affection & Heartflutter Faces)": [
      { ja: "好き漏れ顔", en: "soft blush, shy smile, eyes full of affection, flustered expression, heartwarming gaze" },
      { ja: "ときめき顔", en: "sparkling eyes, soft blush, lips slightly parted, enchanted expression, heart-throbbing look" },
      { ja: "胸きゅん顔", en: "warm blush, shining eyes, touched expression, gentle smile, overwhelmed with affection" },
      { ja: "恋うっとり顔", en: "half-lidded dreamy eyes, soft blush, relaxed smile, lovestruck expression, dreamy face" },
      { ja: "会えて嬉しい顔", en: "bright smile, watery eyes, joyful blush, relieved expression, happiness overflowing" },
      { ja: "見つめ照れ顔", en: "looking into someone's eyes, shy blush, nervous smile, flustered expression, bashful face" }
    ],
    "😊 喜び・幸福 (Joy & Happiness Faces)": [
      { ja: "嬉しさ満開顔", en: "full smile, glowing face, sparkling eyes, cheerful blush, happiness overflowing" },
      { ja: "幸福満面顔", en: "radiant smile, soft blush, warm eyes, deeply happy expression, blissful face" },
      { ja: "ご満悦顔", en: "satisfied smile, proud but soft expression, relaxed eyes, content face" },
      { ja: "報われ顔", en: "relieved smile, teary eyes, soft blush, fulfilled expression, emotional satisfaction" },
      { ja: "褒められ嬉し顔", en: "bashful smile, bright eyes, soft blush, pleased expression, happy reaction to praise" },
      { ja: "しみじみ幸せ顔", en: "gentle smile, calm eyes, soft blush, peaceful happiness, quietly fulfilled expression" }
    ],
    "✨ 期待・きらめき (Expectation & Sparkling Faces)": [
      { ja: "目輝き顔", en: "sparkling eyes, excited smile, eager expression, bright face, lively anticipation" },
      { ja: "期待満ち顔", en: "hopeful eyes, soft smile, uplifted expression, bright anticipation, gentle excitement" },
      { ja: "わくわく顔", en: "wide sparkling eyes, excited smile, eager expression, energetic anticipation" },
      { ja: "胸高鳴り顔", en: "slightly parted lips, bright eyes, soft blush, thrilled expression, heart-racing face" },
      { ja: "待ちきれない顔", en: "restless excitement, shining eyes, eager smile, impatient anticipation, lively face" },
      { ja: "希望きらめき顔", en: "radiant eyes, hopeful smile, soft glow, inspired expression, shining anticipation" }
    ],
    "🥺 甘え・お願い (Pleading & Needy Faces)": [
      { ja: "甘え上目顔", en: "puppy eyes, needy gaze, slightly upward eyes, soft pleading expression, tender dependence" },
      { ja: "おねだり顔", en: "begging face, asking expression, hopeful eyes, slightly pouting lips, cute request" },
      { ja: "お願い顔", en: "pleading expression, earnest eyes, gentle asking face, soft hopeful look" },
      { ja: "拗ね甘え顔", en: "sulky needy face, pouting lips, clingy expression, soft eyes, playful dependence" },
      { ja: "かまって顔", en: "attention-seeking face, needy expression, expectant eyes, subtle pout, wanting affection" },
      { ja: "許して顔", en: "sorry pleading face, apologetic eyes, timid begging expression, soft vulnerable look" }
    ],
    "🤝 信頼・安心 (Trust & Relief Faces)": [
      { ja: "安心しきり顔", en: "fully relieved face, relaxed expression, gentle calm eyes, soft smile, feeling safe" },
      { ja: "信頼まなざし顔", en: "trusting gaze, warm eyes, sincere gentle expression, soft relaxed face" },
      { ja: "ほっと安堵顔", en: "relieved face, soft exhale expression, calm relaxed features, quiet comfort" },
      { ja: "任せきり顔", en: "relying expression, trusting face, calm dependence, soft smile, leaving it to someone" },
      { ja: "守られ安心顔", en: "protected relieved face, safe expression, softened eyes, gentle comfort" },
      { ja: "心許し顔", en: "opened-heart expression, trusting relaxed face, gentle smile, emotional ease" }
    ],
    "🌸 癒やし・穏やか (Healing & Peaceful Faces)": [
      { ja: "癒やし微笑顔", en: "healing smile, gentle eyes, soft peaceful expression, calm warmth" },
      { ja: "穏やか微笑顔", en: "calm smile, relaxed eyes, serene expression, quiet tenderness" },
      { ja: "やさし包み顔", en: "embracing gentle face, warm eyes, soft caring expression, soothing presence" },
      { ja: "見守り笑顔", en: "watching-over smile, kind eyes, calm supportive expression, soft warmth" },
      { ja: "ほのぼの顔", en: "cozy peaceful face, gentle smile, relaxed features, heartwarming mood" },
      { ja: "安らぎ満ち顔", en: "restful expression, peaceful eyes, soft smile, filled with comfort" }
    ],
    "🎁 驚き・感激 (Surprise & Deep Emotion Faces)": [
      { ja: "感激うるみ顔", en: "moved teary eyes, touched expression, trembling smile, emotional warmth" },
      { ja: "うれし驚き顔", en: "happy surprise face, widened shining eyes, open smile, bright reaction" },
      { ja: "思わず息呑み顔", en: "gasping in amazement, breath-catching expression, widened eyes, emotional shock" },
      { ja: "胸打たれ顔", en: "deeply moved face, soft stunned eyes, emotional silence, touched expression" },
      { ja: "言葉失い顔", en: "speechless emotional face, stunned eyes, trembling lips, overwhelmed feeling" },
      { ja: "贈り物感激顔", en: "gift-received emotional face, watery eyes, grateful smile, overwhelmed happiness" }
    ],
    "🙌 達成・開放感 (Achievement & Release Faces)": [
      { ja: "やり切り顔", en: "accomplished face, relieved smile, loosened tension, fulfilled expression" },
      { ja: "達成満面顔", en: "achievement-filled smile, bright satisfied face, proud joy, fulfilled look" },
      { ja: "解放安堵顔", en: "released relief face, deep exhale, softened eyes, tension finally gone" },
      { ja: "勝ち抜き顔", en: "survived-and-won face, confident relief, strong satisfied expression" },
      { ja: "終わった顔", en: "it's finally over face, exhausted relief, slackened tension, liberated expression" },
      { ja: "報酬待ち顔", en: "reward-awaiting grin, excited relief, satisfied expectation, playful confidence" }
    ],
    "🤲 受け止め・包容 (Acceptance & Embrace Faces)": [
      { ja: "受け止め微笑顔", en: "accepting gentle smile, soft eyes, warm understanding expression" },
      { ja: "包み込み顔", en: "embracing face, caring eyes, protective smile, soft emotional warmth" },
      { ja: "大丈夫顔", en: "it's okay face, calm reassuring eyes, gentle supportive smile" },
      { ja: "寄り添い顔", en: "close comforting face, tender gaze, empathetic smile, quiet support" },
      { ja: "許し受容顔", en: "forgiving accepting face, softened eyes, kind expression, emotional openness" },
      { ja: "静か肯定顔", en: "quiet affirming face, calm smile, understanding eyes, peaceful approval" }
    ],
    "🤍 切なさ・余韻 (Bittersweet & Lingering Faces)": [
      { ja: "切なみ顔", en: "bittersweet face, fragile eyes, quiet ache, soft emotional tremble" },
      { ja: "名残惜し顔", en: "reluctant-to-part face, lingering gaze, soft sadness, tender restraint" },
      { ja: "しんみり顔", en: "wistful face, softened eyes, quiet reflection, subdued emotion" },
      { ja: "遠い目余韻顔", en: "lingering distant gaze face, reflective eyes, emotional afterglow, quiet memory" },
      { ja: "言えない想い顔", en: "unspoken feelings face, hesitant lips, moist eyes, hidden affection" },
      { ja: "余韻うるみ顔", en: "teary lingering emotion face, shimmering eyes, emotional aftertaste, quiet depth" }
    ],
    "🔥 闘志・気合 (Fighting Spirit & Determination Faces)": [
      { ja: "闘志燃え顔", en: "burning fighting spirit face, fierce eyes, heated resolve, battle-ready expression" },
      { ja: "気合満ち顔", en: "determination-filled face, focused eyes, gathered spirit, intense readiness" },
      { ja: "やる気全開顔", en: "fully fired-up face, energetic eyes, pumped-up mood, eager intensity" },
      { ja: "勝負顔", en: "game face, sharpened stare, serious focus, ready-to-win expression" },
      { ja: "食いしばり気合顔", en: "gritted-teeth determination face, tensed jaw, stubborn will, pushing forward" },
      { ja: "本気突入顔", en: "serious-mode face, locked-in eyes, total commitment, full-intensity expression" }
    ],
    "🫠 とろけ・夢見心地 (Melting & Dreamy Faces)": [
      { ja: "とろけ顔", en: "melting face, softened eyes, dissolved tension, blissful warmth" },
      { ja: "夢見心地顔", en: "dreamy bliss face, hazy eyes, floating mood, gentle happiness" },
      { ja: "うっとりとろ顔", en: "entranced melting face, heavy-lidded eyes, sweet daze, soft surrender" },
      { ja: "幸せとろ顔", en: "happily melted face, loosened smile, warm comfort, glowing contentment" },
      { ja: "ぽやぽや顔", en: "fluffy absent-minded face, softened focus, airy mood, gentle blankness" },
      { ja: "甘夢うっとり顔", en: "sweet dreamy entranced face, rosy calm, drifting bliss, tender fascination" }
    ],
    "🌀 混乱・処理落ち (Confusion & Brain Lag Faces)": [
      { ja: "処理落ち顔", en: "brain-lag face, frozen thinking, delayed reaction, overloaded expression" },
      { ja: "混乱ぐるぐる顔", en: "swirling confusion face, dizzy thoughts, spinning focus, mental overload" },
      { ja: "情報過多顔", en: "too-much-information face, overwhelmed eyes, crowded thoughts, sensory overload" },
      { ja: "理解追いつか顔", en: "can't-keep-up face, lost processing, delayed understanding, stunned confusion" },
      { ja: "思考停止顔", en: "thought-stopped face, blank stare, halted mind, unable to process" },
      { ja: "混線ぽかん顔", en: "cross-wired blank face, dazed confusion, open-mouthed pause, tangled thoughts" }
    ]
  };

  const DICT = {
    "smug": "ドヤ顔", "disdain": "軽蔑", "seductive smile": "誘惑笑い", "yandere": "ヤンデレ",
    "ahegao": "アヘ顔/恍惚", "despair": "絶望", "crazy": "狂気", "panicked": "パニック",
    "tsundere": "ツンデレ", "kuudere": "クーデレ", "evil smile": "邪悪な笑み", "gentle smile": "優しい笑み",
    "eating": "食べる", "drinking": "飲む", "sleeping": "寝る", "yawning": "あくび",
    "kissing": "キス", "blowing kiss": "投げキッス", "wink": "ウインク", "shouting": "叫ぶ",
    "licking": "舐める", "chewing": "噛む", "hand on chin": "あごに手",
    "head resting on hand": "頬杖", "shushing": "シーッ",

    // ★ R-18用 拡張翻訳辞書
    "ahegao:1.3": "アヘ顔(強)", "rolling eyes": "白目/上転", "drooling": "よだれ",
    "tongue out:1.2": "長い舌出し", "mouth wide open, gaping": "だらしない口", "v-shaped eyebrows": "V字眉毛",
    "pleasure face, euphoric expression": "快楽堕ち", "in heat, lustful expression": "発情",
    "drunk, flushed from alcohol, tipsy": "酔っ払い", "hypnotized, mind control": "催眠・洗脳",
    "swirl eyes": "ぐるぐる目", "unfocused eyes, glazed eyes": "焦点の合わない目",
    "trance, blank stare": "トランス", "empty mind, drooling": "思考放棄",
    "lewd smile, vulgar expression": "下品な笑み", "smug face, mocking smile, bratty": "メスガキスマイル",
    "seductive gaze, inviting look": "淫らな誘惑", "licking lips": "舌なめずり",
    "naughty face, perverted smile": "卑しい顔",
    "tears, crying uncontrollably": "号泣", "heavy blush, flushed face": "激しい赤面", 
    "begging expression": "懇願", "embarrassed, looking away shyly": "羞恥", 
    "humiliation, frustrated tears": "屈辱", "painful expression, grimace": "苦痛顔",
    "clenched teeth, biting lip": "食いしばり", "empty eyes, no pupil highlights": "ハイライト消滅",
    "vacant eyes, glassy eyes": "レイプ目", "heart-shaped pupils": "ハート目",
    "pink eyes, love struck": "ピンク瞳", "mind break, broken expression": "精神崩壊", 
    "heavy breathing, panting": "激しい息", "stringy saliva, saliva trail": "よだれの糸", 
    "something in mouth": "咥える", "gagging, choking": "えづく", "messy face": "顔面まみれ"
  };

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      let parent = document.querySelector("#list-expression");
      if (!parent) return;

      const ensureTopGroups = () => {
  let contentArea = parent.querySelector(".section-content");
  if (!contentArea) {
    contentArea = document.createElement("div");
    contentArea.className = "section-content";
    parent.appendChild(contentArea);
  }

  let wrapper = contentArea.querySelector('.expression-top-groups');
  if (!wrapper) {
    wrapper = document.createElement('div');
    wrapper.className = 'expression-top-groups';
    wrapper.style.cssText = 'display:flex; flex-direction:column; gap:10px;';
    contentArea.appendChild(wrapper);
  }

  const makeTopGroup = (cls, title, border, bg) => {
    let details = wrapper.querySelector(`.${cls}`);
    if (!details) {
      details = document.createElement('details');
      details.className = `expression-top-group ${cls}`;
      details.open = false;
      details.style.cssText = `margin-bottom:4px; border:2px solid ${border}; border-radius:8px; background:#fff; overflow:hidden;`;

      const summary = document.createElement('summary');
      summary.textContent = title;
      summary.style.cssText = `font-weight:bold; padding:10px 12px; cursor:pointer; font-size:1.08em; color:#333; background:${bg}; list-style:none; outline:none;`;
      details.appendChild(summary);

      const inner = document.createElement('div');
      inner.className = 'expression-top-group-content';
      inner.style.cssText = 'padding:10px; display:flex; flex-direction:column; gap:8px;';
      details.appendChild(inner);
      wrapper.appendChild(details);
    }
    return details.querySelector('.expression-top-group-content');
  };

  return {
    emotion: makeTopGroup('expression-top-emotion', '😊 感情設計 (Emotion Design)', '#d9c6ff', '#faf7ff'),
    facial: makeTopGroup('expression-top-facial', '🧩 顔パーツ・演出 (Facial Parts & FX)', '#bfe3ff', '#f5fbff'),
    scene: makeTopGroup('expression-top-scene', '🎬 シーン顔 (Scene Faces)', '#ffd59e', '#fff8ef'),
    r18collections: makeTopGroup('expression-top-r18-collections', '🧠 R-18感情コレクション (R-18 Emotion Collections)', '#f2b6d0', '#fff5fa')
  };
};

      const createCat = (title, items, isSecret = false) => {
        const details = document.createElement("details");
        details.className = "expression-cat";
        
        // ★ シークレット時は赤っぽい枠線
        const borderColor = isSecret ? "#ffb3b3" : "#eee";
        details.style.cssText = `margin-bottom:6px; border:1px solid ${borderColor}; border-radius:4px; background:#fff;`;
        details.open = false; 

        const summary = document.createElement("summary");
        
        // ★ シークレット時は見た目を変更
        if (isSecret) {
          summary.innerHTML = `${title} <span style="font-size:0.8em; color:#d9534f;">(R-18)</span>`;
          summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#fff0f0; color:#d9534f;";
        } else {
          summary.innerHTML = `${title}`;
          summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f9f9f9; color:#555;";
        }
        
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:6px;";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.style.marginRight = "6px";
          cb.dataset.val = item.en;
          label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja}`));
          label.title = item.en;
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const createItemGrid = (items) => {
        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(2, 1fr); gap:6px;";
        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.style.marginRight = "6px";
          cb.dataset.val = item.en;
          label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          if (item.desc) label.title = item.desc;
          content.appendChild(label);
        });
        return content;
      };

      const createFacialSubCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "expression-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        details.open = false;
        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f9f9f9; color:#555;";
        details.appendChild(summary);
        details.appendChild(createItemGrid(items));
        return details;
      };

      const createFaceEffectsCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "expression-cat expression-cat-faceeffects";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        details.open = false;
        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f9f9f9; color:#555;";
        details.appendChild(summary);
        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:flex; flex-direction:column; gap:8px;";
        const byEn = new Map(items.map(item => [item.en, item]));
        const used = new Set();
        FACIAL_FACE_EFFECTS_GROUPS.forEach(group => {
          const groupItems = group.ens.map(en => byEn.get(en)).filter(Boolean);
          groupItems.forEach(item => used.add(item.en));
          if (!groupItems.length) return;
          content.appendChild(createFacialSubCat(group.title, groupItems));
        });
        const leftovers = items.filter(item => !used.has(item.en));
        if (leftovers.length) content.appendChild(createFacialSubCat("📦 その他 (Other)", leftovers));
        details.appendChild(content);
        return details;
      };

      const createPlaceholderItems = (prefix) => ([
        { ja: `仮項目_${prefix}`, en: `placeholder_${prefix}` }
      ]);

      const createSpecializedCollectionScaffold = () => {
        const details = document.createElement("details");
        details.className = "expression-cat expression-r18-specialized-collection";
        details.style.cssText = "margin-bottom:6px; border:1px solid #f2b6d0; border-radius:6px; background:#fff;";
        details.open = false;

        const summary = document.createElement("summary");
        summary.innerHTML = `🧠 精神操作・状態異常特化コレクション <span style="font-size:0.8em; color:#b05a84;">(Mind Control / Status Ailment Specialized Collection)</span>`;
        summary.style.cssText = "font-weight:bold; padding:8px 10px; cursor:pointer; background:#fff5fa; color:#7b3f5c;";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:flex; flex-direction:column; gap:8px;";

        const guide = document.createElement("div");
        guide.style.cssText = "font-size:0.82em; color:#8a5a73; padding:2px 2px 6px 2px;";
        guide.textContent = "Complete sets now rebuild Base / Customize / Settings exclusively inside this collection.";
        content.appendChild(guide);

        const sectionDefs = [
          {
            key: "complete_sets",
            title: "1. 完成セット (Complete Sets)",
            items: [
              { ja: "🌀 催眠・洗脳セット", en: "vacant eyes, unfocused eyes, thought cessation, obedient" },
              { ja: "💗 媚薬・発情セット", en: "heart-shaped pupils, heavy blush, heavy breathing, pleasure surrender" },
              { ja: "😴 睡眠・無意識セット", en: "closed eyes, slack mouth, droopy eyelids, sleepwalking feel" }
            ]
          },
          {
            key: "base",
            title: "2. ベース (Base)",
            items: [
              { ja: "ハート目", en: "heart-shaped pupils" },
              { ja: "虚ろな目", en: "vacant eyes" },
              { ja: "ぐるぐる目", en: "swirling eyes" },
              { ja: "睡眠状態", en: "sleeping state" },
              { ja: "焦点の合わない目", en: "unfocused eyes" },
              { ja: "ハイライト消失目", en: "lifeless eyes" },
              { ja: "夢見のような瞳", en: "dreamy eyes" },
              { ja: "半開きの目", en: "half-closed eyes" },
              { ja: "力の抜けた口元", en: "slack mouth" }
            ]
          },
          {
            key: "customize",
            title: "3. カスタマイズ (Customize)",
            items: [
              { ja: "よだれ", en: "drooling" },
              { ja: "涙目", en: "watery eyes" },
              { ja: "激しい紅潮", en: "heavy blush" },
              { ja: "乱れた呼吸", en: "heavy breathing" },
              { ja: "震える唇", en: "quivering lips" },
              { ja: "息が漏れる口元", en: "panting mouth" },
              { ja: "とろけた視線", en: "melted gaze" },
              { ja: "瞳孔拡大", en: "dilated pupils" },
              { ja: "眠気で落ちるまぶた", en: "droopy eyelids" },
              { ja: "表情の崩れ", en: "expression collapse" }
            ]
          },
          {
            key: "settings",
            title: "4. 設定 (Settings)",
            items: [
              { ja: "従順", en: "obedient" },
              { ja: "意識混濁", en: "clouded consciousness" },
              { ja: "快楽堕ち", en: "pleasure surrender" },
              { ja: "抵抗喪失", en: "loss of resistance" },
              { ja: "判断力低下", en: "impaired judgment" },
              { ja: "命令受容", en: "command acceptance" },
              { ja: "思考停止", en: "thought cessation" },
              { ja: "夢遊感", en: "sleepwalking feel" },
              { ja: "快感優先", en: "pleasure priority" },
              { ja: "正気と崩壊の境界", en: "boundary of sanity and collapse" }
            ]
          }
        ];

        const sectionNodes = new Map();
        const inputMap = new Map();

        sectionDefs.forEach((section) => {
          const node = createFacialSubCat(section.title, section.items);
          node.dataset.collectionRole = section.key;
          sectionNodes.set(section.key, node);
          node.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
            if (cb.dataset && cb.dataset.val) inputMap.set(cb.dataset.val, cb);
          });
          content.appendChild(node);
        });

        const completeSetLinks = {
          "vacant eyes, unfocused eyes, thought cessation, obedient": [
            "vacant eyes",
            "unfocused eyes",
            "lifeless eyes",
            "dreamy eyes",
            "melted gaze",
            "clouded consciousness",
            "thought cessation",
            "obedient"
          ],
          "heart-shaped pupils, heavy blush, heavy breathing, pleasure surrender": [
            "heart-shaped pupils",
            "heavy blush",
            "heavy breathing",
            "quivering lips",
            "panting mouth",
            "dilated pupils",
            "pleasure surrender",
            "pleasure priority"
          ],
          "closed eyes, slack mouth, droopy eyelids, sleepwalking feel": [
            "slack mouth",
            "droopy eyelids",
            "sleepwalking feel"
          ]
        };

        const completeSetNode = sectionNodes.get("complete_sets");
        const lowerSectionKeys = ["base", "customize", "settings"];
        const setInputs = completeSetNode ? Array.from(completeSetNode.querySelectorAll('input[type="checkbox"]')) : [];
        const lowerInputs = lowerSectionKeys.flatMap((key) => {
          const node = sectionNodes.get(key);
          return node ? Array.from(node.querySelectorAll('input[type="checkbox"]')) : [];
        });

        let internalUpdate = false;
        let activeSetInput = null;

        const clearLowerInputs = () => {
          lowerInputs.forEach((cb) => {
            cb.checked = false;
          });
        };

        const clearSetInputs = (keep = null) => {
          setInputs.forEach((cb) => {
            if (cb !== keep) cb.checked = false;
          });
        };

        const openLinkedShelves = (vals) => {
          lowerSectionKeys.forEach((key) => {
            const node = sectionNodes.get(key);
            if (!node) return;
            const hasLinked = Array.from(node.querySelectorAll('input[type="checkbox"]')).some((cb) => vals.includes(cb.dataset.val));
            if (hasLinked) node.open = true;
          });
          details.open = true;
        };

        const applyCompleteSet = (setCb) => {
          const vals = completeSetLinks[setCb.dataset.val] || [];
          internalUpdate = true;
          clearSetInputs(setCb);
          clearLowerInputs();
          setCb.checked = true;
          vals.forEach((val) => {
            const target = inputMap.get(val);
            if (target) target.checked = true;
          });
          openLinkedShelves(vals);
          activeSetInput = setCb;
          internalUpdate = false;
        };

        const clearActiveCompleteSet = ({ clearLower = false } = {}) => {
          internalUpdate = true;
          if (activeSetInput) activeSetInput.checked = false;
          if (clearLower) clearLowerInputs();
          activeSetInput = null;
          internalUpdate = false;
        };

        setInputs.forEach((cb) => {
          cb.addEventListener("change", () => {
            if (internalUpdate) return;
            if (cb.checked) {
              applyCompleteSet(cb);
            } else if (activeSetInput === cb) {
              clearActiveCompleteSet({ clearLower: true });
            }
          });
        });

        lowerInputs.forEach((cb) => {
          cb.addEventListener("change", () => {
            if (internalUpdate) return;
            if (activeSetInput) {
              clearActiveCompleteSet({ clearLower: false });
            }
          });
        });

        const note = document.createElement("div");
        note.style.cssText = "font-size:0.78em; color:#9a6a82; padding-top:4px; border-top:1px dashed #edc6d8;";
        note.textContent = "Complete set linkage is scoped to this collection only. Other expression shelves are untouched.";
        content.appendChild(note);

        details.appendChild(content);
        return details;
      };

      const facialRoot = document.createElement("div");
      facialRoot.className = "expression-facial-container";
      facialRoot.className = "expression-v2-container";
      const eyesRoot = document.createElement("details");
      eyesRoot.className = "expression-root-eyes";
      eyesRoot.style.cssText = "margin-bottom:10px; border:2px solid #89CFF0; border-radius:6px; background:#fff;";
      eyesRoot.open = false;
      const eyesSummary = document.createElement("summary");
      eyesSummary.textContent = "👁️ 目・瞳・視線 (Eyes)";
      eyesSummary.style.cssText = "font-weight:bold; padding:10px; cursor:pointer; font-size:1.1em; color:#333; background:#f9f9f9; display:flex; align-items:center; list-style:none; outline:none;";
      eyesRoot.appendChild(eyesSummary);
      const eyesContent = document.createElement("div");
      eyesContent.style.padding = "10px";
      eyesContent.style.display = "flex";
      eyesContent.style.flexDirection = "column";
      eyesContent.style.gap = "8px";
      Object.entries(FACIAL_EYES_DATA).forEach(([cat, items]) => {
        eyesContent.appendChild(createFacialSubCat(cat, items));
      });
      eyesRoot.appendChild(eyesContent);
      facialRoot.appendChild(eyesRoot);
      Object.entries(FACIAL_OTHER_DATA).forEach(([cat, items]) => {
        if (cat === "🔞 軽量補助束 (Secret Quick Support Bundles)" && !IS_UNLOCKED) return;
        if (cat === "😳 顔面演出・漫符 (Face Effects)") facialRoot.appendChild(createFaceEffectsCat(cat, items));
        else facialRoot.appendChild(createFacialSubCat(cat, items));
      });

      const root = document.createElement("div");
      root.className = "expression-v3-container";
      
      // 1. 通常カテゴリーの追加
      Object.entries(EXPRESSION_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items, false));
      });

      // 2. ★ シークレットモードONの時だけ、R-18カテゴリーを追加
      if (IS_UNLOCKED) {
        Object.entries(SECRET_EXPRESSION_DATA).forEach(([cat, items]) => {
          root.appendChild(createCat(cat, items, true));
        });
      }

      const sceneRoot = document.createElement("div");
      sceneRoot.className = "expression-scene-container";
      if (IS_UNLOCKED && typeof SECRET_SCENE_FACE_DATA !== "undefined") {
        Object.entries(SECRET_SCENE_FACE_DATA).forEach(([cat, items]) => {
          sceneRoot.appendChild(createCat(cat, items, true));
        });
      }
      Object.entries(SCENE_FACE_DATA).forEach(([cat, items]) => {
        sceneRoot.appendChild(createCat(cat, items, false));
      });

      const groups = ensureTopGroups();
      groups.emotion.appendChild(root);
      if (!groups.facial.querySelector('.expression-v2-container')) {
        groups.facial.appendChild(facialRoot);
      }
      if (!groups.scene.querySelector('.expression-scene-container')) {
        groups.scene.appendChild(sceneRoot);
      }
      if (IS_UNLOCKED && !groups.r18collections.querySelector('.expression-r18-specialized-collection')) {
        groups.r18collections.appendChild(createSpecializedCollectionScaffold());
      }
    },

    getTags() {
      const tags = [];
      const parent = document.querySelector("#list-expression");
      if (parent) {
        parent.querySelectorAll("input[type='checkbox']:checked").forEach(cb => {
          if (cb.dataset && cb.dataset.val) tags.push(cb.dataset.val);
        });
      }
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();

