// mood_knowledge.part1.js
// 背景・雰囲気（Mood）定義（外部JS / レジストリ経由）
// 既存のローダ仕様に従い background に登録する

(function(){
  if (typeof window === 'undefined') return;
  const reg = window.__registerBackgroundPart || function(name, data){
    // フォールバック：window.__parts.background へ直接格納（ベース互換）
    try {
      window.__parts = window.__parts || {};
      window.__parts.background = window.__parts.background || {};
      window.__parts.background[name] = data;
    } catch(_) {}
  };

  // 1) 一般ムード（背景に近い抽象ラベル）
  const MOOD_BASIC = [
    { id:'romantic',      label:'ロマンティック / Romantic' },
    { id:'cyberpunk',     label:'サイバーパンク / Cyberpunk' },
    { id:'steampunk',     label:'スチームパンク / Steampunk' },
    { id:'street',        label:'ストリートスタイル / Street Style' },
    { id:'dreamy',        label:'夢幻的 / Dreamy' },
    { id:'mysterious',    label:'ミステリアス / Mysterious' },
    { id:'gothic',        label:'ゴシック / Gothic' },
    { id:'futuristic',    label:'未来的 / Futuristic' },
    { id:'melancholic',   label:'物憂げ / Melancholic' },
    { id:'cheerful',      label:'陽気 / Cheerful' },
    { id:'tranquil',      label:'静謐 / Tranquil' },
    { id:'epic',          label:'荘厳 / Epic' },
    { id:'noir',          label:'ノワール / Noir' },
    { id:'cozy',          label:'ぬくもり / Cozy' },
    { id:'whimsical',     label:'不思議 / Whimsical' },
    { id:'gritty',        label:'退廃・グリティ / Gritty' },
    { id:'vintage',       label:'ヴィンテージ / Vintage' },
    { id:'retrofuturism', label:'レトロフューチャー / Retrofuturism' },
    { id:'pastel',        label:'パステル / Pastel' },
    { id:'vibrant',       label:'ビビッド / Vibrant' },
  ];

  // 2) 幻想・詩的ムード（造語系トークン）
  const MOOD_ETHEREAL = [
    { id:'shimmer',      label:'SHIMMER / 夢幻のきらめき' },
    { id:'ghostfire',    label:'GHOSTFIRE / 幽炎' },
    { id:'voidlace',     label:'VOIDLACE / 影のレース' },
    { id:'neonveil',     label:'NEONVEIL / ネオンの薄幕' },
    { id:'wraithsong',   label:'WRAITHSONG / 亡霊の詩' },
    { id:'glitchdream',  label:'GLITCHDREAM / 夢のグリッチ' },
    { id:'frostwhisper', label:'FROSTWHISPER / 霜のささやき' },
    { id:'luminoir',     label:'LUMINOIR / 柔光ノワール' },
    { id:'shadowmire',   label:'SHADOWMIRE / 影の沼' },
    { id:'starfall',     label:'STARFALL / 星降り' },
    { id:'bloodmoon',    label:'BLOODMOON / 血の月' },
    { id:'celestial',    label:'CELESTIAL / 天上' },
  ];

  // 3) レジストリ登録（background_part2 として）
  reg('background_part2', {
    categories: [
      { name: '雰囲気 / Mood', items: MOOD_BASIC },
      { name: '雰囲気：幻想・詩的ムード / Mood: Ethereal & Poetic', items: MOOD_ETHEREAL }
    ]
  });
})();