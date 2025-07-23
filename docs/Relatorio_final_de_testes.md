# Relatório Final de Testes, Avaliação da Qualidade da Aplicação

1. Resumo do Processo de Teste

- Objetivo geral do teste: Validar fluxos e funcionalidades, verificar compatibilidade com navegadores, identificar falhas críticas de segurança e exposição de dados

- Escopo dos testes: Teste feito em fluxos positivos e negativos das funcionalidades, além de aspectos não funcionais como layout, fontes, acessibilidade e compatibilidade

- Ambiente de testes: Navegadores (Chorme,Firefox e Edge) e ferramentas como Cypress

- Abordagem adotada: testes manuais + automatizados

2. Principais Descobertas
- O sistema conta com diversos problemas visuais que está em desacordo com o protótipo sugerido
- O sistema tem uma falha critica ao retornar playloads completos com dados sensíveis dos registros que ferem a norma LGPD
- O sistema Conta com uma caracteristica intensional que ao virar o dia, todos os cadastros realizados do dia são deletados exceto pelo funcionário implantando no sistema com id numérico de dígito único (1)
- Todos os outros registros recebem um Id aleatório com numeros e letras (2yt3r)

3. Principais bugs Reportados
- BUG-09 O botão de 'proxima etapa' não redireciona para a proxima etapa, prioridade: Alta
- BUG-14 Exposição de dados sensíveis no playload via devtools e html, prioridade: Alta
- BUG-16 CPF inválido é aceito no registro, prioridade: Alta
- BUG-18/19 O sistema não altera nem exclui registros via frontend, prioridade: Alta

4. Testes Automatizados Desenvolvidos
- Preencher formulário + cenários alternativos (6 testes)
- Preencher formulário com nome inválido (4 testes)
- Preencher formulário com CPF inválido (4 testes)
- Alterar e excluir cadastros via request (1 teste)

Tecnologias usadas: Cypress + JS

Foram utilizados Commands do cypress para facilitar o fluxo dos códigos criados e evitar conflito de códigos repetidos

Caminho para executar os testes: tests/cypress/e2e

Exemplos de testes criados: 

    1. describe('CT-10 Preencher o fomulário com CPF inválido', () => {
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
    })

    2. Cypress.Commands.add('SalvaEchecaPOST',()=>{
        cy.intercept('POST', '**/employees').as('post');
        cy.contains('button', 'Salvar').click();
        cy.wait('@post').its('response.statusCode').should('eq', 201);
    })

- Esses testes automatizados garantem que os fluxos críticos como cadastro, validação e envio de dados. O total de 15 testes cobre as principais entradas de dados e interações esperadas

5. Análise Geral da Qualidade
- A aplicação está no caminho certo com seu layout geral claro, a usabilidade e acessibilidade estão com um bom funcionamento necessitando apenas de algumas revisões no estilo para melhorar a experiência
- A aplicação precisa de uma revisão geral nos botões pois a maioria não funciona por falta de sintaxe ou lógica no html e no código
- O sistema precisa de uma revisão urgente na segurança pois expõe dados sensíveis dos funcionários como CPF e RG, além de que a segurança HSTS está desativada, assim facilitando invasões mal intencionadas

Qualidade Funcional:
- O fluxo principal do sistema(cadastro) está bem elaborado, falta apenas ajustes para garantir a integridade dos dados como:
    - Exibir mensagens de erros e impedir cadastro ao inserir dados inválidos nos campos como, nome, Cpf e RG
    - Mascarar parcialmente dados sensíveis por quesito de segurança como, CPF e Rg
    - Validar apenas envio de arquivos válidos como, Png, Pdf (arquivos e texto e imagem)

Usabilidade e Interface:
- O sistema tem o layout, responsividade e acessibilidades minimas presentes, assim dificultando a navegação
- A falta de feedback visual em algumas ações confundem ao utilizar o sistema
- Como o layout do sistema se encontra com elementos desalinhados, alguns se tornam dificés e até impossíveis de serem acessados

Sugestões:
- Garantir contraste suficiente para acessibilidade
- Incluir indicators ou mensagens ao salvar dados
- Melhorar foco nos formulários ao navegar com o teclado

Performance:
- Por se tratar de um formulário simples e um sistema em estado inicial, não foi detectado problemas de performace na navegação do sistema

Segurança:
- O sistema contém falhas críticas na segurança como:
    - HSTS desativado
    - Dados sensíveis expostos
    - Permite envio de qualquer tipo de arquivo
    - Falta de JWT token para proteger requisições

Sugestões:
- Ativar o HSTS
- Ocultar dados sensíveis no html e retirar a resposta com payload de requisições
- Bloquear envio de arquivos Exceto, PDfs e Imagens
- Gerar token uníco para cada registro para proteção

6. Recomendações Técnicas Gerais

- Implementar testes unitários a cada nova funcionalidade e não funcionalidade adicionada no sistema, assim garantindo a minima funcionalida necessária
- Usar seletores CSS únicos facilita a manutenção de testes automatizados, evitando quebras sempre que o layout mudar
- Fornecer mensagens de erro mais descritivas em falhas de rede ou backend (Deixar as mensagens apenas com o navegador dificulta algumas validações)
- Gerar ID de forma padronizada evitando aleatoriedade discrepante no banco de dados

7. Recomendações e Melhorias
- Sugestões para integração de CI/CD com testes automatizados para os fluxos principáis do sistema

8. Conclusão
- A aplicação apresenta boa estrutura inicial e implementa fluxos básicos funcionais, no entanto, foram identificadas falhas críticas que comprometem a segurança, confiabilidade e usabilidade do sistema. Recomendo ações imediatas para correção das exposições de dados e implementação de proteções mínimas (como JWT e validações). Com as melhorias propostas, o sistema poderá evoluir para um produto mais robusto e seguro, preparado para ambientes de produção
