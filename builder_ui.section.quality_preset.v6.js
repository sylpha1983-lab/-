(function(){
  "use strict";
  const VERSION = 6; 
  const KEY = "quality_preset";

  // 一般パックデータ
  const PACK_DATA = {
    "💼 職業・なりきりパック": [
      { label: "アイドル・シマエナガ風", val: "(idol-style outfit), (white and pastel blue frilly dress), (feather embroidery), (fluffy sleeves), (short layered skirt), (down feather texture), (translucent ribbons), (soft feather hairclip)", desc: "シマエナガモチーフのアイドル衣装" },
      { label: "メイド・お給仕", val: "(maid outfit), (holding serving tray), (curtsy), (classic maid), (mansion interior), (elegant), (frills), (tea set)", links: ["立ちポーズ"] },
      { label: "ナース・診察", val: "(nurse uniform), (holding syringe), (clipboard), (hospital room), (white background), (clean atmosphere), (medical checkup)", links: ["病院"] },
      { label: "OL・オフィス", val: "(office lady), (business suit), (holding documents), (modern office), (desk work), (glasses), (smart look), (high rise building view)", links: ["眼鏡"] },
      { label: "ポリス・逮捕", val: "(police uniform), (holding handcuffs), (police hat), (arresting pose), (cool expression), (patrol car background), (justice)", links: ["キメポーズ"] },
      { label: "バニーガール", val: "(bunny girl suit), (rabbit ears), (fishnet tights), (holding tray), (casino background), (roulette), (neon lights), (glamorous)", links: ["セクシー"] },
      { label: "巫女・神社", val: "(miko outfit), (holding broom), (shrine background), (sweeping leaves), (traditional japanese), (sacred atmosphere), (red hakama)", links: ["和風"] }
    ],
    "🎒 テーマ別・持ち物セット (Item Sets)": [
      { label: "医者セット", val: "(holding stethoscope), (clipboard under arm), (holding syringe), (medical tools), (pen in pocket)", desc: "診察に必要な道具一式" },
      { label: "ゴスロリセット", val: "(holding frilled parasol), (lace headdress), (cross necklace), (holding gothic doll), (rose decoration)", desc: "ゴシックな装飾品セット" },
      { label: "現代っ子セット", val: "(holding smartphone), (drinking bubble tea), (headphones around neck), (stylish backpack), (mask)", desc: "今風のアイテムセット" },
      { label: "冒険者セット", val: "(holding map), (compass), (lantern), (potion flask on belt), (leather backpack), (dagger)", desc: "旅の必需品セット" },
      { label: "魔法使いセット", val: "(holding magic staff), (grimoire), (potion bottles), (crystal ball), (magic components)", desc: "魔法研究の道具" },
      { label: "アイドルセット", val: "(holding microphone), (glow stick), (bouquet), (fan letter), (towel)", desc: "ステージ映えする小物" },
      { label: "画材・美術セット", val: "(holding paintbrush), (palette), (easel), (apron with paint stains), (sketchbook), (pencils)", desc: "絵を描く道具" },
      { label: "読書・勉強セット", val: "(open book), (stack of books), (glasses), (pen), (notebook), (library card)", desc: "知的なアイテム" }
    ],
    "💦 演出・エフェクト (Effects)": [
      { label: "舞い散る羽根", val: "(floating feathers), (white feathers), (angelic atmosphere), (soft focus), (dreamy)" },
      { label: "ハートのボケ", val: "(bokeh heart shapes), (pink atmosphere), (romantic light), (sparkles), (glowing particles)" },
      { label: "雪の結晶", val: "(snowflake decorations), (winter theme), (glowing snowflakes), (cold breath), (magical atmosphere)" },
      { label: "キラキラ粒子", val: "(faint sparkles), (light particles), (shimmering air), (magical dust), (fantasy setting)" },
      { label: "ポラロイド写真", val: "(polaroid photo developing mid-air), (floating photos), (memories), (nostalgic)" }
    ],
    "🎉 イベント・行事": [
      { label: "クリスマス", val: "(santa costume), (christmas tree), (holding gift box), (snowy background), (lights and ornaments), (happy smile), (winter holiday)" },
      { label: "ハロウィン", val: "(witch costume), (holding pumpkin), (jack-o'-lantern), (bats), (purple and orange theme), (spooky castle background), (magic hat)" },
      { label: "ウェディング", val: "(wedding dress), (holding bouquet), (church interior), (white veil), (stained glass), (happy tears), (marriage ceremony), (pure white)" },
      { label: "温泉旅行", val: "(wearing yukata), (onsen), (steam), (open air bath), (wooden bucket), (relaxing), (flushed face), (night scenery)", links: ["和風"] }
    ],
    "🍽️ 食事・グルメ": [
      { label: "ファストフード", val: "(eating hamburger), (holding burger with both hands), (fast food restaurant), (french fries), (cola), (happy eating face), (open mouth)", links: ["もぐもぐ"] },
      { label: "ティータイム", val: "(afternoon tea), (holding tea cup), (cake stand), (garden terrace), (elegant dress), (sipping tea), (relaxing afternoon)", links: ["カフェ"] },
      { label: "居酒屋で乾杯", val: "(izakaya), (holding beer mug), (kanpai), (yakitori), (lively atmosphere), (drinking), (slightly drunk), (lanterns)", links: ["和風"] }
    ],
    "💕 デート・恋愛": [
      { label: "水族館デート", val: "(aquarium date), (looking at fish), (blue ambient light), (reflection on glass), (romantic atmosphere), (walking together), (happy expression)", links: ["デートスポット"] },
      { label: "映画館デート", val: "(movie theater), (sitting next to each other), (eating popcorn), (dim lighting), (screen light reflecting on face), (intimate moment), (date night)", links: ["デートスポット"] },
      { label: "遊園地・観覧車", val: "(amusement park date), (ferris wheel in background), (holding crepe), (colorful lights), (happy smile), (vibrant atmosphere), (casual clothes)" },
      { label: "夜景・展望台", val: "(observation deck), (night city view), (sparkling city lights), (leaning on railing), (romantic mood), (couple atmosphere), (elegant)", links: ["夜"] },
      { label: "放課後デート", val: "(walking home together), (holding hands), (sunset glow), (school uniform), (blushing), (sentimental atmosphere), (residential street)", links: ["夕方"] }
    ],
    "😱 感情・スリル": [
      { label: "追跡者からの逃走", val: "(running away:1.3), (looking back:1.3), (scared expression), (tears), (sweat), (abandoned hallway), (motion blur:1.2), (scary monster chasing from behind:1.3), (pursuer looming in background), (cinematic lighting), (dynamic angle), (dramatic shadows)", links: ["ダイナミックポーズ", "ホラー"] },
      { label: "ロッカーに隠れる", val: "(hiding in locker), (pov from inside), (peeking through slit), (scared face), (covering mouth), (heavy breathing), (killer outside), (darkness), (ray tracing), (claustrophobic)", links: ["ホラー"] },
      { label: "絶望的な遭遇", val: "(sitting on floor), (backing away), (screaming), (wide eyes), (horror on face), (monster looming), (low angle), (dutch angle), (dim lighting), (volumetric lighting), (shadows)", links: ["座りポーズ"] },
      { label: "ヤンデレ・束縛", val: "(yandere), (empty eyes), (scary smile), (holding knife behind back), (shadow over face), (obsessed), (love hearts in eyes), (dark atmosphere)" },
      { label: "ツンデレ・赤面", val: "(tsundere), (arms crossed), (looking away), (blush), (pout), (angry but shy), (school uniform), (cute angry face)" },
      { label: "クーデレ・無口", val: "(expressionless), (staring), (quiet atmosphere), (beautiful detailed eyes), (cool beauty), (emotionless), (mysterious)" },
      { label: "ジェットコースター", val: "(roller coaster), (screaming), (hands up), (wind blowing hair), (speed lines), (high altitude), (fear and excitement), (blue sky)", links: ["ダイナミックポーズ"] }
    ],
    "👻 ホラー・サスペンス": [
      { label: "心霊写真風", val: "(daily life photo), (peace sign), (group photo), (ghost face behind), (transparent spirit), (cursed image), (noise), (low quality style), (vhs artifact), (film grain)" },
      { label: "儀式の生贄", val: "(lying on altar), (bound hands), (unconscious), (magic circle), (red candles), (hooded figures), (ritual chamber), (high angle shot), (glowing magic), (atmospheric lighting)", links: ["寝ポーズ"] }
    ]
  };

  const DICT = {
    "holding stethoscope": "聴診器を持つ", "clipboard under arm": "クリップボードを挟む", "holding syringe": "注射器を持つ",
    "medical tools": "医療器具", "pen in pocket": "ポケットのペン", "holding frilled parasol": "フリルの日傘を持つ",
    "lace headdress": "レースのヘッドドレス", "cross necklace": "十字架のネックレス", "holding gothic doll": "ゴシックドールを抱く",
    "rose decoration": "薔薇の装飾", "holding smartphone": "スマホを持つ", "drinking bubble tea": "タピオカを飲む",
    "headphones around neck": "首掛けヘッドフォン", "stylish backpack": "おしゃれなリュック", "mask": "マスク",
    "holding map": "地図を持つ", "compass": "コンパス", "lantern": "ランタン", "potion flask on belt": "腰にポーション",
    "leather backpack": "革のリュック", "dagger": "短剣", "holding magic staff": "魔法の杖を持つ", "grimoire": "魔導書",
    "potion bottles": "ポーション瓶", "crystal ball": "水晶玉", "magic components": "魔法の触媒", "holding microphone": "マイクを持つ",
    "glow stick": "サイリウム", "bouquet": "花束", "fan letter": "ファンレター", "towel": "タオル", "holding paintbrush": "筆を持つ",
    "palette": "パレット", "easel": "イーゼル", "apron with paint stains": "絵の具で汚れたエプロン", "sketchbook": "スケッチブック",
    "pencils": "鉛筆", "open book": "開いた本", "stack of books": "積まれた本", "glasses": "眼鏡", "pen": "ペン",
    "notebook": "ノート", "library card": "図書カード", "idol-style outfit": "アイドル衣装", "white and pastel blue frilly dress": "白と水色のフリルドレス",
    "feather embroidery": "羽の刺繍", "fluffy sleeves": "ふわふわ袖", "short layered skirt": "短い段フリルスカート", "down feather texture": "綿毛の質感",
    "translucent ribbons": "半透明のリボン", "soft feather hairclip": "羽の髪飾り", "floating feathers": "舞い散る羽根", "white feathers": "白い羽",
    "bokeh heart shapes": "ハート型のボケ", "pink atmosphere": "ピンクの雰囲気", "romantic light": "ロマンチックな光", "glowing particles": "光る粒子",
    "snowflake decorations": "雪の結晶の飾り", "winter theme": "冬のテーマ", "glowing snowflakes": "光る雪の結晶", "cold breath": "白い息",
    "magical atmosphere": "魔法の雰囲気", "faint sparkles": "ほのかな輝き", "light particles": "光の粒子", "shimmering air": "揺らめく空気",
    "magical dust": "魔法の粉", "fantasy setting": "ファンタジー設定", "polaroid photo developing mid-air": "空中に浮かぶポラロイド",
    "floating photos": "浮遊する写真", "memories": "思い出", "nostalgic": "ノスタルジック"
  };

  const API = {
    initUI(container) {
      if (window.__outputTranslation) window.__outputTranslation.register(DICT);
      const mount = () => {
        const target = document.getElementById("qp-packs-content");
        if(!target) { setTimeout(mount, 50); return; }
        Object.entries(PACK_DATA).forEach(([k,v]) => {
          if(window.__QP_UTILS && window.__QP_UTILS.createSubAccordion) {
            target.appendChild(window.__QP_UTILS.createSubAccordion(k, v));
          }
        });
      };
      mount();
    },
    getTags() { return []; } 
  };
  window.__registerPromptPart(KEY, VERSION, API);
})();

