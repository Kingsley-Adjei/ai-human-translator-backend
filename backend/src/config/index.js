require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  anthropicApiKey: process.env.ANTHROPIC_API_KEY,
  abenaApiKey: process.env.ABENA_API_KEY,
};