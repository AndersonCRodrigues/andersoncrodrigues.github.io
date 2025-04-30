export function renderHero() {
    const hero = document.getElementById('hero');
    if (!hero) {
        return;
    }
    hero.innerHTML = `
        <div class="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-8 md:mb-0 reveal-fade-up">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">Anderson Rodrigues</h1>
                <h2 class="text-2xl md:text-3xl text-blue-300 mb-6">Engenheiro de Software</h2>
                <p class="text-lg md:text-xl mb-6">Especialista em construir APIs robustas e escaláveis com Python, Node.js, Express e TypeScript.</p>
                <div class="flex space-x-4">
                    <a href="#projects" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition">Ver Projetos</a>
                    <a href="#contact" class="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-6 rounded-lg transition">Contato</a>
                </div>
            </div>
            <div class="md:w-1/2 flex justify-center reveal-fade-up">
                <div class="bg-gray-700 p-2 rounded-full shadow-xl">
                    <img src="https://avatars.githubusercontent.com/u/110496377?v=4" alt="Anderson Rodrigues" class="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-blue-500">
                </div>
            </div>
        </div>
    `;
}
//# sourceMappingURL=hero.js.map