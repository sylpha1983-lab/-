// pose_part53.js
// Action Poses 03 / スポーツ＆バトル競技動作（pose_part53）

// フォールバック対応（既存HTMLの互換レジストリと一致）
window.__registerPosePart = window.__registerPosePart || function(id, data){
  window.poseBuilder = window.poseBuilder || {};
  window.poseBuilder[id] = data;
};

window.__registerPosePart('pose_part53', {
  categories: [
    {
      name: 'Combat Sports / 格闘競技',
      items: [
        { id: 'boxing-guard-tight',     label: 'ボクシング・タイトガード / Boxing Tight Guard' },
        { id: 'boxing-straight-punch',  label: 'ストレートを放つ / Straight Punch' },
        { id: 'mma-low-kick',           label: 'ローキック / MMA Low Kick' },
        { id: 'mma-shoot-doubleleg',    label: 'タックル（ダブルレッグ） / Double-Leg Shot' },
        { id: 'kickboxing-roundhouse',  label: '回し蹴り / Roundhouse Kick' }
      ]
    },
    {
      name: 'Weapon Sparring / 武器スパー',
      items: [
        { id: 'kendo-men-strike',       label: '剣道・面打ち / Kendo Men Strike' },
        { id: 'kendo-kamae',            label: '剣道・構え / Kendo Kamae' },
        { id: 'fencing-lunge',          label: 'フェンシング・ランジ / Fencing Lunge' },
        { id: 'bo-staff-guard',         label: '棒術・ガード / Bo Staff Guard' },
        { id: 'tonfa-cross-block',      label: 'トンファー・クロスブロック / Tonfa Cross Block' }
      ]
    },
    {
      name: 'Ranged Battle / 遠距離バトル',
      items: [
        { id: 'archery-full-draw',      label: 'アーチェリー・フルドロー / Archery Full Draw' },
        { id: 'kneel-aim-rifle',        label: '片膝射撃 / Kneeling Rifle Aim' },
        { id: 'prone-scope',            label: '伏せ・スコープ狙撃 / Prone Scoped Aim' },
        { id: 'crossbow-quickshot',     label: 'クロスボウ・クイックショット / Crossbow Quick Shot' },
        { id: 'throwing-knife-ready',   label: 'スローイングナイフ構え / Throwing Knife Ready' }
      ]
    },
    {
      name: 'Field & Court / フィールド＆コート',
      items: [
        { id: 'sprint-start-blocks',    label: 'クラウチングスタート / Sprint Start from Blocks' },
        { id: 'soccer-slide-tackle',    label: 'スライディングタックル / Soccer Slide Tackle' },
        { id: 'basketball-crossover',   label: 'クロスオーバー / Basketball Crossover' },
        { id: 'tennis-serve-top',       label: 'トスからのサーブ / Tennis Serve Toss' },
        { id: 'baseball-swing',         label: 'フルスイング / Baseball Full Swing' }
      ]
    },
    {
      name: 'Parkour & Mobility / パルクール＆機動',
      items: [
        { id: 'parkour-vault',          label: 'ヴォルト越え / Parkour Vault' },
        { id: 'parkour-cat-leap',       label: 'キャットリープ / Cat Leap' },
        { id: 'slide-under-obstacle',   label: 'スライディング回避 / Slide Under Obstacle' },
        { id: 'grapple-hook-swing',     label: 'グラップルスイング / Grapple Hook Swing' },
        { id: 'zipline-ride',           label: 'ジップライン滑走 / Zipline Ride' }
      ]
    }
  ]
});