// pose_part52.js
// Action Poses 02 / アクションポーズ 応用・連携技（pose_part52）

// フォールバック対応
window.__registerPosePart = window.__registerPosePart || function(id, data){
  window.poseBuilder = window.poseBuilder || {};
  window.poseBuilder[id] = data;
};

window.__registerPosePart('pose_part52', {
  categories: [
    {
      name: 'Teamwork / 連携動作',
      items: [
        { id: 'back-to-back',        label: '背中合わせで構える / Back-to-Back Stance' },
        { id: 'dual-sword-cross',    label: '二人で剣を交差 / Dual Sword Cross' },
        { id: 'partner-lift-throw',  label: '持ち上げて投げる / Partner Lift & Throw' },
        { id: 'sync-shooting',       label: '同時射撃 / Synchronized Shooting' },
        { id: 'rescue-carry',        label: '救助で抱える / Rescue Carry' }
      ]
    },
    {
      name: 'Acrobatics / アクロバット',
      items: [
        { id: 'cartwheel-kick',      label: '側宙蹴り / Cartwheel Kick' },
        { id: 'backflip-dodge',      label: 'バク転回避 / Backflip Dodge' },
        { id: 'aerial-spin-attack',  label: '空中スピン攻撃 / Aerial Spin Attack' },
        { id: 'wall-run',            label: '壁走り / Wall Run' },
        { id: 'rope-swing-attack',   label: 'ロープスイング攻撃 / Rope Swing Attack' }
      ]
    },
    {
      name: 'Weapon Combo / 武器コンボ',
      items: [
        { id: 'dual-blade-flurry',   label: '二刀流連撃 / Dual Blade Flurry' },
        { id: 'gun-melee-strike',    label: '銃と格闘の組合せ / Gun + Melee Strike' },
        { id: 'spear-spin',          label: '槍のスピン攻撃 / Spear Spin Attack' },
        { id: 'axe-crush',           label: '大斧クラッシュ / Axe Crush' },
        { id: 'chakram-return',      label: 'チャクラム投擲＆キャッチ / Chakram Return' }
      ]
    },
    {
      name: 'Defensive Moves / 防御動作',
      items: [
        { id: 'counter-parry',       label: 'カウンターパーリー / Counter Parry' },
        { id: 'cross-block',         label: '両腕クロス防御 / Cross Arm Block' },
        { id: 'energy-shield-raise', label: 'エナジーシールド展開 / Energy Shield Raise' },
        { id: 'roll-recover',        label: '転がって立ち直る / Roll Recovery' },
        { id: 'last-stand',          label: '最後の抵抗ポーズ / Last Stand' }
      ]
    }
  ]
});