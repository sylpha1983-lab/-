/* ================================
 * effect_part22.js  v1.0
 * 変換元: part22.js の effects
 * 登録: window.__registerEffectPart('effect_part22', data)
 * 備考: カテゴリ見出しは原文を尊重（Light/Lines/Particles/Weather/VFX/Overlay など）
 * ================================ */
(function (w) {
  const byCat = {
    'Light / 光': [
      { id:'heart-bokeh-mini',       jp:'ハートボケ・ミニ' },
      { id:'heart-bokeh-wide',       jp:'ハートボケ・ワイド' },
      { id:'heart-light-leak',       jp:'ハート光漏れ' },
      { id:'neon-heart-outline-pro', jp:'ネオンハート・アウトラインPro' },
      { id:'backlit-heart-halo',     jp:'逆光・ハートハロ' },
      { id:'rim-heart-kicker',       jp:'リム光・ハート反射' },
      { id:'soft-heart-vignette',    jp:'ソフトビネット・ハート' }
    ],
    'Lines / 線': [
      { id:'heartbeat-ecg-line',     jp:'心電図ライン' },
      { id:'heart-trail-comet',      jp:'ハート彗星トレイル' },
      { id:'heart-spiral-orbit',     jp:'ハート螺旋軌道' },
      { id:'cupid-arrow-streak',     jp:'キューピッド矢・光条' }
    ],
    'Particles / 粒子': [
      { id:'heart-confetti-plus',    jp:'ハート紙吹雪+' },
      { id:'heart-spark-mist',       jp:'ハートスパーク霧' },
      { id:'heart-orb-field',        jp:'ハート光球フィールド' },
      { id:'petals-heart-mix',       jp:'花びら×ハートMIX' },
      { id:'glitter-heart-dust',     jp:'きら粉・ハート' }
    ],
    'Weather / 天候': [
      { id:'haze-heart-sunbeam',     jp:'霞に差すハート光条' },
      { id:'drift-heart-snow',       jp:'舞う雪・ハート混じり' }
    ],
    'VFX / 素材': [
      { id:'glass-heart-prism',      jp:'ガラスハート・プリズム' },
      { id:'paper-heart-cutout',     jp:'紙カット・ハート' },
      { id:'ink-heart-splash',       jp:'インクしぶき・ハート' },
      { id:'pixel-heart-hud',        jp:'ピクセルハートHUD' }
    ],
    'Overlay / 合成': [
      { id:'heart-overlay-soft',     jp:'ハート被写体前面ソフト' },
      { id:'heart-overlay-depth',    jp:'ハート前後景ミックス' },
      { id:'double-exposure-heart',  jp:'二重露光・ハート' }
    ],
    'VFX / その他': [
      { id:'balloon-heart-float',    jp:'バルーンハート' },
      { id:'handdrawn-heart-scribble', jp:'手描きハート・らくがき' },
      { id:'sticker-heart-pack',     jp:'ステッカーハート' }
    ]
  };

  const categories = Object.entries(byCat).map(([name, items])=>({
    name,
    items: items.map(it => ({ id: it.id, label: `${it.jp} / ${it.id}` }))
  }));

  const data = { categories, presets: [] };
  (w.__registerEffectPart || function(){ console.warn('registerEffect missing'); })( 'effect_part22', data );
})(window);