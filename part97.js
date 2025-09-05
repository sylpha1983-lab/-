/* part97.js v1.0 (2025-09-03) */
// 喜＋哀：泣き笑いどや顔
window.__registerPromptPart("part97", {
  categories: [
    {
      name: "Expressions / 表情",
      items: [
        { id: "tearful-smug", label: "涙ぐむどや顔 / tearful-smug" },
        { id: "bittersweet-grin", label: "ほろ苦いどや顔 / bittersweet-grin" },
        { id: "smiling-through-tears", label: "涙越しの笑み / smiling-through-tears" },
        { id: "joyful-sad-smirk", label: "嬉し泣きのどや顔 / joyful-sad-smirk" },
        { id: "relieved-teary-smile", label: "安堵の涙笑顔 / relieved-teary-smile" },
        { id: "proud-tears", label: "誇らしげな涙 / proud-tears" },
        { id: "fragile-smug", label: "壊れそうなどや顔 / fragile-smug" },
        { id: "nostalgic-smile", label: "懐かしさに涙する笑顔 / nostalgic-smile" }
      ]
    }
  ],
  presets: [
    {
      id: "smug-tearful-pack",
      label: "喜哀：泣き笑いセット",
      tags: ["tearful-smug", "smiling-through-tears", "relieved-teary-smile"]
    },
    {
      id: "smug-bittersweet-pack",
      label: "喜哀：ほろ苦どや顔",
      tags: ["bittersweet-grin", "fragile-smug", "nostalgic-smile"]
    }
  ]
});