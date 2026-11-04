import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MoveUpRight,
  Network,
  ServerCog,
  ShieldCheck,
  Terminal,
  X,
} from 'lucide-react';
import { expertise, experience, links, projects, type Project } from './data';

const navigation = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Experiência', href: '#experiencia' },
];

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#inicio" aria-label="Ir ao início" className="group inline-flex items-center gap-3">
      <span className="relative grid size-10 place-items-center rounded-xl border border-white/15 bg-white/[.06] font-display text-[15px] font-bold tracking-[-.08em] text-white transition-colors group-hover:border-[#63e7c3]/50">
        A<span className="absolute bottom-[10px] right-[8px] size-[5px] rounded-full bg-[#63e7c3]" />
      </span>
      {!compact && (
        <span className="font-display text-[14px] font-bold leading-[1.1] tracking-[-.02em] text-white">
          Anderson<span className="block font-medium tracking-normal text-white/55">Costa Rodrigues</span>
        </span>
      )}
    </a>
  );
}

function SectionTitle({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end">
      <div className="max-w-2xl">
        <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.19em] text-[#63e7c3]">
          <span className="font-mono text-white/35">/{index}</span>
          <span className="h-px w-6 bg-[#63e7c3]/55" />
          {eyebrow}
        </div>
        <h2 className="font-display text-[clamp(2.1rem,4vw,3.6rem)] font-semibold leading-[1.12] tracking-[-.055em] text-white">
          {title}
        </h2>
      </div>
      {description && <p className="max-w-[370px] text-[14px] leading-7 text-[#9aa9c4]">{description}</p>}
    </div>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onEscape);
    return () => document.removeEventListener('keydown', onEscape);
  }, [isOpen]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled || isOpen ? 'border-white/10 bg-[#080e1c]/95 shadow-2xl shadow-black/30 backdrop-blur-xl' : 'border-transparent bg-[#080e1c]/55 backdrop-blur-lg'}`}>
      <div className="page-container flex h-[76px] items-center justify-between gap-5">
        <Brand />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} className="text-[13px] font-medium text-[#a8b4cb] transition-colors hover:text-white" href={item.href}>{item.label}</a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <a className="flex size-10 items-center justify-center rounded-xl border border-white/10 text-white/65 transition hover:border-white/30 hover:text-white" href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
          <a href="#contato" className="inline-flex items-center gap-2 rounded-xl bg-[#63e7c3] px-4 py-3 text-[12px] font-bold text-[#071820] transition hover:bg-[#a8f4dc]">
            Vamos conversar <ArrowUpRight size={15} />
          </a>
        </div>
        <button type="button" aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={isOpen} aria-controls="mobile-menu" onClick={() => setIsOpen(!isOpen)} className="grid size-10 place-items-center rounded-lg border border-white/15 text-white lg:hidden sm:ml-1">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {isOpen && (
        <nav id="mobile-menu" className="border-t border-white/10 bg-[#080e1c] px-6 py-5 lg:hidden" aria-label="Menu móvel">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-3 text-sm font-semibold text-[#d8e2f5] transition hover:bg-white/5">{item.label}</a>)}
            <a href="#contato" onClick={() => setIsOpen(false)} className="mt-2 rounded-lg bg-[#63e7c3] px-3 py-3 text-center text-sm font-bold text-[#071820]">Contato</a>
          </div>
        </nav>
      )}
    </header>
  );
}

function ArchitectureIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[510px] select-none" role="img" aria-label="Diagrama ilustrativo de uma arquitetura backend com API, mensageria, workers e dados">
      <div className="absolute -inset-8 rounded-full bg-[#4bd9b4]/[.055] blur-3xl" />
      <div className="relative overflow-hidden rounded-[23px] border border-white/[.14] bg-[#0b1425]/90 shadow-[0_35px_95px_rgba(0,0,0,.46)]">
        <div className="flex h-12 items-center justify-between gap-2 border-b border-white/[.09] bg-white/[.025] px-4 sm:px-5">
          <div className="flex items-center gap-2"><span className="size-[7px] rounded-full bg-[#fa736b]"/><span className="size-[7px] rounded-full bg-[#f7c35c]"/><span className="size-[7px] rounded-full bg-[#63e7c3]"/></div>
          <span className="min-w-0 truncate font-mono text-[9px] tracking-[.03em] text-white/45 sm:text-[10px]">architecture / system-overview</span>
          <Braces size={14} className="text-white/30" />
        </div>
        <div className="relative p-4 sm:p-7">
          <div className="absolute inset-0 diagram-grid opacity-[.32]" />
          <div className="relative mb-7 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[11px] font-medium text-[#b4c4db]"><span className="size-1.5 animate-pulse rounded-full bg-[#63e7c3]"/> VISÃO DE ARQUITETURA</div>
            <span className="rounded-md border border-[#63e7c3]/25 bg-[#63e7c3]/[.07] px-2 py-1 font-mono text-[9px] tracking-wider text-[#63e7c3]">EVENT-DRIVEN</span>
          </div>
          <div className="relative mx-auto flex max-w-[375px] flex-col items-center">
            <div className="flex h-[51px] w-[175px] items-center justify-center gap-3 rounded-xl border border-[#63e7c3]/40 bg-[#15352f] shadow-[0_0_30px_rgba(74,222,178,.05)]">
              <Code2 size={19} className="text-[#63e7c3]" /> <span className="font-mono text-xs font-semibold text-[#e3fff5]">API Gateway</span>
            </div>
            <div className="flex h-9 flex-col items-center"><div className="h-6 w-px bg-gradient-to-b from-[#63e7c3]/80 to-[#63e7c3]/30"/><ChevronRight size={14} className="-mt-1 rotate-90 text-[#63e7c3]"/></div>
            <div className="grid w-full grid-cols-[1fr_35px_1fr] items-center gap-0">
              <div className="flex h-[73px] flex-col items-center justify-center gap-1.5 rounded-xl border border-[#759cfa]/35 bg-[#1a2944]"><ServerCog className="text-[#9cbaff]" size={19}/><span className="font-mono text-[11px] font-semibold text-[#e3ecff]">Services</span></div>
              <div className="h-px bg-white/30"/>
              <div className="flex h-[73px] flex-col items-center justify-center gap-1.5 rounded-xl border border-[#c3adff]/30 bg-[#242341]"><Network className="text-[#c3adff]" size={19}/><span className="font-mono text-[11px] font-semibold text-[#eae4ff]">Event Bus</span></div>
            </div>
            <div className="grid w-full grid-cols-[1fr_35px_1fr]"><div className="mx-auto h-8 w-px bg-white/30"/><div/><div className="mx-auto h-8 w-px bg-white/30"/></div>
            <div className="grid w-full grid-cols-[1fr_35px_1fr] items-center gap-0">
              <div className="flex h-[73px] flex-col items-center justify-center gap-1.5 rounded-xl border border-white/[.15] bg-[#121f32]"><Database className="text-[#90dbca]" size={19}/><span className="font-mono text-[11px] font-semibold text-[#dae9ef]">Database</span></div>
              <div className="h-px bg-white/30"/>
              <div className="flex h-[73px] flex-col items-center justify-center gap-1.5 rounded-xl border border-white/[.15] bg-[#121f32]"><Layers3 className="text-[#f7c88b]" size={19}/><span className="font-mono text-[11px] font-semibold text-[#dae9ef]">Workers</span></div>
            </div>
          </div>
          <div className="relative mt-7 flex flex-wrap items-center justify-between gap-2 border-t border-white/[.08] pt-4 font-mono text-[10px] text-[#8293ae]">
            <span><span className="text-[#63e7c3]">$</span> design --for-resilience</span>
            <span className="flex items-center gap-1.5 text-[#9fc7bf]"><Check size={13}/> quality first</span>
          </div>
        </div>
      <div className="relative flex items-center gap-3 border-t border-white/[.09] bg-[#132136]/75 px-4 py-3.5 sm:px-7">
        <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-[#63e7c3]/[.13] text-[#63e7c3]"><ShieldCheck size={19}/></span>
        <div className="min-w-0">
          <div className="text-[11px] font-bold text-white">Engineering mindset</div>
          <div className="mt-0.5 text-[10px] leading-relaxed text-[#a0b2c8]">segurança · testes · observabilidade</div>
        </div>
      </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden border-b border-white/[.07] pt-[76px]">
      <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-[.14]" />
      <div className="pointer-events-none absolute left-[-20%] top-[-35%] size-[650px] rounded-full bg-[#326ebc]/[.11] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-40%] right-[-18%] size-[600px] rounded-full bg-[#37c7aa]/[.065] blur-[130px]" />
      <div className="page-container relative grid grid-cols-1 items-center gap-12 pb-16 pt-12 sm:pb-20 sm:pt-16 lg:min-h-[650px] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] lg:gap-14 lg:py-20 xl:py-24">
        <div>
          <div className="mb-6 inline-flex max-w-full items-center gap-2.5 rounded-full border border-[#63e7c3]/25 bg-[#63e7c3]/[.065] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[.07em] text-[#8df2d3] sm:text-[11px] sm:tracking-[.13em]">
            <span className="relative flex size-2 shrink-0"><span className="absolute inline-flex size-full animate-ping rounded-full bg-[#63e7c3] opacity-35"/><span className="relative inline-flex size-2 rounded-full bg-[#63e7c3]"/></span>
            Aberto a oportunidades em tecnologia
          </div>
          <p className="mb-4 font-mono text-[10px] font-semibold leading-relaxed tracking-[.045em] text-[#a4b3cb] sm:text-xs sm:tracking-[.1em]">OLÁ, EU SOU ANDERSON COSTA RODRIGUES <span className="ml-1 text-[#63e7c3]">_</span></p>
          <h1 className="max-w-[660px] font-display text-[clamp(2.8rem,4.35vw,4.35rem)] font-bold leading-[1.09] tracking-[-.065em] text-[#f5f8ff] [text-wrap:balance]">
            Engenharia de <span className="text-[#63e7c3]">backend</span> para sistemas que <span className="text-[#a1b4d5]">escalam.</span>
          </h1>
          <p className="mt-6 max-w-[560px] text-[14px] leading-[1.8] text-[#b1c1d7] sm:text-[15px]">
            Desenvolvo APIs, microsserviços e sistemas orientados a eventos com <strong className="font-medium text-[#e0eaf8]">Python e Node.js</strong>. Segurança, qualidade e arquitetura não são detalhes — fazem parte da solução.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#projetos" className="group inline-flex items-center gap-2 rounded-xl bg-[#63e7c3] px-5 py-3.5 text-[13px] font-bold text-[#071820] transition hover:bg-[#a4f4dc]">Conhecer projetos <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></a>
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/[.18] bg-white/[.045] px-5 py-3.5 text-[13px] font-semibold text-white transition hover:border-white/35 hover:bg-white/[.09]"><MessageCircle size={17}/> Falar no WhatsApp</a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] text-[#a1b0c6]">
            <span className="inline-flex items-center gap-1.5"><MapPin size={14} className="text-[#7a93b1]"/> Maricá, Rio de Janeiro</span>
            <a href={links.curriculum} download className="inline-flex items-center gap-1.5 font-semibold text-[#d1dfed] transition hover:text-[#63e7c3]"><Download size={14}/> Baixar currículo <ArrowRight size={12}/></a>
          </div>
        </div>
        <div className="min-w-0 lg:pl-2"><ArchitectureIllustration/></div>
      </div>
      <div className="relative border-t border-white/[.075] bg-[#0b1322]/70">
        <div className="page-container flex flex-wrap items-center justify-between gap-x-7 gap-y-4 py-5">
          <span className="text-[11px] font-semibold uppercase tracking-[.17em] text-[#7787a1]">Trabalho com</span>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 font-display text-[13px] font-semibold text-[#bac6d9] sm:gap-x-12">
            <span>Python</span><span>Node.js</span><span>FastAPI</span><span>NestJS</span><span>RabbitMQ</span><span>AWS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="section-padding relative overflow-hidden">
      <div className="page-container">
        <SectionTitle index="01" eyebrow="Quem sou" title="Software bem construído nasce de boas decisões." />
        <div className="grid gap-10 lg:grid-cols-[1.12fr_.88fr] lg:gap-20">
          <div>
            <p className="max-w-[730px] font-display text-[clamp(1.2rem,2.25vw,1.8rem)] font-medium leading-[1.6] tracking-[-.028em] text-[#e4edfa]">
              Sou um engenheiro de software focado em transformar requisitos complexos em soluções backend <span className="text-[#63e7c3]">claras, seguras e sustentáveis.</span>
            </p>
            <div className="mt-7 max-w-[650px] space-y-4 text-[14px] leading-[1.95] text-[#9aaac2]">
              <p>Minha experiência passa pelo desenvolvimento de APIs REST, integração entre serviços, processamento assíncrono, observabilidade, testes e pipelines de entrega. Trabalho principalmente com ecossistemas Python e Node.js.</p>
              <p>Também tenho experiência como instrutor de Python e Django REST Framework e desenvolvo projetos com IA generativa quando ela resolve um problema concreto — sem perder de vista o fundamento da engenharia.</p>
            </div>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#63e7c3] transition hover:gap-3">Conheça meu perfil no LinkedIn <ArrowUpRight size={17}/></a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="flex min-h-[160px] flex-col justify-between rounded-2xl border border-white/[.09] bg-[#121c2d] p-6"><BriefcaseBusiness className="text-[#63e7c3]" size={22}/><div><p className="font-display text-[30px] font-semibold tracking-[-.05em] text-white">2023<span className="text-[#63e7c3]">+</span></p><p className="mt-1 text-[12px] text-[#9daac0]">Experiência profissional desde</p></div></div>
            <div className="flex min-h-[160px] flex-col justify-between rounded-2xl border border-white/[.09] bg-[#121c2d] p-6"><Terminal className="text-[#8eb9ff]" size={22}/><div><p className="font-display text-[30px] font-semibold tracking-[-.05em] text-white">4<span className="text-[#8eb9ff]">+</span></p><p className="mt-1 text-[12px] text-[#9daac0]">Projetos destacados</p></div></div>
            <div className="flex min-h-[160px] flex-col justify-between rounded-2xl border border-white/[.09] bg-[#121c2d] p-6 sm:col-span-2"><GraduationCap className="text-[#d4b5ff]" size={23}/><div><p className="font-display text-lg font-semibold tracking-[-.03em] text-white">Engenharia de Software</p><p className="mt-2 text-[12px] leading-6 text-[#9daac0]">Bacharelado em andamento · Universidade de Vassouras<br/>Formação Full Stack (1.500 horas) · Trybe</p></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  const icons = [Code2, Network, Cloud, Braces];
  return (
    <section id="especialidades" className="section-padding relative border-y border-white/[.07] bg-[#0b1424]">
      <div className="page-container">
        <SectionTitle index="02" eyebrow="Como eu construo" title="Competências além do código." description="Tecnologias escolhidas pelo problema, com foco em manutenibilidade e evolução contínua dos sistemas." />
        <div className="grid gap-4 md:grid-cols-2">
          {expertise.map((item, i) => {
            const Icon = icons[i];
            return (
              <article key={item.id} className="group rounded-[20px] border border-white/[.09] bg-[#101b2d] p-6 transition-colors duration-300 hover:border-[#63e7c3]/35 hover:bg-[#132237] sm:p-8">
                <div className="mb-9 flex items-start justify-between"><span className="grid size-12 place-items-center rounded-xl border border-[#63e7c3]/20 bg-[#63e7c3]/[.07] text-[#63e7c3]"><Icon size={23}/></span><span className="font-mono text-xs text-white/25">/{item.id}</span></div>
                <h3 className="font-display text-xl font-semibold tracking-[-.04em] text-white">{item.title}</h3>
                <p className="mt-3 max-w-[425px] text-[13px] leading-7 text-[#94a5bf]">{item.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">{item.tags.map(tag => <span key={tag} className="rounded-md border border-white/[.09] bg-white/[.035] px-2.5 py-1.5 font-mono text-[10px] font-semibold text-[#b5c4da]">{tag}</span>)}</div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  const tones = {
    mint: { border: 'border-[#63e7c3]/25', panel: 'bg-[#13302c]', ink: 'text-[#63e7c3]', accent: '#63e7c3' },
    blue: { border: 'border-[#85b9ff]/25', panel: 'bg-[#172845]', ink: 'text-[#9fc7ff]', accent: '#9fc7ff' },
    violet: { border: 'border-[#b8a7ff]/25', panel: 'bg-[#242043]', ink: 'text-[#c7b7ff]', accent: '#c7b7ff' },
    amber: { border: 'border-[#efbb82]/25', panel: 'bg-[#32261c]', ink: 'text-[#f4c48e]', accent: '#f4c48e' },
  } as const;
  const tone = tones[project.tone];
  const nodes = project.num === '01' ? ['Django', 'RBAC', 'Audit'] : project.num === '02' ? ['API', 'Queue', 'Worker'] : project.num === '03' ? ['NestJS', 'AWS', 'AMQP'] : ['UX', 'React', 'SEO'];
  return (
    <div aria-hidden="true" className={`relative flex h-[195px] items-center justify-center overflow-hidden rounded-t-[19px] border-b border-white/[.075] ${tone.panel}`}>
      <div className="absolute inset-0 project-grid opacity-35"/>
      <div className="absolute -right-16 -top-20 size-56 rounded-full border border-white/[.06]"/><div className="absolute -right-7 -top-6 size-40 rounded-full border border-white/[.08]"/>
      <div className="absolute left-5 top-5 font-mono text-[10px] tracking-[.15em] text-white/35">// SYSTEM {project.num}</div>
      <div className="relative flex items-center gap-2.5 sm:gap-3">
        {nodes.map((node, i) => (
          <div key={node} className="flex items-center gap-2.5 sm:gap-3">
            <div className={`grid h-14 min-w-[73px] place-items-center rounded-xl border ${tone.border} bg-[#080e19]/70 px-3 shadow-xl sm:min-w-[85px]`}>
              <span className={`font-mono text-[11px] font-bold ${tone.ink}`}>{node}</span>
            </div>
            {i < nodes.length - 1 && <span className={`h-px w-3 sm:w-5`} style={{background: tone.accent, opacity: .58}}/>}
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 right-5 font-mono text-[9px] tracking-[.1em] text-white/25">ARCH / {project.category.toUpperCase()}</div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-white/[.1] bg-[#111c2d] transition-all duration-300 hover:-translate-y-1 hover:border-[#63e7c3]/30 hover:shadow-[0_20px_70px_rgba(0,0,0,.2)]">
      <ProjectVisual project={project}/>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="mb-4 flex items-center justify-between gap-4"><span className="font-mono text-[10px] font-bold uppercase tracking-[.16em] text-[#63e7c3]">{project.category}</span><span className="font-mono text-[11px] text-[#62738e]">{project.num} / 04</span></div>
        <h3 className="font-display text-[24px] font-bold tracking-[-.05em] text-white">{project.title}</h3>
        <p className="mt-1 text-[12px] font-semibold text-[#b7c7dc]">{project.subtitle}</p>
        <p className="mt-5 flex-1 text-[13px] leading-[1.85] text-[#97a8c1]">{project.description}</p>
        <ul className="mt-5 grid gap-2">{project.highlights.map(item => <li key={item} className="flex items-center gap-2 text-[11px] text-[#b5c4d8]"><Check className="shrink-0 text-[#63e7c3]" size={13}/>{item}</li>)}</ul>
        <div className="mt-6 flex flex-wrap gap-1.5">{project.stack.map(tag => <span key={tag} className="rounded-md bg-white/[.055] px-2.5 py-1.5 font-mono text-[10px] text-[#a9bbd2]">{tag}</span>)}</div>
        <a href={project.href} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center justify-between border-t border-white/[.09] pt-5 text-[12px] font-bold text-white transition-colors hover:text-[#63e7c3]">
          <span className="flex items-center gap-2"><Github size={16}/> Ver código no GitHub</span><ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
        </a>
      </div>
    </article>
  );
}

