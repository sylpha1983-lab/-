// ui_pose.v1.js
(function () {
  "use strict";

  // --- utils ---------------------------------------------------
  const $  = (sel, root = document) => (root || document).querySelector(sel);
  const $$ = (sel, root = document) => Array.from((root || document).querySelectorAll(sel));
  const log = (m) => { try { (window.writeLog || console.log).call(null, `[ui.pose] ${m}`); } catch(_){} };

  // 既存UIホスト（builder_ui.kit.v1.js が作る #pb-ui-host）
  const host = () => document.getElementById("pb-ui-host");

  // --- pose データ収集 -----------------------------------------
  // 前提：pose.*.v1.js が window.__pose_packs に {id,label,tags,hints} を push 済み
  function collectPoseItems() {
    const packs = (window.__pose_packs || []);
    const map = new Map(); // tag -> {tag, hint}
    packs.forEach(p => {
      const tags  = p?.tags  || [];
      const hints = p?.hints || {};
      tags.forEach(t => {
        const tag = String(t).trim();
        if (!tag) return;
        const hint = hints[tag] ? String(hints[tag]).trim() : "";
        if (!map.has(tag)) map.set(tag, { tag, hint });
        else if (hint && !map.get(tag).hint) map.get(tag).hint = hint; // ヒント補完
      });
    });
    return Array.from(map.values()).sort((a,b)=>a.tag.localeCompare(b.tag));
  }

  // --- グルーピング（折りたたみ単位） -------------------------
  // ※ 必要に応じて追記/調整してください
  const GROUP_MAP = {
    "Standing / 立ち":           ["stand","standing"],
    "Sitting / 座り":            ["sit","sitting","kneel"],
    "Walking / 歩き":            ["walk","walking","stride"],
    "Running / 走り":            ["run","running","sprint"],
    "Jumping / 跳び":            ["jump","leap","hop"],
    "Turning / ひねり":          ["turn","twist","rotate"],
    "Lean・Balance / 体重移動":   ["lean","balance","shift"],
    "Hands / 手・ジェスチャ":     ["hands","gesture","point","wave","clap","fist","peace","thumbsup"]
  };

  function groupPose(items) {
    const pick = (nameList) => nameList
      .map(tag => items.find(i => i.tag === tag))
      .filter(Boolean);

    const buckets = [];
    Object.entries(GROUP_MAP).forEach(([title, keys]) => {
      const arr = pick(keys);
      if (arr.length) buckets.push([title, arr]);
    });

    // その他
    const picked = new Set(buckets.flatMap(([,arr]) => arr.map(x=>x.tag)));
    const other = items.filter(i => !picked.has(i.tag));
    if (other.length) buckets.push(["Other / その他", other]);

    return buckets;
  }

  // --- 1チップ（チェック＋ラベル） -----------------------------
  function makeChip({tag, hint}) {
    const id = "pose_"+ tag.replace(/\W+/g,"_");
    const el = document.createElement("label");
    el.className = "pb-chip";
    el.innerHTML = `
      <input type="checkbox" data-tag="${tag}" id="${id}">
      <span class="en">${tag}</span>${hint ? `<span class="jp"> / ${hint}</span>` : ""}
    `;
    el.title = hint ? `${tag} / ${hint}` : tag;
    return el;
  }

  // --- Pose セクション描画 -------------------------------------
  function renderPoseSection(root) {
    if (!root || document.getElementById("pb-sec-pose")) return;

    // 最上部の固定操作列は builder_ui.kit.v1.js 側の既存要素を使用（追従OK）
    // ここでは“セクション本体”だけ足す
    const sec = document.createElement("details");
    sec.className = "pb-sec";
    sec.id = "pb-sec-pose";
    // 初期は閉じる
    // sec.open = false;

    const sum = document.createElement("summary");
    sum.textContent = "▼ ポーズ（pose）";
    sec.appendChild(sum);

    const groupsWrap = document.createElement("div");
    groupsWrap.className = "pb-groups";
    sec.appendChild(groupsWrap);

    root.appendChild(sec);

    // スタイル（既存CSSを崩さず微追加）
    const style = document.createElement("style");
    style.textContent = `
      #pb-sec-pose .pb-groups { display: grid; gap: 8px; }
      #pb-sec-pose .pb-sub summary { cursor:pointer; font-weight:700; }
      #pb-sec-pose .pb-grid { display:block; }       /* 1列 */
      #pb-sec-pose .pb-chip { display:flex; gap:6px; align-items:center; padding:6px 8px; border:1px solid #ddd; border-radius:999px; margin:4px 0; white-space:nowrap; }
      #pb-sec-pose .pb-chip .en { font-weight:600; }
      #pb-sec-pose .pb-chip .jp { opacity:.8; }
    `;
    document.head.appendChild(style);

    // データ描画
    const items = collectPoseItems();
    groupPose(items).forEach(([title, arr]) => {
      const d = document.createElement("details");
      d.className = "pb-sub"; // 初期は閉
      const s = document.createElement("summary");
      s.textContent = `▶ ${title}（${arr.length}）`;
      d.appendChild(s);

      const grid = document.createElement("div");
      grid.className = "pb-grid";
      const frag = document.createDocumentFragment();
      arr.forEach(it => frag.appendChild(makeChip(it)));
      grid.appendChild(frag);

      d.appendChild(grid);
      groupsWrap.appendChild(d);
    });

    log(`rendered ${items.length} pose tags`);
  }

  // --- mount ---------------------------------------------------
  function mount() {
    const h = host();
    if (!h) return setTimeout(mount, 120);
    renderPoseSection(h);
  }
  (document.readyState === "loading")
    ? document.addEventListener("DOMContentLoaded", mount, { once:true })
    : mount();
})();