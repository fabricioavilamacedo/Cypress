/// <reference types="Cypress" />

function getSimulacao(cpf){
    return cy.request ({
        method: 'GET',
        url: 'simulacoes/' + cpf,
        failOnStatusCode: false,
    })
}

export {getSimulacao}