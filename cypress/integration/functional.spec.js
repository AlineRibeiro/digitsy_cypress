import 'cypress-file-upload';

describe('Should test at functional level', () => {
  before(() => {
    cy.visit('http://localhost:3001/session/new');
    cy.get(':nth-child(1) > .ui > input').type('aline@email.com');
    cy.get(':nth-child(2) > .ui > input').type('supersecret');
    cy.get('.stacked > .teal').click();
    cy.get('.current-user').should('contain', 'Hello, Aline!')
  });

  it ('Should insert a product', () => {
    cy.get('.right > .my-menu').click();
    cy.get(':nth-child(1) > .ui > input').type(`Cypress test product ${Math.random()}`);
    cy.get(':nth-child(2) > .ui > input').type('20.00');
    cy.get('textarea').type('This is a description for my Cypress test product. It must be at least 50 chars long');
    cy.get('input[name="thumbnail"]').attachFile('../fixtures/bootcamp_image.png');
    cy.get('input[name="sample_media"]').attachFile({filePath: '../fixtures/bootcamp_sample.pdf', encoding: 'base64'});
    cy.get('input[name="media"]').attachFile({filePath: '../fixtures/bootcamp_product.pdf', encoding: 'base64'});
    cy.get(':nth-child(9) > .ui').click();
    // cy.url().should('be', 'http://localhost:3001/products'); falta um wait aqui. algo assim
  });

  // it.only()


});


