/* faith_part18.js — v1.0 (split from part18) */
(function () {
  const categories = [
    {
      name: "Eyes / 目",
      items: [
        { id: "side-eye-glow",        label: "横目・微光 / side-eye-glow" },
        { id: "soft-squint",          label: "やわら細目 / soft-squint" },
        { id: "half-lidded-smile",    label: "半目・微笑み / half-lidded-smile" },
        { id: "teary-overflow",       label: "涙あふれ / teary-overflow" },
        { id: "glassy-eyes-sapphire", label: "うるみ瞳・サファイア / glassy-eyes-sapphire" },
        { id: "gaze-tilt-up",         label: "視線・上にかしげ / gaze-tilt-up" },
        { id: "blink-quick",          label: "素早い瞬き / blink-quick" }
      ]
    },
    {
      name: "Brows / 眉",
      items: [
        { id: "brow-soft-plead",      label: "眉・お願い気味 / brow-soft-plead" },
        { id: "brow-sharp-focus",     label: "眉・鋭い集中 / brow-sharp-focus" }
      ]
    },
    {
      name: "Mouth / 口",
      items: [
        { id: "smile-shy-closed",     label: "はにかみ笑み・口閉じ / smile-shy-closed" },
        { id: "mouth-open-soft",      label: "口開き・そっと / mouth-open-soft" },
        { id: "lip-tremble",          label: "唇・震え / lip-tremble" },
        { id: "pout-tiny",            label: "小さなむくれ / pout-tiny" }
      ]
    },
    {
      name: "Emotion / 感情",
      items: [
        { id: "tenderness",           label: "やさしさ / tenderness" },
        { id: "frustrated-cute",      label: "もどかしキュート / frustrated-cute" },
        { id: "radiant-joy",          label: "輝く喜び / radiant-joy" },
        { id: "melancholy-soft",      label: "やわ憂い / melancholy-soft" }
      ]
    },
    {
      name: "State / 状態",
      items: [
        { id: "breathing-steady",     label: "呼吸・穏やか / breathing-steady" },
        { id: "fluttery",             label: "胸が高鳴る / fluttery" },
        { id: "stillness",            label: "静止 / stillness" }
      ]
    }
  ];

  const data = { categories, presets: [] };

  if (typeof window !== "undefined" && window.__registerPromptPart) {
    window.__registerPromptPart("faith_part18", data);
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = data;
  }
})();