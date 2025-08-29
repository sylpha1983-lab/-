/* ============================================
   Hearts Pack I — part31.js
   既存の builder_main.html 互換：
   __registerPromptPart('part31', {...})
   - 表情: “ハート系の感情・口元・目元”
   - エフェクト: “ハート粒子／ハート光学／ハートVFX”
   - プリセット: “甘やか・きらめき・告白・ときめき”等
============================================ */
__registerPromptPart('part31', {
  categories: [
    {
      name: 'Expressions / 表情',
      items: [
        { id:'heart-eyed-soft',       label:'ハート目・やわら / heart-eyed (soft)' },
        { id:'heart-eyed-bright',     label:'ハート目・きらきら / heart-eyed (bright)' },
        { id:'smile-heart-corner',    label:'口角ハート気味スマイル / heart-corner smile' },
        { id:'pout-heart-shy',        label:'ハート気味むくれ・照れ / heartish shy pout' },
        { id:'blush-heart',           label:'ハートチーク・赤らめ / heart blush' },
        { id:'wink-heart',            label:'ウィンク・ハート / heart wink' },
        { id:'gaze-heart-softdown',   label:'ハート気味の伏し目 / heart-soft downward gaze' },
        { id:'sparkle-heart-tear',    label:'涙縁にハートきら / heart-sparkle tearline' },
        { id:'kissy-heart-mouth',     label:'ハート投げキス口 / kissy heart mouth' },
        { id:'flutter-heart-breath',  label:'ときめき息づかい / fluttering heart breath' }
      ]
    },
    {
      name: 'Effects / エフェクト（Hearts / ハート）',
      items: [
        /* Particles / 粒子 */
        { id:'heart-dust-fine',       label:'ハート微粒子 / heart dust (fine)' },
        { id:'heart-petals-fall',     label:'ハート花弁落下 / falling heart petals' },
        { id:'heart-bokeh-soft',      label:'ハートボケ・柔 / soft heart bokeh' },
        { id:'heart-confetti',        label:'ハート紙吹雪 / heart confetti' },
        { id:'heart-trail-orbit',     label:'ハート軌跡オービット / orbiting heart trails' },

        /* Light / 光 */
        { id:'heart-glow-inner',      label:'内側ハートグロー / inner heart glow' },
        { id:'heart-rimlight',        label:'ハート調リムライト / heart rim light' },
        { id:'heartbeat-pulse',       label:'鼓動パルス光 / heartbeat pulse' },
        { id:'cupid-flare',           label:'キューピッドフレア / cupid flare' },

        /* VFX / Frames / その他 */
        { id:'heart-frame-soft',      label:'ソフト・ハートフレーム / soft heart frame' },
        { id:'heart-lens-prism',      label:'ハートレンズプリズム / heart lens prism' },
        { id:'heart-zoom-focus',      label:'ハートズームフォーカス / heart zoom focus' }
      ]
    }
  ],

  presets: [
    {
      id: 'Heart-SweetSpark',
      label: '甘やか・ハートきらめき',
      tags: [
        'heart-eyed-soft','smile-heart-corner','blush-heart',
        'heart-dust-fine','heart-glow-inner','heart-bokeh-soft'
      ]
    },
    {
      id: 'Confession-Whisper',
      label: '告白・ささやきハート',
      tags: [
        'gaze-heart-softdown','kissy-heart-mouth','flutter-heart-breath',
        'heart-frame-soft','heartbeat-pulse','cupid-flare'
      ]
    },
    {
      id: 'Twinkle-HeartTears',
      label: 'きら涙・ハートトゥインクル',
      tags: [
        'sparkle-heart-tear','heart-eyed-bright','blush-heart',
        'heart-lens-prism','heart-confetti','heart-zoom-focus'
      ]
    },
    {
      id: 'Cute-WinkHeart',
      label: 'キュートウィンク・ハート',
      tags: [
        'wink-heart','smile-heart-corner','pout-heart-shy',
        'heart-rimlight','heart-petals-fall','heart-bokeh-soft'
      ]
    },
    {
      id: 'Orbiting-Love',
      label: '周回する想い・ハートオービット',
      tags: [
        'gaze-heart-softdown','heart-eyed-soft',
        'heart-trail-orbit','heartbeat-pulse','heart-frame-soft'
      ]
    }
  ]
});