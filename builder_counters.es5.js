/* builder_counters.es5.js v12.4r6 (ES5) */
(function(){
  var INITIAL = { presets:33, faith:32, effect:33, background:1, pose:0, hair:0 };
  var KEY='pbPartCounters';
  function load(){ try{ return JSON.parse(localStorage.getItem(KEY))||{}; }catch(e){ return {}; } }
  function save(obj){ localStorage.setItem(KEY,JSON.stringify(obj)); }
  var st=load(), k;
  for(k in INITIAL){ var cur=Number(st[k]||0), base=Number(INITIAL[k]||0); if(cur<base) st[k]=base; }
  save(st);
  function parseName(name, fallbackCat){
    var cat=fallbackCat||'', idx=0;
    if(typeof name==='string' && name.indexOf('_part')>-1){
      var m=name.match(/^([a-zA-Z]+)_part(\d+)$/); if(m){cat=m[1]; idx=parseInt(m[2],10)||0;}
    } else if(typeof name==='string' && /^part\d+$/.test(name)){ idx=parseInt(name.replace('part',''),10)||0; }
    var norm={presets:'presets',faith:'faith',effect:'effect',background:'background',pose:'pose',hair:'hair',prompt:'faith'};
    cat=norm[cat]||(norm[fallbackCat]||''); return {cat:cat,idx:idx};
  }
  function bump(cat,idx){ if(!cat||!idx) return; var cur=Number((load()[cat]||st[cat]||0)); if(idx>cur){ st[cat]=idx; save(st); } }
  var _orig={
    preset:window.__registerPresetPart, faith:window.__registerPromptPart, effect:window.__registerEffectPart,
    bg:window.__registerBackgroundPart, pose:window.__registerPosePart, hair:window.__registerHairPart
  };
  window.__registerPresetPart=function(){ try{var v=arguments; var pi=parseName(v[0],'presets'); bump(pi.cat,pi.idx);}catch(e){} return _orig.preset&&_orig.preset.apply(this,arguments); };
  window.__registerPromptPart=function(){ try{var v=arguments; var pi=parseName(v[0],'faith'); bump(pi.cat,pi.idx);}catch(e){} return _orig.faith&&_orig.faith.apply(this,arguments); };
  window.__registerEffectPart=function(){ try{var v=arguments; var pi=parseName(v[0],'effect'); bump(pi.cat,pi.idx);}catch(e){} return _orig.effect&&_orig.effect.apply(this,arguments); };
  window.__registerBackgroundPart=function(){ try{var v=arguments; var pi=parseName(v[0],'background'); bump(pi.cat,pi.idx);}catch(e){} return _orig.bg&&_orig.bg.apply(this,arguments); };
  window.__registerPosePart=function(){ try{var v=arguments; var pi=parseName(v[0],'pose'); bump(pi.cat,pi.idx);}catch(e){} return _orig.pose&&_orig.pose.apply(this,arguments); };
  window.__registerHairPart=function(){ try{var v=arguments; var pi=parseName(v[0],'hair'); bump(pi.cat,pi.idx);}catch(e){} return _orig.hair&&_orig.hair.apply(this,arguments); };
  window.__pbGetNextIndex=function(cat){ var latest=load()[cat]; var n=Number((latest==null?st[cat]:latest)||0); return (n+1); };
})();