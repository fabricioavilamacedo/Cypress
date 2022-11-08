/// <reference types="Cypress" />


function postSimulacao(cpf){
    return cy.request ({
        method: 'POST',
        url: 'simulacoes',
        failOnStatusCode: false,
        body: {
            "nome": "Fulano de Tal",
            "cpf": cpf,
            "email": "email@email.com",
            "valor": 1200,
            "parcelas": 3,
            "seguro": true
          }
    })
}

export {postSimulacao}