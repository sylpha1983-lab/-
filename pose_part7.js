/* pose_part7.js — merged static poses 61..64 + extra poses (v7.0)
   - 内容: pose_part61..64 の categories/items & presets を忠実マージ（ID重複は排除）
   - 追加: 汎用で不足していた「感情ポーズ」「ユニークジェスチャー」を Extras に追加
   - Registers: window.__registerPosePart('pose', 7, { categories:[...], presets:[...] })
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
    if (seen.has(p.id)) return;
    seen.add(p.id);
    presetsList.push(p);
  }

  // === part61: 学校・研究・アトリエ === 
  [
    ['Locations / 場所','loc-classroom-sunlight','教室（午後の陽光） / classroom with sunlight'],
    ['Locations / 場所','loc-classroom-night','夜の教室 / classroom at night'],
    ['Locations / 場所','loc-laboratory-school','学校の理科室 / school laboratory'],
    ['Locations / 場所','loc-lecture-hall','大学講義室 / university lecture hall'],
    ['Locations / 場所','loc-campus-library','キャンパス図書館 / campus library'],
    ['Locations / 場所','loc-campus-courtyard','キャンパス中庭 / campus courtyard'],
    ['Locations / 場所','loc-physics-lab','物理実験室 / physics laboratory'],
    ['Locations / 場所','loc-chemistry-lab','化学実験室 / chemistry laboratory'],
    ['Locations / 場所','loc-robotics-lab','ロボティクスラボ / robotics lab'],
    ['Locations / 場所','loc-research-office','研究員オフィス / researcher office'],
    ['Locations / 場所','loc-academic-conference','学会会場 / academic conference poster session'],
    ['Locations / 場所','loc-art-studio','美術アトリエ / art studio'],
    ['Locations / 場所','loc-sculpture-workshop','彫刻工房 / sculpture workshop'],
    ['Locations / 場所','loc-ceramics-studio','陶芸工房 / ceramics studio'],
    ['Locations / 場所','loc-fashion-studio','ファッションアトリエ / fashion design studio'],
    ['Locations / 場所','loc-craft-woodshop','木工工房 / woodworking shop'],
    ['Locations / 場所','loc-metal-forge','金工鍛冶場 / metal forge workshop'],
    ['Locations / 場所','loc-dance-studio','ダンススタジオ / dance rehearsal studio'],
    ['Locations / 場所','loc-theater-rehearsal','劇場稽古場 / theater rehearsal hall'],
    ['Locations / 場所','loc-music-practice-room','音楽練習室 / music practice room'],
    ['Locations / 場所','loc-orchestra-hall','オーケストラホール / orchestra rehearsal hall'],
    ['Locations / 場所','loc-band-garage','バンドのガレージ / band garage rehearsal'],
  ].forEach(x=>put(...x));
  [
    { id:"loc-school-pack",label:"場所：学校・教室 / School & Classroom",tags:["loc-classroom-sunlight","loc-classroom-night","loc-laboratory-school"]},
    { id:"loc-campus-pack",label:"場所：大学・キャンパス / University Campus",tags:["loc-lecture-hall","loc-campus-library","loc-campus-courtyard"]},
    { id:"loc-research-pack",label:"場所：研究棟・ラボ / Research Labs",tags:["loc-physics-lab","loc-chemistry-lab","loc-robotics-lab"]},
    { id:"loc-artwork-pack",label:"場所：アトリエ・工房 / Atelier & Workshop",tags:["loc-art-studio","loc-craft-woodshop","loc-metal-forge"]},
    { id:"loc-rehearsal-pack",label:"場所：リハーサル空間 / Rehearsal Spaces",tags:["loc-dance-studio","loc-theater-rehearsal","loc-music-practice-room"]},
  ].forEach(addPreset);

  // === part62: 自然・アウトドア === 
  [
    ['Locations / 場所','loc-alpine-meadow','高山草原 / alpine meadow'],
    ['Locations / 場所','loc-mountain-ridge','稜線 / mountain ridge'],
    ['Locations / 場所','loc-summit-cross','山頂標 / summit marker'],
    ['Locations / 場所','loc-glacier-tongue','氷河の舌 / glacier tongue'],
    ['Locations / 場所','loc-volcano-rim','火口縁 / volcano rim'],
    ['Locations / 場所','loc-rainforest-trail','熱帯雨林の小径 / rainforest trail'],
    ['Locations / 場所','loc-waterfall-base','滝つぼ前 / waterfall base'],
    ['Locations / 場所','loc-desert-dunes','砂丘 / desert dunes'],
    ['Locations / 場所','loc-oasis-palm','オアシス / oasis with palms'],
    ['Locations / 場所','loc-snowfield-aurora','雪原とオーロラ / aurora snowfield'],
    ['Locations / 場所','loc-ice-cave-blue','氷の洞窟（青） / blue ice cave'],
    ['Locations / 場所','loc-coastal-cliffs','海岸の断崖 / coastal cliffs'],
    ['Locations / 場所','loc-sea-cave','海蝕洞 / sea cave'],
    ['Locations / 場所','loc-sunflower-field','ひまわり畑 / sunflower field'],
    ['Locations / 場所','loc-lavender-field','ラベンダー畑 / lavender field'],
    ['Locations / 場所','loc-limestone-cavern','石灰岩洞窟 / limestone cavern'],
    ['Locations / 場所','loc-natural-arch','天然のアーチ岩 / natural rock arch'],
    ['Locations / 場所','loc-campsite-forest','森林キャンプサイト / forest campsite'],
    ['Locations / 場所','loc-campfire-night','焚き火（星空） / campfire under stars'],
  ].forEach(x=>put(...x));

  // === part63: 住宅・団地・日常 === 
  [
    ['Locations / 場所','loc-apartment-living','リビング / apartment living'],
    ['Locations / 場所','loc-apartment-kitchen','キッチン / apartment kitchen'],
    ['Locations / 場所','loc-balcony-cityview','バルコニー / balcony city view'],
    ['Locations / 場所','loc-danchi-courtyard','団地の中庭 / danchi courtyard'],
    ['Locations / 場所','loc-suburb-crosswalk','住宅街の横断歩道 / suburb crosswalk'],
    ['Locations / 場所','loc-loading-dock','搬入口 / loading dock'],
    ['Locations / 場所','loc-parking-lot-night','駐車場（夜） / parking lot night'],
    ['Locations / 場所','loc-rooftop-fence','屋上フェンス / rooftop fence'],
    ['Locations / 場所','loc-fire-escape','非常階段 / fire escape'],
    ['Locations / 場所','loc-coin-laundry','コインランドリー / coin laundry'],
    ['Locations / 場所','loc-karaoke-foyer','カラオケ受付 / karaoke foyer'],
    ['Locations / 場所','loc-riverside-walk','川沿い遊歩道 / riverside walk'],
    ['Locations / 場所','loc-park-gazebo','公園の東屋 / park gazebo'],
  ].forEach(x=>put(...x));

  // === part64: 公共・行政・金融 === 
  [
    ['Locations / 場所','loc-clinic-reception','クリニック受付 / clinic reception'],
    ['Locations / 場所','loc-school-nurse-room','学校の保健室 / school nurse room'],
    ['Locations / 場所','loc-cityhall-counter','市役所窓口 / city hall counter'],
    ['Locations / 場所','loc-community-center-desk','公民館受付 / community center desk'],
    ['Locations / 場所','loc-post-office-counter','郵便局窓口 / post office counter'],
    ['Locations / 場所','loc-bank-lobby','銀行ロビー / bank lobby'],
    ['Locations / 場所','loc-photo-booth','証明写真機 / ID photo booth'],
    ['Locations / 場所','loc-job-center','就労支援センター / job center'],
    ['Locations / 場所','loc-police-substation','交番 / police substation'],
  ].forEach(x=>put(...x));

  // === Extras: 汎用追加ポーズ ===
  [
    ['Expressive / 感情ポーズ','pose-surprise-flinch','驚き・のけぞり / Surprised Flinch'],
    ['Expressive / 感情ポーズ','pose-shy-turn','恥じらい・顔そらし / Shy Turn Away'],
    ['Expressive / 感情ポーズ','pose-angry-fist','怒り・拳を握る / Angry Clenched Fist'],
    ['Expressive / 感情ポーズ','pose-proud-chest','誇らしげに胸を張る / Proud Chest Out'],
    ['Expressive / 感情ポーズ','pose-sad-curl','悲しみ・体を丸める / Sad Curl Up'],
    ['Unique / ユニークジェスチャー','pose-finger-guns','フィンガーガン / Finger Guns'],
    ['Unique / ユニークジェスチャー','pose-salute-casual','カジュアル敬礼 / Casual Salute'],
    ['Unique / ユニークジェスチャー','pose-shrug','肩をすくめる / Shrug'],
    ['Unique / ユニークジェスチャー','pose-hands-pocket-lookaway','ポケットに手＋目線外し / Hands in Pocket + Look Away'],
    ['Unique / ユニークジェスチャー','pose-stretch-yawn','伸びをしながらあくび / Stretch & Yawn'],
  ].forEach(x=>put(...x));

  const categories = Array.from(byName, ([name, map]) => ({
    name,
    items: Array.from(map.values())
  }));

  const data = { categories, presets: presetsList };

  // === 登録（3形態対応）===
  try {
    if (typeof w.__registerPosePart === 'function' && w.__registerPosePart.length >= 3) {
      w.__registerPosePart('pose', 7, data);   // faith互換3引数（推奨）
    } else if (typeof w.__registerPosePart === 'function') {
      w.__registerPosePart(7, data);           // 従来2引数
    } else if (typeof w.__registerPromptPart === 'function' && w.__registerPromptPart.length >= 3) {
      w.__registerPromptPart('pose', 7, data); // 誤呼び出し吸収
    } else {
      w.__parts = w.__parts || { pose:{} };
      w.__parts.pose = w.__parts.pose || {};
      w.__parts.pose[7] = data;
    }
  } catch(e) {
    console.error('[pose_part7 merged 61..64 + extras v7.0] register error:', e);
  }
})(window);