(function(){
  "use strict";

  // Preset Packs DB
  // UIロジックから分離された、純粋なプリセットデータ群です。
  // builder_ui.section.quality_preset.bundle.js (v1-v10) の内容を統合しています。

  if (!window.__PP_DB) window.__PP_DB = {};

  // 1. 基本パック（全ユーザーに表示されるデータ）
  const packs = {
  "🌆 シチュエーションパック (Situation Packs)": {
"🌆 シチュエーションパック｜🌺 自然・絶景 (Nature)": {
      "☀️ 青空・草原": [
        {"label": "風が抜ける青空の草原", "val": "(blue sky), (white clouds), (vast grassland), (wind), (open field), (bright daylight), (nature scene), (fresh atmosphere)"},
        {"label": "夏の陽射しが強い草原", "val": "(summer grassland), (strong sunlight), (blue sky), (green field), (heat haze), (open nature), (bright summer scene)"},
        {"label": "夕暮れに染まる草原", "val": "(sunset grassland), (golden hour), (orange sky), (windy field), (nature), (melancholic atmosphere), (open landscape)"},
        {"label": "花が混じる穏やかな草原", "val": "(flowering grassland), (gentle breeze), (blue sky), (soft sunlight), (peaceful nature), (beautiful scenery)"}
      ],
      "🌲 森・木漏れ日": [
        {"label": "木漏れ日が揺れる森", "val": "(forest), (sunbeams through trees), (leaf shadows), (greenery), (peaceful woodland), (soft natural light), (nature path)"},
        {"label": "朝霧の漂う森", "val": "(misty forest), (morning fog), (trees), (soft light), (quiet atmosphere), (nature), (mysterious woodland)"},
        {"label": "雨上がりのしっとりした森", "val": "(forest after rain), (wet leaves), (moss), (soft light), (humid air), (quiet nature scene)"},
        {"label": "深い静けさの森の小道", "val": "(forest path), (deep woods), (calm atmosphere), (tree shadows), (nature trail), (stillness)"}
      ],
      "🌊 海・ビーチ": [
        {"label": "陽光がまぶしい昼のビーチ", "val": "(sunny beach), (ocean), (white sand), (waves), (summer sunlight), (bright seaside), (vacation mood)"},
        {"label": "夕焼けに染まる海辺", "val": "(sunset beach), (orange sky), (ocean horizon), (waves), (golden light), (romantic seaside scene)"},
        {"label": "曇天の静かな海辺", "val": "(cloudy beach), (calm ocean), (gray sky), (quiet seaside), (melancholic atmosphere), (windy shore)"},
        {"label": "南国感のある明るいビーチ", "val": "(tropical beach), (palm trees), (turquoise ocean), (white sand), (bright sunlight), (summer paradise)"}
      ],
      "🌌 星空・夜空": [
        {"label": "星が降るような夜空", "val": "(starry sky), (milky way), (clear night), (countless stars), (beautiful night scenery), (quiet atmosphere)"},
        {"label": "流れ星が走る夜空", "val": "(night sky), (shooting star), (stars), (dark blue sky), (magical atmosphere), (beautiful scenery)"},
        {"label": "月明かりの静かな夜空", "val": "(moonlit night), (stars), (quiet night sky), (soft moonlight), (calm atmosphere), (beautiful scene)"},
        {"label": "夜風の強い高台の星空", "val": "(starry sky from hilltop), (windy night), (vast sky), (silhouette), (night atmosphere), (beautiful stars)"}
      ],
      "🌸 桜並木": [
        {"label": "花びらが舞う桜並木", "val": "(cherry blossom avenue), (falling petals), (spring), (pink flowers), (pathway), (beautiful scenery), (breeze)"},
        {"label": "春の光に包まれた桜道", "val": "(sakura path), (spring sunlight), (pink blossoms), (soft light), (peaceful atmosphere), (beautiful spring scene)"},
        {"label": "夕暮れに染まる桜並木", "val": "(sunset cherry blossoms), (orange light), (petals), (spring evening), (romantic atmosphere), (pathway)"},
        {"label": "雨上がりのしっとりした桜並木", "val": "(cherry blossoms after rain), (wet path), (pink petals), (soft cloudy light), (quiet spring atmosphere)"}
      ],
      "❄️ 雪景色": [
        {"label": "しんしんと雪が降る景色", "val": "(snowy landscape), (snowfall), (winter), (white ground), (quiet atmosphere), (cold air), (beautiful winter scene)"},
        {"label": "晴れた朝の雪景色", "val": "(snowy morning), (clear winter sky), (sunlight on snow), (fresh snow), (cold brightness), (winter nature)"},
        {"label": "夕暮れの青い雪景色", "val": "(winter dusk), (snow-covered field), (blue evening light), (cold atmosphere), (quiet snow scene)"},
        {"label": "吹雪前の緊張感ある雪原", "val": "(snowfield), (approaching blizzard), (gray winter sky), (strong wind), (harsh cold), (dramatic winter atmosphere)"}
      ]
    },
    
    "📍 スポット・お店 (Spots)": {
      "🎤 アイドルステージ": [
        {"label": "開演直前のアイドルステージ", "val": "(idol stage before performance), (empty spotlight), (concert venue), (stage lights), (microphone stand), (anticipation), (showtime atmosphere)", "links": ["シネマティック"]},
        {"label": "歓声に包まれるライブステージ", "val": "(idol live stage), (cheering crowd), (stage lights), (sparkles), (performance energy), (cinematic glow)", "links": ["シネマティック"]},
        {"label": "リハーサル中のステージ", "val": "(idol stage rehearsal), (practice lighting), (empty seats), (microphone), (backstage mood), (performance preparation)"},
        {"label": "終演後の静かなステージ", "val": "(empty idol stage), (after concert), (dim stage lights), (quiet venue), (lingering glow), (post-show atmosphere)"}
      ],
      "☕ おしゃれカフェ": [
        {"label": "朝の静かなカフェ", "val": "(morning café), (soft sunlight), (window seat), (coffee), (calm atmosphere), (cozy interior), (quiet scene)"},
        {"label": "窓際で過ごす午後のカフェ", "val": "(afternoon café), (window seat), (soft daylight), (dessert plate), (cozy modern café), (relaxed atmosphere)"},
        {"label": "雨の日のしっとりしたカフェ", "val": "(rainy day café), (window raindrops), (warm indoor light), (coffee cup), (quiet mood), (cozy atmosphere)"},
        {"label": "閉店前の落ち着いたカフェ", "val": "(late evening café), (dim warm lighting), (few customers), (quiet interior), (closing time mood), (calm atmosphere)"}
      ],
      "🍸 バー・パブ": [
        {"label": "開店直後の静かなバー", "val": "(bar counter), (freshly opened bar), (bottles on shelves), (dim lighting), (quiet atmosphere), (adult mood)"},
        {"label": "ネオンに染まる夜のバー", "val": "(night bar), (neon reflections), (cocktail glass), (dim lighting), (cinematic bar vibes), (adult atmosphere)", "links": ["シネマティック"]},
        {"label": "客で賑わうパブ", "val": "(busy pub), (warm lights), (crowded bar), (laughter), (glasses), (lively atmosphere)"},
        {"label": "深夜の静かなカウンターバー", "val": "(late night bar), (quiet counter), (single cocktail), (low light), (deep shadows), (solitary atmosphere)"}
      ],
      "🏪 コンビニ": [
        {"label": "深夜のコンビニ", "val": "(convenience store at night), (bright fluorescent light), (quiet store), (snack shelves), (late night atmosphere), (modern japan)"},
        {"label": "雨上がりのコンビニ前", "val": "(convenience store entrance), (after rain), (wet pavement), (neon reflections), (night street), (urban atmosphere)"},
        {"label": "明るい昼のコンビニ", "val": "(daytime convenience store), (bright interior), (shelves of snacks), (casual daily life), (clean modern store)"},
        {"label": "誰もいない静かなコンビニ通路", "val": "(empty convenience store aisle), (fluorescent light), (quiet atmosphere), (late night), (shelves), (stillness)"}
      ],
      "📚 図書館": [
        {"label": "静寂に包まれた図書館", "val": "(library), (bookshelves), (quiet atmosphere), (silence), (reading desks), (soft light)"},
        {"label": "夕方の図書館", "val": "(library at dusk), (warm sunset light), (bookshelves), (quiet reading space), (calm atmosphere)"},
        {"label": "窓際読書の図書館", "val": "(library window seat), (sunlight through window), (open book), (dust particles), (peaceful reading atmosphere)"},
        {"label": "書架の間に立つ図書館", "val": "(library stacks), (tall bookshelves), (narrow aisle), (quiet atmosphere), (academic mood)"}
      ],
      "🏥 病院・病室": [
        {"label": "昼の静かな病室", "val": "(hospital room), (daylight through window), (white bed), (medical equipment), (clean atmosphere), (quiet scene)"},
        {"label": "夜の病室", "val": "(hospital room at night), (dim medical light), (white curtain), (quiet atmosphere), (solitary mood)"},
        {"label": "診察前の白い診察室", "val": "(medical examination room), (sterile white interior), (medical tools), (clean atmosphere), (clinical mood)"},
        {"label": "廊下まで静まり返った病院", "val": "(hospital corridor), (quiet atmosphere), (sterile light), (empty hall), (clean floor), (stillness)"}
      ],
      "💕 デートスポット": [
        {"label": "夜景の見えるデートスポット", "val": "(romantic night view), (city lights), (beautiful scenery), (date atmosphere), (special evening mood)"},
        {"label": "夕暮れの待ち合わせスポット", "val": "(meeting spot at sunset), (soft evening light), (romantic anticipation), (urban date mood)"},
        {"label": "イルミネーションに包まれるデートスポット", "val": "(illumination date spot), (glowing lights), (romantic atmosphere), (sparkles), (night date scene)"},
        {"label": "静かな水辺のデートスポット", "val": "(riverside date spot), (night lights reflected on water), (quiet romantic atmosphere), (gentle breeze), (beautiful scenery)"}
      ]
    },
    "🏫 学園・青春 (School)": {
      "🏫 教室・授業風景": [
        {"label": "昼の光が差す教室", "val": "(classroom), (school desks), (blackboard), (sunlight through window), (afternoon), (school life), (chalk dust), (bright classroom)"},
        {"label": "夕暮れに染まる放課後の教室", "val": "(classroom), (sunset), (orange sky), (long shadows), (after school), (empty classroom), (nostalgic), (quiet atmosphere)"},
        {"label": "授業直前のざわめく教室", "val": "(classroom before class), (school desks), (students chatting), (morning light), (school atmosphere), (lively classroom)"},
        {"label": "小テスト前の緊張感ある教室", "val": "(classroom), (test papers), (quiet tension), (school desks), (serious atmosphere), (exam before start), (academic mood)"}
      ],
      "🪟 廊下・階段・校内": [
        {"label": "昼休みの明るい廊下", "val": "(school hallway), (daylight), (classroom doors), (clean floor), (lunch break), (school atmosphere), (bright corridor)"},
        {"label": "夕方の静かな廊下", "val": "(school hallway at dusk), (sunset light), (empty corridor), (quiet atmosphere), (after school), (nostalgic mood)"},
        {"label": "踊り場に光が差す階段", "val": "(school staircase), (sunlight through window), (landing), (quiet school interior), (calm atmosphere), (daily school scene)"},
        {"label": "昇降口の朝", "val": "(school entrance), (shoe lockers), (morning light), (arrival at school), (fresh school morning), (daily life)"}
      ],
      "🌤 屋上・校舎上": [
        {"label": "青空の下の学校屋上", "val": "(school rooftop), (fence), (blue sky), (clouds), (windy), (city view in distance), (lunch time), (freedom)"},
        {"label": "放課後の風が吹く屋上", "val": "(school rooftop at dusk), (after school), (orange sky), (wind blowing), (fence), (nostalgic atmosphere), (quiet rooftop)"},
        {"label": "昼休みに賑わう屋上", "val": "(school rooftop), (lunchtime), (bright sky), (casual school atmosphere), (open air), (youthful energy)"},
        {"label": "雨上がりの静かな屋上", "val": "(school rooftop after rain), (wet floor), (cloudy sky opening), (fence), (cool breeze), (quiet reflective mood)"}
      ],
      "🏀 体育館・運動場": [
        {"label": "昼の体育館", "val": "(school gymnasium), (basketball court), (varnished wood floor), (indoor sports), (volleyball net), (high ceiling), (daytime)"},
        {"label": "部活中の活気ある体育館", "val": "(school gymnasium), (club activity), (echoing voices), (sports atmosphere), (active movement), (after school), (energetic scene)"},
        {"label": "朝練前の静かなグラウンド", "val": "(school मैदान), (school athletic field), (early morning), (track lines), (cool air), (quiet before practice), (sports field)"},
        {"label": "夕焼けの校庭", "val": "(schoolyard at sunset), (sports field), (orange sky), (empty ground), (after club activities), (nostalgic atmosphere)"}
      ],
      "📚 図書室・部室": [
        {"label": "静かな学校図書室", "val": "(school library), (bookshelves), (quiet atmosphere), (reading desks), (soft daylight), (academic mood), (calm school interior)"},
        {"label": "夕方の誰もいない図書室", "val": "(school library at dusk), (warm sunset light), (empty reading room), (bookshelves), (quiet atmosphere), (after school)"},
        {"label": "活動準備中の部室", "val": "(club room), (school club activity), (equipment on shelves), (after school), (lived-in atmosphere), (preparation scene)"},
        {"label": "放課後の文化部室", "val": "(school club room), (after school), (posters on wall), (desks and chairs), (quiet youth atmosphere), (creative school scene)"}
      ]
    },
    "🏠 家・日常 (Home)": {
      "🛋 リビング": [
        {"label": "朝日が差す静かなリビング", "val": "(morning living room), (soft sunlight through window), (quiet home atmosphere), (sofa), (coffee table), (warm indoor light), (calm mood), (peaceful daily life)"},
        {"label": "くつろぎの午後リビング", "val": "(afternoon living room), (cozy sofa), (soft daylight), (relaxed home atmosphere), (coffee table), (calm daily life), (comfortable interior), (gentle sunlight)"},
        {"label": "テレビの光に照らされる夜のリビング", "val": "(night living room), (tv glow), (dim indoor lighting), (sofa), (quiet evening), (cozy atmosphere), (relaxed home scene), (darkened room)"},
        {"label": "来客前の整ったリビング", "val": "(tidy living room), (organized sofa area), (clean coffee table), (welcoming atmosphere), (bright interior), (prepared for guests), (neat home scene)"},
        {"label": "散らかった休日のリビング", "val": "(casual living room), (lazy holiday atmosphere), (messy sofa), (blanket), (snacks on table), (relaxed daily life), (natural indoor clutter)"},
        {"label": "読書に沈む静かなリビング", "val": "(quiet living room), (reading atmosphere), (soft indoor light), (books on table), (calm sofa corner), (peaceful home scene), (relaxing silence)"}
      ],
      "🍳 キッチン": [
        {"label": "朝食準備中のキッチン", "val": "(morning kitchen), (breakfast preparation), (soft daylight), (cooking utensils), (fresh ingredients), (homey atmosphere), (busy but warm)"},
        {"label": "深夜の静かなキッチン", "val": "(late night kitchen), (dim light), (quiet indoor atmosphere), (small lamp light), (silent home scene), (midnight stillness)"},
        {"label": "調理中の活気あるキッチン", "val": "(active kitchen), (cooking in progress), (steam), (cutting board), (ingredients on counter), (lively home cooking scene), (busy hands atmosphere)"},
        {"label": "後片付け後の静かなキッチン", "val": "(clean kitchen), (after cooking), (washed dishes), (neat counter), (quiet atmosphere), (orderly home interior), (settled silence)"},
        {"label": "焼き菓子の香るキッチン", "val": "(baking kitchen), (sweet pastry aroma), (warm oven light), (cozy home baking), (soft indoor warmth), (freshly baked treats)"},
        {"label": "ひとり夜食を作るキッチン", "val": "(midnight kitchen), (making late night snack), (quiet solitude), (soft fridge light), (casual home scene), (gentle tired atmosphere)"}
      ],
      "🛏 ベッドルーム": [
        {"label": "朝の寝起きのベッドルーム", "val": "(morning bedroom), (bed), (soft sunlight), (sleepy atmosphere), (rumpled sheets), (quiet waking up), (private room)"},
        {"label": "夜更けの静かなベッドルーム", "val": "(late night bedroom), (dim bedside light), (quiet room), (deep night atmosphere), (calm private space), (soft shadows)"},
        {"label": "読書中のベッドルーム", "val": "(bedroom reading scene), (book in hand), (soft lamp light), (calm private room), (peaceful night), (cozy bed atmosphere)"},
        {"label": "雨の日の薄暗いベッドルーム", "val": "(rainy day bedroom), (dim natural light), (cloudy window), (quiet moody room), (soft shadows), (calm indoor gloom)"},
        {"label": "眠る前の柔らかなベッドルーム", "val": "(bedroom before sleep), (warm bedside light), (soft blankets), (quiet night), (gentle private atmosphere), (calm resting mood)"},
        {"label": "休日にだらけるベッドルーム", "val": "(lazy bedroom), (holiday mood), (messy sheets), (relaxed private space), (slow morning), (casual indoor comfort)"}
      ],
      "🍵 和室": [
        {"label": "朝の光が差す静かな和室", "val": "(morning japanese room), (tatami mats), (shoji sunlight), (quiet traditional atmosphere), (soft natural light), (peaceful washitsu)"},
        {"label": "障子越しに光がにじむ和室", "val": "(washitsu), (shoji-filtered light), (tatami mats), (soft light), (peaceful traditional room)"},
        {"label": "茶器のある落ち着いた和室", "val": "(traditional japanese room), (tea set), (tatami), (calm atmosphere), (quiet elegant interior)"},
        {"label": "雨音を聞くしっとりした和室", "val": "(rainy japanese room), (shoji screen), (tatami), (quiet rain atmosphere), (traditional calm)"}
      ],
      "🛁 バスルーム": [
        {"label": "朝の明るいバスルーム", "val": "(bright bathroom), (morning light), (clean tiles), (fresh atmosphere), (bathroom interior)"},
        {"label": "湯気の満ちる夜のバスルーム", "val": "(bathroom at night), (steam-filled room), (warm light), (quiet atmosphere), (relaxing bath scene)"},
        {"label": "入浴後の静かなバスルーム", "val": "(bathroom after bath), (humid air), (quiet room), (warm atmosphere), (clean interior)"},
        {"label": "白い光の清潔なバスルーム", "val": "(clean bathroom), (white light), (tiles), (fresh atmosphere), (minimal interior)"}
      ]
    },
    
    "🌆 シチュエーションパック｜🏙 都会・ストリート (City)": [
      {
        "label": "🏙 都市中心・高層街区",
        "items": [
          {
            "label": "高層ビルに囲まれた都市中心部",
            "val": "(city center), (skyscrapers), (glass buildings), (wide avenue), (modern urban atmosphere), (daytime), (clean cityscape)",
            "links": ["都会"]
          },
          {
            "label": "ガラス街に朝日が差すビジネス街",
            "val": "(business district), (morning sunlight), (glass towers), (office street), (fresh urban air), (commuter mood), (modern architecture)",
            "links": ["朝", "都会"]
          },
          {
            "label": "夕暮れの高架と都市スカイライン",
            "val": "(city skyline), (elevated road), (sunset glow), (urban silhouette), (warm dusk light), (modern metropolis), (beautiful evening city)",
            "links": ["夕方", "都会"]
          }
        ]
      },
      {
        "label": "🚦 路地裏・雑踏・交差点",
        "items": [
          {
            "label": "人波が流れるスクランブル交差点",
            "val": "(scramble crossing), (crowd), (busy intersection), (billboards), (urban rush), (modern city), (street energy)",
            "links": ["都会"]
          },
          {
            "label": "雨に濡れたネオン街の裏路地",
            "val": "(rainy alley), (neon reflections), (wet pavement), (backstreet), (vending machine), (urban night), (moody atmosphere)",
            "links": ["夜", "雨", "都会"]
          },
          {
            "label": "雑踏に飲まれる繁華街の通り",
            "val": "(downtown street), (crowded city), (shop signs), (pedestrians), (busy urban atmosphere), (commercial district), (street noise)",
            "links": ["都会"]
          }
        ]
      },
      {
        "label": "🛍 商業エリア・交通スポット",
        "items": [
          {
            "label": "ショーウィンドウが並ぶ都会の買い物通り",
            "val": "(shopping street), (show windows), (fashion district), (stylish storefronts), (urban commercial area), (daytime), (city atmosphere)",
            "links": ["都会"]
          },
          {
            "label": "駅前ロータリーで待ち合わせる都会の時間",
            "val": "(station plaza), (roundabout), (meeting spot), (urban station front), (pedestrians), (city lifestyle), (public transport hub)",
            "links": ["都会"]
          },
          {
            "label": "揺れるつり革と窓景色の通勤電車内",
            "val": "(inside train), (hanging straps), (window reflection), (commuting), (urban transit), (passing city scenery), (public transportation)",
            "links": ["都会"]
          }
        ]
      },
      {
        "label": "🌃 夜景・ネオン・アンダーグラウンド",
        "items": [
          {
            "label": "街の灯りが広がる高層ビル街の夜景",
            "val": "(night city view), (skyscrapers), (office lights), (highway lights), (urban bokeh), (beautiful city night), (metropolitan atmosphere)",
            "links": ["夜", "都会"]
          },
          {
            "label": "ネオンに染まる深夜の繁華街",
            "val": "(neon downtown), (midnight city), (bright signs), (nightlife district), (glowing streets), (urban night atmosphere), (vivid neon)",
            "links": ["夜", "都会"]
          },
          {
            "label": "サイバーパンク調の裏通りナイトシーン",
            "val": "(cyberpunk backstreet), (holograms), (rain), (wet street), (futuristic neon), (dark urban alley), (night scene)",
            "links": ["夜", "SF", "都会"]
          }
        ]
      }
    ],
    "🌆 シチュエーションパック｜🎉 イベント・行事 (Event)": {
      "🎄 季節イベント": [
        {"label": "イルミネーションに包まれるクリスマスの夜", "val": "(christmas night), (illuminations), (christmas tree), (gift box), (winter holiday), (sparkling lights), (festive atmosphere), (happy smile)"},
        {"label": "雪の中で迎える聖夜のクリスマス", "val": "(snowy christmas), (falling snow), (christmas decorations), (soft winter light), (holy night mood), (cozy holiday atmosphere)"},
        {"label": "賑やかな仮装ハロウィンパーティー", "val": "(halloween party), (witch costume), (jack-o'-lantern), (purple and orange decorations), (spooky cute atmosphere), (party mood)"},
        {"label": "怪しげな夜のハロウィン街歩き", "val": "(halloween night street), (pumpkin lanterns), (dark town), (bats), (misty atmosphere), (mysterious seasonal event)"}
      ],
      "💍 儀式・祝祭": [
        {"label": "光に満ちたチャペルウェディング", "val": "(wedding ceremony), (church interior), (white veil), (holding bouquet), (stained glass), (pure white), (solemn happy atmosphere)"},
        {"label": "祝福に包まれる披露宴の瞬間", "val": "(wedding reception), (flower decorations), (elegant hall), (celebration), (joyful smiles), (formal festive atmosphere)"},
        {"label": "神前式の厳かな婚礼", "val": "(traditional wedding ceremony), (formal kimono), (sacred atmosphere), (ceremonial hall), (quiet solemnity), (ritual celebration)", "links": ["和風"]},
        {"label": "記念日の華やかなセレモニー", "val": "(anniversary celebration), (decorated venue), (commemorative atmosphere), (flowers), (special event mood), (festive elegance)"}
      ],
      "♨ 旅行・行楽": [
        {"label": "浴衣で歩く温泉街の夕暮れ", "val": "(onsen town at dusk), (wearing yukata), (lantern lights), (traditional street), (travel atmosphere), (warm evening mood)", "links": ["和風"]},
        {"label": "湯気に包まれる露天風呂の夜", "val": "(open air bath), (onsen), (steam), (night scenery), (relaxing), (quiet travel mood), (wooden bucket)", "links": ["和風"]},
        {"label": "旅館で迎える静かな朝", "val": "(traditional inn morning), (soft daylight), (tatami room), (travel stay), (peaceful atmosphere), (calm vacation scene)", "links": ["和風"]},
        {"label": "祭り帰りの余韻が残る夜道", "val": "(festival night aftermath), (lantern glow), (quiet road), (lingering excitement), (summer event mood), (gentle night air)"}
      ]
    },
    "🌆 シチュエーションパック｜💕 デート・恋愛 (Date)": [
      {
        "label": "🐟 水辺・館内デート",
        "items": [
          {
            "label": "青い光に包まれる水族館デート",
            "val": "(aquarium date), (looking at fish), (blue ambient light), (reflection on glass), (romantic atmosphere), (walking together), (happy expression)",
            "links": [
              "デートスポット"
            ]
          },
          {
            "label": "静かな展示前で見つめ合う水族館の夜",
            "val": "(aquarium interior), (quiet exhibit hall), (soft blue glow), (couple standing close), (gentle eye contact), (romantic silence), (date atmosphere)",
            "links": [
              "デートスポット",
              "夜"
            ]
          }
        ]
      },
      {
        "label": "🎬 屋内エンタメデート",
        "items": [
          {
            "label": "映画館で肩が触れるデートの時間",
            "val": "(movie theater), (sitting next to each other), (eating popcorn), (dim lighting), (screen light reflecting on face), (intimate moment), (date night)",
            "links": [
              "デートスポット"
            ]
          },
          {
            "label": "上映後に余韻を抱えたロビーで語り合う",
            "val": "(cinema lobby), (after movie), (soft poster lights), (talking quietly), (lingering emotions), (romantic atmosphere), (close distance)",
            "links": [
              "デートスポット"
            ]
          }
        ]
      },
      {
        "label": "🎡 遊園地・おでかけデート",
        "items": [
          {
            "label": "観覧車を背に笑い合う遊園地デート",
            "val": "(amusement park date), (ferris wheel in background), (holding crepe), (colorful lights), (happy smile), (vibrant atmosphere), (casual clothes)",
            "links": [
              "デートスポット"
            ]
          },
          {
            "label": "夕暮れの遊園地で手を引く帰り道",
            "val": "(amusement park at dusk), (walking together), (holding hands), (warm sunset light), (afterglow sky), (romantic date), (gentle smiles)",
            "links": [
              "夕方",
              "デートスポット"
            ]
          }
        ]
      },
      {
        "label": "🌃 夜景・ムードデート",
        "items": [
          {
            "label": "街の灯りを見下ろす展望台デート",
            "val": "(observation deck), (night city view), (sparkling city lights), (leaning on railing), (romantic mood), (couple atmosphere), (elegant)",
            "links": [
              "夜"
            ]
          },
          {
            "label": "夜風の中で距離が縮まる展望台の時間",
            "val": "(night breeze), (observation deck date), (city lights below), (close distance), (soft hair movement), (romantic tension), (quiet confession mood)",
            "links": [
              "夜",
              "デートスポット"
            ]
          }
        ]
      }
    ],
    "🌆 シチュエーションパック｜😇 天界の舞台・状況 (Celestial Scenes)": {
      "☁ 神殿・聖域": [
        { "label": "🟨 ✦G 神託が降りる白亜の聖堂", "val": "gabriel motif, oracle messenger atmosphere, white marble sanctuary, sacred scrolls, radiant altar, heavenly proclamation, soft golden halo light, solemn divine silence", "desc": "✦G / ガブリエル系の神託聖堂 / 関連: 神託の伝令・大天使級" },
        { "label": "🟩 ✦R 癒やしの光が満ちる聖域", "val": "raphael motif, guardian of the sanctuary, healing light, sacred barrier, white sanctuary, blessing aura, restorative glow, merciful divine atmosphere", "desc": "✦R / ラファエル系の治癒聖域 / 関連: 聖域の守護者・智天級" },
        { "label": "🟨 ✦G 雲上神域の静かな祈りの間", "val": "gabriel motif, cloud sanctuary, quiet prayer hall, luminous feathers, celestial mist, revelation hush, sacred serenity, white-gold heaven architecture", "desc": "✦G / 雲上神域の静謐空間 / 関連: ガブリエル・神託の伝令" }
      ],
      "✨ 玉座・啓示": [
        { "label": "🟨 ✦G 啓示が満ちる光の玉座間", "val": "gabriel motif, celestial throne room, revelation light, sacred decree, halo rings, holy banners, divine radiance, luminous throne atmosphere", "desc": "✦G / 神意が満ちる玉座の間 / 関連: ガブリエル・大天使級" },
        { "label": "🟠 ✦U 知恵の炎が灯る啓示の塔", "val": "uriel motif, tower of revelation, divine flame, sacred wisdom, burning scripture, radiant severity, heavenly windows, golden fire of insight", "desc": "✦U / ウリエル系の啓示塔 / 関連: 審判の執行者・座天級" },
        { "label": "🟠 ✦U 審理の火が揺らぐ裁きの法廷", "val": "uriel motif, celestial tribunal, judgment fire, throne halo ring, sacred sentence, blazing holy light, solemn law of heaven, radiant authority", "desc": "✦U / 裁きの権威が満ちる法廷 / 関連: ウリエル・審判の執行者" }
      ],
      "⚔ 審判・軍勢": [
        { "label": "🟧 ✦M 天軍出陣を告げる戦神殿", "val": "michael motif, heavenly army departure, celestial armor, sacred execution blade, holy war standard, triumphant authority, radiant command, war temple of heaven", "desc": "✦M / ミカエル系の出陣神殿 / 関連: 天界の使徒長・熾天級" },
        { "label": "🟧 ✦M 勝利の旗が揺れる軍議の回廊", "val": "michael motif, war council hall, victory banners, celestial command corridor, armored angels, radiant authority, disciplined formation, divine battle preparation", "desc": "✦M / 軍勢統率の回廊 / 関連: ミカエル・天界の使徒長" },
        { "label": "🟠 ✦U 審判を見下ろす天の高座", "val": "uriel motif, overlooking judgment, high celestial seat, blazing halo, divine law, stern heavenly gaze, tribunal atmosphere, sacred authority", "desc": "✦U / 審判を見下ろす高位座 / 関連: ウリエル・座天級" }
      ],
      "🕊 降臨・祝福": [
        { "label": "🟨 ✦G 静かな神託降臨", "val": "gabriel motif, serene descent, heavenly messenger, radiant light shaft, sacred scroll, falling feathers, holy revelation aura, tranquil annunciation", "desc": "✦G / 神託と降臨の象徴場面 / 関連: ガブリエル・神託の伝令" },
        { "label": "🟩 ✦R 加護を授ける慈光の場", "val": "raphael motif, granting blessing, healing light, miracle atmosphere, gentle aura, hands extended, sacred restoration, merciful divinity", "desc": "✦R / 加護と癒やしの祝福空間 / 関連: ラファエル・聖域の守護者" },
        { "label": "🟧 ✦M 勝利祝福に包まれる凱旋の間", "val": "michael motif, celestial triumph hall, victory blessing, radiant banners, heavenly army return, sacred celebration, divine authority, triumphant holy glow", "desc": "✦M / 戦勝と祝福の凱旋空間 / 関連: ミカエル・熾天級" }
      ]
    },
    "🌆 シチュエーションパック｜😈 深淵の舞台・状況 (Infernal Scenes)": {
      "🕳 奈落・冥府": [
        { "label": "🟥 ✦S 奈落を見下ろす黒き玉座", "val": "satan motif, abyssal throne, infernal palace, black flames, underworld dominion, sovereign menace, cursed banners, oppressive abyss atmosphere", "desc": "✦S / サタン系の奈落玉座 / 関連: 冥府の支配者・魔王級" },
        { "label": "🟪 ✦L 光が砕け落ちた奈落の裂け目", "val": "lucifer motif, abyssal chasm, broken halo fragments, fallen morning star, tragic radiance, ruined divinity, black wings, fallen sanctity", "desc": "✦L / ルシフェル系の堕光奈落 / 関連: 堕天の王・堕天使上位種" },
        { "label": "🟫 ✦B 退廃の香りが漂う冥府宮殿", "val": "beelzebub motif, underworld palace, decadent infernal nobility, abyssal court, dark aristocratic aura, banquet of ruin motif, crimson gloom, infernal prestige", "desc": "✦B / ベルゼブブ系の冥府宮殿 / 関連: 深淵の統治者・大悪魔級" }
      ],
      "🔥 祭壇・契約": [
        { "label": "🟥 ✦S 黒炎が燃え盛る破滅の祭壇", "val": "satan motif, black flame altar, infernal sigils, cursed fire, apocalyptic pressure, demonic court aura, world-ending menace, infernal ritual", "desc": "✦S / サタン系の黒炎祭壇 / 関連: サタン・魔王級" },
        { "label": "🟪 ✦L 禁断の契約を迫る深淵の間", "val": "lucifer motif, forbidden contract, infernal whisper, seductive menace, curse sigils, looming darkness, fallen beauty, abyssal temptation", "desc": "✦L / ルシフェル系の契約空間 / 関連: ルシフェル・堕天の王" },
        { "label": "🟫 ✦B 供儀の香が満ちる腐宴祭壇", "val": "beelzebub motif, decadent altar, infernal banquet, corruption aura, sacrificial luxury, abyssal decadence, dark feast atmosphere, lord of corruption", "desc": "✦B / ベルゼブブ系の退廃祭壇 / 関連: ベルゼブブ・大悪魔級" }
      ],
      "⛓ 支配・軍勢": [
        { "label": "🟥 ✦S 深淵軍勢を従える謁見室", "val": "satan motif, commanding infernal legion, abyssal authority, dark banners, throne dominion, overwhelming dominance, infernal court, sovereign darkness", "desc": "✦S / 軍勢支配の謁見室 / 関連: 冥府の支配者・サタン" },
        { "label": "🟫 ✦B 奈落貴族が集う深淵回廊", "val": "beelzebub motif, abyssal court corridor, infernal nobility, aristocratic darkness, decadent procession, abyss heraldry, oppressive luxury, dark prestige", "desc": "✦B / 深淵貴族の回廊 / 関連: 奈落の大公・ベルゼブブ" },
        { "label": "🟪 ✦L 反逆の威光が満ちる堕天の玉座間", "val": "lucifer motif, throne of ruin, broken halo, black feathered wings, fallen majesty, corrupted radiance, abyssal crown, tragic sovereign aura", "desc": "✦L / 反逆と威光の玉座間 / 関連: ルシフェル・深淵君主級" }
      ],
      "🌑 堕天・終焉": [
        { "label": "🟪 ✦L 堕天の降臨が刻まれる崩壊神殿", "val": "lucifer motif, fallen angel descent, ruined holy temple, broken pillars, ash, tragic radiance, fallen star symbolism, ruined holiness", "desc": "✦L / 堕天降臨の象徴空間 / 関連: ルシフェル・堕天使上位種" },
        { "label": "🟥 ✦S 破滅の宣告が響く終焉空間", "val": "satan motif, proclaiming ruin, black fire, world-ending menace, infernal throne authority, apocalyptic presence, sovereign darkness, hellbound decree", "desc": "✦S / サタン系の終焉宣告空間 / 関連: サタン・魔王級" },
        { "label": "🟫 ✦B 虚無と腐蝕が漂う深淵の最奥", "val": "beelzebub motif, abyssal void, corruption fog, endless darkness, infernal decadence, lord of corruption aura, surreal emptiness, deepest abyss", "desc": "✦B / ベルゼブブ系の最奥深淵 / 関連: ベルゼブブ・深淵の統治者" }
      ]
    },
    "🕰️ 時代・年代 (Eras)": {
      "𓂀 古代エジプト": [
        {"label": "砂と神殿の古代エジプト", "val": "(ancient egypt), (desert), (stone temple), (golden sunlight), (sand), (monumental atmosphere)"},
        {"label": "王墓の気配が漂う古代エジプト", "val": "(ancient egypt tomb atmosphere), (stone walls), (hieroglyphs), (golden ornaments), (solemn air)"},
        {"label": "ナイルの陽光に包まれた古代エジプト", "val": "(ancient egypt by the nile), (sunlight), (river), (warm wind), (historic scenery)"},
        {"label": "黄金装飾の儀式空間", "val": "(ancient egypt ritual hall), (golden ornaments), (pillars), (sacred atmosphere), (ceremonial scene)"}
      ],
      "🏛 古代ギリシャ": [
        {"label": "白亜の神殿が立つ古代ギリシャ", "val": "(ancient greece), (marble temple), (white columns), (clear sky), (classical atmosphere)"},
        {"label": "神話彫像に囲まれた古代ギリシャ", "val": "(ancient greek plaza), (statues), (marble), (mythic atmosphere), (open classical space)"},
        {"label": "青空と列柱の古代ギリシャ", "val": "(ancient greece), (blue sky), (stone columns), (sunlight), (classical architecture)"},
        {"label": "大理石広場の古代都市", "val": "(ancient greek city square), (marble floor), (columns), (classical urban scenery)"}
      ],
      "⚔ 中世ヨーロッパ": [
        {"label": "石畳と城壁の中世ヨーロッパ", "val": "(medieval europe), (stone street), (castle walls), (old town), (historic atmosphere)"},
        {"label": "蝋燭と木造家具の中世室内", "val": "(medieval interior), (candlelight), (wooden furniture), (warm shadows), (historic room)"},
        {"label": "城下町の賑わう中世ヨーロッパ", "val": "(medieval town), (market street), (stone buildings), (lively historic atmosphere)"},
        {"label": "重厚な礼拝堂の中世空間", "val": "(medieval chapel), (candlelight), (stone walls), (solemn atmosphere), (gothic mood)"}
      ],
      "📚 大正ロマン": [
        {"label": "ステンドグラスと洋館の大正ロマン", "val": "(taisho roman), (stained glass), (western-style mansion), (retro elegance), (soft light)"},
        {"label": "書斎と和洋折衷の大正ロマン", "val": "(taisho study), (japanese-western interior), (books), (retro atmosphere), (warm light)"},
        {"label": "夕暮れの袴姿が映える大正ロマン", "val": "(taisho roman at dusk), (retro street), (warm sunset light), (nostalgic elegance)"},
        {"label": "文学と喫茶の香る大正空間", "val": "(taisho café), (books), (retro interior), (soft light), (literary atmosphere)"}
      ],
      "📺 昭和レトロ": [
        {"label": "ちゃぶ台のある昭和の居間", "val": "(showa retro living room), (low table), (old television), (warm nostalgic light), (retro home)"},
        {"label": "夕焼けが差す昭和の街角", "val": "(showa retro street), (sunset), (old town), (nostalgic atmosphere), (retro japan)"},
        {"label": "古びた学校と夕暮れの昭和", "val": "(showa school at dusk), (old classroom), (warm evening light), (nostalgic atmosphere)"},
        {"label": "商店街の灯りが残る昭和レトロ", "val": "(showa shopping street), (retro signs), (warm night lights), (nostalgic urban scene)"}
      ],
      "💎 バブル時代 (80s)": [
        {"label": "ネオンと高級感のバブル時代", "val": "(bubble era), (neon lights), (luxury atmosphere), (80s japan), (glamorous urban night)"},
        {"label": "豪華ホテルラウンジのバブル空間", "val": "(luxury hotel lounge), (bubble era style), (gold accents), (rich atmosphere), (80s glamour)"},
        {"label": "華やかな夜景とバブル都市", "val": "(80s city night view), (glittering skyline), (bubble era atmosphere), (urban luxury)"},
        {"label": "派手な照明の大人の夜空間", "val": "(80s nightlife), (flashy lights), (adult atmosphere), (retro luxury), (bubble era mood)"}
      ],
      "🌐 サイバーパンク未来": [
        {"label": "雨とネオンのサイバーパンク未来", "val": "(cyberpunk future), (rain), (neon lights), (wet street), (dark city), (futuristic atmosphere)"},
        {"label": "高層広告に囲まれた未来都市", "val": "(futuristic megacity), (holographic ads), (skyscrapers), (cyberpunk atmosphere), (urban density)"},
        {"label": "路地裏のサイバー夜景", "val": "(cyberpunk alley), (neon reflections), (night), (futuristic slum), (wet pavement)"},
        {"label": "ホログラムが漂う未来空間", "val": "(cyberpunk interior), (holograms), (blue neon glow), (futuristic room), (high-tech atmosphere)"}
      ],
      "☣ ポストアポカリプス": [
        {"label": "崩壊都市に風が吹く終末世界", "val": "(post-apocalyptic city), (ruins), (wind), (desolation), (broken buildings), (end of civilization)"},
        {"label": "荒野と残骸のポストアポカリプス", "val": "(post-apocalyptic wasteland), (scrap remains), (dust), (empty landscape), (survival atmosphere)"},
        {"label": "廃墟に灯りが残る終末の夜", "val": "(ruined city at night), (faint lights), (collapse), (quiet desolation), (post-apocalyptic mood)"},
        {"label": "文明崩壊後の静かな空気", "val": "(after the collapse), (silent ruins), (gray sky), (stillness), (end-of-world atmosphere)"}
      ]
    }
  },
  "🎭 なりきりパック (Roleplay Packs)": {
    "👨‍🏭 現代職業 (Modern Jobs)": [
      {
        "label": "アイドル・シマエナガ風",
        "val": "(idol-style outfit), (white and pastel blue frilly dress), (feather embroidery), (fluffy sleeves), (short layered skirt), (down feather texture), (translucent ribbons), (soft feather hairclip), (idol stage), (spotlight)",
        "desc": "シマエナガモチーフのアイドル衣装"
      },
      {
        "label": "アイドル・ステージ",
        "val": "(idol stage), (idol outfit), (spotlight), (microphone), (glow sticks), (cheering crowd), (performance)",
        "desc": "アイドルライブの王道セット"
      },
      {
        "label": "配信者・ストリーマー",
        "val": "(streamer), (headset), (gaming chair), (RGB lights), (monitor glow), (chat overlay), (room setup)",
        "desc": "配信部屋・配信画面演出"
      },
      {
        "label": "探偵・捜査",
        "val": "(detective), (trench coat), (notebook), (crime scene), (police tape), (flashlight), (serious)",
        "desc": "現代ミステリー"
      },
      {
        "label": "救急隊員・レスキュー",
        "val": "(paramedic), (first aid kit), (ambulance interior), (emergency lights), (urgent atmosphere)",
        "desc": "緊迫シチュ"
      },
      {
        "label": "医師・手術室",
        "val": "(surgeon), (scrubs), (surgical mask), (operating room), (surgical lights), (sterile)",
        "desc": "医療・緊張感"
      },
      {
        "label": "ナース・診察",
        "val": "(nurse uniform), (clipboard), (hospital room), (medical checkup), (clean atmosphere)",
        "desc": "診察・看護"
      },
      {
        "label": "OL・オフィス",
        "val": "(office lady), (business suit), (holding documents), (modern office), (desk work), (glasses)",
        "desc": "仕事・日常"
      },
      {
        "label": "バリスタ・カフェ",
        "val": "(barista), (apron), (coffee machine), (latte art), (cafe interior), (warm lighting)",
        "desc": "カフェシーン"
      },
      {
        "label": "バーテンダー・バー",
        "val": "(bartender), (shaker), (bar counter), (neon bar), (bottle shelves), (moody lighting)",
        "desc": "夜の雰囲気"
      },
      {
        "label": "記者・取材",
        "val": "(journalist), (press badge), (camera), (microphone), (street interview), (news atmosphere)",
        "desc": "現場取材"
      },
      {
        "label": "警察・逮捕",
        "val": "(police uniform), (handcuffs), (patrol car background), (justice), (commanding pose)",
        "desc": "治安・制服"
      },
      {
        "label": "巫女・神社",
        "val": "(miko outfit), (shrine background), (sacred atmosphere), (red hakama), (sweeping leaves)",
        "desc": "和風・神社"
      },
      {
        "label": "バニーガール・カジノ",
        "val": "(bunny girl suit), (casino), (roulette), (neon lights), (glamorous)",
        "desc": "ナイト・娯楽"
      },
      {
        "label": "救命救急医 / ER Doctor",
        "val": "er doctor, emergency room, hospital corridor, scrubs, medical gloves, IV drip, flashing alarm light, dutch angle",
        "desc": "場所: 救急外来 / 構図: dutch angle, motion blur"
      },
      {
        "label": "保育士 / Nursery Teacher",
        "val": "nursery teacher, kindergarten classroom, children toys, colorful posters, warm light, eye-level shot",
        "desc": "場所: 保育園 / 構図: eye-level, candid"
      },
      {
        "label": "美術館学芸員 / Museum Curator",
        "val": "museum curator, art gallery, white walls, exhibition spotlight, clipboard, quiet atmosphere, medium shot",
        "desc": "場所: 美術館 / 構図: medium shot, clean framing"
      },
      {
        "label": "刑事 / Detective",
        "val": "detective, interrogation room, harsh light, cigarette smoke, badge, over the shoulder",
        "desc": "場所: 取調室 / 構図: over the shoulder, low key"
      },
      {
        "label": "バーテンダー / Bartender",
        "val": "bartender, cocktail bar, shaker, neon signs, bokeh, close-up hands",
        "desc": "場所: バー / 構図: close-up, bokeh"
      },
      {
        "label": "寿司職人 / Sushi Chef",
        "val": "sushi chef, sushi counter, knife, fresh fish, steam, close-up",
        "desc": "場所: 寿司屋カウンター / 構図: close-up, food focus"
      },
      {
        "label": "新聞記者 / Reporter",
        "val": "reporter, press conference, microphones, camera flashes, crowd, wide shot",
        "desc": "場所: 記者会見 / 構図: wide shot, dynamic"
      },
      {
        "label": "消防士 / Firefighter",
        "val": "firefighter, fire station, fire truck, helmet, smoky background, heroic low angle",
        "desc": "場所: 消防署/火災現場 / 構図: low angle, heroic"
      },
      {
        "label": "整備士 / Mechanic",
        "val": "mechanic, garage, toolbox, oil stains, car lift, three-quarter shot",
        "desc": "場所: 整備工場 / 構図: three-quarter, gritty"
      },
      {
        "label": "研究員 / Lab Researcher",
        "val": "lab researcher, laboratory, test tubes, holographic screen, clean light, medium close-up",
        "desc": "場所: 研究室 / 構図: medium close-up, sterile"
      },
      {
        "label": "弁護士 / Lawyer",
        "val": "lawyer, courtroom, suit, documents, judge bench, centered composition",
        "desc": "場所: 法廷 / 構図: centered, formal"
      },
      {
        "label": "シェフ（高級店） / Fine Dining Chef",
        "val": "fine dining chef, kitchen pass, plating, steam, spotlight, top-down detail",
        "desc": "場所: レストラン厨房 / 構図: top-down detail, cinematic"
      },
      {
        "label": "DJ / Club DJ",
        "val": "dj, nightclub, turntable, strobe lights, crowd hands, wide angle",
        "desc": "場所: クラブ / 構図: wide angle, motion"
      },
      {
        "label": "天気予報士 / Weathercaster",
        "val": "weathercaster, studio, green screen map, pointer, bright light, medium shot",
        "desc": "場所: TVスタジオ / 構図: medium shot, clean"
      }
    ],
    "🤖 未来/サイバー職業 (Future & Cyber Jobs)": [
      {
        "label": "サイバーパンク・ネトランナー",
        "val": "(cyberpunk netrunner), (holographic UI), (neon city), (data cables), (visor), (street tech)",
        "desc": "情報戦・都市夜景"
      },
      {
        "label": "サイバーパンク・メカニック",
        "val": "(cyberpunk mechanic), (tool belt), (workshop), (sparks), (chrome parts), (garage)",
        "desc": "整備工房"
      },
      {
        "label": "企業エージェント",
        "val": "(corporate agent), (sleek suit), (neon office), (hologram screen), (cold lighting)",
        "desc": "近未来コーポ"
      },
      {
        "label": "バウンティハンター",
        "val": "(bounty hunter), (tactical gear), (neon alley), (wanted poster), (rainy night)",
        "desc": "賞金稼ぎ"
      },
      {
        "label": "ドローンオペレーター",
        "val": "(drone operator), (remote controller), (HUD), (surveillance drones), (rooftop)",
        "desc": "監視・索敵"
      },
      {
        "label": "アンドロイド技師",
        "val": "(android engineer), (repair tools), (lab), (assembly line), (clean sci-fi)",
        "desc": "研究室・工房"
      },
      {
        "label": "宇宙船パイロット",
        "val": "(space pilot), (flight suit), (cockpit), (starfield), (dashboard glow)",
        "desc": "コックピット"
      },
      {
        "label": "スペースマリーン",
        "val": "(space marine), (power armor), (hangar bay), (warning lights), (combat readiness)",
        "desc": "SF戦闘"
      },
      {
        "label": "ホログラムDJ",
        "val": "(hologram DJ), (club stage), (laser lights), (holographic turntables), (crowd)",
        "desc": "近未来ライブ"
      },
      {
        "label": "近未来アイドル・ARステージ",
        "val": "(future idol), (AR stage), (holographic effects), (neon spotlight), (cheering crowd)",
        "desc": "SFアイドル"
      },
      {
        "label": "ディーゼルパンク技師",
        "val": "(dieselpunk engineer), (goggles), (oil stains), (factory), (steam), (industrial)",
        "desc": "重工業SF"
      },
      {
        "label": "ネットランナー / Netrunner",
        "val": "netrunner, cyber deck, neon alley, holographic UI, rain, pov",
        "desc": "場所: ネオン路地 / 構図: POV, rain & neon"
      },
      {
        "label": "義体整備士 / Cyberware Tech",
        "val": "cyberware technician, aug clinic, surgical tools, chrome limbs, close-up",
        "desc": "場所: 義体クリニック / 構図: close-up, sterile neon"
      },
      {
        "label": "ドローン操縦士 / Drone Pilot",
        "val": "drone pilot, rooftop, controller, swarm drones, city night, over the shoulder",
        "desc": "場所: 屋上 / 構図: over the shoulder, skyline"
      },
      {
        "label": "宇宙港管制官 / Spaceport Controller",
        "val": "spaceport controller, control room, radar screens, shuttle window, wide shot",
        "desc": "場所: 宇宙港管制室 / 構図: wide shot, screens"
      },
      {
        "label": "惑星探査員 / Planet Explorer",
        "val": "planet explorer, alien desert, suit, visor reflection, low angle",
        "desc": "場所: 異星砂漠 / 構図: low angle, epic"
      },
      {
        "label": "AI調律師 / AI Whisperer",
        "val": "ai whisperer, server cathedral, floating panels, soft glow, centered",
        "desc": "場所: サーバー聖堂 / 構図: centered, ethereal"
      },
      {
        "label": "量子セキュリティ / Quantum Security",
        "val": "quantum security, vault door, laser grid, tactical suit, dutch angle",
        "desc": "場所: 量子金庫 / 構図: dutch angle, tension"
      },
      {
        "label": "メカ医師 / Mecha Medic",
        "val": "mecha medic, hangar, giant mech, repair arms, wide",
        "desc": "場所: メカ格納庫 / 構図: wide, scale"
      },
      {
        "label": "ARストリートアーティスト / AR Street Artist",
        "val": "ar street artist, graffiti hologram, underpass, vibrant, wide angle",
        "desc": "場所: 高架下 / 構図: wide angle, color"
      },
      {
        "label": "未来考古学者 / Future Archaeologist",
        "val": "future archaeologist, ruin with drones, scanning beam, sunset, three-quarter",
        "desc": "場所: 遺跡 / 構図: three-quarter, scan beams"
      },
      {
        "label": "バイオハッカー / Biohacker",
        "val": "biohacker, underground lab, bio pods, green glow, close-up face",
        "desc": "場所: 地下ラボ / 構図: close-up, eerie"
      }
    ],
    "🏹 ファンタジー/スチーム職業 (Fantasy & Steam Jobs)": [
      {
        "label": "アーチャー",
        "val": "(archer), (bow), (quiver), (forest), (wind), (focused gaze)",
        "desc": "弓兵・森"
      },
      {
        "label": "シーフ",
        "val": "(thief), (hood), (dagger), (rooftops), (moonlight), (stealth)",
        "desc": "盗賊・夜"
      },
      {
        "label": "アサシン",
        "val": "(assassin), (dual daggers), (cloak), (dark alley), (silent)",
        "desc": "暗殺者"
      },
      {
        "label": "メイジ",
        "val": "(mage), (magic circle), (spellcasting), (arcane glow), (ruins)",
        "desc": "魔法使い"
      },
      {
        "label": "クレリック",
        "val": "(cleric), (holy staff), (cathedral), (soft holy light), (prayer)",
        "desc": "聖職者"
      },
      {
        "label": "パラディン",
        "val": "(paladin), (holy armor), (shield), (temple), (divine aura)",
        "desc": "聖騎士"
      },
      {
        "label": "バード",
        "val": "(bard), (lute), (tavern), (warm candlelight), (singing)",
        "desc": "吟遊詩人"
      },
      {
        "label": "アルケミスト",
        "val": "(alchemist), (vials), (workbench), (books), (potion steam), (laboratory)",
        "desc": "錬金術師"
      },
      {
        "label": "スチームパンク技工士",
        "val": "(steampunk artificer), (goggles), (gear tools), (workshop), (steam), (brass)",
        "desc": "歯車工房"
      },
      {
        "label": "ドラゴンライダー",
        "val": "(dragon rider), (saddle), (cliff), (stormy sky), (epic)",
        "desc": "騎竜"
      },
      {
        "label": "デーモンハンター",
        "val": "(demon hunter), (runes), (dark forest), (ember glow), (grim)",
        "desc": "魔狩り"
      },
      {
        "label": "王国騎士",
        "val": "(knight), (castle courtyard), (sword), (banner), (heroic)",
        "desc": "騎士・城"
      },
      {
        "label": "アーチャー / Archer",
        "val": "archer, forest clearing, bow drawn, leaves, dynamic shot, three-quarter",
        "desc": "場所: 森 / 構図: three-quarter, action"
      },
      {
        "label": "シーフ / Thief",
        "val": "thief, moonlit rooftop, hood, dagger, stealth, low angle",
        "desc": "場所: 屋根上 / 構図: low angle, moonlight"
      },
      {
        "label": "神官 / Priest",
        "val": "priest, cathedral, stained glass, prayer, god rays, centered",
        "desc": "場所: 大聖堂 / 構図: centered, god rays"
      },
      {
        "label": "錬金術師 / Alchemist",
        "val": "alchemist, workshop, bubbling potions, runes, close-up hands",
        "desc": "場所: 工房 / 構図: close-up, props"
      },
      {
        "label": "吟遊詩人 / Bard",
        "val": "bard, tavern stage, lute, audience, warm light, medium shot",
        "desc": "場所: 酒場 / 構図: medium, cozy"
      },
      {
        "label": "魔導書司書 / Arcane Librarian",
        "val": "arcane librarian, ancient library, floating books, candlelight, wide",
        "desc": "場所: 魔導図書館 / 構図: wide, depth"
      },
      {
        "label": "竜騎士 / Dragoon",
        "val": "dragoon, cliff, spear, dragon silhouette, low angle epic",
        "desc": "場所: 断崖 / 構図: low angle, epic"
      },
      {
        "label": "召喚士 / Summoner",
        "val": "summoner, magic circle, particles, night, top-down circle",
        "desc": "場所: 召喚陣 / 構図: top-down, ritual"
      },
      {
        "label": "鍛冶師 / Blacksmith",
        "val": "blacksmith, forge, sparks, hammer, close-up, rim light",
        "desc": "場所: 鍛冶場 / 構図: close-up, sparks"
      },
      {
        "label": "獣医（幻想獣） / Beast Healer",
        "val": "beast healer, stable, mythical creature, bandage, gentle, medium close-up",
        "desc": "場所: 厩舎 / 構図: medium close-up, tender"
      },
      {
        "label": "スチームパンク技工士 / Steampunk Artificer",
        "val": "steampunk artificer, gear workshop, brass goggles, steam, three-quarter",
        "desc": "場所: 歯車工房 / 構図: three-quarter, steam"
      },
      {
        "label": "空賊 / Sky Pirate",
        "val": "sky pirate, airship deck, wind, flag, wide angle",
        "desc": "場所: 飛空艇甲板 / 構図: wide, sky"
      }
    ]
  },
  "📐 おすすめ構図 (Recommended Compositions)": [
      {
        "title_ja": "基本：バストアップ",
        "title_en": "Basic: bust shot",
        "val": "bust shot",
        "desc": "Face & emotion focus"
      },
      {
        "title_ja": "基本：全身",
        "title_en": "Basic: full body",
        "val": "full body",
        "desc": "Outfit + pose"
      },
      {
        "title_ja": "王道：cowboy shot",
        "title_en": "Classic: cowboy shot",
        "val": "cowboy shot",
        "desc": "Balanced body framing"
      },
      {
        "title_ja": "視線：POV",
        "title_en": "Gaze: POV",
        "val": "pov",
        "desc": "Immersive viewpoint"
      },
      {
        "title_ja": "近接：クローズアップ",
        "title_en": "Close: close-up",
        "val": "close-up",
        "desc": "Intimacy / detail"
      },
      {
        "title_ja": "緊張：極端クローズ",
        "title_en": "Tension: extreme close-up",
        "val": "extreme close-up",
        "desc": "Eyes / lips emphasis"
      },
      {
        "title_ja": "迫力：ローアングル",
        "title_en": "Impact: low angle",
        "val": "low angle",
        "desc": "Dominance / power"
      },
      {
        "title_ja": "俯瞰：ハイアングル",
        "title_en": "Overlook: high angle",
        "val": "high angle",
        "desc": "Vulnerability / scale"
      },
      {
        "title_ja": "背中：後ろ姿",
        "title_en": "Back: from behind",
        "val": "from behind",
        "desc": "Mystery / pursuit"
      },
      {
        "title_ja": "演出：オーバーショルダー",
        "title_en": "Cinema: over shoulder",
        "val": "over-the-shoulder shot",
        "desc": "Dialogue / stalking"
      },
      {
        "title_ja": "歪み：ダッチアングル",
        "title_en": "Distort: dutch angle",
        "val": "dutch angle",
        "desc": "Unease / action"
      },
      {
        "title_ja": "動勢：斜め構図",
        "title_en": "Dynamic: diagonal composition",
        "val": "dynamic angle",
        "desc": "Action energy"
      }
    ],

  "🎭 表情演出プリセット (Expression FX Packs)": [
      {
        title_ja: "😊 喜び・笑い",
        title_en: "Joy & Laughter",
        children: [
          {
            title_ja: "😄 喜び",
            title_en: "Joy",
            children: [
              { id: "fx_joy_happy", label: "喜び演出セット", desc: "笑顔＋輝き瞳", val: "happy, smile, shining_eyes, sparkling_eyes" },
              { id: "fx_joy_innocent", label: "無邪気演出セット", desc: "きゃっ＋目きら", val: "happy, open_mouth, wide-eyed, sparkling_eyes" },
              { id: "fx_joy_relief", label: "ほっとした喜び演出セット", desc: "安堵＋やわらかな笑み", val: "relieved smile, softened eyes, gentle happiness, warm expression" },
              { id: "fx_joy_proud", label: "誇らしい喜び演出セット", desc: "満足げ＋胸を張る気配", val: "proud smile, bright eyes, satisfied expression, confident joy" },
              { id: "fx_joy_blessed", label: "幸せ満ちる演出セット", desc: "満たされた幸福感＋潤んだ瞳", val: "blissful smile, softened gaze, watery eyes, fulfilled happiness" }
            ]
          },
          {
            title_ja: "😂 笑い",
            title_en: "Laughter",
            children: [
              { id: "fx_joy_laugh", label: "爆笑演出セット", desc: "大笑い＋涙目", val: "laughing, open_mouth, tears_in_eyes" },
              { id: "fx_joy_tease", label: "いたずら笑い演出セット", desc: "にやり＋片目細め", val: "playful_smile, smirk, narrowed_eyes, teasing" },
              { id: "fx_joy_shy", label: "照れ笑い演出セット", desc: "赤面＋笑顔＋目逸らし", val: "blush, nervous_smile, looking_away, shy" },
              { id: "fx_joy_snicker", label: "くすくす笑い演出セット", desc: "堪えきれない小さな笑い", val: "soft laughter, hand_over_mouth, amused eyes, suppressed giggle" },
              { id: "fx_joy_grin", label: "満面笑み演出セット", desc: "弾けるような笑顔", val: "big smile, sparkling eyes, cheerful expression, radiant joy" }
            ]
          }
        ]
      },
      {
        title_ja: "🔥 怒り・狂気",
        title_en: "Anger & Madness",
        children: [
          {
            title_ja: "💢 怒り",
            title_en: "Anger",
            children: [
              { id: "fx_anger_basic", label: "怒り演出セット", desc: "眉圧＋歯噛み＋睨み", val: "angry, furrowed_brow, clenched_teeth, glaring" },
              { id: "fx_anger_silent", label: "静かな怒気演出セット", desc: "無表情気味＋鋭い視線", val: "cold_anger, expressionless, sharp_eyes, glare" },
              { id: "fx_anger_burst", label: "激昂演出セット", desc: "叫び＋目見開き＋血走り", val: "rage, shouting, wide-eyed, bloodshot_eyes" },
              { id: "fx_anger_control", label: "抑え込んだ怒り演出セット", desc: "耐える怒気＋震える口元", val: "suppressed anger, clenched jaw, trembling lips, burning eyes, tense face" },
              { id: "fx_anger_disdain", label: "吐き捨て怒り演出セット", desc: "苛立ち＋軽蔑混じりの視線", val: "irritated, contemptuous glare, curled lip, narrowed eyes, sharp tone" },
              { id: "fx_anger_crack", label: "理性限界演出セット", desc: "静かに切れかける危うさ", val: "about to snap, tense stare, clenched teeth, dark pressure, restrained rage" }
            ]
          },
          {
            title_ja: "🌀 狂気",
            title_en: "Madness",
            children: [
              { id: "fx_anger_mad", label: "狂気演出セット", desc: "瞳開き＋不穏な笑み", val: "crazy_eyes, wide-eyed, evil_smile, stare" },
              { id: "fx_mad_ecstasy", label: "陶酔狂気演出セット", desc: "うっとり笑み＋焦点の危うさ", val: "ecstatic madness, unfocused eyes, eerie smile, intoxicated expression, unstable" },
              { id: "fx_mad_break", label: "壊れ笑い演出セット", desc: "笑っているのに壊れている", val: "broken smile, manic laughter, trembling eyes, unstable expression, insanity" },
              { id: "fx_mad_whisper", label: "囁き狂気演出セット", desc: "秘密めいた低さ＋異常な熱", val: "whispering madness, half-lidded eyes, eerie grin, obsessive gaze, unstable" },
              { id: "fx_mad_obsess", label: "執着狂気演出セット", desc: "張り付く視線＋逃がさない熱", val: "obsessive stare, possessive madness, unblinking eyes, dangerous smile, fixation" },
              { id: "fx_mad_empty", label: "空虚狂気演出セット", desc: "感情が抜けたまま壊れている", val: "hollow madness, blank stare, eerie calm, broken mind, uncanny" }
            ]
          }
        ]
      },
      {
        title_ja: "⚡ 焦り・パニック",
        title_en: "Panic & Agitation",
        children: [
          {
            title_ja: "😰 焦り",
            title_en: "Agitation",
            children: [
              { id: "fx_panic_hurry", label: "焦る演出セット", desc: "焦る＋目を見開く＋汗", val: "panic, wide-eyed, sweat, sweatdrop" },
              { id: "fx_panic_shaken", label: "動揺演出セット", desc: "動揺＋目が泳ぐ＋汗", val: "nervous, blank_stare, sweatdrop, sweating" },
              { id: "fx_panic_fumble", label: "しどろもどろ焦り演出セット", desc: "言葉が詰まる＋視線迷い", val: "flustered, darting eyes, awkward speech, nervous sweat, unsettled" },
              { id: "fx_panic_deadline", label: "切迫焦燥演出セット", desc: "時間に追われるような張りつめ", val: "urgent, tense expression, hurried breath, pressured eyes, stress" },
              { id: "fx_panic_confused", label: "混乱焦り演出セット", desc: "考えが追いつかない揺れ", val: "confused panic, wavering eyes, tense face, restless, overwhelmed" }
            ]
          },
          {
            title_ja: "🚨 パニック",
            title_en: "Panic",
            children: [
              { id: "fx_panic_surprise", label: "驚き演出セット", desc: "驚き＋目見開き＋口開け", val: "surprised, wide-eyed, open_mouth, gasp" },
              { id: "fx_panic_cornered", label: "追い詰められ演出セット", desc: "息荒い＋瞳揺れ＋汗", val: "cornered, shaky_eyes, heavy_breathing, sweating" },
              { id: "fx_panic_breathless", label: "呼吸乱れ演出セット", desc: "過呼吸気味＋汗＋恐慌", val: "panic attack, heavy breathing, trembling, sweat, wide eyes" },
              { id: "fx_panic_freeze", label: "思考停止演出セット", desc: "真っ白になるような狼狽", val: "mind gone blank, frozen panic, vacant stare, trembling lips, shock" },
              { id: "fx_panic_scramble", label: "取り乱し演出セット", desc: "余裕を失った崩れ方", val: "frantic, disoriented, sweating, panicked expression, loss of composure" }
            ]
          }
        ]
      },
      {
        title_ja: "🕯 恐怖・泣き",
        title_en: "Fear & Crying",
        children: [
          {
            title_ja: "😢 泣き",
            title_en: "Crying",
            children: [
              { id: "fx_fear_cry", label: "泣き演出セット", desc: "泣き＋嗚咽＋涙", val: "crying, sobbing, streaming_tears, trembling_lips" },
              { id: "fx_fear_break", label: "涙堪え崩れ演出セット", desc: "耐える＋潤み＋崩れかけ", val: "holding_back_tears, watery_eyes, trembling_lips, fearful" },
              { id: "fx_cry_smile", label: "泣き笑い演出セット", desc: "笑おうとして涙がこぼれる", val: "tearful smile, crying, trembling lips, bittersweet expression, watery eyes" },
              { id: "fx_cry_silent", label: "静かな涙演出セット", desc: "声を出さずに流れる涙", val: "silent tears, downcast eyes, trembling lashes, restrained emotion, sadness" },
              { id: "fx_cry_plead", label: "引き止め涙演出セット", desc: "縋るような涙＋離れたくなさ", val: "tearful pleading, reaching out, watery eyes, trembling lips, desperate sadness" },
              { id: "fx_cry_broken", label: "感情決壊演出セット", desc: "堪えていたものが一気に溢れる", val: "emotional breakdown, sobbing, streaming tears, shaking shoulders, overwhelmed" }
            ]
          },
          {
            title_ja: "😨 怯え",
            title_en: "Fear",
            children: [
              { id: "fx_fear_scared", label: "怯え演出セット", desc: "怯える＋震える＋涙目", val: "scared, trembling, watery_eyes, tears_in_eyes" },
              { id: "fx_fear_frozen", label: "硬直恐怖演出セット", desc: "青ざめ＋息止まり＋瞳固定", val: "frozen_in_fear, pale_face, held_breath, fixed_stare" },
              { id: "fx_fear_corner", label: "追い詰め恐怖演出セット", desc: "逃げ場のない怯え＋息浅め", val: "cornered fear, shaky breath, wide eyes, trembling, panic" },
              { id: "fx_fear_watch", label: "警戒怯え演出セット", desc: "周囲を気にする張りつめた視線", val: "wary, fearful glance, tense face, alert eyes, uneasy" },
              { id: "fx_fear_pale", label: "青ざめ怯え演出セット", desc: "血の気が引いたような怖さ", val: "pale with fear, stiff expression, anxious stare, held breath, trembling" },
              { id: "fx_fear_flinch", label: "身をすくめる演出セット", desc: "反射的に縮こまる怖さ", val: "flinching, shrinking back, fearful eyes, tense shoulders, startled" }
            ]
          }
        ]
      },
      {
        title_ja: "🧊 嫌悪・軽蔑",
        title_en: "Disgust & Contempt",
        children: [
          {
            title_ja: "🤢 嫌悪",
            title_en: "Disgust",
            children: [
              { id: "fx_disgust_basic", label: "嫌悪演出セット", desc: "嫌悪＋軽蔑＋目細め", val: "disgust, contempt, squinting, glaring" },
              { id: "fx_disgust_avert", label: "拒絶演出セット", desc: "顔背け＋眉寄せ＋不快", val: "rejection, looking_away, disgust, furrowed_brow" },
              { id: "fx_disgust_nausea", label: "吐き気嫌悪演出セット", desc: "受けつけない不快感", val: "disgusted, nauseated expression, recoiling, tightened mouth, aversion" },
              { id: "fx_disgust_stiff", label: "顔をしかめる嫌悪演出セット", desc: "露骨に嫌そうな歪み", val: "grimace, disgusted look, wrinkled nose, narrowed eyes, distaste" },
              { id: "fx_disgust_distance", label: "距離を置く嫌悪演出セット", desc: "近づきたくない拒否感", val: "pulling back, aversion, tense face, disgust, wary distance" }
            ]
          },
          {
            title_ja: "😒 軽蔑",
            title_en: "Contempt",
            children: [
              { id: "fx_disgust_cold", label: "冷笑軽蔑演出セット", desc: "薄笑い＋見下し", val: "contempt, cold_smile, looking_down_on, half-lidded_eyes" },
              { id: "fx_disgust_sneer", label: "鼻で笑う軽蔑演出セット", desc: "相手を下に見る乾いた笑い", val: "sneer, contemptuous smile, looking down, dismissive eyes, superiority" },
              { id: "fx_disgust_ice", label: "氷点軽蔑演出セット", desc: "感情を削いだ冷たい見下し", val: "icy contempt, cold stare, emotionless disdain, superior expression" },
              { id: "fx_disgust_bored", label: "退屈軽蔑演出セット", desc: "価値がないと切り捨てる視線", val: "bored contempt, half-lidded eyes, dismissive expression, unimpressed" },
              { id: "fx_disgust_judge", label: "断罪軽蔑演出セット", desc: "見下しと判断が混ざる圧", val: "judgmental stare, disdain, superior gaze, cold pressure, condemnation" }
            ]
          }
        ]
      },
      {
        title_ja: "🫧 我慢・抑制",
        title_en: "Restraint & Endurance",
        items: [
          { id: "fx_restraint_endure", label: "我慢演出セット", desc: "唇噛み＋歯噛み＋緊張", val: "restrained, biting_lip, clenched_teeth, nervous_sweat" },
          { id: "fx_restraint_brave", label: "強がり演出セット", desc: "強気＋涙目＋目逸らし", val: "forced_smile, watery_eyes, looking_away, trembling_lips" },
          { id: "fx_restraint_fatigue", label: "疲労演出セット", desc: "虚ろ目＋ため息＋汗", val: "tired, glazed_eyes, sigh, sweating" },
          { id: "fx_restraint_resolve", label: "耐え抜き演出セット", desc: "汗＋真顔＋視線固定", val: "enduring, serious, sweating, fixed_gaze" }
        ]
      },
      {
        title_ja: "🌸 恥・照れ・誘惑",
        title_en: "Shyness & Seduction",
        items: [
          { id: "fx_shy_blush", label: "照れ演出セット", desc: "全顔赤面＋目逸らし", val: "bashful, full-face_blush, looking_away, shy" },
          { id: "fx_shy_embarrassed", label: "恥演出セット", desc: "鼻赤＋汗＋視線逸らし", val: "embarrassed, nose_blush, sweatdrop, looking_away" },
          { id: "fx_shy_flustered", label: "しどろもどろ演出セット", desc: "口ごもり＋赤面＋目泳ぎ", val: "flustered, blush, nervous, darting_eyes" },
          { id: "fx_shy_seduce", label: "誘惑演出セット", desc: "誘う＋視線＋唇", val: "seductive_smile, half-closed_eyes, parted_lips, stare" },
          { id: "fx_shy_tempt", label: "挑発演出セット", desc: "余裕笑い＋流し目", val: "smirk, bedroom_eyes, teasing, confident" }
        ]
      },
      {
        title_ja: "💤 眠気・脱力",
        title_en: "Sleepy & Limp",
        items: [
          { id: "fx_sleepy_drowsy", label: "眠気演出セット", desc: "とろ目＋口半開き", val: "sleepy_eyes, half-closed_eyes, open_mouth, tired" },
          { id: "fx_sleepy_blank", label: "脱力演出セット", desc: "虚脱＋焦点薄い目", val: "exhausted, unfocused_eyes, slack_expression, tired" },
          { id: "fx_sleepy_yawn", label: "あくび演出セット", desc: "あくび＋涙目＋眠そう", val: "yawning, watery_eyes, sleepy, relaxed" }
        ]
      },
      {
        title_ja: "🪞 無感情・冷淡",
        title_en: "Blank & Cold",
        items: [
          { id: "fx_blank_expressionless", label: "無表情演出セット", desc: "感情薄い＋視線固定", val: "expressionless, blank_stare, still_face, emotionless" },
          { id: "fx_blank_cold", label: "冷淡演出セット", desc: "半目＋温度低めの視線", val: "cold_eyes, half-lidded_eyes, indifferent, calm" },
          { id: "fx_blank_doll", label: "人形めいた演出セット", desc: "瞳静止＋表情欠落", val: "doll-like, fixed_stare, expressionless, glassy_eyes" }
        ]
      },
      {
        title_ja: "✨ 決意・覚醒",
        title_en: "Resolve & Awakening",
        items: [
          { id: "fx_resolve_determined", label: "決意演出セット", desc: "真顔＋鋭い瞳＋口元締め", val: "determined, serious, sharp_eyes, firm_mouth" },
          { id: "fx_resolve_awaken", label: "覚醒演出セット", desc: "光る瞳＋覚悟＋集中", val: "awakened, glowing_eyes, focused, intense" },
          { id: "fx_resolve_heroic", label: "英雄覚悟演出セット", desc: "逆境前進＋強い視線", val: "heroic, resolute, fearless, intense_gaze" }
        ]
      },
      {
        title_ja: "🌧 泣き・情緒崩壊",
        title_en: "Meltdown & Breakdown",
        items: [
          { id: "fx_breakdown_silent", label: "静かな落涙演出セット", desc: "無言＋涙一筋", val: "silent_tears, downcast_eyes, melancholy, fragile" },
          { id: "fx_breakdown_burst", label: "感情崩壊演出セット", desc: "泣き叫び＋涙＋震え", val: "emotional_breakdown, crying, shouting, trembling" },
          { id: "fx_breakdown_numb", label: "燃え尽き演出セット", desc: "涙跡＋無表情＋虚脱", val: "burned_out, tear_streaks, expressionless, exhausted" }
        ]
      },
      {
        title_ja: "🌙 艶めき・背徳心理",
        title_en: "Suggestive Psychology",
        items: [
          { id: "fx_r18_suppressed", label: "抑圧演出セット", desc: "視線逸らし＋汗＋口元固め", val: "suppressed_heat, looking_away, sweatdrop, trembling_lips" },
          { id: "fx_r18_forbidden", label: "背徳演出セット", desc: "ためらい＋赤面＋目逸らし", val: "forbidden, full-face_blush, looking_away, nervous" },
          { id: "fx_r18_dom", label: "支配演出セット", desc: "強い視線＋眉圧＋緊張", val: "dominant, glare, furrowed_brow, nervous_sweat" },
          { id: "fx_r18_sub", label: "従属演出セット", desc: "伏し目＋赤面＋震え", val: "submissive, downcast_eyes, blush, trembling" },
          { id: "fx_r18_yearn", label: "渇望演出セット", desc: "潤んだ瞳＋熱のこもる視線", val: "longing, watery_eyes, parted_lips, heated_gaze" }
        ]
      }
      ,
      {
        title_ja: "😌 日常・好感系",
        title_en: "Warm & Likable",
        children: [
          {
            title_ja: "🫶 安心",
            title_en: "Comfort & Relief",
            children: [
              { id: "fx_warm_gentle", label: "やわらか微笑み演出セット", desc: "穏やか笑み＋優しい目", val: "gentle_smile, soft_eyes, calm, approachable, warm_expression" },
              { id: "fx_warm_relief", label: "ほっとした演出セット", desc: "安堵＋肩の力が抜ける", val: "relieved, gentle_smile, softened_eyes, exhale, relaxed" },
              { id: "fx_warm_safe", label: "安心しきり演出セット", desc: "気持ちがほどけた穏やかさ", val: "safe and relaxed, gentle smile, softened eyes, calm breathing, warm expression" },
              { id: "fx_warm_unguarded", label: "無防備なくつろぎ演出セット", desc: "気を許した素直さ＋ゆるみ", val: "unguarded, relaxed smile, softened eyes, open posture, at ease" },
              { id: "fx_warm_cozy", label: "ぬくもり安心演出セット", desc: "包まれるような安堵＋穏やかさ", val: "cozy, relieved smile, warm eyes, relaxed shoulders, comforted" }
            ]
          },
          {
            title_ja: "🤝 親愛",
            title_en: "Affection & Familiarity",
            children: [
              { id: "fx_warm_friendly", label: "親しみ演出セット", desc: "気さく＋明るい目＋自然体", val: "friendly_smile, bright_eyes, relaxed, natural_pose, approachable" },
              { id: "fx_warm_proudsoft", label: "褒められ嬉しい演出セット", desc: "照れ混じりの嬉しさ", val: "happy, bashful_smile, soft_blush, sparkling_eyes, pleased" },
              { id: "fx_warm_listen", label: "聞き入り演出セット", desc: "真剣に聞く＋優しい視線", val: "attentive, soft_eyes, slight_smile, calm, focused_on_speaker" },
              { id: "fx_warm_nod", label: "うなずき共感演出セット", desc: "優しく受け止める＋好感", val: "gentle nod, empathetic eyes, slight smile, friendly, receptive" },
              { id: "fx_warm_close", label: "距離の近い親愛演出セット", desc: "心を開いた親しさ＋柔らかな笑み", val: "close affection, warm smile, soft eyes, familiar, relaxed" },
              { id: "fx_warm_trust", label: "信頼まなざし演出セット", desc: "安心して見つめる＋素直な好意", val: "trusting gaze, gentle smile, calm eyes, affectionate, openhearted" }
            ]
          }
        ]
      },
      {
        title_ja: "😖 照れ・気まずさ系",
        title_en: "Awkward & Flustered",
        children: [
          {
            title_ja: "🌸 照れ",
            title_en: "Shy & Blushing",
            children: [
              { id: "fx_awkward_hidden", label: "顔隠し照れ演出セット", desc: "手で顔隠し＋赤面", val: "covering_face, blush, shy, embarrassed, peeking" },
              { id: "fx_awkward_stammer", label: "しどろもどろ会話演出セット", desc: "口ごもり＋焦り＋汗", val: "stammering, flustered, sweatdrop, darting_eyes, embarrassed" },
              { id: "fx_awkward_bashful", label: "もじもじ照れ演出セット", desc: "視線泳ぎ＋頬染め＋ためらい", val: "bashful, blush, fidgeting, looking away, shy smile" },
              { id: "fx_awkward_flinchblush", label: "不意打ち照れ演出セット", desc: "急に意識して赤くなる", val: "sudden blush, startled, shy eyes, flustered, caught off guard" },
              { id: "fx_awkward_smilehide", label: "笑ってごまかす照れ演出セット", desc: "照れ隠し＋はにかみ笑い", val: "embarrassed laugh, bashful smile, blush, looking away, fidgeting" }
            ]
          },
          {
            title_ja: "😬 気まずさ",
            title_en: "Awkwardness",
            children: [
              { id: "fx_awkward_silence", label: "気まずい沈黙演出セット", desc: "言葉詰まり＋目逸らし", val: "awkward, looking_away, forced_smile, silence, nervous" },
              { id: "fx_awkward_apology", label: "やってしまった演出セット", desc: "しまった顔＋青ざめ＋汗", val: "oops, pale_face, sweatdrop, awkward_smile, startled" },
              { id: "fx_awkward_sideeye", label: "横目気まずさ演出セット", desc: "横目＋眉下げ＋戸惑い", val: "side_eye, uneasy, awkward, lowered_brows, hesitant" },
              { id: "fx_awkward_freeze", label: "空気が固まる演出セット", desc: "場が止まる＋言葉が出ない", val: "frozen smile, awkward pause, uneasy eyes, tense silence, nervous" },
              { id: "fx_awkward_backstep", label: "一歩引く気まずさ演出セット", desc: "引き気味＋困り笑い", val: "stepping back, awkward smile, uneasy eyes, hesitant, uncomfortable" },
              { id: "fx_awkward_searchwords", label: "言葉探し演出セット", desc: "何か言おうとして詰まる", val: "searching for words, awkward pause, nervous eyes, forced smile, uneasy" }
            ]
          }
        ]
      },
      {
        title_ja: "👑 誇り・勝ち気系",
        title_en: "Pride & Defiance",
        children: [
          {
            title_ja: "🏆 誇り",
            title_en: "Pride",
            children: [
              { id: "fx_pride_confident", label: "勝ち気演出セット", desc: "自信＋強い目＋口角上げ", val: "confident, strong_eyes, smirk, chin_up, assertive" },
              { id: "fx_pride_victory", label: "勝利確信演出セット", desc: "余裕笑み＋見下ろし気味", val: "victorious, smug_smile, confident_eyes, looking_down_slightly, composed" },
              { id: "fx_pride_noble", label: "気高い演出セット", desc: "凛とした顔＋静かな誇り", val: "noble, dignified, calm_pride, straight_posture, composed_expression" },
              { id: "fx_pride_dignity", label: "堂々たる演出セット", desc: "胸を張る＋揺るがぬ自信", val: "dignified, poised, confident posture, steady eyes, composed smile" },
              { id: "fx_pride_glory", label: "誇り高き余裕演出セット", desc: "静かな勝者の余裕", val: "proud composure, faint smile, steady gaze, elegant confidence, superior calm" },
              { id: "fx_pride_resolve", label: "譲らぬ矜持演出セット", desc: "信念を曲げない誇り", val: "unyielding pride, firm gaze, lifted chin, composed, unwavering dignity" }
            ]
          },
          {
            title_ja: "⚔️ 反骨",
            title_en: "Defiance",
            children: [
              { id: "fx_pride_challenge", label: "挑戦的演出セット", desc: "煽り笑み＋鋭い視線", val: "challenging, provocative_smile, sharp_eyes, fearless, teasing" },
              { id: "fx_pride_resist", label: "反骨演出セット", desc: "睨み返し＋折れない目", val: "defiant, glaring_back, unwavering_eyes, stubborn, tense" },
              { id: "fx_pride_rebel", label: "負けん気演出セット", desc: "噛みつくような闘志", val: "competitive, fierce eyes, clenched jaw, defiant, burning spirit" },
              { id: "fx_pride_sneer", label: "鼻で笑う反骨演出セット", desc: "見下さずとも折れない挑発", val: "scoffing smile, defiant eyes, fearless, provocative, stubborn" },
              { id: "fx_pride_standground", label: "一歩も引かない演出セット", desc: "退かない意思＋対抗心", val: "standing ground, defiant stare, tense jaw, unwavering, resistant" }
            ]
          }
        ]
      },
      {
        title_ja: "😈 あざとさ・小悪魔系",
        title_en: "Coy & Devilish",
        children: [
          {
            title_ja: "🎀 あざとさ",
            title_en: "Coy",
            children: [
              { id: "fx_coy_wink", label: "あざとウィンク演出セット", desc: "ウィンク＋にっこり＋軽い挑発", val: "wink, playful_smile, teasing, charming, bright_eyes" },
              { id: "fx_coy_upgaze", label: "上目遣い演出セット", desc: "上目＋頬染め＋甘い圧", val: "looking_up, puppy_eyes, soft_blush, sweet_smile, charming" },
              { id: "fx_coy_fakeinnocent", label: "わざとらしい無垢演出セット", desc: "無垢ぶる＋含み笑い", val: "feigned_innocence, innocent_face, hidden_smile, teasing_eyes, coy" },
              { id: "fx_coy_sugartrap", label: "甘え誘導演出セット", desc: "甘い笑み＋距離近め＋誘い", val: "sweet smile, inviting gaze, leaning in, charming, teasing" },
              { id: "fx_coy_pout", label: "拗ね甘え演出セット", desc: "少し拗ねつつ甘えてくる", val: "pouting, needy eyes, soft blush, sweet expression, clingy" },
              { id: "fx_coy_bait", label: "計算かわいい演出セット", desc: "可愛さを分かって使う", val: "calculated cute, playful smile, bright eyes, charming, coy" }
            ]
          },
          {
            title_ja: "😼 小悪魔",
            title_en: "Devilish",
            children: [
              { id: "fx_coy_impish", label: "小悪魔演出セット", desc: "片眉上げ＋にやり", val: "impish_smile, smirk, raised_eyebrow, teasing, mischievous" },
              { id: "fx_coy_bragcute", label: "どやかわ演出セット", desc: "得意げ＋可愛げ", val: "cute_smug, proud_smile, sparkling_eyes, cheeky, playful" },
              { id: "fx_coy_hook", label: "翻弄笑み演出セット", desc: "余裕顔＋からかい＋主導感", val: "teasing smirk, confident eyes, playful dominance, charming, cheeky" },
              { id: "fx_coy_temptail", label: "引き際ちらつかせ演出セット", desc: "追わせるような余裕", val: "teasing retreat, sly smile, beckoning eyes, playful control, elusive" },
              { id: "fx_coy_catplay", label: "猫かぶり小悪魔演出セット", desc: "無垢そうで中身はいたずら", val: "fake innocence, devilish smile, bright eyes, playful trickster, charming" }
            ]
          }
        ]
      },
      {
        title_ja: "🌫 不穏・異常系",
        title_en: "Unease & Uncanny",
        children: [
          {
            title_ja: "🌒 静かな不穏",
            title_en: "Quiet Unease",
            children: [
              { id: "fx_uncanny_blanksmile", label: "不穏な微笑み演出セット", desc: "笑っているのに怖い", val: "uncanny_smile, unsettling, fixed_smile, cold_eyes, eerie" },
              { id: "fx_uncanny_whisper", label: "囁き不穏演出セット", desc: "口元だけ笑う＋秘密めき", val: "whispering, slight_smile, half-lidded_eyes, ominous, secretive" },
              { id: "fx_uncanny_still", label: "静止圧演出セット", desc: "動かなさすぎる不気味さ", val: "motionless, eerie calm, fixed gaze, silent pressure, unsettling" },
              { id: "fx_uncanny_lowtone", label: "静かな圧迫感演出セット", desc: "声を荒げずに怖い", val: "quiet menace, unreadable face, cold stare, restrained threat, unsettling" },
              { id: "fx_uncanny_hollowcalm", label: "空虚な平静演出セット", desc: "感情の抜けた落ち着きが怖い", val: "hollow calm, blank eyes, still expression, eerie composure, uncanny" }
            ]
          },
          {
            title_ja: "🫥 壊れかけ",
            title_en: "Fraying Mind",
            children: [
              { id: "fx_uncanny_stare", label: "異常凝視演出セット", desc: "見開き＋瞬き少ない", val: "unblinking_stare, wide_eyes, eerie, fixed_gaze, unsettling" },
              { id: "fx_uncanny_crack", label: "壊れかけ演出セット", desc: "表情の綻び＋理性薄れ", val: "cracking_expression, trembling_smile, unstable, watery_eyes, eerie" },
              { id: "fx_uncanny_trance", label: "陶酔異常演出セット", desc: "恍惚＋焦点の揺れ", val: "trance, unfocused_eyes, faint_smile, detached, abnormal" },
              { id: "fx_uncanny_breaksnap", label: "理性の綻び演出セット", desc: "笑みの崩れ＋危うい目", val: "sanity slipping, broken smile, trembling eyes, unstable, eerie" },
              { id: "fx_uncanny_glass", label: "焦点ずれ演出セット", desc: "視線が合っているのに合わない", val: "misfocused eyes, detached stare, faint smile, unstable, uncanny" },
              { id: "fx_uncanny_murmur", label: "壊れ際の呟き演出セット", desc: "小声で危うく何かを漏らす", val: "murmuring, unstable smile, unfocused eyes, fraying mind, eerie" }
            ]
          }
        ]
      },
{
  title_ja: "😳 漫符連動",
  title_en: "Face Effects Sync",
  children: [
    {
      title_ja: "😊 喜び＋漫符",
      title_en: "Joy + Face Effects",
      children: [
        { id: "fx_face_joy_blush", label: "ときめき喜び演出セット", desc: "笑顔＋赤面＋輝き瞳", val: "happy, smile, blush, shining_eyes, sparkling_eyes" },
        { id: "fx_face_laugh_tears", label: "泣き笑い爆笑演出セット", desc: "大笑い＋涙目＋頬染め", val: "laughing, open_mouth, tearing up, blush, sparkling_eyes" },
        { id: "fx_face_joy_sweat", label: "無邪気どたばた演出セット", desc: "きゃっ＋汗＋目きら", val: "happy, open_mouth, wide-eyed, flying sweatdrops, sparkling_eyes" },
        { id: "fx_face_joy_bulb", label: "ひらめき歓喜演出セット", desc: "電球＋ぱっと明るい笑顔", val: "light bulb symbol, bright smile, sparkling_eyes, delighted, inspired" },
        { id: "fx_face_joy_music", label: "ごきげん音符演出セット", desc: "音符＋やわらか笑み＋上機嫌", val: "music note symbol, warm smile, cheerful, relaxed, likable" },
        { id: "fx_face_joy_heartcheek", label: "頬ハートご満悦演出セット", desc: "頬ハート＋赤らみ＋満足げ", val: "heart cheek mark, light blush, pleased smile, soft eyes, delighted" }
      ]
    },
    {
      title_ja: "🌸 照れ＋漫符",
      title_en: "Shyness + Face Effects",
      children: [
        { id: "fx_face_shy_basic", label: "王道照れ演出セット", desc: "赤面＋目逸らし＋もじもじ", val: "bashful, blush, looking_away, shy, nervous_smile" },
        { id: "fx_face_shy_heavy", label: "限界照れ演出セット", desc: "激しい赤面＋汗＋目逸らし", val: "embarrassed, heavy blush, flying sweatdrops, looking_away, trembling_lips" },
        { id: "fx_face_shy_shadow", label: "気まずさ暗転演出セット", desc: "顔に影＋汗＋固まる", val: "awkward, shadow over face, flying sweatdrops, blank_stare, frozen" },
        { id: "fx_face_shy_ear", label: "耳まで赤い照れ演出セット", desc: "耳赤＋頬染め＋うつむき", val: "ear blush, rosy cheeks, bashful, looking down, shy" },
        { id: "fx_face_shy_lines", label: "照れ線うつむき演出セット", desc: "照れ線＋目逸らし＋口ごもり", val: "embarrassment lines, looking away, timid smile, nervous, flustered" },
        { id: "fx_face_shy_puff", label: "むっと照れ演出セット", desc: "頬ふくらませ＋赤面＋拗ね気味", val: "puffed cheeks, blush, embarrassed, sulking cheeks, shy" }
      ]
    },
    {
      title_ja: "💢 怒り＋漫符",
      title_en: "Anger + Face Effects",
      children: [
        { id: "fx_face_anger_vein", label: "怒りマーク演出セット", desc: "怒り＋怒りマーク＋歯噛み", val: "angry, anger vein, furrowed_brow, clenched_teeth, glaring" },
        { id: "fx_face_anger_shadow", label: "静かな激怒演出セット", desc: "顔に影＋睨み＋圧", val: "cold_anger, shadow over face, sharp_eyes, glare, dark pressure" },
        { id: "fx_face_anger_sweat", label: "苛立ち沸騰演出セット", desc: "怒気＋汗＋こめかみ圧", val: "irritated, flying sweatdrops, narrowed_eyes, tense face, clenched jaw" },
        { id: "fx_face_anger_steam", label: "湯気ぷんすか演出セット", desc: "湯気＋赤面怒り＋頬ぷく", val: "steam from face, flushed face, puffed cheeks, annoyed, fuming" },
        { id: "fx_face_anger_mark", label: "びきびき激昂演出セット", desc: "感嘆符＋青筋＋睨み", val: "exclamation mark symbol, anger vein, glare, furious, tense" },
        { id: "fx_face_anger_sulk", label: "むくれ怒り演出セット", desc: "むっと頬＋視線鋭い＋不満", val: "sulking cheeks, narrowed eyes, irritated, stubborn, displeased" }
      ]
    },
    {
      title_ja: "😭 泣き＋漫符",
      title_en: "Crying + Face Effects",
      children: [
        { id: "fx_face_cry_tears", label: "涙目泣き演出セット", desc: "涙目＋震え唇＋赤面", val: "tearing up, watery_eyes, trembling_lips, blush, sad" },
        { id: "fx_face_cry_stream", label: "感情決壊演出セット", desc: "泣き＋汗＋呼吸乱れ", val: "crying, streaming_tears, flying sweatdrops, sobbing, trembling" },
        { id: "fx_face_cry_sigh", label: "ため息泣き演出セット", desc: "ため息＋涙目＋力の抜け", val: "tearing up, sigh, downcast_eyes, exhausted, trembling_lips" },
        { id: "fx_face_cry_single", label: "片涙こらえ演出セット", desc: "片涙＋必死に堪える", val: "single tear, watery eyes, trembling lips, holding back tears, pained" },
        { id: "fx_face_cry_well", label: "涙ぐみ沈黙演出セット", desc: "にじむ涙＋言葉を飲む", val: "eyes welling with tears, downcast eyes, silent, fragile, emotional" },
        { id: "fx_face_cry_tracks", label: "涙跡ぐすぐす演出セット", desc: "涙跡＋泣き腫れ＋鼻すすり", val: "tear tracks, puffy eyes, runny nose, sniffling, exhausted" }
      ]
    },
    {
      title_ja: "🌫 不穏＋漫符",
      title_en: "Uncanny + Face Effects",
      children: [
        { id: "fx_face_uncanny_shadow", label: "不穏影顔演出セット", desc: "顔に影＋無表情＋圧", val: "shadow over face, blank_stare, eerie composure, unsettling, stillness" },
        { id: "fx_face_uncanny_blue", label: "青ざめ異常演出セット", desc: "青ざめ＋焦点ずれ＋不穏", val: "blue lines on face, misfocused eyes, uncanny, unstable, uneasy" },
        { id: "fx_face_uncanny_drool", label: "虚脱異常演出セット", desc: "よだれ＋虚ろ目＋理性薄れ", val: "drooling, vacant eyes, unfocused gaze, trance, abnormal" },
        { id: "fx_face_uncanny_crackshadow", label: "ひび影異常演出セット", desc: "顔のひび影＋無機質な圧", val: "cracked shadow effect, blank face, unsettling, eerie, uncanny" },
        { id: "fx_face_uncanny_pale", label: "顔面蒼白演出セット", desc: "蒼白＋焦点薄れ＋不吉", val: "pale face, unfocused eyes, ominous, uneasy, silent" },
        { id: "fx_face_uncanny_blank", label: "空白顔演出セット", desc: "無表情＋虚ろ目＋感情の欠落", val: "blank face, vacant stare, stillness, hollow calm, eerie" }
      ]
    },
    {
      title_ja: "😵 混乱＋漫符",
      title_en: "Confusion + Face Effects",
      children: [
        { id: "fx_face_confuse_shock", label: "ショック硬直演出セット", desc: "ショック線＋見開き＋絶句", val: "shock lines, wide eyes, open mouth, stunned, frozen" },
        { id: "fx_face_confuse_spiral", label: "混乱ぐるぐる演出セット", desc: "ぐるぐる目＋困惑マーク＋焦点迷子", val: "spiral eyes effect, scribble symbol, confused, unfocused eyes, reeling" },
        { id: "fx_face_confuse_gloom", label: "ガーン沈没演出セット", desc: "ガーン線＋顔面蒼白＋うなだれ", val: "gloom lines, pale face, downcast eyes, stunned, despair" },
        { id: "fx_face_confuse_sweat", label: "焦り汗混乱演出セット", desc: "汗＋きょろ目＋言葉迷子", val: "flying sweatdrops, darting eyes, confused, open mouth, flustered" },
        { id: "fx_face_confuse_blank", label: "理解停止演出セット", desc: "白目気味＋口あき＋停止", val: "blank stare, open mouth, unfocused eyes, frozen, mentally absent" },
        { id: "fx_face_confuse_shiver", label: "混乱震え演出セット", desc: "震え＋困惑線＋視線迷子", val: "trembling, confusion marks, unfocused gaze, anxious, reeling" },
        { id: "fx_face_confuse_qmark", label: "はてな混乱演出セット", desc: "はてな＋きょとん＋理解追いつかず", val: "question mark symbol, wide eyes, confused, tilting head, blank" },
        { id: "fx_face_confuse_mix", label: "疑問符焦燥演出セット", desc: "疑問符＋汗＋戸惑い", val: "question mark symbol, nervous sweat, darting eyes, confused, flustered" }
      ]
    },
    {
      title_ja: "😪 脱力＋漫符",
      title_en: "Exhaustion + Face Effects",
      children: [
        { id: "fx_face_spent_dark", label: "寝不足ぐったり演出セット", desc: "クマ＋ため息＋脱力", val: "dark circles under eyes, sigh, exhausted, looking afar, drained" },
        { id: "fx_face_spent_tear", label: "泣き疲れ演出セット", desc: "涙跡＋泣き腫れ＋放心", val: "tear tracks, puffy eyes, dazed, exhausted, trembling lips" },
        { id: "fx_face_spent_fever", label: "熱っぽい脱力演出セット", desc: "火照り＋汗だらだら＋うるみ目", val: "flushed face, sweat running down face, watery eyes, weak, feverish" },
        { id: "fx_face_spent_sigh", label: "ため息放心演出セット", desc: "ため息＋虚ろ目＋力抜け", val: "sigh, vacant eyes, limp, downcast face, drained" },
        { id: "fx_face_spent_droop", label: "まぶた落ち演出セット", desc: "半目＋頬ゆるみ＋脱力", val: "drooping eyelids, slack cheeks, exhausted, weak, absent-minded" },
        { id: "fx_face_spent_sweat", label: "やつれ汗演出セット", desc: "冷や汗＋青ざめ＋ぐったり", val: "cold sweat, pale face, exhausted, trembling lips, drained" },
        { id: "fx_face_spent_zzz", label: "眠気限界演出セット", desc: "ZZZ＋半目＋ふらつき", val: "zzz, drooping eyelids, exhausted, drowsy, reeling" },
        { id: "fx_face_spent_bubble", label: "寝落ち前演出セット", desc: "寝息バブル＋ぼんやり＋脱力", val: "sleeping bubble, spaced-out face, limp, drowsy, absent-minded" },
        { id: "fx_face_spent_blank2", label: "無気力ぼんやり演出セット", desc: "ぼんやり顔＋焦点抜け＋沈黙", val: "spaced-out face, blank face, unfocused eyes, drained, quiet" }
      ]
    }
  ]
}

    ],
  "📸 写真系エフェクトパック (Photo Effect Packs)": [
        { label: "映画調（Anamorphic Film）", desc: "王道フィルム", val: "(cinematic lighting), (anamorphic lens flare), (subtle film grain), (soft contrast curve), (teal-orange color grading)" },
        { label: "柔光夢幻（Soft Bloom）", desc: "ポートレート柔光", val: "(soft lighting), (subtle bloom), (gentle highlight roll-off), (pastel color grading), (low contrast)" },
        { label: "低キー陰影（Low-Key Noir）", desc: "影で語る", val: "(low-key lighting), (strong shadow contrast), (vignette), (desaturated color grading), (shadow emphasis)" },
        { label: "透明感強調（High-Key Clean）", desc: "清潔・商品", val: "(high-key lighting), (even exposure), (minimal shadow), (clean color balance), (highlight preservation)" },
        { label: "クラシック写真（Vintage Film）", desc: "古典フィルム", val: "(vintage film look), (warm color cast), (subtle grain), (lowered saturation), (soft vignette)" },
        { label: "スナップ自然光（Natural Light Photo）", desc: "撮れた感", val: "(natural lighting), (realistic exposure), (soft shadow transition), (neutral color grading), (documentary style)" },
        { label: "ドラマ照明（Dramatic Portrait）", desc: "人物立体感", val: "(rim lighting), (face-focused lighting), (controlled highlights), (contrast emphasis), (portrait color grading)" },
        { label: "逆光演出（Backlight Glow）", desc: "エモ逆光", val: "(strong backlight), (light bloom), (rim glow), (atmospheric haze), (highlight diffusion)" },
        { label: "高精細写真（Studio Sharp）", desc: "スタジオ硬質", val: "(studio lighting), (high clarity), (sharp detail), (controlled reflections), (neutral color tone)" },
        { label: "夜景写真（Night City Photo）", desc: "夜ネオン", val: "(night lighting), (neon highlights), (high dynamic range), (urban color grading), (light reflections)" },
        { label: "ホログラフィック（Holographic Foil）", desc: "虹色ホロ/反射", val: "(holographic), (iridescent), (rainbow diffraction), (prismatic highlights), (thin film interference), (specular highlight bloom)" }
      ],
  "🎮 ゲーム/3D系エフェクトパック (Game & 3D Effect Packs)": [
        { label: "リアルタイムGI（Lumen GI）", desc: "ゲーム的光", val: "(unreal engine 5), (lumen global illumination), (realistic lighting), (ambient occlusion), (high dynamic range)" },
        { label: "ホログラフィックUI（Holographic UI）", desc: "AR/HUD投影", val: "(holographic ui), (hologram overlay), (futuristic hud), (floating panels), (translucent interface), (neon cyan glow)" },
        { label: "PBR強調（PBR Boost）", desc: "材質の説得力", val: "(physically based rendering), (realistic textures), (specular response), (roughness variation), (clearcoat reflections)" },
        { label: "霧体積（Volumetric Fog）", desc: "空気が出る", val: "(volumetric lighting), (volumetric fog), (god rays), (atmospheric perspective), (light scattering)" },
        { label: "高密度ジオメトリ（Nanite Detail）", desc: "造形密度", val: "(nanite geometry), (ultra detailed), (micro details), (edge fidelity), (high poly)" },
        { label: "パストレ（Path Tracing）", desc: "物理寄り", val: "(path tracing), (ray tracing), (global illumination), (soft shadows), (accurate reflections)" },
        { label: "シネゲーム（Cinematic Game Look）", desc: "映画×ゲーム", val: "(cinematic lighting), (unreal engine rendering), (lens effects), (depth of field), (color grading)" },
        { label: "ハードシャドウ（Contact Shadow）", desc: "影を締める", val: "(contact shadow), (hard shadows), (ambient occlusion), (sharp edges), (high contrast)" },
        { label: "金属映り込み（Metal Reflections）", desc: "反射強め", val: "(environment reflections), (specular highlights), (anisotropic highlights), (reflection clarity), (polished metal)" }
      ],
  "🪩 ホログラフィックEX (Holographic EX)": [
        { label: "素材ホロセット（Material Holo）", desc: "衣装/表面/反射", val: "(holographic material), (iridescent surface), (rainbow diffraction), (prismatic reflection), (thin film interference), (light-reactive fabric), (transparent polymer), (specular highlight bloom)" },
        { label: "投影ホロセット（Projection Holo）", desc: "存在/幽体/輪郭", val: "(holographic projection), (semi-transparent body), (ethereal body made of light), (glowing edges), (volumetric light body), (digital particles), (floating hologram), (scanline shimmer)" },
        { label: "投影ホロ＋UI（Operator UI）", desc: "AR/HUD/操作卓", val: "(holographic operator), (floating UI panels), (holographic ui), (AR interface), (glowing data streams), (digital glyphs), (holographic screen), (translucent interface), (neon glow)" },

        { label: "状態変化（Flicker/Glitch）", desc: "ホロの揺らぎ/不安定", val: "(hologram flickering), (unstable holographic projection), (signal interference), (glitch shimmer), (scanline interference)" },
        { label: "状態変化（Phase Shift）", desc: "位相ズレ/断続", val: "(phase-shifting hologram), (partial data loss), (ghosting trails), (temporal jitter), (data dropout)" },
        { label: "感情同期（Emotional Sync）", desc: "感情が光になる", val: "(emotional resonance glow), (heartbeat-synced light pulse), (affection-linked brightness), (memory echo hologram), (emotional data feedback)" },
        { label: "強度：Subtle", desc: "控えめホロ", val: "(subtle holographic presence), (soft holographic glow), (thin scanlines), (low particle density)" },
        { label: "強度：Balanced", desc: "標準ホロ", val: "(balanced holographic projection), (moderate glow), (clean hologram edges), (stable data particles)" },
        { label: "強度：Intense", desc: "強めホロ", val: "(intense holographic glow), (bright edge bloom), (dense digital particles), (strong data streams)" },
        { label: "強度：Overwhelming", desc: "圧倒ホロ", val: "(overwhelming holographic emission), (blinding neon glow), (heavy scanlines), (hologram storm), (glitch overload)" },
        { label: "色プロファイル：Cyan-Blue", desc: "標準青緑", val: "(neon cyan glow), (cool blue hologram), (cyan highlights), (cool digital glow)" },
        { label: "色プロファイル：Warm Amber", desc: "温かい琥珀", val: "(warm amber hologram), (golden data glow), (soft warm emission), (amber highlights)" },
        { label: "色プロファイル：Magenta-Pink", desc: "妖艶ピンク", val: "(magenta hologram), (pink neon glow), (violet data light), (chromatic shimmer)" },
        { label: "色プロファイル：White-Gold", desc: "聖光ホロ", val: "(white-gold hologram), (holy luminous glow), (clean halo light), (soft white bloom)" },
        { label: "色プロファイル：Glitch Rainbow", desc: "虹グリッチ", val: "(glitch rainbow hologram), (prismatic noise), (chromatic aberration), (rainbow diffraction)" },
      ],

  "🧿 ホログラフィック・オペレーター×感情同期 (Holographic Operator Sync Combos)": [
        { label: "指令卓×接続の糸", desc: "手が触れそうで触れない", val: "(holographic operator), (hands almost touching but not overlapping:1.2), (glowing data strands), (floating UI panels), (bittersweet connection), (emotional resonance glow)" },
        { label: "治療/補修×低電力", desc: "壊れかけの優しさ", val: "(holographic operator), (low-power hologram mode), (soft ambient glow), (memory echo hologram), (warm gentle smile), (unstable holographic projection)" },
        { label: "戦闘後×ノイズ混じり", desc: "息とノイズの余韻", val: "(holographic operator), (signal interference), (hologram flickering), (volumetric lighting), (filmic contrast), (heartbeat-synced light pulse)" },
        { label: "別れ際×位相ズレ", desc: "輪郭が遠のく", val: "(holographic operator), (phase-shifting hologram), (partial data loss), (tears_in_eyes), (trembling_lips), (emotional data feedback)" },
        { label: "祝福×白金ホロ", desc: "聖域のリンク", val: "(white-gold hologram), (digital halo), (sacred geometric glyphs), (affection-linked brightness), (soft warm backlight), (gentle smile)" }
      ],

  "🧬 ホロ状態×表情シナジー (Holo State × Expression Synergy)": [
        { label: "Flicker × 動揺", desc: "ノイズ＝心拍", val: "(hologram flickering), (signal interference), nervous, blank_stare, sweatdrop, trembling_lips" },
        { label: "Low-Power × 眠気", desc: "光が薄い＝体温", val: "(low-power hologram mode), sleepy_eyes, half-closed_eyes, tired, soft ambient glow" },
        { label: "Phase Shift × ためらい", desc: "触れない境界", val: "(phase-shifting hologram), (hands almost touching but not overlapping:1.2), full-face_blush, looking_away, nervous_smile, memory echo hologram" },
        { label: "Data Loss × 泣き", desc: "欠けていく記憶", val: "(partial data loss), crying, streaming_tears, watery_eyes, emotional data feedback" },
        { label: "Glitch Overload × 狂気", desc: "光が裂ける", val: "(glitch overload), (unstable holographic projection), crazy_eyes, wide-eyed, evil_smile, stare" },
        { label: "Stable Projection × 誘惑", desc: "綺麗すぎる危うさ", val: "(balanced holographic projection), seductive_smile, half-closed_eyes, parted_lips, stare, clean hologram edges" }
      ],

  "🤖 メカ脳パック (Mechanical Packs)": [
        { label: "🧠 Mechanical Brain ON（設計者の脳）", desc: "設計思想・完成度の底上げ", val: "mechanical design, industrial design, precision engineering, production-ready design, functional design, orthographic design feel, clean silhouette, high fidelity details" },
        { label: "🔩 Hard Surface｜Clean（精密外装）", desc: "硬質で読みやすい外装言語", val: "sharp edges, chamfered edges, beveled edges, panel lines, tight tolerances, clean silhouette" },
        { label: "🔩 Hard Surface｜Dense（装甲密度）", desc: "装甲・パネル・部品感を濃く", val: "layered armor plates, interlocking panels, panel lines, greeble details, kitbash look, tight tolerances" },
        { label: "⚙️ Mechanical Structure｜Exposed（構造根拠）", desc: "動く理由・支える理由を足す", val: "exposed joints, actuators, hydraulic pistons, servo motors, gear assemblies, hinges, bearing housings, reinforced frame, load-bearing structure" },
        { label: "🏭 Manufactured Reality（製造の痕跡）", desc: "工程のリアリティで“玩具感”を消す", val: "machined parts, CNC machining marks, weld seams, rivets and bolts, brushed metal, anodized aluminum, powder-coated metal, heat discoloration, oil stains" },
        { label: "📐 Readable Mecha Detail（整理された密度）", desc: "注意ラベル/番号/整備印字で情報設計", val: "micro details, fine surface detail, decals, warning labels, serial numbers, maintenance markings, controlled greebles, edge wear, subtle scratches" },
        { label: "🌐 Mecha Context（文化圏）", desc: "軍用/宇宙/産業/近未来などの文脈", val: "mecha engineering, military hardware, aerospace hardware, robotics, industrial machinery, dieselpunk machinery, near-future tech" }
      ],
  "🏢 アニメスタジオ (Studios)": [
    {
      "label": "京都アニメーション",
      "val": "kyoto animation"
    },
    {
      "label": "ufotable",
      "val": "ufotable"
    },
    {
      "label": "SHAFT",
      "val": "shaft"
    },
    {
      "label": "TRIGGER",
      "val": "studio trigger"
    },
    {
      "label": "スタジオジブリ",
      "val": "studio ghibli"
    },
    {
      "label": "MAPPA",
      "val": "mappa"
    },
    {
      "label": "WIT STUDIO",
      "val": "wit studio"
    },
    {
      "label": "CloverWorks",
      "val": "cloverworks"
    },
    {
      "label": "A-1 Pictures",
      "val": "a-1 pictures"
    },
    {
      "label": "Production I.G",
      "val": "production i.g"
    },
    {
      "label": "サンライズ",
      "val": "sunrise"
    },
    {
      "label": "東映アニメーション",
      "val": "toei animation"
    },
    {
      "label": "P.A.WORKS",
      "val": "p.a. works"
    },
    {
      "label": "動画工房",
      "val": "doga kobo"
    }
  ],
  "🖌️ イラストレーター・画風 (Artists & Styles)": [
    {
      "label": "Mika Pikazo風",
      "val": "mika pikazo style"
    },
    {
      "label": "米山舞風",
      "val": "yoneyama mai style"
    },
    {
      "label": "ワダアルコ風",
      "val": "wada arco style"
    },
    {
      "label": "望月けい風",
      "val": "kei mochizuki style"
    },
    {
      "label": "副島成記風 (ペルソナ)",
      "val": "shigenori soejima style"
    },
    {
      "label": "新川洋司風 (MGS)",
      "val": "yoji shinkawa style"
    },
    {
      "label": "天野喜孝風 (FF)",
      "val": "yoshitaka amano style"
    },
    {
      "label": "村田蓮爾風",
      "val": "range murata style"
    },
    {
      "label": "カントク風",
      "val": "kantoku style"
    },
    {
      "label": "Tony風",
      "val": "tony taka style"
    },
    {
      "label": "redjuice風",
      "val": "redjuice style"
    },
    {
      "label": "huke風",
      "val": "huke style"
    },
    {
      "label": "深崎暮人風",
      "val": "misaki kurehito style"
    }
  ],
  "🎨 アート・絵画風 (Classic & Trad Art)": [
    {
      "label": "厚塗り・油絵",
      "val": "(oil painting), (impasto:1.2), (visible brushstrokes), (rich texture)"
    },
    {
      "label": "水彩画",
      "val": "(watercolor medium), (wet on wet), (soft edges), (splatter effect)"
    },
    {
      "label": "インク・水墨画",
      "val": "(ink wash painting), (sumi-e), (monochrome), (bold lines), (brush stroke)"
    },
    {
      "label": "スケッチ・鉛筆",
      "val": "(sketch), (pencil drawing), (rough lines), (graphite medium), (hatching)"
    },
    {
      "label": "線画",
      "val": "(line art), (monochrome), (clean lines), (minimalist), (white background)"
    },
    {
      "label": "浮世絵",
      "val": "(ukiyo-e style), (woodblock print), (flat perspective), (bold outlines), (washi paper texture)"
    },
    {
      "label": "ステンドグラス",
      "val": "(stained glass style), (vibrant light), (mosaic pattern), (black outline)"
    },
    {
      "label": "アール・ヌーヴォー",
      "val": "art nouveau, mucha style, intricate floral decoration, elegant curves"
    },
    {
      "label": "印象派",
      "val": "impressionism, claude monet style, visible brushstrokes, light reflection"
    },
    {
      "label": "切り絵",
      "val": "(paper cutout art), (layered paper), (shadow box), (3d depth)"
    }
  ],
  "🔮 現代アート・美学 (Modern Aesthetics)": [
    {
      "label": "ヴェイパーウェイヴ",
      "val": "vaporwave, aesthetic, neon pink and blue, retro computer, greek statues, glitch"
    },
    {
      "label": "シンセウェイヴ (80s)",
      "val": "synthwave, retrowave, neon grid, sunset, futuristic 80s, outrun"
    },
    {
      "label": "ローファイ (Lo-Fi)",
      "val": "lo-fi aesthetic, grainy, nostalgic, muted colors, anime study girl style"
    },
    {
      "label": "サイバーパンク",
      "val": "cyberpunk, high tech low life, neon lights, cybernetics, night city"
    },
    {
      "label": "スチームパンク",
      "val": "steampunk, brass, gears, victorian tech, goggles, steam engines"
    },
    {
      "label": "ピクセルアート",
      "val": "pixel art, 16-bit, retro game sprite, dithering"
    },
    {
      "label": "ボクセル",
      "val": "voxel art, minecraft style, 3d blocks, isometric view"
    },
    {
      "label": "フラットデザイン",
      "val": "flat design, minimalist, simple shapes, bright colors"
    },
    {
      "label": "グリッチアート",
      "val": "glitch art, datamoshing, digital noise, corrupted image, rgb shift"
    },
    {
      "label": "Y2K (2000年代)",
      "val": "y2k aesthetic, chrome, futuristic, glossy, holographic, transparent tech"
    }
  ],
  "🎭 なりきりおすすめセット｜職業・なりきり（現代） (Modern Jobs)": [
      { type: "pair_header", leftLabel: "🎭 なりきり", rightLabel: "📍 場所・状況" },
      { label: "アイドル・シマエナガ風", val: "(idol-style outfit), (white and pastel blue frilly dress), (feather embroidery), (fluffy sleeves), (short layered skirt), (down feather texture), (translucent ribbons), (soft feather hairclip), (idol stage), (spotlight)", desc: "シマエナガモチーフのアイドル衣装" },
      { label: "アイドル・ステージ", val: "(idol stage), (idol outfit), (spotlight), (microphone), (glow sticks), (cheering crowd), (performance)", desc: "アイドルライブの王道セット" },
      { label: "配信者・ストリーマー", val: "(streamer), (headset), (gaming chair), (RGB lights), (monitor glow), (chat overlay), (room setup)", desc: "配信部屋・配信画面演出" },
      { label: "探偵・捜査", val: "(detective), (trench coat), (notebook), (crime scene), (police tape), (flashlight), (serious)", desc: "現代ミステリー" },
      { label: "救急隊員・レスキュー", val: "(paramedic), (first aid kit), (ambulance interior), (emergency lights), (urgent atmosphere)", desc: "緊迫シチュ" },
      { label: "医師・手術室", val: "(surgeon), (scrubs), (surgical mask), (operating room), (surgical lights), (sterile)", desc: "医療・緊張感" },
      { label: "ナース・診察", val: "(nurse uniform), (clipboard), (hospital room), (medical checkup), (clean atmosphere)", desc: "診察・看護" },
      { label: "OL・オフィス", val: "(office lady), (business suit), (holding documents), (modern office), (desk work), (glasses)", desc: "仕事・日常" },
      { label: "バリスタ・カフェ", val: "(barista), (apron), (coffee machine), (latte art), (cafe interior), (warm lighting)", desc: "カフェシーン" },
      { label: "バーテンダー・バー", val: "(bartender), (shaker), (bar counter), (neon bar), (bottle shelves), (moody lighting)", desc: "夜の雰囲気" },
      { label: "記者・取材", val: "(journalist), (press badge), (camera), (microphone), (street interview), (news atmosphere)", desc: "現場取材" },
      { label: "警察・逮捕", val: "(police uniform), (handcuffs), (patrol car background), (justice), (commanding pose)", desc: "治安・制服" },
      { label: "巫女・神社", val: "(miko outfit), (shrine background), (sacred atmosphere), (red hakama), (sweeping leaves)", desc: "和風・神社" },
      { label: "バニーガール・カジノ", val: "(bunny girl suit), (casino), (roulette), (neon lights), (glamorous)", desc: "ナイト・娯楽" },
    
    { label: "救命救急医 / ER Doctor", val: "er doctor, emergency room, hospital corridor, scrubs, medical gloves, IV drip, flashing alarm light, dutch angle", desc: "場所: 救急外来 / 構図: dutch angle, motion blur" },
    { label: "保育士 / Nursery Teacher", val: "nursery teacher, kindergarten classroom, children toys, colorful posters, warm light, eye-level shot", desc: "場所: 保育園 / 構図: eye-level, candid" },
    { label: "美術館学芸員 / Museum Curator", val: "museum curator, art gallery, white walls, exhibition spotlight, clipboard, quiet atmosphere, medium shot", desc: "場所: 美術館 / 構図: medium shot, clean framing" },
    { label: "刑事 / Detective", val: "detective, interrogation room, harsh light, cigarette smoke, badge, over the shoulder", desc: "場所: 取調室 / 構図: over the shoulder, low key" },
    { label: "バーテンダー / Bartender", val: "bartender, cocktail bar, shaker, neon signs, bokeh, close-up hands", desc: "場所: バー / 構図: close-up, bokeh" },
    { label: "寿司職人 / Sushi Chef", val: "sushi chef, sushi counter, knife, fresh fish, steam, close-up", desc: "場所: 寿司屋カウンター / 構図: close-up, food focus" },
    { label: "新聞記者 / Reporter", val: "reporter, press conference, microphones, camera flashes, crowd, wide shot", desc: "場所: 記者会見 / 構図: wide shot, dynamic" },
    { label: "消防士 / Firefighter", val: "firefighter, fire station, fire truck, helmet, smoky background, heroic low angle", desc: "場所: 消防署/火災現場 / 構図: low angle, heroic" },
    { label: "整備士 / Mechanic", val: "mechanic, garage, toolbox, oil stains, car lift, three-quarter shot", desc: "場所: 整備工場 / 構図: three-quarter, gritty" },
    { label: "研究員 / Lab Researcher", val: "lab researcher, laboratory, test tubes, holographic screen, clean light, medium close-up", desc: "場所: 研究室 / 構図: medium close-up, sterile" },
    { label: "弁護士 / Lawyer", val: "lawyer, courtroom, suit, documents, judge bench, centered composition", desc: "場所: 法廷 / 構図: centered, formal" },
    { label: "シェフ（高級店） / Fine Dining Chef", val: "fine dining chef, kitchen pass, plating, steam, spotlight, top-down detail", desc: "場所: レストラン厨房 / 構図: top-down detail, cinematic" },
    { label: "DJ / Club DJ", val: "dj, nightclub, turntable, strobe lights, crowd hands, wide angle", desc: "場所: クラブ / 構図: wide angle, motion" },
    { label: "天気予報士 / Weathercaster", val: "weathercaster, studio, green screen map, pointer, bright light, medium shot", desc: "場所: TVスタジオ / 構図: medium shot, clean" },
],

  "🎭 なりきりおすすめセット｜おすすめ組み合わせ（なりきり×場所） (Roleplay × Situation)": [
    { label: "アイドル × ステージ", val: "(idol performance), (concert stage), (spotlight), (cheering crowd), (glow sticks), (stage smoke)", desc: "王道ライブ空間" },
    { label: "探偵 × 雨の路地", val: "(detective), (rainy alley), (neon sign), (wet asphalt reflections), (streetlamp fog)", desc: "ノワール調の緊張" },
    { label: "バーテンダー × ネオンバー", val: "(bartender), (neon bar), (bottle shelves), (low light), (backlit glass)", desc: "夜の艶と会話" },
    { label: "医師 × 手術室", val: "(doctor), (operating room), (surgical lights), (sterile atmosphere)", desc: "緊迫の白い光" },
    { label: "配信者 × 配信部屋", val: "(streamer), (streaming room), (LED lights), (monitor glow), (chat overlay)", desc: "現代の熱狂" },
    { label: "救急隊員 × 夜の救急現場", val: "(paramedic), (night emergency scene), (ambulance lights), (rain mist)", desc: "サイレンの光" },
    { label: "アーチャー × 森の狩場", val: "(archer), (forest clearing), (sunbeams), (falling leaves)", desc: "静かな集中" },
    { label: "シーフ × 城塞の回廊", val: "(thief), (castle corridor), (torch light), (stone floor)", desc: "影の疾走" },
    { label: "スチーム技工士 × 工房", val: "(steampunk engineer), (workshop), (gears), (steam haze), (brass tools)", desc: "歯車と蒸気" },
    { label: "サイバーハッカー × ネオン街", val: "(cyber hacker), (neon city), (holograms), (rain), (wires)", desc: "電脳の深夜" },
    { label: "宇宙パイロット × 宇宙港", val: "(space pilot), (spaceport), (hangar lights), (spaceship)", desc: "発進前夜" },
    { label: "魔法使い × 古塔の書庫", val: "(mage), (ancient library), (floating candles), (dust motes)", desc: "禁書の気配" },
  ],

"🎭 なりきりおすすめセット｜職業・なりきり（未来/サイバーパンク） (Future & Cyber Jobs)": [
      { label: "サイバーパンク・ネトランナー", val: "(cyberpunk netrunner), (holographic UI), (neon city), (data cables), (visor), (street tech)", desc: "情報戦・都市夜景" },
      { label: "サイバーパンク・メカニック", val: "(cyberpunk mechanic), (tool belt), (workshop), (sparks), (chrome parts), (garage)", desc: "整備工房" },
      { label: "企業エージェント", val: "(corporate agent), (sleek suit), (neon office), (hologram screen), (cold lighting)", desc: "近未来コーポ" },
      { label: "ホログラフィックオペレーター（存在定義）", desc: "投影人格/光の身体", val: "(holographic operator:1.5), (clearly female:1.4), (semi-transparent figure:1.3), (ethereal body made of light:1.3), (glowing edges:1.3), (digital circuits faintly visible:1.2), (long translucent blue hair:1.4), (warm gentle smile:1.4), (soft facial features:1.3)" },
      { label: "リアル×ホロ接続（関係演出）", desc: "触れそうで触れない距離", val: "standing close, slightly floating, (hands almost touching but not overlapping:1.4), glowing data strands connecting their hands, reflected light paints their faces, bittersweet connection, (emotional realism:1.3)" },
      { label: "未来指令室・ホロ環境（シーン）", desc: "操作卓/星空/AR空間", val: "futuristic control deck, filled with holographic interfaces, panoramic glass window, stars and nebulae outside, soft warm backlight, cool digital glow, cinematic mid-shot, side angle showing both profiles" },
      { label: "バウンティハンター", val: "(bounty hunter), (tactical gear), (neon alley), (wanted poster), (rainy night)", desc: "賞金稼ぎ" },
      { label: "ドローンオペレーター", val: "(drone operator), (remote controller), (HUD), (surveillance drones), (rooftop)", desc: "監視・索敵" },
      { label: "アンドロイド技師", val: "(android engineer), (repair tools), (lab), (assembly line), (clean sci-fi)", desc: "研究室・工房" },
      { label: "宇宙船パイロット", val: "(space pilot), (flight suit), (cockpit), (starfield), (dashboard glow)", desc: "コックピット" },
      { label: "スペースマリーン", val: "(space marine), (power armor), (hangar bay), (warning lights), (combat readiness)", desc: "SF戦闘" },
      { label: "ホログラムDJ", val: "(hologram DJ), (club stage), (laser lights), (holographic turntables), (crowd)", desc: "近未来ライブ" },
      { label: "近未来アイドル・ARステージ", val: "(future idol), (AR stage), (holographic effects), (neon spotlight), (cheering crowd)", desc: "SFアイドル" },
      { label: "ディーゼルパンク技師", val: "(dieselpunk engineer), (goggles), (oil stains), (factory), (steam), (industrial)", desc: "重工業SF" },
    
    { label: "ネットランナー / Netrunner", val: "netrunner, cyber deck, neon alley, holographic UI, rain, pov", desc: "場所: ネオン路地 / 構図: POV, rain & neon" },
    { label: "義体整備士 / Cyberware Tech", val: "cyberware technician, aug clinic, surgical tools, chrome limbs, close-up", desc: "場所: 義体クリニック / 構図: close-up, sterile neon" },
    { label: "ドローン操縦士 / Drone Pilot", val: "drone pilot, rooftop, controller, swarm drones, city night, over the shoulder", desc: "場所: 屋上 / 構図: over the shoulder, skyline" },
    { label: "宇宙港管制官 / Spaceport Controller", val: "spaceport controller, control room, radar screens, shuttle window, wide shot", desc: "場所: 宇宙港管制室 / 構図: wide shot, screens" },
    { label: "惑星探査員 / Planet Explorer", val: "planet explorer, alien desert, suit, visor reflection, low angle", desc: "場所: 異星砂漠 / 構図: low angle, epic" },
    { label: "AI調律師 / AI Whisperer", val: "ai whisperer, server cathedral, floating panels, soft glow, centered", desc: "場所: サーバー聖堂 / 構図: centered, ethereal" },
    { label: "量子セキュリティ / Quantum Security", val: "quantum security, vault door, laser grid, tactical suit, dutch angle", desc: "場所: 量子金庫 / 構図: dutch angle, tension" },
    { label: "メカ医師 / Mecha Medic", val: "mecha medic, hangar, giant mech, repair arms, wide", desc: "場所: メカ格納庫 / 構図: wide, scale" },
    { label: "ARストリートアーティスト / AR Street Artist", val: "ar street artist, graffiti hologram, underpass, vibrant, wide angle", desc: "場所: 高架下 / 構図: wide angle, color" },
    { label: "未来考古学者 / Future Archaeologist", val: "future archaeologist, ruin with drones, scanning beam, sunset, three-quarter", desc: "場所: 遺跡 / 構図: three-quarter, scan beams" },
    { label: "バイオハッカー / Biohacker", val: "biohacker, underground lab, bio pods, green glow, close-up face", desc: "場所: 地下ラボ / 構図: close-up, eerie" },
],

"🎭 なりきりおすすめセット｜職業・なりきり（ファンタジー/スチーム） (Fantasy & Steam Jobs)": [
      { label: "アーチャー", val: "(archer), (bow), (quiver), (forest), (wind), (focused gaze)", desc: "弓兵・森" },
      { label: "シーフ", val: "(thief), (hood), (dagger), (rooftops), (moonlight), (stealth)", desc: "盗賊・夜" },
      { label: "アサシン", val: "(assassin), (dual daggers), (cloak), (dark alley), (silent)", desc: "暗殺者" },
      { label: "メイジ", val: "(mage), (magic circle), (spellcasting), (arcane glow), (ruins)", desc: "魔法使い" },
      { label: "クレリック", val: "(cleric), (holy staff), (cathedral), (soft holy light), (prayer)", desc: "聖職者" },
      { label: "パラディン", val: "(paladin), (holy armor), (shield), (temple), (divine aura)", desc: "聖騎士" },
      { label: "バード", val: "(bard), (lute), (tavern), (warm candlelight), (singing)", desc: "吟遊詩人" },
      { label: "アルケミスト", val: "(alchemist), (vials), (workbench), (books), (potion steam), (laboratory)", desc: "錬金術師" },
      { label: "スチームパンク技工士", val: "(steampunk artificer), (goggles), (gear tools), (workshop), (steam), (brass)", desc: "歯車工房" },
      { label: "ドラゴンライダー", val: "(dragon rider), (saddle), (cliff), (stormy sky), (epic)", desc: "騎竜" },
      { label: "デーモンハンター", val: "(demon hunter), (runes), (dark forest), (ember glow), (grim)", desc: "魔狩り" },
      { label: "王国騎士", val: "(knight), (castle courtyard), (sword), (banner), (heroic)", desc: "騎士・城" },
    
    { label: "アーチャー / Archer", val: "archer, forest clearing, bow drawn, leaves, dynamic shot, three-quarter", desc: "場所: 森 / 構図: three-quarter, action" },
    { label: "シーフ / Thief", val: "thief, moonlit rooftop, hood, dagger, stealth, low angle", desc: "場所: 屋根上 / 構図: low angle, moonlight" },
    { label: "神官 / Priest", val: "priest, cathedral, stained glass, prayer, god rays, centered", desc: "場所: 大聖堂 / 構図: centered, god rays" },
    { label: "錬金術師 / Alchemist", val: "alchemist, workshop, bubbling potions, runes, close-up hands", desc: "場所: 工房 / 構図: close-up, props" },
    { label: "吟遊詩人 / Bard", val: "bard, tavern stage, lute, audience, warm light, medium shot", desc: "場所: 酒場 / 構図: medium, cozy" },
    { label: "魔導書司書 / Arcane Librarian", val: "arcane librarian, ancient library, floating books, candlelight, wide", desc: "場所: 魔導図書館 / 構図: wide, depth" },
    { label: "竜騎士 / Dragoon", val: "dragoon, cliff, spear, dragon silhouette, low angle epic", desc: "場所: 断崖 / 構図: low angle, epic" },
    { label: "召喚士 / Summoner", val: "summoner, magic circle, particles, night, top-down circle", desc: "場所: 召喚陣 / 構図: top-down, ritual" },
    { label: "鍛冶師 / Blacksmith", val: "blacksmith, forge, sparks, hammer, close-up, rim light", desc: "場所: 鍛冶場 / 構図: close-up, sparks" },
    { label: "獣医（幻想獣） / Beast Healer", val: "beast healer, stable, mythical creature, bandage, gentle, medium close-up", desc: "場所: 厩舎 / 構図: medium close-up, tender" },
    { label: "スチームパンク技工士 / Steampunk Artificer", val: "steampunk artificer, gear workshop, brass goggles, steam, three-quarter", desc: "場所: 歯車工房 / 構図: three-quarter, steam" },
    { label: "空賊 / Sky Pirate", val: "sky pirate, airship deck, wind, flag, wide angle", desc: "場所: 飛空艇甲板 / 構図: wide, sky" },
],
    // --- ↓この部分を追加↓ ---
    "🎭 なりきりおすすめセット｜職業・なりきり（王道キャラ） (Famous Characters)": [
      { label: "初音ミク (Miku)", val: "hatsune miku, vocaloid, twintails, teal hair, futuristic outfit", desc: "ツインテールの歌姫" },
      { label: "アリス (Alice)", val: "alice in wonderland, blonde hair, blue dress, white apron, hairband", desc: "不思議の国のアリス" },
      { label: "赤ずきん (Red Riding Hood)", val: "little red riding hood, red hood, red cape, basket", desc: "童話の赤ずきん" },
      { label: "シャーロック・ホームズ", val: "sherlock holmes, deerstalker, pipe, trench coat", desc: "名探偵" },
      { label: "ドラキュラ伯爵", val: "count dracula, vampire, black cape, formal suit, fangs", desc: "吸血鬼" },
      { label: "フランケンシュタイン", val: "frankenstein's monster, bolts in neck, stitches, green skin, giant", desc: "人造人間" }
    ],
    "🎭 なりきりおすすめセット｜職業・なりきり（概念コスプレ） (Conceptual Cosplay)": [
      { label: "眼帯の戦闘メイド (2B風)", val: "(blindfold:1.2), (black gothic dress:1.1), (white short hair), (black thighhighs), (thigh cutout), (black gloves), (sword)", desc: "名前を出さずに2B風" },
      { label: "金髪の騎士王 (セイバー風)", val: "(blonde hair), (braided bun), (blue dress), (silver armor), (gauntlets), (holding glowing sword), (knight king)", desc: "名前を出さずにセイバー風" },
      { label: "白髪の魔法使い (フリーレン風)", val: "(white twintails), (pointy ears), (white cape), (gold earrings), (holding staff), (flat chest), (calm expression)", desc: "名前を出さずにフリーレン風" },
      { label: "黒髪の暗殺者 (ヨル風)", val: "(black hair), (hairband), (black backless dress), (red inside dress), (thigh-high boots), (golden stilettos weapons), (red eyes)", desc: "名前を出さずにヨル風" },
      { label: "星眼のアイドル (アイ風)", val: "(purple hair), (star-shaped pupils:1.2), (idol outfit), (microphone), (sparkling eyes), (vibrant colors), (charismatic smile)", desc: "名前を出さずにアイ風" }, 
{ label: "ブラックマジシャンガール", val: "dark magician girl, blonde hair, pink and blue magic hat, pink and blue wizard outfit, pink capelet, magic wand, hexagram pendant", desc: "遊戯王：伝説の魔導師" },
      { label: "リアス・グレモリー", val: "rias gremory, crimson long hair, blue eyes, high school uniform, black devil wings, voluptuous figure", desc: "ハイスクールD×D：紅髪の滅殺姫" },
      { label: "ララ・デビルーク", val: "lala satalin deviluke, pink long hair, green eyes, slender, pointed devil tail with heart tip, innocent smile", desc: "To LOVEる：デビルーク星の第一王女" },
      { label: "金色の闇 (ヤミ)", val: "golden darkness, blonde hair in long twin braids, black gothic dress, red eyes, hair as weapons, expressionless", desc: "To LOVEる：宇宙最高の暗殺者" },
      { label: "レム (Rem)", val: "rem (re:zero), blue short hair, large blue eyes, maid outfit, pink flower hair ornament, dedicated expression", desc: "Re:ゼロ：ロズワール邸のメイド" },
      { label: "セイバー (Saber)", val: "artoria pendragon, blonde hair, braided bun, blue dress, silver plate armor, holding invisible sword, regal aura", desc: "Fate：騎士王" },
      { label: "ラム (Ram)", val: "ram (re:zero), pink short hair, large pink eyes, maid outfit, purple hair clip, sharp gaze", desc: "Re:ゼロ：毒舌な姉メイド" }
    ],

  
"🎭 なりきりおすすめセット｜職業・なりきり（天界｜固有名） (Celestial Named Personas)": [
    { label: "🟨 ✦G ガブリエル / Gabriel", val: "gabriel motif, archangel of annunciation, divine messenger, heavenly proclamation, radiant white wings, layered halo rings, luminous trumpet motif, sacred scrolls, serene authority, holy revelation aura", desc: "固有名 / 神託と伝令の大天使像 / 関連: ✦G 神託の伝令・大天使級" },
    { label: "🟧 ✦M ミカエル / Michael", val: "archangel michael motif, heavenly commander, divine judgment, six wings, radiant halo crown, celestial armor, sacred execution blade, holy war standard, overwhelming authority, victorious divine presence", desc: "固有名 / 天の軍勢を率いる大天使長像 / 関連: ✦M 天界の使徒長・熾天級" },
    { label: "🟩 ✦R ラファエル / Raphael", val: "archangel raphael motif, holy healer, sacred restoration, healing light, blessing aura, gentle halo glow, restoration sigils, pure feathers, merciful divinity, pilgrimage guardian", desc: "固有名 / 癒やしと加護の大天使像 / 関連: ✦R 聖域の守護者・智天級" },
    { label: "🟠 ✦U ウリエル / Uriel", val: "archangel uriel motif, divine flame, sacred wisdom, burning halo, judgment fire, scripture of light, solemn celestial presence, revelation fire, radiant severity", desc: "固有名 / 炎と叡智を帯びる天使像 / 関連: ✦U 審判の執行者・座天級" }
  ],

"🎭 なりきりおすすめセット｜職業・なりきり（天界｜役職・称号） (Celestial Titles)": [
    { label: "🟨 ✦G 神託の伝令 / Oracle Messenger", val: "oracle messenger, divine message bearer, luminous scrolls, sacred whisper, halo light, annunciation motif, calm reverence, revelation script aura", desc: "役職・称号 / 神意を届ける者 / 関連: ✦G ガブリエル・大天使級" },
    { label: "🟧 ✦M 天界の使徒長 / Heavenly Apostle Commander", val: "heavenly apostle commander, divine envoy leader, sacred decree, radiant authority, celestial hierarchy, holy mandate, heavenly command regalia, proclamation standard, commander halo authority", desc: "役職・称号 / 天界の伝令長 / 関連: ✦M ミカエル・熾天級" },
    { label: "🟩 ✦R 聖域の守護者 / Guardian of the Sanctuary", val: "guardian of the sanctuary, holy protector, sacred barrier, divine vigilance, temple light, sanctum key motif, solemn protection, consecrated defense aura", desc: "役職・称号 / 神域を守る守護位 / 関連: ✦R ラファエル・智天級" },
    { label: "🟠 ✦U 審判の執行者 / Executor of Judgment", val: "executor of divine judgment, blazing halo, radiant authority, sacred sentence, celestial tribunal, execution blade motif, overwhelming holy presence, law of heaven aura", desc: "役職・称号 / 裁きの執行位 / 関連: ✦U ウリエル・座天級" }
  ],

"🎭 なりきりおすすめセット｜職業・なりきり（天界｜格・位階） (Celestial Rank)": [
    { label: "🟨 ✦G 大天使級 / Archangel Class", val: "archangel-class being, divine authority, layered halo rings, large holy wings, sacred command presence, heavenly regalia, upper celestial hierarchy", desc: "格・位階 / 上位の天使格 / 関連: ✦G ガブリエル・神託の伝令" },
    { label: "🟧 ✦M 熾天級 / Seraphic Class", val: "seraphic-class being, six wings, burning holy feathers, blazing halo crown, highest celestial fervor, living flame of worship, supreme holy authority", desc: "格・位階 / 最上位の灼熱聖性 / 関連: ✦M ミカエル・天界の使徒長" },
    { label: "🟩 ✦R 智天級 / Cherubic Class", val: "cherubic-class being, sacred wisdom, layered wings, luminous many-eye motif, divine understanding aura, guardian intellect, serene heavenly knowledge", desc: "格・位階 / 叡智と守護を帯びる高位格 / 関連: ✦R ラファエル・聖域の守護者" },
    { label: "🟠 ✦U 座天級 / Throne Class", val: "throne-class being, wheel of light motif, celestial tribunal gravity, burning judgment aura, solemn heavenly law, radiant orbiting sigils, throne halo ring", desc: "格・位階 / 裁きと権威を宿す座天格 / 関連: ✦U ウリエル・審判の執行者" }
  ],

"🎭 なりきりおすすめセット｜職業・なりきり（深淵｜固有名） (Infernal Named Personas)": [
    { label: "🟪 ✦L ルシフェル / Lucifer", val: "lucifer motif, supreme fallen angel, black wings, broken halo, fallen morning star motif, supreme beauty, abyssal pride, corrupted divinity, fallen sovereign aura, tragic radiance", desc: "固有名 / 堕天した光の王像 / 関連: ✦L 堕天の王・堕天使上位種" },
    { label: "🟥 ✦S サタン / Satan", val: "satan motif, infernal ruler, abyssal authority, demon king aura, infernal throne dominion, overwhelming dark presence, hell sovereign sigils, absolute rebellion, sovereign menace", desc: "固有名 / 深淵の支配者像 / 関連: ✦S 冥府の支配者・魔王級" },
    { label: "🟫 ✦B ベルゼブブ / Beelzebub", val: "beelzebub motif, archdemon lord, decadent infernal nobility, infernal wings, demonic prestige, abyssal decadence, lord of corruption, dark aristocratic aura, banquet of ruin motif", desc: "固有名 / 大悪魔貴族像 / 関連: ✦B 深淵の統治者・大悪魔級" }
  ],

"🎭 なりきりおすすめセット｜職業・なりきり（深淵｜役職・称号） (Infernal Titles)": [
    { label: "🟪 ✦L 堕天の王 / King of the Fallen", val: "king of the fallen, broken halo, black feathered wings, abyssal crown, fallen majesty, corrupted radiance, throne of ruin motif, fallen dominion aura", desc: "役職・称号 / 堕天勢力の王 / 関連: ✦L ルシフェル・堕天使上位種" },
    { label: "🟥 ✦S 冥府の支配者 / Ruler of the Underworld", val: "ruler of the underworld, infernal throne, abyssal flames, sovereign darkness, fearsome authority, hell dominion, underworld scepter motif, deathly imperial aura", desc: "役職・称号 / 冥府の統治者 / 関連: ✦S サタン・魔王級" },
    { label: "🟫 ✦B 深淵の統治者 / Abyssal Sovereign", val: "abyssal sovereign, dark aura mantle, floating curse sigils, oppressive pressure, infernal command, abyssal seal authority, lord of the deep dark, decadent abyssal regalia", desc: "役職・称号 / 深淵を治める者 / 関連: ✦B ベルゼブブ・大悪魔級" },
    { label: "🟫 ✦B 奈落の大公 / Grand Duke of the Abyss", val: "grand duke of the abyss, demon nobility, crown-like horns, abyssal prestige, aristocratic darkness, infernal heraldry, abyss court regalia, decadent court menace", desc: "役職・称号 / 深淵貴族の最高位 / 関連: ✦B ベルゼブブ・大悪魔級" }
  ],

"🎭 なりきりおすすめセット｜職業・なりきり（深淵｜格・位階） (Infernal Rank)": [
    { label: "🟪 ✦L 堕天使上位種 / High Fallen Angel Class", val: "high fallen angel class, corrupted halo, black holy wings, broken divinity, tragic majesty, abyssal grace, fallen star symbolism, ruined holiness", desc: "格・位階 / 上位堕天使格 / 関連: ✦L ルシフェル・堕天の王" },
    { label: "🟥 ✦S 魔王級 / Demon King Class", val: "demon-king-class being, massive demonic wings, infernal crown horns, abyssal pressure, sovereign dark aura, infernal throne authority, world-ending menace", desc: "格・位階 / 魔王級の格 / 関連: ✦S サタン・冥府の支配者" },
    { label: "🟫 ✦B 大悪魔級 / Archdemon Class", val: "archdemon-class being, infernal mantle, abyss nobility, corrupted regalia, overwhelming demonic prestige, lord of corruption aura, abyssal court menace", desc: "格・位階 / 大悪魔の高位威圧 / 関連: ✦B ベルゼブブ・深淵の統治者" },
    { label: "🟪 ✦L 深淵君主級 / Abyssal Lord Class", val: "abyssal-lord-class being, infernal mantle, dark command aura, floating curse seals, sovereign underworld presence, abyssal seal authority, hellbound majesty", desc: "格・位階 / 深淵君主の威圧 / 関連: ✦L ルシフェル・堕天の王" }
  ],

"🎭 なりきりおすすめセット｜おすすめ組み合わせ（天界） (Celestial Combos)": [
    { label: "✦G ガブリエル × 神託降臨", val: "gabriel motif, archangel of annunciation, divine proclamation, sacred scroll, luminous trumpet motif, serene descent, radiant light shaft, holy revelation aura", desc: "神託を告げる降臨" },
    { label: "✦M ミカエル × 天軍出陣", val: "archangel michael motif, heavenly commander, six wings, celestial armor, sacred execution blade, holy war standard, heavenly army departure, victorious divine presence", desc: "聖戦の指揮官" },
    { label: "✦R ラファエル × 加護の奇跡", val: "archangel raphael motif, holy healer, sacred restoration, healing light, blessing aura, granting blessing, miracle atmosphere, gentle halo glow", desc: "癒しと加護の完成形" },
    { label: "✦U ウリエル × 審判の炎", val: "archangel uriel motif, divine flame, judgment fire, throne halo ring, sacred scripture, overlooking judgment, blazing holy light, radiant severity", desc: "裁きの炎と権威" },
    { label: "✦M 熾天級 × 玉座の間", val: "seraph-class being, living flame of worship, radiant halo crown, many wings, celestial throne room, divine throne, sacred banners, holy majesty", desc: "高位天使の荘厳" },
    { label: "✦G 大天使級 × 雲上神域", val: "archangel-class being, layered halo rings, radiant white wings, cloud realm, floating islands, divine atmosphere, heavenly vastness", desc: "王道の天界イメージ" }
  ],

"🎭 なりきりおすすめセット｜おすすめ組み合わせ（深淵） (Infernal Combos)": [
    { label: "✦L ルシフェル × 堕天降臨", val: "lucifer motif, supreme fallen angel, broken halo, black wings, fallen morning star motif, fallen angel descent, tragic radiance, ruined divinity", desc: "堕天の象徴的瞬間" },
    { label: "✦S サタン × 奈落の玉座", val: "satan motif, infernal ruler, abyssal authority, demon king aura, abyssal throne, infernal palace, hell sovereign sigils, overwhelming dark presence", desc: "冥府支配者の完成形" },
    { label: "✦B ベルゼブブ × 退廃宮殿", val: "beelzebub motif, archdemon lord, decadent infernal nobility, infernal wings, underworld palace, infernal court, banquet of ruin motif, dark aristocratic aura", desc: "退廃と魔界貴族性" },
    { label: "✦S 魔王級 × 黒炎祭壇", val: "demon-king-class being, infernal crown horns, massive demonic wings, black flame altar, cursed fire, apocalyptic pressure, infernal throne authority", desc: "王級の破滅感" },
    { label: "✦L 堕天使上位種 × 崩れた神殿", val: "high fallen angel class, corrupted halo, black holy wings, ruined holy temple, broken pillars, ash, tragic majesty, fallen star symbolism", desc: "堕天の美と崩壊" },
    { label: "✦L 深淵君主級 × 虚無の回廊", val: "abyssal-lord-class being, floating curse seals, void corridor, endless darkness, hellbound majesty, sovereign underworld presence", desc: "最奥の深淵君主" }
  ],

"📐 おすすめ構図｜😇 天界向け (Celestial Compositions)": [
    { title_ja: "天界：正面降臨", title_en: "Celestial: frontal descent", val: "frontal descent composition, centered symmetry, radiant backlight", desc: "神聖な降臨の正面構図" },
    { title_ja: "天界：荘厳中央", title_en: "Celestial: majestic center", val: "majestic centered composition, cathedral-like symmetry, halo emphasis", desc: "威光を中央で見せる" },
    { title_ja: "天界：背後光輪", title_en: "Celestial: halo back framing", val: "back halo framing, radiant silhouette, sacred symmetry", desc: "光輪と背光を活かす" },
    { title_ja: "天界：六翼展開", title_en: "Celestial: wings spread", val: "full wing spread composition, expansive framing, divine scale", desc: "多翼・六翼の迫力" },
    { title_ja: "天界：玉座正面", title_en: "Celestial: throne front", val: "throne front composition, low angle, sacred authority", desc: "玉座と権威を見せる" },
    { title_ja: "天界：加護の包囲", title_en: "Celestial: blessing embrace", val: "embracing blessing composition, gentle light, protective framing", desc: "慈悲と癒しの構図" }
  ],

"📐 おすすめ構図｜😈 深淵向け (Infernal Compositions)": [
    { title_ja: "深淵：王座支配", title_en: "Infernal: throne dominion", val: "throne dominion composition, low angle, oppressive framing", desc: "支配者としての威圧" },
    { title_ja: "深淵：堕天降臨", title_en: "Infernal: fallen descent", val: "fallen descent composition, broken halo silhouette, dramatic backlight", desc: "堕天の劇的演出" },
    { title_ja: "深淵：黒翼包囲", title_en: "Infernal: black wings surround", val: "black wings surrounding frame, dark vignette, enclosed menace", desc: "黒翼と圧迫感を見せる" },
    { title_ja: "深淵：奈落見下ろし", title_en: "Infernal: abyss overlook", val: "abyss overlook composition, high throne viewpoint, infernal scale", desc: "冥府を見下ろす俯瞰" },
    { title_ja: "深淵：背光破滅", title_en: "Infernal: ruin backlight", val: "ruin backlight composition, black flame silhouette, apocalyptic framing", desc: "終焉感を強める" },
    { title_ja: "深淵：呪印展開", title_en: "Infernal: curse sigil spread", val: "curse sigil spread composition, diagonal force, infernal energy burst", desc: "呪印と魔力を見せる" }
  ],

"🎭 なりきりおすすめセット｜神獣・伝説なりきり (Mythic Beasts)": [
    
{
  label: "青龍 / Seiryu",
  val: "seiryu beastkin, true eastern dragon fusion entity, mythic divine creature, not humanoid cosplay, biological dragon anatomy as primary form, eastern dragon god presence, humanoid girl with a clearly human face (no animal muzzle), long azure dragon horns sweeping backward, large flowing dragon tail covered in blue-green scales, scaled skin along arms, back, thighs (azure dragon scales), dragon claws on hands and feet, ethereal whisker-like tendrils near the face, glowing cyan dragon eyes accent, wind and cloud aura swirling around the body, not cosplay, true eastern dragon fusion form",
  desc: "四神：東・青龍（東洋龍融合）"
}
,
    {
      label: "青龍（ペア補助） / Seiryu (Pair Helper)",
      val: "(male seiryu dragon prince robes), (female seiryu dragon shrine dress), (paired seiryu duo), (azure eastern dragon aura), (storm clouds), (wind and cloud currents), (jade lightning), (sacred sky stage), (long dragon silhouette), (divine eastern myth tension)",
      desc: "男女ペア向け補助語つき青龍神演出"
    },
{
  label: "白虎 / Byakko",
  val: "byakko beastkin, humanoid girl with a clearly human face (no animal muzzle), thick white tiger fur covering body, bold black tiger stripes clearly visible, tiger ears and sharp feline fangs, powerful digitigrade tiger legs, long striped tiger tail, clawed hands and feet, piercing golden predator eyes accent, ferocious guardian beast aura, not cosplay, true white tiger fusion form",
  desc: "四神：西・白虎（白虎融合）"
}
,
    {
      label: "白虎（ペア補助） / Byakko (Pair Helper)",
      val: "(male byakko white tiger warrior attire), (female byakko sacred beast dress), (paired byakko duo), (white tiger guardian aura), (moonlit stone court), (wind-swept fur), (golden predator glow), (sacred beast stance), (battle tension), (divine fang presence)",
      desc: "男女ペア向け補助語つき白虎守護演出"
    },
{
  label: "朱雀 / Suzaku",
  val: "suzaku beastkin, humanoid girl with a clearly human face (no animal beak), large fiery bird wings spreading from her back, feathered arms with red and gold plumage, long flowing tail feathers like flames, subtle feather textures across shoulders and hips, embers floating around the body, crimson glowing eyes accent, sacred fire bird aura, not cosplay, true divine bird fusion form",
  desc: "四神：南・朱雀（火鳥融合）"
}
,
    {
      label: "朱雀（ペア補助） / Suzaku (Pair Helper)",
      val: "(male suzaku flame prince attire), (female suzaku vermilion feather dress), (paired suzaku duo), (sacred fire bird aura), (crimson sky stage), (embers and feathers), (burning wing silhouette), (sunlit shrine glow), (rebirth flames), (divine bird tension)",
      desc: "男女ペア向け補助語つき朱雀聖火演出"
    },
{
  label: "麒麟 / Qilin",
  val: "qilin beastkin, humanoid girl with a clearly human face (no animal muzzle), single curved qilin horn on the forehead, scaled body with soft golden and jade tones, deer-like digitigrade legs with glowing hooves, lion-like tail with flowing fur, subtle flame and cloud motifs along the body, gentle luminous eyes accent, sacred auspicious beast aura, not cosplay, true qilin fusion form",
  desc: "四神：中央・麒麟（瑞獣融合）"
}
,
    {
      label: "麒麟（ペア補助） / Qilin (Pair Helper)",
      val: "(male qilin noble prince robes), (female qilin auspicious maiden dress), (paired qilin duo), (sacred qilin aura), (jade and gold glow), (cloud motifs), (holy hooves light), (auspicious court stage), (gentle divine wind), (blessed mythic atmosphere)",
      desc: "男女ペア向け補助語つき麒麟瑞獣演出"
    },
{
      label: "バハムート / Bahamut",
      val: "bahamut beastkin, humanoid girl with a clearly human face (no animal muzzle), massive backward-curving dragon horns, large draconic wings fully visible, long dragon tail, iridescent scaled skin on shoulders arms thighs, clawed hands and taloned feet, draconic eye glow accent, ancient dragon deity aura, not cosplay, true beast fusion",
      synergy_tags: [
        "human face, no animal muzzle, but true dragon anatomy",
        "massive horns, wings visible, tail visible, iridescent scales",
        "clawed hands, taloned feet, draconic glow, slit pupils accent",
        "celestial temple, cosmic throne room, starfield window",
        "god rays, volumetric lighting, cinematic backlight",
        "low angle, cinematic mid-shot, heroic framing",
        "calm stern expression, overwhelming divine intimidation"
      ],
      desc: "神獣: 竜王 / 自動シナジー: 神光・威圧・低角度"
    },
    {
      label: "バハムート（ペア補助） / Bahamut (Pair Helper)",
      val: "(male bahamut dragon prince armor), (female bahamut dragon queen dress), (paired bahamut duo), (cosmic dragon aura), (star temple), (draconic wings), (horned silhouette), (dual dragon presence), (celestial backlight), (mythic scale shimmer)",
      desc: "男女ペア向け補助語つき神竜ステージ"
    },
    {
      label: "リヴァイアサン / Leviathan",
      val: "leviathan beastkin, humanoid girl with a clearly human face (no animal muzzle), serpentine lower body or long scaled tail replacing legs, bioluminescent deep-sea scales, fins along back and arms, webbed claws, water dripping and abyssal mist, deep ocean deity pressure aura, not cosplay, true sea-serpent fusion",
      synergy_tags: [
        "human face, no animal muzzle, but true sea-serpent anatomy",
        "serpentine tail replacing legs, fins visible, bioluminescent scales",
        "wet sheen, water dripping, caustics, abyssal mist",
        "pressure in the air, abyssal presence, drowning quiet",
        "deep ocean corridor, flooded deck, dark water reflections",
        "side angle, cinematic profile, mid-shot",
        "quiet distant expression, controlled emotion"
      ],
      desc: "神獣: 海の巨蛇 / 自動シナジー: 深海・水光・静圧"
    },
    {
      label: "リヴァイアサン（ペア補助） / Leviathan (Pair Helper)",
      val: "(male leviathan sea prince attire), (female leviathan abyss dress), (paired leviathan duo), (deep sea stage), (bioluminescent water glow), (ocean mist), (serpentine sea aura), (wet reflections), (abyssal lighting), (mythic tide presence)",
      desc: "男女ペア向け補助語つき深海神獣演出"
    },
    {
      label: "オロチ / Orochi",
      val: "orochi beastkin, humanoid girl with a clearly human face (no animal muzzle), eight serpentine tails or necks emerging from back as living appendages, shimmering snake scales across skin, forked-tongue smile accent, reptilian slit-eye glow accent, coiling tail wraps around body, cursed shrine serpent deity aura, not cosplay, true multi-serpent fusion",
      synergy_tags: [
        "human face, no animal muzzle, but multi-serpent appendages",
        "eight serpentine tails/necks visible, coiling motion",
        "snake scales on skin, cursed shrine aura, taboo miasma",
        "shrine ruins, torii gate at night, drifting fog",
        "low fog, moody lighting, filmic contrast",
        "three-quarter view, cinematic mid-shot",
        "emotionless smile, unsettling serenity"
      ],
      desc: "神獣: 八岐大蛇 / 自動シナジー: 霧・禁忌・多重気配"
    },
    {
      label: "オロチ（ペア補助） / Orochi (Pair Helper)",
      val: "(male orochi shrine prince attire), (female orochi shrine maiden dress), (paired orochi duo), (cursed shrine), (night fog), (multi-serpent aura), (taboo miasma), (shrine lantern glow), (ancient curse atmosphere), (ritual tension)",
      desc: "男女ペア向け補助語つき八岐大蛇演出"
    },
    {
      label: "ヒュドラ / Hydra",
      val: "hydra beastkin, humanoid girl with a clearly human face (no animal muzzle), multiple serpent necks emerging from shoulders/back as living appendages, scaled skin with regeneration scars, toxic-green scale sheen, long reptilian tail, clawed hands, relentless regenerative myth aura, not cosplay, true many-headed fusion",
      synergy_tags: [
        "human face, no animal muzzle, but multiple serpent necks visible",
        "regeneration scars, scaled skin, toxic-green sheen",
        "long reptilian tail, clawed hands, resilient menace",
        "toxic swamp air, quiet threat, persistent will",
        "swamp ruins, wet stone, murky reflections",
        "volumetric haze, soft backlight, cinematic framing",
        "tired but unbroken expression, stubborn gaze"
      ],
      desc: "神獣: 多頭竜 / 自動シナジー: 沼・毒霧・再生の気配"
    },
    {
      label: "ヒュドラ（ペア補助） / Hydra (Pair Helper)",
      val: "(male hydra poison prince armor), (female hydra toxic queen dress), (paired hydra duo), (swamp ruins), (poison mist), (regeneration aura), (many-headed serpent presence), (wet stone reflections), (toxic green glow), (relentless mythic tension)",
      desc: "男女ペア向け補助語つき多頭竜演出"
    },
    {
      label: "フェンリル / Fenrir",
      val: "full body fusion with Fenrir, humanoid girl with a clearly human face (no animal muzzle), skin transforming into silver wolf fur, fur naturally covering chest waist hips, luminous wolf ears, wolf-like limbs with sharp claws, digitigrade wolf legs, fluffy wolf tail, moonlit wolf eyes glow accent, primal wolf god lunar aura, not cosplay, true beast fusion",
      synergy_tags: [
        "human face, no animal muzzle, full body wolf-fusion",
        "silver wolf fur, wolf ears, fluffy tail, digitigrade legs",
        "sharp claws, primal posture, moonlit glow",
        "winter night, moonlight shafts, drifting snow",
        "cool rim light, cinematic backlight, low contrast",
        "medium shot, dynamic stance, predatory elegance",
        "calm but feral expression, overwhelming lunar aura"
      ],
      desc: "神獣: 巨狼 / 自動シナジー: 月夜・氷・終末の気配"
    }
,
    {
      label: "フェンリル（ペア補助） / Fenrir (Pair Helper)",
      val: "(male fenrir wolf prince armor), (female fenrir moonlit wolf queen attire), (paired fenrir duo), (silver wolf aura), (winter night stage), (drifting snow), (lunar backlight), (feral stance), (cold mist), (mythic wolf tension)",
      desc: "男女ペア向け補助語つき巨狼神獣演出"
    },
    {
      label: "ヨルムンガンド / Jormungandr",
      val: "jormungandr beastkin, humanoid girl with a clearly human face (no animal muzzle), world-serpent traits: massive scaled tail coiling around her, sea-green iridescent scales across body, venomous rune markings, fin-like spines along back, webbed claws, cold oceanic apocalypse aura, not cosplay, true world-serpent fusion",
      synergy_tags: [
        "human face, no animal muzzle, world-serpent fusion",
        "massive scaled tail coiling around, fin spines visible",
        "sea-green iridescent scales, runic venom markings",
        "stormy sea horizon, apocalyptic ocean aura",
        "cold rim light, mist, cinematic contrast",
        "wide to medium shot, coiling composition",
        "detached prophecy gaze, unstoppable doom"
      ],
      desc: "神獣: 世界蛇 / 自動シナジー: 終末スケール・地平線"
    }
,
    {
      label: "ヨルムンガンド（ペア補助） / Jormungandr (Pair Helper)",
      val: "(male jormungandr sea prince armor), (female jormungandr world-serpent empress dress), (paired jormungandr duo), (world serpent aura), (ocean storm stage), (coiling tail silhouette), (sea-green scales), (apocalyptic tide), (rune glow), (endless serpent tension)",
      desc: "男女ペア向け補助語つき世界蛇演出"
    },
    {
      label: "クラーケン / Kraken",
      val: "kraken beastkin, humanoid girl with a clearly human face (no animal muzzle), multiple thick cephalopod appendages unfurling around her form, distinct circular textures along the appendages, wet glossy skin with ink-stained accents, abyssal glowing eyes accent, deep-sea monster aura, not cosplay, true cephalopod fusion, biological fantasy creature, dark abyss aesthetic",
      synergy_tags: [
        "human face, no animal muzzle, cephalopod fusion",
        "multiple tentacles visible with suction cups",
        "wet glossy skin, ink mist, abyssal glow accents",
        "deep-sea trench, black water, drifting particles",
        "cool caustics, volumetric fog, cinematic lighting",
        "medium shot, tentacles framing silhouette",
        "quiet menace, hungry patience"
      ],
      desc: "深海神獣クラーケン（センシティブ回避・生物的表現）"
    }
,
    {
      label: "クラーケン（ペア補助） / Kraken (Pair Helper)",
      val: "(male kraken abyss prince attire), (female kraken deep-sea queen dress), (paired kraken duo), (abyssal tentacle aura), (sunken ruins), (wet reflections), (deep ocean glow), (ink mist), (cephalopod silhouette), (mythic abyss tension)",
      desc: "男女ペア向け補助語つき深海怪神演出"
    },
    {
      label: "フェニックス / Phoenix",
      val: "phoenix beastkin, humanoid girl with a clearly human face (no animal muzzle), blazing feathered wings fully visible, fiery plumage forming shoulders and hips, long tail feathers trailing embers, glowing ember marks on skin, taloned feet and clawed hands, rebirth flame aura, not cosplay, true fire-bird fusion",
      synergy_tags: [
        "human face, no animal muzzle, fire-bird fusion",
        "fiery wings visible, ember plumage, tail feathers trailing sparks",
        "glowing ember marks, heat haze, rebirth flame aura",
        "sunrise ash field, temple ruins, floating embers",
        "warm backlight, god rays, cinematic bloom",
        "heroic mid-shot, wings framing composition",
        "serene smile, unburning confidence"
      ],
      desc: "神獣: 不死鳥 / 自動シナジー: 再生・残光・朝焼け"
    }
,
    {
      label: "フェニックス（ペア補助） / Phoenix (Pair Helper)",
      val: "(male phoenix flame king attire), (female phoenix rebirth empress dress), (paired phoenix duo), (rebirth fire aura), (burning sky temple), (embers and feathers), (golden flame wings), (sunfire backlight), (immortal blaze), (resurrection tension)",
      desc: "男女ペア向け補助語つき不死鳥演出"
    },
    {
      label: "ケルベロス / Cerberus",
      val: "cerberus beastkin, humanoid girl with a clearly human face (no animal muzzle), three-headed hound motif as spectral canine heads behind shoulders (clearly visible), black hellhound fur patches on body, canine ears, spiked collar chains, clawed hands and digitigrade legs, hellfire breath aura, not cosplay, true underworld hound fusion",
      synergy_tags: [
        "human face, no animal muzzle, underworld hound fusion",
        "three spectral canine heads visible behind shoulders",
        "black hellhound fur patches, chains, spiked collar",
        "hellfire breath mist, ash, underworld gate",
        "red rim light, smoke, cinematic contrast",
        "low angle, medium shot, intimidating stance",
        "cold glare, loyal menace"
      ],
      desc: "神獣: 冥府の番犬 / 自動シナジー: 境界・鎖・監視"
    }
,
    {
      label: "ケルベロス（ペア補助） / Cerberus (Pair Helper)",
      val: "(male cerberus underworld prince armor), (female cerberus infernal queen dress), (paired cerberus duo), (hellhound aura), (gates of the underworld), (chain motifs), (embers and smoke), (three-headed hound presence), (crimson underlight), (infernal guard tension)",
      desc: "男女ペア向け補助語つき冥界番犬演出"
    },
    {
      label: "グリフォン / Griffin",
      val: "griffin beastkin, humanoid girl with a clearly human face (no animal muzzle), large eagle wings fully visible, feathered arms and shoulder plumage, lion-like hind legs with fur, lion tail with tuft, sharp talons and claws, regal sky predator aura, not cosplay, true griffin fusion",
      synergy_tags: [
        "human face, no animal muzzle, griffin fusion",
        "eagle wings visible, feathered arms, lion hind legs",
        "lion tail tuft, sharp talons, regal predator aura",
        "cliff edge, high sky wind, flying feathers",
        "strong backlight, volumetric light, cinematic framing",
        "three-quarter mid-shot, wings spread pose",
        "noble focused gaze, heroic calm"
      ],
      desc: "神獣: 鷲獅子 / 自動シナジー: 山頂・風・守護"
    }
,
    {
      label: "グリフォン（ペア補助） / Griffin (Pair Helper)",
      val: "(male griffin sky knight armor), (female griffin royal feather dress), (paired griffin duo), (griffin guardian aura), (cliffside palace), (wind currents), (feather storm), (golden sky backlight), (regal predator silhouette), (aerial myth tension)",
      desc: "男女ペア向け補助語つき天空獣演出"
    },
    {
      label: "スフィンクス / Sphinx",
      val: "sphinx beastkin, humanoid girl with a clearly human face (no animal muzzle), lioness body traits: tawny fur across torso and limbs, powerful feline claws, long lion tail, optional folded wings, ancient desert guardian aura, hieroglyphic markings on fur, not cosplay, true sphinx fusion",
      synergy_tags: [
        "human face, no animal muzzle, desert guardian fusion",
        "lioness fur body traits, feline claws, lion tail visible",
        "hieroglyphic markings, ancient stone dust aura",
        "desert ruins, broken obelisk, warm sand haze",
        "golden backlight, soft haze, cinematic contrast",
        "seated regal pose, medium shot",
        "silent riddle smile, timeless authority"
      ],
      desc: "神獣: 砂漠の守護 / 自動シナジー: 古代遺跡・沈黙"
    }
,
    {
      label: "スフィンクス（ペア補助） / Sphinx (Pair Helper)",
      val: "(male sphinx desert prince robes), (female sphinx ancient queen dress), (paired sphinx duo), (desert guardian aura), (ancient ruins), (golden sand wind), (hieroglyph glow), (sunset backlight), (enigmatic myth tension), (sacred riddle atmosphere)",
      desc: "男女ペア向け補助語つき砂漠守護演出"
    },
    {
      label: "ベヒーモス / Behemoth",
      val: "behemoth beastkin, humanoid girl with a clearly human face (no animal muzzle), colossal horned beast traits: massive curved horns, thick armored hide texture on skin, ultra-muscular limbs, heavy hoof-like feet, earth-cracking weight presence, dust and stone debris aura, not cosplay, true colossal beast fusion",
      synergy_tags: [
        "human face, no animal muzzle, colossal beast fusion",
        "massive curved horns, thick armored hide texture",
        "hoof-like feet, ultra-muscular limbs, immense weight",
        "dust and stone debris, ground cracking presence",
        "hard rim light, volumetric dust, cinematic scale",
        "low angle, wide to medium shot",
        "slow breathing menace, unmovable dominance"
      ],
      desc: "神獣: 地の巨獣 / 自動シナジー: 震動・砂塵・重量"
    }
,
    {
      label: "ベヒーモス（ペア補助） / Behemoth (Pair Helper)",
      val: "(male behemoth earth king armor), (female behemoth colossal queen dress), (paired behemoth duo), (colossal beast aura), (earth-cracking stage), (dust storm), (stone debris), (massive horn silhouette), (heavy ground impact), (mythic titan tension)",
      desc: "男女ペア向け補助語つき巨獣王演出"
    },
  ],
    
"🧰 テーマ別・持ち物セット (Item Sets)": [
    {
      "label": "医者セット",
      "val": "(holding stethoscope), (clipboard under arm), (holding syringe), (medical tools), (pen in pocket)",
      "desc": "診察に必要な道具一式"
    },
    {
      "label": "ゴスロリセット",
      "val": "(holding frilled parasol), (lace headdress), (cross necklace), (holding gothic doll), (rose decoration)",
      "desc": "ゴシックな装飾品セット"
    },
    {
      "label": "現代っ子セット",
      "val": "(holding smartphone), (drinking bubble tea), (headphones around neck), (stylish backpack), (mask)",
      "desc": "今風のアイテムセット"
    },
    {
      "label": "冒険者セット",
      "val": "(holding map), (compass), (lantern), (potion flask on belt), (leather backpack), (dagger)",
      "desc": "旅の必需品セット"
    },
    {
      "label": "魔法使いセット",
      "val": "(holding magic staff), (grimoire), (potion bottles), (crystal ball), (magic components)",
      "desc": "魔法研究の道具"
    },
    {
      "label": "画材・美術セット",
      "val": "(holding paintbrush), (palette), (easel), (apron with paint stains), (sketchbook), (pencils)",
      "desc": "絵を描く道具"
    }
  ],
  "😱 感情・スリル (Emotions)": [
    {
      "label": "追跡者からの逃走",
      "val": "(running away:1.3), (looking back:1.3), (scared expression), (tears), (sweat), (abandoned hallway), (motion blur:1.2), (scary monster chasing from behind:1.3), (pursuer looming in background), (cinematic lighting), (dynamic angle), (dramatic shadows)",
      "links": [
        "ダイナミックポーズ",
        "ホラー"
      ]
    },
    {
      "label": "ロッカーに隠れる",
      "val": "(hiding in locker), (pov from inside), (peeking through slit), (scared face), (covering mouth), (heavy breathing), (killer outside), (darkness), (ray tracing), (claustrophobic)",
      "links": [
        "ホラー"
      ]
    },
    {
      "label": "ヤンデレ・束縛",
      "val": "(yandere), (empty eyes), (scary smile), (holding knife behind back), (shadow over face), (obsessed), (love hearts in eyes), (dark atmosphere)"
    },
    {
      "label": "ツンデレ・赤面",
      "val": "(tsundere), (arms crossed), (looking away), (blush), (pout), (angry but shy), (school uniform), (cute angry face)"
    },
    {
      "label": "クーデレ・無口",
      "val": "(expressionless), (staring), (quiet atmosphere), (beautiful detailed eyes), (cool beauty), (emotionless), (mysterious)"
    }
  ],
  "👻 ホラー・サスペンス (Horror)": [
    {
      "label": "廃墟",
      "val": "(abandoned building), (ruins), (broken glass), (overgrown), (dust), (decay), (lonely atmosphere)"
    },
    {
      "label": "廃病院",
      "val": "(abandoned hospital), (wheelchair), (blood stains), (flickering light), (dark corridor), (scary), (medical equipment)"
    },
    {
      "label": "心霊写真風",
      "val": "(daily life photo), (peace sign), (group photo), (ghost face behind), (transparent spirit), (cursed image), (noise), (low quality style), (vhs artifact), (film grain)"
    },
    {
      "label": "儀式の生贄",
      "val": "(lying on altar), (bound hands), (unconscious), (magic circle), (red candles), (hooded figures), (ritual chamber), (high angle shot), (glowing magic), (atmospheric lighting)",
      "links": [
        "寝ポーズ"
      ]
    }
  ],
  "⚔️ 剣戟・刀 (Sword Battle)": [
    {
      "label": "居合・抜刀",
      "val": "(drawing katana), (iai stance), (hand on hilt), (sparkles), (falling petals), (focused expression), (motion blur), (kimono or armor)",
      "links": [
        "和風",
        "ダイナミックポーズ"
      ]
    },
    {
      "label": "二刀流・乱舞",
      "val": "(dual wielding), (two swords), (spinning attack), (slashing effects), (dynamic action), (afterimage), (speed lines), (intense battle)",
      "links": [
        "ダイナミックポーズ",
        "エフェクト"
      ]
    },
    {
      "label": "聖騎士の誓い",
      "val": "(kneeling with sword), (sword planted in ground), (praying), (holy light), (knight armor), (cathedral background), (solemn), (god rays)",
      "links": [
        "ファンタジー"
      ]
    },
    {
      "label": "大剣・一撃",
      "val": "(holding giant sword), (heavy weapon), (swinging sword), (ground cracking), (debris flying), (power stance), (screaming), (impact frame)",
      "links": [
        "アクション"
      ]
    }
  ],
  "🔫 銃撃・射撃 (Gun Action)": [
    {
      "label": "二丁拳銃・乱射",
      "val": "(dual guns), (firing both hands), (jumping sideways), (bullet time), (muzzle flash), (debris), (action movie shot), (flying cartridges)",
      "links": [
        "アクション"
      ]
    },
    {
      "label": "スナイパー・狙撃",
      "val": "(holding sniper rifle), (looking through scope), (lying prone), (rooftop), (cityscape in background), (one eye closed), (windy), (serious face)",
      "links": [
        "都市"
      ]
    },
    {
      "label": "リロード・遮蔽物",
      "val": "(reloading gun), (magazine in air), (hiding behind cover), (sweat), (intense battle), (bullets flying), (wall damage), (tactical gear)",
      "links": [
        "アクション"
      ]
    }
  ],
  "🧙‍♀️ 魔法・ファンタジー (Magic & Fantasy)": [
    {
      "label": "爆裂魔法・炎",
      "val": "(fire magic), (fireball in hand), (flames surrounding), (burning eyes), (floating hair), (intense heat), (explosion background), (casting spell)",
      "links": [
        "エフェクト"
      ]
    },
    {
      "label": "召喚術・顕現",
      "val": "(summoning ritual), (summoning circle on ground), (giant monster emerging), (holding grimoire), (chanting), (glowing runes), (mystical atmosphere)",
      "links": [
        "ファンタジー"
      ]
    },
    {
      "label": "ヒーラー・癒やし",
      "val": "(casting healing magic), (gentle light), (feathers falling), (praying hands), (angelic atmosphere), (soft focus), (warm colors)",
      "links": [
        "ファンタジー"
      ]
    },
    {
      "label": "大鎌・死神",
      "val": "(holding scythe), (grim reaper style), (full moon), (dark aura), (floating), (menacing), (black feathers), (silhouette)",
      "links": [
        "ホラー"
      ]
    }
  ],
  "👊 格闘・近接 (Melee)": [
    {
      "label": "飛び蹴り",
      "val": "(flying kick), (dynamic pose), (shoe sole focus), (impact effect), (shattered glass), (street fight), (high angle), (action lines)",
      "links": [
        "ダイナミックポーズ"
      ]
    },
    {
      "label": "クロスカウンター",
      "val": "(punching), (fist clash), (sweat flying), (intense face), (motion blur), (close up), (fighting stance), (knuckles)",
      "links": [
        "アクション"
      ]
    },
    {
      "label": "気功・オーラ",
      "val": "(martial arts stance), (glowing aura), (energy gathering), (power up), (floating rocks), (dragon effect), (intense eyes)",
      "links": [
        "エフェクト"
      ]
    }
  ],
  "🚫 ネガティブセット (Negative Sets)": [
    {
      "label": "基本ネガティブ",
      "val": "low quality, worst quality, out of focus, ugly, error, jpeg artifacts, lowers, blurry, bokeh"
    },
    {
      "label": "人体崩壊防止",
      "val": "bad anatomy, long neck, deformed, mutated, disfigured, malformed hands, missing limb, floating limbs, disconnected limbs, extra limb, missing fingers, extra fingers, liquid fingers, poorly drawn hands, mutation"
    },
    {
      "label": "目のハイライト完全除去",
      "val": "eye highlight, reflection, sparkle, light particles, bright eyes, beautiful detailed eyes, happy, vibrant eyes"
    },
    {
      "label": "不要な要素 (ロゴ等)",
      "val": "text, watermark, signature, username, logo, qr code, bar code"
    }
  ]

  };

  function __ppNormalizePairBaseLabel(label) {
    return String(label || "")
      .replace(/\s*\/.*$/, "")
      .replace(/（ペア補助）.*$/, "")
      .replace(/\(Pair Helper\).*$/, "")
      .trim();
  }

  function __ppMakePairHelperItem(item, adultFlag) {
    if (!item || typeof item !== "object" || !item.label || !item.val) return null;
    if (item.type === "pair_header") return null;
    if (/ペア補助|Pair Helper/.test(String(item.label))) return null;
    var base = __ppNormalizePairBaseLabel(item.label);
    var core = String(item.val || "").trim().replace(/,+\s*$/, "");
    var helperCore = adultFlag
      ? "(1girl:1.2), (1boy:1.2), (adult paired roleplay), (paired duo), (two-person chemistry), (body proximity), (mutual gaze), (tension between two), (duo composition)"
      : "(1girl:1.2), (1boy:1.2), (paired duo), (male counterpart), (female counterpart), (two-person interaction), (mutual gaze), (duo composition), (themed pair staging)";
    var val = helperCore + (core ? ", " + core : "");
    return {
      label: base + "（ペア補助） / " + base + " (Pair Helper)",
      val: val,
      desc: (adultFlag ? "男女ペア向け補助語つき成人向けなりきり演出" : "男女ペア向け補助語つきなりきり演出") + " / " + base
    };
  }

  function __ppWithPairHelpers(arr, adultFlag) {
    if (Object.prototype.toString.call(arr) !== "[object Array]") return arr;
    var out = [];
    var seen = Object.create(null);
    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
      out.push(item);
      if (!item || typeof item !== "object") continue;
      if (item.type === "pair_header") continue;
      var helper = __ppMakePairHelperItem(item, adultFlag);
      if (!helper) continue;
      var base = __ppNormalizePairBaseLabel(item.label);
      if (seen[base]) continue;
      var next = arr[i + 1];
      if (next && typeof next === "object" && /ペア補助|Pair Helper/.test(String(next.label || "")) && __ppNormalizePairBaseLabel(next.label) === base) {
        seen[base] = true;
        continue;
      }
      out.push(helper);
      seen[base] = true;
    }
    return out;
  }


  // =============================================================================
  // 🎭 なりきりおすすめセット (Roleplay Recommended Sets) - nested (minimal change)
  // UI側（builder_ui.section.preset_packs.bundle.js）は item.children のネスト表示に対応。
  // ここでは既存の「平置きキー」を参照して親→子→チェック群にまとめる。
  // =============================================================================
  
(function buildRoleplayRecommendedSets(){
  try {
    var parentKey = "🎭 なりきりおすすめセット (Roleplay Recommended Sets)";
    if (packs[parentKey]) return; // already built

    var roleplayChildren = [];
    var k1s = Object.keys(packs);

    function matchArray(key) {
      return Object.prototype.toString.call(packs[key]) === "[object Array]";
    }

    function buildGroupedRoleplay(parentJa, parentEn, defs) {
      var children = [];
      for (var i = 0; i < defs.length; i++) {
        var def = defs[i];
        if (matchArray(def.key)) {
          var childItems = packs[def.key];
          if (def.pairHelpers !== false) childItems = __ppWithPairHelpers(childItems, false);
          children.push({
            title_ja: def.title_ja,
            title_en: def.title_en,
            children: childItems
          });
        }
      }
      if (children.length) {
        roleplayChildren.push({
          title_ja: parentJa,
          title_en: parentEn,
          children: children
        });
      }
    }

    var groupedKeys = {
      celestial_named: "🎭 なりきりおすすめセット｜職業・なりきり（天界｜固有名） (Celestial Named Personas)",
      celestial_titles: "🎭 なりきりおすすめセット｜職業・なりきり（天界｜役職・称号） (Celestial Titles)",
      celestial_rank: "🎭 なりきりおすすめセット｜職業・なりきり（天界｜格・位階） (Celestial Rank)",
      infernal_named: "🎭 なりきりおすすめセット｜職業・なりきり（深淵｜固有名） (Infernal Named Personas)",
      infernal_titles: "🎭 なりきりおすすめセット｜職業・なりきり（深淵｜役職・称号） (Infernal Titles)",
      infernal_rank: "🎭 なりきりおすすめセット｜職業・なりきり（深淵｜格・位階） (Infernal Rank)",
      mythic: "🎭 なりきりおすすめセット｜神獣・伝説なりきり (Mythic Beasts)"
    };

    function appendFlatRoleplay(key) {
      if (!matchArray(key)) return;
      roleplayChildren.push({
        title_ja: key.replace(/^🎭 なりきりおすすめセット｜/,"").replace(/ \(.+?\)$/,""),
        title_en: (key.match(/\((.*?)\)$/)||[])[1] || "",
        children: __ppWithPairHelpers(packs[key], false)
      });
    }

    // 普通 → 特殊 の流れで固定。天界/深淵は神獣の直前に置く。
    appendFlatRoleplay("🎭 なりきりおすすめセット｜職業・なりきり（現代） (Modern Jobs)");
    appendFlatRoleplay("🎭 なりきりおすすめセット｜職業・なりきり（未来/サイバーパンク） (Future & Cyber Jobs)");
    appendFlatRoleplay("🎭 なりきりおすすめセット｜職業・なりきり（ファンタジー/スチーム） (Fantasy & Steam Jobs)");
    appendFlatRoleplay("🎭 なりきりおすすめセット｜職業・なりきり（王道キャラ） (Famous Characters)");
    appendFlatRoleplay("🎭 なりきりおすすめセット｜職業・なりきり（概念コスプレ） (Conceptual Cosplay)");

    buildGroupedRoleplay("職業・なりきり（天界）", "Celestial Roleplay", [
      { key: groupedKeys.celestial_named, title_ja: "👤 固有名", title_en: "Named Personas" },
      { key: groupedKeys.celestial_titles, title_ja: "🏛 役職・称号", title_en: "Titles" },
      { key: groupedKeys.celestial_rank, title_ja: "👑 格・位階", title_en: "Rank", pairHelpers: false }
    ]);

    buildGroupedRoleplay("職業・なりきり（深淵）", "Infernal Roleplay", [
      { key: groupedKeys.infernal_named, title_ja: "👤 固有名", title_en: "Named Personas" },
      { key: groupedKeys.infernal_titles, title_ja: "🏛 役職・称号", title_en: "Titles" },
      { key: groupedKeys.infernal_rank, title_ja: "👑 格・位階", title_en: "Rank", pairHelpers: false }
    ]);

    if (matchArray(groupedKeys.mythic)) {
      roleplayChildren.push({ title_ja: "神獣・伝説なりきり", title_en: "Mythic Beasts", children: __ppWithPairHelpers(packs[groupedKeys.mythic], false) });
    }

    var usedRoleplayKeys = {};
    usedRoleplayKeys[groupedKeys.celestial_named] = true;
    usedRoleplayKeys[groupedKeys.celestial_titles] = true;
    usedRoleplayKeys[groupedKeys.celestial_rank] = true;
    usedRoleplayKeys[groupedKeys.infernal_named] = true;
    usedRoleplayKeys[groupedKeys.infernal_titles] = true;
    usedRoleplayKeys[groupedKeys.infernal_rank] = true;
    usedRoleplayKeys[groupedKeys.mythic] = true;
    usedRoleplayKeys["🎭 なりきりおすすめセット｜職業・なりきり（現代） (Modern Jobs)"] = true;
    usedRoleplayKeys["🎭 なりきりおすすめセット｜職業・なりきり（未来/サイバーパンク） (Future & Cyber Jobs)"] = true;
    usedRoleplayKeys["🎭 なりきりおすすめセット｜職業・なりきり（ファンタジー/スチーム） (Fantasy & Steam Jobs)"] = true;
    usedRoleplayKeys["🎭 なりきりおすすめセット｜職業・なりきり（王道キャラ） (Famous Characters)"] = true;
    usedRoleplayKeys["🎭 なりきりおすすめセット｜職業・なりきり（概念コスプレ） (Conceptual Cosplay)"] = true;

    for (var i = 0; i < k1s.length; i++) {
      var k = k1s[i];
      if (k.indexOf("🎭 なりきりおすすめセット｜職業・なりきり") !== 0) continue;
      if (!matchArray(k)) continue;
      if (usedRoleplayKeys[k]) continue;
      roleplayChildren.push({
        title_ja: k.replace(/^🎭 なりきりおすすめセット｜/,"").replace(/ \(.+?\)$/,""),
        title_en: (k.match(/\((.*?)\)$/)||[])[1] || "",
        children: packs[k]
      });
    }

    var situationChildren = [];
    var sitKey = "🌆 シチュエーションパック (Situation Packs)";
    var sitObj = packs[sitKey];

    function cleanSituationTitle(key) {
      return String(key || "")
        .replace(/^🌆 シチュエーションパック｜/, "")
        .replace(/^📍 /, "")
        .replace(/ \(.+?\)$/, "");
    }

    function toSituationNode(title, value) {
      if (Object.prototype.toString.call(value) === "[object Array]") {
        return {
          title_ja: cleanSituationTitle(title),
          title_en: "",
          children: value
        };
      }
      if (value && typeof value === "object") {
        var keys = Object.keys(value);
        var nestedChildren = [];
        for (var i2 = 0; i2 < keys.length; i2++) {
          var childNode = toSituationNode(keys[i2], value[keys[i2]]);
          if (childNode) nestedChildren.push(childNode);
        }
        return {
          title_ja: cleanSituationTitle(title),
          title_en: "",
          children: nestedChildren
        };
      }
      return null;
    }

    if (sitObj && typeof sitObj === "object") {
      var k2s = Object.keys(sitObj);
      for (var j = 0; j < k2s.length; j++) {
        var node = toSituationNode(k2s[j], sitObj[k2s[j]]);
        if (node) situationChildren.push(node);
      }
    }

    var pairChildren = [];
    var pairKey = "🎭 なりきりおすすめセット｜おすすめ組み合わせ（なりきり×場所） (Roleplay × Situation)";
    if (matchArray(pairKey)) {
      pairChildren.push({ title_ja: "汎用おすすめ", title_en: "General Picks", children: packs[pairKey] });
    }
    var celestialPairKey = "🎭 なりきりおすすめセット｜おすすめ組み合わせ（天界） (Celestial Combos)";
    if (matchArray(celestialPairKey)) {
      pairChildren.push({ title_ja: "😇 天界おすすめ", title_en: "Celestial Combos", children: packs[celestialPairKey] });
    }
    var infernalPairKey = "🎭 なりきりおすすめセット｜おすすめ組み合わせ（深淵） (Infernal Combos)";
    if (matchArray(infernalPairKey)) {
      pairChildren.push({ title_ja: "😈 深淵おすすめ", title_en: "Infernal Combos", children: packs[infernalPairKey] });
    }

    var compChildren = [];
    var compKey = "📐 おすすめ構図 (Recommended Compositions)";
    if (matchArray(compKey)) {
      compChildren.push({ title_ja: "基本構図", title_en: "Core Compositions", children: packs[compKey] });
    }
    var celestialCompKey = "📐 おすすめ構図｜😇 天界向け (Celestial Compositions)";
    if (matchArray(celestialCompKey)) {
      compChildren.push({ title_ja: "😇 天界向け構図", title_en: "Celestial Compositions", children: packs[celestialCompKey] });
    }
    var infernalCompKey = "📐 おすすめ構図｜😈 深淵向け (Infernal Compositions)";
    if (matchArray(infernalCompKey)) {
      compChildren.push({ title_ja: "😈 深淵向け構図", title_en: "Infernal Compositions", children: packs[infernalCompKey] });
    }

    packs[parentKey] = [
      { title_ja: "🎭 なりきり", title_en: "Roleplay", children: roleplayChildren },
      { title_ja: "📍 場所・状況", title_en: "Place & Situation", children: situationChildren },
      { title_ja: "🎵 おすすめ組み合わせ", title_en: "Roleplay × Situation", children: pairChildren },
      { title_ja: "📐 おすすめ構図", title_en: "Recommended Compositions", children: compChildren }
    ];
  } catch (e) {}
})();



  // 2. R-18 (シークレットモード) 判定
  // builder_ui.section.quality_preset.bundle.js (v1) でセットされるキーをチェック
  const isSecretUnlocked = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  if (isSecretUnlocked) {
    // 解除されている場合のみ、R-18要素を「🔞 なりきりおすすめセット」に集約して表示する
    // - 旧: NSFW/体位/Hロケ/男女/表情/触手 をトップ階層にも出していた（重複・散らかりの原因）
    // - 新: それらは「🔞 なりきりおすすめセット > 📍 場所・状況」に統合
    // - NSFWフラグは品質・設定側へ移設（preset_packs からは除去）

    (function buildAdultExpressionFxPacks(){
      try {
        var adultExprKey = "🔞 R-18 表情演出プリセット (Adult Expression FX Packs)";
        if (packs[adultExprKey]) return;

        packs[adultExprKey] = [
          {
            title_ja: "🤍 純愛寄り",
            title_en: "Tender & Devoted",
            children: [
              {
                title_ja: "🍯 甘々",
                title_en: "Sweet & Melty",
                children: [
                  { id: "r18_fx_lovegaze", label: "見つめ合い演出セット", desc: "見つめ合い＋潤み瞳＋微笑み", val: "(loving gaze), (watery eyes), (gentle smile), (soft blush), (locked eyes)" },
                  { id: "r18_fx_kissafter", label: "口づけ余韻演出セット", desc: "熱の残る唇＋吐息＋とろ目", val: "(after kiss), (parted lips), (warm breath), (half-closed eyes), (flushed face)" },
                  { id: "r18_fx_heart", label: "恋慕とろけ演出セット", desc: "恋慕＋瞳ハート＋頬染め", val: "(heart-shaped pupils), (pink eyes), (love struck), (soft blush), (adoring expression)" },
                  { id: "r18_fx_melt", label: "愛情とろ顔演出セット", desc: "半目＋熱っぽい息＋潤み", val: "(melting expression), (half-closed eyes), (parted lips), (flushed face), (watery eyes), (heavy breathing)" },
                  { id: "r18_fx_invite_soft", label: "甘い誘い込み演出セット", desc: "上目遣い＋ためらい笑み＋熱視線", val: "(inviting gaze), (looking up), (bedroom eyes), (parted lips), (gentle smile), (teasing)" },
                  { id: "r18_fx_cheekkiss", label: "頬寄せ密着演出セット", desc: "密着＋幸福感＋頬染め", val: "(cheek to cheek), (close embrace), (happy tears), (warm smile), (flushed face)" },
                  { id: "r18_fx_unguarded", label: "無防備演出セット", desc: "警戒ゼロ＋とろ目＋身を預ける", val: "(unguarded), (trusting eyes), (relaxed smile), (soft blush), (leaning in)" },
                  { id: "r18_fx_safe", label: "安心しきり演出セット", desc: "安堵＋脱力＋穏やかな笑み", val: "(completely at ease), (relieved), (gentle smile), (relaxed body), (warm eyes)" }
                ]
              },
              {
                title_ja: "🌙 切なめ",
                title_en: "Bittersweet",
                children: [
                  { id: "r18_fx_yearn", label: "切なげ恋慕演出セット", desc: "寂しさ＋恋慕＋潤み目", val: "(yearning), (sad smile), (watery eyes), (longing gaze), (soft blush)" },
                  { id: "r18_fx_tremblelove", label: "震え待ち演出セット", desc: "ためらい＋期待＋震え唇", val: "(trembling lips), (hesitation), (hopeful eyes), (blushing), (looking up)" },
                  { id: "r18_fx_tearysmile", label: "涙ぐみ微笑み演出セット", desc: "涙目＋微笑＋安堵", val: "(teary smile), (relief), (watery eyes), (gentle expression), (soft blush)" },
                  { id: "r18_fx_cling", label: "離れたくない演出セット", desc: "すがりつき＋不安＋熱視線", val: "(clinging), (anxious eyes), (parted lips), (needy expression), (flushed face)" },
                  { id: "r18_fx_aftertear", label: "口づけ後の名残演出セット", desc: "切なさ＋余韻＋潤み", val: "(lingering kiss), (wistful eyes), (warm breath), (parted lips), (watery eyes)" },
                  { id: "r18_fx_teargrin", label: "泣き笑い演出セット", desc: "涙混じりの笑み＋安堵", val: "(crying and smiling), (teary smile), (relief), (soft blush), (shaking lips)" },
                  { id: "r18_fx_holdme", label: "引き止め演出セット", desc: "すがる手＋離れたくない目", val: "(reaching out), (pleading eyes), (clingy), (parted lips), (anxious expression)" }
                ]
              }
            ]
          },
          {
            title_ja: "🥀 背徳寄り",
            title_en: "Forbidden & Shame",
            children: [
              {
                title_ja: "👀 露見系",
                title_en: "Exposed",
                children: [
                  { id: "r18_fx_shame", label: "羞恥赤面演出セット", desc: "全顔赤面＋視線逸らし", val: "(full-face blush), (looking away coyly), (avoiding eye contact), (shy downward glance)" },
                  { id: "r18_fx_exposed", label: "見られ羞恥演出セット", desc: "羞恥＋焦り＋涙目", val: "(embarrassed), (watery eyes), (flushed face), (panic), (covering body)" },
                  { id: "r18_fx_publicpanic", label: "露見焦り演出セット", desc: "周囲警戒＋赤面＋汗", val: "(looking around nervously), (panic), (sweatdrop), (blushing), (caught in the act)" },
                  { id: "r18_fx_coverup", label: "隠しきれない演出セット", desc: "隠す仕草＋焦り笑い＋涙目", val: "(trying to cover up), (embarrassed smile), (watery eyes), (flushed face), (nervous)" },
                  { id: "r18_fx_listened", label: "物音警戒演出セット", desc: "聞き耳＋硬直＋緊張", val: "(startled), (listening), (frozen), (tense expression), (parted lips)" },
                  { id: "r18_fx_almostcaught", label: "バレかけ演出セット", desc: "見つかりかけ＋息止め＋焦り", val: "(almost caught), (holding breath), (panic), (wide eyes), (frozen)" },
                  { id: "r18_fx_publicaware", label: "人目意識演出セット", desc: "周囲視線を気にする＋羞恥", val: "(aware of being watched), (embarrassed), (looking around), (blushing), (nervous)" }
                ]
              },
              {
                title_ja: "🚫 禁忌系",
                title_en: "Taboo",
                children: [
                  { id: "r18_fx_forbidden", label: "背徳ためらい演出セット", desc: "躊躇＋汗＋震え唇", val: "(forbidden), (nervous), (sweatdrop), (trembling lips), (looking away)" },
                  { id: "r18_fx_guilty", label: "罪悪感うっとり演出セット", desc: "背徳感＋潤み目＋熱視線", val: "(guilty pleasure), (watery eyes), (parted lips), (blushing), (heated gaze)" },
                  { id: "r18_fx_begshy", label: "恥じらい懇願演出セット", desc: "潤み目＋小さく乞う", val: "(tears), (blushing), (looking up), (begging), (humiliation)" },
                  { id: "r18_fx_taboomelt", label: "禁じられた陶酔演出セット", desc: "背徳感＋半目＋熱息", val: "(taboo), (entranced), (half-closed eyes), (heavy breathing), (blushing)" },
                  { id: "r18_fx_guiltkiss", label: "罪悪感キス演出セット", desc: "唇残り＋目逸らし＋頬染め", val: "(guilty), (after kiss), (looking away), (parted lips), (soft blush)" },
                  { id: "r18_fx_wrongaware", label: "してはいけない自覚演出セット", desc: "葛藤＋理性残り＋熱視線", val: "(knows it is wrong), (inner conflict), (heated gaze), (trembling lips), (blushing)" },
                  { id: "r18_fx_guiltyaccept", label: "罪悪感混じりの受容演出セット", desc: "背徳感＋受け入れ＋潤み", val: "(guilty acceptance), (watery eyes), (parted lips), (soft blush), (surrendering)" }
                ]
              }
            ]
          },
          {
            title_ja: "⛓ 支配/服従寄り",
            title_en: "Dominance & Submission",
            children: [
              {
                title_ja: "👑 支配系",
                title_en: "Dominance",
                children: [
                  { id: "r18_fx_dom", label: "支配挑発演出セット", desc: "見下ろし＋余裕笑い", val: "(looking down on viewer), (cold gaze), (disdainful stare), (arrogant), (smirk)" },
                  { id: "r18_fx_seduce", label: "誘惑視線演出セット", desc: "流し目＋唇開き＋笑み", val: "(seductive stare), (half-closed eyes), (parted lips), (confident smirk)" },
                  { id: "r18_fx_command", label: "命令視線演出セット", desc: "命令口調＋鋭い目＋余裕", val: "(commanding gaze), (sharp eyes), (smirk), (confidence), (dominant)" },
                  { id: "r18_fx_press", label: "追い込み愉悦演出セット", desc: "余裕＋圧＋楽しむ笑み", val: "(pressuring), (predatory smile), (cold gaze), (dominant posture), (teasing)" },
                  { id: "r18_fx_smugcontrol", label: "余裕笑み演出セット", desc: "勝ち確信＋余裕顔＋薄笑い", val: "(smug smile), (composed), (confident eyes), (dominant), (calm superiority)" },
                  { id: "r18_fx_lookdown", label: "見下し演出セット", desc: "軽蔑気味＋高圧＋冷視線", val: "(looking down on), (disdain), (cold stare), (dominant), (arrogant expression)" }
                ]
              },
              {
                title_ja: "🫣 服従系",
                title_en: "Submission",
                children: [
                  { id: "r18_fx_plead", label: "懇願演出セット", desc: "涙＋縋る視線＋開き唇", val: "(crying), (begging), (teary eyes), (desperate expression), (parted lips)" },
                  { id: "r18_fx_submissive", label: "従属演出セット", desc: "伏し目＋赤面＋震え", val: "(submissive), (downcast eyes), (blush), (trembling), (obedient)" },
                  { id: "r18_fx_cornered", label: "追い詰め懇願演出セット", desc: "恐怖＋息荒い＋助け求め", val: "(cornered), (fearful), (heavy breathing), (watery eyes), (pleading)" },
                  { id: "r18_fx_broken", label: "心折れ演出セット", desc: "虚ろ＋涙跡＋無抵抗", val: "(broken expression), (vacant eyes), (tear streaks), (slack expression), (mind break)" },
                  { id: "r18_fx_obey", label: "言いなり演出セット", desc: "無言頷き＋伏し目＋赤面", val: "(obedient), (silent nod), (downcast eyes), (blushing), (helpless)" },
                  { id: "r18_fx_resigned", label: "観念演出セット", desc: "抵抗をやめた目＋静かな受容", val: "(resigned), (giving up), (downcast eyes), (soft trembling), (acceptance)" },
                  { id: "r18_fx_cantresist", label: "逆らえない演出セット", desc: "強い圧に呑まれる＋怯え", val: "(cannot resist), (fearful obedience), (watery eyes), (tense body), (submissive)" }
                ]
              }
            ]
          },
          {
            title_ja: "🛏 事後寄り",
            title_en: "Afterglow & Spent",
            children: [
              {
                title_ja: "💞 余韻系",
                title_en: "Afterglow",
                children: [
                  { id: "r18_fx_afterglow", label: "事後放心演出セット", desc: "脱力＋乱れ髪＋余韻", val: "(after sex), (exhausted), (messy hair), (slack expression), (heavy breathing)" },
                  { id: "r18_fx_trance", label: "陶酔呆然演出セット", desc: "半目＋口半開き＋夢見心地", val: "(entranced), (half-closed eyes), (open mouth), (dazed), (blushing)" },
                  { id: "r18_fx_kissrest", label: "寄り添い余熱演出セット", desc: "密着＋熱息＋安堵", val: "(resting together), (warm breath), (half-closed eyes), (relaxed smile), (flushed face)" },
                  { id: "r18_fx_satisfied", label: "満たされ微笑み演出セット", desc: "満足感＋とろ目＋微笑み", val: "(satisfied smile), (half-closed eyes), (blushing), (relaxed), (afterglow)" },
                  { id: "r18_fx_happyafter", label: "幸福感演出セット", desc: "満ち足りた笑み＋安堵＋密着", val: "(blissful smile), (content), (warm eyes), (soft blush), (afterglow)" },
                  { id: "r18_fx_hugafter", label: "抱きつき演出セット", desc: "甘く抱きつく＋余熱＋微笑み", val: "(clinging hug), (afterglow), (relaxed smile), (warm breath), (affectionate)" }
                ]
              },
              {
                title_ja: "🫠 虚脱系",
                title_en: "Spent & Empty",
                children: [
                  { id: "r18_fx_ahegao", label: "あへ顔演出セット", desc: "あへ顔＋舌出し＋涎", val: "(ahegao:1.3), (rolling eyes), (tongue out), (drooling), (v-shaped eyebrows)" },
                  { id: "r18_fx_ecstasy", label: "快楽堕ち演出セット", desc: "赤面＋恍惚＋涙", val: "(pleasure face), (blush), (slobber), (euphoric tears), (ecstatic expression)" },
                  { id: "r18_fx_orgasm", label: "絶頂震え演出セット", desc: "震え＋反り＋瞳蕩け", val: "(orgasm), (girl trembling in climax:1.5), (shaking), (arched back), (toes curling), (spasms)" },
                  { id: "r18_fx_vacant", label: "虚ろ目演出セット", desc: "焦点外れ＋理性薄れ", val: "(vacant eyes), (unfocused eyes), (looking into the distance), (glazed eyes)" },
                  { id: "r18_fx_numb", label: "燃え尽き演出セット", desc: "涙跡＋無表情＋ぐったり", val: "(burned out), (tear streaks), (expressionless), (exhausted), (limp body)" },
                  { id: "r18_fx_weaklegs", label: "力が抜ける演出セット", desc: "膝が抜けるような脱力＋余熱", val: "(legs giving out), (limp), (heavy breathing), (afterglow), (unsteady)" },
                  { id: "r18_fx_unfocused", label: "焦点が合わない演出セット", desc: "虚ろ＋ぼやけた視線＋放心", val: "(unfocused gaze), (dazed), (vacant eyes), (slack expression), (spent)" }
                ]
              }
            ]
          }
,
{
  title_ja: "😳 漫符連動",
  title_en: "Face Effects Sync",
  children: [
    {
      title_ja: "🤍 純愛＋漫符",
      title_en: "Tender + Face Effects",
      children: [
        { id: "r18_fx_face_tender_blush", label: "甘々赤面演出セット", desc: "やわらかい赤面＋見つめ合い", val: "(loving gaze), (soft blush), (gentle smile), (watery eyes), (locked eyes)" },
        { id: "r18_fx_face_tender_tears", label: "切な涙目演出セット", desc: "涙目＋頬染め＋切ない微笑み", val: "(tearing up), (soft blush), (sad smile), (yearning), (parted lips)" },
        { id: "r18_fx_face_tender_sigh", label: "安堵ため息演出セット", desc: "ため息＋脱力＋安心しきり", val: "(completely at ease), (sigh), (gentle smile), (relaxed body), (warm eyes)" },
        { id: "r18_fx_face_pure_hearts", label: "ハート頬純愛演出セット", desc: "頬ハート＋耳赤＋見つめ合い", val: "(heart cheek mark), (ear blush), (loving gaze), (soft smile), (affectionate)" },
        { id: "r18_fx_face_pure_well", label: "うるみ目幸福演出セット", desc: "涙ぐみ＋微笑み＋満たされた表情", val: "(eyes welling with tears), (soft smile), (warm blush), (fulfilled), (loving)" }
      ]
    },
    {
      title_ja: "🥀 背徳＋漫符",
      title_en: "Forbidden + Face Effects",
      children: [
        { id: "r18_fx_face_forbid_heavyblush", label: "羞恥赤面強化演出セット", desc: "激しい赤面＋視線逸らし＋汗", val: "(full-face blush), (heavy blush), (looking away coyly), (flying sweatdrops), (embarrassed)" },
        { id: "r18_fx_face_forbid_shadow", label: "禁忌影顔演出セット", desc: "顔に影＋背徳＋ためらい", val: "(forbidden), (shadow over face), (looking away), (trembling lips), (nervous)" },
        { id: "r18_fx_face_forbid_sweat", label: "露見焦り強化演出セット", desc: "周囲警戒＋汗＋赤面", val: "(almost caught), (aware of being watched), (flying sweatdrops), (blushing), (panic)" },
        { id: "r18_fx_face_taboo_lines", label: "背徳照れ線演出セット", desc: "照れ線＋強赤面＋目逸らし", val: "(embarrassment lines), (heavy blush), (looking away), (guilty), (ashamed)" },
        { id: "r18_fx_face_taboo_qmark", label: "禁忌はてな演出セット", desc: "疑問符＋汗＋背徳の戸惑い", val: "(question mark symbol), (nervous sweat), (hesitating), (forbidden), (flustered)" }
      ]
    },
    {
      title_ja: "⛓ 支配/服従＋漫符",
      title_en: "Dominance/Submissive + Face Effects",
      children: [
        { id: "r18_fx_face_dom_vein", label: "支配怒気演出セット", desc: "怒りマーク＋見下し＋強圧", val: "(dominant), (anger vein), (looking down), (glare), (furrowed_brow)" },
        { id: "r18_fx_face_sub_tears", label: "服従涙目演出セット", desc: "涙目＋赤面＋逆らえない", val: "(submissive), (tearing up), (blush), (downcast eyes), (trembling)" },
        { id: "r18_fx_face_sub_sweat", label: "懇願汗演出セット", desc: "汗＋懇願＋震え唇", val: "(pleading), (flying sweatdrops), (trembling lips), (watery eyes), (nervous)" },
        { id: "r18_fx_face_dom_mark", label: "支配青筋演出セット", desc: "青筋＋見下し＋圧", val: "(anger vein), (cold stare), (dominant), (looking down), (pressure)" },
        { id: "r18_fx_face_sub_teardrop", label: "服従片涙演出セット", desc: "片涙＋震え唇＋受け入れ", val: "(single tear), (trembling lips), (submissive), (obedient), (helpless)" },
        { id: "r18_fx_face_sub_sweat2", label: "服従焦り汗演出セット", desc: "汗＋潤み目＋逆らえなさ", val: "(nervous sweat), (watery eyes), (submissive), (flustered), (unable to resist)" }
      ]
    },
    {
      title_ja: "🛏 事後＋漫符",
      title_en: "Afterglow + Face Effects",
      children: [
        { id: "r18_fx_face_after_blush", label: "余韻赤面演出セット", desc: "事後＋頬染め＋微熱", val: "(afterglow), (soft blush), (half-closed eyes), (warm breath), (satisfied expression)" },
        { id: "r18_fx_face_after_shadow", label: "虚脱影顔演出セット", desc: "顔に影＋放心＋脱力", val: "(spent), (shadow over face), (vacant eyes), (slack expression), (limp)" },
        { id: "r18_fx_face_after_drool", label: "放心よだれ演出セット", desc: "よだれ＋虚ろ目＋余熱", val: "(afterglow), (drooling), (unfocused gaze), (slack expression), (heavy breathing)" },
        { id: "r18_fx_face_after_sleepy", label: "寝落ち余韻演出セット", desc: "寝息バブル＋半目＋余熱", val: "(sleeping bubble), (half-closed eyes), (afterglow), (soft panting), (limp)" },
        { id: "r18_fx_face_after_blank", label: "無表情余韻演出セット", desc: "抜けた表情＋焦点薄れ＋脱力", val: "(blank face), (misfocused eyes), (afterglow), (spent), (soft panting)" }
      ]
    },
    {
      title_ja: "🔥 火照り＋漫符",
      title_en: "Heat + Face Effects",
      children: [
        { id: "r18_fx_face_heat_flush", label: "火照り全開演出セット", desc: "全顔赤面＋湯気＋熱視線", val: "(full-face blush), (steam from face), (heated gaze), (parted lips), (heavy breathing)" },
        { id: "r18_fx_face_heat_hearts", label: "ときめき過多演出セット", desc: "頬ハート＋ハート飛び＋潤み目", val: "(heart cheek mark), (floating hearts), (watery eyes), (soft blush), (love struck)" },
        { id: "r18_fx_face_heat_melt", label: "熱っぽいとろ顔演出セット", desc: "火照り＋汗だらだら＋半目", val: "(flushed face), (sweat running down face), (half-closed eyes), (warm breath), (melted gaze)" },
        { id: "r18_fx_face_heat_bite", label: "火照り噛み唇演出セット", desc: "噛み唇＋赤面＋潤み目", val: "(biting lip), (full-face blush), (watery eyes), (heated), (parted lips)" },
        { id: "r18_fx_face_heat_shiver", label: "火照り震え演出セット", desc: "震え唇＋汗＋上気", val: "(trembling lips), (flying sweatdrops), (flushed face), (heated body), (restless)" },
        { id: "r18_fx_face_heat_haze", label: "熱ぼけ演出セット", desc: "焦点ゆるみ＋頬染め＋荒い息", val: "(hazy eyes), (soft blush), (heavy breathing), (parted lips), (melted expression)" },
        { id: "r18_fx_face_heat_steam", label: "蒸気上気演出セット", desc: "湯気＋全顔赤面＋熱っぽい息", val: "(steam from face), (full-face blush), (heavy breathing), (heated), (parted lips)" },
        { id: "r18_fx_face_heat_heartstorm", label: "ハート飛散演出セット", desc: "ハート飛び＋潤み目＋上気", val: "(floating hearts), (watery eyes), (full-face blush), (love struck), (heated)" }
      ]
    },
    {
      title_ja: "🫠 放心＋漫符",
      title_en: "Spent + Face Effects",
      children: [
        { id: "r18_fx_face_spent_dark", label: "余熱ぐったり演出セット", desc: "クマ＋脱力＋焦点薄れ", val: "(dark circles under eyes), (spent), (unfocused gaze), (slack expression), (heavy breathing)" },
        { id: "r18_fx_face_spent_puffy", label: "泣き腫れ放心演出セット", desc: "泣き腫れ＋涙跡＋ぼんやり", val: "(puffy eyes), (tear tracks), (dazed), (soft blush), (parted lips)" },
        { id: "r18_fx_face_spent_dizzy", label: "くらくら余韻演出セット", desc: "くらくら星＋虚ろ目＋ふらつき", val: "(dizzy stars), (vacant eyes), (reeling), (afterglow), (limp)" },
        { id: "r18_fx_face_spent_sigh", label: "吐息もれ放心演出セット", desc: "吐息＋半目＋放心", val: "(parted lips), (warm breath), (half-closed eyes), (spent), (vacant expression)" },
        { id: "r18_fx_face_spent_drool2", label: "よだれ余韻演出セット", desc: "よだれ＋潤み目＋脱力", val: "(drooling), (watery eyes), (slack expression), (afterglow), (limp)" },
        { id: "r18_fx_face_spent_blank", label: "焦点喪失演出セット", desc: "焦点ずれ＋表情抜け＋虚脱", val: "(misfocused eyes), (blank expression), (spent), (heavy breathing), (vacant eyes)" },
        { id: "r18_fx_face_spent_saliva", label: "唾液糸放心演出セット", desc: "唾液糸＋虚ろ目＋だらり", val: "(saliva trail), (vacant stare), (slack expression), (spent), (limp)" },
        { id: "r18_fx_face_spent_bubble2", label: "寝息放心演出セット", desc: "寝息バブル＋焦点抜け＋脱力", val: "(sleeping bubble), (vacant eyes), (spent), (soft panting), (limp)" }
      ]
    }
  ]
}

        ];
      } catch (e) { console.error("[Preset Packs] buildAdultExpressionFxPacks failed", e); }
    })();

    (function buildAdultRoleplayRecommendedSets(){
      try {
        var parentKey = "🔞 なりきりおすすめセット (Adult Roleplay Recommended Sets)";
        if (packs[parentKey]) return;

        var compKey = "📐 おすすめ構図 (Recommended Compositions)";
        var compArr = (Object.prototype.toString.call(packs[compKey]) === "[object Array]") ? packs[compKey] : [];

        // 📍 場所・状況（R-18）へ統合するデータ（旧: H-ロケーション/男女/表情/触手）
        var placeAndSituation = [
          { label: "🏩 ラブホテル", val: "(love hotel), (mirror room), (neon lights), (fancy bed), (pillows)" },
          { label: "🏩 お風呂・温泉", val: "(bathroom), (onsen), (steam), (wet body), (tiled wall), (soap)" },
          { label: "🏩 マジックミラー号", val: "(magic mirror truck), (vehicle interior), (city street outside window), (exposed to public), (voyeurism)" },
          { label: "🏩 公衆トイレ", val: "(public toilet stall), (cramped), (sitting on toilet), (pants down), (graffiti), (dirty tiles), (secret sex)" },
          { label: "🏩 野外露出", val: "(outdoor sex), (public nudity), (exposure), (shame), (risk of being seen)" },
          { label: "🏩 放課後の教室", val: "(classroom), (sunset), (on desk), (skirt lifted), (messy clothes), (blackboard), (watching door)" },

          { label: "👫 純愛・見つめ合い", val: "(1boy), (1girl), (missionary position), (sex), (locking eyes), (loving sex), (blushing), (intertwined fingers), (kissing), (romantic)" },
          { label: "👫 体格差", val: "(1boy), (1girl), (size difference), (height difference), (small girl), (stretching), (bulge), (masculine male)" },
          { label: "👫 寝取られ (NTR)", val: "(ntr), (cheating), (cuckold), (watching from closet), (video call), (crying), (forced smile)" },
          { label: "👫 着衣セックス", val: "(clothed sex), (sex with clothes on), (school uniform), (public indecency), (hastily)" },

          { label: "🤪 あへ顔", val: "(ahegao:1.3), (rolling eyes), (tongue out), (drooling), (v-shaped eyebrows)" },
          { label: "🤪 ハート目", val: "(heart-shaped pupils), (pink eyes), (infatuated), (love struck)" },
          { label: "🤪 虚ろ目", val: "(vacant eyes), (empty eyes), (no pupil highlights), (glassy eyes), (mind break), (broken expression)" },
          { label: "🤪 快楽堕ち", val: "(pleasure face), (blush), (slobber), (euphoric tears), (ecstatic expression)" },
          { label: "🤪 涙目・懇願", val: "(tears), (crying), (begging), (humiliation), (flushed face), (desperate moan)" },
          { label: "🤪 絶頂・震え", val: "(orgasm), (girl trembling in climax:1.5), (shaking), (arched back), (toes curling), (spasms), (body control)" },

          { label: "🐙 触手基本セット", val: "(tentacles), (slime), (mucus), (living tentacles), (bioluminescent), (thick tentacle), (slimy texture), (wriggling)" },
          { label: "🐙 生体スーツ・モノキニ", val: "(living monokini), (tentacle suit), (slime bodysuit), (pulsing texture), (fused with skin), (translucent slime), (jelly fabric), (glowing seams), (clinging tightly)" },
          { label: "🐙 スライム拘束", val: "(slime suit attack), (slime groping breasts), (slime sucking nipples), (arms locked behind back), (bound by slime), (unable to resist)" }, 
          { label: "触手迷宮の最下層", val: "(dungeon depths), (fleshy walls), (bioluminescent flora), (glowing pools of slime), (creepy atmosphere), (tentacles lurking in shadows)" },
          { label: "サイバーパンクの歓楽街", val: "(cyberpunk red light district), (neon signs), (holographic girls), (dirty alleyway), (rain), (puddles reflecting neon), (futuristic slum)" },
          { label: "廃ビル・無法地帯のアジト", val: "(abandoned building), (ruined interior), (graffiti), (dirty mattress on floor), (dim street light through broken window), (dusty air), (dangerous atmosphere)" },
          { label: "マジックミラーの取調室", val: "(interrogation room), (two-way mirror), (metal table), (dim fluorescent light), (concrete walls), (voyeurism), (cramped space)" },
          { label: "豪華なハーレムテント", val: "(harem tent), (middle eastern style), (silk pillows), (sheer curtains), (incense burner), (gold decorations), (warm sensual lighting)" }, 
          { label: "培養水槽の中 (SF・洗脳)", val: "(inside a glass test tube), (filled with glowing green liquid), (bubbles), (cables attached to body), (breathing mask), (sci-fi laboratory), (dim lighting)" },
          { label: "深夜の無人電車 (痴漢・露出)", val: "(empty train at midnight), (flickering fluorescent light), (moving scenery outside window), (hanging straps), (train interior), (suspenseful atmosphere)" },
          { label: "ゴシック廃教会 (儀式・陵辱)", val: "(abandoned gothic church), (moonlight shining through broken stained glass), (dust particles), (ruined altar), (creepy shadows), (sacred but corrupted)" },
          { label: "夜のVIPプール (ラグジュアリー)", val: "(night pool), (jacuzzi), (steam), (underwater lighting), (luxury hotel), (floating rose petals), (wet deck), (romantic but erotic)" },
          { label: "魔王城の深部・寝室 (ファンタジー)", val: "(demon lord's bedchamber), (gothic architecture), (red silk bed canopy), (candles), (skulls), (luxurious but ominous), (dark fantasy)" },
          { label: "魔法陣の地下室 (生贄)", val: "(underground basement), (glowing magic circle on the floor), (dusty air), (grimoires scattered), (stone walls), (ritual setting), (eerie glow)" },
          { label: "淫魔の森 (異界)", val: "(succubus forest), (glowing mushrooms), (pink mist), (twisted vines), (spores floating), (aphrodisiac atmosphere), (otherworldly)" },
          { label: "スラム街のゴミ捨て場", val: "(slum alleyway), (trash bags), (chainlink fence), (rain), (puddles reflecting neon), (dirty aesthetic), (dangerous area)" },
          { label: "宇宙船のキャビン (無重力)", val: "(spaceship cabin), (stars outside window), (zero gravity environment), (floating objects), (holographic screens), (sci-fi interior)" },
          { label: "ボロボロの公衆トイレ", val: "(dirty public restroom), (graffiti on walls), (flickering light), (broken mirror), (dirty tiles), (cramped stall), (grungy aesthetic)" }
        ];

                        // 🔞 なりきりおすすめセット（R-18）
        // - 体位は「ポーズ」側に統合済みのため、ここでは出さない
        var adultRoleplayBase = [
          { label: "アスモデウス (色欲の悪魔)", val: "(lust demon), (asmodeus), (revealing dark outfit), (demon horns), (succubus wings), (heart-shaped pupils), (seductive smile), (bewitching aura), (glowing tattoos)" },
          { label: "サキュバス (夢魔)", val: "(succubus), (micro bikini), (demon tail), (heart-shaped tail), (womb tattoo), (bat wings), (lewd expression), (fangs)" },
          { label: "高級娼婦・花魁", val: "(courtesan), (oiran), (disheveled kimono), (bare shoulders), (kiseru), (heavy makeup), (alluring gaze), (sensual atmosphere)" },
          { label: "悪堕ちシスター", val: "(corrupted nun), (revealing habit), (see-through clothes), (inverted cross), (lewd smile), (rosary), (mind break)" },
          { label: "敗北した姫騎士", val: "(defeated knight), (princess knight), (broken armor), (torn clothes), (humiliation), (messy hair), (dirt on skin), (despair)" },
          { label: "くノ一 (潜入・捕縛)", val: "(kunoichi), (ninja outfit), (fishnet armor), (thighhighs), (bound), (struggling), (ninja mask pulled down)" },
          { label: "闇医者・マッドサイエンティスト", val: "(mad scientist), (unbuttoned lab coat), (underboob), (holding glowing syringe), (crazy smile), (stethoscope), (messy hair)" },
          { label: "地雷系・病みかわ女子", val: "(jirai kei), (yamikawaii), (heavy makeup), (under-eye makeup), (dark circles), (oversized hoodie), (choker), (frilled skirt), (platform boots), (holding plushie), (mental instability)" },
          { label: "アンドロイド娼婦 (SF)", val: "(android), (cyberpunk courtesan), (glowing artificial skin), (mechanical joints), (barcode tattoo), (latex bodysuit), (holographic accessories), (subservient expression)" },
          { label: "ダークエルフの女戦士", val: "(dark elf), (dark skin), (white hair), (long pointed ears), (revealing leather armor), (tribal tattoos), (arrogant smile), (muscular female)" },
          { label: "魅惑の占い師", val: "(fortune teller), (gypsy outfit), (veil), (lots of jewelry), (gold bangles), (cleavage), (mysterious smile), (crystal ball), (incense smoke)" },
          { label: "女スパイ・エージェント", val: "(female spy), (secret agent), (tight black leather catsuit), (unzipped zipper), (holding silenced pistol), (tactical harness), (confident smirk)" },
          { label: "妖艶な未亡人", val: "(widow), (mourning dress), (black veil), (black lace lingerie showing), (mature female), (melancholic expression), (seductive glance), (tears)" },
          { label: "逆バニーガール (露出狂)", val: "(reverse bunny suit), (crotchless tights), (bare breasts), (pasties), (bunny ears), (bowtie), (shameless), (lewd smile)" },
          { label: "魔法少女・堕ち (絶望)", val: "(magical girl), (corrupted), (broken wand), (torn magical outfit), (dark aura), (tears), (despair), (mind break), (blank stare)" },
          { label: "吸血鬼の真祖 (ゴシック)", val: "(vampire lord), (gothic lolita), (fangs), (blood on lips), (red glowing eyes), (pale skin), (bat wings), (arrogant smile), (nobility)" },
          { label: "ギャル・ビッチ (現代)", val: "(gyaru), (blonde hair), (heavy makeup), (tanned skin), (messy school uniform), (loose socks), (piercings), (sticking out tongue), (bitchy)" },
          { label: "獣人・ケモミミ奴隷", val: "(beast girl), (wolf ears), (fluffy tail), (collar and leash), (bell choker), (subservient expression), (animalistic behavior), (kneeling)" },
          { label: "女怪盗 (潜入・ピンチ)", val: "(phantom thief), (cat mask pulled down), (tight black leather catsuit), (holding stolen jewel), (sweat), (breathing heavily), (caught)" },
          { label: "エイリアン娘 (人外SF)", val: "(alien girl), (blue skin), (sci-fi suit), (glowing markings), (tentacle hair), (non-human eyes), (curious expression)" },
          { label: "サメ娘・モンスター (海洋)", val: "(shark girl:1.2), (prominent dorsal fin:1.2), (thick muscular shark tail:1.2), (rows of serrated teeth:1.15), (predatory eyes:1.1), (gill slits:1.15), (rough dermal denticles texture:1.1), (apex predator aura:1.1), (wet skin), (true biological fusion), (not cosplay)" },
          { label: "サディスティック女王様", val: "(dominatrix), (leather corset), (high heels), (holding whip), (stepping on viewer), (sadistic smile), (floor pov), (mistress)" },
          { label: "ポンコツ悪魔メイド", val: "(demon maid), (maid headdress), (frilly apron), (small demon horns), (heart tail), (clumsy smile), (embarrassed), (trying to seduce)" }
        ];

        function __pickAdultRoleplayByLabels(src, labels) {
          if (Object.prototype.toString.call(src) !== "[object Array]") return [];
          var map = Object.create(null);
          for (var i = 0; i < src.length; i++) {
            var item = src[i];
            if (!item || typeof item !== "object") continue;
            map[String(item.label || "")] = item;
          }
          var out = [];
          for (var j = 0; j < labels.length; j++) {
            var it = map[labels[j]];
            if (it) out.push(it);
          }
          return out;
        }

        var roleplayChildren = [
          {
            title_ja: "😈 悪魔・魔性",
            title_en: "Demons & Temptresses",
            children: __ppWithPairHelpers(__pickAdultRoleplayByLabels(adultRoleplayBase, [
              "アスモデウス (色欲の悪魔)",
              "サキュバス (夢魔)",
              "サディスティック女王様",
              "ポンコツ悪魔メイド"
            ]), true)
          },
          {
            title_ja: "🏰 ダークファンタジー",
            title_en: "Dark Fantasy",
            children: __ppWithPairHelpers(__pickAdultRoleplayByLabels(adultRoleplayBase, [
              "悪堕ちシスター",
              "敗北した姫騎士",
              "ダークエルフの女戦士",
              "魅惑の占い師",
              "魔法少女・堕ち (絶望)",
              "吸血鬼の真祖 (ゴシック)",
              "獣人・ケモミミ奴隷"
            ]), true)
          },
          {
            title_ja: "🕵️ 潜入・裏社会",
            title_en: "Infiltration & Underworld",
            children: __ppWithPairHelpers(__pickAdultRoleplayByLabels(adultRoleplayBase, [
              "高級娼婦・花魁",
              "くノ一 (潜入・捕縛)",
              "闇医者・マッドサイエンティスト",
              "女スパイ・エージェント",
              "女怪盗 (潜入・ピンチ)"
            ]), true)
          },
          {
            title_ja: "🌆 現代・退廃",
            title_en: "Modern Decadence",
            children: __ppWithPairHelpers(__pickAdultRoleplayByLabels(adultRoleplayBase, [
              "地雷系・病みかわ女子",
              "妖艶な未亡人",
              "逆バニーガール (露出狂)",
              "ギャル・ビッチ (現代)"
            ]), true)
          },
          {
            title_ja: "🤖 SF・人外",
            title_en: "Sci-Fi & Nonhuman",
            children: __ppWithPairHelpers(__pickAdultRoleplayByLabels(adultRoleplayBase, [
              "アンドロイド娼婦 (SF)",
              "エイリアン娘 (人外SF)",
              "サメ娘・モンスター (海洋)"
            ]), true)
          }
        ];

        roleplayChildren = __ppWithPairHelpers(roleplayChildren, true);

        var placeChildren = placeAndSituation.concat([
          { label: "触手迷宮の最下層", val: "(dungeon depths), (fleshy walls), (bioluminescent flora), (glowing pools of slime), (creepy atmosphere), (tentacles lurking in shadows)" },
          { label: "サイバーパンクの歓楽街", val: "(cyberpunk red light district), (neon signs), (holographic girls), (dirty alleyway), (rain), (puddles reflecting neon), (futuristic slum)" },
          { label: "廃ビル・無法地帯のアジト", val: "(abandoned building), (ruined interior), (graffiti), (dirty mattress on floor), (dim street light through broken window), (dusty air), (dangerous atmosphere)" },
          { label: "マジックミラーの取調室", val: "(interrogation room), (two-way mirror), (metal table), (dim fluorescent light), (concrete walls), (voyeurism), (cramped space)" },
          { label: "豪華なハーレムテント", val: "(harem tent), (middle eastern style), (silk pillows), (sheer curtains), (incense burner), (gold decorations), (warm sensual lighting)" }
        ]);

        var physiologicalReactions = [
          { label: "🥵 激しい息・荒い呼吸", val: "(heavy breathing), (panting), (gasping), (heaving chest), (sweat)", desc: "疲労や興奮による荒い息遣い" },
          { label: "🥵 ピンクの吐息・熱気", val: "(hot breath), (pink sigh), (warm breath), (parted lips), (flushed face), (aroused)", desc: "甘い吐息・火照った顔" },
          { label: "🤤 涎・だらしない口元", val: "(drooling), (saliva trail), (messy lips), (tongue out), (glazed eyes)", desc: "理性が飛んだ状態" },
          { label: "💦 発汗・火照り", val: "(heavy sweat), (glistening skin), (flushed body), (red skin), (feverish)", desc: "全身の熱気と汗" },
          { label: "💓 鼓動・胸の高鳴り", val: "(hand on chest), (tight chest), (blushing intensely), (nervous sweat), (heartbeat)", desc: "緊張や高揚感" },
          { label: "🫧 涙目・潤んだ瞳", val: "(watery eyes), (tears accumulating), (glossy eyes), (pleading eyes)", desc: "感極まった表情の強調" }
        ];

        var adultAtmosphere = [
          { label: "🌫️ 淫靡なピンクの霧", val: "(pink fog), (glowing pink mist), (aphrodisiac atmosphere), (floating dust motes), (dreamy lighting)", desc: "サキュバスや夢魔の空間" },
          { label: "♨️ 濃密な湯気・熱気", val: "(heavy steam), (condensation), (wet environment), (sauna-like heat), (hazy atmosphere)", desc: "風呂場や密室の湿度" },
          { label: "✨ 怪しい発光・体液光", val: "(bioluminescent glow), (neon pink and blue lighting), (glowing bodily fluids), (dark cinematic lighting)", desc: "SFや触手、魔界の光源" },
          { label: "🕯️ 退廃的な薄暗さ", val: "(dimly lit), (candlelight), (heavy shadows), (sultry atmosphere), (decadent mood)", desc: "地下室や夜の密室" },
          { label: "💜 魅了のオーラ", val: "(charming aura), (floating heart particles:1.2), (magical pheromones), (soft focus), (ethereal glow)", desc: "空間全体に漂う魅了効果" },
          { label: "⛓️ 閉塞感・圧迫感", val: "(claustrophobic atmosphere), (cramped space), (distorted perspective), (dutch angle), (high contrast)", desc: "逃げ場のない状況の演出" }
        ];

        var adultTimeProgression = [
          { label: "⏳ 事前：ゆっくりと脱ぐ", val: "(slowly undressing), (unbuttoning shirt), (half-slipped off shoulder), (anticipation), (blush)", desc: "行為の前の焦らし" },
          { label: "⏳ 事前：服の乱れ", val: "(messy clothes), (clothes falling off), (revealing skin), (bra strap slipping), (disheveled)", desc: "無防備になりかけの状態" },
          { label: "⏳ 最中：乱れる髪と服", val: "(messy hair), (sweat), (disheveled clothes), (intense action), (dynamic tension)", desc: "ピーク時の乱れ" },
          { label: "⏳ 事後：心地よい余韻", val: "(afterglow), (cuddling in bed), (messy hair), (soft breathing), (gentle smile), (relaxed)", desc: "終わった後の甘い空気" },
          { label: "⏳ 事後：朝のまどろみ", val: "(morning after), (tangled bedsheets), (sunlight through window), (oversized shirt), (sleepy eyes)", desc: "シーツにくるまった翌朝" },
          { label: "⏳ 事後：疲労と放心", val: "(exhausted), (mind break), (heavy breathing), (smudged makeup), (messy room), (lying on back)", desc: "激しかった後の放心状態" }
        ];

        var adultGapMoe = [
          { label: "🐥 小動物・純真キャラの陥落", val: "(trembling small body), (ruffled fluffy feathers:1.2), (teary upward glance), (trying to hide face), (soft whimper), (helpless)", desc: "ふわふわした小鳥のような子の無防備な乱れ" },
          { label: "👑 気高いキャラの敗北", val: "(broken pride), (helpless expression), (tears of frustration), (trembling lips), (messy elegant clothes)", desc: "プライドが高い子の屈服" },
          { label: "🧊 クールキャラのデレ", val: "(melting expression), (unusually affectionate), (clinging tightly), (heavy blush), (needing attention)", desc: "普段冷たい子の甘えた姿" },
          { label: "⚔️ 強気キャラの懇願", val: "(begging), (looking up pleadingly), (desperate expression), (weakened resistance), (submissive)", desc: "余裕をなくしてすがる姿" },
          { label: "🌸 お姉さんキャラの余裕喪失", val: "(lost composure), (panicking), (sweating heavily), (wide-eyed), (messy mature aura)", desc: "大人びたキャラの焦り" }
        ];

        var adultSkinContact = [
          { label: "🧴 肌の質感：オイル・汗", val: "(glistening skin), (baby oil), (sweat droplets on collarbone), (wet skin), (shiny body)", desc: "テカテカ・ツヤツヤの肌" },
          { label: "🧴 服の質感：透け・濡れ", val: "(wet transparent fabric), (see-through clothes), (clinging wet shirt), (visible underwear)", desc: "濡れ透け・張り付き" },
          { label: "🫂 密着：強い抱擁", val: "(tight embrace), (skin to skin), (pressing bodies together), (body heat), (hugging tightly)", desc: "肌と肌の密着感" },
          { label: "🫂 密着：指先の絡み", val: "(interlocking fingers), (holding hands tightly), (grasping bedsheets), (tense hands)", desc: "手元の感情表現" },
          { label: "🫂 体勢：またがり", val: "(straddling), (sitting on lap), (hands on hips), (dominant posture), (close proximity)", desc: "密着した騎乗・膝上" }
        ];

        var adultGaze = [
          { label: "👁️ 視線：上目遣い・懇願", val: "(looking up at viewer), (teary eyes), (pleading gaze), (puppy eyes), (sweet look)", desc: "甘えるような上目遣い" },
          { label: "👁️ 視線：恥じらい・目逸らし", val: "(looking away coyly), (avoiding eye contact), (heavy blush), (shy downward glance)", desc: "照れて目を合わせられない" },
          { label: "👁️ 視線：誘惑・挑発", val: "(seductive stare), (looking at viewer playfully), (parted lips), (half-closed eyes), (confident smirk)", desc: "余裕のある誘い" },
          { label: "👁️ 視線：見下す・冷たい", val: "(looking down on viewer), (cold gaze), (disdainful stare), (half-lidded eyes), (arrogant)", desc: "サディスティック・ご褒美" },
          { label: "👁️ 視線：虚ろ・焦点が合わない", val: "(vacant gaze), (unfocused eyes), (looking into the distance), (mind break), (glazed eyes)", desc: "理性が飛んだ瞳" }
        ];

        var adultRevealing = [
          { label: "👙 胸元を見せる・開く", val: "(pulling down clothes), (showing cleavage), (deep neckline), (breast emphasis), (seductive pose)", desc: "服を引っ張って谷間を見せる" },
          { label: "👙 服まくり (上)・下乳", val: "(lifting shirt), (underboob), (showing stomach), (midriff), (exposed torso)", desc: "シャツを捲り上げる" },
          { label: "👙 スカートまくり・チラ見せ", val: "(lifting skirt), (showing panties), (thigh emphasis), (one hand on skirt), (flirtatious)", desc: "スカートの裾をつまんで上げる" },
          { label: "👙 衣服ずり落ち・半脱ぎ", val: "(clothes slipping down), (half-slipped off shoulder), (pants down), (careless dressing), (exposed hips)", desc: "肩や腰から服が落ちかけている状態" },
          { label: "👙 股開き・誘惑ポーズ", val: "(spreading legs), (m-leg pose), (inviting posture), (hands on thighs), (sitting with legs apart)", desc: "脚を開いて誘うような姿勢" },
          { label: "👙 わき見せ・バンザイ", val: "(arms up), (stretching arms), (showing armpits), (hands behind head), (chest emphasis)", desc: "両手を上げて無防備な胸元と脇を見せる" },
          { label: "👙 見せつけ・誇示", val: "(presenting to viewer), (arched back), (body emphasis), (shameless), (lewd pose)", desc: "自身の身体を強調して見せつける" }
        ];

        var pair = [
          { label: "シマエナガ娘の陥落 × 密室の熱気", val: "(idol-style outfit), (down feather texture:1.2), (trembling small body), (ruffled fluffy feathers:1.2), (heavy breathing), (teary upward glance), (tight embrace), (sweat droplets on collarbone), (pink fog), (soft focus)", desc: "純真な鳥っ娘のギャップと密着" },
          { label: "女騎士の敗北 × 屈辱の視線", val: "(defeated knight), (broken armor), (broken pride), (tears of frustration), (looking up at viewer), (pleading gaze), (messy hair), (heavy sweat), (dimly lit)", desc: "気高いキャラが余裕をなくす瞬間" },
          { label: "クーデレ女子 × 事後の甘い余韻", val: "(expressionless girl:0.8), (melting expression), (cuddling in bed), (afterglow), (skin to skin), (interlocking fingers), (looking away coyly), (morning after), (soft lighting)", desc: "普段クールな子のギャップと肌の温もり" },
          { label: "スライム拘束 × 虚ろな瞳", val: "(tentacles), (slime suit attack), (bound by slime), (claustrophobic atmosphere), (vacant gaze), (mind break), (drooling), (heavy breathing), (dark cinematic lighting)", desc: "理性が飛んだ絶望とエフェクト" },
          { label: "サキュバス × 淫靡な霧と誘惑", val: "(succubus), (micro bikini), (aphrodisiac atmosphere), (pink fog), (seductive stare), (parted lips), (straddling), (glistening skin), (floating heart particles:1.2)", desc: "空間エフェクトと視線の王道コンボ" },
          { label: "サキュバス × 夢魔の搾精空間", val: "(succubus), (micro bikini), (dream world), (pink fog), (floating heart particles:1.2), (glowing bed), (seductive pose), (magical atmosphere), (soft focus)" },
          { label: "娼婦 × サイバーパンク路地裏", val: "(courtesan), (revealing cyberpunk outfit), (cyberpunk city), (neon lights), (dark alley), (leaning against wall), (smoking), (waiting for customer), (rain), (wet skin)" },
          { label: "悪堕ちシスター × 穢された祭壇", val: "(corrupted nun), (revealing habit), (desecrated altar), (red candles), (blood stains), (dark ritual), (gothic church), (sinful), (moonlight through stained glass)" },
          { label: "バニーガール × VIPカジノ", val: "(bunny girl suit), (fishnet tights), (vip casino room), (roulette table), (champagne glass), (dim luxury lighting), (cigar smoke), (adult atmosphere)" },
          { label: "女教師 × 放課後の秘密の補習", val: "(female teacher), (tight suit), (unbuttoned shirt), (glasses), (empty classroom), (sunset), (orange sky), (sitting on desk), (seductive gaze), (after school)" },
          { label: "地雷系女子 × ネオン輝くトー横", val: "(jirai kei), (oversized hoodie), (heavy makeup), (cyberpunk alleyway), (neon street lights), (rainy night), (squatting), (looking up at viewer), (dirty aesthetic), (lonely)" },
          { label: "アンドロイド娼婦 × カプセルホテル", val: "(android courtesan), (latex bodysuit), (glowing mechanical parts), (futuristic capsule bed), (neon pink and blue lighting), (cables attached to body), (charging mode), (sci-fi)" },
          { label: "女スパイ × レーザートラップ拘束", val: "(female spy), (tight leather catsuit), (high-tech vault), (red laser grid), (dodging lasers), (sweat), (stretching body), (dynamic tension), (mission impossible style)" },
          { label: "ダークエルフ × オークの地下牢（敗北）", val: "(dark elf warrior), (torn leather armor), (dark skin), (dirty body), (orc dungeon), (chains on wrists), (torches), (despair), (looking away in shame), (cruel fate)" },
          { label: "魅惑の占い師 × 香煙漂う怪しい天幕", val: "(fortune teller), (cleavage), (gypsy clothes), (dimly lit tent), (purple magic smoke), (incense), (crystal ball glowing), (seductive gaze), (mystical atmosphere)" },
          { label: "未亡人 × 昭和レトロな和室（背徳）", val: "(mature widow), (black kimono pulled down), (tatami room), (shoji screen), (moonlight casting shadows), (retro japanese setting), (melancholic but aroused), (secret affair)" },
          { label: "アスモデウス × 淫靡な深紅の霧 (七つの大罪)", val: "(asmodeus), (lust demon), (bewitching alluring posture:1.1), (intoxicating gaze:1.3), (glossy wet lips), (dewy skin), (sweat glistening on collarbone), (intricately detailed sheer black lace attire), (dark silk draping), (steamy deep reddish atmosphere), (glowing pink pheromone mist), (floating dust motes), (cinematic lighting), (dramatic chiaroscuro), (neon pink rim lighting), (volumetric lighting)" },
          { label: "魔法少女 × 培養水槽 (堕ち・改造)", val: "(corrupted magical girl), (broken wand), (inside a glass test tube), (filled with glowing green liquid), (tentacles wrapping around body), (bubbles), (mind break), (blank stare)" },
          { label: "ギャル × 深夜の無人電車 (痴漢・露出)", val: "(gyaru), (tanned skin), (messy school uniform), (empty train at midnight), (lifting skirt), (flickering fluorescent light), (blushing), (biting lip), (secretive)" },
          { label: "吸血鬼の真祖 × ゴシック廃教会 (儀式)", val: "(vampire lord), (fangs), (blood on lips), (abandoned gothic church), (moonlight shining through broken stained glass), (lying on ruined altar), (seductive gaze), (gothic atmosphere)" },
          { label: "獣人娘 × 魔王城の寝室 (ペット)", val: "(beast girl), (wolf ears), (collar and leash), (demon lord's bedchamber), (red silk bed), (kneeling), (subservient expression), (waiting for master)" },
          { label: "女怪盗 × スラム街の路地裏 (逃亡・拘束)", val: "(phantom thief), (tight leather suit), (cat mask pulled down), (slum alleyway), (rain), (pinned against the wall), (breathing heavily), (caught), (despair)" },
          { label: "エイリアン娘 × 宇宙船のキャビン (無重力)", val: "(alien girl), (blue skin), (glowing markings), (spaceship cabin), (zero gravity environment), (floating), (stars outside window), (sci-fi erotica)" },
          { label: "女王様 × 夜のVIPプール (調教)", val: "(dominatrix), (leather corset), (holding whip), (night pool), (underwater lighting), (stepping on someone), (sadistic smile), (luxury atmosphere)" },
          { label: "逆バニー × ボロボロの公衆トイレ (待機)", val: "(reverse bunny suit), (crotchless tights), (dirty public restroom), (graffiti), (sitting on toilet closed lid), (waiting for customer), (lewd expression), (grungy)" },
          { label: "サメ娘 × 淫魔の森 (異種姦・発情)", val: "(shark girl), (sharp teeth), (wet skin), (succubus forest), (glowing mushrooms), (pink mist), (mating press), (animalistic lust), (drooling)" },
          { label: "悪魔メイド × 魔法陣の地下室 (儀式失敗)", val: "(demon maid), (french maid outfit), (torn clothes), (underground basement), (glowing magic circle on the floor), (bound with glowing chains), (scared expression), (tears)" }
        ];

        packs[parentKey] = [
          { title_ja: "🎭 なりきり", title_en: "Roleplay", children: roleplayChildren },
          { title_ja: "🏩 ロケーション（R-18）", title_en: "Locations (R-18)", children: placeChildren },
          { title_ja: "🥵 吐息・生理反応", title_en: "Physiological Reactions", children: physiologicalReactions },
          { title_ja: "🔞 雰囲気・空間効果", title_en: "Atmosphere & Effects", children: adultAtmosphere },
          { title_ja: "🕰️ 状態変化（事前・事後）", title_en: "Time & State Changes", children: adultTimeProgression },
          { title_ja: "💘 ギャップ・陥落", title_en: "Gap Moe & Submission", children: adultGapMoe },
          { title_ja: "🧴 肌の質感・密着", title_en: "Skin & Contact", children: adultSkinContact },
          { title_ja: "👁️ 視線・駆け引き", title_en: "Sensual Gaze", children: adultGaze },
          { title_ja: "👙 露出・見せつけ仕草", title_en: "Revealing Gestures", children: adultRevealing },
          { title_ja: "🎵 おすすめ組み合わせ", title_en: "Roleplay × Situation", children: pair },
          { title_ja: "📐 おすすめ構図", title_en: "Recommended Compositions", children: compArr }
        ];

      } catch (e) { console.error("[Preset Packs] buildAdultRoleplayRecommendedSets failed", e); }
    })();

  }

  // 3. ネガティブセット (共通)
  Object.assign(packs, {
    "🚫 ネガティブセット (Negative Sets)": [
      { label: "基本ネガティブ", val: "low quality, worst quality, out of focus, ugly, error, jpeg artifacts, lowers, blurry, bokeh" },
      { label: "人体崩壊防止", val: "bad anatomy, long neck, deformed, mutated, disfigured, malformed hands, missing limb, floating limbs, disconnected limbs, extra limb, missing fingers, extra fingers, liquid fingers, poorly drawn hands, mutation" },
      { label: "目のハイライト完全除去", val: "eye highlight, reflection, sparkle, light particles, bright eyes, beautiful detailed eyes, happy, vibrant eyes" },
      { label: "不要な要素 (ロゴ等)", val: "text, watermark, signature, username, logo, qr code, bar code" }
    ]
  });

  window.__PP_DB.packs = packs;
})();


