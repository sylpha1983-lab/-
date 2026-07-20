(function(){
  "use strict";

  if (window.__SHIMA_WORK_FORMAT_PRESETS_V1__) return;

  var current = (window.__PP_DB && window.__PP_DB.packs)
    || window.PRESET_PACKS_DB
    || window.__PRESET_PACKS_DB;
  if (!current || typeof current !== "object") return;

  var KEY = "🎯 作品形式スターターパック (Artwork Format Starter Packs)";
  var COLLECTION = "work_format_starter_collection";

  function item(id, inputId, titleJa, titleEn, prompt, description){
    return {
      id: id,
      input_id: inputId,
      title_ja: titleJa,
      title_en: titleEn,
      val: prompt,
      desc_ja: description,
      collection_id: COLLECTION,
      collection_role: "complete_set",
      linked_ids: [],
      output_channel: "positive",
      prompt_intent: "positive-normal",
      preview: true
    };
  }

  var groups = [
    {
      title_ja: "👤 人物・出版ビジュアル",
      title_en: "Character & Publishing",
      children: [
        item(
          "work_format_character_portrait",
          "shima-work-format-character-portrait",
          "人物ポートレート",
          "Character Portrait",
          "character portrait, upper body framing, clear face focus, expressive eyes, readable facial features, controlled background, balanced negative space, editorial portrait composition",
          "顔と上半身を主役にする。画風・人物設定・品質は現在の選択をそのまま使う"
        ),
        item(
          "work_format_full_body_sheet",
          "shima-work-format-full-body-sheet",
          "全身立ち絵・設定画",
          "Full-body Character Sheet",
          "single full-body character reference, head-to-toe visible, neutral standing pose, clean readable silhouette, outfit details clearly presented, front-facing design presentation, simple reference backdrop",
          "衣装と全身シルエットを確認しやすい立ち絵形式にする"
        ),
        item(
          "work_format_key_visual",
          "shima-work-format-key-visual",
          "一枚絵・キービジュアル",
          "Hero Key Visual",
          "hero key visual, strong focal hierarchy, dramatic story moment, foreground midground background separation, dynamic visual flow, cinematic staging, intentional negative space",
          "主役・物語・背景を一枚の見せ場としてまとめる"
        ),
        item(
          "work_format_cover_card",
          "shima-work-format-cover-card",
          "漫画表紙・ゲームカード",
          "Cover & Game Card Art",
          "cover illustration, collectible card art framing, strong central focal point, poster-like composition, title-safe open area, decorative border rhythm, clear emblem space, iconic silhouette",
          "表紙やカードに転用しやすい中央主役と余白を作る。文字そのものは固定しない"
        )
      ]
    },
    {
      title_ja: "🌍 世界・設計ビジュアル",
      title_en: "World & Design",
      children: [
        item(
          "work_format_environment_concept",
          "shima-work-format-environment-concept",
          "背景コンセプトアート",
          "Environment Concept Art",
          "environment concept art, environment as the main subject, wide establishing shot, strong spatial depth, clear landmark silhouette, foreground scale cues, layered atmosphere, explorable world design",
          "人物より世界・建築・自然を主役にした広い画面へ寄せる"
        ),
        item(
          "work_format_mecha_design",
          "shima-work-format-mecha-design",
          "メカ設計・機体展示",
          "Mecha Design Presentation",
          "mechanical design presentation, full machine visible, readable hard-surface silhouette, functional joints, articulated components, clear material separation, technical concept art layout, neutral presentation backdrop",
          "機体全体と関節・装甲・素材の役割が読める設計展示にする"
        ),
        item(
          "work_format_creature_plate",
          "shima-work-format-creature-plate",
          "クリーチャー図鑑",
          "Creature Encyclopedia Plate",
          "creature encyclopedia illustration, full creature visible, distinctive species silhouette, anatomical clarity, natural history plate composition, habitat vignette, scale reference cues, clean specimen presentation",
          "生物の全身・種族差・生息環境が伝わる図鑑形式にする"
        ),
        item(
          "work_format_product_ad",
          "shima-work-format-product-ad",
          "商品広告・パッケージ",
          "Product Ad & Packaging",
          "product hero shot, single product focus, premium commercial lighting, clean presentation background, controlled reflections, clear material definition, ad-ready open space, polished package visual composition",
          "衣装・小物・商品を広告の主役として見せ、文字を置ける余白も確保する"
        )
      ]
    },
    {
      title_ja: "🧪 特殊媒体・物語表現",
      title_en: "Stylized & Narrative",
      children: [
        item(
          "work_format_picture_book",
          "shima-work-format-picture-book",
          "絵本・児童書",
          "Picture Book Illustration",
          "picture book illustration, clear visual storytelling, friendly shape language, hand-painted warmth, readable silhouettes, page-spread composition, gentle environmental details, inviting narrative moment",
          "一目で物語が伝わる、読みやすく温かい絵本の見開き形式にする"
        ),
        item(
          "work_format_pixel_game",
          "shima-work-format-pixel-game",
          "ピクセルゲーム画面",
          "Pixel Game Screen",
          "pixel art game scene, coherent pixel grid, limited color palette, sprite-scale readable shapes, tile-based environment, retro game screen composition, intentional low-resolution aesthetic, crisp pixel clusters",
          "低解像感をPositive表現として使い、ゲーム画面らしい統一ピクセルへ寄せる"
        ),
        item(
          "work_format_lowpoly_diorama",
          "shima-work-format-lowpoly-diorama",
          "ローポリゴン・ジオラマ",
          "Low-poly Diorama",
          "low-poly diorama, faceted geometry, simplified materials, miniature isometric scene, clean color blocks, compact world composition, stylized ambient lighting, game-ready presentation",
          "面構成と小さな箱庭感を主役にし、過剰な写実材質を要求しない"
        ),
        item(
          "work_format_horror_dreamscape",
          "shima-work-format-horror-dreamscape",
          "ホラー・夢幻イラスト",
          "Horror Dreamscape",
          "surreal horror illustration, uncanny visual metaphor, dreamlike spatial distortion, controlled darkness, unsettling focal point, atmospheric depth, restrained color accents, haunting narrative composition",
          "流血へ固定せず、違和感・暗さ・空間の歪みで物語性のある恐怖を作る"
        )
      ]
    }
  ];

  var ordered = {};
  ordered[KEY] = groups;
  Object.keys(current).forEach(function(key){
    if (key !== KEY) ordered[key] = current[key];
  });

  if (!window.__PP_DB) window.__PP_DB = {};
  window.__PP_DB.packs = ordered;
  window.PRESET_PACKS_DB = ordered;
  window.__PRESET_PACKS_DB = ordered;
  window.__SHIMA_WORK_FORMAT_PRESETS_V1__ = {
    version: "1.0.0",
    key: KEY,
    count: 12,
    collectionId: COLLECTION
  };
})();
