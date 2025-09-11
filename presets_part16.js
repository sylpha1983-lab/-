/* presets_part16.js — v1.0
   旧 part16.js の Presets を tags[] へ統合
   登録API: window.__registerPresetPart('presets_part16', data)
*/
(function (g) {
  const presets = [
    {
      id: "QuietHope-WindowStripe",
      label: "静かな希望・窓の縞光",
      tags: [
        "quiet-hope","eye-smile","brow-arched-softplus","shy-smile-closed",
        "window-stripe-light","softbox-light","radial-fine-burst"
      ]
    },
    {
      id: "Starstruck-HeartCatch",
      label: "見惚れ・ハートキャッチ",
      tags: [
        "starstruck","starry-pupils-soft","soft-laugh",
        "catchlight-heart","glitter-fall","backlight-ring"
      ]
    },
    {
      id: "Sheepish-Glance-Coil",
      label: "気まずい照れ・肩越しコイル線",
      tags: [
        "sheepish","glance-over-shoulder","pout-curve-soft","brow-knit-worried",
        "coil-lines","light-leak-soft","film-scratch-fine"
      ]
    },
    {
      id: "Content-SnowCrystal",
      label: "満ち足り・雪結晶",
      tags: [
        "contentment","droopy-eyes-kind","smile-bright",
        "snow-crystal","softbox-light","chromatic-ring-soft"
      ]
    },
    {
      id: "Grounded-RainStreaks",
      label: "地に足・雨筋斜め",
      tags: [
        "grounded","gaze-steady-calm","lip-corner-down-soft",
        "rain-streaks-diag","rim-light-triple","pulse-lines"
      ]
    },
    {
      id: "Refreshed-Confetti",
      label: "すっきり・紙吹雪スパーク",
      tags: [
        "refreshed","eye-smile","brow-relaxed-flat",
        "confetti-spark","glitter-fall","double-exposure-soft"
      ]
    },
    {
      id: "SoftFrustration-Downpour",
      label: "やわ苛立ち・土砂降り",
      tags: [
        "soft-frustration","narrow-suspicious","press-lips-determined",
        "downpour-diagonal","film-scratch-fine","vignette"
      ]
    },
    {
      id: "AbsentMinded-MistBeads",
      label: "うわの空・ミスト粒",
      tags: [
        "absent-minded","squint-sun","shy-smile-closed",
        "mist-beads","light-leak-soft","backlight-ring"
      ]
    }
  ];

  // カタログ外ID（例: smile-bright, narrow-suspicious, press-lips-determined, vignette）は
  // 既存仕様どおり「Extra」として扱われ、生成時に自動追加されます。
  g.__registerPresetPart && g.__registerPresetPart("presets_part16", { presets });
})(window);