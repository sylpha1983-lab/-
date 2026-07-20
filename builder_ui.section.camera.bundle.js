// Auto-generated bundle for section 'camera'
// Contains 3 versions. Runtime mounts registered versions in ascending order.

(function(){
// --- builder_ui.section.camera.v1.js ---
(function(){
  "use strict";

  const VERSION = 1;
  const KEY = "camera";

  const CATEGORIES = {
    "📏 ショットサイズ (Framing)": [
      { ja: "超クローズアップ (目元等)", en: "extreme close-up" },
      { ja: "クローズアップ (顔)", en: "close-up" },
      { ja: "ポートレート (顔〜肩)", en: "portrait" },
      { ja: "バストアップ (胸上)", en: "upper body" },
      { ja: "カウボーイショット (膝上)", en: "cowboy shot" },
      { ja: "全身 (フルショット)", en: "full body" },
      { ja: "ワイドショット (遠景)", en: "wide shot" },
      { ja: "超広角 (風景メイン)", en: "extreme wide shot" }
    ],
    "📐 カメラアングル (Angle)": [
      { ja: "正面から (フロント)", en: "front view" },
      { ja: "横顔 (プロフィール)", en: "profile" },
      { ja: "背後から (バック)", en: "from behind" },
      { ja: "サイドビュー (横)", en: "side view" },
      { ja: "ローアングル (煽り・威圧)", en: "low angle, from below" },
      { ja: "ワームズアイ (地面すれすれ)", en: "worm's eye view" },
      { ja: "ハイアングル (俯瞰・弱さ)", en: "high angle, from above" },
      { ja: "バードアイ (上空)", en: "bird's eye view" },
      { ja: "トップダウン (真上)", en: "overhead shot" },
      { ja: "ダッチアングル (斜め・不安)", en: "dutch angle" },
      { ja: "POV (主観視点)", en: "pov" },
      { ja: "自撮り (セルフィー)", en: "selfie" }
    ],
    "🔍 レンズ・画角 (Lens & Focal)": [
      { ja: "魚眼レンズ (歪み)", en: "fisheye lens" },
      { ja: "広角レンズ (パース強調)", en: "wide angle lens" },
      { ja: "望遠レンズ (圧縮効果)", en: "telephoto lens" },
      { ja: "マクロレンズ (接写)", en: "macro lens" },
      { ja: "35mm (標準・スナップ)", en: "35mm lens" },
      { ja: "50mm (見たまま)", en: "50mm lens" },
      { ja: "85mm (ポートレート)", en: "85mm lens" },
      { ja: "135mm (強い圧縮)", en: "135mm lens" },
      { ja: "パノラマ", en: "panorama" }
    ],
    "🎯 フォーカス・被写界深度 (Focus)": [
      { ja: "被写界深度 (背景ボケ)", en: "depth of field" },
      { ja: "ボケ (Bokeh)", en: "bokeh" },
      { ja: "背景ぼかし", en: "blurry background" },
      { ja: "前景ぼかし", en: "blurry foreground" },
      { ja: "パンフォーカス (全体)", en: "deep focus" },
      { ja: "シャープフォーカス", en: "sharp focus" },
      { ja: "ソフトフォーカス", en: "soft focus" },
      { ja: "モーションブラー (動き)", en: "motion blur" }
    ],
    "🖼️ 構図・コンポジション (Composition)": [
      { ja: "三分割法", en: "rule of thirds" },
      { ja: "シンメトリー (対称)", en: "symmetry" },
      { ja: "黄金比", en: "golden ratio" },
      { ja: "センタリング", en: "centered composition" },
      { ja: "対角線構図", en: "diagonal composition" },
      { ja: "フレーム・イン・フレーム", en: "framing" },
      { ja: "リーディングライン (視線誘導)", en: "leading lines" },
      { ja: "ネガティブスペース (余白)", en: "negative space" },
      { ja: "動的な構図", en: "dynamic composition" }
    ],
    "✨ カメラエフェクト (Effects)": [
      { ja: "レンズフレア", en: "lens flare" },
      { ja: "色収差 (ズレ)", en: "chromatic aberration" },
      { ja: "ビネット (四隅暗く)", en: "vignette" },
      { ja: "フィルムグレイン (粒子)", en: "film grain" },
      { ja: "光条 (回折スパイク)", en: "diffraction spikes" },
      { ja: "ハレーション", en: "halation" },
      { ja: "ブルーム (発光)", en: "bloom" },
      { ja: "露光オーバー", en: "overexposure" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-camera") || container;
      parent.innerHTML = "";
      
      const section = document.createElement("div");
      section.className = "camera-section";
      
      // ヘッダーデザイン
      const h = document.createElement("div");
      h.textContent = "📷 カメラ・レンズ (Camera/Lens)";
      h.style.fontWeight = "bold";
      h.style.color = "#004080";
      h.style.marginBottom = "8px";
      section.appendChild(h);

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.open = false; 
        details.style.marginBottom = "8px";
        details.style.border = "1px solid #cce5ff";
        details.style.borderRadius = "4px";
        
        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.cursor = "pointer";
        summary.style.fontWeight = "bold";
        summary.style.fontSize = "0.9em";
        summary.style.padding = "6px";
        summary.style.backgroundColor = "#f0f8ff";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.display = "flex";
        content.style.flexWrap = "wrap";
        content.style.gap = "6px";
        content.style.padding = "8px";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.fontSize = "0.85em";
          label.style.display = "flex";
          label.style.alignItems = "center";
          label.style.backgroundColor = "#fff"; 
          label.style.padding = "4px 8px";
          label.style.borderRadius = "4px";
          label.style.border = "1px solid #ddeeff";
          label.style.cursor = "pointer";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          cb.style.marginRight = "6px";
          
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
      document.querySelectorAll(".camera-section input:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();

// --- builder_ui.section.camera.v3.js ---
// v3: Cameraを撮影距離・角度・レンズ・焦点へ専念させ、Composition重複を整理。
(function(){
  "use strict";

  const VERSION = 3;
  const KEY = "camera";
  const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";
  let itemSerial = 0;

  const GROUPS = [
    { title:"📏 ショットサイズ・撮影距離", items:[
      { ja:"瞳の超接写", en:"extreme close-up on eyes" },
      { ja:"超クローズアップ", en:"extreme close-up" },
      { ja:"顔クローズアップ", en:"close-up" },
      { ja:"顔〜肩のポートレート", en:"portrait" },
      { ja:"バストアップ", en:"upper body" },
      { ja:"腰上のミディアムショット", en:"medium shot from the waist up" },
      { ja:"カウボーイショット", en:"cowboy shot" },
      { ja:"全身フルショット", en:"full body" },
      { ja:"ロングショット", en:"long shot" },
      { ja:"ワイドショット", en:"wide shot" },
      { ja:"超広角・風景主体", en:"extreme wide shot" }
    ]},
    { title:"📐 カメラ角度・向き", items:[
      { ja:"正面", en:"front view" },
      { ja:"斜め前・3/4ビュー", en:"three-quarter front view" },
      { ja:"真横・サイドビュー", en:"side view" },
      { ja:"横顔", en:"profile" },
      { ja:"斜め後ろ・3/4バック", en:"three-quarter back view" },
      { ja:"背後から", en:"from behind" },
      { ja:"肩越し", en:"over-the-shoulder shot" },
      { ja:"ローアングル", en:"low angle, from below" },
      { ja:"ワームズアイ", en:"worm's eye view" },
      { ja:"ハイアングル", en:"high angle, from above" },
      { ja:"バードアイ", en:"bird's eye view" },
      { ja:"真上・トップダウン", en:"overhead shot" },
      { ja:"地面すれすれ", en:"ground-level camera angle" },
      { ja:"ダッチアングル", en:"dutch angle" },
      { ja:"水平を厳密に保つ", en:"level camera horizon" },
      { ja:"見上げと奥行きを強調", en:"upward-looking perspective" }
    ]},
    { title:"🔍 レンズ・焦点距離", items:[
      { ja:"魚眼レンズ", en:"fisheye lens" },
      { ja:"超広角 14mm", en:"14mm ultra-wide lens" },
      { ja:"広角レンズ", en:"wide angle lens" },
      { ja:"広角 24mm", en:"24mm lens" },
      { ja:"準広角 28mm", en:"28mm lens" },
      { ja:"スナップ 35mm", en:"35mm lens" },
      { ja:"標準 50mm", en:"50mm lens" },
      { ja:"中望遠 85mm", en:"85mm lens" },
      { ja:"望遠 135mm", en:"135mm lens" },
      { ja:"望遠レンズ", en:"telephoto lens" },
      { ja:"超望遠 200mm", en:"200mm telephoto lens" },
      { ja:"マクロレンズ", en:"macro lens" },
      { ja:"ティルトシフト", en:"tilt-shift lens" },
      { ja:"アナモルフィック", en:"anamorphic lens" },
      { ja:"オルソグラフィック", en:"orthographic camera" },
      { ja:"望遠圧縮", en:"telephoto compression" },
      { ja:"広角パース強調", en:"exaggerated wide-angle perspective" },
      { ja:"パノラマ", en:"panorama" }
    ]},
    { title:"🎯 フォーカス・被写界深度", items:[
      { ja:"被写界深度", en:"depth of field" },
      { ja:"深い被写界深度", en:"deep depth of field" },
      { ja:"ボケ", en:"bokeh" },
      { ja:"背景ボケ", en:"blurry background" },
      { ja:"前景ボケ", en:"blurry foreground" },
      { ja:"前ボケ越しの主役", en:"subject seen through soft foreground bokeh" },
      { ja:"パンフォーカス", en:"deep focus" },
      { ja:"シャープフォーカス", en:"sharp focus" },
      { ja:"瞳へフォーカス", en:"focus on eyes" },
      { ja:"顔へフォーカス", en:"focus on face" },
      { ja:"選択フォーカス", en:"selective focus" },
      { ja:"ラックフォーカス風", en:"rack focus effect" },
      { ja:"ソフトフォーカス", en:"soft focus" },
      { ja:"モーションブラー", en:"motion blur" },
      { ja:"被写体追従ブラー", en:"panning motion blur" }
    ]},
    { title:"📽️ 撮影運動・シネマ視点", items:[
      { ja:"追跡ショット", en:"tracking shot" },
      { ja:"ドリーイン", en:"dolly-in shot" },
      { ja:"ドリーアウト", en:"dolly-out shot" },
      { ja:"ドリーズーム", en:"dolly zoom effect" },
      { ja:"旋回カメラ", en:"orbiting camera shot" },
      { ja:"クレーンショット", en:"crane shot" },
      { ja:"手持ちカメラ感", en:"handheld camera framing" },
      { ja:"走るカメラ", en:"running camera perspective" },
      { ja:"静止した観察カメラ", en:"locked-off camera shot" },
      { ja:"監視カメラ視点", en:"surveillance camera view" },
      { ja:"ドローン撮影", en:"drone camera shot" }
    ]},
    { title:"👁️ 特殊視点・画面越し", items:[
      { ja:"POV・主観視点", en:"pov" },
      { ja:"自撮り", en:"selfie" },
      { ja:"鏡越し", en:"mirror" },
      { ja:"窓越し", en:"view through glass" },
      { ja:"ドアの隙間から", en:"view through a partially open door" },
      { ja:"双眼鏡越し", en:"binocular view" },
      { ja:"スコープ越し", en:"scope view" },
      { ja:"スマートフォン画面越し", en:"view through a smartphone screen" },
      { ja:"水中カメラ", en:"underwater camera view" },
      { ja:"水面半分・スプリットショット", en:"split-level over-under water shot" },
      { ja:"車内カメラ", en:"camera view from inside a vehicle" }
    ]},
    { title:"✨ 光学・カメラエフェクト", items:[
      { ja:"レンズフレア", en:"lens flare" },
      { ja:"アナモルフィックフレア", en:"anamorphic lens flare" },
      { ja:"色収差", en:"chromatic aberration" },
      { ja:"ビネット", en:"vignette" },
      { ja:"フィルムグレイン", en:"film grain" },
      { ja:"回折光条", en:"diffraction spikes" },
      { ja:"ハレーション", en:"halation" },
      { ja:"ブルーム", en:"bloom" },
      { ja:"露光オーバー", en:"overexposure" },
      { ja:"露光アンダー", en:"underexposed shadows" },
      { ja:"光漏れ", en:"film light leak" },
      { ja:"レンズの雨粒", en:"raindrops on the camera lens" },
      { ja:"レンズの結露", en:"condensation on the camera lens" }
    ]},
    { title:"🧭 互換・演出連携（Body Focus / Pose / Expression）", note:"旧Camera棚にあった複合指定です。撮影機材そのものではありませんが、既存プリセット・履歴互換のため残しています。新規利用ではBody Focus／Pose／Expressionの各欄を優先してください。", items:[
      { ja:"胸にフォーカス（旧互換）", en:"focus on breasts" },
      { ja:"尻にフォーカス（旧互換）", en:"focus on ass" },
      { ja:"脚にフォーカス（旧互換）", en:"focus on legs" },
      { ja:"横たわる寝視点（旧互換）", en:"lying on back, pov" },
      { ja:"見下ろす冷ややかな視線（旧互換）", en:"looking down, scorn" },
      { ja:"三分割法（旧Camera互換）", en:"rule of thirds" },
      { ja:"対称構図（旧Camera互換）", en:"symmetry" },
      { ja:"黄金比（旧Camera互換）", en:"golden ratio" },
      { ja:"中央配置（旧Camera互換）", en:"centered composition" },
      { ja:"対角線構図（旧Camera互換）", en:"diagonal composition" },
      { ja:"フレーミング（旧Camera互換）", en:"framing" },
      { ja:"視線誘導線（旧Camera互換）", en:"leading lines" },
      { ja:"ネガティブスペース（旧Camera互換）", en:"negative space" },
      { ja:"動的構図（旧Camera互換）", en:"dynamic composition" }
    ]}
  ];

  const SECRET_GROUPS = [
    { title:"🔞 性的POV・内部視点", items:[
      { ja:"フェラチオ視点", en:"pov, fellatio" },
      { ja:"セックス視点", en:"pov, sex" },
      { ja:"騎乗位視点", en:"pov, cowgirl position" },
      { ja:"内部視点", en:"internal view" },
      { ja:"断面図・X-Ray", en:"cross section, x-ray" },
      { ja:"子宮口", en:"cervix" }
    ]},
    { title:"🔞 フェティッシュアングル", items:[
      { ja:"パンチラ・ローアングル", en:"low angle, pantyshot" },
      { ja:"股下からの視点", en:"view between legs" },
      { ja:"股間にフォーカス", en:"focus on crotch" },
      { ja:"足裏・踏みつけ視点", en:"pov, trampling" },
      { ja:"スカートの中", en:"upskirt" }
    ]}
  ];

  function ensureStyle(){
    if(document.getElementById("camera-v3-style")) return;
    const st = document.createElement("style");
    st.id = "camera-v3-style";
    st.textContent = `
      .camera-section.camera-v3-root{display:block;width:100%;box-sizing:border-box}
      .camera-v3-head{font-weight:900;color:#174d7a;margin:0 0 6px}
      .camera-v3-guide,.camera-v3-note{font-size:12px;line-height:1.55;color:#526274;background:#f4f9ff;border:1px solid #d8e8f7;border-radius:8px;padding:8px 10px;margin-bottom:8px}
      .camera-v3-shelf{margin:0 0 7px;border:1px solid #cfe0ef;border-radius:7px;background:#fff;overflow:hidden}
      .camera-v3-shelf>summary{font-size:13px;font-weight:800;padding:8px 10px;cursor:pointer;background:#f6fbff}
      .camera-v3-secret{border-color:#efb7c0}.camera-v3-secret>summary{background:#fff1f3;color:#a61e35}
      .camera-v3-grid{display:flex!important;flex-wrap:wrap!important;gap:6px!important;padding:8px!important;width:100%;box-sizing:border-box;grid-template-columns:none!important}
      .camera-v3-note{flex:1 1 100%;margin:0;background:#fffaf0;border-color:#f0d9aa;color:#705323}
      .camera-v3-row{display:flex;align-items:flex-start;gap:6px;flex:1 1 220px;min-width:0;background:#fff;border:1px solid #e1eaf2;border-radius:6px;padding:6px 8px;font-size:12px;line-height:1.35;box-sizing:border-box}
      .camera-v3-row input{margin-top:2px;flex:0 0 auto}.camera-v3-row span{overflow-wrap:anywhere}
      @media(max-width:640px){.camera-v3-row{flex:1 1 100%;width:100%}.camera-v3-grid{display:flex!important;flex-direction:column!important}}
    `;
    document.head.appendChild(st);
  }

  function makeShelf(group, secret){
    const d = document.createElement("details");
    d.className = "camera-v3-shelf" + (secret ? " camera-v3-secret" : "");
    d.open = false;
    const s = document.createElement("summary");
    s.textContent = group.title;
    d.appendChild(s);
    const box = document.createElement("div");
    box.className = "camera-v3-grid";
    if(group.note){
      const note = document.createElement("div");
      note.className = "camera-v3-note";
      note.textContent = group.note;
      box.appendChild(note);
    }
    group.items.forEach(function(item, index){
      const label = document.createElement("label");
      label.className = "camera-v3-row";
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.id = "camera_v3_" + (++itemSerial);
      cb.dataset.en = item.en;
      const text = document.createElement("span");
      text.textContent = item.ja + " / " + item.en;
      label.appendChild(cb);
      label.appendChild(text);
      box.appendChild(label);
    });
    d.appendChild(box);
    return d;
  }

  const API = {
    initUI(container){
      const parent = document.querySelector("#list-camera") || container;
      if(!parent) return;
      ensureStyle();
      parent.innerHTML = "";
      const root = document.createElement("div");
      root.className = "camera-section camera-v3-root";
      const head = document.createElement("div");
      head.className = "camera-v3-head";
      head.textContent = "📷 カメラ司令室 (Camera Control)";
      const guide = document.createElement("div");
      guide.className = "camera-v3-guide";
      guide.textContent = "Cameraは撮影距離・角度・レンズ・焦点を担当します。三分割法、人物配置、余白、奥行き設計は直前のComposition欄へ整理しました。全棚は閉じた状態から始まります。";
      root.appendChild(head);
      root.appendChild(guide);
      GROUPS.forEach(function(group){ root.appendChild(makeShelf(group, false)); });
      if(IS_UNLOCKED) SECRET_GROUPS.forEach(function(group){ root.appendChild(makeShelf(group, true)); });
      parent.appendChild(root);

      if(window.__outputTranslation){
        const dict = {};
        GROUPS.concat(SECRET_GROUPS).forEach(function(g){ g.items.forEach(function(i){ dict[i.en] = i.ja; }); });
        window.__outputTranslation.register(dict);
      }
    },
    // v1 getTagsが .camera-section 内の現行チェックを取得するため、二重出力を避ける。
    getTags(){ return []; }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

(function(){
// --- builder_ui.section.camera.v2.js ---
(function(){
  "use strict";

  const VERSION = 2; 
  const KEY = "camera";
  const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  // ✅ 通常表示：特殊視点・フォーカス (Focus & POV)
  const EXTENDED_CATEGORIES = {
    "📷 特殊視点・フォーカス (Focus & POV)": [
      { ja: "POV (主観視点)", en: "pov" },
      { ja: "自撮り (セルフィー)", en: "selfie" },
      { ja: "鏡越し", en: "mirror" },
      { ja: "胸にフォーカス", en: "focus on breasts" },
      { ja: "尻にフォーカス", en: "focus on ass" },
      { ja: "顔にフォーカス", en: "focus on face" },
      { ja: "目・表情にフォーカス", en: "focus on eyes" },
      { ja: "足にフォーカス", en: "focus on legs" },
      { ja: "横たわる (寝視点)", en: "lying on back, pov" },
      { ja: "見下ろす (冷ややかな視線)", en: "looking down, scorn" }
    ]
  };

  // 🔞 シークレット表示：R-18 視点・アングル (Adult Angles)
  const SECRET_CATEGORIES = {
    "🔞 性行為・内部視点 (Sex POV)": [
      { ja: "フェラチオ視点", en: "pov, fellatio" },
      { ja: "セックス視点", en: "pov, sex" },
      { ja: "騎乗位視点", en: "pov, cowgirl position" },
      { ja: "内部視点 (膣内)", en: "internal view" },
      { ja: "断面図 (X-Ray)", en: "cross section, x-ray" },
      { ja: "子宮口", en: "cervix" }
    ],
    "📐 恥辱・ローアングル (Fetish Angle)": [
      { ja: "ローアングル (パンチラ)", en: "low angle, pantyshot" },
      { ja: "股下からの視点", en: "view between legs" },
      { ja: "股間にフォーカス", en: "focus on crotch" },
      { ja: "足裏・踏みつけ視点", en: "pov, trampling" },
      { ja: "スカートの中", en: "upskirt" }
    ]
  };

  const API = {
    initUI(container) {
      const section = container.querySelector(".camera-section") || document.createElement("div");
      if (!section.className) {
        section.className = "camera-section";
        const h = document.createElement("div");
        h.textContent = "📷 カメラ・レンズ (Camera/Lens)";
        h.style.fontWeight = "bold"; h.style.color = "#004080"; h.style.marginBottom = "8px";
        section.appendChild(h);
        container.appendChild(section);
      }

      // 通常カテゴリ
      Object.entries(EXTENDED_CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.open = false; 
        details.style.marginBottom = "8px";
        details.style.border = "1px solid #cce5ff"; // 青枠
        details.style.borderRadius = "4px";
        
        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.cursor = "pointer";
        summary.style.fontWeight = "bold";
        summary.style.fontSize = "0.9em";
        summary.style.padding = "6px";
        summary.style.backgroundColor = "#f0f8ff";
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.display = "flex";
        content.style.flexWrap = "wrap";
        content.style.gap = "6px";
        content.style.padding = "8px";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.fontSize = "0.85em";
          label.style.display = "flex";
          label.style.alignItems = "center";
          label.style.backgroundColor = "#fff"; 
          label.style.padding = "4px 8px";
          label.style.borderRadius = "4px";
          label.style.border = "1px solid #ddeeff";
          label.style.cursor = "pointer";
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          cb.style.marginRight = "6px";
          
          label.appendChild(cb);
          label.appendChild(document.createTextNode(item.ja));
          content.appendChild(label);
        });
        details.appendChild(content);
        section.appendChild(details);
      });

      // シークレットカテゴリ
      if (IS_UNLOCKED) {
        Object.entries(SECRET_CATEGORIES).forEach(([cat, items]) => {
          const details = document.createElement("details");
          details.open = false; 
          details.style.marginBottom = "8px";
          details.style.border = "1px solid #ffcccc";
          details.style.borderRadius = "4px";
          
          const summary = document.createElement("summary");
          summary.innerHTML = `${cat}`;
          summary.style.cursor = "pointer";
          summary.style.fontWeight = "bold";
          summary.style.fontSize = "0.9em";
          summary.style.padding = "6px";
          summary.style.backgroundColor = "#fff0f0";
          summary.style.color = "#d00";
          details.appendChild(summary);

          const content = document.createElement("div");
          content.style.display = "flex";
          content.style.flexWrap = "wrap";
          content.style.gap = "6px";
          content.style.padding = "8px";

          items.forEach(item => {
            const label = document.createElement("label");
            label.style.fontSize = "0.85em";
            label.style.display = "flex";
            label.style.alignItems = "center";
            label.style.backgroundColor = "#fff"; 
            label.style.padding = "4px 8px";
            label.style.borderRadius = "4px";
            label.style.border = "1px solid #ffcccc";
            label.style.cursor = "pointer";
            
            const cb = document.createElement("input");
            cb.type = "checkbox";
            cb.dataset.en = item.en;
            cb.style.marginRight = "6px";
            
            label.appendChild(cb);
            label.appendChild(document.createTextNode(item.ja));
            content.appendChild(label);
          });
          details.appendChild(content);
          section.appendChild(details);
        });
      }

      if (window.__outputTranslation) {
        const dict = {};
        [...Object.values(EXTENDED_CATEGORIES), ...Object.values(SECRET_CATEGORIES)].flat().forEach(i => dict[i.en] = i.ja);
        window.__outputTranslation.register(dict);
      }
    },
    getTags() { return []; }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

})();
