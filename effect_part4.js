/* effect_part4.js — merged static effects 32..41 (v4.0)
   - 内容: effect_part32..41 の categories/items を忠実マージ（ID重複は排除）
   - Registers: window.__registerEffectPart('effect', 4, { categories:[...], presets:[] })
   - [CHANGE] ランタイム収集を廃止し、ロード順・キー形式に依存しない方式へ
*/
(function (w) {
  "use strict";

  // 収集テーブル（カテゴリ名 → {id,label} Map）
  const byName = new Map();
  const put = (cat, id, label) => {
    if (!cat || !id) return;
    if (!byName.has(cat)) byName.set(cat, new Map());
    const m = byName.get(cat);
    if (!m.has(id)) m.set(id, { id: String(id).trim(), label: label || id });
  };

  // ===== part32 =====  moaning/whisper/echo hearts  
  [
    ['Effects / エフェクト','moaning-heart-symbols','うめきハート記号 / moaning-heart-symbols'],
    ['Effects / エフェクト','whisper-hearts','ささやきハート / whisper-hearts'],
    ['Effects / エフェクト','heart-echo','ハート・エコー / heart-echo'],
  ].forEach(x=>put(...x));

  // ===== part33 =====  heart light/particles/vfx  
  [
    // Light
    ['Light / 光','heart-bloom-soft','ハートブルーム（やわ）/ heart-bloom-soft'],
    ['Light / 光','love-glow-aura','ラブグロー・オーラ / love-glow-aura'],
    ['Light / 光','rim-heart-light','リムライト（ハート）/ rim-heart-light'],
    ['Light / 光','beam-cupid-soft','キューピッド光束（柔）/ beam-cupid-soft'],
    // Particles
    ['Particles / 粒子','heart-petals-float','ハート花弁漂い / heart-petals-float'],
    ['Particles / 粒子','heart-confetti','ハート紙吹雪 / heart-confetti'],
    ['Particles / 粒子','heartbeat-trails','鼓動トレイル / heartbeat-trails'],
    ['Particles / 粒子','sparkle-heart-dust','きら粉・ハート混じり / sparkle-heart-dust'],
    // VFX
    ['VFX / その他','heart-bokeh','ハートボケ / heart-bokeh'],
    ['VFX / その他','heart-frame-soft','ハート縁取り（柔）/ heart-frame-soft'],
    ['VFX / その他','cupid-arrow-glint','キューピッド矢のきらめき / cupid-arrow-glint'],
    ['VFX / その他','love-pulse-vignette','ラブパルス・ビネット / love-pulse-vignette'],
  ].forEach(x=>put(...x));

  // ===== part34 =====  Heart: Melancholy  
  [
    ['Effects / エフェクト（Heart: Melancholy）','pale-heart-glow','淡いハート光 / pale-heart-glow'],
    ['Effects / エフェクト（Heart: Melancholy）','moonlit-heart-bloom','月明かりハートブルーム / moonlit-heart-bloom'],
    ['Effects / エフェクト（Heart: Melancholy）','drifting-heart-motes','漂うハート塵 / drifting-heart-motes'],
    ['Effects / エフェクト（Heart: Melancholy）','soft-rain-heart','小雨×ハート粒 / soft-rain-heart'],
    ['Effects / エフェクト（Heart: Melancholy）','faded-heart-vignette','色褪せハート・ビネット / faded-heart-vignette'],
    ['Effects / エフェクト（Heart: Melancholy）','cracked-heart-overlay','ひび割れハート・オーバレイ / cracked-heart-overlay'],
  ].forEach(x=>put(...x));

  // ===== part35 =====  Metallic Heart  
  [
    ['Effects / エフェクト（Metallic Heart）','metallic-hearts','メタリック・ハート / metallic-hearts'],
    ['Effects / エフェクト（Metallic Heart）','chrome-gloss','クローム・グロス / chrome-gloss'],
    ['Effects / エフェクト（Metallic Heart）','specular-spark','スペキュラ・スパーク / specular-spark'],
  ].forEach(x=>put(...x));

  // ===== part36 =====  heart veil etc.  
  [
    ['Effects / エフェクト','heart-veil','ハートのヴェール / heart-veil'],
    ['Effects / エフェクト','floating-hearts','浮遊ハート / floating-hearts'],
    ['Effects / エフェクト','glow-rose','ローズ発光 / glow-rose'],
  ].forEach(x=>put(...x));

  // ===== part37 =====  particles/ribbon/glow-pink  
  [
    ['Effects / エフェクト','heart-particles','ハート粒子 / heart-particles'],
    ['Effects / エフェクト','ribbon-hearts','ハートリボン / ribbon-hearts'],
    ['Effects / エフェクト','glow-pink','グロー（ピンク）/ glow-pink'],
  ].forEach(x=>put(...x));

  // ===== part38 =====  Hearts group  
  [
    ['Hearts / ハート系','halo-hearts','ハート光輪 / halo-hearts'],
    ['Hearts / ハート系','floating-hearts','浮遊ハート / floating-hearts'], // 重複は自動排除
    ['Hearts / ハート系','sparkle-soft','やわらかスパークル / sparkle-soft'],
  ].forEach(x=>put(...x));

  // ===== part39 =====  エフェクト（登録先ズレを補正し中身のみ採用）  
  [
    ['エフェクト','heart-bokeh','ハート・ボケ / heart-bokeh'],
    ['エフェクト','floating-hearts','浮遊ハート / floating-hearts'], // 重複候補
    ['エフェクト','glow-rose','ローズ発光 / glow-rose'],            // 重複候補
  ].forEach(x=>put(...x));

  // ===== part40 =====  Heart: Romance  
  [
    ['Effects / エフェクト（Heart: Romance）','heart-petals','ハート花弁 / heart-petals'],
    ['Effects / エフェクト（Heart: Romance）','soft-heart-glow','やわらハート光 / soft-heart-glow'],
    ['Effects / エフェクト（Heart: Romance）','gentle-heart-bokeh','やさしいハートボケ / gentle-heart-bokeh'],
    ['Effects / エフェクト（Heart: Romance）','background-heart-veil','背景ハートヴェール / background-heart-veil'],
  ].forEach(x=>put(...x));

  // ===== part41 =====  Heart: Fantasy  
  [
    ['Effects / エフェクト（Heart: Fantasy）','rune-heart-glow','ルーン・ハート発光 / rune-heart-glow'],
    ['Effects / エフェクト（Heart: Fantasy）','fairy-heart-dust','妖精粉×ハート / fairy-heart-dust'],
    ['Effects / エフェクト（Heart: Fantasy）','portal-heart-ring','ポータル・ハートリング / portal-heart-ring'],
    ['Effects / エフェクト（Heart: Fantasy）','spell-heart-sigil','呪文・ハート印章 / spell-heart-sigil'],
  ].forEach(x=>put(...x));

  // ===== categories 配列に変換（ID重複は排除済み） =====
  const categories = Array.from(byName, ([name, map]) => ({
    name,
    items: Array.from(map.values())
  }));

  const data = { categories, presets: [] };

  // ===== 登録（3形態対応）=====
  try{
    if (typeof w.__registerEffectPart === 'function' && w.__registerEffectPart.length >= 3) {
      w.__registerEffectPart('effect', 4, data);   // faith互換3引数（推奨）
    } else if (typeof w.__registerEffectPart === 'function') {
      w.__registerEffectPart(4, data);             // 従来2引数
    } else if (typeof w.__registerPromptPart === 'function' && w.__registerPromptPart.length >= 3) {
      w.__registerPromptPart('effect', 4, data);   // 誤呼び出し吸収
    } else {
      // 最終フォールバック
      w.__parts = w.__parts || { effect:{} };
      w.__parts.effect = w.__parts.effect || {};
      w.__parts.effect[4] = data;
    }
  }catch(e){
    console.error('[effect_part4 merged 32..41 v4.0] register error:', e);
  }
})(window);