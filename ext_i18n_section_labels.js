// ext_i18n_section_labels.js
// Apply i18n labels to section <h2> headers (bundle-safe, no dependency on v1/v2 mount chain)
(function () {
  "use strict";

  function isDevMode() {
    try {
      return localStorage.getItem("BUILDER_DEV_MODE") === "true";
    } catch (e) {
      return false;
    }
  }

  function t(key, fallback) {
    if (window.__i18n && typeof window.__i18n.t === "function") {
      return window.__i18n.t(key, fallback);
    }
    return fallback;
  }

  const SECTION_IDS = [
    "quality_preset","style","anatomy","race","bodytype","traits","hair","skin_details",
    "attire","accessories","texture","expression","pose","narrative","composition","camera",
    "background","lighting","shadow","atmosphere","effect","postprocessing","filter","presets"
  ];

  function applyOnce() {
    SECTION_IDS.forEach(function (id) {
      const root = document.getElementById("list-" + id);
      if (!root) return;
      const h2 = root.querySelector("h2");
      if (!h2) return;
      const key = "section." + id + ".label";
      const fallback = h2.getAttribute("data-i18n-fallback") || h2.textContent || id;
      if (!h2.getAttribute("data-i18n-fallback")) h2.setAttribute("data-i18n-fallback", fallback);
      const next = t(key, fallback);
      if (next && h2.textContent !== next) h2.textContent = next;
    });
  }

  function hook() {
    // Re-apply on language changes
    window.addEventListener("i18n:changed", function () {
      applyOnce();
    });

    // If __applyI18n exists, wrap it so any manual calls also update headers.
    if (typeof window.__applyI18n === "function" && !window.__applyI18n.__wrappedSectionLabels) {
      const prev = window.__applyI18n;
      const wrapped = function () {
        try { prev(); } catch (e) {}
        applyOnce();
      };
      wrapped.__wrappedSectionLabels = true;
      window.__applyI18n = wrapped;
    }
  }

  // Run after mount; sections are created asynchronously.
  let tries = 0;
  const timer = setInterval(function () {
    tries++;
    applyOnce();
    // Stop once at least one header is found, or after some time.
    const any = SECTION_IDS.some(function (id) {
      const root = document.getElementById("list-" + id);
      return root && root.querySelector("h2");
    });
    if (any || tries > 50) {
      clearInterval(timer);
      hook();
      // Dev: print a small note
      if (isDevMode() && window.__LOG) {
        window.__LOG("ℹ️ i18n section labels active.");
      }
    }
  }, 120);
})();
