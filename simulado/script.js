// ========================================
// VARIÁVEIS GLOBAIS
// ========================================
let todasQuestoes = {
    portugues: [],
    sus: [],
    especificos: []
};

let simulado = {
    questoes: [],
    respostas: {},
    indiceAtual: 0,
    tempoInicio: null,
    tempoDecorrido: 0,
    intervaloTimer: null
};

// ========================================
// CARREGAR QUESTÕES DOS ARQUIVOS JSON
// ========================================
async function carregarQuestoes() {
    try {
        // Carregar todas as partes
        const [port1, port2, sus1, sus2, esp1, esp2] = await Promise.all([
            fetch('questoes_portugues.json').then(r => r.json()),
            fetch('questoes_portugues_parte2.json').then(r => r.json()),
            fetch('questoes_sus_parte1.json').then(r => r.json()),
            fetch('questoes_sus_parte2.json').then(r => r.json()),
            fetch('questoes_especificos_parte1.json').then(r => r.json()),
            fetch('questoes_especificos_parte2.json').then(r => r.json())
        ]);

        // Unificar questões
        todasQuestoes.portugues = [
            ...port1.portugues_parte1,
            ...port2.portugues_parte2
        ];

        todasQuestoes.sus = [
            ...sus1.sus_parte1,
            ...sus2.sus_parte2
        ];

        todasQuestoes.especificos = [
            ...esp1.especificos_parte1,
            ...esp2.especificos_parte2
        ];

        console.log('✅ Questões carregadas:', {
            portugues: todasQuestoes.portugues.length,
            sus: todasQuestoes.sus.length,
            especificos: todasQuestoes.especificos.length
        });

    } catch (error) {
        console.error('❌ Erro ao carregar questões:', error);
        alert('Erro ao carregar as questões. Verifique os arquivos JSON.');
    }
}

// ========================================
// FUNÇÕES AUXILIARES
// ========================================

// Embaralhar array (Fisher-Yates)
function embaralhar(array) {
    const novo = [...array];
    for (let i = novo.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [novo[i], novo[j]] = [novo[j], novo[i]];
    }
    return novo;
}

// Sortear N questões de um array
function sortearQuestoes(questoes, quantidade) {
    const embaralhadas = embaralhar(questoes);
    return embaralhadas.slice(0, quantidade);
}

// Embaralhar alternativas de uma questão
function embaralharAlternativas(questao) {
    const letras = ['A', 'B', 'C', 'D', 'E'];
    const gabaritoOriginal = questao.gabarito;
    const indiceGabarito = letras.indexOf(gabaritoOriginal);

    // Criar array de alternativas com suas letras originais
    const alternativasComIndice = questao.alternativas.map((alt, idx) => ({
        texto: alt,
        letraOriginal: letras[idx],
        ehCorreta: letras[idx] === gabaritoOriginal
    }));

    // Embaralhar
    const embaralhadas = embaralhar(alternativasComIndice);

    // Encontrar nova posição da resposta correta
    const novoIndiceCorreto = embaralhadas.findIndex(alt => alt.ehCorreta);
    const novoGabarito = letras[novoIndiceCorreto];

    return {
        ...questao,
        alternativas: embaralhadas.map(alt => alt.texto),
        gabaritoEmbaralhado: novoGabarito,
        gabaritoOriginal: gabaritoOriginal
    };
}

