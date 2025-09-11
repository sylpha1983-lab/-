/* presets_part32.js — from part32 (Preset only) */
(function (g) {
  const data = {
    presets: [
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
    ],
  };

  (g.__registerPresetPart ||
    function (name, payload) {
      g.__parts = g.__parts || {};
      (g.__parts.presets || (g.__parts.presets = {}))[name] = payload;
    }
  )("presets_part32", data);
})(window);