(function(){
  "use strict";

  const VERSION = 2; 
  const KEY = "pose"; 

  const POSE_DATA_EXTREME = {
    "🌌 SF・メカ・ビーム兵器 (Sci-Fi & Beam)": {
      "ビーム・エネルギー兵器": [
        { ja: "ビームライフル射撃", en: "firing beam rifle, energy blast" },
        { ja: "ビームサーベル抜刀", en: "wielding beam saber, glowing energy blade" },
        { ja: "二刀流 (ビーム)", en: "dual wielding beam sabers" },
        { ja: "ビームシールド展開", en: "deploying beam shield, energy barrier" },
        { ja: "極太ビーム照射", en: "firing massive beam cannon" },
        { ja: "指先からビーム", en: "firing beam from fingertips" },
        { ja: "全方位攻撃 (ファンネル)", en: "funnels attacking, remote weapons firing, all-range attack" }
      ],
      "メカ・サイバーアクション": [
        { ja: "スラスター全開", en: "thrusters active, afterburner trail" },
        { ja: "急制動 (逆噴射)", en: "retro-thrusters firing, sudden stop" },
        { ja: "パージ (装甲解除)", en: "purging armor, ejecting parts" },
        { ja: "コックピット搭乗", en: "sitting in cockpit, piloting mech" },
        { ja: "ホログラム操作", en: "interacting with holographic interface" },
        { ja: "システム起動 (発光)", en: "system startup, glowing eyes, activation mode" },
        { ja: "コード接続", en: "connected by wires, datajack connection" }
      ],
      "宇宙・無重力": [
        { ja: "無重力浮遊 (デブリ)", en: "floating in zero gravity, floating debris" },
        { ja: "大気圏突入", en: "atmospheric entry, burning reentry" },
        { ja: "月面着陸", en: "moon landing pose" },
        { ja: "宇宙遊泳", en: "spacewalking" }
      ]
    },
    "😡 極限の感情・狂気 (Extreme Emotions)": {
      "怒り・狂気": [
        { ja: "激怒 (血管)", en: "furious, veins popping, intense rage" },
        { ja: "咆哮・絶叫", en: "screaming, roaring, shouting" },
        { ja: "狂気の笑み", en: "crazy smile, insane laughter, wide eyes" },
        { ja: "ヤンデレの表情", en: "yandere trance, empty eyes, holding knife" },
        { ja: "蔑みの目 (見下ろす)", en: "looking down with contempt, disgusted face" },
        { ja: "殺意を向ける", en: "killing intent, bloodlust, glaring" }
      ],
      "悲しみ・絶望": [
        { ja: "号泣 (顔を覆う)", en: "wailing, crying uncontrollably, covering face" },
        { ja: "絶望 (目が暗い)", en: "despair, shadowed face, empty eyes" },
        { ja: "崩れ落ちる (膝)", en: "collapsing on knees, defeated" },
        { ja: "虚無", en: "hollow eyes, lifeless expression" },
        { ja: "雨の中で泣く", en: "crying in rain" }
      ],
      "恐怖・懇願": [
        { ja: "恐怖で震える", en: "trembling in fear, terrified" },
        { ja: "腰を抜かす", en: "cowering, sitting back in fear" },
        { ja: "命乞い", en: "begging for life, prostrating" },
        { ja: "パニック", en: "panicked expression, hyperventilating" },
        { ja: "後ずさり", en: "backing away in fear" }
      ],
      "恍惚・絶頂": [
        { ja: "恍惚 (トランス)", en: "ecstatic expression, heavy breathing, trance" },
        { ja: "アヘ顔 (マイルド)", en: "rolled back eyes, tongue out, heavy blush" },
        { ja: "涎(よだれ)", en: "drooling, panting" },
        { ja: "目がハート", en: "heart-shaped eyes, lovestruck" }
      ]
    },
    "🔞 センシティブ・ギリギリ (Risqué & Fetish)": {
      "拘束・支配": [
        { ja: "両手拘束 (後ろ)", en: "hands tied behind back" },
        { ja: "縄・亀甲 (マイルド)", en: "bound with rope, shibari style" },
        { ja: "手錠・鎖", en: "handcuffs, chained, collar and chain" },
        { ja: "壁に磔(はりつけ)", en: "chained to wall, crucified pose" },
        { ja: "四つん這い (服従)", en: "on all fours, submissive pose" },
        { ja: "踏まれる", en: "being stepped on" }
      ],
      "露出・衣服ダメージ": [
        { ja: "服が破れる", en: "torn clothes, clothing damage" },
        { ja: "透け (濡れ透け)", en: "wet clothes, see-through, translucent fabric" },
        { ja: "スカート捲り上げ", en: "lifting skirt, skirt flip" },
        { ja: "胸元を広げる", en: "pulling shirt open, exposing cleavage" },
        { ja: "下着を直す", en: "adjusting lingerie, adjusting bra strap" },
        { ja: "食い込み", en: "wedgie, clothing digging in" },
        { ja: "ボタンが弾け飛ぶ", en: "buttons popping off" }
      ],
      "アングル・体位暗示": [
        { ja: "M字開脚", en: "m-shaped legs, spread legs" },
        { ja: "股間フォーカス", en: "focus on crotch, between legs" },
        { ja: "お尻を向ける", en: "presenting ass, bent over" },
        { ja: "極端なローアングル", en: "extreme low angle, upskirt angle" },
        { ja: "胸の谷間フォーカス", en: "focus on cleavage" },
        { ja: "誘うポーズ", en: "inviting pose, lying on bed" },
        { ja: "何かを咥える", en: "sucking on finger, holding object in mouth" }
      ]
    }
  };

  const API = {
    initUI() {
      if (window.__outputTranslation) {
        // 1. 基本登録（メインの単語）
        const dict = {};
        Object.values(POSE_DATA_EXTREME).forEach(subCats => {
          Object.values(subCats).flat().forEach(item => {
            if (item.en && item.ja) {
              const firstPart = item.en.split(/,\s*/)[0];
              if (firstPart) dict[firstPart] = item.ja;
            }
          });
        });
        window.__outputTranslation.register(dict);

        // 2. ★サブタグ・補完辞書の登録（ここが修正ポイント）
        const subDict = {
          "energy blast": "エネルギー波",
          "glowing energy blade": "発光する刃",
          "energy barrier": "エネルギー障壁",
          "funnels attacking": "ファンネル攻撃",
          "remote weapons firing": "遠隔武器発射",
          "all-range attack": "オールレンジ攻撃",
          "afterburner trail": "アフターバーナー",
          "sudden stop": "急停止",
          "ejecting parts": "パージ中",
          "piloting mech": "操縦中",
          "glowing eyes": "目が発光",
          "activation mode": "起動モード",
          "datajack connection": "データ接続",
          "floating debris": "デブリ浮遊",
          "burning reentry": "燃え尽きる突入",
          "veins popping": "血管が浮く",
          "intense rage": "激怒",
          "insane laughter": "狂った笑い",
          "wide eyes": "見開いた目",
          "holding knife": "ナイフを持つ",
          "disgusted face": "嫌悪の表情",
          "bloodlust": "殺意",
          "glaring": "睨みつけ",
          "crying uncontrollably": "制御不能な号泣",
          "shadowed face": "陰のある顔",
          "lifeless expression": "生気のない顔",
          "shibari style": "縛り",
          "collar and chain": "首輪と鎖",
          "crucified pose": "磔(はりつけ)",
          "submissive pose": "服従のポーズ",
          "clothing damage": "服破れ",
          "see-through": "シースルー",
          "translucent fabric": "透ける布",
          "skirt flip": "スカートめくれ",
          "exposing cleavage": "胸元露出",
          "adjusting bra strap": "ブラ紐直し",
          "clothing digging in": "食い込み",
          "buttons popping off": "ボタン弾け",
          "spread legs": "開脚",
          "between legs": "股の間",
          "bent over": "前屈み(尻)",
          "upskirt angle": "下着が見える角度",
          "lying on bed": "ベッドに寝る",
          "holding object in mouth": "口に咥える"
        };
        window.__outputTranslation.register(subDict);
      }

      // 3. UIマウント処理
      const mount = () => {
        const root = document.getElementById("pose-master-root");
        if (!root) { setTimeout(mount, 100); return; }
        if (document.getElementById("pose-v2-separator")) return;

        const separator = document.createElement("div");
        separator.id = "pose-v2-separator";
        separator.style.cssText = "margin: 20px 0 10px 0; border-top: 2px dashed #ff0055; text-align: center;";
        separator.innerHTML = "<span style='background:#fff; padding:0 10px; color:#ff0055; font-weight:bold; font-size:0.9em; display:inline-block; transform:translateY(-12px);'>▼ LIMIT BREAK (v2 Expansion)</span>";
        root.appendChild(separator);

        if (typeof window.__POSE_RENDERER === "function") {
          window.__POSE_RENDERER(root, POSE_DATA_EXTREME, "v2-ext");
        }
      };
      
      if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", mount); } else { mount(); }
    },
    getTags() { return []; } 
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

