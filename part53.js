/* ============================================
   Glitter / Confetti Heart Pack — part53.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  // === Expressions（表情：きらめき・高揚）===
  const expr = [
    { id:'spark-joy-smile',        label:'きら喜びスマイル / sparkling joy smile' },
    { id:'confetti-surprise',      label:'紙吹雪サプライズ / confetti surprise' },
    { id:'twinkle-eye-soft',       label:'目元きらり・やわら / twinkle-eyed (soft)' },
    { id:'festival-cheer',         label:'フェスの昂揚 / festival cheer' },
    { id:'heartflush-bashful',     label:'ハート紅潮・照れ / heart-flush bashful' },
    { id:'glitter-wink',           label:'グリッター・ウィンク / glitter wink' }
  ];

  // === Effects（エフェクト：グリッター・紙吹雪・ハート）===
  const eff = [
    { id:'heart-confetti-burst',   label:'ハート紙吹雪バースト / heart confetti burst' },
    { id:'glitter-heart-trail',    label:'きらハートの尾 / glitter heart trails' },
    { id:'micro-spark-particles',  label:'微細スパーク粒子 / micro spark particles' },
    { id:'foil-confetti-shine',    label:'ホイル紙吹雪の輝き / foil confetti shine' },
    { id:'soft-bokeh-hearts',      label:'ソフトボケ・ハート形 / soft bokeh hearts' },
    { id:'ribbon-swish',           label:'リボンスウィッシュ / ribbon swish' },
    { id:'stage-spot-glow',        label:'ステージ・スポットグロウ / stage spot glow' },
    { id:'party-pop-flare',        label:'パーティポップ・フレア / party pop flare' }
  ];

  // === Presets（プリセット）===
  const presets = [
    {
      id:'Glitter-Heart-Smile',
      label:'グリッターハート・スマイル',
      tags:[
        'spark-joy-smile','glitter-heart-trail','soft-bokeh-hearts','micro-spark-particles'
      ]
    },
    {
      id:'Confetti-Surprise-Pop',
      label:'コンフェッティ・サプライズ',
      tags:[
        'confetti-surprise','heart-confetti-burst','party-pop-flare','foil-confetti-shine'
      ]
    },
    {
      id:'Twinkle-Stage-Glow',
      label:'トゥインクル・ステージグロウ',
      tags:[
        'twinkle-eye-soft','stage-spot-glow','soft-bokeh-hearts','micro-spark-particles'
      ]
    },
    {
      id:'Festival-Heart-Rush',
      label:'フェス・ハートラッシュ',
      tags:[
        'festival-cheer','heart-confetti-burst','ribbon-swish','party-pop-flare'
      ]
    },
    {
      id:'Bashful-Glitter-Wave',
      label:'照れ・グリッターウェーブ',
      tags:[
        'heartflush-bashful','glitter-heart-trail','soft-bokeh-hearts'
      ]
    },
    {
      id:'Wink-Foil-Shine',
      label:'ウィンク・ホイルシャイン',
      tags:[
        'glitter-wink','foil-confetti-shine','party-pop-flare'
      ]
    },
    {
      id:'Spark-Micro-Heartline',
      label:'スパーク・マイクロハートライン',
      tags:[
        'twinkle-eye-soft','micro-spark-particles','glitter-heart-trail'
      ]
    },
    {
      id:'After-Party-SoftBokeh',
      label:'アフターパーティ・ソフトボケ',
      tags:[
        'festival-cheer','soft-bokeh-hearts','stage-spot-glow'
      ]
    }
  ];

  register('part53',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Glitter / Confetti）', items: eff }
    ],
    presets
  });
})(window);