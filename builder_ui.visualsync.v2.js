(function(){
  "use strict";
  
  const ID = 'visualsync';
  const VERSION = 2; // 検索支援・プレビュー統合版 (Fix: 変数名エラー修正)

  // ★ ここに画像URLを登録すると、検索ボタンの代わりに画像が表示されます
  // 例: "bikini": "https://example.com/bikini.jpg",
  const REFERENCE_IMAGES = {
    // ユーザーが自由に登録可能
  };

  const SLIDERS = [
    { key: 'brightness', label: '明るさ (Bright)', default: 100 },
    { key: 'contrast', label: 'コントラスト (Contrast)', default: 100 },
    { key: 'saturation', label: '彩度 (Saturate)', default: 100 },
    { key: 'warmth', label: '色温度 (Warmth)', default: 100 },
    { key: 'exposure', label: '露出 (Exposure)', default: 100 }
  ];

  // グローバル更新関数
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

  // 選択アイテムの表示更新ロジック
  function updateReferenceInfo(label, enTag) {
    const infoArea = document.getElementById('preview-info-overlay');
    const searchBtn = document.getElementById('preview-search-btn');
    const refInfoText = document.getElementById('preview-info-text');
    const bgImg = document.getElementById('preview-bg');
    
    if (!infoArea) return;

    // テキスト更新
    // "ビキニ / bikini" のような文字列から日本語部分だけ抽出して見やすくする
    let displayLabel = label.split('/')[0].trim();
    if(refInfoText) refInfoText.textContent = `選択中: ${displayLabel}`;
    infoArea.style.opacity = 1;

    // カスタム画像があるかチェック
    const keywords = enTag.split(',').map(s => s.trim().toLowerCase());
    let foundImg = null;
    
    for (let k of keywords) {
      if (REFERENCE_IMAGES[k]) {
        foundImg = REFERENCE_IMAGES[k];
        break;
      }
    }

    if (foundImg) {
      // 登録画像があればそれを表示
      bgImg.src = foundImg;
      if(searchBtn) searchBtn.style.display = "none";
    } else {
      // なければ検索ボタンを表示
      if(searchBtn) {
        searchBtn.style.display = "inline-block";
        searchBtn.onclick = (e) => {
          e.preventDefault();
          // "tag anime art" で検索
          const query = encodeURIComponent(`${enTag} anime art`);
          window.open(`https://www.google.com/search?tbm=isch&q=${query}`, '_blank');
        };
      }
    }
  }

  function createPreviewArea() {
    const wrap = document.createElement('div');
    wrap.style.marginBottom = "15px";
    wrap.style.border = "1px solid #ddd";
    wrap.style.borderRadius = "6px";
    wrap.style.overflow = "hidden";
    wrap.style.position = "relative";
    wrap.style.backgroundColor = "#222";
    
    // デフォルト画像
    const defaultImg = "https://picsum.photos/id/1015/600/400"; 

    wrap.innerHTML = `
      <div id="preview-area" style="position:relative;width:100%;min-height:220px;display:flex;align-items:center;justify-content:center; overflow:hidden;">
        <img id="preview-bg" src="${defaultImg}" style="width:100%;height:100%;object-fit:cover;transition:filter 0.1s ease; opacity:0.7;" alt="preview" crossorigin="anonymous" />
        
        <div id="preview-info-overlay" style="position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; pointer-events:none; opacity: 0; transition: opacity 0.3s;">
          <div id="preview-info-text" style="
            color: #fff; 
            font-weight: bold; 
            font-size: 1.2em; 
            text-shadow: 0 2px 4px rgba(0,0,0,0.8); 
            background: rgba(0,0,0,0.6); 
            padding: 5px 15px; 
            border-radius: 20px;
            margin-bottom: 10px;">
            Preview Area
          </div>
          <button id="preview-search-btn" style="
            display:none; 
            pointer-events:auto; 
            cursor:pointer; 
            background:#4285f4; 
            color:#fff; 
            border:none; 
            padding:8px 16px; 
            border-radius:4px; 
            font-size:0.9em; 
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);">
            🔍 画像検索で確認
          </button>
        </div>
      </div>
    `;
    return wrap;
  }

  function createSliderRow(field) {
    const row = document.createElement('div');
    row.style.marginBottom = '6px';
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
    slider.style.margin = '0 10px';
    slider.style.cursor = 'pointer';

    const percent = document.createElement('span');
    percent.style.width = '40px';
    percent.style.textAlign = 'right';
    percent.style.fontSize = '0.85em';
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

    // 1. プレビューエリア
    container.appendChild(createPreviewArea());

    // 2. リセットボタン
    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'flex-end';
    header.style.marginBottom = '5px';
    const resetBtn = document.createElement('button');
    resetBtn.textContent = '補正リセット';
    resetBtn.style.fontSize = '0.8em';
    resetBtn.onclick = (e) => {
      e.preventDefault();
      container.querySelectorAll('input[type="range"]').forEach(sl => {
        sl.value = 100;
        sl.dispatchEvent(new Event('input'));
      });
    };
    header.appendChild(resetBtn);
    container.appendChild(header);

    // 3. スライダー (ここを修正しました: FIELDS -> SLIDERS)
    const slidersWrap = document.createElement('div');
    slidersWrap.style.background = "#f5f5f5";
    slidersWrap.style.padding = "10px";
    slidersWrap.style.borderRadius = "6px";
    
    // ★ 修正箇所: 変数名を SLIDERS に統一
    SLIDERS.forEach(f => slidersWrap.appendChild(createSliderRow(f)));
    
    container.appendChild(slidersWrap);
    parent.appendChild(container);

    // ★ イベントリスナー登録: 全チェックボックスの変更を監視
    document.body.addEventListener('change', function(e) {
      if (e.target.type === 'checkbox' && e.target.dataset.en) {
        if (e.target.checked) {
          // 親のlabelテキストを取得
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

