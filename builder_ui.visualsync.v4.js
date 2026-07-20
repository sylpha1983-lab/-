(function(){
  "use strict";

  const ID = 'visualsync';
  const VERSION = 5; // トーン完成セット＋試運用プレビュー格納版

  const TONE_PRESETS = [
    {
      label: '🌞 明るい高彩度アニメ調',
      val: 'high-key lighting, vivid colors, bright highlights, clean anime color grading, cheerful atmosphere',
      desc: '明るく抜けの良い、爽やかなアニメ調。'
    },
    {
      label: '🎬 映画的ハイコントラスト',
      val: 'cinematic contrast, dramatic shadows, rich color grading, deep blacks, intense highlights',
      desc: '影と光を強めた、映画的で重い画作り。'
    },
    {
      label: '🌙 冷たい青系トーン',
      val: 'cool color grading, blue ambient light, calm atmosphere, low temperature palette, soft blue shadows',
      desc: '夜・静けさ・冷たい空気に寄せる青系色調。'
    },
    {
      label: '🍯 暖色ゴールデントーン',
      val: 'warm color grading, golden hour lighting, amber highlights, soft warmth, glowing atmosphere',
      desc: '夕暮れや祝福感に向いた、暖かい金色の空気。'
    },
    {
      label: '🌫 低彩度シネマトーン',
      val: 'muted colors, low saturation, soft contrast, cinematic subdued palette, quiet atmosphere',
      desc: '落ち着いた低彩度。静かな雰囲気を作る。'
    },
    {
      label: '💎 超高彩度ビビッド',
      val: 'highly saturated colors, vivid palette, glossy highlights, vibrant color contrast, eye-catching colors',
      desc: '目を引く高彩度。派手さと艶を強める。'
    },
    {
      label: '🌸 柔らかいパステルトーン',
      val: 'pastel color palette, soft colors, gentle lighting, low contrast, delicate atmosphere',
      desc: '淡く柔らかい、優しい色調。'
    },
    {
      label: '🖤 ダークファンタジートーン',
      val: 'dark fantasy color grading, deep shadows, moody lighting, muted highlights, ominous atmosphere',
      desc: '重厚で暗い、幻想・魔性向けの色調。'
    },
    {
      label: '✨ 透明感・空気感トーン',
      val: 'clear atmosphere, airy lighting, soft haze, luminous highlights, transparent color grading',
      desc: '空気・光・透明感を優先した澄んだ画作り。'
    },
    {
      label: '🔥 熱量のある赤橙トーン',
      val: 'warm red orange color grading, fiery highlights, intense warm lighting, passionate atmosphere',
      desc: '熱・情熱・戦闘前の高揚感を足す赤橙色調。'
    },
    {
      label: '❄️ 冷気・氷結トーン',
      val: 'icy blue color grading, cold atmosphere, pale highlights, frost-like lighting, crisp air',
      desc: '冷気、雪、氷結、冬景色向け。'
    },
    {
      label: '🌃 ネオン夜景トーン',
      val: 'neon lighting, cyberpunk color grading, vivid magenta and cyan highlights, night city glow, high contrast reflections',
      desc: '夜景・サイバー・ネオン反射向け。'
    }
  ];

  const SLIDERS = [
    { key: 'brightness', label: '明るさ (Bright)', default: 100 },
    { key: 'contrast', label: 'コントラスト (Contrast)', default: 100 },
    { key: 'saturation', label: '彩度 (Saturate)', default: 100 },
    { key: 'warmth', label: '色温度 (Warmth)', default: 100 },
    { key: 'exposure', label: '露出 (Exposure)', default: 100 }
  ];


  function ensureVisualSyncStyle() {
    if (document.getElementById('visualsync-v5-layout-fix-style')) return;
    const style = document.createElement('style');
    style.id = 'visualsync-v5-layout-fix-style';
    style.textContent = `
      /* VisualSync v5 layout fix: cancel broad .section-content details[open] > div grid only here */
      .visualsync-v5-container,
      .visualsync-v5-container * {
        box-sizing: border-box;
      }
      .section-content .visualsync-v5-container details[open] > .visualsync-details-body,
      .visualsync-v5-container details[open] > .visualsync-details-body {
        display: block !important;
        grid-template-columns: 1fr !important;
        grid-auto-flow: row !important;
        gap: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
        padding: 10px !important;
      }
      .visualsync-v5-container .visualsync-tone-presets,
      .visualsync-v5-container .visualsync-trial-preview {
        width: 100% !important;
        max-width: 100% !important;
      }
      .visualsync-v5-container .visualsync-tone-preset-grid {
        display: grid !important;
        grid-template-columns: 1fr !important;
        gap: 6px !important;
        width: 100% !important;
      }
      .visualsync-v5-container .visualsync-tone-preset-item {
        display: block !important;
        width: 100% !important;
        max-width: 100% !important;
      }
      .visualsync-v5-container .visualsync-preview-wrap,
      .visualsync-v5-container .visualsync-sliders-wrap,
      .visualsync-v5-container .visualsync-note,
      .visualsync-v5-container .visualsync-trial-header {
        width: 100% !important;
        max-width: 100% !important;
      }
      @media (max-width: 520px) {
        .visualsync-v5-container .visualsync-slider-row {
          grid-template-columns: minmax(82px, 0.9fr) minmax(95px, 1.6fr) 44px !important;
          gap: 6px !important;
        }
        .visualsync-v5-container .visualsync-slider-row label {
          font-size: 0.86em !important;
          line-height: 1.2 !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

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

  function makeDetails(summaryText, className) {
    const details = document.createElement('details');
    details.className = className || '';
    details.style.cssText = 'margin:10px 0; border:1px solid #e5e7eb; border-radius:8px; background:#fff; overflow:hidden;';

    const summary = document.createElement('summary');
    summary.textContent = summaryText;
    summary.style.cssText = 'cursor:pointer; padding:10px 12px; font-weight:700; color:#444; background:#fafafa; user-select:none;';

    const body = document.createElement('div');
    body.className = 'visualsync-details-body';
    body.style.cssText = 'padding:10px;';

    details.appendChild(summary);
    details.appendChild(body);
    return { details, body };
  }

  function createPresetShelf() {
    const made = makeDetails('🎨 トーン完成セット', 'visualsync-tone-presets');
    const body = made.body;

    const note = document.createElement('div');
    note.textContent = '※完成セットは1つ選択式。色調タグを生成プロンプトへ追加します。';
    note.className = 'visualsync-note';
    note.style.cssText = 'font-size:12px; color:#666; margin-bottom:8px; line-height:1.5;';
    body.appendChild(note);

    const grid = document.createElement('div');
    grid.className = 'visualsync-tone-preset-grid';
    grid.style.cssText = 'display:grid; grid-template-columns:1fr; gap:6px;';

    TONE_PRESETS.forEach((item, index) => {
      const label = document.createElement('label');
      label.className = 'visualsync-tone-preset-item';
      label.style.cssText = 'display:block; width:100%; padding:9px 10px; border:1px solid #e5e7eb; border-radius:8px; background:#fbfdff; cursor:pointer; line-height:1.45;';

      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.className = 'visualsync-tone-preset-check';
      cb.dataset.val = item.val;
      cb.dataset.index = String(index);
      cb.style.marginRight = '8px';
      cb.addEventListener('change', () => {
        if (!cb.checked) return;
        document.querySelectorAll('.visualsync-tone-preset-check').forEach(other => {
          if (other !== cb) other.checked = false;
        });
      });

      const title = document.createElement('span');
      title.textContent = item.label;
      title.style.fontWeight = '700';

      const desc = document.createElement('div');
      desc.textContent = item.desc;
      desc.style.cssText = 'font-size:12px; color:#666; margin:3px 0 0 25px;';

      label.appendChild(cb);
      label.appendChild(title);
      label.appendChild(desc);
      grid.appendChild(label);
    });

    body.appendChild(grid);
    return made.details;
  }

  function createPreviewArea() {
    const wrap = document.createElement('div');
    wrap.className = 'visualsync-preview-wrap';
    wrap.style.marginBottom = '10px';
    wrap.style.border = '1px solid #ddd';
    wrap.style.borderRadius = '6px';
    wrap.style.overflow = 'hidden';
    wrap.style.position = 'relative';
    wrap.style.backgroundColor = '#222';

    const defaultImg = 'https://picsum.photos/id/1015/600/400';

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
    row.className = 'visualsync-slider-row';
    row.style.marginBottom = '8px';
    row.style.display = 'grid';
    row.style.gridTemplateColumns = 'minmax(105px, 0.9fr) minmax(120px, 1.6fr) 48px';
    row.style.gap = '8px';
    row.style.alignItems = 'center';

    const label = document.createElement('label');
    label.textContent = `${field.label}`;
    label.style.fontSize = '0.9em';
    label.style.color = '#333';
    label.style.lineHeight = '1.25';

    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = 50;
    slider.max = 200;
    slider.value = field.default;
    slider.step = 1;
    slider.dataset.key = field.key;
    slider.className = 'visualsync-slider';
    slider.style.width = '100%';
    slider.style.cursor = 'pointer';

    const percent = document.createElement('span');
    percent.style.textAlign = 'right';
    percent.style.fontSize = '0.9em';
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

  function createTrialShelf() {
    const made = makeDetails('🧪 試運用：トーン補正プレビュー', 'visualsync-trial-preview');
    const body = made.body;

    const header = document.createElement('div');
    header.className = 'visualsync-trial-header';
    header.style.cssText = 'display:flex; justify-content:space-between; align-items:center; gap:8px; margin-bottom:8px;';

    const title = document.createElement('div');
    title.innerHTML = '🎨 <b>トーン・色調補正 (Color Adjust)</b>';
    title.style.cssText = 'font-size:0.9em; color:#555;';

    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'リセット';
    resetBtn.style.cssText = 'font-size:0.85em; padding:3px 12px; cursor:pointer; border:1px solid #ddd; border-radius:6px; background:#fff;';
    resetBtn.onclick = (e) => {
      e.preventDefault();
      body.querySelectorAll('input[type="range"]').forEach(sl => {
        sl.value = 100;
        sl.dispatchEvent(new Event('input'));
      });
    };

    header.appendChild(title);
    header.appendChild(resetBtn);
    body.appendChild(header);
    body.appendChild(createPreviewArea());

    const slidersWrap = document.createElement('div');
    slidersWrap.className = 'visualsync-sliders-wrap';
    slidersWrap.style.cssText = 'background:#f9f9f9; padding:10px; border-radius:6px; border:1px solid #eee;';
    SLIDERS.forEach(f => slidersWrap.appendChild(createSliderRow(f)));
    body.appendChild(slidersWrap);

    const note = document.createElement('div');
    note.textContent = '※試運用棚を開いている時だけ、変更したスライダー値も追加タグとして反映します。閉じるとプレビュー確認専用になります。';
    note.className = 'visualsync-note';
    note.style.cssText = 'font-size:12px; color:#666; margin-top:8px; line-height:1.5;';
    body.appendChild(note);

    return made.details;
  }

  function initUI(parent){
    ensureVisualSyncStyle();
    parent.innerHTML = '';

    const container = document.createElement('div');
    container.className = 'visualsync-v5-container';
    container.style.padding = '6px';

    container.appendChild(createPresetShelf());
    container.appendChild(createTrialShelf());

    parent.appendChild(container);
    setTimeout(() => window.__previewSyncUpdate(), 0);
  }

  function getTags() {
    const tags = [];

    document.querySelectorAll('.visualsync-tone-preset-check:checked').forEach(cb => {
      const val = (cb.dataset.val || '').trim();
      if (val) tags.push(val);
    });

    const trial = document.querySelector('.visualsync-trial-preview');
    if (trial && trial.open) {
      document.querySelectorAll('.visualsync-slider').forEach(sl => {
        const val = parseInt(sl.value, 10);
        if (val !== 100) tags.push(`${sl.dataset.key}:${val}%`);
      });
    }

    return tags;
  }

  window.__registerPromptPart(ID, VERSION, { initUI, getTags });
})();
