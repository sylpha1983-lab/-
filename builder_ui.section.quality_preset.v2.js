(function(){
  "use strict";
  const VERSION = 2; 
  const KEY = "quality_preset";

  // ==============================================================================
  // 📍 日常・現実ロケーション & 時間帯 (Daily & Reality)
  // ==============================================================================
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
    // Spot
    "idol focus": "アイドル", "live concert": "ライブ", "stage lights": "ステージ照明", "sparkles": "キラキラ", "cinematic glow": "映画的輝き", "performance": "パフォーマンス",
    "cozy modern café": "モダンカフェ", "coffee": "コーヒー", "sweets": "スイーツ", "string lights": "イルミネーション", "bar counter": "バーカウンター", "bottles on shelves": "棚のボトル",
    "bartender": "バーテンダー", "cocktail": "カクテル", "jazz bar vibes": "ジャズバー", "adult atmosphere": "大人の雰囲気", "convenience store": "コンビニ", "bright fluorescent light": "蛍光灯",
    "shelves of snacks": "お菓子棚", "refrigerator": "冷蔵庫", "night shift": "夜勤", "modern japan": "現代日本", "supermarket": "スーパー", "grocery shopping": "買い物",
    "shopping basket": "カゴ", "fruit and vegetables": "青果", "library": "図書館", "bookshelves": "本棚", "quiet atmosphere": "静寂", "reading": "読書", "hospital room": "病室",
    "white bed": "白いベッド", "medical equipment": "医療機器", "sterile": "無菌", "date night": "夜デート", "romantic atmosphere": "ロマンチック", "city lights": "街明かり", "holding hands": "手繋ぎ",
    "restaurant": "レストラン", "dinner": "ディナー",
    // Time specific
    "morning light": "朝の光", "cozy cafe": "居心地の良いカフェ", "steam rising from coffee": "コーヒーの湯気", "peaceful morning": "平和な朝",
    "bedroom": "寝室", "messy hair": "寝癖", "stretching": "伸び", "street to school": "通学路", "soft breeze": "そよ風", "youthful atmosphere": "青春の雰囲気",
    "daylight": "日光", "bustling atmosphere": "活気ある雰囲気", "lunch time": "ランチタイム", "sunlight pouring in": "降り注ぐ日差し",
    "harsh sunlight": "厳しい日差し", "heat haze": "陽炎", "shimmering air": "揺らめく空気", "shopping district": "商店街", "fashionable shops": "おしゃれな店",
    "golden hour": "ゴールデンアワー", "cafe terrace": "カフェテラス", "sunset glow": "夕焼け", "relaxing after work": "仕事後のリラックス", "coffee cup": "コーヒーカップ",
    "orange sky through window": "窓越しの夕焼け", "empty classroom": "空の教室", "magic hour": "マジックアワー", "street lights turning on": "街灯が点く",
    "night cafe": "夜カフェ", "candle light": "キャンドル", "dark bedroom": "暗い寝室", "city night view": "都市の夜景", "moonlight": "月光", "full moon": "満月",
    "spotlight": "スポットライト", "chiaroscuro": "明暗法", "black background": "黒背景",
    // General Situations
    "classroom": "教室", "school desks": "机", "chalkboard": "黒板", "friends": "友達", "school uniform": "制服", "school hallway": "廊下", "lockers": "ロッカー",
    "cleaning time": "掃除時間", "school rooftop": "屋上", "fence": "フェンス", "wind blowing hair": "風になびく髪", "secret base": "秘密基地", "school gymnasium": "体育館",
    "basketball hoop": "バスケゴール", "wooden floor": "床", "indoor shoes": "上履き", "school infirmary": "保健室", "medicine cabinet": "薬棚", "telephone poles": "電柱",
    "club room": "部室", "messy desk": "散らかった机", "living room": "リビング", "sofa": "ソファ", "television": "テレビ", "carpet": "カーペット", "family time": "団欒",
    "modern kitchen": "キッチン", "cooking": "料理", "apron": "エプロン", "vegetables": "野菜", "frying pan": "フライパン", "white sheets": "シーツ", "pillow": "枕",
    "pajamas": "パジャマ", "bathroom": "バスルーム", "bathtub": "バスタブ", "steam": "湯気", "bubbles": "泡", "wet skin": "濡れた肌", "japanese style room": "和室",
    "tatami mats": "畳", "shoji screen": "障子", "kotatsu": "こたつ", "entrance hall": "玄関", "shoes": "靴", "umbrella stand": "傘立て", "welcome home": "おかえり",
    "apartment balcony": "ベランダ", "laundry hanging": "洗濯物", "potted plants": "鉢植え", "busy city street": "繁華街", "scramble crossing": "スクランブル交差点",
    "crowd": "人混み", "billboards": "看板", "skyscrapers": "高層ビル", "back alley": "路地裏", "vending machine": "自販機", "trash cans": "ゴミ箱", "stray cat": "野良猫",
    "train station platform": "駅のホーム", "train arriving": "電車到着", "commuters": "通勤客", "cyberpunk city": "ネオン街", "neon signs": "ネオンサイン",
    "rainy street": "雨の通り", "public park": "公園", "bench": "ベンチ", "fountain": "噴水", "skyscraper rooftop": "ビルの屋上", "night city view": "夜景",
    "flower field": "花畑", "sunflowers": "ひまわり", "snowy mountain": "雪山", "winter landscape": "冬景色", "snowing": "雪", "white world": "銀世界",
    "tropical beach": "ビーチ", "white sand": "砂浜", "blue ocean": "青い海", "palm trees": "ヤシの木", "underground cave": "洞窟", "stalactites": "鍾乳石",
    "underground lake": "地底湖", "sunset beach": "夕暮れの海", "reflection on water": "水面の反射", "waves": "波", "starry sky": "星空", "milky way": "天の川",
    "shooting star": "流れ星", "light leaks": "光漏れ", "soft shadows": "柔らかな影", "fresh atmosphere": "爽やか", "sunlight through leaves": "木漏れ日",
    "dappled sunlight": "まだらな日差し", "tyndall effect": "チンダル現象", "god rays": "ゴッドレイ", "dust particles": "舞う埃", "backlighting": "逆光",
    "intense sunlight": "強い日差し", "blue sky": "青空", "cumulus clouds": "入道雲", "summer vibes": "夏の雰囲気", "natural lighting": "自然光",
    "sunset": "夕日", "orange and purple sky": "夕焼け空", "long shadows": "長い影", "silhouette": "シルエット", "sun behind character": "背後の太陽",
    "twilight": "黄昏", "blue hour": "ブルーアワー", "night city": "夜の街", "colorful bokeh": "カラフルなボケ", "darkness": "暗闇", "cherry blossoms": "桜",
    "raining": "雨", "wet ground": "濡れた地面", "spring season": "春", "summer season": "夏", "autumn season": "秋", "winter season": "冬", "fallen leaves": "落ち葉"
  };

  // UIヘルパー
  function createSubAccordion(title, items) { 
    const details = document.createElement("details"); details.className = "qp-sub-acc"; details.style.marginBottom = "6px"; details.style.border = "1px solid #eee"; details.style.borderRadius = "4px"; details.style.background = "#fff"; details.open = false; 
    const summary = document.createElement("summary"); summary.textContent = title; summary.style.fontWeight = "bold"; summary.style.padding = "6px 10px"; summary.style.cursor = "pointer"; summary.style.background = "#f9f9f9"; details.appendChild(summary); 
    const content = document.createElement("div"); content.className = "qp-content-grid"; content.style.padding = "8px"; content.style.display = "grid"; content.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))"; content.style.gap = "6px"; 
    items.forEach(item => { 
      const label = document.createElement("label"); label.style.display = "flex"; label.style.alignItems = "center"; label.style.fontSize = "0.9em"; label.style.cursor = "pointer"; 
      const cb = document.createElement("input"); cb.type = "checkbox"; cb.style.marginRight = "6px"; cb.dataset.val = item.val || item.en; 
      label.appendChild(cb); label.appendChild(document.createTextNode(item.label || `${item.ja}/${item.en}`)); 
      if(item.links) cb.dataset.links = item.links.join(","); content.appendChild(label); 
    }); 
    details.appendChild(content); return details; 
  }

  // ★重要: v1で作った親枠に追加するロジック
  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      
      const generalArea = document.getElementById("qp-situations-general-area");
      
      if (generalArea) {
        Object.entries(SITUATION_DATA).forEach(([k,v]) => {
           generalArea.appendChild(createSubAccordion(k, v));
        });
      } else {
        const root = document.querySelector(".quality-preset-integrated");
        if (root) {
           Object.entries(SITUATION_DATA).forEach(([k,v]) => {
             root.appendChild(createSubAccordion(k, v));
           });
        }
      }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

