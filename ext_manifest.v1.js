// ext_manifest.v1.js
// 読み込み数を安定させるための最小構成マニフェスト
window.EXT_MANIFEST = [

  // =============================
  // コア機能 (正確なファイル名)
  // =============================
  "builder_core.v1.js",       // ★ 修正: builder_ui.core.v1.js -> builder_core.v1.js

  // =============================
  // UIセクション - 最新バージョンのみ
  // =============================
  
  "builder_ui.section.expression.v4.js",
  "builder_ui.section.filter.v2.js",
  "builder_ui.section.pose.v1.js",
  
  // =============================
  // プレビュー・トーン補正 (Critical Files)
  // =============================

  "builder_ui.preview_sync.v1.js",
  "builder_ui.visualsync.v1.js",

  // =============================
  // その他 (HTTP 404の原因となっていたファイル群は削除/確認)
  // ログで成功が確認できなかったため、機能しないファイルは削除します。
  // =============================
  
  // "builder_ui.section.hair.v1.js", // 削除
  // "builder_ui.kit.v1.js",
  // "builder_ui.adapters.v1.js",
  // "builder_ui.v1.js",
  // ... (その他全て削除)
  
];

