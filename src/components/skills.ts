import { skills } from "../data/skills.js";
import { Skill } from "../types/interfaces.js";

export function renderSkills(): void {
    const skillsElement = document.getElementById('skills');
    if (!skillsElement) {
      return;
    }

    const backendSkills = skills.filter(skill => skill.category === 'backend');
    const databaseSkills = skills.filter(skill => skill.category === 'database');
    const devopsSkills = skills.filter(skill => skill.category === 'devops');
    const toolsSkills = skills.filter(skill => skill.category === 'tools');
    const frontendSkills = skills.filter(skill => skill.category === 'frontend');

    skillsElement.innerHTML = `
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 reveal-fade-up">Minhas Habilidades</h2>

            <div class="mb-12 reveal-fade-up">
                <h3 class="text-2xl font-bold mb-6 text-blue-700">Backend <span class="text-gray-500 text-lg">(Especialidade)</span></h3>
                <div class="flex flex-wrap gap-4">
                    ${renderSkillBadges(backendSkills)}
                </div>
            </div>

            <div class="mb-12 reveal-fade-up">
                <h3 class="text-2xl font-bold mb-6 text-blue-700">Bancos de Dados</h3>
                <div class="flex flex-wrap gap-4">
                    ${renderSkillBadges(databaseSkills)}
                </div>
            </div>

            <div class="mb-12 reveal-fade-up">
                <h3 class="text-2xl font-bold mb-6 text-blue-700">DevOps</h3>
                <div class="flex flex-wrap gap-4">
                    ${renderSkillBadges(devopsSkills)}
                </div>
            </div>

            <div class="mb-12 reveal-fade-up">
                <h3 class="text-2xl font-bold mb-6 text-blue-700">Ferramentas</h3>
                <div class="flex flex-wrap gap-4">
                    ${renderSkillBadges(toolsSkills)}
                </div>
            </div>

            <div class="reveal-fade-up">
                <h3 class="text-2xl font-bold mb-6 text-blue-700">Frontend</h3>
                <div class="flex flex-wrap gap-4">
                    ${renderSkillBadges(frontendSkills)}
                </div>
            </div>
        </div>
    `;
}

function renderSkillBadges(skills: Skill[]): string {
    return skills.map(skill => {
        const levelClass = getSkillLevelClass(skill.level);
        return `
            <div class="skill-badge ${levelClass} text-white py-2 px-4 rounded-lg font-medium text-sm flex items-center shadow-md">
                ${skill.name}
                <div class="ml-2 flex">
                    ${renderSkillLevel(skill.level)}
                </div>
            </div>
        `;
    }).join('');
}

function getSkillLevelClass(level: number): string {
    switch (level) {
        case 5: return 'bg-blue-700 hover:bg-blue-800';
        case 4: return 'bg-blue-600 hover:bg-blue-700';
        case 3: return 'bg-blue-500 hover:bg-blue-600';
        case 2: return 'bg-blue-400 hover:bg-blue-500';
        default: return 'bg-blue-300 hover:bg-blue-400';
    }
}

function renderSkillLevel(level: number): string {
    let dots = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= level) {
            dots += '<div class="w-2 h-2 rounded-full bg-white mx-0.5"></div>';
        } else {
            dots += '<div class="w-2 h-2 rounded-full bg-white bg-opacity-30 mx-0.5"></div>';
        }
    }
    return dots;
}