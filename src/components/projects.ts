import { projects } from '../data/projects.js';
import { Project } from '../types/interfaces.js';

export function renderProjects(): void {
    const projectsElement = document.getElementById('projects');
    if (!projectsElement) {
      console.error('Element with ID "projects" not found.');
      return;
    }

    // Using a fragment to build the content before inserting
    const fragment = document.createDocumentFragment();

    // Header Section - Reduced vertical padding from py-24 to py-12
    const headerHtml = `
        <div class="container mx-auto px-4 sm:px-6 py-12">
            <div class="mb-12 text-center reveal-fade-up">
                <span class="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2 inline-block">Expertise & Experiência</span>
                <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Projetos Profissionais</h2>
                <div class="h-1 w-16 bg-blue-600 mx-auto rounded-full"></div>
                <p class="text-gray-600 max-w-2xl mx-auto mt-4 text-base">Confira abaixo alguns dos principais projetos que desenvolvi, demonstrando minhas habilidades e competências técnicas.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                ${projects.map(renderProjectCard).join('')}
            </div>

            <div class="flex justify-center mt-16 reveal-fade-up">
                <a href="https://github.com/AndersonCRodrigues" target="_blank" rel="noopener noreferrer"
                   class="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white bg-blue-600 rounded-lg shadow-md transition-all duration-300 ease-out hover:shadow-xl hover:bg-blue-700">
                    <span class="relative flex items-center z-10">
                        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.203 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clip-rule="evenodd"></path>
                        </svg>
                        Ver repositório completo
                        <svg class="w-4 h-4 ml-2 transition-transform duration-200 ease-out transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </span>
                </a>
            </div>
        </div>
    `;

    // Create a temporary div to hold the HTML string and append its children to the fragment
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = headerHtml;
    while (tempDiv.firstChild) {
        fragment.appendChild(tempDiv.firstChild);
    }

    // Append the fragment to the projects element
    projectsElement.appendChild(fragment);
}

function renderProjectCard(project: Project, index: number): string {
    // Using a more robust placeholder service or local asset
    const imageUrl = project.imageUrl && project.imageUrl !== '' ? project.imageUrl : `https://via.placeholder.com/600x300?text=${encodeURIComponent(project.title || 'Project Image')}`;

    const tagsHtml = project.tags.map(tag =>
        `<span class="inline-block bg-blue-50 text-blue-700 text-xs font-medium tracking-wide px-2.5 py-0.5 rounded-md border border-blue-100 mr-2 mb-2 transition duration-200 ease-in-out hover:bg-blue-100">${tag}</span>`
    ).join('');

    const highlightsHtml = project.highlights && project.highlights.length > 0 ?
        `<div class="mt-4 pt-4 border-t border-gray-100">
            <h4 class="font-semibold text-gray-900 mb-2 text-sm">Principais características:</h4>
            <ul class="space-y-1.5 text-gray-700 text-sm">
                ${project.highlights.map(highlight =>
                    `<li class="flex items-start">
                        <svg class="w-4 h-4 text-blue-600 mr-1.5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span>${highlight}</span>
                    </li>`
                ).join('')}
            </ul>
        </div>` : '';

    return `
        <div class="project-card bg-white rounded-lg overflow-hidden shadow transition-all duration-300 reveal-fade-up group hover:shadow-xl" data-index="${index}" style="animation-delay: ${index * 100}ms">
            <div class="relative h-48 bg-gray-100 overflow-hidden">
                <img src="${imageUrl}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                ${project.demoUrl ?
                    `<a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer"
                       class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span class="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium">Ver Demo</span>
                    </a>` : ''
                }
            </div>

            <div class="p-5">
                <h3 class="text-xl font-bold mb-2 text-gray-900">${project.title}</h3>
                <p class="text-gray-600 text-sm leading-relaxed">${project.description}</p>

                <div class="flex flex-wrap mt-3">
                    ${tagsHtml}
                </div>

                ${highlightsHtml}

                <div class="mt-5 flex flex-wrap gap-2">
                    <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer"
                       class="flex items-center justify-center px-4 py-2 border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 text-xs font-medium">
                        <svg class="w-4 h-4 mr-1.5 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.203 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clip-rule="evenodd"></path>
                        </svg>
                        GitHub
                    </a>
                    ${project.demoUrl ?
                        `<a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer"
                            class="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-200 text-xs font-medium">
                            <svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                            </svg>
                            Ver Demo
                        </a>` : ''
                    }
                </div>
            </div>
        </div>
    `;
}