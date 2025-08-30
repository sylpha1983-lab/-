<!-- 保存名: part32.js -->
/* ============================================
   Moaning / Whisper Heart Pack — part32.js (fixed)
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
        { id: "moaning-heart-symbols", label: "うめきハート記号 / moaning-heart-symbols" },
        { id: "whisper-hearts", label: "ささやきハート / whisper-hearts" },
        { id: "heart-echo", label: "ハート・エコー / heart-echo" },
      ],
    },
  ];

  const presets = [
    {
      id: "Moaning-Heart-Field",
      label: "うめきハート・フィールド / Moaning-Heart-Field",
      tags: [
        "heart-particles",
        "floating-hearts",
        "moaning-heart-symbols",
        "heart-echo",
        "glow-pink",
      ],
    },
  ];

  register("part32", { categories, presets });
})(window);