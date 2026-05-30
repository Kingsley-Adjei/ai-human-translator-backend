const axios = require('axios');
const { ghanaNLPApiKey } = require('../../config');

const VOICES = {
  tw: 'tw',
  en: 'en',
};

const synthesizeSpeech = async (text, lang) => {
  if (!VOICES[lang]) {
    throw new Error(`No TTS voice available for language: ${lang}`);
  }

  const response = await axios.post(
    'https://translation-api.ghananlp.org/tts/v2/synthesize',
    {
      text,
      language: VOICES[lang],
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Ocp-Apim-Subscription-Key': ghanaNLPApiKey,
      },
    }
  );

  console.log('[TTS v2] Status:', response.status);
  console.log('[TTS v2] Data:', response.data);

  return response.data;
};

module.exports = { synthesizeSpeech, VOICES };