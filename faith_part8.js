/* faith_part8.js (part 8) — UMD */
// 元の part8.js の expressions を「表情カタログ」に分割登録
;(function(g){
  const items = [
    { id:'wide-eyes-dazzle',    label:'目ぱっちり・まぶしい / wide-eyes-dazzle',    group:'Eyes / 目' },
    { id:'narrow-eyes-sneaky',  label:'目細め・いたずら / narrow-eyes-sneaky',       group:'Eyes / 目' },
    { id:'glimmer-eyes-soft',   label:'瞳きらめき・そっと / glimmer-eyes-soft',      group:'Eyes / 目' },
    { id:'drowsy-eyes',         label:'うとうと目 / drowsy-eyes',                     group:'Eyes / 目' },

    { id:'brow-arched-elegant', label:'眉アーチ・エレガント / brow-arched-elegant',  group:'Brows / 眉' },
    { id:'brow-sharp-intense',  label:'鋭い眉・集中 / brow-sharp-intense',           group:'Brows / 眉' },

    { id:'smile-shy-twist',     label:'はにかみ口元・ひねり / smile-shy-twist',      group:'Mouth / 口' },
    { id:'mouth-open-gasp',     label:'口あんぐり・驚き / mouth-open-gasp',          group:'Mouth / 口' },
    { id:'lip-bite-anxious',    label:'唇噛み・不安 / lip-bite-anxious',              group:'Mouth / 口' },

    { id:'euphoric',            label:'多幸感 / euphoric',                            group:'Emotion / 感情' },
    { id:'wistful',             label:'物思い / wistful',                             group:'Emotion / 感情' },
    { id:'overjoyed',           label:'大喜び / overjoyed',                           group:'Emotion / 感情' },

    { id:'bashful',             label:'てれてれ / bashful',                           group:'State / 状態' },
    { id:'lost-in-thought',     label:'考え込み / lost-in-thought',                   group:'State / 状態' },
    { id:'radiant',             label:'輝きに包まれる / radiant',                     group:'State / 状態' }
  ];
  const categories = Array.from(
    items.reduce((m,it)=> (m.has(it.group)? m.get(it.group).push(it) : m.set(it.group,[it]), m), new Map())
  ).map(([name, arr]) => ({ name, items: arr.map(({id,label})=>({id,label})) }));

  const data = { categories, presets: [] };

  if(g.__registerPromptPart) g.__registerPromptPart('faith_part8', data);
  else (g.__legacyFaith = g.__legacyFaith||{})['part8']=data;
})(window);