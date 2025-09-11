/* presets_part39.js */
(function (g) {
  const data = {
    presets: [
      {
        id: "Heart-Bokeh-Dream",
        label: "ハートボケ・ドリーム / Heart-Bokeh-Dream",
        tags: ["heart-bokeh", "floating-hearts", "glow-rose"]
      }
    ]
  };

  const api = g.__registerPresetPart;
  try {
    if (typeof api === "function") {
      if (api.length >= 3) api("presets", 38, data);
      else api("presets_part38", data);
    } else {
      g.__parts = g.__parts || { presets:{}, faith:{}, background:{}, effect:{}, pose:{}, hair:{} };
      g.__parts.presets["presets_part38"] = data;
    }
  } catch (e) {
    console.error("[presets_part38] register error", e);
  }
})(window);