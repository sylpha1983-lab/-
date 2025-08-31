// pose_part34.js
// Spaceport Launch & Deck Gestures / 宇宙港・発艦デッキ所作
window.__registerPosePart('pose_part34', {
  categories: [
    {
      name: 'Launch Prep / 発艦前準備',
      items: [
        { id: 'preflight-checklist-gesture', label: 'チェックリストを指差し確認 / Pointing Preflight Checklist' },
        { id: 'pilot-strap-tighten',         label: 'ベルトを締め直す / Tightening Flight Straps' },
        { id: 'visor-down-nod',              label: 'バイザーを下げ一礼 / Visor Down & Nod' },
        { id: 'glove-seal-check',            label: 'グローブのシール確認 / Glove Seal Check' },
        { id: 'oxygen-line-test',            label: '酸素ラインをテスト / Testing Oxygen Line' }
      ]
    },
    {
      name: 'Catapult & Lift / カタパルト・昇降機',
      items: [
        { id: 'catapult-kneel-ready',        label: 'カタパルト膝立ち待機 / Kneel Ready on Catapult' },
        { id: 'deck-lift-stance',            label: 'デッキリフト上の待機姿勢 / Stance on Deck Lift' },
        { id: 'launch-bar-engage',           label: 'ランチバー接続動作 / Engaging Launch Bar' },
        { id: 'maglock-footing',             label: 'マグロック足場固定 / Maglock Footing' },
        { id: 'launch-brace-forward',        label: '発進直前の前傾構え / Forward Brace for Launch' }
      ]
    },
    {
      name: 'Deck Signals / デッキサイン',
      items: [
        { id: 'marshal-launch-sweep',        label: 'マーシャルの発進合図 / Marshal Launch Sweep' },
        { id: 'hold-position-signal',        label: 'ホールドの手信号 / Hold Position Signal' },
        { id: 'chocks-out-signal',           label: '車輪止め解除サイン / Chocks Out Signal' },
        { id: 'clear-zone-point',            label: 'クリアゾーン指示 / Pointing Clear Zone' },
        { id: 'go-no-go-thumbs',             label: 'GO/NO-GO 親指合図 / Go/No-Go Thumbs' }
      ]
    },
    {
      name: 'Formation Boarding / 編隊搭乗',
      items: [
        { id: 'squadron-lineup',             label: '小隊整列 / Squadron Lineup' },
        { id: 'wingman-ack',                 label: 'ウィングマンに合図 / Wingman Acknowledge' },
        { id: 'sync-gesture',                label: '同期ジェスチャー / Sync Gesture' },
        { id: 'briefing-huddle',             label: '簡易円陣ブリーフ / Briefing Huddle' },
        { id: 'check-flares-arm',            label: 'フレア装備確認 / Arming Flares Check' }
      ]
    },
    {
      name: 'Ritual & Morale / 儀式・士気',
      items: [
        { id: 'lucky-charm-touch',           label: 'お守りに触れる / Touching Lucky Charm' },
        { id: 'fist-bump-crew',              label: 'クルーと拳を合わせる / Crew Fist Bump' },
        { id: 'salute-to-tower',             label: '管制塔へ敬礼 / Salute to Tower' },
        { id: 'deep-breath-focus',           label: '深呼吸し集中 / Deep Breath Focus' },
        { id: 'silent-prayer',               label: '静かな祈り / Silent Prayer' }
      ]
    }
  ]
});