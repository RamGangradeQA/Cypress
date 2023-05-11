/// <refrence types = "cypress" />

describe('Put Api Series',()=>{

it('Delete Call update',()=>{
    cy.request({
        method :'Delete',
        url :'https://reqres.in/api/users/2',
        // body :{"name": "james",
        //         "job": "leader"}

}).then((checkCreate)=>{
    cy.log(checkCreate)
    //cy.log(checkCreate.body.updatedAt)
    expect(checkCreate.status).to.equal(204)
    expect(checkCreate.statusText).to.equal('No Content')

})})})
