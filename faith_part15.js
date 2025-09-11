/* ============================================
   faith_part15.js  (from legacy part15.js expressions)
   形式: window.__registerPromptPart('faith_part15', { categories, presets:[] })
   ============================================ */
(function (g) {
  const categories = [
    {
      name: "Eyes / 目",
      items: [
        { id: "teary-glisten",      label: "涙ぐみの輝き / teary-glisten" },
        { id: "narrow-suspicious",  label: "疑いの細目 / narrow-suspicious" },
        { id: "bright-hopeful",     label: "希望に満ちた瞳 / bright-hopeful" },
        { id: "downcast-soft",      label: "伏し目・やわら / downcast-soft" },
        { id: "sharp-lock-on",      label: "鋭い視線・ロックオン / sharp-lock-on" },
        { id: "wink-tease",         label: "ウィンク・挑発 / wink-tease" },
        { id: "moist-eyes",         label: "しっとり目 / moist-eyes" },
        { id: "glassy-eyes-ruby",   label: "うるみ瞳・ルビー / glassy-eyes-ruby" }
      ]
    },
    {
      name: "Brows / 眉",
      items: [
        { id: "brow-arched-high",   label: "眉・高く弧を描く / brow-arched-high" },
        { id: "brow-knit-deep",     label: "眉間しわ・深 / brow-knit-deep" },
        { id: "brow-soft-relief",   label: "やわら眉・安堵 / brow-soft-relief" }
      ]
    },
    {
      name: "Mouth / 口",
      items: [
        { id: "smile-bright",             label: "明るい笑み / smile-bright" },
        { id: "soft-smirk-shy",           label: "照れニヤリ・やわら / soft-smirk-shy" },
        { id: "press-lips-determined",    label: "口を結ぶ・決意 / press-lips-determined" },
        { id: "open-laugh-soft",          label: "口開き・小さな笑い / open-laugh-soft" }
      ]
    },
    {
      name: "Emotion / 感情",
      items: [
        { id: "spark-joy",          label: "きらめく喜び / spark-joy" },
        { id: "quiet-sadness",      label: "静かな悲しみ / quiet-sadness" },
        { id: "guarded",            label: "用心深い / guarded" },
        { id: "encouraging",        label: "励ます気持ち / encouraging" }
      ]
    },
    {
      name: "State / 状態",
      items: [
        { id: "steady",             label: "ぶれない / steady" },
        { id: "uptempo",            label: "気分高揚 / uptempo" },
        { id: "drained",            label: "消耗 / drained" }
      ]
    }
  ];

  (g.__registerPromptPart || function(){ (g.__parts = g.__parts||{}).faith = (g.__parts.faith||{}); g.__parts.faith["faith_part15"] = {categories, presets:[]}; })("faith_part15", { categories, presets: [] });
})(window);