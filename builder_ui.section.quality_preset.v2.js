(function(){
  "use strict";
  const VERSION = 2; 
  const KEY = "quality_preset";

  const SITUATION_DATA = {
    "📍 スポット・お店 (Spots)": [
      { label: "おしゃれカフェ", val: "(cozy modern café), (indoor), (window seat), (coffee), (sweets), (string lights), (decorations), (bokeh)", links: ["ボケ"] },
      { label: "バー・パブ", val: "(bar counter), (bottles on shelves), (dim lighting), (bartender), (cocktail), (glass), (jazz bar vibes), (adult atmosphere)", links: ["シネマティック"] },
      { label: "コンビニ", val: "(convenience store), (bright fluorescent light), (shelves of snacks), (refrigerator), (night shift), (modern japan)" },
      { label: "スーパーマーケット", val: "(supermarket), (grocery shopping), (aisle), (shopping basket), (fruit and vegetables), (bright lighting)" },
      { label: "図書館", val: "(library), (bookshelves), (quiet atmosphere), (reading), (sunlight through window), (dust particles), (studying)" },
      { label: "病院・病室", val: "(hospital room), (white bed), (medical equipment), (clean atmosphere), (sterile), (curtain), (window)" },
      { label: "アイドルステージ", val: "(idol focus), (live concert), (stage lights), (sparkles), (soft ambient stage illumination), (cinematic glow), (performance)", links: ["シネマティック"] },
      { label: "デートスポット", val: "(date night), (romantic atmosphere), (city lights), (holding hands), (blush), (fashionable clothes), (restaurant), (dinner)" }
    ],
    "🏫 学園・青春 (School)": [
      { label: "教室・授業中", val: "(classroom), (school desks), (chalkboard), (sunlight through window), (friends), (school uniform), (anime school life)" },
      { label: "学校の廊下", val: "(school hallway), (lockers), (cleaning time), (sunlight), (after school), (perspective), (shiny floor)" },
      { label: "屋上", val: "(school rooftop), (fence), (blue sky), (clouds), (wind blowing hair), (cityscape in background), (secret base), (lunch break)", links: ["青空", "風"] },
      { label: "体育館", val: "(school gymnasium), (basketball hoop), (wooden floor), (indoor shoes), (sports equipment), (large windows), (echoing)" },
      { label: "保健室", val: "(school infirmary), (white bed), (curtain), (medicine cabinet), (quiet), (resting), (afternoon sun)" },
      { label: "通学路", val: "(street to school), (cherry blossoms falling), (morning sunlight), (telephone poles), (residential area), (walking), (chatting)" },
      { label: "部室", val: "(club room), (messy desk), (hobby items), (after school), (sunset glow), (friends gathering), (cozy)" }
    ],
    "🏠 家・日常 (Home)": [
      { label: "リビング", val: "(living room), (sofa), (television), (carpet), (relaxing), (cozy atmosphere), (family time), (indoor plants)" },
      { label: "キッチン", val: "(modern kitchen), (cooking), (apron), (vegetables), (knife), (frying pan), (steam), (morning breakfast)" },
      { label: "寝室・ベッド", val: "(bedroom), (messy bed), (white sheets), (pillow), (morning light), (pajamas), (stretching), (private space)" },
      { label: "バスルーム", val: "(bathroom), (bathtub), (steam), (bubbles), (wet skin), (tiles), (mirror), (shampoo)", links: ["濡れた肌"] },
      { label: "和室", val: "(japanese style room), (tatami mats), (shoji screen), (kotatsu), (tea cup), (cushion), (calm atmosphere)" },
      { label: "玄関", val: "(entrance hall), (shoes), (umbrella stand), (welcome home), (door open), (leaving home)" },
      { label: "ベランダ", val: "(apartment balcony), (laundry hanging), (potted plants), (city view), (railing), (breeze), (relaxing)" }
    ],
    "🏙️ 都会・ストリート (City)": [
      { label: "繁華街", val: "(busy city street), (scramble crossing), (crowd), (skyscrapers), (billboards), (modern city), (daytime), (energetic)" },
      { label: "路地裏", val: "(back alley), (narrow street), (pipes), (vending machine), (trash cans), (stray cat), (shadows), (gritty)" },
      { label: "駅のホーム", val: "(train station platform), (train arriving), (commuters), (electric overhead lines), (sunset), (waiting), (travel)" },
      { label: "夜のネオン街", val: "(cyberpunk city), (neon signs), (rainy street), (reflections), (night), (futuristic), (vibrant colors)", links: ["サイバー・ネオン"] },
      { label: "公園", val: "(public park), (bench), (trees), (fountain), (pigeons), (relaxing), (peaceful), (lunch break)" },
      { label: "ビルの屋上", val: "(skyscraper rooftop), (night city view), (railing), (windy), (city lights), (lonely), (dramatic)" }
    ],
    "🌺 自然・絶景 (Nature)": [
      { label: "花畑", val: "(flower field), (sunflowers), (blue sky), (wind), (petals scattered), (bright colors), (summer), (nature)" },
      { label: "雪山", val: "(snowy mountain), (winter landscape), (snowing), (white world), (cold atmosphere), (pine trees), (footprints)" },
      { label: "ビーチ", val: "(tropical beach), (white sand), (blue ocean), (emerald water), (palm trees), (cumulus clouds), (summer vacation)", links: ["夏・海"] },
      { label: "洞窟", val: "(underground cave), (stalactites), (underground lake), (glowing crystals), (dark and cool), (echo), (mystery)" },
      { label: "夕暮れの海", val: "(sunset beach), (orange sky), (reflection on water), (waves), (silhouette), (romantic), (sentimental)", links: ["夕暮れ"] },
      { label: "星空", val: "(starry sky), (milky way), (shooting star), (night landscape), (silhouette of mountains), (beautiful), (universe)" }
    ],
    "🌅 朝 (Morning)": [
      { label: "爽やかな朝", val: "(morning light:1.3), (soft sunlight), (light leaks), (low contrast), (soft shadows), (fresh atmosphere), (depth of field)", links: ["ソフトライティング"] },
      { label: "朝のカフェ", val: "(morning light:1.3), (cozy cafe), (sunlight through window), (steam rising from coffee), (fresh atmosphere), (white tablecloth), (soft focus), (peaceful morning)", links: ["座りポーズ"] },
      { label: "目覚めのベッド", val: "(morning light), (bedroom), (white bed sheets), (messy hair), (stretching), (light leaks), (soft shadows), (intimate), (pov)", links: ["伸びポーズ"] },
      { label: "登校中", val: "(morning sunlight), (street to school), (cherry blossoms falling), (soft breeze), (school uniform), (lens flare), (youthful atmosphere), (clear sky)", links: ["立ちポーズ"] },
      { label: "窓辺の光", val: "(sunlight through window), (god rays), (dust particles), (indoor), (backlighting), (soft ambient light), (warm white balance)", links: ["God Rays"] },
      { label: "木漏れ日", val: "(sunlight through leaves), (dappled sunlight), (tyndall effect), (nature focus), (soft focus), (forest background), (peaceful)", links: ["ボリュメトリック"] }
    ],
    "☀️ 昼 (Day)": [
      { label: "快晴・青空", val: "(intense sunlight), (blue sky), (cumulus clouds), (vibrant colors), (sharp focus), (high contrast), (dynamic shadows), (summer vibes)", links: ["夏・海", "広角"] },
      { label: "昼のカフェ", val: "(daylight), (modern cafe), (bustling atmosphere), (bright interior), (green plants), (sharp focus), (vibrant colors), (lunch time), (clear glass window)", links: ["座りポーズ"] },
      { label: "教室の休み時間", val: "(daylight), (classroom), (sunlight pouring in), (blue sky outside window), (desks and chairs), (chalkboard), (friends chatting), (anime school life)", links: ["日常ポーズ"] },
      { label: "真夏の日差し", val: "(harsh sunlight), (strong shadows), (lens flare), (heat haze), (saturated colors), (shimmering air), (sweat)", links: ["濡れた肌"] },
      { label: "ショッピング街", val: "(city street), (shopping district), (clear blue sky), (fashionable shops), (crowd), (dynamic shadows), (casual date), (vibrant)", links: ["立ちポーズ"] },
      { label: "日常・自然光", val: "(natural lighting), (daylight), (neutral colors), (realistic shadows), (clear sky), (casual atmosphere), (detailed background)" }
    ],
    "🌇 夕方 (Evening)": [
      { label: "マジックアワー", val: "(golden hour:1.4), (sunset), (warm lighting), (orange and purple sky), (long shadows), (sentimental atmosphere), (cinematic lighting)", links: ["シネマティック"] },
      { label: "夕暮れのカフェ", val: "(golden hour:1.3), (cafe terrace), (warm orange lighting), (long shadows), (sunset glow), (relaxing after work), (nostalgic atmosphere), (coffee cup)", links: ["座りポーズ"] },
      { label: "放課後の教室", val: "(sunset), (orange sky through window), (empty classroom), (silhouette against window), (sentimental), (dust particles), (magic hour), (shadows stretching)", links: ["黄昏"] },
      { label: "帰り道", val: "(twilight), (residential street), (telephone poles), (street lights turning on), (fading light), (emotional), (backlighting), (rim light)", links: ["日常ポーズ"] },
      { label: "黄昏・ブルーアワー", val: "(twilight), (blue hour), (fading light), (street lights turning on), (nostalgic), (soft bokeh), (melancholic)", links: ["ボケ"] },
      { label: "逆光・シルエット", val: "(strong backlighting), (rim light), (silhouette), (lens flare), (sun behind character), (glowing outline), (dramatic contrast)", links: ["リムライト"] }
    ],
    "🌃 夜 (Night)": [
      { label: "都会のネオン", val: "(night city), (neon lights), (colorful bokeh), (wet street reflections), (cyberpunk vibes), (high contrast), (cinematic lighting), (dark shadows)", links: ["サイバー・ネオン"] },
      { label: "夜のカフェバー", val: "(night cafe), (dim lighting), (warm string lights), (candle light), (romantic atmosphere), (bokeh background), (reflection in window), (jazz bar vibes)", links: ["シネマティック"] },
      { label: "月夜の寝室", val: "(midnight), (dark bedroom), (moonlight through window), (blue tint), (cold atmosphere), (lonely), (dim ambient light), (shadows)", links: ["寝ポーズ"] },
      { label: "夜景デート", val: "(observation deck), (city night view), (sparkling city lights), (bokeh), (couple atmosphere), (elegant), (dark sky), (stars)", links: ["キメポーズ"] },
      { label: "月明かり", val: "(moonlight), (full moon), (cold color palette), (blue tint), (rim light), (mysterious atmosphere), (soft glow), (dark ambient)", links: ["リムライト"] },
      { label: "暗闇とスポット", val: "(darkness), (spotlight), (chiaroscuro), (dramatic shadows), (mystery), (focus on face), (black background)", links: ["レイトレーシング"] }
    ],
    "🍃 季節・天気 (Season)": [
      { label: "春・桜", val: "(spring season), (cherry blossoms), (pink atmosphere), (soft sunlight), (warm breeze)" },
      { label: "夏・海", val: "(summer season), (intense sunlight), (blue sky), (heat haze), (vibrant colors), (high contrast)" },
      { label: "秋・紅葉", val: "(autumn season), (fallen leaves), (orange and red theme), (warm lighting), (nostalgic atmosphere)" },
      { label: "冬・雪", val: "(winter season), (snowing), (snowy landscape), (cold atmosphere), (breath steam), (pale colors), (overcast)" },
      { label: "雨の情緒", val: "(raining), (wet ground), (reflections), (gloomy sky), (cinematic lighting), (atmospheric perspective)" },
      { label: "幻想的", val: "(dreamlike atmosphere), (soft focus), (faint sparkles), (floating feathers), (bokeh heart shapes), (pastel theme), (innocent)" }
    ]
  };

  const DICT = {
    // 省略 (既存のDICTデータ)...
  };

  // UIヘルパー (★完全修正: インラインスタイルを徹底的に排除)
  function createSubAccordion(title, items) { 
    const details = document.createElement("details"); 
    details.className = "qp-sub-acc"; 
    details.open = false; 
    
    const summary = document.createElement("summary"); 
    summary.textContent = title; 
    details.appendChild(summary); 
    
    const content = document.createElement("div"); 
    content.className = "qp-content-grid"; // ここにあった style.display="grid" 等を全削除
    
    items.forEach(item => { 
      const label = document.createElement("label"); 
      const cb = document.createElement("input"); 
      cb.type = "checkbox"; 
      cb.dataset.val = item.val || item.en; 
      label.appendChild(cb); 
      label.appendChild(document.createTextNode(item.label || `${item.ja}/${item.en}`)); 
      if(item.links) cb.dataset.links = item.links.join(","); 
      content.appendChild(label); 
    }); 
    
    details.appendChild(content); 
    return details; 
  }

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      const generalArea = document.getElementById("qp-situations-general-area");
      if (generalArea) {
        Object.entries(SITUATION_DATA).forEach(([k,v]) => { generalArea.appendChild(createSubAccordion(k, v)); });
      }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

