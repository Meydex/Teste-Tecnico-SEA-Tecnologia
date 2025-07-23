# Plano de teste - Analista de teste Sea tecnologia

# 1. Introdução:
    - Descrição do Sistema: Aplicação Website Responsável por Registro de funcionário com cadastro de dados pessoais, Epi's e atestados.

    - Objetivos do teste: Garantir que o layout e funcionalidades do site (http://analista-teste.seatecnologia.com.br/) estejam de acordo com o protótipo (https://tinyurl.com/yl58hs4m) sugerido e regras de negócio pré estipuladas.
    

# 2. Escopo do teste:
    -Requisitos funcionáis:
        - O Formulário deve validar campos como:
            -CPF (com máscara)
            -Datas
            -Epi's(Equipamento de proteção individual) e atividades
            -Atividades
        - O sistema deve:
            - Salvar(persistir) os dados dos funcionários
            - Permitir editar e excluir dados dos funcionários
            - Permitir recuperar registros salvos
            - Permitir navegação por links internos
            - Permitir envio de documentos de atestado
            - Adicionar e limpar filtros

    -Requisitos não funcionáis:
        - O layout da aplicação deve estar em conformidade com o protótipo como:
            -Fontes
            -Cores
            -Itens
        - Usabilidade
        - Compatibilidade com navegadores (Chrome, Firefox, Edge )

        

# 3. Metodologia:
    - Teste exploratório: Descoberta de comportamentos esperados e inesperados
    - Teste funcional: Verificar se cada funcionalidade atende aos requisitos
    - Teste de valor limite: Explorar limites de caracteres e peso de arquivos permitidos
    - Teste de validação de dados: Conferência de integridade das informações
    - Teste de integração para garantir adição de implementações futuras
    - Teste de segurança: Garantir que dados sensiveis(Cpf, Rg) não estejam totalmente visiveis ou com retorno em logs

    - Critérios de sucesso: O sistema deve responder a todas as funcionalidades e a integridade dos dados conforme esperado

    - Ambientes de teste: 
        - Sistema operacional Windows 10 pro 64 bits
        
        - Execução de dominio:  http://analista-teste.seatecnologia.com.br/
        - Chrome V 138 (64 bits)
        - Firefox V 141 (64 bits)
        - Edge V 138 (64 bits)

        
    - Ferramentas:
        - Markdown
        - Node v22.14.0
        - Visual studio code v1.102.1
        - Cypress V 14.5.2
        - Git 
        - Obs studio (Para gerar evidências em vídeo de testes )
        - Ferramenta de captura (Para gerar evidências de prints)
# 4.  Riscos
    - Mudanças frequentes na API e URL:
         - Alterações de endpoints podem invalidar os testes existentes
    - Dados corrompidos no upload de atestados

    - Mitigação: 
        - Manter comunicação contínua com o time de desenvolvimento e manter documentação atualizada
        - Garantir que a permanência de dados sensiveis não comprometam o banco de dados e o sistema

# 5. Limitações
    - Testes automatizados não irão cobrir corretamente todas as endpoints, pelo motivo de que o site ainda está em fase inicial de desenvolvimento
    - Cobertura parcial de retornos visuais de ações no sistema, pois o sistema ainda não conta com mensagens de retorno elaboradas
    - Verificação da pernamencia de dados no Banco de dados, póis o objetivo do projeto é a UI(interface gráfica)
    - Cobertura de testes, como se trata de um projeto em estádo de desenvolvimento inicial foi optado o uso limitado de testes variados, focando apenas em testes de grande importância de impacto no sistema.
