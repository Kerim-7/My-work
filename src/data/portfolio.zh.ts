import { PortfolioData } from './portfolio'
import { getAssetPath } from '../utils/config';

export const portfolioDataZh: PortfolioData = {
  header: {
    name: "凯里姆",
    role: "前端开发工程师",
          tagline: "拥有5年以上经验的前端开发工程师，专注于创建高负载网络应用程序和技术团队领导",
    phone: "+79286270754",
    email: "kerimabdulkerimov777@gmail.com",
    avatar: getAssetPath("assets/avatar.jpg")
  },
  experience: [
    {
      id: "xpay",
      company: "XPay",
      position: "前端开发工程师",
      period: "2024-2025",
      description: "XPay是一个高负载支付系统，专为安全在线交易、余额管理和银行服务集成而设计。该系统每月处理数百万笔交易，确保99.9%的正常运行时间。该平台为用户提供便捷的界面，用于进行支付、跟踪交易历史和配置金融工具。架构基于微服务构建，使用REST API和RTK Query进行高效的数据处理。",
      achievements: [
        "架构设计并成功集成支付网关，确保每月数百万笔交易的无缝处理",
        "架构优化应用程序性能，通过懒加载、代码分割和异步资源加载将界面加载时间减少30%",
        "架构设计并增强系统安全性，通过实施额外的数据验证、可疑活动监控和OWASP Top 10保护",
        "架构设计与后端团队合作制定API版本控制方案，确保向后兼容性和平滑迁移",
        "架构设计并创建了使用Cypress的综合测试系统，用于关键路径（85%覆盖率），包括支付场景的E2E测试",
        "架构设计并进行从单体到微服务的重构，提高系统的可扩展性和可维护性"
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
        "架构用户界面开发": [
          "架构设计并创建直观的个人账户界面，具有余额查看、交易历史和支付管理功能",
          "架构设计并实施使用SCSS和现代方法（CSS Grid、Flexbox）的响应式和跨浏览器布局",
          "架构设计并开发具有验证、掩码（卡片、详情）和清理功能的动态支付数据输入表单"
        ],
        "架构后端集成": [
          "架构设计并配置与REST API的交互，用于支付处理、交易数据检索和实时余额更新",
          "架构优化使用RTK Query的服务器请求，减少冗余请求并改善缓存"
        ],
        "架构安全性和性能": [
          "架构设计并实施针对CSRF攻击、XSS的保护机制，以及防止数据泄露的机制（CVC/CVV掩码）",
          "架构通过懒加载、代码分割、缓存和渲染优化改善应用程序性能",
          "架构配置使用Jest和React Testing Library的关键组件的单元和集成测试"
        ]
      }
    },
    {
      id: "kassa",
      company: "Kassa.cc",
      position: "前端开发工程师",
      period: "2022-2024",
      description: "Kassa.cc是一个高负载平台，用于加密货币与法定货币的交换，支持多种支付系统。该系统每天处理数千笔交易，通过SBP、银行卡和电子钱包提供比特币、以太坊和其他加密货币到卢布的快速安全交换。架构基于微服务构建，使用GraphQL进行高效的数据处理。该平台为用户提供直观的界面，用于实时汇率跟踪、执行交换和管理交易历史。",
      achievements: [
        "架构设计并实施通过ESLint自动检查的代码审查系统，将代码质量提高40%，关键错误减少60%",
        "开发并实施Figma中的设计令牌系统，与Storybook自动同步，将UI组件开发速度提高60%并确保设计一致性",
        "为5名开发人员团队举办每周架构研讨会，导致错误减少35%，开发速度提高25%",
        "架构设计并实施功能标志系统，用于逐步推出更改，将部署时间减少70%并降低发布风险",
        "通过从2周期冲刺过渡到1周期冲刺优化开发流程，将功能交付速度提高40%",
        "通过渲染优化、大型列表虚拟化和高效缓存将应用程序性能提高45%"
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
        "技术领导和架构": [
          "架构设计并领导5名前端开发人员团队，进行代码审查和技术指导",
          "与后端团队协调API合同、GraphQL模式设计和架构决策",
          "为团队举办每周架构研讨会，实施最佳实践和代码标准"
        ],
        "高负载界面开发": [
          "架构设计并创建用于加密货币交换的直观界面，通过WebSocket实时显示汇率",
          "实施响应式布局，支持所有现代浏览器和移动设备，针对高负载进行优化",
          "开发具有加密货币地址和银行详情验证的数据输入表单，实施掩码和清理"
        ],
        "安全性和性能": [
          "架构设计并实施针对CSRF攻击、XSS的保护机制，以及防止数据泄露的机制",
          "通过懒加载、虚拟化、缓存和记忆化优化应用程序性能",
          "配置使用Jest和React Testing Library的关键组件的单元和集成测试"
        ]
      }
    },
    {
      id: "logistar",
      company: "LogistAR",
      position: "前端开发工程师",
      period: "2021-2022",
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
      id: "smarthome",
      company: "SmartHome Central",
      position: "前端开发工程师",
      period: "2020-2021",
      description: "一个创新的在线服务，专门销售和管理现代家庭的智能设备。该平台为用户提供便捷的网络界面，用于选择、配置和订购智能设备，完全适应个人需求。每个设备都配备直观的用户界面，允许灵活控制参数和操作模式。内置控制器提供对所有设备功能的可靠和简单控制，使交互过程对用户来说尽可能舒适和安全。该项目专注于创建统一的智能家居管理生态系统，结合广泛的设备和现代安全标准。",
      achievements: [
        "成功集成PayPal支付系统，为用户提供安全便捷的在线支付",
        "使用加密、HTTPS和现代安全标准实施全面的用户数据保护",
        "实施额外的漏洞检查和可疑活动监控，以防止潜在攻击",
        "通过代码优化和关键错误修复显著提高平台稳定性和性能",
        "用测试覆盖项目（从20% → 60%+覆盖率）",
        "创建关于React优化的内部课程",
        "开发代码质量KPI系统"
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
        "主页开发": [
          "考虑现代UI/UX标准的跨浏览器和响应式布局",
          "代码优化以提高性能和加载速度",
          "错误修复和最佳实践实施",
          "元标签优化以改善SEO"
        ],
        "产品目录工作": [
          "实施产品卡片和构建用于展示产品的灵活网格",
          "按类别和参数实施产品过滤",
          "开发和集成支付系统，包括PayPal网关连接",
          "进行组件的单元和集成测试"
        ],
        "用户页面": [
          "创建具有数据验证的注册和授权表单",
          "实施用户数据更改功能",
          "实施双因素认证以提高安全性",
          "使用现代方法防止自动化攻击（机器人）"
        ]
      }
    }
  ],
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
      telegram: "https://t.me/A7Kerim",
      email: "kerimabdulkerimov777@gmail.com"
    }
  }
}
