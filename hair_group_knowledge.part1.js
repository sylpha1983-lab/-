// hair_group_knowledge.part1.js
(function(){
  window.__HAIR_GROUP_DEFS = [
    { key:'pony',   title:'🐎 ポニーテール / Ponytails',     kw:['ponytail','pony','side-ponytail','twin-ponies'] },
    { key:'twin',   title:'🎀 ツイン・サイド / Twin & Side', kw:['twin-tail','twin buns','twin','side-tail','side-ponytail'] },
    { key:'bun',    title:'🟤 お団子・アップ / Buns & Updos', kw:['bun','updo','chignon','french twist','roll updo','space buns'] },
    { key:'short',  title:'✂️ ショート / Short',              kw:['short','pixie','bixie','bob','buzzcut','mullet'] },
    { key:'medium', title:'📏 ミディアム / Medium',           kw:['midi','medium','lob'] },
    { key:'long',   title:'💫 ロング / Long',                  kw:['long','mermaid','swan','ribbon-tie long'] },
    { key:'bangs',  title:'🧢 前髪 / Bangs',                   kw:['bang','fringe','curtain bangs','bottleneck'] },
    { key:'braid',  title:'🧶 編み・ブレイズ / Braids',       kw:['braid','braided','fishtail','dutch','crown braid','rope'] },
    { key:'acc',    title:'🎗️ アクセ付き / Accessories',      kw:['ribbon','hairpin','tiara','clip','barrette','flower','pearl','beads','chain','scrunchie'] },
    { key:'fant',   title:'🪄 ファンタジー・SF / Fantasy & SF',kw:['elf','demon','angel','fairy','goddess','knight','cyber','neon','android','hologram','mecha','space','vr','ai','samurai armor','gladiator','berserker'] },
    { key:'cult',   title:'🏛 文化・伝統 / Cultural',          kw:['samurai','maiko','geisha','miko','viking','egyptian','indi','arab','shrine','edo','kimono','tribal'] },
    { key:'sports', title:'🏃 スポーツ / Sports & Action',      kw:['runner','athlete','gym','fighter','martial','swimmer','dancer','basketball','soccer','tennis'] },
    { key:'casual', title:'🧵 カジュアル / Casual & Everyday',  kw:['casual','daily','schoolgirl','loose','messy','relaxed','carefree','quick-tie'] },
    { key:'pastel', title:'🎨 パステル / Pastel Colors',        kw:['pastel'] },
    { key:'metallic',title:'✨ メタリック / Metallic Colors',   kw:['metallic','chrome'] },
    { key:'glow',   title:'💡 発光・反応 / Glow & Reactive',    kw:['glow','bioluminescent','phosphor','uv','radioactive','neon'] },
    { key:'gradient',title:'🌈 グラデーション / Gradients',     kw:['gradient','ombre'] },
    { key:'basic',  title:'🧪 ベーシック＆拡張色 / Basic',       kw:['hair-','-hair','brown','blonde','red','silver','white','black','auburn','ash','burgundy','rose gold','highlight','gloss','smoky','uv-reactive'] },
    { key:'natural',title:'🍃 自然・元素 / Natural & Elements', kw:['forest','leaf','stone','sand','earth','river','ocean','lava','crystal','aqua','sunset'] },
    { key:'others', title:'▶ その他 / Others',                  kw:[] }
  ];

  // 本体の hairGrouping() から安全に参照できるフック
  if (!window.__getHairGroupDefs) {
    window.__getHairGroupDefs = function(){
      return Array.isArray(window.__HAIR_GROUP_DEFS) ? window.__HAIR_GROUP_DEFS : [];
    };
  }
})();