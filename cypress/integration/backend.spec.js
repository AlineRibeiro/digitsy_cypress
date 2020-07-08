import "cypress-file-upload";


describe("Should test at functional level", () => {
  beforeEach(() => {
    // cy.login("aline@email.com", "supersecret", "Hello, Aline!");
  });

  // const uniqueProductName = `Cypress test product ${Math.random()}`;

  it("should insert a product", () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/api/session',
      body: {
        email: "aline@email.com",
        password: "supersecret"
      }
    }).its('body.user.id').should('not.be.empty');
  });

  it("should not create a product with existing name", () => {

  });

  it("should get total cart price", () => {

  });
});
