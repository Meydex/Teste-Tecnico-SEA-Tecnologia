# CT-07 Preencher formulário com informações válidas

Descrição: Testar se ao preencher o formulário corretamente os dados são salvos no sistema

Pré-requisitos:
    - Estar na página principal da sea tecnologia (https://analista-teste.seatecnologia.com.br/)
    - Estar com o formulário de cadastro de funcionário aberto

Passos: 
    - Selecione Funcionário como 'ativo' no Switch Button
    - Preencher nome com: teste
    - Marcar Sexo como: Masculino
    - Preencher CPF com: 999999999 (11 digitos)
    - Preencher RG com : 9999999
    - Preencher data de Nascimento com: 01/01/1990
    - Selecionar cargo: Cargo 02

    - Selecionar atividade: atividade 02
    - Selecionar EPI: Capacete de segurança
    - Preencha numero do CA: 123

    - Clique em 'Selecionar o arquivo'
    - Selecione o Arquivo que está no caminho (cypress/fixtures/placeholder.png )
    - Clique em Salvar

Resultado Esperado e obtido: Sucesso, o sistema salva todos os dados do funcionário corretamente

Evidência em: evidencias_de_teste\evidencia_sucedidos\CT-07

Risco: Alto
Automação: Sim

Cenários alternativos: 
    - Preencher o formulário e deixar marcado como trabalhador inativo
        Resultado esperado e obtido: Sucesso, Funcionou como previsto

        Evidência em: evidencias_de_teste\evidencia_sucedidos\CT-07

        Risco: Alto
        Automação: Sim

    - Preecher o formulário e marcar a checkbox de 'O trabalhador não usa EPI'
        Resultado esperado e obtido: Sucesso, Funcionou como previsto

        Evidência em: evidencias_de_teste\evidencia_sucedidos\CT-07

        Risco: Alto
        Automação: Sim  

    - Preencher o formulário e adicionar um EPI extra
        passos:
            - Clique em 'adicionar EPI'
        Resultado esperado: Nova seção do formulário para adicionar outro EPI
        Resultado obtido: Falha, o botão não funcionou

        Detalhes: Se encontra no Report de bug 

        Risco: Alto
        Automação: Sim

    - Preencher o formulário e clicar em 'Adicionar outra atividade'
        Resultado esperado: Nova seção do formulário para adicionar outra atividade
        Resultado obtido: Falha, O formulário fecha sem salvar os dados inseridos

        Detalhes: Se encontra no Report de bug

        Risco: Alto
        Automação: Sim

        

    - Preencher o formulário e excluir o EPI extra
        passos:
            - Clicar em 'Adicionar EPI'
            - Selecione EPI
            - Preencha numero do CA
            - Clique em 'Adicionar EPI'
            - Clique em 'Excluir EPI' para excluir o Epi que acabou de criar

        Resultado esperado: Funcionalidade de adição e Exclusão de EPI funcionando
        Resultado obtido: Falha, O botão não funciona

        Detalhes: Se encontra no Report de bug

        Risco: Alto
        Automação: Sim