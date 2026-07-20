(function(){
  "use strict";

  const axes = [
    {
      key: "exposure_cut",
      title: "✂️ 露出カット・開口設計",
      note: "元衣装の系統を残し、開口部と布面積の見せ方を変える。",
      selection: "single",
      items: [
        ["plunging-neckline", "深いVネック開口", "adult garment with a deep plunging neckline, clean reinforced edges, deliberate low-coverage front cut"],
        ["underbust-window", "アンダーバスト窓", "adult garment with an underbust cutout window, structured lower edge, controlled revealing construction"],
        ["side-bust-cut", "サイドバスト開口", "adult garment with side-bust cutouts, narrow supporting panels, symmetrical revealing construction"],
        ["open-back", "全面バックオープン", "adult garment with a fully open back, low rear fastening point, clean exposed-back frame"],
        ["single-high-slit", "片側ハイスリット", "adult garment with one extremely high side slit, reinforced slit edge, asymmetrical leg reveal"],
        ["double-high-slit", "両側ハイスリット", "adult garment with twin high side slits, narrow central skirt panel, balanced leg exposure"],
        ["hip-cutouts", "両腰カットアウト", "adult garment with high hip cutouts, ring-framed openings, sharply defined side exposure"],
        ["lower-abdomen-window", "下腹部ウィンドウ", "adult garment with a lower-abdomen window, precise curved cutout, reinforced decorative border"],
        ["chest-keyhole", "胸元キーホール", "adult garment with a large chest keyhole opening, narrow bridge straps, polished edge finishing"],
        ["cross-body-cutout", "斜めクロス開口", "adult garment with a diagonal cross-body cutout, offset fabric panels, controlled asymmetrical exposure"],
        ["one-side-reveal", "片側集中露出", "adult garment with one-sided revealing construction, covered opposite side, deliberate asymmetric balance"],
        ["open-front-panels", "前面分割オープン", "adult garment with divided open-front panels, minimal central fasteners, visible inner-layer framing"],
        ["micro-hem", "マイクロ丈化", "adult garment with an ultra-short micro hemline, clean tailored edge, deliberately minimal lower coverage"],
        ["extreme-high-cut", "超ハイレグ化", "adult garment with extremely high-cut leg openings, elongated side lines, stable narrow front panel"],
        ["strapless-low-coverage", "ストラップレス極小布面", "adult strapless garment with minimal coverage panels, firm hidden support, uninterrupted shoulder line"],
        ["detached-side-panels", "側面分離パネル", "adult garment with detached floating side panels, visible gap construction, ornamental connector straps"],
        ["lace-up-open-sides", "編み上げ側面開口", "adult garment with open lace-up sides, wide spacing between eyelets, tensioned cross lacing"],
        ["sheer-window-inserts", "透過ウィンドウ差し替え", "adult garment with transparent inset windows replacing opaque panels, clearly bordered sheer openings"],
        ["ring-linked-cutouts", "リング連結カットアウト", "adult garment with multiple ring-linked cutouts, small separated fabric panels, metallic connector points"],
        ["minimal-panel-layout", "最小布面パネル構成", "adult garment built from minimal coverage panels, precise strap support, intentionally sparse construction"]
      ]
    },
    {
      key: "damage_disarray",
      title: "💥 破損・着崩れ進行",
      note: "破れ、汚れ、緩み、戦闘損傷を衣装の状態として追加する。",
      selection: "multi",
      items: [
        ["partially-torn-hem", "裾の部分破れ", "adult garment with a partially torn hem, irregular fabric edge, localized damage only"],
        ["side-seam-split", "脇縫い目の裂け", "adult garment with a split side seam, stressed stitching, widening localized opening"],
        ["front-panel-tear", "前面パネル裂傷", "adult garment with a torn front panel, diagonal fabric rupture, visible frayed layers"],
        ["shredded-outer-layer", "外層だけ細断", "adult garment with a shredded outer layer, intact inner layer, hanging strips of damaged fabric"],
        ["broken-shoulder-strap", "肩紐の片側破損", "adult garment with one broken shoulder strap, loosened upper panel, visible snapped attachment"],
        ["broken-zipper", "ファスナー破損", "adult garment with a broken zipper, separated teeth, partially opened closure"],
        ["burst-buttons", "ボタン弾け", "adult garment with burst front buttons, strained buttonholes, unevenly opened front"],
        ["broken-armor-panels", "装甲パネル破損", "adult armored garment with broken outer panels, cracked fasteners, exposed flexible underlayer"],
        ["frayed-lace", "レースのほつれ", "adult garment with heavily frayed lace, pulled threads, damaged decorative edges"],
        ["scorched-edges", "焦げた布端", "adult garment with scorched edges, dark heat marks, curled damaged fabric borders"],
        ["wet-disheveled", "濡れて乱れた衣装", "adult garment in a wet disheveled state, clinging folds, uneven displaced layers"],
        ["mud-stained", "泥汚れ加工", "adult garment with muddy stains, splashed lower panels, visibly soiled seams"],
        ["bloodstained-cloth", "血痕の付いた衣装", "adult garment with localized bloodstains, darkened fabric patches, damaged battle-worn finish"],
        ["battle-worn", "戦闘後の摩耗", "adult garment with battle-worn abrasion, scraped surfaces, multiple restrained damage marks"],
        ["claw-slashed", "爪痕スラッシュ", "adult garment with parallel claw slashes, sharply torn fabric lines, separated outer fibers"],
        ["tentacle-torn", "触手による引き裂け", "adult garment torn by coiling tentacles, stretched rupture points, wet damaged fabric edges"],
        ["loosened-bodice", "胴衣の締め緩み", "adult garment with a loosened bodice, relaxed lacing tension, partially displaced front structure"],
        ["slipped-shoulder", "肩からずれ落ち", "adult garment slipping from one shoulder, displaced neckline, unstable upper-layer hold"],
        ["bunched-at-waist", "腰元へ布が寄った状態", "adult garment bunched around the waist, compressed fabric folds, upper layer displaced downward"],
        ["almost-removed-outerwear", "外衣がほぼ脱げた状態", "adult outer garment almost removed, sleeves hanging from the arms, inner clothing clearly exposed"]
      ]
    },
    {
      key: "sensual_material",
      title: "🫧 艶素材・密着置換",
      note: "薄さ、反射、透過、密着の性格を一種類選んで置き換える。",
      selection: "single",
      items: [
        ["high-gloss-latex", "高光沢ラテックス", "adult garment made from high-gloss latex, mirrorlike highlights, tightly controlled seamless fit"],
        ["transparent-latex", "透明ラテックス", "adult garment made from transparent latex, clear elastic surface, visible reinforced seams"],
        ["glossy-pvc", "艶PVCフィルム", "adult garment made from glossy PVC film, hard specular reflections, thin structured panels"],
        ["wet-sheer-cloth", "濡れシアー布", "adult garment made from wet sheer cloth, translucent clinging folds, darkened saturated fibers"],
        ["transparent-chiffon", "透明シフォン", "adult garment made from transparent chiffon, airy revealing layers, crisp floating edges"],
        ["fine-fishnet", "極細フィッシュネット", "adult garment made from fine fishnet mesh, even open weave, body-following elastic tension"],
        ["micro-mesh", "マイクロメッシュ", "adult garment made from micro-mesh fabric, tiny perforations, semi-transparent technical surface"],
        ["oiled-leather", "オイルレザー", "adult garment made from oiled leather, deep polished grain, tight structured fit"],
        ["clinging-satin", "密着サテン", "adult garment made from clinging satin, smooth tension highlights, soft body-following drape"],
        ["body-stocking-mesh", "ボディストッキング網地", "adult garment made from body-stocking mesh, continuous elastic weave, close second-skin fit"],
        ["liquid-metal", "液体金属膜", "adult garment made from liquid-metal film, flowing chrome reflections, seamless body-hugging surface"],
        ["glossy-vinyl", "艶ビニール", "adult garment made from glossy vinyl, strong curved reflections, firm revealing panel construction"],
        ["rubber-membrane", "半透明ラバー膜", "adult garment made from translucent rubber membrane, soft diffused transparency, stretched sealed edges"],
        ["openwork-lace", "透かしレース", "adult garment made from openwork lace, large floral gaps, delicate revealing texture"],
        ["thin-silk", "極薄シルク", "adult garment made from extremely thin silk, luminous smooth folds, softly transparent layered drape"],
        ["elastic-bandage", "弾性包帯布", "adult garment made from elastic bandage strips, overlapping wrapped construction, tensioned narrow coverage"],
        ["transparent-film", "透明フィルム衣装", "adult garment made from transparent flexible film, glossy clear panels, visible welded borders"],
        ["slime-coated-fabric", "粘液コート布", "adult garment coated in translucent slime, wet reflective membrane, fabric clinging under viscous gloss"],
        ["glossy-spandex", "高光沢スパンデックス", "adult garment made from glossy spandex, smooth stretch highlights, precise skin-tight construction"],
        ["wet-thin-cotton", "濡れた薄手コットン", "adult garment made from thin wet cotton, visible fiber texture, heavy translucent cling"]
      ]
    },
    {
      key: "restraint_hardware",
      title: "⛓ 留め具・拘束装飾",
      note: "首輪、帯、リング、鎖、ロック構造を衣装部品として足す。",
      selection: "multi",
      items: [
        ["locking-collar", "施錠式首輪", "adult garment fitted with a locking collar, small front padlock, reinforced metal clasp"],
        ["body-harness", "全身ハーネス", "adult garment framed by a full-body strap harness, symmetrical tension lines, metal connector rings"],
        ["chest-harness", "胸部ハーネス", "adult garment with a chest harness overlay, crossing support straps, centered metal ring"],
        ["underbust-straps", "アンダーバスト帯", "adult garment with underbust restraint straps, adjustable buckles, close fitted band structure"],
        ["garter-system", "多点ガーター構造", "adult garment with a multi-point garter system, visible suspender straps, evenly spaced clips"],
        ["thigh-restraint-straps", "太腿拘束ストラップ", "adult garment with layered thigh restraint straps, paired buckles, close tensioned fit"],
        ["hip-rings", "腰部連結リング", "adult garment with large hip connector rings, separated panels, short linking straps"],
        ["waist-chain", "腰鎖装飾", "adult garment with layered waist chains, low hanging metallic loops, centered clasp ornament"],
        ["body-chains", "ボディチェーン網", "adult garment overlaid with fine body chains, geometric chain paths, polished connector points"],
        ["bondage-rings", "ボンテージリング配置", "adult garment with multiple bondage rings, strap junction hardware, symmetrical restraint styling"],
        ["padlock-fasteners", "南京錠留め", "adult garment secured by small padlock fasteners, visible locking tabs, deliberately inaccessible closures"],
        ["cuff-linked-sleeves", "カフ連結袖", "adult garment with cuff-linked sleeves, short chain connectors, reinforced wrist attachment points"],
        ["cross-lacing", "強調クロス編み上げ", "adult garment with prominent cross lacing, wide eyelet spacing, visibly tensioned cords"],
        ["front-zipper", "正面ロングジッパー", "adult garment with a full-length front zipper, oversized metal pull, clearly emphasized closure line"],
        ["two-way-zipper", "両開きジッパー", "adult garment with a two-way zipper, independently opened upper and lower sections, polished zipper track"],
        ["breakaway-snaps", "外れやすいスナップ留め", "adult garment with breakaway snap fasteners, partially released closure points, visible metal studs"],
        ["chain-linked-panels", "鎖連結パネル", "adult garment with separate panels linked by short chains, visible gaps, flexible metallic connections"],
        ["leash-ring-collar", "リード接続リング首輪", "adult garment with a collar-mounted leash ring, reinforced front loop, polished locking hardware"],
        ["restraint-ribbons", "拘束リボン巻き", "adult garment wrapped with restraint ribbons, crossing bands, tightened decorative knots"],
        ["locking-corset", "ロック式コルセット", "adult garment with a locking corset structure, rigid lacing rails, small secured front clasps"]
      ]
    },
    {
      key: "wear_state",
      title: "🔥 着こなし・保持限界",
      note: "衣装がどこまで開き、ずれ、残っているかを一状態選ぶ。",
      selection: "single",
      items: [
        ["fully-unbuttoned", "前ボタン全開", "adult garment worn fully unbuttoned, front panels spread apart, closure hardware still visible"],
        ["deeply-unzipped", "深くジッパーを下ろす", "adult garment worn deeply unzipped, long open zipper line, loosened front structure"],
        ["loose-neckline", "首元が大きく緩む", "adult garment with an extremely loose neckline, lowered fabric edge, unstable upper coverage"],
        ["off-both-shoulders", "両肩から落とす", "adult garment worn off both shoulders, sleeves lowered, exposed upper frame"],
        ["one-sleeve-removed", "片袖だけ脱ぐ", "adult garment worn with one sleeve removed, asymmetrical hanging fabric, one arm still dressed"],
        ["slipping-straps", "肩紐がずれ落ちる", "adult garment with both shoulder straps slipping down, loosened upper panel, barely maintained support"],
        ["dress-slipping-down", "ドレスがずれ落ちる", "adult dress slipping downward, gathered fabric below the upper edge, failing support structure"],
        ["skirt-lifted", "スカートを捲った状態", "adult garment with the skirt lifted and gathered upward, compressed folds, lower layers exposed"],
        ["lower-garment-lowered", "下衣を下げた状態", "adult lower garment pulled down from its normal position, bunched waistband, displaced coverage"],
        ["underwear-visible", "下着がはっきり見える", "adult garment worn open enough to clearly reveal the underwear layer, framed inner clothing"],
        ["lingerie-under-open-coat", "開いた外衣＋ランジェリー", "adult outer garment worn fully open over visible lingerie, deliberate layered reveal"],
        ["half-undressed", "半脱ぎ状態", "adult garment worn half-undressed, multiple loosened layers, sleeves and straps partly removed"],
        ["caught-at-waist", "衣装が腰で止まる", "adult garment removed from the upper body and caught around the waist, dense bunched folds"],
        ["minimal-draped-cover", "布一枚の最小被覆", "adult garment reduced to one loosely draped cloth panel, minimal coverage, unsecured hanging edge"],
        ["open-jacket-no-inner", "素肌に開いたジャケット", "adult open jacket worn without an inner garment, widely separated lapels, exposed front frame"],
        ["single-strap-holding", "肩紐一本だけで保持", "adult garment held by a single remaining strap, tilted upper panel, visibly unstable support"],
        ["barely-fastened", "留め具一個だけで保持", "adult garment barely fastened by one closure point, widely opened surrounding panels"],
        ["loosened-knot", "結び目がほどけかけ", "adult garment with a nearly undone knot, slackened fabric ties, unstable wrapped construction"],
        ["belt-unfastened", "ベルト解除状態", "adult garment worn with the belt fully unfastened, open waist structure, hanging strap ends"],
        ["stockings-rolled-down", "ストッキングを下げた状態", "adult garment styling with stockings rolled down, gathered elastic fabric, uneven lowered legwear"]
      ]
    }
  ];

  window.SHIMA_ATTIRE_R18_REMIX_LAB_V1 = {
    version: "1.0.0",
    expectedCount: 100,
    adultOnly: true,
    axes: axes
  };
})();
