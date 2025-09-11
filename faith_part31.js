<script>
/* Hearts Pack I — faith_part31.js
   元 part31.js の「Expressions / 表情」だけを登録 */
(function(){
  const categories = [
    {
      name: 'Expressions / 表情',
      items: [
        { id:'heart-eyed-soft',       label:'ハート目・やわら / heart-eyed (soft)' },
        { id:'heart-eyed-bright',     label:'ハート目・きらきら / heart-eyed (bright)' },
        { id:'smile-heart-corner',    label:'口角ハート気味スマイル / heart-corner smile' },
        { id:'pout-heart-shy',        label:'ハート気味むくれ・照れ / heartish shy pout' },
        { id:'blush-heart',           label:'ハートチーク・赤らめ / heart blush' },
        { id:'wink-heart',            label:'ウィンク・ハート / heart wink' },
        { id:'gaze-heart-softdown',   label:'ハート気味の伏し目 / heart-soft downward gaze' },
        { id:'sparkle-heart-tear',    label:'涙縁にハートきら / heart-sparkle tearline' },
        { id:'kissy-heart-mouth',     label:'ハート投げキス口 / kissy heart mouth' },
        { id:'flutter-heart-breath',  label:'ときめき息づかい / fluttering heart breath' }
      ]
    }
  ];

  // 仕様通り：faith は __registerPromptPart
  if (typeof window.__registerPromptPart === 'function') {
    window.__registerPromptPart('faith_part31', { categories, presets: [] });
  } else {
    // 互換フォールバック
    window.__parts = window.__parts || { faith:{} };
    window.__parts.faith = window.__parts.faith || {};
    window.__parts.faith[31] = { categories, presets: [] };
  }
})();
</script>