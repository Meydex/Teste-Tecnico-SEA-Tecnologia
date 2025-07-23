describe('CT-9 Preencher formulário com nome inválido', () => {
  beforeEach(()=>{
    cy.visit('https://analista-teste.seatecnologia.com.br/')
    cy.title().should('be.equal','Vite + React + TS')
    cy.contains('button', '+ Adicionar Funcionário')
    .should('be.visible').click();
  })
  it('Preencher formulário com nome inválido (caracteres especiais)', () => {
    cy.get('button[role="switch"]').click()
      .should('have.attr', 'aria-checked', 'true');

    let data = {
      nome: '!@#$',
      cpf: '052.370.870-00',
      rg: '1234567',
      data_nasc: '1990-01-01',
      
    };

    let epi = {
      ativid: 'Ativid 02',
      epi: 'Luvas descartáveis',
      ca: '1234'
    }

    cy.preencheformuláriocustomizavel(data)
    cy.PreencheEPIs(epi);

    cy.get('input.ant-radio-input[value="masculino"]')
      .check();

    cy.contains('span.ant-select-selection-item', 'Cargo 01').click();
    cy.get('.ant-select-item-option')
      .contains('Cargo 02')
      .click();

    cy.contains('button', 'Salvar').click();

    cy.get('input[name="name"]')
        .then(($input) => {
            expect($input[0].checkValidity()).to.be.false;
            expect($input[0].validationMessage).to.eq('Preencha este campo.');
        });
  })

  it('Cenário alternativo 1 - Preencher o campo nome com numeros',()=>{
    cy.get('button[role="switch"]')
      .should('have.attr', 'aria-checked', 'false');

    let data = {
      nome: '12345678',
      cpf: '079.939.760-14',
      rg: '7654321',
      data_nasc: '1980-08-08',
      
    };

    let epi = {
      ativid: 'Ativid 02',
      epi: 'Luvas descartáveis',
      ca: '4321'
    }

    cy.preencheformuláriocustomizavel(data)
    cy.PreencheEPIs(epi);

    cy.get('input.ant-radio-input[value="masculino"]')
      .check();

    cy.contains('span.ant-select-selection-item', 'Cargo 01').click();
    cy.get('.ant-select-item-option')
      .contains('Cargo 02')
      .click();

    cy.contains('button', 'Salvar').click();

    cy.get('input[name="name"]')
        .then(($input) => {
            expect($input[0].checkValidity()).to.be.false;
            expect($input[0].validationMessage).to.eq('Preencha este campo.');
        });
  })

  it('Cenário alternativo 2 - Deixar o campo nome vazio',()=>{
    cy.get('button[role="switch"]')
      .should('have.attr', 'aria-checked', 'false');
  
    cy.get('input[name="cpf"]')
      .should('be.visible')
      .type('079.939.760-14')

    cy.get('input[name="rg"]')
      .should('be.visible')
      .type('7654321')

    cy.get('input[name="birthDay"]')
      .should('be.visible')
      .type('1980-08-08')

    let epi = {
      ativid: 'Ativid 02',
      epi: 'Luvas descartáveis',
      ca: '4321'
    }

    cy.PreencheEPIs(epi);

    cy.get('input.ant-radio-input[value="masculino"]')
      .check();

    cy.contains('span.ant-select-selection-item', 'Cargo 01').click();
    cy.get('.ant-select-item-option')
      .contains('Cargo 02')
      .click();

    cy.contains('button', 'Salvar').click();

    cy.get('input[name="name"]')
        .then(($input) => {
            expect($input[0].checkValidity()).to.be.false;
            expect($input[0].validationMessage).to.eq('Preencha este campo.');
        });

  })

  it('Cenário alternativo 3 - Preencher o campo nome com espaço " "',()=>{
    cy.get('button[role="switch"]')
      .should('have.attr', 'aria-checked', 'false');

    let data = {
      nome: ' ',
      cpf: '079.939.760-14',
      rg: '7654321',
      data_nasc: '1980-08-08',
      
    };

    let epi = {
      ativid: 'Ativid 02',
      epi: 'Luvas descartáveis',
      ca: '4321'
    }

    cy.preencheformuláriocustomizavel(data)
    cy.PreencheEPIs(epi);

    cy.get('input.ant-radio-input[value="masculino"]')
      .check();

    cy.contains('span.ant-select-selection-item', 'Cargo 01').click();
    cy.get('.ant-select-item-option')
      .contains('Cargo 02')
      .click();

    cy.intercept('POST', 'https://analista-teste.seatecnologia.com.br/employees/').as('get');
    cy.contains('button', 'Salvar').click();
    cy.get('input[name="name"]')
        .then(($input) => {
            expect($input[0].checkValidity()).to.be.false;
            expect($input[0].validationMessage).to.eq('Preencha este campo.');
        });
  
    cy.wait('@get').its('response.statusCode').should('eq', 200);

    })

})