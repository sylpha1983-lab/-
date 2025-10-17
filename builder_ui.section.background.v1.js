/* ファイル名: builder_ui.section.background.v1.js */
(function() {
  "use strict";

  UI_REG.registerSection({
    id: "background",
    title: "背景 (Background)",
    mount(el) {
      // === グループ1：環境・風景 ===
      const sceneGroup = document.createElement("details");
      sceneGroup.className = "ui-group";
      sceneGroup.innerHTML = `
        <summary>環境・風景</summary>
        <div class="inner">
          <label class="chip"><input type="checkbox" data-tag="outdoor">屋外 (outdoor)</label>
          <label class="chip"><input type="checkbox" data-tag="indoor">屋内 (indoor)</label>
          <label class="chip"><input type="checkbox" data-tag="urban">都市 (urban)</label>
          <label class="chip"><input type="checkbox" data-tag="nature">自然 (nature)</label>
          <label class="chip"><input type="checkbox" data-tag="sea">海辺 (sea)</label>
          <label class="chip"><input type="checkbox" data-tag="mountain">山 (mountain)</label>
          <label class="chip"><input type="checkbox" data-tag="room">部屋 (room)</label>
          <label class="chip"><input type="checkbox" data-tag="school">学校 (school)</label>
          <label class="chip"><input type="checkbox" data-tag="fantasy">ファンタジー風景 (fantasy setting)</label>
        </div>
      `;
      sceneGroup.open = false;

      // === グループ2：時間・天候 ===
      const timeGroup = document.createElement("details");
      timeGroup.className = "ui-group";
      timeGroup.innerHTML = `
        <summary>時間・天候</summary>
        <div class="inner">
          <label class="chip"><input type="checkbox" data-tag="day">昼 (daytime)</label>
          <label class="chip"><input type="checkbox" data-tag="night">夜 (night)</label>
          <label class="chip"><input type="checkbox" data-tag="sunset">夕方 (sunset)</label>
          <label class="chip"><input type="checkbox" data-tag="rain">雨 (rain)</label>
          <label class="chip"><input type="checkbox" data-tag="snow">雪 (snow)</label>
          <label class="chip"><input type="checkbox" data-tag="cloudy">曇り (cloudy)</label>
          <label class="chip"><input type="checkbox" data-tag="fog">霧 (fog)</label>
          <label class="chip"><input type="checkbox" data-tag="clear-sky">快晴 (clear sky)</label>
        </div>
      `;
      timeGroup.open = false;

      // === グループ3：背景エフェクト（旧effect統合） ===
      const fxGroup = document.createElement("details");
      fxGroup.className = "ui-group";
      fxGroup.innerHTML = `
        <summary>背景エフェクト</summary>
        <div class="inner">
          <label class="chip"><input type="checkbox" data-tag="light-rays">光の筋 / 逆光 (light rays / backlight)</label>
          <label class="chip"><input type="checkbox" data-tag="lens-flare">レンズフレア (lens flare)</label>
          <label class="chip"><input type="checkbox" data-tag="sparkles">光の粒 / キラキラ (sparkles)</label>
          <label class="chip"><input type="checkbox" data-tag="mist">もや / 霧 (mist / haze)</label>
          <label class="chip"><input type="checkbox" data-tag="smoke">煙 (smoke)</label>
          <label class="chip"><input type="checkbox" data-tag="leaves">落ち葉 / 花びら (falling leaves / petals)</label>
          <label class="chip"><input type="checkbox" data-tag="dust">埃 / パーティクル (dust / particles)</label>
          <label class="chip"><input type="checkbox" data-tag="rain-drops">雨粒 / 水しぶき (rain drops / splash)</label>
          <label class="chip"><input type="checkbox" data-tag="magic-light">魔法光 / ファンタジー光 (magic light)</label>
          <label class="chip"><input type="checkbox" data-tag="glow">発光 / 照明効果 (glow / illumination)</label>
        </div>
      `;
      fxGroup.open = false;

      // DOM追加
      el.appendChild(sceneGroup);
      el.appendChild(timeGroup);
      el.appendChild(fxGroup);
    },

    getSelected() {
      const selected = [];
      document
        .querySelectorAll("input[data-tag][type=checkbox]:checked")
        .forEach(cb => selected.push(cb.getAttribute("data-tag")));
      return selected;
    }
  });

  console.log("[ui.kit] background mounted");
})();