// Formatar tempo (segundos para MM:SS)
function formatarTempo(segundos) {
    const mins = Math.floor(segundos / 60);
    const secs = segundos % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// ========================================
// INICIAR SIMULADO
// ========================================
function iniciarSimulado() {
    // Sortear 10 questões de cada tópico
    const portSorteadas = sortearQuestoes(todasQuestoes.portugues, 10);
    const susSorteadas = sortearQuestoes(todasQuestoes.sus, 10);
    const espSorteadas = sortearQuestoes(todasQuestoes.especificos, 10);

    // Adicionar tipo/tópico a cada questão
    portSorteadas.forEach(q => q.topico = 'Português');
    susSorteadas.forEach(q => q.topico = 'SUS');
    espSorteadas.forEach(q => q.topico = 'Específicos');

    // Embaralhar alternativas de todas questões
    const todasEmbaralhadas = [
        ...portSorteadas,
        ...susSorteadas,
        ...espSorteadas
    ].map(q => embaralharAlternativas(q));

    // Embaralhar ordem das questões
    simulado.questoes = embaralhar(todasEmbaralhadas);
    simulado.respostas = {};
    simulado.indiceAtual = 0;
    simulado.tempoInicio = Date.now();

    // Mudar tela
    document.getElementById('telaInicial').classList.add('hidden');
    document.getElementById('telaSimulado').classList.remove('hidden');

    // Atualizar total de questões
    document.getElementById('totalQuestoes').textContent = simulado.questoes.length;

    // Iniciar timer
    iniciarTimer();

    // Mostrar primeira questão
    mostrarQuestao();
}

// ========================================
// TIMER
// ========================================
function iniciarTimer() {
    simulado.intervaloTimer = setInterval(() => {
        simulado.tempoDecorrido = Math.floor((Date.now() - simulado.tempoInicio) / 1000);
        document.getElementById('timer').textContent = `⏱️ ${formatarTempo(simulado.tempoDecorrido)}`;
    }, 1000);
}

function pararTimer() {
    if (simulado.intervaloTimer) {
        clearInterval(simulado.intervaloTimer);
    }
}

// ========================================
// MOSTRAR QUESTÃO
// ========================================
function mostrarQuestao() {
    const questao = simulado.questoes[simulado.indiceAtual];
    const letras = ['A', 'B', 'C', 'D', 'E'];

    // Atualizar header
    document.getElementById('questaoAtual').textContent = simulado.indiceAtual + 1;
    document.getElementById('questaoTopico').textContent = `📚 ${questao.topico}`;
    document.getElementById('questaoEnunciado').textContent = questao.enunciado;

    // Atualizar barra de progresso
    const progresso = ((simulado.indiceAtual + 1) / simulado.questoes.length) * 100;
    document.getElementById('progressFill').style.width = `${progresso}%`;

    // Renderizar alternativas
    const container = document.getElementById('alternativasContainer');
    container.innerHTML = '';

    questao.alternativas.forEach((alternativa, index) => {
        const div = document.createElement('div');
        div.className = 'alternativa';
        div.setAttribute('data-letra', letras[index]);
        div.onclick = () => selecionarAlternativa(letras[index]);

        div.innerHTML = `
            <div class="letra">${letras[index]}</div>
            <div class="texto">${alternativa}</div>
        `;

        // Marcar se já foi respondida
        const respostaAnterior = simulado.respostas[simulado.indiceAtual];
        if (respostaAnterior === letras[index]) {
            div.classList.add('selecionada');
        }

        container.appendChild(div);
    });

    // Atualizar botões de navegação
    document.getElementById('btnAnterior').disabled = simulado.indiceAtual === 0;

    const isUltima = simulado.indiceAtual === simulado.questoes.length - 1;
    document.getElementById('btnProxima').classList.toggle('hidden', isUltima);
    document.getElementById('btnFinalizar').classList.toggle('hidden', !isUltima);
}

// ========================================
// SELECIONAR ALTERNATIVA
// ========================================
function selecionarAlternativa(letra) {
    // Remover seleção anterior
    document.querySelectorAll('.alternativa').forEach(alt => {
        alt.classList.remove('selecionada');
    });

    // Adicionar nova seleção
    const alternativa = document.querySelector(`[data-letra="${letra}"]`);
    alternativa.classList.add('selecionada');

    // Salvar resposta
    simulado.respostas[simulado.indiceAtual] = letra;
}

// ========================================
// NAVEGAÇÃO
// ========================================
function proximaQuestao() {
    if (simulado.indiceAtual < simulado.questoes.length - 1) {
        simulado.indiceAtual++;
        mostrarQuestao();
    }
}

function questaoAnterior() {
    if (simulado.indiceAtual > 0) {
        simulado.indiceAtual--;
        mostrarQuestao();
    }
}

// ========================================
// FINALIZAR SIMULADO
// ========================================
function finalizarSimulado() {
    // Verificar se respondeu todas
    const naoRespondidas = simulado.questoes.length - Object.keys(simulado.respostas).length;

    if (naoRespondidas > 0) {
        const confirma = confirm(`Você ainda tem ${naoRespondidas} questão(ões) não respondida(s). Deseja finalizar mesmo assim?`);
        if (!confirma) return;
    }

    // Parar timer
    pararTimer();

    // Calcular resultado
    calcularResultado();

    // Mostrar tela de resultado
    document.getElementById('telaSimulado').classList.add('hidden');
    document.getElementById('telaResultado').classList.remove('hidden');
}

// ========================================
// CALCULAR RESULTADO
// ========================================
function calcularResultado() {
    let acertos = 0;
    let erros = 0;
    let acertosPort = 0;
    let acertosSus = 0;
    let acertosEsp = 0;

    simulado.questoes.forEach((questao, index) => {
        const respostaUsuario = simulado.respostas[index];
        const gabaritoCorreto = questao.gabaritoEmbaralhado;

        if (respostaUsuario === gabaritoCorreto) {
            acertos++;
            if (questao.topico === 'Português') acertosPort++;
            if (questao.topico === 'SUS') acertosSus++;
            if (questao.topico === 'Específicos') acertosEsp++;
        } else if (respostaUsuario !== undefined) {
            erros++;
        }
    });

    const percentual = Math.round((acertos / simulado.questoes.length) * 100);

    // Atualizar interface
    document.getElementById('pontuacaoTotal').textContent = acertos;
    document.getElementById('totalAcertos').textContent = acertos;
    document.getElementById('totalErros').textContent = erros;
    document.getElementById('percentualAcerto').textContent = `${percentual}%`;
    document.getElementById('tempoFinal').textContent = formatarTempo(simulado.tempoDecorrido);

    document.getElementById('pontosPortugues').textContent = `${acertosPort}/10`;
    document.getElementById('pontosSus').textContent = `${acertosSus}/10`;
    document.getElementById('pontosEspecificos').textContent = `${acertosEsp}/10`;

    // Gerar gabarito
    gerarGabarito();
}

// ========================================
// GERAR GABARITO DETALHADO COM EXPLICAÇÕES DINÂMICAS
// ========================================
function gerarGabarito() {
    const container = document.getElementById('gabaritoDetalhado');
    container.innerHTML = '';
    const letras = ['A', 'B', 'C', 'D', 'E'];

    simulado.questoes.forEach((questao, index) => {
        const respostaUsuario = simulado.respostas[index];
        const gabaritoCorreto = questao.gabaritoEmbaralhado;
        const acertou = respostaUsuario === gabaritoCorreto;

        // Pegar o índice das respostas
        const indiceResposta = respostaUsuario ? letras.indexOf(respostaUsuario) : -1;
        const indiceCorreto = letras.indexOf(gabaritoCorreto);

        // Pegar o conteúdo das alternativas
        const textoResposta = indiceResposta >= 0 ? questao.alternativas[indiceResposta] : 'Não respondeu';
        const textoCorreto = questao.alternativas[indiceCorreto];

        // Criar explicação dinâmica e contextualizada
        let explicacaoHTML = '';

        if (questao.explicacao) {
            let explicacaoTexto = questao.explicacao;

            // Se ERROU, adicionar explicação do erro ANTES da explicação geral
            if (!acertou && respostaUsuario) {
                explicacaoTexto = `
                    <div style="background: #ffebee; padding: 12px; border-left: 4px solid #e53935; border-radius: 4px; margin-bottom: 12px;">
                        <strong style="color: #c62828;">❌ POR QUE SUA RESPOSTA (${respostaUsuario}) ESTÁ ERRADA:</strong><br>
                        <span style="color: #c62828;">"${textoResposta}"</span><br><br>
                        ${gerarExplicacaoErro(questao, respostaUsuario, gabaritoCorreto, textoResposta, textoCorreto)}
                    </div>
                    <div style="background: #e8f5e9; padding: 12px; border-left: 4px solid #43a047; border-radius: 4px;">
                        <strong style="color: #2e7d32;">✓ POR QUE A RESPOSTA CORRETA É (${gabaritoCorreto}):</strong><br>
                        <span style="color: #2e7d32;">"${textoCorreto}"</span><br><br>
                        ${questao.explicacao}
                    </div>
                `;
            } else if (acertou) {
                // Se ACERTOU, mostrar confirmação
                explicacaoTexto = `
                    <div style="background: #e8f5e9; padding: 12px; border-left: 4px solid #43a047; border-radius: 4px;">
                        <strong style="color: #2e7d32;">✓ PARABÉNS! VOCÊ ACERTOU!</strong><br>
                        <strong>Sua resposta (${respostaUsuario}):</strong> "${textoCorreto}"<br><br>
                        ${questao.explicacao}
                    </div>
                `;
            } else if (!respostaUsuario) {
                // Se NÃO RESPONDEU
                explicacaoTexto = `
                    <div style="background: #fff3e0; padding: 12px; border-left: 4px solid #ff9800; border-radius: 4px;">
                        <strong style="color: #ef6c00;">⚠️ VOCÊ NÃO RESPONDEU ESTA QUESTÃO</strong><br>
                        <strong>A resposta correta era (${gabaritoCorreto}):</strong> "${textoCorreto}"<br><br>
                        ${questao.explicacao}
                    </div>
                `;
            }

            explicacaoHTML = `
                <div class="gabarito-explicacao">
                    <strong>📚 Explicação Detalhada:</strong><br><br>
                    ${explicacaoTexto}
                </div>
            `;
        }

        const div = document.createElement('div');
        div.className = 'gabarito-questao';
        div.innerHTML = `
            <div class="gabarito-header">
                <span class="gabarito-numero">Questão ${index + 1} - ${questao.topico}</span>
                <span class="gabarito-status ${acertou ? 'acerto' : 'erro'}">
                    ${acertou ? '✓ Acertou' : '✗ Errou'}
                </span>
            </div>
            <div class="gabarito-enunciado"><strong>${questao.enunciado}</strong></div>
            <div class="gabarito-resposta">
                <strong>Sua resposta:</strong> <span style="color: ${acertou ? '#43a047' : '#e53935'}; font-weight: bold;">${respostaUsuario || 'Não respondeu'}</span> ${respostaUsuario ? '- ' + textoResposta : ''}<br><br>
                <strong>Gabarito correto:</strong> <span style="color: #43a047; font-weight: bold;">${gabaritoCorreto}</span> - ${textoCorreto}
            </div>
            ${explicacaoHTML}
        `;
        container.appendChild(div);
    });
}

// ========================================
// GERAR EXPLICAÇÃO DO ERRO (CONTEXTUALIZADA)
// ========================================
function gerarExplicacaoErro(questao, respostaUsuario, gabaritoCorreto, textoResposta, textoCorreto) {
    // Tentar criar explicação contextualizada do erro

    // Padrões comuns de erro que podemos identificar
    if (textoResposta.toLowerCase().includes('incorret') || textoResposta.toLowerCase().includes('erro')) {
        return 'Esta alternativa está marcada como incorreta no próprio enunciado.';
    }

    if (textoResposta.toLowerCase().includes('apenas') || textoResposta.toLowerCase().includes('somente') || textoResposta.toLowerCase().includes('exclusivamente')) {
        return 'Esta alternativa é muito restritiva. O uso de termos absolutos como "apenas", "somente" ou "exclusivamente" geralmente indica informação incompleta ou incorreta.';
    }

    if (textoResposta.toLowerCase().includes('nunca') || textoResposta.toLowerCase().includes('sempre') || textoResposta.toLowerCase().includes('todo')) {
        return 'Cuidado com termos absolutos! Palavras como "nunca", "sempre" e "todo" raramente são corretas em questões de concurso, pois há quase sempre exceções.';
    }

    if (textoResposta.toLowerCase().includes('não') && textoCorreto.toLowerCase().includes('não')) {
        return 'Você escolheu uma alternativa que nega algo, mas a negação está aplicada incorretamente ou ao contexto errado.';
    }

    // Explicação genérica mas útil
    return `Esta alternativa contém informação incorreta, incompleta ou não atende ao que foi solicitado no enunciado. Compare com a alternativa correta (${gabaritoCorreto}) para entender a diferença.`;
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', async () => {
    await carregarQuestoes();

    // Botão iniciar
    document.getElementById('btnIniciar').onclick = iniciarSimulado;

    // Navegação
    document.getElementById('btnProxima').onclick = proximaQuestao;
    document.getElementById('btnAnterior').onclick = questaoAnterior;
    document.getElementById('btnFinalizar').onclick = finalizarSimulado;

    // Toggle gabarito
    document.getElementById('btnToggleGabarito').onclick = () => {
        const gabarito = document.getElementById('gabaritoDetalhado');
        gabarito.classList.toggle('hidden');
        const btn = document.getElementById('btnToggleGabarito');
        btn.textContent = gabarito.classList.contains('hidden') ?
            '📖 Ver Gabarito Detalhado' : '📖 Ocultar Gabarito';
    };

    // Novo simulado
    document.getElementById('btnNovoSimulado').onclick = () => {
        document.getElementById('telaResultado').classList.add('hidden');
        document.getElementById('telaInicial').classList.remove('hidden');
    };

    // Voltar ao início
    document.getElementById('btnVoltar').onclick = () => {
        document.getElementById('telaResultado').classList.add('hidden');
        document.getElementById('telaInicial').classList.remove('hidden');
    };
});