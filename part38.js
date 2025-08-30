/* ============================================
   Heart Pack — part38.js (fixed register format)
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
        { id: "wink-heart",       label: "ウィンク＋ハート / wink-heart" },
        { id: "blush-soft",       label: "微赤らみ・ソフト / blush-soft" },
      ],
    },
    {
      name: "Effects / エフェクト",
      items: [
        { id: "halo-hearts",      label: "ハート光輪 / halo-hearts" },
        { id: "floating-hearts",  label: "浮遊ハート / floating-hearts" },
        { id: "sparkle-soft",     label: "やわらかスパークル / sparkle-soft" },
      ],
    },
  ];

  const presets = [
    {
      id: "Wink-Heart-Halo",
      label: "ウィンク＆ハート光輪 / Wink-Heart-Halo",
      tags: ["halo-hearts", "floating-hearts", "sparkle-soft"],
    },
  ];

  register("part38", { categories, presets });
})(window);