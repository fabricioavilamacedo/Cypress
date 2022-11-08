/// <reference types="Cypress" />

function getRestricao(cpf){
    return cy.request ({
        method: 'GET',
        url: 'restricoes/' + cpf,
        failOnStatusCode: false,
    })
}

export {getRestricao}


