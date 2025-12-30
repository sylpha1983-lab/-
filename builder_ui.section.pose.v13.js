(function(){
  "use strict";
  const VERSION = 13; // 拡張パックS (R-18ポーズ・Fixed Safe Version)
  
  // 🔑 【修正1】キー名を変更して v1(pose) との競合・上書きを回避
  const KEY = "pose"; 
  const IS_R18_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  // データ構造は v1 のレンダラーが解釈できる 2階層構造 { 大カテ: { 小カテ: [] } } を維持
  const POSE_DATA_R18 = {
    "🔞 恥辱・露出ポーズ (Exposed & Shame)": {
      "開脚・露出": [
        { ja: "M字開脚", en: "m-shaped posture, legs spread wide, knees raised" },
        { ja: "大股開き", en: "legs spread, spread legs, open legs" },
        { ja: "マンすじ見せつけ", en: "presenting pussy, spread legs, grabbing own legs" },
        { ja: "お尻突き出し (バック)", en: "bent over, presenting ass, doggystyle pose, arched back" }
      ],
      "チラリズム・屈辱": [
        { ja: "スカート捲り上げ", en: "skirt lifted, holding skirt up, exposing panties" },
        { ja: "くぱぁ (手で広げる)", en: "spreading pussy, fingers spreading pussy" },
        { ja: "胸見せ (たくし上げ)", en: "lifting shirt, showing breasts, arms up" },
        { ja: "四つん地べた (土下座)", en: "on all fours, head down, submission pose" }
      ]
    },
    "⛓️ 拘束・無力化 (Bound & Helpless)": {
      "ロープ・物理": [
        { ja: "後ろ手拘束", en: "arms tied behind back, hands bound behind back" },
        { ja: "吊り下げ (サスペンション)", en: "suspension, hanging, arms tied up" },
        { ja: "腕を頭の後ろで拘束", en: "arms tied behind head" },
        { ja: "海老反り拘束", en: "hogtie, arched back, bound wrists and ankles" },
        { ja: "椅子に縛られる", en: "tied to chair, struggling" },
        { ja: "壁に張り付け", en: "pinned to wall, crucified pose" }
      ],
      "触手・異形": [
        { ja: "触手拘束 (全身)", en: "tentacle restraint, bound by tentacles, suspended by tentacles" },
        { ja: "スライム拘束 (埋没)", en: "stuck in slime, sinking in slime, unable to move" }
      ]
    },
    "🪟 密着・圧迫シチュエーション (Pressed & Compressed)": {
      "ガラス・壁": [
        { ja: "ガラス押し付け (全身)", en: "pressed against glass, flattened breasts" },
        { ja: "顔面プレス (窓)", en: "face pressed against glass, face smeared, open mouth" },
        { ja: "お尻押し付け", en: "butt pressed against glass, spread ass" },
        { ja: "床に押し付けられる", en: "pinned to floor, pinned down" },
        { ja: "壁ドン (受け)", en: "pinned against wall, back to wall" },
        { ja: "股間押し付け (グラインド)", en: "grinding crotch, pressing hips" }
      ]
    },
    "🤪 絶頂・限界反応 (Climax & Body)": {
      "絶頂アクション": [
        { ja: "背中を反らす (イキ顔)", en: "arched back, head back, mouth open" },
        { ja: "足の指を丸める", en: "curling toes, foot spasm" },
        { ja: "痙攣・ビクビク", en: "body spasms, trembling, shaking" },
        { ja: "シーツを掴む", en: "grabbing sheets, clenching hands" },
        { ja: "白目・アヘ顔", en: "rolling eyes, ahegao, tongue out" },
        { ja: "ダブルピース (絶頂)", en: "double peace sign, ahegao" },
        { ja: "脱力・ぐったり", en: "limp body, exhausted, lying on back, after sex" }
      ]
    }
  };

  const DICT = {
    "m-shaped posture": "M字開脚", "legs spread wide": "大股開き", "presenting pussy": "秘部見せ",
    "bent over": "前屈(バック)", "presenting ass": "お尻見せ", "skirt lifted": "スカート捲り",
    "spreading pussy": "くぱぁ", "lifting shirt": "服たくし上げ", "arms tied behind back": "後ろ手拘束",
    "suspension": "吊り下げ", "arms tied behind head": "頭後ろ拘束", "hogtie": "海老反り拘束",
    "tied to chair": "椅子拘束", "pinned to wall": "張り付け", "tentacle restraint": "触手拘束",
    "stuck in slime": "スライム拘束", "pressed against glass": "ガラス押し付け", "face pressed against glass": "顔面プレス",
    "butt pressed against glass": "お尻プレス", "pinned to floor": "床ドン(受)", "pinned against wall": "壁ドン(受)",
    "grinding crotch": "股間押し付け", "curling toes": "足指カール", "body spasms": "痙攣",
    "grabbing sheets": "シーツを掴む", "rolling eyes": "白目", "double peace sign": "ダブルピース",
    "limp body": "脱力"
  };

  const API = {
    initUI(container) {
      // R-18ロック時は何もしない
      if (!IS_R18_UNLOCKED) return; 
      
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);

      // 【修正2】マウント処理を安全化
      // v1のレンダラーとルート要素が準備できるまで待機する
      const mount = () => {
        const root = document.getElementById("pose-master-root");
        const renderer = window.__POSE_RENDERER;
        
        // まだ準備できていなければリトライ (100ms後)
        if (!root || typeof renderer !== "function") { 
          setTimeout(mount, 100); 
          return; 
        }
        
        // 重複防止
        if (document.getElementById("pose-v13-separator")) return;

        // セパレーター追加
        const separator = document.createElement("div");
        separator.id = "pose-v13-separator";
        separator.style.cssText = "margin: 20px 0 10px 0; border-top: 2px dashed #d00; text-align: center;";
        separator.innerHTML = "<span style='background:#fff0f0; padding:0 10px; color:#d00; font-weight:bold; font-size:0.9em; display:inline-block; transform:translateY(-12px);'>▼ R-18 POSES (v13 Fetish)</span>";
        root.appendChild(separator);

        // レンダラー呼び出し
        // データ構造は v1 のレンダラーが期待する {大: {小: []}} になっているのでそのまま渡す
        renderer(root, POSE_DATA_R18, "v13-r18");
      };

      // 実行開始
      mount();
    },

    getTags() {
      const tags = [];
      const root = document.getElementById("pose-master-root");
      if(root) {
        // v13専用のクラス名 (v13-r18) がレンダラーによって付与されるため、そこから取得
        root.querySelectorAll(".pose-group-v13-r18 input[type='checkbox']:checked").forEach(cb => {
          tags.push(cb.dataset.en);
        });
      }
      return tags;
    }
  };

  // 【修正1の反映】登録キーを 'pose_r18' として登録
  window.__registerPromptPart(KEY, VERSION, API);
})();

