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
      nome: 'marcos',
      cpf: '44444444444',
      rg: '4444444',
      data_nasc: '1990-01-01',
      
    };

    let epi = {
      ativid: 'Ativid 01',
      epi: 'Capacete de Segurança',
      ca: '123'
    }

    cy.preencheformuláriocustomizavel(data)
    cy.PreencheEPIs(epi);

    cy.get('input.ant-radio-input[value="masculino"]')
      .check();

    cy.contains('span.ant-select-selection-item', 'Cargo 01').click();
    cy.get('.ant-select-item-option')
      .contains('Cargo 01')
      .click();

    cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/example.json', { force: true });

    cy.contains('c-fyHklP','example.json')
    .should('be.visible');

    cy.contains('button', 'Salvar').click();

    cy.contains('c-fyHklP','example.json')
        .then(($input) => {
            expect($input[0].checkValidity()).to.be.false;
            expect($input[0].validationMessage).to.eq('Preencha este campo.');
        });

    });
});