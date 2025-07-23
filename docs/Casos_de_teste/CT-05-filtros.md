# CT-05 Filtros

Descrição: Testa se ao clicar no filtro 'ver apenas ativos' se apenas os funcionários ativos aparecem na lista, e se ao clicar em 'Limpar filtros' se a lista retorna ao estado original revelando todos os funcionários da lista.

Pré-requisitos:
    - Estar na página principal da sea tecnologia (https://analista-teste.seatecnologia.com.br/)
    - Ter funcionários registrados no sistema como trabalhador ativo

Passos:
    - Localize e Clique no botão 'Ver apenas ativos'
    - Observe apenas os funcionários ativos aparecerem
    - Clique em 'Limpar Filtros'
    - Observe todos os funcionários aparecerem

Resultado Esperado: Ao clicar  em 'Ver apenas ativos' o sistema deve retornar apenas os funcionários ativos, e ao clicar em 'Limpar filtros' o sistema deve retornar todos os funcionários.

Resultado Obtido: Falha, A Lista filtra corretamente os ativos, mas não exibe a cor de fundo que facilita a identificação dos funcionários ativos

Nota: A cor de fundo do layout de funcionários ativos deveria ser no tom azul claro para facilitar a visualização

Detalhes: Se encontra no Report de bug

Risco: Alto
Automação: Não