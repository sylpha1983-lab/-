(function(){
  "use strict";
  const VERSION = 3; // ファンタジー・民族衣装・スタイル (大幅増量版)
  const KEY = "attire";

  const CATEGORIES = {
    "⚔️ ファンタジー・RPGジョブ (Fantasy Class)": [
      { ja: "プレートアーマー (重装)", en: "plate armor" },
      { ja: "チェインメイル (鎖帷子)", en: "chainmail armor" },
      { ja: "レザーアーマー (軽装)", en: "leather armor" },
      { ja: "ビキニアーマー", en: "bikini armor" },
      { ja: "聖騎士 (パラディン)", en: "paladin armor" },
      { ja: "蛮族 (バーバリアン)", en: "barbarian clothes, fur trim" },
      { ja: "修道士 (モンク)", en: "monk robe" },
      { ja: "魔法使い (ローブ)", en: "wizard robe" },
      { ja: "司祭/クレリック", en: "cleric vestments" },
      { ja: "ドルイド (自然)", en: "druid clothes, leaf pattern" },
      { ja: "盗賊/ローグ", en: "thief clothes, hood" },
      { ja: "吟遊詩人 (バード)", en: "bard clothes" },
      { ja: "踊り子 (ダンサー)", en: "dancer outfit, belly dancer" },
      { ja: "死霊術師 (ネクロ)", en: "necromancer robe, skull accessories" }
    ],
    "🌏 世界の民族衣装 (World Traditional)": [
      { ja: "チャイナドレス (旗袍)", en: "cheongsam" },
      { ja: "漢服 (中国古典)", en: "hanfu" },
      { ja: "アオザイ (ベトナム)", en: "ao dai" },
      { ja: "チマチョゴリ (韓国)", en: "hanbok" },
      { ja: "サリー (インド)", en: "sari" },
      { ja: "ディアンドル (ドイツ)", en: "dirndl" },
      { ja: "レーダーホーゼン", en: "lederhosen" },
      { ja: "キルト (スコットランド)", en: "kilt" },
      { ja: "フラメンコドレス", en: "flamenco dress" },
      { ja: "マタドール (闘牛士)", en: "matador costume" },
      { ja: "カフタン (中東)", en: "kaftan" },
      { ja: "ネイティブアメリカン", en: "native american regalia" },
      { ja: "フラダンス衣装", en: "hula outfit" }
    ],
    "👘 日本の伝統衣装 (Japanese Traditional)": [
      { ja: "着物 (基本)", en: "kimono" },
      { ja: "振袖", en: "furisode" },
      { ja: "留袖", en: "tomesode" },
      { ja: "白無垢 (花嫁)", en: "shiromuku" },
      { ja: "色打掛", en: "uchikake" },
      { ja: "浴衣", en: "yukata" },
      { ja: "袴 (ハカマ)", en: "hakama" },
      { ja: "巫女服", en: "miko attire" }, // v2にもあるがセットとして重要なので維持
      { ja: "忍者装束", en: "ninja suit" },
      { ja: "侍 (着流し)", en: "samurai clothes" },
      { ja: "法被 (ハッピ)", en: "happi coat" }
    ],
    "🕶️ ファッションスタイル (Fashion Styles)": [
      { ja: "ゴシック (Goth)", en: "gothic fashion" },
      { ja: "パンク (Punk)", en: "punk fashion" },
      { ja: "グランジ (Grunge)", en: "grunge fashion" },
      { ja: "サイバーパンク", en: "cyberpunk attire" },
      { ja: "スチームパンク", en: "steampunk attire" },
      { ja: "テックウェア", en: "techwear" },
      { ja: "プレッピー (優等生)", en: "preppy style" },
      { ja: "ボヘミアン", en: "bohemian style" },
      { ja: "ヴィンテージ/レトロ", en: "vintage style" },
      { ja: "ロリータ", en: "lolita fashion" },
      { ja: "ギャル", en: "gyaru style" },
      { ja: "ストリート系", en: "streetwear" },
      { ja: "ミリタリー風", en: "military fashion" }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-attire");
      if (!parent) return;

      // 既存のv3コンテナがあれば削除（更新用）
      const existing = parent.querySelector(".attire-v3-container");
      if(existing) existing.remove();

      const section = document.createElement("div");
      section.className = "attire-v3-container";
      
      // 区切り線
      const sep = document.createElement("div");
      sep.style.cssText = "margin:15px 0 10px 0; border-top:1px dashed #ccc; text-align:center; color:#888; font-size:0.8em;";
      sep.textContent = "▼ ファンタジー・民族・スタイル (v3 Expanded) ▼";
      section.appendChild(sep);

      Object.entries(CATEGORIES).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.style.marginBottom = "6px";
        const summary = document.createElement("summary");
        summary.textContent = cat;
        summary.style.fontWeight = "bold";
        summary.style.cursor = "pointer";
        summary.style.background = "#fff8e1"; // クリーム色で区別
        details.appendChild(summary);

        const content = document.createElement("div");
        content.style.padding = "8px";
        content.style.display = "grid";
        content.style.gridTemplateColumns = "repeat(auto-fill, minmax(140px, 1fr))";

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.display = "flex";
          label.style.alignItems = "center";
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.en;
          label.appendChild(cb);
          label.appendChild(document.createTextNode(`${item.ja} / ${item.en}`));
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
      document.querySelectorAll(".attire-v3-container input[type='checkbox']:checked").forEach(cb => tags.push(cb.dataset.en));
      return tags;
    }
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

