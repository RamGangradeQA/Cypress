class login{
static  setusername(username)
  {  cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(username);
}
static setpassword(password){
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password); 
}
static clicksubmit(){
    cy.get('.oxd-button').click();
}
static verifylogin(){
    cy.url().should("include", "/dashboard");
}

static verifyerrormessage(){
    cy.get('.oxd-alert-content').should("contain.text", errorMessage);
}}
export default login
