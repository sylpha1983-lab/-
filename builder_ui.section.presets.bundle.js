// Auto-generated compatibility bundle for the former 'presets' section.
// v3.0 keeps the prompt-part key and item IDs, but mounts the UI inside Preset Packs.

(function(){
// --- builder_ui.section.presets.v1.js ---
(function(){
  "use strict";

  const VERSION = 1;
  const KEY = "presets";
  const ROOT_ID = "shima-quick-scene-sets";
  const SHORTCUT_ID = "shima-background-quick-scene-shortcut";

  function ensureStyles() {
    if (document.getElementById("shima-quick-scene-style")) return;
    const style = document.createElement("style");
    style.id = "shima-quick-scene-style";
    style.textContent = `
      #${ROOT_ID} {
        margin: 0 0 12px;
        border: 1px solid rgba(66, 157, 151, 0.34);
        border-radius: 16px;
        background: linear-gradient(145deg, rgba(242,255,252,.98), rgba(244,250,255,.98));
        box-shadow: 0 8px 22px rgba(54, 97, 112, .10);
        overflow: hidden;
      }
      #${ROOT_ID} > summary {
        list-style: none;
        display: grid;
        grid-template-columns: auto minmax(0, 1fr) auto;
        align-items: center;
        gap: 10px;
        padding: 14px;
        cursor: pointer;
        color: #164f54;
      }
      #${ROOT_ID} > summary::-webkit-details-marker { display: none; }
      #${ROOT_ID} > summary::before {
        content: "▶";
        color: #2d8b84;
        font-size: .82em;
      }
      #${ROOT_ID}[open] > summary::before { content: "▼"; }
      .shima-quick-scene-title { min-width: 0; }
      .shima-quick-scene-title strong {
        display: block;
        font-size: 1.02rem;
        line-height: 1.3;
      }
      .shima-quick-scene-title small {
        display: block;
        margin-top: 3px;
        color: #52727a;
        font-size: .76rem;
        line-height: 1.35;
      }
      .shima-quick-scene-count,
      .shima-quick-scene-category-count,
      .shima-quick-scene-channel {
        flex: 0 0 auto;
        border-radius: 999px;
        font-weight: 800;
      }
      .shima-quick-scene-count {
        min-width: 40px;
        padding: 6px 9px;
        background: #dff5f1;
        color: #26756f;
        text-align: center;
        font-size: .78rem;
      }
      /*
       * builder_main..html の共通規則
       *   .section-content details[open] > div { grid-template-columns:auto-fill... }
       * より優先し、クイック棚は全幅1列を維持する。
       */
      #${ROOT_ID}[open] > .shima-quick-scene-body {
        display: block !important;
        width: 100% !important;
        min-width: 0 !important;
        padding: 0 10px 10px !important;
        box-sizing: border-box;
      }
      .shima-quick-scene-guide {
        width: 100%;
        box-sizing: border-box;
        margin: 0 0 10px;
        padding: 10px 12px;
        border: 1px solid rgba(93, 143, 160, .22);
        border-radius: 12px;
        background: rgba(255,255,255,.78);
        color: #415e67;
        font-size: .82rem;
        line-height: 1.55;
      }
      .shima-quick-scene-guide strong { color: #1f6f6a; }
      .shima-quick-scene-category {
        display: block;
        width: 100%;
        min-width: 0;
        box-sizing: border-box;
        margin-top: 8px;
        border: 1px solid rgba(91, 132, 151, .20);
        border-radius: 12px;
        background: rgba(255,255,255,.70);
        overflow: hidden;
      }
      .shima-quick-scene-category > summary {
        list-style: none;
        display: flex;
        align-items: center;
        gap: 8px;
        min-height: 48px;
        padding: 9px 11px;
        cursor: pointer;
        color: #244f59;
        font-weight: 800;
        line-height: 1.35;
      }
      .shima-quick-scene-category > summary::-webkit-details-marker { display: none; }
      .shima-quick-scene-category > summary::before { content: "▶"; color: #5b91a0; font-size: .78em; }
      .shima-quick-scene-category[open] > summary::before { content: "▼"; color: #268b82; }
      .shima-quick-scene-category-title { flex: 1 1 auto; min-width: 0; }
      .shima-quick-scene-category-count {
        padding: 3px 8px;
        background: #edf5f7;
        color: #54747d;
        font-size: .72rem;
      }
      #${ROOT_ID} .shima-quick-scene-category[open] > .shima-quick-scene-list {
        display: grid !important;
        grid-template-columns: minmax(0, 1fr) !important;
        width: 100% !important;
        min-width: 0 !important;
        gap: 8px !important;
        padding: 0 9px 9px !important;
        box-sizing: border-box;
      }
      .shima-quick-scene-item {
        display: grid;
        grid-template-columns: auto minmax(0, 1fr) auto;
        align-items: center;
        gap: 10px;
        min-height: 52px;
        margin: 0;
        padding: 9px 10px;
        border: 1px solid #d8e6e9;
        border-radius: 11px;
        background: #fff;
        color: #274953;
        cursor: pointer;
        line-height: 1.35;
        width: 100%;
        min-width: 0;
        box-sizing: border-box;
      }
      .shima-quick-scene-item:hover { border-color: #80c8c1; background: #f7fffd; }
      .shima-quick-scene-item:has(input:checked) {
        border-color: #50b4aa;
        background: linear-gradient(135deg, #edfffa, #f1fbff);
        box-shadow: inset 4px 0 0 #57bdb2;
      }
      .shima-quick-scene-input {
        inline-size: 22px;
        block-size: 22px;
        margin: 0;
        accent-color: #31998f;
      }
      .shima-quick-scene-label {
        min-width: 0;
        font-weight: 750;
        word-break: normal;
        overflow-wrap: anywhere;
        line-break: strict;
      }
      .shima-quick-scene-channel {
        padding: 3px 7px;
        background: #e7f3fa;
        color: #416b7e;
        font-size: .66rem;
        letter-spacing: .04em;
      }
      #${SHORTCUT_ID} {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        gap: 10px 14px;
        align-items: center;
        margin: 0 0 14px;
        padding: 14px;
        border: 1px solid rgba(61, 148, 141, .36);
        border-radius: 15px;
        background: linear-gradient(135deg, rgba(239,255,251,.98), rgba(241,249,255,.98));
        box-shadow: 0 6px 18px rgba(60, 107, 120, .10);
      }
      .shima-background-scene-copy strong {
        display: block;
        color: #185c5e;
        font-size: 1rem;
      }
      .shima-background-scene-copy small {
        display: block;
        margin-top: 4px;
        color: #52727a;
        font-size: .78rem;
        line-height: 1.45;
      }
      .shima-background-scene-kinds {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 8px;
      }
      .shima-background-scene-kinds span {
        padding: 4px 8px;
        border-radius: 999px;
        background: rgba(255,255,255,.84);
        border: 1px solid #d7e8e9;
        color: #4f7077;
        font-size: .7rem;
        font-weight: 800;
      }
      #${SHORTCUT_ID} button {
        min-height: 44px;
        padding: 9px 12px;
        border: 1px solid #63b8b0;
        border-radius: 12px;
        background: linear-gradient(135deg, #ddfff7, #e4f7ff);
        color: #17625f;
        font-weight: 850;
        cursor: pointer;
      }
      #${SHORTCUT_ID} button:active { transform: translateY(1px); }
      #${ROOT_ID}.is-jump-highlight {
        animation: shimaQuickSceneJump 1.2s ease;
      }
      @keyframes shimaQuickSceneJump {
        0%, 100% { box-shadow: 0 8px 22px rgba(54, 97, 112, .10); }
        35% { box-shadow: 0 0 0 5px rgba(73, 193, 180, .25), 0 10px 28px rgba(54, 97, 112, .18); }
      }
      @media (max-width: 700px) {
        #${SHORTCUT_ID} { grid-template-columns: 1fr; }
        #${SHORTCUT_ID} button { width: 100%; }
        .shima-quick-scene-item { min-height: 58px; }
      }
    `;
    document.head.appendChild(style);
  }

  function situationsDB() {
    return window.__QP_DB && window.__QP_DB.situations
      ? window.__QP_DB.situations
      : null;
  }

  function situationCount(situations) {
    if (!situations || typeof situations !== "object") return 0;
    return Object.values(situations).reduce(
      (sum, items) => sum + (Array.isArray(items) ? items.length : 0),
      0
    );
  }

  function buildQuickSceneShelf() {
    const situations = situationsDB();
    if (!situations || typeof situations !== "object") return null;

    const root = document.createElement("details");
    root.id = ROOT_ID;
    root.className = "presets-v1 situations-v1 shima-quick-scene-sets";
    root.open = false;

    const total = situationCount(situations);
    root.dataset.sceneCount = String(total);

    const heading = document.createElement("summary");
    const title = document.createElement("span");
    title.className = "shima-quick-scene-title";
    const strong = document.createElement("strong");
    strong.textContent = "⚡ クイック・シーンセット";
    const small = document.createElement("small");
    small.textContent = "場所・時間・光・空気を、ひと押しでまとめて追加";
    title.appendChild(strong);
    title.appendChild(small);
    heading.appendChild(title);
    const totalBadge = document.createElement("span");
    totalBadge.className = "shima-quick-scene-count";
    totalBadge.textContent = String(total);
    totalBadge.title = total + "セット";
    heading.appendChild(totalBadge);
    root.appendChild(heading);

    const body = document.createElement("div");
    body.className = "shima-quick-scene-body";
    const guide = document.createElement("p");
    guide.className = "shima-quick-scene-guide";
    guide.innerHTML = "<strong>サクッと決める軽量版です。</strong> 背景だけを細かく組む時は「18. 背景・場所」、人物・衣装まで含む大きな完成セットは、この下のプリセットパックを使います。";
    body.appendChild(guide);

    Object.entries(situations).forEach(([category, items], categoryIndex) => {
      const categoryDetails = document.createElement("details");
      categoryDetails.className = "preset-cat shima-quick-scene-category";
      categoryDetails.open = false;

      const categorySummary = document.createElement("summary");
      const categoryTitle = document.createElement("span");
      categoryTitle.className = "shima-quick-scene-category-title";
      categoryTitle.textContent = category;
      const categoryCount = document.createElement("span");
      categoryCount.className = "shima-quick-scene-category-count";
      categoryCount.textContent = String((items || []).length);
      categorySummary.appendChild(categoryTitle);
      categorySummary.appendChild(categoryCount);
      categoryDetails.appendChild(categorySummary);

      const list = document.createElement("div");
      list.className = "shima-quick-scene-list";
      (items || []).forEach((item, itemIndex) => {
        if (!item || !item.val) return;
        const label = document.createElement("label");
        label.className = "shima-quick-scene-item";
        label.title = item.val;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        // v2.9以前のマイプリセット／履歴を戻せるよう、IDは変更しない。
        checkbox.id = "shima-situation-" + categoryIndex + "-" + itemIndex;
        checkbox.className = "shima-quick-scene-input";
        checkbox.dataset.en = item.val;
        checkbox.dataset.val = item.val;
        checkbox.dataset.ja = item.label || "";
        checkbox.dataset.outputChannel = "positive";

        const labelText = document.createElement("span");
        labelText.className = "shima-quick-scene-label";
        labelText.textContent = item.label || item.val;
        const channel = document.createElement("span");
        channel.className = "shima-quick-scene-channel";
        channel.textContent = "POS";
        channel.title = "Positiveへ出力";

        label.appendChild(checkbox);
        label.appendChild(labelText);
        label.appendChild(channel);
        list.appendChild(label);
      });

      categoryDetails.appendChild(list);
      body.appendChild(categoryDetails);
    });

    root.appendChild(body);
    return root;
  }

  function openAncestors(node) {
    let current = node;
    while (current && current !== document.body) {
      if (current.tagName === "DETAILS") current.open = true;
      if (current.classList && current.classList.contains("section")) current.style.display = "";
      current = current.parentElement;
    }
  }

  function goToQuickScenes() {
    const root = document.getElementById(ROOT_ID);
    if (!root) return;

    if (window.ZeroAssist) {
      if (typeof window.ZeroAssist.clearFilters === "function") window.ZeroAssist.clearFilters();
      if (typeof window.ZeroAssist.setMobileView === "function") window.ZeroAssist.setMobileView("shelf");
    }
    if (window.ShimaNavigation && typeof window.ShimaNavigation.setMobileView === "function") {
      window.ShimaNavigation.setMobileView("shelf");
    }
    if (window.ShimaChannelSearch && typeof window.ShimaChannelSearch.setFilter === "function") {
      window.ShimaChannelSearch.setFilter("all", { dispatch: false });
    }

    const search = document.querySelector("#ui-search-bar input");
    if (search && search.value) {
      search.value = "";
      search.dispatchEvent(new Event("input", { bubbles: true }));
    }

    setTimeout(() => {
      openAncestors(root);
      root.open = true;
      try { root.scrollIntoView({ behavior: "smooth", block: "start" }); }
      catch (_) { try { root.scrollIntoView(); } catch (__) {} }
      root.classList.remove("is-jump-highlight");
      void root.offsetWidth;
      root.classList.add("is-jump-highlight");
      setTimeout(() => root.classList.remove("is-jump-highlight"), 1400);
    }, 30);
  }

  function mountBackgroundShortcut(attempt) {
    if (document.getElementById(SHORTCUT_ID)) return;
    const background = document.querySelector("#list-background .background-v6-integrated") ||
      document.querySelector("#list-background .section-content");
    if (!background) {
      if ((attempt || 0) < 20) setTimeout(() => mountBackgroundShortcut((attempt || 0) + 1), 100);
      return;
    }

    const card = document.createElement("aside");
    card.id = SHORTCUT_ID;
    card.setAttribute("aria-label", "クイック・シーンセットへの案内");
    const copy = document.createElement("div");
    copy.className = "shima-background-scene-copy";
    const title = document.createElement("strong");
    title.textContent = "⚡ 場面を一発で決める";
    const total = situationCount(situationsDB());
    const totalLabel = total > 0 ? total + "セット" : "クイックセット";
    const description = document.createElement("small");
    description.textContent = "場所・時間・光・空気をまとめた" + totalLabel + "は、プリセットパックにあります。";
    const kinds = document.createElement("div");
    kinds.className = "shima-background-scene-kinds";
    kinds.innerHTML = "<span>18番＝背景を部品で選ぶ</span><span>クイック＝場面をまとめて選ぶ</span>";
    copy.appendChild(title);
    copy.appendChild(description);
    copy.appendChild(kinds);

    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-controls", ROOT_ID);
    button.textContent = totalLabel + "を見る →";
    button.addEventListener("click", goToQuickScenes);

    card.appendChild(copy);
    card.appendChild(button);
    background.insertBefore(card, background.firstChild);
  }

  function findPresetPackMount() {
    return document.querySelector("#list-preset_packs .preset-packs-container") ||
      document.querySelector("#list-preset_packs .section-content") ||
      document.getElementById("list-preset_packs");
  }

  function removeStandaloneLegacySection(legacyContainer) {
    const oldSection = document.getElementById("list-presets") || legacyContainer;
    const quickShelf = document.getElementById(ROOT_ID);
    if (oldSection && (!quickShelf || !oldSection.contains(quickShelf))) {
      oldSection.textContent = "";
      if (oldSection.parentNode) oldSection.parentNode.removeChild(oldSection);
    }
  }

  function mountInsidePresetPacks(legacyContainer, attempt) {
    const mount = findPresetPackMount();
    if (!mount) {
      if ((attempt || 0) < 20) {
        setTimeout(() => mountInsidePresetPacks(legacyContainer, (attempt || 0) + 1), 100);
      }
      return;
    }

    const oldRoot = document.getElementById(ROOT_ID);
    if (oldRoot && mount.contains(oldRoot)) {
      mountBackgroundShortcut(0);
      removeStandaloneLegacySection(legacyContainer);
      return;
    }
    if (oldRoot) oldRoot.remove();
    const shelf = buildQuickSceneShelf();
    if (!shelf) return;
    mount.insertBefore(shelf, mount.firstChild);
    mountBackgroundShortcut(0);

    // 旧24番はUIから廃止。prompt-part keyだけを出力・保存互換用に残す。
    removeStandaloneLegacySection(legacyContainer);

    if (window.ShimaChannelSearch && typeof window.ShimaChannelSearch.invalidate === "function") {
      window.ShimaChannelSearch.invalidate();
    }
    if (window.ZeroAssist && typeof window.ZeroAssist.refresh === "function") window.ZeroAssist.refresh();
    try {
      window.dispatchEvent(new CustomEvent("shimaQuickScenesMounted", {
        detail: { categories: shelf.querySelectorAll(".shima-quick-scene-category").length, items: Number(shelf.dataset.sceneCount || 0) }
      }));
    } catch (_) {}
  }

  const API = {
    initUI(container) {
      ensureStyles();
      mountInsidePresetPacks(document.querySelector("#list-presets") || container, 0);
    },

    getTags() {
      return Array.from(document.querySelectorAll("#" + ROOT_ID + " .shima-quick-scene-input:checked"))
        .map(checkbox => checkbox.dataset.en)
        .filter(Boolean);
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);

  // v3.0ではcoreの独立セクション順から外れているため、既存棚のマウント完了後に
  // プリセットパックへ自律的に合流する。再マウント時も選択状態は作り直さない。
  function boot(attempt) {
    ensureStyles();
    const mount = findPresetPackMount();
    if (!mount) {
      if ((attempt || 0) < 30) setTimeout(() => boot((attempt || 0) + 1), 100);
      return;
    }
    mountInsidePresetPacks(document.getElementById("list-presets"), 0);
  }

  window.addEventListener("promptPartMounted", () => setTimeout(() => boot(0), 0));
  setTimeout(() => boot(0), 0);
})();

})();
