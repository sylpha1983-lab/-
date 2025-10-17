/* ファイル名: builder_ui.section.effect.v1.js */
(function() {
  "use strict";

  // ---- セクション登録 ----
  UI_REG.registerSection({
    id: "effect",
    title: "エフェクト (effect)",
    mount(el) {
      const group = document.createElement("details");
      group.className = "ui-group";
      // デフォルトでは閉じた状態で開始
      group.innerHTML = `
        <summary>効果の種類</summary>
        <div class="inner">
          <label class="chip"><input type="checkbox" data-tag="light-effect">光 (light)</label>
          <label class="chip"><input type="checkbox" data-tag="magic">魔法 (magic)</label>
          <label class="chip"><input type="checkbox" data-tag="sparkle">キラキラ (sparkle)</label>
          <label class="chip"><input type="checkbox" data-tag="smoke">煙 / もや (smoke)</label>
          <label class="chip"><input type="checkbox" data-tag="fire">炎 (fire)</label>
          <label class="chip"><input type="checkbox" data-tag="water">水滴・波紋 (water)</label>
          <label class="chip"><input type="checkbox" data-tag="particles">粒子 (particles)</label>
          <label class="chip"><input type="checkbox" data-tag="aura">オーラ (aura)</label>
          <label class="chip"><input type="checkbox" data-tag="shadow">影 (shadow)</label>
          <label class="chip"><input type="checkbox" data-tag="energy">エネルギー (energy)</label>
        </div>
      `;
      el.appendChild(group);
    },
    getSelected() {
      const selected = [];
      document
        .querySelectorAll("input[data-tag][type=checkbox]:checked")
        .forEach(cb => selected.push(cb.getAttribute("data-tag")));
      return selected;
    }
  });

  console.log("[ui.kit] effect mounted");
})();