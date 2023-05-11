/// <refrence types = "cypress" />

describe("checkbox",()=>{
it('navigate to page',()=>{
cy.visit("https://itera-qa.azurewebsites.net/home/automation")
// for visiblity

cy.get("#male").should('be.visible')
cy.get("#female").should('be.visible')
//for check

cy.get('#male').check().should('be.checked')
cy.get('input#female').should('not.be.checked')

cy.get('#female').check().should('be.checked')
cy.get('male').should('not.be.checked')

})




})