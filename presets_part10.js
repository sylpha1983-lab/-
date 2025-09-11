/* presets_part10.js v1.0 (2025-09-09)
   - 役割: プリセット専用（expressions/effects → tags に統合）
   - 由来: part10.js の presets を変換
*/
(function (g) {
  "use strict";
  const data = {
    presets: [
      {
        id: "Shock-Burst",
        label: "驚愕・バースト集中線",
        tags: ["wide-eyes-shock","open-gasp","shock-fear","focus-burst","spotlight-circle","color-invert-flash"]
      },
      {
        id: "Irritation-Zigzag",
        label: "苛立ち・ジグザグ緊張線",
        tags: ["rolling-eyes-irrit","brow-low-frown","irritated","zigzag-tension","shadow-intense","screen-shake"]
      },
      {
        id: "Calm-Glow",
        label: "穏やか・ソフトグロウ",
        tags: ["gentle-smile","brow-arched-pride","calm-warmth","glow-soft-pulse","ember-float","heatwave-ripple"]
      },
      {
        id: "Tense-Gust",
        label: "緊張・突風",
        tags: ["clenched-grit","tense","gleam-star","gust-wind","distortion-warp","spark-dust"]
      },
      {
        id: "Relaxed-Drift",
        label: "リラックス・漂い",
        tags: ["relaxed","flutter-eyelids","gentle-smile","glow-soft-pulse","ember-float","screen-shake"]
      },
      {
        id: "Bewildered-Invert",
        label: "当惑・反転フラッシュ",
        tags: ["bewildered","wide-eyes-shock","open-gasp","color-invert-flash","focus-burst","shadow-intense"]
      }
    ]
  };

  // 推奨レジストリ
  if (typeof g.__registerPresetPart === "function") g.__registerPresetPart(10, data);

  // 互換フォールバック
  g.__parts = g.__parts || { faith:{}, background:{}, effect:{}, pose:{}, hair:{}, presets:{} };
  g.__parts.presets = g.__parts.presets || {};
  g.__parts.presets[10] = data;
})(window);