/* pose_part5.js — merged static poses 41..50 (v5.0)
   - 内容: pose_part41..50 の categories/items を忠実マージ（ID重複は排除）
   - Registers: window.__registerPosePart('pose', 5, { categories:[...], presets:[] })
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
    if (seen.has(id)) return;         // 同一IDは一度だけ採用
    seen.add(id);
    if (!byName.has(cat)) byName.set(cat, new Map());
    const m = byName.get(cat);
    if (!m.has(id)) m.set(id, { id, label: label || id });
  }

  // === part41: SF / メカ搭乗（追加セット） ===  
  [
    ['SF / メカ搭乗ポーズ','cockpit-alert','警報に反応する / Reacting to cockpit alert'],
    ['SF / メカ搭乗ポーズ','joystick-move','操縦桿を操作 / Moving joystick'],
    ['SF / メカ搭乗ポーズ','gravity-switch','重力スイッチ操作 / Operating gravity switch'],
    ['SF / メカ搭乗ポーズ','target-lock','ターゲットロック / Locking target'],
    ['SF / メカ搭乗ポーズ','combat-shield','シールド展開 / Deploying shield'],
    ['SF / メカ搭乗ポーズ','post-battle-relax','戦闘後の安堵 / Relaxing after battle'],
  ].forEach(x=>put(...x));

  // === part42: SF / メカ搭乗（操作・休息） ===  
  [
    ['SF / メカ搭乗ポーズ','cockpit-hand-wave','仲間に手を振る / Waving to ally in cockpit'],
    ['SF / メカ搭乗ポーズ','energy-core-adjust','エネルギーコア調整 / Adjusting energy core'],
    ['SF / メカ搭乗ポーズ','stealth-mode','ステルスモード操作 / Activating stealth mode'],
    ['SF / メカ搭乗ポーズ','battle-injury','負傷して操縦 / Piloting while injured'],
    ['SF / メカ搭乗ポーズ','power-boost','パワーブースト / Engaging power boost'],
    ['SF / メカ搭乗ポーズ','cockpit-rest','一時休憩 / Resting inside cockpit'],
  ].forEach(x=>put(...x));

  // === part43: スポーツ / アクション I ===  
  [
    ['スポーツ / アクションポーズ','running-start','ダッシュ開始 / Sprint start'],
    ['スポーツ / アクションポーズ','high-kick','ハイキック / High kick'],
    ['スポーツ / アクションポーズ','jump-shot','ジャンプショット / Basketball jump shot'],
    ['スポーツ / アクションポーズ','karate-pose','空手構え / Karate stance'],
    ['スポーツ / アクションポーズ','soccer-kick','サッカーキック / Soccer kick'],
    ['スポーツ / アクションポーズ','martial-block','武道の受け / Martial arts block'],
  ].forEach(x=>put(...x));

  // === part44: スポーツ / アクション II ===  
  [
    ['スポーツ / アクションポーズ','boxing-guard','ボクシングガード / Boxing guard'],
    ['スポーツ / アクションポーズ','punch-forward','ストレートパンチ / Straight punch'],
    ['スポーツ / アクションポーズ','kick-flip','キックフリップ / Skateboard kickflip'],
    ['スポーツ / アクションポーズ','karate-kiai','気合の叫び / Karate kiai shout'],
    ['スポーツ / アクションポーズ','archery-draw','弓を引く / Drawing a bow'],
    ['スポーツ / アクションポーズ','dodge-roll','回避ロール / Dodge roll'],
  ].forEach(x=>put(...x));

  // === part45: スポーツ / アクション III ===  
  [
    ['スポーツ / アクションポーズ','climb-wall','壁登り / Climbing wall'],
    ['スポーツ / アクションポーズ','swimming-stroke','水泳ストローク / Swimming stroke'],
    ['スポーツ / アクションポーズ','fencing-lunge','フェンシング突き / Fencing lunge'],
    ['スポーツ / アクションポーズ','karate-kick','回し蹴り / Roundhouse kick'],
    ['スポーツ / アクションポーズ','basketball-dunk','ダンクシュート / Basketball dunk'],
    ['スポーツ / アクションポーズ','parkour-vault','パルクール動作 / Parkour vault'],
  ].forEach(x=>put(...x));

  // === part46: Sports — Team & Racket ===  
  [
    ['Sports / スポーツポーズ','soccer-dribble','サッカードリブル / Soccer dribbling'],
    ['Sports / スポーツポーズ','soccer-header','ヘディング / Soccer header'],
    ['Sports / スポーツポーズ','tennis-serve','テニスサーブ / Tennis serve'],
    ['Sports / スポーツポーズ','tennis-forehand','フォアハンド / Tennis forehand'],
    ['Sports / スポーツポーズ','basketball-pass','パス動作 / Basketball pass'],
    ['Sports / スポーツポーズ','basketball-defense','ディフェンス姿勢 / Basketball defense stance'],
  ].forEach(x=>put(...x));

  // === part47: Sports — Ball & Field ===  
  [
    ['Sports / スポーツポーズ','baseball-swing','バッティングスイング / Baseball batting swing'],
    ['Sports / スポーツポーズ','baseball-pitch','投球フォーム / Baseball pitch'],
    ['Sports / スポーツポーズ','baseball-catch','キャッチ動作 / Baseball catch'],
    ['Sports / スポーツポーズ','golf-swing','ゴルフスイング / Golf swing'],
    ['Sports / スポーツポーズ','golf-putt','パッティング / Golf putting'],
    ['Sports / スポーツポーズ','volleyball-spike','スパイク / Volleyball spike'],
  ].forEach(x=>put(...x));

  // === part48: Sports — Volley & Rugby & Swim ===  
  [
    ['Sports / スポーツポーズ','volleyball-serve','サーブ / Volleyball serve'],
    ['Sports / スポーツポーズ','rugby-tackle','タックル / Rugby tackle'],
    ['Sports / スポーツポーズ','rugby-scrum','スクラム / Rugby scrum'],
    ['Sports / スポーツポーズ','swimming-dive','飛び込み / Swimming dive'],
    ['Sports / スポーツポーズ','swimming-butterfly','バタフライ / Butterfly stroke'],
    ['Sports / スポーツポーズ','swimming-backstroke','背泳ぎ / Backstroke'],
  ].forEach(x=>put(...x));

  // === part49: Sports IV（ミックス） ===  
  [
    ['Sports Poses IV / スポーツポーズ IV','surfing_wave_pose','サーフィン・波乗り / Surfing on a wave'],
    ['Sports Poses IV / スポーツポーズ IV','snowboard_jump_pose','スノボ・ジャンプ / Snowboard jump'],
    ['Sports Poses IV / スポーツポーズ IV','skateboard_trick_pose','スケボー・トリック / Skateboard trick'],
    ['Sports Poses IV / スポーツポーズ IV','archery_aim_pose','弓を引く姿 / Archery aiming'],
    ['Sports Poses IV / スポーツポーズ IV','fencing_duel_pose','フェンシング・決闘姿勢 / Fencing duel stance'],
    ['Sports Poses IV / スポーツポーズ IV','rugby_tackle_pose','ラグビー・タックル / Rugby tackle'],
    ['Sports Poses IV / スポーツポーズ IV','golf_swing_pose','ゴルフスイング / Golf swing'],
    ['Sports Poses IV / スポーツポーズ IV','boxing_defense_pose','ボクシング・防御姿勢 / Boxing defensive stance'],
    ['Sports Poses IV / スポーツポーズ IV','karate_high_kick_pose','空手・ハイキック / Karate high kick'],
    ['Sports Poses IV / スポーツポーズ IV','sumo_shiko_pose','相撲・四股踏み / Sumo shiko stance'],
  ].forEach(x=>put(...x));

  // === part50: Sports V（ミックス） ===  
  [
    ['Sports Poses V / スポーツポーズ V','soccer_goal_pose','サッカー・ゴールポーズ / Soccer goal celebration'],
    ['Sports Poses V / スポーツポーズ V','basketball_dunk_pose','バスケ・ダンクシュート / Basketball dunk'],
    ['Sports Poses V / スポーツポーズ V','tennis_serve_pose','テニス・サーブ / Tennis serve'],
    ['Sports Poses V / スポーツポーズ V','swimming_dive_pose','水泳・飛び込み / Swimming dive'],
    ['Sports Poses V / スポーツポーズ V','marathon_running_pose','マラソンランナー / Marathon running'],
    ['Sports Poses V / スポーツポーズ V','weightlifting_pose','重量挙げ / Weightlifting stance'],
    ['Sports Poses V / スポーツポーズ V','baseball_pitch_pose','野球・ピッチング / Baseball pitching'],
    ['Sports Poses V / スポーツポーズ V','volleyball_block_pose','バレー・ブロック / Volleyball block'],
    ['Sports Poses V / スポーツポーズ V','ice_skating_spin_pose','フィギュアスケート・スピン / Ice skating spin'],
    ['Sports Poses V / スポーツポーズ V','climbing_wall_pose','ボルダリング・壁登り / Climbing wall'],
  ].forEach(x=>put(...x));

  // === categories → 配列化 ===
  const categories = Array.from(byName, ([name, map]) => ({
    name,
    items: Array.from(map.values())
  }));

  const data = { categories, presets: [] };

  // === 登録（3形態対応）===
  try{
    if (typeof w.__registerPosePart === 'function' && w.__registerPosePart.length >= 3) {
      w.__registerPosePart('pose', 5, data);   // faith互換3引数（推奨）
    } else if (typeof w.__registerPosePart === 'function') {
      w.__registerPosePart(5, data);           // 従来2引数
    } else if (typeof w.__registerPromptPart === 'function' && w.__registerPromptPart.length >= 3) {
      w.__registerPromptPart('pose', 5, data); // 誤呼び出し吸収
    } else {
      w.__parts = w.__parts || { pose:{} };
      w.__parts.pose = w.__parts.pose || {};
      w.__parts.pose[5] = data;
    }
  }catch(e){
    console.error('[pose_part5 merged 41..50 v5.0] register error:', e);
  }
})(window);