/**
 * Preserva as demos antigas publicadas nas subpastas do repositório original.
 * Em uma instalação nova, pastas inexistentes são ignoradas.
 * NÃO copia o antigo dist/, styles.css, arquivos TypeScript antigos nem scripts obsoletos.
 */
import { cp, access } from 'node:fs/promises';
import { join } from 'node:path';

const preservedDirectories = [
  'audio-book-resumo',
  'conserv-condado',
  'jogo',
  'pokemon',
  'reaja_mulher',
  'simulado',
];

for (const dirname of preservedDirectories) {
  try {
    await access(dirname);
  } catch {
    console.log(`[legacy] ${dirname}: ausente neste workspace (ignorado)`);
    continue;
  }
  await cp(dirname, join('dist', dirname), { recursive: true, force: true });
  console.log(`[legacy] preservado: /${dirname}/`);
}
