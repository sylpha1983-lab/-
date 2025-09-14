/* presets_part2.js — merged static presets 11..20 (v2.0)
   - 内容を固定展開（part11..20 の presets を忠実マージ）
   - Registers: window.__registerPresetPart('presets', 2, { categories:[], presets:[...] })
   - [CHANGE] ランタイム収集を廃止し、ロード順に依存しない方式へ
*/
(function (w) {
  "use strict";

  const presets = [
    // ===== part11 =====
    { id:'Velvet-SoftFond', label:'ベルベット愛着・やわら',
      tags:['side-eye-warm-velvet','fondness','smile-quiet','brow-angle-gentle','bloom-velvet','cheek-specular-dot','vignette-soft-ellipse'] },
    { id:'Icy-Collected-RimRain', label:'アイシー冷静・リム雨',
      tags:['half-lidded-icy','collected','pressed-lips-calm','rain-rimlight','rim-light-crown-soft','tone-fine-cross'] },
    { id:'Pearl-Teary-Glow', label:'パールの涙・微光',
      tags:['glassy-eyes-pearl','teary-corner','gentle-joy','bokeh-soft-orbs','under-eye-softline','bloom-velvet'] },
    { id:'Resentful-Crisp-Line', label:'うらみ・クリスプ視線',
      tags:['resentful','side-eye-crisp','pout-sulk','brow-stern-flat','impact-lines-softflare','vignette-soft-ellipse','dust-sheer'] },
    { id:'Dreamy-Lightheaded', label:'夢見・ふわっと',
      tags:['half-lidded-dream','lightheaded','smile-curve','sparkle-thread','speed-lines-feather','lens-ghost-softring'] },
    { id:'Brooding-Noir-Soft', label:'沈思ノワール・ソフト',
      tags:['brooding','side-eye-crisp','smile-quiet','vignette-soft-ellipse','rim-light-crown-soft','tone-fine-cross'] },

    // ===== part12 =====
    { id:'Curious-Glimmer', label:'好奇のきらめき',
      tags:['wide-eyed-wonder','arched-curious','soft-open','glimmer','spotlight-circle','sparkle-thread'] },
    { id:'Shy-PetalFall', label:'恥じらいと花びら',
      tags:['side-glance-shy','half-smile','playful','petal-fall','halo-soft','soft-haze'] },
    { id:'Tense-StormFlash', label:'緊張と稲光',
      tags:['tense','grimace','narrow-skeptical','storm-flash','jagged-stress','glitch-frag'] },
    { id:'Vulnerable-SnowSerene', label:'弱さと雪・穏やかさ',
      tags:['vulnerable','downturned-sad','serene','snow-flakes','soft-haze','glow-orbs'] },
    { id:'Determined-Sunbeam', label:'決意とサンビーム',
      tags:['determined','angled-intense','soft-open','sunbeam-rays','glimmer','ink-smudge'] },
    { id:'Fatigued-Ash', label:'疲れと灰',
      tags:['fatigued','lost-in-thought','gaze-down-soft','ash-particles','scribble-lines','halo-soft'] },

    // ===== part13 =====
    { id:"Bittersweet-Teal-Mist", label:"ほろ苦・ティールの薄もや",
      tags:["bittersweet","glassy-eyes-teal","smile-subtle","brow-soft-uplift","thin-mist","edge-light-soft","floating-motes"] },
    { id:"Guilty-Blur-Whisper", label:"ばつの悪さ・涙にじみ・囁き線",
      tags:["sidelook-guilty","teary-blur","lip-parted-soft","speed-lines-whisper","inner-glow","pollen-sheen"] },
    { id:"Curious-EdgeSpark", label:"好奇・エッジスパーク",
      tags:["sidelook-curious","smile-corner-up","fond-smug","soft-spark-drift","edge-light-soft","tone-soft-grid"] },
    { id:"Mellow-Tranquil", label:"まろやか・静謐",
      tags:["half-lidded-mellow","tranquil","smile-subtle","subsurface-warm","impact-lines-silk","bloom-ring-micro"] },
    { id:"Breathless-Dew", label:"息をのむ・朝露",
      tags:["breathless","eyelids-heavy","gentle-tease","dew-humidity","chromatic-soft","inner-glow"] },
    { id:"Pensive-SoftGrid", label:"沈思・ソフト格子",
      tags:["pensive","wistful-soft","pout-tilt","tone-soft-grid","floating-motes","edge-light-soft"] },

    // ===== part14 =====
    { id:'Exuberant-Starlight', label:'快活・星屑きらめき',
      tags:['exuberant','starlit-eyes','smirk-playful','stardust-sparkle','starlight-dust','spiral-focus'] },
    { id:'Sorrow-Moonbeam', label:'悲哀・月光',
      tags:['sorrow-deep','shadowed-eyes','grit-teeth','moonbeam','haze-light','ember-drifts'] },
    { id:'Awe-Fracture', label:'畏怖・割れガラス',
      tags:['awe-struck','wide-glisten','brow-elegant-arch','fractured-glass','burst-lines','neon-glow'] },
    { id:'Bashful-Dream', label:'はにかみ・夢フィルター',
      tags:['bashful-soft','flutter-blink','lighthearted','dream-filter','drizzle-soft','lensflare-thin'] },
    { id:'Haunted-Ember', label:'取り憑かれ・残り火',
      tags:['haunted','anticipation','open-shock','ember-drifts','neon-glow','spiral-focus'] },
    { id:'Wistful-SoftHaze', label:'物思い・霞',
      tags:['wistful-glance','brow-pressed-flat','smile-corner-up','haze-light','moonbeam','starlight-dust'] },

    // ===== part15 =====
    { id:"Hopeful-WarmBloom", label:"希望と暖色ブルーム",
      tags:["bright-hopeful","smile-bright","brow-arched-high","encouraging","bloom-warm","catchlight-star","vignette-soft-ring"] },
    { id:"Guarded-LockOn", label:"用心とロックオン視線",
      tags:["guarded","sharp-lock-on","press-lips-determined","brow-knit-deep","rim-light-edge","impact-lines-needle","tone-microdots"] },
    { id:"Quiet-Sad-Teary", label:"静かな悲しみ・涙の光",
      tags:["quiet-sadness","downcast-soft","teary-glisten","catchlight-tear","under-eye-softcrease","mist-softline"] },
    { id:"Uptempo-Starfall", label:"高揚・スターフォール",
      tags:["uptempo","wink-tease","soft-smirk-shy","sparkle-starfall","speed-lines-sheer","lens-ghost-fine"] },
    { id:"Steady-Noir-Ruby", label:"ぶれない・ノワール紅玉",
      tags:["steady","glassy-eyes-ruby","press-lips-determined","vignette","rim-light-edge","pollen-glow"] },
    { id:"Drained-RainSheen", label:"消耗と雨の膜光",
      tags:["drained","moist-eyes","brow-soft-relief","rain-sheen","snow-softsheet","impact-lines-arcwide"] },

    // ===== part16 =====
    { id:"QuietHope-WindowStripe", label:"静かな希望・窓の縞光",
      tags:["quiet-hope","eye-smile","brow-arched-softplus","shy-smile-closed","window-stripe-light","softbox-light","radial-fine-burst"] },
    { id:"Starstruck-HeartCatch", label:"見惚れ・ハートキャッチ",
      tags:["starstruck","starry-pupils-soft","soft-laugh","catchlight-heart","glitter-fall","backlight-ring"] },
    { id:"Sheepish-Glance-Coil", label:"気まずい照れ・肩越しコイル線",
      tags:["sheepish","glance-over-shoulder","pout-curve-soft","brow-knit-worried","coil-lines","light-leak-soft","film-scratch-fine"] },
    { id:"Content-SnowCrystal", label:"満ち足り・雪結晶",
      tags:["contentment","droopy-eyes-kind","smile-bright","snow-crystal","softbox-light","chromatic-ring-soft"] },
    { id:"Grounded-RainStreaks", label:"地に足・雨筋斜め",
      tags:["grounded","gaze-steady-calm","lip-corner-down-soft","rain-streaks-diag","rim-light-triple","pulse-lines"] },
    { id:"Refreshed-Confetti", label:"すっきり・紙吹雪スパーク",
      tags:["refreshed","eye-smile","brow-relaxed-flat","confetti-spark","glitter-fall","double-exposure-soft"] },
    { id:"SoftFrustration-Downpour", label:"やわ苛立ち・土砂降り",
      tags:["soft-frustration","narrow-suspicious","press-lips-determined","downpour-diagonal","film-scratch-fine","vignette"] },
    { id:"AbsentMinded-MistBeads", label:"うわの空・ミスト粒",
      tags:["absent-minded","squint-sun","shy-smile-closed","mist-beads","light-leak-soft","backlight-ring"] },

    // ===== part17 =====
    { id:'Bashful-DappledLight', label:'照れくさい・木漏れ日',
      tags:['bashful','half-lid-sleepy','smirk-sly','dappled-light','dust-motes','halo-soft'] },
    { id:'Mischievous-SparkleRainbow', label:'いたずら心・虹スパークル',
      tags:['mischievous','wink-playful','tongue-out-tease','sparkle-rainbow','spiral-lines','aura-glow'] },
    { id:'Daydreaming-Bubbles', label:'白昼夢・バブル',
      tags:['daydreaming','gaze-distant','yawn-small','bubble-float','moonlight-glow','prism-shift'] },
    { id:'Energized-BurstLines', label:'元気いっぱい・バースト線',
      tags:['energized','wide-alert','smirk-sly','burst-sharp','dash-motion','light-shaft'] },
    { id:'Serene-Moonlight', label:'穏やか・月光',
      tags:['serene','brow-soft-relief','teary-shine','moonlight-glow','halo-soft','dust-motes'] },
    { id:'Suspicious-Rain', label:'疑念・小雨',
      tags:['suspicious-calm','brow-tilt-confused','whisper-mouth','light-rain','lens-flare-soft','spiral-lines'] },

    // ===== part18 =====
    { id:"Tender-KissLight", label:"やさしさ・キスライト",
      tags:["tenderness","smile-shy-closed","half-lidded-smile","brow-soft-plead","kiss-light","eyelight-softbar","glimmer-dust"] },
    { id:"Overflow-Teary-Ring", label:"涙あふれ・薄リング",
      tags:["teary-overflow","lip-tremble","soft-squint","halo-ring-thin","soft-chromatic","tone-softgrain"] },
    { id:"Radiant-Backglow", label:"輝く喜び・背面グロー",
      tags:["radiant-joy","smile-shy-closed","gaze-tilt-up","backglow-warm","soft-spark-points","impact-spark-lines"] },
    { id:"SoftMelancholy-MistRibbon", label:"やわ憂い・霧のリボン",
      tags:["melancholy-soft","downcast-soft","pout-tiny","mist-ribbon","wave-lines-soft","narrative-frame"] },
    { id:"Fluttery-PetalSwirls", label:"高鳴り・花びらスワール",
      tags:["fluttery","side-eye-glow","mouth-open-soft","petal-swirls","eyelight-softbar","glimmer-dust"] },
    { id:"Stillness-SparkRain", label:"静止・きら雨",
      tags:["stillness","brow-sharp-focus","glassy-eyes-sapphire","spark-rain","halo-ring-thin","soft-chromatic"] },

    // ===== part19 =====
    { id:'Resolute-SteelGlow', label:'断固・鋼のグロウ',
      tags:['resolute','stare-steel','press-lips-determined','brow-knit-focus','edge-sheen','orbit-focus-lines','micro-glow-rim'] },
    { id:'GentleSorrow-SnowVeil', label:'やさしい悲しみ・雪のヴェール',
      tags:['gentle-sorrow','brow-arc-softsad','soft-smile-tremble','teary-trail','snow-faint-drift','volumetric-soft','soft-focus-frame'] },
    { id:'FondTease-EmberRim', label:'親しみ挑発・残り火リム',
      tags:['fond-tease','side-eye-ember','smile-brave','eye-smile-tilt','rim-ember','ember-sparks-fine','hairline-burst'] },
    { id:'NervousHope-HazeBack', label:'不安まじりの希望・逆光ヘイズ',
      tags:['nervous-hope','gaze-soft-curve','mouth-parted-breath','blink-nervous','haze-backlit','haze-motes','subtle-bounce'] },
    { id:'Poised-QuietBreath', label:'凛と・静かな呼吸',
      tags:['poised','quiet-breath','brow-lift-curious','volumetric-soft','fine-grain-organic','micro-glow-rim'] },
    { id:'OnEdge-Sprinkle', label:'張りつめ・ぱらぱら小雨',
      tags:['on-edge','brow-knit-focus','pout-glance-away','sprinkle-light','shear-speed-lines','soft-focus-frame'] },

    // ===== part20 =====
    { id:'Relieved-InnerWarm', label:'安堵・内側の暖ブルーム',
      tags:['smile-relieved','half-lidded-glow','brow-arc-relief','quiet-joy','inner-bloom-warm','edge-halo-soft','soft-vignette-frame'] },
    { id:'TenderPride-SunHaze', label:'やさしい誇り・霞の光条',
      tags:['tender-pride','stare-determined-soft','brow-flat-steady','haze-sunbeam','film-bloom-grain','backline-neon-soft'] },
    { id:'MeltingAffection-Petals', label:'とろけ親愛・光る花弁',
      tags:['melting-affection','side-eye-softsmile','soft-pout-shy','glow-petals','lace-lines','edge-halo-soft'] },
    { id:'FragileCourage-KissDual', label:'かすかな勇気・デュアルキス',
      tags:['fragile-courage','gaze-up-curved','mouth-open-whisper','hesitant','kisslight-dual','tension-threads','subtle-zoom-frame'] },
    { id:'Buoyant-StarConfetti', label:'浮き立つ・星紙吹雪',
      tags:['buoyant','eye-gleam-tear','smile-relieved','composed-bright','star-confetti','backline-neon-soft','soft-spark-mist'] },
    { id:'QuietJoy-SparkSnow', label:'静かな喜び・きら雪',
      tags:['quiet-joy','stare-determined-soft','brow-arc-relief','drift-spark-snow','soft-vignette-frame','film-bloom-grain'] },
  ];

  const data = { categories: [], presets };

  try{
    if (typeof w.__registerPresetPart === 'function' && w.__registerPresetPart.length >= 3) {
      w.__registerPresetPart('presets', 2, data); // faith互換3引数（推奨）
    } else if (typeof w.__registerPresetPart === 'function') {
      w.__registerPresetPart(2, data);            // 従来2引数
    } else if (typeof w.__registerPromptPart === 'function' && w.__registerPromptPart.length >= 3) {
      w.__registerPromptPart('presets', 2, data); // 誤呼び出し吸収
    } else {
      w.__parts = w.__parts || {}; w.__parts.presets = w.__parts.presets || {};
      w.__parts.presets['presets_part2'] = data;
    }
  }catch(e){
    console.error('[presets_part2 v2.0] register error:', e);
  }
})(window);