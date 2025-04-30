import { setupEmailjsForm } from '../services/email.js';

export function renderContact(): void {
    const contact = document.getElementById('contact');
    if (!contact) {
      return;
    }

    contact.innerHTML = `
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 reveal-fade-up">Entre em Contato</h2>
            <div class="flex flex-col md:flex-row">
                <div class="md:w-1/2 mb-8 md:mb-0 reveal-fade-up">
                    <h3 class="text-2xl font-bold mb-6">Vamos Conversar!</h3>
                    <p class="mb-6 text-gray-300">
                        Estou disponível para projetos freelance, oportunidades de emprego ou apenas para trocar ideias
                        sobre desenvolvimento backend e novas tecnologias.
                    </p>
                    <div class="space-y-4">
                        <div class="flex items-center">
                            <div class="bg-blue-700 rounded-full p-2 mr-4">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <div>
                                <p class="text-sm text-gray-400">Email</p>
                                <a href="mailto:anderson.c.rodrigues@hotmail.com" class="hover:text-blue-400">anderson.c.rodrigues@hotmail.com</a>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="bg-blue-700 rounded-full p-2 mr-4">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                                </svg>
                            </div>
                            <div>
                                <p class="text-sm text-gray-400">LinkedIn</p>
                                <a href="https://www.linkedin.com/in/anderson-costa-rodrigues/" target="_blank" class="hover:text-blue-400">in/anderson-costa-rodrigues</a>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="bg-blue-700 rounded-full p-2 mr-4">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                </svg>
                            </div>
                            <div>
                                <p class="text-sm text-gray-400">GitHub</p>
                                <a href="https://github.com/AndersonCRodrigues" target="_blank" class="hover:text-blue-400">AndersonCRodrigues</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md:w-1/2 md:pl-12 reveal-fade-up">
                    <form id="contact-form" class="bg-gray-700 rounded-lg p-6 shadow-lg">
                        <div class="mb-4">
                            <label for="name" class="block text-sm font-medium mb-2">Nome</label>
                            <input type="text" id="name" name="from_name" class="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" required>
                        </div>
                        <div class="mb-4">
                            <label for="email" class="block text-sm font-medium mb-2">Email</label>
                            <input type="email" id="email" name="from_email" class="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" required>
                        </div>
                        <div class="mb-4">
                            <label for="subject" class="block text-sm font-medium mb-2">Assunto</label>
                            <input type="text" id="subject" name="subject" class="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" required>
                        </div>
                        <div class="mb-6">
                            <label for="message" class="block text-sm font-medium mb-2">Mensagem</label>
                            <textarea id="message" name="message_html" rows="4" class="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" required></textarea>
                        </div>
                        <button id="submit-button" type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition">Enviar Mensagem</button>
                        <p id="form-status" class="text-center mt-4 text-sm"></p>
                    </form>
                </div>
            </div>
        </div>
    `;

    setupEmailjsForm();
}