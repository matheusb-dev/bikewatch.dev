// data.js

const productData = {
    'apple-watch': {
        header: "ANÁLISE PROFUNDA: <strong>APPLE WATCH S9 LTE</strong>",
        sections: [
            {
                id: 'watch-s9',
                title: 'S9 LTE: O QUE VOCÊ PRECISA SABER',
                specs: [
                    'Chip: S9 SiP com Neural Engine de 4 núcleos.',
                    'Tela: Tela Sempre Ativa (Always-On) com brilho de até 2000 nits.',
                    'Conectividade: GPS + Cellular (LTE).',
                    'Recursos: ECG, Oxigenação do Sangue, Detecção de Queda e Acidente.',
                    'Bateria: Até 18 horas (36 horas no modo de pouca energia).'
                ]
            }
        ]
    },
    'airpods': {
        header: "FOCO TOTAL: AIRPODS 3 PRO",
        sections: [
            {
                id: 'airpods-3-pro',
                title: 'AIRPODS 3 PRO: SOM DE OUTRO MUNDO',
                specs: [
                    'Áudio: Áudio Espacial Personalizado com Rastreamento Dinâmico da Cabeça.',
                    'Cancelamento: Cancelamento Ativo de Ruído (ANC) e Modo Transparência.',
                    'Bateria: Até 6 horas de audição (30h com estojo de recarga MagSafe).',
                    'Resistência: IPX4 (fones e estojo) contra suor e água.'
                ]
            }
        ]
    },
    'samsung': {
        header: "MONITORAMENTO DE OUTRO NÍVEL: <strong>GALAXY WATCH 5 PRO</strong>",
        sections: [
            {
                id: 'watch-5-pro',
                title: 'GALAXY WATCH 5 PRO: O RELÓGIO AVENTUREIRO',
                specs: [
                    'Material: Titânio com tela de Cristal de Safira.',
                    'Bateria: 590 mAh (longa duração).',
                    'Sensor: Sensor BioActive (mede impedância bioelétrica, ECG e frequência cardíaca).',
                    'Navegação: Rota de Treino e GPS de volta (Track Back).',
                    'SO: Wear OS Powered by Samsung.'
                ]
            }
        ]
    },
    'blogs': { 
        header: "BLOG | ARQUIVO: LU CAS COEL HO",
        sections: [
            {
                id: 'posts',
                title: 'POSTS COMPLETOS',
                posts: [
                    { date: '2025-05-07', title: 'Cool things we can do with automated workflows', link: '#' },
                    { date: '2024-09-01', title: 'August 2024', link: '#' },
                    { date: '2024-08-05', title: 'July 2024', link: '#' },
                    { date: '2024-07-13', title: 'What happened to Softwool?', link: '#' },
                    { date: '2024-05-16', title: 'Uncertainty', link: '#' },
                    { date: '2024-02-21', title: "I'm making a commercial game!", link: '#' },
                ]
            }
        ]
    },
    'gpx-routes': { 
        header: "ROTAS GPX: Aventura e Performance",
        sections: [
            {
                id: 'strava-routes',
                title: 'MINHAS ROTAS DE BIKE (STRAVA)',
                posts: [ 
                    { date: '2024-06-25', title: 'Pedal Urbano: Nova Esperança', link: 'https://www.strava.com/activities/16406242097' },
                    { date: '2024-06-15', title: 'Subida da Serra Dourada - Treino de Resistência', link: 'https://www.strava.com/activities/EXEMPLO_ROTA_2' },
                    { date: '2024-06-01', title: 'Circuito do Lago - 50km Rápido', link: 'https://www.strava.com/activities/EXEMPLO_ROTA_3' }
                ]
            }
        ]
    }
};

// ESSENCIAL: Permite que o server.js importe 'productData'
module.exports = { productData };