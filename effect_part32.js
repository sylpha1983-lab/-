/* effect_part32.js — from part32 (Effects only) */
(function (g) {
  const data = {
    categories: [
      {
        name: "Effects / エフェクト",
        items: [
          { id: "moaning-heart-symbols", label: "うめきハート記号 / moaning-heart-symbols" },
          { id: "whisper-hearts",       label: "ささやきハート / whisper-hearts" },
          { id: "heart-echo",           label: "ハート・エコー / heart-echo" },
        ],
      },
    ],
  };

  (g.__registerEffectPart ||
    function (name, payload) {
      g.__parts = g.__parts || {};
      (g.__parts.effect || (g.__parts.effect = {}))[name] = payload;
    }
  )("effect_part32", data);
})(window);