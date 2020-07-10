// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import locators from "./locators";

Cypress.Commands.add("login", (username, password, greeting) => {
  cy.visit("http://localhost:3001/session/new");
  cy.get(locators.login.user).type(username);
  cy.get(locators.login.password).type(password);
  cy.get(locators.login.btnLogin).click();
  cy.get(locators.menu.currentUser).should("contain", greeting);
});

Cypress.Commands.add("apiLogin", (email, password) => {
  cy.request({
    method: "POST",
    url: "/session",
    body: {
      email: email,
      password: password,
    },
  })
    .its("body.user.id")
    .should("not.be.empty");
});
