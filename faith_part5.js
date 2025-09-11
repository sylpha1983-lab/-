/* ============================================
   faith_part5.js  — 表情カタログ (part5)
   置き場所：builder_main.html と同じフォルダ
   読込方式：<script src="faith_part5.js"></script>
   登録先  ：window.__registerPromptPart('faith_part5', data)
   ============================================ */
(function (w) {
  const items = [
    // Eyes / 目（派生強化）
    { id: 'side-eye-razor',      label: '横目・レイザー / side-eye-razor' },
    { id: 'side-eye-gentle',     label: '横目・そっと / side-eye-gentle' },
    { id: 'half-lidded-serious', label: '半目・真剣 / half-lidded-serious' },
    { id: 'half-lidded-lazy',    label: '半目・けだるげ / half-lidded-lazy' },
    { id: 'upward-glance-coy',   label: '上目遣い・小悪魔 / upward-glance-coy' },
    { id: 'tear-brim',           label: '涙がこぼれそう / tear-brim' },
    { id: 'glassy-eyes-silver',  label: 'うるみ瞳・シルバー / glassy-eyes-silver' },

    // Brows / 眉
    { id: 'brow-knit-soft',      label: '眉間寄せ・控えめ / brow-knit-soft' },
    { id: 'brow-confident-arch', label: '自信眉・アーチ / brow-confident-arch' },

    // Mouth / 口
    { id: 'soft-grin',           label: '控えめニヤリ / soft-grin' },
    { id: 'tight-smile',         label: '引きつり微笑み / tight-smile' },
    { id: 'pout-hard-plus',      label: 'ふくれ・強＋ / pout-hard-plus' },

    // Emotion / 感情
    { id: 'wistful',             label: '物憂げ / wistful' },
    { id: 'smug',                label: 'どや顔 / smug' },
    { id: 'yearning',            label: '憧憬 / yearning' },

    // State / 状態
    { id: 'focused-calm',        label: '静かな集中 / focused-calm' },
    { id: 'startled',            label: 'びくっ / startled' },
    { id: 'awkward-freeze',      label: '固まる気まずさ / awkward-freeze' }
  ];

  const data = {
    categories: [
      { name: '表情 (part5)', items }
    ]
  };

  if (w.__registerPromptPart) w.__registerPromptPart('faith_part5', data);
})(window);