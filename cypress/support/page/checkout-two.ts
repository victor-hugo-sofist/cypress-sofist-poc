import { ELEMENTS } from "../element/checkout-two";

const elem = ELEMENTS;

export class checkoutTwoPage {
  readonly baseURL: string;

  constructor(url: string | undefined) {
    if (url == undefined) {
      throw new Error("checkoutTwoPage: A variável url não foi definida");
    }
    if (url.length == 0) {
      throw new Error("checkoutTwoPage: A variável url está vazia");
    }

    this.baseURL = url;
  }

  checkoutTwoVisible() {
    cy.get(elem.title).should("be.visible");
    cy.get(elem.finish).should("be.visible");
    cy.get(elem.cancel).should("be.visible");
  }

  clickInFinish() {
    cy.get(elem.finish).click();
  }

  clickInCancel() {
    cy.get(elem.cancel).click();
  }
}
