/* faith_part2.js — from old part2.js expressions (UMD register) */
(() => {
  // 元：old part2.js の expressions
  const expressions = [
    { id: 'side-eye-soft',       jp: '横目・やわら',        category: 'Eyes / 目' },
    { id: 'side-eye-icy',        jp: '横目・クール',        category: 'Eyes / 目' },
    { id: 'half-lidded-serene',  jp: '半目・静',            category: 'Eyes / 目' },
    { id: 'half-lidded-sultry',  jp: '半目・アンニュイ',    category: 'Eyes / 目' },
    { id: 'upward-glance',       jp: '上目遣い',            category: 'Eyes / 目' },
    { id: 'upward-glance-tease', jp: '上目遣い・挑発',      category: 'Eyes / 目' },
    { id: 'glassy-eyes-deep',    jp: 'うるみ瞳・深',        category: 'Eyes / 目' },
    { id: 'teary-smile',         jp: '泣き笑い',            category: 'Eyes / 目' },
    { id: 'wince',               jp: '目をしかめる',        category: 'Eyes / 目' },
    { id: 'stare-blank',         jp: '無表情の見つめ',      category: 'Eyes / 目' },

    { id: 'raised-brow',         jp: '片眉上げ',            category: 'Brows / 眉' },
    { id: 'furrowed-brow',       jp: '眉間しわ',            category: 'Brows / 眉' },
    { id: 'soft-brow',           jp: 'やわら眉',            category: 'Brows / 眉' },

    { id: 'pout-hard',           jp: 'ふくれ・強',          category: 'Mouth / 口' },
    { id: 'pout-cute',           jp: 'ふくれ・キュート',    category: 'Mouth / 口' },
    { id: 'smile-gentle',        jp: 'にこやか微笑み',      category: 'Mouth / 口' },
    { id: 'smirk-sly',           jp: 'ニヤリ・狡猾',        category: 'Mouth / 口' },
    { id: 'awkward-tight',       jp: '引きつり笑い',        category: 'Mouth / 口' },
    { id: 'bit-lip',             jp: '噛みしめる唇',        category: 'Mouth / 口' },

    { id: 'bashful',             jp: 'はにかみ',            category: 'Emotion / 感情' },
    { id: 'proud',               jp: '得意げ',              category: 'Emotion / 感情' },
    { id: 'annoyed',             jp: '不機嫌',              category: 'Emotion / 感情' },
    { id: 'skeptical',           jp: '懐疑的',              category: 'Emotion / 感情' },
    { id: 'shocked',             jp: 'ショック',            category: 'Emotion / 感情' },

    { id: 'dizzy',               jp: 'ふらつき',            category: 'State / 状態' },
    { id: 'focused',             jp: '集中',                category: 'State / 状態' },
    { id: 'nervous',             jp: '緊張',                category: 'State / 状態' },
    { id: 'daydreaming',         jp: '白昼夢',              category: 'State / 状態' },
    { id: 'determined',          jp: '決意',                category: 'State / 状態' }
  ];

  const toLabel = (id, jp) => `${jp} / ${id.replace(/-/g, ' ')}`;

  // カテゴリ別に整形
  const map = {};
  for (const e of expressions) {
    (map[e.category] ||= []).push({ id: e.id, label: toLabel(e.id, e.jp) });
  }
  const categories = Object.keys(map).map(name => ({ name, items: map[name] }));

  const data = { categories, presets: [] };

  const g = window;
  if (typeof g.__registerPromptPart === 'function') {
    g.__registerPromptPart('faith_part2', data);
  } else {
    g.__parts = g.__parts || {};
    (g.__parts.faith ||= {})[2] = data;
  }
})();