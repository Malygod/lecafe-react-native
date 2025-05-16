/**
 * metro.config.js
 * Este “wrapper” usa la configuración de Metro que Expo espera.
 */
const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);
  return config;
})();