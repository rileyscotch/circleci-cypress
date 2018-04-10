describe('Dino Job Site Run Locally', () => {
  it('Meet E2E Testing Requirements for Interactive App', () => {
    cy.visit('/')
    cy.get('#job-listings li').should('have.length.above', 3)
    cy.get('.job-form input').eq(0).should('be.empty').type('Job Title')
    cy.get('.job-form input').eq(1).should('be.empty').type('Pay')
    cy.get('.job-form textarea').should('be.empty').type('Description')
    cy.get('.job-form input').eq(2).click()
    cy.get('.job-form input').eq(0).should('be.empty')
    cy.get('.job-form input').eq(1).should('be.empty')
    cy.get('.job-form textarea').should('be.empty')
    cy.get('#job-listings li').eq(0).as('newPosting')
    cy.get('@newPosting').find('h4').should('have.text', 'Job Title')
    cy.get('@newPosting').find('small').eq(0).should('have.text', 'Pay')
    cy.get('@newPosting').find('p').should('have.text', 'Description')
    cy.get('@newPosting').find('small').eq(1).should('have.text', '0 dinos are interested in this job')
  })
})
