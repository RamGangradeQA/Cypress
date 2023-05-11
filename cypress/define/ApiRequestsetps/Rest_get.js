import { Given, Then } from "cypress-cucumber-preprocessor/steps";

//const baseUrl = "https://reqres.in/api/users?page=2";

Given("Get Call to url {string}", (url) => {
    cy.request({
      method :'GET',
      url : url
    }).as('response');
});

//Then("Response Code {string} is validated", (responseMessage) => {
 //cy.get("@response").its("status").should("equal", parseInt(responseMessage));
//});
