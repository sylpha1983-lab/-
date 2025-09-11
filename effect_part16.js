/* effect_part16.js — v1.0
   旧 part16.js の Effects をカテゴリ別に登録
   登録API: window.__registerEffectPart('effect_part16', data)
*/
(function (g) {
  const byCat = {
    "Light / 光": [
      { id: "rim-light-triple",    label: "トリプル・リムライト / rim-light-triple" },
      { id: "catchlight-heart",    label: "キャッチライト・ハート / catchlight-heart" },
      { id: "softbox-light",       label: "ソフトボックス光 / softbox-light" },
      { id: "window-stripe-light", label: "窓の縞影ライト / window-stripe-light" },
      { id: "backlight-ring",      label: "バックライト・リング / backlight-ring" }
    ],
    "Lines / 線": [
      { id: "pulse-lines",         label: "鼓動パルス線 / pulse-lines" },
      { id: "coil-lines",          label: "コイル線 / coil-lines" },
      { id: "radial-fine-burst",   label: "放射・細バースト / radial-fine-burst" }
    ],
    "Particles / 粒子": [
      { id: "glitter-fall",        label: "グリッター降り / glitter-fall" },
      { id: "confetti-spark",      label: "紙吹雪スパーク / confetti-spark" },
      { id: "mist-beads",          label: "ミストの粒 / mist-beads" },
      { id: "snow-crystal",        label: "雪の結晶 / snow-crystal" }
    ],
    "Weather / 天候": [
      { id: "rain-streaks-diag",   label: "雨の筋・斜め / rain-streaks-diag" },
      { id: "downpour-diagonal",   label: "土砂降り・斜線 / downpour-diagonal" },
      { id: "blizzard-swirl",      label: "吹雪・渦 / blizzard-swirl" }
    ],
    "VFX / その他": [
      { id: "film-scratch-fine",   label: "フィルム傷・細 / film-scratch-fine" },
      { id: "double-exposure-soft",label: "二重露光・ソフト / double-exposure-soft" },
      { id: "light-leak-soft",     label: "ライトリーク・やわら / light-leak-soft" },
      { id: "chromatic-ring-soft", label: "色収差リング・弱 / chromatic-ring-soft" }
    ]
  };

  const categories = Object.entries(byCat).map(([name, items]) => ({ name, items }));

  g.__registerEffectPart && g.__registerEffectPart("effect_part16", { categories, presets: [] });
})(window);