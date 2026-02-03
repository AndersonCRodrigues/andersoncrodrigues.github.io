# 📚 GUIA PARA COMPLETAR AS 500 EXPLICAÇÕES RESTANTES

## ✅ O QUE JÁ ESTÁ PRONTO (100 questões):
- `questoes_portugues_parte1_EXPLICACOES.json` (50 questões)
- `questoes_portugues_parte2_EXPLICACOES.json` (50 questões)
- `script.js` e `style.css` (sistema funcionando 100%)

## 🎯 FORMATO DA EXPLICAÇÃO (copie e adapte):

```json
"explicacao": "✓ [POR QUE ESTÁ CERTA]: Explicação da alternativa correta. ✗ [POR QUE ERRADAS]: Resumo dos erros das outras."
```

## 📝 TEMPLATES POR TIPO:

### PORTUGUÊS - Concordância:
```json
"explicacao": "✓ CORRETO! [Regra gramatical aplicada]. [Exemplo]. ✗ ERROS: [Por que outras alternativas estão incorretas]."
```

### SUS - Legislação:
```json
"explicacao": "✓ [Lei/Portaria/Decreto] estabelece [conteúdo correto]. ✗ ERROS: [O que está incorreto nas demais]."
```

### ESPECÍFICOS - Atuação ACS:
```json  
"explicacao": "✓ ACS deve [ação correta segundo protocolo]. ✗ ERROS: [Ações inadequadas/fora da competência]."
```

## ⚡ ATALHO RÁPIDO:

Para cada questão, adicione após o "gabarito":
```json
{
  "id": X,
  "enunciado": "...",
  "alternativas": [...],
  "gabarito": "B",
  "explicacao": "✓ RESPOSTA B: [justificativa]. ✗ ERROS: A/C/D/E [motivos]."
}
```

## 🤖 DICA PRO:
Use IA (ChatGPT/Claude) para gerar explicações:
"Crie explicação concisa (2 linhas) para esta questão: [cole questão]"

## 📊 CHECKLIST:
- [ ] Português Partes 3-4 (100 questões)
- [ ] SUS Partes 1-4 (200 questões)  
- [ ] Específicos Partes 1-4 (200 questões)

**Total: 500 explicações faltantes**
