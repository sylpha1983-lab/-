/* presets_part13.js — from part13.js (presets) → presets.tags (expressions + effects)
   登録: window.__registerPresetPart('presets_part13', data)
*/
(function (w) {
  var data = {
    categories: [], // プリセット専用なので空
    presets: [
      {
        id: "Bittersweet-Teal-Mist",
        label: "ほろ苦・ティールの薄もや",
        tags: ["bittersweet","glassy-eyes-teal","smile-subtle","brow-soft-uplift","thin-mist","edge-light-soft","floating-motes"]
      },
      {
        id: "Guilty-Blur-Whisper",
        label: "ばつの悪さ・涙にじみ・囁き線",
        tags: ["sidelook-guilty","teary-blur","lip-parted-soft","speed-lines-whisper","inner-glow","pollen-sheen"]
      },
      {
        id: "Curious-EdgeSpark",
        label: "好奇・エッジスパーク",
        tags: ["sidelook-curious","smile-corner-up","fond-smug","soft-spark-drift","edge-light-soft","tone-soft-grid"]
      },
      {
        id: "Mellow-Tranquil",
        label: "まろやか・静謐",
        tags: ["half-lidded-mellow","tranquil","smile-subtle","subsurface-warm","impact-lines-silk","bloom-ring-micro"]
      },
      {
        id: "Breathless-Dew",
        label: "息をのむ・朝露",
        tags: ["breathless","eyelids-heavy","gentle-tease","dew-humidity","chromatic-soft","inner-glow"]
      },
      {
        id: "Pensive-SoftGrid",
        label: "沈思・ソフト格子",
        tags: ["pensive","wistful-soft","pout-tilt","tone-soft-grid","floating-motes","edge-light-soft"]
      }
    ]
  };
  (w.__registerPresetPart || function(){ (w.__parts = w.__parts||{}).presets = (w.__parts.presets||{}); w.__parts.presets["presets_part13"]=data; })( "presets_part13", data );
})(window);