function Projects() {
  const [filter, setFilter] = useState<'Todos' | Project['category']>('Todos');
  const list = projects.filter(p => filter === 'Todos' || p.category === filter);
  return (
    <section id="projetos" className="section-padding">
      <div className="page-container">
        <SectionTitle index="03" eyebrow="Portfólio selecionado" title="Projetos, não apenas promessas." description="Implementações reais que mostram decisões de arquitetura, qualidade técnica e capacidade de entregar soluções completas." />
        <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filtrar projetos">
            {(['Todos', 'Backend', 'Full Stack'] as const).map(item => <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)} className={`rounded-lg border px-4 py-2.5 text-[12px] font-semibold transition-colors ${filter === item ? 'border-[#63e7c3]/60 bg-[#63e7c3]/[.11] text-[#92f3d6]' : 'border-white/[.11] bg-white/[.035] text-[#a6b5ca] hover:border-white/25 hover:text-white'}`}>{item}</button>)}
          </div>
          <span aria-live="polite" className="font-mono text-[11px] text-[#667892]">{list.length.toString().padStart(2, '0')} PROJETOS</span>
        </div>
        <div className="grid items-stretch gap-5 md:grid-cols-2">{list.map(project => <ProjectCard key={project.num} project={project}/>)}</div>
        <div className="mt-9 flex justify-center"><a href={links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[.04] px-6 py-3.5 text-[13px] font-semibold text-white transition hover:border-[#63e7c3]/40 hover:bg-white/[.07]">Explorar todos os repositórios <ExternalLink size={15}/></a></div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experiencia" className="section-padding border-y border-white/[.07] bg-[#0b1424]">
      <div className="page-container">
        <SectionTitle index="04" eyebrow="Trajetória profissional" title="Experiência colocada em prática." description="Uma trajetória de desenvolvimento backend, ensino técnico e integração de sistemas com tecnologias de produção." />
        <div className="relative grid gap-0 lg:grid-cols-[.34fr_.66fr] lg:gap-16">
          <div className="mb-8 hidden lg:block"><p className="max-w-[260px] text-[14px] leading-8 text-[#879ab5]">Do desenho de serviços à observabilidade em produção: tecnologia aplicada com responsabilidade e documentação.</p><a href={links.curriculum} download className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold text-[#63e7c3]">Currículo completo <ArrowUpRight size={15}/></a></div>
          <div className="relative border-l border-white/10 pl-6 sm:pl-10">
            {experience.map((item, i) => (
              <article key={item.company} className={`relative pb-10 ${i === experience.length - 1 ? 'pb-0' : ''}`}>
                <span className="absolute -left-[31px] top-1.5 size-3 rounded-full border-[3px] border-[#0b1424] bg-[#63e7c3] shadow-[0_0_0_1px_rgba(99,231,195,.35)] sm:-left-[47px]" />
                <div className="mb-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-2"><span className="text-[12px] font-bold text-[#63e7c3]">{item.company}</span><time className="font-mono text-[10px] text-[#8496b0]">{item.period}</time></div>
                <h3 className="font-display text-lg font-semibold tracking-[-.035em] text-[#f0f5ff]">{item.role}</h3>
                <p className="mt-3 max-w-[660px] text-[13px] leading-[1.95] text-[#99abc4]">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">{item.technologies.map(tag => <span key={tag} className="rounded border border-white/[.07] bg-white/[.04] px-2.5 py-1.5 font-mono text-[10px] text-[#92a8c2]">{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Principles() {
  const items = [
    { icon: ShieldCheck, title: 'Segurança por design', description: 'Proteção de dados, validação, autenticação e revisão desde as decisões iniciais.' },
    { icon: Check, title: 'Qualidade verificável', description: 'Testes, revisão estática, padrões claros e código que pode evoluir.' },
    { icon: MoveUpRight, title: 'Escalabilidade consciente', description: 'Arquitetura alinhada ao cenário de uso, não à complexidade pela complexidade.' },
  ];
  return (
    <section className="section-padding border-b border-white/[.07]">
      <div className="page-container">
        <SectionTitle index="05" eyebrow="Meu jeito de trabalhar" title="Sólido por dentro. Simples por fora." />
        <div className="grid gap-4 md:grid-cols-3">
          {items.map(item => { const Icon = item.icon; return <div key={item.title} className="rounded-2xl border border-white/[.09] bg-[#101a2a] p-6 sm:p-7"><Icon size={21} className="mb-6 text-[#63e7c3]"/><h3 className="font-display text-[17px] font-semibold text-white">{item.title}</h3><p className="mt-3 text-[13px] leading-7 text-[#93a5bf]">{item.description}</p></div>; })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute bottom-[-260px] left-1/2 size-[650px] -translate-x-1/2 rounded-full bg-[#53c6aa]/[.08] blur-[140px]" />
      <div className="page-container relative">
        <div className="relative overflow-hidden rounded-[24px] border border-[#63e7c3]/25 bg-[#142536] px-7 py-12 sm:px-12 sm:py-16 lg:px-[76px] lg:py-20">
          <div className="absolute -right-24 -top-36 size-[390px] rounded-full border border-[#63e7c3]/10"/><div className="absolute -right-12 -top-20 size-[310px] rounded-full border border-[#63e7c3]/10"/>
          <div className="relative max-w-[740px]">
            <div className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.17em] text-[#63e7c3]"><span className="size-2 rounded-full bg-[#63e7c3]"/> VAMOS CONSTRUIR ALGO?</div>
            <h2 className="font-display text-[clamp(2.5rem,5.5vw,5rem)] font-bold leading-[1.1] tracking-[-.067em] text-[#f5f8ff]">O próximo desafio começa com uma <span className="text-[#63e7c3]">boa conversa.</span></h2>
            <p className="mt-6 max-w-[540px] text-[14px] leading-8 text-[#b1c2d5]">Tem uma oportunidade, um projeto ou um problema técnico interessante? Estou disponível para conversar sobre como posso contribuir.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#63e7c3] px-5 py-3.5 text-[13px] font-bold text-[#07201e] transition hover:bg-[#a4f4dc]"><MessageCircle size={18}/> Conversar no WhatsApp <ArrowUpRight size={15}/></a>
              <a href={links.email} className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[.045] px-5 py-3.5 text-[13px] font-semibold text-white transition hover:border-white/35 hover:bg-white/[.08]"><Mail size={17}/> Enviar e-mail</a>
            </div>
          </div>
          <div className="relative mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/[.14] pt-7 text-[12px] text-[#a9bdd1]">
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-white"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={13}/></a>
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-white"><Github size={16}/> GitHub <ArrowUpRight size={13}/></a>
            <a href={links.curriculum} download className="inline-flex items-center gap-2 transition hover:text-white"><FileText size={16}/> Currículo PDF <ArrowDown size={13}/></a>
            <span className="inline-flex items-center gap-2"><MapPin size={16}/> Maricá · RJ · Brasil</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('anderson.c.rodrigues@hotmail.com');
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = links.email;
    }
  };
  return (
    <footer className="border-t border-white/[.08] bg-[#090f1b]">
      <div className="page-container flex flex-col gap-8 py-9 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3"><Brand/><p className="text-[11px] text-[#6f819b]">© {new Date().getFullYear()} Anderson Costa Rodrigues. Feito com propósito.</p></div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] text-[#9aaac2]">
          <button type="button" onClick={copyEmail} className="inline-flex items-center gap-1.5 transition-colors hover:text-white" title="Copiar endereço de e-mail">{copied ? <Check size={14} className="text-[#63e7c3]"/> : <Mail size={14}/>} {copied ? 'E-mail copiado' : 'Copiar e-mail'}</button>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">GitHub</a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">LinkedIn</a>
          <a href="#inicio" className="inline-flex items-center gap-1.5 transition-colors hover:text-[#63e7c3]">Voltar ao topo <ChevronRight size={13} className="-rotate-90"/></a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header/>
      <main id="conteudo">
        <Hero/>
        <About/>
        <Expertise/>
        <Projects/>
        <Experience/>
        <Principles/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}
