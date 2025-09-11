/* presets_part6.js — from part6.js */
;(function (g) {
  // フォールバック（存在しない環境でも登録できるように）
  g.__parts = g.__parts || {};
  if (!g.__registerPresetPart) {
    g.__registerPresetPart = function (name, data) {
      g.__parts.presets = g.__parts.presets || {};
      const m = String(name).match(/part(\d+)/);
      const idx = m ? parseInt(m[1], 10) : 1;
      g.__parts.presets[idx] = { presets: Array.isArray(data.presets) ? data.presets : [] };
    };
  }

  const presets = [
    {
      id: 'Golden-Glassy-Proud',
      label: '金のうるみ・静かな誇り / Golden Glassy Proud',
      tags: ['glassy-eyes-golden','calm-proud','smile-soft-closed','face-gloss-micro-plus','vignette-feather-oval','sparkle-dense-ring']
    },
    {
      id: 'Velvet-Jealous-Plus',
      label: 'ベルベット嫉妬＋ / Velvet Jealous Plus',
      tags: ['side-eye-velvet-plus','pout-soft-mini','brow-raise-doubt','rim-light-crown-plus','soft-dust-haze','bloom-dreamy-pro']
    },
    {
      id: 'Bold-Glance-Ring',
      label: '大胆上目遣い・リング光 / Bold Glance Ring',
      tags: ['upward-glance-bold','grin-tilt','playful','sparkle-filament-ring','rim-light-split-soft','impact-lines-spiral']
    },
    {
      id: 'Touched-Teary-Feather',
      label: 'じーん・涙と羽根 / Touched Teary Feather',
      tags: ['touched','teary-tilt','half-lidded-serene','vignette-feather-oval','soft-dust-haze','bokeh-rain']
    },
    {
      id: 'Composed-Noir-Pro',
      label: '平静ノワールPro / Composed Noir Pro',
      tags: ['composed','side-eye-razor-plus','smile-soft-closed','impact-lines-heavy','vignette','face-gloss']
    },
    {
      id: 'Flutter-Dreamy',
      label: 'そわそわ・ドリーミー / Flutter Dreamy',
      tags: ['flutter','half-lidded-hazy-plus','smile-wide-open','bloom-dreamy-pro','sparkle-dense-ring','lens-ghost-mild']
    }
  ];

  g.__registerPresetPart('presets_part6', { presets });
})(window);