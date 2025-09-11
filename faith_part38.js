/* faith_part38.js */
(function (g) {
  const data = {
    categories: [
      {
        name: "表情",
        items: [
          { id: "sparkle-heart-eyes", label: "きらめくハート目 / sparkle-heart-eyes" },
          { id: "calm-happy",         label: "穏やかな喜び / calm-happy" }
        ]
      }
    ],
    presets: []
  };

  const api = g.__registerPromptPart;
  try {
    if (typeof api === "function") {
      if (api.length >= 3) api("faith", 38, data);
      else api("faith_part38", data);
    } else {
      g.__parts = g.__parts || { presets:{}, faith:{}, background:{}, effect:{}, pose:{}, hair:{} };
      g.__parts.faith["faith_part38"] = data;
    }
  } catch (e) {
    console.error("[faith_part38] register error", e);
  }
})(window);