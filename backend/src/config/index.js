require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  ghanaNLPApiKey: process.env.GHANANLP_API_KEY,
  geminiApiKey: process.env.GEMINI_API_KEY,
  hfApiKey: process.env.HF_API_KEY,
};