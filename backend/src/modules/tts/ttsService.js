const axios = require('axios');
const { hfApiKey } = require('../../config');

const VOICES = {
  tw: 'facebook/mms-tts-aka',
  en: 'facebook/mms-tts-eng',
};

const synthesizeSpeech = async (text, lang, retries = 3) => {
  if (!VOICES[lang]) {
    throw new Error(`No TTS voice available for language: ${lang}`);
  }

  try {
    const response = await axios.post(
      `https://api-inference.huggingface.co/models/${VOICES[lang]}`,
      { inputs: text },
      {
        headers: {
          'Content-Type': 'application/json',
          ...(hfApiKey && { Authorization: `Bearer ${hfApiKey}` }),
        },
        responseType: 'arraybuffer',
      }
    );

    return response.data;
  } catch (error) {
    if (retries > 0 && error.response?.status === 503) {
      console.log(`[TTS] Model loading, retrying... (${retries} left)`);
      await new Promise(res => setTimeout(res, 10000));
      return synthesizeSpeech(text, lang, retries - 1);
    }
    throw error;
  }
};

module.exports = { synthesizeSpeech, VOICES };