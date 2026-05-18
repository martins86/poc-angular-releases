---
name: security
description: 'Use when: acting as a security advisor for secure coding, LGPD, threat mitigation, and safe practices in Node.js, Angular, TypeScript, HTML, Jest and Java.'
applyTo: '**/*'
---

# Security Skill

Este skill ajuda a revisar e fortalecer a segurança do código em backend e frontend, com foco em ameaças reais, proteção de dados pessoais e conformidade com LGPD.

## O que ele faz

- Identifica vulnerabilidades comuns em backend e frontend
- Sugere práticas seguras para autenticação, autorização e proteção de dados
- Avalia validação de entrada, controle de acesso e proteção contra ataques web
- Recomenda abordagens seguras em Node.js, Angular, TypeScript, HTML e Java
- Orienta sobre tratamento de dados pessoais, minimização e requisitos de LGPD
- Fornece diretrizes para atualização segura de dependências, auditoria de pacotes e validação de compatibilidade

## Como usar

- Pergunte sobre segurança de código, por exemplo: "Como proteger endpoints em Node.js contra injeção SQL e XSS?"
- Solicite revisão de práticas em Angular/TypeScript, por exemplo: "Como evitar vulnerabilidades em formulários e rotas no Angular?"
- Peça recomendações sobre testes seguros, por exemplo: "Como validar ataques de injeção em testes Jest?"
- Consulte requisitos de privacidade e LGPD, por exemplo: "Como tratar dados pessoais no frontend e backend para ficar compatível com a LGPD?"
- Peça orientações sobre atualização de pacotes, por exemplo: "Como atualizar dependências com segurança e garantir que o sistema continue funcionando?"
- Pergunte sobre ferramentas de segurança: "Quando usar OWASP ZAP, Snyk, npm audit ou SonarQube no meu projeto Angular?"
- Pergunte sobre workflow: "Como combinar pré-push e GitHub Actions para testes de segurança?"

## Ferramentas recomendadas

- OWASP ZAP: scanner de aplicações web para identificar injeção, XSS, CSRF e outros riscos.
- Snyk: análise contínua de vulnerabilidades em dependências, integração com GitHub e correções automatizadas.
- npm audit: verifica vulnerabilidades conhecidas nas dependências do projeto.
- SonarQube: análise de qualidade de código com regras de segurança e integração a pipelines.

## Onde realizar os testes

- Pré-push: use ferramentas leves como `npm audit` para detectar problemas rapidamente antes do envio.
- Pipeline GitHub Actions: execute verificações mais profundas usando OWASP ZAP, Snyk ou SonarQube em pull requests.
- Combinação recomendada: pré-push para feedback rápido, CI para análise robusta e contínua.

## Exemplo de workflow no GitHub Actions

```yaml
name: Security Scan

on:
  pull_request:
    branches:
      - main

jobs:
  security:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Install dependencies
        run: npm install

      - name: Run npm audit
        run: npm audit

      - name: Run Snyk
        run: npx snyk test
```

## Exemplo de pre-push com Husky

No `package.json`, configure um script de pré-push que execute `npm audit` e testes de CI:

```json
{
  "scripts": {
    "security:pre-push": "npm audit --audit-level=moderate",
    "pre-push": "npm run security:pre-push && npm run test:ci"
  }
}
```

E, no hook do Husky, mantenha:

```bash
npm run pre-push
```

Assim, o `pre-push` valida vulnerabilidades de dependências antes de executar a suíte de testes.

## Diretrizes do skill

1. Avaliar ameaças específicas de frontend e backend
2. Enfatizar validação de entrada, controle de acesso e proteção de dados
3. Propor correções para XSS, CSRF, injeção e autenticação fraca
4. Aplicar boas práticas de segurança em Node.js, Angular, TypeScript, HTML e Java
5. Incluir recomendações de proteção de dados pessoais e conformidade com LGPD
6. Reforçar a importância de atualização segura de dependências, auditoria de pacotes e validação de compatibilidade para evitar regressões
