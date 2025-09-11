/* effect_part39.js */
(function (g) {
  const data = {
    categories: [
      {
        name: "エフェクト",
        items: [
          { id: "heart-bokeh",     label: "ハート・ボケ / heart-bokeh" },
          { id: "floating-hearts", label: "浮遊ハート / floating-hearts" },
          { id: "glow-rose",       label: "ローズ発光 / glow-rose" }
        ]
      }
    ],
    presets: []
  };

  const api = g.__registerEffectPart;
  try {
    if (typeof api === "function") {
      if (api.length >= 3) api("effect", 38, data);
      else api("effect_part38", data);
    } else {
      g.__parts = g.__parts || { presets:{}, faith:{}, background:{}, effect:{}, pose:{}, hair:{} };
      g.__parts.effect["effect_part38"] = data;
    }
  } catch (e) {
    console.error("[effect_part38] register error", e);
  }
})(window);