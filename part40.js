/* ============================================
   Heart Pack — part40.js (fixed register format)
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
        { id: "sparkle-heart-eyes", label: "きらめくハート目 / sparkle-heart-eyes" },
        { id: "calm-happy",         label: "穏やかな喜び / calm-happy" },
      ],
    },
    {
      name: "Effects / エフェクト",
      items: [
        { id: "heart-bokeh",      label: "ハート・ボケ / heart-bokeh" },
        { id: "floating-hearts",  label: "浮遊ハート / floating-hearts" },
        { id: "glow-rose",        label: "ローズ発光 / glow-rose" },
      ],
    },
  ];

  const presets = [
    {
      id: "Heart-Bokeh-Dream",
      label: "ハートボケ・ドリーム / Heart-Bokeh-Dream",
      tags: ["heart-bokeh", "floating-hearts", "glow-rose"],
    },
  ];

  register("part40", { categories, presets });
})(window);