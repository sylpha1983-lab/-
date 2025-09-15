/* hair_part4.js — merged static hair 31..40 (v4.0)
   - 内容: hair_part31..40 の categories/items を忠実マージ（ID重複を排除）
   - Registers: window.__registerHairPart('hair', 4, { categories:[...], presets:[] })
*/
(function (w) {
  "use strict";

  const byName = new Map();   // name -> Map<id,{id,label}>
  const seen = new Set();     // item id で重複排除

  function put(cat, id, label){
    if (!cat || !id) return;
    const nid = String(id).trim();
    if (seen.has(nid)) return;
    seen.add(nid);
    if (!byName.has(cat)) byName.set(cat, new Map());
    const m = byName.get(cat);
    if (!m.has(nid)) m.set(nid, { id:nid, label: label || nid });
  }

  // === part31: Ponytails 基本 ===  （high/mid/low/side/messy/tight/curly/wavy/straight）【31】 
  (function(){
    const cat = "Ponytails / ポニーテール";
    [
      ['high-ponytail','ハイポニーテール / high ponytail'],
      ['mid-ponytail','ミドルポニーテール / mid ponytail'],
      ['low-ponytail','ローポニーテール / low ponytail'],
      ['side-ponytail-left','サイドポニー（左） / side ponytail left'],
      ['side-ponytail-right','サイドポニー（右） / side ponytail right'],
      ['messy-ponytail','ラフポニーテール / messy ponytail'],
      ['tight-ponytail','タイトポニーテール / tight ponytail'],
      ['curly-ponytail','カールポニーテール / curly ponytail'],
      ['wavy-ponytail','ウェーブポニーテール / wavy ponytail'],
      ['straight-ponytail','ストレートポニーテール / straight ponytail'],
    ].forEach(x=>put(cat, ...x));
  })(); // 

  // === part32: Ponytails 応用 ===（braided/bubble/looped/layered/wrapped/ribbon/scrunchie/half-up/twin） 
  (function(){
    const cat = "Ponytails / ポニーテール";
    [
      ['braided-ponytail','三つ編みポニーテール / braided ponytail'],
      ['bubble-ponytail','バブルポニーテール / bubble ponytail'],
      ['looped-ponytail','ループポニーテール / looped ponytail'],
      ['layered-ponytail','レイヤーポニーテール / layered ponytail'],
      ['wrapped-ponytail','結び目隠しポニー（毛束巻き） / hair-wrapped ponytail'],
      ['ribbon-ponytail','リボン付きポニー / ribbon ponytail'],
      ['scrunchie-ponytail','シュシュポニー / scrunchie ponytail'],
      ['half-up-ponytail','ハーフアップポニー / half-up ponytail'],
      ['twin-ponies-low','ツインポニー（低め） / low twin ponies'],
      ['twin-ponies-high','ツインポニー（高め） / high twin ponies'],
    ].forEach(x=>put(cat, ...x));
  })(); // 

  // === part33: Twin-tails ===
  (function(){
    const cat = "Twin-tails / ツインテール";
    [
      ['high-twin-tails','ハイツインテール / high twin-tails'],
      ['low-twin-tails','ローツインテール / low twin-tails'],
      ['messy-twin-tails','ラフツインテール / messy twin-tails'],
      ['braided-twin-tails','三つ編みツインテール / braided twin-tails'],
      ['curly-twin-tails','カールツインテール / curly twin-tails'],
      ['wavy-twin-tails','ウェーブツインテール / wavy twin-tails'],
      ['short-twin-tails','ショートツインテール / short twin-tails'],
      ['long-twin-tails','ロングツインテール / long twin-tails'],
      ['twin-tails-with-ribbons','リボンツインテール / twin-tails with ribbons'],
      ['twin-buns','ツインお団子（スペースバンズ） / twin buns (space buns)'],
    ].forEach(x=>put(cat, ...x));
  })(); // 

  // === part34: Side-tail & Variations ===
  (function(){
    const cat = "Side-tail & Variations / サイドテール＆派生";
    [
      ['low-side-tail','ロ―サイドテール / low side-tail'],
      ['mid-side-tail','ミドルサイドテール / mid side-tail'],
      ['high-side-tail','ハイサイドテール / high side-tail'],
      ['braided-side-tail','編み込みサイドテール / braided side-tail'],
      ['curly-side-tail','カールサイドテール / curly side-tail'],
      ['wavy-side-tail','ウェーブサイドテール / wavy side-tail'],
      ['side-tail-with-ribbon','リボンサイドテール / side-tail with ribbon'],
      ['side-tail-with-hair-wrap','毛束巻きサイド / hair-wrapped side-tail'],
      ['double-side-tails','ダブルサイドテール / double side-tails'],
      ['side-pony-half-up','サイドポニー・ハーフアップ / side pony half-up'],
    ].forEach(x=>put(cat, ...x));
  })(); // 

  // === part35: Ponytails Special ===
  (function(){
    const cat = "Ponytails Special / 特殊ポニーテール";
    [
      ['side-swept-ponytail','流しポニーテール / side-swept ponytail'],
      ['double-ponytail','ダブルポニーテール / double ponytail'],
      ['layered-high-ponytail','レイヤーハイポニー / layered high ponytail'],
      ['asym-ponytail','アシンメトリーポニー / asym ponytail'],
      ['inverted-ponytail','逆さポニーテール / inverted ponytail'],
      ['split-ponytail','分けポニーテール / split ponytail'],
      ['half-braided-ponytail','ハーフ編み込みポニー / half-braided ponytail'],
      ['flipped-ends-ponytail','毛先ハネポニー / flipped-ends ponytail'],
    ].forEach(x=>put(cat, ...x));
  })(); // 

  // === part36: Ponytails with Accessories ===
  (function(){
    const cat = "Ponytails with Accessories / アクセ付きポニーテール";
    [
      ['beads-ponytail','ビーズ付きポニー / beads ponytail'],
      ['clip-ponytail','ヘアクリップポニー / clip ponytail'],
      ['barrette-ponytail','バレッタポニー / barrette ponytail'],
      ['flower-ponytail','花飾りポニー / flower ponytail'],
      ['decorated-ponytail','装飾付きポニー / decorated ponytail'],
      ['ribbon-braided-ponytail','リボン編み込みポニー / ribbon braided ponytail'],
      ['pearl-ponytail','パール飾りポニー / pearl ponytail'],
      ['chain-ponytail','チェーンポニー / chain ponytail'],
    ].forEach(x=>put(cat, ...x));
  })(); // 

  // === part37: Ponytails Character Style ===
  (function(){
    const cat = "Ponytails Character Style / キャラ系ポニー";
    [
      ['samurai-ponytail','侍風ポニー / samurai ponytail'],
      ['idol-ponytail','アイドルポニー / idol ponytail'],
      ['sporty-ponytail','スポーツポニー / sporty ponytail'],
      ['elegant-ponytail','エレガントポニー / elegant ponytail'],
      ['casual-ponytail','カジュアルポニー / casual ponytail'],
      ['anime-ponytail','アニメ風ポニー / anime ponytail'],
      ['fantasy-ponytail','ファンタジーポニー / fantasy ponytail'],
    ].forEach(x=>put(cat, ...x));
  })(); // 

  // === part38: Cultural Ponytails ===
  (function(){
    const cat = "Cultural Ponytails / 文化・伝統ポニー";
    [
      ['chinese-high-ponytail','中華ハイポニー / Chinese high ponytail'],
      ['japanese-low-ponytail','和風ローポニー / Japanese low ponytail'],
      ['indian-ponytail','インディアン風ポニー / Indian ponytail'],
      ['arabian-ponytail','アラビアンポニー / Arabian ponytail'],
      ['greek-ponytail','古代ギリシャポニー / Greek ponytail'],
      ['roman-ponytail','古代ローマポニー / Roman ponytail'],
    ].forEach(x=>put(cat, ...x));
  })(); // 

  // === part39: Dynamic Ponytails ===
  (function(){
    const cat = "Dynamic Ponytails / 動きのあるポニー";
    [
      ['curly-ponytail','カールポニー / curly ponytail'],
      ['wavy-ponytail','ウェーブポニー / wavy ponytail'],
      ['spiky-ponytail','スパイキーポニー / spiky ponytail'],
      ['messy-ponytail','乱れポニー / messy ponytail'],
      ['fluffy-ponytail','ふわふわポニー / fluffy ponytail'],
      ['tight-ponytail','きっちりポニー / tight ponytail'],
      ['wind-swept-ponytail','風になびくポニー / wind-swept ponytail'],
    ].forEach(x=>put(cat, ...x));
  })(); // 

  // === part40: Fantasy Ponytails ===
  (function(){
    const cat = "Fantasy Ponytails / ファンタジーポニー";
    [
      ['crystal-ponytail','クリスタルポニー / crystal ponytail'],
      ['fire-ponytail','炎ポニー / fire ponytail'],
      ['ice-ponytail','氷ポニー / ice ponytail'],
      ['shadow-ponytail','影ポニー / shadow ponytail'],
      ['light-ponytail','光ポニー / light ponytail'],
      ['magic-ponytail','魔法ポニー / magic ponytail'],
      ['cyber-ponytail','サイバーポニー / cyber ponytail'],
    ].forEach(x=>put(cat, ...x));
  })(); // 

  // === 生成 ===
  const categories = Array.from(byName, ([name, map]) => ({
    name, items: Array.from(map.values())
  }));
  const data = { categories, presets: [] };

  // === 登録（3形態対応）===
  try{
    if (typeof w.__registerHairPart === 'function' && w.__registerHairPart.length >= 3) {
      w.__registerHairPart('hair', 4, data);   // faith互換3引数（推奨）
    } else if (typeof w.__registerHairPart === 'function') {
      w.__registerHairPart(4, data);           // 従来2引数
    } else if (typeof w.__registerPromptPart === 'function' && w.__registerPromptPart.length >= 3) {
      // 誤呼び出し吸収（保険）
      w.__registerPromptPart('hair', 4, data);
    } else {
      // 最終フォールバック
      w.__parts = w.__parts || { hair:{} };
      w.__parts.hair = w.__parts.hair || {};
      w.__parts.hair[4] = data;
    }
  }catch(e){
    console.error('[hair_part4 merged 31..40 v4.0] register error:', e);
  }
})(window);