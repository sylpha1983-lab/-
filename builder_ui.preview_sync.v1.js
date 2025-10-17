/* ============================================================
 * builder_ui.preview_sync.v1.js
 * v1.2統合仕様（折りたたみ + 安定追従 + 黒画面対策）
 * ============================================================
 */

(() => {
  const log = (...a) => console.log("[preview.sync]", ...a);

  // -----------------------------------------------------------
  // 🧠 ターゲットDOMの取得（折りたたみプレビュー固定）
  // -----------------------------------------------------------
  const preview = document.getElementById("preview-area");
  const img = preview?.querySelector("#preview-bg");
  const overlay = preview?.querySelector("#preview-overlay");

  if (!preview || !img) {
    console.warn("[preview.sync] preview-area not found.");
    return;
  }

  // -----------------------------------------------------------
  // ⚙️ 旧プレビューの除外（自動生成UI内の重複防止）
  // -----------------------------------------------------------
  const oldPreviews = document.querySelectorAll(
    'div[id^="preview-"]:not(#preview-area), img[id^="preview-"]:not(#preview-bg)'
  );
  oldPreviews.forEach((el) => {
    el.style.display = "none";
    el.style.visibility = "hidden";
    el.style.opacity = "0";
    el.style.pointerEvents = "none";
  });
  log(`旧プレビューを ${oldPreviews.length} 個非表示にしました。`);

  // -----------------------------------------------------------
  // 🎨 折りたたみプレビューの開閉ログ
  // -----------------------------------------------------------
  const details = document.getElementById("preview-toggle");
  if (details) {
    details.addEventListener("toggle", () => {
      log(`プレビュー表示: ${details.open ? "開く" : "閉じる"}`);
    });
  }

  // -----------------------------------------------------------
  // 🌄 初期画像設定（黒防止）
  // -----------------------------------------------------------
  if (!img.src || img.src.endsWith("default.jpg") === false) {
    img.src = "./assets/background/default.jpg";
    log("初期背景を設定しました: default.jpg");
  }

  // -----------------------------------------------------------
  // 💡 エフェクト適用関数群
  // -----------------------------------------------------------
  const applyClass = (cls) => {
    preview.className = "preview-pane " + cls;
  };

  const applyEffect = (type, strength = 1.0) => {
    switch (type) {
      case "lighting-soft":
        applyClass("fx-fantasy");
        break;
      case "lighting-bloom":
        applyClass("fx-bloom");
        break;
      case "lighting-vignette":
        applyClass("fx-vignette");
        break;
      default:
        applyClass("");
    }
  };

  // -----------------------------------------------------------
  // 🔁 照明・ムードのリアルタイム追従
  // -----------------------------------------------------------
  window.addEventListener("lightingChange", (e) => {
    const mode = e.detail?.mode || "none";
    log(`Lighting changed: ${mode}`);
    applyEffect(`lighting-${mode}`);
  });

  window.addEventListener("moodFantasyChange", (e) => {
    const mood = e.detail?.mood || "neutral";
    log(`Fantasy mood: ${mood}`);
    applyEffect(`lighting-${mood}`);
  });

  // -----------------------------------------------------------
  // 🔧 汎用タグ操作によるビジュアル同期
  // -----------------------------------------------------------
  const observer = new MutationObserver(() => {
    const tagsBox = document.querySelector("#generated-tags");
    if (!tagsBox) return;
    const tags = tagsBox.textContent || "";
    if (tags.includes("bloom")) applyEffect("lighting-bloom");
    else if (tags.includes("shadow")) applyEffect("lighting-vignette");
    else if (tags.includes("glow")) applyEffect("lighting-soft");
    else applyEffect("none");
  });

  observer.observe(document.body, {
    subtree: true,
    childList: true,
    characterData: true,
  });

  log("プレビュー同期初期化完了（折りたたみ + 追従 + 黒防止）");
})();