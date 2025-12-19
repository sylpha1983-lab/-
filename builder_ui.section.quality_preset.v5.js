(function(){
  "use strict";
  const VERSION = 5; 
  const KEY = "quality_preset";
  const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  // ==============================================================================
  // 🌍 世界観・ジャンル (World & Genre)
  // ==============================================================================
  const GENRE_DATA = {
    "🌌 SF・宇宙 (Sci-Fi)": [
      { label: "宇宙船コックピット", val: "(spaceship cockpit), (holographic interface), (stars through window), (futuristic controls), (sci-fi interior), (pilot seat), (glowing buttons)", links: ["サイバー・ネオン"] },
      { label: "宇宙ステーション", val: "(space station corridor), (white panels), (artificial gravity), (view of earth), (clean aesthetic), (futuristic), (zero gravity hair)" },
      { label: "サイバーパンク都市", val: "(cyberpunk city), (neon rain), (hologram billboards), (flying cars), (wet street), (night), (high tech low life)", links: ["サイバー・ネオン"] },
      { label: "アンドロイド研究所", val: "(cybernetics lab), (robot parts), (cables), (server racks), (blue light), (data screen), (mechanical arm), (repairing)" },
      { label: "異星の惑星", val: "(alien planet), (strange plants), (two moons), (purple sky), (rocky terrain), (unknown civilization), (sci-fi landscape)", links: ["ファンタジー"] }
    ],
    "⛩️ 和風・歴史 (Japanese)": [
      { label: "神社・鳥居", val: "(shinto shrine), (red torii gate), (stone steps), (sacred atmosphere), (paper lantern), (autumn leaves), (traditional japan)" },
      { label: "縁側・日本庭園", val: "(wooden engawa), (japanese garden), (koi pond), (bamboo pipe), (relaxing), (drinking tea), (sunny afternoon), (peaceful)" },
      { label: "夏祭り・花火", val: "(summer festival), (fireworks in sky), (yukata), (stalls), (paper lanterns), (crowd), (night), (festive atmosphere)", links: ["夜"] },
      { label: "竹林", val: "(bamboo forest), (sunlight filtering through bamboo), (green atmosphere), (pathway), (nature), (quiet), (misty)" },
      { label: "畳の部屋", val: "(tatami room), (shoji screen), (hanging scroll), (flower arrangement), (sunlight patterns), (traditional interior), (seiza)" },
      { label: "戦場・合戦跡", val: "(ancient battlefield), (broken arrows), (smoke), (sunset), (flags), (dramatic atmosphere), (historical)" }
    ],
    "🏰 ファンタジー・RPG (Fantasy)": [
      { label: "ファンタジーの森", val: "(fantasy forest), (glowing plants), (magic particles), (ancient trees), (mysterious), (fairy tale), (lush vegetation)", links: ["ファンタジー"] },
      { label: "王宮・城", val: "(royal palace), (throne room), (chandelier), (red carpet), (marble pillars), (luxurious), (gold decorations), (king and queen)" },
      { label: "ダンジョン", val: "(stone dungeon), (torch light), (dark atmosphere), (cobwebs), (stone walls), (treasure chest), (adventure), (danger)" },
      { label: "冒険者ギルド", val: "(fantasy tavern), (wooden tables), (beer mugs), (lively atmosphere), (adventurers), (candle light), (fireplace), (quest board)" },
      { label: "魔法研究所", val: "(alchemist lab), (potions), (scrolls), (books), (magic circle), (glowing crystals), (cluttered), (mysterious)" },
      { label: "天空の城", val: "(floating island), (castle in the sky), (clouds), (waterfall into void), (fantasy landscape), (dreamy), (epic scale)", links: ["広角"] },
      { label: "廃墟・遺跡", val: "(ancient ruins), (overgrown with moss), (broken pillars), (stone statues), (mysterious), (lost civilization), (sunlight filtering)" }
    ],
    "👻 ホラー・怪奇 (Horror)": [
      { label: "廃病院", val: "(abandoned hospital), (broken windows), (debris), (peeling paint), (wheelchair), (creepy corridor), (blood stains), (dark atmosphere)", links: ["ホラー"] },
      { label: "不気味な洋館", val: "(haunted mansion), (cobwebs), (dusty), (dim candle light), (old portraits), (thunderstorm outside), (gothic interior)" },
      { label: "深夜の墓地", val: "(graveyard), (tombstones), (fog), (full moon), (will-o'-the-wisp), (dead trees), (blue ambient light), (spooky)" },
      { label: "儀式の間", val: "(ritual chamber), (magic circle), (red candles), (skulls), (blood sacrifice), (ominous atmosphere), (stone altar)" },
      { label: "異界・裏世界", val: "(otherworld), (red sky), (distorted reality), (floating rocks), (blood ocean), (surreal), (nightmare)", links: ["ファンタジー"] },
      { label: "樹海・呪われた森", val: "(cursed forest), (twisted trees), (dense fog), (hanging ropes), (darkness), (lost path), (ghostly figures)", links: ["森"] }
    ]
  };

  // ==============================================================================
  // 🧚‍♀️ 種族・ファンタジーライフ (Racial Life)
  // ==============================================================================
  const RACIAL_DATA = {
    "🧝‍♀️ エルフ・森の民 (Elf)": [
      { label: "森の守護者", val: "(in ancient forest), (sitting on tree branch), (surrounded by nature), (sunlight filtering through leaves), (birds), (peaceful), (fantasy nature)", links: ["ファンタジー"] },
      { label: "精霊との対話", val: "(talking to spirits), (glowing wisps), (mystical atmosphere), (gentle expression), (magic forest), (fireflies), (night)" },
      { label: "弓の練習", val: "(practicing archery), (forest clearing), (target in distance), (concentration), (traditional elf clothes)" }
    ],
    "👼 天使・聖なる者 (Angel)": [
      { label: "天空からの降臨", val: "(descending from sky), (spread wings), (feathers falling), (holy light), (clouds), (god rays), (angelic), (divine atmosphere)", links: ["ファンタジー"] },
      { label: "断罪の剣", val: "(holding flaming sword), (flying), (looking down), (stern expression), (battlefield below), (judgment), (powerful)" },
      { label: "祈り", val: "(kneeling on cloud), (praying hands), (closed eyes), (halo), (peaceful), (white dress), (soft light)" }
    ],
    "👿 悪魔・魔族 (Demon)": [
      { label: "玉座の支配者", val: "(sitting on throne), (crossing legs), (arrogant expression), (wine glass), (dark castle), (red carpet), (demon wings), (horns)", links: ["ファンタジー"] },
      { label: "契約の誘惑", val: "(reaching out hand), (seductive smile), (contract scroll), (dark aura), (glowing eyes), (shadows), (temptation)" },
      { label: "夜の飛行", val: "(flying in night sky), (full moon background), (bat wings), (city lights below), (freedom), (cool pose)" }
    ],
    "🐾 獣人・ワイルド (Beastkin)": [
      { label: "野生の狩り", val: "(crouching in tall grass), (stalking prey), (animal ears perked), (focused eyes), (wild nature), (dynamic pose), (tail wagging)" },
      { label: "日向ぼっこ", val: "(sleeping on grass), (sunshine), (relaxed), (curled up), (peaceful face), (warm atmosphere), (fluffy)" },
      { label: "威嚇・咆哮", val: "(roaring), (showing fangs), (claws out), (intense expression), (wild energy), (battle ready), (fur standing up)" }
    ],
    "🤖 メカ・サイボーグ (Mecha)": [
      { label: "メンテナンス中", val: "(sitting in repair station), (cables connected), (diagnostic screen), (half armor removed), (spark), (garage), (mechanic tools)", links: ["サイバー・ネオン"] },
      { label: "戦闘モード起動", val: "(glowing eyes), (weapons deploying), (battle visor), (scanning target), (digital hud), (combat ready), (sci-fi city background)" },
      { label: "充電・スリープ", val: "(connected to charger), (eyes closed), (standby mode), (capsule bed), (blue ambient light), (quiet)" }
    ]
  };

  // ==============================================================================
  // 🔞 R-18 / NSFW シークレットロケーション
  // ==============================================================================
  const SECRET_LOCATIONS = {
    "🏩 夜の街・歓楽街 (Red Light District)": [
      { label: "風俗街", val: "(red light district), (neon signs), (love hotel), (shady alley), (night), (adult atmosphere), (crowd)", links: ["Basic R-18"] },
      { label: "ラブホテル街", val: "(love hotel district), (flashy neon), (couple entering), (rainy street), (reflection), (secretive)", links: ["Basic R-18"] },
      { label: "地下牢・監禁室", val: "(dungeon), (stone walls), (chains), (shackles), (darkness), (torture devices), (cold atmosphere), (straw on floor)", links: ["Basic R-18"] },
      { label: "公衆便所(隠語)", val: "(public toilet), (graffiti), (dirty), (stalls), (urinals), (dim lighting), (filthy)", links: ["Basic R-18"] }
    ],
    "🔞 魔界・触手の巣 (Demon Realm)": [
      { label: "触手の巣", val: "(tentacle nest), (slime floor), (wriggling tentacles), (organic walls), (fleshy), (eggs), (humid)", links: ["Basic R-18"] },
      { label: "魔王の寝室", val: "(demon lord bedroom), (luxurious dark bed), (canopy), (gothic), (red mood lighting), (harem)", links: ["Basic R-18"] },
      { label: "オークの集落", val: "(orc village), (primitive huts), (mud), (bonfire), (captured), (tribal), (savage)", links: ["Basic R-18"] }
    ]
  };

  // ==============================================================================
  // 🐙 R-18 ファンタジー・異種姦 (Fantasy NSFW) - 新設
  // ==============================================================================
  const SECRET_FANTASY_DATA = {
    "🐙 触手・モンスター (Tentacles & Monsters)": [
      // ★追加: ユーザー提供の高品質プロンプト
      { 
        label: "スライム・極上没入", 
        val: "(nsfw:1.5), (masterpiece:1.3), (highest quality:1.3), (ultra-high resolution:1.3), (wetness/gloss/oily sheen:1.4), (translucent/dripping slime sheen:1.4), (extremely detailed skin rendering:1.4), (shimmering skin:1.1), (trapped in a pool of shimmering slime), (semi-translucent mucous-like tentacles), (wet mucus fuses with her body), (slime coating her porcelain skin with an oily sheen), (slime tentacles envelop waist and chest), (tentacle milking), (breast fondling), (tentacles invade deep within her mouth), (saliva splattering), (bird's-eye view), (arched back), (panting), (trembling in climax:1.5)", 
        desc: "極上の質感と没入感を持つスライム責めセット",
        links: ["Basic R-18", "ぬるぬる", "スライム"]
      },
      { label: "触手プレイ・基本", val: "(nude), (restrained by tentacles), (tentacle penetration), (vaginal), (anal), (double penetration), (ahegao), (tears of pleasure), (slime), (monster)", links: ["Basic R-18"] },
      { label: "スライム触手・全身", val: "(restrained by slime tentacles), (translucent tentacles), (wrapping around body), (nipple penetration), (vaginal penetration), (clitoris stimulation), (slime dripping), (glowing blue slime), (dungeon)", links: ["Basic R-18"] },
      { label: "深海クラーケン", val: "(mermaid), (attacked by kraken), (large thick tentacles), (suckers), (deep sea background), (bubbles), (tentacle in mouth), (double penetration), (breast squeeze), (struggling)", links: ["Basic R-18"] },
      { label: "植物触手・蔦", val: "(adventurer), (carnivorous plant), (vine tentacles), (aphrodisiac pollen), (spreading legs), (flower blooming), (jungle ruins), (sweat and nectar), (mind break)", links: ["Basic R-18"] },
      { label: "異次元ポータル", val: "(mage girl), (tentacles emerging from magic portal), (glowing purple tentacles), (levitating), (all holes penetrated), (breast milking), (excessive cum), (magic circle), (orgasm overload)", links: ["Basic R-18"] },
      { label: "産卵・寄生", val: "(oviposition), (tentacles inserting eggs), (bulging belly), (pleasure pain face), (monster lair), (eggs visible), (translucent tentacles), (mucus), (stomach deformation)", links: ["Basic R-18"] },
      { label: "微細触手・責め", val: "(hundreds of small tentacles), (teasing nipples), (urethra play), (extreme sensitivity), (squirting), (continuous orgasm), (altar), (offering)", links: ["Basic R-18"] },
      { label: "ドラゴン触手", val: "(dragon tentacles), (thick scaled tentacles), (wrapping body), (deep penetration), (cum inflation), (fire breath background), (treasure room), (submissive)", links: ["Basic R-18"] }
    ],
    "🧝‍♀️ エルフ・ダークエルフ (Elf & Dark Elf)": [
      { label: "エルフの誘惑", val: "(elf), (pointy ears), (long silver hair), (green eyes), (nude), (large breasts), (detailed skin), (forest background), (moonlight), (seductive pose), (nsfw)", links: ["Basic R-18"] },
      { label: "ダークエルフ・奴隷", val: "(dark elf), (dark skin), (white hair), (collar), (leash), (on all fours), (doggystyle), (from behind), (sex), (slave), (chains), (dungeon), (red eyes), (submission)", links: ["Basic R-18"] }
    ],
    "😈 サキュバス・魔族 (Succubus & Demon)": [
      { label: "サキュバス・騎乗位", val: "(succubus), (demon wings), (tail), (horns), (red skin), (glowing eyes), (cowgirl position), (straddling), (sex), (vaginal), (penis in pussy), (ahegao), (tongue out), (heart-shaped pupils)", links: ["Basic R-18"] },
      { label: "夢魔の搾精", val: "(succubus), (draining energy), (kissing), (saliva), (seductive smile), (thighs), (paizuri), (titjob), (cum on face), (aphrodisiac)", links: ["Basic R-18"] }
    ],
    "🐉 ドラゴン・人外娘 (Monster Girls)": [
      { label: "ドラゴン娘・交尾", val: "(dragon girl), (scales), (horns), (dragon tail), (large breasts), (wet skin), (cowgirl position), (intense sex), (breasts bouncing), (moaning), (sweat), (fire background), (detailed pussy)", links: ["Basic R-18"] },
      { label: "ユニコーン・純粋", val: "(unicorn girl), (horn), (white hair), (pure white skin), (missionary position), (loving sex), (gentle expression), (magical aura), (flower field), (virgin)", links: ["Basic R-18"] }
    ],
    "🧙‍♀️ 魔女・魔法 (Witch & Magic)": [
      { label: "魔女の儀式", val: "(witch), (black hat), (thighhighs), (open robe), (nude under robe), (magic circle), (tentacles from portal), (breast grab), (pussy penetration), (orgasm), (glowing runes)", links: ["Basic R-18"] },
      { label: "魔法洗脳", val: "(mind break), (hypnosis), (magic spell), (empty eyes), (obeying), (wand), (magical girl), (corruption), (fallen)", links: ["Basic R-18"] },
      { label: "媚薬・発情", val: "(drinking potion), (aphrodisiac), (heat), (sweaty), (flushed face), (drooling), (horny), (masturbation), (fingering)", links: ["Basic R-18"] }
    ]
  };

  // 翻訳辞書
  const DICT = {
    // 既存辞書
    "spaceship cockpit": "宇宙船コックピット", "holographic interface": "ホログラム画面", 
    // ... (既存データ) ...
    
    // ★追加辞書
    "trapped in a pool of shimmering slime": "煌めくスライムのプールに囚われる",
    "semi-translucent mucous-like tentacles": "半透明の粘液状触手",
    "wet mucus fuses with her body": "湿った粘液が体と融合",
    "slime coating her porcelain skin with an oily sheen": "スライムが磁器のような肌を油膜で覆う",
    "tentacles invade deep within her mouth": "触手が口の奥深くまで侵入",
    "saliva splattering": "飛び散る唾液",
    "trembling in climax": "絶頂で震える",
    "shimmering skin": "煌めく肌",
    "translucent/dripping slime sheen": "半透明で滴るスライムの光沢"
  };

  function createSubAccordion(title, items, isSecret) { 
    const details = document.createElement("details"); details.className = "qp-sub-acc"; details.style.marginBottom = "6px"; details.style.border = "1px solid #eee"; details.style.borderRadius = "4px"; details.style.background = "#fff"; details.open = false; 
    const summary = document.createElement("summary"); summary.textContent = title; summary.style.fontWeight = "bold"; summary.style.padding = "6px 10px"; summary.style.cursor = "pointer"; summary.style.background = "#f9f9f9"; 
    
    if(isSecret) summary.style.color = "#d00";

    details.appendChild(summary); 
    const content = document.createElement("div"); content.className = "qp-content-grid"; content.style.padding = "8px"; content.style.display = "grid"; content.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))"; content.style.gap = "6px"; 
    items.forEach(item => { 
      const label = document.createElement("label"); label.style.display = "flex"; label.style.alignItems = "center"; label.style.fontSize = "0.9em"; label.style.cursor = "pointer"; 
      const cb = document.createElement("input"); cb.type = "checkbox"; cb.style.marginRight = "6px"; cb.dataset.val = item.val || item.en; 
      label.appendChild(cb); label.appendChild(document.createTextNode(item.label || `${item.ja}/${item.en}`)); 
      if(item.links) cb.dataset.links = item.links.join(","); content.appendChild(label); 
    }); 
    details.appendChild(content); return details; 
  }

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      const generalArea = document.getElementById("qp-situations-general-area");
      
      if (generalArea) {
        // Genre
        const groupGenre = document.createElement("details");
        groupGenre.style.cssText = "margin-bottom:8px; border-left:2px solid #ddd; padding-left:8px;"; groupGenre.open = false;
        const sumGenre = document.createElement("summary"); sumGenre.textContent = "🌍 世界観・ジャンル (World & Genre)"; sumGenre.style.fontWeight = "bold"; sumGenre.style.cursor="pointer";
        groupGenre.appendChild(sumGenre);
        const conGenre = document.createElement("div"); groupGenre.appendChild(conGenre);
        Object.entries(GENRE_DATA).forEach(([k,v]) => { conGenre.appendChild(createSubAccordion(k, v)); });
        generalArea.appendChild(groupGenre);

        // Racial
        const groupRacial = document.createElement("details");
        groupRacial.style.cssText = "margin-bottom:8px; border-left:2px solid #ddd; padding-left:8px;"; groupRacial.open = false;
        const sumRacial = document.createElement("summary"); sumRacial.textContent = "🧚‍♀️ 種族・ファンタジーライフ (Racial Life)"; sumRacial.style.fontWeight = "bold"; sumRacial.style.cursor="pointer";
        groupRacial.appendChild(sumRacial);
        const conRacial = document.createElement("div"); groupRacial.appendChild(conRacial);
        Object.entries(RACIAL_DATA).forEach(([k,v]) => { conRacial.appendChild(createSubAccordion(k, v)); });
        generalArea.appendChild(groupRacial);

        // Secret
        if (IS_UNLOCKED) {
          const secretHeader = document.createElement("div");
          secretHeader.style.cssText = "margin:15px 0 5px; color:#d00; font-weight:bold; border-bottom:2px solid #d00; padding-bottom:3px;";
          secretHeader.textContent = "⚠️ R-18 Locations & Fantasy (Adult Only)";
          generalArea.appendChild(secretHeader);
          
          Object.entries(SECRET_LOCATIONS).forEach(([k,v]) => { generalArea.appendChild(createSubAccordion(k, v, true)); });
          
          // ★追加: ファンタジーNSFWもここに表示
          Object.entries(SECRET_FANTASY_DATA).forEach(([k,v]) => { generalArea.appendChild(createSubAccordion(k, v, true)); });
        }
      }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

