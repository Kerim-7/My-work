import { PortfolioData } from './portfolio'
import { getAssetPath } from '../utils/config';

export const portfolioDataIt: PortfolioData = {
  header: {
    name: "Kerim",
    role: "Frontend Developer",
          tagline: "Frontend Developer con oltre 5 anni di esperienza nella creazione di applicazioni web ad alto carico e leadership tecnica di team",
    phone: "+79286270754",
    email: "kerimabdulkerimov777@gmail.com",
    avatar: getAssetPath("assets/avatar.jpg")
  },
  experience: [
    {
      id: "xpay",
      company: "XPay",
      position: "Frontend Developer",
      period: "2024-2025",
      description: "XPay è un sistema di pagamento ad alto carico progettato per transazioni online sicure, gestione del saldo e integrazione con servizi bancari. Il sistema elabora milioni di transazioni mensilmente, garantendo un uptime del 99.9%. La piattaforma fornisce agli utenti un'interfaccia conveniente per effettuare pagamenti, tracciare la cronologia delle transazioni e configurare strumenti finanziari. L'architettura è costruita su microservizi utilizzando REST API e RTK Query per una gestione efficiente dei dati.",
      achievements: [
        "Progettato architettonicamente e integrato con successo un gateway di pagamento, garantendo l'elaborazione senza interruzioni di milioni di transazioni mensilmente",
        "Ottimizzato architettonicamente le prestazioni dell'applicazione, riducendo il tempo di caricamento dell'interfaccia del 30% attraverso lazy loading, code splitting e caricamento asincrono delle risorse",
        "Progettato architettonicamente e migliorato la sicurezza del sistema implementando validazione aggiuntiva dei dati, monitoraggio delle attività sospette e protezione OWASP Top 10",
        "Progettato architettonicamente lo schema di versioning API con il team backend, garantendo compatibilità all'indietro e migrazione fluida",
        "Progettato architettonicamente e creato un sistema di test completo con Cypress per percorsi critici (85% coverage), inclusi test E2E per scenari di pagamento",
        "Progettato architettonicamente e condotto il refactoring da monolite a microservizi, migliorando scalabilità e manutenibilità del sistema"
      ],
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
        "Sviluppo Architetturale dell'Interfaccia Utente": [
          "Progettato architettonicamente e creato un'interfaccia intuitiva dell'account personale con possibilità di visualizzazione del saldo, cronologia delle transazioni e gestione dei pagamenti",
          "Progettato architettonicamente e implementato layout responsive e cross-browser utilizzando SCSS e approcci moderni (CSS Grid, Flexbox)",
          "Progettato architettonicamente e sviluppato moduli dinamici di inserimento dati di pagamento con validazione, mascheramento (carte, dettagli) e sanitizzazione"
        ],
        "Integrazione Architetturale con Backend": [
          "Progettato architettonicamente e configurato l'interazione con REST API per l'elaborazione dei pagamenti, il recupero dei dati delle transazioni e l'aggiornamento del saldo in tempo reale",
          "Ottimizzato architettonicamente le richieste al server utilizzando RTK Query, riducendo le richieste ridondanti e migliorando il caching"
        ],
        "Sicurezza e Prestazioni Architetturali": [
          "Progettato architettonicamente e implementato protezione contro attacchi CSRF, XSS e meccanismi per prevenire la perdita di dati (mascheramento CVC/CVV)",
          "Migliorato architettonicamente le prestazioni dell'applicazione attraverso lazy loading, code splitting, caching e ottimizzazione del rendering",
          "Configurato architettonicamente test unitari e di integrazione di componenti critici utilizzando Jest e React Testing Library"
        ]
      }
    },
    {
      id: "kassa",
      company: "Kassa.cc",
      position: "Frontend Developer",
      period: "2022-2024",
      description: "Kassa.cc è una piattaforma ad alto carico per lo scambio di criptovalute con valute fiat con supporto per sistemi di pagamento multipli. Il sistema elabora migliaia di transazioni giornalmente, fornendo scambio sicuro e veloce di Bitcoin, Ethereum e altre criptovalute in rubli attraverso SBP, carte bancarie e portafogli elettronici. L'architettura è costruita su microservizi utilizzando GraphQL per una gestione efficiente dei dati. La piattaforma fornisce agli utenti un'interfaccia intuitiva per il tracciamento dei tassi in tempo reale, l'esecuzione di scambi e la gestione della cronologia delle transazioni.",
      achievements: [
        "Progettato architettonicamente e implementato un sistema di code review con controllo automatico attraverso ESLint, migliorando la qualità del codice del 40% e riducendo i bug critici del 60%",
        "Sviluppato e implementato un sistema di design token in Figma con sincronizzazione automatica in Storybook, accelerando lo sviluppo di componenti UI del 60% e garantendo consistenza del design",
        "Condotto workshop architetturali settimanali per un team di 5 sviluppatori, portando a una riduzione del 35% dei bug e un aumento del 25% della velocità di sviluppo",
        "Progettato architettonicamente e implementato un sistema di feature flags per il rollout graduale delle modifiche, riducendo il tempo di deployment del 70% e abbassando i rischi di rilascio",
        "Ottimizzato i processi di sviluppo passando da sprint di 2 settimane a sprint di 1 settimana, aumentando la velocità di consegna delle funzionalità del 40%",
        "Migliorato le prestazioni dell'applicazione del 45% attraverso ottimizzazione del rendering, virtualizzazione per liste grandi e caching efficiente"
      ],
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
        "Leadership Tecnica e Architettura": [
          "Progettato architettonicamente e guidato un team di 5 sviluppatori frontend, condotto code review e mentoring tecnico",
          "Coordinamento con il team backend sui contratti API, progettazione di schemi GraphQL e decisioni architetturali",
          "Condurre workshop architetturali settimanali per il team, implementare best practices e standard di codice"
        ],
        "Sviluppo di Interfacce ad Alto Carico": [
          "Progettato architettonicamente e creato un'interfaccia intuitiva per lo scambio di criptovalute con visualizzazione dei tassi in tempo reale attraverso WebSocket",
          "Implementazione di layout responsive con supporto per tutti i browser moderni e dispositivi mobili, ottimizzazione per carichi elevati",
          "Sviluppo di moduli di inserimento dati con validazione di indirizzi di criptovalute e dettagli bancari, implementazione di mascheramento e sanitizzazione"
        ],
        "Sicurezza e Prestazioni": [
          "Progettato architettonicamente e implementato protezione contro attacchi CSRF, XSS e meccanismi per prevenire la perdita di dati",
          "Ottimizzazione delle prestazioni dell'applicazione attraverso lazy loading, virtualizzazione, caching e memoizzazione",
          "Configurazione di test unitari e di integrazione di componenti critici utilizzando Jest e React Testing Library"
        ]
      }
    },
    {
      id: "logistar",
      company: "LogistAR",
      position: "Frontend Developer",
      period: "2021-2022",
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
      id: "smarthome",
      company: "SmartHome Central",
      position: "Frontend Developer",
      period: "2020-2021",
      description: "Un servizio online innovativo specializzato nella vendita e gestione di dispositivi intelligenti per la casa moderna. La piattaforma fornisce agli utenti un'interfaccia web conveniente per selezionare, configurare e ordinare dispositivi intelligenti, completamente adattati alle esigenze individuali. Ogni dispositivo è dotato di un'interfaccia utente intuitiva che consente un controllo flessibile dei parametri e delle modalità operative. Il controller integrato fornisce un controllo affidabile e semplice su tutte le funzioni del dispositivo, rendendo il processo di interazione il più confortevole e sicuro possibile per l'utente. Il progetto è focalizzato sulla creazione di un ecosistema unificato per la gestione della casa intelligente, combinando una vasta gamma di dispositivi e standard di sicurezza moderni.",
      achievements: [
        "Integrato con successo il sistema di pagamento PayPal, fornendo pagamenti online sicuri e convenienti per gli utenti",
        "Implementato protezione completa dei dati utente utilizzando crittografia, HTTPS e standard di sicurezza moderni",
        "Implementato controlli aggiuntivi per le vulnerabilità e monitoraggio delle attività sospette per prevenire potenziali attacchi",
        "Migliorato significativamente la stabilità e le prestazioni della piattaforma attraverso ottimizzazione del codice e correzione di bug critici",
        "Coperto il progetto con test (dal 20% → 60%+ coverage)",
        "Creato un corso interno sulle ottimizzazioni React",
        "Sviluppato un sistema KPI per la qualità del codice"
      ],
      technologies: [
        "TypeScript",
        "React",
        "Redux Toolkit", 
        "SCSS",
        "Storybook",
        "RTK",
        "RTK Query"
      ],
      responsibilities: {
        "Sviluppo della Pagina Principale": [
          "Layout cross-browser e responsive considerando standard UI/UX moderni",
          "Ottimizzazione del codice per migliorare le prestazioni e la velocità di caricamento",
          "Correzione di bug e implementazione di best practices",
          "Ottimizzazione dei meta tag per migliorare la SEO"
        ],
        "Lavoro con il Catalogo Prodotti": [
          "Implementazione di schede prodotto e costruzione di una griglia flessibile per la visualizzazione dell'assortimento",
          "Implementazione del filtraggio dei prodotti per categorie e parametri",
          "Sviluppo e integrazione del sistema di pagamento, inclusa la connessione del gateway PayPal",
          "Condurre test unitari e di integrazione dei componenti"
        ],
        "Pagina Utente": [
          "Creazione di moduli di registrazione e autorizzazione con validazione dei dati",
          "Implementazione della funzionalità di modifica dei dati utente",
          "Implementazione dell'autenticazione a due fattori per una maggiore sicurezza",
          "Protezione contro attacchi automatizzati (bot) utilizzando metodi moderni"
        ]
      }
    }
  ],
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
      telegram: "https://t.me/A7Kerim",
      email: "kerimabdulkerimov777@gmail.com"
    }
  }
}
