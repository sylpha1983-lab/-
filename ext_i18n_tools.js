/*
  ext_i18n_tools.js (v2)
  - DEVモード時だけ i18n 作業用パネルを表示
  - 「×」で完全削除せず“最小化”し、いつでも復帰できる
  - パネルはリサイズ可能（右下ドラッグ）＋ズーム（＋/－）
  - 状態は localStorage に保存（リロード不要）
*/
(function(){
  const LS_DEV = 'BUILDER_DEV_MODE';
  const LS_PANEL_OPEN = 'I18N_TOOLS_OPEN';
  const LS_PANEL_SCALE = 'I18N_TOOLS_SCALE';
  const LS_PANEL_W = 'I18N_TOOLS_W';
  const LS_PANEL_H = 'I18N_TOOLS_H';

  function isDev(){
    try { return localStorage.getItem(LS_DEV) === 'true'; } catch(e){ return false; }
  }
  function safe(fn){ try{ fn(); }catch(e){ console.warn('[i18n-tools]', e); } }

  function getScale(){
    let s = 1;
    try { s = parseFloat(localStorage.getItem(LS_PANEL_SCALE) || '1'); } catch(e){}
    if(!isFinite(s) || s <= 0) s = 1;
    if(s < 0.6) s = 0.6;
    if(s > 2.0) s = 2.0;
    return s;
  }
  function setScale(s){
    if(!isFinite(s)) return;
    if(s < 0.6) s = 0.6;
    if(s > 2.0) s = 2.0;
    try { localStorage.setItem(LS_PANEL_SCALE, String(s)); } catch(e){}
    const p = document.getElementById('i18nToolsPanel');
    if(p) p.style.transform = 'scale(' + s + ')';
  }

  function isOpen(){
    try { return localStorage.getItem(LS_PANEL_OPEN) !== '0'; } catch(e){ return true; }
  }
  function setOpen(v){
    try { localStorage.setItem(LS_PANEL_OPEN, v ? '1' : '0'); } catch(e){}
  }

  function ensureI18nWrapped(){
    const i18n = window.__i18n;
    if(!i18n || i18n.__wrappedForTools) return;
    i18n.__wrappedForTools = true;
    i18n.__missingKeys = new Set();
    const origT = i18n.t ? i18n.t.bind(i18n) : null;
    if(!origT) return;

    i18n.t = function(key, fallback, params){
      const out = origT(key, fallback, params);
      const fb = (fallback === undefined || fallback === null) ? '' : String(fallback);
      if(typeof key === 'string'){
        const s = String(out);
        if(s === key || (fb === '' && s === key) || (fb !== '' && s === fb)){
          i18n.__missingKeys.add(key);
        }
      }
      return out;
    };
  }

  function ensureLauncher(){
    if(document.getElementById('i18nToolsLauncher')) return;

    const btn = document.createElement('button');
    btn.id = 'i18nToolsLauncher';
    btn.type = 'button';
    btn.textContent = 'i18n';

    btn.style.position = 'fixed';
    btn.style.right = '12px';
    btn.style.bottom = '12px';
    btn.style.zIndex = '99998';
    btn.style.width = '48px';
    btn.style.height = '48px';
    btn.style.borderRadius = '999px';
    btn.style.border = '1px solid rgba(255,255,255,0.25)';
    btn.style.background = 'rgba(0,0,0,0.55)';
    btn.style.color = '#fff';
    btn.style.fontWeight = '700';
    btn.style.cursor = 'pointer';
    btn.style.backdropFilter = 'blur(6px)';

    btn.onclick = () => safe(()=>{
      setOpen(true);
      showPanel(true);
    });

    document.body.appendChild(btn);
  }

  function mkBtn(label){
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = label;
    b.style.marginRight = '6px';
    b.style.marginBottom = '6px';
    b.style.padding = '6px 8px';
    b.style.borderRadius = '8px';
    b.style.border = '1px solid rgba(255,255,255,0.25)';
    b.style.background = 'rgba(255,255,255,0.10)';
    b.style.color = '#fff';
    b.style.cursor = 'pointer';
    return b;
  }

  function showPanel(forceCreate){
    let wrap = document.getElementById('i18nToolsPanel');
    if(!wrap && forceCreate){
      wrap = buildPanel();
    }
    if(!wrap) return;

    const open = isOpen();
    wrap.style.display = open ? 'block' : 'none';

    const launcher = document.getElementById('i18nToolsLauncher');
    if(launcher) launcher.style.display = open ? 'none' : 'block';
  }

  function buildPanel(){
    if(document.getElementById('i18nToolsPanel')) return document.getElementById('i18nToolsPanel');

    const wrap = document.createElement('div');
    wrap.id = 'i18nToolsPanel';
    wrap.style.position = 'fixed';
    wrap.style.right = '12px';
    wrap.style.bottom = '12px';
    wrap.style.zIndex = '99999';
    wrap.style.background = 'rgba(0,0,0,0.75)';
    wrap.style.color = '#fff';
    wrap.style.padding = '10px';
    wrap.style.borderRadius = '10px';
    wrap.style.fontSize = '12px';
    wrap.style.maxWidth = '70vw';
    wrap.style.backdropFilter = 'blur(6px)';
    wrap.style.transformOrigin = 'right bottom';
    wrap.style.transform = 'scale(' + getScale() + ')';

    // リサイズ（右下ドラッグ）
    wrap.style.resize = 'both';
    wrap.style.overflow = 'auto';
    wrap.style.minWidth = '220px';
    wrap.style.minHeight = '160px';

    // 前回サイズ復元
    try {
      const w = parseInt(localStorage.getItem(LS_PANEL_W) || '', 10);
      const h = parseInt(localStorage.getItem(LS_PANEL_H) || '', 10);
      if(isFinite(w) && w > 0) wrap.style.width = w + 'px';
      if(isFinite(h) && h > 0) wrap.style.height = h + 'px';
    } catch(e){}

    // サイズ保存（軽く間引く）
    let saveT = 0;
    const saveSize = () => {
      window.clearTimeout(saveT);
      saveT = window.setTimeout(()=>{
        safe(()=>{
          const rect = wrap.getBoundingClientRect();
          localStorage.setItem(LS_PANEL_W, String(Math.round(rect.width)));
          localStorage.setItem(LS_PANEL_H, String(Math.round(rect.height)));
        });
      }, 350);
    };
    wrap.addEventListener('mouseup', saveSize);
    wrap.addEventListener('touchend', saveSize, {passive:true});

    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.justifyContent = 'space-between';
    header.style.marginBottom = '8px';

    const title = document.createElement('div');
    title.textContent = 'i18n DEV';
    title.style.fontWeight = '700';

    const controls = document.createElement('div');

    const btnZoomIn = mkBtn('＋');
    const btnZoomOut = mkBtn('－');
    const btnMin = mkBtn('×');

    btnZoomIn.onclick = () => safe(()=> setScale(getScale() + 0.1));
    btnZoomOut.onclick = () => safe(()=> setScale(getScale() - 0.1));

    // ここが肝：×は remove じゃなく最小化
    btnMin.onclick = () => safe(()=>{
      setOpen(false);
      showPanel(false);
    });

    controls.appendChild(btnZoomIn);
    controls.appendChild(btnZoomOut);
    controls.appendChild(btnMin);

    header.appendChild(title);
    header.appendChild(controls);
    wrap.appendChild(header);

    const btnMissing = mkBtn('Missing keys');
    const btnExport = mkBtn('Export dict');

    const out = document.createElement('textarea');
    out.id = 'i18nToolsOut';
    out.placeholder = 'Output…';
    out.style.width = '100%';
    out.style.height = '140px';
    out.style.resize = 'vertical';
    out.style.borderRadius = '8px';
    out.style.border = '1px solid rgba(255,255,255,0.25)';
    out.style.background = 'rgba(0,0,0,0.35)';
    out.style.color = '#fff';
    out.style.padding = '8px';
    out.style.boxSizing = 'border-box';

    btnMissing.onclick = () => safe(()=>{
      ensureI18nWrapped();
      const i18n = window.__i18n;
      const keys = i18n && i18n.__missingKeys ? Array.from(i18n.__missingKeys).sort() : [];
      out.value = keys.length ? keys.join('\n') : '(none)';
      out.focus(); out.select();
    });

    btnExport.onclick = () => safe(()=>{
      const i18n = window.__i18n;
      if(!i18n){ out.value='__i18n not found'; return; }
      const payload = {
        lang: (i18n.getLang ? i18n.getLang() : (i18n.lang || null)),
        dict: i18n.dict || i18n.table || i18n.messages || i18n._dict || null,
        dicts: i18n.dicts || i18n.DICTS || null
      };
      out.value = JSON.stringify(payload, null, 2);
      out.focus(); out.select();
    });

    wrap.appendChild(btnMissing);
    wrap.appendChild(btnExport);
    wrap.appendChild(out);

    document.body.appendChild(wrap);
    return wrap;
  }

  function boot(){
    if(!isDev()) return;
    ensureI18nWrapped();
    ensureLauncher();
    buildPanel();
    showPanel(false);
  }

  // 起動の揺れ（manifest順やDOM構築）を吸収
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', ()=>setTimeout(boot, 600));
  }else{
    setTimeout(boot, 600);
  }
  setTimeout(boot, 1200);
})();
