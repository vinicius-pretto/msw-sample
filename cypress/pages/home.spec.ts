describe("Home", () => {
  it("should render the users", () => {
    cy.visit("/");

    cy.contains("Ronald").should("be.visible");
    cy.contains("Polly").should("be.visible");
    cy.contains("James").should("be.visible");
  });
});
