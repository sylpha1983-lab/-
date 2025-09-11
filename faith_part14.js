/* faith_part14.js — from part14 (expressions -> 表情カテゴリ) */
(function (w) {
  w.__registerPromptPart = w.__registerPromptPart || function(){};

  const expressions = [
    // Eyes / 目
    { id: 'starlit-eyes',   jp: '星の瞳',           cat: 'Eyes / 目' },
    { id: 'shadowed-eyes',  jp: '影落ち瞳',         cat: 'Eyes / 目' },
    { id: 'flutter-blink',  jp: 'ぱちぱちまばたき', cat: 'Eyes / 目' },
    { id: 'wide-glisten',   jp: '見開き・きらめき', cat: 'Eyes / 目' },

    // Brows / 眉
    { id: 'brow-elegant-arch', jp: '眉・優美な弧',   cat: 'Brows / 眉' },
    { id: 'brow-pressed-flat', jp: '眉・押しつぶし', cat: 'Brows / 眉' },

    // Mouth / 口
    { id: 'smirk-playful',  jp: 'いたずらっぽいニヤリ', cat: 'Mouth / 口' },
    { id: 'grit-teeth',     jp: '歯を食いしばる',       cat: 'Mouth / 口' },
    { id: 'open-shock',     jp: '驚き・口開き',         cat: 'Mouth / 口' },

    // Emotion / 感情
    { id: 'exuberant',      jp: '快活',             cat: 'Emotion / 感情' },
    { id: 'sorrow-deep',    jp: '深い悲哀',         cat: 'Emotion / 感情' },
    { id: 'awe-struck',     jp: '畏怖',             cat: 'Emotion / 感情' },
    { id: 'bashful-soft',   jp: 'はにかみ・やわらか', cat: 'Emotion / 感情' },

    // State / 状態
    { id: 'anticipation',   jp: '期待感',               cat: 'State / 状態' },
    { id: 'haunted',        jp: '取り憑かれたよう',     cat: 'State / 状態' },
    { id: 'lighthearted',   jp: '軽やか',               cat: 'State / 状態' },
    { id: 'wistful-glance', jp: '物思いの視線',         cat: 'State / 状態' }
  ];

  // カテゴリごとにまとめる
  const groups = {};
  for (const e of expressions) {
    if (!groups[e.cat]) groups[e.cat] = [];
    groups[e.cat].push({ id: e.id, label: `${e.jp} / ${e.id}` });
  }
  const categories = Object.keys(groups).map(name => ({ name, items: groups[name] }));

  w.__registerPromptPart('faith_part14', {
    categories,
    presets: [] // 表情側にはプリセットを入れない（プリセット専用ファイルで提供）
  });
})(window);