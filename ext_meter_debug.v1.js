// ext_meter_debug.v1.js
(function(root){ "use strict";
  function log(s){ try{ root.writeLog(s); }catch(_){ console.log(s); } }

  async function meterExtListDebug(){
    const nodes = Array.from(document.querySelectorAll('script[data-ext][src]'));
    if(!nodes.length){ log('[ext-debug] no data-ext scripts found'); return; }
    let i=1;
    for(const el of nodes){
      const url = el.getAttribute('src');
      try{
        // HEADが不安定な環境があるため、HEAD→失敗時のみGETで再確認
        let ok = false, status = 0;
        try{
          const head = await fetch(url, { method:'HEAD', cache:'no-store' });
          status = head.status; ok = head.ok;
        }catch(_){}
        if(!ok){
          try{
            const get = await fetch(url, { method:'GET', cache:'no-store' });
            status = get.status; ok = get.ok;
          }catch(e2){
            log(`[ext-debug] error: ${i} ${url} (${e2 && e2.message || e2})`);
          }
        }
        if(ok)  log(`[ext-debug] ok   : ${i} ${url} (HTTP ${status})`);
        else    log(`[ext-debug] empty: ${i} ${url} (HTTP ${status||'N/A'})`);
      }catch(e){
        log(`[ext-debug] error: ${i} ${url} (${e && e.message || e})`);
      }
      i++;
    }
  }

  if(document.readyState==='complete') meterExtListDebug();
  else window.addEventListener('load', meterExtListDebug, { once:true });
})(window);