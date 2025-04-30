import { skills } from "../data/skills.js";
export function renderSkills() {
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
        <div class="container mx-auto px-4 py-8">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 reveal-fade-up">Minhas Habilidades</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div class="reveal-fade-up">
                    <h3 class="text-2xl font-bold mb-6 text-blue-700 flex items-center">
                        <span>Backend</span>
                        <span class="text-gray-500 text-base ml-2">(Especialidade)</span>
                    </h3>
                    <div class="grid grid-cols-1 gap-3">
                        ${renderSkillBadges(backendSkills)}
                    </div>
                </div>

                <div class="reveal-fade-up">
                    <h3 class="text-2xl font-bold mb-6 text-blue-700">Bancos de Dados</h3>
                    <div class="grid grid-cols-1 gap-3">
                        ${renderSkillBadges(databaseSkills)}
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div class="reveal-fade-up">
                    <h3 class="text-2xl font-bold mb-6 text-blue-700">DevOps</h3>
                    <div class="grid grid-cols-1 gap-3">
                        ${renderSkillBadges(devopsSkills)}
                    </div>
                </div>

                <div class="reveal-fade-up">
                    <h3 class="text-2xl font-bold mb-6 text-blue-700">Ferramentas</h3>
                    <div class="grid grid-cols-1 gap-3">
                        ${renderSkillBadges(toolsSkills)}
                    </div>
                </div>

                <div class="reveal-fade-up md:col-span-2 lg:col-span-1">
                    <h3 class="text-2xl font-bold mb-6 text-blue-700">Frontend</h3>
                    <div class="grid grid-cols-1 gap-3">
                        ${renderSkillBadges(frontendSkills)}
                    </div>
                </div>
            </div>
        </div>
    `;
}
function renderSkillBadges(skills) {
    return skills.map(skill => {
        const levelClass = getSkillLevelClass(skill.level);
        return `
            <div class="skill-badge ${levelClass} text-white py-3 px-4 rounded-lg font-medium flex items-center justify-between shadow-md transition-transform hover:scale-102 hover:shadow-lg">
                <span class="mr-2">${skill.name}</span>
                <div class="flex items-center">
                    ${renderSkillStars(skill.level)}
                </div>
            </div>
        `;
    }).join('');
}
function getSkillLevelClass(level) {
    switch (level) {
        case 5: return 'bg-gradient-to-r from-blue-700 to-blue-800';
        case 4: return 'bg-gradient-to-r from-blue-600 to-blue-700';
        case 3: return 'bg-gradient-to-r from-blue-500 to-blue-600';
        case 2: return 'bg-gradient-to-r from-blue-400 to-blue-500';
        default: return 'bg-gradient-to-r from-blue-300 to-blue-400';
    }
}
function renderSkillStars(level) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= level) {
            stars += '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-300 mx-0.5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>';
        }
        else {
            // Estrela vazia
            stars += '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white text-opacity-30 mx-0.5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>';
        }
    }
    return stars;
}
//# sourceMappingURL=skills.js.map