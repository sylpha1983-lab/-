/* effect_part10.js v1.0 (2025-09-09)
   - 役割: エフェクトカタログ。part10.js の effects をカテゴリ分割して投入
*/
(function (g) {
  "use strict";
  const data = {
    categories: [
      {
        name: "Light / 光",
        items: [
          { id:"spotlight-circle",   label:"スポットライト・円 / spotlight-circle" },
          { id:"shadow-intense",     label:"強い影・ドラマチック / shadow-intense" },
          { id:"glow-soft-pulse",    label:"ソフトパルス光 / glow-soft-pulse" }
        ]
      },
      {
        name: "Lines / 線",
        items: [
          { id:"focus-burst",        label:"集中バースト線 / focus-burst" },
          { id:"zigzag-tension",     label:"ジグザグ緊張線 / zigzag-tension" }
        ]
      },
      {
        name: "Particles / 粒子",
        items: [
          { id:"spark-dust",         label:"火花ダスト / spark-dust" },
          { id:"ember-float",        label:"燃えかすフロート / ember-float" }
        ]
      },
      {
        name: "Weather / 天候",
        items: [
          { id:"gust-wind",          label:"突風エフェクト / gust-wind" },
          { id:"heatwave-ripple",    label:"陽炎リップル / heatwave-ripple" }
        ]
      },
      {
        name: "VFX / その他",
        items: [
          { id:"screen-shake",       label:"画面揺れ / screen-shake" },
          { id:"distortion-warp",    label:"歪みワープ / distortion-warp" },
          { id:"color-invert-flash", label:"色反転フラッシュ / color-invert-flash" }
        ]
      }
    ],
    presets: []
  };

  // 推奨レジストリ
  if (typeof g.__registerEffectPart === "function") g.__registerEffectPart(10, data);

  // 互換フォールバック
  g.__parts = g.__parts || { faith:{}, background:{}, effect:{}, pose:{}, hair:{}, presets:{} };
  g.__parts.effect = g.__parts.effect || {};
  g.__parts.effect[10] = data;
})(window);