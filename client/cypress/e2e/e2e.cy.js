describe("Test rendering", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport(1920, 1080);
  });

  it("check for hamburger on smaller screens", () => {
    cy.viewport("ipad-2");
    cy.get("svg");
  });

  it("check for searchbar", () => {
    cy.get('[id="countrySearch"]');
  });

  it("check for sidebar", () => {
    cy.get('[id="countryList"]');
  });

  it("check for loading title awaiting selected country", () => {
    cy.get('[id="title"]').contains("Loading...");
  });

  it("check for no image of flag", () => {
    cy.get("#countryFlag").should("not.exist");
  });
  
  it("check for no google maps iframe association", () => {
    cy.get("#google-iframe").should("not.exist");
  });
  
  it("check to see if all countries retrieved and clickable", () => {
    cy.get('[id="countryList"]').children().should("have.length", 250);
    cy.get('[id="countryList"] > :nth-child(1) button').click();
  });

  it("check to see if all stats retrieved from clicked country of Afghanistan", () => {
    cy.get('[id="countryList"] > :nth-child(1) button').click();
    cy.get("#countryFlag").should("exist");
    cy.get("#google-iframe").should("exist");
    cy.get("#country-stats").should("exist");
    cy.get("#country-stats").children().should("have.length", 8);
    cy.get("p").contains("Afghanistan");
    cy.get("p").contains("Islamic Republic of Afghanistan");
    cy.get("p").contains("Kabul");
    cy.get("p").contains("Asia");
    cy.get("p").contains("40218234");
    cy.get("p").contains("Southern Asia");
    cy.get("p").contains("UTC+04:30");
    cy.get("p").contains("Dari");
  });
});
