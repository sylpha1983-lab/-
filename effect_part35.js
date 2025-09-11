// effect_part35.js  v1.0 (2025-09-11)
(function (w) {
  // Metallic Heart Pack → Effectカテゴリ化
  const categories = [
    {
      name: "Effects / エフェクト（Metallic Heart）",
      items: [
        { id: "metallic-hearts", label: "メタリック・ハート / metallic-hearts" },
        { id: "chrome-gloss",    label: "クローム・グロス / chrome-gloss" },
        { id: "specular-spark",  label: "スペキュラ・スパーク / specular-spark" }
      ]
    }
  ];

  // 必須：effectレジストリに登録
  if (w.__registerEffectPart) {
    w.__registerEffectPart("effect_part35", { categories });
  } else {
    // フォールバック（旧互換）
    w.__parts = w.__parts || { effect: {} };
    w.__parts.effect["effect_part35"] = { categories };
  }
})(window);