export const servicesData = {
  webDevelopment: {
    id: "web-development",
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Development",
    eyebrow: "ENGINEERED FOR SCALE & SPEED",
    heroHeadline: "Modern Web Architectures that Turn Complexity into Performance",
    heroDescription:
      "We design, engineer, and deploy resilient web platforms, headless commerce solutions, and enterprise web applications that load in milliseconds and convert at scale.",
    tagline: "Ultra-fast frontend engineering, secure API integrations, and search-optimized architectures.",
    capabilities: [
      {
        title: "Enterprise Web Applications",
        description:
          "Mission-critical single-page and progressive web apps engineered with React, Next.js, and TypeScript for high computational reliability.",
        icon: "Layout",
        features: ["State machine management", "Offline capability & caching", "Real-time websockets", "Micro-frontend architectures"],
      },
      {
        title: "Headless & Modern E-commerce",
        description:
          "Custom storefronts and commerce platforms connected to robust headless checkout engines, handling peak traffic without slowdowns.",
        icon: "Globe",
        features: ["Sub-second product catalog search", "Omnichannel payment gateways", "Multi-currency & localization", "Inventory synchronization"],
      },
      {
        title: "Marketing & High-Conversion Websites",
        description:
          "Art-directed digital experiences with bespoke micro-interactions, responsive fluid typography, and flawless brand execution.",
        icon: "Sparkles",
        features: ["Dynamic CMS integration", "Automated technical SEO", "Core Web Vitals 95+ score", "A/B testing instrumentation"],
      },
      {
        title: "Frontend Engineering & API Architecture",
        description:
          "Modular component design systems, bulletproof REST/GraphQL integrations, and edge-rendered middleware.",
        icon: "Code2",
        features: ["Strict TypeScript typing", "Design system tokens", "GraphQL & REST gateways", "Edge cache routing (CDN)"],
      },
    ],
    techStack: [
      { category: "Frameworks", items: ["React", "Next.js", "Vite", "TypeScript", "Vue"] },
      { category: "Styling & UI", items: ["Tailwind CSS", "Framer Motion", "Radix UI", "CSS Modules"] },
      { category: "API & Data", items: ["GraphQL", "REST APIs", "React Query", "TRPC", "WebSockets"] },
      { category: "Performance & SEO", items: ["Lighthouse Auditing", "Edge SSR", "Schema.org", "Dynamic Sitemap"] },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Technical Scoping",
        description: "We map user journeys, define API contracts, analyze performance bottlenecks, and establish the technical stack.",
      },
      {
        step: "02",
        title: "UI/UX & Component Architecture",
        description: "Interactive wireframes and high-fidelity design systems built with scalable component modularity.",
      },
      {
        step: "03",
        title: "Engineering & Rigorous QA",
        description: "Sprint-based frontend development with automated end-to-end testing, responsive audits, and accessibility validation.",
      },
      {
        step: "04",
        title: "Optimization & Cloud Deployment",
        description: "Zero-downtime deployment pipelines, CDN caching configuration, and continuous monitoring.",
      },
    ],
    faqs: [
      {
        question: "How do you ensure web performance and high Core Web Vitals scores?",
        answer:
          "We engineer performance into every layer: code-splitting, modern WebP/AVIF asset pipelines, edge-caching strategies, server-driven hydration, and zero layout shift. Every project is validated against strict Lighthouse benchmarks prior to staging release.",
      },
      {
        question: "Can Techneest integrate with our existing backend or headless CMS?",
        answer:
          "Yes. We specialize in API-first architectures. Whether your system runs on custom Node/Python microservices, Strapi, Sanity, Contentful, Shopify, or legacy ERP endpoints, we construct clean GraphQL or REST middleware layers.",
      },
      {
        question: "Do you design responsive layouts for all screen sizes?",
        answer:
          "Every web application is developed mobile-first and tested rigorously across standard mobile (320px–430px), tablets (768px–1024px), laptops (1280px–1440px), and ultrawide 4K monitors.",
      },
      {
        question: "What is your typical project timeline for a custom web platform?",
        answer:
          "Timelines depend on scope. A high-conversion corporate web platform typically takes 4–8 weeks, while full-scale SaaS web portals or complex e-commerce engines range between 8–16 weeks with agile bi-weekly delivery milestones.",
      },
    ],
  },

  mobileAppDevelopment: {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    eyebrow: "NATIVE & CROSS-PLATFORM EXCELLENCE",
    heroHeadline: "Intuitive Mobile Experiences Crafted for iOS, Android & Beyond",
    heroDescription:
      "From consumer apps with millions of active users to high-security enterprise field utilities, we engineer fluid mobile applications that feel effortlessly natural on every screen.",
    tagline: "Engineered for gesture-smooth 120Hz performance, rock-solid offline sync, and seamless cloud backends.",
    capabilities: [
      {
        title: "iOS Native App Development",
        description:
          "Pixel-perfect Swift and SwiftUI applications built to leverage the full power of Apple's silicon, CoreML, and iOS security architecture.",
        icon: "Smartphone",
        features: ["SwiftUI & Combine", "Apple Pay & StoreKit", "Widgets & Live Activities", "Biometric Keychain security"],
      },
      {
        title: "Android Native App Development",
        description:
          "Robust Kotlin and Jetpack Compose mobile apps designed for resilience across thousands of device form factors and OS versions.",
        icon: "TabletSmartphone",
        features: ["Jetpack Compose UI", "Material 3 design systems", "Google Play billing", "Background sync workers"],
      },
      {
        title: "Cross-Platform Velocity (React Native / Flutter)",
        description:
          "A unified codebase delivering near-native 60/120fps performance, slashing time-to-market and ongoing maintenance overhead.",
        icon: "Zap",
        features: ["Shared business logic", "Native bridges for hardware sensors", "OTA code push updates", "Consistent cross-platform UI"],
      },
      {
        title: "App Lifecycle, CI/CD & Maintenance",
        description:
          "End-to-end management from App Store review navigation to automated Fastlane deployment pipelines and crash monitoring.",
        icon: "ShieldCheck",
        features: ["Fastlane automated builds", "Sentry & Datadog crash monitoring", "App Store & Google Play optimization", "Ongoing OS version updates"],
      },
    ],
    techStack: [
      { category: "Platforms", items: ["React Native", "Flutter", "Swift / iOS", "Kotlin / Android"] },
      { category: "State & Storage", items: ["Redux Toolkit", "Zustand", "WatermelonDB", "SQLite / Realm"] },
      { category: "Backend & Cloud", items: ["Firebase", "Supabase", "AWS Amplify", "Push Notifications"] },
      { category: "Tooling & CI", items: ["Fastlane", "GitHub Actions", "TestFlight", "App Center"] },
    ],
    process: [
      {
        step: "01",
        title: "Mobile UX & Flow Architecture",
        description: "User flow mapping, ergonomic thumb-zone wireframes, and native interaction design guidelines.",
      },
      {
        step: "02",
        title: "Rapid Prototyping & Architecture",
        description: "Clickable mobile prototypes and technical foundation setup: offline databases, auth tokens, and API schemas.",
      },
      {
        step: "03",
        title: "Core Build & Hardware Integration",
        description: "Continuous development cycles with bi-weekly TestFlight/Internal Android builds for client testing.",
      },
      {
        step: "04",
        title: "Store Submission & Launch Support",
        description: "App store review compliance, metadata asset preparation, launch day monitoring, and post-launch tuning.",
      },
    ],
    faqs: [
      {
        question: "Should we build native iOS/Android or choose cross-platform (React Native/Flutter)?",
        answer:
          "For 90% of business applications, cross-platform with React Native or Flutter delivers 95%+ identical performance at 40% reduced cost and half the maintenance overhead. If your app requires heavy 3D graphics, low-level Bluetooth LE audio, or hardware-exclusive APIs, we recommend dedicated native Swift/Kotlin.",
      },
      {
        question: "How do you handle App Store and Google Play submissions?",
        answer:
          "We handle the entire submission lifecycle: setting up developer accounts, configuring certificates and provisioning profiles, preparing screenshot assets, and navigating Apple's and Google's review guidelines to guarantee approval.",
      },
      {
        question: "Can our mobile app work without an active internet connection?",
        answer:
          "Yes. We design with an offline-first philosophy using local SQLite/WatermelonDB storage and background sync reconciliation that synchronizes changes automatically when connectivity returns.",
      },
      {
        question: "What happens after the app launches?",
        answer:
          "We provide ongoing SLAs that include crash monitoring, SDK security updates, and compatibility patches whenever Apple or Google releases new major OS versions.",
      },
    ],
  },

  customSoftwareDevelopment: {
    id: "custom-software-development",
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    eyebrow: "ENTERPRISE SYSTEMS & AUTOMATION",
    heroHeadline: "Bespoke Digital Systems Tailored to Your Proprietary Workflows",
    heroDescription:
      "When off-the-shelf software falls short, we engineer tailor-made software solutions, scalable SaaS platforms, automated workflow pipelines, and data-dense internal dashboards.",
    tagline: "Architecture designed for uptime, compliance, high data density, and long-term operational autonomy.",
    capabilities: [
      {
        title: "Enterprise SaaS Platforms",
        description:
          "Multi-tenant software-as-a-service platforms engineered with granular tenant isolation, subscription tiering, and role-based access.",
        icon: "Cpu",
        features: ["Multi-tenant database tenancy", "Stripe billing & seat tiers", "Tenant-level audit logs", "Granular RBAC permissions"],
      },
      {
        title: "Workflow Automation & Orchestration",
        description:
          "Eliminate repetitive manual operations with intelligent background worker pipelines, webhook listeners, and third-party ERP integrations.",
        icon: "Workflow",
        features: ["Event-driven worker queues", "Legacy system connectors", "Real-time sync webhooks", "Exception alerts & fallbacks"],
      },
      {
        title: "Internal Dashboards & Admin Portals",
        description:
          "High-density control panels and analytics interfaces designed for internal operations teams who need to inspect and mutate complex data rapidly.",
        icon: "BarChart3",
        features: ["Virtual scrolling for 100k+ rows", "Complex multi-filter querying", "Role-based action guards", "CSV/PDF report exports"],
      },
      {
        title: "System Integration & Cloud Architecture",
        description:
          "Connect disjointed databases, payment processors, and proprietary internal systems into one unified, low-latency microservice topology.",
        icon: "Database",
        features: ["Zero-downtime microservices", "Containerization with Docker", "Strict TLS/SSL encryption", "SOC2 compliance readiness"],
      },
    ],
    techStack: [
      { category: "Backend Architecture", items: ["Node.js", "Python / FastAPI", "Go", "GraphQL", "REST"] },
      { category: "Databases & Queues", items: ["PostgreSQL", "Redis", "Kafka", "Elasticsearch", "MongoDB"] },
      { category: "Infrastructure & DevOps", items: ["Docker", "Kubernetes", "AWS", "Google Cloud", "Terraform"] },
      { category: "Security & Auth", items: ["OAuth2 / OIDC", "JWT & Refresh Tokens", "RBAC / ABAC", "SOC2 Ready"] },
    ],
    process: [
      {
        step: "01",
        title: "Business Logic & Architecture Blueprint",
        description: "We analyze your business workflows, database entities, access levels, and security requirements to draft an architectural blueprint.",
      },
      {
        step: "02",
        title: "Data Modeling & API Contract Design",
        description: "Normalized relational schemas, message queues, and deterministic API contracts established before writing code.",
      },
      {
        step: "03",
        title: "Iterative Core Engineering",
        description: "Milestone-driven implementation with test-driven development, continuous integration, and staged alpha environments.",
      },
      {
        step: "04",
        title: "Data Migration & Enterprise Handover",
        description: "Automated ETL migration from legacy databases, load testing, comprehensive API documentation, and handover training.",
      },
    ],
    faqs: [
      {
        question: "Why should we build custom software instead of buying commercial SaaS?",
        answer:
          "Off-the-shelf software forces your operations to bend around someone else's workflow and charges per-seat license fees that compound as you scale. Custom software is 100% owned by your company, designed exactly for your proprietary workflows, and provides an enduring competitive moat.",
      },
      {
        question: "How do you ensure data security and regulatory compliance?",
        answer:
          "We follow security-by-design standards: strict AES-256 encryption at rest, TLS 1.3 in transit, role-based access control (RBAC), multi-factor authentication, input sanitization against SQL injection/XSS, and audit logs formatted for SOC2 and GDPR compliance.",
      },
      {
        question: "Who owns the intellectual property (IP) and source code?",
        answer:
          "You retain 100% full ownership of all source code, architecture documentation, design assets, and database schemas upon project completion. There are no vendor lock-ins or recurring proprietary license fees.",
      },
      {
        question: "Can Techneest modernize our legacy database or existing monolithic codebase?",
        answer:
          "Yes. We specialize in the strangler fig pattern and gradual microservice extraction, migrating mission-critical legacy databases to modern cloud architectures without disrupting live business operations.",
      },
    ],
  },
};
