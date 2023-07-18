import { loginPage } from "../support/page/login";
import { inventoryPage } from "../support/page/inventory";

// const url: string = Cypress.env("saucedemo_url");
const url: string = 'https://www.saucedemo.com/';

describe("Module login:", () => {
  const login: loginPage = new loginPage(url);
  const inventory: inventoryPage = new inventoryPage(url);

  beforeEach(function () {
    cy.clearAllCookies()
    login.access();
  });

  it("standard user should be login", () => {
    login.withUser(
      Cypress.env("username_standard_user"),
      Cypress.env("password"),
    );
    inventory.isVisible();
    cy.url().should("be.equal", url + "inventory.html");
  });

  it("problem user should be login", () => {
    login.withUser(
      Cypress.env("username_problem_user"),
      Cypress.env("password"),
    );
    inventory.isVisible();
    cy.url().should("be.equal", url + "inventory.html");
  });
});
