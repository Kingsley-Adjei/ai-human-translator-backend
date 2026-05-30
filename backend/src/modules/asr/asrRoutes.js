const express = require('express');
const router = express.Router();
const multer = require('multer');
const { transcribeAudio } = require('./asrService');

const upload = multer({ storage: multer.memoryStorage() });

router.post('/', upload.any(), async (req, res) => {
  const lang = req.body.lang;
  const audioFile = req.files?.find(f => f.fieldname === 'audio');

  if (!lang) {
    return res.status(400).json({ error: 'Missing required field: lang' });
  }

  if (!audioFile) {
    return res.status(400).json({ error: 'Missing audio file' });
  }

  try {
    const result = await transcribeAudio(audioFile.buffer, lang);
    res.json(result);
  } catch (error) {
    console.error('[ASR Error]', error.response?.data || error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;