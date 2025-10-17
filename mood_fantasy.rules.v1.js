// mood_fantasy.rules.v1.js — v1.0.0
(function(root){
  "use strict";
  const log = (m)=>{ try{ root.writeLog && root.writeLog("[fantasy.rules] "+m);}catch(_){ } };

  const rules = [
    {
      id: "fantasy_light",
      label: "幻想的な光 / Fantasy Light",
      facets: [
        {
          label: "光の質感 / Texture of Light",
          tags: ["ethereal glow", "dream haze", "soft luminescence"]
        },
        {
          label: "光の状態 / Light State",
          tags: ["shimmer veil", "glowing dust", "moonlit shimmer"]
        }
      ]
    },
    {
      id: "fantasy_shadow",
      label: "幻想的な影 / Fantasy Shadow",
      facets: [
        {
          label: "影の演出 / Shadow Type",
          tags: ["ghostly shade", "veil of dusk", "misty contour"]
        },
        {
          label: "コントラスト / Contrast Play",
          tags: ["deep silhouette", "faint blur", "soft diffusion"]
        }
      ]
    },
    {
      id: "poetic_colors",
      label: "詩的な色彩 / Poetic Colors",
      facets: [
        {
          label: "暖色系 / Warm Tones",
          tags: ["crimson dusk", "amber serenity", "rosy veil"]
        },
        {
          label: "寒色系 / Cool Tones",
          tags: ["azure bloom", "silver hush", "mist teal"]
        }
      ]
    },
    {
      id: "fantasy_motion",
      label: "幻想的な動き / Fantasy Motion",
      facets: [
        {
          label: "流れる動き / Flowing Motion",
          tags: ["fluttering mist", "graceful drift", "sway of dream"]
        },
        {
          label: "静止と残光 / Stillness & Afterglow",
          tags: ["frozen shimmer", "echo of light", "lingering dust"]
        }
      ]
    },
    {
      id: "overall_mood",
      label: "全体ムード（幻想・詩的） / Overall Mood",
      facets: [
        {
          label: "幻想全体 / Fantasy Whole",
          tags: ["ethereal ambience", "dreamlike still", "transient scene"]
        },
        {
          label: "詩的全体 / Poetic Whole",
          tags: ["melancholic hue", "tender calm", "distant warmth"]
        }
      ]
    }
  ];

  root.__mood_fantasy_rules = rules;
  log("registered "+rules.length+" fantasy rule groups");
})(window);