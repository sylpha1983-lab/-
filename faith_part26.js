/* faith_part26.js — Nature & Botany（旧 part26 の表情） */
(function (g) {
  const src = (g && g.__parts && g.__parts.faith) ? g.__parts.faith : null;

  // 旧データの expressions を categories へ整形
  const byCat = {};
  [
    { id:'fresh-breath-relief', jp:'深呼吸の安堵',           cat:'Emotion / 感情' },
    { id:'sun-kissed-smile',    jp:'陽だまり微笑',           cat:'Emotion / 感情' },
    { id:'forest-calm',         jp:'森の静けさ',             cat:'State / 状態' },
    { id:'breeze-delight',      jp:'風を楽しむ',             cat:'Emotion / 感情' },
    { id:'petal-curiosity',     jp:'花びらへの好奇',         cat:'Emotion / 感情' },
    { id:'dew-gentleness',      jp:'朝露のやさしさ',         cat:'Emotion / 感情' },
    { id:'rain-soothed',        jp:'小雨に癒やされる',       cat:'State / 状態' }
  ].forEach(e=>{
    (byCat[e.cat] ||= []).push({ id: e.id, label: `${e.jp} / ${e.id}` });
  });

  const categories = Object.keys(byCat).map(name => ({ name, items: byCat[name] }));

  // faith 用パッケージ
  const data = { categories, presets: [] };

  // UMD登録（仕様固定）
  (g.__registerPromptPart || function(){ console.warn('registerPromptPart missing'); })('faith_part26', data);
})(window);