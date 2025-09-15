/* pose_part1.js — merged static poses 1..10 (v1.0)
   - 内容: pose_part1..10 の categories/items を忠実マージ（ID重複は排除）
   - Registers: window.__registerPosePart('pose', 1, { categories:[...], presets:[] })
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
    if (seen.has(id)) { // 同一IDは一度だけ採用
      // 既存カテゴリ内にあるならスキップ。別カテゴリへ重複転記もしない（UI側検索で拾えるため）
      return;
    }
    seen.add(id);
    if (!byName.has(cat)) byName.set(cat, new Map());
    const m = byName.get(cat);
    if (!m.has(id)) m.set(id, { id, label: label || id });
  }

  // ===== part1: Standing / Hands & Arms / Upper Body / Head & Gaze =====
  [
    // Standing / 立ち
    ['Standing / 立ち','standing-straight','直立 / standing straight'],
    ['Standing / 立ち','standing-relaxed','気を抜いた直立 / standing relaxed'],
    ['Standing / 立ち','contrapposto-soft','コンポスト・やわ / soft contrapposto'],
    ['Standing / 立ち','lean-weight-shift','重心移動・片足 / weight shift lean'],
    ['Standing / 立ち','crossed-legs-stand','脚を交差・立ち / crossed legs (stand)'],
    // Hands & Arms / 手・腕
    ['Hands & Arms / 手・腕','one-hand-hip','片手腰 / one hand on hip'],
    ['Hands & Arms / 手・腕','both-hands-hip','両手腰 / hands on hips'],
    ['Hands & Arms / 手・腕','arms-crossed-soft','腕組み・やわ / arms crossed (soft)'],
    ['Hands & Arms / 手・腕','hands-behind-back','手を後ろで組む / hands behind back'],
    ['Hands & Arms / 手・腕','hand-wave','手を振る / hand wave'],
    ['Hands & Arms / 手・腕','point-forward','指さし・前 / point forward'],
    // Upper Body / 上半身
    ['Upper Body / 上半身','shoulder-drop-right','右肩を落とす / right shoulder drop'],
    ['Upper Body / 上半身','shoulder-drop-left','左肩を落とす / left shoulder drop'],
    ['Upper Body / 上半身','torso-twist-soft','胴・やわひねり / soft torso twist'],
    ['Upper Body / 上半身','chest-open','胸を開く / chest open'],
    // Head & Gaze / 頭・視線
    ['Head & Gaze / 頭・視線','head-tilt-right','首かしげ・右 / head tilt right'],
    ['Head & Gaze / 頭・視線','head-tilt-left','首かしげ・左 / head tilt left'],
    ['Head & Gaze / 頭・視線','look-back-over-shoulder','肩越し振り向き / look back over shoulder'],
  ].forEach(x=>put(...x));

  // ===== part2: Sitting / Kneel & Crouch / Hands & Props / Gaze & Angle =====
  [
    // Sitting / 座り
    ['Sitting / 座り','sitting-relaxed','座り・リラックス / sitting relaxed'],
    ['Sitting / 座り','sitting-straight','座り・背筋ぴん / sitting straight'],
    ['Sitting / 座り','sitting-legs-crossed','座り・脚を組む / sitting legs crossed'],
    ['Sitting / 座り','sitting-sideways','横座り / sitting sideways'],
    ['Sitting / 座り','sitting-on-ground','地面に座る / sitting on ground'],
    ['Sitting / 座り','knees-up-hug','膝を抱える / hug knees'],
    // Kneel & Crouch / ひざ・しゃがみ
    ['Kneel & Crouch / ひざ・しゃがみ','kneeling-formal','正座 / formal kneel'],
    ['Kneel & Crouch / ひざ・しゃがみ','kneeling-one-knee','片膝立ち / take a knee'],
    ['Kneel & Crouch / ひざ・しゃがみ','crouching-compact','しゃがみ・コンパクト / compact crouch'],
    // Hands & Props / 手・小道具
    ['Hands & Props / 手・小道具','hand-on-chin','頬杖 / hand on chin'],
    ['Hands & Props / 手・小道具','hand-brush-hair','髪を払う / brush hair'],
    ['Hands & Props / 手・小道具','hands-clasp-front','前で手を組む / hands clasped front'],
    // Gaze & Angle / 視線・角度
    ['Gaze & Angle / 視線・角度','gaze-down-soft','伏し目・やわら / soft downward gaze'],
    ['Gaze & Angle / 視線・角度','gaze-up-hope','上目・希望 / upward hopeful gaze'],
  ].forEach(x=>put(...x));

  // ===== part3: Dynamic / Arms in Motion / Balance & Lean =====
  [
    // Dynamic / 動き
    ['Dynamic / 動き','walking-casual','歩く・カジュアル / walking casual'],
    ['Dynamic / 動き','running-light','走る・軽やか / running light'],
    ['Dynamic / 動き','dynamic-leap','跳躍 / dynamic leap'],
    ['Dynamic / 動き','spin-half-turn','半回転スピン / half turn spin'],
    ['Dynamic / 動き','stop-turn-back','急停止・振り返り / stop & turn back'],
    // Arms in Motion / 腕の動き
    ['Arms in Motion / 腕の動き','reach-forward','前へ伸ばす / reach forward'],
    ['Arms in Motion / 腕の動き','reach-up','上に伸ばす / reach up'],
    ['Arms in Motion / 腕の動き','push-away','押しのける / push away'],
    ['Arms in Motion / 腕の動き','pull-close','引き寄せる / pull close'],
    // Balance & Lean / 体重移動
    ['Balance & Lean / 体重移動','forward-lean','前のめり / forward lean'],
    ['Balance & Lean / 体重移動','back-lean','のけぞり / lean back'],
    ['Balance & Lean / 体重移動','side-lean-right','横傾き・右 / side lean right'],
    ['Balance & Lean / 体重移動','side-lean-left','横傾き・左 / side lean left'],
  ].forEach(x=>put(...x));

  // ===== part4: Hands Detail / Shoulder & Back / Camera Relation =====
  [
    // Hands Detail / 手の表情
    ['Hands Detail / 手の表情','hand-open-soft','手のひら・やわ / open hand soft'],
    ['Hands Detail / 手の表情','hand-fist-soft','軽いこぶし / soft fist'],
    ['Hands Detail / 手の表情','hand-pinched','つまむ / pinched fingers'],
    ['Hands Detail / 手の表情','hand-V-peace','ピース / V sign'],
    ['Hands Detail / 手の表情','hand-heart','ハートハンド / hand heart'],
    // Shoulder & Back / 肩・背中
    ['Shoulder & Back / 肩・背中','over-shoulder-glance','肩越しチラ見 / over-shoulder glance'],
    ['Shoulder & Back / 肩・背中','back-turned-soft','背を向ける・やわ / back turned soft'],
    ['Shoulder & Back / 肩・背中','arch-back-soft','背中をそらす・やわ / soft back arch'],
    // Camera Relation / カメラ関係
    ['Camera Relation / カメラ関係','close-up-hand-face','手×顔の近接 / hand near face (close)'],
    ['Camera Relation / カメラ関係','look-into-camera','カメラ目線 / look into camera'],
    ['Camera Relation / カメラ関係','profile-left','横顔・左 / left profile'],
    ['Camera Relation / カメラ関係','profile-right','横顔・右 / right profile'],
  ].forEach(x=>put(...x));

  // ===== part5: Dance Basic / Expressive Dance =====
  [
    // Dance Basic / ダンス基礎
    ['Dance Basic / ダンス基礎','dance-pose-ballet','バレエポーズ / ballet pose'],
    ['Dance Basic / ダンス基礎','dance-arms-up','両手上げダンス / dance arms up'],
    ['Dance Basic / ダンス基礎','dance-spin','スピン・回転 / dance spin'],
    ['Dance Basic / ダンス基礎','dance-step-forward','ステップ前 / dance step forward'],
    ['Dance Basic / ダンス基礎','dance-dynamic','躍動 / dynamic dance'],
    // Expressive Dance / 表現的ダンス
    ['Expressive Dance / 表現的ダンス','dance-leap','舞う跳躍 / dance leap'],
    ['Expressive Dance / 表現的ダンス','dance-arch-back','背をそらすダンス / arch back dance'],
    ['Expressive Dance / 表現的ダンス','dance-hand-flow','手の流れ / flowing hands'],
    ['Expressive Dance / 表現的ダンス','dance-floor','フロアダンス / floor dance'],
  ].forEach(x=>put(...x));

  // ===== part6: Running & Jump / Combat / Ball Games =====
  [
    // Running & Jump / 走・跳
    ['Running & Jump / 走・跳','sprint-start','スタートダッシュ / sprint start'],
    ['Running & Jump / 走・跳','mid-run','疾走中 / mid run'],
    ['Running & Jump / 走・跳','long-jump','跳躍 / long jump'],
    ['Running & Jump / 走・跳','high-kick','ハイキック / high kick'],
    // Combat / 格闘
    ['Combat / 格闘','boxing-guard','ボクシングガード / boxing guard'],
    ['Combat / 格闘','punch-straight','ストレートパンチ / punch straight'],
    ['Combat / 格闘','kick-roundhouse','回し蹴り / roundhouse kick'],
    ['Combat / 格闘','martial-stance','武術構え / martial stance'],
    // Ball Games / 球技
    ['Ball Games / 球技','soccer-kick','サッカーキック / soccer kick'],
    ['Ball Games / 球技','basketball-dribble','ドリブル / basketball dribble'],
    ['Ball Games / 球技','baseball-swing','スイング / baseball swing'],
    ['Ball Games / 球技','tennis-serve','サーブ / tennis serve'],
  ].forEach(x=>put(...x));

  // ===== part7: Lying Down / Relax =====
  [
    // Lying Down / 横になる
    ['Lying Down / 横になる','lying-on-back','仰向け / lying on back'],
    ['Lying Down / 横になる','lying-on-stomach','うつ伏せ / lying on stomach'],
    ['Lying Down / 横になる','lying-side','横向き寝 / lying on side'],
    ['Lying Down / 横になる','lying-head-prop','肘つき横寝 / lying head propped'],
    // Relax / リラックス
    ['Relax / リラックス','recline-sofa','ソファでくつろぐ / recline on sofa'],
    ['Relax / リラックス','recline-ground','地面に寝転ぶ / recline on ground'],
    ['Relax / リラックス','stretch-relax','伸び・リラックス / stretch relax'],
    ['Relax / リラックス','nap-pose','うたた寝 / napping'],
  ].forEach(x=>put(...x));

  // ===== part8: Heroic / Suspense / Romantic =====
  [
    // Heroic / ヒーロー
    ['Heroic / ヒーロー','hero-landing','ヒーロー着地 / hero landing'],
    ['Heroic / ヒーロー','cape-dramatic','マント・ドラマティック / dramatic cape'],
    ['Heroic / ヒーロー','stand-silhouette','シルエット立ち / standing silhouette'],
    // Suspense / サスペンス
    ['Suspense / サスペンス','shadowed-face','影に顔を隠す / shadowed face'],
    ['Suspense / サスペンス','wall-lean','壁にもたれる / lean against wall'],
    ['Suspense / サスペンス','look-back-flee','振り返り逃走 / look back flee'],
    // Romantic / ロマンチック
    ['Romantic / ロマンチック','hand-hold','手をつなぐ / hand hold'],
    ['Romantic / ロマンチック','embrace-soft','抱擁・やわら / soft embrace'],
    ['Romantic / ロマンチック','forehead-touch','額を寄せ合う / forehead touch'],
  ].forEach(x=>put(...x));

  // ===== part9: Street / Latin / Stage =====
  [
    // Street / ストリート
    ['Street / ストリート','dance-hiphop-freeze','ヒップホップ・フリーズ / hip-hop freeze'],
    ['Street / ストリート','dance-locking-point','ロッキング・ポイント / locking point'],
    ['Street / ストリート','dance-popping-hit','ポッピング・ヒット / popping hit'],
    ['Street / ストリート','dance-breaking-cc','ブレイキン・CC / breaking six-step'],
    // Latin / ラテン
    ['Latin / ラテン','dance-salsa-cross','サルサ・クロス / salsa cross'],
    ['Latin / ラテン','dance-tango-frame','タンゴ・フレーム / tango frame'],
    ['Latin / ラテン','dance-rumba-hip','ルンバ・ヒップ / rumba hip'],
    ['Latin / ラテン','dance-cha-cha','チャチャ・ベーシック / cha-cha basic'],
    // Stage / ステージ
    ['Stage / ステージ','dance-jazz-kick','ジャズ・キック / jazz kick'],
    ['Stage / ステージ','dance-tap-pose','タップ・ポーズ / tap pose'],
    ['Stage / ステージ','dance-contemp-arch','コンテ・アーチ / contemporary arch'],
  ].forEach(x=>put(...x));

  // ===== part10: Creative / Culinary / Office =====
  [
    // Creative / クリエイティブ
    ['Creative / クリエイティブ','pose-writing-desk','机で執筆 / writing at desk'],
    ['Creative / クリエイティブ','pose-paint-easel','イーゼルで描く / painting at easel'],
    ['Creative / クリエイティブ','pose-play-guitar','ギター演奏 / playing guitar'],
    ['Creative / クリエイティブ','pose-violin-bow','バイオリン奏 / violin bowing'],
    // Culinary / 料理
    ['Culinary / 料理','pose-cook-panflip','フライパン返し / pan flip'],
    ['Culinary / 料理','pose-chop-veg','野菜を刻む / chopping vegetables'],
    ['Culinary / 料理','pose-plate-dish','盛り付け / plating dish'],
    // Office / オフィス
    ['Office / オフィス','pose-laptop-type','ノートPC入力 / typing laptop'],
    ['Office / オフィス','pose-presentation','プレゼン指差し / pointing presentation'],
    ['Office / オフィス','pose-phone-talk','電話対応 / phone talk'],
  ].forEach(x=>put(...x));

  // ===== categories へ整形 =====
  const categories = Array.from(byName, ([name, map]) => ({
    name,
    items: Array.from(map.values())
  }));
  const data = { categories, presets: [] };

  // ===== 登録（3形態対応）=====
  try{
    if (typeof w.__registerPosePart === 'function' && w.__registerPosePart.length >= 3) {
      w.__registerPosePart('pose', 1, data);   // faith互換3引数（推奨）
    } else if (typeof w.__registerPosePart === 'function') {
      w.__registerPosePart(1, data);           // 従来2引数
    } else if (typeof w.__registerPromptPart === 'function' && w.__registerPromptPart.length >= 3) {
      w.__registerPromptPart('pose', 1, data); // 誤呼び出し吸収
    } else {
      // 最終フォールバック
      w.__parts = w.__parts || { pose:{} };
      w.__parts.pose = w.__parts.pose || {};
      w.__parts.pose[1] = data;
    }
  }catch(e){
    console.error('[pose_part1 merged 1..10 v1.0] register error:', e);
  }
})(window);