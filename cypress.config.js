const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video : true,   //To enable video recording
  reporter: 'cypress-mochawesome-reporter', // To generate HTML reports
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);  // To generate HTML reports
    },
  },
});

