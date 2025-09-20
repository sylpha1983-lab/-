/* hair_part13.js v1.0 (2025-09-19)
   拡張：和色(大量) / Iridescent & Opal 追加 / Neon拡張 / グラデ拡張 / 自然・鉱石
   - 既存ローダー仕様に準拠: window.__registerHairPart(name, data)
   - data: { categories:[{ name, items:[{id,label}]}], presets:[{id,label,tags:[]}] }
   - IDは一意、髪色は `hair-` 接頭辞維持（既に付いている場合はそのまま）
*/
(function(w){
  'use strict';

  const categories = [
    /* 1) 和色（大幅追加・アクセント色想定。必要に応じてベース髪としても使用可） */
    {
      name: "和色拡張 / Japanese Traditional Colors Extended",
      items: [
        { id: "hair-sakura-iro", label: "桜色 / sakura-iro" },
        { id: "hair-sumisakura", label: "退紅 / sumi-sakura" },
        { id: "hair-nadeshiko", label: "撫子色 / nadeshiko" },
        { id: "hair-azuki", label: "小豆色 / azuki" },
        { id: "hair-enji", label: "臙脂 / enji" },
        { id: "hair-kurenai", label: "紅色 / kurenai" },
        { id: "hair-shu", label: "朱色 / shu" },
        { id: "hair-ake", label: "緋色 / ake" },
        { id: "hair-kinari", label: "生成り色 / kinari" },
        { id: "hair-choji", label: "丁子色 / choji" },
        { id: "hair-kohaku-iro", label: "琥珀色 / kohaku-iro" },
        { id: "hair-yanagi", label: "柳色 / yanagi" },
        { id: "hair-wakakusa", label: "若草色 / wakakusa" },
        { id: "hair-usumoegi", label: "薄萌葱 / usu-moegi" },
        { id: "hair-moegi", label: "萌葱色 / moegi" },
        { id: "hair-aotake", label: "青竹色 / aotake" },
        { id: "hair-sei-ryoku", label: "青緑 / sei-ryoku" },
        { id: "hair-mizuasagi-2", label: "水浅葱 / mizu-asagi" },
        { id: "hair-asagi-2", label: "浅葱色 / asagi-2" },
        { id: "hair-byakugun", label: "白群 / byakugun" },
        { id: "hair-tsuyukusa-2", label: "露草色 / tsuyukusa-2" },
        { id: "hair-usuhanada", label: "薄花色 / usu-hanada" },
        { id: "hair-hanada", label: "花田色 / hanada" },
        { id: "hair-ai-2", label: "藍色 / ai-2" },
        { id: "hair-kon-iro", label: "紺色 / kon-iro" },
        { id: "hair-fuji-iro", label: "藤色 / fuji-iro" },
        { id: "hair-usu-fuji", label: "薄藤色 / usu-fuji" },
        { id: "hair-shion-2", label: "紫苑色 / shion-2" },
        { id: "hair-murasaki-2", label: "紫 / murasaki-2" },
        { id: "hair-sumire", label: "菫色 / sumire" },
        { id: "hair-kikyou-2", label: "桔梗色 / kikyo-2" },
        { id: "hair-sango-2", label: "珊瑚色 / sango-2" },
        { id: "hair-kincha", label: "金茶 / kincha" },
        { id: "hair-kogecha", label: "焦茶 / kogecha" },
        { id: "hair-rikyucha", label: "利休茶 / rikyucha" },
        { id: "hair-hai", label: "灰色 / hai" },
        { id: "hair-ginnezumi", label: "銀鼠 / gin-nezumi" },
        { id: "hair-sumi-2", label: "墨色 / sumi-2" }
      ]
    },

    /* 2) Iridescent / Opal 追加（色相違い） */
    {
      name: "虹彩・オパール 追加 / Iridescent & Opal Extended",
      items: [
        { id: "hair-opal-rose", label: "オパール（ローズ）/ opal rose" },
        { id: "hair-opal-violet", label: "オパール（バイオレット）/ opal violet" },
        { id: "hair-opal-mint", label: "オパール（ミント）/ opal mint" },
        { id: "hair-iridescent-sunrise", label: "イリデッセント（サンライズ）/ iridescent sunrise" },
        { id: "hair-iridescent-twilight", label: "イリデッセント（トワイライト）/ iridescent twilight" },
        { id: "hair-chameleon-green-gold", label: "カメレオン 緑→金 / chameleon green→gold" },
        { id: "hair-chameleon-cyan-violet", label: "カメレオン シアン→紫 / chameleon cyan→violet" },
        { id: "hair-chameleon-rose-teal", label: "カメレオン ローズ→ティール / chameleon rose→teal" }
      ]
    },

    /* 3) Neon / Glow 追加 */
    {
      name: "ネオン追加 / Neon + Glow",
      items: [
        { id: "hair-neon-rose", label: "ネオンローズ / neon rose" },
        { id: "hair-neon-violet", label: "ネオンバイオレット / neon violet" },
        { id: "hair-neon-indigo", label: "ネオンインディゴ / neon indigo" },
        { id: "hair-neon-emerald", label: "ネオンエメラルド / neon emerald" },
        { id: "hair-neon-ice", label: "ネオンアイス / neon ice" },
        { id: "hair-phosphor-green", label: "リン光グリーン / phosphor green" },
        { id: "hair-phosphor-blue", label: "リン光ブルー / phosphor blue" }
      ]
    },

    /* 4) グラデーション拡張（デュオ/トライ/クアッド） */
    {
      name: "グラデーション拡張2 / Gradient Extended II",
      items: [
        { id: "hair-ombre-black-silver", label: "黒→銀 / ombre black→silver" },
        { id: "hair-ombre-brown-honey", label: "茶→ハニー / ombre brown→honey" },
        { id: "hair-ombre-navy-teal", label: "ネイビー→ティール / ombre navy→teal" },
        { id: "hair-tritone-pastel-pink-sky-lavender", label: "三層: pastel pink→sky→lavender" },
        { id: "hair-tritone-forest-moss-olive", label: "三層: forest→moss→olive" },
        { id: "hair-quad-candy", label: "四色: キャンディ / quad candy (pink→peach→lemon→mint)" },
        { id: "hair-quad-galaxy", label: "四色: 銀河 / quad galaxy (navy→violet→magenta→cyan)" }
      ]
    },

    /* 5) 自然・鉱石（アクセント） */
    {
      name: "自然・鉱石 / Nature & Minerals",
      items: [
        { id: "hair-rose-quartz", label: "ローズクォーツ / rose quartz" },
        { id: "hair-amethyst", label: "アメジスト / amethyst" },
        { id: "hair-aquamarine", label: "アクアマリン / aquamarine" },
        { id: "hair-peridot", label: "ペリドット / peridot" },
        { id: "hair-obsidian", label: "黒曜石 / obsidian" },
        { id: "hair-hematite", label: "ヘマタイト / hematite" },
        { id: "hair-moonstone", label: "ムーンストーン / moonstone" },
        { id: "hair-sunstone", label: "サンストーン / sunstone" }
      ]
    }
  ];

  /* プリセット：ベース＋メッシュ種類＋アクセント色を一括指定 */
  const presets = [
    { id: "preset-jp-kurenai-money", label: "紅×マネーピース", tags: ["hair-kurenai", "mesh-money-piece"] },
    { id: "preset-jp-mizuasagi-inner", label: "水浅葱×インナー", tags: ["hair-mizuasagi-2", "mesh-inner-peek"] },
    { id: "preset-neo-emerald-split", label: "ネオンエメラルド・スプリット", tags: ["hair-neon-emerald", "mesh-split-two-tone", "hair-black"] },
    { id: "preset-opal-sunrise-balayage", label: "オパール＋サンライズ（バレイヤージュ）", tags: ["hair-opal-rose", "hair-iridescent-sunrise", "mesh-balayage"] },
    { id: "preset-quad-galaxy-shadow", label: "銀河クアッド＋シャドールート", tags: ["hair-quad-galaxy", "mesh-shadow-root"] },
    { id: "preset-stone-obsidian-foil", label: "黒曜石＋フォイル（細）", tags: ["hair-obsidian", "mesh-foil-fine"] }
  ];

  w.__registerHairPart && w.__registerHairPart("hair_part13", { categories, presets });
})(window);