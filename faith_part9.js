/* faith_part9.js v1.0 (2025-09-09) */
// 役割: 表情（faith=表情カタログ）。UMD/IIFEで登録。
// ※ 後で categories[].items[] に実データを追加してください。
(function (g) {
  "use strict";
  const data = {
    // 形式固定: { name, items:[{id,label}] }
    categories: [
      // 例:
      // { name: "喜 / Joy", items:[ { id:"smile-soft", label:"微笑み / smile (soft)" } ] },
      // { name: "怒 / Anger", items:[ ... ] },
      // { name: "哀 / Sadness", items:[ ... ] },
      // { name: "楽 / Fun", items:[ ... ] },
    ],
    // faith側は presets を持たない（プリセットは presets_partN.js で扱う）
    presets: [],
  };

  // 推奨：統一レジストリ（カテゴリー名はfaith固定）
  if (typeof g.__registerPromptPart === "function") {
    g.__registerPromptPart("faith_part9", data); // 既存ローダが "faith_partN" をパースして登録
  }

  // 互換: __parts 直補完（保険）
  g.__parts = g.__parts || { faith:{}, background:{}, effect:{}, pose:{}, hair:{}, presets:{} };
  g.__parts.faith = g.__parts.faith || {};
  g.__parts.faith[9] = data;

})(window);