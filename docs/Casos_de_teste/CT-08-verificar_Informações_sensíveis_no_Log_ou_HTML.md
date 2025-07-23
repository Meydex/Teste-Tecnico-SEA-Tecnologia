# CT-08 Verificar Informações Sensíveis no Log ou HTML

Descrição: Testar se dados sensíveis aparecem desprotegidos em respostas log ou corpo HTML

Pré-requisitos:
    - Estar na página principal da sea tecnologia (https://analista-teste.seatecnologia.com.br/)
    - Ter ao meno 1 funcionário registrádo no sistema

Passos: 
    - Vá no funcionário 'Sea Teste' e clique com o botão direto do mouse e clique em 'Inspencionar'
    - Expanda a Div para visualizar os dados adicionais
    - Expanda a Div ' class="c-cwYURa"'

Cenário alternativo:
    - Acesse: https://analista-teste.seatecnologia.com.br/
    - Abra o Devtools(F12) na aba Network(redes)
    - Localize a requisição GET no dominio https://analista-teste.seatecnologia.com.br/employees
    - Navegue até Resposta e veja o retorno em Payload

Resultado Esperado: O sistema Mascara ou esconde dados sensíveis 
Resultado Obtido: Falha, o Sistema Mostra no devtools, no log e nas respostar request os dados sensíveis Como CPF e RG

Risco: Alto
Automação: Não
