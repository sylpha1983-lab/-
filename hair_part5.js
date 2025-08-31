// hair_part5.js  ←そのまま保存（<script>タグは不要）
(function (g) {
  g.__registerHairPart('hair_part5', {
    categories: [
      {
        name: 'Hair / 前髪・バングス',
        items: [
          { id: 'blunt-bangs',    label: 'ぱっつん前髪 / blunt bangs' },
          { id: 'see-through',    label: 'シースルー前髪 / see-through bangs' },
          { id: 'side-swept',     label: '流し前髪 / side-swept bangs' },
          { id: 'center-part',    label: 'センターパート前髪 / center-part bangs' },
          { id: 'baby-bangs',     label: 'ベイビーバング / baby bangs' }
        ]
      },
      {
        name: 'Hair / 顔周り・もみあげ',
        items: [
          { id: 'face-framing',   label: '顔まわりレイヤー / face-framing layers' },
          { id: 'sidelocks-long', label: '長い横髪 / long sidelocks' },
          { id: 'sidelocks-short',label: '短い横髪 / short sidelocks' },
          { id: 'temple-hair',    label: 'こめかみ毛束 / temple hair strands' }
        ]
      },
      {
        name: 'Hair / まとめ・ハーフアップ',
        items: [
          { id: 'half-up',        label: 'ハーフアップ / half up' },
          { id: 'half-twin-tail', label: 'ハーフツイン / half twin tails' },
          { id: 'claw-clip-up',   label: 'バンスクリップ留め / claw-clip updo' },
          { id: 'braid-crown',    label: '編み込みカチューシャ / braid crown' }
        ]
      }
    ]
  });
})(window);