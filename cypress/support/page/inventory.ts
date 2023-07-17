import { ELEMENTS } from "../element/inventory"
import { productTestID } from "../../fixtures/products.json"

const elem = ELEMENTS
const prodTestID = productTestID

export class inventoryPage{

    readonly baseURL:string

    constructor(url:string | undefined){
        if (url == undefined) {
            throw new Error("inventoryPage: A variável url não foi definida");
        }
        if (url.length == 0) {
            throw new Error("inventoryPage: A variável url está vazia");
        }

        this.baseURL = url
    }

    inventoryPageIsVisible(){
        cy.get(elem.title).should('be.visible')
        cy.get(elem.cart).should('be.visible')
    }

    selectARandomProduct(productIndex:number){
        cy.get(elem.productButton.replace('%s', prodTestID[productIndex])).click()
    }

    clickInCart(){
        cy.get(elem.cart).click()
    }
}