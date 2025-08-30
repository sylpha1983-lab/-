/* ============================================
   Pastel / Candy Heart Pack — part54.js
   ============================================ */
(function (g){
  const register = g.__registerPromptPart || function(id, data){
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  // === Expressions（表情：パステル系・やわ歓喜）===
  const expr = [
    { id:'pastel-soft-smile',     label:'パステル・やわ微笑み / pastel soft smile' },
    { id:'candy-gleam-eyes',      label:'キャンディきら眼 / candy gleam eyes' },
    { id:'sweet-bashful-blush',   label:'スウィート照れ紅潮 / sweet bashful blush' },
    { id:'cotton-happy-sigh',     label:'コットン・幸せの吐息 / cotton happy sigh' },
    { id:'lollipop-wink',         label:'ロリポップ・ウィンク / lollipop wink' },
    { id:'sugar-quiet-joy',       label:'シュガー・静かな喜び / sugar quiet joy' }
  ];

  // === Effects（エフェクト：パステル／キャンディ・ハート）===
  const eff = [
    { id:'pastel-heart-float',    label:'パステルハート漂い / pastel heart float' },
    { id:'candy-heart-rain',      label:'キャンディハートの雨 / candy heart rain' },
    { id:'marshmallow-bokeh',     label:'マシュマロ・ボケ / marshmallow bokeh' },
    { id:'cotton-candy-haze',     label:'綿菓子ヘイズ / cotton candy haze' },
    { id:'sugar-spark-dust',      label:'砂糖スパーク粉 / sugar spark dust' },
    { id:'pastel-gradient-glow',  label:'パステルグラデ・グロウ / pastel gradient glow' },
    { id:'gummy-heart-trails',    label:'グミハートの軌跡 / gummy heart trails' },
    { id:'mint-drop-shine',       label:'ミントドロップ・シャイン / mint drop shine' }
  ];

  // === Presets（プリセット）===
  const presets = [
    {
      id:'Pastel-Heart-Breeze',
      label:'パステルハート・ブリーズ',
      tags:[
        'pastel-soft-smile','pastel-heart-float','pastel-gradient-glow','marshmallow-bokeh'
      ]
    },
    {
      id:'Candy-Rain-Wink',
      label:'キャンディレイン・ウィンク',
      tags:[
        'lollipop-wink','candy-heart-rain','sugar-spark-dust','mint-drop-shine'
      ]
    },
    {
      id:'Cotton-Haze-Joy',
      label:'コットンヘイズ・ジョイ',
      tags:[
        'sugar-quiet-joy','cotton-candy-haze','pastel-heart-float','marshmallow-bokeh'
      ]
    },
    {
      id:'Sweet-Bashful-Glow',
      label:'スウィート照れ・グロウ',
      tags:[
        'sweet-bashful-blush','pastel-gradient-glow','gummy-heart-trails'
      ]
    },
    {
      id:'Gleam-Eyes-CandyTrail',
      label:'きら眼・キャンディ軌跡',
      tags:[
        'candy-gleam-eyes','gummy-heart-trails','sugar-spark-dust'
      ]
    },
    {
      id:'Pastel-Mint-SoftBokeh',
      label:'パステルミント・ソフトボケ',
      tags:[
        'pastel-soft-smile','mint-drop-shine','marshmallow-bokeh'
      ]
    },
    {
      id:'Lollipop-Sigh-Drizzle',
      label:'ロリポップ吐息・ドリズル',
      tags:[
        'cotton-happy-sigh','candy-heart-rain','cotton-candy-haze'
      ]
    },
    {
      id:'Sugar-Quiet-Float',
      label:'シュガー・クワイエットフロート',
      tags:[
        'sugar-quiet-joy','pastel-heart-float','pastel-gradient-glow'
      ]
    }
  ];

  register('part54',{
    categories:[
      { name:'Expressions / 表情', items: expr },
      { name:'Effects / エフェクト（Heart: Pastel / Candy）', items: eff }
    ],
    presets
  });
})(window);