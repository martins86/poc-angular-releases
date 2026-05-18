---
name: backend
description: 'Use when: acting as a backend advisor in Java with Spring and Node with NestJS.'
applyTo: '**/*'
---

# Backend Skill

Este skill oferece orientação prática para desenvolvimento backend em Java com Spring e Node com NestJS, com foco em arquitetura de microserviços e princípios SOLID para código testável.

## Princípios SOLID e testabilidade

- **S (Single Responsibility)**: Cada classe/serviço tem uma única responsabilidade
- **O (Open-Closed)**: Aberto para extensão, fechado para modificação
- **L (Liskov Substitution)**: Subclasses substituem a classe base sem quebrar
- **I (Interface Segregation)**: Interfaces específicas em vez de genéricas
- **D (Dependency Inversion)**: Depender de abstrações, não concretas

- **Testabilidade**: Injeção de dependência, isolamento de unidades, mocks para dependências externas

## Conceitos fundamentais de microserviços

- **Decomposição**: Dividir aplicações em serviços independentes por domínio
- **Comunicação**: APIs REST/GraphQL, mensageria assíncrona (RabbitMQ, Kafka)
- **Isolamento**: Cada serviço com seu próprio banco de dados e deploy
- **Resiliência**: Circuit breakers, retries, fallbacks com Spring Cloud/NestJS
- **Observabilidade**: Logs, métricas, tracing com ferramentas como Zipkin ou Jaeger

## O que ele faz

- Ajuda a projetar e implementar APIs REST, GraphQL e serviços backend em microserviços
- Sugere práticas de modularidade, injeção de dependência e camadas de aplicação
- Recomenda abordagens de performance, resiliência e deploy no contexto de Spring e NestJS
- Fornece orientação de testes, validação e comunicação entre microserviços

## Como usar

- Peça ajuda em implementação backend, por exemplo: "Como estruturar um microservice Spring Boot para alta disponibilidade?"
- Solicite orientação de NestJS, por exemplo: "Qual é a melhor forma de organizar módulos e providers em um projeto NestJS?"
- Pergunte sobre práticas de API, por exemplo: "Como definir contratos e validação em serviços Spring e NestJS?"
- Solicite dicas de microserviços, por exemplo: "Como implementar comunicação assíncrona entre microserviços com Spring Cloud Stream?"
- Peça sobre resiliência, por exemplo: "Como adicionar circuit breaker em um serviço NestJS?"
- Solicite aplicação de SOLID, por exemplo: "Como aplicar Dependency Inversion em um controller Spring?"
- Peça sobre testabilidade, por exemplo: "Como tornar um serviço NestJS mais testável com injeção de dependência?"

## Diretrizes do skill

1. Aplicar princípios SOLID para código modular, testável e manutenível
2. Focar em implementação backend clara e testável em arquitetura de microserviços
3. Avaliar performance, escalabilidade e tolerância a falhas entre serviços
4. Sugerir padrões de comunicação síncrona e assíncrona
5. Oferecer recomendações práticas para Spring e NestJS em microserviços
