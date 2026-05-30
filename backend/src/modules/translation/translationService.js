const axios = require('axios');
const { ghanaNLPApiKey } = require('../../config');

const SUPPORTED_LANGUAGES = {
  en: 'English',
  tw: 'Twi (Asante Akan)',
};

const translateText = async (text, sourceLang, targetLang) => {
  if (!SUPPORTED_LANGUAGES[sourceLang] || !SUPPORTED_LANGUAGES[targetLang]) {
    throw new Error(`Unsupported language pair: ${sourceLang} → ${targetLang}`);
  }

  if (sourceLang === targetLang) return text;

  const response = await axios.post(
    'https://translation-api.ghananlp.org/v1/translate',
    {
      in: text,
      lang: `${sourceLang}-${targetLang}`,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Ocp-Apim-Subscription-Key': ghanaNLPApiKey,
      },
    }
  );

  return response.data;
};

module.exports = { translateText, SUPPORTED_LANGUAGES };