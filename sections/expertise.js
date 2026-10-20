/**
 * Sok Thavireak - Portfolio Sections Content (JS Bundle)
 */
window.PORTFOLIO_SECTIONS_DATA = window.PORTFOLIO_SECTIONS_DATA || {};

window.PORTFOLIO_SECTIONS_DATA['expertise'] = `
    <!-- Skills / Expertise Section -->
    <section id="skills" class="relative z-10 py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6">
            <!-- Section Header -->
            <div class="text-center max-w-3xl mx-auto mb-16 reveal">
                <div
                    class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-50 text-blue-700 border border-blue-200/80 mb-3">
                    <span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span>Technical Toolkit</span>
                </div>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                    Skills & Core Technologies
                </h2>
                <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Technologies and tools I use to build scalable web applications, manage databases, and administer IT
                    infrastructure.
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Pillar 1: Backend Systems & APIs -->
                <div
                    class="bg-slate-50/90 p-6 rounded-2xl border border-slate-200/90 hover:-translate-y-1.5 hover:shadow-lg hover:border-blue-300 transition-all duration-300 reveal flex flex-col justify-between group shadow-xs">
                    <div>
                        <div
                            class="w-10 h-10 rounded-xl bg-blue-100/80 border border-blue-200 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01">
                                </path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                            Backend & APIs
                        </h3>
                        <p class="text-xs text-slate-500 mb-4 leading-relaxed font-mono">
                            Decoupled services, cryptographic auth, business logic engines.
                        </p>
                        <ul class="space-y-2.5 text-xs text-slate-700 mb-5">
                            <li class="flex items-start gap-2"><span class="text-blue-600 font-bold mt-0.5">▹</span>
                                <span><strong>NestJS & Node.js</strong> modular TypeScript microservices</span></li>
                            <li class="flex items-start gap-2"><span class="text-blue-600 font-bold mt-0.5">▹</span>
                                <span><strong>Express.js & REST APIs</strong> asynchronous endpoint design</span></li>
                            <li class="flex items-start gap-2"><span class="text-blue-600 font-bold mt-0.5">▹</span>
                                <span><strong>Stateless JWT & RBAC</strong> token security & route guarding</span></li>
                            <li class="flex items-start gap-2"><span class="text-blue-600 font-bold mt-0.5">▹</span>
                                <span><strong>Automated Engines</strong> (Inventory ledger & calculation
                                    algorithms)</span></li>
                        </ul>
                    </div>
                    <div
                        class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/80 font-mono text-[10px] text-slate-600">
                        <span class="bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-100">NestJS</span>
                        <span class="bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-100">Node.js</span>
                        <span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">Express</span>
                        <span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">REST APIs</span>
                    </div>
                </div>

                <!-- Pillar 2: Modern Frontend Systems -->
                <div
                    class="bg-slate-50/90 p-6 rounded-2xl border border-slate-200/90 hover:-translate-y-1.5 hover:shadow-lg hover:border-purple-300 transition-all duration-300 reveal delay-100 flex flex-col justify-between group shadow-xs">
                    <div>
                        <div
                            class="w-10 h-10 rounded-xl bg-purple-100/80 border border-purple-200 text-purple-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                </path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-2">
                            Frontend Systems
                        </h3>
                        <p class="text-xs text-slate-500 mb-4 leading-relaxed font-mono">
                            Reactive single-page apps, responsive UI, micro-animations.
                        </p>
                        <ul class="space-y-2.5 text-xs text-slate-700 mb-5">
                            <li class="flex items-start gap-2"><span class="text-purple-600 font-bold mt-0.5">▹</span>
                                <span><strong>React.js & JavaScript ES6+</strong> component modularity</span></li>
                            <li class="flex items-start gap-2"><span class="text-purple-600 font-bold mt-0.5">▹</span>
                                <span><strong>State & Route Guarding</strong> with dynamic token recovery</span></li>
                            <li class="flex items-start gap-2"><span class="text-purple-600 font-bold mt-0.5">▹</span>
                                <span><strong>Tailwind CSS & Bootstrap 5</strong> modern design systems</span></li>
                            <li class="flex items-start gap-2"><span class="text-purple-600 font-bold mt-0.5">▹</span>
                                <span><strong>High-Performance UI/UX</strong> with fluid micro-interactions</span></li>
                        </ul>
                    </div>
                    <div
                        class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/80 font-mono text-[10px] text-slate-600">
                        <span
                            class="bg-purple-50 text-purple-700 px-2 py-0.5 rounded border border-purple-100">React.js</span>
                        <span
                            class="bg-purple-50 text-purple-700 px-2 py-0.5 rounded border border-purple-100">ES6+</span>
                        <span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">Tailwind</span>
                        <span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">SPA</span>
                    </div>
                </div>

                <!-- Pillar 3: Data Architecture & Persistence -->
                <div
                    class="bg-slate-50/90 p-6 rounded-2xl border border-slate-200/90 hover:-translate-y-1.5 hover:shadow-lg hover:border-emerald-300 transition-all duration-300 reveal delay-200 flex flex-col justify-between group shadow-xs">
                    <div>
                        <div
                            class="w-10 h-10 rounded-xl bg-emerald-100/80 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4">
                                </path>
                            </svg>
                        </div>
                        <h3
                            class="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2">
                            Data & Persistence
                        </h3>
                        <p class="text-xs text-slate-500 mb-4 leading-relaxed font-mono">
                            Relational modeling, transaction integrity, query tuning.
                        </p>
                        <ul class="space-y-2.5 text-xs text-slate-700 mb-5">
                            <li class="flex items-start gap-2"><span class="text-emerald-600 font-bold mt-0.5">▹</span>
                                <span><strong>PostgreSQL & MySQL</strong> relational schema normalization</span></li>
                            <li class="flex items-start gap-2"><span class="text-emerald-600 font-bold mt-0.5">▹</span>
                                <span><strong>TypeORM & Prisma ORM</strong> entity mapping & migrations</span></li>
                            <li class="flex items-start gap-2"><span class="text-emerald-600 font-bold mt-0.5">▹</span>
                                <span><strong>ACID Compliance</strong> & transactional rollback guarantees</span></li>
                            <li class="flex items-start gap-2"><span class="text-emerald-600 font-bold mt-0.5">▹</span>
                                <span><strong>Redis In-Memory Caching</strong> & high-throughput caching</span></li>
                        </ul>
                    </div>
                    <div
                        class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/80 font-mono text-[10px] text-slate-600">
                        <span
                            class="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-100">PostgreSQL</span>
                        <span
                            class="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-100">Redis</span>
                        <span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">MySQL</span>
                        <span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">ACID</span>
                    </div>
                </div>

                <!-- Pillar 4: Infrastructure, Security & IT -->
                <div
                    class="bg-slate-50/90 p-6 rounded-2xl border border-slate-200/90 hover:-translate-y-1.5 hover:shadow-lg hover:border-amber-300 transition-all duration-300 reveal delay-300 flex flex-col justify-between group shadow-xs">
                    <div>
                        <div
                            class="w-10 h-10 rounded-xl bg-amber-100/80 border border-amber-200 text-amber-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                                </path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2">
                            Infra & DevOps
                        </h3>
                        <p class="text-xs text-slate-500 mb-4 leading-relaxed font-mono">
                            Docker containers, cloud deployments, network routing.
                        </p>
                        <ul class="space-y-2.5 text-xs text-slate-700 mb-5">
                            <li class="flex items-start gap-2"><span class="text-amber-600 font-bold mt-0.5">▹</span>
                                <span><strong>Docker & Docker Compose</strong> multi-service orchestration</span></li>
                            <li class="flex items-start gap-2"><span class="text-amber-600 font-bold mt-0.5">▹</span>
                                <span><strong>Cloud Deployment</strong> (Render, Webhook triggers, SSL)</span></li>
                            <li class="flex items-start gap-2"><span class="text-amber-600 font-bold mt-0.5">▹</span>
                                <span><strong>Git & GitHub</strong> branching, semantic commits, PR reviews</span></li>
                            <li class="flex items-start gap-2"><span class="text-amber-600 font-bold mt-0.5">▹</span>
                                <span><strong>Network Infrastructure</strong> (Routers, switches, server admin)</span>
                            </li>
                        </ul>
                    </div>
                    <div
                        class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/80 font-mono text-[10px] text-slate-600">
                        <span
                            class="bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-100">Docker</span>
                        <span class="bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-100">Git</span>
                        <span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">Render</span>
                        <span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">Networks</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
