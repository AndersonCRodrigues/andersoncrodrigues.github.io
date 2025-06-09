document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const cadastroForm = document.getElementById('cadastroForm');
    const perfilNome = document.getElementById('perfilNome');
    const perfilEmail = document.getElementById('perfilEmail');
    const perfilEndereco = document.getElementById('perfilEndereco');
    const solicitacoesPendentes = document.getElementById('solicitacoesPendentes');
    const solicitacoesConcluidas = document.getElementById('solicitacoesConcluidas');
    const historicoServicos = document.getElementById('historicoServicos');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = loginForm.email.value;
            const password = loginForm.password.value;
            const users = getFromLocalStorage('users') || [];
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                saveToLocalStorage('currentUser', user);
                window.location.href = 'home.html';
            } else {
                alert('Email ou senha inválidos.');
            }
        });
    }

    if (cadastroForm) {
        cadastroForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newUser = {
                id: Date.now(),
                nome: cadastroForm.nome.value,
                sobrenome: cadastroForm.sobrenome.value,
                email: cadastroForm.email.value,
                password: cadastroForm.password.value,
                endereco: {
                    rua: cadastroForm.rua.value,
                    numero: cadastroForm.numero.value,
                    lote: cadastroForm.lote.value,
                    quadra: cadastroForm.quadra.value
                }
            };

            let users = getFromLocalStorage('users') || [];
            if (users.some(u => u.email === newUser.email)) {
                showModal('Erro no Cadastro', 'Este email já está cadastrado.');
                return;
            }

            users.push(newUser);
            saveToLocalStorage('users', users);
            showModal('Sucesso!', 'Cadastro realizado com êxito. Faça login para continuar.', () => {
                window.location.href = 'index.html';
            });
        });
    }

    if (perfilNome && perfilEmail && perfilEndereco) {
        const currentUser = getFromLocalStorage('currentUser');
        if (currentUser) {
            perfilNome.textContent = `${currentUser.nome} ${currentUser.sobrenome}`;
            perfilEmail.textContent = currentUser.email;
            const endereco = currentUser.endereco;
            perfilEndereco.textContent = `${endereco.rua}, ${endereco.numero}${endereco.lote ? `, Lote ${endereco.lote}` : ''}${endereco.quadra ? `, Quadra ${endereco.quadra}` : ''}`;

            const allServicos = getFromLocalStorage('servicos') || [];
            const userServicos = allServicos.filter(s => s.solicitanteEmail === currentUser.email);

            const pendentes = userServicos.filter(s => s.status === 'Pendente').length;
            const concluidas = userServicos.filter(s => s.status === 'Concluído').length;

            solicitacoesPendentes.textContent = pendentes;
            solicitacoesConcluidas.textContent = concluidas;

            if (historicoServicos) {
                if (userServicos.length > 0) {
                    historicoServicos.innerHTML = userServicos.map(servico => `
                        <div class="bg-gray-100 p-4 rounded-lg mb-3 shadow-sm">
                            <h5 class="font-bold text-gray-800">${servico.titulo}</h5>
                            <p class="text-sm text-gray-600">${servico.tipoServico}</p>
                            <p class="text-sm text-gray-600">Status: <span class="${servico.status === 'Concluído' ? 'text-green-600' : 'text-orange-600'} font-semibold">${servico.status}</span></p>
                            <p class="text-xs text-gray-500">Solicitado em: ${new Date(servico.dataSolicitacao).toLocaleDateString()}</p>
                            ${servico.dataConclusao ? `<p class="text-xs text-gray-500">Concluído em: ${new Date(servico.dataConclusao).toLocaleDateString()}</p>` : ''}
                        </div>
                    `).join('');
                } else {
                    historicoServicos.innerHTML = '<p class="text-gray-600 text-center">Nenhuma solicitação encontrada.</p>';
                }
            }
        } else {
            window.location.href = 'index.html';
        }
    }
});