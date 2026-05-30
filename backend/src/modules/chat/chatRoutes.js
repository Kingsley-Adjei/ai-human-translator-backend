const express = require('express');
const router = express.Router();
const { processChat } = require('./chatService');

// POST /api/chat
router.post('/', async (req, res) => {
  const { message, sourceLang, targetLang } = req.body;

  if (!message || !sourceLang || !targetLang) {
    return res.status(400).json({
      error: 'Missing required fields: message, sourceLang, targetLang',
    });
  }

  try {
    const result = await processChat(message, sourceLang, targetLang);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;