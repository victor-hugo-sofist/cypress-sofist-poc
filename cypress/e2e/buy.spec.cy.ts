import { loginPage } from "../support/page/login"
import { inventoryPage } from "../support/page/inventory"
import { cartPage } from "../support/page/cart"
import { checkoutOnePage } from "../support/page/checkout-one"
import { checkoutTwoPage } from "../support/page/checkout-two"
import { checkoutCompletePage } from "../support/page/checkout-complete"

import { productName } from "../fixtures/products.json"
import { customer } from "../fixtures/customer.json"
import { title } from "../fixtures/page.json"
import { message } from "../fixtures/page.json"

import { randomZipCode } from "../support/utils/zip-code"


const url:string = Cypress.env('saucedemo_url')

const products = productName;
const cust = customer
const pageTitle = title
const pageMessage = message

describe('Module buy:', () => {

  const login:loginPage = new loginPage(url)
  const inventory:inventoryPage = new inventoryPage(url)
  const cart:cartPage = new cartPage(url)
  const checkoutOne:checkoutOnePage = new checkoutOnePage(url)
  const checkoutTwo:checkoutTwoPage = new checkoutTwoPage(url)
  const checkoutComplete:checkoutCompletePage = new checkoutCompletePage(url)
  
  beforeEach(function () {
    login.access()
  });

  it('standard user should buy a product', () => {
    let productIndex: number = Math.round(Math.random() * 4)

    login.withUser(Cypress.env('username_standard_user'),Cypress.env('password'))
    
    cy.url().should('be.equal', url+'inventory.html')
    inventory.inventoryPageIsVisible()
    cy.contains(pageTitle.inventory).should('be.visible')
    inventory.selectARandomProduct(productIndex)
    inventory.clickInCart()

    cy.url().should('be.equal', url+'cart.html')
    cart.cartPageIsVisible()
    cy.contains(pageTitle.cart).should('be.visible')
    cy.contains(products[productIndex]).should('be.visible')
    cart.clickInCheckout()

    cy.url().should('be.equal', url+'checkout-step-one.html')
    checkoutOne.checkoutOneVisible()
    cy.contains(pageTitle.checkoutOne).should('be.visible')
    checkoutOne.fillFirstName(cust.firstName)
    checkoutOne.fillLastName(cust.lastName)
    checkoutOne.fillZipCode(randomZipCode())
    checkoutOne.clickInContinue()

    cy.url().should('be.equal', url+'checkout-step-two.html')
    checkoutTwo.checkoutTwoVisible()
    cy.contains(pageTitle.checkoutTwo).should('be.visible')
    cy.contains(products[productIndex]).should('be.visible')
    checkoutTwo.clickInFinish()

    cy.url().should('be.equal', url+'checkout-complete.html')
    checkoutComplete.checkoutCompleteVisible()
    cy.contains(pageTitle.checkoutComplete).should('be.visible')

    cy.contains(pageMessage.thanksForOrder).should('be.visible')
    cy.contains(pageMessage.orderDispatched).should('be.visible')

    checkoutComplete.clickInBackHome()
    cy.url().should('be.equal', url+'inventory.html')
  })
})