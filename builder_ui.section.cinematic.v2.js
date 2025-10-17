/* ファイル名: builder_ui.section.cinematic.v2.js */
(function () {
  "use strict";

  UI_REG.registerSection({
    id: "cinematic-v2",
    title: "カメラ・構図制御 (Cinematic Camera)",

    mount(el) {
      // === グループ1：カメラ構図・アングル ===
      const angleGroup = document.createElement("details");
      angleGroup.className = "ui-group";
      angleGroup.innerHTML = `
        <summary>カメラ構図・アングル</summary>
        <div class="inner">
          <label class="chip"><input type="checkbox" data-tag="close-up">クローズアップ (close-up)</label>
          <label class="chip"><input type="checkbox" data-tag="medium-shot">中距離ショット (medium shot)</label>
          <label class="chip"><input type="checkbox" data-tag="long-shot">ロングショット (long shot)</label>
          <label class="chip"><input type="checkbox" data-tag="low-angle">ローアングル (low angle)</label>
          <label class="chip"><input type="checkbox" data-tag="high-angle">ハイアングル (high angle)</label>
          <label class="chip"><input type="checkbox" data-tag="bird-eye">俯瞰視点 (bird's-eye view)</label>
          <label class="chip"><input type="checkbox" data-tag="worm-eye">煽り視点 (worm's-eye view)</label>
          <label class="chip"><input type="checkbox" data-tag="over-shoulder">肩越し視点 (over the shoulder)</label>
          <label class="chip"><input type="checkbox" data-tag="first-person">一人称視点 (first person)</label>
          <label class="chip"><input type="checkbox" data-tag="third-person">三人称視点 (third person)</label>
        </div>
      `;
      angleGroup.open = false;

      // === グループ2：レンズ・焦点制御 ===
      const lensGroup = document.createElement("details");
      lensGroup.className = "ui-group";
      lensGroup.innerHTML = `
        <summary>レンズ・焦点制御</summary>
        <div class="inner">
          <label class="chip"><input type="checkbox" data-tag="wide-angle">広角レンズ (wide angle)</label>
          <label class="chip"><input type="checkbox" data-tag="telephoto">望遠レンズ (telephoto)</label>
          <label class="chip"><input type="checkbox" data-tag="macro">マクロ撮影 (macro)</label>
          <label class="chip"><input type="checkbox" data-tag="shallow-focus">浅い被写界深度 (shallow focus)</label>
          <label class="chip"><input type="checkbox" data-tag="deep-focus">深い被写界深度 (deep focus)</label>
          <label class="chip"><input type="checkbox" data-tag="bokeh">ボケ効果 (bokeh)</label>
          <label class="chip"><input type="checkbox" data-tag="lens-flare">レンズフレア (lens flare)</label>
          <label class="chip"><input type="checkbox" data-tag="anamorphic">アナモルフィック比率 (anamorphic lens)</label>
          <label class="chip"><input type="checkbox" data-tag="fisheye">魚眼レンズ (fisheye)</label>
        </div>
      `;
      lensGroup.open = false;

      // === グループ3：カメラワーク・動作演出 ===
      const motionGroup = document.createElement("details");
      motionGroup.className = "ui-group";
      motionGroup.innerHTML = `
        <summary>カメラワーク・動作演出</summary>
        <div class="inner">
          <label class="chip"><input type="checkbox" data-tag="pan-left">パン左 (pan left)</label>
          <label class="chip"><input type="checkbox" data-tag="pan-right">パン右 (pan right)</label>
          <label class="chip"><input type="checkbox" data-tag="tilt-up">チルトアップ (tilt up)</label>
          <label class="chip"><input type="checkbox" data-tag="tilt-down">チルトダウン (tilt down)</label>
          <label class="chip"><input type="checkbox" data-tag="dolly-in">ドリーイン (dolly in)</label>
          <label class="chip"><input type="checkbox" data-tag="dolly-out">ドリーアウト (dolly out)</label>
          <label class="chip"><input type="checkbox" data-tag="zoom-in">ズームイン (zoom in)</label>
          <label class="chip"><input type="checkbox" data-tag="zoom-out">ズームアウト (zoom out)</label>
          <label class="chip"><input type="checkbox" data-tag="orbit">回転撮影 (orbit)</label>
          <label class="chip"><input type="checkbox" data-tag="handheld">手持ちカメラ風 (handheld)</label>
        </div>
      `;
      motionGroup.open = false;

      el.appendChild(angleGroup);
      el.appendChild(lensGroup);
      el.appendChild(motionGroup);
    },

    getSelected() {
      const selected = [];
      document
        .querySelectorAll("input[data-tag][type=checkbox]:checked")
        .forEach(cb => selected.push(cb.getAttribute("data-tag")));
      return selected;
    }
  });

  console.log("[ui.kit] cinematic-v2 mounted");
})();