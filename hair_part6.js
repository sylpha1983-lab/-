/* hair_part6.js — merged static hair 51..60 (v6.0)
   - 内容: hair_part51..60 の categories/items を忠実マージ（ID重複は排除）
   - Registers: window.__registerHairPart('hair', 6, { categories:[...], presets:[] })
*/
(function (w) {
  "use strict";

  const byName = new Map();
  const seen = new Set();

  function put(cat, id, label){
    if (!cat || !id) return;
    const nid = String(id).trim();
    if (seen.has(nid)) return;  // 重複排除
    seen.add(nid);
    if (!byName.has(cat)) byName.set(cat, new Map());
    const m = byName.get(cat);
    if (!m.has(nid)) m.set(nid, { id:nid, label: label || nid });
  }

  // === part51: Traditional Ponytails / 和風アレンジポニー 
  (function(){
    const cat="Traditional Ponytails / 和風アレンジポニー";
    [
      ['samurai-ponytail','侍ポニー / samurai ponytail'],
      ['shrine-maiden-ponytail','巫女ポニー / shrine maiden ponytail'],
      ['geisha-ponytail','芸者風ポニー / geisha ponytail'],
      ['kendo-ponytail','剣道ポニー / kendo ponytail'],
      ['sumo-ponytail','相撲力士ポニー / sumo ponytail'],
      ['kabuki-ponytail','歌舞伎ポニー / kabuki ponytail'],
      ['edo-ponytail','江戸風ポニー / edo ponytail'],
    ].forEach(x=>put(cat,...x));
  })();

  // === part52: Magical Girl Ponytails / 魔法少女ポニー 
  (function(){
    const cat="Magical Girl Ponytails / 魔法少女ポニー";
    [
      ['sparkle-ponytail','キラキラポニー / sparkle ponytail'],
      ['starlight-ponytail','スターライトポニー / starlight ponytail'],
      ['cosmic-ponytail','コズミックポニー / cosmic ponytail'],
      ['fairy-ponytail','妖精ポニー / fairy ponytail'],
      ['angel-ponytail','エンジェルポニー / angel ponytail'],
      ['dark-magical-ponytail','ダークマジカルポニー / dark magical ponytail'],
      ['heroine-ponytail','ヒロインポニー / heroine ponytail'],
    ].forEach(x=>put(cat,...x));
  })();

  // === part53: Sports Ponytails / スポーツポニー 
  (function(){
    const cat="Sports Ponytails / スポーツポニー";
    [
      ['runner-ponytail','ランナーポニー / runner ponytail'],
      ['soccer-ponytail','サッカーポニー / soccer ponytail'],
      ['tennis-ponytail','テニスポニー / tennis ponytail'],
      ['swimmer-ponytail','スイマーポニー / swimmer ponytail'],
      ['gymnastics-ponytail','体操ポニー / gymnastics ponytail'],
      ['martialarts-ponytail','武道ポニー / martial arts ponytail'],
      ['basketball-ponytail','バスケポニー / basketball ponytail'],
    ].forEach(x=>put(cat,...x));
  })();

  // === part54: Occupation & Uniform Ponytails / 職業・制服ポニー 
  (function(){
    const cat="Occupation & Uniform Ponytails / 職業・制服ポニー";
    [
      ['nurse-ponytail','ナースポニー / nurse ponytail'],
      ['police-ponytail','ポリスポニー / police ponytail'],
      ['military-ponytail','ミリタリーポニー / military ponytail'],
      ['maid-ponytail','メイドポニー / maid ponytail'],
      ['schoolgirl-ponytail','女子高生ポニー / schoolgirl ponytail'],
      ['idol-ponytail','アイドルポニー / idol ponytail'],
      ['scientist-ponytail','サイエンスポニー / scientist ponytail'],
    ].forEach(x=>put(cat,...x));
  })();

  // === part55: Gothic & Dark Ponytails / ゴシック・ダークポニー 
  (function(){
    const cat="Gothic & Dark Ponytails / ゴシック・ダークポニー";
    [
      ['gothic-ponytail','ゴシックポニー / gothic ponytail'],
      ['vampire-ponytail','ヴァンパイアポニー / vampire ponytail'],
      ['witch-ponytail','ウィッチポニー / witch ponytail'],
      ['dark-angel-ponytail','ダークエンジェルポニー / dark angel ponytail'],
      ['devil-ponytail','デビルポニー / devil ponytail'],
      ['punk-ponytail','パンクポニー / punk ponytail'],
      ['metal-ponytail','メタルポニー / metal ponytail'],
    ].forEach(x=>put(cat,...x));
  })();

  // === part56: Cyber & Futuristic Ponytails / サイバー・未来ポニー 
  (function(){
    const cat="Cyber & Futuristic Ponytails / サイバー・未来ポニー";
    [
      ['cyber-ponytail','サイバーポニー / cyber ponytail'],
      ['neon-ponytail','ネオンポニー / neon ponytail'],
      ['robotic-ponytail','ロボティックポニー / robotic ponytail'],
      ['ai-ponytail','AIポニー / AI ponytail'],
      ['virtual-ponytail','バーチャルポニー / virtual ponytail'],
      ['space-ponytail','スペースポニー / space ponytail'],
      ['hologram-ponytail','ホログラムポニー / hologram ponytail'],
    ].forEach(x=>put(cat,...x));
  })();

  // === part57: Ethnic & Traditional Ponytails / 民族・伝統ポニー 
  (function(){
    const cat="Ethnic & Traditional Ponytails / 民族・伝統ポニー";
    [
      ['japanese-ponytail','和風ポニー / japanese ponytail'],
      ['samurai-ponytail','サムライポニー / samurai ponytail'],
      ['chinese-ponytail','中華風ポニー / chinese ponytail'],
      ['indian-ponytail','インディアンポニー / indian ponytail'],
      ['african-ponytail','アフリカンポニー / african ponytail'],
      ['arabian-ponytail','アラビアンポニー / arabian ponytail'],
      ['viking-ponytail','ヴァイキングポニー / viking ponytail'],
    ].forEach(x=>put(cat,...x));
  })();

  // === part58: Fantasy Ponytails / ファンタジーポニー 
  (function(){
    const cat="Fantasy Ponytails / ファンタジーポニー";
    [
      ['fairy-ponytail','妖精ポニー / fairy ponytail'],
      ['elf-ponytail','エルフポニー / elf ponytail'],
      ['demon-ponytail','悪魔ポニー / demon ponytail'],
      ['angel-ponytail','天使ポニー / angel ponytail'],
      ['mermaid-ponytail','人魚ポニー / mermaid ponytail'],
      ['dragon-ponytail','ドラゴンポニー / dragon ponytail'],
      ['goddess-ponytail','女神ポニー / goddess ponytail'],
    ].forEach(x=>put(cat,...x));
  })();

  // === part59: Sports Ponytails / スポーツポニー（別Ver.） 
  (function(){
    const cat="Sports Ponytails / スポーツポニー";
    [
      ['athlete-ponytail','アスリートポニー / athlete ponytail'],
      ['runner-ponytail','ランナーポニー / runner ponytail'],
      ['gymnast-ponytail','体操ポニー / gymnast ponytail'],
      ['swimmer-ponytail','スイマーポニー / swimmer ponytail'],
      ['soccer-ponytail','サッカーポニー / soccer ponytail'],
      ['basketball-ponytail','バスケットポニー / basketball ponytail'],
      ['tennis-ponytail','テニスポニー / tennis ponytail'],
    ].forEach(x=>put(cat,...x));
  })();

  // === part60: Casual & Everyday Ponytails / カジュアル・日常ポニー 
  (function(){
    const cat="Casual & Everyday Ponytails / カジュアル・日常ポニー";
    [
      ['simple-ponytail','シンプルポニー / simple ponytail'],
      ['messy-ponytail','乱れポニー / messy ponytail'],
      ['casual-ponytail','カジュアルポニー / casual ponytail'],
      ['loose-casual-ponytail','ルーズカジュアルポニー / loose casual ponytail'],
      ['relaxed-ponytail','リラックスポニー / relaxed ponytail'],
      ['carefree-ponytail','ケアフリーポニー / carefree ponytail'],
      ['stylish-casual-ponytail','おしゃれカジュアルポニー / stylish casual ponytail'],
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
      w.__registerHairPart('hair', 6, data);   // faith互換3引数（推奨）
    } else if (typeof w.__registerHairPart === 'function') {
      w.__registerHairPart(6, data);           // 従来2引数
    } else if (typeof w.__registerPromptPart === 'function' && w.__registerPromptPart.length >= 3) {
      w.__registerPromptPart('hair', 6, data); // 誤呼び出し吸収
    } else {
      w.__parts = w.__parts || { hair:{} };
      w.__parts.hair = w.__parts.hair || {};
      w.__parts.hair[6] = data;
    }
  }catch(e){
    console.error('[hair_part6 merged 51..60 v6.0] register error:', e);
  }
})(window);