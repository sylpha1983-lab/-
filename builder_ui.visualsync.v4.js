(function(){
  "use strict";
  
  const ID = 'visualsync';
  const VERSION = 4; // トーン補正プレビュー復活版

  const SLIDERS = [
    { key: 'brightness', label: '明るさ (Bright)', default: 100 },
    { key: 'contrast', label: 'コントラスト (Contrast)', default: 100 },
    { key: 'saturation', label: '彩度 (Saturate)', default: 100 },
    { key: 'warmth', label: '色温度 (Warmth)', default: 100 },
    { key: 'exposure', label: '露出 (Exposure)', default: 100 }
  ];

  window.__previewSyncUpdate = function(){
    const bg = document.getElementById('preview-bg');
    if (!bg) return;

    const sliders = document.querySelectorAll('.visualsync-slider');
    let brightness = 1, contrast = 1, saturate = 1, warmth = 0, exposure = 1;

    sliders.forEach(sl => {
      const key = sl.dataset.key;
      const val = parseInt(sl.value, 10);
      const ratio = val / 100;

      if (key === 'brightness') brightness = ratio;
      else if (key === 'contrast') contrast = ratio;
      else if (key === 'saturation') saturate = ratio;
      else if (key === 'warmth') warmth = (ratio - 1) * 30; 
      else if (key === 'exposure') exposure = ratio;
    });

    bg.style.filter = `
      brightness(${brightness * exposure})
      contrast(${contrast})
      saturate(${saturate})
      hue-rotate(${warmth}deg)
    `;
  };

  function createPreviewArea() {
    const wrap = document.createElement('div');
    wrap.style.marginBottom = "10px";
    wrap.style.border = "1px solid #ddd";
    wrap.style.borderRadius = "6px";
    wrap.style.overflow = "hidden";
    wrap.style.position = "relative";
    wrap.style.backgroundColor = "#222";
    
    // トーン確認用のサンプル画像
    const defaultImg = "https://picsum.photos/id/1015/600/400"; 

    wrap.innerHTML = `
      <div id="preview-area" style="position:relative;width:100%;height:150px;display:flex;align-items:center;justify-content:center; overflow:hidden;">
        <img id="preview-bg" src="${defaultImg}" style="width:100%;height:100%;object-fit:cover;transition:filter 0.1s ease; opacity:0.9;" alt="preview" crossorigin="anonymous" />
        <div style="position:absolute; bottom:5px; right:5px; color:rgba(255,255,255,0.7); font-size:0.7em; pointer-events:none; background:rgba(0,0,0,0.5); padding:2px 6px; border-radius:4px;">
          Tone Preview
        </div>
      </div>
    `;
    return wrap;
  }

  function createSliderRow(field) {
    const row = document.createElement('div');
    row.style.marginBottom = '4px';
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    
    const label = document.createElement('label');
    label.textContent = `${field.label}`;
    label.style.flex = '1';
    label.style.fontSize = '0.85em';
    label.style.color = '#333';
    
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = 50;
    slider.max = 200;
    slider.value = field.default;
    slider.step = 1;
    slider.dataset.key = field.key;
    slider.className = 'visualsync-slider'; 
    slider.style.flex = '2';
    slider.style.margin = '0 8px';
    slider.style.cursor = 'pointer';

    const percent = document.createElement('span');
    percent.style.width = '35px';
    percent.style.textAlign = 'right';
    percent.style.fontSize = '0.8em';
    percent.textContent = `${field.default}%`;

    slider.addEventListener('input', () => {
      percent.textContent = `${slider.value}%`;
      window.__previewSyncUpdate();
    });

    row.appendChild(label);
    row.appendChild(slider);
    row.appendChild(percent);
    return row;
  }

  function initUI(parent){
    parent.innerHTML = "";
    const container = document.createElement('div');
    container.style.padding = "5px";
    
    // ヘッダー
    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.marginBottom = '8px';
    
    const title = document.createElement('div');
    title.innerHTML = "🎨 <b>トーン・色調補正 (Color Adjust)</b>";
    title.style.fontSize = "0.9em";
    title.style.color = "#555";

    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'リセット';
    resetBtn.style.fontSize = '0.8em';
    resetBtn.style.padding = '2px 8px';
    resetBtn.style.cursor = 'pointer';
    resetBtn.onclick = (e) => {
      e.preventDefault();
      container.querySelectorAll('input[type="range"]').forEach(sl => {
        sl.value = 100;
        sl.dispatchEvent(new Event('input'));
      });
    };

    header.appendChild(title);
    header.appendChild(resetBtn);
    container.appendChild(header);

    // 1. プレビューエリア (復活)
    container.appendChild(createPreviewArea());

    // 2. スライダー
    const slidersWrap = document.createElement('div');
    slidersWrap.style.background = "#f9f9f9";
    slidersWrap.style.padding = "8px";
    slidersWrap.style.borderRadius = "6px";
    slidersWrap.style.border = "1px solid #eee";
    
    SLIDERS.forEach(f => slidersWrap.appendChild(createSliderRow(f)));
    container.appendChild(slidersWrap);

    parent.appendChild(container);
  }

  function getTags() {
    const tags = [];
    document.querySelectorAll('.visualsync-slider').forEach(sl => {
      const val = parseInt(sl.value, 10);
      if (val !== 100) tags.push(`${sl.dataset.key}:${val}%`);
    });
    return tags;
  }

  window.__registerPromptPart(ID, VERSION, { initUI, getTags });
})();

