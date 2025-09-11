/* presets_part9.js v1.0 (2025-09-09) */
// 役割: プリセット専用。UI/チェッカー互換のためUMD/IIFEで登録。
// ※ 後で presets[] に実データを追加してください。
(function (g) {
  "use strict";
  const data = {
    presets: [
      // { id: "Jealous-Pout-Sharp", label: "嫉妬シャープむくれ", tags: ["jealous","pout","side-eye-sharp","face-gloss","sparkle"] },
      // ← part9.js から抽出して tags に統合して入れてください
    ],
  };

  // 推奨：専用レジストリ
  if (typeof g.__registerPresetPart === "function") {
    g.__registerPresetPart(9, data);
  }

  // 互換：古い環境でも落ちないように念のため最低限の置き土産
  g.__parts = g.__parts || { faith:{}, background:{}, effect:{}, pose:{}, hair:{}, presets:{} };
  g.__parts.presets = g.__parts.presets || {};
  g.__parts.presets[9] = data;

})(window);