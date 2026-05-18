---
name: git
description: 'Use when: orientando convenções de commit, fluxo de branch e boas práticas de versionamento para projetos JavaScript/TypeScript.'
applyTo: '**/*'
---

# Git Skill

Este skill fornece regras e exemplos para mensagens de commit estruturadas, com foco em clareza, consistência e qualidade de versionamento.

## O que ele faz

- Define o padrão de commit: `tipo[escopo opcional]: descrição`
- Orienta sobre uso de letras minúsculas, corpo opcional e rodapé opcional
- Explica os tipos de commit e quando aplicá-los
- Fornece exemplos alinhados com convenções de commit semânticas

## Como usar

- Peça para formatar uma mensagem de commit: "Escreva um commit para adicionar validação de formulário"
- Pergunte sobre o tipo correto: "Devo usar `feat` ou `refactor` para esta mudança?"
- Peça revisão de mensagem: "Essa mensagem de commit está adequada?"
- Consulte regras de Git: "Qual formato de commit usar para mudança de config CI?"

## Convenção de commits

- formato: `tipo[escopo opcional]: descrição`
- descrição em letras minúsculas
- espaço depois dos `:`
- sem ponto final
- corpo opcional para explicar o porquê
- rodapé(s) opcional(is) para referências, issue ou breaking changes

### Tipos

- chore: atualizações de tarefas, ferramentas, configuração e bibliotecas sem mudança funcional
- feat: novas funcionalidades ou novas implantações
- fix: correções de bugs
- refactor: alterações no código que não mudam comportamento
- docs: inclusão ou alteração apenas da documentação
- perf: mudanças que melhoram desempenho
- style: formatação e estilo de código sem alterar lógica
- test: adiciona ou corrige testes automatizados
- build: mudanças no sistema de build ou dependências
- ci: alterações em arquivos/scripts de CI
- env: modificações em configuração de integração contínua, containers ou parâmetros de pipeline

### Exemplos

- `chore: add commitlint e husky`
- `chore(eslint): obrigar o uso de aspas duplas no jsx`
- `refactor: refatorando a tipagem`
- `feat: tabela lista de produtos`
- `feat(page/home): criando o roteamento`

## Git Flow

- Branch principal de produção: `master`
- Branch principal de homologação: `release`
- Branches de suporte: `develop`, `feature`, `release`, `bugfix` e `hotfix`

### Branches

- `master`: código em produção. todas as novas funcionalidades devem chegar aqui quando estiverem prontas e testadas.
- `develop`: código do próximo deploy. novas features são integradas aqui para preparação antes do merge em `release`.
- `feature/name-feature`: funcionalidade específica criada a partir de `develop`. deve ser removida após merge em `develop`.
- `release-0.0.0`: ponte entre `develop` e `master`, usada como ambiente de homologação. após testes e merge em `master`, deve ser removida; quaisquer ajustes também devem ser sincronizados com `develop`.
- `bugfix/name-fix`: correções identificadas durante o desenvolvimento ainda na fase de release. criada a partir de `release` e removida após merge em `release`.
- `hotfix/name-fix`: correções de produção. criada a partir de `master` e removida após merge em `master` e `develop`.

## Diretrizes do skill

1. Garantir commit claro e consistente
2. Usar letras minúsculas e evitar ponto final na descrição
3. Priorizar o tipo de commit que melhor descreve a mudança
4. Manter escopo quando relevante
5. Inserir corpo/rodapé somente para justificativas ou referências adicionais
