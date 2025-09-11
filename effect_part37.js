/* effect_part37.js — from part37 (Effects only) */
(function (g) {
  const register = g.__registerEffectPart || function (id, data) {
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  const categories = [
    {
      name: "Effects / エフェクト",
      items: [
        { id: "heart-particles", label: "ハート粒子 / heart-particles" },
        { id: "ribbon-hearts",   label: "ハートリボン / ribbon-hearts" },
        { id: "glow-pink",       label: "グロー（ピンク） / glow-pink" }
      ]
    }
  ];

  const presets = []; // エフェクト側には今回プリセットなし

  register("effect_part37", { categories, presets });
})(window);