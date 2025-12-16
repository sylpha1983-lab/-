window.EXT_MANIFEST = [
  "builder_core.v1.js",

  // 1. Quality & Anatomy
  // ★データファイルを先に読み込む (これでデータが確実に定義されます)
  "builder_data.qp_base.js",        
  "builder_data.qp_situations.js",  
  
  // ★UIファイルは「v1」の1つだけに統合しました
  // (不具合の原因だった v2, v3, v4 は削除しました)
  "builder_ui.section.quality_preset.v1.js", 

  "builder_ui.section.anatomy.v1.js",

  // 2. Character Base
  "builder_ui.section.race.v1.js", 
  "builder_ui.section.race.v2.js", 
  "builder_ui.section.race.v3.js", 
  "builder_ui.section.race.v4.js", 
  "builder_ui.section.bodytype.v1.js",
  "builder_ui.section.traits.v1.js",
  "builder_ui.section.hair.v4.js",
  "builder_ui.section.hair.v5.js",
  "builder_ui.section.hair.v6.js",

  // 3. Attire & Fashion
  "builder_ui.section.attire.v1.js",
  "builder_ui.section.attire.v2.js",
  "builder_ui.section.attire.v3.js",
  "builder_ui.section.attire.v4.js",
  "builder_ui.section.attire.v5.js",
  "builder_ui.section.attire.v6.js",
  "builder_ui.section.attire.v7.js",
  "builder_ui.section.attire.v8.js",
  "builder_ui.section.attire.v9.js",
  "builder_ui.section.attire.v10.js",
  "builder_ui.section.attire.v11.js",
  "builder_ui.section.attire.v12.js",
  "builder_ui.section.attire.v13.js",
  "builder_ui.section.attire.v14.js",
  "builder_ui.section.attire.v15.js",
  "builder_ui.section.attire.v16.js",

  // 4. Details
  "builder_ui.section.accessories.v1.js",
  "builder_ui.section.texture.v1.js",

  // 5. Action & Camera
  "builder_ui.section.expression.v1.js",
  "builder_ui.section.expression.v2.js",
  "builder_ui.section.expression.v3.js",
  
  // ★ ポーズ構成 (v1土台 + v2拡張)
  "builder_ui.section.pose.v1.js", 
  "builder_ui.section.pose.v2.js", 
  
  "builder_ui.section.narrative.v1.js",
  "builder_ui.section.composition.v1.js",
  "builder_ui.section.camera.v1.js",

  // 6. Environment & Post-Processing
  "builder_ui.section.background.v4.js",
  "builder_ui.section.lighting.v2.js",
  "builder_ui.section.atmosphere.v1.js",
  "builder_ui.section.effect.v1.js",
  "builder_ui.section.postprocessing.v1.js",
  "builder_ui.section.filter.v1.js",
  
  // 7. Utilities
  "builder_ui.section.presets.v1.js",
  "builder_ui.visualsync.v4.js", 
  
  // 拡張機能
  "ext_sync_check.js",
  "ext_footer_search.js",        
  "ext_autosave.js",             
  "ext_history.js",
  "ext_smart_edit.js",           
  "ext_copy_button.js"
];

