import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const read = (file) => readFileSync(join(process.cwd(), file), 'utf8');
const index = read('index.html');
const data = read('src/data.ts');
const app = read('src/App.tsx');
const workflow = read('.github/workflows/deploy.yml');
const sitemap = read('public/sitemap.xml');
const robots = read('public/robots.txt');

 test('documento tem idioma, título, descrição e canonical válidos', () => {
  for (const str of ['lang="pt-BR"', '<title>', 'name="description"', 'rel="canonical"', 'https://andersoncrodrigues.github.io/']) assert.ok(index.includes(str), str);
});
 test('metadados de redes sociais e dados estruturados existem', () => {
  for (const str of ['og:image', 'twitter:card', 'application/ld+json', 'schema.org', '/og-cover.png']) assert.ok(index.includes(str), str);
  const json = index.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  assert.equal(JSON.parse(json)['@type'], 'Person');
});
 test('sitemap, robots e canonical usam exatamente a mesma origem', () => {
  const base = 'https://andersoncrodrigues.github.io/';
  assert.ok(sitemap.includes(`<loc>${base}</loc>`));
  assert.ok(robots.includes(`Sitemap: ${base}sitemap.xml`));
  assert.ok(index.includes(`href="${base}"`));
});
 test('currículo incluído, legível e não vazio', () => {
  const p = 'public/curriculo-anderson-costa-rodrigues.pdf';
  assert.ok(existsSync(p));
  assert.ok(statSync(p).size > 1000);
  assert.equal(readFileSync(p).subarray(0,4).toString(), '%PDF');
});
 test('imagem OG existe, é PNG e dimensão nomeada no HTML', () => {
  const file = readFileSync('public/og-cover.png');
  assert.equal(file.subarray(1,4).toString(), 'PNG');
  assert.equal(file.readUInt32BE(16), 1200);
  assert.equal(file.readUInt32BE(20), 630);
});
 test('contato aponta para perfis e número consistente com currículo', () => {
  assert.ok(data.includes('github.com/AndersonCRodrigues'));
  assert.ok(data.includes('linkedin.com/in/anderson-costa-rodrigues/'));
  assert.ok(data.includes('wa.me/5521973605016'));
  assert.ok(data.includes('anderson.c.rodrigues@hotmail.com'));
});
 test('todos os quatro cards têm repositório GitHub como destino', () => {
  const links = [...data.matchAll(/href: '(https:\/\/github\.com\/AndersonCRodrigues\/[^']+)'/g)].map(m=>m[1]);
  assert.equal(links.length,4);
  assert.equal(new Set(links).size,4);
});
 test('menu móvel, filtros e atalhos de acessibilidade estão implementados', () => {
  for (const str of ['aria-expanded', 'aria-controls', 'aria-pressed', 'aria-live', 'skip-link', 'role="group"', 'rel="noopener noreferrer"']) assert.ok(app.includes(str),str);
});
 test('GitHub Actions publica dist após validação e cópia das demos', () => {
  for (const str of ['npm run test:source', 'npm run build', 'dist', 'upload-pages-artifact', 'deploy-pages']) assert.ok(workflow.includes(str),str);
  const copy = read('scripts/copy-legacy.mjs');
  for (const dir of ['audio-book-resumo','conserv-condado','jogo','pokemon','reaja_mulher','simulado']) assert.ok(copy.includes(`'${dir}'`));
});
 test('projeto usa stack Vite React Tailwind 4 e CSS local', () => {
  const packageJson = JSON.parse(read('package.json'));
  for (const dep of ['react','react-dom','lucide-react']) assert.ok(packageJson.dependencies[dep]);
  for (const dep of ['vite','typescript','tailwindcss','@tailwindcss/vite']) assert.ok(packageJson.devDependencies[dep]);
  assert.ok(read('src/index.css').startsWith('@import "tailwindcss";'));
});
 test('arquivos antigos do portfólio não são dependências do bundle atual', () => {
  for (const str of ['dist/main.js','cdn.jsdelivr.net/npm/tailwindcss@2','emailjs']) assert.ok(!index.includes(str), str);
});
