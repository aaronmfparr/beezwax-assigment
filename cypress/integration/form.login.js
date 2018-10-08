/// <reference types="Cypress" />

describe(
    'Login Form Tests',
    () =>
    {
        describe(
            'Submit Button',
            () =>
            {
                beforeEach(
                    () =>
                    {
                        cy.visit('http://localhost:3000/login');
                    }
                ),
        
                it(
                    'Disabled on page load.',
                    () =>
                    {
                        cy.get('button').contains('Login').should('be.disabled');
                    }           
                ),
        
                it(
                    'Disabled when only given a username.',
                    () =>
                    {
                        // set up login fields
                        cy.get('input#username').type('Gregoire_Simms');
                        // test
                        cy.get('button').contains('Login').should('be.disabled');
                    }           
                ),
        
                it(
                    'Disabled when only given a password.',
                    () =>
                    {
                        // set up login fields
                        cy.get('input#password').type('aPa$$w0rd_!');
                        // test
                        cy.get('button').contains('Login').should('be.disabled');
                    }           
                ),
        
                it(
                    'Enabled when username and password are entered.',
                    () =>
                    {
                        // set up login fields
                        cy.get('input#username').type('Gregoire_Simms');
                        cy.get('input#password').type('aPa$$w0rd_!');
                        // test
                        cy.get('button').contains('Login').should('be.enabled');
                    }           
                ),
        
                it(
                    'Disabled when password is cleared.',
                    () =>
                    {
                        // set up login fields
                        cy.get('input#username').type('Gregoire_Simms');
                        cy.get('input#password').type('aPa$$w0rd_!');
                        // check that the button is working
                        cy.get('button').contains('Login').should('be.enabled');
                        // delete the password field
                        cy.get('input#password').clear();
                        // test
                        cy.get('button').contains('Login').should('be.disabled');
                    }           
                ),
        
                it(
                    'Disabled when username is cleared.',
                    () =>
                    {
                        // set up login fields
                        cy.get('input#username').type('Gregoire_Simms');
                        cy.get('input#password').type('aPa$$w0rd_!');
                        // check that the button is working
                        cy.get('button').contains('Login').should('be.enabled');
                        // delete the username field
                        cy.get('input#username').clear();
                        // test
                        cy.get('button').contains('Login').should('be.disabled');
                    }
                )
            }
        );
        describe(
            'Login Response',
            () =>
            {
                beforeEach(
                    () =>
                    {
                        cy.visit('http://localhost:3000/login');
                    }
                ), 

                it(
                    'Does not exist on load.',
                    () =>
                    {
                        // test
                        cy.get('pre').should('not.contain','Username:');
                    }
                ),

                it(
                    'Exists when submitted.',
                    () =>
                    {
                        // set up login fields
                        cy.get('input#username').type('Gregoire_Simms');
                        cy.get('input#password').type('aPa$$w0rd_!');
                        // submit
                        cy.get('button').click();
                        // test
                        cy.get('pre').contains('Username:').should('exist');
                    }
                ),

                it(
                    'Displays correctly when submitted.',
                    () =>
                    {
                        // set up login fields
                        cy.get('input#username').type('Gregoire_Simms');
                        cy.get('input#password').type('aPa$$w0rd_!');
                        // submit
                        cy.get('button').click();
                        // test
                        cy.get('pre').contains('Username:').should('contain','Username: Gregoire_Simms\nPassword: aPa$$w0rd_!');
                    }
                ),

                it(
                    'Removed when username changed.',
                    () =>
                    {
                        // set up login fields
                        cy.get('input#username').type('Gregoire_Simms');
                        cy.get('input#password').type('aPa$$w0rd_!');
                        // submit
                        cy.get('button').click();
                        // we should get a response before proceeding
                        cy.get('pre').contains('Username:');
                        // change username
                        cy.get('input#username').type(' ');
                        // test
                        cy.get('pre').should('not.contain','Username:');
                    }
                ),

                it(
                    'Remains if we enter "return" in username.',
                    () =>
                    {
                        // set up login fields
                        cy.get('input#username').type('Gregoire_Simms');
                        cy.get('input#password').type('aPa$$w0rd_!');
                        // submit
                        cy.get('button').click();
                        // we should get a response before proceeding
                        cy.get('pre').contains('Username:');
                        // change username
                        cy.get('input#username').type('\n');
                        // test
                        cy.get('pre').should('contain','Username:');
                    }
                ),

                it(
                    'Removed when password changed.',
                    () =>
                    {
                        // set up login fields
                        cy.get('input#username').type('Gregoire_Simms');
                        cy.get('input#password').type('aPa$$w0rd_!');
                        // submit
                        cy.get('button').click();
                        // we should get a response before proceeding
                        cy.get('pre').contains('Username:');
                        // change username
                        cy.get('input#password').type(' ');
                        // test
                        cy.get('pre').should('not.contain','Username:');
                    }
                ),

                it(
                    'Remains if we enter "return" in password.',
                    () =>
                    {
                        // set up login fields
                        cy.get('input#username').type('Gregoire_Simms');
                        cy.get('input#password').type('aPa$$w0rd_!');
                        // submit
                        cy.get('button').click();
                        // we should get a response before proceeding
                        cy.get('pre').contains('Username:');
                        // change username
                        cy.get('input#password').type('\n');
                        // test
                        cy.get('pre').should('contain','Username:');
                    }
                )
            }
        );
    }
);