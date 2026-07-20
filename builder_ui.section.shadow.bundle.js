// Auto-generated bundle for section 'shadow'
// Contains 2 versions. Runtime mounts registered versions in ascending order.

(function(){
// --- builder_ui.section.shadow.v1.js ---
(function(){
  "use strict";
  const VERSION = 1; 
  const KEY = "shadow"; 

  const BASIC_SHADOW = {
    "🌑 影の形・種類 (Basic Shadow)": [
      { ja: "濃い影", en: "deep shadow" },
      { ja: "暗い影", en: "dark shadow" },
      { ja: "重い影", en: "heavy shadow" },
      { ja: "強い影", en: "strong shadow" },
      { ja: "シャープな影", en: "sharp shadow" },
      { ja: "柔らかい影", en: "soft shadow" },
      { ja: "長い影", en: "long shadow" },
      { ja: "ドロップシャドウ", en: "drop shadow" },
      { ja: "シルエット", en: "silhouette" },
      { ja: "影なし (フラット)", en: "no shadow" },
      { ja: "顔に落ちる影", en: "shadow on face" },
      { ja: "目の影", en: "shaded eyes" }
    ]
  };

  const ADV_SHADOW = {
    "🌗 コントラスト・技術 (Advanced Shadow)": [
      { ja: "キアロスクーロ (明暗法)", en: "chiaroscuro" },
      { ja: "高コントラスト", en: "high contrast" },
      { ja: "低コントラスト", en: "low contrast" },
      { ja: "レイトレーシング影", en: "ray tracing" },
      { ja: "アンビエントオクルージョン", en: "ambient occlusion" },
      { ja: "ダイナミックシェーディング", en: "dynamic shading" }
    ]
  };

  // ★新規追加カテゴリー
  const CREATIVE_SHADOW = {
    "🎨 影の演出 (Creative Shadows)": [
      { ja: "セルフシャドウ (自身の影)", en: "self shadow" },
      { ja: "キャストシャドウ (落ちる影)", en: "cast shadow" },
      { ja: "色付きの影", en: "colored shadow" },
      { ja: "接地面の影 (コンタクト)", en: "contact shadow" },
      { ja: "複雑な影", en: "complex shadow" },
      { ja: "偶然できた影", en: "accidental shadow" },
      { ja: "ドラマチックな影", en: "dramatic shadow" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.getElementById("list-lighting") || container;
      if (!parent) return;

      // Coreが作成した中身エリア(.section-content)を探す
      const innerContent = parent.querySelector(".section-content");
      const targetArea = innerContent || parent;

      const oldEl = document.getElementById("shadow-main-group");
      if (oldEl) oldEl.remove();

      const shadowMain = document.createElement("details");
      shadowMain.id = "shadow-main-group";
      shadowMain.style.cssText = "margin-top:10px; margin-bottom:10px; border:2px solid #ccc; border-radius:6px; background:#fff;";
      shadowMain.open = false;

      const mainSummary = document.createElement("summary");
      mainSummary.innerHTML = "🌑 Shadow (Shadow)";
      mainSummary.style.cssText = "padding:12px; font-weight:bold; cursor:pointer; background:#eee; color:#333; font-size:1.05em;";
      shadowMain.appendChild(mainSummary);

      const shadowContent = document.createElement("div");
      shadowContent.style.padding = "10px";

      const createSubSection = (title, items, borderColor, bgColor, titleColor) => {
        const details = document.createElement("details");
        details.style.cssText = `margin-bottom:10px; border:1px solid ${borderColor}; border-radius:4px; background:#fff;`;
        details.open = false;
        
        const sum = document.createElement("summary");
        sum.innerHTML = title;
        sum.style.cssText = `padding:10px; font-weight:bold; cursor:pointer; background:${bgColor}; color:${titleColor};`;
        details.appendChild(sum);

        const inner = document.createElement("div");
        inner.style.padding = "8px";

        Object.entries(items).forEach(([cat, list]) => {
           const catDet = document.createElement("details");
           catDet.style.marginBottom = "6px";
           catDet.style.borderLeft = `3px solid ${borderColor}`;
           catDet.style.paddingLeft = "8px";
           catDet.open = false;

           const catSum = document.createElement("summary");
           catSum.textContent = cat;
           catSum.style.cursor="pointer"; catSum.style.fontSize="0.9em"; catSum.style.fontWeight="bold";
           catDet.appendChild(catSum);

           const grid = document.createElement("div");
           grid.style.display="flex"; grid.style.flexWrap="wrap"; grid.style.gap="8px"; grid.style.padding="5px";
           
           list.forEach(item => {
             const lbl = document.createElement("label");
             lbl.style.fontSize="0.85em"; lbl.style.display="flex"; lbl.style.alignItems="center"; lbl.style.cursor="pointer";
             const cb = document.createElement("input");
             cb.type="checkbox"; cb.dataset.en = item.en;
             lbl.appendChild(cb); lbl.appendChild(document.createTextNode(item.ja));
             grid.appendChild(lbl);
           });
           catDet.appendChild(grid);
           inner.appendChild(catDet);
        });
        details.appendChild(inner);
        return details;
      };

      shadowContent.appendChild(createSubSection("🔦 基本・影 (Basic)", BASIC_SHADOW, "#ccc", "#f9f9f9", "#444"));
      shadowContent.appendChild(createSubSection("✨ 高度・コントラスト (Advanced)", ADV_SHADOW, "#7048e8", "#f3f0ff", "#5f3dc4"));
      // ★新しいセクションを追加
      shadowContent.appendChild(createSubSection("🎨 影の演出 (Creative)", CREATIVE_SHADOW, "#e91e63", "#fce4ec", "#880e4f"));

      shadowMain.appendChild(shadowContent);
      targetArea.appendChild(shadowMain);

      if (window.__outputTranslation) {
        const dict = {};
        const allItems = [
          ...Object.values(BASIC_SHADOW).flat(), 
          ...Object.values(ADV_SHADOW).flat(),
          ...Object.values(CREATIVE_SHADOW).flat()
        ];
        allItems.forEach(i => dict[i.en] = i.ja);
        window.__outputTranslation.register(dict);
      }
    },
    getTags() {
      const tags = [];
      const root = document.getElementById("shadow-main-group");
      if(root) {
        root.querySelectorAll("input:checked").forEach(cb => tags.push(cb.dataset.en));
      }
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

// --- builder_ui.section.shadow.v2.js ---
// v2: Shadowを硬さ・落影・接地・顔陰影・演出へ整理。Lighting v3完成セットのリンク先を公開する。
(function(){
  "use strict";

  const VERSION = 2;
  const KEY = "shadow";

  const GROUPS = [
    { title:"🌑 濃度・硬さ・長さ", items:[
      { id:"shd_deep", ja:"濃い影", en:"deep shadow" },
      { id:"shd_dark", ja:"暗い影", en:"dark shadow" },
      { id:"shd_heavy", ja:"重い影", en:"heavy shadow" },
      { id:"shd_strong", ja:"強い影", en:"strong shadow" },
      { id:"shd_sharp", ja:"シャープな影", en:"sharp shadow" },
      { id:"shd_soft", ja:"柔らかい影", en:"soft shadow" },
      { id:"shd_long", ja:"長い影", en:"long shadow" },
      { id:"shd_none", ja:"影なし・フラット", en:"no shadow" },
      { id:"shd_faint", ja:"ごく薄い影", en:"faint shadow" },
      { id:"shd_feathered", ja:"羽毛状にぼける影", en:"feathered shadow edges" },
      { id:"shd_crisp", ja:"輪郭の明瞭な影", en:"crisp shadow edges" },
      { id:"shd_falloff", ja:"自然な影の減衰", en:"natural shadow falloff" },
      { id:"shd_penumbra", ja:"半影", en:"visible penumbra" },
      { id:"shd_umbra", ja:"本影", en:"defined umbra" }
    ]},
    { title:"⬛ 自己影・落影・接地", items:[
      { id:"shd_drop", ja:"ドロップシャドウ", en:"drop shadow" },
      { id:"shd_self", ja:"セルフシャドウ", en:"self shadow" },
      { id:"shd_cast", ja:"キャストシャドウ", en:"cast shadow" },
      { id:"shd_contact", ja:"接触部の影", en:"contact shadow" },
      { id:"shd_ground", ja:"地面へ自然に接地する影", en:"grounding shadow beneath the subject" },
      { id:"shd_product", ja:"商品の下に落ちる影", en:"realistic product shadow" },
      { id:"shd_foot", ja:"足元の接地影", en:"contact shadows beneath the feet" },
      { id:"shd_object", ja:"小物が落とす影", en:"cast shadows from held objects" },
      { id:"shd_haircast", ja:"髪が顔へ落とす影", en:"hair casting shadow on the face" },
      { id:"shd_clothfold", ja:"衣服のひだ陰影", en:"shadows defining fabric folds" },
      { id:"shd_background_cast", ja:"背景面へ落ちる人物影", en:"subject shadow cast onto the background" },
      { id:"shd_layered", ja:"複数光源の重なる影", en:"layered shadows from multiple lights" }
    ]},
    { title:"🙂 顔・身体の立体陰影", items:[
      { id:"shd_face", ja:"顔に落ちる影", en:"shadow on face" },
      { id:"shd_eyes", ja:"目元の影", en:"shaded eyes" },
      { id:"shd_face_soft", ja:"柔らかな顔陰影", en:"soft facial shadows" },
      { id:"shd_readable", ja:"暗所でも顔を読める陰影", en:"readable facial planes in shadow" },
      { id:"shd_chin", ja:"顎下の影", en:"natural under-chin shadow" },
      { id:"shd_nose", ja:"鼻筋を立てる影", en:"controlled nose shadow" },
      { id:"shd_cheek", ja:"頬骨を整える影", en:"sculpted cheek shadow" },
      { id:"shd_jaw", ja:"顎線の陰影", en:"defined jawline shadow" },
      { id:"shd_socket", ja:"眼窩の奥行き", en:"subtle eye-socket shading" },
      { id:"shd_face_split", ja:"半顔を分ける影", en:"half-face shadow division" },
      { id:"shd_body", ja:"身体の面を示す陰影", en:"body-plane defining shadows" },
      { id:"shd_muscle", ja:"筋肉を立てる陰影", en:"anatomical muscle shading" }
    ]},
    { title:"🌗 コントラスト・陰影技法", items:[
      { id:"shd_chiaroscuro", ja:"キアロスクーロ", en:"chiaroscuro" },
      { id:"shd_high_contrast", ja:"高コントラスト", en:"high contrast" },
      { id:"shd_low_contrast", ja:"低コントラスト", en:"low contrast" },
      { id:"shd_dynamic", ja:"ダイナミックシェーディング", en:"dynamic shading" },
      { id:"shd_silhouette", ja:"シルエット", en:"silhouette" },
      { id:"shd_silhouette_sep", ja:"暗背景から輪郭を分離", en:"clear silhouette separation in darkness" },
      { id:"shd_colored", ja:"色付きの影", en:"colored shadow" },
      { id:"shd_dramatic", ja:"ドラマチックな影", en:"dramatic shadow" },
      { id:"shd_complex", ja:"複雑な影", en:"complex shadow" },
      { id:"shd_accidental", ja:"偶然できた影", en:"accidental shadow" },
      { id:"shd_cel", ja:"セルシェーディング影", en:"clean cel-shaded shadows" },
      { id:"shd_gradient", ja:"滑らかな影グラデーション", en:"smooth shadow gradient" },
      { id:"shd_graphic", ja:"グラフィックな影形状", en:"graphic shadow shapes" },
      { id:"shd_reflected", ja:"影側へ回る反射光", en:"reflected light retained inside shadows" }
    ]},
    { title:"🪟 模様・環境が落とす影", items:[
      { id:"shd_blinds", ja:"ブラインドの影", en:"blinds shadow" },
      { id:"shd_window", ja:"窓枠の影", en:"window frame shadow" },
      { id:"shd_lattice", ja:"格子の影", en:"lattice shadow" },
      { id:"shd_lace", ja:"レースカーテンの影", en:"lace curtain shadow" },
      { id:"shd_dappled", ja:"木漏れ日の斑点", en:"dappled sunlight" },
      { id:"shd_leaf", ja:"葉が落とす影", en:"leaf shadows across the subject" },
      { id:"shd_heart", ja:"ハート型の影", en:"heart-shaped shadow" },
      { id:"shd_water", ja:"水面反射の揺れる影", en:"moving water-reflection shadows" },
      { id:"shd_arch", ja:"建築物の大きな落影", en:"large architectural cast shadow" }
    ]},
    { title:"🔬 レンダリング・物理陰影", note:"描画方式に関わる上級項目です。通常の影設計だけなら上段で十分です。Qualityの技術タグと重なる場合は、どちらか一方を使ってください。", items:[
      { id:"shd_raytrace", ja:"レイトレーシング影", en:"ray tracing" },
      { id:"shd_ao", ja:"アンビエントオクルージョン", en:"ambient occlusion" },
      { id:"shd_realistic", ja:"物理的に自然な落影", en:"physically plausible cast shadows" },
      { id:"shd_indirect", ja:"間接光を含む影", en:"indirect illumination inside shadows" },
      { id:"shd_soft_contact", ja:"柔らかな接地AO", en:"soft contact ambient occlusion" },
      { id:"shd_consistent", ja:"光源方向と整合する影", en:"shadows consistent with the light direction" }
    ]}
  ];

  function ensureStyle(){
    if(document.getElementById("shadow-v2-style")) return;
    const st = document.createElement("style");
    st.id = "shadow-v2-style";
    st.textContent = `
      #shadow-main-group.shadow-v2-root{display:block;width:100%;box-sizing:border-box;margin-top:10px;padding-top:9px;border-top:2px solid #d5d8df}
      .shadow-v2-head{font-weight:900;color:#4e4a64;margin:0 0 6px}
      .shadow-v2-guide{font-size:12px;line-height:1.55;color:#565366;background:#f7f6fb;border:1px solid #dedbea;border-radius:8px;padding:8px 10px;margin-bottom:8px}
      .shadow-v2-shelf{margin:0 0 7px;border:1px solid #dcd9e8;border-radius:7px;background:#fff;overflow:hidden}
      .shadow-v2-shelf>summary{font-size:13px;font-weight:800;padding:8px 10px;cursor:pointer;background:#f8f7fc}
      .shadow-v2-grid{display:flex!important;flex-wrap:wrap!important;gap:6px!important;padding:8px!important;width:100%;box-sizing:border-box;grid-template-columns:none!important}
      .shadow-v2-note{flex:1 1 100%;font-size:12px;line-height:1.5;color:#5e5870;background:#f7f5ff;border:1px solid #dfd9f2;border-radius:6px;padding:7px 8px}
      .shadow-v2-row{display:flex;align-items:flex-start;gap:6px;flex:1 1 220px;min-width:0;background:#fff;border:1px solid #e7e4ef;border-radius:6px;padding:6px 8px;font-size:12px;line-height:1.35;box-sizing:border-box}
      .shadow-v2-row input{margin-top:2px;flex:0 0 auto}.shadow-v2-row span{overflow-wrap:anywhere}
      .shadow-v2-row.light-v3-linked{background:#dcfce7!important;border-color:#62c889!important;transition:.2s}
      @media(max-width:640px){.shadow-v2-row{flex:1 1 100%;width:100%}.shadow-v2-grid{display:flex!important;flex-direction:column!important}}
    `;
    document.head.appendChild(st);
  }

  function makeShelf(group){
    const d = document.createElement("details");
    d.className = "shadow-v2-shelf";
    d.open = false;
    const s = document.createElement("summary");
    s.textContent = group.title;
    d.appendChild(s);
    const box = document.createElement("div");
    box.className = "shadow-v2-grid";
    if(group.note){
      const note = document.createElement("div");
      note.className = "shadow-v2-note";
      note.textContent = group.note;
      box.appendChild(note);
    }
    group.items.forEach(function(item){
      const label = document.createElement("label");
      label.className = "shadow-v2-row";
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.id = "shadow_v2_" + item.id;
      cb.dataset.en = item.en;
      cb.dataset.lightId = item.id;
      const text = document.createElement("span");
      text.textContent = item.ja + " / " + item.en;
      label.appendChild(cb);
      label.appendChild(text);
      box.appendChild(label);
    });
    d.appendChild(box);
    return d;
  }

  const API = {
    initUI(container){
      const parent = document.getElementById("list-lighting") || container;
      if(!parent) return;
      ensureStyle();
      const old = document.getElementById("shadow-main-group");
      if(old) old.remove();

      const root = document.createElement("div");
      root.id = "shadow-main-group";
      root.className = "shadow-v2-root";
      const head = document.createElement("div");
      head.className = "shadow-v2-head";
      head.textContent = "🌑 陰影司令室 (Shadow Control)";
      const guide = document.createElement("div");
      guide.className = "shadow-v2-guide";
      guide.textContent = "Shadowは影の硬さ・落影・接地・顔や身体の立体陰影を担当します。上段Lightingの完成セットから連動した棚だけが開き、緑色で短時間表示されます。";
      root.appendChild(head);
      root.appendChild(guide);
      GROUPS.forEach(function(group){ root.appendChild(makeShelf(group)); });
      parent.appendChild(root);

      if(window.__outputTranslation){
        const dict = {};
        GROUPS.forEach(function(g){ g.items.forEach(function(i){ dict[i.en] = i.ja; }); });
        window.__outputTranslation.register(dict);
      }
    },
    // v1 getTagsが #shadow-main-group 内の現行チェックを取得する。
    getTags(){ return []; }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
