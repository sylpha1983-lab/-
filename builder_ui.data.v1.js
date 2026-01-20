(function() {
  "use strict";
  if (!window.__QP_DATA || !window.__QP_DATA.DICT) return;

  /**
   * クオリティ・プリセット翻訳関数
   * @param {string} text - 英語または日本語の原文
   * @param {"ja"|"en"} [targetLang="ja"] - 出力言語（省略時は日本語）
   * @returns {string} 翻訳された文字列
   */
  window.__translateQP = function(text, targetLang = "ja") {
    const dict = window.__QP_DATA.DICT;
    const lowerText = text.toLowerCase().trim();

    // 完全一致
    for (const [key, val] of Object.entries(dict)) {
      if (key.toLowerCase() === lowerText) {
        return targetLang === "ja" ? val : key;
      }
      if (val === text && targetLang === "en") {
        return key;
      }
    }

    // 部分一致
    for (const [key, val] of Object.entries(dict)) {
      if (lowerText.includes(key.toLowerCase())) {
        return targetLang === "ja" ? val : key;
      }
    }

    // 該当なし
    return text;
  };

  console.log("🌐 QualityPreset Translator Connected.");
})();