/* ファイル名: builder_ui.section.attire.v1.js */
(function() {
  "use strict";

  UI_REG.registerSection({
    id: "attire",
    title: "衣装・小物 (attire / accessories)",
    mount(el) {
      // === グループ1：基本衣装 ===
      const baseGroup = document.createElement("details");
      baseGroup.className = "ui-group";
      baseGroup.innerHTML = `
        <summary>基本衣装</summary>
        <div class="inner">
          <label class="chip"><input type="checkbox" data-tag="casual-clothes">カジュアル服 (casual clothes)</label>
          <label class="chip"><input type="checkbox" data-tag="uniform">制服 (uniform)</label>
          <label class="chip"><input type="checkbox" data-tag="dress">ドレス (dress)</label>
          <label class="chip"><input type="checkbox" data-tag="suit">スーツ (suit)</label>
          <label class="chip"><input type="checkbox" data-tag="swimsuit">水着 (swimsuit)</label>
          <label class="chip"><input type="checkbox" data-tag="kimono">和服 / 着物 (kimono / traditional wear)</label>
          <label class="chip"><input type="checkbox" data-tag="maid-outfit">メイド服 (maid outfit)</label>
          <label class="chip"><input type="checkbox" data-tag="armor">鎧 / バトルスーツ (armor / battle suit)</label>
          <label class="chip"><input type="checkbox" data-tag="fantasy-outfit">ファンタジー衣装 (fantasy outfit)</label>
          <label class="chip"><input type="checkbox" data-tag="idol-outfit">アイドル衣装 (idol outfit)</label>
        </div>
      `;
      baseGroup.open = false;

      // === グループ2：アクセサリー ===
      const accGroup = document.createElement("details");
      accGroup.className = "ui-group";
      accGroup.innerHTML = `
        <summary>アクセサリー</summary>
        <div class="inner">
          <label class="chip"><input type="checkbox" data-tag="hat">帽子 (hat)</label>
          <label class="chip"><input type="checkbox" data-tag="ribbon">リボン (ribbon)</label>
          <label class="chip"><input type="checkbox" data-tag="glasses">眼鏡 (glasses)</label>
          <label class="chip"><input type="checkbox" data-tag="earrings">イヤリング (earrings)</label>
          <label class="chip"><input type="checkbox" data-tag="necklace">ネックレス (necklace)</label>
          <label class="chip"><input type="checkbox" data-tag="bracelet">ブレスレット (bracelet)</label>
          <label class="chip"><input type="checkbox" data-tag="gloves">手袋 (gloves)</label>
          <label class="chip"><input type="checkbox" data-tag="belt">ベルト (belt)</label>
          <label class="chip"><input type="checkbox" data-tag="scarf">マフラー / スカーフ (scarf)</label>
          <label class="chip"><input type="checkbox" data-tag="tie">ネクタイ (tie)</label>
        </div>
      `;
      accGroup.open = false;

      // === グループ3：小物・装飾 ===
      const propsGroup = document.createElement("details");
      propsGroup.className = "ui-group";
      propsGroup.innerHTML = `
        <summary>小物・装飾</summary>
        <div class="inner">
          <label class="chip"><input type="checkbox" data-tag="bag">バッグ / 鞄 (bag)</label>
          <label class="chip"><input type="checkbox" data-tag="umbrella">傘 (umbrella)</label>
          <label class="chip"><input type="checkbox" data-tag="book">本 / ノート (book / notebook)</label>
          <label class="chip"><input type="checkbox" data-tag="sword">剣 / 武器 (sword / weapon)</label>
          <label class="chip"><input type="checkbox" data-tag="flower">花 / ブーケ (flower / bouquet)</label>
          <label class="chip"><input type="checkbox" data-tag="phone">スマートフォン (smartphone)</label>
          <label class="chip"><input type="checkbox" data-tag="mask">仮面 / マスク (mask)</label>
          <label class="chip"><input type="checkbox" data-tag="camera">カメラ (camera)</label>
          <label class="chip"><input type="checkbox" data-tag="fan">扇子 / 団扇 (fan)</label>
          <label class="chip"><input type="checkbox" data-tag="microphone">マイク (microphone)</label>
        </div>
      `;
      propsGroup.open = false;

      // === グループ4：靴・下半身 ===
      const shoesGroup = document.createElement("details");
      shoesGroup.className = "ui-group";
      shoesGroup.innerHTML = `
        <summary>靴・下半身</summary>
        <div class="inner">
          <label class="chip"><input type="checkbox" data-tag="boots">ブーツ (boots)</label>
          <label class="chip"><input type="checkbox" data-tag="sneakers">スニーカー (sneakers)</label>
          <label class="chip"><input type="checkbox" data-tag="heels">ハイヒール (high heels)</label>
          <label class="chip"><input type="checkbox" data-tag="sandals">サンダル (sandals)</label>
          <label class="chip"><input type="checkbox" data-tag="barefoot">裸足 (barefoot)</label>
          <label class="chip"><input type="checkbox" data-tag="stockings">ストッキング (stockings)</label>
          <label class="chip"><input type="checkbox" data-tag="socks">靴下 (socks)</label>
        </div>
      `;
      shoesGroup.open = false;

      // DOMに追加
      el.appendChild(baseGroup);
      el.appendChild(accGroup);
      el.appendChild(propsGroup);
      el.appendChild(shoesGroup);
    },

    getSelected() {
      const selected = [];
      document
        .querySelectorAll("input[data-tag][type=checkbox]:checked")
        .forEach(cb => selected.push(cb.getAttribute("data-tag")));
      return selected;
    }
  });

  console.log("[ui.kit] attire mounted");
})();