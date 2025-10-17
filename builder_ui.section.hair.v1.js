// ==== file: builder_ui.section.hair.v1.js ====
(function () {
  "use strict";
  if (!window.UI_REG || !window.UI_REG.registerSection) return;

  // 共通UIユーティリティ（最小）
  const $ = (sel, root = document) => root.querySelector(sel);

  function makeChip(tag, jp) {
    const w = document.createElement("label");
    w.className = "chip";
    w.innerHTML = `
      <input type="checkbox" data-tag="${tag}">
      <span><b>${tag}</b> ／ ${jp}</span>
    `;
    return w;
  }

  function makeGroup(title, items) {
    const wrap = document.createElement("details");
    wrap.className = "ui-group";
    // デフォルトは閉じた状態
    wrap.open = false;

    const sum = document.createElement("summary");
    const count = document.createElement("small");
    count.style.opacity = ".6";
    count.style.marginLeft = "6px";
    sum.textContent = title + " ";
    sum.appendChild(count);

    const inner = document.createElement("div");
    inner.className = "inner";

    // アイテム描画
    items.forEach(([tag, jp]) => inner.appendChild(makeChip(tag, jp)));

    // 件数表示（チップ数）
    count.textContent = `(${items.length})`;

    wrap.appendChild(sum);
    wrap.appendChild(inner);
    return wrap;
  }

  // 髪カテゴリ定義 ---------------------------------------
  // ※タグは英語、表示は「英語タグ ／ 日本語」表記
  const GROUPS = [
    {
      title: "Length / 長さ",
      items: [
        ["short hair", "ショート"],
        ["medium hair", "ミディアム"],
        ["long hair", "ロング"],
        ["very long hair", "超ロング"],
        ["bob cut", "ボブカット"],
      ],
    },
    {
      title: "Style / スタイル",
      items: [
        ["ponytail", "ポニーテール"],
        ["twin tails", "ツインテール"],
        ["side ponytail", "サイドポニー"],
        ["braid", "三つ編み"],
        ["braided bun", "編みお団子"],
        ["bun", "お団子ヘア"],
        ["ahoge", "アホ毛"],
        ["wavy hair", "ウェーブ"],
        ["curly hair", "カール"],
        ["straight hair", "ストレート"],
        ["messy hair", "無造作ヘア"],
        ["hime cut", "姫カット"],
      ],
    },
    {
      title: "Bangs / 前髪",
      items: [
        ["bangs", "前髪あり"],
        ["blunt bangs", "ぱっつん前髪"],
        ["side bangs", "流し前髪"],
        ["see-through bangs", "シースルー前髪"],
        ["no bangs", "前髪なし"],
      ],
    },
    {
      title: "Color / 色",
      items: [
        ["black hair", "黒髪"],
        ["brown hair", "茶髪"],
        ["blonde hair", "金髪"],
        ["silver hair", "銀髪"],
        ["white hair", "白髪"],
        ["red hair", "赤髪"],
        ["blue hair", "青髪"],
        ["green hair", "緑髪"],
        ["pink hair", "ピンク髪"],
        ["purple hair", "紫髪"],
        ["gradient hair", "グラデ髪"],
        ["two-tone hair", "ツートン"],
      ],
    },
    {
      title: "Accessory / アクセサリー",
      items: [
        ["hair ribbon", "リボン"],
        ["headband", "ヘアバンド"],
        ["hairclip", "ヘアクリップ"],
        ["scrunchie", "シュシュ"],
        ["flower in hair", "髪飾り（花）"],
        ["hair ornament", "髪飾り"],
        ["hat", "帽子"],
      ],
    },
  ];

  // セクション登録 ---------------------------------------
  window.UI_REG.registerSection({
    id: "hair",
    title: "髪型 (hair)",
    mount(container) {
      // 外枠（最上位）を折りたたみ
      const root = document.createElement("details");
      root.className = "ui-group";
      root.open = false; // デフォルト閉
      const sum = document.createElement("summary");
      sum.textContent = "髪型 (hair)";
      const inner = document.createElement("div");
      inner.className = "inner";

      // サブグループを追加
      GROUPS.forEach(g => {
        inner.appendChild(makeGroup(`${g.title}`, g.items));
      });

      root.appendChild(sum);
      root.appendChild(inner);
      container.appendChild(root);
    },
    getSelected() {
      // hairセクション内の選択タグを収集
      const host = document.getElementById("ui-host");
      if (!host) return [];
      const boxes = host.querySelectorAll('section.ui-sec details.ui-group .inner input[type="checkbox"][data-tag]');
      const acc = [];
      boxes.forEach(cb => { if (cb.checked) acc.push(cb.getAttribute("data-tag")); });
      return acc;
    },
  });
})();