import { PortfolioData } from './portfolio'
import { getAssetPath } from '../utils/config';

export const portfolioDataZh: PortfolioData = {
  header: {
    name: "凯里姆",
    role: "前端开发工程师",
    tagline: "拥有5年以上经验的前端开发工程师，专注于创建高负载网络应用程序和技术团队领导",
    phone: "+79286270754",
    email: "abdulkerimovk6@gmail.com",
    telegram: "https://t.me/kerim_ab",
    avatar: getAssetPath("assets/avatar.jpg")
  },
  experience: [
    {
      id: "xpay",
      company: "XPay",
      position: "前端开发工程师",
      period: "2024-2025",
      description: "XPay是一个高负载支付系统，专为安全在线交易、余额管理和银行服务集成而设计。该系统每月处理数百万笔交易，确保99.9%的正常运行时间。该平台为用户提供便捷的界面，用于进行支付、跟踪交易历史和配置金融工具。架构基于微服务构建，使用REST API和RTK Query进行高效的数据处理。",
      achievements: {
        "界面开发": [
          "设计并实现个人账户（余额、交易历史、支付管理）。",
          "创建具有验证和掩码（卡片、详情）的自适应表单，确保安全输入。",
          "使用CSS Grid / Flexbox优化布局，确保跨浏览器兼容性。"
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
        "集成和优化": [
          "配置REST API交互，用于支付、余额和交易。",
          "使用RTK Query改善缓存并减少不必要的请求。",
          "通过懒加载、代码分割和异步加载将加载速度提高30%。"
        ],
        "安全性和测试": [
          "实施针对CSRF、XSS的保护，CVV/CVC掩码。",
          "添加可疑操作监控和OWASP Top 10保护。",
          "开发测试（Jest、RTL、Cypress），关键场景覆盖率达85%。"
        ],
        "架构改进": [
          "进行从单体到微服务的重构，提高可扩展性。",
          "设计API版本控制，确保向后兼容性。",
          "自动化支付流程的E2E测试。"
        ]
      }
    },
    {
      id: "kassa",
      company: "Kassa.cc",
      position: "前端开发工程师",
      period: "2022-2024",
      description: "Kassa.cc — 加密货币交换平台。高负载平台，用于加密货币交换（BTC、ETH等）与法定货币（通过SBP、银行卡、电子钱包的卢布）。每天处理数千笔交易，使用GraphQL和WebSocket的微服务架构实现实时性。",
      achievements: {
        "技术领导": [
          "领导5名前端开发人员团队（代码审查、指导、架构研讨会）。",
          "设计与后端协调的GraphQL模式和API合同。",
          "实施自动化代码审查（ESLint），将错误减少60%，代码质量提高40%。"
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
        "界面开发": [
          "创建具有动态汇率的直观交换界面，通过WebSocket实现。",
          "开发具有加密货币地址和银行详情验证的自适应表单。",
          "实施设计令牌（Figma → Storybook），将UI开发速度提高60%。"
        ],
        "优化和安全性": [
          "通过列表虚拟化、懒加载和记忆化将性能提高45%。",
          "优化GraphQL缓存，实现快速数据处理。",
          "添加针对CSRF/XSS的保护，掩码敏感数据。"
        ],
        "流程和发布": [
          "引入功能标志进行逐步发布，将发布风险降低70%。",
          "将团队过渡到1周冲刺，将功能交付速度提高40%。",
          "配置关键场景的E2E测试（Jest、RTL）。"
        ]
      }
    },
    {
      id: "smarthome",
      company: "SmartHome Central",
      position: "前端开发工程师",
      period: "2022-2023",
      description: "一个创新的网络平台，旨在优化俄罗斯各地仓库之间的货物运输流程。该系统旨在自动化和简化参与组织和控制交付的员工工作，并支持各种用户角色：管理员、承运人、关键用户和会计师。",
      achievements: [
        "通过实施分页和分阶段数据加载优化大型报告的加载和显示",
        "通过实施直观图标和改进导航显著简化用户界面",
        "通过实施高效数据缓存改善大量用户的管理面板性能",
        "在React Native上开发健身移动应用程序（从想法到在App Store和Google Play发布）",
        "与REST API集成，设置推送通知、分析和授权",
        "为公司内部服务创建自适应网络界面"
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
        "界面开发": [
          "开发具有高级用户数据验证的注册和授权表单",
          "创建用于管理用户角色和访问控制的管理面板",
          "使用交互式表格实施订单显示和详细查看功能"
        ],
        "集成和制图": [
          "实施添加新订单的功能，在地图上可视化路线（React Leaflet）",
          "开发报告页面，能够直接从平台界面打印文档"
        ],
        "测试和优化": [
          "进行手动测试，识别并快速修复错误",
          "性能和用户体验优化"
        ]
      }
    },
    {
      id: "logistar",
      company: "LogistAR",
      position: "前端开发工程师",
      period: "2020-2021",
      description: "一个创新的网络平台，旨在优化俄罗斯各地仓库之间的货物运输流程。该系统旨在自动化和简化参与组织和控制交付的员工工作，并支持各种用户角色：管理员、承运人、关键用户和会计师。",
      achievements: [
        "通过实施分页和分阶段数据加载优化了大型报告的加载和显示",
        "通过实施直观的图标和改进导航显著简化了用户界面",
        "通过实施高效的数据缓存提高了大量用户的管理面板性能",
        "在React Native上开发健身移动应用程序（从想法到在App Store和Google Play发布）",
        "与REST API集成，推送通知设置，分析和授权",
        "为公司内部服务创建自适应Web界面"
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
        "界面开发": [
          "开发具有高级用户数据验证的注册和授权表单",
          "创建用于管理用户角色和访问控制的管理面板",
          "使用交互式表格实施订单显示和详细查看功能"
        ],
        "集成和制图": [
          "实施添加新订单的功能，在地图上可视化路线（React Leaflet）",
          "开发报告页面，能够直接从平台界面打印文档"
        ],
        "测试和优化": [
          "进行手动测试，识别并快速修复错误",
          "性能和用户体验优化"
        ]
      }
    }
  ],
  education: [
    {
      degree: "高等教育",
      institution: "塔甘罗格技术学院，南联邦大学",
      period: "2025",
      location: "塔甘罗格",
      department: "无线电工程系统与控制学院",
      specialization: "机器人技术与机电一体化中的计算机控制技术"
    }
  ],
  aboutMe: {
    intro: [
      "我是一名拥有5年以上经验的前端开发工程师，我把代码视为打造便捷、快速且安全的数字产品的工具，而不只是代码行。我的方法将技术深度与对细节的关注结合起来：从页面加载优化到安全防护。",
      "为什么选择前端？我喜欢站在技术与用户体验的交汇处。每一个像素、动画或微交互，都是一段需要完美运作的故事。"
    ],
    keyCompetencies: [
      "SPA和复杂交互界面的开发",
      "性能优化（Core Web Vitals、打包、懒加载）",
      "现代技术栈（React/Next.js、Vue/Nuxt、Svelte/SvelteKit）",
      "后端集成（REST/GraphQL、WebSockets）",
      "跨浏览器和移动端布局"
    ],
    hardSkills: {
      main: [
        "JavaScript/TypeScript（ES6+、严格类型）",
        "React（Hooks、Redux Toolkit、Zustand）",
        "Next.js（SSR、SSG、ISR）",
        "CSS（Tailwind、SCSS、CSS Modules、styled-components）",
        "测试（Jest、React Testing Library、Cypress）"
      ],
      additional: [
        "动画（Framer Motion、GSAP）",
        "构建工具（Vite、Webpack）",
        "CI/CD（GitHub Actions、Docker）",
        "设计系统（Figma、Storybook）"
      ]
    },
    softSkills: [
      "UX导向 — 理解代码与用户体验的联系",
      "批判性思维 — 寻找最优解决方案",
      "团队合作 — 与后端和设计师有效协作",
      "灵活性 — 快速掌握新技术"
    ],
    principles: [
      "性能就是功能",
      "类型 > any",
      "测试是过程的一部分",
      "关键决策的文档化"
    ],
    additionalSkills: [
      "英语（中级）",
      "基础后端（Express、API routes）",
      "SEO优化",
      "设计稿处理（Figma、Photoshop）",
      "分析工具（Lighthouse、Sentry）"
    ]
  },
  skills: [
    {
      id: "frontend",
      title: "前端",
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
      title: "测试",
      skills: [
        "Jest",
        "Cypress",
        "React Testing Library",
        "单元测试",
        "端到端测试"
      ]
    },
    {
      id: "tools",
      title: "工具",
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
      title: "其他",
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
    copyright: "© 2025 凯里姆·阿卜杜勒克里莫夫。保留所有权利。",
    title: "让我们一起工作吧！",
    text: "我总是对新的机会和有趣的项目持开放态度。不要犹豫联系我！",
    socials: {
      github: "#",
      linkedin: "#",
      telegram: "https://t.me/kerim_ab ",
      email: "abdulkerimovk6@gmail.com"
    }
  }
}
