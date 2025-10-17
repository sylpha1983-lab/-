// ext_loader_autodetect.js — v2.2.1-clean (UI無し・既存メーター専用)
(function (root) {
  "use strict";

  const log = (m) => {
    try {
      (root.writeLog ? root.writeLog(m) : console.log("[inv]", m));
    } catch (_) {}
  };

  const meterState = {
    total: 0,
    success: 0,
    error: 0,
    empty: 0,
  };

  // === ログ解析処理 ===
  function parseLog(msg) {
    try {
      if (msg.includes("loaded:")) {
        meterState.success++;
      } else if (msg.includes("error:")) {
        meterState.error++;
      } else if (msg.includes("[manifest loader] total:")) {
        const match = msg.match(/total:\s*(\d+)/);
        if (match) {
          meterState.total = parseInt(match[1], 10);
        }
      }
      meterState.empty = Math.max(
        0,
        meterState.total - (meterState.success + meterState.error)
      );

      // 既存UIが存在するなら更新イベントを発火
      const event = new CustomEvent("loader:updated", { detail: meterState });
      window.dispatchEvent(event);
    } catch (_) {}
  }

  // === console.log + writeLog のフック ===
  function hookAllLogs() {
    // console.log
    const origConsole = console.log;
    console.log = function (...args) {
      const msg = args.join(" ");
      parseLog(msg);
      return origConsole.apply(console, args);
    };

    // writeLog
    if (typeof root.writeLog === "function") {
      const origWriteLog = root.writeLog;
      root.writeLog = function (msg) {
        parseLog(msg);
        return origWriteLog.apply(this, arguments);
      };
      log("hooked writeLog()");
    } else {
      log("writeLog() not found; will retry if defined later");
      const retry = setInterval(() => {
        if (typeof root.writeLog === "function") {
          clearInterval(retry);
          const origWriteLog = root.writeLog;
          root.writeLog = function (msg) {
            parseLog(msg);
            return origWriteLog.apply(this, arguments);
          };
          log("late hook attached to writeLog()");
        }
      }, 500);
    }

    log("console + writeLog hooks active");
  }

  // === 初期化 ===
  (function init() {
    let retries = 0;
    const maxRetries = 30;
    function tryInit() {
      if (document.readyState === "complete" || document.readyState === "interactive") {
        hookAllLogs();
        log("loader checker initialized (UI disabled / sync only)");
      } else if (retries < maxRetries) {
        retries++;
        setTimeout(tryInit, 300);
      } else {
        console.warn("[inv] loader checker init timeout");
      }
    }
    tryInit();
  })();

  // === 外部API ===
  root.LoaderChecker = {
    incSuccess: () => {
      meterState.success++;
      const event = new CustomEvent("loader:updated", { detail: meterState });
      window.dispatchEvent(event);
    },
    incError: () => {
      meterState.error++;
      const event = new CustomEvent("loader:updated", { detail: meterState });
      window.dispatchEvent(event);
    },
    reset: () => {
      meterState.success = 0;
      meterState.error = 0;
      meterState.total = 0;
      meterState.empty = 0;
      const event = new CustomEvent("loader:updated", { detail: meterState });
      window.dispatchEvent(event);
    },
    state: meterState,
  };
})(window);