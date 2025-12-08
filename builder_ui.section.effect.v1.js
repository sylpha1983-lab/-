(function(){
  "use strict";
  const VERSION = 1; 
  const KEY = "effect";

  const CATEGORIES = {
    "🔥 自然元素 (Elemental)": [
      { ja: "炎・火", en: "fire" }, { ja: "青い炎", en: "blue fire" }, { ja: "爆発", en: "explosion" },
      { ja: "水", en: "water" }, { ja: "水しぶき", en: "water splash" }, { ja: "水滴", en: "water droplets" },
      { ja: "氷", en: "ice" }, { ja: "氷の結晶", en: "ice crystals" }, { ja: "雪", en: "snow" },
      { ja: "雷", en: "lightning" }, { ja: "電気・スパーク", en: "electricity" },
      { ja: "風", en: "wind" }, { ja: "竜巻", en: "tornado" }, { ja: "砂嵐", en: "sandstorm" },
      { ja: "煙", en: "smoke" }, { ja: "蒸気", en: "steam" }, { ja: "霧", en: "fog" }
    ],
    "✨ 魔法・オーラ (Magic & Aura)": [
      { ja: "魔法陣", en: "magic circle" }, { ja: "魔法の呪文", en: "magic spell" },
      { ja: "オーラ", en: "aura" }, { ja: "輝くオーラ", en: "glowing aura" }, { ja: "炎のオーラ", en: "fiery aura" },
      { ja: "エネルギー球", en: "energy ball" }, { ja: "ビーム", en: "beam" }, { ja: "レーザー", en: "laser" },
      { ja: "召喚", en: "summoning" }, { ja: "結界", en: "barrier" }
    ],
    "🌸 パーティクル・浮遊物 (Particles)": [
      { ja: "光の粒子", en: "light particles" }, { ja: "キラキラ", en: "sparkles" },
      { ja: "花弁", en: "falling petals" }, { ja: "桜吹雪", en: "cherry blossom petals" },
      { ja: "羽", en: "feathers" }, { ja: "黒い羽", en: "black feathers" },
      { ja: "紙吹雪", en: "confetti" }, { ja: "火の粉", en: "embers" },
      { ja: "埃・塵", en: "dust" }, { ja: "泡", en: "bubbles" }, { ja: "紅葉", en: "autumn leaves" }
    ],
    "💥 バトル・衝撃 (Battle Impact)": [
      { ja: "斬撃エフェクト", en: "slash effect" }, { ja: "衝撃波", en: "shockwave" },
      { ja: "残像", en: "afterimage" }, { ja: "スピード線", en: "speed lines" },
      { ja: "ブラー (ブレ)", en: "motion blur" }, { ja: "血しぶき", en: "blood splash" },
      { ja: "瓦礫", en: "debris" }, { ja: "ひび割れ", en: "cracked ground" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-effect") || container;
      parent.innerHTML = "";

      const section = document.createElement("div");
      section.className = "effect-v1";

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.className = "effect-cat";
        details.style.marginBottom = "6px";
        details.style.border = "1px solid #eee";
        details.style.borderRadius = "4px";
        details.style.background = "#fff";
        details.open = false; 

        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.fontWeight = "bold";
        summary.style.padding = "6px 10px";
        summary.style.cursor = "pointer";
        summary.style.background = "#f9f9f9";
        summary.style.color = "#555";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.padding = "8px";
        content.style.display = "grid";
        content.style.gridTemplateColumns = "repeat(auto-fill, minmax(130px, 1fr))";
        content.style.gap = "6px";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.display = "flex";
          label.style.alignItems = "center";
          label.style.fontSize = "0.9em";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          cb.style.marginRight = "6px";
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        details.appendChild(content);
        section.appendChild(details);
      });

      parent.appendChild(section);

      // 翻訳辞書登録
      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(item => {
          if (item.en && item.ja) dict[item.en] = item.ja;
        });
        window.__outputTranslation.register(dict);
      }
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".effect-v1 input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
