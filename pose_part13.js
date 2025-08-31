// pose_part13.js
// ポーズ拡張：ベーシック～表情連動しやすい所作を中心に
window.__registerPosePart('pose_part13', {
  categories: [
    {
      name: '基本立ち / Basic Standing',
      items: [
        { id: 'stand-neutral',            label: 'ニュートラル立ち / Neutral Stand' },
        { id: 'stand-contrapposto',       label: 'コントラポスト / Contrapposto' },
        { id: 'stand-wide-stance',        label: '大きく開いた立ち / Wide Stance' },
        { id: 'stand-l-stance',           label: 'Lスタンス / L-stance' },
        { id: 'stand-tiptoe',             label: 'つま先立ち / Tiptoe' },
        { id: 'stand-one-leg-relaxed',    label: '片足に体重 / One-leg Relaxed' },
        { id: 'power-pose',               label: 'パワーポーズ / Power Pose' },
        { id: 'stand-hands-behind-back',  label: '手を後ろで組む / Hands Behind Back' },
        { id: 'stand-hands-in-pockets',   label: 'ポケットに手 / Hands in Pockets' },
        { id: 'stand-crossed-legs',       label: '脚を交差して立つ / Legs Crossed Standing' }
      ]
    },
    {
      name: '座り / Sitting',
      items: [
        { id: 'sit-straight-chair',       label: '椅子で背筋を伸ばす / Sit Straight on Chair' },
        { id: 'sit-relaxed',              label: '椅子でゆったり / Relaxed Sitting' },
        { id: 'sit-crossed-legs',         label: '脚を組んで座る / Cross-legged Sitting' },
        { id: 'sit-floor-w',              label: '女の子座り / W-sitting' },
        { id: 'sit-side-saddle',          label: '横乗り座り / Side-saddle Sitting' },
        { id: 'sit-knees-up',             label: '膝を抱えて座る / Hug Knees Sitting' }
      ]
    },
    {
      name: 'しゃがみ・膝 / Crouch & Kneel',
      items: [
        { id: 'crouch-squat',             label: 'しゃがむ / Crouch (Squat)' },
        { id: 'kneel-one-knee',           label: '片膝立ち / Kneel on One Knee' },
        { id: 'kneel-both',               label: '両膝立ち / Kneel on Both Knees' }
      ]
    },
    {
      name: '上半身・所作 / Upper Body & Gestures',
      items: [
        { id: 'arms-crossed',             label: '腕を組む / Arms Crossed' },
        { id: 'hands-on-hips',            label: '腰に手 / Hands on Hips' },
        { id: 'one-hand-on-hip',          label: '片手を腰に / One Hand on Hip' },
        { id: 'hand-on-chest',            label: '胸に手 / Hand on Chest' },
        { id: 'hand-on-cheek',            label: '頬に手 / Hand on Cheek' },
        { id: 'chin-rest',                label: '顎に手 / Chin Rest' },
        { id: 'hair-touch',               label: '髪に触れる / Hair Touch' },
        { id: 'hands-behind-head',        label: '頭の後ろで手を組む / Hands Behind Head' },
        { id: 'hands-clasped-front',      label: '前で手を組む / Hands Clasped in Front' },
        { id: 'hold-skirt',               label: 'スカートをつまむ / Hold Skirt' },
        { id: 'hold-book',                label: '本を持つ / Hold Book' },
        { id: 'phone-selfie',             label: 'スマホ自撮り / Phone Selfie' }
      ]
    },
    {
      name: 'ハンドサイン / Hand Signs',
      items: [
        { id: 'peace-sign',               label: 'ピースサイン / Peace Sign' },
        { id: 'finger-heart',             label: '指ハート / Finger Heart' },
        { id: 'point-forward',            label: '前方を指差す / Point Forward' },
        { id: 'thumbs-up',                label: 'サムズアップ / Thumbs Up' },
        { id: 'small-wave',               label: '小さく手を振る / Small Wave' },
        { id: 'reach-out',                label: '手を差し伸べる / Reach Out' },
        { id: 'salute',                   label: '敬礼 / Salute' }
      ]
    },
    {
      name: '頭・視線 / Head & Gaze',
      items: [
        { id: 'head-tilt-left',           label: '小首かしげ（左）/ Head Tilt Left' },
        { id: 'head-tilt-right',          label: '小首かしげ（右）/ Head Tilt Right' },
        { id: 'look-up',                  label: '上目づかい / Look Up' },
        { id: 'look-down',                label: '伏し目 / Look Down' },
        { id: 'look-over-shoulder',       label: '振り返り視線 / Over-shoulder Look' }
      ]
    },
    {
      name: '動き / Motion',
      items: [
        { id: 'walk-forward',             label: '歩く / Walk Forward' },
        { id: 'run-forward',              label: '走る / Run Forward' },
        { id: 'jump-midair',              label: 'ジャンプ（空中）/ Jump Midair' },
        { id: 'twirl-turn',               label: 'くるりと回転 / Twirl Turn' }
      ]
    },
    {
      name: '寝転び / Lying',
      items: [
        { id: 'lie-on-side',              label: '横たわる（横向き）/ Lie on Side' },
        { id: 'lie-prone',                label: 'うつ伏せ / Prone Lying' },
        { id: 'lie-supine',               label: '仰向け / Supine Lying' }
      ]
    }
  ]
});