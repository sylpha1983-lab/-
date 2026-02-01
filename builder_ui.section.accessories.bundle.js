// Auto-generated bundle for section 'accessories'
// Contains 1 versions stacked in ascending order.

(function(){
// --- builder_ui.section.accessories.v1.js ---
(function(){
  "use strict";

  const VERSION = 1;
  const KEY = "accessories";

  // カテゴリ定義
  // isTarget: true のカテゴリにあるアイテムは、アクションと結合される対象になります
  // isAction: true のカテゴリは、動作として扱われます
  const CATEGORIES = {
    "👒 頭部の装飾・帽子 (Headgear)": {
      items: [
        { ja: "帽子 (ハット)", en: "hat" },
        { ja: "キャップ", en: "cap" },
        { ja: "ベレー帽", en: "beret" },
        { ja: "ニット帽", en: "beanie" },
        { ja: "麦わら帽子", en: "straw hat" },
        { ja: "サンバイザー", en: "visor" },
        { ja: "ヘルメット", en: "helmet" },
        { ja: "フード", en: "hood" },
        { ja: "リボン (髪飾り)", en: "hair ribbon" },
        { ja: "半透明のリボン", en: "translucent ribbon" },
        { ja: "カチューシャ", en: "hairband" },
        { ja: "シュシュ", en: "scrunchie" },
        { ja: "ヘアピン", en: "hairclip" },
        { ja: "バレッタ", en: "hair ornament" },
        { ja: "羽根の髪飾り", en: "feather hairclip" },
        { ja: "花飾り", en: "flower hair ornament" },
        { ja: "ティアラ/王冠", en: "crown" },
        { ja: "ベール", en: "veil" },
        { ja: "ヘッドフォン", en: "headphones" },
        { ja: "狐面", en: "fox mask" },
        { ja: "マスク", en: "mask" },
        { ja: "眼帯", en: "eyepatch" },
        { ja: "サングラス", en: "sunglasses" },
        { ja: "眼鏡", en: "glasses" }
      ]
    },
    "💎 ジュエリー・装身具 (Jewelry)": {
      items: [
        { ja: "イヤリング/ピアス", en: "earrings" },
        { ja: "ネックレス", en: "necklace" },
        { ja: "チョーカー", en: "choker" },
        { ja: "首輪", en: "collar" },
        { ja: "指輪", en: "ring" },
        { ja: "ブレスレット", en: "bracelet" },
        { ja: "腕時計", en: "wristwatch" },
        { ja: "ブローチ", en: "brooch" },
        { ja: "真珠 (パール)", en: "pearls" },
        { ja: "宝石", en: "gemstone" },
        { ja: "ボディピアス", en: "body piercing" },
        { ja: "ネイルアート", en: "nail art" }
      ]
    },
    "🧣 服飾小物・背部 (Clothing Acc)": {
      items: [
        { ja: "ネクタイ", en: "necktie" },
        { ja: "蝶ネクタイ", en: "bowtie" },
        { ja: "スカーフ/マフラー", en: "scarf" },
        { ja: "手袋 (グローブ)", en: "gloves" },
        { ja: "ベルト", en: "belt" },
        { ja: "ガーターベルト", en: "garter belt" },
        { ja: "リュックサック", en: "backpack" },
        { ja: "カバン/バッグ", en: "bag" },
        { ja: "ショルダーバッグ", en: "shoulder bag" },
        { ja: "トートバッグ", en: "tote bag" },
        { ja: "翼 (ウィング)", en: "wings" },
        { ja: "悪魔の翼", en: "demon wings" },
        { ja: "天使の翼", en: "angel wings" },
        { ja: "マント/ケープ", en: "cape" },
        { ja: "尻尾", en: "tail" }
      ]
    },
    // ★以下、アクション結合対象
    "🧸 手持ち・ぬいぐるみ (Handheld)": {
      isTarget: true,
      items: [
        { ja: "ぬいぐるみ", en: "stuffed toy" },
        { ja: "くまのぬいぐるみ", en: "teddy bear" },
        { ja: "うさぎのぬいぐるみ", en: "stuffed bunny" },
        { ja: "シマエナガのぬいぐるみ", en: "white head Shima-enaga bushtit plush" },
        { ja: "スマホ", en: "smartphone" },
        { ja: "本/魔導書", en: "book" }, // holding book -> book に変更(自動結合のため)
        { ja: "手紙/ラブレター", en: "letter" },
        { ja: "花束", en: "bouquet" },
        { ja: "一輪の花", en: "flower" },
        { ja: "傘 (アンブレラ)", en: "umbrella" },
        { ja: "日傘 (パラソル)", en: "parasol" },
        { ja: "扇子", en: "folding fan" },
        { ja: "うちわ", en: "hand fan" },
        { ja: "風船", en: "balloon" },
        { ja: "ランタン", en: "lantern" },
        { ja: "懐中電灯", en: "flashlight" },
        { ja: "カメラ", en: "camera" }
      ]
    },
    "⚔️ 武器・RPG (Weapons)": {
      isTarget: true,
      items: [
        { ja: "剣 (ソード)", en: "sword" },
        { ja: "刀 (カタナ)", en: "katana" },
        { ja: "短剣 (ダガー)", en: "dagger" },
        { ja: "大剣", en: "greatsword" },
        { ja: "盾 (シールド)", en: "shield" },
        { ja: "魔法の杖", en: "magic staff" },
        { ja: "弓 (ボウ)", en: "bow weapon" },
        { ja: "矢", en: "arrow" },
        { ja: "銃 (ガン)", en: "gun" },
        { ja: "ライフル", en: "rifle" },
        { ja: "二丁拳銃", en: "dual guns" },
        { ja: "鎌 (サイズ)", en: "scythe" },
        { ja: "槍 (スピア)", en: "spear" },
        { ja: "斧 (アックス)", en: "axe" },
        { ja: "ハンマー", en: "hammer" }
      ]
    },
    "🍔 食べ物・飲み物 (Food & Drink)": {
      isTarget: true,
      items: [
        { ja: "タピオカドリンク", en: "bubble tea" },
        { ja: "コーヒーカップ", en: "coffee cup" },
        { ja: "ティーカップ", en: "teacup" },
        { ja: "ワイングラス", en: "wine glass" },
        { ja: "ペットボトル", en: "plastic bottle" },
        { ja: "クレープ", en: "crepe" },
        { ja: "アイスクリーム", en: "ice cream" },
        { ja: "ペロペロキャンディ", en: "lollipop" },
        { ja: "ドーナツ", en: "donut" },
        { ja: "ハンバーガー", en: "hamburger" },
        { ja: "おにぎり", en: "onigiri" },
        { ja: "ポッキー", en: "pocky" },
        { ja: "箸", en: "chopsticks" },
        { ja: "スプーン", en: "spoon" },
        { ja: "フォーク", en: "fork" }
      ]
    },

"🫘 節分・鬼の小物 (Setsubun Props)": {
  isTarget: true,
  items: [
    { ja: "金棒", en: "kanabo (oni club)" },
    { ja: "炒り豆 / 豆まき", en: "roasted soybeans (setsubun beans)" },
    { ja: "恵方巻", en: "ehomaki sushi roll" },
    { ja: "鬼の面", en: "oni mask" }
  ]
},
    "🎸 音楽・趣味・その他 (Hobbies)": {
      isTarget: true,
      items: [
        { ja: "マイク", en: "microphone" },
        { ja: "ギター", en: "guitar" },
        { ja: "ベース", en: "bass guitar" },
        { ja: "ヴァイオリン", en: "violin" },
        { ja: "ドラムスティック", en: "drumsticks" },
        { ja: "スケッチブック", en: "sketchbook" },
        { ja: "筆/ブラシ", en: "paintbrush" },
        { ja: "パレット", en: "palette" },
        { ja: "ゲームコントローラー", en: "game controller" },
        { ja: "トランプ", en: "playing cards" },
        { ja: "タバコ", en: "cigarette" },
        { ja: "キセル", en: "kiseru" }
      ]
    },
    // ★アクション定義
        "🔢 数量 (Quantity)": {
          isQuantity: true,
          items: [
            { ja: "単体", en: "single" },
            { ja: "複数", en: "multiple" },
            { ja: "大量", en: "many" }
          ]
        },
    "🤲 アイテムの状態・動作 (Item Actions)": {
      isAction: true,
      items: [
        { ja: "手に持つ (基本)", en: "holding" },
        { ja: "両手で持つ", en: "holding with both hands" },
        { ja: "握りしめる (強く)", en: "gripping" },
        { ja: "抱きしめる (ハグ)", en: "hugging" },
        { ja: "抱える (腕に)", en: "carrying" },
        { ja: "口にくわえる", en: "in mouth" }, // 特殊結合: object in mouth
        { ja: "噛む/かじりつく", en: "biting" },
        { ja: "舐める", en: "licking" },
        { ja: "食べる", en: "eating" },
        { ja: "飲む", en: "drinking" },
        { ja: "背負う", en: "on back" }, // 特殊結合: object on back
        { ja: "腰に下げる", en: "on belt" }, // 特殊結合: object on belt
        { ja: "頭に乗せる", en: "on head" }, // 特殊結合: object on head
        { ja: "差し出す", en: "offering" },
        { ja: "見せる", en: "showing" },
        { ja: "投げる", en: "throwing" },
        { ja: "落とす", en: "dropping" },
        { ja: "拾う", en: "picking up" },
        { ja: "ポケットに入れる", en: "in pocket" }
      ]
    }
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-accessories") || container;
      parent.innerHTML = "";
      
      const section = document.createElement("div");
      section.className = "accessories-section";
      
      const h = document.createElement("div");
      h.textContent = "💍 アクセサリ・小物 (Accessories)";
      h.style.fontWeight = "bold";
      h.style.color = "#c71585";
      h.style.marginBottom = "8px";
      section.appendChild(h);

      Object.entries(CATEGORIES).forEach(([catName, catData]) => {
        const details = document.createElement("details");
        details.open = false; 
        details.style.marginBottom = "8px";
        details.style.border = "1px solid #ddd";
        details.style.borderRadius = "4px";
        
        // カテゴリ識別のためのクラス付与
        if(catData.isAction) details.classList.add("acc-action-category");
        if(catData.isTarget) details.classList.add("acc-target-category");
        if(catData.isQuantity) details.classList.add("acc-qty-category");

        const summary = document.createElement("summary");
        summary.textContent = catName;
        summary.style.cursor = "pointer";
        summary.style.fontSize = "0.9em";
        summary.style.padding = "6px";
        summary.style.fontWeight = "bold";
        summary.style.backgroundColor = catData.isAction ? "#e6f7ff" : (catData.isQuantity ? "#fff7e6" : "#f9f9f9"); // アクション/数量だけ色変え
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.display = "flex";
        content.style.flexWrap = "wrap";
        content.style.gap = "8px";
        content.style.padding = "8px";

        catData.items.forEach(item => {
          const label = document.createElement("label");
          label.style.fontSize = "0.85em";
          label.style.display = "flex";
          label.style.alignItems = "center";
          label.style.cursor = "pointer";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          
          // 属性を付与して後で識別できるようにする
          if(catData.isAction) cb.dataset.type = "action";
          else if(catData.isTarget) cb.dataset.type = "target";
          else if(catData.isQuantity) cb.dataset.type = "quantity";
          else cb.dataset.type = "normal";

          cb.style.marginRight = "4px";
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.ja));
          content.appendChild(label);
        });

        details.appendChild(content);
        section.appendChild(details);
      });

      parent.appendChild(section);

      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).forEach(c => c.items.forEach(i => dict[i.en] = i.ja));
        window.__outputTranslation.register(dict);
      }
    },

    getTags() {
      // 1. 選択された要素を分類して収集
      const normalTags = [];
      const targetTags = [];
      const actionTags = [];
      const quantityTags = [];

      document.querySelectorAll(".accessories-section input:checked").forEach(cb => {
        const type = cb.dataset.type;
        const val = cb.dataset.en;
        if (type === "action") actionTags.push(val);
        else if (type === "target") targetTags.push(val);
        else if (type === "quantity") quantityTags.push(val);
        else normalTags.push(val);
      });

      // 2. 結合ロジック
      const postfixActions = new Set(["in mouth", "on back", "on belt", "on head", "in pocket"]);

      // 数量がある場合は、ターゲット側に前置きする (例: multiple hamburgers)
      const applyQty = (qty, target) => qty ? `${qty} ${target}` : target;

      // 出力先
      const finalTags = [...normalTags];

      if (targetTags.length > 0) {
        const qtyList = (quantityTags.length > 0) ? quantityTags : [null];

        if (actionTags.length > 0) {
          // アクション×ターゲット×数量 を結合
          actionTags.forEach(action => {
            targetTags.forEach(target => {
              qtyList.forEach(qty => {
                const t = applyQty(qty, target);
                if (postfixActions.has(action)) finalTags.push(`${t} ${action}`);     // "multiple sword on back"
                else finalTags.push(`${action} ${t}`);                               // "holding multiple sword"
              });
            });
          });
        } else {
          // ターゲットのみ（数量があれば適用）
          targetTags.forEach(target => {
            qtyList.forEach(qty => finalTags.push(applyQty(qty, target)));
          });
        }
      } else {
        // ターゲットが無い場合：アクションはそのまま、数量は捨てる
        finalTags.push(...actionTags);
      }

      // 3. 重複除去（順序維持）
      const seen = new Set();
      return finalTags.filter(t => {
        if (!t) return false;
        if (seen.has(t)) return false;
        seen.add(t);
        return true;
      });
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

