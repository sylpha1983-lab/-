/* hair_part2.js — merged static hair 11..20 (v2.0)
   - 内容: hair_part11..20 の categories/items & presets を忠実マージ（ID重複を排除）
   - 互換: part16..20 の __registerPromptPart 由来データも取り込み、登録口を __registerHairPart に統一
   - Registers: window.__registerHairPart('hair', 2, { categories:[...], presets:[...] })
*/
(function (w) {
  "use strict";

  const byName = new Map();      // name -> Map<id, {id,label}>
  const presetsMap = new Map();  // id -> preset
  const seen = new Set();        // item id
  const seenPreset = new Set();  // preset id

  // 髪色の基本色だけは hair-接頭辞互換（black/brown/blonde/red/silver/white）
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

  /* ===== hair_part11 ===== */ // 短髪/ミディ/ロング/前髪/編み・まとめ/色アクセント
  // ref: hair_part11.js
  (function(){
    const src = {
      'Short / ショート': [
        ['short-hime-cut','ショート姫カット / short hime cut'],
        ['pixie-micro-fringe','ピクシー・マイクロ前髪 / pixie micro fringe'],
        ['short-wolf-bob','ショートウルフボブ / short wolf bob'],
        ['nape-short-tucked','うなじ見せタック / nape-short tucked'],
        ['baby-bob-straight','ベイビーボブ（ストレート） / baby bob straight'],
      ],
      'Medium / ミディアム': [
        ['midi-layered-shag','ミディ・レイヤーシャグ / midi layered shag'],
        ['midi-lob-inward','ミディ・内巻きロブ / midi inward lob'],
        ['midi-wavy-airy','ミディ・ふわ波 / midi wavy airy'],
        ['midi-half-up-twist','ミディ・ハーフアップねじり / midi half-up twist'],
      ],
      'Long / ロング': [
        ['long-hime-heavy','ロング姫カット（重め） / long hime heavy'],
        ['long-mermaid-wave','人魚ウェーブ / mermaid wave long'],
        ['long-straight-sleek','ロング・超ストレート / long sleek straight'],
        ['long-outer-curl','毛先外ハネ / outward curled tips (long)'],
      ],
      'Bangs / 前髪': [
        ['see-through-bangs','シースルーバング / see-through bangs'],
        ['straight-full-bangs','ぱっつんフルバング / straight full bangs'],
        ['side-swept-bangs','流し前髪 / side-swept bangs'],
      ],
      'Braids & Updos / 編み・まとめ髪': [
        ['mini-braid-sides','サイド極細編み / mini braid sides'],
        ['low-bun-loose','ゆる低めお団子 / loose low bun'],
        ['space-buns-neat','二つ団子・整え / space buns neat'],
      ],
      'Color & Accents / 色・アクセント': [
        ['inner-color-peek','インナーカラー・チラ見せ / inner color peek'],
        ['two-tone-soft-contrast','ツートン・やわコントラスト / two-tone soft contrast'],
        ['face-framing-highlights','顔まわりハイライト / face-framing highlights'],
      ],
    };
    Object.entries(src).forEach(([cat, rows])=>rows.forEach(([id,lab])=>put(cat,id,lab)));
  })(); /*  */

  /* ===== hair_part12 ===== */ // ショート/ミディ/ロング/前髪/編み/色
  (function(){
    const src = {
      'Short / ショート': [
        ['short-curly-bob','ショートカーリーボブ / short curly bob'],
        ['short-undercut-soft','ソフトアンダーカット / short soft undercut'],
        ['short-wet-texture','ウェット質感ショート / short wet texture'],
      ],
      'Medium / ミディアム': [
        ['midi-swing-bob','スウィングボブ / swing bob (midi)'],
        ['midi-slope-lob','前下がりロブ / slope lob (midi)'],
        ['midi-crimp-wave','ミディ・クリンプ波 / midi crimp wave'],
      ],
      'Long / ロング': [
        ['long-water-wave','水面ウェーブ / water wave long'],
        ['long-foxtail-layer','フォックステール層 / foxtail layered long'],
        ['long-sheer-volume','透け感ボリューム / sheer volume long'],
      ],
      'Bangs / 前髪': [
        ['airy-bangs-feather','エアリーバング羽毛 / airy feather bangs'],
        ['bottleneck-bangs','ボトルネックバング / bottleneck bangs'],
      ],
      'Braids & Updos / 編み・まとめ髪': [
        ['rope-braid-pony','ロープ編みポニー / rope braid ponytail'],
        ['fishtail-half','フィッシュテール・ハーフ / fishtail half-up'],
        ['crown-braid-soft','やわ冠編み / soft crown braid'],
      ],
      'Color & Accents / 色・アクセント': [
        ['milk-tea-beige','ミルクティーベージュ / milk tea beige'],
        ['ash-smoky-gray','アッシュスモーキー / ash smoky gray'],
        ['pastel-dip-dye','パステル先染め / pastel dip-dye'],
      ],
    };
    Object.entries(src).forEach(([cat, rows])=>rows.forEach(([id,lab])=>put(cat,id,lab)));
  })(); /*  */

  /* ===== hair_part13 ===== */
  (function(){
    const src = {
      'Short / ショート': [
        ['bixie-cut-textured','ビクシー・テクスチャ / textured bixie cut'],
        ['short-messy-crop','ショート・ラフクロップ / short messy crop'],
        ['short-slicked-back','オールバック・ショート / short slicked back'],
      ],
      'Medium / ミディアム': [
        ['midi-air-bob','エアボブ / air bob (midi)'],
        ['midi-curl-ends','毛先くるん / curled ends (midi)'],
        ['midi-wolf-layer','ミディウルフレイヤー / midi wolf layer'],
      ],
      'Long / ロング': [
        ['long-korean-c-layer','韓国Cカール層 / korean C-layer long'],
        ['long-swan-neck','スワンネックライン / swan neck long'],
        ['long-ribbon-tie','リボンタイ・ロング / ribbon-tie long'],
      ],
      'Bangs / 前髪': [
        ['curtain-bangs-soft','カーテンバング・やわ / soft curtain bangs'],
        ['arched-bangs','アーチ前髪 / arched bangs'],
      ],
      'Braids & Updos / 編み・まとめ髪': [
        ['messy-top-bun','ラフお団子トップ / messy top bun'],
        ['double-dutch-braids','ダッチ二本編み / double dutch braids'],
        ['low-twist-chignon','低めツイストシニヨン / low twist chignon'],
      ],
      'Color & Accents / 色・アクセント': [
        ['rose-brown','ローズブラウン / rose brown'],
        ['chocolate-brown-gloss','ショコラ艶ブラウン / chocolate brown gloss'],
        ['lavender-gray','ラベンダーグレー / lavender gray'],
      ],
    };
    Object.entries(src).forEach(([cat, rows])=>rows.forEach(([id,lab])=>put(cat,id,lab)));
  })(); /*  */

  /* ===== hair_part14 ===== */
  (function(){
    const src = {
      'Short / ショート': [
        ['short-bubble-perm','バブルパーマ短髪 / short bubble perm'],
        ['short-soft-mullet','ソフトマレット / short soft mullet'],
        ['short-rounded-bob','丸みボブ・短め / short rounded bob'],
      ],
      'Medium / ミディアム': [
        ['midi-bounce-wave','弾む波ミディ / midi bounce wave'],
        ['midi-straight-center','ミディ・センターストレート / midi center straight'],
        ['midi-half-up-ribbon','ハーフアップ・リボン / midi half-up ribbon'],
      ],
      'Long / ロング': [
        ['long-kimono-straight','和装ストレート / kimono straight long'],
        ['long-rolled-curl','ロング・大きめロール / long rolled curl'],
        ['long-side-pony','サイドポニー・ロング / long side ponytail'],
      ],
      'Bangs / 前髪': [
        ['micro-bangs-arched','マイクロアーチ前髪 / micro arched bangs'],
        ['wispy-bangs','ウィスピーバング / wispy bangs'],
      ],
      'Braids & Updos / 編み・まとめ髪': [
        ['braid-ponytail-high','編み込みハイポニー / high braided ponytail'],
        ['waterfall-braid','ウォーターフォール編み / waterfall braid'],
        ['elegant-updo-knot','エレガント結い / elegant updo knot'],
      ],
      'Color & Accents / 色・アクセント': [
        ['wine-red-gloss','ワインレッド艶 / wine red gloss'],
        ['sunset-ombre','サンセット・グラデ / sunset ombré'],
        ['gold-foil-accent','金箔アクセント / gold foil accent'],
      ],
    };
    Object.entries(src).forEach(([cat, rows])=>rows.forEach(([id,lab])=>put(cat,id,lab)));
  })(); /*  */

  /* ===== hair_part15 ===== */
  (function(){
    const src = {
      'Short / ショート': [
        ['short-fluffy-wolf','ふわウルフショート / fluffy wolf short'],
        ['short-c-line-bob','Cラインショートボブ / C-line short bob'],
        ['short-hairband-casual','ヘアバンド・ショート / short hairband casual'],
      ],
      'Medium / ミディアム': [
        ['midi-spiral-perm','ミディ・スパイラル / midi spiral perm'],
        ['midi-outer-flip','外ハネミディ / midi outer flip'],
        ['midi-girly-curl','ガーリーカール / girly curl midi'],
      ],
      'Long / ロング': [
        ['long-princess-curl','プリンセスカール / princess curl long'],
        ['long-butterfly-layer','バタフライレイヤー / butterfly layered long'],
        ['long-high-pony-ribbon','ハイポニー・リボン / high pony with ribbon'],
      ],
      'Bangs / 前髪': [
        ['long-bangs-parted','ロング前髪・分け目 / long parted bangs'],
        ['choppy-bangs','チョッピーバング / choppy bangs'],
      ],
      'Braids & Updos / 編み・まとめ髪': [
        ['bubble-braid','バブル三つ編み / bubble braid'],
        ['twintail-ribbon','ツインテ・リボン / ribboned twintails'],
        ['braid-bun-hybrid','編み込み＋お団子 / braid-bun hybrid'],
      ],
      'Color & Accents / 色・アクセント': [
        ['pearl-ash','パールアッシュ / pearl ash'],
        ['cherry-cola','チェリーコーラ / cherry cola'],
        ['holo-streaks','ホロストリーク / holographic streaks'],
      ],
    };
    Object.entries(src).forEach(([cat, rows])=>rows.forEach(([id,lab])=>put(cat,id,lab)));
  })(); /*  */

  /* ===== hair_part16..20（旧 __registerPromptPart 形式） ===== */
  // part16
  (function(){
    const c='ショート系';
    [['short-bob','ショートボブ'],['pixie-cut','ピクシーカット']].forEach(([id,lab])=>put(c,id,lab));
    addPreset('short-bob','ショートボブ',['hair','short']); // 元データ準拠
    addPreset('pixie-cut','ピクシーカット',['hair','short']);
  })(); /*  */
  // part17
  (function(){
    const c='ロング系';
    [['straight-long','ストレートロング'],['curly-long','カールロング']].forEach(([id,lab])=>put(c,id,lab));
    addPreset('straight-long','ストレートロング',['hair','long']);
    addPreset('curly-long','カールロング',['hair','long']);
  })(); /*  */
  // part18
  (function(){
    const c='ミディアム';
    [['medium-wave','ミディアムウェーブ'],['layered-medium','レイヤーミディアム']].forEach(([id,lab])=>put(c,id,lab));
    addPreset('medium-wave','ミディアムウェーブ',['hair','medium']);
    addPreset('layered-medium','レイヤーミディアム',['hair','medium']);
  })(); /*  */
  // part19
  (function(){
    const c='特殊ヘア';
    [['mohawk','モヒカン'],['dreadlocks','ドレッドロックス']].forEach(([id,lab])=>put(c,id,lab));
    addPreset('mohawk','モヒカン',['hair','special']);
    addPreset('dreadlocks','ドレッドロックス',['hair','special']);
  })(); /*  */
  // part20
  (function(){
    const c='結い髪系';
    [['ponytail','ポニーテール'],['bun','シニヨン（お団子）']].forEach(([id,lab])=>put(c,id,lab));
    addPreset('ponytail','ポニーテール',['hair','tied']);
    addPreset('bun','シニヨン（お団子）',['hair','tied']);
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
      w.__registerHairPart('hair', 2, data);   // faith互換3引数（推奨）
    } else if (typeof w.__registerHairPart === 'function') {
      w.__registerHairPart(2, data);           // 従来2引数
    } else if (typeof w.__registerPromptPart === 'function' && w.__registerPromptPart.length >= 3) {
      // 保険（旧口で 'hair' カテゴリに格納できる実装がある場合）
      w.__registerPromptPart('hair', 2, data);
    } else {
      // 最終フォールバック
      w.__parts = w.__parts || { hair:{} };
      w.__parts.hair = w.__parts.hair || {};
      w.__parts.hair[2] = data;
    }
  }catch(e){
    console.error('[hair_part2 merged 11..20 v2.0] register error:', e);
  }
})(window);