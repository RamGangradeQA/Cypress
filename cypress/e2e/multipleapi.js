/// <refrence types = "cypress" />


describe('Api',()=>{

    it('Get Request',()=>{
            cy.request({
                        method : 'GET',
                        url : 'https://reqres.in/api/users/2',
                        // qs :{
                        //     'page' : '2'
                        // }


            }).then((resp)=>{
               // cy.log(resp.body.data.email);
             //  cy.log(resp.body.data.first_name);
             //  cy.log( resp.body.data.avatar)
             //   cy.log( resp.body.data.last_name)
             //   expect(resp.statusText).to.equal('OK')
               // expect(resp.status).to.equal(200)
           
                const dummy = resp.body.data.first_name
                return dummy
           
            })
                .then((dummy)=> {
                //cy.log('This is coming from 2nd '+ dummy)
               cy.request ({
                    method : 'POST',
                    url : 'https://reqres.in/api/users',
                    body:{
                        "name": dummy //"morpheus"  
                        ,
                        "job": "leader"
                     }
        })
        .then((resp)=>{
        cy.log(resp)   
        expect(resp.body.name).to.equal(dummy)
        
        })
        .then((dummy)=>{
            cy.log('THIS IS COMING FROM 3RD '+ dummy)
            cy.request({method : 'DELETE',
            url : 'https://reqres.in/api/users/2',
            })
            .then((resp)=>{
                expect(resp.status).to.equal(204)
                expect(resp.statusText).to.equal('No Content')

            })
        })
    })

})})