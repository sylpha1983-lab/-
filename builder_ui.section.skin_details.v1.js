(function(){
  "use strict";

  const VERSION = 1;
  const KEY = "skin_details";

  const CATEGORIES = {
    "👁️ アイメイク (Eye Makeup)": [
      { ja: "アイシャドウ (基本)", en: "eyeshadow" },
      { ja: "赤アイシャドウ", en: "red eyeshadow" },
      { ja: "ピンクアイシャドウ", en: "pink eyeshadow" },
      { ja: "青アイシャドウ", en: "blue eyeshadow" },
      { ja: "紫アイシャドウ", en: "purple eyeshadow" },
      { ja: "黒アイシャドウ", en: "black eyeshadow" },
      { ja: "スモーキーアイ", en: "smoky eyes" },
      { ja: "ラメ・グリッター", en: "glitter eyeshadow" },
      { ja: "グラデーションアイ", en: "gradient eyes" },
      { ja: "アイライナー", en: "eyeliner" },
      { ja: "キャットライン (跳ね上げ)", en: "winged eyeliner" },
      { ja: "囲み目メイク", en: "heavy eyeliner" },
      { ja: "マスカラ", en: "mascara" },
      { ja: "長いまつ毛", en: "long eyelashes" },
      { ja: "ボリュームまつ毛", en: "voluminous eyelashes" },
      { ja: "下まつ毛強調", en: "lower eyelashes" },
      { ja: "色付きまつ毛", en: "colored eyelashes" }
    ],
    "💄 リップ・口紅 (Lip Makeup)": [
      { ja: "口紅 (リップスティック)", en: "lipstick" },
      { ja: "赤リップ", en: "red lipstick" },
      { ja: "ピンクリップ", en: "pink lipstick" },
      { ja: "黒リップ", en: "black lipstick" },
      { ja: "紫リップ", en: "purple lipstick" },
      { ja: "オレンジリップ", en: "orange lipstick" },
      { ja: "ヌードリップ (肌色)", en: "nude lipstick" },
      { ja: "リップグロス (艶)", en: "lipgloss" },
      { ja: "マットリップ", en: "matte lipstick" },
      { ja: "グラデーションリップ (血色)", en: "gradient lips" },
      { ja: "ヘビーメイク (厚化粧)", en: "heavy makeup" },
      { ja: "キス汚れ (口紅跡)", en: "lipstick smear" }
    ],
    "😳 チーク・ベースメイク (Blush & Base)": [
      { ja: "メイクアップ (基本)", en: "makeup" },
      { ja: "チーク (頬紅)", en: "blush" },
      { ja: "目の下チーク", en: "under eye blush" },
      { ja: "酔っ払いメイク (イガリ)", en: "drunk blush" },
      { ja: "ハイライト (艶出し)", en: "highlighter makeup" },
      { ja: "シェーディング (陰影)", en: "contouring makeup" },
      { ja: "陶器肌 (ドールスキン)", en: "porcelain skin" },
      { ja: "そばかす", en: "freckles" },
      { ja: "偽そばかす (メイク)", en: "fake freckles" },
      { ja: "鼻の頭のチーク", en: "nose blush" }
    ],
    "💅 ネイル・手元 (Nails)": [
      { ja: "ネイル (マニキュア)", en: "nail polish" },
      { ja: "ネイルアート", en: "nail art" },
      { ja: "フレンチネイル", en: "french manicure" },
      { ja: "グラデーションネイル", en: "gradient nails" },
      { ja: "長い爪", en: "long fingernails" },
      { ja: "尖った爪 (スティレット)", en: "stiletto nails" },
      { ja: "爪手入れ (ケア)", en: "manicured nails" },
      { ja: "赤ネイル", en: "red nails" },
      { ja: "黒ネイル", en: "black nails" },
      { ja: "ピンクネイル", en: "pink nails" },
      { ja: "パステルネイル", en: "pastel fingernails" },
      { ja: "ゴールドネイル", en: "gold nails" }
    ],
    "🌞 ボディ・肌の特徴 (Body Marks)": [
      { ja: "日焼け跡 (全体)", en: "tan lines" },
      { ja: "水着の日焼け跡", en: "bikini tan" },
      { ja: "Tシャツの日焼け跡", en: "shirt tan" },
      { ja: "サンタン (日焼け肌)", en: "suntan" },
      { ja: "タトゥー (刺青)", en: "tattoo" },
      { ja: "腹部のタトゥー", en: "stomach tattoo" },
      { ja: "腕のタトゥー", en: "arm tattoo" },
      { ja: "背中のタトゥー", en: "back tattoo" },
      { ja: "魔法の紋章", en: "magic crest" },
      { ja: "淫紋 (下腹部)", en: "womb tattoo" },
      { ja: "バーコード", en: "barcode" },
      { ja: "ほくろ", en: "mole" },
      { ja: "泣きぼくろ", en: "mole under eye" },
      { ja: "口元のほくろ", en: "mole under mouth" }
    ],
    "🩹 傷・ダメージ表現 (Scars & Damage)": [
      { ja: "傷跡 (スカー)", en: "scars" },
      { ja: "顔の傷", en: "scar on face" },
      { ja: "切り傷", en: "cut" },
      { ja: "縫い目 (継ぎ接ぎ)", en: "stitches" },
      { ja: "包帯 (バンデージ)", en: "bandaged" },
      { ja: "全身包帯", en: "bandages covering body" },
      { ja: "眼帯 (医療用)", en: "medical eyepatch" },
      { ja: "あざ (Bruise)", en: "bruise" },
      { ja: "絆創膏 (バンドエイド)", en: "bandaid" },
      { ja: "顔の絆創膏", en: "bandage on face" },
      { ja: "鼻の絆創膏", en: "bandage on nose" }
    ],
    "🧔 ヒゲ・顔毛 (Facial Hair)": [
      { ja: "あごヒゲ", en: "beard" },
      { ja: "口ヒゲ", en: "mustache" },
      { ja: "無精ヒゲ", en: "stubble" },
      { ja: "長いヒゲ", en: "long beard" },
      { ja: "ヤギヒゲ", en: "goatee" },
      { ja: "もみあげ", en: "sideburns" }
    ]
  };

  const API = {
    initUI(container) {
      // 1. 自分専用の表示エリアを探す、なければ作る
      let section = document.getElementById("list-skin_details");
      
      if (!section) {
        section = document.createElement("div");
        section.id = "list-skin_details";
        section.className = "section"; // スタイル適用のためクラス付与
        section.style.marginTop = "15px";
        section.style.marginBottom = "15px";
        section.style.borderTop = "1px dashed #ccc";
        section.style.paddingTop = "10px";

        // 挿入位置の調整: 'list-hair' の後ろ、または 'list-race' の後ろ
        const sibling = document.getElementById("list-hair") || document.getElementById("list-race");
        if (sibling && sibling.parentNode) {
          sibling.parentNode.insertBefore(section, sibling.nextSibling);
        } else {
          container.appendChild(section);
        }
      }

      // 2. 中身を初期化して構築
      section.innerHTML = ""; 

      const h = document.createElement("div");
      h.textContent = "🎨 メイク・身体特徴 (Skin & Details)";
      h.style.fontWeight = "bold";
      h.style.color = "#e91e63"; // ピンク系
      h.style.marginBottom = "8px";
      section.appendChild(h);

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.className = "skin-cat"; // クラス付与
        details.style.marginBottom = "6px";
        details.style.border = "1px solid #ddd";
        details.style.borderRadius = "4px";
        details.style.background = "#fff";
        details.open = false; 
        
        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.cursor = "pointer";
        summary.style.fontSize = "0.9em";
        summary.style.padding = "6px";
        summary.style.fontWeight = "bold";
        summary.style.backgroundColor = "#fff0f5"; // 薄いピンク背景
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.display = "flex";
        content.style.flexWrap = "wrap";
        content.style.gap = "8px";
        content.style.padding = "8px";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.fontSize = "0.85em";
          label.style.display = "flex";
          label.style.alignItems = "center";
          label.style.cursor = "pointer";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          cb.style.marginRight = "4px";
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.ja));
          content.appendChild(label);
        });

        details.appendChild(content);
        section.appendChild(details);
      });

      // 3. 辞書登録
      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(i => dict[i.en] = i.ja);
        window.__outputTranslation.register(dict);
      }
    },

    getTags() {
      const tags = [];
      const section = document.getElementById("list-skin_details");
      if(section) {
        section.querySelectorAll("input:checked").forEach(cb => tags.push(cb.dataset.en));
      }
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

