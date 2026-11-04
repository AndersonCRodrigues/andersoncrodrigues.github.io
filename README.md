# Portfólio profissional — Anderson Costa Rodrigues

Redesign completo para **React 19 + TypeScript + Vite 7 + Tailwind CSS 4**. Foco em engenharia de software, backend, projetos reais, experiência, contato por WhatsApp, SEO e GitHub Pages.

**Site:** https://andersoncrodrigues.github.io/  
**Repositório original:** https://github.com/AndersonCRodrigues/andersoncrodrigues.github.io

## Execução local (projeto isolado)

Requer Node.js 22 LTS (ou versão compatível com Vite 7).

```bash
npm install
npm run test:source
npm run dev
```

Abra a URL mostrada pelo Vite. Para conferir a versão de produção:

```bash
npm run build
npm run preview
```

**Nota de validação:** o ambiente onde o pacote foi gerado não tinha acesso ao registry do npm; a auditoria de origem, 11 testes estruturais e verificação sintática TSX foram realizados, mas a compilação Vite completa **ainda precisa ser executada** com `npm install`. O workflow executa o teste e build antes de publicar e falha se algo der errado.

## Atualização segura do repositório GitHub existente

**Não substitua a pasta inteira do repositório por este ZIP** se quiser preservar as demonstrações antigas. Faça a migração sobre seu clone existente:

```bash
# 1. Clone, caso ainda não tenha a cópia local:
git clone https://github.com/AndersonCRodrigues/andersoncrodrigues.github.io.git

# 2. Descompacte este ZIP em uma pasta à parte e, de dentro dela:
bash APLICAR_NO_REPOSITORIO.sh /caminho/para/andersoncrodrigues.github.io

# 3. Entre no repositório e valide:
cd /caminho/para/andersoncrodrigues.github.io
npm install
npm run test:source
npm run build
npm run preview

# 4. Confira o diff, crie commit e publique:
git status
git diff --stat
git add .github/workflows/deploy.yml .gitignore README.md index.html package.json package-lock.json \
  tsconfig.json vite.config.ts public/ scripts/copy-legacy.mjs tests/portfolio.test.mjs \
  src/App.tsx src/data.ts src/index.css src/main.tsx
git diff --cached --stat
git commit -m "Redesign profissional do portfolio com React, Vite e Tailwind"
git push origin main
```

**Dica:** faça um backup antes de publicar. Esta revisão do instalador aceita mudanças em pastas não relacionadas, como `simulado/`, e só interrompe quando um arquivo que seria sobrescrito tem alterações locais. Não faça `git add -A`, pois isso incluiria o trabalho inacabado dessas pastas.

## Configuração do GitHub Pages

Em **Settings → Pages → Build and deployment → Source**, selecione **GitHub Actions**. O workflow `.github/workflows/deploy.yml` publica a pasta `dist/` em todo push para `main` e também permite execução manual.

O workflow faz `npm install`, roda 11 testes estruturais, verifica tipos com `tsc`, compila com Vite, copia as demonstrações legadas e envia os arquivos para GitHub Pages. O endereço `https://andersoncrodrigues.github.io/` usa `base: '/'` (site de usuário GitHub Pages).

### Preservação de páginas existentes

O repositório original contém páginas independentes em:

- `/audio-book-resumo/`
- `/conserv-condado/`
- `/jogo/`
- `/pokemon/`
- `/reaja_mulher/`
- `/simulado/`

O `scripts/copy-legacy.mjs` copia essas pastas originais para a pasta `dist/` **durante o build**, desde que existam na pasta do repositório. Se você executar o build apenas no ZIP isolado, elas não estarão presentes (o script registra isso sem erro). Os arquivos compilados antigos na pasta `dist/` original são ignorados e reconstruídos.

### SEO e mídias sociais

- `<title>`, descrição, canonical, Open Graph e Twitter Card definidos diretamente no HTML.
- JSON-LD `Person`, perfis sociais verificados e tecnologias.
- `public/robots.txt`, `public/sitemap.xml`, `public/og-cover.png`.
- Currículo disponível em `/curriculo-anderson-costa-rodrigues.pdf`.
- Após o deploy, cadastre a propriedade de prefixo `https://andersoncrodrigues.github.io/` no Search Console, envie `sitemap.xml` e solicite indexação.

### Conteúdo e verificabilidade

Dados foram adaptados do currículo fornecido e dos repositórios GitHub acessíveis. Os projetos `SEP`, `orders-api`, `SmartRanking-Microservice` e `tony-diniz-landing-professional` possuem links para repositórios reais. O projeto `SEP` está indicado como projeto **em desenvolvimento**, sem afirmar implantação institucional concluída. O portfólio não divulga informações de pacientes nem material de pesquisa privada.

### Formas de contato

- WhatsApp: `https://wa.me/5521973605016`
- LinkedIn: https://www.linkedin.com/in/anderson-costa-rodrigues/
- GitHub: https://github.com/AndersonCRodrigues
- E-mail: anderson.c.rodrigues@hotmail.com

O formulário antigo baseado em EmailJS foi substituído por contatos diretos (WhatsApp e e-mail), reduzindo pontos de falha e dependências externas. O PDF incluído é o currículo enviado pelo titular; o arquivo é disponibilizado publicamente após publicação.

## Estrutura

```
index.html             → SEO e ponto de entrada
src/App.tsx            → layout, navegação, cards e componentes
src/data.ts            → informações e links dos projetos
src/index.css          → import Tailwind v4 e pequenos estilos auxiliares
public/                → favicon, OG, currículo, robots, sitemap
scripts/copy-legacy.mjs→ preservação de subpáginas legadas
.github/workflows/     → publicação automática GitHub Pages
tests/                 → auditoria de fontes sem dependências
```

## Comandos

- `npm run dev` — desenvolvimento
- `npm run typecheck` — TypeScript estrito
- `npm run test:source` — testes estruturais e metadados
- `npm run build` — TypeScript, Vite, cópia de páginas antigas
- `npm run preview` — visualização local do build
