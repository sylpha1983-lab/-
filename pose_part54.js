// pose_part54.js
// Action Poses 04 / 受け・被弾・リアクション（pose_part54）

// フォールバック対応（既存HTMLの互換レジストリと一致）
window.__registerPosePart = window.__registerPosePart || function(id, data){
  window.poseBuilder = window.poseBuilder || {};
  window.poseBuilder[id] = data;
};

window.__registerPosePart('pose_part54', {
  categories: [
    {
      name: 'Hit Reactions / 被弾リアクション',
      items: [
        { id: 'hit-stagger-forward',    label: '前によろめく / Stagger Forward' },
        { id: 'hit-stagger-backward',   label: '後ろによろめく / Stagger Backward' },
        { id: 'hit-hold-stomach',       label: '腹を押さえる / Holding Stomach in Pain' },
        { id: 'hit-face-flinch',        label: '顔をしかめる / Face Flinch' },
        { id: 'hit-knockback-fall',     label: '吹き飛ぶ / Knockback Fall' }
      ]
    },
    {
      name: 'Defensive Reactions / 防御反応',
      items: [
        { id: 'guard-cross-armed',      label: '腕で防御 / Cross-armed Guard' },
        { id: 'block-with-shield',      label: '盾で防御 / Shield Block' },
        { id: 'duck-dodge',             label: 'しゃがんで回避 / Duck Dodge' },
        { id: 'sidestep-dodge',         label: 'サイドステップ回避 / Sidestep Dodge' },
        { id: 'cover-head',             label: '頭を庇う / Covering Head' }
      ]
    },
    {
      name: 'Falling / 転倒・落下',
      items: [
        { id: 'fall-trip',              label: 'つまずく / Trip and Fall' },
        { id: 'fall-backwards',         label: '後ろに倒れる / Fall Backwards' },
        { id: 'fall-forward',           label: '前に倒れる / Fall Forward' },
        { id: 'fall-from-height',       label: '高所から落下 / Fall from Height' },
        { id: 'fall-roll',              label: '転がり受け身 / Rolling Fall' }
      ]
    },
    {
      name: 'Struggle / 苦しむ・耐える',
      items: [
        { id: 'struggle-stand',         label: '立ちながら苦しむ / Struggling to Stand' },
        { id: 'struggle-crawl',         label: '這って進む / Crawling Struggle' },
        { id: 'kneel-cough',            label: '膝をついて咳き込む / Kneeling Cough' },
        { id: 'exhausted-collapse',     label: '疲労で崩れる / Exhausted Collapse' },
        { id: 'bound-resist',           label: '縛られて抵抗 / Bound Resistance' }
      ]
    },
    {
      name: 'KO & Finish / ノックアウト＆フィニッシュ',
      items: [
        { id: 'ko-lying-flat',          label: '気絶して倒れる / KO Lying Flat' },
        { id: 'ko-sprawl',              label: '大の字に倒れる / KO Sprawl' },
        { id: 'ko-sitting-dazed',       label: '座り込んで気絶 / KO Sitting Dazed' },
        { id: 'finish-victory-pose',    label: '勝利ポーズ / Victory Pose' },
        { id: 'finish-over-foe',        label: '相手の上に立つ / Standing Over Opponent' }
      ]
    }
  ]
});