(function () {
  "use strict";

  if (window.__SHIMA_ZERO_ASSIST_V1__) return;
  window.__SHIMA_ZERO_ASSIST_V1__ = true;

  const VERSION = "1.2.0";
  const STORAGE = {
    favorites: "shimaBuilderV5.zeroAssist.favorites.v1",
    presets: "shimaBuilderV5.zeroAssist.presets.v1",
    mobileView: "shimaBuilderV5.zeroAssist.mobileView.v1"
  };

  const state = {
    mounted: false,
    favorites: loadFavorites(),
    presets: normalizePresets(loadJSON(STORAGE.presets, [])),
    selectedOnly: false,
    favoritesOnly: false,
    filterSnapshot: null,
    restoringFilter: false,
    checkboxByKey: new Map(),
    diagnostics: [],
    refreshTimer: 0,
    refreshDue: 0,
    filterTimer: 0,
    diagnosticTimer: 0,
    decorateQueue: [],
    decorateRunning: false,
    mobileView: loadMobileView(),
    eventsBound: false,
    bootTimer: 0,
    bootObserver: null,
    mobileIntegrityObserver: null
  };

  const ui = {};
  const keyCache = new WeakMap();
  const labelCache = new WeakMap();

  function loadJSON(key, fallback) {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return value == null ? fallback : value;
    } catch (_) {
      return fallback;
    }
  }

  function saveJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (_) {
      return false;
    }
  }

  function loadFavorites() {
    const source = loadJSON(STORAGE.favorites, []);
    return new Set(
      (Array.isArray(source) ? source : [])
        .filter(function (value) { return typeof value === "string" && value.length < 1200; })
        .slice(0, 5000)
    );
  }

  function loadMobileView() {
    try {
      const value = localStorage.getItem(STORAGE.mobileView);
      return value === "output" ? "output" : "shelf";
    } catch (_) {
      return "shelf";
    }
  }

  function normalizePresets(source) {
    if (!Array.isArray(source)) return [];
    return source
      .filter(function (entry) {
        return entry && typeof entry === "object" && Array.isArray(entry.selections);
      })
      .slice(0, 40);
  }

  function create(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = String(text);
    return node;
  }

  function allPromptCheckboxes() {
    return Array.from(document.querySelectorAll('#sections input[type="checkbox"]:not([data-zero-ignore="1"])'));
  }

  function promptCheckboxes() {
    return allPromptCheckboxes().filter(function (checkbox) {
      return !checkbox.dataset || checkbox.dataset.shimaPackPreviewHidden !== "1" || checkbox.checked;
    });
  }

  function selectedCheckboxes() {
    return Array.from(document.querySelectorAll('#sections input[type="checkbox"]:checked:not([data-zero-ignore="1"])'));
  }

  function isPromptCheckbox(node) {
    return !!(
      node &&
      node.matches &&
      node.matches('input[type="checkbox"]') &&
      (!node.dataset || node.dataset.zeroIgnore !== "1") &&
      (!node.dataset || node.dataset.shimaPackPreviewHidden !== "1" || node.checked) &&
      node.closest("#sections")
    );
  }

  function labelFor(checkbox) {
    return checkbox ? checkbox.closest("label") : null;
  }

  function cleanText(value) {
    return String(value || "")
      .replace(/[★☆]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function labelText(checkbox) {
    if (!checkbox) return "項目";
    if (labelCache.has(checkbox)) return labelCache.get(checkbox);
    const data = checkbox.dataset || {};
    const label = labelFor(checkbox);
    const value =
      cleanText(data.ja || data.label) ||
      cleanText(label ? label.textContent : "") ||
      cleanText(data.en || data.val) ||
      cleanText(checkbox.value) ||
      cleanText(checkbox.id) ||
      "項目";
    labelCache.set(checkbox, value);
    return value;
  }

  function sectionFor(checkbox) {
    return checkbox ? checkbox.closest('[id^="list-"], .section') : null;
  }

  function sectionName(checkbox) {
    const data = checkbox && checkbox.dataset ? checkbox.dataset : {};
    if (data.outputChannel === "negative") return "NEG専用";
    if (data.promptIntent === "positive-suppression") return "POS抑制";
    if (data.promptIntent === "positive-expression") return "POS表現";
    if (checkbox && checkbox.closest && checkbox.closest(".qp-v47-card")) return "品質・おまかせ";
    const section = sectionFor(checkbox);
    if (!section) return "棚";
    const title = section.querySelector(":scope > details > summary .section-summary-label, :scope > details > summary");
    return cleanText(title ? title.textContent : section.id.replace(/^list-/, "")) || "棚";
  }

  function checkboxKey(checkbox) {
    if (!checkbox) return "";
    if (keyCache.has(checkbox)) return keyCache.get(checkbox);

    const section = sectionFor(checkbox);
    const sectionId = section && section.id ? section.id : "section";
    const data = checkbox.dataset || {};
    let identity = "";

    if (data.packId) identity = "pack:" + data.packId;
    else if (checkbox.id) identity = "id:" + checkbox.id;
    else if (data.val) identity = "val:" + data.val;
    else if (data.en) identity = "en:" + data.en;
    else if (checkbox.name && checkbox.value) identity = "name:" + checkbox.name + ":" + checkbox.value;
    else identity = "label:" + labelText(checkbox);

    const key = sectionId + "|" + identity;
    keyCache.set(checkbox, key);
    return key;
  }

  function safeId(prefix) {
    try {
      if (window.crypto && typeof window.crypto.randomUUID === "function") {
        return prefix + "-" + window.crypto.randomUUID();
      }
    } catch (_) {}
    return prefix + "-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
  }

  function showToast(message, kind) {
    if (!ui.toast) return;
    ui.toast.textContent = String(message || "");
    ui.toast.dataset.kind = kind || "info";
    ui.toast.classList.remove("is-visible");
    void ui.toast.offsetWidth;
    ui.toast.classList.add("is-visible");
    clearTimeout(ui.toastTimer);
    ui.toastTimer = setTimeout(function () {
      if (ui.toast) ui.toast.classList.remove("is-visible");
    }, 2600);
  }

  function saveFavorites() {
    saveJSON(STORAGE.favorites, Array.from(state.favorites));
  }

  function updateStar(star, favorite) {
    if (!star) return;
    star.textContent = favorite ? "★" : "☆";
    star.classList.toggle("is-favorite", favorite);
    star.setAttribute("aria-pressed", String(favorite));
    star.setAttribute("aria-label", favorite ? "お気に入りから外す" : "お気に入りへ追加");
    star.title = favorite ? "お気に入りから外す" : "お気に入りへ追加";
  }

  function ensureFavoriteStar(label, checkbox) {
    if (!label || !checkbox || label.querySelector(":scope > .zero-favorite-star")) return;
    const key = checkboxKey(checkbox);
    const star = create("span", "zero-favorite-star");
    star.setAttribute("role", "button");
    star.tabIndex = 0;
    star.dataset.zeroFavoriteKey = key;
    updateStar(star, state.favorites.has(key));
    label.classList.add("zero-assist-favoritable");
    label.appendChild(star);
  }

  function queueDecorate(root) {
    if (!root || !root.querySelectorAll) return;
    const labels = [];
    if (root.matches && root.matches("label")) labels.push(root);
    root.querySelectorAll("label").forEach(function (label) {
      labels.push(label);
    });

    labels.forEach(function (label) {
      if (label.dataset.zeroAssistQueued === "1") return;
      const checkbox = label.querySelector('input[type="checkbox"]');
      if (!isPromptCheckbox(checkbox) || label.querySelector(":scope > .zero-favorite-star")) return;
      label.dataset.zeroAssistQueued = "1";
      state.decorateQueue.push({ label: label, checkbox: checkbox });
    });

    drainDecorateQueue();
  }

  function drainDecorateQueue() {
    if (state.decorateRunning) return;
    state.decorateRunning = true;

    const run = function (deadline) {
      let count = 0;
      while (state.decorateQueue.length && count < 240) {
        if (deadline && typeof deadline.timeRemaining === "function" && deadline.timeRemaining() < 2 && count > 20) break;
        const item = state.decorateQueue.shift();
        if (item && item.label && item.label.isConnected) {
          delete item.label.dataset.zeroAssistQueued;
          ensureFavoriteStar(item.label, item.checkbox);
        }
        count++;
      }

      if (state.decorateQueue.length) {
        if (typeof window.requestIdleCallback === "function") {
          window.requestIdleCallback(run, { timeout: 180 });
        } else {
          setTimeout(function () { run(null); }, 16);
        }
      } else {
        state.decorateRunning = false;
      }
    };

    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(run, { timeout: 180 });
    } else {
      setTimeout(function () { run(null); }, 0);
    }
  }

  function decorateOpenShelves() {
    document.querySelectorAll("#sections details[open]").forEach(function (details) {
      queueDecorate(details);
    });
    selectedCheckboxes().forEach(function (checkbox) {
      const label = labelFor(checkbox);
      if (label) ensureFavoriteStar(label, checkbox);
    });
  }

  function toggleFavorite(checkbox) {
    if (!checkbox) return;
    const key = checkboxKey(checkbox);
    const next = !state.favorites.has(key);
    if (next) state.favorites.add(key);
    else state.favorites.delete(key);
    saveFavorites();

    document.querySelectorAll(".zero-favorite-star").forEach(function (star) {
      if (star.dataset.zeroFavoriteKey === key) updateStar(star, next);
    });

    refreshTray();
    updateFilterButtons();
    if (state.favoritesOnly) scheduleFilter();
    showToast(next ? "お気に入りへ追加しました。" : "お気に入りから外しました。", next ? "success" : "info");
  }

  function createToolbar() {
    const search = document.getElementById("ui-search-bar");
    const existing = document.getElementById("zero-assist-toolbar");
    if (existing) {
      ui.toolbar = existing;
      ui.selectedFilter = document.getElementById("zero-selected-filter");
      ui.favoritesFilter = document.getElementById("zero-favorites-filter");
      ui.presetsButton = document.getElementById("zero-presets-button");
      ui.filterEmpty = document.getElementById("zero-filter-empty");
      return !!(ui.selectedFilter && ui.favoritesFilter && ui.presetsButton && ui.filterEmpty);
    }
    if (!search) return false;

    const toolbar = create("section", "zero-assist-toolbar");
    toolbar.id = "zero-assist-toolbar";
    toolbar.setAttribute("aria-label", "ZERO Assist");

    const title = create("div", "zero-assist-toolbar__title");
    const eyebrow = create("span", "zero-assist-eyebrow", "ZERO ASSIST");
    const heading = create("strong", "", "選択をすぐ見つける");
    title.appendChild(eyebrow);
    title.appendChild(heading);

    const actions = create("div", "zero-assist-toolbar__actions");
    const selected = create("button", "zero-filter-button", "✓ 選択中 0");
    selected.type = "button";
    selected.id = "zero-selected-filter";
    selected.setAttribute("aria-pressed", "false");

    const favorites = create("button", "zero-filter-button", "☆ お気に入り 0");
    favorites.type = "button";
    favorites.id = "zero-favorites-filter";
    favorites.setAttribute("aria-pressed", "false");

    const presets = create("button", "zero-preset-button", "◆ マイプリセット（保存・呼出）");
    presets.type = "button";
    presets.id = "zero-presets-button";

    actions.appendChild(selected);
    actions.appendChild(favorites);
    actions.appendChild(presets);
    toolbar.appendChild(title);
    toolbar.appendChild(actions);

    const empty = create("p", "zero-filter-empty", "この条件に合う項目はありません。");
    empty.id = "zero-filter-empty";
    empty.hidden = true;

    search.insertAdjacentElement("afterend", toolbar);
    toolbar.insertAdjacentElement("afterend", empty);

    ui.toolbar = toolbar;
    ui.selectedFilter = selected;
    ui.favoritesFilter = favorites;
    ui.presetsButton = presets;
    ui.filterEmpty = empty;
    return true;
  }

  function createSelectionTray() {
    const existing = document.getElementById("zero-selection-tray");
    if (existing) {
      ui.tray = existing;
      ui.selectionCount = existing.querySelector(".zero-selection-count");
      ui.selectionChips = document.getElementById("zero-selection-chips");
      return !!(ui.selectionCount && ui.selectionChips);
    }
    if (!ui.toolbar || !ui.filterEmpty) return false;
    const tray = create("section", "zero-selection-tray");
    tray.id = "zero-selection-tray";
    tray.hidden = true;

    const header = create("div", "zero-selection-tray__header");
    const titleWrap = create("div", "zero-selection-tray__title");
    titleWrap.appendChild(create("span", "zero-assist-eyebrow", "LOADED PARTS"));
    const title = create("strong", "", "選択中 ");
    const count = create("span", "zero-selection-count", "0");
    title.appendChild(count);
    titleWrap.appendChild(title);
    const hint = create("small", "", "項目名で棚へ移動／×で解除");
    header.appendChild(titleWrap);
    header.appendChild(hint);

    const chips = create("div", "zero-selection-chips");
    chips.id = "zero-selection-chips";

    tray.appendChild(header);
    tray.appendChild(chips);
    ui.filterEmpty.insertAdjacentElement("afterend", tray);

    ui.tray = tray;
    ui.selectionCount = count;
    ui.selectionChips = chips;
    return true;
  }

  function refreshTray() {
    if (!ui.tray || !ui.selectionChips) return;
    const selected = selectedCheckboxes();
    state.checkboxByKey.clear();
    ui.selectionChips.textContent = "";
    ui.selectionCount.textContent = String(selected.length);
    ui.tray.hidden = selected.length === 0;

    const fragment = document.createDocumentFragment();
    const limit = 240;
    selected.slice(0, limit).forEach(function (checkbox) {
      const key = checkboxKey(checkbox);
      state.checkboxByKey.set(key, checkbox);

      const chip = create("div", "zero-selection-chip");
      chip.dataset.zeroCheckboxKey = key;

      const jump = create("button", "zero-selection-chip__jump");
      jump.type = "button";
      jump.dataset.zeroAction = "jump";
      jump.title = "元の棚へ移動";
      const channel = checkbox.dataset && checkbox.dataset.outputChannel === "negative"
        ? { label:"NEG専用", tone:"negative" }
        : checkbox.dataset && checkbox.dataset.promptIntent === "positive-suppression"
          ? { label:"POS抑制", tone:"suppression" }
          : checkbox.dataset && checkbox.dataset.promptIntent === "positive-expression"
            ? { label:"POS表現", tone:"expression" }
            : null;
      if(channel){
        const badge = create("em", "zero-selection-chip__channel", channel.label);
        badge.dataset.tone = channel.tone;
        jump.appendChild(badge);
        chip.dataset.outputChannel = channel.tone;
      }
      jump.appendChild(create("span", "", labelText(checkbox)));
      jump.appendChild(create("small", "", sectionName(checkbox)));

      const favorite = create("button", "zero-selection-chip__favorite", state.favorites.has(key) ? "★" : "☆");
      favorite.type = "button";
      favorite.dataset.zeroAction = "favorite";
      favorite.setAttribute("aria-label", state.favorites.has(key) ? "お気に入りから外す" : "お気に入りへ追加");
      favorite.classList.toggle("is-favorite", state.favorites.has(key));

      const remove = create("button", "zero-selection-chip__remove", "×");
      remove.type = "button";
      remove.dataset.zeroAction = "remove";
      remove.setAttribute("aria-label", labelText(checkbox) + "を解除");

      chip.appendChild(jump);
      chip.appendChild(favorite);
      chip.appendChild(remove);
      fragment.appendChild(chip);
    });

    if (selected.length > limit) {
      fragment.appendChild(create("p", "zero-selection-overflow", "ほか " + (selected.length - limit) + " 件"));
    }

    ui.selectionChips.appendChild(fragment);
    updateFilterButtons(selected.length);
    updateMobileCount(selected.length);
  }

  function updateFilterButtons(selectedCount) {
    if (!ui.selectedFilter || !ui.favoritesFilter) return;
    const count = selectedCount == null ? selectedCheckboxes().length : selectedCount;
    ui.selectedFilter.textContent = "✓ 選択中 " + count;
    ui.selectedFilter.classList.toggle("is-active", state.selectedOnly);
    ui.selectedFilter.setAttribute("aria-pressed", String(state.selectedOnly));

    ui.favoritesFilter.textContent = (state.favoritesOnly ? "★" : "☆") + " お気に入り " + state.favorites.size;
    ui.favoritesFilter.classList.toggle("is-active", state.favoritesOnly);
    ui.favoritesFilter.setAttribute("aria-pressed", String(state.favoritesOnly));
  }

  function snapshotOpenDetails() {
    const map = new Map();
    document.querySelectorAll("#sections details").forEach(function (details) {
      map.set(details, !!details.open);
    });
    return map;
  }

  function clearFilterClasses() {
    document.querySelectorAll("#sections .zero-assist-filter-hidden").forEach(function (node) {
      node.classList.remove("zero-assist-filter-hidden");
    });
    document.querySelectorAll("#sections label.zero-assist-filter-match").forEach(function (label) {
      label.classList.remove("zero-assist-filter-match");
    });
  }

  function deactivateFilter() {
    clearFilterClasses();
    const snapshot = state.filterSnapshot;
    state.filterSnapshot = null;
    if (ui.filterEmpty) ui.filterEmpty.hidden = true;

    const input = document.querySelector("#ui-search-bar input");
    if (input) {
      state.restoringFilter = true;
      input.dispatchEvent(new Event("input", { bubbles: true }));
      state.restoringFilter = false;
    }

    // The v5 search reset closes every details element when its input is empty.
    // Restore the user's pre-filter shelf state after that reset has completed.
    if (snapshot && (!input || !cleanText(input.value))) {
      snapshot.forEach(function (open, details) {
        if (details && details.isConnected) details.open = open;
      });
    }
  }

  function applyFilter() {
    if (!state.mounted) return;
    const active = state.selectedOnly || state.favoritesOnly;
    updateFilterButtons();

    if (!active) {
      deactivateFilter();
      return;
    }

    if (!state.filterSnapshot) state.filterSnapshot = snapshotOpenDetails();
    clearFilterClasses();

    const input = document.querySelector("#ui-search-bar input");
    const term = cleanText(input ? input.value : "").toLowerCase();
    const matchedDetails = new Set();
    const matchedSections = new Set();
    let matchCount = 0;

    document.querySelectorAll("#sections label").forEach(function (label) {
      const checkbox = label.querySelector('input[type="checkbox"]');
      if (!isPromptCheckbox(checkbox)) return;

      const matchesSelected = !state.selectedOnly || checkbox.checked;
      const matchesFavorite = !state.favoritesOnly || state.favorites.has(checkboxKey(checkbox));
      const searchText = window.ShimaChannelSearch && typeof window.ShimaChannelSearch.searchText === "function"
        ? window.ShimaChannelSearch.searchText(label, checkbox)
        : cleanText(label.textContent).toLowerCase();
      const matchesTerm = !term || searchText.includes(term);
      const matchesChannel = window.ShimaChannelSearch && typeof window.ShimaChannelSearch.matches === "function"
        ? window.ShimaChannelSearch.matches(checkbox)
        : true;
      const matches = matchesSelected && matchesFavorite && matchesTerm && matchesChannel;

      label.classList.toggle("zero-assist-filter-hidden", !matches);
      label.classList.toggle("zero-assist-filter-match", matches);
      if (!matches) return;

      label.style.display = "";
      matchCount++;
      ensureFavoriteStar(label, checkbox);

      let node = label.parentElement;
      while (node && node.id !== "sections") {
        if (node.tagName === "DETAILS") matchedDetails.add(node);
        if (node.classList && node.classList.contains("section")) matchedSections.add(node);
        node = node.parentElement;
      }
      const section = sectionFor(checkbox);
      if (section) matchedSections.add(section);
    });

    document.querySelectorAll("#sections details").forEach(function (details) {
      const matched = matchedDetails.has(details);
      details.classList.toggle("zero-assist-filter-hidden", !matched);
      if (matched) {
        details.style.display = "";
        details.open = true;
      }
    });

    document.querySelectorAll("#sections > .section").forEach(function (section) {
      const matched = matchedSections.has(section);
      section.classList.toggle("zero-assist-filter-hidden", !matched);
      if (matched) section.style.display = "";
    });

    if (ui.filterEmpty) ui.filterEmpty.hidden = matchCount !== 0;
  }

  function scheduleFilter(delay) {
    clearTimeout(state.filterTimer);
    state.filterTimer = setTimeout(applyFilter, delay == null ? 30 : delay);
  }

  function openAncestors(checkbox) {
    let node = checkbox;
    while (node && node !== document.body) {
      if (node.tagName === "DETAILS") {
        node.open = true;
        node.style.display = "";
      }
      if (node.classList && node.classList.contains("section")) node.style.display = "";
      if (node.id === "sections") break;
      node = node.parentElement;
    }
  }

  function revealCheckbox(checkbox) {
    if (!checkbox) return;

    // The mobile selected-parts screen hides every shelf. Return to the shelf
    // view before scrolling so the destination can actually be seen.
    if (document.body.dataset.shimaMobileView === "selected") {
      if (window.ShimaNavigation && typeof window.ShimaNavigation.setMobileView === "function") {
        window.ShimaNavigation.setMobileView("shelf");
      } else {
        setMobileView("shelf", true);
      }
    }

    if (window.ShimaChannelSearch && typeof window.ShimaChannelSearch.setFilter === "function") {
      window.ShimaChannelSearch.setFilter("all", { dispatch: false });
    }
    state.selectedOnly = false;
    state.favoritesOnly = false;
    deactivateFilter();
    updateFilterButtons();

    const searchInput = document.querySelector("#ui-search-bar input");
    if (searchInput && searchInput.value) {
      searchInput.value = "";
      searchInput.dispatchEvent(new Event("input", { bubbles: true }));
    }

    // おまかせ品質は系統フィルターでカードが隠れるため、先に該当系統へ切り替える。
    const quickCard = checkbox.closest && checkbox.closest(".qp-v47-card");
    if (quickCard) {
      const quickShelf = quickCard.closest("#qp-v47-quick-presets");
      const family = quickCard.dataset.qpV47Family || "";
      const familyButton = family
        ? document.querySelector('.qp-v47-family-button[data-qp-v47-family="' + family + '"]')
        : null;
      if (quickShelf) quickShelf.open = true;
      if (familyButton && familyButton.getAttribute("aria-pressed") !== "true") familyButton.click();
    }

    openAncestors(checkbox);
    const label = labelFor(checkbox);
    if (!label) return;
    ensureFavoriteStar(label, checkbox);
    setTimeout(function () {
      try {
        label.scrollIntoView({ behavior: "smooth", block: "center" });
      } catch (_) {
        label.scrollIntoView();
      }
      label.classList.remove("zero-assist-jump-highlight");
      void label.offsetWidth;
      label.classList.add("zero-assist-jump-highlight");
      setTimeout(function () {
        label.classList.remove("zero-assist-jump-highlight");
      }, 1800);
    }, 60);
  }

  function removeSelection(checkbox) {
    if (!checkbox || !checkbox.checked) return;
    try {
      checkbox.click();
    } catch (_) {
      checkbox.checked = false;
      checkbox.dispatchEvent(new Event("change", { bubbles: true }));
    }
    requestRefresh(80);
  }

  function selectionSnapshot(checkbox) {
    const data = checkbox.dataset || {};
    const section = sectionFor(checkbox);
    const sectionBoxes = section ? Array.from(section.querySelectorAll('input[type="checkbox"]')) : [];
    return {
      key: checkboxKey(checkbox),
      inputId: checkbox.id || "",
      sectionId: section && section.id ? section.id : "",
      sectionIndex: sectionBoxes.indexOf(checkbox),
      packId: data.packId || "",
      val: data.val || "",
      en: data.en || "",
      ja: data.ja || "",
      outputChannel: data.outputChannel || "positive",
      label: labelText(checkbox),
      animalPoseLinkedBy: checkbox.getAttribute("data-animal-pose-linked-by") || "",
      animalPoseManualKeep: checkbox.getAttribute("data-animal-pose-manual-keep") || ""
    };
  }

  function currentMode() {
    const select = document.getElementById("prompt-compiler-v2-mode");
    return select ? select.value : (window.__PROMPT_COMPILER_V2_MODE || "normal");
  }

  function capturePreset(name, description) {
    return {
      id: safeId("zero-preset"),
      name: String(name || "無題プリセット").slice(0, 60),
      description: String(description || "").slice(0, 140),
      createdAt: new Date().toISOString(),
      mode: currentMode(),
      selections: selectedCheckboxes().map(selectionSnapshot)
    };
  }

  function createPresetDialog() {
    const existing = document.getElementById("zero-preset-dialog");
    if (existing) {
      ui.presetDialog = existing;
      ui.presetName = document.getElementById("zero-preset-name");
      ui.presetDescription = document.getElementById("zero-preset-description");
      ui.savePresetButton = document.getElementById("zero-save-preset");
      ui.presetSelected = existing.querySelector(".zero-preset-selected");
      ui.presetList = document.getElementById("zero-preset-list");
      return !!(ui.presetName && ui.presetDescription && ui.savePresetButton && ui.presetSelected && ui.presetList);
    }
    const dialog = create("dialog", "zero-assist-dialog");
    dialog.id = "zero-preset-dialog";

    const shell = create("div", "zero-assist-dialog__shell");
    const header = create("header", "zero-assist-dialog__header");
    const headingWrap = create("div");
    headingWrap.appendChild(create("span", "zero-assist-eyebrow", "MY PRESETS"));
    headingWrap.appendChild(create("h2", "", "マイプリセット"));
    headingWrap.appendChild(create("p", "", "現在のチェック状態を名前付きで保存します。"));
    const close = create("button", "zero-dialog-close", "×");
    close.type = "button";
    close.dataset.zeroDialogClose = "preset";
    close.setAttribute("aria-label", "閉じる");
    header.appendChild(headingWrap);
    header.appendChild(close);

    const saveBox = create("section", "zero-preset-save");
    const name = create("input", "zero-preset-input");
    name.id = "zero-preset-name";
    name.type = "text";
    name.maxLength = 60;
    name.placeholder = "例：白翼キャラ基本セット";
    name.setAttribute("aria-label", "プリセット名");

    const description = create("input", "zero-preset-input");
    description.id = "zero-preset-description";
    description.type = "text";
    description.maxLength = 140;
    description.placeholder = "用途メモ（任意）";
    description.setAttribute("aria-label", "プリセット説明");

    const saveRow = create("div", "zero-preset-save__row");
    const saveButton = create("button", "zero-primary-button", "現在の選択を保存");
    saveButton.type = "button";
    saveButton.id = "zero-save-preset";
    const selected = create("span", "zero-preset-selected", "選択 0件");
    saveRow.appendChild(saveButton);
    saveRow.appendChild(selected);

    saveBox.appendChild(name);
    saveBox.appendChild(description);
    saveBox.appendChild(saveRow);

    const list = create("div", "zero-preset-list");
    list.id = "zero-preset-list";

    shell.appendChild(header);
    shell.appendChild(saveBox);
    shell.appendChild(list);
    dialog.appendChild(shell);
    document.body.appendChild(dialog);

    ui.presetDialog = dialog;
    ui.presetName = name;
    ui.presetDescription = description;
    ui.savePresetButton = saveButton;
    ui.presetSelected = selected;
    ui.presetList = list;
    return true;
  }

  function openDialog(dialog) {
    if (!dialog) return;
    try {
      if (typeof dialog.showModal === "function") {
        if (!dialog.open) dialog.showModal();
      } else {
        dialog.setAttribute("open", "");
        dialog.classList.add("is-open");
      }
    } catch (_) {
      dialog.setAttribute("open", "");
      dialog.classList.add("is-open");
    }
  }

  function closeDialog(dialog) {
    if (!dialog) return;
    try {
      if (typeof dialog.close === "function" && dialog.open) dialog.close();
      else dialog.removeAttribute("open");
    } catch (_) {
      dialog.removeAttribute("open");
    }
    dialog.classList.remove("is-open");
  }

  function openPresetDialog() {
    renderPresetDialog();
    openDialog(ui.presetDialog);
    setTimeout(function () {
      if (ui.presetName) ui.presetName.focus();
    }, 50);
  }

  function renderPresetDialog() {
    if (!ui.presetList) return;
    const selected = selectedCheckboxes().length;
    ui.presetSelected.textContent = "選択 " + selected + "件";
    ui.savePresetButton.disabled = selected === 0;
    ui.presetList.textContent = "";

    if (!state.presets.length) {
      const empty = create("div", "zero-preset-empty");
      empty.appendChild(create("strong", "", "保存済みプリセットはありません"));
      empty.appendChild(create("p", "", "棚から項目を選び、上のボタンで最初のセットを保存できます。"));
      ui.presetList.appendChild(empty);
      return;
    }

    state.presets.forEach(function (preset) {
      const card = create("article", "zero-preset-card");
      card.dataset.zeroPresetId = preset.id;

      const meta = create("div", "zero-preset-card__meta");
      meta.appendChild(create("strong", "", preset.name || "無題プリセット"));
      if (preset.description) meta.appendChild(create("p", "", preset.description));
      const date = preset.createdAt ? new Date(preset.createdAt) : null;
      const validDate = date && !Number.isNaN(date.getTime());
      meta.appendChild(create("small", "", (preset.selections || []).length + "項目" + (validDate ? "・" + date.toLocaleString("ja-JP") : "")));

      const actions = create("div", "zero-preset-card__actions");
      const apply = create("button", "zero-preset-apply", "呼び出す");
      apply.type = "button";
      apply.dataset.zeroPresetApply = preset.id;
      const remove = create("button", "zero-preset-delete", "削除");
      remove.type = "button";
      remove.dataset.zeroPresetDelete = preset.id;
      actions.appendChild(apply);
      actions.appendChild(remove);

      card.appendChild(meta);
      card.appendChild(actions);
      ui.presetList.appendChild(card);
    });
  }

  function saveCurrentPreset() {
    const selected = selectedCheckboxes();
    if (!selected.length) {
      showToast("保存する項目を先に選んでください。", "warning");
      return;
    }

    const defaultName = "マイセット " + new Date().toLocaleDateString("ja-JP");
    const name = cleanText(ui.presetName.value) || defaultName;
    const preset = capturePreset(name, cleanText(ui.presetDescription.value));
    state.presets.unshift(preset);
    state.presets = state.presets.slice(0, 40);
    saveJSON(STORAGE.presets, state.presets);
    ui.presetName.value = "";
    ui.presetDescription.value = "";
    renderPresetDialog();
    showToast("「" + preset.name + "」を保存しました。", "success");
  }

  function buildCheckboxMaps() {
    const maps = {
      key: new Map(),
      id: new Map(),
      packId: new Map(),
      values: new Map()
    };

    function push(map, key, checkbox) {
      if (!key) return;
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(checkbox);
    }

    allPromptCheckboxes().forEach(function (checkbox) {
      const key = checkboxKey(checkbox);
      push(maps.key, key, checkbox);
      push(maps.id, checkbox.id, checkbox);
      const data = checkbox.dataset || {};
      push(maps.packId, data.packId, checkbox);
      const section = sectionFor(checkbox);
      const sectionId = section && section.id ? section.id : "";
      [data.val, data.en, data.ja].forEach(function (value) {
        if (!value) return;
        const compound = sectionId + "|" + value;
        push(maps.values, compound, checkbox);
      });
    });
    return maps;
  }

  function resolveSnapshot(snapshot, maps, used) {
    if (!snapshot) return null;
    const candidates = [];
    function add(values) {
      (values || []).forEach(function (checkbox) {
        if (checkbox && !candidates.includes(checkbox)) candidates.push(checkbox);
      });
    }

    if (snapshot.packId) add(maps.packId.get(snapshot.packId));
    if (snapshot.inputId) add(maps.id.get(snapshot.inputId));
    if (snapshot.key) add(maps.key.get(snapshot.key));

    if (snapshot.sectionId && Number.isInteger(snapshot.sectionIndex) && snapshot.sectionIndex >= 0) {
      const section = document.getElementById(snapshot.sectionId);
      if (section) add([section.querySelectorAll('input[type="checkbox"]')[snapshot.sectionIndex]]);
    }

    const values = [snapshot.val, snapshot.en, snapshot.ja];
    for (let i = 0; i < values.length; i++) {
      if (!values[i]) continue;
      const compound = (snapshot.sectionId || "") + "|" + values[i];
      add(maps.values.get(compound));
    }
    const available = candidates.filter(function (checkbox) { return !used || !used.has(checkbox); });
    if(snapshot.outputChannel){
      const channelMatch = available.find(function(checkbox){
        const channel = checkbox.dataset && checkbox.dataset.outputChannel === "negative" ? "negative" : "positive";
        return channel === snapshot.outputChannel;
      });
      if(channelMatch) return channelMatch;
    }
    return available[0] || null;
  }

  function closeBuilderShelves() {
    Array.from(document.querySelectorAll("#sections details[open]"))
      .sort(function (a, b) {
        return b.querySelectorAll("details").length - a.querySelectorAll("details").length;
      })
      .forEach(function (details) {
        details.open = false;
      });
  }

  function restorePreset(preset) {
    if (!preset || !Array.isArray(preset.selections)) return;
    const currentlySelected = selectedCheckboxes().length;
    if (currentlySelected && !window.confirm("現在の選択を外し、「" + preset.name + "」へ入れ替えますか？")) return;

    const boxes = allPromptCheckboxes();
    const maps = buildCheckboxMaps();
    const used = new Set();
    let restored = 0;
    let missing = 0;

    window.__historyRestoring = true;
    window.__historySilentRestoring = true;
    try {
      closeBuilderShelves();
      boxes.forEach(function (checkbox) {
        checkbox.checked = false;
      });

      preset.selections.forEach(function (snapshot) {
        const checkbox = resolveSnapshot(snapshot, maps, used);
        if (!checkbox) {
          missing++;
          return;
        }
        used.add(checkbox);
        checkbox.checked = true;
        if (snapshot.animalPoseLinkedBy) {
          checkbox.setAttribute("data-animal-pose-linked-by", snapshot.animalPoseLinkedBy);
        }
        if (snapshot.animalPoseManualKeep) {
          checkbox.setAttribute("data-animal-pose-manual-keep", snapshot.animalPoseManualKeep);
        }
        openAncestors(checkbox);
        restored++;
      });
    } finally {
      window.__historyRestoring = false;
      window.__historySilentRestoring = false;
    }

    const modeSelect = document.getElementById("prompt-compiler-v2-mode");
    let modeChanged = false;
    if (modeSelect && preset.mode && Array.from(modeSelect.options).some(function (option) { return option.value === preset.mode; })) {
      modeChanged = modeSelect.value !== preset.mode;
      modeSelect.value = preset.mode;
      if (modeChanged) modeSelect.dispatchEvent(new Event("change", { bubbles: true }));
    }

    setTimeout(function () {
      if ((!modeChanged || !document.getElementById("out").value) && typeof window.__builderGenerateOutput === "function") {
        window.__builderGenerateOutput();
      }
      window.dispatchEvent(new CustomEvent("builderHistoryRestored", {
        detail: { restoredCount: restored, source: "zero-assist-preset" }
      }));
      requestRefresh(20);
    }, 20);

    closeDialog(ui.presetDialog);
    showToast("「" + preset.name + "」を" + restored + "項目で復元しました" + (missing ? "（未検出 " + missing + "件）" : "") + "。", missing ? "warning" : "success");
  }

  function deletePreset(id) {
    const preset = state.presets.find(function (entry) { return entry.id === id; });
    if (!preset) return;
    if (!window.confirm("「" + preset.name + "」を削除しますか？")) return;
    state.presets = state.presets.filter(function (entry) { return entry.id !== id; });
    saveJSON(STORAGE.presets, state.presets);
    renderPresetDialog();
    showToast("プリセットを削除しました。", "info");
  }

  function splitPrompt(text) {
    const output = [];
    let buffer = "";
    let depth = 0;
    let quote = "";

    for (let i = 0; i < String(text || "").length; i++) {
      const char = text[i];
      if (quote) {
        buffer += char;
        if (char === quote && text[i - 1] !== "\\") quote = "";
        continue;
      }
      if (char === '"' || char === "'") {
        quote = char;
        buffer += char;
        continue;
      }
      if (char === "(" || char === "[" || char === "{") depth++;
      else if (char === ")" || char === "]" || char === "}") depth = Math.max(0, depth - 1);

      if (char === "," && depth === 0) {
        if (buffer.trim()) output.push(buffer.trim());
        buffer = "";
      } else {
        buffer += char;
      }
    }
    if (buffer.trim()) output.push(buffer.trim());
    return output;
  }

  function normalizeToken(token) {
    return String(token || "")
      .toLowerCase()
      .replace(/^[\s\(\[\{"']+/, "")
      .replace(/[\s\)\]\}"']+$/, "")
      .replace(/:\s*[-+]?\d+(?:\.\d+)?%?\s*$/, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function addDiagnostic(list, severity, title, detail) {
    list.push({
      severity: severity,
      title: title,
      detail: detail
    });
  }

  function hasToken(normalized, pattern) {
    return normalized.some(function (token) {
      return typeof pattern === "string" ? token === pattern : pattern.test(token);
    });
  }

  function buildDiagnostics() {
    const out = document.getElementById("out");
    const text = out ? out.value.trim() : "";
    const selected = selectedCheckboxes();
    const tokens = splitPrompt(text);
    const normalized = tokens.map(normalizeToken).filter(Boolean);
    let negativeTokens = [];
    try {
      if(window.ShimaQualityControl && typeof window.ShimaQualityControl.getNegativeTags === "function"){
        negativeTokens = window.ShimaQualityControl.getNegativeTags();
      }
    } catch (_) {}
    const normalizedNegative = negativeTokens.map(normalizeToken).filter(Boolean);
    const list = [];

    if (!selected.length) {
      addDiagnostic(list, "info", "まだ部品が選ばれていません", "棚から項目を選ぶと、選択数・重複・文字数を診断します。");
    } else if (!text) {
      addDiagnostic(list, "info", "選択内容がまだ出力されていません", "「生成」を押すと、完成したプロンプトを診断できます。");
    }

    if (text.length > 2000) {
      addDiagnostic(list, "error", "2000文字を超えています", "現在 " + text.length + "文字です。モデル側で末尾が切れる可能性があります。");
    } else if (text.length >= 1800) {
      addDiagnostic(list, "warning", "文字数上限へ近づいています", "現在 " + text.length + "文字です。重みの低い装飾を整理する余地があります。");
    } else if (text.length >= 1500) {
      addDiagnostic(list, "info", "長めのプロンプトです", "現在 " + text.length + "文字です。生成先の上限だけ確認してください。");
    }

    const occurrences = new Map();
    normalized.forEach(function (token) {
      if (token === "break") return;
      occurrences.set(token, (occurrences.get(token) || 0) + 1);
    });
    const duplicates = Array.from(occurrences.entries()).filter(function (entry) {
      return entry[1] > 1;
    });
    if (duplicates.length) {
      addDiagnostic(
        list,
        "warning",
        "同じタグが重複しています",
        duplicates.slice(0, 6).map(function (entry) { return entry[0] + " ×" + entry[1]; }).join("、") +
          (duplicates.length > 6 ? " ほか" + (duplicates.length - 6) + "件" : "")
      );
    }

    const qualityPattern = /\b(masterpiece|best quality|highest quality|high quality|ultra detailed|absurdres|highres|8k|4k|award winning|extremely detailed)\b/i;
    const qualityTokens = normalized.filter(function (token) { return qualityPattern.test(token); });
    if (qualityTokens.length >= 9) {
      addDiagnostic(list, "warning", "品質語が多めです", qualityTokens.length + "個の品質系タグがあります。主役や構図より強くなっていないか確認してください。");
    }

    const negativePattern = /\b(worst quality|low quality|bad anatomy|bad hands|extra fingers|missing fingers|text|watermark|signature|jpeg artifacts)\b/i;
    const negativeLike = normalized.filter(function (token) { return negativePattern.test(token); });
    if (negativeLike.length >= 2) {
      addDiagnostic(list, "info", "Positive側に抑制・劣化表現があります", negativeLike.slice(0, 5).join("、") + "。意図的な低品質・レトロ・実験表現なら、このままPositiveで問題ありません。");
    }

    const positiveCores = new Set(normalized.filter(function(token){ return token && token !== "break"; }));
    const channelCollisions = Array.from(new Set(normalizedNegative.filter(function(token){
      return token && token !== "break" && positiveCores.has(token);
    })));
    if(channelCollisions.length){
      addDiagnostic(
        list,
        "warning",
        "PositiveとNegativeに同じ語があります",
        channelCollisions.slice(0, 6).join("、") + (channelCollisions.length > 6 ? " ほか" + (channelCollisions.length - 6) + "件" : "") + "。意図的な場合を除き、効果が競合する可能性があります。自動では解除しません。"
      );
    }

    const conflictPairs = [
      ["day", "night", "昼と夜"],
      ["indoors", "outdoors", "屋内と屋外"],
      ["front view", "back view", "正面と背面"],
      ["looking at viewer", "looking away", "視線方向"],
      ["monochrome", "vibrant colors", "単色と鮮やかな色"]
    ];
    conflictPairs.forEach(function (pair) {
      if (hasToken(normalized, pair[0]) && hasToken(normalized, pair[1])) {
        addDiagnostic(list, "info", pair[2] + "の指定が同居しています", "意図した演出なら問題ありません。偶発的な組み合わせだけ確認してください。");
      }
    });

    const hasSolo = hasToken(normalized, "solo");
    const hasGroup = hasToken(normalized, /\b(group|multiple girls|multiple boys|2girls|3girls|4girls|2boys|3boys|4boys)\b/i);
    const hasGirl = hasToken(normalized, "1girl");
    const hasBoy = hasToken(normalized, "1boy");
    if (hasSolo && (hasGroup || (hasGirl && hasBoy))) {
      addDiagnostic(list, "warning", "soloと複数人物指定が同居しています", "単独絵か複数人絵か、狙いに合う人数指定を残してください。");
    }

    const girlCounts = ["1girl", "2girls", "3girls", "4girls", "5girls"].filter(function (value) { return hasToken(normalized, value); });
    const boyCounts = ["1boy", "2boys", "3boys", "4boys", "5boys"].filter(function (value) { return hasToken(normalized, value); });
    if (girlCounts.length > 1 || boyCounts.length > 1) {
      addDiagnostic(list, "warning", "同じ人物系の人数指定が複数あります", girlCounts.concat(boyCounts).join("、") + "。必要な人数だけ残すと安定します。");
    }

    return {
      issues: list,
      stats: {
        selected: selected.length,
        tokens: tokens.length,
        chars: text.length,
        duplicates: duplicates.length
      }
    };
  }

  function createDiagnosticsUI() {
    const stats = document.getElementById("prompt-stats");
    if (stats && !document.getElementById("zero-diagnostics-button")) {
      const button = create("button", "zero-diagnostics-button");
      button.type = "button";
      button.id = "zero-diagnostics-button";
      button.appendChild(create("span", "", "診断"));
      const badge = create("strong", "", "0");
      badge.id = "zero-diagnostics-badge";
      button.appendChild(badge);
      stats.appendChild(button);
      ui.diagnosticsButton = button;
      ui.diagnosticsBadge = badge;
    } else {
      ui.diagnosticsButton = document.getElementById("zero-diagnostics-button");
      ui.diagnosticsBadge = document.getElementById("zero-diagnostics-badge");
    }

    const existing = document.getElementById("zero-diagnostics-dialog");
    if (existing) {
      ui.diagnosticsDialog = existing;
      ui.diagnosticsSummary = document.getElementById("zero-diagnostics-summary");
      ui.diagnosticsList = document.getElementById("zero-diagnostics-list");
      return !!(ui.diagnosticsButton && ui.diagnosticsBadge && ui.diagnosticsSummary && ui.diagnosticsList);
    }
    const dialog = create("dialog", "zero-assist-dialog zero-diagnostics-dialog");
    dialog.id = "zero-diagnostics-dialog";
    const shell = create("div", "zero-assist-dialog__shell");
    const header = create("header", "zero-assist-dialog__header");
    const headingWrap = create("div");
    headingWrap.appendChild(create("span", "zero-assist-eyebrow", "READ ONLY CHECK"));
    headingWrap.appendChild(create("h2", "", "プロンプト診断"));
    headingWrap.appendChild(create("p", "", "選択や出力は変更せず、確認点だけを表示します。"));
    const close = create("button", "zero-dialog-close", "×");
    close.type = "button";
    close.dataset.zeroDialogClose = "diagnostics";
    close.setAttribute("aria-label", "閉じる");
    header.appendChild(headingWrap);
    header.appendChild(close);

    const summary = create("div", "zero-diagnostics-summary");
    summary.id = "zero-diagnostics-summary";
    const list = create("div", "zero-diagnostics-list");
    list.id = "zero-diagnostics-list";
    shell.appendChild(header);
    shell.appendChild(summary);
    shell.appendChild(list);
    dialog.appendChild(shell);
    document.body.appendChild(dialog);

    ui.diagnosticsDialog = dialog;
    ui.diagnosticsSummary = summary;
    ui.diagnosticsList = list;
    return !!(ui.diagnosticsButton && ui.diagnosticsBadge);
  }

  function severityRank(value) {
    return value === "error" ? 3 : value === "warning" ? 2 : value === "info" ? 1 : 0;
  }

  function updateDiagnostics(renderDialog) {
    if (!ui.diagnosticsButton) return;
    const result = buildDiagnostics();
    state.diagnostics = result.issues;
    const attention = result.issues.filter(function (issue) {
      return issue.severity === "error" || issue.severity === "warning";
    }).length;
    const total = result.issues.length;
    const highest = result.issues.reduce(function (rank, issue) {
      return Math.max(rank, severityRank(issue.severity));
    }, 0);

    ui.diagnosticsBadge.textContent = String(attention || total);
    ui.diagnosticsButton.dataset.level = highest >= 3 ? "error" : highest === 2 ? "warning" : total ? "info" : "ok";
    ui.diagnosticsButton.title = attention ? "要確認 " + attention + "件" : total ? "参考情報 " + total + "件" : "問題は見つかりませんでした";

    if (renderDialog || (ui.diagnosticsDialog && ui.diagnosticsDialog.open)) {
      renderDiagnostics(result);
    }
  }

  function renderDiagnostics(result) {
    if (!ui.diagnosticsSummary || !ui.diagnosticsList) return;
    ui.diagnosticsSummary.textContent = "";
    [
      ["選択", result.stats.selected],
      ["タグ", result.stats.tokens],
      ["文字", result.stats.chars],
      ["重複", result.stats.duplicates]
    ].forEach(function (entry) {
      const item = create("div", "zero-diagnostics-summary__item");
      item.appendChild(create("span", "", entry[0]));
      item.appendChild(create("strong", "", entry[1]));
      ui.diagnosticsSummary.appendChild(item);
    });

    ui.diagnosticsList.textContent = "";
    if (!result.issues.length) {
      const ok = create("div", "zero-diagnostic-card zero-diagnostic-card--ok");
      ok.appendChild(create("strong", "", "✓ 現在、目立つ問題はありません"));
      ok.appendChild(create("p", "", "この診断は補助です。意図した矛盾表現や演出はそのまま利用できます。"));
      ui.diagnosticsList.appendChild(ok);
      return;
    }

    result.issues.forEach(function (issue) {
      const card = create("article", "zero-diagnostic-card");
      card.dataset.severity = issue.severity;
      const icon = issue.severity === "error" ? "!" : issue.severity === "warning" ? "△" : "i";
      card.appendChild(create("span", "zero-diagnostic-card__icon", icon));
      const text = create("div");
      text.appendChild(create("strong", "", issue.title));
      text.appendChild(create("p", "", issue.detail));
      card.appendChild(text);
      ui.diagnosticsList.appendChild(card);
    });
  }

  function scheduleDiagnostics(delay) {
    clearTimeout(state.diagnosticTimer);
    state.diagnosticTimer = setTimeout(function () {
      updateDiagnostics(false);
    }, delay == null ? 120 : delay);
  }

  function openDiagnostics() {
    updateDiagnostics(true);
    openDialog(ui.diagnosticsDialog);
  }

  function createMobileSwitch() {
    const footer = document.getElementById("mini-ui-fixed");
    if (!footer) return false;
    let changed = false;
    let nav = document.getElementById("zero-mobile-view-switch");
    if (!nav) {
      nav = create("nav", "zero-mobile-view-switch");
      nav.id = "zero-mobile-view-switch";
      nav.setAttribute("aria-label", "スマートフォン表示切替");
      footer.insertBefore(nav, footer.firstChild);
      changed = true;
    }

    let shelf = nav.querySelector('[data-zero-mobile-view="shelf"]');
    if (!shelf) {
      shelf = create("button", "", "☷ 棚を選ぶ");
      shelf.type = "button";
      shelf.dataset.zeroMobileView = "shelf";
      nav.insertBefore(shelf, nav.firstChild);
      changed = true;
    }

    let output = nav.querySelector('[data-zero-mobile-view="output"]');
    if (!output) {
      output = create("button", "", "↝ 出力・生成 ");
      output.type = "button";
      output.dataset.zeroMobileView = "output";
      nav.appendChild(output);
      changed = true;
    }

    let count = document.getElementById("zero-mobile-selection-count");
    if (!count || !output.contains(count)) {
      count = create("span", "", String(selectedCheckboxes().length));
      count.id = "zero-mobile-selection-count";
      output.appendChild(count);
      changed = true;
    }

    ui.mobileSwitch = nav;
    ui.mobileCount = count;
    setMobileView(state.mobileView, false);
    if (changed) {
      window.dispatchEvent(new CustomEvent("zeroAssistMobileSwitchReady", {
        detail: { version: VERSION }
      }));
    }
    return true;
  }

  function observeMobileSwitchIntegrity() {
    if (state.mobileIntegrityObserver || typeof MutationObserver !== "function") return;
    const footer = document.getElementById("mini-ui-fixed");
    if (!footer) return;
    state.mobileIntegrityObserver = new MutationObserver(function () {
      const nav = document.getElementById("zero-mobile-view-switch");
      const ready = nav &&
        nav.querySelector('[data-zero-mobile-view="shelf"]') &&
        nav.querySelector('[data-zero-mobile-view="output"]') &&
        document.getElementById("zero-mobile-selection-count");
      if (!ready) createMobileSwitch();
    });
    state.mobileIntegrityObserver.observe(footer, { childList: true, subtree: true });
  }

  function syncFooterHeight() {
    const footer = document.getElementById("mini-ui-fixed");
    if (!footer) return;
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        const height = Math.max(0, Math.ceil(footer.getBoundingClientRect().height || footer.offsetHeight || 0));
        if (height) document.documentElement.style.setProperty("--builder-footer-height", height + "px");
        window.dispatchEvent(new Event("resize"));
      });
    });
  }

  function setMobileView(view, persist) {
    const next = view === "output" ? "output" : "shelf";
    state.mobileView = next;
    document.body.dataset.zeroMobileView = next;
    if (persist !== false) {
      try { localStorage.setItem(STORAGE.mobileView, next); } catch (_) {}
    }

    if (ui.mobileSwitch) {
      ui.mobileSwitch.querySelectorAll("[data-zero-mobile-view]").forEach(function (button) {
        const active = button.dataset.zeroMobileView === next;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
      });
    }
    syncFooterHeight();
  }

  function updateMobileCount(count) {
    if (ui.mobileCount) ui.mobileCount.textContent = String(count == null ? selectedCheckboxes().length : count);
  }

  function requestRefresh(delay) {
    const wait = delay == null ? 60 : delay;
    const due = Date.now() + wait;
    if (state.refreshTimer && state.refreshDue && state.refreshDue <= due) return;
    clearTimeout(state.refreshTimer);
    state.refreshDue = due;
    state.refreshTimer = setTimeout(function () {
      state.refreshTimer = 0;
      state.refreshDue = 0;
      refreshTray();
      decorateOpenShelves();
      if (state.selectedOnly || state.favoritesOnly) scheduleFilter(0);
      scheduleDiagnostics(0);
      if (ui.presetDialog && ui.presetDialog.open) renderPresetDialog();
    }, wait);
  }

  function handleClick(event) {
    const star = event.target.closest && event.target.closest(".zero-favorite-star");
    if (star) {
      event.preventDefault();
      event.stopPropagation();
      const label = star.closest("label");
      toggleFavorite(label ? label.querySelector('input[type="checkbox"]') : null);
      return;
    }

    const selectedFilter = event.target.closest && event.target.closest("#zero-selected-filter");
    if (selectedFilter) {
      state.selectedOnly = !state.selectedOnly;
      scheduleFilter(0);
      return;
    }

    const favoritesFilter = event.target.closest && event.target.closest("#zero-favorites-filter");
    if (favoritesFilter) {
      state.favoritesOnly = !state.favoritesOnly;
      scheduleFilter(0);
      return;
    }

    if (event.target.closest && event.target.closest("#zero-presets-button")) {
      openPresetDialog();
      return;
    }

    const chip = event.target.closest && event.target.closest(".zero-selection-chip");
    const action = event.target.closest && event.target.closest("[data-zero-action]");
    if (chip && action) {
      const checkbox = state.checkboxByKey.get(chip.dataset.zeroCheckboxKey);
      if (action.dataset.zeroAction === "jump") revealCheckbox(checkbox);
      else if (action.dataset.zeroAction === "favorite") toggleFavorite(checkbox);
      else if (action.dataset.zeroAction === "remove") removeSelection(checkbox);
      return;
    }

    if (event.target.closest && event.target.closest("#zero-save-preset")) {
      saveCurrentPreset();
      return;
    }

    const applyPreset = event.target.closest && event.target.closest("[data-zero-preset-apply]");
    if (applyPreset) {
      const preset = state.presets.find(function (entry) { return entry.id === applyPreset.dataset.zeroPresetApply; });
      restorePreset(preset);
      return;
    }

    const deleteButton = event.target.closest && event.target.closest("[data-zero-preset-delete]");
    if (deleteButton) {
      deletePreset(deleteButton.dataset.zeroPresetDelete);
      return;
    }

    const dialogClose = event.target.closest && event.target.closest("[data-zero-dialog-close]");
    if (dialogClose) {
      closeDialog(dialogClose.dataset.zeroDialogClose === "preset" ? ui.presetDialog : ui.diagnosticsDialog);
      return;
    }

    if (event.target.closest && event.target.closest("#zero-diagnostics-button")) {
      openDiagnostics();
      return;
    }

    const mobile = event.target.closest && event.target.closest("[data-zero-mobile-view]");
    if (mobile) {
      setMobileView(mobile.dataset.zeroMobileView, true);
      return;
    }

    if (event.target === ui.presetDialog) closeDialog(ui.presetDialog);
    if (event.target === ui.diagnosticsDialog) closeDialog(ui.diagnosticsDialog);

    const button = event.target.closest && event.target.closest("button");
    if (button && button.id === "resetBtn") return;
    if (button && (
      button.id === "genBtn" ||
      button.classList.contains("category-reset-btn") ||
      button.id === "footer-history-btn"
    )) {
      requestRefresh(180);
    }
  }

  function handleKeydown(event) {
    const star = event.target.closest && event.target.closest(".zero-favorite-star");
    if (!star || (event.key !== "Enter" && event.key !== " ")) return;
    event.preventDefault();
    event.stopPropagation();
    const label = star.closest("label");
    toggleFavorite(label ? label.querySelector('input[type="checkbox"]') : null);
  }

  function bindEvents() {
    if (state.eventsBound) return;
    state.eventsBound = true;
    document.addEventListener("click", handleClick, true);
    document.addEventListener("keydown", handleKeydown, true);

    document.addEventListener("change", function (event) {
      if (window.__SHIMA_BULK_RESET__) return;
      if (isPromptCheckbox(event.target)) requestRefresh(70);
      if (event.target && event.target.id === "prompt-compiler-v2-mode") scheduleDiagnostics(150);
    }, true);

    document.addEventListener("builderResetAll", function () { requestRefresh(0); }, true);

    document.addEventListener("input", function (event) {
      if (event.target && event.target.closest && event.target.closest("#ui-search-bar")) {
        if (!state.restoringFilter && (state.selectedOnly || state.favoritesOnly)) scheduleFilter(20);
      }
      if (event.target && event.target.id === "out") scheduleDiagnostics(80);
    }, true);

    document.addEventListener("toggle", function (event) {
      if (event.target && event.target.matches && event.target.matches("#sections details[open]")) {
        queueDecorate(event.target);
      }
    }, true);

    window.addEventListener("builderHistoryRestored", function () { requestRefresh(50); });
    window.addEventListener("builder:mounted", function () { requestRefresh(120); });
    window.addEventListener("promptPartMounted", function () { requestRefresh(120); });

    const sections = document.getElementById("sections");
    if (sections && typeof MutationObserver === "function") {
      const observer = new MutationObserver(function (mutations) {
        let shouldRefresh = false;
        mutations.forEach(function (mutation) {
          mutation.addedNodes.forEach(function (node) {
            if (node.nodeType !== 1) return;
            if (node.classList && node.classList.contains("zero-favorite-star")) return;
            const relevant = (node.matches && node.matches('details, label, input[type="checkbox"]')) ||
              (node.querySelector && node.querySelector('details, label, input[type="checkbox"]'));
            if (!relevant) return;
            shouldRefresh = true;
            if (node.matches && node.matches("details[open], label")) queueDecorate(node);
            else if (node.querySelector && node.querySelector("details[open]")) queueDecorate(node);
          });
        });
        if (shouldRefresh) requestRefresh(180);
      });
      observer.observe(sections, { childList: true, subtree: true });
      ui.sectionsObserver = observer;
    }
  }

  function mount() {
    if (state.mounted) {
      const healthy = createMobileSwitch() &&
        document.getElementById("zero-assist-toolbar") &&
        document.getElementById("zero-selection-tray");
      if (healthy) {
        observeMobileSwitchIntegrity();
        return true;
      }
      state.mounted = false;
    }
    const sections = document.getElementById("sections");
    const search = document.getElementById("ui-search-bar");
    const footer = document.getElementById("mini-ui-fixed");
    if (!sections || !search || !footer) return false;

    try {
      // The three-view mobile switch is the primary escape route on a phone.
      // Build it first, then hydrate the remaining helpers. Every creator is
      // idempotent so a partially completed first attempt can repair itself.
      if (!createMobileSwitch()) return false;
      if (!createToolbar()) return false;
      if (!createSelectionTray()) return false;
      if (!createPresetDialog()) return false;
      if (!createDiagnosticsUI()) return false;
    } catch (error) {
      state.mounted = false;
      console.error("[ZeroAssist] UI mount deferred:", error);
      return false;
    }

    let toast = document.getElementById("zero-assist-toast");
    if (!toast) {
      toast = create("div", "zero-assist-toast");
      toast.id = "zero-assist-toast";
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-live", "polite");
      document.body.appendChild(toast);
    }
    ui.toast = toast;

    state.mounted = true;
    bindEvents();
    observeMobileSwitchIntegrity();
    updateFilterButtons();
    requestRefresh(0);
    setTimeout(function () { requestRefresh(0); }, 700);
    setTimeout(function () { requestRefresh(0); }, 1800);

    window.ZeroAssist = {
      version: VERSION,
      refresh: function () { requestRefresh(0); },
      reveal: revealCheckbox,
      clearFilters: function () {
        state.selectedOnly = false;
        state.favoritesOnly = false;
        deactivateFilter();
        updateFilterButtons();
      },
      diagnostics: function () { return buildDiagnostics(); },
      openPresets: openPresetDialog,
      openDiagnostics: openDiagnostics,
      setMobileView: function (view) { setMobileView(view, true); },
      ensureUI: function () { return mount(); },
      getState: function () {
        return {
          favorites: state.favorites.size,
          presets: state.presets.length,
          selected: selectedCheckboxes().length,
          selectedOnly: state.selectedOnly,
          favoritesOnly: state.favoritesOnly,
          mobileView: state.mobileView
        };
      }
    };

    window.dispatchEvent(new CustomEvent("zeroAssistMounted", { detail: { version: VERSION } }));
    return true;
  }

  function stopBootWait() {
    clearTimeout(state.bootTimer);
    state.bootTimer = 0;
    if (state.bootObserver) {
      state.bootObserver.disconnect();
      state.bootObserver = null;
    }
  }

  function observeBootReadiness() {
    if (state.bootObserver || typeof MutationObserver !== "function") return;
    const sections = document.getElementById("sections");
    if (!sections) return;
    state.bootObserver = new MutationObserver(function () { boot(); });
    state.bootObserver.observe(sections, { childList: true });
  }

  function boot() {
    clearTimeout(state.bootTimer);
    state.bootTimer = 0;
    if (mount()) {
      stopBootWait();
      return;
    }
    observeBootReadiness();
    // No fixed attempt limit: first load on Android can legitimately take more
    // than twenty seconds when tens of thousands of choices are assembled.
    state.bootTimer = setTimeout(boot, 1200);
  }

  window.__ensureZeroAssistMounted = boot;
  window.addEventListener("builder:mounted", boot);
  window.addEventListener("promptPartMounted", boot);
  window.addEventListener("pageshow", boot);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
