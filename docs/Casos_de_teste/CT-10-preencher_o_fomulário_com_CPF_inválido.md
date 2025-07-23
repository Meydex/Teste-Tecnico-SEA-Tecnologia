# CT-10 Preencher o fomulário com CPF inválido

Descrição: Testar se ao preencher o formulário com CPF inválido, o sistema exibe mensagem de erro

Pré-requisitos:
    - Estar na página principal da sea tecnologia (https://analista-teste.seatecnologia.com.br/)
    - Estar com o formulário de cadastro de funcionário aberto
Passos:
    - Selecione Funcionário como 'ativo' no Switch Button
    - Preencher nome com: maria
    - Marcar Sexo como: feminino
    - Preencher CPF com: marialopess
    - Preencher RG com : 3333333
    - Preencher data de Nascimento com: 01/01/1990
    - Selecionar cargo: Cargo 01

    - Selecionar atividade: atividade 01
    - Selecionar EPI: Capacete de segurança
    - Preencha numero do CA: 456
    - Clique em Salvar

Resultado esperado: O sistema Exibe mensagem de erro 
Resultado Obtido: O Sistema permite o cadastro do funcionário com letras no campo 'CPF'

Detalhes: Se encontra no Report de bug

Risco: Alto
Automação: Sim

Cenários alternativos:
    - Preencher o campo CPF com caracteres especiais
        passos:
            - Preencher o campo 'CPF' com:!@#$%¨&*()_
            - Preencher todos os outros campos com dados válidos
            - Clique em Salvar

        Resultado esperado: O sistema Exibe mensagem de erro 
        Resultado Obtido: O Sistema permite o cadastro do funcionário com caracteres especiáis no campo 'CPF'

        Detalhes: Se encontra no Report de bug

        Risco: Alto
        Automação: Sim

    - Preencher o campo CPF com apenas 1 caractere
        passos:
            - Preencha o campo 'CPF' com: 1
            - Preencha todos os outros campos com dados válidos
            - Clique em salvar

        Resultado esperado e obtido: Sucesso, O sistema exibe mensagem padrão de erro do navegador para preencher com mais caracteres

        Detalhes: Se encontra no Report de bug

        Risco: Alto
        Automação: Sim

    - Deixar o campo CPF vazio
        passos:
            - Deixar o campo 'CPF' vazio
            - Preencha todos os outros campos corretamente
            - Clique em salvar
        Resultado esperado e obtido: Sucesso, O sistema exibe mensagem padrão de erro do navegador para preencher com mais caracteres

        Evidência em: evidencias_de_teste\evidencia_sucedidos\CT-10

        Risco: Alto
        Automação: Sim