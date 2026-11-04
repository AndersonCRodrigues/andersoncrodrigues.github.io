export const links = {
  github: 'https://github.com/AndersonCRodrigues',
  linkedin: 'https://www.linkedin.com/in/anderson-costa-rodrigues/',
  whatsapp: 'https://wa.me/5521973605016?text=Ol%C3%A1%2C%20Anderson!%20Encontrei%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.',
  email: 'mailto:anderson.c.rodrigues@hotmail.com',
  curriculum: '/curriculo-anderson-costa-rodrigues.pdf',
};

export type Project = {
  num: string;
  title: string;
  category: 'Backend' | 'Full Stack';
  subtitle: string;
  description: string;
  highlights: string[];
  stack: string[];
  href: string;
  tone: 'mint' | 'blue' | 'violet' | 'amber';
  featured?: boolean;
};

export const projects: Project[] = [
  {
    num: '01',
    title: 'SEP',
    category: 'Backend',
    subtitle: 'Gestão institucional com segurança como requisito',
    description: 'Plataforma Django para o Serviço-Escola de Psicologia da Universidade de Vassouras. Perfis hierárquicos, rotinas clínicas, rastreabilidade e proteção de dados sensíveis.',
    highlights: ['6 perfis de acesso', 'LGPD desde o design', 'Testes e análise estática'],
    stack: ['Python', 'Django', 'pytest', 'Bandit', 'Ruff'],
    href: 'https://github.com/AndersonCRodrigues/SEP',
    tone: 'mint',
    featured: true,
  },
  {
    num: '02',
    title: 'Orders API',
    category: 'Backend',
    subtitle: 'API de pedidos orientada a eventos',
    description: 'Serviços em FastAPI com eventos publicados em RabbitMQ e Kafka, consumo assíncrono, persistência em MongoDB e cache com controle de idempotência via Redis.',
    highlights: ['Workers assíncronos', 'Mensageria distribuída', 'Cache e idempotência'],
    stack: ['FastAPI', 'RabbitMQ', 'Kafka', 'Redis', 'MongoDB'],
    href: 'https://github.com/AndersonCRodrigues/orders-api',
    tone: 'blue',
    featured: true,
  },
  {
    num: '03',
    title: 'Smart Ranking',
    category: 'Backend',
    subtitle: 'Microsserviços, cloud e mensageria',
    description: 'Projeto de microsserviços em NestJS com integrações AWS e RabbitMQ, voltado à organização de serviços e comunicação desacoplada.',
    highlights: ['Arquitetura modular', 'Integração em nuvem', 'Comunicação assíncrona'],
    stack: ['NestJS', 'TypeScript', 'AWS', 'RabbitMQ'],
    href: 'https://github.com/AndersonCRodrigues/SmartRanking-Microservice',
    tone: 'violet',
  },
  {
    num: '04',
    title: 'Tony Diniz Personal',
    category: 'Full Stack',
    subtitle: 'Experiência digital e presença profissional',
    description: 'Landing page responsiva para profissional de educação física, com foco em experiência de usuário, velocidade, acessibilidade, contato e SEO técnico.',
    highlights: ['Design responsivo', 'SEO e metadados', 'Deploy automatizável'],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    href: 'https://github.com/AndersonCRodrigues/tony-diniz-landing-professional',
    tone: 'amber',
  },
];

export const experience = [
  {
    company: 'Mindny Soluções em Tecnologia',
    role: 'Engenheiro de Software',
    period: 'out 2025 — abr 2026',
    description: 'Serviços backend com Node.js e Python; observabilidade em AWS com Grafana e Prometheus; testes de carga, pipelines CI/CD e integrações com LLMs.',
    technologies: ['Node.js', 'Python', 'AWS', 'Grafana', 'Prometheus', 'LangChain'],
  },
  {
    company: 'SOFTEX Recife',
    role: 'Instrutor de Python e Django REST Framework',
    period: 'ago 2025 — jan 2026',
    description: 'Formação em Python, orientação a objetos, testes automatizados e desenvolvimento de APIs com Django REST Framework, incluindo correção automatizada via GitHub Actions.',
    technologies: ['Python', 'Django REST', 'pytest', 'GitHub Actions'],
  },
  {
    company: 'Innova IA',
    role: 'Desenvolvedor Backend',
    period: 'nov 2024 — mar 2025',
    description: 'Microsserviços e APIs em Node.js e Python para automação de processos com IA, integração de modelos de linguagem e comunicação por webhooks.',
    technologies: ['Node.js', 'Python', 'APIs REST', 'OpenAI API'],
  },
  {
    company: 'Drakkon Code',
    role: 'Desenvolvedor Backend',
    period: 'set 2023 — fev 2024',
    description: 'Microsserviços NestJS com AWS (Cognito, S3, DynamoDB e Serverless) e colaboração em pipelines de integração e entrega contínuas.',
    technologies: ['NestJS', 'TypeScript', 'AWS', 'CI/CD'],
  },
];

export const expertise = [
  {
    id: '01',
    title: 'Backend & APIs',
    description: 'Aplicações confiáveis, contratos claros, integrações e organização de serviços.',
    tags: ['Python', 'FastAPI', 'Django', 'Node.js', 'NestJS', 'Express'],
  },
  {
    id: '02',
    title: 'Sistemas distribuídos',
    description: 'Arquiteturas orientadas a eventos, processamento assíncrono e desacoplamento.',
    tags: ['RabbitMQ', 'Apache Kafka', 'Redis', 'Microsserviços'],
  },
  {
    id: '03',
    title: 'Dados, cloud & qualidade',
    description: 'Persistência, segurança, automação e visibilidade operacional.',
    tags: ['PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'pytest', 'CI/CD'],
  },
  {
    id: '04',
    title: 'IA aplicada',
    description: 'Integração de modelos de linguagem e recuperação de informação em sistemas.',
    tags: ['LangChain', 'LangGraph', 'LLMs', 'RAG', 'OpenAI API'],
  },
];
