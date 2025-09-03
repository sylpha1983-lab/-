/* part83.js v1.0 (2025-09-03) */
// 哀：罪に縛られた哀しみ・懺悔
window.__registerPromptPart("part83", {
  categories: [
    {
      name: "Expressions / 表情",
      items: [
        { id: "penitent-look", label: "懺悔のまなざし / penitent-look" },
        { id: "repentant-tears", label: "悔恨の涙 / repentant-tears" },
        { id: "kneel-remorse", label: "ひざまずく後悔 / kneel-remorse" },
        { id: "prayerful-sad", label: "祈るような哀しみ / prayerful-sad" },
        { id: "confession-gaze", label: "告白の眼差し / confession-gaze" },
        { id: "burdened-expression", label: "罪に押し潰された表情 / burdened-expression" },
        { id: "ashamed-sorrow", label: "恥じ入る哀しみ / ashamed-sorrow" },
        { id: "seeking-forgiveness", label: "許しを乞う表情 / seeking-forgiveness" }
      ]
    }
  ],
  presets: [
    {
      id: "sad-repent-pack",
      label: "哀：懺悔セット",
      tags: ["penitent-look", "repentant-tears", "kneel-remorse"]
    },
    {
      id: "sad-forgiveness-pack",
      label: "哀：許しを乞う",
      tags: ["seeking-forgiveness", "prayerful-sad", "ashamed-sorrow"]
    }
  ]
});