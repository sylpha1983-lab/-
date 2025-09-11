<!-- faith_part28.js -->
<script>
/* part28: Expressions -> faith (Ice & Snow) */
(function () {
  const categories = [
    {
      name: "Expressions / 表情（Ice & Snow）",
      items: [
        { id: "cool-composure",     label: "クールな平静 / cool-composure" },
        { id: "frosty-gaze",        label: "氷の視線 / frosty-gaze" },
        { id: "crystal-smile",      label: "結晶の微笑み / crystal-smile" },
        { id: "winter-melancholy",  label: "冬の憂い / winter-melancholy" },
        { id: "hazy-breath-soft",   label: "白息・やわら / hazy-breath-soft" },
        { id: "sparkling-joy",      label: "きらめく喜び / sparkling-joy" }
      ]
    }
  ];

  // presetsはここには入れず、presets_part28.jsに分離（仕様どおり）
  window.__registerPromptPart && window.__registerPromptPart("faith_part28", { categories, presets: [] });
})();
</script>