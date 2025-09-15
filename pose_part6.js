/* pose_part6.js — merged static poses 51..60 (v6.0)
   - 内容: pose_part51..60 の categories/items & presets を忠実マージ（ID重複は排除）
   - Registers: window.__registerPosePart('pose', 6, { categories:[...], presets:[...] })
   - [CHANGE] ランタイム収集を廃止し、固定展開で安定登録
*/
(function (w) {
  "use strict";

  const byName = new Map();
  const presetsList = [];
  const seen = new Set();
  function put(cat, id, label) {
    if (!cat || !id) return;
    id = String(id).trim();
    if (seen.has(id)) return; // ID重複排除
    seen.add(id);
    if (!byName.has(cat)) byName.set(cat, new Map());
    const m = byName.get(cat);
    if (!m.has(id)) m.set(id, { id, label: label || id });
  }
  function addPreset(p) {
    if (!p || !p.id) return;
    if (seen.has(p.id)) return; // プリセットもID衝突回避
    seen.add(p.id);
    presetsList.push(p);
  }

  // === part51: Action Poses 基本 === 
  ;[
    ['Combat Stance / 戦闘姿勢','martial-guard-stance','格闘ガード姿勢 / Martial Guard Stance'],
    ['Combat Stance / 戦闘姿勢','sword-ready-stance','剣構え（正眼） / Sword Ready Stance'],
    ['Combat Stance / 戦闘姿勢','gun-aim-low','銃を低く構える / Gun Aim Low'],
    ['Combat Stance / 戦闘姿勢','bow-draw-full','弓を引き絞る / Full Bow Draw'],
    ['Combat Stance / 戦闘姿勢','shield-block-front','盾で正面防御 / Shield Block Front'],
    ['Dynamic Motion / ダイナミック動作','high-kick','ハイキック / High Kick'],
    ['Dynamic Motion / ダイナミック動作','spinning-back-kick','回し蹴り / Spinning Back Kick'],
    ['Dynamic Motion / ダイナミック動作','flying-punch','飛び込みパンチ / Flying Punch'],
    ['Dynamic Motion / ダイナミック動作','elbow-strike','肘打ち / Elbow Strike'],
    ['Dynamic Motion / ダイナミック動作','grappling-hold','組み付き / Grappling Hold'],
    ['Movement / 移動系','dash-forward','前方ダッシュ / Dash Forward'],
    ['Movement / 移動系','side-dodge','横ステップ回避 / Side Dodge'],
    ['Movement / 移動系','jump-forward','前方ジャンプ / Jump Forward'],
    ['Movement / 移動系','roll-back','後方回避ロール / Backward Roll'],
    ['Movement / 移動系','slide-tackle','スライディングタックル / Sliding Tackle'],
    ['Finishing / 決め動作','victory-pose','勝利ポーズ / Victory Pose'],
    ['Finishing / 決め動作','taunt-gesture','挑発ジェスチャー / Taunt Gesture'],
    ['Finishing / 決め動作','finishing-blow-stance','とどめの構え / Finishing Blow Stance'],
    ['Finishing / 決め動作','salute-weapon','武器を掲げる / Weapon Salute'],
    ['Finishing / 決め動作','signature-move','必殺技ポーズ / Signature Move'],
  ].forEach(x=>put(...x));

  // === part52: Action Poses 応用・連携技 === 
  ;[
    ['Teamwork / 連携動作','back-to-back','背中合わせで構える / Back-to-Back Stance'],
    ['Teamwork / 連携動作','dual-sword-cross','二人で剣を交差 / Dual Sword Cross'],
    ['Teamwork / 連携動作','partner-lift-throw','持ち上げて投げる / Partner Lift & Throw'],
    ['Teamwork / 連携動作','sync-shooting','同時射撃 / Synchronized Shooting'],
    ['Teamwork / 連携動作','rescue-carry','救助で抱える / Rescue Carry'],
    ['Acrobatics / アクロバット','cartwheel-kick','側宙蹴り / Cartwheel Kick'],
    ['Acrobatics / アクロバット','backflip-dodge','バク転回避 / Backflip Dodge'],
    ['Acrobatics / アクロバット','aerial-spin-attack','空中スピン攻撃 / Aerial Spin Attack'],
    ['Acrobatics / アクロバット','wall-run','壁走り / Wall Run'],
    ['Acrobatics / アクロバット','rope-swing-attack','ロープスイング攻撃 / Rope Swing Attack'],
    ['Weapon Combo / 武器コンボ','dual-blade-flurry','二刀流連撃 / Dual Blade Flurry'],
    ['Weapon Combo / 武器コンボ','gun-melee-strike','銃と格闘の組合せ / Gun + Melee Strike'],
    ['Weapon Combo / 武器コンボ','spear-spin','槍のスピン攻撃 / Spear Spin Attack'],
    ['Weapon Combo / 武器コンボ','axe-crush','大斧クラッシュ / Axe Crush'],
    ['Weapon Combo / 武器コンボ','chakram-return','チャクラム投擲＆キャッチ / Chakram Return'],
    ['Defensive Moves / 防御動作','counter-parry','カウンターパーリー / Counter Parry'],
    ['Defensive Moves / 防御動作','cross-block','両腕クロス防御 / Cross Arm Block'],
    ['Defensive Moves / 防御動作','energy-shield-raise','エナジーシールド展開 / Energy Shield Raise'],
    ['Defensive Moves / 防御動作','roll-recover','転がって立ち直る / Roll Recovery'],
    ['Defensive Moves / 防御動作','last-stand','最後の抵抗ポーズ / Last Stand'],
  ].forEach(x=>put(...x));

  // === part53: Sports & Battle === 
  ;[
    ['Combat Sports / 格闘競技','boxing-guard-tight','ボクシング・タイトガード / Boxing Tight Guard'],
    ['Combat Sports / 格闘競技','boxing-straight-punch','ストレートを放つ / Straight Punch'],
    ['Combat Sports / 格闘競技','mma-low-kick','ローキック / MMA Low Kick'],
    ['Combat Sports / 格闘競技','mma-shoot-doubleleg','タックル（ダブルレッグ） / Double-Leg Shot'],
    ['Combat Sports / 格闘競技','kickboxing-roundhouse','回し蹴り / Kickboxing Roundhouse'],
    ['Weapon Sparring / 武器スパー','kendo-men-strike','剣道・面打ち / Kendo Men Strike'],
    ['Weapon Sparring / 武器スパー','kendo-kamae','剣道・構え / Kendo Kamae'],
    ['Weapon Sparring / 武器スパー','fencing-lunge','フェンシング・ランジ / Fencing Lunge'],
    ['Weapon Sparring / 武器スパー','bo-staff-guard','棒術・ガード / Bo Staff Guard'],
    ['Weapon Sparring / 武器スパー','tonfa-cross-block','トンファー・クロスブロック / Tonfa Cross Block'],
    ['Ranged Battle / 遠距離バトル','archery-full-draw','アーチェリー・フルドロー / Archery Full Draw'],
    ['Ranged Battle / 遠距離バトル','kneel-aim-rifle','片膝射撃 / Kneeling Rifle Aim'],
    ['Ranged Battle / 遠距離バトル','prone-scope','伏せ・スコープ狙撃 / Prone Scoped Aim'],
    ['Ranged Battle / 遠距離バトル','crossbow-quickshot','クロスボウ・クイックショット / Crossbow Quick Shot'],
    ['Ranged Battle / 遠距離バトル','throwing-knife-ready','スローイングナイフ構え / Throwing Knife Ready'],
    ['Field & Court / フィールド＆コート','sprint-start-blocks','クラウチングスタート / Sprint Start from Blocks'],
    ['Field & Court / フィールド＆コート','soccer-slide-tackle','スライディングタックル / Soccer Slide Tackle'],
    ['Field & Court / フィールド＆コート','basketball-crossover','クロスオーバー / Basketball Crossover'],
    ['Field & Court / フィールド＆コート','tennis-serve-top','トスからのサーブ / Tennis Serve Toss'],
    ['Field & Court / フィールド＆コート','baseball-swing','フルスイング / Baseball Full Swing'],
    ['Parkour & Mobility / パルクール＆機動','parkour-vault','ヴォルト越え / Parkour Vault'],
    ['Parkour & Mobility / パルクール＆機動','parkour-cat-leap','キャットリープ / Cat Leap'],
    ['Parkour & Mobility / パルクール＆機動','slide-under-obstacle','スライディング回避 / Slide Under Obstacle'],
    ['Parkour & Mobility / パルクール＆機動','grapple-hook-swing','グラップルスイング / Grapple Hook Swing'],
    ['Parkour & Mobility / パルクール＆機動','zipline-ride','ジップライン滑走 / Zipline Ride'],
  ].forEach(x=>put(...x));

  // === part54: Reactions / 被弾・転倒 === 
  ;[
    ['Hit Reactions / 被弾リアクション','hit-stagger-forward','前によろめく / Stagger Forward'],
    ['Hit Reactions / 被弾リアクション','hit-stagger-backward','後ろによろめく / Stagger Backward'],
    ['Hit Reactions / 被弾リアクション','hit-hold-stomach','腹を押さえる / Holding Stomach in Pain'],
    ['Hit Reactions / 被弾リアクション','hit-face-flinch','顔をしかめる / Face Flinch'],
    ['Hit Reactions / 被弾リアクション','hit-knockback-fall','吹き飛ぶ / Knockback Fall'],
    ['Defensive Reactions / 防御反応','guard-cross-armed','腕で防御 / Cross-armed Guard'],
    ['Defensive Reactions / 防御反応','block-with-shield','盾で防御 / Shield Block'],
    ['Defensive Reactions / 防御反応','duck-dodge','しゃがんで回避 / Duck Dodge'],
    ['Defensive Reactions / 防御反応','sidestep-dodge','サイドステップ回避 / Sidestep Dodge'],
    ['Defensive Reactions / 防御反応','cover-head','頭を庇う / Covering Head'],
    ['Falling / 転倒・落下','fall-trip','つまずく / Trip and Fall'],
    ['Falling / 転倒・落下','fall-backwards','後ろに倒れる / Fall Backwards'],
    ['Falling / 転倒・落下','fall-forward','前に倒れる / Fall Forward'],
    ['Falling / 転倒・落下','fall-from-height','高所から落下 / Fall from Height'],
    ['Falling / 転倒・落下','fall-roll','転がり受け身 / Rolling Fall'],
    ['Struggle / 苦しむ・耐える','struggle-stand','立ちながら苦しむ / Struggling to Stand'],
    ['Struggle / 苦しむ・耐える','struggle-crawl','這って進む / Crawling Struggle'],
    ['Struggle / 苦しむ・耐える','kneel-cough','膝をついて咳き込む / Kneeling Cough'],
    ['Struggle / 苦しむ・耐える','exhausted-collapse','疲労で崩れる / Exhausted Collapse'],
    ['Struggle / 苦しむ・耐える','bound-resist','縛られて抵抗 / Bound Resistance'],
    ['KO & Finish / ノックアウト＆フィニッシュ','ko-lying-flat','気絶して倒れる / KO Lying Flat'],
    ['KO & Finish / ノックアウト＆フィニッシュ','ko-sprawl','大の字に倒れる / KO Sprawl'],
    ['KO & Finish / ノックアウト＆フィニッシュ','ko-sitting-dazed','座り込んで気絶 / KO Sitting Dazed'],
    ['KO & Finish / ノックアウト＆フィニッシュ','finish-victory-pose','勝利ポーズ / Victory Pose'],
    ['KO & Finish / ノックアウト＆フィニッシュ','finish-over-foe','相手の上に立つ / Standing Over Opponent'],
  ].forEach(x=>put(...x));

  // === part55: Weapon Actions / 武器アクション === 
  ;[
    ['Melee Swings / 近接スイング','swing-overhand','オーバーハンド斬り / Overhand Swing'],
    ['Melee Swings / 近接スイング','swing-side-horizontal','横一閃 / Side Horizontal Slash'],
    ['Melee Swings / 近接スイング','swing-upward','袈裟上がり / Upward Slash'],
    ['Melee Swings / 近接スイング','swing-spin','回転斬り / Spinning Slash'],
    ['Melee Swings / 近接スイング','swing-heavy-twohand','両手渾身斬り / Heavy Two-hand Swing'],
    ['Thrust & Guard / 突き・構え','thrust-long-lunge','長い踏み込み突き / Long Lunge Thrust'],
    ['Thrust & Guard / 突き・構え','thrust-short-jab','ショートジャブ / Short Jab'],
    ['Thrust & Guard / 突き・構え','guard-high','上段の構え / High Guard'],
    ['Thrust & Guard / 突き・構え','guard-middle','中段の構え / Middle Guard'],
    ['Thrust & Guard / 突き・構え','guard-low','下段の構え / Low Guard'],
    ['Dual / Spin / 二刀・スピン','dual-cross-slash','二刀クロス斬り / Dual Cross Slash'],
    ['Dual / Spin / 二刀・スピン','dual-alternate-flurry','交互乱舞 / Alternating Flurry'],
    ['Dual / Spin / 二刀・スピン','spin-staff','棒回しスピン / Spinning Staff'],
    ['Dual / Spin / 二刀・スピン','spin-blade-protect','刃の回転防御 / Blade Spin Guard'],
    ['Dual / Spin / 二刀・スピン','sheath-draw-iaido','居合抜き / Iaido Draw'],
    ['Ranged Actions / 遠距離アクション','bow-full-draw','弓を引き絞る / Bow Full Draw'],
    ['Ranged Actions / 遠距離アクション','bow-quick-shot','素早い射ち / Quick Shot'],
    ['Ranged Actions / 遠距離アクション','aim-iron-sight','アイアンサイト狙い / Aim Iron Sight'],
    ['Ranged Actions / 遠距離アクション','aim-hip-fire','腰だめ撃ち / Hip Fire'],
    ['Ranged Actions / 遠距離アクション','reload-tactical','タクティカルリロード / Tactical Reload'],
    ['Special Techniques / 特殊技','parry-deflect','受け流し / Parry & Deflect'],
    ['Special Techniques / 特殊技','counter-riposte','カウンター・リポスト / Counter Riposte'],
    ['Special Techniques / 特殊技','leap-attack','跳躍攻撃 / Leap Attack'],
    ['Special Techniques / 特殊技','ground-pound','グランドパンチ / Ground Pound'],
    ['Special Techniques / 特殊技','finisher-execution','フィニッシャー / Execution Finisher'],
  ].forEach(x=>put(...x));

  // === part56: Locations A (都市・日常) === 
  // カテゴリ & presets 追加
  ;[
    ['Locations / 場所','loc-city-street-day','街路（昼） / city street (day)'],
    ['Locations / 場所','loc-city