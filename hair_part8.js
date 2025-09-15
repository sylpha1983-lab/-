/* hair_part8.js — merged static hair 71..80 (v8.0)
   - 内容: hair_part71..80 の categories/items を忠実マージ（ID重複は排除）
   - Registers: window.__registerHairPart('hair', 8, { categories:[...], presets:[] })
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

  // === part71: Seasonal & Event Ponytails 
  (function(){
    const cat="Seasonal & Event Ponytails / 季節・イベントポニー";
    [
      ["summer-festival-ponytail","夏祭りポニー / summer festival ponytail"],
      ["christmas-ponytail","クリスマスポニー / christmas ponytail"],
      ["halloween-ponytail","ハロウィンポニー / halloween ponytail"],
      ["valentine-ponytail","バレンタインポニー / valentine ponytail"],
      ["spring-flower-ponytail","春の花飾りポニー / spring flower ponytail"],
      ["autumn-leaf-ponytail","紅葉ポニー / autumn leaf ponytail"],
      ["newyear-ponytail","正月飾りポニー / new year ponytail"],
    ].forEach(x=>put(cat,...x));
  })();

  // === part72: Fashion & Unique Ponytails 
  (function(){
    const cat="Fashion & Unique Ponytails / ファッション・個性派ポニー";
    [
      ["punk-ponytail","パンクポニー / punk ponytail"],
      ["gothic-ponytail","ゴシックポニー / gothic ponytail"],
      ["cyber-ponytail","サイバーポニー / cyber ponytail"],
      ["idol-ponytail","アイドルポニー / idol ponytail"],
      ["princess-ponytail","プリンセスポニー / princess ponytail"],
      ["rockstar-ponytail","ロックスター風ポニー / rockstar ponytail"],
      ["casual-street-ponytail","カジュアルストリートポニー / casual street ponytail"],
    ].forEach(x=>put(cat,...x));
  })();

  // === part73: Futuristic & Sci-Fi Ponytails 
  (function(){
    const cat="Futuristic & Sci-Fi Ponytails / 未来・SFポニー";
    [
      ["cyborg-ponytail","サイボーグポニー / cyborg ponytail"],
      ["hologram-ponytail","ホログラムポニー / hologram ponytail"],
      ["robotic-ponytail","ロボティックポニー / robotic ponytail"],
      ["space-soldier-ponytail","宇宙兵士ポニー / space soldier ponytail"],
      ["neon-ponytail","ネオンポニー / neon ponytail"],
      ["virtual-reality-ponytail","VRポニー / virtual reality ponytail"],
      ["android-ponytail","アンドロイドポニー / android ponytail"],
    ].forEach(x=>put(cat,...x));
  })();

  // === part74: Fantasy & Magic Ponytails 
  (function(){
    const cat="Fantasy & Magic Ponytails / 幻想・魔法ポニー";
    [
      ["elf-ponytail","エルフポニー / elf ponytail"],
      ["witch-ponytail","魔女ポニー / witch ponytail"],
      ["angel-ponytail","天使ポニー / angel ponytail"],
      ["demon-ponytail","悪魔ポニー / demon ponytail"],
      ["fairy-ponytail","妖精ポニー / fairy ponytail"],
      ["sorceress-ponytail","魔導士ポニー / sorceress ponytail"],
      ["dragon-knight-ponytail","竜騎士ポニー / dragon knight ponytail"],
    ].forEach(x=>put(cat,...x));
  })();

  // === part75: Ethnic & Cultural Ponytails 
  (function(){
    const cat="Ethnic & Cultural Ponytails / 民族・文化ポニー";
    [
      ["samurai-ponytail","侍ポニー / samurai ponytail"],
      ["maiko-ponytail","舞妓ポニー / maiko ponytail"],
      ["viking-ponytail","ヴァイキングポニー / viking ponytail"],
      ["native-tribal-ponytail","部族ポニー / native tribal ponytail"],
      ["egyptian-ponytail","エジプトポニー / egyptian ponytail"],
      ["indian-dancer-ponytail","インディアン舞踊ポニー / indian dancer ponytail"],
      ["african-braided-ponytail","アフリカン編み込みポニー / african braided ponytail"],
    ].forEach(x=>put(cat,...x));
  })();

  // === part76: Animal & Beast-Ear Ponytails 
  (function(){
    const cat="Animal & Beast-Ear Ponytails / 動物・獣耳ポニー";
    [
      ["fox-ponytail","狐耳ポニー / fox ear ponytail"],
      ["wolf-ponytail","狼耳ポニー / wolf ear ponytail"],
      ["cat-ponytail","猫耳ポニー / cat ear ponytail"],
      ["rabbit-ponytail","兎耳ポニー / rabbit ear ponytail"],
      ["deer-ponytail","鹿角ポニー / deer antler ponytail"],
      ["dragon-ponytail","竜角ポニー / dragon horn ponytail"],
      ["bear-ponytail","熊耳ポニー / bear ear ponytail"],
    ].forEach(x=>put(cat,...x));
  })();

  // === part77: Ocean & Mermaid Ponytails 
  (function(){
    const cat="Ocean & Mermaid Ponytails / 海・人魚ポニー";
    [
      ["mermaid-ponytail","マーメイドポニー / mermaid ponytail"],
      ["coral-ponytail","珊瑚飾りポニー / coral ponytail"],
      ["wave-ponytail","波模様ポニー / wave ponytail"],
      ["shell-ponytail","シェルポニー / shell ponytail"],
      ["seaweed-ponytail","海藻ポニー / seaweed ponytail"],
      ["pearl-ponytail","真珠ポニー / pearl ponytail"],
      ["deepsea-ponytail","深海ポニー / deep sea ponytail"],
    ].forEach(x=>put(cat,...x));
  })();

  // === part78: Battle & Armor Ponytails 
  (function(){
    const cat="Battle & Armor Ponytails / 戦闘・アーマーポニー";
    [
      ["knight-ponytail","騎士ポニー / knight ponytail"],
      ["samurai-armor-ponytail","侍甲冑ポニー / samurai armor ponytail"],
      ["warrior-ponytail","戦士ポニー / warrior ponytail"],
      ["gladiator-ponytail","剣闘士ポニー / gladiator ponytail"],
      ["mecha-ponytail","メカポニー / mecha ponytail"],
      ["berserker-ponytail","狂戦士ポニー / berserker ponytail"],
      ["vampire-warrior-ponytail","ヴァンパイア戦士ポニー / vampire warrior ponytail"],
    ].forEach(x=>put(cat,...x));
  })();

  // === part79: Hair Basic Colors Extended 
  (function(){
    const cat="Hair Basic Colors Extended / 基本カラー拡張";
    [
      ["dark-brown-hair","ダークブラウン / dark brown hair"],
      ["light-brown-hair","ライトブラウン / light brown hair"],
      ["platinum-blonde-hair","プラチナブロンド / platinum blonde hair"],
      ["honey-blonde-hair","ハニーブロンド / honey blonde hair"],
      ["strawberry-blonde-hair","ストロベリーブロンド / strawberry blonde hair"],
      ["auburn-hair","オーバーン / auburn hair"],
      ["chestnut-hair","チェスナットブラウン / chestnut hair"],
      ["ash-brown-hair","アッシュブラウン / ash brown hair"],
      ["ash-blonde-hair","アッシュブロンド / ash blonde hair"],
      ["dark-red-hair","ダークレッド / dark red hair"],
      ["burgundy-hair","バーガンディ / burgundy hair"],
      ["rose-gold-hair","ローズゴールド / rose gold hair"],
    ].forEach(x=>put(cat,...x));
  })();

  // === part80: Hair Colors & Accents Extended 
  (function(){
    const cat="Hair Colors & Accents Extended / 色・アクセント拡張";
    [
      ["ombre-hair","オムブレ / ombré hair"],
      ["rainbow-hair","レインボー / rainbow hair"],
      ["galaxy-hair","ギャラクシー / galaxy hair"],
      ["neon-green-hair","ネオングリーン / neon green hair"],
      ["electric-blue-hair","エレクトリックブルー / electric blue hair"],
      ["pastel-pink-hair","パステルピンク / pastel pink hair"],
      ["mint-green-hair","ミントグリーン / mint green hair"],
      ["lavender-hair","ラベンダー / lavender hair"],
      ["peach-hair","ピーチカラー / peach hair"],
      ["gradient-hair","グラデーション / gradient hair"],
      ["split-dye-hair","スプリットダイ / split dye hair"],
      ["fire-gradient-hair","炎グラデーション / fire gradient hair"],
      ["ice-gradient-hair","氷グラデーション / ice gradient hair"],
      ["holographic-hair","ホログラフィック / holographic hair"],
    ].forEach(x=>put(cat,...x));
  })();

  // === 生成 ===
  const categories = Array.from(byName, ([name,map])=>({
    name, items:Array.from(map.values())
  }));
  const data = { categories, presets: [] };

  // === 登録 ===
  try{
    if (typeof w.__registerHairPart === 'function' && w.__registerHairPart.length >= 3) {
      w.__registerHairPart('hair', 8, data);
    } else if (typeof w.__registerHairPart === 'function') {
      w.__registerHairPart(8, data);
    } else if (typeof w.__registerPromptPart === 'function' && w.__registerPromptPart.length >= 3) {
      w.__registerPromptPart('hair', 8, data);
    } else {
      w.__parts = w.__parts || { hair:{} };
      w.__parts.hair = w.__parts.hair || {};
      w.__parts.hair[8] = data;
    }
  }catch(e){
    console.error('[hair_part8 merged 71..80 v8.0] register error:', e);
  }
})(window);