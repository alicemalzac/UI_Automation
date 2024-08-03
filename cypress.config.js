const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "15f6t3",
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  video: true,
  trashAssetsBeforeRuns: true,
  
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
