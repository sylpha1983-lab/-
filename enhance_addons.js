// enhance_addons.js — 後付けアドオン（選択中タグバー）/ 自動再適用 + reset対応
(function(){
  if (window.__pbEnhanceAddons) return; // 二重適用防止
  window.__pbEnhanceAddons = true;

  var d=document, wired=false;
  function $(q,root){return (root||d).querySelector(q)}
  function $all(q,root){return Array.from((root||d).querySelectorAll(q))}

  // --- 選択中タグバーを生成（無ければ作る）
  function ensureBar(){
    var wrap = $('.wrap'); if(!wrap) return null;
    var bar = $('#selected-tags-bar');
    if(!bar){
      bar = d.createElement('div');
      bar.id = 'selected-tags-bar';
      bar.style.cssText = [
        'position:sticky','top:0','z-index:9','background:#fff',
        'border-bottom:1px solid #e5e7eb','padding:8px 12px',
        'display:flex','gap:8px','flex-wrap:wrap','align-items:center'
      ].join(';');

      // 全解除（アドオン内完結）
      var clear = d.createElement('button');
      clear.textContent = '全解除';
      clear.className = 'btn';
      clear.style.marginRight = '8px';
      clear.addEventListener('click', function(e){
        e.preventDefault();
        $all('input[type="checkbox"]:checked').forEach(function(n){ n.checked=false; });
        buildChips();
      });

      var holder = d.createElement('div');
      holder.id='chips-holder';
      holder.style.cssText='display:flex;gap:8px;flex-wrap:wrap;align-items:center';

      bar.appendChild(clear);
      bar.appendChild(holder);

      // 画面上部（.wrap の上）に差し込む：既存UIはそのまま
      wrap.parentNode.insertBefore(bar, wrap);
    }
    return bar;
  }

  // --- チップ再構築
  function buildChips(){
    var holder = $('#chips-holder');
    if(!holder){
      var bar = ensureBar();
      if(!bar) return;
      holder = $('#chips-holder');
    }
    holder.innerHTML = '';
    $all('input[type="checkbox"]:checked').forEach(function(ch){
      var lab = ch.closest('label');
      var text = lab ? lab.textContent.trim() : (ch.dataset.id || '(tag)');
      var chip = d.createElement('span');
      chip.style.cssText = 'background:#f2f4f7;border:1px solid #e5e7eb;border-radius:999px;padding:6px 10px;display:inline-flex;gap:6px;align-items:center;font-size:12px';
      var t = d.createElement('span'); t.textContent = text;
      var x = d.createElement('button'); x.textContent = '×';
      x.style.cssText = 'border:none;background:transparent;cursor:pointer;font-weight:700';
      x.addEventListener('click', function(e){
        e.preventDefault();
        ch.checked = false;
        buildChips();
      });
      chip.appendChild(t); chip.appendChild(x);
      holder.appendChild(chip);
    });
  }

  // --- DOM変化を監視（renderAll後の再描画にも追随）
  var mo = new MutationObserver(function(muts){
    var need=false;
    for(var i=0;i<muts.length;i++){
      var m=muts[i];
      if((m.addedNodes && m.addedNodes.length) || (m.removedNodes && m.removedNodes.length)){ need=true; break; }
    }
    if(need){ ensureBar(); buildChips(); wireControls(); }
  });

  // --- 既存ボタンにだけフック（重複登録防止）
  function wireControls(){
    if(wired) return;
    wired = true;

    // 既存の reset ボタン：内部で checked を直接外す → change が飛ばないため明示的に再構築
    var resetBtn = $('#reset');
    if(resetBtn){
      resetBtn.addEventListener('click', function(){
        // 既存のリセット処理が走った直後に実行
        setTimeout(buildChips, 0);
      }, {passive:true});
    }

    // 再読込（run()）でも一旦クリア
    var reloadBtn = $('#reloadBtn');
    if(reloadBtn){
      reloadBtn.addEventListener('click', function(){
        var holder = $('#chips-holder');
        if(holder) holder.innerHTML='';
      }, {passive:true});
    }

    // チェック状態が変わったら都度反映（イベント委譲）
    d.addEventListener('change', function(e){
      var t=e.target;
      if(t && t.matches && t.matches('input[type="checkbox"]')){
        buildChips();
      }
    }, {passive:true});
  }

  function arm(){
    var root = $('.wrap') || d.body;
    if(!root) return;
    ensureBar(); buildChips(); wireControls();
    mo.disconnect();
    mo.observe(root, {childList:true, subtree:true});
  }

  if(d.readyState==='loading'){
    d.addEventListener('DOMContentLoaded', arm);
  }else{
    arm();
  }
})();