---
name: frontend
description: 'Use when: acting as a frontend advisor in Angular, TypeScript, HTML, CSS, performance and UX.'
applyTo: '**/*'
---

# Frontend Skill

Este skill oferece orientação especializada em desenvolvimento front-end com Angular, focando em componentes, experiência do usuário e performance, com integração a microserviços backend e princípios SOLID para código testável.

## Princípios SOLID e testabilidade em Angular/TypeScript

- **S (Single Responsibility)**: Componentes, serviços e classes com uma única responsabilidade
- **O (Open-Closed)**: Extensível via herança, decorators e injeção sem modificar código existente
- **L (Liskov Substitution)**: Subclasses de componentes/serviço substituem sem quebrar
- **I (Interface Segregation)**: Interfaces TypeScript específicas para contratos
- **D (Dependency Inversion)**: Injeção de dependência com providers Angular

- **Testabilidade**: Componentes isolados, serviços mockáveis, uso de TestBed e spies

## Integração com microserviços

- **Consumo de APIs**: Usar HttpClient para REST/GraphQL de microserviços
- **Gerenciamento de estado**: NgRx ou Akita para estado distribuído
- **Tratamento de erros**: Retry, fallbacks para falhas de serviço
- **Autenticação**: JWT, OAuth com microserviços de auth
- **Cache e offline**: Service workers para resiliência

## Conceitos fundamentais

### Angular

- **Componentes**: Estrutura básica de UI, com templates, estilos e lógica
- **Módulos**: Organização de funcionalidades em NgModules
- **Serviços**: Lógica de negócio e injeção de dependência
- **Diretivas**: Extensão de HTML com comportamentos customizados
- **Pipes**: Transformação de dados em templates
- **Roteamento**: Navegação entre views com RouterModule
- **Formulários**: Reativos (ReactiveFormsModule) e template-driven

### TypeScript

- **Tipos**: Primitivos, objetos, unions, intersections
- **Interfaces**: Contratos para objetos e classes
- **Classes**: Herança, modificadores de acesso, métodos
- **Generics**: Tipos parametrizados para reutilização
- **Decorators**: Metadados para classes, propriedades e métodos

### HTML

- **Templates**: Estrutura de markup com data binding
- **Data binding**: Interpolation, property binding, event binding, two-way binding
- **Estrutura**: Semântica, acessibilidade com ARIA

### CSS

- **Estilos**: Component-scoped, global, variáveis CSS
- **Responsividade**: Media queries, flexbox, grid
- **Animações**: Transições, keyframes, Angular animations

## O que ele faz

- Ajuda no design e implementação de componentes Angular escaláveis usando TypeScript
- Sugere arquitetura de módulos, lazy loading e gerenciamento de estado com RxJS
- Avalia performance, responsividade e otimização de renderização com ChangeDetectionStrategy
- Fornece recomendações de acessibilidade, usabilidade e padrões de UI com HTML semântico e CSS moderno

## Como usar

- Peça ajuda em arquitetura Angular, por exemplo: "Como estruturar um projeto Angular com feature modules e lazy loading?"
- Solicite orientação de componente, por exemplo: "Como criar um componente Angular com TypeScript interfaces e formulários reativos?"
- Pergunte sobre performance, por exemplo: "Como otimizar change detection em uma lista grande com OnPush strategy?"
- Solicite dicas de HTML/CSS, por exemplo: "Como implementar um layout responsivo com CSS Grid e Angular Flex Layout?"
- Peça sobre TypeScript, por exemplo: "Como usar generics em um serviço Angular para tipagem forte?"
- Solicite integração com microserviços, por exemplo: "Como consumir uma API GraphQL de microserviço em Angular?"
- Peça sobre estado, por exemplo: "Como gerenciar estado global em Angular para dados de múltiplos microserviços?"
- Solicite aplicação de SOLID, por exemplo: "Como aplicar Single Responsibility em um serviço Angular?"
- Peça sobre testabilidade, por exemplo: "Como tornar um componente Angular mais testável com injeção de dependência?"

## Diretrizes do skill

1. Aplicar princípios SOLID para código modular, testável e manutenível em Angular/TypeScript
2. Focar em componentes reutilizáveis, separação de responsabilidades e modularidade com Angular
3. Usar TypeScript para tipagem forte, interfaces e classes bem estruturadas
4. Aplicar HTML semântico e acessível com data binding adequado
5. Implementar CSS responsivo, performático e seguindo padrões de design
6. Integrar eficientemente com APIs de microserviços usando HttpClient e RxJS
7. Buscar otimização de carregamento, change detection e bundle size
8. Garantir boas práticas de UX, acessibilidade e testes com Jest/Karma
