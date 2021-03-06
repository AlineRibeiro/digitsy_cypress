import "cypress-file-upload";
import "../support/commandsProduct";
import "../support/commandsCart";
import locators from "../support/locators";

describe("Should test at functional level", () => {
  beforeEach(() => {
    cy.login("aline@email.com", "supersecret", "Hello, Aline!");
    cy.visit("http://localhost:3001/");
  });

  const uniqueProductName = `Cypress test product ${Math.random()}`;

  it("should insert a product", () => {
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

  it("should not create a product with existing name", () => {
    cy.accessSellProductMenu();
    cy.get(locators.createProducts.name).type(
      "Bootcamp Life - 10 survival tips"
    );
    cy.get(locators.createProducts.btnCreate).click();
    cy.get(locators.createProducts.nameError).should(
      "contain",
      "Name has already been taken"
    );
  });

  it("should get total cart price", () => {
    cy.accessBrowseProducts();
    cy.xpath(
      locators.productIndex.FN_XP_SHOPPING_CART_BTN("Living the pug life")
    ).click();
    cy.accessBrowseProducts();
    cy.xpath(
      locators.productIndex.FN_XP_SHOPPING_CART_BTN("React Hooks")
    ).click();
    cy.checkTotalPrice("147.41");
    cy.xpath(
      locators.shoppingCart.FN_XP_REMOVE_ITEM_BTN("React Hooks")
    ).click();
    cy.checkTotalPrice("137.42");
    cy.xpath(
      locators.shoppingCart.FN_XP_REMOVE_ITEM_BTN("Living the pug life")
    ).click();
    cy.checkTotalPrice("0.00");
  });
});
