# Skill de Versionamento de Código

Esta skill define como aplicar versionamento de código seguindo o SemVer.
Use sempre este padrão quando for solicitado um commit.

## Regras SemVer

- `major`: mudança incompatível com versões anteriores.
- `minor`: nova funcionalidade compatível com versões anteriores.
- `patch`: correção de bug ou melhoria sem alteração da API.

## Formato de commit

```
type(scope?): descrição curta

corpo opcional

BREAKING CHANGE: descrição da mudança incompatível
```

### Tipos suportados

- `feat`: nova funcionalidade (minor)
- `fix`: correção de bug (patch)
- `perf`: melhoria de desempenho (patch)
- `refactor`: refatoração sem mudança de comportamento (patch)
- `docs`: documentação
- `style`: formatação ou estilo sem alteração de lógica
- `test`: adição ou ajuste de testes
- `build`: mudança no processo de build
- `ci`: mudança em CI/CD
- `chore`: manutenção
- `revert`: reversão de commit anterior

## Regras extras

- Use `BREAKING CHANGE:` no corpo ou `!` no header para indicar mudança major.
- Use `scope` quando fizer sentido para descrever a área afetada.
- Mantenha o subject conciso e no modo imperativo.

## Exemplos

```
fix(login): corrigir validação do formulário de login
```

```
feat(router): adicionar rotas protegidas por autenticação
```

```
refactor(app): migrar injeção para inject() sem alterar comportamento
```

```
feat(api)!: remover suporte a endpoints legados

BREAKING CHANGE: a API /users foi removida em favor de /v2/users
```
