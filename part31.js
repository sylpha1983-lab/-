<!-- 保存名: part31.js -->
/* ============================================
   Classic Heart Pack — part31.js (fixed format)
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
        { id: "heart-eyes", label: "ハート目 / heart-eyes" },
        { id: "blush-soft", label: "微赤らみ・ソフト / blush-soft" },
      ],
    },
    {
      name: "Effects / エフェクト",
      items: [
        { id: "heart-particles", label: "ハート粒子 / heart-particles" },
        { id: "floating-hearts", label: "浮遊ハート / floating-hearts" },
        { id: "glow-pink", label: "グロー（ピンク） / glow-pink" },
      ],
    },
  ];

  const presets = [
    {
      id: "Classic-Heart-Aura",
      label: "古典ハート・オーラ / Classic-Heart-Aura",
      tags: ["heart-particles", "floating-hearts", "glow-pink"],
    },
  ];

  register("part31", { categories, presets });
})(window);