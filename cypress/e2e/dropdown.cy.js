
/// refrence types = "cypress" />

describe('select dropdown ', ()=>{
it('Select list',()=>{
cy.visit('https://itera-qa.azurewebsites.net/home/automation')


cy.get(".custom-select").select('Greece')
.should('have.text','Greece')


})




})