(function(){
  "use strict";
  const VERSION = 17; // 拡張パックR (R-18/NSFW特化・純化版)
  const KEY = "attire";

  const ATTIRE_DATA = {
    "🔞 完全露出・裸 (Nude & Naked)": [
      { ja: "全裸 (Nude)", en: "nude" },
      { ja: "トップレス", en: "topless" },
      { ja: "ボトムレス (下履いてない)", en: "bottomless" },
      { ja: "ニプレスのみ", en: "pasties only" },
      { ja: "前貼り (C-string)", en: "c-string" },
      { ja: "手ブラ", en: "hand bra" }
    ],
    "👙 裸＋α (Naked + X)": [
      { ja: "裸エプロン", en: "naked apron" },
      { ja: "裸リボン", en: "naked ribbon" },
      { ja: "裸ワイシャツ", en: "naked shirt" },
      { ja: "裸パーカー", en: "naked hoodie" },
      { ja: "スケスケレインコート (中身裸)", en: "transparent raincoat, naked under raincoat" },
      { ja: "テープ拘束服", en: "tape outfit, electrical tape covering nipples" },
      { ja: "リボンマミー (包帯)", en: "ribbon mummy, ribbon bondage" },
      { ja: "ボディペイント衣装", en: "body paint outfit, painted clothes" }
    ],
    "⛓️ ボンテージ・拘束 (Bondage & Fetish)": [
      { ja: "ボンテージ衣装", en: "bondage outfit" },
      { ja: "ラバースーツ", en: "latex suit" },
      { ja: "真空スーツ", en: "vacuum suit, vacuum sealed" },
      { ja: "拘束具 (ハーネス)", en: "harness" },
      { ja: "首輪と鎖", en: "collar and chain" },
      { ja: "猿轡 (ボールギャグ)", en: "ball gag" },
      { ja: "目隠し", en: "blindfold" },
      { ja: "手錠", en: "handcuffs" },
      { ja: "緊縛 (ロープ)", en: "shibari, rope bondage" }
    ],
    "📐 露出・特殊加工 (Extreme Cutout)": [
      { ja: "マイクロビキニ", en: "micro bikini" },
      { ja: "スリングショット (V字)", en: "slingshot swimsuit" },
      { ja: "穴あき下着", en: "crotchless panties" },
      { ja: "穴あきブラ", en: "open bra" },
      { ja: "股間ジッパー", en: "zipper crotch" },
      { ja: "乳首透け", en: "nipples visible through clothes" },
      { ja: "透け透けの服", en: "transparent clothes" },
      { ja: "食い込み (キャメル)", en: "cameltoe" },
      { ja: "お尻の食い込み", en: "wedgie" }
    ],
    "💦 汚濁・液体・異形 (Messy & Monster)": [
      { ja: "精液まみれの服", en: "bukkake on clothes, cum on clothes" },
      { ja: "白濁液まみれ", en: "covered in white liquid" },
      { ja: "スライム服", en: "slime clothes" },
      { ja: "触手服", en: "tentacle suit" },
      { ja: "溶けた服", en: "melting clothes" },
      { ja: "破れたストッキング", en: "torn pantyhose" }
    ]
  };

  const DICT = {
    "nude": "全裸", "topless": "トップレス", "bottomless": "ボトムレス", "pasties only": "ニプレスのみ",
    "c-string": "前貼り", "hand bra": "手ブラ", "naked apron": "裸エプロン", "naked ribbon": "裸リボン",
    "naked shirt": "裸Yシャツ", "naked hoodie": "裸パーカー", "transparent raincoat": "スケスケ合羽",
    "tape outfit": "テープ拘束服", "ribbon mummy": "リボンマミー", "body paint outfit": "ボディペイント衣装",
    "bondage outfit": "ボンテージ", "latex suit": "ラバースーツ", "vacuum suit": "真空スーツ",
    "harness": "ハーネス", "collar and chain": "首輪と鎖", "ball gag": "猿轡", "blindfold": "目隠し",
    "handcuffs": "手錠", "shibari": "緊縛", "micro bikini": "マイクロビキニ", "slingshot swimsuit": "スリングショット",
    "crotchless panties": "穴あきパンツ", "open bra": "穴あきブラ", "zipper crotch": "股間ジッパー",
    "nipples visible through clothes": "乳首透け", "transparent clothes": "透け服", "cameltoe": "食い込み(前)", "wedgie": "食い込み(後)",
    "bukkake on clothes": "服に精液", "slime clothes": "スライム服", "tentacle suit": "触手服", "melting clothes": "溶けた服"
  };

  const API = {
    initUI(container) {
      // 🛑 R-18ロック判定: 解放されていなければここで終了（表示しない）
      const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";
      if (!IS_UNLOCKED) return;

      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      let parent = document.querySelector("#list-attire");
      if (!parent) return;

      const createCat = (title, items) => {
        const details = document.createElement("details");
        details.className = "attire-cat attire-r18";
        details.style.cssText = "margin-bottom:6px; border:1px solid #ffcccc; border-radius:4px; background:#fff;";
        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cssText = "font-weight:bold; padding:6px 10px; cursor:pointer; background:#ffeeee; color:#d00;";
        details.appendChild(summary);
        const content = document.createElement("div");
        content.style.cssText = "padding:8px; display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:6px;";
        items.forEach(item => {
          const label = document.createElement("label");
          label.style.cssText = "display:flex; align-items:center; font-size:0.9em; cursor:pointer;";
          const cb = document.createElement("input");
          cb.type = "checkbox"; cb.dataset.en = item.en; cb.style.marginRight = "6px";
          label.appendChild(cb); label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
          content.appendChild(label);
        });
        details.appendChild(content);
        return details;
      };

      const root = document.createElement("div");
      root.className = "attire-v17-container";
      const sep = document.createElement("div");
      sep.style.cssText = "margin:15px 0 10px 0; border-top:2px solid #d00; text-align:center; color:#d00; font-size:0.9em; font-weight:bold;";
      sep.textContent = "⚠️ R-18 / NSFW (Adult Only) ⚠️";
      root.appendChild(sep);
      Object.entries(ATTIRE_DATA).forEach(([cat, items]) => root.appendChild(createCat(cat, items)));
      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.appendChild(root);
    },
    getTags() {
      // UIが存在しない場合（ロック中）は空配列を返すため安全
      const tags = [];
      document.querySelectorAll(".attire-v17-container input:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

