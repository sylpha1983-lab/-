// pose_part55.js
// Action Poses 05 / 武器アクション・特殊戦闘動作（pose_part55）

// フォールバック対応（既存HTMLの互換レジストリと一致）
window.__registerPosePart = window.__registerPosePart || function(id, data){
  window.poseBuilder = window.poseBuilder || {};
  window.poseBuilder[id] = data;
};

window.__registerPosePart('pose_part55', {
  categories: [
    {
      name: 'Melee Swings / 近接スイング',
      items: [
        { id: 'swing-overhand',         label: 'オーバーハンド斬り / Overhand Swing' },
        { id: 'swing-side-horizontal',  label: '横一閃 / Side Horizontal Slash' },
        { id: 'swing-upward',           label: '袈裟上がり / Upward Slash' },
        { id: 'swing-spin',             label: '回転斬り / Spinning Slash' },
        { id: 'swing-heavy-twohand',    label: '両手渾身斬り / Heavy Two-hand Swing' }
      ]
    },
    {
      name: 'Thrust & Guard / 突き・構え',
      items: [
        { id: 'thrust-long-lunge',      label: '長い踏み込み突き / Long Lunge Thrust' },
        { id: 'thrust-short-jab',       label: 'ショートジャブ / Short Jab' },
        { id: 'guard-high',             label: '上段の構え / High Guard' },
        { id: 'guard-middle',           label: '中段の構え / Middle Guard' },
        { id: 'guard-low',              label: '下段の構え / Low Guard' }
      ]
    },
    {
      name: 'Dual / Spin / 二刀・スピン',
      items: [
        { id: 'dual-cross-slash',       label: '二刀クロス斬り / Dual Cross Slash' },
        { id: 'dual-alternate-flurry',  label: '交互乱舞 / Alternating Flurry' },
        { id: 'spin-staff',             label: '棒回しスピン / Spinning Staff' },
        { id: 'spin-blade-protect',     label: '刃の回転防御 / Blade Spin Guard' },
        { id: 'sheath-draw-iaido',      label: '居合抜き / Iaido Draw' }
      ]
    },
    {
      name: 'Ranged Actions / 遠距離アクション',
      items: [
        { id: 'bow-full-draw',          label: '弓を引き絞る / Bow Full Draw' },
        { id: 'bow-quick-shot',         label: '素早い射ち / Quick Shot' },
        { id: 'aim-iron-sight',         label: 'アイアンサイト狙い / Aim Iron Sight' },
        { id: 'aim-hip-fire',           label: '腰だめ撃ち / Hip Fire' },
        { id: 'reload-tactical',        label: 'タクティカルリロード / Tactical Reload' }
      ]
    },
    {
      name: 'Special Techniques / 特殊技',
      items: [
        { id: 'parry-deflect',          label: '受け流し / Parry & Deflect' },
        { id: 'counter-riposte',        label: 'カウンター・リポスト / Counter Riposte' },
        { id: 'leap-attack',            label: '跳躍攻撃 / Leap Attack' },
        { id: 'ground-pound',           label: 'グランドパンチ / Ground Pound' },
        { id: 'finisher-execution',     label: 'フィニッシャー / Execution Finisher' }
      ]
    }
  ]
});