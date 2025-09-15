/* hair_part5.js — merged static hair 41..50 (v5.0)
   - 内容: hair_part41..50 の categories/items を忠実マージ（ID重複は排除）
   - Registers: window.__registerHairPart('hair', 5, { categories:[...], presets:[] })
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

  // 41: Character Ponytails 【src】
  (function(){
    const cat="Character Ponytails / キャラクターポニー";
    [
      ['idol-ponytail','アイドルポニー / idol ponytail'],
      ['anime-ponytail','アニメ風ポニー / anime-style ponytail'],
      ['game-ponytail','ゲーム風ポニー / game-style ponytail'],
      ['heroine-ponytail','ヒロインポニー / heroine ponytail'],
      ['villain-ponytail','ヴィランポニー / villain ponytail'],
      ['magical-girl-ponytail','魔法少女ポニー / magical girl ponytail'],
    ].forEach(x=>put(cat,...x));
  })(); /*  */

  // 42: Arranged Ponytails
  (function(){
    const cat="Arranged Ponytails / 特殊アレンジポニー";
    [
      ['braided-ponytail','編み込みポニー / braided ponytail'],
      ['looped-ponytail','ループポニー / looped ponytail'],
      ['knotted-ponytail','結びポニー / knotted ponytail'],
      ['stacked-ponytail','重ねポニー / stacked ponytail'],
      ['tied-ponytail','リボン結びポニー / tied with ribbon ponytail'],
      ['accessory-ponytail','アクセサリーポニー / accessory ponytail'],
    ].forEach(x=>put(cat,...x));
  })(); /*  */

  // 43: Otherworldly Ponytails
  (function(){
    const cat="Otherworldly Ponytails / 異世界・非現実ポニー";
    [
      ['angel-ponytail','天使ポニー / angel ponytail'],
      ['demon-ponytail','悪魔ポニー / demon ponytail'],
      ['elf-ponytail','エルフポニー / elf ponytail'],
      ['orc-ponytail','オークポニー / orc ponytail'],
      ['alien-ponytail','エイリアンポニー / alien ponytail'],
      ['mecha-ponytail','メカポニー / mecha ponytail'],
      ['hologram-ponytail','ホログラムポニー / hologram ponytail'],
    ].forEach(x=>put(cat,...x));
  })(); /*  */

  // 44: Occupational Ponytails
  (function(){
    const cat="Occupational Ponytails / 職業系ポニー";
    [
      ['nurse-ponytail','ナースポニー / nurse ponytail'],
      ['maid-ponytail','メイドポニー / maid ponytail'],
      ['teacher-ponytail','教師ポニー / teacher ponytail'],
      ['police-ponytail','警官ポニー / police ponytail'],
      ['soldier-ponytail','兵士ポニー / soldier ponytail'],
      ['samurai-ponytail','侍ポニー / samurai ponytail'],
      ['office-ponytail','OLポニー / office lady ponytail'],
    ].forEach(x=>put(cat,...x));
  })(); /*  */

  // 45: Combat Ponytails
  (function(){
    const cat="Combat Ponytails / 戦闘スタイルポニー";
    [
      ['martial-ponytail','武術ポニー / martial ponytail'],
      ['ninja-ponytail','忍者ポニー / ninja ponytail'],
      ['knight-ponytail','騎士ポニー / knight ponytail'],
      ['archer-ponytail','弓使いポニー / archer ponytail'],
      ['sorcerer-ponytail','魔術師ポニー / sorcerer ponytail'],
      ['berserker-ponytail','狂戦士ポニー / berserker ponytail'],
      ['assassin-ponytail','暗殺者ポニー / assassin ponytail'],
    ].forEach(x=>put(cat,...x));
  })(); /*  */

  // 46: Futuristic Ponytails
  (function(){
    const cat="Futuristic Ponytails / 未来・SFポニー";
    [
      ['cyber-ponytail','サイバーポニー / cyber ponytail'],
      ['hologram-ponytail','ホログラムポニー / hologram ponytail'],
      ['android-ponytail','アンドロイドポニー / android ponytail'],
      ['vr-ponytail','VRポニー / VR ponytail'],
      ['space-ponytail','宇宙ポニー / space ponytail'],
      ['biomech-ponytail','バイオメカポニー / biomech ponytail'],
      ['quantum-ponytail','量子ポニー / quantum ponytail'],
    ].forEach(x=>put(cat,...x));
  })(); /*  */

  // 47: Cultural Ponytails
  (function(){
    const cat="Cultural Ponytails / 民族・伝統文化ポニー";
    [
      ['geisha-ponytail','芸者風ポニー / geisha ponytail'],
      ['samurai-top-ponytail','侍風結い上げポニー / samurai top ponytail'],
      ['viking-ponytail','ヴァイキングポニー / viking ponytail'],
      ['egyptian-ponytail','エジプト風ポニー / egyptian ponytail'],
      ['indian-ponytail','インディアンポニー / indian ponytail'],
      ['arabian-ponytail','アラビアンポニー / arabian ponytail'],
      ['tribal-ponytail','部族ポニー / tribal ponytail'],
    ].forEach(x=>put(cat,...x));
  })(); /*  */

  // 48: Fantasy Species Ponytails
  (function(){
    const cat="Fantasy Species Ponytails / ファンタジー種族ポニー";
    [
      ['elf-ponytail','エルフポニー / elf ponytail'],
      ['darkelf-ponytail','ダークエルフポニー / dark elf ponytail'],
      ['dwarf-ponytail','ドワーフポニー / dwarf ponytail'],
      ['orc-ponytail','オークポニー / orc ponytail'],
      ['fairy-ponytail','妖精ポニー / fairy ponytail'],
      ['dragonkin-ponytail','竜人ポニー / dragonkin ponytail'],
      ['demon-ponytail','悪魔ポニー / demon ponytail'],
    ].forEach(x=>put(cat,...x));
  })(); /*  */

  // 49: Casual Ponytails
  (function(){
    const cat="Casual Ponytails / 日常・カジュアルポニー";
    [
      ['messy-ponytail','ラフポニー / messy ponytail'],
      ['loose-ponytail','ルーズポニー / loose ponytail'],
      ['side-ponytail','片側ポニー / side ponytail'],
      ['low-ponytail','ローポニー / low ponytail'],
      ['high-ponytail','ハイポニー / high ponytail'],
      ['twin-low-ponytail','ツインローポニー / twin low ponytail'],
      ['quick-tie-ponytail','即席結びポニー / quick-tie ponytail'],
    ].forEach(x=>put(cat,...x));
  })(); /*  */

  // 50: Gothic & Punk Ponytails
  (function(){
    const cat="Gothic & Punk Ponytails / ゴシック・パンクポニー";
    [
      ['gothic-ponytail','ゴシックポニー / gothic ponytail'],
      ['punk-ponytail','パンクポニー / punk ponytail'],
      ['rock-ponytail','ロックポニー / rock ponytail'],
      ['metal-ponytail','メタルポニー / metal ponytail'],
      ['visual-kei-ponytail','ヴィジュアル系ポニー / visual-kei ponytail'],
      ['emo-ponytail','エモポニー / emo ponytail'],
      ['goth-lolita-ponytail','ゴスロリポニー / goth-lolita ponytail'],
    ].forEach(x=>put(cat,...x));
  })(); /*  */

  // === 生成 ===
  const categories = Array.from(byName, ([name, map]) => ({
    name,
    items: Array.from(map.values())
  }));
  const data = { categories, presets: [] };

  // === 登録（3形態対応）===
  try{
    if (typeof w.__registerHairPart === 'function' && w.__registerHairPart.length >= 3) {
      w.__registerHairPart('hair', 5, data);   // faith互換3引数（推奨）
    } else if (typeof w.__registerHairPart === 'function') {
      w.__registerHairPart(5, data);           // 従来2引数
    } else if (typeof w.__registerPromptPart === 'function' && w.__registerPromptPart.length >= 3) {
      w.__registerPromptPart('hair', 5, data); // 誤呼び出し吸収
    } else {
      w.__parts = w.__parts || { hair:{} };
      w.__parts.hair = w.__parts.hair || {};
      w.__parts.hair[5] = data;
    }
  }catch(e){
    console.error('[hair_part5 merged 41..50 v5.0] register error:', e);
  }
})(window);