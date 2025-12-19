(function(){
  "use strict";

  const VERSION = 1;
  const KEY = "narrative";

  const CATEGORIES = {
    "アクション・戦闘 (Combat Action)": [
      { ja: "剣を抜く", en: "drawing sword" },
      { ja: "武器を構える", en: "fighting stance" },
      { ja: "魔法を詠唱中", en: "casting spell" },
      { ja: "弓を引く", en: "aiming bow" },
      { ja: "攻撃の瞬間", en: "attacking" },
      { ja: "回避/ドッジ", en: "dodging" },
      { ja: "叫ぶ/咆哮", en: "screaming" },
      { ja: "空を飛ぶ", en: "flying" }
    ],
    "日常・動作 (Daily Action)": [
      { ja: "走っている", en: "running" },
      { ja: "歩いている", en: "walking" },
      { ja: "振り返る", en: "looking back" },
      { ja: "読書している", en: "reading book" },
      { ja: "食事中", en: "eating" },
      { ja: "お茶を飲んでいる", en: "drinking tea" },
      { ja: "寝ている", en: "sleeping" },
      { ja: "髪をかき上げる", en: "adjusting hair" },
      { ja: "手を伸ばす", en: "reaching out" }
    ],
    "シチュエーション (Scenario/Context)": [
      { ja: "戦闘直後/戦場の跡", en: "aftermath of battle" },
      { ja: "廃墟に佇む", en: "standing in ruins" },
      { ja: "暗い森での儀式", en: "ritual in dark forest" },
      { ja: "雨の中の再会", en: "reunion in rain" },
      { ja: "デートの待ち合わせ", en: "waiting on a date" },
      { ja: "パーティー/祝宴", en: "party celebration" },
      { ja: "冒険の始まり", en: "starting adventure" },
      { ja: "爆発を背に", en: "walking away from explosion" }
    ],
    "感情的・物語的状況 (Emotional Context)": [
      { ja: "絶望的な状況", en: "desperation" },
      { ja: "勝利の瞬間", en: "triumph" },
      { ja: "静かな憧れ", en: "quiet longing" },
      { ja: "悲劇的", en: "tragic scene" },
      { ja: "ロマンチックな瞬間", en: "romantic moment" },
      { ja: "緊迫感", en: "intense situation" },
      { ja: "平和なひととき", en: "peaceful moment" },
      { ja: "メランコリック (哀愁)", en: "melancholic" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-narrative") || container;
      parent.innerHTML = "";
      
      const section = document.createElement("div");
      section.className = "narrative-section";
      
      const h = document.createElement("div");
      h.textContent = "📖 ストーリー・行動 (Narrative/Action)";
      h.style.fontWeight = "bold";
      h.style.color = "#2e8b57"; // 物語を感じさせるシーグリーン
      h.style.marginBottom = "8px";
      section.appendChild(h);

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.open = false; 
        details.style.marginBottom = "8px";
        
        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.cursor = "pointer";
        summary.style.fontSize = "0.9em";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.display = "flex";
        content.style.flexWrap = "wrap";
        content.style.gap = "6px";
        content.style.padding = "5px 0 0 5px";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.fontSize = "0.85em";
          label.style.display = "flex";
          label.style.alignItems = "center";
          label.style.backgroundColor = "#f0fff4"; // 薄い緑背景
          label.style.padding = "2px 6px";
          label.style.borderRadius = "4px";
          label.style.border = "1px solid #d0f0d0";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          cb.style.marginRight = "4px";
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.ja));
          content.appendChild(label);
        });

        details.appendChild(content);
        section.appendChild(details);
      });

      parent.appendChild(section);

      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(i => dict[i.en] = i.ja);
        window.__outputTranslation.register(dict);
      }
    },
    getTags() {
      const tags = [];
      document.querySelectorAll(".narrative-section input:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
