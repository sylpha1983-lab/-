import { HC_PRESETS } from "./builder_data.hc_presets.js";

export function expandHC({ holo, body }) {
  let result = [];

  if (holo && HC_PRESETS.holoEmotion[holo]) {
    result.push(...HC_PRESETS.holoEmotion[holo]);
  }

  if (Array.isArray(body)) {
    body.forEach(c => {
      if (HC_PRESETS.bodyTemperature[c]) {
        result.push(...HC_PRESETS.bodyTemperature[c]);
      }
    });
  } else if (HC_PRESETS.bodyTemperature[body]) {
    result.push(...HC_PRESETS.bodyTemperature[body]);
  }

  return result;
}