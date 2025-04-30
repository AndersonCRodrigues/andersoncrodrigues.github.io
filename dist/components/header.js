export function renderHeader() {
    const header = document.getElementById('header');
    if (!header) {
        return;
    }
    header.innerHTML = `
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
            <div class="text-2xl font-bold">Anderson<span class="text-blue-500">Rodrigues</span></div>
            <nav class="hidden md:block">
                <ul class="flex space-x-6">
                    <li><a href="#hero" class="nav-link hover:text-blue-400">Início</a></li>
                    <li><a href="#about" class="nav-link hover:text-blue-400">Sobre</a></li>
                    <li><a href="#skills" class="nav-link hover:text-blue-400">Habilidades</a></li>
                    <li><a href="#projects" class="nav-link hover:text-blue-400">Projetos</a></li>
                    <li><a href="#contact" class="nav-link hover:text-blue-400">Contato</a></li>
                </ul>
            </nav>
            <div class="md:hidden">
                <button id="mobile-menu-button" class="text-white focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
        <div id="mobile-menu" class="hidden md:hidden bg-gray-700 px-4 py-2">
            <ul class="flex flex-col space-y-2">
                <li><a href="#hero" class="block py-2 hover:text-blue-400">Início</a></li>
                <li><a href="#about" class="block py-2 hover:text-blue-400">Sobre</a></li>
                <li><a href="#skills" class="block py-2 hover:text-blue-400">Habilidades</a></li>
                <li><a href="#projects" class="block py-2 hover:text-blue-400">Projetos</a></li>
                <li><a href="#contact" class="block py-2 hover:text-blue-400">Contato</a></li>
            </ul>
        </div>
    `;
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}
//# sourceMappingURL=header.js.map