(function(){
  "use strict";

  function q(sel, root){ return (root || document).querySelector(sel); }
  function qa(sel, root){ return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  var syncLock = false;
  var toastTimer = null;
  var lastToastKey = "";
  var lastToastAt = 0;
  var TOAST_MS = 1600;
  var annotateTimer = null;
  var noteObserver = null;

  function ensureBridgeStyles(){
    if (document.getElementById('pair-helper-bridge-style')) return;
    var style = document.createElement('style');
    style.id = 'pair-helper-bridge-style';
    style.textContent = [
      '.pair-helper-bridge-note{margin-top:6px;padding:6px 8px;border-radius:8px;background:rgba(37,99,235,0.08);border:1px solid rgba(37,99,235,0.18);color:#1d4ed8;font-size:11px;font-weight:700;line-height:1.35;}',
      '.pair-helper-bridge-note strong{font-weight:900;}',
      '.pair-helper-bridge-note.is-active{background:rgba(16,185,129,0.10);border-color:rgba(16,185,129,0.25);color:#047857;}'
    ].join('');
    document.head.appendChild(style);
  }

  function getCardBody(cb){
    var card = cb && (cb.closest('label') || cb.parentElement);
    if (!card) return null;
    var kids = Array.prototype.slice.call(card.children || []);
    for (var i = 0; i < kids.length; i++) {
      if (kids[i] !== cb) return kids[i];
    }
    return card;
  }

  function annotatePairHelperCards(){
    ensureBridgeStyles();
    var boxes = qa('#list-preset_packs input.preset-pack-cb');
    for (var i = 0; i < boxes.length; i++) {
      var cb = boxes[i];
      if (!isPairHelperCheckbox(cb)) continue;
      var body = getCardBody(cb);
      if (!body) continue;
      var note = body.querySelector('.pair-helper-bridge-note');
      if (!note) {
        note = document.createElement('div');
        note.className = 'pair-helper-bridge-note';
        body.appendChild(note);
      }
      note.innerHTML = '<strong>↔ 人物制御連動</strong><br>ONで <strong>1girl + 1boy</strong> に自動同期';
      if (cb.checked) note.classList.add('is-active');
      else note.classList.remove('is-active');
    }
  }

  function scheduleAnnotate(){
    if (annotateTimer) clearTimeout(annotateTimer);
    annotateTimer = setTimeout(function(){
      annotateTimer = null;
      try { annotatePairHelperCards(); } catch(e) {}
    }, 30);
  }

  function observePresetPackUI(){
    var root = document.getElementById('list-preset_packs');
    if (!root || noteObserver) return;
    noteObserver = new MutationObserver(function(){
      scheduleAnnotate();
    });
    noteObserver.observe(root, { childList: true, subtree: true });
    scheduleAnnotate();
  }

  function isPairHelperCheckbox(cb){
    try {
      if (!cb) return false;
      var card = cb.closest('label') || cb.parentElement;
      var txt = ((card && card.textContent) || '').replace(/\s+/g, ' ');
      return /ペア補助|Pair Helper/i.test(txt);
    } catch(e) {}
    return false;
  }

  function getCheckedPairHelperBoxes(){
    try {
      var checked = qa('#list-preset_packs input.preset-pack-cb:checked');
      return checked.filter(isPairHelperCheckbox);
    } catch(e) {}
    return [];
  }

  function isPairHelperChecked(){
    return getCheckedPairHelperBoxes().length > 0;
  }

  function getCastState(){
    var enabledEl = q('#cc-enable');
    var enabled = !!(enabledEl && enabledEl.checked);
    var girls = qa('input[id^="cc_g"]:checked').map(function(cb){ return (cb.dataset && cb.dataset.val) || cb.value || cb.id || ''; });
    var boys  = qa('input[id^="cc_b"]:checked').map(function(cb){ return (cb.dataset && cb.dataset.val) || cb.value || cb.id || ''; });
    var ok = enabled && girls.length === 1 && boys.length === 1 && girls[0] === '1girl' && boys[0] === '1boy';
    return { enabled: enabled, girls: girls, boys: boys, validPair: ok };
  }

  function ensureToast(){
    var el = document.getElementById('pair-helper-toast');
    if (el) return el;
    el = document.createElement('div');
    el.id = 'pair-helper-toast';
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    el.style.cssText = [
      'position:fixed',
      'left:50%',
      'bottom:132px',
      'transform:translateX(-50%) translateY(8px)',
      'z-index:99999',
      'max-width:min(92vw, 760px)',
      'width:max-content',
      'box-sizing:border-box',
      'padding:12px 16px',
      'border-radius:14px',
      'border:1px solid rgba(37,99,235,0.35)',
      'background:rgba(239,246,255,0.98)',
      'color:#1d4ed8',
      'box-shadow:0 10px 28px rgba(0,0,0,0.18)',
      'font-weight:800',
      'font-size:13px',
      'line-height:1.45',
      'letter-spacing:0.01em',
      'opacity:0',
      'pointer-events:none',
      'display:none',
      'transition:opacity .18s ease, transform .18s ease'
    ].join(';');
    document.body.appendChild(el);
    return el;
  }

  function showToast(text, key){
    var now = Date.now();
    if (key && lastToastKey === key && (now - lastToastAt) < (TOAST_MS + 250)) return;
    lastToastKey = key || '';
    lastToastAt = now;
    var el = ensureToast();
    el.textContent = text;
    el.style.display = 'block';
    el.style.opacity = '1';
    el.style.transform = 'translateX(-50%) translateY(0)';
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){
      el.style.opacity = '0';
      el.style.transform = 'translateX(-50%) translateY(8px)';
      setTimeout(function(){
        el.style.display = 'none';
      }, 190);
      lastToastKey = '';
    }, TOAST_MS);
  }

  function dispatchChange(el){
    if (!el) return;
    el.dispatchEvent(new Event('change', { bubbles: true }));
  }

  function syncPairCast(forceToast){
    if (syncLock) return false;
    if (!isPairHelperChecked()) return false;
    var enabledEl = q('#cc-enable');
    var girl1 = q('#cc_g1');
    var boy1 = q('#cc_b1');
    if (!enabledEl || !girl1 || !boy1) return false;

    syncLock = true;
    var changed = false;
    try {
      if (!enabledEl.checked) {
        enabledEl.checked = true;
        dispatchChange(enabledEl);
        changed = true;
      }

      qa('input[id^="cc_g"]').forEach(function(cb){
        var should = cb.id === 'cc_g1';
        if (!!cb.checked !== should) {
          cb.checked = should;
          dispatchChange(cb);
          changed = true;
        }
      });
      qa('input[id^="cc_b"]').forEach(function(cb){
        var should = cb.id === 'cc_b1';
        if (!!cb.checked !== should) {
          cb.checked = should;
          dispatchChange(cb);
          changed = true;
        }
      });
    } catch(e) {}
    syncLock = false;

    scheduleAnnotate();
    if (changed || forceToast) {
      showToast('🔗 ペア補助に合わせて人物制御を自動同期したよ（1girl + 1boy）', 'pair-sync');
      if (typeof window.generateOutput === 'function') {
        try { window.generateOutput(); } catch(e) {}
      }
    }
    return changed;
  }

  function shouldHandleTarget(target){
    if (!target) return false;
    if (target.id === 'cc-enable') return true;
    if (/^cc_g\d+$/.test(target.id || '')) return true;
    if (/^cc_b\d+$/.test(target.id || '')) return true;
    if (target.className && String(target.className).indexOf('preset-pack-cb') !== -1) return true;
    return false;
  }

  function handleChange(ev){
    var target = ev && ev.target;
    if (!shouldHandleTarget(target)) return;
    try {
      if (syncLock) return;
      if (!isPairHelperChecked()) return;
      syncPairCast(!getCastState().validPair);
    } catch(e) {}
  }

  function bind(){
    if (document.__pairHelperBridgeBound) return;
    document.__pairHelperBridgeBound = true;
    document.addEventListener('change', handleChange, true);
    observePresetPackUI();
    scheduleAnnotate();
  }

  function boot(){
    bind();
    var tries = 0;
    var t = setInterval(function(){
      bind();
      observePresetPackUI();
      scheduleAnnotate();
      syncPairCast(false);
      tries += 1;
      if ((document.getElementById('genBtn') && document.getElementById('cc-enable')) || tries > 160) clearInterval(t);
    }, 250);
    document.addEventListener('DOMContentLoaded', function(){
      bind();
      observePresetPackUI();
      scheduleAnnotate();
      syncPairCast(false);
    }, { once: true });
    window.addEventListener('promptPartMounted', function(){
      bind();
      observePresetPackUI();
      scheduleAnnotate();
      syncPairCast(false);
    });
  }

  boot();
})();


