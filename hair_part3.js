/* hair_part3.js — merged static hair 21..30 (v3.0)
   - 内容: hair_part21..30 の categories/items & presets を忠実マージ（ID重複を排除、髪色IDの hair- 接頭辞を安全維持）
   - Registers: window.__registerHairPart('hair', 3, { categories:[...], presets:[...] })
   - 備考: 元データが __registerPromptPart を使っていても“中身だけ”取り込み、登録口は __registerHairPart に統一
*/
(function (w) {
  "use strict";

  const byName = new Map();      // name -> Map<id, {id,label}>
  const presetsMap = new Map();  // id -> {id,label,tags[]}
  const seen = new Set();        // item id
  const seenPreset = new Set();  // preset id

  // 髪色の基本6色だけは hair- 接頭辞互換（※今回の 21..30 では登場しないが安全のため）
  function normalizeId(id){
    let x = String(id||'').trim();
    if (/^(black|brown|blonde|red|silver|white)$/i.test(x)) x = `hair-${x.toLowerCase()}`;
    return x;
  }
  function put(cat, id, label){
    if (!cat || !id) return;
    const nid = normalizeId(id);
    if (seen.has(nid)) return;
    seen.add(nid);
    if (!byName.has(cat)) byName.set(cat, new Map());
    const m = byName.get(cat);
    if (!m.has(nid)) m.set(nid, { id:nid, label: label || nid });
  }
  function addPreset(id,label,tags){
    if (!id) return;
    const pid = String(id).trim();
    if (seenPreset.has(pid)) return;
    seenPreset.add(pid);
    const normTags = (Array.isArray(tags)?tags:[]).map(normalizeId);
    presetsMap.set(pid, { id:pid, label: label||pid, tags: Array.from(new Set(normTags)) });
  }

  /* ===== hair_part21 — 三つ編み系 ===== */ /* src: hair_part21.js */
  (function(){
    const cat='三つ編み系';
    put(cat,'braid','三つ編み');
    put(cat,'twin-braid','ツイン三つ編み');
    addPreset('braid','三つ編み',['hair','braid']);
    addPreset('twin-braid','ツイン三つ編み',['hair','braid']);
  })(); /*  */

  /* ===== hair_part22 — 前髪バリエーション ===== */
  (function(){
    const cat='前髪バリエーション';
    put(cat,'bangs-straight','ぱっつん前髪');
    put(cat,'bangs-side','流し前髪');
    addPreset('bangs-straight','ぱっつん前髪',['hair','bangs']);
    addPreset('bangs-side','流し前髪',['hair','bangs']);
  })(); /*  */

  /* ===== hair_part23 — アップスタイル ===== */
  (function(){
    const cat='アップスタイル';
    put(cat,'high-ponytail','ハイポニーテール');
    put(cat,'twin-tail','ツインテール');
    addPreset('high-ponytail','ハイポニーテール',['hair','tied']);
    addPreset('twin-tail','ツインテール',['hair','tied']);
  })(); /*  */

  /* ===== hair_part24 — パーマ系 ===== */
  (function(){
    const cat='パーマ系';
    put(cat,'loose-perm','ゆるふわパーマ');
    put(cat,'spiral-perm','スパイラルパーマ');
    addPreset('loose-perm','ゆるふわパーマ',['hair','perm']);
    addPreset('spiral-perm','スパイラルパーマ',['hair','perm']);
  })(); /*  */

  /* ===== hair_part25 — クラシカル ===== */
  (function(){
    const cat='クラシカル';
    put(cat,'hime-cut','姫カット');
    put(cat,'retro-wave','レトロウェーブ');
    addPreset('hime-cut','姫カット',['hair','classic']);
    addPreset('retro-wave','レトロウェーブ',['hair','classic']);
  })(); /*  */

  /* ===== hair_part26 — お団子／まとめ髪 ===== */
  (function(){
    const cat='お団子／まとめ髪';
    put(cat,'bun','シンプルお団子');
    put(cat,'double-bun','ダブルお団子');
    addPreset('bun','シンプルお団子',['hair','updo','bun']);
    addPreset('double-bun','ダブルお団子',['hair','updo','bun']);
  })(); /*  */

  /* ===== hair_part27 — ブレイズ／編み込み発展 ===== */
  (function(){
    const cat='ブレイズ／編み込み発展';
    put(cat,'fishtail-braid','フィッシュテール編み');
    put(cat,'crown-braid','クラウンブレイド（頭周り）');
    addPreset('fishtail-braid','フィッシュテール編み',['hair','braid']);
    addPreset('crown-braid','クラウンブレイド',['hair','braid']);
  })(); /*  */

  /* ===== hair_part28 — アンダーカット／個性派 ===== */
  (function(){
    const cat='アンダーカット／個性派';
    put(cat,'undercut','アンダーカット');
    put(cat,'side-shave','サイドシェーブ');
    addPreset('undercut','アンダーカット',['hair','short','edgy']);
    addPreset('side-shave','サイドシェーブ',['hair','short','edgy']);
  })(); /*  */

  /* ===== hair_part29 — 濡れ髪／質感系 ===== */
  (function(){
    const cat='濡れ髪／質感系';
    put(cat,'wet-look','ウェットルック');
    put(cat,'volume-wave','ボリュームウェーブ');
    addPreset('wet-look','ウェットルック',['hair','texture','wet']);
    addPreset('volume-wave','ボリュームウェーブ',['hair','wave']);
  })(); /*  */

  /* ===== hair_part30 — アクセサリー付き ===== */
  (function(){
    const cat='アクセサリー付き';
    put(cat,'ribbon-hair','リボンアレンジ');
    put(cat,'hairband','ヘアバンド');
    addPreset('ribbon-hair','リボンアレンジ',['hair','accessory']);
    addPreset('hairband','ヘアバンド',['hair','accessory']);
  })(); /*  */

  // ===== 生成 =====
  const categories = Array.from(byName, ([name, map]) => ({
    name, items: Array.from(map.values())
  }));
  const presets = Array.from(presetsMap.values());
  const data = { categories, presets };

  // ===== 登録（3形態対応）=====
  try{
    if (typeof w.__registerHairPart === 'function' && w.__registerHairPart.length >= 3) {
      w.__registerHairPart('hair', 3, data);   // faith互換3引数（推奨）
    } else if (typeof w.__registerHairPart === 'function') {
      w.__registerHairPart(3, data);           // 従来2引数
    } else if (typeof w.__registerPromptPart === 'function' && w.__registerPromptPart.length >= 3) {
      // 誤呼び出し吸収（保険）
      w.__registerPromptPart('hair', 3, data);
    } else {
      // 最終フォールバック
      w.__parts = w.__parts || { hair:{} };
      w.__parts.hair = w.__parts.hair || {};
      w.__parts.hair[3] = data;
    }
  }catch(e){
    console.error('[hair_part3 merged 21..30 v3.0] register error:', e);
  }
})(window);