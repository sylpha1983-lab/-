// Auto-generated bundle for section 'attire'
const SHIMA_BRAND_CORE = "Shima-enaga inspired design language, based on a small round white long-tailed bushtit, very compact round upper-body silhouette, noticeably small and fluffy proportions, snow-white and charcoal-black signature palette, bold symmetrical black circular eye-ring markings as a visible motif (patch/embroidery/print), tiny subtle beak motif detail, small subtle feather crest accent, long narrow avian tail feathers made of multiple thin layered plumes, thin elegant bird tail fan structure, not mammal tail, minimal decorative feather accents, no animal ears, no large angel wings, no giant feather spread, balanced proportions, bird-like but wearable";
// Contains 20 versions stacked in ascending order.


(function(){
  try{
    if (!document.getElementById("__attire_r18_raw_hide_style__")) {
      const st = document.createElement("style");
      st.id = "__attire_r18_raw_hide_style__";
      st.textContent = `
#list-attire .attire-v17-container,
#list-attire .attire-v22-container,
#list-attire .attire-r18 {
  visibility: hidden !important;
  opacity: 0 !important;
  pointer-events: none !important;
}
#list-attire #__attire_r18_last_zone__ {
  visibility: visible !important;
  opacity: 1 !important;
  pointer-events: auto !important;
}
`;
      document.head.appendChild(st);
    }
  }catch(_){}
})();
(function(){
// --- builder_ui.section.attire.v1.js ---
(function(){
  "use strict";
  const VERSION = 3; // 現代ファッション基本編 (ドレス・スカート形状強化版)
  const KEY = "attire";

  const CATEGORIES = {
    "👚 トップス・シャツ (Tops & Shirts)": [
      { ja: "Tシャツ", en: "t-shirt" }, { ja: "白シャツ", en: "white shirt" },
      { ja: "ブラウス", en: "blouse" }, { ja: "Yシャツ", en: "collared shirt" },
      { ja: "タンクトップ", en: "tank top" }, { ja: "キャミソール", en: "camisole" },
      { ja: "チューブトップ", en: "tube top" }, { ja: "クロップトップ (へそ出し)", en: "crop top" },
      { ja: "ホルターネック", en: "halterneck" }, { ja: "ノースリーブシャツ", en: "sleeveless shirt" },
      { ja: "シースルーシャツ", en: "see-through shirt" }, { ja: "ポロシャツ", en: "polo shirt" },
      { ja: "タートルネック", en: "turtleneck" }, { ja: "胸空きタートル", en: "keyhole turtleneck" },
      { ja: "リブセーター", en: "ribbed sweater" }, { ja: "オフショルニット", en: "off-shoulder sweater" },
      { ja: "オーバーサイズパーカー", en: "oversized hoodie" }, { ja: "パーカー", en: "hoodie" },
      { ja: "カーディガン", en: "cardigan" }, { ja: "ベスト", en: "vest" }
    ],
    "🧥 アウター・ジャケット (Outerwear)": [
      { ja: "ジャケット", en: "jacket" }, { ja: "ブレザー", en: "blazer" },
      { ja: "トレンチコート", en: "trench coat" }, { ja: "ダッフルコート", en: "duffle coat" },
      { ja: "ピーコート", en: "peacoat" }, { ja: "ダウンジャケット", en: "puffer jacket" },
      { ja: "ライダース (革ジャン)", en: "biker jacket" }, { ja: "デニムジャケット", en: "denim jacket" },
      { ja: "スタジャン", en: "varsity jacket" }, { ja: "スカジャン", en: "sukajan" },
      { ja: "MA-1 (ボンバー)", en: "bomber jacket" }, { ja: "ウィンドブレーカー", en: "windbreaker" },
      { ja: "ボレロ", en: "bolero" }, { ja: "ポンチョ", en: "poncho" },
      { ja: "ケープコート", en: "cape coat" }, { ja: "腰巻きカーディガン", en: "cardigan around waist" },
      { ja: "肩掛けジャケット", en: "jacket over shoulders" }
    ],
    "👗 スカート・形状 (Skirts & Shapes)": [
      { ja: "ミニスカート", en: "miniskirt" }, { ja: "ロングスカート", en: "long skirt" },
      { ja: "プリーツスカート", en: "pleated skirt" }, { ja: "チェック柄スカート", en: "plaid skirt" },
      { ja: "タイトスカート (ペンシル)", en: "pencil skirt" }, { ja: "フレアスカート", en: "flared skirt" },
      { ja: "Aラインスカート", en: "a-line skirt" }, { ja: "フリルスカート", en: "frilled skirt" },
      { ja: "ティアード (段々)", en: "tiered skirt" }, { ja: "レイヤード (重ね)", en: "layered skirt" },
      { ja: "バルーンスカート", en: "bubble skirt" }, { ja: "巻きスカート", en: "wrap skirt" },
      { ja: "スリット入りスカート", en: "slit skirt" }, { ja: "ハイロースカート (前後丈違)", en: "high-low skirt" },
      { ja: "サスペンダースカート", en: "suspender skirt" }, { ja: "ジャンパースカート", en: "jumper skirt" },
      { ja: "サーキュラースカート", en: "circle skirt" }, { ja: "チュールスカート", en: "tulle skirt" }
    ],
    "💃 ドレス・ワンピース (Dresses & Gowns)": [
      { ja: "ワンピース", en: "one-piece dress" }, { ja: "サマードレス", en: "sundress" },
      { ja: "マキシ丈ワンピ", en: "maxi dress" }, { ja: "ミニワンピ", en: "mini dress" },
      { ja: "ニットワンピ", en: "sweater dress" }, { ja: "シャツワンピ", en: "shirt dress" },
      { ja: "ボディコンワンピ", en: "bodycon dress" }, { ja: "スリップドレス", en: "slip dress" },
      { ja: "カクテルドレス", en: "cocktail dress" }, { ja: "イブニングドレス", en: "evening gown" },
      { ja: "パーティードレス", en: "party dress" }, { ja: "舞踏会ドレス", en: "ballgown" },
      { ja: "プリンセスライン", en: "princess line dress" }, { ja: "Aラインドレス", en: "a-line dress" },
      { ja: "マーメイドドレス", en: "mermaid dress" }, { ja: "エンパイアウエスト", en: "empire waist dress" },
      { ja: "ホルターネックドレス", en: "halter dress" }, { ja: "ベアドレス (肩出し)", en: "strapless dress" },
      { ja: "背中空きドレス", en: "backless dress" }, { ja: "チャイナドレス", en: "cheongsam" } // v3/v12にもあるが人気なのでここにも
    ],
    "👖 ボトムス・パンツ (Pants & Shorts)": [
      { ja: "ジーンズ", en: "jeans" }, { ja: "ダメージジーンズ", en: "ripped jeans" },
      { ja: "スキニージーンズ", en: "skinny jeans" }, { ja: "ショートパンツ", en: "shorts" },
      { ja: "ホットパンツ", en: "hot pants" }, { ja: "デニムショーツ", en: "denim shorts" },
      { ja: "ドルフィンショーツ", en: "dolphin shorts" }, { ja: "カーゴパンツ", en: "cargo pants" },
      { ja: "レギンス/スパッツ", en: "leggings" }, { ja: "ハーレムパンツ", en: "harem pants" },
      { ja: "ベルボトム", en: "bell-bottoms" }, { ja: "ワイドパンツ", en: "wide leg pants" },
      { ja: "サブリナパンツ", en: "capri pants" }, { ja: "レザーパンツ", en: "leather pants" },
      { ja: "オーバーオール", en: "overalls" }, { ja: "サロペット", en: "salopette" }
    ]
  };


  
  window.__injectAttireRawR18HideStyle = window.__injectAttireRawR18HideStyle || function(){
    try{
      if (document.getElementById("__attire_raw_r18_hide_style__")) return;
      const st = document.createElement("style");
      st.id = "__attire_raw_r18_hide_style__";
      st.textContent = `
#list-attire.attire-r18-ready > .attire-v17-container,
#list-attire.attire-r18-ready > .attire-v22-container,
#list-attire.attire-r18-ready > .attire-r18,
#list-attire .section-content > .attire-v17-container,
#list-attire .section-content > .attire-v22-container,
#list-attire .section-content > .attire-r18 {
  display: none !important;
}
`;
      document.head.appendChild(st);
    }catch(_){}
  };

  window.__normalizeAttireLayout = window.__normalizeAttireLayout || function(parent){
    try{
      const root = (parent && parent.querySelector)
        ? (parent.querySelector(".section-content") || parent)
        : (document.querySelector("#list-attire .section-content") || document.getElementById("list-attire"));
      if (!root) return;
      const IS_SECRET_UNLOCKED = (function(){
        try{ return localStorage.getItem("MY_SECRET_UNLOCK") === "true"; }catch(_){ return false; }
      })();
      try{ if (window.__injectAttireRawR18HideStyle) window.__injectAttireRawR18HideStyle(); }catch(_){}
      try{
        const host = document.getElementById("list-attire");
        if (host && IS_SECRET_UNLOCKED) host.classList.add("attire-r18-ready");
      }catch(_){}
      if (root.__attireNormalizing) return;
      root.__attireNormalizing = true;

      const existingNormalDivider = root.querySelector("#__attire_normal_divider__");
      if (existingNormalDivider){
        existingNormalDivider.remove();
      }
      const existingNormalGroup = root.querySelector("#__attire_normal_group__");
      if (existingNormalGroup){
        const existingBody = existingNormalGroup.querySelector(".attire-normal-group-body");
        if (existingBody){
          Array.from(existingBody.children || []).forEach(function(child){
            root.insertBefore(child, existingNormalGroup);
          });
        }
        existingNormalGroup.remove();
      }
      const existingR18Zone = root.querySelector("#__attire_r18_last_zone__");
      if (existingR18Zone){
        const groupedBodies = existingR18Zone.querySelectorAll(".attire-r18-parent-body");
        groupedBodies.forEach(function(body){
          Array.from(body.children || []).forEach(function(child){
            if (child && child.classList && child.classList.contains("attire-r18-collection")) return;
            root.insertBefore(child, existingR18Zone);
          });
        });
        existingR18Zone.remove();
      }

      if (!IS_SECRET_UNLOCKED){
        Array.from(root.children || []).forEach(function(el){
          if (!el) return;
          const txt = (el && el.textContent ? el.textContent : "").replace(/\s+/g, " ").trim();
          const cls = (el.className || "").toString();
          const looksR18 =
            (el.id === "__attire_r18_last_zone__")
            || /attire-v17-container|attire-v22-container|attire-r18/.test(cls)
            || txt.includes("R-18")
            || txt.includes("NSFW")
            || txt.includes("限界突破")
            || txt.includes("フェティッシュ")
            || txt.includes("完全露出")
            || txt.includes("ボンテージ")
            || txt.includes("拘束")
            || txt.includes("露出・裸系")
            || txt.includes("ランジェリー・特殊インナー")
            || txt.includes("着崩し・チラリズム")
            || txt.includes("異形・寄生・生体系")
            || txt.includes("侵食・寄生特化コレクション")
            || txt.includes("汚れ・液体系特化コレクション")
            || txt.includes("女王・支配者特化コレクション");
          if (looksR18 && el.parentNode === root) {
            el.remove();
          }
        });
      }

      const children = Array.from(root.children || []);
      const special = [];
      const normal = [];
      const gender = [];
      const r18 = [];

      function getText(el){
        return (el && el.textContent ? el.textContent : "").replace(/\s+/g, " ").trim();
      }
      function isSpecialNode(el){
        if (!el) return false;
        if (el.id === "__attire_special_top_zone__" || el.id === "__attire_r18_last_zone__") return false;
        if (el.matches && (el.matches(".attire-v21-shima") || el.matches(".attire-v23-container") || el.matches("[class*='attire-v23']"))) return true;
        const txt = getText(el);
        return txt.includes("シマエナガ・コレクション")
          || txt.includes("チャイナ服特化コレクション")
          || txt.includes("アイドル衣装特化コレクション")
          || txt.includes("攻め・スペシャル")
          || txt.includes("特化コレクション");
      }
      function isR18Node(el){
        if (!el) return false;
        if (el.id === "__attire_r18_last_zone__") return true;
        if (el.id === "__attire_special_top_zone__") return false;
        if (el.matches && (el.matches(".attire-v17-container") || el.matches(".attire-v22-container") || el.matches(".attire-r18"))) return true;
        const txt = getText(el);
        return txt.includes("R-18")
          || txt.includes("NSFW")
          || txt.includes("限界突破")
          || txt.includes("フェティッシュ")
          || txt.includes("完全露出")
          || txt.includes("ボンテージ");
      }
      function isGenderNode(el){
        if (!el) return false;
        if (el.id === "__attire_special_top_zone__" || el.id === "__attire_r18_last_zone__") return false;
        const txt = getText(el);
        return txt.includes("男性専用") || txt.includes("女性専用") || txt.includes("Male Only") || txt.includes("Female Only");
      }

      children.forEach(function(el){
        if (!el) return;
        if (el.id === "__attire_normal_group__" || (el.classList && el.classList.contains("attire-normal-group"))) return;
        if (el.id === "__attire_special_top_zone__" || el.id === "__attire_r18_last_zone__") return;
        if (isSpecialNode(el)) special.push(el);
        else if (isR18Node(el)) r18.push(el);
        else if (isGenderNode(el)) gender.push(el);
        else normal.push(el);
      });

      special.forEach(function(el){ if (el) root.appendChild(el); });

      if (normal.length){
        const normalDivider = document.createElement("div");
        normalDivider.id = "__attire_normal_divider__";
        normalDivider.className = "attire-normal-divider";
        normalDivider.style.cssText = "display:flex;align-items:center;gap:10px;width:100%;max-width:100%;margin:14px 0 8px;color:#9b6f7d;font-weight:700;box-sizing:border-box;";
        const dividerLineL = document.createElement("span");
        dividerLineL.style.cssText = "flex:1;height:1px;background:#e6d7dd;display:block;";
        const dividerLabel = document.createElement("span");
        dividerLabel.textContent = "👗 通常衣装";
        dividerLabel.style.cssText = "white-space:nowrap;font-size:14px;letter-spacing:0.02em;";
        const dividerLineR = document.createElement("span");
        dividerLineR.style.cssText = "flex:1;height:1px;background:#e6d7dd;display:block;";
        normalDivider.appendChild(dividerLineL);
        normalDivider.appendChild(dividerLabel);
        normalDivider.appendChild(dividerLineR);
        root.appendChild(normalDivider);

        const normalWrap = document.createElement("details");
        normalWrap.id = "__attire_normal_group__";
        normalWrap.className = "attire-normal-group";
        normalWrap.open = false;
        normalWrap.style.cssText = "display:block;width:100%;max-width:100%;margin:0 0 8px;border:1px solid #e5d8de;border-radius:12px;background:#fff;overflow:hidden;box-sizing:border-box;";

        const normalSummary = document.createElement("summary");
        normalSummary.textContent = "👗 一般カテゴリー / General Attire";
        normalSummary.style.cssText = "display:list-item;cursor:pointer;list-style:none;font-weight:700;color:#8b6674;background:#faf6f8;padding:10px 12px;";
        normalWrap.appendChild(normalSummary);

        const normalBody = document.createElement("div");
        normalBody.className = "attire-normal-group-body";
        normalBody.style.cssText = "display:block;width:100%;max-width:100%;padding:8px 0 2px;box-sizing:border-box;";
        normal.forEach(function(el){
          if (!el) return;
          el.style.width = "100%";
          el.style.maxWidth = "100%";
          el.style.boxSizing = "border-box";
          normalBody.appendChild(el);
        });
        normalWrap.appendChild(normalBody);
        root.appendChild(normalWrap);
      }

      gender.forEach(function(el){ if (el) root.appendChild(el); });

      const r18CollectionDefs = {
        "👗 着崩し・チラリズム": [
          {
            title: "👗 着崩れ誘惑特化コレクション",
            description: "脱ぎ切らず、崩れ切らず、ぎりぎりで保たれた着衣の色気を深掘りする専用コレクション",
            presets: [
              { title: "💋 事故っぽい肩落ち誘惑", items: [
                { ja: "肩落ちルーズニット", en: "slipping off shoulder sweater, loose neckline" },
                { ja: "胸元ゆるみシャツ", en: "partially unbuttoned shirt, loose cleavage" },
                { ja: "ずれた肩紐", en: "slipped shoulder straps, unstable fit" },
                { ja: "乱れた裾と皺", en: "rumpled hem, wrinkled fabric, messy drape" }
              ]},
              { title: "🔥 はだけ寸前フロントオープン", items: [
                { ja: "前全開寸前シャツ", en: "shirt hanging open, almost fully exposed" },
                { ja: "前開きガウン", en: "loosely opened gown, front parted" },
                { ja: "ボタン弾けブラウス", en: "blouse with buttons popping open, strained fabric" },
                { ja: "引っ張られた服の張力", en: "fabric pulled taut, stretched clothing tension" }
              ]},
              { title: "🩲 下着見え・片脱ぎルック", items: [
                { ja: "片紐ずれランジェリー", en: "lingerie strap slipped off, underwear peeking" },
                { ja: "見せ下着チラ見え", en: "visible lingerie under disheveled clothes" },
                { ja: "片脱ぎワンピース", en: "half removed dress, one side slipping down" },
                { ja: "脱ぎかけタイツ", en: "pantyhose half peeled down, disheveled legs" }
              ]}
            ],
            baseGroups: [
              { title: "🪡 肩落ち・胸元崩れ", items: [
                { ja: "肩落ちルーズニット", en: "slipping off shoulder sweater, loose neckline" },
                { ja: "胸元ゆるみシャツ", en: "partially unbuttoned shirt, loose cleavage" },
                { ja: "片側ずり落ちトップス", en: "one side slipped top, uneven neckline" },
                { ja: "胸元だけ開いたドレス", en: "dress loosened around bust, accidental reveal" },
                { ja: "崩れたオフショルトップス", en: "disheveled off-shoulder top, fallen neckline" }
              ]},
              { title: "🫦 はだけ・前開き", items: [
                { ja: "前全開寸前シャツ", en: "shirt hanging open, almost fully exposed" },
                { ja: "はだけた着物", en: "disheveled kimono, front slipping open" },
                { ja: "前開きガウン", en: "loosely opened gown, front parted" },
                { ja: "ボタン弾けブラウス", en: "blouse with buttons popping open, strained fabric" },
                { ja: "脱ぎかけジャケット", en: "half removed jacket, slipping from shoulders" }
              ]}
            ],
            customizeGroups: [
              { title: "🩲 下着見え・片脱ぎ", items: [
                { ja: "片紐ずれランジェリー", en: "lingerie strap slipped off, underwear peeking" },
                { ja: "見せ下着チラ見え", en: "visible lingerie under disheveled clothes" },
                { ja: "片脱ぎワンピース", en: "half removed dress, one side slipping down" },
                { ja: "腰掛けショーツ見え", en: "panties peeking above low-worn clothes" },
                { ja: "脱ぎかけタイツ", en: "pantyhose half peeled down, disheveled legs" }
              ]},
              { title: "👠 乱れたシルエット", items: [
                { ja: "片袖だけ落ちた服", en: "one sleeve fallen down, asymmetric disheveled wear" },
                { ja: "ずれた裾のミニドレス", en: "misaligned hem mini dress, disturbed silhouette" },
                { ja: "腰で止まった脱ぎかけ衣装", en: "partially stripped outfit caught at the waist" },
                { ja: "ずれたストッキング合わせ", en: "slipped stockings, messy hosiery styling" },
                { ja: "胸元と裾だけ乱れた礼装", en: "formal wear disturbed at bust and hem" }
              ]}
            ],
            settingGroups: [
              { title: "🎀 着崩れ演出設定", items: [
                { ja: "乱れた裾と皺", en: "rumpled hem, wrinkled fabric, messy drape" },
                { ja: "引っ張られた服の張力", en: "fabric pulled taut, stretched clothing tension" },
                { ja: "ずれた肩紐", en: "slipped shoulder straps, unstable fit" },
                { ja: "脱ぎかけ途中の空気", en: "mid-undressing atmosphere, interrupted dressing" },
                { ja: "着衣の限界保持", en: "barely staying on clothes, precarious outfit" }
              ]}
            ]

          },
          {
            title: "📐 極小露出・食い込み特化コレクション",
            description: "極小布地、食い込み、深いカット、ぎりぎり覆う構造など“面積の小ささそのものが武器になる衣装”を深掘りする専用コレクション",
            presets: [
              { title: "🩱 マイクロカバー完成セット", items: [
                { ja: "極小布地トップ", en: "micro cloth top, minimal coverage" },
                { ja: "極小布地ボトム", en: "micro cloth bottom, minimal fabric" },
                { ja: "際どい面積感", en: "dangerously tiny coverage, barely-there fabric" },
                { ja: "見せるための最小構造", en: "minimum structure designed for display, barely-held outfit" }
              ]},
              { title: "📏 ハイレグ食い込みセット", items: [
                { ja: "極端なハイレグライン", en: "extreme high-leg line, aggressive cut" },
                { ja: "食い込み強調ライン", en: "deep wedgie line, emphasized contour" },
                { ja: "腰骨を見せる深いカット", en: "deep cut exposing the hip bones" },
                { ja: "脚の付け根まで攻めた輪郭", en: "daring cut toward the upper thighs, boundary-pushing silhouette" }
              ]},
              { title: "🔺 サイド開放セット", items: [
                { ja: "脇が開いた極小衣装", en: "open-side micro outfit, exposed side cut" },
                { ja: "細いストラップだけで支える", en: "held only by thin straps, minimal support" },
                { ja: "胸元を浅く覆う布", en: "shallow covering over the bust, minimal concealment" },
                { ja: "危うい保持感のある構造", en: "precarious holding structure, unstable coverage" }
              ]}
            ],
            baseGroups: [
              { title: "📐 極小面積・深いカット", items: [
                { ja: "極小布地トップ", en: "micro cloth top, minimal coverage" },
                { ja: "極小布地ボトム", en: "micro cloth bottom, minimal fabric" },
                { ja: "極端なハイレグライン", en: "extreme high-leg line, aggressive cut" },
                { ja: "腰骨を見せる深いカット", en: "deep cut exposing the hip bones" },
                { ja: "脇が開いた極小衣装", en: "open-side micro outfit, exposed side cut" }
              ]},
              { title: "🔻 危ういカバー構造", items: [
                { ja: "細いストラップだけで支える", en: "held only by thin straps, minimal support" },
                { ja: "胸元を浅く覆う布", en: "shallow covering over the bust, minimal concealment" },
                { ja: "ギリギリ覆う前布", en: "barely-covering front panel, minimal modesty" },
                { ja: "横から大きく開いた構造", en: "widely open side structure, daring silhouette" },
                { ja: "限界まで削った布面積", en: "fabric area reduced to the limit, ultra-minimal outfit" }
              ]}
            ],
            customizeGroups: [
              { title: "📏 食い込み・境界強調", items: [
                { ja: "食い込み強調ライン", en: "deep wedgie line, emphasized contour" },
                { ja: "脚の付け根まで攻めた輪郭", en: "daring cut toward the upper thighs, boundary-pushing silhouette" },
                { ja: "腰回りの細ストラップ追加", en: "thin strap accents around the hips, precarious framing" },
                { ja: "露出境界を強調する縁取り", en: "edge lines emphasizing the boundary of exposure" },
                { ja: "視線を集めるV字カット", en: "attention-drawing V-cut, provocative silhouette" }
              ]},
              { title: "🪶 危うい保持アレンジ", items: [
                { ja: "ずれそうで保たれている布", en: "fabric on the verge of slipping, yet holding" },
                { ja: "片側だけ不安定な支え", en: "support unstable on one side, asymmetrical hold" },
                { ja: "結び目が小さい保持構造", en: "tiny knot support structure, fragile hold" },
                { ja: "見せるために削ぎ落とした構成", en: "stripped-down structure built for display" },
                { ja: "保持点の少ない危険な衣装", en: "dangerous low-support outfit, minimal anchor points" }
              ]}
            ],
            settingGroups: [
              { title: "🔥 極小露出演出設定", items: [
                { ja: "際どい面積感", en: "dangerously tiny coverage, barely-there fabric" },
                { ja: "見せるための最小構造", en: "minimum structure designed for display, barely-held outfit" },
                { ja: "危うい保持感のある構造", en: "precarious holding structure, unstable coverage" },
                { ja: "露出境界を攻めた衣装感", en: "boundary-pushing exposure styling, daring costume presence" },
                { ja: "布であることを保った限界感", en: "limit-pushing while still remaining clothing, edge-of-coverage feel" }
              ]}
            ]

          },
          {
            title: "🩱 危うい保持・ずれ限界特化コレクション",
            description: "今にも外れそう、ほどけそう、こぼれそう。それでも辛うじて保たれている“保持の危うさ”を深掘りする専用コレクション",
            presets: [
              { title: "🎀 片側ずれ限界セット", items: [
                { ja: "片側だけずれたトップス", en: "top shifted to one side, asymmetrical slippage" },
                { ja: "肩紐一本で保つ服", en: "outfit held by a single strap, unstable support" },
                { ja: "危うい保持感", en: "precarious hold, barely staying in place" },
                { ja: "今にも外れそうな緊張", en: "tension as if about to slip free, imminent wardrobe failure" }
              ]},
              { title: "🪢 ゆるんだ結び目セット", items: [
                { ja: "ほどけかけた結び", en: "loosening knot, nearly undone tie" },
                { ja: "緩んだリボン固定", en: "loosened ribbon fastening, unstable hold" },
                { ja: "結び目だけで保つ衣装", en: "outfit held only by knots, fragile support" },
                { ja: "保持限界のテンション", en: "tension at the limit of support, strain in the fabric" }
              ]},
              { title: "📎 最小支持セット", items: [
                { ja: "支点が少ない衣装", en: "low-anchor outfit, minimal support points" },
                { ja: "細い金具で保つ構造", en: "held by tiny hardware, thin clasp support" },
                { ja: "引っ張られた布の張力", en: "stretched fabric tension, pulled to the limit" },
                { ja: "ずれそうで保たれている", en: "on the verge of slipping, yet still held in place" }
              ]}
            ],
            baseGroups: [
              { title: "🧷 不安定な固定", items: [
                { ja: "肩紐一本で保つ服", en: "outfit held by a single strap, unstable support" },
                { ja: "結び目だけで保つ衣装", en: "outfit held only by knots, fragile support" },
                { ja: "支点が少ない衣装", en: "low-anchor outfit, minimal support points" },
                { ja: "細い金具で保つ構造", en: "held by tiny hardware, thin clasp support" },
                { ja: "小さな留め具だけで支える", en: "supported only by tiny fasteners, fragile hold" }
              ]},
              { title: "↘ ずれ・滑り落ち寸前", items: [
                { ja: "片側だけずれたトップス", en: "top shifted to one side, asymmetrical slippage" },
                { ja: "ずれかけた胸元布", en: "bust fabric slipping out of place, unstable coverage" },
                { ja: "腰で止まる脱げかけ衣装", en: "almost-fallen outfit caught at the waist" },
                { ja: "ほどけかけた結び", en: "loosening knot, nearly undone tie" },
                { ja: "今にも外れそうな固定具", en: "fasteners seeming ready to come undone" }
              ]}
            ],
            customizeGroups: [
              { title: "📏 張力・保持限界", items: [
                { ja: "保持限界のテンション", en: "tension at the limit of support, strain in the fabric" },
                { ja: "引っ張られた布の張力", en: "stretched fabric tension, pulled to the limit" },
                { ja: "布が耐えている感じ", en: "sense of fabric barely enduring the strain" },
                { ja: "滑り落ちを止める細帯", en: "thin bands stopping the slide, last-point support" },
                { ja: "固定点に負荷が集中する", en: "stress concentrated on support points, fragile balance" }
              ]},
              { title: "🎀 ゆるみ・片寄りアレンジ", items: [
                { ja: "緩んだリボン固定", en: "loosened ribbon fastening, unstable hold" },
                { ja: "片側だけ露出が進んだ形", en: "exposure progressing on only one side, asymmetric reveal" },
                { ja: "均衡が崩れた衣装バランス", en: "off-balance outfit hold, uneven structure" },
                { ja: "今にも落ちる肩紐", en: "strap about to fall, edge-of-slip styling" },
                { ja: "ずれそうで保たれている", en: "on the verge of slipping, yet still held in place" }
              ]}
            ],
            settingGroups: [
              { title: "⚠ 保持限界演出設定", items: [
                { ja: "危うい保持感", en: "precarious hold, barely staying in place" },
                { ja: "今にも外れそうな緊張", en: "tension as if about to slip free, imminent wardrobe failure" },
                { ja: "保持限界のテンション", en: "tension at the limit of support, strain in the fabric" },
                { ja: "均衡が崩れかけた衣装感", en: "costume balance on the verge of collapse, unstable hold" },
                { ja: "ぎりぎりで保たれる色気", en: "sensuality sustained only by the finest margin" }
              ]}
            ]
          }
        ],
        "🩲 ランジェリー・特殊インナー": [
          {
            title: "🩲 高級ランジェリー特化コレクション",
            description: "下着というより装飾美。レース、宝飾、ガーターまで含めて“見せるための高級ランジェリー”をまとめた専用コレクション",
            presets: [
              { title: "💎 宝飾ブー ドワールセット", items: [
                { ja: "宝飾ランジェリー", en: "jewel lingerie, gem decorated underwear" },
                { ja: "パールチェーンインナー", en: "pearl chain lingerie, ornamented underwear" },
                { ja: "黒金の高級下着", en: "black and gold luxury lingerie, premium innerwear" },
                { ja: "香水めいた気配", en: "perfumed boudoir atmosphere, intimate elegance" }
              ]},
              { title: "🤍 ブライダル白ランジェリー", items: [
                { ja: "ブライダルランジェリー", en: "bridal lingerie, pure white luxury underwear" },
                { ja: "シルクスリップ", en: "silk slip lingerie, glossy luxury innerwear" },
                { ja: "上品な透け感", en: "elegant transparency, refined sensuality" },
                { ja: "繊細な刺繍装飾", en: "delicate embroidery details, haute lingerie" }
              ]},
              { title: "🖤 ガーター主役セット", items: [
                { ja: "ガーターベルトセット", en: "garter belt lingerie set, thigh straps" },
                { ja: "編み上げコルセット", en: "lace-up corset lingerie, waist cincher" },
                { ja: "ストッキング一体ランジェリー", en: "lingerie with stockings, coordinated hosiery" },
                { ja: "密着する高級素材", en: "luxury fabric clinging to body, premium texture" }
              ]}
            ],
            baseGroups: [
              { title: "🩰 レース・フリル", items: [
                { ja: "総レースランジェリー", en: "luxury lace lingerie, floral lace set" },
                { ja: "フリルたっぷりベビードール", en: "frilled babydoll lingerie, delicate frills" },
                { ja: "透けレースガウン", en: "sheer lace robe, elegant lingerie gown" },
                { ja: "花柄刺繍ブラセット", en: "embroidered floral lingerie set, luxury details" },
                { ja: "リボン飾りランジェリー", en: "ribbon decorated lingerie, refined innerwear" }
              ]},
              { title: "🧷 ガーター・コルセット", items: [
                { ja: "ガーターベルトセット", en: "garter belt lingerie set, thigh straps" },
                { ja: "ビスチェランジェリー", en: "bustier lingerie, fitted innerwear" },
                { ja: "編み上げコルセット", en: "lace-up corset lingerie, waist cincher" },
                { ja: "ストッキング一体ランジェリー", en: "lingerie with stockings, coordinated hosiery" },
                { ja: "サテンコルセットドレスインナー", en: "satin corset inner dress, elegant bondage-lite" }
              ]}
            ],
            customizeGroups: [
              { title: "💎 ジュエリー・ブライダル", items: [
                { ja: "宝飾ランジェリー", en: "jewel lingerie, gem decorated underwear" },
                { ja: "パールチェーンインナー", en: "pearl chain lingerie, ornamented underwear" },
                { ja: "ブライダルランジェリー", en: "bridal lingerie, pure white luxury underwear" },
                { ja: "シルクスリップ", en: "silk slip lingerie, glossy luxury innerwear" },
                { ja: "黒金の高級下着", en: "black and gold luxury lingerie, premium innerwear" }
              ]},
              { title: "👠 見せる下着アレンジ", items: [
                { ja: "見せるガーターストラップ", en: "display garter straps, visible lingerie styling" },
                { ja: "腰飾りつきランジェリー", en: "lingerie with waist jewelry accents" },
                { ja: "太腿チェーン付きインナー", en: "innerwear with thigh chains" },
                { ja: "胸元ジュエル追加", en: "jewel accents on bustline lingerie" },
                { ja: "透けガウン重ね", en: "layered sheer robe over lingerie" }
              ]}
            ],
            settingGroups: [
              { title: "🌹 色気演出設定", items: [
                { ja: "上品な透け感", en: "elegant transparency, refined sensuality" },
                { ja: "密着する高級素材", en: "luxury fabric clinging to body, premium texture" },
                { ja: "繊細な刺繍装飾", en: "delicate embroidery details, haute lingerie" },
                { ja: "香水めいた気配", en: "perfumed boudoir atmosphere, intimate elegance" },
                { ja: "下着見せを前提にした装飾", en: "display lingerie styling, made to be seen" }
              ]}
            ]
          },
          {
            title: "👑 夜の高級衣装特化コレクション",
            description: "夜会服、宝飾チャイナ、儀礼衣装、光沢ガウンなど“高級な夜の装い”をR-18寄りの衣装美として深掘りする専用コレクション",
            presets: [
              { title: "🍷 夜会ドレスセット", items: [
                { ja: "深紅の夜会ドレス", en: "crimson evening gown, luxurious formal dress" },
                { ja: "黒サテンのロングドレス", en: "black satin long gown, elegant formalwear" },
                { ja: "肩出しの高級礼装", en: "off-shoulder luxury formalwear, glamorous night attire" },
                { ja: "宝石が散る夜会空気", en: "gem-lit ballroom atmosphere, luxury night ambience" }
              ]},
              { title: "🐉 宝飾チャイナセット", items: [
                { ja: "宝飾チャイナドレス", en: "jewel-decorated qipao, luxury china dress" },
                { ja: "金刺繍の光沢チャイナ", en: "glossy qipao with gold embroidery" },
                { ja: "房飾りと胸元宝飾", en: "tassel accents and jeweled bust ornament" },
                { ja: "宮廷めいた赤金の気配", en: "red-and-gold palace aura, regal oriental glamour" }
              ]},
              { title: "🕯 儀礼ガウンセット", items: [
                { ja: "透けガウン重ねの礼装", en: "formalwear layered with sheer gown, sensual luxury" },
                { ja: "シルクガウンを羽織った夜着", en: "silk gown over elegant night attire" },
                { ja: "香水めいた密室の気配", en: "perfumed private room atmosphere, intimate luxury" },
                { ja: "高級布の重い落ち感", en: "heavy drape of expensive fabric, couture fall" }
              ]}
            ],
            baseGroups: [
              { title: "👗 夜会服・高級ドレス", items: [
                { ja: "深紅の夜会ドレス", en: "crimson evening gown, luxurious formal dress" },
                { ja: "黒サテンのロングドレス", en: "black satin long gown, elegant formalwear" },
                { ja: "スリット入り高級ドレス", en: "luxury slit gown, glamorous formal dress" },
                { ja: "肩出しの高級礼装", en: "off-shoulder luxury formalwear, glamorous night attire" },
                { ja: "ベルベット夜会服", en: "velvet evening dress, rich formalwear" }
              ]},
              { title: "🏮 宝飾チャイナ・宮廷衣装", items: [
                { ja: "宝飾チャイナドレス", en: "jewel-decorated qipao, luxury china dress" },
                { ja: "金刺繍の光沢チャイナ", en: "glossy qipao with gold embroidery" },
                { ja: "宮廷風スリット礼装", en: "palace-style slit formalwear, regal qipao" },
                { ja: "房飾りと胸元宝飾", en: "tassel accents and jeweled bust ornament" },
                { ja: "赤金の儀礼チャイナ", en: "red-and-gold ceremonial qipao, regal glamour" }
              ]}
            ],
            customizeGroups: [
              { title: "💎 宝飾・高級アクセント", items: [
                { ja: "胸元ジュエル追加", en: "jewel accents on bustline, luxury ornament" },
                { ja: "肩飾り付き夜会服", en: "evening gown with shoulder ornaments" },
                { ja: "腰飾りチェーン追加", en: "waist chain accents, formal luxury styling" },
                { ja: "透けガウン重ね", en: "layered sheer gown over formalwear" },
                { ja: "宝石のきらめき追加", en: "extra gemstone sparkle, ballroom luxury" }
              ]},
              { title: "🧵 高級布・ドレープ強化", items: [
                { ja: "シルクの落ち感を強化", en: "enhanced silk drape, elegant fabric fall" },
                { ja: "サテン反射を強調", en: "accentuated satin reflections, rich gloss" },
                { ja: "ベルベットの吸光感", en: "light-absorbing velvet richness, deep luxury fabric" },
                { ja: "重い裾の流れ", en: "heavy flowing hem, formal gown movement" },
                { ja: "高級仕立ての立体感", en: "couture-level structure, premium tailored silhouette" }
              ]}
            ],
            settingGroups: [
              { title: "🌙 夜の高級感設定", items: [
                { ja: "宝石が散る夜会空気", en: "gem-lit ballroom atmosphere, luxury night ambience" },
                { ja: "宮廷めいた赤金の気配", en: "red-and-gold palace aura, regal oriental glamour" },
                { ja: "香水めいた密室の気配", en: "perfumed private room atmosphere, intimate luxury" },
                { ja: "高級布の重い落ち感", en: "heavy drape of expensive fabric, couture fall" },
                { ja: "上品なのに妖しい夜の色気", en: "elegant yet seductive nocturnal glamour" }
              ]}
            ]
          },
          {
            title: "🩶 艶素材・密着特化コレクション",
            description: "露出ではなく、素材そのものの粘度と反射で攻める。光沢、薄膜、濡れ布、密着感を束ねた専用コレクション",
            presets: [
              { title: "🖤 ラテックス主役セット", items: [
                { ja: "黒ラテックスボディスーツ", en: "black latex bodysuit, mirror gloss" },
                { ja: "光沢ラバーランジェリー", en: "glossy rubber lingerie, slick highlight" },
                { ja: "強いハイライト反射", en: "strong specular highlights, reflective material" },
                { ja: "皮膚に吸い付く質感", en: "vacuum-like cling texture, suction fit" }
              ]},
              { title: "💧 濡れ布透け感セット", items: [
                { ja: "濡れシャツ密着", en: "wet shirt clinging to skin, transparency" },
                { ja: "濡れた薄絹ドレス", en: "wet thin silk dress, clinging drape" },
                { ja: "水滴つきシースルー布", en: "see-through fabric with droplets, wet sheen" },
                { ja: "艶と汗の境界が曖昧", en: "gloss merging with sweat sheen, slick surface" }
              ]},
              { title: "🫧 第二皮膚セット", items: [
                { ja: "極薄ボディストッキング", en: "ultra-thin bodystocking, second-skin fit" },
                { ja: "半透明ボディフィルム", en: "semi-transparent body film, second skin" },
                { ja: "薄膜で包んだような密閉感", en: "sealed in a thin membrane, wrapped body feel" },
                { ja: "光で輪郭が浮く素材", en: "light-revealed contours, glossy silhouette" }
              ]}
            ],
            baseGroups: [
              { title: "✨ ラテックス・グロス", items: [
                { ja: "黒ラテックスボディスーツ", en: "black latex bodysuit, mirror gloss" },
                { ja: "濡れたPVCドレス", en: "wet pvc dress, reflective synthetic shine" },
                { ja: "光沢ラバーランジェリー", en: "glossy rubber lingerie, slick highlight" },
                { ja: "全身ぴったりメタリック布", en: "skin-tight metallic fabric, body hugging" },
                { ja: "オイル光沢インナー", en: "oil gloss innerwear, liquid shine" }
              ]},
              { title: "💧 濡れ布・透け素材", items: [
                { ja: "濡れシャツ密着", en: "wet shirt clinging to skin, transparency" },
                { ja: "濡れた薄絹ドレス", en: "wet thin silk dress, clinging drape" },
                { ja: "半透明ボディフィルム", en: "semi-transparent body film, second skin" },
                { ja: "水滴つきシースルー布", en: "see-through fabric with droplets, wet sheen" },
                { ja: "濡れストッキング密着", en: "wet stockings clinging tightly, glossy legs" }
              ]}
            ],
            customizeGroups: [
              { title: "🫧 薄膜・ボディライン", items: [
                { ja: "極薄ボディストッキング", en: "ultra-thin bodystocking, second-skin fit" },
                { ja: "肌に貼り付く極薄布", en: "ultra thin fabric stuck to skin" },
                { ja: "輪郭が浮く密着トップス", en: "body contour top, silhouette emphasized" },
                { ja: "張り付くシアーインナー", en: "clinging sheer innerwear, translucent fit" },
                { ja: "ぴったり密着ワンピ", en: "skin-tight dress, every curve defined" }
              ]},
              { title: "🔧 密着レイヤー追加", items: [
                { ja: "濡れガウン重ね", en: "wet glossy robe layered over body" },
                { ja: "透明手袋と薄膜袖", en: "transparent gloves and membrane sleeves" },
                { ja: "ボディチェーン上から密着布", en: "clinging fabric over body chains" },
                { ja: "反射が走る脚部カバー", en: "reflective leg covers, glossy lower body" },
                { ja: "薄膜フード付き密着衣装", en: "skin-tight outfit with thin membrane hood" }
              ]}
            ],
            settingGroups: [
              { title: "🔮 素材演出設定", items: [
                { ja: "強いハイライト反射", en: "strong specular highlights, reflective material" },
                { ja: "皮膚に吸い付く質感", en: "vacuum-like cling texture, suction fit" },
                { ja: "光で輪郭が浮く素材", en: "light-revealed contours, glossy silhouette" },
                { ja: "艶と汗の境界が曖昧", en: "gloss merging with sweat sheen, slick surface" },
                { ja: "薄膜で包んだような密閉感", en: "sealed in a thin membrane, wrapped body feel" }
              ]}
            ]
          }
        ],
        "🔞 露出・裸系": [
          {
            title: "🔞 露出・裸系特化コレクション",
            description: "大胆な露出、無防備な素肌、極小布地、ぎりぎりの面積感までをまとめて深掘りする専用コレクション",
            presets: [
              { title: "🫧 無防備露出セット", items: [
                { ja: "完全露出ボディ", en: "fully exposed body, complete nude presentation" },
                { ja: "無防備な素肌感", en: "unguarded bare skin feel, vulnerable body" },
                { ja: "羞恥を伴う露出感", en: "embarrassed exposed atmosphere, vulnerable nudity" },
                { ja: "見られている意識", en: "awareness of being watched, exposed tension" }
              ]},
              { title: "📐 極小布地セット", items: [
                { ja: "極小布地トップ", en: "micro cloth top, minimal coverage" },
                { ja: "極小布地ボトム", en: "micro cloth bottom, minimal fabric" },
                { ja: "際どい面積感", en: "dangerously tiny coverage, barely-there fabric" },
                { ja: "食い込み強調ライン", en: "deep wedgie line, exposed body contour" }
              ]},
              { title: "💋 誘惑裸体セット", items: [
                { ja: "裸体を主役にした演出", en: "nude body as the focal point, exposed styling" },
                { ja: "艶やかな肌見せ", en: "glossy skin reveal, sensual nude glow" },
                { ja: "大胆な見せ方", en: "bold display style, fearless exposure" },
                { ja: "恥じらい混じりの挑発", en: "shy yet provocative exposure, alluring conflict" }
              ]}
            ],
            baseGroups: [
              { title: "🫧 裸体・全身露出", items: [
                { ja: "完全露出ボディ", en: "fully exposed body, complete nude presentation" },
                { ja: "裸体を主役にした演出", en: "nude body as the focal point, exposed styling" },
                { ja: "全身肌見せシルエット", en: "full-body skin reveal silhouette, exposed figure" },
                { ja: "無防備な素肌感", en: "unguarded bare skin feel, vulnerable body" },
                { ja: "潔く隠さない構図", en: "nothing-hidden composition, fully revealed body" }
              ]},
              { title: "📐 極小布地・面積感", items: [
                { ja: "極小布地トップ", en: "micro cloth top, minimal coverage" },
                { ja: "極小布地ボトム", en: "micro cloth bottom, minimal fabric" },
                { ja: "際どい面積感", en: "dangerously tiny coverage, barely-there fabric" },
                { ja: "食い込み強調ライン", en: "deep wedgie line, exposed body contour" },
                { ja: "ほとんど布のない拘束布地", en: "barely-there restraint cloth, minimal fabric wrap" }
              ]}
            ],
            customizeGroups: [
              { title: "💋 誘惑アクセント", items: [
                { ja: "艶やかな肌見せ", en: "glossy skin reveal, sensual nude glow" },
                { ja: "裸体を飾るアクセント", en: "decorative accents on nude body, sensual staging" },
                { ja: "見せるためのポーズ強調", en: "posed to display the body, exhibition styling" },
                { ja: "視線を集める腰元演出", en: "waist-focused revealing accent, attention drawing" },
                { ja: "肌に沿う細い飾り紐", en: "thin decorative strings tracing the body" }
              ]},
              { title: "🫣 羞恥・無防備調整", items: [
                { ja: "羞恥を伴う露出感", en: "embarrassed exposed atmosphere, vulnerable nudity" },
                { ja: "見られている意識", en: "awareness of being watched, exposed tension" },
                { ja: "無防備な肌見せ", en: "unguarded skin reveal, defenseless exposure" },
                { ja: "恥じらい混じりの挑発", en: "shy yet provocative exposure, alluring conflict" },
                { ja: "隠しきれない露出", en: "unable to fully hide the body, partial concealment failure" }
              ]}
            ],
            settingGroups: [
              { title: "🔞 露出演出設定", items: [
                { ja: "大胆な見せ方", en: "bold display style, fearless exposure" },
                { ja: "肌の面積を主役にする", en: "skin area as focal point, body-centered composition" },
                { ja: "露出と羞恥の両立", en: "balance of exposure and embarrassment" },
                { ja: "あえて隠さない態度", en: "deliberately unhidden attitude, confident reveal" },
                { ja: "裸体の解放感", en: "sense of nude liberation, freed skin exposure" }
              ]}
            ]
          },
          {
            title: "👙 裂け・破損寸前・限界衣装特化コレクション",
            description: "引き伸ばし、ほつれ、破れかけ、縫い目の限界など“壊れそうで壊れない衣装の危うさ”を深掘りする専用コレクション",
            presets: [
              { title: "🧵 縫い目限界セット", items: [
                { ja: "縫い目が悲鳴を上げるトップス", en: "top with seams at their breaking point, strained stitching" },
                { ja: "張力で歪んだドレス", en: "dress distorted by tension, stretched silhouette" },
                { ja: "布が限界まで引かれた構造", en: "fabric pulled to its absolute limit, stressed structure" },
                { ja: "今にも裂けそうな緊張感", en: "tension as if it could tear at any moment" }
              ]},
              { title: "✂ 破れかけセット", items: [
                { ja: "一部だけ裂けた衣装", en: "outfit torn in only one area, partial damage" },
                { ja: "ほつれた縁のミニドレス", en: "mini dress with frayed edges, damaged finish" },
                { ja: "脇だけ裂けたタイト服", en: "tight outfit torn at the side, stressed seam" },
                { ja: "無理に保たれた破損寸前の服", en: "outfit barely holding together, on the verge of tearing" }
              ]},
              { title: "🪡 張力破綻寸前セット", items: [
                { ja: "引き伸ばされた布地", en: "fabric stretched to the extreme, over-tensioned cloth" },
                { ja: "胸元で耐えるボタン", en: "buttons straining at the bustline, near-failure hold" },
                { ja: "張力で浮く縫い目", en: "seams lifting under tension, stress lines visible" },
                { ja: "壊れそうで壊れない保持感", en: "a held-together-at-the-edge feeling, almost-failing support" }
              ]}
            ],
            baseGroups: [
              { title: "🧵 張力・縫い目の限界", items: [
                { ja: "縫い目が悲鳴を上げるトップス", en: "top with seams at their breaking point, strained stitching" },
                { ja: "張力で歪んだドレス", en: "dress distorted by tension, stretched silhouette" },
                { ja: "引き伸ばされた布地", en: "fabric stretched to the extreme, over-tensioned cloth" },
                { ja: "張力で浮く縫い目", en: "seams lifting under tension, stress lines visible" },
                { ja: "胸元で耐えるボタン", en: "buttons straining at the bustline, near-failure hold" }
              ]},
              { title: "✂ 破れ・ほつれ寸前", items: [
                { ja: "一部だけ裂けた衣装", en: "outfit torn in only one area, partial damage" },
                { ja: "ほつれた縁のミニドレス", en: "mini dress with frayed edges, damaged finish" },
                { ja: "脇だけ裂けたタイト服", en: "tight outfit torn at the side, stressed seam" },
                { ja: "裂けかけたストッキング", en: "stockings close to tearing, stressed hosiery" },
                { ja: "無理に保たれた破損寸前の服", en: "outfit barely holding together, on the verge of tearing" }
              ]}
            ],
            customizeGroups: [
              { title: "🪡 限界テンション強化", items: [
                { ja: "布が限界まで引かれた構造", en: "fabric pulled to its absolute limit, stressed structure" },
                { ja: "張力で浮く縫い目", en: "seams lifting under tension, stress lines visible" },
                { ja: "引っ張られて歪む裾", en: "hem distorted by pulling tension, warped edge" },
                { ja: "保たれているだけの固定", en: "fastening that only barely holds, fragile support" },
                { ja: "限界まで耐える衣装面", en: "garment surface enduring at the limit, stressed material" }
              ]},
              { title: "✂ 破損寸前アレンジ", items: [
                { ja: "裂け目を強調する縁取り", en: "edging that emphasizes tears, accentuated damage lines" },
                { ja: "ほつれを残した高級布", en: "luxury fabric with visible fraying, elegant damage" },
                { ja: "部分的な破断感", en: "partial rupture feel, localized structural failure" },
                { ja: "今にも切れそうな細帯", en: "thin strap about to snap, dangerous hold" },
                { ja: "壊れそうで壊れない衣装感", en: "garment that seems ready to fail, yet still endures" }
              ]}
            ],
            settingGroups: [
              { title: "⚡ 限界衣装ムード設定", items: [
                { ja: "今にも裂けそうな緊張感", en: "tension as if it could tear at any moment" },
                { ja: "壊れそうで壊れない保持感", en: "a held-together-at-the-edge feeling, almost-failing support" },
                { ja: "服が物語を抱えた損傷感", en: "damage that still keeps the garment's story alive" },
                { ja: "戦いの余韻を残す衣装", en: "garment carrying the aftermath of conflict, lingering damage" },
                { ja: "限界で保たれる背徳感", en: "decadence sustained only at the breaking edge" }
              ]}
            ]
          }
        ],
        "⛓ 拘束・支配": [
          {
            title: "⛓ 女王・支配者特化コレクション",
            description: "縛る側、命じる側、見下ろす側の役割美学を深掘りする専用コレクション。女王、冷酷支配者、誘惑主導まで衣装としてまとめる",
            presets: [
              { title: "👑 女王様完成セット", items: [
                { ja: "漆黒ボンデージ女王", en: "black bondage queen outfit, commanding dominatrix look" },
                { ja: "ハイヒール支配者", en: "high-heel dominator outfit, strict authority" },
                { ja: "首輪と鎖の高圧セット", en: "collar and chain command set, oppressive dominance" },
                { ja: "冷酷な女王の気配", en: "cruel queen atmosphere, cold authority" }
              ]},
              { title: "🖤 冷酷支配者セット", items: [
                { ja: "硬質レザー支配服", en: "hard leather dominator wear, severe control" },
                { ja: "エナメル拘束ドレス", en: "patent bondage dress, glossy restraint fashion" },
                { ja: "命令のためのロンググローブ", en: "long command gloves, strict mistress styling" },
                { ja: "無慈悲な視線設定", en: "merciless gaze setting, dominant authority" }
              ]},
              { title: "💋 誘惑主導セット", items: [
                { ja: "誘惑する支配者ドレス", en: "seductive dominator dress, teasing authority" },
                { ja: "脚線を見せる拘束スタイル", en: "bondage styling emphasizing legs, alluring control" },
                { ja: "ガーター付き支配インナー", en: "dominator innerwear with garters, controlled seduction" },
                { ja: "命令しながら誘う空気", en: "tempting while commanding, dominant seduction mood" }
              ]}
            ],
            baseGroups: [
              { title: "🖤 ボンデージ・拘束ベース", items: [
                { ja: "漆黒ボンデージボディスーツ", en: "black bondage bodysuit, tight restraint base" },
                { ja: "レザーハーネス衣装", en: "leather harness outfit, dominant structure" },
                { ja: "拘束ベルト付きドレス", en: "dress with restraint belts, severe silhouette" },
                { ja: "エナメル拘束インナー", en: "patent restraint innerwear, glossy fit" },
                { ja: "首輪一体型支配服", en: "collar integrated dominator wear, control motif" }
              ]},
              { title: "👠 女王・支配者シルエット", items: [
                { ja: "高圧コルセットドレス", en: "authoritative corset dress, strict waistline" },
                { ja: "ハイヒール支配スタイル", en: "high-heel dominator style, superior posture" },
                { ja: "女王様ロンググローブ", en: "queen long gloves, commanding elegance" },
                { ja: "マント付き冷酷礼装", en: "cruel ceremonial cape outfit, ruler-like presence" },
                { ja: "命令者のタイトスカート", en: "commander tight skirt, strict dominant silhouette" }
              ]}
            ],
            customizeGroups: [
              { title: "⛓ 首輪・鎖・ハーネス", items: [
                { ja: "金具つき首輪", en: "metal collar with fittings, control accessory" },
                { ja: "胸元ハーネス追加", en: "chest harness added, bondage accent" },
                { ja: "太腿ベルト追加", en: "thigh straps added, dominant restraint styling" },
                { ja: "鎖アクセサリー装飾", en: "chain accessories, oppressive decoration" },
                { ja: "手首拘束バンド", en: "wrist restraint bands, strict cuff styling" }
              ]},
              { title: "🔧 素材・圧の強化", items: [
                { ja: "レザー光沢強化", en: "enhanced leather gloss, hard reflective control wear" },
                { ja: "エナメル反射追加", en: "added patent reflections, slick dominator shine" },
                { ja: "硬質シルエット化", en: "hardened silhouette, severe outfit structure" },
                { ja: "ガーター支配化", en: "garters turned into dominator styling" },
                { ja: "高圧アクセサリー追加", en: "high-pressure accessories added, authority ornaments" }
              ]}
            ],
            settingGroups: [
              { title: "🧠 支配者ムード設定", items: [
                { ja: "高圧的な空気", en: "overbearing atmosphere, oppressive authority" },
                { ja: "命令を前提にした立ち姿", en: "command-ready stance, dominant bearing" },
                { ja: "冷酷で無慈悲な印象", en: "cold and merciless impression, strict domination" },
                { ja: "誘惑しながら主導する", en: "leading while seducing, controlled temptation" },
                { ja: "絶対的優位の演出", en: "absolute superiority staging, total command" }
              ]}
            ]
          },
          {
            title: "⛓ 首輪・ハーネス・固定具衣装特化コレクション",
            description: "首輪、胸元ハーネス、腰ベルト、手首足首の固定具など“装着物としての支配感”を衣装として深掘りする専用コレクション",
            presets: [
              { title: "🔗 首輪主役セット", items: [
                { ja: "金具つき首輪", en: "metal-fitted collar, dominant accessory" },
                { ja: "首輪一体型ドレス", en: "dress integrated with a collar, controlled silhouette" },
                { ja: "首元に視線を集める構造", en: "structure drawing attention to the neck, controlled framing" },
                { ja: "装着感の強い支配アクセント", en: "dominant accessory with a strong sense of being worn" }
              ]},
              { title: "🖤 ハーネス衣装セット", items: [
                { ja: "胸元ハーネス衣装", en: "chest harness outfit, bondage-inspired fashion" },
                { ja: "ボディストラップドレス", en: "body-strap dress, controlled contour lines" },
                { ja: "腰ベルト主導のシルエット", en: "silhouette led by waist belts, structured restraint styling" },
                { ja: "金具で締まる衣装感", en: "outfit tightened by hardware, controlled costume feel" }
              ]},
              { title: "🧷 手首足首固定具セット", items: [
                { ja: "手首拘束バンド", en: "wrist restraint bands, styled cuffs" },
                { ja: "足首ストラップ装飾", en: "ankle strap ornaments, restraint-inspired accents" },
                { ja: "太腿ベルト追加", en: "thigh straps added, dominant restraint styling" },
                { ja: "身体の可動域を意識させる固定感", en: "fixing accents suggesting controlled movement range" }
              ]}
            ],
            baseGroups: [
              { title: "🔗 首輪・ネック固定", items: [
                { ja: "金具つき首輪", en: "metal-fitted collar, dominant accessory" },
                { ja: "首輪一体型ドレス", en: "dress integrated with a collar, controlled silhouette" },
                { ja: "チョーカー型固定具", en: "choker-style restraint fitting, controlled neck accessory" },
                { ja: "首元を縁取る支配ベルト", en: "dominant belt framing the neck, control motif" },
                { ja: "首元ロック付き装飾", en: "neck ornament with locking motif, restraint fashion" }
              ]},
              { title: "🖤 ハーネス・ボディストラップ", items: [
                { ja: "胸元ハーネス衣装", en: "chest harness outfit, bondage-inspired fashion" },
                { ja: "ボディストラップドレス", en: "body-strap dress, controlled contour lines" },
                { ja: "腰ベルト主導のシルエット", en: "silhouette led by waist belts, structured restraint styling" },
                { ja: "交差ストラップ衣装", en: "cross-strap outfit, constraining line work" },
                { ja: "金具で締まる衣装感", en: "outfit tightened by hardware, controlled costume feel" }
              ]}
            ],
            customizeGroups: [
              { title: "🧷 手首・足首・太腿アクセント", items: [
                { ja: "手首拘束バンド", en: "wrist restraint bands, styled cuffs" },
                { ja: "足首ストラップ装飾", en: "ankle strap ornaments, restraint-inspired accents" },
                { ja: "太腿ベルト追加", en: "thigh straps added, dominant restraint styling" },
                { ja: "グローブ固定具追加", en: "glove restraint fittings added, dressed control motif" },
                { ja: "脚線を区切る支配ベルト", en: "dominant belts dividing the leg line, controlled emphasis" }
              ]},
              { title: "⚙ 金具・固定具強化", items: [
                { ja: "バックル追加", en: "extra buckles, stronger restraint styling" },
                { ja: "リング金具追加", en: "ring hardware added, bondage fashion detail" },
                { ja: "細い鎖アクセント", en: "thin chain accents, controlled luxury detail" },
                { ja: "装着感を強める金属感", en: "metallic presence enhancing the feeling of being fitted" },
                { ja: "身体に沿う締結ライン", en: "fastening lines following the body, controlled silhouette" }
              ]}
            ],
            settingGroups: [
              { title: "⛓ 固定具衣装ムード設定", items: [
                { ja: "装着感の強い支配アクセント", en: "dominant accessory with a strong sense of being worn" },
                { ja: "身体の可動域を意識させる固定感", en: "fixing accents suggesting controlled movement range" },
                { ja: "衣装そのものが拘束具に見える", en: "the outfit itself reads like a restraint device" },
                { ja: "冷たい支配アクセサリー感", en: "cold dominant accessory feel, strict costume pressure" },
                { ja: "見た瞬間に空気を変える固定具", en: "fixing elements that change the atmosphere at first glance" }
              ]}
            ]
          },
          {
            title: "👠 支配者・女王・高圧衣装特化コレクション",
            description: "強いヒール、冷たい高級感、高圧的なシルエットなど“格で圧する支配衣装”を深掘りする専用コレクション",
            presets: [
              { title: "👑 冷酷女王完成セット", items: [
                { ja: "高圧コルセットドレス", en: "authoritative corset dress, strict waistline" },
                { ja: "女王様ロンググローブ", en: "queen long gloves, commanding elegance" },
                { ja: "強いヒールの支配者", en: "dominator with severe heels, superior bearing" },
                { ja: "冷たい高級感で見下ろす空気", en: "cold luxury used to look down on others, severe elegance" }
              ]},
              { title: "🖤 支配礼装セット", items: [
                { ja: "マント付き冷酷礼装", en: "cruel ceremonial cape outfit, ruler-like presence" },
                { ja: "命令者のタイトスカート", en: "commander tight skirt, strict dominant silhouette" },
                { ja: "高級ベルト主導の礼装", en: "formalwear led by luxury belts, controlling silhouette" },
                { ja: "絶対的優位を感じさせる仕立て", en: "tailoring that communicates absolute superiority" }
              ]},
              { title: "💋 妖艶支配セット", items: [
                { ja: "誘惑する支配者ドレス", en: "seductive dominator dress, teasing authority" },
                { ja: "脚線を見せる支配礼装", en: "dominant formalwear emphasizing the legs" },
                { ja: "高圧ヒールと長手袋", en: "severe heels and long gloves, dominant luxury" },
                { ja: "品位と威圧が同居する衣装感", en: "an outfit where elegance and intimidation coexist" }
              ]}
            ],
            baseGroups: [
              { title: "👠 ヒール・ロンググローブ・圧", items: [
                { ja: "強いヒールの支配者", en: "dominator with severe heels, superior bearing" },
                { ja: "女王様ロンググローブ", en: "queen long gloves, commanding elegance" },
                { ja: "高圧コルセットドレス", en: "authoritative corset dress, strict waistline" },
                { ja: "脚線を見せる支配礼装", en: "dominant formalwear emphasizing the legs" },
                { ja: "肩で圧する高級礼装", en: "luxury formalwear that dominates with shoulder presence" }
              ]},
              { title: "👑 女王・礼装・高級感", items: [
                { ja: "マント付き冷酷礼装", en: "cruel ceremonial cape outfit, ruler-like presence" },
                { ja: "命令者のタイトスカート", en: "commander tight skirt, strict dominant silhouette" },
                { ja: "高級ベルト主導の礼装", en: "formalwear led by luxury belts, controlling silhouette" },
                { ja: "宝飾を抑えた冷たい王侯感", en: "restrained jewels, cold aristocratic dominance" },
                { ja: "見下ろすための上位衣装", en: "high-rank attire meant to look down upon others" }
              ]}
            ],
            customizeGroups: [
              { title: "🖤 高圧アクセサリー", items: [
                { ja: "高圧アクセサリー追加", en: "high-pressure accessories added, authority ornaments" },
                { ja: "長手袋の存在感強化", en: "enhanced presence of long gloves, elegant severity" },
                { ja: "ヒールの威圧感を強化", en: "enhanced intimidation from heels, superior stance" },
                { ja: "肩章・装飾の格上感", en: "epaulettes and ornaments that raise the sense of rank" },
                { ja: "腰回りの支配的ベルト", en: "dominant waist belts, commanding body framing" }
              ]},
              { title: "👑 仕立て・シルエット強化", items: [
                { ja: "硬質シルエット化", en: "hardened silhouette, severe outfit structure" },
                { ja: "高級仕立ての立体感", en: "couture-level structure, premium tailored silhouette" },
                { ja: "首から脚まで通る支配ライン", en: "a commanding line running from neck to legs" },
                { ja: "視線を支配する縦シルエット", en: "vertical silhouette that dominates the viewer's gaze" },
                { ja: "衣装だけで圧を出す設計", en: "a design that exerts pressure through clothing alone" }
              ]}
            ],
            settingGroups: [
              { title: "👠 高圧女王ムード設定", items: [
                { ja: "冷たい高級感で見下ろす空気", en: "cold luxury used to look down on others, severe elegance" },
                { ja: "絶対的優位を感じさせる仕立て", en: "tailoring that communicates absolute superiority" },
                { ja: "品位と威圧が同居する衣装感", en: "an outfit where elegance and intimidation coexist" },
                { ja: "露出より格で圧する支配感", en: "dominance achieved through rank rather than exposure" },
                { ja: "視線を従わせる衣装の威圧", en: "the outfit's intimidation that forces the gaze to submit" }
              ]}
            ]
          },
          {
            title: "💋 高級背徳ランジェリー特化コレクション",
            description: "漆黒レース、深紅ランジェリー、宝飾ガーター、コルセット密着など“高級感と背徳感が同居するランジェリー”を深掘りする専用コレクション",
            presets: [
              { title: "🖤 漆黒レース完成セット", items: [
                { ja: "漆黒レースランジェリー", en: "jet-black lace lingerie, decadent luxury" },
                { ja: "透ける黒レース", en: "sheer black lace, elegant erotic transparency" },
                { ja: "黒ガーター主導", en: "black garter-led styling, decadent framing" },
                { ja: "高級背徳の空気", en: "luxurious decadent mood, elegant corruption" }
              ]},
              { title: "❤️ 深紅コルセットセット", items: [
                { ja: "深紅ランジェリー", en: "deep crimson lingerie, luxurious seduction" },
                { ja: "高圧コルセット", en: "tight corset, severe shaping luxury" },
                { ja: "宝飾ガーター", en: "jeweled garters, rich decadent accents" },
                { ja: "退廃高級感", en: "decadent luxury, aristocratic corruption" }
              ]},
              { title: "✨ 宝飾シアーランジェリーセット", items: [
                { ja: "宝飾ランジェリー", en: "jeweled lingerie, ornate intimacy" },
                { ja: "シアーグローブ追加", en: "sheer gloves added, refined erotic styling" },
                { ja: "高級ストッキング", en: "luxury stockings, polished sensual finish" },
                { ja: "品のある背徳感", en: "elegant sense of taboo, refined decadence" }
              ]}
            ],
            baseGroups: [
              { title: "🩲 レース・コルセット・テディ", items: [
                { ja: "漆黒レースランジェリー", en: "jet-black lace lingerie, decadent luxury" },
                { ja: "深紅ランジェリー", en: "deep crimson lingerie, luxurious seduction" },
                { ja: "高圧コルセット", en: "tight corset, severe shaping luxury" },
                { ja: "テディ型ボディランジェリー", en: "teddy-style body lingerie, intimate silhouette" },
                { ja: "高級ボディスーツランジェリー", en: "luxury bodysuit lingerie, sculpted allure" }
              ]},
              { title: "✨ 宝飾・シアー・グローブ", items: [
                { ja: "宝飾ランジェリー", en: "jeweled lingerie, ornate intimacy" },
                { ja: "宝飾ガーター", en: "jeweled garters, rich decadent accents" },
                { ja: "シアーグローブ追加", en: "sheer gloves added, refined erotic styling" },
                { ja: "高級ストッキング", en: "luxury stockings, polished sensual finish" },
                { ja: "透ける黒レース", en: "sheer black lace, elegant erotic transparency" }
              ]}
            ],
            customizeGroups: [
              { title: "💎 背徳アクセント強化", items: [
                { ja: "黒ガーター主導", en: "black garter-led styling, decadent framing" },
                { ja: "宝石付き留め具", en: "jewel-set fasteners, luxurious restraint detail" },
                { ja: "胸元に寄る宝飾ライン", en: "jewel lines guiding the gaze toward the bust" },
                { ja: "太腿を飾る高級バンド", en: "luxury thigh bands, decadent framing" },
                { ja: "退廃色の差し色", en: "decadent color accents, rich forbidden elegance" }
              ]},
              { title: "🪞 素材・密着感調整", items: [
                { ja: "しなやかな密着シルエット", en: "supple body-hugging silhouette, luxurious fit" },
                { ja: "滑らかなサテン裏地感", en: "smooth satin lining feel, intimate luxury" },
                { ja: "肌を縁取るレース輪郭", en: "lace edges tracing the skin, elegant temptation" },
                { ja: "控えめな艶で高級に見せる", en: "subtle sheen for a high-end finish" },
                { ja: "柔らかな透けの重なり", en: "layered soft transparency, refined sensuality" }
              ]}
            ],
            settingGroups: [
              { title: "🌙 背徳ムード設定", items: [
                { ja: "高級背徳の空気", en: "luxurious decadent mood, elegant corruption" },
                { ja: "退廃高級感", en: "decadent luxury, aristocratic corruption" },
                { ja: "品のある背徳感", en: "elegant sense of taboo, refined decadence" },
                { ja: "露骨ではなく危険な色気", en: "dangerous sensuality without becoming vulgar" },
                { ja: "近寄りがたい高級感", en: "untouchable high-end aura, forbidden allure" }
              ]}
            ]
          },
          {
            title: "🔥 露出境界・見せつけ衣装特化コレクション",
            description: "胸元、腰回り、背中、脚線など“どこを見せるか”を設計して視線を誘導する、見せつけ前提の衣装を深掘りする専用コレクション",
            presets: [
              { title: "🔻 胸元集中セット", items: [
                { ja: "胸元集中カット", en: "bust-focused cut, attention-guiding opening" },
                { ja: "胸元を縁取る深いV字", en: "deep V framing the cleavage, provocative focus" },
                { ja: "視線を胸元へ誘導する縁取り", en: "edge lines guiding the gaze toward the bust" },
                { ja: "見せるために計算された上半身", en: "upper-body design calculated for display" }
              ]},
              { title: "↘ 腰回り・サイド見せセット", items: [
                { ja: "腰骨見せカット", en: "hip-bone reveal cut, suggestive side opening" },
                { ja: "サイド開放シルエット", en: "side-open silhouette, gaze-guiding exposure" },
                { ja: "腰回りに細い視線誘導ライン", en: "thin visual lines emphasizing the waist and hips" },
                { ja: "横から見せつける構造", en: "side-display structure, provocative framing" }
              ]},
              { title: "🦵 脚線・背中見せセット", items: [
                { ja: "脚見せスリット衣装", en: "leg-showing slit outfit, dramatic reveal" },
                { ja: "背中見せドレス", en: "back-reveal dress, display-focused elegance" },
                { ja: "視線を脚へ流す縦ライン", en: "vertical lines drawing the eye down the legs" },
                { ja: "観賞前提の挑発シルエット", en: "teasing silhouette designed to be looked at" }
              ]}
            ],
            baseGroups: [
              { title: "🔻 胸元・腰回り・背中の見せ場", items: [
                { ja: "胸元集中カット", en: "bust-focused cut, attention-guiding opening" },
                { ja: "胸元を縁取る深いV字", en: "deep V framing the cleavage, provocative focus" },
                { ja: "腰骨見せカット", en: "hip-bone reveal cut, suggestive side opening" },
                { ja: "背中見せドレス", en: "back-reveal dress, display-focused elegance" },
                { ja: "サイド開放シルエット", en: "side-open silhouette, gaze-guiding exposure" }
              ]},
              { title: "🦵 脚線・スリット・視線導線", items: [
                { ja: "脚見せスリット衣装", en: "leg-showing slit outfit, dramatic reveal" },
                { ja: "脚線を拾うタイトライン", en: "tight lines emphasizing the legs" },
                { ja: "視線を脚へ流す縦ライン", en: "vertical lines drawing the eye down the legs" },
                { ja: "歩くたびに開くカットライン", en: "cut lines that open with movement, staged display" },
                { ja: "観賞前提の挑発シルエット", en: "teasing silhouette designed to be looked at" }
              ]}
            ],
            customizeGroups: [
              { title: "🎯 視線誘導アクセント", items: [
                { ja: "視線を胸元へ誘導する縁取り", en: "edge lines guiding the gaze toward the bust" },
                { ja: "腰回りに細い視線誘導ライン", en: "thin visual lines emphasizing the waist and hips" },
                { ja: "背中へ視線を集める開き方", en: "back openings that gather the gaze" },
                { ja: "脚線を強調する縁取り", en: "trim emphasizing the leg line, display styling" },
                { ja: "見せ場を区切る細ストラップ", en: "thin straps defining the showcase area" }
              ]},
              { title: "🔥 見せつけ感強化", items: [
                { ja: "見せるために計算された上半身", en: "upper-body design calculated for display" },
                { ja: "横から見せつける構造", en: "side-display structure, provocative framing" },
                { ja: "観賞前提の立体裁断", en: "tailoring intended for deliberate display" },
                { ja: "挑発的な境界線の処理", en: "provocative handling of the exposure boundary" },
                { ja: "脚と背中を主役にする設計", en: "design that makes the legs and back the stars" }
              ]}
            ],
            settingGroups: [
              { title: "💋 見せつけムード設定", items: [
                { ja: "観賞させるための衣装感", en: "an outfit made to be looked at" },
                { ja: "露出境界を武器にする空気", en: "an atmosphere that weaponizes the boundary of exposure" },
                { ja: "視線を操る挑発感", en: "teasing control over where the gaze lands" },
                { ja: "品を残した見せつけ感", en: "show-off sensuality that still keeps elegance" },
                { ja: "無言で見ろと言う衣装", en: "an outfit that silently commands attention" }
              ]}
            ]
          }
        ]
      };


      let __v24PresetApplying = false;
      let __v24QualityPresetApplying = false;

      function clearR18CollectionPresetUI(root){
        if (!root) return;
        root.querySelectorAll('.attire-r18-preset-checkbox').forEach(function(cb){ cb.checked = false; });
      }

      function clearR18CollectionQualityPresetUI(root){
        if (!root) return;
        root.querySelectorAll('.attire-r18-quality-preset-checkbox').forEach(function(cb){ cb.checked = false; });
      }

      function getR18GeneratedQualityHost(root){
        if (!root) return null;
        let host = root.querySelector('.attire-r18-generated-quality-host');
        if (!host){
          host = document.createElement('div');
          host.className = 'attire-r18-generated-quality-host';
          host.style.display = 'none';
          root.appendChild(host);
        }
        return host;
      }

      function clearR18GeneratedQualityOutputs(root){
        if (!root) return;
        root.querySelectorAll('.attire-r18-generated-quality-host').forEach(function(host){ host.remove(); });
      }

      function clearR18CollectionRealChecks(root, mode){
        if (!root) return;
        const targetMode = mode || 'all';
        root.querySelectorAll('.attire-r18-real-checkbox').forEach(function(cb){
          const isQuality = (cb.dataset.r18kind || 'main') === 'quality';
          if (targetMode === 'all'
            || (targetMode === 'main' && !isQuality)
            || (targetMode === 'quality' && isQuality)) {
            cb.checked = false;
          }
        });
        if (targetMode === 'all' || targetMode === 'quality') clearR18GeneratedQualityOutputs(root);
      }

      function resetR18CollectionPresetState(root){
        if (!root) return;
        clearR18CollectionPresetUI(root);
        clearR18CollectionQualityPresetUI(root);
        clearR18CollectionRealChecks(root, 'all');
      }

      function resetR18CollectionQualityState(root){
        if (!root) return;
        clearR18CollectionQualityPresetUI(root);
        clearR18CollectionRealChecks(root, 'quality');
      }

      function openAncestorsForR18Checkbox(cb){
        if (!cb) return;
        let el = cb.parentElement;
        while (el){
          if (el.tagName && el.tagName.toLowerCase() === 'details') el.open = true;
          el = el.parentElement;
        }
      }

      function normalizeR18PresetItems(items){
        return (items || []).map(function(entry){
          if (typeof entry === 'string') {
            return { ja: entry, en: entry };
          }
          if (entry && typeof entry === 'object') {
            return {
              ja: String(entry.ja || entry.label || entry.title || ''),
              en: String(entry.en || entry.ja || entry.label || entry.title || '')
            };
          }
          const txt = String(entry || '');
          return { ja: txt, en: txt };
        }).filter(function(entry){ return entry.ja; });
      }

      function applyR18CollectionPreset(root, preset, sourceCheckbox){
        if (!root || !preset) return;
        __v24PresetApplying = true;
        resetR18CollectionPresetState(root);
        const real = Array.from(root.querySelectorAll('.attire-r18-real-checkbox:not([data-r18kind="quality"])'));
        const map = new Map();
        real.forEach(function(cb){
          const key = cb.dataset.ja || '';
          if (key && !map.has(key)) map.set(key, cb);
        });
        const matched = [];
        normalizeR18PresetItems(preset.items).forEach(function(item){
          const cb = map.get(item.ja);
          if (cb){
            cb.checked = true;
            matched.push(cb);
          }
        });
        matched.forEach(openAncestorsForR18Checkbox);
        clearR18CollectionPresetUI(root);
        if (sourceCheckbox) sourceCheckbox.checked = true;
        __v24PresetApplying = false;
      }

      function applyR18CollectionQualityPreset(root, preset, sourceCheckbox){
        if (!root || !preset) return;
        __v24QualityPresetApplying = true;
        resetR18CollectionQualityState(root);
        const real = Array.from(root.querySelectorAll('.attire-r18-real-checkbox[data-r18kind="quality"]'));
        const map = new Map();
        real.forEach(function(cb){
          const key = cb.dataset.ja || '';
          if (key && !map.has(key)) map.set(key, cb);
        });
        const matched = [];
        const generated = [];
        normalizeR18PresetItems(preset.items).forEach(function(item){
          const cb = map.get(item.ja);
          if (cb){
            cb.checked = true;
            matched.push(cb);
          } else if (item.en) {
            generated.push(item);
          }
        });
        if (generated.length){
          const host = getR18GeneratedQualityHost(root);
          generated.forEach(function(item){
            const cb = document.createElement('input');
            cb.type = 'checkbox';
            cb.className = 'attire-r18-real-checkbox attire-r18-generated-quality-output';
            cb.dataset.en = item.en;
            cb.dataset.ja = item.ja;
            cb.dataset.r18src = 'v24';
            cb.dataset.r18kind = 'quality';
            cb.checked = true;
            host.appendChild(cb);
          });
        }
        matched.forEach(openAncestorsForR18Checkbox);
        clearR18CollectionQualityPresetUI(root);
        if (sourceCheckbox) sourceCheckbox.checked = true;
        __v24QualityPresetApplying = false;
      }

      function createR18CollectionNode(collection){
        if (!collection || !collection.title) return null;

        function createItemGrid(items, itemKind){
          const grid = document.createElement("div");
          grid.className = "attire-r18-collection-grid";
          grid.style.cssText = "padding:8px;display:grid;grid-template-columns:repeat(auto-fill, minmax(180px, 1fr));gap:6px;";
          (items || []).forEach(function(item){
            const label = document.createElement("label");
            label.style.cssText = "display:flex;align-items:flex-start;gap:6px;font-size:0.9em;cursor:pointer;line-height:1.4;";
            const cb = document.createElement("input");
            cb.type = "checkbox";
            cb.className = "attire-r18-real-checkbox";
            cb.dataset.en = item.en;
            cb.dataset.ja = item.ja;
            cb.dataset.r18src = "v24";
            cb.dataset.r18kind = itemKind || "main";
            cb.style.marginTop = "2px";
            cb.addEventListener('change', function(){
              if (__v24PresetApplying || __v24QualityPresetApplying) return;
              const root = label.closest('.attire-r18-collection');
              if (!root) return;
              if ((itemKind || "main") === "quality") {
                clearR18CollectionQualityPresetUI(root);
                clearR18GeneratedQualityOutputs(root);
              } else clearR18CollectionPresetUI(root);
            });
            label.appendChild(cb);
            label.appendChild(document.createTextNode(item.ja + " / " + item.en));
            grid.appendChild(label);
          });
          return grid;
        }

        function createQualityPresetSection(title, presets, tone){
          const details = document.createElement("details");
          details.className = "attire-r18-collection-section is-quality-preset";
          details.open = false;
          details.style.cssText = "display:block;width:100%;max-width:100%;margin:0 10px 8px;border:1px solid #e8dcf6;border-radius:10px;background:#fff;overflow:hidden;box-sizing:border-box;";
          const summary = document.createElement("summary");
          summary.textContent = title + " [" + ((presets || []).length) + "]";
          summary.style.cssText = "display:list-item;cursor:pointer;list-style:none;font-weight:800;color:" + (tone || "#8d5aa8") + ";background:#faf7ff;padding:10px 12px;";
          details.appendChild(summary);

          const body = document.createElement("div");
          body.className = "attire-r18-collection-section-body is-quality-preset";
          body.style.cssText = "display:block;width:100%;max-width:100%;padding:8px 10px 10px;box-sizing:border-box;";

          const info = document.createElement('div');
          info.style.cssText = 'margin:0 0 8px;padding:8px 10px;border-radius:8px;background:#faf7ff;color:#6e5a8e;font-size:12px;line-height:1.5;';
          info.textContent = '新しいクオリティセットを選んだ瞬間に、前のクオリティセット状態とその連動チェックは一度リセットされ、新しいクオリティセット基準で再構築される。';
          body.appendChild(info);

          const grid = document.createElement('div');
          grid.className = 'attire-r18-quality-preset-grid';
          grid.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fill, minmax(220px, 1fr));gap:8px;width:100%;';
          (presets || []).forEach(function(preset){
            const card = document.createElement('label');
            card.className = 'attire-r18-quality-preset-card';
            card.style.cssText = 'display:block;border:1px solid #eadff7;border-radius:10px;background:#fff;cursor:pointer;padding:10px 12px;';

            const top = document.createElement('div');
            top.style.cssText = 'display:flex;align-items:flex-start;gap:8px;';
            const cb = document.createElement('input');
            cb.type = 'checkbox';
            cb.className = 'attire-r18-quality-preset-checkbox';
            cb.style.marginTop = '3px';
            cb.addEventListener('change', function(){
              if (__v24QualityPresetApplying) return;
              const root = card.closest('.attire-r18-collection');
              if (!cb.checked){
                if (root) resetR18CollectionQualityState(root);
                return;
              }
              if (root) applyR18CollectionQualityPreset(root, preset, cb);
            });

            const textWrap = document.createElement('div');
            textWrap.style.cssText = 'display:block;min-width:0;';
            const ttl = document.createElement('div');
            ttl.textContent = preset.title;
            ttl.style.cssText = 'font-weight:800;color:#7e4fa6;margin:0 0 4px;';
            const desc = document.createElement('div');
            const preview = normalizeR18PresetItems(preset.items).slice(0, 2).map(function(it){ return it.ja + " / " + it.en; }).join(' | ');
            desc.textContent = preview;
            desc.style.cssText = 'font-size:12px;line-height:1.5;color:#7a687b;word-break:break-word;';
            textWrap.appendChild(ttl); textWrap.appendChild(desc); top.appendChild(cb); top.appendChild(textWrap); card.appendChild(top); grid.appendChild(card);
          });
          body.appendChild(grid);
          details.appendChild(body);
          return details;
        }

        function createPresetSection(title, presets, tone){
          const details = document.createElement("details");
          details.className = "attire-r18-collection-section is-preset";
          details.open = false;
          details.style.cssText = "display:block;width:100%;max-width:100%;margin:0 10px 8px;border:1px solid #efd6df;border-radius:10px;background:#fff;overflow:hidden;box-sizing:border-box;";
          const summary = document.createElement("summary");
          summary.textContent = title + " [" + ((presets || []).length) + "]";
          summary.style.cssText = "display:list-item;cursor:pointer;list-style:none;font-weight:800;color:" + (tone || "#b0436a") + ";background:#fff8fa;padding:10px 12px;";
          details.appendChild(summary);

          const body = document.createElement("div");
          body.className = "attire-r18-collection-section-body is-preset";
          body.style.cssText = "display:block;width:100%;max-width:100%;padding:8px 10px 10px;box-sizing:border-box;";

          const info = document.createElement('div');
          info.style.cssText = 'margin:0 0 8px;padding:8px 10px;border-radius:8px;background:#fff7fa;color:#8e5b6d;font-size:12px;line-height:1.5;';
          info.textContent = '新しい完成セットを選んだ瞬間に、前の完成セット状態とその連動チェックは一度リセットされ、新しい完成セット基準で再構築される。';
          body.appendChild(info);

          const grid = document.createElement('div');
          grid.className = 'attire-r18-preset-grid';
          grid.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fill, minmax(220px, 1fr));gap:8px;width:100%;';
          (presets || []).forEach(function(preset){
            const card = document.createElement('label');
            card.className = 'attire-r18-preset-card';
            card.style.cssText = 'display:block;border:1px solid #e7bfd0;border-radius:10px;background:#fffdf8;padding:10px 12px;cursor:pointer;';
            const top = document.createElement('div'); top.style.cssText = 'display:flex;align-items:flex-start;gap:8px;';
            const cb = document.createElement('input'); cb.type = 'checkbox'; cb.className = 'attire-r18-preset-checkbox'; cb.style.marginTop = '3px'; cb.dataset.presetTitle = preset.title;
            const textWrap = document.createElement('div'); textWrap.style.cssText = 'min-width:0;';
            const ttl = document.createElement('div'); ttl.style.cssText = 'font-weight:800;color:#8a5321;font-size:13px;margin-bottom:4px;'; ttl.textContent = preset.title;
            const desc = document.createElement('div'); desc.style.cssText = 'font-size:12px;line-height:1.5;color:#7c6450;';
            desc.textContent = preset.desc || normalizeR18PresetItems(preset.items).slice(0,2).map(function(item){
              return item.ja + " / " + item.en;
            }).join('  |  ');
            cb.addEventListener('change', function(){
              const root = card.closest('.attire-r18-collection');
              if (!root) return;
              if (cb.checked){
                applyR18CollectionPreset(root, preset, cb);
              } else if (!__v24PresetApplying) {
                __v24PresetApplying = true;
                const real = Array.from(root.querySelectorAll('.attire-r18-real-checkbox'));
                real.forEach(function(realCb){ realCb.checked = false; });
                clearR18CollectionPresetUI(root);
                __v24PresetApplying = false;
              }
            });
            textWrap.appendChild(ttl); textWrap.appendChild(desc); top.appendChild(cb); top.appendChild(textWrap); card.appendChild(top); grid.appendChild(card);
          });
          body.appendChild(grid);
          details.appendChild(body);
          return details;
        }

        function createGroupedSection(title, groups, tone, itemKind){
          const details = document.createElement("details");
          details.className = "attire-r18-collection-section";
          details.open = false;
          details.style.cssText = "display:block;width:100%;max-width:100%;margin:0 10px 8px;border:1px solid #efd6df;border-radius:10px;background:#fff;overflow:hidden;box-sizing:border-box;";
          const summary = document.createElement("summary");
          let count = 0;
          (groups || []).forEach(function(g){ count += Array.isArray(g.items) ? g.items.length : 0; });
          summary.textContent = title + " [" + count + "]";
          summary.style.cssText = "display:list-item;cursor:pointer;list-style:none;font-weight:800;color:" + (tone || "#9a4965") + ";background:#fff8fa;padding:10px 12px;";
          details.appendChild(summary);

          const body = document.createElement("div");
          body.className = "attire-r18-collection-section-body";
          body.style.cssText = "display:block;width:100%;max-width:100%;padding:8px 0 2px;box-sizing:border-box;";
          (groups || []).forEach(function(group){
            const groupWrap = document.createElement("details");
            groupWrap.className = "attire-r18-collection-group";
            groupWrap.open = false;
            groupWrap.style.cssText = "display:block;width:calc(100% - 20px);max-width:calc(100% - 20px);margin:0 10px 8px;border:1px solid #f5d8e2;border-radius:9px;background:#fff;overflow:hidden;box-sizing:border-box;";
            const groupSummary = document.createElement("summary");
            const groupCount = Array.isArray(group.items) ? group.items.length : 0;
            groupSummary.textContent = group.title + " [" + groupCount + "]";
            groupSummary.style.cssText = "display:list-item;cursor:pointer;list-style:none;font-weight:700;color:#9a4965;background:#fff8fa;padding:9px 12px;";
            groupWrap.appendChild(groupSummary);
            groupWrap.appendChild(createItemGrid(group.items || [], itemKind));
            body.appendChild(groupWrap);
          });
          details.appendChild(body);
          return details;
        }

        const wrap = document.createElement("details");
        wrap.className = "attire-r18-collection";
        wrap.open = false;
        wrap.style.cssText = "display:block;width:100%;max-width:100%;margin:0 0 8px;border:1px solid #efbfd0;border-radius:10px;background:#fffdfa;overflow:hidden;box-sizing:border-box;";

        const summary = document.createElement("summary");
        summary.textContent = collection.title;
        summary.style.cssText = "display:list-item;cursor:pointer;list-style:none;font-weight:800;color:#b0436a;background:#fff3f7;padding:10px 12px;";
        wrap.appendChild(summary);

        const body = document.createElement("div");
        body.className = "attire-r18-collection-body";
        body.style.cssText = "display:block;width:100%;max-width:100%;padding:8px 0 4px;box-sizing:border-box;";

        if (collection.description){
          const desc = document.createElement("div");
          desc.className = "attire-r18-collection-desc";
          desc.textContent = collection.description;
          desc.style.cssText = "margin:0 10px 8px;padding:8px 10px;border-radius:8px;background:#fff7fa;color:#8e5b6d;font-size:12px;line-height:1.5;";
          body.appendChild(desc);
        }

        body.appendChild(createPresetSection("🎯 完成セット", collection.presets || [], "#b0436a"));
        body.appendChild(createGroupedSection("🧱 ベース", collection.baseGroups || [], "#8e5670"));
        body.appendChild(createGroupedSection("🛠 カスタマイズ", collection.customizeGroups || [], "#9a4965"));
        body.appendChild(createGroupedSection("⚙️ 設定", collection.settingGroups || [], "#a34c72"));
        if (Array.isArray(collection.qualityPresets) && collection.qualityPresets.length){
          body.appendChild(createQualityPresetSection("🧪 クオリティ完成セット", collection.qualityPresets || [], "#7e4fa6"));
        }
        if (Array.isArray(collection.qualityGroups) && collection.qualityGroups.length){
          body.appendChild(createGroupedSection("🧪 完成セット別クオリティ", collection.qualityGroups || [], "#8d5aa8", "quality"));
        }

        wrap.appendChild(body);
        return wrap;
      }

      const r18ParentDefs = [
        { title: "🔞 露出・裸系", match: function(txt){ return txt.includes("完全露出") || txt.includes("裸") || txt.includes("極小露出") || txt.includes("食い込み"); }, subgroups: [
          { title: "🫧 完全露出・裸", match: function(txt){ return txt.includes("完全露出") || txt.includes("Nude & Naked"); } },
          { title: "📐 極小露出・食い込み", match: function(txt){ return txt.includes("極小露出") || txt.includes("食い込み") || txt.includes("Extreme Exposure"); } }
        ] },
        { title: "🩲 ランジェリー・特殊インナー", match: function(txt){ return txt.includes("ランジェリー") || txt.includes("特殊インナー"); }, subgroups: [
          { title: "🩰 ランジェリー", match: function(txt){ return txt.includes("ランジェリー") || txt.includes("Lingerie & Inner"); } },
          { title: "🧪 特殊インナー・変態系", match: function(txt){ return txt.includes("変態ランジェリー") || txt.includes("特殊インナー") || txt.includes("Abnormal Lingerie"); } }
        ] },
        { title: "⛓ 拘束・支配", match: function(txt){ return txt.includes("ボンテージ") || txt.includes("拘束") || txt.includes("洗脳") || txt.includes("スレイブ") || txt.includes("slave"); }, subgroups: [
          { title: "⛓ ボンテージ・拘束", match: function(txt){ return txt.includes("ボンテージ") || txt.includes("Hard Bondage"); } },
          { title: "🧠 洗脳・支配", match: function(txt){ return txt.includes("洗脳") || txt.includes("Mind Control"); } },
          { title: "🧞‍♀️ スレイブ・従属", match: function(txt){ return txt.includes("スレイブ") || txt.includes("slave") || txt.includes("Fantasy Dark/Slave"); } }
        ] },
        { title: "💧 汚れ・液体系", match: function(txt){ return txt.includes("汚濁") || txt.includes("液体") || txt.includes("濡れ") || txt.includes("泥") || txt.includes("オイル"); }, subgroups: [
          { title: "💦 汚濁・液体まみれ", match: function(txt){ return txt.includes("汚濁") || txt.includes("液体") || txt.includes("Messy & Fluids"); } }
        ] },
        { title: "👗 着崩し・チラリズム", match: function(txt){ return txt.includes("チラリズム") || txt.includes("着衣崩れ") || txt.includes("着崩し") || txt.includes("裸＋α") || txt.includes("脱衣"); }, subgroups: [
          { title: "👗 裸＋α・チラリズム", match: function(txt){ return txt.includes("裸＋α") || txt.includes("チラリズム") || txt.includes("Naked + X"); } },
          { title: "💥 極限着衣崩れ", match: function(txt){ return txt.includes("着衣崩れ") || txt.includes("Extreme Disheveled") || txt.includes("着崩し"); } }
        ] },
        { title: "🧬 異形・寄生・生体系", match: function(txt){ return txt.includes("侵食") || txt.includes("生体") || txt.includes("Alien") || txt.includes("Parasite") || txt.includes("異種") || txt.includes("寄生") || txt.includes("スライム") || txt.includes("触手") || txt.includes("粘液"); }, subgroups: [
          { title: "🐙 侵食・生体スーツ", match: function(txt){ return txt.includes("侵食・生体スーツ") || txt.includes("Living & Parasitic Suits"); } },
          { title: "🪱 異種・寄生侵食+", match: function(txt){ return txt.includes("異種姦") || txt.includes("生体侵食+") || txt.includes("Alien & Parasite"); } }
        ] },
        { title: "🔥 限界突破・マニアック", match: function(txt){ return txt.includes("異世界") || txt.includes("マニアック") || txt.includes("Max Fetish") || txt.includes("限界突破"); }, subgroups: [
          { title: "🔥 異世界・マニアック", match: function(txt){ return txt.includes("異世界") || txt.includes("Max Fetish") || txt.includes("限界突破") || txt.includes("マニアック"); } }
        ] }
      ];

      const r18Groups = new Map();
      r18ParentDefs.forEach(function(def){ r18Groups.set(def.title, []); });

      function getR18LeafNodes(el){
        if (!el) return [];
        if (el.tagName === "DETAILS") return [el];
        return Array.from(el.children || []).filter(function(child){
          return child && child.tagName === "DETAILS";
        });
      }

      r18.forEach(function(el){
        getR18LeafNodes(el).forEach(function(node){
          const txt = getText(node);
          const def = r18ParentDefs.find(function(entry){ return entry.match(txt); }) || r18ParentDefs[r18ParentDefs.length - 1];
          r18Groups.get(def.title).push(node);
        });
        if (el && el.parentNode === root) {
          el.remove();
        }
      });

        const r18TopExtraCollections = [
          {
            title: "🧬 侵食・寄生特化コレクション",
            description: "寄生、侵食、生体スーツ、異物侵入、粘液、同化進行までをまとめて深掘りする専用コレクション",
            presets: [
              { title: "🫧 生体スーツ融合セット", items: [
                { ja: "生きた有機膜の融合", en: "living organic membrane fused to skin" },
                { ja: "生体組織から育つ寄生膜", en: "parasitic membrane grown from living tissue" },
                { ja: "半透明の生体バイオ膜", en: "semi-translucent biofilm" },
                { ja: "濡れた有機表面", en: "soft wet organic surface" },
                { ja: "肉感のある膜質感", en: "flesh-like membrane texture" },
                { ja: "膜下に走る脈模様", en: "subtle vein patterns beneath the membrane" },
                { ja: "表面下を動く有機繊維", en: "organic fibers moving under the surface" },
                { ja: "不均一な生体表面", en: "uneven living surface" },
                { ja: "呼吸するような膜の起伏", en: "breathing living suit texture" },
                { ja: "人工素材ではない生体膜", en: "not latex, not rubber, not synthetic suit" }
              ]},
              { title: "🐙 触手侵食セット", items: [
                { ja: "触手が体表に巻き付く", en: "tentacles coiling around the body surface" },
                { ja: "拘束と侵食が同時進行", en: "restraint and invasion progressing together" },
                { ja: "触手スーツ", en: "tentacle suit, tentacles wrapped around body, living clothes" },
                { ja: "触手コルセット", en: "tentacle laced corset, living restraints" },
                { ja: "拘束スライム", en: "bound by slime, slime covering body, melting clothes" },
                { ja: "粘液で濡れた侵食跡", en: "invasion traces soaked with viscous slime" },
                { ja: "異物侵入の不穏な気配", en: "ominous sense of alien penetration" }
              ]},
              { title: "🖤 同化進行セット", items: [
                { ja: "皮膚に広がる侵食模様", en: "corruption patterns spreading across the skin" },
                { ja: "部分的に生体化した衣装", en: "partially bio-transformed clothing" },
                { ja: "抵抗しながら進む同化", en: "assimilation progressing amid resistance" },
                { ja: "生体的な不気味さ", en: "organic eeriness, uncanny biological horror" }
              ]},
              { title: "🔥 侵食強化版", items: [
                { ja: "全身へ強まる侵食", en: "corruption intensifying across the body" },
                { ja: "皮膚と衣装を侵す生体模様", en: "invasive organic patterns spreading wider over skin and clothing" },
                { ja: "攻撃的に進む生体同化", en: "bio-assimilation advancing aggressively" },
                { ja: "胸・腰・肩・太腿へ伸びる根脈", en: "root-like veins crawling over chest, waist, shoulders and thighs" },
                { ja: "衣装を侵食し再構成する寄生体", en: "parasitic growth overtaking more of the outfit" },
                { ja: "生体組織に食われ変形した衣装", en: "clothing partially consumed and re-formed by living tissue" },
                { ja: "拡大した侵食線", en: "spreading corruption lines" },
                { ja: "広域化した侵食面", en: "enlarged invasive surface coverage" },
                { ja: "止まらない有機侵食", en: "organic erosion progressing without stopping" },
                { ja: "不気味で美しい変質", en: "eerie biological elegance" },
                { ja: "静かだが圧倒的な変容", en: "quiet but overwhelming transformation" },
                { ja: "不可逆な同化", en: "irreversible assimilation" }
              ]},
              { title: "🫀 根脈露出版", items: [
                { ja: "露出した根脈構造", en: "exposed root-vein structures emerging over the body" },
                { ja: "目に見える有機血管模様", en: "visible organic vascular patterns" },
                { ja: "皮膚上へせり出す寄生蔦", en: "raised parasitic tendrils spreading outside the skin" },
                { ja: "衣装と肉体を貫く生体根", en: "bio-roots surfacing through clothing and flesh" },
                { ja: "胴体と腕に絡む分岐根脈", en: "branching vein-like growth wrapping around torso and arms" },
                { ja: "露出した生体繊維網", en: "exposed living fiber network" },
                { ja: "全身を這う根の格子", en: "organic root lattice visible across the body" },
                { ja: "外層を破って現れる生体経路", en: "biological pathways breaking through the outer layer" },
                { ja: "不穏だが美しい内部露出", en: "unsettling but beautiful exposed anatomy motifs" },
                { ja: "根脈露出の侵食", en: "invasive root exposure" },
                { ja: "衣装構造と絡む生体蔓", en: "living tendrils intertwining with outfit structure" }
              ]},
              { title: "💥 衣装崩壊版", items: [
                { ja: "寄生で崩れる衣装構造", en: "outfit breaking down under parasitic assimilation" },
                { ja: "ほどけ壊れる衣装", en: "clothing structure collapsing and unraveling" },
                { ja: "生体骨格に置き換わる裂け目", en: "torn sections replaced by living organic framework" },
                { ja: "生体繊維で辛うじて成立する衣装", en: "shredded costume supported by invasive bio-fibers" },
                { ja: "生体侵食で開いた欠損", en: "exposed gaps formed by biological erosion" },
                { ja: "寄生組織に乗っ取られる縫い目", en: "broken seams overtaken by parasitic tissue" },
                { ja: "崩れた衣装シルエット", en: "partially collapsed garment silhouette" },
                { ja: "有機糸で保たれる残骸衣装", en: "organic strands holding together the remains of the outfit" },
                { ja: "侵食による衣装崩壊", en: "corrupted costume disintegration" },
                { ja: "生体成長による衣装侵蝕", en: "erosion of clothing by living growth" },
                { ja: "危うく美しい生体衣装", en: "unstable but beautiful bio-constructed outfit" },
                { ja: "同化で崩落する衣装", en: "irreversible outfit collapse through assimilation" }
              ]},
              { title: "🌿 寄生植物同化セット", items: [
                { ja: "寄生植物の蔦", en: "parasitic plant clothes, vines wrapping body, flower blooming from body" },
                { ja: "花弁状の触手服", en: "petal-shaped tentacle motifs, anemone patterns" },
                { ja: "胸元や腰元への寄生進行", en: "parasitic progression around chest and waist" },
                { ja: "不可逆な変質の空気", en: "atmosphere of irreversible transformation" }
              ]},
              { title: "🫗 半透明ゼリー侵食セット", items: [
                { ja: "半透明ゼリースーツ", en: "semi-transparent jelly suit, glowing internal organs view" },
                { ja: "スライムボディスーツ", en: "slime bodysuit, translucent slime, fusing with skin" },
                { ja: "スライム半溶解服", en: "clothes melted by slime, partially transparent, sticky clothes" },
                { ja: "異形の粘液コート", en: "alien mucus coating, slimy layer" }
              ]}
            ],
            baseGroups: [
              { title: "🧫 生体スーツ・寄生膜", items: [
                { ja: "生きた有機膜の融合", en: "living organic membrane fused to skin" },
                { ja: "生体組織から育つ寄生膜", en: "parasitic membrane grown from living tissue" },
                { ja: "薄い生体膜で覆われた肌", en: "skin covered in a thin living membrane" },
                { ja: "服が生き物のように同化", en: "clothes assimilating like a living organism" },
                { ja: "半透明の生体バイオ膜", en: "semi-translucent biofilm" },
                { ja: "膜下に走る脈模様", en: "subtle vein patterns beneath the membrane" },
                { ja: "表面下を動く有機繊維", en: "organic fibers moving under the surface" },
                { ja: "不均一な生体表面", en: "uneven living surface" },
                { ja: "呼吸するような膜の起伏", en: "breathing living suit texture" },
                { ja: "肉感のある膜質感", en: "flesh-like membrane texture" },
                { ja: "人工素材ではない生体膜", en: "not latex, not rubber, not synthetic suit" }
              ]},
              { title: "🐙 触手・異物侵食", items: [
                { ja: "触手が体表に巻き付く", en: "tentacles coiling around the body surface" },
                { ja: "異物侵入の不穏な気配", en: "ominous sense of alien penetration" },
                { ja: "体内へ侵食する異形触手", en: "aberrant tentacles invading inward" },
                { ja: "口元や首元への生体侵食", en: "bio-invasion around mouth and neck" },
                { ja: "拘束と侵食が同時進行", en: "restraint and invasion progressing together" }
              ]}
            ],
            customizeGroups: [
              { title: "🫧 粘液・光沢追加", items: [
                { ja: "粘液を伴う生体光沢", en: "bio-gloss with viscous slime sheen" },
                { ja: "糸を引く粘液", en: "stringy slime, viscous secretion trails" },
                { ja: "ぬめる反射の強化", en: "enhanced slimy reflections, slick highlights" },
                { ja: "粘液で濡れた侵食跡", en: "invasion traces soaked with viscous slime" },
                { ja: "湿った生体質感の追加", en: "added damp organic texture, moist bio-surface" },
                { ja: "スライム半溶解服", en: "clothes melted by slime, partially transparent, sticky clothes" },
                { ja: "異形の粘液コート", en: "alien mucus coating, slimy layer" }
              ]},
              { title: "🧩 侵食進行・部位変化", items: [
                { ja: "皮膚に広がる侵食模様", en: "corruption patterns spreading across the skin" },
                { ja: "部分的に生体化した衣装", en: "partially bio-transformed clothing" },
                { ja: "四肢へ進む侵食", en: "invasion spreading into the limbs" },
                { ja: "胸元や腰元への寄生進行", en: "parasitic progression around chest and waist" },
                { ja: "生体器官めいた装飾の追加", en: "added organ-like ornaments, biological appendages" },
                { ja: "花弁状の触手服", en: "petal-shaped tentacle motifs, anemone patterns" },
                { ja: "寄生植物の蔦", en: "parasitic plant clothes, vines wrapping body, flower blooming from body" },
                { ja: "膨満腹強調スーツ", en: "tight clothes highlighting swollen belly, stomach bulge" }
              ]},
              { title: "🔥 侵食派生セット拡張", items: [
                { ja: "全身へ強まる侵食", en: "corruption intensifying across the body" },
                { ja: "皮膚と衣装を侵す生体模様", en: "invasive organic patterns spreading wider over skin and clothing" },
                { ja: "攻撃的に進む生体同化", en: "bio-assimilation advancing aggressively" },
                { ja: "胸・腰・肩・太腿へ伸びる根脈", en: "root-like veins crawling over chest, waist, shoulders and thighs" },
                { ja: "衣装を侵食し再構成する寄生体", en: "parasitic growth overtaking more of the outfit" },
                { ja: "生体組織に食われ変形した衣装", en: "clothing partially consumed and re-formed by living tissue" },
                { ja: "拡大した侵食線", en: "spreading corruption lines" },
                { ja: "広域化した侵食面", en: "enlarged invasive surface coverage" },
                { ja: "露出した根脈構造", en: "exposed root-vein structures emerging over the body" },
                { ja: "目に見える有機血管模様", en: "visible organic vascular patterns" },
                { ja: "皮膚上へせり出す寄生蔦", en: "raised parasitic tendrils spreading outside the skin" },
                { ja: "衣装と肉体を貫く生体根", en: "bio-roots surfacing through clothing and flesh" },
                { ja: "胴体と腕に絡む分岐根脈", en: "branching vein-like growth wrapping around torso and arms" },
                { ja: "露出した生体繊維網", en: "exposed living fiber network" },
                { ja: "全身を這う根の格子", en: "organic root lattice visible across the body" },
                { ja: "外層を破って現れる生体経路", en: "biological pathways breaking through the outer layer" },
                { ja: "寄生で崩れる衣装構造", en: "outfit breaking down under parasitic assimilation" },
                { ja: "ほどけ壊れる衣装", en: "clothing structure collapsing and unraveling" },
                { ja: "生体骨格に置き換わる裂け目", en: "torn sections replaced by living organic framework" },
                { ja: "生体繊維で辛うじて成立する衣装", en: "shredded costume supported by invasive bio-fibers" },
                { ja: "生体侵食で開いた欠損", en: "exposed gaps formed by biological erosion" },
                { ja: "寄生組織に乗っ取られる縫い目", en: "broken seams overtaken by parasitic tissue" },
                { ja: "崩れた衣装シルエット", en: "partially collapsed garment silhouette" },
                { ja: "有機糸で保たれる残骸衣装", en: "organic strands holding together the remains of the outfit" }
              ]}
            ],
            settingGroups: [
              { title: "⚙️ 侵食演出設定", items: [
                { ja: "抵抗しながら進む同化", en: "assimilation progressing amid resistance" },
                { ja: "支配されていく感覚", en: "sense of being overtaken and controlled" },
                { ja: "侵食進行を見せる演出", en: "staging that shows the progression of corruption" },
                { ja: "生体的な不気味さ", en: "organic eeriness, uncanny biological horror" },
                { ja: "不可逆な変質の空気", en: "atmosphere of irreversible transformation" },
                { ja: "生体スーツが意思を持つ演出", en: "the living suit behaves as if it has its own will" },
                { ja: "寄生が静かに進む空気", en: "an atmosphere of quiet parasitic progression" },
                { ja: "粘液と侵食が同時に強まる演出", en: "slime and corruption intensifying at the same time" },
                { ja: "止まらない有機侵食", en: "organic erosion progressing without stopping" },
                { ja: "不気味で美しい変質", en: "eerie biological elegance" },
                { ja: "静かだが圧倒的な変容", en: "quiet but overwhelming transformation" },
                { ja: "不可逆な同化", en: "irreversible assimilation" },
                { ja: "不穏だが美しい内部露出", en: "unsettling but beautiful exposed anatomy motifs" },
                { ja: "根脈露出の侵食", en: "invasive root exposure" },
                { ja: "衣装構造と絡む生体蔓", en: "living tendrils intertwining with outfit structure" },
                { ja: "侵食による衣装崩壊", en: "corrupted costume disintegration" },
                { ja: "生体成長による衣装侵蝕", en: "erosion of clothing by living growth" },
                { ja: "危うく美しい生体衣装", en: "unstable but beautiful bio-constructed outfit" },
                { ja: "同化で崩落する衣装", en: "irreversible outfit collapse through assimilation" }
              ]}
            ],
            qualityPresets: [
              { title: "🫧 生体スーツ融合セット用クオリティセット（基準版）", items: [
                { ja: "生きた有機膜の融合", en: "living organic membrane fused to skin" },
                { ja: "半透明の生体バイオ膜", en: "semi-translucent biofilm" },
                { ja: "濡れた有機表面", en: "wet organic surface, not latex, not rubber" },
                { ja: "柔らかな生体光沢", en: "soft living tissue sheen" },
                { ja: "肉感のある膜質感", en: "flesh-like membrane texture" },
                { ja: "膜内に見える脈模様", en: "subtle vein patterns inside the suit" },
                { ja: "表面下を動く有機繊維", en: "organic fibers moving under the surface" },
                { ja: "生体組織から育つ寄生スーツ", en: "parasitic suit grown from living tissue" },
                { ja: "生体同化で形成されたボディスーツ", en: "bodysuit formed by biological assimilation" },
                { ja: "人工素材ではない生体膜", en: "slime-like bio membrane instead of synthetic material" },
                { ja: "不均一な有機表面", en: "uneven organic surface" },
                { ja: "呼吸するような膜の起伏", en: "breathing living suit texture" },
                { ja: "高品質補正", en: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.4)" },
                { ja: "控えめな物理ベース質感", en: "(physically based rendering:1.15), (realistic lighting:1.15)" },
                { ja: "皮膚透過散乱", en: "(subsurface scattering:1.3)" },
                { ja: "映画的ライティング", en: "(cinematic lighting:1.3), (ray tracing:1.2), (global illumination:1.2), (volumetric lighting:1.2)" },
                { ja: "髪の艶と光沢", en: "(shiny hair:1.35), (glossy hair:1.35)" }
              ]},
              { title: "🫧 生体スーツ融合セット用クオリティセット（基準版） Ver.2（基準採用）", items: [
                { ja: "生きた有機膜の融合", en: "living organic membrane fused to skin" },
                { ja: "生体組織から育つ寄生膜", en: "parasitic membrane grown from living tissue" },
                { ja: "半透明の生体バイオ膜", en: "semi-translucent biofilm" },
                { ja: "濡れた有機表面", en: "wet organic surface" },
                { ja: "柔らかな生体光沢", en: "soft living tissue sheen" },
                { ja: "肉感のある膜質感", en: "flesh-like membrane texture" },
                { ja: "膜下に走る脈模様", en: "subtle vein patterns beneath the membrane" },
                { ja: "表面下を動く有機繊維", en: "organic fibers moving under the surface" },
                { ja: "不均一な生体表面", en: "uneven living surface" },
                { ja: "呼吸するような膜の起伏", en: "breathing living suit texture" },
                { ja: "生体同化で形成された生体被膜", en: "biological sheath formed by assimilation" },
                { ja: "人工素材ではない生体膜", en: "slime-like bio membrane instead of synthetic material, not latex, not rubber, not synthetic suit" },
                { ja: "高品質補正", en: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.4)" },
                { ja: "さらに抑えた物理ベース質感", en: "(physically based rendering:1.1), (realistic lighting:1.1)" },
                { ja: "皮膚透過散乱", en: "(subsurface scattering:1.3)" },
                { ja: "抑えめ映画的ライティング", en: "(cinematic lighting:1.25), (ray tracing:1.15), (global illumination:1.15), (volumetric lighting:1.15)" },
                { ja: "やや控えめな髪の艶", en: "(shiny hair:1.3), (glossy hair:1.3)" }
              ]},
              { title: "🧬 第二皮膚・外皮置換特化クオリティセット", items: [
                { ja: "第二の皮膚としての生体膜", en: "second-skin biological membrane" },
                { ja: "外皮を置換する生体被膜", en: "living membrane replacing outer skin" },
                { ja: "半液状の有機被膜", en: "semi-liquid organic sheath" },
                { ja: "透明な生体表皮", en: "transparent living epidermis" },
                { ja: "膜越しに見える内部組織", en: "inner tissue visible through the membrane" },
                { ja: "体の起伏に張り付く被膜", en: "membrane stretched over body contours" },
                { ja: "有機的な表面張力", en: "organic surface tension" },
                { ja: "濡れた生体の透過感", en: "wet living translucency" },
                { ja: "生きた有機膜の融合", en: "living organic membrane fused to skin" },
                { ja: "生体組織から育つ寄生膜", en: "parasitic membrane grown from living tissue" },
                { ja: "人工素材ではない生体膜", en: "not latex, not rubber, not synthetic suit" },
                { ja: "高品質補正", en: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.4)" },
                { ja: "さらに抑えた物理ベース質感", en: "(physically based rendering:1.05), (realistic lighting:1.05)" },
                { ja: "皮膚透過散乱", en: "(subsurface scattering:1.3)" },
                { ja: "抑えめ映画的ライティング", en: "(cinematic lighting:1.2), (ray tracing:1.1), (global illumination:1.1), (volumetric lighting:1.1)" },
                { ja: "控えめな髪の艶", en: "(shiny hair:1.25), (glossy hair:1.25)" }
              ]},
              { title: "🐙 触手侵食セット用クオリティセット", items: [
                { ja: "有機的な不気味さ", en: "organic eeriness" },
                { ja: "肌と衣装が一体化した侵食", en: "skin and costume partially fused by parasitic growth" },
                { ja: "縫い目へ食い込む蔦", en: "vines piercing into clothing seams" },
                { ja: "強い縁光と逆光", en: "(strong rim lighting:1.3), (backlight glow:1.2)" },
                { ja: "火花状ボケ光", en: "(spark-like bokeh lights)" }
              ]},
              { title: "🖤 同化進行セット用クオリティセット", items: [
                { ja: "植物組織と肉体の融合", en: "plant tissue fused with flesh" },
                { ja: "皮膚下に走る根脈", en: "root-like veins spreading under skin" },
                { ja: "逃げ場なく進む不可逆変質", en: "irreversible biological transformation, quiet but inescapable parasitic progression" },
                { ja: "中距離・上半身から腰まで", en: "mid shot, upper body to waist visible" },
                { ja: "映画的ライティング", en: "(cinematic lighting:1.35), (ray tracing:1.25), (global illumination:1.25), (volumetric lighting:1.25)" }
              ]},
              { title: "🌿 寄生植物同化セット用クオリティセット", items: [
                { ja: "寄生植物同化", en: "parasitic plant assimilation" },
                { ja: "植物組織と肉体の融合", en: "plant tissue fused with flesh" },
                { ja: "布を侵食置換する有機組織", en: "organic overgrowth replacing fabric" },
                { ja: "肌と衣装が一体化した侵食", en: "skin and costume partially fused by parasitic growth" },
                { ja: "縫い目へ食い込む蔦", en: "vines piercing into clothing seams" },
                { ja: "皮膚下に走る根脈", en: "root-like veins spreading under skin" },
                { ja: "胸元と腰元への寄生進行", en: "parasitic progression around chest and waist" },
                { ja: "花弁状の触手意匠", en: "petal-shaped tentacle motifs" },
                { ja: "侵食組織から咲く花", en: "flowers erupting from invasive plant tissue" },
                { ja: "融合スーツから伸びる開花", en: "blooming flowers growing through fused organic suit" },
                { ja: "棘のある蔦が体へ巻き付く", en: "thorny vines wrapping body" },
                { ja: "蔦に覆われるボディスーツ", en: "bodysuit overgrown by parasitic vines" },
                { ja: "逃げ場なく進む不可逆変質", en: "irreversible biological transformation, quiet but inescapable parasitic progression" },
                { ja: "有機的な不気味さ", en: "organic eeriness" },
                { ja: "中距離・上半身から腰まで", en: "mid shot, upper body to waist visible" },
                { ja: "アニメリアル寄り描画", en: "(anime-realism blend:1.35), (semi-realistic rendering:1.2)" },
                { ja: "物理ベース質感", en: "(physically based rendering:1.25), (realistic lighting:1.2)" },
                { ja: "髪の艶と光沢", en: "(shiny hair:1.35), (glossy hair:1.35)" },
                { ja: "強い縁光と逆光", en: "(strong rim lighting:1.3), (backlight glow:1.2)" },
                { ja: "映画的ライティング", en: "(cinematic lighting:1.35), (ray tracing:1.25), (global illumination:1.25), (volumetric lighting:1.25)" },
                { ja: "皮膚透過散乱", en: "(subsurface scattering:1.25)" },
                { ja: "火花状ボケ光", en: "(spark-like bokeh lights)" },
                { ja: "高品質補正", en: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.4)" }
              ]},
              { title: "🫗 半透明ゼリー侵食セット用クオリティセット（基準版）", items: [
                { ja: "物理ベース質感", en: "(physically based rendering:1.25), (realistic lighting:1.2)" },
                { ja: "皮膚透過散乱", en: "(subsurface scattering:1.25)" },
                { ja: "髪の艶と光沢", en: "(shiny hair:1.35), (glossy hair:1.35)" },
                { ja: "映画的ライティング", en: "(cinematic lighting:1.35), (ray tracing:1.25), (global illumination:1.25), (volumetric lighting:1.25)" },
                { ja: "火花状ボケ光", en: "(spark-like bokeh lights)" },
                { ja: "高品質補正", en: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.4)" }
              ]},
              { title: "🫗 半透明ゼリー侵食セット用クオリティセット（初版）", items: [
                { ja: "スライムで溶けた衣装", en: "clothes melted by slime" },
                { ja: "部分的な半透明化", en: "partially transparent" },
                { ja: "粘着する衣服", en: "sticky clothes" },
                { ja: "異質粘液の被膜", en: "alien mucus coating" },
                { ja: "ぬめるゼリー層", en: "slimy layer" },
                { ja: "髪の艶と光沢", en: "(shiny hair:1.35), (glossy hair:1.35)" },
                { ja: "物理ベース質感", en: "(physically based rendering:1.25), (realistic lighting:1.2)" },
                { ja: "高品質補正", en: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.4)" },
                { ja: "皮膚透過散乱", en: "(subsurface scattering:1.3)" },
                { ja: "映画的ライティング", en: "(cinematic lighting:1.3), (ray tracing:1.2), (global illumination:1.2), (volumetric lighting:1.2)" },
                { ja: "火花状ボケ光", en: "(spark-like bokeh lights)" }
              ]},
              { title: "🫗 半透明ゼリー侵食セット用クオリティセット Ver.2（基準採用）", items: [
                { ja: "衣服へ広がるゼラチン層", en: "gelatinous layer spreading over clothing" },
                { ja: "半液状のゼリー膜", en: "semi-liquid jelly film" },
                { ja: "透明なスライム膜", en: "transparent slime membrane" },
                { ja: "ねっとりした半透明被膜", en: "gooey translucent coating" },
                { ja: "ゲルへ溶けかけた衣服", en: "clothing partially dissolved into gel" },
                { ja: "布のひだに伸びるスライム", en: "stretching slime between fabric folds" },
                { ja: "粘性のある透明残留膜", en: "viscous transparent residue" },
                { ja: "濡れたゼリー光沢", en: "wet jelly sheen" },
                { ja: "柔らかなゼラチン質感", en: "soft gelatin texture" },
                { ja: "体の周囲に溜まるスライム", en: "slime pooling around the body" },
                { ja: "スライムで溶けた衣装", en: "clothes melted by slime" },
                { ja: "部分的な半透明化", en: "partially transparent" },
                { ja: "粘着する衣服", en: "sticky clothes" },
                { ja: "異質粘液の被膜", en: "alien mucus coating" },
                { ja: "ぬめるゼリー層", en: "slimy layer" },
                { ja: "髪の艶と光沢", en: "(shiny hair:1.35), (glossy hair:1.35)" },
                { ja: "物理ベース質感", en: "(physically based rendering:1.25), (realistic lighting:1.2)" },
                { ja: "高品質補正", en: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.4)" },
                { ja: "皮膚透過散乱", en: "(subsurface scattering:1.3)" },
                { ja: "映画的ライティング", en: "(cinematic lighting:1.3), (ray tracing:1.2), (global illumination:1.2), (volumetric lighting:1.2)" },
                { ja: "火花状ボケ光", en: "(spark-like bokeh lights)" }
              ]},
              { title: "🐙 触手侵食セット用クオリティ（初版）", items: [
                { ja: "体表に巻き付く触手", en: "tentacles coiling around the body surface" },
                { ja: "異物侵入の不穏さ", en: "ominous sense of alien penetration" },
                { ja: "拘束と侵食の同時進行", en: "restraint and invasion progressing together" },
                { ja: "粘液を帯びた侵食痕", en: "invasion traces soaked with viscous slime" },
                { ja: "生体侵食で癒着する皮膚と衣装", en: "skin and costume partially fused by parasitic growth" },
                { ja: "衣装の縫い目へ入り込む蔓", en: "vines piercing into clothing seams" },
                { ja: "有機的不気味さ", en: "organic eeriness" },
                { ja: "強いリムライト", en: "(strong rim lighting:1.3)" },
                { ja: "背面発光", en: "(backlight glow:1.2)" },
                { ja: "火花状ボケ光", en: "(spark-like bokeh lights)" }
              ]},
              { title: "🐙 触手侵食セット用クオリティ Ver.2（基準採用）", items: [
                { ja: "皮膚と衣装に残るぬめり痕", en: "slick tentacle residue on skin and clothing" },
                { ja: "吸盤痕のような侵食痕", en: "suction-mark-like invasion traces" },
                { ja: "巻き圧で歪む布", en: "coiling pressure deforming fabric" },
                { ja: "四肢に食い込む粘液圧迫", en: "slimy compression around wrapped limbs" },
                { ja: "縫い目へ締め込む触手", en: "tentacles tightening into clothing seams" },
                { ja: "接触後に残る有機残留膜", en: "wet organic residue left by contact" },
                { ja: "巻かれた箇所から進む侵食", en: "gradual corruption spreading from wrapped areas" },
                { ja: "侵食で崩れる衣装輪郭", en: "costume distorted by invasive coiling" },
                { ja: "動きに沿って走る粘液の筋", en: "glossy slime trails following tentacle movement" },
                { ja: "身体に刻まれる異物圧痕", en: "alien grip marks on the body" },
                { ja: "体表に巻き付く触手", en: "tentacles coiling around the body surface" },
                { ja: "異物侵入の不穏さ", en: "ominous sense of alien penetration" },
                { ja: "拘束と侵食の同時進行", en: "restraint and invasion progressing together" },
                { ja: "粘液を帯びた侵食痕", en: "invasion traces soaked with viscous slime" },
                { ja: "生体侵食で癒着する皮膚と衣装", en: "skin and costume partially fused by parasitic growth" },
                { ja: "衣装の縫い目へ入り込む蔓", en: "vines piercing into clothing seams" },
                { ja: "有機的不気味さ", en: "organic eeriness" },
                { ja: "強いリムライト", en: "(strong rim lighting:1.3)" },
                { ja: "背面発光", en: "(backlight glow:1.2)" },
                { ja: "火花状ボケ光", en: "(spark-like bokeh lights)" }
              ]},
              { title: "🧬 浸食同化セット用クオリティ（初版）", items: [
                { ja: "皮膚に広がる侵食模様", en: "corruption patterns spreading across the skin" },
                { ja: "部分的に生体化した衣装", en: "partially bio-transformed clothing" },
                { ja: "抵抗の中で進む同化", en: "assimilation progressing amid resistance" },
                { ja: "有機的不気味さ", en: "organic eeriness" },
                { ja: "生物的な不気味さ", en: "uncanny biological horror" },
                { ja: "肉へ融合する植物組織", en: "plant tissue fused with flesh" },
                { ja: "皮膚下に広がる根脈", en: "root-like veins spreading under skin" },
                { ja: "不可逆の生体変質", en: "irreversible biological transformation" },
                { ja: "静かで逃れられない寄生進行", en: "quiet but inescapable parasitic progression" },
                { ja: "胸元から腰までの中距離構図", en: "mid shot, upper body to waist visible" },
                { ja: "シネマティック照明", en: "(cinematic lighting:1.3)" },
                { ja: "レイトレーシング", en: "(ray tracing:1.2)" },
                { ja: "グローバルイルミネーション", en: "(global illumination:1.2)" },
                { ja: "ボリューメトリックライティング", en: "(volumetric lighting:1.2)" }
              ]},
              { title: "🧬 浸食同化セット用クオリティ Ver.2", items: [
                { ja: "皮膚に広がる侵食模様", en: "corruption patterns spreading across the skin" },
                { ja: "部分的に生体化した衣装", en: "partially bio-transformed clothing" },
                { ja: "抵抗の中で進む同化", en: "assimilation progressing amid resistance" },
                { ja: "有機的不気味さ", en: "organic eeriness" },
                { ja: "生物的な不気味さ", en: "uncanny biological horror" },
                { ja: "肉へ融合する植物組織", en: "plant tissue fused with flesh" },
                { ja: "皮膚下に広がる根脈", en: "root-like veins spreading under skin" },
                { ja: "不可逆の生体変質", en: "irreversible biological transformation" },
                { ja: "静かで逃れられない寄生進行", en: "quiet but inescapable parasitic progression" },
                { ja: "衣装と肉の境界崩壊", en: "cloth-flesh boundary dissolving" },
                { ja: "縫い目を置換する有機繊維", en: "organic fibers replacing seams" },
                { ja: "衣装構造を乗っ取る生体組織", en: "living tissue overtaking garment structure" },
                { ja: "衣装の縁から伸びる根脈", en: "root-like growth crawling from collar and seams" },
                { ja: "生体組織に変わる布端", en: "fabric edges mutating into organic tissue" },
                { ja: "胸元から腰までの中距離構図", en: "mid shot, upper body to waist visible" },
                { ja: "シネマティック照明", en: "(cinematic lighting:1.3)" },
                { ja: "レイトレーシング", en: "(ray tracing:1.2)" },
                { ja: "グローバルイルミネーション", en: "(global illumination:1.2)" },
                { ja: "ボリューメトリックライティング", en: "(volumetric lighting:1.2)" }
              ]},
              { title: "🔥 侵食強化版用クオリティ補助", items: [
                { ja: "侵食密度の増大", en: "dense corruption spread" },
                { ja: "侵入性の有機過成長", en: "invasive organic overgrowth" },
                { ja: "表面積を食う侵食", en: "corruption consuming more surface area" },
                { ja: "皮膚と衣装の境界崩壊", en: "skin-clothing boundary dissolving" },
                { ja: "拡大する寄生被覆", en: "expanding parasitic coverage" },
                { ja: "這い広がる有機支配", en: "creeping organic takeover" },
                { ja: "厚みを増す侵食層", en: "thickened corruption density" },
                { ja: "有機ディテール強化", en: "(intricate organic details:1.2)" },
                { ja: "生体質感の密度補強", en: "(dense biological texture:1.2)" },
                { ja: "皮膚透過散乱", en: "(subsurface scattering:1.25)" },
                { ja: "映画的ライティング", en: "(cinematic lighting:1.2)" },
                { ja: "柔らかな影の奥行き", en: "(soft shadow depth:1.15)" }
              ]},
              { title: "🫀 根脈露出版用クオリティ補助", items: [
                { ja: "露出した根脈格子", en: "exposed root-vein lattice" },
                { ja: "目に見える有機血管網", en: "visible organic vascular network" },
                { ja: "緻密な根脈フィラメント", en: "intricate root-vein filaments" },
                { ja: "分岐する生体ライン", en: "branching biological lines" },
                { ja: "血管状の有機網", en: "vein-like organic webbing" },
                { ja: "精密に露出する根構造", en: "finely exposed root structure" },
                { ja: "優美な血管模様", en: "elegant vascular patterns" },
                { ja: "繊細な寄生フィラメント", en: "delicate parasitic filaments" },
                { ja: "線描の精度強化", en: "(intricate linework:1.25)" },
                { ja: "有機模様の高密度描写", en: "(ultra-detailed organic patterns:1.25)" },
                { ja: "血管ディテール焦点", en: "(sharp focus on vascular details:1.2)" },
                { ja: "高コントラスト縁光", en: "(high contrast rim light:1.15)" },
                { ja: "微細描写補強", en: "(micro-detail rendering:1.2)" }
              ]},
              { title: "💥 衣装崩壊版用クオリティ補助", items: [
                { ja: "崩れる衣装構造", en: "outfit structure collapsing" },
                { ja: "裂けていく布", en: "fabric tearing apart" },
                { ja: "ほどける生体衣装", en: "unraveling organic clothing" },
                { ja: "裂け端の強調", en: "shredded garment edges" },
                { ja: "崩落する縫い目", en: "collapsing seams" },
                { ja: "ほつれた生体布", en: "frayed bio-fabric" },
                { ja: "壊れた衣装シルエット", en: "broken silhouette" },
                { ja: "崩壊する衣装構造", en: "disintegrating clothing structure" },
                { ja: "布損傷ディテール", en: "(dynamic fabric damage detail:1.25)" },
                { ja: "裂け端の描写強化", en: "(torn edge detailing:1.2)" },
                { ja: "劇的ライティング", en: "(dramatic lighting:1.2)" },
                { ja: "被写界深度", en: "(depth of field:1.1)" },
                { ja: "構造コントラスト", en: "(structural contrast:1.15)" }
              ]}
            ],
            qualityGroups: [
              { title: "🫧 生体スーツ融合セット用クオリティ（基準版）", items: [
                { ja: "生きた有機膜の融合", en: "living organic membrane fused to skin" },
                { ja: "半透明の生体バイオ膜", en: "semi-translucent biofilm" },
                { ja: "濡れた有機表面", en: "wet organic surface, not latex, not rubber" },
                { ja: "柔らかな生体光沢", en: "soft living tissue sheen" },
                { ja: "肉感のある膜質感", en: "flesh-like membrane texture" },
                { ja: "膜内に見える脈模様", en: "subtle vein patterns inside the suit" },
                { ja: "表面下を動く有機繊維", en: "organic fibers moving under the surface" },
                { ja: "生体組織から育つ寄生スーツ", en: "parasitic suit grown from living tissue" },
                { ja: "生体同化で形成されたボディスーツ", en: "bodysuit formed by biological assimilation" },
                { ja: "人工素材ではない生体膜", en: "slime-like bio membrane instead of synthetic material" },
                { ja: "不均一な有機表面", en: "uneven organic surface" },
                { ja: "呼吸するような膜の起伏", en: "breathing living suit texture" },
                { ja: "高品質補正", en: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.4)" },
                { ja: "控えめな物理ベース質感", en: "(physically based rendering:1.15), (realistic lighting:1.15)" },
                { ja: "皮膚透過散乱", en: "(subsurface scattering:1.3)" },
                { ja: "映画的ライティング", en: "(cinematic lighting:1.3), (ray tracing:1.2), (global illumination:1.2), (volumetric lighting:1.2)" },
                { ja: "髪の艶と光沢", en: "(shiny hair:1.35), (glossy hair:1.35)" }
              ]},
              { title: "🫧 生体スーツ融合セット用クオリティ Ver.2（基準採用）", items: [
                { ja: "生きた有機膜の融合", en: "living organic membrane fused to skin" },
                { ja: "生体組織から育つ寄生膜", en: "parasitic membrane grown from living tissue" },
                { ja: "半透明の生体バイオ膜", en: "semi-translucent biofilm" },
                { ja: "濡れた有機表面", en: "wet organic surface" },
                { ja: "柔らかな生体光沢", en: "soft living tissue sheen" },
                { ja: "肉感のある膜質感", en: "flesh-like membrane texture" },
                { ja: "膜下に走る脈模様", en: "subtle vein patterns beneath the membrane" },
                { ja: "表面下を動く有機繊維", en: "organic fibers moving under the surface" },
                { ja: "不均一な生体表面", en: "uneven living surface" },
                { ja: "呼吸するような膜の起伏", en: "breathing living suit texture" },
                { ja: "生体同化で形成された生体被膜", en: "biological sheath formed by assimilation" },
                { ja: "人工素材ではない生体膜", en: "slime-like bio membrane instead of synthetic material, not latex, not rubber, not synthetic suit" },
                { ja: "高品質補正", en: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.4)" },
                { ja: "さらに抑えた物理ベース質感", en: "(physically based rendering:1.1), (realistic lighting:1.1)" },
                { ja: "皮膚透過散乱", en: "(subsurface scattering:1.3)" },
                { ja: "抑えめ映画的ライティング", en: "(cinematic lighting:1.25), (ray tracing:1.15), (global illumination:1.15), (volumetric lighting:1.15)" },
                { ja: "やや控えめな髪の艶", en: "(shiny hair:1.3), (glossy hair:1.3)" }
              ]},
              { title: "🧬 第二皮膚・外皮置換特化クオリティ", items: [
                { ja: "第二の皮膚としての生体膜", en: "second-skin biological membrane" },
                { ja: "外皮を置換する生体被膜", en: "living membrane replacing outer skin" },
                { ja: "半液状の有機被膜", en: "semi-liquid organic sheath" },
                { ja: "透明な生体表皮", en: "transparent living epidermis" },
                { ja: "膜越しに見える内部組織", en: "inner tissue visible through the membrane" },
                { ja: "体の起伏に張り付く被膜", en: "membrane stretched over body contours" },
                { ja: "有機的な表面張力", en: "organic surface tension" },
                { ja: "濡れた生体の透過感", en: "wet living translucency" },
                { ja: "生きた有機膜の融合", en: "living organic membrane fused to skin" },
                { ja: "生体組織から育つ寄生膜", en: "parasitic membrane grown from living tissue" },
                { ja: "人工素材ではない生体膜", en: "not latex, not rubber, not synthetic suit" },
                { ja: "高品質補正", en: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.4)" },
                { ja: "さらに抑えた物理ベース質感", en: "(physically based rendering:1.05), (realistic lighting:1.05)" },
                { ja: "皮膚透過散乱", en: "(subsurface scattering:1.3)" },
                { ja: "抑えめ映画的ライティング", en: "(cinematic lighting:1.2), (ray tracing:1.1), (global illumination:1.1), (volumetric lighting:1.1)" },
                { ja: "控えめな髪の艶", en: "(shiny hair:1.25), (glossy hair:1.25)" }
              ]},
              { title: "🫗 半透明ゼリー侵食セット用クオリティ（基準版）", items: [
                { ja: "物理ベース質感", en: "(physically based rendering:1.25), (realistic lighting:1.2)" },
                { ja: "皮膚透過散乱", en: "(subsurface scattering:1.25)" },
                { ja: "髪の艶と光沢", en: "(shiny hair:1.35), (glossy hair:1.35)" },
                { ja: "映画的ライティング", en: "(cinematic lighting:1.35), (ray tracing:1.25), (global illumination:1.25), (volumetric lighting:1.25)" },
                { ja: "火花状ボケ光", en: "(spark-like bokeh lights)" },
                { ja: "高品質補正", en: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.4)" }
              ]},
              { title: "🫗 半透明ゼリー侵食セット用クオリティ（初版）", items: [
                { ja: "スライムで溶けた衣装", en: "clothes melted by slime" },
                { ja: "部分的な半透明化", en: "partially transparent" },
                { ja: "粘着する衣服", en: "sticky clothes" },
                { ja: "異質粘液の被膜", en: "alien mucus coating" },
                { ja: "ぬめるゼリー層", en: "slimy layer" },
                { ja: "髪の艶と光沢", en: "(shiny hair:1.35), (glossy hair:1.35)" },
                { ja: "物理ベース質感", en: "(physically based rendering:1.25), (realistic lighting:1.2)" },
                { ja: "高品質補正", en: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.4)" },
                { ja: "皮膚透過散乱", en: "(subsurface scattering:1.3)" },
                { ja: "映画的ライティング", en: "(cinematic lighting:1.3), (ray tracing:1.2), (global illumination:1.2), (volumetric lighting:1.2)" },
                { ja: "火花状ボケ光", en: "(spark-like bokeh lights)" }
              ]},
              { title: "🫗 半透明ゼリー侵食セット用クオリティ Ver.2（基準採用）", items: [
                { ja: "衣服へ広がるゼラチン層", en: "gelatinous layer spreading over clothing" },
                { ja: "半液状のゼリー膜", en: "semi-liquid jelly film" },
                { ja: "透明なスライム膜", en: "transparent slime membrane" },
                { ja: "ねっとりした半透明被膜", en: "gooey translucent coating" },
                { ja: "ゲルへ溶けかけた衣服", en: "clothing partially dissolved into gel" },
                { ja: "布のひだに伸びるスライム", en: "stretching slime between fabric folds" },
                { ja: "粘性のある透明残留膜", en: "viscous transparent residue" },
                { ja: "濡れたゼリー光沢", en: "wet jelly sheen" },
                { ja: "柔らかなゼラチン質感", en: "soft gelatin texture" },
                { ja: "体の周囲に溜まるスライム", en: "slime pooling around the body" },
                { ja: "スライムで溶けた衣装", en: "clothes melted by slime" },
                { ja: "部分的な半透明化", en: "partially transparent" },
                { ja: "粘着する衣服", en: "sticky clothes" },
                { ja: "異質粘液の被膜", en: "alien mucus coating" },
                { ja: "ぬめるゼリー層", en: "slimy layer" },
                { ja: "髪の艶と光沢", en: "(shiny hair:1.35), (glossy hair:1.35)" },
                { ja: "物理ベース質感", en: "(physically based rendering:1.25), (realistic lighting:1.2)" },
                { ja: "高品質補正", en: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.4)" },
                { ja: "皮膚透過散乱", en: "(subsurface scattering:1.3)" },
                { ja: "映画的ライティング", en: "(cinematic lighting:1.3), (ray tracing:1.2), (global illumination:1.2), (volumetric lighting:1.2)" },
                { ja: "火花状ボケ光", en: "(spark-like bokeh lights)" }
              ]},
              { title: "🐙 触手侵食セット用クオリティ（初版）", items: [
                { ja: "体表に巻き付く触手", en: "tentacles coiling around the body surface" },
                { ja: "異物侵入の不穏さ", en: "ominous sense of alien penetration" },
                { ja: "拘束と侵食の同時進行", en: "restraint and invasion progressing together" },
                { ja: "粘液を帯びた侵食痕", en: "invasion traces soaked with viscous slime" },
                { ja: "生体侵食で癒着する皮膚と衣装", en: "skin and costume partially fused by parasitic growth" },
                { ja: "衣装の縫い目へ入り込む蔓", en: "vines piercing into clothing seams" },
                { ja: "有機的不気味さ", en: "organic eeriness" },
                { ja: "強いリムライト", en: "(strong rim lighting:1.3)" },
                { ja: "背面発光", en: "(backlight glow:1.2)" },
                { ja: "火花状ボケ光", en: "(spark-like bokeh lights)" }
              ]},
              { title: "🐙 触手侵食セット用クオリティ Ver.2（基準採用）", items: [
                { ja: "皮膚と衣装に残るぬめり痕", en: "slick tentacle residue on skin and clothing" },
                { ja: "吸盤痕のような侵食痕", en: "suction-mark-like invasion traces" },
                { ja: "巻き圧で歪む布", en: "coiling pressure deforming fabric" },
                { ja: "四肢に食い込む粘液圧迫", en: "slimy compression around wrapped limbs" },
                { ja: "縫い目へ締め込む触手", en: "tentacles tightening into clothing seams" },
                { ja: "接触後に残る有機残留膜", en: "wet organic residue left by contact" },
                { ja: "巻かれた箇所から進む侵食", en: "gradual corruption spreading from wrapped areas" },
                { ja: "侵食で崩れる衣装輪郭", en: "costume distorted by invasive coiling" },
                { ja: "動きに沿って走る粘液の筋", en: "glossy slime trails following tentacle movement" },
                { ja: "身体に刻まれる異物圧痕", en: "alien grip marks on the body" },
                { ja: "体表に巻き付く触手", en: "tentacles coiling around the body surface" },
                { ja: "異物侵入の不穏さ", en: "ominous sense of alien penetration" },
                { ja: "拘束と侵食の同時進行", en: "restraint and invasion progressing together" },
                { ja: "粘液を帯びた侵食痕", en: "invasion traces soaked with viscous slime" },
                { ja: "生体侵食で癒着する皮膚と衣装", en: "skin and costume partially fused by parasitic growth" },
                { ja: "衣装の縫い目へ入り込む蔓", en: "vines piercing into clothing seams" },
                { ja: "有機的不気味さ", en: "organic eeriness" },
                { ja: "強いリムライト", en: "(strong rim lighting:1.3)" },
                { ja: "背面発光", en: "(backlight glow:1.2)" },
                { ja: "火花状ボケ光", en: "(spark-like bokeh lights)" }
              ]},
              { title: "🧬 浸食同化セット用クオリティ（初版）", items: [
                { ja: "皮膚に広がる侵食模様", en: "corruption patterns spreading across the skin" },
                { ja: "部分的に生体化した衣装", en: "partially bio-transformed clothing" },
                { ja: "抵抗の中で進む同化", en: "assimilation progressing amid resistance" },
                { ja: "有機的不気味さ", en: "organic eeriness" },
                { ja: "生物的な不気味さ", en: "uncanny biological horror" },
                { ja: "肉へ融合する植物組織", en: "plant tissue fused with flesh" },
                { ja: "皮膚下に広がる根脈", en: "root-like veins spreading under skin" },
                { ja: "不可逆の生体変質", en: "irreversible biological transformation" },
                { ja: "静かで逃れられない寄生進行", en: "quiet but inescapable parasitic progression" },
                { ja: "胸元から腰までの中距離構図", en: "mid shot, upper body to waist visible" },
                { ja: "シネマティック照明", en: "(cinematic lighting:1.3)" },
                { ja: "レイトレーシング", en: "(ray tracing:1.2)" },
                { ja: "グローバルイルミネーション", en: "(global illumination:1.2)" },
                { ja: "ボリューメトリックライティング", en: "(volumetric lighting:1.2)" }
              ]},
              { title: "🧬 浸食同化セット用クオリティ Ver.2", items: [
                { ja: "皮膚に広がる侵食模様", en: "corruption patterns spreading across the skin" },
                { ja: "部分的に生体化した衣装", en: "partially bio-transformed clothing" },
                { ja: "抵抗の中で進む同化", en: "assimilation progressing amid resistance" },
                { ja: "有機的不気味さ", en: "organic eeriness" },
                { ja: "生物的な不気味さ", en: "uncanny biological horror" },
                { ja: "肉へ融合する植物組織", en: "plant tissue fused with flesh" },
                { ja: "皮膚下に広がる根脈", en: "root-like veins spreading under skin" },
                { ja: "不可逆の生体変質", en: "irreversible biological transformation" },
                { ja: "静かで逃れられない寄生進行", en: "quiet but inescapable parasitic progression" },
                { ja: "衣装と肉の境界崩壊", en: "cloth-flesh boundary dissolving" },
                { ja: "縫い目を置換する有機繊維", en: "organic fibers replacing seams" },
                { ja: "衣装構造を乗っ取る生体組織", en: "living tissue overtaking garment structure" },
                { ja: "衣装の縁から伸びる根脈", en: "root-like growth crawling from collar and seams" },
                { ja: "生体組織に変わる布端", en: "fabric edges mutating into organic tissue" },
                { ja: "胸元から腰までの中距離構図", en: "mid shot, upper body to waist visible" },
                { ja: "シネマティック照明", en: "(cinematic lighting:1.3)" },
                { ja: "レイトレーシング", en: "(ray tracing:1.2)" },
                { ja: "グローバルイルミネーション", en: "(global illumination:1.2)" },
                { ja: "ボリューメトリックライティング", en: "(volumetric lighting:1.2)" }
              ]},
              { title: "🌿 寄生植物同化セット用クオリティ", items: [
                { ja: "寄生植物同化", en: "parasitic plant assimilation" },
                { ja: "植物組織と肉体の融合", en: "plant tissue fused with flesh" },
                { ja: "布を侵食置換する有機組織", en: "organic overgrowth replacing fabric" },
                { ja: "肌と衣装が一体化した侵食", en: "skin and costume partially fused by parasitic growth" },
                { ja: "縫い目へ食い込む蔦", en: "vines piercing into clothing seams" },
                { ja: "皮膚下に走る根脈", en: "root-like veins spreading under skin" },
                { ja: "胸元と腰元への寄生進行", en: "parasitic progression around chest and waist" },
                { ja: "花弁状の触手意匠", en: "petal-shaped tentacle motifs" },
                { ja: "侵食組織から咲く花", en: "flowers erupting from invasive plant tissue" },
                { ja: "融合スーツから伸びる開花", en: "blooming flowers growing through fused organic suit" },
                { ja: "棘のある蔦が体へ巻き付く", en: "thorny vines wrapping body" },
                { ja: "蔦に覆われるボディスーツ", en: "bodysuit overgrown by parasitic vines" },
                { ja: "逃げ場なく進む不可逆変質", en: "irreversible biological transformation, quiet but inescapable parasitic progression" },
                { ja: "有機的な不気味さ", en: "organic eeriness" },
                { ja: "中距離・上半身から腰まで", en: "mid shot, upper body to waist visible" },
                { ja: "アニメリアル寄り描画", en: "(anime-realism blend:1.35), (semi-realistic rendering:1.2)" },
                { ja: "物理ベース質感", en: "(physically based rendering:1.25), (realistic lighting:1.2)" },
                { ja: "髪の艶と光沢", en: "(shiny hair:1.35), (glossy hair:1.35)" },
                { ja: "強い縁光と逆光", en: "(strong rim lighting:1.3), (backlight glow:1.2)" },
                { ja: "映画的ライティング", en: "(cinematic lighting:1.35), (ray tracing:1.25), (global illumination:1.25), (volumetric lighting:1.25)" },
                { ja: "皮膚透過散乱", en: "(subsurface scattering:1.25)" },
                { ja: "火花状ボケ光", en: "(spark-like bokeh lights)" },
                { ja: "高品質補正", en: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.4)" }
              ]}
            ]
          },
          {
            title: "💧 汚れ・液体系特化コレクション",
            description: "濡れ、液体付着、汚れ、てかり、混濁感までをまとめて深掘りする専用コレクション",
            presets: [
              { title: "💦 濡れ艶セット", items: [
                { ja: "濡れた肌の光沢", en: "wet skin gloss, reflective moisture" },
                { ja: "水滴つきボディ", en: "droplets on body, fresh wet shine" },
                { ja: "濡れ布の貼り付き", en: "wet cloth clinging to skin" },
                { ja: "しっとりした艶感", en: "moist glossy finish, slick body sheen" }
              ]},
              { title: "🖤 汚濁まみれセット", items: [
                { ja: "液体まみれの肌", en: "skin smeared with fluid, messy coating" },
                { ja: "汚れの付着", en: "stained with grime, dirty attachment" },
                { ja: "混濁したてかり", en: "murky gloss, dirty reflective sheen" },
                { ja: "乱れた汚れ演出", en: "chaotic dirt styling, messy contamination" },
                { ja: "白濁液まみれ", en: "covered in white liquid, sticky texture" }
              ]},
              { title: "🫧 オイル密着セット", items: [
                { ja: "オイル光沢肌", en: "oiled glossy skin, slick highlights" },
                { ja: "てかる密着感", en: "slick clingy shine, body-hugging fluid" },
                { ja: "滑るような表面反射", en: "slippery surface reflection, wet sheen" },
                { ja: "液体で輪郭が強調された肌", en: "body contours emphasized by liquid coating" }
              ]}
            ],
            baseGroups: [
              { title: "💦 濡れ・水滴", items: [
                { ja: "濡れた肌の光沢", en: "wet skin gloss, reflective moisture" },
                { ja: "水滴つきボディ", en: "droplets on body, fresh wet shine" },
                { ja: "濡れ布の貼り付き", en: "wet cloth clinging to skin" },
                { ja: "しっとりした艶感", en: "moist glossy finish, slick body sheen" },
                { ja: "滴る水の筋", en: "trickling water streaks, sliding moisture lines" },
                { ja: "濡れ透け (激)", en: "soaked clothes, wet transparency, clinging to skin" }
              ]},
              { title: "🖤 汚れ・混濁", items: [
                { ja: "液体まみれの肌", en: "skin smeared with fluid, messy coating" },
                { ja: "汚れの付着", en: "stained with grime, dirty attachment" },
                { ja: "泥汚れの広がり", en: "spreading mud stains, dirty body marks" },
                { ja: "混濁したてかり", en: "murky gloss, dirty reflective sheen" },
                { ja: "乱れた汚れ演出", en: "chaotic dirt styling, messy contamination" }
              ]}
            ],
            customizeGroups: [
              { title: "🫧 オイル・粘度追加", items: [
                { ja: "オイル光沢肌", en: "oiled glossy skin, slick highlights" },
                { ja: "てかる密着感", en: "slick clingy shine, body-hugging fluid" },
                { ja: "滑るような表面反射", en: "slippery surface reflection, wet sheen" },
                { ja: "液体で輪郭が強調された肌", en: "body contours emphasized by liquid coating" },
                { ja: "ぬめる質感追加", en: "slimy texture added, viscous surface effect" }
              ]},
              { title: "🧴 汚れ方の調整", items: [
                { ja: "部分的な汚れ付着", en: "partial staining, localized grime" },
                { ja: "全身まみれの汚れ", en: "full-body dirty coating, complete contamination" },
                { ja: "水と汚れの混在", en: "mix of water and dirt, layered mess" },
                { ja: "服にも広がる液体跡", en: "fluid stains spreading onto clothes" },
                { ja: "乱雑な飛び散り跡", en: "chaotic splatter marks, scattered fluid stains" },
                { ja: "精液まみれの服", en: "bukkake on clothes, cum on clothes, stained clothes" },
                { ja: "破れたストッキング", en: "torn pantyhose, laddered tights" }
              ]}
            ],
            settingGroups: [
              { title: "💧 液体系演出設定", items: [
                { ja: "濡れと汚れの境界を曖昧にする", en: "blur the border between wetness and dirt" },
                { ja: "光を拾う液体膜", en: "light-catching liquid film, reflective coating" },
                { ja: "背徳的な汚濁感", en: "decadent dirty atmosphere, forbidden contamination" },
                { ja: "混濁した艶を強調", en: "accentuate murky gloss, impure sheen" },
                { ja: "乱れた液体跡を残す", en: "leave messy liquid traces, chaotic residue" }
              ]}
            ]
          },
          {
            title: "⛓ 艶拘束・支配進行特化コレクション",
            description: "締め付け、支配、見せつけ、湿った光沢、拘束の進行感を、生体膜寄りの艶と一緒に深掘りする専用コレクション",
            presets: [
              { title: "🔞 艶拘束・支配進行セット", desc: "艶膜の拘束が首元・胸元・腰まわりへ進み、命令と羞恥が混ざる主導支配寄りの完成セット", items: [
                { ja: "首元を締める生体拘束", en: "organic restraint tightening around the neck" },
                { ja: "胸元へ絡み込む艶膜拘束", en: "glossy membrane restraint wrapping around the chest" },
                { ja: "腰まわりを固定する粘膜束", en: "mucosal restraint fixing the waist in place" },
                { ja: "湿った拘束膜の食い込み", en: "wet restraint membrane pressing into the body" },
                { ja: "粘膜めいた濡れた光沢", en: "wet sheen like living mucosal membrane, not latex, not rubber" },
                { ja: "拘束が進行していく途中段階", en: "mid-progression stage of restraint advancing across the body" },
                { ja: "首・胸・腰へ支配が進行する演出", en: "staging of domination advancing across neck, chest and waist" },
                { ja: "命令で姿勢を固定された空気", en: "an atmosphere of posture fixed by command" },
                { ja: "見せつけるための拘束構図", en: "display-oriented restraint composition" },
                { ja: "羞恥を伴う支配進行", en: "domination progression accompanied by humiliation" }
              ] }
            ],
            baseGroups: [
              { title: "⛓ 艶拘束・支配進行", items: [
                { ja: "首元を締める生体拘束", en: "organic restraint tightening around the neck" },
                { ja: "胸元へ絡み込む艶膜拘束", en: "glossy membrane restraint wrapping around the chest" },
                { ja: "腰まわりを固定する粘膜束", en: "mucosal restraint fixing the waist in place" },
                { ja: "四肢へ伝う拘束膜", en: "restraining membrane trailing along the limbs" },
                { ja: "姿勢を固定する生体バインド", en: "living bind that fixes the pose" },
                { ja: "体表へ張り付く拘束層", en: "restraint layer clinging to the body surface" },
                { ja: "湿った拘束膜の食い込み", en: "wet restraint membrane pressing into the body" },
                { ja: "呼吸に合わせて締まる生体束", en: "living restraint tightening with each breath" },
                { ja: "首・胸・腰へ伸びる拘束ライン", en: "binding lines stretching across neck, chest and waist" },
                { ja: "主導権を示す拘束姿勢", en: "restrained posture that implies control and leadership" }
              ] }
            ],
            customizeGroups: [
              { title: "💋 艶拘束・支配演出", items: [
                { ja: "粘膜めいた濡れた光沢", en: "wet sheen like living mucosal membrane, not latex, not rubber" },
                { ja: "生体膜寄りのぬめる反射", en: "slick reflections closer to living bio-membrane than latex" },
                { ja: "胸元の締め上げ強調", en: "emphasized constriction around the chest" },
                { ja: "腰の拘束圧を強める", en: "stronger restraint pressure around the waist" },
                { ja: "首元に集まる支配の焦点", en: "dominant focal tension gathering around the throat" },
                { ja: "拘束が進行していく途中段階", en: "mid-progression stage of restraint advancing across the body" },
                { ja: "見せつけるための拘束構図", en: "display-oriented restraint composition" },
                { ja: "見下ろしで圧をかける構図", en: "downward-looking composition that adds pressure" },
                { ja: "密着しながら支配する絡み方", en: "close-contact wrapping that dominates while clinging" },
                { ja: "光を拾う湿膜の縁取り", en: "light-catching edges of a wet living membrane" }
              ] }
            ],
            settingGroups: [
              { title: "⚙️ 支配進行・羞恥・見せつけ設定", items: [
                { ja: "首・胸・腰へ支配が進行する演出", en: "staging of domination advancing across neck, chest and waist" },
                { ja: "命令で姿勢を固定された空気", en: "an atmosphere of posture fixed by command" },
                { ja: "羞恥を伴う支配進行", en: "domination progression accompanied by humiliation" },
                { ja: "見せつけ前提の支配感", en: "domination presented for display" },
                { ja: "拒めない拘束の意思", en: "a sense of inescapable will within the restraint" },
                { ja: "女王的な主導圧", en: "queen-like leading pressure" },
                { ja: "静かに進む拘束支配", en: "quietly advancing restraint and domination" },
                { ja: "同化寸前の密着拘束", en: "clinging restraint on the verge of assimilation" },
                { ja: "濡れた生体拘束の背徳感", en: "decadent atmosphere of wet biological restraint" },
                { ja: "支配を誇示する見せつけ感", en: "showy flaunting of domination" }
              ] }
            ],
            qualityPresets: [
              { title: "⛓ 艶拘束・支配進行用クオリティセット（基準版）", items: [
                { ja: "首元を締める生体拘束", en: "organic restraint tightening around the neck" },
                { ja: "胸元へ絡み込む艶膜拘束", en: "glossy membrane restraint wrapping around the chest" },
                { ja: "腰まわりを固定する粘膜束", en: "mucosal restraint fixing the waist in place" },
                { ja: "湿った拘束膜の食い込み", en: "wet restraint membrane pressing into the body" },
                { ja: "粘膜めいた濡れた光沢", en: "wet sheen like living mucosal membrane, not latex, not rubber" },
                { ja: "生体膜寄りのぬめる反射", en: "slick reflections closer to living bio-membrane than latex" },
                { ja: "首・胸・腰へ支配が進行する演出", en: "staging of domination advancing across neck, chest and waist" },
                { ja: "命令で姿勢を固定された空気", en: "an atmosphere of posture fixed by command" },
                { ja: "見せつけるための拘束構図", en: "display-oriented restraint composition" },
                { ja: "羞恥を伴う支配進行", en: "domination progression accompanied by humiliation" },
                { ja: "生体膜寄りの湿潤光沢", en: "wet glossy surface closer to living bio-membrane, not latex, not rubber" },
                { ja: "粘膜的な半透明反射", en: "semi-translucent mucosal reflections" },
                { ja: "湿った締め付け痕の陰影", en: "shading on damp constriction marks" },
                { ja: "高品質補正", en: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.4)" },
                { ja: "湿潤映画光", en: "(cinematic lighting:1.25), (volumetric lighting:1.15), (global illumination:1.15)" },
                { ja: "生体膜向け質感補正", en: "(subsurface scattering:1.25), (specular highlights:1.15), (soft wet sheen:1.2)" }
              ]},
              { title: "👑 支配強化版用クオリティセット", items: [
                { ja: "首元を締める生体拘束", en: "organic restraint tightening around the neck" },
                { ja: "胸元の締め上げ強調", en: "emphasized constriction around the chest" },
                { ja: "腰の拘束圧を強める", en: "stronger restraint pressure around the waist" },
                { ja: "首元に集まる支配の焦点", en: "dominant focal tension gathering around the throat" },
                { ja: "見下ろしで圧をかける構図", en: "downward-looking composition that adds pressure" },
                { ja: "命令で姿勢を固定された空気", en: "an atmosphere of posture fixed by command" },
                { ja: "見せつけ前提の支配感", en: "domination presented for display" },
                { ja: "拒めない拘束の意思", en: "a sense of inescapable will within the restraint" },
                { ja: "女王的な主導圧", en: "queen-like leading pressure" },
                { ja: "支配を誇示する見せつけ感", en: "showy flaunting of domination" },
                { ja: "首元・胸元・腰まわりの強い陰影", en: "strong shading around neck, chest and waist" },
                { ja: "食い込みを拾う皮膚陰影", en: "skin shading that accentuates pressure and indentation" },
                { ja: "拘束陰影の強化", en: "(dramatic shading:1.2), (contact shadows:1.2), (depth of field:1.1)" },
                { ja: "強い視線誘導", en: "strong eye guidance toward throat, chest, and waist restraints" },
                { ja: "高品質補正", en: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.4)" },
                { ja: "支配映画光", en: "(cinematic lighting:1.3), (rim lighting:1.2), (dramatic contrast:1.15)" }
              ]},
              { title: "🫧 生体膜深化版用クオリティセット", items: [
                { ja: "粘膜めいた濡れた光沢", en: "wet sheen like living mucosal membrane, not latex, not rubber" },
                { ja: "生体膜寄りのぬめる反射", en: "slick reflections closer to living bio-membrane than latex" },
                { ja: "密着しながら支配する絡み方", en: "close-contact wrapping that dominates while clinging" },
                { ja: "光を拾う湿膜の縁取り", en: "light-catching edges of a wet living membrane" },
                { ja: "同化寸前の密着拘束", en: "clinging restraint on the verge of assimilation" },
                { ja: "濡れた生体拘束の背徳感", en: "decadent atmosphere of wet biological restraint" },
                { ja: "静かに進む拘束支配", en: "quietly advancing restraint and domination" },
                { ja: "生体膜寄りの湿潤光沢", en: "wet glossy surface closer to living bio-membrane, not latex, not rubber" },
                { ja: "粘膜的な半透明反射", en: "semi-translucent mucosal reflections" },
                { ja: "抑制されたラバー感", en: "reduced latex feel, suppressed synthetic rubber impression" },
                { ja: "湿った締め付け痕の陰影", en: "shading on damp constriction marks" },
                { ja: "生体膜向け質感補正", en: "(subsurface scattering:1.25), (specular highlights:1.15), (soft wet sheen:1.2)" },
                { ja: "半透明の膜光", en: "(translucent membrane glow:1.2), (soft backlighting:1.15)" },
                { ja: "高品質補正", en: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.4)" },
                { ja: "湿潤映画光", en: "(cinematic lighting:1.25), (volumetric lighting:1.15), (global illumination:1.15)" },
                { ja: "生きた膜の表面感", en: "living biofilm surface, breathing organic sheen, mucosal skin film" }
              ]},
              { title: "⛓ 艶拘束・支配進行用クオリティセット（基準版） Ver.2", items: [
                { ja: "首元を締める生体拘束", en: "organic restraint tightening around the neck" },
                { ja: "胸元へ絡み込む艶膜拘束", en: "glossy membrane restraint wrapping around the chest" },
                { ja: "腰まわりを固定する粘膜束", en: "mucosal restraint fixing the waist in place" },
                { ja: "拘束膜が体表へ溶け込む中間段階", en: "intermediate stage of restraint membrane partially assimilating into the body surface" },
                { ja: "湿った拘束膜の食い込み", en: "wet restraint membrane pressing into the body" },
                { ja: "ラバー感を抑えた生体膜艶", en: "bio-membrane gloss with reduced latex feel, less synthetic rubber impression" },
                { ja: "柔らかい半透明の粘膜反射", en: "soft semi-translucent mucosal reflections" },
                { ja: "首・胸・腰へ支配が進行する演出", en: "staging of domination advancing across neck, chest and waist" },
                { ja: "命令で姿勢を固定された空気", en: "an atmosphere of posture fixed by command" },
                { ja: "見せつけるための拘束構図", en: "display-oriented restraint composition" },
                { ja: "湿った締め付け痕の陰影", en: "shading on damp constriction marks" },
                { ja: "食い込みを拾う柔らかい皮膚陰影", en: "soft skin shading that accentuates pressure and indentation" },
                { ja: "高品質補正", en: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.4)" },
                { ja: "湿膜映画光Ver.2", en: "(cinematic lighting:1.23), (volumetric lighting:1.12), (soft contact shadows:1.12), (global illumination:1.12)" },
                { ja: "生体膜向け質感補正Ver.2", en: "(subsurface scattering:1.28), (soft specular highlights:1.12), (moist organic sheen:1.24), (translucent skin film:1.18)" },
                { ja: "中間膜の表面感", en: "partially assimilated membrane surface, moist organic film, living sheath on skin" }
              ]},
              { title: "🫧 生体膜深化版用クオリティセット Ver.2", items: [
                { ja: "膜そのものが締め上げる拘束", en: "living membrane itself tightening and restraining the body" },
                { ja: "胴体へ巻き付いて固定する生体膜", en: "organic membrane wrapping around the torso and fixing posture" },
                { ja: "半透明の膜が食い込む拘束", en: "semi-translucent membrane constriction pressing into the body" },
                { ja: "粘膜めいた濡れた光沢", en: "wet sheen like living mucosal membrane, not latex, not rubber" },
                { ja: "生体膜寄りのぬめる反射", en: "slick reflections closer to living bio-membrane than latex" },
                { ja: "密着しながら支配する絡み方", en: "close-contact wrapping that dominates while clinging" },
                { ja: "膜の縁が光を拾う半透明感", en: "semi-translucent membrane edges catching light" },
                { ja: "同化寸前の密着拘束", en: "clinging restraint on the verge of assimilation" },
                { ja: "濡れた生体拘束の背徳感", en: "decadent atmosphere of wet biological restraint" },
                { ja: "静かに進む拘束支配", en: "quietly advancing restraint and domination" },
                { ja: "生体膜が姿勢まで固定する", en: "living membrane binding and fixing the posture itself" },
                { ja: "抑制されたラバー感", en: "reduced latex feel, suppressed synthetic rubber impression" },
                { ja: "湿った締め付け痕の陰影", en: "shading on damp constriction marks" },
                { ja: "生体膜向け質感補正Ver.2", en: "(subsurface scattering:1.32), (soft specular highlights:1.1), (moist organic sheen:1.28), (translucent membrane glow:1.24), (living biofilm texture:1.22)" },
                { ja: "膜拘束向け映画光Ver.2", en: "(cinematic lighting:1.22), (soft backlighting:1.18), (volumetric lighting:1.1), (global illumination:1.1)" },
                { ja: "生きた拘束膜の表面感", en: "living restraint membrane, wet biofilm constriction, organic sheath binding posture" }
              ]},
              { title: "🫧 生体膜深化版用クオリティセット Ver.3", items: [
                { ja: "膜が衣装ではなく拘束体そのもの", en: "the membrane itself is the restraint body, not clothing" },
                { ja: "胸・腹・腰を保持する半透明生体膜", en: "semi-translucent living membrane holding the chest, abdomen and waist in place" },
                { ja: "姿勢まで支配する有機的な巻き付き", en: "organic wrapping that controls the posture itself" },
                { ja: "膜が食い込みながら固定する胴体拘束", en: "torso restraint where the membrane presses in and fixes the body" },
                { ja: "器具より生体膜が主役の拘束", en: "restraint led by living membrane rather than belts or devices" },
                { ja: "ぬめる生体反射", en: "slick living bio-membrane reflections, not latex, not rubber" },
                { ja: "柔らかい半透明の膜縁", en: "soft semi-translucent membrane edges glowing under light" },
                { ja: "湿った皮膜が体表へ馴染む", en: "wet organic film adhering naturally to the body surface" },
                { ja: "生体膜が抱き締めるように締める", en: "living membrane tightening like a wet organic embrace" },
                { ja: "有機的な保持で逃がさない", en: "organic holding force that does not let the body escape" },
                { ja: "濡れた膜の圧で静かに支配が進む", en: "domination quietly advances through the pressure of wet living membrane" },
                { ja: "膜そのものが姿勢を保持する", en: "the membrane itself maintains and fixes the posture" },
                { ja: "ラバー感をさらに後退", en: "further reduced latex feel, pushed away from synthetic rubber" },
                { ja: "締め付け痕を拾う柔らかな湿膜陰影", en: "soft wet membrane shading emphasizing pressure marks and constriction" },
                { ja: "生体膜向け質感補正Ver.3", en: "(subsurface scattering:1.34), (soft specular highlights:1.08), (moist organic sheen:1.32), (translucent membrane glow:1.28), (living biofilm texture:1.28), (semi-translucent organic restraint membrane:1.26)" },
                { ja: "膜拘束向け映画光Ver.3", en: "(cinematic lighting:1.2), (soft backlighting:1.2), (volumetric lighting:1.08), (global illumination:1.08), (rim light through translucent membrane:1.16)" },
                { ja: "生きた拘束膜が体を保持する表面感", en: "living restraint membrane holding the body, wet biofilm constriction, organic sheath maintaining posture" }
              ]},
              { title: "🧬 生体粘膜拘束派生 Ver.1", items: [
                { ja: "粘性のある生体膜が拘束体として機能する", en: "viscous living membrane functioning as the restraint body itself" },
                { ja: "赤みを帯びた粘膜拘束が胸・腹・腰へ絡みつく", en: "reddish mucosal restraint coiling around the chest, abdomen, and waist" },
                { ja: "艶と粘度を伴う生体拘束のうねり", en: "organic restraint undulation with sheen and viscosity" },
                { ja: "半液状の拘束膜が四肢を抱え込む", en: "semi-fluid restraint membrane engulfing the limbs" },
                { ja: "粘る拘束体が姿勢を奪って保持する", en: "clingy restraint body stealing posture and holding it in place" },
                { ja: "器具より生体粘膜が主役の拘束", en: "restraint led by living mucosal mass rather than belts or devices" },
                { ja: "ぬめる膜縁と粘性ハイライト", en: "slick membrane edges and viscous organic highlights" },
                { ja: "赤い粘膜反射", en: "reddish mucosal reflections, wet biofilm sheen" },
                { ja: "湿った粘膜束が身体を包囲する", en: "wet mucosal bundles surrounding the body" },
                { ja: "柔らかい生体拘束が逃がさない", en: "soft biological restraint that quietly prevents escape" },
                { ja: "肌へ馴染む粘膜拘束の食い込み", en: "mucosal restraint blending into skin with soft pressure marks" },
                { ja: "有機粘膜の圧で締め付け痕を残す", en: "organic mucosal pressure leaving damp constriction marks" },
                { ja: "半液状拘束体への誘導", en: "steer toward semi-fluid biological restraint instead of plain glossy suit" },
                { ja: "生体粘膜拘束向け質感補正Ver.4", en: "(subsurface scattering:1.34), (soft specular highlights:1.08), (moist organic sheen:1.36), (living biofilm texture:1.32), (viscous mucosal membrane:1.3), (wet semi-fluid restraint surface:1.28)" },
                { ja: "粘膜拘束向け映画光Ver.4", en: "(cinematic lighting:1.2), (soft backlighting:1.18), (volumetric lighting:1.08), (global illumination:1.08), (organic rim glow:1.16)" },
                { ja: "粘る生体拘束が身体を包囲する表面感", en: "clingy living mucosal restraint surrounding the body, semi-fluid biofilm constriction, organic mass maintaining posture" }
              ]},
              { title: "🤍 半透明拘束膜特化 Ver.4", items: [
                { ja: "白い半透明拘束膜を最優先", en: "white semi-translucent restraint membrane as the absolute priority" },
                { ja: "薄い白膜が拘束体そのもの", en: "thin pale restraint membrane itself, not clothing, not latex, not catsuit, not glossy rubber" },
                { ja: "半透明の白膜が胸・腹・腰を静かに保持する", en: "semi-translucent white membrane quietly holding the chest, abdomen, and waist in place" },
                { ja: "白い薄膜が腕から胴へ柔らかく巻き付く", en: "pale thin membrane softly wrapping from the arms into the torso" },
                { ja: "柔らかな白膜の張力で姿勢を保たれる", en: "posture maintained by the gentle tension of translucent white membrane" },
                { ja: "器具より薄い有機膜が主役の拘束", en: "thin organic membrane restraint takes priority over belts or devices" },
                { ja: "白膜の縁だけが淡く光を拾う", en: "only the pale membrane edges softly catching light" },
                { ja: "乳白色の湿った膜反射", en: "milky wet membrane reflections, soft biofilm sheen, no harsh synthetic gloss" },
                { ja: "白い薄膜が肌へ馴染みながら食い込む", en: "white thin membrane pressing into the body while blending into skin" },
                { ja: "静かな拘束保持", en: "quiet immobilization by thin living membrane" },
                { ja: "肌に溶ける白い半透明拘束膜", en: "white semi-translucent restraint membrane melting into the skin surface" },
                { ja: "柔らかな白膜圧で締め付け痕を残す", en: "soft pale membrane pressure leaving gentle constriction marks" },
                { ja: "黒艶スーツ化を強く抑制", en: "strongly avoid black glossy bodysuit look, avoid red latex, avoid catsuit direction" },
                { ja: "半透明拘束膜向け質感補正Ver.4", en: "(subsurface scattering:1.38), (soft specular highlights:1.02), (moist organic sheen:1.3), (translucent membrane glow:1.36), (living biofilm texture:1.28), (milky semi-translucent restraint membrane:1.36), (wet translucent restraint surface:1.34), (thin pale organic film:1.32)" },
                { ja: "白膜拘束向け映画光Ver.4", en: "(cinematic lighting:1.14), (soft backlighting:1.26), (volumetric lighting:1.04), (global illumination:1.08), (rim light through pale translucent membrane:1.26), (soft diffused highlights:1.2), (gentle milky bloom:1.14)" },
                { ja: "白い生体薄膜が身体を保持する表面感", en: "pale living thin restraint membrane holding the body, semi-translucent biofilm constriction, soft organic sheath maintaining posture" }
              ]},
              { title: "🤍 半透明拘束膜特化 Ver.5", items: [
                { ja: "白い半透明拘束膜だけを主役にする", en: "white translucent restraint membrane only, make the pale living film the main subject" },
                { ja: "薄い乳白膜が衣装ではなく拘束体そのもの", en: "thin milky restraint film as the restraint body itself, not outfit, not rope, not harness, not latex" },
                { ja: "白い有機薄膜が胸・腹・腰を包んで保持する", en: "pale organic thin membrane wrapping and holding the chest, abdomen, and waist" },
                { ja: "白い半透明膜が腕から胴へ静かに伸びる", en: "white semi-translucent membrane quietly extending from the arms into the torso" },
                { ja: "薄膜の張力だけで姿勢が維持される", en: "posture maintained only by the gentle tension of the thin translucent membrane" },
                { ja: "縛るより包んで保持する", en: "hold and immobilize by wrapping rather than by tying" },
                { ja: "器具拘束とロープ拘束を大きく抑える", en: "strongly avoid rope restraint, avoid harness restraint, avoid gear-driven bondage look" },
                { ja: "黒艶スーツと赤ラテックス方向を切る", en: "avoid black glossy catsuit look, avoid red latex direction, avoid exposed display restraint" },
                { ja: "白膜の縁だけが柔らかく透けて光る", en: "only the edges of the pale membrane softly glowing through translucency" },
                { ja: "乳白色の薄膜が肌へ溶けながら食い込む", en: "milky translucent thin membrane melting into skin while leaving soft pressure" },
                { ja: "白い半透明拘束膜の静かな固定", en: "quiet immobilization by white semi-translucent living restraint membrane" },
                { ja: "薄い白膜が皮膚感と一体化する", en: "thin pale membrane integrating with the skin surface instead of reading as clothing" },
                { ja: "半透明拘束膜向け質感補正Ver.5", en: "(subsurface scattering:1.4), (soft specular highlights:1.0), (moist organic sheen:1.24), (translucent membrane glow:1.4), (living biofilm texture:1.24), (milky semi-translucent restraint membrane:1.42), (wet translucent restraint surface:1.36), (thin pale organic film:1.38), (soft diffused highlights:1.18)" },
                { ja: "白膜拘束向け映画光Ver.5", en: "(cinematic lighting:1.08), (soft backlighting:1.3), (volumetric lighting:1.02), (global illumination:1.08), (rim light through pale translucent membrane:1.3), (gentle milky bloom:1.18), (quiet studio shadow:1.06)" },
                { ja: "白い生体薄膜が身体を包んで逃がさない表面感", en: "pale living thin restraint membrane surrounding the body, semi-translucent biofilm immobilization, soft organic sheath holding posture without rope or harness" }
              ]},
            ],
            qualityGroups: [
              { title: "⛓ 艶拘束・支配進行用クオリティ補助", items: [
                { ja: "生体膜寄りの湿潤光沢", en: "wet glossy surface closer to living bio-membrane, not latex, not rubber" },
                { ja: "粘膜的な半透明反射", en: "semi-translucent mucosal reflections" },
                { ja: "湿った締め付け痕の陰影", en: "shading on damp constriction marks" },
                { ja: "首元・胸元・腰まわりの強い陰影", en: "strong shading around neck, chest and waist" },
                { ja: "食い込みを拾う皮膚陰影", en: "skin shading that accentuates pressure and indentation" },
                { ja: "抑制されたラバー感", en: "reduced latex feel, suppressed synthetic rubber impression" },
                { ja: "高品質補正", en: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.4)" },
                { ja: "生体膜向け質感補正", en: "(subsurface scattering:1.25), (specular highlights:1.15), (soft wet sheen:1.2)" },
                { ja: "拘束陰影の強化", en: "(dramatic shading:1.2), (contact shadows:1.2), (depth of field:1.1)" },
                { ja: "湿潤映画光", en: "(cinematic lighting:1.25), (volumetric lighting:1.15), (global illumination:1.15)" }
              ] }
            ]
          },{
            title: "💜 魅了の首輪・魔力支配特化コレクション",
            description: "魅了に抗う顔、深浸食で呑まれる顔、不穏に崩れる顔まで“首輪を核にした魅了支配の段階差”を深掘りする専用コレクション",
            presets: [
              { title: "💗 可愛い系魅了セット", items: [
                { ja: "きらきら可愛いハート瞳", en: "cute sparkling heart-shaped pupils" },
                { ja: "うるんだ恋色の瞳", en: "moist romantic eyes with soft heart highlights" },
                { ja: "やさしい赤面", en: "soft blush, cute heart-eyed look" },
                { ja: "可愛い恋の空気感", en: "sweet heart-themed atmosphere, adorable romantic tone" }
              ]},
              { title: "❤️ ガチ魅了状態セット", items: [
                { ja: "深く侵食された魅了視線", en: "entranced corrupted stare" },
                { ja: "深紅のハート瞳発光", en: "glowing red heart-shaped pupils, crimson eyeball illumination" },
                { ja: "[Full-Face Blush:1.4]", en: "[Full-Face Blush:1.4]" },
                { ja: "乱れた呼吸", en: "breath unsteady beneath the pressure of the binding spell" },
                { ja: "呪術的な愛情の気配", en: "intimate cursed glow, stronger arcane charm corruption" }
              ]},
              { title: "🖤 不穏系魅了セット", items: [
                { ja: "空虚に崩れる視線", en: "faintly vacant eyes, unfocused eyes" },
                { ja: "乱れた表情", en: "disturbed expression" },
                { ja: "抗いで揺れる理性", en: "trying to endure, shaky breath, wavering composure" },
                { ja: "不穏な魅了崩壊", en: "intimate cursed glow, unwilling enchantment, emotional breakdown" }
              ]},
              { title: "🩵 魅了抵抗中セット", items: [
                { ja: "乱れた表情", en: "disturbed expression" },
                { ja: "潤んだ瞳", en: "watery eyes" },
                { ja: "震える口元", en: "trembling mouth" },
                { ja: "感情崩壊の兆し", en: "emotional breakdown" }
              ]},
              { title: "❤️ ガチ魅了状態・深浸食セット", items: [
                { ja: "深く侵食された魅了視線", en: "entranced corrupted stare" },
                { ja: "深浸食の呪われた愛情", en: "cursed affection, deeper enchantment sink" },
                { ja: "深紅のハート瞳発光", en: "glowing red heart-shaped pupils, crimson eyeball illumination" },
                { ja: "深部侵食の儀式光", en: "dark magical background, low-key ritual lighting, intimate cursed glow" }
              ]},
              { title: "🩸 不穏系魅了・抗い崩壊セット", items: [
                { ja: "噛みしめる抵抗表情", en: "restrained expression, clenched expression, biting lip" },
                { ja: "抗いで揺れる理性", en: "trying to endure, shaky breath, wavering composure" },
                { ja: "空虚に崩れる視線", en: "faintly vacant eyes, unfocused eyes" },
                { ja: "不穏な魅了崩壊", en: "intimate cursed glow, unwilling enchantment, emotional breakdown" }
              ]}
            ],
            baseGroups: [
              { title: "⛓ 魅了首輪・呪具本体", items: [
                { ja: "黒鋼の厚い支配首輪", en: "thick blacksteel control collar" },
                { ja: "古代制御紋が刻まれた首輪", en: "engraved with an ancient control crest" },
                { ja: "露出した拘束ロック機構", en: "locking mechanism exposed" },
                { ja: "首輪へ埋め込まれた魔導ロック", en: "magical lock embedded in the collar" },
                { ja: "首輪そのものが主制御装置", en: "collar as the primary control device" }
              ]},
              { title: "🔮 魔力回路・術式同期", items: [
                { ja: "首筋へ広がる術式線", en: "sigils spreading across the neck and collarbone" },
                { ja: "皮膚へ刻まれる魔力回路", en: "mana circuits etched into skin" },
                { ja: "喉元へ埋め込まれた魔導流", en: "arcane flow embedded along the throat" },
                { ja: "首輪脈動が身体へ融け込む", en: "collar pulse fusing into the body" },
                { ja: "首輪核と同期する光", en: "eyes casting a deep red shine synchronized with the collar’s beating core" }
              ]},
              { title: "👁 瞳の魅了変化", items: [
                { ja: "赤発光のハート瞳孔", en: "(Red glowing heart-shaped pupils:1.4)" },
                { ja: "瞳に浮かぶ魔術ハート紋", en: "arcane heart sigils in the eyes" },
                { ja: "きらきら可愛いハート瞳", en: "cute sparkling heart-shaped pupils" },
                { ja: "うるんだ恋色の瞳", en: "moist romantic eyes with soft heart highlights" },
                { ja: "首輪と同期する眼光", en: "collar-linked eye glow" },
                { ja: "深く侵食された魅了視線", en: "entranced corrupted stare" },
                { ja: "深紅のハート瞳発光", en: "glowing red heart-shaped pupils, crimson eyeball illumination" },
                { ja: "空虚に崩れる視線", en: "faintly vacant eyes, unfocused eyes" }
              ]}
            ],
            customizeGroups: [
              { title: "😳 抵抗・羞恥・快楽混線", items: [
                { ja: "[Full-Face Blush:1.4]", en: "[Full-Face Blush:1.4]" },
                { ja: "震える唇", en: "trembling lips" },
                { ja: "涙を含んだ瞳", en: "tear-bright eyes" },
                { ja: "意志と魅了の狭間の視線", en: "a gaze torn between will and enchantment" },
                { ja: "乱れた呼吸", en: "breath unsteady beneath the pressure of the binding spell" }
              ]},
              { title: "💧 発汗・湿度・涎", items: [
                { ja: "汗ばむ肌", en: "sweat beading from the strain of resisting the spell" },
                { ja: "儀式光に濡れる肌", en: "damp skin shimmering beneath ritual light" },
                { ja: "潤んだ瞳", en: "(Moist Eyes:1.2)" },
                { ja: "官能的な涎", en: "(Sensual Drool:1.4)" },
                { ja: "艶のある表情", en: "(Sensual Expression:1.3)" }
              ]},
              { title: "✨ 発光紋様・粒子演出", items: [
                { ja: "頬に浮かぶ術式紋", en: "subtle sigil-patterns glowing on the cheeks" },
                { ja: "漂う魔力粒子", en: "drifting mana particles" },
                { ja: "瞳と首輪を包む赤い光", en: "a faint red aura enveloping both eyes and the collar" },
                { ja: "呪術的な愛情の気配", en: "intimate cursed glow, stronger arcane charm corruption" },
                { ja: "ハート粒子", en: "(heart particles:1.3)" }
              ]},
              { title: "💗 かわいいハート瞳アレンジ", items: [
                { ja: "可愛い恋の空気感", en: "sweet heart-themed atmosphere, adorable romantic tone" },
                { ja: "恋するうるみ目", en: "soft lovestruck eyes, cute romantic sparkle" },
                { ja: "やさしい赤面", en: "soft blush, cute heart-eyed look" },
                { ja: "柔らかいハート演出", en: "cute heart particles, gentle affection glow" },
                { ja: "ロマンチックな可愛さ", en: "reduced cursed tone, stronger cute romance tone" }
              ]},
              { title: "🩵 本命 / 魅了抵抗中アレンジ", items: [
                { ja: "乱れた表情", en: "disturbed expression" },
                { ja: "潤んだ瞳", en: "watery eyes" },
                { ja: "震える口元", en: "trembling mouth" },
                { ja: "感情崩壊の兆し", en: "emotional breakdown" },
                { ja: "耐えようとする理性", en: "trying to endure, shaky breath, wavering composure" }
              ]},
              { title: "❤️ 深浸食・呪術侵食アレンジ", items: [
                { ja: "深浸食の呪われた愛情", en: "cursed affection, deeper enchantment sink" },
                { ja: "深部侵食の儀式光", en: "dark magical background, low-key ritual lighting, intimate cursed glow" },
                { ja: "魅了崩壊の湿度", en: "[Full-Face Blush:1.4], (Moist Eyes:1.2), damp skin shimmering beneath ritual light" },
                { ja: "深部まで侵す魅了熱", en: "flushed cheeks touched by arcane heat, unwilling enchantment" },
                { ja: "深い術式粒子", en: "drifting mana particles, heart particles:1.3" }
              ]},
              { title: "🩸 不穏系魅了・抗い崩壊アレンジ", items: [
                { ja: "噛みしめる抵抗表情", en: "restrained expression, clenched expression, biting lip" },
                { ja: "抗いで揺れる理性", en: "trying to endure, shaky breath, wavering composure" },
                { ja: "理性を裂く魅了熱", en: "breath unsteady beneath the pressure of the binding spell, fierce internal conflict under enchantment" },
                { ja: "壊れかけの感情線", en: "disturbed expression, emotional breakdown, tear-bright eyes" },
                { ja: "不穏な魅了残響", en: "unwilling enchantment, corrupted longing, entranced stare" }
              ]}
            ],
            settingGroups: [
              { title: "📿 魅了進行設定", items: [
                { ja: "呪文へ抗うほど熱を持つ", en: "flushed cheeks touched by arcane heat" },
                { ja: "抵抗で深まる魅了", en: "fierce internal conflict under enchantment" },
                { ja: "不本意な魅了の進行", en: "unwilling enchantment" },
                { ja: "呪われた愛情への変質", en: "corrupted longing" },
                { ja: "見つめるほど深まる支配", en: "entranced stare" }
              ]},
              { title: "🫀 首輪脈動・支配同期設定", items: [
                { ja: "首輪核の鼓動", en: "the collar’s beating core" },
                { ja: "首輪から広がる儀式光", en: "emitting ritual light from the collar itself" },
                { ja: "ホログラム術式の展開", en: "holographic sigil-lines unfolding from the collar" },
                { ja: "身体へ流れ込む同期波", en: "ritual synchronization etched into the neck" },
                { ja: "赤い魔力脈動", en: "veins of red mana-circuits pulsing around a crimson heartstone core" }
              ]},
              { title: "🩵 本命 / 抵抗崩れ設定", items: [
                { ja: "理性の縁で耐える", en: "a gaze torn between will and enchantment" },
                { ja: "崩れかけた感情制御", en: "disturbed expression, emotional breakdown" },
                { ja: "耐えるほど乱れる呼吸", en: "breath unsteady beneath the pressure of the binding spell" },
                { ja: "涙で揺れる抵抗", en: "watery eyes, tear-bright eyes" },
                { ja: "噛みしめる崩壊前夜", en: "trembling mouth, trying to endure" }
              ]},
              { title: "❤️ 深浸食 / 呪術侵食設定", items: [
                { ja: "深部まで沈む魅了", en: "deeper enchantment sink, entranced corrupted stare" },
                { ja: "呪われた愛情への沈降", en: "cursed affection, corrupted longing" },
                { ja: "深部儀式光の包囲", en: "dark magical background, low-key ritual lighting, intimate cursed glow" },
                { ja: "抗うほど侵食が進む", en: "fierce internal conflict under enchantment, unwilling enchantment" },
                { ja: "深浸食の胸核反応", en: "heartstone core reaction, crimson heartstone pulse" }
              ]},
              { title: "🩸 不穏系魅了 / 抗い崩壊設定", items: [
                { ja: "理性を裂く魅了の圧", en: "breath unsteady beneath the pressure of the binding spell, entranced stare" },
                { ja: "抗いで歪む口元", en: "clenched expression, biting lip, trembling mouth" },
                { ja: "空虚へ崩れる直前", en: "faintly vacant eyes, unfocused eyes" },
                { ja: "不穏に濁る感情", en: "unwilling enchantment, corrupted longing, emotional breakdown" },
                { ja: "抗い崩壊の汗と涙", en: "watery eyes, tear-bright eyes, sweat beading from the strain of resisting the spell" }
              ]}
            ],
            qualityPresetSectionTitle: "🧪 完成クオリティセット",
            qualityGroupsSectionTitle: "🎛 完成セット別クオリティ微調整",
            qualityPresets: [
              { title: "💗 可愛い系魅了用完成クオリティ", items: [
                { ja: "可愛い系の画質と光", en: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.4), (anime-realism blend:1.35), (semi-realistic rendering:1.2), (realistic lighting:1.25), (cinematic lighting:1.3), (ray tracing:1.25), (global illumination:1.25), (subsurface scattering:1.2), (cinematic portrait crop), (close-up upper body focus)" },
                { ja: "可愛い系の首輪と色", en: "wearing a cursed blacksteel charm collar tightly bound around her neck, ornamental locking ring, glowing pink-violet charm core, softly pulsing sigils, subtle magical glow around the collar, delicate arcane reflections near the throat" },
                { ja: "可愛い系の瞳と表情", en: "(Red glowing heart-shaped pupils:1.15), (Red glowing heart-shaped pupils:1.25), glassy moist eyes, tear-bright eyes, slightly unfocused gaze, soft blush, flushed cheeks, slightly parted lips, breath softly unsteady, shy but enchanted expression, a cute face gently melting under magical charm, sweet fascination, tender enchantment, visible charm effect in her eyes" },
                { ja: "可愛い系の仕上げ", en: "soft magical atmosphere, romantic cursed glow, cute enchanted mood" }
              ]},
              { title: "❤️ ガチ魅了状態用完成クオリティ", items: [
                { ja: "ガチ魅了の瞳孔", en: "glowing red heart-shaped pupils, crimson eyeball illumination, arcane heart sigils in the eyes" },
                { ja: "ガチ魅了の顔面", en: "[Full-Face Blush:1.4], (Moist Eyes:1.2), trembling lips, tear-bright eyes, damp skin shimmering beneath ritual light" },
                { ja: "ガチ魅了の空気", en: "entranced corrupted stare, cursed affection, faintly vacant eyes, intimate cursed glow" },
                { ja: "ガチ魅了の仕上げ", en: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.4), (cinematic lighting:1.4), (ray tracing:1.3), (subsurface scattering:1.3), (global illumination:1.3), (volumetric lighting:1.3)" }
              ]},
              { title: "🖤 不穏系魅了用完成クオリティ", items: [
                { ja: "不穏系の画質と闇", en: "(Masterpiece:1.5), (Premium Quality:1.5), (Ultra High Definition:1.5), (Fusion of Animation and Realism:1.3), (Hyper-Realistic Rendering:1.25), (Arcane Domination:1.4), (Hollow Eyes:1.45), (Cinematic Lighting:1.35), (Soft Ambient Light:1.2), (Volumetric Lighting:1.3), (Cursed, Eerie Aura:1.3)" },
                { ja: "不穏系の首輪と瞳", en: "wearing a collar forged from enchanted blacksteel, embedded with a dark ritual core glowing crimson-purple, ominous sigil-lines pulsing around the collar, runic tendrils spreading into the neck and collarbone, (Red glowing heart-shaped pupils:1.25), (Red glowing heart-shaped pupils:1.35), crimson eyeball illumination, eyes casting a dim cursed red shine" },
                { ja: "不穏系の表情崩壊", en: "disturbed expression, watery eyes, trembling mouth, emotional breakdown, trying to endure, restrained expression, clenched expression, shaky breath, wavering composure, faintly vacant eyes, fear mixed with attraction, unwilling fascination, ominous magical pressure" },
                { ja: "不穏系の仕上げ", en: "(Moist Eyes:1.2), (No Pupil Glow:1.2), (No Pupil Highlight:1.2), (Glassy Sensual Eyes:1.2), low-key ritual lighting, dark magical background, reduced bright idol lighting, close-up face focus" }
              ]},
              { title: "🩵 魅了抵抗中用完成クオリティ", items: [
                { ja: "画質と材質", en: "(Masterpiece:1.5), (Premium Quality:1.5), (Ultra High Definition:1.5), (8K, UHD, IMAX Grade), (Fusion of Animation and Realism:1.3), (Hyper-Realistic Rendering:1.3), (Cinematic Lighting:1.4), (Soft Ambient Light:1.3), (Global Illumination via Ray Tracing), (Top-Down Angle:1.3), (Dramatic Sense of Depth), (Volumetric Lighting:1.3), (High Dynamic Range, drifting mana particles, ethereal sky diffusion)" },
                { ja: "首輪と術式", en: "wearing a collar forged from enchanted blacksteel, set with a purple amethyst burning with inner arcane fire, veins of red mana-circuits pulsing around a crimson core, emitting ritual light from its heartstone, holographic sigil-lines unfolding like silent incantations, engraved with an ancient control crest, locking mechanism exposed, runic tendrils inscribed with ancient sigils, merging at the base of the neck, fusing with the wearer’s mana-flow, resonating with the collar’s pulse" },
                { ja: "抗う顔面描写", en: "(Red glowing heart-shaped pupils:1.3), (Red glowing heart-shaped pupils:1.4), reflective luminous pupils, neon-like inner glimmer, crimson eyeball illumination, eyes casting a deep red shine synchronized with the collar’s beating core, a faint red aura enveloping both eyes and the collar, subtle sigil-patterns glowing on the cheeks, flushed cheeks touched by arcane heat, sweat beading from the strain of resisting the spell, damp skin shimmering beneath ritual light, an expression of fierce internal conflict, trembling lips, tear-bright eyes, [Full-Face Blush:1.4], a gaze torn between will and enchantment, breath unsteady beneath the pressure of the binding spell, disturbed expression, watery eyes, trembling mouth, emotional breakdown, trying to endure, wavering composure, restrained expression, clenched expression" },
                { ja: "仕上げ", en: "(Moist Eyes:1.2), (Half-Open Eyes:1.2), a beautiful maiden's face with faintly vacant eyes, (No Pupil Glow:1.2), (No Pupil Highlight:1.2), (Glassy Sensual Eyes:1.2), close-up face focus" }
              ]},
              { title: "❤️ ガチ魅了状態・深浸食用完成クオリティ", items: [
                { ja: "画質とレンダリング", en: "(anime-realism blend:1.4), (semi-realistic rendering:1.2), (physically based rendering:1.3), (lumen reflections:1.2), (nanite geometry:1.1), (realistic lighting:1.2), (shiny hair:1.4), (glossy hair:1.4), (specular sharp highlights:1.3), (high contrast specular edges:1.3), (strong rim lighting:1.4), (backlight glow:1.3), (light wrapping around body:1.3), (separate material response), (different reflectivity for skin and clothing), (glossy coated fabric:1.4), (mirror-like costume highlights:1.3), (light particles in air), (stage-like luminous background), (cinematic portrait crop), (close-up upper body focus), (Kodak Portra 400), (low contrast)" },
                { ja: "深浸食の暗部光", en: "(Red glowing heart-shaped pupils:1.4), arcane heart sigils in the eyes, collar-linked eye glow, (low-key ritual lighting:1.35), dark magical background, reduced stage glow, reduced bright idol lighting" },
                { ja: "深浸食の顔面描写", en: "[Full-Face Blush:1.4], (Moist Eyes:1.2), trembling lips, tear-bright eyes, damp skin shimmering beneath ritual light, close-up face focus, glowing red heart-shaped pupils, crimson eyeball illumination, entranced corrupted stare, cursed affection, faintly vacant eyes, intimate cursed glow, disturbed expression, watery eyes, trembling mouth, emotional breakdown" },
                { ja: "深浸食の仕上げ", en: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.4), (cinematic lighting:1.4), (ray tracing:1.3), (subsurface scattering:1.3), (global illumination:1.3), (unreal engine 5:1.2), (octane render:1.2), (volumetric lighting:1.3), (spark-like bokeh lights)" }
              ]},
              { title: "🩸 不穏系魅了・抗い崩壊用完成クオリティ", items: [
                { ja: "画質と光", en: "(Masterpiece:1.5), (Premium Quality:1.5), (Ultra High Definition:1.5), (8K, UHD, IMAX Grade), (Fusion of Animation and Realism:1.3), (Hyper-Realistic Rendering:1.25), (Arcane Domination:1.4), (Hollow Eyes:1.45), (Cinematic Lighting:1.35), (Soft Ambient Light:1.2), (Global Illumination via Ray Tracing), (Dramatic Sense of Depth), (Volumetric Lighting:1.3), (Cursed, Eerie Aura:1.3), (High Dynamic Range, drifting mana particles, ethereal sky diffusion)" },
                { ja: "不穏魅了の首輪と瞳", en: "wearing a collar forged from enchanted blacksteel, embedded with a dark ritual core glowing crimson-purple, engraved with an ancient control crest, locking mechanism exposed, ominous sigil-lines pulsing around the collar, runic tendrils spreading into the neck and collarbone, fusing with the wearer’s mana-flow against her will, (Red glowing heart-shaped pupils:1.25), (Red glowing heart-shaped pupils:1.35), crimson eyeball illumination, reflective luminous pupils, eyes casting a dim cursed red shine, a faint red aura enveloping both eyes and the collar, subtle sigil-patterns glowing on the cheeks" },
                { ja: "崩壊寸前の表情", en: "flushed cheeks touched by arcane heat, sweat beading from the strain of resisting the spell, tear-bright eyes, trembling lips, [Full-Face Blush:1.4], a gaze torn between will and enchantment, disturbed expression, watery eyes, trembling mouth, emotional breakdown, trying to endure, restrained expression, clenched expression, shaky breath, wavering composure, faintly vacant eyes, fear mixed with attraction, unwilling fascination, ominous magical pressure" },
                { ja: "仕上げ", en: "(Moist Eyes:1.2), a beautiful maiden's face with faintly vacant eyes, (No Pupil Glow:1.2), (No Pupil Highlight:1.2), (Glassy Sensual Eyes:1.2), low-key ritual lighting, dark magical background, reduced bright idol lighting, close-up face focus" }
              ]},
            ],
            qualityGroups: [
              { title: "💗 可愛い系魅了用クオリティ調整", items: [
                { ja: "可愛いハート瞳", en: "cute sparkling heart-shaped pupils, moist romantic eyes with soft heart highlights" },
                { ja: "恋色のうるみ", en: "watery eyes, soft lovestruck eyes, cute romantic sparkle" },
                { ja: "やさしい赤面", en: "soft blush, flushed cheeks, slightly parted lips" },
                { ja: "ロマンチックな光", en: "soft magical atmosphere, romantic cursed glow, sweet heart-themed atmosphere" }
              ]},
              { title: "❤️ ガチ魅了状態用クオリティ調整", items: [
                { ja: "ガチ魅了の瞳孔", en: "glowing red heart-shaped pupils, crimson eyeball illumination, arcane heart sigils in the eyes" },
                { ja: "ガチ魅了の熱", en: "[Full-Face Blush:1.4], trembling lips, tear-bright eyes, breath unsteady beneath the pressure of the binding spell" },
                { ja: "ガチ魅了の気配", en: "entranced corrupted stare, cursed affection, intimate cursed glow" },
                { ja: "ガチ魅了のレンダリング", en: "(cinematic lighting:1.4), (ray tracing:1.3), (subsurface scattering:1.3), (global illumination:1.3)" }
              ]},
              { title: "🖤 不穏系魅了用クオリティ調整", items: [
                { ja: "不穏な目", en: "faintly vacant eyes, unfocused eyes, watery eyes, tear-bright eyes" },
                { ja: "抗う表情", en: "disturbed expression, restrained expression, clenched expression, biting lip" },
                { ja: "崩れかけの理性", en: "trying to endure, shaky breath, wavering composure, emotional breakdown" },
                { ja: "不穏な呪術光", en: "low-key ritual lighting, dark magical background, intimate cursed glow, unwilling enchantment" }
              ]},
              { title: "🩵 魅了抵抗中用クオリティ調整", items: [
                { ja: "抗い崩れ顔", en: "disturbed expression, watery eyes, trembling mouth, emotional breakdown" },
                { ja: "理性を保つ抵抗", en: "trying to endure, shaky breath, wavering composure" },
                { ja: "顔面の湿度", en: "[Full-Face Blush:1.4], (Moist Eyes:1.2), tear-bright eyes" },
                { ja: "術に抗う熱", en: "a gaze torn between will and enchantment, breath unsteady beneath the pressure of the binding spell" }
              ]},
              { title: "❤️ ガチ魅了状態・深浸食用クオリティ調整", items: [
                { ja: "深浸食の瞳孔", en: "glowing red heart-shaped pupils, crimson eyeball illumination, arcane heart sigils in the eyes" },
                { ja: "深浸食の空気", en: "dark magical background, low-key ritual lighting, intimate cursed glow" },
                { ja: "呪われた愛情", en: "entranced corrupted stare, cursed affection, faintly vacant eyes" },
                { ja: "重いレンダリング", en: "(ray tracing:1.3), (subsurface scattering:1.3), (global illumination:1.3), (volumetric lighting:1.3), (unreal engine 5:1.2), (octane render:1.2)" }
              ]},
              { title: "🩸 不穏系魅了・抗い崩壊用クオリティ調整", items: [
                { ja: "抗いで歪む顔", en: "restrained expression, clenched expression, biting lip, disturbed expression" },
                { ja: "崩壊寸前の目", en: "watery eyes, tear-bright eyes, unfocused eyes, faintly vacant eyes" },
                { ja: "不穏魅了の熱", en: "cursed affection, intimate cursed glow, breath unsteady beneath the pressure of the binding spell" },
                { ja: "赤面と湿度", en: "[Full-Face Blush:1.4], damp skin shimmering beneath ritual light, sweat beading from the strain of resisting the spell" }
              ]}
            ]
          
          },{
            title: "🪬 呪印・刻印露出特化コレクション",
            description: "衣装の裂け目、透け、発光、肌へ走る呪印と刻印を主役にして“露出そのものが術式化している状態”を深掘りする専用コレクション",
            presets: [
              { title: "🔥 呪印露出・抗いセット", items: [
                { ja: "胸元に走る発光呪印", en: "glowing curse sigils running across the chest" },
                { ja: "腹部へ浮かぶ術式刻印", en: "arcane seal appearing across the abdomen" },
                { ja: "透けた衣装の切れ目", en: "slit translucent outfit exposing marked skin" },
                { ja: "抗いで乱れる視線", en: "disturbed resisting stare under glowing curse marks" }
              ]},
              { title: "💜 呪印侵食・快堕ちセット", items: [
                { ja: "肌へ沈む侵食呪印", en: "corrupting curse marks sinking into the skin" },
                { ja: "下腹部へ広がる発光刻印", en: "glowing engraved sigils spreading across the lower abdomen" },
                { ja: "濡れた透け布", en: "wet translucent cloth clinging over marked skin" },
                { ja: "快堕ちへ沈む表情", en: "melting expression sinking into cursed pleasure" }
              ]},
              { title: "✝️ 神聖刻印・背徳化セット", items: [
                { ja: "神聖紋が堕ちて滲む", en: "holy sigils falling into profane glowing corruption" },
                { ja: "白布の裂け目から見える刻印", en: "engraved marks revealed through torn white ritual cloth" },
                { ja: "祈祷具と術式輪", en: "ritual implements and luminous ceremonial sigil rings" },
                { ja: "背徳に揺れる巫女表情", en: "sacred maiden expression wavering into forbidden corruption" }
              ]}
            ],
            baseGroups: [
              { title: "👗 露出衣装の土台", items: [
                { ja: "透けた衣装の切れ目", en: "slit translucent outfit exposing marked skin" },
                { ja: "白布の裂け目から見える刻印", en: "engraved marks revealed through torn white ritual cloth" },
                { ja: "濡れた透け布", en: "wet translucent cloth clinging over marked skin" },
                { ja: "胸元に走る発光呪印", en: "glowing curse sigils running across the chest" },
                { ja: "腹部へ浮かぶ術式刻印", en: "arcane seal appearing across the abdomen" },
                { ja: "下腹部へ広がる発光刻印", en: "glowing engraved sigils spreading across the lower abdomen" }
              ]},
              { title: "🪬 呪印・刻印の核", items: [
                { ja: "肌へ沈む侵食呪印", en: "corrupting curse marks sinking into the skin" },
                { ja: "神聖紋が堕ちて滲む", en: "holy sigils falling into profane glowing corruption" },
                { ja: "首筋へ浮かぶ所有刻印", en: "ownership sigils glowing along the neck" },
                { ja: "太腿へ走る契約紋", en: "contract marks running along the thigh" },
                { ja: "乳下へ沿う連鎖刻印", en: "linked sigils tracing beneath the bust" },
                { ja: "腰骨を縁取る呪術紋", en: "curse markings framing the hip line" }
              ]}
            ],
            customizeGroups: [
              { title: "💡 発光・透け・裂けアレンジ", items: [
                { ja: "透け布越しに浮かぶ発光紋", en: "glowing sigils visible through translucent cloth" },
                { ja: "裂け目から漏れる術式光", en: "arcane light leaking through torn openings" },
                { ja: "発光縁で強調された切れ目", en: "slits emphasized by glowing edges" },
                { ja: "肌と布の境界で滲む呪印", en: "curse marks bleeding across the border between skin and cloth" },
                { ja: "発光密度の高い腹部刻印", en: "dense glowing sigils concentrated over the abdomen" }
              ]},
              { title: "😳 感情・堕ち方アレンジ", items: [
                { ja: "抗いで乱れる視線", en: "disturbed resisting stare under glowing curse marks" },
                { ja: "快堕ちへ沈む表情", en: "melting expression sinking into cursed pleasure" },
                { ja: "背徳に揺れる巫女表情", en: "sacred maiden expression wavering into forbidden corruption" },
                { ja: "刻印熱で崩れる赤面", en: "full-face blush caused by glowing curse heat" },
                { ja: "濡れた瞳と震える口元", en: "watery eyes and trembling mouth under ritual exposure" }
              ]}
            ],
            settingGroups: [
              { title: "⚙️ 呪印進行・露出設定", items: [
                { ja: "露出そのものが術式化する", en: "the exposed skin itself behaves like an active ritual surface" },
                { ja: "刻印が熱を持って脈打つ", en: "engraved sigils throb with heated arcane pulses" },
                { ja: "衣装と肌が一体化して侵食する", en: "cloth and skin merging into one cursed invasive surface" },
                { ja: "見えるほど堕ちていく羞恥", en: "visible exposure deepening shame and corruption" },
                { ja: "術式輪が身体を囲って支配する", en: "ceremonial sigil rings surrounding the body in ritual control" },
                { ja: "祈祷具と術式輪", en: "ritual implements and luminous ceremonial sigil rings" }
              ]}
            ],
            qualityPresets: [
              { title: "🔥 呪印露出・抗い用完成クオリティ", items: [
                { ja: "発光呪印の視認性を上げる", en: "glowing curse marks clearly readable across exposed skin" },
                { ja: "肌と布の質感差を強める", en: "strong separation between bare skin sheen and fabric texture" },
                { ja: "透け布の縁光を強める", en: "glowing edge light through translucent cloth slits" },
                { ja: "露出と刻印の焦点を寄せる", en: "focus composition on exposed marked skin and torn openings" }
              ]},
              { title: "💜 呪印侵食・快堕ち用完成クオリティ", items: [
                { ja: "発光呪印の視認性を上げる", en: "glowing curse marks clearly readable across exposed skin" },
                { ja: "肌と布の質感差を強める", en: "strong separation between bare skin sheen and fabric texture" },
                { ja: "儀式寄りの暗部光", en: "low-key ritual lighting with ominous curse glow" },
                { ja: "呪印熱の赤面を強める", en: "enhanced blush and heated skin under glowing sigils" }
              ]},
              { title: "✝️ 神聖刻印・背徳化用完成クオリティ", items: [
                { ja: "儀式寄りの暗部光", en: "low-key ritual lighting with ominous curse glow" },
                { ja: "神聖布と堕ちた刻印の対比", en: "strong contrast between sacred cloth and profane glowing marks" },
                { ja: "肌と布の質感差を強める", en: "strong separation between bare skin sheen and fabric texture" },
                { ja: "露出と刻印の焦点を寄せる", en: "focus composition on exposed marked skin and torn openings" }
              ]}
            ],
            qualityGroups: [
              { title: "🪬 呪印・刻印露出用クオリティ調整", items: [
                { ja: "発光呪印の視認性を上げる", en: "glowing curse marks clearly readable across exposed skin" },
                { ja: "肌と布の質感差を強める", en: "strong separation between bare skin sheen and fabric texture" },
                { ja: "透け布の縁光を強める", en: "glowing edge light through translucent cloth slits" },
                { ja: "儀式寄りの暗部光", en: "low-key ritual lighting with ominous curse glow" },
                { ja: "露出と刻印の焦点を寄せる", en: "focus composition on exposed marked skin and torn openings" },
                { ja: "神聖布と堕ちた刻印の対比", en: "strong contrast between sacred cloth and profane glowing marks" },
                { ja: "呪印熱の赤面を強める", en: "enhanced blush and heated skin under glowing sigils" }
              ]}
            ]
          },

          {
            title: "🧬 生体スーツ・拘束スーツ特化コレクション",
            description: "ぴっちり密着する生体スーツ、拘束構造、発光ライン、半侵食の境界を主役にして“衣装そのものが支配装置へ変質していく状態”を深掘りする専用コレクション",
            presets: [
              { title: "⛓ 密着拘束スーツセット", items: [
                { ja: "ぴっちり密着する黒い拘束スーツ", en: "skin-tight black restraint suit tightly hugging the body" },
                { ja: "胸部と腰部を締める拘束構造", en: "restraint structures cinching the bust and waist" },
                { ja: "継ぎ目が食い込む密着圧", en: "seam pressure biting into the skin" },
                { ja: "拘束に抗う乱れ顔", en: "disturbed face resisting tight restraint" }
              ]},
              { title: "🫧 半侵食バイオスーツセット", items: [
                { ja: "生体質感の半侵食スーツ", en: "semi-invasive bio-suit with living surface texture" },
                { ja: "首筋と脇腹へ走る発光ライン", en: "glowing lines running along the neck and flanks" },
                { ja: "肌と融合しかけた継ぎ目", en: "seams half-fused into the skin" },
                { ja: "侵食に揺らぐ表情", en: "wavering expression under creeping invasion" }
              ]},
              { title: "📡 命令受信スーツセット", items: [
                { ja: "命令波を流す発光コア", en: "glowing command core transmitting control pulses" },
                { ja: "神経へ沿う制御ライン", en: "control lines tracing along the nerves" },
                { ja: "従属姿勢を強いる装甲拘束", en: "armored restraint forcing submissive posture" },
                { ja: "命令に抗う視線", en: "gaze struggling against imposed commands" }
              ]}
            ],
            baseGroups: [
              { title: "🖤 密着スーツの土台", items: [
                { ja: "ぴっちり密着する黒い拘束スーツ", en: "skin-tight black restraint suit tightly hugging the body" },
                { ja: "生体質感の半侵食スーツ", en: "semi-invasive bio-suit with living surface texture" },
                { ja: "薄膜ラバーの密着表面", en: "membrane-like rubber surface clinging to the body" },
                { ja: "拘束に使われる装甲布", en: "armored fabric built for restraint" },
                { ja: "胸部と腰部を締める拘束構造", en: "restraint structures cinching the bust and waist" },
                { ja: "従属姿勢を強いる装甲拘束", en: "armored restraint forcing submissive posture" }
              ]},
              { title: "🧬 発光ライン・侵食核", items: [
                { ja: "首筋と脇腹へ走る発光ライン", en: "glowing lines running along the neck and flanks" },
                { ja: "神経へ沿う制御ライン", en: "control lines tracing along the nerves" },
                { ja: "命令波を流す発光コア", en: "glowing command core transmitting control pulses" },
                { ja: "肌と融合しかけた継ぎ目", en: "seams half-fused into the skin" },
                { ja: "継ぎ目が食い込む密着圧", en: "seam pressure biting into the skin" },
                { ja: "皮膚下で脈打つ侵食ライン", en: "invasive lines pulsing beneath the skin" }
              ]}
            ],
            customizeGroups: [
              { title: "✨ 発光・継ぎ目アレンジ", items: [
                { ja: "発光密度の高い胸部ライン", en: "dense luminous lines concentrated over the chest" },
                { ja: "腹部で分岐する制御紋", en: "control sigils branching across the abdomen" },
                { ja: "継ぎ目から漏れる光", en: "light leaking out from the seams" },
                { ja: "食い込みを強調する縁取り", en: "accent lines emphasizing pressure and indentation" },
                { ja: "半透明スーツ越しに見える脈動", en: "visible pulsing seen through translucent suit material" }
              ]},
              { title: "😳 拘束・侵食アレンジ", items: [
                { ja: "拘束に抗う乱れ顔", en: "disturbed face resisting tight restraint" },
                { ja: "侵食に揺らぐ表情", en: "wavering expression under creeping invasion" },
                { ja: "命令に抗う視線", en: "gaze struggling against imposed commands" },
                { ja: "圧迫で乱れる呼吸", en: "uneven breathing under constricting pressure" },
                { ja: "密着熱で崩れる赤面", en: "full-face blush caused by invasive suit heat" }
              ]}
            ],
            settingGroups: [
              { title: "⚙️ 侵食・拘束進行設定", items: [
                { ja: "衣装そのものが支配装置化する", en: "the suit itself behaves like an active control device" },
                { ja: "半侵食が皮膚境界を越える", en: "semi-invasive material crossing the boundary of the skin" },
                { ja: "発光ラインが命令に同期する", en: "glowing lines synchronizing with transmitted commands" },
                { ja: "密着圧で従属姿勢へ矯正される", en: "body posture forced into submission by constricting pressure" },
                { ja: "継ぎ目の脈動が感情を乱す", en: "pulsing seams disturbing breath and emotion" },
                { ja: "拘束熱が理性を削る", en: "restraint heat gradually eroding composure" }
              ]}
            ],
            qualityPresets: [
              { title: "⛓ 密着拘束スーツ用完成クオリティ", items: [
                { ja: "密着圧の立体感を強める", en: "strong dimensional emphasis on tight restraint pressure" },
                { ja: "スーツ光沢と肌質感を分ける", en: "clear separation between glossy suit material and skin texture" },
                { ja: "継ぎ目の食い込みを見せる", en: "seam indentation clearly visible against the body" },
                { ja: "拘束点へ視線を寄せる", en: "focus composition on restraint points and pressure zones" }
              ]},
              { title: "🫧 半侵食バイオスーツ用完成クオリティ", items: [
                { ja: "侵食ラインの脈動を強める", en: "enhanced pulsing of invasive luminous lines" },
                { ja: "肌と生体素材の融合感を強める", en: "strong fusion between living suit material and skin" },
                { ja: "半透明越しの脈動を見せる", en: "visible pulsing beneath translucent bio-material" },
                { ja: "低照度で侵食光を際立たせる", en: "low-key lighting emphasizing invasive glow" }
              ]},
              { title: "📡 命令受信スーツ用完成クオリティ", items: [
                { ja: "命令コアの視認性を上げる", en: "command core clearly visible as the control source" },
                { ja: "神経ラインを身体へ沿わせる", en: "control lines tracing naturally along the body" },
                { ja: "拘束構造と装甲感を強める", en: "stronger restraint structure and armored tension" },
                { ja: "支配命令の圧を暗部光で見せる", en: "ominous low-key lighting emphasizing imposed control" }
              ]}
            ],
            qualityGroups: [
              { title: "🧬 生体スーツ・拘束スーツ用クオリティ調整", items: [
                { ja: "密着圧の立体感を強める", en: "strong dimensional emphasis on tight restraint pressure" },
                { ja: "スーツ光沢と肌質感を分ける", en: "clear separation between glossy suit material and skin texture" },
                { ja: "継ぎ目の食い込みを見せる", en: "seam indentation clearly visible against the body" },
                { ja: "侵食ラインの脈動を強める", en: "enhanced pulsing of invasive luminous lines" },
                { ja: "肌と生体素材の融合感を強める", en: "strong fusion between living suit material and skin" },
                { ja: "半透明越しの脈動を見せる", en: "visible pulsing beneath translucent bio-material" },
                { ja: "命令コアの視認性を上げる", en: "command core clearly visible as the control source" },
                { ja: "支配命令の圧を暗部光で見せる", en: "ominous low-key lighting emphasizing imposed control" }
              ]}
            ]
          }
,
          {
            title: "⛩ 儀式巫女・堕ち神官特化コレクション",
            description: "清儀の巫女装束、堕ちた神官衣、裂けた神聖布、祭具、術式、祈りと背徳が混ざる“神聖が崩れ落ちる瞬間”を衣装主役で深掘りする専用コレクション",
            presets: [
              { title: "🤍 清儀の巫女・抗いセット", items: [
                { ja: "白と朱を基調にした儀式巫女装束", en: "ritual shrine maiden attire in white and crimson" },
                { ja: "神聖布の裂け目から覗く刻印肌", en: "marked skin revealed through torn sacred cloth" },
                { ja: "祈りを崩さず抗う乱れ顔", en: "disturbed face struggling to maintain prayerful composure" },
                { ja: "周囲を巡る薄い神聖術式輪", en: "faint sacred ritual circles orbiting around her" }
              ]},
              { title: "🖤 堕ち神官・背徳化セット", items: [
                { ja: "黒と金を基調にした堕ち神官衣", en: "fallen cleric attire in black and gold" },
                { ja: "胸元へ浮かぶ背徳の神印", en: "profane holy sigils glowing across the chest" },
                { ja: "神聖意匠が堕ちて変質した装飾", en: "sacred ornaments corrupted into profane regalia" },
                { ja: "堕ちに抗う揺らいだ表情", en: "wavering expression resisting corrupted devotion" }
              ]},
              { title: "🕯 儀式供物・神聖崩落セット", items: [
                { ja: "供物めいた儀式衣装", en: "ritual offering-like ceremonial attire" },
                { ja: "肌へ落ちる術式の光片", en: "falling ritual light fragments touching the skin" },
                { ja: "崩れた祈り顔と汗ばむ肌", en: "broken prayerful face with damp skin" },
                { ja: "祭壇光に照らされた神聖崩落", en: "holy collapse illuminated by altar light" }
              ]}
            ],
            baseGroups: [
              { title: "👘 神聖衣装の土台", items: [
                { ja: "白と朱を基調にした儀式巫女装束", en: "ritual shrine maiden attire in white and crimson" },
                { ja: "黒と金を基調にした堕ち神官衣", en: "fallen cleric attire in black and gold" },
                { ja: "供物めいた儀式衣装", en: "ritual offering-like ceremonial attire" },
                { ja: "胸元が裂けた神聖衣装", en: "sacred garment torn open at the chest" },
                { ja: "透ける薄布を重ねた祭服", en: "ceremonial robes layered with translucent sacred veils" },
                { ja: "崩れかけた清浄な装束シルエット", en: "pure ceremonial silhouette beginning to collapse" }
              ]},
              { title: "✝️ 刻印・祭具・術式核", items: [
                { ja: "神聖布の裂け目から覗く刻印肌", en: "marked skin revealed through torn sacred cloth" },
                { ja: "胸元へ浮かぶ背徳の神印", en: "profane holy sigils glowing across the chest" },
                { ja: "周囲を巡る薄い神聖術式輪", en: "faint sacred ritual circles orbiting around her" },
                { ja: "肌へ落ちる術式の光片", en: "falling ritual light fragments touching the skin" },
                { ja: "数珠・聖印・祭具装飾", en: "prayer beads, holy emblems, and ritual instrument ornaments" },
                { ja: "神聖意匠が堕ちて変質した装飾", en: "sacred ornaments corrupted into profane regalia" }
              ]}
            ],
            customizeGroups: [
              { title: "✨ 裂け・透け・発光アレンジ", items: [
                { ja: "裂け目から覗く肌を強調する", en: "emphasize exposed skin glimpsed through torn openings" },
                { ja: "薄布越しに刻印光を透かす", en: "show glowing sigils through translucent ritual fabric" },
                { ja: "祭壇光で神聖布を透けさせる", en: "altar light shining through sacred cloth" },
                { ja: "胸元印の発光を主役にする", en: "make the glowing chest sigil the visual centerpiece" },
                { ja: "背徳化した金装飾を増やす", en: "increase corrupted gold ceremonial ornaments" }
              ]},
              { title: "😳 祈り・堕ち・抗いアレンジ", items: [
                { ja: "祈りを崩さず抗う乱れ顔", en: "disturbed face struggling to maintain prayerful composure" },
                { ja: "堕ちに抗う揺らいだ表情", en: "wavering expression resisting corrupted devotion" },
                { ja: "崩れた祈り顔と汗ばむ肌", en: "broken prayerful face with damp skin" },
                { ja: "信仰と背徳の間で震える唇", en: "trembling lips caught between faith and corruption" },
                { ja: "神聖さを保とうとして崩れる目線", en: "faltering gaze trying to preserve sacred dignity" }
              ]}
            ],
            settingGroups: [
              { title: "⚙️ 儀式進行・堕ち設定", items: [
                { ja: "祈りの最中に神聖衣装が崩れ始める", en: "sacred attire beginning to collapse in the middle of prayer" },
                { ja: "術式光が衣装と肌の境界を侵す", en: "ritual light eroding the boundary between garment and skin" },
                { ja: "神聖意匠が背徳意匠へ変質する", en: "sacred motifs transforming into profane ornamentation" },
                { ja: "祭壇の光が堕落を照らし出す", en: "altar light revealing holy corruption" },
                { ja: "信仰を守ろうとして理性が揺らぐ", en: "composure wavering while trying to cling to faith" },
                { ja: "供物化した衣装が儀式の中心になる", en: "the offering-like ceremonial attire becoming the ritual focal point" }
              ]}
            ],
            qualityPresets: [
              { title: "🤍 清儀の巫女用完成クオリティ", items: [
                { ja: "白布と肌の透け感を丁寧に出す", en: "careful translucency between white ritual cloth and skin" },
                { ja: "清浄な祭壇光を柔らかく当てる", en: "soft altar lighting over the pure ceremonial costume" },
                { ja: "裂けた神聖布と赤面の対比を強める", en: "strong contrast between torn sacred cloth and heated blush" },
                { ja: "祈り顔へ焦点を寄せる", en: "focus tightly on the prayerful resisting face" }
              ]},
              { title: "🖤 堕ち神官用完成クオリティ", items: [
                { ja: "黒金衣装と背徳光を強める", en: "emphasize black-and-gold attire with profane luminous accents" },
                { ja: "胸元印を明確に見せる", en: "make the glowing chest sigil clearly visible" },
                { ja: "低照度で堕落の艶を出す", en: "low-key lighting emphasizing fallen sacred glamour" },
                { ja: "背徳化した装飾の重量感を出す", en: "strong visual weight in corrupted ceremonial ornaments" }
              ]},
              { title: "🕯 儀式供物用完成クオリティ", items: [
                { ja: "術式輪と供物衣装の一体感を強める", en: "strong integration of ritual circles and offering attire" },
                { ja: "祭壇光の逆光を強める", en: "strong altar backlight and ritual glow" },
                { ja: "汗と熱を神聖崩落の演出にする", en: "use sweat and heat as part of the sacred collapse" },
                { ja: "儀式中心に置かれた感を強調する", en: "emphasize the subject being placed at the ritual center" }
              ]}
            ],
            qualityGroups: [
              { title: "⛩ 儀式巫女・堕ち神官用クオリティ調整", items: [
                { ja: "白布と肌の透け感を丁寧に出す", en: "careful translucency between white ritual cloth and skin" },
                { ja: "清浄な祭壇光を柔らかく当てる", en: "soft altar lighting over the pure ceremonial costume" },
                { ja: "黒金衣装と背徳光を強める", en: "emphasize black-and-gold attire with profane luminous accents" },
                { ja: "胸元印を明確に見せる", en: "make the glowing chest sigil clearly visible" },
                { ja: "術式輪と供物衣装の一体感を強める", en: "strong integration of ritual circles and offering attire" },
                { ja: "祭壇光の逆光を強める", en: "strong altar backlight and ritual glow" },
                { ja: "裂けた神聖布と赤面の対比を強める", en: "strong contrast between torn sacred cloth and heated blush" },
                { ja: "信仰と背徳の落差を見せる", en: "show a strong contrast between sanctity and profane collapse" }
              ]}
            ]
          },

          {
            title: "🐉 淫紋チャイナ・呪術ドレス特化コレクション",
            description: "チャイナ服や呪術ドレスを主役に、発光する淫紋、裂けた布地、宮廷的装飾、呪術意匠を絡めて“華やかさと背徳が同居するR-18衣装”を深掘りする専用コレクション",
            presets: [
              { title: "🀄 淫紋チャイナ・抗いセット", items: [
                { ja: "深紅のスリットチャイナドレス", en: "crimson slit qipao dress" },
                { ja: "首筋と腹部へ浮かぶ発光淫紋", en: "glowing lust sigils appearing on the neck and abdomen" },
                { ja: "裾と胸元が乱れた戦いの痕", en: "disturbed hem and bustline showing signs of struggle" },
                { ja: "理性を保とうとする乱れ顔", en: "disturbed face trying to preserve composure" }
              ]},
              { title: "👗 呪術ドレス・快堕ちセット", items: [
                { ja: "黒と紫の呪術ドレス", en: "black and violet cursed ritual dress" },
                { ja: "胸元から広がる発光淫紋", en: "luminous lust sigils spreading from the chest" },
                { ja: "透ける布越しに見える侵食紋", en: "invasive sigils visible through translucent fabric" },
                { ja: "快楽に揺らぐ恍惚顔", en: "entranced expression wavering under pleasure" }
              ]},
              { title: "🏯 宮廷妖艶・背徳セット", items: [
                { ja: "金刺繍の宮廷チャイナドレス", en: "palatial qipao dress with gold embroidery" },
                { ja: "太腿と鎖骨を走る紅い呪紋", en: "red cursed markings running along the thigh and collarbone" },
                { ja: "宝飾と呪術が融合した胸飾り", en: "ornamented chest jewel fused with arcane magic" },
                { ja: "高貴さの奥で揺らぐ背徳の笑み", en: "forbidden smile wavering beneath noble poise" }
              ]},
              { title: "🌙 月下妖紋チャイナセット", items: [
                { ja: "金刺繍の宮廷チャイナドレス", en: "palatial qipao dress with gold embroidery" },
                { ja: "太腿と鎖骨を走る紅い呪紋", en: "red cursed markings running along the thigh and collarbone" },
                { ja: "羞恥と妖艶が混ざる視線", en: "gaze mixing shame with seductive corruption" },
                { ja: "高貴さの奥で揺らぐ背徳の笑み", en: "forbidden smile wavering beneath noble poise" }
              ]},
              { title: "🦋 薄絹透け呪術ドレスセット", items: [
                { ja: "黒と紫の呪術ドレス", en: "black and violet cursed ritual dress" },
                { ja: "透け感のある薄布レイヤー", en: "light translucent fabric layers" },
                { ja: "透ける布越しに見える侵食紋", en: "invasive sigils visible through translucent fabric" },
                { ja: "布越しの発光紋を見せる", en: "show glowing markings through the fabric" }
              ]},
              { title: "👑 宮廷堕華ドレスセット", items: [
                { ja: "金刺繍の宮廷チャイナドレス", en: "palatial qipao dress with gold embroidery" },
                { ja: "宝飾と呪術が融合した胸飾り", en: "ornamented chest jewel fused with arcane magic" },
                { ja: "高貴さと背徳が同時に滲み出る", en: "nobility and depravity leaking out at the same time" },
                { ja: "高貴さの奥で揺らぐ背徳の笑み", en: "forbidden smile wavering beneath noble poise" }
              ]},
              { title: "🌹 紅蓮呪花チャイナセット", items: [
                { ja: "深紅のスリットチャイナドレス", en: "crimson slit qipao dress" },
                { ja: "胸元から広がる発光淫紋", en: "luminous lust sigils spreading from the chest" },
                { ja: "衣装全体へ走る妖艶な発光線", en: "seductive glowing lines running across the entire outfit" },
                { ja: "熱に浮かされた濃い赤面", en: "heavy blush overwhelmed by ritual heat" }
              ]}
            ]
            ,
            baseGroups: [
              { title: "👘 チャイナ・ドレスの土台", items: [
                { ja: "深紅のスリットチャイナドレス", en: "crimson slit qipao dress" },
                { ja: "漆黒の光沢チャイナドレス", en: "jet-black glossy qipao dress" },
                { ja: "白金の神聖チャイナドレス", en: "white-and-gold sacred qipao dress" },
                { ja: "金刺繍の宮廷チャイナドレス", en: "palatial qipao dress with gold embroidery" },
                { ja: "黒と紫の呪術ドレス", en: "black and violet cursed ritual dress" },
                { ja: "透け感のある薄布レイヤー", en: "light translucent fabric layers" },
                { ja: "胸元を強調する立体裁断", en: "structured tailoring emphasizing the bustline" },
                { ja: "脚線を見せる深いスリット", en: "deep slit revealing the leg line" },
                { ja: "腰を締める高位の帯構造", en: "high-rank waist structure tightening the silhouette" },
                { ja: "袖口へ重なる宮廷布飾り", en: "layered court fabric ornaments at the cuffs" },
                { ja: "肩を落とした崩しチャイナ構造", en: "off-shoulder loosened qipao structure" },
                { ja: "胸下を締める呪術コルセット帯", en: "cursed corset sash tightening beneath the bust" },
                { ja: "腰から流れる後ろ布の尾", en: "flowing rear fabric tails from the waist" },
                { ja: "片脚だけを覗かせる非対称裾", en: "asymmetrical hem exposing only one leg" },
                { ja: "乳間を囲う高襟フロント構造", en: "high-collar front structure framing the cleavage" },
                { ja: "骨盤へ沿う密着スカートライン", en: "tight skirt line tracing the pelvis" },
                { ja: "細金具で留めた開閉式前立て", en: "front placket fastened by fine metallic clasps" },
                { ja: "裂けかけた高位礼装チャイナ", en: "high-class ceremonial qipao on the verge of tearing" },
                { ja: "下腹へ落ちる二重腹帯構造", en: "double abdominal sashes falling toward the lower belly" },
                { ja: "骨盤を抱く低腰チャイナ帯", en: "low-waist qipao sash hugging the pelvis" },
                { ja: "へそ下を囲う逆三角布飾り", en: "inverted triangular cloth ornament framing the lower abdomen" },
                { ja: "腰骨を強調する切り込み前裾", en: "front hem cuts emphasizing the hip bones" },
                { ja: "下腹を透かせる細帯窓構造", en: "narrow window-like band structure revealing the lower abdomen" },
                { ja: "骨盤線をなぞる密着前垂れ", en: "tight front drape tracing the pelvic line" }
              ]},
              { title: "🪬 淫紋・宝飾・呪術核", items: [
                { ja: "首筋と腹部へ浮かぶ発光淫紋", en: "glowing lust sigils appearing on the neck and abdomen" },
                { ja: "胸元から広がる発光淫紋", en: "luminous lust sigils spreading from the chest" },
                { ja: "太腿と鎖骨を走る紅い呪紋", en: "red cursed markings running along the thigh and collarbone" },
                { ja: "透ける布越しに見える侵食紋", en: "invasive sigils visible through translucent fabric" },
                { ja: "宝飾と呪術が融合した胸飾り", en: "ornamented chest jewel fused with arcane magic" },
                { ja: "衣装全体へ走る妖艶な発光線", en: "seductive glowing lines running across the entire outfit" },
                { ja: "へそ下へ落ちる呪術垂飾", en: "ritual pendant hanging toward the lower abdomen" },
                { ja: "背中へ回り込む発光文様", en: "glowing patterns wrapping around to the back" },
                { ja: "乳間を縦に走る淫紋ライン", en: "lust-sigil line running vertically between the breasts" },
                { ja: "骨盤を囲う妖光リング", en: "seductive luminous ring circling the pelvis" },
                { ja: "胸下へ二重に灯る支配紋", en: "double domination marks glowing beneath the bust" },
                { ja: "首輪と同期する喉元の呪印", en: "throat sigil synchronized with the collar" },
                { ja: "太腿内側へ浮く秘匿紋", en: "hidden sigils surfacing on the inner thigh" },
                { ja: "腰骨へ噛みつくような淫紋", en: "lust sigils biting into the hip bones" },
                { ja: "肩口から腕へ落ちる支配文様", en: "domination patterns descending from the shoulders to the arms" },
                { ja: "乳房下で明滅する呪術核", en: "ritual core flickering beneath the breasts" },
                { ja: "胸中央で脈打つ妖光宝石", en: "seductive gemstone pulsing at the center of the chest" },
                { ja: "下腹部で封印が崩れる発光核", en: "glowing seal-core collapsing at the lower abdomen" },
                { ja: "へそ周りを囲う封印環", en: "seal-ring encircling the navel area" },
                { ja: "骨盤中央に集まる崩壊紋", en: "collapse sigils gathering at the center of the pelvis" },
                { ja: "腰帯の内側で脈打つ隠し核", en: "hidden core pulsing beneath the inner waist sash" },
                { ja: "下腹へ枝分かれする支配線", en: "domination lines branching across the lower abdomen" },
                { ja: "鼠径部へ落ちる封印文字列", en: "seal scripts descending toward the groin" },
                { ja: "骨盤輪郭へ沿う微光紋", en: "faint luminous sigils tracing the pelvic outline" }
              ]}
            ],
            customizeGroups: [
              { title: "✨ 裂け・透け・発光アレンジ", items: [
                { ja: "胸元の裂けを強調する", en: "emphasize torn openings around the bustline" },
                { ja: "太腿スリットをさらに深くする", en: "deepen the thigh slit further" },
                { ja: "布越しの発光紋を見せる", en: "show glowing markings through the fabric" },
                { ja: "刺繍へ妖光を混ぜる", en: "blend arcane glow into the embroidery" },
                { ja: "肌に食い込む装飾縁を強める", en: "strengthen ornamental edges pressing into the skin" },
                { ja: "胸下へ垂れる装飾鎖を増やす", en: "increase ornamental chains hanging beneath the bust" },
                { ja: "脇腹の透けを強める", en: "strengthen translucency along the flanks" },
                { ja: "腰から背へ回る布流れを増やす", en: "increase flowing fabric wrapping from the waist to the back" },
                { ja: "高襟まわりの発光縁を追加する", en: "add glowing trim around the high collar" },
                { ja: "乳間をなぞる光線を濃くする", en: "intensify glowing lines tracing the cleavage" },
                { ja: "太腿に映る呪紋反射を増やす", en: "increase reflected sigil light on the thigh" },
                { ja: "裾の破れから肌を覗かせる", en: "reveal skin through torn hems" },
                { ja: "肩と鎖骨の露出を強める", en: "increase exposure around the shoulders and collarbone" },
                { ja: "胸飾りから脈打つ光を伸ばす", en: "extend pulsing light from the chest ornament" },
                { ja: "背中側の発光ラインを増やす", en: "increase glowing lines along the back" },
                { ja: "腰回りへ宝飾垂飾を重ねる", en: "layer ornamented pendants around the waist" },
                { ja: "下腹窓の露出境界を広げる", en: "widen the exposed boundary of the lower-abdomen window" },
                { ja: "へそ下の垂飾をさらに長く落とす", en: "extend the lower-abdomen pendant farther downward" },
                { ja: "骨盤帯の食い込みを強める", en: "strengthen the indentation of the pelvic sash" },
                { ja: "鼠径部へ流れる光筋を増やす", en: "increase glowing streaks descending toward the groin" },
                { ja: "下腹前垂れを薄く透かせる", en: "make the lower-abdomen front drape thinner and more translucent" },
                { ja: "骨盤周りの布流れを危うく崩す", en: "destabilize the fabric flow around the pelvis" }
              ]},
              { title: "😳 妖艶・堕ち・抗いアレンジ", items: [
                { ja: "理性を保とうとする乱れ顔", en: "disturbed face trying to preserve composure" },
                { ja: "快楽に揺らぐ恍惚顔", en: "entranced expression wavering under pleasure" },
                { ja: "高貴さの奥で揺らぐ背徳の笑み", en: "forbidden smile wavering beneath noble poise" },
                { ja: "熱に浮かされた濃い赤面", en: "heavy blush overwhelmed by ritual heat" },
                { ja: "唇と視線が崩れる艶顔", en: "seductive face with trembling lips and wavering gaze" },
                { ja: "羞恥と妖艶が混ざる視線", en: "gaze mixing shame with seductive corruption" },
                { ja: "背徳感で乱れる息遣い", en: "breathing disturbed by forbidden pleasure" },
                { ja: "堕ちを拒みきれない抗い顔", en: "resisting face unable to fully reject corruption" },
                { ja: "高揚と羞恥が同居するとろみ顔", en: "melted expression balancing arousal and embarrassment" },
                { ja: "呪術熱で焦点が揺れる目", en: "eyes losing focus under cursed ritual heat" },
                { ja: "唇の端だけ崩れる耐え顔", en: "enduring face with only the corner of the lips collapsing" },
                { ja: "目元が潤み続ける堕ち顔", en: "corrupted expression with continuously watery eyes" },
                { ja: "誇りを残したまま崩れる表情", en: "expression collapsing while still retaining pride" },
                { ja: "快落寸前の上目づかい", en: "upturned gaze on the verge of surrender" },
                { ja: "視線を逸らしきれない背徳顔", en: "forbidden expression unable to look away" },
                { ja: "妖艶さが滲む半開きの唇", en: "half-open lips leaking seductive corruption" },
                { ja: "下腹の熱を耐える食いしばり顔", en: "clenched face enduring heat gathering in the lower abdomen" },
                { ja: "骨盤の脈動に視線が揺らぐ顔", en: "expression with gaze wavering from pulsing at the pelvis" },
                { ja: "へそ下の封印崩れに息を乱す顔", en: "face losing breath as the seal breaks beneath the navel" },
                { ja: "羞恥で腹を守りきれない崩れ顔", en: "collapsing face unable to protect the lower abdomen from shame" }
              ]}
            ],
            settingGroups: [
              { title: "⚙️ 呪術進行・露出設定", items: [
                { ja: "衣装そのものが呪術媒体化する", en: "the outfit itself behaves as a cursed ritual medium" },
                { ja: "淫紋が胸元から全身へ広がる", en: "lust sigils spread from the chest across the body" },
                { ja: "スリットと裂け目が露出境界を押し広げる", en: "slits and tears push the boundary of exposure" },
                { ja: "宝飾が支配の核として脈動する", en: "ornamental jewels pulse as the core of domination" },
                { ja: "高貴さと背徳が同時に滲み出る", en: "nobility and depravity leaking out at the same time" },
                { ja: "術式光が肌と布の境界を曖昧にする", en: "ritual light blurs the boundary between skin and fabric" },
                { ja: "胸元の核が感情と同期する", en: "the chest core synchronizes with emotional corruption" },
                { ja: "露出部位ごとに呪紋密度が増す", en: "sigil density increasing around each exposed zone" },
                { ja: "衣装の豪華さが背徳感を増幅する", en: "the luxurious attire amplifying the sense of depravity" },
                { ja: "首筋から下腹へ支配波が降りる", en: "waves of domination descending from the neck to the lower abdomen" },
                { ja: "胸下で封印が綻び始める", en: "the seal beginning to fray beneath the bust" },
                { ja: "背中の呪紋が衣装越しに透ける", en: "back sigils showing through the garment" },
                { ja: "装飾鎖が身体の動きに追従する", en: "ornamental chains following the motion of the body" },
                { ja: "宝玉の脈動で視線と表情が乱れる", en: "jewel pulses disturbing gaze and expression" },
                { ja: "肌に沿って発光線が増殖する", en: "glowing lines multiplying along the skin" },
                { ja: "衣装の裂けが進行に応じて広がる", en: "tears in the outfit widening with progression" },
                { ja: "宮廷礼装が背徳衣装へ変質する", en: "court attire mutating into depraved ceremonial wear" },
                { ja: "呪術核が快楽と羞恥を同時増幅する", en: "ritual cores amplifying pleasure and shame at once" },
                { ja: "下腹の封印核が全身支配の起点になる", en: "the lower-abdomen seal core becoming the origin of full-body domination" },
                { ja: "骨盤輪郭に沿って支配紋が閉じる", en: "domination sigils sealing along the outline of the pelvis" },
                { ja: "へそ下の崩壊点から熱が噴き上がる", en: "heat surging upward from the collapse point beneath the navel" },
                { ja: "下腹窓の露出が進行段階を示す", en: "the lower-abdomen opening indicating the stage of progression" }
              ]}
            ],
            qualityPresets: [
              { title: "🀄 淫紋チャイナ用完成クオリティ", items: [
                { ja: "スリットと脚線を美しく見せる", en: "beautiful emphasis on the slit and leg line" },
                { ja: "発光淫紋を肌上で鮮明に出す", en: "lust sigils rendered sharply over the skin" },
                { ja: "布と肌の反射差を強める", en: "strong contrast between fabric and skin reflectivity" },
                { ja: "チャイナ装飾を細密に見せる", en: "intricate qipao ornamentation clearly visible" }
              ]},
              { title: "👗 呪術ドレス用完成クオリティ", items: [
                { ja: "胸元の発光核を主役にする", en: "make the glowing chest core the visual centerpiece" },
                { ja: "透け布越しの侵食紋を見せる", en: "show invasive sigils through translucent dress fabric" },
                { ja: "低照度で呪術光を際立たせる", en: "low-key lighting emphasizing cursed ritual glow" },
                { ja: "恍惚顔と艶光を両立する", en: "balance entranced expression with seductive glossy light" }
              ]},
              { title: "🏯 宮廷妖艶用完成クオリティ", items: [
                { ja: "宮廷刺繍と宝飾を豪華に見せる", en: "luxurious emphasis on court embroidery and jewelry" },
                { ja: "高貴な陰影と背徳の赤光を両立する", en: "balance noble shadows with forbidden crimson glow" },
                { ja: "太腿と鎖骨の呪紋を見せる", en: "show cursed markings along the thigh and collarbone" },
                { ja: "顔と胸飾りへ視線を集める", en: "focus attention on the face and chest ornament" }
              ]},
              { title: "🌙 月下妖紋用完成クオリティ", items: [
                { ja: "宮廷刺繍と宝飾を豪華に見せる", en: "luxurious emphasis on court embroidery and jewelry" },
                { ja: "高貴な陰影と背徳の赤光を両立する", en: "balance noble shadows with forbidden crimson glow" },
                { ja: "顔と胸飾りへ視線を集める", en: "focus attention on the face and chest ornament" },
                { ja: "骨盤周りの淫紋密度を高める", en: "increase lust-sigil density around the pelvis" }
              ]},
              { title: "🦋 薄絹透け呪術用完成クオリティ", items: [
                { ja: "透け布越しの侵食紋を見せる", en: "show invasive sigils through translucent dress fabric" },
                { ja: "低照度で呪術光を際立たせる", en: "low-key lighting emphasizing cursed ritual glow" },
                { ja: "布と肌の反射差を強める", en: "strong contrast between fabric and skin reflectivity" },
                { ja: "胸下の鎖と垂飾を見せる", en: "show ornamental chains and pendants below the bust" }
              ]},
              { title: "👑 宮廷堕華用完成クオリティ", items: [
                { ja: "宮廷刺繍と宝飾を豪華に見せる", en: "luxurious emphasis on court embroidery and jewelry" },
                { ja: "顔と胸飾りへ視線を集める", en: "focus attention on the face and chest ornament" },
                { ja: "高貴な陰影と背徳の赤光を両立する", en: "balance noble shadows with forbidden crimson glow" },
                { ja: "骨盤周りの淫紋密度を高める", en: "increase lust-sigil density around the pelvis" }
              ]},
              { title: "🌹 紅蓮呪花用完成クオリティ", items: [
                { ja: "花弁裾の燃える赤光を強める", en: "enhance burning crimson light on petal-cut hems" },
                { ja: "花芯型の発光核を鮮明に見せる", en: "show flower-core luminous nodes with sharp clarity" },
                { ja: "熱暴走する赤面と呪光を両立する", en: "balance overheating blush with intense cursed glow" },
                { ja: "胸元の咲き広がる紋様へ視線を寄せる", en: "focus attention on blooming sigils spreading across the bust" }
              ]},
              { title: "🕯️ 封印綻び礼装用完成クオリティ", items: [
                { ja: "胸元の発光核を主役にする", en: "make the glowing chest core the visual centerpiece" },
                { ja: "高襟と胸飾りの金属感を強める", en: "strengthen metallic rendering of the high collar and chest ornament" },
                { ja: "王族級の礼装陰影を濃く出す", en: "render royal-grade ceremonial shadows with greater depth" },
                { ja: "高貴な陰影と背徳の赤光を両立する", en: "balance noble shadows with forbidden crimson glow" }
              ]},
              { title: "💎 宝飾支配用完成クオリティ", items: [
                { ja: "宝飾の脈動光を強く見せる", en: "show strong pulsing light from the ornaments" },
                { ja: "顔と胸飾りへ視線を集める", en: "focus attention on the face and chest ornament" },
                { ja: "宮廷刺繍と宝飾を豪華に見せる", en: "luxurious emphasis on court embroidery and jewelry" },
                { ja: "高襟と胸飾りの金属感を強める", en: "strengthen metallic rendering of the high collar and chest ornament" }
              ]},
              { title: "🩸 下腹封印崩壊用完成クオリティ", items: [
                { ja: "下腹の発光核を主役に引き上げる", en: "elevate the lower-abdomen glowing core into a main focal point" },
                { ja: "へそ下の封印崩れを鮮明に見せる", en: "show the seal collapse beneath the navel with sharp clarity" },
                { ja: "骨盤輪郭と支配光を同時に立てる", en: "emphasize the pelvic outline and domination glow together" },
                { ja: "下腹窓の露出と布端を綺麗に見せる", en: "beautifully show the lower-abdomen opening and its fabric edges" }
              ]},
              { title: "👠 背徳開脚スリット用完成クオリティ", items: [
                { ja: "スリットと脚線を美しく見せる", en: "beautiful emphasis on the slit and leg line" },
                { ja: "太腿と鎖骨の呪紋を見せる", en: "show cursed markings along the thigh and collarbone" },
                { ja: "太腿に映る呪紋反射を増やす", en: "increase reflected sigil light on the thigh" },
                { ja: "肩と鎖骨の露出を綺麗に見せる", en: "beautifully show shoulder and collarbone exposure" }
              ]},
              { title: "🔗 胸下鎖垂飾用完成クオリティ", items: [
                { ja: "胸下の鎖と垂飾を見せる", en: "show ornamental chains and pendants below the bust" },
                { ja: "胸元の発光核を主役にする", en: "make the glowing chest core the visual centerpiece" },
                { ja: "高襟と胸飾りの金属感を強める", en: "strengthen metallic rendering of the high collar and chest ornament" },
                { ja: "胸下の鎖と垂飾を見せる", en: "show ornamental chains and pendants below the bust" }
              ]},
              { title: "🫦 半開き堕艶用完成クオリティ", items: [
                { ja: "視線の艶と涙の反射を強める", en: "strengthen glossy gaze and tear reflections" },
                { ja: "呪紋の赤光と肌の白さを対比する", en: "contrast crimson sigil glow against pale skin" },
                { ja: "顔と胸飾りへ視線を集める", en: "focus attention on the face and chest ornament" },
                { ja: "低照度で呪術光を際立たせる", en: "low-key lighting emphasizing cursed ritual glow" }
              ]}
            ]
            ,
            qualityGroups: [
              { title: "🐉 淫紋チャイナ・呪術ドレス用クオリティ調整", items: [
                { ja: "スリットと脚線を美しく見せる", en: "beautiful emphasis on the slit and leg line" },
                { ja: "発光淫紋を肌上で鮮明に出す", en: "lust sigils rendered sharply over the skin" },
                { ja: "布と肌の反射差を強める", en: "strong contrast between fabric and skin reflectivity" },
                { ja: "透け布越しの侵食紋を見せる", en: "show invasive sigils through translucent dress fabric" },
                { ja: "低照度で呪術光を際立たせる", en: "low-key lighting emphasizing cursed ritual glow" },
                { ja: "宮廷刺繍と宝飾を豪華に見せる", en: "luxurious emphasis on court embroidery and jewelry" },
                { ja: "高貴な陰影と背徳の赤光を両立する", en: "balance noble shadows with forbidden crimson glow" },
                { ja: "顔と胸飾りへ視線を集める", en: "focus attention on the face and chest ornament" },
                { ja: "胸下の鎖と垂飾を見せる", en: "show ornamental chains and pendants below the bust" },
                { ja: "骨盤周りの淫紋密度を高める", en: "increase lust-sigil density around the pelvis" },
                { ja: "胸元の発光核を主役にする", en: "make the glowing chest core the visual centerpiece" },
                { ja: "肩と鎖骨の露出を綺麗に見せる", en: "beautifully show shoulder and collarbone exposure" },
                { ja: "高襟と胸飾りの金属感を強める", en: "strengthen metallic rendering of the high collar and chest ornament" },
                { ja: "透け布と刺繍の階層差を見せる", en: "show depth layering between sheer fabric and embroidery" },
                { ja: "呪紋の赤光と肌の白さを対比する", en: "contrast crimson sigil glow against pale skin" },
                { ja: "宝飾の脈動光を強く見せる", en: "show strong pulsing light from the ornaments" },
                { ja: "視線の艶と涙の反射を強める", en: "strengthen glossy gaze and tear reflections" },
                { ja: "腰回りの装飾と布流れを見せる", en: "show waist ornaments and flowing fabric movement" },
                { ja: "下腹の発光核を主役に引き上げる", en: "elevate the lower-abdomen glowing core into a main focal point" },
                { ja: "へそ下の封印崩れを鮮明に見せる", en: "show the seal collapse beneath the navel with sharp clarity" },
                { ja: "骨盤輪郭と支配光を同時に立てる", en: "emphasize the pelvic outline and domination glow together" },
                { ja: "下腹窓の露出と布端を綺麗に見せる", en: "beautifully show the lower-abdomen opening and its fabric edges" }
              ]}
            ]
          },

          {
            title: "⛓ 奴隷装飾・所有印特化コレクション",
            description: "首輪だけに寄せず、主従章、所有印、鎖装飾、拘束意匠を衣装側へ強く噛ませて“着ているだけで誰の所有物かが視覚で伝わる支配衣装”を深掘りする専用コレクション",
            presets: [
              { title: "🔗 所有印露出・抗いセット", items: [
                { ja: "所有章が胸元に刻まれた拘束衣装", en: "restraint outfit marked by a visible ownership crest over the chest" },
                { ja: "主従を示す鎖装飾", en: "chain ornaments signaling master-servant ownership" },
                { ja: "肌へ食い込む所有印", en: "ownership mark pressed visibly into the skin" },
                { ja: "従属に抗う乱れ顔", en: "disturbed face resisting imposed ownership" }
              ]},
              { title: "👑 主従礼装・従属化セット", items: [
                { ja: "高位の主人に仕える礼装", en: "ceremonial attire for serving a high-ranking master" },
                { ja: "胸元で輝く所有紋章", en: "glowing ownership emblem at the chest" },
                { ja: "腰と首を繋ぐ装飾鎖", en: "ornamental chains linking the neck and waist" },
                { ja: "従属を受け入れ始めた表情", en: "expression beginning to accept subordination" }
              ]},
              { title: "🩸 支配礼装・完全所有セット", items: [
                { ja: "黒と紅の支配礼装", en: "black and crimson domination regalia" },
                { ja: "全身へ広がる所有紋", en: "ownership sigils spreading across the body" },
                { ja: "装飾拘束が衣装と一体化する", en: "ornamental restraints fused directly into the attire" },
                { ja: "完全所有を示す恍惚と崩壊の顔", en: "face showing entrancement and collapse under complete possession" }
              ]}
            ],
            baseGroups: [
              { title: "🖤 所有衣装の土台", items: [
                { ja: "所有章が胸元に刻まれた拘束衣装", en: "restraint outfit marked by a visible ownership crest over the chest" },
                { ja: "高位の主人に仕える礼装", en: "ceremonial attire for serving a high-ranking master" },
                { ja: "黒と紅の支配礼装", en: "black and crimson domination regalia" },
                { ja: "肌へ食い込む革と金具の装飾", en: "leather and metal ornamentation pressing into the skin" },
                { ja: "装飾拘束が衣装と一体化する", en: "ornamental restraints fused directly into the attire" },
                { ja: "腰と首を繋ぐ装飾鎖", en: "ornamental chains linking the neck and waist" }
              ]},
              { title: "🪙 所有印・主従章・鎖核", items: [
                { ja: "胸元で輝く所有紋章", en: "glowing ownership emblem at the chest" },
                { ja: "全身へ広がる所有紋", en: "ownership sigils spreading across the body" },
                { ja: "主従を示す鎖装飾", en: "chain ornaments signaling master-servant ownership" },
                { ja: "肌へ食い込む所有印", en: "ownership mark pressed visibly into the skin" },
                { ja: "首輪と衣装を繋ぐ金属環", en: "metal rings linking collar hardware into the outfit" },
                { ja: "命令札のように揺れる所有タグ", en: "ownership tags swaying like command plates" }
              ]}
            ],
            customizeGroups: [
              { title: "✨ 装飾拘束・金具アレンジ", items: [
                { ja: "胸元の金具構造を強める", en: "strengthen metallic restraint structures around the bust" },
                { ja: "鎖と環の数を増やす", en: "increase the number of chains and rings" },
                { ja: "腰から太腿へ垂れる従属鎖", en: "subordination chains hanging from the waist to the thigh" },
                { ja: "金属縁が肌へ食い込む表現", en: "metal edges visibly pressing into the skin" },
                { ja: "主従章を大型化する", en: "enlarge the master-servant emblem as a centerpiece" }
              ]},
              { title: "😳 従属・抗い・崩れアレンジ", items: [
                { ja: "従属に抗う乱れ顔", en: "disturbed face resisting imposed ownership" },
                { ja: "従属を受け入れ始めた表情", en: "expression beginning to accept subordination" },
                { ja: "完全所有を示す恍惚と崩壊の顔", en: "face showing entrancement and collapse under complete possession" },
                { ja: "命令で揺らぐ視線", en: "wavering gaze under command pressure" },
                { ja: "所有印の熱で崩れる赤面", en: "heavy blush collapsing under the heat of the ownership mark" }
              ]}
            ],
            settingGroups: [
              { title: "⚙️ 所有進行・主従設定", items: [
                { ja: "衣装全体が所有の証として機能する", en: "the outfit itself functioning as proof of ownership" },
                { ja: "主従章が命令核として脈動する", en: "the master-servant crest pulsing as the command core" },
                { ja: "所有印が肌へ広がり理性を削る", en: "ownership marks spreading across the skin and eroding composure" },
                { ja: "装飾拘束が姿勢を矯正する", en: "ornamental restraints forcing posture into obedience" },
                { ja: "華やかな礼装が支配道具へ変質する", en: "formal attire transforming into an instrument of domination" },
                { ja: "見た瞬間に所有関係が伝わる", en: "the ownership hierarchy instantly visible at a glance" }
              ]}
            ],
            qualityPresets: [
              { title: "🔗 所有印露出用完成クオリティ", items: [
                { ja: "所有印を肌上で鮮明に見せる", en: "ownership marks rendered sharply over the skin" },
                { ja: "装飾金具と肌の圧差を強める", en: "strong contrast between metallic hardware and compressed skin" },
                { ja: "胸元の所有章へ視線を集める", en: "focus attention on the ownership crest over the chest" },
                { ja: "露出境界と鎖装飾を明確に見せる", en: "clearly show exposure boundaries and chain ornamentation" }
              ]},
              { title: "👑 主従礼装用完成クオリティ", items: [
                { ja: "礼装の高級感を強める", en: "enhance the luxurious quality of the ceremonial outfit" },
                { ja: "主従章と装飾鎖を豪華に見せる", en: "show master-servant emblems and ornamental chains in a lavish way" },
                { ja: "上品さと従属感を両立する", en: "balance elegance with unmistakable subordination" },
                { ja: "顔と胸元の印象を両方立てる", en: "emphasize both the face and the chest ornaments" }
              ]},
              { title: "🩸 完全所有用完成クオリティ", items: [
                { ja: "全身へ広がる所有紋を強める", en: "strengthen ownership sigils spreading across the body" },
                { ja: "支配礼装の黒紅コントラストを強める", en: "enhance the black-crimson contrast of domination regalia" },
                { ja: "装飾拘束の一体化を見せる", en: "show ornamental restraints fused seamlessly into the attire" },
                { ja: "恍惚崩壊顔と支配光を両立する", en: "balance collapse under entrancement with ominous domination glow" }
              ]}
            ],
            qualityGroups: [
              { title: "⛓ 奴隷装飾・所有印用クオリティ調整", items: [
                { ja: "所有印を肌上で鮮明に見せる", en: "ownership marks rendered sharply over the skin" },
                { ja: "装飾金具と肌の圧差を強める", en: "strong contrast between metallic hardware and compressed skin" },
                { ja: "胸元の所有章へ視線を集める", en: "focus attention on the ownership crest over the chest" },
                { ja: "露出境界と鎖装飾を明確に見せる", en: "clearly show exposure boundaries and chain ornamentation" },
                { ja: "主従章と装飾鎖を豪華に見せる", en: "show master-servant emblems and ornamental chains in a lavish way" },
                { ja: "上品さと従属感を両立する", en: "balance elegance with unmistakable subordination" },
                { ja: "全身へ広がる所有紋を強める", en: "strengthen ownership sigils spreading across the body" },
                { ja: "恍惚崩壊顔と支配光を両立する", en: "balance collapse under entrancement with ominous domination glow" }
              ]}
            ]
          },

          {
            title: "🫧 触手・粘液汚染衣装特化コレクション",
            description: "触手や粘液によって衣装そのものが濡れ、裂け、まとわりつき、異物へ変質していく見え方を主役にした“汚染進行型のR-18衣装”を深掘りする専用コレクション",
            presets: [
              { title: "🫧 粘液汚染・抗いセット", items: [
                { ja: "粘液で濡れた破損衣装", en: "damaged outfit soaked in clinging slime" },
                { ja: "肌と布の境界にまとわりつく粘液膜", en: "slimy membrane clinging to the boundary between skin and fabric" },
                { ja: "汚染を振り払おうとする乱れ顔", en: "disturbed face trying to shake off the contamination" },
                { ja: "濡れた布が身体へ張りつく圧", en: "wet fabric pressure tightly adhering to the body" }
              ]},
              { title: "🦑 触手拘束・侵食衣装セット", items: [
                { ja: "触手に引き裂かれた拘束衣装", en: "restraint outfit torn open by grasping tentacles" },
                { ja: "布地へ食い込む触手の巻き付き", en: "tentacles coiling tightly into the fabric" },
                { ja: "侵食に呑まれ始めた表情", en: "expression beginning to be consumed by invasive restraint" },
                { ja: "裂け目から見える粘液光", en: "viscous glow visible through torn openings" }
              ]},
              { title: "🧪 異物化・半変質衣装セット", items: [
                { ja: "衣装が異物化し始めた半変質状態", en: "half-transformed attire beginning to turn into an alien substance" },
                { ja: "皮膚と融合しかけた汚染布", en: "contaminated fabric beginning to fuse with the skin" },
                { ja: "変質進行に揺らぐ抗い顔", en: "wavering face resisting progressive transformation" },
                { ja: "衣装全体を走るぬめる発光脈", en: "slick luminous pulses running across the entire outfit" }
              ]}
            ],
            baseGroups: [
              { title: "👗 汚染衣装の土台", items: [
                { ja: "粘液で濡れた破損衣装", en: "damaged outfit soaked in clinging slime" },
                { ja: "触手に引き裂かれた拘束衣装", en: "restraint outfit torn open by grasping tentacles" },
                { ja: "衣装が異物化し始めた半変質状態", en: "half-transformed attire beginning to turn into an alien substance" },
                { ja: "濡れた布が身体へ張りつく圧", en: "wet fabric pressure tightly adhering to the body" },
                { ja: "粘液に浸された透け布レイヤー", en: "translucent fabric layers soaked in invasive slime" },
                { ja: "裂け目の多い汚染スーツ地", en: "contaminated suit material full of torn openings" }
              ]},
              { title: "🧬 触手・粘液・変質核", items: [
                { ja: "肌と布の境界にまとわりつく粘液膜", en: "slimy membrane clinging to the boundary between skin and fabric" },
                { ja: "布地へ食い込む触手の巻き付き", en: "tentacles coiling tightly into the fabric" },
                { ja: "裂け目から見える粘液光", en: "viscous glow visible through torn openings" },
                { ja: "皮膚と融合しかけた汚染布", en: "contaminated fabric beginning to fuse with the skin" },
                { ja: "衣装全体を走るぬめる発光脈", en: "slick luminous pulses running across the entire outfit" },
                { ja: "縫い目を侵食する異物の脈動", en: "alien pulsation consuming the seams" }
              ]}
            ],
            customizeGroups: [
              { title: "✨ 裂け・濡れ・粘着アレンジ", items: [
                { ja: "胸元の裂け目を強調する", en: "emphasize torn openings across the bustline" },
                { ja: "太腿へ垂れる粘液糸を増やす", en: "increase viscous strands dripping over the thigh" },
                { ja: "濡れ光沢と透け感を強める", en: "strengthen wet gloss and translucent cling" },
                { ja: "触手の巻き付き密度を上げる", en: "increase the density of tentacle coiling" },
                { ja: "粘液膜が肌へ広がる表現", en: "show the slime membrane spreading further over the skin" }
              ]},
              { title: "😳 汚染・侵食・崩れアレンジ", items: [
                { ja: "汚染を振り払おうとする乱れ顔", en: "disturbed face trying to shake off the contamination" },
                { ja: "侵食に呑まれ始めた表情", en: "expression beginning to be consumed by invasive restraint" },
                { ja: "変質進行に揺らぐ抗い顔", en: "wavering face resisting progressive transformation" },
                { ja: "粘着熱で崩れる濃い赤面", en: "heavy blush collapsing under adhesive invasive heat" },
                { ja: "ぬめる息と視線の乱れ", en: "slick disturbed breathing and wavering gaze" }
              ]}
            ],
            settingGroups: [
              { title: "⚙️ 汚染進行・変質設定", items: [
                { ja: "衣装そのものが汚染媒体化する", en: "the outfit itself becoming a medium for contamination" },
                { ja: "触手が衣装構造へ食い込む", en: "tentacles digging directly into the structure of the outfit" },
                { ja: "粘液膜が布と肌の境界を消す", en: "slime membranes erasing the boundary between skin and fabric" },
                { ja: "異物化が衣装全体へ進行する", en: "alien transformation progressing across the entire attire" },
                { ja: "濡れと拘束が一体化していく", en: "wetness and restraint fusing into one invasive state" },
                { ja: "見た瞬間に汚染進行が伝わる", en: "the progression of contamination instantly visible at a glance" }
              ]}
            ],
            qualityPresets: [
              { title: "🫧 粘液汚染用完成クオリティ", items: [
                { ja: "濡れ光沢と布の張りつきを強める", en: "enhance wet gloss and fabric clinging to the body" },
                { ja: "粘液膜を肌上で鮮明に見せる", en: "render slime membranes sharply over the skin" },
                { ja: "露出境界の透け感を強める", en: "strengthen translucency along exposed fabric boundaries" },
                { ja: "顔と胸元の汚染点へ視線を寄せる", en: "focus attention on contamination points around the face and chest" }
              ]},
              { title: "🦑 触手拘束用完成クオリティ", items: [
                { ja: "触手の巻き付き圧を強める", en: "enhance the pressure of tentacles coiling around the outfit" },
                { ja: "裂けた布と拘束点を鮮明に見せる", en: "clearly show torn fabric and tight restraint points" },
                { ja: "暗部光で侵食感を強める", en: "use low-key lighting to strengthen the invasive atmosphere" },
                { ja: "拘束の起点へ視線を集める", en: "focus attention on the origin points of the restraint" }
              ]},
              { title: "🧪 半変質衣装用完成クオリティ", items: [
                { ja: "異物化した布の質感を強める", en: "enhance the alien texture of transforming fabric" },
                { ja: "発光脈を衣装全体で見せる", en: "show luminous pulses across the full outfit" },
                { ja: "肌との融合境界を鮮明にする", en: "clarify the fusion boundary between outfit and skin" },
                { ja: "変質進行の不穏さを色で強める", en: "enhance the unease of transformation through ominous color shifts" }
              ]}
            ],
            qualityGroups: [
              { title: "🫧 触手・粘液汚染衣装用クオリティ調整", items: [
                { ja: "濡れ光沢と布の張りつきを強める", en: "enhance wet gloss and fabric clinging to the body" },
                { ja: "粘液膜を肌上で鮮明に見せる", en: "render slime membranes sharply over the skin" },
                { ja: "露出境界の透け感を強める", en: "strengthen translucency along exposed fabric boundaries" },
                { ja: "触手の巻き付き圧を強める", en: "enhance the pressure of tentacles coiling around the outfit" },
                { ja: "裂けた布と拘束点を鮮明に見せる", en: "clearly show torn fabric and tight restraint points" },
                { ja: "暗部光で侵食感を強める", en: "use low-key lighting to strengthen the invasive atmosphere" },
                { ja: "異物化した布の質感を強める", en: "enhance the alien texture of transforming fabric" },
                { ja: "肌との融合境界を鮮明にする", en: "clarify the fusion boundary between outfit and skin" }
              ]}
            ]
          }

        ];


      const hasR18Nodes = IS_SECRET_UNLOCKED && (
        Array.from(r18Groups.values()).some(function(nodes){ return nodes && nodes.length; }) ||
        (Array.isArray(r18TopExtraCollections) && r18TopExtraCollections.length > 0)
      );
      if (hasR18Nodes){
        const r18Zone = document.createElement("div");
        r18Zone.id = "__attire_r18_last_zone__";
        r18Zone.className = "attire-r18-zone";
        r18Zone.style.cssText = "display:block;width:100%;max-width:100%;margin:14px 0 0;box-sizing:border-box;";

        const r18Divider = document.createElement("div");
        r18Divider.className = "attire-r18-divider";
        r18Divider.style.cssText = "display:flex;align-items:center;gap:10px;width:100%;max-width:100%;margin:0 0 10px;color:#c23a68;font-weight:800;box-sizing:border-box;";
        const r18LineL = document.createElement("span");
        r18LineL.style.cssText = "flex:1;height:2px;background:#f1b8c8;display:block;";
        const r18Label = document.createElement("span");
        r18Label.textContent = "⚠️ R-18 / NSFW";
        r18Label.style.cssText = "white-space:nowrap;font-size:14px;letter-spacing:0.02em;";
        const r18LineR = document.createElement("span");
        r18LineR.style.cssText = "flex:1;height:2px;background:#f1b8c8;display:block;";
        r18Divider.appendChild(r18LineL);
        r18Divider.appendChild(r18Label);
        r18Divider.appendChild(r18LineR);
        r18Zone.appendChild(r18Divider);

        const topCollectionDefs = [];
        r18ParentDefs.forEach(function(def){
          const collectionDefs = r18CollectionDefs[def.title] || [];
          if (!collectionDefs.length) return;
          topCollectionDefs.push({ def: def, collectionDefs: collectionDefs });
        });

        const preGroupedTopExtraCollections = Array.isArray(r18TopExtraCollections)
          ? r18TopExtraCollections.slice()
          : [];

        function appendR18CollectionGroupLabel(kind){
          const label = document.createElement("div");
          label.className = "attire-r18-collection-group-label attire-r18-collection-group-label-" + kind;
          const text = kind === "theme"
            ? "🧬 テーマ特化コレクション"
            : (kind === "outfit" ? "👗 衣装系コレクション" : "🔥 状態・見え方系コレクション");
          const color = kind === "theme" ? "#9a5c7a" : (kind === "outfit" ? "#a36a7c" : "#b24d66");
          label.textContent = text;
          label.style.cssText = "margin:6px 0 10px;padding:0 2px;color:" + color + ";font-size:0.78em;font-weight:800;letter-spacing:0.02em;";
          r18Zone.appendChild(label);
        }

        function classifyR18CollectionTitle(title){
          const t = String(title || "");
          if (
            t.includes("侵食・寄生特化コレクション") ||
            t.includes("汚れ・液体系特化コレクション") ||
            t.includes("艶拘束・支配進行特化コレクション") ||
            t.includes("魅了の首輪・魔力支配特化コレクション")
          ) return "theme";
          if (
            t.includes("呪印・刻印露出特化コレクション") ||
            t.includes("生体スーツ・拘束スーツ特化コレクション") ||
            t.includes("儀式巫女・堕ち神官特化コレクション") ||
            t.includes("淫紋チャイナ・呪術ドレス特化コレクション") ||
            t.includes("奴隷装飾・所有印特化コレクション") ||
            t.includes("触手・粘液汚染衣装特化コレクション")
          ) return "outfit";
          if (
            t.includes("高級ランジェリー特化コレクション") ||
            t.includes("夜着・私室衣装特化コレクション") ||
            t.includes("夜の高級衣装特化コレクション") ||
            t.includes("艶素材・密着特化コレクション") ||
            t.includes("首輪・ハーネス・固定具衣装特化コレクション") ||
            t.includes("支配者・女王・高圧衣装特化コレクション") ||
            t.includes("高級背徳ランジェリー特化コレクション")
          ) return "outfit";
          return "state";
        }

        if (topCollectionDefs.length){
          const groupedCollections = { theme: [], outfit: [], state: [] };
          preGroupedTopExtraCollections.forEach(function(collection){
            const kind = classifyR18CollectionTitle(collection && collection.title);
            groupedCollections[kind].push(collection);
          });

          topCollectionDefs.forEach(function(entry){
            (entry.collectionDefs || []).forEach(function(collection){
              const kind = classifyR18CollectionTitle(collection && collection.title);
              groupedCollections[kind].push(collection);
            });
          });

          function dedupeCollections(list){
            const seen = new Set();
            return (list || []).filter(function(collection){
              const key = String(collection && collection.title || "");
              if (!key || seen.has(key)) return false;
              seen.add(key);
              return true;
            });
          }

          function moveCollectionAfter(list, title, afterTitle){
            const arr = Array.isArray(list) ? list.slice() : [];
            const idx = arr.findIndex(function(c){ return c && c.title === title; });
            if (idx === -1) return arr;
            const target = arr.splice(idx, 1)[0];
            const afterIdx = arr.findIndex(function(c){ return c && c.title === afterTitle; });
            if (afterIdx === -1) {
              arr.unshift(target);
            } else {
              arr.splice(afterIdx + 1, 0, target);
            }
            return arr;
          }

          groupedCollections.theme = dedupeCollections(groupedCollections.theme);
          groupedCollections.outfit = dedupeCollections(groupedCollections.outfit);
          groupedCollections.state = dedupeCollections(groupedCollections.state);
          groupedCollections.outfit = moveCollectionAfter(
            groupedCollections.outfit,
            "🧬 生体スーツ・拘束スーツ特化コレクション",
            "🪬 呪印・刻印露出特化コレクション"
          );

          ["theme", "outfit", "state"].forEach(function(kind){
            const list = groupedCollections[kind] || [];
            if (!list.length) return;
            appendR18CollectionGroupLabel(kind);
            list.forEach(function(collection){
              const node = createR18CollectionNode(collection);
              if (!node) return;
              node.dataset.collectionTitle = String(collection && collection.title || "");
              node.style.width = "100%";
              node.style.maxWidth = "100%";
              node.style.margin = "0 0 10px";
              r18Zone.appendChild(node);
            });
          });

          const biosuitTitle = "🧬 生体スーツ・拘束スーツ特化コレクション";
          const biosuitFound = !!r18Zone.querySelector('[data-collection-title="' + biosuitTitle.replace(/"/g, '\"') + '"]');
          if (!biosuitFound) {
            const biosuitCollection = preGroupedTopExtraCollections.find(function(c){ return c && c.title === biosuitTitle; });
            const biosuitNode = createR18CollectionNode(biosuitCollection);
            if (biosuitNode) {
              biosuitNode.dataset.collectionTitle = biosuitTitle;
              biosuitNode.style.width = "100%";
              biosuitNode.style.maxWidth = "100%";
              biosuitNode.style.margin = "0 0 10px";
              const cursemarkNode = r18Zone.querySelector('[data-collection-title="🪬 呪印・刻印露出特化コレクション"]');
              if (cursemarkNode && cursemarkNode.parentNode) {
                cursemarkNode.parentNode.insertBefore(biosuitNode, cursemarkNode.nextSibling);
              } else {
                r18Zone.appendChild(biosuitNode);
              }
            }
          }
        }

        function buildR18ParentWrap(def, nodes, collectionDefs){
          const wrap = document.createElement("details");
          wrap.className = "attire-r18-parent-group";
          wrap.open = false;
          wrap.style.cssText = "display:block;width:100%;max-width:100%;margin:0 0 8px;border:1px solid #f2ccd7;border-radius:12px;background:#fff6f8;overflow:hidden;box-sizing:border-box;";

          const summary = document.createElement("summary");
          const parentCount = nodes.length + collectionDefs.length;
          summary.textContent = def.title + " [" + parentCount + "]";
          summary.style.cssText = "display:list-item;cursor:pointer;list-style:none;font-weight:800;color:#b53a62;background:#fff0f4;padding:10px 12px;";
          wrap.appendChild(summary);

          const body = document.createElement("div");
          body.className = "attire-r18-parent-body";
          body.style.cssText = "display:block;width:100%;max-width:100%;padding:8px 0 2px;box-sizing:border-box;";

          const subgroupDefs = Array.isArray(def.subgroups) ? def.subgroups : [];
          if (subgroupDefs.length && nodes.length > 1){
            const subgroupMap = new Map();
            subgroupDefs.forEach(function(sub){ subgroupMap.set(sub.title, []); });
            const rest = [];
            nodes.forEach(function(node){
              const txt = getText(node);
              const sub = subgroupDefs.find(function(entry){ return entry.match(txt); });
              if (sub) subgroupMap.get(sub.title).push(node);
              else rest.push(node);
            });
            if (rest.length) subgroupMap.set("📦 その他", rest);

            Array.from(subgroupMap.entries()).forEach(function(entry){
              const subTitle = entry[0];
              const subNodes = entry[1] || [];
              if (!subNodes.length) return;
              const subWrap = document.createElement("details");
              subWrap.className = "attire-r18-subgroup";
              subWrap.open = false;
              subWrap.style.cssText = "display:block;width:100%;max-width:100%;margin:0 0 8px;border:1px solid #f7d9e2;border-radius:10px;background:#fff;overflow:hidden;box-sizing:border-box;";
              const subSummary = document.createElement("summary");
              subSummary.textContent = subTitle + " [" + subNodes.length + "]";
              subSummary.style.cssText = "display:list-item;cursor:pointer;list-style:none;font-weight:700;color:#a14966;background:#fff7f9;padding:9px 12px;";
              subWrap.appendChild(subSummary);
              const subBody = document.createElement("div");
              subBody.className = "attire-r18-subgroup-body";
              subBody.style.cssText = "display:block;width:100%;max-width:100%;padding:6px 0 2px;box-sizing:border-box;";
              subNodes.forEach(function(node){
                if (!node) return;
                node.style.width = "100%";
                node.style.maxWidth = "100%";
                node.style.boxSizing = "border-box";
                subBody.appendChild(node);
              });
              subWrap.appendChild(subBody);
              body.appendChild(subWrap);
            });
          } else {
            nodes.forEach(function(node){
              if (!node) return;
              node.style.width = "100%";
              node.style.maxWidth = "100%";
              node.style.boxSizing = "border-box";
              body.appendChild(node);
            });
          }
          collectionDefs.forEach(function(collection){
            const collectionNode = createR18CollectionNode(collection);
            if (collectionNode) body.appendChild(collectionNode);
          });
          wrap.appendChild(body);
          return wrap;
        }

        const deferredLegacyDefs = [];
        r18ParentDefs.forEach(function(def){
          const nodes = r18Groups.get(def.title) || [];
          const collectionDefs = r18CollectionDefs[def.title] || [];
          if (!nodes.length && !collectionDefs.length) return;

          if (collectionDefs.length) return;

          // 旧「💧 汚れ・液体系」は上段に特化コレクションをミラー追加済みのため、ここでは描画しない
          if (def.title === "💧 汚れ・液体系") return;

          if (nodes.length <= 1) {
            deferredLegacyDefs.push({ def: def, nodes: nodes, collectionDefs: collectionDefs });
            return;
          }
          const wrap = buildR18ParentWrap(def, nodes, []);
          r18Zone.appendChild(wrap);
        });

        if (deferredLegacyDefs.length){
          const legacyDivider = document.createElement("div");
          legacyDivider.className = "attire-r18-legacy-divider";
          legacyDivider.style.cssText = "display:flex;align-items:center;gap:10px;width:100%;max-width:100%;margin:4px 0 10px;color:#9d6578;font-weight:800;box-sizing:border-box;";
          const legacyLineL = document.createElement("span");
          legacyLineL.style.cssText = "flex:1;height:1px;background:#ead6de;display:block;";
          const legacyLabel = document.createElement("span");
          legacyLabel.textContent = "📦 既存R-18棚";
          legacyLabel.style.cssText = "white-space:nowrap;font-size:13px;letter-spacing:0.02em;";
          const legacyLineR = document.createElement("span");
          legacyLineR.style.cssText = "flex:1;height:1px;background:#ead6de;display:block;";
          legacyDivider.appendChild(legacyLineL);
          legacyDivider.appendChild(legacyLabel);
          legacyDivider.appendChild(legacyLineR);
          r18Zone.appendChild(legacyDivider);

          deferredLegacyDefs.forEach(function(entry){
            const miniWrap = buildR18ParentWrap(entry.def, entry.nodes, []);
            miniWrap.style.margin = "0 0 8px";
            r18Zone.appendChild(miniWrap);
          });
        }

        root.appendChild(r18Zone);
      }
    }catch(_){}
    finally{
      try{
        const root = (parent && parent.querySelector)
          ? (parent.querySelector(".section-content") || parent)
          : (document.querySelector("#list-attire .section-content") || document.getElementById("list-attire"));
        if (root) root.__attireNormalizing = false;
      }catch(_){}
    }
  };

  window.__ensureAttireNormalObserver = window.__ensureAttireNormalObserver || function(parent){
    try{
      const root = (parent && parent.querySelector)
        ? (parent.querySelector(".section-content") || parent)
        : (document.querySelector("#list-attire .section-content") || document.getElementById("list-attire"));
      if (!root || root.__attireNormalObserverInstalled) return;
      let scheduled = false;
      const run = function(){
        if (scheduled) return;
        scheduled = true;
        requestAnimationFrame(function(){
          scheduled = false;
          try{ window.__normalizeAttireLayout(root); }catch(_){}
        });
      };
      const obs = new MutationObserver(function(){
        if (root.__attireNormalizing) return;
        run();
      });
      obs.observe(root, { childList: true });
      root.__attireNormalObserverInstalled = true;
      root.__attireNormalObserver = obs;
      setTimeout(run, 0);
      setTimeout(run, 120);
      setTimeout(run, 500);
    }catch(_){}
  };

window.__attireEnsureZones = window.__attireEnsureZones || function(parent){
    const contentArea = (parent && parent.querySelector) ? (parent.querySelector(".section-content") || parent) : parent;
    if (!contentArea) return { contentArea: parent, specialZone: null, r18Zone: null };

    let specialZone = contentArea.querySelector("#__attire_special_top_zone__");
    if (!specialZone){
      specialZone = document.createElement("div");
      specialZone.id = "__attire_special_top_zone__";
      specialZone.style.cssText = "display:block; width:100%;";
      if (contentArea.firstChild && contentArea.insertBefore) contentArea.insertBefore(specialZone, contentArea.firstChild);
      else contentArea.appendChild(specialZone);
    } else if (contentArea.firstChild !== specialZone && contentArea.insertBefore) {
      contentArea.insertBefore(specialZone, contentArea.firstChild);
    }

    let r18Zone = contentArea.querySelector("#__attire_r18_last_zone__");
    if (!r18Zone){
      r18Zone = document.createElement("div");
      r18Zone.id = "__attire_r18_last_zone__";
      r18Zone.style.cssText = "display:block; width:100%;";
      contentArea.appendChild(r18Zone);
    } else if (contentArea.lastChild !== r18Zone) {
      contentArea.appendChild(r18Zone);
    }

    if (!contentArea.__attireZoneObserver){
      const observer = new MutationObserver(function(){
        try{
          if (contentArea.firstChild !== specialZone && contentArea.insertBefore){
            contentArea.insertBefore(specialZone, contentArea.firstChild);
          }
          if (contentArea.lastChild !== r18Zone){
            contentArea.appendChild(r18Zone);
          }
        }catch(_){}
      });
      observer.observe(contentArea, { childList: true });
      contentArea.__attireZoneObserver = observer;
    }

    return { contentArea, specialZone, r18Zone };
  };

  try{ window.__ensureAttireNormalObserver(document.getElementById("list-attire") || document.body); }catch(_){}

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-attire") || container;
      const existing = parent.querySelector(".attire-v1-container");
      if (existing) existing.remove();

      const section = document.createElement("div");
      section.className = "attire-v1-container";

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.style.marginBottom = "6px";
        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.fontWeight = "bold";
        summary.style.cursor = "pointer";
        summary.style.background = "#f9f9f9";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.padding = "8px";
        content.style.display = "grid";
        content.style.gridTemplateColumns = "repeat(auto-fill, minmax(140px, 1fr))";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.display = "flex";
          label.style.alignItems = "center";
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          cb.addEventListener('change', function(){
      if(__v23PresetApplying) return;
      const root = label.closest('.attire-v23-container');
      if(root) clearPresetUI(root);
    });
    label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        
        details.appendChild(content);
        section.appendChild(details);
      });
      parent.appendChild(section);

      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(i => dict[i.en] = i.ja);
        window.__outputTranslation.register(dict);
      }
    },
    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v1-container input[type='checkbox']:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.attire.v2.js ---
(function(){
  "use strict";
  const VERSION = 7; // 制服・職業・スポーツ (大幅増量版)
  const KEY = "attire";

  const CATEGORIES = {
    "🏫 学校制服 (School Uniforms)": [
      { ja: "セーラー服", en: "sailor uniform" }, { ja: "夏服セーラー", en: "summer sailor uniform" },
      { ja: "ブレザー制服", en: "school uniform, blazer" }, { ja: "学ラン", en: "gakuran" },
      { ja: "カーディガン制服", en: "school uniform, cardigan" }, { ja: "ベスト制服", en: "school uniform, sweater vest" },
      { ja: "ジャンパースカート", en: "jumper skirt" }, { ja: "チェック柄スカート", en: "plaid skirt" },
      { ja: "体操服 (ブルマ)", en: "gym uniform, bloomers" }, { ja: "体操服 (短パン)", en: "gym uniform, gym shorts" },
      { ja: "スクール水着", en: "school swimsuit" }, { ja: "上履き", en: "uwabaki" }
    ],
    "💼 職業・公務 (Professional/Service)": [
      { ja: "スーツ (ビジネス)", en: "business suit" }, { ja: "OL制服 (ベスト)", en: "office lady uniform" },
      { ja: "警察官", en: "police uniform" }, { ja: "軍服", en: "military uniform" },
      { ja: "CA (客室乗務員)", en: "flight attendant uniform" }, { ja: "パイロット", en: "pilot uniform" },
      { ja: "探偵コート", en: "detective trench coat" }, { ja: "警備員", en: "security guard uniform" },
      { ja: "シェフ/コック", en: "chef uniform" }, { ja: "カフェ店員", en: "waitress apron" },
      { ja: "整備士 (ツナギ)", en: "mechanic jumpsuit" }, { ja: "巫女服", en: "miko attire" },
      { ja: "シスター", en: "nun habit" }, { ja: "消防士", en: "firefighter uniform" }
    ],
    "💉 医療・科学 (Medical/Science)": [
      { ja: "ナース服 (白)", en: "nurse uniform" }, { ja: "ナース服 (ピンク)", en: "pink nurse uniform" },
      { ja: "手術着 (スクラブ)", en: "scrubs" }, { ja: "白衣 (ドクター)", en: "lab coat" },
      { ja: "聴診器", en: "stethoscope" }, { ja: "眼帯 (医療用)", en: "medical eyepatch" }
    ],
    "🎉 汎用エンタメ・舞台衣装 (General Performance)": [
      { ja: "メイド服", en: "maid apron" }, { ja: "クラシックメイド", en: "long maid dress" },
      { ja: "バニーガール", en: "bunny suit" }, { ja: "レースクイーン", en: "race queen" },
      { ja: "チアリーダー", en: "cheerleader" }, { ja: "シンプルなアイドル衣装", en: "simple idol outfit" },
      { ja: "チャイナドレス", en: "cheongsam" }
    ],
    "🏅 スポーツ・競技 (Sports/Athletics)": [
      { ja: "スポーツウェア", en: "sportswear" }, { ja: "ジャージ", en: "track suit" },
      { ja: "テニスウェア", en: "tennis uniform" }, { ja: "バレーユニフォーム", en: "volleyball uniform" },
      { ja: "バスケユニフォーム", en: "basketball jersey" }, { ja: "サッカーユニフォーム", en: "soccer uniform" },
      { ja: "野球ユニフォーム", en: "baseball uniform" }, { ja: "競泳水着", en: "competition swimsuit" },
      { ja: "陸上ユニフォーム", en: "track and field uniform" }, { ja: "フィギュア衣装", en: "figure skating dress" }
    ],
    "🥋 武道・格闘技 (Martial Arts)": [
      { ja: "柔道着/空手着", en: "gi" }, { ja: "剣道着", en: "kendo uniform" },
      { ja: "弓道着", en: "kyudo uniform" }, { ja: "ボクシングパンツ", en: "boxing shorts" },
      { ja: "カンフー服", en: "kung fu outfit" }, { ja: "忍者スーツ", en: "ninja suit" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-attire") || container;
      // v2はv1の下に追加する想定だが、単独動作も考慮
      
      // 既存のv2コンテナがあれば削除（更新用）
      const existing = parent.querySelector(".attire-v2-container");
      if(existing) existing.remove();

      const section = document.createElement("div");
      section.className = "attire-v2-container";
      
      // 区切り線
      const sep = document.createElement("div");
      sep.style.cssText = "margin:15px 0 10px 0; border-top:1px dashed #ccc; text-align:center; color:#888; font-size:0.8em;";
      sep.textContent = "▼ 制服・職業・スポーツ (v2 Expanded) ▼";
      section.appendChild(sep);

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.style.marginBottom = "6px";
        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.fontWeight = "bold";
        summary.style.cursor = "pointer";
        summary.style.background = "#f0f8ff"; // 薄い青で区別
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.padding = "8px";
        content.style.display = "grid";
        content.style.gridTemplateColumns = "repeat(auto-fill, minmax(140px, 1fr))";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.display = "flex";
          label.style.alignItems = "center";
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        details.appendChild(content);
        section.appendChild(details);
      });
      
      parent.appendChild(section);

      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(i => dict[i.en] = i.ja);
        window.__outputTranslation.register(dict);
      }
    },
    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v2-container input[type='checkbox']:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.attire.v3.js ---
(function(){
  "use strict";
  const VERSION = 10; // ファンタジー・民族・現代スタイル (統合版)
  const KEY = "attire";

  const CATEGORIES = {
    "⚔️ ファンタジー・RPGジョブ (Fantasy Class)": [
      { ja: "プレートアーマー (重装)", en: "plate armor" },
      { ja: "チェインメイル (鎖帷子)", en: "chainmail armor" },
      { ja: "レザーアーマー (軽装)", en: "leather armor" },
      { ja: "ビキニアーマー", en: "bikini armor" },
      { ja: "聖騎士 (パラディン)", en: "paladin armor" },
      { ja: "蛮族 (バーバリアン)", en: "barbarian clothes, fur trim" },
      { ja: "修道士 (モンク)", en: "monk robe" },
      { ja: "魔法使い (ローブ)", en: "wizard robe" },
      { ja: "司祭/クレリック", en: "cleric vestments" },
      { ja: "ドルイド (自然)", en: "druid clothes, leaf pattern" },
      { ja: "盗賊/ローグ", en: "thief clothes, hood" },
      { ja: "吟遊詩人 (バード)", en: "bard clothes" },
      { ja: "踊り子 (ダンサー)", en: "dancer outfit, belly dancer" },
      { ja: "死霊術師 (ネクロ)", en: "necromancer robe, skull accessories" }
    ],
    "🌏 世界の民族衣装 (World Traditional)": [
      { ja: "チャイナドレス (旗袍)", en: "cheongsam" },
      { ja: "漢服 (中国古典)", en: "hanfu" },
      { ja: "アオザイ (ベトナム)", en: "ao dai" },
      { ja: "チマチョゴリ (韓国)", en: "hanbok" },
      { ja: "サリー (インド)", en: "sari" },
      { ja: "ディアンドル (ドイツ)", en: "dirndl" },
      { ja: "レーダーホーゼン", en: "lederhosen" },
      { ja: "キルト (スコットランド)", en: "kilt" },
      { ja: "フラメンコドレス", en: "flamenco dress" },
      { ja: "マタドール (闘牛士)", en: "matador costume" },
      { ja: "カフタン (中東)", en: "kaftan" },
      { ja: "ネイティブアメリカン", en: "native american regalia" },
      { ja: "フラダンス衣装", en: "hula outfit" }
    ],
    "👘 日本の伝統衣装 (Japanese Traditional)": [
      { ja: "着物 (基本)", en: "kimono" },
      { ja: "振袖", en: "furisode" },
      { ja: "留袖", en: "tomesode" },
      { ja: "白無垢 (花嫁)", en: "shiromuku" },
      { ja: "色打掛", en: "uchikake" },
      { ja: "浴衣", en: "yukata" },
      { ja: "袴 (ハカマ)", en: "hakama" },
      { ja: "巫女服", en: "miko attire" },
      { ja: "忍者装束", en: "ninja suit" },
      { ja: "侍 (着流し)", en: "samurai clothes" },
      { ja: "法被 (ハッピ)", en: "happi coat" }
    ],
    "🕶️ ファッションスタイル (Modern Styles)": [
      { ja: "ストリート系", en: "streetwear, oversized" },
      { ja: "テックウェア (機能的)", en: "techwear, straps, black" },
      { ja: "サイバーパンク", en: "cyberpunk attire, neon" },
      { ja: "スチームパンク", en: "steampunk attire, gears, brown" },
      { ja: "ゴシック", en: "gothic fashion" },
      { ja: "パンク", en: "punk fashion" },
      { ja: "グランジ", en: "grunge fashion" },
      { ja: "プレッピー (優等生)", en: "preppy style" },
      { ja: "ダークアカデミア", en: "dark academia, tweed, vintage" }, // ★追加
      { ja: "コテージコア (田舎風)", en: "cottagecore, peasant dress" }, // ★追加
      { ja: "ボヘミアン", en: "bohemian style" },
      { ja: "ヴィンテージ/レトロ", en: "vintage style" },
      { ja: "オートクチュール", en: "haute couture, avant-garde" }, // ★追加
      { ja: "アスレジャー (スポーティ)", en: "athleisure, sporty" }, // ★追加
      { ja: "ミニマリスト", en: "minimalist fashion" } // ★追加
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-attire");
      if (!parent) return;

      const existing = parent.querySelector(".attire-v3-container");
      if(existing) existing.remove();

      const section = document.createElement("div");
      section.className = "attire-v3-container";
      
      const sep = document.createElement("div");
      sep.style.cssText = "margin:15px 0 10px 0; border-top:1px dashed #ccc; text-align:center; color:#888; font-size:0.8em;";
      sep.textContent = "▼ ファンタジー・民族・スタイル (v3 Expanded) ▼";
      section.appendChild(sep);

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.style.marginBottom = "6px";
        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.fontWeight = "bold";
        summary.style.cursor = "pointer";
        summary.style.background = "#fff8e1"; 
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.padding = "8px";
        content.style.display = "grid";
        content.style.gridTemplateColumns = "repeat(auto-fill, minmax(140px, 1fr))";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.display = "flex";
          label.style.alignItems = "center";
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        details.appendChild(content);
        section.appendChild(details);
      });
      
      parent.appendChild(section);

      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(i => dict[i.en] = i.ja);
        window.__outputTranslation.register(dict);
      }
    },
    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v3-container input[type='checkbox']:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.attire.v4.js ---
(function(){
  "use strict";
  const VERSION = 4; // 下着・水着・足元の決定版
  const KEY = "attire";

  const CATEGORIES = {
    "👙 水着・スイムウェア (Swimwear Types)": [
      { ja: "ビキニ", en: "bikini" },
      { ja: "ワンピース水着", en: "one-piece swimsuit" },
      { ja: "モノキニ", en: "monokini" }, // ★追加
      { ja: "タンキニ", en: "tankini" }, // ★追加
      { ja: "マイクロビキニ", en: "micro bikini" },
      { ja: "紐ビキニ", en: "string bikini" }, // ★追加
      { ja: "フロントタイ (前結び)", en: "front-tie bikini" }, // ★追加
      { ja: "競泳水着", en: "competition swimsuit" },
      { ja: "スクール水着", en: "school swimsuit" },
      { ja: "白スク水", en: "white school swimsuit" }, // ★追加
      { ja: "スリングショット", en: "slingshot swimsuit" },
      { ja: "バンドゥビキニ", en: "bandeau bikini" }, // ★追加
      { ja: "フリルビキニ", en: "frilled bikini" }, // ★追加
      { ja: "ハイレグ", en: "highleg swimsuit" }
    ],
    "👙 下着・ランジェリー (Underwear/Lingerie)": [
      { ja: "ランジェリー (総称)", en: "lingerie" },
      { ja: "ブラジャー", en: "bra" },
      { ja: "スポーツブラ", en: "sports bra" },
      { ja: "パンティ", en: "panties" },
      { ja: "紐パン", en: "side-tie panties" },
      { ja: "縞パン (ボーダー)", en: "striped panties" }, // ★追加
      { ja: "Tバック/Gストリング", en: "thong" }, // ★追加
      { ja: "レースの下着", en: "lace underwear" }, // ★追加
      { ja: "サテンの下着", en: "satin lingerie" }, // ★追加
      { ja: "ベビードール", en: "babydoll" },
      { ja: "キャミソール", en: "camisole" },
      { ja: "コルセット", en: "corset" }, // ★追加
      { ja: "テディ", en: "teddy" }, // ★追加
      { ja: "さらし (胸)", en: "sarashi" }, // ★追加
      { ja: "ふんどし", en: "fundoshi" }, // ★追加
      { ja: "ニプレス", en: "pasties" } // ★追加
    ],
    "🧦 レッグウェア・靴下 (Legwear)": [
      { ja: "ニーソックス", en: "kneehighs" },
      { ja: "オーバーニー", en: "thighhighs" },
      { ja: "サイハイソックス", en: "thighhighs" },
      { ja: "パンスト", en: "pantyhose" },
      { ja: "黒タイツ", en: "black tights" },
      { ja: "網タイツ", en: "fishnets" },
      { ja: "ガーターベルト", en: "garter belt" },
      { ja: "白ソックス", en: "white socks" }, // ★追加
      { ja: "ルーズソックス", en: "loose socks" }, // ★追加
      { ja: "レッグウォーマー", en: "leg warmers" }, // ★追加
      { ja: "足袋 (タビ)", en: "tabi" } // ★追加
    ],
    "👠 靴 (Footwear)": [
      { ja: "スニーカー", en: "sneakers" },
      { ja: "ブーツ", en: "boots" },
      { ja: "ハイヒール", en: "high heels" },
      { ja: "ローファー", en: "loafers" },
      { ja: "サンダル", en: "sandals" },
      { ja: "裸足", en: "barefoot" }
    ],
    "😳 着こなし・状態 (State/Fetish)": [
      { ja: "絶対領域", en: "zettai ryouiki" },
      { ja: "透け感 (シースルー)", en: "see-through" },
      { ja: "濡れた服", en: "wet clothes" },
      { ja: "はだけた", en: "open clothes" },
      { ja: "ぴっちり (Skintight)", en: "skintight" },
      { ja: "胸元・谷間", en: "cleavage" },
      { ja: "へそ出し", en: "midriff" },
      { ja: "肩出し", en: "bare shoulders" },
      { ja: "食い込み", en: "clothing cutout" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-attire");
      if (!parent) return;

      const section = document.createElement("div");
      section.className = "attire-v4-container";

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.style.marginBottom = "6px";
        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.fontWeight = "bold";
        summary.style.cursor = "pointer";
        summary.style.background = "#f9f9f9";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.padding = "8px";
        content.style.display = "grid";
        content.style.gridTemplateColumns = "repeat(auto-fill, minmax(140px, 1fr))";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.display = "flex";
          label.style.alignItems = "center";
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        details.appendChild(content);
        section.appendChild(details);
      });
      
      parent.appendChild(section);

      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(i => dict[i.en] = i.ja);
        window.__outputTranslation.register(dict);
      }
    },
    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v4-container input[type='checkbox']:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.attire.v5.js ---
(function(){
  "use strict";
  const VERSION = 17; // 拡張パックE (デザイン詳細・柄)
  const KEY = "attire";

  const ATTIRE_DATA = {

    "🪩 ホログラフィック衣装 (Holographic Outfits)": [
      { ja: "ホログラフィック・ボディスーツ", en: "holographic bodysuit" },
      { ja: "ホログラフィック・タクティカルスーツ", en: "holographic tactical suit" },
      { ja: "ホログラフィック・オペレーターユニフォーム", en: "holographic operator uniform" },
      { ja: "ホログラフィック・ドレス", en: "holographic dress" },
      { ja: "透明ホロ・クローク", en: "transparent holo-cloak" },
      { ja: "プリズム発光アーマー", en: "prismatic light-emitting armor" }
    ],

    "👚 袖・肩・腕 (Sleeves & Arms)": [
      { ja: "ノースリーブ (袖なし)", en: "sleeveless" }, { ja: "半袖", en: "short sleeves" },
      { ja: "長袖", en: "long sleeves" }, { ja: "パフスリーブ", en: "puff sleeves" },
      { ja: "萌え袖", en: "sleeves past fingers" }, { ja: "付け袖 (分離袖)", en: "detached sleeves" },
      { ja: "ベルスリーブ (広がり)", en: "bell sleeves" }, { ja: "オフショルダー", en: "off-shoulder" },
      { ja: "肩出し (ベアショルダー)", en: "bare shoulders" }, { ja: "ワイドスリーブ", en: "wide sleeves" }
    ],
    "🧣 襟・首元 (Neckline & Collars)": [
      { ja: "セーラー襟", en: "sailor collar" }, { ja: "タートルネック", en: "turtleneck" },
      { ja: "ホルターネック", en: "halterneck" }, { ja: "Vネック", en: "v-neck" },
      { ja: "深いVネック (胸元)", en: "plunging neckline" }, { ja: "襟付き", en: "collared" },
      { ja: "スタンドカラー", en: "stand collar" }, { ja: "フード付き", en: "hooded" }
    ],
    "👗 形状・フィット (Shape & Fit)": [
      { ja: "オーバーサイズ (だぼだぼ)", en: "oversized" }, { ja: "タイト (ぴっちり)", en: "tight" },
      { ja: "ボディコン", en: "bodycon" }, { ja: "ハイウエスト", en: "high waist" },
      { ja: "ローライズ", en: "low-rise" }, { ja: "Aライン", en: "a-line" },
      { ja: "スリット入り", en: "slit" }, { ja: "アシンメトリー (左右非対称)", en: "asymmetrical" }
    ],
    "🏁 柄・プリント (Patterns)": [
      { ja: "チェック柄 (プレイド)", en: "plaid" }, { ja: "タータンチェック", en: "tartan" },
      { ja: "ストライプ (縦縞)", en: "striped" }, { ja: "ボーダー (横縞)", en: "horizontal stripes" },
      { ja: "水玉 (ドット)", en: "polka dot" }, { ja: "花柄", en: "floral print" },
      { ja: "迷彩柄", en: "camouflage" }, { ja: "ヒョウ柄", en: "leopard print" },
      { ja: "アーガイル", en: "argyle" }, { ja: "和柄", en: "japanese pattern" },
      { ja: "ロゴプリント", en: "print shirt" }, { ja: "無地", en: "plain" }
    ],
    "🎀 装飾・ディテール (Decorations)": [
      { ja: "フリル", en: "frills" }, { ja: "レース", en: "lace" },
      // リボンやベルトは accessories に移動したため削除
      { ja: "ボタン", en: "buttons" }, { ja: "ファスナー/ジッパー", en: "zipper" },
      { ja: "コルセット編み上げ", en: "laced up" }, 
      { ja: "ファー (トリミング)", en: "fur trim" }, // 部分的なファーは装飾として残す
      { ja: "ポンポン", en: "pom pom" }, { ja: "刺繍", en: "embroidery" }
    ]
  };

  // 翻訳辞書
  const DICT = {};
  Object.values(ATTIRE_DATA).flat().forEach(item => {
    if(item.en && item.ja) DICT[item.en] = item.ja;
  });

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      let parent = document.querySelector("#list-attire");
      if (!parent) return;

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "attire-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        details.open = false; 

        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f9f9f9; color:#555;";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:6px;";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          cb.style.marginRight = "6px";
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const root = document.createElement("div");
      root.className = "attire-v5-container";
      
      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });
const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v5-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.val || cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.attire.v6.js ---
(function(){
  "use strict";
  const VERSION = 18; // 拡張パックF (状態・ダメージ・着こなし)
  const KEY = "attire";

  // ★ 素材(Leather等)や質感(Shiny等)を削除し、状態異常に特化
  const ATTIRE_DATA = {
    "💥 ダメージ・汚れ (Damage & Dirt)": [
      { ja: "破れた服", en: "torn clothes" },
      { ja: "ボロボロ", en: "tattered" },
      { ja: "ダメージ加工", en: "distressed clothes" },
      { ja: "切り裂かれた", en: "slashed clothes" },
      { ja: "泥汚れ", en: "muddy" },
      { ja: "血まみれ", en: "bloodstained" },
      { ja: "オイル汚れ", en: "oil stains" },
      { ja: "焦げ跡", en: "burnt clothes" },
      { ja: "濡れた服", en: "wet clothes" }
    ],
    "😳 着崩し・脱衣 (Undressing & Open)": [
      { ja: "はだけた", en: "open clothes" },
      { ja: "前開き", en: "unzipped" },
      { ja: "ボタン外し", en: "unbuttoned" },
      { ja: "脱ぎかけ", en: "undressing" },
      { ja: "肩出し (オフショル)", en: "off-shoulder" },
      { ja: "片方だけ脱げた", en: "clothes slipping off" },
      { ja: "ブラが見えている", en: "bra visible" },
      { ja: "パンツが見えている", en: "panties visible" },
      { ja: "シャツを捲り上げる", en: "shirt lift" },
      { ja: "スカート捲り", en: "skirt lift" }
    ],
    "サイズ感・フィット (Fit)": [
      { ja: "オーバーサイズ (ぶかぶか)", en: "oversized" },
      { ja: "萌え袖", en: "sleeves past fingers" },
      { ja: "ピチピチ (タイト)", en: "tight clothes" },
      { ja: "ボディコンシャス", en: "bodycon" },
      { ja: "サイズが合っていない", en: "ill-fitted clothes" }
    ]
  };

  // 翻訳辞書
  const DICT = {};
  Object.values(ATTIRE_DATA).flat().forEach(item => {
    if(item.en && item.ja) DICT[item.en] = item.ja;
  });

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      let parent = document.querySelector("#list-attire");
      if (!parent) return;

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "attire-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        // 特殊な状態指定なので、デフォルトは閉じておく
        details.open = false; 

        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#fff0f5; color:#8b0000;";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:6px;";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          cb.style.marginRight = "6px";
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const root = document.createElement("div");
      root.className = "attire-v6-container";
      
      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v6-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.attire.v7.js ---
(function(){
  "use strict";
  const VERSION = 15; // 拡張パックG (ファッション系統・サブカル)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "🦄 原宿・カワイイ系 (Harajuku/Kawaii)": [
      { ja: "ゆめかわいい", en: "yume kawaii" }, 
      { ja: "病みかわいい", en: "yami kawaii" },
      { ja: "フェアリー系", en: "fairy kei" }, 
      { ja: "デコラ (派手)", en: "decora" },
      { ja: "ポップ系", en: "pop kei" }, 
      { ja: "ロリータ (基本)", en: "lolita fashion" },
      { ja: "原宿スタイル", en: "harajuku style" }
    ],
    "🖤 地雷・量産・ゴシック (Dark/Girly)": [
      { ja: "地雷系 (Jiraikei)", en: "jiraikei" }, 
      { ja: "量産型 (Ryousangata)", en: "ryousangata" },
      { ja: "パステルゴス", en: "pastel goth" }, 
      { ja: "ゴシック", en: "gothic" },
      { ja: "メンヘラ", en: "menhera" }, 
      { ja: "パンク", en: "punk fashion" },
      { ja: "ロック", en: "rock style" }
    ],
    "🌺 ギャル・レトロ・森 (Gal/Retro/Mori)": [
      { ja: "ギャル", en: "gyaru" }, 
      { ja: "姫ギャル", en: "hime gyaru" },
      { ja: "コギャル (90s)", en: "kogal" }, 
      { ja: "森ガール", en: "mori girl" },
      { ja: "ドーリー系 (人形)", en: "dolly kei" }, 
      { ja: "カルトパーティ系", en: "cult party kei" },
      { ja: "アンティークドール", en: "antique doll" },
      { ja: "Y2Kファッション", en: "y2k fashion" }
    ],
    "🎀 ロリータ派生 (Lolita Subgenres)": [
      { ja: "甘ロリ (スウィート)", en: "sweet lolita" }, 
      { ja: "クラロリ (クラシック)", en: "classic lolita" },
      { ja: "ゴスロリ", en: "gothic lolita" }, 
      { ja: "和ロリ (着物風)", en: "wa-lolita" },
      { ja: "中華ロリ (チャイナ風)", en: "qi-lolita" }, 
      { ja: "ミリタリーロリータ", en: "military lolita" },
      { ja: "パンクロリータ", en: "punk lolita" }, 
      { ja: "姫ロリ", en: "hime lolita" }
    ]
  };

  // 翻訳辞書
  const DICT = {};
  Object.values(ATTIRE_DATA).flat().forEach(item => {
    if(item.en && item.ja) DICT[item.en] = item.ja;
  });

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      let parent = document.querySelector("#list-attire");
      if (!parent) return;

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "attire-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        details.open = false; 

        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f9f9f9; color:#555;";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:6px;";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          cb.style.marginRight = "6px";
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const root = document.createElement("div");
      root.className = "attire-v15-container";
      
      const sep = document.createElement("div");
      sep.style.cssText = "margin:14px 0 10px 0; border-top:1px dashed #d8d8d8; text-align:center; color:#8f7286; font-size:0.82em;";
      sep.textContent = "▼ サブカル・派生ファッション ▼";
      root.appendChild(sep);

      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      const afterModern = contentArea.querySelector(".attire-v3-container");
      const beforeSeasonal = contentArea.querySelector(".attire-v20-container");
      if (afterModern && afterModern.nextSibling) {
        contentArea.insertBefore(root, afterModern.nextSibling);
      } else if (afterModern) {
        contentArea.appendChild(root);
      } else if (beforeSeasonal) {
        contentArea.insertBefore(root, beforeSeasonal);
      } else {
        contentArea.appendChild(root);
      }
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v15-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();

(function(){
// --- builder_ui.section.attire.v8.js ---
(function(){
  "use strict";
  const VERSION = 11; // 拡張パックH (SF・戦術・特殊衣装)
  const KEY = "attire";

  // ★ 小物(ゴーグル等)は accessories.v1.js に移動し、スーツ本体のみ残す
  const ATTIRE_DATA = {
    "🤖 SF・近未来スーツ (Sci-Fi Suits)": [
      { ja: "プラグスーツ", en: "plugsuit" }, { ja: "パイロットスーツ", en: "pilot suit" },
      { ja: "メカニカルスーツ", en: "mechanical suit" }, { ja: "サイバースーツ", en: "cybersuit" },
      { ja: "宇宙服", en: "space suit" }, { ja: "強化外骨格", en: "exoskeleton" },
      { ja: "ナノスーツ", en: "nano suit" }, { ja: "アンドロイドパーツ", en: "android parts" },
      { ja: "発光スーツ", en: "glowing suit" }, { ja: "ボディアーマー (SF)", en: "sci-fi armor" }
    ],
    "🔫 タクティカル・軍事 (Tactical Gear)": [
      { ja: "タクティカルベスト", en: "tactical vest" }, { ja: "プレートキャリア", en: "plate carrier" },
      { ja: "チェストリグ", en: "chest rig" }, { ja: "防弾チョッキ", en: "bulletproof vest" },
      { ja: "コンバットシャツ", en: "combat shirt" }, { ja: "カーゴパンツ", en: "cargo pants" },
      { ja: "ギリースーツ", en: "ghillie suit" }, { ja: "迷彩服 (カモ)", en: "camouflage uniform" },
      { ja: "軍用ハーネス", en: "military harness" }
      // ガスマスク、暗視ゴーグルは accessories へ移動
    ],
    "🦸 ヒーロー・バトル (Hero & Battle)": [
      { ja: "ヒーロースーツ", en: "superhero suit" }, { ja: "戦隊スーツ", en: "sentai suit" },
      { ja: "バトルスーツ", en: "battlesuit" }, { ja: "レオタード", en: "leotard" },
      { ja: "ハイレグ", en: "highleg" }, { ja: "忍者スーツ", en: "ninja suit" },
      { ja: "くノ一衣装", en: "kunoichi outfit" }, { ja: "格闘着", en: "fighting suit" },
      { ja: "レーシングスーツ", en: "racing suit" }, { ja: "ライダースーツ", en: "rider suit" }
    ],
    "⚠️ ユニーク・特殊衣装 (Unique/Special)": [
      { ja: "拘束衣", en: "straitjacket" }, { ja: "防護服 (ハズマット)", en: "hazmat suit" },
      { ja: "囚人服", en: "prison uniform" }, { ja: "包帯巻き", en: "bandaged" },
      { ja: "ミイラ", en: "mummy" }, { ja: "スケルトンスーツ", en: "skeleton suit" },
      { ja: "透明レインコート", en: "transparent raincoat" }, { ja: "ビニール服", en: "plastic clothes" },
      { ja: "ボロ布", en: "rags" }, { ja: "裸エプロン", en: "naked apron" },
      { ja: "裸リボン", en: "naked ribbon" }
    ]
  };

  // 翻訳辞書
  const DICT = {};
  Object.values(ATTIRE_DATA).flat().forEach(item => {
    if(item.en && item.ja) DICT[item.en] = item.ja;
  });

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      let parent = document.querySelector("#list-attire");
      if (!parent) return;

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "attire-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        details.open = false; 
        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f9f9f9; color:#555;";
        details.appendChild(summary);
        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:6px;";
        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          cb.style.marginRight = "6px";
          label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const root = document.createElement("div");
      root.className = "attire-v8-container";
      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });
      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },
    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v8-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.attire.v9.js ---
(function(){
  "use strict";
  const VERSION = 5; // 拡張パックI (フットウェア・レッグウェア詳細)
  const KEY = "attire";

  // ★ 帽子や髪飾りは accessories.v1.js に任せ、足元詳細に特化
  const ATTIRE_DATA = {
    "👠 靴・フットウェア (Footwear)": [
      { ja: "スニーカー", en: "sneakers" }, { ja: "ハイカット", en: "high-top sneakers" },
      { ja: "ローファー", en: "loafers" }, { ja: "上履き", en: "uwabaki" },
      { ja: "ハイヒール", en: "high heels" }, { ja: "パンプス", en: "pumps" },
      { ja: "厚底靴", en: "platform shoes" }, { ja: "サンダル", en: "sandals" },
      { ja: "グラディエーター", en: "gladiator sandals" }, { ja: "ブーツ", en: "boots" },
      { ja: "アンクルブーツ", en: "ankle boots" }, { ja: "コンバットブーツ", en: "combat boots" },
      { ja: "ニーハイブーツ", en: "thigh high boots" }, { ja: "下駄", en: "geta" },
      { ja: "草履", en: "zori" }, { ja: "裸足", en: "barefoot" }
    ],
    "🧦 レッグウェア・靴下 (Legwear)": [
      { ja: "ニーソックス", en: "kneehighs" }, { ja: "オーバーニー", en: "thighhighs" },
      { ja: "サイハイソックス", en: "thighhighs" }, { ja: "ルーズソックス", en: "loose socks" },
      { ja: "ラインソックス", en: "striped socks" }, { ja: "スクールソックス", en: "white socks" },
      { ja: "黒タイツ", en: "black tights" }, { ja: "パンスト", en: "pantyhose" },
      { ja: "網タイツ", en: "fishnets" }, { ja: "ガーターベルト", en: "garter belt" },
      { ja: "レッグウォーマー", en: "leg warmers" }, { ja: "トレンカ", en: "stirrup legwear" },
      { ja: "足袋 (タビ)", en: "tabi" }, { ja: "裸足 (脚)", en: "bare legs" }
    ]
  };

  // 翻訳辞書
  const DICT = {};
  Object.values(ATTIRE_DATA).flat().forEach(item => {
    if(item.en && item.ja) DICT[item.en] = item.ja;
  });

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      let parent = document.querySelector("#list-attire");
      if (!parent) return;

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "attire-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        details.open = false; 
        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f9f9f9; color:#555;";
        details.appendChild(summary);
        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:6px;";
        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          cb.style.marginRight = "6px";
          label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const root = document.createElement("div");
      root.className = "attire-v9-container";
      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });
      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },
    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v9-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.attire.v10.js ---
(function(){
  "use strict";
  const VERSION = 8; // 拡張パックJ (部屋着・スポーツ・コスプレ詳細)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "🛌 部屋着・リラックス (Roomwear)": [
      { ja: "パジャマ", en: "pajamas" }, { ja: "ネグリジェ", en: "negligee" },
      { ja: "ベビードール", en: "babydoll" }, { ja: "キャミソール", en: "camisole" },
      { ja: "オーバーサイズパーカー", en: "oversized hoodie" }, { ja: "彼シャツ (Yシャツ一枚)", en: "boyfriend shirt" },
      { ja: "パーカー＆パンツ", en: "hoodie and panties" }, { ja: "タンクトップ＆短パン", en: "tank top and shorts" },
      { ja: "バスローブ", en: "bathrobe" }, { ja: "タオル一枚", en: "towel" }
    ],
    "🏃 スポーツ・アクティブ (Activewear)": [
      { ja: "ヨガパンツ", en: "yoga pants" }, { ja: "レギンス", en: "leggings" },
      { ja: "スポーツブラ", en: "sports bra" }, { ja: "トラックジャケット", en: "track jacket" },
      { ja: "テニスウェア", en: "tennis uniform" }, { ja: "バレーユニフォーム", en: "volleyball uniform" },
      { ja: "ラッシュガード", en: "rash guard" }, { ja: "ウェットスーツ", en: "wetsuit" },
      { ja: "バイカーショーツ", en: "bike shorts" }, { ja: "サンバイザー", en: "sun visor" }
    ],
    "🎃 コスプレ・職業詳細 (Cosplay/Jobs)": [
      { ja: "レースクイーン", en: "race queen" }, { ja: "チアリーダー", en: "cheerleader" },
      { ja: "バニーガール", en: "bunny suit" }, { ja: "逆バニー", en: "reverse bunny suit" },
      { ja: "ミニスカポリス", en: "police miniskirt" }, { ja: "ナース (ミニ)", en: "nurse dress" },
      { ja: "メイド (ミニ)", en: "maid mini dress" }, { ja: "フレンチメイド", en: "french maid" },
      { ja: "シスター (ミニ)", en: "nun mini habit" }, { ja: "チャイナ (スリット)", en: "china dress high slit" },
      { ja: "くノ一 (忍者)", en: "kunoichi" }
    ],
    "👙 水着・露出高め (Swimwear+)": [
      { ja: "マイクロビキニ", en: "micro bikini" }, { ja: "スリングショット", en: "slingshot swimsuit" },
      { ja: "競泳水着 (ハイレグ)", en: "competition swimsuit highleg" }, { ja: "スクール水着 (旧)", en: "old school swimsuit" },
      { ja: "貝殻ビキニ", en: "shell bikini" }, { ja: "チューブトップビキニ", en: "bandeau bikini" },
      { ja: "モノキニ", en: "monokini" }, { ja: "パレオ", en: "pareo" },
      { ja: "極小水着", en: "tiny swimwear" }
    ]
  };

  // 翻訳辞書
  const DICT = {};
  Object.values(ATTIRE_DATA).flat().forEach(item => {
    if(item.en && item.ja) DICT[item.en] = item.ja;
  });

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      let parent = document.querySelector("#list-attire");
      if (!parent) return;

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "attire-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        details.open = false; 

        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f9f9f9; color:#555;";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:6px;";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          cb.style.marginRight = "6px";
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const root = document.createElement("div");
      root.className = "attire-v10-container";
      
      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v10-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();

(function(){
// --- builder_ui.section.attire.v11.js ---
(function(){
  "use strict";
  const VERSION = 6; // 拡張パックK (ネイル・手元特化)
  const KEY = "attire";

  // ★ 小物・武器・マスクは accessories.v1.js に任せ、手元・ネイルに特化
  const ATTIRE_DATA = {
    "💅 ネイル・爪 (Nails & Claws)": [
      { ja: "マニキュア/ネイル", en: "nail polish" }, { ja: "赤ネイル", en: "red nails" },
      { ja: "黒ネイル", en: "black nails" }, { ja: "ピンクネイル", en: "pink nails" },
      { ja: "フレンチネイル", en: "french manicure" },
      { ja: "長い爪", en: "long nails" }, { ja: "鋭い爪 (Claws)", en: "claws" },
      { ja: "ネイルアート", en: "nail art" }, { ja: "グラデーションネイル", en: "gradient nails" },
      { ja: "グリッターネイル", en: "glitter nails" }
    ],
    "🧤 手袋・ハンドウェア (Gloves & Hands)": [
      { ja: "指なし手袋", en: "fingerless gloves" },
      { ja: "ロンググローブ", en: "long gloves" },
      { ja: "革手袋", en: "leather gloves" },
      { ja: "レース手袋", en: "lace gloves" },
      { ja: "ラテックス手袋", en: "latex gloves" },
      { ja: "ミトン", en: "mittens" },
      { ja: "ボクシンググローブ", en: "boxing gloves" },
      { ja: "包帯 (手)", en: "bandaged hands" }
    ]
  };

  // 翻訳辞書
  const DICT = {};
  Object.values(ATTIRE_DATA).flat().forEach(item => {
    if(item.en && item.ja) DICT[item.en] = item.ja;
  });

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      let parent = document.querySelector("#list-attire");
      if (!parent) return;

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "attire-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        details.open = false; 
        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f9f9f9; color:#555;";
        details.appendChild(summary);
        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:6px;";
        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          cb.style.marginRight = "6px";
          label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const root = document.createElement("div");
      root.className = "attire-v11-container";
      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });
      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },
    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v11-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.attire.v12.js ---
(function(){
  "use strict";
  const VERSION = 12; // 拡張パックL (サーカス・歴史・概念・無法者)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "🎪 サーカス・舞台衣装 (Circus & Stage)": [
      { ja: "ピエロ衣装", en: "clown suit" },
      { ja: "道化師 (ジェスター)", en: "jester costume" },
      { ja: "団長 (リングマスター)", en: "ringmaster outfit" },
      { ja: "マジシャン燕尾服", en: "magician suit, tailcoat" },
      { ja: "バニーマジシャン", en: "magician bunny suit" },
      { ja: "バレエ (チュチュ)", en: "ballet tutu" },
      { ja: "レオタード (曲芸)", en: "acrobat leotard" },
      { ja: "カーニバル衣装", en: "carnival costume, feathers" },
      { ja: "仮面舞踏会ドレス", en: "masquerade dress" },
      { ja: "歌姫ドレス (オペラ)", en: "diva dress, opera gown" },
      { ja: "バーレスク衣装", en: "burlesque outfit" }
    ],
    "🏛️ 古典・歴史的衣装 (Ancient & Historical)": [
      { ja: "トーガ (古代ローマ)", en: "toga" },
      { ja: "チュニック", en: "tunic" },
      { ja: "グラディエーター鎧", en: "gladiator armor" },
      { ja: "シュミーズ (中世下着)", en: "chemise" },
      { ja: "コルセットドレス", en: "corset dress" },
      { ja: "クリノリン (骨組み)", en: "crinoline" },
      { ja: "バッスルドレス (腰当)", en: "bustle dress" },
      { ja: "貴族の服", en: "aristocrat clothes" },
      { ja: "農民の服", en: "peasant clothes" },
      { ja: "王族のマント", en: "royal cape" },
      { ja: "宮廷ドレス (ロココ)", en: "rococo gown" },
      { ja: "ハイネックドレス (ヴィクトリアン)", en: "victorian dress" }
    ],
    "🏴‍☠️ 海賊・無法者 (Pirate & Outlaw)": [
      { ja: "海賊コート", en: "pirate coat" },
      { ja: "ボーダーシャツ", en: "striped shirt, torn" },
      { ja: "カウボーイベスト", en: "cowboy vest" },
      { ja: "チャップス (革脚絆)", en: "chaps" },
      { ja: "ポンチョ (西部劇)", en: "poncho" },
      { ja: "盗賊の服", en: "bandit clothes" },
      { ja: "ローグ/暗殺者", en: "assassin outfit, hood" },
      { ja: "バイカーベスト", en: "biker vest, leather" },
      { ja: "囚人服 (中世)", en: "medieval prisoner rags" }
    ],
    "🌌 概念・エレメンタル (Conceptual & Elemental)": [
      { ja: "炎のドレス", en: "dress made of fire" },
      { ja: "水の服", en: "clothes made of water" },
      { ja: "氷のアーマー", en: "ice armor" },
      { ja: "光る服", en: "glowing clothes" },
      { ja: "影の服", en: "shadow clothes" },
      { ja: "花のドレス", en: "flower dress" },
      { ja: "葉っぱの服", en: "leaf clothes" },
      { ja: "雲のドレス", en: "cloud dress" },
      { ja: "銀河のドレス", en: "galaxy dress" },
      { ja: "不可視 (インビジブル)", en: "invisible clothes" },
      { ja: "エネルギー体", en: "energy body" },
      { ja: "ホログラム服", en: "holographic clothing" }
    ]
  };

  // 翻訳辞書
  const DICT = {};
  Object.values(ATTIRE_DATA).flat().forEach(item => {
    if(item.en && item.ja) DICT[item.en] = item.ja;
  });

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      let parent = document.querySelector("#list-attire");
      if (!parent) return;

      // 既存コンテナ削除
      const existing = parent.querySelector(".attire-v12-container");
      if(existing) existing.remove();

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "attire-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        details.open = false; 

        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f9f9f9; color:#555;";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:6px;";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          cb.style.marginRight = "6px";
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const root = document.createElement("div");
      root.className = "attire-v12-container";
      
      // 区切り線
      const sep = document.createElement("div");
      sep.style.cssText = "margin:15px 0 10px 0; border-top:1px dashed #ccc; text-align:center; color:#888; font-size:0.8em;";
      sep.textContent = "▼ サーカス・歴史・概念 (v12 Expanded) ▼";
      root.appendChild(sep);

      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v12-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.attire.v13.js ---
(function(){
  "use strict";
  const VERSION = 9; // 拡張パックM (労働・和カジュアル・人生)
  const KEY = "attire";

  const CATEGORIES = {
    "🛠️ ワーク・軽作業 (Labor & Part-time)": [
      { ja: "エプロン (カフェ)", en: "apron, cafe uniform" },
      { ja: "割烹着", en: "kappogi, white apron" },
      { ja: "スーパーの制服", en: "supermarket uniform, polo shirt, apron" },
      { ja: "コンビニ制服", en: "convenience store uniform" },
      { ja: "ガソリンスタンド", en: "gas station uniform" },
      { ja: "清掃員 (ツナギ)", en: "janitor uniform, jumpsuit" },
      { ja: "作業着 (工事)", en: "construction worker, safety vest, helmet" },
      { ja: "農作業着", en: "farming clothes, straw hat, towel around neck" },
      { ja: "オーバーオール", en: "dungarees" },
      { ja: "配達員", en: "delivery uniform, cap" }
    ],
    "👘 和装・くつろぎ (Japanese Casual)": [
      { ja: "甚平 (じんべい)", en: "jinbei" },
      { ja: "作務衣 (さむえ)", en: "samue" },
      { ja: "旅館の浴衣", en: "ryokan yukata, simple pattern" },
      { ja: "半纏 (はんてん)", en: "hanten, winter japanese coat" },
      { ja: "着崩した着物", en: "loose kimono, disheveled" },
      { ja: "さらし (胸)", en: "sarashi, breast wrap" },
      { ja: "ふんどし", en: "fundoshi" }, // v4にもあるが和装セットとして
      { ja: "湯上がりタオル", en: "towel around body, bath towel" },
      { ja: "手ぬぐい", en: "tenugui" }
    ],
    "🏥 ライフ・シチュエーション (Life Events)": [
      { ja: "入院着 (患者衣)", en: "hospital gown" },
      { ja: "パジャマ (病院)", en: "hospital pajamas" },
      { ja: "マタニティドレス", en: "maternity dress" },
      { ja: "喪服 (着物)", en: "mourning kimono, black kimono" },
      { ja: "喪服 (洋装)", en: "black mourning dress, veil" },
      { ja: "卒業ガウン", en: "graduation gown, mortarboard" },
      { ja: "囚人服 (縞)", en: "striped prison uniform" },
      { ja: "囚人服 (オレンジ)", en: "orange jumpsuit, prison uniform" },
      { ja: "拘束衣", en: "straitjacket" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-attire");
      if (!parent) return;

      // 既存コンテナ削除
      const existing = parent.querySelector(".attire-v13-container");
      if(existing) existing.remove();

      const section = document.createElement("div");
      section.className = "attire-v13-container";
      
      // 区切り線
      const sep = document.createElement("div");
      sep.style.cssText = "margin:15px 0 10px 0; border-top:1px dashed #ccc; text-align:center; color:#888; font-size:0.8em;";
      sep.textContent = "▼ ワーク・ライフスタイル (v13 Expanded) ▼";
      section.appendChild(sep);

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.style.marginBottom = "6px";
        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.fontWeight = "bold";
        summary.style.cursor = "pointer";
        summary.style.background = "#f9f9f9";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.padding = "8px";
        content.style.display = "grid";
        content.style.gridTemplateColumns = "repeat(auto-fill, minmax(140px, 1fr))";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.display = "flex";
          label.style.alignItems = "center";
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        details.appendChild(content);
        section.appendChild(details);
      });
      
      parent.appendChild(section);

      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(i => dict[i.en] = i.ja);
        window.__outputTranslation.register(dict);
      }
    },
    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v13-container input[type='checkbox']:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.attire.v14.js ---
(function(){
  "use strict";
  const VERSION = 19; // 拡張パックN (カラーパレット・配色)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "🎨 基本カラー (Basic Colors)": [
      { ja: "白 (ホワイト)", en: "white" }, { ja: "黒 (ブラック)", en: "black" },
      { ja: "赤 (レッド)", en: "red" }, { ja: "青 (ブルー)", en: "blue" },
      { ja: "緑 (グリーン)", en: "green" }, { ja: "黄 (イエロー)", en: "yellow" },
      { ja: "ピンク", en: "pink" }, { ja: "紫 (パープル)", en: "purple" },
      { ja: "オレンジ", en: "orange" }, { ja: "茶色 (ブラウン)", en: "brown" },
      { ja: "灰色 (グレー)", en: "grey" }, { ja: "ベージュ", en: "beige" }
    ],
    "🌈 ニュアンス・トーン (Tone & Nuance)": [
      { ja: "パステルカラー", en: "pastel colors" }, { ja: "ネオンカラー", en: "neon colors" },
      { ja: "ダークカラー", en: "dark colors" }, { ja: "ライトカラー (淡い)", en: "light colors" },
      { ja: "ビビッド (鮮やか)", en: "vivid colors" }, { ja: "モノクロ", en: "monochrome" },
      { ja: "マットカラー", en: "matte color" }, { ja: "メタリックカラー", en: "metallic color" },
      { ja: "金 (ゴールド)", en: "gold" }, { ja: "銀 (シルバー)", en: "silver" }
    ],
    "🖌️ 特殊色・詳細 (Specific Colors)": [
      { ja: "クリムゾン (深紅)", en: "crimson" }, { ja: "ワインレッド", en: "wine red" },
      { ja: "ネイビー (紺)", en: "navy blue" }, { ja: "ティール (青緑)", en: "teal" },
      { ja: "アクア", en: "aqua" }, { ja: "エメラルド", en: "emerald" },
      { ja: "ラベンダー", en: "lavender" }, { ja: "マゼンタ", en: "magenta" },
      { ja: "オリーブ", en: "olive" }, { ja: "カーキ", en: "khaki" },
      { ja: "クリーム色", en: "cream" }, { ja: "アイボリー", en: "ivory" }
    ],
    "🎭 配色パターン (Color Schemes)": [
      { ja: "ツートンカラー", en: "two-tone" }, { ja: "マルチカラー", en: "multicolored" },
      { ja: "グラデーション", en: "gradient" }, { ja: "レインボー", en: "rainbow" },
      { ja: "トリコロール", en: "tricolor" }, { ja: "白黒 (パンダ)", en: "black and white" },
      { ja: "赤と黒", en: "red and black" }, { ja: "青と白", en: "blue and white" },
      { ja: "ピンクと白", en: "pink and white" }, { ja: "迷彩色の", en: "camouflage colored" }
    ]
  };

  // 翻訳辞書
  const DICT = {};
  Object.values(ATTIRE_DATA).flat().forEach(item => {
    if(item.en && item.ja) DICT[item.en] = item.ja;
  });

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      let parent = document.querySelector("#list-attire");
      if (!parent) return;

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "attire-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        details.open = false; 

        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#fff0f5; color:#d63384;"; // 色選択だとわかるように少し色を変える
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:6px;";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          cb.style.marginRight = "6px";
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const root = document.createElement("div");
      root.className = "attire-v14-container";
      
      // 区切り線を入れる
      const sep = document.createElement("div");
      sep.style.cssText = "margin:15px 0 10px 0; border-top:1px dashed #ccc; text-align:center; color:#888; font-size:0.8em;";
      sep.textContent = "▼ カラーリング (Coloring) ▼";
      root.appendChild(sep);

      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v14-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();

(function(){
// --- builder_ui.section.attire.v15.js ---
(function(){
  "use strict";
  const VERSION = 20; // 拡張パックO (全身コーデ・セットプリセット)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "🏫 学校・スクールセット (School Sets)": [
      { label: "セーラー服セット (Sailor)", val: "sailor uniform, pleated skirt, neckerchief, loafers, school bag, kneehighs" },
      { label: "ブレザーセット (Blazer)", val: "school uniform, blazer, white shirt, plaid skirt, bow tie, loafers, black tights" },
      { label: "体操服セット (Gym)", val: "gym uniform, bloomers, white t-shirt, sneakers, white socks" },
      { label: "スク水セット (Swim)", val: "school swimsuit, swimming cap, goggles, barefoot, wet skin" },
      { label: "優等生風 (Honor)", val: "school uniform, glasses, sweater vest, long skirt, holding book" },
      { label: "ギャルJK風 (Gal)", val: "school uniform, loose socks, cardigan, short skirt, unbuttoned shirt, makeup" }
    ],
    "🏢 職業・コスプレセット (Job/Cosplay Sets)": [
      { label: "OLスーツセット (Office)", val: "business suit, pencil skirt, white shirt, black tights, high heels, glasses" },
      { label: "メイドフルセット (Maid)", val: "maid, apron, long dress, frills, headdress, white stockings, mary janes" },
      { label: "ナースセット (Nurse)", val: "nurse uniform, nurse cap, white thighhighs, clipboard, stethoscope" },
      { label: "巫女セット (Miko)", val: "miko attire, hakama, tabi, zori, hair ribbon" },
      { label: "チャイナセット (China)", val: "china dress, high slit, hair bun, pantyhose, high heels" },
      { label: "バニーセット (Bunny)", val: "bunny suit, rabbit ears, fishnets, high heels, cuffs, collar" },
      { label: "ポリスセット (Police)", val: "police uniform, police cap, handcuffs, miniskirt, boots" }
    ],
    "⚔️ ファンタジーセット (Fantasy Sets)": [
      { label: "騎士フル装備 (Knight)", val: "full armor, plate armor, gauntlets, cape, sword, shield, helmet" },
      { label: "魔法使いセット (Mage)", val: "wizard robe, wizard hat, magic staff, cape, grimoire" },
      { label: "ビキニアーマー (Bikini)", val: "bikini armor, pauldrons, gauntlets, greaves, cape, sword" },
      { label: "冒険者セット (Adventurer)", val: "adventurer outfit, leather armor, backpack, boots, pouch, belt" },
      { label: "エルフセット (Elf)", val: "elf, green dress, leaf design, tiara, bow and arrow, forest background" }
    ],
    "🛋️ 日常・リラックスセット (Casual/Room)": [
      { label: "カジュアルデニム (Denim)", val: "t-shirt, jeans, sneakers, casual, backpack" },
      { label: "部屋着パーカー (Hoodie)", val: "oversized hoodie, panties, barefoot, off-shoulder, messy hair" },
      { label: "パジャマセット (Pajama)", val: "pajamas, holding plush toy, bed, messy hair" },
      { label: "デートコーデ (Date)", val: "dress, cardigan, handbag, pumps, necklace, earrings" },
      { label: "夏フェス (Festival)", val: "shorts, tank top, sunglasses, hat, wristband, sneakers" }
    ]
  };

  // 翻訳辞書 (構成要素を完全網羅)
  const DICT = {
    // School Components
    "sailor uniform": "セーラー服", "pleated skirt": "プリーツスカート", "neckerchief": "ネッカチーフ",
    "loafers": "ローファー", "school bag": "通学鞄", "kneehighs": "ニーソックス",
    "school uniform": "学校制服", "blazer": "ブレザー", "white shirt": "白シャツ",
    "plaid skirt": "チェック柄スカート", "bow tie": "ボウタイ", "black tights": "黒タイツ",
    "gym uniform": "体操服", "bloomers": "ブルマ", "white t-shirt": "白Tシャツ",
    "sneakers": "スニーカー", "white socks": "白ソックス",
    "school swimsuit": "スクール水着", "swimming cap": "水泳帽", "goggles": "ゴーグル",
    "barefoot": "裸足", "wet skin": "濡れた肌",
    "glasses": "眼鏡", "sweater vest": "セーターベスト", "long skirt": "ロングスカート",
    "holding book": "本を持つ",
    "loose socks": "ルーズソックス", "cardigan": "カーディガン", "short skirt": "ミニスカート",
    "unbuttoned shirt": "ボタンを外したシャツ", "makeup": "メイク",

    // Job/Cosplay Components
    "business suit": "スーツ", "pencil skirt": "タイトスカート", "high heels": "ハイヒール",
    "maid": "メイド", "apron": "エプロン", "long dress": "ロングドレス", "frills": "フリル",
    "headdress": "ヘッドドレス", "white stockings": "白ストッキング", "mary janes": "メリージェーン靴",
    "nurse uniform": "ナース服", "nurse cap": "ナースキャップ", "white thighhighs": "白ニーソ",
    "clipboard": "クリップボード", "stethoscope": "聴診器",
    "miko attire": "巫女服", "hakama": "袴", "tabi": "足袋", "zori": "草履", "hair ribbon": "髪リボン",
    "china dress": "チャイナドレス", "high slit": "深いスリット", "hair bun": "お団子髪", "pantyhose": "パンスト",
    "bunny suit": "バニースーツ", "rabbit ears": "うさ耳", "fishnets": "網タイツ", "cuffs": "カフス", "collar": "首輪/襟",
    "police uniform": "警官の制服", "police cap": "警官帽", "handcuffs": "手錠", "miniskirt": "ミニスカート", "boots": "ブーツ",

    // Fantasy Components
    "full armor": "フルアーマー", "plate armor": "プレートアーマー", "gauntlets": "ガントレット",
    "cape": "マント", "sword": "剣", "shield": "盾", "helmet": "兜",
    "wizard robe": "魔法使いのローブ", "wizard hat": "魔法使いの帽子", "magic staff": "魔法の杖", "grimoire": "魔導書",
    "bikini armor": "ビキニアーマー", "pauldrons": "肩当て", "greaves": "すね当て",
    "adventurer outfit": "冒険者の服", "leather armor": "革鎧", "backpack": "バックパック",
    "pouch": "ポーチ", "belt": "ベルト",
    "elf": "エルフ", "green dress": "緑のドレス", "leaf design": "葉のデザイン",
    "tiara": "ティアラ", "bow and arrow": "弓矢", "forest background": "森の背景",

    // Casual Components
    "t-shirt": "Tシャツ", "jeans": "ジーンズ", "casual": "カジュアル",
    "oversized hoodie": "特大パーカー", "panties": "パンティ", "off-shoulder": "オフショルダー",
    "messy hair": "ボサボサ髪/寝癖",
    "pajamas": "パジャマ", "holding plush toy": "ぬいぐるみを抱く", "bed": "ベッド",
    "dress": "ワンピース", "handbag": "ハンドバッグ", "pumps": "パンプス",
    "necklace": "ネックレス", "earrings": "イヤリング",
    "shorts": "ショートパンツ", "tank top": "タンクトップ", "sunglasses": "サングラス",
    "hat": "帽子", "wristband": "リストバンド"
  };

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      let parent = document.querySelector("#list-attire");
      if (!parent) return;

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "attire-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        details.open = false; 

        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#fff0f5; color:#d63384;";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(150px, 1fr)); gap:6px;";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.val = item.val; 
          cb.style.marginRight = "6px";
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.label));
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const root = document.createElement("div");
      root.className = "attire-v15-container";
      
      // 区切り線
      const sep = document.createElement("div");
      sep.style.cssText = "margin:15px 0 10px 0; border-top:1px dashed #ccc; text-align:center; color:#888; font-size:0.8em;";
      sep.textContent = "▼ コーディネートセット (Outfit Sets) ▼";
      root.appendChild(sep);

      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v15-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.val);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.attire.v16.js ---
(function(){
  "use strict";
  const VERSION = 21; // 拡張パックP (拡張コーデセット: サブカル・イベント・人外)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "🎀 サブカル・ファッションセット (Subculture Sets)": [
      { label: "甘ロリセット (Sweet)", val: "sweet lolita, pink dress, frills, bows, bonnet, mary janes, white tights" },
      { label: "ゴスロリセット (Gothic)", val: "gothic lolita, black dress, cross, headdress, lace, platform shoes" },
      { label: "地雷系セット (Jirai)", val: "jiraikei, black and pink, ribbon, backpack, platform shoes, makeup, dark atmosphere" },
      { label: "スチームパンクセット (Steam)", val: "steampunk, corset, gears, goggles, brown leather, boots, brass accessories" },
      { label: "サイバーパンクセット (Cyber)", val: "cyberpunk, techwear, neon lights, jacket, bodysuit, futuristic visor, mechanical parts" }
    ],
    "💍 イベント・ステージ汎用セット (General Stage Sets)": [
      { label: "ウェディングセット (Bride)", val: "wedding dress, white, veil, bouquet, tiara, jewelry, church background" },
      { label: "ライトアイドルセット (Idol Entry)", val: "simple idol outfit, shiny accents, frills, microphone, stage lights, ribbon, performance-ready" },
      { label: "レースクイーンセット (RQ)", val: "race queen, highleg, umbrella, boots, cap, circuit background" },
      { label: "チアリーダーセット (Cheer)", val: "cheerleader, pom poms, crop top, miniskirt, sneakers, energetic" },
      { label: "バレリーナセット (Ballet)", val: "ballet tutu, ballet shoes, tights, bun hair, elegant pose, stage" }
    ],
    "👹 ファンタジー・人外セット (Fantasy/Non-Human Sets)": [
      { label: "悪魔/サキュバスセット (Demon)", val: "succubus, demon wings, horns, tail, black outfit, gothic" },
      { label: "天使セット (Angel)", val: "angel, white wings, halo, white dress, holy light, feathers" },
      { label: "ヴァンパイアセット (Vampire)", val: "vampire, gothic clothes, cape, fangs, red eyes, coffin, dark atmosphere" },
      { label: "魔女セット (Witch)", val: "witch, robe, witch hat, broom, magic book, potion" },
      { label: "くノ一セット (Ninja)", val: "kunoichi, ninja suit, scarf, katana, mask, japanese dojo background" }
    ]
  };

  // 翻訳辞書 (構成要素を完全網羅)
  const DICT = {
    // Subculture
    "sweet lolita": "甘ロリ", "pink dress": "ピンクのドレス", "frills": "フリル", "bows": "リボン",
    "bonnet": "ボンネット", "mary janes": "メリージェーン靴", "white tights": "白タイツ",
    "gothic lolita": "ゴスロリ", "black dress": "黒ドレス", "cross": "十字架",
    "headdress": "ヘッドドレス", "lace": "レース", "platform shoes": "厚底靴",
    "jiraikei": "地雷系", "black and pink": "黒とピンク", "ribbon": "リボン",
    "backpack": "リュック", "makeup": "メイク", "dark atmosphere": "暗い雰囲気",
    "steampunk": "スチームパンク", "corset": "コルセット", "gears": "歯車",
    "goggles": "ゴーグル", "brown leather": "茶色の革", "boots": "ブーツ", "brass accessories": "真鍮アクセ",
    "cyberpunk": "サイバーパンク", "techwear": "テックウェア", "neon lights": "ネオンライト",
    "jacket": "ジャケット", "bodysuit": "ボディスーツ", "futuristic visor": "未来的なバイザー", "mechanical parts": "機械部品",

    // Event
    "wedding dress": "ウェディングドレス", "white": "白", "veil": "ベール",
    "bouquet": "ブーケ", "tiara": "ティアラ", "jewelry": "ジュエリー", "church background": "教会背景",
    "idol clothes": "アイドル衣装", "shiny": "光沢", "microphone": "マイク",
    "stage lights": "ステージ照明", "energetic pose": "元気なポーズ",
    "race queen": "レースクイーン", "highleg": "ハイレグ", "umbrella": "傘",
    "cap": "帽子/キャップ", "circuit background": "サーキット背景",
    "cheerleader": "チアリーダー", "pom poms": "ポンポン", "crop top": "クロップトップ",
    "miniskirt": "ミニスカート", "sneakers": "スニーカー", "energetic": "エネルギッシュ",
    "ballet tutu": "チュチュ", "ballet shoes": "バレエシューズ", "tights": "タイツ",
    "bun hair": "お団子髪", "elegant pose": "優雅なポーズ", "stage": "ステージ",

    // Fantasy
    "succubus": "サキュバス", "demon wings": "悪魔の翼", "horns": "角", "tail": "尻尾",
    "black outfit": "黒い衣装", "gothic": "ゴシック",
    "angel": "天使", "white wings": "白い翼", "halo": "天使の輪", "white dress": "白いドレス",
    "holy light": "聖なる光", "feathers": "羽",
    "vampire": "ヴァンパイア", "gothic clothes": "ゴシック服", "cape": "マント",
    "fangs": "牙", "red eyes": "赤い目", "coffin": "棺桶",
    "witch": "魔女", "robe": "ローブ", "witch hat": "魔女の帽子", "broom": "箒",
    "magic book": "魔法の本", "potion": "ポーション",
    "kunoichi": "くノ一", "ninja suit": "忍者スーツ", "scarf": "スカーフ/マフラー",
    "katana": "刀", "mask": "マスク/面", "japanese dojo background": "道場背景"
  };

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      let parent = document.querySelector("#list-attire");
      if (!parent) return;

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "attire-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        details.open = false; 

        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#fff0f5; color:#d63384;";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(150px, 1fr)); gap:6px;";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.val = item.val; 
          cb.style.marginRight = "6px";
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.label));
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const root = document.createElement("div");
      root.className = "attire-v16-container";
      
      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v16-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.val);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.attire.v17.js ---
(function(){
  "use strict";
  const VERSION = 22; // 拡張パックR (R-18/NSFW特化・Syntax Fixed)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "🔞 完全露出・裸 (Nude & Naked)": [
      { ja: "全裸 (Nude)", en: "nude" },
      { ja: "トップレス", en: "topless" },
      { ja: "ボトムレス (下履いてない)", en: "bottomless" },
      { ja: "ニプレスのみ", en: "pasties only" },
      { ja: "前貼り (C-string)", en: "c-string" },
      { ja: "手ブラ", en: "hand bra" },
      { ja: "全裸待機", en: "waiting nude, naked standing" }
    ],
    "🐙 侵食・生体スーツ (Living & Parasitic Suits)": [
      { ja: "生体モノキニ", en: "living monokini, organic armor, pulsating texture" },
      { ja: "スライムボディスーツ", en: "slime bodysuit, translucent slime, fusing with skin" },
      { ja: "触手スーツ", en: "tentacle suit, tentacles wrapped around body, living clothes" },
      { ja: "半透明ゼリースーツ", en: "semi-transparent jelly suit, glowing internal organs view" },
      { ja: "脈打つ血管スーツ", en: "veiny bodysuit, pulsing veins, bio-organic" },
      { ja: "肉壁スーツ", en: "flesh wall suit, membrane, organic texture" },
      { ja: "拘束スライム", en: "bound by slime, slime covering body, melting clothes" },
      { ja: "花弁状の触手服", en: "petal-shaped tentacle motifs, anemone patterns" },
      { ja: "溶けた服", en: "melting clothes, clothes dissolving into slime" }
    ],
    "👙 裸＋α・チラリズム (Naked + X)": [
      { ja: "裸エプロン", en: "naked apron" },
      { ja: "裸リボン", en: "naked ribbon" },
      { ja: "裸ワイシャツ", en: "naked shirt, boyfriend shirt" },
      { ja: "裸パーカー", en: "naked hoodie" },
      { ja: "スケスケレインコート (中身裸)", en: "transparent raincoat, naked under raincoat" },
      { ja: "テープ拘束服", en: "tape outfit, electrical tape covering nipples" },
      { ja: "リボンマミー (包帯)", en: "ribbon mummy, ribbon bondage" },
      { ja: "ボディペイント衣装", en: "body paint outfit, painted clothes" },
      { ja: "たくし上げ (全裸)", en: "clothes lifted, exposing everything" }
    ],
    "⛓️ ボンテージ・ハード拘束 (Hard Bondage)": [
      { ja: "ボンテージ衣装", en: "bondage outfit, leather, spikes" },
      { ja: "ラバースーツ", en: "latex suit, rubber catsuit" },
      { ja: "真空スーツ", en: "vacuum suit, vacuum sealed, definition of body" },
      { ja: "犬具・ハーネス", en: "harness, dog collar, leash" },
      { ja: "首輪と鎖", en: "collar and chain, metal chain" },
      { ja: "猿轡 (ボールギャグ)", en: "ball gag, ring gag, drooling" },
      { ja: "目隠し", en: "blindfold, sensory deprivation" },
      { ja: "手錠・足枷", en: "handcuffs, shackles, metal cuffs" },
      { ja: "緊縛 (亀甲縛り)", en: "shibari, rope bondage, suspension" },
      { ja: "拘束椅子", en: "bondage chair, restrained" }
    ],
    "📐 極小露出・食い込み (Extreme Exposure)": [
      { ja: "マイクロビキニ", en: "micro bikini" },
      { ja: "スリングショット (V字)", en: "slingshot swimsuit" },
      { ja: "極小下着", en: "micro panties, tiny bra" },
      { ja: "穴あき下着", en: "crotchless panties" },
      { ja: "穴あきブラ", en: "open bra, cupless bra" },
      { ja: "股間ジッパー", en: "zipper crotch" },
      { ja: "乳首透け", en: "nipples visible through clothes, see-through" },
      { ja: "透け透けの服", en: "transparent clothes, sheer fabric" },
      { ja: "食い込み (マン筋)", en: "cameltoe, clothes tight fit" },
      { ja: "お尻の食い込み", en: "wedgie, ass focus" }
    ],
    "💦 汚濁・液体まみれ (Messy & Fluids)": [
      { ja: "精液まみれの服", en: "bukkake on clothes, cum on clothes, stained clothes" },
      { ja: "白濁液まみれ", en: "covered in white liquid, sticky texture" },
      { ja: "濡れ透け (激)", en: "soaked clothes, wet transparency, clinging to skin" },
      { ja: "泥・オイルまみれ", en: "muddy, covered in oil, shiny skin" },
      { ja: "破れたストッキング", en: "torn pantyhose, laddered tights" }
    ]
  };

  const DICT = {
    "nude": "全裸", "topless": "トップレス", "bottomless": "ボトムレス", "pasties only": "ニプレスのみ",
    "c-string": "前貼り", "hand bra": "手ブラ", "naked apron": "裸エプロン", "naked ribbon": "裸リボン",
    "naked shirt": "裸Yシャツ", "naked hoodie": "裸パーカー", "transparent raincoat": "スケスケ合羽",
    "tape outfit": "テープ拘束服", "ribbon mummy": "リボンマミー", "body paint outfit": "ボディペイント衣装",
    "bondage outfit": "ボンテージ", "latex suit": "ラバースーツ", "vacuum suit": "真空スーツ",
    "harness": "ハーネス", "collar and chain": "首輪と鎖", "ball gag": "猿轡", "blindfold": "目隠し",
    "handcuffs": "手錠", "shibari": "緊縛", "micro bikini": "マイクロビキニ", "slingshot swimsuit": "スリングショット",
    "crotchless panties": "穴あきパンツ", "open bra": "穴あきブラ", "zipper crotch": "股間ジッパー",
    "nipples visible through clothes": "乳首透け", "transparent clothes": "透け服", "cameltoe": "食い込み(前)", "wedgie": "食い込み(後)",
    "bukkake on clothes": "服に精液", "slime clothes": "スライム服", "tentacle suit": "触手服", "melting clothes": "溶けた服",
    "living monokini": "生体モノキニ", "organic armor": "生体アーマー", "slime bodysuit": "スライムスーツ",
    "pulsing veins": "脈打つ血管", "flesh wall suit": "肉壁スーツ", "semi-transparent jelly suit": "半透明ゼリースーツ"
  };

  const API = {
    initUI(container) {
      // R-18ロック時は即終了
      const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";
      if (!IS_UNLOCKED) return;

      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      
      // ★リトライ制限付きマウント処理 (修正箇所)
      const mount = (retry = 0) => {
        let parent = document.querySelector("#list-attire");
        
        // 親が見つからない場合のリトライ処理
        if (!parent) { 
          // 50回(約5秒)試行してもダメなら諦める（無限ループ防止）
          if (retry < 50) {
            setTimeout(() => mount(retry + 1), 100);
          } else {
            console.warn("⏳ attire.v17 mount skipped: parent #list-attire not found after retries.");
          }
          return; 
        }

        // 重複防止
        if (parent.querySelector(".attire-v17-container")) return;

        // --- UI生成処理 ---
        const createCat = (title, items) => {
          const details = document.createElement("details");
          details.className = "attire-cat attire-r18";
          details.style.cssText = "margin-bottom:6px; border:1px solid #ffcccc; border-radius:4px; background:#fff;";
          const summary = document.createElement("summary");
          summary.textContent = title;
          summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#ffeeee; color:#d00;";
          details.appendChild(summary);
          const content = document.createElement("div");
          content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:6px;";
          items.forEach(item => {
            const label = document.createElement("label");
            label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
            const cb = document.createElement("input");
            cb.type = "checkbox"; cb.dataset.en = item.en; cb.dataset.r18src = "v17"; cb.style.marginRight = "6px";
            label.appendChild(cb); label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
            content.appendChild(label);
          });
          details.appendChild(content);
          return details;
        };

        const root = document.createElement("div");
        root.className = "attire-v17-container";
        
        const sep = document.createElement("div");
        sep.style.cssText = "margin:15px 0 10px 0; border-top:2px solid #d00; text-align:center; color:#d00; font-size:0.9em; font-weight:bold;";
        
        // ★修正ポイント: 安全な文字列リテラルに変更 (絵文字による構文エラー回避)
        sep.textContent = "⚠️ R-18 / NSFW (Adult Only)"; 
        
        root.appendChild(sep);
        Object.entries(ATTIRE_DATA).forEach(([cat, items]) => root.appendChild(createCat(cat, items)));
        const endDividerWrap = document.createElement("div");
        endDividerWrap.className = "attire-special-to-normal";
        endDividerWrap.style.cssText = "display:block; width:100%; margin:10px 0 8px;";

        const endDivider = document.createElement("div");
        endDivider.className = "attire-special-end-divider";
        endDivider.style.cssText = "border-top:1px solid #ead4db; width:100%; margin:0 0 6px;";
        endDividerWrap.appendChild(endDivider);

        const normalLabel = document.createElement("div");
        normalLabel.className = "attire-normal-group-label";
        normalLabel.textContent = "👗 通常衣装";
        normalLabel.style.cssText = "color:#9b7280; font-size:0.76em; font-weight:700; letter-spacing:0.02em; text-align:left; padding:0 2px;";
        endDividerWrap.appendChild(normalLabel);

        root.appendChild(endDividerWrap);

        const contentArea = parent.querySelector(".section-content") || parent;
        contentArea.appendChild(root);
        try{ window.__normalizeAttireLayout(contentArea || parent); }catch(_){}
      };

      mount(); // 実行
    },
    getTags() {
      const tags = [];
      document.querySelectorAll("input[data-r18src='v17']:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

(function(){
// --- builder_ui.section.attire.v18.js ---
(function(){
  "use strict";
  const VERSION = 16; // 拡張パックQ (セクシー・コスプレ・トレンド)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "💃 セクシーファッション (Sexy Fashion)": [
      { ja: "露出度の高い服", en: "revealing clothes" },
      { ja: "キャミソール＆短パン", en: "camisole, short shorts" },
      { ja: "へそ出しコーデ", en: "crop top, midriff, denim shorts" },
      { ja: "胸元開き (カットアウト)", en: "cleavage cutout" },
      { ja: "胸開きタートル", en: "keyhole turtleneck" },
      { ja: "童貞を殺すセーター", en: "virgin killer sweater, backless sweater" },
      { ja: "横乳 (サイドブーブ)", en: "sideboob" },
      { ja: "下乳 (アンダーブーブ)", en: "underboob" },
      { ja: "絶対領域", en: "zettai ryouiki" },
      { ja: "ハイスリット", en: "high slit" }
    ],
    "👘 コスプレ・職業バリエーション (Cosplay)": [
      { ja: "セクシーナース", en: "nurse, short dress, cleavage, white stockings" },
      { ja: "セクシーポリス", en: "police uniform, pencil skirt, unbuttoned shirt" },
      { ja: "セクシーチャイナ", en: "china dress, high slit, cleavage cutout" },
      { ja: "くノ一 (忍者)", en: "kunoichi, ninja, fishnets" },
      { ja: "メイド服 (ミニ)", en: "maid, mini skirt, apron" },
      { ja: "バニーガール", en: "bunny girl, leotard, fishnets, rabbit ears" },
      { ja: "レースクイーン", en: "race queen, highleg, boots" },
      { ja: "魔法少女", en: "magical girl, frilled dress, ribbons" },
      { ja: "明治袴 (ハイカラ)", en: "meiji schoolgirl uniform, hakama, lace-up boots" },
      { ja: "シスター (聖職者)", en: "nun, nun habit" },
      { ja: "踊り子 (ベリーダンス)", en: "belly dancer, harem outfit" }
    ],
    "🏃 スポーツ・アクティブ (Sporty & Active)": [
      { ja: "競泳水着", en: "competition swimsuit" },
      { ja: "レオタード", en: "leotard" },
      { ja: "レスリング衣装", en: "wrestling outfit, singlet" },
      { ja: "チアリーダー", en: "cheerleader, crop top, miniskirt" },
      { ja: "テニスウェア", en: "tennis uniform" },
      { ja: "全身タイツ (ゼンタイ)", en: "zentai, full body suit" }
    ],
    "👙 ランジェリー・特殊インナー (Lingerie & Inner)": [
      { ja: "猫ランジェリー", en: "cat keyhole lingerie, neko lingerie" },
      { ja: "ベビードール", en: "babydoll" },
      { ja: "コルセット", en: "corset" },
      { ja: "ガーターストッキング", en: "garter belt, stockings" },
      { ja: "網タイツ", en: "fishnets" },
      { ja: "黒ストッキング", en: "black pantyhose" }
    ],
    "🛀 シチュエーション衣装 (Situational)": [
      { ja: "バスタオル姿", en: "towel, towel around body" },
      { ja: "濡れ透けシャツ", en: "wet shirt, wet clothes" },
      { ja: "はだけた浴衣", en: "yukata, open clothes" }
    ]
  };

  const DICT = {
    "revealing clothes": "露出度の高い服", "camisole": "キャミソール", "short shorts": "ショートパンツ",
    "crop top": "へそ出しトップス", "cleavage cutout": "胸元開き", "keyhole turtleneck": "胸開きタートル",
    "virgin killer sweater": "童貞を殺すセーター", "backless sweater": "背中開きセーター",
    "sideboob": "横乳", "underboob": "下乳", "zettai ryouiki": "絶対領域", "high slit": "ハイスリット",
    "nurse": "ナース", "police uniform": "ポリス", "china dress": "チャイナドレス",
    "kunoichi": "くノ一", "maid": "メイド", "bunny girl": "バニーガール", "race queen": "レースクイーン",
    "magical girl": "魔法少女", "meiji schoolgirl uniform": "明治女学生", "nun": "シスター",
    "belly dancer": "ベリーダンサー", "competition swimsuit": "競泳水着", "leotard": "レオタード",
    "wrestling outfit": "レスリング衣装", "cheerleader": "チアリーダー", "zentai": "全身タイツ",
    "cat keyhole lingerie": "猫ランジェリー", "babydoll": "ベビードール", "corset": "コルセット",
    "towel around body": "バスタオル巻き", "wet shirt": "濡れシャツ"
  };

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      let parent = document.querySelector("#list-attire");
      if (!parent) return;

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "attire-cat attire-v18";
        details.style.cssText = "margin-bottom:6px; border:1px solid #ddd; border-radius:4px; background:#fff;";
        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f9f0ff; color:#6a0dad;";
        details.appendChild(summary);
        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:6px;";
        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          const cb = document.createElement("input");
          cb.type = "checkbox"; cb.dataset.en = item.en; cb.style.marginRight = "6px";
          label.appendChild(cb); label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const root = document.createElement("div");
      root.className = "attire-v18-container";
      
      const sep = document.createElement("div");
      sep.style.cssText = "margin:15px 0 10px 0; border-top:1px dashed #ccc; text-align:center; color:#888; font-size:0.8em;";
      sep.textContent = "▼ セクシー & コスプレ拡張 (v18 Expanded) ▼";
      root.appendChild(sep);

      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => root.appendChild(createCat(cat, items)));
      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },
    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v18-container input:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();
})();

(function(){
// --- builder_ui.section.attire.v19.js ---
(function(){
  "use strict";
  const VERSION = 13; // 拡張パックQ (年代別・レトロ・歴史的スタイル)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "💃 1920s-1940s (Jazz & Noir)": [
      { ja: "フラッパードレス (20s)", en: "flapper dress, fringe, beads" },
      { ja: "モガ (モダンガール)", en: "moga, taisho roman, kimono and apron" },
      { ja: "アールデコ風", en: "art deco style dress" },
      { ja: "フィルム・ノワール (妖艶)", en: "film noir style, femme fatale, evening gown, fur stole" },
      { ja: "戦時中の服 (40s)", en: "1940s fashion, utility clothes, victory rolls hair" }
    ],
    "🎸 1950s-1960s (Rock & Mod)": [
      { ja: "水玉ワンピース (50s)", en: "polka dot dress, 1950s fashion" },
      { ja: "プードルスカート", en: "poodle skirt, swing skirt" },
      { ja: "ロカビリー", en: "rockabilly style" },
      { ja: "ピンナップガール", en: "pin-up girl, retro swimsuit, high heels" },
      { ja: "モッズファッション (60s)", en: "mod dress, geometric print, mini dress, gogo boots" },
      { ja: "ヒッピースタイル (60s)", en: "hippie clothes, tie-dye, bell bottoms, headband" }
    ],
    "🕺 1970s-1990s (Disco & Bubble)": [
      { ja: "ディスコ衣装 (70s)", en: "disco outfit, jumpsuit, sequins, afro" },
      { ja: "ベルボトム (パンタロン)", en: "bell-bottoms, flared pants" },
      { ja: "パワースーツ (80s)", en: "1980s fashion, power suit, shoulder pads" },
      { ja: "エアロビクス (レオタード)", en: "aerobics outfit, leotard, leg warmers, headband" },
      { ja: "バブル時代のボディコン", en: "bodycon dress, 80s style, fan" },
      { ja: "グランジ (90s)", en: "grunge fashion, flannel shirt, ripped jeans, unkempt" },
      { ja: "コギャル (90s)", en: "90s schoolgirl, loose socks, tanned skin" }
    ],
    "🏛️ 貴族・ヴィクトリアン (Victorian/Royal)": [
      { ja: "舞踏会ドレス (ボールガウン)", en: "ballgown, voluminous skirt" },
      { ja: "ヴィクトリア朝のドレス", en: "victorian dress, bustle, high collar, lace" },
      { ja: "ロココ調 (マリー・アントワネット)", en: "rococo dress, pannier, extravagant" },
      { ja: "エンパイアドレス", en: "empire waist dress, regency era" },
      { ja: "公爵夫人の服", en: "duchess outfit, elegant, jewelry" },
      { ja: "コルセットドレス", en: "corset dress, tight lacing" }
    ]
  };

  const DICT = {
    "flapper dress": "フラッパードレス", "fringe": "フリンジ", "beads": "ビーズ",
    "moga": "モダンガール", "taisho roman": "大正浪漫", "art deco": "アールデコ",
    "film noir": "フィルムノワール", "femme fatale": "ファムファタール",
    "polka dot dress": "水玉ドレス", "poodle skirt": "プードルスカート",
    "rockabilly": "ロカビリー", "pin-up girl": "ピンナップガール",
    "mod dress": "モッズドレス", "geometric print": "幾何学模様", "gogo boots": "ゴーゴーブーツ",
    "hippie clothes": "ヒッピー服", "tie-dye": "タイダイ", "bell-bottoms": "ベルボトム",
    "disco outfit": "ディスコ衣装", "sequins": "スパンコール",
    "power suit": "パワースーツ", "shoulder pads": "肩パッド",
    "aerobics outfit": "エアロビ衣装", "leg warmers": "レッグウォーマー",
    "grunge fashion": "グランジ", "flannel shirt": "ネルシャツ",
    "ballgown": "舞踏会ドレス", "victorian dress": "ヴィクトリアンドレス", "bustle": "バッスル",
    "rococo dress": "ロココドレス", "pannier": "パニエ", "empire waist": "エンパイアウエスト"
  };

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      let parent = document.querySelector("#list-attire");
      if (!parent) return;

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "attire-cat attire-v19";
        details.style.cssText = "margin-bottom:6px; border:1px solid #dcdcdc; border-radius:4px; background:#fff;";
        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f0e68c; color:#555;"; // レトロっぽい色
        details.appendChild(summary);
        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(140px, 1fr)); gap:6px;";
        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          const cb = document.createElement("input");
          cb.type = "checkbox"; cb.dataset.en = item.en; cb.style.marginRight = "6px";
          label.appendChild(cb); label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const root = document.createElement("div");
      root.className = "attire-v19-container";
      const sep = document.createElement("div");
      sep.style.cssText = "margin:15px 0 10px 0; border-top:1px dashed #ccc; text-align:center; color:#888; font-size:0.8em;";
      sep.textContent = "▼ 年代別・レトロスタイル (v19 Retro) ▼";
      root.appendChild(sep);
      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => root.appendChild(createCat(cat, items)));
      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },
    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v19-container input:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();
})();


(function(){
// --- builder_ui.section.attire.v20.js ---
(function(){
  "use strict";
  const VERSION = 14; // 行事・季節衣装 (Seasonal & Event Attire)
  const KEY = "attire";

  const ATTIRE_DATA = {
    title: "👹 節分・鬼衣装特化コレクション",
    children: [
      {
        title: "👹 鬼衣装セット / Oni Presets",
        children: [
          { title: "🔴 赤鬼セット", items: [
            { ja: "赤鬼衣装セット", en: "red oni outfit set" },
            { ja: "赤鬼の角と虎柄セット", en: "red oni horns and tiger-stripe set" },
            { ja: "赤鬼の節分コスチューム", en: "red oni setsubun costume" }
          ]},
          { title: "🔵 青鬼セット", items: [
            { ja: "青鬼衣装セット", en: "blue oni outfit set" },
            { ja: "青鬼の角と虎柄セット", en: "blue oni horns and tiger-stripe set" },
            { ja: "青鬼の節分コスチューム", en: "blue oni setsubun costume" }
          ]},
          { title: "🎀 鬼娘セット", items: [
            { ja: "鬼娘コスチュームセット", en: "oni girl costume set" },
            { ja: "可愛い鬼娘節分衣装", en: "cute oni girl setsubun outfit" },
            { ja: "姫鬼アレンジセット", en: "princess oni arrangement set" }
          ]},
          { title: "🏮 祭り鬼セット", items: [
            { ja: "祭り鬼衣装セット", en: "festival oni outfit set" },
            { ja: "和風妖怪鬼セット", en: "japanese yokai oni set" },
            { ja: "豆まき祭礼鬼セット", en: "bean-throwing ceremonial oni set" }
          ]}
        ]
      },
      {
        title: "🩲 鬼衣装ベース / Base Collection",
        children: [
          { title: "🐯 虎柄ベース", items: [
            { ja: "虎柄鬼パンツ", en: "tiger-striped oni pants" },
            { ja: "虎柄ふんどし", en: "tiger-striped fundoshi" },
            { ja: "虎柄の腰布", en: "tiger-striped loincloth" }
          ]},
          { title: "👘 和装鬼ベース", items: [
            { ja: "鬼の羽織", en: "oni haori" },
            { ja: "鬼の着物", en: "oni kimono" },
            { ja: "鬼の腹掛け", en: "oni haragake" }
          ]},
          { title: "👙 鬼娘ベース", items: [
            { ja: "虎柄ブラトップ", en: "tiger-striped bra top" },
            { ja: "虎柄ビキニ鬼衣装", en: "tiger-striped bikini oni outfit" },
            { ja: "鬼姫ミニ着物ベース", en: "mini oni princess kimono base" }
          ]},
          { title: "😈 軽装・変化球", items: [
            { ja: "ミニ鬼コス", en: "mini oni costume" },
            { ja: "着ぐるみ鬼", en: "oni mascot outfit" },
            { ja: "ポップ鬼衣装", en: "pop oni outfit" }
          ]}
        ]
      },
      {
        title: "🛠 鬼カスタマイズ / Customization",
        children: [
          { title: "👹 角・虎柄 / Horns & Stripes", items: [
            { ja: "大きな鬼角", en: "large oni horns" },
            { ja: "片角アレンジ", en: "single horn arrangement" },
            { ja: "強めの虎柄", en: "bold tiger stripes" }
          ]},
          { title: "👘 布・シルエット / Fabric & Silhouette", items: [
            { ja: "毛皮トリム追加", en: "fur trim addition" },
            { ja: "和布の重ね", en: "layered japanese cloth" },
            { ja: "破れ表現", en: "torn fabric effect" }
          ]},
          { title: "🩹 露出・フィット / Exposure & Fit", items: [
            { ja: "肩出し鬼衣装", en: "off-shoulder oni outfit" },
            { ja: "腹見せ鬼コス", en: "midriff-baring oni costume" },
            { ja: "脚見せ鬼アレンジ", en: "leg-revealing oni arrangement" }
          ]},
          { title: "🔔 装飾 / Ornaments", items: [
            { ja: "房飾り付き帯", en: "obi with tassel ornaments" },
            { ja: "鈴付き鬼装飾", en: "oni decoration with bells" },
            { ja: "金具付き鬼ベルト", en: "oni belt with metal fittings" }
          ]}
        ]
      },
      {
        title: "😈 鬼設定 / Mood & Role",
        children: [
          { title: "💢 ムード / Mood", items: [
            { ja: "怖い赤鬼", en: "scary red oni" },
            { ja: "いたずら鬼", en: "mischievous oni" },
            { ja: "照れ鬼", en: "bashful oni" }
          ]},
          { title: "🎭 役割 / Role", items: [
            { ja: "豆まき鬼役", en: "bean-throwing oni role" },
            { ja: "祭礼鬼", en: "ceremonial oni" },
            { ja: "守り神風の鬼", en: "guardian-spirit oni" }
          ]},
          { title: "🎀 鬼娘ニュアンス / Feminine Vibe", items: [
            { ja: "妖艶な鬼姫", en: "seductive oni princess" },
            { ja: "可愛い鬼娘", en: "cute oni girl" },
            { ja: "宴会鬼娘", en: "party oni girl" }
          ]},
          { title: "🏮 舞台・場面 / Stage & Scene", items: [
            { ja: "節分ステージ鬼", en: "setsubun stage oni" },
            { ja: "宴会場の鬼コス", en: "oni costume for banquet hall" },
            { ja: "和祭り背景向け鬼衣装", en: "oni outfit for japanese festival backdrop" }
          ]}
        ]
      },
      {
        title: "🎅 サンタ衣装特化コレクション",
        children: [
          {
            title: "🎅 サンタ衣装セット / Santa Presets",
            children: [
              { title: "🎄 王道サンタ", items: [
                { ja: "王道サンタ衣装セット", en: "classic santa outfit set" },
                { ja: "赤白ファー付きサンタセット", en: "red and white fur-trimmed santa set" },
                { ja: "聖夜向けサンタコスチューム", en: "holy-night santa costume" }
              ]},
              { title: "✨ 可愛いサンタ", items: [
                { ja: "可愛いミニサンタセット", en: "cute mini santa set" },
                { ja: "ふわもこサンタコーデ", en: "fluffy santa coordination" },
                { ja: "リボン多めの可愛いサンタ", en: "cute santa with abundant ribbons" }
              ]},
              { title: "💃 セクシーサンタ", items: [
                { ja: "セクシーサンタ衣装セット", en: "sexy santa outfit set" },
                { ja: "サンタビキニアレンジセット", en: "santa bikini arrangement set" },
                { ja: "脚見せサンタコーデ", en: "leg-revealing santa coordination" }
              ]},
              { title: "🌨 雪夜サンタ", items: [
                { ja: "雪夜のサンタ衣装セット", en: "snowy-night santa outfit set" },
                { ja: "ケープ付き冬サンタ", en: "winter santa with cape" },
                { ja: "雪景色向けサンタドレス", en: "santa dress for snowy scenery" }
              ]}
            ]
          },
          {
            title: "🧥 サンタ衣装ベース / Base Collection",
            children: [
              { title: "🎅 基本ベース", items: [
                { ja: "サンタコス", en: "santa costume" },
                { ja: "ロングサンタドレス", en: "long santa dress" },
                { ja: "ワンピース型サンタ衣装", en: "one-piece santa outfit" }
              ]},
              { title: "👙 露出高めベース", items: [
                { ja: "サンタ (ビキニ)", en: "santa bikini" },
                { ja: "ミニサンタ衣装", en: "mini santa outfit" },
                { ja: "肩出しサンタドレス", en: "off-shoulder santa dress" }
              ]},
              { title: "🧣 冬装備ベース", items: [
                { ja: "ケープ付きサンタ", en: "santa with cape" },
                { ja: "ファー付きサンタ衣装", en: "fur-trimmed santa outfit" },
                { ja: "パンツスタイルサンタ", en: "pants-style santa outfit" }
              ]},
              { title: "👑 変化球ベース", items: [
                { ja: "姫系サンタ衣装", en: "princess-style santa outfit" },
                { ja: "ステージ映えサンタ", en: "stage-ready santa outfit" },
                { ja: "ゴージャスサンタドレス", en: "gorgeous santa dress" }
              ]}
            ]
          },
          {
            title: "🎀 サンタカスタマイズ / Customization",
            children: [
              { title: "🎩 帽子・ファー / Hat & Fur", items: [
                { ja: "大きなサンタ帽", en: "large santa hat" },
                { ja: "ふわふわファートリム", en: "fluffy fur trim" },
                { ja: "ケープ追加", en: "cape addition" }
              ]},
              { title: "🎗 リボン・ベルト / Ribbon & Belt", items: [
                { ja: "大リボン追加", en: "oversized ribbon addition" },
                { ja: "太ベルト強調", en: "accentuated wide belt" },
                { ja: "鈴付きリボン", en: "ribbon with bells" }
              ]},
              { title: "🩹 露出・フィット / Exposure & Fit", items: [
                { ja: "肩出しサンタ", en: "off-shoulder santa" },
                { ja: "脚見せサンタ", en: "leg-revealing santa" },
                { ja: "タイトなサンタシルエット", en: "tight santa silhouette" }
              ]},
              { title: "🥾 手袋・ブーツ / Gloves & Boots", items: [
                { ja: "ロンググローブ追加", en: "long gloves addition" },
                { ja: "もこもこブーツ", en: "fluffy boots" },
                { ja: "冬用厚手手袋", en: "thick winter gloves" }
              ]}
            ]
          },
          {
            title: "🎄 サンタ設定 / Mood & Scene",
            children: [
              { title: "😊 ムード / Mood", items: [
                { ja: "優しい配り役サンタ", en: "gentle gift-giving santa" },
                { ja: "いたずらサンタ", en: "mischievous santa" },
                { ja: "聖夜の姫サンタ", en: "holy-night princess santa" }
              ]},
              { title: "🎭 役割 / Role", items: [
                { ja: "プレゼント配達サンタ", en: "gift-delivery santa" },
                { ja: "パーティーサンタ", en: "party santa" },
                { ja: "ステージサンタ", en: "stage santa" }
              ]},
              { title: "❄ 場面 / Scene", items: [
                { ja: "雪景色のサンタ", en: "santa in snowy scenery" },
                { ja: "暖炉前のサンタ", en: "santa in front of fireplace" },
                { ja: "深夜配達のサンタ", en: "late-night delivery santa" }
              ]},
              { title: "🎁 小物演出 / Props", items: [
                { ja: "プレゼント袋付き", en: "with gift sack" },
                { ja: "キャンディケイン付き", en: "with candy cane" },
                { ja: "ベル飾り付き", en: "with bell ornaments" }
              ]}
            ]
          }
        ]
      },
      {
        title: "🎃 ハロウィン衣装特化コレクション",
        children: [
          {
            title: "🎃 ハロウィン衣装セット / Halloween Presets",
            children: [
              { title: "🎃 カボチャ・ランタン", items: [
                { ja: "ジャック・オー・ランタンセット", en: "jack-o-lantern outfit set" },
                { ja: "カボチャモンスター衣装", en: "pumpkin monster outfit" },
                { ja: "パンプキンドレスセット", en: "pumpkin dress set" }
              ]},
              { title: "👻 ゴースト・ホラー", items: [
                { ja: "幽霊娘セット", en: "ghost girl set" },
                { ja: "ミイラ衣装セット", en: "mummy outfit set" },
                { ja: "フランケンシュタインセット", en: "frankenstein outfit set" }
              ]},
              { title: "🧛 夜の怪物", items: [
                { ja: "ドラキュラセット", en: "dracula outfit set" },
                { ja: "死神セット", en: "grim reaper outfit set" },
                { ja: "骸骨セット", en: "skeleton outfit set" }
              ]},
              { title: "🧙 可愛い仮装", items: [
                { ja: "魔女セット", en: "witch outfit set" },
                { ja: "黒猫ハロウィンセット", en: "black cat halloween set" },
                { ja: "キョンシーセット", en: "jiangshi outfit set" }
              ]}
            ]
          },
          {
            title: "👗 ハロウィン衣装ベース / Base Collection",
            children: [
              { title: "🎃 モンスターベース", items: [
                { ja: "カボチャドレス", en: "pumpkin dress" },
                { ja: "おばけシーツ風衣装", en: "ghost-sheet style outfit" },
                { ja: "ミイラ包帯衣装", en: "mummy bandage outfit" }
              ]},
              { title: "🧛 ダークベース", items: [
                { ja: "ドラキュラマント", en: "dracula cape" },
                { ja: "フランケン衣装", en: "frankenstein outfit" },
                { ja: "死神ローブ", en: "grim reaper robe" }
              ]},
              { title: "🎀 可愛い仮装ベース", items: [
                { ja: "ハロウィンメイド", en: "halloween maid outfit" },
                { ja: "ハロウィンナース", en: "halloween nurse outfit" },
                { ja: "ハロウィンバニー", en: "halloween bunny outfit" }
              ]},
              { title: "🀄 東洋ホラーベース", items: [
                { ja: "キョンシー衣装", en: "jiangshi outfit" },
                { ja: "中華ホラー衣装", en: "chinese horror outfit" },
                { ja: "霊符付きキョンシー服", en: "jiangshi outfit with talisman" }
              ]}
            ]
          },
          {
            title: "🛠 ハロウィンカスタマイズ / Customization",
            children: [
              { title: "🎃 モチーフ装飾 / Motifs", items: [
                { ja: "カボチャ飾り", en: "pumpkin ornaments" },
                { ja: "コウモリ飾り", en: "bat ornaments" },
                { ja: "蜘蛛の巣レース", en: "spiderweb lace" }
              ]},
              { title: "🦇 変身パーツ / Monster Parts", items: [
                { ja: "牙追加", en: "fangs added" },
                { ja: "羽追加", en: "wings added" },
                { ja: "猫耳追加", en: "cat ears added" }
              ]},
              { title: "🩹 露出・破れ / Exposure & Damage", items: [
                { ja: "肩出しハロウィン", en: "off-shoulder halloween outfit" },
                { ja: "脚見せハロウィン", en: "leg-revealing halloween outfit" },
                { ja: "破れ裾", en: "torn hem" }
              ]},
              { title: "🎨 配色・発光 / Color & Glow", items: [
                { ja: "オレンジ×黒配色", en: "orange and black palette" },
                { ja: "紫×黒配色", en: "purple and black palette" },
                { ja: "怪しいグロー演出", en: "eerie glow effect" }
              ]}
            ]
          },
          {
            title: "🌙 ハロウィン設定 / Mood & Scene",
            children: [
              { title: "😈 ムード / Mood", items: [
                { ja: "いたずら好きハロウィン娘", en: "mischievous halloween girl" },
                { ja: "可愛いおばけ娘", en: "cute ghost girl" },
                { ja: "吸血鬼の姫", en: "vampire princess" }
              ]},
              { title: "🎭 役割 / Role", items: [
                { ja: "お菓子配り役", en: "candy-giving role" },
                { ja: "夜のパレード役", en: "night parade role" },
                { ja: "ゴシック屋敷の令嬢", en: "lady of the gothic mansion" }
              ]},
              { title: "🏰 場面 / Scene", items: [
                { ja: "墓場の花嫁", en: "bride of the graveyard" },
                { ja: "深夜の仮装ステージ", en: "late-night costume stage" },
                { ja: "月夜のハロウィン街", en: "moonlit halloween street" }
              ]},
              { title: "🍬 小物演出 / Props", items: [
                { ja: "キャンディバケツ付き", en: "with candy bucket" },
                { ja: "トリックオアトリート看板", en: "trick-or-treat sign" },
                { ja: "ランタン提灯付き", en: "with lantern prop" }
              ]}
            ]
          }
        ]
      },
      {
        title: "🍫 バレンタイン衣装特化コレクション",
        children: [
          {
            title: "🍫 バレンタイン衣装セット / Valentine Presets",
            children: [
              { title: "💝 王道バレンタイン", items: [
                { ja: "王道バレンタイン衣装セット", en: "classic valentine outfit set" },
                { ja: "ハートいっぱいバレンタインセット", en: "heart-filled valentine set" },
                { ja: "赤とチョコ色の王道コーデ", en: "classic red and chocolate valentine coordination" },
                { ja: "メルトチョコレート衣装セット", en: "melt chocolate valentine outfit" }
              ]},
              { title: "🍓 甘ロリ・可愛い系", items: [
                { ja: "甘ロリバレンタインセット", en: "sweet lolita valentine set" },
                { ja: "いちごモチーフバレンタイン", en: "strawberry motif valentine outfit" },
                { ja: "フリル多めの可愛いバレンタイン", en: "frill-rich cute valentine outfit" }
              ]},
              { title: "😈 小悪魔・攻め系", items: [
                { ja: "小悪魔バレンタインセット", en: "little-devil valentine set" },
                { ja: "大人っぽいバレンタインコーデ", en: "mature valentine coordination" },
                { ja: "攻め気味のハートドレス", en: "assertive heart dress" }
              ]},
              { title: "🍰 手作り・お仕事系", items: [
                { ja: "手作りチョコ娘セット", en: "handmade chocolate girl set" },
                { ja: "ショコラティエ風セット", en: "chocolatier-style set" },
                { ja: "メイドバレンタインセット", en: "maid valentine set" }
              ]}
            ]
          },
          {
            title: "🎀 バレンタイン衣装ベース / Base Collection",
            children: [
              { title: "👗 基本ベース", items: [
                { ja: "チョコ色ワンピース", en: "chocolate-colored one-piece dress" },
                { ja: "赤リボンドレス", en: "red ribbon dress" },
                { ja: "ミニバレンタインドレス", en: "mini valentine dress" },
                { ja: "リボンボディ", en: "ribbon body" }
              ]},
              { title: "🍳 エプロン・調理系", items: [
                { ja: "ハートエプロン", en: "heart apron" },
                { ja: "パティシエ服", en: "pastry chef outfit" },
                { ja: "チョコ作りエプロンコーデ", en: "apron coordination for chocolate making" }
              ]},
              { title: "🏫 学園・日常ベース", items: [
                { ja: "甘め制服アレンジ", en: "sweet school uniform arrangement" },
                { ja: "放課後バレンタイン制服", en: "after-school valentine uniform" },
                { ja: "カフェ店員風バレンタイン服", en: "cafe staff-style valentine outfit" }
              ]},
              { title: "🎂 変化球ベース", items: [
                { ja: "ハート柄パーティードレス", en: "heart-pattern party dress" },
                { ja: "ショコラカラー姫ドレス", en: "chocolate-color princess dress" },
                { ja: "ラッピング風ワンピース", en: "gift-wrap style one-piece dress" },
                { ja: "チョコスライムボディ", en: "chocolate slime body" },
                { ja: "ダークチョコボディスーツ", en: "dark chocolate bodysuit" },
                { ja: "全身チョコ融合衣装", en: "body fused with chocolate" },
                { ja: "液状ウエスト衣装", en: "liquid-like waist outfit" },
                { ja: "メルトチョコ肌ベース", en: "melt chocolate skin base" }
              ]}
            ]
          },
          {
            title: "🍓 バレンタインカスタマイズ / Customization",
            children: [
              { title: "💗 ハート・柄 / Hearts & Patterns", items: [
                { ja: "ハート飾り", en: "heart ornaments" },
                { ja: "チョコレート柄", en: "chocolate pattern" },
                { ja: "いちごモチーフ", en: "strawberry motif" }
              ]},
              { title: "🎀 リボン・包装 / Ribbon & Wrapping", items: [
                { ja: "包装リボン", en: "wrapping ribbon" },
                { ja: "ラッピング箱付き", en: "with gift wrapping box" },
                { ja: "ギフトタグ付き", en: "with gift tag" }
              ]},
              { title: "🎨 色・質感 / Color & Texture", items: [
                { ja: "赤×茶配色", en: "red and brown palette" },
                { ja: "ココア色", en: "cocoa color" },
                { ja: "チョコ光沢感", en: "chocolate gloss texture" },
                { ja: "溶けチョコ光沢", en: "melting chocolate gloss" },
                { ja: "融解チョコ肌", en: "melting chocolate skin" },
                { ja: "ぬるりとした表面反射", en: "slick reflective surface" },
                { ja: "クリアコート反射", en: "clearcoat reflections" },
                { ja: "粗さ変化のあるチョコ質感", en: "roughness variation chocolate texture" },
                { ja: "ダークチョコ配色", en: "dark chocolate palette" },
                { ja: "艶髪・グロッシーヘア", en: "shiny glossy hair" },
                { ja: "甘い光沢ハイライト", en: "sweet glossy highlights" }
              ]},
              { title: "🍫 演出・仕上げ / Effects", items: [
                { ja: "溶けチョコ演出", en: "melting chocolate effect" },
                { ja: "甘い湯気演出", en: "sweet steam effect" },
                { ja: "ハート飛び演出", en: "floating hearts effect" },
                { ja: "チョコ融合表現", en: "chocolate fusion effect" },
                { ja: "粘性ボディライン", en: "viscous body silhouette" }
              ]}
            ]
          },
          {
            title: "💌 バレンタイン設定 / Mood & Scene",
            children: [
              { title: "😊 ムード / Mood", items: [
                { ja: "照れ渡し", en: "bashful gift-giving" },
                { ja: "本命チョコの緊張感", en: "nervousness before giving true-love chocolate" },
                { ja: "義理チョコ風の軽さ", en: "casual obligation-chocolate vibe" },
                { ja: "不安げな微笑み", en: "nervous smile" },
                { ja: "視線そらし", en: "looking away" },
                { ja: "恥じらい", en: "shy" }
              ]},
              { title: "🎭 役割 / Role", items: [
                { ja: "渡す直前", en: "just before giving the gift" },
                { ja: "隠し持っている", en: "secretly carrying chocolate" },
                { ja: "カフェ販売役", en: "cafe sales role" }
              ]},
              { title: "🏫 場面 / Scene", items: [
                { ja: "放課後告白シーン", en: "after-school confession scene" },
                { ja: "キッチン手作りシーン", en: "kitchen handmade chocolate scene" },
                { ja: "バレンタイン売り場の前", en: "in front of valentine display stand" },
                { ja: "居心地の良い現代カフェ", en: "cozy modern café" },
                { ja: "窓際席", en: "window seat" },
                { ja: "コーヒーとスイーツ", en: "coffee and sweets" },
                { ja: "光のガーランド", en: "string lights" },
                { ja: "飾りつけ", en: "decorations" }
              ]},
              { title: "🎁 小物演出 / Props", items: [
                { ja: "チョコ箱付き", en: "with chocolate box" },
                { ja: "ハート風船付き", en: "with heart balloons" },
                { ja: "プレゼント袋付き", en: "with gift bag" }
              ]}
            ]
          }
        ]
      },
      {
        title: "🤍 ホワイトデー衣装特化コレクション",
        children: [
          {
            title: "🤍 ホワイトデー衣装セット / White Day Presets",
            children: [
              { title: "🤍 王道ホワイトデー", items: [
                { ja: "王道ホワイトデー衣装セット", en: "classic white day outfit set" },
                { ja: "上品ホワイトデーセット", en: "elegant white day set" },
                { ja: "花束ホワイトデーセット", en: "bouquet white day set" }
              ]},
              { title: "🍪 クッキー特別枠", items: [
                { ja: "アイシングクッキー衣装セット", en: "icing cookie outfit set" },
                { ja: "シュガークッキーギフトセット", en: "sugar cookie gift set" },
                { ja: "焼き菓子プリンセスセット", en: "baked sweets princess set" },
                { ja: "クッキーラッピングドレスセット", en: "cookie wrapping dress set" }
              ]},
              { title: "🎀 可愛い・清楚系", items: [
                { ja: "ミントリボンホワイトデー", en: "mint ribbon white day outfit" },
                { ja: "レース清楚ホワイトデー", en: "lace pure white day outfit" },
                { ja: "パステルギフト風ホワイトデー", en: "pastel gift-style white day outfit" }
              ]},
              { title: "☕ カフェ・返礼系", items: [
                { ja: "カフェ返礼ホワイトデーセット", en: "cafe return-gift white day set" },
                { ja: "焼き菓子ギフトコーデ", en: "baked sweets gift coordination" },
                { ja: "午後の窓辺ホワイトデー", en: "afternoon window-seat white day outfit" }
              ]}
            ]
          },
          {
            title: "🎀 ホワイトデー衣装ベース / Base Collection",
            children: [
              { title: "👗 基本ベース", items: [
                { ja: "白ワンピース", en: "white one-piece dress" },
                { ja: "白×水色ドレス", en: "white and light blue dress" },
                { ja: "ミントリボンドレス", en: "mint ribbon dress" }
              ]},
              { title: "🍪 クッキーベース", items: [
                { ja: "クッキー生地ドレス", en: "cookie dough dress" },
                { ja: "ビスケット風ワンピース", en: "biscuit-style one-piece dress" },
                { ja: "アイシングライン衣装", en: "icing line outfit" },
                { ja: "シュガークッキーボディ", en: "sugar cookie body" },
                { ja: "焼き色ベージュドレス", en: "baked beige dress" }
              ]},
              { title: "🏫 学園・日常ベース", items: [
                { ja: "放課後ホワイトデー制服", en: "after-school white day uniform" },
                { ja: "カフェ店員風ホワイトデー服", en: "cafe staff-style white day outfit" },
                { ja: "ギフト渡し用お返しコーデ", en: "return-gift giving coordination" }
              ]},
              { title: "💐 上品・贈答ベース", items: [
                { ja: "レース付き清楚ドレス", en: "lace-trimmed pure dress" },
                { ja: "花束持ちホワイトデードレス", en: "bouquet-carrying white day dress" },
                { ja: "ギフトボックス姫ドレス", en: "gift box princess dress" }
              ]}
            ]
          },
          {
            title: "🍪 ホワイトデーカスタマイズ / Customization",
            children: [
              { title: "🍪 クッキー装飾 / Cookie Details", items: [
                { ja: "白アイシング装飾", en: "white icing decoration" },
                { ja: "ハート型クッキー飾り", en: "heart cookie ornaments" },
                { ja: "星型クッキー飾り", en: "star cookie ornaments" },
                { ja: "クッキー縁取り", en: "cookie edge trim" }
              ]},
              { title: "🍬 砂糖・焼き菓子感 / Sugar & Baked Texture", items: [
                { ja: "粉砂糖感", en: "powdered sugar texture" },
                { ja: "焼き色グラデーション", en: "baked color gradient" },
                { ja: "サクほろ質感", en: "crisp crumbly texture" },
                { ja: "パステル糖衣", en: "pastel sugar coating" }
              ]},
              { title: "🎀 包装・贈答 / Wrapping & Gift", items: [
                { ja: "白リボン", en: "white ribbon" },
                { ja: "水色リボン", en: "light blue ribbon" },
                { ja: "ギフトボックス", en: "gift box" },
                { ja: "ラッピングタグ", en: "wrapping tag" }
              ]},
              { title: "✨ 上品仕上げ / Elegant Finish", items: [
                { ja: "パール飾り", en: "pearl ornaments" },
                { ja: "ミント配色", en: "mint palette" },
                { ja: "白×金アクセント", en: "white and gold accents" },
                { ja: "軽い光沢", en: "soft glossy finish" }
              ]}
            ]
          },
          {
            title: "💐 ホワイトデー設定 / Mood & Scene",
            children: [
              { title: "😊 ムード / Mood", items: [
                { ja: "柔らかな笑顔", en: "gentle smile" },
                { ja: "上品な照れ", en: "elegant shyness" },
                { ja: "ありがとうの余韻", en: "lingering gratitude" }
              ]},
              { title: "🎭 役割 / Role", items: [
                { ja: "お返しを渡す直前", en: "just before giving the return gift" },
                { ja: "花束と一緒に渡す", en: "giving together with bouquet" },
                { ja: "焼き菓子ギフトを差し出す", en: "offering baked sweets gift" }
              ]},
              { title: "🏫 場面 / Scene", items: [
                { ja: "放課後の返礼シーン", en: "after-school return gift scene" },
                { ja: "カフェ窓辺", en: "café window seat" },
                { ja: "春の午後", en: "spring afternoon" },
                { ja: "午後の窓辺ホワイトデー", en: "afternoon window-seat white day" }
              ]},
              { title: "🎁 小物演出 / Props", items: [
                { ja: "クッキー缶付き", en: "with cookie tin" },
                { ja: "マカロン小箱付き", en: "with macaron gift box" },
                { ja: "花束と紙袋", en: "bouquet and paper gift bag" }
              ]}
            ]
          }
        ]
      },
      {
        title: "🎍 正月衣装特化コレクション",
        children: [
          {
            title: "🎍 正月衣装セット / New Year Presets",
            children: [
              { title: "🎍 晴れ着・祝い装束", items: [
                { ja: "王道晴れ着セット", en: "classic new year haregi set" },
                { ja: "祝いの赤白晴れ着", en: "red and white celebratory haregi" },
                { ja: "華やかな正月和装セット", en: "gorgeous new year japanese outfit set" }
              ]},
              { title: "⛩ 初詣・神社参り", items: [
                { ja: "初詣セット", en: "first shrine visit set" },
                { ja: "神社参り和装セット", en: "shrine visit japanese outfit set" },
                { ja: "冬神社の正月コーデ", en: "new year coordination for winter shrine" }
              ]},
              { title: "🕊 巫女・清楚系", items: [
                { ja: "巫女風正月セット", en: "miko-style new year set" },
                { ja: "清楚な白赤和装", en: "pure white and red japanese outfit" },
                { ja: "祈願風お正月衣装", en: "prayer-inspired new year outfit" }
              ]},
              { title: "✨ 縁起・祝福系", items: [
                { ja: "縁起物いっぱいセット", en: "good-luck ornament new year set" },
                { ja: "門松と映える祝い衣装", en: "celebratory outfit that shines with kadomatsu" },
                { ja: "福を呼ぶ正月装い", en: "new year attire that invites good fortune" }
              ]}
            ]
          },
          {
            title: "👘 正月衣装ベース / Base Collection",
            children: [
              { title: "👘 晴れ着ベース", items: [
                { ja: "正月晴れ着", en: "new year haregi" },
                { ja: "振袖ベース", en: "furisode base" },
                { ja: "祝い帯つき着物", en: "kimono with celebratory obi" }
              ]},
              { title: "⛩ 神社・初詣ベース", items: [
                { ja: "初詣和装", en: "first shrine visit outfit" },
                { ja: "冬神社参拝衣装", en: "winter shrine worship outfit" },
                { ja: "羽織付き初詣コーデ", en: "first shrine visit coordination with haori" }
              ]},
              { title: "🕊 巫女ベース", items: [
                { ja: "巫女服ベース", en: "miko attire base" },
                { ja: "白赤の巫女風衣装", en: "white and red miko-style outfit" },
                { ja: "祈祷風和装ベース", en: "prayer-style japanese outfit base" }
              ]},
              { title: "🎀 祝い装飾ベース", items: [
                { ja: "赤白リボン和装", en: "red and white ribbon japanese outfit" },
                { ja: "金縁飾りの和装", en: "gold-trimmed japanese outfit" },
                { ja: "祝賀模様入りドレス和装", en: "dress-like japanese outfit with celebratory patterns" }
              ]}
            ]
          },
          {
            title: "✨ 正月カスタマイズ / Customization",
            children: [
              { title: "🎀 祝い色・帯 / Festive Colors & Obi", items: [
                { ja: "祝いの赤白配色", en: "red and white celebratory palette" },
                { ja: "金の差し色", en: "gold accent color" },
                { ja: "華やかな帯結び", en: "ornate obi knot" },
                { ja: "透け感ある飾り帯", en: "decorative translucent obi" }
              ]},
              { title: "🎍 縁起物装飾 / Good Luck Ornaments", items: [
                { ja: "門松モチーフ", en: "kadomatsu motif" },
                { ja: "破魔矢飾り", en: "hamaya ornament" },
                { ja: "羽子板モチーフ", en: "hagoita motif" },
                { ja: "福袋風アクセント", en: "lucky bag accent" }
              ]},
              { title: "🌸 柄・質感 / Pattern & Texture", items: [
                { ja: "梅柄", en: "plum blossom pattern" },
                { ja: "松竹梅模様", en: "pine bamboo plum pattern" },
                { ja: "和紙風質感", en: "washi paper texture" },
                { ja: "絹の光沢", en: "silk gloss" }
              ]},
              { title: "💡 小物・仕上げ / Props & Finish", items: [
                { ja: "提灯小物", en: "lantern accessory" },
                { ja: "和傘アクセント", en: "japanese umbrella accent" },
                { ja: "鈴飾り", en: "bell ornament" },
                { ja: "祝賀の紙吹雪", en: "celebratory confetti" }
              ]}
            ]
          },
          {
            title: "🌅 正月設定 / Mood & Scene",
            children: [
              { title: "😊 ムード / Mood", items: [
                { ja: "新年の晴れやかさ", en: "bright new year mood" },
                { ja: "上品な微笑み", en: "elegant smile" },
                { ja: "静かな祈り", en: "quiet prayer" }
              ]},
              { title: "🎭 役割 / Role", items: [
                { ja: "初詣の参拝者", en: "first shrine visit worshipper" },
                { ja: "巫女役", en: "miko role" },
                { ja: "新年の迎え手", en: "welcomer of the new year" }
              ]},
              { title: "⛩ 場面 / Scene", items: [
                { ja: "神社の参道", en: "shrine approach" },
                { ja: "鳥居の前", en: "in front of torii gate" },
                { ja: "門松の並ぶ玄関先", en: "entrance lined with kadomatsu" },
                { ja: "朝の初詣", en: "morning first shrine visit" }
              ]},
              { title: "🎁 小物演出 / Props", items: [
                { ja: "破魔矢を持つ", en: "holding a hamaya arrow" },
                { ja: "羽子板を持つ", en: "holding a hagoita paddle" },
                { ja: "おみくじ付き", en: "with omikuji fortune slip" },
                { ja: "門松背景", en: "with kadomatsu backdrop" }
              ]}
            ]
          }
        ]
      },
      {
        title: "🏮 夏祭り衣装特化コレクション",
        children: [
          {
            title: "🏮 夏祭り衣装セット / Summer Festival Presets",
            children: [
              { title: "👘 浴衣・王道", items: [
                { ja: "王道夏祭り浴衣セット", en: "classic summer festival yukata set" },
                { ja: "花火映え浴衣セット", en: "fireworks-enhancing yukata set" },
                { ja: "涼やか夏夜の祭り衣装", en: "cool summer-night festival outfit" }
              ]},
              { title: "🎆 花火・夜祭り", items: [
                { ja: "花火見物セット", en: "fireworks-viewing outfit set" },
                { ja: "夜店映え祭りコーデ", en: "night-stall festival coordination" },
                { ja: "灯りに映える夏祭り装い", en: "summer festival attire glowing in lantern light" }
              ]},
              { title: "🍎 屋台・食べ歩き", items: [
                { ja: "屋台歩きセット", en: "festival stall-walking set" },
                { ja: "りんご飴祭りコーデ", en: "candied apple festival coordination" },
                { ja: "食べ歩き向け夏祭り衣装", en: "summer festival outfit for eating while walking" }
              ]},
              { title: "🐟 金魚すくい・遊戯", items: [
                { ja: "金魚すくいセット", en: "goldfish scooping outfit set" },
                { ja: "縁日遊びコーデ", en: "festival game booth coordination" },
                { ja: "射的・遊戯向け祭り衣装", en: "festival outfit for shooting gallery and games" }
              ]}
            ]
          },
          {
            title: "👘 夏祭り衣装ベース / Base Collection",
            children: [
              { title: "👘 浴衣ベース", items: [
                { ja: "夏祭り浴衣", en: "summer festival yukata" },
                { ja: "花火柄浴衣", en: "firework-pattern yukata" },
                { ja: "涼風浴衣ベース", en: "cool-breeze yukata base" }
              ]},
              { title: "🏮 法被・祭り装束", items: [
                { ja: "法被", en: "happi coat" },
                { ja: "祭り半纏", en: "festival hanten" },
                { ja: "ねじり鉢巻き祭り装束", en: "festival outfit with twisted headband" }
              ]},
              { title: "🍡 屋台・歩き回りベース", items: [
                { ja: "屋台歩き和装", en: "stall-walking japanese outfit" },
                { ja: "食べ歩きしやすい祭り衣装", en: "festival outfit suited for eating while walking" },
                { ja: "軽装夏祭りコーデ", en: "lightweight summer festival coordination" }
              ]},
              { title: "🎇 遊戯・縁日ベース", items: [
                { ja: "金魚すくい向け浴衣", en: "yukata for goldfish scooping" },
                { ja: "縁日遊戯向け和装", en: "japanese outfit for festival games" },
                { ja: "射的向け祭りコーデ", en: "festival coordination for shooting gallery" }
              ]}
            ]
          },
          {
            title: "✨ 夏祭りカスタマイズ / Customization",
            children: [
              { title: "🎆 花火・夜光 / Fireworks & Night Lights", items: [
                { ja: "花火柄", en: "firework pattern" },
                { ja: "夜空グラデーション", en: "night-sky gradient" },
                { ja: "提灯光ハイライト", en: "lantern-light highlights" },
                { ja: "きらめきラメ", en: "sparkling glitter" }
              ]},
              { title: "🍎 屋台小物 / Festival Stall Props", items: [
                { ja: "りんご飴", en: "candied apple" },
                { ja: "チョコバナナ", en: "chocolate banana" },
                { ja: "綿あめ", en: "cotton candy" },
                { ja: "たこ焼き舟皿", en: "takoyaki boat tray" }
              ]},
              { title: "🐟 遊び小物 / Game Booth Props", items: [
                { ja: "金魚袋", en: "goldfish bag" },
                { ja: "ポイ", en: "goldfish scooping paper scoop" },
                { ja: "射的景品", en: "shooting gallery prize" },
                { ja: "ヨーヨー風船", en: "yo-yo balloon" }
              ]},
              { title: "🎀 帯・飾り / Obi & Accessories", items: [
                { ja: "大きな帯結び", en: "large obi knot" },
                { ja: "飾り紐アクセント", en: "decorative cord accent" },
                { ja: "うちわ", en: "uchiwa fan" },
                { ja: "髪飾りの花火モチーフ", en: "firework motif hair ornament" }
              ]}
            ]
          },
          {
            title: "🌙 夏祭り設定 / Mood & Scene",
            children: [
              { title: "😊 ムード / Mood", items: [
                { ja: "夏夜の高揚感", en: "summer night excitement" },
                { ja: "少しはしゃいだ笑顔", en: "slightly excited smile" },
                { ja: "夜風に揺れる", en: "swaying in the night breeze" }
              ]},
              { title: "🎭 役割 / Role", items: [
                { ja: "屋台めぐり役", en: "festival stall wanderer" },
                { ja: "花火見物役", en: "fireworks viewer" },
                { ja: "縁日遊び役", en: "festival game player" }
              ]},
              { title: "🏮 場面 / Scene", items: [
                { ja: "提灯の並ぶ夜店通り", en: "night stall street lined with lanterns" },
                { ja: "花火の上がる川辺", en: "riverside with fireworks" },
                { ja: "金魚すくいの屋台前", en: "in front of a goldfish scooping stall" },
                { ja: "夏祭り会場の真ん中", en: "in the center of the summer festival venue" }
              ]},
              { title: "🎁 小物演出 / Props", items: [
                { ja: "りんご飴を持つ", en: "holding a candied apple" },
                { ja: "うちわを持つ", en: "holding an uchiwa fan" },
                { ja: "金魚袋を持つ", en: "holding a goldfish bag" },
                { ja: "花火の火花背景", en: "fireworks spark backdrop" }
              ]}
            ]
          }
        ]
      },
      {
        title: "🌕 お月見衣装特化コレクション",
        children: [
          {
            title: "🌕 お月見衣装セット / Moon Viewing Presets",
            children: [
              { title: "🌕 月夜・王道", items: [
                { ja: "王道お月見衣装セット", en: "classic moon viewing outfit set" },
                { ja: "月見に映える和装セット", en: "japanese outfit set that shines at moon viewing" },
                { ja: "月光をまとうお月見装い", en: "moonlight-clad moon viewing attire" }
              ]},
              { title: "🎑 すすき・秋夜", items: [
                { ja: "すすき月見セット", en: "susuki moon-viewing set" },
                { ja: "秋夜の月見和装", en: "autumn night moon-viewing japanese outfit" },
                { ja: "静かな秋空お月見コーデ", en: "quiet autumn sky moon-viewing coordination" }
              ]},
              { title: "🍡 和菓子・縁側", items: [
                { ja: "縁側お月見セット", en: "engawa moon-viewing set" },
                { ja: "月見団子と映える和装", en: "japanese outfit that pairs with moon-viewing dango" },
                { ja: "和菓子添えお月見衣装", en: "moon-viewing outfit with japanese sweets" }
              ]},
              { title: "✨ 幻想・月姫", items: [
                { ja: "月姫風お月見セット", en: "moon princess-inspired moon-viewing set" },
                { ja: "幻想月見ドレス", en: "fantasy moon-viewing dress" },
                { ja: "月下美人のお月見装い", en: "moonlit beauty moon-viewing attire" }
              ]}
            ]
          },
          {
            title: "👘 お月見衣装ベース / Base Collection",
            children: [
              { title: "👘 和装ベース", items: [
                { ja: "お月見浴衣", en: "moon-viewing yukata" },
                { ja: "秋柄和装", en: "autumn-pattern japanese outfit" },
                { ja: "月見向け和風ドレス", en: "japanese-style dress for moon viewing" }
              ]},
              { title: "🌕 月モチーフベース", items: [
                { ja: "月光ドレス", en: "moonlight dress" },
                { ja: "月模様ワンピース", en: "moon-pattern one-piece dress" },
                { ja: "夜空グラデ着物", en: "night-sky gradient kimono" }
              ]},
              { title: "🎑 秋夜ベース", items: [
                { ja: "すすき飾り和装", en: "susuki-decorated japanese outfit" },
                { ja: "縁側向け和装ベース", en: "japanese outfit base for engawa setting" },
                { ja: "静かな秋夜の和装", en: "quiet autumn-night japanese outfit" }
              ]},
              { title: "🍡 和菓子ベース", items: [
                { ja: "月見団子モチーフ衣装", en: "dango motif outfit" },
                { ja: "和菓子色ドレス", en: "japanese sweets color dress" },
                { ja: "甘味処風お月見コーデ", en: "moon-viewing coordination inspired by sweet shop" }
              ]}
            ]
          },
          {
            title: "✨ お月見カスタマイズ / Customization",
            children: [
              { title: "🌕 月・星装飾 / Moon & Stars", items: [
                { ja: "月モチーフ飾り", en: "moon motif ornaments" },
                { ja: "星のきらめき", en: "star sparkle accents" },
                { ja: "月光ハイライト", en: "moonlight highlights" },
                { ja: "夜空グラデーション", en: "night-sky gradient" }
              ]},
              { title: "🎑 秋飾り / Autumn Accents", items: [
                { ja: "すすき飾り", en: "susuki ornaments" },
                { ja: "秋草模様", en: "autumn grass pattern" },
                { ja: "銀の箔感", en: "silver foil accents" },
                { ja: "薄布の涼感", en: "cool sheer fabric feel" }
              ]},
              { title: "🍡 和菓子・小物 / Sweets & Props", items: [
                { ja: "月見団子小物", en: "moon-viewing dango prop" },
                { ja: "和菓子包み", en: "wrapped japanese sweets" },
                { ja: "盆皿アクセント", en: "tray accent" },
                { ja: "茶器小物", en: "tea set accessory" }
              ]},
              { title: "🎀 帯・仕上げ / Obi & Finish", items: [
                { ja: "月柄帯", en: "moon-pattern obi" },
                { ja: "金銀帯飾り", en: "gold and silver obi ornaments" },
                { ja: "上品な帯結び", en: "elegant obi knot" },
                { ja: "静かな光沢感", en: "subtle glossy finish" }
              ]}
            ]
          },
          {
            title: "🌌 お月見設定 / Mood & Scene",
            children: [
              { title: "😊 ムード / Mood", items: [
                { ja: "静かな見上げ", en: "quiet upward gaze" },
                { ja: "少し切ない微笑み", en: "slightly wistful smile" },
                { ja: "秋夜の落ち着き", en: "calm autumn night mood" }
              ]},
              { title: "🎭 役割 / Role", items: [
                { ja: "月を眺める人", en: "moon gazer" },
                { ja: "縁側で待つ人", en: "one waiting on the engawa" },
                { ja: "和菓子を供える役", en: "one offering japanese sweets" }
              ]},
              { title: "🏮 場面 / Scene", items: [
                { ja: "縁側の月見", en: "moon viewing on the engawa" },
                { ja: "すすき野原の月夜", en: "moonlit susuki field" },
                { ja: "月の見える庭先", en: "garden with visible moon" },
                { ja: "秋夜の静かな庭", en: "quiet autumn night garden" }
              ]},
              { title: "🎁 小物演出 / Props", items: [
                { ja: "月見団子付き", en: "with moon-viewing dango" },
                { ja: "すすき束付き", en: "with bundle of susuki" },
                { ja: "和傘添え", en: "with japanese umbrella" },
                { ja: "行灯の灯り", en: "andon lantern light" }
              ]}
            ]
          }
        ]
      },
      {
        title: "🥚 イースター衣装特化コレクション",
        children: [
          {
            title: "🥚 イースター衣装セット / Easter Presets",
            children: [
              { title: "🐰 うさぎ・王道", items: [
                { ja: "王道イースターセット", en: "classic easter outfit set" },
                { ja: "うさ耳イースターセット", en: "bunny-ear easter outfit set" },
                { ja: "春色イースターコーデ", en: "spring-color easter coordination" }
              ]},
              { title: "🥚 エッグ・パステル", items: [
                { ja: "イースターエッグセット", en: "easter egg outfit set" },
                { ja: "パステルエッグドレス", en: "pastel egg dress set" },
                { ja: "カラフルエッグ祭りコーデ", en: "colorful egg festival coordination" }
              ]},
              { title: "🌸 春花・可愛い系", items: [
                { ja: "春花イースターセット", en: "spring flower easter set" },
                { ja: "レース清楚イースター", en: "lace pure easter outfit" },
                { ja: "花冠うさぎコーデ", en: "flower-crown bunny coordination" }
              ]},
              { title: "✨ 幻想・スイーツ寄り", items: [
                { ja: "メルヘンイースターセット", en: "fairytale easter set" },
                { ja: "スイーツイースターコーデ", en: "sweets-inspired easter coordination" },
                { ja: "春の祝祭ドレス", en: "spring celebration dress" }
              ]}
            ]
          },
          {
            title: "👗 イースター衣装ベース / Base Collection",
            children: [
              { title: "🐰 うさぎベース", items: [
                { ja: "うさ耳ドレス", en: "bunny-ear dress" },
                { ja: "うさぎモチーフワンピース", en: "rabbit motif one-piece dress" },
                { ja: "白うさぎ風衣装", en: "white rabbit-inspired outfit" }
              ]},
              { title: "🥚 エッグベース", items: [
                { ja: "エッグ柄ドレス", en: "egg-pattern dress" },
                { ja: "パステルエッグワンピース", en: "pastel egg one-piece dress" },
                { ja: "カラフルエッグスカート", en: "colorful egg skirt" }
              ]},
              { title: "🌸 春花ベース", items: [
                { ja: "春花レースドレス", en: "spring flower lace dress" },
                { ja: "花冠つきワンピース", en: "one-piece dress with flower crown" },
                { ja: "花びらモチーフ衣装", en: "petal motif outfit" }
              ]},
              { title: "🎀 清楚・祝祭ベース", items: [
                { ja: "白×パステルドレス", en: "white and pastel dress" },
                { ja: "祝祭リボンドレス", en: "celebration ribbon dress" },
                { ja: "レース付き春ワンピ", en: "spring one-piece dress with lace" }
              ]}
            ]
          },
          {
            title: "✨ イースターカスタマイズ / Customization",
            children: [
              { title: "🥚 エッグ装飾 / Egg Details", items: [
                { ja: "イースターエッグ飾り", en: "easter egg ornaments" },
                { ja: "たまご柄", en: "egg pattern" },
                { ja: "カラフルシェル模様", en: "colorful shell pattern" },
                { ja: "金彩エッグアクセント", en: "gold-accent egg detail" }
              ]},
              { title: "🐰 うさぎパーツ / Bunny Parts", items: [
                { ja: "うさ耳", en: "bunny ears" },
                { ja: "しっぽ飾り", en: "tail ornament" },
                { ja: "ふわふわファー", en: "fluffy fur trim" },
                { ja: "うさぎ足元アクセント", en: "rabbit-foot style accent" }
              ]},
              { title: "🌸 春花・レース / Spring Flowers & Lace", items: [
                { ja: "春花刺繍", en: "spring flower embroidery" },
                { ja: "パステル花柄", en: "pastel floral pattern" },
                { ja: "レースフリル", en: "lace frills" },
                { ja: "花冠飾り", en: "flower crown ornament" }
              ]},
              { title: "🎨 配色・質感 / Color & Texture", items: [
                { ja: "パステル配色", en: "pastel palette" },
                { ja: "白×ミント配色", en: "white and mint palette" },
                { ja: "白×ピンク配色", en: "white and pink palette" },
                { ja: "やわらかな光沢", en: "soft glossy finish" }
              ]}
            ]
          },
          {
            title: "🌷 イースター設定 / Mood & Scene",
            children: [
              { title: "😊 ムード / Mood", items: [
                { ja: "春の祝祭感", en: "spring celebration mood" },
                { ja: "やわらかな笑顔", en: "gentle smile" },
                { ja: "軽やかな高揚感", en: "light festive excitement" }
              ]},
              { title: "🎭 役割 / Role", items: [
                { ja: "エッグ運び役", en: "egg-carrying role" },
                { ja: "春祭りの案内役", en: "spring festival guide role" },
                { ja: "花束とうさぎの祝祭役", en: "festive role with bouquet and bunny" }
              ]},
              { title: "🌸 場面 / Scene", items: [
                { ja: "花畑のイースター", en: "easter in a flower field" },
                { ja: "春庭の祝祭会場", en: "spring garden celebration venue" },
                { ja: "エッグハント会場", en: "egg hunt venue" },
                { ja: "やわらかな朝の庭先", en: "soft morning garden scene" }
              ]},
              { title: "🎁 小物演出 / Props", items: [
                { ja: "イースターバスケット", en: "easter basket" },
                { ja: "エッグハント小物", en: "egg hunt props" },
                { ja: "花束付き", en: "with bouquet" },
                { ja: "リボン結びのたまご", en: "ribbon-tied eggs" }
              ]}
            ]
          }
        ]
      }
    ]
  };

  const DICT = {};
  (function collectDict(node){
    if (!node) return;
    if (Array.isArray(node)) { node.forEach(collectDict); return; }
    if (node.items) {
      node.items.forEach(item => { if (item.en && item.ja) DICT[item.en] = item.ja; });
    }
    if (node.children) collectDict(node.children);
  })(ATTIRE_DATA);

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      const parent = document.querySelector("#list-attire") || container;
      if (!parent) return;

      // 既存があれば削除（更新用）
      const existing = parent.querySelector(".attire-v20-container");
      if (existing) existing.remove();

      const createNode = (node, depth = 0) => {
        const details = document.createElement("details");
        details.className = "attire-cat";
        details.open = false;
        details.style.cssText = "margin-bottom:8px; border:1px solid #e7ddd3; border-radius:10px; background:#fff;";

        const summary = document.createElement("summary");
        summary.textContent = node.title;
        summary.style.cssText = "font-weight:bold; padding:8px 12px; cursor:pointer; background:#fff8f0; color:#7a3b00;";
        details.appendChild(summary);

        const body = document.createElement("div");
        body.style.cssText = "padding:8px; display:block;";

        if (node.children) {
          node.children.forEach(child => body.appendChild(createNode(child, depth + 1)));
        }
        if (node.items) {
          const grid = document.createElement("div");
          grid.style.cssText = "display:grid; grid-template-columns:repeat(auto-fill, minmax(140px, 1fr)); gap:6px;";
          node.items.forEach(item => {
            const label = document.createElement("label");
            label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
            const cb = document.createElement("input");
            cb.type = "checkbox";
            cb.dataset.en = item.en;
            cb.style.marginRight = "6px";
            label.appendChild(cb);
            label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
            grid.appendChild(label);
          });
          body.appendChild(grid);
        }

        details.appendChild(body);
        return details;
      };

      const root = document.createElement("div");
      root.className = "attire-v20-container";

      const sep = document.createElement("div");
      sep.style.cssText = "margin:15px 0 10px 0; border-top:1px dashed #cc9; text-align:center; color:#a66; font-size:0.8em;";
      sep.textContent = "▼ 行事・季節衣装 (Seasonal & Event Attire) ▼";
      root.appendChild(sep);

      const note = document.createElement("div");
      note.style.cssText = "margin:0 0 8px; color:#9a7a66; font-size:0.76em; text-align:center;";
      note.textContent = "節分・鬼 / サンタ / ハロウィン などの季節イベント衣装をまとめる器";
      root.appendChild(note);

      const children = ATTIRE_DATA.children || [];
      if (children.length >= 4) {
        const oniGroup = {
          title: "👹 節分・鬼衣装特化コレクション",
          children: children.slice(0, 4)
        };
        root.appendChild(createNode(oniGroup));
        children.slice(4).forEach(child => {
          root.appendChild(createNode(child));
        });
      } else {
        children.forEach(child => {
          root.appendChild(createNode(child));
        });
      }

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v20-container input[type='checkbox']:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

// --- builder_ui.section.attire.v21.js ---
(function(){
  "use strict";
  const VERSION = 1; // シマエナガ・コレクション (特別衣装セット拡張)
  const KEY = "attire";

  // 56 curated Shima-enaga themed outfit sets (JA title + short EN label + full prompt tag)
  const SETS = [
    // Casual / Daily (7)
    {ja:"シマエナガ・カジュアル雪街", en:"Shima Casual Snow Street", group:"casual", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga inspired winter casual outfit, based on a small round white long-tailed bushtit, very compact round upper-body silhouette, noticeably small and fluffy proportions, slightly oversized white feather-layered short puffer jacket, smooth rounded bird-head hood, clear bold symmetrical black circular eye-ring markings on hood sides, very small subtle beak motif detail, no animal ears, no large angel wings, no giant feather spread, small subtle feather crest on hood top, visible contour feather layering with rachis detailing, lightweight airy texture, long narrow avian tail feathers made of multiple thin layered plumes, thin elegant bird tail fan structure, not mammal tail, minimal decorative feather accents, urban snow-town street fashion, calm understated presence, balanced proportions, bird-like but casual and wearable"},
    {ja:"シマエナガ・ゆめかわパーカー", en:"Shima YumeKawa Hoodie", group:"casual", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga pastel casual hoodie, feather trims, cloud-like puff sleeves, cute bird motif patches, soft pastel palette, yume-kawaii streetwear"},
    {ja:"シマエナガ・春のライトジャケット", en:"Shima Spring Jacket", group:"casual", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga light jacket, white bomber with subtle feather texture, sakura and snowflake mixed embroidery, clean casual look"},
    {ja:"シマエナガ・部屋着もふもふ", en:"Shima Fluffy Loungewear", group:"casual", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga fluffy loungewear set, oversized sweater with feather pattern, soft pajama shorts, cozy home outfit"},
    {ja:"シマエナガ・カフェ店員カジュアル", en:"Shima Cafe Casual", group:"casual", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga cafe casual uniform, apron with bird face emblem, white shirt, feather hairclip, warm friendly vibe"},
    {ja:"シマエナガ・スポーツジャージ", en:"Shima Sport Jersey", group:"casual", tag: SHIMA_BRAND_CORE + ", " + "Long-tailed bushtit inspired sports tracksuit, white rounded chest panel resembling fluffy shima-enaga face, small black circular eye emblems on chest, beak-shaped zipper charm, feather-pattern side stripes on sleeves and pants, tail-feather motif extending from lower back, soft white faux-fur trimmed collar, multiple embroidered shima-enaga patches, snow-white and sky-blue color scheme, rounded silhouette design"},
    {ja:"シマエナガ・レインコート", en:"Shima Raincoat", group:"casual", tag: SHIMA_BRAND_CORE + ", " + "Long-tailed bushtit inspired raincoat, translucent white and icy blue material, hood shaped like fluffy shima-enaga head, small black eye embroidery on hood, rounded body silhouette, tail-feather shaped back panel, visible shima-enaga stickers beneath transparent layer, feather-textured inner lining, bird-shaped zipper pull, snow-white and soft blue color balance"},

    // School / Uniform (23)
    {ja:"シマエナガ・学園制服ブレザー", en:"Shima School Blazer", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga school uniform blazer, white blazer with feather piping, snowflake crest, pleated skirt, ribbon tie"},
    {ja:"シマエナガ・セーラー服氷彩", en:"Shima Sailor Ice", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga sailor uniform, icy blue sailor collar, feather-shaped scarf, crisp pleated skirt"},
    {ja:"シマエナガ・冬制服コート", en:"Shima Winter Uniform", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga winter school coat, white duffle coat with feather fur trim, snowflake buttons, scarf"},
    {ja:"シマエナガ・体育着ブルマ風", en:"Shima PE Retro", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga retro PE uniform, white and blue gym outfit, sporty bloomers style, feather logo"},
    {ja:"シマエナガ・学園アイドル制服", en:"Shima Idol Uniform", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga idol school uniform, short jacket, layered skirt, feather accessories, stage-ready cute"},
    {ja:"シマエナガ・図書委員", en:"Shima Library Prefect", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga librarian uniform, cardigan, ribbon, modest skirt, feather bookmark accessories"},
    {ja:"シマエナガ・生徒会正装", en:"Shima Student Council", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga student council uniform, formal white blazer, armband with bird crest, ceremonial vibe"},

    {ja:"シマエナガ・夏制服セーラー薄羽", en:"Shima Summer Sailor", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga summer sailor uniform, light short-sleeve top, ice-blue collar, subtle feather stitch, airy pleated skirt"},
    {ja:"シマエナガ・夏制服シャツリボン", en:"Shima Summer Shirt & Ribbon", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga summer school shirt, crisp white short sleeves, sky-blue ribbon, tiny bird crest patch, neat pleated skirt"},
    {ja:"シマエナガ・学ラン黒羽", en:"Shima Gakuran Black Feather", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga gakuran, classic black uniform, feather-shaped metal buttons, small shima-enaga crest embroidery, clean silhouette"},
    {ja:"シマエナガ・秋制服上着つき", en:"Shima Autumn Jacket Uniform", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga autumn uniform with jacket, lightweight bomber/blouson, feather stripe cuffs, small patch, layered school look"},
    {ja:"シマエナガ・通学ニットベスト", en:"Shima Knit Vest", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga school knit vest, white and gray color-block, subtle feather knit pattern, tiny patch, tidy preppy style"},
    {ja:"シマエナガ・冬制服マフラー", en:"Shima Winter Scarf Uniform", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga winter uniform with scarf, soft knit scarf with feather motif ends, minimal crest, warm layered look"},

    // School / Uniform Expansion (+10)
    {ja:"シマエナガ・春制服カーディガン", en:"Shima Spring Cardigan Uniform", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga spring uniform with cardigan, light knit cardigan, feather-line trim, small chest patch, soft pastel accent, neat pleated skirt"},
    {ja:"シマエナガ・春制服ライトブレザー", en:"Shima Spring Light Blazer", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga spring blazer uniform, thin blazer, subtle feather piping, small crest, airy layers, clean school look"},
    {ja:"シマエナガ・梅雨レイン通学", en:"Shima Rainy Commute", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga rainy commute uniform, water-repellent school coat, minimal droplet pattern, feather-shimmer lining, discreet bird patch, tidy silhouette"},
    {ja:"シマエナガ・梅雨傘通学仕様", en:"Shima Umbrella Commute", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga umbrella commute style, school uniform with clear umbrella, subtle feather motif on handle strap, small sticker patch, rain-speckled fabric"},
    {ja:"シマエナガ・体育祭体操服", en:"Shima Sports Day Gym", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga sports day gym uniform, athletic jersey and shorts, feather stripe accents, small team patch, zipper charm, clean sporty silhouette"},
    {ja:"シマエナガ・体育祭応援団", en:"Shima Sports Day Cheer", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga sports festival cheer outfit, light cheer jacket, feather-lined hem, armband patch, headband with small feather motif, energetic school spirit"},
    {ja:"シマエナガ・文化祭メイド制服", en:"Shima Culture Fest Maid", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga culture festival maid uniform, classic maid dress with subtle feather embroidery, small apron patch, tidy frills kept minimal, school cafe vibe"},
    {ja:"シマエナガ・文化祭ステージ衣装", en:"Shima Culture Fest Stage", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga culture festival stage costume, school idol stage uniform variant, ribbon with feather pattern, small crest, glossy trim, performance-ready but still school themed"},
    {ja:"シマエナガ・スケ番仕様", en:"Shima Sukeban Style", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga sukeban style uniform, long skirt, modified blazer, bold but controlled feather embroidery, small bird patch, tough school vibe"},
    {ja:"シマエナガ・番長ヤンキー仕様", en:"Shima Banchou Yankee", group:"school", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga banchou/yankee uniform, open-collar shirt, embroidered jacket with feather motif, armband patch, confident delinquent aura"},


    // Force / Tactical (7)
    {ja:"シマエナガフォース・フロストパイロット", en:"Force Frost Pilot", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga force pilot suit, sleek white tactical flight suit, icy blue lines, feather armor panels, helmet with bird crest"},
    {ja:"シマエナガフォース・オペレータースーツ", en:"Force Operator", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga force operator suit, white stealth bodysuit, feather camo pattern, utility belt, comms headset"},
    {ja:"シマエナガフォース・セレモニードレスユニフォーム", en:"Force Ceremony Dress", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga force formal uniform dress, high-collar coat dress, feather epaulets, snowflake medals"},
    {ja:"シマエナガフォース・メカニック", en:"Force Mechanic", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga force mechanic jumpsuit, white coverall, feather patch, tool harness, oil smudges, garage vibe"},
    {ja:"シマエナガフォース・スナイパーギリー", en:"Force Sniper Ghillie", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga force ghillie suit, white feather ghillie, snow camouflage, cold-breath haze"},
    {ja:"シマエナガフォース・医療班", en:"Force Medic", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga force medic uniform, white tactical medic coat, feather insignia, medical pouch, clean sterile"},
    {ja:"シマエナガフォース・艦橋クルー", en:"Force Bridge Crew", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga force bridge crew uniform, sleek white suit, holographic panels, feather badge"},

    // Dresses / Gowns (7)
    {ja:"シマエナガ・羽衣レガリア", en:"Feather Regalia", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga motif outfit set, white feather bolero, snowflake embroidery, round fluffy A-line silhouette, elegant winter regalia"},
    {ja:"シマエナガ・ストリートゆめかわ", en:"Street YumeKawa", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga street yume-kawaii dress, pastel layers, feather ribbons, cute bird motifs, playful"},
    {ja:"シマエナガ・ゴスロリ雪影", en:"Gothic Snow Lolita", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga gothic lolita dress, black and white, feather lace, snowflake patterns, mini top hat with feathers"},
    {ja:"シマエナガ・ホワイトバレエ", en:"White Ballet", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga ballet costume, white tutu like fluffy feathers, delicate snowflake sequins, graceful"},
    {ja:"シマエナガ・聖夜のドレス", en:"Holy Night Dress", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga holy night gown, luminous white fabric, feather halo accessories, soft glow"},
    {ja:"シマエナガ・星空の歌姫", en:"Starlit Diva", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga diva stage dress, shimmering feathers, starry gradient, microphone accessory, spotlight"},
    {ja:"シマエナガ・氷晶プリンセス", en:"Ice Crystal Princess", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga princess gown, ice-crystal ornaments, feather cape, glittering snow particles"},

    // China / Eastern (7)
    {ja:"攻めチャイナ・雪羽スリット", en:"Bold Cheongsam Snow", group:"east", tag: SHIMA_BRAND_CORE + ", " + "bold cheongsam dress, Shima-enaga motif, white silk, feather embroidery, high slit, icy jewelry"},
    {ja:"攻めチャイナ・サイバー氷龍", en:"Cyber Cheongsam", group:"east", tag: SHIMA_BRAND_CORE + ", " + "cyber cheongsam, Shima-enaga motif, neon ice-blue circuits, feather patterns, futuristic accessories"},
    {ja:"チャイナ・純白羽紋", en:"White Feather Cheongsam", group:"east", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga cheongsam, pure white, feather brocade, snowflake buttons, elegant"},
    {ja:"チャイナ・黒銀雪影", en:"Black Silver Cheongsam", group:"east", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga black cheongsam with silver feather embroidery, winter night vibe"},
    {ja:"チャイナ・シマエナガステッカー密着", en:"Shima Sticker Print Cheongsam", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "white qipao, elegant chinese dress, mandarin collar, frog buttons, fitted waist, side slits, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the dress surface, all sticker motifs stay on the dress only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on chest, waist, hem, and side panels, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, black, soft gray, deep navy accents, subtle floral embroidery"},
    {ja:"シマエナガ・ゆめかわステッカー密着", en:"Shima Sticker YumeKawa", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "pastel yume-kawaii outfit, frilly dress, oversized sleeves, ribbon decorations, soft silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the dress surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on chest, skirt, sleeves, and hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, pastel pink, baby blue, white, lavender accents"},
    {ja:"シマエナガ・ゴスロリステッカー密着", en:"Shima Sticker Gothic Lolita", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "black and white gothic lolita dress, layered skirt, lace trim, ribbon corset details, elegant gothic silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the dress surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, sleeves, skirt, and hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, black, white, silver-gray accents, subtle gothic embroidery"},
    {ja:"シマエナガ・カジュアルステッカー密着", en:"Shima Sticker Casual", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "casual outfit, oversized hoodie, pleated skirt, relaxed silhouette, everyday fashion, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the clothing surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on hoodie, sleeves, skirt, and chest, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, soft gray, black, navy accents"},
    {ja:"シマエナガ・ドレスステッカー密着", en:"Shima Sticker Princess Dress", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "elegant princess dress, flowing skirt, refined bodice, layered fabric, graceful formal silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the dress surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, waist, skirt, and hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, pearl gray, silver, deep navy accents"},
    {ja:"シマエナガ・冬服ステッカー密着", en:"Shima Sticker Winter Coat", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "winter coat outfit, fluffy long coat, soft knit innerwear, layered winter fashion, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the clothing surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on coat, chest, sleeves, hem, and scarf, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, black, soft gray, deep navy accents, subtle snowflake embroidery"},
    {ja:"シマエナガ・和装ステッカー密着", en:"Shima Sticker Wa Dress", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "modern kimono dress, elegant wa-style outfit, obi accents, long sleeves, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the clothing surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on sleeves, obi, hem, and chest, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, pale blue, soft gray, deep navy accents, subtle floral embroidery"},
    {ja:"シマエナガ・制服ステッカー密着", en:"Shima Sticker Uniform", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "school uniform outfit, sailor collar, pleated skirt, ribbon tie, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the clothing surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on collar, chest, sleeves, and skirt, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, navy, soft gray accents"},
    {ja:"シマエナガ・アイドルステッカー密着", en:"Shima Sticker Idol", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "idol stage outfit, frilled mini dress, ribbon accessories, performance costume, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the dress surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, skirt, sleeves, and waist, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, ice blue, silver, pastel accents"},
    {ja:"シマエナガ・ストリートステッカー密着", en:"Shima Sticker Street", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "street fashion outfit, oversized jacket, layered top, short skirt, urban silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the clothing surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on jacket, chest, sleeves, and skirt, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, black, gray, deep navy accents"},
    {ja:"シマエナガ・ルームウェアステッカー密着", en:"Shima Sticker Roomwear", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "roomwear outfit, soft cardigan, cozy top, short lounge skirt, relaxed home fashion, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the clothing surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on cardigan, chest, sleeves, and hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, soft lavender, pale blue, gray accents"},
    {ja:"シマエナガ・フェミニンステッカー密着", en:"Shima Sticker Feminine", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "feminine outfit, soft blouse, ribbon waist, flared skirt, graceful everyday silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on blouse, waist ribbon, cuffs, and skirt hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, pale pink, light gray, deep navy accents"},
    {ja:"シマエナガ・水着ステッカー密着", en:"Shima Sticker Swimwear", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "cute swimwear outfit, fitted swimsuit silhouette, summery styling, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the swimwear fabric, bird sticker decals attached flat onto the clothing surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on chest, side panels, waistline, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, aqua, soft gray, navy accents"},
    {ja:"シマエナガ・バニーステッカー密着", en:"Shima Sticker Bunny", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "bunny outfit, sleek bodysuit, cuffs, collar, elegant playful silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, waist, cuffs, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, black, silver-gray, deep navy accents"},
    {ja:"シマエナガ・クラシックバニーステッカー密着", en:"Shima Sticker Classic Bunny", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "classic bunny suit, polished bodysuit, white cuffs, satin collar, stage-ready silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, waist, cuffs, collar, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, black, silver-gray, deep navy accents"},
    {ja:"シマエナガ・逆バニーステッカー密着", en:"Shima Sticker Reverse Bunny", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "reverse bunny outfit, dramatic open styling, sleek formal bunny silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice panels, waistline, cuffs, collar, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, black, midnight navy, silver accents"},
    {ja:"シマエナガ・フリルバニーステッカー密着", en:"Shima Sticker Frill Bunny", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "frilled bunny outfit, cute bodysuit, ribbon trim, playful idol-like silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, frills, waist ribbon, cuffs, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, pale pink, black, soft gray accents"},
    {ja:"シマエナガ・サイバーバニーステッカー密着", en:"Shima Sticker Cyber Bunny", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "cyber bunny outfit, futuristic bodysuit, luminous trim, sleek nightclub silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, side panels, cuffs, collar, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, black, neon cyan, deep navy accents"},
    {ja:"シマエナガ・メイドステッカー密着", en:"Shima Sticker Maid", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "classic maid outfit, frilled apron dress, puff sleeves, elegant service silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on apron, bodice, sleeves, and skirt hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, black, pale blue, soft gray accents"},
    {ja:"シマエナガ・天使ステッカー密着", en:"Shima Sticker Angel", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "angelic dress outfit, celestial white costume, graceful layered fabric, halo-like elegance, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on chest, sleeves, waist, and hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, pearl gray, soft gold, pale blue accents"},
    {ja:"シマエナガ・悪魔ステッカー密着", en:"Shima Sticker Devil", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "devilish outfit, dark elegant costume, sharp silhouette, gothic fantasy styling, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, sleeves, waist, and hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, black, crimson, silver-gray, deep navy accents"},
    {ja:"シマエナガ・サイバーステッカー密着", en:"Shima Sticker Cyber", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "cyber fashion outfit, futuristic jacket, sleek bodysuit layering, techno silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on jacket, chest, sleeves, and hip panels, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, black, neon blue, metallic gray accents"},
    {ja:"シマエナガ・和ロリステッカー密着", en:"Shima Sticker Wa Lolita", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "wa-lolita outfit, kimono-inspired lolita dress, ribbon obi, frilled sleeves, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on sleeves, obi, bodice, and skirt hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, pale pink, soft blue, deep navy accents"},
    {ja:"シマエナガ・中華ロリステッカー密着", en:"Shima Sticker Qi Lolita", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "qi-lolita outfit, chinese lolita dress, mandarin collar, layered frills, elegant eastern silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, sleeves, waist, and layered skirt hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, red, soft gray, deep navy accents"},
    {ja:"シマエナガ・春色カーデステッカー密着", en:"Shima Sticker Spring Cardigan", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "spring cardigan outfit, soft pastel cardigan, light inner dress, gentle daily silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on cardigan, chest, cuffs, and hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, pale mint, soft pink, light gray accents"},
    {ja:"シマエナガ・ニットワンピステッカー密着", en:"Shima Sticker Knit Onepiece", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "knit one-piece dress, soft ribbed knit texture, cozy feminine silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the dress surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on chest, sleeves, waist, and hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, ivory, soft gray, pale blue, deep navy accents"},
    {ja:"シマエナガ・デニムカジュアルステッカー密着", en:"Shima Sticker Denim Casual", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "denim casual outfit, short denim jacket, pleated skirt, everyday street-casual balance, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on jacket, chest, back panel, and skirt hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, washed blue, white, black, soft gray accents"},
    {ja:"シマエナガ・クラロリステッカー密着", en:"Shima Sticker Classic Lolita", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "classic lolita dress, refined frills, elegant ribbon waist, structured skirt silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the dress surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, cuffs, waist ribbon, and skirt hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, dusty blue, silver-gray, ivory accents"},
    {ja:"シマエナガ・セレモニーステッカー密着", en:"Shima Sticker Ceremony Dress", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "ceremony dress outfit, refined formalwear, neat ribbon details, graceful event silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the dress surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on chest, cuffs, waist, and skirt hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, pearl gray, navy, soft silver accents"},
    {ja:"シマエナガ・ライブステージステッカー密着", en:"Shima Sticker Live Stage", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "live stage costume, sparkling performance dress, layered mini skirt, energetic show silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the dress surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, sleeves, waist, and layered skirt hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, ice blue, pastel violet, silver accents"},
    {ja:"シマエナガ・浴衣ステッカー密着", en:"Shima Sticker Yukata", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "summer yukata outfit, light fabric, obi sash, elegant seasonal silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the clothing surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on sleeves, obi, hem, and back panel, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, pale blue, indigo, soft gray accents"},
    {ja:"シマエナガ・和モダンステッカー密着", en:"Shima Sticker Modern Wa", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "modern wa-fashion outfit, kimono sleeve top, short layered skirt, obi belt accents, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the clothing surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on sleeves, obi belt, chest, and layered hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, vermilion, pale gold, soft gray accents"},
    {ja:"シマエナガ・漢服ステッカー密着", en:"Shima Sticker Hanfu", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "hanfu-inspired outfit, flowing layered sleeves, elegant eastern silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the fabric, bird sticker decals attached flat onto the clothing surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on sleeves, waist sash, chest, and hemline, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, jade green, pale blue, deep navy accents"},
    {ja:"シマエナガ・テックウェアステッカー密着", en:"Shima Sticker Techwear", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "techwear outfit, utility straps, layered black jacket, urban functional silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on jacket, utility panels, sleeves, and thigh straps, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, black, white, graphite, neon blue accents"},
    {ja:"シマエナガ・近未来パーカーステッカー密着", en:"Shima Sticker Future Hoodie", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "near-future hoodie outfit, sleek oversized hoodie, luminous trim, sporty urban silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on hood, chest, sleeves, and hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, black, cyan, metallic gray accents"},
    {ja:"シマエナガ・ネオンストリートステッカー密着", en:"Shima Sticker Neon Street", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "neon street outfit, cropped jacket, layered top, urban nightlife silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on jacket, chest, sleeves, and skirt or shorts hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, black, white, neon pink, electric blue accents"},
    {ja:"シマエナガ・ゴシックシスターステッカー密着", en:"Shima Sticker Gothic Sister", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "gothic sister outfit, modest layered dress, veil-inspired elegance, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on chest, cuffs, hem, and veil edge, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, black, white, silver-gray, deep navy accents"},
    {ja:"シマエナガ・パラディンステッカー密着", en:"Shima Sticker Paladin", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "paladin-inspired dress armor outfit, elegant white armor panels, ceremonial fantasy silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric and armor panels, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on chest armor, sleeves, waist guard, and hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, silver, pale blue, gold accents"},
    {ja:"シマエナガ・ダークメイドステッカー密着", en:"Shima Sticker Dark Maid", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "dark maid outfit, frilled apron dress, gothic service styling, elegant shadowy silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on apron, bodice, cuffs, and skirt hem, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, black, crimson, soft gray, deep navy accents"},
    {ja:"シマエナガ・フリルビキニステッカー密着", en:"Shima Sticker Frill Bikini", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "frilled bikini swimsuit, cute layered ruffles, soft resort silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the swimsuit surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bikini top, side ties, frill edges, and pareo accents, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, pale aqua, pastel pink, navy accents"},
    {ja:"シマエナガ・ワンピース水着ステッカー密着", en:"Shima Sticker Onepiece Swim", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "one-piece swimsuit, smooth fitted silhouette, elegant swimwear styling, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the swimsuit surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on chest, side panels, waist line, and hip curve, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, navy, pale blue, silver-gray accents"},
    {ja:"シマエナガ・リゾート水着ステッカー密着", en:"Shima Sticker Resort Swim", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "resort swim outfit, layered swimwear with pareo, relaxed beach silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the swim fabric, bird sticker decals attached flat onto the clothing surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bikini or swimsuit panels, pareo edge, chest, and waist ribbon, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, turquoise, soft coral, deep navy accents"},

    {ja:"シマエナガ・競泳ステッカー密着", en:"Shima Sticker Competitive Swim", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "competitive racing swimsuit, sleek athletic silhouette, streamlined sporty styling, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the swimsuit surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on chest, side panels, waistline, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, navy, racing blue, silver-gray accents"},
    {ja:"シマエナガ・スポーティビキニステッカー密着", en:"Shima Sticker Sporty Bikini", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "sporty bikini swimwear, active beach silhouette, sharp clean cut, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the swimsuit surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bikini top, side straps, waistline, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, aqua, navy, sporty cyan accents"},
    {ja:"シマエナガ・ラッシュガードステッカー密着", en:"Shima Sticker Rash Guard", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "rash guard swimwear, sporty zip-front top, sleek beach athletic silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the swimwear fabric, bird sticker decals attached flat onto the clothing surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on chest, sleeves, side panels, waistline, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, aqua, sporty navy, silver-gray accents"},
    {ja:"シマエナガ・競泳ハイレグステッカー密着", en:"Shima Sticker High-Leg Racing Swim", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "high-leg racing swimsuit, sleek athletic silhouette, dynamic competitive swim styling, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the swimsuit surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on chest, side panels, waistline, straps, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, navy, racing blue, silver-gray accents"},
    {ja:"シマエナガ・セーラー水着ステッカー密着", en:"Shima Sticker Sailor Swim", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "sailor style swimwear, sailor collar, ribbon front, cute nautical swimsuit silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the swimwear fabric, bird sticker decals attached flat onto the clothing surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on collar, chest, waistline, hem, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, navy, aqua, soft gray accents"},
    {ja:"シマエナガ・南国パレオステッカー密着", en:"Shima Sticker Tropical Pareo", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "tropical swimwear with pareo wrap, resort beach styling, breezy summery silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the swimwear and pareo fabric, bird sticker decals attached flat onto the clothing surface, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on chest, pareo wrap, waistline, hem, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, tropical aqua, leaf green, soft gray accents"},
    {ja:"シマエナガ・リボンバニーステッカー密着", en:"Shima Sticker Ribbon Bunny", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "ribbon bunny outfit, playful bodysuit, bow accents, cute stage silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, ribbon bows, cuffs, waistline, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, pale pink, black, silver-gray accents"},
    {ja:"シマエナガ・アイドルバニーステッカー密着", en:"Shima Sticker Idol Bunny", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "idol bunny outfit, performance bodysuit, sparkling trim, cheerful spotlight silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, collar, cuffs, waist ribbon, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, gold, pastel blue, silver-gray accents"},
    {ja:"シマエナガ・ゴシックバニーステッカー密着", en:"Shima Sticker Gothic Bunny", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "gothic bunny outfit, dark elegant bodysuit, lace accents, refined nocturne silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, lace edges, cuffs, collar, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, black, wine red, silver-gray accents"},
    {ja:"シマエナガ・ロイヤルバニーステッカー密着", en:"Shima Sticker Royal Bunny", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "royal bunny outfit, elegant bodysuit, jeweled collar, regal stage silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, collar, cuffs, waist, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, royal blue, gold, silver-gray accents"},
    {ja:"シマエナガ・和バニーステッカー密着", en:"Shima Sticker Wa Bunny", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "wa-style bunny outfit, obi-inspired waist, kimono sleeve accents, elegant festive bunny silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, obi line, cuffs, collar, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, crimson, deep navy, soft gold accents"},
    {ja:"シマエナガ・中華バニーステッカー密着", en:"Shima Sticker Chinese Bunny", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "chinese style bunny outfit, mandarin collar details, qipao-inspired bunny silhouette, elegant festive styling, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, collar, side panels, cuffs, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, red, black, gold accents"},
    {ja:"シマエナガ・メイドバニーステッカー密着", en:"Shima Sticker Maid Bunny", group:"sticker", tag: SHIMA_BRAND_CORE + ", " + "maid bunny outfit, apron details, frilled bodysuit, sweet service silhouette, clearly visible Long-tailed bushtit sticker-print motifs, shima-enaga sticker designs printed directly on the clothing surface, bird sticker decals attached flat onto the fabric, all sticker motifs stay on the clothing only, no separate stickers outside the clothing, multiple cute white fluffy Long-tailed bushtit designs on bodice, apron, cuffs, collar, and hip line, clear bird-shaped sticker motifs, rounded fluffy body, tiny beak, black eyes, black tail accents, fashionable sticker collage print restricted to the fabric only, printed applique look, decorative patch-like motifs fixed on the clothing, white, black, pale blue, silver-gray accents"},
    {ja:"東方・巫女装束雪祈", en:"Miko Snow Prayer", group:"east", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga miko outfit, white and red, feather tassels, snow shrine atmosphere"},
    {ja:"和洋折衷・羽織ドレス", en:"Haori Dress Fusion", group:"east", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga haori dress fusion, kimono sleeves, modern skirt, feather patterns"},
    {ja:"中華・龍鳳羽冠", en:"Dragon-Phoenix Crown", group:"east", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga chinese ceremonial outfit, dragon-phoenix headdress with feathers, ornate silk"},

    // Gravure / Glam (7)
    {ja:"グラビア・フェザー水着", en:"Feather Swimsuit", group:"gravure", tag: SHIMA_BRAND_CORE + ", " + "gravure idol costume, Shima-enaga motif swimsuit, white and ice-blue, feather frills, glossy"},
    {ja:"グラビア・ビキニ雪結晶", en:"Snowflake Bikini", group:"gravure", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga snowflake bikini, feather accessories, sparkling ice crystals, beach winter fantasy"},
    {ja:"グラビア・ランジェリー羽紋", en:"Feather Lingerie", group:"gravure", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga motif lingerie set, white lace like feathers, delicate snowflake charms"},
    {ja:"グラビア・ボディスーツ艶", en:"Gloss Bodysuit", group:"gravure", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga glossy bodysuit, feather pattern, sleek silhouette, high-fashion gravure"},
    {ja:"グラビア・ファーコート脱ぎかけ", en:"Half-Off Fur Coat", group:"gravure", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga fur coat, feather trim, glamorous pose, teasing fashion (non-explicit)"},
    {ja:"グラビア・ナイトクラブドレス", en:"Night Club Dress", group:"gravure", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga night club mini dress, feather boa, neon lighting, glam"},
    {ja:"グラビア・撮影会セット", en:"Photoshoot Set", group:"gravure", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga gravure photoshoot outfit, studio lights, feather props, glossy makeup"},

    // Fantasy / Role (7)
    {ja:"シマ騎士・白羽の鎧", en:"Shima Knight", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga knight armor, white feather pauldrons, snowflake crest, elegant plate armor"},
    {ja:"シマ魔導士・氷紋ローブ", en:"Shima Mage", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga mage robe, icy runes, feather-lined hood, magical aura"},
    {ja:"シマ忍者・雪迷彩", en:"Shima Ninja", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga ninja outfit, white stealth suit, feather mask, snow camouflage"},
    {ja:"シマ海賊・羽根帽子", en:"Shima Pirate", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga pirate outfit, tricorne hat with feathers, white coat, winter sea vibe"},
    {ja:"シマ天使・白羽の礼装", en:"Shima Angel", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga angelic attire, feather wings motif, halo, pure white dress"},
    {ja:"シマ悪魔・黒羽の誘惑", en:"Shima Devil", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga devilish outfit, black feathers, sharp accessories, seductive gothic fashion"},
    {ja:"シマ巫女・雪神楽", en:"Shima Kagura Miko", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga kagura miko outfit, ceremonial sleeves, feather ornaments, sacred snow"},

    // Seasonal / Event (7)
    {ja:"シマエナガ・浴衣夏氷", en:"Shima Yukata", group:"season", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga yukata, pale blue patterns, feather obi, summer night festival"},
    {ja:"シマエナガ・着物冬白", en:"Shima Kimono", group:"season", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga kimono, white and gray, feather crest, snowy garden"},
    {ja:"シマエナガ・クリスマスサンタ", en:"Shima Santa", group:"season", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga santa outfit, fluffy white fur trim, feather pompom, festive"},
    {ja:"シマエナガ・ハロウィン梟魔女", en:"Shima Owl Witch", group:"season", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga witch costume, feather hat, moonlight, playful spooky"},
    {ja:"シマエナガ・新年晴れ着", en:"Shima New Year", group:"season", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga new year haregi, elegant kimono, feather ornament, shrine visit"},
    {ja:"シマエナガ・節分鬼かわ", en:"Shima Oni Cute", group:"season", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga cute oni costume, small horns, tiger stripes, feather cape"},
    {ja:"シマエナガ・花嫁純白", en:"Shima Bride", group:"season", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga bridal gown, feather veil, snowflake tiara, pure white"},

    // --- Expanded Shima Collection (44) ---
    {ja:"シマエナガ・ライトフェザー", en:"Shima Light Feather Variant", group:"casual", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga outfit, lightweight feather-themed casual attire, white head motif accents, subtle feather embroidery, soft white/gray palette"},
    {ja:"シマエナガ・ヘヴィフェザー", en:"Shima Heavy Feather Variant", group:"casual", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga outfit, heavier feather motif layering, thick feather-textured trims, monochrome white/black accents, cozy silhouette"},
    {ja:"シマエナガ・祭り羽織", en:"Shima Festival Feather Dress", group:"east", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga festival attire, feather-pattern yukata/haori fusion, snowflake and feather motifs, elegant yet playful"},
    {ja:"シマエナガ・天体羽衣", en:"Shima Celestial Plume Edition", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga celestial outfit, starlight embroidery, moon-and-feather ornaments, luminous fabric, night fantasy vibe"},
    {ja:"シマエナガ・雪花タイプ", en:"Shima Snow Blossom Type", group:"season", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga winter outfit, snow blossom embroidery, fluffy white trims, ice-blue highlights, gentle cute silhouette"},
    {ja:"シマエナガ・アーバン羽根フーディ", en:"Shima Urban Feather Hoodie", group:"casual", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga street hoodie, feather stripe accents, bird patch set, white/ice-blue color blocking, casual"},
    {ja:"シマエナガ・ロイヤル白羽根", en:"Shima Royal White Plume", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga royal attire, white plume capelet, subtle crown motifs, refined ceremonial styling, jewel accents"},
    {ja:"シマエナガ・フライトギア", en:"Shima Flight-Ready Gear", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga tactical flight outfit, feather-shaped panels, streamlined silhouette, wing-like back details, crisp white/gray"},
    {ja:"シマエナガ・夜咲きプルーム", en:"Shima Night Bloom Plume", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga night attire, dark-to-light gradient, feather shimmer embroidery, elegant seductive mood"},
    {ja:"シマエナガ・巫女融合", en:"Shima Shrine Maiden Fusion", group:"east", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga shrine maiden outfit, white/red accents, feather talismans, bird crest patches, sacred cute vibe"},
    {ja:"シマエナガ・ホロフェザー", en:"Shima Holo Feather Shine", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga holographic feather outfit, iridescent feather trims, hologram panels, futuristic shine"},
    {ja:"シマエナガ・黎明ローブ", en:"Shima Dawn Light Robe", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga robe, dawn glow gradient, feather-lined hood, soft luminous fabric, serene"},
    {ja:"シマエナガ・バトルトリム", en:"Shima Battle-Trimmed Feathers", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga battle attire, feather-edged armor trims, reinforced panels, wing insignia, awakened feel"},
    {ja:"シマエナガ・サファイア羽根", en:"Shima Sapphire Plume Variant", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga dress, sapphire jewel feather ornaments, crystalline accents, luxurious ceremonial styling"},
    {ja:"シマエナガ・竜羽融合", en:"Shima Dragon Plume Fusion", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga fusion attire with dragon-inspired feather armor, scaled sheen, wing-like back unit, awakened battle form"},
    {ja:"シマエナガ・白炎フェニックス", en:"Shima Phoenix White Blaze", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga phoenix-inspired regalia, white flame motifs, glowing feather layers, radiant ceremonial dress"},
    {ja:"シマエナガ・天使翼フォーム", en:"Shima Celestial Angel Wing Form", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga angelic form, translucent feather wings, halo ornaments, luminous white/ice-blue dress"},
    {ja:"シマエナガ・結晶進化", en:"Shima Crystal Feather Evolution", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga evolved dress, crystal feather adornments, prismatic highlights, high-end ritual fashion"},
    {ja:"シマエナガ・フロストウィング極", en:"Shima Frost Wing Full Regalia", group:"season", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga frost wing regalia, layered ice-feather cape, cold glow particles, majestic winter queen vibe"},
    {ja:"シマエナガ・星雲シマー", en:"Shima Nebula Shimmer Dress", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga nebula dress, stardust shimmer fabric, floating feather particles, deep night fantasy"},
    {ja:"シマエナガ・月護り", en:"Shima Lunar Guardian Attire", group:"season", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga lunar guardian outfit, crescent motifs, feather armor panels, sacred warrior styling"},
    {ja:"シマエナガ・風霊マント", en:"Shima Wind Spirit Mantle", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga wind spirit mantle, feather ribbons flowing, airy translucent layers, ethereal"},
    {ja:"シマエナガ・聖騎士羽装甲", en:"Shima Holy Knight Plume Armor", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga holy knight armor, plume pauldrons, wing crest, white steel + feather fusion"},
    {ja:"シマエナガ・聖歌隊ローブ", en:"Shima Sacred Choir White Robe", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga choir ceremonial robe, feather embroidery, cathedral elegance, pure white layers"},
    {ja:"シマエナガ・浮遊アークヘイロー", en:"Shima Floating Arc Halo Dress", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga dress with floating arc halo ornaments, luminous feathers orbiting, divine atmosphere"},
    {ja:"シマエナガ・雪皇后神話", en:"Shima Mythic Snow Empress Form", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga mythic snow empress, heavy feather mantle, ice crystal crown, regal winter form"},
    {ja:"シマエナガ・光の聖堂ドレス", en:"Shima Radiant Light Cathedral Gown", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga cathedral gown, stained-glass light motifs, feather veil layers, ritual luxury"},
    {ja:"シマエナガ・星海ローブ", en:"Shima Star Ocean Plume Robe", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga star-ocean robe, cosmic gradients, plume-lined cape, astral shimmer"},
    {ja:"シマエナガ・アーコン礼装", en:"Shima Archon Attire", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga archon regalia, emblematic feathers, sovereign aura, high ritual form"},
    {ja:"シマエナガ・神権プルーム", en:"Shima Divine Sovereign Plume", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga divine sovereign regalia, crown-like plume halo, gilded feather ornaments, supreme ceremonial dress"},
    {ja:"シマエナガ・無限白翼", en:"Shima Infinite White Wing Form", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga infinite white wing form, massive ethereal wings, pure light feathers, transcendent aura"},
    {ja:"シマエナガ・超越レガリア", en:"Shima Transcendence Feather Regalia", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga transcendence regalia, layered feather architecture, luminous gradients, mythic elegance"},
    {ja:"シマエナガ・天冠", en:"Shima Celestial Crown Shima", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga celestial crown attire, crown and halo fusion, crystal feather tiara, radiant"},
    {ja:"シマエナガ・終光アバター", en:"Shima Final Light Avatar", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga final light avatar, light-body silhouette, feather particles, divine manifestation"},
    {ja:"シマエナガ・聖断マント", en:"Shima Sacred Judgment Mantle", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga mantle of judgment, wing sigils, sharp feather edges, holy authority"},
    {ja:"シマエナガ・永劫エーテル", en:"Shima Ethereal Eternity Dress", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga eternity dress, endless flowing feather layers, soft glow, timeless serenity"},
    {ja:"シマエナガ・極寒女王", en:"Shima Ultimate Frost Queen Form", group:"season", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga ultimate frost queen, ice-feather armor, blizzard aura, regal dominance"},
    {ja:"シマエナガ・黎明女帝", en:"Shima Luminous Dawn Empress", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga dawn empress, sunrise gradients, feather crown, imperial regalia"},
    {ja:"シマエナガ・至高戴冠", en:"Shima Supreme Halo Coronation", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga coronation attire, supreme halo rings, floating feathers, ceremonial grandeur"},
    {ja:"シマエナガ・星図の書記", en:"Shima Astral Archive Keeper", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga archive keeper outfit, astral script motifs, feather cape, scholarly divine vibe"},
    {ja:"シマエナガ・白宇宙の化身", en:"Shima White Cosmos Incarnation", group:"role", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga cosmos incarnation, white cosmic textures, nebula feathers, abstract divinity"},
    {ja:"シマエナガ・神光プライム", en:"Shima Godlight Feather Prime", group:"dress", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga godlight prime, concentrated luminous feathers, prismatic highlights, ultimate form"},
    {ja:"シマエナガ・オーロラ玉座", en:"Shima Aurora Throne Regalia", group:"season", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga aurora regalia, aurora ribbon feathers, throne-worthy mantle, polar light"},
    {ja:"シマエナガ・原初フォーム", en:"Shima Origin Form", group:"force", tag: SHIMA_BRAND_CORE + ", " + "Shima-enaga origin form, pure simplified feather symbolism, primal white/black balance, iconic silhouette"},

    // Spicy Special Glam +30
    {ja:"攻めスペシャル・サテン深スリット", en:"Spicy Special Satin Deep Slit", spicyGroup:"glam_dress", group:"spicy", label:"SPICY", tag: "satin gown, deep slit, glossy drape, elegant glam, refined silhouette"},
    {ja:"攻めスペシャル・ベルベット夜会", en:"Spicy Special Velvet Gala", spicyGroup:"glam_dress", group:"spicy", label:"SPICY", tag: "velvet evening dress, soft sheen, luxe texture, cinematic night glam"},
    {ja:"攻めスペシャル・クリスタル縁ビスチェ", en:"Spicy Special Crystal Bustier", spicyGroup:"glam_dress", group:"spicy", label:"SPICY", tag: "crystal-trim bustier, structured fit, jewel accents, high-fashion glam"},
    {ja:"攻めスペシャル・シルクホルター艶", en:"Spicy Special Silk Halter", spicyGroup:"glam_dress", group:"spicy", label:"SPICY", tag: "silk halter dress, smooth fabric flow, flattering neckline, elegant shine"},
    {ja:"攻めスペシャル・レースマーメイド", en:"Spicy Special Lace Mermaid", spicyGroup:"glam_dress", group:"spicy", label:"SPICY", tag: "lace mermaid dress, intricate lace, bodyline elegance, mature glam"},
    {ja:"攻めスペシャル・片肩グラム", en:"Spicy Special One-Shoulder", spicyGroup:"mode_bodycon", group:"spicy", label:"SPICY", tag: "one-shoulder cocktail dress, asymmetric cut, sleek glam, modern silhouette"},
    {ja:"攻めスペシャル・オペラグローブ礼装", en:"Spicy Special Opera Gloves", spicyGroup:"glam_dress", group:"spicy", label:"SPICY", tag: "opera gloves, gala styling, satin shine, classic luxury mood"},
    {ja:"攻めスペシャル・背中リボン背面魅せ", en:"Spicy Special Backless Ribbon", spicyGroup:"glam_dress", group:"spicy", label:"SPICY", tag: "backless dress, ribbon back detail, elegant exposure, tasteful allure"},
    {ja:"攻めスペシャル・真珠チェーン背中飾り", en:"Spicy Special Pearl Chain", spicyGroup:"glam_dress", group:"spicy", label:"SPICY", tag: "pearl chain back accessory, luxe sparkle, refined detailing"},
    {ja:"攻めスペシャル・透けレイヤー正装", en:"Spicy Special Sheer Overlay", spicyGroup:"glam_dress", group:"spicy", label:"SPICY", tag: "sheer overlay layers, subtle translucency, light-catching fabric, elegant glam"},
    {ja:"攻めスペシャル・ネオン艶ボディコン", en:"Spicy Special Neon Bodycon", spicyGroup:"mode_bodycon", group:"spicy", label:"SPICY", tag: "neon shimmer bodycon, nightclub glow, sleek fit, city night vibe"},
    {ja:"攻めスペシャル・ルーフトップ風スリット", en:"Spicy Special Rooftop Slit", spicyGroup:"glam_dress", group:"spicy", label:"SPICY", tag: "wind-slit skirt, rooftop night, dynamic hem, dramatic silhouette"},
    {ja:"攻めスペシャル・反射素材シティナイト", en:"Spicy Special Reflective Night", spicyGroup:"mode_bodycon", group:"spicy", label:"SPICY", tag: "reflective fabric accents, city lights, glossy highlights, modern glam"},
    {ja:"攻めスペシャル・月光シースルーカーデ", en:"Spicy Special Moonlit Cardigan", spicyGroup:"outer_gloss", group:"spicy", label:"SPICY", tag: "moonlit sheer cardigan, soft translucency, gentle drape, night elegance"},
    {ja:"攻めスペシャル・スポットライト礼装スーツ", en:"Spicy Special Spotlight Suit", spicyGroup:"suit_formal", group:"spicy", label:"SPICY", tag: "spotlight glam suit, tailored lines, stage-ready shine, confident presence"},
    {ja:"攻めスペシャル・ホログラムミニドレス", en:"Spicy Special Holo Mini", spicyGroup:"glam_dress", group:"spicy", label:"SPICY", tag: "holographic mini dress, prism sheen, edgy glam, club fashion"},
    {ja:"攻めスペシャル・雨夜グロスレザー", en:"Spicy Special Rain Gloss", spicyGroup:"glam_dress", group:"spicy", label:"SPICY", tag: "gloss leather look, rainy night reflections, sharp highlights, urban edge"},
    {ja:"攻めスペシャル・夜景ベルベットジャケット", en:"Spicy Special Velvet Jacket", spicyGroup:"suit_formal", group:"spicy", label:"SPICY", tag: "velvet jacket styling, skyline night, luxe texture, chic layering"},
    {ja:"攻めスペシャル・プリズムクラブドレス", en:"Spicy Special Prism Club", spicyGroup:"glam_dress", group:"spicy", label:"SPICY", tag: "prism shimmer club dress, luminous gradients, vivid nightlife glow"},
    {ja:"攻めスペシャル・シルエットロングコート艶", en:"Spicy Special Long Coat", spicyGroup:"outer_gloss", group:"spicy", label:"SPICY", tag: "sleek long coat dress, slit detail, silhouette emphasis, night chic"},
    {ja:"攻めスペシャル・ゴシックレース深V", en:"Spicy Special Gothic Lace", spicyGroup:"leather_goth", group:"spicy", label:"SPICY", tag: "gothic lace deep v, dark elegance, lace detail, dramatic glam"},
    {ja:"攻めスペシャル・ブラックサテンコルセット", en:"Spicy Special Satin Corset", spicyGroup:"leather_goth", group:"spicy", label:"SPICY", tag: "black satin corset set, structured waist, luxurious sheen, bold glam"},
    {ja:"攻めスペシャル・黒薔薇シマー", en:"Spicy Special Black Rose", spicyGroup:"leather_goth", group:"spicy", label:"SPICY", tag: "black rose accents, shimmer fabric, dark romantic glam"},
    {ja:"攻めスペシャル・影スリットレイヤード", en:"Spicy Special Shadow Slit", spicyGroup:"glam_dress", group:"spicy", label:"SPICY", tag: "layered dress, shadow slit, subtle exposure, cinematic contrast"},
    {ja:"攻めスペシャル・紅差しダークグラム", en:"Spicy Special Crimson Accent", spicyGroup:"leather_goth", group:"spicy", label:"SPICY", tag: "crimson accent details, dark glam palette, striking contrast"},
    {ja:"攻めスペシャル・構築モード輪郭セット", en:"Spicy Special Structured Mode", spicyGroup:"mode_bodycon", group:"spicy", label:"SPICY", tag: "structured high-fashion set, contour lines, modern cut, runway vibe"},
    {ja:"攻めスペシャル・彫刻肩モードトップ", en:"Spicy Special Sculpted Shoulder", spicyGroup:"mode_bodycon", group:"spicy", label:"SPICY", tag: "sculpted shoulder top, sharp silhouette, fashion-forward glam"},
    {ja:"攻めスペシャル・ハイウエスト光沢パンツ", en:"Spicy Special Gloss Trousers", spicyGroup:"mode_bodycon", group:"spicy", label:"SPICY", tag: "high-waist gloss trousers, sleek tailoring, reflective finish, chic"},
    {ja:"攻めスペシャル・ミニマルシルクスーツ", en:"Spicy Special Minimal Silk", spicyGroup:"suit_formal", group:"spicy", label:"SPICY", tag: "minimal silk suit, clean lines, subtle shine, refined presence"},
    {ja:"攻めスペシャル・スリットコートドレス", en:"Spicy Special Coat Dress", spicyGroup:"outer_gloss", group:"spicy", label:"SPICY", tag: "coat dress with slit, modern minimal glam, elegant cut"},
  
  { ja:"攻めスペシャル・ダークベルベットスリップ", en:"Spicy Special Dark Velvet Slip", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "black velvet slip dress, subtle sheen, lace trim, night glamour" },
  { ja:"攻めスペシャル・漆黒レースボディスーツ", en:"Spicy Special Obsidian Lace Bodysuit", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "black lace bodysuit, sheer panels, elegant sensuality" },
  { ja:"攻めスペシャル・黒薔薇コルセット", en:"Spicy Special Black Rose Corset", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "corset with black rose embroidery, satin ribbons, hourglass silhouette" },
  { ja:"攻めスペシャル・スモークシフォンガウン", en:"Spicy Special Smoke Chiffon Gown", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "smoky chiffon gown, translucent layers, floating hem, moody lighting" },
  { ja:"攻めスペシャル・ダークサテンローブ", en:"Spicy Special Dark Satin Robe", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "dark satin robe, glossy drape, deep neckline, luxe loungewear" },
  { ja:"攻めスペシャル・影羽ケープドレス", en:"Spicy Special Shadow Feather Cape Dress", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "cape dress, feather-like gradient cape, dramatic silhouette, noir glamour" },
  { ja:"攻めスペシャル・月影シアードレス", en:"Spicy Special Moonshadow Sheer Dress", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "sheer dress, layered mesh, moonlit shimmer, elegant conceal-reveal" },
  { ja:"攻めスペシャル・黒曜スリットドレス", en:"Spicy Special Obsidian Slit Dress", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "high slit dress, obsidian shine, sleek lines, confident stance" },
  { ja:"攻めスペシャル・ダークグロススカートスーツ", en:"Spicy Special Dark Gloss Skirt Suit", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "glossy skirt suit, sharp shoulders, noir chic, subtle sparkle" },
  { ja:"攻めスペシャル・黒金ハーネスドレス", en:"Spicy Special Black-Gold Harness Dress", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "black and gold harness accents, elegant dress, refined edgy" },
  { ja:"攻めスペシャル・夜霧ネグリジェ", en:"Spicy Special Nightmist Negligee", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "negligee, soft lace, misty translucence, romantic noir" },
  { ja:"攻めスペシャル・黒真珠チョーカードレス", en:"Spicy Special Black Pearl Choker Dress", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "dress with black pearl choker collar, glossy fabric, elegant" },
  { ja:"攻めスペシャル・ダークレザータイトワンピ", en:"Spicy Special Dark Leather Bodycon", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "dark leather bodycon dress, matte+gloss contrast, sleek" },
  { ja:"攻めスペシャル・影織りロンググローブ", en:"Spicy Special Shadow-Weave Long Gloves", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "opera gloves, sheer pattern, shadow motif, classy allure" },
  { ja:"攻めスペシャル・暗紅シルクチャイナ", en:"Spicy Special Deep Crimson Silk Cheongsam", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "deep crimson silk cheongsam, black lace edging, sultry elegance" },
  { ja:"攻めスペシャル・漆黒ベールヘッドピース", en:"Spicy Special Obsidian Veil Headpiece", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "black veil headpiece, subtle sparkle, gothic chic" },
  { ja:"攻めスペシャル・ダークスパンコールミニ", en:"Spicy Special Dark Sequin Mini", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "dark sequin mini dress, shimmer, stage-ready glamour" },
  { ja:"攻めスペシャル・黒影オフショルドレス", en:"Spicy Special Noir Off-Shoulder Dress", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "off-shoulder dress, soft drape, noir elegance, collarbone highlight" },
  { ja:"攻めスペシャル・夜光タトゥーストッキング", en:"Spicy Special Nightglow Tattoo Stockings", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "patterned stockings, tattoo-like motifs, faint glow, stylish" },
  { ja:"攻めスペシャル・黒煙フードマント", en:"Spicy Special Black Smoke Hooded Mantle", group:"spicy", label:"SPICY", spicyGroup:"dark_glam", tag: "hooded mantle, smoky gradient, cinematic silhouette, mysterious" },
  { ja:"攻めスペシャル・高級ビキニ雪結晶", en:"Spicy Special Luxury Bikini Snowflake", group:"spicy", label:"SPICY", spicyGroup:"luxury_swim", tag: "luxury bikini, ice-blue, snowflake charm, glossy fabric" },
  { ja:"攻めスペシャル・高級ワンピース水着シルク", en:"Spicy Special Luxury One-piece Silk Swim", group:"spicy", label:"SPICY", spicyGroup:"luxury_swim", tag: "one-piece swimsuit, silk-like sheen, minimal cut, premium" },
  { ja:"攻めスペシャル・高級ラッシュガード艶", en:"Spicy Special Glossy Rash Guard", group:"spicy", label:"SPICY", spicyGroup:"luxury_swim", tag: "glossy rash guard, feather stripe lines, sleek sport glam" },
  { ja:"攻めスペシャル・高級ビキニ羽根ライン", en:"Spicy Special Feather-Line Luxury Bikini", group:"spicy", label:"SPICY", spicyGroup:"luxury_swim", tag: "bikini, feather line accents, refined, high-end resort" },
  { ja:"攻めスペシャル・高級モノキニ宝石", en:"Spicy Special Jewel Monokini", group:"spicy", label:"SPICY", spicyGroup:"luxury_swim", tag: "monokini with jewel connector, reflective, couture swim" },
  { ja:"攻めスペシャル・高級シアーパレオ", en:"Spicy Special Sheer Pareo", group:"spicy", label:"SPICY", spicyGroup:"luxury_swim", tag: "sheer pareo wrap, translucent shimmer, elegant beachwear" },
  { ja:"攻めスペシャル・高級ビーチガウン", en:"Spicy Special Luxury Beach Gown", group:"spicy", label:"SPICY", spicyGroup:"luxury_swim", tag: "beach gown, flowing chiffon, subtle glitter, premium resort" },
  { ja:"攻めスペシャル・高級ハイウエスト水着", en:"Spicy Special High-Waist Luxury Swim", group:"spicy", label:"SPICY", spicyGroup:"luxury_swim", tag: "high-waist bikini, sculpted lines, satin gloss, classy" },
  { ja:"攻めスペシャル・高級水着ボンデージライン", en:"Spicy Special Couture Strapline Swim", group:"spicy", label:"SPICY", spicyGroup:"luxury_swim", tag: "couture swimwear, strapline detailing, tasteful edgy" },
  { ja:"攻めスペシャル・高級スイムキャップ羽チャーム", en:"Spicy Special Swim Cap Feather Charm", group:"spicy", label:"SPICY", spicyGroup:"luxury_swim", tag: "swim cap, feather charm, polished sporty luxury" },
  { ja:"攻めスペシャル・ハイブランドボディコン", en:"Spicy Special High-Brand Bodycon", group:"spicy", label:"SPICY", spicyGroup:"highbrand_mode", tag: "designer bodycon, clean cut, premium fabric, runway vibe" },
  { ja:"攻めスペシャル・ハイブランドシルクブラウス", en:"Spicy Special Designer Silk Blouse", group:"spicy", label:"SPICY", spicyGroup:"highbrand_mode", tag: "silk blouse, subtle sheen, tailored cuffs, luxury" },
  { ja:"攻めスペシャル・ハイブランドペンシルスカート", en:"Spicy Special Designer Pencil Skirt", group:"spicy", label:"SPICY", spicyGroup:"highbrand_mode", tag: "pencil skirt, precise tailoring, high-end minimal" },
  { ja:"攻めスペシャル・ハイブランドトレンチ艶", en:"Spicy Special Designer Gloss Trench", group:"spicy", label:"SPICY", spicyGroup:"highbrand_mode", tag: "gloss trench coat, belt cinch, modern luxury" },
  { ja:"攻めスペシャル・ハイブランドカットアウトドレス", en:"Spicy Special Designer Cutout Dress", group:"spicy", label:"SPICY", spicyGroup:"highbrand_mode", tag: "cutout dress, tasteful geometry, couture minimal" },
  { ja:"攻めスペシャル・ハイブランドレザースカート", en:"Spicy Special Designer Leather Skirt", group:"spicy", label:"SPICY", spicyGroup:"highbrand_mode", tag: "leather skirt, matte-gloss mix, chic" },
  { ja:"攻めスペシャル・ハイブランドジャケットミニ", en:"Spicy Special Designer Jacket Mini", group:"spicy", label:"SPICY", spicyGroup:"highbrand_mode", tag: "cropped jacket, mini dress layering, runway styling" },
  { ja:"攻めスペシャル・ハイブランドストラップヒール", en:"Spicy Special Designer Strap Heels", group:"spicy", label:"SPICY", spicyGroup:"highbrand_mode", tag: "strap heels, metallic accent, high fashion" },
  { ja:"攻めスペシャル・ハイブランドシアートップス", en:"Spicy Special Designer Sheer Top", group:"spicy", label:"SPICY", spicyGroup:"highbrand_mode", tag: "sheer top, fine mesh, luxury layering, elegant" },
  { ja:"攻めスペシャル・ハイブランドグローブバッグ", en:"Spicy Special Designer Glove & Bag", group:"spicy", label:"SPICY", spicyGroup:"highbrand_mode", tag: "long gloves and mini bag, logo-less luxury, refined" },
  { ja:"攻めスペシャル・異世界艶サイバー魔装", en:"Spicy Special Cyber Arcane Glam Armor", group:"spicy", label:"SPICY", spicyGroup:"isekai_glam", tag: "cyber arcane armor, glowing runes, sleek plating, sensual silhouette" },
  { ja:"攻めスペシャル・異世界艶ナノスーツ", en:"Spicy Special Futuristic Nano Suit", group:"spicy", label:"SPICY", spicyGroup:"isekai_glam", tag: "futuristic nano suit, reflective, body-hugging, luminous seams" },
  { ja:"攻めスペシャル・異世界艶魔導スーツ", en:"Spicy Special Arcane Suit", group:"spicy", label:"SPICY", spicyGroup:"isekai_glam", tag: "arcane suit, magic circuits, glossy fabric, mystic tech" },
  { ja:"攻めスペシャル・異世界艶星屑マント", en:"Spicy Special Stardust Cape", group:"spicy", label:"SPICY", spicyGroup:"isekai_glam", tag: "stardust cape, floating particles, dramatic, otherworldly" },
  { ja:"攻めスペシャル・異世界艶ホログラムドレス", en:"Spicy Special Hologram Dress", group:"spicy", label:"SPICY", spicyGroup:"isekai_glam", tag: "hologram dress, shifting iridescence, sci-fi couture" },
  { ja:"攻めスペシャル・異世界艶魔装ボディスーツ", en:"Spicy Special Enchanted Bodysuit", group:"spicy", label:"SPICY", spicyGroup:"isekai_glam", tag: "enchanted bodysuit, rune patterns, sleek armor joints" },
  { ja:"攻めスペシャル・異世界艶ウィングユニット", en:"Spicy Special Wing Unit Harness", group:"spicy", label:"SPICY", spicyGroup:"isekai_glam", tag: "back-mounted wing unit, slim harness, energy feathers" },
  { ja:"攻めスペシャル・異世界艶プラズマコート", en:"Spicy Special Plasma Coat", group:"spicy", label:"SPICY", spicyGroup:"isekai_glam", tag: "plasma-lined coat, glowing edges, futuristic glam" },
  { ja:"攻めスペシャル・異世界艶光剣ホルスター", en:"Spicy Special Lightblade Holster", group:"spicy", label:"SPICY", spicyGroup:"isekai_glam", tag: "lightblade holster accessory, sleek belts, sci-fi fantasy" },
  { ja:"攻めスペシャル・異世界艶魔晶アクセ", en:"Spicy Special Magic Crystal Accessories", group:"spicy", label:"SPICY", spicyGroup:"isekai_glam", tag: "magic crystals, floating shards, elegant sparkle" },
  { ja:"攻めスペシャル・異世界艶戦術ドレスアーマー", en:"Spicy Special Tactical Dress Armor", group:"spicy", label:"SPICY", spicyGroup:"isekai_glam", tag: "dress armor hybrid, armored bodice, flowing skirt panels" },
  { ja:"攻めスペシャル・異世界艶月光ヘルム", en:"Spicy Special Moonlight Helm", group:"spicy", label:"SPICY", spicyGroup:"isekai_glam", tag: "moonlight helm, open-face, elegant, luminous" },
  { ja:"ナイトクラブ艶・ネオン透過ドレス", en:"Nightclub Glam Neon Sheer Dress", tag: "nightclub neon sheer dress, translucent panels, neon edge piping, glow trim, sleek nightlife silhouette", group:"spicy", label:"SPICY", spicyGroup:"nightclub_glam" },
  { ja:"ナイトクラブ艶・メタリックボディスーツ", en:"Nightclub Glam Metallic Bodysuit", tag: "metallic glossy bodysuit, reflective chrome fabric, club lighting shine, sculpted silhouette", group:"spicy", label:"SPICY", spicyGroup:"nightclub_glam" },
  { ja:"ナイトクラブ艶・リキッドラメスリットドレス", en:"Nightclub Glam Liquid Glitter Slit Dress", tag: "liquid glitter dress, wet-look shimmer, high slit, glossy highlights, nightclub vibe", group:"spicy", label:"SPICY", spicyGroup:"nightclub_glam" },
  { ja:"ナイトクラブ艶・レーザーカットジャケット", en:"Nightclub Glam Laser-Cut Jacket", tag: "laser-cut short jacket, geometric cutouts, neon underglow, nightlife styling", group:"spicy", label:"SPICY", spicyGroup:"nightclub_glam" },
  { ja:"ナイトクラブ艶・ネオンハーネスセット", en:"Nightclub Glam Neon Harness Set", tag: "neon harness accessories over sleek outfit, minimal straps, luminous accents, clubwear", group:"spicy", label:"SPICY", spicyGroup:"nightclub_glam" },,
  { ja:"和艶・高級・黒振袖スリット", en:"Waglam Luxury Black Furisode Slit", tag: "black furisode with daring slit, luxurious silk sheen, elegant drape", group:"spicy", label:"SPICY", spicyGroup:"wa_lux_glam" },
  { ja:"和艶・高級・金箔羽織", en:"Waglam Luxury Gold Leaf Haori", tag: "gold leaf haori, gilded patterns, opulent shimmer, refined layering", group:"spicy", label:"SPICY", spicyGroup:"wa_lux_glam" },
  { ja:"和艶・高級・漆塗り質感帯", en:"Waglam Luxury Lacquer Obi Texture", tag: "lacquered obi texture, glossy urushi finish, deep reflective shine", group:"spicy", label:"SPICY", spicyGroup:"wa_lux_glam" },
  { ja:"和艶・高級・金襴刺繍の襟元", en:"Waglam Luxury Kinran Embroidered Collar", tag: "kinran brocade embroidery, gold thread collar, premium detail", group:"spicy", label:"SPICY", spicyGroup:"wa_lux_glam" },
  { ja:"和艶・高級・簪と艶髪", en:"Waglam Luxury Kanzashi & Gloss Hair", tag: "kanzashi hairpin, glossy black hair, elegant shine, high-end finish", group:"spicy", label:"SPICY", spicyGroup:"wa_lux_glam" },

  { ja:"未来ランウェイ艶・ホログラム布コート", en:"Future Runway Glam Hologram Coat", tag: "holographic fabric long coat, shifting iridescence, runway silhouette, premium sheen", group:"spicy", label:"SPICY", spicyGroup:"futuristic_runway_glam" },
  { ja:"未来ランウェイ艶・半透明ハイブランドスーツ", en:"Future Runway Glam Translucent Luxury Suit", tag: "semi-transparent luxury suit, layered sheer panels, high-fashion cut, glossy finish", group:"spicy", label:"SPICY", spicyGroup:"futuristic_runway_glam" },
  { ja:"未来ランウェイ艶・光沢アシンメトリードレス", en:"Future Runway Glam Glossy Asymmetric Dress", tag: "glossy asymmetric dress, sharp couture lines, reflective highlights, runway drama", group:"spicy", label:"SPICY", spicyGroup:"futuristic_runway_glam" },
  { ja:"未来ランウェイ艶・LEDステッチドレス", en:"Future Runway Glam LED Stitch Dress", tag: "LED stitch accents, luminous seams, minimalist couture, futuristic runway styling", group:"spicy", label:"SPICY", spicyGroup:"futuristic_runway_glam" },
  { ja:"未来ランウェイ艶・クリア素材ヒールブーツ", en:"Future Runway Glam Clear Heel Boots", tag: "clear material high-heel boots, transparent gloss, designer runway accessory", group:"spicy", label:"SPICY", spicyGroup:"futuristic_runway_glam" },
  { ja:"冷艶・氷結スリットドレス", en:"Cold Glam Frozen Slit Dress", tag: "ice-themed slit dress, frosted gloss, cold shimmer, crystalline highlights", group:"spicy", label:"SPICY", spicyGroup:"cold_glam" },
  { ja:"冷艶・結晶ビキニ", en:"Cold Glam Crystal Bikini", tag: "crystal bikini, snowflake facets, icy shine, sparkling frost accents", group:"spicy", label:"SPICY", spicyGroup:"cold_glam" },
  { ja:"冷艶・冷光スーツ", en:"Cold Glam Cold-Light Suit", tag: "cold light suit, pale luminous trim, sleek glossy fabric, winter glow", group:"spicy", label:"SPICY", spicyGroup:"cold_glam" },
  { ja:"冷艶・霜羽ケープ", en:"Cold Glam Frost Feather Cape", tag: "frost feather cape, translucent feather layers, icy sheen, winter glamour", group:"spicy", label:"SPICY", spicyGroup:"cold_glam" },
  { ja:"冷艶・氷霧ボディコン", en:"Cold Glam Ice-Mist Bodycon", tag: "bodycon dress with ice-mist gradient, glossy finish, chilled aura, sleek silhouette", group:"spicy", label:"SPICY", spicyGroup:"cold_glam" },
];

  function escapeHTML(str){
    return String(str||"")
      .replace(/&/g,"&amp;")
      .replace(/</g,"&lt;")
      .replace(/>/g,"&gt;")
      .replace(/"/g,"&quot;")
      .replace(/'/g,"&#39;");
  }

  // Card builder (shared by grouped / flat sections)
  function makeCard(s, idPrefix, index){
    const card = document.createElement("label");
    card.className = "shima-card";
    const id = `${idPrefix}_${index}`;
    const badge = (typeof badgeFor === "function") ? badgeFor(s) : { key: "sh", label: "SHIMA" };
    card.innerHTML = `
      <input id="${id}" type="checkbox" data-en="${escapeHTML(s.tag||"")}">
      <div class="shima-title"><span class="shima-feather">🪶</span>${escapeHTML(s.ja)}<span class="shima-badge shima-badge-${badge.key}">${badge.label}</span></div>
      <div class="shima-sub">${escapeHTML(s.en)}</div>
    `;
    return card;
  }

  function isSpicy(s){
  const grp = String(s && s.group || "");
  const sGrp = String(s && s.spicyGroup || "");
  if (grp === "spicy") return true;
  if (s && s.spicyTag) return true;
  // spicyGroup が付いているものは「攻め」確定
  if (sGrp) return true;
  return false;
}

function badgeFor(s){
    const ja = (s.ja||"");
    const tag = (s.tag||"").toLowerCase();
    if (isSpicy(s)) {
      const sg = (s.spicyGroup||"");
      const map = {glam_dress:"GLAM", suit_formal:"SUIT", outer_gloss:"OUTER", leather_goth:"GOTH", mode_bodycon:"MODE"};
      const lbl = map[sg] || "SPICY";
      return {key:"spicy", label:lbl};
    }
    if (ja.includes("制服") || ja.includes("学園") || ja.includes("学生") || ja.includes("図書") || ja.includes("生徒会") || tag.includes("uniform")) return {key:"uniform", label:"SHIMA"};
    if (ja.includes("カジュアル") || ja.includes("ストリート") || ja.includes("ゆめかわ") || ja.includes("カフェ") || tag.includes("casual") || tag.includes("street")) return {key:"casual", label:"SHIMA"};
    if (ja.includes("フォース") || ja.includes("パイロット") || ja.includes("オペレーター") || tag.includes("force") || tag.includes("tactical") || tag.includes("pilot")) return {key:"force", label:"SHIMA"};
    if (ja.includes("レガリア") || ja.includes("聖夜") || ja.includes("プリンセス") || ja.includes("ドレス") || tag.includes("gown") || tag.includes("regalia") || tag.includes("princess")) return {key:"dress", label:"SHIMA"};
    return {key:"shima", label:"SHIMA"};
  }


  function ensureStyles(){
    if (document.getElementById("attire-v21-shima-style")) return;
    const st = document.createElement("style");
    st.id = "attire-v21-shima-style";
    st.textContent = `
      /* v51: make Shima wrapper stretch full width even inside flex containers */
      .attire-v21-mounted{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box;align-self:stretch!important;flex:1 1 auto!important;}
      .attire-v21-parent{align-items:stretch!important;}
      .attire-v21-shima details{border:1px solid #cfe3ef; background:rgba(255,255,255,0.78); border-radius:14px; overflow:hidden;}
      .attire-v21-shima summary{cursor:pointer; list-style:none; padding:10px 12px; font-weight:800; display:flex; align-items:center; gap:8px;
        background:linear-gradient(90deg, rgba(210,240,255,0.90), rgba(255,255,255,0.70)); color:#123;}
      .attire-v21-shima summary .shima-title-jp{flex:1; min-width:0; white-space:normal; word-break:normal; overflow-wrap:anywhere;}
      .attire-v21-shima summary .shima-count{margin-left:auto; white-space:nowrap;}
      .attire-v21-shima summary.spicy{background:linear-gradient(90deg, rgba(255,225,235,0.90), rgba(255,255,255,0.70));}
      .attire-v21-shima summary::-webkit-details-marker{display:none;}
@media (min-width: 740px){ .attire-v21-shima .shima-grid{grid-template-columns:1fr;} }
      @media (min-width: 980px){ .attire-v21-shima .shima-grid{grid-template-columns:repeat(3,minmax(0,1fr));} }
      .attire-v21-shima .shima-card{
        position:relative;
        display:grid;
        grid-template-columns:28px 1fr;
        grid-auto-rows:min-content;
        column-gap:10px;
        row-gap:6px;
        align-items:start;
        padding:12px;
        border:1px solid rgba(0,0,0,0.08);
        border-radius:12px;
        background:rgba(255,255,255,0.92);
        box-shadow:0 1px 2px rgba(0,0,0,0.04);
        overflow:hidden;
      }
      .attire-v21-shima .shima-card > input[type="checkbox"]{
        grid-column:1;
        grid-row:1 / span 2;
        align-self:start;
        justify-self:start;
        margin-top:4px;
        width:22px; height:22px;
      }

      .attire-v21-shima .shima-card:hover{box-shadow:0 4px 14px rgba(0,0,0,0.10);}
      .attire-v21-shima .shima-card input{ /* checkbox is laid out by grid; keep empty to override legacy */ }
      .attire-v21-shima .shima-title{margin-left:0; font-size:0.95em; font-weight:900; color:#122; line-height:1.10;
        white-space:normal; word-break:keep-all; overflow-wrap:anywhere;}
      .attire-v21-shima .shima-sub{margin-left:0; margin-top:4px; font-size:0.78em; color:#345; line-height:1.15;
        white-space:normal; overflow-wrap:anywhere; word-break:break-word;}
      .attire-v21-shima .shima-title{grid-column:2; grid-row:1;}
      .attire-v21-shima .shima-sub{grid-column:2; grid-row:2;}
      .attire-v21-shima .shima-feather{opacity:0.95; margin-right:6px;}
      .attire-v21-shima .shima-badge{display:inline-block; margin-left:8px; padding:2px 8px; border-radius:999px; font-size:0.70em;
        font-weight:900; letter-spacing:0.02em; vertical-align:middle; border:1px solid rgba(0,0,0,0.08); background:rgba(220,240,255,0.85); color:#124;white-space:nowrap;}
      .attire-v21-shima .shima-badge-uniform{background:rgba(225,255,235,0.90); color:#124;}
      .attire-v21-shima .shima-badge-casual{background:rgba(240,235,255,0.90); color:#124;}
      .attire-v21-shima .shima-badge-force{background:rgba(230,245,255,0.90); color:#124;}
      .attire-v21-shima .shima-badge-dress{background:rgba(235,250,255,0.90); color:#124;}
      .attire-v21-shima .shima-badge-spicy{background:rgba(255,230,240,0.92); color:#400;}
    
@media (max-width: 560px){
.attire-v21-shima .shima-title-en{display:none !important;}
}

/* Shima grouped subsections */
.attire-subsection{margin:10px 0;border:1px solid rgba(0,0,0,.08);border-radius:12px;overflow:hidden;background:#fff;}
.attire-subsummary{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;cursor:pointer;user-select:none;font-weight:700;background:rgba(0,0,0,.03);}
.attire-subsummary::-webkit-details-marker{display:none;}
.attire-subtitle{font-size:14px;line-height:1.2;}
.attire-subcount{min-width:2.2em;text-align:center;font-weight:800;padding:2px 8px;border-radius:999px;background:rgba(0,0,0,.06);}

.attire-v21-shima .attire-subsummary{ min-width:0; }
.attire-v21-shima .attire-subtitle{
  flex:1; min-width:0;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
@media (max-width:560px){
  .attire-v21-shima .attire-subtitle{ white-space:normal; overflow:visible; text-overflow:clip; }
}


/* v44 mobile readability: hide EN to avoid vertical wrap; stretch shima cards full width */
.attire-v21-shima .shima-grid{width:100%;justify-items:stretch}
.attire-v21-shima .shima-card{width:100%;max-width:none;justify-self:stretch;box-sizing:border-box}
@media (max-width:520px){
  .attire-v21-shima .shima-sub{display:none !important}
}


/* v53: force Shima root to span full row in parent grids */
.attire-v21-parent > .attire-v21-shima{grid-column:1/-1!important;width:100%!important;max-width:100%!important;justify-self:stretch!important;align-self:stretch!important;}
/* v45: force Shima panels to full width (fix left-aligned/narrow column on mobile) */
.attire-v21-shima .shima-grouped-body{width:100%!important;box-sizing:border-box;padding-left:0;padding-right:0;}
.attire-v21-shima .shima-panels{display:flex!important;flex-direction:column!important;align-items:stretch!important;width:100%!important;box-sizing:border-box;margin:0;}
.attire-v21-shima .shima-panels > details{width:100%!important;display:block!important;}
.attire-v21-shima .shima-grouped{width:100%!important;max-width:100%!important;display:block!important;box-sizing:border-box;grid-column:1/-1;justify-self:stretch;align-self:stretch;flex-basis:100%;}
.attire-v21-shima .shima-grouped > summary{width:100%!important;display:block!important;box-sizing:border-box;}
.attire-v21-shima details{width:100%!important;box-sizing:border-box;}
/* v50: even stronger full-width enforcement (covers nested details + summary) */
.attire-v21-shima details.shima-grouped{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box;}
.attire-v21-shima details.shima-grouped > summary{display:flex!important;width:100%!important;box-sizing:border-box;}
.attire-v21-shima details.shima-grouped .shima-grouped-body{width:100%!important;max-width:100%!important;box-sizing:border-box;}
.attire-v21-shima details.shima-grouped .shima-panels{width:100%!important;max-width:100%!important;box-sizing:border-box;}
.attire-v21-shima details.shima-grouped .shima-panels > details{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box;}
.attire-v21-shima details.shima-grouped .shima-panels > details > summary{width:100%!important;box-sizing:border-box;}

.attire-v21-shima summary{width:100%!important;box-sizing:border-box;}
.attire-v21-shima .shima-grid{display:grid!important;width:100%!important;justify-items:stretch;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;}
@media (max-width:520px){.attire-v21-shima .shima-grid{grid-template-columns:1fr !important;}}
@media (min-width:980px){.attire-v21-shima .shima-grid{grid-template-columns:repeat(3,minmax(0,1fr));}}


      /* v63: FORCE single-column for Shima grouped body + panels */
      .attire-v21-shima .shima-grouped-body{display:block!important;grid-template-columns:1fr!important;grid-auto-flow:row!important;}
      .attire-v21-shima .shima-panels{display:block!important;width:100%!important;max-width:none!important;}

      /* v58: FORCE single-column for Shima panels + kill any fixed-width rows inside accordion content */
      .attire-v21-shima .shima-panels{display:block!important;flex-direction:column!important;align-items:stretch!important;}
      .attire-v21-shima .shima-panels>*{width:100%!important;max-width:none!important;flex:0 0 auto!important;}
      .attire-v21-shima details.accordion-wrap,
      .attire-v21-shima details.accordion-wrap > .section-content,
      .attire-v21-shima details.accordion-wrap .section-content,
      .attire-v21-shima details.accordion-wrap .box,
      .attire-v21-shima details.accordion-wrap .box > *,
      .attire-v21-shima details.accordion-wrap .items,
      .attire-v21-shima details.accordion-wrap .item,
      .attire-v21-shima details.accordion-wrap .opt,
      .attire-v21-shima details.accordion-wrap .opt-row,
      .attire-v21-shima details.accordion-wrap label{
        width:100%!important;
        max-width:none!important;
        box-sizing:border-box!important;
      }
      .attire-v21-shima details.accordion-wrap .opt-row,
      .attire-v21-shima details.accordion-wrap .item{
        display:flex!important;
      }
      .attire-v21-shima details.accordion-wrap .opt-row>*,
      .attire-v21-shima details.accordion-wrap .item>*{
        min-width:0!important;
      }

      /* If there is a second empty panel, collapse it */
      .attire-v21-shima .shima-panels > :nth-child(2):empty{display:none!important;}
      .attire-v21-shima .shima-panels > :nth-child(2):not(:empty){width:100%!important;max-width:none!important;}

`;
    document.head.appendChild(st);
    // Also inject into shadow roots (mobile/encapsulated UI)
    try{
      document.querySelectorAll('.attire-v21-shima').forEach((host)=>{
        if(host && host.shadowRoot){
          if(!host.shadowRoot.querySelector('#attire-v21-shima-style')){
            const clone = st.cloneNode(true);
            host.shadowRoot.appendChild(clone);
          }
        }
      });
    }catch(e){}

  }

  
  // Hood state UI (worn/down/auto)
  let __shimaHoodMode = "down"; // default
  const __HOOD_WORN = "hood worn over head, bird-like hood clearly visible";
  const __HOOD_DOWN = "hood resting on back, not worn, back-attached hood visible";

const API = {
    initUI(parent){
      // Robust mount: some core call sites may invoke initUI with no args.
      if(!parent){
        parent = document.getElementById("section-attire") || document.getElementById("list-attire") || document.body;
      }
      ensureStyles();
      const listRoot = (document.getElementById("list-attire") || parent);
      const details = (listRoot && listRoot.querySelector) ? listRoot.querySelector("details.accordion-wrap") : null;
      const accordionBody = details ? (details.querySelector(".accordion-body") || details.querySelector(".accordion-content") || details) : null;
      const contentArea = accordionBody || ((parent && parent.querySelector) ? (parent.querySelector(".section-content") || parent) : (document.getElementById("list-attire") || document.body));
      try{ if(contentArea && contentArea.classList) contentArea.classList.add('attire-v21-parent'); }catch(e){}

      // avoid double mount
      if (contentArea.querySelector(".attire-v21-shima")) return;

      const wrap = document.createElement("div");
      wrap.className = "attire-v21-shima";

      const specialLabel = document.createElement("div");
      specialLabel.className = "attire-special-group-label";
      specialLabel.textContent = "🧩 特化コレクション";
      specialLabel.style.cssText = "margin:6px 0 10px; padding:0 2px; color:#9b7280; font-size:0.78em; font-weight:700; letter-spacing:0.02em;";
      wrap.appendChild(specialLabel);

      // Hood state selector
      const hoodBox = document.createElement("div");
      hoodBox.className = "shima-hood-state";
      hoodBox.style.cssText = "display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin:10px 0 14px 0;padding:10px 12px;border:1px solid rgba(0,0,0,.12);border-radius:10px;background:rgba(255,255,255,.6);";
      const hoodTitle = document.createElement("div");
      hoodTitle.textContent = "🧥 フード状態";
      hoodTitle.style.cssText = "font-weight:800;margin-right:8px;";
      hoodBox.appendChild(hoodTitle);

      const makeRadio = (label, value) => {
        const lab = document.createElement("label");
        lab.style.cssText = "display:flex;gap:6px;align-items:center;cursor:pointer;user-select:none;";
        const r = document.createElement("input");
        r.type = "radio";
        r.name = "shima-hood-mode";
        r.value = value;
        r.checked = (__shimaHoodMode === value);
        r.addEventListener("change", () => { __shimaHoodMode = value; });
        const t = document.createElement("span");
        t.textContent = label;
        lab.appendChild(r);
        lab.appendChild(t);
        return lab;
      };

      hoodBox.appendChild(makeRadio("被る", "worn"));
      hoodBox.appendChild(makeRadio("下ろす（デフォルト）", "down"));
      hoodBox.appendChild(makeRadio("自動（記述しない）", "auto"));
      wrap.appendChild(hoodBox);

  // v53: make Shima root span full width even inside grid/flex parents
  try{wrap.style.cssText += ";width:100%!important;max-width:100%!important;box-sizing:border-box;grid-column:1/-1!important;justify-self:stretch!important;align-self:stretch!important;flex:1 1 100%!important;";}catch(e){}

      wrap.classList.add("attire-v21-mounted");
      // v51: force wrapper to full width even if parent aligns flex-start
      wrap.style.display='block';
      wrap.style.width='100%';
      wrap.style.maxWidth='100%';
      wrap.style.boxSizing='border-box';
      wrap.style.alignSelf='stretch';
      wrap.style.flex='1 1 auto';

      const isSpicy = (s)=>{
        const grp = String(s?.group || "");
        const sGrp = String(s?.spicyGroup || "");
        const ja = String(s?.ja||"");
        const en = String(s?.en||"");
        const tagRaw = String(s?.tag||"");
        const tag = tagRaw.toLowerCase();
        // Hard routing: explicit group/spicyGroup/tag forces "Spicy Special"
        if (grp === "spicy") return true;
        // Explicit non-spicy group blocks legacy heuristic routing
        if (grp && grp !== "spicy") return false;
        if (tag.includes("spicy") || tagRaw.toUpperCase() === "SPICY") return true;
        if (["nightclub_glam","wa_lux_glam","futuristic_runway_glam","cold_glam"].includes(sGrp)) return true;
        // Heuristic routing (legacy)
        return ja.includes("攻め") || ja.includes("グラビア") || en.toLowerCase().includes("bold") || en.toLowerCase().includes("gravure") || tag.includes("gravure") || tag.includes("lingerie") || tag.includes("bikini") || tag.includes("swimsuit") || tag.includes("night club");
      };

      const spicySets = SETS.filter(isSpicy);
      const shimaSets = SETS.filter(s=>!isSpicy(s));

      
function splitTitle(title){
  const s = String(title||"").trim();
  const m = s.match(/^(.*?)\s*\((.*?)\)\s*$/);
  if(!m) return {jp:s, en:""};
  return {jp:(m[1]||"").trim(), en:(m[2]||"").trim()};
}

function buildSection(opts){
        const details = document.createElement("details");
        details.open = !!opts.open;
  // v50: force full-width for each nested <details> accordion section
  details.style.display = "block";
  details.style.width = "100%";
  details.style.maxWidth = "100%";
  details.style.boxSizing = "border-box";


        // ▼ v47: force details to full width on mobile (prevents shrink-to-content)
        details.style.cssText = "display: block !important; width: 100% !important; margin-bottom: 8px;";

        const summary = document.createElement("summary");
        summary.className = opts.summaryClass || "";
        const t = splitTitle(opts.title);
        summary.innerHTML = `<span class="shima-feather">${opts.icon}</span> ` +
          `<span class="shima-title-jp">${escapeHTML(t.jp)}</span>` +
          ((!opts.hideEn && t.en) ? ` <span class="shima-title-en">(${escapeHTML(t.en)})</span>` : ``) +
          ` <span style="margin-left:auto; font-weight:800; color:#234; font-size:0.92em;">${opts.count}</span>`;
        details.appendChild(summary);

        const grid = document.createElement("div");
        grid.className = "shima-grid";

        opts.items.forEach((s, i) => {
          const card = document.createElement("label");
          card.className = "shima-card";
          const id = `${opts.idPrefix}_${i}`;
          const badge = badgeFor(s);

          card.innerHTML = `
            <input id="${id}" type="checkbox" data-en="${escapeHTML(s.tag||"")}">
            <div class="shima-title"><span class="shima-feather">🪶</span>${escapeHTML(s.ja)}<span class="shima-badge shima-badge-${badge.key}">${badge.label}</span></div>
            <div class="shima-sub">${escapeHTML(s.en)}</div>
          `;
          grid.appendChild(card);
        });

        details.appendChild(grid);
        return details;
      }

      // Build dynamic groups (auto-categorize all non-spicy Shima sets so UI count matches)
            const SHIMA_GROUP_BY_JA = {
        "シマエナガ・ゆめかわパーカー":"casual",
        "シマエナガ・アーバン羽根フーディ":"casual",
        "シマエナガ・カジュアル雪街":"casual",
        "シマエナガ・カフェ店員カジュアル":"casual",
        "シマエナガ・スポーツジャージ":"casual",
        "シマエナガ・ヘヴィフェザー":"casual",
        "シマエナガ・ライトフェザー":"casual",
        "シマエナガ・レインコート":"casual",
        "シマエナガ・春のライトジャケット":"casual",
        "シマエナガ・部屋着もふもふ":"casual",
        "シマエナガ・セーラー服氷彩":"school",
        "シマエナガ・体育着ブルマ風":"school",
        "シマエナガ・冬制服コート":"school",
        "シマエナガ・図書委員":"school",
        "シマエナガ・学園アイドル制服":"school",
        "シマエナガ・学園制服ブレザー":"school",
        "シマエナガ・生徒会正装":"school",
        "シマエナガフォース・オペレータースーツ":"force",
        "シマエナガフォース・スナイパーギリー":"force",
        "シマエナガフォース・セレモニードレスユニフォーム":"force",
        "シマエナガフォース・フロストパイロット":"force",
        "シマエナガフォース・メカニック":"force",
        "シマエナガフォース・医療班":"force",
        "シマエナガフォース・艦橋クルー":"force",
        "シマエナガ・バトルトリム":"force",
        "シマエナガ・フライトギア":"force",
        "シマエナガ・原初フォーム":"force",
        "シマエナガ・天使翼フォーム":"force",
        "シマエナガ・白炎フェニックス":"force",
        "シマエナガ・竜羽融合":"force",
        "シマエナガ・結晶進化":"force",
        "シマエナガ・聖騎士羽装甲":"force",
        "シマエナガ・アーコン礼装":"dress",
        "シマエナガ・ゴスロリ雪影":"dress",
        "シマエナガ・ストリートゆめかわ":"dress",
        "シマエナガ・ホワイトバレエ":"dress",
        "シマエナガ・光の聖堂ドレス":"dress",
        "シマエナガ・天冠":"dress",
        "シマエナガ・星海ローブ":"dress",
        "シマエナガ・星空の歌姫":"dress",
        "シマエナガ・氷晶プリンセス":"dress",
        "シマエナガ・永劫エーテル":"dress",
        "シマエナガ・浮遊アークヘイロー":"dress",
        "シマエナガ・無限白翼":"dress",
        "シマエナガ・神光プライム":"dress",
        "シマエナガ・神権プルーム":"dress",
        "シマエナガ・終光アバター":"dress",
        "シマエナガ・羽衣レガリア":"dress",
        "シマエナガ・聖夜のドレス":"dress",
        "シマエナガ・聖歌隊ローブ":"dress",
        "シマエナガ・至高戴冠":"dress",
        "シマエナガ・超越レガリア":"dress",
        "シマエナガ・雪皇后神話":"dress",
        "シマエナガ・黎明ローブ":"dress",
        "シマエナガ・黎明女帝":"dress",
        "シマエナガ・巫女融合":"east",
        "シマエナガ・祭り羽織":"east",
        "チャイナ・純白羽紋":"east",
        "チャイナ・黒銀雪影":"east",
        "中華・龍鳳羽冠":"east",
        "和洋折衷・羽織ドレス":"east",
        "東方・巫女装束雪祈":"east",
        "シマエナガ・サファイア羽根":"role",
        "シマエナガ・ホロフェザー":"role",
        "シマエナガ・ロイヤル白羽根":"role",
        "シマエナガ・夜咲きプルーム":"role",
        "シマエナガ・天体羽衣":"role",
        "シマエナガ・星図の書記":"role",
        "シマエナガ・星雲シマー":"role",
        "シマエナガ・白宇宙の化身":"role",
        "シマエナガ・聖断マント":"role",
        "シマエナガ・風霊マント":"role",
        "シマ天使・白羽の礼装":"role",
        "シマ巫女・雪神楽":"role",
        "シマ忍者・雪迷彩":"role",
        "シマ悪魔・黒羽の誘惑":"role",
        "シマ海賊・羽根帽子":"role",
        "シマ騎士・白羽の鎧":"role",
        "シマ魔導士・氷紋ローブ":"role",
        "シマエナガ・オーロラ玉座":"season",
        "シマエナガ・クリスマスサンタ":"season",
        "シマエナガ・ハロウィン梟魔女":"season",
        "シマエナガ・フロストウィング極":"season",
        "シマエナガ・新年晴れ着":"season",
        "シマエナガ・月護り":"season",
        "シマエナガ・極寒女王":"season",
        "シマエナガ・浴衣夏氷":"season",
        "シマエナガ・着物冬白":"season",
        "シマエナガ・節分鬼かわ":"season",
        "シマエナガ・花嫁純白":"season",
        "チャイナ・シマエナガステッカー密着":"sticker",
        "シマエナガ・ゆめかわステッカー密着":"sticker",
        "シマエナガ・ゴスロリステッカー密着":"sticker",
        "シマエナガ・カジュアルステッカー密着":"sticker",
        "シマエナガ・ドレスステッカー密着":"sticker",
        "シマエナガ・冬服ステッカー密着":"sticker",
        "シマエナガ・和装ステッカー密着":"sticker",
        "シマエナガ・制服ステッカー密着":"sticker",
        "シマエナガ・アイドルステッカー密着":"sticker",
        "シマエナガ・ストリートステッカー密着":"sticker",
        "シマエナガ・ルームウェアステッカー密着":"sticker",
        "シマエナガ・フェミニンステッカー密着":"sticker",
        "シマエナガ・水着ステッカー密着":"sticker",
        "シマエナガ・バニーステッカー密着":"sticker",
        "シマエナガ・メイドステッカー密着":"sticker",
        "シマエナガ・天使ステッカー密着":"sticker",
        "シマエナガ・悪魔ステッカー密着":"sticker",
        "シマエナガ・サイバーステッカー密着":"sticker",
        "シマエナガ・和ロリステッカー密着":"sticker",
        "シマエナガ・中華ロリステッカー密着":"sticker",
        "シマエナガ・春色カーデステッカー密着":"sticker",
        "シマエナガ・ニットワンピステッカー密着":"sticker",
        "シマエナガ・デニムカジュアルステッカー密着":"sticker",
        "シマエナガ・クラロリステッカー密着":"sticker",
        "シマエナガ・セレモニーステッカー密着":"sticker",
        "シマエナガ・ライブステージステッカー密着":"sticker",
        "シマエナガ・浴衣ステッカー密着":"sticker",
        "シマエナガ・和モダンステッカー密着":"sticker",
        "シマエナガ・漢服ステッカー密着":"sticker",
        "シマエナガ・テックウェアステッカー密着":"sticker",
        "シマエナガ・近未来パーカーステッカー密着":"sticker",
        "シマエナガ・ネオンストリートステッカー密着":"sticker",
        "シマエナガ・ゴシックシスターステッカー密着":"sticker",
        "シマエナガ・パラディンステッカー密着":"sticker",
        "シマエナガ・ダークメイドステッカー密着":"sticker",
        "シマエナガ・フリルビキニステッカー密着":"sticker",
        "シマエナガ・ワンピース水着ステッカー密着":"sticker",
        "シマエナガ・リゾート水着ステッカー密着":"sticker",
        "シマエナガ・雪花タイプ":"season"
      };

      function detectShimaGroup(s){
        return (s && s.group) || SHIMA_GROUP_BY_JA[s.ja] || "role";
      }


      let GROUPS = [
        { key: "casual", title: "日常・カジュアル", icon: "🧣", items: [] },
        { key: "school", title: "学園・制服", icon: "🎓", items: [] },
        { key: "force", title: "フォース・戦術", icon: "🛡️", items: [] },
        { key: "dress", title: "ドレス・礼装", icon: "👗", items: [] },
        { key: "east", title: "東方・中華", icon: "🐉", items: [] },
        { key: "sticker", title: "ステッカー密着コレクション", icon: "🏷️", items: [] },
        { key: "gravure", title: "グラビア・撮影", icon: "📸", items: [] },
        { key: "role", title: "異世界・ロール", icon: "✨", items: [] },
        { key: "season", title: "季節・イベント", icon: "🎐", items: [] },
      ];

      const groupMap = Object.create(null);
      GROUPS.forEach(g => { groupMap[g.key] = g; });

      // Distribute ALL sets (except spicy ones) into groups
      SETS.forEach(s => {
        if (isSpicy(s)
            || String(s?.label ?? '').toUpperCase().includes('SPICY')
            || String(s?.group ?? '').toLowerCase().startsWith('spicy')
            || /^(ナイトクラブ艶|和艶・高級|未来ランウェイ艶|冷艶)/.test(String(s?.ja ?? ''))
          ) return;
        const k = detectShimaGroup(s);
        (groupMap[k] || groupMap.casual).items.push(s);
      });

      // Remove empty groups (keeps UI compact)
      GROUPS = GROUPS.filter(g => g.items && g.items.length);


      const STICKER_SUBGROUP_BY_JA = {
        "チャイナ・シマエナガステッカー密着":"east_lolita",
        "シマエナガ・和装ステッカー密着":"east_lolita",
        "シマエナガ・和ロリステッカー密着":"east_lolita",
        "シマエナガ・中華ロリステッカー密着":"east_lolita",
        "シマエナガ・浴衣ステッカー密着":"east_lolita",
        "シマエナガ・和モダンステッカー密着":"east_lolita",
        "シマエナガ・漢服ステッカー密着":"east_lolita",
        "シマエナガ・ゆめかわステッカー密着":"daily",
        "シマエナガ・カジュアルステッカー密着":"daily",
        "シマエナガ・冬服ステッカー密着":"daily",
        "シマエナガ・ルームウェアステッカー密着":"daily",
        "シマエナガ・フェミニンステッカー密着":"daily",
        "シマエナガ・春色カーデステッカー密着":"daily",
        "シマエナガ・ニットワンピステッカー密着":"daily",
        "シマエナガ・デニムカジュアルステッカー密着":"daily",
        "シマエナガ・ゴスロリステッカー密着":"dress_stage",
        "シマエナガ・ドレスステッカー密着":"dress_stage",
        "シマエナガ・制服ステッカー密着":"dress_stage",
        "シマエナガ・アイドルステッカー密着":"dress_stage",
        "シマエナガ・クラロリステッカー密着":"dress_stage",
        "シマエナガ・セレモニーステッカー密着":"dress_stage",
        "シマエナガ・ライブステージステッカー密着":"dress_stage",
        "シマエナガ・水着ステッカー密着":"swimwear",
        "シマエナガ・フリルビキニステッカー密着":"swimwear",
        "シマエナガ・ワンピース水着ステッカー密着":"swimwear",
        "シマエナガ・リゾート水着ステッカー密着":"swimwear",
        "シマエナガ・競泳ステッカー密着":"swimwear",
        "シマエナガ・スポーティビキニステッカー密着":"swimwear",
        "シマエナガ・ラッシュガードステッカー密着":"swimwear",
        "シマエナガ・競泳ハイレグステッカー密着":"swimwear",
        "シマエナガ・セーラー水着ステッカー密着":"swimwear",
        "シマエナガ・南国パレオステッカー密着":"swimwear",
        "シマエナガ・バニーステッカー密着":"bunny",
        "シマエナガ・クラシックバニーステッカー密着":"bunny",
        "シマエナガ・逆バニーステッカー密着":"bunny",
        "シマエナガ・フリルバニーステッカー密着":"bunny",
        "シマエナガ・サイバーバニーステッカー密着":"bunny",
        "シマエナガ・リボンバニーステッカー密着":"bunny",
        "シマエナガ・アイドルバニーステッカー密着":"bunny",
        "シマエナガ・ゴシックバニーステッカー密着":"bunny",
        "シマエナガ・ロイヤルバニーステッカー密着":"bunny",
        "シマエナガ・和バニーステッカー密着":"bunny",
        "シマエナガ・中華バニーステッカー密着":"bunny",
        "シマエナガ・メイドバニーステッカー密着":"bunny",
        "シマエナガ・メイドステッカー密着":"fantasy_role",
        "シマエナガ・天使ステッカー密着":"fantasy_role",
        "シマエナガ・悪魔ステッカー密着":"fantasy_role",
        "シマエナガ・ゴシックシスターステッカー密着":"fantasy_role",
        "シマエナガ・パラディンステッカー密着":"fantasy_role",
        "シマエナガ・ダークメイドステッカー密着":"fantasy_role",
        "シマエナガ・ストリートステッカー密着":"urban_future",
        "シマエナガ・サイバーステッカー密着":"urban_future",
        "シマエナガ・テックウェアステッカー密着":"urban_future",
        "シマエナガ・近未来パーカーステッカー密着":"urban_future",
        "シマエナガ・ネオンストリートステッカー密着":"urban_future"
      };

      const STICKER_SUBGROUPS_DEF = [
        { key:"daily", icon:"🫧", ja:"日常・やわらか系" },
        { key:"dress_stage", icon:"🎀", ja:"ドレス・学園・舞台" },
        { key:"east_lolita", icon:"🎎", ja:"和装・中華・ロリィタ" },
        { key:"urban_future", icon:"🌃", ja:"ストリート・サイバー" },
        { key:"fantasy_role", icon:"🪽", ja:"メイド・天使・悪魔" },
        { key:"swimwear", icon:"🏖️", ja:"水着" },
        { key:"bunny", icon:"🐇", ja:"バニー" }
      ];

      function detectStickerSubgroup(s){
        if (!s) return "daily";
        return STICKER_SUBGROUP_BY_JA[s.ja] || "daily";
      }

      function buildStickerGroupedSection(opts){
        const groups = STICKER_SUBGROUPS_DEF.map(g => ({...g, items: []}));
        const idx = Object.fromEntries(groups.map(g => [g.key, g]));
        (opts.items || []).forEach(s => {
          const k = detectStickerSubgroup(s);
          (idx[k] || idx.daily).items.push(s);
        });
        const liveGroups = groups.filter(g => g.items && g.items.length);

        const wrap = document.createElement("details");
        wrap.className = "subgroup-details sticker-group-wrap";
        wrap.open = false;

        const sum = document.createElement("summary");
        sum.className = "shima-accordion";
        sum.innerHTML = `<span class="summary-left"><span class="icon">${opts.icon || "🏷️"}</span><span class="title">${opts.title || "ステッカー密着コレクション"}</span></span><span class="summary-right"><span class="count">${opts.count || 0}</span></span>`;

        const panelsWrap = document.createElement("div");
        panelsWrap.className = "group-panels sticker-sub-panels";
        panelsWrap.style.display = "flex";
        panelsWrap.style.flexDirection = "column";
        panelsWrap.style.gap = "10px";
        panelsWrap.style.width = "100%";

        liveGroups.forEach(g => {
          const sec = buildSection({
            title: g.ja,
            icon: g.icon,
            items: g.items,
            count: g.items.length,
            summaryClass: "shima-accordion",
            detailsClass: "subgroup-details",
            idPrefix: `${opts.idPrefix || "attire_v21_shima"}_sticker`,
            hideEn: true
          });
          panelsWrap.appendChild(sec);
        });

        wrap.appendChild(sum);
        wrap.appendChild(panelsWrap);
        return wrap;
      }

        // ===== 🌶️ Spicy Special: explicit labeling & grouping (NO auto classification) =====
  const SPICY_GROUP_BY_JA = {
  "攻めスペシャル・サテン深スリット":"glam_dress",
  "攻めスペシャル・ベルベット夜会":"glam_dress",
  "攻めスペシャル・クリスタル縁ビスチェ":"glam_dress",
  "攻めスペシャル・シルクホルター艶":"glam_dress",
  "攻めスペシャル・レースマーメイド":"glam_dress",
  "攻めスペシャル・片肩グラム":"mode_bodycon",
  "攻めスペシャル・オペラグローブ礼装":"glam_dress",
  "攻めスペシャル・背中リボン背面魅せ":"glam_dress",
  "攻めスペシャル・真珠チェーン背中飾り":"glam_dress",
  "攻めスペシャル・透けレイヤー正装":"glam_dress",
  "攻めスペシャル・ネオン艶ボディコン":"mode_bodycon",
  "攻めスペシャル・ルーフトップ風スリット":"glam_dress",
  "攻めスペシャル・反射素材シティナイト":"mode_bodycon",
  "攻めスペシャル・月光シースルーカーデ":"outer_gloss",
  "攻めスペシャル・スポットライト礼装スーツ":"suit_formal",
  "攻めスペシャル・ホログラムミニドレス":"glam_dress",
  "攻めスペシャル・夜景ベルベットジャケット":"suit_formal",
  "攻めスペシャル・プリズムクラブドレス":"glam_dress",
  "攻めスペシャル・シルエットロングコート艶":"outer_gloss",
  "攻めスペシャル・ゴシックレース深V":"leather_goth",
  "攻めスペシャル・ブラックサテンコルセット":"leather_goth",
  "攻めスペシャル・黒薔薇シマー":"leather_goth",
  "攻めスペシャル・紅差しダークグラム":"leather_goth",
  "攻めスペシャル・構築モード輪郭セット":"mode_bodycon",
  "攻めスペシャル・彫刻肩モードトップ":"mode_bodycon",
  "攻めスペシャル・ハイウエスト光沢パンツ":"mode_bodycon",
  "攻めスペシャル・ミニマルシルクスーツ":"suit_formal",
  "攻めスペシャル・スリットコートドレス":"outer_gloss"
};
  const SPICY_GROUPS_DEF = [
    { key:"glam_dress", icon:"💎", ja:"グラム・ドレス", en:"Glam Dresses" },
    { key:"suit_formal", icon:"🕴️", ja:"スーツ・礼装", en:"Suits & Formal" },
    { key:"outer_gloss", icon:"🧥", ja:"アウター艶", en:"Glossy Outerwear" },
    { key:"leather_goth", icon:"🖤", ja:"レザー・ゴシック", en:"Leather & Gothic" },
    { key:"mode_bodycon", icon:"✨", ja:"モード・ボディコン", en:"Mode & Bodycon" },
    { key:"dark_glam", icon:"🌑", ja:"ダーク艶", en:"Dark Glam" },
    { key:"luxury_swim", icon:"🩱", ja:"高級水着艶", en:"Luxury Swim Glam" },
    { key:"highbrand_mode", icon:"👜", ja:"ハイブランド艶", en:"High-Brand Mode" },
    { key:"nightclub_glam", icon:"🌃", ja:"ナイトクラブ艶", en:"Nightclub Glam" },
    { key:"wa_lux_glam", icon:"🎴", ja:"和艶・高級", en:"Luxury Wa Glam" },
    { key:"futuristic_runway_glam", icon:"🪩", ja:"未来ランウェイ艶", en:"Future Runway Glam" },
    { key:"cold_glam", icon:"❄️", ja:"冷艶", en:"Ice & Snow Glam" },

    { key:"isekai_glam", icon:"🛸", ja:"異世界艶", en:"Isekai Glam" },
  ];

  function detectSpicyGroup(s) {
    if (!s) return "glam_dress";
    if (s.spicyGroup) return s.spicyGroup;
    return SPICY_GROUP_BY_JA[s.ja] || "glam_dress";
  }
// Prebuild spicy groups from spicySets (strict mapping; missing => glam_dress)
let SPICY_GROUPS = SPICY_GROUPS_DEF.map(g => ({...g, items: []}));
const SPICY_GROUP_INDEX = Object.fromEntries(SPICY_GROUPS.map(g => [g.key, g]));
spicySets.forEach(s => {
  const k = detectSpicyGroup(s);
  (SPICY_GROUP_INDEX[k] || SPICY_GROUP_INDEX.glam_dress).items.push(s);
});
SPICY_GROUPS = SPICY_GROUPS.filter(g => g.items.length > 0);
  function buildSpicyGroupedSection(opts) {
    const {
      title,
      icon,
      count,
      summaryClass="section-summary spicy-special",
      detailsClass="section-details spicy-special-details",
      groups,
    } = opts || {};

    const wrap = document.createElement("details");
    wrap.className = detailsClass;
    wrap.open = false;

    const sum = document.createElement("summary");
    sum.className = summaryClass;
    sum.innerHTML = `<span class="summary-left"><span class="icon">${icon || ""}</span><span class="title">${title || ""}</span></span>` +
      `<span class="summary-right"><span class="count">${count || 0}</span></span>`;

    const panelsWrap = document.createElement("div");
    panelsWrap.className = "group-panels";
    // Force single-column layout (override any grid styles)
    panelsWrap.style.display = "flex";
    panelsWrap.style.flexDirection = "column";
    panelsWrap.style.gap = "10px";
    panelsWrap.style.width = "100%";

    (groups || []).forEach(g => {
      const sec = buildSection({
        title: g.ja,
        icon: g.icon,
        items: g.items,
        count: g.items.length,
        summaryClass: "shima-accordion",
        detailsClass: "subgroup-details",
        idPrefix: `spicy_`,
        hideEn: true,
      });
      panelsWrap.appendChild(sec);
    });

    wrap.appendChild(sum);
    wrap.appendChild(panelsWrap);
    return wrap;
  }

// Grouped variant for Shima-enaga Collection (nested subsections)
      function buildShimaGroupedSection(opts){
  const wrap = document.createElement("details");
  wrap.className = "shima-grouped";
	  // NOTE: diagnostic outline removed (was causing a visible magenta frame around the section)
wrap.open = false;
  // v54: force this grouped block to span full row in grid/flex layouts (fix narrow left column)
  try{
    wrap.style.width = "100%";
    wrap.style.maxWidth = "100%";
    wrap.style.display = "block";
    wrap.style.boxSizing = "border-box";
    wrap.style.gridColumn = "1 / -1";
    wrap.style.justifySelf = "stretch";
    wrap.style.alignSelf = "stretch";
    wrap.style.flexBasis = "100%";
  }catch(e){}

  const title = document.createElement("summary");
  title.className = "shima-grouped-title";
  title.innerHTML = `${opts.icon||""} ${opts.title||"シマエナガ・コレクション"} <span class="shima-count">${opts.count||""}</span>`;

  const body = document.createElement("div");
  body.className = "shima-grouped-body";

  const panelsWrap = document.createElement("div");
  panelsWrap.className = "shima-panels";

  GROUPS.forEach(g=>{
    const panel = (g.key === "sticker")
      ? buildStickerGroupedSection({
          title: g.title,
          icon: g.icon,
          items: g.items,
          count: (g.items ? g.items.length : 0),
          idPrefix: opts.idPrefix
        })
      : buildSection({
          title: g.title,
          icon: g.icon,
          items: g.items,
          count: (g.items?g.items.length:0),
          idPrefix: opts.idPrefix,
          badge: g.badge,
          summaryClass: "shima-accordion",
          hideEn: true
        });
    panelsWrap.appendChild(panel);
  });

  body.appendChild(panelsWrap);

  
// v56 DIAG: overlay panel to print actual computed widths/styles (mobile debug)
// Release build: disabled by default. Enable only with URL parameter ?diag=1
try{
  const __shDiag = (typeof location !== 'undefined') && /(?:\?|&)diag=1(?:&|$)/.test(location.search);
  if(__shDiag && !window.__SHIMA_ATTIRE_DIAG_PANEL__){
    window.__SHIMA_ATTIRE_DIAG_PANEL__ = true;
    const panel = document.createElement('div');
    panel.id = 'shima-attire-diag';
    panel.style.cssText = [
      'position:fixed','left:8px','top:8px','z-index:2147483647',
      'background:rgba(0,0,0,0.72)','color:#fff','padding:8px 10px',
      'border-radius:10px','font:12px/1.25 monospace','max-width:92vw',
      'white-space:pre','pointer-events:auto'
    ].join(';');
    panel.addEventListener('click', ()=>{ panel.style.opacity = (panel.style.opacity==='0.15'?'1':'0.15'); });
    document.body.appendChild(panel);

    const fmt = (el,label)=>{
      if(!el) return label+': (null)';
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      const w = Math.round(r.width);
      const ml = cs.marginLeft, mr = cs.marginRight;
      const disp = cs.display;
      const pos = cs.position;
      const mw = cs.maxWidth;
      const fw = cs.flexWrap;
      const ai = cs.alignItems;
      const jc = cs.justifyContent;
      const col = cs.gridTemplateColumns;
      return `${label}: w=${w}px, display=${disp}, pos=${pos}, maxW=${mw}, mL=${ml}, mR=${mr}, flexWrap=${fw}, alignItems=${ai}, justify=${jc}, gridCols=${col}`;
    };

    const update = ()=>{
      const host = document.querySelector('.attire-v21-shima') || document.querySelector('[data-section="attire"]') || document.body;
      const lines = [];
      lines.push('SHIMA ATTIRE DIAG (tap to fade)');
      lines.push(`viewport: ${window.innerWidth}x${window.innerHeight}, dpr=${window.devicePixelRatio}`);
      lines.push(fmt(host,'.attire-v21-shima(host)'));
      lines.push(fmt(host.querySelector('.shima-grouped-body'),'.shima-grouped-body'));
      lines.push(fmt(host.querySelector('.shima-panels'),'.shima-panels'));
      lines.push(fmt(host.querySelector('.shima-panels > details'),'.shima-panels>details(first)'));
      lines.push(fmt(host.querySelector('.shima-panels > details > summary'),'.details>summary(first)'));
      lines.push(fmt(host.querySelector('.shima-grouped-span'),'.shima-grouped-span'));
      lines.push(fmt(host.querySelector('.shima-grouped-row'),'.shima-grouped-row'));
// ancestor chain: find who is constraining width
function nodeLabel(el){
  if(!el) return '(null)';
  var cls = (el.className && typeof el.className==='string') ? el.className.trim() : '';
  cls = cls ? ('.'+cls.split(/\s+/).slice(0,4).join('.')) : '';
  return el.tagName.toLowerCase()+cls;
}
function styleSummary(el){
  if(!el) return '(null)';
  var cs = getComputedStyle(el);
  var r = el.getBoundingClientRect();
  return 'w=' + Math.round(r.width) + 'px'
    + ', maxW=' + cs.maxWidth
    + ', minW=' + cs.minWidth
    + ', disp=' + cs.display
    + ', pos=' + cs.position
    + ', flex=' + cs.flex
    + ', flexDir=' + cs.flexDirection
    + ', align=' + cs.alignItems
    + ', justify=' + cs.justifyContent
    + ', box=' + cs.boxSizing
    + ', padLR=' + cs.paddingLeft + '/' + cs.paddingRight
    + ', marLR=' + cs.marginLeft + '/' + cs.marginRight;
}
lines.push('--- ancestors (host -> up) ---');
var cur = host;
for(var i=0;i<14 && cur;i++){
  lines.push(i + ': ' + nodeLabel(cur) + ' | ' + styleSummary(cur));
  cur = cur.parentElement;
}
      panel.textContent = lines.join('\n');
    };

    update();
    window.addEventListener('resize', ()=>requestAnimationFrame(update));
    document.addEventListener('toggle', ()=>requestAnimationFrame(update), true);
    document.addEventListener('click', ()=>setTimeout(update,0), true);
  }else{
    // already exists, refresh once
    const p=document.getElementById('shima-attire-diag');
    if(p) p.style.display='block';
  }
}catch(e){}

wrap.appendChild(title);
  wrap.appendChild(body);
  return wrap;
}
      wrap.appendChild(buildShimaGroupedSection({
        idPrefix: "attire_v21_shima",
        icon: "🐦",
        title: "シマエナガ・コレクション (Shima-enaga Collection)",
        count: shimaSets.length,
        items: shimaSets,
        open: false
      }));

      if (spicySets.length){
    wrap.appendChild(buildSpicyGroupedSection({
      title: "🌶️ 攻め・スペシャル (Spicy Special)",
      icon: "🌶️",
      count: spicySets.length,
      groups: SPICY_GROUPS,
    }));
  }

      contentArea.appendChild(wrap);
      try{ window.__normalizeAttireLayout(contentArea || listRoot || document.getElementById("list-attire") || document.body); }catch(_){}
      try{ window.__ensureAttireNormalObserver(contentArea || listRoot || document.getElementById("list-attire") || document.body); }catch(_){}
    },

    getTags(){
      const tags = [];
      document.querySelectorAll(".attire-v21-shima input[type='checkbox']:checked").forEach(cb => {
        const v = cb.dataset.en;
        if (v) tags.push(v);
      });

      // Apply hood state only when Shima-enaga themed attire is selected
      const hasShima = tags.some(t => /Shima-enaga|long-tailed bushtit/i.test(t));
      if (hasShima) {
        // Apply hood state ONLY when the selected Shima outfit already implies a hood/outerwear.
        // This avoids forcing hooded parkas onto ceremonial/maid/etc outfits.
        const hasHoodCapable = tags.some(t => /(hood|hoodie|parka|puffer|jacket|coat|anorak|down jacket|padded)/i.test(t));
        if (hasHoodCapable && __shimaHoodMode && __shimaHoodMode !== "auto") {
          if (__shimaHoodMode === "worn") tags.unshift(__HOOD_WORN);
          else if (__shimaHoodMode === "down") tags.unshift(__HOOD_DOWN);
        }
      }
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();


// --- Attire Mobile Debug Overlay (no-PC) ---
(function(){
  "use strict";
  function isEnabled(){
    try{
      if (typeof location !== "undefined" && location && typeof location.search === "string"){
        if (/(?:\?|&)attire_debug=1(?:&|$)/.test(location.search)) return true;
      }
      return (typeof localStorage !== "undefined" && localStorage.getItem("ATTIRE_DEBUG") === "1");
    }catch(e){ return false; }
  }

  function safeStringify(obj){
    try{
      return JSON.stringify(obj, function(k,v){
        if (v && v.nodeType) return "[DOMNode]";
        if (typeof v === "function") return "[Function]";
        return v;
      }, 2);
    }catch(e){
      try{ return String(obj); }catch(_){ return "[unstringifiable]"; }
    }
  }

  function make(tag, attrs, text){
    var el = document.createElement(tag);
    if (attrs){
      Object.keys(attrs).forEach(function(k){
        if (k === "style" && attrs.style && typeof attrs.style === "object"){
          Object.assign(el.style, attrs.style);
        } else if (k === "onclick"){
          el.addEventListener("click", attrs.onclick);
        } else {
          el.setAttribute(k, attrs[k]);
        }
      });
    }
    if (text != null) el.textContent = text;
    return el;
  }

  function ensurePanel(){
    if (document.getElementById("__attire_debug_panel__")) return document.getElementById("__attire_debug_panel__");

    var panel = make("div", { id: "__attire_debug_panel__", style: {
      position: "fixed", left: "8px", bottom: "8px", zIndex: 2147483647,
      width: "min(92vw, 520px)", maxHeight: "55vh",
      background: "rgba(0,0,0,0.78)", color: "#fff",
      fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
      fontSize: "12px", borderRadius: "12px", boxShadow: "0 8px 28px rgba(0,0,0,0.35)",
      overflow: "hidden"
    }});

    var header = make("div", { style: { display: "flex", gap: "6px", alignItems: "center", padding: "10px", borderBottom: "1px solid rgba(255,255,255,0.15)" }});
    header.appendChild(make("div", { style: { fontWeight: "700", marginRight: "auto" }}, "ATTIRE DEBUG"));

    var btnDump = make("button", { style: { padding: "6px 10px", borderRadius: "10px", border: "0", background: "rgba(255,255,255,0.14)", color: "#fff" },
      onclick: function(){ dump(); }
    }, "Dump");

    var btnRemount = make("button", { style: { padding: "6px 10px", borderRadius: "10px", border: "0", background: "rgba(255,255,255,0.14)", color: "#fff" },
      onclick: function(){
        try{
          if (typeof window.__triggerUIMount === "function") window.__triggerUIMount();
          logLine("called __triggerUIMount()");
        }catch(e){ logLine("remount error: " + (e && e.message ? e.message : e)); }
      }
    }, "Remount");

    var btnShow = make("button", { style: { padding: "6px 10px", borderRadius: "10px", border: "0", background: "rgba(255,255,255,0.14)", color: "#fff" },
      onclick: function(){ panel.style.display = "none"; toggleBtn.style.display = "block"; }
    }, "Hide");

    header.appendChild(btnDump);
    header.appendChild(btnRemount);
    header.appendChild(btnShow);

    var body = make("div", { style: { padding: "8px 10px" }});

    var hint = make("div", { style: { opacity: "0.9", marginBottom: "8px", lineHeight: "1.35" }},
      "Enable: ?attire_debug=1  /  Persist: press 'Persist ON'\nUse 'Dump' then copy log."
    );
    body.appendChild(hint);

    var row2 = make("div", { style: { display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "8px" }});

    var btnPersistOn = make("button", { style: { padding: "6px 10px", borderRadius: "10px", border: "0", background: "rgba(90,200,90,0.22)", color: "#fff" },
      onclick: function(){
        try{ localStorage.setItem("ATTIRE_DEBUG","1"); logLine("Persist ON (localStorage ATTIRE_DEBUG=1)"); }catch(e){ logLine("Persist ON failed: "+e); }
      }
    }, "Persist ON");

    var btnPersistOff = make("button", { style: { padding: "6px 10px", borderRadius: "10px", border: "0", background: "rgba(255,90,90,0.22)", color: "#fff" },
      onclick: function(){
        try{ localStorage.removeItem("ATTIRE_DEBUG"); logLine("Persist OFF (localStorage cleared)"); }catch(e){ logLine("Persist OFF failed: "+e); }
      }
    }, "Persist OFF");

    var btnMakeVisible = make("button", { style: { padding: "6px 10px", borderRadius: "10px", border: "0", background: "rgba(255,255,255,0.14)", color: "#fff" },
      onclick: function(){
        try{
          var nodes = document.querySelectorAll('[data-section="attire"], .attire, [class*="attire"]');
          nodes.forEach(function(n){
            try{ n.style.display="block"; n.style.visibility="visible"; n.style.opacity="1"; }catch(_){}
          });
          logLine("forced visible on " + nodes.length + " nodes");
        }catch(e){ logLine("MakeVisible error: "+e); }
      }
    }, "MakeVisible");

    var btnCopy = make("button", { style: { padding: "6px 10px", borderRadius: "10px", border: "0", background: "rgba(255,255,255,0.14)", color: "#fff" },
      onclick: async function(){
        try{
          var txt = textarea.value || "";
          if (!txt) { logLine("nothing to copy"); return; }
          if (navigator.clipboard && navigator.clipboard.writeText){
            await navigator.clipboard.writeText(txt);
            logLine("copied to clipboard");
          } else {
            textarea.focus(); textarea.select();
            document.execCommand("copy");
            logLine("copied (execCommand)");
          }
        }catch(e){ logLine("copy failed: "+e); }
      }
    }, "CopyLog");

    row2.appendChild(btnPersistOn);
    row2.appendChild(btnPersistOff);
    row2.appendChild(btnMakeVisible);
    row2.appendChild(btnCopy);
    body.appendChild(row2);

    var textarea = make("textarea", { id: "__attire_debug_log__", style: {
      width: "100%", height: "26vh", minHeight: "140px",
      background: "rgba(255,255,255,0.06)", color: "#fff",
      border: "1px solid rgba(255,255,255,0.18)", borderRadius: "10px",
      padding: "8px", boxSizing: "border-box", resize: "vertical", outline: "none"
    }});
    body.appendChild(textarea);

    panel.appendChild(header);
    panel.appendChild(body);
    document.body.appendChild(panel);

    var toggleBtn = make("button", { id: "__attire_debug_toggle__", style: {
      position: "fixed", left: "8px", bottom: "8px", zIndex: 2147483646,
      padding: "10px 12px", borderRadius: "999px", border: "0",
      background: "rgba(0,0,0,0.72)", color: "#fff",
      display: "none", boxShadow: "0 8px 28px rgba(0,0,0,0.35)"
    }, onclick: function(){ panel.style.display="block"; toggleBtn.style.display="none"; }}, "ATTIRE DBG");
    document.body.appendChild(toggleBtn);

    function logLine(s){
      var t = new Date().toISOString().replace("T"," ").replace("Z","");
      textarea.value += (textarea.value ? "\n" : "") + "["+t+"] " + s;
      textarea.scrollTop = textarea.scrollHeight;
    }
    function dump(){
      try{
        var pp = window.__PROMPT_PARTS__ || {};
        var attire = pp.attire || pp["attire"] || null;
        var versions = attire ? Object.keys(attire).sort(function(a,b){return (+a)-(+b);}) : [];
        var list = document.getElementById("list-attire");
        var domCount = list ? list.querySelectorAll("*").length : 0;
        var shimaCount = document.querySelectorAll(".attire-v21-shima").length;
        var spicyCount = document.querySelectorAll(".attire-v21-spicy").length;
        var containers = {
          sections: !!document.querySelector("#sections"),
          listAttire: !!document.querySelector("#list-attire"),
          sectionContent: !!document.querySelector("#list-attire .section-content"),
          accordionWrap: !!document.querySelector("#list-attire details.accordion-wrap"),
          body: !!document.body
        };
        var payload = {
          ua: navigator.userAgent,
          url: String(location.href),
          attire_versions: versions,
          attire_apis: attire ? versions.reduce(function(acc,v){
            var a = attire[v];
            acc[v] = { hasInitUI: typeof a?.initUI === "function", mounted: !!a?._mounted, keys: Object.keys(a||{}).slice(0,20) };
            return acc;
          }, {}) : null,
          attire_dom_count: domCount,
          attire_shima_nodes: shimaCount,
          attire_spicy_nodes: spicyCount,
          containers: containers
        };
        textarea.value = safeStringify(payload);
        logLine("dump ok (versions=" + versions.length + ", dom=" + domCount + ")");
        // also mirror to console if available
        try{ console.log("[ATTIRE DEBUG]", payload); }catch(_){}
      }catch(e){
        logLine("dump error: " + (e && e.stack ? e.stack : e));
      }
    }

    // expose small helpers
    window.__ATTIRE_DEBUG__ = { dump: dump };

    logLine("panel ready");
    // auto dump once
    setTimeout(function(){ dump(); }, 600);

    return panel;
  }

  function boot(){
    try{
      if (!isEnabled()) return;
      if (!document || !document.body) return;
      ensurePanel();
    }catch(e){}
  }

  if (document.readyState === "complete" || document.readyState === "interactive"){
    setTimeout(boot, 0);
  } else {
    document.addEventListener("DOMContentLoaded", boot);
  }
})();
// --- builder_ui.section.attire.v22.js ---
(function(){
  "use strict";
  const VERSION = 23; // 拡張パックS (限界突破R-18・フェティッシュ全部乗せ)
  const KEY = "attire";

  // ★ シークレットモード判定
  const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  const ATTIRE_DATA = {
    "🤯 極限着衣崩れ・チラリズム (Extreme Disheveled)": [
      { ja: "片乳出し", en: "one breast exposed, clothes slipping off" },
      { ja: "パンツ片足引っ掛け", en: "panties around one leg" },
      { ja: "ジッパー半開き", en: "zipper half down, skirt unzipped" },
      { ja: "ボタン弾け飛び", en: "buttons popping off, clothes bursting open" },
      { ja: "ノーブラ浮き出し", en: "no bra, nipples visible through clothes, tight shirt" },
      { ja: "パンチラ (風・動き)", en: "upskirt, panties visible" },
      { ja: "服ビリビリ (大破)", en: "heavily torn clothes, almost naked" }
    ],
    "⛓️ 限界拘束・洗脳 (Hardcore Bondage & Mind Control)": [
      { ja: "洗脳奴隷の首輪", en: "mind control collar, slave collar, glowing runes, blank stare" },
      { ja: "リード付き首輪", en: "collar and leash, held by leash" },
      { ja: "重厚な鎖と枷", en: "heavy metal shackles, chains, chained to wall" },
      { ja: "スプレッダーバー", en: "spreader bar, spread legs, metal cuffs" },
      { ja: "真空ベッド", en: "vacuum bed bondage, latex, sealed" },
      { ja: "完全感覚遮断", en: "sensory deprivation, blindfold, headphones, gag" },
      { ja: "吊り下げ拘束", en: "suspension bondage, hoisted up" }
    ],
    "🧞‍♀️ 異世界・スレイブ (Fantasy Dark/Slave)": [
      { ja: "奴隷のボロ布", en: "slave rags, dirty clothes, iron collar" },
      { ja: "淫魔の過激アーマー", en: "revealing succubus armor, demonic motifs, barely clothed" },
      { ja: "金属ビキニ", en: "metal bikini armor, chainmail bikini" },
      { ja: "透視魔法の服", en: "x-ray magic, clothes partly transparent, magical glow" },
      { ja: "娼館の踊り子服", en: "harem dancer outfit, revealing silk, gold chains" },
      { ja: "生贄の祭祀服", en: "sacrificial maiden outfit, sheer white fabric, bound" }
    ],
    "👙 変態ランジェリー (Abnormal Lingerie)": [
      { ja: "Vストリング", en: "v-string, extremely thin thong" },
      { ja: "パールショーツ", en: "pearl thong" },
      { ja: "マイクロ貝殻ブラ", en: "tiny shell bra, pasties size" },
      { ja: "葉っぱ一枚", en: "single leaf covering, nature's clothes" },
      { ja: "全身網タイツ", en: "bodystocking, fishnet body suit" },
      { ja: "穴あき全身網タイツ", en: "crotchless bodystocking, torn fishnets" },
      { ja: "極細紐パン", en: "micro string panties" }
    ],
    "🐙 異種姦・生体侵食+ (Alien & Parasite)": [
      { ja: "スライム半溶解服", en: "clothes melted by slime, partially transparent, sticky clothes" },
      { ja: "触手コルセット", en: "tentacle laced corset, living restraints" },
      { ja: "膨満腹強調スーツ", en: "tight clothes highlighting pregnant belly, stomach bulge" },
      { ja: "寄生植物の蔦", en: "parasitic plant clothes, vines wrapping body, flower blooming from body" },
      { ja: "異形の粘液コート", en: "alien mucus coating, slimy layer" }
    ]
  };

  const DICT = {
    "one breast exposed": "片乳出し", "panties around one leg": "片足パンツ", "zipper half down": "ジッパー半開き",
    "buttons popping off": "ボタン弾け", "nipples visible through clothes": "ノーブラ浮き出し",
    "mind control collar": "洗脳の首輪", "slave collar": "奴隷の首輪", "collar and leash": "リード付き首輪",
    "heavy metal shackles": "重厚な枷", "spreader bar": "スプレッダーバー", "vacuum bed bondage": "真空ベッド",
    "sensory deprivation": "感覚遮断", "slave rags": "奴隷のボロ布", "revealing succubus armor": "過激サキュバスアーマー",
    "metal bikini armor": "金属ビキニ", "x-ray magic": "透視魔法", "harem dancer outfit": "娼館踊り子服",
    "v-string": "Vストリング", "pearl thong": "パールショーツ", "tiny shell bra": "極小貝殻ブラ",
    "single leaf covering": "葉っぱ一枚", "bodystocking": "ボディストッキング", "crotchless bodystocking": "穴あき全身網タイツ",
    "clothes melted by slime": "スライム溶解服", "tentacle laced corset": "触手コルセット",
    "tight clothes highlighting pregnant belly": "膨満腹強調服", "parasitic plant clothes": "寄生植物の服"
  };

  const API = {
    initUI(container) {
      if (!IS_UNLOCKED) return;
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      const mount = (retry = 0) => {
        let parent = document.querySelector("#list-attire");
        if (!parent) { 
          if (retry < 50) setTimeout(() => mount(retry + 1), 100);
          return; 
        }

        // 重複防止
        if (parent.querySelector(".attire-v22-container")) return;

        const createCat = (title, items) => {
          const details = document.createElement("details");
          details.className = "attire-cat attire-r18-max";
          // 限界突破用により過激な色枠に
          details.style.cssText = "margin-bottom:6px; border:2px solid #ff0055; border-radius:6px; background:#fff;";
          const summary = document.createElement("summary");
          summary.textContent = title;
          summary.style.cssText = "font-weight:bold; padding:8px 10px; cursor:pointer; background:#fff0f5; color:#cc0044;";
          details.appendChild(summary);
          const content = document.createElement("div");
          content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(140px, 1fr)); gap:6px;";
          items.forEach(item => {
            const label = document.createElement("label");
            label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
            const cb = document.createElement("input");
            cb.type = "checkbox"; cb.dataset.en = item.en; cb.dataset.r18src = "v22"; cb.style.marginRight = "6px";
            label.appendChild(cb); label.appendChild(document.createTextNode(`${item.ja}`));
            label.title = item.en; // 英語はツールチップで表示
            content.appendChild(label);
          });
          details.appendChild(content);
          return details;
        };

        const root = document.createElement("div");
        root.className = "attire-v22-container";
        
        const sep = document.createElement("div");
        sep.style.cssText = "margin:20px 0 10px 0; border-top:2px dashed #ff0055; text-align:center; color:#ff0055; font-size:0.9em; font-weight:bold;";
        sep.textContent = "🔥 R-18 限界突破・マニアック (Max Fetish) 🔥"; 
        
        root.appendChild(sep);
        Object.entries(ATTIRE_DATA).forEach(([cat, items]) => root.appendChild(createCat(cat, items)));
        
        const contentArea = parent.querySelector(".section-content") || parent;
        contentArea.appendChild(root);
        try{ window.__normalizeAttireLayout(contentArea || parent); }catch(_){}
      };

      mount();
    },
    getTags() {
      const tags = [];
      document.querySelectorAll("input[data-r18src='v22']:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();


// --- builder_ui.section.attire.v23.js ---
(function(){
  "use strict";
  const VERSION = 2;
  const KEY = "attire";

  const DATA = [
    {
      title: "👘 チャイナ服特化コレクション",
      children: [
        {
          title: "👑 王道チャイナ",
          children: [
            {
              title: "💋 色気寄り",
              items: [
                { ja: "艶感シルク旗袍", en: "lustrous silk cheongsam, glossy silk china dress" },
                { ja: "深紅の色香旗袍", en: "deep crimson cheongsam, seductive chinese dress" },
                { ja: "肩見せ上品色気旗袍", en: "bare shoulders, elegant sensual cheongsam" },
                { ja: "胸元カット旗袍", en: "cleavage cutout cheongsam, china dress" },
                { ja: "太腿魅せハイスリット旗袍", en: "high slit cheongsam, thighs" },
                { ja: "横乳寄せスリム旗袍", en: "sideboob, slim fit cheongsam" },
                { ja: "攻め雛形チャイナ", en: "bare shoulders, china dress, chinese clothes, short dress, cleavage cutout, sideboob, thighs" },
                { ja: "濡れ光沢チャイナ", en: "wet sheen cheongsam, glossy chinese clothes" },
                { ja: "刺繍入り妖艶旗袍", en: "sensual embroidered cheongsam, fitted silhouette" },
                { ja: "黒金の夜香旗袍", en: "black and gold cheongsam, alluring nightwear style" }
              ]
            },
            {
              title: "🌸 上品寄り",
              items: [
                { ja: "白磁の端正旗袍", en: "porcelain white cheongsam, refined chinese dress" },
                { ja: "翡翠飾り旗袍", en: "jade ornament cheongsam" },
                { ja: "金刺繍の品格旗袍", en: "gold embroidered elegant cheongsam" },
                { ja: "高襟ロング旗袍", en: "high collar long cheongsam" },
                { ja: "花鳥刺繍の礼節旗袍", en: "floral bird embroidery cheongsam, graceful chinese clothes" },
                { ja: "淡金の宮花旗袍", en: "pale gold cheongsam, noble chinese dress" },
                { ja: "青磁色の品雅旗袍", en: "celadon cheongsam, elegant silhouette" },
                { ja: "真珠飾りの端麗旗袍", en: "pearl decorated cheongsam, refined chinese fashion" }
              ]
            },
            {
              title: "🕊 清楚寄り",
              items: [
                { ja: "淡雪の清楚旗袍", en: "soft white modest cheongsam" },
                { ja: "薄桃の可憐旗袍", en: "light pink innocent cheongsam" },
                { ja: "水色の爽やか旗袍", en: "light blue fresh cheongsam" },
                { ja: "小花刺繍の清純旗袍", en: "small floral embroidery cheongsam, pure style" },
                { ja: "控えめスリット旗袍", en: "modest slit cheongsam" },
                { ja: "白花模様の涼感旗袍", en: "white floral pattern cheongsam, airy chinese dress" },
                { ja: "青白磁の整然旗袍", en: "blue white porcelain inspired cheongsam" },
                { ja: "薄紗レイヤーの清廉旗袍", en: "light sheer layered cheongsam, clean silhouette" }
              ]
            },
            {
              title: "🎊 祝祭寄り",
              children: [
                {
                  title: "🧧 春節",
                  items: [
                    { ja: "春節の慶紅旗袍", en: "spring festival red cheongsam" },
                    { ja: "金龍祝賀旗袍", en: "golden dragon celebration cheongsam" },
                    { ja: "爆竹色彩の賀正旗袍", en: "festive firecracker color cheongsam" },
                    { ja: "瑞雲刺繍の新春旗袍", en: "auspicious cloud embroidered cheongsam" },
                    { ja: "福字飾りの華麗旗袍", en: "fortune character decorated cheongsam" }
                  ]
                },
                {
                  title: "🏮 灯籠祭",
                  items: [
                    { ja: "灯籠祭の朱灯旗袍", en: "lantern festival cheongsam, vermilion glow" },
                    { ja: "提灯光の夜祭旗袍", en: "night festival cheongsam, lantern light" },
                    { ja: "金灯刺繍の夜宴旗袍", en: "gold lantern embroidered cheongsam" },
                    { ja: "流灯模様の幻想旗袍", en: "floating lantern motif cheongsam" },
                    { ja: "夜風に揺れる薄紗灯祭旗袍", en: "sheer lantern festival cheongsam in night breeze" }
                  ]
                },
                {
                  title: "💍 婚礼",
                  children: [
                    {
                      title: "🏯 王朝婚礼",
                      items: [
                        { ja: "王朝婚礼の鳳凰旗袍", en: "dynastic wedding cheongsam, phoenix embroidery" },
                        { ja: "皇妃風婚礼ロング旗袍", en: "imperial consort style wedding cheongsam" },
                        { ja: "龍鳳双喜の王朝礼装", en: "dragon phoenix wedding dress, dynastic ceremonial cheongsam" },
                        { ja: "金珠垂飾の宮廷婚礼旗袍", en: "palace wedding cheongsam, gold bead tassels" },
                        { ja: "玉飾り王朝花嫁旗袍", en: "jade adorned dynastic bridal cheongsam" }
                      ]
                    },
                    {
                      title: "🏘 民間婚礼",
                      items: [
                        { ja: "民間婚礼の紅金旗袍", en: "traditional folk wedding cheongsam, red and gold" },
                        { ja: "町娘花嫁の祝福旗袍", en: "town bride celebration cheongsam" },
                        { ja: "家紋刺繍の嫁入り旗袍", en: "family crest embroidered bridal cheongsam" },
                        { ja: "温かな祝宴の婚礼旗袍", en: "warm banquet wedding cheongsam" },
                        { ja: "白花髪飾りの素朴花嫁旗袍", en: "simple bridal cheongsam with white floral hair ornament" }
                      ]
                    },
                    {
                      title: "💎 豪奢花嫁",
                      items: [
                        { ja: "豪奢宝飾の花嫁旗袍", en: "luxurious jeweled bridal cheongsam" },
                        { ja: "真珠ヴェール重ね旗袍", en: "bridal cheongsam with pearl veil layers" },
                        { ja: "長い引き裾の豪華婚礼旗袍", en: "opulent wedding cheongsam with long train" },
                        { ja: "金刺繍総張りの王美花嫁旗袍", en: "fully gold embroidered majestic bridal cheongsam" },
                        { ja: "宝玉ベルトの煌めき婚礼旗袍", en: "gem belt bridal cheongsam, glittering wedding style" }
                      ]
                    },
                    {
                      title: "🥀 悲恋婚礼",
                      items: [
                        { ja: "悲恋の薄紅婚礼旗袍", en: "tragic romance wedding cheongsam, pale crimson" },
                        { ja: "雨夜の花嫁旗袍", en: "rainy night bridal cheongsam, melancholic elegance" },
                        { ja: "散った花弁の未練婚礼旗袍", en: "fallen petals bridal cheongsam, lingering sorrow" },
                        { ja: "仄暗い灯下の悲哀花嫁旗袍", en: "gloomy bridal cheongsam under dim lanterns" },
                        { ja: "血紅の契り婚礼旗袍", en: "blood red vow bridal cheongsam, tragic wedding mood" }
                      ]
                    }
                  ]
                },
                {
                  title: "🎭 舞踏会",
                  children: [
                    {
                      title: "🎭 仮面舞踏会",
                      items: [
                        { ja: "仮面舞踏会旗袍", en: "masquerade ball cheongsam" },
                        { ja: "羽根仮面の夜宴旗袍", en: "feather mask evening cheongsam" },
                        { ja: "黒レース仮面の秘宴旗袍", en: "black lace mask secret ball cheongsam" },
                        { ja: "仮面リボン付き舞会旗袍", en: "ballroom cheongsam with masquerade ribbon mask" },
                        { ja: "仮面と長手袋の貴婦人旗袍", en: "masquerade lady cheongsam with long gloves" }
                      ]
                    },
                    {
                      title: "🏰 宮廷夜会",
                      items: [
                        { ja: "宮廷夜会の光沢旗袍", en: "court evening gala cheongsam" },
                        { ja: "シャンデリア光沢の夜会旗袍", en: "chandelier sheen evening cheongsam" },
                        { ja: "宝石胸飾りの夜宴旗袍", en: "jewel brooch court party cheongsam" },
                        { ja: "ドレープ裾の宮廷舞会旗袍", en: "court ball cheongsam with draped hem" },
                        { ja: "舞踏会用グローブ旗袍", en: "ballroom gloves with cheongsam" }
                      ]
                    },
                    {
                      title: "🌍 西洋融合",
                      children: [
                        {
                          title: "🦇 ゴシック融合",
                          children: [
                            {
                              title: "⛪ 聖堂寄り",
                              items: [
                                { ja: "聖堂装飾の荘厳旗袍", en: "cathedral-inspired gothic cheongsam" },
                                { ja: "ステンドグラス彩の礼拝旗袍", en: "stained glass gothic cheongsam" },
                                { ja: "修道院レースの静謐旗袍", en: "monastic lace gothic cheongsam" },
                                { ja: "聖歌隊風ハイカラー旗袍", en: "choir-inspired high collar gothic cheongsam" },
                                { ja: "祭壇金刺繍の聖堂旗袍", en: "altar gold embroidery gothic cheongsam" }
                              ]
                            },
                            {
                              title: "🦇 吸血貴族寄り",
                              children: [
                                {
                                  title: "🏰 古城夜宴",
                                  items: [
                                    { ja: "古城夜宴の紅黒旗袍", en: "red and black cheongsam for a castle night banquet" },
                                    { ja: "夜城貴婦人の長裾旗袍", en: "castle noblewoman long hem gothic cheongsam" },
                                    { ja: "古城シャンデリアの夜宴旗袍", en: "gothic cheongsam under a castle chandelier" },
                                    { ja: "蝋燭灯の晩餐旗袍", en: "candlelit banquet gothic cheongsam" },
                                    { ja: "古城階段を降りる貴族旗袍", en: "aristocratic gothic cheongsam descending a castle stair" }
                                  ]
                                },
                                {
                                  title: "🌹 血薔薇",
                                  items: [
                                    { ja: "血薔薇コルセット旗袍", en: "blood rose corseted gothic cheongsam" },
                                    { ja: "赤薔薇刺繍の吸血貴族旗袍", en: "vampiric noble cheongsam with crimson rose embroidery" },
                                    { ja: "棘薔薇飾りの妖艶旗袍", en: "alluring gothic cheongsam with thorn rose ornament" },
                                    { ja: "血露薔薇の胸元旗袍", en: "gothic cheongsam with blood-dewed rose bust detail" },
                                    { ja: "深紅花弁を纏う夜会旗袍", en: "gothic party cheongsam draped in deep crimson petals" }
                                  ]
                                },
                                {
                                  title: "⚰ 棺の花嫁",
                                  children: [
                                    {
                                      title: "🤍 純白喪花嫁",
                                      items: [
                                        { ja: "純白喪花嫁の旗袍", en: "pure white mourning bride cheongsam" },
                                        { ja: "白百合を抱く喪花嫁旗袍", en: "mourning bridal cheongsam holding white lilies" },
                                        { ja: "白肌を際立てる追悼花嫁旗袍", en: "memorial bride cheongsam emphasizing pale skin" },
                                        { ja: "静かな献花の純白旗袍", en: "pure white cheongsam for a silent floral offering" },
                                        { ja: "薄氷のような喪色花嫁旗袍", en: "mourning bride cheongsam like thin ice" }
                                      ]
                                    },
                                    {
                                      title: "🖤 黒ヴェール花嫁",
                                      items: [
                                        { ja: "黒ヴェール合わせの棺姫旗袍", en: "coffin princess cheongsam with black veil" },
                                        { ja: "黒レース喪花嫁旗袍", en: "mourning bride cheongsam with black lace" },
                                        { ja: "夜霧を纏う黒ヴェール旗袍", en: "black veil cheongsam wrapped in night mist" },
                                        { ja: "漆黒の誓いを宿す花嫁旗袍", en: "bridal cheongsam bearing a jet-black vow" },
                                        { ja: "棺前に立つ黒帳花嫁旗袍", en: "black draped bridal cheongsam standing before a coffin" }
                                      ]
                                    },
                                    {
                                      title: "⛓ 封印契約花嫁",
                                      items: [
                                        { ja: "封印棺の契約花嫁旗袍", en: "sealed coffin contract bride cheongsam" },
                                        { ja: "封蝋の契約文を帯びた花嫁旗袍", en: "bridal cheongsam bearing a sealed contract scroll" },
                                        { ja: "呪印が胸元に刻まれた契約花嫁旗袍", en: "contract bride cheongsam marked with a cursed sigil on the chest" },
                                        { ja: "古い盟約に縛られた花嫁旗袍", en: "bridal cheongsam bound by an ancient pact" },
                                        { ja: "鍵飾りを下げた封印花嫁旗袍", en: "sealed bride cheongsam with a hanging key ornament" }
                                      ]
                                    },
                                    {
                                      title: "💤 永眠の姫",
                                      items: [
                                        { ja: "永眠の誓いを宿す花嫁旗袍", en: "bridal gothic cheongsam bearing an oath of eternal sleep" },
                                        { ja: "眠り姫めいた棺花嫁旗袍", en: "coffin bride cheongsam like a sleeping princess" },
                                        { ja: "微睡みの微笑を湛えた永眠旗袍", en: "eternal sleep cheongsam with a drowsy smile" },
                                        { ja: "夢と葬送の境に立つ花嫁旗袍", en: "bridal cheongsam standing between dream and requiem" },
                                        { ja: "静かな永眠室の姫君旗袍", en: "princess cheongsam in a quiet chamber of eternal sleep" }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  title: "🌙 月下貴族",
                                  children: [
                                    {
                                      title: "🌌 月光露台",
                                      items: [
                                        { ja: "蒼月の露台に立つ貴族旗袍", en: "aristocratic cheongsam standing on a blue moon terrace" },
                                        { ja: "月光を浴びる銀縁旗袍", en: "silver-trim gothic cheongsam bathed in moonlight" },
                                        { ja: "欄干にもたれる月下夜会旗袍", en: "moonlit soirée cheongsam leaning on a terrace balustrade" },
                                        { ja: "星灯りを受ける露台貴婦人旗袍", en: "terrace noblewoman cheongsam lit by starlight" },
                                        { ja: "大理石露台の月光社交旗袍", en: "moonlight social cheongsam on a marble terrace" }
                                      ]
                                    },
                                    {
                                      title: "🌫 夜霧庭園",
                                      items: [
                                        { ja: "夜霧庭園の貴族旗袍", en: "aristocratic cheongsam in a night-mist garden" },
                                        { ja: "薔薇園に沈む月下旗袍", en: "moonlit cheongsam sinking into a rose garden" },
                                        { ja: "霧と生垣の回廊旗袍", en: "gothic cheongsam in a hedge corridor filled with mist" },
                                        { ja: "月霧の噴水庭園旗袍", en: "moon-mist fountain garden cheongsam" },
                                        { ja: "夜露を帯びた庭園夜会旗袍", en: "garden soirée cheongsam touched by night dew" }
                                      ]
                                    },
                                    {
                                      title: "💎 蒼月宝飾",
                                      items: [
                                        { ja: "蒼月宝石の首飾り旗袍", en: "cheongsam with blue moon gemstone necklace" },
                                        { ja: "青銀宝飾の貴族夜宴旗袍", en: "aristocratic banquet cheongsam with blue-silver jewelry" },
                                        { ja: "月石胸飾りの妖美旗袍", en: "bewitching cheongsam with a moonstone breast ornament" },
                                        { ja: "宝冠と耳飾りの月下貴族旗袍", en: "moonlit noble cheongsam with jeweled crown and earrings" },
                                        { ja: "蒼月の宝珠を宿す夜会旗袍", en: "party cheongsam bearing a blue moon jewel" }
                                      ]
                                    },
                                    {
                                      title: "🩸 血月夜宴",
                                      children: [
                                        {
                                          title: "🍽 禁断晩餐",
                                          items: [
                                            { ja: "禁断晩餐の血月旗袍", en: "blood moon cheongsam for a forbidden banquet" },
                                            { ja: "黒燭台に囲まれた晩餐旗袍", en: "banquet cheongsam surrounded by black candelabras" },
                                            { ja: "深紅の皿が並ぶ夜宴旗袍", en: "night banquet cheongsam before a table of crimson plates" },
                                            { ja: "古城晩餐会の貴婦人旗袍", en: "noblewoman cheongsam for an ancient castle supper" },
                                            { ja: "禁じられた祝杯を待つ夜会旗袍", en: "soirée cheongsam awaiting a forbidden toast" }
                                          ]
                                        },
                                        {
                                          title: "🍷 血杯儀式",
                                          items: [
                                            { ja: "血杯儀式の深紅旗袍", en: "crimson cheongsam for a blood chalice ritual" },
                                            { ja: "儀式杯を捧げる吸血旗袍", en: "vampiric cheongsam offering a ritual goblet" },
                                            { ja: "赤い杯と宝飾胸元の夜宴旗袍", en: "blood moon banquet cheongsam with a red chalice and jeweled breastpiece" },
                                            { ja: "祭壇前の血杯契約旗袍", en: "blood chalice pact cheongsam before an altar" },
                                            { ja: "紅酒めく儀式光を宿す旗袍", en: "ritual cheongsam infused with wine-red ceremonial light" }
                                          ]
                                        },
                                        {
                                          title: "💃 紅月舞踏",
                                          items: [
                                            { ja: "紅月舞踏の舞会旗袍", en: "ballroom cheongsam for a crimson moon dance" },
                                            { ja: "血月の円舞曲を踊る旗袍", en: "cheongsam dancing a waltz beneath the blood moon" },
                                            { ja: "深紅ドレープの舞踏会旗袍", en: "ballroom cheongsam with deep crimson drapes" },
                                            { ja: "紅月ステップを描く夜会旗袍", en: "soirée cheongsam tracing steps under the crimson moon" },
                                            { ja: "血色シャンデリアの舞姫旗袍", en: "dancing cheongsam beneath blood-colored chandeliers" }
                                          ]
                                        },
                                        {
                                          title: "👑 夜宴の支配者",
                                          children: [
                                            {
                                              title: "👸 玉座の女主人",
                                              items: [
                                                { ja: "玉座の女主人たる血月旗袍", en: "blood moon cheongsam of the mistress upon the throne" },
                                                { ja: "王座に座す夜宴女主人旗袍", en: "night banquet cheongsam for a hostess seated upon the throne" },
                                                { ja: "深紅玉座に映える支配者旗袍", en: "dominating cheongsam shining against a crimson throne" },
                                                { ja: "貴族を跪かせる玉座旗袍", en: "throne cheongsam that makes nobles kneel" },
                                                { ja: "冠と長手袋の玉座女主人旗袍", en: "throne mistress cheongsam with a crown and long gloves" }
                                              ]
                                            },
                                            {
                                              title: "👁 宴の支配眼差し",
                                              items: [
                                                { ja: "宴を黙らせる支配眼差し旗袍", en: "cheongsam with a commanding gaze that silences the banquet" },
                                                { ja: "一瞥で従わせる夜宴旗袍", en: "night banquet cheongsam that subdues with a single glance" },
                                                { ja: "視線だけで命じる血月旗袍", en: "blood moon cheongsam that commands by gaze alone" },
                                                { ja: "妖艶な眼差しで支配する貴婦人旗袍", en: "noblewoman cheongsam ruling with a bewitching stare" },
                                                { ja: "微笑と冷眼を湛えた支配者旗袍", en: "dominating cheongsam bearing both a smile and a cold gaze" }
                                              ]
                                            },
                                            {
                                              title: "🍷 契約の杯",
                                              children: [
                                                {
                                                  title: "🤝 血盟の乾杯",
                                                  items: [
                                                    { ja: "血盟の乾杯を交わす血月旗袍", en: "blood moon cheongsam sharing a toast of blood alliance" },
                                                    { ja: "深紅の盃で血盟を結ぶ夜宴旗袍", en: "night banquet cheongsam forging a blood alliance with crimson goblets" },
                                                    { ja: "誓いの乾杯を捧げる貴族旗袍", en: "noble cheongsam offering a ceremonial toast of oath" },
                                                    { ja: "杯を掲げて盟約を刻む支配者旗袍", en: "dominating cheongsam raising a goblet to engrave an alliance" },
                                                    { ja: "血の契りを祝う夜宴の乾杯旗袍", en: "night banquet cheongsam celebrating a blood-bound pact with a toast" }
                                                  ]
                                                },
                                                {
                                                  title: "☠ 儀礼の毒杯",
                                                  children: [
                                                    {
                                                      title: "🍯 甘毒の乾杯",
                                                      items: [
                                                        { ja: "甘毒の乾杯を誘う血月旗袍", en: "blood moon cheongsam inviting a sweetly poisoned toast" },
                                                        { ja: "甘い微笑で甘毒を差し出す夜宴旗袍", en: "night banquet cheongsam offering sweet poison with a gentle smile" },
                                                        { ja: "蜜の香りを帯びた毒杯旗袍", en: "poison-cup cheongsam carrying the scent of honey" },
                                                        { ja: "甘露に紛れた毒を宿す契約旗袍", en: "pact cheongsam harboring poison hidden in nectar" },
                                                        { ja: "優雅な乾杯に死を混ぜる貴婦人旗袍", en: "noblewoman cheongsam mixing death into an elegant toast" }
                                                      ]
                                                    },
                                                    {
                                                      title: "🥈 銀盃の毒",
                                                      items: [
                                                        { ja: "銀盃に毒を沈めた血月旗袍", en: "blood moon cheongsam with poison sunk into a silver cup" },
                                                        { ja: "銀の盃を捧げる毒杯儀礼旗袍", en: "ceremonial poison-cup cheongsam presenting a silver goblet" },
                                                        { ja: "冷たい銀光に毒を隠す夜宴旗袍", en: "night banquet cheongsam hiding poison in cold silver gleam" },
                                                        { ja: "銀盃の縁に死をなぞる契約旗袍", en: "pact cheongsam tracing death along the rim of a silver cup" },
                                                        { ja: "磨かれた銀杯に沈黙の毒を満たす旗袍", en: "cheongsam filling a polished silver chalice with silent poison" }
                                                      ]
                                                    },
                                                    {
                                                      title: "💋 接吻前の毒杯",
                                                      children: [
                                                        {
                                                          title: "🍷 誘惑の一口",
                                                          items: [
                                                            { ja: "誘惑の一口を差し出す血月旗袍", en: "blood moon cheongsam offering a seductive first sip" },
                                                            { ja: "ひと口だけと囁く毒杯旗袍", en: "poison-cup cheongsam whispering just one sip" },
                                                            { ja: "艶やかな指先で一口を誘う夜宴旗袍", en: "night banquet cheongsam inviting a sip with alluring fingertips" },
                                                            { ja: "甘い香りで杯口へ誘導する契約旗袍", en: "pact cheongsam luring one toward the rim with a sweet scent" },
                                                            { ja: "最初の一口に罠を溶かす貴婦人旗袍", en: "noblewoman cheongsam dissolving a trap into the very first sip" }
                                                          ]
                                                        },
                                                        {
                                                          title: "👄 唇寸前",
                                                          items: [
                                                            { ja: "唇寸前で毒杯を止める血月旗袍", en: "blood moon cheongsam halting the poison cup just before the lips" },
                                                            { ja: "触れそうで触れない距離の毒杯旗袍", en: "poison-cup cheongsam at a distance where lips almost touch" },
                                                            { ja: "杯縁を唇寸前に掲げる夜宴旗袍", en: "night banquet cheongsam lifting the rim just shy of the lips" },
                                                            { ja: "口づけの直前で揺れる契約毒杯旗袍", en: "pact poison-cup cheongsam wavering at the instant before a kiss" },
                                                            { ja: "唇の熱を測るように迫る前奏旗袍", en: "prelude cheongsam pressing close as if measuring the warmth of lips" }
                                                          ]
                                                        },
                                                        {
                                                          title: "🕸 甘やかな罠",
                                                          children: [
                                                            {
                                                              title: "🍯 蜜囁き",
                                                              items: [
                                                                { ja: "蜜囁きで毒へ誘う血月旗袍", en: "blood moon cheongsam luring one toward poison with honeyed whispers" },
                                                                { ja: "耳元で甘く囁く毒杯旗袍", en: "poison-cup cheongsam whispering sweetly at the ear" },
                                                                { ja: "囁きだけで警戒を溶かす夜宴旗袍", en: "night banquet cheongsam melting caution by whisper alone" },
                                                                { ja: "甘言を絡めて杯へ導く契約旗袍", en: "pact cheongsam twining sweet words to guide one to the cup" },
                                                                { ja: "蜜のような声で心をほどく貴婦人旗袍", en: "noblewoman cheongsam loosening the heart with a honey-like voice" }
                                                              ]
                                                            },
                                                            {
                                                              title: "🤗 抱擁誘導",
                                                              items: [
                                                                { ja: "抱擁へ導く甘罠の血月旗袍", en: "blood moon cheongsam of a sweet trap steering one into an embrace" },
                                                                { ja: "腕の中へ誘って毒杯を差し出す夜宴旗袍", en: "night banquet cheongsam drawing one into her arms before offering a poison cup" },
                                                                { ja: "寄り添う距離で罠を閉じる契約旗袍", en: "pact cheongsam closing the trap at a nestling distance" },
                                                                { ja: "温もりを餌に近づかせる毒杯旗袍", en: "poison-cup cheongsam luring closer with warmth as bait" },
                                                                { ja: "抱き寄せる気配で逃げ道を奪う貴婦人旗袍", en: "noblewoman cheongsam stealing every escape with the promise of a pull close" }
                                                              ]
                                                            },
                                                            {
                                                              title: "🙂 微笑毒",
                                                              children: [
                                                                {
                                                                  title: "🤍 無垢な笑み",
                                                                  items: [
                                                                    { ja: "無垢な笑みで毒を隠す血月旗袍", en: "blood moon cheongsam hiding poison behind an innocent smile" },
                                                                    { ja: "少女めいた微笑で警戒を解く夜宴旗袍", en: "night banquet cheongsam undoing caution with a girlish smile" },
                                                                    { ja: "澄んだ目元に毒意を沈めた契約旗袍", en: "pact cheongsam sinking lethal intent into clear-eyed softness" },
                                                                    { ja: "やわらかな微笑みの奥に罠を忍ばせる毒杯旗袍", en: "poison-cup cheongsam hiding a trap behind a gentle smile" },
                                                                    { ja: "無垢さを仮面にした甘毒の貴婦人旗袍", en: "sweet-poison noblewoman cheongsam using innocence as a mask" }
                                                                  ]
                                                                },
                                                                {
                                                                  title: "👒 貴婦人の慈悲",
                                                                  items: [
                                                                    { ja: "慈悲深げな笑みで毒を勧める血月旗袍", en: "blood moon cheongsam offering poison with a smile of seeming mercy" },
                                                                    { ja: "救済めいた微笑を浮かべる夜宴旗袍", en: "night banquet cheongsam wearing a smile that resembles salvation" },
                                                                    { ja: "優雅な慈悲の仮面を被る契約旗袍", en: "pact cheongsam donning the mask of elegant mercy" },
                                                                    { ja: "穏やかな眼差しで杯を差し出す毒杯旗袍", en: "poison-cup cheongsam presenting the cup with a calm gaze" },
                                                                    { ja: "許しを装って従属を招く貴婦人旗袍", en: "noblewoman cheongsam feigning forgiveness to invite submission" }
                                                                  ]
                                                                },
                                                                {
                                                                  title: "⚖ 処罰の予告",
                                                                  items: [
                                                                    { ja: "微笑の奥で処罰を告げる血月旗袍", en: "blood moon cheongsam announcing punishment behind a smile" },
                                                                    { ja: "笑みの端で運命を宣告する夜宴旗袍", en: "night banquet cheongsam sentencing fate at the corner of a smile" },
                                                                    { ja: "穏やかな表情で裁きを忍ばせる契約旗袍", en: "pact cheongsam concealing judgment within a composed expression" },
                                                                    { ja: "優しい声色で終わりを予告する毒杯旗袍", en: "poison-cup cheongsam foretelling the end in a gentle tone" },
                                                                    { ja: "微笑だけで恐怖を植えつける貴婦人旗袍", en: "noblewoman cheongsam planting fear with nothing but a smile" }
                                                                  ]
                                                                },
                                                                {
                                                                  title: "💋 甘やかな命令",
                                                                  children: [
                                                                    {
                                                                      title: "🥂 飲みなさい",
                                                                      items: [
                                                                        { ja: "飲みなさいと甘く命じる血月旗袍", en: "blood moon cheongsam sweetly commanding one to drink" },
                                                                        { ja: "盃を口元へ導き飲ませる夜宴旗袍", en: "night banquet cheongsam guiding the cup to the lips and making one drink" },
                                                                        { ja: "やさしい声で飲酒を命じる契約旗袍", en: "pact cheongsam ordering the drink in a gentle voice" },
                                                                        { ja: "逆らえぬ微笑で盃を傾けさせる毒杯旗袍", en: "poison-cup cheongsam making the chalice tilt beneath an irresistible smile" },
                                                                        { ja: "一口ずつ従わせる貴婦人旗袍", en: "noblewoman cheongsam drawing obedience sip by sip" }
                                                                      ]
                                                                    },
                                                                    {
                                                                      title: "👣 近づきなさい",
                                                                      items: [
                                                                        { ja: "近づきなさいと囁く血月旗袍", en: "blood moon cheongsam whispering come closer" },
                                                                        { ja: "歩み寄りを命じる夜宴旗袍", en: "night banquet cheongsam commanding an approach" },
                                                                        { ja: "逃がさぬ声色で距離を詰めさせる契約旗袍", en: "pact cheongsam closing the distance with an inescapable tone" },
                                                                        { ja: "指先ひとつで招き寄せる毒杯旗袍", en: "poison-cup cheongsam beckoning with a single finger" },
                                                                        { ja: "足を止めさせぬ甘命令の貴婦人旗袍", en: "noblewoman cheongsam using sweet orders that never let the feet stop" }
                                                                      ]
                                                                    },
                                                                    {
                                                                      title: "🧎 跪きなさい",
                                                                      children: [
                                                                        {
                                                                          title: "👑 玉座前の服従",
                                                                          items: [
                                                                            { ja: "玉座前で跪く血月旗袍", en: "blood moon cheongsam kneeling before the throne" },
                                                                            { ja: "玉座に向けて膝を折らせる夜宴旗袍", en: "night banquet cheongsam making one kneel toward the throne" },
                                                                            { ja: "王座の気配で服従を刻む契約旗袍", en: "pact cheongsam engraving submission through the aura of the throne" },
                                                                            { ja: "玉座前の静寂で従わせる毒杯旗袍", en: "poison-cup cheongsam forcing obedience in the silence before the throne" },
                                                                            { ja: "深紅の王座前で忠誠を誓わせる貴婦人旗袍", en: "noblewoman cheongsam making one swear loyalty before the crimson throne" }
                                                                          ]
                                                                        },
                                                                        {
                                                                          title: "🍷 盃前の忠誠",
                                                                          items: [
                                                                            { ja: "盃前で跪かせる血月旗袍", en: "blood moon cheongsam making one kneel before the cup" },
                                                                            { ja: "盃へ忠誠を捧げさせる夜宴旗袍", en: "night banquet cheongsam demanding loyalty be offered to the chalice" },
                                                                            { ja: "杯の前で膝を折らせる契約旗袍", en: "pact cheongsam making one kneel before the goblet" },
                                                                            { ja: "毒杯を見上げたまま従属させる毒杯旗袍", en: "poison-cup cheongsam subjugating one while they stare up at the poisoned cup" },
                                                                            { ja: "盃の誓いと共に忠義を刻む貴婦人旗袍", en: "noblewoman cheongsam engraving loyalty together with the oath of the cup" }
                                                                          ]
                                                                        },
                                                                        {
                                                                          title: "👁 視線で跪かせる",
                                                                          items: [
                                                                            { ja: "視線だけで跪かせる血月旗袍", en: "blood moon cheongsam making one kneel with nothing but a gaze" },
                                                                            { ja: "一瞥で膝を折らせる夜宴旗袍", en: "night banquet cheongsam making one kneel with a single glance" },
                                                                            { ja: "言葉なく服従を命じる契約旗袍", en: "pact cheongsam ordering obedience without a word" },
                                                                            { ja: "冷ややかな視線で屈服を刻む毒杯旗袍", en: "poison-cup cheongsam engraving submission through a cold gaze" },
                                                                            { ja: "眼差しだけで忠誠を奪う貴婦人旗袍", en: "noblewoman cheongsam stealing loyalty with nothing but her eyes" }
                                                                          ]
                                                                        },
                                                                        {
                                                                          title: "🕊 儀礼の接近",
                                                                          children: [
                                                                            {
                                                                              title: "💮 口づけの許可",
                                                                              items: [
                                                                                { ja: "口づけを許す血月旗袍", en: "blood moon cheongsam granting permission for a kiss" },
                                                                                { ja: "静かな頷きで口づけを許す夜宴旗袍", en: "night banquet cheongsam allowing a kiss with a quiet nod" },
                                                                                { ja: "儀礼として口づけを受け入れる契約旗袍", en: "pact cheongsam accepting a kiss as a formal rite" },
                                                                                { ja: "緊張の沈黙の中で口づけを許す貴婦人旗袍", en: "noblewoman cheongsam permitting a kiss amid tense silence" },
                                                                                { ja: "視線でそっと口づけを許す宮廷旗袍", en: "court cheongsam softly permitting a kiss through a gaze" }
                                                                              ]
                                                                            },
                                                                            {
                                                                              title: "✨ 唇の褒美",
                                                                              items: [
                                                                                { ja: "唇の褒美をほのめかす血月旗袍", en: "blood moon cheongsam hinting at the reward of lips" },
                                                                                { ja: "微笑みとともに褒美を与える夜宴旗袍", en: "night banquet cheongsam granting a reward with a smile" },
                                                                                { ja: "儀礼の終わりに褒美を授ける契約旗袍", en: "pact cheongsam bestowing a reward at the end of the rite" },
                                                                                { ja: "緊張をほどく褒美の口づけを示す貴婦人旗袍", en: "noblewoman cheongsam offering a relieving kiss as a reward" },
                                                                                { ja: "祝福のように唇の褒美を与える宮廷旗袍", en: "court cheongsam granting the reward of lips like a blessing" }
                                                                              ]
                                                                            },
                                                                            {
                                                                              title: "🌙 跪いたまま見上げる",
                                                                              items: [
                                                                                { ja: "跪いたまま見上げる血月旗袍", en: "blood moon cheongsam viewed from an upturned kneeling gaze" },
                                                                                { ja: "見上げる視線を受け止める夜宴旗袍", en: "night banquet cheongsam receiving an upward gaze" },
                                                                                { ja: "静かな距離で見上げられる契約旗袍", en: "pact cheongsam being looked up at across a quiet distance" },
                                                                                { ja: "月灯りの下で見上げる貴婦人旗袍", en: "noblewoman cheongsam looked up to beneath moonlight" },
                                                                                { ja: "言葉なく見上げられる宮廷旗袍", en: "court cheongsam beheld upward in silence" }
                                                                              ]
                                                                            },
                                                                            {
                                                                              title: "🕊 赦しとしての接吻",
                                                                              children: [
                                                                                {
                                                                                  title: "🤝 和解の印",
                                                                                  items: [
                                                                                    { ja: "和解の印として交わされる口づけ旗袍", en: "cheongsam with a kiss exchanged as a mark of reconciliation" },
                                                                                    { ja: "争いの終わりを告げる和解の口づけ旗袍", en: "cheongsam with a reconciling kiss that signals the end of conflict" },
                                                                                    { ja: "静かな停戦を示す和解の印の旗袍", en: "cheongsam bearing a kiss-mark of reconciliation that signals a quiet truce" },
                                                                                    { ja: "夜宴の緊張を解く和解の口づけ旗袍", en: "night banquet cheongsam with a reconciling kiss easing the tension" },
                                                                                    { ja: "契約の場をやわらげる和解の印の旗袍", en: "pact cheongsam with a kiss-mark of reconciliation softening the scene" }
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  title: "⚜ 儀礼の赦免",
                                                                                  items: [
                                                                                    { ja: "儀礼の赦免として授けられる口づけ旗袍", en: "cheongsam with a kiss bestowed as ceremonial absolution" },
                                                                                    { ja: "宮廷儀礼の赦免を思わせる口づけ旗袍", en: "court cheongsam evoking a kiss of ceremonial pardon" },
                                                                                    { ja: "罪を解くしるしとしての赦免の旗袍", en: "cheongsam with a pardoning sign that symbolically lifts blame" },
                                                                                    { ja: "厳かな赦しを宿す儀礼口づけの旗袍", en: "cheongsam carrying a solemn kiss of ritual forgiveness" },
                                                                                    { ja: "夜会の空気を変える赦免の口づけ旗袍", en: "cheongsam with a pardoning kiss that shifts the mood of the soirée" }
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  title: "🌙 月下の和睦",
                                                                                  children: [
                                                                                    {
                                                                                      title: "🕊 露台の停戦",
                                                                                      items: [
                                                                                        { ja: "露台の停戦を告げる和睦の旗袍", en: "cheongsam announcing a truce upon the terrace" },
                                                                                        { ja: "欄干越しに交わされる停戦の口づけ旗袍", en: "cheongsam with a truce-kiss exchanged across the terrace railing" },
                                                                                        { ja: "夜露の露台に立つ停戦の宮廷旗袍", en: "court cheongsam standing on a dewlit terrace of truce" },
                                                                                        { ja: "静かな露台で争いを解く和睦の旗袍", en: "cheongsam resolving conflict upon a quiet terrace" },
                                                                                        { ja: "露台の月影に包まれた停戦の旗袍", en: "cheongsam wrapped in terrace moonshadows of truce" }
                                                                                      ]
                                                                                    },
                                                                                    {
                                                                                      title: "🌕 月光の誓い直し",
                                                                                      items: [
                                                                                        { ja: "月光の下で誓いを結び直す和睦の旗袍", en: "cheongsam renewing a vow beneath moonlight" },
                                                                                        { ja: "蒼い月光に照らされる誓い直しの旗袍", en: "cheongsam illuminated by blue moonlight for a renewed vow" },
                                                                                        { ja: "夜会の果てに誓いを結び直す宮廷旗袍", en: "court cheongsam renewing a promise at the end of the soirée" },
                                                                                        { ja: "月影を証人にした和睦の誓約旗袍", en: "vow-bound cheongsam taking the moonshadow as witness" },
                                                                                        { ja: "月灯りの静寂で契りを編み直す旗袍", en: "cheongsam reweaving a pledge in moonlit silence" }
                                                                                      ]
                                                                                    },
                                                                                    {
                                                                                      title: "🌬 夜風の和解",
                                                                                      items: [
                                                                                        { ja: "夜風に溶ける和解の口づけ旗袍", en: "cheongsam with a reconciling kiss dissolving into the night breeze" },
                                                                                        { ja: "頬を撫でる夜風とともに和らぐ旗袍", en: "cheongsam softening along with the caress of the night wind" },
                                                                                        { ja: "風に揺れる髪越しに和解を交わす旗袍", en: "cheongsam exchanging reconciliation through hair stirred by the wind" },
                                                                                        { ja: "庭園の夜風をまとった和睦の旗袍", en: "cheongsam draped in the garden's night breeze of accord" },
                                                                                        { ja: "静かな風音にほどける月夜の緊張旗袍", en: "cheongsam easing moonlit tension into the hush of the wind" }
                                                                                      ]
                                                                                    },
                                                                                    {
                                                                                      title: "🔵 蒼月の沈黙",
                                                                                      children: [
                                                                                        {
                                                                                          title: "👁 視線だけの赦し",
                                                                                          items: [
                                                                                            { ja: "視線だけの赦しを宿す蒼月旗袍", en: "blue-moon cheongsam bearing forgiveness through gaze alone" },
                                                                                            { ja: "一言もなく赦しを伝える視線の旗袍", en: "cheongsam conveying forgiveness through a wordless gaze" },
                                                                                            { ja: "見つめ合うだけで和らぐ蒼月の宮廷旗袍", en: "court cheongsam softening into accord through mutual glances under a blue moon" },
                                                                                            { ja: "瞳の静けさで赦しを示す和睦の旗袍", en: "reconciliation cheongsam signaling forgiveness through the calm of the eyes" },
                                                                                            { ja: "視線の余韻だけが残る蒼月の旗袍", en: "blue-moon cheongsam leaving only the afterglow of a gaze" }
                                                                                          ]
                                                                                        },
                                                                                        {
                                                                                          title: "🔷 青い余韻",
                                                                                          children: [
                                                                                            {
                                                                                              title: "🌕 月光の残響",
                                                                                              children: [
                                                                                                {
                                                                                                  title: "🌗 月輪の反射",
                                                                                                  items: [
                                                                                                    { ja: "月輪の反射を纏う蒼月旗袍", en: "blue-moon cheongsam draped in the reflection of the lunar halo" },
                                                                                                    { ja: "円環の月光を映す和解旗袍", en: "reconciliation cheongsam reflecting ringed moonlight" },
                                                                                                    { ja: "月輪のきらめきが裾に回る宮廷旗袍", en: "court cheongsam with the glimmer of a lunar halo circling its hem" },
                                                                                                    { ja: "欄干に返る月輪光を映した旗袍", en: "cheongsam reflecting lunar-halo light bouncing off the balustrade" },
                                                                                                    { ja: "青白い月輪の反射を抱く夜宴旗袍", en: "night-banquet cheongsam holding the reflection of a pale lunar halo" }
                                                                                                  ]
                                                                                                },
                                                                                                {
                                                                                                  title: "♨ 青白い残熱",
                                                                                                  items: [
                                                                                                    { ja: "青白い残熱を宿す蒼月旗袍", en: "blue-moon cheongsam holding a pale residual warmth" },
                                                                                                    { ja: "冷たい月光の奥に熱を残す和解旗袍", en: "reconciliation cheongsam leaving warmth beneath cold moonlight" },
                                                                                                    { ja: "消え切らない青い残熱を帯びた宮廷旗袍", en: "court cheongsam carrying an undying pale-blue warmth" },
                                                                                                    { ja: "静けさの底に熱を沈めた夜宴旗袍", en: "night-banquet cheongsam with warmth sunk beneath stillness" },
                                                                                                    { ja: "月光の後に残るぬくもりを秘めた旗袍", en: "cheongsam hiding the warmth left after moonlight" }
                                                                                                  ]
                                                                                                },
                                                                                                {
                                                                                                  title: "💧 露に滲む光",
                                                                                                  children: [
                                                                                                    {
                                                                                                      title: "💎 露珠の月映り",
                                                                                                      children: [
                                                                                                        {
                                                                                                          title: "🌙 月輪の滴",
                                                                                                          items: [
                                                                                                            { ja: "月輪の滴を揺らす蒼月旗袍", en: "blue-moon cheongsam swaying with droplets of the lunar halo" },
                                                                                                            { ja: "露玉の中に月輪を沈めた和解旗袍", en: "reconciliation cheongsam sinking a moon halo into dew gems" },
                                                                                                            { ja: "滴る月環を胸元に宿す宮廷旗袍", en: "court cheongsam bearing dripping moon rings across the chest" },
                                                                                                            { ja: "裾先に月輪の滴を連ねた夜宴旗袍", en: "night-banquet cheongsam lined with lunar-halo droplets along the hem" },
                                                                                                            { ja: "一粒ごとに月輪が宿る露光旗袍", en: "dewlit cheongsam with a lunar halo resting in every single drop" }
                                                                                                          ]
                                                                                                        },
                                                                                                        {
                                                                                                          title: "🥈 銀露の反射",
                                                                                                          items: [
                                                                                                            { ja: "銀露の反射を散らす蒼月旗袍", en: "blue-moon cheongsam scattering reflections of silver dew" },
                                                                                                            { ja: "銀露のひかりを縫い込んだ和解旗袍", en: "reconciliation cheongsam stitched with the glow of silver dew" },
                                                                                                            { ja: "露面の銀反射が袖に走る宮廷旗袍", en: "court cheongsam with silver reflections racing across its sleeves" },
                                                                                                            { ja: "夜露の銀返しを裾に宿す夜宴旗袍", en: "night-banquet cheongsam bearing silver returns of night dew at the hem" },
                                                                                                            { ja: "白銀の露反射で輪郭が浮く旗袍", en: "cheongsam whose outline rises through silver dew reflections" }
                                                                                                          ]
                                                                                                        },
                                                                                                        {
                                                                                                          title: "🪞 しずくの鏡",
                                                                                                          children: [
                                                                                                            {
                                                                                                              title: "🌙 月を返す鏡露",
                                                                                                              items: [
                                                                                                                { ja: "月を返す鏡露を散らす蒼月旗袍", en: "blue-moon cheongsam scattering mirror-dew that returns the moon" },
                                                                                                                { ja: "鏡露に月輪を返す和解旗袍", en: "reconciliation cheongsam reflecting a lunar halo through mirror dew" },
                                                                                                                { ja: "胸元の鏡露が月相を返す宮廷旗袍", en: "court cheongsam whose chest mirror-dew returns the phases of the moon" },
                                                                                                                { ja: "裾先の鏡露が月景を返す夜宴旗袍", en: "night-banquet cheongsam with hemline mirror-dew returning the moonlit scene" },
                                                                                                                { ja: "ひとしずくごとに月を返す鏡露旗袍", en: "mirror-dew cheongsam returning the moon from every single droplet" }
                                                                                                              ]
                                                                                                            },
                                                                                                            {
                                                                                                              title: "🌀 歪む月景",
                                                                                                              children: [
                                                                                                                {
                                                                                                                  title: "🌊 ゆがむ水月",
                                                                                                                  items: [
                                                                                                                    { ja: "ゆがむ水月を宿す蒼月旗袍", en: "blue-moon cheongsam bearing a water-moon warped by ripples" },
                                                                                                                    { ja: "露鏡の水月が揺れて崩れる和解旗袍", en: "reconciliation cheongsam with a water-moon in dew mirrors trembling out of shape" },
                                                                                                                    { ja: "胸元にゆがむ水月を浮かべる宮廷旗袍", en: "court cheongsam floating a warped water-moon across the chest" },
                                                                                                                    { ja: "裾の露面で水月が波打つ夜宴旗袍", en: "night-banquet cheongsam with a water-moon rippling across dew at the hem" },
                                                                                                                    { ja: "しずくの奥で水月がゆがみ続ける旗袍", en: "cheongsam where the water-moon keeps warping deep inside each droplet" }
                                                                                                                  ]
                                                                                                                },
                                                                                                                {
                                                                                                                  title: "🫧 波紋の月像",
                                                                                                                  items: [
                                                                                                                    { ja: "波紋の月像を散らす蒼月旗袍", en: "blue-moon cheongsam scattering lunar images shaped by ripples" },
                                                                                                                    { ja: "露珠の波紋に月像が揺れる和解旗袍", en: "reconciliation cheongsam with moon-images wavering in ripples across dew beads" },
                                                                                                                    { ja: "胸元へ波紋の月像を重ねる宮廷旗袍", en: "court cheongsam layering ripple-born moon-images over the chest" },
                                                                                                                    { ja: "波紋で砕けた月像を裾に映す夜宴旗袍", en: "night-banquet cheongsam reflecting moon-images broken by ripples at the hem" },
                                                                                                                    { ja: "滴るたびに月像が波紋でほどける旗袍", en: "cheongsam whose moon-images loosen into ripples with every falling drop" }
                                                                                                                  ]
                                                                                                                },
                                                                                                                {
                                                                                                                  title: "🫠 崩れる反映",
                                                                                                                  items: [
                                                                                                                    { ja: "崩れる反映を抱く蒼月旗袍", en: "blue-moon cheongsam holding collapsing reflections" },
                                                                                                                    { ja: "露鏡の反映が崩れ落ちる和解旗袍", en: "reconciliation cheongsam where reflections in dew mirrors crumble away" },
                                                                                                                    { ja: "胸元で月の反映がほどける宮廷旗袍", en: "court cheongsam with moon reflections unraveling across the chest" },
                                                                                                                    { ja: "裾先の露反映が崩れる夜宴旗袍", en: "night-banquet cheongsam with dew reflections collapsing at the hemline" },
                                                                                                                    { ja: "しずくの底で反映が静かに崩れる旗袍", en: "cheongsam where reflections quietly cave in at the bottom of each droplet" }
                                                                                                                  ]
                                                                                                                },
                                                                                                                {
                                                                                                                  title: "👁 幻視の揺らぎ",
                                                                                                                  children: [
                                                                                                                    {
                                                                                                                      title: "🌫 見えてはいけない月",
                                                                                                                      items: [
                                                                                                                        { ja: "見えてはいけない月を宿す蒼月旗袍", en: "blue-moon cheongsam bearing a moon that should never be seen" },
                                                                                                                        { ja: "露の奥に禁じられた月が滲む和解旗袍", en: "reconciliation cheongsam with a forbidden moon seeping behind the dew" },
                                                                                                                        { ja: "胸元に見えてはいけない月影を抱く宮廷旗袍", en: "court cheongsam cradling an unseen moon-shadow across the chest" },
                                                                                                                        { ja: "裾先の露鏡に禁月が浮かぶ夜宴旗袍", en: "night-banquet cheongsam with a forbidden moon rising in dew mirrors at the hem" },
                                                                                                                        { ja: "一滴ごとに秘された月を閉じた旗袍", en: "cheongsam sealing a hidden moon into every single drop" }
                                                                                                                      ]
                                                                                                                    },
                                                                                                                    {
                                                                                                                      title: "🫧 露越しの幻月",
                                                                                                                      items: [
                                                                                                                        { ja: "露越しの幻月をまとう蒼月旗袍", en: "blue-moon cheongsam draped in an illusory moon seen through dew" },
                                                                                                                        { ja: "しずく越しの幻月が揺らめく和解旗袍", en: "reconciliation cheongsam with an illusory moon wavering through droplets" },
                                                                                                                        { ja: "胸元の露珠に幻月を閉じ込めた宮廷旗袍", en: "court cheongsam trapping an illusory moon inside dew-beads at the chest" },
                                                                                                                        { ja: "裾の露面で幻月がほどける夜宴旗袍", en: "night-banquet cheongsam where an illusory moon loosens across dew at the hem" },
                                                                                                                        { ja: "露の膜ごと幻月を抱く旗袍", en: "cheongsam holding an illusory moon within the very film of dew" }
                                                                                                                      ]
                                                                                                                    },
                                                                                                                    {
                                                                                                                      title: "👁‍🗨 月視の錯覚",
                                                                                                                      items: [
                                                                                                                        { ja: "月視の錯覚を帯びた蒼月旗袍", en: "blue-moon cheongsam carrying the illusion of lunar sight" },
                                                                                                                        { ja: "月を見るたび錯覚が深まる和解旗袍", en: "reconciliation cheongsam deepening the illusion whenever the moon is seen" },
                                                                                                                        { ja: "胸元で月視がずれる宮廷旗袍", en: "court cheongsam with moon-sight slipping out of alignment across the chest" },
                                                                                                                        { ja: "露鏡のたびに月視が狂う夜宴旗袍", en: "night-banquet cheongsam where every dew mirror distorts lunar sight" },
                                                                                                                        { ja: "視線の奥に月の錯覚を沈めた旗袍", en: "cheongsam sinking a lunar illusion deep behind the gaze" }
                                                                                                                      ]
                                                                                                                    },
                                                                                                                    {
                                                                                                                      title: "🕯 静かな月狂い",
                                                                                                                      items: [
                                                                                                                        { ja: "微笑に潜む狂香をまとう月夜旗袍", en: "moonlit cheongsam draped in madness hidden inside a smile" },
                                                                                                                        { ja: "囁きの芳香が静かに侵食する蒼月旗袍", en: "blue-moon cheongsam quietly eroded by the perfume of whispers" },
                                                                                                                        { ja: "無音の月熱を宿した夜宴旗袍", en: "night-banquet cheongsam carrying a soundless lunar fever" },
                                                                                                                        { ja: "狂いを呑む露気をまとった和解旗袍", en: "reconciliation cheongsam wrapped in dew-haze that swallows madness" },
                                                                                                                        { ja: "月酔いの静脈が透ける薄光旗袍", en: "dimly lit cheongsam showing the translucent veins of lunar intoxication" },
                                                                                                                        { ja: "甘い錯香と微毒の気配を含む月露旗袍", en: "moon-dew cheongsam carrying sweet false fragrance and the hint of subtle poison" },
                                                                                                                        { ja: "接吻の余韻が狂香へ変わる静月旗袍", en: "still-moon cheongsam where the aftertaste of a kiss turns into maddening fragrance" },
                                                                                                                        { ja: "痺れを呑んだ青い吐息の夜露旗袍", en: "night-dew cheongsam with blue breath that has swallowed numbness" },
                                                                                                                        { ja: "月痺の伝流が静脈を這う蒼光旗袍", en: "pale-blue cheongsam with lunar numb-current crawling along its veins" },
                                                                                                                        { ja: "脈打つ月電が理性を侵す宮廷旗袍", en: "court cheongsam whose pulsing lunar current invades reason" },
                                                                                                                        { ja: "青い余震だけを残して知覚を沈める旗袍", en: "cheongsam sinking perception and leaving only blue aftershocks" },
                                                                                                                        { ja: "香りと痺れと露光が溶け合う深月旗袍", en: "deep-moon cheongsam where fragrance, numbness, and dewlight melt together" }
                                                                                                                      ]
                                                                                                                    }
                                                                                                                  ]
                                                                                                                }
                                                                                                              ]
                                                                                                            },
                                                                                                            {
                                                                                                              title: "🔄 揺れる反照",
                                                                                                              items: [
                                                                                                                { ja: "揺れる反照を散らす蒼月旗袍", en: "blue-moon cheongsam scattering trembling reflections" },
                                                                                                                { ja: "反照の揺らぎを抱く和解旗袍", en: "reconciliation cheongsam holding the shimmer of trembling reflected light" },
                                                                                                                { ja: "胸元に揺れる反照が遊ぶ宮廷旗袍", en: "court cheongsam with trembling reflected glints playing across the chest" },
                                                                                                                { ja: "袖先の露光が揺れる反照を返す夜宴旗袍", en: "night-banquet cheongsam whose cuff dewlight returns trembling reflections" },
                                                                                                                { ja: "しずくごとに反照が揺れる鏡露旗袍", en: "mirror-dew cheongsam with reflected light trembling in every droplet" }
                                                                                                              ]
                                                                                                            },
                                                                                                            {
                                                                                                              title: "💥 砕ける月面",
                                                                                                              items: [
                                                                                                                { ja: "砕ける月面を映す蒼月旗袍", en: "blue-moon cheongsam reflecting a shattering lunar surface" },
                                                                                                                { ja: "露鏡の中で月面が砕ける和解旗袍", en: "reconciliation cheongsam where the moon's surface shatters inside dew mirrors" },
                                                                                                                { ja: "砕けた月面の破光を抱く宮廷旗袍", en: "court cheongsam holding the fractured light of a broken moon surface" },
                                                                                                                { ja: "裾先の鏡露に月面の破片が散る夜宴旗袍", en: "night-banquet cheongsam with fragments of the moon surface scattering in mirror dew at the hem" },
                                                                                                                { ja: "砕ける月面を滴の底に沈めた旗袍", en: "cheongsam sinking a shattering moon surface to the bottom of each droplet" }
                                                                                                              ]
                                                                                                            }
                                                                                                          ]
                                                                                                        },
                                                                                                        {
                                                                                                          title: "🌘 月影を抱く露",
                                                                                                          items: [
                                                                                                            { ja: "月影を抱く露に濡れる蒼月旗袍", en: "blue-moon cheongsam dampened by dew holding moon shadows" },
                                                                                                            { ja: "月影の露気を帯びた和解旗袍", en: "reconciliation cheongsam carrying dew-laden moon shadows" },
                                                                                                            { ja: "影月を小露に閉じ込めた宮廷旗袍", en: "court cheongsam trapping the shadowed moon inside tiny beads of dew" },
                                                                                                            { ja: "露ごとに月影が揺れる夜宴旗袍", en: "night-banquet cheongsam with moon shadows trembling in each bead of dew" },
                                                                                                            { ja: "淡い月影を抱いた露光が残る旗袍", en: "cheongsam left with dewlight embracing a faint moon shadow" }
                                                                                                          ]
                                                                                                        }
                                                                                                      ]
                                                                                                    },
                                                                                                    {
                                                                                                      title: "🔹 しずくの青灯",
                                                                                                      items: [
                                                                                                        { ja: "しずくの青灯を揺らす蒼月旗袍", en: "blue-moon cheongsam swaying with blue lamps in droplets" },
                                                                                                        { ja: "露滴ごとに青灯が灯る和解旗袍", en: "reconciliation cheongsam where blue lights glow in every dew drop" },
                                                                                                        { ja: "青い灯を宿した露が胸元に滲む宮廷旗袍", en: "court cheongsam with dew holding blue light seeping across the chest" },
                                                                                                        { ja: "露台の青灯を滴に映す夜宴旗袍", en: "night-banquet cheongsam reflecting terrace blue lamps in droplets" },
                                                                                                        { ja: "青光のしずくが袖先に残る旗袍", en: "cheongsam with blue-lit droplets lingering at the cuffs" }
                                                                                                      ]
                                                                                                    },
                                                                                                    {
                                                                                                      title: "🌫 朝前の湿光",
                                                                                                      items: [
                                                                                                        { ja: "朝前の湿光をまとう蒼月旗袍", en: "blue-moon cheongsam wrapped in damp light before dawn" },
                                                                                                        { ja: "夜明け前の湿った光を含む和解旗袍", en: "reconciliation cheongsam filled with moist light before daybreak" },
                                                                                                        { ja: "露気を含んだ薄明の青を宿す宮廷旗袍", en: "court cheongsam bearing dawn-blue light thick with dew" },
                                                                                                        { ja: "朝前の空気にしめる光を引く夜宴旗袍", en: "night-banquet cheongsam trailing light dampened by pre-dawn air" },
                                                                                                        { ja: "湿った薄光が裾に沈む旗袍", en: "cheongsam with damp faint light sinking into its hem" }
                                                                                                      ]
                                                                                                    },
                                                                                                    {
                                                                                                      title: "💧 溶ける夜露",
                                                                                                      items: [
                                                                                                        { ja: "溶ける夜露に染まる蒼月旗袍", en: "blue-moon cheongsam dyed by melting night dew" },
                                                                                                        { ja: "夜露の溶け際をまとった和解旗袍", en: "reconciliation cheongsam draped in the melting edge of night dew" },
                                                                                                        { ja: "露がほどける気配を映す宮廷旗袍", en: "court cheongsam reflecting the feeling of dew loosening away" },
                                                                                                        { ja: "月光にほどける夜露を抱く夜宴旗袍", en: "night-banquet cheongsam embracing night dew loosening under moonlight" },
                                                                                                        { ja: "溶けかけた露光が足元に残る旗袍", en: "cheongsam with dissolving dewlit glow lingering at the feet" }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                },
                                                                                                {
                                                                                                  title: "🌠 遠ざかる余光",
                                                                                                  items: [
                                                                                                    { ja: "遠ざかる余光を追う蒼月旗袍", en: "blue-moon cheongsam chasing receding afterlight" },
                                                                                                    { ja: "去りゆく月光の尾を引く和解旗袍", en: "reconciliation cheongsam trailing the tail of departing moonlight" },
                                                                                                    { ja: "遠のく青光を背に残す宮廷旗袍", en: "court cheongsam leaving distant blue light at its back" },
                                                                                                    { ja: "余光だけが残る露台の夜宴旗袍", en: "night-banquet cheongsam on a terrace where only afterlight remains" },
                                                                                                    { ja: "月が退いたあとの名残を抱く旗袍", en: "cheongsam holding traces left after the moon has withdrawn" }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            },
                                                                                            {
                                                                                              title: "🔵 青灯の静脈",
                                                                                              items: [
                                                                                                { ja: "青灯の静脈を走らせる蒼月旗袍", en: "blue-moon cheongsam coursed through by blue lamplight veins" },
                                                                                                { ja: "青い灯りの脈動を秘めた夜宴旗袍", en: "night-banquet cheongsam holding the pulse of blue lamplight" },
                                                                                                { ja: "静かな青灯が胸元を縫う宮廷旗袍", en: "court cheongsam with quiet blue lamplight stitching across the chest" },
                                                                                                { ja: "青灯の細い流れを帯びる和睦旗袍", en: "reconciliation cheongsam carrying a slender current of blue lamplight" },
                                                                                                { ja: "灯影の静脈が揺れる蒼月の旗袍", en: "blue-moon cheongsam with veins of lamp-shadow swaying softly" }
                                                                                              ]
                                                                                            },
                                                                                            {
                                                                                              title: "🌫 露台に残る気配",
                                                                                              items: [
                                                                                                { ja: "露台に残る気配をまとう蒼月旗袍", en: "blue-moon cheongsam cloaked in a lingering terrace presence" },
                                                                                                { ja: "去ったあとの空気が漂う和睦旗袍", en: "reconciliation cheongsam with the lingering air of someone departed" },
                                                                                                { ja: "欄干越しの余韻を残す夜宴旗袍", en: "night-banquet cheongsam leaving an afterglow across the balustrade" },
                                                                                                { ja: "露台の静けさに気配だけ残す宮廷旗袍", en: "court cheongsam leaving only a presence in the terrace stillness" },
                                                                                                { ja: "振り返った気配が夜気に溶ける蒼月旗袍", en: "blue-moon cheongsam with the trace of a turning glance dissolving into the night air" }
                                                                                              ]
                                                                                            },
                                                                                            {
                                                                                              title: "♾ 消えない和睦",
                                                                                              items: [
                                                                                                { ja: "消えない和睦を宿す蒼月旗袍", en: "blue-moon cheongsam bearing an unvanishing reconciliation" },
                                                                                                { ja: "静かな和睦の余韻が続く夜宴旗袍", en: "night-banquet cheongsam where the quiet afterglow of reconciliation endures" },
                                                                                                { ja: "赦しの空気が消えずに残る宮廷旗袍", en: "court cheongsam where the air of forgiveness never fully fades" },
                                                                                                { ja: "和解のぬくもりを長く引く蒼月旗袍", en: "blue-moon cheongsam trailing the warmth of reconciliation for a long time" },
                                                                                                { ja: "月影の下で消えない和睦を示す旗袍", en: "cheongsam showing an unfading reconciliation beneath moonshadow" }
                                                                                              ]
                                                                                            }
                                                                                          ]
                                                                                        },
                                                                                        {
                                                                                          title: "🌒 月影の停滞",
                                                                                          items: [
                                                                                            { ja: "月影の停滞に沈む蒼月旗袍", en: "blue-moon cheongsam sinking into the stillness of lunar shadow" },
                                                                                            { ja: "言葉の止まった露台に立つ和睦の旗袍", en: "reconciliation cheongsam standing on a terrace where words have halted" },
                                                                                            { ja: "動かぬ月影の下で息を潜める旗袍", en: "cheongsam holding its breath beneath an unmoving lunar shadow" },
                                                                                            { ja: "停滞した時間をまとう蒼月の宮廷旗袍", en: "court cheongsam draped in the suspended time of a blue moon" },
                                                                                            { ja: "月影に留め置かれた沈黙の和解旗袍", en: "silent reconciliation cheongsam held in place by lunar shadow" }
                                                                                          ]
                                                                                        },
                                                                                        {
                                                                                          title: "🫧 触れずに解ける緊張",
                                                                                          items: [
                                                                                            { ja: "触れずに解ける緊張をまとう蒼月旗袍", en: "blue-moon cheongsam wearing a tension that dissolves without touch" },
                                                                                            { ja: "距離を保ったまま和らぐ夜宴の旗袍", en: "night-banquet cheongsam softening while keeping its distance" },
                                                                                            { ja: "指先も触れずにほどける沈黙の旗袍", en: "silent cheongsam easing apart without even fingertips meeting" },
                                                                                            { ja: "緊張だけが静かにほどけていく和睦の旗袍", en: "reconciliation cheongsam where only the tension quietly unwinds" },
                                                                                            { ja: "無接触のまま余韻を残す蒼月の旗袍", en: "blue-moon cheongsam leaving an afterglow without contact" }
                                                                                          ]
                                                                                        }
                                                                                      ]
                                                                                    }
                                                                                  ]
                                                                                },
                                                                                {
                                                                                  title: "🫧 沈黙の許し",
                                                                                  items: [
                                                                                    { ja: "沈黙の許しを示す口づけ旗袍", en: "cheongsam with a kiss expressing silent forgiveness" },
                                                                                    { ja: "言葉なく赦しを伝える静謐な旗袍", en: "quiet cheongsam conveying forgiveness without words" },
                                                                                    { ja: "視線だけで許しが満ちる夜宴旗袍", en: "night banquet cheongsam filled with forgiveness through nothing but a gaze" },
                                                                                    { ja: "声を失うほど静かな赦しの契約旗袍", en: "pact cheongsam bearing a forgiveness so quiet it silences speech" },
                                                                                    { ja: "余韻だけを残す沈黙の和解旗袍", en: "cheongsam with a silent reconciliation leaving only afterglow" }
                                                                                  ]
                                                                                }
                                                                              ]
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    },
                                                                    {
                                                                      title: "💤 眠りなさい",
                                                                      items: [
                                                                        { ja: "眠りなさいと甘く告げる血月旗袍", en: "blood moon cheongsam softly saying go to sleep" },
                                                                        { ja: "まぶたを重くする声を宿す夜宴旗袍", en: "night banquet cheongsam carrying a voice that weighs down the eyelids" },
                                                                        { ja: "盃の香りで眠りへ誘う契約旗袍", en: "pact cheongsam lulling one to sleep with the scent of the cup" },
                                                                        { ja: "やさしい命令で意識を沈める毒杯旗袍", en: "poison-cup cheongsam sinking awareness with a gentle command" },
                                                                        { ja: "眠りを赦しとして与える貴婦人旗袍", en: "noblewoman cheongsam granting sleep as an act of mercy" }
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              title: "🌫 接近の香り",
                                                              items: [
                                                                { ja: "接近の香りを纏う血月旗袍", en: "blood moon cheongsam wrapped in the scent of approach" },
                                                                { ja: "香りで距離を縮める夜宴旗袍", en: "night banquet cheongsam narrowing the distance through fragrance" },
                                                                { ja: "花香に毒意を溶かした契約旗袍", en: "pact cheongsam dissolving venomous intent into floral perfume" },
                                                                { ja: "近づくほど甘く満ちる毒杯旗袍", en: "poison-cup cheongsam growing sweeter the closer one comes" },
                                                                { ja: "香りの尾で心を絡め取る貴婦人旗袍", en: "noblewoman cheongsam ensnaring the heart with the trailing tail of her scent" }
                                                              ]
                                                            }
                                                          ]
                                                        },
                                                        {
                                                          title: "🥂 最後の乾杯",
                                                          items: [
                                                            { ja: "最後の乾杯を捧げる血月旗袍", en: "blood moon cheongsam offering the final toast" },
                                                            { ja: "終幕前の一杯を差し出す夜宴旗袍", en: "night banquet cheongsam presenting one last cup before the curtain falls" },
                                                            { ja: "別れの口づけより先に掲げる契約旗袍", en: "pact cheongsam raising a cup before a farewell kiss" },
                                                            { ja: "最後の乾杯に沈黙の毒を満たす旗袍", en: "cheongsam filling the final toast with silent poison" },
                                                            { ja: "終わりを祝うように微笑む毒杯旗袍", en: "poison-cup cheongsam smiling as though celebrating the end" }
                                                          ]
                                                        }
                                                      ]
                                                    },
                                                    {
                                                      title: "🙂 微笑む処刑杯",
                                                      items: [
                                                        { ja: "微笑む処刑杯を差し出す血月旗袍", en: "blood moon cheongsam offering an execution cup with a smile" },
                                                        { ja: "穏やかな笑顔で死を渡す夜宴旗袍", en: "night banquet cheongsam handing over death with a calm smile" },
                                                        { ja: "処刑の瞬間を隠す微笑毒杯旗袍", en: "smiling poison-cup cheongsam concealing the moment of execution" },
                                                        { ja: "優美な所作で終焉を告げる契約旗袍", en: "pact cheongsam announcing the end with graceful gestures" },
                                                        { ja: "笑みの奥で命を裁く貴婦人旗袍", en: "noblewoman cheongsam judging life behind a smile" }
                                                      ]
                                                    }
                                                  ]
                                                },
                                                {
                                                  title: "🕯 杯に沈む誓約",
                                                  items: [
                                                    { ja: "杯に沈む誓約を宿す血月旗袍", en: "blood moon cheongsam bearing an oath sinking into the cup" },
                                                    { ja: "盃の底に契約文を沈めた夜宴旗袍", en: "night banquet cheongsam with a contract sunk to the bottom of the goblet" },
                                                    { ja: "静かな乾杯に永い誓約を封じる旗袍", en: "cheongsam sealing a long oath within a silent toast" },
                                                    { ja: "杯影に揺れる約定を映す貴族旗袍", en: "noble cheongsam reflecting a trembling promise in the shadow of a goblet" },
                                                    { ja: "蝋燭灯の下で誓いを沈める契約旗袍", en: "pact cheongsam sinking a vow beneath candlelight" }
                                                  ]
                                                },
                                                {
                                                  title: "⛓ 主従契約の盃",
                                                  items: [
                                                    { ja: "主従契約の盃を掲げる血月旗袍", en: "blood moon cheongsam raising the goblet of master-servant contract" },
                                                    { ja: "盃を交わして従属を刻む夜宴旗袍", en: "night banquet cheongsam marking subservience through shared goblets" },
                                                    { ja: "契約の杯で忠誠を縛る女主人旗袍", en: "mistress cheongsam binding loyalty through the contractual cup" },
                                                    { ja: "膝を折る貴族へ盃を下す支配旗袍", en: "dominating cheongsam lowering a goblet to kneeling nobles" },
                                                    { ja: "深紅の盃で主従を結ぶ貴婦人旗袍", en: "noblewoman cheongsam joining master and servant with a crimson goblet" }
                                                  ]
                                                }
                                              ]
                                            },
                                            {
                                              title: "⛓ 貴族従属",
                                              items: [
                                                { ja: "貴族を従える血月支配旗袍", en: "blood moon dominion cheongsam that subjugates the nobles" },
                                                { ja: "従者を引き連れる夜宴旗袍", en: "night banquet cheongsam followed by attendants" },
                                                { ja: "膝を折る貴族たちの中心に立つ旗袍", en: "cheongsam standing at the center of nobles brought to their knees" },
                                                { ja: "従属の視線を浴びる女主人旗袍", en: "mistress cheongsam bathed in the gaze of subservience" },
                                                { ja: "夜宴の列を支配する貴婦人旗袍", en: "noblewoman cheongsam ruling over the lines of the night banquet" }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              title: "🥀 退廃葬花寄り",
                              items: [
                                { ja: "葬花レースの退廃旗袍", en: "funereal floral decadent cheongsam" },
                                { ja: "枯薔薇刺繍の哀艶旗袍", en: "withered rose decadent gothic cheongsam" },
                                { ja: "色褪せた黒絹の退廃旗袍", en: "faded black silk decadent cheongsam" },
                                { ja: "喪失感をまとう薄闇旗袍", en: "gloom-laden decadent gothic cheongsam" },
                                { ja: "追憶ドレープの葬宴旗袍", en: "memorial draped decadent cheongsam" }
                              ]
                            },
                            {
                              title: "🎭 漆黒舞台寄り",
                              items: [
                                { ja: "漆黒舞台の演劇旗袍", en: "jet-black stage gothic cheongsam" },
                                { ja: "舞台幕飾りのドラマ旗袍", en: "dramatic stage curtain gothic cheongsam" },
                                { ja: "スポットライト映えの夜幕旗袍", en: "spotlit gothic stage cheongsam" },
                                { ja: "黒羽装飾の劇場旗袍", en: "black feather theater gothic cheongsam" },
                                { ja: "退廃ショーガール融合旗袍", en: "decadent showgirl fusion cheongsam" }
                              ]
                            }
                          ]
                        },
                        {
                          title: "🌹 ロココ融合",
                          items: [
                            { ja: "ロココ刺繍融合旗袍", en: "rococo embroidered fusion cheongsam" },
                            { ja: "薔薇房飾りの宮花旗袍", en: "rose tassel rococo cheongsam" },
                            { ja: "フリル裾の貴婦人旗袍", en: "lady rococo cheongsam with frilled hem" },
                            { ja: "淡金装飾の甘美旗袍", en: "sweet rococo cheongsam with pale gold ornament" },
                            { ja: "優雅リボン胸元の社交旗袍", en: "society cheongsam with elegant ribbon bust detail" }
                          ]
                        },
                        {
                          title: "🕰 ヴィクトリア融合",
                          items: [
                            { ja: "ヴィクトリア襟融合旗袍", en: "victorian collar fusion cheongsam" },
                            { ja: "バッスル裾アレンジ旗袍", en: "bustle hem fusion cheongsam" },
                            { ja: "くるみボタン列の端正旗袍", en: "prim button row victorian cheongsam" },
                            { ja: "レースアップ背面の夜会旗袍", en: "back lace-up victorian evening cheongsam" },
                            { ja: "貴族夫人風ロング旗袍", en: "aristocratic lady long cheongsam" }
                          ]
                        },
                        {
                          title: "🥂 モダン社交",
                          items: [
                            { ja: "モダン社交クラブ旗袍", en: "modern social club cheongsam" },
                            { ja: "アールデコ装飾旗袍", en: "art deco inspired cheongsam" },
                            { ja: "シルク手袋合わせの都会旗袍", en: "urban cheongsam with silk gloves" },
                            { ja: "スリム夜会ライン旗袍", en: "sleek evening line cheongsam" },
                            { ja: "カクテルパーティー融合旗袍", en: "cocktail party fusion cheongsam" }
                          ]
                        }
                      ]
                    },
                    {
                      title: "🕯 退廃ロマン",
                      items: [
                        { ja: "退廃ロマンの薄闇旗袍", en: "decadent romantic twilight cheongsam" },
                        { ja: "くすみ薔薇の夜会旗袍", en: "dusky rose ballroom cheongsam" },
                        { ja: "退色金刺繍の古城旗袍", en: "faded gold embroidery old castle cheongsam" },
                        { ja: "哀愁ドレープの退廃舞踏旗袍", en: "melancholic draped decadent ball cheongsam" },
                        { ja: "蝋燭灯に沈む夜宴旗袍", en: "candlelit decadent evening cheongsam" }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: "🔥 攻めチャイナ",
          children: [
            {
              title: "✂ スリット・丈・カット",
              items: [
                { ja: "超ハイスリット旗袍", en: "ultra high slit cheongsam" },
                { ja: "ショート丈チャイナ", en: "short dress cheongsam" },
                { ja: "アシンメトリー裾チャイナ", en: "asymmetrical hem cheongsam" },
                { ja: "サイドカット旗袍", en: "side cutout cheongsam" },
                { ja: "背中開きチャイナ", en: "open back cheongsam" }
              ]
            },
            {
              title: "🫦 肌見せ・ボディライン",
              items: [
                { ja: "密着ボディライン旗袍", en: "skin tight cheongsam, body line emphasis" },
                { ja: "谷間強調チャイナ", en: "cleavage emphasis cheongsam" },
                { ja: "肩落ちチャイナ", en: "off shoulder cheongsam" },
                { ja: "横乳見せチャイナ", en: "sideboob cheongsam" },
                { ja: "脚長見せミニ旗袍", en: "leggy mini cheongsam" }
              ]
            },
            {
              title: "🔗 合わせ技パーツ",
              items: [
                { ja: "ガーターベルト合わせ", en: "cheongsam with garter belt" },
                { ja: "レース手袋合わせ", en: "cheongsam with lace gloves" },
                { ja: "網タイツ合わせ", en: "cheongsam with fishnet stockings" },
                { ja: "ヒールブーツ合わせ", en: "cheongsam with heeled boots" },
                { ja: "チョーカー合わせ", en: "cheongsam with choker" }
              ]
            }
          ]
        },
        {
          title: "🎀 中華ロリ・可変系",
          children: [
            {
              title: "🍬 甘ロリ寄り",
              items: [
                { ja: "甘ロリ中華ドレス", en: "sweet lolita chinese dress" },
                { ja: "リボン多め中華ロリ", en: "ribbon heavy chinese lolita dress" },
                { ja: "パステル旗袍ロリ", en: "pastel cheongsam lolita" },
                { ja: "フリルエプロン旗袍", en: "frilled apron cheongsam" },
                { ja: "ドームスカート中華ロリ", en: "dome skirt chinese lolita" }
              ]
            },
            {
              title: "🎐 フリル・装飾強化",
              items: [
                { ja: "フリル重ね旗袍", en: "layered frill cheongsam" },
                { ja: "房飾りたっぷりチャイナ", en: "tassel heavy chinese dress" },
                { ja: "花飾り強化中華ロリ", en: "flower ornament chinese lolita" },
                { ja: "レース袖チャイナ", en: "lace sleeve cheongsam" },
                { ja: "丸襟フリルチャイナ", en: "rounded collar frilled chinese dress" }
              ]
            },
            {
              title: "🪄 ミニ・可変アレンジ",
              items: [
                { ja: "ミニ丈中華ロリ", en: "mini chinese lolita dress" },
                { ja: "ケープ付きチャイナ", en: "capelet cheongsam" },
                { ja: "セパレート風中華ドレス", en: "separate style chinese dress" },
                { ja: "ジャンパースカート風旗袍", en: "jumper skirt inspired cheongsam" },
                { ja: "猫耳アレンジ中華ロリ", en: "cat ear styled chinese lolita dress" }
              ]
            }
          ]
        },
        {
          title: "⚡ サイバー・近未来チャイナ",
          children: [
            {
              title: "🌃 ネオン都市系",
              items: [
                { ja: "ネオン縁取り旗袍", en: "neon trimmed cheongsam" },
                { ja: "ホログラム旗袍", en: "holographic cheongsam" },
                { ja: "雨街反射チャイナ", en: "rain soaked cyberpunk cheongsam" },
                { ja: "発光ライン中華服", en: "glowing line chinese dress" },
                { ja: "ブラックネオン夜都旗袍", en: "black neon night city cheongsam" }
              ]
            },
            {
              title: "🤖 テック素材・機械装飾",
              items: [
                { ja: "カーボン質感旗袍", en: "carbon texture cheongsam" },
                { ja: "メカ飾りチャイナ", en: "mechanical ornament cheongsam" },
                { ja: "LED留め具旗袍", en: "led clasp cheongsam" },
                { ja: "装甲片付きチャイナ", en: "armored piece cheongsam" },
                { ja: "回路刺繍チャイナ", en: "circuit embroidery cheongsam" }
              ]
            },
            {
              title: "🎤 未来ステージ系",
              items: [
                { ja: "ライブ衣装風チャイナ", en: "stage performer cheongsam" },
                { ja: "アイドル近未来旗袍", en: "futuristic idol cheongsam" },
                { ja: "DJアレンジ中華服", en: "dj styled chinese dress" },
                { ja: "ショーガール風旗袍", en: "showgirl style cheongsam" },
                { ja: "レーザー光沢チャイナ", en: "laser sheen cheongsam" }
              ]
            }
          ]
        },
        {
          title: "🏯 宮廷・武侠・仙界チャイナ",
          children: [
            {
              title: "👑 宮廷・礼装",
              items: [
                { ja: "龍鳳宮廷旗袍", en: "dragon phoenix palace cheongsam" },
                { ja: "皇妃風ロング旗袍", en: "imperial consort long cheongsam" },
                { ja: "金刺繍の祝宴旗袍", en: "gold embroidered banquet cheongsam" },
                { ja: "白金の清雅礼装旗袍", en: "white gold ceremonial cheongsam" },
                { ja: "鳳羽マント付き旗袍", en: "cheongsam with phoenix feather cape" }
              ]
            },
            {
              title: "⚔ 武侠・戦装束",
              children: [
                {
                  title: "🗡 剣士",
                  items: [
                    { ja: "剣士旗袍", en: "swordswoman cheongsam" },
                    { ja: "長剣携えた武侠チャイナ", en: "wuxia cheongsam with long sword" },
                    { ja: "軽甲片付き剣士旗袍", en: "light armored swordswoman cheongsam" },
                    { ja: "決闘用スリム旗袍", en: "duelist slim cheongsam" },
                    { ja: "流派刺繍の剣士装", en: "school embroidered swordswoman chinese outfit" }
                  ]
                },
                {
                  title: "🕶 刺客",
                  children: [
                    {
                      title: "🌙 夜潜み",
                      items: [
                        { ja: "夜潜み刺客旗袍", en: "night stealth assassin cheongsam" },
                        { ja: "黒紅の夜刃チャイナ", en: "black red night blade cheongsam" },
                        { ja: "闇に溶ける薄布旗袍", en: "shadow blending sheer assassin cheongsam" },
                        { ja: "静音靴合わせ刺客旗袍", en: "assassin cheongsam with silent shoes" },
                        { ja: "屋根渡り用軽装旗袍", en: "light rooftop assassin cheongsam" }
                      ]
                    },
                    {
                      title: "☠ 毒術",
                      items: [
                        { ja: "毒術仕込みの刺客旗袍", en: "poison craft assassin cheongsam" },
                        { ja: "毒針隠し袖チャイナ", en: "hidden poison needle sleeve cheongsam" },
                        { ja: "薬香漂う暗器旗袍", en: "assassin cheongsam with medicinal poison scent" },
                        { ja: "翡翠毒瓶の帯飾り旗袍", en: "jade poison vial belt ornament cheongsam" },
                        { ja: "紫煙毒使い旗袍", en: "violet smoke poison user cheongsam" }
                      ]
                    },
                    {
                      title: "🎭 仮面",
                      items: [
                        { ja: "仮面の暗殺旗袍", en: "masked assassin cheongsam" },
                        { ja: "半面飾りの無表情旗袍", en: "half mask assassin cheongsam" },
                        { ja: "狐面潜入チャイナ", en: "fox mask infiltration cheongsam" },
                        { ja: "金細工仮面の夜会刺客旗袍", en: "gold filigree masked assassin cheongsam" },
                        { ja: "笑わぬ仮面舞踏刺客旗袍", en: "expressionless masquerade assassin cheongsam" }
                      ]
                    },
                    {
                      title: "🏛 宮廷暗殺",
                      children: [
                        {
                          title: "🧹 侍女擬装",
                          items: [
                            { ja: "侍女擬装の暗殺旗袍", en: "maid disguise palace assassin cheongsam" },
                            { ja: "給仕姿の仕込み刃旗袍", en: "serving maid disguise cheongsam with hidden blade" },
                            { ja: "静かな廊下を歩く侍女旗袍", en: "silent corridor maid disguise cheongsam" },
                            { ja: "盆の下に刃を隠す宮仕え旗袍", en: "palace attendant cheongsam hiding blade under tray" },
                            { ja: "白手袋の侍女偽装旗袍", en: "white glove maid disguise assassin cheongsam" }
                          ]
                        },
                        {
                          title: "🍷 宴席潜入",
                          items: [
                            { ja: "宴席潜入の暗殺旗袍", en: "banquet infiltration assassin cheongsam" },
                            { ja: "盃を運ぶ夜宴旗袍", en: "banquet server assassin cheongsam" },
                            { ja: "楽舞紛れの潜入旗袍", en: "festival dancer infiltration cheongsam" },
                            { ja: "笑顔で近づく祝宴刺客旗袍", en: "smiling banquet assassin cheongsam" },
                            { ja: "金杯の影に潜む旗袍", en: "assassin cheongsam hiding among golden goblets" }
                          ]
                        },
                        {
                          title: "🌫 毒香",
                          items: [
                            { ja: "毒香をまとう暗殺旗袍", en: "poison perfume assassin cheongsam" },
                            { ja: "香炉仕込みの宮廷旗袍", en: "palace cheongsam with hidden poison incense" },
                            { ja: "花香に紛れた毒使い旗袍", en: "flower scented poison assassin cheongsam" },
                            { ja: "扇子で毒香を流す旗袍", en: "cheongsam spreading poison perfume with fan" },
                            { ja: "淡い香煙の悲艶旗袍", en: "faint fragrant smoke assassin cheongsam" }
                          ]
                        },
                        {
                          title: "👑 玉座接近",
                          items: [
                            { ja: "玉座接近の暗殺旗袍", en: "throne approach assassin cheongsam" },
                            { ja: "王前に侍る密命旗袍", en: "royal audience secret mission cheongsam" },
                            { ja: "拝謁用礼装に偽装した旗袍", en: "audience ceremonial disguise assassin cheongsam" },
                            { ja: "御前の一礼から刃へ移る旗袍", en: "assassin cheongsam shifting from bow to blade" },
                            { ja: "玉階を上る静謐な旗袍", en: "silent assassin cheongsam ascending throne steps" }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  title: "⛩ 門派",
                  items: [
                    { ja: "門派刺繍の修練旗袍", en: "sect embroidered training cheongsam" },
                    { ja: "山門流の修練チャイナ", en: "mountain sect training chinese dress" },
                    { ja: "師姉風の武門旗袍", en: "senior disciple wuxia cheongsam" },
                    { ja: "流派帯布の戦装束旗袍", en: "school sash battle cheongsam" },
                    { ja: "道場決戦チャイナ", en: "dojo duel cheongsam" }
                  ]
                },
                {
                  title: "🦂 妖艶戦装束",
                  items: [
                    { ja: "妖艶戦装束旗袍", en: "sensual battle cheongsam" },
                    { ja: "黒紫の魅惑戦旗袍", en: "black purple alluring battle cheongsam" },
                    { ja: "脚甲付き高機動旗袍", en: "high mobility cheongsam with leg armor" },
                    { ja: "長手袋の決闘旗袍", en: "duel cheongsam with long gloves" },
                    { ja: "裂帛の舞う戦姫旗袍", en: "battle princess cheongsam with fluttering cloth" }
                  ]
                }
              ]
            },
            {
              title: "☁ 仙界・神仙幻想",
              items: [
                { ja: "仙女風ふわり旗袍", en: "xianxia fairy cheongsam" },
                { ja: "雲紋の仙界礼装", en: "cloud pattern celestial cheongsam" },
                { ja: "月光薄紗チャイナ", en: "moonlight sheer chinese dress" },
                { ja: "蓮華仙衣チャイナ", en: "lotus celestial chinese dress" },
                { ja: "天宮の羽衣チャイナ", en: "heavenly robe inspired cheongsam" }
              ]
            }
          ]
        },
        {
          title: "🧵 柄・紋様特化",
          children: [
            {
              title: "🐉 龍紋",
              items: [
                { ja: "金龍舞う王朝旗袍", en: "imperial cheongsam with dancing golden dragon motif" },
                { ja: "蒼龍刺繍の月夜旗袍", en: "moonlit cheongsam with azure dragon embroidery" },
                { ja: "黒地に龍影走る旗袍", en: "black cheongsam with shadow dragon pattern" },
                { ja: "双龍絡む祝宴旗袍", en: "banquet cheongsam with entwined twin dragons" },
                { ja: "龍鱗意匠の重厚旗袍", en: "heavy cheongsam with dragon scale design" }
              ]
            },
            {
              title: "🕊 鳳凰・仙禽紋",
              items: [
                { ja: "鳳凰羽刺繍の宮廷旗袍", en: "palace cheongsam with phoenix feather embroidery" },
                { ja: "仙禽舞う天衣旗袍", en: "celestial cheongsam with dancing divine bird motifs" },
                { ja: "白鳳の気配を宿す礼装旗袍", en: "ceremonial cheongsam bearing the aura of a white phoenix" },
                { ja: "金鳳織りの祝福旗袍", en: "celebratory cheongsam woven with golden phoenix patterns" },
                { ja: "羽影流れる仙界旗袍", en: "celestial cheongsam with flowing feather-shadow motifs" }
              ]
            },
            {
              title: "☁ 雲雷・幾何紋",
              items: [
                { ja: "瑞雲文様の典雅旗袍", en: "elegant cheongsam with auspicious cloud patterns" },
                { ja: "雷文帯びる端正旗袍", en: "refined cheongsam with thunder-pattern trim" },
                { ja: "渦雲と幾何線の近代旗袍", en: "modern cheongsam with swirling cloud and geometric lines" },
                { ja: "青銀雷紋の冷麗旗袍", en: "cool blue-silver cheongsam with thunder motifs" },
                { ja: "雲階を描く連続文様旗袍", en: "cheongsam with repeating cloud-step motifs" }
              ]
            },
            {
              title: "🌸 花鳥・蓮梅紋",
              items: [
                { ja: "蓮華刺繍の清雅旗袍", en: "graceful cheongsam with lotus embroidery" },
                { ja: "梅花散らす冬朝旗袍", en: "winter dawn cheongsam scattered with plum blossom motifs" },
                { ja: "花鳥画風の彩絹旗袍", en: "colored silk cheongsam with bird-and-flower painting motifs" },
                { ja: "白蓮と青花の静謐旗袍", en: "serene cheongsam with white lotus and blue floral motifs" },
                { ja: "蝶と小禽の庭園旗袍", en: "garden cheongsam with butterflies and small bird patterns" }
              ]
            },
            {
              title: "🌙 月紋・呪紋",
              items: [
                { ja: "月輪紋を宿す蒼月旗袍", en: "blue moon cheongsam bearing circular moon sigils" },
                { ja: "符紋が裾を巡る秘儀旗袍", en: "ritual cheongsam with talismanic patterns circling the hem" },
                { ja: "呪符意匠の夜宴旗袍", en: "evening banquet cheongsam with talisman-inspired motifs" },
                { ja: "月影札が連なる妖装旗袍", en: "bewitching cheongsam with chained moon-shadow talismans" },
                { ja: "紺金の秘月紋旗袍", en: "navy and gold cheongsam with secret moon emblems" }
              ]
            }
          ]
        },
        {
          title: "🔘 留め具・盤扣特化",
          children: [
            {
              title: "🪢 伝統盤扣",
              items: [
                { ja: "白絹に並ぶ伝統盤扣旗袍", en: "white silk cheongsam with classic pankou buttons" },
                { ja: "端正な連続盤扣の正統旗袍", en: "orthodox cheongsam with neat rows of pankou closures" },
                { ja: "高襟を締める古典盤扣旗袍", en: "high collar cheongsam secured with classical pankou" },
                { ja: "黒地に映える玉色盤扣旗袍", en: "black cheongsam accented with jade-toned pankou" },
                { ja: "月白の静けさを留める盤扣旗袍", en: "moon-white cheongsam fastened with serene pankou closures" }
              ]
            },
            {
              title: "💎 宝石・装飾留め",
              items: [
                { ja: "宝石留め具が胸元に灯る旗袍", en: "cheongsam with jeweled clasps glowing at the chest" },
                { ja: "翡翠盤扣の宮廷旗袍", en: "palace cheongsam with jade pankou closures" },
                { ja: "真珠留めの清雅旗袍", en: "graceful cheongsam with pearl fasteners" },
                { ja: "蒼石バックルの月下旗袍", en: "moonlit cheongsam with blue gemstone buckles" },
                { ja: "金飾留め具の祝宴旗袍", en: "banquet cheongsam with ornate golden clasp details" }
              ]
            },
            {
              title: "⛓ 鎖・連結金具",
              items: [
                { ja: "鎖留めが揺れる妖装旗袍", en: "bewitching cheongsam with swaying chain fasteners" },
                { ja: "連結金具の攻装旗袍", en: "aggressive cheongsam with linked metal fasteners" },
                { ja: "銀鎖が胸元を渡る夜宴旗袍", en: "evening cheongsam with silver chains crossing the chest" },
                { ja: "細鎖盤扣の退廃旗袍", en: "decadent cheongsam with fine-chain pankou closures" },
                { ja: "拘束感を帯びる連結留め旗袍", en: "cheongsam with interconnected clasps creating a restrained silhouette" }
              ]
            },
            {
              title: "🦋 結び・蝶飾り",
              items: [
                { ja: "蝶結び留めの可憐旗袍", en: "lovely cheongsam with butterfly-knot closures" },
                { ja: "花結び盤扣の祝祭旗袍", en: "festival cheongsam with floral-knot pankou details" },
                { ja: "房飾り結びの少女旗袍", en: "maiden cheongsam with tassel-knot fasteners" },
                { ja: "紅紐が揺れる結び留め旗袍", en: "cheongsam with red cord knot fasteners swaying softly" },
                { ja: "繊細な組紐留めの中華ロリ旗袍", en: "china-lolita cheongsam with delicate braided cord closures" }
              ]
            },
            {
              title: "🤖 近未来ロック留め",
              items: [
                { ja: "発光盤扣のサイバー旗袍", en: "cyber cheongsam with luminous pankou locks" },
                { ja: "磁気ロック留めの近未来旗袍", en: "futuristic cheongsam with magnetic lock fasteners" },
                { ja: "機械式バックルの戦術旗袍", en: "tactical cheongsam with mechanical buckles" },
                { ja: "ホログラム留め具の都市旗袍", en: "city cheongsam with holographic clasp details" },
                { ja: "青光ロックが走る機装旗袍", en: "mechanized cheongsam marked by blue-light locking hardware" }
              ]
            }
          ]
        },
        {
          title: "🪡 生地・質感特化",
          children: [
            {
              title: "✨ 絹光沢・艶布",
              items: [
                { ja: "月光を滑る絹艶旗袍", en: "silk sheen cheongsam gliding under moonlight" },
                { ja: "艶やかな絹光沢の宮廷旗袍", en: "palace cheongsam with glossy silk luster" },
                { ja: "柔光を返す真絹旗袍", en: "pure silk cheongsam reflecting soft light" },
                { ja: "しっとり艶布の夜宴旗袍", en: "evening cheongsam in moist lustrous fabric" },
                { ja: "青光を含む絹艶チャイナ", en: "silken chinese dress with bluish sheen" }
              ]
            },
            {
              title: "🏛 重厚織り・ブロケード",
              items: [
                { ja: "金糸ブロケードの王朝旗袍", en: "dynastic cheongsam in gold-thread brocade" },
                { ja: "重厚織りの玉座礼装旗袍", en: "throne ceremonial cheongsam in heavy woven fabric" },
                { ja: "厚織り紋布の宮廷チャイナ", en: "palace chinese dress in thick patterned weave" },
                { ja: "密織り刺繍の典雅旗袍", en: "elegant cheongsam with densely woven embroidery" },
                { ja: "重布が落ちる威厳旗袍", en: "majestic cheongsam with heavy draping cloth" }
              ]
            },
            {
              title: "🌫 薄紗・透け布レイヤー",
              items: [
                { ja: "薄紗を重ねた月下旗袍", en: "moonlit cheongsam layered with sheer gauze" },
                { ja: "透け布袖の幻影旗袍", en: "phantom cheongsam with translucent fabric sleeves" },
                { ja: "薄霧をまとう軽紗チャイナ", en: "light gauze chinese dress wrapped in mist" },
                { ja: "二重紗の儀礼旗袍", en: "ritual cheongsam with double sheer layers" },
                { ja: "露を含む透布の静謐旗袍", en: "serene cheongsam in dew-kissed translucent cloth" }
              ]
            },
            {
              title: "💧 濡れ布・湿光質感",
              items: [
                { ja: "しっとり濡れ布の蒼月旗袍", en: "blue-moon cheongsam in softly wet fabric" },
                { ja: "湿光を宿す夜露旗袍", en: "night-dew cheongsam holding damp luminous sheen" },
                { ja: "露に沈む濡れ絹チャイナ", en: "wet silk chinese dress sinking into dew" },
                { ja: "肌に貼りつく湿布旗袍", en: "cheongsam with damp fabric clinging to the skin" },
                { ja: "濡れ光沢が揺れる和解旗袍", en: "reconciliation cheongsam with wavering wet gloss" }
              ]
            },
            {
              title: "🔮 未来素材・発光織布",
              items: [
                { ja: "発光織布の近未来旗袍", en: "futuristic cheongsam in luminous woven fabric" },
                { ja: "ホログラム布の都市チャイナ", en: "urban chinese dress in hologram fabric" },
                { ja: "青光線維が走る機装旗袍", en: "mechanized cheongsam threaded with blue luminous fibers" },
                { ja: "偏光素材のサイバー旗袍", en: "cyber cheongsam in iridescent polarized material" },
                { ja: "月色LED織りの電子旗袍", en: "electronic cheongsam with moon-hued LED weave" }
              ]
            }
          ]
        }
,
        {
          title: "🫶 袖・肩構造特化",
          children: [
            {
              title: "👘 袖シルエット",
              items: [
                { ja: "広袖が揺れる月華旗袍", en: "moonlit cheongsam with flowing wide sleeves" },
                { ja: "細袖で締めた端正旗袍", en: "refined cheongsam with sleek narrow sleeves" },
                { ja: "長袖が静かに落ちる宮廷旗袍", en: "palace cheongsam with gracefully falling long sleeves" },
                { ja: "半袖で軽やかな春節旗袍", en: "light spring festival cheongsam with short sleeves" },
                { ja: "無袖で輪郭映える高襟旗袍", en: "high-collar sleeveless cheongsam with clean silhouette" }
              ]
            },
            {
              title: "🌫 透け袖・薄紗袖",
              items: [
                { ja: "薄紗袖が霞む月影旗袍", en: "moon-shadow cheongsam with misty sheer sleeves" },
                { ja: "透け袖を重ねた夜宴旗袍", en: "evening cheongsam layered with transparent sleeves" },
                { ja: "青光を宿すシアー袖旗袍", en: "cheongsam with blue-glowing sheer sleeves" },
                { ja: "花影透ける絹紗袖チャイナ", en: "silk gauze sleeve chinese dress with floral shadows" },
                { ja: "仙気を引く薄紗長袖旗袍", en: "celestial cheongsam with airy gauze long sleeves" }
              ]
            },
            {
              title: "⚔ 武侠・仙袖",
              items: [
                { ja: "武侠袖を帯びた剣舞旗袍", en: "sword-dance cheongsam with wuxia sleeves" },
                { ja: "仙袖が尾を引く天界旗袍", en: "heavenly cheongsam with trailing celestial sleeves" },
                { ja: "戦装に寄せた機動袖チャイナ", en: "combat-inspired chinese dress with agile sleeves" },
                { ja: "広がる仙袖の月白旗袍", en: "moon-white cheongsam with expanding immortal sleeves" },
                { ja: "風を斬る武袖の黒旗袍", en: "black cheongsam with wind-cutting martial sleeves" }
              ]
            },
            {
              title: "💠 肩構造・肩飾り",
              items: [
                { ja: "肩章を添えた儀礼旗袍", en: "ceremonial cheongsam with shoulder insignia" },
                { ja: "肩飾りで締める宮廷チャイナ", en: "palace chinese dress tightened by shoulder ornaments" },
                { ja: "片肩強調の非対称旗袍", en: "asymmetrical cheongsam emphasizing one shoulder" },
                { ja: "肩珠が連なる祝宴旗袍", en: "banquet cheongsam with cascading shoulder jewels" },
                { ja: "装甲肩を備えた近未来旗袍", en: "near-future cheongsam with armored shoulders" }
              ]
            },
            {
              title: "🪽 垂れ袖・後引き袖",
              items: [
                { ja: "垂れ袖が流れる青月旗袍", en: "blue-moon cheongsam with flowing draped sleeves" },
                { ja: "後引き袖を持つ夜宴礼装旗袍", en: "evening ceremonial cheongsam with trailing sleeves" },
                { ja: "袖先が長く残る妖装旗袍", en: "bewitching cheongsam with lingering sleeve ends" },
                { ja: "長く尾を引く薄袖チャイナ", en: "sheer-sleeved chinese dress with long trailing ends" },
                { ja: "舞踏で翻る後引き袖旗袍", en: "dance cheongsam with fluttering train-like sleeves" }
              ]
            }
          ]
        },
        {
          title: "🪄 裾レイヤー特化",
          children: [
            {
              title: "🩰 二重裾・重ね裾",
              items: [
                { ja: "二重裾が揺れる礼装旗袍", en: "formal cheongsam with fluttering double hems" },
                { ja: "重ね裾で厚みを出す宮廷旗袍", en: "palace cheongsam thickened by layered hems" },
                { ja: "内裾が覗く上品旗袍", en: "elegant cheongsam with a peeking inner hem" },
                { ja: "二枚裾で広がる祝祭チャイナ", en: "festive chinese dress with spreading double-layer hem" },
                { ja: "重層裾の静月旗袍", en: "calm moon cheongsam with multi-tiered hem" }
              ]
            },
            {
              title: "🌫 透け下布・霧裾",
              items: [
                { ja: "霧布が漂う薄裾旗袍", en: "soft-hem cheongsam with drifting mist fabric" },
                { ja: "透け下布を引く月影旗袍", en: "moon-shadow cheongsam trailing sheer underlayers" },
                { ja: "霞裾が滲む和解旗袍", en: "reconciliation cheongsam with hazy dissolving hem" },
                { ja: "薄紗裾が重なる仙衣旗袍", en: "celestial cheongsam layered with gauze hems" },
                { ja: "青霧が沈む下布チャイナ", en: "chinese dress with blue mist sinking into the under-hem" }
              ]
            },
            {
              title: "🎐 房飾り・前垂れ",
              items: [
                { ja: "房飾りが揺れる祝宴旗袍", en: "banquet cheongsam with swaying tassel ornaments" },
                { ja: "前垂れを添えた武侠旗袍", en: "wuxia cheongsam with a decorative front panel" },
                { ja: "玉房飾りが連なる宮廷旗袍", en: "palace cheongsam with cascading jade tassels" },
                { ja: "長い前垂れを持つ儀礼旗袍", en: "ceremonial cheongsam with a long front drape" },
                { ja: "腰房が踊る中華ロリ旗袍", en: "chinese loli cheongsam with dancing waist tassels" }
              ]
            },
            {
              title: "🏯 宮廷トレーン・引き裾",
              items: [
                { ja: "引き裾を曳く王朝旗袍", en: "dynastic cheongsam with a trailing hem" },
                { ja: "宮廷トレーンが伸びる礼装旗袍", en: "formal cheongsam with an extended palace train" },
                { ja: "階段に流れる長裾チャイナ", en: "long-hem chinese dress flowing across stairs" },
                { ja: "夜宴に映える引き裾旗袍", en: "evening cheongsam with a striking trailing train" },
                { ja: "王座へ続く後裾の宮装旗袍", en: "court cheongsam with a rear hem leading toward the throne" }
              ]
            },
            {
              title: "🤖 装甲裾・未来層",
              items: [
                { ja: "装甲パネル裾の近未来旗袍", en: "near-future cheongsam with armored hem panels" },
                { ja: "発光層が走る機装裾チャイナ", en: "mechanized chinese dress with glowing layered hem" },
                { ja: "ホログラム下裾を重ねた都市旗袍", en: "city cheongsam layered with holographic under-hem" },
                { ja: "分割裾が光るサイバー旗袍", en: "cyber cheongsam with illuminated segmented hems" },
                { ja: "金属裾で締めた機械調チャイナ", en: "machine-toned chinese dress tightened by metallic hem details" }
              ]
            }
          ]
        },
        {
          title: "👑 頭部アクセ連動特化",
          children: [
            {
              title: "🌸 花飾り・簪",
              items: [
                { ja: "簪連動の王道旗袍", en: "classic cheongsam with coordinated kanzashi hairpin" },
                { ja: "花簪を添えた祝祭旗袍", en: "festive cheongsam with floral kanzashi ornament" },
                { ja: "玉簪が映える宮廷旗袍", en: "palace cheongsam highlighted by jade hairpin" },
                { ja: "白花髪飾りの清楚旗袍", en: "neat cheongsam with white floral hair ornament" },
                { ja: "黒花簪の艶夜旗袍", en: "alluring night cheongsam with black floral kanzashi" }
              ]
            },
            {
              title: "💎 玉飾り・額飾り",
              items: [
                { ja: "玉飾り揺れる上品旗袍", en: "elegant cheongsam with swaying jade ornaments" },
                { ja: "額飾り付きの月下旗袍", en: "moonlit cheongsam with forehead ornament" },
                { ja: "珠飾りで整えた宮廷旗袍", en: "court cheongsam arranged with bead adornments" },
                { ja: "宝飾額飾りの夜宴旗袍", en: "evening cheongsam with jeweled forehead accessory" },
                { ja: "青玉飾りの蒼月旗袍", en: "blue moon cheongsam with blue jade ornament" }
              ]
            },
            {
              title: "👑 小皇冠・ティアラ",
              items: [
                { ja: "小皇冠を添えた宮廷旗袍", en: "palace cheongsam with a small crown" },
                { ja: "ティアラ融合の夜会旗袍", en: "ballroom cheongsam fused with a tiara" },
                { ja: "王女風小皇冠チャイナ", en: "princess-like chinese dress with mini crown" },
                { ja: "月輪ティアラの月下旗袍", en: "moon halo tiara cheongsam" },
                { ja: "宝石冠付きの祝宴旗袍", en: "banquet cheongsam with jeweled mini crown" }
              ]
            },
            {
              title: "🤖 近未来ヘッドギア",
              items: [
                { ja: "サイバー角飾り付き旗袍", en: "cheongsam with cyber horn accessories" },
                { ja: "発光ヘッドギア連動チャイナ", en: "chinese dress coordinated with luminous headgear" },
                { ja: "近未来輪飾りの旗袍", en: "cheongsam with futuristic ring headpiece" },
                { ja: "機械花飾りのネオン旗袍", en: "neon cheongsam with mechanical floral headpiece" },
                { ja: "ホログラム簪サイバー旗袍", en: "cyber cheongsam with holographic hairpin" }
              ]
            },
            {
              title: "🕊 仙界・儀礼頭飾り",
              items: [
                { ja: "仙環を戴く白月旗袍", en: "white moon cheongsam with celestial halo ornament" },
                { ja: "儀礼羽飾りの仙界旗袍", en: "celestial cheongsam with ritual feather ornament" },
                { ja: "薄絹ベール付きの和解旗袍", en: "reconciliation cheongsam with sheer veil" },
                { ja: "月礼冠を添えた静宴旗袍", en: "quiet ceremonial cheongsam with moon ritual crown" },
                { ja: "聖堂寄り頭飾りの仙女旗袍", en: "celestial maiden cheongsam with chapel-like head ornament" }
              ]
            }
          ]
        },
        {
          title: "🧦 パンスト・タイツ特化",
          children: [
            {
              title: "🖤 黒パンスト・黒タイツ",
              items: [
                { ja: "黒パンスト合わせの夜会旗袍", en: "evening cheongsam with black pantyhose" },
                { ja: "黒タイツで締めた高襟旗袍", en: "high collar cheongsam tightened by black tights" },
                { ja: "艶黒レッグラインの攻め旗袍", en: "bold cheongsam with glossy black leg line" },
                { ja: "漆黒脚線の月下旗袍", en: "moonlit cheongsam with jet-black leg silhouette" },
                { ja: "黒脚衣融合の密着旗袍", en: "form-fitting cheongsam fused with black legwear" }
              ]
            },
            {
              title: "🕸 網タイツ・編み脚衣",
              items: [
                { ja: "網タイツ合わせの攻め旗袍", en: "bold cheongsam with fishnet stockings" },
                { ja: "細網脚衣の妖装旗袍", en: "alluring cheongsam with fine fishnet legwear" },
                { ja: "格子脚線を見せる夜宴旗袍", en: "evening cheongsam showing lattice leg lines" },
                { ja: "編み脚衣の退廃旗袍", en: "decadent cheongsam with mesh legwear" },
                { ja: "網脚衣融合のサイバー旗袍", en: "cyber cheongsam fused with fishnet legwear" }
              ]
            },
            {
              title: "🎀 ガーター・ストッキング",
              items: [
                { ja: "ガーターストッキング合わせ旗袍", en: "cheongsam with garter stockings" },
                { ja: "太腿ガーターの攻め旗袍", en: "bold cheongsam with thigh garter" },
                { ja: "レース留め脚衣の夜宴旗袍", en: "evening cheongsam with lace-fastened stockings" },
                { ja: "脚飾り連動ガータ旗袍", en: "cheongsam with coordinated garter leg accessories" },
                { ja: "宝飾ガーターの宮廷旗袍", en: "palace cheongsam with jeweled garter" }
              ]
            },
            {
              title: "💥 破れ・乱れ脚衣",
              items: [
                { ja: "破れパンストの退廃旗袍", en: "decadent cheongsam with torn pantyhose" },
                { ja: "伝線タイツの崩し旗袍", en: "disheveled cheongsam with laddered tights" },
                { ja: "裂け脚衣の漆黒旗袍", en: "jet-black cheongsam with ripped legwear" },
                { ja: "乱れストッキングの夜更け旗袍", en: "late-night cheongsam with disordered stockings" },
                { ja: "戦後めいた傷み脚衣の旗袍", en: "cheongsam with battle-worn damaged stockings" }
              ]
            },
            {
              title: "✨ 装飾脚線・発光脚衣",
              items: [
                { ja: "刺繍パンストの上品旗袍", en: "elegant cheongsam with embroidered pantyhose" },
                { ja: "星紋タイツの蒼月旗袍", en: "blue moon cheongsam with star-pattern tights" },
                { ja: "発光脚衣の近未来旗袍", en: "futuristic cheongsam with luminous legwear" },
                { ja: "呪紋脚線の月下旗袍", en: "moonlit cheongsam with sigil-pattern legwear" },
                { ja: "青光レッグラインのサイバー旗袍", en: "cyber cheongsam with blue luminous leg lines" }
              ]
            }
          ]
        },
        {
          title: "🪢 刺繍・縁取り・装飾線特化",
          children: [
            {
              title: "🧵 金糸・銀糸刺繍",
              items: [
                { ja: "金糸刺繍が走る宮廷旗袍", en: "palace cheongsam threaded with gold embroidery" },
                { ja: "銀糸模様を浮かべた月下旗袍", en: "moonlit cheongsam traced with silver embroidery" },
                { ja: "金銀刺繍を重ねた祝宴旗袍", en: "banquet cheongsam layered with gold and silver embroidery" },
                { ja: "細密刺繍を宿す高襟旗袍", en: "high collar cheongsam bearing intricate embroidery" },
                { ja: "刺繍光沢が映える王道旗袍", en: "classic cheongsam highlighted by embroidered sheen" }
              ]
            },
            {
              title: "🌸 花刺繍・植物装飾線",
              items: [
                { ja: "花刺繍を這わせた春庭旗袍", en: "spring garden cheongsam covered with floral embroidery" },
                { ja: "蔓草装飾線が伸びる仙界旗袍", en: "celestial cheongsam with vine-like decorative lines" },
                { ja: "蓮刺繍が裾を巡る清麗旗袍", en: "pure cheongsam with lotus embroidery circling the hem" },
                { ja: "梅枝刺繍を添えた雪月旗袍", en: "snow-moon cheongsam accented by plum branch embroidery" },
                { ja: "花鳥風の装飾線を引く上品旗袍", en: "elegant cheongsam drawn with floral-bird decorative lines" }
              ]
            },
            {
              title: "〰 縁取り・パイピング",
              items: [
                { ja: "濃色パイピングで締めた旗袍", en: "cheongsam tightened with dark contrast piping" },
                { ja: "金縁取りを効かせた夜宴旗袍", en: "evening cheongsam accented with gold edging" },
                { ja: "白縁パイピングの清楚旗袍", en: "pure cheongsam with white piped edges" },
                { ja: "二重縁取りの宮廷旗袍", en: "palace cheongsam with double-edged trim" },
                { ja: "青光パイピングの未来旗袍", en: "futuristic cheongsam with blue luminous piping" }
              ]
            },
            {
              title: "🔶 切替線・構造ライン",
              items: [
                { ja: "構造切替線が映える攻め旗袍", en: "bold cheongsam highlighted by structural seam lines" },
                { ja: "身体をなぞる縦ライン旗袍", en: "cheongsam with vertical lines tracing the body" },
                { ja: "脇切替を強調した密着旗袍", en: "form-fitting cheongsam emphasizing side seam transitions" },
                { ja: "幾何ラインで組んだサイバー旗袍", en: "cyber cheongsam assembled with geometric linework" },
                { ja: "分割構造線の近未来旗袍", en: "near-future cheongsam with segmented structural lines" }
              ]
            },
            {
              title: "✨ 宝飾線・発光装飾線",
              items: [
                { ja: "宝石縁取りが光る宮廷旗袍", en: "palace cheongsam glowing with jeweled trim" },
                { ja: "発光装飾線が走る都市旗袍", en: "city cheongsam crossed by luminous decorative lines" },
                { ja: "月光を帯びる装飾線の蒼月旗袍", en: "blue moon cheongsam with moonlit ornamental lines" },
                { ja: "呪紋発光線を宿す秘儀旗袍", en: "ritual cheongsam bearing glowing sigil lines" },
                { ja: "ネオン縁取りのサイバー旗袍", en: "cyber cheongsam edged with neon trim" }
              ]
            }
          ]
        },
      {
        label: "🎎 腰まわり・帯飾り・房飾り特化",
        children: [
          {
            label: "🎀 帯飾り・結び布",
            items: [
              "ornamental sash accents on chinese dress, decorative tied waist ribbons, elegant waist bow accents, layered sash drape details, refined tied fabric waist ornament",
              "hanfu-inspired waist sash accents for qipao, flowing tied waist cloth, decorative layered obi-like chinese sash, ribboned waist drape on qipao, elegant soft waist fastening cloth",
              "luxury waist ribbon ornament on qipao, gemstone-centered sash knot, ornate tied waist silk, ceremonial waist binding cloth, refined hanging waist ribbon tails",
              "cute waist bow accents for chinese lolita qipao, petite tied sash details, sweet ribboned waist ornament, layered cute waist ties, playful ornamental side bow on qipao",
              "cyber chinese waist belt cloth fusion, luminous tied sash panels, techwear-inspired waist drape, futuristic ribbon harness sash, glowing waist knot ornament"
            ]
          },
          {
            label: "🧿 玉飾り・腰飾り",
            items: [
              "jade waist ornaments on qipao, hanging jade pendants at the hip, elegant waist gemstone tassel, carved jade waist drop, refined chinese jade hip accessory",
              "gem-adorned waist chains for qipao, crystal waist ornaments, hanging jewel hip charms, luxury gemstone waist drape, moonlit jewel pendants at the waist",
              "palace-style chinese waist jewels, ceremonial hip ornament clusters, imperial jade tassels, ornate gemstone waist insignia, regal waist accessory set",
              "xianxia-inspired spiritual waist charms, floating bead talismans at the hip, celestial jade pendants, sacred waist ornament strings, ethereal gem drops at the waist",
              "cyber jade fusion waist accessories, holographic bead ornaments, neon gemstone hip charms, futuristic chinese waist jewel chains, luminous pendants around the waist"
            ]
          },
          {
            label: "🎐 房飾り・揺れ装飾",
            items: [
              "long tassel ornaments on chinese dress, swaying tassel hip details, elegant hanging silk tassels, refined ornamental fringe at the waist, ceremonial tassel movement accents",
              "short clustered tassels on qipao, layered tassel bunches, decorative knot tassels, playful swaying waist fringe, soft silk tassel ornaments",
              "luxury palace tassel decorations, gold-thread hanging tassels, royal waist fringe ornaments, formal ceremonial swinging tassels, imperial decorative tassel drops",
              "martial-arts-inspired tassel accessories, swift-moving tied tassels, weapon-like waist fringe, disciplined ornamental tassels, wuxia hip tassel accents",
              "cyber tassel strips and luminous fringe, futuristic hanging ornament cords, glowing decorative strands at the waist, high-tech tassel motion details, neon fringe hip ornaments"
            ]
          },
          {
            label: "⛓ 腰鎖・チェーン装飾",
            items: [
              "ornamental waist chains on qipao, fine-linked hip chains, elegant side waist chain drape, refined metallic waist adornment, luxury chain ornament around the hips",
              "double-layer waist chain accessories, cross-draped hip chains, chain-linked side ornaments, decorative chinese metal waist drape, jewelry-like waist chain layering",
              "gothic chinese waist chains, dark metallic hip adornment, moonlit chain tassels, decadent chain details on qipao, alluring side chain ornament",
              "martial and ceremonial chain waist ornaments, disciplined linked metal details, emblem-bearing chain sash, structured chain belt accents, formal chain-bound chinese waist design",
              "cyber chain harness accents for qipao, luminous metal links, futuristic hip chain rigging, neon-linked waist ornament, techwear-inspired side chain drape"
            ]
          },
          {
            label: "🌸 横垂れ・サイドドレープ",
            items: [
              "side drape fabric on chinese dress, elegant hip-hanging cloth panels, flowing side waist drapes, graceful asymmetrical side fabric, refined qipao side fall",
              "double side drape layers, split side cloth ornaments, decorative hanging hip panels, soft layered side veils, balanced ornamental waist draping",
              "palace side drape extensions, regal hanging cloth at the hips, ceremonial long side panels, luxurious side train accents, imperial asymmetrical waist drape",
              "xianxia floating side drapes, ethereal waist veils, spiritual cloth ribbons hanging from the hips, light drifting side fabric, celestial hip drape accents",
              "cyber side panel drapes, luminous hanging fabric strips, futuristic waist cloth extensions, holographic side fall, techwear-inspired ornamental side drape"
            ]
          }
        ]
      },
      {
        label: "👠 足元・靴特化",
        children: [
          {
            label: "👠 華奢ヒール・上品靴",
            items: [
              "elegant high heels for qipao, refined slim heels, graceful chinese formal footwear, delicate pointed heels, luxury evening heels for chinese dress",
              "ankle-strap heels for qipao, refined feminine heel silhouette, polished formal chinese pumps, sophisticated moonlit heels, slender ceremonial footwear",
              "gem-adorned high heels with chinese dress, crystal-decorated pumps, regal heeled shoes, jewel-tipped elegant footwear, palace evening heels",
              "lace-accented dress heels for chinese lolita qipao, cute refined pumps, ribboned heeled shoes, sweet formal heel design, ornamental petite heels",
              "sleek modern heels with cyber qipao, metallic pointed pumps, futuristic heeled footwear, glowing accent heels, high-tech formal shoes"
            ]
          },
          {
            label: "🥾 ブーツ・武侠足装",
            items: [
              "wuxia boots with qipao, fitted martial boots, elegant combat footwear for chinese dress, disciplined long boots, agile warrior-style boots",
              "heeled ankle boots for qipao, refined short boots, structured side-zip boots, fashionable fitted boot silhouette, sleek chinese modern boots",
              "palace riding boots with ceremonial qipao, regal leather boots, formal high boots, structured imperial footwear, luxury boot styling for chinese dress",
              "xianxia spirit boots, ethereal long boots, light ornamental warrior footwear, celestial boot silhouette, floating-robe-compatible boots",
              "cyber combat boots with qipao, armored futuristic boots, neon-accented high boots, techwear-inspired footwear, sleek tactical chinese boots"
            ]
          },
          {
            label: "🩰 ロリ靴・可憐足元",
            items: [
              "cute mary jane shoes for chinese lolita qipao, petite ribbon shoes, sweet rounded-toe footwear, adorable ornamental strap shoes, doll-like chinese dress shoes",
              "frilled ankle shoes, lace-trimmed lolita footwear, cute heeled mary janes, soft pastel ornamental shoes, decorative small-heel shoes",
              "flower-ornament shoes for qipao, blossom-accented petite footwear, girlish chinese-inspired pumps, sweet festive shoes, cute floral strap footwear",
              "tiny platform shoes for playful qipao styling, compact decorative shoes, charming ribboned platform footwear, cute elevated sole shoes, sweet doll-fashion footwear",
              "fantasy-cute chinese shoes, moonlit lolita heels, dreamy petite footwear, ornamental fairy-like qipao shoes, whimsical delicate shoes"
            ]
          },
          {
            label: "🤖 近未来フットウェア",
            items: [
              "cyber shoes with qipao, futuristic sleek footwear, luminous chinese dress shoes, metallic streamlined heels, glowing accent footwear",
              "holographic heels for cyber qipao, neon-edged pumps, reflective techwear shoes, futuristic formal footwear, light-reactive shoe surfaces",
              "armored footwear with cyber chinese dress, segmented tech boots, high-tech ankle footwear, structured sci-fi shoe silhouette, sleek synthetic boots",
              "glowing sole footwear for futuristic qipao, luminous heel accents, light-emitting ceremonial shoes, sci-fi evening footwear, neon sole dress shoes",
              "minimalist future chinese shoes, clean angular footwear, silver-blue futuristic pumps, advanced material shoe finish, elegant sci-fi footwear"
            ]
          },
          {
            label: "✨ 足飾り・アンクレット",
            items: [
              "anklets with qipao, elegant ankle jewelry, refined chain anklets, delicate ornamental ankle accessories, graceful chinese dress foot jewelry",
              "jade anklets and ankle charms, hanging gemstone ankle ornaments, moonlit ankle jewelry, luxury ankle accessories, ceremonial anklet details",
              "tassel anklets for chinese dress, swaying ankle ornaments, silk-thread ankle decorations, playful decorative anklets, fine dangling ankle jewelry",
              "gothic ankle chains with qipao, dark elegant ankle ornamentation, chain-linked ankle accessories, moonlit metal anklets, alluring foot jewelry",
              "cyber anklet devices with futuristic qipao, glowing ankle rings, holographic foot jewelry, luminous ankle accessories, techwear-inspired ankle adornment"
            ]
          }
        ]
      },
      {
        title: "🧤 手袋・腕飾り・袖先アクセ",
        children: [
          {
            title: "🧤 手袋・グローブ",
            items: [
              { ja: "上品な手袋付き旗袍", en: "elegant gloves with qipao" },
              { ja: "レース手袋のチャイナ", en: "qipao with lace gloves" },
              { ja: "ロンググローブ旗袍", en: "qipao with long gloves" },
              { ja: "可憐な短手袋付きチャイナ", en: "chinese dress with cute short gloves" },
              { ja: "近未来グローブ連動旗袍", en: "qipao with futuristic gloves" }
            ]
          },
          {
            title: "💍 腕輪・バングル",
            items: [
              { ja: "玉腕輪付き旗袍", en: "qipao with jade bangles" },
              { ja: "金腕輪の宮廷チャイナ", en: "palace chinese dress with gold bangles" },
              { ja: "宝石腕飾り付き旗袍", en: "qipao with gemstone bracelets" },
              { ja: "重ね腕輪チャイナ", en: "chinese dress with layered bangles" },
              { ja: "近未来リストバンド付き旗袍", en: "qipao with futuristic wrist bands" }
            ]
          },
          {
            title: "🎀 袖口飾り・カフス装飾",
            items: [
              { ja: "袖口飾り付き旗袍", en: "qipao with decorative sleeve cuffs" },
              { ja: "刺繍カフスのチャイナ", en: "chinese dress with embroidered cuffs" },
              { ja: "レース袖口の旗袍", en: "qipao with lace cuff accents" },
              { ja: "宝石カフスの宮廷旗袍", en: "palace qipao with jewel-set cuffs" },
              { ja: "近未来カフスモジュール旗袍", en: "qipao with futuristic cuff modules" }
            ]
          },
          {
            title: "⛓ 腕鎖・連結アクセ",
            items: [
              { ja: "腕鎖付き旗袍", en: "qipao with arm chains" },
              { ja: "指輪連結チェーンのチャイナ", en: "chinese dress with bracelet-to-ring chains" },
              { ja: "上腕飾り付き旗袍", en: "qipao with upper-arm ornaments" },
              { ja: "退廃的な腕鎖チャイナ", en: "decadent chinese dress with gothic arm chains" },
              { ja: "近未来アームリンク旗袍", en: "qipao with futuristic arm-link accessories" }
            ]
          },
          {
            title: "🌸 指先・爪先アクセ",
            items: [
              { ja: "指先飾り付き旗袍", en: "qipao with fingertip accessories" },
              { ja: "玉指輪のチャイナ", en: "chinese dress with jade rings" },
              { ja: "爪先装飾が映える旗袍", en: "qipao with elegant nail ornaments" },
              { ja: "宮廷爪飾り付き旗袍", en: "palace qipao with ornamental nail guards" },
              { ja: "近未来フィンガーアクセ旗袍", en: "qipao with futuristic fingertip accessories" }
            ]
          }
        ]
      },
      {
        title: "🌫 香り・湯気・演出アクセ連動",
        children: [
          {
            title: "🌸 香り立つ花気・香粉",
            items: [
              { ja: "花香をまとう旗袍", en: "qipao wrapped in floral fragrance" },
              { ja: "香粉の気配が漂うチャイナ", en: "chinese dress with drifting cosmetic powder scent" },
              { ja: "梅香が立つ旗袍", en: "qipao with plum fragrance rising" },
              { ja: "蓮香を帯びた月下チャイナ", en: "moonlit chinese dress carrying lotus fragrance" },
              { ja: "花気に包まれる旗袍", en: "qipao enveloped in floral aura" }
            ]
          },
          {
            title: "♨ 湯気・熱気・湿光演出",
            items: [
              { ja: "湯気に包まれる旗袍", en: "qipao wrapped in steam" },
              { ja: "熱気を含む湿光チャイナ", en: "damp-glow chinese dress with warm vapor" },
              { ja: "露熱の立つ旗袍", en: "qipao with rising dewy heat" },
              { ja: "温泉気配の月下チャイナ", en: "moonlit chinese dress with hot-spring atmosphere" },
              { ja: "蒸気越しに映える旗袍", en: "qipao glowing through steam" }
            ]
          },
          {
            title: "🕯 香煙・線香・儀礼の煙",
            items: [
              { ja: "香煙に揺れる旗袍", en: "qipao wavering in incense smoke" },
              { ja: "線香の煙をまとうチャイナ", en: "chinese dress wrapped in incense-stick smoke" },
              { ja: "儀礼の煙に包まれる旗袍", en: "qipao enveloped in ceremonial smoke" },
              { ja: "香炉の気配が漂う旗袍", en: "qipao with the presence of a censer drifting around" },
              { ja: "薄煙越しの宮廷旗袍", en: "palace qipao seen through thin smoke" }
            ]
          },
          {
            title: "✨ 発光粉・月塵・微粒子",
            items: [
              { ja: "月塵を散らす旗袍", en: "qipao scattering moon dust" },
              { ja: "発光粉が舞うチャイナ", en: "chinese dress with glowing powder in the air" },
              { ja: "微粒子に縁取られる旗袍", en: "qipao outlined by floating particles" },
              { ja: "光粉の尾を引く月下チャイナ", en: "moonlit chinese dress trailing luminous powder" },
              { ja: "きらめく微粒子演出の旗袍", en: "qipao with sparkling particle effects" }
            ]
          },
          {
            title: "🪭 扇・香袋・演出小物連動",
            items: [
              { ja: "香袋を添えた旗袍", en: "qipao paired with a scented sachet" },
              { ja: "扇と香気が連動するチャイナ", en: "chinese dress synchronized with a fan and fragrance" },
              { ja: "香扇を持つ月下旗袍", en: "moonlit qipao holding a scented fan" },
              { ja: "小物の香り演出付き旗袍", en: "qipao with prop-linked fragrance effects" },
              { ja: "扇先に香煙が残るチャイナ", en: "chinese dress with incense smoke lingering at the fan tip" }
            ]
          }
        ]
      },
      {
        title: "🦢 首元・襟足・喉元特化",
        children: [
          {
            title: "🧷 高襟・立ち襟調整",
            items: [
              { ja: "高襟を強調した旗袍", en: "qipao with emphasized high collar" },
              { ja: "立ち襟が主役のチャイナ", en: "chinese dress with stand collar as focal point" },
              { ja: "首元を引き締める高襟旗袍", en: "high-collar qipao tightening the neckline" },
              { ja: "禁欲感のある立ち襟チャイナ", en: "restrained stand-collar chinese dress" },
              { ja: "端正な喉元を見せる高襟旗袍", en: "high-collar qipao showing a poised throat line" }
            ]
          },
          {
            title: "🌙 襟足・うなじ映え",
            items: [
              { ja: "襟足が映える旗袍", en: "qipao highlighting the nape line" },
              { ja: "うなじ見せの月下チャイナ", en: "moonlit chinese dress with visible nape" },
              { ja: "後ろ襟が美しいうなじ旗袍", en: "qipao with beautiful rear collar and nape" },
              { ja: "襟足に視線が落ちるチャイナ", en: "chinese dress drawing attention to the nape" },
              { ja: "まとめ髪と相性の良い襟足旗袍", en: "nape-focused qipao that pairs with an updo" }
            ]
          },
          {
            title: "💎 喉元装飾・ネックライン中央",
            items: [
              { ja: "喉元宝飾付き旗袍", en: "qipao with jeweled throat ornament" },
              { ja: "首元中央飾りのチャイナ", en: "chinese dress with central neck ornament" },
              { ja: "ネックライン宝石留め旗袍", en: "qipao with gemstone clasp at neckline" },
              { ja: "喉元に月飾りを置くチャイナ", en: "chinese dress with moon ornament at the throat" },
              { ja: "首元一点主役の装飾旗袍", en: "decorative qipao with single focal neck ornament" }
            ]
          },
          {
            title: "🪽 開き襟・抜け感首元",
            items: [
              { ja: "開き襟の抜け感旗袍", en: "qipao with open collar and airy neckline" },
              { ja: "柔らかい首元を見せるチャイナ", en: "chinese dress showing a soft neckline" },
              { ja: "首元に余白のある旗袍", en: "qipao with breathing space at the neckline" },
              { ja: "低め襟で抜け感を出すチャイナ", en: "lower-collar chinese dress with relaxed openness" },
              { ja: "色気を抑えて品を残す開き襟旗袍", en: "open-collar qipao keeping elegance over overt allure" }
            ]
          },
          {
            title: "⛓ 首鎖・チョーカー連動",
            items: [
              { ja: "首鎖と連動する旗袍", en: "qipao coordinated with neck chain" },
              { ja: "チョーカー映えのチャイナ", en: "chinese dress that highlights a choker" },
              { ja: "喉元鎖飾り付き旗袍", en: "qipao with throat chain ornament" },
              { ja: "首輪風アクセと噛み合うチャイナ", en: "chinese dress that pairs with collar-like accessories" },
              { ja: "装飾鎖が喉元に落ちる旗袍", en: "qipao with decorative chain falling at the throat" }
            ]
          }
        ]
      },
      {
        title: "🎯 胸元中央装飾・前立て中央線",
        children: [
          {
            title: "💠 胸元中央モチーフ",
            items: [
              { ja: "胸元中央に飾りを置く旗袍", en: "qipao with central chest ornament" },
              { ja: "中央宝飾主役のチャイナ", en: "chinese dress centered on a jewel ornament" },
              { ja: "胸元一点主役の旗袍", en: "qipao with a single focal chest embellishment" },
              { ja: "前面中央に月章を置くチャイナ", en: "chinese dress with a moon emblem at center front" },
              { ja: "胸元留め具主役の装飾旗袍", en: "decorative qipao focused on central chest clasp" }
            ]
          },
          {
            title: "📏 前立て中央線・縦ライン",
            items: [
              { ja: "前立て中央線を強調した旗袍", en: "qipao with emphasized central placket line" },
              { ja: "縦線が映えるチャイナ", en: "chinese dress with a striking vertical front line" },
              { ja: "中央縦ライン主役の旗袍", en: "qipao focused on central vertical line" },
              { ja: "前面を整える中央線チャイナ", en: "chinese dress with a structuring center line" },
              { ja: "視線を落とす縦導線の旗袍", en: "qipao with a vertical guide line drawing the eye downward" }
            ]
          },
          {
            title: "🔘 中央留め・連続盤扣",
            items: [
              { ja: "中央連続盤扣の旗袍", en: "qipao with continuous central pankou closures" },
              { ja: "胸元から縦に並ぶ留め具チャイナ", en: "chinese dress with closures aligned down the center chest" },
              { ja: "中央金具列が主役の旗袍", en: "qipao focused on a row of central metal fittings" },
              { ja: "前立て盤扣を強調したチャイナ", en: "chinese dress emphasizing pankou along the front placket" },
              { ja: "中央留めが映える整列旗袍", en: "orderly qipao with eye-catching central clasps" }
            ]
          },
          {
            title: "🧵 切替線・前面構造ライン",
            items: [
              { ja: "前面構造線を見せる旗袍", en: "qipao showing front structural seam lines" },
              { ja: "胸元切替が美しいチャイナ", en: "chinese dress with beautiful bust-line paneling" },
              { ja: "前面切替線主役の旗袍", en: "qipao focused on front panel transition lines" },
              { ja: "構造的な前立てラインのチャイナ", en: "chinese dress with structured placket line design" },
              { ja: "縫製線が映える旗袍", en: "qipao with visible elegant construction lines" }
            ]
          },
          {
            title: "✨ 中央発光線・未来前立て",
            items: [
              { ja: "中央発光ライン旗袍", en: "qipao with luminous central line" },
              { ja: "未来前立てを持つチャイナ", en: "chinese dress with futuristic front placket" },
              { ja: "胸元中央が光る旗袍", en: "qipao with glowing center chest line" },
              { ja: "縦発光導線のサイバーチャイナ", en: "cyber chinese dress with vertical luminous guide line" },
              { ja: "前面に光脈が走る旗袍", en: "qipao with a glowing pulse line across the front" }
            ]
          }
        ]
      },
      {
        title: "⛓ 背面金具・背中チェーン特化",
        children: [
          {
            title: "🔗 背面チェーン渡し",
            items: [
              { ja: "背中にチェーンを渡す旗袍", en: "qipao with chain crossing the back" },
              { ja: "背面連結鎖付きチャイナ", en: "chinese dress with connected back chains" },
              { ja: "背中縦チェーン装飾旗袍", en: "qipao with vertical chain decoration on the back" },
              { ja: "背面に細鎖を垂らすチャイナ", en: "chinese dress with thin chains hanging down the back" },
              { ja: "後ろ姿主役の背面鎖旗袍", en: "rear-view qipao focused on back chain ornamentation" }
            ]
          },
          {
            title: "🪙 背面金具・バッククラスプ",
            items: [
              { ja: "背面金具留めの旗袍", en: "qipao fastened with back metal clasps" },
              { ja: "バッククラスプ主役のチャイナ", en: "chinese dress centered on back clasp hardware" },
              { ja: "背中留め具が映える旗袍", en: "qipao with eye-catching back fasteners" },
              { ja: "後ろ金具列のあるチャイナ", en: "chinese dress with a row of rear metal fittings" },
              { ja: "背面装甲金具付き旗袍", en: "qipao with armored hardware on the back" }
            ]
          },
          {
            title: "🖤 拘束感・ハーネス背面",
            items: [
              { ja: "背面ハーネス付き旗袍", en: "qipao with back harness structure" },
              { ja: "拘束感のある背中装飾チャイナ", en: "chinese dress with restrained tension in back ornamentation" },
              { ja: "背面ベルト連動旗袍", en: "qipao linked with back belt structure" },
              { ja: "ハーネス寄せの後ろ姿チャイナ", en: "rear-view chinese dress leaning into harness styling" },
              { ja: "背面拘束線が走る旗袍", en: "qipao with restraining lines running across the back" }
            ]
          },
          {
            title: "🤖 近未来背面ユニット",
            items: [
              { ja: "近未来背面ユニット旗袍", en: "qipao with futuristic back unit" },
              { ja: "発光背面金具のチャイナ", en: "chinese dress with glowing rear hardware" },
              { ja: "背中デバイス連動旗袍", en: "qipao linked with a back device unit" },
              { ja: "機械背面装飾付きチャイナ", en: "chinese dress with mechanical rear ornamentation" },
              { ja: "サイバー背面チェーン旗袍", en: "cyber qipao with rear chain system" }
            ]
          },
          {
            title: "🌙 月下背面装飾・退廃鎖",
            items: [
              { ja: "月下に映える背面鎖旗袍", en: "moonlit qipao with decorative back chains" },
              { ja: "退廃鎖を背負うチャイナ", en: "chinese dress bearing decadent back chains" },
              { ja: "香煙と相性の良い背面金具旗袍", en: "back-hardware qipao that pairs with incense smoke" },
              { ja: "背徳感ある後ろ鎖チャイナ", en: "chinese dress with alluring forbidden rear chains" },
              { ja: "夜宴向け背面装飾旗袍", en: "back-adorned qipao for night banquets" }
            ]
          }
        ]
      },
      {
        title: "🍁 季節別チャイナ調整",
        children: [
          {
            title: "🌸 春の軽やか調整",
            items: [
              { ja: "春風向け軽やか旗袍", en: "light spring-breeze qipao" },
              { ja: "花見向け春旗袍", en: "spring qipao for blossom viewing" },
              { ja: "薄手春色チャイナ", en: "lightweight spring-colored chinese dress" },
              { ja: "梅桃寄せの春旗袍", en: "spring qipao leaning toward plum and peach tones" },
              { ja: "やわらかな春光を受ける旗袍", en: "qipao receiving soft spring light" }
            ]
          },
          {
            title: "☀ 夏の涼感・透け感調整",
            items: [
              { ja: "夏向け涼感旗袍", en: "cool-feel qipao for summer" },
              { ja: "薄紗で抜ける夏チャイナ", en: "summer chinese dress opened up with sheer gauze" },
              { ja: "湿光が似合う夏旗袍", en: "summer qipao suited to damp glow" },
              { ja: "水辺向けの軽装チャイナ", en: "light chinese dress for waterside scenes" },
              { ja: "蒸し暑さを逃がす夏旗袍", en: "summer qipao designed to release humid heat" }
            ]
          },
          {
            title: "🍂 秋の重ね・深色調整",
            items: [
              { ja: "秋色の深みを持つ旗袍", en: "qipao with deep autumn coloring" },
              { ja: "重ね布が映える秋チャイナ", en: "autumn chinese dress enhanced by layered fabric" },
              { ja: "乾いた風に合う旗袍", en: "qipao suited to dry autumn wind" },
              { ja: "紅葉寄せの秋旗袍", en: "autumn qipao leaning into maple tones" },
              { ja: "落ち着いた秋光を受けるチャイナ", en: "chinese dress receiving calm autumn light" }
            ]
          },
          {
            title: "❄ 冬の厚み・防寒調整",
            items: [
              { ja: "冬向け厚手旗袍", en: "thick winter qipao" },
              { ja: "防寒寄せの冬チャイナ", en: "winter chinese dress leaning toward warmth retention" },
              { ja: "毛皮合わせが似合う旗袍", en: "qipao that pairs well with fur" },
              { ja: "冷気に映える冬月旗袍", en: "winter moon qipao that stands out in cold air" },
              { ja: "重厚布で包む冬チャイナ", en: "winter chinese dress wrapped in heavy fabric" }
            ]
          },
          {
            title: "🌦 梅雨・湿季・夜露調整",
            items: [
              { ja: "湿季向け旗袍", en: "qipao for wet season" },
              { ja: "夜露が似合うチャイナ", en: "chinese dress suited to night dew" },
              { ja: "濡れ布演出向け旗袍", en: "qipao suited to wet-cloth staging" },
              { ja: "梅雨の薄煙が似合うチャイナ", en: "chinese dress that suits rainy-season haze" },
              { ja: "湿光と相性の良い旗袍", en: "qipao that pairs well with damp glow" }
            ]
          }
        ]
      },
      {
        title: "🎨 色系統別チャイナ調整",
        children: [
          {
            title: "⚪ 白・銀・月光系",
            items: [
              { ja: "白銀月光旗袍", en: "silver-white moonlight qipao" },
              { ja: "白基調の上品チャイナ", en: "elegant chinese dress with a white base" },
              { ja: "銀刺繍が映える旗袍", en: "qipao highlighted by silver embroidery" },
              { ja: "蒼白月光を帯びるチャイナ", en: "chinese dress carrying pale moonlight tones" },
              { ja: "雪光寄せの白旗袍", en: "white qipao leaning toward snowlight" }
            ]
          },
          {
            title: "🔴 赤・朱・血月系",
            items: [
              { ja: "朱赤旗袍", en: "vermilion qipao" },
              { ja: "血月色のチャイナ", en: "blood-moon colored chinese dress" },
              { ja: "紅金寄せの祝祭旗袍", en: "festive qipao leaning into crimson and gold" },
              { ja: "深紅主役の攻めチャイナ", en: "aggressive chinese dress centered on deep crimson" },
              { ja: "赤と黒を噛ませた旗袍", en: "qipao combining red and black" }
            ]
          },
          {
            title: "🔵 青・蒼・夜露系",
            items: [
              { ja: "蒼月旗袍", en: "blue-moon qipao" },
              { ja: "夜露色のチャイナ", en: "night-dew colored chinese dress" },
              { ja: "青銀寄せの旗袍", en: "qipao leaning into blue and silver" },
              { ja: "深蒼主役の月下チャイナ", en: "moonlit chinese dress centered on deep blue" },
              { ja: "冷色で整えた旗袍", en: "qipao balanced in cool color tones" }
            ]
          },
          {
            title: "🟢 玉・緑・翡翠系",
            items: [
              { ja: "翡翠色の旗袍", en: "jade-colored qipao" },
              { ja: "深緑主役のチャイナ", en: "chinese dress centered on deep green" },
              { ja: "玉飾りと噛み合う緑旗袍", en: "green qipao that pairs with jade ornaments" },
              { ja: "青緑寄せの宮廷チャイナ", en: "palace chinese dress leaning into blue-green tones" },
              { ja: "草木気配のある緑旗袍", en: "green qipao with a vegetal mood" }
            ]
          },
          {
            title: "⚫ 黒・紫・退廃系",
            items: [
              { ja: "漆黒旗袍", en: "jet-black qipao" },
              { ja: "黒紫退廃チャイナ", en: "black-purple decadent chinese dress" },
              { ja: "闇夜寄せの旗袍", en: "qipao leaning into midnight tones" },
              { ja: "紫煙が似合う黒チャイナ", en: "black chinese dress suited to violet smoke" },
              { ja: "退廃夜宴向けの黒旗袍", en: "black qipao for decadent night banquets" }
            ]
          }
        ]
      },
      {
        title: "🔥 攻めチャイナ設定",
        children: [
          {
            title: "✂ スリット・丈・カット設定",
            items: [
              { ja: "超ハイスリット旗袍", en: "ultra high slit cheongsam" },
              { ja: "ショート丈チャイナ", en: "short dress cheongsam" },
              { ja: "アシンメトリー裾チャイナ", en: "asymmetrical hem cheongsam" },
              { ja: "両脚見せスリット旗袍", en: "double side slit qipao" },
              { ja: "極端に脚線を見せる旗袍", en: "leg-emphasis qipao with extreme exposure line" }
            ]
          },
          {
            title: "💋 肌見せ・ボディライン設定",
            items: [
              { ja: "密着ボディライン旗袍", en: "body-hugging qipao" },
              { ja: "谷間強調チャイナ", en: "cleavage-emphasis chinese dress" },
              { ja: "肩落ちチャイナ", en: "off-shoulder chinese dress" },
              { ja: "横乳見せチャイナ", en: "side-bust reveal chinese dress" },
              { ja: "脚長見せミニ旗袍", en: "leg-lengthening mini qipao" }
            ]
          },
          {
            title: "🎛 攻めチャイナ合わせ技",
            items: [
              { ja: "深スリット＋密着旗袍", en: "high-slit plus body-hugging qipao" },
              { ja: "肩落ち＋谷間強調チャイナ", en: "off-shoulder plus cleavage-emphasis chinese dress" },
              { ja: "横乳見せ＋ミニ丈旗袍", en: "side-bust reveal plus mini-length qipao" },
              { ja: "脚長見せ＋深スリットチャイナ", en: "leg-lengthening plus high-slit chinese dress" },
              { ja: "密着＋高露出の攻め旗袍", en: "body-hugging high-exposure aggressive qipao" }
            ]
          },
          {
            title: "🖤 夜宴・退廃寄せの攻め設定",
            items: [
              { ja: "夜宴向け攻め旗袍", en: "aggressive qipao for night banquets" },
              { ja: "退廃感のある攻めチャイナ", en: "decadent aggressive chinese dress" },
              { ja: "背徳感を帯びた旗袍", en: "qipao with a forbidden decadent mood" },
              { ja: "月下に映える攻め旗袍", en: "aggressive qipao glowing under moonlight" },
              { ja: "香煙と相性の良い攻めチャイナ", en: "aggressive chinese dress that pairs well with incense smoke" }
            ]
          },
          {
            title: "🤖 近未来・拘束感寄せの攻め設定",
            items: [
              { ja: "近未来攻め旗袍", en: "futuristic aggressive qipao" },
              { ja: "ハーネス寄せ攻めチャイナ", en: "harness-leaning aggressive chinese dress" },
              { ja: "拘束感のある攻め旗袍", en: "aggressive qipao with restrained tension" },
              { ja: "金具強調の攻めチャイナ", en: "aggressive chinese dress with emphasized metal fittings" },
              { ja: "サイバー高露出旗袍", en: "cyber high-exposure qipao" }
            ]
          },
{
            title: "✂ スリット境界・脚見せ調整",
            items: [
              { ja: "脚見せ境界を整えた旗袍", en: "qipao with controlled leg exposure boundary" },
              { ja: "上品な脚見せスリット旗袍", en: "elegant slit qipao with refined leg reveal" },
              { ja: "太ももラインを調整したチャイナ", en: "chinese dress with adjusted thigh-line reveal" },
              { ja: "控えめ脚見せの旗袍", en: "qipao with modest leg exposure" },
              { ja: "動くと脚線が映えるスリット旗袍", en: "slit qipao whose leg line appears beautifully in motion" }
            ]
          },
          {
            title: "🩳 インナーショーツ・見え防止",
            items: [
              { ja: "見え防止インナー入り旗袍", en: "qipao with anti-exposure inner shorts" },
              { ja: "高スリット対応インナーショーツ", en: "inner shorts for high-slit qipao" },
              { ja: "レース縁の見え防止インナー", en: "lace-trim anti-exposure inner layer" },
              { ja: "動作に強い下層インナー旗袍", en: "qipao with movement-safe inner layer" },
              { ja: "近未来インナーショーツ付き旗袍", en: "qipao with futuristic inner shorts" }
            ]
          },
          {
            title: "🩲 ペチコート・下層布",
            items: [
              { ja: "ペチコート入り旗袍", en: "qipao with a petticoat layer" },
              { ja: "レース下層布のチャイナ", en: "chinese dress with lace underlayer cloth" },
              { ja: "薄紗の下層布を重ねた旗袍", en: "qipao layered with sheer underskirt cloth" },
              { ja: "宮廷風下層スカート旗袍", en: "palace-style qipao with inner skirt structure" },
              { ja: "仙気が漂う下層布付き旗袍", en: "qipao with ethereal drifting underskirt cloth" }
            ]
          },
          {
            title: "🌫 透け境界・布越し脚線",
            items: [
              { ja: "布越し脚線が映る旗袍", en: "qipao with leg silhouette seen through fabric" },
              { ja: "透け境界を持つスリットチャイナ", en: "slit chinese dress with transparent boundary panel" },
              { ja: "薄布越しに脚線が浮かぶ旗袍", en: "qipao with leg line faintly visible through thin cloth" },
              { ja: "半透明下裾のチャイナ", en: "chinese dress with semi-transparent lower hem" },
              { ja: "未来透けパネル付き旗袍", en: "qipao with futuristic translucent lower panels" }
            ]
          },
          {
            title: "🪡 ガーター接続・脚飾り連動",
            items: [
              { ja: "ガーター連動旗袍", en: "qipao with garter-linked lower structure" },
              { ja: "脚飾り接続のスリットチャイナ", en: "slit chinese dress linked to leg accessories" },
              { ja: "レースガーター付き旗袍", en: "qipao with lace garter integration" },
              { ja: "チェーンガーター連動チャイナ", en: "chinese dress with chain garter linkage" },
              { ja: "近未来脚ハーネス接続旗袍", en: "qipao connected to futuristic leg harness" }
            ]
          },
{
            title: "🎗 背面カット・背中開き",
            items: [
              { ja: "背中開きの旗袍", en: "open-back qipao" },
              { ja: "背面しずく開きチャイナ", en: "teardrop back-cut chinese dress" },
              { ja: "深背面スリット旗袍", en: "deep back-slit qipao" },
              { ja: "背中見せ月光旗袍", en: "moonlit back-reveal qipao" },
              { ja: "上品な背面開きチャイナ", en: "elegant back-open chinese dress" }
            ]
          },
          {
            title: "🎀 後ろ結び・背面装飾",
            items: [
              { ja: "背面大リボン旗袍", en: "qipao with large back ribbon" },
              { ja: "後ろ結び帯飾りチャイナ", en: "back-tied sash ornament chinese dress" },
              { ja: "背面房飾り付き旗袍", en: "qipao with back tassel ornament" },
              { ja: "後ろ垂れ布付きチャイナ", en: "chinese dress with back drape cloth" },
              { ja: "背面結び目主役旗袍", en: "back-knot focal qipao" }
            ]
          },
          {
            title: "🫧 後ろ髪・うなじ連動",
            items: [
              { ja: "うなじ映え旗袍", en: "nape-emphasized qipao" },
              { ja: "背面髪流れ連動チャイナ", en: "back-flowing-hair synchronized chinese dress" },
              { ja: "後ろ姿映えのまとめ髪旗袍", en: "updo-enhanced rear-view qipao" },
              { ja: "うなじ見せ後ろ姿チャイナ", en: "rear-view chinese dress with exposed nape" },
              { ja: "背中に流れる髪と旗袍", en: "hair flowing over the back with qipao" }
            ]
          },
          {
            title: "🌙 後ろ裾・引き姿シルエット",
            items: [
              { ja: "後ろ裾が流れる旗袍", en: "qipao with flowing rear hem" },
              { ja: "後ろ引き裾の月光チャイナ", en: "moonlit chinese dress with trailing back hem" },
              { ja: "歩行で揺れる後ろ裾旗袍", en: "rear hem-swaying qipao while walking" },
              { ja: "背面シルエット重視の旗袍", en: "qipao focused on rear silhouette" },
              { ja: "後ろ姿が美しい長裾チャイナ", en: "long-hem chinese dress with beautiful back view" }
            ]
          },
          {
            title: "👣 振り向き・歩き去り演出",
            items: [
              { ja: "振り向きざまの旗袍姿", en: "qipao pose while glancing back" },
              { ja: "歩き去る後ろ姿チャイナ", en: "walking-away rear-view chinese dress" },
              { ja: "退き際が映える旗袍", en: "qipao with a striking retreating silhouette" },
              { ja: "去り際の月下チャイナ", en: "moonlit chinese dress in the moment of leaving" },
              { ja: "振り返り主役の後ろ姿旗袍", en: "rear-view qipao centered on a turning glance" }
            ]
          }
        ]
      }

      ]
    }
  
,
    {
      title: "🎤 アイドル衣装特化コレクション",
      children: [
        { title: "🌟 王道アイドル", children: [
          { title: "✨ キラキラ王道", items: [{ ja: "キラキラ王道アイドル衣装", en: "sparkling classic idol costume" }, { ja: "王道フリルステージ衣装", en: "classic frilled stage costume" }, { ja: "光沢感のある王道アイドル衣装", en: "glossy classic idol outfit" }, { ja: "センター映え王道ドレス", en: "center-worthy classic idol dress" }, { ja: "笑顔映えの王道ステージ衣装", en: "smile-enhancing classic stage costume" }] },
          { title: "💎 清楚・上品", items: [{ ja: "清楚系アイドル衣装", en: "pure elegant idol outfit" }, { ja: "上品な白基調アイドルドレス", en: "elegant white-based idol dress" }, { ja: "控えめジュエルの上品衣装", en: "elegant costume with restrained jewels" }, { ja: "透明感重視のアイドル衣装", en: "transparent airy idol outfit" }, { ja: "柔光に映える清楚ステージ衣装", en: "pure stage costume glowing in soft light" }] },
          { title: "🌈 ポップ・元気", items: [{ ja: "元気系ポップアイドル衣装", en: "energetic pop idol outfit" }, { ja: "カラフル配色のライブ衣装", en: "colorful live costume" }, { ja: "動きやすいポップステージ衣装", en: "mobile pop stage costume" }, { ja: "明るい配色の王道アイドル服", en: "bright-colored classic idol costume" }, { ja: "跳ねる印象の元気アイドル衣装", en: "bouncy energetic idol outfit" }] },
          { title: "🎶 センター映え", items: [{ ja: "センター主役のアイドル衣装", en: "idol outfit designed for center position" }, { ja: "スポットライト映えステージ衣装", en: "spotlight-enhancing stage costume" }, { ja: "視線集中型アイドルドレス", en: "gaze-attracting idol dress" }, { ja: "中央映えの対称デザイン衣装", en: "symmetrical outfit that shines at center" }, { ja: "王道センターポジション衣装", en: "classic center-position idol costume" }] },
          { title: "☁ 透明感・柔光", items: [{ ja: "柔光に溶けるアイドル衣装", en: "idol costume melting into soft light" }, { ja: "透明感重視の白青アイドル服", en: "white-blue idol outfit focused on transparency" }, { ja: "ふわ光ベールのステージ衣装", en: "stage costume with soft glowing veil" }, { ja: "空気感のある軽やかアイドル衣装", en: "airy lightweight idol outfit" }, { ja: "淡色グラデの透明系ドレス", en: "transparent-style dress with pale gradient" }] }
        ] },
        { title: "🎀 甘ロリ・姫系アイドル", children: [
          { title: "🎀 リボン姫", items: [{ ja: "リボン姫系アイドル衣装", en: "ribbon princess idol outfit" }, { ja: "大リボン主役の姫ドレス", en: "princess dress focused on oversized ribbons" }, { ja: "甘ロリステージ衣装", en: "sweet lolita stage costume" }, { ja: "姫袖とリボンのアイドル服", en: "idol costume with princess sleeves and ribbons" }, { ja: "可憐な姫系ライブ衣装", en: "delicate princess-style live costume" }] },
          { title: "🍰 フリル甘め", items: [{ ja: "フリル多めの甘ロリアイドル衣装", en: "sweet idol outfit with abundant frills" }, { ja: "段フリルスカートの姫衣装", en: "princess outfit with tiered frill skirt" }, { ja: "ケーキみたいな甘ロリドレス", en: "cake-like sweet lolita dress" }, { ja: "ふわふわフリルのステージ衣装", en: "stage costume with fluffy frills" }, { ja: "砂糖菓子風アイドルドレス", en: "sugar-candy style idol dress" }] },
          { title: "🩷 パステル可憐", items: [{ ja: "パステル姫系アイドル衣装", en: "pastel princess idol outfit" }, { ja: "淡色配色の甘ロリ衣装", en: "sweet lolita outfit in pale colors" }, { ja: "桜色メインの可憐ドレス", en: "delicate dress centered on cherry-blossom pink" }, { ja: "ふんわり色調の姫ステージ衣装", en: "soft-toned princess stage costume" }, { ja: "ぬいぐるみ感のある可愛い衣装", en: "cute outfit with plush-like softness" }] },
          { title: "👑 ティアラ・王女感", items: [{ ja: "ティアラ付きアイドル衣装", en: "idol outfit with tiara" }, { ja: "王女感のあるアイドルドレス", en: "idol dress with princess-like nobility" }, { ja: "宝石ティアラ主役のステージ衣装", en: "stage costume centered on a jeweled tiara" }, { ja: "ロイヤルガーリーなライブ服", en: "royal girly live outfit" }, { ja: "気高い姫系センター衣装", en: "noble princess-style center costume" }] },
          { title: "🧸 ドール・ぬいぐるみ感", items: [{ ja: "ドール風アイドル衣装", en: "doll-like idol outfit" }, { ja: "ぬいぐるみ感のある甘ロリ服", en: "sweet lolita outfit with plush-toy softness" }, { ja: "球体関節人形みたいな姫ドレス", en: "princess dress like a ball-jointed doll" }, { ja: "可動人形感のあるステージ衣装", en: "stage costume with articulated doll feel" }, { ja: "愛玩感のある可憐アイドル衣装", en: "adorably delicate idol outfit" }] }
        ] },
        { title: "👑 高級・ディーヴァ系アイドル", children: [
          { title: "💠 宝石主役", items: [{ ja: "宝石主役のディーヴァ衣装", en: "diva outfit centered on jewels" }, { ja: "高級宝飾アイドルドレス", en: "luxury jewel idol dress" }, { ja: "胸元宝飾が強いステージ衣装", en: "stage costume with strong chest jewel emphasis" }, { ja: "ジュエルラインが走るライブ服", en: "live outfit traced by jewel lines" }, { ja: "ラグジュアリーな宝石装飾衣装", en: "luxurious jewel-ornamented costume" }] },
          { title: "🥂 夜会・高級感", items: [{ ja: "夜会風ディーヴァ衣装", en: "soirée-style diva outfit" }, { ja: "上質サテンの高級ステージ衣装", en: "premium satin high-class stage costume" }, { ja: "シャンパン映えのライブドレス", en: "live dress that suits a champagne mood" }, { ja: "艶やかな高級感のアイドル服", en: "idol costume with glossy luxury" }, { ja: "洗練された大人ディーヴァ衣装", en: "sophisticated mature diva outfit" }] },
          { title: "🖤 モノトーン豪華", items: [{ ja: "黒白基調の高級アイドル衣装", en: "luxury idol outfit in monochrome" }, { ja: "モノトーンディーヴァドレス", en: "monochrome diva dress" }, { ja: "白黒宝飾のステージ衣装", en: "stage costume with black-white jewel accents" }, { ja: "気品ある黒ドレス系アイドル服", en: "noble black-dress idol outfit" }, { ja: "漆黒と銀の高級ライブ衣装", en: "luxury live costume in jet black and silver" }] },
          { title: "🌹 大人セクシー", items: [{ ja: "大人セクシーなディーヴァ衣装", en: "mature sexy diva outfit" }, { ja: "曲線美を活かす高級アイドル服", en: "luxury idol costume enhancing body curves" }, { ja: "艶っぽい夜ステージドレス", en: "sensual night-stage dress" }, { ja: "落ち着いた色香のライブ衣装", en: "live outfit with composed allure" }, { ja: "視線を奪う大人ディーヴァ服", en: "mature diva costume that steals attention" }] },
          { title: "🏛 クラシカル女王", items: [{ ja: "クラシカル女王系アイドル衣装", en: "classical queen-style idol outfit" }, { ja: "重厚感あるロイヤルディーヴァ服", en: "royal diva costume with gravitas" }, { ja: "王座映えの高級ステージドレス", en: "high-class stage dress worthy of a throne" }, { ja: "荘厳な女王シルエット衣装", en: "majestic queen-silhouette costume" }, { ja: "古典豪華なライブドレス", en: "classically luxurious live dress" }] }
        ] },
        { title: "⚡ サイバー・近未来アイドル", children: [
          { title: "💡 ネオン発光", items: [{ ja: "ネオン発光アイドル衣装", en: "neon glowing idol outfit" }, { ja: "LEDラインの近未来ステージ衣装", en: "futuristic stage costume with LED lines" }, { ja: "発光縁取りサイバーアイドル服", en: "cyber idol costume with luminous trim" }, { ja: "電飾が走るライブ衣装", en: "live costume traced by electric lights" }, { ja: "ネオン映えセンター衣装", en: "center costume that shines in neon" }] },
          { title: "🔷 メタリック・未来素材", items: [{ ja: "メタリック素材のアイドル衣装", en: "idol outfit with metallic materials" }, { ja: "未来繊維のサイバードレス", en: "cyber dress made of future textile" }, { ja: "ホログラム質感のライブ衣装", en: "live costume with hologram texture" }, { ja: "硬質光沢の近未来アイドル服", en: "futuristic idol costume with hard glossy finish" }, { ja: "高反射のステージスーツ", en: "high-reflective stage suit" }] },
          { title: "🎛 機材連動", items: [{ ja: "ヘッドセット連動のサイバー衣装", en: "cyber outfit linked to a headset" }, { ja: "マイクアーム付き近未来服", en: "futuristic outfit with microphone arm" }, { ja: "デバイス内蔵アイドル衣装", en: "idol outfit with built-in devices" }, { ja: "機材と噛み合うネオンライブ服", en: "neon live outfit coordinated with equipment" }, { ja: "舞台装置連動のセンター衣装", en: "center costume linked with stage devices" }] },
          { title: "🌀 デジタル・ホログラム", items: [{ ja: "ホログラム重ねのアイドル衣装", en: "idol outfit layered with holograms" }, { ja: "デジタル粒子を帯びるライブ服", en: "live costume carrying digital particles" }, { ja: "透過パネル付きサイバー衣装", en: "cyber outfit with translucent panels" }, { ja: "情報表示風の未来ステージ服", en: "future stage costume like an information display" }, { ja: "仮想感のある近未来アイドル服", en: "futuristic idol costume with virtual feel" }] },
          { title: "🌃 夜景・都市光", items: [{ ja: "都市夜景映えサイバー衣装", en: "cyber outfit suited to city nightscape" }, { ja: "夜光に負けないネオン衣装", en: "neon outfit that stands against city lights" }, { ja: "深夜ライブ向け未来服", en: "future outfit for late-night live stages" }, { ja: "電脳都市感のあるアイドル衣装", en: "idol outfit with cyber city mood" }, { ja: "蒼い夜光を受けるステージ服", en: "stage costume receiving blue night light" }] }
        ] },
        { title: "🖤 ダーク・病みかわアイドル", children: [
          { title: "🖤 病みかわ", items: [{ ja: "病みかわアイドル衣装", en: "yamikawa idol outfit" }, { ja: "黒ピンク配色の病みかわ服", en: "yamikawa costume in black and pink" }, { ja: "かわいさと闇を混ぜたライブ衣装", en: "live outfit blending cuteness and darkness" }, { ja: "ぬい傷風装飾の病みアイドル服", en: "dark idol costume with stitched-plush styling" }, { ja: "甘さの奥に毒を持つステージ衣装", en: "stage costume with poison beneath sweetness" }] },
          { title: "⛓ ダーク拘束感", items: [{ ja: "チェーン付きダークアイドル衣装", en: "dark idol outfit with chains" }, { ja: "拘束感のある病みステージ服", en: "dark stage costume with restrained tension" }, { ja: "ハーネス寄せのダーク衣装", en: "dark idol costume leaning into harness styling" }, { ja: "金具強めの病みかわライブ服", en: "yamikawa live costume with emphasized hardware" }, { ja: "夜鎖モチーフのアイドル服", en: "idol outfit using nocturnal chain motifs" }] },
          { title: "🌙 深夜感・退廃感", items: [{ ja: "深夜ライブ向けダーク衣装", en: "dark outfit for late-night live performances" }, { ja: "退廃感あるアイドルドレス", en: "idol dress with decadent mood" }, { ja: "月下で映える病みかわ衣装", en: "yamikawa outfit that shines under moonlight" }, { ja: "香煙が似合うダークライブ服", en: "dark live costume suited to incense smoke" }, { ja: "夜に溶ける退廃ステージ衣装", en: "decadent stage costume dissolving into the night" }] },
          { title: "🥀 ゴシック寄り", items: [{ ja: "ゴシック寄せのダークアイドル衣装", en: "gothic-leaning dark idol outfit" }, { ja: "黒レース主体の病み衣装", en: "dark outfit centered on black lace" }, { ja: "荘厳ゴシックなライブドレス", en: "majestic gothic live dress" }, { ja: "退廃ゴシック姫袖衣装", en: "decadent gothic outfit with princess sleeves" }, { ja: "教会光に映えるダークアイドル服", en: "dark idol costume glowing in chapel light" }] },
          { title: "🩸 ダークセンター映え", items: [{ ja: "闇センター主役のアイドル衣装", en: "dark center-focused idol outfit" }, { ja: "視線を刺す病みかわセンター服", en: "center costume with piercing yamikawa allure" }, { ja: "中央映えする退廃ライブ衣装", en: "decadent live outfit that commands center" }, { ja: "黒赤中心の主役ドレス", en: "center-stage dress in black and red" }, { ja: "静かな狂気を帯びるセンター衣装", en: "center outfit carrying quiet madness" }] }
        ] },
        { title: "👗 シルエット・スカート特化", children: [{ title: "🎂 段スカート・広がり", items: [{ ja: "段スカートのアイドル衣装", en: "idol outfit with tiered skirt" }, { ja: "ふんわり広がるステージスカート", en: "flared stage skirt" }, { ja: "ボリューム大のライブスカート", en: "high-volume live skirt" }, { ja: "回転映えの広がりスカート", en: "spinning-friendly wide skirt" }, { ja: "王道フレアのアイドル服", en: "classic flared idol costume" }] }, { title: "✂ 前後差・アシメ裾", items: [{ ja: "前後差スカートのアイドル衣装", en: "idol costume with high-low skirt" }, { ja: "アシンメトリー裾のライブ服", en: "live outfit with asymmetrical hem" }, { ja: "片側長裾のステージ衣装", en: "stage costume with one-sided long hem" }, { ja: "斜め裾のセンター衣装", en: "center costume with diagonal hem" }, { ja: "動きで映える変形スカート", en: "deformed skirt that shines in motion" }] }, { title: "🪽 後ろ引き・ミニ前裾", items: [{ ja: "後ろ引きスカートのアイドル衣装", en: "idol outfit with trailing back skirt" }, { ja: "前短後長のステージ服", en: "front-short back-long stage costume" }, { ja: "脚見せ前裾のライブ衣装", en: "live costume with leg-revealing front hem" }, { ja: "引き裾ミニのアイドルドレス", en: "idol dress with trailing mini front" }, { ja: "センター映えのトレーン付き衣装", en: "center-worthy costume with train" }] }, { title: "🫧 軽やかレイヤー", items: [{ ja: "軽やかレイヤースカート", en: "light layered skirt" }, { ja: "空気を含む薄布スカート", en: "airy thin-fabric skirt" }, { ja: "透け重ねのステージ裾", en: "stage hem with sheer layering" }, { ja: "風に浮くアイドルスカート", en: "idol skirt floating in the wind" }, { ja: "柔らかい段重ねのライブ裾", en: "soft tiered live hem" }] }, { title: "🔺 構造的シルエット", items: [{ ja: "構造的シルエットのアイドル衣装", en: "idol outfit with structured silhouette" }, { ja: "幾何ラインのスカート衣装", en: "skirt costume with geometric lines" }, { ja: "立体裁断のステージ服", en: "stage costume with sculptural tailoring" }, { ja: "輪郭が強いライブシルエット", en: "live silhouette with strong contour" }, { ja: "形そのものが主役のアイドル衣装", en: "idol outfit whose shape itself is the focal point" }] }] },
        { title: "🧵 生地・質感特化", children: [{ title: "✨ サテン・シルク光沢", items: [{ ja: "サテン光沢のアイドル衣装", en: "idol outfit with satin sheen" }, { ja: "シルク感のあるステージドレス", en: "stage dress with silk feel" }, { ja: "艶布主体のライブ衣装", en: "live costume centered on glossy fabric" }, { ja: "光沢面が美しいアイドル服", en: "idol costume with beautiful glossy surfaces" }, { ja: "なめらか光沢のセンター衣装", en: "center costume with smooth sheen" }] }, { title: "🌫 チュール・オーガンジー", items: [{ ja: "チュール重ねのアイドル衣装", en: "idol outfit layered with tulle" }, { ja: "オーガンジーの透け感ドレス", en: "dress with organza transparency" }, { ja: "薄布が重なるライブ衣装", en: "live costume with layered sheer fabric" }, { ja: "ベール感のあるステージ服", en: "stage costume with veiled texture" }, { ja: "軽やか透け布のアイドル衣装", en: "idol outfit with airy sheer cloth" }] }, { title: "💎 スパンコール・反射素材", items: [{ ja: "スパンコール煌めき衣装", en: "sequined sparkling costume" }, { ja: "反射素材のライブ衣装", en: "live costume with reflective materials" }, { ja: "光粒が散るステージドレス", en: "stage dress scattering light particles" }, { ja: "鏡面寄りのアイドル服", en: "idol costume leaning into mirror-like shine" }, { ja: "照明を返すキラキラ衣装", en: "sparkling outfit that reflects stage lights" }] }, { title: "🖤 レザー・硬質素材", items: [{ ja: "レザー調のアイドル衣装", en: "idol outfit with leather-like texture" }, { ja: "硬質素材のダークライブ服", en: "dark live costume with rigid materials" }, { ja: "艶黒レザー寄りステージ衣装", en: "stage costume leaning into glossy black leather" }, { ja: "ハード質感のサイバー服", en: "cyber costume with hard material feel" }, { ja: "金具映えする硬質アイドル衣装", en: "idol outfit with rigid materials that suit hardware" }] }, { title: "🔮 未来素材・ホログラム布", items: [{ ja: "未来素材のアイドル衣装", en: "idol outfit made of futuristic materials" }, { ja: "ホログラム布のサイバー服", en: "cyber costume with hologram fabric" }, { ja: "偏光質感のステージ衣装", en: "stage costume with iridescent texture" }, { ja: "発光織布のライブドレス", en: "live dress with luminous woven cloth" }, { ja: "近未来反射布のアイドル衣装", en: "idol outfit with futuristic reflective fabric" }] }] },
        { title: "✨ 装飾・ジュエル・スパンコール", children: [{ title: "💎 胸元ジュエル", items: [{ ja: "胸元ジュエルのアイドル衣装", en: "idol outfit with chest jewels" }, { ja: "中央宝飾主役のステージ衣装", en: "stage costume centered on jewel ornament" }, { ja: "胸元に宝石が集まるライブ服", en: "live costume with gemstones gathered at the chest" }, { ja: "ネックライン宝飾のドレス", en: "dress with jeweled neckline" }, { ja: "胸元きらめき強化アイドル服", en: "idol costume with enhanced chest sparkle" }] }, { title: "🌟 星粒・きらめき散布", items: [{ ja: "星粒きらめきのアイドル衣装", en: "idol outfit with starry sparkle" }, { ja: "細かい光粒を散らしたライブ服", en: "live costume scattered with tiny light particles" }, { ja: "微細ジュエルが散るステージ衣装", en: "stage costume scattered with fine jewels" }, { ja: "星屑風のきらめきドレス", en: "sparkling dress like stardust" }, { ja: "全体に光点が散るアイドル衣装", en: "idol outfit with luminous points all over" }] }, { title: "🪩 スパンコール強化", items: [{ ja: "スパンコール強化アイドル衣装", en: "idol outfit with strong sequin presence" }, { ja: "光盤みたいに輝くライブ服", en: "live costume shining like disco mirrors" }, { ja: "反射片が多いステージ衣装", en: "stage costume with many reflective pieces" }, { ja: "踊りで光るスパンコールドレス", en: "sequined dress that flashes while dancing" }, { ja: "照明返しの強いアイドル服", en: "idol costume with strong light return" }] }, { title: "👑 王冠・紋章装飾", items: [{ ja: "王冠モチーフのアイドル衣装", en: "idol outfit with crown motif" }, { ja: "紋章入りディーヴァドレス", en: "diva dress with emblem motifs" }, { ja: "ロイヤル宝飾のライブ衣装", en: "live costume with royal jewel decorations" }, { ja: "気高い紋章ラインのステージ服", en: "stage costume with noble emblem lines" }, { ja: "女王感を出す装飾アイドル衣装", en: "ornamented idol costume giving queenly presence" }] }, { title: "⚡ 発光装飾・LEDライン", items: [{ ja: "発光装飾付きアイドル衣装", en: "idol outfit with luminous decorations" }, { ja: "LEDラインのステージドレス", en: "stage dress with LED lines" }, { ja: "電飾ジュエルのライブ衣装", en: "live costume with electrified jewel accents" }, { ja: "ネオン縁飾りのアイドル服", en: "idol costume with neon trim decoration" }, { ja: "未来感のある発光宝飾衣装", en: "luminous jeweled costume with futuristic feel" }] }] },
        { title: "🎀 リボン・フリル・レース", children: [{ title: "🎀 大リボン・結び", items: [{ ja: "大リボン主役のアイドル衣装", en: "idol outfit focused on large ribbons" }, { ja: "背中大リボンのステージ服", en: "stage costume with oversized back ribbon" }, { ja: "胸元結びリボンのライブ衣装", en: "live costume with bow at the chest" }, { ja: "腰リボン強化アイドル服", en: "idol costume with emphasized waist ribbons" }, { ja: "サイド結びが映える衣装", en: "costume with striking side bow ties" }] }, { title: "🍰 フリル層", items: [{ ja: "フリル層が厚いアイドル衣装", en: "idol outfit with thick frill layering" }, { ja: "胸元フリルのステージ服", en: "stage costume with chest frills" }, { ja: "袖先フリルのライブ衣装", en: "live costume with frilled sleeve ends" }, { ja: "スカートフリル多めのアイドル服", en: "idol costume with abundant skirt frills" }, { ja: "甘さ全振りのフリルドレス", en: "frill dress pushed fully toward sweetness" }] }, { title: "🕊 レース重ね", items: [{ ja: "レース重ねのアイドル衣装", en: "idol outfit layered with lace" }, { ja: "黒レースのダークライブ服", en: "dark live costume with black lace" }, { ja: "白レースの清楚ステージ衣装", en: "pure stage costume with white lace" }, { ja: "袖透けレースのドレス", en: "dress with sheer lace sleeves" }, { ja: "繊細レース主体のアイドル服", en: "idol costume centered on delicate lace" }] }, { title: "🌸 可憐装飾ミックス", items: [{ ja: "リボンとレースの可憐衣装", en: "delicate outfit mixing ribbons and lace" }, { ja: "花飾り入り姫系ステージ服", en: "princess stage costume with floral ornaments" }, { ja: "フリルと宝飾の甘いライブ服", en: "sweet live costume mixing frills and jewels" }, { ja: "可愛い要素を詰めたアイドル衣装", en: "idol outfit packed with cute elements" }, { ja: "愛らしさ重視の装飾ドレス", en: "decorative dress focused on loveliness" }] }, { title: "🖤 病みかわ装飾", items: [{ ja: "黒リボン病みかわアイドル衣装", en: "yamikawa idol outfit with black ribbons" }, { ja: "黒レースとハートのライブ服", en: "live costume with black lace and hearts" }, { ja: "毒かわフリルのステージ衣装", en: "stage costume with poisonous-cute frills" }, { ja: "甘さの中に闇があるアイドル服", en: "idol costume mixing sweetness with darkness" }, { ja: "鎖とリボンの病みかわ衣装", en: "yamikawa costume combining chains and ribbons" }] }] },
        { title: "🦵 脚・ニーハイ・タイツ", children: [{ title: "🧦 ニーハイ・オーバーニー", items: [{ ja: "ニーハイ合わせのアイドル衣装", en: "idol outfit paired with knee-highs" }, { ja: "オーバーニー映えステージ服", en: "stage costume that suits over-knees" }, { ja: "絶対領域を作るライブ衣装", en: "live costume creating a zettai-ryoiki effect" }, { ja: "脚線を強調するニーハイ衣装", en: "idol costume emphasizing leg lines with knee-highs" }, { ja: "リボン付きニーハイのアイドル服", en: "idol costume with ribboned knee-highs" }] }, { title: "🕸 網・レースタイツ", items: [{ ja: "レースタイツのアイドル衣装", en: "idol outfit with lace tights" }, { ja: "網タイツ寄せのダークライブ服", en: "dark live costume leaning into fishnets" }, { ja: "脚飾り重視のタイツ衣装", en: "tights-focused costume emphasizing leg decoration" }, { ja: "透け脚線のステージ服", en: "stage costume with semi-sheer leg lines" }, { ja: "細かい網目のアイドルタイツ", en: "idol tights with fine mesh" }] }, { title: "🎀 ガーター・脚飾り", items: [{ ja: "ガーター付きアイドル衣装", en: "idol outfit with garters" }, { ja: "脚飾り主役のライブ服", en: "live costume focused on leg ornaments" }, { ja: "太ももアクセが映えるステージ衣装", en: "stage costume highlighting thigh accessories" }, { ja: "脚帯が主役のダークアイドル服", en: "dark idol costume focused on thigh bands" }, { ja: "チェーン脚飾りの病みかわ衣装", en: "yamikawa costume with chain leg ornaments" }] }, { title: "✨ 脚線強調・光演出", items: [{ ja: "脚線強調のアイドル衣装", en: "idol outfit emphasizing leg lines" }, { ja: "照明で脚が映えるライブ服", en: "live costume making legs stand out under lights" }, { ja: "発光ライン入りレッグ衣装", en: "legwear outfit with glowing lines" }, { ja: "サイバー脚線のステージ衣装", en: "stage costume with cyber leg lines" }, { ja: "細見え重視のレッグデザイン", en: "leg design focused on a slim silhouette" }] }, { title: "👠 脚と靴の連動", items: [{ ja: "脚と靴が一体感あるアイドル衣装", en: "idol outfit with coordinated legwear and shoes" }, { ja: "ニーハイとブーツ連動のライブ服", en: "live costume linking knee-highs with boots" }, { ja: "脚飾りとヒールが噛み合う衣装", en: "costume coordinating leg ornaments with heels" }, { ja: "足元まで統一感のあるステージ服", en: "stage costume with coherence down to the feet" }, { ja: "脚線から足先まで流れるアイドル衣装", en: "idol outfit flowing from leg line to toe" }] }] },
        { title: "👑 頭部アクセ・髪飾り", children: [{ title: "👑 ティアラ・王冠", items: [{ ja: "ティアラ付きアイドル衣装", en: "idol outfit with tiara" }, { ja: "王冠モチーフのアイドル衣装", en: "idol outfit with crown motif" }, { ja: "小王冠が映えるライブ服", en: "live costume that highlights a mini crown" }, { ja: "ロイヤル系ヘッドアクセ衣装", en: "royal head-accessory idol outfit" }, { ja: "女王感を出す頭飾り付き衣装", en: "idol costume with headpiece enhancing queenly aura" }] }, { title: "🌸 花飾り・リボン髪飾り", items: [{ ja: "花飾り付きアイドル衣装", en: "idol outfit with floral headpiece" }, { ja: "大リボン髪飾りのライブ服", en: "live costume with oversized ribbon hair accessory" }, { ja: "両サイド髪飾りのステージ衣装", en: "stage costume with twin side hair ornaments" }, { ja: "姫系ヘアアクセが映える衣装", en: "idol outfit suiting princess-style hair accessories" }, { ja: "花とリボンを混ぜた頭飾り衣装", en: "idol costume with mixed floral and ribbon head ornaments" }] }, { title: "⚡ サイバーヘッドギア", items: [{ ja: "サイバーヘッドギア付き衣装", en: "idol outfit with cyber headgear" }, { ja: "発光カチューシャの近未来服", en: "futuristic outfit with luminous headband" }, { ja: "デバイス耳飾りのライブ衣装", en: "live costume with device-like ear ornaments" }, { ja: "ネオンヘッドアクセのステージ服", en: "stage costume with neon head accessory" }, { ja: "近未来バイザー系アイドル衣装", en: "idol outfit with futuristic visor styling" }] }, { title: "🖤 ダーク髪飾り", items: [{ ja: "黒薔薇髪飾りのダーク衣装", en: "dark idol outfit with black rose hair accessory" }, { ja: "病みかわヘッドアクセのライブ服", en: "yamikawa live costume with dark head accessory" }, { ja: "鎖混じりの髪飾りステージ衣装", en: "stage costume with chain-mixed hair ornament" }, { ja: "闇色リボンのアイドル服", en: "idol outfit with dark-toned ribbons" }, { ja: "退廃感ある頭飾りの衣装", en: "idol costume with decadent headpiece" }] }, { title: "✨ 額飾り・顔まわり装飾", items: [{ ja: "額飾り付きアイドル衣装", en: "idol outfit with forehead ornament" }, { ja: "顔まわり宝飾のライブ服", en: "live costume with face-framing jewel ornaments" }, { ja: "こめかみ装飾のステージ衣装", en: "stage costume with temple ornaments" }, { ja: "頬横チェーンのアイドル服", en: "idol outfit with side-face chains" }, { ja: "視線を集める顔まわりアクセ衣装", en: "idol costume with eye-catching face accessories" }] }] },
        { title: "🎤 マイク・ヘッドセット・機材連動", children: [{ title: "🎤 ハンドマイク映え", items: [{ ja: "ハンドマイク映えのアイドル衣装", en: "idol outfit that suits a handheld microphone" }, { ja: "マイクを持って完成するライブ服", en: "live costume completed by holding a microphone" }, { ja: "歌唱ポーズ映えステージ衣装", en: "stage costume that shines in singing poses" }, { ja: "片手マイク前提のアイドル服", en: "idol outfit designed for one-hand mic performance" }, { ja: "ボーカル主役のマイク連動衣装", en: "microphone-linked outfit focused on the vocalist" }] }, { title: "🎧 ヘッドセット・インカム", items: [{ ja: "ヘッドセット付きアイドル衣装", en: "idol outfit with headset" }, { ja: "インカム連動のステージ衣装", en: "stage costume coordinated with in-ear comms" }, { ja: "両手を空けるライブ服", en: "live costume designed for hands-free performance" }, { ja: "ダンス寄りヘッドセット衣装", en: "dance-focused idol outfit with headset" }, { ja: "サイバーインカムの近未来服", en: "futuristic outfit with cyber in-ear mic" }] }, { title: "🔊 スピーカー・音波演出", items: [{ ja: "音波演出と噛み合うアイドル衣装", en: "idol outfit that pairs with soundwave effects" }, { ja: "スピーカー映えのライブ服", en: "live costume suited to speaker visuals" }, { ja: "低音強めステージ演出衣装", en: "stage outfit suited to bass-heavy effects" }, { ja: "音圧のあるライブ映え衣装", en: "costume that shines with strong sound pressure" }, { ja: "音波ライン付きサイバー衣装", en: "cyber costume with soundwave lines" }] }, { title: "💡 舞台装置リンク", items: [{ ja: "舞台装置と連動するアイドル衣装", en: "idol outfit linked with stage devices" }, { ja: "昇降演出向けステージ衣装", en: "stage costume suited to lift effects" }, { ja: "可動パネル映えのライブ服", en: "live costume matching moving panel effects" }, { ja: "大型モニター背景と噛み合う衣装", en: "costume coordinating with large monitor backdrops" }, { ja: "演出連動のセンター衣装", en: "center costume coordinated with special effects" }] }, { title: "🤖 近未来機材融合", items: [{ ja: "未来機材融合アイドル衣装", en: "idol outfit fused with futuristic equipment" }, { ja: "マイクアーム一体のサイバー服", en: "cyber costume integrated with microphone arm" }, { ja: "背面デバイス連動ステージ衣装", en: "stage costume linked to a rear device" }, { ja: "情報表示機材と噛み合う衣装", en: "costume coordinated with HUD-like devices" }, { ja: "機材ごとデザインされたアイドル服", en: "idol costume designed together with performance gear" }] }] },
        { title: "💡 ライト・紙吹雪・ステージ演出", children: [{ title: "✨ スポットライト映え", items: [{ ja: "スポットライト映えアイドル衣装", en: "idol outfit that shines under spotlight" }, { ja: "逆光で輪郭が立つライブ服", en: "live costume with silhouette in backlight" }, { ja: "照明を受けて完成するステージ衣装", en: "stage costume completed by lighting" }, { ja: "強光に負けない中心衣装", en: "center costume that holds up under strong light" }, { ja: "ハイライトが走るアイドル服", en: "idol outfit streaked by highlights" }] }, { title: "🎉 紙吹雪・グリッター", items: [{ ja: "紙吹雪映えのアイドル衣装", en: "idol outfit that shines with confetti" }, { ja: "グリッター演出向けライブ服", en: "live costume for glitter effects" }, { ja: "舞い散る光片と噛み合う衣装", en: "costume coordinated with floating light fragments" }, { ja: "祝祭感のあるステージドレス", en: "stage dress with celebratory mood" }, { ja: "ラストサビ映えの華やか衣装", en: "glamorous outfit for the final chorus" }] }, { title: "🌫 スモーク・霧演出", items: [{ ja: "スモーク映えのアイドル衣装", en: "idol outfit that suits smoke effects" }, { ja: "薄霧の中で光るライブ服", en: "live costume glowing in thin fog" }, { ja: "霧幕を裂くステージ衣装", en: "stage costume cutting through mist" }, { ja: "湿光と相性の良いアイドル服", en: "idol outfit that pairs with damp glow" }, { ja: "神秘感を増す霧演出衣装", en: "costume enhanced by mystical fog effects" }] }, { title: "🔥 熱狂・観客光", items: [{ ja: "観客光を受けるアイドル衣装", en: "idol outfit receiving crowd light" }, { ja: "ライブ熱狂を背負うステージ服", en: "stage costume carrying live-show frenzy" }, { ja: "歓声に負けない主役衣装", en: "main-character outfit that stands against roaring cheers" }, { ja: "ペンライト海に映えるライブ服", en: "live costume suited to a sea of penlights" }, { ja: "熱量を増幅するアイドル衣装", en: "idol outfit amplifying crowd energy" }] }, { title: "🌌 幻想・星空演出", items: [{ ja: "星空演出と噛み合うアイドル衣装", en: "idol outfit matching starry-sky effects" }, { ja: "幻想光の中で映えるステージ服", en: "stage costume shining in fantasy light" }, { ja: "月光寄りのロマンチックライブ衣装", en: "romantic live outfit leaning into moonlight" }, { ja: "きらめく夜空演出向けドレス", en: "dress for sparkling night-sky staging" }, { ja: "夢見感のあるアイドル衣装", en: "dreamlike idol outfit" }] }] },
        {
        title: "💋 攻めアイドル設定",
        children: [
          { title: "✂ 露出・カット強調", items: [
            { ja: "高露出寄せの攻めアイドル衣装", en: "aggressive idol outfit with high exposure styling" },
            { ja: "サイドカット入りライブ衣装", en: "live outfit with side-cut design" },
            { ja: "脚見せ強調の攻めアイドル服", en: "aggressive idol costume emphasizing leg reveal" },
            { ja: "肩見せ寄せの挑発アイドル衣装", en: "provocative idol outfit with exposed shoulders" },
            { ja: "大胆なカットラインのステージ衣装", en: "stage outfit with bold cut lines" }
          ] },
          { title: "💎 密着・ボディライン強調", items: [
            { ja: "密着シルエットの攻めアイドル衣装", en: "body-hugging aggressive idol outfit" },
            { ja: "ボディライン主役のステージ衣装", en: "stage outfit focused on body line" },
            { ja: "腰線が映える攻めアイドル服", en: "aggressive idol costume emphasizing waistline" },
            { ja: "曲線を拾うフィット衣装", en: "fitted costume tracing body curves" },
            { ja: "体のラインを見せるライブ衣装", en: "live outfit showing the body silhouette" }
          ] },
          { title: "🔥 熱狂・ライブ挑発設定", items: [
            { ja: "煽りに強い攻めアイドル衣装", en: "aggressive idol outfit suited for hyping the crowd" },
            { ja: "熱狂ライブ向けの挑発衣装", en: "provocative costume for frenzied live performances" },
            { ja: "観客を射抜く攻めステージ服", en: "aggressive stage outfit that pierces the audience" },
            { ja: "挑発的な煽り動作が映える衣装", en: "outfit that suits provocative hype gestures" },
            { ja: "ライブ熱量を増す攻めアイドル服", en: "aggressive idol costume that increases live intensity" }
          ] },
          { title: "🖤 ダーク・背徳寄せ", items: [
            { ja: "背徳感を帯びた攻めアイドル衣装", en: "aggressive idol outfit with forbidden undertones" },
            { ja: "黒主体の攻めダーク衣装", en: "black-dominant aggressive dark idol outfit" },
            { ja: "深夜感のある挑発ライブ衣装", en: "provocative live outfit with late-night mood" },
            { ja: "鎖と相性の良い攻め衣装", en: "aggressive costume that pairs well with chain motifs" },
            { ja: "病み感を薄く混ぜた攻めアイドル服", en: "aggressive idol costume with a hint of dark-cute mood" }
          ] },
          { title: "⚡ 近未来・ユニット攻め設定", items: [
            { ja: "近未来寄せの攻めアイドル衣装", en: "aggressive idol outfit with futuristic styling" },
            { ja: "発光装飾で攻めるライブ衣装", en: "live outfit pushing aggressive appeal with luminous decorations" },
            { ja: "サイバー強めの挑発アイドル服", en: "provocative idol costume with strong cyber flavor" },
            { ja: "ユニット映えする攻めステージ衣装", en: "aggressive stage outfit that works well for idol units" },
            { ja: "鋭い印象を持つ未来系アイドル衣装", en: "future-style idol outfit with a sharp impression" }
          ] }
        ]
      },
      {
        title: "🎼 曲調・ジャンル別アイドル設定",
        children: [
          {
            title: "🍭 ポップ・電波曲系",
            items: [
              { ja: "ポップ電波曲向けアイドル衣装", en: "idol outfit for pop denpa songs" },
              { ja: "カラフル跳ね感のあるライブ衣装", en: "live outfit with colorful bouncy energy" },
              { ja: "元気な高音曲向けアイドル服", en: "idol costume for energetic high-tone songs" },
              { ja: "明るくはじけるステージ衣装", en: "bright and bursting stage outfit" },
              { ja: "キュートな電波曲映えアイドル衣装", en: "cute idol outfit suited for denpa-style songs" }
            ]
          },
          {
            title: "🌙 バラード・儚い系",
            items: [
              { ja: "儚いバラード向けアイドル衣装", en: "idol outfit for fragile ballads" },
              { ja: "月光バラード映えのステージ衣装", en: "stage outfit suited for moonlit ballads" },
              { ja: "しっとり歌唱向けアイドル服", en: "idol costume for moist emotional singing" },
              { ja: "静かな余韻を残すライブ衣装", en: "live outfit leaving a quiet afterglow" },
              { ja: "透明感のあるバラード衣装", en: "ballad outfit with a transparent delicate feel" }
            ]
          },
          {
            title: "⚡ EDM・デジタル系",
            items: [
              { ja: "EDM向けサイバーアイドル衣装", en: "cyber idol outfit for EDM tracks" },
              { ja: "デジタルビート映えのライブ服", en: "live costume suited for digital beats" },
              { ja: "発光演出が噛むEDM衣装", en: "EDM outfit that pairs with luminous stage effects" },
              { ja: "高速曲向け近未来アイドル衣装", en: "futuristic idol outfit for high-tempo songs" },
              { ja: "電子音に映えるステージ衣装", en: "stage outfit that shines with electronic sound" }
            ]
          },
          {
            title: "🎸 ロック・煽り系",
            items: [
              { ja: "ロック曲向けアイドル衣装", en: "idol outfit for rock songs" },
              { ja: "煽り全開のライブステージ衣装", en: "full-hype live stage outfit" },
              { ja: "観客を煽る動きに強い衣装", en: "outfit suited to hyping up the crowd" },
              { ja: "熱量高めのロックアイドル服", en: "high-intensity rock idol costume" },
              { ja: "ギター映えする攻めライブ衣装", en: "aggressive live outfit that pairs with guitar presence" }
            ]
          },
          {
            title: "🖤 ダーク・ゴシック系",
            items: [
              { ja: "ダーク曲向けアイドル衣装", en: "idol outfit for dark songs" },
              { ja: "ゴシック寄せの病みライブ衣装", en: "dark-live outfit leaning gothic" },
              { ja: "深夜公演向けの退廃アイドル服", en: "decadent idol costume for late-night performances" },
              { ja: "黒基調のダークステージ衣装", en: "dark stage outfit with black-dominant styling" },
              { ja: "闇曲に映える病みかわ衣装", en: "dark-cute outfit that suits shadowy songs" }
            ]
          },
          {
            title: "🌸 和風・祭り曲系",
            items: [
              { ja: "和風曲向けアイドル衣装", en: "idol outfit for Japanese-style songs" },
              { ja: "祭り曲映えのライブ衣装", en: "live outfit suited for festival songs" },
              { ja: "和モダン寄せのステージ服", en: "stage costume leaning Japanese modern style" },
              { ja: "和楽器と噛み合うアイドル衣装", en: "idol outfit that pairs with traditional instruments" },
              { ja: "花吹雪と相性の良い和風ライブ服", en: "Japanese-style live outfit that pairs well with flower-petal effects" }
            ]
          },
          {
            title: "👑 アンセム・大団円系",
            items: [
              { ja: "アンセム曲向けアイドル衣装", en: "idol outfit for anthem-style songs" },
              { ja: "大団円ラスト映えのライブ衣装", en: "live outfit suited for grand finale moments" },
              { ja: "全員歌唱に強いステージ衣装", en: "stage outfit suited for full-group singing" },
              { ja: "サビ映えする王道アイドル服", en: "classic idol costume that shines during the chorus" },
              { ja: "終盤で光る大舞台向け衣装", en: "outfit for large stages that shines in the finale" }
            ]
          }
        ]
      },
      {
        title: "🎭 役割別アイドルポジション設定",
        children: [
          {
            title: "👑 センター主役",
            items: [
              { ja: "センター主役向けアイドル衣装", en: "idol outfit for center lead position" },
              { ja: "視線を集めるセンター衣装", en: "center outfit that draws all attention" },
              { ja: "主役感の強いステージ衣装", en: "stage outfit with strong lead presence" },
              { ja: "中央配置で映えるアイドル服", en: "idol costume that shines in center formation" },
              { ja: "サビの主役に噛むセンター衣装", en: "center outfit suited for chorus focal moments" }
            ]
          },
          {
            title: "🎀 かわいい担当",
            items: [
              { ja: "かわいい担当向けアイドル衣装", en: "idol outfit for the cute member role" },
              { ja: "愛嬌強めのステージ衣装", en: "stage outfit with strong charm and cuteness" },
              { ja: "甘さを前面に出すアイドル服", en: "idol costume pushing sweetness to the front" },
              { ja: "笑顔映えするかわいい衣装", en: "cute outfit that shines with smiling expressions" },
              { ja: "ファンサ向けの愛らしいライブ服", en: "adorable live costume suited for fan service" }
            ]
          },
          {
            title: "❄ クール担当",
            items: [
              { ja: "クール担当向けアイドル衣装", en: "idol outfit for the cool member role" },
              { ja: "冷たい美しさを持つステージ衣装", en: "stage outfit with a cold elegant beauty" },
              { ja: "鋭い印象のクールアイドル服", en: "cool idol costume with a sharp impression" },
              { ja: "無表情映えするライブ衣装", en: "live outfit that suits an expressionless cool mood" },
              { ja: "青白照明に噛むクール衣装", en: "cool outfit that pairs with pale blue lighting" }
            ]
          },
          {
            title: "🔥 煽り・熱狂担当",
            items: [
              { ja: "煽り担当向けアイドル衣装", en: "idol outfit for hype and crowd-pumping role" },
              { ja: "熱狂を引き上げるライブ衣装", en: "live outfit that raises crowd excitement" },
              { ja: "動きが大きく映えるステージ服", en: "stage outfit that suits big energetic movements" },
              { ja: "観客との応酬に強いアイドル服", en: "idol costume suited for engaging the audience" },
              { ja: "攻め動作が決まる煽り衣装", en: "hype-role outfit that fits aggressive stage gestures" }
            ]
          },
          {
            title: "🖤 病み・影担当",
            items: [
              { ja: "病み担当向けアイドル衣装", en: "idol outfit for the dark or unstable member role" },
              { ja: "影の強いステージ衣装", en: "stage outfit with a strong shadowy presence" },
              { ja: "儚い病み感を持つアイドル服", en: "idol costume carrying fragile dark-cute emotion" },
              { ja: "深夜感を背負うライブ衣装", en: "live outfit carrying a late-night mood" },
              { ja: "闇曲で際立つ影担当衣装", en: "shadow-role outfit that stands out in dark songs" }
            ]
          },
          {
            title: "🌟 エース・実力派担当",
            items: [
              { ja: "エース格向けアイドル衣装", en: "idol outfit for ace-class member role" },
              { ja: "実力派主張のステージ衣装", en: "stage outfit showing strong skill-focused presence" },
              { ja: "歌唱力映えするアイドル服", en: "idol costume that suits strong vocal performance" },
              { ja: "安定感を感じさせるエース衣装", en: "ace outfit that conveys stability and strength" },
              { ja: "頼もしさが出る実力派ライブ服", en: "competent live costume with a reliable aura" }
            ]
          },
          {
            title: "🫧 儚げ・透明感担当",
            items: [
              { ja: "儚げ担当向けアイドル衣装", en: "idol outfit for fragile transparent member role" },
              { ja: "透明感主役のステージ衣装", en: "stage outfit centered on transparency and delicacy" },
              { ja: "淡く溶けるようなアイドル服", en: "idol costume that feels pale and dissolving" },
              { ja: "静かな歌唱に寄る儚げ衣装", en: "fragile outfit suited to quiet singing" },
              { ja: "余韻が似合う透明感ライブ服", en: "transparent-feel live costume suited to lingering emotion" }
            ]
          }
        ]
      },
      {
        title: "🏟 ライブ会場規模・ステージ条件別",
        children: [
          {
            title: "🎤 小箱・近距離ライブ",
            items: [
              { ja: "小箱ライブ向けアイドル衣装", en: "idol outfit for intimate live houses" },
              { ja: "近距離ファンサ向けステージ衣装", en: "stage outfit for close-range fan service" },
              { ja: "小規模会場で映えるアイドル服", en: "idol costume that works in small venues" },
              { ja: "距離の近さを活かすライブ衣装", en: "live outfit that benefits from close audience distance" },
              { ja: "密度高めの小箱向け衣装", en: "small-venue outfit with dense visual details" }
            ]
          },
          {
            title: "🌟 ホール・中規模公演",
            items: [
              { ja: "ホール公演向けアイドル衣装", en: "idol outfit for hall-scale performances" },
              { ja: "中規模会場でバランスの良いステージ衣装", en: "well-balanced stage outfit for mid-size venues" },
              { ja: "照明映えと視認性を両立する衣装", en: "outfit balancing visibility and lighting response" },
              { ja: "客席全体に届くホール向け衣装", en: "hall-performance outfit readable across the whole audience" },
              { ja: "安定感のある中規模ライブ服", en: "stable live costume for medium venue stages" }
            ]
          },
          {
            title: "🏟 アリーナ・大舞台",
            items: [
              { ja: "アリーナ向けアイドル衣装", en: "idol outfit for arena-scale performances" },
              { ja: "大舞台で映えるセンター衣装", en: "center-stage outfit that shines on large stages" },
              { ja: "遠目でも埋もれないライブ衣装", en: "live outfit that remains visible from afar" },
              { ja: "大規模照明に耐えるステージ服", en: "stage costume that stands up to large-scale lighting" },
              { ja: "広い会場で主張できるアイドル衣装", en: "idol costume that asserts presence in huge venues" }
            ]
          },
          {
            title: "📺 TV・配信・収録向け",
            items: [
              { ja: "TV出演向けアイドル衣装", en: "idol outfit for television appearances" },
              { ja: "配信映えするステージ衣装", en: "stage outfit that looks good on livestreams" },
              { ja: "カメラ寄りに強いアイドル服", en: "idol costume that works well in camera close-ups" },
              { ja: "画面越しで映える収録向け衣装", en: "recording outfit that reads well through the screen" },
              { ja: "アップ撮影に耐える精密ライブ衣装", en: "detailed live outfit suitable for close-up shots" }
            ]
          },
          {
            title: "🎆 野外・フェス・大型イベント",
            items: [
              { ja: "野外ライブ向けアイドル衣装", en: "idol outfit for outdoor live performances" },
              { ja: "フェス映えする開放型ステージ衣装", en: "open-feel stage outfit suited for festivals" },
              { ja: "風と光に強いアイドル服", en: "idol costume that works with wind and daylight" },
              { ja: "大型イベント向けの派手映え衣装", en: "flashy idol outfit for large events" },
              { ja: "空間負けしない野外ライブ服", en: "outdoor live costume that doesn't get lost in open space" }
            ]
          },
          {
            title: "🌙 深夜・特別公演・演出強め",
            items: [
              { ja: "深夜公演向けアイドル衣装", en: "idol outfit for late-night performances" },
              { ja: "特別公演映えの演出強め衣装", en: "strongly staged outfit for special performances" },
              { ja: "夜照明に噛むライブステージ服", en: "live stage costume suited to night lighting" },
              { ja: "濃い演出向けの特別衣装", en: "special outfit for dense theatrical staging" },
              { ja: "一夜限り感を持つ公演向け衣装", en: "performance outfit with a one-night-only feeling" }
            ]
          }
        ]
      },
      {
        title: "🎬 ステージ状態変化",
        children: [
          {
            title: "✨ 開演前・整った状態",
            items: [
              { ja: "開演前の整ったアイドル衣装", en: "idol outfit in pristine pre-show condition" },
              { ja: "乱れのない開幕前ステージ衣装", en: "pre-opening stage outfit without any disorder" },
              { ja: "完璧に整えられた本番前衣装", en: "perfectly arranged costume before the show" },
              { ja: "初手の清潔感があるライブ衣装", en: "live outfit with fresh opening cleanliness" },
              { ja: "本番前の静かな完成状態の衣装", en: "costume in calm complete condition before performance" }
            ]
          },
          {
            title: "🎤 1曲目・フルパワー状態",
            items: [
              { ja: "1曲目から全開のアイドル衣装", en: "idol outfit at full power from the first song" },
              { ja: "開幕直後に映えるライブ衣装", en: "live outfit that shines right after opening" },
              { ja: "初曲の勢いを持つステージ衣装", en: "stage outfit carrying the momentum of the first track" },
              { ja: "ライブ序盤で強く光る衣装", en: "costume that shines strongly in the early live phase" },
              { ja: "最初のサビで決まるアイドル服", en: "idol costume that lands in the first chorus" }
            ]
          },
          {
            title: "💦 中盤・汗と熱気が乗る状態",
            items: [
              { ja: "汗と熱気が乗ったアイドル衣装", en: "idol outfit carrying sweat and stage heat" },
              { ja: "ライブ中盤の熱を帯びた衣装", en: "costume heated by the middle section of the live" },
              { ja: "動きの余韻が出るステージ衣装", en: "stage outfit showing the aftereffect of movement" },
              { ja: "中盤で少し馴染んだライブ衣装", en: "live outfit slightly settled in by mid-performance" },
              { ja: "熱量が衣装に移ったアイドル服", en: "idol costume infused with performance intensity" }
            ]
          },
          {
            title: "🎉 終盤・紙吹雪・乱れ込み",
            items: [
              { ja: "終盤の紙吹雪を浴びたアイドル衣装", en: "idol outfit covered in confetti near the finale" },
              { ja: "ライブ終盤で少し乱れた衣装", en: "costume slightly disordered by the late live phase" },
              { ja: "熱狂終盤に映えるステージ衣装", en: "stage outfit that shines in the heated final section" },
              { ja: "走り切った余韻を残すライブ服", en: "live costume carrying the feeling of having gone all out" },
              { ja: "ラスト直前の高揚感ある衣装", en: "costume with excitement right before the ending" }
            ]
          },
          {
            title: "🌙 アンコール後・少し崩れた余韻",
            items: [
              { ja: "アンコール後の余韻を持つアイドル衣装", en: "idol outfit carrying the afterglow of the encore" },
              { ja: "少し崩れたまま美しいライブ衣装", en: "live outfit still beautiful in slight disarray" },
              { ja: "終演後の柔らかさが出たステージ衣装", en: "stage costume softened after the performance" },
              { ja: "一夜の熱を残したアイドル服", en: "idol costume retaining the heat of one night" },
              { ja: "最後の挨拶に似合う余韻衣装", en: "afterglow costume suited to the final greeting" }
            ]
          }
        ]
      },
      {
        title: "🎨 色系統別アイドル調整",
        children: [
          {
            title: "💕 ピンク・姫甘系",
            items: [
              { ja: "ピンク姫系アイドル衣装", en: "pink princess-style idol outfit" },
              { ja: "甘さ主役のピンクライブ衣装", en: "pink live outfit centered on sweetness" },
              { ja: "桜色に寄せたアイドル服", en: "idol costume leaning into cherry blossom pink" },
              { ja: "姫かわ配色のステージ衣装", en: "stage outfit with princess-cute color balance" },
              { ja: "桃色主役のキュート衣装", en: "cute costume centered on peach-pink tones" }
            ]
          },
          {
            title: "🤍 白・青・透明感系",
            items: [
              { ja: "白青透明感アイドル衣装", en: "white-blue transparent-feel idol outfit" },
              { ja: "氷光を帯びたステージ衣装", en: "stage outfit carrying icy light tones" },
              { ja: "青白照明に噛むアイドル服", en: "idol costume suited to pale blue lighting" },
              { ja: "白基調の儚げライブ衣装", en: "fragile live outfit with a white base" },
              { ja: "透明感主役のクール衣装", en: "cool costume centered on transparency" }
            ]
          },
          {
            title: "🖤 黒・紫・病みかわ系",
            items: [
              { ja: "黒紫病みかわアイドル衣装", en: "black-purple dark-cute idol outfit" },
              { ja: "紫煙が似合うダークライブ衣装", en: "dark live outfit suited to violet haze" },
              { ja: "黒主役の病みステージ衣装", en: "dark-cute stage costume centered on black" },
              { ja: "夜色寄せのアイドル服", en: "idol costume leaning into night colors" },
              { ja: "退廃感を持つ黒紫衣装", en: "black-purple costume with decadent mood" }
            ]
          },
          {
            title: "❤️ 赤・金・センター系",
            items: [
              { ja: "赤金センターアイドル衣装", en: "red-gold center idol outfit" },
              { ja: "主役感のある紅金ステージ衣装", en: "crimson-gold stage outfit with lead presence" },
              { ja: "サビ映えする赤主役ライブ衣装", en: "red-centered live outfit that shines in choruses" },
              { ja: "熱量高めの赤金アイドル服", en: "red-gold idol costume with high intensity" },
              { ja: "祝祭感のあるセンター衣装", en: "center outfit with festive grandeur" }
            ]
          },
          {
            title: "💙 青・銀・サイバー系",
            items: [
              { ja: "青銀サイバーアイドル衣装", en: "blue-silver cyber idol outfit" },
              { ja: "ネオン青を噛ませたライブ衣装", en: "live outfit accented with neon blue" },
              { ja: "青銀発光のステージ衣装", en: "blue-silver luminous stage costume" },
              { ja: "電子音映えする寒色アイドル服", en: "cool-tone idol costume suited to electronic sound" },
              { ja: "未来感のある青銀衣装", en: "blue-silver outfit with futuristic feel" }
            ]
          },
          {
            title: "🌈 虹色・多色キラキラ系",
            items: [
              { ja: "虹色キラキラアイドル衣装", en: "rainbow sparkling idol outfit" },
              { ja: "多色照明に負けないライブ衣装", en: "live outfit that holds up under multicolor lighting" },
              { ja: "カラフル主役のステージ衣装", en: "stage costume centered on colorful impact" },
              { ja: "きらめき多色のアイドル服", en: "multicolor glittering idol costume" },
              { ja: "祝祭感の強い虹色ライブ衣装", en: "rainbow live outfit with strong festive mood" }
            ]
          },
          {
            title: "💎 白金・ディーヴァ系",
            items: [
              { ja: "白金ディーヴァ衣装", en: "white-gold diva outfit" },
              { ja: "高級感のある白金ステージ衣装", en: "luxurious white-gold stage costume" },
              { ja: "宝石映えする白金ライブ衣装", en: "white-gold live outfit that suits jewel accents" },
              { ja: "気品主役のディーヴァ服", en: "diva costume centered on elegance" },
              { ja: "大人っぽい白金アイドル衣装", en: "mature white-gold idol outfit" }
            ]
          }
        ]
      }
      ]
    }];

  const DICT = {};
  (function buildDict(nodes){
    nodes.forEach(node => {
      if (node.items) node.items.forEach(item => { DICT[item.en] = item.ja; });
      if (node.children) buildDict(node.children);
    });
  })(DATA);

  

  const SPECIAL_COLLECTIONS = {
    "👘 チャイナ服特化コレクション": {
      presetTitle: "🧧 チャイナ特化セット / China Presets",
      presetDescTitle: "まずは完成例から入る",
      presetDesc: "チェックを入れると下のチャイナ棚へ連動で実チェックが入る。下の棚を手動で触ると、セットのチェック表示は外れて自由編集モードへ戻る。",
      baseTitle: "🎐 チャイナベース / Base Collection",
      baseDesc: "王道・ロリ・サイバー・宮廷など、チャイナ服そのものの方向性を決める棚。最初に世界観やシルエットの土台を選ぶ。",
      customizeTitle: "🛠 カスタマイズ項目 / Customization",
      customizeDesc: "柄・留め具・生地など、選んだチャイナベースへ後がけして完成度を上げる調整棚。ベース選択のあとに重ねる用途。",
      baseChildren: function(children){ return children.slice(0, 5).filter(function(child){ return (child && (child.title || child.label || '')) !== '🔥 攻めチャイナ'; }); },
      customizeChildren: function(children){ return children.slice(5); },
      presets: [
        { title: "🌙 王道月光チャイナ", desc: "白銀・月光・高襟でまとめた、静かな王道寄りの完成例。", items: ["白銀月光旗袍", "白基調の上品チャイナ", "高襟を強調した旗袍", "中央連続盤扣の旗袍", "銀刺繍が映える旗袍", "花香をまとう旗袍"] },
        { title: "👑 宮廷祝宴チャイナ", desc: "礼装・金刺繍・中央装飾を寄せた、格式高い祝宴向けセット。", items: ["龍鳳宮廷旗袍", "金刺繍の祝宴旗袍", "中央連続盤扣の旗袍", "胸元中央に飾りを置く旗袍", "金糸・銀糸刺繍", "後ろ裾が流れる旗袍"] },
        { title: "🎀 中華ロリ祝祭チャイナ", desc: "甘ロリ・リボン・フリル・花飾りを束ねた可憐寄りセット。", items: ["甘ロリ中華ドレス", "リボン多め中華ロリ", "フリル重ね旗袍", "花飾り強化中華ロリ", "花飾り・簪", "可憐な丸頭ヒール"] },
        { title: "⚡ 近未来ネオンチャイナ", desc: "ネオン・ホログラム・未来前立てを軸にしたサイバー完成例。", items: ["ネオン縁取り旗袍", "ホログラム旗袍", "中央発光ライン旗袍", "近未来背面ユニット旗袍", "近未来ヘッドギア", "近未来フットウェア"] },
        { title: "🖤 退廃夜宴チャイナ", desc: "黒紫・香煙・背面鎖でまとめた、夜宴向けの退廃セット。", items: ["黒紫退廃チャイナ", "漆黒旗袍", "月下に映える背面鎖旗袍", "香煙に揺れる旗袍", "退廃夜宴向けの黒旗袍", "黒パンスト・黒タイツ"] },
        { title: "🟢 翡翠宮装チャイナ", desc: "翡翠色と玉飾りを基調にした、上品で静かな宮装セット。", items: ["翡翠色の旗袍", "玉飾りと噛み合う緑旗袍", "玉飾り・腰飾り", "翡翠飾り旗袍", "高襟を強調した旗袍", "花刺繍・植物装飾線"] }
      ]
    },
    "🎤 アイドル衣装特化コレクション": {
      presetTitle: "🎼 アイドル完成セット / Idol Presets",
      presetDescTitle: "まずはライブ完成例から入る",
      presetDesc: "チェックを入れると下のアイドル棚へ連動で実チェックが入る。下の棚を手動で触ると、セットのチェック表示は外れて自由編集モードへ戻る。",
      baseTitle: "🎀 アイドルベース / Base Collection",
      baseDesc: "まずは王道・甘ロリ・ディーヴァ・サイバー・ダークなど、アイドル衣装の土台となる方向性を選ぶ。",
      customizeTitle: "🛠 アイドルカスタマイズ / Customization",
      customizeDesc: "スカート・素材・装飾・脚・頭部アクセ・機材連動など、ベースに後がけして完成度を上げる。",
      settingTitle: "💋 アイドル設定 / Attack & Mood",
      settingDesc: "攻め・高露出・熱狂・挑発など、衣装そのものではなく見せ方や温度を上乗せする設定棚。ベース選択後に必要な時だけ足す。",
      baseChildren: function(children){ return children.slice(0, 5); },
      customizeChildren: function(children){ return children.slice(5).filter(function(child){ return (child && (child.title || child.label || '')) !== '💋 攻めアイドル設定'; }); },
      settingChildren: function(children){ return children.filter(function(child){ return (child && (child.title || child.label || '')) === '💋 攻めアイドル設定'; }); },
      presets: [
        { title: "🌟 王道キラキラセンター", desc: "王道・センター・きらめき・マイクをまっすぐ束ねた、最初に触りやすい完成セット。", items: ["キラキラ王道アイドル衣装", "センター主役のアイドル衣装", "スポットライト映えステージ衣装", "胸元ジュエルのアイドル衣装", "スパンコール煌めき衣装", "ハンドマイク映えのアイドル衣装", "王道フレアのアイドル服"] },
        { title: "🎀 甘ロリ姫系アイドル", desc: "甘ロリ・姫・フリル・ティアラを素直にまとめた、可憐寄りの完成セット。", items: ["リボン姫系アイドル衣装", "フリル多めの甘ロリアイドル衣装", "パステル姫系アイドル衣装", "ティアラ付きアイドル衣装", "大リボン主役のアイドル衣装", "花飾り付きアイドル衣装", "ふんわり広がるステージスカート"] },
        { title: "⚡ ネオンサイバーアイドル", desc: "ネオン・未来素材・ヘッドセット・機材連動まで噛ませた近未来セット。", items: ["ネオン発光アイドル衣装", "未来素材のアイドル衣装", "サイバーヘッドギア付き衣装", "ヘッドセット付きアイドル衣装", "発光装飾付きアイドル衣装", "マイクアーム一体のサイバー服", "都市夜景映えサイバー衣装"] },
        { title: "🖤 病みかわダークアイドル", desc: "病みかわ・黒レース・鎖・深夜感をまとめた、暗めで映える完成セット。", items: ["病みかわアイドル衣装", "黒レース主体の病み衣装", "チェーン付きダークアイドル衣装", "深夜ライブ向けダーク衣装", "病みかわヘッドアクセのライブ服", "スモーク映えのアイドル衣装", "黒リボン病みかわアイドル衣装"] },
        { title: "👑 高級ディーヴァ系", desc: "宝石・夜会・モノトーン豪華を寄せた、大人っぽい主役用セット。", items: ["宝石主役のディーヴァ衣装", "夜会風ディーヴァ衣装", "モノトーンディーヴァドレス", "胸元ジュエルのアイドル衣装", "王冠モチーフのアイドル衣装", "上質サテンの高級ステージ衣装", "高反射のステージスーツ"] },
        { title: "🔥 爆発ライブ熱狂アイドル", desc: "ポップ・脚線・ライト・紙吹雪まで入れた、ライブ会場で強い完成セット。", items: ["元気系ポップアイドル衣装", "熱狂型の攻めアイドル衣装", "観客光を受けるアイドル衣装", "ニーハイ合わせのアイドル衣装", "照明で脚が映えるライブ服", "紙吹雪映えのアイドル衣装", "ボーカル主役のマイク連動衣装"] }
      ]
    }
  };

  let __v23PresetApplying = false;

  function clearPresetUI(root){ if(!root) return; root.querySelectorAll('.attire-v23-preset-checkbox').forEach(function(cb){ cb.checked = false; }); }
  function openAncestorsForCheckbox(cb){ if(!cb) return; let el = cb.parentElement; while(el){ if(el.tagName && el.tagName.toLowerCase() === 'details') el.open = true; el = el.parentElement; } }
  function applyPreset(root, preset, sourceCheckbox){
    if(!root || !preset) return;
    __v23PresetApplying = true;
    const real = Array.from(root.querySelectorAll('.attire-v23-real-checkbox'));
    real.forEach(function(cb){ cb.checked = false; });
    const map = new Map();
    real.forEach(function(cb){ const key = cb.dataset.ja || ''; if(key && !map.has(key)) map.set(key, cb); });
    const matched = [];
    preset.items.forEach(function(name){ const cb = map.get(name); if(cb){ cb.checked = true; matched.push(cb); } });
    matched.forEach(openAncestorsForCheckbox);
    clearPresetUI(root);
    if(sourceCheckbox) sourceCheckbox.checked = true;
    __v23PresetApplying = false;
  }
  function createPresetSectionNode(config){
    const details = document.createElement("details");
    details.className = "attire-v23-node attire-cat attire-v23-group-section is-preset";
    details.open = false;
    details.style.cssText = "margin:8px 0; border:1px solid #d79c4a; border-radius:10px; background:#fffaf3; overflow:hidden; width:100%; max-width:100%; box-sizing:border-box;";
    const summary = document.createElement("summary");
    summary.className = "attire-v23-summary attire-v23-group-summary is-preset";
    summary.textContent = config.presetTitle;
    summary.title = config.presetTitle;
    summary.style.cssText = "font-weight:800; padding:10px 12px; cursor:pointer; list-style:none; color:#8a5321; background:#fff5e8;";
    details.appendChild(summary);
    const body = document.createElement("div");
    body.className = "attire-v23-body attire-v23-group-body is-preset";
    body.style.cssText = "padding:8px 10px 10px; width:100%; max-width:100%; box-sizing:border-box;";
    const info = document.createElement("div");
    info.className = "attire-v23-info-block is-preset";
    info.innerHTML = '<div class="attire-v23-info-badge is-preset">PRESET</div><div class="attire-v23-info-title">'+config.presetDescTitle+'</div><div class="attire-v23-info-desc">'+config.presetDesc+'</div>';
    body.appendChild(info);
    const grid = document.createElement("div");
    grid.className = "attire-v23-grid attire-v23-preset-grid";
    grid.style.cssText = "display:grid; grid-template-columns:repeat(auto-fill, minmax(220px, 1fr)); gap:8px; width:100%;";
    config.presets.forEach(function(preset){
      const card = document.createElement('label');
      card.className = 'attire-v23-preset-card';
      card.style.cssText = 'display:block; border:1px solid #e3c08a; border-radius:10px; background:#fffdf8; padding:10px 12px; cursor:pointer;';
      const top = document.createElement('div'); top.style.cssText = 'display:flex; align-items:flex-start; gap:8px;';
      const cb = document.createElement('input'); cb.type = 'checkbox'; cb.className = 'attire-v23-preset-checkbox'; cb.style.marginTop = '3px'; cb.dataset.presetTitle = preset.title;
      const textWrap = document.createElement('div'); textWrap.style.cssText = 'min-width:0;';
      const ttl = document.createElement('div'); ttl.style.cssText = 'font-weight:800; color:#8a5321; font-size:13px; margin-bottom:4px;'; ttl.textContent = preset.title;
      const desc = document.createElement('div'); desc.style.cssText = 'font-size:12px; line-height:1.5; color:#7c6450;'; desc.textContent = preset.desc;
      cb.addEventListener('change', function(){ const root = details.closest('.attire-v23-container'); if(!root) return; if(cb.checked){ applyPreset(root, preset, cb); } else if(!__v23PresetApplying) { cb.checked = false; } });
      textWrap.appendChild(ttl); textWrap.appendChild(desc); top.appendChild(cb); top.appendChild(textWrap); card.appendChild(top); grid.appendChild(card);
    });
    body.appendChild(grid); details.appendChild(body); return details;
  }
function createItemLabel(item){
    const ja = (item && typeof item === 'object') ? (item.ja || item.label || item.title || item.en || '') : String(item || '');
    const en = (item && typeof item === 'object') ? (item.en || item.ja || item.label || item.title || '') : String(item || '');

    const label = document.createElement("label");
    label.style.cssText = "display:flex; align-items:center; font-size:0.92em; cursor:pointer; line-height:1.35;";
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.className = "attire-v23-real-checkbox";
    cb.dataset.en = en;
    cb.dataset.ja = ja;
    cb.style.marginRight = "6px";
    cb.addEventListener('change', function(){
      if(__v23PresetApplying) return;
      const root = label.closest('.attire-v23-container');
      if(root) clearPresetUI(root);
    });
    label.appendChild(cb);
    label.appendChild(document.createTextNode(ja));
    label.title = en;
    return label;
  }


  function createInfoBlock(kind, title, desc){
    const box = document.createElement('div');
    box.className = 'attire-v23-info-block ' + (kind === 'customize' ? 'is-customize' : 'is-base');
    const badge = document.createElement('div');
    badge.className = 'attire-v23-info-badge';
    badge.textContent = kind === 'customize' ? 'CUSTOMIZE' : 'BASE';
    const h = document.createElement('div');
    h.className = 'attire-v23-info-title';
    h.textContent = title;
    const p = document.createElement('div');
    p.className = 'attire-v23-info-desc';
    p.textContent = desc;
    box.appendChild(badge);
    box.appendChild(h);
    box.appendChild(p);
    return box;
  }


  function createGroupedSectionNode(kind, title, desc, children){
    const palette = kind === 'customize'
      ? { cls: 'is-customize', border: '#b48bd2', bg: '#fcf8ff', summaryBg: '#f7f0ff', color: '#6f4b95', infoTitle: '後がけで仕上げる' }
      : kind === 'setting'
      ? { cls: 'is-setting', border: '#d58aa0', bg: '#fff7fa', summaryBg: '#fff1f5', color: '#9a3857', infoTitle: '見せ方と温度を足す' }
      : { cls: 'is-base', border: '#d98ca0', bg: '#fffafb', summaryBg: '#fff8fb', color: '#7a2239', infoTitle: 'まずは方向性を決める' };

    const details = document.createElement("details");
    details.className = "attire-v23-node attire-cat attire-v23-group-section " + palette.cls;
    details.open = false;
    details.style.cssText = "margin:8px 0; border:1px solid " + palette.border + "; border-radius:10px; background:" + palette.bg + "; overflow:hidden; width:100%; max-width:100%; box-sizing:border-box;";

    const summary = document.createElement("summary");
    summary.className = "attire-v23-summary attire-v23-group-summary " + palette.cls;
    summary.textContent = title;
    summary.title = title;
    summary.style.cssText = "font-weight:800; padding:10px 12px; cursor:pointer; list-style:none; color:" + palette.color + "; background:" + palette.summaryBg + ";";
    details.appendChild(summary);

    const body = document.createElement("div");
    body.className = "attire-v23-body attire-v23-group-body " + palette.cls;
    body.style.cssText = "padding:8px 10px 10px; width:100%; max-width:100%; box-sizing:border-box;";
    body.appendChild(createInfoBlock(kind, palette.infoTitle, desc));

    const grid = document.createElement('div');
    grid.className = 'attire-v23-grid attire-v23-group-grid ' + palette.cls;
    grid.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fill, minmax(220px, 1fr)); gap:8px; width:100%;';
    children.forEach(child => grid.appendChild(createNode(child, 1)));
    body.appendChild(grid);

    details.appendChild(body);
    return details;
  }


  function createNode(node, depth){
    const details = document.createElement("details");
    details.className = "attire-v23-node attire-cat";
    details.dataset.depth = String(depth);
    details.open = false;
    const border = depth === 0 ? "#cc3355" : depth === 1 ? "#d98ca0" : depth === 2 ? "#e7b8c5" : "#f0d5dc";
    const bg = depth === 0 ? "#fff8fb" : depth === 1 ? "#fffafb" : "#fffdfd";
    details.style.cssText = `margin:6px 0; border:1px solid ${border}; border-radius:8px; background:${bg}; overflow:hidden; width:100%; max-width:100%; box-sizing:border-box;`;

    const summary = document.createElement("summary");
    summary.className = "attire-v23-summary";
    const nodeTitle = node.title || node.label || '';
    summary.textContent = nodeTitle;
    summary.title = nodeTitle;
    summary.style.cssText = `font-weight:${depth <= 1 ? '700' : '600'}; padding:${depth === 0 ? '10px 12px' : '8px 10px'}; cursor:pointer; list-style:none; background:${bg}; color:#7a2239;`;
    details.appendChild(summary);

    const body = document.createElement("div");
    body.className = "attire-v23-body";
    body.style.cssText = "padding:8px 10px 10px; width:100%; max-width:100%; box-sizing:border-box;";

    if (node.items && node.items.length) {
      const grid = document.createElement("div");
      grid.className = "attire-v23-grid";
      grid.style.cssText = "display:grid; grid-template-columns:repeat(auto-fill, minmax(165px, 1fr)); gap:6px; width:100%;";
      node.items.forEach(item => grid.appendChild(createItemLabel(item)));
      body.appendChild(grid);
    }
    if (node.children && node.children.length) {
      const specialConfig = depth === 0 ? SPECIAL_COLLECTIONS[node.title] : null;
      if (specialConfig && node.children.length > 5) {
        body.appendChild(createPresetSectionNode(specialConfig));
        body.appendChild(createGroupedSectionNode('base', specialConfig.baseTitle, specialConfig.baseDesc, specialConfig.baseChildren(node.children)));
        body.appendChild(createGroupedSectionNode('customize', specialConfig.customizeTitle, specialConfig.customizeDesc, specialConfig.customizeChildren(node.children)));
        if (specialConfig.settingTitle && typeof specialConfig.settingChildren === 'function') {
          const settingChildren = specialConfig.settingChildren(node.children);
          if (settingChildren && settingChildren.length) {
            body.appendChild(createGroupedSectionNode('setting', specialConfig.settingTitle, specialConfig.settingDesc || '', settingChildren));
          }
        }
      } else {
        node.children.forEach(child => body.appendChild(createNode(child, depth + 1)));
      }
    }
    details.appendChild(body);
    return details;
  }

  const API = {
    initUI() {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      const mount = (retry = 0) => {
        const parent = document.querySelector("#list-attire");
        if (!parent) {
          if (retry < 60) setTimeout(() => mount(retry + 1), 100);
          return;
        }
        if (parent.querySelector(".attire-v23-container")) return;

        const root = document.createElement("div");
        root.className = "attire-v23-container";
        root.style.cssText = "display:block; width:100%; max-width:100%; box-sizing:border-box;";

        const sep = document.createElement("div");
        sep.style.cssText = "display:none;";
        sep.textContent = "";
        root.appendChild(sep);

        const stack = document.createElement("div");
        stack.className = "attire-v23-stack";
        stack.style.cssText = "display:block; width:100%; max-width:100%; box-sizing:border-box;";
        DATA.forEach(node => stack.appendChild(createNode(node, 0)));
        root.appendChild(stack);

        const styleId = "attire-v23-mobile-style";
        const styleCss = `
.attire-v23-container, .attire-v23-container * { box-sizing:border-box; }
.attire-v23-container { display:block !important; width:100% !important; max-width:100% !important; }
.attire-v23-container > .attire-v23-stack { display:block !important; width:100% !important; max-width:100% !important; }
.attire-v23-container .attire-v23-node { display:block !important; width:100% !important; max-width:100% !important; min-width:0 !important; }
.attire-v23-container .attire-v23-summary { display:block; width:100%; min-width:0; }
.attire-v23-container .attire-v23-body { display:block !important; width:100% !important; max-width:100% !important; min-width:0 !important; grid-template-columns:1fr !important; grid-auto-flow:row !important; }
.attire-v23-container details[open] > .attire-v23-body { display:block !important; grid-template-columns:1fr !important; grid-auto-flow:row !important; }
.attire-v23-container .attire-v23-body > .attire-v23-node { display:block !important; width:100% !important; max-width:100% !important; }
.attire-v23-container .attire-v23-grid { width:100% !important; max-width:100% !important; }

.attire-v23-group-section.is-customize { box-shadow:0 0 0 1px rgba(144,112,188,.06) inset; }

.attire-v23-group-section.is-setting { box-shadow:0 0 0 1px rgba(191,82,112,.08) inset; }
.attire-v23-group-body.is-setting { background:rgba(255,246,249,.92); }
.attire-v23-group-summary.is-setting { background:#fff1f5; color:#9a3857; }


.attire-v23-group-section.is-preset { box-shadow:0 0 0 1px rgba(215,156,74,.08) inset; }
.attire-v23-group-body.is-preset { background:rgba(255,250,244,.9); }
.attire-v23-info-block.is-preset { background:linear-gradient(180deg, rgba(255,252,247,.98), rgba(255,248,238,.95)); border-color:rgba(215,156,74,.28); }
.attire-v23-info-badge.is-preset { background:rgba(215,156,74,.16); color:#8a5321; }
.attire-v23-preset-card:hover { background:#fff8ef; }

.attire-v23-group-summary { font-size:13px; }
.attire-v23-group-grid { margin-top:6px; }
.attire-v23-group-body.is-customize { background:rgba(252,248,255,.88); }
.attire-v23-info-block { margin:0 0 12px; padding:10px 12px; border-radius:12px; border:1px solid rgba(180,110,130,.28); background:linear-gradient(180deg, rgba(255,252,253,.96), rgba(252,246,249,.92)); }
.attire-v23-info-block.is-customize { background:linear-gradient(180deg, rgba(250,248,255,.98), rgba(244,239,255,.95)); border-color:rgba(135,110,180,.26); }
.attire-v23-info-badge { display:inline-block; margin-bottom:6px; padding:2px 8px; border-radius:999px; background:rgba(160,120,190,.12); color:#7a4f9b; font-size:11px; font-weight:800; letter-spacing:.06em; }
.attire-v23-info-title { font-size:13px; font-weight:800; color:#7d334e; margin-bottom:4px; }
.attire-v23-info-desc { font-size:12px; line-height:1.5; color:#7f6671; }
@media (max-width: 640px) {
  .attire-v23-container { padding-left:0 !important; padding-right:0 !important; }
  .attire-v23-container > .attire-v23-stack { display:block !important; grid-template-columns:1fr !important; }
  .attire-v23-container > .attire-v23-stack > .attire-v23-node { width:100% !important; }
  .attire-v23-container .attire-v23-grid { display:grid !important; grid-template-columns:1fr !important; grid-auto-flow:row !important; }
  .attire-v23-container .attire-v23-body { padding:6px 8px 8px !important; }
  .attire-v23-container .attire-v23-node[data-depth="2"] > .attire-v23-body,
  .attire-v23-container .attire-v23-node[data-depth="3"] > .attire-v23-body,
  .attire-v23-container .attire-v23-node[data-depth="4"] > .attire-v23-body,
  .attire-v23-container .attire-v23-node[data-depth="5"] > .attire-v23-body,
  .attire-v23-container .attire-v23-node[data-depth="6"] > .attire-v23-body,
  .attire-v23-container .attire-v23-node[data-depth="7"] > .attire-v23-body,
  .attire-v23-container .attire-v23-node[data-depth="8"] > .attire-v23-body,
  .attire-v23-container .attire-v23-node[data-depth="9"] > .attire-v23-body,
  .attire-v23-container .attire-v23-node[data-depth="10"] > .attire-v23-body { padding-left:6px !important; padding-right:6px !important; }
  .attire-v23-container .attire-v23-node[data-depth="2"] > .attire-v23-summary,
  .attire-v23-container .attire-v23-node[data-depth="3"] > .attire-v23-summary,
  .attire-v23-container .attire-v23-node[data-depth="4"] > .attire-v23-summary,
  .attire-v23-container .attire-v23-node[data-depth="5"] > .attire-v23-summary,
  .attire-v23-container .attire-v23-node[data-depth="6"] > .attire-v23-summary,
  .attire-v23-container .attire-v23-node[data-depth="7"] > .attire-v23-summary,
  .attire-v23-container .attire-v23-node[data-depth="8"] > .attire-v23-summary,
  .attire-v23-container .attire-v23-node[data-depth="9"] > .attire-v23-summary,
  .attire-v23-container .attire-v23-node[data-depth="10"] > .attire-v23-summary { white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
}
        `;
        if (!document.getElementById(styleId)) {
          const style = document.createElement("style");
          style.id = styleId;
          style.textContent = styleCss;
          document.head.appendChild(style);
        }
        const host = parent.closest('.attire-v21-shima');
        if (host && host.shadowRoot && !host.shadowRoot.querySelector('#' + styleId)) {
          const shadowStyle = document.createElement('style');
          shadowStyle.id = styleId;
          shadowStyle.textContent = styleCss;
          host.shadowRoot.appendChild(shadowStyle);
        }

        const contentArea = parent.querySelector(".section-content") || parent;
        contentArea.appendChild(root);
        try{ window.__normalizeAttireLayout(contentArea || parent); }catch(_){}
      };
      mount();
    },
    getTags() {
      const tags = [];
      const root = document.querySelector(".attire-v23-container");
      if (!root) return tags;
      root.querySelectorAll("input:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();


(function(){
  "use strict";
  const VERSION = 24;
  const KEY = "attire";
  const DICT = {
    "slipping off shoulder sweater, loose neckline": "肩落ちルーズニット",
    "partially unbuttoned shirt, loose cleavage": "胸元ゆるみシャツ",
    "one side slipped top, uneven neckline": "片側ずり落ちトップス",
    "dress loosened around bust, accidental reveal": "胸元だけ開いたドレス",
    "disheveled off-shoulder top, fallen neckline": "崩れたオフショルトップス",
    "shirt hanging open, almost fully exposed": "前全開寸前シャツ",
    "disheveled kimono, front slipping open": "はだけた着物",
    "loosely opened gown, front parted": "前開きガウン",
    "blouse with buttons popping open, strained fabric": "ボタン弾けブラウス",
    "half removed jacket, slipping from shoulders": "脱ぎかけジャケット",
    "lingerie strap slipped off, underwear peeking": "片紐ずれランジェリー",
    "visible lingerie under disheveled clothes": "見せ下着チラ見え",
    "half removed dress, one side slipping down": "片脱ぎワンピース",
    "panties peeking above low-worn clothes": "腰掛けショーツ見え",
    "pantyhose half peeled down, disheveled legs": "脱ぎかけタイツ",
    "rumpled hem, wrinkled fabric, messy drape": "乱れた裾と皺",
    "fabric pulled taut, stretched clothing tension": "引っ張られた服の張力",
    "slipped shoulder straps, unstable fit": "ずれた肩紐",
    "mid-undressing atmosphere, interrupted dressing": "脱ぎかけ途中の空気",
    "barely staying on clothes, precarious outfit": "着衣の限界保持",
    "luxury lace lingerie, floral lace set": "総レースランジェリー",
    "frilled babydoll lingerie, delicate frills": "フリルたっぷりベビードール",
    "sheer lace robe, elegant lingerie gown": "透けレースガウン",
    "embroidered floral lingerie set, luxury details": "花柄刺繍ブラセット",
    "ribbon decorated lingerie, refined innerwear": "リボン飾りランジェリー",
    "garter belt lingerie set, thigh straps": "ガーターベルトセット",
    "bustier lingerie, fitted innerwear": "ビスチェランジェリー",
    "lace-up corset lingerie, waist cincher": "編み上げコルセット",
    "lingerie with stockings, coordinated hosiery": "ストッキング一体ランジェリー",
    "satin corset inner dress, elegant bondage-lite": "サテンコルセットドレスインナー",
    "jewel lingerie, gem decorated underwear": "宝飾ランジェリー",
    "pearl chain lingerie, ornamented underwear": "パールチェーンインナー",
    "bridal lingerie, pure white luxury underwear": "ブライダルランジェリー",
    "silk slip lingerie, glossy luxury innerwear": "シルクスリップ",
    "black and gold luxury lingerie, premium innerwear": "黒金の高級下着",
    "elegant transparency, refined sensuality": "上品な透け感",
    "luxury fabric clinging to body, premium texture": "密着する高級素材",
    "delicate embroidery details, haute lingerie": "繊細な刺繍装飾",
    "perfumed boudoir atmosphere, intimate elegance": "香水めいた気配",
    "display lingerie styling, made to be seen": "下着見せを前提にした装飾",
    "black latex bodysuit, mirror gloss": "黒ラテックスボディスーツ",
    "wet pvc dress, reflective synthetic shine": "濡れたPVCドレス",
    "glossy rubber lingerie, slick highlight": "光沢ラバーランジェリー",
    "skin-tight metallic fabric, body hugging": "全身ぴったりメタリック布",
    "oil gloss innerwear, liquid shine": "オイル光沢インナー",
    "wet shirt clinging to skin, transparency": "濡れシャツ密着",
    "wet thin silk dress, clinging drape": "濡れた薄絹ドレス",
    "semi-transparent body film, second skin": "半透明ボディフィルム",
    "see-through fabric with droplets, wet sheen": "水滴つきシースルー布",
    "wet stockings clinging tightly, glossy legs": "濡れストッキング密着",
    "ultra-thin bodystocking, second-skin fit": "極薄ボディストッキング",
    "ultra thin fabric stuck to skin": "肌に貼り付く極薄布",
    "body contour top, silhouette emphasized": "輪郭が浮く密着トップス",
    "clinging sheer innerwear, translucent fit": "張り付くシアーインナー",
    "skin-tight dress, every curve defined": "ぴったり密着ワンピ",
    "strong specular highlights, reflective material": "強いハイライト反射",
    "vacuum-like cling texture, suction fit": "皮膚に吸い付く質感",
    "light-revealed contours, glossy silhouette": "光で輪郭が浮く素材",
    "gloss merging with sweat sheen, slick surface": "艶と汗の境界が曖昧",
    "sealed in a thin membrane, wrapped body feel": "薄膜で包んだような密閉感"
  };

  const API = {
    initUI() {
      try{
        if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      }catch(_){ }
    },
    getTags() {
      const tags = [];
      document.querySelectorAll("input[data-r18src='v24']:checked").forEach(function(cb){
        if (cb && cb.dataset && cb.dataset.en) tags.push(cb.dataset.en);
      });
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();
