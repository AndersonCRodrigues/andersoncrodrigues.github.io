export interface Project {
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    imageUrl?: string;
    demoUrl?: string;
    highlights?: string[];
}

export interface Skill {
    name: string;
    icon?: string;
    category: 'backend' | 'frontend' | 'database' | 'devops' | 'tools';
    level: number; // 1-5
}