/* presets_part1.js — merged presets 1..10 (v1.0)
   - Registers: window.__registerPresetPart('presets', 1, { categories:[], presets:[...] })
   - ポリシー: 既存UI/チェッカー不変更。id一意・tags重複排除。
*/
(function(){
  "use strict";

  // ===== 1) ソースから収集したプリセット（id/label/tags） =====
  const S1 = [
    { id:'Jealous-Pout-Sharp', label:'嫉妬シャープむくれ', tags:['jealous','pout','side-eye-sharp','face-gloss','sparkle'] },
    { id:'Sleepy-Cute', label:'眠たげキュート', tags:['sleepy','half-lidded','smile','bloom','vignette','sparkle'] },
    { id:'Noir-Deadpan', label:'ノワール無表情', tags:['deadpan','jitome','vignette','rim-light','impact-lines'] },
    { id:'Tease-Sparkle', label:'挑発スパークル', tags:['side-eye','grin','embarrassed','sparkle','face-gloss'] },
    { id:'Shock-ThickLines', label:'ショック極太線', tags:['surprised','wide-eyed','impact-lines-thick','bloom'] },
    { id:'Crying-Drama', label:'大泣きドラマ', tags:['sad','teary-eyes','rain','under-eye-shadow','vignette'] }
  ];

  const S2 = [
    { id:'Jealous-Pout-Soft', label:'嫉妬むくれ・やわら', tags:['jealous','pout-cute','side-eye-soft','cheek-highlight','sparkle'] },
    { id:'Cool-Icy-SideEye', label:'クール横目・アイシー', tags:['side-eye-icy','smirk-sly','skeptical','rim-light-twin','sparkle-ribbon','vignette'] },
    { id:'Dreamy-HalfLid', label:'とろけ半目・ドリーミー', tags:['half-lidded-sultry','smile-gentle','bashful','bloom-dreamy','vignette-oval','sparkle-bokeh-ring'] },
    { id:'Tease-Glance-Ribbon', label:'挑発上目遣い・リボン', tags:['upward-glance-tease','grin','raised-brow','sparkle-ribbon','face-gloss-micro'] },
    { id:'Awkward-Rain-Drama', label:'気まずい雨ドラマ', tags:['awkward-tight','teary-smile','annoyed','drizzle','under-eye-shadow-soft','screen-tone-fine'] },
    { id:'Shock-Thicker-Radial', label:'ショック極太＋放射', tags:['shocked','wide-eyed','furrowed-brow','impact-lines-thicker','impact-lines-radial','bloom'] },
    { id:'Determined-Noir', label:'決意ノワール', tags:['determined','stare-blank','smirk','vignette-oval','rim-light','film-grain'] },
    { id:'Snow-Sparkle-Cute', label:'雪スパークル・キュート', tags:['smile-gentle','pout-cute','bashful','snow-sparkle','sparkle','cheek-highlight'] },
    { id:'Heavy-Rain-Angst', label:'豪雨・アンスト', tags:['sad','wince','stare-blank','heavy-rain','under-eye-shadow','vignette'] }
  ];

  const S3 = [
    { id:'Velvet-Jealous-Pout', label:'ベルベット嫉妬むくれ', tags:['jealous','pout','side-eye-velvet','face-gloss-ring','sparkle-filament','vignette-feather'] },
    { id:'Innocent-Glance-Sparkle', label:'無垢の上目遣い・きらめき', tags:['upward-glance-innocent','soft-smile','bashful','sparkle-filament','bloom-dreamy-plus'] },
    { id:'Amethyst-Melancholy', label:'アメシストのうつろ', tags:['melancholy','glassy-eyes-amethyst','arched-brow-elegant','film-grain-classic','vignette-feather','rim-light-crown'] },
    { id:'Awkward-Feather-Noir', label:'気まずい・フェザーノワール', tags:['awkward-smile-soft','stare-blank','tense','impact-lines-taper','vignette-feather','soft-ghost-lens'] },
    { id:'Relieved-Snow-Soft', label:'安堵・小雪ソフト', tags:['relieved','closed-smile','calm','light-snow','sparkle-dust-fine','face-gloss-ring'] },
    { id:'Mischief-Ribbon-Lights', label:'いたずら・リボンライト', tags:['mischievous','upward-glance','grin','sparkle-filament','rim-light-crown','impact-lines-flare'] }
  ];

  const S4 = [
    { id:'Starry-Cheerful', label:'星のきらめき朗らか', tags:['cheerful','sparkle-eyes-star','open-smile','halo-light-soft','petals-sakura'] },
    { id:'Determined-Rain', label:'決意の雨', tags:['determined','gritted-teeth','slanted-brow-angry','rain-heavy','motion-lines-drama'] },
    { id:'Daydreaming-Moonlight', label:'夢想の月光', tags:['daydreaming','soft-smile','narrow-eyes-warm','moonlight-filter','leaves-falling','glow-pulse'] },
    { id:'Playful-Ghost', label:'遊び心のゴースト', tags:['mischievous','tongue-peek','arched-brow-playful','ghost-trail','sparkle-dust-fine'] },
    { id:'Shaken-Crack', label:'動揺の亀裂', tags:['shaken','soft-pout','stare-blank','screen-crack','impact-lines-flare'] }
  ];

  const S5 = [
    { id:'Coy-Glance-Burst', label:'小悪魔上目遣い・バースト', tags:['upward-glance-coy','soft-grin','smug','sparkle-burst','face-gloss-plus','vignette-square'] },
    { id:'Wistful-Silver-Tear', label:'物憂げ・銀のうるみと涙', tags:['wistful','glassy-eyes-silver','tear-brim','bloom-soft','dust-soft','vignette'] },
    { id:'Razor-Side-Lines', label:'レイザー横目・極太線', tags:['side-eye-razor','brow-confident-arch','tight-smile','impact-lines-ultra','rim-light-split','film-grain-subtle'] },
    { id:'Startled-Arc-Speed', label:'びくっ・アークスピード', tags:['startled','half-lidded-serious','brow-knit-soft','speed-lines-arc','impact-lines-bold','bloom'] },
    { id:'Hard-Pout-Drama', label:'むくれ強＋・ドラマ', tags:['pout-hard-plus','awkward-freeze','side-eye-gentle','under-eye-trench','screen-tone-dots','vignette-square'] },
    { id:'Yearning-Ring-Bokeh', label:'憧憬・ボケ輪の光', tags:['yearning','half-lidded-lazy','soft-grin','bokeh-ring','sparkle-burst','rim-light'] }
  ];

  const S6 = [
    { id:'Golden-Glassy-Proud', label:'金のうるみ・静かな誇り / Golden Glassy Proud', tags:['glassy-eyes-golden','calm-proud','smile-soft-closed','face-gloss-micro-plus','vignette-feather-oval','sparkle-dense-ring'] },
    { id:'Velvet-Jealous-Plus', label:'ベルベット嫉妬＋ / Velvet Jealous Plus', tags:['side-eye-velvet-plus','pout-soft-mini','brow-raise-doubt','rim-light-crown-plus','soft-dust-haze','bloom-dreamy-pro'] },
    { id:'Bold-Glance-Ring', label:'大胆上目遣い・リング光 / Bold Glance Ring', tags:['upward-glance-bold','grin-tilt','playful','sparkle-filament-ring','rim-light-split-soft','impact-lines-spiral'] },
    { id:'Touched-Teary-Feather', label:'じーん・涙と羽根 / Touched Teary Feather', tags:['touched','teary-tilt','half-lidded-serene','vignette-feather-oval','soft-dust-haze','bokeh-rain'] },
    { id:'Composed-Noir-Pro', label:'平静ノワールPro / Composed Noir Pro', tags:['composed','side-eye-razor-plus','smile-soft-closed','impact-lines-heavy','vignette','face-gloss'] },
    { id:'Flutter-Dreamy', label:'そわそわ・ドリーミー / Flutter Dreamy', tags:['flutter','half-lidded-hazy-plus','smile-wide-open','bloom-dreamy-pro','sparkle-dense-ring','lens-ghost-mild'] }
  ];

  const S7 = [
    { id:'Shy-Upglance-Orbit', label:'はにかみ上目遣い・オービット', tags:['upward-glance-shy','smile-peek-tooth','brow-sad-tilt','flushed','sparkle-orbit','face-gloss-spot','vignette-ellipse-soft'] },
    { id:'Emerald-Serene-Veil', label:'エメラルド安らぎ・ヴェール', tags:['glassy-eyes-emerald','serene','lip-press-soft','bloom-soft-veil','rim-light-aurora','soft-grain-film'] },
    { id:'Razor-Shade-RingLines', label:'レイザー影・リング集中線', tags:['side-eye-razor-shade','half-lidded-frosty','bemused','impact-lines-ring','screen-tone-radial','lens-ghost-orb'] },
    { id:'Twinkle-Tease-Rain', label:'きらり挑発・逆光雨', tags:['side-eye-twinkle','tease','pout-mini-tease','rain-backlight','sparkle-dense-plus','rim-light-aurora'] },
    { id:'Warm-Compose-Noir', label:'温もり・穏やかノワール', tags:['half-lidded-warm','composed-soft','smile-catlike','vignette-ellipse-soft','speed-lines-cross','face-gloss-spot'] },
    { id:'Soft-Teary-Feather', label:'そっと涙・フェザー', tags:['teary-soft','eye-squeeze-smile','longing','bloom-soft-veil','sparkle-dense-plus','under-eye-light-puff'] }
  ];

  const S8 = [
    { id:'Dazzle-Radiant-Sunbeam', label:'輝きのまぶしいサンビーム', tags:['wide-eyes-dazzle','radiant','smile-shy-twist','sunbeam-ray','halo-glow','petal-fall'] },
    { id:'Sneaky-Ember-Gleam', label:'いたずら・火の粉グリーム', tags:['narrow-eyes-sneaky','brow-sharp-intense','smile-shy-twist','ember-glow','motion-arc','backlight-dusk'] },
    { id:'Wistful-Snow-Dream', label:'物思い雪夢', tags:['wistful','lost-in-thought','lip-bite-anxious','snow-shimmer','dream-blur','screen-tone-hatch'] },
    { id:'Overjoyed-Bubbles', label:'大喜びバブル', tags:['overjoyed','smile-shy-twist','brow-arched-elegant','bubble-rise','halo-glow','shock-lines-burst'] },
    { id:'Euphoric-Petals', label:'多幸花びら', tags:['euphoric','glimmer-eyes-soft','mouth-open-gasp','petal-fall','sunbeam-ray','dream-blur'] }
  ];

  const S9 = [ /* part9 は実データなし（テンプレ） */ ];

  const S10 = [
    { id:'Shock-Burst', label:'驚愕・バースト集中線', tags:['wide-eyes-shock','open-gasp','shock-fear','focus-burst','spotlight-circle','color-invert-flash'] },
    { id:'Irritation-Zigzag', label:'苛立ち・ジグザグ緊張線', tags:['rolling-eyes-irrit','brow-low-frown','irritated','zigzag-tension','shadow-intense','screen-shake'] },
    { id:'Calm-Glow', label:'穏やか・ソフトグロウ', tags:['gentle-smile','brow-arched-pride','calm-warmth','glow-soft-pulse','ember-float','heatwave-ripple'] },
    { id:'Tense-Gust', label:'緊張・突風', tags:['clenched-grit','tense','gleam-star','gust-wind','distortion-warp','spark-dust'] },
    { id:'Relaxed-Drift', label:'リラックス・漂い', tags:['relaxed','flutter-eyelids','gentle-smile','glow-soft-pulse','ember-float','screen-shake'] },
    { id:'Bewildered-Invert', label:'当惑・反転フラッシュ', tags:['bewildered','wide-eyes-shock','open-gasp','color-invert-flash','focus-burst','shadow-intense'] }
  ];

  // ===== 2) マージ＆重複排除 =====
  const uniq = (arr)=>Array.from(new Set(arr.filter(Boolean)));
  function mergePresets(groups){
    const map = new Map(); // id -> {id,label,tags[]}
    for(const list of groups) for(const p of list){
      if(!p || !p.id) continue;
      const id = String(p.id).trim();
      if(!map.has(id)) map.set(id, { id, label: String(p.label||id), tags: [] });
      const cur = map.get(id);
      const t = Array.isArray(p.tags) ? p.tags.map(x=>String(x).trim()) : [];
      cur.tags = uniq(cur.tags.concat(t));
    }
    return Array.from(map.values());
  }

  const presets = mergePresets([S1,S2,S3,S4,S5,S6,S7,S8,S9,S10]);
  const data = { categories: [], presets };

  // ===== 3) レジストリ登録（presets の 1番） =====
  try{
    // [CHANGE] __registerPresetPart を優先（3引数 or 2引数）
    if (typeof window.__registerPresetPart === 'function' && window.__registerPresetPart.length >= 3) {
      window.__registerPresetPart('presets', 1, data);
    } else if (typeof window.__registerPresetPart === 'function') {
      window.__registerPresetPart(1, data);
    } else if (typeof window.__registerPromptPart === 'function' && window.__registerPromptPart.length >= 3) {
      // 互換フォールバック（ビルダー側が3引数対応している場合のみ）
      window.__registerPromptPart('presets', 1, data);
    } else if (typeof window.__registerPromptPart === 'function') {
      // 最終フォールバック：古いローダーでも拾えるように名前を付ける
      window.__registerPromptPart('presets_part1', data);
    } else {
      window.REG_BUFFER = window.REG_BUFFER || {};
      window.REG_BUFFER['presets_part1'] = data;
    }
  }catch(e){
    console.error('[presets_part1 merged 1..10] register error:', e);
  }
})();