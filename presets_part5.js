/* presets_part5.js — merged static presets 41..50 (v5.0)
   - 参照元: presets_part41.js .. presets_part50.js の presets[] を忠実マージ
   - Registers: window.__registerPresetPart('presets', 5, { categories:[], presets:[...] })
   - [CHANGE] ランタイム収集を廃止し、ロード順・キー形式に依存しない方式へ
*/
(function (w) {
  "use strict";

  // ===== 固定展開（各 part の presets を転記） =====
  const P41 = [
    { id:'Enchanted-RuneDust',   label:'魔魅の符光',           tags:['enchanted-heart-blush','fae-heart-eyes','rune-heart-glow','fairy-heart-dust','spell-heart-sigil'] },
    { id:'ArcanePortal-Gaze',    label:'秘術ポータル視線',     tags:['arcane-heart-smile','myth-heart-gaze','portal-heart-ring','rune-heart-glow'] },
    { id:'FaeWhisper-Glow',      label:'妖精の囁き・輝き',     tags:['fae-heart-eyes','enchanted-heart-blush','fairy-heart-dust','spell-heart-sigil'] },
  ];
  const P42 = [
    { id:'Winged-Hearts-Flight', label:'翼ハートの飛翔',       tags:['winged-hearts','airflow-heart-trails','sky-breeze-heart-glow'] },
    { id:'Feather-Sparkle-Grin', label:'羽きらめき・微笑',     tags:['breezy-heart-smile','feather-heart-sparkles','winged-hearts'] },
    { id:'Lighthearted-Skyline', label:'軽やかスカイライン',   tags:['lighthearted-chuckle','uplifted-heart-look','airflow-heart-trails','sky-breeze-heart-glow'] },
  ];
  const P43 = [
    { id:'Blooming-Vines',       label:'花咲く蔦ハート',       tags:['bloom-heart-smile','petal-soft-blush','vine-heart-frame','petal-heart-drift'] },
    { id:'Dewy-Serenity',        label:'露の静謐ハート',       tags:['verdant-heart-gaze','dew-heart-bokeh','leafy-heart-halo','petal-heart-drift'] },
    { id:'Garden-Glow',          label:'庭園グロウ・ハート',   tags:['bloom-heart-smile','leafy-heart-halo','vine-heart-frame','dew-heart-bokeh'] },
  ];
  const P44 = [
    { id:'Nebula-Embrace',       label:'星雲の抱擁ハート',     tags:['nebula-soft-smile','nebula-heart-bloom','galaxy-heart-halo','stardust-heart-trails'] },
    { id:'Aurora-Gaze',          label:'オーロラの眼差し',     tags:['stargaze-heart-eyes','aurora-heart-veil','stardust-heart-trails','cosmic-calm'] },
    { id:'Galaxy-Serenity',      label:'銀河の静けさハート',   tags:['cosmic-calm','galaxy-heart-halo','nebula-heart-bloom','aurora-heart-veil'] },
  ];
  // P45 は P43 と同一3件（重複）なのでそのまま結合→後で重複除去
  const P45 = [
    { id:'Blooming-Vines',       label:'花咲く蔦ハート',       tags:['bloom-heart-smile','petal-soft-blush','vine-heart-frame','petal-heart-drift'] },
    { id:'Dewy-Serenity',        label:'露の静謐ハート',       tags:['verdant-heart-gaze','dew-heart-bokeh','leafy-heart-halo','petal-heart-drift'] },
    { id:'Garden-Glow',          label:'庭園グロウ・ハート',   tags:['bloom-heart-smile','leafy-heart-halo','vine-heart-frame','dew-heart-bokeh'] },
  ];
  const P46 = [
    { id:'Blazing-Confession',   label:'燃える告白',           tags:['ardent-gaze','heated-blush','flame-heart-aura','cinder-spark-rain'] },
    { id:'Ember-Resolve',        label:'燠火の決意',           tags:['fiery-resolve','ember-smirk','scorch-halo-heart','ember-drift-hearts'] },
    { id:'Heat-Haze-Tears',      label:'陽炎と涙',             tags:['spark-tear','heat-distort-heart','flame-heart-aura'] },
  ];
  const P47 = [
    { id:'Nebula-Whisper',             label:'星雲のささやき',           tags:['nebula-drift-smile','nebula-heart-mist','deep-space-glow','starlit-heart-dust'] },
    { id:'Cosmic-Awe-Constellation',   label:'宇宙畏敬・星座ハート',     tags:['cosmic-awe-gaze','constellation-heart-lines','galactic-heart-swirls','deep-space-glow'] },
    { id:'Aurora-Heart-Dream',         label:'オーロラ・ハートドリーム', tags:['dreamy-comet-blink','aurora-heart-veil','starlit-heart-dust'] },
    { id:'Starry-Eyes-Nebula',         label:'星屑アイ・星雲ヴェール',   tags:['starry-heart-eyes','nebula-heart-mist','aurora-heart-veil'] },
  ];
  const P48 = [
    { id:'Techno-Confession',    label:'テクノ告白',           tags:['holo-heart-gaze','hologram-heart-proj','neon-heart-grid','circuitry-heart-glow'] },
    { id:'Cyber-Resolve-Heart',  label:'サイバー決意ハート',   tags:['mecha-soft-resolve','circuit-blush','steel-petal-hearts','lidar-heart-pulse'] },
    { id:'Factory-Sparks-Love',  label:'工場火花の恋',         tags:['servo-smirk','mech-sparks-heart','circuitry-heart-glow'] },
    { id:'Neon-Grid-Idol',       label:'ネオングリッド・アイドル', tags:['optic-heart-spark','neon-heart-grid','hologram-heart-proj'] },
  ];
  const P49 = [
    { id:'Prism-Confession',     label:'プリズムの告白',       tags:['prism-eyed-smile','prism-heart-refraction','facet-sparkle-dust','haze-rainbow-veil'] },
    { id:'Crystal-Serenity',     label:'クリスタル静謐',       tags:['crystal-gaze-serene','crystal-heart-flare','caustic-light-hearts'] },
    { id:'Iridescent-Wink-Beat', label:'虹彩ウィンク・鼓動',   tags:['iridescent-wink','prism-heart-refraction','crystal-heart-flare'] },
    { id:'Shard-Tears-Romance',  label:'結晶涙のロマンス',     tags:['shard-tears-glow','gem-shard-petals','facet-sparkle-dust','haze-rainbow-veil'] },
    { id:'Facet-Blush-Spark',    label:'ファセット紅潮・火花', tags:['facet-blush-soft','facet-sparkle-dust','caustic-light-hearts'] },
  ];
  const P50 = [
    { id:'Ink-Confession-Stroke', label:'墨の告白・一筆',       tags:['brushstroke-smile','brush-heart-stroke','sumi-bleed-halo','washi-grain-texture'] },
    { id:'Sumi-Quiet-Heart',      label:'墨静謐の心',           tags:['sumi-contemplation','ink-heart-splash','calligraphy-flow-lines'] },
    { id:'Bleed-Tears-Seal',      label:'にじむ涙・朱印',       tags:['bleed-tear-trace','sumi-bleed-halo','seal-red-accent','washi-grain-texture'] },
    { id:'Calligrapher-Wink-Beat',label:'筆匠ウィンク・鼓動',   tags:['calligrapher-wink','brush-heart-stroke','ink-heart-splash'] },
    { id:'Soft-Ink-Blush',        label:'やわ墨紅潮',           tags:['ink-blush-soft','sumi-bleed-halo','calligraphy-flow-lines'] },
  ];

  // ===== マージ & 重複ID排除 =====
  const uniq = (arr)=>Array.from(new Set(arr));
  const map = new Map();
  function put(list){
    list.forEach(p=>{
      if(!p || !p.id) return;
      if(!map.has(p.id)) map.set(p.id, { id:p.id, label:p.label||p.id, tags:[] });
      const cur = map.get(p.id);
      const tags = Array.isArray(p.tags) ? p.tags.map(t=>String(t).trim()) : [];
      cur.tags = uniq(cur.tags.concat(tags));
    });
  }
  [P41,P42,P43,P44,P45,P46,P47,P48,P49,P50].forEach(put);
  const presets = Array.from(map.values());

  const data = { categories: [], presets };

  // ===== 登録（3形態対応）======
  try{
    if (typeof w.__registerPresetPart === 'function' && w.__registerPresetPart.length >= 3) {
      w.__registerPresetPart('presets', 5, data); // faith互換3引数（推奨）
    } else if (typeof w.__registerPresetPart === 'function') {
      w.__registerPresetPart(5, data);            // 従来2引数
    } else if (typeof w.__registerPromptPart === 'function' && w.__registerPromptPart.length >= 3) {
      w.__registerPromptPart('presets', 5, data); // 誤呼び出し吸収
    } else {
      w.__parts = w.__parts || {}; w.__parts.presets = w.__parts.presets || {};
      w.__parts.presets['presets_part5'] = data;
    }
  }catch(e){
    console.error('[presets_part5 v5.0] register error:', e);
  }
})(window);