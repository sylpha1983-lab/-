(function(){
  "use strict";

  function q(sel, root){ return (root || document).querySelector(sel); }
  function qa(sel, root){ return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function isPairHelperChecked(){
    try {
      var checked = qa('#list-preset_packs input.preset-pack-cb:checked');
      for (var i = 0; i < checked.length; i++) {
        var cb = checked[i];
        var card = cb.closest('label') || cb.parentElement;
        var txt = ((card && card.textContent) || '').replace(/\s+/g, ' ');
        if (/ペア補助|Pair Helper/i.test(txt)) return true;
      }
    } catch(e) {}
    return false;
  }

  function getCastState(){
    var enabledEl = q('#cc-enable');
    var enabled = !!(enabledEl && enabledEl.checked);
    var girls = qa('input[id^="cc_g"]:checked').map(function(cb){ return (cb.dataset && cb.dataset.val) || cb.value || cb.id || ''; });
    var boys  = qa('input[id^="cc_b"]:checked').map(function(cb){ return (cb.dataset && cb.dataset.val) || cb.value || cb.id || ''; });
    var ok = enabled && girls.length === 1 && boys.length === 1 && girls[0] === '1girl' && boys[0] === '1boy';
    return { enabled: enabled, girls: girls, boys: boys, validPair: ok };
  }

  function shouldWarn(){
    if (!isPairHelperChecked()) return false;
    return !getCastState().validPair;
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
      'border:1px solid rgba(183,128,0,0.45)',
      'background:rgba(255,245,214,0.98)',
      'color:#6b4b00',
      'box-shadow:0 10px 28px rgba(0,0,0,0.18)',
      'font-weight:800',
      'font-size:13px',
      'line-height:1.45',
      'letter-spacing:0.01em',
      'opacity:0',
      'pointer-events:none',
      'transition:opacity .18s ease, transform .18s ease'
    ].join(';');
    document.body.appendChild(el);
    return el;
  }

  var toastTimer = null;
  function showToast(){
    var el = ensureToast();
    el.textContent = '⚠ ペア補助は男女ペア向けです。現在の人物制御と競合する可能性があります（有効条件: 人物制御ON + 1girl + 1boy）';
    el.style.opacity = '1';
    el.style.transform = 'translateX(-50%) translateY(0)';
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){
      el.style.opacity = '0';
      el.style.transform = 'translateX(-50%) translateY(8px)';
    }, 6400);
  }

  function bind(){
    var btn = document.getElementById('genBtn');
    if (!btn || btn.__pairHelperToastBound) return;
    btn.__pairHelperToastBound = true;
    btn.addEventListener('click', function(){
      try {
        if (shouldWarn()) showToast();
      } catch(e) {}
    }, true);
  }

  function boot(){
    bind();
    var tries = 0;
    var t = setInterval(function(){
      bind();
      tries += 1;
      if (document.getElementById('genBtn') || tries > 120) clearInterval(t);
    }, 250);
    document.addEventListener('DOMContentLoaded', bind, { once: true });
  }

  boot();
})();
