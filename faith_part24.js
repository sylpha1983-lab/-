<!-- faith_part24.js -->
<script>
/* part24 → faith（expressions）正規化登録 */
(function(){
  const categoriesMap = {
    "Mouth / 口":"口元系",
    "Emotion / 感情":"感情系",
    "State / 状態":"状態系"
  };

  const expressions = [
    { id:'playful-bubble-kiss',   jp:'遊び心・バブルキス',       category:'Mouth / 口' },
    { id:'awe-heart-sky',         jp:'見上げる驚き・ハート空',   category:'Emotion / 感情' },
    { id:'serene-ocean-love',     jp:'穏やかな海風・想い',       category:'State / 状態' },
    { id:'nostalgic-fog-heart',   jp:'ノスタルジア・霧のハート', category:'Emotion / 感情' },
    { id:'festive-firework-smile',jp:'祝祭・花火の微笑み',       category:'Emotion / 感情' }
  ];

  // カテゴリごとにまとめ直し
  const grouped = {};
  for (const e of expressions){
    const key = categoriesMap[e.category] || e.category || "その他";
    (grouped[key] = grouped[key] || []).push({
      id: e.id,
      label: `${e.jp} / ${e.id}`
    });
  }

  const categories = Object.keys(grouped).map(name => ({
    name, items: grouped[name]
  }));

  // レジストリ登録
  window.__registerPromptPart?.('faith_part24', { categories, presets: [] });
})();
</script>