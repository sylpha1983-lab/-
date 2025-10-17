/* ファイル名: builder_ui.section.filter.v1.js */
(function () {
  "use strict";

  UI_REG.registerSection({
    id: "filter",
    title: "フィルター (Filter)",

    mount(el) {
      // === グループ1：基本色調 ===
      const toneGroup = document.createElement("details");
      toneGroup.className = "ui-group";
      toneGroup.innerHTML = `
        <summary>基本色調</summary>
        <div class="inner">
          <label class="chip"><input type="checkbox" data-tag="warm-tone">暖色トーン (warm tone)</label>
          <label class="chip"><input type="checkbox" data-tag="cool-tone">寒色トーン (cool tone)</label>
          <label class="chip"><input type="checkbox" data-tag="monochrome">モノクロ / 白黒 (monochrome)</label>
          <label class="chip"><input type="checkbox" data-tag="sepia">セピア (sepia)</label>
          <label class="chip"><input type="checkbox" data-tag="high-contrast">ハイコントラスト (high contrast)</label>
          <label class="chip"><input type="checkbox" data-tag="low-contrast">ローコントラスト (low contrast)</label>
          <label class="chip"><input type="checkbox" data-tag="soft-tone">ソフトトーン (soft tone)</label>
          <label class="chip"><input type="checkbox" data-tag="vivid">鮮やか (vivid color)</label>
        </div>
      `;
      toneGroup.open = false;

      // === グループ2：露出・明るさ ===
      const exposureGroup = document.createElement("details");
      exposureGroup.className = "ui-group";
      exposureGroup.innerHTML = `
        <summary>露出・明るさ</summary>
        <div class="inner">
          <label class="chip"><input type="checkbox" data-tag="bright">明るめ (bright)</label>
          <label class="chip"><input type="checkbox" data-tag="dark">暗め (dark)</label>
          <label class="chip"><input type="checkbox" data-tag="overexposed">露出オーバー (overexposed)</label>
          <label class="chip"><input type="checkbox" data-tag="underexposed">露出アンダー (underexposed)</label>
          <label class="chip"><input type="checkbox" data-tag="backlit">逆光補正 (backlit)</label>
          <label class="chip"><input type="checkbox" data-tag="glow-light">光量増加 / グロー (glow light)</label>
        </div>
      `;
      exposureGroup.open = false;

      // === グループ3：特殊レンズ効果 ===
      const lensGroup = document.createElement("details");
      lensGroup.className = "ui-group";
      lensGroup.innerHTML = `
        <summary>レンズ・特殊効果</summary>
        <div class="inner">
          <label class="chip"><input type="checkbox" data-tag="vignette">ビネット / 周辺減光 (vignette)</label>
          <label class="chip"><input type="checkbox" data-tag="film-grain">フィルムグレイン (film grain)</label>
          <label class="chip"><input type="checkbox" data-tag="bloom">ブルーム / 光拡散 (bloom)</label>
          <label class="chip"><input type="checkbox" data-tag="chromatic-aberration">色収差 (chromatic aberration)</label>
          <label class="chip"><input type="checkbox" data-tag="lens-distortion">レンズ歪み (lens distortion)</label>
          <label class="chip"><input type="checkbox" data-tag="tilt-shift">ティルトシフト (tilt-shift blur)</label>
          <label class="chip"><input type="checkbox" data-tag="depth-blur">被写界深度 (depth blur)</label>
          <label class="chip"><input type="checkbox" data-tag="focus-highlight">焦点強調 (focus highlight)</label>
        </div>
      `;
      lensGroup.open = false;

      // DOM追加
      el.appendChild(toneGroup);
      el.appendChild(exposureGroup);
      el.appendChild(lensGroup);
    },

    getSelected() {
      const selected = [];
      document
        .querySelectorAll("input[data-tag][type=checkbox]:checked")
        .forEach(cb => selected.push(cb.getAttribute("data-tag")));
      return selected;
    }
  });

  console.log("[ui.kit] filter mounted");
})();