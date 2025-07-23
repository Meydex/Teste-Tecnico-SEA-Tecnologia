# CT-9 Preencher formulário com nome inválido

Descrição: Testar se ao Preencher o formulário com nome inválido o sistema exibe mensagem de erro

Pré-requisitos:
    - Estar na página principal da sea tecnologia (https://analista-teste.seatecnologia.com.br/)
    - Estar com o formulário de cadastro de funcionário aberto

Passos:
    - Selecione Funcionário como 'ativo' no Switch Button
    - Preencher nome com: !@#$ (caracteres especiáis)
    - Marcar Sexo como: Masculino
    - Preencher CPF com: 11111111111 (11 digitos)
    - Preencher RG com : 2222222 
    - Preencher data de Nascimento com: 01/01/1990
    - Selecionar cargo: Cargo 01

    - Selecionar atividade: atividade 01
    - Selecionar EPI: Capacete de segurança
    - Preencha numero do CA: 123
    - Clique em Salvar

Resultado esperado: O sistema Desativa a digitação de Caracteres especiáis ou exibe mensagem de erro ao clicar em salvar
Resultado obtido: Falha, o sistema permite Salvar o Nome com Caracteres especiáis

Detalhes: Se encontra no Report de bug

Risco: Alto
Automação: Sim



Cenários alternativos:
    - Preencher o campo nome com numeros
        passos:
            - Preencher o campo nome com: 12345
            - Preencha todos os outros campos corretamente
            - Clique em salvar
        Resultado esperado: O sistema Desativa a digitação de numeros no campo nome ou exibe mensagem de erro ao clicar em salvar
        Resultado obtido: Falha, o sistema permite Salvar o Nome com Numeros

        Detalhes: Se encontra no Report de bug

        Risco: Alto
        Automação: Sim

    - Deixar o campo nome vazio
        passos:
            - Deixar o campo 'nome' vazio
            - Preencha todos os outros campos corretamente
            - Clique em salvar
        Resultado esperado e obtido: Sucesso, O sistema exibe mensagem padrão de erro do navegador para preencher o campo

        Risco: Alto
        Automação: Sim

    - Preencher o campo nome com espaço " "
        passos:
            - Preencher o campo 'nome' com: " " (3 espaços)
            - Preencha todos os outros campos corretamente
            - Clique em salvar
        Resultado esperado e obtido: Falha, O sistema permite o cadastro com " "(espaços) preenchido no campo 'nome'

        Detalhes: Se encontra no Report de bug

        Risco: Alto
        Automação: Sim