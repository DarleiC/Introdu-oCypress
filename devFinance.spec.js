/// <reference types="cypress"/>

describe('Devfinance', () => {
    it('adicona entrada', () => {
        cy.visit('https://devfinance-agilizei.netlify.app/#')
        cy.get('#transaction > .button').click()
          .get('#description').type('Freela')
          .get('#amount').type('12')
          .get('#date').type('2021-11-03')
        cy.contains('button', 'Salvar').click().as('botao')
        cy.get('#transaction > .button').click()
          .get('#description').type('Vai se deletado')
          .get('#amount').type('-1600')
          .get('#date').type('2021-10-01')
        cy.get('@botao').click()
        cy.get('table tbody tr').as('table').should('have.length', 2)
        cy.wait(2000)
        cy.get('[data-index="1"] > :nth-child(4) > img').click()
          .get('@table').should('have.length', 1)
    });
    
});