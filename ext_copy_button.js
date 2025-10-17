// ext_copy_button.js
// [CHANGE] moved ⧉ button logic to external

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("copy-ext-list");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const exts = Array.from(document.querySelectorAll("script[data-ext]"))
      .map(x => x.getAttribute("src"))
      .filter(Boolean);
    const text = exts.join("\n");
    navigator.clipboard.writeText(text).then(
      () => alert("拡張リストをコピーしました"),
      () => alert("コピーに失敗しました")
    );
  });
});