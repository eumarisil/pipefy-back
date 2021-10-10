/// <reference types="cypress" />

describe('Teste com API', () => {

    it('Criar campo customizado', () => {

        cy.request({

            method: 'POST',
            url: '/',
            body: '{"query":"CreatePhaseFieldInput"}',
            headers: {Accept: 'application/json', Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDE0MjAwMDYsImVtYWlsIjoibWFyaXNpbC50ZXJlQGdtYWlsLmNvbSIsImFwcGxpY2F0aW9uIjozMDAxMTc0MTF9fQ.KYEYz9pHneeoHj6XPxyLZbgf_hwn-WXe6YRVICrcTdc9wVILoWiGKoCrgZBD-pT5ko0zhcDdRiHYKfiooe7Gew', 'Content-Type': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDE0MjAwMDYsImVtYWlsIjoibWFyaXNpbC50ZXJlQGdtYWlsLmNvbSIsImFwcGxpY2F0aW9uIjozMDAxMTc0MTF9fQ.KYEYz9pHneeoHj6XPxyLZbgf_hwn-WXe6YRVICrcTdc9wVILoWiGKoCrgZBD-pT5ko0zhcDdRiHYKfiooe7Gew'}         
               
        })
        
    });
    
});