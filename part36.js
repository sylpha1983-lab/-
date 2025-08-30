/* ============================================
   Heart Pack — part36.js (fixed register format)
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
        { id: "heart-awe-eyes", label: "ハート目・ときめき / heart-awe-eyes" },
        { id: "blush-tinge",    label: "ほの赤らみ / blush-tinge" },
      ],
    },
    {
      name: "Effects / エフェクト",
      items: [
        { id: "heart-veil",        label: "ハートのヴェール / heart-veil" },
        { id: "floating-hearts",   label: "浮遊ハート / floating-hearts" },
        { id: "glow-rose",         label: "ローズ発光 / glow-rose" },
      ],
    },
  ];

  const presets = [
    {
      id: "Heart-Veil-Aura",
      label: "ハートヴェール・オーラ / Heart-Veil-Aura",
      tags: ["heart-veil", "floating-hearts", "glow-rose"],
    },
  ];

  register("part36", { categories, presets });
})(window);