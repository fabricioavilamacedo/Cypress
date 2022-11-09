//Esse arquivo contém a request que será feita em sua respectiva rota registrada em 'url', lembrando que a url base já está declarada no arquivo 'config.js'
/// <reference types="Cypress" />


function deleteSimulacao(cpf){
    return cy.request ({
        method: 'DELETE',
        url: 'simulacoes/' + cpf,
        failOnStatusCode: false,
    })
}

export {deleteSimulacao}