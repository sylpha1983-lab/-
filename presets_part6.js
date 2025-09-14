/* presets_part6.js — merged static presets 51..57 (v6.0)
   - 参照元: presets_part51.js .. presets_part57.js の presets[] を忠実マージ
   - Registers: window.__registerPresetPart('presets', 6, { categories:[], presets:[...] })
   - [CHANGE] ランタイム収集を廃止し、ロード順・キー形式に依存しない方式へ
*/
(function (w) {
  "use strict";

  // ===== 固定展開（各 part の presets を転記） =====
  // P51  
  const P51 = [
    { id:'CityPop-Heart-Wink',        label:'シティポップ・ハートウィンク',         tags:['citypop-wink','neon-heart-sign','city-bokeh-heart','vhs-glow-soft'] },
    { id:'Afterglow-Blue-Mood',       label:'アフターグロー・ブルームード',         tags:['afterglow-gaze','chromatic-neon-trim','rain-wet-reflection','city-bokeh-heart'] },
    { id:'Midnight-Melancholy-Beat',  label:'真夜中のメランコリー・鼓動',           tags:['midnight-melancholy','pulse-heart-outline','vhs-glow-soft'] },
    { id:'Club-Heat-Neon-Spark',      label:'クラブヒート・ネオンスパーク',         tags:['club-heat-flush','neon-heart-sign','jukebox-light-flares','rain-wet-reflection'] },
    { id:'Synthwave-Cool-Grid',       label:'シンセウェイブ・クールグリッド',       tags:['synthwave-cool','synth-grid-horizon','chromatic-neon-trim','vhs-glow-soft'] },
    { id:'Neon-Smile-After-Rain',     label:'ネオンスマイル・雨上がり',             tags:['neon-smile-bright','rain-wet-reflection','city-bokeh-heart'] },
    { id:'Heartline-Bokeh-Pulse',     label:'ハートライン・ボケ・パルス',           tags:['afterglow-gaze','pulse-heart-outline','city-bokeh-heart','chromatic-neon-trim'] },
    { id:'Retro-Jukebox-Glow',        label:'レトロジュークボックス・グロウ',       tags:['citypop-wink','jukebox-light-flares','vhs-glow-soft','neon-heart-sign'] },
  ];

  // P52  
  const P52 = [
    { id:'Glitter-Heart-Smile',       label:'グリッターハート・スマイル',           tags:['spark-joy-smile','glitter-heart-trail','soft-bokeh-hearts','micro-spark-particles'] },
    { id:'Confetti-Surprise-Pop',     label:'コンフェッティ・サプライズ',           tags:['confetti-surprise','heart-confetti-burst','party-pop-flare','foil-confetti-shine'] },
    { id:'Twinkle-Stage-Glow',        label:'トゥインクル・ステージグロウ',         tags:['twinkle-eye-soft','stage-spot-glow','soft-bokeh-hearts','micro-spark-particles'] },
    { id:'Festival-Heart-Rush',       label:'フェス・ハートラッシュ',               tags:['festival-cheer','heart-confetti-burst','ribbon-swish','party-pop-flare'] },
    { id:'Bashful-Glitter-Wave',      label:'照れ・グリッターウェーブ',             tags:['heartflush-bashful','glitter-heart-trail','soft-bokeh-hearts'] },
    { id:'Wink-Foil-Shine',           label:'ウィンク・ホイルシャイン',             tags:['glitter-wink','foil-confetti-shine','party-pop-flare'] },
    { id:'Spark-Micro-Heartline',     label:'スパーク・マイクロハートライン',       tags:['twinkle-eye-soft','micro-spark-particles','glitter-heart-trail'] },
    { id:'After-Party-SoftBokeh',     label:'アフターパーティ・ソフトボケ',         tags:['festival-cheer','soft-bokeh-hearts','stage-spot-glow'] },
  ];

  // P53  
  const P53 = [
    { id:'Pastel-Heart-Breeze',       label:'パステルハート・ブリーズ',             tags:['pastel-soft-smile','pastel-heart-float','pastel-gradient-glow','marshmallow-bokeh'] },
    { id:'Candy-Rain-Wink',           label:'キャンディレイン・ウィンク',           tags:['lollipop-wink','candy-heart-rain','sugar-spark-dust','mint-drop-shine'] },
    { id:'Cotton-Haze-Joy',           label:'コットンヘイズ・ジョイ',               tags:['sugar-quiet-joy','cotton-candy-haze','pastel-heart-float','marshmallow-bokeh'] },
    { id:'Sweet-Bashful-Glow',        label:'スウィート照れ・グロウ',               tags:['sweet-bashful-blush','pastel-gradient-glow','gummy-heart-trails'] },
    { id:'Gleam-Eyes-CandyTrail',     label:'きら眼・キャンディ軌跡',               tags:['candy-gleam-eyes','gummy-heart-trails','sugar-spark-dust'] },
    { id:'Pastel-Mint-SoftBokeh',     label:'パステルミント・ソフトボケ',           tags:['pastel-soft-smile','mint-drop-shine','marshmallow-bokeh'] },
    { id:'Lollipop-Sigh-Drizzle',     label:'ロリポップ吐息・ドリズル',             tags:['cotton-happy-sigh','candy-heart-rain','cotton-candy-haze'] },
    { id:'Sugar-Quiet-Float',         label:'シュガー・クワイエットフロート',       tags:['sugar-quiet-joy','pastel-heart-float','pastel-gradient-glow'] },
  ];

  // P54  
  const P54 = [
    { id:'Neon-Spark-Smile',          label:'ネオン・スパークスマイル',             tags:['neon-smirk','neon-heart-outline','glitch-heart-sparks','pulse-heartwave'] },
    { id:'Cyber-Gaze-Grid',           label:'サイバー・ゲイズグリッド',             tags:['cyber-glow-eyes','cyber-heart-grid','laser-heart-trails'] },
    { id:'Holo-Blush-Fragment',       label:'ホログラム紅潮・フラグメント',         tags:['holo-blush','holo-heart-fragments','glitch-heart-sparks'] },
    { id:'Pulse-Intense-Wave',        label:'パルス強視・ハート波',                 tags:['techno-intense-gaze','pulse-heartwave','neon-heart-outline'] },
    { id:'Laser-Smile-Trail',         label:'レーザースマイル・トレイル',           tags:['pulse-smile','laser-heart-trails','cyber-heart-grid'] },
  ];

  // P55  
  const P55 = [
    { id:'Crystal-Tear-Drift',        label:'クリスタル涙・雪華漂い',               tags:['crystal-tear','snowflake-heart-drift','ice-heart-aura','misty-ice-vignette'] },
    { id:'Glacier-Calm-Glow',         label:'氷河の静視・ハート輝き',               tags:['glacier-calm-gaze','glacier-heart-glow','frost-heart-breath'] },
    { id:'Icy-Resolve-Shards',        label:'氷の決意・結晶破片',                   tags:['icy-determined-eyes','crystal-heart-shards','ice-heart-aura'] },
    { id:'Chill-Blush-Mist',          label:'ひんやり紅潮・氷霧',                   tags:['chill-rosy-blush','misty-ice-vignette','snowflake-heart-drift'] },
    { id:'Frost-Smile-Breath',        label:'霜の微笑み・ハート息',                 tags:['frost-soft-smile','frost-heart-breath','glacier-heart-glow'] },
  ];

  // P56  
  const P56 = [
    { id:'Ember-Surge',               label:'熾火の奔流・ハート火花',               tags:['fierce-smirk-ember','ember-heart-sparks','flame-heart-aura','scorching-vignette'] },
    { id:'Warm-Resolve',              label:'温かな決意・溶融の輝き',               tags:['flushed-determined','molten-heart-glow','blazing-heart-trail'] },
    { id:'Blazing-Rush',              label:'灼熱の疾走・ハート軌跡',               tags:['warm-gleam-eyes','blazing-heart-trail','flame-heart-aura'] },
    { id:'Smoldering-Gaze',           label:'燻る視線・煙の帯',                     tags:['fiery-tear','smoke-heart-ribbons','ember-heart-sparks'] },
    { id:'Playful-Spark-Hearts',      label:'戯れ火花・ハートのきらめき',           tags:['playful-heat-wink','ember-heart-sparks','molten-heart-glow'] },
  ];

  // P57  
  const P57 = [
    { id:'neon-circuit-serenade',     label:'ネオン回路セレナーデ / neon circuit serenade', tags:['neon-glow','cyber-heart-circuit'] },
    { id:'glitch-dreamscape',         label:'グリッチ夢景色 / glitch dreamscape',           tags:['glitch-fragment','scanline-overlay'] },
    { id:'pixel-utopia',              label:'ピクセルユートピア / pixel utopia',            tags:['pixel-sort','laser-grid-backdrop'] },
  ];

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
  [P51,P52,P53,P54,P55,P56,P57].forEach(put);
  const presets = Array.from(map.values());

  const data = { categories: [], presets };

  // ===== 登録（3形態対応）======
  try{
    if (typeof w.__registerPresetPart === 'function' && w.__registerPresetPart.length >= 3) {
      w.__registerPresetPart('presets', 6, data); // faith互換3引数（推奨）
    } else if (typeof w.__registerPresetPart === 'function') {
      w.__registerPresetPart(6, data);            // 従来2引数
    } else if (typeof w.__registerPromptPart === 'function' && w.__registerPromptPart.length >= 3) {
      w.__registerPromptPart('presets', 6, data); // 誤呼び出し吸収
    } else {
      w.__parts = w.__parts || {}; w.__parts.presets = w.__parts.presets || {};
      w.__parts.presets['presets_part6'] = data;
    }
  }catch(e){
    console.error('[presets_part6 v6.0] register error:', e);
  }
})(window);