/* effect_part13.js — from part13.js (effects) → categories/items
   登録: window.__registerEffectPart('effect_part13', data)
*/
(function (w) {
  var data = {
    categories: [
      { name: "Light / 光", items: [
        { id: "edge-light-soft",   label: "エッジライト・柔 / edge-light-soft" },
        { id: "inner-glow",        label: "インナーグロウ / inner-glow" },
        { id: "subsurface-warm",   label: "サブサーフェス・温 / subsurface-warm" }
      ]},
      { name: "Lines / 線", items: [
        { id: "impact-lines-silk",   label: "集中線・シルク / impact-lines-silk" },
        { id: "speed-lines-whisper", label: "スピード線・ウィスパー / speed-lines-whisper" }
      ]},
      { name: "Particles / 粒子", items: [
        { id: "floating-motes",    label: "浮遊モート / floating-motes" },
        { id: "soft-spark-drift",  label: "柔ら火花の漂い / soft-spark-drift" },
        { id: "pollen-sheen",      label: "花粉シーン / pollen-sheen" }
      ]},
      { name: "Weather / 天候", items: [
        { id: "dew-humidity",      label: "朝露・湿り / dew-humidity" },
        { id: "thin-mist",         label: "薄もや / thin-mist" }
      ]},
      { name: "VFX / その他", items: [
        { id: "tone-soft-grid",    label: "トーン・ソフト格子 / tone-soft-grid" },
        { id: "bloom-ring-micro",  label: "リングブルーム・微 / bloom-ring-micro" },
        { id: "chromatic-soft",    label: "色収差・弱 / chromatic-soft" }
      ]}
    ],
    presets: [] // エフェクト側にはプリセットを置かない
  };
  (w.__registerEffectPart || function(){ (w.__parts = w.__parts||{}).effect = (w.__parts.effect||{}); w.__parts.effect["effect_part13"]=data; })( "effect_part13", data );
})(window);