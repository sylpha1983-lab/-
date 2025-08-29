/* ============================================
   Expression + Effects Builder — part27.js (27/40)
   Theme: 炎・火炎 / Fire & Flames
   形式統一版：window.expressionEffects["part27"] = {expressions, effects, presets}
   ============================================ */
(function (g) {
  g.expressionEffects = g.expressionEffects || {};

  // ===== Expressions / 表情 =====
  const expressions = [
    { id: 'fiery-determination', label: '燃える決意 / fiery determination', category: 'Emotion / 感情' },
    { id: 'ember-gaze',          label: '火の粉の視線 / ember gaze',       category: 'Emotion / 感情' },
    { id: 'warm-smile',          label: '暖かな微笑み / warm smile',       category: 'Emotion / 感情' },
    { id: 'blaze-rage',          label: '烈火の怒り / blaze rage',          category: 'Emotion / 感情' },
    { id: 'flame-exhilaration',  label: '火炎の高揚 / flame exhilaration',  category: 'Emotion / 感情' },
    { id: 'smoldering-sadness',  label: '燻る悲しみ / smoldering sadness',  category: 'Emotion / 感情' }
  ];

  // ===== Effects / エフェクト（炎・煙・光源・背景などを統合） =====
  const effects = [
    // Flame / 炎
    { id: 'fire-aura',           label: '炎のオーラ / fire aura',                 category: 'Effects / エフェクト' },
    { id: 'ember-drifts-strong', label: '強い火の粉漂い / strong ember drifts',   category: 'Effects / エフェクト' },
    { id: 'torch-flicker',       label: '松明の揺らめき / torch flicker',         category: 'Effects / エフェクト' },
    { id: 'inferno-surge',       label: '業火の奔流 / inferno surge',             category: 'Effects / エフェクト' },
    { id: 'candle-softlight',    label: 'キャンドル光 / candle softlight',        category: 'Effects / エフェクト' },

    // Smoke & Heat / 煙・陽炎
    { id: 'smoke-curl',          label: '煙の渦巻き / curling smoke',             category: 'Effects / エフェクト' },
    { id: 'heat-haze',           label: '陽炎 / heat haze',                       category: 'Effects / エフェクト' },
    { id: 'charred-glow',        label: '焦げ跡の輝き / charred glow',            category: 'Effects / エフェクト' },

    // VFX
    { id: 'phoenix-flare',       label: 'フェニックスフレア / phoenix flare',     category: 'VFX / その他' },
    { id: 'flame-wings',         label: '炎の翼 / flame wings',                   category: 'VFX / その他' },
    { id: 'fire-circle',         label: '炎の円環 / circle of fire',              category: 'VFX / その他' },

    // Lighting details / ライティング詳細
    { id: 'orange-backlight',    label: 'オレンジ逆光 / orange backlight',        category: 'Lighting / ライティング詳細' },
    { id: 'bonfire-glow',        label: '焚き火光 / bonfire glow',                category: 'Lighting / ライティング詳細' },
    { id: 'molten-reflect',      label: '溶岩反射 / molten reflection',           category: 'Lighting / ライティング詳細' },

    // Background Geometry / 背景ジオメトリ
    { id: 'bg-flame-pattern',    label: '炎パターン / flame pattern',             category: 'Background Geometry / 背景ジオメトリ' },
    { id: 'bg-cracked-earth',    label: 'ひび割れ地表 / cracked earth',           category: 'Background Geometry / 背景ジオメトリ' },
    { id: 'bg-ash-cloud',        label: '灰雲 / ash cloud',                       category: 'Background Geometry / 背景ジオメトリ' },

    // Materials / 素材・表面
    { id: 'charcoal',            label: '木炭 / charcoal',                         category: 'Materials / 素材・表面' },
    { id: 'molten-metal',        label: '溶けた金属 / molten metal',               category: 'Materials / 素材・表面' },
    { id: 'burnt-wood',          label: '焦げた木 / burnt wood',                   category: 'Materials / 素材・表面' }
  ];

  // ===== Presets（表情＋エフェクト分離版） =====
  const presets = [
    {
      id: 'Flame-Warrior',
      label: '炎の戦士',
      expressions: ['fiery-determination','blaze-rage'],
      effects: ['fire-aura','heat-haze','orange-backlight','bg-flame-pattern']
    },
    {
      id: 'Candle-Warmth',
      label: 'キャンドルの暖かさ',
      expressions: ['warm-smile'],
      effects: ['candle-softlight','smoke-curl','bonfire-glow','charcoal','bg-ash-cloud']
    },
    {
      id: 'Inferno-Fury',
      label: '業火の憤怒',
      expressions: ['blaze-rage'],
      effects: ['inferno-surge','phoenix-flare','molten-reflect','bg-cracked-earth','molten-metal']
    },
    {
      id: 'Smolder-Sadness',
      label: '燻る悲しみ',
      expressions: ['smoldering-sadness','ember-gaze'],
      effects: ['ember-drifts-strong','charred-glow','burnt-wood','bg-ash-cloud']
    },
    {
      id: 'Phoenix-Rebirth',
      label: '不死鳥の再生',
      expressions: ['flame-exhilaration'],
      effects: ['flame-wings','phoenix-flare','orange-backlight','bg-flame-pattern','molten-metal']
    }
  ];

  g.expressionEffects["part27"] = { expressions, effects, presets };
})(window);