// effect_part38.js
(function () {
  const data = {
    categories: [
      {
        name: "Hearts / ハート系",
        items: [
          { id: "halo-hearts",     label: "ハート光輪 / halo-hearts" },
          { id: "floating-hearts", label: "浮遊ハート / floating-hearts" },
          { id: "sparkle-soft",    label: "やわらかスパークル / sparkle-soft" }
        ]
      }
    ]
  };
  try {
    if (window.__registerEffectPart) {
      window.__registerEffectPart(38, data);
    } else {
      window.__parts = window.__parts || { presets:{}, faith:{}, background:{}, effect:{}, pose:{}, hair:{} };
      window.__parts.effect["effect_part38"] = data;
    }
  } catch (e) {
    console && console.warn && console.warn("effect_part38 register failed:", e);
  }
})();