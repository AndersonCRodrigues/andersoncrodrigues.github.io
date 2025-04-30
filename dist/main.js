import { renderAbout } from './components/about.js';
import { renderContact } from './components/contact.js';
import { renderHeader } from './components/header.js';
import { renderHero } from './components/hero.js';
import { renderProjects } from './components/projects.js';
import { renderSkills } from './components/skills.js';
import { initEmailjs } from './services/email.js';
import { setupScrollReveal } from './utils/animations.js';
class Portfolio {
    constructor() {
        window.addEventListener('DOMContentLoaded', () => {
            this.initializeSections();
            setupScrollReveal();
        });
        initEmailjs();
    }
    initializeSections() {
        renderHeader();
        renderHero();
        renderAbout();
        renderSkills();
        renderProjects();
        renderContact();
    }
}
const portfolio = new Portfolio();
//# sourceMappingURL=main.js.map