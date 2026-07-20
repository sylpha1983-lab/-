import { WORLD_PRESETS } from "./builder_data.world_presets.js";
import { expandHC } from "./builder_core.hc_expand.js";

export function buildWorldPrompt(presetKey) {
  const preset = WORLD_PRESETS[presetKey];
  if (!preset) return "";

  const hcWords = expandHC({
    holo: preset.holo,
    body: preset.body
  });

  return `
${hcWords.join(", ")},

${preset.emotion.join(", ")},

${preset.atmosphere.join(", ")}
`.trim();
}