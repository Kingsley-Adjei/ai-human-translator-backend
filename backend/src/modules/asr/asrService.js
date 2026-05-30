const axios = require('axios');
const { geminiApiKey } = require('../../config');

const MODELS = {
  tw: 'tw',
  en: 'en',
};

const transcribeAudio = async (audioBuffer, lang) => {
  if (!MODELS[lang]) {
    throw new Error(`No ASR model available for language: ${lang}`);
  }

  const base64Audio = audioBuffer.toString('base64');

  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiApiKey}`,
    {
      contents: [
        {
          parts: [
            {
              inline_data: {
                mime_type: 'audio/wav',
                data: base64Audio,
              },
            },
            {
              text: lang === 'tw'
                ? 'Transcribe this Twi (Akan) audio exactly as spoken. Return only the transcribed text, nothing else.'
                : 'Transcribe this English audio exactly as spoken. Return only the transcribed text, nothing else.',
            },
          ],
        },
      ],
    },
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );

  const text = response.data.candidates[0].content.parts[0].text.trim();
  console.log('[ASR] Transcribed:', text);

  return {
    text,
    lang,
    model: 'gemini-2.0-flash',
  };
};

module.exports = { transcribeAudio, MODELS };