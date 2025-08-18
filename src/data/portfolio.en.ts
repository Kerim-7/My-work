import { PortfolioData } from './portfolio'
import { getAssetPath } from '../utils/config';

export const portfolioDataEn: PortfolioData = {
  header: {
    name: "Kerim",
    role: "Frontend Developer",
    tagline: "Frontend Developer with 5+ years of experience creating high-load web applications and technical team leadership",
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
      description: "XPay is a high-load payment system designed for secure online transactions, balance management, and integration with banking services. The system processes millions of transactions monthly, ensuring 99.9% uptime. The platform provides users with a convenient interface for making payments, tracking transaction history, and configuring financial tools. The architecture is built on microservices using REST API and RTK Query for efficient data handling.",
      achievements: {
        "Interface Development": [
          "Designed and implemented personal account (balance, transaction history, payment management).",
          "Created adaptive forms with validation and masking (cards, details) for secure input.",
          "Optimized layout with CSS Grid / Flexbox, ensuring cross-browser compatibility."
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
        "Integration and Optimization": [
          "Configured REST API interaction for payments, balance, and transactions.",
          "Improved caching and reduced unnecessary requests with RTK Query.",
          "Accelerated loading by 30% through lazy loading, code splitting, and asynchronous loading."
        ],
        "Security and Testing": [
          "Implemented protection against CSRF, XSS, CVV/CVC masking.",
          "Added monitoring of suspicious operations and OWASP Top 10 protection.",
          "Developed testing (Jest, RTL, Cypress) with 85% coverage of key scenarios."
        ],
        "Architectural Improvements": [
          "Conducted refactoring from monolith to microservices, improving scalability.",
          "Designed API versioning for backward compatibility.",
          "Automated E2E tests for payment processes."
        ]
      }
    },
    {
      id: "kassa",
      company: "Kassa.cc",
      position: "Frontend Developer",
      period: "2022-2024",
      description: "Kassa.cc — cryptocurrency exchange platform. High-load platform for cryptocurrency exchange (BTC, ETH, etc.) to fiat (rubles via SBP, cards, e-wallets). Processes thousands of transactions daily with microservice architecture on GraphQL and WebSocket for real-time.",
      achievements: {
        "Technical Leadership": [
          "Led a team of 5 frontend developers (code review, mentoring, architectural workshops).",
          "Designed GraphQL schemas and API contracts coordinated with backend.",
          "Implemented automated code review (ESLint), reducing bugs by 60% and improving code quality by 40%."
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
        "Interface Development": [
          "Created intuitive exchange with dynamic rates via WebSocket.",
          "Developed adaptive forms with crypto-address and banking details validation.",
          "Implemented design tokens (Figma → Storybook), accelerating UI development by 60%."
        ],
        "Optimization and Security": [
          "Improved performance by 45% through list virtualization, lazy loading, and memoization.",
          "Optimized GraphQL caching for fast data handling.",
          "Added protection against CSRF/XSS, masking sensitive data."
        ],
        "Processes and Releases": [
          "Introduced feature flags for gradual rollout, reducing release risks by 70%.",
          "Transitioned team to 1-week sprints, accelerating feature delivery by 40%.",
          "Configured E2E tests (Jest, RTL) for critical scenarios."
        ]
      }
    },
    {
      id: "smarthome",
      company: "SmartHome Central",
      position: "Frontend Developer",
      period: "2022-2023",
      description: "An innovative online service specializing in the sale and management of smart devices for the modern home. The platform provides users with a convenient web interface for selecting, configuring, and ordering smart devices, fully adapted to individual needs. Each device is equipped with an intuitive user interface that allows flexible control of parameters and operating modes. The built-in controller provides reliable and simple control over all device functions, making the interaction process as comfortable and safe as possible for the user. The project is focused on creating a unified ecosystem for smart home management, combining a wide range of devices and modern security standards.",
      achievements: [
        "Successfully integrated PayPal payment system, providing secure and convenient online payments for users",
        "Implemented comprehensive user data protection using encryption, HTTPS, and modern security standards",
        "Implemented additional vulnerability checks and suspicious activity monitoring to prevent potential attacks",
        "Significantly improved platform stability and performance through code optimization and critical bug fixes",
        "Covered the project with tests (from 20% → 60%+ coverage)",
        "Created an internal course on React optimizations",
        "Developed a KPI system for code quality"
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
        "Main Page Development": [
          "Cross-browser and responsive layout considering modern UI/UX standards",
          "Code optimization for performance and loading speed improvement",
          "Bug fixes and best practices implementation",
          "Meta tag optimization for SEO improvement"
        ],
        "Product Catalog Work": [
          "Implementation of product cards and building a flexible grid for assortment display",
          "Implementation of product filtering by categories and parameters",
          "Development and integration of payment system, including PayPal gateway connection",
          "Conducting unit and integration testing of components"
        ],
        "User Page": [
          "Creation of registration and authorization forms with data validation",
          "Implementation of user data change functionality",
          "Implementation of two-factor authentication for enhanced security",
          "Protection against automated attacks (bots) using modern methods"
        ]
      }
    },
    {
      id: "logistar",
      company: "LogistAR",
      position: "Frontend Developer",
      period: "2020-2021",
      description: "An innovative web platform designed to optimize cargo transportation processes between warehouses across Russia. The system is developed to automate and simplify the work of employees involved in organizing and controlling delivery, and supports various user roles: administrator, carrier, key user, and accountant.",
      achievements: [
        "Optimized loading and display of large volumes of reports by implementing pagination and staged data loading",
        "Significantly simplified the user interface by implementing intuitive icons and improving navigation",
        "Improved administrative panel performance with a large number of users by implementing efficient data caching",
        "Development of a fitness mobile application on React Native (from idea to publication in App Store and Google Play)",
        "Integration with REST API, push notification setup, analytics, and authorization",
        "Creation of adaptive web interfaces for internal company services"
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
        "Interface Development": [
          "Development of registration and authorization forms with advanced user data validation",
          "Creation of an administrative panel for managing user roles and access control",
          "Implementation of order display and detailed view functionality using interactive tables"
        ],
        "Integration and Cartography": [
          "Implementation of the ability to add new orders with route visualization on the map (React Leaflet)",
          "Development of a reports page with the ability to print documents directly from the platform interface"
        ],
        "Testing and Optimization": [
          "Conducting manual testing, identifying and promptly fixing bugs",
          "Performance and user experience optimization"
        ]
      }
    }
  ],
  education: [
    {
      degree: "Higher Education",
      institution: "Taganrog Institute of Technology, Southern Federal University",
      period: "2025",
      location: "Taganrog",
      department: "Institute of Radio Engineering Systems and Control",
      specialization: "Computer Control Technologies in Robotics and Mechatronics"
    }
  ],
  aboutMe: {
    intro: [
      "I am a Frontend Developer with 5+ years of experience who sees code not just as lines, but as a tool for creating convenient, fast, and secure digital products. My approach combines technical depth with attention to detail: from page loading optimization to security hardening.",
      "Why frontend? I enjoy being at the intersection of technology and user experience. Every pixel, animation, or micro‑interaction is a story that must work flawlessly."
    ],
    keyCompetencies: [
      "Development of SPAs and complex interactive interfaces",
      "Performance optimization (Core Web Vitals, bundles, lazy loading)",
      "Modern stacks (React/Next.js, Vue/Nuxt, Svelte/SvelteKit)",
      "Backend integration (REST/GraphQL, WebSockets)",
      "Cross-browser and mobile layout"
    ],
    hardSkills: {
      main: [
        "JavaScript/TypeScript (ES6+, strict typing)",
        "React (Hooks, Redux Toolkit, Zustand)",
        "Next.js (SSR, SSG, ISR)",
        "CSS (Tailwind, SCSS, CSS Modules, styled-components)",
        "Testing (Jest, React Testing Library, Cypress)"
      ],
      additional: [
        "Animations (Framer Motion, GSAP)",
        "Build tools (Vite, Webpack)",
        "CI/CD (GitHub Actions, Docker)",
        "Design systems (Figma, Storybook)"
      ]
    },
    softSkills: [
      "UX-oriented — understanding the connection between code and user experience",
      "Critical thinking — finding optimal solutions",
      "Teamwork — effective collaboration with backend and designers",
      "Flexibility — quick adoption of new technologies"
    ],
    principles: [
      "Performance is a feature",
      "Types > any",
      "Tests are part of the process",
      "Documentation of key decisions"
    ],
    additionalSkills: [
      "English (Intermediate)",
      "Basic backend (Express, API routes)",
      "SEO optimization",
      "Working with design layouts (Figma, Photoshop)",
      "Analysis tools (Lighthouse, Sentry)"
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
      title: "Tools",
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
      title: "Other",
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
    copyright: "© 2025 Kerim Abdulkerimov. All rights reserved.",
    title: "Let's work together!",
    text: "I'm always open to new opportunities and interesting projects. Don't hesitate to contact me!",
    socials: {
      github: "#",
      linkedin: "#",
      telegram: "https://t.me/kerim_ab ",
      email: "abdulkerimovk6@gmail.com"
    }
  }
}
