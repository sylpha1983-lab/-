(function(){
  "use strict";

  const VERSION = 1; 
  const KEY = "expression";

  const CATEGORIES = {
    "基本感情 (Primary Emotions)": [
      { ja: "喜び", en: "joyful" }, { ja: "笑顔", en: "smiling" }, { ja: "怒り", en: "angry" },
      { ja: "悲しみ", en: "sad" }, { ja: "恐怖", en: "fearful" }, { ja: "驚き", en: "surprised" },
      { ja: "嫌悪", en: "disgusted" }, { ja: "軽蔑", en: "contempt" }
    ],
    "複合・ニュアンス表情 (Complex & Nuanced)": [
      { ja: "呆れ", en: "exasperated" }, { ja: "困惑", en: "confused" }, { ja: "戸惑い", en: "puzzled" },
      { ja: "焦り", en: "flustered" }, { ja: "緊張", en: "tense" }, { ja: "不安", en: "anxious" },
      { ja: "安堵", en: "relieved" }, { ja: "諦め", en: "resigned" }, { ja: "落ち着き", en: "calm" },
      { ja: "満足", en: "content" }, { ja: "誇らしげ", en: "proud" }, { ja: "挑発的", en: "provocative" },
      { ja: "皮肉げ", en: "sarcastic" }, { ja: "冷笑", en: "smirk" }, { ja: "悲喜交々", en: "bittersweet" },
      { ja: "涙笑い", en: "teary smile" }
    ],
    "五感・生理的反応 (Sensory/Physiological Reactions)": [
      { ja: "顔が赤い", en: "blushing" }, { ja: "冷や汗", en: "cold sweat" }, { ja: "汗", en: "sweating" },
      { ja: "震える", en: "trembling" }, { ja: "涙ぐむ", en: "teary-eyed" }, { ja: "息を呑む", en: "gasping" },
      { ja: "顔をしかめる", en: "grimacing" }, { ja: "眉をひそめる", en: "frowning" }, { ja: "唇を噛む", en: "biting lips" },
      { ja: "顔を覆う", en: "face-palming" }, { ja: "赤面", en: "flushed face" }, { ja: "吐息", en: "exhaling" },
      { ja: "口元を押さえる", en: "hand over mouth" }, { ja: "くしゃみ", en: "sneezing" }, { ja: "顔を歪める", en: "distorted face" }
    ],
    "狂気・崩壊 (Insanity/Breakdown)": [
      { ja: "狂気", en: "insane" }, { ja: "狂喜", en: "ecstatic" }, { ja: "放心笑い", en: "maniacal laugh" },
      { ja: "絶望", en: "despairing" }, { ja: "発狂", en: "going mad" }, { ja: "虚無", en: "nihilistic" },
      { ja: "殺意", en: "murderous intent" }, { ja: "憎悪", en: "hateful" }, { ja: "狂乱", en: "frenzied" },
      { ja: "精神崩壊", en: "mental breakdown" }, { ja: "無関心な微笑", en: "detached smile" }, { ja: "歪んだ愛", en: "twisted love" }
    ],
    "耽美・官能 (Aesthetic/Erotic)": [
      { ja: "うっとり", en: "enchanted" }, { ja: "恍惚", en: "rapt" }, { ja: "快楽", en: "pleasured" },
      { ja: "陶酔", en: "entranced" }, { ja: "誘惑", en: "seductive" }, { ja: "挑発", en: "teasing" },
      { ja: "甘える", en: "flirty" }, { ja: "頬を染める", en: "deep blushing" }, { ja: "熱視線", en: "intense gaze" },
      { ja: "舌なめずり", en: "lip lick" }, { ja: "喘ぎ", en: "gasping heavily" }
    ],
    "対人関係の感情 (Interpersonal Emotions)": [
      { ja: "優越感", en: "superiority" }, { ja: "見下す", en: "looking down" }, { ja: "軽蔑", en: "scornful" },
      { ja: "嘲笑", en: "mocking" }, { ja: "嫉妬", en: "jealous" }, { ja: "同情", en: "sympathetic" },
      { ja: "労り", en: "caring" }, { ja: "親愛", en: "affectionate" }, { ja: "敵意", en: "hostile" },
      { ja: "威圧的", en: "intimidating" }, { ja: "怯え", en: "cowering" }
    ],
    "マンガ・アニメ的な表現 (Manga/Anime Tropes)": [
      { ja: "変顔", en: "funny face" }, { ja: "アヘ顔", en: "ahegao" }, { ja: "ジト目", en: "deadpan eyes" },
      { ja: "半目", en: "half-closed eyes" }, { ja: "ぐるぐる目", en: "swirly eyes" }, { ja: "瞳ハイライト無し", en: "no pupils" },
      { ja: "目から光", en: "eyes glowing" }, { ja: "棒立ち", en: "rigid posture" }, { ja: "デレ顔", en: "moe face" },
      { ja: "ツン顔", en: "tsundere face" }, { ja: "くぅ〜！", en: "frustrated grunt" }
    ],
    "目の表現特化 (Eye Detail Focus)": [
      { ja: "縦長瞳孔", en: "slit pupils" }, { ja: "横長瞳孔", en: "horizontal pupils" }, { ja: "星形目", en: "star shaped eyes" },
      { ja: "ハート目", en: "heart shaped eyes" }, { ja: "ハイライトなし", en: "no eye light" }, { ja: "虚ろな目", en: "empty eyes" },
      { ja: "怒りの目", en: "angry eyes" }, { ja: "涙目", en: "watery eyes" }
    ],
    "口の形状特化 (Mouth Shape Focus)": [
      { ja: "口を閉じる", en: "closed mouth" }, { ja: "への字口", en: "frowning mouth" }, { ja: "歯を見せる", en: "showing teeth" },
      { ja: "八重歯", en: "uneven teeth" }, { ja: "牙/犬歯", en: "fangs" }, { ja: "口を結ぶ", en: "pursed lips" },
      { ja: "舌を出す", en: "tongue out" }
    ],
    "感情のレベル表現 (Intensity Modifiers)": [
      { ja: "微かな微笑み", en: "faint smile" }, { ja: "極度の絶望", en: "extreme despair" }, { ja: "完全な無関心", en: "absolute indifference" },
      { ja: "激しい恍惚", en: "intense rapture" }, { ja: "穏やかな笑顔", en: "gentle smile" }
    ],
    "顔の動き・ライン (Facial Motion & Lines)": [
      { ja: "眉間にしわ", en: "furrowed brow" }, { ja: "吊り上げられた眉", en: "raised eyebrows" }, { ja: "頬を膨らませる", en: "cheek puff" },
      { ja: "頬がこける", en: "hollow cheeks" }, { ja: "二重あご", en: "double chin" }, { ja: "鼻にしわ", en: "wrinkled nose" }
    ],
    "非言語的表現 (Nonverbal Cues)": [
      { ja: "舌を唇の間に出す", en: "tongue between lips" }, { ja: "唇を突き出す", en: "pouting" }, { ja: "鼻を鳴らす (音)", en: "snorting" },
      { ja: "頭を手に乗せる", en: "head resting on hand" }, { ja: "顎を引く", en: "tucked chin" }
    ],
    "服・髪との相互作用 (Interaction with Clothing/Hair)": [
      { ja: "片目に髪がかかる", en: "hair over one eye" }, { ja: "髪で顔を隠す", en: "hiding face with hair" },
      { ja: "フードをかぶる", en: "hood up" }, { ja: "マスクで口元隠し", en: "mask covering mouth" }
    ],
    "微細・非対称表現 (Subtle/Asymmetrical)": [
      { ja: "片笑い", en: "one-sided smile" }, { ja: "歪んだ笑み", en: "crooked smile" }, { ja: "わずかに寄せた眉", en: "slightly furrowed brow" },
      { ja: "片方の口角のみ上がる", en: "one corner of mouth raised" }, { ja: "目元だけ笑顔", en: "smiling eyes only" }
    ],
    "属性特化表現 (Attribute-Specific)": [
      { ja: "眼鏡を押し上げる", en: "glasses pushed up" }, { ja: "耳がぴくぴく (ケモ耳)", en: "ear twitch" },
      { ja: "傷がひきつる", en: "scar twitch" }, { ja: "フードで目元隠し", en: "hood hiding eyes" }
    ],
    "構図・カメラ連携 (Composition/Camera Link)": [
      { ja: "見上げる (視聴者へ)", en: "looking up at viewer" }, { ja: "見下す (視聴者へ)", en: "looking down at viewer" },
      { ja: "影で目が隠れる", en: "shadows hiding eyes" }, { ja: "光が目元を照らす", en: "light source on eyes" },
      { ja: "顔が画面外に向く", en: "face turned away from camera" }
    ],
    "心理的負荷 (Psychological Strain)": [
      { ja: "内なる葛藤", en: "internal struggle" }, { ja: "トラウマを負った", en: "traumatized" }, { ja: "無気力", en: "lethargic" },
      { ja: "重い悲しみ", en: "heavy sorrow" }, { ja: "極度の警戒", en: "extreme vigilance" }
    ],
    "照明・影との連携 (Light & Shadow)": [
      { ja: "片側が影の顔", en: "one side shadowed face" }, { ja: "リムライトの表情", en: "rim light expression" },
      { ja: "影の中の目", en: "eyes in shadow" }, { ja: "顎の下の影", en: "shadow under chin" },
      { ja: "光のスポットが当たる", en: "spotlight on face" }
    ],
    "高度な視線表現 (Advanced Gaze)": [
      { ja: "視線がさまよう", en: "darting eyes" }, { ja: "重い視線", en: "heavy gaze" }, { ja: "眠たそうな目", en: "sleepy eyes" },
      { ja: "見つめ返す", en: "staring back" }, { ja: "遠くを見る", en: "gazing into distance" }
    ],
    "表情の極端なフィジカル (Extreme Facial Physical)": [
      { ja: "顔の血管が浮き出る", en: "face veins popping" }, { ja: "皮膚が張り詰める", en: "skin pulled taut" },
      { ja: "汗が滴る", en: "sweat dripping from face" }, { ja: "全身の震え (顔)", en: "full body trembling face" },
      { ja: "極度の虚脱感", en: "extreme emotional exhaustion" }
    ],
    "口元の高度な変形 (Advanced Mouth Deformation)": [
      { ja: "歯を剥き出す", en: "bared teeth" }, { ja: "唇がめくれる", en: "lip curling" },
      { ja: "大きく開いた口", en: "gaping mouth" }, { ja: "口角が垂れ下がる", en: "mouth corners drooping" },
      { ja: "舌が垂れ下がる", en: "tongue lolling out" }
    ],
    "ダメージ・汚れ (Damage & Dirt)": [
      { ja: "頬に血がついている", en: "blood on cheek" }, { ja: "顔に泥がついている", en: "mud on face" }, { ja: "目の周りの痣", en: "bruised eye" },
      { ja: "鼻血", en: "nosebleed" }, { ja: "顔に傷", en: "scar on face" }, { ja: "煤で汚れた顔", en: "soot on face" }
    ],
    "食事・口元の動作 (Eating & Oral Actions)": [
      { ja: "食べ物を噛む", en: "chewing food" }, { ja: "飴を舐める", en: "licking lollipop" }, { ja: "何かをくわえる", en: "holding object in mouth" },
      { ja: "ポッキーゲーム", en: "pocky game" }, { ja: "飲み込む", en: "swallowing" }, { ja: "口元を拭う", en: "wiping mouth" }
    ],
    "異形・超常現象 (Supernatural & Transformation)": [
      { ja: "目が光る (魔法)", en: "eyes glowing with magic" }, { ja: "顔に紋様が浮かぶ", en: "face markings glowing" },
      { ja: "第三の目", en: "third eye" }, { ja: "機械的なライン (サイボーグ)", en: "cybernetic face lines" },
      { ja: "影が顔を覆う (憑依)", en: "shadow possessing face" }
    ],
    "中立・無表情 (Neutral / Blank)": [
      { ja: "無表情", en: "expressionless" }, { ja: "無感情", en: "emotionless" }, { ja: "冷静", en: "composed" },
      { ja: "無関心", en: "indifferent" }, { ja: "沈黙", en: "silent" }, { ja: "眠っている", en: "sleeping" },
      { ja: "思考中", en: "deep in thought" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-expression") || container;
      // v1 (Base) なので、コンテナを一度クリア
      parent.innerHTML = "";

      const section = document.createElement("div");
      section.className = "expression-v1-full";

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.className = "expression-cat";
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

        // 排他制御
        details.addEventListener("change", e => {
          if (e.target.type === "checkbox" && e.target.checked) {
            details.querySelectorAll("input[type='checkbox']").forEach(c => {
              if (c !== e.target) c.checked = false;
            });
          }
        });
        section.appendChild(details);
      });
      parent.appendChild(section);

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
      document.querySelectorAll(".expression-v1-full input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

