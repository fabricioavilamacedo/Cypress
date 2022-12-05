//Esse arquivo contém o mapeamento de todos os elementos de interação web, gerando o Page Object em Cypress

const locators = {
    pageIndex: {
        campoPesquisa: '#twotabsearchtextbox',
        btnPesquisar: '#nav-search-submit-button',
        imgProduto: '[data-asin="B09T8Y57WY"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > .a-spacing-base > .s-product-image-container > .s-image-padding > .rush-component > .a-link-normal > .a-section > .s-image'
    },
    pageProduto: {
        btnAddCarrinho: '#add-to-cart-button',
        textoAddCarrinho: '.a-size-medium-plus',
        btnfecharPedido: '#sc-buy-box-ptc-button > .a-button-inner > .a-button-input',
    },
    pageLogin: {
        campoEmail: '#ap_email',
        btnContinuar: '.a-button-inner > #continue',
        campoSenha: '#ap_password',
        btnLogin: '#signInSubmit',
    },
    pageCarrinho: {
        btnEndereco: '.ship-to-this-address > .a-button-inner > [data-testid]',
        checkBoleto: '#pp-8t0ZFj-58',
        btnContinuar: '#pp-8t0ZFj-63 > .a-button-inner > .a-button-input',
        btnConfirmarPedido: '#placeYourOrder > .a-button-inner > [data-testid]',
        textoPagamentoConfirmado: 'h4',
    }
}
export default locators;