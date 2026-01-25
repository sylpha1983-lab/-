(function(){
  "use strict";

  // Preset Packs DB
  // UIロジックから分離された、純粋なプリセットデータ群です。
  // builder_ui.section.quality_preset.bundle.js (v1-v10) の内容を統合しています。

  if (!window.__PP_DB) window.__PP_DB = {};

  // 1. 基本パック（全ユーザーに表示されるデータ）
  const packs = {
  "🌆 シチュエーションパック (Situation Packs)": {
"🌆 シチュエーションパック｜🌺 自然・絶景 (Nature)": [
      {
        "label": "青空・草原",
        "val": "(blue sky), (white clouds), (green field), (grass), (wind), (open space), (nature), (bright sunlight)"
      },
      {
        "label": "森・木漏れ日",
        "val": "(forest), (trees), (sunbeams), (leaf shadows), (nature path), (peaceful), (greenery), (moss)"
      },
      {
        "label": "海・ビーチ",
        "val": "(beach), (ocean), (waves), (white sand), (horizon), (summer), (tropical), (palm trees)"
      },
      {
        "label": "星空・夜空",
        "val": "(starry sky), (milky way), (night), (shooting star), (silhouette), (beautiful scenery), (universe)"
      },
      {
        "label": "桜並木",
        "val": "(cherry blossoms), (sakura), (falling petals), (pink flowers), (spring), (park), (pathway)"
      },
      {
        "label": "雪景色",
        "val": "(snowy landscape), (winter), (snowing), (white ground), (cold breath), (frost), (frozen lake)"
      }
    ],
    "📍 スポット・お店 (Spots)": [
      {
        "label": "アイドルステージ",
        "val": "(idol focus), (live concert), (stage lights), (sparkles), (soft ambient stage illumination), (cinematic glow), (performance)",
        "links": [
          "シネマティック"
        ]
      },
      {
        "label": "おしゃれカフェ",
        "val": "(cozy modern café), (indoor), (window seat), (coffee), (sweets), (string lights), (decorations), (bokeh)",
        "links": [
          "ボケ"
        ]
      },
      {
        "label": "バー・パブ",
        "val": "(bar counter), (bottles on shelves), (dim lighting), (bartender), (cocktail), (glass), (jazz bar vibes), (adult atmosphere)",
        "links": [
          "シネマティック"
        ]
      },
      {
        "label": "コンビニ",
        "val": "(convenience store), (bright fluorescent light), (shelves of snacks), (refrigerator), (night shift), (modern japan)"
      },
      {
        "label": "図書館",
        "val": "(library), (bookshelves), (quiet atmosphere), (reading), (sunlight through window), (dust particles), (studying)"
      },
      {
        "label": "病院・病室",
        "val": "(hospital room), (white bed), (medical equipment), (clean atmosphere), (sterile), (curtain), (window)"
      },
      {
        "label": "デートスポット",
        "val": "(date night), (romantic atmosphere), (city lights), (holding hands), (blush), (fashionable clothes), (restaurant), (dinner)"
      }
    ],
    "🏫 学園・青春 (School)": [
      {
        "label": "教室 (昼)",
        "val": "(classroom), (school desks), (blackboard), (sunlight through window), (afternoon), (school life), (chalk dust)"
      },
      {
        "label": "教室 (夕方)",
        "val": "(classroom), (sunset), (orange sky), (shadows), (melancholic), (after school), (empty classroom), (nostalgic)"
      },
      {
        "label": "屋上",
        "val": "(school rooftop), (fence), (blue sky), (clouds), (windy), (city view in distance), (lunch time), (freedom)"
      },
      {
        "label": "体育館",
        "val": "(school gymnasium), (basketball court), (varnished wood floor), (indoor sports), (volleyball net), (high ceiling)"
      }
    ],
    "🏠 家・日常 (Home)": [
      {
        "label": "リビング",
        "val": "(modern living room), (sofa), (tv), (carpet), (cozy atmosphere), (indoor plant), (sunlight), (relaxing)"
      },
      {
        "label": "キッチン",
        "val": "(kitchen), (cooking), (apron), (refrigerator), (vegetables), (sink), (morning light), (breakfast preparation)"
      },
      {
        "label": "ベッドルーム",
        "val": "(bedroom), (bed), (messy sheets), (pillows), (curtains), (morning), (waking up), (pajamas), (private space)"
      },
      {
        "label": "和室",
        "val": "(japanese room), (tatami mats), (shoji screen), (kotatsu), (cushion), (tea), (calm atmosphere), (traditional)"
      },
      {
        "label": "バスルーム",
        "val": "(bathroom), (bathtub), (steam), (tiles), (mirror), (shampoo bottles), (relaxing bath), (wet skin)"
      }
    ],
    "🏙️ 都会・ストリート (City)": [
      {
        "label": "渋谷・交差点",
        "val": "(shibuya crossing), (crowd), (skyscrapers), (billboards), (neon signs), (modern city), (busy street), (daytime)"
      },
      {
        "label": "サイバーパンク街",
        "val": "(cyberpunk city), (neon lights), (holograms), (rain), (wet street), (futuristic), (night), (flying cars)"
      },
      {
        "label": "路地裏",
        "val": "(back alley), (dim lighting), (vending machine), (trash cans), (pipes), (stray cat), (urban exploration), (graffiti)"
      },
      {
        "label": "夜景・ビル街",
        "val": "(night city view), (skyscraper), (office lights), (highway), (car lights), (bokeh), (beautiful scenery)"
      },
      {
        "label": "電車内",
        "val": "(inside train), (hanging straps), (seats), (window reflection), (commuting), (passing scenery)"
      }
    ],
    "🌆 シチュエーションパック｜🎉 イベント・行事 (Events)": [
      {
        "label": "クリスマス",
        "val": "(santa costume), (christmas tree), (holding gift box), (snowy background), (lights and ornaments), (happy smile), (winter holiday)"
      },
      {
        "label": "ハロウィン",
        "val": "(witch costume), (holding pumpkin), (jack-o'-lantern), (bats), (purple and orange theme), (spooky castle background), (magic hat)"
      },
      {
        "label": "ウェディング",
        "val": "(wedding dress), (holding bouquet), (church interior), (white veil), (stained glass), (happy tears), (marriage ceremony), (pure white)"
      },
      {
        "label": "温泉旅行",
        "val": "(wearing yukata), (onsen), (steam), (open air bath), (wooden bucket), (relaxing), (flushed face), (night scenery)",
        "links": [
          "和風"
        ]
      }
    ],
    "🌆 シチュエーションパック｜💕 デート・恋愛 (Date)": [
      {
        "label": "水族館デート",
        "val": "(aquarium date), (looking at fish), (blue ambient light), (reflection on glass), (romantic atmosphere), (walking together), (happy expression)",
        "links": [
          "デートスポット"
        ]
      },
      {
        "label": "映画館デート",
        "val": "(movie theater), (sitting next to each other), (eating popcorn), (dim lighting), (screen light reflecting on face), (intimate moment), (date night)",
        "links": [
          "デートスポット"
        ]
      },
      {
        "label": "遊園地・観覧車",
        "val": "(amusement park date), (ferris wheel in background), (holding crepe), (colorful lights), (happy smile), (vibrant atmosphere), (casual clothes)"
      },
      {
        "label": "夜景・展望台",
        "val": "(observation deck), (night city view), (sparkling city lights), (leaning on railing), (romantic mood), (couple atmosphere), (elegant)",
        "links": [
          "夜"
        ]
      }
    ],
    "🕰️ 時代・年代 (Eras)": [
      {
        "label": "古代エジプト",
        "val": "ancient egypt"
      },
      {
        "label": "古代ギリシャ",
        "val": "ancient greek"
      },
      {
        "label": "中世ヨーロッパ",
        "val": "medieval era"
      },
      {
        "label": "大正ロマン",
        "val": "taisho roman"
      },
      {
        "label": "昭和レトロ",
        "val": "showa era style"
      },
      {
        "label": "バブル時代 (80s)",
        "val": "bubble era"
      },
      {
        "label": "サイバーパンク未来",
        "val": "cyberpunk future"
      },
      {
        "label": "ポストアポカリプス",
        "val": "post-apocalyptic"
      }
    ]
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
  { type: "header", id: "fx_hdr_joy", label: "😊 喜び・笑い", desc: "喜び／笑い" },
      { label: "喜び演出セット", desc: "笑顔＋輝き瞳", val: "happy, smile, shining_eyes, sparkling_eyes" },
      { label: "無邪気演出セット", desc: "きゃっ＋目きら", val: "happy, open_mouth, wide-eyed, sparkling_eyes" },
      { label: "爆笑演出セット", desc: "大笑い＋涙目", val: "laughing, open_mouth, tears_in_eyes" },
      { label: "照れ笑い演出セット", desc: "赤面＋笑顔＋目逸らし", val: "blush, nervous_smile, looking_away, shy" },
  
  
  { type: "header", id: "fx_hdr_anger", label: "🔥 怒り・狂気", desc: "怒り／狂気" },
      { label: "怒り演出セット", desc: "眉圧＋歯噛み＋睨み", val: "angry, furrowed_brow, clenched_teeth, glaring" },
      { label: "狂気演出セット", desc: "瞳開き＋不穏な笑み", val: "crazy_eyes, wide-eyed, evil_smile, stare" },
  
  { type: "header", id: "fx_hdr_panic", label: "⚡ 焦り・パニック", desc: "焦り／動揺／驚き" },
      { label: "焦る演出セット", desc: "焦る＋目を見開く＋汗", val: "panic, wide-eyed, sweat, sweatdrop" },
      { label: "動揺演出セット", desc: "動揺＋目が泳ぐ＋汗", val: "nervous, blank_stare, sweatdrop, sweating" },
      { label: "驚き演出セット", desc: "驚き＋目見開き＋口開け", val: "surprised, wide-eyed, open_mouth, gasp" },
  
  { type: "header", id: "fx_hdr_fear", label: "🕯 恐怖・怯え", desc: "恐怖／怯え／泣き" },
      { label: "怯え演出セット", desc: "怯える＋震える＋涙目", val: "scared, trembling, watery_eyes, tears_in_eyes" },
      { label: "泣き演出セット", desc: "泣き＋嗚咽＋涙", val: "crying, sobbing, streaming_tears, trembling_lips" },
  
  { type: "header", id: "fx_hdr_disdain", label: "🧊 嫌悪・軽蔑", desc: "嫌悪／軽蔑" },
      { label: "嫌悪演出セット", desc: "嫌悪＋軽蔑＋目細め", val: "disgust, contempt, squinting, glaring" },
  
  { type: "header", id: "fx_hdr_restraint", label: "🫧 我慢・抑制", desc: "我慢／強がり／疲労" },
      { label: "我慢演出セット", desc: "唇噛み＋歯噛み＋緊張", val: "restrained, biting_lip, clenched_teeth, nervous_sweat" },
      { label: "強がり演出セット", desc: "強気＋涙目＋目逸らし", val: "forced_smile, watery_eyes, looking_away, trembling_lips" },
      { label: "疲労演出セット", desc: "虚ろ目＋ため息＋汗", val: "tired, glazed_eyes, sigh, sweating" },
  
  { type: "header", id: "fx_hdr_shy", label: "🌸 恥・照れ・誘惑", desc: "恥／照れ／誘惑" },
      { label: "照れ演出セット", desc: "全顔赤面＋目逸らし", val: "bashful, full-face_blush, looking_away, shy" },
      { label: "恥演出セット", desc: "鼻赤＋汗＋視線逸らし", val: "embarrassed, nose_blush, sweatdrop, looking_away" },
      { label: "誘惑演出セット", desc: "誘う＋視線＋唇", val: "seductive_smile, half-closed_eyes, parted_lips, stare" },
  
  { type: "header", id: "fx_hdr_sleepy", label: "💤 眠気・脱力", desc: "眠気／脱力" },
      { label: "眠気演出セット", desc: "とろ目＋口半開き", val: "sleepy_eyes, half-closed_eyes, open_mouth, tired" },
  
  { type: "header", id: "fx_hdr_r18", label: "🔞 R-18 心理（非露骨）", desc: "露骨ではなく心理寄り" },
      { label: "抑圧演出セット", desc: "視線逸らし＋汗＋口元固め", val: "suppressed_heat, looking_away, sweatdrop, trembling_lips" },
      { label: "背徳演出セット", desc: "ためらい＋赤面＋目逸らし", val: "forbidden, full-face_blush, looking_away, nervous" },
      { label: "支配演出セット", desc: "強い視線＋眉圧＋緊張", val: "dominant, glare, furrowed_brow, nervous_sweat" },
      { label: "従属演出セット", desc: "伏し目＋赤面＋震え", val: "submissive, downcast_eyes, blush, trembling" }
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
        { label: "夜景写真（Night City Photo）", desc: "夜ネオン", val: "(night lighting), (neon highlights), (high dynamic range), (urban color grading), (light reflections)" }
      ],
  "🎮 ゲーム/3D系エフェクトパック (Game & 3D Effect Packs)": [
        { label: "リアルタイムGI（Lumen GI）", desc: "ゲーム的光", val: "(unreal engine 5), (lumen global illumination), (realistic lighting), (ambient occlusion), (high dynamic range)" },
        { label: "PBR強調（PBR Boost）", desc: "材質の説得力", val: "(physically based rendering), (realistic textures), (specular response), (roughness variation), (clearcoat reflections)" },
        { label: "霧体積（Volumetric Fog）", desc: "空気が出る", val: "(volumetric lighting), (volumetric fog), (god rays), (atmospheric perspective), (light scattering)" },
        { label: "高密度ジオメトリ（Nanite Detail）", desc: "造形密度", val: "(nanite geometry), (ultra detailed), (micro details), (edge fidelity), (high poly)" },
        { label: "パストレ（Path Tracing）", desc: "物理寄り", val: "(path tracing), (ray tracing), (global illumination), (soft shadows), (accurate reflections)" },
        { label: "シネゲーム（Cinematic Game Look）", desc: "映画×ゲーム", val: "(cinematic lighting), (unreal engine rendering), (lens effects), (depth of field), (color grading)" },
        { label: "ハードシャドウ（Contact Shadow）", desc: "影を締める", val: "(contact shadow), (hard shadows), (ambient occlusion), (sharp edges), (high contrast)" },
        { label: "金属映り込み（Metal Reflections）", desc: "反射強め", val: "(environment reflections), (specular highlights), (anisotropic highlights), (reflection clarity), (polished metal)" }
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

  // =============================================================================
  // 🎭 なりきりおすすめセット (Roleplay Recommended Sets) - nested (minimal change)
  // UI側（builder_ui.section.preset_packs.bundle.js）は item.children のネスト表示に対応。
  // ここでは既存の「平置きキー」を参照して親→子→チェック群にまとめる。
  // =============================================================================
  (function buildRoleplayRecommendedSets(){
    try {
      var parentKey = "🎭 なりきりおすすめセット (Roleplay Recommended Sets)";
      if (packs[parentKey]) return; // already built

      // 1) 🎭 なりきり：既存の「職業・なりきり（〜）」平置きカテゴリを収集
      var roleplayChildren = [];
      var k1s = Object.keys(packs);
      for (var i = 0; i < k1s.length; i++) {
        var k = k1s[i];
        if (k.indexOf("🎭 なりきりおすすめセット｜職業・なりきり") === 0 &&
            Object.prototype.toString.call(packs[k]) === "[object Array]") {
          roleplayChildren.push({
            title_ja: k.replace(/^🎭 なりきりおすすめセット｜/,""),
            title_en: "",
            children: packs[k]
          });
        }
      }

      // 2) 📍 場所・状況：シチュエーションパック（オブジェクト）を子サブグループ化
      var situationChildren = [];
      var sitKey = "🌆 シチュエーションパック (Situation Packs)";
      var sitObj = packs[sitKey];
      if (sitObj && typeof sitObj === "object") {
        var k2s = Object.keys(sitObj);
        for (var j = 0; j < k2s.length; j++) {
          var sk = k2s[j];
          if (Object.prototype.toString.call(sitObj[sk]) === "[object Array]") {
            situationChildren.push({
              title_ja: sk,
              title_en: "",
              children: sitObj[sk]
            });
          }
        }
      }

      // 3) 🎵 おすすめ組み合わせ：既存のおすすめペアを参照
      var pairKey = "🎭 なりきりおすすめセット｜おすすめ組み合わせ（なりきり×場所） (Roleplay × Situation)";
      var pairArr = (Object.prototype.toString.call(packs[pairKey]) === "[object Array]") ? packs[pairKey] : [];

      // 4) 📐 おすすめ構図：既存の構図プリセットを参照
      var compKey = "📐 おすすめ構図 (Recommended Compositions)";
      var compArr = (Object.prototype.toString.call(packs[compKey]) === "[object Array]") ? packs[compKey] : [];

      packs[parentKey] = [
        { title_ja: "🎭 なりきり", title_en: "Roleplay", children: roleplayChildren },
        { title_ja: "📍 場所・状況", title_en: "Place & Situation", children: situationChildren },
        { title_ja: "🎵 おすすめ組み合わせ", title_en: "Roleplay × Situation", children: pairArr },
        { title_ja: "📐 おすすめ構図", title_en: "Recommended Compositions", children: compArr }
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
          { label: "🐙 スライム拘束", val: "(slime suit attack), (slime groping breasts), (slime sucking nipples), (arms locked behind back), (bound by slime), (unable to resist)" }
        ];

        // 🔞 なりきりおすすめセット（R-18）
        // - 体位は「ポーズ」側に統合済みのため、ここでは出さない
        var roleplayChildren = []; // 将来拡張用（今は空のまま）

        var placeChildren = placeAndSituation;

        // 🎵 ペア（R-18）：現状データが無い場合は空（将来追加用）
        var pair = [];

        packs[parentKey] = [
          { title_ja: "🎭 なりきり", title_en: "Roleplay", children: roleplayChildren },
          { title_ja: "🏩 ロケーション（R-18）", title_en: "Locations (R-18)", children: placeChildren },
          { title_ja: "🎵 おすすめ組み合わせ", title_en: "Roleplay × Situation", children: pair },
          { title_ja: "📐 おすすめ構図", title_en: "Recommended Compositions", children: compArr }
        ];
      } catch (e) {}
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
