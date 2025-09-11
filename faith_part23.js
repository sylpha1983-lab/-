<!-- faith_part23.js (from part23) -->
<script>
(function (g) {
  // 既定のレジストリAPIに登録
  if (typeof g.__registerPromptPart !== 'function') {
    g.__parts = g.__parts || {};
    g.__parts.faith = g.__parts.faith || {};
    g.__registerPromptPart = (name, data) => { g.__parts.faith[name] = data; };
  }

  // 旧 part23 の expressions を「表情」カタログとして登録
  const categories = [
    {
      name: '表情（ハート＆可憐テイスト）',
      items: [
        { id:'cheek-heart-blush',     label:'頬チーク・ハート / cheek-heart-blush' },
        { id:'eyes-catchlight-heart', label:'瞳キャッチライト・ハート / eyes-catchlight-heart' },
        { id:'smile-sweet-candy',     label:'微笑み・キャンディ / smile-sweet-candy' },
        { id:'bashful-ribbon-tilt',   label:'照れ・リボン頭傾き / bashful-ribbon-tilt' },
        { id:'fond-melt-choco',       label:'親愛・とろけチョコ / fond-melt-choco' },
        { id:'glossy-lip-heartshine', label:'リップ光沢・ハート煌き / glossy-lip-heartshine' },
        { id:'dreamy-heart-drift',    label:'うっとり・ハート漂い / dreamy-heart-drift' },
        { id:'spark-sugar-eyes',      label:'砂糖きらめきの瞳 / spark-sugar-eyes' }
      ]
    }
  ];

  const data = { categories, presets: [] };
  g.__registerPromptPart('faith_part23', data);
})(window);
</script>