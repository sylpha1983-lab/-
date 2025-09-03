/* part88.js v1.0 (2025-09-03) */
// 哀＋喜：強がりどや顔・涙混じりの優越感
window.__registerPromptPart("part88", {
  categories: [
    {
      name: "Expressions / 表情",
      items: [
        { id: "tearful-smug", label: "涙混じりのどや顔 / tearful-smug" },
        { id: "brave-smile", label: "強がりの笑み / brave-smile" },
        { id: "smug-through-tears", label: "涙越しのどや顔 / smug-through-tears" },
        { id: "defiant-sad-smirk", label: "哀しみの反抗的どや顔 / defiant-sad-smirk" },
        { id: "sorrowful-pride", label: "哀しみを抱えた誇り / sorrowful-pride" },
        { id: "painful-grin", label: "痛みを隠す笑み / painful-grin" },
        { id: "bittersweet-smug", label: "ほろ苦いどや顔 / bittersweet-smug" },
        { id: "fragile-smile", label: "壊れそうな笑み / fragile-smile" }
      ]
    }
  ],
  presets: [
    {
      id: "sad-smug-pack",
      label: "哀：強がりどや顔セット",
      tags: ["tearful-smug", "brave-smile", "smug-through-tears"]
    },
    {
      id: "sad-bittersweet-pack",
      label: "哀：ほろ苦い誇り",
      tags: ["bittersweet-smug", "sorrowful-pride", "fragile-smile"]
    }
  ]
});