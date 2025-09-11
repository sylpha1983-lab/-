/* ============================================
   presets_part36.js  (from part36.js)
   - register: __registerPresetPart
   - payload: Presets only (tags = ids)
   ============================================ */
(function (g) {
  const register = g.__registerPresetPart || function(){};

  const presets = [
    {
      id: "Heart-Veil-Aura",
      label: "ハートヴェール・オーラ / Heart-Veil-Aura",
      tags: ["heart-veil", "floating-hearts", "glow-rose"]
    }
  ];

  register("presets_part36", { presets });
})(window);