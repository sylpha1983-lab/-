<!-- ファイル名: builder_ui.section.pose.v1.js -->
(function () {
  "use strict";
  if (!window.UI_REG || !window.UI_REG.__coreReady) return; // コア必須

  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const log = (m)=>{ try{ (window.writeLog?window.writeLog(m):console.log("[ui.kit]",m)); }catch(_){} };

  // pose のタグ収集
  function collectTags() {
    const set = new Set();
    (window.__pose_packs || []).forEach(p => (p.tags || []).forEach(t => set.add(String(t).trim())));
    return Array.from(set).sort((a,b)=>a.localeCompare(b));
  }

  // pose のヒント収集（もし登録済みなら）
  function collectHints() {
    const hints = {};
    (window.__pose_packs || []).forEach(p => {
      if (p && p.hints) Object.assign(hints, p.hints);
    });
    return hints;
  }

  // サブグループ定義（例: 移動、立ち姿、座りなど）
  const GROUPS = [
    { key:"stand",   title:"Stand / 立ち姿",   tags:["stand","pose_straight"] },
    { key:"sit",     title:"Sit / 座り",     tags:["sit","crouch"] },
    { key:"walk",    title:"Walk / 歩き",     tags:["walk","step","stroll"] },
    { key:"run",     title:"Run / 走り",     tags:["run","dash","sprint"] },
    { key:"jump",    title:"Jump / 跳躍",    tags:["jump","leap"] },
    { key:"tilt",    title:"Tilt / 傾き",    tags:["tilt","lean"] },
    { key:"hand",    title:"Hand / 手の動き", tags:["hand_up","hand_down","hand_side"] },
    { key:"arm",     title:"Arm / 腕の動き",  tags:["arm_up","arm_cross"] },
    { key:"leg",     title:"Leg / 足の動き",  tags:["leg_stretch","leg_bend"] },
    { key:"balance", title:"Balance / バランス", tags:["balance","off_balance"] },
    { key:"frame",   title:"Frame / 枠組み",  tags:["frame_focus","frame_expand"] },
    { key:"other",   title:"Other / その他",  tags:["pose_misc"] }
  ];

  function mount(container) {
    const all = new Set(collectTags());
    const hints = collectHints();

    const details = document.createElement("details");
    details.open = false; // ← 初期表示で閉じる
    details.className = "ui-group";
    details.innerHTML = `<summary>ポーズ（pose）</summary><div class="inner"></div>`;
    container.appendChild(details);
    const inner = $(".inner", details);

    GROUPS.forEach(g => {
      const present = g.tags.filter(t => all.has(t));
      if (!present.length) return;

      const d = document.createElement("details");
      d.className = "ui-group";
      d.open = false;
      d.innerHTML = `
        <summary>${g.title} <span style="opacity:.6">(${present.length})</span></summary>
        <div class="inner">
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:6px;">
            <button type="button" class="btn ghost" data-act="all">全選択</button>
            <button type="button" class="btn ghost" data-act="none">全解除</button>
          </div>
          <div class="list" data-key="${g.key}"></div>
        </div>
      `;
      inner.appendChild(d);

      const list = $(".list", d);
      present.forEach(tag => {
        const jp = hints[tag] ? ` / ${hints[tag]}` : "";
        const id = `pose_${tag.replace(/\W+/g,"_")}`;
        const label = document.createElement("label");
        label.className = "chip";
        label.htmlFor = id;
        label.innerHTML = `<input id="${id}" type="checkbox" data-tag="${tag}"><span>${tag}${jp}</span>`;
        list.appendChild(label);
      });

      // 全選択/全解除
      $("[data-act='all']", d).addEventListener("click", ()=>{
        $$(`.list[data-key="${g.key}"] input[type=checkbox]`, d).forEach(cb => cb.checked = true);
      });
      $("[data-act='none']", d).addEventListener("click", ()=>{
        $$(`.list[data-key="${g.key}"] input[type=checkbox]`, d).forEach(cb => cb.checked = false);
      });
    });

    log("[ui.kit] pose mounted");
  }

  function getSelected() {
    return Array.from(document.querySelectorAll("#ui-host input[type=checkbox][data-tag]:checked"))
      .map(cb => cb.dataset.tag);
  }

  // レジストリへ登録
  window.UI_REG.registerSection({
    id: "pose",
    title: "ポーズ（pose）",
    mount,
    getSelected
  });
})();