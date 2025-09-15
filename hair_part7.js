/* hair_part7.js — merged static hair 61..70 (v7.0)
   - 内容: hair_part61..70 の categories/items を忠実マージ（ID重複は排除）
   - Registers: window.__registerHairPart('hair', 7, { categories:[...], presets:[] })
*/
(function (w) {
  "use strict";

  const byName = new Map();
  const seen = new Set();

  function put(cat, id, label){
    if (!cat || !id) return;
    const nid = String(id).trim();
    if (seen.has(nid)) return;   // 重複排除
    seen.add(nid);
    if (!byName.has(cat)) byName.set(cat, new Map());
    const m = byName.get(cat);
    if (!m.has(nid)) m.set(nid, { id:nid, label: label || nid });
  }

  // === part61: Gothic & Lolita Ponytails === 
  (function(){
    const cat="Gothic & Lolita Ponytails / ゴシック・ロリータ系ポニー";
    [
      ["gothic-ponytail","ゴシックポニー / gothic ponytail"],
      ["lolita-ponytail","ロリータポニー / lolita ponytail"],
      ["frilled-ponytail","フリルポニー / frilled ponytail"],
      ["lace-ribbon-ponytail","レースリボンポニー / lace ribbon ponytail"],
      ["twin-gothic-ponytails","ツインゴシックポニー / twin gothic ponytails"],
      ["dark-lolita-ponytail","ダークロリータポニー / dark lolita ponytail"],
      ["elegant-gothic-ponytail","エレガントゴシックポニー / elegant gothic ponytail"],
    ].forEach(x=>put(cat,...x));
  })();

  // === part62: Futuristic & Sci-Fi Ponytails === 
  (function(){
    const cat="Futuristic & Sci-Fi Ponytails / 未来・SFポニー";
    [
      ["cyber-ponytail","サイバーポニー / cyber ponytail"],
      ["mecha-ponytail","メカポニー / mecha ponytail"],
      ["neon-ponytail","ネオンポニー / neon ponytail"],
      ["hologram-ponytail","ホログラムポニー / hologram ponytail"],
      ["ai-ponytail","AIポニー / AI ponytail"],
      ["android-ponytail","アンドロイドポニー / android ponytail"],
      ["space-ponytail","スペースポニー / space ponytail"],
    ].forEach(x=>put(cat,...x));
  })();

  // === part63: Traditional Japanese Ponytails === 
  (function(){
    const cat="Traditional Japanese Ponytails / 和風・伝統ポニー";
    [
      ["samurai-ponytail","侍ポニー / samurai ponytail"],
      ["miko-ponytail","巫女ポニー / miko ponytail"],
      ["geisha-ponytail","芸者ポニー / geisha ponytail"],
      ["wa-ribbon-ponytail","和風リボンポニー / wa-ribbon ponytail"],
      ["shrine-ponytail","神社ポニー / shrine ponytail"],
      ["edo-ponytail","江戸ポニー / edo ponytail"],
      ["kimono-ponytail","着物ポニー / kimono ponytail"],
    ].forEach(x=>put(cat,...x));
  })();

  // === part64: Western & Classic Ponytails === 
  (function(){
    const cat="Western & Classic Ponytails / 洋風・クラシックポニー";
    [
      ["victorian-ponytail","ヴィクトリアンポニー / victorian ponytail"],
      ["renaissance-ponytail","ルネサンス風ポニー / renaissance ponytail"],
      ["medieval-ponytail","中世ポニー / medieval ponytail"],
      ["noble-ponytail","貴族風ポニー / noble ponytail"],
      ["classic-braid-ponytail","クラシック編み込みポニー / classic braid ponytail"],
      ["romantic-ponytail","ロマンチックポニー / romantic ponytail"],
      ["elegant-ponytail","エレガントポニー / elegant ponytail"],
    ].forEach(x=>put(cat,...x));
  })();

  // === part65: Casual Ponytails === 
  (function(){
    const cat="Casual Ponytails / カジュアル・日常ポニー";
    [
      ["messy-ponytail","ラフポニー / messy ponytail"],
      ["loose-ponytail","ゆるポニー / loose ponytail"],
      ["daily-ponytail","日常ポニー / daily ponytail"],
      ["schoolgirl-ponytail","女子高生ポニー / schoolgirl ponytail"],
      ["lazy-ponytail","だらけポニー / lazy ponytail"],
      ["short-casual-ponytail","ショートポニー / short casual ponytail"],
      ["casual-braid-ponytail","カジュアル編み込みポニー / casual braid ponytail"],
    ].forEach(x=>put(cat,...x));
  })();

  // === part66: Sports & Action Ponytails === 
  (function(){
    const cat="Sports & Action Ponytails / スポーツ・アクションポニー";
    [
      ["athlete-ponytail","アスリートポニー / athlete ponytail"],
      ["runner-ponytail","ランナーポニー / runner ponytail"],
      ["fighter-ponytail","格闘家ポニー / fighter ponytail"],
      ["gym-ponytail","ジムポニー / gym ponytail"],
      ["swimmer-ponytail","スイマーポニー / swimmer ponytail"],
      ["dancer-ponytail","ダンサーポニー / dancer ponytail"],
      ["martial-arts-ponytail","武術ポニー / martial arts ponytail"],
    ].forEach(x=>put(cat,...x));
  })();

  // === part67: Fantasy Ponytails === 
  (function(){
    const cat="Fantasy Ponytails / ファンタジーポニー";
    [
      ["elf-ponytail","エルフポニー / elf ponytail"],
      ["princess-ponytail","プリンセスポニー / princess ponytail"],
      ["mage-ponytail","魔法使いポニー / mage ponytail"],
      ["dark-sorceress-ponytail","ダークソーサレスポニー / dark sorceress ponytail"],
      ["fairy-ponytail","妖精ポニー / fairy ponytail"],
      ["knight-ponytail","騎士ポニー / knight ponytail"],
      ["goddess-ponytail","女神ポニー / goddess ponytail"],
    ].forEach(x=>put(cat,...x));
  })();

  // === part68: Futuristic Ponytails === 
  (function(){
    const cat="Futuristic Ponytails / 未来・SFポニー";
    [
      ["cyber-ponytail","サイバーポニー / cyber ponytail"],
      ["neon-ponytail","ネオンポニー / neon ponytail"],
      ["android-ponytail","アンドロイドポニー / android ponytail"],
      ["vr-ponytail","VRポニー / VR ponytail"],
      ["hologram-ponytail","ホログラムポニー / hologram ponytail"],
      ["space-ponytail","宇宙ポニー / space ponytail"],
      ["mecha-ponytail","メカポニー / mecha ponytail"],
    ].forEach(x=>put(cat,...x));
  })();

  // === part69: Traditional Ponytails === 
  (function(){
    const cat="Traditional Ponytails / 民族・伝統ポニー";
    [
      ["samurai-ponytail","侍ポニー / samurai ponytail"],
      ["maiko-ponytail","舞妓ポニー / maiko ponytail"],
      ["ninja-ponytail","忍者ポニー / ninja ponytail"],
      ["chinese-ponytail","チャイナポニー / chinese ponytail"],
      ["indian-ponytail","インディアンポニー / indian ponytail"],
      ["egyptian-ponytail","エジプトポニー / egyptian ponytail"],
      ["viking-ponytail","ヴァイキングポニー / viking ponytail"],
    ].forEach(x=>put(cat,...x));
  })();

  // === part70: Styled Ponytails === 
  (function(){
    const cat="Styled Ponytails / 特殊アレンジポニー";
    [
      ["ribbon-ponytail","リボン付きポニー / ribbon ponytail"],
      ["braided-ponytail","編み込みポニー / braided ponytail"],
      ["double-wrap-ponytail","二重巻きポニー / double wrap ponytail"],
      ["spiral-ponytail","スパイラルポニー / spiral ponytail"],
      ["looped-ponytail","ループポニー / looped ponytail"],
      ["side-braid-ponytail","サイド三つ編みポニー / side braid ponytail"],
      ["bun-ponytail","お団子ポニー / bun ponytail"],
    ].forEach(x=>put(cat,...x));
  })();

  // === 生成 ===
  const categories = Array.from(byName, ([name, map]) => ({
    name, items: Array.from(map.values())
  }));
  const data = { categories, presets: [] };

  // === 登録（3形態対応）===
  try{
    if (typeof w.__registerHairPart === 'function' && w.__registerHairPart.length >= 3) {
      w.__registerHairPart('hair', 7, data);   // faith互換3引数
    } else if (typeof w.__registerHairPart === 'function') {
      w.__registerHairPart(7, data);           // 従来2引数
    } else if (typeof w.__registerPromptPart === 'function' && w.__registerPromptPart.length >= 3) {
      w.__registerPromptPart('hair', 7, data); // 誤呼び出し吸収
    } else {
      w.__parts = w.__parts || { hair:{} };
      w.__parts.hair = w.__parts.hair || {};
      w.__parts.hair[7] = data;
    }
  }catch(e){
    console.error('[hair_part7 merged 61..70 v7.0] register error:', e);
  }
})(window);