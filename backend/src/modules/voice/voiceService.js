const { transcribeAudio } = require('../asr/asrService');
const { translateText } = require('../translation/translationService');
const { synthesizeSpeech } = require('../tts/ttsService');

const processVoice = async (audioBuffer, sourceLang, targetLang) => {
  // Step 1 — ASR: audio → text
  console.log('[VOICE] Step 1: Transcribing audio...');
  const asrResult = await transcribeAudio(audioBuffer, sourceLang);
  const transcribedText = asrResult.text || asrResult;

  // Step 2 — Translation: source text → target text
  console.log('[VOICE] Step 2: Translating...');
  const translatedText = await translateText(transcribedText, sourceLang, targetLang);

  // Step 3 — TTS: translated text → audio
  console.log('[VOICE] Step 3: Synthesizing speech...');
  const ttsResult = await synthesizeSpeech(translatedText, targetLang);

  return {
    sourceLang,
    targetLang,
    transcribed: transcribedText,
    translated: translatedText,
    audio: ttsResult,
    timestamp: new Date().toISOString(),
  };
};

module.exports = { processVoice };