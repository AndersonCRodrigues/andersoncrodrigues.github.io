export function renderAbout(): void {
    const about = document.getElementById('about');
    if (!about) {
      return;
    }

    about.innerHTML = `
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 reveal-fade-up">Sobre Mim</h2>
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-8 md:mb-0 reveal-fade-up">
                    <img src="https://images.prismic.io/voitto-blog/17f7d622-3a54-480e-be53-5dd7296bddce_desenvolvedor+backend.jpg?auto=compress,format?w=3840&q=75" alt="Desenvolvedor Backend" class="rounded-lg shadow-lg">
                </div>
                <div class="md:w-1/2 md:pl-12 reveal-fade-up">
                    <h3 class="text-2xl font-bold mb-4 text-blue-700">Desenvolvedor Backend Experiente</h3>
                    <p class="text-lg mb-4">
                        Sou um desenvolvedor de software apaixonado por criar soluções backend robustas e eficientes.
                        Minha especialidade está em desenvolver APIs RESTful com Python, Node.js, Express e TypeScript, seguindo
                        boas práticas de arquitetura e padrões de projeto.
                    </p>
                    <p class="text-lg mb-6">
                        Com forte conhecimento em bancos de dados relacionais e não-relacionais, autenticação,
                        segurança e containers, busco sempre entregar código limpo, testável e de alta qualidade.
                    </p>
                    <div class="flex space-x-4">
                        <a href="https://github.com/AndersonCRodrigues" target="_blank" class="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-lg flex items-center">
                            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.203 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clip-rule="evenodd"></path>
                            </svg>
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/anderson-costa-rodrigues/" target="_blank" class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg flex items-center">
                            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-1-.02-2.288-1.393-2.288-1.397 0-1.61 1.089-1.61 2.214v4.252H8.002V7.504h2.568v1.175h.035c.358-.678 1.234-1.393 2.543-1.393 2.723 0 3.228 1.791 3.228 4.121v4.931zM5.004 6.328a1.549 1.549 0 11-.001-3.097 1.549 1.549 0 01.001 3.097zm1.333 10.01H3.667V7.504h2.67v8.834zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.404C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.298V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path>
                            </svg>
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}