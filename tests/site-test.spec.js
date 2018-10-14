describe('PHP Travels Local Server Test', () => {
  it('Meets E2E Testing Requirements', () => {
    cy.visit('/')
    cy.get('header img').should('have.attr', 'src', `./images/phptravels-logo.png`)
    cy.get('h2').should('have.html', 'Application Test Drive.')
    cy.get('.dropdown-menu li').contains('Demo').should('exist')
    cy.get('.dropdown-menu li').contains('Order').should('exist')
    cy.get('.dropdown-menu li').contains('Product').should('exist')
    cy.get('.dropdown-submenu > ul > li').eq(0).find('a').should('have.text', 'Product')
    cy.get('.dropdown-submenu > ul > li').eq(1).find('a').should('have.text', 'Documentation')
    cy.get('.dropdown-submenu > ul > li').eq(2).find('a').should('have.text', 'Features')
    cy.get('.dropdown-submenu > ul > li').eq(3).find('a').should('have.text', 'Technology')
    cy.get('body > section > ul').find('h4').should('have.length', 6)
    cy.get('.dropdown-toggle').click()
    cy.get('a').contains('Order').click()
    cy.url().should('contains', '/order.html')
  })
})
// describe('Page content', () => {
//   it('shows correct content', () => {
//     cy.visit('/');
//     cy.get('header img').should('have.attr', 'src', './images/phptravels-logo.png');
//     cy.get('h2').should('have.text', 'Application Test Drive.');

//     cy.get('body > header nav > ul > li').as('listItems');
//     cy
//       .get('@listItems')
//       .eq(0)
//       .find('a')
//       .should('have.text', 'Demo');
//     cy
//       .get('@listItems')
//       .eq(1)
//       .find('a')
//       .should('have.text', 'Order');
//     cy
//       .get('@listItems')
//       .eq(2)
//       .find('a')
//       .contains('Product')
//       .should('have.text', 'Product');

//     cy.get("nav > button").click();

//     cy
//       .get('@listItems')
//       .eq(2)
//       .find('ul > li')
//       .as('dropDown');
//     cy
//       .get('@dropDown')
//       .eq(1)
//       .should('have.text', 'Documentation');
//     cy
//       .get('@dropDown')
//       .eq(2)
//       .should('have.text', 'Features');
//     cy
//       .get('@dropDown')
//       .eq(3)
//       .should('have.text', 'Technology');

//     cy
//       .get('body > section')
//       .eq(2)
//       .find('h4')
//       .should('have.length', 6);

//     cy
//       .get('a')
//       .contains('Order')
//       .click();
//     cy.url().should('be', '/order');
//   });
// });
