describe('Smoke', () => {

  beforeEach(() => {
    cy.visit('/#/e2e/disabling-fields')
  })

  it('Should disable a field through the "disabled: true"-API', () => {
    cy.get('#super-form-field-input-field3')
      .should('exist')
      .should('be.disabled')
  })

  it('Should disable a field through the disabledIf API, using RegEx', () => {
    cy.get('#super-form-field-input-field1')
      .should('exist')
      .should('not.be.disabled')

    cy.get('#super-form-field-input-field2')
      .type('test')

    cy.get('#super-form-field-input-field1')
      .should('be.disabled')
  })

  it('Should disable a field through the disabledIf API, using the "empty" value', () => {
    cy.get('#super-form-field-input-field2')
      .should('exist')
      .should('not.be.disabled')

    cy.get('#super-form-field-input-field1')
      .clear()

    cy.get('#super-form-field-input-field2')
      .should('be.disabled')
  })

  it('Should disable a field through the disabledIf API, using the "not-empty" value', () => {
    cy
      .get('#super-form-field-input-disableIfField1IsNotEmpty')
      .should('exist')
      .should('be.disabled')

    cy
      .get('#super-form-field-input-field1')
      .clear()

    cy
      .get('#super-form-field-input-disableIfField1IsNotEmpty')
      .should('not.be.disabled')
  })
})