/* part60.js v1.0 (2025-09-03) */
// 怒：段階・視線・口元バリエーション
window.__registerPromptPart("part60", {
  categories: [
    {
      name: "Expressions / 表情",
      items: [
        { id: "angry-soft", label: "不満げ（弱） / angry-soft" },
        { id: "angry-medium", label: "怒り（中） / angry-medium" },
        { id: "angry-furious", label: "激怒（強） / angry-furious" },
        { id: "glare-forward", label: "正面への鋭いにらみ / glare-forward" },
        { id: "glare-side-eye", label: "ジト目（横目） / glare-side-eye" },
        { id: "brow-furrow", label: "眉間にしわ / brow-furrow" },
        { id: "jaw-clench", label: "食いしばり / jaw-clench" },
        { id: "teeth-grit", label: "歯ぎしり / teeth-grit" },
        { id: "pout-anger", label: "むくれ（怒） / pout-anger" },
        { id: "vein-popping", label: "怒りマーク・こめかみ血管 / vein-popping" }
      ]
    }
  ],
  presets: [
    {
      id: "anger-staged",
      label: "怒：段階セット",
      tags: ["angry-soft", "angry-medium", "angry-furious"]
    },
    {
      id: "anger-glare-pack",
      label: "怒：にらみ特化",
      tags: ["glare-forward", "glare-side-eye", "brow-furrow"]
    }
  ]
});