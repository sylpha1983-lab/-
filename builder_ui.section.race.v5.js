(function(){
  "use strict";
  const VERSION = 5; 
  const KEY = "race";

  const WING_DATA = {
    "🪶 天使・鳥・生物翼 (Biological)": [
      { ja: "天使の翼 (白)", en: "angel wings, white wings, feathered wings" },
      { ja: "堕天使の翼 (黒)", en: "fallen angel wings, black wings, feathered wings" },
      { ja: "悪魔の翼 (コウモリ)", en: "demon wings, bat wings, membranous wings" },
      { ja: "ドラゴンの翼", en: "dragon wings, scales, huge wings" },
      { ja: "鳥の翼 (一般)", en: "bird wings" },
      { ja: "鷹/鷲の翼", en: "eagle wings, hawk wings, large wings" },
      { ja: "カラスの翼", en: "raven wings, crow wings, glossy black wings" },
      { ja: "フクロウの翼", en: "owl wings, fluffy wings" }
    ],
    "🦋 昆虫・妖精・植物翼 (Insect & Nature)": [
      { ja: "妖精の羽 (透明)", en: "fairy wings, translucent wings" },
      { ja: "蝶の羽 (バタフライ)", en: "butterfly wings, multicolored wings" },
      { ja: "蛾の羽 (モス)", en: "moth wings" },
      { ja: "トンボの羽", en: "dragonfly wings, iridescent wings" },
      { ja: "ハチの羽", en: "bee wings" },
      { ja: "花弁の翼 (花)", en: "flower wings, petal wings" },
      { ja: "葉っぱの翼", en: "leaf wings, plant wings" }
    ],
    "⚙️ メカ・SF・人工翼 (Artificial & Tech)": [
      { ja: "メカニカルウィング", en: "mechanical wings, robot wings, metal wings" },
      { ja: "スチームパンク翼 (歯車)", en: "steampunk wings, clockwork wings, gear wings, brass wings" },
      { ja: "サイバーパンク翼 (ネオン)", en: "cyberpunk wings, neon wings, glowing lines" },
      { ja: "光の翼 (ホログラム)", en: "holographic wings, energy wings, light wings, glowing wings" },
      { ja: "ジェットウィング (推進器)", en: "jet wings, thrusters, booster wings" },
      { ja: "ブレードウィング (刃)", en: "blade wings, sharp wings, sword wings" },
      { ja: "クリスタルウィング", en: "crystal wings, gem wings, prism wings" }
    ],
    "🔥 属性・魔法翼 (Elemental & Magic)": [
      { ja: "炎の翼", en: "fire wings, burning wings, wings of fire" },
      { ja: "氷の翼", en: "ice wings, frozen wings" },
      { ja: "水の翼", en: "water wings, liquid wings" },
      { ja: "雷の翼", en: "lightning wings, electric wings" },
      { ja: "影の翼", en: "shadow wings, darkness wings, smoky wings" },
      { ja: "骨の翼 (ボーン)", en: "bone wings, skeletal wings" },
      { ja: "触手の翼", en: "tentacle wings, fleshy wings" }
    ],
    "📐 形状・数・配置 (Shape & Arrange)": [
      { ja: "巨大な翼", en: "huge wings, wide wingspan" },
      { ja: "小さな翼", en: "tiny wings, small wings" },
      { ja: "片翼", en: "single wing, one winged" },
      { ja: "非対称な翼", en: "asymmetrical wings" },
      { ja: "4枚翼", en: "4 wings, multiple wings" },
      { ja: "6枚翼", en: "6 wings, seraphim wings" },
      { ja: "腰の翼", en: "wings on hips, waist wings" },
      { ja: "頭の翼", en: "wings on head, head wings" },
      { ja: "浮遊する翼", en: "detached wings, floating wings" },
      { ja: "折りたたんだ翼", en: "folded wings" },
      { ja: "広げた翼", en: "spread wings" }
    ]
  };

  const DICT = { "angel wings": "天使の翼", "white wings": "白い翼", "feathered wings": "羽毛の翼", "fallen angel wings": "堕天使の翼", "black wings": "黒い翼", "demon wings": "悪魔の翼", "bat wings": "コウモリ翼", "membranous wings": "皮膜の翼", "dragon wings": "ドラゴンの翼", "bird wings": "鳥の翼", "eagle wings": "鷲の翼", "raven wings": "カラスの翼", "owl wings": "フクロウの翼", "fairy wings": "妖精の羽", "translucent wings": "半透明の羽", "butterfly wings": "蝶の羽", "moth wings": "蛾の羽", "dragonfly wings": "トンボの羽", "flower wings": "花の羽", "mechanical wings": "機械翼", "robot wings": "ロボット翼", "metal wings": "金属翼", "steampunk wings": "スチームパンク翼", "clockwork wings": "時計仕掛けの翼", "cyberpunk wings": "サイバーパンク翼", "neon wings": "ネオン翼", "holographic wings": "ホログラム翼", "energy wings": "エネルギー翼", "jet wings": "ジェット翼", "blade wings": "刃の翼", "crystal wings": "水晶の翼", "fire wings": "炎の翼", "burning wings": "燃える翼", "ice wings": "氷の翼", "water wings": "水の翼", "lightning wings": "雷の翼", "shadow wings": "影の翼", "bone wings": "骨の翼", "tentacle wings": "触手の翼", "huge wings": "巨大な翼", "tiny wings": "小さな翼", "single wing": "片翼", "asymmetrical wings": "非対称の翼", "4 wings": "4枚翼", "6 wings": "6枚翼", "wings on hips": "腰に翼", "wings on head": "頭に翼", "detached wings": "浮遊翼", "folded wings": "折りたたんだ翼", "spread wings": "広げた翼" };

  const API = {
    initUI() {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      const partsRoot = document.getElementById("race-root-parts-content");
      if (!partsRoot) return;

      // ★ご要望対応: 翼コレクション全体を折りたたみ（初期閉じ）にする
      const wingsContainer = document.createElement("details");
      wingsContainer.className = "race-wings-container";
      wingsContainer.style.cssText = "margin-bottom:10px; border:2px dashed #bbb; border-radius:6px; background:#fff;";
      wingsContainer.open = false; // ★閉じた状態でスタート

      const mainSummary = document.createElement("summary");
      mainSummary.textContent = "🦇 Wings Collection (翼・ウィング)";
      mainSummary.style.cssText = "font-weight:bold; padding:10px; cursor:pointer; background:#eee; color:#333; font-size:1.0em;";
      wingsContainer.appendChild(mainSummary);

      const contentWrapper = document.createElement("div");
      contentWrapper.style.padding = "10px";

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "race-cat";
        details.style.cssText = "margin-bottom:6px; border:1px solid #eee; border-radius:4px; background:#fff;";
        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#f9f9f9; color:#555;";
        details.appendChild(summary);
        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(140px, 1fr)); gap:6px;";
        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          const cb = document.createElement("input"); cb.type = "checkbox"; cb.style.marginRight = "6px";
          cb.dataset.val = item.en; 
          label.appendChild(cb); label.appendChild(document.createTextNode(item.ja)); label.title = item.en;
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      Object.entries(WING_DATA).forEach(([cat, items]) => {
        contentWrapper.appendChild(createCat(cat, items));
      });

      wingsContainer.appendChild(contentWrapper);
      partsRoot.appendChild(wingsContainer);
    },
    getTags() { return []; }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

