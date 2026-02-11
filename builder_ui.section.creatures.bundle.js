// Auto-generated bundle for section 'creatures'
// Contains 1 versions stacked in ascending order.

(function(){
// --- builder_ui.section.creatures.v1.js ---
(function(){
  "use strict";
  const VERSION = 1;
  const KEY = "creatures";

  // ---- Data ----
  const DATA_SHIMAENAGA = [
    { ja: "白頭固定（推奨）", en: "(white head Shima-enaga bushtit), tiny black beak" },
    { ja: "通称ブースト", en: "shima-enaga, small black beak" },
    { ja: "種名保険", en: "long-tailed bushtit, short black beak" }
  ];

  const DATA_BIRDS_OTHER = [
    { ja: "フクロウ", en: "owl, nocturnal bird" },
    { ja: "ワシ", en: "eagle, large bird of prey" },
    { ja: "カラス", en: "crow, black bird" },
    { ja: "ハト", en: "pigeon, city bird" },
    { ja: "スズメ", en: "sparrow, small bird" },
    { ja: "ペリカン", en: "pelican, large water bird" }
  ];

  const DATA_PENGUIN = [
    { ja: "皇帝ペンギン", en: "emperor penguin, large penguin" },
    { ja: "アデリーペンギン", en: "adelie penguin, small penguin, white eye ring" }
  ];

  // Dogs: baseline common breeds
  const DATA_DOG = [
    { ja: "柴犬", en: "shiba inu, dog" },
    { ja: "ゴールデンレトリバー", en: "golden retriever, dog" },
    { ja: "ラブラドールレトリバー", en: "labrador retriever, dog" },
    { ja: "シベリアンハスキー", en: "siberian husky, dog" },
    { ja: "チワワ", en: "chihuahua, small dog" },
    { ja: "トイプードル", en: "toy poodle, dog" },
    { ja: "フレンチブルドッグ", en: "french bulldog, dog" },
    { ja: "ビーグル", en: "beagle, dog" }
  ];

  // Cats: baseline common types/breeds
  const DATA_CAT = [
    { ja: "アメリカンショートヘア", en: "american shorthair, cat" },
    { ja: "スコティッシュフォールド", en: "scottish fold, cat, folded ears" },
    { ja: "マンチカン", en: "munchkin, cat, short legs" },
    { ja: "ラグドール", en: "ragdoll, cat" },
    { ja: "メインクーン", en: "maine coon, large cat" },
    { ja: "ベンガル", en: "bengal cat, spotted coat" },
    { ja: "三毛猫", en: "calico cat, tricolor fur" }
  ];

  const DATA_RELATIONS = [
    { ja: "肩にとまる", en: "perched on shoulder" },
    { ja: "頭の上にとまる", en: "perched on head" },
    { ja: "手の上にとまる", en: "perched on hand" },
    { ja: "周囲を飛ぶ", en: "flying around" },
    { ja: "群れで飛ぶ", en: "a flock of birds" },
    { ja: "目線を合わせる", en: "eye contact with the bird" },
    { ja: "寄り添う相棒", en: "animal companion" }
  ];

  // ---- UI helpers ----
  function el(tag, attrs={}, children=[]) {
    const n = document.createElement(tag);
    Object.keys(attrs).forEach(k => {
      if (k === "style") n.style.cssText = attrs[k];
      else if (k === "class") n.className = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (children||[]).forEach(c => n.appendChild(c));
    return n;
  }

  function makeCheckboxRow(item) {
    const id = `cr_${Math.random().toString(36).slice(2)}`;
    const cb = el("input", { type: "checkbox", id, "data-val": item.en });
    const lb = el("label", { for: id, text: `${item.ja} / ${item.en}` });

    // Strong wrapping + no horizontal overflow (mobile safe)
    lb.style.display = "block";
    lb.style.whiteSpace = "normal";
    lb.style.wordBreak = "break-word";
    lb.style.overflowWrap = "anywhere";
    lb.style.minWidth = "0";
    lb.style.maxWidth = "100%";
    lb.style.fontSize = "12px";
    lb.style.lineHeight = "1.25";

    // Grid keeps label width stable even if parent is flex
    const row = el("div", { class: "row", style:
      "display:grid; grid-template-columns:26px 1fr; column-gap:8px; align-items:start; margin:6px 0; min-width:0; max-width:100%; box-sizing:border-box;"
    }, [cb, lb]);

    return row;
  }

  function makeGroup(title, items, accent) {
    const det = el("details", { class: "creatures-acc", style: `margin:10px 0; border:2px solid ${accent}; border-radius:10px; background:#fff; padding:8px; box-sizing:border-box; min-width:0; overflow:hidden;` });
    det.open = false;
    const sum = el("summary", { text: title, style: "cursor:pointer; font-weight:800; font-size:14px; padding:4px 2px;" });
    const box = el("div", { class: "creatures-box", style: "margin-top:6px; display:block; min-width:0; max-width:100%; box-sizing:border-box;" });
    items.forEach(it => box.appendChild(makeCheckboxRow(it)));
    det.appendChild(sum);
    det.appendChild(box);
    return det;
  }

  function makeBirdsGroup() {
    const det = el("details", { class: "creatures-acc", style: "margin:10px 0; border:2px solid #2c3e50; border-radius:10px; background:#fff; padding:8px;" });
    det.open = false;
    const sum = el("summary", { text: "🕊 鳥類 / Birds", style: "cursor:pointer; font-weight:800; font-size:14px; padding:4px 2px;" });
    const box = el("div", { class: "creatures-box", style: "margin-top:6px; display:flex; flex-wrap:wrap; gap:12px; align-items:flex-start; min-width:0; max-width:100%; box-sizing:border-box;" });

    // -------------------------
    // 🪶 Real Birds (skeleton)
    // -------------------------
    const real = el("details", { class: "creatures-acc", style: "margin:8px 0; border:2px solid #1f2937; border-radius:10px; background:#fff; padding:8px;" });
    real.style.flex = "1 1 320px"; real.style.minWidth = "260px"; real.style.maxWidth = "100%"; real.style.overflow = "hidden"; real.style.boxSizing = "border-box"; real.style.minWidth = "0";
    real.open = false;
    const realSum = el("summary", { text: "🪶 現実の鳥 / Real Birds", style: "cursor:pointer; font-weight:800; font-size:13px; padding:3px 2px;" });
    const realBox = el("div", { class: "creatures-box", style: "margin-top:6px; display:block; min-width:0; max-width:100%; box-sizing:border-box;" });

    // Small birds
    const small = el("details", { class: "creatures-acc", style: "margin:8px 0; border:2px dashed #2563eb; border-radius:10px; background:#fff; padding:8px;" });
    small.open = false;
    const smallSum = el("summary", { text: "🐤 小鳥 / Small Birds", style: "cursor:pointer; font-weight:800; font-size:13px; padding:3px 2px;" });
    const smallBox = el("div", { class: "creatures-box", style: "margin-top:6px; display:block; min-width:0; max-width:100%; box-sizing:border-box;" });

    // Shima-enaga variants
    const shima = el("details", { class: "creatures-acc", style: "margin:8px 0; border:2px dashed #2563eb; border-radius:10px; background:#fff; padding:8px;" });
    shima.open = false;
    const shimaSum = el("summary", { text: "🐦 シマエナガ / Shima-enaga", style: "cursor:pointer; font-weight:800; font-size:13px; padding:3px 2px;" });
    const shimaBox = el("div", { class: "creatures-box", style: "margin-top:6px; display:block; min-width:0; max-width:100%; box-sizing:border-box;" });
    DATA_SHIMAENAGA.forEach(it => shimaBox.appendChild(makeCheckboxRow({ ja: `シマエナガ：${it.ja}`, en: it.en })));
    shima.appendChild(shimaSum);
    shima.appendChild(shimaBox);
    smallBox.appendChild(shima);

    // Baseline small birds (placeholder)
    smallBox.appendChild(makeCheckboxRow({ ja: "スズメ", en: "sparrow, small bird" }));
    smallBox.appendChild(makeCheckboxRow({ ja: "ツバメ", en: "swallow, small bird" }));

    small.appendChild(smallSum);
    small.appendChild(smallBox);
    realBox.appendChild(small);

    // Raptors
    const raptor = el("details", { class: "creatures-acc", style: "margin:8px 0; border:2px dashed #f59e0b; border-radius:10px; background:#fff; padding:8px;" });
    raptor.open = false;
    const raptorSum = el("summary", { text: "🦅 猛禽類 / Birds of Prey", style: "cursor:pointer; font-weight:800; font-size:13px; padding:3px 2px;" });
    const raptorBox = el("div", { class: "creatures-box", style: "margin-top:6px; display:block; min-width:0; max-width:100%; box-sizing:border-box;" });
    raptorBox.appendChild(makeCheckboxRow({ ja: "フクロウ", en: "owl" }));
    raptorBox.appendChild(makeCheckboxRow({ ja: "ワシ", en: "eagle" }));
    raptorBox.appendChild(makeCheckboxRow({ ja: "タカ", en: "hawk" }));
    raptor.appendChild(raptorSum);
    raptor.appendChild(raptorBox);
    realBox.appendChild(raptor);

    // Water birds
    const water = el("details", { class: "creatures-acc", style: "margin:8px 0; border:2px dashed #06b6d4; border-radius:10px; background:#fff; padding:8px;" });
    water.open = false;
    const waterSum = el("summary", { text: "🌊 水鳥 / Water Birds", style: "cursor:pointer; font-weight:800; font-size:13px; padding:3px 2px;" });
    const waterBox = el("div", { class: "creatures-box", style: "margin-top:6px; display:block; min-width:0; max-width:100%; box-sizing:border-box;" });
    waterBox.appendChild(makeCheckboxRow({ ja: "ペリカン", en: "pelican, large water bird" }));
    waterBox.appendChild(makeCheckboxRow({ ja: "白鳥", en: "swan, water bird" }));

    // Penguins (fold)
    const peng = el("details", { class: "creatures-acc", style: "margin:8px 0; border:2px dashed #06b6d4; border-radius:10px; background:#fff; padding:8px;" });
    peng.open = false;
    const pengSum = el("summary", { text: "🐧 ペンギン / Penguin", style: "cursor:pointer; font-weight:800; font-size:13px; padding:3px 2px;" });
    const pengBox = el("div", { class: "creatures-box", style: "margin-top:6px; display:block; min-width:0; max-width:100%; box-sizing:border-box;" });
    DATA_PENGUIN.forEach(it => pengBox.appendChild(makeCheckboxRow({ ja: `ペンギン：${it.ja}`, en: it.en })));
    peng.appendChild(pengSum);
    peng.appendChild(pengBox);
    waterBox.appendChild(peng);

    water.appendChild(waterSum);
    water.appendChild(waterBox);
    realBox.appendChild(water);

    // Urban birds
    const urban = el("details", { class: "creatures-acc", style: "margin:8px 0; border:2px dashed #10b981; border-radius:10px; background:#fff; padding:8px;" });
    urban.open = false;
    const urbanSum = el("summary", { text: "🏙 都市鳥 / Urban Birds", style: "cursor:pointer; font-weight:800; font-size:13px; padding:3px 2px;" });
    const urbanBox = el("div", { class: "creatures-box", style: "margin-top:6px; display:block; min-width:0; max-width:100%; box-sizing:border-box;" });
    urbanBox.appendChild(makeCheckboxRow({ ja: "カラス", en: "crow" }));
    urbanBox.appendChild(makeCheckboxRow({ ja: "ハト", en: "pigeon" }));
    urban.appendChild(urbanSum);
    urban.appendChild(urbanBox);
    realBox.appendChild(urban);

    real.appendChild(realSum);
    real.appendChild(realBox);
    box.appendChild(real);

    // -------------------------
    // ✨ Mythic Birds (skeleton)
    // -------------------------
    const myth = el("details", { class: "creatures-acc", style: "margin:8px 0; border:2px solid #7c3aed; border-radius:10px; background:#fff; padding:8px;" });
    myth.style.flex = "1 1 320px"; myth.style.minWidth = "260px"; myth.style.maxWidth = "100%"; myth.style.overflow = "hidden"; myth.style.boxSizing = "border-box"; myth.style.minWidth = "0";
    myth.open = false;
    const mythSum = el("summary", { text: "✨ 神話・伝説の鳥 / Mythic Birds", style: "cursor:pointer; font-weight:800; font-size:13px; padding:3px 2px;" });
    const mythBox = el("div", { class: "creatures-box", style: "margin-top:6px; display:block; min-width:0; max-width:100%; box-sizing:border-box;" });

    mythBox.appendChild(makeCheckboxRow({ ja: "神話鳥：夜梟", en: "night owl of wisdom, divine observer" }));
    mythBox.appendChild(makeCheckboxRow({ ja: "神話鳥：日輪の王鷲", en: "sun eagle, symbol of sovereignty, divine authority" }));
    mythBox.appendChild(makeCheckboxRow({ ja: "神話鳥：冥界の鴉", en: "death crow, messenger of fate, between life and death" }));
    mythBox.appendChild(makeCheckboxRow({ ja: "神話鳥：白初鳥", en: "primordial white bird, origin of the sky" }));

    myth.appendChild(mythSum);
    myth.appendChild(mythBox);
    box.appendChild(myth);

    det.appendChild(sum);
    det.appendChild(box);
    return det;
  }


  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-creatures") || container;
      // core already renders title/controls; we only populate content
      const contentArea = parent.querySelector(".section-content") || parent;
      contentArea.innerHTML = "";

      const note = el("div", { class: "creatures-note", style: "font-size:12px; opacity:0.85; margin:6px 0 10px 0;" });
      note.textContent = "生物は“存在”。小物と混ぜない。ここで同行・群れ・目線まで制御する。";
      contentArea.appendChild(note);

      try {
        contentArea.appendChild(makeBirdsGroup());
      } catch (e) {
        const err = el("div", { style: "margin:8px 0; padding:8px; border:2px solid #e11d48; border-radius:10px; background:#fff0f3; font-size:12px; white-space:pre-wrap;" });
        err.textContent = "[Creatures/Birds UI Error]\n" + (e && e.stack ? e.stack : String(e));
        contentArea.appendChild(err);
      }
      contentArea.appendChild(makeGroup("🐕 犬 / Dog", DATA_DOG.map(it=>({ja:`犬：${it.ja}`, en:it.en})), "#1e88e5"));
      contentArea.appendChild(makeGroup("🐈 猫 / Cat", DATA_CAT.map(it=>({ja:`猫：${it.ja}`, en:it.en})), "#43a047"));
      contentArea.appendChild(makeGroup("🦴 状態・関係 / Relations", DATA_RELATIONS, "#8e44ad"));
    },

    getTags() {
      const root = document.querySelector("#list-creatures");
      if (!root) return [];
      const tags = [];
      root.querySelectorAll("input[type='checkbox']:checked").forEach(cb => {
        const v = cb.dataset.val;
        if (v) tags.push(v);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();
