/* part78.js v1.0 (2025-09-03) */
// 怒：裏切りに対する怒り
window.__registerPromptPart("part78", {
  categories: [
    {
      name: "Expressions / 表情",
      items: [
        { id: "betrayal-rage", label: "裏切りへの激怒 / betrayal-rage" },
        { id: "shock-anger", label: "衝撃と怒り / shock-anger" },
        { id: "hurt-anger", label: "傷ついた怒り / hurt-anger" },
        { id: "grief-rage", label: "悲しみ混じりの怒り / grief-rage" },
        { id: "accusatory-glare", label: "糾弾するにらみ / accusatory-glare" },
        { id: "disbelief-fury", label: "信じられない怒り / disbelief-fury" },
        { id: "vengeful-cry", label: "復讐の叫び / vengeful-cry" },
        { id: "broken-trust", label: "信頼を失った怒り / broken-trust" }
      ]
    }
  ],
  presets: [
    {
      id: "anger-betrayal-pack",
      label: "怒：裏切りセット",
      tags: ["betrayal-rage", "shock-anger", "broken-trust"]
    },
    {
      id: "anger-hurt-pack",
      label: "怒：傷ついた怒り",
      tags: ["hurt-anger", "grief-rage", "accusatory-glare"]
    }
  ]
});