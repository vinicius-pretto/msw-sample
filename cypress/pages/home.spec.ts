import usersResponse from "../../src/fixtures/users.json";

describe("Home", () => {
  it("should render the users", () => {
    cy.intercept("GET", "**/api/users", {
      statusCode: 200,
      body: usersResponse,
    });

    cy.visit("/");

    cy.contains("Ronald").should("be.visible");
    cy.contains("Polly").should("be.visible");
    cy.contains("James").should("be.visible");
  });
});
