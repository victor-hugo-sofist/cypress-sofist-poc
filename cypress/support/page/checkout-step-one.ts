import { elements } from "../element/checkout-step-one";

export class checkoutStepOnePage {
  readonly baseURL: string;

  constructor(url: string | undefined) {
    if (url == undefined) {
      throw new Error("checkoutOnePage: A variável url não foi definida");
    }
    if (url.length == 0) {
      throw new Error("checkoutOnePage: A variável url está vazia");
    }

    this.baseURL = url;
  }

  isVisible() {
    cy.get(elements.title).should("be.visible");
    cy.get(elements.firstName).should("be.visible");
    cy.get(elements.lastName).should("be.visible");
    cy.get(elements.postalCode).should("be.visible");
  }

  fillFirstName(firstname: string) {
    cy.get(elements.firstName).type(firstname);
  }

  fillLastName(lastName: string) {
    cy.get(elements.lastName).type(lastName);
  }

  fillZipCode(zipCode: string) {
    cy.get(elements.postalCode).type(zipCode);
  }

  clickInContinue() {
    cy.get(elements.continue).click();
  }
}
