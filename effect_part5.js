/* ============================================
   effect_part5.js — エフェクトカタログ (part5)
   置き場所：builder_main.html と同じフォルダ
   読込方式：<script src="effect_part5.js"></script>
   登録先  ：window.__registerEffectPart('effect_part5', data)
   ============================================ */
(function (w) {
  const items = [
    // Lines / 線
    { id: 'impact-lines-bold',   label: '集中線・太 / impact-lines-bold' },
    { id: 'impact-lines-ultra',  label: '集中線・極太 / impact-lines-ultra' },
    { id: 'speed-lines-arc',     label: 'スピード線・アーク / speed-lines-arc' },

    // Particles / 粒子
    { id: 'sparkle-burst',       label: 'スパークル・バースト / sparkle-burst' },
    { id: 'dust-soft',           label: 'ソフト・ダスト / dust-soft' },
    { id: 'bokeh-ring',          label: 'ボケ輪 / bokeh-ring' },

    // Weather / 天候
    { id: 'drizzle-veil',        label: 'ヴェール霧雨 / drizzle-veil' },
    { id: 'snow-feather',        label: '綿雪 / snow-feather' },

    // VFX / その他
    { id: 'under-eye-trench',    label: '目の下の溝影 / under-eye-trench' },
    { id: 'screen-tone-dots',    label: 'トーン・ドット細 / screen-tone-dots' },
    { id: 'film-grain-subtle',   label: '微粒子フィルム / film-grain-subtle' }
  ];

  const data = {
    categories: [
      { name: 'エフェクト (part5)', items }
    ]
  };

  if (w.__registerEffectPart) w.__registerEffectPart('effect_part5', data);
})(window);