/* effect_part2.js — merged static effects 11..20 (v2.0)
   - 内容: effect_part11..20 の categories/items を忠実マージ（ID重複は排除）
   - Registers: window.__registerEffectPart('effect', 2, { categories:[...], presets:[] })
   - [CHANGE] ランタイム収集を廃止し、固定展開で安定登録
*/
(function (w) {
  "use strict";

  // 収集テーブル（カテゴリ名→{id,label}のMap）
  const byName = new Map();
  const put = (cat, id, label) => {
    if (!byName.has(cat)) byName.set(cat, new Map());
    const m = byName.get(cat);
    if (!m.has(id)) m.set(id, { id, label });
  };

  // === part11 ===  
  [
    ['Light / 光','rim-light-crown-soft','リムライト・クラウン柔 / rim-light-crown-soft'],
    ['Light / 光','cheek-specular-dot','頬スペキュラ・きらり点 / cheek-specular-dot'],
    ['Light / 光','bloom-velvet','ベルベット・ブルーム / bloom-velvet'],
    ['Light / 光','vignette-soft-ellipse','楕円ビネット・ソフト / vignette-soft-ellipse'],
    ['Lines / 線','impact-lines-softflare','集中線・ソフトフレア / impact-lines-softflare'],
    ['Lines / 線','speed-lines-feather','スピード線・フェザー / speed-lines-feather'],
    ['Particles / 粒子','sparkle-thread','スパークル・細糸 / sparkle-thread'],
    ['Particles / 粒子','dust-sheer','微薄ダスト / dust-sheer'],
    ['Particles / 粒子','bokeh-soft-orbs','ソフトボケ・オーブ / bokeh-soft-orbs'],
    ['Weather / 天候','rain-rimlight','雨・リム光 / rain-rimlight'],
    ['Weather / 天候','haze-gentle','やわらか霞 / haze-gentle'],
    ['VFX / その他','under-eye-softline','目の下・柔線影 / under-eye-softline'],
    ['VFX / その他','tone-fine-cross','トーン・細クロス / tone-fine-cross'],
    ['VFX / その他','lens-ghost-softring','レンズゴースト・柔リング / lens-ghost-softring'],
  ].forEach(x=>put(...x));

  // === part12 ===  
  [
    ['Light / 光','glimmer','glimmer'],
    ['Light / 光','spotlight-circle','spotlight-circle'],
    ['Light / 光','halo-soft','halo-soft'],
    ['Light / 光','sunbeam-rays','sunbeam-rays'],
    ['Light / 光','glow-orbs','glow-orbs'],
    ['Lines / 線','jagged-stress','jagged-stress'],
    ['Lines / 線','scribble-lines','scribble-lines'],
    ['Particles / 粒子','sparkle-thread','sparkle-thread'], // 重複は自動排除
    ['Particles / 粒子','ash-particles','ash-particles'],
    ['Particles / 粒子','snow-flakes','snow-flakes'],
    ['Weather / 天候','storm-flash','storm-flash'],
    ['VFX / その他','glitch-frag','glitch-frag'],
    ['VFX / その他','soft-haze','soft-haze'],
    ['VFX / その他','ink-smudge','ink-smudge'],
  ].forEach(x=>put(...x));

  // === part13 ===  
  [
    ['Light / 光','edge-light-soft','エッジライト・柔 / edge-light-soft'],
    ['Light / 光','inner-glow','インナーグロウ / inner-glow'],
    ['Light / 光','subsurface-warm','サブサーフェス・温 / subsurface-warm'],
    ['Lines / 線','impact-lines-silk','集中線・シルク / impact-lines-silk'],
    ['Lines / 線','speed-lines-whisper','スピード線・ウィスパー / speed-lines-whisper'],
    ['Particles / 粒子','floating-motes','浮遊モート / floating-motes'],
    ['Particles / 粒子','soft-spark-drift','柔ら火花の漂い / soft-spark-drift'],
    ['Particles / 粒子','pollen-sheen','花粉シーン / pollen-sheen'],
    ['Weather / 天候','dew-humidity','朝露・湿り / dew-humidity'],
    ['Weather / 天候','thin-mist','薄もや / thin-mist'],
    ['VFX / その他','tone-soft-grid','トーン・ソフト格子 / tone-soft-grid'],
    ['VFX / その他','bloom-ring-micro','リングブルーム・微 / bloom-ring-micro'],
    ['VFX / その他','chromatic-soft','色収差・弱 / chromatic-soft'],
  ].forEach(x=>put(...x));

  // === part14 ===  
  [
    ['Light / 光','moonbeam','月光 / moonbeam'],
    ['Light / 光','starlight-dust','星屑の光 / starlight-dust'],
    ['Light / 光','neon-glow','ネオングロー / neon-glow'],
    ['Lines / 線','spiral-focus','螺旋集中線 / spiral-focus'],
    ['Lines / 線','burst-lines','爆発線 / burst-lines'],
    ['Particles / 粒子','ember-drifts','燃え残りの粒 / ember-drifts'],
    ['Particles / 粒子','stardust-sparkle','スターダストきらめき / stardust-sparkle'],
    ['Weather / 天候','drizzle-soft','やわらか小雨 / drizzle-soft'],
    ['Weather / 天候','haze-light','淡い霞 / haze-light'],
    ['VFX / その他','lensflare-thin','レンズフレア・細 / lensflare-thin'],
    ['VFX / その他','dream-filter','ドリームフィルター / dream-filter'],
    ['VFX / その他','fractured-glass','割れガラス効果 / fractured-glass'],
  ].forEach(x=>put(...x));

  // === part15 ===  
  [
    ['Light / 光','catchlight-star','キャッチライト・星 / catchlight-star'],
    ['Light / 光','catchlight-tear','キャッチライト・涙 / catchlight-tear'],
    ['Light / 光','rim-light-edge','リムライト・エッジ / rim-light-edge'],
    ['Light / 光','bloom-warm','暖色ブルーム / bloom-warm'],
    ['Light / 光','vignette-soft-ring','ソフトリング・ビネット / vignette-soft-ring'],
    ['Lines / 線','impact-lines-needle','集中線・ニードル / impact-lines-needle'],
    ['Lines / 線','impact-lines-arcwide','集中線・ワイドアーク / impact-lines-arcwide'],
    ['Lines / 線','speed-lines-sheer','スピード線・シア / speed-lines-sheer'],
    ['Particles / 粒子','sparkle-starfall','スターフォール・スパークル / sparkle-starfall'],
    ['Particles / 粒子','mist-softline','淡い筋ミスト / mist-softline'],
    ['Particles / 粒子','pollen-glow','花粉グロー / pollen-glow'],
    ['Weather / 天候','rain-sheen','雨の膜光 / rain-sheen'],
    ['Weather / 天候','snow-softsheet','やわ雪・シート / snow-softsheet'],
    ['VFX / その他','under-eye-softcrease','目の下・柔らしわ影 / under-eye-softcrease'],
    ['VFX / その他','tone-microdots','トーン・極小ドット / tone-microdots'],
    ['VFX / その他','lens-ghost-fine','レンズゴースト・微 / lens-ghost-fine'],
  ].forEach(x=>put(...x));

  // === part16 ===  
  [
    ['Light / 光','rim-light-triple','トリプル・リムライト / rim-light-triple'],
    ['Light / 光','catchlight-heart','キャッチライト・ハート / catchlight-heart'],
    ['Light / 光','softbox-light','ソフトボックス光 / softbox-light'],
    ['Light / 光','window-stripe-light','窓の縞影ライト / window-stripe-light'],
    ['Light / 光','backlight-ring','バックライト・リング / backlight-ring'],
    ['Lines / 線','pulse-lines','鼓動パルス線 / pulse-lines'],
    ['Lines / 線','coil-lines','コイル線 / coil-lines'],
    ['Lines / 線','radial-fine-burst','放射・細バースト / radial-fine-burst'],
    ['Particles / 粒子','glitter-fall','グリッター降り / glitter-fall'],
    ['Particles / 粒子','confetti-spark','紙吹雪スパーク / confetti-spark'],
    ['Particles / 粒子','mist-beads','ミストの粒 / mist-beads'],
    ['Particles / 粒子','snow-crystal','雪の結晶 / snow-crystal'],
    ['Weather / 天候','rain-streaks-diag','雨の筋・斜め / rain-streaks-diag'],
    ['Weather / 天候','downpour-diagonal','土砂降り・斜線 / downpour-diagonal'],
    ['Weather / 天候','blizzard-swirl','吹雪・渦 / blizzard-swirl'],
    ['VFX / その他','film-scratch-fine','フィルム傷・細 / film-scratch-fine'],
    ['VFX / その他','double-exposure-soft','二重露光・ソフト / double-exposure-soft'],
    ['VFX / その他','light-leak-soft','ライトリーク・やわら / light-leak-soft'],
    ['VFX / その他','chromatic-ring-soft','色収差リング・弱 / chromatic-ring-soft'],
  ].forEach(x=>put(...x));

  // === part17 ===  
  [
    ['Light / 光','dappled-light','木漏れ日ライト / dappled-light'],
    ['Light / 光','moonlight-glow','月光の輝き / moonlight-glow'],
    ['Light / 光','light-shaft','光の筋 / light-shaft'],
    ['Light / 光','halo-soft','やわらかい光輪 / halo-soft'],
    ['Lines / 線','spiral-lines','渦巻き線 / spiral-lines'],
    ['Lines / 線','burst-sharp','シャープバースト線 / burst-sharp'],
    ['Lines / 線','dash-motion','ダッシュ動線 / dash-motion'],
    ['Particles / 粒子','dust-motes','ほこり粒 / dust-motes'],
    ['Particles / 粒子','sparkle-rainbow','虹色スパークル / sparkle-rainbow'],
    ['Particles / 粒子','bubble-float','浮遊バブル / bubble-float'],
    ['Weather / 天候','light-rain','小雨 / light-rain'],
    ['Weather / 天候','sun-shower','天気雨 / sun-shower'],
    ['VFX / その他','lens-flare-soft','レンズフレア・やわら / lens-flare-soft'],
    ['VFX / その他','prism-shift','プリズムシフト / prism-shift'],
    ['VFX / その他','aura-glow','オーラ輝き / aura-glow'],
  ].forEach(x=>put(...x));

  // === part18 ===  
  [
    ['Light / 光','eyelight-softbar','アイライト・ソフトバー / eyelight-softbar'],
    ['Light / 光','kiss-light','キスライト（頬狙い）/ kiss-light'],
    ['Light / 光','halo-ring-thin','薄いリングハロー / halo-ring-thin'],
    ['Light / 光','backglow-warm','背面グロー・暖 / backglow-warm'],
    ['Lines / 線','impact-spark-lines','火花集中線 / impact-spark-lines'],
    ['Lines / 線','wave-lines-soft','波紋線・柔 / wave-lines-soft'],
    ['Particles / 粒子','glimmer-dust','微光ダスト / glimmer-dust'],
    ['Particles / 粒子','soft-spark-points','柔スパーク点 / soft-spark-points'],
    ['Particles / 粒子','petal-swirls','花びらスワール / petal-swirls'],
    ['Weather / 天候','mist-ribbon','リボン状の霧 / mist-ribbon'],
    ['Weather / 天候','spark-rain','きら雨 / spark-rain'],
    ['VFX / その他','tone-softgrain','ソフト粒状トーン / tone-softgrain'],
    ['VFX / その他','soft-chromatic','弱色収差 / soft-chromatic'],
    ['VFX / その他','narrative-frame','物語フレーム / narrative-frame'],
  ].forEach(x=>put(...x));

  // === part19 ===  
  [
    ['Light / 光','edge-sheen','エッジの艶光 / edge-sheen'],
    ['Light / 光','subtle-bounce','サブtleバウンス光 / subtle-bounce'],
    ['Light / 光','rim-ember','リムライト・残り火 / rim-ember'],
    ['Light / 光','volumetric-soft','ボリュメトリック・柔 / volumetric-soft'],
    ['Lines / 線','hairline-burst','極細バースト線 / hairline-burst'],
    ['Lines / 線','shear-speed-lines','シア・スピード線 / shear-speed-lines'],
    ['Lines / 線','orbit-focus-lines','オービット集中線 / orbit-focus-lines'],
    ['Particles / 粒子','ember-sparks-fine','残り火スパーク・微 / ember-sparks-fine'],
    ['Particles / 粒子','haze-motes','ヘイズ粒 / haze-motes'],
    ['Particles / 粒子','snow-faint-drift','うっすら雪の漂い / snow-faint-drift'],
    ['Weather / 天候','sprinkle-light','ぱらぱら小雨 / sprinkle-light'],
    ['Weather / 天候','haze-backlit','逆光ヘイズ / haze-backlit'],
    ['VFX / その他','soft-focus-frame','ソフトフォーカス枠 / soft-focus-frame'],
    ['VFX / その他','micro-glow-rim','マイクログロウ・縁 / micro-glow-rim'],
    ['VFX / その他','fine-grain-organic','有機微粒子 / fine-grain-organic'],
  ].forEach(x=>put(...x));

  // === part20 ===  
  [
    ['Light / 光','edge-halo-soft','縁ハロー・柔 / edge-halo-soft'],
    ['Light / 光','kisslight-dual','デュアル・キスライト / kisslight-dual'],
    ['Light / 光','inner-bloom-warm','内側ブルーム・暖 / inner-bloom-warm'],
    ['Light / 光','backline-neon-soft','背面ライン・ソフトネオン / backline-neon-soft'],
    ['Lines / 線','lace-lines','レース線 / lace-lines'],
    ['Lines / 線','tension-threads','緊張の糸線 / tension-threads'],
    ['Particles / 粒子','glow-petals','光る花弁 / glow-petals'],
    ['Particles / 粒子','soft-spark-mist','柔スパーク霧 / soft-spark-mist'],
    ['Particles / 粒子','star-confetti','星の紙吹雪 / star-confetti'],
    ['Weather / 天候','haze-sunbeam','霞に差す光条 / haze-sunbeam'],
    ['Weather / 天候','drift-spark-snow','きら雪の漂い / drift-spark-snow'],
    ['VFX / その他','soft-vignette-frame','ソフトビネット枠 / soft-vignette-frame'],
    ['VFX / その他','film-bloom-grain','フィルム・ブルーム粒 / film-bloom-grain'],
    ['VFX / その他','subtle-zoom-frame','微ズーム枠 / subtle-zoom-frame'],
  ].forEach(x=>put(...x));

  // === categories へ変換 ===
  const categories = Array.from(byName, ([name, map]) => ({
    name,
    items: Array.from(map.values())
  }));
  const data = { categories, presets: [] };

  // === 登録（3形態対応）===
  try{
    if (typeof w.__registerEffectPart === 'function' && w.__registerEffectPart.length >= 3) {
      w.__registerEffectPart('effect', 2, data);   // faith互換3引数（推奨）
    } else if (typeof w.__registerEffectPart === 'function') {
      w.__registerEffectPart(2, data);             // 従来2引数
    } else if (typeof w.__registerPromptPart === 'function' && w.__registerPromptPart.length >= 3) {
      w.__registerPromptPart('effect', 2, data);   // 誤呼び出し吸収
    } else {
      w.__parts = w.__parts || { effect:{} };
      w.__parts.effect = w.__parts.effect || {};
      w.__parts.effect[2] = data;                  // フォールバック
    }
  }catch(e){
    console.error('[effect_part2 merged v2.0] register error:', e);
  }
})(window);