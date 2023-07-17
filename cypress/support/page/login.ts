import { ELEMENTS } from "../element/login"

const elem = ELEMENTS;

export class loginPage{

    readonly baseURL:string

    constructor(url:string | undefined){
        if (url == undefined) {
            throw new Error("loginPage: A variável url não foi definida");
        }
        if (url.length == 0) {
            throw new Error("loginPage: A variável url está vazia");
        }

        this.baseURL = url
    }

    access(){
        cy.visit(this.baseURL)
        cy.get(elem.username).should('be.visible')
        cy.get(elem.password).should('be.visible')
        cy.get(elem.loginButton).should('be.visible')
    }

    withUser(username:string, password:string){
        cy.get(elem.username).type(username)
        cy.get(elem.password).type(password)
        cy.get(elem.loginButton).click()
    }
}