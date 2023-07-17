import { ELEMENTS } from "../element/cart"

const elem = ELEMENTS;

export class cartPage{

    readonly baseURL:string

    constructor(url:string | undefined){
        if (url == undefined) {
            throw new Error("cartPage: A variável url não foi definida");
        }
        if (url.length == 0) {
            throw new Error("cartPage: A variável url está vazia");
        }

        this.baseURL = url
    }

    cartPageIsVisible(){
        cy.get(elem.yourCart).should('be.visible');
        cy.get(elem.checkout).should('be.visible');
    }

    clickInCheckout(){
        cy.get(elem.checkout).click();
    }
}