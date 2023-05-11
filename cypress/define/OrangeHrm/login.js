// Import the required modules
import { Given, When, Then ,Before} from "cypress-cucumber-preprocessor/steps";
import login from "../../pages/loginpage.js";
//create constructor
//const ln=new login();
 // Define the Given step
 Before(() => {
  // Navigate to the login page
  //cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
});

Given("user open the login Page", () => {
  // This step is now part of the Background section
 //  cy.visit(Cypress.config().baseurl1)
  //cy.visit(Cypress.config('baseUrl'))
 // cy.visit('/')
 // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 

// call Environment variable
//cy.visit(Cypress.env('url'))   // error showing work on


});

// Define the When step
When("user enter a username {string}", (username) => {
  //cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(username); 
  login.setusername(username);
});

And("user enter a password {string}", (password) => {
  //cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password); 
  login.setpassword(password);


});

And("user click the sign-in button", () => {
  //cy.get('.oxd-button').click(); 
  login.clicksubmit();

});

// Define the Then step
Then("user should be able to login", () => {
  cy.url().should("include", "/dashboard")
  //.then()
    // Debugger is hit after the cy.visit
    // and cy.get commands have completed  
    // debugger
});

// invalid

Given("user open the login Page", () => {
  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
});

When("user enter a username {string}", (username) => {
  cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(username);
});

When("user enter a password {string}", (password) => {
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);
});

When("user click the sign-in button", () => {
  cy.get('.oxd-button').click();
});

Then("error should displayed as {string}", (errorMessage) => {
  cy.get('.oxd-alert-content').should('have.text',errorMessage)
});


Given('I am on the login page',()=>{

  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.url().should("include", "opensource-demo");

}),
When ('I click on the forgot password link',()=>{
    cy.get('.orangehrm-login-forgot > .oxd-text').click()

})
Then ('I should be redirected to the reset password page',()=>{
  cy.get('.oxd-input').type('Admin')
  cy.url().should("include", "requestPasswordResetCode");

  cy.get('.oxd-button--ghost').click()
  cy.get('.orangehrm-login-forgot > .oxd-text').click()
  cy.get('.oxd-input').type('Admin')
  cy.get('.oxd-button--secondary').click()



})
And ('Link successfully sent',()=>{

  cy.get('.oxd-text--h6').should('contain.text','Reset Password link sent successfully')


})





/*




import {Given , When , Then , And} from "cypress-cucumber-preprocessor/steps";


Given('user open the login Page', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }),
    When('user enter a <userName>',(string)=>{
        
       cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')//.type('Admin')
       
        
    }),
    And('user enter a password <password> ',()=>{
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')//.type('admin123')
        
    
    }),
    And('user click the sign-in button',()=>{
        cy.get('.oxd-button').click()
        cy.get('.oxd-userdropdown-tab > .oxd-icon').rightclick()
    
    cy.end()
    }),
    Then ("user should be able to login",()=>{   
})
*/