/* === Roleplay-linked Expression Support Packs === */
(function buildRoleplayExpressionSupportPacks(){
  try {
    var db = (window.__PP_DB && window.__PP_DB.packs) ? window.__PP_DB.packs
      : (window.PRESET_PACKS_DB || window.__PRESET_PACKS_DB || null);
    if (!db) return;
    var key = "🎭 なりきり連動・表情補助 (Roleplay-linked Expression Support)";
    if (db[key]) return;
    db[key] = [
      {
        title_ja: "🛡 騎士系",
        title_en: "Knight Type",
        children: [
          { id: "rolefx_knight_pride", label: "騎士の矜持セット", desc: "誇り・威厳・不退転", val: "proud gaze, dignified expression, unwavering resolve, restrained anger, honorable aura" },
          { id: "rolefx_knight_calm", label: "静かな決意セット", desc: "冷静・信念・覚悟", val: "calm eyes, composed face, quiet determination, disciplined expression, focused stare" },
          { id: "rolefx_knight_battle", label: "戦場騎士セット", desc: "怒りを制御した戦意", val: "battle focus, gritted teeth, stern face, rational anger, fearless expression" },
          { id: "rolefx_knight_noble", label: "高潔騎士セット", desc: "高貴・気高い・堂々", val: "noble smile, high pride, regal bearing, clean resolve, upright gaze" },
          { id: "rolefx_knight_rebel", label: "反骨騎士セット", desc: "負けん気・一歩も引かない", val: "defiant eyes, rebellious pride, one step forward, unyielding expression, challenging stare" }
        ]
      },
      {
        title_ja: "🫖 メイド系",
        title_en: "Maid Type",
        children: [
          { id: "rolefx_maid_gentle", label: "やわらか接客セット", desc: "微笑み・親しみ・安心", val: "gentle smile, warm expression, kind eyes, polite affection, soft hospitality" },
          { id: "rolefx_maid_shy", label: "恥じらいメイドセット", desc: "照れ・顔隠し・控えめ", val: "shy smile, blush, looking away, reserved tenderness, modest expression" },
          { id: "rolefx_maid_trust", label: "信頼奉仕セット", desc: "共感・安心しきり・無防備", val: "trusting eyes, relieved smile, unguarded calm, gentle nod, affectionate warmth" },
          { id: "rolefx_maid_serious", label: "有能メイドセット", desc: "落ち着き・手際・忠実", val: "composed face, competent calm, attentive gaze, disciplined smile, reliable aura" },
          { id: "rolefx_maid_tease", label: "いたずらメイドセット", desc: "親しげ・小悪魔寄り", val: "playful smile, teasing eyes, soft wink, mischievous warmth, sweet provocation" }
        ]
      },
      {
        title_ja: "🎤 アイドル系",
        title_en: "Idol Type",
        children: [
          { id: "rolefx_idol_bright", label: "王道アイドルセット", desc: "輝き・笑顔・きらめき", val: "sparkling eyes, radiant smile, cheerful expression, stage confidence, adorable charm" },
          { id: "rolefx_idol_cute", label: "あざと可愛いセット", desc: "上目遣い・ウィンク・甘え", val: "cute wink, looking up, playful pout, calculated cute, charming smile" },
          { id: "rolefx_idol_tear", label: "感動アイドルセット", desc: "うるみ・泣き笑い・達成感", val: "teary smile, emotional glow, relieved joy, touched expression, heartfelt eyes" },
          { id: "rolefx_idol_pride", label: "センターの誇りセット", desc: "自信・誇り・堂々", val: "confident smile, center aura, proud expression, fearless gaze, star quality" },
          { id: "rolefx_idol_nervous", label: "本番前緊張セット", desc: "焦り・深呼吸・覚悟", val: "nervous smile, hidden tension, deep breath, focused eyes, pre-show resolve" }
        ]
      },
      {
        title_ja: "👑 魔王系",
        title_en: "Demon Lord Type",
        children: [
          { id: "rolefx_maou_dom", label: "魔王威圧セット", desc: "見下し・余裕・圧", val: "domineering smile, looking down, overwhelming pressure, supreme confidence, regal menace" },
          { id: "rolefx_maou_mad", label: "狂気魔王セット", desc: "陶酔・執着・不穏", val: "mad smile, obsessed gaze, eerie calm, ecstatic madness, unsettling eyes" },
          { id: "rolefx_maou_cold", label: "冷酷支配セット", desc: "冷徹・感情薄い・断罪", val: "cold stare, emotionless cruelty, silent judgment, icy contempt, ruthless calm" },
          { id: "rolefx_maou_pride", label: "覇王の余裕セット", desc: "格上の余裕・鼻で笑う", val: "arrogant smile, effortless superiority, disdainful amusement, throne aura, untouchable pride" },
          { id: "rolefx_maou_rage", label: "逆鱗セット", desc: "抑えた怒り・破滅の兆し", val: "suppressed fury, dangerous calm, lethal glare, destructive intent, wrathful presence" }
        ]
      },
      {
        title_ja: "😇 天使系",
        title_en: "Angel Type",
        children: [
          { id: "rolefx_angel_gentle", label: "慈愛セット", desc: "優しさ・包容・安堵", val: "compassionate smile, gentle eyes, serene expression, holy warmth, comforting presence" },
          { id: "rolefx_angel_pure", label: "清廉セット", desc: "透明感・静けさ・純真", val: "pure gaze, tranquil face, sacred calm, innocent glow, immaculate composure" },
          { id: "rolefx_angel_sorrow", label: "哀しみの天使セット", desc: "慈悲・切なさ・涙", val: "sad smile, merciful eyes, quiet tears, bittersweet grace, tender sorrow" },
          { id: "rolefx_angel_judge", label: "審判セット", desc: "静かな威厳・断罪", val: "solemn gaze, divine authority, righteous anger, holy judgment, unwavering eyes" },
          { id: "rolefx_angel_guard", label: "守護天使セット", desc: "覚悟・見守り・信頼", val: "protective gaze, calm resolve, reassuring smile, vigilant kindness, steadfast devotion" }
        ]
      },
      {
        title_ja: "😈 悪魔系",
        title_en: "Devil Type",
        children: [
          { id: "rolefx_devil_tempt", label: "誘惑悪魔セット", desc: "小悪魔・誘い・熱視線", val: "tempting smile, bedroom eyes, teasing gaze, sly charm, seductive confidence" },
          { id: "rolefx_devil_sadist", label: "嗜虐悪魔セット", desc: "見下し・楽しむ残酷さ", val: "sadistic grin, contemptuous gaze, cruel amusement, playful malice, taunting eyes" },
          { id: "rolefx_devil_cool", label: "冷笑悪魔セット", desc: "冷たい余裕・鼻で笑う", val: "cold smirk, detached confidence, disdainful eyes, quiet menace, superior amusement" },
          { id: "rolefx_devil_obsess", label: "執着悪魔セット", desc: "狂気・独占欲・粘つき", val: "obsessive stare, twisted affection, eerie smile, possessive eyes, unstable devotion" },
          { id: "rolefx_devil_fall", label: "堕天の気配セット", desc: "影・背徳・陰り", val: "fallen grace, shadowed smile, sinful allure, dark tenderness, forbidden aura" }
        ]
      }
    ];
  } catch (e) {}
})();

