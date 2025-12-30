(function(){
  "use strict";
  const VERSION = 2; 
  const KEY = "quality_preset";

  const SITUATION_DATA = {
    "📍 スポット・お店 (Spots)": [
      { label: "アイドルステージ", val: "(idol focus), (live concert), (stage lights), (sparkles), (soft ambient stage illumination), (cinematic glow), (performance)", links: ["シネマティック"] },
      { label: "おしゃれカフェ", val: "(cozy modern café), (indoor), (window seat), (coffee), (sweets), (string lights), (decorations), (bokeh)", links: ["ボケ"] },
      { label: "イベントスペース", val: "(mini idol event space), (decorated tables), (promotional posters), (fan meeting), (bright atmosphere)" },
      { label: "コラボカフェ", val: "(themed cafe), (character latte art), (feather-shaped sweets), (cute decorations), (pastel theme)" },
      { label: "バー・パブ", val: "(bar counter), (bottles on shelves), (dim lighting), (bartender), (cocktail), (glass), (jazz bar vibes), (adult atmosphere)", links: ["シネマティック"] },
      { label: "コンビニ", val: "(convenience store), (bright fluorescent light), (shelves of snacks), (refrigerator), (night shift), (modern japan)" },
      { label: "スーパーマーケット", val: "(supermarket), (grocery shopping), (aisle), (shopping basket), (fruit and vegetables), (bright lighting)" },
      { label: "図書館", val: "(library), (bookshelves), (quiet atmosphere), (reading), (sunlight through window), (dust particles), (studying)" },
      { label: "病院・病室", val: "(hospital room), (white bed), (medical equipment), (clean atmosphere), (sterile), (curtain), (window)" },
      { label: "デートスポット", val: "(date night), (romantic atmosphere), (city lights), (holding hands), (blush), (fashionable clothes), (restaurant), (dinner)" }
    ],
    "🏫 学園・青春 (School)": [
      { label: "教室 (昼)", val: "(classroom), (school desks), (blackboard), (sunlight through window), (afternoon), (school life), (chalk dust)" },
      { label: "教室 (夕方)", val: "(classroom), (sunset), (orange sky), (shadows), (melancholic), (after school), (empty classroom), (nostalgic)" },
      { label: "屋上", val: "(school rooftop), (fence), (blue sky), (clouds), (windy), (city view in distance), (lunch time), (freedom)" },
      { label: "廊下", val: "(school hallway), (lockers), (polished floor), (perspective), (sunbeams), (conversing students in background)" },
      { label: "体育館", val: "(school gymnasium), (basketball court), (varnished wood floor), (indoor sports), (volleyball net), (high ceiling)" },
      { label: "校庭・グラウンド", val: "(school grounds), (running track), (cherry blossoms), (sports day), (blue sky), (activity)" },
      { label: "保健室", val: "(school infirmary), (white bed), (curtain), (medicine cabinet), (quiet), (resting), (afternoon sun)" },
      { label: "図書室", val: "(school library), (bookshelves), (quiet), (reading), (sunlight), (dust particles), (studying)" },
      { label: "部室", val: "(club room), (cluttered), (props), (after school activity), (tea time), (cozy)" }
    ],
    "🏠 家・日常 (Home)": [
      { label: "リビング", val: "(modern living room), (sofa), (tv), (carpet), (cozy atmosphere), (indoor plant), (sunlight), (relaxing)" },
      { label: "キッチン", val: "(kitchen), (cooking), (apron), (refrigerator), (vegetables), (sink), (morning light), (breakfast preparation)" },
      { label: "ベッドルーム", val: "(bedroom), (bed), (messy sheets), (pillows), (curtains), (morning), (waking up), (pajamas), (private space)" },
      { label: "和室", val: "(japanese room), (tatami mats), (shoji screen), (kotatsu), (cushion), (tea), (calm atmosphere), (traditional)" },
      { label: "バスルーム", val: "(bathroom), (bathtub), (steam), (tiles), (mirror), (shampoo bottles), (relaxing bath), (wet skin)" },
      { label: "玄関", val: "(entrance hall), (genkan), (shoes), (umbrella stand), (welcome home), (door), (leaving home)" },
      { label: "ベランダ", val: "(balcony), (laundry hanging), (potted plants), (city view), (railing), (breeze), (relaxing)" }
    ],
    "🏙️ 都会・ストリート (City)": [
      { label: "渋谷・交差点", val: "(shibuya crossing), (crowd), (skyscrapers), (billboards), (neon signs), (modern city), (busy street), (daytime)" },
      { label: "サイバーパンク街", val: "(cyberpunk city), (neon lights), (holograms), (rain), (wet street), (futuristic), (night), (flying cars)" },
      { label: "路地裏", val: "(back alley), (dim lighting), (vending machine), (trash cans), (pipes), (stray cat), (urban exploration), (graffiti)" },
      { label: "夜景・ビル街", val: "(night city view), (skyscraper), (office lights), (highway), (car lights), (bokeh), (beautiful scenery)" },
      { label: "駅のホーム", val: "(train station platform), (waiting for train), (electric board), (commuters), (railway tracks), (morning rush)" },
      { label: "電車内", val: "(inside train), (hanging straps), (seats), (window reflection), (commuting), (passing scenery)" },
      { label: "商店街", val: "(shopping street), (market), (crowded), (signs), (lanterns), (food stalls), (lively atmosphere)" }
    ],
    "🌺 自然・絶景 (Nature)": [
      { label: "青空・草原", val: "(blue sky), (white clouds), (green field), (grass), (wind), (open space), (nature), (bright sunlight)" },
      { label: "森・木漏れ日", val: "(forest), (trees), (sunbeams), (leaf shadows), (nature path), (peaceful), (greenery), (moss)" },
      { label: "海・ビーチ", val: "(beach), (ocean), (waves), (white sand), (horizon), (summer), (tropical), (palm trees)" },
      { label: "夕焼けの海", val: "(sunset at beach), (orange sky), (reflection on water), (silhouettes), (emotional), (purple clouds)" },
      { label: "星空・夜空", val: "(starry sky), (milky way), (night), (shooting star), (silhouette), (beautiful scenery), (universe)" },
      { label: "桜並木", val: "(cherry blossoms), (sakura), (falling petals), (pink flowers), (spring), (park), (pathway)" },
      { label: "紅葉", val: "(autumn leaves), (red and yellow leaves), (fall season), (park), (fallen leaves on ground), (scenic)" },
      { label: "雪景色", val: "(snowy landscape), (winter), (snowing), (white ground), (cold breath), (frost), (frozen lake)" },
      { label: "花畑", val: "(flower field), (colorful flowers), (sunflowers), (blooming), (garden), (nature beauty)" }
    ],
    "👻 ホラー・怪奇 (Horror)": [
      { label: "廃墟", val: "(abandoned building), (ruins), (broken glass), (overgrown), (dust), (decay), (lonely atmosphere)" },
      { label: "廃病院", val: "(abandoned hospital), (wheelchair), (blood stains), (flickering light), (dark corridor), (scary), (medical equipment)" },
      { label: "暗い森", val: "(dark forest), (fog), (mist), (twisted trees), (spooky), (shadows), (moonlight), (unknown creature)" },
      { label: "路地裏 (夜)", val: "(dark alleyway), (street light), (shadows), (ominous), (alone), (danger), (brick wall)" },
      { label: "不気味な洋館", val: "(haunted mansion), (old furniture), (cobwebs), (dark painting), (candle light), (gothic), (mystery)" },
      { label: "儀式の間", val: "(ritual chamber), (magic circle), (candles), (red light), (blood), (cult), (ominous symbol)" }
    ],
    "⏰ 時間帯・空気感 (Time & Atmos)": [
      { label: "朝 (Morning)", val: "(morning), (sunrise), (soft light), (fresh atmosphere), (dew), (start of day)" },
      { label: "昼 (Day)", val: "(day), (noon), (bright sunlight), (hard shadows), (clear sky), (vivid colors)" },
      { label: "夕方 (Sunset)", val: "(sunset), (dusk), (orange light), (long shadows), (golden hour), (sentimental), (evening)" },
      { label: "夜 (Night)", val: "(night), (moonlight), (dark), (artificial lights), (stars), (midnight), (quiet)" },
      { label: "曇り (Cloudy)", val: "(cloudy sky), (diffused light), (grey sky), (soft shadows), (melancholic), (overcast)" },
      { label: "雨 (Rain)", val: "(raining), (wet ground), (umbrella), (raindrops), (puddles), (reflection), (gloomy)" }
    ]
  };

  function createSubAccordion(title, items) { 
    const details = document.createElement("details"); 
    details.className = "qp-sub-acc"; 
    const summary = document.createElement("summary"); 
    summary.textContent = title; 
    details.appendChild(summary); 
    const content = document.createElement("div"); 
    content.className = "qp-content-grid"; 
    items.forEach(item => { 
      const label = document.createElement("label"); 
      const cb = document.createElement("input"); 
      cb.type = "checkbox"; 
      cb.dataset.val = item.val || item.en;
 cb.addEventListener("change", () => {
  if (window.__VISUAL_SYNC?.updateSelectedList)
    window.__VISUAL_SYNC.updateSelectedList();
});
      label.appendChild(cb); 
      label.appendChild(document.createTextNode(item.label || `${item.ja}/${item.en}`)); 
      content.appendChild(label); 
    }); 
    details.appendChild(content); 
    return details; 
  }

  const API = {
    initUI(container) {
      const generalArea = document.getElementById("qp-situations-general-area");
      if (generalArea) {
        generalArea.innerHTML = ""; 
        Object.entries(SITUATION_DATA).forEach(([k,v]) => { 
          generalArea.appendChild(createSubAccordion(k, v)); 
        });
      }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

