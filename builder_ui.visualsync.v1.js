/* ファイル名: builder_ui.visualsync.v1.js */
(function () {
  "use strict";

  const VisualSync = {
    lastState: "",

    init() {
      console.log("[VisualSync] init");

      // 動作確認ループ
      setInterval(() => this.update(), 500);
    },

    update() {
      // 現在の選択タグを取得
      const selected = UI_REG.getAllSelected
        ? UI_REG.getAllSelected()
        : [];

      const state = selected.join(",");
      if (state === this.lastState) return;
      this.lastState = state;

      // LUT適用
      this.applyLUT(selected);

      // トーン調整適用
      this.applyTone(selected);
    },

    // ================================
    // LUT適用ロジック
    // ================================
    applyLUT(tags) {
      const lut = tags.find(t => t.startsWith("lut-")) || "lut-none";
      const target = document.querySelector("#preview-area") || document.documentElement;

      switch (lut) {
        case "lut-anime":
          target.style.filter = "contrast(1.2) saturate(1.3)";
          break;
        case "lut-film":
          target.style.filter = "contrast(1.1) saturate(0.9) brightness(1.05)";
          break;
        case "lut-vintage":
          target.style.filter = "sepia(0.3) saturate(0.8) hue-rotate(-10deg)";
          break;
        case "lut-cool":
          target.style.filter = "contrast(1.1) brightness(1.05) hue-rotate(190deg)";
          break;
        case "lut-warm":
          target.style.filter = "contrast(1.05) brightness(1.05) sepia(0.2)";
          break;
        case "lut-highcontrast":
          target.style.filter = "contrast(1.4) brightness(1.05)";
          break;
        default:
          target.style.filter = "";
      }

      console.log(`[VisualSync] LUT applied: ${lut} → target=${target.id || "document"}`);
    },

    // ================================
    // トーン補正
    // ================================
    applyTone(tags) {
      const tone = {
        brightness: this._val(tags, "brightness", 100),
        contrast: this._val(tags, "contrast", 100),
        saturation: this._val(tags, "saturation", 100),
        warmth: this._val(tags, "warmth", 100),
        exposure: this._val(tags, "exposure", 100)
      };

      const target = document.querySelector("#preview-area") || document.documentElement;

      const filter = `
        brightness(${tone.brightness / 100})
        contrast(${tone.contrast / 100})
        saturate(${tone.saturation / 100})
      `.trim();

      target.style.filter = filter;
      console.log("[VisualSync] Tone sync:", tone, `→ target=${target.id || "document"}`);
    },

    _val(tags, key, def) {
      const found = tags.find(t => t.startsWith(`${key}:`));
      if (!found) return def;
      const val = parseFloat(found.split(":")[1]) || def;
      return val;
    }
  };

  // 初期化
  window.VisualSync = VisualSync;
  VisualSync.init();
})();