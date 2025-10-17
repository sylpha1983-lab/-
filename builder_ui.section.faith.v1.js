<!-- ファイル名: builder_ui.section.faith.v1.js -->
(function () {
  "use strict";
  if (!window.UI_REG || !window.UI_REG.__coreReady) return; // コア必須

  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const log = (m)=>{ try{ (window.writeLog?window.writeLog(m):console.log("[ui.kit]",m)); }catch(_){} };

  // hints を faith パックから収集
  function collectHints() {
    const hints = {};
    (window.__faith_packs || []).forEach(p => {
      if (p && p.hints) Object.assign(hints, p.hints);
    });
    return hints;
  }

  // faith のタグをユニーク化して取得
  function collectTags() {
    const set = new Set();
    (window.__faith_packs || []).forEach(p => (p.tags || []).forEach(t => set.add(String(t).trim())));
    return Array.from(set).sort((a,b)=>a.localeCompare(b));
  }

  // サブグループ定義（英語ラベルで分類）
  const GROUPS = [
    { key:"joy",      title:"Joyful / ポジティブ",  tags:["joy","smile","delight","cheer","relax","laugh","grin"] },
    { key:"anger",    title:"Anger / 怒り",         tags:["angry","frown","furious"] },
    { key:"sadness",  title:"Sadness / 悲しみ",     tags:["sad","crying","tears"] },
    { key:"surprise", title:"Surprise / 驚き",      tags:["surprised","astonished","wow"] },
    { key:"fear",     title:"Fear / 不安",          tags:["fear","scared"] },
    { key:"disgust",  title:"Disgust / 嫌悪",       tags:["disgust"] },
    { key:"embarr",   title:"Embarrassed / 照れ",   tags:["embarrassed","shy"] },
    { key:"sleepy",   title:"Sleepy / 眠気",        tags:["sleepy","yawn","dozy"] },
    { key:"focus",    title:"Focus・Neutral / 集中・無", tags:["focus","neutral","blank","plain"] },
    { key:"dreamy",   title:"Dreamy / 夢見心地",    tags:["dreamy","sparkle"] },
    { key:"other",    title:"Other / その他",       tags:["love","heart"] }
  ];

  function mount(container) {
    const all = new Set(collectTags());
    const hints = collectHints();

    // セクション本体（details グループ）
    const details = document.createElement("details");
    details.open = false; // ← 初期表示で閉じる
    details.className = "ui-group";
    details.innerHTML = `<summary>表情（faith）</summary><div class="inner"></div>`;
    container.appendChild(details);
    const inner = $(".inner", details);

    // 各サブグループを描画
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
        const id = `faith_${tag.replace(/\W+/g,"_")}`;
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

    log("[ui.kit] faith mounted");
  }

  function getSelected() {
    return Array.from(document.querySelectorAll("#ui-host input[type=checkbox][data-tag]:checked"))
      .map(cb => cb.dataset.tag);
  }

  // レジストリへ登録
  window.UI_REG.registerSection({
    id: "faith",
    title: "表情（faith）",
    mount,
    getSelected
  });
})();