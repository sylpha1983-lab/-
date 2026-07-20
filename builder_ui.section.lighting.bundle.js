// Auto-generated bundle for section 'lighting'
// Contains 3 versions. Runtime mounts registered versions in ascending order.

(function(){
// --- builder_ui.section.lighting.v1.js ---
(function(){
  "use strict";
  const VERSION = 1; 
  const KEY = "lighting";

  const CATEGORIES = {
    "☀️ 基本・自然光 (Natural & Basic)": [
      { ja: "自然光", en: "natural lighting" },
      { ja: "太陽光", en: "sunlight" },
      { ja: "ソフトライティング (柔らかい)", en: "soft lighting" },
      { ja: "ハードライティング (硬い)", en: "hard lighting" },
      { ja: "アンビエント (環境光)", en: "ambient lighting" },
      { ja: "シネマティック (映画風)", en: "cinematic lighting" },
      { ja: "ドラマチック", en: "dramatic lighting" },
      { ja: "明るい照明", en: "bright lighting" },
      { ja: "薄暗い照明", en: "dim lighting" }
    ],
    "🕰️ 時間帯・方向 (Time & Direction)": [
      { ja: "朝の光", en: "morning light" },
      { ja: "夕日/夕暮れ", en: "sunset lighting" },
      { ja: "月明かり", en: "moonlight" },
      { ja: "逆光 (バックライト)", en: "backlighting" },
      { ja: "サイドライト", en: "side lighting" },
      { ja: "トップライト", en: "top lighting" },
      { ja: "リムライト (輪郭光)", en: "rim lighting" },
      { ja: "ボリュメトリック (光の筋)", en: "volumetric lighting" },
      { ja: "クレパスキュラー (薄明光線)", en: "crepuscular rays" }
    ],
    "💡 人工・特殊照明 (Artificial & Special)": [
      { ja: "スタジオ照明", en: "studio lighting" },
      { ja: "ネオン照明", en: "neon lighting" },
      { ja: "サイバーパンク照明", en: "cyberpunk lighting" },
      { ja: "キャンドルライト (蝋燭)", en: "candlelight" },
      { ja: "ランタンの光", en: "lantern light" },
      { ja: "暖色系の光", en: "warm lighting" },
      { ja: "寒色系の光", en: "cold lighting" },
      { ja: "多彩な照明", en: "colorful lighting" },
      { ja: "生物発光", en: "bioluminescence" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-lighting") || container;
      
      // ★初期化: 親コンテナをクリーンにする（ShadowやLightingの古い表示を消す）
      parent.innerHTML = "";

      // 1. Lightingの大枠 (コンテナ)
      const lightingMain = document.createElement("details");
      lightingMain.id = "lighting-main-group"; 
      lightingMain.style.cssText = "margin-top:5px; margin-bottom:10px; border:2px solid #ddd; border-radius:6px; background:#fff;";
      lightingMain.open = false;

      const summary = document.createElement("summary");
      summary.innerHTML = "🔆 Lighting (Lighting)"; // 名前をシンプルに戻す
      summary.style.cssText = "padding:12px; font-weight:bold; cursor:pointer; background:#eee; color:#333; font-size:1.05em;";
      lightingMain.appendChild(summary);
      
      // ★v2 (Advanced) が入るための場所
      const mountPoint = document.createElement("div");
      mountPoint.id = "lighting-mount-point"; 
      mountPoint.style.padding = "10px";

      // 「基本」カテゴリ作成
      const basicDetails = document.createElement("details");
      basicDetails.style.cssText = "margin-bottom:10px; border:1px solid #ccc; border-radius:4px; background:#fff;";
      basicDetails.open = false;

      const basicSummary = document.createElement("summary");
      basicSummary.innerHTML = "🔦 基本・自然光 (Basic)";
      basicSummary.style.cssText = "padding:10px; font-weight:bold; cursor:pointer; background:#f9f9f9; color:#444;";
      basicDetails.appendChild(basicSummary);

      const basicContent = document.createElement("div");
      basicContent.style.padding = "8px";

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const catDetails = document.createElement("details");
        catDetails.style.marginBottom = "6px";
        catDetails.style.borderLeft = "3px solid #ccc"; 
        catDetails.style.paddingLeft = "8px";
        catDetails.open = false;

        const catSummary = document.createElement("summary");
        catSummary.textContent = cat;
        catSummary.style.cursor = "pointer";
        catSummary.style.fontSize = "0.9em";
        catSummary.style.fontWeight = "bold";
        catSummary.style.color = "#555";
        catDetails.appendChild(catSummary);

        const catGrid = document.createElement("div");
        catGrid.style.display = "flex";
        catGrid.style.flexWrap = "wrap";
        catGrid.style.gap = "8px";
        catGrid.style.padding = "5px 0 5px 5px";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.fontSize = "0.85em";
          label.style.display = "flex";
          label.style.alignItems = "center";
          label.style.cursor = "pointer";
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.ja));
          catGrid.appendChild(label);
        });

        catDetails.appendChild(catGrid);
        basicContent.appendChild(catDetails);
      });

      basicDetails.appendChild(basicContent);
      mountPoint.appendChild(basicDetails); 

      lightingMain.appendChild(mountPoint);
      parent.appendChild(lightingMain);

      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(i => dict[i.en] = i.ja);
        window.__outputTranslation.register(dict);
      }
    },
    getTags() {
      const tags = [];
      const root = document.getElementById("lighting-main-group");
      if(root) {
        root.querySelectorAll("input:checked").forEach(cb => tags.push(cb.dataset.en));
      }
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

// --- builder_ui.section.lighting.v3.js ---
// v3: 光源・陰影司令室。Lightingを光源・方向・色・時間帯へ整理し、Shadow v2と完成セット連動する。
(function(){
  "use strict";

  const VERSION = 3;
  const KEY = "lighting";
  let internalLinking = false;

  const GROUPS = [
    { title:"☀️ 基本光・明暗設計", items:[
      { id:"lit_natural", ja:"自然光", en:"natural lighting" },
      { id:"lit_sunlight", ja:"太陽光", en:"sunlight" },
      { id:"lit_soft", ja:"柔らかい光", en:"soft lighting" },
      { id:"lit_hard", ja:"硬い光", en:"hard lighting" },
      { id:"lit_ambient", ja:"環境光", en:"ambient lighting" },
      { id:"lit_cinematic", ja:"映画的ライティング", en:"cinematic lighting" },
      { id:"lit_dramatic", ja:"ドラマチック照明", en:"dramatic lighting" },
      { id:"lit_bright", ja:"明るい照明", en:"bright lighting" },
      { id:"lit_dim", ja:"薄暗い照明", en:"dim lighting" },
      { id:"lit_high_key", ja:"ハイキー照明", en:"high-key lighting" },
      { id:"lit_low_key", ja:"ローキー照明", en:"low-key lighting" },
      { id:"lit_even", ja:"均一照明", en:"even illumination" },
      { id:"lit_diffused", ja:"拡散光", en:"diffused lighting" },
      { id:"lit_directional", ja:"指向性の強い光", en:"directional lighting" }
    ]},
    { title:"🧭 光の方向・役割", items:[
      { id:"lit_front", ja:"正面光", en:"front lighting" },
      { id:"lit_side", ja:"サイドライト", en:"side lighting" },
      { id:"lit_top", ja:"トップライト", en:"top lighting" },
      { id:"lit_bottom", ja:"下からの光", en:"underlighting" },
      { id:"lit_back", ja:"逆光", en:"backlighting" },
      { id:"lit_rim", ja:"リムライト", en:"rim lighting" },
      { id:"lit_key", ja:"キーライト", en:"key light" },
      { id:"lit_fill", ja:"フィルライト", en:"fill light" },
      { id:"lit_hair", ja:"ヘアライト", en:"hair light" },
      { id:"lit_kicker", ja:"キッカーライト", en:"kicker light" },
      { id:"lit_edge", ja:"輪郭分離光", en:"subject-separating edge light" },
      { id:"lit_eye", ja:"瞳のキャッチライト", en:"clear eye catchlights" },
      { id:"lit_wrap", ja:"顔を包むライトラップ", en:"soft facial light wrap" },
      { id:"lit_bounce", ja:"バウンスライト", en:"bounce lighting" }
    ]},
    { title:"🕰️ 時間帯・天候光", items:[
      { id:"lit_morning", ja:"朝の光", en:"morning light" },
      { id:"lit_morning_glow", ja:"朝焼け", en:"morning glow" },
      { id:"lit_golden", ja:"ゴールデンアワー", en:"golden hour" },
      { id:"lit_sunset", ja:"夕日・夕暮れ", en:"sunset lighting" },
      { id:"lit_magic", ja:"マジックアワー", en:"magic hour" },
      { id:"lit_blue_hour", ja:"ブルーアワー", en:"blue hour" },
      { id:"lit_moon", ja:"月明かり", en:"moonlight" },
      { id:"lit_overcast", ja:"曇天の拡散光", en:"overcast lighting" },
      { id:"lit_crepuscular", ja:"薄明光線", en:"crepuscular rays" },
      { id:"lit_godrays", ja:"ゴッドレイ", en:"god rays" },
      { id:"lit_tyndall", ja:"チンダル現象", en:"tyndall effect" }
    ]},
    { title:"🌈 色温度・カラー照明", items:[
      { id:"lit_warm", ja:"暖色光", en:"warm lighting" },
      { id:"lit_cold", ja:"寒色光", en:"cold lighting" },
      { id:"lit_neutral", ja:"ニュートラル白色光", en:"neutral white lighting" },
      { id:"lit_red", ja:"赤い照明", en:"red lighting" },
      { id:"lit_blue", ja:"青い照明", en:"blue lighting" },
      { id:"lit_purple", ja:"紫の環境光", en:"purple ambient" },
      { id:"lit_green", ja:"緑の輝き", en:"green glow" },
      { id:"lit_twotone", ja:"赤青デュアルライト", en:"two tone lighting, red and blue lighting" },
      { id:"lit_gel", ja:"カラージェル", en:"colored gel lighting" },
      { id:"lit_colorful", ja:"多彩な照明", en:"colorful lighting" },
      { id:"lit_iridescent", ja:"虹色の光沢光", en:"iridescent light" },
      { id:"lit_rainbow", ja:"七色の光", en:"rainbow lighting" }
    ]},
    { title:"🔥 人工光・発光体", items:[
      { id:"lit_studio", ja:"スタジオ照明", en:"studio lighting" },
      { id:"lit_neon", ja:"ネオン照明", en:"neon lighting" },
      { id:"lit_cyber", ja:"サイバーパンク照明", en:"cyberpunk lighting" },
      { id:"lit_candle", ja:"蝋燭の光", en:"candlelight" },
      { id:"lit_lantern", ja:"ランタンの光", en:"lantern light" },
      { id:"lit_fire", ja:"焚き火の光", en:"firelight" },
      { id:"lit_fireplace", ja:"暖炉の光", en:"fireplace glow" },
      { id:"lit_sparkler", ja:"花火・スパークラー", en:"sparklers" },
      { id:"lit_monitor", ja:"モニター光", en:"monitor light" },
      { id:"lit_hologram", ja:"ホログラム光", en:"hologram glow" },
      { id:"lit_biolum", ja:"生物発光", en:"bioluminescence" },
      { id:"lit_aurora", ja:"オーロラ光", en:"aurora" },
      { id:"lit_lightning", ja:"雷光", en:"lightning flash" }
    ]},
    { title:"📸 スタジオ・人物／商品照明", items:[
      { id:"lit_threepoint", ja:"三点照明", en:"three-point lighting" },
      { id:"lit_rembrandt", ja:"レンブラント照明", en:"rembrandt lighting" },
      { id:"lit_butterfly", ja:"バタフライ照明", en:"butterfly lighting" },
      { id:"lit_split", ja:"スプリット照明", en:"split lighting" },
      { id:"lit_ring", ja:"リングライト", en:"ring light" },
      { id:"lit_softbox", ja:"ソフトボックス", en:"softbox lighting" },
      { id:"lit_clamshell", ja:"クラムシェル照明", en:"clamshell lighting" },
      { id:"lit_beautydish", ja:"ビューティーディッシュ", en:"beauty dish lighting" },
      { id:"lit_product", ja:"商品撮影用の均一光", en:"clean product photography lighting" },
      { id:"lit_specular", ja:"反射ハイライト制御", en:"controlled specular lighting" },
      { id:"lit_whitebalance", ja:"正確なホワイトバランス", en:"accurate white balance" }
    ]},
    { title:"🔬 体積光・物理光", items:[
      { id:"lit_volumetric", ja:"ボリュメトリックライト", en:"volumetric lighting" },
      { id:"lit_caustics", ja:"コースティクス", en:"caustics" },
      { id:"lit_refraction", ja:"屈折光", en:"refraction" },
      { id:"lit_gi", ja:"グローバルイルミネーション", en:"global illumination" },
      { id:"lit_sss", ja:"サブサーフェス・スキャタリング", en:"subsurface scattering" },
      { id:"lit_radiance", ja:"放射輝度", en:"radiance" },
      { id:"lit_prism", ja:"プリズム分光", en:"prism" },
      { id:"lit_reflected", ja:"反射光", en:"reflected light" },
      { id:"lit_indirect", ja:"間接光", en:"indirect lighting" },
      { id:"lit_translucent", ja:"透過逆光", en:"translucent backlighting" }
    ]},
    { title:"🧭 互換・専門欄へ移管（Optical / Shadow）", note:"旧Lighting棚にあった光学効果と影模様です。履歴互換のため残しています。新規利用ではCameraの光学効果、または下段Shadowの影模様を優先してください。", items:[
      { id:"lit_lensflare", ja:"レンズフレア（Camera互換）", en:"lens flare" },
      { id:"lit_bloom", ja:"ブルーム（Camera互換）", en:"bloom" },
      { id:"lit_bokeh", ja:"ボケ（Camera互換）", en:"bokeh" },
      { id:"lit_chromatic", ja:"色収差（Camera互換）", en:"chromatic aberration" },
      { id:"lit_halation", ja:"ハレーション（Camera互換）", en:"halation" },
      { id:"lit_diffraction", ja:"回折スパイク（Camera互換）", en:"diffraction spikes" },
      { id:"lit_blinds", ja:"ブラインドの影（Shadow互換）", en:"blinds shadow" },
      { id:"lit_window_shadow", ja:"窓枠の影（Shadow互換）", en:"window frame shadow" },
      { id:"lit_lattice", ja:"格子の影（Shadow互換）", en:"lattice shadow" },
      { id:"lit_lace", ja:"レースカーテンの影（Shadow互換）", en:"lace curtain shadow" },
      { id:"lit_dappled", ja:"木漏れ日の斑点（Shadow互換）", en:"dappled sunlight" },
      { id:"lit_heart_shadow", ja:"ハート型の影（Shadow互換）", en:"heart-shaped shadow" }
    ]}
  ];

  const SETS = [
    { theme:"王道アニメ・キャラ映え", items:[
      { id:"lightset_anime_core", ja:"Core Set", links:["lit_natural","lit_soft","lit_front","shd_soft","shd_contact"] },
      { id:"lightset_anime_safe", ja:"Safe Quality Set", links:["lit_natural","lit_soft","lit_front","lit_fill","lit_eye","shd_soft","shd_contact","shd_face_soft","shd_readable"] },
      { id:"lightset_anime_2000", ja:"2000 Limit Compatible Set", links:["lit_soft","lit_front","shd_soft"] },
      { id:"lightset_anime_full", ja:"Full Set", links:["lit_natural","lit_soft","lit_front","lit_fill","lit_eye","lit_wrap","lit_ambient","lit_rim","shd_soft","shd_contact","shd_face_soft","shd_readable","shd_ground"] }
    ]},
    { theme:"映画的ドラマ照明", items:[
      { id:"lightset_cinema_core", ja:"Core Set", links:["lit_cinematic","lit_dramatic","lit_side","lit_low_key","shd_chiaroscuro"] },
      { id:"lightset_cinema_safe", ja:"Safe Quality Set", links:["lit_cinematic","lit_dramatic","lit_side","lit_low_key","lit_rim","shd_chiaroscuro","shd_deep","shd_cast","shd_readable"] },
      { id:"lightset_cinema_2000", ja:"2000 Limit Compatible Set", links:["lit_cinematic","lit_side","shd_chiaroscuro"] },
      { id:"lightset_cinema_full", ja:"Full Set", links:["lit_cinematic","lit_dramatic","lit_side","lit_low_key","lit_rim","lit_volumetric","lit_directional","shd_chiaroscuro","shd_deep","shd_cast","shd_high_contrast","shd_face_split","shd_contact"] }
    ]},
    { theme:"逆光・リムライト主役", items:[
      { id:"lightset_back_core", ja:"Core Set", links:["lit_back","lit_rim","lit_edge","shd_cast"] },
      { id:"lightset_back_safe", ja:"Safe Quality Set", links:["lit_back","lit_rim","lit_edge","lit_fill","shd_cast","shd_contact","shd_readable"] },
      { id:"lightset_back_2000", ja:"2000 Limit Compatible Set", links:["lit_back","lit_rim","shd_cast"] },
      { id:"lightset_back_full", ja:"Full Set", links:["lit_back","lit_rim","lit_edge","lit_hair","lit_translucent","lit_volumetric","lit_fill","shd_cast","shd_contact","shd_silhouette_sep","shd_readable","shd_ground"] }
    ]},
    { theme:"月光・夜景", items:[
      { id:"lightset_moon_core", ja:"Core Set", links:["lit_moon","lit_cold","lit_dim","shd_deep"] },
      { id:"lightset_moon_safe", ja:"Safe Quality Set", links:["lit_moon","lit_cold","lit_ambient","lit_eye","shd_deep","shd_readable","shd_contact"] },
      { id:"lightset_moon_2000", ja:"2000 Limit Compatible Set", links:["lit_moon","lit_cold","shd_deep"] },
      { id:"lightset_moon_full", ja:"Full Set", links:["lit_moon","lit_blue_hour","lit_cold","lit_dim","lit_ambient","lit_rim","lit_eye","shd_deep","shd_long","shd_readable","shd_contact","shd_reflected"] }
    ]},
    { theme:"スタジオ・商品撮影", items:[
      { id:"lightset_studio_core", ja:"Core Set", links:["lit_studio","lit_threepoint","lit_key","lit_fill","shd_contact"] },
      { id:"lightset_studio_safe", ja:"Safe Quality Set", links:["lit_studio","lit_threepoint","lit_key","lit_fill","lit_softbox","lit_even","shd_contact","shd_soft","shd_ground"] },
      { id:"lightset_studio_2000", ja:"2000 Limit Compatible Set", links:["lit_studio","lit_threepoint","shd_contact"] },
      { id:"lightset_studio_full", ja:"Full Set", links:["lit_studio","lit_threepoint","lit_key","lit_fill","lit_softbox","lit_even","lit_product","lit_specular","lit_whitebalance","shd_contact","shd_cast","shd_soft","shd_ground","shd_product"] }
    ]}
  ];

  function makeDetails(title, className){
    const d = document.createElement("details");
    d.className = className || "light-v3-shelf";
    d.open = false;
    const s = document.createElement("summary");
    s.textContent = title;
    d.appendChild(s);
    const box = document.createElement("div");
    box.className = "light-v3-grid";
    d.appendChild(box);
    return d;
  }

  function makeRow(item, complete){
    const label = document.createElement("label");
    label.className = complete ? "light-v3-row light-v3-complete-row" : "light-v3-row";
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.id = "light_v3_" + item.id;
    cb.dataset.en = complete ? "" : item.en;
    cb.dataset.lightId = item.id;
    if(complete){
      cb.dataset.lightComplete = "1";
      cb.dataset.lightLinks = item.links.join("||");
    }
    const text = document.createElement("span");
    text.textContent = item.ja + (complete ? "" : " / " + item.en);
    label.appendChild(cb);
    label.appendChild(text);
    return label;
  }

  function boxes(selector){ return Array.from(document.querySelectorAll(selector)); }

  function openAndFlash(cb){
    let node = cb.parentElement;
    while(node && node !== document.body){
      if(node.tagName === "DETAILS") node.open = true;
      node = node.parentElement;
    }
    const row = cb.closest("label");
    if(row){
      row.classList.add("light-v3-linked");
      setTimeout(function(){ row.classList.remove("light-v3-linked"); }, 1800);
    }
  }

  function clearForNewSet(except){
    boxes('input[data-light-complete="1"]').forEach(function(cb){ if(cb !== except) cb.checked = false; });
    boxes('input[data-light-id]:not([data-light-complete])').forEach(function(cb){
      cb.checked = false;
      delete cb.dataset.lightLinkedBy;
    });
  }

  function applySet(cb){
    internalLinking = true;
    try{
      clearForNewSet(cb);
      const links = (cb.dataset.lightLinks || "").split("||").filter(Boolean);
      links.forEach(function(id){
        const child = document.querySelector('input[data-light-id="' + id + '"]:not([data-light-complete])');
        if(!child) return;
        child.checked = true;
        child.dataset.lightLinkedBy = cb.dataset.lightId;
        openAndFlash(child);
      });
    } finally { internalLinking = false; }
  }

  function bindGlobal(){
    if(window.__LIGHT_V3_GLOBAL_BOUND) return;
    window.__LIGHT_V3_GLOBAL_BOUND = true;
    document.addEventListener("change", function(ev){
      const cb = ev.target;
      if(!cb || cb.type !== "checkbox" || !cb.dataset.lightId || internalLinking || window.__historyRestoring) return;
      if(cb.dataset.lightComplete === "1"){
        if(cb.checked) applySet(cb);
        else {
          internalLinking = true;
          try{
            boxes('input[data-light-linked-by="' + cb.dataset.lightId + '"]').forEach(function(child){
              child.checked = false;
              delete child.dataset.lightLinkedBy;
            });
          } finally { internalLinking = false; }
        }
        return;
      }
      boxes('input[data-light-complete="1"]:checked').forEach(function(parent){ parent.checked = false; });
      delete cb.dataset.lightLinkedBy;
    });

    window.addEventListener("builderHistoryRestored", function(){
      boxes('input[data-light-complete="1"]:checked').forEach(function(parent){
        const links = (parent.dataset.lightLinks || "").split("||").filter(Boolean);
        links.forEach(function(id){
          const child = document.querySelector('input[data-light-id="' + id + '"]:not([data-light-complete])');
          if(child && child.checked) child.dataset.lightLinkedBy = parent.dataset.lightId;
        });
      });
    });
  }

  function ensureStyle(){
    if(document.getElementById("light-v3-style")) return;
    const st = document.createElement("style");
    st.id = "light-v3-style";
    st.textContent = `
      #lighting-main-group.light-v3-root{display:block;width:100%;box-sizing:border-box}
      .light-v3-head{font-weight:900;color:#9a6200;margin:0 0 6px}
      .light-v3-guide{font-size:12px;line-height:1.55;color:#665126;background:#fffaf0;border:1px solid #eed9a7;border-radius:8px;padding:8px 10px;margin-bottom:8px}
      .light-v3-shelf,.light-v3-set-theme{margin:0 0 7px;border:1px solid #ead8a9;border-radius:7px;background:#fff;overflow:hidden}
      .light-v3-shelf>summary,.light-v3-set-theme>summary{font-size:13px;font-weight:800;padding:8px 10px;cursor:pointer;background:#fffaf0}
      .light-v3-complete{border-color:#e7bd64;background:#fffdf7}
      .light-v3-grid{display:flex!important;flex-wrap:wrap!important;gap:6px!important;padding:8px!important;width:100%;box-sizing:border-box;grid-template-columns:none!important}
      .light-v3-theme-box{display:block!important;padding:6px!important;grid-template-columns:none!important}
      .light-v3-note{flex:1 1 100%;font-size:12px;line-height:1.5;color:#69582f;background:#fff9e8;border:1px solid #ead8a9;border-radius:6px;padding:7px 8px}
      .light-v3-row{display:flex;align-items:flex-start;gap:6px;flex:1 1 220px;min-width:0;background:#fff;border:1px solid #eee3c8;border-radius:6px;padding:6px 8px;font-size:12px;line-height:1.35;box-sizing:border-box}
      .light-v3-row input{margin-top:2px;flex:0 0 auto}.light-v3-row span{overflow-wrap:anywhere}
      .light-v3-complete-row{background:#fff6d9;border-color:#e9c66f;font-weight:750}
      .light-v3-linked{background:#dcfce7!important;border-color:#62c889!important;transition:.2s}
      @media(max-width:640px){.light-v3-row{flex:1 1 100%;width:100%}.light-v3-grid{display:flex!important;flex-direction:column!important}.light-v3-theme-box{padding:5px!important}}
    `;
    document.head.appendChild(st);
  }

  const API = {
    initUI(container){
      const parent = document.querySelector("#list-lighting") || container;
      if(!parent) return;
      ensureStyle();
      parent.innerHTML = "";

      const root = document.createElement("div");
      root.id = "lighting-main-group";
      root.className = "light-v3-root";
      const head = document.createElement("div");
      head.className = "light-v3-head";
      head.textContent = "🔆 光源司令室 (Lighting Control)";
      const guide = document.createElement("div");
      guide.className = "light-v3-guide";
      guide.textContent = "Lightingは光源・方向・強度・色温度・時間帯を担当します。影の硬さ、接地影、顔の陰影は下段Shadowへ分離しました。完成セットはLightingとShadowを同時にリセットし、選んだ航路で再構築します。";
      root.appendChild(head);
      root.appendChild(guide);

      const complete = makeDetails("🧩 光源・陰影完成セット（単一選択・4系統）", "light-v3-shelf light-v3-complete");
      const completeBox = complete.querySelector(":scope > .light-v3-grid");
      completeBox.className = "light-v3-theme-box";
      SETS.forEach(function(theme){
        const d = makeDetails("🎞️ " + theme.theme, "light-v3-set-theme");
        const box = d.querySelector(":scope > .light-v3-grid");
        theme.items.forEach(function(item){ box.appendChild(makeRow(item, true)); });
        completeBox.appendChild(d);
      });
      root.appendChild(complete);

      GROUPS.forEach(function(group){
        const d = makeDetails(group.title, "light-v3-shelf");
        const box = d.querySelector(":scope > .light-v3-grid");
        if(group.note){
          const note = document.createElement("div");
          note.className = "light-v3-note";
          note.textContent = group.note;
          box.appendChild(note);
        }
        group.items.forEach(function(item){ box.appendChild(makeRow(item, false)); });
        root.appendChild(d);
      });
      parent.appendChild(root);
      bindGlobal();

      if(window.__outputTranslation){
        const dict = {};
        GROUPS.forEach(function(g){ g.items.forEach(function(i){ dict[i.en] = i.ja; }); });
        window.__outputTranslation.register(dict);
      }
    },
    // v1 getTagsが #lighting-main-group 内の現行チェックを取得する。
    getTags(){ return []; }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

(function(){
// --- builder_ui.section.lighting.v2.js ---
(function(){
  "use strict";
  const VERSION = 2; 
  const KEY = "lighting"; 

  const CATEGORIES = {
    "🌈 色付き・多色照明 (Colors & Gels)": [
      { ja: "デュアルライティング (2色)", en: "two tone lighting, red and blue lighting" },
      { ja: "赤の照明", en: "red lighting" },
      { ja: "青の照明", en: "blue lighting" },
      { ja: "紫のアンビエント", en: "purple ambient" },
      { ja: "緑の輝き", en: "green glow" },
      { ja: "カラーフィルター", en: "colored gel lighting" },
      { ja: "虹色の光", en: "iridescent light" },
      { ja: "七色の光", en: "rainbow lighting" }
    ],
    "🌤️ 環境・時間帯 (Atmospheric & Mood)": [
      { ja: "ゴールデンアワー (黄金の夕暮れ)", en: "golden hour" },
      { ja: "ブルーアワー (静寂な青)", en: "blue hour" },
      { ja: "曇天 (拡散光)", en: "overcast lighting" },
      { ja: "ゴッドレイ (天使の梯子)", en: "god rays" },
      { ja: "チンダル現象 (光の筋)", en: "tyndall effect" },
      { ja: "モーニンググロー (朝焼け)", en: "morning glow" },
      { ja: "マジックアワー", en: "magic hour" }
    ],
    "📷 レンズ・光学 (Optical Effects)": [
      { ja: "レンズフレア", en: "lens flare" },
      { ja: "ブルーム (光の滲み)", en: "bloom" },
      { ja: "ボケ (背景ぼかし)", en: "bokeh" },
      { ja: "色収差 (ズレ)", en: "chromatic aberration" },
      { ja: "ハレーション (白飛び)", en: "halation" },
      { ja: "回折スパイク (光の十字)", en: "diffraction spikes" }
    ],
    "🕯️ マテリアル・質感 (Material & Physics)": [
      { ja: "サブサーフェス・スキャタリング (肌の透け感)", en: "subsurface scattering" },
      { ja: "コースティクス (集光模様)", en: "caustics" },
      { ja: "屈折 (ガラス/宝石)", en: "refraction" },
      { ja: "グローバルイルミネーション (反射)", en: "global illumination" },
      { ja: "放射輝度 (輝き)", en: "radiance" }
    ],
    "📸 プロ・スタジオ構成 (Pro Studio)": [
      { ja: "3点照明 (基本)", en: "three-point lighting" },
      { ja: "キーライト (主光源)", en: "key light" },
      { ja: "フィルライト (補助光)", en: "fill light" },
      { ja: "レンブラント照明 (三角影)", en: "rembrandt lighting" },
      { ja: "バタフライ照明 (美女)", en: "butterfly lighting" },
      { ja: "スプリット照明 (半顔)", en: "split lighting" },
      { ja: "リングライト (瞳の輪)", en: "ring light" },
      { ja: "ソフトボックス", en: "softbox lighting" }
    ],
    "🌿 光の形・影絵 (Light Shapes)": [
      { ja: "ブラインドの影", en: "blinds shadow" },
      { ja: "窓枠の影", en: "window frame shadow" },
      { ja: "格子の影", en: "lattice shadow" },
      { ja: "レースカーテンの影", en: "lace curtain shadow" },
      { ja: "木漏れ日の斑点", en: "dappled sunlight" },
      { ja: "プリズム分光", en: "prism" },
      { ja: "ハート型の影", en: "heart-shaped shadow" }
    ],
    "🔥 発光体・自然現象 (Emissive)": [
      { ja: "焚き火の明かり", en: "firelight" },
      { ja: "暖炉の光", en: "fireplace glow" },
      { ja: "花火の光", en: "sparklers" },
      { ja: "モニターの光 (青白)", en: "monitor light" },
      { ja: "ホログラム光", en: "hologram glow" },
      { ja: "オーロラ", en: "aurora" },
      { ja: "雷光 (フラッシュ)", en: "lightning flash" }
    ]
  };

  const API = {
    initUI(container) {
      // v1が作った受け皿（照明カテゴリーの中にある場所）を探す
      const targetArea = document.getElementById("lighting-mount-point");
      if (!targetArea) return;

      // 重複防止（念のため）
      const oldEl = document.getElementById("lighting-advanced-wrap");
      if (oldEl) oldEl.remove();

      // 「高度 (Advanced)」の大枠を作る
      const advDetails = document.createElement("details");
      advDetails.id = "lighting-advanced-wrap";
      advDetails.style.cssText = "margin-bottom:8px; border:1px solid #ffcc80; border-radius:4px; background:#fff;";
      advDetails.open = false; 

      const advSummary = document.createElement("summary");
      advSummary.innerHTML = "✨ 高度なライティング・演出 (Advanced)";
      advSummary.style.cssText = "padding:10px; font-weight:bold; cursor:pointer; background:#fff8e1; color:#d35400;";
      advDetails.appendChild(advSummary);

      const advContent = document.createElement("div");
      advContent.style.padding = "8px";

      // カテゴリーごとにアコーディオンを作成
      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const catDetails = document.createElement("details");
        catDetails.style.marginBottom = "6px";
        catDetails.style.borderLeft = "3px solid #ffcc80";
        catDetails.style.paddingLeft = "8px";
        catDetails.open = false;

        const summary = document.createElement("summary");
        summary.innerHTML = `${cat} <span style="font-size:0.8em;">(Adv)</span>`;
        summary.style.cursor = "pointer";
        summary.style.fontSize = "0.9em";
        summary.style.fontWeight = "bold";
        summary.style.color = "#d35400";
        catDetails.appendChild(summary);

        const content = document.createElement("div");
        content.style.display = "flex";
        content.style.flexWrap = "wrap";
        content.style.gap = "8px";
        content.style.padding = "5px 0 5px 5px";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.fontSize = "0.85em";
          label.style.display = "flex";
          label.style.alignItems = "center";
          label.style.cursor = "pointer";
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.ja));
          content.appendChild(label);
        });

        catDetails.appendChild(content);
        advContent.appendChild(catDetails);
      });

      advDetails.appendChild(advContent);
      // v1で作った場所に挿入
      targetArea.appendChild(advDetails);

      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(i => dict[i.en] = i.ja);
        window.__outputTranslation.register(dict);
      }
    },
    getTags() { return []; }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();
