// presets_part38.js
(function () {
  const data = {
    presets: [
      {
        id: "Wink-Heart-Halo",
        label: "ウィンク＆ハート光輪 / Wink-Heart-Halo",
        // tags は英語idで統一（expressions/effects を統合）
        tags: ["wink-heart", "blush-soft", "halo-hearts", "floating-hearts", "sparkle-soft"]
      }
    ]
  };
  try {
    if (window.__registerPresetPart) {
      window.__registerPresetPart(38, data);
    } else {
      window.__parts = window.__parts || { presets:{}, faith:{}, background:{}, effect:{}, pose:{}, hair:{} };
      window.__parts.presets["presets_part38"] = data;
    }
  } catch (e) {
    console && console.warn && console.warn("presets_part38 register failed:", e);
  }
})();