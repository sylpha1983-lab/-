/* ============================================
   presets_part15.js  (from legacy part15.js presets)
   形式: window.__registerPresetPart('presets_part15', { presets })
   ※ expressions/effects を tags に統合
   ============================================ */
(function (g) {
  const presets = [
    {
      id: "Hopeful-WarmBloom",
      label: "希望と暖色ブルーム",
      tags: ["bright-hopeful","smile-bright","brow-arched-high","encouraging","bloom-warm","catchlight-star","vignette-soft-ring"]
    },
    {
      id: "Guarded-LockOn",
      label: "用心とロックオン視線",
      tags: ["guarded","sharp-lock-on","press-lips-determined","brow-knit-deep","rim-light-edge","impact-lines-needle","tone-microdots"]
    },
    {
      id: "Quiet-Sad-Teary",
      label: "静かな悲しみ・涙の光",
      tags: ["quiet-sadness","downcast-soft","teary-glisten","catchlight-tear","under-eye-softcrease","mist-softline"]
    },
    {
      id: "Uptempo-Starfall",
      label: "高揚・スターフォール",
      tags: ["uptempo","wink-tease","soft-smirk-shy","sparkle-starfall","speed-lines-sheer","lens-ghost-fine"]
    },
    {
      id: "Steady-Noir-Ruby",
      label: "ぶれない・ノワール紅玉",
      tags: ["steady","glassy-eyes-ruby","press-lips-determined","vignette","rim-light-edge","pollen-glow"]
    },
    {
      id: "Drained-RainSheen",
      label: "消耗と雨の膜光",
      tags: ["drained","moist-eyes","brow-soft-relief","rain-sheen","snow-softsheet","impact-lines-arcwide"]
    }
  ];

  (g.__registerPresetPart || function(){ (g.__parts = g.__parts||{}).presets = (g.__parts.presets||{}); g.__parts.presets["presets_part15"] = {presets}; })("presets_part15", { presets });
})(window);