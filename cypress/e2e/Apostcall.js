/// <refrence types = "cypress" />

describe('Post Api Series',()=>{
    it('Pust Call Create',()=>{
        cy.request({
            method :'POST',
            url :'https://reqres.in/api/users',
            body :{"name": "morpheus",
                    "job": "leader"}

    }).then((checkCreate)=>{
        expect(checkCreate.status).to.equal(201)
        expect(checkCreate.body.name).to.equal('morpheus')
        expect(checkCreate.body.job).to.equal('leader')


    })



    })


    it('Put Call update',()=>{
        cy.request({
            method :'PUT',
            url :'https://reqres.in/api/users/2',
            body :{"name": "james",
                    "job": "leader"}

    }).then((checkCreate)=>{
        cy.log(checkCreate)
        cy.log(checkCreate.body.updatedAt)
        expect(checkCreate.status).to.equal(200)
})})
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


})})


})