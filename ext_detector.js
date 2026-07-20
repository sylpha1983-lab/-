/* ext_detector.js (fixed)
 * Detective mode / DOM inspector.
 * Default: OFF (to avoid endless popups on mobile).
 * Enable:
 *   - add URL param ?detective=1
 *   - or set localStorage.DETECTIVE_MODE = "1"
 * Disable:
 *   - remove param, and set localStorage.DETECTIVE_MODE = "0"
 */
(() => {
  "use strict";

  // ---- enable gate (default OFF) ----
  const qs = new URLSearchParams(location.search);
  const enabledByQuery = qs.get("detective") === "1" || qs.get("detective") === "true";
  const enabledByStorage = (localStorage.getItem("DETECTIVE_MODE") || "") === "1";
  const ENABLED = enabledByQuery || enabledByStorage;

  if (!ENABLED) return;

  // Prevent double-boot (if loaded twice)
  if (window.__EXT_DETECTOR_BOOTED__) return;
  window.__EXT_DETECTOR_BOOTED__ = true;

  function findTextareas() {
    return Array.from(document.querySelectorAll("textarea, input[type='text']"));
  }

  function ensureBanner() {
    if (document.getElementById("detectiveBanner")) return;
    const banner = document.createElement("div");
    banner.id = "detectiveBanner";
    banner.style.cssText = [
      "position:fixed",
      "top:10px",
      "left:10px",
      "right:10px",
      "z-index:999999",
      "background:#b91c1c",
      "color:#fff",
      "padding:10px 12px",
      "border-radius:10px",
      "font-size:14px",
      "box-shadow:0 10px 30px rgba(0,0,0,.25)",
      "display:flex",
      "align-items:center",
      "justify-content:space-between",
      "gap:12px",
    ].join(";");
    banner.innerHTML = `
      <div style="line-height:1.35">
        <div style="font-weight:700">🕵️ 名探偵モード起動中</div>
        <div style="opacity:.95">テキストエリアをタップして入力してください（検出すると通知します）</div>
      </div>
      <button id="detectiveCloseBtn" style="
        background:rgba(255,255,255,.15);
        color:#fff;border:0;border-radius:10px;
        padding:8px 10px;font-weight:700;
      ">停止</button>
    `;
    document.body.appendChild(banner);

    document.getElementById("detectiveCloseBtn")?.addEventListener("click", () => {
      // Turn off permanently until user enables again
      localStorage.setItem("DETECTIVE_MODE", "0");
      banner.remove();
      window.__EXT_DETECTOR_BOOTED__ = true;
      toast("🧯 名探偵モードを停止しました（再起動するには ?detective=1 ）");
    });
  }

  function toast(msg) {
    const id = "detectiveToast";
    const old = document.getElementById(id);
    if (old) old.remove();
    const t = document.createElement("div");
    t.id = id;
    t.textContent = msg;
    t.style.cssText = [
      "position:fixed",
      "bottom:12px",
      "left:12px",
      "right:12px",
      "z-index:999999",
      "background:#111827",
      "color:#fff",
      "padding:10px 12px",
      "border-radius:12px",
      "font-size:13px",
      "box-shadow:0 10px 30px rgba(0,0,0,.25)",
      "opacity:.98",
    ].join(";");
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2200);
  }

  function buildInfo(el) {
    const id = el.id || "(なし)";
    const cls = el.className ? String(el.className) : "(なし)";
    const name = el.getAttribute("name") || "(なし)";
    const ph = el.getAttribute("placeholder") || "(なし)";
    const tag = el.tagName.toLowerCase();
    const type = el.getAttribute("type") || "(なし)";
    return { tag, id, cls, name, type, placeholder: ph };
  }

  function showInfoPopup(info) {
    const msg =
      `🕵️ 犯人を見つけました！\n` +
      `--------------------\n` +
      `あなたが今入力している場所の情報:\n` +
      `Tag: ${info.tag}\n` +
      `ID: ${info.id}\n` +
      `Class: ${info.cls}\n` +
      `Name: ${info.name}\n` +
      `Type: ${info.type}\n` +
      `Placeholder: ${info.placeholder}\n` +
      `--------------------\n` +
      `この情報を教えてください！`;

    const ok = confirm(msg + "\n\nOK: 続行 / キャンセル: 以降このタブでは通知しない");
    if (!ok) {
      window.__EXT_DETECTOR_MUTED__ = true;
      toast("🔕 このタブでは通知を止めました（再読み込みで復活）");
    }
  }

  function wire() {
    ensureBanner();

    const targets = findTextareas();
    if (!targets.length) {
      toast("⚠️ テキスト入力欄が見つかりません（DOM構造を確認してください）");
      return;
    }

    targets.forEach((el) => {
      if (el.__detectiveWired) return;
      el.__detectiveWired = true;

      el.addEventListener("focus", () => {
        if (window.__EXT_DETECTOR_MUTED__) return;
        showInfoPopup(buildInfo(el));
      }, { passive: true });

      el.addEventListener("pointerdown", () => {
        if (window.__EXT_DETECTOR_MUTED__) return;
        toast(`🔎 focus候補: id=${el.id || "(なし)"} class=${el.className || "(なし)"}`);
      }, { passive: true });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      wire();
      setTimeout(wire, 800);
      setTimeout(wire, 2000);
    });
  } else {
    wire();
    setTimeout(wire, 800);
    setTimeout(wire, 2000);
  }
})();
