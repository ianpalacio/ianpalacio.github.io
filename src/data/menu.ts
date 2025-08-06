// src/data/menu.ts

export const headerMenu = [
    { name: 'Blog', link: '/blog' },
    { name: 'Links', link: '/style-guide', showArrow: true,
        children: [
            { name: 'GitHub', link: '/style-guide#typography' },
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

