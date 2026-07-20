(function(){
  "use strict";

  const STYLE_ID = "shima-attire-workshop-merge-v1-style";
  const SHELF_SELECTOR = ".attire-v39-remix-lab";
  const ADJUST_GROUP_SELECTOR = ".attire-catalog-group[data-attire-catalog-group-key='adjust']";
  const VAULT_CLASS = "attire-v40-detail-vault";

  function contentRoot(){
    const host = document.getElementById("list-attire");
    return host && (host.querySelector(".section-content") || host);
  }

  function injectStyle(){
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
.attire-v40-detail-vault { display:block; width:100%; max-width:100%; min-width:0; margin:10px 0 0; border:1px solid rgba(87,143,155,.34); border-radius:13px; overflow:hidden; background:rgba(255,255,255,.94); box-sizing:border-box; }
.attire-v40-detail-vault-summary { display:flex !important; align-items:center; gap:8px; width:100%; min-width:0; padding:11px !important; list-style:none; cursor:pointer; color:#214c55 !important; background:linear-gradient(135deg,rgba(248,253,255,.99),rgba(220,244,240,.95)) !important; box-sizing:border-box; }
.attire-v40-detail-vault-summary::-webkit-details-marker { display:none; }
.attire-v40-detail-vault-summary::before { content:"▶"; flex:0 0 auto; color:#4f9299; }
.attire-v40-detail-vault[open] > .attire-v40-detail-vault-summary::before { transform:rotate(90deg); }
.attire-v40-detail-vault-heading { flex:1 1 auto; min-width:0; }
.attire-v40-detail-vault-title { display:block; color:#214b54; font-size:14px; line-height:1.35; font-weight:900; overflow-wrap:anywhere; }
.attire-v40-detail-vault-note { display:block; margin-top:2px; color:#70868c; font-size:10px; line-height:1.45; font-weight:650; overflow-wrap:anywhere; }
.attire-v40-detail-vault-meta { flex:0 0 auto; display:flex; flex-direction:column; align-items:flex-end; gap:3px; }
.attire-v40-detail-vault-count,.attire-v40-detail-vault-mode { padding:3px 7px; border-radius:999px; text-align:center; font-size:9px; line-height:1.2; font-weight:900; white-space:nowrap; }
.attire-v40-detail-vault-count { color:#336b72; background:rgba(201,239,233,.82); }
.attire-v40-detail-vault-mode { color:#657078; background:#f1f5f6; }
.attire-v40-detail-vault-body { display:grid !important; grid-template-columns:minmax(0,1fr) !important; gap:7px; width:100%; min-width:0; padding:7px; box-sizing:border-box; }
.attire-v40-detail-vault-body > details { display:block; width:100% !important; max-width:100% !important; min-width:0 !important; margin:0 !important; box-sizing:border-box; }
@media (max-width:760px) {
  .attire-v40-detail-vault-body,.attire-v40-detail-vault-body details[open] > div,
  .attire-v40-detail-vault-body [style*='grid-template-columns'] { grid-template-columns:minmax(0,1fr) !important; grid-auto-flow:row !important; }
  .attire-v40-detail-vault-body label { width:100% !important; max-width:100% !important; min-width:0 !important; writing-mode:horizontal-tb !important; text-orientation:mixed !important; word-break:normal !important; overflow-wrap:anywhere; }
  .attire-v40-detail-vault-title,.attire-v40-detail-vault-note { writing-mode:horizontal-tb !important; text-orientation:mixed !important; word-break:normal !important; }
}
`;
    document.head.appendChild(style);
  }

  function makeVault(shelf){
    let vault = shelf.querySelector("." + VAULT_CLASS);
    if (vault) return vault;
    vault = document.createElement("details");
    vault.className = VAULT_CLASS;
    vault.dataset.attireWorkshopDetailVault = "v1";
    vault.open = false;

    const summary = document.createElement("summary");
    summary.className = "attire-v40-detail-vault-summary";
    const heading = document.createElement("span");
    heading.className = "attire-v40-detail-vault-heading";
    const title = document.createElement("span");
    title.className = "attire-v40-detail-vault-title";
    title.textContent = "🗄 詳細加工庫 ― 形・柄・色・着こなし";
    const note = document.createElement("span");
    note.className = "attire-v40-detail-vault-note";
    note.textContent = "袖、襟、形、柄、配色、靴、レッグウェア、手袋、状態を自由に組み合わせる既存部品。";
    heading.appendChild(title);
    heading.appendChild(note);
    const meta = document.createElement("span");
    meta.className = "attire-v40-detail-vault-meta";
    const count = document.createElement("span");
    count.className = "attire-v40-detail-vault-count";
    count.dataset.detailVaultCount = "1";
    const mode = document.createElement("span");
    mode.className = "attire-v40-detail-vault-mode";
    mode.textContent = "自由選択";
    meta.appendChild(count);
    meta.appendChild(mode);
    summary.appendChild(heading);
    summary.appendChild(meta);
    const body = document.createElement("div");
    body.className = "attire-v40-detail-vault-body";
    vault.appendChild(summary);
    vault.appendChild(body);

    const labBody = shelf.querySelector(".attire-v39-body") || shelf;
    labBody.appendChild(vault);
    return vault;
  }

  function updateWorkshopCopy(shelf,detailCount){
    const total = shelf.querySelectorAll("input[type='checkbox']").length;
    const mainCount = shelf.querySelector(".attire-v39-main-count");
    const mainNote = shelf.querySelector(".attire-v39-main-note");
    const guide = shelf.querySelector(".attire-v39-guide");
    const vaultCount = shelf.querySelector("[data-detail-vault-count]");
    if (mainCount) mainCount.textContent = String(total);
    if (mainNote) mainNote.textContent = "5軸100部品で素早く改造し、詳細加工庫380部品で形・柄・色・着こなしまで深掘りする。";
    if (guide) guide.textContent = "サクッと決める時は上の5軸100部品、細かく作る時は下の詳細加工庫380部品を使います。既存入力は移動だけ行い、ID・出力・履歴・お気に入り・マイプリセットを維持します。軸重複は自動解除せず警告だけ表示します。";
    if (vaultCount) vaultCount.textContent = String(detailCount);
    shelf.dataset.remixTotalParts = String(total);
    shelf.dataset.remixDetailedParts = String(detailCount);

    const status = shelf.querySelector(".attire-v39-status");
    if (status && !status.querySelector("[data-remix-status='detailed']")) {
      const chip = document.createElement("span");
      chip.className = "attire-v39-status-chip";
      chip.dataset.remixStatus = "detailed";
      const conflict = status.querySelector("[data-remix-status='conflict']");
      status.insertBefore(chip,conflict || null);
    }
    try{ if (window.__SHIMA_ATTIRE_REMIX_LAB_V1__) window.__SHIMA_ATTIRE_REMIX_LAB_V1__.updateStatus(); }catch(_){ }
  }

  function merge(){
    const root = contentRoot();
    const shelf = root && root.querySelector(SHELF_SELECTOR);
    if (!root || !shelf) return null;
    const firstMerge = shelf.dataset.attireWorkshopMerged !== "1";
    injectStyle();
    const vault = makeVault(shelf);
    const vaultBody = vault.querySelector(".attire-v40-detail-vault-body");
    const topAdjustGroup = Array.from(root.children || []).find(function(node){
      return node && node.matches && node.matches(ADJUST_GROUP_SELECTOR);
    });

    if (topAdjustGroup) {
      const groupBody = topAdjustGroup.querySelector(":scope > .attire-catalog-body");
      if (groupBody) Array.from(groupBody.children || []).forEach(function(category){
        if (category && category.tagName === "DETAILS") category.open = false;
        vaultBody.appendChild(category);
      });
      topAdjustGroup.remove();
    }

    const detailedInputs = vaultBody.querySelectorAll("input[type='checkbox']").length;
    if (!detailedInputs) return null;
    if (firstMerge) {
      vault.open = false;
      shelf.open = false;
    }
    shelf.dataset.attireWorkshopMerged = "1";
    updateWorkshopCopy(shelf,detailedInputs);
    if (!shelf.__attireWorkshopChangeBound) {
      shelf.__attireWorkshopChangeBound = true;
      shelf.addEventListener("change",function(){
        try{ window.__SHIMA_ATTIRE_REMIX_LAB_V1__.updateStatus(); }catch(_){ }
      });
    }

    const report = {
      version:"1.0.0",
      curatedParts:shelf.querySelectorAll("input.attire-v39-remix-checkbox").length,
      detailedParts:detailedInputs,
      totalParts:shelf.querySelectorAll("input[type='checkbox']").length,
      topLevelAdjustRemoved:!Array.from(root.children || []).some(function(node){ return node && node.matches && node.matches(ADJUST_GROUP_SELECTOR); }),
      initialOpen:shelf.open,
      detailVaultOpen:vault.open
    };
    window.__SHIMA_ATTIRE_WORKSHOP_MERGE_V1__.lastReport = report;
    try{ document.dispatchEvent(new CustomEvent("attireWorkshopMerged",{ detail:report })); }catch(_){ }
    return report;
  }

  function scheduleMerge(){
    let tries = 0;
    (function run(){
      const report = merge();
      if (report) installObserver();
      else if (tries++ < 90) setTimeout(run,60);
    })();
  }

  let observer = null;
  function installObserver(){
    if (observer || typeof MutationObserver !== "function") return;
    const root = contentRoot();
    if (!root) return;
    observer = new MutationObserver(function(records){
      const needsMerge = records.some(function(record){
        return Array.from(record.addedNodes || []).some(function(node){
          return node && node.matches && node.matches(ADJUST_GROUP_SELECTOR);
        });
      });
      if (needsMerge) setTimeout(merge,0);
    });
    observer.observe(root,{ childList:true });
  }

  window.__SHIMA_ATTIRE_WORKSHOP_MERGE_V1__ = {
    version:"1.0.0",
    merge:merge,
    lastReport:null
  };

  document.addEventListener("attireCatalogOrganized",function(){ setTimeout(merge,0); });
  document.addEventListener("promptPartMounted",function(){
    setTimeout(merge,60);
    setTimeout(merge,260);
  });
  window.addEventListener("builderHistoryRestored",function(){ setTimeout(merge,30); });
  document.addEventListener("builderResetAll",function(){ setTimeout(merge,30); },true);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded",scheduleMerge,{ once:true });
  else scheduleMerge();
  console.log("🗄 Loaded: ./ext_attire_workshop_merge.v1.js v1.0.0");
})();
