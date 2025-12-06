(function(){
  "use strict";

  const VERSION = 1; 
  const KEY = "pose";

  const CATEGORIES = {
    "全身ポーズ (Full Body Poses)": [
      { ja: "立ちポーズ", en: "standing pose" }, { ja: "モデル立ち", en: "model pose" }, { ja: "座りポーズ", en: "sitting pose" },
      { ja: "寝そべる", en: "lying down" }, { ja: "体育座り", en: "seiza" }, { ja: "しゃがむ", en: "squatting" },
      { ja: "片足立ち", en: "one leg standing" }, { ja: "歩行中", en: "walking" }, { ja: "飛び跳ねる", en: "jumping" },
      { ja: "振り返り", en: "looking over shoulder" }, { ja: "背中合わせ", en: "back to back" },
      { ja: "横向き", en: "side view" }, { ja: "斜め後ろ向き", en: "three-quarter view from back" }
    ],
    "上半身・腕ポーズ (Upper Body & Arm Poses)": [
      { ja: "手を振る", en: "waving hand" }, { ja: "腕組み", en: "crossed arms" }, { ja: "頬杖をつく", en: "hand on cheek" },
      { ja: "首を傾げる", en: "head tilt" }, { ja: "両手広げ", en: "arms open" }, { ja: "敬礼", en: "salute" },
      { ja: "肩越しに見る", en: "over the shoulder" }, { ja: "両肩をすくめる", en: "shrugging" }
    ],
    "アクション・動的なポーズ (Action & Dynamic Poses)": [
      { ja: "戦闘態勢", en: "battle stance" }, { ja: "ダッシュ", en: "running" }, { ja: "パンチ", en: "punching" },
      { ja: "キック", en: "kicking" }, { ja: "防御", en: "guarding" }, { ja: "浮遊・空中", en: "floating in air" },
      { ja: "回転", en: "spinning" }, { ja: "刀を抜く", en: "drawing sword" }, { ja: "弓を引く", en: "drawing a bow" },
      { ja: "叫ぶ", en: "shouting" }
    ],
    "詳細な手・指の表現 (Detailed Hand & Finger Poses)": [
      { ja: "ピースサイン", en: "peace sign" }, { ja: "指差し", en: "pointing" }, { ja: "ハートマーク (手)", en: "hand heart" },
      { ja: "顔を覆う", en: "hands covering face" }, { ja: "口元に指", en: "finger on lips" }, { ja: "裏ピース", en: "reversed peace sign" },
      { ja: "OKサイン", en: "ok hand sign" }, { ja: "サムズアップ", en: "thumbs up" }, { ja: "手のひらを見せる", en: "palm view" },
      { ja: "両手で顔を挟む", en: "hands framing face" }, { ja: "指を絡める", en: "interlocked fingers" },
      { ja: "手を繋ぐ", en: "holding hands" }, { ja: "指を交差", en: "crossed fingers" }
    ],
    "特別な体勢・座り方 (Specific Postures)": [
      { ja: "胡坐をかく", en: "sitting cross-legged" }, { ja: "正座", en: "seiza" }, { ja: "足を組む (椅子)", en: "crossed legs" },
      { ja: "片膝立ち", en: "kneeling on one knee" }, { ja: "四つん這い", en: "on all fours" }, { ja: "あおむけ", en: "supine position" },
      { ja: "うつぶせ", en: "prone position" }, { ja: "反る (体を曲げる)", en: "arching back" }
    ],
    "キャラクター性ポーズ (Character & Emotional Emphasis)": [
      { ja: "がっくり", en: "slumped over" }, { ja: "拳を握る", en: "fist clenched" }, { ja: "喜びのガッツポーズ", en: "victory pose" },
      { ja: "俯く", en: "looking down" }, { ja: "威圧的なポーズ", en: "intimidating pose" }, { ja: "おどけたポーズ", en: "comical pose" },
      { ja: "かっこいいポーズ", en: "cool pose" }, { ja: "腰に手を当てる", en: "hand on hip" }
    ],
    "複雑な手のポーズ (Complex Hand Actions)": [
      { ja: "ペンを持つ", en: "holding a pen" }, { ja: "携帯を持つ", en: "holding a phone" }, { ja: "ワイングラスを持つ", en: "holding a wine glass" },
      { ja: "キーボードを打つ", en: "typing on keyboard" }, { ja: "カメラを構える", en: "holding a camera" }, { ja: "指を鳴らす", en: "snapping fingers" }
    ],
    "身体のライン強調 (Body Line Emphasis)": [
      { ja: "S字ライン", en: "s-shaped body line" }, { ja: "片足に重心", en: "weight on one leg" }, { ja: "腰をひねる", en: "twisted waist" },
      { ja: "横たわる", en: "reclining" }, { ja: "体を曲げる", en: "bending body" }, { ja: "背中を曲げる", en: "slouching" }
    ],
    "相互作用・他者への行為 (Interaction & Viewer Action)": [
      { ja: "自分を抱きしめる", en: "hugging self" }, { ja: "鑑賞者に指差し", en: "pointing at viewer" }, { ja: "物を差し出す", en: "offering object" },
      { ja: "寄りかかる", en: "leaning on something" }, { ja: "耳打ち", en: "whispering" }, { ja: "秘密のジェスチャー", en: "secret hand sign" }
    ],
    "視線と重心 (Gaze & Weight)": [
      { ja: "視線をそらす", en: "looking away" }, { ja: "鑑賞者に目線", en: "gazing at viewer" }, { ja: "よろめく", en: "staggering" },
      { ja: "つま先に重心", en: "weight on toes" }, { ja: "膝を曲げる", en: "bent knees" }, { ja: "腕を伸ばす", en: "reaching arms" }
    ],
    "環境との相互作用 (Environmental Interaction)": [
      { ja: "壁にもたれる", en: "leaning on wall" }, { ja: "床に座る", en: "sitting on floor" }, { ja: "手すりにつかまる", en: "holding handrail" },
      { ja: "椅子に浅く座る", en: "perching on chair" }, { ja: "窓辺に立つ", en: "standing by window" }
    ],
    "足元・靴の表現 (Footwear & Ground Interaction)": [
      { ja: "足先だけ地面", en: "tiptoe" }, { ja: "片足を持ち上げる", en: "lifting one leg" }, { ja: "片足を上げる (靴を見せる)", en: "shoe focus" },
      { ja: "裸足で立つ", en: "barefoot standing" }, { ja: "地面を蹴る", en: "kicking ground" }
    ],
    "ダイナミックな体勢補助 (Dynamic Posture Auxiliary)": [
      { ja: "風になびく体勢", en: "windblown pose" }, { ja: "体が傾く", en: "body leaning sideways" }, { ja: "腰を反らす", en: "back arch" },
      { ja: "片手を振る", en: "one hand raised" }, { ja: "体を捻る", en: "body twist" }
    ],
    "物体との複雑な相互作用 (Complex Object Interaction)": [
      { ja: "顔を埋める (服/物)", en: "face buried in object" }, { ja: "頬をすり寄せる", en: "cheek rubbing" }, { ja: "物を抱きしめる", en: "hugging object" },
      { ja: "物に掴まる", en: "grabbing object" }
    ],
    "構図・奥行き表現 (Composition & Depth)": [
      { ja: "奥に立つ", en: "standing in background" }, { ja: "手前に立つ", en: "standing in foreground" }, { ja: "遠近法強調", en: "forced perspective" },
      { ja: "被写界深度強調", en: "shallow depth of field focus" }, { ja: "カメラ目線のポーズ", en: "posing for camera" }
    ],
    "グループポーズ基礎 (Group Pose Fundamentals)": [
      { ja: "肩を組む", en: "arm around shoulder" }, { ja: "手をつなぐ", en: "holding hands" }, { ja: "背中合わせ", en: "back-to-back" },
      { ja: "寄り添う", en: "snuggling" }, { ja: "一列に並ぶ", en: "standing in a line" }
    ],
    "服装・アクセサリー相互作用 (Clothing/Accessory Interaction)": [
      { ja: "スカートを掴む", en: "holding skirt" }, { ja: "服を引っ張る", en: "pulling at clothing" }, { ja: "帽子に手を添える", en: "hand on hat" },
      { ja: "眼鏡を押し上げる", en: "adjusting glasses" }, { ja: "ネクタイを緩める", en: "loosening tie" }, { ja: "袖を掴む", en: "grabbing sleeve" }
    ],
    "動きの瞬間 (Action Moment Capture)": [
      { ja: "着地の瞬間", en: "moment of landing" }, { ja: "直前の静止", en: "moment before action" }, { ja: "水しぶきとポーズ", en: "pose with splash" },
      { ja: "体勢を崩す", en: "losing balance" }, { ja: "急停止", en: "sudden stop" }
    ],
    "地面・床との相互作用 (Ground Interaction)": [
      { ja: "地面に座り込む", en: "slumped on floor" }, { ja: "床に手をつく", en: "hand on floor" }, { ja: "足の裏を見せる", en: "sole view" },
      { ja: "靴を脱ぐ", en: "taking off shoes" }, { ja: "爪先立ち", en: "on tiptoes" }, { ja: "膝を立てて座る", en: "knees drawn up" }
    ],
    "武術・格闘ポーズ (Martial Arts / Combat)": [
      { ja: "回避行動", en: "evasive maneuver" }, { ja: "構えをとる", en: "taking a stance" }, { ja: "重心を低く", en: "low center of gravity" },
      { ja: "飛び蹴り", en: "flying kick" }, { ja: "受け身", en: "breakfall" }
    ],
    "指・手先の微細表現 (Micro Hand/Finger Detail)": [
      { ja: "指を組む", en: "interlocking fingers tightly" }, { ja: "拳で口元を隠す", en: "fist covering mouth" }, { ja: "中指を立てる", en: "middle finger up" },
      { ja: "指先で触れる", en: "fingertips touching" }, { ja: "ペン回し", en: "pen spinning" }
    ],
    "身体の角度・曲げ (Body Angle & Flexion)": [
      { ja: "上体を起こす", en: "torso raised" }, { ja: "首を真横に傾ける", en: "head tilted sharply" }, { ja: "片腕を上げる", en: "single arm raised" },
      { ja: "背中を丸める", en: "hunched back" }
    ],
    "乗り物・家具との連携 (Vehicle/Furniture Interaction)": [
      { ja: "バイクに跨がる", en: "straddling motorbike" }, { ja: "車のボンネットに座る", en: "sitting on car hood" }, { ja: "ベンチに横座り", en: "sitting sideways on bench" },
      { ja: "机に肘をつく", en: "elbows on desk" }
    ],
    "動きの軌跡・ライン (Motion Trajectory & Line)": [
      { ja: "流れるような動き", en: "flowing movement" }, { ja: "鋭い動き", en: "sharp movement" }, { ja: "体の軸がぶれる", en: "off-axis balance" }, { ja: "体全体のしなり", en: "body flexion" }
    ],
    "手足の先端表現 (Extremities Detail)": [
      { ja: "手首を曲げる", en: "bent wrist" }, { ja: "足首を曲げる", en: "bent ankle" }, { ja: "指を大きく広げる (手)", en: "spread fingers" }, { ja: "足の指を曲げる", en: "curled toes" }
    ],
    "高度なねじれ・柔軟性 (Advanced Twist/Flexibility)": [
      { ja: "フル開脚", en: "full split" }, { ja: "体がねじれた状態", en: "body contortionist" }, { ja: "二重関節ポーズ", en: "double jointed pose" }, { ja: "極端な後屈", en: "extreme back bend" }
    ],
    "グループポーズの動線 (Group Pose Flow)": [
      { ja: "視線の繋がり", en: "line of sight connection (group)" }, { ja: "人物が重なる構図", en: "overlapping figures composition" }, { ja: "ピラミッド型配置", en: "pyramid formation (group)" }, { ja: "群れの流れ", en: "flow of the crowd" }
    ],
    "構図とポーズの融合 (Composition & Pose Fusion)": [
      { ja: "ローアングルでのしゃがみ", en: "low angle crouching" }, { ja: "広角歪みポーズ", en: "wide angle distortion pose" }, { ja: "ダイナミックなカメラ回転", en: "dynamic camera rotation pose" }
    ],
    "武器・戦闘の詳細 (Weapon & Combat Details)": [
      { ja: "二丁拳銃", en: "dual wielding guns" }, { ja: "刀を肩に担ぐ", en: "sword over shoulder" }, { ja: "銃口を向ける", en: "pointing gun at viewer" },
      { ja: "ナイフを逆手に持つ", en: "reverse grip knife" }, { ja: "弓を構える", en: "aiming bow" }, { ja: "魔法陣を展開", en: "casting magic circle" }
    ],
    "日常動作・リラックス (Daily Life & Relax)": [
      { ja: "胎児のポーズ (睡眠)", en: "fetal position" }, { ja: "大の字で寝る", en: "sprawled out" }, { ja: "伸びをする", en: "stretching body" },
      { ja: "あくび", en: "yawning pose" }, { ja: "スマホを見る", en: "checking phone" }, { ja: "読書中", en: "reading book pose" }
    ],
    "極端なパース・POV (Extreme Perspective/POV)": [
      { ja: "手を伸ばす (POV)", en: "reaching towards camera" }, { ja: "踏みつける (POV)", en: "stepping on camera" }, { ja: "覗き込む (POV)", en: "looking into camera" },
      { ja: "魚眼レンズ効果", en: "fisheye lens pose" }, { ja: "巨大に見える構図", en: "giantess perspective" }
    ],
    "アダルト・体位表現 (Erotic Postures & Positions)": [
      { ja: "誘うポーズ", en: "inviting pose" }, { ja: "肌を露出", en: "exposing skin" }, { ja: "胸を強調", en: "chest emphasis" },
      { ja: "股を開く", en: "spread legs" }, { ja: "レオタードポーズ", en: "leotard pose" }, { ja: "片足を上げる", en: "one leg up" },
      { ja: "体を密着させる", en: "body touching" }, { ja: "膝を立てる", en: "knees up" }, { ja: "ブリッジ", en: "bridging" },
      { ja: "足を絡ませる", en: "intertwined legs" }, { ja: "かがみ込む", en: "bent over" }, { ja: "両手を後ろで縛る", en: "hands tied behind back" },
      { ja: "正常位 (体位)", en: "missionary position" }, { ja: "股間を隠す", en: "crotch concealment" }, { ja: "脚を開く", en: "wide open legs" },
      { ja: "後ろから抱きつく", en: "from behind hug" }, { ja: "カウガール体勢", en: "cowgirl position" }, { ja: "片手をつく", en: "one hand on ground" },
      { ja: "横向きで重なる", en: "side-lying position" }, { ja: "深い挿入のポーズ", en: "deep penetration pose" }, { ja: "バックからの体位", en: "doggy style rear view" },
      { ja: "舌による体位", en: "cunnilingus position" }
    ]
  };

  const API = {
    initUI(container) {
      // 合体モードのため、innerHTML = "" を削除
      const section = document.createElement("div");
      section.className = "pose-v1-full";

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.className = "pose-cat";
        details.open = false; // ★ 閉じておく

        const summary = document.createElement("summary");
        summary.textContent = cat;
        details.appendChild(summary);

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.display = "block";
          label.textContent = `${item.ja} / ${item.en}`;
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          label.prepend(cb);
          details.appendChild(label);
        });
        section.appendChild(details);
      });
      container.appendChild(section);

      // ★ 翻訳辞書への登録
      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(item => {
          if (item.en && item.ja) {
            dict[item.en] = item.ja;
          }
        });
        window.__outputTranslation.register(dict);
      }
    },
    getTags() {
      const tags = [];
      document.querySelectorAll(".pose-v1-full input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

