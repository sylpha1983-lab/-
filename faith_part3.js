// faith_part3.js (from legacy part3 expressions -> UMD)

(function (g) {
  // ===== 変換元の expressions（part3） =====
  const expressions = [
    // Eyes / 目（派生）
    { id: 'side-eye-velvet',        jp: '横目・ベルベット',        category: 'Eyes / 目' },
    { id: 'side-eye-tender',        jp: '横目・やさしめ',          category: 'Eyes / 目' },
    { id: 'half-lidded-hazy',       jp: '半目・霞み',              category: 'Eyes / 目' },
    { id: 'half-lidded-bored',      jp: '半目・退屈',              category: 'Eyes / 目' },
    { id: 'upward-glance-innocent', jp: '上目遣い・無垢',         category: 'Eyes / 目' },
    { id: 'glassy-eyes-amber',      jp: 'うるみ瞳・琥珀',          category: 'Eyes / 目' },
    { id: 'glassy-eyes-amethyst',   jp: 'うるみ瞳・アメシスト',    category: 'Eyes / 目' },
    { id: 'teary-wide',             jp: '涙目・見開き',            category: 'Eyes / 目' },

    // Brows / 眉（派生）
    { id: 'arched-brow-elegant',    jp: 'アーチ眉・上品',          category: 'Brows / 眉' },
    { id: 'flat-brow-serious',      jp: 'フラット眉・真面目',      category: 'Brows / 眉' },

    // Mouth / 口（派生）
    { id: 'soft-smile',             jp: 'やわらかな微笑み',        category: 'Mouth / 口' },
    { id: 'closed-smile',           jp: '口を閉じた微笑み',        category: 'Mouth / 口' },
    { id: 'bit-lip-soft',           jp: '噛みしめ唇・そっと',      category: 'Mouth / 口' },
    { id: 'awkward-smile-soft',     jp: '気まずい笑み・控えめ',    category: 'Mouth / 口' },

    // Emotion / 感情（派生）
    { id: 'melancholy',             jp: 'うつろ',                  category: 'Emotion / 感情' },
    { id: 'relieved',               jp: 'ほっとした',              category: 'Emotion / 感情' },
    { id: 'hopeful',                jp: '希望',                    category: 'Emotion / 感情' },
    { id: 'mischievous',            jp: 'いたずら心',              category: 'Emotion / 感情' },

    // State / 状態（派生）
    { id: 'calm',                   jp: '落ち着き',                category: 'State / 状態' },
    { id: 'tense',                  jp: '張りつめ',                category: 'State / 状態' },
    { id: 'dazed',                  jp: 'ぼんやり',                category: 'State / 状態' },
    { id: 'flustered',              jp: 'あたふた',                category: 'State / 状態' }
  ];

  // カテゴリごとに再編成
  const map = new Map();
  for (const e of expressions) {
    const cat = String(e.category || 'misc');
    if (!map.has(cat)) map.set(cat, []);
    map.get(cat).push({ id: String(e.id), label: `${e.jp} / ${e.id}` });
  }
  const categories = Array.from(map, ([name, items]) => ({ name, items }));

  const data = { categories, presets: [] };

  // レジストリ登録（UMD）
  g.__registerPromptPart && g.__registerPromptPart('faith_part3', data);
})(window);