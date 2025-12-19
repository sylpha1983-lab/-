(function(){
  "use strict";
  const VERSION = 1; 
  const KEY = "pose";

  const POSE_DATA_BASIC = {
    "🧍 基本・日常 (Basic & Daily)": {
      "立ち・待機": [
        { ja: "立ちポーズ", en: "standing pose" }, 
        { ja: "待機ポーズ（アイドル）", en: "idle pose" },
        { ja: "モデル立ち", en: "model pose" },
        { ja: "S字立ち（コントラポスト）", en: "contrapposto" },
        { ja: "日常ポーズ（カジュアル）", en: "casual pose" },
        { ja: "振り返り", en: "looking over shoulder" }, 
        { ja: "腕組み", en: "crossed arms" },
        { ja: "仁王立ち", en: "standing with legs apart" }, 
        { ja: "ポケットに手", en: "hands in pockets" }
      ],
      "座り・床": [
        { ja: "座りポーズ", en: "sitting pose" }, 
        { ja: "あぐら", en: "sitting cross-legged" },
        { ja: "体育座り", en: "hugging knees" }, 
        { ja: "ぺたん座り", en: "w-sitting" },
        { ja: "横座り", en: "side sitting" }, 
        { ja: "開脚座り", en: "spread legs sitting" },
        { ja: "四つん這い", en: "all fours" }, 
        { ja: "片膝立ち", en: "kneeling on one knee" },
        { ja: "しゃがみポーズ", en: "crouch pose" }
      ],
      "寝転び・リラックス": [
        { ja: "寝ポーズ", en: "sleeping pose" },
        { ja: "脱力ポーズ（リラックス）", en: "relaxed pose" },
        { ja: "仰向け", en: "lying on back" }, 
        { ja: "うつ伏せ", en: "lying on stomach" },
        { ja: "横向き（胎児）", en: "fetal position" }, 
        { ja: "膝枕", en: "lap pillow" }
      ],
      "生活・仕事": [
        { ja: "考えるポーズ", en: "thinking pose" },
        { ja: "スマホ操作", en: "checking phone" }, 
        { ja: "料理中", en: "cooking" },
        { ja: "食事中", en: "eating" }, 
        { ja: "自撮り", en: "taking selfie" },
        { ja: "運転中", en: "driving car" }, 
        { ja: "PC作業", en: "typing on computer" }
      ]
    },
    "✨ スタイル・キャラクター (Style & Character)": {
      "雰囲気・演出": [
        { ja: "キメポーズ（スタイリッシュ）", en: "stylish pose", links: ["Dynamic"] },
        { ja: "クールポーズ", en: "cool pose" },
        { ja: "可愛いポーズ", en: "cute pose" },
        { ja: "優雅ポーズ（エレガント）", en: "elegant pose" },
        { ja: "ヒーロー立ち", en: "hero pose", links: ["Low Angle", "Dynamic"] },
        { ja: "強キャラポーズ（バッドアス）", en: "badass pose", links: ["Confident"] }
      ],
      "性格・態度 (強気)": [
        { ja: "自信ポーズ", en: "confident pose" },
        { ja: "ドヤポーズ（傲慢）", en: "cocky pose", links: ["Smirk"] },
        { ja: "威圧ポーズ", en: "intimidating pose" },
        { ja: "支配的ポーズ", en: "dominant pose" },
        { ja: "攻撃的ポーズ", en: "aggressive pose" },
        { ja: "ツン寄りポーズ", en: "tsundere pose", links: ["Crossed Arms", "Looking Away"] }
      ],
      "性格・態度 (弱気/静)": [
        { ja: "照れポーズ", en: "shy pose", links: ["Blush"] },
        { ja: "従属/弱めポーズ", en: "submissive pose" },
        { ja: "防御ポーズ", en: "defensive pose" },
        { ja: "祈りポーズ", en: "prayer pose" }
      ]
    },
    "🤸 アクション・運動 (Action & Motion)": {
      "移動・跳躍": [
        { ja: "動きのあるポーズ", en: "dynamic pose" },
        { ja: "ダッシュ/走る", en: "sprinting" }, 
        { ja: "ジャンプポーズ", en: "jump pose" },
        { ja: "跳躍ポーズ（リープ）", en: "leap pose" },
        { ja: "空中ポーズ", en: "mid-air pose" },
        { ja: "着地ポーズ", en: "landing pose" },
        { ja: "スライドポーズ", en: "slide pose" },
        { ja: "よじ登りポーズ", en: "climbing pose" }
      ],
      "回転・柔軟・特殊": [
        { ja: "回転ポーズ", en: "spin pose" },
        { ja: "ひねりポーズ", en: "twist pose" },
        { ja: "アクロポーズ", en: "acrobatic pose" },
        { ja: "パルクールポーズ", en: "parkour pose" },
        { ja: "ダンスポーズ", en: "dance pose" },
        { ja: "ヨガポーズ", en: "yoga pose" },
        { ja: "伸びポーズ（ストレッチ）", en: "stretch pose" },
        { ja: "回避ポーズ", en: "dodge pose" }
      ]
    },
    "⚔️ 戦闘・格闘 (Combat & Battle)": {
      "基本アクション": [
        { ja: "戦闘態勢", en: "battle stance" }, 
        { ja: "攻撃ポーズ", en: "attack pose" },
        { ja: "打撃ポーズ", en: "strike pose" },
        { ja: "カンフーの構え", en: "kung fu stance" },
        { ja: "ボクシングの構え", en: "boxing stance" },
        { ja: "着地（スーパーヒーロー）", en: "superhero landing" }, 
        { ja: "タックル", en: "shoulder tackle" },
        { ja: "波動拳の構え（気功）", en: "kamehameha pose" }
      ],
      "パンチ・手技": [
        { ja: "パンチポーズ", en: "punch pose" }, 
        { ja: "ジャブ", en: "jab" },
        { ja: "ストレート", en: "straight punch" }, 
        { ja: "フック", en: "hook punch" }, 
        { ja: "アッパー", en: "uppercut" },
        { ja: "ボディブロー", en: "body blow" },
        { ja: "裏拳", en: "backfist" }, 
        { ja: "百裂拳（連打）", en: "rapid punches" },
        { ja: "昇竜拳（飛びアッパー）", en: "shoryuken" },
        { ja: "手刀（カラテチョップ）", en: "knifehand strike" },
        { ja: "掌底（パームストライク）", en: "palm strike" },
        { ja: "鉄槌（ハンマー）", en: "hammer fist" },
        { ja: "エルボー（肘打ち）", en: "elbow strike" },
        { ja: "頭突き（ヘッドバット）", en: "headbutt" },
        { ja: "クロスカウンター", en: "cross counter" }
      ],
      "キック・足技": [
        { ja: "キックポーズ", en: "kick pose" },
        { ja: "ローキック", en: "low kick" }, 
        { ja: "ミドルキック", en: "middle kick" },
        { ja: "ハイキック", en: "high kick", links: ["Battle Stance", "Dynamic"] },
        { ja: "前蹴り", en: "front kick" }, 
        { ja: "後ろ蹴り", en: "back kick" },
        { ja: "回し蹴り", en: "roundhouse kick", links: ["Battle Stance", "Spinning"] },
        { ja: "後ろ回し蹴り", en: "spinning back kick" },
        { ja: "踵落とし（アックスキック）", en: "axe kick" },
        { ja: "膝蹴り（ニーキック）", en: "knee strike" },
        { ja: "飛び膝蹴り", en: "flying knee" },
        { ja: "ドロップキック", en: "dropkick", links: ["Floating", "Dynamic"] },
        { ja: "サマーソルトキック", en: "somersault kick" },
        { ja: "後方宙返りキック", en: "backflip kick" },
        { ja: "竜巻旋風脚", en: "hurricane kick" },
        { ja: "空中回転蹴り", en: "spinning aerial kick" },
        { ja: "スライディング", en: "sliding kick" },
        { ja: "踏みつけ（ストンピング）", en: "stomping" }
      ],
      "武器 (実弾・冷兵器)": [
        { ja: "斬撃ポーズ", en: "slash pose" },
        { ja: "突きポーズ", en: "thrust pose" },
        { ja: "剣を構える", en: "holding sword" }, 
        { ja: "二刀流", en: "dual wielding" }, 
        { ja: "銃を構える", en: "aiming gun" },
        { ja: "乱射", en: "firing gun" }, 
        { ja: "リロード", en: "reloading" }
      ]
    },
    "❤️ 交流・ライトな感情 (Interaction)": {
      "仕草": [
        { ja: "ピース", en: "peace sign" }, 
        { ja: "指差し", en: "pointing" },
        { ja: "ハート", en: "making heart hands" }, 
        { ja: "敬礼", en: "salute" },
        { ja: "投げキッス", en: "blowing kiss" }, 
        { ja: "手を振る", en: "waving hand" }
      ],
      "ペア": [
        { ja: "手をつなぐ", en: "holding hands" }, 
        { ja: "ハグ", en: "hugging" },
        { ja: "お姫様抱っこ", en: "princess carry" }, 
        { ja: "壁ドン", en: "kabedon" },
        { ja: "背中合わせ", en: "back-to-back" }
      ]
    }
  };

  const API = {
    initUI(container) {
      if (window.__outputTranslation) {
        const dict = {};
        Object.values(POSE_DATA_BASIC).forEach(subCats => {
          Object.values(subCats).flat().forEach(item => {
            if (item.en && item.ja) {
              dict[item.en] = item.ja;
            }
          });
        });
        window.__outputTranslation.register(dict);

        // 依頼リストの翻訳補完
        window.__outputTranslation.register({
          "dynamic pose": "動きのあるポーズ",
          "stylish pose": "キメのポーズ",
          "hero pose": "ヒーロー立ち",
          "idle pose": "待機ポーズ",
          "relaxed pose": "脱力ポーズ",
          "casual pose": "日常ポーズ",
          "elegant pose": "優雅ポーズ",
          "cute pose": "可愛いポーズ",
          "cool pose": "クールポーズ",
          "badass pose": "強キャラポーズ",
          "tsundere pose": "ツン寄りポーズ",
          "shy pose": "照れポーズ",
          "confident pose": "自信ポーズ",
          "cocky pose": "ドヤポーズ",
          "intimidating pose": "威圧ポーズ",
          "dominant pose": "支配的ポーズ",
          "submissive pose": "従属/弱めポーズ",
          "defensive pose": "防御ポーズ",
          "aggressive pose": "攻撃的ポーズ",
          "attack pose": "攻撃ポーズ",
          "strike pose": "打撃ポーズ",
          "kick pose": "キックポーズ",
          "punch pose": "パンチポーズ",
          "slash pose": "斬撃ポーズ",
          "thrust pose": "突きポーズ",
          "dodge pose": "回避ポーズ",
          "leap pose": "跳躍ポーズ",
          "jump pose": "ジャンプポーズ",
          "mid-air pose": "空中ポーズ",
          "landing pose": "着地ポーズ",
          "slide pose": "スライドポーズ",
          "spin pose": "回転ポーズ",
          "twist pose": "ひねりポーズ",
          "crouch pose": "しゃがみポーズ",
          "kneeling pose": "片膝ポーズ",
          "sitting pose": "座りポーズ",
          "sleeping pose": "寝ポーズ",
          "stretch pose": "伸びポーズ",
          "yoga pose": "ヨガポーズ",
          "dance pose": "ダンスポーズ",
          "acrobatic pose": "アクロポーズ",
          "parkour pose": "パルクールポーズ",
          "climbing pose": "よじ登りポーズ",
          "prayer pose": "祈りポーズ",
          "thinking pose": "考えるポーズ"
        });
      }

      const parent = document.querySelector("#list-pose") || container;
      parent.innerHTML = "";
      
      const root = document.createElement("div");
      root.id = "pose-master-root"; 
      root.className = "pose-master-container";

      const h2 = document.createElement("h2");
      h2.textContent = "11. ポーズ・構図 (Pose Master)";
      parent.appendChild(h2);

      this.renderCategories(root, POSE_DATA_BASIC, "v1-basic");
      parent.appendChild(root);
      
      setTimeout(() => window.dispatchEvent(new Event("pose-v1-mounted")), 100);
    },

    renderCategories(root, data, prefix) {
      Object.entries(data).forEach(([mainCat, subCats], index) => {
        const mainDetails = document.createElement("details");
        mainDetails.className = "pose-master-acc";
        mainDetails.style.cssText = "border:1px solid #ccc; border-radius:5px; margin-bottom:8px; background:#fff;";
        
        const mainSummary = document.createElement("summary");
        mainSummary.innerHTML = mainCat;
        mainSummary.style.cssText = "padding:10px; font-weight:bold; cursor:pointer; background:#eef; border-radius:5px; list-style:none;";
        mainDetails.appendChild(mainSummary);

        const content = document.createElement("div");
        content.className = "pose-master-content";
        content.style.padding = "10px";

        Object.entries(subCats).forEach(([subCatName, items]) => {
          const subDetails = document.createElement("details");
          subDetails.style.cssText = "margin-bottom: 8px; border-left: 3px solid #ddd; padding-left: 10px;";
          
          const subSummary = document.createElement("summary");
          subSummary.textContent = subCatName;
          subSummary.style.cssText = "font-size:0.9em; font-weight:bold; color:#444; cursor:pointer; margin-bottom:5px; outline:none;";
          
          const grid = document.createElement("div");
          grid.style.cssText = "display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:5px; margin-top:5px;";

          items.forEach(item => {
            const label = document.createElement("label");
            label.style.cssText = "display:flex; align-items:center; font-size:0.8em; cursor:pointer; padding:2px 0;";
            const cb = document.createElement("input");
            cb.type = "checkbox";
            cb.dataset.en = item.en;
            cb.style.marginRight = "5px";
            if (item.links) cb.dataset.links = item.links.join(",");
            
            label.appendChild(cb);
            label.appendChild(document.createTextNode(item.ja));
            grid.appendChild(label);
            
            if (window.__outputTranslation && item.ja && item.en) {
               window.__outputTranslation.register({ [item.en]: item.ja });
            }
          });

          subDetails.appendChild(subSummary);
          subDetails.appendChild(grid);
          content.appendChild(subDetails);
        });

        mainDetails.appendChild(content);
        root.appendChild(mainDetails);
      });
    },

    getTags() {
      const tags = [];
      document.querySelectorAll("#pose-master-root input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__POSE_RENDERER = API.renderCategories;
  window.__registerPromptPart(KEY, VERSION, API);
})();

