/* pose_part2.js — merged static poses 11..20 (v2.0)
   - 内容: pose_part11..20 の categories/items を忠実マージ（ID重複は排除）
   - Registers: window.__registerPosePart('pose', 2, { categories:[...], presets:[] })
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
    if (seen.has(id)) return;              // 同一IDは一度だけ採用
    seen.add(id);
    if (!byName.has(cat)) byName.set(cat, new Map());
    const m = byName.get(cat);
    if (!m.has(id)) m.set(id, { id, label: label || id });
  }

  // ===== part11 =====  (Walk & Stand / Sit / Hands)  // src: pose_part11.js
  [
    // Walk & Stand
    ['Walk & Stand / 立つ・歩く','stand-weight-shift','体重移動・立ち / weight-shift stand'],
    ['Walk & Stand / 立つ・歩く','stand-pocket','ポケットに手 / hands in pockets'],
    ['Walk & Stand / 立つ・歩く','walk-casual','カジュアルに歩く / casual walk'],
    ['Walk & Stand / 立つ・歩く','walk-looking-back','振り返り歩き / walking look-back'],
    // Sit
    ['Sit / 座る','sit-crossed-legs','脚組み / crossed legs sit'],
    ['Sit / 座る','sit-forward-lean','前傾 / forward lean sit'],
    ['Sit / 座る','sit-window-gaze','窓辺で見つめる / window gaze sit'],
    // Hands
    ['Hands / 手のしぐさ','hand-coffee-mug','マグを持つ / holding coffee mug'],
    ['Hands / 手のしぐさ','hand-book-read','本を読む / reading book'],
    ['Hands / 手のしぐさ','hand-phone-scroll','スマホ操作 / phone scrolling'],
  ].forEach(x=>put(...x));

  // ===== part12 =====  (Pairs / Crowd / Interactions)  // src: pose_part12.js
  [
    // Pairs
    ['Pairs / ペア','pair-highfive','ハイタッチ / high five'],
    ['Pairs / ペア','pair-back-to-back','背中合わせ / back to back'],
    ['Pairs / ペア','pair-support','支える / supportive hold'],
    // Crowd
    ['Crowd / 複数','group-cheer','歓声 / group cheer'],
    ['Crowd / 複数','group-discussion','談話 / group discussion'],
    ['Crowd / 複数','group-queue','列に並ぶ / standing in line'],
    // Interactions
    ['Interactions / 相互作用','pass-object','物を手渡す / passing object'],
    ['Interactions / 相互作用','help-standup','立ち上がりを助ける / help stand up'],
    ['Interactions / 相互作用','guide-hand','手を引く / guiding by hand'],
  ].forEach(x=>put(...x));

  // ===== part13 =====  (Basic Standing / Sitting / Crouch&Kneel / Upper Body&Gestures / Hand Signs / Head&Gaze / Motion / Lying)  // src: pose_part13.js
  ;(function(){
    const C = {
      '基本立ち / Basic Standing': [
        ['stand-neutral','ニュートラル立ち / Neutral Stand'],
        ['stand-contrapposto','コントラポスト / Contrapposto'],
        ['stand-wide-stance','大きく開いた立ち / Wide Stance'],
        ['stand-l-stance','Lスタンス / L-stance'],
        ['stand-tiptoe','つま先立ち / Tiptoe'],
        ['stand-one-leg-relaxed','片足に体重 / One-leg Relaxed'],
        ['power-pose','パワーポーズ / Power Pose'],
        ['stand-hands-behind-back','手を後ろで組む / Hands Behind Back'],
        ['stand-hands-in-pockets','ポケットに手 / Hands in Pockets'],
        ['stand-crossed-legs','脚を交差して立つ / Legs Crossed Standing'],
      ],
      '座り / Sitting': [
        ['sit-straight-chair','椅子で背筋を伸ばす / Sit Straight on Chair'],
        ['sit-relaxed','椅子でゆったり / Relaxed Sitting'],
        ['sit-crossed-legs','脚を組んで座る / Cross-legged Sitting'],
        ['sit-floor-w','女の子座り / W-sitting'],
        ['sit-side-saddle','横乗り座り / Side-saddle Sitting'],
        ['sit-knees-up','膝を抱えて座る / Hug Knees Sitting'],
      ],
      'しゃがみ・膝 / Crouch & Kneel': [
        ['crouch-squat','しゃがむ / Crouch (Squat)'],
        ['kneel-one-knee','片膝立ち / Kneel on One Knee'],
        ['kneel-both','両膝立ち / Kneel on Both Knees'],
      ],
      '上半身・所作 / Upper Body & Gestures': [
        ['arms-crossed','腕を組む / Arms Crossed'],
        ['hands-on-hips','腰に手 / Hands on Hips'],
        ['one-hand-on-hip','片手を腰に / One Hand on Hip'],
        ['hand-on-chest','胸に手 / Hand on Chest'],
        ['hand-on-cheek','頬に手 / Hand on Cheek'],
        ['chin-rest','顎に手 / Chin Rest'],
        ['hair-touch','髪に触れる / Hair Touch'],
        ['hands-behind-head','頭の後ろで手を組む / Hands Behind Head'],
        ['hands-clasped-front','前で手を組む / Hands Clasped in Front'],
        ['hold-skirt','スカートをつまむ / Hold Skirt'],
        ['hold-book','本を持つ / Hold Book'],
        ['phone-selfie','スマホ自撮り / Phone Selfie'],
      ],
      'ハンドサイン / Hand Signs': [
        ['peace-sign','ピースサイン / Peace Sign'],
        ['finger-heart','指ハート / Finger Heart'],
        ['point-forward','前方を指差す / Point Forward'],
        ['thumbs-up','サムズアップ / Thumbs Up'],
        ['small-wave','小さく手を振る / Small Wave'],
        ['reach-out','手を差し伸べる / Reach Out'],
        ['salute','敬礼 / Salute'],
      ],
      '頭・視線 / Head & Gaze': [
        ['head-tilt-left','小首かしげ（左）/ Head Tilt Left'],
        ['head-tilt-right','小首かしげ（右）/ Head Tilt Right'],
        ['look-up','上目づかい / Look Up'],
        ['look-down','伏し目 / Look Down'],
        ['look-over-shoulder','振り返り視線 / Over-shoulder Look'],
      ],
      '動き / Motion': [
        ['walk-forward','歩く / Walk Forward'],
        ['run-forward','走る / Run Forward'],
        ['jump-midair','ジャンプ（空中）/ Jump Midair'],
        ['twirl-turn','くるりと回転 / Twirl Turn'],
      ],
      '寝転び / Lying': [
        ['lie-on-side','横たわる（横向き）/ Lie on Side'],
        ['lie-prone','うつ伏せ / Prone Lying'],
        ['lie-supine','仰向け / Supine Lying'],
      ],
    };
    Object.entries(C).forEach(([cat, items])=>items.forEach(([id,lab])=>put(cat,id,lab)));
  })();

  // ===== part14 =====  (General Poses)  // src: pose_part14.js
  [
    ['General Poses','stretch-arms-up','両腕を伸ばす / Stretch Arms Up'],
    ['General Poses','stretch-side','横に伸び / Side Stretch'],
    ['General Poses','yawn-pose','あくびポーズ / Yawn Pose'],
    ['General Poses','hands-clasped-front','両手を前で組む / Hands Clasped Front'],
    ['General Poses','cover-mouth','口を押さえる / Cover Mouth'],
    ['General Poses','point-up','上を指差す / Point Up'],
    ['General Poses','lean-forward','前かがみ / Lean Forward'],
    ['General Poses','lean-back','のけぞる / Lean Back'],
    ['General Poses','hand-on-forehead','おでこに手 / Hand on Forehead'],
    ['General Poses','arms-spread','両腕を広げる / Arms Spread'],
    ['General Poses','tilt-head-curious','首かしげ・興味 / Head Tilt (Curious)'],
    ['General Poses','wave-hand','手を振る / Wave Hand'],
  ].forEach(x=>put(...x));

  // ===== part15 =====  (General Poses / Dynamic & Dance etc.)  // src: pose_part15.js
  [
    ['General Poses','jump-midair','ジャンプ中 / Jump (Midair)'],
    ['General Poses','kick-high','ハイキック / High Kick'],
    ['General Poses','run-forward','走る / Run Forward'],
    ['General Poses','walk-casual','歩く（カジュアル） / Casual Walk'],
    ['General Poses','walk-stride','大股で歩く / Stride Walk'],
    ['General Poses','tiptoe','つま先立ち / Tiptoe'],
    ['General Poses','spin-turn','くるりと回る / Spin Turn'],
    ['General Poses','dance-pose1','ダンス・ポーズ1 / Dance Pose 1'],
    ['General Poses','dance-pose2','ダンス・ポーズ2 / Dance Pose 2'],
    ['General Poses','dance-pose3','ダンス・ポーズ3 / Dance Pose 3'],
    ['General Poses','pose-victory','勝利ポーズ / Victory Pose'],
    ['General Poses','pose-salute','敬礼ポーズ / Salute'],
    ['General Poses','pose-bow','お辞儀 / Bow'],
    ['General Poses','pose-curtsy','カーテシー / Curtsy'],
  ].forEach(x=>put(...x));

  // ===== part16 =====  (Sit/Lie/Yoga etc.)  // src: pose_part16.js
  [
    ['General Poses','pose-sit-relaxed','座る・リラックス / Sit Relaxed'],
    ['General Poses','pose-sit-crosslegs','座る・あぐら / Sit Cross-legged'],
    ['General Poses','pose-sit-knees-up','座る・膝を立てる / Sit Knees Up'],
    ['General Poses','pose-sit-sideways','座る・横向き / Sit Sideways'],
    ['General Poses','pose-lie-back','仰向けに寝る / Lie on Back'],
    ['General Poses','pose-lie-stomach','うつ伏せに寝る / Lie on Stomach'],
    ['General Poses','pose-lie-side','横になって寝る / Lie on Side'],
    ['General Poses','pose-roll-over','寝返り / Roll Over'],
    ['General Poses','pose-crawl','這う / Crawl'],
    ['General Poses','pose-stretch-floor','床で伸びる / Floor Stretch'],
    ['General Poses','pose-yoga-lotus','ヨガ・蓮華座 / Yoga Lotus'],
    ['General Poses','pose-yoga-dog','ヨガ・ダウンドッグ / Yoga Down Dog'],
    ['General Poses','pose-yoga-tree','ヨガ・木のポーズ / Yoga Tree'],
    ['General Poses','pose-yoga-warrior','ヨガ・戦士のポーズ / Yoga Warrior'],
  ].forEach(x=>put(...x));

  // ===== part17 =====  (Gesture & Hands)  // src: pose_part17.js
  [
    ['Gesture & Hands / 身振り・手','hand-peace','ピースサイン / Peace Sign'],
    ['Gesture & Hands / 身振り・手','hand-finger-heart','指ハート / Finger Heart'],
    ['Gesture & Hands / 身振り・手','hand-phone','電話ジェスチャー / Phone Gesture'],
    ['Gesture & Hands / 身振り・手','hand-shh','シーッ / Shh (Finger on Lips)'],
    ['Gesture & Hands / 身振り・手','hand-point-forward','前方を指さす / Point Forward'],
    ['Gesture & Hands / 身振り・手','hand-point-up','上を指さす / Point Up'],
    ['Gesture & Hands / 身振り・手','hand-point-down','下を指さす / Point Down'],
    ['Gesture & Hands / 身振り・手','hand-wave-hello','手を振る（挨拶） / Wave Hello'],
    ['Gesture & Hands / 身振り・手','hand-face-frame','顔フレーミング / Face Framing Hands'],
    ['Gesture & Hands / 身振り・手','hand-chin-rest','あごに手を添える / Chin Rest'],
    ['Gesture & Hands / 身振り・手','hands-together-pray','手を合わせる / Hands Together (Pray)'],
    ['Gesture & Hands / 身振り・手','hands-open-offer','手のひらを差し出す / Open Offer Hands'],
    ['Gesture & Hands / 身振り・手','hands-pocket','ポケットに手 / Hands in Pockets'],
    ['Gesture & Hands / 身振り・手','arms-overhead-heart','頭上でハート / Overhead Arm Heart'],
  ].forEach(x=>put(...x));

  // ===== part18 =====  (Interaction & Props)  // src: pose_part18.js
  [
    ['Interaction & Props / インタラクション・小物','hold-book','本を持つ / Hold Book'],
    ['Interaction & Props / インタラクション・小物','hold-cup','カップを持つ / Hold Cup'],
    ['Interaction & Props / インタラクション・小物','hold-umbrella','傘を持つ / Hold Umbrella'],
    ['Interaction & Props / インタラクション・小物','hold-bag-strap','バッグのストラップを持つ / Hold Bag Strap'],
    ['Interaction & Props / インタラクション・小物','adjust-glasses','眼鏡を直す / Adjust Glasses'],
    ['Interaction & Props / インタラクション・小物','fix-hair','髪を整える / Fix Hair'],
    ['Interaction & Props / インタラクション・小物','tie-ribbon','リボンを結ぶ / Tie Ribbon'],
    ['Interaction & Props / インタラクション・小物','look-at-watch','腕時計を見る / Look at Watch'],
    ['Interaction & Props / インタラクション・小物','check-phone','スマホを見る / Check Phone'],
    ['Interaction & Props / インタラクション・小物','photosnap-selfie','自撮り / Selfie Snapshot'],
    ['Interaction & Props / インタラクション・小物','lean-on-wall','壁にもたれる / Lean on Wall'],
    ['Interaction & Props / インタラクション・小物','sit-on-stairs','階段に座る / Sit on Stairs'],
    ['Interaction & Props / インタラクション・小物','sit-on-ledge','縁に腰掛ける / Sit on Ledge'],
    ['Interaction & Props / インタラクション・小物','kneel-present-gift','ひざまずき贈り物 / Kneel & Present Gift'],
  ].forEach(x=>put(...x));

  // ===== part19 =====  (Seated & Relax)  // src: pose_part19.js
  [
    ['Seated & Relax / 座り・リラックス','sit-crossed-legs','脚を組んで座る / Sit Crossed Legs'],
    ['Seated & Relax / 座り・リラックス','sit-straight','姿勢よく座る / Sit Upright'],
    ['Seated & Relax / 座り・リラックス','sit-relaxed','リラックスして座る / Sit Relaxed'],
    ['Seated & Relax / 座り・リラックス','sit-on-floor-sideways','床に横座り / Sit on Floor Sideways'],
    ['Seated & Relax / 座り・リラックス','sit-on-floor-straight','床に正座 / Sit on Floor Straight'],
    ['Seated & Relax / 座り・リラックス','sit-on-chair-tilt','椅子で斜めに座る / Sit Tilted on Chair'],
    ['Seated & Relax / 座り・リラックス','sit-lean-back','椅子にもたれかかる / Sit Lean Back'],
    ['Seated & Relax / 座り・リラックス','sit-one-leg-up','片脚を上げて座る / Sit One Leg Up'],
    ['Seated & Relax / 座り・リラックス','sit-hug-knees','膝を抱えて座る / Sit Hugging Knees'],
    ['Seated & Relax / 座り・リラックス','sit-on-bed','ベッドに座る / Sit on Bed'],
    ['Seated & Relax / 座り・リラックス','lay-on-back','仰向けに寝る / Lay on Back'],
    ['Seated & Relax / 座り・リラックス','lay-on-stomach','うつ伏せに寝る / Lay on Stomach'],
    ['Seated & Relax / 座り・リラックス','lay-on-side','横向きに寝る / Lay on Side'],
    ['Seated & Relax / 座り・リラックス','stretch-on-bed','ベッドで伸びをする / Stretch on Bed'],
  ].forEach(x=>put(...x));

  // ===== part20 =====  (Dynamic & Action)  // src: pose_part20.js
  [
    ['Dynamic & Action / 動作・アクション','jump-up','ジャンプ / Jump Up'],
    ['Dynamic & Action / 動作・アクション','skip-step','スキップ / Skip Step'],
    ['Dynamic & Action / 動作・アクション','dance-twirl','ダンス回転 / Dance Twirl'],
    ['Dynamic & Action / 動作・アクション','dance-hip-hop','ヒップホップダンス / Hip-hop Dance'],
    ['Dynamic & Action / 動作・アクション','spin-around','回転する / Spin Around'],
    ['Dynamic & Action / 動作・アクション','run-forward','前に走る / Run Forward'],
    ['Dynamic & Action / 動作・アクション','run-side','横に走る / Run Sideways'],
    ['Dynamic & Action / 動作・アクション','martial-kick','格闘キック / Martial Kick'],
    ['Dynamic & Action / 動作・アクション','martial-pose-guard','構えのポーズ / Martial Guard Stance'],
    ['Dynamic & Action / 動作・アクション','cheer-pose','チアポーズ / Cheer Pose'],
    ['Dynamic & Action / 動作・アクション','salute','敬礼 / Salute'],
    ['Dynamic & Action / 動作・アクション','bow-formal','お辞儀 / Formal Bow'],
    ['Dynamic & Action / 動作・アクション','pose-heroic','ヒーローポーズ / Heroic Pose'],
    ['Dynamic & Action / 動作・アクション','pose-victory','勝利ポーズ / Victory Pose'],
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
      w.__registerPosePart('pose', 2, data);   // faith互換3引数（推奨）
    } else if (typeof w.__registerPosePart === 'function') {
      w.__registerPosePart(2, data);           // 従来2引数
    } else if (typeof w.__registerPromptPart === 'function' && w.__registerPromptPart.length >= 3) {
      w.__registerPromptPart('pose', 2, data); // 誤呼び出し吸収
    } else {
      // 最終フォールバック
      w.__parts = w.__parts || { pose:{} };
      w.__parts.pose = w.__parts.pose || {};
      w.__parts.pose[2] = data;
    }
  }catch(e){
    console.error('[pose_part2 merged 11..20 v2.0] register error:', e);
  }
})(window);