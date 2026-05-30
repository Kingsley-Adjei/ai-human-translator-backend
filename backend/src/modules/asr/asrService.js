const axios = require('axios');
const { ghanaNLPApiKey } = require('../../config');

const MODELS = {
  tw: 'tw',
  en: 'en',
};

const transcribeAudio = async (audioBuffer, lang) => {
  if (!MODELS[lang]) {
    throw new Error(`No ASR model available for language: ${lang}`);
  }

  const response = await axios.post(
    `https://translation-api.ghananlp.org/asr/v2/transcribe?language=${MODELS[lang]}`,
    audioBuffer,
    {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'no-cache',
        'Ocp-Apim-Subscription-Key': ghanaNLPApiKey,
      },
    }
  );

  console.log('[ASR] Response:', response.data);

  return {
    text: response.data.text || response.data,
    lang,
    model: MODELS[lang],
  };
};

module.exports = { transcribeAudio, MODELS };