// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('preencheformuláriocustomizavel', data =>{
    
    cy.get('input[name="name"]')
      .should('be.visible')
      .type(data.nome)

    cy.get('input[name="cpf"]')
      .should('be.visible')
      .type(data.cpf)

    cy.get('input[name="rg"]')
      .should('be.visible')
      .type(data.rg)
    cy.get('input[name="birthDay"]')
      .should('be.visible')
      .type(data.data_nasc)



})

Cypress.Commands.add('SalvaEchecaPOST',()=>{
    cy.intercept('POST', '**/employees').as('post');
    cy.contains('button', 'Salvar').click();
    cy.wait('@post').its('response.statusCode').should('eq', 201);
})

Cypress.Commands.add('PreencheEPIs',epi=>{
  cy.contains('span.ant-select-selection-item','Ativid 01').click();
    cy.get('.ant-select-item-option')
      .contains(epi.ativid)
      .click();
    cy.contains('span.ant-select-selection-item','Ativid 02')
      .should('contain.text', 'Ativid 02');

    cy.contains('span.ant-select-selection-item','Capacete de segurança').click();
    cy.get('.ant-select-item-option')
      .contains(epi.epi)
      .click();
    cy.contains('span.ant-select-selection-item','Luvas descartáveis')
      .should('contain.text', 'Luvas descartáveis');

    cy.get('.c-jzRMpM[name="caNumber"]').type(epi.ca)

})