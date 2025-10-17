// ui_actions_generate.v1.js
(function () {
  "use strict";

  const $  = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
  const log = (m)=>{ try{ (window.writeLog||console.log)("[ui]", m); }catch(_){} };

  // 出力先を確保（なければ作る）
  function ensureOutBox() {
    let out = $("#out");
    if (!out) {
      out = document.createElement("textarea");
      out.id = "out";
      out.placeholder = "generated tags will appear here...";
      out.style.cssText = "width:100%;min-height:80px;border-radius:8px;padding:8px;border:1px solid #ddd;margin:8px 0;";
      // 既存UIの「プリセット／表情」ブロックの直前 or ログの下に挿入
      const anchor = $("#mini-ui") || $("#badges") || $("#log");
      (anchor?.parentNode || document.body).insertBefore(out, anchor?.nextSibling || null);
    }
    return out;
  }

  // 選択済みタグの収集（data-tag / value / ラベル文字の順でフォールバック）
  function collectCheckedTags() {
    // faith セクション優先、なければ全チェックボックスから
    const roots = [
      $("#list-faith"),
      document
    ].filter(Boolean);

    const tags = new Set();
    roots.forEach(root=>{
      $$("#input[type=checkbox]:checked, input[type='checkbox']:checked", root)
      .concat($$("#label input[type='checkbox']:checked", root))
      .forEach(cb=>{
        const labelText = cb.closest("label")?.textContent?.trim() || "";
        const t =
          cb.dataset.tag?.trim() ||
          (cb.value ? String(cb.value).trim() : "") ||
          labelText;
        if (t) tags.add(t);
      });
    });

    // さらに grid/chip 形式の要素にも対応
    $$("#.chip input[type=checkbox]:checked").forEach(cb=>{
      const t = cb.dataset.tag || cb.value || cb.nextElementSibling?.textContent || "";
      if (t) tags.add(String(t).trim());
    });

    return Array.from(tags).filter(Boolean);
  }

  async function doCopy(text) {
    try {
      if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(text);
      else { const ta=document.createElement("textarea"); ta.value=text; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); document.body.removeChild(ta); }
      log("コピーしました");
    } catch(e){ log("copy failed: " + (e && e.message)); }
  }

  function generate() {
    const tags = collectCheckedTags();
    const out = ensureOutBox();
    out.value = tags.join(", ");
    log(`generated (${tags.length})`);
  }

  function resetAll() {
    $$("input[type=checkbox]:checked").forEach(cb=> cb.checked=false);
    const out = $("#out"); if (out) out.value = "";
    log("リセット");
  }

  function wireButtons() {
    // 既知のID
    $("#genBtn")   ?.addEventListener("click", generate);
    $("#copyBtn")  ?.addEventListener("click", ()=>doCopy($("#out")?.value || ""));
    $("#resetBtn") ?.addEventListener("click", resetAll);

    // 予備（ラベルで拾う）— 既存IDが無いテーマでも動作
    $$("button").forEach(b=>{
      const t = b.textContent?.trim();
      if (!b._wired && /生成/.test(t))  { b.addEventListener("click", generate);  b._wired=true; }
      if (!b._wired && /コピー/.test(t)) { b.addEventListener("click", ()=>doCopy($("#out")?.value || "")); b._wired=true; }
      if (!b._wired && /リセット/.test(t)){ b.addEventListener("click", resetAll); b._wired=true; }
    });
  }

  function init(){
    ensureOutBox();
    wireButtons();
    log("ui_actions_generate wired");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once:true });
  } else {
    init();
  }
})();