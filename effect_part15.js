/* ============================================
   effect_part15.js  (from legacy part15.js effects)
   形式: window.__registerEffectPart('effect_part15', { categories, presets:[] })
   ============================================ */
(function (g) {
  const categories = [
    {
      name: "Light / 光",
      items: [
        { id: "catchlight-star",    label: "キャッチライト・星 / catchlight-star" },
        { id: "catchlight-tear",    label: "キャッチライト・涙 / catchlight-tear" },
        { id: "rim-light-edge",     label: "リムライト・エッジ / rim-light-edge" },
        { id: "bloom-warm",         label: "暖色ブルーム / bloom-warm" },
        { id: "vignette-soft-ring", label: "ソフトリング・ビネット / vignette-soft-ring" }
      ]
    },
    {
      name: "Lines / 線",
      items: [
        { id: "impact-lines-needle",  label: "集中線・ニードル / impact-lines-needle" },
        { id: "impact-lines-arcwide", label: "集中線・ワイドアーク / impact-lines-arcwide" },
        { id: "speed-lines-sheer",    label: "スピード線・シア / speed-lines-sheer" }
      ]
    },
    {
      name: "Particles / 粒子",
      items: [
        { id: "sparkle-starfall",   label: "スターフォール・スパークル / sparkle-starfall" },
        { id: "mist-softline",      label: "淡い筋ミスト / mist-softline" },
        { id: "pollen-glow",        label: "花粉グロー / pollen-glow" }
      ]
    },
    {
      name: "Weather / 天候",
      items: [
        { id: "rain-sheen",         label: "雨の膜光 / rain-sheen" },
        { id: "snow-softsheet",     label: "やわ雪・シート / snow-softsheet" }
      ]
    },
    {
      name: "VFX / その他",
      items: [
        { id: "under-eye-softcrease", label: "目の下・柔らしわ影 / under-eye-softcrease" },
        { id: "tone-microdots",      label: "トーン・極小ドット / tone-microdots" },
        { id: "lens-ghost-fine",     label: "レンズゴースト・微 / lens-ghost-fine" }
      ]
    }
  ];

  (g.__registerEffectPart || function(){ (g.__parts = g.__parts||{}).effect = (g.__parts.effect||{}); g.__parts.effect["effect_part15"] = {categories, presets:[]}; })("effect_part15", { categories, presets: [] });
})(window);