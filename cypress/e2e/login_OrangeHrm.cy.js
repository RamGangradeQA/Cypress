describe('verify login form',()=> {
it('navigate to login page',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

})
it('verify username and password page',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get("[type='submit']").click()
})
it('verify dashboard',()=>{
cy.get(".oxd-icon bi-chevron-right").click()



})
})