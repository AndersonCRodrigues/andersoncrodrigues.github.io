document.addEventListener('DOMContentLoaded', () => {
    const solicitarServicoForm = document.getElementById('solicitarServicoForm');
    const servicosList = document.getElementById('servicosList');
    const currentUser = getFromLocalStorage('currentUser');

    const protectedPaths = ['home.html', 'solicitar-servico.html', 'perfil.html'];
    const currentPath = window.location.pathname.split('/').pop();

    if (!currentUser && protectedPaths.includes(currentPath)) {
        window.location.href = 'index.html';
        return;
    }

    function initializeFakeServices() {
        let servicos = getFromLocalStorage('servicos');
        if (!servicos || servicos.length === 0) {
            const fakeServices = [
                {
                    id: 1,
                    titulo: "Limpeza de Via Pública",
                    descricao: "Remoção de entulho e varrição completa na Rua A, Lote 10, Quadra 5.",
                    tipoServico: "Varrição",
                    endereco: {
                        rua: "Rua A",
                        numero: "123",
                        lote: "10",
                        quadra: "5",
                        bairro: "Condado"
                    },
                    imagem: "assets/img/servico1.jpg",
                    solicitanteEmail: "usuario1@example.com",
                    dataSolicitacao: "2024-05-10T10:00:00Z",
                    dataConclusao: "2024-05-15T14:30:00Z",
                    status: "Concluído"
                },
                {
                    id: 2,
                    titulo: "Poda de Árvore Ameaçadora",
                    descricao: "Poda de galhos secos que estavam caindo na calçada na Rua B.",
                    tipoServico: "Poda de galhos",
                    endereco: {
                        rua: "Rua B",
                        numero: "45",
                        lote: "",
                        quadra: "",
                        bairro: "Condado"
                    },
                    imagem: "assets/img/servico2.jpg",
                    solicitanteEmail: "usuario2@example.com",
                    dataSolicitacao: "2024-04-20T09:15:00Z",
                    dataConclusao: "2024-04-25T11:00:00Z",
                    status: "Concluído"
                },
                {
                    id: 3,
                    titulo: "Instalação de Lixeira Vermelhinha",
                    descricao: "Nova lixeira instalada em ponto estratégico para descarte adequado.",
                    tipoServico: "Instalação de lixeirinhas",
                    endereco: {
                        rua: "Rua C",
                        numero: "789",
                        lote: "3",
                        quadra: "1",
                        bairro: "Condado"
                    },
                    imagem: "assets/img/servico3.jpg",
                    solicitanteEmail: "usuario3@example.com",
                    dataSolicitacao: "2024-06-01T16:00:00Z",
                    dataConclusao: "2024-06-05T10:00:00Z",
                    status: "Concluído"
                },
                {
                    id: 4,
                    titulo: "Roçada do Terreno Baldio",
                    descricao: "Terreno baldio na Rua D roçado para evitar proliferação de insetos.",
                    tipoServico: "Roçada",
                    endereco: {
                        rua: "Rua D",
                        numero: "10",
                        lote: "1",
                        quadra: "2",
                        bairro: "Condado"
                    },
                    imagem: "assets/img/servico4.jpg",
                    solicitanteEmail: "usuario1@example.com",
                    dataSolicitacao: "2025-01-10T08:00:00Z",
                    dataConclusao: "2025-01-13T08:00:00Z",
                    status: "Concluído"
                },
                {
                    id: 5,
                    titulo: "Coleta de Resíduo Verde",
                    descricao: "Solicitação para coleta extra de resíduo verde na Rua E devido a evento local.",
                    tipoServico: "Coleta de resíduo verde",
                    endereco: {
                        rua: "Rua E",
                        numero: "50",
                        lote: "",
                        quadra: "",
                        bairro: "Condado"
                    },
                    imagem: "assets/img/servico5.jpg",
                    solicitanteEmail: "usuario2@example.com",
                    dataSolicitacao: "2025-02-15T13:00:00Z",
                    dataConclusao: "2025-02-20T08:00:00Z",
                    status: "Concluído"
                }
            ];
            saveToLocalStorage('servicos', fakeServices);
        }
    }

    initializeFakeServices();

    if (solicitarServicoForm) {
        solicitarServicoForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const newService = {
                id: Date.now(),
                titulo: solicitarServicoForm.titulo.value,
                descricao: solicitarServicoForm.descricao.value,
                tipoServico: solicitarServicoForm.tipoServico.value,
                endereco: {
                    rua: solicitarServicoForm.rua.value,
                    numero: solicitarServicoForm.numero.value,
                    lote: solicitarServicoForm.lote.value,
                    quadra: solicitarServicoForm.quadra.value,
                    bairro: 'Condado'
                },
                imagem: solicitarServicoForm.imagem.value || 'https://via.placeholder.com/400x200.png?text=Sem+Imagem',
                solicitanteEmail: currentUser.email,
                dataSolicitacao: new Date().toISOString(),
                dataConclusao: null,
                status: 'Pendente'
            };

            let servicos = getFromLocalStorage('servicos') || [];
            servicos.push(newService);
            saveToLocalStorage('servicos', servicos);
            showModal('Solicitação Registrada', 'Seu serviço foi solicitado com sucesso e será analisado.', () => {
                window.location.href = 'home.html';
            });
        });
    }

    if (servicosList) {
        const servicos = getFromLocalStorage('servicos') || [];
        if (servicos.length > 0) {
            servicosList.innerHTML = servicos.map(servico => `
                <div class="bg-white rounded-lg shadow-md overflow-hidden mobile-card">
                    <img src="${servico.imagem}" alt="Imagem do Serviço" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h3 class="font-bold text-lg text-primary mb-2">${servico.titulo}</h3>
                        <p class="text-gray-700 text-sm mb-2">${servico.descricao}</p>
                        <p class="text-gray-600 text-xs">Tipo: ${servico.tipoServico}</p>
                        <p class="text-gray-600 text-xs">Solicitante: ${servico.solicitanteEmail}</p>
                        <p class="text-gray-600 text-xs">Endereço: ${servico.endereco.rua}, ${servico.endereco.numero}</p>
                        <p class="text-gray-600 text-xs">Status: <span class="${servico.status === 'Concluído' ? 'text-green-600' : 'text-orange-600'} font-semibold">${servico.status}</span></p>
                        ${servico.dataConclusao ? `<p class="text-gray-600 text-xs">Concluído em: ${new Date(servico.dataConclusao).toLocaleDateString()}</p>` : (currentUser.email === servico.solicitanteEmail ? `<button data-id="${servico.id}" class="mark-as-done mt-3 bg-primary text-white text-xs px-3 py-1 rounded hover:opacity-90 transition-opacity">Marcar como Concluído</button>` : '')}
                    </div>
                </div>
            `).join('');

            document.querySelectorAll('.mark-as-done').forEach(button => {
                button.addEventListener('click', (e) => {
                    const serviceId = parseInt(e.target.dataset.id);
                    let currentServicos = getFromLocalStorage('servicos') || [];
                    const index = currentServicos.findIndex(s => s.id === serviceId);
                    if (index > -1) {
                        currentServicos[index].status = 'Concluído';
                        currentServicos[index].dataConclusao = new Date().toISOString();
                        saveToLocalStorage('servicos', currentServicos);
                        showModal('Serviço Concluído', 'O serviço foi marcado como concluído.', () => {
                            location.reload();
                        });
                    }
                });
            });
        } else {
            servicosList.innerHTML = '<p class="text-gray-600 text-center">Nenhum serviço disponível no momento.</p>';
        }
    }
});