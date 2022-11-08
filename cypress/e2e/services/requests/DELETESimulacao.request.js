/// <reference types="Cypress" />


function deleteSimulacao(cpf){
    return cy.request ({
        method: 'DELETE',
        url: 'simulacoes/' + cpf,
        failOnStatusCode: false,
    })
}

export {deleteSimulacao}