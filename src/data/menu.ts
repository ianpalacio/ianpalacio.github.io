// src/data/menu.ts

export const headerMenu = [
    { name: 'Mi perfil', link: '/theme-info' },
    { name: 'Proyectos', link: '/team' },
    { name: 'Blog', link: '/blog' },
    { name: 'Links', link: '/style-guide', showArrow: false,
        children: [
            { name: 'Scripts', link: '/style-guide#typography' },
            { name: 'HTB Account', link: '/style-guide#colors' },
        ]
    }
];

export const footerMenu = [
    { name: 'Style Guide', link: '/style-guide' },
];

export const legalMenu = [
    { name: 'Privacy Policy', link: '/legal/privacy-policy' },
    { name: 'Terms of Service', link: '/legal/terms-of-service' }
];

