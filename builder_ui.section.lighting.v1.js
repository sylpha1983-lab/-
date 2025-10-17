// builder_ui.section.lighting.v1.js
(function(){
  "use strict";

  const id = "lighting";
  const title = "照明（Lighting）";

  // ---- UI生成 ----
  function mount(root){
    root.innerHTML = `
      <details class="ui-group">
        <summary>照明プリセット</summary>
        <div class="inner" id="grid-lighting">
          <label class="chip"><input type="checkbox" data-tag="soft light"/>ソフトライト</label>
          <label class="chip"><input type="checkbox" data-tag="hard light"/>ハードライト</label>
          <label class="chip"><input type="checkbox" data-tag="back light"/>逆光</label>
          <label class="chip"><input type="checkbox" data-tag="rim light"/>リムライト</label>
          <label class="chip"><input type="checkbox" data-tag="dramatic lighting"/>ドラマチック照明</label>
          <label class="chip"><input type="checkbox" data-tag="studio lighting"/>スタジオ照明</label>
          <label class="chip"><input type="checkbox" data-tag="natural light"/>自然光</label>
          <label class="chip"><input type="checkbox" data-tag="window light"/>窓際の光</label>
          <label class="chip"><input type="checkbox" data-tag="spotlight"/>スポットライト</label>
          <label class="chip"><input type="checkbox" data-tag="candle light"/>キャンドルライト</label>
          <label class="chip"><input type="checkbox" data-tag="neon light"/>ネオン照明</label>
        </div>
      </details>

      <details class="ui-group">
        <summary>照明方向</summary>
        <div class="inner" id="grid-lightdir">
          <label class="chip"><input type="checkbox" data-tag="front lighting"/>正面光</label>
          <label class="chip"><input type="checkbox" data-tag="side lighting"/>サイド光</label>
          <label class="chip"><input type="checkbox" data-tag="top lighting"/>トップ光</label>
          <label class="chip"><input type="checkbox" data-tag="bottom lighting"/>アンダー光</label>
          <label class="chip"><input type="checkbox" data-tag="back lighting"/>逆光（バックライト）</label>
          <label class="chip"><input type="checkbox" data-tag="diagonal lighting"/>斜光</label>
        </div>
      </details>

      <details class="ui-group">
        <summary>照明カラー</summary>
        <div class="inner" id="grid-lightcolor">
          <label class="chip"><input type="checkbox" data-tag="warm lighting"/>暖色照明</label>
          <label class="chip"><input type="checkbox" data-tag="cool lighting"/>寒色照明</label>
          <label class="chip"><input type="checkbox" data-tag="golden lighting"/>ゴールデンライト</label>
          <label class="chip"><input type="checkbox" data-tag="blue tone light"/>ブルートーンライト</label>
          <label class="chip"><input type="checkbox" data-tag="colored lighting"/>カラフル照明</label>
        </div>
      </details>
    `;
  }

  // ---- 選択タグ取得 ----
  function getSelected(){
    const tags = [];
    document.querySelectorAll(
      "#grid-lighting input:checked, #grid-lightdir input:checked, #grid-lightcolor input:checked"
    ).forEach(el => {
      tags.push(el.dataset.tag);
    });
    return tags;
  }

  // ---- 登録 ----
  if (window.UI_REG) {
    window.UI_REG.registerSection({ id, title, mount, getSelected });
  }

})();