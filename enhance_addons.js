/* === enhance_addons.js : 選択中タグバー（折りたたみ＋件数）追加 === */
/* 既存コードはそのまま。ファイルの末尾に “追記” してください。 */
(function(){
  if (window.__pbChipBarEnhanced) return;
  window.__pbChipBarEnhanced = true;

  const $  = (s,sc)=> (sc||document).querySelector(s);
  const $$ = (s,sc)=> Array.from((sc||document).querySelectorAll(s));

  // ----- style（最小限・衝突回避のためIDでスコープ） -----
  if (!$('#pb-chipbar-style')) {
    const st = document.createElement('style');
    st.id = 'pb-chipbar-style';
    st.textContent = `
      #pb-chipbar{position:sticky;top:0;background:#fff;border-bottom:1px solid var(--line);
        padding:8px 8px;z-index:5}
      #pb-chipbar .inner{display:flex;gap:8px;align-items:flex-start;flex-wrap:wrap}
      #pb-chipbar .chips{display:flex;gap:8px;align-items:center;flex-wrap:wrap;flex:1;min-width:40%}
      #pb-chipbar .chip{display:inline-flex;align-items:center;gap:8px;padding:6px 10px;border-radius:999px;
        background:var(--chip,#f2f4f7);font-size:14px;border:1px solid var(--line)}
      #pb-chipbar .chip .x{cursor:pointer;opacity:.7}
      #pb-chipbar .chip .x:hover{opacity:1}
      #pb-chipbar .btn-clear{padding:8px 12px;border:1px solid var(--line);border-radius:10px;background:#fff}
      #pb-chipbar .right{display:flex;align-items:center;gap:6px}
      #pb-chipbar .toggle{border:1px solid var(--line);background:#fff;border-radius:999px;padding:4px 8px;font-size:12px}
      #pb-chipbar .more{font-size:12px;color:#6b7280}
      #pb-chipbar.collapsed .chips{max-height:44px;overflow:hidden}
      #pb-chipbar.collapsed .fade{content:"";display:block;position:absolute;right:8px;top:8px;
        width:72px;height:44px;background:linear-gradient(90deg,rgba(255,255,255,0),#fff)}
      #pb-chipbar .wrap-rel{position:relative;flex:1}
      @media (max-width:480px){
        #pb-chipbar .btn-clear{padding:6px 10px}
        #pb-chipbar .chip{padding:5px 9px}
      }
    `;
    document.head.appendChild(st);
  }

  // ----- UI生成 -----
  function ensureBar(){
    if ($('#pb-chipbar')) return $('#pb-chipbar');
    const host = document.createElement('div');
    host.id = 'pb-chipbar';
    host.className = 'collapsed';
    host.innerHTML = `
      <div class="inner">
        <button class="btn-clear" id="pb-clear">全解除</button>
        <div class="wrap-rel">
          <div class="chips" id="pb-chips"></div>
          <div class="fade" aria-hidden="true"></div>
        </div>
        <div class="right">
          <span class="more" id="pb-more" aria-hidden="true"></span>
          <button class="toggle" id="pb-toggle" aria-expanded="false">▼</button>
        </div>
      </div>
    `;
    const wrap = $('.wrap') || document.body;
    wrap.insertBefore(host, wrap.firstElementChild); // 最上部に設置
    wireControls();
    return host;
  }

  // ----- データ取得 -----
  function getChecked(){
    // 本体のタグは必ず data-id を持つので、それだけを対象に（他のチェックと混同しない）
    return $$('input[type="checkbox"][data-id]:checked');
  }

  function labelForInput(inp){
    const lab = inp.closest('label');
    if (lab) {
      const span = lab.querySelector('span');
      if (span) return span.textContent.trim();
      return lab.textContent.trim();
    }
    return inp.dataset.id || 'tag';
  }

  // ----- ビルド -----
  function buildChips(){
    const bar   = ensureBar();
    const chips = $('#pb-chips', bar);
    chips.innerHTML = '';
    const items = getChecked();

    items.forEach(inp=>{
      const chip = document.createElement('span');
      chip.className='chip';
      chip.innerHTML = `<span class="t">${labelForInput(inp)}</span><span class="x" aria-label="remove">✕</span>`;
      chip.querySelector('.x').addEventListener('click', ()=>{
        try{
          inp.checked = false;
          inp.dispatchEvent(new Event('change',{bubbles:true}));
        }catch(_){}
        queueBuild();
      });
      chips.appendChild(chip);
    });

    // 折りたたみ時の「+N」表示（2行目以降のchip数）
    updateMoreCount();
  }

  function updateMoreCount(){
    const bar   = $('#pb-chipbar');
    const chips = $('#pb-chips', bar);
    const more  = $('#pb-more', bar);
    if (!bar || !chips || !more) return;

    if (!bar.classList.contains('collapsed')) { more.textContent=''; return; }

    const firstTop = chips.firstElementChild ? chips.firstElementChild.offsetTop : 0;
    let hidden = 0;
    for (const node of chips.children) {
      if (node.offsetTop > firstTop) hidden++;
    }
    more.textContent = hidden>0 ? `+${hidden}` : '';
  }

  // ----- 操作 -----
  function wireControls(){
    const bar = $('#pb-chipbar');
    $('#pb-clear',bar).addEventListener('click', ()=>{
      const checked = getChecked();
      checked.forEach(inp=>{
        try{
          inp.checked=false;
          inp.dispatchEvent(new Event('change',{bubbles:true}));
        }catch(_){}
      });
      queueBuild();
    });
    $('#pb-toggle',bar).addEventListener('click', ()=>{
      const tgl = $('#pb-toggle',bar);
      bar.classList.toggle('collapsed');
      const ex = bar.classList.contains('collapsed') ? 'false' : 'true';
      tgl.setAttribute('aria-expanded', ex);
      tgl.textContent = bar.classList.contains('collapsed') ? '▼' : '▲';
      updateMoreCount();
    });

    // ウィンドウリサイズで +N 再計算
    window.addEventListener('resize', debounce(updateMoreCount, 150));
  }

  // ----- 監視（チェック変更・リセット・再読込・DOM再構築） -----
  let buildTimer=null;
  const queueBuild = ()=>{ clearTimeout(buildTimer); buildTimer=setTimeout(buildChips, 30); };
  const debounce = (fn,ms)=>{ let t; return ()=>{ clearTimeout(t); t=setTimeout(fn,ms);} };

  // 1) 任意の data-id チェック変更で更新
  document.addEventListener('change', (e)=>{
    const el = e.target;
    if (el && el.matches && el.matches('input[type="checkbox"][data-id]')) queueBuild();
  });

  // 2) Reset/再読込ボタンにも同期
  const hookButtons = ()=> {
    const reset = $('#reset'); if (reset && !reset.__pbHooked) { reset.__pbHooked=true; reset.addEventListener('click', queueBuild); }
    const reload = $('#reloadBtn'); if (reload && !reload.__pbHooked) { reload.__pbHooked=true; reload.addEventListener('click', ()=> setTimeout(queueBuild, 100)); }
  };
  hookButtons();

  // 3) 本体のrenderAll後のDOM追加に対応（MutationObserver）
  const mo = new MutationObserver(debounce(()=>{ hookButtons(); queueBuild(); }, 60));
  mo.observe(document.body, {subtree:true, childList:true});

  // 初期起動（DOMContentLoaded後でも即時OK）
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ()=>{ ensureBar(); queueBuild(); });
  } else {
    ensureBar(); queueBuild();
  }
})();