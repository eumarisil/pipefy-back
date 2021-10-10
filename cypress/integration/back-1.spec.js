/// <reference types="cypress" />
var faker = require('faker');

const credentials = require('../fixtures/credentials.json')

describe('Projeto Backend', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.fixture('credentials').then(dados =>{
            cy.login(dados.email, dados.password)

        })
        cy.get('.pp-color-text-base')
            .should('contain', 'Mariana')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Autenticacao Token', () => {
        
        cy.visit('/tokens')
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

    it.only('Preencher novo card com sucesso', () => {

        let name = faker.random.word()
        let desc = faker.random.words()

        cy.get(':nth-child(4) > .PipeBox__Box-sc-1do4p5t-1 > .PipeBox__BoxAnchor-sc-1do4p5t-2').click()
        cy.get('[data-testid=new-card-button] > [data-testid=interface-icon-add-little-sm] > div > .injected-svg').click()
        cy.get(':nth-child(1) > .pp-base-field-content > .pp-input-wrap > [data-testid=short-text-field]')
            .type(name)
        cy.get('[data-testid=long-text-field]').type(desc)
        cy.get('[data-testid=start-form-click-on-button]').click()
        cy.get('.sc-pbIaG > .pp-clear-button-style').should('contain', 'Product Development')

    });


        
});
    