(function buildAdultRoleplayExpressionSupportPacks(){
  try {
    var db = (window.__PP_DB && window.__PP_DB.packs) ? window.__PP_DB.packs
      : (window.PRESET_PACKS_DB || window.__PRESET_PACKS_DB || null);
    if (!db) return;
    var isSecretUnlocked = localStorage.getItem("MY_SECRET_UNLOCK") === "true";
    if (!isSecretUnlocked) return;
    var key = "🔞 なりきり連動・表情補助 (Adult Roleplay-linked Expression Support)";
    if (db[key]) return;
    db[key] = [
      {
        title_ja: "🤍 純愛系",
        title_en: "Tender Love",
        children: [
          { id: "adult_rolefx_love_soft", label: "いちゃ甘セット", desc: "見つめ合い・微笑み・安心", val: "loving gaze, gentle smile, soft blush, trusting eyes, sweet warmth" },
          { id: "adult_rolefx_love_melt", label: "とろけ恋情セット", desc: "とろ目・頬染め・恋慕", val: "melting expression, half-closed eyes, adoring face, flushed cheeks, affectionate longing" },
          { id: "adult_rolefx_love_tears", label: "幸せうるみセット", desc: "幸福感・泣き笑い・余韻", val: "happy tears, relieved smile, tearful joy, soft afterglow, fulfilled expression" },
          { id: "adult_rolefx_love_cling", label: "離れたくないセット", desc: "抱きつき・引き止め・依存気味", val: "clingy affection, needy eyes, holding close, tender pleading, don't leave me" },
          { id: "adult_rolefx_love_unguarded", label: "無防備な信頼セット", desc: "安心しきり・身を預ける", val: "unguarded trust, relaxed smile, leaning in, warm dependence, safe tenderness" }
        ]
      },
      {
        title_ja: "🥀 背徳系",
        title_en: "Forbidden",
        children: [
          { id: "adult_rolefx_forbid_exposed", label: "露見寸前セット", desc: "バレかけ・人目意識・焦り", val: "about to be caught, anxious glance, aware of onlookers, hidden panic, guilty blush" },
          { id: "adult_rolefx_forbid_shame", label: "背徳羞恥セット", desc: "赤面・ためらい・罪悪感", val: "shameful blush, hesitant eyes, guilty pleasure, conflicted expression, embarrassed breathing" },
          { id: "adult_rolefx_forbid_accept", label: "禁忌受容セット", desc: "してはいけない自覚＋受容", val: "forbidden desire, conflicted acceptance, sinful longing, trembling smile, guilty surrender" },
          { id: "adult_rolefx_forbid_obsess", label: "背徳陶酔セット", desc: "背徳感に酔う", val: "sinful ecstasy, intoxicated eyes, dangerous smile, forbidden bliss, morally grey delight" },
          { id: "adult_rolefx_forbid_secret", label: "秘密共有セット", desc: "二人だけの背徳感", val: "shared secret, covert smile, hidden thrill, intimate conspiracy, illicit closeness" }
        ]
      },
      {
        title_ja: "⛓ 支配/服従系",
        title_en: "Dominance & Submission",
        children: [
          { id: "adult_rolefx_dom_control", label: "支配視線セット", desc: "見下し・命令・余裕", val: "commanding gaze, superior smile, looking down, absolute control, dominant confidence" },
          { id: "adult_rolefx_dom_cruel", label: "追い込み支配セット", desc: "楽しむ支配・圧", val: "predatory smile, pressuring eyes, delighted cruelty, cornering gaze, merciless composure" },
          { id: "adult_rolefx_sub_beg", label: "懇願服従セット", desc: "懇願・上目遣い・観念", val: "pleading eyes, submissive expression, resigned acceptance, upward gaze, vulnerable dependence" },
          { id: "adult_rolefx_sub_break", label: "心折れ服従セット", desc: "逆らえない・力が抜ける", val: "broken will, can't resist, trembling surrender, drained strength, obedient despair" },
          { id: "adult_rolefx_sub_devote", label: "従属献身セット", desc: "従順・身を委ねる", val: "devoted submission, yielding gaze, compliant smile, total surrender, trusting obedience" }
        ]
      },
      {
        title_ja: "🛏 事後系",
        title_en: "Afterglow",
        children: [
          { id: "adult_rolefx_after_bliss", label: "満たされ余韻セット", desc: "幸福感・余熱・微笑み", val: "afterglow, blissful smile, satisfied eyes, lingering warmth, fulfilled calm" },
          { id: "adult_rolefx_after_blank", label: "放心虚脱セット", desc: "虚ろ・脱力・焦点ずれ", val: "blank stare, limp body, out of focus eyes, drained expression, exhausted calm" },
          { id: "adult_rolefx_after_cling", label: "寄り添い余熱セット", desc: "抱きつき・離れがたい", val: "clingy afterglow, cuddling close, lingering touch, soft dependence, sleepy affection" },
          { id: "adult_rolefx_after_tremble", label: "震え残りセット", desc: "余震・息荒い・熱感", val: "trembling aftermath, shaky breath, flushed exhaustion, lingering intensity, weakened smile" },
          { id: "adult_rolefx_after_burnout", label: "燃え尽きセット", desc: "完全燃焼・思考停止", val: "burned out, thoughtless haze, spent expression, dazed calm, emptied bliss" }
        ]
      },
      {
        title_ja: "🦇 サキュバス系",
        title_en: "Succubus",
        children: [
          { id: "adult_rolefx_succubus_invite", label: "甘い誘惑セット", desc: "上目遣い・挑発・熱視線", val: "inviting gaze, teasing smile, bedroom eyes, playful temptation, seductive confidence" },
          { id: "adult_rolefx_succubus_feed", label: "吸精陶酔セット", desc: "快楽・陶酔・妖艶", val: "ecstatic eyes, hungry smile, sensual trance, alluring menace, intoxicating beauty" },
          { id: "adult_rolefx_succubus_dom", label: "小悪魔支配セット", desc: "翻弄・支配・余裕", val: "sly control, playful domination, wicked grin, irresistible tease, superior charm" },
          { id: "adult_rolefx_succubus_soft", label: "恋するサキュバスセット", desc: "愛情混じり・甘さ強め", val: "adoring succubus, sweet temptation, soft blush, affectionate seduction, needy allure" },
          { id: "adult_rolefx_succubus_dark", label: "妖しい夜セット", desc: "影・囁き・危険な優しさ", val: "shadowy smile, whispered temptation, dangerous tenderness, midnight allure, dark desire" }
        ]
      },
      {
        title_ja: "👰 花嫁系",
        title_en: "Bridal",
        children: [
          { id: "adult_rolefx_bride_pure", label: "純白の熱セット", desc: "初々しさ・緊張・幸福", val: "bridal blush, shy happiness, nervous smile, pure devotion, ceremonial warmth" },
          { id: "adult_rolefx_bride_love", label: "誓いの見つめ合いセット", desc: "見つめ合い・愛情・涙", val: "vows in eyes, loving gaze, teary joy, heartfelt smile, eternal affection" },
          { id: "adult_rolefx_bride_forbid", label: "背徳花嫁セット", desc: "禁忌・罪悪感・受容", val: "forbidden bride, guilty tenderness, conflicted love, sinful purity, secret longing" },
          { id: "adult_rolefx_bride_after", label: "花嫁余韻セット", desc: "満たされ・寄り添い・放心", val: "bridal afterglow, close embrace, fulfilled smile, gentle exhaustion, warm dependence" },
          { id: "adult_rolefx_bride_cling", label: "離れたくない花嫁セット", desc: "抱きつき・依存・甘さ", val: "clingy bride, affectionate dependence, don't leave me eyes, soft pleading, devoted warmth" }
        ]
      }
    ];
  } catch (e) {}
})();


