(function(){
  "use strict";

  window.__SHIMA_QUALITY_NEGATIVE_GUARDS_V1__ = [
    {
      family: "anime_real",
      label: "リアルアニメ破綻防止",
      desc: "蝋・プラスチック肌や過剰な反射を抑える6語。",
      tags: [
        "waxy skin",
        "plastic skin",
        "uncanny face",
        "overly glossy skin",
        "oversharpened details",
        "harsh specular highlights"
      ]
    },
    {
      family: "cg_anime",
      label: "CGアニメ破綻防止",
      desc: "ローポリ感、硬い表情、平坦な材質やUI混入を抑える6語。",
      tags: [
        "low-poly look",
        "flat materials",
        "stiff facial expression",
        "plastic material look",
        "rough polygon edges",
        "game UI overlay"
      ]
    },
    {
      family: "anime_paint",
      label: "アニメ塗り破綻防止",
      desc: "写真化、線崩れ、色濁り、不要な厚塗り化を抑える6語。",
      tags: [
        "photorealistic skin texture",
        "muddy colors",
        "broken lineart",
        "painterly blur",
        "inconsistent cel shading",
        "overly realistic lighting"
      ]
    },
    {
      family: "photo",
      label: "フォト破綻防止",
      desc: "アニメ線、CG感、人形肌、過剰HDRや肌色飽和を抑える6語。",
      tags: [
        "anime lineart",
        "CGI look",
        "doll-like skin",
        "waxy skin",
        "overprocessed HDR",
        "oversaturated skin tones"
      ]
    },
    {
      family: "pixel_art",
      label: "ピクセル表現の崩れ防止",
      desc: "ぼやけ、写真質感、滑らかすぎる線など、ピクセル表現を溶かす要素を抑える6語。",
      tags: [
        "blurred pixel edges",
        "unwanted smooth gradients",
        "photorealistic textures",
        "vector-clean curves",
        "painterly brushwork",
        "inconsistent pixel scale"
      ]
    },
    {
      family: "low_poly",
      label: "ローポリ表現の崩れ防止",
      desc: "過剰な細分化、写真質感、細密表面など、意図した面構成を隠す要素を抑える6語。",
      tags: [
        "subdivision-smooth surfaces",
        "high-poly sculpt detail",
        "photorealistic textures",
        "noisy mesh topology",
        "inconsistent polygon scale",
        "excessive micro-surface detail"
      ]
    },
    {
      family: "retro_anime",
      label: "旧アニメ表現の崩れ防止",
      desc: "現代CG、写真化、滑らかすぎる階調など、手描きセル感を消す要素を抑える6語。",
      tags: [
        "modern digital gloss",
        "photorealistic rendering",
        "high-end 3D CGI",
        "ultra-smooth gradients",
        "vector-clean lineart",
        "contemporary anime coloring"
      ]
    },
    {
      family: "analog_media",
      label: "アナログ劣化表現の保護",
      desc: "無傷のデジタル映像、完全な色合わせなど、VHS・圧縮崩しを消す要素を抑える6語。",
      tags: [
        "pristine digital image",
        "noise-free footage",
        "perfect color registration",
        "ultra-sharp digital clarity",
        "sterile modern video",
        "compression-free image"
      ]
    }
  ];

  window.__SHIMA_QUALITY_CONFLICT_RULES_V1__ = [
    {
      family: "anime_real",
      title: "リアルアニメとセル塗り固定が同居",
      detail: "混合表現が狙いなら残して問題ありません。写実寄りを優先する時だけ整理候補です。",
      terms: [
        "clean anime cel shading",
        "clean cel shading",
        "flat color separation",
        "pure cel shading",
        "anime lineart"
      ]
    },
    {
      family: "cg_anime",
      title: "CGアニメと画材表現が同居",
      detail: "質感が競合しやすい画材語です。CG主体なら単品指定だけを外せます。",
      terms: [
        "watercolor",
        "oil painting",
        "pencil sketch",
        "ink wash",
        "charcoal drawing",
        "pastel illustration",
        "impasto"
      ]
    },
    {
      family: "anime_paint",
      title: "アニメ塗りと写実CG技術が同居",
      detail: "PBRやレイトレがセル塗りを押し流す可能性があります。意図した混合なら残してください。",
      terms: [
        "photorealistic rendering",
        "photo-realistic rendering",
        "physically based rendering",
        "physically based lighting",
        "ray-traced reflections",
        "ray tracing",
        "subsurface scattering",
        "global illumination",
        "cgi rendering"
      ]
    },
    {
      family: "photo",
      title: "フォトとアニメ描画語が同居",
      detail: "写真主体なら線画・セル影・平面色の単品指定が整理候補です。",
      terms: [
        "clean anime cel shading",
        "clean cel shading",
        "anime lineart",
        "clean lineart",
        "flat color separation",
        "anime illustration",
        "manga style",
        "chibi"
      ]
    },
    {
      family: "pixel_art",
      title: "ピクセル表現と滑らかな写実描画が同居",
      detail: "低解像度の意図が薄れる候補です。混合表現が狙いならそのまま残せます。",
      terms: [
        "photorealistic rendering",
        "realistic skin texture",
        "smooth gradient shading",
        "vector art",
        "painterly rendering",
        "ray-traced reflections",
        "micro-surface detail"
      ]
    },
    {
      family: "low_poly",
      title: "ローポリと高密度写実メッシュが同居",
      detail: "面の簡略化と競合しやすい細密語です。意図した質感混合なら残してください。",
      terms: [
        "photorealistic rendering",
        "high-poly sculpt",
        "subdivision surface",
        "micro-surface detail",
        "subsurface scattering",
        "intricate texture detail",
        "ray-traced reflections"
      ]
    },
    {
      family: "retro_anime",
      title: "旧アニメと現代CG・写真技術が同居",
      detail: "手描きセル感を押し流す可能性があります。新旧混合作風なら整理は不要です。",
      terms: [
        "photorealistic rendering",
        "high-end 3D anime rendering",
        "physically based lighting",
        "ray-traced reflections",
        "micro-surface detail",
        "modern digital gloss",
        "smooth gradient shading"
      ]
    },
    {
      family: "analog_media",
      title: "アナログ劣化と超鮮明デジタル品質が同居",
      detail: "VHS・圧縮崩しを弱める可能性があります。崩しと精細感の併用が狙いなら残せます。",
      terms: [
        "ultra high resolution",
        "crisp details",
        "sharp focus",
        "micro-surface detail",
        "ray-traced reflections",
        "pristine digital image",
        "noise-free image"
      ]
    }
  ];
})();
