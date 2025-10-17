/* ファイル名: builder_ui.sync.mood.v1.js */
(function () {
  "use strict";

  const MoodSync = {
    notionDB: null, // Notionのデータを一時保持

    async init() {
      console.log("[MoodSync] init start");
      try {
        // Notionからのデータ取得
        const res = await fetch("/notion/data/background-mood.json"); 
        if (!res.ok) throw new Error("Notion fetch failed");
        this.notionDB = await res.json();

        console.log(`[MoodSync] Loaded ${this.notionDB.length} mood entries`);
        this.injectToUI();
      } catch (err) {
        console.warn("[MoodSync] Could not load Notion data:", err);
      }
    },

    injectToUI() {
      const targetSection = document.querySelector("#ui-host .ui-sec h3");
      if (!targetSection) return;

      // 背景カテゴリーを特定
      const backgroundSec = [...document.querySelectorAll(".ui-sec h3")]
        .find(el => el.textContent.includes("背景"));
      if (!backgroundSec) return;

      const parent = backgroundSec.parentElement.querySelector(".ui-group:last-of-type .inner");
      if (!parent) return;

      // === 雰囲気 (Mood) グループ追加 ===
      const group = document.createElement("details");
      group.className = "ui-group";
      group.innerHTML = `
        <summary>雰囲気・ムード</summary>
        <div class="inner"></div>
      `;
      group.open = false;

      const inner = group.querySelector(".inner");

      // Notionデータを展開
      this.notionDB.forEach(item => {
        const label = document.createElement("label");
        label.className = "chip";
        label.innerHTML = `<input type="checkbox" data-tag="${item.id}">${item.label}`;
        inner.appendChild(label);
      });

      parent.appendChild(group);

      console.log("[MoodSync] Injected mood group into background UI");
    }
  };

  // 初期化呼び出し
  window.MoodSync = MoodSync;
  document.addEventListener("DOMContentLoaded", () => MoodSync.init(), { once: true });
})();