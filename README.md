# Desafio Automação API e Web
## Descrição
Testes automatizado do desafio de automação API e Web
## Instruções
1. Baixe e instale o Node: [https://nodejs.org/]
2. Clone o repositório: `git clone git@github.com:fabricioavilamacedo/Cypress.git` (SSH) or `git clone https://github.com/fabricioavilamacedo/Cypress.git` (HTTPS)
3. No diretório raiz do projeto rodar os comandos `npm install` e `npx cypress open` para abrir o framework
4. No diretório 'integration', alterar o valor da variável token do ambiente de HML
5. Após a inicialização do Cypress selecionar e rodar o teste 'regras.cy.js' que ele já irá executar todos os casos de teste.

Observações:
1. Para execução do 2º Caso de teste deve-se adicionar novos CPF's sem registros de simulação cadastrados pois a API de Deletar as simulações (caso de teste 3) não está realizando o delete em banco de dados adequadamente, para isso, deve-se apenas substituir os valores da variável 'CPFs' no arquivo 'regras.cy.js'.

## Estrutura de diretórios
```
/
├─ cypress/            # Raiz do projeto onde se encontram os demais diretórios e testes
├─ ├─downloads/        # Diretório padrão gerado através do comando 'npm init' para armazenamento de dados e arquivos utilizados nos testes
├─ ├─e2e/              # Estrutura de diretórios que contém as estruturas dos testes
├─ ├─────services/     # Estrutura de diretórios que contém as estruturas dos testes relacionados a serviços
├─ ├─────tests/        # Scripts de testes
├─ ├─fixtures/         # Diretório padrão gerado através do comando 'npm init'
├─ ├─plugins/          # Set de plugins
├─ ├─screenshots/      # Armazenamento de screenshots
├─ ├─support           # Diretório padrão gerado através do comando 'npm init'
├─ node_modules        # Coleção de funções
├─ .gitignore          # Lista de arquivos e pastas ignoradas pelo git
├─ cypress.config.js   # Arquivo para config cypress
├─ package-lock.json   # Manifesto do projeto
├─ package.json        # Manifesto do projeto
└─ README.md           # Esse arquivo
```
