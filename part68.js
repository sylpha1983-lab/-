/* part68.js v1.0 (2025-09-03) */
// 哀：恐怖と悲しみのパニック表情
window.__registerPromptPart("part68", {
  categories: [
    {
      name: "Expressions / 表情",
      items: [
        { id: "panic-sorrow", label: "パニックの哀しみ / panic-sorrow" },
        { id: "dread-sad", label: "恐怖混じりの哀しみ / dread-sad" },
        { id: "crying-hysterical", label: "取り乱した泣き / crying-hysterical" },
        { id: "screaming-sad", label: "悲鳴に近い泣き / screaming-sad" },
        { id: "trembling-sad", label: "恐怖に震える哀 / trembling-sad" },
        { id: "wide-eyes-tears", label: "涙目で見開く / wide-eyes-tears" },
        { id: "clingy-cry", label: "縋りつく泣き / clingy-cry" },
        { id: "begging-sad", label: "懇願する哀しみ / begging-sad" }
      ]
    }
  ],
  presets: [
    {
      id: "sad-panic-pack",
      label: "哀：パニック哀しみセット",
      tags: ["panic-sorrow", "crying-hysterical", "wide-eyes-tears"]
    },
    {
      id: "sad-dread-pack",
      label: "哀：恐怖混じり",
      tags: ["dread-sad", "trembling-sad", "begging-sad"]
    }
  ]
});