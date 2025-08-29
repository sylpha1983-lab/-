/* ============================================
   Expression + Effects Builder — part28.js (28/40)
   Theme: 氷・雪 / Ice & Snow
   形式: window.expressionEffects["part28"] = { expressions, effects, presets }
   ============================================ */
(function (g) {
  'use strict';
  g.expressionEffects = g.expressionEffects || {};

  // ===== Expressions（表情）=====
  const expressions = [
    { id:'cool-composure',     jp:'クールな平静',           category:'Expressions / 表情' },
    { id:'frosty-gaze',        jp:'氷の視線',               category:'Expressions / 表情' },
    { id:'crystal-smile',      jp:'結晶の微笑み',           category:'Expressions / 表情' },
    { id:'winter-melancholy',  jp:'冬の憂い',               category:'Expressions / 表情' },
    { id:'hazy-breath-soft',   jp:'白息・やわら',           category:'Expressions / 表情' },
    { id:'sparkling-joy',      jp:'きらめく喜び',           category:'Expressions / 表情' }
  ];

  // ===== Effects（エフェクト）=====
  const effects = [
    // Snow & Ice
    { id:'snowfall-fine',      jp:'細雪',                    category:'Effects / エフェクト' },
    { id:'blizzard-swirls',    jp:'吹雪の渦',                category:'Effects / エフェクト' },
    { id:'ice-crystal-bokeh',  jp:'氷結晶ボケ',              category:'Effects / エフェクト' },
    { id:'frost-edges',        jp:'霜の縁取り',              category:'Effects / エフェクト' },
    { id:'glacial-mist',       jp:'氷霧',                    category:'Effects / エフェクト' },

    // Light
    { id:'moonlit-ice',        jp:'月光の氷',                category:'Effects / エフェクト' },
    { id:'cold-backlight',     jp:'冷色逆光',                category:'Effects / エフェクト' },
    { id:'aurora-soft',        jp:'オーロラ・ソフト',        category:'Effects / エフェクト' },

    // VFX
    { id:'snow-spark-trail',   jp:'雪火花トレイル',          category:'Effects / エフェクト' },
    { id:'crackled-iceframe',  jp:'ひび割れ氷フレーム',      category:'Effects / エフェクト' },

    // Lighting details / Materials / BG geometry（必要に応じて流用）
    { id:'blue-hour-glow',     jp:'ブルーアワーの光',        category:'Lighting / ライティング詳細' },
    { id:'subzero-rim',        jp:'サブゼロ・リムライト',    category:'Lighting / ライティング詳細' },
    { id:'ice-reflection',     jp:'氷面反射',                category:'Lighting / ライティング詳細' },
    { id:'bg-ice-fractal',     jp:'氷フラクタル',            category:'Background Geometry / 背景ジオメトリ' },
    { id:'bg-snow-dunes',      jp:'雪砂丘パターン',          category:'Background Geometry / 背景ジオメトリ' },
    { id:'bg-frozen-lake',     jp:'凍湖パターン',            category:'Background Geometry / 背景ジオメトリ' },
    { id:'hoarfrost',          jp:'樹氷',                    category:'Materials / 素材・表面' },
    { id:'packed-snow',        jp:'踏み固め雪',              category:'Materials / 素材・表面' },
    { id:'clear-ice',          jp:'クリアアイス',            category:'Materials / 素材・表面' }
  ];

  // ===== Presets（表情＋エフェクト混合）=====
  // 旧ファイルの tags から、表情とエフェクトを分離しました。
  const presets = [
    {
      id: 'Crystal-Serenity',
      label: '結晶の静謐',
      expressions: ['cool-composure','frosty-gaze'],
      effects:     ['ice-crystal-bokeh','blue-hour-glow','bg-ice-fractal','clear-ice']
    },
    {
      id: 'Moonlit-Snow',
      label: '月光の雪景',
      expressions: ['winter-melancholy','hazy-breath-soft'],
      effects:     ['snowfall-fine','moonlit-ice','cold-backlight','bg-frozen-lake']
    },
    {
      id: 'Aurora-Joy',
      label: 'オーロラの歓び',
      expressions: ['sparkling-joy','crystal-smile'],
      effects:     ['glacial-mist','aurora-soft','subzero-rim','bg-snow-dunes']
    },
    {
      id: 'Blizzard-Resolve',
      label: '吹雪の決意',
      expressions: ['frosty-gaze','cool-composure'],
      effects:     ['blizzard-swirls','crackled-iceframe','ice-reflection','hoarfrost']
    },
    {
      id: 'Snow-Trail-Poem',
      label: '雪の軌跡の詩',
      expressions: ['winter-melancholy','hazy-breath-soft'],
      effects:     ['snow-spark-trail','blue-hour-glow','packed-snow','bg-ice-fractal']
    }
  ];

  g.expressionEffects["part28"] = { expressions, effects, presets };
})(window);