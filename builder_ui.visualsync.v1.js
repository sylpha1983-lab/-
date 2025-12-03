(function(){
  const ID = 'visualsync';
  const FIELDS = [
    { key: 'brightness', label: '明るさ (Brightness)', default: 100 },
    { key: 'contrast', label: 'コントラスト (Contrast)', default: 100 },
    { key: 'saturation', label: '彩度 (Saturation)', default: 100 },
    { key: 'warmth', label: '色温度 (Warmth)', default: 100 },
    { key: 'exposure', label: '露出 (Exposure)', default: 100 }
  ];

  function createSliderRow(field) {
    const row = document.createElement('div');
    row.style.marginBottom = '8px';
    const label = document.createElement('label');
    label.textContent = `${field.label}:`;
    label.style.display = 'block';
    
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = 50;
    slider.max = 200;
    slider.value = field.default;
    slider.step = 1;
    slider.dataset.key = field.key;
    slider.className = 'visualsync-slider'; // クラスを追加して特定しやすくする

    const percent = document.createElement('span');
    percent.style.marginLeft = '8px';
    percent.textContent = `${field.default}%`;
    percent.className = 'visualsync-value'; // クラスを追加

    // スライダー操作時の処理
    slider.addEventListener('input', () => {
      percent.textContent = `${slider.value}%`;
      if (window.__previewSyncUpdate) window.__previewSyncUpdate();
    });

    row.appendChild(label);
    row.appendChild(slider);
    row.appendChild(percent);
    return row;
  }

  function initUI(parent){
    const section = document.createElement('div');
    section.className = 'visualsync-section';
    
    // ヘッダー部分（タイトル＋リセットボタン）
    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.marginBottom = '8px';

    const title = document.createElement('h2');
    title.textContent = 'トーン補正（Tone Adjustments）';
    title.style.margin = '0';

    // ★ 個別リセットボタンの作成
    const resetBtn = document.createElement('button');
    resetBtn.textContent = '補正リセット';
    resetBtn.style.fontSize = '0.8em';
    resetBtn.style.padding = '4px 8px';
    resetBtn.onclick = (e) => {
      e.preventDefault(); // フォーム送信などを防ぐ
      const sliders = section.querySelectorAll('input[type="range"]');
      sliders.forEach(sl => {
        sl.value = 100;
        // inputイベントを手動で発火させて、数値表示とプレビューを更新する
        sl.dispatchEvent(new Event('input'));
      });
    };

    header.appendChild(title);
    header.appendChild(resetBtn);
    section.appendChild(header);

    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = '▼ トーン補正を開く';
    details.appendChild(summary);
    
    FIELDS.forEach(f => details.appendChild(createSliderRow(f)));
    section.appendChild(details);

    parent.appendChild(section);
  }

  function getTags() {
    const tags = [];
    document.querySelectorAll('#list-visualsync input[type="range"]').forEach(sl => {
      const val = parseInt(sl.value, 10);
      if (val !== 100) tags.push(`${sl.dataset.key}:${val}%`);
    });
    return tags;
  }

  window.__registerPromptPart(ID, 1, { initUI, getTags });
})();
