import locators from "./locators";

Cypress.Commands.add("checkOut", () => {
  cy.get(locators.shoppingCart.checkout).click();
});

Cypress.Commands.add("removeCartItem", () => {
  cy.get(locators.shoppingCart.removeItemBtn).click();
});

Cypress.Commands.add("checkTotalPrice", (totalPrice) => {
  cy.get(locators.shoppingCart.totalPrice).should(
    "contain",
    `Total Price: $${totalPrice}`
  );
});
