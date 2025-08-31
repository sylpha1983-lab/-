/* ============================================
   Hair Pack — hair_part11.js
   形式: __registerHairPart('hair_part11', {categories:[...]} )
   ============================================ */
(function (g) {
  const data = {
    categories: [
      { name: 'Short / ショート', items: [
        { id: 'short-hime-cut',            label: 'ショート姫カット / short hime cut' },
        { id: 'pixie-micro-fringe',        label: 'ピクシー・マイクロ前髪 / pixie micro fringe' },
        { id: 'short-wolf-bob',            label: 'ショートウルフボブ / short wolf bob' },
        { id: 'nape-short-tucked',         label: 'うなじ見せタック / nape-short tucked' },
        { id: 'baby-bob-straight',         label: 'ベイビーボブ（ストレート） / baby bob straight' }
      ]},
      { name: 'Medium / ミディアム', items: [
        { id: 'midi-layered-shag',         label: 'ミディ・レイヤーシャグ / midi layered shag' },
        { id: 'midi-lob-inward',           label: 'ミディ・内巻きロブ / midi inward lob' },
        { id: 'midi-wavy-airy',            label: 'ミディ・ふわ波 / midi wavy airy' },
        { id: 'midi-half-up-twist',        label: 'ミディ・ハーフアップねじり / midi half-up twist' }
      ]},
      { name: 'Long / ロング', items: [
        { id: 'long-hime-heavy',           label: 'ロング姫カット（重め） / long hime heavy' },
        { id: 'long-mermaid-wave',         label: '人魚ウェーブ / mermaid wave long' },
        { id: 'long-straight-sleek',       label: 'ロング・超ストレート / long sleek straight' },
        { id: 'long-outer-curl',           label: '毛先外ハネ / outward curled tips (long)' }
      ]},
      { name: 'Bangs / 前髪', items: [
        { id: 'see-through-bangs',         label: 'シースルーバング / see-through bangs' },
        { id: 'straight-full-bangs',       label: 'ぱっつんフルバング / straight full bangs' },
        { id: 'side-swept-bangs',          label: '流し前髪 / side-swept bangs' }
      ]},
      { name: 'Braids & Updos / 編み・まとめ髪', items: [
        { id: 'mini-braid-sides',          label: 'サイド極細編み / mini braid sides' },
        { id: 'low-bun-loose',             label: 'ゆる低めお団子 / loose low bun' },
        { id: 'space-buns-neat',           label: '二つ団子・整え / space buns neat' }
      ]},
      { name: 'Color & Accents / 色・アクセント', items: [
        { id: 'inner-color-peek',          label: 'インナーカラー・チラ見せ / inner color peek' },
        { id: 'two-tone-soft-contrast',    label: 'ツートン・やわコントラスト / two-tone soft contrast' },
        { id: 'face-framing-highlights',   label: '顔まわりハイライト / face-framing highlights' }
      ]}
    ]
  };

  if (g.__registerHairPart) g.__registerHairPart('hair_part11', data);
  else { g.hairParts = g.hairParts || {}; g.hairParts['hair_part11'] = data; }
})(window);