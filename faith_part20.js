/* ============================================
   faith_part20.js  (from part20.js expressions)
   - register: window.__registerPromptPart('faith_part20', { categories })
   ============================================ */
(function (g) {
  const raw = [
    // Eyes / 目
    { id: 'half-lidded-glow',      jp: '半目・ほのかな光',            cat: 'Eyes / 目' },
    { id: 'side-eye-softsmile',    jp: '横目・やわ笑み',              cat: 'Eyes / 目' },
    { id: 'eye-gleam-tear',        jp: '瞳きらめき・涙縁',            cat: 'Eyes / 目' },
    { id: 'gaze-up-curved',        jp: '上向き・曲線視線',            cat: 'Eyes / 目' },
    { id: 'stare-determined-soft', jp: '見据える・柔ら決意',          cat: 'Eyes / 目' },

    // Brows / 眉
    { id: 'brow-arc-relief',       jp: 'アーチ眉・安堵',              cat: 'Brows / 眉' },
    { id: 'brow-flat-steady',      jp: 'フラット眉・動じず',          cat: 'Brows / 眉' },

    // Mouth / 口
    { id: 'smile-relieved',        jp: '安堵の微笑み',                cat: 'Mouth / 口' },
    { id: 'soft-pout-shy',         jp: '照れむくれ・やわら',          cat: 'Mouth / 口' },
    { id: 'mouth-open-whisper',    jp: '口開き・ささやき',            cat: 'Mouth / 口' },

    // Emotion / 感情
    { id: 'tender-pride',          jp: 'やさしい誇り',                cat: 'Emotion / 感情' },
    { id: 'quiet-joy',             jp: '静かな喜び',                  cat: 'Emotion / 感情' },
    { id: 'fragile-courage',       jp: 'かすかな勇気',                cat: 'Emotion / 感情' },
    { id: 'melting-affection',     jp: 'とろける親愛',                cat: 'Emotion / 感情' },

    // State / 状態
    { id: 'composed-bright',       jp: '明るい平静',                  cat: 'State / 状態' },
    { id: 'hesitant',              jp: 'ためらい',                    cat: 'State / 状態' },
    { id: 'buoyant',               jp: '浮き立つ',                    cat: 'State / 状態' }
  ];

  // group by category
  const map = new Map();
  for (const it of raw) {
    if (!map.has(it.cat)) map.set(it.cat, []);
    map.get(it.cat).push({ id: it.id, label: `${it.jp} / ${it.id}` });
  }
  const categories = Array.from(map.entries()).map(([name, items]) => ({ name, items }));

  // register
  if (typeof g.__registerPromptPart === 'function') {
    g.__registerPromptPart('faith_part20', { categories });
  } else {
    g.__parts = g.__parts || {};
    g.__parts.faith = g.__parts.faith || {};
    g.__parts.faith['faith_part20'] = { categories };
  }
})(window);