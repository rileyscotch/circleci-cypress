describe('Tests for app PHPTravels', ()=> {
  it('Has phptravels logo at the top ', ()=> {
    cy.visit('/');
    cy.get('header > img').should('have.attr', 'src', './images/phptravels-logo.png')
  })
  it('Has a secondary header that reads "Application Test Drive"', ()=> {
    cy.get('.title > h2').should('have.text', 'Application Test Drive.')
  })
  it('Has nav links for "Demo", "Order", and "Product"', ()=> {
    cy.get('a').contains('Demo' && 'Order' && 'Product').should('exist')
  })
  it('Has a sub-menu with items "Documentation", "Features", "Technology"', () => {
     cy.get('.dropdown-menu a').contains('Documentation').should('exist')
     cy.get('.dropdown-menu a').contains('Features').should('exist')
     cy.get('.dropdown-menu a').contains('Technology').should('exist')
   })
   it('Has an FAQ list with 6 items',() => {
     cy.get('h4').should('have.length', '6')
   })
   it('Clicking the "Order" links takes you to /order page', () =>{
     cy.get('.dropdown-toggle').click()
     cy.get('a').contains('Order').click()
     cy.url().should('contain', 'order.html')
   })
})
