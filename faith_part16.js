/* faith_part16.js — v1.0
   旧 part16.js の Expressions をカテゴリ化して登録
   登録API: window.__registerPromptPart('faith_part16', data)
*/
(function (g) {
  const categories = [
    {
      name: "表情 / Expressions",
      items: [
        { id: "side-eye-amber",       label: "横目・アンバー / side-eye-amber" },
        { id: "squint-sun",           label: "細目・日差し / squint-sun" },
        { id: "eye-smile",            label: "目じり笑い / eye-smile" },
        { id: "droopy-eyes-kind",     label: "たれ目・やさしさ / droopy-eyes-kind" },
        { id: "tear-single-drop",     label: "涙・ひとしずく / tear-single-drop" },
        { id: "starry-pupils-soft",   label: "星の瞳孔・やわら / starry-pupils-soft" },
        { id: "glance-over-shoulder", label: "肩越しの視線 / glance-over-shoulder" },
        { id: "gaze-steady-calm",     label: "落ち着いた視線 / gaze-steady-calm" },

        { id: "brow-arched-softplus", label: "アーチ眉・やわら＋ / brow-arched-softplus" },
        { id: "brow-knit-worried",    label: "眉間寄せ・心配 / brow-knit-worried" },
        { id: "brow-relaxed-flat",    label: "リラックス眉・フラット / brow-relaxed-flat" },

        { id: "shy-smile-closed",     label: "はにかみ・口閉じ / shy-smile-closed" },
        { id: "soft-laugh",           label: "やわらかな笑い / soft-laugh" },
        { id: "pout-curve-soft",      label: "むくれ・やわカーブ / pout-curve-soft" },
        { id: "lip-corner-down-soft", label: "口角下げ・そっと / lip-corner-down-soft" },

        { id: "quiet-hope",           label: "静かな希望 / quiet-hope" },
        { id: "sheepish",             label: "気まずい照れ / sheepish" },
        { id: "soft-frustration",     label: "やわら苛立ち / soft-frustration" },
        { id: "contentment",          label: "満ち足り / contentment" },
        { id: "starstruck",           label: "見惚れる / starstruck" },

        { id: "grounded",             label: "地に足の着いた / grounded" },
        { id: "absent-minded",        label: "うわの空 / absent-minded" },
        { id: "refreshed",            label: "すっきり / refreshed" }
      ]
    }
  ];

  // 旧→新互換：presetsは別ファイルに分離
  g.__registerPromptPart && g.__registerPromptPart("faith_part16", { categories, presets: [] });
})(window);