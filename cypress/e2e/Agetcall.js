/// <refrence types = "cypress" />


describe('Api seriesr',()=>{

    it('Get Request',()=>{
            cy.request({
                        method : 'GET',
                        url : 'https://reqres.in/api/users?pages=2',
                        // qs :{
                        //     'page' : '2'
                        // }


            }).then((resp)=>{
                cy.log(resp.body.data[1].email);
                cy.log(resp.body.data[1].first_name);
               cy.log( resp.body.data[1].avatar)
                cy.log( resp.body.data[1].last_name)
                expect(resp.statusText).to.equal('OK')
                expect(resp.status).to.equal(200)
            })
    })

    it('Get Single Request',()=>{
        cy.request({
                    method : 'GET',
                    url : 'https://reqres.in/api/users/2',
        }).then((resp)=>{
            expect(resp.status).to.equal(200)
            cy.log(resp.body.data.first_name)

        })
})
it('Get SINGLE USER NOT FOUND ',()=>{
    cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users/23', // An endpoint that doesn't exist
        failOnStatusCode: false
      }).then((check) => {
        expect(check.status).to.eq(404)
      })
    })

//it('Get LIST <RESOURCE> ',()=>{
      //  cy.request('https://reqres.in/api/unknown')
          //    .its('body')
         //     .then((body) => {
          //      console.log(body); // Log the response body to the console
                // Verify the response properties and values
        //    method: 'GET',
          //  url: 'https://reqres.in/api/unknown'            
            
    //       }).then((check) => {
    //     // Verify the status code
    //    // expect(check.status).to.eq(200);

    //     // Parse the response body as JSON
    //     const resp = JSON.parse(check.body);

    //     // Verify that the response body is an array of objects
    //     expect(resp).to.be.an('array');

    //     // Verify that the array contains the expected number of objects
    //     expect(resp).to.have.lengthOf(5);

    //     // Verify that each object in the array has the expected properties and values
    //     expect(resp[0]).to.containSubset({
    //       id: 1,
    //       name: 'Resource 1',
    //       description: 'Description of Resource 1',
    //     });
    //     expect(resp[1]).to.containSubset({
    //       id: 2,
    //       name: 'Resource 2',
    //       description: 'Description of Resource 2',
        
        // and so on for each object in the array
    
    
    
    
    
    });



