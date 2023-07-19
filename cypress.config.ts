import { defineConfig } from "cypress";

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
    chromeWebSecurity: false, //This config it is necessary to run tests with Edge and Electron.
    env: {
      saucedemo_url: "https://www.saucedemo.com/",
      username_standard_user: "standard_user",
      username_problem_user: "problem_user",
      password: "secret_sauce",
    },
  },
});
