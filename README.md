# Teste Técnico – SEA Tecnologia

Este projeto foi desenvolvido como parte do processo seletivo da empresa **SEA Tecnologia**, com o objetivo de demonstrar conhecimento técnico em testes manuais, testes automatizados com Cypress e análise da qualidade de uma aplicação web

---

# Objetivo

Compreensão de requisitos:
  - Ler e enteder os requisitos da aplicação fornecida
  - Identificar e documentar quaiquer áreas que precisem de esclarecimentos

Planejamento dos Testes:
  - Cirar um plano de testes detalhado que inclua, tipos de testes, casos de testes, Priorização dos testes e ferramentas

Execução dos Testes:
  - Realizar testes manuais conforme o plano de testes
  - Implementar testes automatizados para pelo menos duas funcionalidades
  - Documentar os resoltados dos testes

Reporte de Bugs:
  - Reportar bugs econtrados durante os testes incluindo, descrição, passos para reproduzir, severidade e impacto do bug e sugestõe de melhorias

Análise e melhorias:
 - Fornecer uma análise geral da qualidade da aplicação
 - sugerir melhorias para aumentar qualidade, performace e a segurança

Apresentação dos resultados:
 - Preparar e apresentar um relatório final com, resumo do processo de teste, principáis dedscobertas e bugs, testes automatizados desenvolvidos e sugestções de melhorias

---

# Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) – para testes automatizados
- JavaScript (ES6)
- Markdown – documentação
- Ferramentas de gravação (OBS studio) e Ferramenta de captura (para prints)

---

# Como rodar os testes automatizados
1. com inferface visual 
  `npx cypress open`
2. modo headless
  `npx cypress run`

# Requisitos

- Node.js (versão 18+ recomendada)
- NPM ou Yarn
- Cypress V ^14

# Exemplos de testes em execução
- Teste de fluxo válido

- ![CT-07 teste de fluxo](evidencias_de_teste\evidencia_sucedidos\CT-07\teste_1_preenche_formulario_e_sobe_imagem(GIF).gif)

- Corrigindo teste no html para evidência técnica

- ![BG-02 correção do botão](evidencias_de_teste\evidencias_de_bugs\BG-02\Bug-02_correcao_do_botao(GIF).gif)


# Observações

- Este projeto não contém dados reais ou sensíveis. Os exemplos usados nos testes (nomes, CPFs, etc.) são fictícios e utilizados apenas para fins de simulação técnica

# Conclusão

O projeto permite:
- Verificar fluxos positivos e negativos de cadastro
- Automatizar testes para validação de dados
- Identificar falhas críticas e sugerir melhorias para segurança e usabilidade da aplicação 
- Desenvolvido com atenção aos critérios de análise de qualidade e boas práticas de automação de testes
