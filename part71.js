/* part71.js v1.0 (2025-09-03) */
// 哀：罪悪感・自責・後悔
window.__registerPromptPart("part71", {
  categories: [
    {
      name: "Expressions / 表情",
      items: [
        { id: "guilt-look", label: "罪悪感に満ちた視線 / guilt-look" },
        { id: "remorseful", label: "後悔の表情 / remorseful" },
        { id: "self-blame", label: "自分を責める / self-blame" },
        { id: "apologetic-sad", label: "謝罪の哀しみ / apologetic-sad" },
        { id: "regret-tears", label: "後悔の涙 / regret-tears" },
        { id: "downcast-remorse", label: "後悔に伏し目 / downcast-remorse" },
        { id: "hand-cover-mouth", label: "口を覆う後悔 / hand-cover-mouth" },
        { id: "silent-guilt", label: "沈黙の罪悪感 / silent-guilt" }
      ]
    }
  ],
  presets: [
    {
      id: "sad-guilt-pack",
      label: "哀：罪悪感セット",
      tags: ["guilt-look", "self-blame", "silent-guilt"]
    },
    {
      id: "sad-regret-pack",
      label: "哀：後悔セット",
      tags: ["remorseful", "regret-tears", "downcast-remorse"]
    }
  ]
});