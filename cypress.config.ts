import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false, //This config it is necessary to run tests with Edge and Electron.
    env: {
      saucedemo_url: "https://saucedemo.com/",
      username_standard_user: "standard_user",
      username_problem_user: "problem_user",
      password: "secret_sauce",
    },
  },
});
