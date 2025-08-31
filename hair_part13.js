/* ============================================
   Hair Pack — hair_part13.js
   ============================================ */
(function (g) {
  const data = {
    categories: [
      { name: 'Short / ショート', items: [
        { id: 'bixie-cut-textured',        label: 'ビクシー・テクスチャ / textured bixie cut' },
        { id: 'short-messy-crop',          label: 'ショート・ラフクロップ / short messy crop' },
        { id: 'short-slicked-back',        label: 'オールバック・ショート / short slicked back' }
      ]},
      { name: 'Medium / ミディアム', items: [
        { id: 'midi-air-bob',              label: 'エアボブ / air bob (midi)' },
        { id: 'midi-curl-ends',            label: '毛先くるん / curled ends (midi)' },
        { id: 'midi-wolf-layer',           label: 'ミディウルフレイヤー / midi wolf layer' }
      ]},
      { name: 'Long / ロング', items: [
        { id: 'long-korean-c-layer',       label: '韓国Cカール層 / korean C-layer long' },
        { id: 'long-swan-neck',            label: 'スワンネックライン / swan neck long' },
        { id: 'long-ribbon-tie',           label: 'リボンタイ・ロング / ribbon-tie long' }
      ]},
      { name: 'Bangs / 前髪', items: [
        { id: 'curtain-bangs-soft',        label: 'カーテンバング・やわ / soft curtain bangs' },
        { id: 'arched-bangs',              label: 'アーチ前髪 / arched bangs' }
      ]},
      { name: 'Braids & Updos / 編み・まとめ髪', items: [
        { id: 'messy-top-bun',             label: 'ラフお団子トップ / messy top bun' },
        { id: 'double-dutch-braids',       label: 'ダッチ二本編み / double dutch braids' },
        { id: 'low-twist-chignon',         label: '低めツイストシニヨン / low twist chignon' }
      ]},
      { name: 'Color & Accents / 色・アクセント', items: [
        { id: 'rose-brown',                label: 'ローズブラウン / rose brown' },
        { id: 'chocolate-brown-gloss',     label: 'ショコラ艶ブラウン / chocolate brown gloss' },
        { id: 'lavender-gray',             label: 'ラベンダーグレー / lavender gray' }
      ]}
    ]
  };

  if (g.__registerHairPart) g.__registerHairPart('hair_part13', data);
  else { g.hairParts = g.hairParts || {}; g.hairParts['hair_part13'] = data; }
})(window);