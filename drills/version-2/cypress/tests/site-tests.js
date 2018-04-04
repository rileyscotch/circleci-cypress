describe('Tests for HackerNews web site', () => {
  it('Displays properly and has working Jobs and more links', () => {
    cy.visit('/');
  })
  it('Has a title with "Vue HN 2.0" in it', () => {
    cy.get('head > title').contains('Vue HN 2.0').should('exist');
  })
  it('Has more than 1 news item on the page', () => {
    cy.get('ul li').should('have.length.above', '1');
  })
  it('Navigates to the "New" area via the link and makes sure you are on the correct page with more than 1 item', () => {
    cy.get('.inner a').contains('New').click().should('have.attr', 'href', '/new');
    cy.url().should('eq', 'https://e2e-hackernews.herokuapp.com/top');
    cy.get('.inner a').should('have.length.above', '1');
  })
  it('Navigates to the next set of results with the "more" link and makes sure you are on the correct page with more than 1 item'), () => {
    cy.get('.news-list-nav').contains('more').click().url().should('eq', 'https://e2e-hackernews.herokuapp.com/top/2');
    cy.get('ul li').should('have.length.above', '1');
  })
  it('Navigates to the next set of results with the "more" link and makes sure you are on the correct page with more than 1 item'), () => {
    cy.get('.inner a').contains('Jobs').click().url().should('eq', 'https://e2e-hackernews.herokuapp.com/job');
    cy.get('ul li').should('have.length.above', '1');
  })
})
