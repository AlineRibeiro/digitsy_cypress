import "cypress-file-upload";

describe("Should test at functional level", () => {
  beforeEach(() => {
    cy.apiLogin("aline@email.com", "supersecret");
  });

  // const uniqueProductName = `Cypress test product ${Math.random()}`;

  it("should insert a product", () => {
    // let formData = new FormData();
    // formData.append( "product[thumbnail]", "../fixtures/bootcamp_image.png");

    cy.request({
      method: "POST",
      url: "http://localhost:3000/api/products",
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=----WebKitFormBoundaryoh3GYY6WEwLKtV1k",
      },
      form: true,
      body: {
        "product[name]": "Prod40",
        "product[price]": "130.00",
        "product[description]":
          "The description has to be at least 50 chars long or it wont work",
        // "product[thumbnail]": formData
      },
    }).as("response");
    // }).then((res) => console.log(res));

    cy.get("@response").then((res) => {
      expect(res.status).to.be.equal(201);
      expect(res.body).to.have.property("product").to.have.property("id");
      expect(res.body)
        .to.have.property("product")
        .to.have.property("name", "Prod40");
    });
  });

  // it("should not create a product with existing name", () => {});
  //
  // it("should get total cart price", () => {});
});
