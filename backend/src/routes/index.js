const express = require('express');
const router = express.Router();
const translationRoutes = require('../modules/translation/translationRoutes');
const ttsRoutes = require('../modules/tts/ttsRoutes');
const asrRoutes = require('../modules/asr/asrRoutes');
const chatRoutes = require('../modules/chat/chatRoutes');
const voiceRoutes = require('../modules/voice/voiceRoutes');

router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

router.use('/translate', translationRoutes);
router.use('/tts', ttsRoutes);
router.use('/asr', asrRoutes);
router.use('/chat', chatRoutes);
router.use('/voice', voiceRoutes);

module.exports = router;