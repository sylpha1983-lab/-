/* presets_part1.js (UMD + ESM safe) */

// ── プリセット定義（旧 expressions/effects を tags に統合） ──
const presets = [
  {
    id: 'Jealous-Pout-Sharp',
    label: '嫉妬シャープむくれ',
    tags: ['jealous', 'pout', 'side-eye-sharp', 'face-gloss', 'sparkle']
  },
  {
    id: 'Sleepy-Cute',
    label: '眠たげキュート',
    tags: ['sleepy', 'half-lidded', 'smile', 'bloom', 'vignette', 'sparkle']
  },
  {
    id: 'Noir-Deadpan',
    label: 'ノワール無表情',
    tags: ['deadpan', 'jitome', 'vignette', 'rim-light', 'impact-lines']
  },
  {
    id: 'Tease-Sparkle',
    label: '挑発スパークル',
    tags: ['side-eye', 'grin', 'embarrassed', 'sparkle', 'face-gloss']
  },
  {
    id: 'Shock-ThickLines',
    label: 'ショック極太線',
    tags: ['surprised', 'wide-eyed', 'impact-lines-thick', 'bloom']
  },
  {
    id: 'Crying-Drama',
    label: '大泣きドラマ',
    tags: ['sad', 'teary-eyes', 'rain', 'under-eye-shadow', 'vignette']
  }
];

// ── 互換データ：現在のビルダーが期待する形 { presets:[...] } ──
const payload = { presets };

// ── UMD ラッパ：window.__registerPromptPart があれば必ず登録 ──
(function (root, data) {
  try {
    if (typeof root !== 'undefined' && root && typeof root.__registerPromptPart === 'function') {
      // カテゴリ名は "presets"、パート番号は 1 を想定
      root.__registerPromptPart('presets_part1', data);
    } else {
      // レジストリがまだ無い場合でも後で読めるように待避
      root.__parts = root.__parts || { presets: {} };
      root.__parts.presets = root.__parts.presets || {};
      root.__parts.presets[1] = data;
    }
  } catch (e) {
    // 失敗しても静かにスルー（読み込みログ側で検知される）
  }
})(typeof window !== 'undefined' ? window : globalThis, payload);

// ── ESM 互換（動的 import 用）──
export default payload;