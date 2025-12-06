(function(){
  "use strict";

  const VERSION = 1; 
  const KEY = "presets";

  // ★ ユーザー指定のプリセット定義
  const PRESETS = {
    "✨ 超艶・質感特化 (Ultra Glossy & Slime)": [
      { 
        label: "超艶特化クオリティー (Ultra Glossy)", 
        val: "(masterpiece:1.5), (best quality:1.5), (ultra high resolution:1.3), (anime-realism blend:1.3), (semi-realistic rendering:1.2), (intricate details:1.5), (realistic textures:1.5), (extremely detailed skin, face, hair, slime textures:1.5), (cinematic lighting:1.5), (wet glossy oil-like sheen:1.7), (translucent dripping slime glow:1.6), (highly reflective fluid highlights:1.6), (subsurface scattering:1.3), (iridescent rainbow oil reflections:1.5), (UHD, ultra-sharp details:1.3), (vivid anime-like colors:1.3), (depth of field:1.1), (consistent anatomy:1.3)" 
      },
      {
        label: "極上の肌質感 (Ultimate Skin)",
        val: "(masterpiece:1.4), (best quality:1.4), (photorealistic skin:1.5), (detailed pores:1.3), (subsurface scattering:1.4), (soft lighting), (8k resolution), (highly detailed face)"
      },
      {
        label: "ヌルテカ・オイル (Oiled Skin)",
        val: "(masterpiece), (best quality), (oiled skin:1.4), (wet skin:1.3), (shiny skin:1.3), (sweat:1.2), (glossy highlight), (realistic lighting)"
      }
    ],
    "🎬 映画的・画作り特化 (Cinematic & Art)": [
      {
        label: "映画的演出クオリティー (Cinematic Masterpiece)",
        val: "(masterpiece:1.5), (best quality:1.5), (cinematic lighting:1.4), (volumetric lighting:1.3), (dramatic atmosphere:1.3), (8k resolution:1.4), (intricate details), (ray tracing:1.2), (depth of field:1.2), (film grain:0.5), (movie poster composition)"
      },
      {
        label: "ダークファンタジー風 (Dark Fantasy)",
        val: "(masterpiece), (best quality), (dark fantasy style:1.4), (gothic atmosphere), (chiaroscuro lighting), (detailed armor), (magic glowing effects), (foggy background)"
      },
      {
        label: "サイバーパンク・ネオン (Cyberpunk Neon)",
        val: "(masterpiece), (best quality), (cyberpunk style:1.4), (neon lighting:1.4), (futuristic city background), (chromatic aberration:1.2), (holographic interface)"
      }
    ],
    "🖌️ 画風・スタイルプリセット (Art Styles)": [
      {
        label: "厚塗り・油絵風 (Impasto/Oil)",
        val: "(masterpiece), (best quality), (impasto:1.3), (oil painting style:1.3), (visible brushstrokes), (rich colors), (textured canvas)"
      },
      {
        label: "水彩画風 (Watercolor)",
        val: "(masterpiece), (best quality), (watercolor medium:1.4), (wet on wet), (soft edges), (pastel colors), (artistic splash)"
      },
      {
        label: "アニメ塗り・セルルック (Anime Cel Shading)",
        val: "(masterpiece), (best quality), (anime style:1.5), (cel shading:1.4), (vibrant colors), (clean lines), (flat color), (official art style)"
      }
    ]
  };

  const API = {
    initUI(container) {
      const parent = document.querySelector("#list-presets") || container;
      parent.innerHTML = "";

      const section = document.createElement("div");
      section.className = "presets-v1";

      Object.entries(PRESETS).forEach(([cat, items]) => {
        const details = document.createElement("details");
        details.className = "preset-cat";
        details.open = false; // ★ 閉じておく

        const summary = document.createElement("summary");
        summary.textContent = cat;
        details.appendChild(summary);

        items.forEach(item => {
          const label = document.createElement("label");
          label.style.display = "block";
          label.textContent = item.label;
          label.title = item.val; 
          
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.dataset.en = item.val; 
          label.prepend(cb);
          details.appendChild(label);
        });

        section.appendChild(details);
      });

      parent.appendChild(section);
    },

    getTags() {
      const tags = [];
      document.querySelectorAll(".presets-v1 input[type='checkbox']:checked").forEach(cb => {
        tags.push(cb.dataset.en);
      });
      return tags;
    }
  };

  window.__registerPromptPart(KEY, VERSION, API);
})();

