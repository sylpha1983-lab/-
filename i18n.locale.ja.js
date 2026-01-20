/* i18n.locale.ja.js — categorized editable format (UTF-8) */
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

  // --- UI 共通 (Buttons / Labels) ---
  __registerLocaleChunk("ja", {
    "ui.clear": "クリア",
    "ui.clear_confirm": "「{label}」の選択をクリアしますか？",
    "ui.clear_title": "クリア",
    "ui.emphasis": "() 強調",
    "ui.fail": "失敗",
    "ui.novelai_wrap": "{} NovelAI",
    "ui.search_placeholder": "項目を検索…（例: ビキニ, bikini）",
    "ui.success": "成功",
    "ui.weaken": "[] 弱化"
  });

  // --- セクション見出し / Section headers ---
  __registerLocaleChunk("ja", {
    "section.quality_preset.label": "1. 品質・設定",
    "section.style.label": "2. 画風・スタイル",
    "section.anatomy.label": "3. 人体崩壊防止・構造",
    "section.race.label": "4. 種族・素体",
    "section.bodytype.label": "5. 体型・プロポーション",
    "section.traits.label": "6. キャラ固有要素・特徴",
    "section.hair.label": "7. ヘアスタイル",
    "section.skin_details.label": "8. メイク・身体特徴",
    "section.expression.label": "9. 表情",
    "section.attire.label": "10. 服装・衣装",
    "section.accessories.label": "11. アクセサリ・小物",
    "section.texture.label": "12. 素材・質感",
    "section.pose.label": "13. ポーズ・構図",
    "section.narrative.label": "14. ストーリー・行動",
    "section.composition.label": "15. 構図・設計",
    "section.camera.label": "16. カメラ・レンズ",
    "section.background.label": "17. 背景・場所",
    "section.lighting.label": "18. 照明・ライティング",
    "section.shadow.label": "19. 影",
    "section.atmosphere.label": "20. 雰囲気・色彩",
    "section.effect.label": "21. エフェクト・演出",
    "section.postprocessing.label": "22. 仕上げ・後処理",
    "section.filter.label": "23. フィルター・効果",
    "section.presets.label": "24. 保存済みプリセット"
  });

  // =========================
  // Prompt Tokens (editable)
  // =========================

  // --- 1. 品質・設定 (Quality & Settings) ---
  __registerLocaleChunk("ja", {
    "prompt.token.20377b24": "傑作",
    "prompt.token.34eea4fb": "最高品質",
    "prompt.token.936eed61": "超高精細",
    "prompt.token.a257eabe": "高解像度"
  });

  // --- 2. 画風・スタイル (Art Style) ---
  __registerLocaleChunk("ja", {
    // 例:
    // "prompt.token.xxxxxxxx": "京アニ風"
  });

  // --- 3. 人体崩壊防止・構造 (Anatomy) ---
  __registerLocaleChunk("ja", {});

  // --- 4. 種族・素体 (Race) ---
  __registerLocaleChunk("ja", {});

  // --- 5. 体型・プロポーション (Body Type) ---
  __registerLocaleChunk("ja", {});

  // --- 6. キャラ固有要素・特徴 (Traits) ---
  __registerLocaleChunk("ja", {});

  // --- 7. ヘアスタイル (Hair) ---
  __registerLocaleChunk("ja", {});

  // --- 8. メイク・身体特徴 (Skin & Details) ---
  __registerLocaleChunk("ja", {});

  // --- 9. 表情 (Expression) ---
  __registerLocaleChunk("ja", {});

  // --- 10. 服装・衣装 (Attire) ---
  __registerLocaleChunk("ja", {});

  // --- 11. アクセサリ・小物 (Accessories) ---
  __registerLocaleChunk("ja", {});

  // --- 12. 素材・質感 (Material/Texture) ---
  __registerLocaleChunk("ja", {});

  // --- 13. ポーズ・構図 (Pose) ---
  __registerLocaleChunk("ja", {});

  // --- 14. ストーリー・行動 (Narrative) ---
  __registerLocaleChunk("ja", {});

  // --- 15. 構図・設計 (Composition) ---
  __registerLocaleChunk("ja", {});

  // --- 16. カメラ・レンズ (Camera/Lens) ---
  __registerLocaleChunk("ja", {});

  // --- 17. 背景・場所 (Background) ---
  __registerLocaleChunk("ja", {});

  // --- 18. 照明・ライティング (Lighting & Shadow) ---
  __registerLocaleChunk("ja", {});

  // --- 19. 雰囲気・色彩 (Atmosphere & Color) ---
  __registerLocaleChunk("ja", {});

  // --- 20. エフェクト・演出 (Effects) ---
  __registerLocaleChunk("ja", {});

  // --- 21. 仕上げ・後処理 (Post-Processing) ---
  __registerLocaleChunk("ja", {});

  // --- 22. フィルター・効果 (Filter) ---
  __registerLocaleChunk("ja", {});

  // --- 23. 保存済みプリセット (My Presets) ---
  __registerLocaleChunk("ja", {});

  // --- 🛠️ Visual Sync (Preview & Adjust) ---
  __registerLocaleChunk("ja", {});

  // --- その他 / Other keys ---
  __registerLocaleChunk("ja", {
    "dev.i18n.export_all": "全てを書き出し",
    "dev.i18n.export_current": "現在のみ書き出し",
    "dev.i18n.missing": "未登録キー",
    "dev.i18n.output": "出力…",
    "dev.i18n.skeleton": "スケルトン",
    "dev.i18n.title": "i18n 開発"
  });
})();
