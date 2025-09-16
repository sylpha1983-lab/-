/* builder_app.es5.js v12.4r7 (ES5 + robust loader + BG base folds) */
(function(){
  function $(s){return document.querySelector(s)}
  function arr(x){return Array.isArray(x)?x:[]}
  function get(obj, path, dft){var v=obj,i=0;while(v&&i<path.length){v=v[path[i++]]}return v==null?dft:v}
  function has(obj,k){return obj&&Object.prototype.hasOwnProperty.call(obj,k)}

  var BASE="./";
  var FILES={
    presets:function(i){return BASE+"presets_part"+i+".js"},
    faith:function(i){return BASE+"faith_part"+i+".js"},
    background:function(i){return BASE+"background_part"+i+".js"},
    effect:function(i){return BASE+"effect_part"+i+".js"},
    pose:function(i){return BASE+"pose_part"+i+".js"},
    hair:function(i){return BASE+"hair_part"+i+".js"}
  };
  var CAT_ORDER=["presets","faith","background","effect","pose","hair"];
  var CAT_SLOTS={presets:200,faith:200,background:200,effect:200,pose:200,hair:200};
  var TOTAL_SLOTS=CAT_SLOTS.presets+CAT_SLOTS.faith+CAT_SLOTS.background+CAT_SLOTS.effect+CAT_SLOTS.pose+CAT_SLOTS.hair;

  window.__parts=window.__parts||{presets:{},faith:{},background:{},effect:{},pose:{},hair:{}};
  function __ensure(p){if(!has(window.__parts,p)) window.__parts[p]={};return window.__parts[p]}

  // レジストリ（既存互換）
  window.__registerPresetPart=function(a,b,c){
    if(arguments.length===3 && String(a).toLowerCase()==='presets'){ __ensure('presets')[b]=c; return; }
    if(arguments.length>=2 && typeof a==='string' && /^presets_part\d+$/i.test(a)){ __ensure('presets')[a]=b; return; }
    __ensure('presets')[a]=b;
  };
  window.__registerPromptPart=function(n,d){__ensure("faith")[n]=d};
  window.__registerBackgroundPart=function(n,d){__ensure("background")[n]=d};
  window.__registerEffectPart=function(n,d){__ensure("effect")[n]=d};
  window.__registerPosePart=function(n,d){__ensure("pose")[n]=d};
  window.__registerHairPart=function(n,d){__ensure("hair")[n]=d};

  var log=$('#log'), overallFill=$('#overallFill');
  $('#cntEMPTY').textContent='空 '+TOTAL_SLOTS; $('#totalMax').textContent=TOTAL_SLOTS;

  var metersBox=$('#meters'), meterMap={};
  function addMeterRow(label,key){
    var row=document.createElement('div');
    row.className='meterRow';
    row.innerHTML='<div style="min-width:120px">'+label+'</div>'
    +'<div class="meterBar"><div class="meterFill" id="fill-'+key+'"></div></div>'
    +'<div class="slot"><span id="ok-'+key+'" class="badge b-ok">成功 0</span></div>'
    +'<div class="slot"><span id="ng-'+key+'" class="badge b-bad">失敗 0</span></div>'
    +'<div class="slot"><span id="em-'+key+'" class="badge b-empty">空 '+CAT_SLOTS[key]+'</span></div>';
    metersBox.appendChild(row);
    meterMap[key]={fill:row.querySelector('#fill-'+key),ok:row.querySelector('#ok-'+key),ng:row.querySelector('#ng-'+key),em:row.querySelector('#em-'+key),okn:0,ngn:0,emn:CAT_SLOTS[key],total:CAT_SLOTS[key]};
  }
  for(var mi=0; mi<CAT_ORDER.length; mi++){ addMeterRow(CAT_ORDER[mi],CAT_ORDER[mi]); }

  var totalOk=0,totalNg=0,totalEm=TOTAL_SLOTS,totalRead=0;
  $('#cntOK').textContent='成功 '+totalOk; $('#cntNG').textContent='失敗 '+totalNg; $('#totalRead').textContent=totalRead;

  function writeLog(s){ if(!log) return; if(log.textContent) log.textContent+='\n'; log.textContent+=s; log.scrollTop=log.scrollHeight; }
  window.onerror=function(msg){ try{writeLog('[JS Error] '+msg)}catch(e){} };
  if(window.addEventListener){ window.addEventListener('unhandledrejection', function(e){ try{writeLog('[Promise Rejection] '+String(e&&e.reason))}catch(_){} }) }

  function uiMeterUpdate(key){
    var m=meterMap[key];
    m.ok.textContent='成功 '+m.okn; m.ng.textContent='失敗 '+m.ngn; m.em.textContent='空 '+m.emn;
    var prog=(CAT_SLOTS[key]-m.emn)/m.total; m.fill.style.inset='0 '+((1-prog)*100)+'% 0 0';
    $('#cntOK').textContent='成功 '+totalOk; $('#cntNG').textContent='失敗 '+totalNg; $('#cntEMPTY').textContent='空 '+totalEm; $('#totalRead').textContent=totalRead;
    var overall=(TOTAL_SLOTS-totalEm)/TOTAL_SLOTS; overallFill.style.width=(overall*100).toFixed(1)+'%';
  }

  // ===== 強化ローダ =====
  function loadViaTag(url, timeout){
    return new Promise(function(res){
      var done=false, s=document.createElement('script');
      s.async=true; s.src=url + (url.indexOf('?')>-1?'&':'?') + 'v='+(new Date().getTime());
      s.onload=function(){ if(done) return; done=true; res('ok'); };
      s.onerror=function(){ if(done) return; done=true; res('empty'); };
      document.head.appendChild(s);
      setTimeout(function(){ if(done) return; done=true; res('hang'); }, timeout||2500);
    });
  }
  function loadViaFetchBlob(url){
    if(!window.fetch||!window.Blob||!URL||!URL.createObjectURL) return Promise.resolve('empty');
    return fetch(url,{cache:'no-store'}).then(function(r){ if(!r.ok) throw new Error('HTTP '+r.status); return r.text(); })
    .then(function(code){
      var blob=new Blob([code],{type:'text/javascript'});
      var u=URL.createObjectURL(blob);
      return loadViaTag(u,2500).then(function(r){ try{URL.revokeObjectURL(u)}catch(_){ } return r==='ok'?'ok':'empty'; });
    }).catch(function(){ return 'empty'; });
  }
  function tryLoad(url){
    return loadViaTag(url,2500).then(function(r){
      if(r==='ok') return 'ok';
      if(r==='hang'){ writeLog('⚠ 読み込み待ちタイムアウト → fetch+blob に切替: '+url); return loadViaFetchBlob(url); }
      return r; // 'empty'
    });
  }

  function mkChk(id,label){
    var lab=document.createElement('label');
    lab.className='chk';
    lab.innerHTML='<input type="checkbox" data-id="'+id+'"><span>'+ (label||id) +'</span>';
    return lab;
  }

  var el={
    presets:$('#list-presets'),
    joy:$('#g-joy'), anger:$('#g-anger'), sad:$('#g-sad'), happy:$('#g-happy'), heart:$('#g-heart'),
    eyes:$('#g-eyes'), tear:$('#g-tear'), mouth:$('#g-mouth'), confuse:$('#g-confuse'), tense:$('#g-tense'), shy:$('#g-shy'), etc:$('#g-etc'),
    numPresets:$('#num-presets'), numExpr:$('#num-expr'),
    effRing:$('#g-eff-ring'), effLine:$('#g-eff-line'), effParticle:$('#g-eff-particle'), effLight:$('#g-eff-light'), effDistort:$('#g-eff-distort'), effEtc:$('#g-eff-etc'),
    nEffRing:$('#n-eff-ring'), nEffLine:$('#n-eff-line'), nEffParticle:$('#n-eff-particle'), nEffLight:$('#n-eff-light'), nEffDistort:$('#n-eff-distort'), nEffEtc:$('#n-eff-etc'),
    numEffSubject:$('#num-eff-subject'),
    bgPlace:$('#g-bg-place'), bgEff:$('#g-bg-eff'), nBgPlace:$('#n-bg-place'), nBgEff:$('#n-bg-eff'), numBg:$('#num-bg'),
    listPose:$('#list-pose'), listHair:$('#list-hair'), numPose:$('#num-pose'), numHair:$('#num-hair')
  };

  var emotionDict={
    joy:['smile','grin','laugh','wink','happy','smirk','喜','嬉','楽','ニヤ'],
    anger:['angry','furious','grit','gritted','frown','annoyed','irritated','怒','ムッ'],
    sad:['sad','cry','teary','tears','涙','泣','哀'],
    happy:['relax','cheer','sparkle','楽','ふわ','calm','serene','composed'],
    heart:['heart','love','♡','❤','ラブ'],
    eyes:['eye','eyes','gaze','look','視線','見開','細め','上目','blink','drowsy','star','glimmer','gleam'],
    tear:['tear','涙','うる','潤','teary'],
    mouth:['mouth','lip','唇','bite','smug','bashful','tease'],
    confuse:['confuse','困惑','bewilder'],
    tense:['tense','緊張','nervous','stiffen','freeze'],
    shy:['shy','はにか','恥','blush','bashful']
  };

  var effBGHint=['bg','background','backdrop','sakura','petals','leaves','snow','rain','drizzle','mist','haze','veil','cloud','starscape','city','street','forest','sea','mountain','desert','screen'];
  var effSubjectGroups=[
    {key:'ring',words:['ring','rim','crown','halo','sparkle','gloss','bokeh']},
    {key:'line',words:['line','線','burst','speed','slash','zigzag']},
    {key:'particle',words:['dust','spark','ember','particle','snow','ashes','filament']},
    {key:'light',words:['light','glow','shine','gleam','glimmer','gloss','highlight','flare']},
    {key:'distort',words:['distort','warp','ripple','wave','liquid','ghost','trench','veil']}
  ];
  function hitAny(s,arr){ for(var i=0;i<arr.length;i++){ if(s.indexOf(arr[i])>-1) return true } return false }
  function putEffSubject(node,grp){
    var map={ring:el.effRing,line:el.effLine,particle:el.effParticle,light:el.effLight,distort:el.effDistort,etc:el.effEtc};
    var cnt={ring:el.nEffRing,line:el.nEffLine,particle:el.nEffParticle,light:el.nEffLight,distort:el.nEffDistort,etc:el.nEffEtc};
    (map[grp||'etc']).appendChild(node);
    cnt[grp||'etc'].textContent=(+cnt[grp||'etc'].textContent||0)+1;
  }

  function renderAll(){
    // presets
    var pCount=0, k;
    for(k in window.__parts.presets){
      var pp = get(window.__parts,['presets',k,'presets'],[]);
      for(var i=0;i<arr(pp).length;i++){ var p=pp[i]; el.presets.appendChild(mkChk(p.id,p.label||p.id)); pCount++; }
    }
    el.numPresets.textContent=pCount;

    // 表情
    var eCnt={joy:0,anger:0,sad:0,happy:0,heart:0,eyes:0,tear:0,mouth:0,confuse:0,tense:0,shy:0,etc:0,total:0};
    var exprMap={joy:el.joy,anger:el.anger,sad:el.sad,happy:el.happy,heart:el.heart,eyes:el.eyes,tear:el.tear,mouth:el.mouth,confuse:el.confuse,tense:el.tense,shy:el.shy,etc:el.etc};
    for(k in window.__parts.faith){
      var cats = get(window.__parts,['faith',k,'categories'],[]);
      for(var ci=0;ci<arr(cats).length;ci++){
        var c=cats[ci]; var items=arr(c.items);
        for(var ii=0;ii<items.length;ii++){
          var it=items[ii]; var text=(String(it.label||'')).toLowerCase(); var grp='etc';
          var order1=['heart','anger','sad','joy','happy']; for(var j=0;j<order1.length;j++){ var g=order1[j]; if(hitAny(text,emotionDict[g])){ grp=g; break } }
          if(grp==='etc'){ var order2=['eyes','tear','mouth','confuse','tense','shy']; for(var j2=0;j2<order2.length;j2++){ var g2=order2[j2]; if(hitAny(text,emotionDict[g2])){ grp=g2; break } } }
          exprMap[grp].appendChild(mkChk(it.id,it.label||it.id)); eCnt[grp]++; eCnt.total++;
        }
      }
    }
    $('#num-expr').textContent=eCnt.total;
    $('#n-joy').textContent=eCnt.joy; $('#n-anger').textContent=eCnt.anger; $('#n-sad').textContent=eCnt.sad; $('#n-happy').textContent=eCnt.happy; $('#n-heart').textContent=eCnt.heart;
    $('#n-eyes').textContent=eCnt.eyes; $('#n-tear').textContent=eCnt.tear; $('#n-mouth').textContent=eCnt.mouth; $('#n-confuse').textContent=eCnt.confuse; $('#n-tense').textContent=eCnt.tense; $('#n-shy').textContent=eCnt.shy; $('#n-etc').textContent=eCnt.etc;

    // 背景（ベース折りたたみ）
    var bgPlaceCount=0,bgEff=0;
    var collectedPlace=[];

    function walkBg(cat, inheritedEff){
      var name=String(get(cat,['name'],''));
      var isEffect = inheritedEff || /effect|エフェクト/i.test(name);
      var items=arr(cat.items);
      for(var bi=0;bi<items.length;bi++){
        var it=items[bi];
        if(isEffect){ $('#g-bg-eff').appendChild(mkChk(it.id,it.label||it.id)); bgEff++; }
        else { collectedPlace.push({id:it.id,label:it.label||it.id}); }
      }
      var subs=arr(cat.categories);
      for(var si=0;si<subs.length;si++){ walkBg(subs[si], isEffect) }
    }
    for(k in window.__parts.background){
      var bgcats = get(window.__parts,['background',k,'categories'],[]);
      for(var bci=0;bci<arr(bgcats).length;bci++){ walkBg(bgcats[bci], false) }
    }

    // ベース定義（最小：海・山・森林 + その他）
    var baseDefs = [
      { key:'sea',      title:'🌊 海 / Sea',       baseTag:'sea',      kw:['sea','ocean','beach','coast','coastal','bay','harbor','harbour','reef','pier','marina','lighthouse','waikiki','copacabana','bondi','santorini','haeundae'] },
      { key:'mountain', title:'⛰ 山 / Mountain',   baseTag:'mountain', kw:['mountain','mt.','peak','ridge','cliff','alps','andes','himalaya','fuji','yosemite','zion','monument','volcano','caldera','crater','canyon'] },
      { key:'forest',   title:'🌲 森林 / Forest',   baseTag:'forest',   kw:['forest','wood','bamboo','jungle','rainforest','mangrove','yakushima','grove'] },
      { key:'others',   title:'▶ その他 / Others', baseTag:null,       kw:[] }
    ];

    // グループUIを構築（#g-bg-placeの内部のみ）
    (function buildBgBaseGroups(){
      var host = el.bgPlace; host.innerHTML='';
      var groups={}, i;
      for(i=0;i<baseDefs.length;i++){
        var d=baseDefs[i], dd=document.createElement('details'); dd.open=false;
        var sm=document.createElement('summary'); var cnt=document.createElement('span'); cnt.id='cnt-bg-'+d.key; cnt.textContent='0';
        sm.textContent=d.title+' '; sm.appendChild(cnt);
        var panel=document.createElement('div'); panel.className='panel';
        var grid=document.createElement('div'); grid.className='grid'; grid.id='g-bg-'+d.key;
        panel.appendChild(grid); dd.appendChild(sm); dd.appendChild(panel);
        host.appendChild(dd);
        groups[d.key]={grid:grid,countEl:cnt,n:0,def:d};
        // ベース行（先頭）は単一チェック
        if(d.baseTag){
          grid.appendChild(mkChk(d.baseTag, d.title.replace(/^[^ ]+ /,'').split('/')[0].trim()+' / '+d.baseTag));
        }
      }
      // アイテムを分類して追加
      for(i=0;i<collectedPlace.length;i++){
        var it=collectedPlace[i];
        var t=(String(it.label)+' '+String(it.id)).toLowerCase();
        var key='others';
        for(var j=0;j<baseDefs.length;j++){
          var d2=baseDefs[j]; if(d2.key==='others') continue;
          var kws=d2.kw; for(var kx=0;kx<kws.length;kx++){ if(t.indexOf(kws[kx])>-1){ key=d2.key; break; } }
          if(key!=='others') break;
        }
        groups[key].grid.appendChild(mkChk(it.id,it.label));
        groups[key].n++; bgPlaceCount++;
      }
      for(var gk in groups){ groups[gk].countEl.textContent=groups[gk].n; }
    })();

    // トータル表示
    $('#n-bg-place').textContent=bgPlaceCount; $('#n-bg-eff').textContent=bgEff; $('#num-bg').textContent=bgPlaceCount+bgEff;

    // 被写体エフェクト（据え置き）
    var cRing=0,cLine=0,cParticle=0,cLight=0,cDistort=0,cEtc=0, effSub=0;
    for(k in window.__parts.effect){
      var ecats = get(window.__parts,['effect',k,'categories'],[]);
      for(var ei=0;ei<arr(ecats).length;ei++){
        var c2=ecats[ei]; var items2=arr(c2.items);
        for(var eii=0;eii<items2.length;eii++){
          var it2=items2[eii]; var text2=(String(it2.label||'')+' '+it2.id).toLowerCase();
          if(hitAny(text2,effBGHint)){ $('#g-bg-eff').appendChild(mkChk(it2.id,it2.label||it2.id)); bgEff++; continue; }
          var grp='etc'; for(var gi=0;gi<effSubjectGroups.length;gi++){ if(hitAny(text2,effSubjectGroups[gi].words)){ grp=effSubjectGroups[gi].key; break; } }
          putEffSubject(mkChk(it2.id,it2.label||it2.id),grp);
          if(grp==='ring')cRing++; else if(grp==='line')cLine++; else if(grp==='particle')cParticle++; else if(grp==='light')cLight++; else if(grp==='distort')cDistort++; else cEtc++;
          effSub++;
        }
      }
    }
    $('#n-bg-eff').textContent=bgEff; $('#num-bg').textContent=bgPlaceCount+bgEff; $('#num-eff-subject').textContent=effSub;
    $('#n-eff-ring').textContent=cRing; $('#n-eff-line').textContent=cLine; $('#n-eff-particle').textContent=cParticle; $('#n-eff-light').textContent=cLight; $('#n-eff-distort').textContent=cDistort; $('#n-eff-etc').textContent=cEtc;

    // ポーズ
    (function(){
      var host = el.listPose; host.innerHTML = '';
      var defs = [
        { key:'stand',title:'立ち / Standing',kw:['stand','直立','standing'] },
        { key:'sit',title:'座り / Sitting',kw:['sit','座り','chair','sofa'] },
        { key:'kneel',title:'膝・しゃがみ / Kneel & Crouch',kw:['kneel','crouch','squat','正座'] },
        { key:'hands',title:'手・腕 / Hands & Arms',kw:['hand-','hands-','finger','thumb','peace','ハートハンド','ピース','頬杖','指'] },
        { key:'upper',title:'上半身 / Upper Body',kw:['shoulder','torso','chest','背','胸'] },
        { key:'head',title:'頭・視線 / Head & Gaze',kw:['head','look','gaze','profile','camera','angle','視線','横顔'] },
        { key:'dynamic',title:'動き・バランス / Dynamic',kw:['walk','run','jump','spin','lean','reach','push','pull','slide','sprint','skip','twirl'] },
        { key:'dance',title:'ダンス・舞台 / Dance & Stage',kw:['dance','ballet','stage','idol','spotlight','sing','cheer'] },
        { key:'lying',title:'寝転び・リラックス / Lying & Relax',kw:['lying','recline','nap','bed','sleep','stretch on bed'] },
        { key:'daily',title:'日常・創作・仕事 / Daily & Creative',kw:['writing','painting','guitar','violin','cook','pan','chopping','plating','typing','presentation','phone','desk','office','kitchen'] },
        { key:'sports',title:'スポーツ / Sports',kw:['soccer','basketball','tennis','baseball','golf','volleyball','rugby','swimming','boxing','mma','fencing','parkour','skateboard','snowboard','surfing','marathon','weightlifting'] },
        { key:'combat',title:'格闘・武器 / Combat & Action',kw:['sword','guard','kick','punch','aim','bow','rifle','weapon','shield','dodge','parry','finisher','stance','martial','archery','throwing'] },
        { key:'pair',title:'ペア・グループ / Pair & Group',kw:['duo','pair','group','two-person','back-to-back','lineup','huddle','standing in a line','円陣'] },
        { key:'jpn',title:'和風・着物 / Japanese',kw:['samurai','katana','kimono','tea ceremony','sumo','kendo','naginata','seiza','武士','着物','お点前','相撲'] },
        { key:'west',title:'西洋・宮廷 / Western',kw:['curtsy','gentleman','salon toast','waltz','tango','hand kiss','dress'] },
        { key:'sf',title:'SF・メカ / SF & Mecha',kw:['mech','cockpit','pilot','launch','mecha','sf','arm cannon','railgun','hatch'] },
        { key:'loc',title:'ロケーション / Locations',kw:['loc-'] },
        { key:'extra',title:'エクストラ / Extras',kw:['pose-','expressive','shrug','finger guns','casual salute'] },
        { key:'others',title:'その他 / Others',kw:[] }
      ];
      var groups={}, i;
      for(i=0;i<defs.length;i++){
        var d=defs[i], wrap=document.createElement('details'); wrap.open=false;
        var sum=document.createElement('summary'), count=document.createElement('span'); count.id='cnt-'+d.key; count.textContent='0';
        sum.textContent=d.title+' '; sum.appendChild(count);
        var panel=document.createElement('div'); panel.className='panel';
        var grid=document.createElement('div'); grid.className='grid'; grid.id='g-'+d.key;
        panel.appendChild(grid); wrap.appendChild(panel); wrap.insertBefore(sum,panel);
        el.listPose.appendChild(wrap); groups[d.key]={grid:grid,countEl:count,n:0,def:d};
      }
      function pickGroup(label,id){
        var t=(String(label||'')+' '+String(id||'')).toLowerCase();
        if (id && String(id).indexOf('loc-')===0) return 'loc';
        for(var j=0;j<defs.length;j++){ var dd=defs[j]; if(dd.key==='others') continue; var kws=dd.kw; for(var kx=0;kx<kws.length;kx++){ if(t.indexOf(kws[kx])>-1) return dd.key; } }
        return 'others';
      }
      var totalPose=0, k2;
      for(k2 in window.__parts.pose){
        var pcats = get(window.__parts,['pose',k2,'categories'],[]);
        for(var pi=0;pi<arr(pcats).length;pi++){
          var c3=pcats[pi], items3=arr(c3.items);
          for(var pii=0;pii<items3.length;pii++){
            var it3=items3[pii], keyG=pickGroup(it3.label,it3.id);
            groups[keyG].grid.appendChild(mkChk(it3.id,it3.label||it3.id));
            groups[keyG].n++; totalPose++;
          }
        }
      }
      for(var gk in groups){ groups[gk].countEl.textContent=groups[gk].n; }
      el.numPose.textContent=totalPose;
    })();

    // 髪型
    (function(){
      var host = document.querySelector('#hair-groups'); host.innerHTML='';
      var defs = [
        { key:'pony',title:'🐎 ポニーテール / Ponytails',kw:['ponytail','pony','side-ponytail','twin-ponies'] },
        { key:'twin',title:'🎀 ツイン・サイド / Twin & Side',kw:['twin-tail','twin buns','twin','side-tail','side-ponytail'] },
        { key:'bun',title:'🟤 お団子・アップ / Buns & Updos',kw:['bun','updo','chignon','french twist','roll updo','space buns'] },
        { key:'short',title:'✂️ ショート / Short',kw:['short','pixie','bixie','bob','buzzcut','mullet'] },
        { key:'medium',title:'📏 ミディアム / Medium',kw:['midi','medium','lob'] },
        { key:'long',title:'💫 ロング / Long',kw:['long','mermaid','swan','ribbon-tie long'] },
        { key:'bangs',title:'🧢 前髪 / Bangs',kw:['bang','fringe','curtain bangs','bottleneck'] },
        { key:'braid',title:'🧶 編み・ブレイズ / Braids',kw:['braid','braided','fishtail','dutch','crown braid','rope'] },
        { key:'acc',title:'🎗️ アクセ付き / Accessories',kw:['ribbon','hairpin','tiara','clip','barrette','flower','pearl','beads','chain','scrunchie'] },
        { key:'fant',title:'🪄 ファンタジー・SF / Fantasy & SF',kw:['elf','demon','angel','fairy','goddess','knight','cyber','neon','android','hologram','mecha','space','vr','ai','samurai armor','gladiator','berserker'] },
        { key:'cult',title:'🏛 文化・伝統 / Cultural & Traditional',kw:['samurai','maiko','geisha','miko','viking','egyptian','indi','arab','shrine','edo','kimono','tribal'] },
        { key:'sports',title:'🏃 スポーツ / Sports & Action',kw:['runner','athlete','gym','fighter','martial','swimmer','dancer','basketball','soccer','tennis'] },
        { key:'casual',title:'🧵 カジュアル / Casual & Everyday',kw:['casual','daily','schoolgirl','loose','messy','relaxed','carefree','quick-tie'] },
        { key:'pastel',title:'🎨 パステル / Pastel Colors',kw:['pastel'] },
        { key:'metallic',title:'✨ メタリック / Metallic Colors',kw:['metallic','chrome'] },
        { key:'glow',title:'💡 発光・反応 / Glow & Reactive',kw:['glow','bioluminescent','phosphor','uv','radioactive','neon'] },
        { key:'gradient',title:'🌈 グラデーション / Gradients',kw:['gradient','ombre'] },
        { key:'basic',title:'🧪 ベーシック＆拡張色 / Basic Colors',kw:['hair-','-hair','brown','blonde','red','silver','white','black','auburn','ash','burgundy','rose gold','highlight','gloss','smoky','uv-reactive'] },
        { key:'natural',title:'🍃 自然・元素 / Natural & Elements',kw:['forest','leaf','stone','sand','earth','river','ocean','lava','crystal','aqua','sunset'] },
        { key:'others',title:'▶ その他 / Others',kw:[] }
      ];
      var groups={}, i;
      for(i=0;i<defs.length;i++){
        var d=defs[i], dd=document.createElement('details'); dd.open=false;
        var sm=document.createElement('summary'); var cnt=document.createElement('span'); cnt.id='cnt-hair-'+d.key; cnt.textContent='0';
        sm.textContent=d.title+' '; sm.appendChild(cnt);
        var panel=document.createElement('div'); panel.className='panel';
        var grid=document.createElement('div'); grid.className='grid'; grid.id='g-hair-'+d.key;
        panel.appendChild(grid); dd.appendChild(sm); dd.appendChild(panel);
        document.querySelector('#hair-groups').appendChild(dd);
        groups[d.key]={grid:grid,countEl:cnt,n:0,def:d};
      }
      function pick(label,id){
        var t=(String(label||'')+' '+String(id||'')).toLowerCase();
        for(var j=0;j<defs.length;j++){ var d2=defs[j]; if(d2.key==='others') continue; var kws=d2.kw; for(var kx=0;kx<kws.length;kx++){ if(t.indexOf(kws[kx])>-1) return d2.key; } }
        return 'others';
      }
      var total=0, k2;
      for(k2 in window.__parts.hair){
        var hcats = get(window.__parts,['hair',k2,'categories'],[]);
        for(var hi=0;hi<arr(hcats).length;hi++){
          var c4=hcats[hi], items4=arr(c4.items);
          for(var hii=0;hii<items4.length;hii++){
            var it4=items4[hii], key=pick(it4.label,it4.id);
            groups[key].grid.appendChild(mkChk(it4.id,it4.label||it4.id));
            groups[key].n++; total++;
          }
        }
      }
      for(var gk in groups){ groups[gk].countEl.textContent=groups[gk].n; }
      document.querySelector('#num-hair').textContent=total;
    })();

    // トースト／出力
    var toast=$('#toast'), toastTimer=null;
    function showToast(msg){ toast.textContent=msg; toast.classList.add('show'); if(toastTimer) clearTimeout(toastTimer); toastTimer=setTimeout(function(){toast.classList.remove('show')},3000); }
    $('#reset').addEventListener('click', function(){ var nodes=document.querySelectorAll('input[type="checkbox"]'); for(var i=0;i<nodes.length;i++){nodes[i].checked=false} $('#out').value=''; showToast('リセットしました'); });
    $('#copy').addEventListener('click', function(){ if(navigator.clipboard&&navigator.clipboard.writeText){ navigator.clipboard.writeText($('#out').value||''); showToast('コピーしました'); } });

    function formatHairTokens(ids){
      function lower(s){return String(s||'').toLowerCase()}
      function hasHairWord(t){return t.indexOf(' hair')>-1 || /-hair$/.test(t) || /^hair-/.test(t)}
      var colorMatchers=['pastel','metallic','glow','bioluminescent','phosphor','radioactive','neon','gradient','ombre','uv-reactive','highlight','gloss','smoky','uv-reactive yellow','uv-reactive orange','ash smoky gray','chocolate brown gloss','wine red gloss','blonde highlights','brown highlights'];
      var colorRegexTail=/(black|brown|blonde|red|silver|white|gold|blue|green|pink|purple|pearl|copper|chrome|emerald)$/;
      function isColor(id){ var t=lower(id); return colorMatchers.some(function(k){return t.indexOf(k)>-1}) || colorRegexTail.test(t) || /^hair-/.test(t) || /-hair$/.test(t) }
      function isStyle(id){ return /ponytail|twin|bun|updo|chignon|bob|pixie|pageboy|bang|fringe|braid|afro|mohawk|dread|undercut|hime|nihongami|mullet|lob|shag|wolf|wavy|curly|straight|perm/.test(lower(id)) }
      var mapped = ids.map(function(raw){ var id=String(raw), t=lower(raw); return ((isColor(id)||isStyle(id)) && !hasHairWord(t)) ? id+' hair' : id; });
      return mapped.filter(function(tok){return lower(tok).trim()!=='hair'});
    }

    $('#gen').addEventListener('click', function(){
      var ids=[], nodes=document.querySelectorAll('input[type="checkbox"]:checked');
      for(var i=0;i<nodes.length;i++){ ids.push(nodes[i].dataset.id) }
      $('#out').value = formatHairTokens(ids).join(', ');
      showToast('タグ生成しました');
    });

    // ===== 起動 =====
    function loadCategory(catKey){
      return (async function(){
        var max=CAT_SLOTS[catKey]; writeLog('=== '+catKey+' 読み開始 ==='); var hitEmpty=false;
        for(var i=1;i<=max;i++){
          if(hitEmpty) continue;
          var res = await tryLoad(FILES[catKey](i));
          if(res==='ok'){ meterMap[catKey].okn++; totalOk++; meterMap[catKey].emn--; totalEm--; writeLog('OK : ['+catKey+'] part '+i+' : OK'); totalRead++; }
          else if(res==='empty'){ hitEmpty=true; writeLog('なし : ['+catKey+'] part '+i+' : なし'); }
          else{ meterMap[catKey].ngn++; totalNg++; meterMap[catKey].emn--; totalEm--; writeLog('エラー: ['+catKey+'] part '+i+' : 失敗'); totalRead++; }
          uiMeterUpdate(catKey);
        }
        writeLog('=== '+catKey+' 読み終了 ===');
      })();
    }

    async function run(){
      try{
        log.textContent=''; totalOk=0; totalNg=0; totalEm=TOTAL_SLOTS; totalRead=0;
        for(var i=0;i<CAT_ORDER.length;i++){ var k=CAT_ORDER[i]; meterMap[k].okn=0; meterMap[k].ngn=0; meterMap[k].emn=CAT_SLOTS[k]; uiMeterUpdate(k); }
        for(var j=0;j<CAT_ORDER.length;j++){ await loadCategory(CAT_ORDER[j]); }
        writeLog('=== ロード終了 ==='); renderAll();
      }catch(e){ writeLog('[致命的エラー] '+(e&&e.message?e.message:String(e))); }
    }

    $('#reloadBtn').addEventListener('click', run);
    if(document.readyState==='loading'){ document.addEventListener('DOMContentLoaded', run); }
    else { run(); }
  })();
})();