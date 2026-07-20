(function () {
  "use strict";

  if (window.SHIMA_CULINARY_EXPANSION_V2) return;

  const item = (slug, ja, en, description) => ({ slug, ja, en, description: description || "" });
  const category = (group, key, title, note, items) => ({ group, key, title, note, items });
  const simpleCategory = (group, key, title, note, context, rows) => category(
    group,
    key,
    title,
    note,
    rows.map(row => item(row[0], row[1], row[2] + ", " + context))
  );

  const categories = [
    category("quick", "seasonal-japanese-menus", "🌸 四季の和献立", "季節の主菜、副菜、汁物、主食を一度で揃える。", [
      item("spring-bamboo-rice-menu", "春の筍ごはん膳", "spring Japanese meal with bamboo shoot rice, grilled Spanish mackerel, rape blossom mustard salad, and clear clam soup", "筍ごはん／鰆の塩焼き／菜の花辛子和え／蛤のすまし汁。"),
      item("hanami-picnic-menu", "花見の彩り重", "cherry blossom picnic meal with flower-shaped rice balls, teriyaki chicken, rolled omelet, and sakura mochi", "花形おにぎり／照り焼きチキン／卵焼き／桜餅。"),
      item("early-summer-ayu-menu", "初夏の鮎塩焼き膳", "early summer Japanese meal with salt-grilled sweetfish, green pea rice, chilled tofu, and red miso soup", "鮎の塩焼き／豆ごはん／冷奴／赤だし。"),
      item("summer-hiyashi-menu", "夏の冷やし麺膳", "summer Japanese meal with chilled somen, vegetable tempura, cucumber sunomono, and watermelon wedges", "冷やし素麺／夏野菜天ぷら／胡瓜酢の物／西瓜。"),
      item("eel-day-menu", "土用の鰻御膳", "midsummer Japanese meal with glazed eel rice box, clear liver soup, pickled cucumber, and chilled green tea", "鰻重／肝吸い／胡瓜漬け／冷緑茶。"),
      item("autumn-mushroom-menu", "秋のきのこ炊き込み膳", "autumn Japanese meal with mushroom mixed rice, grilled saury, simmered pumpkin, and nameko miso soup", "きのこ炊き込みごはん／秋刀魚塩焼き／南瓜煮／なめこ汁。"),
      item("moon-viewing-menu", "月見の里芋膳", "moon-viewing Japanese meal with taro rice, soy-glazed chicken, sesame spinach, and rabbit-shaped dumplings", "里芋ごはん／鶏照り焼き／青菜胡麻和え／兎形団子。"),
      item("winter-oden-menu", "冬のおでん膳", "winter Japanese meal with assorted oden, salted rice balls, spinach ohitashi, and hot roasted tea", "おでん盛り／塩むすび／青菜おひたし／熱いほうじ茶。"),
      item("new-year-osechi-menu", "正月の祝い膳", "Japanese New Year meal with osechi boxes, ozoni soup, red rice, and pickled turnip", "おせち重／雑煮／赤飯／蕪の甘酢漬け。"),
      item("snow-night-hot-menu", "雪夜のあったか膳", "snowy night Japanese meal with miso hot pot, grilled rice balls, simmered daikon, and hot yuzu tea", "味噌鍋／焼きおにぎり／大根煮／柚子茶。")
    ]),
    category("quick", "korean-complete-tables", "🇰🇷 韓国の完成食卓", "主菜、飯、汁物、パンチャンまで揃った食卓。", [
      item("bulgogi-table", "プルコギ食卓", "Korean table with bulgogi beef, steamed rice, soybean paste soup, and assorted banchan", "プルコギ／白ごはん／テンジャン汁／パンチャン盛り。"),
      item("bibimbap-table", "石焼ビビンバ食卓", "Korean table with sizzling stone-pot bibimbap, seaweed soup, kimchi, and chilled barley tea", "石焼ビビンバ／わかめスープ／白菜キムチ／麦茶。"),
      item("samgyeopsal-table", "サムギョプサル食卓", "Korean barbecue table with grilled pork belly, lettuce wraps, spicy scallion salad, and soybean paste stew", "豚バラ焼肉／包み野菜／葱和え／テンジャンチゲ。"),
      item("samgyetang-table", "参鶏湯滋養膳", "Korean restorative meal with whole chicken ginseng soup, multigrain rice, radish kimchi, and jujube tea", "参鶏湯／雑穀ごはん／大根キムチ／棗茶。"),
      item("bossam-table", "ポッサム食卓", "Korean table with sliced boiled pork, napa cabbage wraps, spicy radish salad, and rice wine cup", "茹で豚ポッサム／白菜包み／辛味大根和え／小さな飲料杯。"),
      item("dakgalbi-table", "タッカルビ食卓", "Korean table with spicy stir-fried chicken, rice cakes, lettuce salad, and cold buckwheat noodles", "タッカルビ／餅炒め／葉野菜サラダ／冷麺小鉢。"),
      item("haemul-pajeon-table", "海鮮チヂミ食卓", "Korean table with seafood scallion pancake, spicy dipping sauce, acorn jelly salad, and makgeolli-style rice drink", "海鮮チヂミ／辛味だれ／どんぐり寒天和え／米飲料。"),
      item("galbi-jjim-table", "カルビチム祝い膳", "Korean celebration table with braised beef short ribs, glass noodles, steamed rice, and colorful namul", "牛カルビ煮／春雨／白ごはん／彩りナムル。"),
      item("naengmyeon-table", "冷麺の夏食卓", "Korean summer table with chilled buckwheat noodles, sliced beef, kimchi pancakes, and iced corn tea", "冷たい蕎麦冷麺／薄切り牛肉／キムチチヂミ／冷とうもろこし茶。"),
      item("tteokbokki-snack-table", "トッポッキ軽食卓", "Korean snack table with spicy rice cakes, fish cake soup, seaweed rolls, and sweet cinnamon punch", "辛いトッポッキ／魚練り物スープ／海苔巻き揚げ／甘い桂皮飲料。")
    ]),
    category("quick", "southeast-asian-tables", "🌴 東南アジアの完成食卓", "飯麺、主菜、付け合わせ、飲み物まで地域らしく揃える。", [
      item("thai-basil-table", "タイのガパオ食卓", "Thai table with basil minced meat rice, crispy fried egg, green papaya salad, and iced lime tea", "ガパオライス／揚げ目玉焼き／青パパイヤサラダ／冷ライム茶。"),
      item("thai-curry-table", "タイのグリーンカレー食卓", "Thai table with green chicken curry, jasmine rice, shrimp cakes, and chilled lemongrass drink", "鶏グリーンカレー／ジャスミン米／海老さつま揚げ／冷レモングラス飲料。"),
      item("vietnam-pho-table", "ベトナムのフォー食卓", "Vietnamese table with beef pho, fresh spring rolls, pickled vegetables, and iced coffee", "牛肉フォー／生春巻き／甘酢野菜／ベトナム冷珈琲。"),
      item("vietnam-banh-mi-table", "バインミー昼食卓", "Vietnamese lunch with pork banh mi, green papaya salad, clear soup, and sugarcane juice", "豚肉バインミー／青パパイヤ和え／澄んだスープ／さとうきび飲料。"),
      item("malaysia-nasi-lemak-table", "ナシレマッ食卓", "Malaysian table with coconut rice, sambal, fried anchovies, boiled egg, and pulled tea", "ココナッツ飯／サンバル／小魚揚げ／茹で卵とミルクティー。"),
      item("singapore-hainan-table", "海南鶏飯食卓", "Singaporean table with Hainanese chicken rice, three dipping sauces, clear broth, and cucumber salad", "海南鶏飯／三種だれ／澄んだ鶏スープ／胡瓜サラダ。"),
      item("indonesia-rendang-table", "ルンダン食卓", "Indonesian table with beef rendang, turmeric rice, vegetable urap, and iced tamarind drink", "牛肉ルンダン／黄飯／野菜ココナッツ和え／冷タマリンド飲料。"),
      item("philippines-adobo-table", "フィリピンのアドボ食卓", "Filipino table with chicken adobo, garlic rice, pickled papaya, and calamansi juice", "鶏アドボ／にんにく飯／青パパイヤ漬け／カラマンシー飲料。"),
      item("myanmar-noodle-table", "ミャンマー麺食卓", "Myanmar table with coconut chicken noodles, tea leaf salad, fried fritters, and hot green tea", "ココナッツ鶏麺／発酵茶葉サラダ／豆揚げ物／温緑茶。"),
      item("laos-larb-table", "ラオスのラープ食卓", "Lao table with herb minced meat larb, sticky rice basket, grilled chicken, and papaya salad", "香草挽肉ラープ／もち米籠／鶏炭火焼き／青パパイヤサラダ。")
    ]),
    category("quick", "family-celebration-menus", "🎉 家族の祝い献立", "行事の主役料理、付け合わせ、甘味、飲み物を揃える。", [
      item("birthday-family-table", "家族の誕生日食卓", "family birthday table with decorated layer cake, roast chicken, colorful salad, and sparkling fruit punch", "飾りケーキ／ローストチキン／彩りサラダ／果実パンチ。"),
      item("child-birthday-table", "子どもの誕生日プレート", "children's birthday meal with character-shaped rice, mini hamburg steaks, star potatoes, and fruit jelly", "キャラ形ライス／ミニハンバーグ／星形ポテト／果物ゼリー。"),
      item("graduation-celebration-table", "卒業祝いの食卓", "graduation celebration table with red rice, sea bream roast, clear soup, and strawberry shortcake", "赤飯／鯛の姿焼き／すまし汁／苺ショートケーキ。"),
      item("wedding-family-banquet", "家族婚の小宴席", "intimate wedding banquet with plated fish, sliced roast beef, seasonal soup, and small wedding cake", "魚料理皿／ローストビーフ／季節スープ／小さな祝婚ケーキ。"),
      item("christmas-home-dinner", "家庭のクリスマス晩餐", "home Christmas dinner with roast chicken, gratin, wreath salad, and berry trifle", "ローストチキン／グラタン／輪形サラダ／ベリートライフル。"),
      item("harvest-family-feast", "収穫祭の家族膳", "harvest family feast with glazed roast, mashed root vegetables, baked squash, and spiced apple drink", "艶焼きロースト／根菜マッシュ／焼き南瓜／香辛料林檎飲料。"),
      item("new-home-party-table", "新居祝いの持ち寄り卓", "housewarming potluck with baked lasagna, deli salads, bread basket, and citrus soda", "焼きラザニア／デリサラダ盛り／パン籠／柑橘ソーダ。"),
      item("anniversary-dinner-table", "記念日の二人晩餐", "anniversary dinner with herb steak, potato gratin, candlelit salad, and chocolate mousse", "香草ステーキ／ポテトグラタン／葉物サラダ／チョコムース。"),
      item("summer-family-party", "夏休みの家族パーティー", "summer family party with grilled skewers, corn on the cob, chilled noodles, and shaved ice", "焼き串盛り／焼きとうもろこし／冷やし麺／かき氷。"),
      item("winter-reunion-table", "冬の団らん大皿卓", "winter reunion table with steaming hot pot, assorted sashimi, mixed rice, and mandarin oranges", "湯気立つ寄せ鍋／刺身盛り／炊き込みごはん／蜜柑。")
    ]),
    category("quick", "outdoor-travel-menus", "🏕️ 旅・野外の完成食", "場所に似合う携帯食、温食、飲み物まで一度で作る。", [
      item("forest-camp-breakfast", "森キャンプの朝食", "forest campsite breakfast with skillet eggs, grilled sausages, toasted bread, and enamel mug coffee", "鉄鍋卵／焼きソーセージ／炙りパン／琺瑯マグ珈琲。"),
      item("mountain-hike-lunch", "山歩きの携帯昼食", "mountain hiking lunch with stuffed sandwiches, trail mix, dried fruit, and insulated tea flask", "具入りサンド／トレイルミックス／乾燥果物／保温茶筒。"),
      item("beach-picnic-menu", "浜辺のピクニック", "beach picnic with seafood wraps, tropical fruit cups, salted chips, and chilled citrus water", "魚介ラップ／南国果物杯／塩味チップス／冷柑橘水。"),
      item("lakeside-barbecue-menu", "湖畔のバーベキュー", "lakeside barbecue with grilled trout, vegetable skewers, foil potatoes, and berry lemonade", "鱒の炭火焼き／野菜串／包み焼き芋／ベリーレモネード。"),
      item("train-window-bento", "車窓を楽しむ駅弁", "train journey meal with regional bento, bottled green tea, wrapped sweets, and wooden chopsticks", "郷土駅弁／瓶緑茶／包み菓子／割り箸。"),
      item("road-trip-diner-meal", "ロードトリップ食堂飯", "roadside diner meal with cheeseburger, curly fries, coleslaw, and vanilla milkshake", "チーズバーガー／巻きポテト／コールスロー／バニラシェイク。"),
      item("winter-cabin-supper", "雪山小屋の夕食", "winter cabin supper with beef stew, dark bread, baked apples, and hot cocoa", "牛肉シチュー／黒パン／焼き林檎／熱いココア。"),
      item("riverbank-fishing-lunch", "川釣りの焚火昼食", "riverbank lunch with fire-grilled fish, rice parcels, wild herb soup, and spring water", "焚火焼き魚／飯包み／野草スープ／湧水。"),
      item("festival-travel-snacks", "旅先祭りの食べ歩き", "travel festival set with grilled skewers, stuffed flatbread, candied fruit, and iced tea", "焼き串／具入り平焼きパン／飴果物／冷茶。"),
      item("desert-caravan-meal", "砂漠隊商の休息膳", "desert caravan meal with spiced rice, roasted lamb, dates, and mint tea", "香辛料飯／羊肉ロースト／乾燥棗椰子／ミント茶。")
    ]),
    category("quick", "public-institution-menus", "🏫 学校・職場・乗り物の食事", "日常の施設や移動中に出る一食分を完成形で追加。", [
      item("japanese-school-lunch", "日本の学校給食", "Japanese school lunch tray with curry rice, cabbage salad, milk carton, and fruit jelly", "給食カレー／キャベツサラダ／紙パック牛乳／果物ゼリー。"),
      item("western-school-cafeteria", "海外学校カフェテリア", "school cafeteria tray with baked pasta, steamed vegetables, bread roll, and apple juice", "焼きパスタ／温野菜／丸パン／林檎ジュース。"),
      item("university-cafeteria-meal", "大学食堂の定食", "university cafeteria meal with ginger pork, rice, miso soup, and shredded cabbage", "豚生姜焼き／白ごはん／味噌汁／千切りキャベツ。"),
      item("office-cafeteria-lunch", "社員食堂の日替わり", "office cafeteria lunch with grilled chicken, grain rice, vegetable soup, and small yogurt", "鶏グリル／穀物ごはん／野菜スープ／小ヨーグルト。"),
      item("hospital-recovery-meal", "病院の回復食", "gentle hospital recovery meal with rice porridge, steamed white fish, soft vegetables, and warm tea", "白粥／白身魚蒸し／柔らか野菜／温茶。"),
      item("airline-economy-meal", "航空機の機内食", "airline meal tray with chicken rice, bread roll, side salad, and sealed dessert cup", "鶏肉ライス／丸パン／サイドサラダ／密封デザート杯。"),
      item("night-train-dining-meal", "夜行列車の食堂車", "night train dining meal with beef stew, buttered bread, green salad, and black tea", "牛肉シチュー／バターパン／緑のサラダ／紅茶。"),
      item("convenience-store-combo", "コンビニ軽食セット", "convenience meal with two rice balls, fried chicken cup, bottled tea, and pudding", "おにぎり二個／唐揚げ杯／ボトル茶／プリン。"),
      item("factory-canteen-meal", "工場食堂の力飯", "factory canteen meal with pork cutlet, large rice bowl, miso soup, and pickled vegetables", "とんかつ／大きな飯椀／味噌汁／漬物。"),
      item("research-station-ration", "観測基地の温かい食事", "remote research station meal with shelf-stable stew, rehydrated grains, canned fruit, and hot electrolyte drink", "保存煮込み／復水穀物／缶詰果物／温電解質飲料。")
    ]),
    simpleCategory("completed", "regional-korea-v2", "🇰🇷 韓国料理・地方名物", "宮廷料理から屋台料理、滋養食まで。", "presented as an authentic Korean regional specialty in traditional tableware", [
      ["jeonju-dolsot-bibimbap", "全州石焼ビビンバ", "Jeonju stone-pot bibimbap with colorful namul, seasoned beef, egg yolk, and crisp rice crust"],
      ["andong-jjimdak", "安東チムタク", "Andong braised chicken with glass noodles, potatoes, carrots, chilies, and dark soy glaze"],
      ["suwon-galbi", "水原カルビ焼き", "Suwon grilled beef ribs with pear marinade, garlic, scallions, and charcoal marks"],
      ["busan-dwaeji-gukbap", "釜山豚肉クッパ", "Busan pork soup with sliced pork, rice, chives, salted shrimp, and milky broth"],
      ["chuncheon-dakgalbi", "春川タッカルビ", "Chuncheon spicy chicken stir-fry with cabbage, sweet potato, rice cakes, and perilla leaves"],
      ["haemul-sundubu", "海鮮スンドゥブチゲ", "spicy soft tofu stew with shrimp, clams, squid, egg, and red pepper broth"],
      ["japchae-feast", "宮廷風チャプチェ", "Korean glass noodles with beef, spinach, mushrooms, carrots, sesame oil, and egg ribbons"],
      ["bossam-kimchi-plate", "ポッサムと包みキムチ", "sliced boiled pork with stuffed kimchi, salted cabbage, garlic, and fermented shrimp sauce"],
      ["gwangjang-bindaetteok", "緑豆チヂミ", "crispy mung bean pancake with pork, bean sprouts, kimchi, and onion dipping sauce"],
      ["ssiat-hotteok", "種入りホットク", "Busan-style hotteok filled with brown sugar, sunflower seeds, pumpkin seeds, and chopped nuts"]
    ]),
    simpleCategory("completed", "regional-thailand-v2", "🇹🇭 タイ料理・地方名物", "香草、辛味、酸味、甘味の輪郭を料理別に。", "served as an authentic Thai specialty with fresh herbs and regional garnishes", [
      ["tom-yum-goong", "トムヤムクン", "hot and sour shrimp soup with lemongrass, galangal, kaffir lime leaves, mushrooms, and chili oil"],
      ["green-curry-chicken", "鶏のグリーンカレー", "Thai green curry with chicken, eggplant, coconut milk, basil, and jasmine rice"],
      ["pad-thai-shrimp", "海老パッタイ", "stir-fried rice noodles with shrimp, egg, tofu, bean sprouts, peanuts, and lime"],
      ["khao-soi-chiang-mai", "チェンマイ・カオソーイ", "northern Thai curry noodles with chicken, coconut broth, crisp noodles, pickled mustard greens, and shallots"],
      ["massaman-beef", "牛肉マッサマンカレー", "slow-cooked beef massaman curry with potatoes, peanuts, coconut milk, cinnamon, and tamarind"],
      ["khao-man-gai", "カオマンガイ", "poached chicken over fragrant rice with ginger soybean sauce, cucumber, cilantro, and clear broth"],
      ["som-tam-pu", "青パパイヤ蟹サラダ", "pounded green papaya salad with salted crab, tomatoes, long beans, lime, and chilies"],
      ["larb-moo-isan", "イサーン風豚ラープ", "minced pork larb with toasted rice powder, mint, shallots, lime, and chilies"],
      ["boat-noodles", "濃厚舟麺", "Thai boat noodles with dark aromatic broth, sliced beef, meatballs, herbs, and bean sprouts"],
      ["mango-sticky-rice", "マンゴーもち米", "ripe mango with coconut sticky rice, salted coconut cream, and toasted mung beans"]
    ]),
    simpleCategory("completed", "regional-india-v2", "🇮🇳 インド料理・地方名物", "北から南まで、香辛料と主食の違いを広く。", "served as an authentic Indian regional dish with characteristic spices and accompaniments", [
      ["butter-chicken-delhi", "デリー風バターチキン", "tandoori chicken pieces in creamy tomato butter sauce with fenugreek and naan"],
      ["hyderabadi-biryani", "ハイデラバード式ビリヤニ", "layered basmati biryani with spiced mutton, saffron, fried onions, mint, and raita"],
      ["palak-paneer", "パラクパニール", "paneer cheese cubes in vivid spinach curry with ginger, garlic, cream, and cumin"],
      ["masala-dosa", "南インドのマサラドーサ", "large crisp rice-lentil crepe filled with spiced potatoes, served with sambar and coconut chutney"],
      ["chole-bhature", "チョーレー・バトゥーレ", "spiced chickpea curry with puffed fried bread, pickled onion, lemon, and green chili"],
      ["rajasthani-thali", "ラージャスターン・ターリー", "metal thali with dal baati churma, gatte curry, millet flatbread, chutney, and sweets"],
      ["kashmiri-rogan-josh", "カシミール風ローガンジョシュ", "aromatic lamb curry with Kashmiri chili, fennel, cardamom, yogurt, and steamed rice"],
      ["goan-fish-curry", "ゴア風魚カレー", "coastal fish curry with coconut, tamarind, red chilies, coriander, and rice"],
      ["idli-sambar-set", "イドゥリとサンバル", "steamed rice cakes with lentil vegetable stew, coconut chutney, tomato chutney, and curry leaves"],
      ["gulab-jamun-bowl", "グラブジャムン", "warm milk-solid dumplings soaked in rose cardamom syrup with pistachios and saffron"]
    ]),
    simpleCategory("completed", "regional-himalaya-v2", "🏔️ ヒマラヤ料理", "ネパール、チベット、ブータンの高地食文化。", "presented as a Himalayan regional specialty with rustic highland tableware", [
      ["nepal-dal-bhat", "ネパールのダルバート", "Nepali platter with lentil soup, steamed rice, vegetable curry, achar pickles, and leafy greens"],
      ["buff-momo", "ネパール式モモ", "steamed crescent dumplings filled with seasoned buffalo meat, served with tomato sesame achar"],
      ["thukpa-noodle-soup", "高地のトゥクパ", "Tibetan noodle soup with vegetables, sliced meat, scallions, garlic, and warming broth"],
      ["sel-roti-set", "セルロティ朝食", "ring-shaped Nepali rice bread with potato curry, yogurt, spiced tea, and fruit"],
      ["newari-samay-baji", "ネワールのサマエバジ", "Newari ceremonial platter with beaten rice, spiced meat, black soybeans, egg, and pickles"],
      ["bhutan-ema-datshi", "ブータンのエマダツィ", "Bhutanese chili and cheese stew with red rice, fern vegetables, and cucumber salad"],
      ["phaksha-paa", "豚肉と大根のパクシャパ", "Bhutanese pork stew with dried chilies, radish, ginger, and red rice"],
      ["tibetan-shapta", "チベット風シャプタ", "stir-fried sliced beef with chilies, onions, tomatoes, scallions, and steamed tingmo bread"],
      ["tingmo-stew-set", "ティンモと高地煮込み", "spiral steamed Tibetan bread with yak meat stew, root vegetables, and pickled greens"],
      ["khapse-festival", "チベット祝祭菓子カプセ", "assorted crisp fried festival pastries in braided and flower shapes with butter tea"]
    ]),
    simpleCategory("completed", "regional-levant-v2", "🫒 レバント・中東料理", "豆、香草、平焼きパン、炭火肉を鮮やかに。", "served as a Levantine and Middle Eastern specialty on shared ceramic plates", [
      ["hummus-mezze", "フムスのメゼ盛り", "creamy chickpea hummus with olive oil, paprika, whole chickpeas, parsley, and warm pita"],
      ["falafel-platter", "ファラフェルプレート", "crisp herb falafel with tahini, tomato cucumber salad, pickles, and flatbread"],
      ["chicken-shawarma", "鶏シャワルマ", "spit-roasted spiced chicken with garlic sauce, pickles, fries, and saj bread"],
      ["kibbeh-assortment", "キッベ盛り合わせ", "fried bulgur shells stuffed with lamb and pine nuts, served with yogurt and herbs"],
      ["fattoush-salad", "ファットゥーシュ", "crisp bread salad with tomato, cucumber, radish, herbs, sumac, and pomegranate dressing"],
      ["mansaf-jordan", "ヨルダンのマンサフ", "lamb cooked in jameed yogurt sauce over rice and flatbread with almonds and parsley"],
      ["maqluba-pot", "マクルーバの返し盛り", "upside-down rice tower layered with eggplant, cauliflower, chicken, nuts, and yogurt"],
      ["musakhan", "パレスチナのムサッハン", "sumac-roasted chicken over taboon bread with caramelized onions, pine nuts, and olive oil"],
      ["tabbouleh-herb-salad", "香草たっぷりタブーリ", "parsley and bulgur salad with mint, tomatoes, scallions, lemon, and olive oil"],
      ["knafeh-cheese", "チーズ入りクナーファ", "warm shredded pastry with soft cheese, orange blossom syrup, pistachios, and crisp golden crust"]
    ]),
    simpleCategory("completed", "regional-turkey-v2", "🇹🇷 トルコ料理", "炭火、煮込み、粉物、甘味を食堂から宮廷まで。", "presented as an authentic Turkish specialty with copper and ceramic serving ware", [
      ["iskender-kebab", "イスケンデルケバブ", "sliced doner meat over pide bread with tomato sauce, melted butter, grilled pepper, and yogurt"],
      ["karisik-pide", "トルコ風ピデ盛り", "boat-shaped baked pide with minced meat, cheese, egg, peppers, and blistered crust"],
      ["lahmacun-herbs", "香草添えラフマジュン", "thin crisp flatbread with spiced minced lamb, tomato, parsley, lemon, and onions"],
      ["kayseri-manti", "カイセリ式マンティ", "tiny Turkish dumplings with garlic yogurt, paprika butter, dried mint, and sumac"],
      ["imam-bayildi", "茄子のイマムバユルドゥ", "olive-oil braised eggplant stuffed with onions, tomatoes, garlic, parsley, and lemon"],
      ["menemen-skillet", "メネメン鉄鍋", "soft scrambled eggs with tomatoes, green peppers, butter, spices, and crusty bread"],
      ["kuru-fasulye-pilaf", "白いんげん豆煮とピラフ", "Turkish white bean stew with tomato, lamb pieces, buttery rice pilaf, and pickles"],
      ["gozleme-spinach", "ほうれん草ギョズレメ", "thin griddled flatbread filled with spinach, white cheese, herbs, and browned butter spots"],
      ["pistachio-baklava", "ピスタチオ・バクラヴァ", "layered filo pastry with pistachios, clarified butter, fragrant syrup, and crisp cut diamonds"],
      ["lokum-assortment", "ロクム盛り合わせ", "Turkish delight cubes in rose, citrus, pistachio, and pomegranate flavors dusted with sugar"]
    ]),
    simpleCategory("completed", "regional-greece-balkans-v2", "🇬🇷 ギリシャ・バルカン料理", "地中海野菜、羊肉、チーズ、焼き菓子を中心に。", "served as a Greek and Balkan regional specialty on a sunlit taverna table", [
      ["greek-moussaka", "ギリシャ風ムサカ", "baked layers of eggplant, spiced minced lamb, potato, tomato sauce, and golden bechamel"],
      ["souvlaki-platter", "スブラキプレート", "charcoal-grilled pork skewers with pita, tzatziki, tomato, red onion, and lemon potatoes"],
      ["spanakopita", "スパナコピタ", "flaky spinach and feta pie with herbs, crisp filo layers, sesame, and yogurt dip"],
      ["dolmades-plate", "葡萄葉包みドルマ", "vine leaves stuffed with herb rice, pine nuts, lemon, olive oil, and yogurt sauce"],
      ["horiatiki-salad", "ホリアティキ田舎サラダ", "chunky tomato cucumber salad with feta block, olives, red onion, oregano, and olive oil"],
      ["pastitsio", "ギリシャ風パスティツィオ", "baked tubular pasta with cinnamon-spiced meat sauce, cheese, and thick bechamel"],
      ["gemista", "野菜のゲミスタ", "tomatoes and peppers stuffed with herbed rice, vegetables, pine nuts, and roasted potatoes"],
      ["avgolemono-soup", "アヴゴレモノスープ", "Greek chicken rice soup enriched with egg and lemon, dill, black pepper, and olive oil"],
      ["loukoumades", "蜂蜜ルクマデス", "small fried dough balls with honey syrup, cinnamon, crushed walnuts, and orange zest"],
      ["bougatsa-cream", "クリーム・ブガツァ", "warm filo pastry filled with semolina custard, dusted with cinnamon and powdered sugar"]
    ]),
    simpleCategory("completed", "regional-italy-v2", "🇮🇹 イタリア料理・地方名物", "地域ごとの麺、米、肉、菓子を定番以上の解像度で。", "served as an authentic Italian regional dish with rustic restaurant presentation", [
      ["pizza-margherita-napoli", "ナポリ式マルゲリータ", "wood-fired pizza with San Marzano tomato, buffalo mozzarella, basil, olive oil, and blistered rim"],
      ["spaghetti-carbonara-roma", "ローマ式カルボナーラ", "spaghetti coated with egg yolk, pecorino Romano, guanciale, black pepper, and no cream"],
      ["risotto-milanese", "ミラノ風サフランリゾット", "creamy saffron risotto with butter, Parmesan, marrow depth, and visible golden rice grains"],
      ["osso-buco", "仔牛のオッソブーコ", "braised veal shank with marrow bone, white wine sauce, vegetables, gremolata, and risotto"],
      ["lasagna-bolognese", "ボローニャ風ラザニア", "layered green pasta with slow-cooked ragu, bechamel, Parmesan, and browned edges"],
      ["trofie-pesto", "リグーリア風トロフィエ", "twisted pasta with basil pesto, green beans, potatoes, pine nuts, and grated cheese"],
      ["sicilian-arancini", "シチリアのアランチーニ", "golden fried rice balls filled with ragu, peas, mozzarella, and crisp breadcrumb shell"],
      ["saltimbocca-romana", "サルティンボッカ・ロマーナ", "veal cutlets with prosciutto and sage in white wine butter sauce with roasted vegetables"],
      ["tiramisu-classico", "クラシック・ティラミス", "layers of espresso-soaked ladyfingers, mascarpone cream, cocoa powder, and clean square cut"],
      ["sicilian-cannoli", "シチリアのカンノーロ", "crisp pastry tubes filled with sweet ricotta, candied citrus, pistachios, and chocolate chips"]
    ]),
    simpleCategory("completed", "regional-france-v2", "🇫🇷 フランス料理・地方名物", "家庭煮込み、地方料理、ビストロ、菓子まで。", "presented as an authentic French regional dish with bistro or patisserie styling", [
      ["boeuf-bourguignon", "ブフ・ブルギニョン", "Burgundy beef stew with red wine, pearl onions, mushrooms, carrots, bacon, and glossy sauce"],
      ["coq-au-vin", "コック・オ・ヴァン", "wine-braised chicken with mushrooms, small onions, herbs, bacon, and rich mahogany sauce"],
      ["bouillabaisse-marseille", "マルセイユ風ブイヤベース", "saffron fish stew with mixed Mediterranean seafood, tomato broth, rouille, and toasted bread"],
      ["duck-confit", "鴨脚のコンフィ", "slow-cooked duck leg with crisp skin, garlic potatoes, green beans, and reduced jus"],
      ["ratatouille-nicoise", "ニース風ラタトゥイユ", "separately cooked eggplant, zucchini, peppers, tomatoes, onions, and Provençal herbs"],
      ["quiche-lorraine", "キッシュ・ロレーヌ", "savory custard tart with bacon lardons, cream, eggs, crisp pastry, and leaf salad"],
      ["galette-complete", "ガレット・コンプレット", "buckwheat crepe folded around ham, melted cheese, sunny egg, butter, and green salad"],
      ["cassoulet", "カスレ", "slow-baked white beans with duck confit, pork sausage, pork belly, herbs, and breadcrumb crust"],
      ["creme-brulee", "クレームブリュレ", "vanilla custard with thin crackled caramel top, visible vanilla seeds, and fresh berries"],
      ["tarte-tatin", "林檎のタルトタタン", "upside-down caramelized apple tart with glossy fruit wedges, crisp pastry, and crème fraîche"]
    ]),
    simpleCategory("completed", "regional-north-america-v2", "🇺🇸 北米料理", "ダイナー、南部、東海岸、カナダの食文化。", "served as a North American regional specialty with diner or family-table presentation", [
      ["thanksgiving-turkey", "感謝祭ターキーディナー", "roast turkey with herb stuffing, mashed potatoes, cranberry sauce, green beans, and gravy"],
      ["southern-fried-chicken", "南部式フライドチキン", "buttermilk fried chicken with crisp seasoned crust, biscuits, coleslaw, and pepper gravy"],
      ["texas-brisket", "テキサス燻製ブリスケット", "slow-smoked beef brisket with dark bark, smoke ring, pickles, onions, and barbecue sauce"],
      ["new-england-chowder", "ニューイングランド・クラムチャウダー", "creamy clam chowder with potatoes, celery, herbs, oyster crackers, and bread bowl"],
      ["quebec-poutine", "ケベック風プーティン", "crisp fries topped with cheese curds, hot brown gravy, scallions, and pulled beef"],
      ["maine-lobster-roll", "メイン州ロブスターロール", "buttered split-top bun filled with lobster meat, light dressing, celery, lemon, and chips"],
      ["louisiana-jambalaya", "ルイジアナ・ジャンバラヤ", "spiced rice with chicken, smoked sausage, shrimp, peppers, celery, and tomatoes"],
      ["baked-mac-cheese", "焼きマカロニチーズ", "baked macaroni in rich cheese sauce with golden breadcrumb crust and bubbling edges"],
      ["maple-pancake-stack", "楓蜜パンケーキタワー", "tall fluffy pancake stack with maple syrup, whipped butter, crisp bacon, and blueberries"],
      ["american-apple-pie", "アメリカンアップルパイ", "deep apple pie with lattice crust, cinnamon fruit filling, vanilla ice cream, and caramel drizzle"]
    ]),
    simpleCategory("completed", "regional-mexico-v2", "🇲🇽 メキシコ料理", "唐辛子、とうもろこし、豆、香草を地方料理で。", "served as an authentic Mexican regional dish with colorful pottery and fresh garnishes", [
      ["mole-poblano", "モレ・ポブラーノ", "roast turkey in complex dark mole sauce with chilies, cocoa, spices, sesame, and rice"],
      ["tacos-al-pastor", "タコス・アル・パストール", "small corn tacos with spit-roasted pork, pineapple, onion, cilantro, salsa, and lime"],
      ["pozole-rojo", "赤いポソレ", "red hominy and pork soup with shredded cabbage, radish, oregano, tostadas, and lime"],
      ["chiles-en-nogada", "チレス・エン・ノガダ", "stuffed poblano peppers with fruit-spiced meat, walnut sauce, pomegranate seeds, and parsley"],
      ["enchiladas-verdes", "エンチラーダス・ベルデス", "rolled tortillas with chicken, tomatillo sauce, crema, white cheese, onion, and cilantro"],
      ["cochinita-pibil", "コチニータ・ピビル", "achiote citrus pork wrapped in banana leaves with pickled red onions and warm tortillas"],
      ["oaxacan-tamales", "オアハカ風タマレス", "banana-leaf tamales filled with masa, chicken, black mole, herbs, and sesame"],
      ["sopa-de-tortilla", "ソパ・デ・トルティーヤ", "tomato chili soup with crisp tortilla strips, avocado, cheese, crema, and epazote"],
      ["ceviche-tostada", "魚介セビーチェ・トスターダ", "crisp tostada topped with lime-cured fish, tomato, onion, cilantro, avocado, and chili"],
      ["mexican-churros", "メキシコ風チュロス", "ridged cinnamon-sugar churros with dark chocolate dip, caramel sauce, and paper cone"]
    ]),
    simpleCategory("completed", "regional-andes-peru-v2", "⛰️ ペルー・アンデス料理", "海岸、山岳、アマゾンの食材と調理法。", "presented as a Peruvian and Andean specialty with vivid regional garnishes", [
      ["ceviche-peruano", "ペルー式セビーチェ", "lime-cured white fish with red onion, cilantro, chili, sweet potato, corn, and leche de tigre"],
      ["lomo-saltado", "ロモ・サルタード", "wok-seared beef with tomatoes, red onions, soy-vinegar sauce, fries, and white rice"],
      ["aji-de-gallina", "アヒ・デ・ガジーナ", "shredded chicken in creamy yellow chili and walnut sauce with rice, olives, and boiled egg"],
      ["causa-limena", "カウサ・リメーニャ", "layered yellow potato terrine with chicken or tuna, avocado, chili, lime, and olives"],
      ["anticuchos", "牛ハツのアンティクーチョ", "charcoal-grilled beef heart skewers with aji marinade, potatoes, corn, and herb sauce"],
      ["pachamanca", "大地蒸しパチャマンカ", "earth-oven meats with potatoes, corn, broad beans, herbs, and hot stones"],
      ["arroz-con-pato", "鴨の香草炊き込みごはん", "cilantro rice with braised duck, dark beer, peas, peppers, and pickled onions"],
      ["chupe-de-camarones", "海老のチュペ", "creamy shrimp chowder with potatoes, corn, milk, egg, cheese, and red chili"],
      ["andean-quinoa-soup", "アンデスのキヌアスープ", "quinoa soup with potatoes, squash, carrots, beans, herbs, and fresh cheese"],
      ["picarones", "南瓜のピカロネス", "sweet potato and squash ring fritters with spiced chancaca syrup and orange peel"]
    ]),
    simpleCategory("serving", "home-table-scenes-v2", "🏠 暮らしの食卓場面", "時間帯と生活感が伝わる家庭の卓上。", "as a food-centered domestic dining scene with natural lived-in details", [
      ["sunlit-breakfast-table", "朝日の差す朝食卓", "breakfast dishes on a small wooden table beside a bright window, folded napkin, warm cups"],
      ["busy-family-supper", "忙しい日の家族夕食", "several home-cooked dishes shared around a practical family table, rice bowls, serving spoons"],
      ["single-person-night-meal", "一人暮らしの夜食卓", "compact late-night meal for one beside a reading lamp, simple bowl, mug, small side dish"],
      ["weekend-brunch-kitchen", "休日の台所ブランチ", "casual brunch spread on a kitchen island, bread board, fruit bowl, coffee pot"],
      ["grandparent-country-table", "祖父母宅の田舎膳", "seasonal home cooking on a low country-house table, mismatched pottery, pickles, tea"],
      ["rainy-day-soup-table", "雨の日のスープ卓", "steaming soup and bread beside a rain-streaked window, soft cloth, warm bowl, quiet light"],
      ["homework-snack-table", "宿題中のおやつ机", "simple snacks and milk beside notebooks and pencils, small plate, crumbs, afternoon light"],
      ["midnight-kitchen-snack", "深夜台所の軽食", "small reheated meal under dim kitchen light, microwave-safe dish, chopsticks, water glass"],
      ["holiday-cooking-table", "休日の作り置き卓", "multiple prepared dishes cooling on a home table, storage containers, labels, kitchen towels"],
      ["balcony-breakfast-scene", "ベランダ朝食", "light breakfast on a narrow balcony table, potted herbs, city view, juice glass, pastry plate"]
    ]),
    simpleCategory("serving", "market-stall-scenes-v2", "🏮 市場・屋台の食風景", "売り場、調理台、客席を食べ物中心に描く。", "as a lively market or street-food scene focused on visible dishes and serving equipment", [
      ["japanese-festival-stall", "日本祭りの屋台前", "festival food stall with griddle, sauce bottles, paper trays, hanging menu strips, rising steam"],
      ["taiwan-night-market", "台湾夜市の食卓", "night market counter with steaming baskets, braised-food trays, plastic stools, lantern light"],
      ["bangkok-floating-market", "水上市場の小舟料理", "food prepared on a narrow market boat, noodle pot, fruit baskets, bowls, river reflections"],
      ["moroccan-spice-food-stall", "モロッコ市場の食堂", "market food stall beside spice pyramids, tagine pots, bread baskets, mint tea glasses"],
      ["mexican-taco-stand", "メキシコのタコス屋台", "street taco stand with vertical roast, tortilla griddle, salsa bowls, lime wedges, metal counter"],
      ["european-bakery-window", "欧州ベーカリーの店頭", "bakery display filled with breads and pastries, handwritten labels, paper bags, morning queue"],
      ["fish-market-grill", "港の魚市場焼き場", "harbor market grill with whole fish, shellfish trays, charcoal brazier, lemon crates"],
      ["indian-chaat-cart", "インドのチャート屋台", "chaat cart with fried shells, chutney jars, yogurt bowl, spice tins, leaf plates"],
      ["winter-food-fair", "冬の温食市", "cold-weather food fair with soup cauldrons, roasted nuts, hot drink urns, wool-covered tables"],
      ["futuristic-vending-food", "未来都市の自動食市場", "automated food kiosk with transparent meal cartridges, heated compartments, order screens, neon labels"]
    ]),
    simpleCategory("serving", "ceremonial-fine-scenes-v2", "🏛️ 儀礼・上質な会食", "祝宴、茶会、正式な配膳を食卓の格で表す。", "as a formal or ceremonial food scene with deliberate table setting and restrained elegance", [
      ["kaiseki-private-room", "料亭個室の会席", "seasonal small dishes arranged on lacquer trays in a quiet tatami room, ceramics, folded napkins"],
      ["formal-afternoon-tea", "正統派アフタヌーンティー", "three-tier tea stand on linen table, porcelain cups, flower vase, silver tongs"],
      ["state-banquet-table", "公式晩餐会の長卓", "long ceremonial dining table with plated courses, crystal glasses, name cards, symmetrical flowers"],
      ["garden-wedding-desserts", "庭園婚礼の菓子卓", "outdoor wedding dessert table with small cakes, fruit tarts, glass stands, pale flowers"],
      ["temple-vegetarian-meal", "寺院の精進膳", "carefully arranged plant-based dishes on individual trays, wooden bowls, quiet hall, incense distance"],
      ["tea-ceremony-sweets", "茶席の主菓子と抹茶", "single seasonal wagashi beside a matcha bowl, bamboo whisk, tatami, restrained negative space"],
      ["royal-middle-eastern-feast", "宮廷風中東宴席", "shared platters of rice, roast meats, fruit, sweets, engraved metalware, patterned cushions"],
      ["winter-palace-dinner", "冬宮の燭台晩餐", "formal winter dinner with covered dishes, tall candles, silver service, dark polished table"],
      ["chef-tasting-counter", "料理人おまかせカウンター", "small tasting course presented across a chef's counter, precise plates, open kitchen, menu card"],
      ["fantasy-coronation-feast", "幻想王国の戴冠祝宴", "grand fantasy banquet with symbolic breads, jewel-toned fruit, ceremonial roast, banners, golden tableware"]
    ]),
    simpleCategory("dessert", "seasonal-japanese-sweets-v2", "🍡 四季の和菓子", "季節の意匠、餡、餅、寒天を細かく選ぶ。", "crafted as a seasonal Japanese confection on a small ceramic sweet plate", [
      ["sakura-nerikiri", "桜花の練り切り", "pale pink nerikiri shaped like an opening cherry blossom with fine petal lines and yellow center"],
      ["warbler-uguisu-mochi", "うぐいす餅", "soft oval mochi coated in pale green soybean powder with sweet bean filling"],
      ["hydrangea-kinton", "紫陽花きんとん", "purple and blue hydrangea kinton made from delicate sweet bean strands and translucent jelly drops"],
      ["young-leaf-kashiwamochi", "若葉の柏餅", "white rice cake wrapped in a fresh oak leaf with smooth red bean paste inside"],
      ["goldfish-kingyoku", "金魚の錦玉羹", "clear agar jelly containing a tiny red goldfish motif and floating green leaf"],
      ["morning-glory-manju", "朝顔の上用饅頭", "white steamed bun decorated with purple morning-glory petals and a green leaf accent"],
      ["moon-rabbit-manju", "月兎の薯蕷饅頭", "round pale bun painted with a moon rabbit motif and filled with smooth bean paste"],
      ["maple-yokan-slice", "紅葉の流し羊羹", "layered amber and red yokan slice with suspended maple-leaf shapes and glossy cut surface"],
      ["snow-camellia-nerikiri", "雪椿の練り切り", "red camellia nerikiri partly covered with white snow-like sweet bean paste"],
      ["winter-yuzu-daifuku", "冬柚子大福", "soft white daifuku with fragrant yuzu bean paste, tiny citrus peel, and powdered surface"]
    ]),
    simpleCategory("dessert", "european-patisserie-v2", "🧁 欧州パティスリー", "層、焼き色、クリーム、果実を菓子ごとに。", "displayed as a refined European patisserie dessert with a clearly visible structure", [
      ["opera-cake-slice", "オペラケーキ", "precise rectangular layers of almond sponge, coffee buttercream, chocolate ganache, and glossy glaze"],
      ["saint-honore", "サントノーレ", "puff pastry base with caramel-topped cream puffs, piped cream, and crisp caramel threads"],
      ["mille-feuille-vanilla", "バニラ・ミルフィーユ", "crisp caramelized pastry layers with thick vanilla custard and a clean upright cut"],
      ["paris-brest", "パリ・ブレスト", "ring-shaped choux pastry filled with praline cream, almonds, and powdered sugar"],
      ["black-forest-gateau", "黒い森のケーキ", "chocolate sponge layers with whipped cream, sour cherries, chocolate curls, and cherry syrup"],
      ["linzer-torte", "リンツァートルテ", "spiced nut pastry tart with red currant filling, lattice top, and sliced almond edge"],
      ["dobos-torte", "ドボシュトルテ", "thin sponge and chocolate buttercream layers topped by angular amber caramel panels"],
      ["pastel-de-nata", "焼きたてエッグタルト", "Portuguese custard tart with blistered golden top, flaky shell, cinnamon, and warm center"],
      ["caneles-board", "カヌレ盛り", "small fluted canelés with dark caramelized shells, custardy centers, and vanilla rum aroma"],
      ["baba-au-rhum", "ババ・オ・ラム", "syrup-soaked yeast cake with glossy surface, whipped cream, citrus peel, and small fruit"]
    ]),
    simpleCategory("dessert", "asian-sweets-v2", "🥮 アジアの甘味", "餅、豆、米、果実、香辛料の多様な甘味。", "served as an authentic Asian sweet with characteristic ingredients and tableware", [
      ["korean-bingsu-redbean", "韓国の小豆ピンス", "fine milk shaved ice with sweet red beans, rice cakes, condensed milk, and soybean powder"],
      ["songpyeon-platter", "彩りソンピョン", "half-moon Korean rice cakes in pastel colors with sesame, bean, and chestnut fillings"],
      ["mango-sago", "芒果サゴ", "Hong Kong mango dessert with sago pearls, pomelo, coconut milk, and fresh mango cubes"],
      ["sesame-tangyuan", "黒胡麻湯圓", "white glutinous rice balls with flowing black sesame filling in warm ginger syrup"],
      ["douhua-syrup", "豆花の甘味椀", "silken tofu pudding with brown sugar syrup, peanuts, tapioca pearls, and beans"],
      ["thai-lod-chong", "タイのロートチョン", "green pandan jelly noodles in coconut milk with palm sugar syrup and crushed ice"],
      ["filipino-halo-halo", "ハロハロ", "layered Filipino shaved ice with sweet beans, jellies, fruit, purple yam, and flan"],
      ["indonesian-klepon", "椰子糖クレポン", "green pandan rice balls filled with liquid palm sugar and coated in fresh grated coconut"],
      ["indian-rasmalai", "ラスマライ", "soft cheese patties in saffron cardamom milk with pistachios, almonds, and rose petals"],
      ["persian-sholeh-zard", "ペルシャのサフラン米菓", "golden saffron rice pudding decorated with cinnamon lines, pistachios, almonds, and rosewater"]
    ]),
    simpleCategory("dessert", "frozen-festival-sweets-v2", "🍧 冷菓・祝祭デザート", "氷、凍結層、祝祭飾り、屋台らしさを追加。", "presented as a chilled or celebratory dessert with distinct temperature and decorative cues", [
      ["rainbow-shaved-ice", "虹色シロップかき氷", "tall shaved ice mound with separate strawberry, melon, lemon, and blue syrup bands"],
      ["matcha-shiratama-ice", "抹茶白玉氷", "matcha shaved ice with white rice dumplings, sweet red beans, condensed milk, and tea powder"],
      ["italian-granita-lemon", "檸檬グラニータ", "coarse lemon ice crystals in a chilled glass with citrus peel, mint, and frosted rim"],
      ["sicilian-brioche-gelato", "ブリオッシュ・ジェラート", "soft split brioche filled with three gelato scoops, pistachios, and melting edges"],
      ["kulfi-pistachio", "ピスタチオ・クルフィ", "dense Indian frozen milk dessert on a stick with pistachio pieces, saffron, and cardamom"],
      ["paleta-fruit", "果実ぎっしりパレタ", "transparent fruit ice pop packed with sliced kiwi, berries, mango, and edible flowers"],
      ["ice-cream-sandwich", "手作りアイスサンド", "thick vanilla ice cream between two chewy chocolate cookies with crisp frozen edges"],
      ["festival-candy-apple", "祭りの艶飴林檎", "whole red apple coated in clear hard candy with vivid reflections and wooden stick"],
      ["celebration-cupcake-tower", "祝祭カップケーキタワー", "tiered stand of small frosted cupcakes with varied colors, sprinkles, flags, and candles"],
      ["snow-globe-jelly", "雪景色の透明ゼリー", "clear dome jelly containing white snowflake shapes, silver pearls, and a pale blue base"]
    ]),
    simpleCategory("drinks", "world-tea-service-v2", "🍵 世界の茶と抽出", "茶葉、器、色、香りの違いまで指定する。", "prepared as a detailed nonalcoholic tea service with visible infusion color", [
      ["gyokuro-service", "玉露の雫茶", "small Japanese cups of vivid green gyokuro with a side dish of steeped leaves and low teapot"],
      ["taiwan-high-mountain-tea", "台湾高山茶", "pale golden oolong poured from a clay pot into aroma cups with rolled tea leaves"],
      ["chinese-jasmine-pearls", "茉莉花珠茶", "clear jasmine tea with unfurled pearl leaves, white blossoms, and a lidded porcelain cup"],
      ["masala-chai-pot", "煮出しマサラチャイ", "milky black tea simmered with cardamom, cinnamon, ginger, cloves, and a small metal pot"],
      ["turkish-apple-tea", "トルコの林檎茶", "ruby apple tea in a tulip glass with dried apple pieces and patterned saucer"],
      ["persian-saffron-tea", "ペルシャのサフラン紅茶", "amber black tea with saffron threads, rock sugar, rose petals, and etched glass"],
      ["russian-samovar-tea", "サモワールの濃縮紅茶", "strong tea concentrate diluted from a brass samovar with lemon slice, jam, and glass holder"],
      ["rooibos-orange-tea", "橙香るルイボス茶", "deep red rooibos infusion with orange peel, cinnamon stick, and clear heatproof pot"],
      ["butterfly-pea-tea", "蝶豆花の青い茶", "cobalt butterfly pea flower tea shifting toward purple beside lemon wedges and ice"],
      ["winter-herbal-tisane", "冬の薬草ティザンヌ", "steaming herbal infusion with chamomile, linden, mint, dried apple, and honey spoon"]
    ]),
    simpleCategory("drinks", "coffee-cocoa-craft-v2", "☕ 珈琲・ココア工房", "抽出法、乳層、泡、器の違いを選ぶ。", "shown as a carefully crafted hot or cold café drink with realistic layers and vessel", [
      ["pour-over-coffee", "ハンドドリップ珈琲", "fresh pour-over coffee in a glass server beneath a paper filter with blooming grounds"],
      ["flat-white-rosetta", "ロゼッタのフラットホワイト", "velvety flat white in a ceramic cup with a compact rosetta pattern and thin microfoam"],
      ["espresso-tonic", "エスプレッソトニック", "dark espresso floating over clear tonic water, ice cubes, citrus peel, and bright bubbles"],
      ["viennese-coffee", "ウィンナー珈琲", "black coffee topped with thick unsweetened whipped cream, chocolate shaving, and glass cup"],
      ["vietnam-egg-coffee", "越南エッグ珈琲", "strong Vietnamese coffee beneath thick golden egg cream in a small cup set over hot water"],
      ["affogato-drink", "飲むアフォガート", "espresso poured over vanilla gelato in a chilled glass with melting cream and cocoa nibs"],
      ["iced-coconut-coffee", "氷ココナッツ珈琲", "layered iced coffee with coconut milk, condensed milk, toasted coconut, and large clear ice"],
      ["mexican-hot-chocolate", "香辛料メキシカンココア", "frothy hot chocolate with cinnamon, mild chili, dark cocoa, and a traditional clay mug"],
      ["white-cocoa-berry", "白ココアと木苺", "creamy white cocoa with raspberry puree swirl, milk foam, freeze-dried berries, and glass mug"],
      ["campfire-cocoa", "焚火マシュマロココア", "dark hot cocoa in an enamel mug with toasted marshmallows, cinnamon, and firelit steam"]
    ]),
    simpleCategory("drinks", "festival-zero-proof-v2", "✨ 祝祭ノンアルコール", "色、泡、果実、飾りで乾杯場面を作る。", "served as an elaborate zero-proof celebration drink with fresh garnish and visible bubbles or ice", [
      ["pomegranate-sparkler", "柘榴スパークラー", "ruby pomegranate soda with clear bubbles, jewel-like seeds, rosemary sprig, and tall flute"],
      ["yuzu-honey-fizz", "柚子蜂蜜フィズ", "pale yuzu and honey soda with citrus peel ribbons, crushed ice, and mint"],
      ["peach-rose-cooler", "桃と薔薇のクーラー", "blush peach drink with rosewater, thin peach slices, edible petals, and sparkling water"],
      ["cucumber-elderflower", "胡瓜とエルダーフラワー", "clear elderflower cooler with cucumber ribbons, lime, herbs, ice, and fine bubbles"],
      ["spiced-grape-punch", "香辛料葡萄パンチ", "dark grape punch with orange wheels, cinnamon, star anise, cloves, and steaming surface"],
      ["tropical-sunset-mocktail", "南国夕焼けモクテル", "layered orange, passion fruit, and grenadine drink with pineapple leaf and crushed ice"],
      ["green-apple-lime-soda", "青林檎ライムソーダ", "bright green apple soda with lime wedges, apple fan garnish, ice, and popping bubbles"],
      ["blue-citrus-float", "青柑橘クリームソーダ", "clear blue citrus soda with vanilla ice cream scoop, lemon star, and silver sugar pearls"],
      ["berry-tea-punch", "森の果実ティーパンチ", "chilled berry tea punch with strawberries, blueberries, blackberries, basil, and floating ice ring"],
      ["winter-white-punch", "冬の白い祝杯", "opaque white pear and coconut punch with rosemary, sugared cranberries, snowflake garnish, and frosted glass"]
    ]),
    simpleCategory("ingredients", "produce-market-v2", "🥬 青果・市場素材", "旬の野菜と果実を束、籠、切り口で使う。", "shown as fresh culinary produce with natural surface detail and preparation-ready presentation", [
      ["heirloom-tomato-basket", "伝統品種トマト籠", "basket of irregular heirloom tomatoes in red, orange, green, and purple with stems attached"],
      ["rainbow-root-vegetables", "彩り根菜束", "bundle of carrots, beets, parsnips, turnips, and radishes with leafy tops and soil traces"],
      ["asian-leafy-greens", "アジア青菜盛り", "fresh bok choy, komatsuna, mustard greens, water spinach, and chrysanthemum greens"],
      ["summer-pepper-crate", "夏唐辛子と彩椒の箱", "wooden crate of bell peppers and chilies in varied colors, shapes, and ripeness"],
      ["winter-citrus-basket", "冬柑橘の籠", "basket of mandarins, yuzu, lemons, kumquats, and pomelo with glossy peel and leaves"],
      ["tropical-fruit-market", "南国果実の市場盛り", "mango, papaya, dragon fruit, passion fruit, guava, and pineapple in a woven tray"],
      ["forest-berry-punnets", "森の果実パック", "small punnets of strawberries, raspberries, blackberries, blueberries, and red currants"],
      ["fresh-corn-assortment", "色とりどりの生とうもろこし", "ears of yellow, white, red, and purple corn with partially peeled green husks"],
      ["edible-flower-tray", "食用花の小箱", "sorted edible pansies, nasturtiums, calendula, borage, and rose petals in a shallow tray"],
      ["fresh-herb-bundles", "摘みたて香草束", "bundles of basil, dill, cilantro, mint, rosemary, thyme, and flat-leaf parsley"]
    ]),
    simpleCategory("ingredients", "meat-protein-v2", "🥩 肉・蛋白素材", "部位、切り方、脂、下処理の状態を明確に。", "presented as a clean preparation-ready protein ingredient on a butcher or kitchen surface", [
      ["marbled-wagyu-slices", "霜降り和牛薄切り", "neatly fanned thin slices of marbled wagyu beef with fine white fat lines and deep red meat"],
      ["beef-rib-roast", "骨付き牛リブ塊", "raw bone-in beef rib roast tied with butcher string, fat cap, herbs, and cutting board"],
      ["lamb-chop-rack", "仔羊チョップのラック", "trimmed rack of lamb with exposed rib bones, rosy meat, rosemary, and coarse salt"],
      ["pork-belly-block", "皮付き豚ばら肉塊", "thick pork belly slab with alternating meat and fat layers, scored skin, and pepper"],
      ["whole-free-range-chicken", "放し飼い丸鶏", "clean whole raw chicken trussed for roasting with pale skin, herbs, lemon, and twine"],
      ["duck-breast-fillets", "鴨胸肉二枚", "two raw duck breasts with crosshatched fat caps, dark red meat, thyme, and black pepper"],
      ["venison-medallions", "鹿肉メダリオン", "lean venison medallions with deep burgundy color, juniper berries, and forest herbs"],
      ["mixed-minced-meat", "合挽き肉の山", "fresh coarse-ground beef and pork blend with visible separate strands in a metal tray"],
      ["tempeh-blocks", "発酵大豆テンペ", "firm tempeh blocks with visible whole soybeans, white culture binding, and clean slices"],
      ["seitan-roast", "小麦蛋白セイタン", "seasoned seitan roast with fibrous cut surface, tied shape, herbs, and light glaze"]
    ]),
    simpleCategory("ingredients", "baking-pastry-v2", "🥣 製菓・製パン材料", "粉、糖、膨張、香り、飾りを作業台へ。", "arranged as precise baking and pastry ingredients ready for use on a clean workbench", [
      ["flour-variety-bowls", "粉類の比較小鉢", "small bowls of bread flour, cake flour, whole wheat flour, rye flour, and rice flour"],
      ["sugar-variety-jars", "砂糖の標本瓶", "glass jars of caster sugar, brown sugar, powdered sugar, pearl sugar, and raw crystals"],
      ["yeast-sourdough-set", "酵母と発酵種", "fresh yeast, dry yeast granules, bubbly sourdough starter, flour dust, and measuring spoon"],
      ["chocolate-couverture", "クーベルチュール三種", "dark, milk, and white couverture chocolate discs with chopped blocks and cocoa sheen"],
      ["cocoa-products-board", "カカオ素材板", "cocoa pods, cacao beans, nibs, cocoa powder, cocoa butter, and dark chocolate pieces"],
      ["vanilla-aroma-set", "バニラ香料素材", "whole vanilla beans, scraped seeds, vanilla paste, clear extract bottle, and orchid flower"],
      ["candied-fruit-peel", "砂糖漬け果皮", "diced orange, lemon, citron, cherry, and ginger candied peel in jewel-like colors"],
      ["nuts-baking-tray", "製菓用ナッツ盛り", "almonds, hazelnuts, pistachios, pecans, walnuts, and macadamias on a divided tray"],
      ["gelatin-agar-pectin", "凝固材料セット", "sheet gelatin, powdered gelatin, agar strips, agar powder, and pectin sachets with labels"],
      ["natural-food-colors", "天然色素の小瓶", "beet red, matcha green, butterfly-pea blue, turmeric yellow, and charcoal black powders"]
    ]),
    simpleCategory("ingredients", "pulses-mushrooms-sea-v2", "🫘 豆・茸・海藻素材", "乾物、生、戻し状態を素材単体で足す。", "shown as a cooking ingredient collection with clear species, shape, and texture differences", [
      ["global-pulse-bowls", "世界の豆小鉢", "bowls of chickpeas, red lentils, black beans, white beans, mung beans, and kidney beans"],
      ["fresh-soy-products", "大豆加工品盛り", "firm tofu, fried tofu, tofu skin, soy curds, natto, and fresh soybeans"],
      ["wild-mushroom-basket", "森の茸籠", "basket of chanterelles, porcini, morels, oyster mushrooms, and hedgehog mushrooms"],
      ["east-asian-mushrooms", "東アジア茸盛り", "shiitake, enoki, shimeji, maitake, king oyster, and wood ear mushrooms"],
      ["dried-mushroom-jars", "乾燥茸の保存瓶", "jars of dried shiitake, porcini, morels, wood ear, and sliced matsutake"],
      ["seaweed-specimen-tray", "海藻素材標本", "kombu sheets, wakame, nori, hijiki, sea lettuce, and red dulse on a divided tray"],
      ["kelp-broth-set", "出汁昆布と削り素材", "wide dried kombu, shaved bonito, dried sardines, dried shrimp, and clear stock bowl"],
      ["sprouted-grains-beans", "発芽豆と発芽穀物", "mung bean sprouts, soybean sprouts, sprouted lentils, wheat sprouts, and alfalfa"],
      ["fermented-bean-pastes", "発酵豆醤の小甕", "miso, doenjang, doubanjiang, black bean paste, and fermented tofu in small crocks"],
      ["sea-vegetable-salad-kit", "海藻サラダ素材", "rehydrated wakame, agar strands, sea lettuce, red seaweed, sesame, and citrus dressing"]
    ]),
    simpleCategory("specialized", "bread-bakery-workshop-v2", "🥖 世界のパン工房", "形、割れ目、焼き色、断面まで完成パンとして選ぶ。", "shown as a freshly baked complete bread with characteristic shape, crumb, crust, and bakery presentation", [
      ["artisan-sourdough-boule", "天然酵母カンパーニュ", "round rustic sourdough boule with flour-dusted scoring, blistered crust, and open irregular crumb"],
      ["buttery-croissant", "発酵バタークロワッサン", "crescent croissant with crisp laminated layers, deep golden surface, and honeycomb interior"],
      ["german-pretzel", "岩塩プレッツェル", "large twisted pretzel with glossy brown crust, scored pale arms, coarse salt, and chewy center"],
      ["italian-focaccia", "香草フォカッチャ", "olive-oil focaccia with deep finger dimples, rosemary, cherry tomatoes, sea salt, and airy crumb"],
      ["georgian-cheese-bread", "舟形チーズパン", "boat-shaped bread filled with melted cheese, egg yolk, butter, browned rim, and pull-apart crumb"],
      ["indian-garlic-naan", "窯焼きガーリックナン", "tandoor-baked naan with charred bubbles, garlic butter, cilantro, flexible edge, and torn section"],
      ["mexican-pan-dulce", "貝殻模様パン・ドゥルセ", "round sweet bun with colorful shell-pattern sugar crust, soft interior, and bakery paper"],
      ["japanese-shokupan", "角食パン一本", "tall square Japanese milk bread loaf with smooth pale crust, cloudlike pull-apart crumb, and neat slices"],
      ["scandinavian-rye-loaf", "北欧の黒いライ麦パン", "dense dark rye loaf with seeds, cracked top, moist fine crumb, and thin buttered slice"],
      ["stuffed-pita-bread", "焼きたてピタパン", "puffed round pita breads with toasted spots, visible hollow pocket, soft interior, and cloth basket"]
    ]),
    simpleCategory("specialized", "noodle-soup-workshop-v2", "🍜 麺料理工房", "麺形、スープ、具、器を揃えた完成麺。", "built as a complete noodle dish with clearly visible noodle shape, broth or sauce, toppings, and regional bowl", [
      ["shoyu-ramen-complete", "醤油ラーメン完成丼", "clear amber chicken-soy broth with wavy noodles, chashu, bamboo shoots, scallions, and nori"],
      ["tonkotsu-ramen-complete", "濃厚豚骨ラーメン完成丼", "creamy pork broth with thin noodles, sliced pork, wood ear mushrooms, scallions, egg, and sesame"],
      ["kitsune-udon-complete", "きつねうどん完成丼", "clear dashi broth with thick udon, sweet fried tofu, scallions, fish cake, and yuzu peel"],
      ["tempura-soba-complete", "天ぷら蕎麦完成丼", "buckwheat noodles in hot dashi with shrimp tempura, green vegetables, scallions, and grated daikon"],
      ["beef-pho-complete", "牛肉フォー完成丼", "clear aromatic broth with flat rice noodles, rare beef, herbs, bean sprouts, lime, and chilies"],
      ["laksa-complete", "海老ラクサ完成丼", "spicy coconut broth with rice noodles, shrimp, tofu puffs, egg, bean sprouts, and herbs"],
      ["dan-dan-noodles-complete", "担担麺完成丼", "sesame chili sauce with wheat noodles, seasoned pork, preserved greens, peanuts, and scallions"],
      ["pasta-alle-vongole-complete", "浅利ボンゴレ完成皿", "spaghetti with open clams, garlic, olive oil, white wine sauce, parsley, and chili"],
      ["spatzle-mushroom-complete", "茸ソースのシュペッツレ", "soft egg noodles with creamy wild mushroom sauce, browned butter, herbs, and crisp onions"],
      ["lagman-complete-bowl", "具沢山ラグマン完成丼", "hand-pulled noodles with lamb, peppers, tomatoes, onions, herbs, and aromatic broth"]
    ]),
    simpleCategory("effects", "temperature-aroma-effects-v2", "♨️ 温度・香り演出", "熱、冷たさ、香りを視覚的な手掛かりにする。", "applied as a food-specific temperature and aroma cue without changing the dish identity", [
      ["gentle-rising-steam", "細く立ち上る湯気", "thin natural steam trails rising from several hot points with soft transparent edges"],
      ["vigorous-pot-steam", "鍋から溢れる蒸気", "dense hot steam rolling from an open pot while the food remains clearly visible"],
      ["fresh-oven-heat", "焼きたての熱気", "subtle heat shimmer and delicate steam around a freshly baked surface and hot tray"],
      ["sizzling-oil-bubbles", "鉄板の油泡", "tiny active oil bubbles and droplets around food on a hot griddle with controlled shine"],
      ["chilled-glass-condensation", "冷器の結露", "fine condensation beads and a faint water ring on a genuinely chilled vessel"],
      ["frosted-frozen-surface", "凍った表面の霜", "delicate white frost crystals along frozen food edges with preserved natural color"],
      ["melting-ice-droplets", "溶け始めた氷粒", "clear melting ice fragments with small droplets and cold glossy highlights"],
      ["aromatic-herb-steam", "香草を含む湯気", "steam passing through fresh herbs and citrus peel to imply a bright aromatic finish"],
      ["smoke-kissed-grill", "炭火の薄煙", "thin blue-gray charcoal smoke curling around grilled food without obscuring texture"],
      ["warm-spice-aroma", "温香辛料の香り立ち", "subtle floating spice dust near cinnamon, clove, cardamom, or toasted seeds"]
    ]),
    simpleCategory("effects", "texture-cut-effects-v2", "🔪 食感・断面演出", "割る、切る、伸びる、砕ける瞬間を追加。", "applied as a precise food texture or cross-section cue with believable material behavior", [
      ["flaky-layer-break", "薄層がほどける割れ口", "broken laminated pastry edge revealing many thin crisp layers and fine crumbs"],
      ["airy-bread-crumb", "気泡の見えるパン断面", "fresh bread cut surface with irregular airy crumb, elastic strands, and thin crust"],
      ["juicy-meat-slice", "肉汁を保った切り口", "clean meat slice with moist fibers, gentle juices, browned outer crust, and natural doneness"],
      ["crisp-batter-fracture", "衣の軽い割れ", "crisp fried coating cracking into fine flakes while the interior remains moist"],
      ["layered-terrine-section", "層状テリーヌ断面", "precise terrine slice showing distinct colorful layers, clean edges, and cohesive texture"],
      ["soft-custard-center", "柔らかなカスタード中心", "dessert cut open to reveal thick smooth custard slowly settling from the center"],
      ["stretchy-rice-cake", "伸びる餅生地", "elastic rice-cake strand stretching naturally from a bitten or cut piece with soft sheen"],
      ["crunchy-nut-cross-section", "木の実の粒立つ断面", "cut confection showing distinct roasted nut pieces suspended in a clean filling"],
      ["translucent-fruit-gel", "透ける果実ゼリー断面", "clear fruit gel slice with suspended fruit, smooth edges, internal light, and tiny bubbles"],
      ["crisp-vegetable-snap", "瑞々しい野菜の割れ", "fresh vegetable snapped open with wet cellular texture, clean color, and tiny droplets"]
    ]),
    simpleCategory("effects", "food-composition-effects-v2", "🎨 料理構図・盛り付け", "主役、反復、余白、色の流れを料理向けに整える。", "applied as a food-only composition and plating direction without adding generic quality words", [
      ["hero-dish-center", "主役皿を中央に置く", "one principal dish centered and slightly forward with supporting plates kept visibly secondary"],
      ["overhead-feast-layout", "真上からの宴卓配置", "top-down arrangement of multiple dishes with clear spacing, readable shapes, and balanced table coverage"],
      ["diagonal-ingredient-flow", "具材の斜め流れ", "ingredients and garnish arranged in a gentle diagonal path that guides the eye across the plate"],
      ["radial-platter-layout", "放射状の大皿盛り", "components placed radially around a central sauce or main item with consistent spacing"],
      ["asymmetric-fine-plating", "非対称の上品な皿盛り", "asymmetric restaurant plating balanced by sauce marks, small garnish, and deliberate empty space"],
      ["rustic-family-abundance", "家庭大皿の豊かな重なり", "generous overlapping serving on rustic dishes with natural irregularity and easy sharing"],
      ["color-gradient-plating", "色相グラデーション盛り", "food components ordered through a visible color gradient while retaining natural ingredient colors"],
      ["repeating-bite-rhythm", "一口サイズの反復配置", "small identical bites repeated in an orderly visual rhythm with minor handmade variation"],
      ["height-layered-dessert", "高低差のある甘味皿", "dessert elements built at several heights using a main piece, crumbs, fruit, and sauce"],
      ["negative-space-japanese", "和皿の静かな余白", "restrained Japanese plating with a small seasonal portion, off-center placement, and wide calm space"]
    ]),
    simpleCategory("actions", "prep-knife-actions-v2", "🔪 下ごしらえ動作", "洗う、切る、潰す、包むなど加熱前の工程。", "as a food preparation action focused on tools, ingredients, and believable hand movement", [
      ["washing-leafy-greens", "青菜を水洗いする", "rinsing leafy greens in a deep sink while clear water runs between the leaves"],
      ["julienne-vegetables", "野菜を細切りにする", "cutting vegetables into even fine strips with a chef knife and guide hand tucked safely"],
      ["filleting-fish", "魚を三枚におろす", "filleting a whole fish along the backbone with a narrow knife on a wet cutting board"],
      ["trimming-meat", "肉の筋と脂を整える", "carefully trimming excess sinew and fat from raw meat with a small sharp knife"],
      ["grinding-spices", "石臼で香辛料を挽く", "grinding whole spices in a stone mortar with visible coarse fragments and aromatic powder"],
      ["whisking-batter", "生地を泡立て器で混ぜる", "whisking a smooth batter in a metal bowl while flour and liquid become evenly combined"],
      ["rolling-pasta-dough", "麺生地を薄く延ばす", "rolling fresh pasta dough into a long thin sheet on a floured wooden surface"],
      ["folding-dumplings", "餃子のひだを包む", "pinching neat pleats along a filled dumpling wrapper with a row of finished dumplings nearby"],
      ["marinating-ingredients", "香味だれへ漬け込む", "coating prepared ingredients in an aromatic marinade inside a shallow tray with herbs and spices"],
      ["skewering-food", "具材を串に刺す", "threading alternating pieces of meat and vegetables onto clean wooden skewers before grilling"]
    ]),
    simpleCategory("actions", "heat-cooking-actions-v2", "🔥 加熱調理動作", "火、油、蒸気、器具との関係が伝わる工程。", "as an active cooking process with controlled heat, visible food transformation, and appropriate utensils", [
      ["searing-steak", "厚切り肉を焼き付ける", "searing a thick steak in a hot pan while a brown crust forms and butter foams around it"],
      ["basting-roast", "焼き肉へ油をかける", "spooning foaming herb butter repeatedly over roasting meat in a heavy skillet"],
      ["stir-frying-vegetables", "野菜を強火で炒める", "rapidly stir-frying colorful vegetables over high heat with a wok spatula and light steam"],
      ["deep-frying-tempura", "天ぷらを揚げる", "lowering battered ingredients into clear hot oil as fine bubbles form around the crisp coating"],
      ["steaming-bamboo-baskets", "蒸籠を重ねて蒸す", "lifting the lid from stacked bamboo steamers filled with dumplings and rising fragrant steam"],
      ["charring-peppers", "直火で唐辛子を炙る", "turning peppers over an open flame until the skins blister and darken in controlled patches"],
      ["simmering-sauce-reduction", "ソースを煮詰める", "gently reducing sauce in a shallow pan while stirring and checking its glossy consistency"],
      ["baking-bread-oven", "窯からパンを出す", "drawing deeply browned loaves from a hot oven with a long wooden peel and heat shimmer"],
      ["caramelizing-sugar", "砂糖を飴色に焦がす", "heating sugar until it becomes clear amber caramel with smooth bubbles and no burning"],
      ["torch-finishing-dessert", "菓子表面をバーナーで焼く", "moving a small culinary torch across sugar or meringue to create an even toasted finish"]
    ]),
    simpleCategory("actions", "serving-eating-actions-v2", "🍽️ 配膳・食事動作", "注ぐ、取り分ける、割る、すくうなど食卓の瞬間。", "as a natural serving or dining action centered on the food and tableware", [
      ["pouring-tea-service", "急須から茶を注ぐ", "pouring tea in a steady stream from a teapot into small cups arranged on a tray"],
      ["serving-rice-bowl", "飯を椀によそう", "lifting freshly cooked rice with a paddle and placing a rounded portion into a bowl"],
      ["carving-celebration-cake", "祝いケーキを切り分ける", "cutting the first clean wedge from a decorated celebration cake with a long cake knife"],
      ["breaking-bread-share", "焼きたてパンを分ける", "pulling a warm bread loaf apart by hand to reveal steam and soft interior crumb"],
      ["lifting-noodles-chopsticks", "箸で麺を持ち上げる", "lifting a manageable bundle of noodles from broth with chopsticks while strands drip naturally"],
      ["scooping-gelato", "ジェラートを丸く盛る", "drawing a metal scoop through gelato and forming a neat rounded portion in a cup"],
      ["sharing-hotpot-portion", "鍋から具を取り分ける", "transferring cooked hot-pot ingredients into an individual bowl with a wire ladle"],
      ["drizzling-table-sauce", "食卓で仕上げソースをかける", "drizzling a thin finishing sauce over plated food from a small pitcher in one controlled line"],
      ["opening-bento-lid", "弁当の蓋を開く", "lifting the lid from a compartmented bento to reveal the complete colorful arrangement inside"],
      ["toasting-glasses-zero-proof", "ノンアルコール杯を合わせる", "bringing decorated nonalcoholic drink glasses together above a celebration table with visible fruit garnish"]
    ]),
  ];

  const groupMeta = {
    quick: { order: 16, title: "⚡ 第二弾・完成献立60", note: "季節、韓国、東南アジア、祝祭、旅、公共の食事をひと押しで追加" },
    completed: { order: 46, title: "🌍 第二弾・地域料理120", note: "韓国、タイ、インド、中東、欧米、中南米など12文化圏を各10品追加" },
    serving: { order: 56, title: "🍽️ 第二弾・食卓場面30", note: "家庭、市場、儀礼や上質な会食の場面を追加" },
    dessert: { order: 67, title: "🍰 第二弾・甘味40", note: "季節和菓子、欧州菓子、アジア菓子、冷たい甘味を追加" },
    drinks: { order: 86, title: "🥤 第二弾・飲料30", note: "世界のお茶、珈琲とココア、祝祭のノンアルコール飲料を追加" },
    ingredients: { order: 96, title: "🥩 第二弾・食材40", note: "青果、肉と蛋白、製菓材料、豆茸海藻を追加" },
    specialized: { order: 126, title: "🧰 第二弾・パン麺工房20", note: "完成パンと麺料理を個別に深掘り" },
    effects: { order: 136, title: "🔥 第二弾・料理演出30", note: "温度、食感、構図と盛り付けを追加" },
    actions: { order: 146, title: "🥢 第二弾・調理動作30", note: "下ごしらえ、加熱、配膳と食事動作を追加" }
  };

  const allItems = categories.flatMap(cat => cat.items.map(entry => Object.assign({ group: cat.group, category: cat.key }, entry)));
  const counts = categories.reduce((result, cat) => {
    result[cat.group] = (result[cat.group] || 0) + cat.items.length;
    return result;
  }, {});

  window.SHIMA_CULINARY_EXPANSION_V2 = Object.freeze({
    version: "2.0.0",
    expectedCategories: 40,
    expectedItems: 400,
    categories,
    groupMeta,
    counts: Object.freeze(counts),
    allItems: () => allItems.slice()
  });

  console.log("🍽️ Loaded: ./builder_data.food_akashic.expansion.v2.js v2.0.0 (400 items)");
})();
