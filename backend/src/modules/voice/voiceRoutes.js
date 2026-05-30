const express = require('express');
const router = express.Router();
const multer = require('multer');
const { processVoice } = require('./voiceService');

const upload = multer({ storage: multer.memoryStorage() });

// POST /api/voice
router.post('/', upload.any(), async (req, res) => {
  const { sourceLang, targetLang } = req.body;
  const audioFile = req.files?.find(f => f.fieldname === 'audio');

  if (!sourceLang || !targetLang) {
    return res.status(400).json({
      error: 'Missing required fields: sourceLang, targetLang',
    });
  }

  if (!audioFile) {
    return res.status(400).json({ error: 'Missing audio file' });
  }

  try {
    const result = await processVoice(audioFile.buffer, sourceLang, targetLang);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;