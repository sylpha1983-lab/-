/* hair_part1.js — merged static hair 1..10 (v1.0)
   - 内容: hair_part1..10 の categories/items & presets を忠実マージ（ID重複を排除、髪色IDの hair- 接頭辞維持）
   - Registers: window.__registerHairPart('hair', 1, { categories:[...], presets:[...] })
   - [CHANGE] part7..10 の __registerPromptPart 由来データも取り込み、登録口を __registerHairPart に統一
*/
(function (w) {
  "use strict";

  const byName = new Map();      // name -> Map<id, {id,label}>
  const presetsMap = new Map();  // id でユニーク
  const seen = new Set();        // item id 重複排除
  const seenPreset = new Set();  // preset id 重複排除

  function put(cat, id, label){
    if (!cat || !id) return;
    id = String(id).trim();
    // 髪色は hair- 接頭辞を維持（重複付与なし）
    if (/^(black|brown|blonde|red|silver|white)$/i.test(id)) {
      id = `hair-${id.toLowerCase()}`;
    }
    if (seen.has(id)) return;
    seen.add(id);
    if (!byName.has(cat)) byName.set(cat, new Map());
    const m = byName.get(cat);
    if (!m.has(id)) m.set(id, { id, label: label || id });
  }
  function addPreset(id,label,tags){
    if(!id) return;
    id = String(id).trim();
    if(seenPreset.has(id)) return;
    seenPreset.add(id);
    // 髪色タグの正規化（安全に hair- 接頭辞付与・重複付与防止）
    const normTags = (Array.isArray(tags)?tags:[]).map(t=>{
      let x = String(t).trim();
      if (/^(black|brown|blonde|red|silver|white)$/i.test(x)) x = `hair-${x.toLowerCase()}`;
      return x;
    });
    presetsMap.set(id, { id, label: label || id, tags: Array.from(new Set(normTags)) });
  }

  // ===== hair_part1（ショート／基本カラー） =====
  ;(function(){
    const cat1 = 'Hair / ショートスタイル';
    [
      ['short-bob','ショートボブ / short bob'],
      ['pixie','ピクシー / pixie cut'],
      ['buzzcut','坊主 / buzzcut'],
      ['pageboy','おかっぱ / pageboy'],
      ['bob-cut','ボブカット / bob cut'],
      ['undercut','刈り上げ / undercut'],
    ].forEach(([id,label])=>put(cat1,id,label));

    const cat2 = 'Hair / 基本カラー';
    [
      ['hair-black','黒髪 / black hair'],
      ['hair-brown','茶髪 / brown hair'],
      ['hair-blonde','金髪 / blonde hair'],
      ['hair-red','赤髪 / red hair'],
      ['hair-silver','銀髪 / silver hair'],
      ['hair-white','白髪 / white hair'],
    ].forEach(([id,label])=>put(cat2,id,label));
  })();

  // ===== hair_part2（ロング／グラデーション） =====
  ;(function(){
    const cat1='Hair / ロングスタイル';
    [
      ['long-straight','ロングストレート / long straight hair'],
      ['twin-braid','ツイン三つ編み / twin braids'],
      ['long-wavy','ロングウェーブ / long wavy hair'],
      ['curly-hair','巻き髪 / curly hair'],
      ['ponytail-high','高いポニーテール / high ponytail'],
      ['ponytail-low','低いポニーテール / low ponytail'],
    ].forEach(([id,label])=>put(cat1,id,label));

    const cat2='Hair / グラデーション';
    [
      ['ombre-pink','ピンクグラデーション / pink ombre'],
      ['ombre-blue','ブルーグラデーション / blue ombre'],
      ['ombre-green','グリーングラデーション / green ombre'],
      ['two-tone','ツートーン / two-tone hair'],
    ].forEach(([id,label])=>put(cat2,id,label));
  })();

  // ===== hair_part3（アップ／和風） =====
  ;(function(){
    const c1='Hair / アップスタイル';
    [
      ['bun','お団子 / bun'],
      ['twin-bun','ツインお団子 / twin buns'],
      ['side-bun','サイドお団子 / side bun'],
      ['updo','アップスタイル / updo'],
    ].forEach(x=>put(c1, ...x));

    const c2='Hair / 和風';
    [
      ['nihongami','日本髪 / nihongami'],
      ['maegami','前髪ぱっつん / blunt bangs'],
      ['hime-cut','姫カット / hime cut'],
      ['yokogami','横髪長め / sidelocks'],
    ].forEach(x=>put(c2, ...x));
  })();

  // ===== hair_part4（幻想・特殊／装飾） =====
  ;(function(){
    const c1='Hair / 幻想・特殊';
    [
      ['ahoge','アホ毛 / ahoge'],
      ['drill-curl','縦ロール / drill curls'],
      ['spiky-hair','逆立つ髪 / spiky hair'],
      ['floating-hair','浮遊する髪 / floating hair'],
      ['glowing-hair','発光する髪 / glowing hair'],
      ['transparent-hair','透明な髪 / transparent hair'],
    ].forEach(x=>put(c1, ...x));

    const c2='Hair / 装飾';
    [
      ['hairpin','ヘアピン / hairpin'],
      ['ribbon','リボン付き髪 / ribbon hair'],
      ['tiara','ティアラ / tiara'],
      ['flower-hair','花飾り髪 / flower hair'],
    ].forEach(x=>put(c2, ...x));
  })();

  // ===== hair_part5（前髪・顔周り・ハーフアップ） =====
  ;(function(){
    [
      ['Hair / 前髪・バングス', [
        ['blunt-bangs','ぱっつん前髪 / blunt bangs'],
        ['see-through','シースルー前髪 / see-through bangs'],
        ['side-swept','流し前髪 / side-swept bangs'],
        ['center-part','センターパート前髪 / center-part bangs'],
        ['baby-bangs','ベイビーバング / baby bangs'],
      ]],
      ['Hair / 顔周り・もみあげ', [
        ['face-framing','顔まわりレイヤー / face-framing layers'],
        ['sidelocks-long','長い横髪 / long sidelocks'],
        ['sidelocks-short','短い横髪 / short sidelocks'],
        ['temple-hair','こめかみ毛束 / temple hair strands'],
      ]],
      ['Hair / まとめ・ハーフアップ', [
        ['half-up','ハーフアップ / half up'],
        ['half-twin-tail','ハーフツイン / half twin tails'],
        ['claw-clip-up','バンスクリップ留め / claw-clip updo'],
        ['braid-crown','編み込みカチューシャ / braid crown'],
      ]],
    ].forEach(([cat, arr])=>arr.forEach(([id,label])=>put(cat,id,label)));
  })();

  // ===== hair_part6（お団子・夜会巻き） =====
  ;(function(){
    [
      ['Hair / お団子・シニヨン', [
        ['low-bun','ローお団子 / low bun'],
        ['high-bun','ハイお団子 / high bun'],
        ['double-buns','おだんごツイン / double buns'],
        ['messy-bun','ゆるお団子 / messy bun'],
        ['braided-bun','編み込みシニヨン / braided bun'],
      ]],
      ['Hair / まとめ髪・夜会巻き', [
        ['french-twist','夜会巻き / french twist'],
        ['chignon','シニヨン / chignon'],
        ['roll-updo','ロールアップ / roll updo'],
      ]],
    ].forEach(([cat, arr])=>arr.forEach(([id,label])=>put(cat,id,label)));
  })();

  // ===== hair_part7（ロングヘア） ※旧形式→取り込み =====
  ;(function(){
    const cat='Hair / ロングヘア（追加）';
    [
      ['long-straight','ストレートロング'],
      ['long-wavy','ウェーブロング'],
      ['long-curly','カーリーロング'],
    ].forEach(([id,label])=>put(cat,id,label));
    addPreset('long-straight-natural','ナチュラルストレートロング',['long-straight','natural']);
    addPreset('long-wavy-soft','柔らかウェーブロング',['long-wavy','soft']);
  })();

  // ===== hair_part8（ポニテ・ツイン） ※旧形式→取り込み =====
  ;(function(){
    const cat='Hair / ポニテ・ツインテール（追加）';
    [
      ['ponytail','ポニーテール'],
      ['twin-tail','ツインテール'],
      ['side-tail','サイドテール'],
    ].forEach(([id,label])=>put(cat,id,label));
    addPreset('ponytail-high','ハイポニーテール',['ponytail','high']);
    addPreset('twin-tail-cute','キュートツインテール',['twin-tail','cute']);
  })();

  // ===== hair_part9（編み込み） ※旧形式→取り込み =====
  ;(function(){
    const cat='Hair / 編み込み（追加）';
    [
      ['braid','三つ編み'],
      ['french-braid','フレンチブレイド'],
      ['twin-braid','ツインブレイド'],
    ].forEach(([id,label])=>put(cat,id,label));
    addPreset('braid-casual','カジュアル三つ編み',['braid','casual']);
    addPreset('french-braid-elegant','エレガントフレンチブレイド',['french-braid','elegant']);
  })();

  // ===== hair_part10（特殊ヘア） ※旧形式→取り込み =====
  ;(function(){
    const cat='Hair / 特殊（追加）';
    [
      ['drill-hair','縦ロール'],
      ['shaved-side','片側刈り上げ'],
      ['afro','アフロ'],
    ].forEach(([id,label])=>put(cat,id,label));
    addPreset('drill-hair-princess','姫縦ロール',['drill-hair','princess']);
    addPreset('shaved-side-cool','クール片側刈り上げ',['shaved-side','cool']);
  })();

  // ===== 生成 =====
  const categories = Array.from(byName, ([name, map]) => ({
    name,
    items: Array.from(map.values())
  }));
  const presets = Array.from(presetsMap.values());
  const data = { categories, presets };

  // ===== 登録（3形態対応）=====
  try{
    if (typeof w.__registerHairPart === 'function' && w.__registerHairPart.length >= 3) {
      w.__registerHairPart('hair', 1, data);   // faith互換3引数（推奨）
    } else if (typeof w.__registerHairPart === 'function') {
      w.__registerHairPart(1, data);           // 従来2引数
    } else if (typeof w.__registerPromptPart === 'function' && w.__registerPromptPart.length >= 3) {
      // 誤呼び出し吸収（保険）
      w.__registerPromptPart('hair', 1, data);
    } else {
      // 最終フォールバック
      w.__parts = w.__parts || { hair:{} };
      w.__parts.hair = w.__parts.hair || {};
      w.__parts.hair[1] = data;
    }
  }catch(e){
    console.error('[hair_part1 merged 1..10 v1.0] register error:', e);
  }
})(window);