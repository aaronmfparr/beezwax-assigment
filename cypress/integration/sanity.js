/// <reference types="Cypress" />

describe(
    'Sanity Tests',
    () =>
    {
        it(
            'Determine whether something is served locally!',
            () =>
            {
                cy.visit('http://localhost:3000/');
            }
        ),
        
        it(
            'Determine whether the title is of our React App!',
            () =>
            {
                cy.visit('http://localhost:3000/');
                cy.title().should('eq', 'React App')
            }
        )
    }
)