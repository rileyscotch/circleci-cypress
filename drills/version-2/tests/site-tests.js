describe("Tests for HackerNews web site", () => {
  it("Displays properly and has working Jobs and more links", () => {
    cy.visit('/');
    cy.get('head > title').contains('Vue HN 2.0').should('exist');
    cy.get('ul li').should('have.length.above', '1');
    cy.get('.inner a').contains('New').should('have.attr', 'href', '/new');
    cy.url().should('eq', 'https://e2e-hackernews.herokuapp.com/top');
    cy.get('.inner a').should('have.length.above', '1');
    cy.get('.news-list-nav').contains('more').click().url().should('eq', 'https://e2e-hackernews.herokuapp.com/top/2');
    cy.get('ul li').should('have.length.above', '1');
    cy.get('.inner a').contains('Jobs').click().url().should('eq', 'https://e2e-hackernews.herokuapp.com/job');
    cy.get('ul li').should('have.length.above', '1');
  })
})
