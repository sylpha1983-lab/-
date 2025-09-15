/* pose_part3.js — merged static poses 21..30 (v3.0)
   - 内容: pose_part21..30 の categories/items を忠実マージ（ID重複は排除）
   - Registers: window.__registerPosePart('pose', 3, { categories:[...], presets:[] })
   - [CHANGE] ランタイム収集を廃止し、固定展開で安定登録
*/
(function (w) {
  "use strict";

  // 収集テーブル（カテゴリ名 → {id,label} Map）＋ID重複のグローバル排除
  const byName = new Map();
  const seen = new Set();
  function put(cat, id, label) {
    if (!cat || !id) return;
    id = String(id).trim();
    if (seen.has(id)) return;                 // 同一IDは一度だけ採用
    seen.add(id);
    if (!byName.has(cat)) byName.set(cat, new Map());
    const m = byName.get(cat);
    if (!m.has(id)) m.set(id, { id, label: label || id });
  }

  // ===== part21 — Hands & Gestures / 手・ジェスチャー =====  // src: pose_part21.js
  [
    ['Hands & Gestures / 手・ジェスチャー','hand-peace-sign','ピースサイン / Peace Sign'],
    ['Hands & Gestures / 手・ジェスチャー','hand-victory','Vサイン（上向き） / V Sign Upwards'],
    ['Hands & Gestures / 手・ジェスチャー','hand-point-forward','前方を指さす / Point Forward'],
    ['Hands & Gestures / 手・ジェスチャー','hand-point-side','横を指さす / Point Side'],
    ['Hands & Gestures / 手・ジェスチャー','hand-wave-hello','手を振る / Wave Hello'],
    ['Hands & Gestures / 手・ジェスチャー','hand-thumb-up','サムズアップ / Thumbs Up'],
    ['Hands & Gestures / 手・ジェスチャー','hand-thumb-down','サムズダウン / Thumbs Down'],
    ['Hands & Gestures / 手・ジェスチャー','hand-heart','指ハート / Finger Heart'],
    ['Hands & Gestures / 手・ジェスチャー','hand-open-offer','手のひらを差し出す / Open Hand Offer'],
    ['Hands & Gestures / 手・ジェスチャー','hand-prayer','合掌 / Prayer Hands'],
    ['Hands & Gestures / 手・ジェスチャー','hand-on-chest','胸に手を当てる / Hand on Chest'],
    ['Hands & Gestures / 手・ジェスチャー','hand-on-cheek','頬に手 / Hand on Cheek'],
    ['Hands & Gestures / 手・ジェスチャー','hand-cover-mouth','口元を隠す / Covering Mouth'],
    ['Hands & Gestures / 手・ジェスチャー','hand-steeple','指先を合わせる / Steepled Fingers'],
    ['Hands & Gestures / 手・ジェスチャー','hands-clasped-back','後ろで手を組む / Hands Clasped Behind'],
    ['Hands & Gestures / 手・ジェスチャー','hands-interlaced-front','前で手を組む / Hands Interlaced Front'],
  ].forEach(x=>put(...x));

  // ===== part22 — Props & Interaction / 小物・インタラクション =====  // src: pose_part22.js
  [
    ['Props & Interaction / 小物・インタラクション','hold-book-open','本を開いて持つ / Hold Open Book'],
    ['Props & Interaction / 小物・インタラクション','read-book-seated','座って本を読む / Read Book Seated'],
    ['Props & Interaction / 小物・インタラクション','hold-cup-two-hands','両手でカップを持つ / Hold Cup Two Hands'],
    ['Props & Interaction / 小物・インタラクション','sip-cup','カップを口に運ぶ / Sip from Cup'],
    ['Props & Interaction / 小物・インタラクション','hold-phone-one-hand','片手でスマホ / Hold Phone One Hand'],
    ['Props & Interaction / 小物・インタラクション','selfie-angle-high','自撮り（ハイアングル） / Selfie High Angle'],
    ['Props & Interaction / 小物・インタラクション','type-laptop','ノートPCでタイピング / Typing on Laptop'],
    ['Props & Interaction / 小物・インタラクション','lean-on-rail','手すりにもたれる / Lean on Railing'],
    ['Props & Interaction / 小物・インタラクション','sit-on-stairs','階段に腰掛ける / Sit on Stairs'],
    ['Props & Interaction / 小物・インタラクション','tie-shoelaces','靴紐を結ぶ / Tie Shoelaces'],
    ['Props & Interaction / 小物・インタラクション','hold-umbrella','傘を持つ / Hold Umbrella'],
    ['Props & Interaction / 小物・インタラクション','open-umbrella-lookup','傘を差して見上げる / Open Umbrella Look Up'],
    ['Props & Interaction / 小物・インタラクション','carry-bag-shoulder','肩掛けカバン / Carry Shoulder Bag'],
    ['Props & Interaction / 小物・インタラクション','carry-tote-hand','トートを手で持つ / Carry Tote by Hand'],
    ['Props & Interaction / 小物・インタラクション','adjust-glasses','眼鏡を直す / Adjust Glasses'],
    ['Props & Interaction / 小物・インタラクション','put-on-headphones','ヘッドホンを装着 / Put On Headphones'],
  ].forEach(x=>put(...x));

  // ===== part23 — Camera Angles / カメラ視点 =====  // src: pose_part23.js
  [
    ['Camera Angles / カメラ視点','pose-look-up','見上げる / Looking Up'],
    ['Camera Angles / カメラ視点','pose-look-down','見下ろす / Looking Down'],
    ['Camera Angles / カメラ視点','pose-over-shoulder','振り返る（肩越し） / Over-the-Shoulder Look'],
    ['Camera Angles / カメラ視点','pose-look-away','目を逸らす / Looking Away'],
    ['Camera Angles / カメラ視点','pose-direct-gaze','カメラ目線 / Direct Gaze'],
    ['Camera Angles / カメラ視点','pose-closeup-face','顔のアップ / Face Close-Up'],
    ['Camera Angles / カメラ視点','pose-half-body','半身ショット / Half-Body Shot'],
    ['Camera Angles / カメラ視点','pose-full-body','全身ショット / Full-Body Shot'],
    ['Camera Angles / カメラ視点','pose-foreshortened','遠近強調 / Foreshortened Perspective'],
    ['Camera Angles / カメラ視点','pose-top-view','俯瞰視点 / Top View'],
    ['Camera Angles / カメラ視点','pose-low-angle','ローアングル / Low Angle'],
    ['Camera Angles / カメラ視点','pose-dutch-angle','斜め構図（ダッチアングル） / Dutch Angle'],
  ].forEach(x=>put(...x));

  // ===== part24 — Duo & Group Basics =====  // src: pose_part24.js
  [
    // Duo
    ['Duo / 二人ポーズ','duo-standing-side-by-side','並んで立つ / Standing Side by Side'],
    ['Duo / 二人ポーズ','duo-back-to-back','背中合わせ / Back to Back'],
    ['Duo / 二人ポーズ','duo-hand-holding','手をつなぐ / Holding Hands'],
    ['Duo / 二人ポーズ','duo-arm-around-shoulder','肩に腕を回す / Arm Around Shoulder'],
    ['Duo / 二人ポーズ','duo-arm-around-waist','腰に腕を回す / Arm Around Waist'],
    ['Duo / 二人ポーズ','duo-looking-at-each-other','見つめ合う / Looking at Each Other'],
    ['Duo / 二人ポーズ','duo-whisper','耳打ちする / Whispering'],
    ['Duo / 二人ポーズ','duo-sharing-umbrella','傘をシェアする / Sharing Umbrella'],
    // Group
    ['Group / グループポーズ','group-sitting-circle','円形に座る / Sitting in a Circle'],
    ['Group / グループポーズ','group-standing-line','横並びに立つ / Standing in a Line'],
    ['Group / グループポーズ','group-huddle','集まって円陣 / Group Huddle'],
    ['Group / グループポーズ','group-jump-cheer','ジャンプして喜ぶ / Jumping Cheer'],
    ['Group / グループポーズ','group-walk-together','一緒に歩く / Walking Together'],
  ].forEach(x=>put(...x));

  // ===== part25 — Action & Combat =====  // src: pose_part25.js
  [
    // Melee
    ['Melee / 近接アクション','action-sprint-start','ダッシュ開始 / Sprint Start'],
    ['Melee / 近接アクション','action-forward-lunge','前方ランジ / Forward Lunge'],
    ['Melee / 近接アクション','action-slide-dodge','スライド回避 / Slide Dodge'],
    ['Melee / 近接アクション','action-dive-roll','前転ダイブ / Dive Roll'],
    ['Melee / 近接アクション','action-roundhouse-kick','回し蹴り / Roundhouse Kick'],
    ['Melee / 近接アクション','action-high-knee-strike','ハイニー・ストライク / High Knee Strike'],
    ['Melee / 近接アクション','action-cross-guard','クロスガード / Cross Guard'],
    ['Melee / 近接アクション','action-weapon-ready','構え（武器準備） / Weapon Ready Stance'],
    // Ranged
    ['Ranged / 遠距離アクション','action-aim-bow','弓を引く / Aiming a Bow'],
    ['Ranged / 遠距離アクション','action-aim-pistol','片手銃を構える / Aiming Pistol'],
    ['Ranged / 遠距離アクション','action-aim-rifle-kneel','膝撃ちライフル / Kneeling Rifle Aim'],
    ['Ranged / 遠距離アクション','action-throw-knife','投てきの構え / Throwing Stance'],
    // Cinematic
    ['Cinematic / シネマティック','action-superhero-landing','スーパーヒーロー着地 / Superhero Landing'],
    ['Cinematic / シネマティック','action-midair-slash','空中斬り / Midair Slash'],
    ['Cinematic / シネマティック','action-bullet-dodge','弾丸回避 / Bullet Dodge'],
    ['Cinematic / シネマティック','action-stand-off','対峙 / Stand-off'],
  ].forEach(x=>put(...x));

  // ===== part26 — Fitness & Sports =====  // src: pose_part26.js
  [
    // Fitness Basics
    ['Fitness Basics / 基礎フィットネス','fitness-pushup-plank','腕立て（プランク姿勢） / Push-up (Plank)'],
    ['Fitness Basics / 基礎フィットネス','fitness-squat','スクワット / Squat'],
    ['Fitness Basics / 基礎フィットネス','fitness-lunge','ランジ / Lunge'],
    ['Fitness Basics / 基礎フィットネス','fitness-deadlift-form','デッドリフト姿勢 / Deadlift Form'],
    ['Fitness Basics / 基礎フィットネス','fitness-dumbbell-curl','ダンベルカール / Dumbbell Curl'],
    ['Fitness Basics / 基礎フィットネス','fitness-overhead-press','オーバーヘッドプレス / Overhead Press'],
    // Cardio
    ['Cardio / 有酸素運動','cardio-treadmill-run','トレッドミル走 / Treadmill Run'],
    ['Cardio / 有酸素運動','cardio-rope-jump','縄跳び / Jump Rope'],
    ['Cardio / 有酸素運動','cardio-high-knees','ハイニー / High Knees'],
    ['Cardio / 有酸素運動','cardio-burpee','バーピー / Burpee'],
    // Sports
    ['Sports / 競技','sport-soccer-kick','サッカーキック / Soccer Kick'],
    ['Sports / 競技','sport-basketball-shot','ジャンプシュート / Basketball Jump Shot'],
    ['Sports / 競技','sport-tennis-forehand','テニス・フォアハンド / Tennis Forehand'],
    ['Sports / 競技','sport-baseball-swing','バッティングスイング / Baseball Swing'],
    ['Sports / 競技','sport-swim-dive','飛び込み / Swimming Dive'],
  ].forEach(x=>put(...x));

  // ===== part27 — Daily Life & Work =====  // src: pose_part27.js
  [
    // Daily Gestures
    ['Daily Gestures / 日常の動作','daily-wave-hand','手を振る / Waving Hand'],
    ['Daily Gestures / 日常の動作','daily-phone-call','電話をかける / Phone Call'],
    ['Daily Gestures / 日常の動作','daily-carry-bag','カバンを持つ / Carrying a Bag'],
    ['Daily Gestures / 日常の動作','daily-open-door','ドアを開ける / Opening Door'],
    ['Daily Gestures / 日常の動作','daily-sit-crosslegs','足を組んで座る / Sitting Cross-legged'],
    ['Daily Gestures / 日常の動作','daily-sip-cup','カップを飲む / Sipping a Cup'],
    ['Daily Gestures / 日常の動作','daily-umbrella-walk','傘を差して歩く / Walking with Umbrella'],
    // Workplace
    ['Workplace / 職場','work-typing','タイピング / Typing at Desk'],
    ['Workplace / 職場','work-presentation','プレゼン指差し / Giving a Presentation'],
    ['Workplace / 職場','work-write-notes','メモを書く / Writing Notes'],
    ['Workplace / 職場','work-clipboard','クリップボード確認 / Checking Clipboard'],
    ['Workplace / 職場','work-phone-desk','デスクで電話 / Desk Phone Call'],
    // Casual
    ['Casual / カジュアル','casual-hands-pocket','ポケットに手を入れる / Hands in Pockets'],
    ['Casual / カジュアル','casual-backpack-sling','バックパック片掛け / Slinging Backpack'],
    ['Casual / カジュアル','casual-stretching','背伸び / Stretching'],
    ['Casual / カジュアル','casual-look-watch','腕時計を見る / Looking at Watch'],
  ].forEach(x=>put(...x));

  // ===== part28 — Stage & Dance =====  // src: pose_part28.js
  [
    // Dance Basics
    ['Dance Basics / ダンス基礎','dance-ballet-arabesque','アラベスク / Ballet Arabesque'],
    ['Dance Basics / ダンス基礎','dance-ballet-pirouette','ピルエット / Ballet Pirouette'],
    ['Dance Basics / ダンス基礎','dance-jazz-kick','ジャズキック / Jazz Kick'],
    ['Dance Basics / ダンス基礎','dance-hiphop-freeze','ヒップホップフリーズ / Hip-hop Freeze'],
    ['Dance Basics / ダンス基礎','dance-modern-floor','モダンダンス床技 / Modern Floor Pose'],
    // Stage Performance
    ['Stage Performance / 舞台演技','stage-sing-mic','マイクで歌う / Singing with Mic'],
    ['Stage Performance / 舞台演技','stage-bow','お辞儀 / Stage Bow'],
    ['Stage Performance / 舞台演技','stage-spotlight-pose','スポットライトの中でポーズ / Spotlight Pose'],
    ['Stage Performance / 舞台演技','stage-dramatic-reach','ドラマチックな伸ばし / Dramatic Reach'],
    ['Stage Performance / 舞台演技','stage-duet-hold','デュエット抱擁 / Duet Hold'],
    // Festival & Idol
    ['Festival & Idol / 祭り・アイドル','idol-peace-sign','ピースサイン / Peace Sign'],
    ['Festival & Idol / 祭り・アイドル','idol-heart-hands','ハートハンド / Heart Hands'],
    ['Festival & Idol / 祭り・アイドル','idol-group-formation','グループフォーメーション / Group Formation'],
    ['Festival & Idol / 祭り・アイドル','idol-cheer-dance','チアダンス / Cheer Dance'],
  ].forEach(x=>put(...x));

  // ===== part29 — Weapons & Fantasy =====  // src: pose_part29.js
  [
    // Knight & Warrior
    ['Knight & Warrior / 騎士・戦士','sword-ready-stance','剣の構え / Sword Ready Stance'],
    ['Knight & Warrior / 騎士・戦士','sword-over-shoulder','肩に剣を担ぐ / Sword Over Shoulder'],
    ['Knight & Warrior / 騎士・戦士','shield-front-block','盾で正面防御 / Shield Front Block'],
    ['Knight & Warrior / 騎士・戦士','lance-charge','ランス突撃 / Lance Charge'],
    ['Knight & Warrior / 騎士・戦士','greatsword-twohand-rise','大剣を両手で掲げる / Greatsword Two-hand Rise'],
    // Ranger & Archer
    ['Ranger & Archer / レンジャー・弓兵','bow-draw-full','弓をいっぱいに引く / Bow Full Draw'],
    ['Ranger & Archer / レンジャー・弓兵','bow-aim-kneel','膝射ちで狙う / Bow Aim Kneeling'],
    ['Ranger & Archer / レンジャー・弓兵','crossbow-check','クロスボウ確認 / Checking Crossbow'],
    ['Ranger & Archer / レンジャー・弓兵','arrow-nock-quick','素早く番える / Quick Nock Arrow'],
    // Mage & Caster
    ['Mage & Caster / 魔法使い・術者','staff-cast-forward','杖を前に突き出し詠唱 / Staff Casting Forward'],
    ['Mage & Caster / 魔法使い・術者','magic-circle-chant','魔法陣へ詠唱 / Chant to Magic Circle'],
    ['Mage & Caster / 魔法使い・術者','spellbook-read','魔導書を読む / Reading Spellbook'],
    ['Mage & Caster / 魔法使い・術者','runic-gesture','ルーンの手印 / Runic Hand Gesture'],
    // Rogue & Hunter
    ['Rogue & Hunter / 盗賊・狩人','dual-dagger-guard','短剣二刀で構える / Dual Dagger Guard'],
    ['Rogue & Hunter / 盗賊・狩人','throwing-knife-ready','投げナイフ構え / Throwing Knife Ready'],
    ['Rogue & Hunter / 盗賊・狩人','snare-set-low','罠を仕掛ける / Setting a Snare (Low)'],
    ['Rogue & Hunter / 盗賊・狩人','beast-tamer-whistle','笛で獣を呼ぶ / Beast Tamer Whistle'],
  ].forEach(x=>put(...x));

  // ===== part30 — Cinematic & Special FX =====  // src: pose_part30.js
  [
    // Hero Shots
    ['Hero Shots / ヒーローショット','slow-walk-hero','ヒーローのスローステップ / Slow Walk Hero'],
    ['Hero Shots / ヒーローショット','coat-flare-turn','コートを翻して振り向く / Coat Flare Turn'],
    ['Hero Shots / ヒーローショット','backlit-silhouette-reach','逆光シルエットで手を伸ばす / Backlit Silhouette Reach'],
    ['Hero Shots / ヒーローショット','landing-superhero','着地ヒーローポーズ / Superhero Landing'],
    ['Hero Shots / ヒーローショット','wind-hair-blown-stand','逆風に髪がなびく立ち / Wind-blown Stand'],
    // Action & Stunts
    ['Action & Stunts / アクション・スタント','midair-spin','空中スピン / Midair Spin'],
    ['Action & Stunts / アクション・スタント','slide-on-knees','膝スライド / Slide on Knees'],
    ['Action & Stunts / アクション・スタント','wall-run-touch','壁走りのタッチ / Wall Run Touch'],
    ['Action & Stunts / アクション・スタント','dive-roll-forward','前方ダイブロール / Forward Dive Roll'],
    // Atmosphere
    ['Atmosphere / 雰囲気演出','dust-kick-stop','砂塵を蹴り止まる / Dust Kick Stop'],
    ['Atmosphere / 雰囲気演出','rain-look-up','雨を見上げる / Look Up in Rain'],
    ['Atmosphere / 雰囲気演出','umbrella-drop-slow','傘を落とすスロー / Umbrella Drop (Slow)'],
    ['Atmosphere / 雰囲気演出','ground-touch-kneel','地面に触れて膝をつく / Ground Touch Kneel'],
    ['Atmosphere / 雰囲気演出','silhouette-walk-away','シルエットで歩き去る / Silhouette Walk Away'],
    // Film Making
    ['Film Making / 映像制作','camera-operator-stance','カメラを構える / Camera Operator Stance'],
    ['Film Making / 映像制作','clapboard-action','カチンコ「アクション」 / Clapboard: Action'],
    ['Film Making / 映像制作','boom-mic-hold','ブームマイクを構える / Holding Boom Mic'],
  ].forEach(x=>put(...x));

  // ===== categories に整形 =====
  const categories = Array.from(byName, ([name, map]) => ({
    name,
    items: Array.from(map.values())
  }));

  const data = { categories, presets: [] };

  // ===== 登録（3形態対応）=====
  try{
    if (typeof w.__registerPosePart === 'function' && w.__registerPosePart.length >= 3) {
      w.__registerPosePart('pose', 3, data);   // faith互換3引数（推奨）
    } else if (typeof w.__registerPosePart === 'function') {
      w.__registerPosePart(3, data);           // 従来2引数
    } else if (typeof w.__registerPromptPart === 'function' && w.__registerPromptPart.length >= 3) {
      w.__registerPromptPart('pose', 3, data); // 誤呼び出し吸収
    } else {
      // 最終フォールバック
      w.__parts = w.__parts || { pose:{} };
      w.__parts.pose = w.__parts.pose || {};
      w.__parts.pose[3] = data;
    }
  }catch(e){
    console.error('[pose_part3 merged 21..30 v3.0] register error:', e);
  }
})(window);