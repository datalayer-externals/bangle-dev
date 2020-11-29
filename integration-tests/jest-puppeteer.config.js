// jest-puppeteer.config.js
module.exports = {
  server: [
    {
      command: 'yarn workspace integration-tests serve-build',
      port: 1234,
      launchTimeout: 10000,
    },
  ],
  launch: {
    // headless: false,
    // slowMo: 50,
  },
};