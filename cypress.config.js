//<reference types=”@shelex/cypress-allure-plugin” />
const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress")
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
        allureWriter(on, config);  
        return config;
     },
     specPattern:"cypress/integration/**/*.feature"
     //specPattern:"cypress/e2e/*.js"

    // baseUrl: "https://opensource-demo.orangehrmlive.com",
    // baseurl1:"https://www.google.com/",
  }
});

