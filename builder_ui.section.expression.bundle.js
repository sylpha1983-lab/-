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

      const contentArea = parent.querySelector(".section-content");
      if (contentArea) {
        contentArea.insertBefore(root, contentArea.firstChild); // 先頭に追加
      } else {
        const newContent = document.createElement("div");
        newContent.className = "section-content";
        newContent.appendChild(root);
        parent.appendChild(newContent);
      }
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".expression-v1-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.val);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
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
      // 形状・シンボル
      { ja: "ハート目", en: "heart-shaped pupils" }, { ja: "星目", en: "star-shaped pupils" },
      { ja: "ダイヤ目", en: "diamond-shaped pupils" }, { ja: "しいたけ目", en: "symbol-shaped pupils" },
      { ja: "花の瞳孔 (フラワー)", en: "flower-shaped pupils" }, { ja: "桜の瞳孔", en: "cherry blossom-shaped pupils" },
      { ja: "十字の瞳孔 (クロス)", en: "cross-shaped pupils" }, { ja: "×印の瞳孔", en: "x-shaped pupils" },
      { ja: "歯車の瞳孔 (ギア)", en: "gear-shaped pupils" }, { ja: "ターゲット (照準)", en: "target eyes" },
      { ja: "ボタン目", en: "button eyes" }, { ja: "グリッチ (ノイズ)", en: "glitch eyes" },
      { ja: "ぐるぐる目 (スパイラル)", en: "spiral eyes" }, { ja: "波紋・輪廻眼", en: "ringed eyes" },
      // 動物的
      { ja: "猫目 (縦長瞳孔)", en: "slit pupils" }, { ja: "ヤギ目 (横長瞳孔)", en: "horizontal pupils" },
      { ja: "四角い瞳孔", en: "rectangular pupils" }, { ja: "三角の瞳孔", en: "triangle pupils" },
      // 状態・サイズ
      { ja: "散瞳 (デカ目)", en: "dilated pupils" }, { ja: "収縮 (極小)", en: "small pupils, constricted pupils" },
      { ja: "瞳孔なし", en: "no pupils" },
      // ハイライト・虚無
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
      { ja: "ため息", en: "sigh" }, { ja: "絆創膏", en: "bandage on face" }
    ]
  };

  const DICT = {
    // Colors
    "red eyes": "赤目", "blue eyes": "青目", "green eyes": "緑目", "yellow eyes": "黄目", 
    "pink eyes": "ピンク目", "purple eyes": "紫目", "brown eyes": "茶目", "orange eyes": "オレンジ目", 
    "black eyes": "黒目", "white eyes": "白目", "grey eyes": "灰目", "gold eyes": "金目", "silver eyes": "銀目", 
    "crimson eyes": "真紅の瞳", "amber eyes": "琥珀色の瞳", "heterochromia": "オッドアイ", 
    "heterochromia blue and red": "赤青オッドアイ", "gradient eyes": "グラデーション瞳", 
    "multicolored eyes": "多色瞳", "glowing eyes": "輝く目", "galaxy eyes": "宇宙の瞳",
    
    // Shapes
    "tsurime": "ツリ目", "tareme": "タレ目", "jitome": "ジト目", "sanpaku": "三白眼", 
    "closed eyes": "閉じた目", "one eye closed": "片目閉じ", "squinting": "細めた目", 
    "wide eyes": "見開き目", "asymmetrical eyes": "非対称な目", "sleepy eyes": "眠そうな目",
    
    // Pupils
    "heart-shaped pupils": "ハート目", "star-shaped pupils": "星目", "diamond-shaped pupils": "ダイヤ目",
    "symbol-shaped pupils": "しいたけ目", "flower-shaped pupils": "花の瞳孔", "cherry blossom-shaped pupils": "桜の瞳孔",
    "cross-shaped pupils": "十字瞳孔", "x-shaped pupils": "×印瞳孔", "gear-shaped pupils": "歯車瞳孔",
    "target eyes": "ターゲット目", "button eyes": "ボタン目", "glitch eyes": "グリッチ目",
    "spiral eyes": "ぐるぐる目", "ringed eyes": "波紋眼", "slit pupils": "猫目", "horizontal pupils": "ヤギ目",
    "rectangular pupils": "四角い瞳孔", "triangle pupils": "三角瞳孔", "dilated pupils": "散瞳",
    "small pupils": "収縮瞳孔", "no pupils": "瞳孔なし",
    
    // Highlights & Void
    "empty eyes": "ハイライトなし", "lifeless eyes": "生気のない目", "dead eyes": "死んだ目", 
    "dull eyes": "濁った目", "void eyes": "虚無の目", "shadow over eyes": "目元の影",
    
    // Gaze
    "looking at viewer": "カメラ目線", "looking away": "よそ見", "looking back": "振り返り", 
    "sideways glance": "横目", "looking up": "見上げ", "looking down": "見下ろし", 
    "eye contact": "アイコンタクト", "peeking": "覗き見", "averting eyes": "目を逸らす", "looking afar": "遠くを見る",
    
    // Mouth & Effects
    "open mouth": "開口", "closed mouth": "閉口", "parted lips": "半開き", "pout": "むくれ", 
    "tongue out": "舌出し", "cat mouth": "猫口", "triangle mouth": "三角口", "fangs": "牙", 
    "shark teeth": "ギザ歯", "clenched teeth": "食いしばり", "lipstick": "リップ",
    "blush": "赤面", "heavy blush": "激しい赤面", "blue lines on face": "青ざめ", 
    "shadow over face": "顔に影", "tearing up": "涙目", "nosebleed": "鼻血", "drooling": "よだれ", 
    "freckles": "そばかす", "anger vein": "怒りマーク", "flying sweatdrops": "飛び散る汗", 
    "sigh": "ため息", "bandage on face": "絆創膏"
  };

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      let parent = document.querySelector("#list-expression");
      if (!parent) return; 

      const root = document.createElement("div");
      root.className = "expression-v2-container";

      // ヘルパー: サブカテゴリー作成
      const createSubCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "expression-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        details.open = false; 
        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f9f9f9; color:#555;";
        details.appendChild(summary);
        const content = document.createElement("div");
        
        // 最下層を強制的に2列グリッドにする
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
        details.appendChild(content);
        return details;
      };

      // 1. 目カテゴリー（親）を作成
      const eyesRoot = document.createElement("details");
      eyesRoot.className = "expression-root-eyes";
      eyesRoot.style.cssText = "margin-bottom:10px; border:2px solid #89CFF0; border-radius:6px; background:#fff;";
      
      eyesRoot.open = false; 

      const eyesSummary = document.createElement("summary");
      eyesSummary.textContent = "👁️ 目・瞳・視線 (Eyes)";
      // ★修正: 背景を標準的なグレーに戻し、Flexboxでセンター揃えにする
      eyesSummary.style.cssText = "font-weight:bold; padding:10px; cursor:pointer; font-size:1.1em; color:#333; background:#f9f9f9; display:flex; align-items:center; list-style:none; outline:none;";
      eyesRoot.appendChild(eyesSummary);

      const eyesContent = document.createElement("div");
      
      // 親フォルダー直下の並びを1列（縦積み）にする
      eyesContent.style.padding = "10px";
      eyesContent.style.display = "flex";
      eyesContent.style.flexDirection = "column";
      eyesContent.style.gap = "8px";
      
      // 目サブカテゴリーを追加
      Object.entries(EYES_DATA).forEach(([cat, items]) => {
        eyesContent.appendChild(createSubCat(cat, items));
      });
      eyesRoot.appendChild(eyesContent);
      root.appendChild(eyesRoot);

      // 2. その他（口・漫符）を追加
      Object.entries(OTHER_DATA).forEach(([cat, items]) => {
        root.appendChild(createSubCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".expression-v2-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.val);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.expression.v3.js ---
(function(){
  "use strict";
  const VERSION = 3; // 統合版: ニュアンス & アクション
  const KEY = "expression";

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

  const DICT = {
    "smug": "ドヤ顔", "disdain": "軽蔑", "seductive smile": "誘惑笑い", "yandere": "ヤンデレ",
    "ahegao": "アヘ顔/恍惚", "despair": "絶望", "crazy": "狂気", "panicked": "パニック",
    "tsundere": "ツンデレ", "kuudere": "クーデレ", "evil smile": "邪悪な笑み", "gentle smile": "優しい笑み",
    "eating": "食べる", "drinking": "飲む", "sleeping": "寝る", "yawning": "あくび",
    "kissing": "キス", "blowing kiss": "投げキッス", "wink": "ウインク", "shouting": "叫ぶ",
    "licking": "舐める", "chewing": "噛む", "hand on chin": "あごに手",
    "head resting on hand": "頬杖", "shushing": "シーッ"
  };

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      let parent = document.querySelector("#list-expression");
      if (!parent) return;

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "expression-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        details.open = false; 

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
      root.className = "expression-v3-container";
      
      Object.entries(EXPRESSION_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".expression-v3-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.val);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

