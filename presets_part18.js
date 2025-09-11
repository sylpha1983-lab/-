/* presets_part18.js — v1.0 (split from part18) */
(function () {
  const presets = [
    {
      id: "Tender-KissLight",
      label: "やさしさ・キスライト",
      tags: ["tenderness","smile-shy-closed","half-lidded-smile","brow-soft-plead","kiss-light","eyelight-softbar","glimmer-dust"]
    },
    {
      id: "Overflow-Teary-Ring",
      label: "涙あふれ・薄リング",
      tags: ["teary-overflow","lip-tremble","soft-squint","halo-ring-thin","soft-chromatic","tone-softgrain"]
    },
    {
      id: "Radiant-Backglow",
      label: "輝く喜び・背面グロー",
      tags: ["radiant-joy","smile-shy-closed","gaze-tilt-up","backglow-warm","soft-spark-points","impact-spark-lines"]
    },
    {
      id: "SoftMelancholy-MistRibbon",
      label: "やわ憂い・霧のリボン",
      tags: ["melancholy-soft","downcast-soft","pout-tiny","mist-ribbon","wave-lines-soft","narrative-frame"]
    },
    {
      id: "Fluttery-PetalSwirls",
      label: "高鳴り・花びらスワール",
      tags: ["fluttery","side-eye-glow","mouth-open-soft","petal-swirls","eyelight-softbar","glimmer-dust"]
    },
    {
      id: "Stillness-SparkRain",
      label: "静止・きら雨",
      tags: ["stillness","brow-sharp-focus","glassy-eyes-sapphire","spark-rain","halo-ring-thin","soft-chromatic"]
    }
  ];

  const data = { presets };

  if (typeof window !== "undefined" && window.__registerPresetPart) {
    window.__registerPresetPart("presets_part18", data);
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = data;
  }
})();