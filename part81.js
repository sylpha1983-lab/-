/* part81.js v1.0 (2025-09-03) */
// 怒：軽蔑・侮蔑・見下し
window.__registerPromptPart("part81", {
  categories: [
    {
      name: "Expressions / 表情",
      items: [
        { id: "scornful-smile", label: "軽蔑の笑み / scornful-smile" },
        { id: "disdainful-look", label: "侮蔑の視線 / disdainful-look" },
        { id: "mocking-grin", label: "嘲笑の笑み / mocking-grin" },
        { id: "sneer-anger", label: "鼻で笑う怒り / sneer-anger" },
        { id: "derisive-smirk", label: "あざけりの笑み / derisive-smirk" },
        { id: "condescending-gaze", label: "見下す眼差し / condescending-gaze" },
        { id: "dismissive-look", label: "突き放す視線 / dismissive-look" },
        { id: "arrogant-smile", label: "傲慢な笑み / arrogant-smile" }
      ]
    }
  ],
  presets: [
    {
      id: "anger-contempt-pack",
      label: "怒：軽蔑セット",
      tags: ["scornful-smile", "disdainful-look", "mocking-grin"]
    },
    {
      id: "anger-scorn-pack",
      label: "怒：見下しセット",
      tags: ["sneer-anger", "condescending-gaze", "arrogant-smile"]
    }
  ]
});