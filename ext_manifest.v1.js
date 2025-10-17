// ext_manifest.v1.js — v1.0.0
(function (root) {
  "use strict";

  // すでに定義済みなら上書きしない
  if (!root.__EXT_MANIFEST__) {
    root.__EXT_MANIFEST__ = {
      version: "v1.0.0",
      groups: []
    };
  }

  const M = root.__EXT_MANIFEST__;

  // ========== knowledge ==========
  (function addKnowledge() {
    const files = [
      "background_place_knowledge.part1.js",
      "hair_group_knowledge.part1.js",
      "mood_lex.v1.js",
      "presets_mood_packs.part1.js"
    ];
    M.groups.push({ name: "knowledge", files });
  })();

  // ★ 新規追加：幻想・詩的ムード知識層
  (function addMoodFantasyKnowledge() {
    const files = [
      "mood_fantasy_knowledge.v1.js"
    ];
    M.groups.push({ name: "mood-fantasy-knowledge", files });
  })();

  // ========== core-utils ==========
  (function addCoreUtils() {
    // ★ 修正点：ext_loader_autodetect.js をこのグループ内で上に移動
    const files = [
      "builder_counters.es5.js",
      "enhance_addons.js",
      "ext_loader_autodetect.js", // ← ロード順修正：ここに移動（重要）
      "guard_base1.js",
      "ext_copy_button.js",
      "ext_manifest_loader.v1.js"
    ];
    M.groups.push({ name: "core-utils", files });
  })();

  // ========== faith packs (13) ==========
  (function addFaithBase() {
    const files = [
      "faith.joy.v1.js",
      "faith.anger.v1.js",
      "faith.sad.v1.js",
      "faith.happy.v1.js",
      "faith.heart.v1.js",
      "faith.surprise.v1.js",
      "faith.fear.v1.js",
      "faith.disgust.v1.js",
      "faith.embarrassed.v1.js",
      "faith.sleepy.v1.js",
      "faith.neutral.v1.js",
      "faith.focus.v1.js",
      "faith.dreamy.v1.js"
    ];
    M.groups.push({ name: "faith-base-13", files });
  })();

  // ========== faith facets (rules) (7) ==========
  (function addFaithFacets() {
    const files = [
      "faith.intensity.rules.v1.js",
      "faith.eyes.rules.v1.js",
      "faith.mouth.rules.v1.js",
      "faith.brow.rules.v1.js",
      "faith.blush.rules.v1.js",
      "faith.tropes.rules.v1.js",
      "faith.gaze.rules.v1.js"
    ];
    M.groups.push({ name: "faith-facets-7", files });
  })();

  // ========== faith compose/presets ==========
  (function addFaithCompose() {
    const files = [
      "faith.compose.v1.js",
      "presets.emotion_packs.v1.js"
    ];
    M.groups.push({ name: "faith-compose", files });
  })();

  // ========== pose packs (8) ==========
  (function addPosePacks() {
    const files = [
      "pose.stand.v1.js",
      "pose.sit.v1.js",
      "pose.walk.v1.js",
      "pose.run.v1.js",
      "pose.jump.v1.js",
      "pose.turn.v1.js",
      "pose.lean.v1.js",
      "pose.hands.v1.js"
    ];
    M.groups.push({ name: "pose-packs-8", files });
  })();

  // ========== pose facets (rules) (7) ==========
  (function addPoseFacets() {
    const files = [
      "pose.direction.rules.v1.js",
      "pose.tilt.rules.v1.js",
      "pose.arm.rules.v1.js",
      "pose.hand.rules.v1.js",
      "pose.leg.rules.v1.js",
      "pose.balance.rules.v1.js",
      "pose.frame.rules.v1.js"
    ];
    M.groups.push({ name: "pose-facets-7", files });
  })();

  // ========== debug-tools ==========
  (function addDebugGroup() {
    const files = [
      "ext_debug_inventory.v1.js"
    ];
    M.groups.push({ name: "debug-tools", files });
  })();

  // ========== ui-kit（分割版に一本化） ==========
  // ★ 新セクション「照明 (Lighting)」を追加
  (function addUIKIT() {
    const files = [
      // コアとアダプタ
      "builder_ui.core.v1.js",
      "builder_ui.adapters.v1.js",
      // セクション（faith / pose / hair / attire / background / filter / effect / cinematic）
      "builder_ui.section.faith.v1.js",
      "builder_ui.section.pose.v1.js",
      "builder_ui.section.hair.v1.js",
      "builder_ui.section.attire.v1.js",
      "builder_ui.section.background.v1.js",
      "builder_ui.section.filter.v1.js",
      "builder_ui.section.effect.v1.js",
      "builder_ui.section.cinematic.v1.js",
      "builder_ui.section.cinematic.v2.js",
      "builder_ui.section.cinematic.v3.js",
      "builder_ui.section.filter.v2.js",
      // ★ 新規追加：照明セクション
      "builder_ui.section.lighting.v1.js",
      // ★ 既存：ビジュアル連動層
      "builder_ui.visualsync.v1.js",
      // ★ 既存：Notion同期層（背景ムード自動読込）
      "builder_ui.sync.mood.v1.js"
    ];
    M.groups.push({ name: "ui-kit", files });
  })();

  // 末尾：デバッグのための簡易ログ
  try {
    const total = M.groups.reduce((a, g) => a + g.files.length, 0);
    (root.writeLog ? root.writeLog : console.log).call(
      console,
      `[ext-manifest] version: ${M.version}\n` +
      `[ext-manifest] groups: ${JSON.stringify(
        M.groups.map((g) => ({ name: g.name, count: g.files.length }))
      )}\n` +
      `[ext-manifest] total files: ${total}`
    );
  } catch (_) {}

})(window);