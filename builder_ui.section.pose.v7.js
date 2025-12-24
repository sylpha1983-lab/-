(function(){
  "use strict";

  const VERSION = 7; 
  const KEY = "pose"; 

  const POSE_DATA_ENV = {
    "💺 座り・家具インタラクション (Sitting on Furniture)": {
      "椅子・屋内": [
        { ja: "椅子に座る", en: "sitting on chair" },
        { ja: "ソファに座る", en: "sitting on couch, sitting on sofa" },
        { ja: "机の上に座る", en: "sitting on desk" },
        { ja: "テーブルに座る", en: "sitting on table" },
        { ja: "ベッドに座る", en: "sitting on bed" },
        { ja: "床に座る", en: "sitting on floor" },
        { ja: "窓辺に座る", en: "sitting in window, sitting on windowsill" },
        { ja: "枕の上に座る", en: "sitting on pillow" },
        { ja: "箱の上に座る", en: "sitting on box" },
        { ja: "ボールの上に座る (Balance)", en: "sitting on ball" },
        { ja: "椅子に逆座り", en: "sitting backwards, straddling chair" }
      ],
      "屋外・特殊": [
        { ja: "ベンチに座る", en: "sitting on bench" },
        { ja: "階段に座る", en: "sitting on stairs" },
        { ja: "フェンスに座る", en: "sitting on fence" },
        { ja: "屋根に座る", en: "sitting on roof" },
        { ja: "手すりに座る", en: "sitting on railing" },
        { ja: "鳥居に座る", en: "sitting on torii" },
        { ja: "車の上に座る", en: "sitting on car" }
      ]
    },
    "🌲 生物・自然との位置関係 (On Nature & Beings)": {
      "人・動物の上": [
        { ja: "人の上にいる (On Person)", en: "on person" },
        { ja: "人の上に座る", en: "sitting on person" },
        { ja: "膝の上にいる (On Lap)", en: "on lap, sitting on lap" },
        { ja: "肩の上にいる (On Shoulder)", en: "on shoulder, sitting on shoulder" },
        { ja: "頭の上にいる (On Head)", en: "on head, sitting on head" },
        { ja: "腕に乗る", en: "sitting on arm" },
        { ja: "動物に乗る/座る", en: "sitting on animal, riding animal" },
        { ja: "顔面騎乗 (顔に座る)", en: "sitting on face" }
      ],
      "自然物": [
        { ja: "地面に座る", en: "sitting on ground" },
        { ja: "岩の上に座る", en: "sitting on rock" },
        { ja: "切り株に座る", en: "sitting on tree stump" },
        { ja: "丸太に座る", en: "sitting on log" },
        { ja: "木に座る (枝)", en: "sitting in tree, sitting on branch" },
        { ja: "水面に座る (浮く)", en: "sitting on water" }
      ]
    },
    "👒 頭・体に乗せる (Objects on Head & Body)": {
      "動物・生物": [
        { ja: "動物が頭に乗っている", en: "animal on head" },
        { ja: "猫が頭に乗っている", en: "cat on head" },
        { ja: "ウサギが頭に乗っている", en: "rabbit on head" },
        { ja: "鳥が頭に乗っている", en: "bird on head" },
        { ja: "ポケモン/生物が頭に", en: "pokemon on head, creature on head" },
        { ja: "ちびキャラが頭に", en: "chibi on head, person on head" }
      ],
      "植物・食べ物": [
        { ja: "花が頭に咲いている", en: "flower on head, sprouting" },
        { ja: "葉っぱが頭に (たぬき)", en: "leaf on head" },
        { ja: "食べ物が頭に", en: "food on head" },
        { ja: "果物が頭に", en: "fruit on head" }
      ],
      "ユニーク・ネタ": [
        { ja: "物が頭に乗っている (汎用)", en: "object on head" },
        { ja: "タオルを頭に乗せる (温泉)", en: "towel on head" },
        { ja: "お札が頭に (キョンシー)", en: "ofuda on head" },
        { ja: "頭蓋骨を被る", en: "skull on head" },
        { ja: "パンツを被る (変態)", en: "panties on head, panty mask" } // テキストより
      ]
    },
    "📍 場所・位置指定 (Location & On Object)": {
      "屋内・家具": [
        { ja: "ベッドの上 (On Bed)", en: "on bed" },
        { ja: "椅子の上 (On Chair)", en: "on chair" },
        { ja: "ソファの上 (On Couch)", en: "on couch" },
        { ja: "机の上 (On Desk)", en: "on desk" },
        { ja: "テーブルの上", en: "on table" },
        { ja: "床の上", en: "on floor" },
        { ja: "タオル/毛布の上", en: "on beach towel, on blanket" }
      ],
      "屋外・高所": [
        { ja: "屋根の上", en: "on roof" },
        { ja: "手すりの上", en: "on railing" },
        { ja: "ベンチの上", en: "on bench" },
        { ja: "乗り物の上", en: "on vehicle, on car, on motorcycle" },
        { ja: "地面の上 (草/砂)", en: "on ground, on grass, on sand" }
      ],
      "環境インタラクション": [
        { ja: "壁にもたれる", en: "leaning against wall" },
        { ja: "窓の外を見る", en: "looking out window" },
        { ja: "柱に隠れる", en: "hiding behind pillar" },
        { ja: "手すりにもたれる", en: "leaning on railing" },
        { ja: "壁に手をつく", en: "hand on wall" },
        { ja: "水面に浮かぶ", en: "floating on water" },
        { ja: "崖の縁に座る", en: "sitting on cliff edge" }
      ]
    },
    "🏍️ 乗り物・騎乗 (Vehicles & Riding)": {
      "マシン": [
        { ja: "バイクに跨る", en: "riding motorcycle, sitting on bike" },
        { ja: "バイク走行中", en: "riding motorcycle, leaning into turn" },
        { ja: "車の運転", en: "driving car, hands on steering wheel" },
        { ja: "オープンカー", en: "sitting in convertible" },
        { ja: "自転車に乗る", en: "riding bicycle" },
        { ja: "戦車長 (ハッチ)", en: "tank commander, looking out from hatch" }
      ],
      "ファンタジー": [
        { ja: "乗馬 (馬)", en: "riding horse, equestrian" },
        { ja: "ドラゴンに乗る", en: "riding dragon" },
        { ja: "ほうきで飛ぶ", en: "flying on broom" }
      ]
    }
  };

  const API = {
    initUI() {
      if (window.__outputTranslation) {
        const dict = {};
        Object.values(POSE_DATA_ENV).forEach(subCats => {
          Object.values(subCats).flat().forEach(item => {
            if (item.en && item.ja) {
              const key = item.en.split(/,\s*/)[0];
              dict[key] = item.ja;
              dict[item.en] = item.ja;
            }
          });
        });
        window.__outputTranslation.register(dict);
      }

      const mount = () => {
        const root = document.getElementById("pose-master-root");
        if (!root) { setTimeout(mount, 100); return; }
        
        if (document.getElementById("pose-v7-separator")) return;

        const separator = document.createElement("div");
        separator.id = "pose-v7-separator";
        separator.style.cssText = "margin: 20px 0 10px 0; border-top: 2px dashed #444; text-align: center;";
        separator.innerHTML = "<span style='background:#fff; padding:0 10px; color:#ff5722; font-weight:bold; font-size:0.9em; display:inline-block; transform:translateY(-12px);'>▼ INTERACTION & LOCATION (v7 Sitting On)</span>";
        root.appendChild(separator);

        if (typeof window.__POSE_RENDERER === "function") {
          window.__POSE_RENDERER(root, POSE_DATA_ENV, "v7-env");
        }
      };
      
      if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", mount); } else { mount(); }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

