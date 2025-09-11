/* faith_part4.js (from part4.js) — UMD register, categories/items only */
(function (g) {
  const byCat = new Map();
  const add = (cat, id, jp) => {
    if (!byCat.has(cat)) byCat.set(cat, []);
    byCat.get(cat).push({ id, label: `${jp} / ${id}` });
  };

  // ==== Expressions (from original part4.js) ====
  add('Eyes / 目', 'narrow-eyes-sharp', '細め目・鋭さ');
  add('Eyes / 目', 'narrow-eyes-warm', '細め目・やわらか');
  add('Eyes / 目', 'sparkle-eyes-star', '瞳キラキラ・星型');
  add('Eyes / 目', 'sparkle-eyes-tearful', '瞳キラキラ・涙混じり');
  add('Eyes / 目', 'closed-eyes-prayer', '閉じ目・祈り');

  add('Brows / 眉', 'slanted-brow-angry', '斜め眉・怒り');
  add('Brows / 眉', 'slanted-brow-sad', '斜め眉・哀愁');
  add('Brows / 眉', 'arched-brow-playful', 'アーチ眉・遊び心');

  add('Mouth / 口', 'open-smile', '開いた笑み');
  add('Mouth / 口', 'soft-pout', 'ソフトむくれ');
  add('Mouth / 口', 'tongue-peek', '舌ちろり');
  add('Mouth / 口', 'gritted-teeth', '食いしばり歯');

  add('Emotion / 感情', 'determined', '決意');
  add('Emotion / 感情', 'cheerful', '朗らか');
  add('Emotion / 感情', 'bashful-proud', '照れ誇り');

  add('State / 状態', 'confident', '自信あり');
  add('State / 状態', 'shaken', '動揺');
  add('State / 状態', 'daydreaming', '夢想');

  const categories = Array.from(byCat, ([name, items]) => ({ name, items }));

  const data = { categories, presets: [] };
  (g.__registerPromptPart || function(name, d){
    g.__parts = g.__parts || {faith:{},background:{},effect:{},pose:{},hair:{},presets:{}};
    g.__parts.faith = g.__parts.faith || {};
    const idx = 4; g.__parts.faith[idx] = d;
  })('faith_part4', data);
})(window);