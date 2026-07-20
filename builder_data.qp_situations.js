(function(){
  "use strict";
  if (!window.__QP_DB) window.__QP_DB = {};

  // シチュエーション専用ファイル
  window.__QP_DB.situations = {
    "📍 スポット・お店 (Spots & Shops)": [
      { label: "アイドルステージ (Live Stage)", val: "(idol focus), (live concert), (stage lights), (sparkles), (soft ambient stage illumination), (light particles), (low-angle close-up), (cinematic glow), (performance)", links: ["シネマティック", "Cinematic"] },
      { label: "おしゃれカフェ (Modern Cafe)", val: "(cozy modern café), (indoor), (window seat), (coffee), (sweets), (string lights), (decorations), (bokeh), (warm atmosphere), (relaxing)" },
      { label: "バー・パブ (Bar & Pub)", val: "(bar counter), (bottles on shelves), (dim lighting), (bartender), (cocktail), (glass), (jazz bar vibes), (adult atmosphere)", links: ["シネマティック", "夜"] },
      { label: "コンビニ (Convenience Store)", val: "(convenience store), (bright fluorescent light), (shelves of snacks), (refrigerator), (night shift), (modern japan), (glass door)" },
      { label: "スーパーマーケット (Supermarket)", val: "(supermarket), (grocery shopping), (aisle), (shopping basket), (fruit and vegetables), (bright lighting), (daily life)" },
      { label: "図書館 (Library)", val: "(library), (bookshelves), (quiet atmosphere), (reading), (sunlight through window), (dust particles), (studying), (ladder)" },
      { label: "病院・病室 (Hospital)", val: "(hospital room), (white bed), (medical equipment), (clean atmosphere), (sterile), (curtain), (window), (melancholic)" },
      { label: "デートスポット (Date Night)", val: "(date night), (romantic atmosphere), (city lights), (holding hands), (blush), (fashionable clothes), (restaurant), (dinner), (intimate)" }
    ],
    "🏫 学園・青春 (School & Youth)": [
      { label: "教室・授業中 (Classroom)", val: "(classroom), (school desks), (chalkboard), (sunlight through window), (friends), (school uniform), (anime school life)" },
      { label: "学校の廊下 (School Hallway)", val: "(school hallway), (lockers), (cleaning time), (sunlight), (after school), (perspective), (shiny floor)" },
      { label: "屋上 (Rooftop)", val: "(school rooftop), (fence), (blue sky), (clouds), (wind blowing hair), (cityscape in background), (secret base), (lunch break)", links: ["青空", "風"] },
      { label: "体育館 (Gymnasium)", val: "(school gymnasium), (basketball hoop), (wooden floor), (indoor shoes), (sports equipment), (large windows), (echoing)" },
      { label: "保健室 (Nurse's Office)", val: "(school infirmary), (white bed), (curtain), (medicine cabinet), (quiet), (resting), (afternoon sun)" },
      { label: "通学路 (School Route)", val: "(street to school), (cherry blossoms falling), (morning sunlight), (telephone poles), (residential area), (walking), (chatting)" },
      { label: "部室 (Club Room)", val: "(club room), (messy desk), (hobby items), (after school), (sunset glow), (friends gathering), (cozy)" }
    ],
    "🏠 家・日常 (Home & Daily Life)": [
      { label: "リビング (Living Room)", val: "(living room), (sofa), (television), (carpet), (relaxing), (cozy atmosphere), (family time), (indoor plants)" },
      { label: "キッチン (Kitchen)", val: "(modern kitchen), (cooking), (apron), (vegetables), (knife), (frying pan), (steam), (morning breakfast)" },
      { label: "寝室・ベッド (Bedroom)", val: "(bedroom), (messy bed), (white sheets), (pillow), (morning light), (pajamas), (stretching), (private space)" },
      { label: "バスルーム (Bathroom)", val: "(bathroom), (bathtub), (steam), (bubbles), (wet skin), (tiles), (mirror), (shampoo)", links: ["濡れた肌"] },
      { label: "和室 (Tatami Room)", val: "(japanese style room), (tatami mats), (shoji screen), (kotatsu), (tea cup), (cushion), (calm atmosphere)" },
      { label: "玄関 (Entrance)", val: "(entrance hall), (shoes), (umbrella stand), (welcome home), (door open), (leaving home)" },
      { label: "ベランダ (Balcony)", val: "(apartment balcony), (laundry hanging), (potted plants), (city view), (railing), (breeze), (relaxing)" }
    ],
    "🏰 ファンタジー・RPG (Fantasy & RPG)": [
      { label: "ファンタジーの森 (Fantasy Forest)", val: "(fantasy forest), (glowing plants), (magic particles), (ancient trees), (mysterious), (fairy tale), (lush vegetation)", links: ["ファンタジー"] },
      { label: "王宮・城 (Royal Palace)", val: "(royal palace), (throne room), (chandelier), (red carpet), (marble pillars), (luxurious), (gold decorations), (king and queen)" },
      { label: "ダンジョン (Dungeon)", val: "(stone dungeon), (torch light), (dark atmosphere), (cobwebs), (stone walls), (treasure chest), (adventure), (danger)" },
      { label: "冒険者ギルド (Guild Tavern)", val: "(fantasy tavern), (wooden tables), (beer mugs), (lively atmosphere), (adventurers), (candle light), (fireplace), (quest board)" },
      { label: "魔法研究所 (Magic Lab)", val: "(alchemist lab), (potions), (scrolls), (books), (magic circle), (glowing crystals), (cluttered), (mysterious)" },
      { label: "天空の城 (Sky Castle)", val: "(floating island), (castle in the sky), (clouds), (waterfall into void), (fantasy landscape), (dreamy), (epic scale)", links: ["広角"] },
      { label: "廃墟・遺跡 (Ruins)", val: "(ancient ruins), (overgrown with moss), (broken pillars), (stone statues), (mysterious), (lost civilization), (sunlight filtering)" }
    ],
    "🏙️ 都会・ストリート (Urban & Street)": [
      { label: "繁華街・交差点 (Busy Street)", val: "(busy city street), (scramble crossing), (crowd), (skyscrapers), (billboards), (modern city), (daytime), (energetic)" },
      { label: "路地裏 (Back Alley)", val: "(back alley), (narrow street), (pipes), (vending machine), (trash cans), (stray cat), (shadows), (gritty)" },
      { label: "駅のホーム (Train Station)", val: "(train station platform), (train arriving), (commuters), (electric overhead lines), (sunset), (waiting), (travel)" },
      { label: "夜のネオン街 (Neon City)", val: "(cyberpunk city), (neon signs), (rainy street), (reflections), (night), (futuristic), (vibrant colors)", links: ["サイバー・ネオン"] },
      { label: "公園のベンチ (Park Bench)", val: "(public park), (bench), (trees), (fountain), (pigeons), (relaxing), (peaceful), (lunch break)" },
      { label: "高層ビルの屋上 (Skyscraper Roof)", val: "(skyscraper rooftop), (night city view), (railing), (windy), (city lights), (lonely), (dramatic)" }
    ],
    "🌺 自然・絶景 (Nature & Scenery)": [
      { label: "花畑 (Flower Field)", val: "(flower field), (sunflowers), (blue sky), (wind), (petals scattered), (bright colors), (summer), (nature)" },
      { label: "雪山・雪原 (Snowy Landscape)", val: "(snowy mountain), (winter landscape), (snowing), (white world), (cold atmosphere), (pine trees), (footprints)" },
      { label: "ビーチ・海 (Beach & Ocean)", val: "(tropical beach), (white sand), (blue ocean), (emerald water), (palm trees), (cumulus clouds), (summer vacation)", links: ["夏・海"] },
      { label: "洞窟 (Cave)", val: "(underground cave), (stalactites), (underground lake), (glowing crystals), (dark and cool), (echo), (mystery)" },
      { label: "夕暮れの海辺 (Sunset Beach)", val: "(sunset beach), (orange sky), (reflection on water), (waves), (silhouette), (romantic), (sentimental)", links: ["夕暮れ"] },
      { label: "星空・天の川 (Starry Night)", val: "(starry sky), (milky way), (shooting star), (night landscape), (silhouette of mountains), (beautiful), (universe)" }
    ],
    "🌅 朝 (Morning)": [
      { label: "爽やかな朝", val: "(morning light:1.3), (soft sunlight), (light leaks), (low contrast), (soft shadows), (fresh atmosphere), (depth of field), (white bed sheets)", links: ["ソフトライティング"] },
      { label: "木漏れ日と自然", val: "(sunlight through leaves), (dappled sunlight), (tyndall effect), (nature focus), (soft focus), (forest background), (peaceful)", links: ["ボリュメトリック", "God Rays"] },
      { label: "窓辺の光", val: "(sunlight through window), (god rays), (dust particles), (indoor), (backlighting), (soft ambient light), (warm white balance)", links: ["God Rays"] },
      { label: "朝のカフェ", val: "(morning light:1.3), (cozy cafe), (sunlight through window), (steam rising from coffee), (fresh atmosphere), (white tablecloth), (soft focus), (peaceful morning)", links: ["座りポーズ"] },
      { label: "目覚めのベッド", val: "(morning light), (bedroom), (white bed sheets), (messy hair), (stretching), (light leaks), (soft shadows), (intimate), (pov)", links: ["伸びポーズ"] }
    ],
    "☀️ 昼 (Day)": [
      { label: "快晴・青空", val: "(intense sunlight), (blue sky), (cumulus clouds), (vibrant colors), (sharp focus), (high contrast), (dynamic shadows), (summer vibes)", links: ["夏・海", "広角"] },
      { label: "日常・自然光", val: "(natural lighting), (daylight), (neutral colors), (realistic shadows), (clear sky), (casual atmosphere), (detailed background)" },
      { label: "真夏の日差し", val: "(harsh sunlight), (strong shadows), (lens flare), (heat haze), (saturated colors), (shimmering air), (sweat)", links: ["濡れた肌", "Wet Skin"] },
      { label: "昼の賑やかなカフェ", val: "(daylight), (modern cafe), (bustling atmosphere), (bright interior), (green plants), (sharp focus), (vibrant colors), (lunch time), (clear glass window)", links: ["座りポーズ"] }
    ],
    "🌇 夕方 (Evening)": [
      { label: "マジックアワー", val: "(golden hour:1.4), (sunset), (warm lighting), (orange and purple sky), (long shadows), (sentimental atmosphere), (cinematic lighting)", links: ["シネマティック"] },
      { label: "逆光・シルエット", val: "(strong backlighting), (rim light), (silhouette), (lens flare), (sun behind character), (glowing outline), (dramatic contrast)", links: ["リムライト"] },
      { label: "黄昏・ノスタルジー", val: "(twilight), (blue hour), (fading light), (street lights turning on), (nostalgic), (soft bokeh), (melancholic)", links: ["ボケ"] },
      { label: "夕暮れのカフェ", val: "(golden hour:1.3), (cafe terrace), (warm orange lighting), (long shadows), (sunset glow), (relaxing after work), (nostalgic atmosphere), (coffee cup)", links: ["座りポーズ"] }
    ],
    "🌃 夜 (Night)": [
      { label: "都会のネオン", val: "(night city), (neon lights), (colorful bokeh), (wet street reflections), (cyberpunk vibes), (high contrast), (cinematic lighting), (dark shadows)", links: ["サイバー・ネオン", "シネマティック"] },
      { label: "月明かり", val: "(moonlight), (full moon), (cold color palette), (blue tint), (rim light), (mysterious atmosphere), (soft glow), (dark ambient)", links: ["リムライト"] },
      { label: "暗闇とスポット", val: "(darkness), (spotlight), (chiaroscuro), (dramatic shadows), (mystery), (focus on face), (black background)", links: ["レイトレーシング"] },
      { label: "夜のカフェバー", val: "(night cafe), (dim lighting), (warm string lights), (candle light), (romantic atmosphere), (bokeh background), (reflection in window), (jazz bar vibes)", links: ["シネマティック"] }
    ]
  };
})();

