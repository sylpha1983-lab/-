/* ファイル名: builder_ui.section.cinematic.v3.js */
(function () {
  "use strict";

  UI_REG.registerSection({
    id: "cinematic-v3",
    title: "カメラ演出・モーション (Cinematic Motion)",

    mount(el) {
      // === グループ1：カメラ移動・動作 ===
      const motionGroup = document.createElement("details");
      motionGroup.className = "ui-group";
      motionGroup.innerHTML = `
        <summary>カメラ移動・動作</summary>
        <div class="inner">
          <label class="chip"><input type="checkbox" data-tag="slow-pan">スローパン (slow pan)</label>
          <label class="chip"><input type="checkbox" data-tag="fast-pan">高速パン (fast pan)</label>
          <label class="chip"><input type="checkbox" data-tag="dolly-zoom">ドリーズーム (dolly zoom)</label>
          <label class="chip"><input type="checkbox" data-tag="crane-up">クレーンアップ (crane up)</label>
          <label class="chip"><input type="checkbox" data-tag="crane-down">クレーンダウン (crane down)</label>
          <label class="chip"><input type="checkbox" data-tag="tracking-shot">トラッキングショット (tracking shot)</label>
          <label class="chip"><input type="checkbox" data-tag="orbiting">オービット回転 (orbiting)</label>
          <label class="chip"><input type="checkbox" data-tag="pull-focus">フォーカス送り (pull focus)</label>
          <label class="chip"><input type="checkbox" data-tag="handheld-shake">手ブレ (handheld shake)</label>
          <label class="chip"><input type="checkbox" data-tag="steadycam">ステディカム (steadycam)</label>
        </div>
      `;
      motionGroup.open = false;

      // === グループ2：演出タイミング・テンポ ===
      const rhythmGroup = document.createElement("details");
      rhythmGroup.className = "ui-group";
      rhythmGroup.innerHTML = `
        <summary>演出タイミング・テンポ</summary>
        <div class="inner">
          <label class="chip"><input type="checkbox" data-tag="slow-motion">スローモーション (slow motion)</label>
          <label class="chip"><input type="checkbox" data-tag="time-lapse">タイムラプス (time lapse)</label>
          <label class="chip"><input type="checkbox" data-tag="freeze-frame">静止カット (freeze frame)</label>
          <label class="chip"><input type="checkbox" data-tag="quick-cut">クイックカット (quick cut)</label>
          <label class="chip"><input type="checkbox" data-tag="crossfade">クロスフェード (crossfade)</label>
          <label class="chip"><input type="checkbox" data-tag="match-cut">マッチカット (match cut)</label>
          <label class="chip"><input type="checkbox" data-tag="whip-pan">ウィップパン (whip pan)</label>
          <label class="chip"><input type="checkbox" data-tag="split-focus">分割焦点 (split focus)</label>
        </div>
      `;
      rhythmGroup.open = false;

      // === グループ3：カメラ視点・ドラマチック演出 ===
      const dramaGroup = document.createElement("details");
      dramaGroup.className = "ui-group";
      dramaGroup.innerHTML = `
        <summary>カメラ視点・ドラマチック演出</summary>
        <div class="inner">
          <label class="chip"><input type="checkbox" data-tag="reveal-shot">リビールショット (reveal shot)</label>
          <label class="chip"><input type="checkbox" data-tag="over-the-shoulder">肩越しショット (over the shoulder)</label>
          <label class="chip"><input type="checkbox" data-tag="mirror-shot">鏡越しショット (mirror shot)</label>
          <label class="chip"><input type="checkbox" data-tag="focus-on-eyes">瞳フォーカス (focus on eyes)</label>
          <label class="chip"><input type="checkbox" data-tag="silhouette-shot">シルエットショット (silhouette)</label>
          <label class="chip"><input type="checkbox" data-tag="flash-transition">フラッシュトランジション (flash transition)</label>
          <label class="chip"><input type="checkbox" data-tag="zoom-burst">ズームバースト (zoom burst)</label>
          <label class="chip"><input type="checkbox" data-tag="subject-follow">被写体追従 (subject follow)</label>
          <label class="chip"><input type="checkbox" data-tag="focus-shift">フォーカス移動 (focus shift)</label>
        </div>
      `;
      dramaGroup.open = false;

      el.appendChild(motionGroup);
      el.appendChild(rhythmGroup);
      el.appendChild(dramaGroup);
    },

    getSelected() {
      const selected = [];
      document
        .querySelectorAll("input[data-tag][type=checkbox]:checked")
        .forEach(cb => selected.push(cb.getAttribute("data-tag")));
      return selected;
    }
  });

  console.log("[ui.kit] cinematic-v3 mounted");
})();