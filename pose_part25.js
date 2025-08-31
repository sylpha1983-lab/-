// pose_part25.js
// Action & Combat / アクション・戦闘ポーズ
window.__registerPosePart('pose_part25', {
  categories: [
    {
      name: 'Melee / 近接アクション',
      items: [
        { id: 'action-sprint-start',       label: 'ダッシュ開始 / Sprint Start' },
        { id: 'action-forward-lunge',      label: '前方ランジ / Forward Lunge' },
        { id: 'action-slide-dodge',        label: 'スライド回避 / Slide Dodge' },
        { id: 'action-dive-roll',          label: '前転ダイブ / Dive Roll' },
        { id: 'action-roundhouse-kick',    label: '回し蹴り / Roundhouse Kick' },
        { id: 'action-high-knee-strike',   label: 'ハイニー・ストライク / High Knee Strike' },
        { id: 'action-cross-guard',        label: 'クロスガード / Cross Guard' },
        { id: 'action-weapon-ready',       label: '構え（武器準備） / Weapon Ready Stance' }
      ]
    },
    {
      name: 'Ranged / 遠距離アクション',
      items: [
        { id: 'action-aim-bow',            label: '弓を引く / Aiming a Bow' },
        { id: 'action-aim-pistol',         label: '片手銃を構える / Aiming Pistol' },
        { id: 'action-aim-rifle-kneel',    label: '膝撃ちライフル / Kneeling Rifle Aim' },
        { id: 'action-throw-knife',        label: '投てきの構え / Throwing Stance' }
      ]
    },
    {
      name: 'Cinematic / シネマティック',
      items: [
        { id: 'action-superhero-landing',  label: 'スーパーヒーロー着地 / Superhero Landing' },
        { id: 'action-midair-slash',       label: '空中斬り / Midair Slash' },
        { id: 'action-bullet-dodge',       label: '弾丸回避 / Bullet Dodge' },
        { id: 'action-stand-off',          label: '対峙 / Stand-off' }
      ]
    }
  ]
});