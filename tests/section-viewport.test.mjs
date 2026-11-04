import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync('src/index.css', 'utf8');
const app = readFileSync('src/App.tsx', 'utf8');

test('seções usam altura mínima de viewport e nunca altura fixa', () => {
  assert.match(css, /min-height: calc\(100svh - 76px\)/);
  assert.doesNotMatch(css, /(^|\n)\s*height:\s*calc\(100svh - 76px\)/);
  assert.match(css, /justify-content: center/);
});
test('links do menu têm destinos existentes e cabeçalho não cobre âncoras', () => {
  for (const id of ['sobre', 'especialidades', 'projetos', 'experiencia', 'contato']) {
    assert.ok(app.includes(`id="${id}"`), id);
  }
  assert.match(css, /scroll-margin-top: 76px/);
});
test('mobile mantém leitura contínua sem criar seções artificiais de tela cheia', () => {
  assert.match(css, /@media \(max-width: 767px\)/);
  assert.match(css, /min-height: auto/);
});
test('CSS mantém as correções anteriores do hero e do diagrama', () => {
  assert.match(css, /#inicio h1/);
  assert.match(css, /@media \(max-width: 359px\)/);
  assert.ok(app.includes('Engineering mindset'));
});
