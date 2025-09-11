/* faith_part7.js — split from part7.js (expressions→categories) */
;(function (g) {
  g.__parts = g.__parts || {};
  g.__registerPromptPart = g.__registerPromptPart || function (name, data) {
    const m = String(name).match(/^([a-z]+)_part(\d+)$/);
    const cat = m ? m[1] : 'faith'; const idx = m ? +m[2] : 1;
    g.__parts[cat] = g.__parts[cat] || {}; g.__parts[cat][idx] = { categories: data.categories||[], presets: data.presets||[] };
  };

  const src = [
    // Eyes / 目
    { id:'side-eye-razor-shade', jp:'横目・レイザー影', category:'Eyes / 目' },
    { id:'side-eye-twinkle',     jp:'横目・きらり',     category:'Eyes / 目' },
    { id:'half-lidded-warm',     jp:'半目・あたたか',   category:'Eyes / 目' },
    { id:'half-lidded-frosty',   jp:'半目・ひんやり',   category:'Eyes / 目' },
    { id:'upward-glance-shy',    jp:'上目遣い・はにかみ', category:'Eyes / 目' },
    { id:'glassy-eyes-emerald',  jp:'うるみ瞳・エメラルド', category:'Eyes / 目' },
    { id:'teary-soft',           jp:'涙目・そっと',     category:'Eyes / 目' },
    { id:'eye-squeeze-smile',    jp:'目を細めて笑う',   category:'Eyes / 目' },

    // Brows / 眉
    { id:'brow-sad-tilt',        jp:'眉しょんぼり・かしげ', category:'Brows / 眉' },
    { id:'brow-proud-flat',      jp:'誇り眉・フラット',     category:'Brows / 眉' },

    // Mouth / 口
    { id:'smile-peek-tooth',     jp:'にこ歯ちらり',       category:'Mouth / 口' },
    { id:'smile-catlike',        jp:'猫口スマイル',       category:'Mouth / 口' },
    { id:'pout-mini-tease',      jp:'ミニむくれ・挑発',   category:'Mouth / 口' },
    { id:'lip-press-soft',       jp:'唇プレス・やわら',   category:'Mouth / 口' },

    // Emotion / 感情
    { id:'serene',               jp:'安らぎ',             category:'Emotion / 感情' },
    { id:'longing',              jp:'切望',               category:'Emotion / 感情' },
    { id:'tease',                jp:'挑発',               category:'Emotion / 感情' },
    { id:'bemused',              jp:'おかしみ',           category:'Emotion / 感情' },

    // State / 状態
    { id:'flushed',              jp:'ほてり',             category:'State / 状態' },
    { id:'composed-soft',        jp:'穏やかな平静',       category:'State / 状態' },
    { id:'moody',                jp:'ムーディ',            category:'State / 状態' }
  ];

  // カテゴリ整形
  const byGroup = {};
  for (const it of src) {
    (byGroup[it.category] = byGroup[it.category] || []).push({ id: it.id, label: `${it.jp} / ${it.id}` });
  }
  const categories = Object.keys(byGroup).map(name => ({ name, items: byGroup[name] }));

  g.__registerPromptPart('faith_part7', { categories, presets: [] });
})(window);