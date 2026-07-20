// Auto-generated bundle for section 'accessories'
// Contains 1 versions stacked in ascending order.

(function(){
// --- builder_ui.section.accessories.v1.js ---
(function(){
  "use strict";

  const VERSION = 1;
  const KEY = "accessories";

  const IS_UNLOCKED = localStorage.getItem("MY_SECRET_UNLOCK") === "true";

  // 食べ物・飲み物のサイズ連動:
  // サイズ指定だけを出力せず、選択中の対応フードと合成して使う。
  const FOOD_SIZE_PRESETS = {
    portion: {
      small: { ja: "小盛り", template: "small serving of {food}" },
      large: { ja: "大盛り", template: "large serving of {food}" },
      extra: { ja: "特盛り", template: "extra-large serving of {food}" },
      giga: { ja: "ギガ盛り", template: "gigantic heaping serving of {food}" },
      tera: { ja: "テラ盛り", template: "towering mountain of {food}" }
    },
    unit: {
      tiny: { ja: "極小", template: "tiny {food}" },
      small: { ja: "小さめ", template: "small {food}" },
      large: { ja: "大きめ", template: "oversized {food}" },
      giant: { ja: "超巨大", template: "giant {food}" },
      colossal: { ja: "規格外", template: "colossal {food}" }
    },
    count: {
      few: { ja: "少なめ", template: "a few {food}" },
      many: { ja: "たくさん", template: "many {food}" },
      heap: { ja: "山盛り", template: "a heaping pile of {food}" },
      giga: { ja: "ギガ山盛り", template: "a gigantic pile of {food}" },
      tera: { ja: "山脈級", template: "an enormous mountain of {food}" }
    },
    volume: {
      small: { ja: "小容量", template: "small serving of {food}" },
      large: { ja: "大容量", template: "large serving of {food}" },
      extra: { ja: "特大容量", template: "extra-large serving of {food}" },
      giga: { ja: "ギガ容量", template: "giant container of {food}" },
      tera: { ja: "テラ容量", template: "towering oversized container filled with {food}" }
    }
  };

  const FOOD_SIZE_MODE_META = {
    portion: { icon: "🍚", title: "盛り量", label: "盛り量" },
    unit: { icon: "🥩", title: "単品サイズ", label: "単品サイズ" },
    count: { icon: "🍪", title: "個数・山盛り", label: "個数・山盛り" },
    volume: { icon: "🥤", title: "容量・容器サイズ", label: "容量・容器サイズ" }
  };

  // 食材そのものとは別に、料理・デザートへ掛ける修飾と飲み物フレーバーを扱う。
  const FOOD_DECORATION_META = {
    dessert: { icon: "🍓", title: "トッピング・フィリング", label: "トッピング" },
    drink: { icon: "🥤", title: "ドリンクフレーバー", label: "フレーバー" },
    onigiri: { icon: "🍙", title: "おにぎり・和の仕上げ", label: "おにぎり仕上げ" }
  };

  const FOOD_MODIFIER_TARGET_DATASET = {
    dessert: "foodModifierTargetDessert",
    drink: "foodModifierTargetDrink",
    onigiri: "foodModifierTargetOnigiri"
  };

  function foodSizeText(item) {
    return `${item && item.ja || ""} ${item && item.en || ""}`.toLowerCase();
  }

  function isFoodSizeSourceCategory(catName, catData) {
    if (!String(catName || "").startsWith("🍱 食べ物・飲み物 /")) return false;
    if (!catData || catData.isAction || catData.foodSizeMode || catData.foodModifierGroup || catData.foodDirectMenu) return false;
    if (
      catName.includes("🥢🍻 食べ物・飲み物動作") ||
      catName.includes("🎭 食べ物・飲み物演出") ||
      catName.includes("📏 サイズ・量カスタマイズ")
    ) return false;
    return true;
  }

  function getFoodSizeProfile(catName, catData, item) {
    if (!isFoodSizeSourceCategory(catName, catData)) return null;
    // 完成セット連動で自動ONになる部品タグは、サイズ対象にしない。
    // 丼の完成セット自体へだけ「大盛り / 特盛り」を掛けて、具材まで別々に巨大化するのを防ぐ。
    if (item && item.foodSizeDisabled) return null;

    const path = String(catName || "").toLowerCase();
    const text = foodSizeText(item);

    // 食材でも、ぶどう・ベリー・盛り合わせのように個数で見せる方が自然なものは項目側で上書きできる。
    if (item && item.foodSizeMode && FOOD_SIZE_MODE_META[item.foodSizeMode]) {
      return { mode: item.foodSizeMode, kind: item.foodSizeKind || "" };
    }

    // 飲み物・ドリンクウェアは容量棚へ。容器そのものを選んだ時だけ、容器サイズとして合成する。
    if (path.includes("🥛 容器・ドリンクウェア")) return { mode: "volume", kind: "container" };
    if (path.includes("🥤 飲み物 /")) return { mode: "volume", kind: "drink" };

    // 「ジュース付き弁当」などは料理・セット側として扱うため、飲み物語が含まれていてもここでは拾わない。
    if (!/\b(lunch box|bento|meal|dish|set|plate)\b/.test(text) && /\b(drink|tea|coffee|latte|cocoa|smoothie|soda|juice|water|beer|wine|whiskey|sake|cocktail|elixir|potion|tonic|milkshake|float)\b/.test(text)) {
      return { mode: "volume", kind: "drink" };
    }

    // 食材は「何個・何盛り」より、肉・野菜・果物など一品そのもののサイズを優先。
    if (path.includes("🥩 食材")) return { mode: "unit" };

    // デザートは種類ごとに最も自然な棚へ誘導する。
    if (path.includes("🍰 デザート") || /\b(cake|donut|macaron|cookie|pudding|mousse|parfait|ice cream|gelato|sorbet|shaved ice|mochi|daifuku|taiyaki|dorayaki|pie|brownie|tart)\b/.test(text)) {
      if (/\b(cookies?|macarons?|cand(?:y|ies)|berr(?:y|ies)|grapes|chocolate pieces?)\b/.test(text)) return { mode: "count" };
      if (/\b(parfait|shaved ice|ice cream|gelato|frozen yogurt|soft serve|pudding|mousse|jelly|anmitsu|granita|semifreddo|frozen custard)\b/.test(text)) return { mode: "portion" };
      return { mode: "unit" };
    }

    // 複数個・山盛りが自然な軽食だけを個数棚へ。フライドポテトなどは盛り量として扱う。
    if (/\b(nuts|popcorn|chips|crackers|canape|finger food|dumplings|shumai|xiaolongbao|sushi|edamame|olives|assorted)\b/.test(text)) {
      return { mode: "count" };
    }

    // 肉・単品料理・串・サンドは、大きさを変える方が自然。
    if (/\b(steak|hamburger|burger|hot dog|sandwich|sausage|meat|chicken|rib|bacon|pork chop|cutlet|fish|shrimp|oyster|squid|scallop|skewer|kebab|naan|pizza slice|crepe|churros|taiyaki|apple|banana|pear|peach|melon|watermelon|tomato|carrot|potato|onion|eggplant|pumpkin|corn|cucumber|mushroom)\b/.test(text)) {
      return { mode: "unit" };
    }

    // 丼・麺・皿・セット・鍋・プラッターなどは、まず盛り量を変える。
    if (/\b(ramen|noodles?|curry|rice|pasta|spaghetti|soup|stew|porridge|risotto|gratin|lasagna|bento|lunch|platter|plate|board|bowl|salad|pizza|paella|bibimbap|pad thai|pho|biryani|meal|dish|set|yakisoba|oden|hot pot|fries|nachos|tacos|burrito|quesadilla|fajita|wrap|soba|udon)\b/.test(text)) {
      return { mode: "portion" };
    }

    // 料理・提供スタイル・地域料理は、初期版では「盛り量」に寄せる。
    return { mode: "portion" };
  }

  function composeFoodSizeTag(food, mode, preset, kind) {
    const cleanFood = String(food || "").trim();
    if (mode === "volume" && kind === "container") {
      const containerTemplates = {
        small: "small {food}",
        large: "large {food}",
        extra: "extra-large {food}",
        giga: "giant {food}",
        tera: "towering oversized {food}"
      };
      const containerTemplate = containerTemplates[preset];
      return containerTemplate ? containerTemplate.replace(/\{food\}/g, cleanFood) : cleanFood;
    }

    const template = FOOD_SIZE_PRESETS[mode] && FOOD_SIZE_PRESETS[mode][preset] && FOOD_SIZE_PRESETS[mode][preset].template;
    if (!template) return cleanFood;
    return template.replace(/\{food\}/g, cleanFood);
  }


  function getDrinkBaseType(item) {
    if (item && item.drinkBaseType) return String(item.drinkBaseType);
    const value = String(item && item.en || "").trim().toLowerCase();
    const known = {
      "soda pop": "soda",
      "iced tea": "iced tea",
      "milkshake": "milkshake",
      "smoothie": "smoothie",
      "frappe": "frappe",
      "float": "float",
      "lemonade": "lemonade"
    };
    return known[value] || "";
  }

  function getFoodDecorationProfile(catName, catData, item) {
    if (!isFoodSizeSourceCategory(catName, catData)) return null;
    // 「おにぎり（海苔あり）」のような完成形は、追加仕上げの誘導を出さない。
    if (item && item.foodDecorationDisabled) return null;

    const path = String(catName || "").toLowerCase();
    const text = foodSizeText(item);
    const drinkBaseType = getDrinkBaseType(item);

    // 専用ベースと、既存の無味ベース飲料だけをフレーバー対象にする。
    if (catData && catData.foodDecorationBase === "drink" && drinkBaseType) {
      return { group: "drink", drinkBaseType };
    }
    if (path.includes("🥤 飲み物 /") && drinkBaseType) {
      return { group: "drink", drinkBaseType };
    }

    // 通常のおにぎりだけは、海苔仕上げの適用先として扱う。
    // 弁当・セット・海苔あり完成形へは自動誘導しない。
    if (String(item && item.en || "").trim().toLowerCase() === "rice ball") {
      return { group: "onigiri" };
    }

    // パンケーキ、シュークリーム、ケーキ、パフェなどはトッピング先として扱う。
    const dessertLike = (
      path.includes("🍰 デザート") ||
      /\b(pancakes?|waffles?|cream puff|eclairs?|donuts?|cakes?|shortcake|cheesecake|roll cake|tarts?|pie|parfait|shaved ice|ice cream|gelato|sorbet|soft serve|sundae|street crepe|crepe|muffin|cupcake|french toast|brownie|pudding|mousse|bavarois|jelly|tiramis[uù]|macarons?|taiyaki|dorayaki|daifuku|anmitsu)\b/.test(text)
    );
    if (dessertLike) {
      return {
        group: "dessert",
        canFill: /\b(cream puff|eclairs?|donuts?|dorayaki|taiyaki|daifuku|roll cake|cakes?)\b/.test(text)
      };
    }

    return null;
  }

  function joinFoodPhrases(values) {
    const clean = [];
    values.forEach(value => {
      const text = String(value || "").trim();
      if (text && !clean.includes(text)) clean.push(text);
    });
    if (clean.length === 0) return "";
    if (clean.length === 1) return clean[0];
    if (clean.length === 2) return `${clean[0]} and ${clean[1]}`;
    return `${clean.slice(0, -1).join(", ")}, and ${clean[clean.length - 1]}`;
  }

  function composeFoodDecorationTag(base, target, modifiers) {
    const cleanBase = String(base || "").trim();
    if (!Array.isArray(modifiers) || modifiers.length === 0) return cleanBase;

    if (target && target.decorationGroup === "drink") {
      const flavors = modifiers
        .filter(modifier => modifier.group === "drink")
        .map(modifier => modifier.value);
      const flavorText = joinFoodPhrases(flavors);
      const drinkBase = String(target.drinkBaseType || cleanBase).trim();
      return flavorText ? `${flavorText} ${drinkBase}` : cleanBase;
    }

    if (target && target.decorationGroup === "onigiri") {
      const roleValues = role => modifiers
        .filter(modifier => modifier.group === "onigiri" && modifier.role === role)
        .map(modifier => modifier.value);

      const fillings = joinFoodPhrases(roleValues("filling"));
      const wraps = joinFoodPhrases(roleValues("wrap"));
      const coatings = joinFoodPhrases(roleValues("coating"));
      const seasonings = joinFoodPhrases(roleValues("seasoning"));
      const garnishes = joinFoodPhrases(roleValues("garnish"));
      const grills = joinFoodPhrases(roleValues("grill"));
      const finishes = joinFoodPhrases(roleValues("finish"));

      let output = cleanBase;
      if (fillings) output += ` filled with ${fillings}`;
      if (wraps) {
        output += ` wrapped with ${wraps}`;
        if (/nori seaweed/i.test(wraps)) output += ", visible nori seaweed wrap";
      }
      if (coatings) output += ` coated with ${coatings}`;
      if (seasonings) output += ` seasoned with ${seasonings}`;
      if (garnishes) output += ` sprinkled with ${garnishes}`;
      if (grills) output = `grilled ${output} with ${grills}`;
      if (finishes) output += ` finished with ${finishes}`;
      return output;
    }

    const roleValues = role => modifiers
      .filter(modifier => modifier.group === "dessert" && modifier.role === role)
      .map(modifier => modifier.value);

    const fillings = joinFoodPhrases(roleValues("filling"));
    const toppings = joinFoodPhrases(roleValues("topping"));
    const sauces = joinFoodPhrases(roleValues("sauce"));
    const garnishes = joinFoodPhrases(roleValues("garnish"));

    let output = cleanBase;
    if (fillings) output += ` filled with ${fillings}`;
    if (toppings) output += ` topped with ${toppings}`;
    if (sauces) output += ` drizzled with ${sauces}`;
    if (garnishes) output += ` finished with ${garnishes}`;
    return output;
  }


  const CATEGORIES = {

    // 食材の果物とは分離。ここは料理・デザート・飲み物に掛けるための連動専用棚。
    "🍱 食べ物・飲み物 / 🍓 トッピング・フィリング / 🍓 フルーツトッピング": {
      icon: "🍓",
      foodModifierGroup: "dessert",
      note: "食材の果物とは別です。選択したデザートの上にのせるトッピングとして合成します。",
      items: [
        { ja: "いちごスライス", en: "sliced strawberries", foodModifierRole: "topping" },
        { ja: "バナナスライス", en: "banana slices", foodModifierRole: "topping" },
        { ja: "ブルーベリー", en: "blueberries", foodModifierRole: "topping" },
        { ja: "ミックスベリー", en: "mixed berries", foodModifierRole: "topping" },
        { ja: "桃スライス", en: "peach slices", foodModifierRole: "topping" },
        { ja: "マンゴースライス", en: "mango slices", foodModifierRole: "topping" },
        { ja: "キウイスライス", en: "kiwi slices", foodModifierRole: "topping" },
        { ja: "メロンボール", en: "melon balls", foodModifierRole: "topping" }
      ]
    },
    "🍱 食べ物・飲み物 / 🍓 トッピング・フィリング / 🍦 クリーム・アイス・フィリング": {
      icon: "🍦",
      foodModifierGroup: "dessert",
      note: "上にのせるクリーム・アイスと、シュークリームなどの中身を選び分けます。",
      items: [
        { ja: "ホイップクリーム", en: "whipped cream", foodModifierRole: "topping" },
        { ja: "バニラアイス", en: "vanilla ice cream", foodModifierRole: "topping" },
        { ja: "ストロベリーアイス", en: "strawberry ice cream", foodModifierRole: "topping" },
        { ja: "カスタードクリーム（中身）", en: "custard cream", foodModifierRole: "filling" },
        { ja: "いちごクリーム（中身）", en: "strawberry cream", foodModifierRole: "filling" },
        { ja: "チョコクリーム（中身）", en: "chocolate cream", foodModifierRole: "filling" },
        { ja: "抹茶クリーム（中身）", en: "matcha cream", foodModifierRole: "filling" },
        { ja: "クリームチーズフィリング", en: "cream cheese filling", foodModifierRole: "filling" }
      ]
    },
    "🍱 食べ物・飲み物 / 🍓 トッピング・フィリング / 🍫 ソース・仕上げ": {
      icon: "🍫",
      foodModifierGroup: "dessert",
      note: "ソースはかける表現、粉糖などは最後の仕上げとして合成します。",
      items: [
        { ja: "メープルシロップ", en: "maple syrup", foodModifierRole: "sauce" },
        { ja: "チョコレートソース", en: "chocolate sauce", foodModifierRole: "sauce" },
        { ja: "キャラメルソース", en: "caramel sauce", foodModifierRole: "sauce" },
        { ja: "はちみつ", en: "honey", foodModifierRole: "sauce" },
        { ja: "いちごソース", en: "strawberry sauce", foodModifierRole: "sauce" },
        { ja: "ベリーソース", en: "berry sauce", foodModifierRole: "sauce" },
        { ja: "粉砂糖", en: "powdered sugar", foodModifierRole: "garnish" },
        { ja: "ココアパウダー", en: "cocoa powder", foodModifierRole: "garnish" },
        { ja: "砕いたナッツ", en: "chopped nuts", foodModifierRole: "garnish" },
        { ja: "カラースプリンクル", en: "colorful sprinkles", foodModifierRole: "garnish" }
      ]
    },
    "🍱 食べ物・飲み物 / 🍙 おにぎり・和の仕上げ / 🌿 外側の仕上げ": {
      icon: "🌿",
      foodModifierGroup: "onigiri",
      note: "おにぎり専用です。外側に巻くもの・まぶすものを選びます。選択した「おにぎり」にだけ合成し、自動では選びません。",
      items: [
        { ja: "海苔あり（おにぎり用）", en: "nori seaweed", foodModifierRole: "wrap" },
        { ja: "青じそ巻き", en: "green shiso leaf", foodModifierRole: "wrap" },
        { ja: "とろろ昆布巻き", en: "tororo kombu", foodModifierRole: "wrap" },
        { ja: "薄焼き卵巻き", en: "a thin omelet sheet", foodModifierRole: "wrap" },
        { ja: "ごま塩", en: "gomashio sesame salt", foodModifierRole: "seasoning" },
        { ja: "白ごま", en: "white sesame seeds", foodModifierRole: "garnish" },
        { ja: "黒ごま", en: "black sesame seeds", foodModifierRole: "garnish" },
        { ja: "ふりかけまぶし", en: "furikake seasoning", foodModifierRole: "coating" },
        { ja: "かつお節まぶし", en: "bonito flakes", foodModifierRole: "coating" }
      ]
    },
    "🍱 食べ物・飲み物 / 🍙 おにぎり・和の仕上げ / 🥢 中の具": {
      icon: "🥢",
      foodModifierGroup: "onigiri",
      note: "おにぎりの中身です。上に乗せず「中に入った具」として合成します。",
      items: [
        { ja: "梅干し", en: "pickled ume plum", foodModifierRole: "filling" },
        { ja: "焼き鮭", en: "grilled salmon", foodModifierRole: "filling" },
        { ja: "ツナマヨ", en: "tuna mayonnaise", foodModifierRole: "filling" },
        { ja: "昆布の佃煮", en: "seasoned kelp tsukudani", foodModifierRole: "filling" },
        { ja: "おかか", en: "seasoned bonito flakes", foodModifierRole: "filling" },
        { ja: "明太子", en: "spicy cod roe", foodModifierRole: "filling" },
        { ja: "たらこ", en: "salted cod roe", foodModifierRole: "filling" },
        { ja: "鶏そぼろ", en: "seasoned ground chicken", foodModifierRole: "filling" },
        { ja: "いくら", en: "salmon roe", foodModifierRole: "filling" },
        { ja: "ねぎ味噌", en: "scallion miso", foodModifierRole: "filling" }
      ]
    },
    "🍱 食べ物・飲み物 / 🍙 おにぎり・和の仕上げ / 🔥 焼き・味付け": {
      icon: "🔥",
      foodModifierGroup: "onigiri",
      note: "焼きおにぎりの表面・味付けです。具や外側の仕上げと組み合わせても使えます。",
      items: [
        { ja: "醤油焼き", en: "a glossy soy sauce glaze", foodModifierRole: "grill" },
        { ja: "味噌焼き", en: "a fragrant miso glaze", foodModifierRole: "grill" },
        { ja: "バター醤油焼き", en: "a butter soy sauce glaze", foodModifierRole: "grill" },
        { ja: "焦がし醤油", en: "a charred soy sauce glaze", foodModifierRole: "grill" },
        { ja: "香ばしい焼き目", en: "a lightly charred surface", foodModifierRole: "finish" },
        { ja: "炙りチーズ仕上げ", en: "melted cheese", foodModifierRole: "finish" }
      ]
    },
    // 丼物は既存の和食棚に混ぜず、完成セットからベース・具材・器・描写補助まで追える特化コレクションとして分離。
    "🍱 食べ物・飲み物 / 🍚 丼物特化コレクション": {
      icon: "🍚",
      note: "定番丼は完成セットで一発選択できます。完成セットは対応するベース・カスタマイズ・設定・クオリティ補助へ連動し、手動の微調整にも使えます。"
    },
    "🍱 食べ物・飲み物 / 🍚 丼物特化コレクション / ✨ 完成セット": {
      icon: "✨",
      note: "完成セットを切り替えると、このコレクション内で自動連動した下位項目だけを入れ替えます。手動で選んだ下位項目は残せます。",
      items: [
        {
          id: "donburi-complete-gyudon",
          collection_id: "donburi-v1",
          collection_role: "complete",
          ja: "牛丼・定番セット",
          en: "gyudon, Japanese beef rice bowl",
          linked_ids: ["donburi-base-white-rice", "donburi-custom-beef-onion", "donburi-custom-pickled-ginger", "donburi-custom-scallions", "donburi-setting-ceramic-bowl", "donburi-quality-glossy-sauce"]
        },
        {
          id: "donburi-complete-oyakodon",
          collection_id: "donburi-v1",
          collection_role: "complete",
          ja: "親子丼・定番セット",
          en: "oyakodon, chicken and egg rice bowl",
          linked_ids: ["donburi-base-white-rice", "donburi-custom-chicken-egg", "donburi-custom-scallions", "donburi-setting-ceramic-bowl", "donburi-quality-steam"]
        },
        {
          id: "donburi-complete-katsudon",
          collection_id: "donburi-v1",
          collection_role: "complete",
          ja: "カツ丼・定番セット",
          en: "katsudon, pork cutlet and egg rice bowl",
          linked_ids: ["donburi-base-white-rice", "donburi-custom-pork-cutlet-egg", "donburi-custom-simmered-onion", "donburi-setting-ceramic-bowl", "donburi-quality-crispy"]
        },
        {
          id: "donburi-complete-tendon",
          collection_id: "donburi-v1",
          collection_role: "complete",
          ja: "天丼・定番セット",
          en: "tendon, tempura rice bowl",
          linked_ids: ["donburi-base-white-rice", "donburi-custom-tempura", "donburi-custom-tendon-sauce", "donburi-custom-scallions", "donburi-setting-lacquered-bowl", "donburi-quality-crispy"]
        },
        {
          id: "donburi-complete-kaisendon",
          collection_id: "donburi-v1",
          collection_role: "complete",
          ja: "海鮮丼・定番セット",
          en: "kaisen-don, assorted sashimi rice bowl",
          linked_ids: ["donburi-base-sushi-rice", "donburi-custom-sashimi", "donburi-custom-salmon-roe", "donburi-custom-wasabi", "donburi-custom-shredded-nori", "donburi-setting-ceramic-bowl", "donburi-quality-fresh-seafood"]
        },
        {
          id: "donburi-complete-unadon",
          collection_id: "donburi-v1",
          collection_role: "complete",
          ja: "うな丼・定番セット",
          en: "unadon, grilled eel rice bowl",
          linked_ids: ["donburi-base-white-rice", "donburi-custom-grilled-eel", "donburi-custom-eel-sauce", "donburi-custom-sansho", "donburi-setting-lacquered-bowl", "donburi-quality-glossy-sauce"]
        }
      ]
    },
    "🍱 食べ物・飲み物 / 🍚 丼物特化コレクション / 🍚 ベース": {
      icon: "🍚",
      note: "丼の土台です。完成セットでは自動連動し、手動なら好みのごはん・器を選べます。",
      items: [
        { id: "donburi-base-white-rice", collection_id: "donburi-v1", collection_role: "base", ja: "白ごはん", en: "steamed white rice in a deep donburi bowl", foodSizeDisabled: true },
        { id: "donburi-base-sushi-rice", collection_id: "donburi-v1", collection_role: "base", ja: "酢飯（海鮮用）", en: "vinegared sushi rice in a deep donburi bowl", foodSizeDisabled: true },
        { id: "donburi-base-mixed-grain-rice", collection_id: "donburi-v1", collection_role: "base", ja: "雑穀ごはん", en: "mixed grain rice in a deep donburi bowl", foodSizeDisabled: true },
        { id: "donburi-base-large-rice", collection_id: "donburi-v1", collection_role: "base", ja: "大盛り白ごはん（丼土台）", en: "a generous bed of steamed white rice in a deep donburi bowl", foodSizeDisabled: true }
      ]
    },
    "🍱 食べ物・飲み物 / 🍚 丼物特化コレクション / 🥢 カスタマイズ": {
      icon: "🥢",
      note: "主役具材・追い具・薬味です。完成セット後の差し替えや、手作り丼の組み立てに使えます。",
      items: [
        { id: "donburi-custom-beef-onion", collection_id: "donburi-v1", collection_role: "customize", ja: "牛肉と玉ねぎの甘辛煮", en: "thinly sliced beef and simmered onions in sweet soy broth", foodSizeDisabled: true },
        { id: "donburi-custom-chicken-egg", collection_id: "donburi-v1", collection_role: "customize", ja: "鶏肉ととろとろ卵", en: "tender chicken pieces and softly cooked egg in dashi soy broth", foodSizeDisabled: true },
        { id: "donburi-custom-pork-cutlet-egg", collection_id: "donburi-v1", collection_role: "customize", ja: "とんかつと卵とじ", en: "crispy pork cutlet with softly cooked egg", foodSizeDisabled: true },
        { id: "donburi-custom-simmered-onion", collection_id: "donburi-v1", collection_role: "customize", ja: "玉ねぎのだし煮", en: "simmered onion slices in savory dashi", foodSizeDisabled: true },
        { id: "donburi-custom-tempura", collection_id: "donburi-v1", collection_role: "customize", ja: "えび天と野菜天", en: "shrimp tempura and vegetable tempura", foodSizeDisabled: true },
        { id: "donburi-custom-tendon-sauce", collection_id: "donburi-v1", collection_role: "customize", ja: "天丼のたれ", en: "glossy tempura sauce", foodSizeDisabled: true },
        { id: "donburi-custom-sashimi", collection_id: "donburi-v1", collection_role: "customize", ja: "まぐろ・サーモン刺身", en: "assorted tuna and salmon sashimi", foodSizeDisabled: true },
        { id: "donburi-custom-salmon-roe", collection_id: "donburi-v1", collection_role: "customize", ja: "いくら", en: "salmon roe", foodSizeDisabled: true },
        { id: "donburi-custom-grilled-eel", collection_id: "donburi-v1", collection_role: "customize", ja: "香ばしい蒲焼きうなぎ", en: "glazed grilled eel fillet", foodSizeDisabled: true },
        { id: "donburi-custom-eel-sauce", collection_id: "donburi-v1", collection_role: "customize", ja: "うなぎの照りだれ", en: "rich glossy eel sauce", foodSizeDisabled: true },
        { id: "donburi-custom-soft-egg-yolk", collection_id: "donburi-v1", collection_role: "customize", ja: "卵黄のせ", en: "a soft egg yolk on top", foodSizeDisabled: true },
        { id: "donburi-custom-scallions", collection_id: "donburi-v1", collection_role: "customize", ja: "刻みねぎ", en: "sliced scallions", foodSizeDisabled: true },
        { id: "donburi-custom-pickled-ginger", collection_id: "donburi-v1", collection_role: "customize", ja: "紅しょうが", en: "pickled ginger", foodSizeDisabled: true },
        { id: "donburi-custom-shredded-nori", collection_id: "donburi-v1", collection_role: "customize", ja: "刻み海苔", en: "shredded nori seaweed", foodSizeDisabled: true },
        { id: "donburi-custom-wasabi", collection_id: "donburi-v1", collection_role: "customize", ja: "わさび", en: "wasabi", foodSizeDisabled: true },
        { id: "donburi-custom-sansho", collection_id: "donburi-v1", collection_role: "customize", ja: "山椒", en: "sansho pepper", foodSizeDisabled: true }
      ]
    },
    "🍱 食べ物・飲み物 / 🍚 丼物特化コレクション / 🏮 設定": {
      icon: "🏮",
      note: "器・卓上・提供スタイルです。料理自体を変えず、和食らしい見え方を足します。",
      items: [
        { id: "donburi-setting-ceramic-bowl", collection_id: "donburi-v1", collection_role: "setting", ja: "深い陶器どんぶり", en: "served in a deep ceramic donburi bowl", foodSizeDisabled: true },
        { id: "donburi-setting-lacquered-bowl", collection_id: "donburi-v1", collection_role: "setting", ja: "漆塗りの和どんぶり", en: "served in a lacquered Japanese rice bowl", foodSizeDisabled: true },
        { id: "donburi-setting-chopsticks", collection_id: "donburi-v1", collection_role: "setting", ja: "箸を添える", en: "chopsticks resting beside the bowl", foodSizeDisabled: true },
        { id: "donburi-setting-japanese-tray", collection_id: "donburi-v1", collection_role: "setting", ja: "和食盆の上", en: "served on a Japanese meal tray", foodSizeDisabled: true },
        { id: "donburi-setting-meal-set", collection_id: "donburi-v1", collection_role: "setting", ja: "味噌汁・漬物付き", en: "miso soup and pickles beside the bowl", foodSizeDisabled: true },
        { id: "donburi-setting-diner", collection_id: "donburi-v1", collection_role: "setting", ja: "和食店の卓上", en: "on a casual Japanese diner table", foodSizeDisabled: true },
        { id: "donburi-setting-stall", collection_id: "donburi-v1", collection_role: "setting", ja: "屋台・食堂風", en: "at a Japanese food stall counter", foodSizeDisabled: true }
      ]
    },
    "🍱 食べ物・飲み物 / 🍚 丼物特化コレクション / ✨ クオリティ補助": {
      icon: "✨",
      note: "丼の描写を補助します。完成セットには相性のよい1項目だけを連動し、必要なら手動で追加できます。",
      items: [
        { id: "donburi-quality-glossy-sauce", collection_id: "donburi-v1", collection_role: "quality", ja: "たれの照り・艶", en: "glossy savory sauce with appetizing highlights", foodSizeDisabled: true },
        { id: "donburi-quality-steam", collection_id: "donburi-v1", collection_role: "quality", ja: "湯気の立つ熱々丼", en: "steaming hot food with gentle rising steam", foodSizeDisabled: true },
        { id: "donburi-quality-crispy", collection_id: "donburi-v1", collection_role: "quality", ja: "衣のサクサク感", en: "crisp golden fried coating with fine crumb texture", foodSizeDisabled: true },
        { id: "donburi-quality-fresh-seafood", collection_id: "donburi-v1", collection_role: "quality", ja: "魚介の瑞々しい艶", en: "fresh seafood sheen and translucent sashimi texture", foodSizeDisabled: true },
        { id: "donburi-quality-rice-grains", collection_id: "donburi-v1", collection_role: "quality", ja: "米粒の立体感", en: "clearly visible individual rice grains", foodSizeDisabled: true },
        { id: "donburi-quality-food-focus", collection_id: "donburi-v1", collection_role: "quality", ja: "料理の主役感", en: "appetizing food focus, carefully arranged ingredients", foodSizeDisabled: true }
      ]
    },

    // ピザは既存のジャンクフード・洋食棚を残したまま、完成セットから生地・チーズ・具材・焼き加減まで追える特化コレクションとして分離。
    "🍱 食べ物・飲み物 / 🍕 ピザ特化コレクション": {
      icon: "🍕",
      note: "定番ピザは完成セットで一発選択できます。完成セットは対応するベース・カスタマイズ・設定・クオリティ補助へ連動し、生地・チーズ・具材の手動調整にも使えます。"
    },
    "🍱 食べ物・飲み物 / 🍕 ピザ特化コレクション / ✨ 完成セット": {
      icon: "✨",
      note: "完成セットを切り替えると、このコレクション内で自動連動した下位項目だけを入れ替えます。手動で選んだ下位項目は残せます。",
      items: [
        {
          id: "pizza-complete-margherita",
          collection_id: "pizza-v1",
          collection_role: "complete",
          ja: "マルゲリータ・定番セット",
          en: "margherita pizza",
          linked_ids: ["pizza-base-whole", "pizza-base-neapolitan", "pizza-custom-tomato-sauce", "pizza-custom-mozzarella", "pizza-custom-tomato-basil", "pizza-setting-wooden-board", "pizza-quality-golden-cheese"]
        },
        {
          id: "pizza-complete-pepperoni",
          collection_id: "pizza-v1",
          collection_role: "complete",
          ja: "ペパロニピザ・定番セット",
          en: "pepperoni pizza",
          linked_ids: ["pizza-base-whole", "pizza-base-american", "pizza-custom-tomato-sauce", "pizza-custom-extra-cheese", "pizza-custom-pepperoni", "pizza-setting-pizza-box", "pizza-quality-blistered-crust"]
        },
        {
          id: "pizza-complete-seafood",
          collection_id: "pizza-v1",
          collection_role: "complete",
          ja: "シーフードピザ・定番セット",
          en: "seafood pizza",
          linked_ids: ["pizza-base-whole", "pizza-base-crispy", "pizza-custom-white-sauce", "pizza-custom-mozzarella", "pizza-custom-seafood", "pizza-custom-onion-olive", "pizza-setting-wooden-board", "pizza-quality-visible-toppings"]
        },
        {
          id: "pizza-complete-quattro-formaggi",
          collection_id: "pizza-v1",
          collection_role: "complete",
          ja: "クワトロフォルマッジ・定番セット",
          en: "quattro formaggi pizza",
          linked_ids: ["pizza-base-whole", "pizza-base-neapolitan", "pizza-custom-four-cheese", "pizza-custom-honey-drizzle", "pizza-setting-italian-table", "pizza-quality-cheese-pull"]
        },
        {
          id: "pizza-complete-teriyaki-chicken",
          collection_id: "pizza-v1",
          collection_role: "complete",
          ja: "テリヤキチキンピザ・定番セット",
          en: "teriyaki chicken pizza",
          linked_ids: ["pizza-base-whole", "pizza-base-thick-chewy", "pizza-custom-teriyaki-sauce", "pizza-custom-mozzarella", "pizza-custom-teriyaki-chicken", "pizza-custom-corn-mayo", "pizza-setting-pizza-box", "pizza-quality-glossy-sauce"]
        },
        {
          id: "pizza-complete-vegetable",
          collection_id: "pizza-v1",
          collection_role: "complete",
          ja: "ベジタブルピザ・定番セット",
          en: "vegetable pizza",
          linked_ids: ["pizza-base-whole", "pizza-base-crispy", "pizza-custom-tomato-sauce", "pizza-custom-mozzarella", "pizza-custom-vegetable-toppings", "pizza-setting-wooden-board", "pizza-quality-visible-toppings"]
        }
      ]
    },
    "🍱 食べ物・飲み物 / 🍕 ピザ特化コレクション / 🍞 ベース": {
      icon: "🍞",
      note: "ピザの形と生地です。完成セットでは自動連動し、手動ならホール・一切れ・生地の厚みを選べます。",
      items: [
        { id: "pizza-base-whole", collection_id: "pizza-v1", collection_role: "base", ja: "ホールピザ", en: "a whole round pizza, ready to serve", foodSizeDisabled: true },
        { id: "pizza-base-slice", collection_id: "pizza-v1", collection_role: "base", ja: "ピザ一切れ", en: "a single triangular pizza slice", foodSizeDisabled: true },
        { id: "pizza-base-pre-sliced", collection_id: "pizza-v1", collection_role: "base", ja: "カット済み", en: "pizza cut into neat slices", foodSizeDisabled: true },
        { id: "pizza-base-neapolitan", collection_id: "pizza-v1", collection_role: "base", ja: "ナポリ風薄生地", en: "thin Neapolitan-style crust with a puffy rim", foodSizeDisabled: true },
        { id: "pizza-base-crispy", collection_id: "pizza-v1", collection_role: "base", ja: "クリスピー薄生地", en: "thin crispy pizza crust", foodSizeDisabled: true },
        { id: "pizza-base-american", collection_id: "pizza-v1", collection_role: "base", ja: "アメリカン厚め生地", en: "thicker American-style pizza crust", foodSizeDisabled: true },
        { id: "pizza-base-thick-chewy", collection_id: "pizza-v1", collection_role: "base", ja: "もちもち厚め生地", en: "soft chewy thick pizza dough", foodSizeDisabled: true },
        { id: "pizza-base-deep-dish", collection_id: "pizza-v1", collection_role: "base", ja: "深皿ピザ", en: "deep-dish pizza with a tall crust edge", foodSizeDisabled: true }
      ]
    },
    "🍱 食べ物・飲み物 / 🍕 ピザ特化コレクション / 🧀 カスタマイズ": {
      icon: "🧀",
      note: "ソース・チーズ・具材・仕上げです。完成セット後の差し替えや、好みのピザ作りに使えます。",
      items: [
        { id: "pizza-custom-tomato-sauce", collection_id: "pizza-v1", collection_role: "customize", ja: "濃厚トマトソース", en: "rich tomato pizza sauce", foodSizeDisabled: true },
        { id: "pizza-custom-basil-pesto", collection_id: "pizza-v1", collection_role: "customize", ja: "バジルペスト", en: "fragrant basil pesto sauce", foodSizeDisabled: true },
        { id: "pizza-custom-white-sauce", collection_id: "pizza-v1", collection_role: "customize", ja: "クリーミーホワイトソース", en: "creamy white pizza sauce", foodSizeDisabled: true },
        { id: "pizza-custom-teriyaki-sauce", collection_id: "pizza-v1", collection_role: "customize", ja: "テリヤキソース", en: "glossy teriyaki sauce", foodSizeDisabled: true },
        { id: "pizza-custom-mozzarella", collection_id: "pizza-v1", collection_role: "customize", ja: "モッツァレラたっぷり", en: "generous melted mozzarella cheese", foodSizeDisabled: true },
        { id: "pizza-custom-extra-cheese", collection_id: "pizza-v1", collection_role: "customize", ja: "とろけるチーズ増量", en: "an extra layer of melted cheese", foodSizeDisabled: true },
        { id: "pizza-custom-four-cheese", collection_id: "pizza-v1", collection_role: "customize", ja: "4種チーズ", en: "four-cheese blend with mozzarella, gorgonzola, parmesan, and ricotta", foodSizeDisabled: true },
        { id: "pizza-custom-tomato-basil", collection_id: "pizza-v1", collection_role: "customize", ja: "フレッシュトマトとバジル", en: "fresh tomato slices and basil leaves", foodSizeDisabled: true },
        { id: "pizza-custom-pepperoni", collection_id: "pizza-v1", collection_role: "customize", ja: "ペパロニ", en: "spicy pepperoni slices", foodSizeDisabled: true },
        { id: "pizza-custom-seafood", collection_id: "pizza-v1", collection_role: "customize", ja: "えび・いか・貝のシーフード", en: "shrimp, calamari, and scallops", foodSizeDisabled: true },
        { id: "pizza-custom-teriyaki-chicken", collection_id: "pizza-v1", collection_role: "customize", ja: "照り焼きチキン", en: "tender teriyaki chicken pieces", foodSizeDisabled: true },
        { id: "pizza-custom-corn-mayo", collection_id: "pizza-v1", collection_role: "customize", ja: "コーンマヨ", en: "sweet corn kernels with a light mayonnaise drizzle", foodSizeDisabled: true },
        { id: "pizza-custom-vegetable-toppings", collection_id: "pizza-v1", collection_role: "customize", ja: "彩り野菜", en: "bell peppers, mushrooms, onions, and black olives", foodSizeDisabled: true },
        { id: "pizza-custom-onion-olive", collection_id: "pizza-v1", collection_role: "customize", ja: "オニオンとブラックオリーブ", en: "sliced onions and black olives", foodSizeDisabled: true },
        { id: "pizza-custom-bacon-sausage", collection_id: "pizza-v1", collection_role: "customize", ja: "ベーコンとソーセージ", en: "crispy bacon and savory sausage", foodSizeDisabled: true },
        { id: "pizza-custom-jalapeno", collection_id: "pizza-v1", collection_role: "customize", ja: "ハラペーニョ", en: "sliced jalapeno peppers", foodSizeDisabled: true },
        { id: "pizza-custom-honey-drizzle", collection_id: "pizza-v1", collection_role: "customize", ja: "はちみつがけ", en: "a light honey drizzle", foodSizeDisabled: true }
      ]
    },
    "🍱 食べ物・飲み物 / 🍕 ピザ特化コレクション / 🏠 設定": {
      icon: "🏠",
      note: "器・提供スタイル・食べる瞬間です。ピザそのものを変えず、見え方と場面を足します。",
      items: [
        { id: "pizza-setting-wooden-board", collection_id: "pizza-v1", collection_role: "setting", ja: "木のピザボード", en: "served on a rustic wooden pizza board", foodSizeDisabled: true },
        { id: "pizza-setting-pizza-box", collection_id: "pizza-v1", collection_role: "setting", ja: "ピザ箱入り", en: "served in an open pizza box", foodSizeDisabled: true },
        { id: "pizza-setting-slice-lifted", collection_id: "pizza-v1", collection_role: "setting", ja: "一切れを持ち上げる", en: "one pizza slice being lifted from the pie", foodSizeDisabled: true },
        { id: "pizza-setting-cheese-stretch", collection_id: "pizza-v1", collection_role: "setting", ja: "チーズが伸びる瞬間", en: "long strands of melted cheese stretching from a lifted slice", foodSizeDisabled: true },
        { id: "pizza-setting-party-table", collection_id: "pizza-v1", collection_role: "setting", ja: "パーティーテーブル", en: "on a lively party table", foodSizeDisabled: true },
        { id: "pizza-setting-italian-table", collection_id: "pizza-v1", collection_role: "setting", ja: "イタリアン店の卓上", en: "on a cozy Italian restaurant table", foodSizeDisabled: true },
        { id: "pizza-setting-fresh-oven", collection_id: "pizza-v1", collection_role: "setting", ja: "焼きたて・窯出し", en: "freshly baked and just out of the oven", foodSizeDisabled: true }
      ]
    },
    "🍱 食べ物・飲み物 / 🍕 ピザ特化コレクション / ✨ クオリティ補助": {
      icon: "✨",
      note: "チーズ・生地・具材の食欲をそそる描写を補助します。完成セットには相性のよい1項目だけを連動し、必要なら手動で追加できます。",
      items: [
        { id: "pizza-quality-blistered-crust", collection_id: "pizza-v1", collection_role: "quality", ja: "香ばしい焦げ目の生地", en: "blistered crust with lightly charred edges", foodSizeDisabled: true },
        { id: "pizza-quality-golden-cheese", collection_id: "pizza-v1", collection_role: "quality", ja: "黄金色の焼きチーズ", en: "golden baked cheese with appetizing browned spots", foodSizeDisabled: true },
        { id: "pizza-quality-cheese-pull", collection_id: "pizza-v1", collection_role: "quality", ja: "糸を引くチーズ", en: "stretchy melted cheese pull", foodSizeDisabled: true },
        { id: "pizza-quality-glossy-sauce", collection_id: "pizza-v1", collection_role: "quality", ja: "ソースの照り・艶", en: "glossy sauce with appetizing highlights", foodSizeDisabled: true },
        { id: "pizza-quality-visible-toppings", collection_id: "pizza-v1", collection_role: "quality", ja: "具材の見えやすさ", en: "clearly visible, carefully arranged toppings", foodSizeDisabled: true },
        { id: "pizza-quality-steam", collection_id: "pizza-v1", collection_role: "quality", ja: "熱々の湯気", en: "steaming hot pizza with gentle rising steam", foodSizeDisabled: true },
        { id: "pizza-quality-food-focus", collection_id: "pizza-v1", collection_role: "quality", ja: "料理の主役感", en: "appetizing food focus with rich texture detail", foodSizeDisabled: true }
      ]
    },

    "🍱 食べ物・飲み物 / 🥤 ドリンクフレーバー / 🍹 ドリンクベース": {
      icon: "🍹",
      foodDecorationBase: "drink",
      note: "フレーバーを付けるための無味ベースです。桃＋ジュース、メロン＋ソーダのように組み合わせます。",
      items: [
        { ja: "ジュース（ベース）", en: "juice", drinkBaseType: "juice" },
        { ja: "ソーダ（ベース）", en: "soda", drinkBaseType: "soda" },
        { ja: "アイスティー（ベース）", en: "iced tea", drinkBaseType: "iced tea" },
        { ja: "ミルクシェイク（ベース）", en: "milkshake", drinkBaseType: "milkshake" },
        { ja: "スムージー（ベース）", en: "smoothie", drinkBaseType: "smoothie" },
        { ja: "フロート（ベース）", en: "float", drinkBaseType: "float" },
        { ja: "レモネード（ベース）", en: "lemonade", drinkBaseType: "lemonade" }
      ]
    },
    "🍱 食べ物・飲み物 / 🥤 ドリンクフレーバー / 🍑 果実フレーバー": {
      icon: "🍑",
      foodModifierGroup: "drink",
      note: "選択したドリンクベースへ付ける果実フレーバーです。フレーバーだけでは出力しません。",
      items: [
        { ja: "いちごフレーバー", en: "strawberry", foodModifierRole: "flavor" },
        { ja: "桃フレーバー", en: "peach", foodModifierRole: "flavor" },
        { ja: "メロンフレーバー", en: "melon", foodModifierRole: "flavor" },
        { ja: "りんごフレーバー", en: "apple", foodModifierRole: "flavor" },
        { ja: "ぶどうフレーバー", en: "grape", foodModifierRole: "flavor" },
        { ja: "オレンジフレーバー", en: "orange", foodModifierRole: "flavor" },
        { ja: "レモンフレーバー", en: "lemon", foodModifierRole: "flavor" },
        { ja: "マンゴーフレーバー", en: "mango", foodModifierRole: "flavor" },
        { ja: "ミックスベリーフレーバー", en: "mixed berry", foodModifierRole: "flavor" }
      ]
    },
    "🍱 食べ物・飲み物 / 🍽 定番完成メニュー": {
      icon: "🍽",
      foodDirectMenu: true,
      note: "定番だけを一発で選びたい時の完成形です。自由な組み合わせはトッピング・フィリング棚を使います。",
      items: [
        { ja: "いちごホイップパンケーキ", en: "pancakes topped with sliced strawberries and whipped cream" },
        { ja: "いちごシュークリーム", en: "cream puff filled with strawberry cream" },
        { ja: "チョコバナナクレープ", en: "crepe topped with banana slices and drizzled with chocolate sauce" },
        { ja: "ミックスベリーパフェ", en: "parfait topped with mixed berries and whipped cream" },
        { ja: "メロンソーダフロート", en: "melon soda float" }
      ]
    },
    "👒 頭部の装飾・帽子 (Headgear)": {
      items: [
        { ja: "帽子 (ハット)", en: "hat" }, { ja: "キャップ", en: "cap" }, { ja: "ベレー帽", en: "beret" }, { ja: "ニット帽", en: "beanie" }, { ja: "麦わら帽子", en: "straw hat" }, { ja: "サンバイザー", en: "visor" }, { ja: "ヘルメット", en: "helmet" }, { ja: "フード", en: "hood" }, { ja: "リボン (髪飾り)", en: "hair ribbon" }, { ja: "半透明のリボン", en: "translucent ribbon" }, { ja: "カチューシャ", en: "hairband" }, { ja: "シュシュ", en: "scrunchie" }, { ja: "ヘアピン", en: "hairclip" }, { ja: "バレッタ", en: "hair ornament" }, { ja: "羽根の髪飾り", en: "feather hairclip" }, { ja: "花飾り", en: "flower hair ornament" }, { ja: "ティアラ/王冠", en: "crown" }, { ja: "ベール", en: "veil" }, { ja: "ヘッドフォン", en: "headphones" }, { ja: "狐面", en: "fox mask" }, { ja: "マスク", en: "mask" }, { ja: "眼帯", en: "eyepatch" }, { ja: "サングラス", en: "sunglasses" }, { ja: "眼鏡", en: "glasses" }
      ]
    },
    "💎 ジュエリー・装身具 (Jewelry)": {
      items: [
        { ja: "イヤリング/ピアス", en: "earrings" }, { ja: "ネックレス", en: "necklace" }, { ja: "チョーカー", en: "choker" }, { ja: "首輪", en: "collar" }, { ja: "指輪", en: "ring" }, { ja: "ブレスレット", en: "bracelet" }, { ja: "腕時計", en: "wristwatch" }, { ja: "ブローチ", en: "brooch" }, { ja: "真珠 (パール)", en: "pearls" }, { ja: "宝石", en: "gemstone" }, { ja: "ボディピアス", en: "body piercing" }, { ja: "ネイルアート", en: "nail art" }
      ]
    },
    "🧣 服飾小物・背部 (Clothing Acc)": {
      items: [
        { ja: "ネクタイ", en: "necktie" }, { ja: "蝶ネクタイ", en: "bowtie" }, { ja: "スカーフ/マフラー", en: "scarf" }, { ja: "手袋 (グローブ)", en: "gloves" }, { ja: "ベルト", en: "belt" }, { ja: "ガーターベルト", en: "garter belt" }, { ja: "リュックサック", en: "backpack" }, { ja: "カバン/バッグ", en: "bag" }, { ja: "ショルダーバッグ", en: "shoulder bag" }, { ja: "トートバッグ", en: "tote bag" }, { ja: "翼 (ウィング)", en: "wings" }, { ja: "悪魔の翼", en: "demon wings" }, { ja: "天使の翼", en: "angel wings" }, { ja: "マント/ケープ", en: "cape" }, { ja: "尻尾", en: "tail" }
      ]
    },
    "👜 手持ち小物 (Handheld)": {
      isTarget: true,
      items: [
        { ja: "スマホ", en: "smartphone" }, { ja: "本/魔導書", en: "book" }, { ja: "手紙/ラブレター", en: "letter" }, { ja: "花束", en: "bouquet" }, { ja: "一輪の花", en: "flower" }, { ja: "傘 (アンブレラ)", en: "umbrella" }, { ja: "日傘 (パラソル)", en: "parasol" }, { ja: "扇子", en: "folding fan" }, { ja: "うちわ", en: "hand fan" }, { ja: "風船", en: "balloon" }, { ja: "ランタン", en: "lantern" }, { ja: "懐中電灯", en: "flashlight" }, { ja: "カメラ", en: "camera" }, { ja: "トランクケース", en: "briefcase" }, { ja: "アタッシュケース", en: "attaché case" }, { ja: "ダッフルバッグ", en: "duffel bag" }, { ja: "買い物袋", en: "shopping bag" }
      ]
    },
    "🧸 ぬいぐるみ (Plushies)": {
      isTarget: true,
      items: [
        { ja: "ぬいぐるみ", en: "stuffed toy" }, { ja: "くまのぬいぐるみ", en: "teddy bear" }, { ja: "うさぎのぬいぐるみ", en: "stuffed bunny" }, { ja: "シマエナガのぬいぐるみ", en: "white head Shima-enaga bushtit plush" }, { ja: "猫のぬいぐるみ", en: "stuffed cat" }, { ja: "犬のぬいぐるみ", en: "stuffed dog" }, { ja: "巨大ぬいぐるみ", en: "oversized plush" }
      ]
    },
    "💰 財宝・金塊 (Treasure & Gold Bars)": {
      isTarget: true,
      items: [
        { ja: "金塊", en: "gold bars" }, { ja: "積み上がった金塊", en: "stacked gold bars" }, { ja: "散らばる金塊", en: "scattered gold bars" }, { ja: "山積みの財宝", en: "pile of treasure" }, { ja: "盗み出した財宝", en: "stolen treasure" }, { ja: "金庫から出した金塊", en: "gold bars from a vault" }, { ja: "重そうな金塊", en: "heavy gold bars" }, { ja: "眩しく輝く財宝", en: "gleaming treasure" }
      ]
    },
    "💎 宝石・ジュエル (Gems & Jewels)": {
      isTarget: true,
      items: [
        { ja: "宝石", en: "gems" }, { ja: "ルビー", en: "ruby" }, { ja: "サファイア", en: "sapphire" }, { ja: "エメラルド", en: "emerald" }, { ja: "ダイヤモンド", en: "diamond" }, { ja: "宝石袋", en: "bag of gems" }, { ja: "散らばる宝石", en: "scattered jewels" }, { ja: "きらめく宝石の山", en: "pile of sparkling gems" }
      ]
    },
    "🪙 コイン・貨幣 (Coins & Currency)": {
      isTarget: true,
      items: [
        { ja: "金貨", en: "gold coins" }, { ja: "銀貨", en: "silver coins" }, { ja: "コイン", en: "coins" }, { ja: "古代コイン", en: "ancient coins" }, { ja: "記念コイン", en: "commemorative coins" }, { ja: "硬貨の山", en: "pile of coins" }, { ja: "こぼれるコイン", en: "spilling coins" }, { ja: "降り注ぐ金貨", en: "raining gold coins" }
      ]
    },
    "💴 紙幣・札束 (Banknotes & Cash)": {
      isTarget: true,
      items: [
        { ja: "紙幣", en: "banknotes" }, { ja: "札束", en: "stacks of cash" }, { ja: "現金", en: "cash" }, { ja: "札束の山", en: "pile of banknotes" }, { ja: "ばら撒かれた紙幣", en: "scattered banknotes" }, { ja: "舞う紙幣", en: "flying banknotes" }, { ja: "金庫から溢れる現金", en: "cash spilling from a vault" }, { ja: "大金", en: "large sum of money" }
      ]
    },
    "📦 宝箱・保管容器 (Treasure Chests & Storage)": {
      isTarget: true,
      items: [
        { ja: "宝箱", en: "treasure chest" }, { ja: "開いた宝箱", en: "open treasure chest" }, { ja: "金貨で満ちた宝箱", en: "treasure chest full of gold coins" }, { ja: "宝石入りの箱", en: "jewel box" }, { ja: "金庫", en: "vault" }, { ja: "開いた金庫", en: "open vault" }, { ja: "現金入りの金庫", en: "vault full of cash" }, { ja: "戦利品の木箱", en: "loot crate" }
      ]
    },
    "💼 アタッシュケース・現金ケース (Attaché & Money Cases)": {
      isTarget: true,
      items: [
        { ja: "アタッシュケース", en: "attaché case" }, { ja: "高級アタッシュケース", en: "luxury attaché case" }, { ja: "金塊入りアタッシュケース", en: "attaché case full of gold bars" }, { ja: "札束入りアタッシュケース", en: "attaché case full of cash" }, { ja: "開いたアタッシュケース", en: "open briefcase" }, { ja: "手錠付きアタッシュケース", en: "handcuffed briefcase" }, { ja: "マネーケース", en: "money case" }, { ja: "戦利品ケース", en: "loot briefcase" }
      ]
    },
    "🛒 運搬・台車 (Carts & Transport)": {
      isTarget: true,
      items: [
        { ja: "台車", en: "pushcart" }, { ja: "平台車", en: "flatbed cart" }, { ja: "手押し台車", en: "hand truck cart" }, { ja: "ワゴンカート", en: "utility wagon" }, { ja: "トロッコ", en: "mine cart" }, { ja: "金塊を積んだ台車", en: "cart loaded with gold bars" }, { ja: "札束を積んだ台車", en: "cart loaded with cash" }, { ja: "コイン袋を積んだ台車", en: "cart loaded with money bags" }
      ]
    },
    // --- 武器・食べ物（オリジナルの全データをここに保持） ---
    "⚔️ 武器・兵器 / 各種武器 / 近接武器（剣・短剣・斧・槌・鎌）": { isTarget: true, items: [{ ja: "剣 (ソード)", en: "sword" }, { ja: "刀 (カタナ)", en: "katana" }, { ja: "太刀", en: "tachi" }, { ja: "脇差", en: "wakizashi" }, { ja: "短刀", en: "tanto" }, { ja: "大太刀", en: "odachi" }, { ja: "野太刀", en: "nodachi" }, { ja: "忍者刀", en: "ninjato" }, { ja: "短剣 (ダガー)", en: "dagger" }, { ja: "大剣", en: "greatsword" }, { ja: "斧 (アックス)", en: "axe" }, { ja: "ハンマー", en: "hammer" }, { ja: "ウォーハンマー", en: "warhammer" }, { ja: "モール", en: "maul weapon" }, { ja: "メイス", en: "mace weapon" }, { ja: "モーニングスター", en: "morning star weapon" }, { ja: "フレイル", en: "flail" }, { ja: "鎌 (サイズ)", en: "scythe" }, { ja: "ウォーサイズ", en: "war scythe" }, { ja: "コンバットナイフ", en: "combat knife" }, { ja: "バヨネット", en: "bayonet" }, { ja: "儀礼剣", en: "ritual blade" }, { ja: "儀式用斧", en: "ceremonial axe" }, { ja: "象徴剣", en: "symbolic sword" }] },
    "⚔️ 武器・兵器 / 各種武器 / 長柄武器（槍・薙刀・ポールアーム）": { isTarget: true, items: [{ ja: "槍 (スピア)", en: "spear" }, { ja: "槍", en: "yari" }, { ja: "長槍", en: "long yari" }, { ja: "十文字槍", en: "jumonji yari" }, { ja: "鎌槍", en: "kama yari" }, { ja: "薙刀", en: "naginata" }, { ja: "トライデント", en: "trident" }, { ja: "ハルバード", en: "halberd" }, { ja: "グレイブ", en: "glaive" }, { ja: "ポールアーム", en: "polearm" }, { ja: "ポールアックス", en: "poleaxe" }, { ja: "神官の槍", en: "cleric spear" }, { ja: "牙の槍", en: "fang spear" }, { ja: "プラズマランス", en: "plasma lance" }] },
    "⚔️ 武器・兵器 / 各種武器 / 弓・クロスボウ・射出": { isTarget: true, items: [{ ja: "弓 (ボウ)", en: "bow weapon" }, { ja: "和弓", en: "yumi bow" }, { ja: "矢", en: "arrow" }, { ja: "矢（複数）", en: "arrows" }, { ja: "クロスボウ用クランク", en: "crossbow crank" }, { ja: "投槍器", en: "atlatl" }, { ja: "スリングスタッフ", en: "sling staff" }, { ja: "ネットランチャー", en: "net launcher" }, { ja: "吹き矢", en: "blowgun" }] },
    "⚔️ 武器・兵器 / 各種武器 / 投擲武器": { isTarget: true, items: [{ ja: "チャクラム", en: "chakram" }, { ja: "投擲円盤", en: "throwing disc" }, { ja: "ブーメラン", en: "boomerang" }, { ja: "ダーツ", en: "darts" }, { ja: "投げナイフ", en: "throwing knife" }, { ja: "投げ針", en: "throwing needle" }, { ja: "スリング", en: "sling" }, { ja: "投げ斧", en: "throwing axe" }, { ja: "投げ槍", en: "throwing spear" }, { ja: "投げハンマー", en: "throwing hammer" }, { ja: "分銅鎖", en: "weighted chain" }, { ja: "ボーラ", en: "bola weapon" }] },
    "⚔️ 武器・兵器 / 各種武器 / 鞭・ロッド・バトン": { isTarget: true, items: [{ ja: "鞭", en: "whip" }, { ja: "ロングウィップ", en: "long whip" }, { ja: "ショートウィップ", en: "short whip" }, { ja: "レザーウィップ", en: "leather whip" }, { ja: "チェーンウィップ", en: "chain whip" }, { ja: "茨の鞭", en: "thorn whip" }, { ja: "蔦の鞭", en: "vine whip" }, { ja: "植物の鞭", en: "plant whip" }, { ja: "触手鞭", en: "tentacle whip" }, { ja: "生体鞭", en: "living whip" }, { ja: "骨の鞭", en: "bone whip" }, { ja: "電気鞭", en: "electric whip" }, { ja: "雷鞭", en: "lightning whip" }, { ja: "炎の鞭", en: "flame whip" }, { ja: "氷の鞭", en: "ice whip" }, { ja: "闇の鞭", en: "dark whip" }, { ja: "光の鞭", en: "holy whip" }, { ja: "エネルギーウィップ", en: "energy whip" }, { ja: "プラズマウィップ", en: "plasma whip" }, { ja: "レーザーウィップ", en: "laser whip" }, { ja: "ヒートロッド", en: "heat rod" }, { ja: "スタンロッド", en: "stun rod" }, { ja: "電撃バトン", en: "electric baton" }, { ja: "警棒", en: "baton" }, { ja: "拘束バトン", en: "control baton" }] },
    "⚔️ 武器・兵器 / 各種武器 / 盾・防具系": { isTarget: true, items: [{ ja: "盾 (シールド)", en: "shield" }, { ja: "タクティカルシールド", en: "tactical shield" }] },
    "⚔️ 武器・兵器 / 各種武器 / 銃火器": { isTarget: true, items: [{ ja: "銃 (ガン)", en: "gun" }, { ja: "ライフル", en: "rifle" }, { ja: "二丁拳銃", en: "dual guns" }, { ja: "ピストル", en: "pistol" }, { ja: "リボルバー", en: "revolver" }, { ja: "自動拳銃", en: "automatic handgun" }, { ja: "アサルトライフル", en: "assault rifle" }, { ja: "バトルライフル", en: "battle rifle" }, { ja: "カービンライフル", en: "carbine rifle" }, { ja: "スナイパーライフル", en: "sniper rifle" }, { ja: "マークスマンライフル", en: "marksman rifle" }, { ja: "ショットガン", en: "shotgun" }, { ja: "サブマシンガン", en: "submachine gun" }, { ja: "ライトマシンガン", en: "light machine gun" }, { ja: "スタンライフル", en: "stun rifle" }] },
    "⚔️ 武器・兵器 / 各種武器 / SF武器（エネルギー・レール系）": { isTarget: true, items: [{ ja: "レーザーソード", en: "laser sword" }, { ja: "ライトセーバー", en: "lightsaber" }, { ja: "エネルギーブレード", en: "energy blade" }, { ja: "プラズマソード", en: "plasma sword" }, { ja: "レーザーライフル", en: "laser rifle" }, { ja: "プラズマライフル", en: "plasma rifle" }, { ja: "レールガン", en: "railgun" }, { ja: "ガウスライフル", en: "gauss rifle" }, { ja: "パルスライフル", en: "pulse rifle" }, { ja: "パルスキャノン", en: "pulse cannon" }] },
    "⚔️ 武器・兵器 / 各種武器 / 罠・拘束（非エロ）": { isTarget: true, items: [{ ja: "罠網", en: "net trap" }, { ja: "捕獲ネット", en: "capture net" }, { ja: "投網", en: "throwing net" }, { ja: "拘束ロープ", en: "binding rope" }, { ja: "拘束チェーン", en: "binding chain" }, { ja: "捕縛具", en: "restraint device" }, { ja: "捕獲用ケーブル", en: "capture cable" }, { ja: "スネアトラップ", en: "snare trap" }, { ja: "ワイヤートラップ", en: "wire trap" }, { ja: "落とし穴", en: "pitfall trap" }, { ja: "スパイクトラップ", en: "spike trap" }, { ja: "拘束プレート", en: "restraining plate" }, { ja: "捕獲罠", en: "hunting trap" }, { ja: "足くくり罠", en: "foot snare" }, { ja: "熊罠", en: "bear trap" }, { ja: "落石罠", en: "rockfall trap" }, { ja: "拘束フィールド", en: "containment field" }, { ja: "スタンネット", en: "stun net" }, { ja: "拘束ドローン", en: "capture drone" }, { ja: "拘束装置", en: "containment device" }, { ja: "グラップリングフック", en: "grappling hook" }, { ja: "捕獲フック", en: "capture hook" }, { ja: "投げ縄", en: "lasso" }, { ja: "電磁ネット", en: "electromagnetic net" }] },
    "⚔️ 武器・兵器 / 各種武器 / 攻城兵器": { isTarget: true, items: [{ ja: "バリスタ", en: "ballista" }, { ja: "投石機", en: "catapult" }, { ja: "トレビュシェット", en: "trebuchet" }, { ja: "破城槌", en: "battering ram" }, { ja: "攻城塔", en: "siege tower" }, { ja: "移動式盾", en: "mantlet" }, { ja: "火炎投射器（古代）", en: "ancient flamethrower" }, { ja: "投槍機", en: "scorpion siege weapon" }] },
    "⚔️ 武器・兵器 / 各種武器 / 魔法・儀式・特殊": { isTarget: true, items: [{ ja: "魔法の杖", en: "magic staff" }, { ja: "王権の杖", en: "scepter weapon" }, { ja: "骨の武器", en: "bone weapon" }, { ja: "結晶剣", en: "crystal blade" }, { ja: "黒曜石の刃", en: "obsidian blade" }, { ja: "有機的武器", en: "organic weapon" }] },
    "⚔️ 武器・兵器 / 各種武器 / 忍具・格闘武器": { isTarget: true, items: [{ ja: "手裏剣", en: "shuriken" }, { ja: "クナイ", en: "kunai" }, { ja: "鎖鎌", en: "kusarigama" }, { ja: "サイ", en: "sai" }, { ja: "ヌンチャク", en: "nunchaku" }] },
    "⚔️ 武器・兵器 / 武器の外観・状態 / 外観・状態タグ": { isTarget: true, items: [{ ja: "新品の武器", en: "brand-new weapon" }, { ja: "使い込まれた武器", en: "well-worn weapon" }, { ja: "古びた武器", en: "old weapon" }, { ja: "錆びた武器", en: "rusty weapon" }, { ja: "破損した武器", en: "damaged weapon" }, { ja: "折れた武器", en: "broken weapon" }, { ja: "修理された武器", en: "repaired weapon" }, { ja: "欠けた刃", en: "chipped blade" }, { ja: "刃こぼれした武器", en: "dulled blade" }, { ja: "装飾過多の武器", en: "ornate weapon" }, { ja: "彫刻入りの武器", en: "engraved weapon" }, { ja: "宝石装飾の武器", en: "jeweled weapon" }, { ja: "金装飾の武器", en: "gold-trimmed weapon" }, { ja: "銀装飾の武器", en: "silver-inlaid weapon" }, { ja: "豪華な柄の武器", en: "luxurious hilt" }, { ja: "精巧な武器", en: "finely crafted weapon" }, { ja: "古代の武器", en: "ancient weapon" }, { ja: "伝説の武器", en: "legendary weapon" }, { ja: "王家の武器", en: "royal weapon" }, { ja: "儀式用の武器", en: "ceremonial weapon" }, { ja: "聖なる武器", en: "sacred weapon" }, { ja: "呪われた武器", en: "cursed weapon" }, { ja: "禁断の武器", en: "forbidden weapon" }, { ja: "炎を帯びた武器", en: "flaming weapon" }, { ja: "氷属性の武器", en: "ice-infused weapon" }, { ja: "雷属性の武器", en: "lightning-infused weapon" }, { ja: "闇の武器", en: "dark weapon" }, { ja: "光の武器", en: "holy weapon" }, { ja: "エネルギー武器", en: "energy weapon" }, { ja: "発光する武器", en: "glowing weapon" }, { ja: "血痕のある武器", en: "bloodstained weapon" }, { ja: "煤けた武器", en: "soot-covered weapon" }, { ja: "焦げ跡のある武器", en: "scorched weapon" }, { ja: "戦場で汚れた武器", en: "battle-worn weapon" }] },
    "🍱 食べ物・飲み物 / 🌍 世界観別フード / 🍞 日常食": { icon: "🍞", items: [{ ja: "食パン", en: "sliced bread" }, { ja: "トースト", en: "toast" }, { ja: "バゲット", en: "baguette" }, { ja: "クロワッサン", en: "croissant" }, { ja: "ベーグル", en: "bagel" }, { ja: "サンドイッチ", en: "sandwich" }, { ja: "ハムサンド", en: "ham sandwich" }, { ja: "卵サンド", en: "egg sandwich" }, { ja: "サラダ", en: "salad" }, { ja: "シーザーサラダ", en: "caesar salad" }, { ja: "スープ", en: "soup" }, { ja: "野菜スープ", en: "vegetable soup" }, { ja: "チキンスープ", en: "chicken soup" }, { ja: "クラムチャウダー", en: "clam chowder" }, { ja: "シチュー", en: "stew" }, { ja: "カレーライス", en: "curry rice" }, { ja: "オムレツ", en: "omelet" }, { ja: "スクランブルエッグ", en: "scrambled eggs" }, { ja: "目玉焼き", en: "fried egg" }, { ja: "ベーコン", en: "bacon" }, { ja: "ソーセージ", en: "sausage" }, { ja: "ポテトサラダ", en: "potato salad" }, { ja: "フルーツ盛り合わせ", en: "fruit platter" }, { ja: "フルーツサラダ", en: "fruit salad" }, { ja: "リンゴ", en: "apple" }, { ja: "バナナ", en: "banana" }, { ja: "オレンジ", en: "orange" }, { ja: "ぶどう", en: "grapes" }, { ja: "いちご", en: "strawberries" }, { ja: "ヨーグルト", en: "yogurt" }, { ja: "シリアル", en: "cereal" }, { ja: "グラノーラ", en: "granola" }, { ja: "パンケーキ", en: "pancakes" }, { ja: "ワッフル", en: "waffles" }, { ja: "マフィン", en: "muffin" }, { ja: "クッキー", en: "cookies" }, { ja: "チョコレート", en: "chocolate" }, { ja: "お弁当", en: "bento lunch" }, { ja: "ランチボックス", en: "lunch box" }, { ja: "おにぎり弁当", en: "onigiri bento" }, { ja: "ポテトフライ", en: "french fries" }, { ja: "コロッケ", en: "croquette" }, { ja: "ハンバーグ", en: "hamburger steak" }, { ja: "ピザトースト", en: "pizza toast" }] },
    "🍱 食べ物・飲み物 / 🌍 世界観別フード / 🧪 ファンタジー食": { icon: "🧪", items: [{ ja: "魔獣肉", en: "magical beast meat" }, { ja: "妖精果実", en: "fairy fruit" }, { ja: "エルフパン", en: "elf bread" }, { ja: "ドワーフシチュー", en: "dwarf stew" }, { ja: "魔導チーズ", en: "arcane cheese" }, { ja: "古代穀物", en: "ancient grain" }, { ja: "聖樹の実", en: "sacred tree fruit" }, { ja: "幻獣卵", en: "mythic beast egg" }, { ja: "魔力茸", en: "mana mushroom" }, { ja: "錬金スープ", en: "alchemy soup" }, { ja: "星屑砂糖", en: "stardust sugar" }, { ja: "月光蜂蜜", en: "moonlight honey" }, { ja: "深海藻", en: "abyssal seaweed" }, { ja: "霊泉水", en: "spirit spring water" }, { ja: "魔法スープ", en: "magical soup" }, { ja: "謎肉", en: "mystery meat" }, { ja: "発光果実", en: "glowing fruit" }, { ja: "錬金パン", en: "alchemy bread" }, { ja: "魔力飴", en: "mana candy" }, { ja: "スライムゼリー", en: "slime jelly" }, { ja: "竜肉", en: "dragon meat" }, { ja: "フェニックス卵", en: "phoenix egg" }, { ja: "妖精蜜", en: "fairy honey" }, { ja: "エルフワイン", en: "elf wine" }, { ja: "ドワーフエール", en: "dwarf ale" }, { ja: "ポーション", en: "potion" }, { ja: "エリクサー", en: "elixir" }, { ja: "マナポーション", en: "mana potion" }, { ja: "回復薬", en: "healing potion" }, { ja: "強化薬", en: "strength potion" }, { ja: "解毒薬", en: "antidote" }, { ja: "魔素水", en: "mana water" }, { ja: "錬金チーズ", en: "alchemy cheese" }, { ja: "魔導ビスケット", en: "arcane biscuit" }, { ja: "ルーンパン", en: "rune bread" }, { ja: "魔石糖", en: "mana crystal sugar" }, { ja: "星屑塩", en: "stardust salt" }, { ja: "月光砂糖", en: "moonlight sugar" }, { ja: "火竜香辛料", en: "fire dragon spice" }, { ja: "氷竜香辛料", en: "ice dragon spice" }, { ja: "ゴブリンシチュー", en: "goblin stew" }, { ja: "オークソーセージ", en: "orc sausage" }, { ja: "グリフォンステーキ", en: "griffin steak" }, { ja: "クラーケン干物", en: "kraken jerky" }, { ja: "ユニコーンミルク", en: "unicorn milk" }, { ja: "マンドラゴラ根", en: "mandrake root" }, { ja: "エーテル茶", en: "aether tea" }, { ja: "霊薬", en: "spirit elixir" }, { ja: "聖餐パン", en: "sacrament bread" }, { ja: "悪魔香辛料", en: "demon spice" }, { ja: "魔界チョコ", en: "nether chocolate" }, { ja: "古代米", en: "ancient rice" }, { ja: "結晶果実", en: "crystal fruit" }, { ja: "幻獣バター", en: "chimera butter" }] },
    "🍱 食べ物・飲み物 / 🌍 世界観別フード / 🚀 SF・未来食": { icon: "🚀", items: [{ ja: "合成肉", en: "synthetic meat" }, { ja: "培養肉", en: "cultured meat" }, { ja: "栄養ブロック", en: "nutrition block" }, { ja: "完全食", en: "complete meal" }, { ja: "ナノフード", en: "nano food" }, { ja: "分子料理", en: "molecular cuisine" }, { ja: "宇宙食", en: "space food" }, { ja: "凍結乾燥食", en: "freeze-dried food" }, { ja: "カプセル食", en: "capsule food" }, { ja: "ゲル食", en: "gel food" }, { ja: "ペースト食", en: "paste food" }, { ja: "高密度栄養食", en: "high-density ration" }, { ja: "量子スナック", en: "quantum snack" }, { ja: "バイオスープ", en: "bio soup" }, { ja: "人工果実", en: "artificial fruit" }, { ja: "合成果汁", en: "synthetic juice" }, { ja: "プロテインペレット", en: "protein pellets" }, { ja: "エネルギーバー", en: "energy bar" }, { ja: "冷凍栄養食", en: "frozen ration" }] },
    "🍱 食べ物・飲み物 / 🌍 世界観別フード / 🪖 戦場・終末食": { icon: "🪖", items: [{ ja: "干し肉", en: "dried meat" }, { ja: "塩漬け肉", en: "salted meat" }, { ja: "黒パン", en: "dark bread" }, { ja: "乾燥パン", en: "dried bread" }, { ja: "クラッカー", en: "hard cracker" }, { ja: "乾燥チーズ", en: "dried cheese" }, { ja: "ナッツ", en: "nuts" }, { ja: "豆類", en: "dried beans" }, { ja: "スープ粉末", en: "soup powder" }, { ja: "乾燥スープ", en: "dried soup" }, { ja: "簡易シチュー", en: "simple stew" }, { ja: "軍用レーション", en: "military ration" }, { ja: "保存食", en: "preserved food" }, { ja: "乾パン", en: "hardtack" }, { ja: "缶詰", en: "canned food" }, { ja: "乾燥肉", en: "dried meat" }, { ja: "燻製肉", en: "smoked meat" }, { ja: "携行食", en: "field ration" }, { ja: "非常食", en: "emergency food" }, { ja: "代用食", en: "substitute food" }, { ja: "合成食", en: "synthetic ration" }, { ja: "高栄養食", en: "high-nutrition ration" }, { ja: "粉末食", en: "powdered food" }, { ja: "圧縮食", en: "compressed food" }, { ja: "栄養ペースト", en: "nutrition paste" }, { ja: "放射線食", en: "irradiated food" }, { ja: "汚染食", en: "contaminated food" }, { ja: "終末スープ", en: "apocalypse soup" }, { ja: "地下農産物", en: "underground produce" }, { ja: "菌類食", en: "fungal food" }, { ja: "再生食", en: "recycled food" }] },
    "🍱 食べ物・飲み物 / 🍴 料理・ジャンル別 / 🍜 和食": { icon: "🍜", items: [{ ja: "ご飯", en: "steamed rice" }, { ja: "おにぎり", en: "rice ball" }, { ja: "おにぎり（海苔あり）", en: "triangular onigiri wrapped with nori seaweed, visible nori seaweed wrap", foodSizeMode: "unit", foodDecorationDisabled: true }, { ja: "お茶漬け", en: "ochazuke" }, { ja: "卵かけご飯", en: "rice with raw egg" }, { ja: "ラーメン", en: "ramen" }, { ja: "うどん", en: "udon noodles" }, { ja: "そば", en: "soba noodles" }, { ja: "焼きそば", en: "yakisoba" }, { ja: "寿司", en: "sushi" }, { ja: "刺身", en: "sashimi" }, { ja: "海鮮丼", en: "seafood rice bowl" }, { ja: "天ぷら", en: "tempura" }, { ja: "唐揚げ", en: "fried chicken karaage" }, { ja: "焼き鳥", en: "yakitori" }, { ja: "おでん", en: "oden" }, { ja: "味噌汁", en: "miso soup" }, { ja: "豚汁", en: "pork miso soup" }, { ja: "団子", en: "dango" }, { ja: "大福", en: "daifuku mochi" }, { ja: "たい焼き", en: "taiyaki" }] },
    "🍱 食べ物・飲み物 / 🍴 料理・ジャンル別 / 🍖 洋食": { icon: "🍖", items: [{ ja: "ステーキ", en: "steak" }, { ja: "ハンバーガー", en: "hamburger" }, { ja: "ホットドッグ", en: "hot dog" }, { ja: "ローストビーフ", en: "roast beef" }, { ja: "グリルチキン", en: "grilled chicken" }, { ja: "ビーフシチュー", en: "beef stew" }, { ja: "シーフードグラタン", en: "seafood gratin" }, { ja: "ラザニア", en: "lasagna" }, { ja: "スパゲッティ", en: "spaghetti" }, { ja: "カルボナーラ", en: "carbonara" }, { ja: "ミートソース", en: "meat sauce pasta" }, { ja: "ピザ", en: "pizza" }, { ja: "マルゲリータ", en: "margherita pizza" }, { ja: "リゾット", en: "risotto" }, { ja: "オムライス", en: "omelette rice" }, { ja: "ドリア", en: "doria" }, { ja: "グリルソーセージ", en: "grilled sausage" }, { ja: "ポークチョップ", en: "pork chop" }, { ja: "チキンカツ", en: "chicken cutlet" }, { ja: "ビーフカツ", en: "beef cutlet" }, { ja: "えびフライ", en: "fried shrimp" }, { ja: "アジフライ", en: "fried horse mackerel" }, { ja: "白身魚フライ", en: "fried white fish" }, { ja: "カキフライ", en: "fried oyster" }, { ja: "イカフライ", en: "fried squid" }, { ja: "ホタテフライ", en: "fried scallop" }, { ja: "チキンフライ", en: "fried chicken cutlet" }, { ja: "ポークフライ", en: "fried pork cutlet" }, { ja: "ビーフフライ", en: "fried beef cutlet" }] },
    "🍱 食べ物・飲み物 / 🍴 料理・ジャンル別 / 🥟 中華": { icon: "🥟", items: [{ ja: "麻婆豆腐", en: "mapo tofu" }, { ja: "酢豚", en: "sweet and sour pork" }, { ja: "回鍋肉", en: "twice-cooked pork" }, { ja: "青椒肉絲", en: "stir-fried pork with green pepper" }, { ja: "八宝菜", en: "mixed vegetables stir-fry" }, { ja: "餃子", en: "dumplings" }, { ja: "焼売", en: "shumai" }, { ja: "小籠包", en: "xiaolongbao" }, { ja: "春巻き", en: "spring rolls" }, { ja: "肉まん", en: "steamed pork bun" }, { ja: "あんまん", en: "steamed sweet bean bun" }, { ja: "中華粥", en: "rice porridge" }, { ja: "チャーハン", en: "fried rice" }, { ja: "天津飯", en: "tenshinhan" }, { ja: "中華そば", en: "chinese noodles" }, { ja: "担々麺", en: "tantanmen" }, { ja: "酸辣湯", en: "hot and sour soup" }, { ja: "杏仁豆腐", en: "almond tofu" }, { ja: "ごま団子", en: "sesame balls" }] },
    "🍱 食べ物・飲み物 / 🍴 料理・ジャンル別 / 🍔 ジャンクフード": { icon: "🍔", items: [{ ja: "フライドポテト", en: "french fries" }, { ja: "ナゲット", en: "chicken nuggets" }, { ja: "オニオンリング", en: "onion rings" }, { ja: "チリドッグ", en: "chili dog" }, { ja: "チーズバーガー", en: "cheeseburger" }, { ja: "ベーコンバーガー", en: "bacon burger" }, { ja: "フィッシュバーガー", en: "fish burger" }, { ja: "ピザスライス", en: "pizza slice" }, { ja: "タコス", en: "tacos" }, { ja: "ブリトー", en: "burrito" }, { ja: "ケサディーヤ", en: "quesadilla" }, { ja: "ポテトチップス", en: "potato chips" }, { ja: "コーンチップス", en: "corn chips" }, { ja: "チーズナチョス", en: "cheese nachos" }, { ja: "ホットサンド", en: "hot sandwich" }, { ja: "ミートパイ", en: "meat pie" }, { ja: "ソーセージロール", en: "sausage roll" }, { ja: "フライドチキン", en: "fried chicken" }, { ja: "ポップコーン", en: "popcorn" }] },
    "🍱 食べ物・飲み物 / 🍽 提供スタイル・場面別 / 🏮 屋台・食べ歩き": { icon: "🏮", items: [] },
    "🍱 食べ物・飲み物 / 🍽 提供スタイル・場面別 / 🏮 屋台・食べ歩き / 🎐 祭り屋台": { icon: "🎐", items: [{ ja: "たこ焼き", en: "takoyaki" }, { ja: "お好み焼き", en: "okonomiyaki" }, { ja: "焼きそば", en: "yakisoba" }, { ja: "フランクフルト", en: "frankfurter" }, { ja: "肉まん", en: "steamed meat bun" }, { ja: "串焼き", en: "skewered meat" }, { ja: "焼き鳥", en: "yakitori" }, { ja: "串魚", en: "grilled fish skewer" }] },
    "🍱 食べ物・飲み物 / 🍽 提供スタイル・場面別 / 🏮 屋台・食べ歩き / 🥡 街角スナック": { icon: "🥡", items: [{ ja: "クレープ", en: "street crepe" }, { ja: "ホットスナック", en: "hot snack" }, { ja: "ポテトフライ", en: "french fries" }, { ja: "ソーセージ", en: "sausage" }, { ja: "ホットドッグ", en: "hot dog" }, { ja: "チュロス", en: "churros" }, { ja: "ケバブサンド", en: "kebab sandwich" }, { ja: "ピザスライス", en: "pizza slice" }] },
    "🍱 食べ物・飲み物 / 🍽 提供スタイル・場面別 / 🏮 屋台・食べ歩き / 🍡 夜店甘味": { icon: "🍡", items: [{ ja: "りんご飴", en: "candied apple" }, { ja: "チョコバナナ", en: "chocolate banana" }, { ja: "串団子", en: "dango skewer" }, { ja: "たい焼き", en: "taiyaki" }, { ja: "ベビーカステラ", en: "baby castella" }, { ja: "わたあめ", en: "cotton candy" }, { ja: "あんず飴", en: "candied apricot" }, { ja: "冷やしパイン", en: "chilled pineapple" }] },
    "🍱 食べ物・飲み物 / 🍽 提供スタイル・場面別 / 🏠 家庭料理": { icon: "🏠", items: [] },
    "🍱 食べ物・飲み物 / 🍽 提供スタイル・場面別 / 🏠 家庭料理 / 🍚 和の食卓": { icon: "🍚", items: [{ ja: "肉じゃが", en: "nikujaga" }, { ja: "焼き魚", en: "grilled fish" }, { ja: "煮魚", en: "simmered fish" }, { ja: "卵焼き", en: "rolled omelet" }, { ja: "味噌汁", en: "miso soup" }, { ja: "豚汁", en: "pork miso soup" }, { ja: "きんぴらごぼう", en: "kinpira gobo" }, { ja: "ほうれん草のおひたし", en: "boiled spinach side dish" }] },
    "🍱 食べ物・飲み物 / 🍽 提供スタイル・場面別 / 🏠 家庭料理 / 🍲 洋の家庭皿": { icon: "🍲", items: [{ ja: "家庭カレー", en: "homestyle curry" }, { ja: "シチュー", en: "stew" }, { ja: "ポトフ", en: "pot-au-feu" }, { ja: "ハンバーグ", en: "hamburger steak" }, { ja: "オムレツ", en: "omelet" }, { ja: "サラダボウル", en: "salad bowl" }, { ja: "パンとスープ", en: "bread and soup" }, { ja: "グラタン", en: "gratin" }] },
    "🍱 食べ物・飲み物 / 🍽 提供スタイル・場面別 / 🏠 家庭料理 / 🍱 弁当・軽食": { icon: "🍱", items: [] },
    "🍱 食べ物・飲み物 / 🍽 提供スタイル・場面別 / 🏠 家庭料理 / 🍱 弁当・軽食 / 🍙 和弁当": { icon: "🍙", items: [{ ja: "おにぎり弁当", en: "onigiri bento" }, { ja: "のり弁", en: "nori bento" }, { ja: "唐揚げ弁当", en: "fried chicken bento" }, { ja: "手作り弁当", en: "homemade bento" }, { ja: "幕の内弁当", en: "makunouchi bento" }, { ja: "鮭弁当", en: "salmon bento" }, { ja: "おにぎりセット", en: "rice ball set" }, { ja: "焼き魚弁当", en: "grilled fish bento" }] },
    "🍱 食べ物・飲み物 / 🍽 提供スタイル・場面別 / 🏠 家庭料理 / 🍱 弁当・軽食 / 🥪 洋軽食": { icon: "🥪", items: [{ ja: "ランチボックス", en: "lunch box" }, { ja: "サンドイッチ弁当", en: "sandwich lunch box" }, { ja: "トーストプレート", en: "toast plate" }, { ja: "クロワッサンサンド", en: "croissant sandwich" }, { ja: "ベーグルサンド", en: "bagel sandwich" }, { ja: "ホットサンド", en: "hot sandwich" }, { ja: "キッシュプレート", en: "quiche plate" }, { ja: "サラダランチ", en: "salad lunch" }] },
    "🍱 食べ物・飲み物 / 🍽 提供スタイル・場面別 / 🏠 家庭料理 / 🍱 弁当・軽食 / 🎒 学生ランチ": { icon: "🎒", items: [{ ja: "学生弁当", en: "student lunch box" }, { ja: "学食ランチ", en: "school cafeteria lunch" }, { ja: "部活後のおにぎり", en: "after-club rice ball" }, { ja: "購買パン", en: "school store bread" }, { ja: "紙パックジュース付き弁当", en: "lunch box with juice carton" }, { ja: "ミニサンドセット", en: "mini sandwich set" }, { ja: "通学ランチボックス", en: "school lunch box" }, { ja: "軽食セット", en: "light meal set" }] },
    "🍱 食べ物・飲み物 / 🍽 提供スタイル・場面別 / 🥂 パーティー・祝宴": { icon: "🥂", items: [] },
    "🍱 食べ物・飲み物 / 🍽 提供スタイル・場面別 / 🥂 パーティー・祝宴 / 🫒 前菜・軽食": { icon: "🫒", items: [{ ja: "オードブル盛り", en: "hors d'oeuvres platter" }, { ja: "フィンガーフード", en: "finger food" }, { ja: "チーズ盛り合わせ", en: "cheese platter" }, { ja: "生ハム盛り", en: "prosciutto platter" }, { ja: "カナッペ", en: "canape" }, { ja: "クラッカー盛り", en: "cracker platter" }, { ja: "ディップソース盛り", en: "dip sauce platter" }, { ja: "前菜プレート", en: "appetizer plate" }] },
    "🍱 食べ物・飲み物 / 🍽 提供スタイル・場面別 / 🥂 パーティー・祝宴 / 🍖 メイン盛り": { icon: "🍖", items: [{ ja: "ローストチキン", en: "roast chicken" }, { ja: "ローストビーフ", en: "roast beef" }, { ja: "ごちそうプレート", en: "feast platter" }, { ja: "パーティーピザ", en: "party pizza" }, { ja: "祝宴料理", en: "banquet dish" }, { ja: "ミートローフ", en: "meatloaf" }, { ja: "グリルプレート", en: "grilled platter" }, { ja: "シーフードプラッター", en: "seafood platter" }] },
    "🍱 食べ物・飲み物 / 🍽 提供スタイル・場面別 / 🥂 パーティー・祝宴 / 🎂 祝祭スイーツ": { icon: "🎂", items: [{ ja: "ホールケーキ", en: "whole cake" }, { ja: "フルーツタルト", en: "fruit tart" }, { ja: "マカロンタワー", en: "macaron tower" }, { ja: "カップケーキスタンド", en: "cupcake stand" }, { ja: "デザートプレート", en: "dessert plate" }, { ja: "チョコレートファウンテン", en: "chocolate fountain" }, { ja: "祝い菓子", en: "celebration sweets" }, { ja: "キャンディビュッフェ", en: "candy buffet" }] },
    "🍱 食べ物・飲み物 / 🍽 提供スタイル・場面別 / 🍺 酒場・居酒屋": { icon: "🍺", items: [] },
    "🍱 食べ物・飲み物 / 🍽 提供スタイル・場面別 / 🍺 酒場・居酒屋 / 🍢 和風つまみ": { icon: "🍢", items: [{ ja: "煮込み", en: "stew" }, { ja: "おでん", en: "oden" }, { ja: "枝豆", en: "edamame" }, { ja: "冷ややっこ", en: "chilled tofu" }, { ja: "焼き鳥盛り", en: "yakitori platter" }, { ja: "だし巻き卵", en: "dashimaki tamago" }, { ja: "たこわさ", en: "octopus with wasabi" }, { ja: "ししゃも", en: "smelt" }, { ja: "漬物盛り", en: "pickle platter" }] },
    "🍱 食べ物・飲み物 / 🍽 提供スタイル・場面別 / 🍺 酒場・居酒屋 / 🧀 洋風バルつまみ": { icon: "🧀", items: [{ ja: "チーズ盛り", en: "cheese board" }, { ja: "ナッツ盛り", en: "assorted nuts" }, { ja: "ポテトフライ盛り", en: "fries platter" }, { ja: "生ハム盛り", en: "prosciutto platter" }, { ja: "オリーブ盛り", en: "olive platter" }, { ja: "ブルスケッタ", en: "bruschetta" }, { ja: "アヒージョ", en: "ajillo" }, { ja: "ソーセージ盛り", en: "sausage platter" }] },
    "🍱 食べ物・飲み物 / 🍽 提供スタイル・場面別 / 🍺 酒場・居酒屋 / 🍖 豪快肉盛り": { icon: "🍖", items: [{ ja: "唐揚げ盛り", en: "karaage platter" }, { ja: "ロースト肉", en: "roasted meat" }, { ja: "干し肉", en: "dried meat" }, { ja: "スペアリブ", en: "spare ribs" }, { ja: "骨付き肉", en: "bone-in meat" }, { ja: "グリルソーセージ", en: "grilled sausage" }, { ja: "厚切りベーコン", en: "thick-cut bacon" }, { ja: "肉盛りプレート", en: "meat platter" }] },
    "🍱 食べ物・飲み物 / 🍴 料理・ジャンル別 / 🍰 デザート": { icon: "🍰", items: [{ ja: "ジェラート", en: "gelato" }, { ja: "フローズンヨーグルト", en: "frozen yogurt" }, { ja: "アイスキャンディー", en: "ice pop" }, { ja: "アイスバー", en: "ice bar" }, { ja: "アイスサンド", en: "ice cream sandwich" }, { ja: "かき氷", en: "shaved ice" }, { ja: "フローズンフルーツ", en: "frozen fruit" }, { ja: "グラニテ", en: "granita" }, { ja: "セミフレッド", en: "semifreddo" }, { ja: "フローズンケーキ", en: "frozen cake" }, { ja: "アイスモナカ", en: "ice cream monaka" }, { ja: "フローズンカスタード", en: "frozen custard" }, { ja: "フローズンムース", en: "frozen mousse" }, { ja: "羊羹", en: "yokan" }, { ja: "水羊羹", en: "mizu yokan" }, { ja: "最中", en: "monaka" }, { ja: "大福", en: "daifuku" }, { ja: "いちご大福", en: "strawberry daifuku" }, { ja: "柏餅", en: "kashiwa mochi" }, { ja: "草餅", en: "kusa mochi" }, { ja: "わらび餅", en: "warabi mochi" }, { ja: "ういろう", en: "uiro" }, { ja: "きんつば", en: "kintsuba" }, { ja: "練り切り", en: "nerikiri" }, { ja: "落雁", en: "rakugan" }, { ja: "饅頭", en: "manju" }, { ja: "桜餅", en: "sakura mochi" }, { ja: "ショートケーキ", en: "shortcake" }, { ja: "チョコレートケーキ", en: "chocolate cake" }, { ja: "チーズケーキ", en: "cheesecake" }, { ja: "モンブラン", en: "mont blanc" }, { ja: "ロールケーキ", en: "roll cake" }, { ja: "パンケーキ", en: "pancakes" }, { ja: "ワッフル", en: "waffles" }, { ja: "ドーナツ", en: "donuts" }, { ja: "マカロン", en: "macarons" }, { ja: "シュークリーム", en: "cream puff" }, { ja: "プリン", en: "pudding" }, { ja: "ティラミス", en: "tiramisu" }, { ja: "ババロア", en: "bavarois" }, { ja: "ムース", en: "mousse" }, { ja: "ゼリー", en: "jelly" }, { ja: "フルーツタルト", en: "fruit tart" }, { ja: "アップルパイ", en: "apple pie" }, { ja: "チェリーパイ", en: "cherry pie" }, { ja: "ブラウニー", en: "brownie" }, { ja: "クッキー", en: "cookies" }, { ja: "アイスクリーム", en: "ice cream" }, { ja: "ソフトクリーム", en: "soft serve" }, { ja: "シャーベット", en: "sorbet" }, { ja: "パフェ", en: "parfait" }, { ja: "あんみつ", en: "anmitsu" }, { ja: "たい焼き", en: "taiyaki" }, { ja: "どら焼き", en: "dorayaki" }] },
    "🍱 食べ物・飲み物 / 🥤 飲み物 / カフェ・甘味": { icon: "☕", items: [{ ja: "カフェラテ", en: "caffe latte" }, { ja: "カプチーノ", en: "cappuccino" }, { ja: "エスプレッソ", en: "espresso" }, { ja: "アメリカーノ", en: "americano" }, { ja: "カフェモカ", en: "cafe mocha" }, { ja: "キャラメルラテ", en: "caramel latte" }, { ja: "バニララテ", en: "vanilla latte" }, { ja: "抹茶ラテ", en: "matcha latte" }, { ja: "チャイ", en: "chai" }, { ja: "ミルクティー", en: "milk tea" }, { ja: "タピオカミルクティー", en: "bubble milk tea" }, { ja: "ココア", en: "cocoa" }, { ja: "ホットチョコレート", en: "hot chocolate" }, { ja: "フラッペ", en: "frappe" }, { ja: "シェイク", en: "milkshake" }, { ja: "スムージー", en: "smoothie" }, { ja: "フルーツスムージー", en: "fruit smoothie" }, { ja: "ヨーグルトドリンク", en: "yogurt drink" }, { ja: "フロート", en: "float" }, { ja: "コーラフロート", en: "cola float" }, { ja: "クリームソーダ", en: "cream soda" }] },
    "🍱 食べ物・飲み物 / 🌍 国・地域別料理 / 🇰🇷 韓国料理": { icon: "🇰🇷", items: [{ ja: "キムチ", en: "kimchi" }, { ja: "ビビンバ", en: "bibimbap" }, { ja: "プルコギ", en: "bulgogi" }, { ja: "ヤンニョムチキン", en: "yangnyeom chicken" }, { ja: "チーズタッカルビ", en: "cheese dakgalbi" }, { ja: "トッポッキ", en: "tteokbokki" }, { ja: "キンパ", en: "gimbap" }, { ja: "サムギョプサル", en: "samgyeopsal" }, { ja: "スンドゥブ", en: "sundubu jjigae" }, { ja: "冷麺", en: "naengmyeon" }, { ja: "韓国チキン", en: "korean fried chicken" }, { ja: "チヂミ", en: "korean pancake" }, { ja: "チャプチェ", en: "japchae" }, { ja: "ソルロンタン", en: "seolleongtang" }] },
    "🍱 食べ物・飲み物 / 🌍 国・地域別料理 / 🌶️ 東南アジア料理": { icon: "🌶️", items: [{ ja: "ガパオライス", en: "gapao rice" }, { ja: "パッタイ", en: "pad thai" }, { ja: "トムヤムクン", en: "tom yum goong" }, { ja: "カオマンガイ", en: "khao man gai" }, { ja: "グリーンカレー", en: "green curry" }, { ja: "フォー", en: "pho" }, { ja: "生春巻き", en: "fresh spring rolls" }, { ja: "バインミー", en: "banh mi" }, { ja: "ナシゴレン", en: "nasi goreng" }, { ja: "サテ", en: "satay" }, { ja: "ミーゴレン", en: "mie goreng" }, { ja: "ルンダン", en: "rendang" }, { ja: "海南チキンライス", en: "hainanese chicken rice" }, { ja: "ラクサ", en: "laksa" }] },
    "🍱 食べ物・飲み物 / 🌍 国・地域別料理 / 🇮🇹 イタリア料理": { icon: "🇮🇹", items: [{ ja: "マルゲリータ", en: "margherita pizza" }, { ja: "カルボナーラ", en: "carbonara" }, { ja: "ボロネーゼ", en: "bolognese pasta" }, { ja: "ペペロンチーノ", en: "peperoncino" }, { ja: "リゾット", en: "risotto" }, { ja: "ラザニア", en: "lasagna" }, { ja: "カプレーゼ", en: "caprese" }, { ja: "ミネストローネ", en: "minestrone" }, { ja: "ティラミス", en: "tiramisu" }, { ja: "パンナコッタ", en: "panna cotta" }] },
    "🍱 食べ物・飲み物 / 🌍 国・地域別料理 / 🇫🇷 フランス料理": { icon: "🇫🇷", items: [{ ja: "オムレツ", en: "omelet" }, { ja: "キッシュ", en: "quiche" }, { ja: "ラタトゥイユ", en: "ratatouille" }, { ja: "ポトフ", en: "pot-au-feu" }, { ja: "ブイヤベース", en: "bouillabaisse" }, { ja: "ガレット", en: "galette" }, { ja: "クロックムッシュ", en: "croque monsieur" }, { ja: "コンフィ", en: "confit" }, { ja: "マカロン", en: "macaron" }, { ja: "クレームブリュレ", en: "creme brulee" }, { ja: "ローストビーフ", en: "roast beef" }, { ja: "グラタン", en: "gratin" }, { ja: "エスカルゴ", en: "escargot" }, { ja: "クレープ", en: "crepe" }] },
    "🍱 食べ物・飲み物 / 🌍 国・地域別料理 / 🇲🇽 メキシコ料理": { icon: "🇲🇽", items: [{ ja: "タコス", en: "tacos" }, { ja: "ブリトー", en: "burrito" }, { ja: "ナチョス", en: "nachos" }, { ja: "ケサディーヤ", en: "quesadilla" }, { ja: "エンチラーダ", en: "enchilada" }, { ja: "ファヒータ", en: "fajita" }, { ja: "ワカモレ", en: "guacamole" }, { ja: "チリコンカン", en: "chili con carne" }, { ja: "トルティーヤチップス", en: "tortilla chips" }, { ja: "メキシカンライス", en: "mexican rice" }, { ja: "トルティーヤ", en: "tortilla" }, { ja: "タコライス", en: "taco rice" }, { ja: "サルサソース", en: "salsa" }, { ja: "チミチャンガ", en: "chimichanga" }] },
    "🍱 食べ物・飲み物 / 🌍 国・地域別料理 / 🇮🇳 インド料理": { icon: "🇮🇳", items: [{ ja: "バターチキンカレー", en: "butter chicken curry" }, { ja: "キーマカレー", en: "keema curry" }, { ja: "ほうれん草カレー", en: "saag curry" }, { ja: "ビリヤニ", en: "biryani" }, { ja: "タンドリーチキン", en: "tandoori chicken" }, { ja: "ナン", en: "naan" }, { ja: "サモサ", en: "samosa" }, { ja: "チャイ", en: "chai" }, { ja: "ラッシー", en: "lassi" }, { ja: "パニール料理", en: "paneer dish" }, { ja: "チーズナン", en: "cheese naan" }, { ja: "ドーサ", en: "dosa" }, { ja: "タンドール料理", en: "tandoor dish" }, { ja: "マサラティー", en: "masala tea" }] },
    "🍱 食べ物・飲み物 / 🌍 国・地域別料理 / 🥙 中東・トルコ料理": { icon: "🥙", items: [{ ja: "ケバブ", en: "kebab" }, { ja: "ドネルケバブ", en: "doner kebab" }, { ja: "シャワルマ", en: "shawarma" }, { ja: "ファラフェル", en: "falafel" }, { ja: "フムス", en: "hummus" }, { ja: "ピタパン", en: "pita bread" }, { ja: "バクラヴァ", en: "baklava" }, { ja: "レンズ豆スープ", en: "lentil soup" }, { ja: "グリルラム", en: "grilled lamb" }, { ja: "トルコアイス", en: "turkish ice cream" }] },
    "🍱 食べ物・飲み物 / 🌍 国・地域別料理 / 🫒 地中海料理": { icon: "🫒", items: [{ ja: "パエリア", en: "paella" }, { ja: "アヒージョ", en: "ajillo" }, { ja: "シーフードマリネ", en: "seafood marinade" }, { ja: "オリーブ盛り", en: "assorted olives" }, { ja: "グリル魚介", en: "grilled seafood" }, { ja: "ムサカ", en: "moussaka" }, { ja: "ギリシャサラダ", en: "greek salad" }, { ja: "タプナード", en: "tapenade" }, { ja: "ロースト野菜", en: "roasted vegetables" }, { ja: "レモンハーブチキン", en: "lemon herb chicken" }] },
    "🍱 食べ物・飲み物 / 🥤 飲み物 / 🥤 ソフトドリンク": { icon: "🥤", items: [{ ja: "コーラ", en: "cola" }, { ja: "レモンスカッシュ", en: "lemon squash" }, { ja: "ジンジャーエール", en: "ginger ale" }, { ja: "サイダー", en: "soda pop" }, { ja: "オレンジジュース", en: "orange juice" }, { ja: "アップルジュース", en: "apple juice" }, { ja: "グレープジュース", en: "grape juice" }, { ja: "トマトジュース", en: "tomato juice" }, { ja: "野菜ジュース", en: "vegetable juice" }, { ja: "レモネード", en: "lemonade" }, { ja: "アイスティー", en: "iced tea" }, { ja: "ウーロン茶", en: "oolong tea" }, { ja: "緑茶", en: "green tea" }, { ja: "麦茶", en: "barley tea" }, { ja: "ミネラルウォーター", en: "mineral water" }, { ja: "炭酸水", en: "sparkling water" }, { ja: "スポーツドリンク", en: "sports drink" }, { ja: "エナジードリンク", en: "energy drink" }, { ja: "乳酸菌飲料", en: "probiotic drink" }, { ja: "フルーツソーダ", en: "fruit soda" }, { ja: "メロンソーダ", en: "melon soda" }] },
    "🍱 食べ物・飲み物 / 🥤 飲み物 / 🍶 お酒・アルコール": { icon: "🍶", items: [{ ja: "ビール", en: "beer" }, { ja: "黒ビール", en: "stout beer" }, { ja: "クラフトビール", en: "craft beer" }, { ja: "ハイボール", en: "highball" }, { ja: "ウイスキー", en: "whiskey" }, { ja: "ブランデー", en: "brandy" }, { ja: "赤ワイン", en: "red wine" }, { ja: "白ワイン", en: "white wine" }, { ja: "シャンパン", en: "champagne" }, { ja: "ロゼワイン", en: "rose wine" }, { ja: "日本酒", en: "sake" }, { ja: "熱燗", en: "hot sake" }, { ja: "焼酎", en: "shochu" }, { ja: "梅酒", en: "plum wine" }, { ja: "マティーニ", en: "martini" }, { ja: "カクテル", en: "cocktail" }, { ja: "モヒート", en: "mojito" }, { ja: "サングリア", en: "sangria" }, { ja: "リキュール", en: "liqueur" }, { ja: "蜂蜜酒", en: "mead" }, { ja: "エール酒", en: "ale" }] },
    "🍱 食べ物・飲み物 / 🥤 飲み物 / 🥛 容器・ドリンクウェア": { icon: "🥛", items: [{ ja: "グラス", en: "drinking glass" }, { ja: "ロックグラス", en: "rocks glass" }, { ja: "ワイングラス", en: "wine glass" }, { ja: "シャンパングラス", en: "champagne flute" }, { ja: "カクテルグラス", en: "cocktail glass" }, { ja: "ジョッキ", en: "beer mug" }, { ja: "ビールジョッキ", en: "beer stein" }, { ja: "タンブラー", en: "tumbler" }, { ja: "マグカップ", en: "mug" }, { ja: "ティーカップ", en: "teacup" }, { ja: "湯のみ", en: "yunomi cup" }, { ja: "酒瓶", en: "sake bottle" }, { ja: "お猪口", en: "sake cup" }, { ja: "ショットグラス", en: "shot glass" }, { ja: "缶ジュース", en: "drink can" }, { ja: "缶ビール", en: "beer can" }, { ja: "エナジードリンク缶", en: "energy drink can" }, { ja: "ペットボトル", en: "plastic bottle" }, { ja: "ガラスボトル", en: "glass bottle" }, { ja: "水筒", en: "thermos bottle" }, { ja: "フラスコボトル", en: "flask bottle" }, { ja: "ポーション瓶", en: "potion bottle" }, { ja: "試験管ボトル", en: "test tube vial" }, { ja: "ストロー付きカップ", en: "cup with straw" }, { ja: "フロートグラス", en: "float glass" }] },
    "🍱 食べ物・飲み物 / 🥤 飲み物 / 🧪 異世界飲み物": { icon: "🧪", items: [{ ja: "魔力回復ポーション", en: "mana recovery potion" }, { ja: "体力回復ポーション", en: "healing potion" }, { ja: "スタミナドリンク", en: "stamina elixir" }, { ja: "妖精蜜ソーダ", en: "fairy nectar soda" }, { ja: "星屑サイダー", en: "stardust cider" }, { ja: "月光ティー", en: "moonlight tea" }, { ja: "竜血ワイン", en: "dragonblood wine" }, { ja: "聖水", en: "holy water" }, { ja: "呪術の霊薬", en: "cursed elixir" }, { ja: "発光する薬液", en: "glowing tonic" }, { ja: "エーテルドリンク", en: "ether drink" }, { ja: "マナカクテル", en: "mana cocktail" }, { ja: "精霊酒", en: "spirit liquor" }, { ja: "魔導カフェラテ", en: "arcane latte" }, { ja: "錬金炭酸", en: "alchemical soda" }, { ja: "クリスタルジュース", en: "crystal juice" }, { ja: "溶岩エール", en: "lava ale" }, { ja: "氷晶ソーダ", en: "frost crystal soda" }, { ja: "雲海ミルク", en: "sea of clouds milk" }, { ja: "夢見草ティー", en: "dreambloom tea" }, { ja: "銀河フロート", en: "galaxy float" }] },
    "🎸 音楽・趣味・その他 (Hobbies)": { isTarget: true, items: [{ ja: "マイク", en: "microphone" }, { ja: "ギター", en: "guitar" }, { ja: "ベース", en: "bass guitar" }, { ja: "ヴァイオリン", en: "violin" }, { ja: "ドラムスティック", en: "drumsticks" }, { ja: "スケッチブック", en: "sketchbook" }, { ja: "筆/ブラシ", en: "paintbrush" }, { ja: "パレット", en: "palette" }, { ja: "ゲームコントローラー", en: "game controller" }, { ja: "トランプ", en: "playing cards" }, { ja: "タバコ", en: "cigarette" }, { ja: "キセル", en: "kiseru" }] },
    "🤲 アイテムの状態・動作 / 🤝 保持・提示": {
      isAction: true,
      items: [
        { ja: "手に持つ (基本)", en: "holding" },
        { ja: "両手で持つ", en: "holding with both hands" },
        { ja: "握りしめる (強く)", en: "gripping" },
        { ja: "抱きしめる (ハグ)", en: "hugging" },
        { ja: "抱える (腕に)", en: "carrying" },
        { ja: "脇に抱える", en: "tucking under arm" },
        { ja: "肩に担ぐ", en: "carrying on shoulder" },
        { ja: "差し出す", en: "offering" },
        { ja: "見せる", en: "showing" },
        { ja: "掲げる", en: "holding up" },
        { ja: "落とす", en: "dropping" },
        { ja: "拾う", en: "picking up" },
        { ja: "ばら撒く", en: "scattering" },
        { ja: "掴み取る", en: "grabbing" }
      ]
    },
    "🤲 アイテムの状態・動作 / 🛒 運搬・搬出": {
      isAction: true,
      items: [
        { ja: "台車を押す", en: "pushing a cart" },
        { ja: "台車を引く", en: "pulling a cart" },
        { ja: "荷物を運ぶ", en: "hauling cargo" },
        { ja: "金塊を積む", en: "loading gold bars" },
        { ja: "札束を積む", en: "loading cash" },
        { ja: "山積みにする", en: "stacking" },
        { ja: "盗品を運び出す", en: "making off with loot" },
        { ja: "逃走しながら運ぶ", en: "escaping with cargo" }
      ]
    },
    "🤲 アイテムの状態・動作 / 💰 財宝・現金アクション": {
      isAction: true,
      items: [
        { ja: "金塊を抱える", en: "carrying gold bars" },
        { ja: "金塊を掲げる", en: "holding up gold bars" },
        { ja: "金貨をばら撒く", en: "scattering coins" },
        { ja: "コインを掴み取る", en: "grabbing coins" },
        { ja: "札束を見せびらかす", en: "flaunting cash" },
        { ja: "札束をばら撒く", en: "throwing cash" },
        { ja: "宝箱を開ける", en: "opening a treasure chest" },
        { ja: "金庫をこじ開ける", en: "forcing open a vault" },
        { ja: "アタッシュケースを開く", en: "opening an attaché case" },
        { ja: "戦利品を回収する", en: "collecting loot" }
      ]
    },
    "🍱 食べ物・飲み物 / 🥢🍻 食べ物・飲み物動作 / 🥤 飲む・グラス": {
      isAction: true,
      items: [
        { ja: "飲む (基本)", en: "drinking" },
        { ja: "一口飲む", en: "taking a sip" },
        { ja: "ごくごく飲む", en: "gulping down" },
        { ja: "ストローで飲む", en: "drinking through a straw" },
        { ja: "ボトルから直飲み", en: "drinking straight from the bottle" },
        { ja: "缶を飲む", en: "drinking from a can" },
        { ja: "グラスを傾ける", en: "tilting a glass" },
        { ja: "マグカップを両手で包む", en: "warming hands around a mug" },
        { ja: "掲げて見せる", en: "showing off a drink" },
        { ja: "注ぐ", en: "pouring a drink" },
        { ja: "こぼす", en: "spilling a drink" },
        { ja: "ジョッキを掲げる", en: "raising a mug" },
        { ja: "ワイングラスを傾ける", en: "tilting a wine glass" },
        { ja: "ワイングラスを持つ", en: "holding a wine glass" },
        { ja: "缶を掲げる", en: "raising a can" },
        { ja: "ボトルを握る", en: "gripping a bottle" },
        { ja: "ボトルから注ぐ", en: "pouring from a bottle" }
      ]
    },
    "🍱 食べ物・飲み物 / 🥢🍻 食べ物・飲み物動作 / 🥢 食べる・口元": {
      isAction: true,
      items: [
        { ja: "口にくわえる", en: "in mouth" },
        { ja: "噛む/かじりつく", en: "biting" },
        { ja: "舐める", en: "licking" },
        { ja: "食べる", en: "eating" },
        { ja: "手掴みで食べる", en: "eating with hands" },
        { ja: "指でつまんで食べる", en: "eating with fingers" },
        { ja: "箸で食べる", en: "eating with chopsticks" },
        { ja: "フォークで食べる", en: "eating with fork" },
        { ja: "スプーンで食べる", en: "eating with spoon" },
        { ja: "ナイフとフォークで食べる", en: "eating with knife and fork" }
      ]
    },
    "🍱 食べ物・飲み物 / 🥢🍻 食べ物・飲み物動作 / 🍻 乾杯・供する": {
      isAction: true,
      items: [
        { ja: "乾杯する", en: "making a toast" },
        { ja: "ジョッキで乾杯する", en: "clinking beer mugs" },
        { ja: "飲み物を差し出す", en: "offering a drink" },
        { ja: "グラスを手渡す", en: "handing over a glass" },
        { ja: "酒を注いでもてなす", en: "pouring a drink for someone" },
        { ja: "ボトルをテーブルに置く", en: "setting a bottle on the table" }
      ]
    },
    "🤲 アイテムの状態・動作 / 👒 装着・配置": {
      isAction: true,
      items: [
        { ja: "背負う", en: "on back" },
        { ja: "腰に下げる", en: "on belt" },
        { ja: "頭に乗せる", en: "on head" },
        { ja: "ポケットに入れる", en: "in pocket" }
      ]
    },
    // 食べ物・飲み物演出 / 食材系
    "🍱 食べ物・飲み物 / 🎭 食べ物・飲み物演出 / 🔥 焼き・揚げ": {
      icon: "🔥",
      items: [
        { ja: "サクサク", en: "crispy" },
        { ja: "カリカリ", en: "crunchy" },
        { ja: "ジューシー", en: "juicy" },
        { ja: "こんがり焼けた", en: "golden-browned" },
        { ja: "揚げたて", en: "freshly fried" },
        { ja: "焦げ目のついた", en: "lightly charred" },
        { ja: "香ばしい焼き目", en: "savory grill marks" }
      ]
    },
    "🍱 食べ物・飲み物 / 🎭 食べ物・飲み物演出 / ♨ 温度・湯気": {
      icon: "♨",
      items: [
        { ja: "湯気が立つ", en: "steaming" },
        { ja: "熱々", en: "piping hot" },
        { ja: "できたて", en: "freshly made" },
        { ja: "ぐつぐつ煮える", en: "bubbling hot" },
        { ja: "ほんのり温かい", en: "warm" },
        { ja: "白い湯気に包まれる", en: "wrapped in white steam" }
      ]
    },
    "🍱 食べ物・飲み物 / 🎭 食べ物・飲み物演出 / 🧊 冷たさ・氷": {
      icon: "🧊",
      items: [
        { ja: "キンキンに冷えた", en: "ice-cold" },
        { ja: "氷入り", en: "with ice cubes" },
        { ja: "クラッシュアイス", en: "crushed ice" },
        { ja: "冷気をまとう", en: "surrounded by cold mist" },
        { ja: "霜のついた", en: "frosted" },
        { ja: "冷えたグラス", en: "chilled glass" }
      ]
    },
    "🍱 食べ物・飲み物 / 🎭 食べ物・飲み物演出 / 🫧 泡・炭酸": {
      icon: "🫧",
      items: [
        { ja: "泡立つ", en: "foamy" },
        { ja: "きめ細かな泡", en: "fine foam" },
        { ja: "炭酸の気泡", en: "carbonation bubbles" },
        { ja: "シュワシュワ", en: "fizzy" },
        { ja: "泡があふれる", en: "overflowing foam" },
        { ja: "ビールの泡", en: "beer head" }
      ]
    },
    "🍱 食べ物・飲み物 / 🎭 食べ物・飲み物演出 / 💧 結露・しずく": {
      icon: "💧",
      items: [
        { ja: "結露したグラス", en: "condensation-covered glass" },
        { ja: "水滴のついたボトル", en: "bottle covered in droplets" },
        { ja: "滴るしずく", en: "dripping droplets" },
        { ja: "濡れた缶表面", en: "wet can surface" },
        { ja: "冷気で曇った容器", en: "fogged chilled container" }
      ]
    },
    "🍱 食べ物・飲み物 / 🎭 食べ物・飲み物演出 / ✨ 発光・魔法液体": {
      icon: "✨",
      items: [
        { ja: "発光する液体", en: "glowing liquid" },
        { ja: "魔力を帯びた飲み物", en: "magic-infused drink" },
        { ja: "星屑が舞う液面", en: "stardust swirling on the surface" },
        { ja: "内側から輝くボトル", en: "bottle glowing from within" },
        { ja: "怪しく光る霊薬", en: "ominously glowing elixir" },
        { ja: "虹色にきらめく飲料", en: "iridescent drink" }
      ]
    },
    "🍱 食べ物・飲み物 / 🥩 食材 / 🥬 野菜 / 🧅 葱・ねぎ": {
      icon: "🧅",
      items: [
        { ja: "青ねぎ", en: "green onion" },
        { ja: "長ねぎ", en: "Japanese long green onion" },
        { ja: "小ねぎ", en: "thin green onion" },
        { ja: "万能ねぎ", en: "scallion" },
        { ja: "刻みねぎ", en: "chopped green onion" },
        { ja: "小口切りねぎ", en: "finely sliced green onion rings" },
        { ja: "白髪ねぎ", en: "thin white green onion strips" },
        { ja: "ねぎ束", en: "bundle of green onions" },
        { ja: "焼きねぎ", en: "grilled green onion" },
        { ja: "ねぎ串", en: "green onion skewer" },
        { ja: "ラーメンのねぎトッピング", en: "green onion topping on ramen" },
        { ja: "散らしねぎ", en: "scattered green onion garnish" }
      ]
    },
    "🍱 食べ物・飲み物 / 🥩 食材 / 🥬 野菜 / 🧅 玉ねぎ・球根野菜": {
      icon: "🧅",
      items: [
        { ja: "玉ねぎ", en: "onion" },
        { ja: "赤玉ねぎ", en: "red onion" },
        { ja: "白玉ねぎ", en: "white onion" },
        { ja: "新玉ねぎ", en: "fresh onion" },
        { ja: "小玉ねぎ", en: "pearl onions" },
        { ja: "スライス玉ねぎ", en: "sliced onion" },
        { ja: "みじん切り玉ねぎ", en: "diced onion" },
        { ja: "飴色玉ねぎ", en: "caramelized onion" },
        { ja: "フライドオニオン", en: "fried onion flakes" },
        { ja: "オニオンリング", en: "onion rings" },
        { ja: "エシャロット", en: "shallot" },
        { ja: "にんにく片", en: "garlic cloves" },
        { ja: "ローストガーリック", en: "roasted garlic" }
      ]
    },
    "🍱 食べ物・飲み物 / 🥩 食材 / 🥬 野菜 / 🥦 ブロッコリー・花野菜": {
      icon: "🥦",
      items: [
        { ja: "ブロッコリー", en: "broccoli" },
        { ja: "ブロッコリーの小房", en: "broccoli florets" },
        { ja: "ブロッコリーの茎", en: "broccoli stem" },
        { ja: "蒸しブロッコリー", en: "steamed broccoli" },
        { ja: "焼きブロッコリー", en: "roasted broccoli" },
        { ja: "ブロッコリースプラウト", en: "broccoli sprouts" },
        { ja: "スティックセニョール", en: "broccolini" },
        { ja: "カリフラワー", en: "cauliflower" },
        { ja: "カリフラワーの小房", en: "cauliflower florets" },
        { ja: "ロマネスコ", en: "romanesco broccoli" },
        { ja: "花野菜の盛り合わせ", en: "assorted flower vegetables" }
      ]
    },
    "🍱 食べ物・飲み物 / 🥩 食材 / 🥬 野菜 / 🥕 にんじん・根菜": {
      icon: "🥕",
      items: [
        { ja: "にんじん", en: "carrot" },
        { ja: "ベビーキャロット", en: "baby carrots" },
        { ja: "輪切りにんじん", en: "sliced carrot" },
        { ja: "千切りにんじん", en: "julienned carrot" },
        { ja: "にんじんスティック", en: "carrot sticks" },
        { ja: "大根", en: "daikon radish" },
        { ja: "ラディッシュ", en: "red radish" },
        { ja: "かぶ", en: "turnip" },
        { ja: "ビーツ", en: "beetroot" },
        { ja: "ごぼう", en: "burdock root" },
        { ja: "れんこん", en: "lotus root slices" },
        { ja: "パースニップ", en: "parsnip" }
      ]
    },
    "🍱 食べ物・飲み物 / 🥩 食材 / 🥬 野菜 / 🥔 じゃがいも・芋類": {
      icon: "🥔",
      items: [
        { ja: "じゃがいも", en: "potato" },
        { ja: "新じゃが", en: "new potatoes" },
        { ja: "角切りじゃがいも", en: "diced potato" },
        { ja: "くし切りポテト", en: "potato wedges" },
        { ja: "ゆでじゃがいも", en: "boiled potato" },
        { ja: "ベイクドポテト", en: "baked potato" },
        { ja: "マッシュポテト", en: "mashed potato" },
        { ja: "さつまいも", en: "sweet potato" },
        { ja: "焼き芋", en: "roasted sweet potato" },
        { ja: "里芋", en: "taro" },
        { ja: "山芋", en: "Japanese yam" },
        { ja: "芋の盛り合わせ", en: "assorted root tubers" }
      ]
    },
    "🍱 食べ物・飲み物 / 🥩 食材 / 🥬 野菜 / 🥬 葉物野菜": {
      icon: "🥬",
      items: [
        { ja: "キャベツ", en: "cabbage" },
        { ja: "千切りキャベツ", en: "shredded cabbage" },
        { ja: "白菜", en: "napa cabbage" },
        { ja: "レタス", en: "lettuce" },
        { ja: "ロメインレタス", en: "romaine lettuce" },
        { ja: "ほうれん草", en: "spinach" },
        { ja: "小松菜", en: "Japanese mustard spinach" },
        { ja: "チンゲン菜", en: "bok choy" },
        { ja: "ケール", en: "kale" },
        { ja: "水菜", en: "mizuna" },
        { ja: "ルッコラ", en: "arugula" },
        { ja: "クレソン", en: "watercress" }
      ]
    },
    "🍱 食べ物・飲み物 / 🥩 食材 / 🥬 野菜 / 🍅 トマト・実野菜": {
      icon: "🍅",
      items: [
        { ja: "トマト", en: "tomato" },
        { ja: "ミニトマト", en: "cherry tomatoes" },
        { ja: "スライストマト", en: "sliced tomato" },
        { ja: "くし切りトマト", en: "tomato wedges" },
        { ja: "房付きトマト", en: "tomatoes on the vine" },
        { ja: "オクラ", en: "okra" },
        { ja: "アボカド", en: "avocado" },
        { ja: "アボカドスライス", en: "avocado slices" },
        { ja: "グリーントマト", en: "green tomato" },
        { ja: "ドライトマト", en: "sun-dried tomatoes" }
      ]
    },
    "🍱 食べ物・飲み物 / 🥩 食材 / 🥬 野菜 / 🥒 きゅうり・瓜類": {
      icon: "🥒",
      items: [
        { ja: "きゅうり", en: "cucumber" },
        { ja: "輪切りきゅうり", en: "sliced cucumber" },
        { ja: "きゅうりスティック", en: "cucumber sticks" },
        { ja: "ズッキーニ", en: "zucchini" },
        { ja: "輪切りズッキーニ", en: "sliced zucchini" },
        { ja: "ゴーヤ", en: "bitter melon" },
        { ja: "冬瓜", en: "winter melon" },
        { ja: "瓜", en: "melon gourd" },
        { ja: "ピクルスきゅうり", en: "pickling cucumber" }
      ]
    },
    "🍱 食べ物・飲み物 / 🥩 食材 / 🥬 野菜 / 🍆 なす・ピーマン": {
      icon: "🍆",
      items: [
        { ja: "なす", en: "eggplant" },
        { ja: "輪切りなす", en: "sliced eggplant" },
        { ja: "焼きなす", en: "grilled eggplant" },
        { ja: "ピーマン", en: "green bell pepper" },
        { ja: "赤ピーマン", en: "red bell pepper" },
        { ja: "黄ピーマン", en: "yellow bell pepper" },
        { ja: "パプリカ", en: "paprika pepper" },
        { ja: "パプリカスライス", en: "sliced bell peppers" },
        { ja: "ししとう", en: "shishito peppers" },
        { ja: "唐辛子", en: "chili pepper" },
        { ja: "ハラペーニョ", en: "jalapeno pepper" }
      ]
    },
    "🍱 食べ物・飲み物 / 🥩 食材 / 🥬 野菜 / 🎃 かぼちゃ・とうもろこし": {
      icon: "🎃",
      items: [
        { ja: "かぼちゃ", en: "pumpkin" },
        { ja: "かぼちゃのくし切り", en: "pumpkin wedges" },
        { ja: "焼きかぼちゃ", en: "roasted pumpkin" },
        { ja: "バターナッツかぼちゃ", en: "butternut squash" },
        { ja: "とうもろこし", en: "corn" },
        { ja: "とうもろこしの芯付き", en: "corn on the cob" },
        { ja: "コーン粒", en: "corn kernels" },
        { ja: "ベビーコーン", en: "baby corn" },
        { ja: "焼きとうもろこし", en: "grilled corn" },
        { ja: "とうもろこしの皮", en: "corn husk" }
      ]
    },
    "🍱 食べ物・飲み物 / 🥩 食材 / 🥬 野菜 / 🫘 豆・莢野菜": {
      icon: "🫘",
      items: [
        { ja: "枝豆", en: "edamame" },
        { ja: "グリーンピース", en: "green peas" },
        { ja: "さやえんどう", en: "snow peas" },
        { ja: "スナップえんどう", en: "sugar snap peas" },
        { ja: "いんげん", en: "string beans" },
        { ja: "そら豆", en: "broad beans" },
        { ja: "大豆", en: "soybeans" },
        { ja: "もやし", en: "bean sprouts" },
        { ja: "豆苗", en: "pea shoots" },
        { ja: "豆野菜の盛り合わせ", en: "assorted green legumes" }
      ]
    },
    "🍱 食べ物・飲み物 / 🥩 食材 / 🥬 野菜 / 🍄 きのこ": {
      icon: "🍄",
      items: [
        { ja: "しいたけ", en: "shiitake mushrooms" },
        { ja: "えのき", en: "enoki mushrooms" },
        { ja: "しめじ", en: "shimeji mushrooms" },
        { ja: "まいたけ", en: "maitake mushrooms" },
        { ja: "エリンギ", en: "king oyster mushroom" },
        { ja: "マッシュルーム", en: "button mushrooms" },
        { ja: "ポートベロ", en: "portobello mushroom" },
        { ja: "松茸", en: "matsutake mushroom" },
        { ja: "スライスきのこ", en: "sliced mushrooms" },
        { ja: "きのこ盛り合わせ", en: "assorted mushrooms" }
      ]
    },
    "🍱 食べ物・飲み物 / 🥩 食材 / 🥬 野菜 / 🌿 香味野菜・ハーブ": {
      icon: "🌿",
      items: [
        { ja: "しょうが", en: "ginger" },
        { ja: "薄切りしょうが", en: "sliced ginger" },
        { ja: "すりおろししょうが", en: "grated ginger" },
        { ja: "みょうが", en: "myoga ginger" },
        { ja: "大葉", en: "perilla leaves" },
        { ja: "パクチー", en: "cilantro" },
        { ja: "パセリ", en: "parsley" },
        { ja: "バジル", en: "basil" },
        { ja: "ミント", en: "mint leaves" },
        { ja: "ローズマリー", en: "rosemary" },
        { ja: "タイム", en: "thyme" },
        { ja: "ディル", en: "dill" }
      ]
    },
    "🍱 食べ物・飲み物 / 🥩 食材 / 🥬 野菜 / 🧺 その他の定番野菜": {
      icon: "🧺",
      items: [
        { ja: "アスパラガス", en: "asparagus" },
        { ja: "セロリ", en: "celery" },
        { ja: "セロリスティック", en: "celery sticks" },
        { ja: "たけのこ", en: "bamboo shoots" },
        { ja: "アーティチョーク", en: "artichoke" },
        { ja: "フェンネル", en: "fennel bulb" },
        { ja: "芽キャベツ", en: "Brussels sprouts" },
        { ja: "アルファルファ", en: "alfalfa sprouts" },
        { ja: "野菜スティック盛り", en: "assorted vegetable sticks" },
        { ja: "カット野菜", en: "mixed cut vegetables" },
        { ja: "野菜の盛り合わせ", en: "assorted vegetables" }
      ]
    },
    "🍱 食べ物・飲み物 / 🥩 食材 / 🍎 果物 / 🍎 りんご・梨・柿": {
      icon: "🍎",
      items: [
        { ja: "りんご", en: "apple" },
        { ja: "赤りんご", en: "red apple" },
        { ja: "青りんご", en: "green apple" },
        { ja: "りんごのくし切り", en: "apple wedges" },
        { ja: "りんごの輪切り", en: "apple slices", foodSizeMode: "count" },
        { ja: "洋梨", en: "pear" },
        { ja: "和梨", en: "Asian pear" },
        { ja: "梨のくし切り", en: "pear wedges" },
        { ja: "柿", en: "persimmon" },
        { ja: "干し柿", en: "dried persimmon", foodSizeMode: "count" }
      ]
    },
    "🍱 食べ物・飲み物 / 🥩 食材 / 🍎 果物 / 🍊 柑橘類": {
      icon: "🍊",
      items: [
        { ja: "オレンジ", en: "orange" },
        { ja: "オレンジの輪切り", en: "orange slices", foodSizeMode: "count" },
        { ja: "みかん", en: "mandarin orange" },
        { ja: "グレープフルーツ", en: "grapefruit" },
        { ja: "グレープフルーツ半分", en: "half grapefruit" },
        { ja: "レモン", en: "lemon" },
        { ja: "レモンスライス", en: "lemon slices", foodSizeMode: "count" },
        { ja: "ライム", en: "lime" },
        { ja: "ライムスライス", en: "lime slices", foodSizeMode: "count" },
        { ja: "ゆず", en: "yuzu" },
        { ja: "すだち", en: "sudachi", foodSizeMode: "count" }
      ]
    },
    "🍱 食べ物・飲み物 / 🥩 食材 / 🍎 果物 / 🍌 バナナ・キウイ": {
      icon: "🍌",
      items: [
        { ja: "バナナ", en: "banana" },
        { ja: "バナナの房", en: "bunch of bananas", foodSizeMode: "count" },
        { ja: "バナナスライス", en: "banana slices", foodSizeMode: "count" },
        { ja: "プランテン", en: "plantain" },
        { ja: "キウイ", en: "kiwi fruit" },
        { ja: "キウイスライス", en: "kiwi slices", foodSizeMode: "count" }
      ]
    },
    "🍱 食べ物・飲み物 / 🥩 食材 / 🍎 果物 / 🍇 ぶどう・ベリー・さくらんぼ": {
      icon: "🍇",
      items: [
        { ja: "ぶどう", en: "grapes", foodSizeMode: "count" },
        { ja: "赤ぶどう", en: "red grapes", foodSizeMode: "count" },
        { ja: "白ぶどう", en: "green grapes", foodSizeMode: "count" },
        { ja: "房付きぶどう", en: "grapes on the vine", foodSizeMode: "count" },
        { ja: "いちご", en: "strawberries", foodSizeMode: "count" },
        { ja: "ブルーベリー", en: "blueberries", foodSizeMode: "count" },
        { ja: "ラズベリー", en: "raspberries", foodSizeMode: "count" },
        { ja: "ブラックベリー", en: "blackberries", foodSizeMode: "count" },
        { ja: "さくらんぼ", en: "cherries", foodSizeMode: "count" },
        { ja: "軸付きさくらんぼ", en: "cherries with stems", foodSizeMode: "count" }
      ]
    },
    "🍱 食べ物・飲み物 / 🥩 食材 / 🍎 果物 / 🍉 メロン・スイカ": {
      icon: "🍉",
      items: [
        { ja: "スイカ", en: "watermelon" },
        { ja: "スイカ一切れ", en: "watermelon slice" },
        { ja: "スイカのくし切り", en: "watermelon wedges", foodSizeMode: "count" },
        { ja: "赤肉メロン", en: "cantaloupe melon" },
        { ja: "青肉メロン", en: "honeydew melon" },
        { ja: "メロンのくし切り", en: "melon wedges", foodSizeMode: "count" }
      ]
    },
    "🍱 食べ物・飲み物 / 🥩 食材 / 🍎 果物 / 🍑 桃・核果・いちじく": {
      icon: "🍑",
      items: [
        { ja: "桃", en: "peach" },
        { ja: "白桃", en: "white peach" },
        { ja: "桃のくし切り", en: "peach wedges", foodSizeMode: "count" },
        { ja: "すもも", en: "plum" },
        { ja: "あんず", en: "apricot" },
        { ja: "ネクタリン", en: "nectarine" },
        { ja: "いちじく", en: "fig" },
        { ja: "ざくろ", en: "pomegranate" },
        { ja: "ざくろの実", en: "pomegranate seeds", foodSizeMode: "count" }
      ]
    },
    "🍱 食べ物・飲み物 / 🥩 食材 / 🍎 果物 / 🥭 南国・トロピカルフルーツ": {
      icon: "🥭",
      items: [
        { ja: "マンゴー", en: "mango" },
        { ja: "マンゴースライス", en: "mango slices", foodSizeMode: "count" },
        { ja: "パイナップル", en: "pineapple" },
        { ja: "パイナップルスライス", en: "pineapple slices", foodSizeMode: "count" },
        { ja: "パパイヤ", en: "papaya" },
        { ja: "ココナッツ", en: "coconut" },
        { ja: "ドラゴンフルーツ", en: "dragon fruit" },
        { ja: "パッションフルーツ", en: "passion fruit" },
        { ja: "ライチ", en: "lychee", foodSizeMode: "count" },
        { ja: "ランブータン", en: "rambutan", foodSizeMode: "count" }
      ]
    },
    "🍱 食べ物・飲み物 / 🥩 食材 / 🍎 果物 / 🧺 カットフルーツ・盛り合わせ": {
      icon: "🧺",
      items: [
        { ja: "カットフルーツ", en: "cut fruit", foodSizeMode: "count" },
        { ja: "フルーツ盛り合わせ", en: "assorted fresh fruit", foodSizeMode: "count" },
        { ja: "フルーツバスケット", en: "fruit basket", foodSizeMode: "count" },
        { ja: "果物かご", en: "basket of fresh fruit", foodSizeMode: "count" },
        { ja: "フルーツ串", en: "fruit skewers", foodSizeMode: "count" },
        { ja: "冷やしフルーツ", en: "chilled fresh fruit", foodSizeMode: "count" }
      ]
    },

    "🍱 食べ物・飲み物 / 🥩 食材 / 🥩 肉": { icon: "🥩", items: [{ ja: "ソーセージ串", en: "sausage skewer" }, { ja: "骨付き肉", en: "bone-in meat" }, { ja: "漫画肉", en: "manga meat" }] },

    "⚔️ 武器・兵器 / 動物用SF装備 / マウント・ハーネス": {
      isTarget: true,
      items: [
        { ja: "動物用軽量ハーネス", en: "lightweight animal equipment harness, scaled for the selected animal body" },
        { ja: "背部マウント基部", en: "animal-back equipment mount, external mount attached to the animal harness" },
        { ja: "小型センサーパック", en: "miniature sensor pack mounted on the selected animal" },
        { ja: "サイバー首輪ユニット", en: "cybernetic animal collar unit, compact diagnostic lights" },
        { ja: "装甲固定具", en: "armor-mounted equipment brackets on the animal body" }
      ]
    },
    "⚔️ 武器・兵器 / 動物用SF装備 / 架空SF武装": {
      isTarget: true,
      items: [
        { ja: "小型レーザーキャノン", en: "fictional micro laser cannon mounted on the cyber animal equipment harness" },
        { ja: "エネルギー投射ユニット", en: "fictional energy projector unit mounted on the selected animal" },
        { ja: "肩部ミサイルポッド風", en: "fictional shoulder micro missile pod silhouette on the cyber animal harness" },
        { ja: "背部レールキャノン風", en: "fictional animal-mounted rail cannon silhouette, sci-fi visual equipment" },
        { ja: "エネルギーブレード外付け", en: "fictional external energy blade equipment attached to the animal armor" }
      ]
    },
    "⚔️ 武器・兵器 / 動物用SF装備 / 偵察・支援ユニット": {
      isTarget: true,
      items: [
        { ja: "偵察ドローン小動物", en: "reconnaissance cyber animal support unit, compact scout equipment" },
        { ja: "診断ライトユニット", en: "diagnostic light modules on the cyber animal body" },
        { ja: "通信アンテナ", en: "tiny communication antenna details on the animal equipment" },
        { ja: "ホログラム投影機", en: "small holographic projector module mounted on the animal harness" },
        { ja: "随伴支援ポッド", en: "small companion support pod attached to the cyber animal equipment" }
      ]
    },
    "⚔️ 武器・兵器 / 鳥モチーフ・機械翼補助 / 人物側SF翼": {
      isTarget: true,
      items: [
        { ja: "鳥モチーフ機械翼", en: "bird-motif mechanical wings attached to the human back, avian mecha wing silhouette" },
        { ja: "分割式メカ羽根", en: "segmented mechanical feather wing panels on the human equipment" },
        { ja: "背部スラスター翼", en: "back-mounted sci-fi wing thrusters, glowing mechanical feather fins" },
        { ja: "鳥型装甲意匠", en: "avian-inspired armor motif, bird-shaped mechanical design language on the human suit" },
        { ja: "肩部フェザードローン", en: "bird-shaped shoulder drone accessory, small mechanical feather drone near the human" }
      ]
    },
    "⚔️ 武器・兵器 / 鳥モチーフ・機械翼補助 / 動物側へ固定": {
      isTarget: true,
      items: [
        { ja: "動物側メカ翼固定", en: "mechanical wing details stay on the separate animal body, not on the human body" },
        { ja: "小鳥用メカ羽根", en: "tiny mechanical feather panels scaled for the small bird companion" },
        { ja: "鳥型偵察ユニット", en: "separate cybernetic bird scout unit with visible mechanical wings" },
        { ja: "小鳥背部モジュール", en: "miniature dorsal module attached to the small bird companion" }
      ]
    },
    "🤲 アイテムの状態・動作 / 🐾 動物用装備位置": {
      items: [
        { ja: "動物の背中に外付け", en: "equipment mounted externally on the selected animal's back" },
        { ja: "動物用ハーネスに装着", en: "equipment attached to the selected animal's harness" },
        { ja: "装甲プレートに固定", en: "equipment fixed onto the animal armor plates" },
        { ja: "小型動物サイズに調整", en: "equipment scaled to fit a tiny animal body" },
        { ja: "翼や脚の動きを妨げない", en: "equipment placement keeps the animal wings and legs visible and functional" },
        { ja: "動物側へ装備固定", en: "equipment and cybernetic details stay attached to the separate animal body" },
        { ja: "人物側へ移さない", en: "animal equipment does not transfer to the human body" },
        { ja: "別個体の動物装備", en: "equipment belongs to the separate animal companion, not to the human body" }
      ]
    },

    "🍱 食べ物・飲み物 / 📏 サイズ・量カスタマイズ / 🍚 盛り量": {
      icon: "🍚",
      foodSizeMode: "portion",
      note: "丼・麺・皿・パフェなどに使う量の指定。選択中の対応フードへ合成して出力します。",
      items: [
        { ja: "小盛り", en: "food-size-portion-small", foodSizePreset: "small" },
        { ja: "大盛り", en: "food-size-portion-large", foodSizePreset: "large" },
        { ja: "特盛り", en: "food-size-portion-extra", foodSizePreset: "extra" },
        { ja: "ギガ盛り", en: "food-size-portion-giga", foodSizePreset: "giga" },
        { ja: "テラ盛り", en: "food-size-portion-tera", foodSizePreset: "tera" }
      ]
    },
    "🍱 食べ物・飲み物 / 📏 サイズ・量カスタマイズ / 🥩 単品サイズ": {
      icon: "🥩",
      foodSizeMode: "unit",
      note: "肉・ハンバーガー・果物・ケーキなど、一品そのものの大きさを指定します。",
      items: [
        { ja: "極小", en: "food-size-unit-tiny", foodSizePreset: "tiny" },
        { ja: "小さめ", en: "food-size-unit-small", foodSizePreset: "small" },
        { ja: "大きめ", en: "food-size-unit-large", foodSizePreset: "large" },
        { ja: "超巨大", en: "food-size-unit-giant", foodSizePreset: "giant" },
        { ja: "規格外", en: "food-size-unit-colossal", foodSizePreset: "colossal" }
      ]
    },
    "🍱 食べ物・飲み物 / 📏 サイズ・量カスタマイズ / 🍪 個数・山盛り": {
      icon: "🍪",
      foodSizeMode: "count",
      note: "クッキー・マカロン・キャンディ・寿司など、複数個で見せたい食べ物に使います。",
      items: [
        { ja: "少なめ", en: "food-size-count-few", foodSizePreset: "few" },
        { ja: "たくさん", en: "food-size-count-many", foodSizePreset: "many" },
        { ja: "山盛り", en: "food-size-count-heap", foodSizePreset: "heap" },
        { ja: "ギガ山盛り", en: "food-size-count-giga", foodSizePreset: "giga" },
        { ja: "山脈級", en: "food-size-count-tera", foodSizePreset: "tera" }
      ]
    },
    "🍱 食べ物・飲み物 / 📏 サイズ・量カスタマイズ / 🥤 容量・容器サイズ": {
      icon: "🥤",
      foodSizeMode: "volume",
      note: "コーヒー・ジュース・お酒・ポーションなど、飲み物の容量を指定します。",
      items: [
        { ja: "小容量", en: "food-size-volume-small", foodSizePreset: "small" },
        { ja: "大容量", en: "food-size-volume-large", foodSizePreset: "large" },
        { ja: "特大容量", en: "food-size-volume-extra", foodSizePreset: "extra" },
        { ja: "ギガ容量", en: "food-size-volume-giga", foodSizePreset: "giga" },
        { ja: "テラ容量", en: "food-size-volume-tera", foodSizePreset: "tera" }
      ]
    }

  };

  const ACCESSORY_AKASHIC_PREFIX = "💠 装備アカシック / ";
  const ACCESSORY_AKASHIC = window.SHIMA_ACCESSORY_AKASHIC_V1 || null;
  const ACCESSORY_AKASHIC_AUDIT = {
    version: ACCESSORY_AKASHIC && ACCESSORY_AKASHIC.version || "",
    candidates: 0,
    added: 0,
    promptSkips: 0,
    idCollisions: 0,
    groups: Object.create(null)
  };

  const normalizeAccessoryValue = value => String(value || "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\s\u3000]+/g, " ")
    .replace(/\s*,\s*/g, ",")
    .trim();

  // 既存アクセサリー、食べ物、武器は上書きしない。
  // 新しいアカシック棚だけを安定ID付きで非破壊追加する。
  (function installAccessoryAkashic() {
    if (!ACCESSORY_AKASHIC || !Array.isArray(ACCESSORY_AKASHIC.groups)) return;

    const knownPrompts = new Set();
    Object.values(CATEGORIES).forEach(category => {
      (category && Array.isArray(category.items) ? category.items : []).forEach(existing => {
        const prompt = normalizeAccessoryValue(existing && existing.en);
        if (prompt) knownPrompts.add(prompt);
      });
    });

    const generatedIds = new Set();
    ACCESSORY_AKASHIC.groups.forEach(group => {
      const groupTitle = String(group && group.title || group && group.key || "装備");
      const groupKey = String(group && group.key || "group");
      const groupPath = `${ACCESSORY_AKASHIC_PREFIX}${groupTitle}`;
      CATEGORIES[groupPath] = {
        accessoryAkashic: true,
        accessoryAkashicRoot: true,
        accessoryAkashicGroup: groupKey,
        note: String(group && group.description || ""),
        items: []
      };
      ACCESSORY_AKASHIC_AUDIT.groups[groupKey] = 0;

      (Array.isArray(group && group.categories) ? group.categories : []).forEach(category => {
        const categoryKey = String(category && category.key || "category");
        const categoryTitle = String(category && category.title || categoryKey);
        const accepted = [];

        (Array.isArray(category && category.items) ? category.items : []).forEach(row => {
          ACCESSORY_AKASHIC_AUDIT.candidates++;
          const slug = String(row && row[0] || "").trim();
          const ja = String(row && row[1] || "").trim();
          const en = String(row && row[2] || "").trim();
          const description = String(row && row[3] || "").trim();
          const id = `accessory-akashic-${groupKey}-${categoryKey}-${slug}`;
          const promptKey = normalizeAccessoryValue(en);

          if (!slug || !ja || !en || !promptKey || knownPrompts.has(promptKey)) {
            ACCESSORY_AKASHIC_AUDIT.promptSkips++;
            return;
          }
          if (generatedIds.has(id)) {
            ACCESSORY_AKASHIC_AUDIT.idCollisions++;
            return;
          }

          generatedIds.add(id);
          knownPrompts.add(promptKey);
          accepted.push({
            id,
            slug,
            ja,
            en,
            description,
            outputChannel: "positive",
            promptIntent: "normal",
            accessoryAkashicGroup: groupKey,
            accessoryAkashicCategory: categoryKey
          });
          ACCESSORY_AKASHIC_AUDIT.added++;
          ACCESSORY_AKASHIC_AUDIT.groups[groupKey]++;
        });

        CATEGORIES[`${groupPath} / ${categoryTitle}`] = {
          accessoryAkashic: true,
          accessoryAkashicGroup: groupKey,
          accessoryAkashicCategory: categoryKey,
          note: String(category && category.note || ""),
          items: accepted
        };
      });
    });

    window.__SHIMA_ACCESSORY_AKASHIC_AUDIT__ = ACCESSORY_AKASHIC_AUDIT;
  })();

  // 🔒 シークレット表示：R-18 アクセサリー
  const SECRET_CATEGORIES = {
    "🧸 R-18: おもちゃ・アイテム (Adult Toys)": {
      isTarget: true,
      items: [
        { ja: "バイブレーター", en: "vibrator" }, { ja: "小型ローター", en: "bullet vibrator" }, { ja: "電マ (マッサージ器)", en: "magic wand" }, { ja: "ディルド", en: "dildo" }, { ja: "ダブルディルド", en: "double dildo" }, { ja: "ガラスのディルド", en: "glass dildo" }, { ja: "触手型ディルド", en: "tentacle dildo" }, { ja: "アナルプラグ", en: "butt plug" }, { ja: "アナルビーズ", en: "anal beads" }, { ja: "アナルフック", en: "anal hook" }, { ja: "ペニスバンド", en: "strap-on" }, { ja: "オナホール", en: "fleshlight" }, { ja: "コックリング", en: "cock ring" }, { ja: "バイブパンツ", en: "vibrating panties" }, { ja: "クリスター (浣腸器)", en: "enema" }, { ja: "媚薬の小瓶", en: "aphrodisiac potion" }
      ]
    },
    "⛓️ R-18: 拘束具・BDSM (Restraints & BDSM)": {
      items: [
        { ja: "手錠", en: "handcuffs" }, { ja: "亀甲縛り（縄）", en: "kikkou shibari, rope bondage" }, { ja: "目隠し", en: "blindfold" }, { ja: "ボールガグ（猿ぐつわ）", en: "ball gag" }, { ja: "リングガグ", en: "ring gag" }, { ja: "奴隷の首輪", en: "slave collar" }, { ja: "トゲ付き首輪", en: "spiked collar" }, { ja: "首輪とリード", en: "collar and leash" }, { ja: "手枷 / 足枷", en: "shackles" }, { ja: "拘束衣（ストレートジャケット）", en: "straitjacket" }, { ja: "拘束ベルト（BDSM）", en: "bondage belts" }, { ja: "三角木馬", en: "wooden horse, pillory" }
      ]
    },
    "🐙 R-18: 触手・スライム・生物 (Tentacles & Slime)": {
      isTarget: true,
      items: [
        { ja: "触手（基本）", en: "tentacles" }, { ja: "巨大な触手", en: "giant tentacles" }, { ja: "吸盤のある触手", en: "suction cup tentacles" }, { ja: "スライム触手", en: "slime tentacles" }, { ja: "スライム触手搾乳装置", en: "(Slime Tentacle Milking Device)" }, { ja: "機械の触手 (ケーブル)", en: "mechanical tentacles, cables" }, { ja: "植物の蔓による拘束", en: "vine bondage" }, { ja: "透明な触手", en: "transparent tentacles" }, { ja: "体に絡みつく触手", en: "tentacles wrapping around body" }, { ja: "スライム（生物）", en: "slime (monster)" }, { ja: "体にまとわりつくスライム", en: "slime covering body" }, { ja: "粘液 / ネバネバした液体", en: "viscous liquid, sticky slime" }, { ja: "クモの巣（拘束）", en: "spider web bondage" }, { ja: "寄生生物", en: "parasite" }, { ja: "蟲・ワームの群れ", en: "worms, swarming insects" }, { ja: "生いた肉壁", en: "living flesh wall" }, { ja: "ペニス", en: "penis" }
      ]
    },
    "🔞 R-18: 特殊装飾・印 (Marks & Piercings)": {
      items: [
        { ja: "淫紋（子宮紋）", en: "womb tattoo, crotch tattoo" }, { ja: "奴隷の刻印", en: "slave mark, brand" }, { ja: "ボディペイント（落書き）", en: "body writing" }, { ja: "正の字（カウント）", en: "tally mark" }, { ja: "乳首ピアス", en: "nipple piercing" }, { ja: "へそピアス", en: "navel piercing" }, { ja: "陰部ピアス", en: "genital piercing" }, { ja: "舌ピアス", en: "tongue piercing" }, { ja: "ニップルキャップ / クリップ", en: "nipple clamps" }
      ]
    },
    // 🔥 追加：R-18用動作棚
    "🤲 R-18: 動作・状態 (Secret Actions)": {
      isAction: true,
      items: [
        { ja: "膣に挿入、性行為", en: "in pussy, sex" },
        { ja: "深く挿入", en: "inserted deeply" },
        { ja: "最奥まで", en: "bottoming out" },
        { ja: "半挿入", en: "half-inserted" },
        { ja: "激しい挿入", en: "thrusting" },
        { ja: "振動中", en: "vibrating" },
        { ja: "脈打つ", en: "pulsating" },
        { ja: "締め付け", en: "constricting" },
        { ja: "巻き付き", en: "wrapping around" },
        { ja: "絡みつく", en: "entwining" },
        { ja: "ヌルヌル", en: "covered in slime" },
        { ja: "クリ責め", en: "clitoral stimulation" },
        { ja: "焦らし", en: "teasing" },
        { ja: "拡張", en: "stretched" },
        { ja: "抵抗", en: "struggling against" },
        { ja: "震え", en: "trembling" },
        { ja: "潮吹き", en: "squirting" },
        { ja: "絶頂", en: "orgasm" }
      ]
    }

  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-accessories") || container;
      parent.innerHTML = "";

      const section = document.createElement("div");
      section.className = "accessories-section";

      const h = document.createElement("div");
      h.textContent = "💍 アクセサリー・装備・小物 (Accessories & Gear)";
      h.style.fontWeight = "bold";
      h.style.color = "#c71585";
      h.style.marginBottom = "8px";
      section.appendChild(h);

      const lead = document.createElement("div");
      lead.textContent = "人物を飾る装備アカシックを先頭に、既存の小物・武器・食べ物も用途別で維持";
      lead.style.fontSize = "0.86em";
      lead.style.color = "#777";
      lead.style.margin = "0 0 10px";
      section.appendChild(lead);

      const entries = Object.entries(CATEGORIES);

      if (!document.getElementById("shima-accessory-akashic-style")) {
        const style = document.createElement("style");
        style.id = "shima-accessory-akashic-style";
        style.textContent = `
          .accessories-section .accessory-option-grid{
            display:grid !important;
            grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
            gap:8px !important;
            align-items:stretch;
          }
          .accessories-section .accessory-option-card{
            min-width:0;
            box-sizing:border-box;
            writing-mode:horizontal-tb !important;
            overflow-wrap:anywhere;
          }
          .accessories-section .accessory-option-card.has-description{
            align-items:flex-start !important;
            padding:9px 10px !important;
          }
          .accessories-section .accessory-option-copy{
            display:flex;
            flex:1 1 auto;
            min-width:0;
            flex-direction:column;
            gap:3px;
          }
          .accessories-section .accessory-option-title{
            color:#214c54;
            font-weight:800;
            line-height:1.4;
          }
          .accessories-section .accessory-option-description{
            color:#526a72;
            font-size:.84em;
            font-weight:500;
            line-height:1.55;
            white-space:normal;
          }
          .accessories-section .accessory-option-card.has-description > input{
            flex:0 0 auto;
            margin-top:3px;
          }
          .accessories-section .accessory-option-card.has-description > .zero-favorite-star{
            align-self:center;
            flex:0 0 auto;
          }
          .accessories-section .accessory-akashic-root{
            border:1px solid #8fcfc7 !important;
            background:linear-gradient(145deg,rgba(255,255,255,.98),rgba(228,249,246,.94)) !important;
            box-shadow:0 10px 24px rgba(42,112,108,.10);
            margin:10px 0 14px !important;
            padding:8px !important;
          }
          .accessories-section .accessory-akashic-root > summary{
            color:#185e5b !important;
            font-size:1.03em;
            line-height:1.45;
          }
          .accessories-section details[data-accessory-akashic-group]{
            width:100%;
            box-sizing:border-box;
          }
          @media (max-width:760px){
            .accessories-section .accessory-option-grid{
              display:grid !important;
              grid-template-columns:minmax(0,1fr) !important;
              width:100% !important;
            }
            .accessories-section .accessory-option-card{
              display:flex !important;
              width:100% !important;
              max-width:100% !important;
              min-height:48px;
              line-height:1.45;
              writing-mode:horizontal-tb !important;
              text-orientation:mixed !important;
              word-break:normal !important;
            }
            .accessories-section details[open] > div.accessory-option-grid{
              display:grid !important;
              grid-template-columns:minmax(0,1fr) !important;
            }
          }
        `;
        document.head.appendChild(style);
      }

      const DISPLAY_LABELS = {
        "👒 頭部の装飾・帽子 (Headgear)": "👒 頭部装飾・帽子",
        "💎 ジュエリー・装身具 (Jewelry)": "💎 ジュエリー・装身具",
        "🧣 服飾小物・背部 (Clothing Acc)": "🧣 服飾小物・背部",
        "👜 手持ち小物 (Handheld)": "👜 手持ち小物",
        "🧸 ぬいぐるみ (Plushies)": "🧸 ぬいぐるみ",
        "💰 財宝・金塊 (Treasure & Gold Bars)": "💰 財宝・金塊",
        "💎 宝石・ジュエル (Gems & Jewels)": "💎 宝石・ジュエル",
        "🪙 コイン・貨幣 (Coins & Currency)": "🪙 コイン・貨幣",
        "💴 紙幣・札束 (Banknotes & Cash)": "💴 紙幣・札束",
        "📦 宝箱・保管容器 (Treasure Chests & Storage)": "📦 宝箱・保管容器",
        "💼 アタッシュケース・現金ケース (Attaché & Money Cases)": "💼 現金ケース",
        "🛒 運搬・台車 (Carts & Transport)": "🛒 運搬・台車",
        "🎸 音楽・趣味・その他 (Hobbies)": "🎸 趣味・楽器・その他"
      };

      const shortLabel = (name) => DISPLAY_LABELS[name] || name.replace(/\s*\([^)]*\)\s*$/g, "");

      const divider = (title, desc, color) => {
        const wrap = document.createElement("div");
        wrap.style.margin = "14px 0 8px";
        wrap.style.textAlign = "center";

        const line = document.createElement("div");
        line.textContent = title;
        line.style.borderTop = "1px solid #ddd";
        line.style.paddingTop = "6px";
        line.style.fontWeight = "bold";
        line.style.color = color || "#8a5a75";
        wrap.appendChild(line);

        if (desc) {
          const note = document.createElement("div");
          note.textContent = desc;
          note.style.fontSize = "0.82em";
          note.style.color = "#777";
          note.style.marginTop = "3px";
          wrap.appendChild(note);
        }
        section.appendChild(wrap);
      };

      const styleDetails = (details, color, bg) => {
        details.style.border = `1px solid ${color || "#ddd"}`;
        details.style.marginBottom = "6px";
        details.style.borderRadius = "8px";
        details.style.padding = "6px";
        if (bg) details.style.background = bg;
      };

      const foodModifierDatasetKey = group => FOOD_MODIFIER_TARGET_DATASET[group] || "";

      const getSelectedFoodDecorationTargets = group => {
        return Array.from(section.querySelectorAll('input[data-food-decoration-target="true"]:checked'))
          .filter(cb => cb.dataset.foodDecorationGroup === group)
          .map(cb => ({
            key: cb.dataset.foodDecorationTargetKey || "",
            label: cb.dataset.foodLabel || cb.dataset.en || "選択した項目"
          }))
          .filter(target => target.key);
      };

      const getActiveFoodModifierTarget = group => {
        const targets = getSelectedFoodDecorationTargets(group);
        const dataKey = foodModifierDatasetKey(group);
        let active = dataKey ? section.dataset[dataKey] || "" : "";
        if (!targets.some(target => target.key === active)) active = "";
        if (!active && targets.length === 1) active = targets[0].key;
        if (dataKey) section.dataset[dataKey] = active;
        return active;
      };

      const setActiveFoodModifierTarget = (group, key) => {
        const dataKey = foodModifierDatasetKey(group);
        if (!dataKey) return;
        const valid = getSelectedFoodDecorationTargets(group).some(target => target.key === key);
        section.dataset[dataKey] = valid ? key : "";
      };

      const bindFoodModifierToTarget = (cb, group, key) => {
        if (!cb || !cb.checked) return;
        const target = getSelectedFoodDecorationTargets(group).find(entry => entry.key === key);
        if (!target) return;
        cb.dataset.foodApplyTo = key;
        cb.dataset.foodModifierUnbound = "";
        cb.title = `適用先：${target.label}`;
      };

      const refreshFoodModifierTargetControls = () => {
        ["dessert", "drink", "onigiri"].forEach(group => {
          const targets = getSelectedFoodDecorationTargets(group);
          const dataKey = foodModifierDatasetKey(group);
          let active = dataKey ? section.dataset[dataKey] || "" : "";
          if (!targets.some(target => target.key === active)) active = "";
          if (!active && targets.length === 1) active = targets[0].key;
          if (dataKey) section.dataset[dataKey] = active;

          section.querySelectorAll(`select[data-food-modifier-target-picker="${group}"]`).forEach(select => {
            select.innerHTML = "";
            const empty = document.createElement("option");
            empty.value = "";
            empty.textContent = targets.length ? "適用先を選択…" : "先に料理・飲み物を選択…";
            select.appendChild(empty);
            targets.forEach(target => {
              const option = document.createElement("option");
              option.value = target.key;
              option.textContent = target.label;
              select.appendChild(option);
            });
            select.value = active;
          });

          section.querySelectorAll(`[data-food-modifier-target-status="${group}"]`).forEach(status => {
            const current = targets.find(target => target.key === active);
            status.textContent = current
              ? `適用先：${current.label}`
              : (targets.length ? "適用先：選択してください" : "適用先：料理・飲み物を先に選択してください");
          });
        });
      };

      const assignUnboundFoodModifiers = (group, key) => {
        section.querySelectorAll(`input[data-food-modifier-group="${group}"]:checked`).forEach(cb => {
          if (!cb.dataset.foodApplyTo) bindFoodModifierToTarget(cb, group, key);
        });
      };

      const renderFoodModifierTargetControl = (group, mount) => {
        const meta = FOOD_DECORATION_META[group] || FOOD_DECORATION_META.dessert;
        const wrap = document.createElement("div");
        wrap.style.cssText = "margin:7px 0 5px; padding:6px; border:1px dashed #d6a85d; border-radius:7px; background:#fffdf6;";

        const status = document.createElement("div");
        status.dataset.foodModifierTargetStatus = group;
        status.style.cssText = "font-size:0.80em; font-weight:700; margin-bottom:5px; color:#7a5a20;";
        status.textContent = `適用先：${meta.label}対象を選択してください`;

        const row = document.createElement("div");
        row.style.cssText = "display:flex; gap:6px; align-items:center; flex-wrap:wrap;";
        const select = document.createElement("select");
        select.dataset.foodModifierTargetPicker = group;
        select.style.cssText = "min-width:0; flex:1 1 160px; padding:4px 6px; border:1px solid #d7b46d; border-radius:6px; background:#fff;";
        const refresh = document.createElement("button");
        refresh.type = "button";
        refresh.textContent = "適用先を更新";
        refresh.style.cssText = "border:1px solid #d7b46d; background:#fff7df; color:#6f4800; border-radius:999px; padding:4px 8px; font-weight:700; font-size:0.82em;";

        select.addEventListener("change", () => {
          const key = select.value || "";
          setActiveFoodModifierTarget(group, key);
          if (key) assignUnboundFoodModifiers(group, key);
          refreshFoodModifierTargetControls();
        });
        refresh.addEventListener("click", refreshFoodModifierTargetControls);

        row.appendChild(select);
        row.appendChild(refresh);
        wrap.appendChild(status);
        wrap.appendChild(row);
        mount.appendChild(wrap);
        refreshFoodModifierTargetControls();
      };

      const isFoodSizeShortcutSuppressed = (ev) => {
        try {
          if (
            window.__historyRestoring ||
            window.__historySilentRestoring ||
            window.__builderHistoryRestoring ||
            window.__promptHistoryRestoring ||
            window.__SHIMA_RESTORING_HISTORY__ ||
            window.__builderResetting ||
            window.__builderIsResetting ||
            window.__SHIMA_INITING__ ||
            window.__shimaInitialMounting ||
            window.__isSyncingCheckboxes ||
            window.__linkedIdsApplying ||
            window.__suppressFoodSizeShortcut ||
            window.__suppressFoodDecorationShortcut ||
            window.__suppressFoodModifierShortcut
          ) return true;
          // 履歴復元や自動同期から案内カードを出さない。
          if (ev && ev.isTrusted === false) return true;
        } catch(_) {}
        return false;
      };

      const getFoodSizeShortcutBox = () => {
        let box = document.getElementById("food-size-shortcut-box");
        if (!box) {
          box = document.createElement("div");
          box.id = "food-size-shortcut-box";
          box.style.cssText = [
            "display:none",
            "position:fixed",
            "left:10px",
            "right:10px",
            "bottom:12px",
            "z-index:2147483641",
            "box-sizing:border-box",
            "padding:10px",
            "border:2px solid #c77b16",
            "border-radius:14px",
            "background:#fff9ed",
            "box-shadow:0 8px 24px rgba(0,0,0,0.20)",
            "font-size:13px",
            "line-height:1.35",
            "color:#6f4800"
          ].join(";");
          document.body.appendChild(box);
        }
        return box;
      };

      const openFoodSizeShelf = (mode) => {
        const shelves = Array.from(section.querySelectorAll("details[data-food-size-mode]"))
          .filter(det => det.dataset.foodSizeMode === mode);
        if (!shelves.length) return false;

        shelves.forEach(det => {
          let node = det;
          while (node && node !== document.body) {
            if (node.tagName === "DETAILS") node.open = true;
            node = node.parentElement;
          }
        });

        const focus = shelves[0];
        try {
          const oldOutline = focus.style.outline;
          const oldOffset = focus.style.outlineOffset;
          const oldShadow = focus.style.boxShadow;
          focus.style.outline = "3px solid rgba(217, 119, 6, 0.72)";
          focus.style.outlineOffset = "2px";
          focus.style.boxShadow = "0 0 14px rgba(245, 158, 11, 0.35)";
          setTimeout(() => {
            focus.style.outline = oldOutline;
            focus.style.outlineOffset = oldOffset;
            focus.style.boxShadow = oldShadow;
          }, 1800);
        } catch(_) {}

        try {
          focus.scrollIntoView({ behavior: "smooth", block: "center" });
        } catch(_) {
          try { focus.scrollIntoView(false); } catch(__) {}
        }
        return true;
      };

      const showFoodSizeShortcut = (item, profile) => {
        if (!profile || !profile.mode) return;
        const box = getFoodSizeShortcutBox();
        const meta = FOOD_SIZE_MODE_META[profile.mode] || FOOD_SIZE_MODE_META.portion;
        const foodName = item && item.ja ? item.ja : "選択した食べ物";

        // 動物ポーズ案内と重なった場合は、最後に選んだ対象の案内を優先する。
        try {
          const creatureBox = document.getElementById("creature-pose-shortcut-box");
          if (creatureBox) creatureBox.style.display = "none";
        } catch(_) {}

        box.innerHTML = "";
        box.style.display = "block";

        const msg = document.createElement("div");
        msg.style.cssText = "font-weight:800; margin-bottom:6px;";
        msg.textContent = `${meta.icon} ${foodName}：${meta.label}を指定しますか？`;

        const sub = document.createElement("div");
        sub.style.marginBottom = "8px";
        sub.textContent = `食べ物・飲み物欄の「${meta.title}」へ移動します。チェックは自動ONにしません。`;

        const actions = document.createElement("div");
        actions.style.cssText = "display:flex; flex-wrap:wrap; gap:8px; justify-content:flex-end;";

        const noBtn = document.createElement("button");
        noBtn.type = "button";
        noBtn.textContent = "いいえ";
        noBtn.style.cssText = "border:1px solid #94a3b8; background:#fff; border-radius:999px; padding:6px 10px; font-weight:700; flex:1 1 120px;";

        const yesBtn = document.createElement("button");
        yesBtn.type = "button";
        yesBtn.textContent = "はい：サイズ候補へ";
        yesBtn.style.cssText = "border:1px solid #d97706; background:#fef3c7; color:#78350f; border-radius:999px; padding:6px 10px; font-weight:800; flex:1 1 160px;";

        noBtn.addEventListener("click", () => { box.style.display = "none"; });
        yesBtn.addEventListener("click", () => {
          yesBtn.disabled = true;
          yesBtn.textContent = "移動中…";
          const moved = openFoodSizeShelf(profile.mode);
          if (moved) {
            setTimeout(() => { box.style.display = "none"; }, 180);
          } else {
            sub.textContent = "サイズ棚の準備待ちです。食べ物・飲み物欄を開いてから、もう一度「はい」を押してください。";
            yesBtn.disabled = false;
            yesBtn.textContent = "はい：サイズ候補へ";
          }
        });

        actions.appendChild(noBtn);
        actions.appendChild(yesBtn);
        box.appendChild(msg);
        box.appendChild(sub);
        box.appendChild(actions);
      };

      const hideCreaturePoseShortcut = () => {
        try {
          const creatureBox = document.getElementById("creature-pose-shortcut-box");
          if (creatureBox) creatureBox.style.display = "none";
        } catch(_) {}
      };

      const openFoodModifierShelf = (group, targetKey) => {
        if (targetKey) setActiveFoodModifierTarget(group, targetKey);
        refreshFoodModifierTargetControls();

        const shelves = Array.from(section.querySelectorAll("details[data-food-modifier-group]"))
          .filter(det => det.dataset.foodModifierGroup === group);
        if (!shelves.length) return false;

        shelves.forEach(det => {
          let node = det;
          while (node && node !== document.body) {
            if (node.tagName === "DETAILS") node.open = true;
            node = node.parentElement;
          }
        });

        const focus = shelves[0];
        try {
          const oldOutline = focus.style.outline;
          const oldOffset = focus.style.outlineOffset;
          const oldShadow = focus.style.boxShadow;
          focus.style.outline = "3px solid rgba(192, 90, 130, 0.62)";
          focus.style.outlineOffset = "2px";
          focus.style.boxShadow = "0 0 14px rgba(244, 114, 182, 0.26)";
          setTimeout(() => {
            focus.style.outline = oldOutline;
            focus.style.outlineOffset = oldOffset;
            focus.style.boxShadow = oldShadow;
          }, 1800);
        } catch(_) {}

        try {
          focus.scrollIntoView({ behavior: "smooth", block: "center" });
        } catch(_) {
          try { focus.scrollIntoView(false); } catch(__) {}
        }
        return true;
      };

      const showFoodModifierTargetPicker = (group, pendingCb, modifierLabel) => {
        const meta = FOOD_DECORATION_META[group] || FOOD_DECORATION_META.dessert;
        const targets = getSelectedFoodDecorationTargets(group);
        const box = getFoodSizeShortcutBox();
        hideCreaturePoseShortcut();
        box.innerHTML = "";
        box.style.display = "block";

        const msg = document.createElement("div");
        msg.style.cssText = "font-weight:800; margin-bottom:6px;";
        msg.textContent = `${meta.icon} ${modifierLabel || meta.label}の適用先を選んでください`;

        const sub = document.createElement("div");
        sub.style.marginBottom = "8px";

        const actions = document.createElement("div");
        actions.style.cssText = "display:flex; flex-wrap:wrap; gap:8px; justify-content:flex-end;";

        const closeBtn = document.createElement("button");
        closeBtn.type = "button";
        closeBtn.textContent = "閉じる";
        closeBtn.style.cssText = "border:1px solid #94a3b8; background:#fff; border-radius:999px; padding:6px 10px; font-weight:700; flex:1 1 120px;";
        closeBtn.addEventListener("click", () => { box.style.display = "none"; });

        if (!targets.length) {
          sub.textContent = group === "drink"
            ? "先にドリンクベースを選ぶか、フレーバー対応の飲み物を選んでください。フレーバーだけでは出力しません。"
            : group === "onigiri"
              ? "先に料理・ジャンル別の「おにぎり」を選んでください。仕上げ・具・焼きは単独では出力しません。"
              : "先にパンケーキ・シュークリーム・パフェなどのデザートを選んでください。トッピングだけでは出力しません。";
          actions.appendChild(closeBtn);
        } else {
          sub.textContent = "選んだ対象にだけ合成します。ほかの料理・飲み物には自動適用しません。";
          targets.forEach(target => {
            const targetBtn = document.createElement("button");
            targetBtn.type = "button";
            targetBtn.textContent = `適用：${target.label}`;
            targetBtn.style.cssText = "border:1px solid #c25a82; background:#fff1f6; color:#8d234f; border-radius:999px; padding:6px 10px; font-weight:800; flex:1 1 160px;";
            targetBtn.addEventListener("click", () => {
              setActiveFoodModifierTarget(group, target.key);
              if (pendingCb) bindFoodModifierToTarget(pendingCb, group, target.key);
              assignUnboundFoodModifiers(group, target.key);
              refreshFoodModifierTargetControls();
              box.style.display = "none";
            });
            actions.appendChild(targetBtn);
          });
          actions.appendChild(closeBtn);
        }

        box.appendChild(msg);
        box.appendChild(sub);
        box.appendChild(actions);
      };

      const showFoodDecorationShortcut = (item, profile, sizeProfile, cb) => {
        if (!profile || !profile.group || !cb) return;
        const meta = FOOD_DECORATION_META[profile.group] || FOOD_DECORATION_META.dessert;
        const targetKey = cb.dataset.foodDecorationTargetKey || "";
        const foodName = item && item.ja ? item.ja : "選択した項目";
        const box = getFoodSizeShortcutBox();
        hideCreaturePoseShortcut();
        box.innerHTML = "";
        box.style.display = "block";

        const msg = document.createElement("div");
        msg.style.cssText = "font-weight:800; margin-bottom:6px;";
        msg.textContent = profile.group === "drink"
          ? `${meta.icon} ${foodName}にフレーバーを追加しますか？`
          : profile.group === "onigiri"
            ? `${meta.icon} ${foodName}に海苔・具・焼き仕上げを追加しますか？`
            : `${meta.icon} ${foodName}にトッピングを追加しますか？`;

        const sub = document.createElement("div");
        sub.style.marginBottom = "8px";
        sub.textContent = profile.group === "drink"
          ? "フレーバーはこの飲み物にだけ合成します。チェックは自動ONにしません。"
          : profile.group === "onigiri"
            ? "海苔・具・焼き仕上げはこのおにぎりにだけ合成します。チェックは自動ONにしません。"
            : "トッピング・フィリングはこのデザートにだけ合成します。チェックは自動ONにしません。";

        const actions = document.createElement("div");
        actions.style.cssText = "display:flex; flex-wrap:wrap; gap:8px; justify-content:flex-end;";

        const noBtn = document.createElement("button");
        noBtn.type = "button";
        noBtn.textContent = "いいえ";
        noBtn.style.cssText = "border:1px solid #94a3b8; background:#fff; border-radius:999px; padding:6px 10px; font-weight:700; flex:1 1 110px;";
        noBtn.addEventListener("click", () => { box.style.display = "none"; });

        const yesBtn = document.createElement("button");
        yesBtn.type = "button";
        yesBtn.textContent = profile.group === "drink"
          ? "はい：フレーバーへ"
          : profile.group === "onigiri" ? "はい：おにぎり仕上げへ" : "はい：トッピングへ";
        yesBtn.style.cssText = "border:1px solid #c25a82; background:#fff1f6; color:#8d234f; border-radius:999px; padding:6px 10px; font-weight:800; flex:1 1 160px;";
        yesBtn.addEventListener("click", () => {
          yesBtn.disabled = true;
          yesBtn.textContent = "移動中…";
          const moved = openFoodModifierShelf(profile.group, targetKey);
          if (moved) {
            setTimeout(() => { box.style.display = "none"; }, 180);
          } else {
            sub.textContent = "連動棚の準備待ちです。食べ物・飲み物欄を開いてから、もう一度「はい」を押してください。";
            yesBtn.disabled = false;
            yesBtn.textContent = profile.group === "drink"
              ? "はい：フレーバーへ"
              : profile.group === "onigiri" ? "はい：おにぎり仕上げへ" : "はい：トッピングへ";
          }
        });

        actions.appendChild(noBtn);
        actions.appendChild(yesBtn);

        if (sizeProfile && sizeProfile.mode) {
          const sizeMeta = FOOD_SIZE_MODE_META[sizeProfile.mode] || FOOD_SIZE_MODE_META.portion;
          const sizeBtn = document.createElement("button");
          sizeBtn.type = "button";
          sizeBtn.textContent = `📏 ${sizeMeta.label}へ`;
          sizeBtn.style.cssText = "border:1px solid #d97706; background:#fef3c7; color:#78350f; border-radius:999px; padding:6px 10px; font-weight:800; flex:1 1 130px;";
          sizeBtn.addEventListener("click", () => {
            sizeBtn.disabled = true;
            sizeBtn.textContent = "移動中…";
            const moved = openFoodSizeShelf(sizeProfile.mode);
            if (moved) {
              setTimeout(() => { box.style.display = "none"; }, 180);
            } else {
              sub.textContent = "サイズ棚の準備待ちです。食べ物・飲み物欄を開いてから、もう一度押してください。";
              sizeBtn.disabled = false;
              sizeBtn.textContent = `📏 ${sizeMeta.label}へ`;
            }
          });
          actions.appendChild(sizeBtn);
        }

        box.appendChild(msg);
        box.appendChild(sub);
        box.appendChild(actions);
      };

      // 丼物特化コレクションの完成セット連動。
      // 既存の全体linked_ids機構は使わず、アクセサリー内のこの小コレクションだけで静かに状態を同期する。
      // 完成セットを切り替えた時は、前の完成セット由来で自動ONになった下位項目だけを解除する。
      const clearDonburiAutoLinks = (ownerId) => {
        if (!ownerId) return;
        section.querySelectorAll("input[data-donburi-auto-owner]").forEach(input => {
          if (input.dataset.donburiAutoOwner === ownerId) {
            input.checked = false;
            delete input.dataset.donburiAutoOwner;
          }
        });
      };

      const openDonburiLinkedShelves = (linkedIds) => {
        const wanted = new Set(Array.isArray(linkedIds) ? linkedIds : []);
        if (!wanted.size) return;
        const linkedInputs = Array.from(section.querySelectorAll("input[data-donburi-item-id]"))
          .filter(input => wanted.has(input.dataset.donburiItemId));

        const shelves = new Set();
        linkedInputs.forEach(input => {
          let details = input.closest("details");
          while (details) {
            shelves.add(details);
            details = details.parentElement ? details.parentElement.closest("details") : null;
          }
        });
        shelves.forEach(details => { details.open = true; });

        const focus = linkedInputs[0] && linkedInputs[0].closest("details");
        if (!focus) return;
        try {
          const oldOutline = focus.style.outline;
          const oldOffset = focus.style.outlineOffset;
          const oldShadow = focus.style.boxShadow;
          focus.style.outline = "3px solid rgba(217, 119, 6, 0.72)";
          focus.style.outlineOffset = "2px";
          focus.style.boxShadow = "0 0 14px rgba(245, 158, 11, 0.35)";
          setTimeout(() => {
            focus.style.outline = oldOutline;
            focus.style.outlineOffset = oldOffset;
            focus.style.boxShadow = oldShadow;
          }, 1600);
        } catch (_) {}
      };

      const applyDonburiCompleteLinks = (completeCb) => {
        if (!completeCb || !completeCb.checked) return;
        const ownerId = completeCb.dataset.donburiItemId || "";
        if (!ownerId) return;

        let linkedIds = [];
        try {
          linkedIds = JSON.parse(completeCb.dataset.donburiLinkedIds || "[]");
        } catch (_) {
          linkedIds = [];
        }
        if (!Array.isArray(linkedIds)) linkedIds = [];

        const previousFlag = window.__linkedIdsApplying;
        window.__linkedIdsApplying = true;
        try {
          // 完成セットはこのコレクション内で排他。以前のセット由来だけを外す。
          section.querySelectorAll('input[data-donburi-complete="true"]').forEach(other => {
            if (other === completeCb) return;
            const otherOwner = other.dataset.donburiItemId || "";
            if (other.checked) other.checked = false;
            clearDonburiAutoLinks(otherOwner);
          });

          // 同じ完成セットを切り直した時の残骸を除去してから再構築する。
          clearDonburiAutoLinks(ownerId);

          linkedIds.forEach(id => {
            const target = Array.from(section.querySelectorAll("input[data-donburi-item-id]"))
              .find(input => input.dataset.donburiItemId === id);
            if (!target) return;
            // すでにユーザーが手動ONしていた項目は、完成セット由来として所有しない。
            if (!target.checked) {
              target.checked = true;
              target.dataset.donburiAutoOwner = ownerId;
            }
          });
        } finally {
          window.__linkedIdsApplying = previousFlag;
        }

        openDonburiLinkedShelves(linkedIds);
      };

      // ピザ特化コレクションの完成セット連動。
      // 丼物と同じく、このコレクション内の自動ONだけを切り替え、手動で選んだ下位項目は残す。
      const clearPizzaAutoLinks = (ownerId) => {
        if (!ownerId) return;
        section.querySelectorAll("input[data-pizza-auto-owner]").forEach(input => {
          if (input.dataset.pizzaAutoOwner === ownerId) {
            input.checked = false;
            delete input.dataset.pizzaAutoOwner;
          }
        });
      };

      const openPizzaLinkedShelves = (linkedIds) => {
        const wanted = new Set(Array.isArray(linkedIds) ? linkedIds : []);
        if (!wanted.size) return;
        const linkedInputs = Array.from(section.querySelectorAll("input[data-pizza-item-id]"))
          .filter(input => wanted.has(input.dataset.pizzaItemId));

        const shelves = new Set();
        linkedInputs.forEach(input => {
          let details = input.closest("details");
          while (details) {
            shelves.add(details);
            details = details.parentElement ? details.parentElement.closest("details") : null;
          }
        });
        shelves.forEach(details => { details.open = true; });

        const focus = linkedInputs[0] && linkedInputs[0].closest("details");
        if (!focus) return;
        try {
          const oldOutline = focus.style.outline;
          const oldOffset = focus.style.outlineOffset;
          const oldShadow = focus.style.boxShadow;
          focus.style.outline = "3px solid rgba(217, 119, 6, 0.72)";
          focus.style.outlineOffset = "2px";
          focus.style.boxShadow = "0 0 14px rgba(245, 158, 11, 0.35)";
          setTimeout(() => {
            focus.style.outline = oldOutline;
            focus.style.outlineOffset = oldOffset;
            focus.style.boxShadow = oldShadow;
          }, 1600);
        } catch (_) {}
      };

      const applyPizzaCompleteLinks = (completeCb) => {
        if (!completeCb || !completeCb.checked) return;
        const ownerId = completeCb.dataset.pizzaItemId || "";
        if (!ownerId) return;

        let linkedIds = [];
        try {
          linkedIds = JSON.parse(completeCb.dataset.pizzaLinkedIds || "[]");
        } catch (_) {
          linkedIds = [];
        }
        if (!Array.isArray(linkedIds)) linkedIds = [];

        const previousFlag = window.__linkedIdsApplying;
        window.__linkedIdsApplying = true;
        try {
          section.querySelectorAll('input[data-pizza-complete="true"]').forEach(other => {
            if (other === completeCb) return;
            const otherOwner = other.dataset.pizzaItemId || "";
            if (other.checked) other.checked = false;
            clearPizzaAutoLinks(otherOwner);
          });

          clearPizzaAutoLinks(ownerId);

          linkedIds.forEach(id => {
            const target = Array.from(section.querySelectorAll("input[data-pizza-item-id]"))
              .find(input => input.dataset.pizzaItemId === id);
            if (!target) return;
            if (!target.checked) {
              target.checked = true;
              target.dataset.pizzaAutoOwner = ownerId;
            }
          });
        } finally {
          window.__linkedIdsApplying = previousFlag;
        }

        openPizzaLinkedShelves(linkedIds);
      };

      const renderItems = (catName, catData, mount) => {
        const content = document.createElement("div");
        content.className = "accessory-option-grid";
        if (catData.accessoryAkashic) content.classList.add("accessory-akashic-options");
        content.style.marginTop = "6px";
        content.style.gap = "6px";

        catData.items.forEach(item => {
          const label = document.createElement("label");
          label.className = "accessory-option-card";
          if (catData.accessoryAkashic) label.classList.add("accessory-akashic-card");
          label.style.border = "1px solid #ddd";
          label.style.padding = "4px 8px";
          label.style.borderRadius = "6px";
          label.style.fontSize = "0.85em";
          label.style.display = "flex";
          label.style.alignItems = "center";
          label.style.cursor = "pointer";
          label.style.background = "#fff";

          const cb = document.createElement("input");
          cb.type = "checkbox";
          if (item.id) cb.id = item.id;
          cb.dataset.en = item.en;
          cb.dataset.ja = item.ja || "";
          if (item.outputChannel) cb.dataset.outputChannel = item.outputChannel;
          if (item.promptIntent) cb.dataset.promptIntent = item.promptIntent;
          if (item.description) cb.dataset.description = item.description;
          if (item.accessoryAkashicGroup) cb.dataset.accessoryAkashicGroup = item.accessoryAkashicGroup;
          if (item.accessoryAkashicCategory) cb.dataset.accessoryAkashicCategory = item.accessoryAkashicCategory;

          if (item.collection_id === "donburi-v1" && item.id) {
            cb.dataset.donburiItemId = item.id;
            cb.dataset.donburiCollectionId = item.collection_id;
            cb.dataset.donburiCollectionRole = item.collection_role || "";
            if (Array.isArray(item.linked_ids) && item.linked_ids.length) {
              cb.dataset.donburiComplete = "true";
              cb.dataset.donburiLinkedIds = JSON.stringify(item.linked_ids);
            }
          }

          if (item.collection_id === "pizza-v1" && item.id) {
            cb.dataset.pizzaItemId = item.id;
            cb.dataset.pizzaCollectionId = item.collection_id;
            cb.dataset.pizzaCollectionRole = item.collection_role || "";
            if (Array.isArray(item.linked_ids) && item.linked_ids.length) {
              cb.dataset.pizzaComplete = "true";
              cb.dataset.pizzaLinkedIds = JSON.stringify(item.linked_ids);
            }
          }

          const foodProfile = getFoodSizeProfile(catName, catData, item);
          const decorationProfile = getFoodDecorationProfile(catName, catData, item);

          if (catData.foodModifierGroup) {
            cb.dataset.type = "foodModifier";
            cb.dataset.foodModifierGroup = catData.foodModifierGroup;
            cb.dataset.foodModifierRole = item.foodModifierRole || "topping";
            cb.dataset.foodModifierValue = item.foodModifierValue || item.en || "";
            cb.title = "選択した料理・デザート・飲み物へ合成して出力します";
          } else if (catData.foodSizeMode) {
            cb.dataset.type = "foodSize";
            cb.dataset.foodSizeMode = catData.foodSizeMode;
            cb.dataset.foodSizePreset = item.foodSizePreset || "";
            cb.title = "選択中の対応食べ物・飲み物へ合成して出力します";
          } else if (foodProfile || decorationProfile) {
            const profile = foodProfile || { mode: "portion", kind: "" };
            cb.dataset.type = "normal";
            cb.dataset.foodTarget = "true";
            cb.dataset.foodSizeTargetMode = profile.mode;
            cb.dataset.foodSizeTargetKind = profile.kind || "";
            cb.dataset.foodLabel = item.ja || "";
            if (decorationProfile) {
              cb.dataset.foodDecorationTarget = "true";
              cb.dataset.foodDecorationGroup = decorationProfile.group;
              cb.dataset.foodDecorationTargetKey = `${catName}::${item.en}`;
              cb.dataset.foodDrinkBaseType = decorationProfile.drinkBaseType || "";
            }
          } else if (catData.isAction) {
            cb.dataset.type = "action";
          } else if (catData.isTarget) {
            cb.dataset.type = "target";
          } else {
            cb.dataset.type = "normal";
          }

          if (catData.foodModifierGroup) {
            cb.addEventListener("change", ev => {
              if (!cb.checked) return;
              if (isFoodSizeShortcutSuppressed(ev)) return;
              const group = cb.dataset.foodModifierGroup;
              const targetKey = getActiveFoodModifierTarget(group);
              if (targetKey) {
                bindFoodModifierToTarget(cb, group, targetKey);
                refreshFoodModifierTargetControls();
              } else {
                cb.dataset.foodApplyTo = "";
                cb.dataset.foodModifierUnbound = "true";
                showFoodModifierTargetPicker(group, cb, item.ja || "選択した項目");
              }
            });
          } else if (catData.foodSizeMode) {
            cb.addEventListener("change", () => {
              // 同じ役割のサイズは排他。小盛りとテラ盛りを同時に出さない。
              if (!cb.checked) return;
              const mode = cb.dataset.foodSizeMode;
              section.querySelectorAll(`input[data-food-size-mode="${mode}"]`).forEach(other => {
                if (other !== cb) other.checked = false;
              });
            });
          } else if (foodProfile || decorationProfile) {
            cb.addEventListener("change", ev => {
              refreshFoodModifierTargetControls();
              if (!cb.checked || isFoodSizeShortcutSuppressed(ev)) return;
              if (decorationProfile) {
                showFoodDecorationShortcut(item, decorationProfile, foodProfile, cb);
              } else if (foodProfile) {
                showFoodSizeShortcut(item, foodProfile);
              }
            });
          }

          if (cb.dataset.donburiComplete === "true") {
            cb.addEventListener("change", ev => {
              if (isFoodSizeShortcutSuppressed(ev)) return;
              if (cb.checked) {
                applyDonburiCompleteLinks(cb);
              } else {
                clearDonburiAutoLinks(cb.dataset.donburiItemId || "");
              }
            });
          } else if (cb.dataset.donburiItemId) {
            cb.addEventListener("change", ev => {
              // 完成セットが静かにONにした項目をユーザーが触った時点で、手動選択へ引き継ぐ。
              if (ev && ev.isTrusted && cb.dataset.donburiAutoOwner) {
                delete cb.dataset.donburiAutoOwner;
              }
            });
          }

          if (cb.dataset.pizzaComplete === "true") {
            cb.addEventListener("change", ev => {
              if (isFoodSizeShortcutSuppressed(ev)) return;
              if (cb.checked) {
                applyPizzaCompleteLinks(cb);
              } else {
                clearPizzaAutoLinks(cb.dataset.pizzaItemId || "");
              }
            });
          } else if (cb.dataset.pizzaItemId) {
            cb.addEventListener("change", ev => {
              // 完成セットが静かにONにした項目をユーザーが触った時点で、手動選択へ引き継ぐ。
              if (ev && ev.isTrusted && cb.dataset.pizzaAutoOwner) {
                delete cb.dataset.pizzaAutoOwner;
              }
            });
          }

          cb.style.marginRight = "4px";
          label.appendChild(cb);
          if (item.description) {
            label.classList.add("has-description");
            const copy = document.createElement("span");
            copy.className = "accessory-option-copy";
            const title = document.createElement("span");
            title.className = "accessory-option-title";
            title.textContent = item.ja;
            const description = document.createElement("span");
            description.className = "accessory-option-description";
            description.textContent = item.description;
            copy.appendChild(title);
            copy.appendChild(description);
            label.appendChild(copy);
          } else {
            label.appendChild(document.createTextNode(item.ja));
          }
          content.appendChild(label);
        });

        mount.appendChild(content);
      };

      const renderCategory = (catName, catData, mount, opts = {}) => {
        const details = document.createElement("details");
        const fullName = opts.fullName || catName;
        styleDetails(details, opts.border || "#ddd", opts.bg);
        if (catData.accessoryAkashic) details.dataset.accessoryAkashicGroup = catData.accessoryAkashicGroup || "1";
        if (catData.foodSizeMode) details.dataset.foodSizeMode = catData.foodSizeMode;
        if (catData.foodModifierGroup) details.dataset.foodModifierGroup = catData.foodModifierGroup;

        const summary = document.createElement("summary");
        summary.textContent = shortLabel(catName);
        summary.style.cursor = "pointer";
        summary.style.fontWeight = "bold";
        if (opts.color) summary.style.color = opts.color;
        details.appendChild(summary);

        if (catData.note) {
          const note = document.createElement("div");
          note.textContent = catData.note;
          note.style.fontSize = "0.80em";
          note.style.lineHeight = "1.35";
          note.style.color = "#7a5a20";
          note.style.margin = "6px 0 4px";
          details.appendChild(note);
        }

        if (catData.foodModifierGroup) {
          renderFoodModifierTargetControl(catData.foodModifierGroup, details);
        }

        renderItems(fullName, catData, details);
        mount.appendChild(details);
      };

      const rootDetails = (title, desc, opts = {}) => {
        const details = document.createElement("details");
        styleDetails(details, opts.border || "#ddd", opts.bg);

        const summary = document.createElement("summary");
        summary.textContent = title;
        summary.style.cursor = "pointer";
        summary.style.fontWeight = "bold";
        if (opts.color) summary.style.color = opts.color;
        details.appendChild(summary);

        if (desc) {
          const note = document.createElement("div");
          note.textContent = desc;
          note.style.fontSize = "0.82em";
          note.style.color = "#777";
          note.style.margin = "6px 0";
          details.appendChild(note);
        }
        return details;
      };

      const renderFlatGroup = (title, desc, groupEntries, opts = {}) => {
        if (!groupEntries.length) return;
        divider(title, desc, opts.titleColor || "#8a5a75");
        groupEntries.forEach(([catName, catData]) => {
          renderCategory(catName, catData, section, opts);
        });
      };

      const buildEntryTree = (groupEntries) => {
        const root = {};
        groupEntries.forEach(([fullKey, cat]) => {
          const parts = fullKey.split(" / ").slice(1);
          let node = root;
          parts.forEach((part, idx) => {
            node[part] = node[part] || { __children: {} };
            if (idx === parts.length - 1) {
              node[part].__cat = cat;
              node[part].__fullKey = fullKey;
            }
            node = node[part].__children;
          });
        });
        return root;
      };

      const renderEntryTree = (tree, mount, opts = {}) => {
        Object.entries(tree).forEach(([label, node]) => {
          const hasChildren = node.__children && Object.keys(node.__children).length > 0;
          if (node.__cat && !hasChildren) {
            renderCategory(label, node.__cat, mount, { ...opts, fullName: node.__fullKey || label });
            return;
          }

          const details = document.createElement("details");
          styleDetails(details, opts.border || "#ddd", opts.bg);
          if (node.__cat && node.__cat.accessoryAkashic) {
            details.dataset.accessoryAkashicGroup = node.__cat.accessoryAkashicGroup || "1";
          }
          if (node.__cat && node.__cat.foodSizeMode) details.dataset.foodSizeMode = node.__cat.foodSizeMode;
          if (node.__cat && node.__cat.foodModifierGroup) details.dataset.foodModifierGroup = node.__cat.foodModifierGroup;

          const summary = document.createElement("summary");
          summary.textContent = label;
          summary.style.cursor = "pointer";
          summary.style.fontWeight = "bold";
          if (opts.color) summary.style.color = opts.color;
          details.appendChild(summary);

          if (node.__cat && node.__cat.note) {
            const note = document.createElement("div");
            note.textContent = node.__cat.note;
            note.style.fontSize = "0.80em";
            note.style.lineHeight = "1.35";
            note.style.color = "#7a5a20";
            note.style.margin = "6px 0 4px";
            details.appendChild(note);
          }

          if (node.__cat && node.__cat.foodModifierGroup) {
            renderFoodModifierTargetControl(node.__cat.foodModifierGroup, details);
          }

          if (node.__cat && Array.isArray(node.__cat.items) && node.__cat.items.length > 0) {
            renderItems(node.__fullKey || label, node.__cat, details);
          }

          renderEntryTree(node.__children || {}, details, opts);
          mount.appendChild(details);
        });
      };

      const byNames = (names) => entries.filter(([name]) => names.includes(name));
      const consumedNames = new Set();

      const akashicEntries = entries.filter(([name]) => name.startsWith(ACCESSORY_AKASHIC_PREFIX));
      akashicEntries.forEach(([name]) => consumedNames.add(name));

      const basicNames = [
        "👒 頭部の装飾・帽子 (Headgear)",
        "💎 ジュエリー・装身具 (Jewelry)",
        "🧣 服飾小物・背部 (Clothing Acc)"
      ];
      const handheldNames = [
        "👜 手持ち小物 (Handheld)",
        "🧸 ぬいぐるみ (Plushies)",
        "🎸 音楽・趣味・その他 (Hobbies)"
      ];
      const treasureNames = [
        "💰 財宝・金塊 (Treasure & Gold Bars)",
        "💎 宝石・ジュエル (Gems & Jewels)",
        "🪙 コイン・貨幣 (Coins & Currency)",
        "💴 紙幣・札束 (Banknotes & Cash)",
        "📦 宝箱・保管容器 (Treasure Chests & Storage)",
        "💼 アタッシュケース・現金ケース (Attaché & Money Cases)",
        "🛒 運搬・台車 (Carts & Transport)"
      ];

      const basicEntries = byNames(basicNames);
      const handheldEntries = byNames(handheldNames);
      const treasureEntries = byNames(treasureNames);
      [...basicNames, ...handheldNames, ...treasureNames].forEach(name => consumedNames.add(name));

      const foodEntries = [
        // 特化コレクションは通常の料理棚より先に置き、深掘り用途を見つけやすくする。
        ...entries.filter(([n]) => n.startsWith("🍱 食べ物・飲み物 / 🍚 丼物特化コレクション")),
        ...entries.filter(([n]) => n.startsWith("🍱 食べ物・飲み物 / 🍕 ピザ特化コレクション")),
        ...entries.filter(([n]) => n.startsWith("🍱 食べ物・飲み物 / 🍓 トッピング・フィリング /")),
        ...entries.filter(([n]) => n.startsWith("🍱 食べ物・飲み物 / 🍙 おにぎり・和の仕上げ /")),
        ...entries.filter(([n]) => n.startsWith("🍱 食べ物・飲み物 / 🥤 ドリンクフレーバー /")),
        ...entries.filter(([n]) => n === "🍱 食べ物・飲み物 / 🍽 定番完成メニュー"),
        ...entries.filter(([n]) => n.startsWith("🍱 食べ物・飲み物 / 📏 サイズ・量カスタマイズ /")),
        ...entries.filter(([n]) => n.startsWith("🍱 食べ物・飲み物 /") &&
          !n.startsWith("🍱 食べ物・飲み物 / 🍚 丼物特化コレクション") &&
          !n.startsWith("🍱 食べ物・飲み物 / 🍕 ピザ特化コレクション") &&
          !n.startsWith("🍱 食べ物・飲み物 / 🍓 トッピング・フィリング /") &&
          !n.startsWith("🍱 食べ物・飲み物 / 🍙 おにぎり・和の仕上げ /") &&
          !n.startsWith("🍱 食べ物・飲み物 / 🥤 ドリンクフレーバー /") &&
          n !== "🍱 食べ物・飲み物 / 🍽 定番完成メニュー" &&
          !n.startsWith("🍱 食べ物・飲み物 / 📏 サイズ・量カスタマイズ /"))
      ];
      const weaponEntries = entries.filter(([n]) => n.startsWith("⚔️ 武器・兵器 /"));
      const itemActionEntries = entries.filter(([n]) => n.startsWith("🤲 アイテムの状態・動作"));
      [...foodEntries, ...weaponEntries, ...itemActionEntries].forEach(([name]) => consumedNames.add(name));

      const otherEntries = entries.filter(([name]) => !consumedNames.has(name));

      if (akashicEntries.length) {
        divider("ACCESSORY ARSENAL / 装備アカシックレコード", "一発セットと部位別装備を、初期閉じ・スマホ一列で探す", "#1f7772");
        const akashicRoot = rootDetails(
          `💠 装備アカシックを開く　${ACCESSORY_AKASHIC_AUDIT.added}点`,
          "サクッと決める時は『おまかせ装備セット』、細かく選ぶ時は頭・首・腕・腰・背中・道具・特殊・素材から選びます。既存棚は消していません。",
          { border: "#8fcfc7", bg: "#f3fffd", color: "#185e5b" }
        );
        akashicRoot.classList.add("accessory-akashic-root");
        renderEntryTree(buildEntryTree(akashicEntries), akashicRoot, {
          border: "#b8ded9",
          bg: "#fbfffe",
          color: "#205f5c"
        });
        section.appendChild(akashicRoot);
      }

      renderFlatGroup("💎 定番アクセサリ", "旧来の汎用語を互換ショートカットとして維持", basicEntries, {
        titleColor: "#a3477a",
        border: "#ead2e1",
        bg: "#fff8fc",
        color: "#8a2d66"
      });

      renderFlatGroup("🤲 手持ち・趣味道具", "手に持つ小物、ぬいぐるみ、楽器・趣味用品", handheldEntries, {
        titleColor: "#8a5a20",
        border: "#eadcc8",
        bg: "#fffaf2",
        color: "#744818"
      });

      renderFlatGroup("💰 財宝・貨幣・運搬", "宝石・現金・宝箱・ケース・台車", treasureEntries, {
        titleColor: "#987000",
        border: "#eadfbc",
        bg: "#fffdf4",
        color: "#7a5a00"
      });

      if (foodEntries.length) {
        divider("🍱 食べ物・飲み物", "料理・飲み物・食材・サイズ・食べ物演出", "#8a6420");
        const foodWrap = rootDetails("🍱 食べ物・飲み物を開く", "料理・飲み物・食材に加え、サイズ・量を食べ物へ連動できる棚", {
          border: "#eadcc8",
          bg: "#fffaf2",
          color: "#744818"
        });
        renderEntryTree(buildEntryTree(foodEntries), foodWrap, {
          border: "#eadcc8",
          bg: "#fffdf8",
          color: "#744818"
        });
        section.appendChild(foodWrap);
      }

      if (weaponEntries.length) {
        divider("⚔️ 武器・兵器", "武器種・防具・SF武器・武器状態", "#3353a4");
        const weaponRoot = rootDetails("⚔️ 武器・兵器を開く", "武器種と武器の見た目を分離した棚", {
          border: "#bdd0f0",
          bg: "#f7faff",
          color: "#244899"
        });
        renderEntryTree(buildEntryTree(weaponEntries), weaponRoot, {
          border: "#bdd0f0",
          bg: "#f8fbff",
          color: "#244899"
        });
        section.appendChild(weaponRoot);
      }

      if (itemActionEntries.length) {
        divider("🤲 状態・動作", "持つ・運ぶ・置くなど、アイテムの扱い方", "#666");
        const actionRoot = rootDetails("🤲 アイテム状態・動作を開く", "小物そのものではなく、持ち方・置き方・動作を指定", {
          border: "#d8d8d8",
          bg: "#fafafa",
          color: "#555"
        });
        itemActionEntries.forEach(([k, cat]) => renderCategory(k.split(" / ").pop(), cat, actionRoot, {
          border: "#d8d8d8",
          bg: "#fff",
          color: "#555"
        }));
        section.appendChild(actionRoot);
      }

      renderFlatGroup("📦 その他小物", "既存分類に入らない予備棚", otherEntries, {
        titleColor: "#777",
        border: "#ddd",
        bg: "#fff",
        color: "#555"
      });

      if (IS_UNLOCKED) {
        divider("🔞 R-18 / Secret", "成人向けの小物・拘束具・特殊装飾・動作", "#b00050");
        const secretRoot = rootDetails("🔒 R-18 小物を開く", "通常小物と混ざらないよう末尾に分離", {
          border: "#ffcccc",
          bg: "#fff7f9",
          color: "#b00050"
        });

        const secretGroups = [
          {
            title: "🧸 アイテム・生物系",
            names: [
              "🧸 R-18: おもちゃ・アイテム (Adult Toys)",
              "🐙 R-18: 触手・スライム・生物 (Tentacles & Slime)"
            ]
          },
          {
            title: "⛓ 拘束・装飾系",
            names: [
              "⛓️ R-18: 拘束具・BDSM (Restraints & BDSM)",
              "🔞 R-18: 特殊装飾・印 (Marks & Piercings)"
            ]
          },
          {
            title: "🤲 動作・状態",
            names: [
              "🤲 R-18: 動作・状態 (Secret Actions)"
            ]
          }
        ];

        secretGroups.forEach(group => {
          const groupRoot = rootDetails(group.title, "", {
            border: "#ffd6e0",
            bg: "#fff",
            color: "#a00048"
          });
          group.names.forEach(name => {
            if (SECRET_CATEGORIES[name]) {
              renderCategory(name, SECRET_CATEGORIES[name], groupRoot, {
                border: "#ffd6e0",
                bg: "#fff",
                color: "#a00048"
              });
            }
          });
          secretRoot.appendChild(groupRoot);
        });

        Object.entries(SECRET_CATEGORIES).forEach(([name, data]) => {
          const alreadyGrouped = secretGroups.some(group => group.names.includes(name));
          if (!alreadyGrouped) {
            renderCategory(name, data, secretRoot, {
              border: "#ffd6e0",
              bg: "#fff",
              color: "#a00048"
            });
          }
        });

        section.appendChild(secretRoot);
      }

      parent.appendChild(section);
    },

    getTags() {
      const normalTags = []; const targetTags = []; const actionTags = [];
      const foodTargets = []; const foodModifiers = []; const foodSizeByMode = Object.create(null);

      document.querySelectorAll(".accessories-section input:checked").forEach(cb => {
        const type = cb.dataset.type;
        const val = cb.dataset.en;

        // サイズ指定は単独では出力しない。対応する食べ物・飲み物だけへ合成する。
        if (cb.dataset.foodSizeMode && cb.dataset.foodSizePreset) {
          if (!foodSizeByMode[cb.dataset.foodSizeMode]) {
            foodSizeByMode[cb.dataset.foodSizeMode] = cb.dataset.foodSizePreset;
          }
          return;
        }

        // トッピング・フィリング・フレーバーも単独では出さない。選んだ適用先だけへ合成する。
        if (cb.dataset.foodModifierGroup) {
          foodModifiers.push({
            group: cb.dataset.foodModifierGroup,
            role: cb.dataset.foodModifierRole || "topping",
            value: cb.dataset.foodModifierValue || val,
            applyTo: cb.dataset.foodApplyTo || ""
          });
          return;
        }

        if (cb.dataset.foodTarget === "true") {
          foodTargets.push({
            key: cb.dataset.foodDecorationTargetKey || "",
            value: val,
            mode: cb.dataset.foodSizeTargetMode || "portion",
            kind: cb.dataset.foodSizeTargetKind || "",
            decorationGroup: cb.dataset.foodDecorationGroup || "",
            drinkBaseType: cb.dataset.foodDrinkBaseType || ""
          });
          return;
        }

        if (type === "action") actionTags.push(val);
        else if (type === "target") targetTags.push(val);
        else normalTags.push(val);
      });

      const modifiersByTarget = Object.create(null);
      foodModifiers.forEach(modifier => {
        if (!modifier.applyTo) return;
        (modifiersByTarget[modifier.applyTo] = modifiersByTarget[modifier.applyTo] || []).push(modifier);
      });

      const finalTags = [...normalTags];
      foodTargets.forEach(food => {
        const preset = foodSizeByMode[food.mode];
        const modifiers = food.key ? modifiersByTarget[food.key] || [] : [];
        let tag;

        // 飲み物は「桃ジュース」→容量指定の順。量の語がフレーバーへ割り込まないようにする。
        if (food.decorationGroup === "drink") {
          tag = composeFoodDecorationTag(food.value, food, modifiers);
          if (preset) tag = composeFoodSizeTag(tag, food.mode, preset, food.kind);
        } else {
          tag = preset ? composeFoodSizeTag(food.value, food.mode, preset, food.kind) : food.value;
          if (food.decorationGroup === "dessert" || food.decorationGroup === "onigiri") {
            tag = composeFoodDecorationTag(tag, food, modifiers);
          }
        }
        finalTags.push(tag);
      });

      if (actionTags.length > 0 && targetTags.length > 0) {
        actionTags.forEach(action => {
          targetTags.forEach(target => {
            const suffixActions = ["in mouth", "on back", "on belt", "on head", "in pocket", "in pussy, sex", "inserted deeply", "vibrating", "constricting", "wrapping around", "covered in slime"];
            if (suffixActions.includes(action)) {
              finalTags.push(`${target} ${action}`);
            } else {
              finalTags.push(`${action} ${target}`);
            }
          });
        });
      } else {
        finalTags.push(...targetTags, ...actionTags);
      }
      return finalTags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();
})();
