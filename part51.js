/* ============================================
   Ink / Calligraphy Heart Pack — part51.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  // === Expressions（表情）===
  const expr = [
    { id:'ink-blush-soft',        label:'墨染め紅潮・やわら / soft ink blush' },
    { id:'brushstroke-smile',     label:'筆致スマイル / brushstroke smile' },
    { id:'sumi-contemplation',    label:'墨の思索・静 / sumi contemplation' },
    { id:'calligrapher-wink',     label:'筆匠ウィンク / calligrapher wink' },
    { id:'bleed-tear-trace',      label:'にじみ涙跡 / bleeding tear trace' }
  ];

  // === Effects（エフェクト：ハート×書道）===
  const eff = [
    { id:'ink-heart-splash',      label:'墨ハート飛沫 / ink heart splash' },
    { id:'brush-heart-stroke',    label:'筆ハート一筆描き / brush-drawn heart stroke' },
    { id:'sumi-bleed-halo',       label:'墨のにじみハロー / sumi bleed halo' },
    { id:'washi-grain-texture',   label:'和紙グレイン質感 / washi grain texture' },
    { id:'seal-red-accent',       label:'朱印アクセント / red seal accent' },
    { id:'calligraphy-flow-lines',label:'書流の導線 / calligraphy flow lines' }
  ];

  // === Presets（プリセット）===
  const presets = [
    {
      id:'Ink-Confession-Stroke',
      label:'墨の告白・一筆',
      tags:[
        'brushstroke-smile',
        'brush-heart-stroke',
        'sumi-bleed-halo',
        'washi-grain-texture'
      ]
    },
    {
      id:'Sumi-Quiet-Heart',
      label:'墨静謐の心',
      tags:[
        'sumi-contemplation',
        'ink-heart-splash',
        'calligraphy-flow-lines'
      ]
    },
    {
      id:'Bleed-Tears-Seal',
      label:'にじむ涙・朱印',
      tags:[
        'bleed-tear-trace',
        'sumi-bleed-halo',
        'seal-red-accent',
        'washi-grain-texture'
      ]
    },
    {
      id:'Calligrapher-Wink-Beat',
      label:'筆匠ウィンク・鼓動',
      tags:[
        'calligrapher-wink',
        'brush-heart-stroke',
        'ink-heart-splash'
      ]
    },
    {
      id:'Soft-Ink-Blush',
      label:'やわ墨紅潮',
      tags:[
        'ink-blush-soft',
        'sumi-bleed-halo',
        'calligraphy-flow-lines'
      ]
    }
  ];

  register('part51',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Ink/Calligraphy）', items: eff }
    ],
    presets
  });
})(window);