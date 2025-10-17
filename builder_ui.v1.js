// builder_ui.v1.js
(function (root) {
  "use strict";

  function $(sel, base) { return (base || document).querySelector(sel); }
  function el(tag, attrs = {}, children = []) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") n.className = v;
      else if (k === "text") n.textContent = v;
      else n.setAttribute(k, v);
    }
    for (const c of [].concat(children)) if (c) n.appendChild(c);
    return n;
  }

  function ensureStyle() {
    if ($("#builder-ui-style")) return;
    const css = `
      /* === builder_ui (injected) === */
      .pb-wrap{max-width:980px;margin:0 auto;padding:12px;}
      details.pb-sec{border:1px solid #e5e7eb;border-radius:10px;margin:10px 0;background:#fff}
      details.pb-sec>summary{cursor:pointer;user-select:none;padding:.8rem 1rem;font-weight:700}
      .pb-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:.5rem;padding:0 1rem 1rem}
      .pb-foot{display:flex;gap:.6rem;align-items:center;margin-top:12px;flex-wrap:wrap}
      .pb-btn{padding:.55rem 1.0rem;border-radius:.8rem;border:none;background:#2f2f2f;color:#fff}
      .pb-btn.secondary{background:#4b5563}
      .pb-btn.warn{background:#c2410c}
      #out{width:100%;height:120px;border-radius:10px;border:1px solid #e5e7eb;padding:.7rem;font-family:ui-monospace,Menlo,Consolas,monospace}
      #toast{position:fixed;left:50%;bottom:22px;transform:translateX(-50%);background:#111;color:#fff;padding:.6rem 1rem;border-radius:999px;opacity:0;pointer-events:none;transition:opacity .18s}
      #toast.show{opacity:1}
    `.trim();
    document.head.appendChild(el("style", { id: "builder-ui-style" , text: css }));
  }

  function toast(msg){
    try { root.writeLog && root.writeLog(`[ui] ${msg}`); } catch(_){}
    let t = $("#toast");
    if (!t) {
      t = el("div", { id: "toast" });
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t._h);
    t._h = setTimeout(()=>t.classList.remove("show"), 1600);
  }

  function buildUI() {
    ensureStyle();

    // マウントポイント（なければ作る）
    let host = $("#ui-root");
    if (!host) {
      host = el("div", { id: "ui-root" });
      // ログの直後あたりに差し込む（なければ body 末尾）
      const log = $("#log");
      (log && log.parentElement ? log.parentElement : document.body).appendChild(host);
    }

    // ラッパ
    const wrap = el("div", { class: "pb-wrap" });

    // 各カテゴリ（中身は後で拡張で埋める想定の空グリッド）
    const sections = [
      ["presets", "▼ プリセット"],
      ["faith",   "▼ 表情（faith）"],
      ["effect",  "▼ エフェクト"],
      ["background", "▼ 背景"],
      ["pose",    "▼ ポーズ"],
      ["hair",    "▼ 髪型"]
    ].map(([id, title])=>{
      return el("details", { class:"pb-sec", id:`sec-${id}` }, [
        el("summary", { text: title }),
        el("div", { class:"pb-grid", id:`grid-${id}` })
      ]);
    });

    // フッター（生成 / リセット / コピー）
    const out = el("textarea", { id:"out", placeholder:"generated tags will appear here..." });
    const btnGen   = el("button", { class:"pb-btn", text:"生成", id:"btn-gen" });
    const btnReset = el("button", { class:"pb-btn warn", text:"リセット", id:"btn-reset" });
    const btnCopy  = el("button", { class:"pb-btn secondary", text:"コピー", id:"btn-copy" });

    const foot = el("div", { class:"pb-foot" }, [btnGen, btnReset, btnCopy]);

    wrap.append(...sections, foot, out);
    host.innerHTML = ""; // 置き換え（他は触らない）
    host.appendChild(wrap);

    // ボタン動作
    btnCopy.addEventListener("click", async ()=>{
      try {
        const v = out.value || "";
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(v);
        } else {
          const ta = el("textarea", {}, [document.createTextNode(v)]);
          document.body.appendChild(ta);
          ta.select(); document.execCommand("copy"); document.body.removeChild(ta);
        }
        toast("コピーしました");
      } catch(e){
        toast("コピーに失敗しました");
      }
    });

    btnReset.addEventListener("click", ()=>{
      try {
        out.value = "";
        // 既存チェックボックスがあれば外す
        document.querySelectorAll('input[type="checkbox"]').forEach(i=>{ i.checked = false; });
        toast("リセットしました");
      } catch(_) {
        toast("リセット処理で問題が発生");
      }
    });

    btnGen.addEventListener("click", ()=>{
      // いったんは run() を呼んで素材を読み直すだけ
      try {
        if (typeof root.run === "function") {
          root.run();
          toast("生成（読み直し）しました");
        } else {
          toast("run() が見つかりません");
        }
      } catch(e){
        toast("生成でエラー");
        try { console.error(e); } catch(_){}
      }
    });

    // 使い勝手：最初はプリセットだけ開く
    const dPresets = $("#sec-presets");
    if (dPresets) dPresets.open = true;
  }

  // 起動
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildUI, { once:true });
  } else {
    buildUI();
  }

})(window);