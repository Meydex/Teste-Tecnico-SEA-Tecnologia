describe('CT-14, Alterar e Excluir informação do usuário interceptando as requests', () => {
  it('Cria, altera, valida e exclui funcionário', () => {

    const createPayload = {
      state: {
        employee: {
          isActive: true,
          name: 'funcionario teste',
          gender: 'masculino',
          cpf: '12345678901',
          birthDay: '1998-10-10',
          rg: '1234567',
          role: '',
          usesEpi: false,
          caNumber: "123"
        }
      }
    };

    cy.request('POST', 'https://analista-teste.seatecnologia.com.br/employees/', createPayload)
      .then((postResponse) => {
        expect(postResponse.status).to.eq(201);

        cy.request('GET', 'https://analista-teste.seatecnologia.com.br/employees/')
          .then((getResponse) => {
            expect(getResponse.status).to.eq(200);

            const createdEmployee = getResponse.body.find(
              emp => emp.state.employee.cpf === createPayload.state.employee.cpf
            );
            expect(createdEmployee).to.exist;

            const id = createdEmployee.id;

            const updatePayload = {
              id: id,
              state: {
                employee: {
                  isActive: false,
                  name: 'funcionario alterado',
                  gender: 'masculino',
                  cpf: '12345678901',
                  birthDay: '1998-10-10',
                  rg: '1234567',
                  role: '',
                  usesEpi: false,
                  caNumber: "321"
                }
              }
            };

            return cy.request('PATCH', `https://analista-teste.seatecnologia.com.br/employees/${id}`, updatePayload)
              .then((patchResponse) => {
                expect(patchResponse.status).to.eq(200);

              
                cy.request('GET', 'https://analista-teste.seatecnologia.com.br/employees/')
                  .then((getUpdated) => {
                    const updatedEmployee = getUpdated.body.find(emp => emp.id === id);
                    expect(updatedEmployee).to.exist;
                    expect(updatedEmployee.state.employee.name).to.eq('funcionario alterado');
                    expect(updatedEmployee.state.employee.caNumber).to.eq('321');

                    cy.request('DELETE', `https://analista-teste.seatecnologia.com.br/employees/${id}`)
                      .then((deleteResponse) => {
                        expect(deleteResponse.status).to.eq(200);
                      });
                  });
              });
          });
      });
  });
});
