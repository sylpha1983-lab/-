// ext_debug_inventory.v1.js
(function(root){
  "use strict";
  function listAllScripts(){
    var all = document.getElementsByTagName("script"), out = [];
    for(var i=0;i<all.length;i++){
      var s = all[i].getAttribute("src");
      if(s) out.push(s.split("?")[0]);
    }
    return out;
  }
  function uniq(arr){ return Array.from(new Set(arr)); }

  function logInventory(){
    try{
      var declared = (root.__EXT_MANIFEST__ && root.__EXT_MANIFEST__.groups)
        ? root.__EXT_MANIFEST__.groups.flatMap(g => g.files || [])
        : [];
      var loaded = listAllScripts();
      var missing = declared.filter(f => !loaded.find(x => x.endsWith(f)));
      var extra   = loaded.filter(x => !declared.find(f => x.endsWith(f)));

      if(typeof root.writeLog === "function"){
        root.writeLog("[inv] declared: " + declared.length);
        root.writeLog("[inv] loaded:   " + loaded.length);
        root.writeLog("[inv] missing:  " + missing.length + (missing.length?(" -> "+missing.join(", ")): ""));
        root.writeLog("[inv] extra:    " + extra.length   + (extra.length?(" -> "+uniq(extra).join(", ")): ""));
      } else {
        console.log({declared, loaded, missing, extra});
      }
    }catch(e){
      console.error("[inv] error:", e);
    }
  }

  // 起動後少し待ってから集計
  setTimeout(logInventory, 1500);
})(window);