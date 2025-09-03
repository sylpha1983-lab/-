/* part61.js v1.0 (2025-09-03) */
// 哀：涙・視線・口元の微細化
window.__registerPromptPart("part61", {
  categories: [
    {
      name: "Expressions / 表情",
      items: [
        { id: "sad-soft", label: "物悲しい（弱） / sad-soft" },
        { id: "sad-deep", label: "深い悲しみ / sad-deep" },
        { id: "downcast-eyes", label: "伏し目がち / downcast-eyes" },
        { id: "teary-eyes", label: "うるんだ瞳 / teary-eyes" },
        { id: "single-tear", label: "片目に一筋の涙 / single-tear" },
        { id: "tear-pool", label: "涙がたまる / tear-pool" },
        { id: "sob-quiet", label: "静かなすすり泣き / sob-quiet" },
        { id: "pout-sad", label: "口を尖らせた哀しみ / pout-sad" },
        { id: "trembling-lip", label: "震える唇 / trembling-lip" },
        { id: "melancholy-smile", label: "かなしげな微笑 / melancholy-smile" }
      ]
    }
  ],
  presets: [
    {
      id: "sad-tears-pack",
      label: "哀：涙バリエーション",
      tags: ["teary-eyes", "single-tear", "tear-pool"]
    },
    {
      id: "sad-soft-pack",
      label: "哀：ソフト表情",
      tags: ["sad-soft", "downcast-eyes", "melancholy-smile"]
    }
  ]
});