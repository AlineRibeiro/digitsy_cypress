import "cypress-file-upload";

describe("Should test at functional level", () => {
  beforeEach(() => {
    // cy.login("aline@email.com", "supersecret", "Hello, Aline!");
  });

  // const uniqueProductName = `Cypress test product ${Math.random()}`;

  it("should insert a product", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/api/session",
      body: {
        email: "aline@email.com",
        password: "supersecret",
      },
    })
      .its("body.user.id")
      .should("not.be.empty");
    cy.request({
      method: "POST",
      url: "http://localhost:3000/api/products",
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=----WebKitFormBoundaryoh3GYY6WEwLKtV1k",
      },
      form: true,
      body: {
        "product[name]": "Prod73",
        "product[price]": "130.00",
        "product[description]":
          "The description has to be at least 50 chars long or it wont work",
      },
    }).as("response");

    cy.get("@response").then((res) => {
      expect(res.status).to.be.equal(201);
      expect(res.body).to.have.property('product').to.have.property('id');
      expect(res.body).to.have.property('product').to.have.property('name', "Prod73");
    });
  });

  it("should not create a product with existing name", () => {});

  it("should get total cart price", () => {});
});
