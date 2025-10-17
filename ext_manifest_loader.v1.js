// ext_manifest_loader.v1.js — v1.0.2 (loader summary linked)
(function (root) {
  "use strict";

  // すでにロード済みならスキップ
  if (root.__EXT_MANIFEST_LOADED__) return;
  root.__EXT_MANIFEST_LOADED__ = true;

  const log = (msg) => {
    try {
      (root.writeLog ? root.writeLog(msg) : console.log("[ext.manifest.loader]", msg));
    } catch (_) {}
  };

  const manifestURL = "ext_manifest.v1.js";

  // 動的ロード関数
  function loadScript(src) {
    return new Promise((resolve) => {
      const s = document.createElement("script");
      s.src = src + "?v=" + Date.now();
      s.async = false;
      s.onload = () => {
        log(`loaded: ${src}`);
        if (root.__reportLoader) root.__reportLoader(src, true); // ✅ 成功を通知
        resolve(true);
      };
      s.onerror = (e) => {
        log(`error: ${src} (${e.message || e})`);
        if (root.__reportLoader) root.__reportLoader(src, false); // ❌ 失敗を通知
        resolve(false);
      };
      document.head.appendChild(s);
    });
  }

  // マニフェスト初期化
  function loadManifest() {
    if (root.__EXT_MANIFEST__ && root.__EXT_MANIFEST__.groups) {
      log("manifest already available");
      processManifest(root.__EXT_MANIFEST__);
      return;
    }

    loadScript(manifestURL).then(() => {
      if (root.__EXT_MANIFEST__ && root.__EXT_MANIFEST__.groups) {
        log("manifest loaded successfully");
        processManifest(root.__EXT_MANIFEST__);
      } else {
        log("manifest missing or invalid");
      }
    });
  }

  // グループ処理（順次ロード対応）
  async function processManifest(M) {
    if (!M || !M.groups || !M.groups.length) {
      log("empty manifest");
      return;
    }

    let totalFiles = 0;
    log(`[manifest loader] total groups: ${M.groups.length}`);

    for (const group of M.groups) {
      if (!group || !Array.isArray(group.files)) continue;
      log(`group: ${group.name} (${group.files.length})`);

      for (const f of group.files) {
        await loadScript(f);
        totalFiles++;
      }
    }

    log(`[manifest loader] total: ${totalFiles} files`);
  }

  // ロード開始
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadManifest, { once: true });
  } else {
    loadManifest();
  }
})(window);