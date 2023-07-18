import { elements } from "../element/cart";

export class cartPage {
  readonly baseURL: string;

  constructor(url: string | undefined) {
    if (url == undefined) {
      throw new Error("cartPage: A variável url não foi definida");
    }
    if (url.length == 0) {
      throw new Error("cartPage: A variável url está vazia");
    }

    this.baseURL = url;
  }

  isVisible() {
    cy.get(elements.yourCart).should("be.visible");
    cy.get(elements.checkout).should("be.visible");
  }

  clickInCheckout() {
    cy.get(elements.checkout).click();
  }
}
