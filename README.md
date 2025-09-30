# resume
My resume

```ts
import EducationType from "./types/education";
import ExperienceType from "./types/experience";
import ProjectType from "./types/project";
import SkillType from "./types/skills";
import UserType from "./types/user";

export const user: UserType = {
    firstName: 'Pejman',
    lastName: 'Khaleghi',
    description: `Full-Stack Software Engineer with expertise in Golang, PHP, and modern JavaScript frameworks`,
    email: 'pejman.hkh@gmail.com',
    location: 'Georgia, Tbilisi',
    about: `As an experienced full-stack software engineer, I am passionate about building scalable, high-performance systems that solve real-world problems. I focus on clean, maintainable code and enjoy turning complex challenges into reliable solutions.`,
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

];

export const skills: SkillType[] = [
    {
        id: 1,
        title: 'Architectures and Patterns',
        description: 'Design patterns (SOLID, DRY, YAGNI, SOA), Web services (GraphQL, RESTful)',
    },
    {
        id: 2,
        title: 'Programming Languages',
        description: 'Golang, PHP, JavaScript, TypeScript, C, C++',
    },
    {
        id: 3,
        title: 'Databases',
        description: 'PostgreSQL, SQL Server, MySQL, SQLite, Redis, MongoDB',
    },
    {
        id: 4,
        title: 'Cloud and Infrastructure',
        description: 'Kubernetes (Helm, Istio), AWS, GCP, Terraform, Docker',
    },
    {
        id: 5,
        title: 'DevOps and Monitoring',
        description: 'CI/CD (Github CI, Jenkins)',
    },
    {
        id: 6,
        title: 'Web Technologies',
        description: 'JavaScript libraries and frameworks (React.js, Vue.js, Node.js), Web servers (Apache, Nginx)',
    },
];

export const projects: ProjectType[] = [
    {
        id: 1,
        title: 'AyaFlix.com',
        link: 'https://www.ayaflix.com',
        description: `Developed Ayaflix, a movie streaming website built with Next.js.  
Implemented a fully custom video player with advanced playback controls, entirely self-developed.  
Designed the user interface with a focus on simplicity, mobile compatibility, and a smooth user experience.`,
    },
    {
        id: 2,
        title: 'React Player CC',
        link: 'https://github.com/pejman-hkh/react-player-cc',
        description: `A lightweight and flexible video player built with TypeScript and React, featuring fully customizable controls and native support for SRT subtitles. Ideal for seamless integration and UI customization.`,
    },
    {
        id: 3,
        title: 'React Uni Calendar',
        link: 'https://github.com/pejman-hkh/react-uni-calendar',
        description: `A versatile and customizable React calendar component supporting multiple calendar systems including Gregorian, Persian (Jalaali), and Hijri.`,
    },
    {
        id: 4,
        title: 'V2rayp',
        link: 'https://github.com/pejman-hkh/v2rayp',
        description: 'A lightweight cross-platform V2Ray GUI built with Tauri',
    },
    {
        id: 5,
        title: 'Subtitle Hub',
        link: 'https://github.com/pejman-hkh/subtitle-hub',
        description: 'Subtitle management and sync tool built with Golang and Next.js',
    },
    {
        id: 6,
        title: 'Telegram Weba',
        link: 'https://github.com/pejman-hkh/telegram-tt',
        description: 'Built for a developer contest and selected as one of the winning submissions. A simplified Telegram web client clone',
    },
    {
        id: 7,
        title: 'Golang DOM Parser',
        link: 'https://github.com/pejman-hkh/gdp',
        description: 'Fast and lightweight HTML DOM parser library for Go',
    },

];
```