#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Gerador de 1800 questões de EXTREMA dificuldade para simulado FEMAR ACS
Banca: COSEAC/UFF - Estilo rigoroso e técnico
- 600 questões de Português (12 arquivos × 50 questões)
- 600 questões de SUS (12 arquivos × 50 questões)
- 600 questões de Conhecimentos Específicos ACS (12 arquivos × 50 questões)
"""

import json
import random
from typing import List, Dict

def distribuir_gabaritos(n_questoes: int) -> List[str]:
    """Distribui gabaritos uniformemente entre A, B, C, D, E (20% cada)"""
    letras = ['A', 'B', 'C', 'D', 'E']
    por_letra = n_questoes // 5
    resto = n_questoes % 5

    gabaritos = []
    for i, letra in enumerate(letras):
        count = por_letra + (1 if i < resto else 0)
        gabaritos.extend([letra] * count)

    random.shuffle(gabaritos)
    return gabaritos

def gerar_questao_portugues(id_questao: int, gabarito: str) -> Dict:
    """Gera uma questão complexa de Português"""

    # Banco de questões extremas de português
    questoes_base = [
        {
            "enunciado": "Em 'Sem EMBARGO DE terem sido advertidos, os funcionários reincidiram no erro'. A expressão destacada:",
            "alternativas": [
                "Está incorreta - deveria ser 'sem embargo DOS' pela contração obrigatória",
                "Está correta - locuções prepositivas não admitem contração do artigo",
                "Está incorreta - 'embargo' exige preposição 'a' e não 'de'",
                "Está correta apenas no registro coloquial, incorreta na norma culta",
                "Está incorreta - deveria ser 'não obstante' em contexto formal"
            ],
            "gabarito_original": "B",
            "explicacao": "✓ CORRETO! 'Sem embargo DE' é locução prepositiva cristalizada que NÃO contrai: sempre 'sem embargo DE os/as', nunca 'dos/das'. Mesmo padrão de 'a despeito de', 'em vez de', 'a fim de'. Locuções prepositivas fixas mantêm preposição + artigo separados. Regra: locução prep. cristalizada = sem contração."
        },
        {
            "enunciado": "Analise: 'HAJA VISTA OS problemas detectados' e 'HAJA VISTA AOS problemas'. Quanto à correção:",
            "alternativas": [
                "Primeira correta, segunda incorreta - 'haja vista' não admite preposição",
                "Ambas corretas - 'haja vista' admite estruturas variadas",
                "Primeira incorreta, segunda correta - 'vista a' exige preposição",
                "Ambas incorretas - correto seria 'hajam vistas os/aos'",
                "Primeira correta, segunda aceitável - preposição é facultativa"
            ],
            "gabarito_original": "A",
            "explicacao": "✓ 'Haja vista' aceita três estruturas: 1) 'haja vista OS problemas' (mais comum); 2) 'haja vista AOS problemas' está ERRADA (não leva preposição); 3) 'hajam vista os problemas' (menos usado mas aceito). Gramáticos divergem, mas estrutura SEM preposição é unânime. NÃO use 'haja vista A/AOS'."
        },
        {
            "enunciado": "Em 'Os servidores DETERAM-SE na análise dos documentos', o verbo está:",
            "alternativas": [
                "Incorreto - deveria ser 'detiveram-se' derivando de TER",
                "Correto - segue conjugação de DETER regular no pretérito",
                "Incorreto - 'deter' não admite pronome enclítico no pretérito",
                "Correto - variante aceita de 'detiveram-se'",
                "Incorreto - deveria ser 'se deteram' com próclise obrigatória"
            ],
            "gabarito_original": "A",
            "explicacao": "✗ ERRO! DETER deriva de TER. Pretérito de TER: tiveram → DETIVERAM (não 'deteram'). Conjugação: detive, detiveste, deteve, detivemos, detivestes, DETIVERAM. Ênclise permitida: 'detiveram-SE'. 'Deteram' seria de derivado de DAR (deram), mas DETER segue TER rigorosamente. Derivados de TER: conter, manter, reter, abster, obter."
        },
        {
            "enunciado": "Observe: 'Preferir ficar a sair' versus 'Prefiro MAIS ficar QUE sair'. A segunda construção:",
            "alternativas": [
                "É incorreta - PREFERIR rejeita 'mais' e 'que', exige apenas 'a'",
                "É correta - 'mais' e 'que' são facultativos com 'preferir'",
                "É incorreta apenas quanto a 'mais', 'que' é aceitável",
                "É correta no registro coloquial, aceita pela norma culta contemporânea",
                "É incorreta apenas quanto a 'que', 'mais' é aceitável para ênfase"
            ],
            "gabarito_original": "A",
            "explicacao": "✗ ERRO DUPLO! PREFERIR: 1) Rejeita 'MAIS' (preferir JÁ indica preferência = gostar mais); 2) Rejeita 'QUE' (exige preposição A). Correto: 'Preferir X A Y'. Erros comuns: 'preferir mais X que Y', 'preferir X do que Y', 'preferir mais X a Y'. Estrutura única: PREFERIR + OD + A + OI. Sem 'mais', sem 'que', sem 'do que'."
        },
        {
            "enunciado": "Em 'ONDE você quer CHEGAR com essa proposta?', a construção está:",
            "alternativas": [
                "Correta - 'onde' admite verbos de movimento em contextos figurados",
                "Incorreta - deveria ser 'aonde' com verbo de movimento para destino",
                "Correta - 'onde' e 'aonde' são intercambiáveis na norma culta",
                "Incorreta - deveria ser 'em que' para contextos abstratos",
                "Correta - 'onde' é adequado quando não há lugar físico concreto"
            ],
            "gabarito_original": "B",
            "explicacao": "✗ ERRO! CHEGAR A = verbo de movimento com destino = exige AONDE (A + ONDE). Correto: 'AONDE você quer chegar?'. ONDE = permanência/procedência: 'Onde está?', 'Onde mora?', 'Onde nasceu?'. AONDE = destino com movimento: 'Aonde vai?', 'Aonde chegou?'. Teste: se cabe 'para onde' = AONDE. Regra rígida na norma culta!"
        }
    ]

    # Seleciona uma questão base e ajusta o gabarito
    questao = random.choice(questoes_base).copy()
    gabarito_orig = questao['gabarito_original']

    # Se o gabarito desejado é diferente, reordena alternativas
    if gabarito != gabarito_orig:
        alternativas = questao['alternativas']
        idx_correto = ord(gabarito_orig) - ord('A')
        idx_novo = ord(gabarito) - ord('A')

        # Troca posições
        alternativas[idx_correto], alternativas[idx_novo] = alternativas[idx_novo], alternativas[idx_correto]
        questao['alternativas'] = alternativas

    questao['id'] = id_questao
    questao['gabarito'] = gabarito
    del questao['gabarito_original']

    return questao

def gerar_arquivo_portugues(parte: int, questoes_por_arquivo: int = 50):
    """Gera um arquivo JSON com 50 questões de Português"""
    inicio = (parte - 1) * questoes_por_arquivo + 1
    gabaritos = distribuir_gabaritos(questoes_por_arquivo)

    questoes = []
    for i in range(questoes_por_arquivo):
        questao = gerar_questao_portugues(inicio + i, gabaritos[i])
        questoes.append(questao)

    dados = {f"portugues_parte{parte}": questoes}

    with open(f"questoes_portugues_parte{parte}.json", 'w', encoding='utf-8') as f:
        json.dump(dados, f, ensure_ascii=False, indent=2)

    print(f"✅ Criado questoes_portugues_parte{parte}.json ({questoes_por_arquivo} questões)")

# Executar geração
if __name__ == "__main__":
    print("🚀 Iniciando geração de 600 questões de Português...")
    print("⚠️  ATENÇÃO: Este é apenas um exemplo inicial!")
    print("📝 Você precisará expandir manualmente os templates para 600 questões únicas\n")

    # Gera apenas o primeiro arquivo como exemplo
    gerar_arquivo_portugues(1, 50)

    print("\n✅ Arquivo exemplo criado!")
    print("📌 PRÓXIMOS PASSOS:")
    print("   1. Expandir banco de questões em gerar_questao_portugues()")
    print("   2. Criar gerar_questao_sus() com 600 questões de legislação")
    print("   3. Criar gerar_questao_especificos() com 600 questões técnicas ACS")
    print("   4. Executar geração completa dos 36 arquivos")
