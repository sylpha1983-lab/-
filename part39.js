/* ============================================
   Heart Pack — part39.js (fixed register format)
   ============================================ */
(function (g) {
  const register = g.__registerPromptPart ||
    ((id, data) => {
      g.promptBuilder = g.promptBuilder || {};
      g.promptBuilder[id] = data;
    });

  const categories = [
    {
      name: "Expressions / 表情",
      items: [
        { id: "heart-kiss-face",  label: "投げキス・ハート / heart-kiss-face" },
        { id: "smile-bright",     label: "明るい微笑み / smile-bright" },
      ],
    },
    {
      name: "Effects / エフェクト",
      items: [
        { id: "kiss-hearts",      label: "キス・ハート / kiss-hearts" },
        { id: "heart-trails",     label: "ハートの軌跡 / heart-trails" },
        { id: "glow-warm",        label: "ウォーム発光 / glow-warm" },
      ],
    },
  ];

  const presets = [
    {
      id: "Kiss-Heart-Trails",
      label: "キス・ハートの軌跡 / Kiss-Heart-Trails",
      tags: ["kiss-hearts", "heart-trails", "glow-warm"],
    },
  ];

  register("part39", { categories, presets });
})(window);