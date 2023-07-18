import { elements } from "../element/login";

export class loginPage {
  readonly baseURL: string;

  constructor(url: string | undefined) {
    if (url == undefined) {
      throw new Error("loginPage: A variável url não foi definida");
    }
    if (url.length == 0) {
      throw new Error("loginPage: A variável url está vazia");
    }

    this.baseURL = url;
  }

  access() {
    cy.visit(this.baseURL);
    cy.get(elements.username).should("be.visible");
    cy.get(elements.password).should("be.visible");
    cy.get(elements.loginButton).should("be.visible");
  }

  withUser(username: string, password: string) {
    cy.get(elements.username).type(username);
    cy.get(elements.password).type(password);
    cy.get(elements.loginButton).click();
  }
}
