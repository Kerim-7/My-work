import { PortfolioData } from './portfolio'
import { getAssetPath } from '../utils/config';

export const portfolioDataIt: PortfolioData = {
  header: {
    name: "Kerim",
    role: "Frontend Developer",
    tagline: "Frontend Developer con oltre 5 anni di esperienza nella creazione di applicazioni web ad alto carico e leadership tecnica di team",
    phone: "+79286270754",
    email: "abdulkerimovk6@gmail.com",
    telegram: "https://t.me/kerim_ab",
    avatar: getAssetPath("assets/avatar.jpg")
  },
  experience: [
    {
      id: "xpay",
      company: "XPay",
      position: "Frontend Developer",
      period: "2024-2025",
      description: "XPay è un sistema di pagamento ad alto carico progettato per transazioni online sicure, gestione del saldo e integrazione con servizi bancari. Il sistema elabora milioni di transazioni mensilmente, garantendo un uptime del 99.9%. La piattaforma fornisce agli utenti un'interfaccia conveniente per effettuare pagamenti, tracciare la cronologia delle transazioni e configurare strumenti finanziari. L'architettura è costruita su microservizi utilizzando REST API e RTK Query per una gestione efficiente dei dati.",
      achievements: {
        "Sviluppo dell'Interfaccia": [
          "Progettato e implementato account personale (saldo, cronologia transazioni, gestione pagamenti).",
          "Creato moduli adattivi con validazione e mascheramento (carte, dettagli) per inserimento sicuro.",
          "Ottimizzato layout con CSS Grid / Flexbox, garantendo compatibilità cross-browser."
        ]
      },
      technologies: [
        "TypeScript",
        "React", 
        "Redux Toolkit",
        "RTK Query",
        "REST API",
        "SCSS",
        "Webpack",
        "Jest"
      ],
      responsibilities: {
        "Integrazione e Ottimizzazione": [
          "Configurato interazione REST API per pagamenti, saldo e transazioni.",
          "Migliorato caching e ridotto richieste non necessarie con RTK Query.",
          "Accelerato caricamento del 30% attraverso lazy loading, code splitting e caricamento asincrono."
        ],
        "Sicurezza e Test": [
          "Implementato protezione contro CSRF, XSS, mascheramento CVV/CVC.",
          "Aggiunto monitoraggio operazioni sospette e protezione OWASP Top 10.",
          "Sviluppato test (Jest, RTL, Cypress) con copertura 85% scenari chiave."
        ],
        "Miglioramenti Architetturali": [
          "Condotto refactoring da monolite a microservizi, migliorando scalabilità.",
          "Progettato versioning API per compatibilità all'indietro.",
          "Automatizzato test E2E per processi di pagamento."
        ]
      }
    },
    {
      id: "kassa",
      company: "Kassa.cc",
      position: "Frontend Developer",
      period: "2022-2024",
      description: "Kassa.cc — piattaforma di scambio criptovalute. Piattaforma ad alto carico per lo scambio di criptovalute (BTC, ETH, ecc.) con fiat (rubli tramite SBP, carte, portafogli elettronici). Elabora migliaia di transazioni giornalmente con architettura microservizi su GraphQL e WebSocket per tempo reale.",
      achievements: {
        "Leadership Tecnica": [
          "Guidato team di 5 sviluppatori frontend (code review, mentoring, workshop architetturali).",
          "Progettato schemi GraphQL e contratti API coordinati con backend.",
          "Implementato code review automatizzato (ESLint), riducendo bug del 60% e migliorando qualità codice del 40%."
        ]
      },
      technologies: [
        "TypeScript",
        "React",
        "Redux Toolkit", 
        "GraphQL",
        "Storybook",
        "ESLint",
        "Jest",
        "WebSocket"
      ],
      responsibilities: {
        "Sviluppo dell'Interfaccia": [
          "Creato exchange intuitivo con tassi dinamici tramite WebSocket.",
          "Sviluppato moduli adattivi con validazione indirizzi crypto e dettagli bancari.",
          "Implementato design token (Figma → Storybook), accelerando sviluppo UI del 60%."
        ],
        "Ottimizzazione e Sicurezza": [
          "Migliorato prestazioni del 45% attraverso virtualizzazione liste, lazy loading e memoizzazione.",
          "Ottimizzato caching GraphQL per gestione dati veloce.",
          "Aggiunto protezione contro CSRF/XSS, mascheramento dati sensibili."
        ],
        "Processi e Rilascio": [
          "Introdotto feature flags per rollout graduale, riducendo rischi rilascio del 70%.",
          "Trasferito team a sprint di 1 settimana, accelerando consegna funzionalità del 40%.",
          "Configurato test E2E (Jest, RTL) per scenari critici."
        ]
      }
    },
    {
      id: "smarthome",
      company: "SmartHome Central",
      position: "Frontend Developer",
      period: "2022-2023",
      description: "Una piattaforma web innovativa progettata per ottimizzare i processi di trasporto merci tra magazzini in tutta la Russia. Il sistema è sviluppato per automatizzare e semplificare il lavoro dei dipendenti coinvolti nell'organizzazione e nel controllo della consegna, e supporta vari ruoli utente: amministratore, trasportatore, utente chiave e contabile.",
      achievements: [
        "Ottimizzato il caricamento e la visualizzazione di grandi volumi di report implementando paginazione e caricamento graduale dei dati",
        "Semplificato significativamente l'interfaccia utente implementando icone intuitive e migliorando la navigazione",
        "Migliorato le prestazioni del pannello amministrativo con un gran numero di utenti implementando caching efficiente dei dati",
        "Sviluppo di un'applicazione mobile per fitness su React Native (dall'idea alla pubblicazione in App Store e Google Play)",
        "Integrazione con REST API, configurazione di notifiche push, analytics e autorizzazione",
        "Creazione di interfacce web adattive per servizi interni aziendali"
      ],
      technologies: [
        "HTML",
        "CSS", 
        "React",
        "TypeScript",
        "Git",
        "REST API",
        "SASS/SCSS",
        "React Leaflet",
        "Bootstrap"
      ],
      responsibilities: {
        "Sviluppo dell'Interfaccia": [
          "Sviluppo di moduli di registrazione e autorizzazione con validazione avanzata dei dati utente",
          "Creazione di un pannello amministrativo per la gestione dei ruoli utente e il controllo degli accessi",
          "Implementazione della funzionalità di visualizzazione e visualizzazione dettagliata degli ordini utilizzando tabelle interattive"
        ],
        "Integrazione e Cartografia": [
          "Implementazione della possibilità di aggiungere nuovi ordini con visualizzazione del percorso sulla mappa (React Leaflet)",
          "Sviluppo di una pagina di report con possibilità di stampare documenti direttamente dall'interfaccia della piattaforma"
        ],
        "Test e Ottimizzazione": [
          "Condurre test manuali, identificare e correggere prontamente i bug",
          "Ottimizzazione delle prestazioni e dell'esperienza utente"
        ]
      }
    },
    {
      id: "logistar",
      company: "LogistAR",
      position: "Frontend Developer",
      period: "2020-2021",
      description: "Una piattaforma web innovativa progettata per ottimizzare i processi di trasporto merci tra magazzini in tutta la Russia. Il sistema è sviluppato per automatizzare e semplificare il lavoro dei dipendenti coinvolti nell'organizzazione e nel controllo della consegna, e supporta vari ruoli utente: amministratore, trasportatore, utente chiave e contabile.",
      achievements: [
        "Ottimizzato il caricamento e la visualizzazione di grandi volumi di report implementando la paginazione e il caricamento graduale dei dati",
        "Semplificato significativamente l'interfaccia utente implementando icone intuitive e migliorando la navigazione",
        "Migliorato le prestazioni del pannello amministrativo con un gran numero di utenti implementando una cache dati efficiente",
        "Sviluppo di un'applicazione mobile fitness su React Native (dall'idea alla pubblicazione in App Store e Google Play)",
        "Integrazione con REST API, configurazione notifiche push, analytics e autorizzazione",
        "Creazione di interfacce web adattive per servizi interni aziendali"
      ],
      technologies: [
        "HTML",
        "CSS", 
        "React",
        "TypeScript",
        "Git",
        "REST API",
        "SASS/SCSS",
        "React Leaflet",
        "Bootstrap"
      ],
      responsibilities: {
        "Sviluppo dell'Interfaccia": [
          "Sviluppo di moduli di registrazione e autorizzazione con validazione avanzata dei dati utente",
          "Creazione di un pannello amministrativo per la gestione dei ruoli utente e il controllo degli accessi",
          "Implementazione della funzionalità di visualizzazione e visualizzazione dettagliata degli ordini utilizzando tabelle interattive"
        ],
        "Integrazione e Cartografia": [
          "Implementazione della possibilità di aggiungere nuovi ordini con visualizzazione del percorso sulla mappa (React Leaflet)",
          "Sviluppo di una pagina di report con la possibilità di stampare documenti direttamente dall'interfaccia della piattaforma"
        ],
        "Test e Ottimizzazione": [
          "Condurre test manuali, identificare e correggere prontamente i bug",
          "Ottimizzazione delle prestazioni e dell'esperienza utente"
        ]
      }
    }
  ],
  education: [
    {
      degree: "Istruzione Superiore",
      institution: "Istituto Tecnologico di Taganrog, Università Federale del Sud",
      period: "2025",
      location: "Taganrog",
      department: "Istituto di Sistemi di Ingegneria Radio e Controllo",
      specialization: "Tecnologie Informatiche di Controllo in Robotica e Meccatronica"
    }
  ],
  aboutMe: {
    intro: [
      "Sono un Frontend Developer con oltre 5 anni di esperienza: vedo il codice non solo come righe, ma come uno strumento per creare prodotti digitali comodi, veloci e sicuri. Il mio approccio combina profondità tecnica e attenzione ai dettagli: dall'ottimizzazione del caricamento delle pagine al rafforzamento della sicurezza.",
      "Perché il frontend? Mi piace stare all'incrocio tra tecnologia ed esperienza utente. Ogni pixel, animazione o micro‑interfaccia è una storia che deve funzionare in modo impeccabile."
    ],
    keyCompetencies: [
      "Sviluppo di SPA e interfacce interattive complesse",
      "Ottimizzazione delle prestazioni (Core Web Vitals, bundle, caricamento lazy)",
      "Stack moderni (React/Next.js, Vue/Nuxt, Svelte/SvelteKit)",
      "Integrazione backend (REST/GraphQL, WebSockets)",
      "Layout cross-browser e mobile"
    ],
    hardSkills: {
      main: [
        "JavaScript/TypeScript (ES6+, tipizzazione rigorosa)",
        "React (Hooks, Redux Toolkit, Zustand)",
        "Next.js (SSR, SSG, ISR)",
        "CSS (Tailwind, SCSS, CSS Modules, styled-components)",
        "Testing (Jest, React Testing Library, Cypress)"
      ],
      additional: [
        "Animazioni (Framer Motion, GSAP)",
        "Strumenti di build (Vite, Webpack)",
        "CI/CD (GitHub Actions, Docker)",
        "Sistemi di design (Figma, Storybook)"
      ]
    },
    softSkills: [
      "Orientamento UX — comprensione della connessione tra codice ed esperienza utente",
      "Pensiero critico — ricerca di soluzioni ottimali",
      "Lavoro di squadra — collaborazione efficace con backend e designer",
      "Flessibilità — rapida adozione di nuove tecnologie"
    ],
    principles: [
      "Le prestazioni sono una caratteristica",
      "Tipi > any",
      "I test sono parte del processo",
      "Documentazione delle decisioni chiave"
    ],
    additionalSkills: [
      "Inglese (Intermedio)",
      "Backend di base (Express, API routes)",
      "Ottimizzazione SEO",
      "Lavoro con layout di design (Figma, Photoshop)",
      "Strumenti di analisi (Lighthouse, Sentry)"
    ]
  },
  skills: [
    {
      id: "frontend",
      title: "Frontend",
      skills: [
        "JavaScript (ES6+)",
        "TypeScript",
        "React",
        "Next.js",
        "Redux Toolkit",
        "RTK Query",
        "HTML5/CSS3"
      ]
    },
    {
      id: "testing",
      title: "Testing",
      skills: [
        "Jest",
        "Cypress",
        "React Testing Library",
        "Unit Testing",
        "E2E Testing"
      ]
    },
    {
      id: "tools",
      title: "Strumenti",
      skills: [
        "Git",
        "Webpack",
        "Docker",
        "Figma",
        "Storybook",
        "Jira"
      ]
    },
    {
      id: "other",
      title: "Altri",
      skills: [
        "WebSocket",
        "GraphQL",
        "REST API",
        "CSP/XSS",
        "Web Vitals",
        "CI/CD"
      ]
    }
  ],
  footer: {
    copyright: "© 2025 Kerim Abdulkerimov. Tutti i diritti riservati.",
    title: "Lavoriamo insieme!",
    text: "Sono sempre aperto a nuove opportunità e progetti interessanti. Non esitare a contattarmi!",
    socials: {
      github: "#",
      linkedin: "#",
      telegram: "https://t.me/kerim_ab ",
      email: "abdulkerimovk6@gmail.com"
    }
  }
}
