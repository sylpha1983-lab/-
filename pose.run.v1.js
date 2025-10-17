// pose.run.v1.js
(function(root){ "use strict";
  const pack = { 
    id: "pose-run-v1",
    label: "Run (走り)",
    tags: ["run","running","dash"],
    hints: {
      "run": "走る",
      "running": "走行中",
      "dash": "スプリント（全力疾走）"
    }
  };
  (root.__pose_packs = root.__pose_packs || []).push(pack);

  if (typeof root.__registerPosePart === "function"){ try {
    root.__registerPosePart('pose', 1, {
      categories: [
        { name: "移動 / Movement", items: [{ id: "run_sprint", label: "Run / 走り（スプリント）" }] }
      ],
      presets: [
        { id: "run_sprint", label: "Run / 走り（スプリント）", tags: ["run","dash"] }
      ]
    });
  } catch(_){} }
})(window);