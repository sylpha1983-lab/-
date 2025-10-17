// builder_ui.adapters.v1.js
(function(root){
  "use strict";

  // === 🧩 UIホスト多重防止（追加）===
  if (root.__UI_ADAPTER_INITED__) {
    console.log("[ui.adapters] skip duplicate init");
    return;
  }
  root.__UI_ADAPTER_INITED__ = true;

  const $  = (s, b=document)=>b.querySelector(s);
  const $$ = (s, b=document)=>Array.from(b.querySelectorAll(s));
  const log = (m)=>{ try{ root.writeLog && root.writeLog("[ui.adapters] "+m);}catch(_){ } };

  function ensureMount(id){ const el=$(id); return el||null; }
  function chipCheckbox(id, text, value){
    const label = document.createElement("label");
    label.className = "chk";
    label.title = text;
    label.innerHTML = `<input type="checkbox" data-id="${value}"/><span>${text}</span>`;
    return label;
  }

  // === faith ===
  function renderFaith(){
    const grid = $("#grid-faith"); if(!grid) return;
    const set = new Set();
    const packs = root.__faith_packs || [];
    packs.forEach(p => (p?.tags||[]).forEach(t => { if(t) set.add(String(t).trim()); }));
    const tags = Array.from(set).filter(Boolean).sort((a,b)=>a.localeCompare(b));

    grid.innerHTML = "";
    const frag = document.createDocumentFragment();
    tags.forEach(tag => frag.appendChild(chipCheckbox(null, tag, tag)));
    grid.appendChild(frag);

    const num = $("#num-expr"); if(num) num.textContent = String(tags.length);
    log("faith tags rendered: "+tags.length);
  }

  // === pose ===
  function renderPose(){
    const grid = $("#grid-pose"); if(!grid) return;
    const rules = root.__pose_rules || []; // 例: {id,label,tags[]}
    grid.innerHTML = "";
    const frag = document.createDocumentFragment();
    rules.forEach(r => {
      const value = (r.tags && r.tags.length) ? r.tags.join(",") : (r.id || "");
      frag.appendChild(chipCheckbox(null, r.label || r.id || "pose", value));
    });
    grid.appendChild(frag);

    const num = $("#num-pose"); if(num) num.textContent = String(rules.length);
    log("pose rules rendered: "+rules.length);
  }

  // 将来: 他カテゴリ（presets/effect/background/hair）も同パターンで追記可能
  function bindGenerateCopyReset(){
    const out = $("#out");
    const btnGen = $("#btn-gen");
    if(btnGen){
      // 既存のハンドラがあっても、最終的に #out を上書きする
      btnGen.addEventListener("click", ()=>{
        if(!out) return;
        const picked = $$('input[type="checkbox"]:checked')
          .map(el => el.getAttribute("data-id") || "")
          .flatMap(v => String(v).split(","))
          .map(s => s.trim())
          .filter(Boolean);
        // 重複除去 & 出力
        out.value = Array.from(new Set(picked)).join(", ");
        try{ root.writeLog && root.writeLog(`[ui.adapters] generated ${picked.length}`);}catch(_){}
      });
    }
  }

  function init(){
    // UI が描画された後に実行
    if(!ensureMount("#grid-faith") || !ensureMount("#grid-pose")){
      // builder_ui.v1.js の描画を待つ
      let tries = 0;
      const t = setInterval(()=>{
        tries++;
        if(ensureMount("#grid-faith") && ensureMount("#grid-pose")){
          clearInterval(t);
          renderFaith(); renderPose(); bindGenerateCopyReset();
        }else if(tries>30){ clearInterval(t); log("timeout waiting UI host"); }
      }, 100);
      return;
    }
    renderFaith(); renderPose(); bindGenerateCopyReset();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, {once:true});
  } else {
    init();
  }

})(window);