/* === Reorder Roleplay-linked Expression Support Packs === */
(function reorderRoleplayExpressionSupportPacks(){
  try {
    var db = (window.__PP_DB && window.__PP_DB.packs) ? window.__PP_DB.packs
      : (window.PRESET_PACKS_DB || window.__PRESET_PACKS_DB || null);
    if (!db) return;

    function moveKeyAfter(obj, moveKey, anchorKey){
      if (!obj || !obj.hasOwnProperty(moveKey) || !obj.hasOwnProperty(anchorKey) || moveKey === anchorKey) return obj;
      var out = {};
      var movedVal = obj[moveKey];
      Object.keys(obj).forEach(function(k){
        if (k === moveKey) return;
        out[k] = obj[k];
        if (k === anchorKey) out[moveKey] = movedVal;
      });
      return out;
    }

    var normalKey = "🎭 なりきり連動・表情補助 (Roleplay-linked Expression Support)";
    var normalAnchor = "🎭 なりきりおすすめセット (Roleplay Recommended Sets)";
    if (db[normalKey] && db[normalAnchor]) {
      db = moveKeyAfter(db, normalKey, normalAnchor);
    }

    var adultKey = "🔞 なりきり連動・表情補助 (Adult Roleplay-linked Expression Support)";
    var adultAnchor = "🔞 なりきりおすすめセット (Adult Roleplay Recommended Sets)";
    if (db[adultKey] && db[adultAnchor]) {
      db = moveKeyAfter(db, adultKey, adultAnchor);
    }

    if (window.__PP_DB) window.__PP_DB.packs = db;
    if (window.PRESET_PACKS_DB) window.PRESET_PACKS_DB = db;
    if (window.__PRESET_PACKS_DB) window.__PRESET_PACKS_DB = db;
  } catch (e) {}
})();
