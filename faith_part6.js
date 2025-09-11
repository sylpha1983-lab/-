/* faith_part6.js — from part6.js (expressions→categories) */
;(function (g) {
  g.__parts = g.__parts || {};
  if (!g.__registerPromptPart) {
    g.__registerPromptPart = function (name, data) {
      const m = String(name).match(/^([a-z]+)_part(\d+)$/);
      const cat = m ? m[1] : 'faith';
      const idx = m ? parseInt(m[2], 10) : 1;
      g.__parts[cat] = g.__parts[cat] || {};
      g.__parts[cat][idx] = {
        categories: Array.isArray(data.categories) ? data.categories : [],
        presets: Array.isArray(data.presets) ? data.presets : []
      };
    };
  }

  // 元データ（expressions）をカテゴリごとにまとめ直し
  const src = [
    { id:'side-eye-velvet-plus',  label:'横目・ベルベット＋' , group:'Eyes / 目' },
    { id:'side-eye-razor-plus',   label:'横目・レイザー＋'   , group:'Eyes / 目' },
    { id:'half-lidded-serene',    label:'半目・静'           , group:'Eyes / 目' },
    { id:'half-lidded-hazy-plus', label:'半目・霞み＋'       , group:'Eyes / 目' },
    { id:'upward-glance-bold',    label:'上目遣い・大胆'     , group:'Eyes / 目' },
    { id:'glassy-eyes-golden',    label:'うるみ瞳・ゴールド' , group:'Eyes / 目' },
    { id:'glassy-eyes-dew',       label:'うるみ瞳・露滴'     , group:'Eyes / 目' },
    { id:'teary-tilt',            label:'涙目・かしげ'       , group:'Eyes / 目' },

    { id:'brow-raise-doubt',      label:'片眉上げ・疑念'     , group:'Brows / 眉' },
    { id:'brow-soft-concern',     label:'柔ら眉・心配'       , group:'Brows / 眉' },

    { id:'smile-soft-closed',     label:'柔ら微笑み・口閉じ' , group:'Mouth / 口' },
    { id:'smile-wide-open',       label:'笑み・口開き'       , group:'Mouth / 口' },
    { id:'pout-soft-mini',        label:'むくれ・ミニ'       , group:'Mouth / 口' },
    { id:'grin-tilt',             label:'にやり・かしげ'     , group:'Mouth / 口' },

    { id:'calm-proud',            label:'静かな誇り'         , group:'Emotion / 感情' },
    { id:'touched',               label:'じーん'             , group:'Emotion / 感情' },
    { id:'playful',               label:'おどけ'             , group:'Emotion / 感情' },

    { id:'composed',              label:'平静'               , group:'State / 状態' },
    { id:'flutter',               label:'そわそわ'           , group:'State / 状態' },
    { id:'entranced',             label:'うっとり'           , group:'State / 状態' }
  ];

  const byGroup = {};
  for (const it of src) {
    (byGroup[it.group] = byGroup[it.group] || []).push({
      id: it.id,
      label: `${it.label} / ${it.id}`
    });
  }
  const categories = Object.keys(byGroup).map(name => ({ name, items: byGroup[name] }));

  g.__registerPromptPart('faith_part6', { categories, presets: [] });
})(window);