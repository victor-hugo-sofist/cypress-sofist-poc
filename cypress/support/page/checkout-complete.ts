import { elements } from "../element/checkout-complete";

export class checkoutCompletePage {
  readonly baseURL: string;

  constructor(url: string | undefined) {
    if (url == undefined) {
      throw new Error("checkoutCompletePage: A variável url não foi definida");
    }
    if (url.length == 0) {
      throw new Error("checkoutCompletePage: A variável url está vazia");
    }

    this.baseURL = url;
  }

  isVisible() {
    cy.get(elements.title).should("be.visible");
    cy.get(elements.backToProducts).should("be.visible");
  }

  clickInBackHome() {
    cy.get(elements.backToProducts).click();
  }
}
