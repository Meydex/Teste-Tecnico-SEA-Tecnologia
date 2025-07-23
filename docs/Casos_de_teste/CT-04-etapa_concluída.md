# CT-04 Etapa concluída

Descrição: Testa se ao marcar o Switch button 'etapa concluída', o botão de 'Próximo passo' é habilitado, se os itens do painel superior se tornam clicaveis e se a página permite prosseguir para o proximo passo.

Pré-requisitos:
    - Estar na página principal da sea tecnologia (https://analista-teste.seatecnologia.com.br/)
    - Ter funcionários cadastrádos no sitema

Passos:
    - Localizar o Switch Button no canto inferior direito
    - Clique no Switch Button para mudar de 'não' para 'sim'
    - Observe se no painel superior se abaixo do item da página atual aparece o texto 'concluído'
    - Verifique se o botão no canto infeiror escrito 'próximo passo' está ativo
    - Clique no botão 'Próximo passo' e verifique se foi redirecionado para uma página com texte no painel superior escrito 'Em Breve'

Resultado Esperado: Ao clicar no Switch Button aparece que a etapa foi concluída e libera o acesso a próxima etapa

Resultado Obtido: Falha, o Botão 'Próximo passo' parece ativo mas não funcional, não redireciona para proxima etapa

Detalhes: Se encontra no Report de bug

Risco: Alto
Automação: Não