/* effect_part3.js — merged static effects 21..31 (skip 25) (v3.0)
   - 内容: effect_part21,22,23,24,26,27,28,29,30,31 の categories/items を忠実マージ
   - Registers: window.__registerEffectPart('effect', 3, { categories:[...], presets:[] })
   - [CHANGE] ランタイム収集を廃止し、固定展開で安定登録（25は空→除外）
*/
(function (w) {
  "use strict";

  // 収集テーブル（カテゴリ名→{id,label}のMap）※ID重複は自動排除
  const byName = new Map();
  const put = (cat, id, label) => {
    if (!cat || !id) return;
    if (!byName.has(cat)) byName.set(cat, new Map());
    const m = byName.get(cat);
    if (!m.has(id)) m.set(id, { id: String(id).trim(), label: label || id });
  };

  // ===== part21（Hearts 基本） =====  
  [
    ['Particles / 粒子','heart-glow','ハートグロー / heart-glow'],
    ['Particles / 粒子','heart-sparkles','ハートスパークル / heart-sparkles'],
    ['Particles / 粒子','heart-petals','舞うハート花弁 / heart-petals'],
    ['VFX / その他','heart-bokeh','ハートボケ / heart-bokeh'],
    ['Lines / 線','heart-trail','ハートの軌跡 / heart-trail'],
    ['Light / 光','kisslight-heart','キスライト（ハート反射） / kisslight-heart'],
  ].forEach(x=>put(...x));

  // ===== part22（Hearts 拡張） =====  
  (function(){
    const byCat = {
      'Light / 光': [
        ['heart-bokeh-mini','ハートボケ・ミニ'],['heart-bokeh-wide','ハートボケ・ワイド'],
        ['heart-light-leak','ハート光漏れ'],['neon-heart-outline-pro','ネオンハート・アウトラインPro'],
        ['backlit-heart-halo','逆光・ハートハロ'],['rim-heart-kicker','リム光・ハート反射'],
        ['soft-heart-vignette','ソフトビネット・ハート']
      ],
      'Lines / 線': [
        ['heartbeat-ecg-line','心電図ライン'],['heart-trail-comet','ハート彗星トレイル'],
        ['heart-spiral-orbit','ハート螺旋軌道'],['cupid-arrow-streak','キューピッド矢・光条']
      ],
      'Particles / 粒子': [
        ['heart-confetti-plus','ハート紙吹雪+'],['heart-spark-mist','ハートスパーク霧'],
        ['heart-orb-field','ハート光球フィールド'],['petals-heart-mix','花びら×ハートMIX'],
        ['glitter-heart-dust','きら粉・ハート']
      ],
      'Weather / 天候': [
        ['haze-heart-sunbeam','霞に差すハート光条'],['drift-heart-snow','舞う雪・ハート混じり']
      ],
      'VFX / 素材': [
        ['glass-heart-prism','ガラスハート・プリズム'],['paper-heart-cutout','紙カット・ハート'],
        ['ink-heart-splash','インクしぶき・ハート'],['pixel-heart-hud','ピクセルハートHUD']
      ],
      'Overlay / 合成': [
        ['heart-overlay-soft','ハート被写体前面ソフト'],['heart-overlay-depth','ハート前後景ミックス'],
        ['double-exposure-heart','二重露光・ハート']
      ],
      'VFX / その他': [
        ['balloon-heart-float','バルーンハート'],['handdrawn-heart-scribble','手描きハート・らくがき'],
        ['sticker-heart-pack','ステッカーハート']
      ]
    };
    Object.entries(byCat).forEach(([cat, arr]) => arr.forEach(([id, jp]) => put(cat, id, `${jp} / ${id}`)));
  })();

  // ===== part23（素材/光 他） =====  
  (function(){
    const byCat = {
      'VFX / 素材': [
        ['stainedglass-heart','ステンドグラス・ハート'],['foil-balloon-heart','フォイル風船・ハート'],
        ['candy-wrapper-spec','キャンディ包材スペキュラ']
      ],
      'Lines / 線': [['ribbon-swirl-heart','リボンスワール・ハート']],
      'Overlay / 合成': [['lace-heart-overlay','レース・ハートオーバーレイ']],
      'Background / 背景': [['macaron-pastel-bg','マカロン・パステル背景']],
      'Particles / 粒子': [['metallic-heart-confetti','金属光ハート紙吹雪']],
      'Light / 光': [
        ['stringlights-heart','ストリングライト・ハート'],['heart-bokeh-warmplus','ハートボケ・ウォーム+'],
        ['heart-bokeh-coolplus','ハートボケ・クール+'],['caustics-heart-reflect','水面コースティクス・ハート']
      ]
    };
    Object.entries(byCat).forEach(([cat, arr]) => arr.forEach(([id, jp]) => put(cat, id, `${jp} / ${id}`)));
  })();

  // ===== part24（空・水・合成） =====  
  (function(){
    const effects = [
      ['bubble-heart-field','泡ハート・フィールド','Particles / 粒子'],
      ['waterdrop-heart-bokeh','水滴ハート・ボケ','Light / 光'],
      ['fog-glass-heart-draw','曇りガラス・指でハート','Overlay / 合成'],
      ['cloud-heart-formation','雲のハート形成','Weather / 天候'],
      ['fireworks-heart-burst','花火・ハートバースト','Light / 光'],
      ['aurora-heart-arc','オーロラ・ハートアーク','Light / 光'],
      ['sunflare-heart-petal','太陽フレア・ハート花弁','Light / 光'],
      ['window-rain-heart-trace','濡れ窓・ハートの軌跡','Overlay / 合成'],
      ['mist-heart-breath','吐息のミスト・ハート','VFX / その他'],
    ];
    effects.forEach(([id,jp,cat])=>put(cat, id, `${jp} / ${id}`));
  })();

  // ===== part25：空（依頼により除外） =====

  // ===== part26（自然・植物系） =====  
  (function(){
    const list = [
      ['leaf-dappled-light','木漏れ日','Light / 光'],['sunray-through-leaves','葉間の光条','Light / 光'],['warm-backlight','暖色バックライト','Light / 光'],
      ['pollen-drift','花粉の漂い','Particles / 粒子'],['petal-scatter','花びら舞い','Particles / 粒子'],['seed-fluff','綿毛の浮遊','Particles / 粒子'],['dew-sparkles','露のきらめき','Particles / 粒子'],
      ['raindrop-ripples','雨滴の波紋','VFX / その他'],['chlorophyll-glow','クロロフィル輝き','VFX / Color & Tone'],['morning-haze-soft','朝もや・ソフト','VFX / その他'],['fresh-green-grade','新緑グレード','VFX / Color & Tone'],
      ['bg-leaf-veins','葉脈パターン','Background Geometry / 背景ジオメトリ'],['bg-flower-tiles','花タイル','Background Geometry / 背景ジオメトリ'],['bg-fern-spiral','シダ螺旋','Background Geometry / 背景ジオメトリ'],
      ['bark-texture','樹皮テクスチャ','Materials / 素材・表面'],['moss-soft','やわ苔','Materials / 素材・表面'],['wet-stone','濡れた石肌','Materials / 素材・表面'],
      ['green-bounce','緑の反射光','Lighting / ライティング詳細'],['canopy-softbox','樹冠ソフトボックス','Lighting / ライティング詳細'],['after-rain-gloss','雨上がりの艶','Lighting / ライティング詳細'],
      ['path-leading','小径リード線','Composition / 構図・フレーミング'],['foreground-leaves','前景の葉抜け','Composition / 構図・フレーミング'],['low-grass-angle','草目線ローアングル','Composition / 構図・フレーミング'],
    ];
    list.forEach(([id,jp,cat])=>put(cat, id, `${jp} / ${id}`));
  })();

  // ===== part27（炎・熱） =====  
  (function(){
    const cats = {
      'Effects / エフェクト': [
        ['fire-aura','炎のオーラ'],['ember-drifts-strong','強い火の粉漂い'],['torch-flicker','松明の揺らめき'],
        ['inferno-surge','業火の奔流'],['candle-softlight','キャンドル光'],['smoke-curl','煙の渦巻き'],['heat-haze','陽炎'],['charred-glow','焦げ跡の輝き']
      ],
      'VFX / その他': [['phoenix-flare','フェニックスフレア'],['flame-wings','炎の翼'],['fire-circle','炎の円環']],
      'Lighting / ライティング詳細': [['orange-backlight','オレンジ逆光'],['bonfire-glow','焚き火光'],['molten-reflect','溶岩反射']],
      'Background Geometry / 背景ジオメトリ': [['bg-flame-pattern','炎パターン'],['bg-cracked-earth','ひび割れ地表'],['bg-ash-cloud','灰雲']],
      'Materials / 素材・表面': [['charcoal','木炭'],['molten-metal','溶けた金属'],['burnt-wood','焦げた木']]
    };
    Object.entries(cats).forEach(([cat, arr])=>arr.forEach(([id,jp])=>put(cat, id, `${jp} / ${id}`)));
  })();

  // ===== part28（氷雪） =====  
  (function(){
    const cats = {
      "Effects / エフェクト（Snow & Ice）": [
        ['snowfall-fine','細雪'],['blizzard-swirls','吹雪の渦'],['ice-crystal-bokeh','氷結晶ボケ'],['frost-edges','霜の縁取り'],['glacial-mist','氷霧']
      ],
      "Lighting / ライティング詳細": [
        ['moonlit-ice','月光の氷'],['cold-backlight','冷色逆光'],['aurora-soft','オーロラ・ソフト'],['blue-hour-glow','ブルーアワーの光'],['subzero-rim','サブゼロ・リムライト'],['ice-reflection','氷面反射']
      ],
      "VFX / 視覚効果": [
        ['snow-spark-trail','雪火花トレイル'],['crackled-iceframe','ひび割れ氷フレーム']
      ],
      "Background Geometry / 背景ジオメトリ": [
        ['bg-ice-fractal','氷フラクタル'],['bg-snow-dunes','雪砂丘パターン'],['bg-frozen-lake','凍湖パターン']
      ],
      "Materials / 素材・表面": [
        ['hoarfrost','樹氷'],['packed-snow','踏み固め雪'],['clear-ice','クリアアイス']
      ]
    };
    Object.entries(cats).forEach(([cat, arr])=>arr.forEach(([id,jp])=>put(cat, id, `${jp} / ${id}`)));
  })();

  // ===== part29（雷・嵐） =====  
  (function(){
    const cats = {
      'Effects / エフェクト': [
        ['forked-lightning','分岐稲妻'],['sheet-lightning','シート状稲光'],['ball-lightning-vfx','球電（VFX）'],
        ['horizon-strike','地平線に落雷'],['rain-streaks','雨筋'],['downpour-mist','豪雨ミスト'],['wind-gust-trails','突風トレイル'],
        ['puddle-splash','水たまりの跳ね'],['wet-bokeh','濡れボケ'],['anvil-clouds','かなとこ雲'],['mammatus-clouds','乳房雲']
      ],
      'Lighting / ライティング詳細': [
        ['strobe-flash','ストロボ閃光'],['split-light-storm','分割光（嵐）'],['backlit-silhouette','逆光シルエット'],['wet-rim-gloss','濡れリム・グロス'],['high-contrast','ハイコントラスト']
      ],
      'Background Geometry / 背景ジオメトリ': [
        ['bg-storm-skyline','嵐のスカイライン'],['bg-coast-tempest','荒れる海岸線'],['bg-mountain-tempest','山嵐の稜線']
      ],
      'Materials / 素材・表面': [
        ['rain-soaked-fabric','濡れた布地'],['beaded-metal','水滴の金属面'],['slick-asphalt','濡れアスファルト']
      ]
    };
    Object.entries(cats).forEach(([cat, arr])=>arr.forEach(([id,jp])=>put(cat, id, `${jp} / ${id}`)));
  })();

  // ===== part30（砂漠・熱） =====  
  (function(){
    const cats = {
      'Effects / エフェクト': [
        ['heat-haze','陽炎（ヒートヘイズ）'],['mirage-waves','蜃気楼の揺らめき'],['sun-glare','太陽グレア'],
        ['sand-dust-drift','砂塵の漂い'],['dust-devil','つむじ風'],['golden-haze','ゴールデンヘイズ'],['heat-vortex-soft','熱の渦・柔']
      ],
      'Lighting / ライティング詳細': [
        ['harsh-noon','真昼の強光'],['golden-hour-desert','砂漠のゴールデンアワー'],
        ['backlit-dune-rim','砂丘の縁・逆光リム'],['specular-sun-spots','ギラつくハイライト']
      ],
      'Materials / 素材・表面': [
        ['sun-bleached-fabric','日焼け布'],['sand-grain-sheen','砂粒のきらめき'],['weathered-leather','風化レザー'],['cracked-earth','ひび割れた大地']
      ],
      'Composition / 構図・フレーミング': [
        ['low-angle-mirage','ロウアングル・蜃気楼越し'],['long-journey-lines','遠近線で旅情'],['silhouette-dune-crest','砂丘稜線のシルエット']
      ]
    };
    Object.entries(cats).forEach(([cat, arr])=>arr.forEach(([id,jp])=>put(cat, id, `${jp} / ${id}`)));
  })();

  // ===== part31（Hearts Pack I） =====  
  (function(){
    const list = [
      // Particles
      ['heart-dust-fine','ハート微粒子','Effects / エフェクト（Hearts / ハート）'],
      ['heart-petals-fall','ハート花弁落下','Effects / エフェクト（Hearts / ハート）'],
      ['heart-bokeh-soft','ハートボケ・柔','Effects / エフェクト（Hearts / ハート）'],
      ['heart-confetti','ハート紙吹雪','Effects / エフェクト（Hearts / ハート）'],
      ['heart-trail-orbit','ハート軌跡オービット','Effects / エフェクト（Hearts / ハート）'],
      // Light
      ['heart-glow-inner','内側ハートグロー','Effects / エフェクト（Hearts / ハート）'],
      ['heart-rimlight','ハート調リムライト','Effects / エフェクト（Hearts / ハート）'],
      ['heartbeat-pulse','鼓動パルス光','Effects / エフェクト（Hearts / ハート）'],
      ['cupid-flare','キューピッドフレア','Effects / エフェクト（Hearts / ハート）'],
      // VFXその他
      ['heart-frame-soft','ソフト・ハートフレーム','Effects / エフェクト（Hearts / ハート）'],
      ['heart-lens-prism','ハートレンズプリズム','Effects / エフェクト（Hearts / ハート）'],
      ['heart-zoom-focus','ハートズームフォーカス','Effects / エフェクト（Hearts / ハート）'],
    ];
    list.forEach(([id,jp,cat])=>put(cat, id, `${jp} / ${id}`));
  })();

  // ===== categories 配列に変換 =====
  const categories = Array.from(byName, ([name, map]) => ({
    name, items: Array.from(map.values())
  }));

  const data = { categories, presets: [] };

  // ===== 登録（3形態対応）=====
  try{
    if (typeof w.__registerEffectPart === 'function' && w.__registerEffectPart.length >= 3) {
      w.__registerEffectPart('effect', 3, data);   // faith互換3引数（推奨）
    } else if (typeof w.__registerEffectPart === 'function') {
      w.__registerEffectPart(3, data);             // 従来2引数
    } else if (typeof w.__registerPromptPart === 'function' && w.__registerPromptPart.length >= 3) {
      w.__registerPromptPart('effect', 3, data);   // 誤呼び出し吸収
    } else {
      // 最終フォールバック
      w.__parts = w.__parts || { effect:{} };
      w.__parts.effect = w.__parts.effect || {};
      w.__parts.effect[3] = data;
    }
  }catch(e){
    console.error('[effect_part3 merged 21..31 v3.0] register error:', e);
  }
})(window);