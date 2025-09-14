/* faith_part11.js — extracted expressions from user text (v1.1)
   - Registers: window.__registerPromptPart('faith', 11, data)
   - [CHANGE] 瞳孔系を xxx-pupils 形式に統一（cross-shaped → cross-pupils）
*/
(function(){
  "use strict";

  const categories = [
    // 眉
    { name: "Brows / 眉", items: [
      { id:"eyebrows",             label:"眉毛（強弱で太さ変化） / eyebrows" },
      { id:"thick-eyebrows",       label:"太眉 / thick eyebrows" },
      { id:"short-eyebrows",       label:"短い眉 / short eyebrows" },
      { id:"troubled-eyebrows",    label:"困り眉（ハの字）/ troubled eyebrows" },
      { id:"v-shaped-eyebrows",    label:"逆八の字眉 / V-shaped eyebrows" }
    ]},

    // 目（形・状態・視線）
    { name: "Eyes / 目", items: [
      { id:"spiral-eyes",          label:"ぐるぐる目 / spiral shaped eyes" },
      { id:"x-eyes",               label:"バツ目 / X eyes" },
      { id:"eyes-in-shadow",       label:"目の影 / eyes in shadow" },
      { id:"shaded-face",          label:"顔に影 / shaded face" },
      { id:"slit-pupil",           label:"細長い瞳孔（猫目）/ slit pupil" },
      { id:"half-closed-eyes",     label:"半目 / half-closed eyes" },
      { id:"bags-under-eyes",      label:"目の下のクマ / bags under eyes" },
      { id:"black-sclera",         label:"黒白目 / black sclera" },
      { id:"black-eyes",           label:"黒い目 / black eyes" },
      { id:"empty-eyes",           label:"空虚な目 / empty eyes" },
      { id:"wide-eyed",            label:"見開き / wide-eyed" },
      { id:"blood-tears",          label:"血涙 / blood tears" },
      { id:"white-eyes",           label:"白目 / white eyes" },
      { id:"evil-eyes",            label:"邪悪な目 / evil eyes" },
      { id:"look-away",            label:"視線を逸らす / look away" },
      { id:"closed-eyes-thought",  label:"目を閉じ物思い / closed eyes (thoughtful)" },
      { id:"small-open-smile",     label:"小さく口を開けた微笑 / small open smile" },
      { id:"squinting-eyes",       label:"細めた目（糸目傾向）/ squinting eyes" },
      { id:"sleeping-face",        label:"寝顔（閉じ目）/ sleep" },
      { id:"sharp-eyes",           label:"鋭い目つき / sharp eyes" },
      { id:"slanted-eyes",         label:"つり目気味 / slanted eyes" },
      { id:"flame-symbol-pupils",  label:"瞳の中の炎シンボル / flame symbol in pupils" },
      { id:"devil-eyes",           label:"悪魔の目（縦長瞳孔）/ devil eyes" },
      { id:"pupils-sparkling",     label:"瞳キラーン / pupils sparkling" },
      { id:"glowing-eyes",         label:"発光目 / glowing eyes" },
      { id:"snake-pupils",         label:"ヘビの瞳孔 / snake pupils" },
      { id:"heterochromia",        label:"オッドアイ / heterochromia" },
      { id:"closed-eyes",          label:"閉じ目 / closed eyes" },
      { id:"hair-over-one-eye",    label:"片目隠れ / hair over one eye" },
      { id:"covered-eyes-bangs",   label:"前髪で両目隠れ / hair over eyes (blunt bangs)" },
      { id:"jitome",               label:"ジト目 / jitome" },
      { id:"tsurime",              label:"ツリ目 / tsurime" },
      { id:"tareme",               label:"垂れ目 / tareme" },
      { id:"one-eye-closed",       label:"片目閉じ（ウィンク）/ one eye closed" },
      { id:"ringed-eyes",          label:"瞳孔と黒目が明瞭 / ringed eyes" },
      { id:"white-pupils",         label:"白い瞳孔 / white pupils" },
      { id:"diamond-pupils",       label:"ひし形の瞳孔 / diamond-shaped pupils" },
      { id:"star-pupils",          label:"星形の瞳孔 / star-shaped pupils" },
      { id:"cross-pupils",         label:"十字の瞳孔 / cross-shaped pupils" }, 
      { id:"heart-pupils",         label:"ハートの瞳孔 / heart-shaped pupils" } // [CHANGE]
    ]},

    // 頬
    { name: "Cheeks / 頬", items: [
      { id:"blush",                label:"頬赤染め / blush" },
      { id:"blush-stickers",       label:"チークステッカー / blush stickers" }
    ]},

    // 口
    { name: "Mouth / 口", items: [
      { id:"deep-breath",          label:"深呼吸 / deep breath" },
      { id:"heavy-breathing",      label:"荒い息 / heavy breathing" },
      { id:"licking-lips",         label:"舌なめずり / licking lips" },
      { id:"drooling",             label:"涎を垂らす / drooling" },
      { id:"o-mouth",              label:"Oの字口 / :o" },
      { id:"v-mouth",              label:"Vの字口 / :>" },
      { id:"downturned-mouth",     label:"への字口 / :<" },
      { id:"wry-mouth",            label:"口をよじる / :/" },
      { id:"pout-bad-mood",        label:"膨れっ面 / :t (pout)" },
      { id:"frown-closed",         label:"しかめ面（口閉じ）/ >:(" },
      { id:"confident-smile",      label:"自信の笑顔（口閉じ）/ >:)" },
      { id:"tongue-licking",       label:"舌舐めずり / :q (tongue licking)" },
      { id:"cheeky-smile",         label:"不敵な笑顔 / :p" },
      { id:"skeptical-mouth",      label:"怪訝な口元 / d:" },
      { id:"big-smile",            label:"大きく開けた笑顔 / :d" },
      { id:"skin-fang-mouth",      label:"口形で八重歯表現 / skin_fang" },
      { id:"fang",                 label:"八重歯 / fang" },
      { id:"cat-mouth",            label:"猫口（ω）/ :3" },
      { id:"whisker-mouth",        label:"ひげ風口（もにゅ）/ whiskers" },
      { id:"sloppy-mouth",         label:"くわえたような口 / sloppy mouth" },
      { id:"faint-lips",           label:"淡い唇 / faint lips" },
      { id:"shark-mouth",          label:"サメ口 / shark mouth" },
      { id:"wavy-mouth",           label:"もごもご口 / wavy mouth" },
      { id:"clenched-teeth",       label:"歯を食いしばる / clenched teeth" },
      { id:"open-mouth",           label:"口を開ける / open mouth" },
      { id:"closed-mouth",         label:"口を閉じる / close mouth" }
    ]},

    // 感情・状態
    { name: "Expressions / 表情", items: [
      { id:"flustered-annoyed",    label:"動揺を隠せずムッとする / flustered & annoyed" },
      { id:"screaming-in-terror",  label:"恐怖で叫ぶ / screaming in terror" },
      { id:"sleep-deprived",       label:"徹夜明け / sleep-deprived" },
      { id:"broken-expression",    label:"壊れた表情 / broken expression" },
      { id:"crying-eyes-open",     label:"目を開けたまま泣く / crying with eyes open" },
      { id:"emotionless-smile",    label:"感情のない笑顔 / emotionless smile" },
      { id:"empty-smile",          label:"虚ろな笑顔 / empty smile" },
      { id:"peek-through-fingers", label:"指の間から覗く / peek through fingers" },
      { id:"face-cover-embarrass", label:"恥ずかしくて顔を覆う / hands cover face (embarrassed)" },
      { id:"dead-eyed",            label:"生気のない目 / dead-eyed" },
      { id:"no-light-in-eyes",     label:"目に光がない / no light in eyes" },
      { id:"burning-eyes",         label:"燃えた瞳（演出）/ burning eyes" }
    ]}
  ];

  const presets = [
    { id:"eyes-void-pack", label:"無感情・虚ろ（目）/ Eyes: Void",
      tags:["expressionless","empty-eyes","dead-eyed","no-light-in-eyes"] },
    { id:"sleepy-tired-pack", label:"疲労・徹夜 / Sleepy & Tired",
      tags:["half-closed-eyes","bags-under-eyes","sleep-deprived"] },
    { id:"mouth-icons-pack", label:"口アイコン / Mouth Icons",
      tags:["o-mouth","v-mouth","downturned-mouth","wry-mouth","big-smile"] },
    { id:"closed-thought-pack", label:"閉じ目・物思い / Closed & Thoughtful",
      tags:["closed-eyes-thought","closed-eyes","look-away"] }
  ];

  const data = { categories, presets };

  try{
    if (typeof window.__registerPromptPart === 'function' && window.__registerPromptPart.length >= 3) {
      window.__registerPromptPart('faith', 11, data);
    } else if (typeof window.__registerPromptPart === 'function') {
      window.__registerPromptPart('faith_part11', data);
    } else {
      window.REG_BUFFER = window.REG_BUFFER || {};
      window.REG_BUFFER['faith_part11'] = data;
    }
  }catch(e){
    console.error('[faith_part11 v1.1] register error:', e);
  }
})();