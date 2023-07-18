import { elements } from "../element/inventory";
import { productTestID } from "../../fixtures/products.json";

export class inventoryPage {
  readonly baseURL: string;

  constructor(url: string | undefined) {
    if (url == undefined) {
      throw new Error("inventoryPage: A variável url não foi definida");
    }
    if (url.length == 0) {
      throw new Error("inventoryPage: A variável url está vazia");
    }

    this.baseURL = url;
  }

  isVisible() {
    cy.get(elements.title).should("be.visible");
    cy.get(elements.cart).should("be.visible");
  }

  selectARandomProduct(productIndex: number) {
    cy.get(elements.productButton.replace("%s", productTestID[productIndex])).click();
  }

  clickInCart() {
    cy.get(elements.cart).click();
  }
}
