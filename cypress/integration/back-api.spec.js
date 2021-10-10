/// <reference types="cypress" />

describe('Teste com API', () => {

    it('Criar campo customizado', () => {

        cy.request({

            method: 'POST',
            url: 'https://api.pipefy.com/graphql',
            body: '{"query":"createPhaseField"}',
            failOnStatusCode: false,
            headers: {
                Accept: 'application/json',
                Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDE0MjAwMDYsImVtYWlsIjoibWFyaXNpbC50ZXJlQGdtYWlsLmNvbSIsImFwcGxpY2F0aW9uIjozMDAxMTc0MTN9fQ.PiYXsaMkoBAz4cAEJw70QwPZ5XIefb5QojBGIogUeQmZmC3JOLq1xNoZGYPP90PN3rugk8gWNx8J1CqB_ZxKFg',
                'Content-Type': 'application/json'
              },
        }).then((response) => {
            expect(response.status).to.eq(200)
        })

    })  

});