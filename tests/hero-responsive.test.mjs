import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const app = readFileSync('src/App.tsx', 'utf8');
const css = readFileSync('src/index.css', 'utf8');

// Regression checks for the two overlapping elements reported in production.
test('badge de engenharia fica no fluxo do card, sem deslocamento absoluto', () => {
  assert.ok(!app.includes('absolute -bottom-6 -left-2'));
  const marker = 'Engineering mindset';
  const section = app.slice(app.indexOf('function ArchitectureIllustration()'), app.indexOf('function Hero()'));
  assert.ok(section.includes(marker));
  assert.ok(section.includes('relative flex items-center gap-3 border-t'));
  assert.ok(section.indexOf('quality first') < section.indexOf(marker));
  assert.ok(section.includes('overflow-hidden rounded-[23px]'));
});

test('hero usa tipografia e espaçamento proporcionais em desktop e mobile', () => {
  const hero = app.slice(app.indexOf('function Hero()'), app.indexOf('function About()'));
  assert.ok(hero.includes('4.35vw,4.35rem'));
  assert.ok(hero.includes('[text-wrap:balance]'));
  assert.ok(hero.includes('lg:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)]'));
  assert.ok(!hero.includes('min-h-[730px]'));
  assert.ok(hero.includes('text-[10px]'));
  assert.ok(css.includes('@media (max-width: 359px)'));
});

test('diagrama conserva rótulos e evita clipping da barra do título', () => {
  const diagram = app.slice(app.indexOf('function ArchitectureIllustration()'), app.indexOf('function Hero()'));
  for (const term of ['API Gateway','Services','Event Bus','Database','Workers','Engineering mindset','quality first']) assert.ok(diagram.includes(term), term);
  assert.ok(diagram.includes('min-w-0 truncate'));
  assert.ok(diagram.includes('role="img"'));
});
