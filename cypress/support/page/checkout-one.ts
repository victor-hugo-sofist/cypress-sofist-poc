import { ELEMENTS } from "../element/checkout-one";

const elem = ELEMENTS;

export class checkoutOnePage {
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

  checkoutOneVisible() {
    cy.get(elem.title).should("be.visible");
    cy.get(elem.firstName).should("be.visible");
    cy.get(elem.lastName).should("be.visible");
    cy.get(elem.postalCode).should("be.visible");
  }

  fillFirstName(firstname: string) {
    cy.get(elem.firstName).type(firstname);
  }

  fillLastName(lastName: string) {
    cy.get(elem.lastName).type(lastName);
  }

  fillZipCode(zipCode: string) {
    cy.get(elem.postalCode).type(zipCode);
  }

  clickInContinue() {
    cy.get(elem.continue).click();
  }
}
