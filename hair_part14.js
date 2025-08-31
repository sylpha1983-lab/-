/* ============================================
   Hair Pack — hair_part14.js
   ============================================ */
(function (g) {
  const data = {
    categories: [
      { name: 'Short / ショート', items: [
        { id: 'short-bubble-perm',         label: 'バブルパーマ短髪 / short bubble perm' },
        { id: 'short-soft-mullet',         label: 'ソフトマレット / short soft mullet' },
        { id: 'short-rounded-bob',         label: '丸みボブ・短め / short rounded bob' }
      ]},
      { name: 'Medium / ミディアム', items: [
        { id: 'midi-bounce-wave',          label: '弾む波ミディ / midi bounce wave' },
        { id: 'midi-straight-center',      label: 'ミディ・センターストレート / midi center straight' },
        { id: 'midi-half-up-ribbon',       label: 'ハーフアップ・リボン / midi half-up ribbon' }
      ]},
      { name: 'Long / ロング', items: [
        { id: 'long-kimono-straight',      label: '和装ストレート / kimono straight long' },
        { id: 'long-rolled-curl',          label: 'ロング・大きめロール / long rolled curl' },
        { id: 'long-side-pony',            label: 'サイドポニー・ロング / long side ponytail' }
      ]},
      { name: 'Bangs / 前髪', items: [
        { id: 'micro-bangs-arched',        label: 'マイクロアーチ前髪 / micro arched bangs' },
        { id: 'wispy-bangs',               label: 'ウィスピーバング / wispy bangs' }
      ]},
      { name: 'Braids & Updos / 編み・まとめ髪', items: [
        { id: 'braid-ponytail-high',       label: '編み込みハイポニー / high braided ponytail' },
        { id: 'waterfall-braid',           label: 'ウォーターフォール編み / waterfall braid' },
        { id: 'elegant-updo-knot',         label: 'エレガント結い / elegant updo knot' }
      ]},
      { name: 'Color & Accents / 色・アクセント', items: [
        { id: 'wine-red-gloss',            label: 'ワインレッド艶 / wine red gloss' },
        { id: 'sunset-ombre',              label: 'サンセット・グラデ / sunset ombré' },
        { id: 'gold-foil-accent',          label: '金箔アクセント / gold foil accent' }
      ]}
    ]
  };

  if (g.__registerHairPart) g.__registerHairPart('hair_part14', data);
  else { g.hairParts = g.hairParts || {}; g.hairParts['hair_part14'] = data; }
})(window);