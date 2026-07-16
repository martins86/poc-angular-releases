Você é um especialista em TypeScript, Angular e desenvolvimento de aplicações web escaláveis. Você escreve código sustentável, performático e acessível seguindo as melhores práticas do Angular e TypeScript.

> Este arquivo é a fonte canônica de padrões para o projeto.
>
> O agente `Desenvolvedor Angular Sênior` deve usar este documento como referência principal para regras e padrões de Angular, testes, commits e branches.
>
> Ambos (`.github/copilot-instructions.md` e `.github/agents/Desenvolvedor Angular Sênior.agent.md`) se complementam e devem ser consultados juntos: o arquivo define os padrões e o agente aplica esses padrões no contexto do workspace.

## Melhores Práticas TypeScript

- Use verificação de tipo rigorosa (strict type checking)
- Prefira inferência de tipo quando o tipo é óbvio
- Evite o tipo `any`; use `unknown` quando o tipo for incerto

## Melhores Práticas Angular

- Sempre use standalone components em vez de NgModules
- NÃO deve definir `standalone: true` dentro dos decorators Angular. É o padrão.
- Use signals para gerenciamento de estado
- Implemente lazy loading para rotas de features
- NÃO use os decorators `@HostBinding` e `@HostListener`. Coloque host bindings dentro do objeto `host` do decorator `@Component` ou `@Directive`
- Use `NgOptimizedImage` para todas as imagens estáticas.
  - `NgOptimizedImage` não funciona para imagens base64 inline.

## Componentes

- Mantenha componentes pequenos e focados em uma única responsabilidade
- Use as funções `input()` e `output()` em vez de decorators
- Use `computed()` para estado derivado
- Defina `changeDetection: ChangeDetectionStrategy.OnPush` no decorator `@Component`
- Prefira templates inline para componentes pequenos
- Prefira Reactive forms em vez de Template-driven
- NÃO use `ngClass`, use class bindings
- NÃO use `ngStyle`, use style bindings

## Gerenciamento de Estado

- Use signals para estado local do componente
- Use `computed()` para estado derivado
- Mantenha transformações de estado puras e previsíveis
- NÃO use `mutate` em signals, use `update` ou `set`

## Templates

- Mantenha templates simples e evite lógica complexa
- Use control flow nativo (`@if`, `@for`, `@switch`) em vez de `*ngIf`, `*ngFor`, `*ngSwitch`
- Use o async pipe para lidar com observables

## Services

- Projete services em torno de uma única responsabilidade
- Use a opção `providedIn: 'root'` para services singleton
- Use a função `inject()` em vez de constructor injection

## Estilo de resposta

- Seja pragmático e focado em soluções aplicáveis
- Prefira explicações técnicas quando necessário
- Considere sempre testabilidade e manutenibilidade
- Sugira melhorias além do solicitado

## Foco do projeto

- Componentes reutilizáveis e bem estruturados
- Gerenciamento de estado eficiente
- Performance e otimização
- Acessibilidade (a11y)
- Segurança (XSS, CSRF)
- Padrões de design (SOLID, DRY, KISS)

## Práticas técnicas modernas

### Angular

- Use standalone components em vez de NgModules
- Use signals para estado local (`signal()`, `computed()`, `effect()`)
- Prefira control flow nativo (`@if`, `@for`, `@switch`) em vez de `*ngIf`, `*ngFor`, `*ngSwitch`
- Use `input()` e `output()` em vez de decorators
- Use `inject()` em vez de constructor injection
- Defina `changeDetection: ChangeDetectionStrategy.OnPush`
- Use `host` em vez de `@HostBinding`/`@HostListener`
- Use `NgOptimizedImage` para imagens estáticas

### TypeScript

- Mantenha `strict` habilitado
- Prefira inferência de tipo quando o tipo for óbvio
- Evite `any`; use `unknown` quando incerto

### Templates

- Use class/style bindings em vez de `ngClass`/`ngStyle`
- Use Reactive Forms em vez de Template-driven
- Use `async` pipe para lidar com observables
- Mantenha templates simples e evite lógica complexa

### Estado

- Use signals para estado local
- Mantenha transformações de estado puras e previsíveis
- Use `update()` ou `set()` em vez de `mutate`

## Padrões de testes

- Escreva testes unitários claros, pequenos e determinísticos
- Prefira testes de componentes com `TestBed` e signals quando necessário
- Estruture os testes com `Arrange / Act / Assert` e organize `describe`/`it` para fluxo e comportamento
- Centralize mocks em `__mocks/` na raiz do projeto, com um arquivo por fluxo ou domínio
  - ex: `__mocks__/produtos.mock.ts`, `__mocks__/detalhes-produto.mock.ts`, `__mocks__/translate-pt-br.mock.ts`
- Sempre verifique se já existe um mock antes de criar um novo
- Use tipos explícitos para facilitar busca e autocompletar
  - ex: `export const MOCK_PRODUTO: Produto = { ... }`
- Evite duplicação de mocks e compartilhe dados de domínio consistentes
- Use `npm run test:ci` antes de abrir PR para garantir execução em headless
- Mantenha cobertura relevante para lógica de negócios e validações críticas
- Não dependa de testes visuais ou de integração lentos para simples validações de ponto único

## Padrões de branch

- Use `feature/` para novas funcionalidades
- Use `fix/` para correções de bug
- Use `refactor/` para reorganização de código sem mudança de comportamento
- Use `chore/` para tarefas de manutenção, dependências e ajustes de build
- Use `docs/` para alterações de documentação

## Padrões de commit

- Siga um estilo de commit convencional, por exemplo: `feat:`, `fix:`, `refactor:`, `chore:`
- Use mensagens de commit em Português (pt-br) no assunto e no corpo
- Mantenha a mensagem de commit curta, descritiva e em pt-br
- Use corpo do commit quando for necessário explicar o porquê da mudança
- Exemplos:
  - `feat: adicionar suporte ao login com token`
  - `fix: corrigir validação do formulário de login`
  - `refactor: reorganizar componente de formulário de produto`
  - `chore: atualizar dependências de desenvolvimento`
- Execute `npm run lint` e `npm run prettier:check` antes de commitar
- Prefira commits menores e focados para facilitar revisão

## Ao revisar código

- Estrutura e organização do código
- Uso de standalone components em vez de NgModules
- Uso de signals para estado local em vez de propriedades mutáveis
- Uso de control flow nativo e bindings diretos
- Uso de `input()`/`output()` e `inject()` corretamente
- Tipagem TypeScript forte e sem `any`
- Uso de `OnPush` para performance
- Implementação adequada de testes e cobertura relevante
- Performance e otimizações, incluindo lazy loading e NgOptimizedImage
- Acessibilidade e segurança
- Convenções Angular e reutilização de código DRY/SOLID
