(function(){
  const ID = 'visualsync';
  // プレビュー機能もこのファイルで管理するため、IDを統合的に扱う
  // ※ builder_core.v1.js では visualsync のみがマウントされる想定

  const FIELDS = [
    { key: 'brightness', label: '明るさ (Brightness)', default: 100 },
    { key: 'contrast', label: 'コントラスト (Contrast)', default: 100 },
    { key: 'saturation', label: '彩度 (Saturation)', default: 100 },
    { key: 'warmth', label: '色温度 (Warmth)', default: 100 },
    { key: 'exposure', label: '露出 (Exposure)', default: 100 }
  ];

  // プレビュー更新関数 (グローバル公開)
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
    wrap.style.marginBottom = "15px";
    wrap.style.border = "1px solid #ddd";
    wrap.style.borderRadius = "6px";
    wrap.style.overflow = "hidden";
    
    // サンプル画像 (Picsum)
    const sampleImageURL = "https://picsum.photos/id/1015/600/400"; 

    wrap.innerHTML = `
      <div id="preview-area" style="position:relative;width:100%;min-height:200px;background:#222;display:flex;align-items:center;justify-content:center;">
        <img id="preview-bg" src="${sampleImageURL}" style="width:100%;height:auto;object-fit:cover;transition:filter 0.1s ease;" alt="preview" crossorigin="anonymous" />
        <div style="position:absolute;bottom:5px;right:5px;color:rgba(255,255,255,0.7);font-size:0.7em;pointer-events:none;">Preview Sample</div>
      </div>
    `;
    return wrap;
  }

  function createSliderRow(field) {
    const row = document.createElement('div');
    row.style.marginBottom = '8px';
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    
    const label = document.createElement('label');
    label.textContent = `${field.label}`;
    label.style.flex = '1';
    label.style.fontSize = '0.9em';
    
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = 50;
    slider.max = 200;
    slider.value = field.default;
    slider.step = 1;
    slider.dataset.key = field.key;
    slider.className = 'visualsync-slider'; 
    slider.style.flex = '2';
    slider.style.margin = '0 10px';

    const percent = document.createElement('span');
    percent.style.width = '45px';
    percent.style.textAlign = 'right';
    percent.style.fontSize = '0.9em';
    percent.textContent = `${field.default}%`;
    percent.className = 'visualsync-value'; 

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
    // 親コンテナの中身をクリア（二重表示防止）
    parent.innerHTML = "";
    
    // コンテナ自体のスタイル調整 (builder_coreでのDetailsラップ前の中身)
    const container = document.createElement('div');
    container.style.padding = "5px";

    // 1. プレビューエリアを配置
    container.appendChild(createPreviewArea());

    // 2. スライダーエリアのヘッダー（リセットボタン）
    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'flex-end';
    header.style.marginBottom = '10px';

    const resetBtn = document.createElement('button');
    resetBtn.textContent = '数値をリセット';
    resetBtn.style.fontSize = '0.85em';
    resetBtn.style.padding = '4px 10px';
    resetBtn.style.backgroundColor = '#f0f0f0';
    resetBtn.style.border = '1px solid #ccc';
    resetBtn.style.borderRadius = '4px';
    resetBtn.style.cursor = 'pointer';
    
    resetBtn.onclick = (e) => {
      e.preventDefault();
      const sliders = container.querySelectorAll('input[type="range"]');
      sliders.forEach(sl => {
        sl.value = 100;
        sl.dispatchEvent(new Event('input'));
      });
    };

    header.appendChild(resetBtn);
    container.appendChild(header);

    // 3. スライダー群を配置 (Detailsを使わず直接配置)
    const slidersWrap = document.createElement('div');
    FIELDS.forEach(f => slidersWrap.appendChild(createSliderRow(f)));
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

  window.__registerPromptPart(ID, 1, { initUI, getTags });
})();

