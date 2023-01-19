describe('dashboard', () => {
  beforeEach(() => {
    cy.loginAdmin()
  })

  it("opens dashboard", () => {
    cy.location("pathname").should("eq", "/dashboard")
  })

  it("can toggle editmode", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.btn-group > .d-flex').should('have.text', '  Layout anpassen');
    cy.get('.btn-group > .d-flex').click();
    cy.get('.btn-success').should('have.text', '  Layout speichern');
    cy.get('.btn-success').click();
    cy.get('.Toastify__toast-body > :nth-child(2)').should('have.text', 'Layout gespeichert');
    /* ==== End Cypress Studio ==== */
  })

  it("can enable and disable tile", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.btn-group > .d-flex').should('have.text', '  Layout anpassen');
    cy.get('.btn-group > .d-flex').click();
    cy.get('#dropdown-basic').should('have.text', '  Kacheln');
    cy.get('#dropdown-basic').click();
    cy.get(':nth-child(6) > .form-check-label').should('have.text', 'Wetter Tabelle');
    cy.get('#tt-dd').should('not.be.checked');
    cy.get('#tt-dd').check();
    cy.get('#tt-dd').should('be.checked');
    cy.get('.btn-success').should('have.text', '  Layout speichern');
    cy.get('.btn-success').click();
    cy.get('.Toastify__toast-body > :nth-child(2)').should('have.text', 'Layout gespeichert');
    /* ==== End Cypress Studio ==== */
  })
})