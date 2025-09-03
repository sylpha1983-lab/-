/* part66.js v1.0 (2025-09-03) */
// 怒：狂気・憤怒・暴走
window.__registerPromptPart("part66", {
  categories: [
    {
      name: "Expressions / 表情",
      items: [
        { id: "rage-madness", label: "狂気の怒り / rage-madness" },
        { id: "rage-uncontrollable", label: "抑えられぬ怒り / rage-uncontrollable" },
        { id: "rage-berserk", label: "憤怒・暴走 / rage-berserk" },
        { id: "scream-anger", label: "怒号・叫び / scream-anger" },
        { id: "snarl-wild", label: "獣のような唸り / snarl-wild" },
        { id: "eyes-bloodshot", label: "血走った目 / eyes-bloodshot" },
        { id: "teeth-bared", label: "歯をむき出す / teeth-bared" },
        { id: "foaming-rage", label: "泡を吹く怒り / foaming-rage" }
      ]
    }
  ],
  presets: [
    {
      id: "anger-berserk-pack",
      label: "怒：暴走セット",
      tags: ["rage-berserk", "scream-anger", "eyes-bloodshot"]
    },
    {
      id: "anger-madness-pack",
      label: "怒：狂気セット",
      tags: ["rage-madness", "snarl-wild", "foaming-rage"]
    }
  ]
});