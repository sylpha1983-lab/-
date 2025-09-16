/* background_part1.js v1.3 (2025-09-16)
   + Base places (sea/mountain/forest/...) at top
   + Famous Seas list placed right after base "sea"
   (UI untouched / registry-compatible)
*/
(function(g){
  const categories = [
  {
    "name": "Background Geometry / 背景ジオメトリ",
    "items": [
      { "id": "bg-dune-ridges", "label": "砂丘の尾根 / dune ridges" },
      { "id": "bg-wadi-canyon", "label": "ワジ渓谷 / wadi canyon" },
      { "id": "bg-rock-arches-desert", "label": "砂漠の岩アーチ / desert rock arches" },
      { "id": "bg-oasis-palm", "label": "オアシスと椰子 / oasis with palms" }
    ]
  },
  {
    "name": "Composition / 構図・フレーミング",
    "items": [
      { "id": "low-angle-mirage", "label": "ロウアングル・蜃気楼越し / low angle through mirage" },
      { "id": "long-journey-lines", "label": "遠近線で旅情 / long journey lines" },
      { "id": "silhouette-dune-crest", "label": "砂丘稜線のシルエット / silhouette on dune crest" }
    ]
  },
  {
    "name": "Places / 世界の場所",
    "categories": [
      /* ---------- [CHANGE] ここから追加: ベース＆有名な海域（先頭に来る） ---------- */
      {
        "name": "Base / ベース（汎用）",
        "items": [
          { "id": "bg-sea",        "label": "海 / sea, ocean" },
          { "id": "bg-mountain",   "label": "山 / mountain" },
          { "id": "bg-forest",     "label": "森林 / forest" },
          { "id": "bg-desert",     "label": "砂漠 / desert" },
          { "id": "bg-city",       "label": "都市 / city" },
          { "id": "bg-village",    "label": "村 / village" },
          { "id": "bg-river",      "label": "川 / river" },
          { "id": "bg-lake",       "label": "湖 / lake" },
          { "id": "bg-waterfall",  "label": "滝 / waterfall" },
          { "id": "bg-beach",      "label": "ビーチ / beach" },
          { "id": "bg-island",     "label": "島 / island" },
          { "id": "bg-plains",     "label": "平原 / plains" },
          { "id": "bg-hills",      "label": "丘陵 / hills" },
          { "id": "bg-valley",     "label": "谷 / valley" },
          { "id": "bg-canyon",     "label": "峡谷 / canyon" },
          { "id": "bg-sky",        "label": "空 / sky" },
          { "id": "bg-snowfield",  "label": "雪原 / snowfield" },
          { "id": "bg-road",       "label": "道路 / road" },
          { "id": "bg-park",       "label": "公園 / park" },
          { "id": "bg-garden",     "label": "庭園 / garden" }
        ]
      },
      {
        "name": "Famous Seas / 有名な海域",
        "items": [
          { "id": "bg-sea-mediterranean", "label": "地中海 / Mediterranean Sea" },
          { "id": "bg-sea-caribbean",     "label": "カリブ海 / Caribbean Sea" },
          { "id": "bg-sea-baltic",        "label": "バルト海 / Baltic Sea" },
          { "id": "bg-sea-aegean",        "label": "エーゲ海 / Aegean Sea" },
          { "id": "bg-sea-red",           "label": "紅海 / Red Sea" },
          { "id": "bg-sea-arabian",       "label": "アラビア海 / Arabian Sea" },
          { "id": "bg-sea-south-china",   "label": "南シナ海 / South China Sea" },
          { "id": "bg-sea-japan",         "label": "日本海 / Sea of Japan" },
          { "id": "bg-sea-okhotsk",       "label": "オホーツク海 / Sea of Okhotsk" },
          { "id": "bg-sea-bering",        "label": "ベーリング海 / Bering Sea" },
          { "id": "bg-sea-north",         "label": "北海 / North Sea" },
          { "id": "bg-sea-black",         "label": "黒海 / Black Sea" },
          { "id": "bg-sea-tyrrhenian",    "label": "ティレニア海 / Tyrrhenian Sea" },
          { "id": "bg-sea-ionian",        "label": "イオニア海 / Ionian Sea" },
          { "id": "bg-sea-andaman",       "label": "アンダマン海 / Andaman Sea" }
        ]
      },
      /* ---------- [CHANGE] 追加ここまで ---------- */

      {
        "name": "Outdoor / 屋外",
        "categories": [
          {
            "name": "City & Town / 都市・町",
            "items": [
              { "id": "bg-tokyo-shibuya", "label": "渋谷スクランブル交差点 / Shibuya crossing" },
              { "id": "bg-tokyo-shinjuku","label": "新宿歌舞伎町 / Shinjuku Kabukicho" },
              { "id": "bg-kyoto-gion",    "label": "京都 祇園 / Kyoto Gion" },
              { "id": "bg-osaka-dotonbori","label":"大阪 道頓堀 / Osaka Dotonbori" },
              { "id": "bg-yokohama-minatomirai","label":"横浜 みなとみらい / Yokohama Minato Mirai" },
              { "id": "bg-hiroshima-dome","label": "広島 原爆ドーム / Hiroshima A-Bomb Dome" },
              { "id": "bg-sapporo-odori", "label": "札幌 大通公園 / Sapporo Odori Park" },
              { "id": "bg-nagasaki-harbor","label":"長崎 港夜景 / Nagasaki harbor nightview" },
              { "id": "bg-fukuoka-tenjin","label": "福岡 天神 / Fukuoka Tenjin" },
              { "id": "bg-seoul-myeongdong","label":"ソウル 明洞 / Seoul Myeongdong" },
              { "id": "bg-busan-haeundae","label":"釜山 海雲台 / Busan Haeundae beach" },
              { "id": "bg-beijing-hutong","label":"北京 胡同 / Beijing hutong" },
              { "id": "bg-shanghai-bund", "label":"上海 外灘 / Shanghai Bund" },
              { "id": "bg-hongkong-skyline","label":"香港 スカイライン / Hong Kong skyline" },
              { "id": "bg-taipei-101",    "label":"台北101 / Taipei 101" },
              { "id": "bg-singapore-marina","label":"シンガポール マリーナ湾 / Singapore Marina Bay" },
              { "id": "bg-bangkok-oldtown","label":"バンコク 旧市街 / Bangkok Old Town" },
              { "id": "bg-chiangmai-oldcity","label":"チェンマイ 旧市街 / Chiang Mai Old City" },
              { "id": "bg-kuala-lumpur-towers","label":"クアラルンプール ツインタワー / Kuala Lumpur Twin Towers" },
              { "id": "bg-jakarta-oldtown","label":"ジャカルタ旧市街 / Jakarta Old Town" },
              { "id": "bg-manila-intramuros","label":"マニラ イントラムロス / Manila Intramuros" },
              { "id": "bg-dubai-marina",  "label":"ドバイ マリーナ / Dubai Marina" },
              { "id": "bg-abu-dhabi-corniche","label":"アブダビ コーニッシュ / Abu Dhabi Corniche" },
              { "id": "bg-istanbul-bosphorus","label":"イスタンブール ボスポラス / Istanbul Bosphorus" },
              { "id": "bg-paris-eiffel",  "label":"パリ エッフェル塔 / Paris Eiffel Tower" },
              { "id": "bg-paris-montmartre","label":"パリ モンマルトル / Paris Montmartre" },
              { "id": "bg-london-thames", "label":"ロンドン テムズ川 / London Thames" },
              { "id": "bg-london-camden", "label":"ロンドン カムデン / London Camden" },
              { "id": "bg-edinburgh-castle","label":"エディンバラ 城 / Edinburgh Castle" },
              { "id": "bg-dublin-templebar","label":"ダブリン テンプルバー / Dublin Temple Bar" },
              { "id": "bg-rome-colosseum","label":"ローマ コロッセオ / Rome Colosseum" },
              { "id": "bg-venice-canals","label":"ベネチア 運河 / Venice canals" },
              { "id": "bg-florence-duomo","label":"フィレンツェ ドゥオーモ / Florence Duomo" },
              { "id": "bg-milan-duomo-square","label":"ミラノ ドゥオーモ広場 / Milan Duomo Square" },
              { "id": "bg-madrid-plaza-mayor","label":"マドリード マヨール広場 / Madrid Plaza Mayor" },
              { "id": "bg-barcelona-sagrada","label":"バルセロナ サグラダ / Barcelona Sagrada Família" },
              { "id": "bg-lisbon-alfama","label":"リスボン アルファマ / Lisbon Alfama" },
              { "id": "bg-porto-ribeira","label":"ポルト リベイラ / Porto Ribeira" },
              { "id": "bg-berlin-brandenburg","label":"ベルリン ブランデンブルク門 / Berlin Brandenburg Gate" },
              { "id": "bg-munich-marienplatz","label":"ミュンヘン マリエン広場 / Munich Marienplatz" },
              { "id": "bg-hamburg-harbor","label":"ハンブルク 港 / Hamburg Harbor" },
              { "id": "bg-amsterdam-canal","label":"アムステルダム 運河 / Amsterdam canals" },
              { "id": "bg-brussels-grandplace","label":"ブリュッセル グランプラス / Brussels Grand Place" },
              { "id": "bg-copenhagen-nyhavn","label":"コペンハーゲン ニューハウン / Copenhagen Nyhavn" },
              { "id": "bg-stockholm-gamlastan","label":"ストックホルム 旧市街 / Stockholm Gamla Stan" },
              { "id": "bg-oslo-opera","label":"オスロ オペラハウス / Oslo Opera House" },
              { "id": "bg-reykjavik-harpa","label":"レイキャビク ハルパ / Reykjavik Harpa" },
              { "id": "bg-moscow-red-square","label":"モスクワ 赤の広場 / Moscow Red Square" },
              { "id": "bg-stpetersburg-hermitage","label":"サンクトペテルブルク エルミタージュ / St. Petersburg Hermitage" },
              { "id": "bg-prague-charles","label":"プラハ カレル橋 / Prague Charles Bridge" },
              { "id": "bg-budapest-parliament","label":"ブダペスト 国会議事堂 / Budapest Parliament" },
              { "id": "bg-athens-acropolis","label":"アテネ アクロポリス / Athens Acropolis" },
              { "id": "bg-santorini-oia","label":"サントリーニ イア / Santorini Oia" },
              { "id": "bg-zurich-limmat","label":"チューリッヒ リマト川 / Zurich Limmat" },
              { "id": "bg-geneva-lakefront","label":"ジュネーブ レマン湖畔 / Geneva lakefront" },
              { "id": "bg-interlaken-town","label":"インターラーケン 町並み / Interlaken town" },
              { "id": "bg-dubrovnik-walls","label":"ドゥブロブニク 城壁 / Dubrovnik city walls" },
              { "id": "bg-krakow-oldtown","label":"クラクフ 旧市街 / Krakow Old Town" },
              { "id": "bg-nyc-times","label":"NY・タイムズスクエア / NYC Times Square" },
              { "id": "bg-newyork-manhattan","label":"ニューヨーク マンハッタン / New York Manhattan" },
              { "id": "bg-newyork-centralpark","label":"ニューヨーク セントラルパーク / New York Central Park" },
              { "id": "bg-washington-mall","label":"ワシントンD.C. モール / Washington National Mall" },
              { "id": "bg-boston-harbor","label":"ボストン 港 / Boston Harbor" },
              { "id": "bg-chicago-riverwalk","label":"シカゴ リバーウォーク / Chicago Riverwalk" },
              { "id": "bg-seattle-pikeplace","label":"シアトル パイクプレイス / Seattle Pike Place" },
              { "id": "bg-sanfrancisco-golden-gate","label":"サンフランシスコ 金門橋 / San Francisco Golden Gate" },
              { "id": "bg-losangeles-santa-monica","label":"ロサンゼルス サンタモニカ / Los Angeles Santa Monica" },
              { "id": "bg-lasvegas-strip","label":"ラスベガス ストリップ / Las Vegas Strip" },
              { "id": "bg-honolulu-waikiki","label":"ホノルル ワイキキ / Honolulu Waikiki" },
              { "id": "bg-vancouver-stanley","label":"バンクーバー スタンレー公園 / Vancouver Stanley Park" },
              { "id": "bg-toronto-cn","label":"トロント CNタワー / Toronto CN Tower" },
              { "id": "bg-montreal-oldport","label":"モントリオール 旧港 / Montreal Old Port" },
              { "id": "bg-quebec-oldtown","label":"ケベック 旧市街 / Quebec Old Town" },
              { "id": "bg-mexico-zocalo","label":"メキシコシティ ソカロ / Mexico City Zócalo" },
              { "id": "bg-chichen-itza","label":"チチェン・イッツァ / Chichén Itzá" },
              { "id": "bg-rio-copacabana","label":"リオ コパカバーナ / Rio Copacabana" },
              { "id": "bg-buenos-aires-la-boca","label":"ブエノスアイレス ラ・ボカ / Buenos Aires La Boca" },
              { "id": "bg-santiago-plaza","label":"サンティアゴ 中央広場 / Santiago Plaza de Armas" },
              { "id": "bg-havana-oldtown","label":"ハバナ 旧市街 / Havana Old Town" },
              { "id": "bg-sydney-opera","label":"シドニー オペラハウス / Sydney Opera House" },
              { "id": "bg-melbourne-laneways","label":"メルボルン 路地 / Melbourne Laneways" },
              { "id": "bg-auckland-sky","label":"オークランド スカイタワー / Auckland Sky Tower" }
            ]
          },
          {
            "name": "Nature / 自然",
            "items": [
              { "id": "bg-fuji-five-lakes", "label": "富士五湖 / Fuji Five Lakes" },
              { "id": "bg-mt-fuji", "label": "富士山 / Mt. Fuji" },
              { "id": "bg-hakone-onsen", "label": "箱根 温泉街 / Hakone onsen town" },
              { "id": "bg-nikko-shrine", "label": "日光 東照宮 / Nikko Toshogu" },
              { "id": "bg-nara-park", "label": "奈良公園 / Nara Park" },
              { "id": "bg-okinawa-beach", "label": "沖縄の浜 / Okinawa Beach" },
              { "id": "bg-shirakawa-go", "label": "白川郷 合掌造り / Shirakawa-go" },
              { "id": "bg-tottori-dunes", "label": "鳥取砂丘 / Tottori Sand Dunes" },
              { "id": "bg-yakushima-forest", "label": "屋久島の森 / Yakushima Forest" },
              { "id": "bg-aso-caldera", "label": "阿蘇カルデラ / Aso Caldera" },
              { "id": "bg-kushiro-wetlands", "label": "釧路湿原 / Kushiro Wetlands" },
              { "id": "bg-izu-coast", "label": "伊豆 海岸 / Izu Coast" },
              { "id": "bg-amazon-rainforest", "label": "アマゾン熱帯雨林 / Amazon Rainforest" },
              { "id": "bg-uyuni-saltflats", "label": "ウユニ塩湖 / Uyuni Salt Flats" },
              { "id": "bg-atacama-desert", "label": "アタカマ砂漠 / Atacama Desert" },
              { "id": "bg-antarctica-ice", "label": "南極 氷原 / Antarctica Ice Field" },
              { "id": "bg-arctic-aurora", "label": "北極 オーロラ / Arctic Aurora" },
              { "id": "bg-grand-canyon-rim", "label": "グランドキャニオン 縁 / Grand Canyon Rim" },
              { "id": "bg-yosemite-valley", "label": "ヨセミテ渓谷 / Yosemite Valley" },
              { "id": "bg-yellowstone-geyser", "label": "イエローストーン 間欠泉 / Yellowstone Geyser" },
              { "id": "bg-zion-canyon", "label": "ザイオン渓谷 / Zion Canyon" },
              { "id": "bg-monument-valley", "label": "モニュメントバレー / Monument Valley" },
              { "id": "bg-horseshoe-bend", "label": "ホースシューベンド / Horseshoe Bend" },
              { "id": "bg-iceland-black-beach", "label": "アイスランド 黒砂海岸 / Iceland Black Beach" },
              { "id": "bg-gullfoss-falls", "label": "グトルフォス滝 / Gullfoss Falls" },
              { "id": "bg-blue-lagoon", "label": "ブルーラグーン / Blue Lagoon" },
              { "id": "bg-glacier-lake", "label": "氷河湖 / Glacier Lake" },
              { "id": "bg-fjord-cliffs", "label": "フィヨルド断崖 / Fjord Cliffs" },
              { "id": "bg-volcanic-crater", "label": "火山クレーター / Volcanic Crater" },
              { "id": "bg-geyser-field", "label": "間欠泉地帯 / Geyser Field" },
              { "id": "bg-lava-field", "label": "溶岩原 / Lava Field" },
              { "id": "bg-steppe-grassland", "label": "ステップ草原 / Steppe Grassland" },
              { "id": "bg-savanna-acacia", "label": "サバンナ アカシア / Savanna Acacia" },
              { "id": "bg-baobab-avenue", "label": "バオバブ並木 / Avenue of the Baobabs" },
              { "id": "bg-sunflower-field", "label": "ひまわり畑 / Sunflower Field" },
              { "id": "bg-lavender-field", "label": "ラベンダー畑 / Lavender Field" },
              { "id": "bg-cherry-blossom-avenue", "label": "桜並木 / Cherry Blossom Avenue" },
              { "id": "bg-maple-forest", "label": "紅葉の森 / Maple Forest" },
              { "id": "bg-bamboo-forest", "label": "竹林 / Bamboo Forest" },
              { "id": "bg-rice-terraces", "label": "棚田 / Rice Terraces" },
              { "id": "bg-tea-plantation", "label": "茶畑 / Tea Plantation" },
              { "id": "bg-coral-reef", "label": "珊瑚礁 / Coral Reef" },
              { "id": "bg-mangrove-swamp", "label": "マングローブ湿地 / Mangrove Swamp" },
              { "id": "bg-salt-flats", "label": "塩原 / Salt Flats" },
              { "id": "bg-black-sand-beach", "label": "黒砂のビーチ / Black Sand Beach" },
              { "id": "bg-white-sand-beach", "label": "白砂のビーチ / White Sand Beach" },
              { "id": "bg-coastal-cliffs", "label": "海岸の断崖 / Coastal Cliffs" },
              { "id": "bg-lighthouse-cliff", "label": "灯台の断崖 / Lighthouse Cliff" }
            ]
          }
        ]
      },
      {
        "name": "Buildings / 建物",
        "categories": [
          {
            "name": "Religious & Heritage / 宗教・遺産",
            "items": [
              { "id": "bg-kyoto-shrine", "label": "京都の神社 / Kyoto Shrine" },
              { "id": "bg-kamakura-buddha", "label": "鎌倉 大仏 / Kamakura Great Buddha" },
              { "id": "bg-istanbul-hagia", "label": "イスタンブール アヤソフィア / Istanbul Hagia Sophia" },
              { "id": "bg-abu-dhabi-mosque", "label": "アブダビ グランドモスク / Sheikh Zayed Grand Mosque" },
              { "id": "bg-rome-pantheon", "label": "ローマ パンテオン / Rome Pantheon" },
              { "id": "bg-florence-basilica", "label": "フィレンツェ 大聖堂 / Florence Basilica" },
              { "id": "bg-paris-notredame", "label": "パリ ノートルダム / Notre-Dame de Paris" },
              { "id": "bg-lhasa-potala", "label": "ラサ ポタラ宮 / Lhasa Potala Palace" },
              { "id": "bg-paro-dzong", "label": "パロ 宗 / Paro Dzong" },
              { "id": "bg-jerusalem-oldcity", "label": "エルサレム 旧市街 / Jerusalem Old City" },
              { "id": "bg-petra-treasury", "label": "ペトラ宝物殿 / Petra Treasury" }
            ]
          },
          {
            "name": "Modern & Towers / 近代・タワー",
            "items": [
              { "id": "bg-taipei-101", "label": "台北101 / Taipei 101" },
              { "id": "bg-kuala-lumpur-towers", "label": "クアラルンプール ツインタワー / Petronas Twin Towers" },
              { "id": "bg-dubai-burj-khalifa", "label": "ドバイ ブルジュハリファ / Burj Khalifa" },
              { "id": "bg-seoul-lotte-world", "label": "ソウル ロッテワールドタワー / Lotte World Tower" },
              { "id": "bg-shanghai-pudong", "label": "上海 浦東スカイライン / Shanghai Pudong skyline" },
              { "id": "bg-toronto-cn", "label": "トロント CNタワー / Toronto CN Tower" },
              { "id": "bg-sydney-tower", "label": "シドニータワー / Sydney Tower" },
              { "id": "bg-auckland-sky", "label": "オークランド スカイタワー / Auckland Sky Tower" },
              { "id": "bg-berlin-brandenburg", "label": "ベルリン ブランデンブルク門 / Brandenburg Gate" }
            ]
          },
          {
            "name": "Retail & Squares / 商店・広場",
            "items": [
              { "id": "bg-old-town-square", "label": "旧市街広場 / Old Town Square" },
              { "id": "bg-bazaar-market", "label": "バザール市場 / Bazaar Market" },
              { "id": "bg-dhaka-market", "label": "ダッカ 市場 / Dhaka Market" },
              { "id": "bg-medina-alley", "label": "メディナの路地 / Medina Alley" },
              { "id": "bg-ginza-street", "label": "銀座 通り / Tokyo Ginza street" },
              { "id": "bg-harajuku-omotesando", "label": "原宿 表参道 / Harajuku Omotesando" }
            ]
          }
        ]
      },
      {
        "name": "Sea & Water / 海・水辺",
        "categories": [
          {
            "name": "Coast & Beach / 海岸・砂浜",
            "items": [
              { "id": "bg-okinawa-beach", "label": "沖縄の浜 / Okinawa Beach" },
              { "id": "bg-rio-copacabana", "label": "リオ コパカバーナ / Rio Copacabana" },
              { "id": "bg-caribbean-beach", "label": "カリブ海 ビーチ / Caribbean Beach" },
              { "id": "bg-white-sand-beach", "label": "白砂のビーチ / White Sand Beach" },
              { "id": "bg-black-sand-beach", "label": "黒砂のビーチ / Black Sand Beach" },
              { "id": "bg-lighthouse-coast", "label": "灯台 海岸 / Lighthouse Coast" },
              { "id": "bg-harbor-piers", "label": "港の桟橋 / Harbor Piers" },
              { "id": "bg-bondi-beach", "label": "ボンダイビーチ / Bondi Beach" },
              { "id": "bg-santorini-cliff-coast", "label": "サントリーニ 断崖海岸 / Santorini cliff coast" }
            ]
          },
          {
            "name": "Lakes & Underwater / 湖・水中",
            "items": [
              { "id": "bg-fuji-five-lakes", "label": "富士五湖 / Fuji Five Lakes" },
              { "id": "bg-geneva-lake", "label": "レマン湖 / Lake Geneva" },
              { "id": "bg-glacier-lake", "label": "氷河湖 / Glacier Lake" },
              { "id": "bg-tidepools", "label": "潮だまり / Tide Pools" },
              { "id": "bg-kelp-forest", "label": "昆布の森 / Kelp Forest" },
              { "id": "bg-coral-reef", "label": "珊瑚礁 / Coral Reef" },
              { "id": "bg-halong-bay", "label": "ハロン湾 / Ha Long Bay" }
            ]
          }
        ]
      },
      {
        "name": "Special / 特殊（宇宙・異世界）",
        "items": [
          { "id": "bg-spaceport-runway", "label": "スペースポート滑走路 / Spaceport Runway" },
          { "id": "bg-moon-base", "label": "月面基地 / Moon Base" },
          { "id": "bg-mars-colony", "label": "火星コロニー / Mars Colony" }
        ]
      }
    ]
  }
];
  const data = { categories, presets: [] };
  if (typeof g.__registerBackgroundPart === 'function') {
    g.__registerBackgroundPart('background_part1', data);
  } else {
    g.__parts = g.__parts || {};
    g.__parts.background = g.__parts.background || {};
    g.__parts.background['background_part1'] = data;
  }
})(window);
