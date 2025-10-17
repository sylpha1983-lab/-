// pose.arm.rules.v1.js  腕の状態
(function(root){ "use strict";
  const facet = {
    id: "pose-arm-v1",
    label: "Arm / 腕",
    values: ["down","crossed","akimbo","raised","wave","point"],
    // 英語タグのみ使用。日本語は UI 表示用 hints へ
    synonyms: {
      "down": ["腕を下ろす"],
      "crossed": ["腕組み"],
      "akimbo": ["腰に手"],
      "raised": ["片手を上げる","両手を上げる"],
      "wave": ["手を振る"],
      "point": ["指差し"]
    },
    hints: {
      "down": "腕を下ろす",
      "crossed": "腕組み",
      "akimbo": "腰に手を当てる（アキンボ）",
      "raised": "手を上げる",
      "wave": "手を振る",
      "point": "指差し"
    }
  };
  (root.__pose_rules = root.__pose_rules || {})["arm"] = facet;
})(window);