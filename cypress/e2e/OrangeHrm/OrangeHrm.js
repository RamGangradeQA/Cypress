import {Given , When , Then , And} from "cypress-cucumber-preprocessor/steps";

Given('Go to login page', ()=>{
cy.visit('/baseurl')
}),
When('enter username and password',()=>{
    
   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
   cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    
})/*,
And('click on the login button',()=>{
   cy.get('.oxd-button').click()

}),
Then('exit',()=>{
   cy.get('.oxd-userdropdown-tab > .oxd-icon').rightclick()

})*/