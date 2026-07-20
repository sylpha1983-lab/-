(function(){
  "use strict";

  const axes = [
    {
      key: "silhouette",
      title: "✂️ シルエット変換",
      note: "元衣装の主題を残し、全体の外形と重心を変える。",
      selection: "single",
      items: [
        ["longline-extension", "ロングライン拡張", "elongated longline garment silhouette, extended outer hem, balanced vertical proportions"],
        ["cropped-lightweight", "クロップド軽装化", "cropped lightweight garment silhouette, shortened outer layer, clean waist-level break"],
        ["a-line-expansion", "Aライン拡張", "broad A-line garment silhouette, gradually flared lower panels, stable triangular balance"],
        ["inverted-triangle", "逆三角戦術型", "inverted-triangle garment silhouette, structured shoulders, sharply tapered waist"],
        ["hourglass-shaping", "砂時計シェイピング", "hourglass garment shaping, defined waist, balanced upper and lower volume"],
        ["cocoon-shell", "コクーン包囲型", "cocoon-shaped outer garment silhouette, rounded enclosing volume, gently tapered hem"],
        ["shoulder-cape-layer", "ショルダーケープ層", "layered shoulder-cape silhouette, compact upper mantle, clearly visible inner garment"],
        ["split-tail", "分割燕尾ライン", "split-tail garment silhouette, divided rear coat panels, controlled trailing lines"],
        ["asymmetric-offset", "左右非対称オフセット", "asymmetrical garment silhouette, offset closure and hem, controlled visual imbalance"],
        ["high-low-hem", "前短後長ヘム", "high-low garment hem silhouette, shorter front section, flowing rear panels"],
        ["tiered-layers", "多層ティアード", "tiered layered garment silhouette, stacked lengths, clearly separated levels"],
        ["columnar-slim", "コラム縦長型", "columnar slim garment silhouette, restrained side volume, continuous vertical line"],
        ["oversized-volume", "オーバーサイズ広幅化", "oversized wide garment silhouette, generous sleeves and garment volume, controlled drape"],
        ["harness-framed", "外付けハーネス構成", "fitted base silhouette framed by an external garment harness, minimal outer bulk"],
        ["armored-shell", "アーマードシェル化", "protective shell garment silhouette, segmented outer plates, articulated waist construction"],
        ["wrapped-robe", "ラップローブ化", "robe-like wrap garment silhouette, overlapping front panels, long fluid sleeves"],
        ["bolero-overlay", "ボレロオーバーレイ", "cropped bolero overlay silhouette, open front, preserved inner garment structure"],
        ["rear-bustle", "後部バッスル強調", "rear-volume bustle garment silhouette, sculpted back drapery, restrained front volume"],
        ["flared-sleeves", "フレアスリーブ重点", "sleeve-led garment silhouette, dramatic flared sleeves, compact central garment line"],
        ["modular-convertible", "可変モジュール外形", "modular convertible garment silhouette, detachable panels, adjustable length zones"]
      ]
    },
    {
      key: "material",
      title: "🪡 素材・表面置換",
      note: "衣装の形は保ち、布地・硬質部品・透過感の性格を変える。",
      selection: "single",
      items: [
        ["faceted-crystal", "多面クリスタル素材", "faceted crystal garment material, translucent edges, controlled prismatic surfaces"],
        ["frosted-glass", "フロストガラス質感", "frosted-glass garment panels, milky translucency, softly diffused surface"],
        ["sheer-organza", "シアーオーガンジー", "sheer organza garment layers, airy translucent weave, crisp floating edges"],
        ["liquid-metal", "液体金属サーフェス", "liquid-metal garment surface, smooth flowing reflections, seamless metallic drape"],
        ["brushed-alloy", "ブラッシュド合金", "brushed-alloy garment panels, fine directional grain, restrained metallic finish"],
        ["porcelain-shell", "白磁シェル", "porcelain-like garment shell, smooth glazed plates, fine joint seams"],
        ["feather-laminate", "羽根ラミネート", "layered feather-laminate garment material, overlapping soft vanes, compact volume"],
        ["deep-velvet", "深色ベルベット", "deep velvet garment material, dense soft pile, rich directional shading"],
        ["tension-satin", "張力サテン", "tensioned satin garment material, smooth highlights along folds, firm elegant drape"],
        ["waxed-leather", "ワックスレザー", "waxed leather garment material, subtle polished grain, structured flexible panels"],
        ["washed-denim", "ウォッシュドデニム", "washed denim garment material, visible twill weave, softened worn edges"],
        ["cloud-knit", "雲状ニット", "cloud-soft knitted garment material, plush loops, rounded comfortable volume"],
        ["architectural-lace", "建築レース", "architectural lace garment material, structured openwork, clearly defined geometric motifs"],
        ["layered-paper", "積層ペーパーテキスタイル", "layered paper-textile garment material, folded edges, resilient sculpted pleats"],
        ["holographic-film", "ホログラフィックフィルム", "holographic film garment panels, angle-dependent color shift, thin reflective layers"],
        ["iridescent-shell", "偏光シェル", "iridescent shell garment material, pearl-like color shift, curved plated surfaces"],
        ["luminous-fiber", "発光繊維クロス", "woven luminous-fiber garment material, embedded light threads, readable fabric texture"],
        ["ceramic-stone", "陶石ハイブリッド", "ceramic-stone garment plates, mineral texture, articulated lightweight segments"],
        ["bioluminescent-membrane", "生体発光膜", "bioluminescent membrane garment material, soft translucent layers, organic glowing veins"],
        ["carbon-weave", "カーボン織維", "carbon-weave garment material, tight technical pattern, lightweight matte structure"]
      ]
    },
    {
      key: "condition",
      title: "🌦️ 状態・任務変化",
      note: "季節、環境、任務、時間経過に合わせて機能と仕上げを追加する。",
      selection: "multi",
      items: [
        ["ceremonial-upgrade", "式典アップグレード", "ceremonial garment upgrade, formal cords, polished closures, presentation-ready finish"],
        ["combat-reinforced", "戦術補強仕様", "combat-reinforced garment configuration, protected joints, secured closures, reinforced outer zones"],
        ["winter-insulated", "極寒断熱仕様", "deep-winter insulated garment configuration, thermal lining, sealed cuffs, cold-weather outer layers"],
        ["summer-ventilated", "真夏通気仕様", "high-summer ventilated garment configuration, breathable panels, reduced layer weight, open airflow channels"],
        ["stormproof", "暴風雨防護仕様", "stormproof garment configuration, water-shedding outer surface, sealed seams, secured hood system"],
        ["desert-cooling", "砂漠冷却仕様", "desert-cooling garment configuration, sun-shielding layers, ventilated wraps, dust-sealed fasteners"],
        ["underwater-sealed", "水中密閉仕様", "underwater-sealed garment configuration, pressure-ready seams, streamlined panels, watertight closures"],
        ["zero-gravity", "無重力航行仕様", "zero-gravity garment configuration, anchored loose panels, compact utility loops, floating-layer control"],
        ["stealth-muted", "静穏ステルス仕様", "stealth garment configuration, muted surfaces, low-profile closures, noise-dampened flexible layers"],
        ["expedition-weathered", "長期探査風化仕上げ", "expedition-weathered garment finish, softened edges, field creases, practical reinforced repairs"],
        ["battle-repaired", "戦傷修復パッチ", "post-battle repaired garment state, visible reinforced patches, restitched seams, retained structural integrity"],
        ["pristine-archive", "アーカイブ保存状態", "pristine archival garment condition, immaculate seams, carefully preserved surface, museum-ready finish"],
        ["festival-illuminated", "祝祭発光仕様", "festival garment configuration, decorative light threads, rhythmic trim accents, celebratory detachable ornaments"],
        ["night-operation", "夜間作戦仕様", "night-operation garment configuration, dark adaptive panels, restrained signal marks, low-profile utility trim"],
        ["rescue-visibility", "救難高視認仕様", "rescue garment configuration, high-visibility panels, clear emergency markers, accessible utility fasteners"],
        ["mechanic-utility", "整備ユーティリティ仕様", "mechanic utility garment configuration, tool-ready loops, reinforced contact zones, washable work panels"],
        ["coronation-formal", "戴冠礼仕様", "coronation garment configuration, dignified mantle attachment, ranked ceremonial trim, formal structured drape"],
        ["travel-packable", "旅行パッカブル仕様", "travel-packable garment configuration, foldable outer panels, compact storage straps, wrinkle-controlled fabric"],
        ["dance-performance", "ダンス可動仕様", "dance-performance garment configuration, articulated stretch zones, controlled flowing panels, secure decorative parts"],
        ["field-camouflage", "環境適応カモフラージュ", "environment-adaptive garment finish, terrain-responsive surface pattern, concealed practical closures"]
      ]
    },
    {
      key: "ornament",
      title: "🧵 装飾・ディテール追加",
      note: "元衣装の形を大きく変えず、視線誘導と世界観の手がかりを足す。",
      selection: "multi",
      items: [
        ["ornate-embroidery", "精密装飾刺繍", "intricate garment embroidery, controlled border placement, fine repeating thread motifs"],
        ["contrast-piping", "コントラストパイピング", "contrasting garment piping, clean edge tracing, precise seam emphasis"],
        ["braided-cords", "編紐コード装飾", "braided garment cords, structured loops, balanced fastening points"],
        ["ribbon-knots", "リボン結節アクセント", "layered ribbon-knot garment accents, compact tied clusters, deliberate placement"],
        ["heraldic-crests", "紋章クレスト配置", "small heraldic garment crests, repeated rank emblems, clean symmetrical placement"],
        ["gemstone-settings", "宝石セッティング", "garment-integrated gemstone settings, secure metal bezels, restrained jewel distribution"],
        ["beaded-chains", "ビーズチェーン", "fine beaded garment chains, short controlled drapes, delicate attachment points"],
        ["feather-trim", "羽根トリム", "compact feather garment trim, layered soft edging, consistent directional flow"],
        ["mechanical-joints", "機械関節ディテール", "articulated mechanical garment joints, compact hinge plates, visible functional connections"],
        ["circuit-seams", "回路シームライン", "circuit-like garment seam lines, organized branching paths, embedded technical trim"],
        ["constellation-thread", "星座糸装飾", "constellation-thread garment embroidery, connected star points, sparse celestial pattern"],
        ["botanical-vines", "植物蔿装飾", "botanical vine garment ornament, curling embroidered stems, measured leaf clusters"],
        ["snow-crystal-motifs", "雪結晶モチーフ", "snow-crystal garment motifs, fine radial geometry, lightly scattered placement"],
        ["flame-scrollwork", "炎卷曲模様", "flame-scroll garment ornament, tapered curling shapes, controlled rising rhythm"],
        ["wave-borders", "波紋ボーダー", "layered wave-border garment pattern, flowing repeated curves, clear hem placement"],
        ["geometric-grid", "幾何学グリッド", "geometric garment grid ornament, aligned modular cells, disciplined line spacing"],
        ["tassel-points", "タッセルポイント", "selective garment tassel accents, short weighted cords, balanced movement points"],
        ["layered-belts", "多層ベルト構成", "layered garment belt arrangement, varied widths, orderly clasp hierarchy"],
        ["brooch-cluster", "非対称ブローチ群", "asymmetrical garment brooch cluster, mixed compact emblems, single focal placement"],
        ["miniature-bells", "小型ベルチャーム", "miniature bell garment charms, restrained spacing, delicate hanging attachments"]
      ]
    },
    {
      key: "palette",
      title: "🎨 配色・光彩変換",
      note: "衣装の構造と素材を保ち、主色・副色・差し色の関係を置き換える。",
      selection: "single",
      items: [
        ["snow-silver", "雪白×銀×氷青", "snow-white and silver garment palette with restrained ice-blue accents"],
        ["monochrome", "モノクローム白黒", "high-contrast black-and-white garment palette with clean neutral separation"],
        ["crimson-gold", "深紅×黒×古金", "deep-crimson and black garment palette with antique-gold accents"],
        ["navy-cyan", "深紺×シアン", "deep-navy garment palette with clear cyan technical accents"],
        ["emerald-ivory", "翡翠×象牙白", "emerald-green and ivory garment palette with restrained brass details"],
        ["violet-black", "宵紫×漆黒", "midnight-violet and lacquer-black garment palette with cool silver accents"],
        ["sunset-coral", "夕焼けコーラル", "sunset-coral garment palette with warm amber and soft gold transitions"],
        ["aurora-gradient", "オーロラグラデーション", "aurora-gradient garment palette shifting through aqua, violet, and pale green"],
        ["moonlight-blue", "月光青×淡銀", "moonlight-blue garment palette with pale-silver panels and cool white accents"],
        ["antique-sepia", "アンティークセピア", "antique-sepia garment palette with parchment beige and aged bronze accents"],
        ["pastel-candy", "パステルキャンディ", "pastel candy garment palette with softly separated pink, mint, and lavender"],
        ["earth-neutral", "アースニュートラル", "earth-neutral garment palette with sand, clay, moss, and charcoal balance"],
        ["glacier-aqua", "氷河アクア", "glacier-aqua garment palette with translucent blue-white and pale teal accents"],
        ["volcanic-ember", "火山黒×燃火橙", "volcanic-black garment palette with ember-orange seams and dark red accents"],
        ["sakura-charcoal", "桜薄粉×墨灰", "pale-sakura and charcoal garment palette with restrained burgundy accents"],
        ["desert-turquoise", "砂金×ターコイズ", "desert-sand garment palette with turquoise and weathered copper accents"],
        ["ocean-pearl", "深海緑×真珠白", "deep-ocean teal garment palette with pearl-white and sea-glass accents"],
        ["royal-purple", "王紫×黄金", "royal-purple garment palette with luminous gold and deep wine accents"],
        ["prismatic-spectrum", "プリズム光譜", "prismatic garment palette with controlled spectral accents over a neutral base"],
        ["limited-two-tone", "限定2色アクセント", "strict two-tone garment palette with one dominant color and one precise accent color"]
      ]
    }
  ];

  window.SHIMA_ATTIRE_REMIX_LAB_V1 = {
    version: "1.0.0",
    expectedCount: 100,
    axes: axes
  };
})();
