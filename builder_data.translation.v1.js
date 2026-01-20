(function(){
  "use strict";

  // ============================================================
  // 📚 統合翻訳辞書 (Complete R-18 Edition)
  // Fix: Coreの機能を上書きせず、辞書データのみを追加する安全設計
  // ============================================================

  // 1) 英→日: 統合辞書データ
  const EN_TO_JA = {
    // --- 既存・基本 (Basic) ---
    "standing pose": "立ちポーズ", "standing": "立ちポーズ",
    "idle pose": "待機ポーズ（アイドル）", "model pose": "モデル立ち",
    "contrapposto": "S字立ち（コントラポスト）", "casual pose": "日常ポーズ（カジュアル）",
    "looking over shoulder": "振り返り", "looking back": "振り返り",
    "crossed arms": "腕組み", "standing with legs apart": "仁王立ち",
    "wide stance": "仁王立ち", "hands in pockets": "ポケットに手",
    "sitting": "座り", "sitting on floor": "床に座る", "seiza": "正座",
    "kneeling": "立ち膝", "squatting": "しゃがむ", "lying": "寝そべる",
    "on stomach": "うつ伏せ", "on back": "仰向け", "on side": "横向き",

    // lighting & Shadow
    "natural lighting": "自然光", "sunlight": "太陽光",
    "soft lighting": "ソフトライティング（柔らかい）",
    "hard lighting": "ハードライティング（硬い）",
    "cinematic lighting": "シネマティック（映画風）",
    "dramatic lighting": "ドラマチック", "rembrandt lighting": "レンブラント照明",
    "volumetric lighting": "ボリュメトリック（光の筋）",
    "god rays": "ゴッドレイ", "bioluminescence": "生物発光",
    "neon lighting": "ネオン照明", "studio lighting": "スタジオ照明",
    "realistic lighting": "リアルなライティング",
    "deep shadow": "濃い影", "soft shadow": "柔らかい影",
    "drop shadow": "ドロップシャドウ", "backlighting": "逆光",
    "silhouette": "シルエット", "ray tracing": "レイトレーシング影",

    // quality & details
    "masterpiece": "傑作", "best quality": "最高品質",
    "ultra high resolution": "超高解像度", "photorealistic": "フォトリアル",
    "8k uhd": "8K UHD", "8k": "8K", "depth of field": "被写界深度",
    "bokeh": "ボケ", "blurred background": "背景ぼかし",
    "ultra-detailed": "超精細", "illustration": "イラスト調",
    "centered": "中央配置", "intricate details": "複雑な詳細",
    "highres": "高解像度", "extremely detailed": "極めて詳細",
    "sharp focus": "シャープフォーカス", "official art": "公式アート",
    "unity 8k wallpaper": "Unity 8K壁紙", "detailed background": "詳細な背景",
    "8k wallpaper": "8K壁紙", "intricate": "緻密",
    "high budget": "高予算", "hdr": "HDR", "low contrast": "低コントラスト",

    // Rendering & Art Style
    "octane render": "Octane Render", "unreal engine 5": "Unreal Engine 5",
    "physically based rendering": "PBR(物理ベース)",
    "lumen reflections": "Lumen反射", "nanite geometry": "Naniteジオメトリ",
    "subsurface scattering": "サブサーフェス(透け感)",
    "global illumination": "グローバルイルミネーション",
    "path tracing": "パストレーシング", "anime-realism blend": "アニメ・リアル調ブレンド",
    "anime coloring": "アニメ塗り", "cel shading": "セルシェーディング",
    "vibrant colors": "鮮やかな色彩", "clean lines": "綺麗な線",
    "thick painting": "厚塗り", "impasto": "インパスト(厚塗り)",
    "realistic texture": "リアルな質感", "rich colors": "豊かな色彩",
    "watercolor": "水彩", "soft colors": "柔らかな色使い",
    "wet on wet": "ウェット・オン・ウェット", "gentle atmosphere": "優しい雰囲気",
    "kodak portra 400": "Kodak Portra 400(暖かみ)",

    // Body & Face Details
    "beautiful detailed eyes": "美しく詳細な瞳", "detailed iris": "詳細な虹彩",
    "reflection in eyes": "瞳のハイライト", "sparkling eyes": "輝く瞳",
    "detailed skin": "詳細な肌", "soft skin": "柔らかい肌",
    "skin pores": "毛穴", "realistic skin texture": "リアルな肌(毛穴等)",
    "detailed hair": "詳細な髪", "hair strands": "髪の毛一本一本",
    "lustrous hair": "艶やかな髪", "shiny hair": "ツヤ髪", "glossy hair": "光沢髪",

    // ============================================================
    // 🔞 R-18 拡張辞書 (v10 Integration)
    // ============================================================
    
    // Flags
    "nsfw": "NSFW(成人向け)", "uncensored": "無修正", "r-18": "R-18",
    "lewd": "卑猥", "erotic": "エロティック", "sexual": "性的",
    "naked": "全裸", "nude": "ヌード", "no clothes": "服なし",
    "nipples": "乳首", "pussy": "秘部", 
    "sweat": "汗", "wet skin": "濡れた肌", "saliva": "唾液",
    "semen": "精液", "cum": "精液", "sticky texture": "粘着質な質感", "messy body": "汚れた体",
    "1boy": "男1人", "1girl": "女1人", "heterosexual": "男女", "sex": "セックス",
    "intimate": "親密", "couple": "カップル", "hardcore": "ハードコア",

    // Actions & Situations
    "vaginal sex": "膣セックス", "hips moving rhythmically": "リズミカルな腰の動き",
    "fully thrusting": "根元まで突き入れる", "fast motion": "高速ピストン",
    "afterimage of hips": "腰の残像", "piston motion": "ピストン運動", "shaking hips": "震える腰",
    "cum inside": "中出し", "creampie": "中出し(クリームパイ)", "overflowing cum": "溢れる精液",
    "filling womb": "子宮充填", "semen gushing deep inside": "奥深くに注がれる精液",
    "loving sex": "愛のあるセックス", "gentle sex": "優しいセックス",
    "intense eye contact": "強いアイコンタクト",
    "penetration clearly visible": "結合部がはっきり見える", "connection point": "結合部",
    "inserting": "挿入中", "glans inside": "中にある亀頭", "close up": "クローズアップ",
    "fast piston motion": "高速ピストン", "blur": "ブレ", "intense sex": "激しいセックス",
    "clapping sounds": "パンパン音", "deepest part": "最奥", 
    "clitoris stimulation": "クリ責め", "rubbing clit": "クリトリス摩擦",
    "fingering": "指入れ", "pearl": "真珠(クリトリス)",

    // X-Ray & Internal
    "cross-section": "断面図", "x-ray": "X線透視", "internal view": "体内断面",
    "cervix penetration": "子宮口到達", "womb marking": "子宮紋", "glowing womb": "光る子宮",

    // Effects
    "foggy breath trails": "白い吐息", "smeared heart-shaped breath patches": "ハート型の吐息跡",
    "erotic moan text floating": "浮かぶ喘ぎ文字", "heart particles": "ハートの粒子",
    "pink atmosphere": "ピンクの雰囲気",

    // Tentacles & Slime
    "entangled": "絡まる", "mucus": "粘液", "slime": "スライム",
    "living tentacles": "生体触手", "thick tentacle": "太い触手", 
    "slimy texture": "ぬめぬめした質感", "wriggling": "うごめく",
    "living monokini": "生体モノキニ", "tentacle suit": "触手服", "slime bodysuit": "スライムスーツ",
    "pulsing texture": "脈打つ質感", "fused with skin": "肌と融合",
    "translucent slime": "半透明スライム", "jelly fabric": "ゼリー素材",
    "glowing seams": "光る継ぎ目", "clinging tightly": "張り付く",
    "slime suit attack": "スライムスーツの襲撃", "slime groping breasts": "スライムの胸愛撫",
    "slime sucking nipples": "スライムの乳首吸引",
    "arms locked behind back": "後ろ手拘束", "bound by slime": "スライム拘束",
    "unable to resist": "抵抗不可", "tentacles invade mouth": "触手の口内侵入",
    "deep throat": "ディープスロート", "stomach bulge": "お腹の膨らみ",
    "parasite": "寄生", "eggs": "卵", "impregnation": "種付け",
    "tentacles invade deep within her body cavity": "体内侵入",
    "tentacle milking": "触手搾乳", "suction cups": "吸盤",
    "breast milking": "搾乳", "nipple stimulation": "乳首責め",
    "milking devices": "搾乳機", "petal-shaped tentacle motifs": "花弁状の触手",
    "squeezing breasts": "胸を揉む",

    // Positions
    "missionary position": "正常位", "cowgirl position": "騎乗位", "dominant female": "女性上位",
    "reverse cowgirl position": "背面騎乗位", "doggystyle": "バック",
    "spooning sex": "側位", "prone bone": "屈曲位", "mating press": "対面座位",
    "standing carry": "駅弁", "standing sex": "立位セックス", "lifted up": "持ち上げられる",
    "carrying": "運ぶ・支える", "legs wrapped around waist": "腰に足を絡める",
    "against wall": "壁際", "m-shaped posture": "M字開脚", "legs spread": "開脚",
    "on all fours": "四つん這い", "sitting on lap": "膝の上に座る",
    "straddling": "またがる", "hugging from behind": "背後から抱きつく",
    "lying on side": "横たわる", "lying on stomach": "うつ伏せ",
    "face in pillow": "枕に顔を埋める", "hips raised": "腰を上げる",
    "arched back": "背中を反らす", "looking back": "振り返る",
    "looking at viewer": "カメラ目線", "looking down": "見下ろす",
    "showing ass": "お尻見せ", "back to viewer": "背中向け",
    "grabbing hips": "腰を掴む", "ass focus": "お尻強調",
    "curved silhouette": "曲線美", "folded body": "折り畳まれた体",
    "helpless": "無力・脱力", "limp body": "ぐったり",
    "holding hands": "手をつなぐ", "bouncing breasts": "揺れる胸",

    // Service & Play
    "fellatio": "フェラチオ", "blowjob": "ブロージョブ", "sucking penis": "ペニスを吸う",
    "cheeks hollowed": "頬をこけさせる", "looking up": "見上げる", "bobbing head": "頭を振る",
    "paizuri": "パイズリ", "titfuck": "乳首責め", "sandwiching penis": "挟む",
    "breasts squished": "潰れた胸", "cleavage": "谷間", "looking at penis": "ペニスを見る",
    "handjob": "手コキ", "stroking": "しごく", "jerking off": "オナニー",
    "saliva lubrication": "唾液潤滑", "glans focus": "亀頭強調",
    "irrumatio": "イラマチオ", "face fuck": "フェイスファック", "gagging": "えずく",
    "tears": "涙", "choking": "窒息", "grabbed by hair": "髪を掴まれる",
    "69 position": "シックスナイン", "simultaneous oral": "同時奉仕",
    "mutual pleasure": "相互快楽", "top view": "トップビュー",
    "footjob": "足コキ", "soles": "足裏", "toes": "足指",
    "rubbing with feet": "足で擦る", "trampling": "踏みつけ",
    "cunnilingus": "クンニ", "licking pussy": "秘部を舐める", "tongue": "舌",
    "pleasure face": "快楽顔",

    // Clothed
    "skirt lifted": "スカートたくし上げ", "clothes lifted": "服たくし上げ",
    "exposing panties": "パンツ見せ", "access to crotch": "股間アクセス",
    "hiding face": "顔を隠す", "panties pulled aside": "パンツずらし",
    "crotchless panties": "穴あきパンツ", "fingering through clothes": "服の上から",
    "quickie": "早撃ち", "clothes half removed": "半脱ぎ",
    "bra pulled down": "ブラ下げ", "shoulders bare": "肩出し",
    "disheveled": "乱れた", "messy clothes": "着崩れ",
    "clothed sex": "着衣セックス", "sex with clothes on": "服を着たまま",
    "school uniform": "制服", "public indecency": "公然猥褻", "hastily": "急いで",

    // Expressions
    "double peace sign": "ダブルピース", "ahegao": "アヘ顔", "rolling eyes": "白目",
    "tongue out": "舌出し", "mind break": "精神崩壊", "drooling": "よだれ",
    "heart-shaped pupils": "ハート目", "pink eyes": "ピンクの瞳",
    "infatuated": "夢中", "love struck": "一目惚れ",
    "vacant eyes": "虚ろ目", "empty eyes": "空虚な目",
    "no pupil highlights": "ハイライトなし", "glassy eyes": "ガラスの瞳",
    "broken expression": "壊れた表情", "blush": "赤面", "slobber": "よだれ",
    "euphoric tears": "歓喜の涙", "ecstatic expression": "恍惚の表情",
    "crying": "泣く", "begging": "懇願", "humiliation": "屈辱",
    "flushed face": "紅潮", "desperate moan": "必死の喘ぎ",
    "orgasm": "絶頂", "girl trembling in climax": "絶頂で震える少女",
    "shaking": "震え", "toes curling": "足指カール",
    "spasms": "痙攣", "body control": "身体制御",

    // Fluids
    "copious cum": "大量射精", "cumshot": "射精", "splashing cum": "飛び散る精液",
    "cum everywhere": "精液まみれ", "cum explosion": "暴発",
    "cum on face": "顔射", "bukkake": "ぶっかけ", "sticky face": "顔に粘液",
    "eye closed": "目を閉じる", "squirting": "潮吹き", "gushing liquid": "噴出",
    "wet sheets": "濡れたシーツ", "fountain": "噴水", "pussy juice splash": "愛液の飛沫",
    "cum pool": "精液溜まり", "puddle of cum": "水たまり",
    "messy bed": "汚れたベッド", "sheets covered in fluids": "体液まみれのシーツ",
    "wet mucus fuses with her body": "粘液融合", "slime coating skin": "スライムコーティング",
    "oily sheen": "油膜", "dripping": "滴る",

    // Locations & Others
    "love hotel": "ラブホテル", "mirror room": "鏡部屋", "neon lights": "ネオン",
    "fancy bed": "豪華なベッド", "pillows": "枕",
    "bathroom": "浴室", "onsen": "温泉", "steam": "湯気", "tiled wall": "タイル壁", "soap": "石鹸",
    "magic mirror truck": "マジックミラー号", "vehicle interior": "車内",
    "city street outside window": "窓の外の街", "exposed to public": "露出",
    "voyeurism": "盗撮・覗き", "public toilet stall": "公衆トイレ個室",
    "cramped": "狭い", "sitting on toilet": "トイレに座る", "pants down": "パンツ下ろし",
    "graffiti": "落書き", "dirty tiles": "汚れたタイル", "secret sex": "秘密のセックス",
    "slime nest": "スライムの巣", "gloomy hall": "薄暗い広間", "dimly lit": "薄明かり",
    "covered in slime": "スライムまみれ", "sticky floor": "粘つく床",
    "outdoor sex": "野外セックス", "public nudity": "野外露出",
    "exposure": "露出", "shame": "羞恥", "risk of being seen": "見られる危険",
    "public park": "公園", "bench": "ベンチ", "night park": "夜の公園",
    "bushes": "茂み", "street lamp": "街灯",
    "back alley": "路地裏", "trash cans": "ゴミ箱", "dark": "暗闇",
    "wall press": "壁ドン", "dirty": "汚い",
    "forest": "森", "nature": "自然", "grass": "草", "leaves": "葉", "secluded": "人里離れた",
    "gym storage room": "体育倉庫", "sportswear": "体操服", "bloomers": "ブルマ",
    "ball cart": "ボールカゴ", "dusty": "埃っぽい", "after school": "放課後",
    "classroom": "教室", "sunset": "夕暮れ", "on desk": "机の上",
    "blackboard": "黒板", "watching door": "ドアを気にする",
    "teacher office": "指導室", "scolding": "説教", "looking up": "見上げる",
    "submission": "服従", "desk": "机", "pleading": "懇願",
    "threesome": "3P", "2boys": "男2人", "sandwich": "サンドイッチ",
    "gangbang": "輪姦", "multiple boys": "複数の男", "group sex": "乱交",
    "ugly bastard": "醜いおっさん", "fat man": "デブ", "grinning": "ニヤけ",
    "ntr": "寝取られ", "corruption": "堕落", "forced": "強制",
    "monster gangbang": "魔物輪姦", "orcs": "オーク", "goblins": "ゴブリン",
    "breeding": "種付け", "defeat": "敗北",
    "rape": "レイプ", "vaginal penetration with thick penis": "極太挿入",
    "public use": "肉便器", "cum dump": "精液処理",
    "writing on body": "落書き(体)", "leash": "リード", "toilet": "便所",
    "defeated": "敗北", "lying on ground": "地面に倒れる", "torn clothes": "破れた服",
    "orc looming": "迫るオーク", "messy hair": "乱れた髪",
    "struggling": "抵抗", "pinned down": "組み伏せられる", "fear": "恐怖",
    "ripped clothes": "引き裂かれた服",
    "time stop": "時間停止", "frozen people background": "停止した背景",
    "pause button": "一時停止ボタン", "powerless": "無力", "unaware": "無自覚",
    "hypnotized": "催眠", "swirl eyes": "ぐるぐる目", "mind control": "洗脳",
    "obeying orders": "服従",
    "pregnant": "妊娠", "alien": "エイリアン",
    "shibari": "緊縛", "rope bondage": "縄拘束", "suspension": "吊り",
    "hanging": "吊るし", "bound wrists": "手首拘束", "bound legs": "足拘束",
    "bondage chair": "拘束椅子", "restrained": "拘束", "spread legs": "開脚",
    "sex machine": "セックスマシーン", "dildo machine": "ディルドマシーン",
    "blindfold": "目隠し", "gag": "猿轡", "ball gag": "ボールギャグ",
    "sensory deprivation": "感覚遮断"
  };

  // 2) 日→英: “戻すときの正解” (優先辞書)
  const EN_TO_JA_PREFERRED = {
    // poses
    "standing pose": "立ちポーズ",
    "idle pose": "待機ポーズ（アイドル）",
    "model pose": "モデル立ち",
    "contrapposto": "S字立ち（コントラポスト）",
    "casual pose": "日常ポーズ（カジュアル）",
    "looking over shoulder": "振り返り",
    "crossed arms": "腕組み",
    "standing with legs apart": "仁王立ち",
    "hands in pockets": "ポケットに手",

    // quality
    "masterpiece": "傑作", "best quality": "最高品質",
    "ultra-detailed": "超精細", "8k": "8K",
    "illustration": "イラスト調", "depth of field": "被写界深度",
    "bokeh": "ボケ", "blurred background": "背景ぼかし",
    "centered": "中央配置", "intricate details": "複雑な詳細",
    "highres": "高解像度", "extremely detailed": "極めて詳細",
    "sharp focus": "シャープフォーカス", "official art": "公式アート",
    "unity 8k wallpaper": "Unity 8K壁紙", "detailed background": "詳細な背景",
    "8k wallpaper": "8K壁紙", "intricate": "緻密",
    "high budget": "高予算", "hdr": "HDR", "low contrast": "低コントラスト",

    // Tech & Engines
    "octane render": "Octane Render", "unreal engine 5": "Unreal Engine 5",
    "physically based rendering": "物理ベースレンダリング(PBR)",
    "lumen reflections": "Lumen反射", "nanite geometry": "Naniteジオメトリ",
    "subsurface scattering": "サブサーフェス・スキャタリング（肌の透け感）",
    "global illumination": "グローバルイルミネーション（反射）",
    "anime-realism blend": "アニメ・リアル調ブレンド",

    // Details
    "beautiful detailed eyes": "美しく詳細な瞳", "detailed iris": "詳細な虹彩",
    "reflection in eyes": "瞳のハイライト", "sparkling eyes": "輝く瞳",
    "detailed skin": "詳細な肌", "soft skin": "柔らかい肌",
    "skin pores": "毛穴", "realistic skin texture": "リアルな肌（毛穴等）",
    "detailed hair": "詳細な髪", "hair strands": "髪の毛一本一本",
    "lustrous hair": "艶やかな髪", "shiny hair": "ツヤ髪", "glossy hair": "光沢髪",
    "kodak portra 400": "Kodak Portra 400（暖かみ）",

    // Art Style
    "anime coloring": "アニメ塗り", "cel shading": "セルシェーディング",
    "vibrant colors": "鮮やかな色彩", "clean lines": "綺麗な線",
    "thick painting": "厚塗り", "impasto": "インパスト(厚塗り)",
    "realistic texture": "リアルな質感", "rich colors": "豊かな色彩",
    "watercolor": "水彩", "soft colors": "柔らかな色使い",
    "wet on wet": "ウェット・オン・ウェット", "gentle atmosphere": "優しい雰囲気",

    // lighting
    "soft lighting": "ソフトライティング（柔らかい）",
    "hard lighting": "ハードライティング（硬い）",
    "cinematic lighting": "シネマティック（映画風）",
    "volumetric lighting": "ボリュメトリック（光の筋）",
    "realistic lighting": "リアルなライティング"
  };

  // --- Core待ち & 登録処理 (Safety check) ---
  function waitAndRegister(){
    const OT = window.__outputTranslation;
    // Coreの翻訳機能 (toggle, register, normalize) がロードされるのを待つ
    if (!OT || typeof OT.register !== "function" || typeof OT.toggle !== "function" || typeof OT.normalize !== "function") {
      return setTimeout(waitAndRegister, 50);
    }

    try {
      // 1) 同義語・全データを先に入れる
      OT.register(EN_TO_JA);

      // 2) 逆引きの「正解」を後から入れて上書き固定する
      OT.register(EN_TO_JA_PREFERRED);

      console.log("[translation] R-18 Integrated Dictionary registered.");
    } catch (e) {
      console.warn("[translation] register failed:", e);
    }
  }

  waitAndRegister();
})();

