import { Zap, Shield, Heart, Coffee, Smile, Type, TabletSmartphone, CodeXml, X, Youtube, Terminal, AppWindow, Wifi, Computer, Webhook, Target } from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: Terminal,
                title: 'Manejo de Linux',
                description: 'Uso intermedio de la consola, Bash Scripting, uso de varias distribuciones, uso de herramientas para el Sistema, etc.'
            },
            {
                icon: AppWindow,
                title: 'Manejo de Windows',
                description: 'Uso intermedio de CMD y PowerShell, funcionalidades del sistema, fundamentos de Active Directory, etc.'
            },
            {
                icon: Wifi,
                title: 'Conocimiento de Redes Informáticas',
                description: 'Comprension básica de cableado, aplicación de diversos protocolos, estructura de la WAN y LAN, Hacking Wi-Fi etico.'
            },
            {
                icon: Computer,
                title: 'Fundamentos de CTFs',
                description: 'Contacto inicial con diversas máquinas CTFs.'
            },
            {
                icon: CodeXml,
                title: 'HTML y CSS',
                description: 'Fundamentos de Teoria Web.'
            },
            {
                icon: Target,
                title: 'Red Team Hat',
                description: 'Habilidades de Red Team desarrolladas.'
            }
        ]
    },
    secondary: {
        id: 'secondary',
        features: [
            {
                icon: Heart,
                title: 'Made with Love',
                description: 'Crafted with attention to detail'
            },
            {
                icon: Coffee,
                title: 'Always Fresh',
                description: 'Regular updates and improvements'
            },
            {
                icon: Smile,
                title: 'User Friendly',
                description: 'Intuitive and easy to use'
            }
        ]
    }
};
