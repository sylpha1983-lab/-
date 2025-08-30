<!-- 保存名: part35.js -->
/* ============================================
   Metallic Heart Pack — part35.js (fixed)
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
        { id: "metallic-hearts", label: "メタリック・ハート / metallic-hearts" },
        { id: "chrome-gloss", label: "クローム・グロス / chrome-gloss" },
        { id: "specular-spark", label: "スペキュラ・スパーク / specular-spark" },
      ],
    },
  ];

  const presets = [
    {
      id: "Chrome-Heart-Burst",
      label: "クローム・ハート・バースト / Chrome-Heart-Burst",
      tags: ["metallic-hearts", "chrome-gloss", "specular-spark"],
    },
  ];

  register("part35", { categories, presets });
})(window);