/* ============================================
   Neon / Cyber Heart Pack — part58.js
   目的：part55（基礎ネオン系）を拡張する“第二世代”の多層ネオン／サイバー・ハート表現
   互換：__registerPromptPart が無ければ window.promptBuilder に直登録
   ============================================ */
(function (g) {
  const id = 'part58';

  const categories = [
    /* ---------- Effects: Light / Neon & Laser ---------- */
    {
      name: 'Effects / Light — Neon & Laser',
      items: [
        { id: 'neon-heart-aurora',        label: 'ネオン・ハートオーロラ / neon heart aurora' },
        { id: 'neon-heart-core',          label: 'ネオン・ハートコア発光 / neon heart core' },
        { id: 'neon-heart-outline',       label: 'ネオン輪郭ハート / neon heart outline' },
        { id: 'neon-heart-bloom',         label: 'ネオン・ブルームハート / neon heart bloom' },
        { id: 'neon-double-stroke',       label: '二重ストローク・ネオン / neon double stroke' },
        { id: 'neon-wireframe-heart',     label: 'ネオン・ワイヤーフレーム心形 / neon wireframe heart' },
        { id: 'neon-vapor-heart',         label: 'ヴェイパー・ネオン心霧 / neon vapor heart' },
        { id: 'laser-heart-trace',        label: 'レーザー・ハート軌跡 / laser heart trace' },
        { id: 'laser-heart-scanline',     label: 'レーザー走査・ハート / laser heart scanline' },
        { id: 'laser-grid-backdrop',      label: 'レーザー・グリッド背景 / laser grid backdrop' }
      ]
    },

    /* ---------- Effects: VFX / Hologram & Glitch ---------- */
    {
      name: 'Effects / VFX — Hologram & Glitch',
      items: [
        { id: 'hologram-heart-burst',     label: 'ホログラム・ハート爆裂 / hologram heart burst' },
        { id: 'hologram-heart-flicker',   label: 'ホログラム・ちらつく心形 / hologram heart flicker' },
        { id: 'glitch-heart-slice',       label: 'グリッチ・ハートスライス / glitch heart slice' },
        { id: 'glitch-heart-ghost',       label: 'グリッチ・残像ハート / glitch heart ghost' },
        { id: 'pixel-heart-rain',         label: 'ピクセル・ハートレイン / pixel heart rain' },
        { id: 'voxel-heart-tiles',        label: 'ボクセル・ハートタイル / voxel heart tiles' }
      ]
    },

    /* ---------- Particles: Heart ---------- */
    {
      name: 'Particles — Neon Hearts',
      items: [
        { id: 'heart-particles-neon-pink', label: 'ハート粒子・ネオンピンク / heart particles neon pink' },
        { id: 'heart-particles-neon-cyan', label: 'ハート粒子・ネオンシアン / heart particles neon cyan' },
        { id: 'heart-bokeh-neon',          label: 'ハート・ネオンボケ / heart bokeh neon' },
        { id: 'heart-confetti-neon',       label: 'ハート紙吹雪・ネオン / heart confetti neon' },
        { id: 'neon-smoke-heart',          label: 'ネオン煙ハート / neon smoke heart' }
      ]
    },

    /* ---------- Background Geometry: Cyber ---------- */
    {
      name: 'Background Geometry / Cyber',
      items: [
        { id: 'cyber-heart-circuit',      label: 'サイバー回路・ハート図形 / cyber heart circuit' },
        { id: 'cyber-heart-grid',         label: 'サイバー・ハート格子 / cyber heart grid' },
        { id: 'hud-heart-reticle',        label: 'HUD・ハートレティクル / HUD heart reticle' },
        { id: 'city-neon-backdrop-hearts',label: '都市ネオン背景＋ハート / city neon backdrop (hearts)' }
      ]
    }
  ];

  /* ========= Presets（このパート固有の組み合わせ） =========
     目的：表情IDに依存せず、このパックのエフェクトIDのみで構成
     ※ 既存の表情タグと併用しても衝突しないよう全ID一意
  ========================================================== */
  const presets = [
    {
      id: 'NeonCircuit-Serenade',
      label: 'ネオン回路のセレナーデ / Neon Circuit Serenade',
      tags: [
        'neon-heart-core','neon-heart-outline','cyber-heart-circuit',
        'heart-bokeh-neon','laser-grid-backdrop'
      ]
    },
    {
      id: 'Hologram-Burst-Kiss',
      label: 'ホログラム・バーストキス / Hologram Burst Kiss',
      tags: [
        'hologram-heart-burst','hologram-heart-flicker',
        'neon-heart-bloom','heart-particles-neon-pink'
      ]
    },
    {
      id: 'Laser-Trace-Love',
      label: 'レーザートレース・ラブ / Laser Trace Love',
      tags: [
        'laser-heart-trace','laser-heart-scanline',
        'neon-double-stroke','cyber-heart-grid'
      ]
    },
    {
      id: 'Neon-Vapor-Dream',
      label: 'ネオンヴェイパー・ドリーム / Neon Vapor Dream',
      tags: [
        'neon-vapor-heart','neon-smoke-heart',
        'neon-heart-aurora','heart-confetti-neon'
      ]
    },
    {
      id: 'Glitch-Ghost-Romance',
      label: 'グリッチ・ゴーストロマンス / Glitch Ghost Romance',
      tags: [
        'glitch-heart-ghost','glitch-heart-slice',
        'pixel-heart-rain','voxel-heart-tiles'
      ]
    },
    {
      id: 'Wireframe-Glow-Seraph',
      label: 'ワイヤーフレーム・グロウセラフ / Wireframe Glow Seraph',
      tags: [
        'neon-wireframe-heart','neon-heart-core',
        'heart-particles-neon-cyan','hud-heart-reticle'
      ]
    },
    {
      id: 'City-Neon-Heartbeat',
      label: 'シティネオン・ハートビート / City Neon Heartbeat',
      tags: [
        'city-neon-backdrop-hearts','neon-heart-outline',
        'neon-heart-bloom','heart-bokeh-neon'
      ]
    },
    {
      id: 'Aurora-Laser-Fusion',
      label: 'オーロラ×レーザー融合 / Aurora × Laser Fusion',
      tags: [
        'neon-heart-aurora','laser-grid-backdrop',
        'laser-heart-trace','heart-particles-neon-pink'
      ]
    },
    {
      id: 'Circuit-Bokeh-Whisper',
      label: '回路×ボケ・ウィスパー / Circuit × Bokeh Whisper',
      tags: [
        'cyber-heart-circuit','heart-bokeh-neon',
        'neon-double-stroke','hologram-heart-flicker'
      ]
    },
    {
      id: 'Vapor-Glitch-Confetti',
      label: 'ヴェイパー×グリッチ紙吹雪 / Vapor × Glitch Confetti',
      tags: [
        'neon-vapor-heart','glitch-heart-slice',
        'heart-confetti-neon','pixel-heart-rain'
      ]
    }
  ];

  const data = { categories, presets };

  // 登録（互換）
  if (g.__registerPromptPart) {
    g.__registerPromptPart(id, data);
  } else {
    g.promptBuilder = g.promptBuilder || {};
    g.promptBuilder[id] = data;
  }
})(window);