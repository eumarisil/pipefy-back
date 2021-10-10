/// <reference types="cypress" />
var faker = require('faker');

describe('Projeto Backend', () => {

    beforeEach(() => {
        cy.visit('https://app.pipefy.com/')
        cy.get('.auth0-lock-input-username > .auth0-lock-input-wrap > .auth0-lock-input').type('marisil.tere@gmail.com')
        cy.get('.auth0-lock-input-show-password > .auth0-lock-input-block > .auth0-lock-input-wrap > .auth0-lock-input').type('Yellow15@')
        cy.get('.auth0-lock-submit').click()
        cy.get('.pp-color-text-base')
            .should('contain', 'Mariana')
    });

    it.only('Autenticacao Token', () => {
        
        cy.visit('https://app.pipefy.com/tokens')
        cy.get('[class="pp-font-2"]')
            .should('contain', 'Personal access tokens')
        cy.get('.col-md-8 > .pp-btn').click()
        cy.get('[id="token_name"]').type(faker.random.word())
        cy.get(':nth-child(4) > .pp-btn').click()
        cy.get(':nth-child(5) > .pp-input').invoke('text').then(($token) => {
            cy.log($token)
            })
        });

    it('Novo Pipe', () => {

        cy.get('[class="CreatePipeButton__IconWrapper-sc-1rpyeu4-0 cGgJwF"]').click()
        cy.get('.sc-cOajNj > .pp-btn').click()
        cy.get('#pipe_name').type(faker.random.word())
        cy.get('.button-green').click()
        
    });
        
});
    
