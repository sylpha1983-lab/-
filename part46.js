/* ============================================
   Bokeh / Soft Glow Heart Pack — part46.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  // === Expressions（表情）===
  const expr = [
    { id:'soft-closed-smile',    label:'やわ微笑み（閉口） / soft closed smile' },
    { id:'calm-eyes-half',       label:'落ち着き半目 / calm half-lidded eyes' },
    { id:'serene-blush',         label:'静かな紅潮 / serene blush' },
    { id:'glad-tear-faint',      label:'かすかな嬉涙 / faint glad tear' },
    { id:'warm-gaze',            label:'あたたかい視線 / warm gaze' }
  ];

  // === Effects（エフェクト）===
  const eff = [
    { id:'bokeh-heart-field',    label:'ボケ・ハート群 / bokeh heart field' },
    { id:'soft-heart-glow',      label:'やわらかな心光 / soft heart glow' },
    { id:'veil-pastel-haze',     label:'パステルの靄 / pastel haze veil' },
    { id:'inner-bloom-heart',    label:'内側ブルーム・ハート / inner bloom (heart)' },
    { id:'petal-spark-hearts',   label:'花粉きらめき・ハート / petal spark hearts' }
  ];

  // === Presets（プリセット）===
  const presets = [
    {
      id:'Bokeh-Whisper-Heart',
      label:'ボケ囁きハート',
      tags: ['soft-closed-smile','warm-gaze','bokeh-heart-field','soft-heart-glow','veil-pastel-haze']
    },
    {
      id:'Serene-Bloom',
      label:'静謐なブルーム',
      tags: ['calm-eyes-half','serene-blush','inner-bloom-heart','petal-spark-hearts']
    },
    {
      id:'Faint-Tear-Spark',
      label:'かすかな涙・火花',
      tags: ['glad-tear-faint','soft-heart-glow','bokeh-heart-field']
    }
  ];

  register('part46',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Bokeh/Soft Glow）', items: eff }
    ],
    presets
  });
})(window);