(function(){
  "use strict";
  function q(sel, root){ return (root || document).querySelector(sel); }
  function qa(sel, root){ return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  var promptTimer = null;
  var lastPromptPackId = '';
  var promptContext = null;

  function getCastState(){
    var enabledEl = q('#cc-enable');
    var girls = qa('input[id^="cc_g"]:checked').map(function(cb){ return (cb.dataset && cb.dataset.val) || cb.value || cb.id || ''; });
    var boys  = qa('input[id^="cc_b"]:checked').map(function(cb){ return (cb.dataset && cb.dataset.val) || cb.value || cb.id || ''; });
    return {
      enabled: !!(enabledEl && enabledEl.checked),
      validPair: !!(enabledEl && enabledEl.checked && girls.length === 1 && boys.length === 1 && girls[0] === '1girl' && boys[0] === '1boy')
    };
  }

  function isPresetPackCheckbox(el){
    return !!(el && el.className && String(el.className).indexOf('preset-pack-cb') !== -1);
  }

  function getCardLabel(cb){
    try {
      var card = cb && (cb.closest('label') || cb.parentElement);
      if (!card) return '';
      var textWrap = card.querySelector('div');
      if (!textWrap) return (card.textContent || '').trim();
      var main = textWrap.querySelector('div');
      return ((main && main.textContent) || card.textContent || '').trim();
    } catch (e) {}
    return '';
  }

  function getLabelStem(label){
    return String(label || '')
      .split('/')[0]
      .replace(/（ペア補助）/g, '')
      .replace(/・男側補強/g, '')
      .replace(/・女側補強/g, '')
      .replace(/・関係性補強/g, '')
      .replace(/\(Pair Helper\)/gi, '')
      .replace(/\(Male Anchor\)/gi, '')
      .replace(/\(Female Anchor\)/gi, '')
      .replace(/\(Pair Relation\)/gi, '')
      .replace(/\s+/g, '')
      .trim();
  }

  function getPackStem(packId){
    var src = String(packId || '');
    var patterns = [
      /_(?:pair_relation)_(.+)$/,
      /_(?:pair_female)_(.+)$/,
      /_(?:pair_male)_(.+)$/,
      /_(?:complete|pair|base|custom|setting|quality_set|quality_detail)_(.+)$/
    ];
    for (var i = 0; i < patterns.length; i++) {
      var m = src.match(patterns[i]);
      if (m) return m[1];
    }
    return '';
  }

  function openAncestorDetails(el){
    var node = el && el.parentElement;
    while (node) {
      if (String(node.tagName || '').toLowerCase() === 'details') node.open = true;
      node = node.parentElement;
    }
  }

  function dispatchChange(el){
    if (!el) return;
    el.dispatchEvent(new Event('change', { bubbles: true }));
  }

  function ensurePromptStyles(){
    if (document.getElementById('pair-helper-suggest-style')) return;
    var style = document.createElement('style');
    style.id = 'pair-helper-suggest-style';
    style.textContent = [
      '#pair-helper-suggest-toast{position:fixed;left:50%;bottom:132px;transform:translateX(-50%) translateY(8px);z-index:100000;max-width:min(94vw,760px);width:min(94vw,560px);box-sizing:border-box;padding:12px 14px;border-radius:14px;border:1px solid rgba(37,99,235,0.35);background:rgba(255,255,255,0.99);color:#1f2937;box-shadow:0 10px 28px rgba(0,0,0,0.18);opacity:0;pointer-events:none;transition:opacity .18s ease, transform .18s ease;}',
      '#pair-helper-suggest-toast.is-open{opacity:1;pointer-events:auto;transform:translateX(-50%) translateY(0);}',
      '#pair-helper-suggest-toast .ph-title{font-size:13px;font-weight:900;line-height:1.45;color:#1d4ed8;}',
      '#pair-helper-suggest-toast .ph-sub{margin-top:4px;font-size:11px;line-height:1.45;color:#4b5563;}',
      '#pair-helper-suggest-toast .ph-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:10px;}',
      '#pair-helper-suggest-toast button{appearance:none;border:0;border-radius:10px;padding:10px 12px;font-size:12px;font-weight:800;cursor:pointer;line-height:1.35;}',
      '#pair-helper-suggest-toast .ph-male{background:#2563eb;color:#fff;}',
      '#pair-helper-suggest-toast .ph-female{background:#7c3aed;color:#fff;}',
      '#pair-helper-suggest-toast .ph-balance{background:#059669;color:#fff;}',
      '#pair-helper-suggest-toast .ph-manual{background:#f59e0b;color:#fff;}',
      '#pair-helper-suggest-toast .ph-close{background:#e5e7eb;color:#374151;grid-column:1 / -1;}',
      '@media (max-width:480px){#pair-helper-suggest-toast .ph-actions{grid-template-columns:1fr;}#pair-helper-suggest-toast .ph-close{grid-column:auto;}}'
    ].join('');
    document.head.appendChild(style);
  }

  function ensurePrompt(){
    ensurePromptStyles();
    var el = document.getElementById('pair-helper-suggest-toast');
    if (el) return el;
    el = document.createElement('div');
    el.id = 'pair-helper-suggest-toast';
    el.innerHTML = [
      '<div class="ph-title"></div>',
      '<div class="ph-sub">男主体・女主体・均衡ペアから選べる。迷う時は手動へ。</div>',
      '<div class="ph-actions">',
      '  <button type="button" class="ph-male">男主体</button>',
      '  <button type="button" class="ph-female">女主体</button>',
      '  <button type="button" class="ph-balance">均衡ペア</button>',
      '  <button type="button" class="ph-manual">手動で選ぶ</button>',
      '  <button type="button" class="ph-close">今は閉じる</button>',
      '</div>'
    ].join('');
    el.querySelector('.ph-close').addEventListener('click', function(){ hidePrompt(true); });
    el.querySelector('.ph-male').addEventListener('click', function(){ runPromptAction('male'); });
    el.querySelector('.ph-female').addEventListener('click', function(){ runPromptAction('female'); });
    el.querySelector('.ph-balance').addEventListener('click', function(){ runPromptAction('balanced'); });
    el.querySelector('.ph-manual').addEventListener('click', function(){ runPromptAction('manual'); });
    document.body.appendChild(el);
    return el;
  }

  function hidePrompt(clearKey){
    var el = document.getElementById('pair-helper-suggest-toast');
    if (!el) return;
    el.classList.remove('is-open');
    if (promptTimer) clearTimeout(promptTimer);
    promptTimer = null;
    promptContext = null;
    if (clearKey) lastPromptPackId = '';
  }

  function runPromptAction(mode){
    var ctx = promptContext;
    hidePrompt(true);
    if (!ctx) return;
    try {
      if (mode === 'manual') {
        openManualSelection(ctx);
      } else {
        applyPairProfile(ctx, mode);
      }
    } catch (e) {}
  }

  function showHint(text, key){
    try {
      if (typeof window.showToast === 'function') return window.showToast(text, key);
    } catch (e) {}
    var el = document.getElementById('pair-helper-toast');
    if (!el) return;
    var now = Date.now();
    var lastAt = Number(el.dataset.lastAt || '0');
    if (key && el.dataset.lastKey === key && (now - lastAt) < (TOAST_MS + 250)) return;
    el.dataset.lastKey = key || '';
    el.dataset.lastAt = String(now);
    el.textContent = text;
    el.style.display = 'block';
    el.style.opacity = '1';
    el.style.transform = 'translateX(-50%) translateY(0)';
    setTimeout(function(){
      el.style.opacity = '0';
      el.style.transform = 'translateX(-50%) translateY(8px)';
      setTimeout(function(){
        el.style.display = 'none';
      }, 190);
      el.dataset.lastKey = '';
      el.dataset.lastAt = '0';
    }, TOAST_MS);
  }

  function showPairPrompt(message, packId, ctx){
    var el = ensurePrompt();
    if (packId && lastPromptPackId === packId && el.classList.contains('is-open')) return;
    lastPromptPackId = packId || '';
    promptContext = ctx || null;
    var title = el.querySelector('.ph-title');
    if (title) title.textContent = message;
    el.classList.add('is-open');
    if (promptTimer) clearTimeout(promptTimer);
    promptTimer = setTimeout(function(){ hidePrompt(true); }, 7600);
  }

  function findMatchingRoleCheckbox(completeCb, role){
    var cid = completeCb && (completeCb.getAttribute('data-collection-id') || '');
    if (!cid) return null;
    var selector = '#list-preset_packs input.preset-pack-cb[data-collection-id="' + cid.replace(/"/g, '\\"') + '"][data-collection-role="' + String(role || '').replace(/"/g, '\\"') + '"]';
    var candidates = qa(selector);
    if (!candidates.length) return null;

    var completeStem = getPackStem(completeCb.getAttribute('data-pack-id') || '');
    for (var i = 0; i < candidates.length; i++) {
      if (getPackStem(candidates[i].getAttribute('data-pack-id') || '') === completeStem) return candidates[i];
    }

    var labelStem = getLabelStem(getCardLabel(completeCb));
    for (var j = 0; j < candidates.length; j++) {
      if (getLabelStem(getCardLabel(candidates[j])) === labelStem) return candidates[j];
    }
    return null;
  }

  function getProfileContext(completeCb){
    return {
      complete: completeCb,
      pair: findMatchingRoleCheckbox(completeCb, 'pair_helper'),
      male: findMatchingRoleCheckbox(completeCb, 'pair_male'),
      female: findMatchingRoleCheckbox(completeCb, 'pair_female'),
      relation: findMatchingRoleCheckbox(completeCb, 'pair_relation')
    };
  }

  function hasExistingPairSelection(ctx){
    if (!ctx) return false;
    return !!((ctx.pair && ctx.pair.checked) || (ctx.male && ctx.male.checked) || (ctx.female && ctx.female.checked) || (ctx.relation && ctx.relation.checked));
  }

  function clearCollectionPairRoles(collectionId){
    if (!collectionId) return;
    var roles = ['pair_helper', 'pair_male', 'pair_female', 'pair_relation'];
    for (var i = 0; i < roles.length; i++) {
      var selector = '#list-preset_packs input.preset-pack-cb[data-collection-id="' + collectionId.replace(/"/g, '\\"') + '"][data-collection-role="' + roles[i] + '"]';
      var list = qa(selector);
      for (var j = 0; j < list.length; j++) {
        if (list[j].checked) {
          list[j].checked = false;
          dispatchChange(list[j]);
        }
      }
    }
  }

  function setChecked(cb){
    if (!cb) return;
    if (!cb.checked) {
      cb.checked = true;
      dispatchChange(cb);
    }
    openAncestorDetails(cb);
  }

  function applyPairProfile(ctx, mode){
    if (!ctx || !ctx.complete) return;
    var collectionId = ctx.complete.getAttribute('data-collection-id') || '';
    clearCollectionPairRoles(collectionId);

    if (ctx.pair) setChecked(ctx.pair);
    if (mode === 'male' || mode === 'balanced') {
      if (ctx.male) setChecked(ctx.male);
    }
    if (mode === 'female' || mode === 'balanced') {
      if (ctx.female) setChecked(ctx.female);
    }
    if (ctx.relation) setChecked(ctx.relation);

    if (typeof window.generateOutput === 'function') {
      try { window.generateOutput(); } catch (e) {}
    }

    var setName = getLabelStem(getCardLabel(ctx.complete)) || 'このセット';
    var modeText = mode === 'male' ? '男主体' : mode === 'female' ? '女主体' : '均衡ペア';
    showHint('🤝 ' + setName + ' を ' + modeText + ' で追加したよ', 'pair-profile-' + (ctx.complete.getAttribute('data-pack-id') || setName) + '-' + mode);
  }

  function openManualSelection(ctx){
    if (!ctx) return;
    [ctx.pair, ctx.male, ctx.female, ctx.relation].forEach(function(cb){ if (cb) openAncestorDetails(cb); });
    var setName = getLabelStem(getCardLabel(ctx.complete)) || 'このセット';
    showHint('🧩 ' + setName + ' のペア補助を手動で選べるように開いたよ', 'pair-manual-' + (ctx.complete && ctx.complete.getAttribute('data-pack-id') || setName));
  }

  function handle(ev){
    var target = ev && ev.target;
    if (!isPresetPackCheckbox(target) || !target.checked) return;
    var role = target.getAttribute('data-collection-role') || '';
    if (role !== 'complete_set') return;
    var cast = getCastState();
    if (!cast.validPair) return;
    var ctx = getProfileContext(target);
    if (!ctx.pair) return;
    if (hasExistingPairSelection(ctx)) return;
    var setName = getLabelStem(getCardLabel(target)) || 'このセット';
    showPairPrompt('1boy, 1girl を選んでいます。『' + setName + '』のペア演出をどう寄せますか？', target.getAttribute('data-pack-id') || '', ctx);
  }

  document.addEventListener('change', handle, true);
})();
