const express = require('express');
const router = express.Router();
const { translateText, SUPPORTED_LANGUAGES } = require('./translationService');

// GET /api/translate/languages
router.get('/languages', (req, res) => {
  res.json({ languages: SUPPORTED_LANGUAGES });
});

// POST /api/translate
router.post('/', async (req, res) => {
  const { text, sourceLang, targetLang } = req.body;

  if (!text || !sourceLang || !targetLang) {
    return res.status(400).json({
      error: 'Missing required fields: text, sourceLang, targetLang',
    });
  }

  try {
    const translated = await translateText(text, sourceLang, targetLang);
    res.json({
      original: text,
      translated,
      sourceLang,
      targetLang,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;