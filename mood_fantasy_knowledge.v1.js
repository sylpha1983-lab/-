// mood_fantasy_knowledge.v1.js — v2.2.0 (faith-format + bilingual EN/JP + collapsed)
(function(root){
  "use strict";

  const $ = (s,b=document)=>b.querySelector(s);
  const log = (m)=>{ try{ root.writeLog && root.writeLog("[fantasy.knowledge] "+m);}catch(_){ } };

  // ========== タグ定義（英日対応：faith形式に合わせて英語→日本語順） ==========
  const FANTASY_GROUPS = [
    {
      title: "Fantasy Light / 幻想的な光",
      facets: [
        {
          title: "Texture of Light / 光の質感",
          tags: [
            { en: "ethereal glow", jp: "幻想的な輝き" },
            { en: "dream haze", jp: "夢幻の霞" },
            { en: "soft luminescence", jp: "柔らかな光" }
          ]
        },
        {
          title: "Light State / 光の状態",
          tags: [
            { en: "shimmer veil", jp: "揺らめくヴェール" },
            { en: "glowing dust", jp: "輝く塵" },
            { en: "moonlit shimmer", jp: "月光のきらめき" }
          ]
        }
      ]
    },
    {
      title: "Fantasy Shadow / 幻想的な影",
      facets: [
        {
          title: "Texture of Shadow / 影の質感",
          tags: [
            { en: "whispered silhouette", jp: "囁く影" },
            { en: "dim outline", jp: "淡い輪郭" },
            { en: "shadow dance", jp: "影の舞踏" }
          ]
        }
      ]
    },
    {
      title: "Poetic Colors / 詩的な色彩",
      facets: [
        {
          title: "Tone & Tint / 色調",
          tags: [
            { en: "pastel bloom", jp: "パステルの花" },
            { en: "muted dusk", jp: "夕暮れの静けさ" },
            { en: "gentle dawn", jp: "柔らかな暁光" }
          ]
        }
      ]
    },
    {
      title: "Fantasy Motion / 幻想的な動き",
      facets: [
        {
          title: "Nature of Motion / 動きの性質",
          tags: [
            { en: "slow drift", jp: "ゆるやかな漂い" },
            { en: "floating petals", jp: "舞う花びら" },
            { en: "stardust sway", jp: "星屑の揺らめき" }
          ]
        }
      ]
    },
    {
      title: "Overall Mood (Fantasy / Poetic) / 全体ムード（幻想・詩的）",
      facets: [
        {
          title: "Mood Harmony / ムードバランス",
          tags: [
            { en: "dreamlike harmony", jp: "夢のような調和" },
            { en: "melancholic beauty", jp: "憂美な静寂" },
            { en: "romantic haze", jp: "浪漫の霞" }
          ]
        }
      ]
    }
  ];

  // ========== チップ生成 ==========
  function makeChip(tag){
    const el=document.createElement("label");
    el.className="chip";
    el.innerHTML=`<input type="checkbox" data-tag="${tag.en}"/><span>${tag.en} / ${tag.jp}</span>`;
    return el;
  }

  // ========== UI登録 ==========
  function render(){
    const reg = root.UI_REG;
    if(!reg || typeof reg.registerSection!=="function"){
      log("UI_REG not ready, retry...");
      setTimeout(render,300);
      return;
    }

    reg.registerSection({
      id: "mood-fantasy",
      title: "Fantasy / Poetic Mood / 幻想・詩的ムード",
      mount(rootEl){
        FANTASY_GROUPS.forEach(group=>{
          const sec=document.createElement("details");
          sec.className="ui-group";
          const sum=document.createElement("summary");
          sum.textContent=group.title;
          const inner=document.createElement("div");
          inner.className="inner";

          group.facets.forEach(facet=>{
            const fbox=document.createElement("details");
            fbox.className="ui-group";
            const fsum=document.createElement("summary");
            fsum.textContent=facet.title;
            const fInner=document.createElement("div");
            fInner.className="inner";
            facet.tags.forEach(tag=>fInner.appendChild(makeChip(tag)));
            fbox.appendChild(fsum);
            fbox.appendChild(fInner);
            inner.appendChild(fbox);
          });

          sec.appendChild(sum);
          sec.appendChild(inner);
          rootEl.appendChild(sec);
        });
        log("[fantasy.ui] mounted (faith-style EN/JP)");
      },
      getSelected(){
        return Array.from(document.querySelectorAll("input[data-tag]:checked"))
          .map(el=>el.dataset.tag);
      }
    });
  }

  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",render,{once:true});
  } else { render(); }

})(window);