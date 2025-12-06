(function(){
  "use strict";
  const ID = 'preview_sync';

  function initUI(parent){
    const wrap = document.createElement('div');
    wrap.style.marginBottom = "10px";
    
    // ★ 修正点: src を色彩豊かなサンプル画像(Picsum)に変更しました
    // 必要に応じて、ローカルの画像パス（例: "images/sample.jpg"）に変更してください。
    const sampleImageURL = "https://picsum.photos/id/1015/600/400"; 

    wrap.innerHTML = `
      <div id="preview-area" style="position:relative;width:100%;min-height:240px;background:#222;color:#fff;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:8px;">
        <img id="preview-bg" src="${sampleImageURL}" style="width:100%;height:auto;object-fit:cover;transition:filter 0.1s ease;" alt="preview" crossorigin="anonymous" />
        
        <div id="preview-overlay" style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:flex;align-items:flex-end;padding:10px;">
          <span style="background:rgba(0,0,0,0.5);padding:4px 8px;border-radius:4px;font-size:0.8em;">Preview Sample</span>
        </div>
      </div>
      <p style="font-size:0.8em;color:#666;margin-top:4px;">※トーン補正（Visual Sync）のスライダーを動かすと、色が変化します</p>
    `;
    parent.appendChild(wrap);
  }

  function getTags(){ return []; }

  // ✅ スライダー更新に対応
  window.__previewSyncUpdate = function(){
    const bg = document.getElementById('preview-bg');
    if (!bg) return;

    // #list-visualsync 内のスライダーを探す
    const sliders = document.querySelectorAll('#list-visualsync input[type="range"]');
    
    let brightness = 1, contrast = 1, saturate = 1, warmth = 0, exposure = 1;

    sliders.forEach(sl => {
      const key = sl.dataset.key;
      const val = parseInt(sl.value, 10);
      const ratio = val / 100;

      if (key === 'brightness') brightness = ratio;
      else if (key === 'contrast') contrast = ratio;
      else if (key === 'saturation') saturate = ratio;
      else if (key === 'warmth') warmth = (ratio - 1) * 30; // 色相回転
      else if (key === 'exposure') exposure = ratio;
    });

    // CSSフィルターを適用
    bg.style.filter = `
      brightness(${brightness * exposure})
      contrast(${contrast})
      saturate(${saturate})
      hue-rotate(${warmth}deg)
    `;
  };

  window.__registerPromptPart(ID, 1, { initUI, getTags });
})();

