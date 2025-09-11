/* ============================================
   faith_part17.js  (from part17.js expressions)
   登録先: window.__registerPromptPart("faith_part17", data)
   形式: { categories:[{name, items:[{id,label}]}], presets:[] }
   ============================================ */
(function (w) {
  w.__registerPromptPart = w.__registerPromptPart || function(){ console.warn("__registerPromptPart is not defined"); };

  const srcExpressions = [
    { id: 'half-lid-sleepy', jp: '眠そう半目', category: 'Eyes / 目' },
    { id: 'blink-slow', jp: 'ゆっくり瞬き', category: 'Eyes / 目' },
    { id: 'wide-alert', jp: '見開き・警戒', category: 'Eyes / 目' },
    { id: 'gaze-distant', jp: '遠い視線', category: 'Eyes / 目' },
    { id: 'teary-shine', jp: '涙ぐむ輝き', category: 'Eyes / 目' },
    { id: 'wink-playful', jp: 'ウィンク・茶目っ気', category: 'Eyes / 目' },

    { id: 'brow-raised-high', jp: '大きく上げた眉', category: 'Brows / 眉' },
    { id: 'brow-soft-relief', jp: '安心の緩み眉', category: 'Brows / 眉' },
    { id: 'brow-tilt-confused', jp: '傾き眉・困惑', category: 'Brows / 眉' },

    { id: 'smirk-sly', jp: 'にやり・ずるい', category: 'Mouth / 口' },
    { id: 'whisper-mouth', jp: '口元・ささやき', category: 'Mouth / 口' },
    { id: 'yawn-small', jp: '小さなあくび', category: 'Mouth / 口' },
    { id: 'tongue-out-tease', jp: '舌出し・からかい', category: 'Mouth / 口' },

    { id: 'bashful', jp: '照れくさい', category: 'Emotion / 感情' },
    { id: 'awed', jp: '畏敬・感嘆', category: 'Emotion / 感情' },
    { id: 'mischievous', jp: 'いたずら心', category: 'Emotion / 感情' },
    { id: 'suspicious-calm', jp: '疑念・冷静', category: 'Emotion / 感情' },

    { id: 'daydreaming', jp: '白昼夢', category: 'State / 状態' },
    { id: 'energized', jp: '元気いっぱい', category: 'State / 状態' },
    { id: 'drained', jp: '疲れ果て', category: 'State / 状態' },
    { id: 'serene', jp: '穏やか', category: 'State / 状態' }
  ];

  // カテゴリごとにまとめる
  const byCat = {};
  for (const e of srcExpressions) {
    const name = e.category || 'Misc';
    if (!byCat[name]) byCat[name] = [];
    byCat[name].push({ id: e.id, label: `${e.jp} / ${e.id}` });
  }

  const categories = Object.keys(byCat).map(name => ({
    name,
    items: byCat[name]
  }));

  const data = { categories, presets: [] };
  w.__registerPromptPart("faith_part17", data);
})(window);