describe('CT-10 Preencher o fomulário com CPF inválido', () => {
  beforeEach(()=>{
    cy.visit('https://analista-teste.seatecnologia.com.br/')
    cy.title().should('be.equal','Vite + React + TS')
    cy.contains('button', '+ Adicionar Funcionário')
    .should('be.visible').click();
  })
  it('Preencher formulário com cpf inválido (letras)', () => {
    cy.get('button[role="switch"]').click()
      .should('have.attr', 'aria-checked', 'true');

    let data = {
      nome: 'teste cpf',
      cpf: 'marialopess',
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

    cy.get('input[name="cpf"]')
        .then(($input) => {
            expect($input[0].checkValidity()).to.be.false;
            expect($input[0].validationMessage).to.eq('Preencha este campo.');
        });
  })

  it('Preencher o campo CPF com caracteres especiais', () => {
    cy.get('button[role="switch"]').click()
      .should('have.attr', 'aria-checked', 'true');

    let data = {
      nome: 'teste cpf',
      cpf: '!@#$%¨&*()_',
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

    cy.get('input[name="cpf"]')
        .then(($input) => {
            expect($input[0].checkValidity()).to.be.false;
            expect($input[0].validationMessage).to.eq('Preencha este campo.');
        });
  })

  it('Cenário alternativo 1 - Preencher o campo CPF com apenas 1 caractere', () => {
    cy.get('button[role="switch"]').click()
      .should('have.attr', 'aria-checked', 'true');

    let data = {
      nome: 'teste cpf',
      cpf: '1',
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

    cy.get('input[name="cpf"]')
        .then(($input) => {
            expect($input[0].checkValidity()).to.be.false;
            expect($input[0].validationMessage).to.eq('Preencha este campo.');
        });
  })

  it('Cenário alternativo 1 - Deixar o campo CPF vazio', () => {
    cy.get('button[role="switch"]').click()
      .should('have.attr', 'aria-checked', 'true');

    cy.get('input[name="name"]')
      .should('be.visible')
      .type('teste cpf vazio')

    cy.get('input[name="rg"]')
      .should('be.visible')
      .type('12234567')

    cy.get('input[name="birthDay"]')
      .should('be.visible')
      .type('1990-01-01')

    let epi = {
      ativid: 'Ativid 02',
      epi: 'Luvas descartáveis',
      ca: '1234'
    }

    cy.PreencheEPIs(epi);

    cy.get('input.ant-radio-input[value="masculino"]')
      .check();

    cy.contains('span.ant-select-selection-item', 'Cargo 01').click();
    cy.get('.ant-select-item-option')
      .contains('Cargo 02')
      .click();

    cy.contains('button', 'Salvar').click();

    cy.get('input[name="cpf"]')
        .then(($input) => {
            expect($input[0].checkValidity()).to.be.false;
            expect($input[0].validationMessage).to.eq('Preencha este campo.');
        });
  })
})