//const { defineConfig } = require("cypress");
//const cucumber = require('cypress-cucumber-preprocessor').default
//const path = require('path');

//module.exports = defineConfig({
//  e2e: {
//      async setupNodeEvents(on, config) {
//      },
//      specPattern: "**/*.feature",
//      baseUrl: 'http://localhost:8080/api/v1/',
//      //chromeWebSecurity: false,
//  },
//});

const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    supportFile: false,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    baseUrl: "https://www.amazon.com.br/",
    viewportHeight: 720,
    viewportWidth: 1280,
  },
});