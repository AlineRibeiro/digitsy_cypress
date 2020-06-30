import "cypress-file-upload";
import locators from "../support/locators";

describe("Should test at functional level", () => {
  before(() => {
    cy.visit("http://localhost:3001/session/new");
    cy.get(locators.LOGIN.USER).type("aline@email.com");
    cy.get(locators.LOGIN.PASSWORD).type("supersecret");
    cy.get(locators.LOGIN.BTN_LOGIN).click();
    cy.get(locators.MENU.CURRENT_USER).should("contain", "Hello, Aline!");
  });

  it("Should insert a product", () => {
    cy.get(locators.MENU.SELL_PRODUCT).click();
    cy.get(locators.CREATE_PRODUCTS.NAME).type(
      `Cypress test product ${Math.random()}`
    );
    cy.get(locators.CREATE_PRODUCTS.PRICE).type("20.00");
    cy.get(locators.CREATE_PRODUCTS.DESCRIPTION).type(
      "This is a description for my Cypress test product. It must be at least 50 chars long"
    );
    cy.get(locators.CREATE_PRODUCTS.THUMBNAIL).attachFile(
      "../fixtures/bootcamp_image.png"
    );
    cy.get(locators.CREATE_PRODUCTS.SAMPLE_MEDIA).attachFile({
      filePath: "../fixtures/bootcamp_sample.pdf",
      encoding: "base64",
    });
    cy.get(locators.CREATE_PRODUCTS.MEDIA).attachFile({
      filePath: "../fixtures/bootcamp_product.pdf",
      encoding: "base64",
    });
    cy.get(locators.CREATE_PRODUCTS.BTN_CREATE).click();
    // cy.url().should('be', 'http://localhost:3001/products'); falta um wait aqui. algo assim
  });
});
