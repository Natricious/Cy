// 1
describe('Login User with correct email and password', () => {
    it('Login User with correct email and password', () => {
        cy.visit('https://automationexercise.com/');
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible');
        cy.get('[href="/login"]').click();
        cy.contains('Login to your account').should('be.visible');
        cy.get('[data-qa="login-email"]').type('zura@zura.ge');
        cy.get('[data-qa="login-password"]').type('qwerty123');
        cy.get('[data-qa="login-button"]').click();
        cy.contains(' Logged in as ').should('be.visible');
        // cy.get('[href="/delete-account"]').click();
        // cy.contains('Account Deleted!').should('be.visible');
    });
});
 
 
// 2
describe('Login User with correct email and password', () => {
    it('Login User with correct email and password', () => {
        cy.visit('https://automationexercise.com/');
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible');
        cy.get('[href="/login"]').click();
        cy.contains('Login to your account').should('be.visible');
        cy.get('[data-qa="login-email"]').type('t111aaaaaaest@test.com');
        cy.get('[data-qa="login-password"]').type('password123');
        cy.get('[data-qa="login-button"]').click();
        cy.contains('Your email or password is incorrect!').should('be.visible');
    });
});
 
// 3
describe('Login User with correct email and password', () => {
    it('Login User with correct email and password', () => {
        cy.visit('https://automationexercise.com/');
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible');
        cy.get('[href="/login"]').click();
        cy.contains('New User Signup!').should('be.visible');
        cy.get('[data-qa="signup-name"]').type('Zura');
        cy.get('[data-qa="signup-email"]').type('zura@zura.ge');
        cy.get('[data-qa="signup-button"]').click();
        cy.contains('Email Address already exist!').should('be.visible');
 
    });
});
 