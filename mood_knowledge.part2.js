// mood_knowledge.part2.js
// 雰囲気セット（プリセットカテゴリ）: 既存UIの折りたたみ(<details>)で表示される
(function(){
  const reg = (typeof window!=='undefined' && window.__registerPresetPart) || function(nameOrIndex, data){
    // フォールバック: 直接テーブルへ
    window.__parts = window.__parts || {};
    const P = window.__parts.presets = window.__parts.presets || {};
    const key = (typeof nameOrIndex === 'number') ? `part${nameOrIndex}` : String(nameOrIndex||'partX');
    P[key] = data;
  };

  // 単体ワード（part1 側）を束ねるプリセット群
  // id は "preset-mood-*" に統一、タグは単体ワードの id を列挙
  const categories = [
    {
      name: '雰囲気セット / Mood Sets',
      items: [
        { id:'preset-mood-shimmer',     label:'SHIMMER セット' },
        { id:'preset-mood-ghostfire',   label:'GHOSTFIRE セット' },
        { id:'preset-mood-voidlace',    label:'VOIDLACE セット' },
        { id:'preset-mood-neonveil',    label:'NEONVEIL セット' },
        { id:'preset-mood-wraithsong',  label:'WRAITHSONG セット' },
        { id:'preset-mood-glitchdream', label:'GLITCHDREAM セット' },
        { id:'preset-mood-frostwhisper',label:'FROSTWHISPER セット' },
        { id:'preset-mood-luminoir',    label:'LUMINOIR セット' },
        { id:'preset-mood-shadowmire',  label:'SHADOWMIRE セット' },
        { id:'preset-mood-starfall',    label:'STARFALL セット' },
        { id:'preset-mood-bloodmoon',   label:'BLOODMOON セット' },
        { id:'preset-mood-celestial',   label:'CELESTIAL セット' },
      ]
    }
  ];

  const presets = [
    {
      id:'preset-mood-shimmer',
      label:'SHIMMER セット',
      tags:['shimmer','dreamy','transparent glow']
    },
    {
      id:'preset-mood-ghostfire',
      label:'GHOSTFIRE セット',
      tags:['ghostfire','occult','blue-white flame']
    },
    {
      id:'preset-mood-voidlace',
      label:'VOIDLACE セット',
      tags:['voidlace','woven shadows','ominous']
    },
    {
      id:'preset-mood-neonveil',
      label:'NEONVEIL セット',
      tags:['neonveil','cyberpunk','shrouded ruins']
    },
    {
      id:'preset-mood-wraithsong',
      label:'WRAITHSONG セット',
      tags:['wraithsong','echoing chants','haunted']
    },
    {
      id:'preset-mood-glitchdream',
      label:'GLITCHDREAM セット',
      tags:['glitchdream','pixel distortion','time fracture']
    },
    {
      id:'preset-mood-frostwhisper',
      label:'FROSTWHISPER セット',
      tags:['frostwhisper','silent snowfall','temporal stillness']
    },
    {
      id:'preset-mood-luminoir',
      label:'LUMINOIR セット',
      tags:['luminoir','soft light','ethereal']
    },
    {
      id:'preset-mood-shadowmire',
      label:'SHADOWMIRE セット',
      tags:['shadowmire','fog-covered swamp','crimson reflection']
    },
    {
      id:'preset-mood-starfall',
      label:'STARFALL セット',
      tags:['starfall','falling stars','night field']
    },
    {
      id:'preset-mood-bloodmoon',
      label:'BLOODMOON セット',
      tags:['bloodmoon','crimson light','ritual circle']
    },
    {
      id:'preset-mood-celestial',
      label:'CELESTIAL セット',
      tags:['celestial','star glow','floating temple']
    }
  ];

  // 既存仕様：{ categories, presets } をそのまま登録
  reg('presets', { categories, presets });
})();