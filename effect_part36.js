/* ============================================
   effect_part36.js  (from part36.js)
   - register: __registerEffectPart
   - payload: Effects only
   ============================================ */
(function (g) {
  const register = g.__registerEffectPart || function(){};

  const categories = [
    {
      name: "Effects / エフェクト",
      items: [
        { id: "heart-veil",      label: "ハートのヴェール / heart-veil" },
        { id: "floating-hearts", label: "浮遊ハート / floating-hearts" },
        { id: "glow-rose",       label: "ローズ発光 / glow-rose" }
      ]
    }
  ];

  const presets = []; // プリセット本体は presets_part36.js 側へ

  register("effect_part36", { categories, presets });
})(window);