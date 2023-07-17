import { ELEMENTS } from "../element/checkout-complete"

const elem = ELEMENTS;

export class checkoutCompletePage{

    readonly baseURL:string

    constructor(url:string | undefined){
        if (url == undefined) {
            throw new Error("checkoutCompletePage: A variável url não foi definida");
        }
        if (url.length == 0) {
            throw new Error("checkoutCompletePage: A variável url está vazia");
        }

        this.baseURL = url
    }

    checkoutCompleteVisible(){
        cy.get(elem.title).should('be.visible')
        cy.get(elem.backToProducts).should('be.visible')
    }

    clickInBackHome(){
        cy.get(elem.backToProducts).click()
    }
}