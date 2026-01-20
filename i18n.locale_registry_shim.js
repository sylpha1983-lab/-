/**
 * i18n locale registry shim (non-destructive).
 * - Adds __i18n.registerLocale(lang, dict)
 * - Applies any pending locales in window.__I18N_PENDING_LOCALES
 */
(function(){
  function ensure(){
    if (!window.__i18n) return false;
    if (typeof window.__i18n.registerLocale !== 'function') {
      window.__i18n._locales = window.__i18n._locales || {};
      window.__i18n.registerLocale = function(lang, dict){
        this._locales[lang] = Object.assign(this._locales[lang] || {}, dict || {});
        try {
          if (this.lang && this.lang === lang && this.dict) {
            this.dict = Object.assign({}, this.dict, this._locales[lang]);
          }
        } catch(e){}
      };
      window.__i18n.getLocales = function(){ return this._locales || {}; };
    }
    if (window.__I18N_PENDING_LOCALES) {
      Object.keys(window.__I18N_PENDING_LOCALES).forEach(function(lang){
        window.__i18n.registerLocale(lang, window.__I18N_PENDING_LOCALES[lang]);
      });
    }
    return true;
  }
  if (!ensure()) {
    const t = setInterval(function(){
      if (ensure()) clearInterval(t);
    }, 50);
    setTimeout(function(){ try{clearInterval(t);}catch(e){} }, 5000);
  }
})();
