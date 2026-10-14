export const projectsData = [
  {
    id: "quickbite",
    slug: "quickbite",
    title: "QuickBite",
    category: "Mobile App Development",
    categoryKey: "mobile",
    tag: "FOOD & BEVERAGE",
    industry: "Food & Beverage",
    summary:
      "On-demand food delivery platform with real-time tracking, intelligent restaurant dispatch, and sub-second payment settlement.",
    timeline: "12 Weeks",
    deliverables: ["iOS & Android Mobile Apps", "Driver Telematics Engine", "Restaurant Management Portal", "Stripe Connect Engine"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "QuickBite food delivery mobile app interface showing menu ordering and real-time delivery map",
    metrics: [
      { label: "Delivery Dispatch Speed", value: "< 90s" },
      { label: "Active Mobile Orders", value: "350k+" },
      { label: "App Store Rating", value: "4.9 / 5" },
      { label: "Checkout Conversion", value: "+32%" },
    ],
    challenge:
      "Legacy food ordering portals suffered from asynchronous sync lag between kitchen terminals and courier GPS trackers, resulting in cold deliveries and order dropouts.",
    solution:
      "Techneest engineered a reactive mobile application utilizing React Native and WebSockets for zero-latency delivery tracking, paired with localized geofencing and instant Apple Pay checkout.",
    features: [
      "Real-time GPS courier map with sub-second position updates",
      "One-tap Apple Pay and Google Pay integration",
      "Dynamic kitchen order dispatch queue with automated ETA prediction",
      "Offline menu caching and intelligent re-order suggestions",
    ],
    techStack: ["React Native", "TypeScript", "Node.js", "Redis", "PostgreSQL", "WebSockets", "Mapbox GL"],
    testimonial: {
      quote:
        "Techneest delivered QuickBite ahead of our launch deadline. The mobile experience is blistering fast and our drivers love the dispatch accuracy.",
      author: "Marcus Chen",
      role: "VP of Product",
      company: "QuickBite Technologies",
    },
  },
  {
    id: "dreamgoglobal",
    slug: "dreamgoglobal",
    title: "DreamGoGlobal",
    category: "Web Development",
    categoryKey: "web",
    tag: "TRAVEL & HOSPITALITY",
    industry: "Travel & Hospitality",
    summary:
      "Comprehensive travel booking platform aggregating flights, luxury hotels, and bespoke vacation packages across 45 countries.",
    timeline: "14 Weeks",
    deliverables: ["Headless Next.js Web Portal", "Multi-GDS Flight Aggregator", "Dynamic Pricing Middleware", "Localization Engine"],
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "DreamGoGlobal luxury travel booking platform showing flight itineraries and hotel bookings",
    metrics: [
      { label: "Search Query Response", value: "0.45s" },
      { label: "Monthly Bookings", value: "$4.2M+" },
      { label: "Core Web Vitals Score", value: "99 / 100" },
      { label: "Cart Abandonment Drop", value: "-28%" },
    ],
    challenge:
      "Querying multiple global flight distribution systems simultaneously caused browser freezes and 8+ second search page load times for prospective travelers.",
    solution:
      "Techneest architected an edge-rendered Next.js platform that parallelizes flight and hotel search queries across distributed edge workers, rendering verified options in under 500 milliseconds.",
    features: [
      "Instant faceted search across 500+ airlines and 200,000 hotel partners",
      "Multi-currency conversion with real-time foreign exchange hedging",
      "Interactive seat selection visualizer and baggage upgrade calculator",
      "Automated itinerary PDF generation and SMS travel advisory alerts",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Go Microservices", "PostgreSQL", "Redis"],
    testimonial: {
      quote:
        "The performance of DreamGoGlobal transformed our conversion rates. Travelers can search and compare flights effortlessly without lag.",
      author: "Rahul Mehta",
      role: "Founder",
      company: "Travelon & DreamGoGlobal",
    },
  },
  {
    id: "playnosis",
    slug: "playnosis",
    title: "Playnosis",
    category: "Custom Software Development",
    categoryKey: "custom-software",
    tag: "EDTECH",
    industry: "EdTech & Interactive Learning",
    summary:
      "Interactive learning platform for modern students combining adaptive spaced repetition, collaborative study groups, and gamified mastery paths.",
    timeline: "10 Weeks",
    deliverables: ["Cross-Platform Web & Mobile Suite", "Adaptive Spaced Repetition Engine", "Live Study Room WebRTC", "Analytics Dashboard"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Playnosis modern interactive learning platform showing flashcards and student performance graphs",
    metrics: [
      { label: "Daily Active Students", value: "180k+" },
      { label: "Study Retention Boost", value: "+44%" },
      { label: "Average Session Length", value: "42 min" },
      { label: "App Store Review", value: "4.9 / 5" },
    ],
    challenge:
      "Students were disengaged by monotonous text-based LMS platforms, resulting in high drop-off rates and poor exam retention scores.",
    solution:
      "We engineered Playnosis: a high-engagement learning system with gamified streak mechanics, real-time peer study lounges, and algorithmically personalized review queues.",
    features: [
      "Algorithmic spaced repetition scheduler adapting to student accuracy",
      "Collaborative whiteboard and synchronized audio study rooms",
      "Custom achievement badges and global competitive learning leagues",
      "Comprehensive teacher control panel with student mastery telemetry",
    ],
    techStack: ["React", "React Native", "Node.js", "FastAPI", "PostgreSQL", "WebRTC", "Docker"],
    testimonial: {
      quote:
        "Playnosis made studying addictive and genuinely fun for our students. Techneest brought incredible design sensibility and engineering craft.",
      author: "Dr. Sarah Jenkins",
      role: "Chief Academic Officer",
      company: "Playnosis Education",
    },
  },
  {
    id: "finpulse-analytics",
    slug: "finpulse-analytics",
    title: "FinPulse Real-Time Financial Intelligence",
    category: "Custom Software Development",
    categoryKey: "custom-software",
    tag: "FINTECH",
    industry: "Fintech & Quantitative Markets",
    summary:
      "A high-throughput algorithmic analytics engine processing 40M+ daily transactions with sub-50ms query latency and customizable trader dashboards.",
    timeline: "16 Weeks",
    deliverables: ["Custom Algorithmic Engine", "Real-Time WebSocket Dashboard", "Multi-Tenant API Gateway", "Audit Compliance Suite"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "FinPulse real-time financial data analytics interface dashboard",
    metrics: [
      { label: "Data Processing Latency", value: "< 42ms" },
      { label: "Daily Transactions Ingested", value: "45M+" },
      { label: "Query Speed Improvement", value: "4.8x" },
      { label: "Uptime SLA Maintained", value: "99.99%" },
    ],
    challenge:
      "The client's legacy relational database was choking under exponential transaction volume, leading to timeout errors during peak market volatility.",
    solution:
      "Techneest engineered a distributed event-driven pipeline leveraging Redis cluster caching and partitioned TimescaleDB/PostgreSQL instances.",
    features: [
      "Custom WebGL financial chart engine for rapid data rendering",
      "Event-driven Kafka message queue architecture",
      "Granular permission system with role-based workspace sharing",
      "Automated financial risk anomaly alerts via SMS and webhooks",
    ],
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "TimescaleDB", "Redis", "Kafka", "Docker"],
    testimonial: {
      quote:
        "Techneest fundamentally transformed our operational speed. Our analysts can now simulate portfolio shocks in seconds.",
      author: "Marcus Sterling",
      role: "Chief Technology Officer",
      company: "Sterling Capital Holdings",
    },
  },
  {
    id: "omnicare-telehealth",
    slug: "omnicare-telehealth",
    title: "OmniCare Telehealth & Patient Care Ecosystem",
    category: "Mobile App Development",
    categoryKey: "mobile",
    tag: "MEDTECH",
    industry: "Digital Healthcare & MedTech",
    summary:
      "A HIPAA-compliant mobile healthcare platform enabling secure HD video consultations, electronic health record synchronization, and digital prescription tracking.",
    timeline: "14 Weeks",
    deliverables: ["iOS & Android Mobile Apps", "WebRTC Video Gateway", "EHR Sync Middleware", "Doctor Scheduling Portal"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Doctor and patient using modern digital telehealth mobile tablet application",
    metrics: [
      { label: "Consultation Completion Rate", value: "97.4%" },
      { label: "Average App Store Rating", value: "4.9 / 5" },
      { label: "Active Mobile Patients", value: "180k+" },
      { label: "Appointment Wait Time", value: "-52%" },
    ],
    challenge:
      "Patients and physicians required an ultra-simple mobile interface that adhered strictly to HIPAA compliance guidelines while guaranteeing reliable video clarity.",
    solution:
      "We built a unified cross-platform mobile app in React Native and WebRTC with adaptive bitrate streaming and end-to-end encrypted messaging.",
    features: [
      "Adaptive bitrate peer-to-peer encrypted HD video calls",
      "Biometric fingerprint & Face ID authentication for medical records",
      "Push notification dispatch with custom interactive appointment actions",
      "Offline medication schedule tracking and emergency contact broadcast",
    ],
    techStack: ["React Native", "Swift", "Kotlin", "WebRTC", "Node.js", "PostgreSQL", "AWS S3 HIPAA", "Twilio"],
    testimonial: {
      quote:
        "The mobile app Techneest delivered helped our medical network expand virtual care seamlessly.",
      author: "Dr. Elena Vance",
      role: "VP of Digital Health Operations",
      company: "OmniCare Health Systems",
    },
  },
  {
    id: "nova-commerce-headless",
    slug: "nova-commerce-headless",
    title: "Nova Global Headless Commerce Experience",
    category: "Web Development",
    categoryKey: "web",
    tag: "E-COMMERCE",
    industry: "Luxury E-Commerce & Retail",
    summary:
      "A sub-second headless e-commerce web platform supporting 12 currencies, localized storefronts, and seamless visual storytelling.",
    timeline: "10 Weeks",
    deliverables: ["Headless Next.js Storefront", "Algolia Fast Search Integration", "Shopify Plus Middleware", "Custom CMS Component Library"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Nova headless ecommerce platform running on modern laptop screen",
    metrics: [
      { label: "Google Lighthouse Score", value: "99 / 100" },
      { label: "Mobile Conversion Rate", value: "+38%" },
      { label: "Average Page Load Time", value: "0.62s" },
      { label: "Cart Abandonment Drop", value: "-22%" },
    ],
    challenge:
      "A monolithic legacy Shopify storefront was suffering from sluggish render times (> 4.8 seconds on mobile 4G) and rigid template limitations.",
    solution:
      "Techneest architected an ultra-fast headless frontend using Next.js and Tailwind CSS deployed on edge CDNs.",
    features: [
      "Instant faceted product search and filter with instant zero-lag preview",
      "Multi-currency geolocation detection with automatic currency switching",
      "Interactive 3D product view and size recommendation quiz",
      "Automated image optimization pipeline delivering AVIF and WebP formats",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shopify Storefront API", "Algolia", "Vercel Edge"],
    testimonial: {
      quote:
        "Techneest transformed our digital storefront into an instantaneous luxury shopping experience.",
      author: "Julian Meyer",
      role: "Head of E-Commerce",
      company: "Nova Goods International",
    },
  },
];
