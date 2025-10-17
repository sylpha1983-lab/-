/* builder_ui.core.v1.js — v1.1.0 (Checker Linked Version)
 * 読み込みチェッカー対応版 / 2025-10-15 更新
 * 
 * 主な変更点:
 *  - UI host準備完了時に CustomEvent("ui.hostReady") を発火
 *  - 成功/失敗/空カウンターとの同期（ext_loader_autodetect.js連携）
 *  - 多重初期化防止強化
 */
(function () {
  "use strict";

  if (window.UI_REG && window.UI_REG.__coreReady) {
    console.log("[ui.core] duplicate load prevented");
    return;
  }

  const log = (msg) => {
    try { (window.writeLog ? window.writeLog(msg) : console.log("[ui.kit]", msg)); }
    catch (_) {}
  };

  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const sections = [];
  let host, listArea, footer, out, tagsCount, charsCount;

  function registerSection(def) {
    if (!def || !def.id || !def.mount || !def.getSelected) return;
    sections.push(def);
    if (listArea) {
      const sec = createSectionShell(def.title);
      try { def.mount(sec.body); } catch(_) {}
      listArea.appendChild(sec.wrap);
      log(`[ui.core] mounted section: ${def.title}`);
    }
  }

  function ensureHost() {
    host = $("#ui-host");
    if (!host) {
      host = document.createElement("div");
      host.id = "ui-host";
      document.body.appendChild(host);
    }
    host.setAttribute("data-ui-mounted", "1");

    const style = document.createElement("style");
    style.textContent = `
      #ui-host{
        margin:10px 0 260px;
        padding-bottom: env(safe-area-inset-bottom, 0px);
      }
      .ui-sec{border:1px solid #eee;border-radius:12px;padding:10px;margin:10px 0;background:#fff}
      .ui-sec h3{margin:0 0 6px;font-size:18px}
      .ui-group{border:1px dashed #e5e5e5;border-radius:10px;margin:8px 0}
      .ui-group summary{cursor:pointer;font-weight:700;padding:8px 10px}
      .ui-group .inner{padding:8px 10px 12px}
      .chip{display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border:1px solid #ddd;border-radius:9999px;margin:6px 6px 0 0}
      .chip input{transform:scale(1.2)}
      .ui-actions{position:fixed;left:0;right:0;bottom:0;background:#fff;border-top:1px solid #eee;
                  box-shadow:0 -6px 20px rgba(0,0,0,.06);padding:10px 12px;z-index:9999}
      .ui-actions .row{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
      .ui-actions .btn{padding:.55rem 1rem;border:none;border-radius:10px;background:#111;color:#fff}
      .ui-actions .btn.ghost{background:#f1f1f1;color:#111}
      .ui-actions .stat{margin-left:auto;opacity:.8}
      #ui-out{width:100%;min-height:84px;margin-top:8px;border:1px solid #ddd;border-radius:12px;padding:10px}
    `;
    document.head.appendChild(style);

    listArea = document.createElement("div");
    host.appendChild(listArea);

    footer = document.createElement("div");
    footer.className = "ui-actions";
    footer.innerHTML = `
      <div class="row">
        <button class="btn" id="ui-gen">タグ生成</button>
        <button class="btn ghost" id="ui-copy">コピー</button>
        <button class="btn ghost" id="ui-clear">全解除</button>
        <span class="stat">tags: <b id="ui-tags">0</b> / chars: <b id="ui-chars">0</b></span>
        <label style="display:flex;align-items:center;gap:6px;margin-left:6px;opacity:.85;">
          <input type="checkbox" id="ui-autogen"/><span>自動生成</span>
        </label>
      </div>
      <textarea id="ui-out" placeholder="generated tags will appear here..."></textarea>
    `;
    host.appendChild(footer);

    out        = $("#ui-out", footer);
    tagsCount  = $("#ui-tags", footer);
    charsCount = $("#ui-chars", footer);

    $("#ui-gen", footer).addEventListener("click", generate);
    $("#ui-copy", footer).addEventListener("click", copyOut);
    $("#ui-clear", footer).addEventListener("click", clearAll);
    $("#ui-autogen", footer).addEventListener("change", () => {
      if ($("#ui-autogen").checked) generate();
    });

    host.addEventListener("change", (e) => {
      if (e.target && e.target.matches("input[type=checkbox][data-tag]")) {
        if ($("#ui-autogen").checked) generate();
      }
    });

    log("[ui.kit] host ready");
  }

  function createSectionShell(title) {
    const wrap = document.createElement("section");
    wrap.className = "ui-sec";
    const h = document.createElement("h3");
    h.textContent = title;
    const body = document.createElement("div");
    wrap.appendChild(h);
    wrap.appendChild(body);
    return { wrap, body };
  }

  function getAllSelectedTags() {
    const set = new Set();
    sections.forEach(s => {
      try { (s.getSelected() || []).forEach(t => set.add(String(t))); }
      catch(_){}
    });
    return Array.from(set);
  }

  function generate() {
    const tags = getAllSelectedTags();
    const text = tags.join(", ");
    if (out) out.value = text;
    if (tagsCount)  tagsCount.textContent  = String(tags.length);
    if (charsCount) charsCount.textContent = String(text.length);
    log(`[ui.kit] generated (${tags.length})`);
  }

  async function copyOut() {
    try {
      await (navigator.clipboard?.writeText(out.value) || Promise.reject());
      log("[ui.kit] copied");
    } catch {
      try { out.select(); document.execCommand("copy"); } catch(_) {}
      log("[ui.kit] copied (fallback)");
    }
  }

  function clearAll() {
    $$("input[type=checkbox][data-tag]", host).forEach(cb => cb.checked = false);
    if (out) out.value = "";
    if (tagsCount)  tagsCount.textContent  = "0";
    if (charsCount) charsCount.textContent = "0";
    log("[ui.kit] reset");
  }

  function mount() {
    ensureHost();
    sections.forEach(def => {
      const sec = createSectionShell(def.title);
      try { def.mount(sec.body); } catch(_) {}
      listArea.appendChild(sec.wrap);
    });
    log("[ui.kit] mount ready");

    // ✅ 読み込みチェッカー連携: UI準備完了通知
    try {
      window.dispatchEvent(new CustomEvent("ui.hostReady", { detail: { ok: true, ts: Date.now() } }));
      console.log("[ui.core] dispatch ui.hostReady");
    } catch(e) {
      console.warn("[ui.core] failed to dispatch ui.hostReady", e);
    }

    // 既にext_loader_autodetectが存在する場合はフラグを直接更新
    if (window.loadCheck) {
      try {
        window.loadCheck.uiHostReady = true;
        log("[ui.kit] loadCheck.uiHostReady = true");
      } catch (_) {}
    }
  }

  window.UI_REG = { registerSection, mount, __coreReady: true };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount, { once: true });
  } else {
    mount();
  }

  // ==== UI Host Retry補強 ====
  (function ensureUIHostReady() {
    if (window.__UI_HOST_RETRY_DONE__) return;
    window.__UI_HOST_RETRY_DONE__ = true;
    let retries = 0;
    const maxRetries = 25;
    function check() {
      const host = document.querySelector("#ui-host");
      if (host && host.hasAttribute("data-ui-mounted")) {
        console.log("[ui.core] host ready (retry pass)", retries);
      } else if (retries < maxRetries) {
        retries++;
        setTimeout(check, 300);
      } else {
        console.warn("[ui.core] host not ready after retry");
      }
    }
    check();
  })();
})();