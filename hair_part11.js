/* hair_part11.js — Gyaru Colorful Mesh Pack (v11.1)
   - 目的: ギャル可愛い系「カラー盛り盛り」メッシュを大量追加
   - ポイント: 色系IDには hair- 接頭辞を付与（既存互換）。配置/太さ/質感/雰囲気/効果は非色系タグ。
   - Registers: window.__registerHairPart('hair', 11, { categories:[...], presets:[...] })
*/
(function (w) {
  "use strict";

  const byName = new Map();
  const seen = new Set();

  function put(cat, id, label){
    if (!cat || !id) return;
    const nid = String(id).trim();
    if (seen.has(nid)) return; // 重複IDは排除
    seen.add(nid);
    if (!byName.has(cat)) byName.set(cat, new Map());
    const m = byName.get(cat);
    if (!m.has(nid)) m.set(nid, { id:nid, label: label || nid });
  }

  // === Gyaru Color Mesh / ギャル・カラーメッシュ（色系：hair- 接頭辞） ===
  (function(){
    const cat="Gyaru Color Mesh / ギャル・カラーメッシュ";
    [
      ["hair-rainbow-streaks","レインボーメッシュ / rainbow streaks"],
      ["hair-neon-rainbow-streaks","ネオンレインボーメッシュ / neon rainbow streaks"],
      ["hair-multicolor-streaks","多色メッシュ / multicolor streaks"],
      ["hair-pink-streaks","ピンクメッシュ / pink streaks"],
      ["hair-purple-streaks","パープルメッシュ / purple streaks"],
      ["hair-blue-streaks","ブルーメッシュ / blue streaks"],
      ["hair-aqua-streaks","アクアメッシュ / aqua streaks"],
      ["hair-violet-streaks","バイオレットメッシュ / violet streaks"],
      ["hair-gold-streaks","ゴールドメッシュ / gold streaks"],
      ["hair-platinum-streaks","プラチナメッシュ / platinum streaks"],
      ["hair-neon-pink-streaks","ネオンピンクメッシュ / neon pink streaks"],
      ["hair-neon-blue-streaks","ネオンブルーメッシュ / neon blue streaks"],
      ["hair-neon-green-streaks","ネオングリーンメッシュ / neon green streaks"],
      ["hair-neon-yellow-streaks","ネオンイエローメッシュ / neon yellow streaks"],

      // [CHANGE] 追加: ネオン拡張色
      ["hair-neon-orange-streaks","ネオンオレンジメッシュ / neon orange streaks"],
      ["hair-neon-purple-streaks","ネオンパープルメッシュ / neon purple streaks"],
      ["hair-neon-cyan-streaks","ネオンシアンメッシュ / neon cyan streaks"],
      ["hair-neon-magenta-streaks","ネオンマゼンタメッシュ / neon magenta streaks"]
    ].forEach(x=>put(cat,...x));
  })();

  // === Base Hair Colors / ベース髪色（色系：hair- 接頭辞） ===
  (function(){
    const cat="Base Hair Colors / ベース髪色";
    [
      ["hair-blonde","金髪 / blonde"],
      ["hair-ash-brown","アッシュブラウン / ash brown"],
      ["hair-black","黒髪 / black"],
      ["hair-platinum-blonde","プラチナブロンド / platinum blonde"],

      // [CHANGE] 追加: ナチュラル寄りのベース色
      ["hair-beige","ベージュ / beige"],
      ["hair-ash-beige","アッシュベージュ / ash beige"],
      ["hair-caramel","キャラメル / caramel"]
    ].forEach(x=>put(cat,...x));
  })();

  // === Placement / 配置（非色系） ===
  (function(){
    const cat="Placement / 配置";
    [
      ["front-streaks","顔周りメッシュ（フロント） / front streaks"],
      ["side-streaks","サイドメッシュ / side streaks"],
      ["bangs-streaks","前髪メッシュ / bangs streaks"],
      ["inner-color","インナーカラー / inner color"],
      ["underlayer-streaks","アンダーレイヤー / underlayer streaks"],
      ["money-piece","マネーピース（フェイスフレーミング） / money piece"]
    ].forEach(x=>put(cat,...x));
  })();

  // === Chunk Size / 太さ（非色系） ===
  (function(){
    const cat="Chunk Size / 太さ";
    [
      ["chunky-streaks","太めメッシュ / chunky streaks"],
      ["bold-highlights","派手ハイライト / bold highlights"],
      ["fine-streaks","細めメッシュ / fine streaks"],
      ["mixed-streaks","ミックス太さ / mixed streaks"]
    ].forEach(x=>put(cat,...x));
  })();

  // === Finish & Texture / 質感・スタイル（非色系） ===
  (function(){
    const cat="Finish & Texture / 質感・スタイル";
    [
      ["shiny-hair","ツヤ髪 / shiny hair"],
      ["glossy-shine","グロッシー / glossy shine"],
      ["voluminous-hair","ボリューミー / voluminous hair"],
      ["straight-hair","ストレート / straight hair"],
      ["wavy-hair","ゆる巻き / wavy hair"],

      // [CHANGE] 追加: ナチュラル寄り
      ["soft-shine","ソフトツヤ / soft shine"],
      ["smooth-texture","さらさら質感 / smooth texture"]
    ].forEach(x=>put(cat,...x));
  })();

  // === Effects / 効果（非色系：ネオン強調・ラメ風） ===
  (function(){
    const cat="Effects / 効果";
    [
      // [CHANGE] 追加: ラメ・ホログラム系（非色タグ）
      ["glitter-effect","ラメ風ハイライト / glitter effect"],
      ["sparkle-highlights","きらめきハイライト / sparkle highlights"],
      ["holographic-sheen","ホログラ風ツヤ / holographic sheen"],
      ["neon-glow","ネオングロー / neon glow"],
      ["high-contrast-highlights","高コントラストハイライト / high-contrast highlights"],

      // [CHANGE] 追加: ナチュラル寄りの抑え表現
      ["subtle-highlights","さりげないハイライト / subtle highlights"],
      ["face-framing-soft","やわらかフェイスフレーミング / soft face-framing"]
    ].forEach(x=>put(cat,...x));
  })();

  // === Vibe / 雰囲気（非色系） ===
  (function(){
    const cat="Vibe / 雰囲気";
    [
      ["gyaru-style","ギャルスタイル / gyaru style"],
      ["flashy-look","派手かわルック / flashy look"],
      ["glamorous-look","グラマラス / glamorous look"],

      // [CHANGE] 追加: ナチュラル寄り
      ["natural-gyaru","ナチュラルギャル / natural gyaru"]
    ].forEach(x=>put(cat,...x));
  })();

  // === 生成（カテゴリ配列） ===
  const categories = Array.from(byName, ([name,map])=>({ name, items:Array.from(map.values()) }));

  // === Presets / プリセット（例プロンプトをタグ化） ===
  // すべて catalog 内の id を参照。英語idのカンマ区切り出力に適合。
  const presets = [
    {
      id: "gyaru-rainbow-chunky",
      label: "ギャル虹色 太めメッシュ（ブロンド基調）",
      tags: [
        "hair-blonde","hair-rainbow-streaks","chunky-streaks",
        "shiny-hair","voluminous-hair","gyaru-style","flashy-look"
      ]
    },
    {
      id: "gyaru-pink-purple-blue-ash",
      label: "アッシュ×ピンク紫青 ボリュームウェーブ",
      tags: [
        "hair-ash-brown","hair-pink-streaks","hair-purple-streaks","hair-blue-streaks",
        "bold-highlights","wavy-hair","gyaru-style","glamorous-look"
      ]
    },
    {
      id: "gyaru-neon-triple-platinum",
      label: "プラチナ×ネオン（ピンク/アクア/バイオレット）太め",
      tags: [
        "hair-platinum-blonde","hair-neon-pink-streaks","hair-aqua-streaks","hair-violet-streaks",
        "chunky-streaks","shiny-hair","gyaru-style","flashy-look"
      ]
    },
    {
      id: "gyaru-front-money-piece-blonde",
      label: "黒髪×フロント金メッシュ（マネーピース）",
      tags: [
        "hair-black","hair-blonde","front-streaks","money-piece",
        "chunky-streaks","shiny-hair","gyaru-style"
      ]
    },
    {
      id: "gyaru-inner-color-pink-straight",
      label: "アッシュ×インナーピンク（ストレート）",
      tags: [
        "hair-ash-brown","hair-pink-streaks","inner-color",
        "bold-highlights","straight-hair","gyaru-style","flashy-look"
      ]
    },
    {
      id: "gyaru-black-platinum-gold",
      label: "黒髪×プラチナ＆ゴールドの太めメッシュ",
      tags: [
        "hair-black","hair-platinum-streaks","hair-gold-streaks",
        "chunky-streaks","straight-hair","shiny-hair","gyaru-style","glamorous-look"
      ]
    },
    {
      id: "gyaru-neon-rainbow-bangs",
      label: "ブロンド×ネオン虹 前髪メッシュ強調",
      tags: [
        "hair-blonde","hair-neon-rainbow-streaks","bangs-streaks",
        "bold-highlights","shiny-hair","gyaru-style","flashy-look"
      ]
    },
    {
      id: "gyaru-side-multicolor-waves",
      label: "アッシュ×サイド多色メッシュ（ゆる巻き）",
      tags: [
        "hair-ash-brown","hair-multicolor-streaks","side-streaks",
        "mixed-streaks","wavy-hair","gyaru-style","glamorous-look"
      ]
    },
    {
      id: "gyaru-blue-pink-front-volume",
      label: "ブロンド×フロント青ピンク 太め×ボリューム",
      tags: [
        "hair-blonde","hair-blue-streaks","hair-pink-streaks",
        "front-streaks","chunky-streaks","voluminous-hair","gyaru-style","flashy-look"
      ]
    },
    {
      id: "gyaru-aqua-violet-underlayer",
      label: "黒髪×アンダーにアクア＆バイオレット",
      tags: [
        "hair-black","hair-aqua-streaks","hair-violet-streaks",
        "underlayer-streaks","bold-highlights","wavy-hair","gyaru-style"
      ]
    },
    {
      id: "gyaru-gold-neon-pink-mix",
      label: "アッシュ×ゴールド＋ネオンピンク ミックス太さ",
      tags: [
        "hair-ash-brown","hair-gold-streaks","hair-neon-pink-streaks",
        "mixed-streaks","shiny-hair","gyaru-style","flashy-look"
      ]
    },
    {
      id: "gyaru-purple-blue-bangs-glossy",
      label: "プラチナ×前髪に紫青 グロッシー仕上げ",
      tags: [
        "hair-platinum-blonde","hair-purple-streaks","hair-blue-streaks",
        "bangs-streaks","fine-streaks","glossy-shine","gyaru-style"
      ]
    },

    // [CHANGE] 追加プリセット: ネオン＋ラメ（グリッター）系
    {
      id: "gyaru-neon-glitter-blonde",
      label: "ブロンド×ネオン多色＋ラメ（太め＆ツヤ）",
      tags: [
        "hair-blonde",
        "hair-neon-pink-streaks","hair-neon-blue-streaks","hair-neon-green-streaks","hair-neon-yellow-streaks",
        "chunky-streaks","shiny-hair","glitter-effect","sparkle-highlights","neon-glow",
        "gyaru-style","flashy-look","high-contrast-highlights"
      ]
    },
    {
      id: "gyaru-holo-platinum-neon",
      label: "プラチナ×ネオン紫/マゼンタ＋ホログラ風",
      tags: [
        "hair-platinum-blonde",
        "hair-neon-purple-streaks","hair-neon-magenta-streaks",
        "bold-highlights","glossy-shine","holographic-sheen","neon-glow",
        "gyaru-style","glamorous-look"
      ]
    },
    {
      id: "gyaru-black-neon-money-piece-glitter",
      label: "黒髪×ネオン前髪メッシュ＋マネーピース（ラメ）",
      tags: [
        "hair-black",
        "hair-neon-cyan-streaks","hair-neon-orange-streaks",
        "bangs-streaks","money-piece","chunky-streaks",
        "glitter-effect","sparkle-highlights","shiny-hair","gyaru-style","flashy-look"
      ]
    },

    // [CHANGE] 追加プリセット: ナチュラル寄りギャル
    {
      id: "natural-gyaru-beige-subtle",
      label: "ベージュ基調×さりげない細メッシュ（ナチュギャル）",
      tags: [
        "hair-beige","fine-streaks","subtle-highlights",
        "soft-shine","smooth-texture","face-framing-soft",
        "natural-gyaru"
      ]
    },
    {
      id: "natural-gyaru-ashbeige-caramel",
      label: "アッシュベージュ×キャラメルのゆる巻きメッシュ",
      tags: [
        "hair-ash-beige","hair-caramel",
        "mixed-streaks","wavy-hair","soft-shine","subtle-highlights","natural-gyaru"
      ]
    },
    {
      id: "natural-gyaru-ashbrown-money-piece-fine",
      label: "アッシュブラウン×ソフトマネーピース（前髪控えめ）",
      tags: [
        "hair-ash-brown","money-piece","fine-streaks","subtle-highlights",
        "straight-hair","soft-shine","natural-gyaru"
      ]
    }
  ];

  const data = { categories, presets };

  // === 登録（レガシー互換含む） ===
  try{
    if (typeof w.__registerHairPart === 'function' && w.__registerHairPart.length >= 3) {
      w.__registerHairPart('hair', 11, data);
    } else if (typeof w.__registerHairPart === 'function') {
      w.__registerHairPart(11, data);
    } else if (typeof w.__registerPromptPart === 'function' && w.__registerPromptPart.length >= 3) {
      w.__registerPromptPart('hair', 11, data);
    } else {
      w.__parts = w.__parts || { hair:{} };
      w.__parts.hair = w.__parts.hair || {};
      w.__parts.hair[11] = data;
    }
  } catch(e){
    console.error('[hair_part11 Gyaru Colorful Mesh v11.1] register error:', e);
  }
})(window);