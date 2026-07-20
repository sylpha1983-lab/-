// Auto-generated bundle for section 'composition'
// Contains 2 versions. Runtime mounts registered versions in ascending order.

(function(){
// --- builder_ui.section.composition.v1.js ---
(function(){
  "use strict";

  const VERSION = 1;
  const KEY = "composition";

  const CATEGORIES = {
    "基本ルール・配置 (Basic Rules)": [
      { ja: "三分割法 (1/3の法則)", en: "rule of thirds" },
      { ja: "黄金比", en: "golden ratio" },
      { ja: "日の丸構図 (中央配置)", en: "centered composition" },
      { ja: "シンメトリー (左右対称)", en: "symmetrical composition" },
      { ja: "アシンメトリー (非対称)", en: "asymmetrical composition" },
      { ja: "アイソメトリック (等角投影)", en: "isometric" }
    ],
    "視線誘導・ライン (Leading Lines)": [
      { ja: "リーディングライン (視線誘導)", en: "leading lines" },
      { ja: "対角線構図", en: "diagonal composition" },
      { ja: "三角構図", en: "triangle composition" },
      { ja: "S字構図", en: "s-curve" },
      { ja: "消失点", en: "vanishing point" },
      { ja: "ダイナミックな構図", en: "dynamic composition" }
    ],
    "フレーミング・枠 (Framing)": [
      { ja: "フレーミング (枠取り)", en: "framing" },
      { ja: "隙間から覗く", en: "looking through" },
      { ja: "木々の枠", en: "framed by trees" },
      { ja: "窓枠", en: "framed by window" },
      { ja: "アーチ枠", en: "framed by arch" },
      { ja: "円形枠", en: "circular framing" }
    ],
    "空間・バランス (Space & Balance)": [
      { ja: "ネガティブスペース (余白)", en: "negative space" },
      { ja: "ミニマリスト", en: "minimalist" },
      { ja: "ごちゃごちゃした (Maximalist)", en: "cluttered" },
      { ja: "完璧なバランス", en: "perfectly balanced" },
      { ja: "奥行きのある", en: "depth" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-composition") || container;
      parent.innerHTML = "";
      
      const section = document.createElement("div");
      section.className = "composition-section";
      
      const h = document.createElement("div");
      h.textContent = "📐 構図・設計 (Composition)";
      h.style.fontWeight = "bold";
      h.style.color = "#4682b4"; // スチールブルー（設計図イメージ）
      h.style.marginBottom = "8px";
      section.appendChild(h);

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.open = false; 
        details.style.marginBottom = "8px";
        
        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.cursor = "pointer";
        summary.style.fontSize = "0.9em";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.display = "flex";
        content.style.flexWrap = "wrap";
        content.style.gap = "6px";
        content.style.padding = "5px 0 0 5px";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.fontSize = "0.85em";
          label.style.display = "flex";
          label.style.alignItems = "center";
          label.style.backgroundColor = "#f0f8ff"; // 淡い青背景
          label.style.padding = "2px 6px";
          label.style.borderRadius = "4px";
          label.style.border = "1px solid #d0e0f0";
          
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

      parent.appendChild(section);

      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(i => dict[i.en] = i.ja);
        window.__outputTranslation.register(dict);
      }
    },
    getTags() {
      const tags = [];
      document.querySelectorAll(".composition-section input:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();

// --- builder_ui.section.composition.v2.js ---
// v2: 構図・カメラ司令室再編。Compositionを画面内配置・奥行き・視線誘導へ専念させる。
(function(){
  "use strict";

  const VERSION = 2;
  const KEY = "composition";
  let internalLinking = false;

  const GROUPS = [
    {
      title: "🧭 基本構成・幾何学",
      items: [
        { id:"cmp_centered", ja:"中央配置・日の丸構図", en:"centered composition" },
        { id:"cmp_thirds", ja:"三分割法", en:"rule of thirds" },
        { id:"cmp_golden", ja:"黄金比", en:"golden ratio" },
        { id:"cmp_symmetry", ja:"左右対称", en:"symmetrical composition" },
        { id:"cmp_asymmetry", ja:"非対称バランス", en:"asymmetrical composition" },
        { id:"cmp_triangle", ja:"三角構図", en:"triangle composition" },
        { id:"cmp_diagonal", ja:"対角線構図", en:"diagonal composition" },
        { id:"cmp_scurve", ja:"S字構図", en:"s-curve" },
        { id:"cmp_radial", ja:"放射構図", en:"radial composition" },
        { id:"cmp_spiral", ja:"螺旋構図", en:"spiral composition" },
        { id:"cmp_vertical", ja:"縦方向の安定構図", en:"strong vertical composition" },
        { id:"cmp_horizontal", ja:"横方向の安定構図", en:"stable horizontal composition" },
        { id:"cmp_isometric", ja:"アイソメトリック", en:"isometric" }
      ]
    },
    {
      title: "🎯 主役配置・トリミング",
      items: [
        { id:"cmp_clear_focal", ja:"主役を明確にする", en:"clear focal point" },
        { id:"cmp_visual_hierarchy", ja:"視覚的優先順位", en:"clear visual hierarchy" },
        { id:"cmp_eye_thirds", ja:"目線を上三分割線へ", en:"eyes placed on the upper third line" },
        { id:"cmp_balanced_headroom", ja:"頭上余白を整える", en:"balanced headroom" },
        { id:"cmp_gaze_space", ja:"視線方向に余白", en:"gaze direction space" },
        { id:"cmp_motion_space", ja:"進行方向に余白", en:"motion direction space" },
        { id:"cmp_offcenter", ja:"意図的なオフセンター", en:"intentional off-center subject placement" },
        { id:"cmp_full_silhouette", ja:"全身シルエットを明瞭に", en:"clear full-body silhouette" },
        { id:"cmp_no_crop", ja:"頭・手足を切らない", en:"complete figure kept inside the frame" },
        { id:"cmp_even_margin", ja:"均等な外周余白", en:"even margins around the subject" },
        { id:"cmp_edge_tension", ja:"画面端の緊張感", en:"intentional edge tension" },
        { id:"cmp_large_subject", ja:"主役を大きく配置", en:"large dominant subject in frame" },
        { id:"cmp_small_subject", ja:"人物を小さく配置", en:"small human figure within a vast scene" }
      ]
    },
    {
      title: "🪟 奥行き・レイヤー",
      items: [
        { id:"cmp_depth", ja:"明確な奥行き", en:"depth" },
        { id:"cmp_fore_mid_back", ja:"前景・中景・背景の三層", en:"clear foreground midground and background layers" },
        { id:"cmp_foreground", ja:"前景要素を置く", en:"foreground elements framing the scene" },
        { id:"cmp_overlap", ja:"重なりで奥行きを出す", en:"overlapping forms creating depth" },
        { id:"cmp_scale_depth", ja:"大小差で遠近を出す", en:"scale contrast creating depth" },
        { id:"cmp_atmo_persp", ja:"空気遠近法", en:"atmospheric perspective" },
        { id:"cmp_vanishing", ja:"消失点を明確に", en:"vanishing point" },
        { id:"cmp_onepoint", ja:"一点透視", en:"one-point perspective composition" },
        { id:"cmp_twopoint", ja:"二点透視", en:"two-point perspective composition" },
        { id:"cmp_tunnel", ja:"トンネル状の奥行き", en:"tunnel-like depth composition" },
        { id:"cmp_framewithin", ja:"フレーム・イン・フレーム", en:"framing" }
      ]
    },
    {
      title: "➡️ 視線誘導・動勢",
      items: [
        { id:"cmp_leading", ja:"リーディングライン", en:"leading lines" },
        { id:"cmp_converging", ja:"収束線", en:"converging lines" },
        { id:"cmp_flow", ja:"自然な視線の流れ", en:"clear visual flow" },
        { id:"cmp_dynamic", ja:"ダイナミック構図", en:"dynamic composition" },
        { id:"cmp_tilted_flow", ja:"斜め方向の流れ", en:"strong diagonal visual flow" },
        { id:"cmp_counterflow", ja:"逆方向の力をぶつける", en:"opposing directional forces" },
        { id:"cmp_circular_flow", ja:"円環状の視線誘導", en:"circular visual flow" },
        { id:"cmp_action_entry", ja:"画面外から飛び込む動勢", en:"action entering the frame" },
        { id:"cmp_action_exit", ja:"画面外へ抜ける動勢", en:"action exiting the frame" },
        { id:"cmp_frozen_peak", ja:"動作の頂点を捉える", en:"peak action moment composition" },
        { id:"cmp_controlled_chaos", ja:"制御された混沌", en:"controlled chaotic composition" }
      ]
    },
    {
      title: "🤝 二人・複数人物",
      items: [
        { id:"cmp_two_balance", ja:"二人を均衡配置", en:"balanced two-subject composition" },
        { id:"cmp_two_separate", ja:"二人の輪郭を分離", en:"clear separation between two figures" },
        { id:"cmp_shared_focus", ja:"共通の注視点", en:"shared focal point between characters" },
        { id:"cmp_face_readable", ja:"両者の顔を読みやすく", en:"both faces clearly readable" },
        { id:"cmp_pair_triangle", ja:"二人と小物の三角構図", en:"triangular pair composition" },
        { id:"cmp_mirrored_pair", ja:"鏡像的な二人構図", en:"mirrored pair composition" },
        { id:"cmp_contrast_pair", ja:"対照的な二人配置", en:"contrasting pair placement" },
        { id:"cmp_distance_relation", ja:"距離で関係性を示す", en:"relationship shown through spatial distance" },
        { id:"cmp_group_layers", ja:"複数人物を前後に配置", en:"layered group composition" },
        { id:"cmp_group_no_merge", ja:"複数人物の重なりを整理", en:"clean non-overlapping group silhouettes" }
      ]
    },
    {
      title: "🌍 環境・物語構図",
      items: [
        { id:"cmp_env_dominant", ja:"背景を主役級に見せる", en:"environment-dominant composition" },
        { id:"cmp_subject_context", ja:"人物と環境の関係を明確に", en:"clear relationship between subject and environment" },
        { id:"cmp_establishing", ja:"状況説明のある導入構図", en:"establishing composition" },
        { id:"cmp_story_clue", ja:"前景に物語の手掛かり", en:"storytelling clue in the foreground" },
        { id:"cmp_scale_grandeur", ja:"巨大建造物とのスケール差", en:"dramatic scale contrast with architecture" },
        { id:"cmp_path_subject", ja:"道が主役へ導く", en:"path leading toward the subject" },
        { id:"cmp_horizon_low", ja:"低い地平線・空を広く", en:"low horizon with expansive sky" },
        { id:"cmp_horizon_high", ja:"高い地平線・地面を広く", en:"high horizon with expansive ground" },
        { id:"cmp_quiet_scene", ja:"静かな余韻の構図", en:"quiet contemplative composition" },
        { id:"cmp_epic_scale", ja:"叙事詩的な広がり", en:"epic large-scale composition" }
      ]
    },
    {
      title: "⬜ 余白・フレーミング・安定化",
      items: [
        { id:"cmp_negative", ja:"ネガティブスペース", en:"negative space" },
        { id:"cmp_minimal", ja:"ミニマル構図", en:"minimalist" },
        { id:"cmp_maximal", ja:"情報密度の高い構図", en:"cluttered" },
        { id:"cmp_natural_frame", ja:"木々で囲う", en:"framed by trees" },
        { id:"cmp_window_frame", ja:"窓枠で囲う", en:"framed by window" },
        { id:"cmp_arch_frame", ja:"アーチで囲う", en:"framed by arch" },
        { id:"cmp_circular_frame", ja:"円形枠で囲う", en:"circular framing" },
        { id:"cmp_looking_through", ja:"隙間から覗く", en:"looking through" },
        { id:"cmp_clear_balance", ja:"画面重量を整える", en:"perfectly balanced" },
        { id:"cmp_uncluttered", ja:"主役周辺を整理", en:"uncluttered space around the subject" },
        { id:"cmp_clean_edges", ja:"画面端の干渉を減らす", en:"clean frame edges" },
        { id:"cmp_readable", ja:"一目で読める構図", en:"immediately readable composition" }
      ]
    }
  ];

  const SETS = [
    { theme:"王道ポートレート", items:[
      { id:"set_portrait_core", ja:"Core Set", links:["cmp_thirds","cmp_eye_thirds","cmp_balanced_headroom","cmp_clear_focal"] },
      { id:"set_portrait_safe", ja:"Safe Quality Set", links:["cmp_thirds","cmp_eye_thirds","cmp_balanced_headroom","cmp_clear_focal","cmp_visual_hierarchy","cmp_uncluttered","cmp_readable"] },
      { id:"set_portrait_2000", ja:"2000 Limit Compatible Set", links:["cmp_eye_thirds","cmp_clear_focal","cmp_balanced_headroom"] },
      { id:"set_portrait_full", ja:"Full Set", links:["cmp_thirds","cmp_eye_thirds","cmp_balanced_headroom","cmp_clear_focal","cmp_visual_hierarchy","cmp_gaze_space","cmp_foreground","cmp_depth","cmp_uncluttered","cmp_readable"] }
    ]},
    { theme:"全身キャラクター紹介", items:[
      { id:"set_fullbody_core", ja:"Core Set", links:["cmp_centered","cmp_full_silhouette","cmp_no_crop","cmp_clear_focal"] },
      { id:"set_fullbody_safe", ja:"Safe Quality Set", links:["cmp_centered","cmp_full_silhouette","cmp_no_crop","cmp_even_margin","cmp_clear_focal","cmp_readable"] },
      { id:"set_fullbody_2000", ja:"2000 Limit Compatible Set", links:["cmp_full_silhouette","cmp_no_crop","cmp_clear_focal"] },
      { id:"set_fullbody_full", ja:"Full Set", links:["cmp_centered","cmp_vertical","cmp_full_silhouette","cmp_no_crop","cmp_even_margin","cmp_clear_focal","cmp_visual_hierarchy","cmp_depth","cmp_clean_edges","cmp_readable"] }
    ]},
    { theme:"映画的アクション", items:[
      { id:"set_action_core", ja:"Core Set", links:["cmp_diagonal","cmp_dynamic","cmp_motion_space","cmp_frozen_peak"] },
      { id:"set_action_safe", ja:"Safe Quality Set", links:["cmp_diagonal","cmp_dynamic","cmp_motion_space","cmp_frozen_peak","cmp_clear_focal","cmp_leading","cmp_readable"] },
      { id:"set_action_2000", ja:"2000 Limit Compatible Set", links:["cmp_dynamic","cmp_motion_space","cmp_frozen_peak"] },
      { id:"set_action_full", ja:"Full Set", links:["cmp_diagonal","cmp_dynamic","cmp_motion_space","cmp_frozen_peak","cmp_leading","cmp_tilted_flow","cmp_foreground","cmp_scale_depth","cmp_controlled_chaos","cmp_clear_focal"] }
    ]},
    { theme:"背景主役・環境", items:[
      { id:"set_env_core", ja:"Core Set", links:["cmp_env_dominant","cmp_small_subject","cmp_fore_mid_back","cmp_subject_context"] },
      { id:"set_env_safe", ja:"Safe Quality Set", links:["cmp_env_dominant","cmp_small_subject","cmp_fore_mid_back","cmp_subject_context","cmp_clear_focal","cmp_atmo_persp","cmp_readable"] },
      { id:"set_env_2000", ja:"2000 Limit Compatible Set", links:["cmp_env_dominant","cmp_small_subject","cmp_subject_context"] },
      { id:"set_env_full", ja:"Full Set", links:["cmp_env_dominant","cmp_small_subject","cmp_fore_mid_back","cmp_subject_context","cmp_atmo_persp","cmp_leading","cmp_path_subject","cmp_scale_grandeur","cmp_epic_scale","cmp_story_clue"] }
    ]},
    { theme:"二人構図", items:[
      { id:"set_pair_core", ja:"Core Set", links:["cmp_two_balance","cmp_two_separate","cmp_face_readable","cmp_shared_focus"] },
      { id:"set_pair_safe", ja:"Safe Quality Set", links:["cmp_two_balance","cmp_two_separate","cmp_face_readable","cmp_shared_focus","cmp_clear_focal","cmp_readable"] },
      { id:"set_pair_2000", ja:"2000 Limit Compatible Set", links:["cmp_two_separate","cmp_face_readable","cmp_shared_focus"] },
      { id:"set_pair_full", ja:"Full Set", links:["cmp_two_balance","cmp_two_separate","cmp_face_readable","cmp_shared_focus","cmp_pair_triangle","cmp_distance_relation","cmp_depth","cmp_foreground","cmp_visual_hierarchy"] }
    ]}
  ];

  function makeDetails(title, className){
    const d = document.createElement("details");
    d.className = className || "cmp-v2-shelf";
    d.open = false;
    const s = document.createElement("summary");
    s.textContent = title;
    d.appendChild(s);
    const box = document.createElement("div");
    box.className = "cmp-v2-grid";
    d.appendChild(box);
    return d;
  }

  function makeRow(item, complete){
    const label = document.createElement("label");
    label.className = complete ? "cmp-v2-row cmp-v2-complete-row" : "cmp-v2-row";
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.id = "cmp_v2_" + item.id;
    cb.dataset.en = complete ? "" : item.en;
    cb.dataset.cmpId = item.id;
    if(complete){
      cb.dataset.cmpComplete = "1";
      cb.dataset.cmpLinks = item.links.join("||");
    }
    const text = document.createElement("span");
    text.textContent = item.ja;
    label.appendChild(cb);
    label.appendChild(text);
    return label;
  }

  function allBoxes(root, selector){ return Array.from(root.querySelectorAll(selector)); }

  function clearCompleteState(root, except){
    allBoxes(root, 'input[data-cmp-complete="1"]').forEach(function(cb){
      if(cb !== except) cb.checked = false;
    });
    // 完成セットは追加チェックではなく、下位構図を完成セット基準で再構築する起点。
    allBoxes(root, 'input[data-cmp-id]:not([data-cmp-complete])').forEach(function(cb){
      cb.checked = false;
      delete cb.dataset.cmpLinkedBy;
    });
  }

  function applyComplete(root, cb){
    internalLinking = true;
    try{
      clearCompleteState(root, cb);
      allBoxes(root, 'input[data-cmp-complete="1"]').forEach(function(other){ if(other !== cb) other.checked = false; });
      const links = (cb.dataset.cmpLinks || "").split("||").filter(Boolean);
      links.forEach(function(id){
        const child = root.querySelector('input[data-cmp-id="' + id + '"]:not([data-cmp-complete])');
        if(!child) return;
        child.checked = true;
        child.dataset.cmpLinkedBy = cb.dataset.cmpId;
        let node = child.parentElement;
        while(node && node !== root){ if(node.tagName === "DETAILS") node.open = true; node = node.parentElement; }
        const row = child.closest("label");
        if(row){
          row.classList.add("cmp-v2-linked");
          setTimeout(function(){ row.classList.remove("cmp-v2-linked"); }, 1800);
        }
      });
    } finally { internalLinking = false; }
  }

  function bind(root){
    root.addEventListener("change", function(ev){
      const cb = ev.target;
      if(!cb || cb.type !== "checkbox" || internalLinking || window.__historyRestoring) return;
      if(cb.dataset.cmpComplete === "1"){
        if(cb.checked) applyComplete(root, cb);
        else {
          internalLinking = true;
          try{
            allBoxes(root, 'input[data-cmp-linked-by="' + cb.dataset.cmpId + '"]').forEach(function(child){
              child.checked = false;
              delete child.dataset.cmpLinkedBy;
            });
          } finally { internalLinking = false; }
        }
        return;
      }
      // 下位項目を手動変更したら、完成セット表示だけ解除し、現在の手動状態は残す。
      allBoxes(root, 'input[data-cmp-complete="1"]:checked').forEach(function(parent){ parent.checked = false; });
      delete cb.dataset.cmpLinkedBy;
    });

    window.addEventListener("builderHistoryRestored", function(){
      allBoxes(root, 'input[data-cmp-complete="1"]:checked').forEach(function(parent){
        const links = (parent.dataset.cmpLinks || "").split("||").filter(Boolean);
        links.forEach(function(id){
          const child = root.querySelector('input[data-cmp-id="' + id + '"]:not([data-cmp-complete])');
          if(child && child.checked) child.dataset.cmpLinkedBy = parent.dataset.cmpId;
        });
      });
    });
  }

  function ensureStyle(){
    if(document.getElementById("cmp-v2-style")) return;
    const st = document.createElement("style");
    st.id = "cmp-v2-style";
    st.textContent = `
      .composition-section.cmp-v2-root{display:block;width:100%;box-sizing:border-box}
      .cmp-v2-head{font-weight:900;color:#315f8a;margin:0 0 6px}
      .cmp-v2-guide{font-size:12px;line-height:1.55;color:#526274;background:#f4f9ff;border:1px solid #d8e8f7;border-radius:8px;padding:8px 10px;margin-bottom:8px}
      .cmp-v2-shelf,.cmp-v2-set-theme{margin:0 0 7px;border:1px solid #d6e2ee;border-radius:7px;background:#fff;overflow:hidden}
      .cmp-v2-shelf>summary,.cmp-v2-set-theme>summary{font-size:13px;font-weight:800;padding:8px 10px;cursor:pointer;background:#f7fbff}
      .cmp-v2-complete{border-color:#a8cbed;background:#fafdff}
      .cmp-v2-grid{display:flex!important;flex-wrap:wrap!important;gap:6px!important;padding:8px!important;width:100%;box-sizing:border-box;grid-template-columns:none!important}
      .cmp-v2-theme-box{display:block!important;padding:6px!important;grid-template-columns:none!important}
      .cmp-v2-row{display:flex;align-items:flex-start;gap:6px;flex:1 1 220px;min-width:0;background:#fff;border:1px solid #e3ebf3;border-radius:6px;padding:6px 8px;font-size:12px;line-height:1.35;box-sizing:border-box}
      .cmp-v2-row input{margin-top:2px;flex:0 0 auto}.cmp-v2-row span{overflow-wrap:anywhere}
      .cmp-v2-complete-row{background:#eef7ff;border-color:#bad8f2;font-weight:750}
      .cmp-v2-linked{background:#dcfce7!important;border-color:#62c889!important;transition:.2s}
      @media(max-width:640px){.cmp-v2-row{flex:1 1 100%;width:100%}.cmp-v2-grid{display:flex!important;flex-direction:column!important}.cmp-v2-theme-box{padding:5px!important}}
    `;
    document.head.appendChild(st);
  }

  const API = {
    initUI(container){
      const parent = document.querySelector("#list-composition") || container;
      if(!parent) return;
      ensureStyle();
      parent.innerHTML = "";

      const root = document.createElement("div");
      root.className = "composition-section cmp-v2-root";
      const head = document.createElement("div");
      head.className = "cmp-v2-head";
      head.textContent = "📐 構図司令室 (Composition Control)";
      const guide = document.createElement("div");
      guide.className = "cmp-v2-guide";
      guide.textContent = "構図は画面内の配置・奥行き・視線誘導を担当します。撮影距離、レンズ、カメラ角度は次のCamera欄で追加してください。完成セットは1つだけ選択され、下位構図をリセットして再構築します。";
      root.appendChild(head);
      root.appendChild(guide);

      const complete = makeDetails("🧩 構図完成セット（単一選択・4系統）", "cmp-v2-shelf cmp-v2-complete");
      const completeBox = complete.querySelector(":scope > .cmp-v2-grid");
      completeBox.className = "cmp-v2-theme-box";
      SETS.forEach(function(theme){
        const d = makeDetails("🎬 " + theme.theme, "cmp-v2-set-theme");
        const box = d.querySelector(":scope > .cmp-v2-grid");
        theme.items.forEach(function(item){ box.appendChild(makeRow(item, true)); });
        completeBox.appendChild(d);
      });
      root.appendChild(complete);

      GROUPS.forEach(function(group){
        const d = makeDetails(group.title, "cmp-v2-shelf");
        const box = d.querySelector(":scope > .cmp-v2-grid");
        group.items.forEach(function(item){ box.appendChild(makeRow(item, false)); });
        root.appendChild(d);
      });

      parent.appendChild(root);
      bind(root);

      if(window.__outputTranslation){
        const dict = {};
        GROUPS.forEach(function(g){ g.items.forEach(function(i){ dict[i.en] = i.ja; }); });
        window.__outputTranslation.register(dict);
      }
    },
    // v1 getTagsが .composition-section 内の現行チェックを取得するため、二重出力を避ける。
    getTags(){ return []; }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
