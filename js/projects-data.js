/**
 * Sok Thavireak - Portfolio Projects Data Repository
 * Contains all detailed specs, architecture pipelines, and screenshot galleries.
 */
const projectsData = {
    'sushi-store': {
        title: 'Sushi Store & POS System',
        badge: 'Full-Stack E-Commerce & POS',
        domain: 'sushi-pos.production.app',
        accentGradient: 'from-purple-500 via-pink-500 to-indigo-500',
        badgeClass: 'bg-purple-100 text-purple-700 border border-purple-200 font-semibold',
        counterClass: 'bg-purple-100 text-purple-700 border border-purple-200',
        themeAccent: '#a855f7',
        themeGlow: 'rgba(168, 85, 247, 0.45)',
        liveBtnClass: 'bg-purple-600 hover:bg-purple-700 text-white',
        liveUrl: 'https://sushi-store-mzcy.onrender.com',
        githubUrl: 'https://github.com/anhahseven/sushi-store',
        description: 'An end-to-end restaurant web platform and cashier point-of-sale system built with React, Express, and PostgreSQL. Features real-time menu browsing, cart management, Google OAuth & local login with role-based access, Cloudinary image uploads, and ABA PayWay QR payment integration.',
        features: [
            { icon: '💳', title: 'Cashier POS & PayWay Integration', desc: 'Dedicated point-of-sale interface featuring operator tracking, instant dish search, cart calculation, and ABA PayWay checkout integration.' },
            { icon: '📊', title: 'Real-Time Admin Operations Dashboard', desc: 'Central analytics panel tracking live revenue metrics, total orders, registered user trends, and active inventory levels.' },
            { icon: '🔐', title: 'Multi-Role Authentication & Security', desc: 'Stateless session security with Google OAuth2 single sign-on and bcrypt local credentials, enforcing RBAC across Admin, Manager, and Cashier.' },
            { icon: '🍣', title: 'Interactive Customer Menu Catalog', desc: 'Filterable product showcase with real-time text query, category pills (Nigiri, Sashimi, Special Rolls), discount badges, and responsive cart.' },
            { icon: '☁️', title: 'Cloudinary Asset Pipeline', desc: 'Optimized cloud image hosting, transformation, and automated CDN caching for high-definition culinary photography.' },
            { icon: '📍', title: 'Multi-Branch Restaurant Locator', desc: 'Interactive location cards with operational schedules, branch status indicators, and integrated Google Maps directions.' }
        ],
        techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'React.js', 'Tailwind CSS', 'OAuth 2.0', 'Cloudinary CDN', 'ABA PayWay', 'RESTful API'],
        arch: {
            headline: 'Full-Stack Commercial POS & Multi-Branch E-Commerce Architecture',
            subtext: 'Hybrid architecture combining high-speed cashier terminal checkouts, ABA PayWay digital banking integration, and real-time inventory management.',
            pipeline: [
                { icon: '💻', step: '01. Client & POS', title: 'React SPA & Cashier Terminal', desc: 'High-speed UI with operator identification, real-time cart accumulator, and dish catalog filtering.' },
                { icon: '🔐', step: '02. Auth & Middleware', title: 'Passport.js & Role Guards', desc: 'Google OAuth 2.0 single sign-on + salted Bcrypt hashing, enforcing RBAC for Admin, Manager, and Cashier.' },
                { icon: '🚦', step: '03. API Dispatcher', title: 'Express.js REST Router', desc: 'Modular route controllers handling menu catalogs, customer orders, multi-branch stores, and user accounts.' },
                { icon: '💳', step: '04. Transaction Engine', title: 'PayWay & Order Processing', desc: 'ABA PayWay payment integration, automated order number generation, and real-time sales tallies.' },
                { icon: '☁️', step: '05. Media Pipeline', title: 'Cloudinary Cloud CDN', desc: 'Automated culinary image transformations, responsive format delivery (WebP), and global edge caching.' },
                { icon: '🗄️', step: '06. Relational Storage', title: 'PostgreSQL Database', desc: 'Structured relational models for dishes, order line items, transaction logs, and branch records.' }
            ],
            specs: [
                { domain: 'System Topology', details: 'Decoupled Client-Side SPA + Node.js Express REST Services' },
                { domain: 'Auth & Identity', details: 'Google OAuth 2.0 Single Sign-On + Salted Bcrypt Local Credential Hashing' },
                { domain: 'Payment Gateway', details: 'ABA PayWay Digital Banking Gateway with secure checkout verification' },
                { domain: 'Asset Delivery', details: 'Cloudinary Media Pipeline with automatic compression and edge caching' },
                { domain: 'Database Architecture', details: 'PostgreSQL Relational DB with structured transactional schemas' }
            ]
        },
        images: [
            {
                src: 'img/Screenshot 2026-09-14 134028.png',
                title: '01. Storefront Landing & Brand Hero',
                desc: 'Hero introduction featuring high-resolution photography, brand tagline "ALWAYS FRESH", quick navigation bar, and instant theme toggling.'
            },
            {
                src: 'img/Screenshot 2026-09-14 134038.png',
                title: '02. Interactive Menu & Nigiri Catalog',
                desc: 'Dynamic catalog with real-time search, category filter pills (Nigiri, Sashimi, Special Rolls, Appetizers), and one-click add-to-cart functionality.'
            },
            {
                src: 'img/Screenshot 2026-09-14 134048.png',
                title: '03. Brand Story & Executive Chef Showcase',
                desc: 'Engaging "Experience the Soul of Japan" section highlighting 5-star Hotel Executive Chef Kenji Nakamura and verified customer satisfaction ratings.'
            },
            {
                src: 'img/Screenshot 2026-09-14 134058.png',
                title: '04. Weekly Deals & Promotional Offers',
                desc: 'Promotional marketing module showing "50% OFF Second Set" offers, hot deals, and automatic percentage discount tags.'
            },
            {
                src: 'img/Screenshot 2026-09-14 134109.png',
                title: '05. Multi-Branch Store Locator',
                desc: 'Branch directory highlighting Murakami Central, Riverside, and BKK1 Flagship locations with real-time open/closed status and driving directions.'
            },
            {
                src: 'img/Screenshot 2026-09-14 134122.png',
                title: '06. Split Authentication & Google OAuth Portal',
                desc: 'Dual-column login and registration experience featuring Google OAuth 2.0 single sign-on and credential recovery.'
            },
            {
                src: 'img/Screenshot 2026-09-14 134145.png',
                title: '07. Admin Operations & Analytics Dashboard',
                desc: 'Real-time administrative control panel monitoring total revenue ($27.50), orders, registered user counts, and visual sales analytics.'
            },
            {
                src: 'img/Screenshot 2026-09-14 134155.png',
                title: '08. Cashier & Staff POS Terminal',
                desc: 'High-speed Point-of-Sale interface designed for staff with operator identification, SKU/item search, dish cards, and ABA PayWay checkout.'
            }
        ]
    },
    'hrms': {
        title: 'Full-Stack HRMS',
        badge: 'Enterprise Human Resource Management',
        domain: 'hrms.internal.app',
        accentGradient: 'from-blue-500 via-cyan-500 to-indigo-500',
        badgeClass: 'bg-blue-100 text-blue-700 border border-blue-200 font-semibold',
        counterClass: 'bg-blue-100 text-blue-700 border border-blue-200',
        themeAccent: '#2563eb',
        themeGlow: 'rgba(37, 99, 235, 0.45)',
        liveBtnClass: 'bg-blue-600 hover:bg-blue-700 text-white',
        liveUrl: 'https://hr-system-one-hazel.vercel.app/',
        githubUrl: 'https://github.com/anhahseven/HR_System',
        description: 'A complete human resource management system featuring a Spring Boot 3 REST API and a React SPA. Includes automated payroll calculations (overtime, taxes, bonuses), multi-step leave request approvals, attendance clock-in logging, and role-based access control with JWT.',
        features: [
            { icon: '🛡️', title: 'Spring Security & Stateless JWT', desc: 'Cryptographically signed JWT token authentication with role-based route guarding for Admin, HR Viewer, and Employee.' },
            { icon: '💰', title: 'Dynamic Payroll Calculation Engine', desc: 'Automated salary engine factoring in overtime, tax deductions, performance bonuses, and customizable pay periods.' },
            { icon: '📅', title: 'Leave Management Lifecycle', desc: 'End-to-end leave request lifecycle (submission, supervisor review, instant approval/rejection) with status alerts.' },
            { icon: '⏱️', title: 'Real-Time Attendance Clock-In/Out', desc: 'Daily attendance time-logging system with punctuality tracking and exportable monthly compliance summaries.' }
        ],
        techStack: ['Java 17', 'Spring Boot 3', 'React.js', 'Tailwind CSS', 'Spring Security', 'JWT', 'PostgreSQL', 'REST API'],
        arch: {
            headline: 'Decoupled Spring Boot 3 & React 18 Enterprise Topology',
            subtext: 'End-to-end request lifecycle with stateless cryptographic token authentication, deterministic payroll calculation rules, and transactional database integrity.',
            pipeline: [
                { icon: '🖥️', step: '01. Presentation', title: 'React 18 Client SPA', desc: 'Tailwind UI, Axios HTTP interceptors, JWT localStorage token injection, dynamic route guards.' },
                { icon: '🛡️', step: '02. Security Filter', title: 'Spring Security Chain', desc: 'OncePerRequestFilter intercepting requests, validating cryptographic HMAC-SHA256 signatures, extracting user roles.' },
                { icon: '⚡', step: '03. API Gateway', title: 'REST Controllers & DTOs', desc: 'Versioned endpoints (/api/v1/*), @Valid request body binding, Jakarta Bean Validation, and RFC-7807 error responses.' },
                { icon: '⚙️', step: '04. Business Engine', title: 'Transactional Services', desc: '@Transactional boundaries, dynamic overtime/bonus payroll algorithm, and multi-state leave approvals.' },
                { icon: '📦', step: '05. Persistence Layer', title: 'Spring Data JPA & ORM', desc: 'Hibernate object-relational mapping, custom JPQL queries, prepared statements against SQL injection.' },
                { icon: '🗄️', step: '06. Relational Store', title: 'PostgreSQL Database', desc: 'ACID transactions, normalized relational schemas, foreign key constraints, and indexed employee query performance.' }
            ],
            specs: [
                { domain: 'System Topology', details: 'Decoupled Multi-Tier SPA + Stateless Micro-RESTful API' },
                { domain: 'Authentication & RBAC', details: 'HMAC SHA-256 JWT with Role Claims (ADMIN, HR_VIEWER, EMPLOYEE)' },
                { domain: 'Business Rules Engine', details: 'Deterministic Payroll Math (Base + OT + Allowances - Statutory Deductions)' },
                { domain: 'Persistence & Data', details: 'PostgreSQL with Spring Data JPA / Hibernate ORM & Connection Pooling' },
                { domain: 'Resilience & Logging', details: 'Centralized @ControllerAdvice Global Exception Handler with standard HTTP codes' }
            ]
        },
        images: [
            {
                src: 'img/HR/HR user/{A5523F21-E004-4C74-8803-5C5AF29BF1BE}.png',
                title: '01. Admin Portal — Executive Dashboard & Workforce Analytics',
                desc: 'Central administrative command center displaying workforce KPIs, live attendance rates, pending leaves, payroll totals, and real-time departmental distribution charts.'
            },
            {
                src: 'img/HR/HR user/{6E325F8D-0D7C-428D-8D5A-A857CC93854D}.png',
                title: '02. Admin Portal — Employee Directory & RBAC User Management',
                desc: 'Comprehensive employee roster with real-time search, department filters, role-based access control (Admin vs. Employee), salary figures, and leave balance tracking.'
            },
            {
                src: 'img/HR/HR user/{D0D9D99F-2E91-46C8-8F8C-99E4A31D2FD9}.png',
                title: '03. Admin Portal — Department & Position Architecture',
                desc: 'Organizational hierarchy manager configuring 9 organizational departments and 30 mapped job positions with functional role descriptions.'
            },
            {
                src: 'img/HR/HR user/{DB2E5D47-736C-4C98-8763-DDCD5E28B708}.png',
                title: '04. Admin Portal — Enterprise Attendance Tracking & Time Logs',
                desc: 'High-precision attendance tracking log monitoring clock-in/out timestamps, total hours worked, late arrival flags, and multi-parameter department filters.'
            },
            {
                src: 'img/HR/HR user/{A6922D9D-366D-440D-B956-03A4FA26A058}.png',
                title: '05. Admin Portal — Leave Request Review & Approval Workflow',
                desc: 'Supervisor authorization queue enabling fast-track review, approval, or rejection of employee time-off requests with leave type badges and justification details.'
            },
            {
                src: 'img/HR/HR user/{87FF108D-2117-416C-A6D8-B3838B4555B8}.png',
                title: '06. Admin Portal — Automated Payroll Calculation Engine',
                desc: 'Automated salary engine computing base wages, overtime compensation, bonuses, and tax deductions with real-time payment status flags (Paid, Processed, Draft).'
            },
            {
                src: 'img/HR/HR user/{D1D457F1-6D58-4D2C-9C66-C7587FF6CA13}.png',
                title: '07. Admin Portal — Employee Performance & Appraisal Reviews',
                desc: 'Biannual performance management grid evaluating employee quality, productivity, and overall rating metrics alongside customized development goals.'
            },
            {
                src: 'img/HR/user/{8168873A-2293-45D4-B9AD-B3DF777AE4DE}.png',
                title: '08. Authentication Portal — Multi-Role Login & Security Gateway',
                desc: 'Dual-panel authentication interface with Spring Security JWT integration, persistent session handling, and pre-configured demo credentials for HR Viewer and Employee roles.'
            },
            {
                src: 'img/HR/user/{BF90BB34-5D40-4A40-99E6-D31AE04FF661}.png',
                title: '09. Employee Portal — Self-Service Dashboard & Live Clock-In',
                desc: 'Interactive employee workspace featuring a digital clock-in punch module, real-time hours tracking, remaining leave balances, and personal appraisal scorecards.'
            },
            {
                src: 'img/HR/user/{BD97B17A-9626-4F1E-903C-2D8A08BF888F}.png',
                title: '10. Employee Portal — Personal Attendance History & Timestamps',
                desc: 'Transparent personal attendance history log allowing employees to inspect historical punch-in/out timestamps, daily accumulated hours, and monthly attendance tallies.'
            },
            {
                src: 'img/HR/user/{277D923F-1ED3-4CDC-A4BD-84E717E5A6C3}.png',
                title: '11. Employee Portal — Time-Off Request & Leave History Portal',
                desc: 'Intuitive self-service time-off application form with date pickers and category selection, alongside a live tracker displaying pending supervisor approvals.'
            },
            {
                src: 'img/HR/user/{136CA9B9-18C6-45ED-AF08-A61DBBC7CF4A}.png',
                title: '12. Employee Portal — Payslip Statements & Performance Reports',
                desc: 'Confidential employee hub for accessing generated salary payslips, compensation breakdown records, and historical appraisal evaluation summaries.'
            },
            {
                src: 'img/HR/user/{68031D0E-291A-4419-A4CD-BF204A98316C}.png',
                title: '13. Employee Portal — Employee Profile & Benefit Allocations',
                desc: 'Individual employee dossier displaying contract details, base compensation, standard work hours, and visual entitlement progress bars for annual, sick, and special leave.'
            }
        ]
    },
    'sfl': {
        title: 'SFL Cambodia Interface',
        badge: 'Educational Institution Portal',
        domain: 'sflcambodia.com',
        accentGradient: 'from-emerald-500 via-teal-500 to-cyan-500',
        badgeClass: 'bg-emerald-100 text-emerald-700 border border-emerald-200 font-semibold',
        counterClass: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
        themeAccent: '#059669',
        themeGlow: 'rgba(5, 150, 105, 0.45)',
        liveBtnClass: 'bg-emerald-600 hover:bg-emerald-700 text-white',
        liveUrl: 'https://sflcambodia.com/',
        githubUrl: null,
        description: 'Responsive institutional website developed for SFL International School in Cambodia. Focused on mobile accessibility, fast page load speeds, clean academic information hierarchy, and intuitive inquiry forms for prospective students and parents.',
        features: [
            { icon: '📱', title: 'Mobile-First Responsive Layout', desc: 'Fluid layout tested across diverse mobile, tablet, and high-DPI desktop viewports for optimal readability.' },
            { icon: '⚡', title: 'Zero-Bloat Performance', desc: 'Near-instant page load times achieved through lightweight vanilla scripting and streamlined CSS.' },
            { icon: '🎨', title: 'Accessible Educational Branding', desc: 'Clear academic navigation, accessible typography hierarchy, and intuitive inquiry forms for prospective students.' }
        ],
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Responsive Design', 'SEO Optimization'],
        arch: {
            headline: 'High-Performance Client-Side Institutional Web Platform',
            subtext: 'Lightweight, accessible educational portal optimized for sub-second mobile load speeds and prospective student lead generation.',
            pipeline: [
                { icon: '📱', step: '01. Presentation', title: 'Responsive Fluid Viewport', desc: 'Mobile-first layouts tested across smartphones, tablets, and high-resolution desktop viewports.' },
                { icon: '🎨', step: '02. Styling System', title: 'Bootstrap 5 & Clean CSS', desc: 'Modern typography hierarchy, intuitive institutional branding, and optimized layout utilities.' },
                { icon: '⚡', step: '03. Execution', title: 'Vanilla JavaScript Logic', desc: 'Zero-dependency client scripting for interactive modals, navigation drawers, and dynamic DOM states.' },
                { icon: '📝', step: '04. Lead Capture', title: 'Admissions Inquiry Portal', desc: 'Accessible contact and inquiry forms designed for high prospective student conversion.' },
                { icon: '🚀', step: '05. Production Host', title: 'High-Availability Web Server', desc: 'Static file hosting with gzip/brotli compression, HTTP/2 multiplexing, and SSL encryption.' },
                { icon: '🔍', step: '06. Optimization', title: 'Core Web Vitals & SEO', desc: 'Semantic HTML5 structure, structured metadata, and near-perfect Lighthouse performance scores.' }
            ],
            specs: [
                { domain: 'System Topology', details: 'High-Performance Static Educational Web Platform' },
                { domain: 'Mobile Responsiveness', details: 'Fluid 100% responsive layout across all standard device breakpoints' },
                { domain: 'Core Web Vitals', details: 'Sub-second Time to First Byte (TTFB) and optimal First Contentful Paint' },
                { domain: 'Production Deployment', details: 'Custom domain sflcambodia.com with automated SSL/TLS termination' }
            ]
        },
        images: []
    },
    'pidan-silk': {
        title: 'Pidan Khmer Silk Shop Inventory System',
        badge: 'Active Project • Enterprise Inventory & ERP',
        domain: 'pidan-inventory.internal.app',
        accentGradient: 'from-amber-500 via-orange-500 to-indigo-600',
        badgeClass: 'bg-amber-100 text-amber-800 border border-amber-200 font-semibold',
        counterClass: 'bg-amber-100 text-amber-800 border border-amber-200',
        themeAccent: '#d97706',
        themeGlow: 'rgba(217, 119, 6, 0.45)',
        liveBtnClass: 'bg-amber-600 hover:bg-amber-700 text-white',
        liveUrl: null,
        githubUrl: null,
        description: 'A custom retail inventory and workshop management system currently in active development for Pidan Khmer Silk Shop. Built using Docker containers, a NestJS backend, and a Nuxt 3 (Vue 3) frontend, it tracks handwoven silk rolls, motif patterns, artisan consignment balances, and inventory movements between weaving looms and retail showrooms.',
        features: [
            { icon: '🧵', title: 'Artisan Textile SKU & Batch Tracking', desc: 'Granular tracking of unique handwoven Pidan silk tapestries, motif patterns, artisan consignment credits, and raw materials.' },
            { icon: '🐳', title: 'Containerized Microservices (Docker)', desc: 'Fully reproducible multi-container Docker Compose architecture separating client SSR, NestJS API gateway, background workers, and PostgreSQL database.' },
            { icon: '⚡', title: 'Modular NestJS Backend Engine', desc: 'Enterprise architecture leveraging TypeScript, Dependency Injection, validation pipes, TypeORM/Prisma transactions, and structured REST modules.' },
            { icon: '🖥️', title: 'Nuxt.js SSR / Vue 3 Interactive Dashboard', desc: 'Universal server-side rendered application with Pinia reactive state management, Tailwind CSS styling, and sub-second inventory searching.' },
            { icon: '📦', title: 'Real-Time Stock Reorder & Low-Stock Alerts', desc: 'Automated warehouse inventory reconciliations, threshold notifications for raw silk threads, and stock adjustments with audit trails.' },
            { icon: '🏷️', title: 'Barcode Generation & Showroom Transfers', desc: 'Instant barcode generation for finished silk products and multi-location transfers between weaving workshops and retail storefronts.' }
        ],
        techStack: ['Docker', 'Nuxt.js (Vue 3)', 'NestJS', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Tailwind CSS', 'Docker Compose', 'REST API'],
        arch: {
            headline: 'Containerized Nuxt.js SSR & NestJS Microservices Topology',
            subtext: 'Robust multi-container architecture orchestrating Nuxt.js presentation, NestJS business logic services, transactional persistence, and Redis caching inside an isolated Docker network.',
            pipeline: [
                { icon: '💻', step: '01. Client & Showroom', title: 'Nuxt.js SSR / Vue 3 Interface', desc: 'Server-side rendered dashboard with fast hydration, responsive barcode inputs, and reactive Pinia stock stores.' },
                { icon: '🐳', step: '02. Container Boundary', title: 'Docker Orchestration & Network', desc: 'Isolated Docker Compose network routing HTTP reverse-proxy traffic and managing container lifecycle.' },
                { icon: '🛡️', step: '03. API Gateway', title: 'NestJS Guards & Interceptors', desc: 'Strict TypeScript DTO validation pipes, JWT authentication guards, rate-limiting, and centralized logging.' },
                { icon: '⚙️', step: '04. Inventory Core', title: 'NestJS Domain Microservices', desc: 'Dependency-injected modules handling SKU batch creation, artisan consignments, and multi-stage stock calculations.' },
                { icon: '⚡', step: '05. Cache & Queues', title: 'Redis Cache & Background Jobs', desc: 'In-memory caching for product catalogs and asynchronous job processing for batch stock adjustments and reports.' },
                { icon: '🗄️', step: '06. Transactional Storage', title: 'PostgreSQL Relational DB', desc: 'ACID-compliant relational store with foreign key relations between weavers, silk rolls, invoices, and audit logs.' }
            ],
            specs: [
                { domain: 'System Status', details: 'In Progress (Active Development Phase)' },
                { domain: 'Infrastructure & DevOps', details: 'Docker & Docker Compose containerized multi-service runtime' },
                { domain: 'Frontend Framework', details: 'Nuxt.js 3 (Vue 3) SSR with TypeScript, Vite & Pinia Store' },
                { domain: 'Backend Framework', details: 'NestJS (TypeScript) with Modular Clean Architecture & Dependency Injection' },
                { domain: 'Database & Caching', details: 'PostgreSQL relational persistence with Redis fast in-memory caching' },
                { domain: 'Domain Specialization', details: 'Pidan Khmer Silk multi-variant textile tracking & artisan consignment accounting' }
            ]
        },
        images: []
    },
    'pos-and-ecommerce': {
        title: 'Omnichannel POS & E-Commerce Platform',
        badge: 'Unified Retail System • NestJS & React',
        domain: 'biolabs-pos.internal.app',
        accentGradient: 'from-rose-500 via-pink-600 to-indigo-600',
        badgeClass: 'bg-rose-100 text-rose-700 border border-rose-200 font-semibold',
        counterClass: 'bg-rose-100 text-rose-700 border border-rose-200',
        themeAccent: '#e11d48',
        themeGlow: 'rgba(225, 29, 72, 0.45)',
        liveBtnClass: 'bg-rose-600 hover:bg-rose-700 text-white',
        liveUrl: null,
        githubUrl: 'https://github.com/SokThavireak/pos-and-ecommerce',
        description: 'An omnichannel retail commerce engine and cashier point-of-sale system built with NestJS, React SPA, Tailwind CSS, and PostgreSQL. Features real-time multi-channel inventory synchronization between online customer storefronts and physical checkout counters, immutable stock movement audit ledgers, barcode scanning, order pickup workflows, and 4-tier role-based access control (Owner, Admin, Cashier, Customer).',
        features: [
            { icon: '🏪', title: 'Omnichannel Cashier POS Terminal', desc: 'High-throughput counter checkout interface featuring barcode scanner lookup, live SKU availability indicators, item discounts, and split cash/card payments.' },
            { icon: '📊', title: 'Real-Time Sales & Revenue Analytics', desc: 'Executive dashboard tracking yearly gross sales ($184k+), channel volume distribution (POS vs. Web), client counts, and top-performing products.' },
            { icon: '📦', title: 'Operations Hub & Quick Replenishment', desc: 'Central dispatch center allowing one-click inventory increments (+10, +50, +100 units), low-stock warnings, and direct lot adjustment.' },
            { icon: '📜', title: 'Immutable Stock Movement Ledger', desc: 'Comprehensive transaction history ledger logging event types (Restock, POS Sale, Web Order), quantity deltas, initiating staff, and post-transaction balances.' },
            { icon: '🚚', title: 'Order Fulfillment & Counter Dispatch', desc: 'Active fulfillment queue to accept web storefront orders, prepare item lots, confirm walk-in customer pickups, and trigger status updates.' },
            { icon: '🔐', title: '4-Tier RBAC & Audit Trail Logging', desc: 'Strict JWT authorization separating Owner, Admin, Cashier, and Customer capabilities with timestamped operator activity logs.' }
        ],
        techStack: ['NestJS', 'TypeScript', 'React.js', 'Tailwind CSS', 'PostgreSQL', 'JWT RBAC', 'Barcode Scanner', 'RESTful API', 'Vite'],
        arch: {
            headline: 'Unified Omnichannel Architecture with Multi-Channel Parity',
            subtext: 'High-concurrency retail system synchronizing online customer reservations and physical cashier checkouts with instantaneous stock reconciliation and audit verification.',
            pipeline: [
                { icon: '🖥️', step: '01. Dual Frontends', title: 'React Storefront & POS Terminal', desc: 'Tailwind-powered web e-commerce storefront for customers alongside an optimized high-speed POS counter for cashiers.' },
                { icon: '🛡️', step: '02. Security & RBAC', title: 'JWT Authentication & Guards', desc: 'NestJS AuthGuard interceptors validating stateless tokens and enforcing role policies across 4 user clearance tiers.' },
                { icon: '⚡', step: '03. API Gateway', title: 'Modular NestJS Controllers', desc: 'Strict TypeScript DTO validation pipes handling catalog taxonomy, order dispatch queues, and cashier sessions.' },
                { icon: '📦', step: '04. Inventory Engine', title: 'Real-Time Stock Reconciliation', desc: 'Atomic decrements preventing double-selling across web storefront reservations and physical POS counter transactions.' },
                { icon: '📜', step: '05. Audit Logger', title: 'Immutable Movement Ledger', desc: 'Every replenishment, sale, and stock intake is persisted to an immutable event ledger with operator tracking.' },
                { icon: '🗄️', step: '06. Relational Store', title: 'PostgreSQL Relational DB', desc: 'Structured transactional schema with foreign keys connecting products, categories, SKU barcodes, orders, and audit logs.' }
            ],
            specs: [
                { domain: 'System Topology', details: 'Unified Omnichannel NestJS Modular Backend + Decoupled React SPA' },
                { domain: 'Authentication & RBAC', details: 'Stateless JWT with 4-Tier Roles (Owner, Admin, Cashier, Customer)' },
                { domain: 'Inventory Parity', details: 'Atomic transaction locks guaranteeing synchronized stock between Web & POS' },
                { domain: 'Audit & Compliance', details: 'Immutable movement ledger recording user identity, IP, delta, and timestamps' },
                { domain: 'Data Architecture', details: 'PostgreSQL relational persistence with indexed barcode and order lookups' }
            ]
        },
        images: [
            // --- USER & CUSTOMER E-COMMERCE PAGES ---
            {
                src: 'img/POS and E-C/image.png',
                title: '01. User / Customer Storefront — Brand Landing & Hero',
                desc: 'Customer-facing modern storefront featuring precision research catalog banner, verified batch credentials, trust badges, and direct catalog exploration.'
            },
            {
                src: 'img/POS and E-C/image copy.png',
                title: '02. User / Customer Storefront — Shop Catalog & Category Filters',
                desc: 'Interactive shopping catalog with taxonomy sidebar (Precision Peptides, Editorial Apparel, Syringes), real-time price slider, size picker, and flash clearance banner.'
            },
            {
                src: 'img/POS and E-C/image copy 11.png',
                title: '03. User / Customer Storefront — Shopping Bag & Checkout Flow',
                desc: 'Responsive cart order summary with quantity accumulators, item removal, estimated taxes, cold-chain packaging guarantees, and secure 256-bit checkout.'
            },
            {
                src: 'img/POS and E-C/image copy 6.png',
                title: '04. User / Customer Portal — Order History & Live Tracking',
                desc: 'Customer self-service portal displaying active shipments with cold-chain tracking IDs (e.g. BIO-US-8923419), fulfillment status tags, and one-click reordering.'
            },
            {
                src: 'img/POS and E-C/image copy 3.png',
                title: '05. User / Customer Storefront — Retail & Experience Hub Locations',
                desc: 'Physical experience hub directory allowing customers to locate cold-chain pickup lockers, verified research counters, and flagship retail hubs across global regions.'
            },
            {
                src: 'img/POS and E-C/image copy 4.png',
                title: '06. User / Customer Storefront — Brand Story & Purity Mission',
                desc: 'Institutional transparency page detailing HPLC analytical testing, 99.4% batch purity metrics, and zero-latency retail inventory synchronization.'
            },
            {
                src: 'img/POS and E-C/image copy 5.png',
                title: '07. User / Authentication Gateway — 4-Tier RBAC Login',
                desc: 'Sleek dark-mode authentication portal with JWT session protection, OAuth SSO, and demo role switching between Owner, Admin, Cashier, and Customer.'
            },
            {
                src: 'img/POS and E-C/image copy 10.png',
                title: '08. User Profile & Credential Management (Admin Account)',
                desc: 'Authenticated profile settings console managing personal details, avatar upload, 256-bit JWT session status, and active RBAC clearance rights.'
            },
            // --- POS CASHIER & MULTI-CHANNEL OPERATIONS ---
            {
                src: 'img/POS and E-C/Screenshot 2026-10-17 010951.png',
                title: '09. Cashier POS Terminal #01 — Active Checkout Counter',
                desc: 'High-throughput point-of-sale interface equipped with live SKU barcode scanner (SKU 8934500101), active ticket builder, discount calculation, and split tender.'
            },
            {
                src: 'img/POS and E-C/Screenshot 2026-10-17 010929.png',
                title: '10. Operations Command — Multichannel Sales & Revenue Analytics',
                desc: 'Executive analytics suite tracking $184,920 annual turnover, channel volume breakdown (60% Web Storefront vs. 40% In-Store POS), and 1,226 active customer profiles.'
            },
            {
                src: 'img/POS and E-C/Screenshot 2026-10-17 010934.png',
                title: '11. Operations Hub — Product Catalog & SKU Management',
                desc: 'Complete inventory ledger displaying SKU codes, live stock quantities, wholesale vs. retail prices, and instant edit actions.'
            },
            {
                src: 'img/POS and E-C/Screenshot 2026-10-17 010946.png',
                title: '12. Operations Hub — Live Stock Balances & Quick Replenishment',
                desc: 'Counter inventory dispatch tool enabling one-click bulk restock lots (+10, +50, +100 units) and automated low-stock warnings.'
            },
            {
                src: 'img/POS and E-C/Screenshot 2026-10-17 011111.png',
                title: '13. Operations Hub — Stock Movement & Restock History Ledger',
                desc: 'Immutable real-time audit ledger logging stock intake events, cashier POS sales, web orders, quantity deltas, operator name, and remaining inventory.'
            },
            {
                src: 'img/POS and E-C/Screenshot 2026-10-17 011116.png',
                title: '14. Operations Hub — Incoming Orders & Counter Dispatch Queue',
                desc: 'Fulfillment queue managing web storefront customer orders and walk-in client pickups with instant Accept, Dispatched, and Fulfilled status updates.'
            },
            {
                src: 'img/POS and E-C/Screenshot 2026-10-17 011100.png',
                title: '15. Operations Hub — Add Product & POS Broadcast Engine',
                desc: 'Product intake workflow configuring SKU codes, barcode strings, price points, dosage specifications, and automatic broadcast to POS terminals.'
            },
            {
                src: 'img/POS and E-C/Screenshot 2026-10-17 010939.png',
                title: '16. Operations Hub — Category Taxonomy & Color Tint Management',
                desc: 'Hierarchical taxonomy creator managing slug routes, badge color tags, and category collections visible across web storefront and POS registers.'
            },
            {
                src: 'img/POS and E-C/Screenshot 2026-10-17 011056.png',
                title: '17. Operations Hub — User Provisioning & Team Access (RBAC)',
                desc: 'Team access management configuring role privileges across Owner, Admin, Cashier, and Customer accounts with active JWT authentication.'
            },
            {
                src: 'img/POS and E-C/image copy 7.png',
                title: '18. Admin Studio — Brand Customization & Dynamic Theme Tokens',
                desc: 'White-label brand customizer enabling dynamic color palette engine updates, custom SVG logo uploads, and real-time live preview broadcasting.'
            },
            {
                src: 'img/POS and E-C/Screenshot 2026-10-17 011127.png',
                title: '19. Admin Studio — Unified Activity & Security Audit Trail',
                desc: 'Chronological security audit log capturing every administrative action: ledger exports, barcode checkouts, price adjustments, and credential provisions.'
            }
        ]
    },
    'pop-commercial-photograph': {
        title: 'Pop Commercial Photograph Studio',
        badge: 'Commercial Studio Platform • Full-Stack Web',
        domain: 'pop-commercial-photo.internal.app',
        accentGradient: 'from-cyan-500 via-sky-600 to-indigo-600',
        badgeClass: 'bg-cyan-100 text-cyan-800 border border-cyan-200 font-semibold',
        counterClass: 'bg-cyan-100 text-cyan-800 border border-cyan-200',
        themeAccent: '#0891b2',
        themeGlow: 'rgba(8, 145, 178, 0.45)',
        liveBtnClass: 'bg-cyan-600 hover:bg-cyan-700 text-white',
        liveUrl: null,
        githubUrl: 'https://github.com/SokThavireak/pop-commercial-photograph',
        description: 'A bespoke commercial photography studio management and client engagement platform. Features an editorial portfolio showcase, interactive tiered service packages, dynamic rate calculator, staff workspace, client authentication, and behind-the-scenes journal.',
        features: [
            { icon: '📸', title: 'Editorial Commercial Showcase', desc: 'Curated editorial portfolio presentation highlighting brand campaigns, model direction, high-definition lighting, and commercial photo galleries.' },
            { icon: '🏷️', title: 'Tiered Pricing & Service Specs', desc: 'Transparent tiered packages (Starter, Editorial, Campaign) detailing studio hours, retouched images, licensing terms, and instant quote bookings.' },
            { icon: '👥', title: 'Staff Operations Workspace', desc: 'Dedicated staff dashboard managing production schedules, lighting gear prep, team roles, and active client campaign workflows.' },
            { icon: '🔐', title: 'Client Authentication & Profiles', desc: 'Secure client sign-in and registration portal providing private shoot reviews, deliverable downloads, and account settings.' },
            { icon: '📖', title: 'Production Journal & Behind-the-Scenes', desc: 'Editorial journal documenting equipment setups, lighting diagrams, color grading recipes, and studio case studies.' },
            { icon: '📩', title: 'Interactive Inquiry & Booking Engine', desc: 'Structured intake questionnaire capturing project brief, shoot location, date options, deliverables count, and contact details.' }
        ],
        techStack: ['Full-Stack', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'REST API', 'Auth / RBAC', 'Responsive Design'],
        arch: {
            headline: 'Modern Creative Studio & Client Operations Topology',
            subtext: 'High-performance creative portfolio architecture integrating high-resolution asset delivery, structured booking funnels, staff management, and client account authentication.',
            pipeline: [
                { icon: '🖥️', step: '01. Presentation', title: 'Client Storefront & Editorial Deck', desc: 'Responsive editorial layout optimized for high-DPI displays, fluid typography, and interactive booking inquiries.' },
                { icon: '🏷️', step: '02. Pricing Engine', title: 'Dynamic Package & Rate Config', desc: 'Tiered commercial packages with real-time add-on calculations (extra edits, licensing rights, studio fees).' },
                { icon: '🛡️', step: '03. Identity Layer', title: 'Client & Staff Authentication', desc: 'Role-based access separating public prospective clients, authenticated clients, and studio production staff.' },
                { icon: '💼', step: '04. Staff Workspace', title: 'Production & Session Scheduling', desc: 'Back-office operations managing active campaign calendars, studio bookings, and shoot deliverables.' },
                { icon: '📖', step: '05. Content Hub', title: 'Creative Journal & Articles', desc: 'Markdown-friendly publication engine for photography behind-the-scenes, lighting setups, and client highlights.' },
                { icon: '⚡', step: '06. Production Asset CDN', title: 'Optimized Image Pipeline', desc: 'Asset delivery with responsive breakpoints, lazy loading, and sub-second visual rendering.' }
            ],
            specs: [
                { domain: 'System Topology', details: 'Full-Stack Studio Web Application & Client Portal' },
                { domain: 'Authentication & Roles', details: 'Role-based authentication with Client & Staff privilege tiers' },
                { domain: 'Client Experience', details: 'Curated gallery, rate calculator, contact inquiry, and editorial journal' },
                { domain: 'Staff Operations', details: 'Studio schedule tracking, session assignments, and client project hub' },
                { domain: 'Repository', details: 'github.com/SokThavireak/pop-commercial-photograph' }
            ]
        },
        images: [
            {
                src: 'img/pop-commercial-photograph/localhost_3000_.png',
                title: '01. Studio Homepage & Commercial Showcase',
                desc: 'Editorial studio landing page showcasing high-fashion commercial campaigns, creative direction services, and featured production portfolios.'
            },
            {
                src: 'img/pop-commercial-photograph/localhost_3000_about.png',
                title: '02. Studio About & Artistic Philosophy',
                desc: 'About page detailing the studio mission, lead photographer biography, awards, technical gear inventory, and creative philosophy.'
            },
            {
                src: 'img/pop-commercial-photograph/localhost_3000_pricing.png',
                title: '03. Commercial Pricing & Package Matrices',
                desc: 'Tiered service pricing matrix displaying starter sessions, full-day commercial shoots, included retouched plates, and commercial licensing scopes.'
            },
            {
                src: 'img/pop-commercial-photograph/localhost_3000_journal.png',
                title: '04. Production Journal & Behind-The-Scenes',
                desc: 'Creative publication journal highlighting photoshoot case studies, lighting setups, studio stories, and photography techniques.'
            },
            {
                src: 'img/pop-commercial-photograph/localhost_3000_contact.png',
                title: '05. Booking Inquiry & Contact Form',
                desc: 'Comprehensive project intake form capturing commercial client briefs, date requests, location requirements, and direct studio inquiries.'
            },
            {
                src: 'img/pop-commercial-photograph/localhost_3000_staff.png',
                title: '06. Staff Operations & Production Dashboard',
                desc: 'Internal workspace for studio team members to review scheduled shoots, client requests, and equipment checklist management.'
            },
            {
                src: 'img/pop-commercial-photograph/localhost_3000_sign_in.png',
                title: '07. Client & Staff Secure Sign-In Portal',
                desc: 'Authentication gateway enabling registered clients and production team members to access private galleries and project consoles.'
            },
            {
                src: 'img/pop-commercial-photograph/localhost_3000_sign_up.png',
                title: '08. New Client Registration Portal',
                desc: 'Streamlined onboarding interface for commercial clients and agency partners to create an account and manage photo shoot bookings.'
            }
        ]
    }
};
