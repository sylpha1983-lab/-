/* ============================================
   faith_part34.js  (from part36.js)
   - register: __registerPromptPart
   - payload: Expressions only
   ============================================ */
(function (g) {
  const register = g.__registerPromptPart || function(){};

  const categories = [
    {
      name: "Expressions / 表情",
      items: [
        { id: "heart-awe-eyes", label: "ハート目・ときめき / heart-awe-eyes" },
        { id: "blush-tinge",    label: "ほの赤らみ / blush-tinge" }
      ]
    }
  ];

  const presets = []; // expressions 単体なのでプリセットは持たせない

  register("faith_part34", { categories, presets });
})(window);