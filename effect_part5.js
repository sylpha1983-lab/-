/* effect_part5.js — merged static effects 42..51 (v5.0)
   - 内容: effect_part42..51 の categories/items を忠実マージ
   - 仕様: グローバルで ID 重複を排除（カテゴリが異なっても同一IDは一度だけ）
   - Registers: window.__registerEffectPart('effect', 5, { categories:[...], presets:[] })
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
    if (seen.has(id)) return;      // ← カテゴリが違っても同一IDはスキップ
    seen.add(id);
    if (!byName.has(cat)) byName.set(cat, new Map());
    const m = byName.get(cat);
    if (!m.has(id)) m.set(id, { id, label: label || id });
  }

  // ===== part42 — Heart: Winged =====  
  [
    ['Effects / エフェクト（Heart: Winged）','winged-hearts','翼のあるハート / winged hearts'],
    ['Effects / エフェクト（Heart: Winged）','airflow-heart-trails','気流ハート軌跡 / airflow heart trails'],
    ['Effects / エフェクト（Heart: Winged）','feather-heart-sparkles','羽根ハートのきらめき / feather heart sparkles'],
    ['Effects / エフェクト（Heart: Winged）','sky-breeze-heart-glow','空そよぎハート光 / sky breeze heart glow'],
  ].forEach(x=>put(...x));

  // ===== part43 — Heart: Botanical (I) =====  
  [
    ['Effects / エフェクト（Heart: Botanical）','vine-heart-frame','蔦ハートフレーム / vine heart frame'],
    ['Effects / エフェクト（Heart: Botanical）','petal-heart-drift','花弁ハートの漂い / petal heart drift'],
    ['Effects / エフェクト（Heart: Botanical）','dew-heart-bokeh','露ハートボケ / dew heart bokeh'],
    ['Effects / エフェクト（Heart: Botanical）','leafy-heart-halo','葉のハートハロー / leafy heart halo'],
  ].forEach(x=>put(...x));

  // ===== part44 — Heart: Cosmic =====  
  [
    ['Effects / エフェクト（Heart: Cosmic）','nebula-heart-bloom','星雲ハートブルーム / nebula heart bloom'],
    ['Effects / エフェクト（Heart: Cosmic）','stardust-heart-trails','星屑ハート軌跡 / stardust heart trails'],
    ['Effects / エフェクト（Heart: Cosmic）','galaxy-heart-halo','銀河ハートハロー / galaxy heart halo'],
    ['Effects / エフェクト（Heart: Cosmic）','aurora-heart-veil','オーロラハートヴェール / aurora heart veil'],
  ].forEach(x=>put(...x));

  // ===== part45 — Heart: Botanical (II, 重複候補) =====  
  [
    ['Effects / エフェクト（Heart: Botanical）','vine-heart-frame','蔦ハートフレーム / vine heart frame'],
    ['Effects / エフェクト（Heart: Botanical）','petal-heart-drift','花弁ハートの漂い / petal heart drift'],
    ['Effects / エフェクト（Heart: Botanical）','dew-heart-bokeh','露ハートボケ / dew heart bokeh'],
    ['Effects / エフェクト（Heart: Botanical）','leafy-heart-halo','葉のハートハロー / leafy heart halo'],
  ].forEach(x=>put(...x)); // seenで重複排除

  // ===== part46 — Heart: Flame/Ember =====  
  [
    ['Effects / エフェクト（Heart: Flame/Ember）','flame-heart-aura','炎心オーラ / flame heart aura'],
    ['Effects / エフェクト（Heart: Flame/Ember）','ember-drift-hearts','燠火の漂い・ハート / ember drift hearts'],
    ['Effects / エフェクト（Heart: Flame/Ember）','cinder-spark-rain','火の粉雨（ハート混じり） / cinder spark rain (hearts)'],
    ['Effects / エフェクト（Heart: Flame/Ember）','scorch-halo-heart','焦熱ハート・ハロー / scorch halo (heart)'],
    ['Effects / エフェクト（Heart: Flame/Ember）','heat-distort-heart','陽炎歪み・ハート / heat distortion hearts'],
  ].forEach(x=>put(...x));

  // ===== part47 — Heart: Nebula =====  
  [
    ['Effects / エフェクト（Heart: Nebula）','nebula-heart-mist','星雲ハート霧 / nebula heart mist'],
    ['Effects / エフェクト（Heart: Nebula）','starlit-heart-dust','星明かりハートダスト / starlit heart dust'],
    // 'aurora-heart-veil' は part44 と重複 → seen がブロック
    ['Effects / エフェクト（Heart: Nebula）','galactic-heart-swirls','銀河スワール・ハート / galactic heart swirls'],
    ['Effects / エフェクト（Heart: Nebula）','deep-space-glow','深宇宙グロウ / deep space glow'],
    ['Effects / エフェクト（Heart: Nebula）','constellation-heart-lines','星座線・ハート連結 / constellation heart lines'],
  ].forEach(x=>put(...x));

  // ===== part48 — Heart: Mechanical/Tech =====  
  [
    ['Effects / エフェクト（Heart: Mechanical/Tech）','hologram-heart-proj','ハート・ホログラム投影 / hologram heart projection'],
    ['Effects / エフェクト（Heart: Mechanical/Tech）','circuitry-heart-glow','回路ハート発光 / circuitry heart glow'],
    ['Effects / エフェクト（Heart: Mechanical/Tech）','neon-heart-grid','ネオン・ハートグリッド / neon heart grid'],
    ['Effects / エフェクト（Heart: Mechanical/Tech）','lidar-heart-pulse','LIDARハートパルス / lidar heart pulse'],
    ['Effects / エフェクト（Heart: Mechanical/Tech）','mech-sparks-heart','機械火花・ハート / mechanical sparks (heart)'],
    ['Effects / エフェクト（Heart: Mechanical/Tech）','steel-petal-hearts','鋼花弁ハート / steel petal hearts'],
  ].forEach(x=>put(...x));

  // ===== part49 — Heart: Crystal/Prism =====  
  [
    ['Effects / エフェクト（Heart: Crystal/Prism）','prism-heart-refraction','プリズム心の屈折 / prism heart refraction'],
    ['Effects / エフェクト（Heart: Crystal/Prism）','crystal-heart-flare','クリスタルハート・フレア / crystal heart flare'],
    ['Effects / エフェクト（Heart: Crystal/Prism）','facet-sparkle-dust','ファセットきら粉 / faceted sparkle dust'],
    ['Effects / エフェクト（Heart: Crystal/Prism）','haze-rainbow-veil','虹靄ヴェール / rainbow haze veil'],
    ['Effects / エフェクト（Heart: Crystal/Prism）','gem-shard-petals','宝石片の花弁 / gem shard petals'],
    ['Effects / エフェクト（Heart: Crystal/Prism）','caustic-light-hearts','コースティク光・ハート / caustic light hearts'],
  ].forEach(x=>put(...x));

  // ===== part50 — Heart: Ink/Calligraphy =====  
  [
    ['Effects / エフェクト（Heart: Ink/Calligraphy）','ink-heart-splash','墨ハート飛沫 / ink heart splash'],
    ['Effects / エフェクト（Heart: Ink/Calligraphy）','brush-heart-stroke','筆ハート一筆描き / brush-drawn heart stroke'],
    ['Effects / エフェクト（Heart: Ink/Calligraphy）','sumi-bleed-halo','墨のにじみハロー / sumi bleed halo'],
    ['Effects / エフェクト（Heart: Ink/Calligraphy）','washi-grain-texture','和紙グレイン質感 / washi grain texture'],
    ['Effects / エフェクト（Heart: Ink/Calligraphy）','seal-red-accent','朱印アクセント / red seal accent'],
    ['Effects / エフェクト（Heart: Ink/Calligraphy）','calligraphy-flow-lines','書流の導線 / calligraphy flow lines'],
  ].forEach(x=>put(...x));

  // ===== part51 — Heart: Neon / City Pop =====  
  [
    ['Effects / エフェクト（Heart: Neon / City Pop）','neon-heart-sign','ネオン看板ハート / neon heart sign'],
    ['Effects / エフェクト（Heart: Neon / City Pop）','city-bokeh-heart','都会ボケ・ハート形 / city bokeh hearts'],
    ['Effects / エフェクト（Heart: Neon / City Pop）','vhs-glow-soft','VHSソフトグロー / soft VHS glow'],
    ['Effects / エフェクト（Heart: Neon / City Pop）','chromatic-neon-trim','色収差ネオントリム / chromatic neon trim'],
    ['Effects / エフェクト（Heart: Neon / City Pop）','pulse-heart-outline','鼓動するハート縁 / pulsing heart outline'],
    ['Effects / エフェクト（Heart: Neon / City Pop）','rain-wet-reflection','雨の路面反射 / wet street reflections'],
    ['Effects / エフェクト（Heart: Neon / City Pop）','synth-grid-horizon','シンセ格子地平 / synth grid horizon'],
    ['Effects / エフェクト（Heart: Neon / City Pop）','jukebox-light-flares','ジュークボックス・フレア / jukebox light flares'],
  ].forEach(x=>put(...x));

  // === categories に整形 ===
  const categories = Array.from(byName, ([name, map]) => ({
    name,
    items: Array.from(map.values())
  }));
  const data = { categories, presets: [] };

  // === 登録（3形態対応）===
  try{
    if (typeof w.__registerEffectPart === 'function' && w.__registerEffectPart.length >= 3) {
      w.__registerEffectPart('effect', 5, data);   // faith互換3引数（推奨）
    } else if (typeof w.__registerEffectPart === 'function') {
      w.__registerEffectPart(5, data);             // 従来2引数
    } else if (typeof w.__registerPromptPart === 'function' && w.__registerPromptPart.length >= 3) {
      w.__registerPromptPart('effect', 5, data);   // 誤呼び出し吸収
    } else {
      // 最終フォールバック
      w.__parts = w.__parts || { effect:{} };
      w.__parts.effect = w.__parts.effect || {};
      w.__parts.effect[5] = data;
    }
  }catch(e){
    console.error('[effect_part5 merged 42..51 v5.0] register error:', e);
  }
})(window);