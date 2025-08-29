/* ============================================
   Expression + Effects Builder — part23.js (23/40)
   テーマ：ハート・マテリアル＆オブジェクト拡張
   格納：window.expressionEffects["part23"] = {expressions,effects,presets}
   備考：既存IDと衝突しない新IDのみ
   ============================================ */
(function (g) {
  g.expressionEffects = g.expressionEffects || {};

  // ===== Expressions（甘め・可憐テイスト中心） =====
  const expressions = [
    { id:'cheek-heart-blush',     jp:'頬チーク・ハート',             category:'Emotion / 感情' },
    { id:'eyes-catchlight-heart', jp:'瞳キャッチライト・ハート',     category:'Eyes / 目' },
    { id:'smile-sweet-candy',     jp:'微笑み・キャンディ',           category:'Mouth / 口' },
    { id:'bashful-ribbon-tilt',   jp:'照れ・リボン頭傾き',           category:'Emotion / 感情' },
    { id:'fond-melt-choco',       jp:'親愛・とろけチョコ',           category:'Emotion / 感情' },
    { id:'glossy-lip-heartshine', jp:'リップ光沢・ハート煌き',       category:'Mouth / 口' },
    { id:'dreamy-heart-drift',    jp:'うっとり・ハート漂い',         category:'State / 状態' },
    { id:'spark-sugar-eyes',      jp:'砂糖きらめきの瞳',             category:'Eyes / 目' }
  ];

  // ===== Effects（素材／表面／オブジェクト系） =====
  const effects = [
    // Materials / Surfaces
    { id:'stainedglass-heart',    jp:'ステンドグラス・ハート',       category:'VFX / 素材' },
    { id:'foil-balloon-heart',    jp:'フォイル風船・ハート',         category:'VFX / 素材' },
    { id:'ribbon-swirl-heart',    jp:'リボンスワール・ハート',       category:'Lines / 線' },
    { id:'lace-heart-overlay',    jp:'レース・ハートオーバーレイ',   category:'Overlay / 合成' },
    { id:'candy-wrapper-spec',    jp:'キャンディ包材スペキュラ',     category:'VFX / 素材' },
    { id:'macaron-pastel-bg',     jp:'マカロン・パステル背景',       category:'Background / 背景' },
    { id:'metallic-heart-confetti',jp:'金属光ハート紙吹雪',          category:'Particles / 粒子' },
    { id:'stringlights-heart',    jp:'ストリングライト・ハート',     category:'Light / 光' },
    { id:'heart-bokeh-warmplus',  jp:'ハートボケ・ウォーム+',        category:'Light / 光' },
    { id:'heart-bokeh-coolplus',  jp:'ハートボケ・クール+',          category:'Light / 光' },
    { id:'caustics-heart-reflect',jp:'水面コースティクス・ハート',   category:'Light / 光' }
  ];

  // ===== Presets（甘めロマンティックの即戦力） =====
  const presets = [
    {
      id:'CandySweet-RibbonGlow',
      label:'キャンディスイート×リボングロウ',
      expressions:['smile-sweet-candy','cheek-heart-blush','spark-sugar-eyes'],
      effects:['ribbon-swirl-heart','stringlights-heart','heart-bokeh-warmplus']
    },
    {
      id:'ChocoMelt-Romance',
      label:'とろけチョコ・ロマンス',
      expressions:['fond-melt-choco','glossy-lip-heartshine','dreamy-heart-drift'],
      effects:['candy-wrapper-spec','metallic-heart-confetti','heart-bokeh-coolplus']
    },
    {
      id:'StainedGlass-Serene',
      label:'ステンドグラス・静謐',
      expressions:['eyes-catchlight-heart','dreamy-heart-drift'],
      effects:['stainedglass-heart','stringlights-heart','lace-heart-overlay']
    },
    {
      id:'Balloon-PastelField',
      label:'バルーンハート・パステルフィールド',
      expressions:['bashful-ribbon-tilt','cheek-heart-blush'],
      effects:['foil-balloon-heart','macaron-pastel-bg','metallic-heart-confetti']
    },
    {
      id:'HeartCaustics-Glow',
      label:'ハート・コースティクスグロウ',
      expressions:['spark-sugar-eyes','dreamy-heart-drift'],
      effects:['caustics-heart-reflect','stringlights-heart','lace-heart-overlay']
    }
  ];

  g.expressionEffects["part23"] = { expressions, effects, presets };
})(window);