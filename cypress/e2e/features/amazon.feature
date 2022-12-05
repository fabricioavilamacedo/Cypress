Feature: Carrinho de compras

     Feature de carrinho de compras

    Scenario: Verificar a funcionalidade de pedido de Compra via Boleto Bancário
        Given que eu realize a pesquisa de um produto no site amazon
        When adicionar o produto no carrinho de compras
        And fechar o pedido mantendo o endereço atual
        When Selecionar a forma de pagamento via Boleto
        Then terei o boleto gerado com sucesso