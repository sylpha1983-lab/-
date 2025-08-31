// pose_part36.js
// Maintenance Crew & Tech Ops / 整備クルー・技術運用

// セーフガード：環境に __registerPosePart が未定義でも確実に登録できるように
window.__registerPosePart = window.__registerPosePart || function(id, data){
  window.poseBuilder = window.poseBuilder || {};
  window.poseBuilder[id] = data;
};

window.__registerPosePart('pose_part36', {
  categories: [
    {
      name: 'Crew Coordination / クルー連携',
      items: [
        { id: 'two-person-lift',      label: '二人で持ち上げる / Two-Person Lift' },
        { id: 'hand-signal-left',     label: '左へ手信号 / Hand Signal Left' },
        { id: 'hand-signal-stop',     label: '停止サイン / Hand Signal Stop' },
        { id: 'spotter-point-check',  label: 'スポッター指差し確認 / Spotter Point-Check' },
        { id: 'clipboard-brief',      label: 'クリップボードで指示 / Clipboard Brief' }
      ]
    },
    {
      name: 'Tools Handling / 工具操作',
      items: [
        { id: 'impact-driver-stance', label: 'インパクト姿勢 / Impact Driver Stance' },
        { id: 'welder-arc-cover',     label: '溶接・アーク遮蔽 / Welder Arc Cover' },
        { id: 'torque-wrench-pull',   label: 'トルクレンチで締付 / Torque Wrench Pull' },
        { id: 'hose-coupling-lock',   label: 'ホース継手のロック / Hose Coupling Lock' },
        { id: 'panel-swap-quick',     label: 'パネル素早く交換 / Quick Panel Swap' }
      ]
    },
    {
      name: 'Diagnostics / 診断',
      items: [
        { id: 'tablet-scan-port',     label: 'タブレットでポート走査 / Tablet Scan Port' },
        { id: 'sensor-calibration',   label: 'センサー較正 / Sensor Calibration' },
        { id: 'thermal-check',        label: 'サーモチェック / Thermal Check' },
        { id: 'vibration-listen',     label: '振動音を聴く / Listening to Vibration' },
        { id: 'fluid-sample-take',    label: 'フルード採取 / Taking Fluid Sample' }
      ]
    },
    {
      name: 'Safety / 安全',
      items: [
        { id: 'lockout-tagout',       label: 'ロックアウト・タグアウト / Lockout-Tagout' },
        { id: 'grounding-cable-clip', label: '接地ケーブルを装着 / Grounding Cable Clip' },
        { id: 'face-shield-down',     label: 'フェイスシールドを下げる / Lower Face Shield' },
        { id: 'ear-protect-on',       label: '耳栓／防音を装着 / Put On Hearing Protection' },
        { id: 'spill-contain-boom',   label: '漏洩防止ブーム設置 / Deploy Spill Containment' }
      ]
    },
    {
      name: 'Heavy Equipment / 重機まわり',
      items: [
        { id: 'forklift-spotting',    label: 'フォークリフト誘導 / Forklift Spotting' },
        { id: 'crane-hook-guide',     label: 'クレーンフック誘導 / Crane Hook Guide' },
        { id: 'jack-stand-set',       label: 'ジャッキスタンド設置 / Set Jack Stand' },
        { id: 'hose-roller-feed',     label: 'ホースローラー送り / Hose Roller Feed' },
        { id: 'battery-pack-swap',    label: 'バッテリーパック交換 / Battery Pack Swap' }
      ]
    }
  ]
});