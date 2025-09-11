/* faith_part35.js — from part37 (Expressions only) */
(function (g) {
  const register = g.__registerPromptPart || function (id, data) {
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  };

  const categories = [
    {
      name: "Expressions / 表情",
      items: [
        { id: "soft-smile-heart", label: "微笑み＋ハート / soft-smile-heart" },
        { id: "heart-spark-eyes", label: "ハートきらめき目 / heart-spark-eyes" }
      ]
    }
  ];

  const presets = []; // 表情側には今回プリセットなし

  register("faith_part35", { categories, presets });
})(window);