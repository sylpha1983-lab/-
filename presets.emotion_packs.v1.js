// presets.emotion_packs.v1.js
(function(root){ "use strict";
  const compose = root.__faith_compose || function(b){ return b||[]; };

  const packs = [
    {
      id: "embarrassed_blush_heavy",
      label: "照れ＋赤面（強）",
      // 英語タグのみ（辞書方針に準拠）
      tags: compose(["embarrassed","shy"], { blush:"heavy", eyes:"half" })
    },
    {
      id: "angry_vein_pop",
      // 絵文字は使わず日本語に統一
      label: "怒り＋怒りマーク",
      tags: compose(["angry","frown"], { tropes:"anger_mark", brow:"inward" })
    },
    {
      id: "sad_teary_medium",
      label: "哀＋うるうる（中）",
      tags: compose(["sad","teary"], { intensity:"medium", eyes:"teary" })
    },
    {
      id: "love_shy_down_gaze",
      label: "ハート＋照れ（伏し目）",
      tags: compose(["heart","love"], { blush:"medium", gaze:"down", mouth:"smirk" })
    }
  ];

  // 既存のプリセット領域に積み増し
  (root.__preset_packs = root.__preset_packs || []).push({ id:"emotion-packs-v1", items:packs });

  // レジストリへ登録（統一レジストリ仕様に合わせ 'presets' を明示）
  if (typeof root.__registerPresetPart === "function"){
    try{
      root.__registerPresetPart('presets', 1, {
        categories: [
          { name:"おすすめ（表情プリセット）", items: packs.map(p => ({ id:p.id, label:p.label })) }
        ],
        presets: packs.map(p => ({ id:p.id, label:p.label, tags:p.tags }))
      });
    }catch(_){}
  }
})(window);