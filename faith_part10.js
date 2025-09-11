/* faith_part10.js v1.0 (2025-09-09)
   - 役割: 表情カタログ（faith）。part10.js の expressions をカテゴリ分割して投入
   - 表示ラベル: 「日本語 / 英語id」
*/
(function (g) {
  "use strict";
  const data = {
    categories: [
      {
        name: "Eyes / 目",
        items: [
          { id:"wide-eyes-shock",    label:"目を見開く・衝撃 / wide-eyes-shock" },
          { id:"rolling-eyes-irrit", label:"目を転がす・うんざり / rolling-eyes-irrit" },
          { id:"flutter-eyelids",    label:"まばたき・ひらひら / flutter-eyelids" },
          { id:"gleam-star",         label:"瞳キラリ・スター / gleam-star" }
        ]
      },
      {
        name: "Brows / 眉",
        items: [
          { id:"brow-arched-pride", label:"誇り眉アーチ / brow-arched-pride" },
          { id:"brow-low-frown",    label:"しかめ眉・低い / brow-low-frown" }
        ]
      },
      {
        name: "Mouth / 口",
        items: [
          { id:"open-gasp",     label:"口あんぐり・驚き / open-gasp" },
          { id:"clenched-grit", label:"歯を食いしばる / clenched-grit" },
          { id:"gentle-smile",  label:"穏やか笑み / gentle-smile" }
        ]
      },
      {
        name: "Emotion / 感情",
        items: [
          { id:"shock-fear",   label:"驚愕・恐れ / shock-fear" },
          { id:"irritated",    label:"苛立ち / irritated" },
          { id:"calm-warmth",  label:"落ち着いた温もり / calm-warmth" }
        ]
      },
      {
        name: "State / 状態",
        items: [
          { id:"tense",       label:"緊張 / tense" },
          { id:"relaxed",     label:"リラックス / relaxed" },
          { id:"bewildered",  label:"当惑 / bewildered" }
        ]
      }
    ],
    presets: [] // プリセットは presets_part10.js 側で扱う
  };

  // 推奨レジストリ（既存ローダの "faith_partN" 解析に対応）
  if (typeof g.__registerPromptPart === "function") g.__registerPromptPart("faith_part10", data);

  // 互換フォールバック
  g.__parts = g.__parts || { faith:{}, background:{}, effect:{}, pose:{}, hair:{}, presets:{} };
  g.__parts.faith = g.__parts.faith || {};
  g.__parts.faith[10] = data;
})(window);