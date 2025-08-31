/* ============================================
   Hair Pack — hair_part12.js
   ============================================ */
(function (g) {
  const data = {
    categories: [
      { name: 'Short / ショート', items: [
        { id: 'short-curly-bob',           label: 'ショートカーリーボブ / short curly bob' },
        { id: 'short-undercut-soft',       label: 'ソフトアンダーカット / short soft undercut' },
        { id: 'short-wet-texture',         label: 'ウェット質感ショート / short wet texture' }
      ]},
      { name: 'Medium / ミディアム', items: [
        { id: 'midi-swing-bob',            label: 'スウィングボブ / swing bob (midi)' },
        { id: 'midi-slope-lob',            label: '前下がりロブ / slope lob (midi)' },
        { id: 'midi-crimp-wave',           label: 'ミディ・クリンプ波 / midi crimp wave' }
      ]},
      { name: 'Long / ロング', items: [
        { id: 'long-water-wave',           label: '水面ウェーブ / water wave long' },
        { id: 'long-foxtail-layer',        label: 'フォックステール層 / foxtail layered long' },
        { id: 'long-sheer-volume',         label: '透け感ボリューム / sheer volume long' }
      ]},
      { name: 'Bangs / 前髪', items: [
        { id: 'airy-bangs-feather',        label: 'エアリーバング羽毛 / airy feather bangs' },
        { id: 'bottleneck-bangs',          label: 'ボトルネックバング / bottleneck bangs' }
      ]},
      { name: 'Braids & Updos / 編み・まとめ髪', items: [
        { id: 'rope-braid-pony',           label: 'ロープ編みポニー / rope braid ponytail' },
        { id: 'fishtail-half',             label: 'フィッシュテール・ハーフ / fishtail half-up' },
        { id: 'crown-braid-soft',          label: 'やわ冠編み / soft crown braid' }
      ]},
      { name: 'Color & Accents / 色・アクセント', items: [
        { id: 'milk-tea-beige',            label: 'ミルクティーベージュ / milk tea beige' },
        { id: 'ash-smoky-gray',            label: 'アッシュスモーキー / ash smoky gray' },
        { id: 'pastel-dip-dye',            label: 'パステル先染め / pastel dip-dye' }
      ]}
    ]
  };

  if (g.__registerHairPart) g.__registerHairPart('hair_part12', data);
  else { g.hairParts = g.hairParts || {}; g.hairParts['hair_part12'] = data; }
})(window);