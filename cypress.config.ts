import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      saucedemo_url: "https://www.saucedemo.com/",
      username_standard_user: "standard_user",
      username_problem_user: "problem_user",
      password: "secret_sauce",
    },
  },
});
