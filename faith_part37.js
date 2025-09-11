/* faith_part37.js
   Heart/Smile pack for faith category
   - 登録方式: window.__registerPromptPart("faith_part37", data)
   - 構造: { categories:[{ name, items:[{id,label}] }], presets:[{ id,label,tags[] }] }
*/
(function (g) {
  // 最低限の互換ブリッジ（環境により未定義のときでも落ちないように）
  if (!g.__registerPromptPart) {
    g.__registerPromptPart = function (name, data) {
      g.__parts = g.__parts || { faith: {} };
      g.__parts.faith = g.__parts.faith || {};
      // ローダは "faith_partN" を見る想定なので name をそのままキーに
      g.__parts.faith[name.replace("faith_part", "")] = data;
    };
  }

  const categories = [
    {
      name: "Expressions / 表情",
      items: [
        { id: "heart-kiss-face", label: "投げキス・ハート / heart-kiss-face" },
        { id: "smile-bright",    label: "明るい微笑み / smile-bright" }
      ]
    },
    {
      name: "Effects / エフェクト",
      items: [
        { id: "kiss-hearts",  label: "キス・ハート / kiss-hearts" },
        { id: "heart-trails", label: "ハートの軌跡 / heart-trails" },
        { id: "glow-warm",    label: "ウォーム発光 / glow-warm" }
      ]
    }
  ];

  const presets = [
    {
      id: "Kiss-Heart-Trails",
      label: "キス・ハートの軌跡 / Kiss-Heart-Trails",
      tags: ["kiss-hearts", "heart-trails", "glow-warm"]
    }
  ];

  g.__registerPromptPart("faith_part37", { categories, presets });
})(window);