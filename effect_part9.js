/* effect_part9.js v1.0 (2025-09-09) */
// 役割: エフェクト（effectカタログ）。UMD/IIFEで登録。
// ※ 後で categories[].items[] に実データを追加してください。
(function (g) {
  "use strict";
  const data = {
    categories: [
      // 例:
      // { name:"光 / Light", items:[ { id:"sparkle", label:"スパークル / sparkle" }, { id:"rim-light", label:"リムライト / rim light" } ] },
      // { name:"ライン / Lines", items:[ { id:"impact-lines", label:"集中線 / impact lines" } ] },
      // { name:"効果 / Others", items:[ { id:"bloom", label:"ブルーム / bloom" }, { id:"vignette", label:"ビネット / vignette" } ] },
    ],
    presets: [],
  };

  // 推奨：専用レジストリ（存在すれば）
  if (typeof g.__registerEffectPart === "function") {
    g.__registerEffectPart(9, data);
  }

  // 互換：faithと同様に __parts にも反映（保険）
  g.__parts = g.__parts || { faith:{}, background:{}, effect:{}, pose:{}, hair:{}, presets:{} };
  g.__parts.effect = g.__parts.effect || {};
  g.__parts.effect[9] = data;

})(window);