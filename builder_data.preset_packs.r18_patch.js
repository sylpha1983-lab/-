(function(){
  "use strict";
  if (!window.__PP_DB || !window.__PP_DB.packs) return;

  var packs = window.__PP_DB.packs;
  var parentKey = "🔞 なりきりおすすめセット (Adult Roleplay Recommended Sets)";
  var groups = packs[parentKey];
  if (!Array.isArray(groups)) return;

  // find the existing combined location group
  var idx = -1;
  for (var i = 0; i < groups.length; i++) {
    var g = groups[i] || {};
    var t = (g.title_ja || "") + " " + (g.title_en || "");
    if (t.indexOf("ロケーション") >= 0 || t.indexOf("Location") >= 0 || t.indexOf("場所") >= 0) { idx = i; break; }
  }
  if (idx < 0) return;

  var baseLocGroup = groups[idx] || {};
  var items = Array.isArray(baseLocGroup.children) ? baseLocGroup.children.slice() : [];

  var loc = [];
  var gender = [];
  var expr = [];
  var tent = [];

  function isTent(o){
    var s = ((o && (o.label||"")) + " " + (o && (o.val||""))).toLowerCase();
    return /tentacle|slime|goo|ooze|tentacles|触手|スライム/.test(s);
  }
  function isGender(o){
    var s = ((o && (o.label||"")) + " " + (o && (o.val||""))).toLowerCase();
    return /1girl|1boy|male|female|男女|couple|two people|threesome|ffm|mmf|yuri|yaoi|ntr|incest|pregnan|rape|dominant man|submissive girl/.test(s);
  }
  function isExpr(o){
    var s = ((o && (o.label||"")) + " " + (o && (o.val||""))).toLowerCase();
    return /blush|sweat|arous|orgasm|climax|submissive|dominant|forbidden|shame|embarrass|trembl|mind|mental|psycho|羞|恥|赤面|汗|快感|精神|表情/.test(s);
  }

  for (var j = 0; j < items.length; j++) {
    var it = items[j];
    if (!it) continue;

    // keep headers/separators inside "expression" by default if any
    if (it.type === "header" || it.type === "pair_header") { expr.push(it); continue; }

    if (isTent(it)) { tent.push(it); continue; }
    if (isGender(it)) { gender.push(it); continue; }
    if (isExpr(it)) { expr.push(it); continue; }
    loc.push(it);
  }


  // ---- Enrichment: add curated R-18 presets (safe / consensual / adult) ----
  function addUnique(arr, obj){
    if (!obj || !obj.label) return;
    var key = String(obj.label).trim();
    for (var k=0;k<arr.length;k++){
      if (arr[k] && String(arr[k].label||"").trim() === key) return;
    }
    arr.push(obj);
  }

  // 🏩 H Locations (keep it practical + cinematic)
  [
    { label: "ラブホテル・赤い間接照明", val: "(love hotel room), (red ambient light), (neon sign glow), (soft bed sheets), (intimate atmosphere)" },
    { label: "シャワールーム・湯気", val: "(shower room), (steam), (wet tiles), (water droplets), (backlit silhouette), (humid air)" },
    { label: "バスルーム・鏡越し", val: "(bathroom), (mirror reflection), (soft bathroom light), (warm steam), (close distance)" },
    { label: "夜の車内・窓の雨粒", val: "(car interior at night), (raindrops on window), (streetlight bokeh), (close quarters), (quiet tension)" },
    { label: "薄暗い寝室・月明かり", val: "(dim bedroom), (moonlight through curtains), (soft shadows), (quiet night), (private scene)" },
    { label: "高級スイート・シティビュー", val: "(luxury suite), (city night view), (glass window), (soft lamp light), (premium mood)" },
    { label: "カーテンの影・隠れ家", val: "(hidden corner), (curtain shadows), (narrow space), (whispered atmosphere), (secret mood)" },
    { label: "ベッドサイド・ランプ光", val: "(bedside lamp), (warm tungsten light), (soft highlights), (skin glow), (intimate framing)" },
    { label: "キッチンカウンター・夜", val: "(kitchen counter), (night), (under-cabinet light), (close contact), (domestic intimacy)" },
    { label: "暗い廊下・背徳の気配", val: "(dim hallway), (low key lighting), (long shadows), (forbidden vibe), (cinematic tension)" }
  ].forEach(function(o){ addUnique(loc, o); });

  // 👫 Gender / Situations (no non-consent, no incest, no minors)
  [
    { label: "基本：1girl + 1boy（大人）", val: "1girl, 1boy, adult, (consensual:1.2)" },
    { label: "恋人シチュ：密着", val: "(lovers), (close embrace), (skinship), (soft intimacy), (mutual desire)" },
    { label: "告白直後：距離ゼロ", val: "(confession aftermath), (faces very close), (hands on waist), (trembling breath)" },
    { label: "大人の駆け引き：挑発", val: "(teasing), (provocative gaze), (dominant vibe), (playful tension)" },
    { label: "甘い主導：彼女リード", val: "(female lead), (woman takes initiative), (confident smile), (guided touch)" },
    { label: "強い主導：彼リード", val: "(male lead), (protective dominance), (firm hold), (heated breath)" },
    { label: "相互：対等な熱", val: "(mutual initiative), (equal passion), (hands entwined), (synchronized breathing)" },
    { label: "背後から抱く", val: "(back hug), (whisper near ear), (hands on waist), (warm proximity)" },
    { label: "ソファで寄り添う", val: "(couch), (leaning close), (lazy night), (shared warmth)" },
    { label: "朝の余韻", val: "(morning light), (afterglow), (messy sheets), (sleepy eyes), (gentle mood)" }
  ].forEach(function(o){ addUnique(gender, o); });

  // 🤪 R-18 Expressions / Mental (your “drunken eyes / full-face blush” friendly)
  [
    { label: "full-face blush（全顔赤面）", val: "(full-face blush:1.3), (flushed cheeks), (heated skin)" },
    { label: "drunken eyes（酔い目）", val: "(drunken eyes:1.3), (half-lidded eyes), (tipsy smile)" },
    { label: "とろけ目・半目", val: "(half-closed eyes:1.2), (dazed), (soft focus), (melted gaze)" },
    { label: "汗・熱", val: "(sweat:1.2), (glossy skin), (warm breath), (humid air)" },
    { label: "涙目・快感", val: "(teary eyes:1.2), (shivering breath), (trembling lips)" },
    { label: "噛み唇", val: "(biting lip:1.2), (embarrassed), (shy but wanting)" },
    { label: "恥じらい・視線逸らし", val: "(embarrassed:1.2), (averted gaze), (covering mouth)" },
    { label: "見下ろし・支配の笑み", val: "(dominant smile:1.2), (looking down), (confident gaze)" },
    { label: "見上げ・求める目", val: "(pleading eyes:1.2), (upward gaze), (soft blush)" },
    { label: "息荒い", val: "(heavy breathing:1.2), (parted lips), (hot breath)" }
  ].forEach(function(o){ addUnique(expr, o); });

  // 🐙 Tentacles / Slime (kept as effects/props; avoid explicit acts)
  [
    { label: "スライム光沢・ぬめり", val: "(slime gloss), (gooey shine), (viscous drips), (wet sheen)" },
    { label: "透明スライム膜", val: "(transparent slime film), (stretchy), (stringy ooze), (sticky strands)" },
    { label: "触手ケーブル（SF）", val: "(tentacle-like cables), (organic wires), (writhing lines), (biomechanical)" },
    { label: "拘束：触手の巻き付き", val: "(tentacle wrap), (restrained pose), (tension lines), (helpless posture)" },
    { label: "床から伸びる触手影", val: "(tentacle shadows), (emerging from floor), (dark silhouettes), (looming presence)" },
    { label: "粘液の飛沫", val: "(goo splatter), (droplets), (sticky particles), (wet atmosphere)" },
    { label: "泡立つスライム", val: "(foaming slime), (bubbles), (viscous foam), (wet texture)" },
    { label: "触手の気配（暗示）", val: "(implied tentacles), (offscreen presence), (wet sound), (creeping dread)" }
  ].forEach(function(o){ addUnique(tent, o); });

  // 🎯 Recommended combos (adult / consensual / implied intimacy; safe wording)
  var combos = [];
  [
    { label: "赤い間接照明×密着×全顔赤面", val: "(love hotel room), (red ambient light), (close embrace), (full-face blush:1.3), adult, (consensual:1.2), (intimate atmosphere)" },
    { label: "シャワールーム湯気×息荒い×汗", val: "(shower room), (steam), (water droplets), (humid air), (heavy breathing:1.2), (sweat:1.2), adult, (consensual:1.2)" },
    { label: "鏡越し×挑発×とろけ目", val: "(bathroom), (mirror reflection), (teasing), (half-closed eyes:1.2), (soft glow), adult, (consensual:1.2)" },
    { label: "夜の車内×背後抱き×酔い目", val: "(car interior at night), (raindrops on window), (back hug), (drunken eyes:1.3), (streetlight bokeh), adult, (consensual:1.2)" },
    { label: "月明かり寝室×朝の余韻×涙目", val: "(dim bedroom), (moonlight), (afterglow), (teary eyes:1.2), (messy sheets), adult, (consensual:1.2)" },
    { label: "高級スイート×対等×求める目", val: "(luxury suite), (city night view), (mutual initiative), (pleading eyes:1.2), (soft lamp light), adult, (consensual:1.2)" },
    { label: "カーテン影×秘密×噛み唇", val: "(curtain shadows), (secret mood), (biting lip:1.2), (whisper near ear), adult, (consensual:1.2)" },
    { label: "ベッドサイド×彼女リード×支配の笑み", val: "(bedside lamp), (female lead), (dominant smile:1.2), (hands on waist), adult, (consensual:1.2)" },
    { label: "ソファ×寄り添い×恥じらい", val: "(couch), (leaning close), (embarrassed:1.2), (averted gaze), adult, (consensual:1.2)" },
    { label: "暗い廊下×境界×冷たい視線", val: "(dim hallway), (low key lighting), (forbidden vibe), (calm gaze), adult, (consensual:1.2)" },
    { label: "SF触手ケーブル×拘束×湿度演出", val: "(tentacle-like cables), (tentacle wrap), (restrained pose), (humid air), (slime gloss), adult, (consensual:1.2), (cinematic tension)" },
    { label: "透明スライム膜×暗示×息遣い", val: "(transparent slime film), (implied tentacles), (wet sheen), (heavy breathing:1.2), adult, (consensual:1.2)" }
  ].forEach(function(o){ addUnique(combos, o); });

  // Build new split groups (keep the rest groups untouched)
  var splitGroups = [
    { title_ja: "🏩 Hロケーション", title_en: "H Locations", children: loc },
    { title_ja: "👫 男女・シチュエーション", title_en: "Gender / Situations", children: gender },
    { title_ja: "🎯 おすすめ組み合わせ", title_en: "Recommended Combos", children: combos },
    { title_ja: "🤪 R-18 表情・精神", title_en: "R-18 Expressions / Mental", children: expr },
    { title_ja: "🐙 触手・スライム", title_en: "Tentacles / Slime", children: tent }
  ];

  // Replace the old combined location group with the split groups
  var before = groups.slice(0, idx);
  var after = groups.slice(idx + 1);
  packs[parentKey] = before.concat(splitGroups).concat(after);
})();