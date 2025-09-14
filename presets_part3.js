/* presets_part3.js — merged static presets 21..30 (v3.0)
   - 内容を固定展開（part21..30 の presets を忠実マージ）
   - Registers: window.__registerPresetPart('presets', 3, { categories:[], presets:[...] })
   - [CHANGE] ランタイム収集を廃止し、ロード順・キー形式に依存しない方式へ
*/
(function (w) {
  "use strict";

  const presets = [
    // ===== part21 =====  
    { id: 'HeartSoft-Sweet',       label: 'ハート・やわ甘スウィート',     tags: ['smile-sweet-heart','blush-soft-heart','gaze-loving-soft','heart-glow','heart-bokeh','kisslight-heart'] },
    { id: 'HeartSparkle-Tease',    label: 'ハート・スパークル小悪魔',     tags: ['wink-heart-tease','eyes-heartshine','shy-tilt-heart','heart-sparkles','heart-trail'] },
    { id: 'HeartPetals-Serene',    label: '舞うハート花弁・穏やか',       tags: ['gaze-loving-soft','blush-soft-heart','heart-petals','heart-glow'] },
    { id: 'HeartBokeh-Portrait',   label: 'ハートボケ・ポートレート',     tags: ['smile-sweet-heart','eyes-heartshine','heart-bokeh','kisslight-heart'] },
    { id: 'HeartTrail-Dynamic',    label: 'ハート軌跡・ダイナミック',     tags: ['wink-heart-tease','smile-sweet-heart','heart-trail','heart-sparkles'] },

    // ===== part22 =====  
    { id: 'Romance-HeartBokehWide', label: 'ロマンス：ハートボケWide / Romance-HeartBokehWide',
      tags: ['love-struck-calm','smile-heart-tilt-plus','brow-soft-adoring','heart-bokeh-wide','soft-heart-vignette','rim-heart-kicker'] },
    { id: 'Cute-HeartSparkMist',   label: 'キュート：ハートスパーク霧 / Cute-HeartSparkMist',
      tags: ['shy-heart-rosy','wink-heart-soft-alt','pupils-heart-twinkle','heart-spark-mist','heart-orb-field','heart-bokeh-mini'] },
    { id: 'Valentine-ConfettiPlus',label: 'バレンタイン：紙吹雪+ / Valentine-ConfettiPlus',
      tags: ['affection-bright-plus','smile-heart-tilt-plus','fluttery-heart','heart-confetti-plus','heart-overlay-depth','petals-heart-mix'] },
    { id: 'Neon-HeartGlowPro',     label: 'ネオン・ハートGlow Pro / Neon-HeartGlowPro',
      tags: ['gaze-heart-distant','devoted-gentle','neon-heart-outline-pro','backlit-heart-halo','double-exposure-heart'] },
    { id: 'ECG-DramaLine',         label: 'ドラマ：心電図ライン / ECG-DramaLine',
      tags: ['resolute-kind-heart','fond-teary-heart','heartbeat-ecg-line','heart-trail-comet','haze-heart-sunbeam'] },
    { id: 'Balloon-SoftRomance',   label: 'バルーン・ソフトロマンス / Balloon-SoftRomance',
      tags: ['serene-heart-aura','kiss-blow-heart','balloon-heart-float','heart-light-leak','sticker-heart-pack'] },
    { id: 'PixelHUD-Love',         label: 'ピクセルHUD・ラブ / PixelHUD-Love',
      tags: ['buoyant-heart-lite','wink-heart-soft-alt','pixel-heart-hud','handdrawn-heart-scribble','glitter-heart-dust'] },

    // ===== part23 =====  
    { id: 'CandySweet-RibbonGlow', label: 'キャンディスイート×リボングロウ / CandySweet-RibbonGlow',
      tags: ['smile-sweet-candy','cheek-heart-blush','spark-sugar-eyes','ribbon-swirl-heart','stringlights-heart','heart-bokeh-warmplus'] },
    { id: 'ChocoMelt-Romance',     label: 'とろけチョコ・ロマンス / ChocoMelt-Romance',
      tags: ['fond-melt-choco','glossy-lip-heartshine','dreamy-heart-drift','candy-wrapper-spec','metallic-heart-confetti','heart-bokeh-coolplus'] },
    { id: 'StainedGlass-Serene',   label: 'ステンドグラス・静謐 / StainedGlass-Serene',
      tags: ['eyes-catchlight-heart','dreamy-heart-drift','stainedglass-heart','stringlights-heart','lace-heart-overlay'] },
    { id: 'Balloon-PastelField',   label: 'バルーンハート・パステルフィールド / Balloon-PastelField',
      tags: ['bashful-ribbon-tilt','cheek-heart-blush','foil-balloon-heart','macaron-pastel-bg','metallic-heart-confetti'] },
    { id: 'HeartCaustics-Glow',    label: 'ハート・コースティクスグロウ / HeartCaustics-Glow',
      tags: ['spark-sugar-eyes','dreamy-heart-drift','caustics-heart-reflect','stringlights-heart','lace-heart-overlay'] },

    // ===== part24 =====  
    { id:'BubbleKiss-AquaGlow',    label:'バブルキス・アクアグロウ',
      tags:['playful-bubble-kiss','serene-ocean-love','bubble-heart-field','waterdrop-heart-bokeh','sunflare-heart-petal'] },
    { id:'FogGlass-Nostalgia',     label:'曇りガラス・ノスタルジア',
      tags:['nostalgic-fog-heart','fog-glass-heart-draw','window-rain-heart-trace','mist-heart-breath'] },
    { id:'SkyLook-AuroraHeart',    label:'見上げ空・オーロラハート',
      tags:['awe-heart-sky','aurora-heart-arc','cloud-heart-formation','sunflare-heart-petal'] },
    { id:'Festival-FireworksHeart',label:'祝祭・花火ハート',
      tags:['festive-firework-smile','playful-bubble-kiss','fireworks-heart-burst','waterdrop-heart-bokeh','bubble-heart-field'] },

    // ===== part25 =====  
    { id:'Cosmic-Awe-Viewing',     label:'宇宙への畏敬（流星群×星雲）',
      tags:['stargaze-awe','wistful-skyward','meteor-shower','nebula-swell','starlight-dust','starlight-rim','skyward-framing','deep-space-vignette'] },
    { id:'Aurora-Dream',           label:'オーロラ・ドリーム（静かな敬虔）',
      tags:['dreamy-cosmic','quiet-reverence','aurora-veil','moonbeam-soft','space-fog-thin','cool-night-bounce','silhouette-foreground'] },
    { id:'MilkyWay-Wish',          label:'天の川に願いを',
      tags:['hopeful-wish','serene-moonlit','milky-way-arc','constellation-lines','bg-constellation-grid','nocturne-contrast','starlight-rim'] },
    { id:'Lonely-Galaxy',          label:'孤独と銀河',
      tags:['lonely-vastness','curious-astral','bg-spiral-galaxy','deep-space-vignette','planetary-halo','space-fog-thin','backlit-moon'] },
    { id:'Comet-Encounter',        label:'彗星遭遇（星ボケ演出）',
      tags:['stargaze-awe','dreamy-cosmic','comet-trail','star-bokeh','bg-orbit-rings','nocturne-contrast','skyward-framing'] },

    // ===== part26 =====  
    { id:'Forest-Morning-Refresh', label:'森の朝・リフレッシュ',
      tags:['fresh-breath-relief','forest-calm','leaf-dappled-light','morning-haze-soft','dew-sparkles','green-bounce','foreground-leaves','path-leading'] },
    { id:'Petal-Breeze-Smile',     label:'花びらと微風の笑み',
      tags:['sun-kissed-smile','breeze-delight','petal-scatter','sunray-through-leaves','fresh-green-grade','canopy-softbox','low-grass-angle'] },
    { id:'After-Rain-Soothing',    label:'雨上がりの癒やし',
      tags:['rain-soothed','dew-gentleness','after-rain-gloss','raindrop-ripples','moss-soft','wet-stone','foreground-leaves'] },
    { id:'Wild-Garden-Curiosity',  label:'野の庭・好奇心',
      tags:['petal-curiosity','pollen-drift','seed-fluff','chlorophyll-glow','bg-leaf-veins','bark-texture','path-leading'] },
    { id:'Fern-Spiral-Calm',       label:'シダ螺旋の静けさ',
      tags:['forest-calm','fresh-breath-relief','bg-fern-spiral','leaf-dappled-light','morning-haze-soft','green-bounce'] },

    // ===== part27 =====  
    { id:'Flame-Warrior',          label:'炎の戦士',
      tags:['fiery-determination','blaze-rage','fire-aura','heat-haze','orange-backlight','bg-flame-pattern'] },
    { id:'Candle-Warmth',          label:'キャンドルの暖かさ',
      tags:['warm-smile','candle-softlight','smoke-curl','bonfire-glow','charcoal','bg-ash-cloud'] },
    { id:'Inferno-Fury',           label:'業火の憤怒',
      tags:['blaze-rage','inferno-surge','phoenix-flare','molten-reflect','bg-cracked-earth','molten-metal'] },
    { id:'Smolder-Sadness',        label:'燻る悲しみ',
      tags:['smoldering-sadness','ember-gaze','ember-drifts-strong','charred-glow','burnt-wood','bg-ash-cloud'] },
    { id:'Phoenix-Rebirth',        label:'不死鳥の再生',
      tags:['flame-exhilaration','flame-wings','phoenix-flare','orange-backlight','bg-flame-pattern','molten-metal'] },

    // ===== part28 =====  
    { id:'Crystal-Serenity',       label:'結晶の静謐',
      tags:['cool-composure','frosty-gaze','ice-crystal-bokeh','blue-hour-glow','bg-ice-fractal','clear-ice'] },
    { id:'Moonlit-Snow',           label:'月光の雪景',
      tags:['winter-melancholy','hazy-breath-soft','snowfall-fine','moonlit-ice','cold-backlight','bg-frozen-lake'] },
    { id:'Aurora-Joy',             label:'オーロラの歓び',
      tags:['sparkling-joy','crystal-smile','glacial-mist','aurora-soft','subzero-rim','bg-snow-dunes'] },
    { id:'Blizzard-Resolve',       label:'吹雪の決意',
      tags:['frosty-gaze','cool-composure','blizzard-swirls','crackled-iceframe','ice-reflection','hoarfrost'] },
    { id:'Snow-Trail-Poem',        label:'雪の軌跡の詩',
      tags:['winter-melancholy','hazy-breath-soft','snow-spark-trail','blue-hour-glow','packed-snow','bg-ice-fractal'] },

    // ===== part29 =====  
    { id:'Lightning-Resolve',      label:'稲妻の決意',
      tags:['storm-focus','forked-lightning','strobe-flash','wet-rim-gloss','bg-storm-skyline','slick-asphalt'] },
    { id:'Tempest-Awe',            label:'嵐への畏怖',
      tags:['awe-struck','sheet-lightning','downpour-mist','backlit-silhouette','anvil-clouds','rain-soaked-fabric'] },
    { id:'Gust-Thrill',            label:'突風のスリル',
      tags:['thrill-charged','wind-gust-trails','puddle-splash','split-light-storm','wet-bokeh','bg-coast-tempest'] },
    { id:'Calm-Before-Strike',     label:'落雷前の静寂',
      tags:['calm-in-tempest','mammatus-clouds','horizon-strike','high-contrast','beaded-metal','bg-mountain-tempest'] },
    { id:'Storm-Focus-Runner',     label:'嵐に向かう者',
      tags:['storm-focus','rain-streaks','downpour-mist','strobe-flash','wet-rim-gloss','slick-asphalt'] },

    // ===== part30 =====  
    { id:'Noon-Scorch-Runner',     label:'真昼の灼熱を駆ける',
      tags:['heat-squint','endure-heat','harsh-noon','sun-glare','heat-haze','bg-dune-ridges','sand-grain-sheen','low-angle-mirage'] },
    { id:'Golden-Oasis-Relief',    label:'黄金のオアシス・安堵',
      tags:['found-oasis-relief','wanderer-calm','golden-hour-desert','golden-haze','bg-oasis-palm','backlit-dune-rim','sun-bleached-fabric'] },
    { id:'Mirage-Trek',            label:'蜃気楼の行軍',
      tags:['parched-fatigue','endure-heat','mirage-waves','sand-dust-drift','long-journey-lines','bg-wadi-canyon','weathered-leather'] },
    { id:'Dune-Crest-Silhouette',  label:'砂丘稜線のシルエット',
      tags:['wanderer-calm','silhouette-dune-crest','backlit-dune-rim','specular-sun-spots','heat-vortex-soft','bg-rock-arches-desert'] },
    { id:'Dust-Devil-Thrill',      label:'砂塵つむじ風のスリル',
      tags:['thrill-charged','dust-devil','sand-dust-drift','harsh-noon','sun-glare','cracked-earth','low-angle-mirage'] },
  ];

  const data = { categories: [], presets };

  try{
    if (typeof w.__registerPresetPart === 'function' && w.__registerPresetPart.length >= 3) {
      w.__registerPresetPart('presets', 3, data); // faith互換3引数（推奨）
    } else if (typeof w.__registerPresetPart === 'function') {
      w.__registerPresetPart(3, data);            // 従来2引数
    } else if (typeof w.__registerPromptPart === 'function' && w.__registerPromptPart.length >= 3) {
      w.__registerPromptPart('presets', 3, data); // 誤呼び出し吸収
    } else {
      w.__parts = w.__parts || {}; w.__parts.presets = w.__parts.presets || {};
      w.__parts.presets['presets_part3'] = data;
    }
  }catch(e){
    console.error('[presets_part3 v3.0] register error:', e);
  }
})(window);