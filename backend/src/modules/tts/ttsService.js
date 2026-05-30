const axios = require('axios');

const VOICES = {
  tw: 'facebook/mms-tts-aka',
  en: 'facebook/mms-tts-eng',
};

const synthesizeSpeech = async (text, lang) => {
  if (!VOICES[lang]) {
    throw new Error(`No TTS voice available for language: ${lang}`);
  }

  const response = await axios.post(
    `https://api-inference.huggingface.co/models/${VOICES[lang]}`,
    { inputs: text },
    {
      headers: { 'Content-Type': 'application/json' },
      responseType: 'arraybuffer',
    }
  );

  return response.data;
};

module.exports = { synthesizeSpeech, VOICES };