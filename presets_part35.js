// presets_part35.js  v1.0 (2025-09-11)
(function (w) {
  // Metallic Heart Pack のプリセットを分離
  const presets = [
    {
      id: "Chrome-Heart-Burst",
      label: "クローム・ハート・バースト / Chrome-Heart-Burst",
      // 元データの tags をそのまま移植
      tags: ["metallic-hearts", "chrome-gloss", "specular-spark"]
    }
  ];

  // 必須：presetsレジストリに登録
  if (w.__registerPresetPart) {
    w.__registerPresetPart("presets_part35", { presets });
  } else {
    // フォールバック（旧互換）
    w.__parts = w.__parts || { presets: {} };
    w.__parts.presets["presets_part35"] = { presets };
  }
})(window);