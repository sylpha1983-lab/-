/* presets_part4.js — merged static presets 31..40 (v4.0)
   - 参照元: presets_part31.js .. presets_part40.js の presets[] を忠実マージ
   - Registers: window.__registerPresetPart('presets', 4, { categories:[], presets:[...] })
   - [CHANGE] ランタイム収集を廃止し、ロード順・キー形式に依存しない方式へ
*/
(function (w) {
  "use strict";

  // ===== 収集（固定展開） =====
  const P31 = [
    { id:'Heart-SweetSpark',   label:'甘やか・ハートきらめき',
      tags:['heart-eyed-soft','smile-heart-corner','blush-heart','heart-dust-fine','heart-glow-inner','heart-bokeh-soft'] },
    { id:'Confession-Whisper', label:'告白・ささやきハート',
      tags:['gaze-heart-softdown','kissy-heart-mouth','flutter-heart-breath','heart-frame-soft','heartbeat-pulse','cupid-flare'] },
    { id:'Twinkle-HeartTears', label:'きら涙・ハートトゥインクル',
      tags:['sparkle-heart-tear','heart-eyed-bright','blush-heart','heart-lens-prism','heart-confetti','heart-zoom-focus'] },
    { id:'Cute-WinkHeart',     label:'キュートウィンク・ハート',
      tags:['wink-heart','smile-heart-corner','pout-heart-shy','heart-rimlight','heart-petals-fall','heart-bokeh-soft'] },
    { id:'Orbiting-Love',      label:'周回する想い・ハートオービット',
      tags:['gaze-heart-softdown','heart-eyed-soft','heart-trail-orbit','heartbeat-pulse','heart-frame-soft'] },
  ]; // from presets_part31.js

  const P32 = [
    { id:'Moaning-Heart-Field', label:'うめきハート・フィールド / Moaning-Heart-Field',
      tags:['heart-particles','floating-hearts','moaning-heart-symbols','heart-echo','glow-pink'] },
  ]; // from presets_part32.js

  const P33 = [
    { id:'HeartCute-SoftBloom',     label:'ハートキュート・やわブルーム',
      tags:['heart-eyes-soft','blush-heart-cheeks','smile-heart-curved','heart-bloom-soft','sparkle-heart-dust','love-pulse-vignette'] },
    { id:'Romantic-HeartBokeh',     label:'ロマンティック・ハートボケ',
      tags:['gaze-heart-dreamy','wink-heart','kissy-heart-lips','heart-bokeh','love-glow-aura','rim-heart-light'] },
    { id:'Confession-CupidSpark',   label:'告白前・キューピッドスパーク',
      tags:['confession-nervous-heart','tear-joy-heart','pout-heart-shy','cupid-arrow-glint','beam-cupid-soft','heart-frame-soft'] },
    { id:'Heartbeat-PetalFloat',    label:'鼓動×花弁漂い',
      tags:['heart-eyes-sparkle','smile-heart-curved','heart-petals-float','heartbeat-trails','love-glow-aura'] },
    { id:'Festival-HeartConfetti',  label:'祝祭・ハート紙吹雪',
      tags:['wink-heart','blush-heart-cheeks','heart-confetti','heart-bokeh','sparkle-heart-dust'] },
  ]; // from presets_part33.js

  const P34 = [
    { id:'Melancholy-HeartRain',   label:'切ない雨・ハート',
      tags:['downcast-heart-gaze','tremble-heart-lips','tearline-heart','soft-rain-heart','pale-heart-glow','faded-heart-vignette'] },
    { id:'Moonlit-WistfulBloom',   label:'月明かり・物憂げブルーム',
      tags:['wistful-heart-smile','lonely-heart-blush','heart-sigh-eyes','moonlit-heart-bloom','drifting-heart-motes','faded-heart-vignette'] },
    { id:'Cracked-QuietConfess',   label:'ひび割れの静告白',
      tags:['tremble-heart-lips','downcast-heart-gaze','cracked-heart-overlay','pale-heart-glow','drifting-heart-motes'] },
  ]; // from presets_part34.js

  const P35 = [
    { id:'Chrome-Heart-Burst', label:'クローム・ハート・バースト / Chrome-Heart-Burst',
      tags:['metallic-hearts','chrome-gloss','specular-spark'] },
  ]; // from presets_part35.js

  // part36 は2系統に散在 → どちらも採用（IDが異なる）
  const P36 = [
    { id:'Heart-Veil-Aura',       label:'ハートヴェール・オーラ / Heart-Veil-Aura',
      tags:['heart-veil','floating-hearts','glow-rose'] },               // from presets_part36.js (file5)
    { id:'Ribbon-Hearts-Breeze',  label:'リボンハートのそよぎ / Ribbon-Hearts-Breeze',
      tags:['heart-particles','ribbon-hearts','glow-pink'] },            // from presets_part36.js (file6, from part37)
  ];

  const P38 = [
    { id:'Wink-Heart-Halo', label:'ウィンク＆ハート光輪 / Wink-Heart-Halo',
      tags:['wink-heart','blush-soft','halo-hearts','floating-hearts','sparkle-soft'] },
  ]; // from presets_part38.js

  const P39 = [
    { id:'Heart-Bokeh-Dream', label:'ハートボケ・ドリーム / Heart-Bokeh-Dream',
      tags:['heart-bokeh','floating-hearts','glow-rose'] },
  ]; // from presets_part39.js（元コードの登録先ズレは無視して中身のみ反映）

  const P40 = [
    { id:'Romance-SoftGlow',    label:'ロマンス・ソフトグロー',
      tags:['soft-heart-eyes','shy-heart-smile','soft-heart-glow','gentle-heart-bokeh'] },
    { id:'WarmGaze-Petals',     label:'あたたか視線・花弁',
      tags:['warm-gaze-heart','fluttering-blush','heart-petals','background-heart-veil'] },
    { id:'ShySmile-Bokeh',      label:'照れ笑み・ハートボケ',
      tags:['shy-heart-smile','fluttering-blush','gentle-heart-bokeh','soft-heart-glow'] },
  ]; // from presets_part40.js

  // ===== マージ & 重複ID排除 =====
  const uniq = (arr)=>Array.from(new Set(arr));
  const map = new Map();
  function put(list){
    list.forEach(p=>{
      if(!p || !p.id) return;
      if(!map.has(p.id)) map.set(p.id, { id:p.id, label:p.label||p.id, tags:[] });
      const cur = map.get(p.id);
      const tags = Array.isArray(p.tags) ? p.tags.map(t=>String(t).trim()) : [];
      cur.tags = uniq(cur.tags.concat(tags));
    });
  }
  [P31,P32,P33,P34,P35,P36,P38,P39,P40].forEach(put);
  const presets = Array.from(map.values());

  const data = { categories: [], presets };

  // ===== 登録（3形態対応）======
  try{
    if (typeof w.__registerPresetPart === 'function' && w.__registerPresetPart.length >= 3) {
      w.__registerPresetPart('presets', 4, data); // faith互換3引数（推奨）
    } else if (typeof w.__registerPresetPart === 'function') {
      w.__registerPresetPart(4, data);            // 従来2引数
    } else if (typeof w.__registerPromptPart === 'function' && w.__registerPromptPart.length >= 3) {
      w.__registerPromptPart('presets', 4, data); // 誤呼び出し吸収
    } else {
      w.__parts = w.__parts || {}; w.__parts.presets = w.__parts.presets || {};
      w.__parts.presets['presets_part4'] = data;
    }
  }catch(e){
    console.error('[presets_part4 v4.0] register error:', e);
  }
})(window);