(function(){
  "use strict";

  const VERSION = 1; 
  const KEY = "race"; // 種族カテゴリー

  const CATEGORIES = {
    "ファンタジー種族 (Fantasy Races)": [
      { ja: "エルフ", en: "elf" }, { ja: "ダークエルフ", en: "dark elf" },
      { ja: "ドワーフ", en: "dwarf" }, { ja: "オーク", en: "orc" },
      { ja: "ゴブリン", en: "goblin" }, { ja: "妖精 (フェアリー)", en: "fairy" },
      { ja: "巨人", en: "giant" }, { ja: "小人 (ハーフリング)", en: "halfling" },
      { ja: "天使", en: "angel" }, { ja: "堕天使", en: "fallen angel" },
      { ja: "悪魔", en: "demon" }, { ja: "サキュバス", en: "succubus" }
    ],
    "亜人・ケモノ系 (Kemonomimi/Beast)": [
      { ja: "獣耳 (ケモノミミ)", en: "animal ears" }, { ja: "猫耳娘 (猫娘)", en: "cat girl" },
      { ja: "犬耳娘", en: "dog girl" }, { ja: "狐娘", en: "fox girl" },
      { ja: "狼娘", en: "wolf girl" }, { ja: "兎娘 (バニー)", en: "bunny girl" },
      { ja: "人魚 (マーメイド)", en: "mermaid" }, { ja: "ケンタウロス", en: "centaur" },
      { ja: "ラミア (蛇女)", en: "lamia" }, { ja: "ハーピー", en: "harpy" },
      { ja: "ドラゴン娘", en: "dragon girl" }, { ja: "スライム娘", en: "slime girl" }
    ],
    "SF・人工物・異形 (Sci-Fi/Non-Human)": [
      { ja: "アンドロイド", en: "android" }, { ja: "サイボーグ", en: "cyborg" },
      { ja: "ロボット", en: "robot" }, { ja: "メカ娘", en: "mecha musume" },
      { ja: "人形 (ドール)", en: "doll" }, { ja: "オートマタ", en: "automaton" },
      { ja: "ホログラム", en: "hologram" }, { ja: "エイリアン", en: "alien" },
      { ja: "ゾンビ", en: "zombie" }, { ja: "幽霊 (ゴースト)", en: "ghost" },
      { ja: "吸血鬼 (ヴァンパイア)", en: "vampire" }, { ja: "単眼娘 (サイクロプス)", en: "cyclops" }
    ],
    "肌の色・スキン属性 (Skin Types)": [
      { ja: "褐色肌", en: "dark skin" }, { ja: "日焼け肌", en: "tan" },
      { ja: "色白", en: "pale skin" }, { ja: "異色肌 (青肌など)", en: "colored skin" },
      { ja: "青肌", en: "blue skin" }, { ja: "緑肌", en: "green skin" },
      { ja: "赤肌", en: "red skin" }, { ja: "グレー肌", en: "grey skin" },
      { ja: "タトゥーあり", en: "tattoo" }, { ja: "傷跡あり", en: "scar" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-race") || container;
      // 親コンテナが無ければ作成 (CoreのattemptMount順序外の場合への保険)
      if (!parent.id) {
         parent.id = "list-race";
         const h2 = document.createElement("h2");
         h2.textContent = "種族 (Race)";
         // 既存の見出しがあれば削除
         const existingH2 = parent.querySelector("h2");
         if(existingH2) existingH2.remove();
         parent.prepend(h2);
      }
      
      parent.innerHTML = ""; // 初期化

      const section = document.createElement("div");
      section.className = "race-v1";

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.className = "race-cat";
        details.style.marginBottom = "6px";
        details.style.border = "1px solid #eee";
        details.style.borderRadius = "4px";
        details.style.background = "#fff";
        details.open = false; // 閉じておく

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
        content.style.gridTemplateColumns = "repeat(auto-fill, minmax(140px, 1fr))";
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
      document.querySelectorAll(".race-v1 input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  // Core側に 'race' というID認識がない場合があるため、手動でマウントを促す
  // ただし builder_core.v1.js の attemptMount 内の order に 'race' がないと表示されない可能性があるため
  // 念のため builder_core.v1.js の order 配列も修正が必要ですが、
  // 現状の ensureContainer は動的にDIVを作るので、このファイル単体でも動作するよう配慮しました。
  
  window.__registerPromptPart(KEY, VERSION, API);
})();
