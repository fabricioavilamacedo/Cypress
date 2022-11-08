/// <reference types="Cypress" />


function putSimulacao(cpf){
    return cy.request ({
        method: 'PUT',
        url: 'simulacoes/' + cpf,
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

export {putSimulacao}