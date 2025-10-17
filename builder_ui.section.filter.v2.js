/* ファイル名: builder_ui.section.filter.v2.js */
(function () {
  "use strict";

  if (!window.UI_REG) window.UI_REG = {};
  if (!UI_REG.registerSection) {
    UI_REG.sections = [];
    UI_REG.registerSection = (section) => {
      UI_REG.sections.push(section);
      console.log(`[ui.reg] section registered: ${section.id}`);
    };
  }

  UI_REG.registerSection({
    id: "filter-v2",
    title: "フィルター調整 (Filter v2)",
    icon: "🎨",
    order: 5,

    mount(el) {
      // === グループ1：トーン補正 ===
      const toneGroup = document.createElement("details");
      toneGroup.className = "ui-group";
      toneGroup.innerHTML = `
        <summary>トーン補正</summary>
        <div class="inner">
          <div class="slider-wrap">
            <label>明るさ (Brightness):</label>
            <input type="range" min="0" max="200" value="100" data-tag="brightness">
            <div class="val-label">100%</div>
          </div>
          <div class="slider-wrap">
            <label>コントラスト (Contrast):</label>
            <input type="range" min="0" max="200" value="100" data-tag="contrast">
            <div class="val-label">100%</div>
          </div>
          <div class="slider-wrap">
            <label>彩度 (Saturation):</label>
            <input type="range" min="0" max="200" value="100" data-tag="saturation">
            <div class="val-label">100%</div>
          </div>
          <div class="slider-wrap">
            <label>色温度 (Warmth):</label>
            <input type="range" min="0" max="200" value="100" data-tag="warmth">
            <div class="val-label">100%</div>
          </div>
          <div class="slider-wrap">
            <label>露出 (Exposure):</label>
            <input type="range" min="0" max="200" value="100" data-tag="exposure">
            <div class="val-label">100%</div>
          </div>
          <button class="reset-btn">リセット</button>
        </div>
      `;
      toneGroup.open = false;

      // === グループ2：LUTプリセット ===
      const lutGroup = document.createElement("details");
      lutGroup.className = "ui-group";
      lutGroup.innerHTML = `
        <summary>LUTプリセット</summary>
        <div class="inner">
          <label class="chip"><input type="radio" name="lut" data-tag="lut-film">フィルム調 (film look)</label>
          <label class="chip"><input type="radio" name="lut" data-tag="lut-anime">アニメ風 (anime tone)</label>
          <label class="chip"><input type="radio" name="lut" data-tag="lut-vintage">ビンテージ (vintage)</label>
          <label class="chip"><input type="radio" name="lut" data-tag="lut-cool">クールブルー (cool blue)</label>
          <label class="chip"><input type="radio" name="lut" data-tag="lut-warm">ウォームトーン (warm tone)</label>
          <label class="chip"><input type="radio" name="lut" data-tag="lut-highcontrast">ハイコントラスト (high contrast)</label>
        </div>
      `;
      lutGroup.open = false;

      // === ラジオ再クリック解除＋全解除対応 ===
      setTimeout(() => {
        const radios = lutGroup.querySelectorAll('input[type="radio"][name="lut"]');
        radios.forEach(radio => {
          radio.addEventListener("click", function () {
            if (this.checked && this.dataset.selected === "true") {
              this.checked = false;
              this.dataset.selected = "false";
            } else {
              radios.forEach(r => r.dataset.selected = "false");
              this.dataset.selected = "true";
            }
          });
        });

        const clearButtons = Array.from(document.querySelectorAll("button"));
        clearButtons.forEach(btn => {
          if (btn.textContent.trim() === "全解除") {
            btn.addEventListener("click", () => {
              radios.forEach(r => {
                r.checked = false;
                r.dataset.selected = "false";
              });
              el.querySelectorAll('input[type="range"]').forEach(sl => {
                sl.value = 100;
                sl.parentElement.querySelector(".val-label").textContent = "100%";
              });
              updatePreview();
            });
          }
        });
      }, 0);

      // === グループ3：効果スタイル ===
      const styleGroup = document.createElement("details");
      styleGroup.className = "ui-group";
      styleGroup.innerHTML = `
        <summary>効果スタイル</summary>
        <div class="inner">
          <label class="chip"><input type="checkbox" data-tag="film-grain">フィルムグレイン</label>
          <label class="chip"><input type="checkbox" data-tag="bloom">ブルーム光</label>
          <label class="chip"><input type="checkbox" data-tag="vignette">ビネット</label>
          <label class="chip"><input type="checkbox" data-tag="color-shift">色相シフト</label>
          <label class="chip"><input type="checkbox" data-tag="blur">軽いぼかし</label>
        </div>
      `;
      styleGroup.open = false;

      // === DOM追加 ===
      el.appendChild(toneGroup);
      el.appendChild(lutGroup);
      el.appendChild(styleGroup);

      // === 🎨 プレビュー小枠 ===
      const previewBox = document.createElement("div");
      previewBox.className = "filter-preview";
      previewBox.innerHTML = `
        <div class="preview-inner">
          <img src="https://picsum.photos/400/100?grayscale" alt="preview" id="filterPreviewImg">
          <div class="preview-label">プレビュー領域</div>
        </div>
      `;
      el.appendChild(previewBox);

      const style = document.createElement("style");
      style.textContent = `
        .filter-preview { width:100%; height:120px; margin-top:10px; border-radius:8px; overflow:hidden; background:#222; display:flex; align-items:center; justify-content:center; position:relative; }
        .filter-preview img { width:100%; height:100%; object-fit:cover; transition:filter 0.2s ease; }
        .filter-preview .preview-label { position:absolute; bottom:6px; right:10px; font-size:12px; color:#fff; background:rgba(0,0,0,0.4); padding:2px 6px; border-radius:4px; }
        .slider-wrap { display:flex; flex-direction:column; gap:2px; margin-bottom:6px; }
        .slider-wrap label { font-size:13px; margin-bottom:2px; }
        .slider-wrap input[type="range"] { width:100%; }
        .slider-wrap .val-label { font-size:12px; color:#999; text-align:center; margin-top:2px; }
      `;
      document.head.appendChild(style);

      const img = () => el.querySelector("#filterPreviewImg");
      const previewRoot = () => document.querySelector("#preview-area");

      const updatePreview = () => {
        const brightness = el.querySelector('[data-tag="brightness"]').value;
        const contrast = el.querySelector('[data-tag="contrast"]').value;
        const saturation = el.querySelector('[data-tag="saturation"]').value;
        const warmth = el.querySelector('[data-tag="warmth"]').value;
        const exposure = el.querySelector('[data-tag="exposure"]').value;

        const cssFilter = `
          brightness(${brightness / 100})
          contrast(${contrast / 100})
          saturate(${saturation / 100})
          sepia(${warmth / 400})
          brightness(${exposure / 100})
        `;

        img().style.filter = cssFilter;
        const area = previewRoot();
        if (area) area.style.filter = cssFilter;
      };

      el.querySelectorAll('input[type="range"]').forEach(sl => {
        const label = sl.parentElement.querySelector(".val-label");
        sl.addEventListener("input", () => {
          label.textContent = sl.value + "%";
          updatePreview();
        });
      });

      el.querySelector(".reset-btn").addEventListener("click", () => {
        el.querySelectorAll('input[type="range"]').forEach(sl => {
          sl.value = 100;
          sl.parentElement.querySelector(".val-label").textContent = "100%";
        });
        updatePreview();
      });

      updatePreview();
    },

    getSelected() {
      const selected = [];

      // ✅ チェック・ラジオ
      document.querySelectorAll("input[data-tag][type=checkbox]:checked, input[data-tag][type=radio]:checked")
        .forEach(cb => selected.push(cb.getAttribute("data-tag")));

      // ✅ スライダー（修正済み）
      document.querySelectorAll("input[data-tag][type=range]").forEach(sl => {
        const val = sl.value;
        if (val !== "100") selected.push(`${sl.getAttribute("data-tag")}:${val}%`);
      });

      return selected;
    }
  });

  console.log("[ui.kit] filter-v2 restored (tone sync fixed ✅)");
})();