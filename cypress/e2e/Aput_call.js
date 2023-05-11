/// <refrence types = "cypress" />

describe('Put Api Series',()=>{
    it('Put Call update',()=>{
        cy.request({
            method :'PUT',
            url :'https://reqres.in/api/users/2',
            body :{"name": "james",
                    "job": "leader"}

    }).then((checkCreate)=>{
        cy.log(checkCreate)
       expect(checkCreate.status).to.equal(200)
      expect(checkCreate.body.name).to.equal('james')
         expect(checkCreate.body.job).to.equal('leader')


    })



    })




})