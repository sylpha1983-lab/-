/* ============================================
   Heart Pack — part37.js (fixed register format)
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
        { id: "soft-smile-heart", label: "微笑み＋ハート / soft-smile-heart" },
        { id: "heart-spark-eyes", label: "ハートきらめき目 / heart-spark-eyes" },
      ],
    },
    {
      name: "Effects / エフェクト",
      items: [
        { id: "heart-particles",  label: "ハート粒子 / heart-particles" },
        { id: "ribbon-hearts",    label: "ハートリボン / ribbon-hearts" },
        { id: "glow-pink",        label: "グロー（ピンク） / glow-pink" },
      ],
    },
  ];

  const presets = [
    {
      id: "Ribbon-Hearts-Breeze",
      label: "リボンハートのそよぎ / Ribbon-Hearts-Breeze",
      tags: ["heart-particles", "ribbon-hearts", "glow-pink"],
    },
  ];

  register("part37", { categories, presets });
})(window);