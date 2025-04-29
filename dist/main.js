"use strict";
class Portfolio {
    constructor() {
        this.projects = [
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
        this.skills = [
            { name: "Python", category: "backend", level: 5 },
            { name: "Node.js", category: "backend", level: 5 },
            { name: "Express", category: "backend", level: 5 },
            { name: "NestJs", category: "backend", level: 5 },
            { name: "Flask", category: "backend", level: 5 },
            { name: "FastApi", category: "backend", level: 5 },
            { name: "TypeScript", category: "backend", level: 4 },
            { name: "RESTful APIs", category: "backend", level: 5 },
            { name: "MySQL", category: "database", level: 4 },
            { name: "Postgres", category: "database", level: 4 },
            { name: "MongoDB", category: "database", level: 5 },
            { name: "DynamoDb", category: "database", level: 3 },
            { name: "Weavite", category: "database", level: 3 },
            { name: "Sequelize", category: "backend", level: 4 },
            { name: "Docker", category: "devops", level: 4 },
            { name: "Jest/Mocha", category: "tools", level: 4 },
            { name: "Pytest", category: "tools", level: 4 },
            { name: "Git/GitHub", category: "tools", level: 5 },
            { name: "AWS", category: "tools", level: 4 },
            { name: "Langchain/Langgraph", category: "tools", level: 4 },
            { name: "JWT", category: "backend", level: 4 },
            { name: "React", category: "frontend", level: 3 },
            { name: "NextJs", category: "frontend", level: 4 },
            { name: "HTML/CSS", category: "frontend", level: 3 },
            { name: "Tailwind", category: "frontend", level: 4 },
            { name: "Bootstrap", category: "frontend", level: 4 },
            { name: "CI/CD", category: "devops", level: 3 },
        ];
        window.addEventListener('DOMContentLoaded', () => {
            this.initializeSections();
            this.setupScrollReveal();
        });
    }
    initializeSections() {
        this.renderHeader();
        this.renderHero();
        this.renderAbout();
        this.renderSkills();
        this.renderProjects();
        this.renderContact();
    }
    renderHeader() {
        const header = document.getElementById('header');
        if (header) {
            header.innerHTML = `
                <div class="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div class="text-2xl font-bold">Anderson<span class="text-blue-500">Rodrigues</span></div>
                    <nav class="hidden md:block">
                        <ul class="flex space-x-6">
                            <li><a href="#hero" class="nav-link hover:text-blue-400">Início</a></li>
                            <li><a href="#about" class="nav-link hover:text-blue-400">Sobre</a></li>
                            <li><a href="#skills" class="nav-link hover:text-blue-400">Habilidades</a></li>
                            <li><a href="#projects" class="nav-link hover:text-blue-400">Projetos</a></li>
                            <li><a href="#contact" class="nav-link hover:text-blue-400">Contato</a></li>
                        </ul>
                    </nav>
                    <div class="md:hidden">
                        <button id="mobile-menu-button" class="text-white focus:outline-none">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div id="mobile-menu" class="hidden md:hidden bg-gray-700 px-4 py-2">
                    <ul class="flex flex-col space-y-2">
                        <li><a href="#hero" class="block py-2 hover:text-blue-400">Início</a></li>
                        <li><a href="#about" class="block py-2 hover:text-blue-400">Sobre</a></li>
                        <li><a href="#skills" class="block py-2 hover:text-blue-400">Habilidades</a></li>
                        <li><a href="#projects" class="block py-2 hover:text-blue-400">Projetos</a></li>
                        <li><a href="#contact" class="block py-2 hover:text-blue-400">Contato</a></li>
                    </ul>
                </div>
            `;
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenuButton && mobileMenu) {
                mobileMenuButton.addEventListener('click', () => {
                    if (mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.remove('hidden');
                    }
                    else {
                        mobileMenu.classList.add('hidden');
                    }
                });
            }
        }
    }
    renderHero() {
        const hero = document.getElementById('hero');
        if (hero) {
            hero.innerHTML = `
                <div class="container mx-auto px-4 flex flex-col md:flex-row items-center">
                    <div class="md:w-1/2 mb-8 md:mb-0 reveal-fade-up">
                        <h1 class="text-4xl md:text-5xl font-bold mb-4">Anderson Rodrigues</h1>
                        <h2 class="text-2xl md:text-3xl text-blue-300 mb-6">Desenvolvedor Backend</h2>
                        <p class="text-lg md:text-xl mb-6">Especialista em construir APIs robustas e escaláveis com Python, Node.js, Express e TypeScript.</p>
                        <div class="flex space-x-4">
                            <a href="#projects" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition">Ver Projetos</a>
                            <a href="#contact" class="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-6 rounded-lg transition">Contato</a>
                        </div>
                    </div>
                    <div class="md:w-1/2 flex justify-center reveal-fade-up">
                        <div class="bg-gray-700 p-2 rounded-full shadow-xl">
                            <img src="https://avatars.githubusercontent.com/u/110496377?v=4" alt="Anderson Rodrigues" class="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-blue-500">
                        </div>
                    </div>
                </div>
            `;
        }
    }
    renderAbout() {
        const about = document.getElementById('about');
        if (about) {
            about.innerHTML = `
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 reveal-fade-up">Sobre Mim</h2>
                    <div class="flex flex-col md:flex-row items-center">
                        <div class="md:w-1/2 mb-8 md:mb-0 reveal-fade-up">
                            <img src="https://images.prismic.io/voitto-blog/17f7d622-3a54-480e-be53-5dd7296bddce_desenvolvedor+backend.jpg?auto=compress,format?w=3840&q=75" alt="Desenvolvedor Backend" class="rounded-lg shadow-lg">
                        </div>
                        <div class="md:w-1/2 md:pl-12 reveal-fade-up">
                            <h3 class="text-2xl font-bold mb-4 text-blue-700">Desenvolvedor Backend Experiente</h3>
                            <p class="text-lg mb-4">
                                Sou um desenvolvedor de software apaixonado por criar soluções backend robustas e eficientes.
                                Minha especialidade está em desenvolver APIs RESTful com Python, Node.js, Express e TypeScript, seguindo
                                boas práticas de arquitetura e padrões de projeto.
                            </p>
                            <p class="text-lg mb-6">
                                Com forte conhecimento em bancos de dados relacionais e não-relacionais, autenticação,
                                segurança e containers, busco sempre entregar código limpo, testável e de alta qualidade.
                            </p>
                            <div class="flex space-x-4">
                                <a href="https://github.com/AndersonCRodrigues" target="_blank" class="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-lg flex items-center">
                                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.203 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clip-rule="evenodd"></path>
                                    </svg>
                                    GitHub
                                </a>
                                <a href="https://www.linkedin.com/in/anderson-costa-rodrigues/" target="_blank" class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg flex items-center">
                                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-1-.02-2.288-1.393-2.288-1.397 0-1.61 1.089-1.61 2.214v4.252H8.002V7.504h2.568v1.175h.035c.358-.678 1.234-1.393 2.543-1.393 2.723 0 3.228 1.791 3.228 4.121v4.931zM5.004 6.328a1.549 1.549 0 11-.001-3.097 1.549 1.549 0 01.001 3.097zm1.333 10.01H3.667V7.504h2.67v8.834zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.404C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.298V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path>
                                    </svg>
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
    renderSkills() {
        const skills = document.getElementById('skills');
        if (skills) {
            const backendSkills = this.skills.filter(skill => skill.category === 'backend');
            const databaseSkills = this.skills.filter(skill => skill.category === 'database');
            const devopsSkills = this.skills.filter(skill => skill.category === 'devops');
            const toolsSkills = this.skills.filter(skill => skill.category === 'tools');
            const frontendSkills = this.skills.filter(skill => skill.category === 'frontend');
            skills.innerHTML = `
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 reveal-fade-up">Minhas Habilidades</h2>

                    <div class="mb-12 reveal-fade-up">
                        <h3 class="text-2xl font-bold mb-6 text-blue-700">Backend <span class="text-gray-500 text-lg">(Especialidade)</span></h3>
                        <div class="flex flex-wrap gap-4">
                            ${this.renderSkillBadges(backendSkills)}
                        </div>
                    </div>

                    <div class="mb-12 reveal-fade-up">
                        <h3 class="text-2xl font-bold mb-6 text-blue-700">Bancos de Dados</h3>
                        <div class="flex flex-wrap gap-4">
                            ${this.renderSkillBadges(databaseSkills)}
                        </div>
                    </div>

                    <div class="mb-12 reveal-fade-up">
                        <h3 class="text-2xl font-bold mb-6 text-blue-700">DevOps</h3>
                        <div class="flex flex-wrap gap-4">
                            ${this.renderSkillBadges(devopsSkills)}
                        </div>
                    </div>

                    <div class="mb-12 reveal-fade-up">
                        <h3 class="text-2xl font-bold mb-6 text-blue-700">Ferramentas</h3>
                        <div class="flex flex-wrap gap-4">
                            ${this.renderSkillBadges(toolsSkills)}
                        </div>
                    </div>

                    <div class="reveal-fade-up">
                        <h3 class="text-2xl font-bold mb-6 text-blue-700">Frontend</h3>
                        <div class="flex flex-wrap gap-4">
                            ${this.renderSkillBadges(frontendSkills)}
                        </div>
                    </div>
                </div>
            `;
        }
    }
    renderSkillBadges(skills) {
        return skills.map(skill => {
            const levelClass = this.getSkillLevelClass(skill.level);
            return `
                <div class="skill-badge ${levelClass} text-white py-2 px-4 rounded-lg font-medium text-sm flex items-center shadow-md">
                    ${skill.name}
                    <div class="ml-2 flex">
                        ${this.renderSkillLevel(skill.level)}
                    </div>
                </div>
            `;
        }).join('');
    }
    getSkillLevelClass(level) {
        switch (level) {
            case 5: return 'bg-blue-700 hover:bg-blue-800';
            case 4: return 'bg-blue-600 hover:bg-blue-700';
            case 3: return 'bg-blue-500 hover:bg-blue-600';
            case 2: return 'bg-blue-400 hover:bg-blue-500';
            default: return 'bg-blue-300 hover:bg-blue-400';
        }
    }
    renderSkillLevel(level) {
        let dots = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= level) {
                dots += '<div class="w-2 h-2 rounded-full bg-white mx-0.5"></div>';
            }
            else {
                dots += '<div class="w-2 h-2 rounded-full bg-white bg-opacity-30 mx-0.5"></div>';
            }
        }
        return dots;
    }
    renderProjects() {
        const projects = document.getElementById('projects');
        if (projects) {
            projects.innerHTML = `
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 reveal-fade-up">Meus Projetos</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        ${this.projects.map(this.renderProjectCard).join('')}
                    </div>
                    <div class="text-center mt-12 reveal-fade-up">
                        <a href="https://github.com/AndersonCRodrigues" target="_blank" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center transition">
                            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.203 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clip-rule="evenodd"></path>
                            </svg>
                            Ver mais no GitHub
                        </a>
                    </div>
                </div>
            `;
        }
    }
    renderProjectCard(project, index) {
        const imageUrl = project.imageUrl || "/api/placeholder/600/300";
        const tagsHtml = project.tags.map(tag => `<span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">${tag}</span>`).join('');
        const highlightsHtml = project.highlights ?
            `<ul class="mt-4 list-disc list-inside text-gray-700">
                ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
            </ul>` : '';
        return `
            <div class="project-card bg-white rounded-lg overflow-hidden shadow-lg reveal-fade-up" style="animation-delay: ${index * 100}ms">
                <div class="h-48 bg-gray-200 flex items-center justify-center">
                    <img src="${imageUrl}" alt="${project.title}" class="w-full h-full object-cover">
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2 text-gray-800">${project.title}</h3>
                    <p class="text-gray-600 mb-4">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${tagsHtml}
                    </div>
                    ${highlightsHtml}
                    <div class="mt-6">
                        <a href="${project.githubUrl}" target="_blank" class="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-lg inline-flex items-center">
                            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.203 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clip-rule="evenodd"></path>
                            </svg>
                            Ver código
                        </a>
                        ${project.demoUrl ?
            `<a href="${project.demoUrl}" target="_blank" class="ml-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lginline-flex items-center">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                                Demo
                            </a>` : ''}
                    </div>
                </div>
            </div>
        `;
    }
    renderContact() {
        const contact = document.getElementById('contact');
        if (contact) {
            contact.innerHTML = `
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 reveal-fade-up">Entre em Contato</h2>
                    <div class="flex flex-col md:flex-row">
                        <div class="md:w-1/2 mb-8 md:mb-0 reveal-fade-up">
                            <h3 class="text-2xl font-bold mb-6">Vamos Conversar!</h3>
                            <p class="mb-6 text-gray-300">
                                Estou disponível para projetos freelance, oportunidades de emprego ou apenas para trocar ideias
                                sobre desenvolvimento backend e novas tecnologias.
                            </p>
                            <div class="space-y-4">
                                <div class="flex items-center">
                                    <div class="bg-blue-700 rounded-full p-2 mr-4">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="text-sm text-gray-400">Email</p>
                                        <a href="mailto:anderson.rodrigues@example.com" class="hover:text-blue-400">anderson.rodrigues@example.com</a>
                                    </div>
                                </div>
                                <div class="flex items-center">
                                    <div class="bg-blue-700 rounded-full p-2 mr-4">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="text-sm text-gray-400">LinkedIn</p>
                                        <a href="https://www.linkedin.com/in/anderson-costa-rodrigues/" target="_blank" class="hover:text-blue-400">anderson-costa-rodrigues</a>
                                    </div>
                                </div>
                                <div class="flex items-center">
                                    <div class="bg-blue-700 rounded-full p-2 mr-4">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="text-sm text-gray-400">GitHub</p>
                                        <a href="https://github.com/AndersonCRodrigues" target="_blank" class="hover:text-blue-400">AndersonCRodrigues</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="md:w-1/2 md:pl-12 reveal-fade-up">
                            <form id="contact-form" class="bg-gray-700 rounded-lg p-6 shadow-lg">
                                <div class="mb-4">
                                    <label for="name" class="block text-sm font-medium mb-2">Nome</label>
                                    <input type="text" id="name" class="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" required>
                                </div>
                                <div class="mb-4">
                                    <label for="email" class="block text-sm font-medium mb-2">Email</label>
                                    <input type="email" id="email" class="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" required>
                                </div>
                                <div class="mb-4">
                                    <label for="subject" class="block text-sm font-medium mb-2">Assunto</label>
                                    <input type="text" id="subject" class="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" required>
                                </div>
                                <div class="mb-6">
                                    <label for="message" class="block text-sm font-medium mb-2">Mensagem</label>
                                    <textarea id="message" rows="4" class="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" required></textarea>
                                </div>
                                <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition">Enviar Mensagem</button>
                            </form>
                        </div>
                    </div>
                </div>
            `;
            const contactForm = document.getElementById('contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    alert('Formulário enviado! Esta é uma demonstração.');
                    // Aqui seria implementada a lógica para enviar o email
                    contactForm.reset();
                });
            }
        }
    }
    setupScrollReveal() {
        const revealElements = document.querySelectorAll('.reveal-fade-up');
        const revealCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        };
        const observer = new IntersectionObserver(revealCallback, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        revealElements.forEach(el => {
            observer.observe(el);
        });
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId) {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
                            behavior: 'smooth'
                        });
                    }
                    // Fechar menu mobile se estiver aberto
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            });
        });
    }
}
// Inicializar o portfólio
const portfolio = new Portfolio();
//# sourceMappingURL=main.js.map