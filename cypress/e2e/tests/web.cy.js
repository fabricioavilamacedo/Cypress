/// <reference types="Cypress" />
import loc from '../../support/locators.js'

const name = 'Teste Sicredi'
const LastName = 'Teste'
const contactFirstName = 'seu nome'
const phone = '51 9999-9999'
const addressLine1 = 'Av Assis Brasil, 3970'
const addressLine2 = 'Torre D'
const city = 'Porto Alegre'
const state = 'RS'
const postalCode = '91000-000'
const country = 'Brasil'
const Employeer = '00'
const limit = '200'


    describe('Automação web - BootsTrap', () => {
        before(() => {
            cy.visit(loc.web.url, { timeout: 5000})
        })
        
        it('Deve criar um registro com sucesso', () => {
            cy.get(loc.pageIndex.btnVersion)
            .select('Bootstrap V4 Theme')
            .should('contain', 'V4 Theme')
            cy.screenshot()
            cy.get(loc.pageIndex.addCustomer, { timeout: 2000})
            .click()
            .should('contain', 'Add Record')
            cy.get(loc.pageRecord.campoCustomerName, { timeout: 2000}).type(name)
            cy.get(loc.pageRecord.campoContactLastName, { timeout: 2000}).type(LastName)
            cy.get(loc.pageRecord.campoContactFirstName, { timeout: 2000}).type(contactFirstName)
            cy.get(loc.pageRecord.campoPhone, { timeout: 2000}).type(phone)
            cy.get(loc.pageRecord.campoLine1, { timeout: 2000}).type(addressLine1)
            cy.get(loc.pageRecord.campoLine2, { timeout: 2000}).type(addressLine2)
            cy.get(loc.pageRecord.campoCity, { timeout: 2000}).type(city)
            cy.get(loc.pageRecord.campoState, { timeout: 2000}).type(state)
            cy.get(loc.pageRecord.campoPostalCode, { timeout: 2000}).type(postalCode)
            cy.get(loc.pageRecord.campoCountry, { timeout: 2000}).type(country)
            cy.get(loc.pageRecord.campoSalesRepEmployeeNumber, { timeout: 2000}).type(Employeer)
            cy.get(loc.pageRecord.campoLimit, { timeout: 2000}).type(limit)
            cy.get(loc.pageRecord.btnSave, { timeout: 2000}).click()
            cy.get(loc.pageRecord.msgSucesso, { timeout: 2000}).should('contain', 'Your data has been successfully stored into the database')
            cy.screenshot()
        })
    })
