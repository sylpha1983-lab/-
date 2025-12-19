(function(){
  "use strict";

  const VERSION = 2; // Enhanced Aura & Effect
  const KEY = "effect";

  const CATEGORIES = {
    "🔥 オーラ・気 (Aura & Energy)": [
      { ja: "オーラ (基本)", en: "aura" },
      { ja: "エネルギーオーラ", en: "energy aura" },
      { ja: "霊的オーラ", en: "spiritual aura" },
      { ja: "力のオーラ", en: "power aura" },
      { ja: "気のオーラ", en: "ki aura" },
      { ja: "聖なるオーラ", en: "holy aura" },
      { ja: "神性の輝き", en: "divine radiance" },
      { ja: "闇のオーラ", en: "dark aura" },
      { ja: "影のオーラ", en: "shadow aura" },
      { ja: "不穏なオーラ", en: "ominous aura" },
      { ja: "呪いのオーラ", en: "cursed aura" },
      { ja: "炎のオーラ", en: "flame aura" },
      { ja: "煙っぽいオーラ", en: "smoky aura" },
      { ja: "脈動するオーラ", en: "pulsing aura" },
      { ja: "震えるオーラ", en: "vibrating aura" },
      { ja: "輪郭発光", en: "glowing outline" },
      { ja: "縁の光", en: "rim glow" },
      { ja: "逆光オーラ", en: "backlit aura" },
      { ja: "ハロー光", en: "halo glow" }
    ],
    "⚡ スパーク・粒子 (Sparks & Particles)": [
      { ja: "火花オーラ", en: "aura sparks" },
      { ja: "エネルギー火花", en: "energy sparks" },
      { ja: "電撃オーラ", en: "electric aura" },
      { ja: "静電気", en: "static electricity" },
      { ja: "稲妻アーク", en: "lightning arcs" },
      { ja: "電気アーク", en: "electric arcs" },
      { ja: "バリバリしたエネルギー", en: "crackling energy" },
      { ja: "プラズマオーラ", en: "plasma aura" },
      { ja: "粒子オーラ", en: "particle aura" },
      { ja: "エネルギー粒子", en: "energy particles" },
      { ja: "きらめく粒", en: "glittering particles" },
      { ja: "漂う微粒子", en: "floating motes" },
      { ja: "火の粉", en: "embers" },
      { ja: "オーラの霧", en: "aura mist" },
      { ja: "エネルギーの霧", en: "energy mist" }
    ],
    "🌀 波動・リング (Waves & Rings)": [
      { ja: "エネルギー波", en: "energy waves" },
      { ja: "衝撃波オーラ", en: "shockwave aura" },
      { ja: "オーラの波", en: "aura waves" },
      { ja: "放射するエネルギー", en: "radiating energy" },
      { ja: "同心円リング", en: "concentric rings" },
      { ja: "エネルギーリング", en: "energy rings" },
      { ja: "衝撃波リング", en: "shockwave rings" },
      { ja: "波動リング", en: "wave rings" },
      { ja: "放射状の波", en: "radial waves" },
      { ja: "空気の波紋", en: "ripples in air" },
      { ja: "歪み波", en: "distortion waves" },
      { ja: "エネルギー歪み", en: "energy distortion" },
      { ja: "空気の歪み (陽炎)", en: "air distortion, heat haze" }
    ],
    "🌪️ 渦・バリア (Swirl & Barrier)": [
      { ja: "渦巻くオーラ", en: "swirling aura" },
      { ja: "螺旋エネルギー", en: "spiraling energy" },
      { ja: "エネルギー渦", en: "energy vortex" },
      { ja: "風の渦", en: "wind swirl" },
      { ja: "風の軌跡", en: "gust trails" },
      { ja: "フォースフィールド", en: "force field" },
      { ja: "エネルギーシールド", en: "energy shield" },
      { ja: "オーラバリア", en: "aura barrier" },
      { ja: "防護オーラ", en: "protective aura" }
    ],
    "💨 演出・漫画効果 (Anime Effects)": [
      { ja: "スピード線", en: "speed lines" },
      { ja: "集中線", en: "radial speed lines" },
      { ja: "衝撃線", en: "impact lines" },
      { ja: "ダイナミック線", en: "dynamic lines" },
      { ja: "漫画エフェクト", en: "manga effects" },
      { ja: "アニメ演出", en: "anime effects" },
      { ja: "モーションストリーク", en: "motion streaks" }
    ],
    "🔯 魔法陣・シンボル (Symbols)": [
      { ja: "チャクラ発光", en: "chakra glow" },
      { ja: "魔法陣発光", en: "sigil glow" },
      { ja: "魔法陣オーラ", en: "magic circle aura" },
      { ja: "ルーン浮遊", en: "runes floating" },
      { ja: "エネルギー文字", en: "energy glyphs" },
      { ja: "鬼火", en: "spirit flames" },
      { ja: "ウィスプ (光球)", en: "will-o'-the-wisp" }
    ]
  };

  const API = {
    initUI(container) {
      const section = container.querySelector(".effect-section") || document.createElement("div");
      if (!section.className) {
        section.className = "effect-section";
        const h = document.createElement("div");
        h.textContent = "✨ エフェクト・演出 (Effects)";
        h.style.fontWeight = "bold"; h.style.color = "#8e44ad"; h.style.marginBottom = "8px";
        section.appendChild(h);
        container.appendChild(section);
      }

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.open = false; 
        details.style.marginBottom = "8px";
        details.style.border = "1px solid #d0e0ff"; // 拡張版は少し青みを入れる
        details.style.borderRadius = "4px";
        
        const summary = document.createElement("summary");
        summary.innerHTML = `${cat} <span style="font-size:0.8em; color:#0056b3;">(Ex)</span>`;
        summary.style.cursor = "pointer";
        summary.style.fontSize = "0.9em";
        summary.style.fontWeight = "bold";
        summary.style.padding = "6px";
        summary.style.backgroundColor = "#f0f8ff";
        summary.style.color = "#004080";
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
          label.style.border = "1px solid #d0d0f0";
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

      if (window.__outputTranslation) {
        const dict = {};
        Object.values(CATEGORIES).flat().forEach(i => dict[i.en] = i.ja);
        window.__outputTranslation.register(dict);
      }
    },
    getTags() {
      // v1が全inputを拾うため空配列を返す
      return [];
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
