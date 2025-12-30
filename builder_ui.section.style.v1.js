(function(){
  "use strict";
  const VERSION = 1;
  const KEY = "style"; // ★新カテゴリーID

  const STYLE_DATA = {
    "🏢 アニメスタジオ (Anime Studios)": [
      { ja: "京都アニメーション", en: "kyoto animation, kyoani, detailed eyes" },
      { ja: "ufotable (光の表現)", en: "ufotable, unlimited blade works style, dynamic lighting" },
      { ja: "スタジオジブリ", en: "studio ghibli, hayao miyazaki style, vibrant colors" },
      { ja: "TRIGGER (キレ・色)", en: "studio trigger, hiroyuki imaishi style, neon colors, sharp angles" },
      { ja: "SHAFT (演出)", en: "shaft, akiyuki shinbo style, head tilt, abstract background" },
      { ja: "MAPPA (高精細)", en: "mappa, jujutsu kaisen style, detailed lines" },
      { ja: "WIT STUDIO (重厚)", en: "wit studio, attack on titan style, thick lines" },
      { ja: "A-1 Pictures", en: "a-1 pictures, sword art online style, clean lines" },
      { ja: "CloverWorks", en: "cloverworks, bocchi the rock style, expressive" },
      { ja: "P.A.WORKS (背景美)", en: "p.a. works, beautiful scenery, realistic background" },
      { ja: "動画工房 (カワイイ)", en: "doga kobo, cute girls doing cute things, moe" },
      { ja: "サンライズ (メカ)", en: "sunrise, mecha anime style, dramatic shadows" },
      { ja: "東映アニメーション", en: "toei animation, precure style, magical girl" },
      { ja: "Production I.G", en: "production i.g, ghost in the shell style, serious tone" },
      { ja: "ボンズ (アクション)", en: "bones, my hero academia style, dynamic action" },
      { ja: "マッドハウス", en: "madhouse, no game no life style, high saturation" },
      { ja: "White Fox", en: "white fox, re:zero style" },
      { ja: "J.C.STAFF", en: "j.c.staff, railgun style" },
      { ja: "サテライト", en: "satelight, macross style, gradients" },
      { ja: "オレンジ (3Dアニメ)", en: "studio orange, houseki no kuni style, 3d anime, cg" }
    ],
    "🖌️ 有名イラストレーター (Popular Illustrators)": [
      { ja: "Mika Pikazo風 (極彩色)", en: "mika pikazo style, vibrant colors, geometric background" },
      { ja: "米山舞風 (エフェクト)", en: "yoneyama mai style, intense lighting, dynamic angle, crystal clear" },
      { ja: "LAM風 (ビビッド)", en: "lam style, vivid contrast, sharp eyes, street style, makeup" },
      { ja: "望月けい風 (シャープ)", en: "kei mochizuki style, sharp lines, distinct fashion, cool" },
      { ja: "redjuice風 (SF)", en: "redjuice style, biomechanical details, sci-fi, metallic texture" },
      { ja: "huke風 (質感)", en: "huke style, black rock shooter style, gritty texture, dark atmosphere" },
      { ja: "Anmi風 (透明感)", en: "anmi style, soft lighting, translucent colors, airy" },
      { ja: "Tiv風 (情緒)", en: "tiv style, emotional lighting, soft atmosphere, sentimental" },
      { ja: "カントク風 (チェック柄)", en: "kantoku style, plaid patterns, cute girl, bright colors" },
      { ja: "珈琲貴族風 (フェチ)", en: "coffee kizoku style, tights focus, glossy skin" },
      { ja: "Tony風 (美少女)", en: "tony taka style, glossy skin, blonde hair focus" },
      { ja: "深崎暮人風 (冴えカノ)", en: "misaki kurehito style, high contrast, detailed clothes, realistic lighting" },
      { ja: "ワダアルコ風 (Fate)", en: "wada arco style, distinct eyes, fate extra style, vibrant red" },
      { ja: "岸田メル風 (淡い)", en: "kishida mel style, pastel colors, delicate, atelier series" },
      { ja: "黒星紅白風 (キノ)", en: "kuroboshi kouhaku style, watercolor texture, soft edges" }
    ],
    "🖌️ レジェンド・特徴的作家 (Legends & Distinctive)": [
      { ja: "新川洋司風 (墨絵・MGS)", en: "yoji shinkawa style, ink brush, sketch style, sumi-e, artistic" },
      { ja: "天野喜孝風 (幻想・FF)", en: "yoshitaka amano style, watercolor, wispy lines, fantasy, pale skin" },
      { ja: "村田蓮爾風 (レトロ未来)", en: "range murata style, retro futuristic, soft shading, steampunk details" },
      { ja: "CLAMP風 (華麗)", en: "clamp style, intricate details, flowing hair, long limbs, shoujo manga" },
      { ja: "高橋留美子風 (80s)", en: "rumiko takahashi style, retro anime, 80s aesthetic, cel shading" },
      { ja: "貞本義行風 (90s)", en: "yoshiyuki sadamoto style, 90s anime, clean lines, evangelion style" },
      { ja: "鳥山明風 (メカ・筋肉)", en: "akira toriyama style, sharp angles, retro shonen, detailed machinery" },
      { ja: "荒木飛呂彦風 (ジョジョ)", en: "hirohiko araki style, jojo pose, bold shading, menacing, sculpturesque" },
      { ja: "水木しげる風 (点描・妖怪)", en: "shigeru mizuki style, yokai, dots texture, dark atmosphere, hatched shadows" },
      { ja: "伊藤潤二風 (ホラー)", en: "junji ito style, horror, detailed lines, spiral, grotesque" }
    ],
    "🎮 ゲーム・特定ジャンル (Game Styles)": [
      { ja: "ペルソナ風 (副島成記)", en: "shigenori soejima style, persona style, pop art, stylish ui, bold colors" },
      { ja: "ダンガンロンパ風 (小松崎類)", en: "danganronpa style, komatsuzaki rui style, pink blood, psycho pop, thick outlines" },
      { ja: "アズールレーン風 (メカ娘)", en: "azur lane style, detailed ship parts, mecha musume, wet skin" },
      { ja: "ブルーアーカイブ風 (清涼)", en: "blue archive style, halo, clear blue sky, clean anime art, bright" },
      { ja: "原神・ホヨバ風 (装飾)", en: "genshin impact style, hoyoverse style, anime cel shading, detailed accessories, fantasy" },
      { ja: "アークナイツ風 (テック)", en: "arknights style, techwear, dark modern fantasy, tactical" },
      { ja: "ポケモン風 (杉森建)", en: "ken sugimori style, watercolor texture, creature design, clean coloring" },
      { ja: "FFタクティクス風 (吉田明彦)", en: "akihiko yoshida style, pencil texture, nose shading, parchment paper background" },
      { ja: "ヴァニラウェア風 (厚塗り)", en: "vanillaware style, george kamitani, food illustration, 2d side scrolling art" }
    ]
  };

  const DICT = {
    // Studios
    "kyoto animation": "京アニ", "ufotable": "ufotable", "studio ghibli": "ジブリ", "studio trigger": "TRIGGER",
    "shaft": "シャフト", "mappa": "MAPPA", "wit studio": "WIT", "a-1 pictures": "A-1",
    "cloverworks": "CloverWorks", "p.a. works": "PAワークス", "doga kobo": "動画工房",
    "sunrise": "サンライズ", "toei animation": "東映", "production i.g": "I.G",
    "bones": "ボンズ", "madhouse": "マッドハウス", "white fox": "White Fox",
    "j.c.staff": "J.C.STAFF", "satelight": "サテライト", "studio orange": "オレンジ",

    // Artists
    "mika pikazo style": "Mika Pikazo風", "yoneyama mai style": "米山舞風", "lam style": "LAM風",
    "kei mochizuki style": "望月けい風", "redjuice style": "redjuice風", "huke style": "huke風",
    "anmi style": "Anmi風", "tiv style": "Tiv風", "kantoku style": "カントク風",
    "coffee kizoku style": "珈琲貴族風", "tony taka style": "Tony風", "misaki kurehito style": "深崎暮人風",
    "wada arco style": "ワダアルコ風", "kishida mel style": "岸田メル風", "kuroboshi kouhaku style": "黒星紅白風",
    "yoji shinkawa style": "新川洋司風", "yoshitaka amano style": "天野喜孝風", "range murata style": "村田蓮爾風",
    "clamp style": "CLAMP風", "rumiko takahashi style": "高橋留美子風", "yoshiyuki sadamoto style": "貞本義行風",
    "akira toriyama style": "鳥山明風", "hirohiko araki style": "荒木飛呂彦風", "shigeru mizuki style": "水木しげる風",
    "junji ito style": "伊藤潤二風", "shigenori soejima style": "副島成記風", "komatsuzaki rui style": "小松崎類風",
    "ken sugimori style": "杉森建風", "akihiko yoshida style": "吉田明彦風", "vanillaware style": "ヴァニラウェア風"
  };

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      const root = container || document.querySelector("#list-style");
      if (!root) return;

      // 二重マウント防止（ログ爆増・DOM重複の芽を摘む）
      if (root.dataset && root.dataset.styleV1Mounted === "1") return;
      if (root.dataset) root.dataset.styleV1Mounted = "1";

      const createSub = (title, items) => {
        const details = document.createElement("details");
        details.className = "style-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #b197fc; border-radius:4px; background:#fff;";
        details.open = false;

        const summary = document.createElement("summary");
        summary.innerHTML = `${title} <span style="font-size:0.8em; color:#6741d9;">(Anime/Game)</span>`;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f3f0ff; color:#5f3dc4;";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(150px, 1fr)); gap:6px;";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.style.marginRight = "6px";
          cb.dataset.val = item.en;
          cb.dataset.en  = item.en;
          cb.dataset.ja  = item.ja;
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.ja));
          label.title = item.en;
          content.appendChild(label);
        });

        details.appendChild(content);
        return details;
      };

      // 既存のコンテンツエリアがあれば使い、なければ作る（衝突しやすい section-content は避ける）
      const sectionContent = root.querySelector(".style-section-content") || (() => {
        const d = document.createElement("div");
        d.className = "style-section-content";
        root.appendChild(d);
        return d;
      })();

      Object.entries(STYLE_DATA).forEach(([key, val]) => {
        sectionContent.appendChild(createSub(key, val));
      });
    },

    getTags() {
      // 自分の管理下のタグを収集
      const tags = [];
      const root = document.querySelector("#list-style");
      if(root){
        root.querySelectorAll("input[type='checkbox']:checked").forEach(cb => {
          if(cb.dataset.val) tags.push(cb.dataset.val);
        });
      }
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
