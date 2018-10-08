/// <reference types="Cypress" />

describe(
    'Navigation Tests',
    () =>
    {
        describe(
            'Home "Page"',
            () =>
            {
                beforeEach(
                    () =>
                    {
                        cy.visit('http://localhost:3000/');
                    }
                ),

                it(
                    '"Home" link works.',
                    () =>
                    {
                        cy.get('a').contains('Home').click();
                        cy.location('pathname').should('equal','/');
                        cy.get('div.App-content > div > h2').should('contain', 'Home');
                    }
                ),
                
                it(
                    '"Login" link works.',
                    () =>
                    {
                        cy.get('a').contains('Login').click(); 
                        cy.location('pathname').should('equal','/login');
                        cy.get('div.App-content > div > h2').should('contain', 'Login');
                    }
                ),
                
                it(
                    '"Register" link works.',
                    () =>
                    {
                        cy.get('a').contains('Register').click(); 
                        cy.location('pathname').should('equal','/register');
                        cy.get('div.App-content > div > h2').should('contain', 'Register');
                    }
                ),
                
                it(
                    '"Forgot Password" link works.',
                    () =>
                    {
                        cy.get('a').contains('Password').click(); 
                        cy.location('pathname').should('equal','/password');
                        cy.get('div.App-content > div > h2').should('contain', 'Reset');
                    }
                )
            }
        );

        describe(
            'Login "Page"',
            () =>
            {
                beforeEach(
                    () =>
                    {
                        cy.visit('http://localhost:3000/login');
                    }
                ),

                it(
                    '"Home" link works.',
                    () =>
                    {
                        cy.get('a').contains('Home').click(); 
                        cy.location('pathname').should('equal','/');
                        cy.get('div.App-content > div > h2').should('contain', 'Home');
                    }
                ),
                
                it(
                    '"Register" link works.',
                    () =>
                    {
                        cy.get('a').contains('Register').click(); 
                        cy.location('pathname').should('equal','/register');
                        cy.get('div.App-content > div > h2').should('contain', 'Register');
                    }
                ),
                
                it(
                    '"Reset" link works.',
                    () =>
                    {
                        cy.get('a').contains('Reset').click(); 
                        cy.location('pathname').should('equal','/password');
                        cy.get('div.App-content > div > h2').should('contain', 'Reset');
                    }
                )
            }
        );

        describe(
            'Register "Page"',
            () =>
            {
                beforeEach(
                    () =>
                    {
                        cy.visit('http://localhost:3000/register');
                    }
                ),

                it(
                    '"Home" link works.',
                    () =>
                    {
                        cy.get('a').contains('Home').click(); 
                        cy.location('pathname').should('equal','/');
                        cy.get('div.App-content > div > h2').should('contain', 'Home');
                    }
                ),
                
                it(
                    '"Login" link works.',
                    () =>
                    {
                        cy.get('a').contains('Login').click();  
                        cy.location('pathname').should('equal','/login');
                        cy.get('div.App-content > div > h2').should('contain', 'Login');
                    }
                )
            }
        );

        describe(
            'Reset "Page"',
            () =>
            {
                beforeEach(
                    () =>
                    {
                        cy.visit('http://localhost:3000/password');
                    }
                ),

                it(
                    '"Home" link works.',
                    () =>
                    {
                        cy.get('a').contains('Home').click(); 
                        cy.location('pathname').should('equal','/');
                        cy.get('div.App-content > div > h2').should('contain', 'Home');
                    }
                ),
                
                it(
                    '"Login" link works.',
                    () =>
                    {
                        cy.get('a').contains('Login').click(); 
                        cy.location('pathname').should('equal','/login');
                        cy.get('div.App-content > div > h2').should('contain', 'Login');
                    }
                )
            }
        );
    }
);