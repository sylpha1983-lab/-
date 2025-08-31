window.hair_part10 = {
  categories: [
    {
      name: "特殊ヘアスタイル",
      items: [
        { id: "drill-hair", label: "縦ロール" },
        { id: "shaved-side", label: "片側刈り上げ" },
        { id: "afro", label: "アフロ" }
      ]
    }
  ],
  presets: [
    {
      id: "drill-hair-princess",
      label: "姫縦ロール",
      tags: ["drill-hair", "princess"]
    },
    {
      id: "shaved-side-cool",
      label: "クール片側刈り上げ",
      tags: ["shaved-side", "cool"]
    }
  ]
};

window.__registerPromptPart('hair_part10', window.hair_part10);