/* ============================================
   Heart-themed Expressions & Effects — part33.js
   形式：window.__registerPromptPart('part33', { categories, presets })
   ※ 既存UI/ローダー互換（idはユニーク設計）
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  // -------- Expressions / 表情（ハート系）--------
  const expr = [
    { id:'heart-eyes-soft',        label:'ハートアイ（やわ） / heart eyes (soft)' },
    { id:'heart-eyes-sparkle',     label:'ハートアイ（きらめき） / heart eyes (sparkle)' },
    { id:'blush-heart-cheeks',     label:'ハートほお染め / heart blush on cheeks' },
    { id:'wink-heart',             label:'ハートウィンク / heart wink' },
    { id:'smile-heart-curved',     label:'ハートカーブ微笑み / heart-curved smile' },
    { id:'pout-heart-shy',         label:'ハートむくれ・照れ / shy heart pout' },
    { id:'gaze-heart-dreamy',      label:'ハートとろ目 / dreamy heart gaze' },
    { id:'tear-joy-heart',         label:'喜び涙・ハート縁 / joyful tear with heart rim' },
    { id:'kissy-heart-lips',       label:'キッシーハート・リップ / kissy heart lips' },
    { id:'confession-nervous-heart', label:'告白前の高鳴り / pre-confession heart thump' }
  ];

  // -------- Effects / エフェクト（ハート系まとめ）--------
  const eff = [
    // Light / 光
    { id:'heart-bloom-soft',       label:'ハートブルーム（やわ） / soft heart bloom' },
    { id:'love-glow-aura',         label:'ラブグロー・オーラ / love glow aura' },
    { id:'rim-heart-light',        label:'リムライト（ハート） / heart rim light' },
    { id:'beam-cupid-soft',        label:'キューピッド光束（柔） / cupid soft beam' },

    // Particles / 粒子
    { id:'heart-petals-float',     label:'ハート花弁漂い / floating heart petals' },
    { id:'heart-confetti',         label:'ハート紙吹雪 / heart confetti' },
    { id:'heartbeat-trails',       label:'鼓動トレイル / heartbeat trails' },
    { id:'sparkle-heart-dust',     label:'きら粉・ハート混じり / sparkle dust (hearts)' },

    // VFX / その他
    { id:'heart-bokeh',            label:'ハートボケ / heart bokeh' },
    { id:'heart-frame-soft',       label:'ハート縁取り（柔） / soft heart frame' },
    { id:'cupid-arrow-glint',      label:'キューピッド矢のきらめき / cupid arrow glint' },
    { id:'love-pulse-vignette',    label:'ラブパルス・ビネット / love pulse vignette' }
  ];

  // -------- Presets（表情＋エフェクト混合）--------
  const presets = [
    {
      id:'HeartCute-SoftBloom',
      label:'ハートキュート・やわブルーム',
      tags:[
        'heart-eyes-soft','blush-heart-cheeks','smile-heart-curved',
        'heart-bloom-soft','sparkle-heart-dust','love-pulse-vignette'
      ]
    },
    {
      id:'Romantic-HeartBokeh',
      label:'ロマンティック・ハートボケ',
      tags:[
        'gaze-heart-dreamy','wink-heart','kissy-heart-lips',
        'heart-bokeh','love-glow-aura','rim-heart-light'
      ]
    },
    {
      id:'Confession-CupidSpark',
      label:'告白前・キューピッドスパーク',
      tags:[
        'confession-nervous-heart','tear-joy-heart','pout-heart-shy',
        'cupid-arrow-glint','beam-cupid-soft','heart-frame-soft'
      ]
    },
    {
      id:'Heartbeat-PetalFloat',
      label:'鼓動×花弁漂い',
      tags:[
        'heart-eyes-sparkle','smile-heart-curved',
        'heart-petals-float','heartbeat-trails','love-glow-aura'
      ]
    },
    {
      id:'Festival-HeartConfetti',
      label:'祝祭・ハート紙吹雪',
      tags:[
        'wink-heart','blush-heart-cheeks',
        'heart-confetti','heart-bokeh','sparkle-heart-dust'
      ]
    }
  ];

  // -------- part33 パッケージとして登録 --------
  register('part33', {
    categories: [
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart）', items: eff }
    ],
    presets
  });
})(window);