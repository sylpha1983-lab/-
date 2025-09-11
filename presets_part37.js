/* presets_part36.js — from part37 (Presets only) */
(function (g) {
  const register = g.__registerPresetPart || function (id, data) {
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  const presets = [
    {
      id: "Ribbon-Hearts-Breeze",
      label: "リボンハートのそよぎ / Ribbon-Hearts-Breeze",
      tags: ["heart-particles", "ribbon-hearts", "glow-pink"]
    }
  ];

  // categories はプリセット専用ファイルでは通常空
  register("presets_part36", { categories: [], presets });
})(window);