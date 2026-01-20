// ============================================================
// i18n.core.js (clean base) - UI strings only
// ============================================================
// - Translates ONLY UI labels/strings.
// - Never translate canonical prompt tokens.
// - Single entry: window.__i18n
// ============================================================
(function(){
  "use strict";

  const STORE_KEY = "BUILDER_LANG";
  const DEFAULT_LANG = "ja";

  const DICTS = {
    ja: {
    "ui.clear_confirm": "「{label}」内のチェックを全て外しますか？",

    "ui.clear_title": "このカテゴリーの選択を全て解除",

    "ui.clear": "🗑️ クリア",

    "ui.search_placeholder": "🔍 項目を検索... (例: ビキニ, bikini)",

      "ui.generate": "生成 (Generate)",
      "ui.copy": "コピー",
      "ui.copy_done": "コピー完了!",
      "ui.reset": "リセット",
      "ui.jp_view": "訳ガイド",
      "ui.lang": "言語",
      "ui.lang_ja": "日本語",
      "ui.lang_en": "English",
      "ui.log_autoscroll": "ログ自動スクロール",
      "ui.log_expand": "拡大",
      "ui.log_shrink": "縮小",
      "ui.reload": "再読込",
      "ui.output_placeholder": "ここに生成されたタグが表示されます..."
    },
    en: {
      "ui.generate": "Generate",
      "ui.copy": "Copy",
      "ui.copy_done": "Copied!",
      "ui.reset": "Reset",
      "ui.jp_view": "JP View",
      "ui.lang": "Lang",
      "ui.lang_ja": "日本語",
      "ui.lang_en": "English",
      "ui.log_autoscroll": "Auto-scroll logs",
      "ui.log_expand": "Expand",
      "ui.log_shrink": "Shrink",
      "ui.reload": "Reload",
      "ui.output_placeholder": "Generated tags will appear here..."
    }
  };

  function safeGetLang(){
    // Force UI language to Japanese to avoid accidental English UI due to stale localStorage.
    const forced = "ja";
    try { localStorage.setItem(STORE_KEY, forced); } catch(e){}
    return forced;
  }

  let _lang = safeGetLang();

  function t(key, fallback){
    const d = DICTS[_lang] || DICTS[DEFAULT_LANG] || {};
    if (Object.prototype.hasOwnProperty.call(d, key)) return d[key];
    const d0 = DICTS[DEFAULT_LANG] || {};
    if (Object.prototype.hasOwnProperty.call(d0, key)) return d0[key];
    return fallback ?? key;
  }

  function getLang(){ return _lang; }

  function setLang(lang){
    // UI language is fixed to Japanese.
    lang = "ja";
    _lang = lang;
    try { localStorage.setItem(STORE_KEY, lang); } catch(e){}
    try { if (typeof window.__applyI18n === "function") window.__applyI18n(); } catch(e){}
  }

  function toggleLang(){
    setLang(_lang === "ja" ? "en" : "ja");
  }

  window.__i18n = {
    t,
    getLang,
    setLang,
    toggleLang,
    dicts: DICTS
  };
})();
