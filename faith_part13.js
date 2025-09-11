/* faith_part13.js — from part13.js (expressions) → categories/items
   登録: window.__registerPromptPart('faith_part13', data)
*/
(function (w) {
  var data = {
    categories: [
      { name: "Eyes / 目", items: [
        { id: "sidelook-curious",    label: "横目・好奇 / sidelook-curious" },
        { id: "sidelook-guilty",     label: "横目・ばつが悪い / sidelook-guilty" },
        { id: "eyelids-heavy",       label: "まぶた重め / eyelids-heavy" },
        { id: "half-lidded-mellow",  label: "半目・まろやか / half-lidded-mellow" },
        { id: "glassy-eyes-teal",    label: "うるみ瞳・ティール / glassy-eyes-teal" },
        { id: "teary-blur",          label: "涙でにじむ / teary-blur" }
      ]},
      { name: "Brows / 眉", items: [
        { id: "brow-pinched",        label: "眉つまむように寄せる / brow-pinched" },
        { id: "brow-soft-uplift",    label: "眉・やわら上げ / brow-soft-uplift" }
      ]},
      { name: "Mouth / 口", items: [
        { id: "smile-subtle",        label: "さりげない笑み / smile-subtle" },
        { id: "smile-corner-up",     label: "口角だけ上げる / smile-corner-up" },
        { id: "pout-tilt",           label: "むくれ・かしげ / pout-tilt" },
        { id: "lip-parted-soft",     label: "薄く開いた唇・そっと / lip-parted-soft" }
      ]},
      { name: "Emotion / 感情", items: [
        { id: "fond-smug",           label: "親愛＋どや / fond-smug" },
        { id: "gentle-tease",        label: "やさしい挑発 / gentle-tease" },
        { id: "wistful-soft",        label: "やわ物思い / wistful-soft" },
        { id: "bittersweet",         label: "ほろ苦い / bittersweet" }
      ]},
      { name: "State / 状態", items: [
        { id: "breathless",          label: "息をのむ / breathless" },
        { id: "tranquil",            label: "静謐 / tranquil" },
        { id: "pensive",             label: "沈思 / pensive" }
      ]}
    ],
    presets: [] // 表情側にはプリセットを置かない（プリセットは presets_part13.js で登録）
  };
  (w.__registerPromptPart || function(){ (w.__parts = w.__parts||{}).faith = (w.__parts.faith||{}); w.__parts.faith["faith_part13"]=data; })( "faith_part13", data );
})(window);