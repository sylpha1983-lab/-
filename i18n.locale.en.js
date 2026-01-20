/* i18n.locale.en.js — categorized editable format (UTF-8) */
(function(){
  function __registerLocaleChunk(lang, additions) {
    if (typeof window === "undefined") return;
    window.__I18N_PENDING_LOCALES = window.__I18N_PENDING_LOCALES || {};
    window.__I18N_PENDING_LOCALES[lang] =
      Object.assign(window.__I18N_PENDING_LOCALES[lang] || {}, additions);
    if (window.__i18n && typeof window.__i18n.registerLocale === "function") {
      window.__i18n.registerLocale(lang, additions);
    }
  }

  // --- UI common (Buttons / Labels) ---
  __registerLocaleChunk("en", {
    "ui.clear": "Clear",
    "ui.clear_confirm": "Clear selections for \"{label}\"?",
    "ui.clear_title": "Clear",
    "ui.emphasis": "() Emphasis",
    "ui.fail": "Fail",
    "ui.novelai_wrap": "{} NovelAI",
    "ui.search_placeholder": "Search items... (e.g., bikini)",
    "ui.success": "OK",
    "ui.weaken": "[] Weaken"
  });

  // --- Section headers ---
  __registerLocaleChunk("en", {
    "section.quality_preset.label": "1. Quality & Settings",
    "section.style.label": "2. Art Style",
    "section.anatomy.label": "3. Anatomy",
    "section.race.label": "4. Race",
    "section.bodytype.label": "5. Body Type",
    "section.traits.label": "6. Traits",
    "section.hair.label": "7. Hair",
    "section.skin_details.label": "8. Skin & Details",
    "section.attire.label": "10. Attire",
    "section.accessories.label": "11. Accessories",
    "section.texture.label": "12. Material / Texture",
    "section.expression.label": "9. Expression",
    "section.pose.label": "13. Pose",
    "section.narrative.label": "14. Narrative",
    "section.composition.label": "15. Composition",
    "section.camera.label": "16. Camera / Lens",
    "section.background.label": "17. Background",
    "section.lighting.label": "18. Lighting",
    "section.shadow.label": "19. Shadow",
    "section.atmosphere.label": "20. Atmosphere & Color",
    "section.effect.label": "21. Effects",
    "section.postprocessing.label": "22. Post-processing",
    "section.filter.label": "23. Filter",
    "section.presets.label": "24. My Presets"
  });

  // =========================
  // Prompt Tokens (editable)
  // =========================

  // --- 1. 品質・設定 (Quality & Settings) ---
  __registerLocaleChunk("en", {
    "prompt.token.20377b24": "masterpiece",
    "prompt.token.34eea4fb": "best quality",
    "prompt.token.936eed61": "ultra-detailed",
    "prompt.token.a257eabe": "highres"
  });

  // --- 2. 画風・スタイル (Art Style) ---
  __registerLocaleChunk("en", {
    // add here
    // "prompt.token.xxxxxxxx": "kyoto animation"
  });

  // --- 3. 人体崩壊防止・構造 (Anatomy) ---
  __registerLocaleChunk("en", {});

  // --- 4. 種族・素体 (Race) ---
  __registerLocaleChunk("en", {});

  // --- 5. 体型・プロポーション (Body Type) ---
  __registerLocaleChunk("en", {});

  // --- 6. キャラ固有要素・特徴 (Traits) ---
  __registerLocaleChunk("en", {});

  // --- 7. ヘアスタイル (Hair) ---
  __registerLocaleChunk("en", {});

  // --- 8. メイク・身体特徴 (Skin & Details) ---
  __registerLocaleChunk("en", {});

  // --- 9. 表情 (Expression) ---
  __registerLocaleChunk("en", {});

  // --- 10. 服装・衣装 (Attire) ---
  __registerLocaleChunk("en", {});

  // --- 11. アクセサリ・小物 (Accessories) ---
  __registerLocaleChunk("en", {});

  // --- 12. 素材・質感 (Material/Texture) ---
  __registerLocaleChunk("en", {});

  // --- 13. ポーズ・構図 (Pose) ---
  __registerLocaleChunk("en", {});

  // --- 14. ストーリー・行動 (Narrative) ---
  __registerLocaleChunk("en", {});

  // --- 15. 構図・設計 (Composition) ---
  __registerLocaleChunk("en", {});

  // --- 16. カメラ・レンズ (Camera/Lens) ---
  __registerLocaleChunk("en", {});

  // --- 17. 背景・場所 (Background) ---
  __registerLocaleChunk("en", {});

  // --- 18. 照明・ライティング (Lighting & Shadow) ---
  __registerLocaleChunk("en", {});

  // --- 19. 雰囲気・色彩 (Atmosphere & Color) ---
  __registerLocaleChunk("en", {});

  // --- 20. エフェクト・演出 (Effects) ---
  __registerLocaleChunk("en", {});

  // --- 21. 仕上げ・後処理 (Post-Processing) ---
  __registerLocaleChunk("en", {});

  // --- 22. フィルター・効果 (Filter) ---
  __registerLocaleChunk("en", {});

  // --- 23. 保存済みプリセット (My Presets) ---
  __registerLocaleChunk("en", {});

  // --- 🛠️ Visual Sync (Preview & Adjust) ---
  __registerLocaleChunk("en", {});

  // --- Other keys (dev) ---
  __registerLocaleChunk("en", {
    "dev.i18n.export_all": "Export all",
    "dev.i18n.export_current": "Export current",
    "dev.i18n.missing": "Missing keys",
    "dev.i18n.output": "Output...",
    "dev.i18n.skeleton": "Skeleton",
    "dev.i18n.title": "i18n DEV"
  });
})();
