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

  "🎭 なりきりおすすめセット｜神獣・伝説なりきり (Mythic Beasts)": [
    
{
  label: "青龍 / Seiryu",
  val: "seiryu beastkin, true eastern dragon fusion entity, mythic divine creature, not humanoid cosplay, biological dragon anatomy as primary form, eastern dragon god presence, humanoid girl with a clearly human face (no animal muzzle), long azure dragon horns sweeping backward, large flowing dragon tail covered in blue-green scales, scaled skin along arms, back, thighs (azure dragon scales), dragon claws on hands and feet, ethereal whisker-like tendrils near the face, glowing cyan dragon eyes accent, wind and cloud aura swirling around the body, not cosplay, true eastern dragon fusion form",
  desc: "四神：東・青龍（東洋龍融合）"
},
{
  label: "白虎 / Byakko",
  val: "byakko beastkin, humanoid girl with a clearly human face (no animal muzzle), thick white tiger fur covering body, bold black tiger stripes clearly visible, tiger ears and sharp feline fangs, powerful digitigrade tiger legs, long striped tiger tail, clawed hands and feet, piercing golden predator eyes accent, ferocious guardian beast aura, not cosplay, true white tiger fusion form",
  desc: "四神：西・白虎（白虎融合）"
},
{
  label: "朱雀 / Suzaku",
  val: "suzaku beastkin, humanoid girl with a clearly human face (no animal beak), large fiery bird wings spreading from her back, feathered arms with red and gold plumage, long flowing tail feathers like flames, subtle feather textures across shoulders and hips, embers floating around the body, crimson glowing eyes accent, sacred fire bird aura, not cosplay, true divine bird fusion form",
  desc: "四神：南・朱雀（火鳥融合）"
},
{
  label: "麒麟 / Qilin",
  val: "qilin beastkin, humanoid girl with a clearly human face (no animal muzzle), single curved qilin horn on the forehead, scaled body with soft golden and jade tones, deer-like digitigrade legs with glowing hooves, lion-like tail with flowing fur, subtle flame and cloud motifs along the body, gentle luminous eyes accent, sacred auspicious beast aura, not cosplay, true qilin fusion form",
  desc: "四神：中央・麒麟（瑞獣融合）"
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
            title_ja: k.replace(/^🎭 なりきりおすすめセット｜/,"").replace(/ \(.+?\)$/,""),
            title_en: (k.match(/\((.*?)\)$/)||[])[1] || "",
            children: packs[k]
          });
        }
      }

      // 1b) 神獣・伝説なりきり：特別枠
      var mythicKey = "🎭 なりきりおすすめセット｜神獣・伝説なりきり (Mythic Beasts)";
      if (Object.prototype.toString.call(packs[mythicKey]) === "[object Array]") {
        roleplayChildren.push({ title_ja: "神獣・伝説なりきり", title_en: "Mythic Beasts", children: packs[mythicKey] });
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
        var roleplayChildren = [
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
          { label: "サメ娘・モンスター (海洋)", val: "(shark girl), (mermaid elements), (gills), (sharp teeth), (wet skin), (scales on body), (predatory smile), (fin)" },
          { label: "サディスティック女王様", val: "(dominatrix), (leather corset), (high heels), (holding whip), (stepping on viewer), (sadistic smile), (looking down on viewer), (dominant)" },
          { label: "ポンコツ悪魔メイド", val: "(demon maid), (french maid outfit), (succubus wings), (clumsy), (no panties), (spilled water), (embarrassed), (tearful eyes)" }

        ];

        // 既存の場所に加えて新規場所を追加
        var placeChildren = placeAndSituation.concat([
          { label: "触手迷宮の最下層", val: "(dungeon depths), (fleshy walls), (bioluminescent flora), (glowing pools of slime), (creepy atmosphere), (tentacles lurking in shadows)" },
          { label: "サイバーパンクの歓楽街", val: "(cyberpunk red light district), (neon signs), (holographic girls), (dirty alleyway), (rain), (puddles reflecting neon), (futuristic slum)" },
          { label: "廃ビル・無法地帯のアジト", val: "(abandoned building), (ruined interior), (graffiti), (dirty mattress on floor), (dim street light through broken window), (dusty air), (dangerous atmosphere)" },
          { label: "マジックミラーの取調室", val: "(interrogation room), (two-way mirror), (metal table), (dim fluorescent light), (concrete walls), (voyeurism), (cramped space)" },
          { label: "豪華なハーレムテント", val: "(harem tent), (middle eastern style), (silk pillows), (sheer curtains), (incense burner), (gold decorations), (warm sensual lighting)" }
        ]);

        // 🎵 おすすめ組み合わせ（Roleplay × Situation）
        var pair = [
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
