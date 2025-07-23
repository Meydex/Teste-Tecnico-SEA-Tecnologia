# CT-11 Enviar arquivo de atestado de saúde ocupacional inválido

Descrição: Testar o envio do atestado com formatos não correspondentes a arquivos de texto ou imagem (Ex:arquivo.exe)

Pré-requisitos:
    - Estar na página principal da sea tecnologia (https://analista-teste.seatecnologia.com.br/)
    - Estar com o formulário de cadastro de funcionário aberto

Passos:
    - Selecione Funcionário como 'ativo' no Switch Button
    - Preencher nome com: marcos
    - Marcar Sexo como: Masculino
    - Preencher CPF com: 44444444444 (11 digitos)
    - Preencher RG com : 4444444 
    - Preencher data de Nascimento com: 01/01/1990
    - Selecionar cargo: Cargo 01

    - Selecionar atividade: atividade 01
    - Selecionar EPI: Capacete de Segurança
    - Preencha numero do CA: 123

    - Clique em 'Selecionar o arquivo'
    - Selecione o Arquivo que está no caminho (cypress/fixtures/example.json)
    - Clique em Salvar

Resultado esperado: O sistema Exibe mensagem de erro e sugere formatos válidos (Ex:Png, Pdf)
Resultado Obtido: Falha, O Sistema permite o envio de Arquivos em outros formatos

Detalhes: Se encontra no Report de bug

Risco: Alto
Automação: Sim