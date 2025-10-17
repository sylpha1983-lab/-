// pose.tilt.rules.v1.js  (体の傾き / Tilt)
(function(root){ "use strict";
  const facet = {
    id: "pose-tilt-v1",
    label: "傾き (Tilt)",
    // ← プロンプトに渡るのは英語キーのみ
    values: ["forward","backward","left","right","upright"],
    // ← 日本語は UI 表示用の説明として hints に移動
    hints: {
      "forward":  "前傾",
      "backward": "後傾",
      "left":     "左傾",
      "right":    "右傾",
      "upright":  "直立"
    }
  };
  (root.__pose_rules = root.__pose_rules || {})["tilt"] = facet;

  // レジストリ互換（他ファイルと同様の呼び出し形を維持）
  if (typeof root.__registerPosePart === "function"){
    try{ root.__registerPosePart('pose', 1, { categories:[], presets:[] }); }catch(_){}
  }
})(window);