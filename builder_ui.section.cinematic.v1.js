/* ファイル名: builder_ui.section.cinematic.v1.js */
(function () {
  "use strict";

  UI_REG.registerSection({
    id: "cinematic",
    title: "演出エフェクト (Cinematic Effects)",

    mount(el) {
      // === グループ1：演出・印象効果 ===
      const moodGroup = document.createElement("details");
      moodGroup.className = "ui-group";
      moodGroup.innerHTML = `
        <summary>演出・印象効果</summary>
        <div class="inner">
          <label class="chip"><input type="checkbox" data-tag="dramatic-lighting">ドラマチック照明 (dramatic lighting)</label>
          <label class="chip"><input type="checkbox" data-tag="spotlight">スポットライト (spotlight)</label>
          <label class="chip"><input type="checkbox" data-tag="cinematic-blur">映画風ぼかし (cinematic blur)</label>
          <label class="chip"><input type="checkbox" data-tag="slow-motion">スローモーション効果 (slow motion)</label>
          <label class="chip"><input type="checkbox" data-tag="focus-shift">ピント移動 / 被写界効果 (focus shift)</label>
          <label class="chip"><input type="checkbox" data-tag="time-stop">時間停止演出 (time stop)</label>
          <label class="chip"><input type="checkbox" data-tag="afterimage">残像効果 (afterimage)</label>
          <label class="chip"><input type="checkbox" data-tag="memory-fade">記憶・回想演出 (memory fade)</label>
        </div>
      `;
      moodGroup.open = false;

      // === グループ2：感情・雰囲気演出 ===
      const emotionGroup = document.createElement("details");
      emotionGroup.className = "ui-group";
      emotionGroup.innerHTML = `
        <summary>感情・雰囲気演出</summary>
        <div class="inner">
          <label class="chip"><input type="checkbox" data-tag="romantic-glow">ロマンチック光 (romantic glow)</label>
          <label class="chip"><input type="checkbox" data-tag="dreamy-haze">夢幻的な霞 (dreamy haze)</label>
          <label class="chip"><input type="checkbox" data-tag="tense-shadow">緊張感ある陰影 (tense shadow)</label>
          <label class="chip"><input type="checkbox" data-tag="melancholic-tone">物悲しいトーン (melancholic tone)</label>
          <label class="chip"><input type="checkbox" data-tag="nostalgic-filter">ノスタルジックフィルター (nostalgic filter)</label>
          <label class="chip"><input type="checkbox" data-tag="energetic-aura">躍動的オーラ (energetic aura)</label>
          <label class="chip"><input type="checkbox" data-tag="mystic-glow">神秘的発光 (mystic glow)</label>
          <label class="chip"><input type="checkbox" data-tag="hope-light">希望の光 (light of hope)</label>
        </div>
      `;
      emotionGroup.open = false;

      // === グループ3：特殊演出 ===
      const specialGroup = document.createElement("details");
      specialGroup.className = "ui-group";
      specialGroup.innerHTML = `
        <summary>特殊演出</summary>
        <div class="inner">
          <label class="chip"><input type="checkbox" data-tag="aura">オーラ (aura)</label>
          <label class="chip"><input type="checkbox" data-tag="magic-circle">魔法陣 (magic circle)</label>
          <label class="chip"><input type="checkbox" data-tag="energy-flare">エネルギーフレア (energy flare)</label>
          <label class="chip"><input type="checkbox" data-tag="light-wings">光の翼 (light wings)</label>
          <label class="chip"><input type="checkbox" data-tag="shimmer">煌めき (shimmer)</label>
          <label class="chip"><input type="checkbox" data-tag="glitch-effect">グリッチ / ノイズ (glitch effect)</label>
          <label class="chip"><input type="checkbox" data-tag="divine-light">神々しい光 (divine light)</label>
          <label class="chip"><input type="checkbox" data-tag="darkness-vortex">闇の渦 / 邪気 (dark vortex)</label>
        </div>
      `;
      specialGroup.open = false;

      el.appendChild(moodGroup);
      el.appendChild(emotionGroup);
      el.appendChild(specialGroup);
    },

    getSelected() {
      const selected = [];
      document
        .querySelectorAll("input[data-tag][type=checkbox]:checked")
        .forEach(cb => selected.push(cb.getAttribute("data-tag")));
      return selected;
    }
  });

  console.log("[ui.kit] cinematic mounted");
})();