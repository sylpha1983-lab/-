// presets_part3.js (from legacy part3 presets -> UMD)

(function (g) {
  const toTags = (p) => {
    const ex = Array.isArray(p.expressions) ? p.expressions : [];
    const ef = Array.isArray(p.effects) ? p.effects : [];
    // 重複排除して統合
    return Array.from(new Set([...ex, ...ef]));
  };

  // ===== 変換元のプリセット（part3） =====
  const legacyPresets = [
    {
      id: 'Velvet-Jealous-Pout',
      label: 'ベルベット嫉妬むくれ',
      expressions: ['jealous', 'pout', 'side-eye-velvet'],
      effects: ['face-gloss-ring', 'sparkle-filament', 'vignette-feather']
    },
    {
      id: 'Innocent-Glance-Sparkle',
      label: '無垢の上目遣い・きらめき',
      expressions: ['upward-glance-innocent', 'soft-smile', 'bashful'],
      effects: ['sparkle-filament', 'bloom-dreamy-plus']
    },
    {
      id: 'Amethyst-Melancholy',
      label: 'アメシストのうつろ',
      expressions: ['melancholy', 'glassy-eyes-amethyst', 'arched-brow-elegant'],
      effects: ['film-grain-classic', 'vignette-feather', 'rim-light-crown']
    },
    {
      id: 'Awkward-Feather-Noir',
      label: '気まずい・フェザーノワール',
      expressions: ['awkward-smile-soft', 'stare-blank', 'tense'],
      effects: ['impact-lines-taper', 'vignette-feather', 'soft-ghost-lens']
    },
    {
      id: 'Relieved-Snow-Soft',
      label: '安堵・小雪ソフト',
      expressions: ['relieved', 'closed-smile', 'calm'],
      effects: ['light-snow', 'sparkle-dust-fine', 'face-gloss-ring']
    },
    {
      id: 'Mischief-Ribbon-Lights',
      label: 'いたずら・リボンライト',
      expressions: ['mischievous', 'upward-glance', 'grin'],
      effects: ['sparkle-filament', 'rim-light-crown', 'impact-lines-flare']
    }
  ];

  const data = {
    categories: [], // プリセット専用は空（UIは presetBox に描画）
    presets: legacyPresets.map(p => ({ id: String(p.id), label: String(p.label), tags: toTags(p) }))
  };

  // レジストリ登録（UMD）
  g.__registerPresetPart && g.__registerPresetPart('presets_part3', data);
})(window);