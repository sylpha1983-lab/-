// presets_mood_packs.part1.js
// 目的：SHIMMER〜CELESTIAL を「幻想プリセット」折りたたみとして追加
(function(){
  // 採番（存在すればカウンタを使用）
  var getN = (window.__pbGetNextIndex && typeof window.__pbGetNextIndex === 'function')
    ? window.__pbGetNextIndex
    : function(){ return 1; };
  var n = getN('presets');

  // 注意：tags 配列には「既に登録済みの“単体ワードID”」を並べます。
  // 例：mood_knowledge.part1.js で id:'celestial' 等が登録済みである前提。
  var data = {
    categories: [
      { name: "🎭 幻想プリセット / Mood Packs", items: [
        { id: "pack-ethereal-garden", label: "星霜の庭（STARFALL×LUMINOIR）" },
        { id: "pack-frozen-void",     label: "氷闇静寂（FROSTWHISPER×VOIDLACE）" },
        { id: "pack-glitch-wraith",   label: "断章の詩（GLITCHDREAM×WRAITHSONG）" },
        { id: "pack-swamp-blood",     label: "赤月の霧沼（SHADOWMIRE×BLOODMOON）" },
        { id: "pack-neon-ruins",      label: "ネオンの遺都（NEONVEIL×VOIDLACE）" },
        { id: "pack-celestial-temple",label: "天上の神殿（CELESTIAL×STARFALL）" }
      ] }
    ],
    presets: [
      // 1) 星霜の庭：柔光＋星降り
      { id: "pack-ethereal-garden",
        label: "星霜の庭 / Ethereal Garden",
        tags: ["starfall","luminoir"] },

      // 2) 氷闇静寂：霜＋影のレース
      { id: "pack-frozen-void",
        label: "氷闇静寂 / Frozen Void",
        tags: ["frostwhisper","voidlace"] },

      // 3) 断章の詩：グリッチ＋亡霊歌
      { id: "pack-glitch-wraith",
        label: "断章の詩 / Glitch Wraith",
        tags: ["glitchdream","wraithsong"] },

      // 4) 赤月の霧沼：影の沼＋血の月
      { id: "pack-swamp-blood",
        label: "赤月の霧沼 / Crimson Mire",
        tags: ["shadowmire","bloodmoon"] },

      // 5) ネオンの遺都：ネオンヴェール＋影のレース
      { id: "pack-neon-ruins",
        label: "ネオンの遺都 / Neon Ruins",
        tags: ["neonveil","voidlace"] },

      // 6) 天上の神殿：天上＋星降り
      { id: "pack-celestial-temple",
        label: "天上の神殿 / Celestial Temple",
        tags: ["celestial","starfall"] }
    ]
  };

  // 登録（レジストリ多態化に対応）
  try{
    if (typeof window.__registerPresetPart === "function") {
      window.__registerPresetPart('presets', n, data);
    } else if (typeof window.__registerPromptPart === "function") {
      // フォールバック：誤呼び出しもカテゴリ名優先で presets に格納される実装（統合指示 #9）
      window.__registerPromptPart('presets', n, data);
    } else {
      // 最終フォールバック：直接テーブルへ
      window.__parts = window.__parts || {presets:{},faith:{},background:{},effect:{},pose:{},hair:{}};
      window.__parts.presets = window.__parts.presets || {};
      window.__parts.presets[n] = data;
    }
  }catch(e){ console.warn('preset register failed:', e); }
})();