// builder_ui.kit.v1.js
(function () {
  "use strict";

  // ====== 0) 便利関数 & ロガー ===============================
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const log = (msg) => {
    try {
      if (typeof window.writeLog === "function") window.writeLog(msg);
      else console.log("[ui.kit]", msg);
    } catch (_) {}
  };

  // ====== 1) データリーダー ===============================
  function readFaith() {
    const packs = (window.__faith_packs || []);
    const items = [];
    const push = (tag, hint, group) => {
      if (!tag) return;
      items.push({ tag: String(tag), hint: String(hint || ""), group: String(group || "Other") });
    };
    packs.forEach(p => {
      const grp = p?.label || p?.id || "Other";
      const hints = p?.hints || {};
      (p?.tags || []).forEach(t => {
        push(t, hints[t] || "", grp);
      });
    });
    return items;
  }

  function readPose() {
    const packs = (window.__pose_packs || []);
    const items = [];
    const push = (tag, hint, group) => {
      if (!tag) return;
      items.push({ tag: String(tag), hint: String(hint || ""), group: String(group || "Other") });
    };
    packs.forEach(p => {
      const grp = p?.label || p?.id || "Other";
      const hints = p?.hints || {};
      (p?.tags || []).forEach(t => {
        push(t, hints[t] || "", grp);
      });
    });
    return items;
  }

  // ====== 2) スタイル注入 ===============================
  function injectStyles(host) {
    if ($("#ui-kit-style")) return;
    const css = document.createElement("style");
    css.id = "ui-kit-style";
    css.textContent = `
#ui-kit{margin:18px 0}
#ui-kit h2{font-size:1.15rem;margin:18px 6px}
#ui-kit details{border-radius:12px;border:1px solid #e5e5e5;background:#fff;margin:10px 0}
#ui-kit summary{cursor:pointer;padding:12px 14px;font-weight:700;list-style:none}
#ui-kit summary::-webkit-details-marker{display:none}
#ui-kit .group-body{padding:12px 10px 14px 10px}
#ui-kit .chip{display:inline-flex;align-items:center;gap:8px;border:1px solid #e1e1e1;border-radius:999px;padding:8px 12px;margin:6px 6px 0 0}
#ui-kit .chip input{transform:scale(1.1)}
#ui-kit .chip .hint{opacity:.7;font-size:.9em}
#ui-kit .row{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:6px 0}
#ui-kit .btn{padding:.6rem 1.1rem;border:none;border-radius:12px;background:#111;color:#fff}
#ui-kit .btn.secondary{background:#f1f1f1;color:#111}
#ui-kit .btn.ghost{background:#fff;border:1px solid #ddd;color:#111}
#ui-kit .meter{font-family:monospace;opacity:.8}
#ui-kit .group-ops{display:flex;gap:8px;margin:6px 6px 8px 14px}

/* === 追従バー（core の #ui-actions-stick を利用） === */
#ui-actions-stick{position:sticky;bottom:0;left:0;right:0;z-index:1000;background:#fff;border-top:1px solid #e9e9e9;box-shadow:0 -4px 12px rgba(0,0,0,.06)}
#ui-actions-stick .ops{display:flex;align-items:center;gap:10px;margin-bottom:8px;flex-wrap:wrap;padding:0 2px}
#ui-actions-stick textarea{width:100%;min-height:110px;border:1px solid #ddd;border-radius:10px;padding:10px;outline:none}
#ui-actions-stick .count{font-family:monospace;opacity:.75}
`;
    host.appendChild(css);
  }

  // ====== 3) UI要素生成 ===============================
  function chip(tag, hint, dataset = {}) {
    const id = "tg_" + tag.replace(/\W+/g, "_");
    const wrap = document.createElement("label");
    wrap.className = "chip";
    wrap.title = hint ? `${tag} / ${hint}` : tag;
    wrap.innerHTML = `
      <input type="checkbox" id="${id}" data-tag="${tag}">
      <span class="tag">${tag}</span>
      ${hint ? `<span class="hint"> / ${hint}</span>` : ""}
    `;
    const input = wrap.querySelector("input");
    Object.entries(dataset).forEach(([k, v]) => input.dataset[k] = v);
    return wrap;
  }

  function renderGroup(container, groupName, items, datasetExtra = {}) {
    const det = document.createElement("details");
    det.open = false; // すべて閉じて開始

    const sum = document.createElement("summary");
    sum.textContent = `${groupName}（${items.length}）`;
    det.appendChild(sum);

    const ops = document.createElement("div");
    ops.className = "group-ops";
    const bSel = document.createElement("button");
    bSel.type = "button";
    bSel.className = "btn ghost";
    bSel.textContent = "全選択";
    const bClr = document.createElement("button");
    bClr.type = "button";
    bClr.className = "btn ghost";
    bClr.textContent = "全解除";
    ops.appendChild(bSel);
    ops.appendChild(bClr);
    det.appendChild(ops);

    const body = document.createElement("div");
    body.className = "group-body";
    const row = document.createElement("div");
    row.className = "row";
    items.forEach(it => {
      row.appendChild(chip(it.tag, it.hint, datasetExtra));
    });
    body.appendChild(row);
    det.appendChild(body);

    bSel.addEventListener("click", () => {
      $$("input[type=checkbox]", det).forEach(cb => (cb.checked = true));
    });
    bClr.addEventListener("click", () => {
      $$("input[type=checkbox]", det).forEach(cb => (cb.checked = false));
    });

    container.appendChild(det);
  }

  function renderCategory(root, title, items, datasetPrefix) {
    const sec = document.createElement("section");
    const h2 = document.createElement("h2");
    h2.textContent = title;
    sec.appendChild(h2);

    const map = new Map();
    items.forEach(it => {
      const g = it.group || "Other";
      if (!map.has(g)) map.set(g, []);
      map.get(g).push(it);
    });

    Array.from(map.entries())
      .sort((a, b) => a[0].localeCompare(b[0], "ja"))
      .forEach(([grp, arr]) => {
        renderGroup(sec, grp, arr, { cat: datasetPrefix });
      });

    root.appendChild(sec);
  }

  // ====== 4) 生成・コピー・全解除（固定バー：core の殻を利用） =========
  function buildStickyBar(host) {
    // core が作った殻を取得
    const shell = $("#ui-actions-stick", host);
    const actions = $(".ui-actions", shell);
    if (!shell || !actions) return;

    // 既存内容をクリアしてから必要な UI を差し込む
    actions.innerHTML = `
      <div class="ops">
        <button type="button" id="btnGen" class="btn">タグ生成</button>
        <button type="button" id="btnCopy" class="btn secondary">コピー</button>
        <button type="button" id="btnClear" class="btn ghost">全解除</button>
        <span class="count">tags: <span id="tagsCount">0</span> / chars: <span id="charsCount">0</span></span>
        <label style="margin-left:auto;display:flex;align-items:center;gap:.4rem;">
          <input id="autoGen" type="checkbox"> 自動生成
        </label>
      </div>
    `;

    // テキストエリアは actions の直後（同じシェル内）に置く
    let out = $("#out", shell);
    if (!out) {
      out = document.createElement("textarea");
      out.id = "out";
      out.placeholder = "generated tags will appear here...";
      shell.appendChild(out);
    }

    // ===== コンテンツがバーで隠れない対策 =====
    let spacer = $("#ui-sticky-spacer", host);
    if (!spacer) {
      spacer = document.createElement("div");
      spacer.id = "ui-sticky-spacer";
      spacer.style.width = "100%";
      spacer.style.pointerEvents = "none";
      host.insertBefore(spacer, shell); // バー直前
    }
    const root = $("#ui-kit", host) || host;

    const adjustForSticky = () => {
      const h = Math.ceil(shell.getBoundingClientRect().height) + 16;
      spacer.style.height = h + "px";
      if (root) root.style.paddingBottom = h + "px";
    };
    adjustForSticky();
    window.addEventListener("resize", adjustForSticky);
    setTimeout(adjustForSticky, 0);
    setTimeout(adjustForSticky, 300);

    // ===== イベント =====
    const updateCounters = () => {
      const val = out.value || "";
      $("#charsCount", actions).textContent = String(val.length);
      const tags = val.split(",").map(s => s.trim()).filter(Boolean);
      $("#tagsCount", actions).textContent = String(tags.length);
    };

    function collectCheckedTags() {
      const checked = $$(`#ui-kit input[type=checkbox]:checked`);
      const tags = checked.map(cb => cb.dataset.tag).filter(Boolean);
      return tags;
    }

    function generate() {
      const tags = collectCheckedTags();
      out.value = tags.join(", ");
      updateCounters();
      log("[ui.kit] generated");
    }

    function copyOut() {
      const val = out.value || "";
      if (!val) return;
      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(val).then(() => log("[ui.kit] copied"));
      } else {
        out.select(); document.execCommand("copy"); log("[ui.kit] copied");
      }
    }

    function clearAll() {
      $$(`#ui-kit input[type=checkbox]`).forEach(cb => (cb.checked = false));
      out.value = "";
      updateCounters();
    }

    $("#btnGen", actions).addEventListener("click", generate);
    $("#btnCopy", actions).addEventListener("click", copyOut);
    $("#btnClear", actions).addEventListener("click", clearAll);
    out.addEventListener("input", updateCounters);

    const auto = $("#autoGen", actions);
    auto.addEventListener("change", () => {
      if (auto.checked) {
        document.addEventListener("change", autoHandler);
      } else {
        document.removeEventListener("change", autoHandler);
      }
    });
    function autoHandler(e) {
      if (!(e.target instanceof HTMLInputElement)) return;
      if (e.target.type !== "checkbox") return;
      if (!e.target.closest("#ui-kit")) return;
      generate();
    }

    updateCounters();
  }

  // ====== 5) ルート描画 ===============================
  function mount() {
    const host = $("#ui-host");
    if (!host) {
      log("[ui.kit] mount function not found (dataReady)");
      return;
    }

    injectStyles(host);

    // 既存の固定バー(#ui-actions-stick) を残したまま、UI 本体をその直前に差し込む
    const shell = $("#ui-actions-stick", host);
    let root = $("#ui-kit", host);
    if (!root) {
      root = document.createElement("div");
      root.id = "ui-kit";
      if (shell) {
        host.insertBefore(root, shell); // 固定バーの手前に置く
      } else {
        host.appendChild(root);
      }
    } else {
      root.innerHTML = "";
    }

    // カテゴリー描画
    const faith = readFaith();
    const pose = readPose();

    if (faith.length) renderCategory(root, "表情（faith）", faith, "faith");
    if (pose.length) renderCategory(root, "ポーズ（pose）", pose, "pose");

    // 固定バー（core の殻を利用）
    buildStickyBar(host);

    log("[ui.kit] mounted");
  }

  // ====== 8) 起動タイミング ==================================
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount, { once: true });
  } else {
    mount();
  }
})();