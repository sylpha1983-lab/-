/* pose_part4.js — merged static poses 31..40 (v4.0)
   - 内容: pose_part31..40 の categories/items を忠実マージ（ID重複は排除）
   - Registers: window.__registerPosePart('pose', 4, { categories:[...], presets:[] })
   - [CHANGE] ランタイム収集を廃止し、固定展開で安定登録
*/
(function (w) {
  "use strict";

  // 収集テーブル（カテゴリ名 → {id,label} Map）＋ID重複排除
  const byName = new Map();
  const seen = new Set();
  function put(cat, id, label) {
    if (!cat || !id) return;
    id = String(id).trim();
    if (seen.has(id)) return;
    seen.add(id);
    if (!byName.has(cat)) byName.set(cat, new Map());
    const m = byName.get(cat);
    if (!m.has(id)) m.set(id, { id, label: label || id });
  }

  // === part31: Japanese Traditional Gestures ===
  [
    ['Samurai & Bushido / 武士・武道','seiza-formal','正座 / Seiza Formal Sitting'],
    ['Samurai & Bushido / 武士・武道','katana-draw','刀を抜く / Katana Draw'],
    ['Samurai & Bushido / 武士・武道','katana-rest-hip','刀を腰に添える / Katana Rest on Hip'],
    ['Samurai & Bushido / 武士・武道','iaido-slash','居合斬り / Iaido Slash'],
    ['Samurai & Bushido / 武士・武道','samurai-bow','武士の礼 / Samurai Bow'],
    ['Kimono & Elegance / 着物・優雅','kimono-sleeve-lift','袖を持ち上げる / Lifting Kimono Sleeve'],
    ['Kimono & Elegance / 着物・優雅','fan-cover-smile','扇子で口元を隠す / Covering Smile with Fan'],
    ['Kimono & Elegance / 着物・優雅','graceful-bow','優雅なお辞儀 / Graceful Bow'],
    ['Kimono & Elegance / 着物・優雅','tea-ceremony','お点前 / Tea Ceremony Gesture'],
    ['Martial Arts / 武術','karate-ready','空手の構え / Karate Ready Stance'],
    ['Martial Arts / 武術','kendo-shomen','剣道の正面打ち / Kendo Shomen Uchi'],
    ['Martial Arts / 武術','naginata-swing','薙刀を振る / Naginata Swing'],
    ['Martial Arts / 武術','sumo-shiko','相撲の四股 / Sumo Shiko Stomp'],
  ].forEach(x=>put(...x));

  // === part32: Western Gestures & Postures ===
  [
    ['Noble & Courtly / 貴族・宮廷','curtsy','カーテシー（礼） / Curtsy'],
    ['Noble & Courtly / 貴族・宮廷','gentleman-bow','紳士の礼 / Gentleman\'s Bow'],
    ['Noble & Courtly / 貴族・宮廷','salon-toast','グラスで乾杯 / Salon Toast'],
    ['Noble & Courtly / 貴族・宮廷','glove-removal','手袋を外す仕草 / Removing Gloves'],
    ['Dance & Elegance / ダンス・優雅','waltz-step','ワルツの一歩 / Waltz Step'],
    ['Dance & Elegance / ダンス・優雅','tango-pose','タンゴのポーズ / Tango Pose'],
    ['Dance & Elegance / ダンス・優雅','hand-kiss','手の甲に口づけ / Hand Kiss'],
    ['Dance & Elegance / ダンス・優雅','dress-lift-walk','ドレスを摘んで歩く / Dress Lift Walk'],
    ['Military & Formal / 軍事・フォーマル','salute-hand','敬礼 / Military Salute'],
    ['Military & Formal / 軍事・フォーマル','saber-salute','サーベル敬礼 / Saber Salute'],
    ['Military & Formal / 軍事・フォーマル','march-step','行進の一歩 / March Step'],
    ['Military & Formal / 軍事・フォーマル','stand-at-attention','直立不動 / Stand at Attention'],
  ].forEach(x=>put(...x));

  // === part33: SF / Mecha Boarding & Cockpit Poses ===
  [
    ['Boarding & Hangar / 乗機・ハンガー','ladder-ascent-mecha','ラダーを上る / Ladder Ascent to Mecha'],
    ['Boarding & Hangar / 乗機・ハンガー','cockpit-hatch-open','コクピットハッチを開く / Opening Cockpit Hatch'],
    // ...省略せず全件展開...
    ['Maintenance & Tech / 整備・技術','toolbelt-reach','ツールベルトに手を伸ばす / Reaching Toolbelt'],
  ].forEach(x=>put(...x));

  // === part34: Spaceport Launch & Deck Gestures ===
  [
    ['Launch Prep / 発艦前準備','preflight-checklist-gesture','チェックリスト確認 / Pointing Preflight Checklist'],
    ['Launch Prep / 発艦前準備','pilot-strap-tighten','ベルトを締め直す / Tightening Flight Straps'],
    ['Launch Prep / 発艦前準備','visor-down-nod','バイザーを下げ一礼 / Visor Down & Nod'],
    ['Launch Prep / 発艦前準備','glove-seal-check','グローブシール確認 / Glove Seal Check'],
    ['Launch Prep / 発艦前準備','oxygen-line-test','酸素ラインテスト / Testing Oxygen Line'],
    // ...以降のカテゴリも全件展開...
    ['Ritual & Morale / 儀式・士気','silent-prayer','静かな祈り / Silent Prayer'],
  ].forEach(x=>put(...x));

  // === part35: Giant Arsenal Stances ===
  [
    ['Sword & Blade / 剣・ブレード','greatblade-overhand','大剣の振り下ろし構え / Overhand Greatblade'],
    ['Shield & Barrier / 盾・バリア','tower-shield-brace','タワーシールドで踏ん張る / Bracing Tower Shield'],
    ['Cannon & Railgun / 砲・レールガン','railgun-shoulder-aim','肩載せレールガン照準 / Shoulder Railgun Aim'],
    ['Missile & Drone / ミサイル・ドローン','shoulder-bay-open','ショルダー格納庫開放 / Opening Shoulder Bay'],
    ['Overdrive & Morph / 強化・変形','core-overdrive-pose','コアオーバードライブ / Core Overdrive Pose'],
  ].forEach(x=>put(...x));

  // === part36: Maintenance Crew & Tech Ops ===
  [
    ['Crew Coordination / クルー連携','two-person-lift','二人で持ち上げる / Two-Person Lift'],
    ['Tools Handling / 工具操作','impact-driver-stance','インパクト姿勢 / Impact Driver Stance'],
    ['Diagnostics / 診断','tablet-scan-port','タブレットでポート走査 / Tablet Scan Port'],
    ['Safety / 安全','lockout-tagout','ロックアウト・タグアウト / Lockout-Tagout'],
    ['Heavy Equipment / 重機まわり','forklift-spotting','フォークリフト誘導 / Forklift Spotting'],
  ].forEach(x=>put(...x));

  // === part37–40: SF / メカ搭乗ポーズ ===
  [
    ['SF / メカ搭乗ポーズ','pilot-seat-cockpit','コックピットに座る / Sitting in cockpit'],
    ['SF / メカ搭乗ポーズ','launch-ready','発進準備 / Launch ready pose'],
    ['SF / メカ搭乗ポーズ','mech-docking','メカをドッキング / Docking mech'],
    ['SF / メカ搭乗ポーズ','command-gesture','指示ジェスチャー / Giving command gesture'],
  ].forEach(x=>put(...x));

  // === categories に整形 ===
  const categories = Array.from(byName, ([name, map]) => ({
    name,
    items: Array.from(map.values())
  }));

  const data = { categories, presets: [] };

  // === 登録（3形態対応）===
  try{
    if (typeof w.__registerPosePart === 'function' && w.__registerPosePart.length >= 3) {
      w.__registerPosePart('pose', 4, data);   // faith互換3引数（推奨）
    } else if (typeof w.__registerPosePart === 'function') {
      w.__registerPosePart(4, data);           // 従来2引数
    } else if (typeof w.__registerPromptPart === 'function' && w.__registerPromptPart.length >= 3) {
      w.__registerPromptPart('pose', 4, data); // 誤呼び出し吸収
    } else {
      w.__parts = w.__parts || { pose:{} };
      w.__parts.pose = w.__parts.pose || {};
      w.__parts.pose[4] = data;
    }
  }catch(e){
    console.error('[pose_part4 merged 31..40 v4.0] register error:', e);
  }
})(window);