import { elements } from "../element/checkout-step-two";

export class checkoutStepTwoPage {
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

  isVisible() {
    cy.get(elements.title).should("be.visible");
    cy.get(elements.finish).should("be.visible");
    cy.get(elements.cancel).should("be.visible");
  }

  clickInFinish() {
    cy.get(elements.finish).click();
  }

  clickInCancel() {
    cy.get(elements.cancel).click();
  }
}
