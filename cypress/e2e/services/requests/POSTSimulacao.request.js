//Esse arquivo contém a request que será feita em sua respectiva rota registrada em 'url', lembrando que a url base já está declarada no arquivo 'config.js'
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