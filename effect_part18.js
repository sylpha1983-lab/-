/* effect_part18.js — v1.0 (split from part18) */
(function () {
  const categories = [
    {
      name: "Light / 光",
      items: [
        { id: "eyelight-softbar",  label: "アイライト・ソフトバー / eyelight-softbar" },
        { id: "kiss-light",        label: "キスライト（頬狙い） / kiss-light" },
        { id: "halo-ring-thin",    label: "薄いリングハロー / halo-ring-thin" },
        { id: "backglow-warm",     label: "背面グロー・暖 / backglow-warm" }
      ]
    },
    {
      name: "Lines / 線",
      items: [
        { id: "impact-spark-lines", label: "火花集中線 / impact-spark-lines" },
        { id: "wave-lines-soft",    label: "波紋線・柔 / wave-lines-soft" }
      ]
    },
    {
      name: "Particles / 粒子",
      items: [
        { id: "glimmer-dust",       label: "微光ダスト / glimmer-dust" },
        { id: "soft-spark-points",  label: "柔スパーク点 / soft-spark-points" },
        { id: "petal-swirls",       label: "花びらスワール / petal-swirls" }
      ]
    },
    {
      name: "Weather / 天候",
      items: [
        { id: "mist-ribbon",        label: "リボン状の霧 / mist-ribbon" },
        { id: "spark-rain",         label: "きら雨 / spark-rain" }
      ]
    },
    {
      name: "VFX / その他",
      items: [
        { id: "tone-softgrain",     label: "ソフト粒状トーン / tone-softgrain" },
        { id: "soft-chromatic",     label: "弱色収差 / soft-chromatic" },
        { id: "narrative-frame",    label: "物語フレーム / narrative-frame" }
      ]
    }
  ];

  const data = { categories, presets: [] };

  if (typeof window !== "undefined" && window.__registerEffectPart) {
    window.__registerEffectPart("effect_part18", data);
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = data;
  }
})();