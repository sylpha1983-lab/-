/* ============================================
   Hearts Pack II — part32.js
   既存の builder_main.html 互換
   - よりシーン寄りのハートVFX／光源セット
   - エモ寄りの表情差分も追加
============================================ */
__registerPromptPart('part32', {
  categories: [
    {
      name: 'Expressions / 表情',
      items: [
        { id:'bashful-heart-peek',     label:'ハート照れ見・チラ見 / bashful heart peek' },
        { id:'relieved-heart-smile',   label:'安堵ハート微笑 / relieved heart smile' },
        { id:'mischief-heart-smirk',   label:'いたずらハートにやり / mischievous heart smirk' },
        { id:'radiant-heart-joy',      label:'輝くハートの喜び / radiant heart joy' },
        { id:'soft-melty-heart',       label:'とろけるハート / soft melty heart' }
      ]
    },
    {
      name: 'Effects / エフェクト（Hearts / ハート）',
      items: [
        /* Particles & Atmos */
        { id:'heart-bubble-rise',      label:'ハート泡上昇 / rising heart bubbles' },
        { id:'heart-spark-stream',     label:'ハート火花ストリーム / heart spark stream' },
        { id:'heart-nebula-soft',      label:'やわハート星雲 / soft heart nebula' },
        { id:'heart-snow-glitter',     label:'ハート雪グリッター / heart snow glitter' },

        /* Light & Optics */
        { id:'heart-godray',           label:'ハート・ゴッドレイ / heart godrays' },
        { id:'heart-backlit-halo',     label:'逆光ハートハロー / backlit heart halo' },
        { id:'heart-spot-soft',        label:'ソフトハートスポット / soft heart spot' },
        { id:'dual-heart-kisslight',   label:'デュアル・ハートキスライト / dual heart kisslight' },

        /* VFX Frames */
        { id:'heart-iris-in',          label:'ハート・アイリスイン / heart iris-in' },
        { id:'heart-shutter',          label:'ハート・シャッター / heart shutter' }
      ]
    }
  ],

  presets: [
    {
      id: 'Melty-HeartAura',
      label: 'メルティ・ハートオーラ',
      tags: [
        'soft-melty-heart','radiant-heart-joy','relieved-heart-smile',
        'heart-nebula-soft','heart-godray','heart-backlit-halo'
      ]
    },
    {
      id: 'Bubbly-LoveRise',
      label: '泡立つ想い・ライズ',
      tags: [
        'bashful-heart-peek','mischief-heart-smirk',
        'heart-bubble-rise','heart-spot-soft','dual-heart-kisslight'
      ]
    },
    {
      id: 'Snowy-HeartSpark',
      label: '小雪とハートスパーク',
      tags: [
        'relieved-heart-smile','soft-melty-heart',
        'heart-snow-glitter','heart-spark-stream','heart-iris-in'
      ]
    },
    {
      id: 'Halo-Confession',
      label: 'ハロー・コンフェッション',
      tags: [
        'bashful-heart-peek','radiant-heart-joy',
        'heart-backlit-halo','heart-godray','heart-shutter'
      ]
    }
  ]
});