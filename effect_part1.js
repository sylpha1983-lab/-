/* effect_part1.js — merged static effects 1..10 (v1.0)
   - 内容: effect_part1..10 の categories/items を忠実マージ（ID重複は排除）
   - Registers: window.__registerEffectPart('effect', 1, { categories:[...], presets:[] })
   - [CHANGE] ランタイム収集・依存を廃止し、固定展開で安定登録
*/
(function (w) {
  "use strict";

  // ===== 固定展開（各 part の items を転記） =====
  const byName = new Map();
  const put = (cat, id, label) => {
    if (!byName.has(cat)) byName.set(cat, new Map());
    const m = byName.get(cat);
    if (!m.has(id)) m.set(id, { id, label });
  };

  // --- part1 （エフェクト系） 
  [
    ['エフェクト系','rim-light','リムライト / rim light'],
    ['エフェクト系','rim-light-strong','強リムライト / rim light strong'],
    ['エフェクト系','face-gloss','顔ハイライト光沢 / face gloss'],
    ['エフェクト系','bloom','ブルーム / bloom'],
    ['エフェクト系','vignette','ビネット / vignette'],
    ['エフェクト系','impact-lines','集中線 / impact lines'],
    ['エフェクト系','impact-lines-thick','集中線（極太）/ impact lines thick'],
    ['エフェクト系','under-eye-shadow','目の下の影 / under-eye shadow'],
    ['エフェクト系','sparkle','キラキラ / sparkle'],
    ['エフェクト系','rain','雨 / rain'],
  ].forEach(x=>put(...x));

  // --- part2 （Light/Lines/Particles/Weather/VFX） 
  [
    // Light
    ['Light / 光','rim-light-twin','ツイン・リムライト / rim light twin'],
    ['Light / 光','face-gloss-micro','顔ハイライト・微 / face gloss micro'],
    ['Light / 光','bloom-dreamy','ドリーミー・ブルーム / bloom dreamy'],
    ['Light / 光','vignette-oval','オーバル・ビネット / vignette oval'],
    // Lines
    ['Lines / 線','impact-lines-radial','集中線・放射 / impact lines radial'],
    ['Lines / 線','impact-lines-thicker','集中線・極太+ / impact lines thicker'],
    ['Lines / 線','speed-lines-swipe','スピード線・スワイプ / speed lines swipe'],
    // Particles
    ['Particles / 粒子','sparkle-ribbon','スパークル・リボン / sparkle ribbon'],
    ['Particles / 粒子','sparkle-bokeh-ring','スパークル・ボケ輪 / sparkle bokeh ring'],
    ['Particles / 粒子','film-grain','フィルム粒子 / film grain'],
    // Weather
    ['Weather / 天候','drizzle','霧雨 / drizzle'],
    ['Weather / 天候','heavy-rain','豪雨 / heavy rain'],
    ['Weather / 天候','snow-sparkle','雪スパークル / snow sparkle'],
    // VFX
    ['VFX / その他','under-eye-shadow-soft','目の下の影・薄 / under-eye shadow soft'],
    ['VFX / その他','cheek-highlight','頬ハイライト / cheek highlight'],
    ['VFX / その他','screen-tone-fine','スクリーントーン・細 / screen tone fine'],
    ['VFX / その他','soft-ghost','レンズゴースト・柔 / soft ghost'],
  ].forEach(x=>put(...x));

  // --- part3 （legacy→UMD） 
  [
    ['Light / 光','rim-light-crown','リムライト・クラウン / rim light crown'],
    ['Light / 光','face-gloss-ring','顔ハイライト・光輪 / face gloss ring'],
    ['Light / 光','bloom-dreamy-plus','ドリーミー・ブルーム＋ / bloom dreamy plus'],
    ['Light / 光','vignette-feather','フェザー・ビネット / vignette feather'],
    ['Lines / 線','impact-lines-flare','集中線・フレア / impact lines flare'],
    ['Lines / 線','impact-lines-taper','集中線・テーパー / impact lines taper'],
    ['Particles / 粒子','sparkle-filament','スパークル・フィラメント / sparkle filament'],
    ['Particles / 粒子','sparkle-dust-fine','微細ダスト・スパーク / sparkle dust fine'],
    ['Particles / 粒子','film-grain-classic','フィルム粒子・クラシック / film grain classic'],
    ['Weather / 天候','mist','もや / mist'],
    ['Weather / 天候','light-snow','小雪 / light snow'],
    ['VFX / その他','under-eye-ribbon-shadow','目の下・リボン影 / under-eye ribbon shadow'],
    ['VFX / その他','soft-ghost-lens','ソフト・レンズゴースト / soft ghost lens'],
  ].forEach(x=>put(...x));

  // --- part4 （UMD register） 
  [
    ['Light / 光','halo-light-soft','光輪・ソフト / halo light soft'],
    ['Light / 光','glow-pulse','パルス発光 / glow pulse'],
    ['Light / 光','moonlight-filter','月光フィルター / moonlight filter'],
    ['Lines / 線','motion-lines-fast','スピード線・速 / motion lines fast'],
    ['Lines / 線','motion-lines-drama','ドラマ線 / motion lines drama'],
    ['Particles / 粒子','petals-sakura','桜の花びら / petals sakura'],
    ['Particles / 粒子','leaves-falling','落ち葉 / leaves falling'],
    ['Particles / 粒子','embers-floating','舞う火の粉 / embers floating'],
    ['Weather / 天候','rain-soft','小雨 / rain soft'],
    ['Weather / 天候','rain-heavy','豪雨 / rain heavy'],
    ['VFX / その他','screen-crack','スクリーン亀裂 / screen crack'],
    ['VFX / その他','ghost-trail','ゴースト残像 / ghost trail'],
  ].forEach(x=>put(...x));

  // --- part5 （単一カテゴリ名） 
  [
    ['エフェクト (part5)','impact-lines-bold','集中線・太 / impact-lines-bold'],
    ['エフェクト (part5)','impact-lines-ultra','集中線・極太 / impact-lines-ultra'],
    ['エフェクト (part5)','speed-lines-arc','スピード線・アーク / speed-lines-arc'],
    ['エフェクト (part5)','sparkle-burst','スパークル・バースト / sparkle-burst'],
    ['エフェクト (part5)','dust-soft','ソフト・ダスト / dust-soft'],
    ['エフェクト (part5)','bokeh-ring','ボケ輪 / bokeh-ring'],
    ['エフェクト (part5)','drizzle-veil','ヴェール霧雨 / drizzle-veil'],
    ['エフェクト (part5)','snow-feather','綿雪 / snow-feather'],
    ['エフェクト (part5)','under-eye-trench','目の下の溝影 / under-eye-trench'],
    ['エフェクト (part5)','screen-tone-dots','トーン・ドット細 / screen-tone-dots'],
    ['エフェクト (part5)','film-grain-subtle','微粒子フィルム / film-grain-subtle'],
  ].forEach(x=>put(...x));

  // --- part6 （effect→categories） 
  [
    ['Light / 光','rim-light-crown-plus','リムライト・クラウン＋ / rim light crown plus'],
    ['Light / 光','rim-light-split-soft','分割リムライト・ソフト / rim light split soft'],
    ['Light / 光','face-gloss-micro-plus','顔ハイライト・微＋ / face gloss micro plus'],
    ['Light / 光','bloom-dreamy-pro','ドリーミー・ブルームPro / bloom dreamy pro'],
    ['Light / 光','vignette-feather-oval','フェザー・ビネット楕円 / vignette feather oval'],
    ['Lines / 線','impact-lines-heavy','集中線・ヘビー / impact lines heavy'],
    ['Lines / 線','impact-lines-spiral','集中線・スパイラル / impact lines spiral'],
    ['Lines / 線','speed-lines-rush','スピード線・ラッシュ / speed lines rush'],
    ['Particles / 粒子','sparkle-dense-ring','高密度スパークル・リング / sparkle dense ring'],
    ['Particles / 粒子','sparkle-filament-ring','フィラメント・リング / sparkle filament ring'],
    ['Particles / 粒子','soft-dust-haze','ソフトダスト・霞 / soft dust haze'],
    ['Particles / 粒子','bokeh-rain','ボケ雨 / bokeh rain'],
    ['Weather / 天候','drizzle-sheer','薄衣の霧雨 / drizzle sheer'],
    ['Weather / 天候','snow-sparkle-plus','雪スパークル＋ / snow sparkle plus'],
    ['VFX / その他','under-eye-soft-veil','目の下・薄ヴェール / under eye soft veil'],
    ['VFX / その他','screen-tone-fine-plus','スクリーントーン・細＋ / screen tone fine plus'],
    ['VFX / その他','lens-ghost-mild','レンズゴースト・軽 / lens ghost mild'],
  ].forEach(x=>put(...x));

  // --- part7 （effect→categories） 
  [
    ['Light / 光','rim-light-aurora','リムライト・オーロラ / rim light aurora'],
    ['Light / 光','face-gloss-spot','顔ハイライト・スポット / face gloss spot'],
    ['Light / 光','bloom-soft-veil','ソフトヴェール・ブルーム / bloom soft veil'],
    ['Light / 光','vignette-ellipse-soft','楕円ビネット・柔 / vignette ellipse soft'],
    ['Lines / 線','impact-lines-ring','集中線・リング / impact lines ring'],
    ['Lines / 線','speed-lines-cross','スピード線・クロス / speed lines cross'],
    ['Particles / 粒子','sparkle-dense-plus','高密度スパークル＋ / sparkle dense plus'],
    ['Particles / 粒子','sparkle-orbit','スパークル・オービット / sparkle orbit'],
    ['Particles / 粒子','soft-grain-film','ソフトフィルム粒子 / soft grain film'],
    ['Weather / 天候','rain-backlight','逆光の雨 / rain backlight'],
    ['Weather / 天候','mist-cool','冷たいもや / mist cool'],
    ['VFX / その他','under-eye-light-puff','目の下・淡ふくらみ影 / under eye light puff'],
    ['VFX / その他','screen-tone-radial','トーン・放射 / screen tone radial'],
    ['VFX / その他','lens-ghost-orb','レンズゴースト・オーブ / lens ghost orb'],
  ].forEach(x=>put(...x));

  // --- part8 （effectカタログ） 
  [
    ['Light / 光','halo-glow','光輪グロー / halo-glow'],
    ['Light / 光','backlight-dusk','逆光・夕暮れ / backlight-dusk'],
    ['Light / 光','sunbeam-ray','サンビーム光線 / sunbeam-ray'],
    ['Lines / 線','shock-lines-burst','驚き線・バースト / shock-lines-burst'],
    ['Lines / 線','motion-arc','モーション弧線 / motion-arc'],
    ['Particles / 粒子','petal-fall','花びら舞い / petal-fall'],
    ['Particles / 粒子','ember-glow','火の粉グロー / ember-glow'],
    ['Particles / 粒子','bubble-rise','泡上昇 / bubble-rise'],
    ['Weather / 天候','snow-shimmer','雪ちらちら・きらめき / snow-shimmer'],
    ['Weather / 天候','heat-haze','陽炎 / heat-haze'],
    ['VFX / その他','screen-tone-hatch','スクリーントーン・ハッチ / screen-tone-hatch'],
    ['VFX / その他','dream-blur','ドリームブラー / dream-blur'],
  ].forEach(x=>put(...x));

  // --- part9 （空テンプレ） 
  // 追加なし

  // --- part10 （effectカタログ） 
  [
    ['Light / 光','spotlight-circle','スポットライト・円 / spotlight-circle'],
    ['Light / 光','shadow-intense','強い影・ドラマチック / shadow-intense'],
    ['Light / 光','glow-soft-pulse','ソフトパルス光 / glow-soft-pulse'],
    ['Lines / 線','focus-burst','集中バースト線 / focus-burst'],
    ['Lines / 線','zigzag-tension','ジグザグ緊張線 / zigzag-tension'],
    ['Particles / 粒子','spark-dust','火花ダスト / spark-dust'],
    ['Particles / 粒子','ember-float','燃えかすフロート / ember-float'],
    ['Weather / 天候','gust-wind','突風エフェクト / gust-wind'],
    ['Weather / 天候','heatwave-ripple','陽炎リップル / heatwave-ripple'],
    ['VFX / その他','screen-shake','画面揺れ / screen-shake'],
    ['VFX / その他','distortion-warp','歪みワープ / distortion-warp'],
    ['VFX / その他','color-invert-flash','色反転フラッシュ / color-invert-flash'],
  ].forEach(x=>put(...x));

  // ===== categories 配列へ変換（ID重複排除済） =====
  const categories = Array.from(byName, ([name, map]) => ({
    name,
    items: Array.from(map.values())
  }));

  const data = { categories, presets: [] };

  // ===== 登録（3形態対応）=====
  try{
    if (typeof w.__registerEffectPart === 'function' && w.__registerEffectPart.length >= 3) {
      w.__registerEffectPart('effect', 1, data);   // faith互換3引数（推奨）
    } else if (typeof w.__registerEffectPart === 'function') {
      w.__registerEffectPart(1, data);             // 従来2引数
    } else if (typeof w.__registerPromptPart === 'function' && w.__registerPromptPart.length >= 3) {
      w.__registerPromptPart('effect', 1, data);   // 誤呼び出し吸収
    } else {
      // 最終フォールバック
      w.__parts = w.__parts || { effect:{} };
      w.__parts.effect = w.__parts.effect || {};
      w.__parts.effect[1] = data;
    }
  }catch(e){
    console.error('[effect_part1 merged v1.0] register error:', e);
  }
})(window);