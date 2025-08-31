// hair_part6.js  ← <script>タグは絶対に入れない
(function (g) {
  g.__registerHairPart('hair_part6', {
    categories: [
      { name: 'Hair / お団子・シニヨン', items: [
        { id:'low-bun',      label:'ローお団子 / low bun' },
        { id:'high-bun',     label:'ハイお団子 / high bun' },
        { id:'double-buns',  label:'おだんごツイン / double buns' },
        { id:'messy-bun',    label:'ゆるお団子 / messy bun' },
        { id:'braided-bun',  label:'編み込みシニヨン / braided bun' }
      ]},
      { name: 'Hair / まとめ髪・夜会巻き', items: [
        { id:'french-twist', label:'夜会巻き / french twist' },
        { id:'chignon',      label:'シニヨン / chignon' },
        { id:'roll-updo',    label:'ロールアップ / roll updo' }
      ]}
    ]
  });
})(window);