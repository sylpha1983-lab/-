/* hair_part9.js — merged static hair 81..90 (v9.0)
   - 内容: hair_part81..90 の categories/items を忠実マージ（ID重複は排除）
   - Registers: window.__registerHairPart('hair', 9, { categories:[...], presets:[] })
*/
(function (w) {
  "use strict";

  const byName = new Map();
  const seen = new Set();

  function put(cat, id, label){
    if (!cat || !id) return;
    const nid = String(id).trim();
    if (seen.has(nid)) return;        // 重複IDはスキップ
    seen.add(nid);
    if (!byName.has(cat)) byName.set(cat, new Map());
    const m = byName.get(cat);
    if (!m.has(nid)) m.set(nid, { id:nid, label: label || nid });
  }

  // === part81: ハイライト＆メッシュ ===  // blonde-highlights など
  (function(){
    const cat = "Hair Highlights & Mesh / メッシュ・ハイライト系";
    [
      ["blonde-highlights","ブロンドハイライト / blonde highlights"],
      ["brown-highlights","ブラウンハイライト / brown highlights"],
      ["red-highlights","レッドハイライト / red highlights"],
      ["blue-highlights","ブルーハイライト / blue highlights"],
      ["pink-highlights","ピンクハイライト / pink highlights"],
      ["purple-highlights","パープルハイライト / purple highlights"],
      ["silver-highlights","シルバーハイライト / silver highlights"],
      ["gold-highlights","ゴールドハイライト / gold highlights"],
      ["rainbow-highlights","レインボーメッシュ / rainbow highlights"],
      ["face-framing-highlights","フェイスフレーミングハイライト / face framing highlights"],
      ["inner-color-mesh","インナーカラーメッシュ / inner color mesh"],
    ].forEach(x=>put(cat, ...x));
  })(); /*  */

  // === part82: 特殊カラー（発光・蛍光） ===
  (function(){
    const cat = "Hair Special Colors / 特殊カラー（蛍光・発光系）";
    [
      ["neon-pink-hair","ネオンピンク / neon pink hair"],
      ["neon-blue-hair","ネオンブルー / neon blue hair"],
      ["neon-green-hair","ネオングリーン / neon green hair"],
      ["neon-yellow-hair","ネオンイエロー / neon yellow hair"],
      ["uv-reactive-hair","UV発光カラー / UV reactive hair"],
      ["glow-in-the-dark-hair","暗闇で光る髪 / glow in the dark hair"],
      ["fluorescent-orange-hair","蛍光オレンジ / fluorescent orange hair"],
      ["fluorescent-purple-hair","蛍光パープル / fluorescent purple hair"],
      ["holographic-glow-hair","ホログラ発光カラー / holographic glow hair"],
      ["cyberpunk-glow-hair","サイバーパンク発光カラー / cyberpunk glow hair"],
    ].forEach(x=>put(cat, ...x));
  })(); /*  */

  // === part83: グラデーションカラー ===
  (function(){
    const cat = "Hair Gradation / グラデーションカラー";
    [
      ["sunset-ombre","サンセットグラデ / sunset ombre"],
      ["ocean-ombre","オーシャングラデ / ocean ombre"],
      ["forest-ombre","フォレストグラデ / forest ombre"],
      ["fire-ombre","ファイアグラデ / fire ombre"],
      ["smoky-ombre","スモーキーグラデ / smoky ombre"],
      ["silver-to-black","シルバーから黒 / silver to black"],
      ["pink-to-purple","ピンクから紫 / pink to purple"],
      ["blue-to-green","青から緑 / blue to green"],
      ["red-to-orange","赤からオレンジ / red to orange"],
      ["brown-to-blonde","茶から金 / brown to blonde"],
    ].forEach(x=>put(cat, ...x));
  })(); /*  */

  // === part84: グラデーション（幻想系） ===
  (function(){
    const cat = "Hair Gradation Fantasy / グラデーションカラー・幻想系";
    [
      ["aurora-gradient","オーロラグラデーション / aurora gradient"],
      ["galaxy-gradient","銀河グラデーション / galaxy gradient"],
      ["rainbow-ombre","虹色グラデーション / rainbow ombre"],
      ["starlight-gradient","星明かりグラデーション / starlight gradient"],
      ["midnight-gradient","真夜中グラデーション / midnight gradient"],
      ["dreamy-gradient","ドリーミーグラデーション / dreamy gradient"],
      ["mystic-flame-gradient","神秘の炎グラデーション / mystic flame gradient"],
      ["icefire-gradient","氷炎グラデーション / icefire gradient"],
      ["crystal-gradient","クリスタルグラデーション / crystal gradient"],
      ["fairy-dust-gradient","妖精の粉グラデーション / fairy dust gradient"],
    ].forEach(x=>put(cat, ...x));
  })(); /*  */

  // === part85: 和色パレット ===
  (function(){
    const cat = "Hair Colors JP Traditional / 和色パレット";
    [
      ["kuro-jet-black","漆黒 / jet-black (kuro)"],
      ["ai-deep-indigo","藍色 / deep indigo (ai)"],
      ["ruri-lapis","瑠璃色 / lapis blue (ruri)"],
      ["asagi-bluegreen","浅葱色 / blue-green (asagi)"],
      ["uguisu-olive","鶯色 / olive green (uguisu)"],
      ["wakakusa-fresh","若草色 / fresh green (wakakusa)"],
      ["shion-violet","紫苑色 / soft violet (shion)"],
      ["sumire-violet","菫色 / violet (sumire)"],
      ["beni-crimson","紅色 / crimson (beni)"],
      ["aka-vermilion","朱赤 / vermilion (aka)"],
      ["sakura-pink","桜色 / sakura pink"],
      ["momo-peach","桃色 / peach pink (momo)"],
      ["azuki-brown","小豆色 / azuki brown"],
      ["kogecha-darkbrown","焦茶 / dark brown (kogecha)"],
      ["kin-gold-foil","金箔風ゴールド / gold foil tone"],
      ["gin-silver-foil","銀箔風シルバー / silver foil tone"],
    ].forEach(x=>put(cat, ...x));
  })(); /*  */

  // === part86: メッシュ・ハイライト拡張 ===
  (function(){
    const cat = "Hair Mesh & Highlights / メッシュ・ハイライト拡張";
    [
      ["money-piece-highlight","マネーピース / money piece highlight"],
      ["face-framing-bold","顔まわり太めハイライト / bold face-framing"],
      ["slice-highlights","スライスハイライト / slice highlights"],
      ["babylights","ベイビーハイライト / babylights"],
      ["ribbon-highlights","リボンハイライト / ribbon highlights"],
      ["peekaboo-mesh","ピーカブーメッシュ / peekaboo mesh"],
      ["underlayer-contrast","アンダーレイヤー強コントラスト / bold underlayer"],
      ["halo-highlights","ハローハイライト / halo highlights"],
      ["foil-highlights-fine","細めフォイル / fine foil highlights"],
      ["foil-highlights-chunky","太めフォイル / chunky foil highlights"],
    ].forEach(x=>put(cat, ...x));
  })(); /*  */

  // === part87: 発光・ネオン系 ===
  (function(){
    const cat = "Glowing & Neon Colors / 発光・ネオン系";
    [
      ["neon-pink","ネオンピンク / neon pink"],
      ["neon-green","ネオングリーン / neon green"],
      ["neon-blue","ネオンブルー / neon blue"],
      ["neon-purple","ネオンパープル / neon purple"],
      ["uv-reactive-yellow","UV発光イエロー / UV-reactive yellow"],
      ["uv-reactive-orange","UV発光オレンジ / UV-reactive orange"],
      ["glow-in-dark","蓄光ホワイト / glow-in-the-dark white"],
      ["holo-neon-rainbow","ホログラムネオン虹 / holographic neon rainbow"],
      ["cyberpunk-green","サイバーパンクグリーン / cyberpunk green"],
      ["cyberpunk-magenta","サイバーパンクマゼンタ / cyberpunk magenta"],
    ].forEach(x=>put(cat, ...x));
  })(); /*  */

  // === part88: 特殊ツートーン派生 ===
  (function(){
    const cat = "Special Two-tone Variations / 特殊ツートーン派生";
    [
      ["split-hair-vertical","縦割りツートーン / vertical split two-tone"],
      ["split-hair-horizontal","横割りツートーン / horizontal split two-tone"],
      ["gradient-root-dark","根元ダークグラデ / dark root gradient"],
      ["gradient-tip-light","毛先ライトグラデ / light tip gradient"],
      ["half-and-half-color","左右ハーフカラー / half & half color"],
      ["checkerboard-color","市松模様カラー / checkerboard two-tone"],
      ["rainbow-streaks","虹色ストリーク / rainbow streaks two-tone"],
      ["oil-slick-color","オイルスリックカラー / oil slick tone"],
      ["ash-fade-two-tone","アッシュフェード / ash fade two-tone"],
      ["pastel-candy-split","キャンディパステル分割 / pastel candy split"],
    ].forEach(x=>put(cat, ...x));
  })(); /*  */

  // === part89: 特殊素材カラー ===
  (function(){
    const cat = "Special Material Colors / 特殊素材カラー";
    [
      ["metallic-gold","メタリックゴールド / metallic gold"],
      ["metallic-silver","メタリックシルバー / metallic silver"],
      ["metallic-bronze","メタリックブロンズ / metallic bronze"],
      ["pearl-white","パールホワイト / pearl white"],
      ["pearl-pink","パールピンク / pearl pink"],
      ["crystal-clear","クリスタル透明 / crystal clear"],
      ["diamond-sparkle","ダイヤスパークル / diamond sparkle"],
      ["opal-shine","オパール光沢 / opal shine"],
      ["hologram-silver","ホログラムシルバー / hologram silver"],
      ["chrome-blue","クロームブルー / chrome blue"],
    ].forEach(x=>put(cat, ...x));
  })(); /*  */

  // === part90: 自然素材カラー ===
  (function(){
    const cat = "Natural Material Colors / 自然素材カラー";
    [
      ["wood-brown","木材ブラウン / wood brown"],
      ["bamboo-green","竹グリーン / bamboo green"],
      ["stone-gray","石グレー / stone gray"],
      ["marble-white","大理石ホワイト / marble white"],
      ["leaf-green","葉っぱグリーン / leaf green"],
      ["flower-petal-pink","花びらピンク / flower petal pink"],
      ["lava-red","溶岩レッド / lava red"],
      ["sand-beige","砂ベージュ / sand beige"],
      ["aqua-water-blue","水色アクア / aqua water blue"],
      ["forest-moss","森の苔グリーン / forest moss"],
    ].forEach(x=>put(cat, ...x));
  })(); /*  */

  // === 生成 ===
  const categories = Array.from(byName, ([name,map])=>({ name, items:Array.from(map.values()) }));
  const data = { categories, presets: [] };

  // === 登録（3形態対応）===
  try{
    if (typeof w.__registerHairPart === 'function' && w.__registerHairPart.length >= 3) {
      w.__registerHairPart('hair', 9, data);
    } else if (typeof w.__registerHairPart === 'function') {
      w.__registerHairPart(9, data);
    } else if (typeof w.__registerPromptPart === 'function' && w.__registerPromptPart.length >= 3) {
      w.__registerPromptPart('hair', 9, data);
    } else {
      w.__parts = w.__parts || { hair:{} };
      w.__parts.hair = w.__parts.hair || {};
      w.__parts.hair[9] = data;
    }
  }catch(e){
    console.error('[hair_part9 merged 81..90 v9.0] register error:', e);
  }
})(window);