/* ============================================
   Neon / City Pop Heart Pack — part52.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  // === Expressions（表情：ネオン×レトロポップ）===
  const expr = [
    { id:'citypop-wink',            label:'シティポップ・ウィンク / city pop wink' },
    { id:'neon-smile-bright',       label:'ネオンに映える笑顔 / neon bright smile' },
    { id:'afterglow-gaze',          label:'アフターグロー視線 / afterglow gaze' },
    { id:'midnight-melancholy',     label:'真夜中のメランコリー / midnight melancholy' },
    { id:'club-heat-flush',         label:'クラブ熱気の紅潮 / club heat flush' },
    { id:'synthwave-cool',          label:'シンセウェイブの静けさ / synthwave cool' }
  ];

  // === Effects（エフェクト：ネオン・街灯・ハート）===
  const eff = [
    { id:'neon-heart-sign',         label:'ネオン看板ハート / neon heart sign' },
    { id:'city-bokeh-heart',        label:'都会ボケ・ハート形 / city bokeh hearts' },
    { id:'vhs-glow-soft',           label:'VHSソフトグロー / soft VHS glow' },
    { id:'chromatic-neon-trim',     label:'色収差ネオントリム / chromatic neon trim' },
    { id:'pulse-heart-outline',     label:'鼓動するハート縁 / pulsing heart outline' },
    { id:'rain-wet-reflection',     label:'雨の路面反射 / wet street reflections' },
    { id:'synth-grid-horizon',      label:'シンセ格子地平 / synth grid horizon' },
    { id:'jukebox-light-flares',    label:'ジュークボックス・フレア / jukebox light flares' }
  ];

  // === Presets（プリセット）===
  const presets = [
    {
      id:'CityPop-Heart-Wink',
      label:'シティポップ・ハートウィンク',
      tags:[
        'citypop-wink','neon-heart-sign','city-bokeh-heart','vhs-glow-soft'
      ]
    },
    {
      id:'Afterglow-Blue-Mood',
      label:'アフターグロー・ブルームード',
      tags:[
        'afterglow-gaze','chromatic-neon-trim','rain-wet-reflection','city-bokeh-heart'
      ]
    },
    {
      id:'Midnight-Melancholy-Beat',
      label:'真夜中のメランコリー・鼓動',
      tags:[
        'midnight-melancholy','pulse-heart-outline','vhs-glow-soft'
      ]
    },
    {
      id:'Club-Heat-Neon-Spark',
      label:'クラブヒート・ネオンスパーク',
      tags:[
        'club-heat-flush','neon-heart-sign','jukebox-light-flares','rain-wet-reflection'
      ]
    },
    {
      id:'Synthwave-Cool-Grid',
      label:'シンセウェイブ・クールグリッド',
      tags:[
        'synthwave-cool','synth-grid-horizon','chromatic-neon-trim','vhs-glow-soft'
      ]
    },
    {
      id:'Neon-Smile-After-Rain',
      label:'ネオンスマイル・雨上がり',
      tags:[
        'neon-smile-bright','rain-wet-reflection','city-bokeh-heart'
      ]
    },
    {
      id:'Heartline-Bokeh-Pulse',
      label:'ハートライン・ボケ・パルス',
      tags:[
        'afterglow-gaze','pulse-heart-outline','city-bokeh-heart','chromatic-neon-trim'
      ]
    },
    {
      id:'Retro-Jukebox-Glow',
      label:'レトロジュークボックス・グロウ',
      tags:[
        'citypop-wink','jukebox-light-flares','vhs-glow-soft','neon-heart-sign'
      ]
    }
  ];

  register('part52',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Neon / City Pop）', items: eff }
    ],
    presets
  });
})(window);