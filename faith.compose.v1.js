// faith.compose.v1.js
(function(root){ "use strict";
  function uniq(arr){ return Array.from(new Set(arr.filter(Boolean))); }

  // facetからタグを拾う薄いユーティリティ（将来マッピング拡張しやすい作り）
  function fromFacet(facet, key){
    const R = (root.__faith_rules || {});
    const F = R[facet]; if(!F) return [];
    // キーが値配列内にある or 同義語にあるなら、単純にそのキーをタグ化
    const tags = [];
    if (Array.isArray(F.values) && F.values.includes(key)) tags.push(key);
    if (F.synonyms){
      for (const k in F.synonyms){
        if (k===key || (Array.isArray(F.synonyms[k]) && F.synonyms[k].includes(key))){
          tags.push(k);
        }
      }
    }
    // 追加で慣用タグへマップ（必要に応じて拡張）
    if (facet==='blush' && key!=='none') tags.push('blush');
    if (facet==='eyes' && key==='teary') tags.push('teary');
    if (facet==='tropes' && key==='anger_mark') tags.push('anger_mark');
    if (facet==='gaze') tags.push('gaze');
    return uniq(tags);
  }

  // 合成：baseTags + {facet:key,...} → tags[]
  function compose(baseTags, facets){
    let out = Array.isArray(baseTags) ? baseTags.slice() : [];
    if (facets && typeof facets === 'object'){
      for (const facet in facets){
        const key = facets[facet];
        out = out.concat(fromFacet(facet, key));
      }
    }
    return uniq(out);
  }

  // 公開
  root.__faith_compose = compose;

  // hintsを追加（UIで日本語説明を表示できるように）
  root.__faith_hints = Object.assign({}, root.__faith_hints || {}, {
    "blush": "赤面",
    "teary": "涙目",
    "anger_mark": "怒りマーク",
    "gaze": "視線"
  });

  try { 
    root.__faith_utils = Object.assign({}, root.__faith_utils||{}, { uniq, fromFacet, compose }); 
  } catch(_) {}
})(window);