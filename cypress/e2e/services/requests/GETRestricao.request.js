//Esse arquivo contém a request que será feita em sua respectiva rota registrada em 'url', lembrando que a url base já está declarada no arquivo 'config.js'
/// <reference types="Cypress" />

function getRestricao(cpf){
    return cy.request ({
        method: 'GET',
        url: 'restricoes/' + cpf,
        failOnStatusCode: false,
    })
}

export {getRestricao}


