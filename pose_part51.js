// pose_part51.js
// Action Poses 01 / アクションポーズ 基本（pose_part51）

// 既存のレジストリ関数が無い環境でも動くようにフォールバック
window.__registerPosePart = window.__registerPosePart || function(id, data){
  window.poseBuilder = window.poseBuilder || {};
  window.poseBuilder[id] = data;
};

window.__registerPosePart('pose_part51', {
  categories: [
    {
      name: 'Combat Stance / 戦闘姿勢',
      items: [
        { id: 'martial-guard-stance',  label: '格闘ガード姿勢 / Martial Guard Stance' },
        { id: 'sword-ready-stance',    label: '剣構え（正眼） / Sword Ready Stance' },
        { id: 'gun-aim-low',           label: '銃を低く構える / Gun Aim Low' },
        { id: 'bow-draw-full',         label: '弓を引き絞る / Full Bow Draw' },
        { id: 'shield-block-front',    label: '盾で正面防御 / Shield Block Front' }
      ]
    },
    {
      name: 'Dynamic Motion / ダイナミック動作',
      items: [
        { id: 'high-kick',             label: 'ハイキック / High Kick' },
        { id: 'spinning-back-kick',    label: '回し蹴り / Spinning Back Kick' },
        { id: 'flying-punch',          label: '飛び込みパンチ / Flying Punch' },
        { id: 'elbow-strike',          label: '肘打ち / Elbow Strike' },
        { id: 'grappling-hold',        label: '組み付き / Grappling Hold' }
      ]
    },
    {
      name: 'Movement / 移動系',
      items: [
        { id: 'dash-forward',          label: '前方ダッシュ / Dash Forward' },
        { id: 'side-dodge',            label: '横ステップ回避 / Side Dodge' },
        { id: 'jump-forward',          label: '前方ジャンプ / Jump Forward' },
        { id: 'roll-back',             label: '後方回避ロール / Backward Roll' },
        { id: 'slide-tackle',          label: 'スライディングタックル / Sliding Tackle' }
      ]
    },
    {
      name: 'Finishing / 決め動作',
      items: [
        { id: 'victory-pose',          label: '勝利ポーズ / Victory Pose' },
        { id: 'taunt-gesture',         label: '挑発ジェスチャー / Taunt Gesture' },
        { id: 'finishing-blow-stance', label: 'とどめの構え / Finishing Blow Stance' },
        { id: 'salute-weapon',         label: '武器を掲げる / Weapon Salute' },
        { id: 'signature-move',        label: '必殺技ポーズ / Signature Move' }
      ]
    }
  ]
});