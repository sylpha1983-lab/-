(function(){
  "use strict";
  const VERSION = 7; 
  const KEY = "quality_preset";
  const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  // ==============================================================================
  // 通常戦闘 (Combat)
  // ==============================================================================
  const COMBAT_DATA = {
    "⚔️ 剣戟・刀 (Sword Battle)": [
      { label: "居合・抜刀", val: "(drawing katana), (iai stance), (hand on hilt), (sparkles), (falling petals), (focused expression), (motion blur), (kimono or armor)", links: ["和風", "ダイナミックポーズ"] },
      { label: "二刀流・乱舞", val: "(dual wielding), (two swords), (spinning attack), (slashing effects), (dynamic action), (afterimage), (speed lines), (intense battle)", links: ["ダイナミックポーズ", "エフェクト"] },
      { label: "聖騎士の誓い", val: "(kneeling with sword), (sword planted in ground), (praying), (holy light), (knight armor), (cathedral background), (solemn), (god rays)", links: ["ファンタジー"] },
      { label: "大剣・一撃", val: "(holding giant sword), (heavy weapon), (swinging sword), (ground cracking), (debris flying), (power stance), (screaming), (impact frame)", links: ["アクション"] }
    ],
    "🔫 銃撃・射撃 (Gun Action)": [
      { label: "二丁拳銃・乱射", val: "(dual guns), (firing both hands), (jumping sideways), (bullet time), (muzzle flash), (debris), (action movie shot), (flying cartridges)", links: ["アクション"] },
      { label: "スナイパー・狙撃", val: "(holding sniper rifle), (looking through scope), (lying prone), (rooftop), (cityscape in background), (one eye closed), (windy), (serious face)", links: ["都市"] },
      { label: "リロード・遮蔽物", val: "(reloading gun), (magazine in air), (hiding behind cover), (sweat), (intense battle), (bullets flying), (wall damage), (tactical gear)", links: ["アクション"] },
      { label: "制圧射撃", val: "(holding assault rifle), (firing stance), (muzzle flash), (shell casings), (aggressive expression), (warzone), (smoke and fire)", links: ["アクション"] }
    ],
    "🧙‍♀️ 魔法・召喚 (Magic & Summon)": [
      { label: "爆裂魔法・炎", val: "(fire magic), (fireball in hand), (flames surrounding), (burning eyes), (floating hair), (intense heat), (explosion background), (casting spell)", links: ["エフェクト"] },
      { label: "召喚術・顕現", val: "(summoning ritual), (summoning circle on ground), (giant monster emerging), (holding grimoire), (chanting), (glowing runes), (mystical atmosphere)", links: ["ファンタジー"] },
      { label: "ヒーラー・癒やし", val: "(casting healing magic), (gentle light), (feathers falling), (praying hands), (angelic atmosphere), (soft focus), (warm colors)", links: ["ファンタジー"] }
    ],
    "👊 格闘・近接 (Melee & Brawler)": [
      { label: "飛び蹴り", val: "(flying kick), (dynamic pose), (shoe sole focus), (impact effect), (shattered glass), (street fight), (high angle), (action lines)", links: ["ダイナミックポーズ"] },
      { label: "クロスカウンター", val: "(punching), (fist clash), (sweat flying), (intense face), (motion blur), (close up), (fighting stance), (knuckles)", links: ["アクション"] },
      { label: "気功・オーラ", val: "(martial arts stance), (glowing aura), (energy gathering), (power up), (floating rocks), (dragon effect), (intense eyes)", links: ["エフェクト"] }
    ],
    "🏹 特殊武器・その他 (Special Weapons)": [
      { label: "弓矢・必中", val: "(drawing bow), (energy arrow), (aiming at camera), (concentration), (wind blowing hair), (sharp eyes), (dynamic angle)", links: ["アクション"] },
      { label: "大鎌・死神", val: "(holding scythe), (grim reaper style), (full moon), (dark aura), (floating), (menacing), (black feathers), (silhouette)", links: ["ホラー"] },
      { label: "槍・突撃", val: "(holding spear), (thrusting pose), (charging forward), (speed lines), (army behind), (warrior scream), (battlefield)", links: ["アクション"] }
    ]
  };

  // ==============================================================================
  // 🔞 R-18 戦闘・リョナ (Defeat & Ryona)
  // ==============================================================================
  const SECRET_COMBAT_DATA = {
    "🔞 敗北・リョナ (Defeat & Ryona)": [
      { label: "敗北・地面に", val: "(defeated), (lying on ground), (injured), (torn clothes), (dirt), (bleeding), (crying), (messy hair), (despair)", links: ["Basic R-18"] },
      { label: "拘束戦闘", val: "(fighting while bound), (handcuffs), (struggling), (shibari combat), (disadvantage), (glaring), (sweat)", links: ["Basic R-18"] },
      { label: "服ビリビリ", val: "(clothes torn), (armor broken), (exposed skin), (breast slip), (panchira), (damage), (embarrassed but fighting)", links: ["Basic R-18"] },
      { label: "腹パン・苦悶", val: "(stomach punch), (gut punch), (painful expression), (saliva), (doubled over), (gasping), (impact)", links: ["Basic R-18"] },
      { label: "強制・絶望", val: "(grabbed by face), (lifted up), (feet off ground), (tears), (terror), (overwhelming power), (bad ending)", links: ["Basic R-18"] }
    ]
  };

  // ==============================================================================
  // 📚 v7専用辞書 (Local Dictionary for v7)
  // ==============================================================================
  const DICT = {
    "drawing katana": "抜刀", "iai stance": "居合の構え", "hand on hilt": "柄に手", "falling petals": "散る花弁",
    "focused expression": "集中した表情", "motion blur": "モーションブラー", "kimono or armor": "着物か鎧", "dual wielding": "二刀流",
    "two swords": "二本の剣", "spinning attack": "回転攻撃", "slashing effects": "斬撃エフェクト", "dynamic action": "ダイナミックアクション",
    "afterimage": "残像", "speed lines": "スピード線", "intense battle": "激戦", "kneeling with sword": "剣に跪く",
    "sword planted in ground": "地面に刺さった剣", "praying": "祈り", "holy light": "聖なる光", "knight armor": "騎士の鎧",
    "cathedral background": "大聖堂の背景", "solemn": "厳粛", "god rays": "ゴッドレイ", "holding giant sword": "大剣を持つ",
    "heavy weapon": "重火器", "swinging sword": "剣を振る", "ground cracking": "地割れ", "debris flying": "破片が飛ぶ",
    "power stance": "パワースタンス", "impact frame": "インパクトフレーム", "dual guns": "二丁拳銃", "firing both hands": "両手撃ち",
    "jumping sideways": "横っ飛び", "bullet time": "バレットタイム", "muzzle flash": "マズルフラッシュ", "action movie shot": "アクション映画風",
    "flying cartridges": "薬莢が飛ぶ", "holding sniper rifle": "スライパーライフルを持つ", "looking through scope": "スコープを覗く",
    "lying prone": "伏せ撃ち", "rooftop": "屋上", "cityscape in background": "街並み", "one eye closed": "片目をつぶる",
    "windy": "風", "serious face": "真剣な顔", "reloading gun": "リロード", "magazine in air": "宙に浮くマガジン",
    "hiding behind cover": "物陰に隠れる", "sweat": "汗", "bullets flying": "飛び交う弾丸", "wall damage": "壁の損傷",
    "tactical gear": "タクティカルギア", "holding assault rifle": "アサルトライフルを持つ", "firing stance": "射撃姿勢",
    "shell casings": "薬莢", "aggressive expression": "攻撃的な表情", "warzone": "戦場", "smoke and fire": "煙と炎",
    "fire magic": "炎魔法", "fireball in hand": "火の玉", "flames surrounding": "炎に包まれる", "burning eyes": "燃える瞳",
    "floating hair": "浮遊する髪", "intense heat": "高熱", "explosion background": "爆発背景", "casting spell": "詠唱",
    "summoning ritual": "召喚儀式", "summoning circle on ground": "召喚陣", "giant monster emerging": "巨大モンスター出現",
    "holding grimoire": "魔導書を持つ", "chanting": "詠唱", "glowing runes": "光るルーン", "mystical atmosphere": "神秘的な雰囲気",
    "casting healing magic": "回復魔法", "gentle light": "優しい光", "feathers falling": "舞い散る羽", "praying hands": "祈る手",
    "angelic atmosphere": "天使のような", "soft focus": "ソフトフォーカス", "warm colors": "暖色", "flying kick": "飛び蹴り",
    "dynamic pose": "ダイナミックポーズ", "shoe sole focus": "靴底フォーカス", "impact effect": "衝撃エフェクト", "shattered glass": "割れるガラス",
    "street fight": "ストリートファイト", "high angle": "ハイアングル", "action lines": "アクション線", "punching": "パンチ",
    "fist clash": "拳の激突", "sweat flying": "飛び散る汗", "intense face": "激しい顔", "close up": "接写", "fighting stance": "ファイティングポーズ",
    "knuckles": "拳", "martial arts stance": "武道の構え", "glowing aura": "光るオーラ", "energy gathering": "エネルギー充填",
    "power up": "パワーアップ", "floating rocks": "浮遊する岩", "dragon effect": "龍のエフェクト", "intense eyes": "鋭い眼光",
    "drawing bow": "弓を引く", "energy arrow": "エネルギーの矢", "aiming at camera": "カメラを狙う", "concentration": "集中",
    "sharp eyes": "鋭い目", "holding scythe": "大鎌を持つ", "grim reaper style": "死神風", "full moon": "満月", "dark aura": "闇のオーラ",
    "floating": "浮遊", "menacing": "威圧的", "black feathers": "黒い羽", "holding spear": "槍を持つ", "thrusting pose": "突き",
    "charging forward": "突撃", "army behind": "背後に軍勢", "warrior scream": "雄叫び", "battlefield": "戦場",
    "defeated": "敗北", "injured": "負傷", "torn clothes": "破れた服", "bleeding": "流血", "despair": "絶望",
    "fighting while bound": "拘束戦闘", "shibari combat": "緊縛戦闘", "clothes torn": "服ビリビリ", "armor broken": "鎧破壊",
    "stomach punch": "腹パン", "gut punch": "腹部攻撃", "doubled over": "くの字", "impact": "衝撃", "grabbed by face": "顔を掴まれる",
    "lifted up": "持ち上げられる", "feet off ground": "足が浮く", "terror": "恐怖", "overwhelming power": "圧倒的な力", "bad ending": "バッドエンド"
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
      
      const sharedContent = document.getElementById("qp-combat-content");
      if (sharedContent) {
        Object.entries(COMBAT_DATA).forEach(([k,v]) => { sharedContent.appendChild(createSubAccordion(k, v)); });
        
        if (IS_UNLOCKED) {
          const secretHeader = document.createElement("div");
          secretHeader.style.cssText = "margin:15px 0 5px; color:#d00; font-weight:bold; border-bottom:2px solid #d00; padding-bottom:3px;";
          secretHeader.textContent = "⚠️ R-18 Combat (Adult Only)";
          sharedContent.appendChild(secretHeader);
          Object.entries(SECRET_COMBAT_DATA).forEach(([k,v]) => { sharedContent.appendChild(createSubAccordion(k, v, true)); });
        }
      } else {
        // フォールバック
        const root = document.querySelector(".quality-preset-integrated");
        if (root) {
          Object.entries(COMBAT_DATA).forEach(([k,v]) => root.appendChild(createSubAccordion(k, v)));
          if(IS_UNLOCKED) Object.entries(SECRET_COMBAT_DATA).forEach(([k,v]) => root.appendChild(createSubAccordion(k, v, true)));
        }
      }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

