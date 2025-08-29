/* ============================================
   Expression + Effects Builder — part1.js (1/20)
   大容量データを20分割で提供：本ファイルはその第1弾
   置き方：builder_main.html と同じフォルダに保存
   仕様：window.expressionEffects["part1"] に {expressions,effects,presets} を格納
   備考：各idは英語タグ（英語出力用）／jpはUI表示用
   ============================================ */

(function (g) {
  g.expressionEffects = g.expressionEffects || {};

  const expressions = [
    // Eyes / 目
    { id: 'jitome',           jp: 'ジト目',           category: 'Eyes / 目' },
    { id: 'side-eye',         jp: '横目',             category: 'Eyes / 目' },
    { id: 'side-eye-sharp',   jp: '横目・シャープ',   category: 'Eyes / 目' },
    { id: 'half-lidded',      jp: '半目',             category: 'Eyes / 目' },
    { id: 'half-lidded-dreamy', jp:'半目・とろけ',   category: 'Eyes / 目' },
    { id: 'wide-eyed',        jp: '見開き',           category: 'Eyes / 目' },
    { id: 'teary-eyes',       jp: '涙目',             category: 'Eyes / 目' },
    { id: 'wink',             jp: 'ウィンク',         category: 'Eyes / 目' },
    { id: 'glassy-eyes',      jp: 'うるみ瞳',         category: 'Eyes / 目' },

    // Mouth / 口
    { id: 'pout',             jp: 'ふくれっ面',       category: 'Mouth / 口' },
    { id: 'cheek-puff',       jp: '頬ぷくっ',         category: 'Mouth / 口' },
    { id: 'smile',            jp: '微笑み',           category: 'Mouth / 口' },
    { id: 'big-smile',        jp: '満面の笑み',       category: 'Mouth / 口' },
    { id: 'grin',             jp: 'にやり',           category: 'Mouth / 口' },
    { id: 'smirk',            jp: 'ニヤつき',         category: 'Mouth / 口' },
    { id: 'grimace',          jp: 'しかめ面',         category: 'Mouth / 口' },

    // Emotion / 感情
    { id: 'happy',            jp: '嬉しい',           category: 'Emotion / 感情' },
    { id: 'sad',              jp: '悲しい',           category: 'Emotion / 感情' },
    { id: 'angry',            jp: '怒り',             category: 'Emotion / 感情' },
    { id: 'surprised',        jp: '驚き',             category: 'Emotion / 感情' },
    { id: 'embarrassed',      jp: '照れ',             category: 'Emotion / 感情' },
    { id: 'jealous',          jp: '嫉妬',             category: 'Emotion / 感情' },

    // State / 状態
    { id: 'sleepy',           jp: '眠い',             category: 'State / 状態' },
    { id: 'tired',            jp: '疲れ',             category: 'State / 状態' },
    { id: 'confused',         jp: '困惑',             category: 'State / 状態' },
    { id: 'awkward-smile',    jp: '気まずい笑み',     category: 'State / 状態' },
    { id: 'deadpan',          jp: '無表情',           category: 'State / 状態' }
  ];

  const effects = [
    // Light / 光
    { id: 'rim-light',          jp: 'リムライト',           category: 'Light / 光' },
    { id: 'rim-light-strong',   jp: '強リムライト',         category: 'Light / 光' },
    { id: 'face-gloss',         jp: '顔ハイライト光沢',     category: 'Light / 光' },
    { id: 'bloom',              jp: 'ブルーム',             category: 'Light / 光' },
    { id: 'vignette',           jp: 'ビネット',             category: 'Light / 光' },

    // Lines / 線
    { id: 'impact-lines',       jp: '集中線',               category: 'Lines / 線' },
    { id: 'impact-lines-thick', jp: '極太集中線',           category: 'Lines / 線' },
    { id: 'speed-lines',        jp: 'スピード線',           category: 'Lines / 線' },

    // Particles / 粒子
    { id: 'sparkle',            jp: 'スパークル',           category: 'Particles / 粒子' },
    { id: 'sparkle-dense',      jp: '高密度スパークル',     category: 'Particles / 粒子' },
    { id: 'dust',               jp: 'ダスト',               category: 'Particles / 粒子' },
    { id: 'bokeh',              jp: 'ボケ粒',               category: 'Particles / 粒子' },

    // Weather / 天候
    { id: 'rain',               jp: '雨',                   category: 'Weather / 天候' },
    { id: 'snow',               jp: '雪',                   category: 'Weather / 天候' },
    { id: 'fog',                jp: '霧',                   category: 'Weather / 天候' },

    // VFX / その他
    { id: 'under-eye-shadow',   jp: '目の下の影',           category: 'VFX / その他' },
    { id: 'screen-tone',        jp: 'スクリーントーン',     category: 'VFX / その他' },
    { id: 'soft-grain',         jp: 'ソフト粒状',           category: 'VFX / その他' }
  ];

  const presets = [
    // 使い方：プリセットON→個別タグに自動反映（builder_main.htmlのロジックが連動）
    { id: 'Jealous-Pout-Sharp', label: '嫉妬シャープむくれ',
      expressions: ['jealous','pout','side-eye-sharp'],
      effects: ['face-gloss','sparkle'] },

    { id: 'Sleepy-Cute', label: '眠たげキュート',
      expressions: ['sleepy','half-lidded','smile'],
      effects: ['bloom','vignette','sparkle'] },

    { id: 'Noir-Deadpan', label: 'ノワール無表情',
      expressions: ['deadpan','jitome'],
      effects: ['vignette','rim-light','impact-lines'] },

    { id: 'Tease-Sparkle', label: '挑発スパークル',
      expressions: ['side-eye','grin','embarrassed'],
      effects: ['sparkle','face-gloss'] },

    { id: 'Shock-ThickLines', label: 'ショック極太線',
      expressions: ['surprised','wide-eyed'],
      effects: ['impact-lines-thick','bloom'] },

    { id: 'Crying-Drama', label: '大泣きドラマ',
      expressions: ['sad','teary-eyes'],
      effects: ['rain','under-eye-shadow','vignette'] }
  ];

  g.expressionEffects["part1"] = { expressions, effects, presets };
})(window);