import { Project } from '../types/interfaces.js';

export const projects: Project[] = [
  {
    title: "API de Blogs",
    description: "API RESTful para gerenciamento de blogs com autenticação JWT, seguindo arquitetura MSC.",
    tags: ["Node.js", "Express", "Sequelize", "MySQL", "JWT", "Docker"],
    githubUrl: "https://github.com/AndersonCRodrigues/23-trybe-blogs-api",
    imageUrl: "https://img.freepik.com/free-vector/blog-post-concept-illustration_114360-244.jpg",
    highlights: ["Autenticação segura com JWT", "Arquitetura MSC", "Operações CRUD completas", "Validações com Joi"]
  },
  {
    title: "Store Manager",
    description: "API de gerenciamento de vendas com testes unitários e integração.",
    tags: ["Node.js", "Express", "MySQL", "Mocha", "Chai", "Sinon"],
    githubUrl: "https://github.com/AndersonCRodrigues/store-manager",
    imageUrl: "https://img.freepik.com/free-vector/online-shop-web-concept-illustration_114360-8432.jpg",
    highlights: ["Testes unitários abrangentes", "Testes de integração", "Arquitetura em camadas"]
  },
  {
    title: "Recipe App",
    description: "Aplicativo de receitas completo com React, permitindo visualizar, buscar, filtrar, favoritar e acompanhar o progresso de preparação de receitas e bebidas.",
    tags: ["React", "Context API", "CSS", "Jest", "RTL", "LocalStorage"],
    githubUrl: "https://github.com/AndersonCRodrigues/recipe-app",
    imageUrl: "https://img.freepik.com/free-photo/top-view-meal-preparation-meat-pasta-vegetables_23-2148765599.jpg",
    highlights: ["Múltiplas APIs", "Layout responsivo", "Testes abrangentes", "Gerenciamento de estado complexo"]
  },
  {
    title: "Trybe Wallet",
    description: "Carteira digital que permite controle de gastos com conversão de moedas usando API externa, desenvolvida com React e Redux.",
    tags: ["React", "Redux", "JavaScript", "API Integration", "CSS"],
    githubUrl: "https://github.com/AndersonCRodrigues/trybe-wallet",
    imageUrl: "https://img.freepik.com/free-vector/cryptocurrency-exchange-abstract-concept-illustration_335657-3854.jpg",
    highlights: ["Gerenciamento de estado com Redux", "Conversão de moedas em tempo real", "Formulários controlados", "Tabela dinâmica"]
  },
  {
    title: "NestJS Task Management",
    description: "API de gerenciamento de tarefas com NestJS, implementando autenticação, autorização e persistência com TypeORM.",
    tags: ["NestJS", "TypeScript", "TypeORM", "PostgreSQL", "JWT", "Jest"],
    githubUrl: "https://github.com/AndersonCRodrigues/nest-task-management",
    imageUrl: "https://img.freepik.com/free-vector/tablet-with-lists-concept-illustration_114360-8354.jpg",
    highlights: ["Arquitetura modular NestJS", "Guards e interceptors", "Testes unitários e e2e", "Filtros de exceção personalizados"]
  },
  {
    title: "NestJS Prisma API",
    description: "API RESTful construída com NestJS e Prisma ORM, implementando autenticação JWT e operações CRUD.",
    tags: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "JWT", "Docker"],
    githubUrl: "https://github.com/AndersonCRodrigues/nestjs-prisma-api",
    imageUrl: "https://img.freepik.com/free-vector/api-concept-illustration_114360-9839.jpg",
    highlights: ["Integração Prisma-NestJS", "DTOs e validação", "Middleware de autenticação", "Swagger documentação"]
  },
  {
    title: "Python Algorithms",
    description: "Implementação de algoritmos complexos em Python para resolução de problemas computacionais, incluindo algoritmos de ordenação, busca e manipulação de dados.",
    tags: ["Python", "Algorithms", "Data Structures", "Big O", "Testing"],
    githubUrl: "https://github.com/AndersonCRodrigues/python-algorithms",
    imageUrl: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg",
    highlights: ["Algoritmos de ordenação", "Algoritmos de busca", "Análise de complexidade", "Testes unitários"]
  },
  {
    title: "Restaurant Orders",
    description: "Sistema de gerenciamento de pedidos de restaurante com Python, implementando análise de dados, geração de relatórios e manipulação de arquivos.",
    tags: ["Python", "Pandas", "CSV Processing", "OOP", "Testing"],
    githubUrl: "https://github.com/AndersonCRodrigues/restaurant-orders-python",
    imageUrl: "https://img.freepik.com/free-vector/waiter-concept-illustration_114360-2908.jpg",
    highlights: ["Processamento de CSV", "Análise de dados", "Padrões de projeto", "Tratamento de exceções"]
  },
  {
    title: "Inventory Report",
    description: "Sistema de relatórios de inventário implementado em Python, utilizando padrões de projeto, POO e processamento de múltiplos formatos de arquivo.",
    tags: ["Python", "OOP", "Design Patterns", "File Processing", "Testing"],
    githubUrl: "https://github.com/AndersonCRodrigues/inventory-report",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReLvNj2fZYDo8WjtUEQ1jaw0lZUpT8G2AysA&s",
    highlights: ["Processamento de CSV, JSON e XML", "Strategy Pattern", "Iterators", "Reports Generator"]
  }
];