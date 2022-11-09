//Esse arquivo contém o mapeamento de todos os elementos de interação web, gerando o Page Object em Cypress

const locators = {
    web: {
        url: 'https://www.grocerycrud.com/v1.x/demo/my_boss_is_in_a_hurry/bootstrap'
    },

    pageIndex: {
        addCustomer: '.floatL.t5 > .btn',
        btnVersion: '#switch-version-select',
        textoLogin: '.MuiTypography-h4'
    },

    pageRecord: {
        campoCustomerName: '#field-customerName',
        campoContactLastName: '#field-contactLastName',
        campoContactFirstName: '#field-contactFirstName',
        campoPhone: '#field-phone',
        campoLine1: '#field-addressLine1',
        campoLine2: '#field-addressLine2',
        campoCity: '#field-city',
        campoState: '#field-state',
        campoPostalCode: '#field-postalCode',
        campoCountry: '#field-country',
        campoSalesRepEmployeeNumber: '#field-salesRepEmployeeNumber',
        campoLimit: '#field-creditLimit',
        campoDeleted: '#field-deleted',
        btnSave: '#form-button-save',
        msgSucesso: 'p'
    }
}
export default locators;