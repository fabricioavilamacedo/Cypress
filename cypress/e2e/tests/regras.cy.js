/// <reference types="cypress" />

// >>>> Importações dos arquivos de request
import * as GETRestricao from '../services/requests/GETRestricao.request.js'
import * as POSTSimulacao from '../services/requests/POSTSimulacao.request.js'
import * as GETSimulacao from '../services/requests/GETSimulacao.request.js'
import * as DELSimulacao from '../services/requests/DELETESimulacao.request.js'
import * as PUTSimulacao from '../services/requests/PUTSimulacao.request'

const CPFs = ['97093236014',
              '60094146012',
              '84809766080',
              '62648716050',
              '26276298085',
              '01317496094',
              '55856777050',
              '19626829001',
              '24094592008',
              '58063164083'
            ]

//  >>>>  Acima, criei um objeto que recebe todos os valores dos CPF's que serão validados, e abaixo, faço com que os testes percorram em cada um deles

CPFs.forEach(CPF => {
    describe('Testes relacionados a REGRAS', () => {
        it('Deve validar a restrição de um CPF e imprimi-lo no console do navegador', () => {
            // >>>> 1º Caso de teste: Validar se o CPF possui restrição e imprimir no console do navegador e fazer as validações
            GETRestricao.getRestricao(CPF).should((respRestricao) => {
                expect(respRestricao.body).to.be.not.null
                if (respRestricao.status == 200) {
                    expect(respRestricao.body.mensagem).to.eq('O CPF ' + CPF + ' tem problema')
                    console.log('>>>> O ' + CPF + ' possui restrição/problema!') //Exibe no console do navegador se o CPF possui ou não restrição/problema
                } else {
                    console.log('>>>> O ' + CPF + ' não possui restrição/problema !') //Exibe no console do navegador se o CPF possui ou não restrição/problema
                    expect(respRestricao.status).to.eq(204)
                    expect(respRestricao.body).to.be.not.null
                }
            })
        })
    })

    /// >>>> OBSERVAÇÃO <<<< Para esse teste funcionar deve-se adicionar novos CPF's sem registros
    //  >>>> OBSERVAÇÃO <<<< Pois a API de Deletar as simulações (caso de teste 3) não está realizando o delete em banco de dados adequadamente
    it('Deve criar uma simulação com sucesso e realizar uma consulta da simulação criada', () => {
        // >>>> 2º Caso de teste: Criação de uma simulação com sucesso e realizar uma consulta da simulação criada e depois fazer as validações
        POSTSimulacao.postSimulacao(CPF).should((respSimulacao) => {
            expect(respSimulacao.body).to.be.not.null
            expect(respSimulacao.status).to.eq(201)
            GETSimulacao.getSimulacao(respSimulacao.body.cpf).should((respGet) => {
                expect(respGet.body).to.be.not.null
                expect(respGet.status).to.eq(200)
            })
        })
    })

    it('Deve deletar uma simulação com sucesso', () => {
        // >>>> 3º Caso de teste: Deve deletar uma simulação com sucesso e fazer as validações
        DELSimulacao.deleteSimulacao(CPF).should((respDel) => {
            expect(respDel.body).to.be.not.null
            expect(respDel.status).to.eq(200)
            expect(respDel.body).to.contain('OK')
        })
    })

    it('Deve alterar uma simulação com sucesso', () => {
        // >>>> 4º Caso de teste: Deve deletar uma simulação com sucesso e fazer as validações
        PUTSimulacao.putSimulacao(CPF).should((respPut) => {
            expect(respPut.body).to.be.not.null
            expect(respPut.status).to.eq(200)
            expect(respPut.body.cpf).to.eq(CPF)
        })
    })
})
