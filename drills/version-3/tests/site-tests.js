describe("Tests for Galvanize Dino", () => {
  it('Passes all assertions', () => {
    cy.visit('/');
    cy.get('#job-listings li').should('have.length.above', '3');
    cy.get('.job-form input:first').should('have.text', '');
    cy.get('.job-form input:first').type('Job Title');
    cy.get('.job-form input').eq(1).type('Pay');
    cy.get('.job-form textarea').type('Description');
    cy.get('.job-form input').eq(2).click();
    cy.get('.job-form input').should('have.text', '');
    cy.get('#job-listings li').should('contain', 'Title');
    cy.get('#job-listings li small:first').should('have.text', 'Pay');
    cy.get('#job-listings li').should('contain', 'Description');
    cy.get('#job-listings li').should('contain', '0 dinos are interested in this job');
  })
})
