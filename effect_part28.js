<!-- effect_part28.js -->
<script>
/* part28: Effects -> effect (Ice & Snow) */
(function () {
  const categories = [
    {
      name: "Effects / エフェクト（Snow & Ice）",
      items: [
        { id: "snowfall-fine",     label: "細雪 / snowfall-fine" },
        { id: "blizzard-swirls",   label: "吹雪の渦 / blizzard-swirls" },
        { id: "ice-crystal-bokeh", label: "氷結晶ボケ / ice-crystal-bokeh" },
        { id: "frost-edges",       label: "霜の縁取り / frost-edges" },
        { id: "glacial-mist",      label: "氷霧 / glacial-mist" }
      ]
    },
    {
      name: "Lighting / ライティング詳細",
      items: [
        { id: "moonlit-ice",   label: "月光の氷 / moonlit-ice" },
        { id: "cold-backlight",label: "冷色逆光 / cold-backlight" },
        { id: "aurora-soft",   label: "オーロラ・ソフト / aurora-soft" },
        { id: "blue-hour-glow",label: "ブルーアワーの光 / blue-hour-glow" },
        { id: "subzero-rim",   label: "サブゼロ・リムライト / subzero-rim" },
        { id: "ice-reflection",label: "氷面反射 / ice-reflection" }
      ]
    },
    {
      name: "VFX / 視覚効果",
      items: [
        { id: "snow-spark-trail",  label: "雪火花トレイル / snow-spark-trail" },
        { id: "crackled-iceframe", label: "ひび割れ氷フレーム / crackled-iceframe" }
      ]
    },
    {
      name: "Background Geometry / 背景ジオメトリ",
      items: [
        { id: "bg-ice-fractal",  label: "氷フラクタル / bg-ice-fractal" },
        { id: "bg-snow-dunes",   label: "雪砂丘パターン / bg-snow-dunes" },
        { id: "bg-frozen-lake",  label: "凍湖パターン / bg-frozen-lake" }
      ]
    },
    {
      name: "Materials / 素材・表面",
      items: [
        { id: "hoarfrost",    label: "樹氷 / hoarfrost" },
        { id: "packed-snow",  label: "踏み固め雪 / packed-snow" },
        { id: "clear-ice",    label: "クリアアイス / clear-ice" }
      ]
    }
  ];

  window.__registerEffectPart && window.__registerEffectPart("effect_part28", { categories, presets: [] });
})();
</script>