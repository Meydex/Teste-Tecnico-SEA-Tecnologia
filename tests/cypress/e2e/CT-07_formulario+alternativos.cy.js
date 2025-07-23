describe('CT-07, preencher formulário com informações válidas e cenários alternativos', () => {
  beforeEach(()=>{
    cy.visit('https://analista-teste.seatecnologia.com.br/')
    cy.title().should('be.equal','Vite + React + TS')
    cy.contains('button', '+ Adicionar Funcionário')
    .should('be.visible').click();
  })
  it('Preencher formulário com informações válidas + subir imagem png', () => {
    cy.get('button[role="switch"]').click()
      .should('have.attr', 'aria-checked', 'true');

    let data = {
      nome: 'teste funcional completo',
      cpf: '710.548.390-34',
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

    cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/placeholder.png', { force: true });

    cy.SalvaEchecaPOST()


  })
  it('Cenário alternativo 1 - Preencher o formulário e deixar marcado como trabalhador inativo',()=>{
    cy.get('button[role="switch"]')
      .should('have.attr', 'aria-checked', 'false');

    let data = {
      nome: 'teste trabalhador inativo',
      cpf: '079.939.760-14',
      rg: '7654321',
      data_nasc: '1980-08-08',
      
    };

    let epi = {
      ativid: 'Ativid 02',
      epi: 'Luvas descartáveis',
      ca: '4321'
    }

    cy.preencheformuláriocustomizavel(data);
    cy.PreencheEPIs(epi);

    cy.SalvaEchecaPOST();

  })

  it('Cenário alternativo 2 - Preecher o formulário e marcar a checkbox de "O trabalhador não usa EPI"',()=>{
    let data = {
      nome: 'teste não usa Epi',
      cpf: '303.601.430-67',
      rg: '1237654',
      data_nasc: '2002-12-24',
      
    }

    let epi = {
      ativid: 'Ativid 02',
      epi: 'Luvas descartáveis',
      ca: '2020'
    }

    cy.preencheformuláriocustomizavel(data);
    cy.PreencheEPIs(epi);

    cy.contains('label', 'O trabalhador não usa EPI.').click()
    cy.contains('label', 'O trabalhador não usa EPI.')
      .find('input[type="checkbox"]')
      .should('be.checked');

    cy.SalvaEchecaPOST();

  })

  it('Cenário alternativo 3 - Preencher o formulário e adicionar um EPI extra ',()=>{
    let data = {
      nome: 'teste Epi exta',
      cpf: '633.473.190-44',
      rg: '7777777',
      data_nasc: '2015-04-13',
    };

    let epi = {
      ativid: 'Ativid 02',
      epi: 'Luvas descartáveis',
      ca: '1919'
    }

    cy.preencheformuláriocustomizavel();
    cy.PreencheEPIs(epi);

    cy.get('.addEPI[name="adicionaEpi')
      .should('be.visivle')
      .click()

    cy.get('.delEPI[name="excluirEpi]')
      .should('be.visible')

    cy.SalvaEchecaPOST();
  })

  it('Cenário alternativo 4 - Preencher o formulário e excluir o EPI extra ',()=>{
    let data = {
      nome: 'teste excluir Epi exta',
      cpf: '418.052.440-60',
      rg: '7654321',
      data_nasc: '2012-05-12',
      
    };

    let epi = {
      ativid: 'Ativid 02',
      epi: 'Luvas descartáveis',
      ca: '1212'
    }

    cy.preencheformuláriocustomizavel(data);
    cy.PreencheEPIs(epi);


    cy.get('.addEPI[name="adicionaEpi"]')
      .should('be.visible')
      .click()
    
    let epi2 = {
      ativid: 'Ativid 03',
      epi: 'Calçado de Segurança',
      ca: '1515'
    }

    cy.get('.delEPI[name="excluirEpi"]')
      .should('be.visible')
      .click();

    cy.PreencheEPIs(epi2);
    cy.SalvaEchecaPOST();
  })

  it('Cenário alternativo 5 - Preencher o formulário e clicar em "Adicionar outra atividade"',()=>{
    let data = {
      nome: 'teste outra atividade',
      cpf: '498.530.170-16',
      rg: '6666666',
      data_nasc: '2017-02-13',
    };

    let epi = {
      ativid: 'Ativid 02',
      epi: 'Luvas descartáveis',
      ca: '2119'
    }
    
    cy.preencheformuláriocustomizavel(data);
    cy.PreencheEPIs(epi);

    cy.intercept('POST', 'https://analista-teste.seatecnologia.com.br/employees').as('get');
    cy.contains('button','Adicionar outra atividade')
    .should('be.visible')
    .click();

    cy.wait('@get').its('response.statusCode').should('eq', 200);
    
    cy.contains('button','Excluir atividade')
    .should('be.visible')

    
    
  })

})