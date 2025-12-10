(function(){
  "use strict";
  const VERSION = 16; // 拡張パックP (拡張コーデセット: サブカル・イベント・人外)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "🎀 サブカル・ファッションセット (Subculture Sets)": [
      { label: "甘ロリセット (Sweet)", val: "sweet lolita, pink dress, frills, bows, bonnet, mary janes, white tights" },
      { label: "ゴスロリセット (Gothic)", val: "gothic lolita, black dress, cross, headdress, lace, platform shoes" },
      { label: "地雷系セット (Jirai)", val: "jiraikei, black and pink, ribbon, backpack, platform shoes, makeup, dark atmosphere" },
      { label: "スチームパンクセット (Steam)", val: "steampunk, corset, gears, goggles, brown leather, boots, brass accessories" },
      { label: "サイバーパンクセット (Cyber)", val: "cyberpunk, techwear, neon lights, jacket, bodysuit, futuristic visor, mechanical parts" }
    ],
    "💍 イベント・ステージ衣装セット (Event/Stage Sets)": [
      { label: "ウェディングセット (Bride)", val: "wedding dress, white, veil, bouquet, tiara, jewelry, church background" },
      { label: "アイドル衣装セット (Idol)", val: "idol clothes, shiny, frills, microphone, stage lights, energetic pose, ribbon" },
      { label: "レースクイーンセット (RQ)", val: "race queen, highleg, umbrella, boots, cap, circuit background" },
      { label: "チアリーダーセット (Cheer)", val: "cheerleader, pom poms, crop top, miniskirt, sneakers, energetic" },
      { label: "バレリーナセット (Ballet)", val: "ballet tutu, ballet shoes, tights, bun hair, elegant pose, stage" }
    ],
    "👹 ファンタジー・人外セット (Fantasy/Non-Human Sets)": [
      { label: "悪魔/サキュバスセット (Demon)", val: "succubus, demon wings, horns, tail, black outfit, gothic" },
      { label: "天使セット (Angel)", val: "angel, white wings, halo, white dress, holy light, feathers" },
      { label: "ヴァンパイアセット (Vampire)", val: "vampire, gothic clothes, cape, fangs, red eyes, coffin, dark atmosphere" },
      { label: "魔女セット (Witch)", val: "witch, robe, witch hat, broom, magic book, potion" },
      { label: "くノ一セット (Ninja)", val: "kunoichi, ninja suit, scarf, katana, mask, japanese dojo background" }
    ]
  };

  // 翻訳辞書
  // ユーザーが選択時に分かりやすいよう、セット名を日本語化
  const DICT = {
    // Labels
    "sweet lolita, pink dress, frills, bows, bonnet, mary janes, white tights": "甘ロリセット",
    "gothic lolita, black dress, cross, headdress, lace, platform shoes": "ゴスロリセット",
    "jiraikei, black and pink, ribbon, backpack, platform shoes, makeup, dark atmosphere": "地雷系セット",
    "steampunk, corset, gears, goggles, brown leather, boots, brass accessories": "スチームパンクセット",
    "cyberpunk, techwear, neon lights, jacket, bodysuit, futuristic visor, mechanical parts": "サイバーパンクセット",

    "wedding dress, white, veil, bouquet, tiara, jewelry, church background": "ウェディングセット",
    "idol clothes, shiny, frills, microphone, stage lights, energetic pose, ribbon": "アイドル衣装セット",
    "race queen, highleg, umbrella, boots, cap, circuit background": "レースクイーンセット",
    "cheerleader, pom poms, crop top, miniskirt, sneakers, energetic": "チアリーダーセット",
    "ballet tutu, ballet shoes, tights, bun hair, elegant pose, stage": "バレリーナセット",

    "succubus, demon wings, horns, tail, black outfit, gothic": "悪魔/サキュバスセット",
    "angel, white wings, halo, white dress, holy light, feathers": "天使セット",
    "vampire, gothic clothes, cape, fangs, red eyes, coffin, dark atmosphere": "ヴァンパイアセット",
    "witch, robe, witch hat, broom, magic book, potion": "魔女セット",
    "kunoichi, ninja suit, scarf, katana, mask, japanese dojo background": "くノ一セット",

    // Components (一部未登録の可能性のある単語)
    "bonnet": "ボンネット", "mary janes": "メリージェーン靴", "gears": "歯車", "brass accessories": "真鍮アクセ",
    "futuristic visor": "未来的なバイザー", "bouquet": "ブーケ", "circuit background": "サーキット背景",
    "pom poms": "ポンポン", "crop top": "クロップトップ", "ballet shoes": "バレエシューズ", "bun hair": "お団子髪",
    "coffin": "棺桶", "potion": "ポーション", "japanese dojo background": "道場背景"
  };

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      let parent = document.querySelector("#list-attire");
      if (!parent) return;

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "attire-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        details.open = false; 

        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#fff0f5; color:#d63384;";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(150px, 1fr)); gap:6px;";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.val = item.val; 
          cb.style.marginRight = "6px";
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.label));
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const root = document.createElement("div");
      root.className = "attire-v16-container";
      
      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => {
        root.appendChild(createCat(cat, items));
      });

      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".attire-v16-container input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.val);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
