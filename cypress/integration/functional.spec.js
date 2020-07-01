import "cypress-file-upload";
import "../support/commandsProduct";
import locators from "../support/locators";

describe("Should test at functional level", () => {
  beforeEach(() => {
    cy.login("aline@email.com", "supersecret", "Hello, Aline!");
  });

  const uniqueProductName =  `Cypress test product ${Math.random()}`;

  it("Should insert a product", () => {
    cy.accessSellProductMenu();
    cy.createProduct(
      uniqueProductName,
      "20.00",
      "This is a description for my Cypress test product. It must be at least 50 chars long",
      "../fixtures/bootcamp_image.png",
      "../fixtures/bootcamp_sample.pdf",
      "base64",
      "../fixtures/bootcamp_product.pdf"
    );
  });

  it("should not create a product with the same name ", () => {
    cy.accessSellProductMenu();
    cy.get(locators.createProducts.name)
      .type(uniqueProductName);
    cy.get(locators.createProducts.btnCreate).click();
    cy.get(locators.createProducts.nameError).should(
      "contain",
      "Name has already been taken"
    );
  });
});
