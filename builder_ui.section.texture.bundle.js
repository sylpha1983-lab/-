// Auto-generated bundle for section 'texture'
// Contains 2 versions stacked in ascending order.

(function(){
// --- builder_ui.section.texture.v1.js ---
(function(){
  "use strict";

  const VERSION = 1;
  const KEY = "texture";

  const CATEGORIES = {

    "🪩 ホログラフィック素材 (Holographic Materials)": [
      { ja: "ホログラフィック素材", en: "holographic material" },
      { ja: "虹彩（イリデセント）表面", en: "iridescent surface" },
      { ja: "プリズム反射", en: "prismatic reflection" },
      { ja: "光の回折（ディフラクション）", en: "light diffraction" },
      { ja: "スペクトル・ハイライト", en: "spectral highlights" },
      { ja: "透明ポリマー", en: "transparent polymer" },
      { ja: "クロマティック光沢", en: "chromatic sheen" }
    ],
    "🧖‍♀️ 肌の質感 (Skin Texture)": [
      { ja: "陶器のような肌 (つるつる)", en: "porcelain skin" },
      { ja: "リアルな肌 (毛穴等)", en: "realistic skin texture" },
      { ja: "高精細な肌理 (きめ)", en: "highly detailed skin" },
      { ja: "サブサーフェス (透け感)", en: "subsurface scattering" },
      { ja: "光沢肌 (ツヤ)", en: "glossy skin" },
      { ja: "オイル肌 (ぬめり)", en: "oily skin" },
      { ja: "超光沢 (ハイパーグロス)", en: "hyper-glossy skin" },
      { ja: "汗ばんだ肌", en: "sweaty skin" },
      { ja: "玉の汗", en: "heavy sweat" },
      { ja: "日焼け肌 (タン)", en: "tan" },
      { ja: "色白 (ペール)", en: "pale skin" }
    ],
    "👙 布・衣装の材質 (Fabric)": [
      { ja: "ラテックス (ゴム)", en: "latex" },
      { ja: "ラバー (ゴムスーツ)", en: "rubber" },
      { ja: "エナメル (光沢革)", en: "shiny leather" },
      { ja: "レザー (革)", en: "leather" },
      { ja: "サテン (光沢布)", en: "satin" },
      { ja: "シルク (絹)", en: "silk" },
      { ja: "ベルベット (起毛)", en: "velvet" },
      { ja: "レース (透かし)", en: "lace" },
      { ja: "シースルー (透け)", en: "see-through fabric" },
      { ja: "濡れ透け (張り付き)", en: "wet clothes, clinging clothes" },
      { ja: "破れた布", en: "torn clothes" },
      { ja: "ニット (羊毛)", en: "knitted fabric" },
      { ja: "デニム", en: "denim" }
    ],
    "💦 液体・粘液 (Fluids & Slime)": [
      { ja: "水滴・雫", en: "water drops" },
      { ja: "濡れた", en: "wet" },
      { ja: "滴る (ドリップ)", en: "dripping" },
      { ja: "粘液・スライム", en: "slime" },
      { ja: "ローション (ぬるぬる)", en: "lotion, viscous liquid" },
      { ja: "オイル", en: "oil" },
      { ja: "溶解・ドロドロ", en: "melting" },
      { ja: "泡 (バブル)", en: "bubbles" },
      { ja: "精液 (白濁液)", en: "cum, white fluid" },
      { ja: "蜂蜜・シロップ", en: "honey, syrup" },
      { ja: "チョコレート", en: "melted chocolate" }
    ],
    "🧱 硬質・環境素材 (Hard Surface)": [
      { ja: "金属 (メタル)", en: "metal" },
      { ja: "錆びた金属", en: "rusty metal" },
      { ja: "黄金 (ゴールド)", en: "gold" },
      { ja: "クローム (鏡面)", en: "chrome" },
      { ja: "ガラス", en: "glass" },
      { ja: "クリスタル", en: "crystal" },
      { ja: "プラスチック", en: "plastic" },
      { ja: "木材 (ウッド)", en: "wooden texture" },
      { ja: "氷", en: "ice texture" }
    ],
    "🔍 微細ディテール (Micro Details)": [
      { ja: "不完全さ (リアリティ)", en: "imperfections" },
      { ja: "汚れ・泥", en: "dirty, mud" },
      { ja: "ひび割れ", en: "cracked" },
      { ja: "ひっかき傷", en: "scratches" },
      { ja: "摩耗・使い古し", en: "worn out" },
      { ja: "刺繍 (ししゅう)", en: "embroidery" },
      { ja: "ステッチ (縫い目)", en: "stitches" },
      { ja: "埃 (ほこり)", en: "dust" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-texture") || container;
      parent.innerHTML = "";
      
      const section = document.createElement("div");
      section.className = "texture-section";
      
      const h = document.createElement("div");
      h.textContent = "🧶 素材・質感 (Material/Texture)";
      h.style.fontWeight = "bold";
      h.style.color = "#556b2f"; 
      h.style.marginBottom = "8px";
      section.appendChild(h);

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.open = false; 
        details.style.marginBottom = "8px";
        details.style.border = "1px solid #e0e0d0";
        details.style.borderRadius = "4px";
        
        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.cursor = "pointer";
        summary.style.fontSize = "0.9em";
        summary.style.fontWeight = "bold";
        summary.style.padding = "6px";
        summary.style.backgroundColor = "#f4f4f0";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.display = "flex";
        content.style.flexWrap = "wrap";
        content.style.gap = "6px";
        content.style.padding = "8px";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.fontSize = "0.85em";
          label.style.display = "flex";
          label.style.alignItems = "center";
          label.style.backgroundColor = "#fff";
          label.style.padding = "4px 8px";
          label.style.borderRadius = "4px";
          label.style.border = "1px solid #e0e0d0";
          label.style.cursor = "pointer";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          cb.style.marginRight = "6px";
          
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
        Object.values(CATEGORIES).flat().forEach(i => dict[i.en] = i.ja);
        window.__outputTranslation.register(dict);
      }
    },
    getTags() {
      const tags = [];
      document.querySelectorAll(".texture-section input:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.texture.v2.js ---
(function(){
  "use strict";

  const VERSION = 2; 
  const KEY = "texture";
  const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  // ✅ 通常表示：フェチ・質感拡張 (General Fetish & Texture)
  const EXTENDED_CATEGORIES = {
    "👙 衣装・フェチ素材 (Fetish Fabric)": [
      { ja: "ラテックス (ゴム)", en: "latex" },
      { ja: "ラバー (ゴムスーツ)", en: "rubber" },
      { ja: "エナメル (光沢革)", en: "shiny leather" },
      { ja: "シースルー (透け)", en: "see-through fabric" },
      { ja: "濡れ透け (張り付き)", en: "wet clothes, clinging clothes" },
      { ja: "破れた服", en: "torn clothes" },
      { ja: "レース (透かし)", en: "lace" },
      { ja: "サテン (光沢布)", en: "satin" },
      { ja: "ベルベット", en: "velvet" },
      { ja: "ボディースーツ", en: "bodysuit" },
      { ja: "競泳水着", en: "racing swimsuit" },
      { ja: "網タイツ", en: "fishnet pantyhose" }
    ],
    "💧 液体・汗・オイル (Fluids & Sweat)": [
      { ja: "汗だく", en: "drenched in sweat" },
      { ja: "玉の汗", en: "heavy sweat" },
      { ja: "ローション (ぬるぬる)", en: "lotion, viscous liquid" },
      { ja: "オイルまみれ", en: "oil-covered" },
      { ja: "粘液・スライム", en: "slime" },
      { ja: "したたる (Drip)", en: "dripping" },
      { ja: "泡・バブル", en: "bubbles" },
      { ja: "濡れた肌", en: "wet skin" }
    ]
  };

  // 🔞 シークレット表示：R-18 体液 (Adult Fluids)
  const SECRET_CATEGORIES = {
    "🔞 R-18 液体・白濁 (Adult Fluids)": [
      { ja: "精液 (白濁液)", en: "cum, white fluid" },
      { ja: "大量の精液", en: "excessive cum" },
      { ja: "顔射 (顔にかかる)", en: "cum on face" },
      { ja: "全身精液まみれ", en: "cum on body, messy body" },
      { ja: "口内射精", en: "cum in mouth" },
      { ja: "愛液・よだれ", en: "saliva, drooling, vaginal fluids" },
      { ja: "母乳", en: "breast milk" }
    ]
  };

  const API = {
    initUI(container) {
      const section = container.querySelector(".texture-section") || document.createElement("div");
      if (!section.className) {
        section.className = "texture-section";
        const h = document.createElement("div");
        h.textContent = "🧶 素材・質感 (Material/Texture)";
        h.style.fontWeight = "bold"; h.style.color = "#556b2f"; h.style.marginBottom = "8px";
        section.appendChild(h);
        container.appendChild(section);
      }

      // 通常カテゴリの表示
      Object.entries(EXTENDED_CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.open = false; 
        details.style.marginBottom = "8px";
        details.style.border = "1px solid #e0e0d0"; // 通常色
        details.style.borderRadius = "4px";
        
        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.cursor = "pointer";
        summary.style.fontSize = "0.9em";
        summary.style.fontWeight = "bold";
        summary.style.padding = "6px";
        summary.style.backgroundColor = "#f9f9f5";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.display = "flex";
        content.style.flexWrap = "wrap";
        content.style.gap = "6px";
        content.style.padding = "8px";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.fontSize = "0.85em";
          label.style.display = "flex";
          label.style.alignItems = "center";
          label.style.backgroundColor = "#fff";
          label.style.padding = "4px 8px";
          label.style.borderRadius = "4px";
          label.style.border = "1px solid #e0e0d0";
          label.style.cursor = "pointer";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          cb.style.marginRight = "6px";
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.ja));
          content.appendChild(label);
        });
        details.appendChild(content);
        section.appendChild(details);
      });

      // シークレットカテゴリの表示
      if (IS_UNLOCKED) {
        Object.entries(SECRET_CATEGORIES).forEach(([cat, items]) => {
          const details = document.createElement("details");
          details.open = false; 
          details.style.marginBottom = "8px";
          details.style.border = "1px solid #ffcccc"; // 赤枠
          details.style.borderRadius = "4px";
          
          const summary = document.createElement("summary");
          summary.innerHTML = `${cat}`;
          summary.style.cursor = "pointer";
          summary.style.fontSize = "0.9em";
          summary.style.fontWeight = "bold";
          summary.style.padding = "6px";
          summary.style.backgroundColor = "#fff0f0";
          summary.style.color = "#d00";
          details.appendChild(summary);

          const content = document.createElement("div");
          content.style.display = "flex";
          content.style.flexWrap = "wrap";
          content.style.gap = "6px";
          content.style.padding = "8px";

          items.forEach(item => {
            const label = document.createElement("label");
            label.style.fontSize = "0.85em";
            label.style.display = "flex";
            label.style.alignItems = "center";
            label.style.backgroundColor = "#fff";
            label.style.padding = "4px 8px";
            label.style.borderRadius = "4px";
            label.style.border = "1px solid #ffcccc";
            label.style.cursor = "pointer";
            
            const cb = document.createElement("input");
            cb.type = "checkbox";
            cb.dataset.en = item.en;
            cb.style.marginRight = "6px";
            
            label.appendChild(cb);
            label.appendChild(document.createTextNode(item.ja));
            content.appendChild(label);
          });
          details.appendChild(content);
          section.appendChild(details);
        });
      }

      if (window.__outputTranslation) {
        const dict = {};
        [...Object.values(EXTENDED_CATEGORIES), ...Object.values(SECRET_CATEGORIES)].flat().forEach(i => dict[i.en] = i.ja);
        window.__outputTranslation.register(dict);
      }
    },
    getTags() { return []; }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

// --- builder_ui.section.texture.v3.js ---
// R-18液体・粘液・体液特化強化（マウント改善版）
(function(){
  "use strict";
  const VERSION = 3;
  const KEY = "texture";

  const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  const SECRET_FLUID_CATEGORIES = {
    "🔞 愛液・牝汁 (Pussy Juice & Female Fluids)": [
      { ja: "大量愛液", en: "copious vaginal fluids, overflowing pussy juice" },
      { ja: "糸引き愛液", en: "stringy pussy juice, viscous vaginal fluids, dripping threads" },
      { ja: "透明愛液", en: "clear sticky fluids, glistening pussy juice" },
      { ja: "白濁愛液", en: "creamy pussy juice, mixed fluids" },
      { ja: "大洪水", en: "flooding wetness, excessive squirting fluids" }
    ],
    "🔞 精液・白濁 (Cum & Semen)": [
      { ja: "大量中出し", en: "creampie, excessive cum inside, cum overflow" },
      { ja: "精液垂れ", en: "cum dripping from pussy, creampie leakage" },
      { ja: "顔射・精液まみれ", en: "bukkake, cum on face, semen covered" },
      { ja: "体液混合", en: "mixed cum and pussy juice, messy fluids" },
      { ja: "精液プール", en: "pool of cum, semen puddle" }
    ],
    "🔞 混合体液・ベトベト (Mixed Bodily Fluids)": [
      { ja: "愛液と精液の混合", en: "cum mixed with pussy juice, creamy mess" },
      { ja: "汗＋よだれ＋愛液", en: "sweat, saliva and vaginal fluids mix" },
      { ja: "全身体液まみれ", en: "body covered in fluids, glossy wet body" },
      { ja: "ベトベト糸引き", en: "sticky stringy fluids all over" }
    ],
    "💦 汗・光沢・ぬめり (Sweat & Sheen)": [
      { ja: "汗だく光沢", en: "drenched in sweat, glistening sweat" },
      { ja: "オイルまみれ", en: "oiled body, shiny oil" },
      { ja: "ローション塗れ", en: "covered in lotion, slippery wet" }
    ]
  };

  const API = {
    initUI(container) {
      if (!IS_UNLOCKED) return;

      // より確実にsectionを探す（v1/v2両対応）
      let section = document.querySelector(".texture-section");
      if (!section) {
        // まだ作られていない場合は親コンテナから作る
        const parent = container || document.querySelector("#list-texture");
        if (!parent) return;

        section = document.createElement("div");
        section.className = "texture-section";
        
        const h = document.createElement("div");
        h.textContent = "🧶 素材・質感 (Material/Texture)";
        h.style.fontWeight = "bold";
        h.style.color = "#556b2f"; 
        h.style.marginBottom = "8px";
        section.appendChild(h);
        
        parent.appendChild(section);
      }

      // 新しいカテゴリーを追加
      Object.entries(SECRET_FLUID_CATEGORIES).forEach(([cat, items]) => {
        // 既に同じカテゴリーが存在していたらスキップ（重複防止）
        if (section.querySelector(`summary[textContent="${cat}"]`)) return;

        const details = document.createElement("details");
        details.style.marginBottom = "8px";
        details.style.border = "1px solid #ff6699";
        details.style.borderRadius = "6px";
        details.style.backgroundColor = "#fff0f5";

        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.backgroundColor = "#ffe6f0";
        summary.style.color = "#c00";
        summary.style.fontWeight = "bold";
        summary.style.padding = "8px";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.padding = "8px";
        content.style.display = "flex";
        content.style.flexWrap = "wrap";
        content.style.gap = "6px";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = `
            display:flex; 
            align-items:center; 
            padding:4px 8px; 
            background:#fff; 
            border:1px solid #ff99bb; 
            border-radius:4px; 
            cursor:pointer; 
            font-size:0.85em;
          `;
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          cb.style.marginRight = "5px";
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.ja));
          content.appendChild(label);
        });

        details.appendChild(content);
        section.appendChild(details);
      });
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".texture-section input:checked").forEach(cb => {
        if (cb.dataset && cb.dataset.en) tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();