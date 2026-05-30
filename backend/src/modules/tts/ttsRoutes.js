const express = require('express');
const router = express.Router();
const { synthesizeSpeech } = require('./ttsService');

router.post('/', async (req, res) => {
  const { text, lang } = req.body;

  if (!text || !lang) {
    return res.status(400).json({
      error: 'Missing required fields: text, lang',
    });
  }

  try {
    const audioData = await synthesizeSpeech(text, lang);
    res.set('Content-Type', 'audio/wav');
    res.send(audioData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;