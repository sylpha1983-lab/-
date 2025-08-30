<!-- 保存名: part34.js -->
/* ============================================
   Melancholy Heart Pack — part34.js (fixed)
   ============================================ */
(function (g) {
  const register = g.__registerPromptPart ||
    ((id, data) => {
      g.promptBuilder = g.promptBuilder || {};
      g.promptBuilder[id] = data;
    });

  const categories = [
    {
      name: "Effects / エフェクト",
      items: [
        { id: "faded-hearts", label: "フェード・ハート / faded-hearts" },
        { id: "rainy-gloss", label: "雨粒グロス / rainy-gloss" },
        { id: "blue-glow", label: "ブルー・グロー / blue-glow" },
      ],
    },
  ];

  const presets = [
    {
      id: "Melancholy-Blue-Heart",
      label: "メランコリー・ブルー・ハート / Melancholy-Blue-Heart",
      tags: ["faded-hearts", "rainy-gloss", "blue-glow"],
    },
  ];

  register("part34", { categories, presets });
})(window);