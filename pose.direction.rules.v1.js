// pose.direction.rules.v1.js  前後左右・向き
(function(root){ "use strict";
  const facet = {
    id: "pose-direction-v1",
    label: "向き",
    values: ["front","left","right","back","three_quarter"],
    synonyms: {
      "three_quarter": ["3/4","three-quarter","斜め"],
      "front": ["正面"],
      "back": ["背面","後ろ"],
      "left": ["左向き"], "right": ["右向き"]
    },
    hints: {
      "front": "正面",
      "back": "背面 / 後ろ",
      "left": "左向き",
      "right": "右向き",
      "three_quarter": "斜め（3/4）"
    }
  };
  (root.__pose_rules = root.__pose_rules || {})["direction"] = facet;
})(window);