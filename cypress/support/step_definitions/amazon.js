import {
    Given,
    When,
    And,
    Then
} from "cypress-cucumber-preprocessor/steps"

import loc from '../locators.js'

const email = "scan.teste.2019@gmail.com"
const senha = "Scansource2022"

Given('que eu realize a pesquisa de um produto no site amazon', () => {
    cy.visit("/");
    cy.get(loc.pageIndex.campoPesquisa).type("Nike")
    cy.get(loc.pageIndex.btnPesquisar).click()
    //cy.screenshot()
});


When('adicionar o produto no carrinho de compras', () => {
    cy.get(loc.pageIndex.imgProduto, { timeout: 2000}).click()
    cy.get(loc.pageProduto.btnAddCarrinho, { timeout: 2000}).click()
    cy.get(loc.pageProduto.textoAddCarrinho, { timeout: 2000}).should('contain', 'Adicionado ao carrinho')
   //cy.screenshot()
});

And('fechar o pedido mantendo o endereço atual', () => {
    cy.get(loc.pageProduto.btnfecharPedido, { timeout: 3000}).click()
    cy.get(loc.pageLogin.campoEmail, { timeout: 3000}).type(email)
    cy.get(loc.pageLogin.btnContinuar, { timeout: 2000}).click()
    cy.get(loc.pageLogin.campoSenha, { timeout: 2000}).type(senha)
    cy.get(loc.pageLogin.btnLogin, { timeout: 2000}).click()
    cy.get(loc.pageCarrinho.btnEndereco, { timeout: 2000}).click()
    //cy.screenshot()
});

When('Selecionar a forma de pagamento via Boleto', () => {
    cy.wait(2000)
    cy.get(loc.pageCarrinho.checkBoleto, { timeout: 2000}).click()
    cy.get(loc.pageCarrinho.btnContinuar, { timeout: 2000}).click()
    //cy.screenshot()
});

Then('terei o boleto gerado com sucesso', () => {
    cy.get(loc.pageCarrinho.btnConfirmarPedido, { timeout: 2000}).click()
    cy.get(loc.pageCarrinho.textoPagamentoConfirmado, { timeout: 2000}).should('contain', 'Obrigado, Seu pedido foi feito e será processado após o pagamento do Boleto')
    cy.screenshot()
});

