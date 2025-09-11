// faith_part36.js
(function () {
  const data = {
    categories: [
      {
        name: "Expressions / 表情",
        items: [
          { id: "wink-heart", label: "ウィンク＋ハート / wink-heart" },
          { id: "blush-soft", label: "微赤らみ・ソフト / blush-soft" }
        ]
      }
    ]
  };
  try {
    if (window.__registerPromptPart) {
      window.__registerPromptPart(36, data);
    } else {
      window.__parts = window.__parts || { presets:{}, faith:{}, background:{}, effect:{}, pose:{}, hair:{} };
      window.__parts.faith["faith_part36"] = data;
    }
  } catch (e) {
    console && console.warn && console.warn("faith_part36 register failed:", e);
  }
})();