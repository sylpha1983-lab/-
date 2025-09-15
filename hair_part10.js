/* hair_part10.js — merged static hair 91..96 + extras (v10.0)
   - 内容: hair_part91..96 の categories/items を忠実マージ（ID重複は排除）
   - 追加: Pastel Colors, Metallic Shine, Glow & Reactive Colors を拡張
   - Registers: window.__registerHairPart('hair', 10, { categories:[...], presets:[] })
*/
(function (w) {
  "use strict";

  const byName = new Map();
  const seen = new Set();

  function put(cat, id, label){
    if (!cat || !id) return;
    const nid = String(id).trim();
    if (seen.has(nid)) return;  // 重複IDは排除
    seen.add(nid);
    if (!byName.has(cat)) byName.set(cat, new Map());
    const m = byName.get(cat);
    if (!m.has(nid)) m.set(nid, { id:nid, label: label || nid });
  }

  // === part91: Fantasy & Magic Colors === 
  (function(){
    const cat="Fantasy & Magic Colors / 幻想・魔法系カラー";
    [
      ["aurora-shine","オーロラシャイン / aurora shine"],
      ["starlight-blue","星明かりブルー / starlight blue"],
      ["galaxy-purple","銀河パープル / galaxy purple"],
      ["nebula-pink","星雲ピンク / nebula pink"],
      ["moonlight-silver","月光シルバー / moonlight silver"],
      ["sunrise-gold","朝焼けゴールド / sunrise gold"],
      ["magical-girl-pink","魔法少女ピンク / magical girl pink"],
      ["spellbound-green","魔術グリーン / spellbound green"],
      ["mystic-indigo","神秘インディゴ / mystic indigo"],
      ["dreamy-rainbow","夢幻レインボー / dreamy rainbow"],
    ].forEach(x=>put(cat,...x));
  })();

  // === part92: Dark & Otherworldly Colors === 
  (function(){
    const cat="Dark & Otherworldly Colors / 闇・異形カラー";
    [
      ["void-black","虚無ブラック / void black"],
      ["abyss-purple","深淵パープル / abyss purple"],
      ["blood-crimson","血のクリムゾン / blood crimson"],
      ["shadow-gray","影グレー / shadow gray"],
      ["ghostly-white","幽玄ホワイト / ghostly white"],
      ["demonic-red","悪魔レッド / demonic red"],
      ["phantom-blue","幻影ブルー / phantom blue"],
      ["toxic-green","毒グリーン / toxic green"],
      ["nightmare-indigo","悪夢インディゴ / nightmare indigo"],
      ["eldritch-gold","異形ゴールド / eldritch gold"],
    ].forEach(x=>put(cat,...x));
  })();

  // === part93: Futuristic & Cyber Colors === 
  (function(){
    const cat="Futuristic & Cyber Colors / 未来・サイバーカラー";
    [
      ["neon-pink","ネオンピンク / neon pink"],
      ["neon-blue","ネオンブルー / neon blue"],
      ["cyber-green","サイバーグリーン / cyber green"],
      ["digital-purple","デジタルパープル / digital purple"],
      ["neon-yellow","ネオンイエロー / neon yellow"],
      ["laser-red","レーザーレッド / laser red"],
      ["hologram-silver","ホログラムシルバー / hologram silver"],
      ["vr-indigo","VRインディゴ / vr indigo"],
      ["electric-orange","エレクトリックオレンジ / electric orange"],
      ["circuit-gold","回路ゴールド / circuit gold"],
    ].forEach(x=>put(cat,...x));
  })();

  // === part94: Natural & Element Colors === 
  (function(){
    const cat="Natural & Element Colors / 自然・元素カラー";
    [
      ["forest-green","森グリーン / forest green"],
      ["earth-brown","大地ブラウン / earth brown"],
      ["river-blue","河川ブルー / river blue"],
      ["sunset-orange","夕焼けオレンジ / sunset orange"],
      ["sand-gold","砂ゴールド / sand gold"],
      ["stone-gray","石グレー / stone gray"],
      ["volcano-red","火山レッド / volcano red"],
      ["ocean-teal","海洋ティール / ocean teal"],
      ["leaf-green","葉グリーン / leaf green"],
      ["crystal-blue","水晶ブルー / crystal blue"],
    ].forEach(x=>put(cat,...x));
  })();

  // === part95: Ethnic & Traditional Colors === 
  (function(){
    const cat="Ethnic & Traditional Colors / 民族・伝統カラー";
    [
      ["japan-sakura-pink","和桜ピンク / sakura pink (Japan)"],
      ["japan-matcha-green","抹茶グリーン / matcha green (Japan)"],
      ["china-crimson","中華クリムゾン / chinese crimson"],
      ["china-golden-yellow","皇帝イエロー / imperial yellow (China)"],
      ["india-saffron","インドサフラン / india saffron"],
      ["india-indigo","インディゴ / indigo (India)"],
      ["africa-tribal-red","アフリカ部族レッド / african tribal red"],
      ["middleeast-turquoise","中東ターコイズ / middle east turquoise"],
      ["celtic-emerald","ケルトエメラルド / celtic emerald"],
      ["nordic-silver","北欧シルバー / nordic silver"],
    ].forEach(x=>put(cat,...x));
  })();

  // === part96: Special Gradient Colors === 
  (function(){
    const cat="Special Gradient Colors / 特殊グラデーション";
    [
      ["fire-gradient","炎グラデーション / fire gradient"],
      ["aqua-gradient","水流グラデーション / aqua gradient"],
      ["galaxy-gradient","銀河グラデーション / galaxy gradient"],
      ["sunset-gradient","夕焼けグラデーション / sunset gradient"],
      ["rainbow-gradient","虹グラデーション / rainbow gradient"],
      ["forest-gradient","森グラデーション / forest gradient"],
      ["storm-gradient","嵐グラデーション / storm gradient"],
      ["crystal-gradient","水晶グラデーション / crystal gradient"],
      ["ember-gradient","残火グラデーション / ember gradient"],
      ["neon-gradient","ネオングラデーション / neon gradient"],
    ].forEach(x=>put(cat,...x));
  })();

  // === Extras: Pastel, Metallic, Glow Colors ===
  (function(){
    const cat1="Pastel Colors / パステルカラー";
    [
      ["pastel-pink","パステルピンク / pastel pink"],
      ["pastel-blue","パステルブルー / pastel blue"],
      ["pastel-green","パステルグリーン / pastel green"],
      ["pastel-yellow","パステルイエロー / pastel yellow"],
      ["pastel-lavender","パステルラベンダー / pastel lavender"],
      ["pastel-mint","パステルミント / pastel mint"],
    ].forEach(x=>put(cat1,...x));

    const cat2="Metallic Shine / メタリック系";
    [
      ["metallic-rose-gold","メタリックローズゴールド / metallic rose gold"],
      ["metallic-copper","メタリックカッパー / metallic copper"],
      ["metallic-blue","メタリックブルー / metallic blue"],
      ["metallic-emerald","メタリックエメラルド / metallic emerald"],
    ].forEach(x=>put(cat2,...x));

    const cat3="Glow & Reactive Colors / 発光・反応系カラー";
    [
      ["bioluminescent-green","生物発光グリーン / bioluminescent green"],
      ["phosphor-blue","燐光ブルー / phosphorescent blue"],
      ["radioactive-neon","放射ネオンカラー / radioactive neon"],
      ["thermal-red","熱反応レッド / thermal red"],
    ].forEach(x=>put(cat3,...x));
  })();

  // === 生成 ===
  const categories = Array.from(byName, ([name,map])=>({ name, items:Array.from(map.values()) }));
  const data = { categories, presets: [] };

  // === 登録 ===
  try{
    if (typeof w.__registerHairPart === 'function' && w.__registerHairPart.length >= 3) {
      w.__registerHairPart('hair', 10, data);
    } else if (typeof w.__registerHairPart === 'function') {
      w.__registerHairPart(10, data);
    } else if (typeof w.__registerPromptPart === 'function' && w.__registerPromptPart.length >= 3) {
      w.__registerPromptPart('hair', 10, data);
    } else {
      w.__parts = w.__parts || { hair:{} };
      w.__parts.hair = w.__parts.hair || {};
      w.__parts.hair[10] = data;
    }
  }catch(e){
    console.error('[hair_part10 merged 91..96 + extras v10.0] register error:', e);
  }
})(window);