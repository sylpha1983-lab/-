// mood_lex.v1.js  (cleaned: ASCII-only)  // [CHANGE] remove non-ASCII (JP/emoji)
// この辞書は「UI の表示やプロンプト生成で使う“表情系の同義語リスト”」です。
// ルール: 半角英数字・スペース・ハイフン・アンダースコアのみ。日本語・絵文字は保持しません。

(function (root) {
  "use strict";

  // もし将来うっかり非ASCIIが混入しても自動で弾く保険
  const isAscii = (s) => /^[A-Za-z0-9 _-]+$/.test(String(s || "").trim());

  // === Base emotion synonyms (ASCII only) ======================
  const LEX = [
    { id: "joy",          tags: ["smile", "happy", "grin", "laugh", "wink", "smirk"] },
    { id: "anger",        tags: ["angry", "furious", "frown", "grit", "pout", "rage"] },
    { id: "sad",          tags: ["sad", "tears", "teary", "cry", "crying", "sorrow"] },
    { id: "happy_light",  tags: ["relax", "cheer", "sparkle", "bright", "lighthearted"] },
    { id: "heart",        tags: ["love", "hearts", "affection"] },
    { id: "surprise",     tags: ["surprised", "shocked", "astonished", "wow"] },
    { id: "fear",         tags: ["scared", "fear", "afraid", "anxious", "terrified"] },
    { id: "disgust",      tags: ["disgust", "disgusted", "aversion", "revulsion"] },
    { id: "embarrassed",  tags: ["embarrassed", "shy", "blush", "bashful"] },
    { id: "sleepy",       tags: ["sleepy", "dozy", "yawn", "drowsy"] },
    { id: "neutral",      tags: ["neutral", "blank", "plain", "deadpan"] },
    { id: "focus",        tags: ["focused", "focus", "determined", "serious"] },
    { id: "dreamy",       tags: ["dreamy", "dazed", "trance", "spaced out"] },
  ];

  // === sanitize / dedupe ======================================
  const cleaned = LEX.map(({ id, tags }) => {
    const uniq = Array.from(
      new Set(
        (tags || [])
          .map((t) => String(t).trim().toLowerCase())
          .filter((t) => t && isAscii(t))
      )
    );
    return { id, tags: uniq };
  });

  // 既存参照の互換性を優先して公開
  root.__mood_lex = cleaned;

  // デバッグ痕跡（任意）
  try { root.writeLog?.("[mood_lex] ascii-only dictionary loaded"); } catch (_) {}
})(window);