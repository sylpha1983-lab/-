/* ============================================
   Hair Pack — hair_part15.js
   ============================================ */
(function (g) {
  const data = {
    categories: [
      { name: 'Short / ショート', items: [
        { id: 'short-fluffy-wolf',         label: 'ふわウルフショート / fluffy wolf short' },
        { id: 'short-c-line-bob',          label: 'Cラインショートボブ / C-line short bob' },
        { id: 'short-hairband-casual',     label: 'ヘアバンド・ショート / short hairband casual' }
      ]},
      { name: 'Medium / ミディアム', items: [
        { id: 'midi-spiral-perm',          label: 'ミディ・スパイラル / midi spiral perm' },
        { id: 'midi-outer-flip',           label: '外ハネミディ / midi outer flip' },
        { id: 'midi-girly-curl',           label: 'ガーリーカール / girly curl midi' }
      ]},
      { name: 'Long / ロング', items: [
        { id: 'long-princess-curl',        label: 'プリンセスカール / princess curl long' },
        { id: 'long-butterfly-layer',      label: 'バタフライレイヤー / butterfly layered long' },
        { id: 'long-high-pony-ribbon',     label: 'ハイポニー・リボン / high pony with ribbon' }
      ]},
      { name: 'Bangs / 前髪', items: [
        { id: 'long-bangs-parted',         label: 'ロング前髪・分け目 / long parted bangs' },
        { id: 'choppy-bangs',              label: 'チョッピーバング / choppy bangs' }
      ]},
      { name: 'Braids & Updos / 編み・まとめ髪', items: [
        { id: 'bubble-braid',              label: 'バブル三つ編み / bubble braid' },
        { id: 'twintail-ribbon',           label: 'ツインテ・リボン / ribboned twintails' },
        { id: 'braid-bun-hybrid',          label: '編み込み＋お団子 / braid-bun hybrid' }
      ]},
      { name: 'Color & Accents / 色・アクセント', items: [
        { id: 'pearl-ash',                 label: 'パールアッシュ / pearl ash' },
        { id: 'cherry-cola',               label: 'チェリーコーラ / cherry cola' },
        { id: 'holo-streaks',              label: 'ホロストリーク / holographic streaks' }
      ]}
    ]
  };

  if (g.__registerHairPart) g.__registerHairPart('hair_part15', data);
  else { g.hairParts = g.hairParts || {}; g.hairParts['hair_part15'] = data; }
})(window);