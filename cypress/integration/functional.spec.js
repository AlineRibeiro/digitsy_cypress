import "cypress-file-upload";
import "../support/commandsProduct";
import locators from "../support/locators";

describe("Should test at functional level", () => {
  before(() => {
    cy.login("aline@email.com", "supersecret", "Hello, Aline!");
  });

  it("Should insert a product", () => {
    cy.accessSellProductMenu();
    cy.createProduct(
      `Cypress test product ${Math.random()}`,
      "20.00",
      "This is a description for my Cypress test product. It must be at least 50 chars long",
      "../fixtures/bootcamp_image.png",
      "../fixtures/bootcamp_sample.pdf",
      "base64",
      "../fixtures/bootcamp_product.pdf"
      // cy.url().should('be', 'http://localhost:3001/products');
      // maybe add a wait or something like this
    );
  });

  it.only("should not create a product with the same name ", () => {
    cy.accessSellProductMenu();
    cy.get(locators.create_products.name).type(
      "Bootcamp Life - 10 survival tips"
    );
    cy.get(locators.create_products.btn_create).click();
    cy.get(locators.create_products.nameError).should(
      "contain",
      "Name has already been taken"
    );
  });
});
