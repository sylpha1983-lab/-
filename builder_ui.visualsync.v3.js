(function(){
  "use strict";
  
  const ID = 'visualsync';
  const VERSION = 3; // 服装カテゴリ内移動 & 固定機能追加版

  const REFERENCE_IMAGES = {};

  const SLIDERS = [
    { key: 'brightness', label: '明るさ', default: 100 },
    { key: 'contrast', label: 'コントラスト', default: 100 },
    { key: 'saturation', label: '彩度', default: 100 },
    { key: 'warmth', label: '色温度', default: 100 },
    { key: 'exposure', label: '露出', default: 100 }
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

  function updateReferenceInfo(label, enTag) {
    const infoArea = document.getElementById('preview-info-overlay');
    const searchBtn = document.getElementById('preview-search-btn');
    const refInfoText = document.getElementById('preview-info-text');
    const bgImg = document.getElementById('preview-bg');
    
    if (!infoArea) return;

    let displayLabel = label.split('/')[0].trim();
    if(refInfoText) refInfoText.textContent = `選択中: ${displayLabel}`;
    infoArea.style.opacity = 1;

    const keywords = enTag.split(',').map(s => s.trim().toLowerCase());
    let foundImg = null;
    
    for (let k of keywords) {
      if (REFERENCE_IMAGES[k]) {
        foundImg = REFERENCE_IMAGES[k];
        break;
      }
    }

    if (foundImg) {
      bgImg.src = foundImg;
      if(searchBtn) searchBtn.style.display = "none";
    } else {
      if(searchBtn) {
        searchBtn.style.display = "inline-block";
        searchBtn.onclick = (e) => {
          e.preventDefault();
          const query = encodeURIComponent(`${enTag} anime art`);
          window.open(`https://www.google.com/search?tbm=isch&q=${query}`, '_blank');
        };
      }
    }
  }

  function toggleSticky() {
    const container = document.getElementById('visualsync-main-container');
    const btn = document.getElementById('visualsync-pin-btn');
    
    if (container.classList.contains('sticky-mode')) {
      // 固定解除
      container.classList.remove('sticky-mode');
      container.style.position = "";
      container.style.bottom = "";
      container.style.left = "";
      container.style.width = "";
      container.style.zIndex = "";
      container.style.boxShadow = "";
      container.style.borderTop = "";
      btn.textContent = "📌 画面下に固定";
      btn.style.background = "#eee";
      btn.style.color = "#333";
    } else {
      // 固定適用
      container.classList.add('sticky-mode');
      container.style.position = "fixed";
      container.style.bottom = "0";
      container.style.left = "0";
      container.style.width = "100%";
      container.style.zIndex = "9999";
      container.style.backgroundColor = "#fff";
      container.style.boxShadow = "0 -2px 10px rgba(0,0,0,0.2)";
      container.style.borderTop = "2px solid #007bff";
      container.style.padding = "10px";
      btn.textContent = "🔓 固定解除";
      btn.style.background = "#007bff";
      btn.style.color = "#fff";
    }
  }

  function createPreviewArea() {
    const wrap = document.createElement('div');
    wrap.style.marginBottom = "10px";
    wrap.style.border = "1px solid #ddd";
    wrap.style.borderRadius = "6px";
    wrap.style.overflow = "hidden";
    wrap.style.position = "relative";
    wrap.style.backgroundColor = "#222";
    
    const defaultImg = "https://picsum.photos/id/1015/600/400"; 

    wrap.innerHTML = `
      <div id="preview-area" style="position:relative;width:100%;height:180px;display:flex;align-items:center;justify-content:center; overflow:hidden;">
        <img id="preview-bg" src="${defaultImg}" style="width:100%;height:100%;object-fit:cover;transition:filter 0.1s ease; opacity:0.7;" alt="preview" crossorigin="anonymous" />
        
        <div id="preview-info-overlay" style="position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; pointer-events:none; opacity: 0; transition: opacity 0.3s;">
          <div id="preview-info-text" style="
            color: #fff; 
            font-weight: bold; 
            font-size: 1.1em; 
            text-shadow: 0 2px 4px rgba(0,0,0,0.8); 
            background: rgba(0,0,0,0.6); 
            padding: 4px 12px; 
            border-radius: 20px;
            margin-bottom: 8px;">
            Preview
          </div>
          <button id="preview-search-btn" style="
            display:none; 
            pointer-events:auto; 
            cursor:pointer; 
            background:#4285f4; 
            color:#fff; 
            border:none; 
            padding:6px 12px; 
            border-radius:4px; 
            font-size:0.85em; 
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);">
            🔍 画像検索
          </button>
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
    label.style.fontSize = '0.8em';
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

  function initUI(container) {
    // 既存のコンテナ(Coreが作った空の箱)は使わず、Attireの中に注入する
    const attireSection = document.querySelector("#list-attire");
    const targetParent = attireSection || container;

    // 既に存在していれば削除（重複防止）
    const existing = document.getElementById("visualsync-main-container");
    if(existing) existing.remove();

    const mainContainer = document.createElement('div');
    mainContainer.id = "visualsync-main-container";
    mainContainer.style.marginTop = "15px";
    mainContainer.style.padding = "10px";
    mainContainer.style.backgroundColor = "#fdfdfd";
    mainContainer.style.borderTop = "2px dashed #ccc";

    // タイトルバー & ピンボタン
    const headerBar = document.createElement('div');
    headerBar.style.display = "flex";
    headerBar.style.justifyContent = "space-between";
    headerBar.style.alignItems = "center";
    headerBar.style.marginBottom = "8px";

    const title = document.createElement('div');
    title.innerHTML = "🛠️ <b>Visual Sync (Preview)</b>";
    title.style.color = "#555";
    
    const pinBtn = document.createElement('button');
    pinBtn.id = "visualsync-pin-btn";
    pinBtn.textContent = "📌 画面下に固定";
    pinBtn.style.fontSize = "0.8em";
    pinBtn.style.padding = "4px 8px";
    pinBtn.style.border = "1px solid #ccc";
    pinBtn.style.borderRadius = "4px";
    pinBtn.style.background = "#eee";
    pinBtn.style.cursor = "pointer";
    pinBtn.onclick = (e) => {
      e.preventDefault();
      toggleSticky();
    };

    headerBar.appendChild(title);
    headerBar.appendChild(pinBtn);
    mainContainer.appendChild(headerBar);

    // プレビューエリア
    mainContainer.appendChild(createPreviewArea());

    // スライダー
    const slidersWrap = document.createElement('div');
    slidersWrap.style.background = "#f0f0f0";
    slidersWrap.style.padding = "8px";
    slidersWrap.style.borderRadius = "6px";
    SLIDERS.forEach(f => slidersWrap.appendChild(createSliderRow(f)));
    mainContainer.appendChild(slidersWrap);

    // 注入実行
    targetParent.appendChild(mainContainer);

    // イベントリスナー
    document.body.addEventListener('change', function(e) {
      if (e.target.type === 'checkbox' && e.target.dataset.en) {
        if (e.target.checked) {
          const labelText = e.target.parentElement.textContent.trim();
          updateReferenceInfo(labelText, e.target.dataset.en);
        }
      }
    });
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
