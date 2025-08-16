import { PortfolioData } from './portfolio'
import { getAssetPath } from '../utils/config';

export const portfolioDataEn: PortfolioData = {
  header: {
    name: "Kerim",
    role: "Frontend Developer",
          tagline: "Frontend Developer with 5+ years of experience creating high-load web applications and technical team leadership",
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
      description: "XPay is a high-load payment system designed for secure online transactions, balance management, and integration with banking services. The system processes millions of transactions monthly, ensuring 99.9% uptime. The platform provides users with a convenient interface for making payments, tracking transaction history, and configuring financial tools. The architecture is built on microservices using REST API and RTK Query for efficient data handling.",
      achievements: [
        "Architecturally designed and successfully integrated a payment gateway, ensuring seamless processing of millions of transactions monthly",
        "Architecturally optimized application performance, reducing interface loading time by 30% through lazy loading, code splitting, and asynchronous resource loading",
        "Architecturally designed and enhanced system security by implementing additional data validation, suspicious activity monitoring, and OWASP Top 10 protection",
        "Architecturally designed API versioning scheme with the backend team, ensuring backward compatibility and smooth migration",
        "Architecturally designed and created a comprehensive testing system with Cypress for critical paths (85% coverage), including E2E tests for payment scenarios",
        "Architecturally designed and conducted refactoring from monolith to microservices, improving system scalability and maintainability"
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
        "Architectural User Interface Development": [
          "Architecturally designed and created an intuitive personal account interface with balance viewing, transaction history, and payment management capabilities",
          "Architecturally designed and implemented responsive and cross-browser layout using SCSS and modern approaches (CSS Grid, Flexbox)",
          "Architecturally designed and developed dynamic payment data input forms with validation, masking (cards, details), and sanitization"
        ],
        "Architectural Backend Integration": [
          "Architecturally designed and configured interaction with REST API for payment processing, transaction data retrieval, and real-time balance updates",
          "Architecturally optimized server requests using RTK Query, reducing redundant requests and improving caching"
        ],
        "Architectural Security and Performance": [
          "Architecturally designed and implemented protection against CSRF attacks, XSS, and mechanisms to prevent data leakage (CVC/CVV masking)",
          "Architecturally improved application performance through lazy loading, code splitting, caching, and rendering optimization",
          "Architecturally configured unit and integration testing of critical components using Jest and React Testing Library"
        ]
      }
    },
    {
      id: "kassa",
      company: "Kassa.cc",
      position: "Frontend Developer",
      period: "2022-2024",
      description: "Kassa.cc is a high-load platform for cryptocurrency exchange to fiat currencies with support for multiple payment systems. The system processes thousands of transactions daily, providing secure and fast exchange of Bitcoin, Ethereum, and other cryptocurrencies to rubles through SBP, bank cards, and e-wallets. The architecture is built on microservices using GraphQL for efficient data handling. The platform provides users with an intuitive interface for real-time rate tracking, exchange execution, and transaction history management.",
      achievements: [
        "Architecturally designed and implemented a code review system with automatic checking through ESLint, improving code quality by 40% and reducing critical bugs by 60%",
        "Developed and implemented a design token system in Figma with automatic synchronization in Storybook, accelerating UI component development by 60% and ensuring design consistency",
        "Conducted weekly architectural workshops for a team of 5 developers, leading to a 35% reduction in bugs and 25% increase in development speed",
        "Architecturally designed and implemented a feature flags system for gradual rollout of changes, reducing deployment time by 70% and lowering release risks",
        "Optimized development processes by transitioning from 2-week to 1-week sprints, increasing feature delivery speed by 40%",
        "Improved application performance by 45% through rendering optimization, virtualization for large lists, and efficient caching"
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
        "Technical Leadership and Architecture": [
          "Architecturally designed and led a team of 5 frontend developers, conducted code reviews and technical mentoring",
          "Coordination with backend team on API contracts, GraphQL schema design, and architectural decisions",
          "Conducting weekly architectural workshops for the team, implementing best practices and code standards"
        ],
        "High-Load Interface Development": [
          "Architecturally designed and created an intuitive interface for cryptocurrency exchange with real-time rate display through WebSocket",
          "Implementation of responsive layout with support for all modern browsers and mobile devices, optimization for high loads",
          "Development of data input forms with cryptocurrency address and banking details validation, implementation of masking and sanitization"
        ],
        "Security and Performance": [
          "Architecturally designed and implemented protection against CSRF attacks, XSS, and mechanisms to prevent data leakage",
          "Application performance optimization through lazy loading, virtualization, caching, and memoization",
          "Configuration of unit and integration testing of critical components using Jest and React Testing Library"
        ]
      }
    },
    {
      id: "logistar",
      company: "LogistAR",
      position: "Frontend Developer",
      period: "2021-2022",
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
    },
    {
      id: "smarthome",
      company: "SmartHome Central",
      position: "Frontend Developer",
      period: "2020-2021",
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
      telegram: "https://t.me/A7Kerim",
      email: "kerimabdulkerimov777@gmail.com"
    }
  }
}
