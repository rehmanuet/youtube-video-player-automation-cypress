/// <reference types="cypress" />

const youtube = require("../../support/selectors");
const moment = require("moment");

describe("Open Youtube", () => {
  before(() => {
    cy.visit("/");
    cy.searchVideo("movingimage");
    cy.get(youtube.selectors.video).first().click();
  });

  it("validates the miniplayer functionality", () => {
    /*
     * Testcase: Validate the miniplayer functionality.
     * Verify that player is maximize by-default and then click on
     * mini-player button to minimize and assert the result from DOM attr
     */
    cy.openSetting();
    cy.get(youtube.selectors.miniPlayerUi).should(
      "have.attr",
      "style",
      "display: none;"
    );
    cy.get(youtube.selectors.miniPlayerButton).trigger("mouseover").click();
    cy.get(youtube.selectors.miniPlayerUi).should("have.attr", "style", "");

    /*
     * Testcase: Validate the maximize the miniplayer functionality.
     * Verify that player is minimize and then click on maximize
     * mini-player button to maximize and assert the result from DOM attr.
     */
    cy.get(youtube.selectors.miniPlayerUi).should("have.attr", "style", "");
    cy.get(youtube.selectors.maximizeMiniPlayer).trigger("mouseover").click();
    cy.get(youtube.selectors.miniPlayerUi).should(
      "have.attr",
      "style",
      "display: none;"
    );
  });
});