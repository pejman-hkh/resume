import EducationType from "./types/education";
import ExperienceType from "./types/experience";
import ProjectType from "./types/project";
import SkillType from "./types/skills";
import UserType from "./types/user";

export const user: UserType = {
    firstName: 'AbbasAli',
    lastName: 'Khaleghi',
    description: `Full-Stack Developer with expertise in Golang, PHP, and modern JavaScript frameworks`,
    email: 'pejman.hkh@gmail.com',
    phone: '+989130003499',
    location: 'Iran, Esfahan',
    about: `I am a self-taught full-stack developer with over a decade of hands-on experience in backend and frontend technologies. 
I’ve developed and maintained scalable systems, including e-commerce platforms, VoIP solutions, movie streaming websites, and 
custom low-level software such as a JIT-compiled programming language written in C. I enjoy solving real-world problems with clean, 
performant, and maintainable code.`,
    birthDate: new Date("1991-05-23"),
    avatar: 'avatar.jpg',
    github: 'pejman-hkh',
    linkedin: 'pejman-hkh'
};

export const experiences: ExperienceType[] = [
    {
        id: 1,
        company: 'Ardindata',
        title: 'Full Stack Developer',
        from: new Date('2010-01-01'),
        to: new Date('2012-01-01'),
        description: 'Developed a custom e-commerce platform using PHP, MySQL, JavaScript, jQuery, and Smarty template engine',
    },
    {
        id: 2,
        company: 'Ham3d',
        title: 'Full Stack Developer',
        from: new Date('2012-01-01'),
        to: new Date('2013-01-01'),
        description: 'Worked on various web-based systems using PHP, MySQL, JavaScript, jQuery, and Raintpl templating',
    },
    {
        id: 3,
        company: 'Salabat Rayane Sepahan',
        title: 'Full Stack Developer',
        from: new Date('2013-01-01'),
        to: new Date('2016-01-01'),
        description: 'Built VoIP-based IVR and mass voice messaging systems using PHP, MySQL, jQuery, C++, and Asterisk',
    },
    {
        id: 4,
        company: 'Javane Pouya',
        title: 'Full Stack Developer',
        from: new Date('2016-01-01'),
        to: new Date('2018-01-01'),
        description: 'Developed multi-platform movie streaming apps using Phalcon PHP framework and Cordova for mobile',
    },
    {
        id: 5,
        company: 'Partak',
        title: 'Full Stack Developer',
        from: new Date('2021-01-01'),
        to: new Date('2023-01-01'),
        description: `Worked on complex backend systems using PHP, Laravel, MySQL, and Docker.  
Built full-stack platforms using Golang, React.js, and Next.js`,
    },
];

export const educations: EducationType[] = [
    {
        id: 1,
        title: 'Self-taught Software Engineer',
        description: 'Gained extensive knowledge through real-world experience building and maintaining production-level systems',
    }
];

export const skills: SkillType[] = [
    {
        id: 1,
        title: 'Golang (Go)',
        percent: 90,
    },
    {
        id: 2,
        title: 'React.js',
        percent: 90,
    },
    {
        id: 3,
        title: 'Next.js',
        percent: 90,
    },
    {
        id: 4,
        title: 'PHP',
        percent: 95,
    },
    {
        id: 5,
        title: 'Typescript',
        percent: 90,
    },
    {
        id: 5,
        title: 'C Programming',
        percent: 90,
    },
    {
        id: 6,
        title: 'C++',
        percent: 70,
    },
    {
        id: 5,
        title: 'Docker & DevOps',
        percent: 90,
    },
];

export const projects: ProjectType[] = [
    {
        id: 1,
        title: 'Dolang',
        link: 'https://www.github.com/pejman-hkh/dolang',
        description: 'A tiny JIT-compiled programming language written in C, inspired by Fabrice Bellard’s otcc',
    },
    {
        id: 2,
        title: 'V2rayp',
        link: 'https://github.com/pejman-hkh/v2rayp',
        description: 'A lightweight cross-platform V2Ray GUI built with Tauri',
    },
    {
        id: 3,
        title: 'Subtitle Hub',
        link: 'https://github.com/pejman-hkh/subtitle-hub',
        description: 'Subtitle management and sync tool built with Golang and Next.js',
    },
    {
        id: 4,
        title: 'Telegram Weba',
        link: 'https://github.com/pejman-hkh/telegram-tt',
        description: 'Built for a developer contest and selected as one of the winning submissions. A simplified Telegram web client clone',
    },
    {
        id: 5,
        title: 'Golang DOM Parser',
        link: 'https://github.com/pejman-hkh/gdp',
        description: 'Fast and lightweight DOM parser library for Go',
    },
    {
        id: 6,
        title: 'My Resume',
        link: 'https://github.com/pejman-hkh/resume',
        description: 'This resume – built with TypeScript and modular components',
    },
];