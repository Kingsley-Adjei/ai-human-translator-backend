const { translateText } = require('../translation/translationService');

const processChat = async (message, sourceLang, targetLang) => {
  if (!message || !sourceLang || !targetLang) {
    throw new Error('Missing required fields: message, sourceLang, targetLang');
  }

  const translated = await translateText(message, sourceLang, targetLang);

  return {
    original: message,
    translated,
    sourceLang,
    targetLang,
    timestamp: new Date().toISOString(),
  };
};

module.exports = { processChat };