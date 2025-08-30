<!-- 保存名: part33.js -->
/* ============================================
   Retro Pixel Heart Pack — part33.js (fixed format)
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
        { id: "pixel-hearts", label: "ピクセル・ハート / pixel-hearts" },
        { id: "scanline-overlay", label: "スキャンライン / scanline-overlay" },
        { id: "crt-glow", label: "CRT グロー / crt-glow" },
      ],
    },
  ];

  const presets = [
    {
      id: "Retro-Pixel-Heart",
      label: "レトロ・ピクセル・ハート / Retro-Pixel-Heart",
      tags: ["pixel-hearts", "scanline-overlay", "crt-glow"],
    },
  ];

  register("part33", { categories, presets });
})(window);