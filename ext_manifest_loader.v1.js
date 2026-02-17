(function() {
  "use strict";

  // ---- 1. グローバル拡張安全レジストリ ----
  window.__registerPromptPart = function (key, version, api) {
    if (!window.__promptParts) window.__promptParts = {};
    const part = window.__promptParts[key];

    if (part) {
      if (part.__version && part.__version >= version) {
        console.log(`[skip] ${key} v${version} → 現在 v${part.__version} が優先`);
        return;
      }
      console.log(`[update] ${key} v${version} → v${version}`);
    } else {
      console.log(`[register] ${key} v${version}`);
    }

    api.__version = version;
    window.__promptParts[key] = api;
  };

  // ---- 2. 設定と変数 ----
  const basePath = "./";
  const MAX_VERSION = 10; // 探索する最大バージョン数
  const logArea = document.getElementById("log");
  let stats = { success: 0, fail: 0, empty: 0 };

  function isDevMode(){
    try { return localStorage.getItem("BUILDER_DEV_MODE") === "true"; }
    catch(e){ return false; }
  }
  const DEV_MODE = isDevMode();

  function setProgress(pct, label){
    if (DEV_MODE) return;
    const bar = document.getElementById("progress-bar");
    const txt = document.getElementById("progress-text");
    if (bar) bar.style.width = Math.max(0, Math.min(100, pct)) + "%";
    if (txt && label) txt.textContent = label;
  }

  
  const LOADED_CACHE = {}; 

  // ---- 3. ユーティリティ関数 ----
  function log(msg, cls) {
    console.log(msg);
    if (!DEV_MODE) return;
    if (!logArea) return;
    const line = document.createElement("div");
    line.textContent = msg;
    if (cls) line.className = cls;
    logArea.appendChild(line);
    if (document.getElementById("auto-scroll")?.checked)
      logArea.scrollTop = logArea.scrollHeight;
  }

  function sleep(ms){ return new Promise(function(r){setTimeout(r,ms);}); }

  // ---- 4. 安全なファイル読み込み関数 ----
  async function safeLoad(file, retry=true) {
    const normalizedFile = file.replace(/^\.\//, "").replace(basePath, "").replace('//', '/');

    if (LOADED_CACHE[normalizedFile] === true) return true;
    
    let attempt = 0;
    const maxAttempts = retry ? 3 : 1; 

    while(attempt < maxAttempts) {
      if (attempt > 0) {
        let waitTime = 180;
        log(`🔄 Retrying ${file} after ${waitTime}ms (Attempt ${attempt + 1})...`, 'empty'); 
        await sleep(waitTime);
      }

      try {
        const res = await fetch(file, { cache: "no-cache" });
        
        if (res.status === 404) {
          LOADED_CACHE[normalizedFile] = false;
          return false; 
        }
        
        if (res.ok) {
          const js = await res.text();
          try {
            eval(js); 
            LOADED_CACHE[normalizedFile] = true; 
            stats.success++;
            if(attempt > 0) log(`✔ Loaded on Retry: ${file}`, 'success'); 
            else log(`✔ Loaded: ${file}`, "success");
            return true;
          } catch(e) {
            throw new Error(`Eval failed: ${e.message}`);
          }
        }
        throw new Error(`HTTP ${res.status}`);

      } catch (e) {
        if (attempt === maxAttempts - 1) {
          log(`❌ Failed to fetch ${file}: ${e.message}`, "fail");
          stats.fail++;
        }
      }
      attempt++;
    }
    LOADED_CACHE[normalizedFile] = false; 
    return false;
  }
  
  // ---- 5. マニフェスト読み込み ----
  async function loadStaticManifest() {
    try {
      const res = await fetch(`${basePath}ext_manifest.v2.js`, { cache: "no-cache" });
      if (!res.ok) return [];
      const js = await res.text();
      eval(js); 
      if (Array.isArray(window.EXT_MANIFEST)) {
        log(`📜 Static manifest loaded (${window.EXT_MANIFEST.length} items)`, "success");
        return window.EXT_MANIFEST.map(f => f.replace(/^\.\//, ""));
      }
    } catch (e) {
      console.warn("No ext_manifest found", e);
    }
    return [];
  }

  // ---- 6. 自動探索ロジック (全バージョン探索版) ----
  async function loadCategory(cat) { 
    let registeredAny = false;

    // v1 から MAX_VERSION まで全てチェックする (抜け番があっても止まらない)
    for (let v = 1; v <= MAX_VERSION; v++) {
      const file = `${basePath}builder_ui.section.${cat}.v${v}.js`;
      const ok = await safeLoad(file, true); 

      if (ok) {
        registeredAny = true;
      }
      // ★修正: 連続失敗による break を削除し、飛び番(v1, v6, v8...)に対応
    }
    
    if (!registeredAny) {
      // 1つも見つからなかった場合のみログを出す（うるさくないように）
      // log(`ℹ No extensions found for ${cat}`, "empty");
    }
  }

  // ---- 7. 初期化実行関数 ----
  async function init() {
    if (window.__manifestInitialized) return;
    window.__manifestInitialized = true;
    
    stats = { success: 0, fail: 0, empty: 0 };
    
    log("🔍 Manifest loader start (v2 manifest)...");

    // 1. Coreロード (必須)
    if (await safeLoad(`${basePath}builder_core.v1.js`, true)) {
        log("✔ Core initialized", "success");
    } else {
        log("❌ Fatal: Core failed to initialize.", "fail");
        return;
    }

    // 2. 翻訳辞書ロード (必須)
    await safeLoad(`${basePath}builder_data.translation.v1.js`, true);

    // 3. Static Manifest内のファイルをロード
    const staticFilesList = await loadStaticManifest();
    const totalStatic = (staticFilesList && staticFilesList.length) ? staticFilesList.length : 1;
    let doneStatic = 0;
    setProgress(1, "Manifest loaded…");
    for (const file of staticFilesList) {
      const fullPath = `./${file}`;
      await safeLoad(fullPath, true);
      doneStatic++;
      const pct = Math.round((doneStatic / totalStatic) * 100);
      setProgress(pct, `Loading… ${doneStatic}/${totalStatic}`);
    }
    setProgress(100, "Finalizing…");
// 4. 自動探索対象カテゴリ 
    // ★修正: quality_preset を追加しました
    const categories = [
      "quality_preset", // ← これが重要！(v1, v6, v8, v9, v10を読み込むため)
      "expression","filter","hair","pose","attire","background",
      "lighting","effect","cinematic","faith","presets",
      "preview_sync","visualsync"
    ];


    // 5. 各カテゴリごとに全バージョンを探索
    // Bundled Baseでは、manifestで明示された bundle のみを読み込む。
    // 旧方式の総当たり探索はデバッグ時のみ有効化できる。
    const enableScan = /[?&]scan=1(?:&|$)/.test(location.search);
    if (enableScan) {
      for (const cat of categories) {
        await loadCategory(cat);
      }
    }

// 6. 統計更新
    const sEl = document.getElementById("success-count");
    const fEl = document.getElementById("fail-count");
    if(sEl) sEl.textContent = stats.success;
    if(fEl) fEl.textContent = stats.fail;
    
    log("✅ Manifest loading complete.", "success");
    
    // 7. UIマウントのトリガー
    if (window.__triggerUIMount) {
      log("🚀 Triggering UI mount...", "success");
      window.__triggerUIMount();
    } else {
      log("❌ Core function __triggerUIMount not found.", "fail");
    }
  }

  // ---- 8. 実行開始 ----
  init();

})();

