import {FIELD_WRAPPER_CLASS} from "@phormal/core/src/constants/css-selectors";

describe('Smoke', () => {

  beforeEach(() => {
    cy.visit('/#/e2e/smoke')
  })

  const FIRST_NAME_FIELD = 'input[id="phormal-field-input-firstName"]'
  const LAST_NAME_FIELD = 'input[id="phormal-field-input-lastName"]'
  const COUNTRY_SELECT = 'input[id="phormal-field-input-country"][role="button"]'
  const ZIP_CODE_FIELD = 'input[id="phormal-field-input-zip"]'
  const FIRST_NAME_ERROR = 'div[id="phormal-field-error-firstName"]'
  const ZIP_CODE_ERROR = 'div[id="phormal-field-error-zip"]'

  it('should render all expected fields', () => {
    cy.get(FIRST_NAME_FIELD).should('exist')
    cy.get(LAST_NAME_FIELD).should('exist')
    cy.get(COUNTRY_SELECT).should('exist')
  })

  it('Should set default values of all fields', () => {
    cy.get(FIRST_NAME_FIELD).should('have.value', 'John')
    cy.get(LAST_NAME_FIELD).should('have.value', 'Doe')
    cy.get(COUNTRY_SELECT).should('have.value', 'United States')
    cy.get(ZIP_CODE_FIELD).should('have.value', '51378')
  })

  it('Show an error message for an empty text field that is required', () => {
    // Negative check
    cy.get(FIRST_NAME_ERROR).should('not.exist')

    cy.get(FIRST_NAME_FIELD)
      .clear()
      .blur()
      .should('exist')
  })

  it('Should show an error message for a zip code field with a faulty format', () => {
    //Negative check
    cy.get(ZIP_CODE_ERROR).should('not.exist')

    cy.get(ZIP_CODE_FIELD)
      .clear()
      .type('1234')
      .blur()
      .should('exist')
  })

  it('Should display multiple fields in a row', () => {
    cy
      .get('.phlib__multiple-fields-row')
      // assert that there is only one row
      .should('have.length', 1)
      // assert that there are 3 fields in the row
      .find('.' + FIELD_WRAPPER_CLASS)
      .should('have.length', 3)
  })

  it('Should set a default value for a radiogroup', () => {
    // Check that the value of the radiogroup is 'shipping'
    cy
      .get('#phlib__radio-button--shipping')
      .should('be.checked')

    // Negative checks
    cy
      .get('#phlib__radio-button--billing')
      .should('not.be.checked')

    cy
      .get('#phlib__radio-button--packstation')
      .should('not.be.checked')
  })

  it('Should select a new value in the radio button group', () => {
    // 1. Select Packstation, and check that the value is set
    cy
      .get('[data-cy="phlib__radio-button--packstation"]')
      .click()
    cy
      .get('#phlib__radio-button--packstation')
      .should('be.checked')

    // 2. Negative checks
    cy
      .get('#phlib__radio-button--shipping')
      .should('not.be.checked')

    cy
      .get('#phlib__radio-button--billing')
      .should('not.be.checked')

    // 3. Select Shipping, and check that the value is set
    cy
      .get('[data-cy="phlib__radio-button--shipping"]')
      .click()

    cy
      .get('#phlib__radio-button--shipping')
      .should('be.checked')
  })
})

export {}