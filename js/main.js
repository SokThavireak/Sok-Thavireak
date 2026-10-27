/**
 * Sok Thavireak - Portfolio Main Interactive Application Logic
 * Manages scroll animations, featured projects slider, modal consoles, and fullscreen lightbox.
 */

// 0. Dynamic Section Loader (Supports both direct script inclusion and fetch fallback)
const PORTFOLIO_SECTIONS = [
    { id: 'section-about', file: 'sections/about.html', name: 'about' },
    { id: 'section-expertise', file: 'sections/expertise.html', name: 'expertise' },
    { id: 'section-projects', file: 'sections/projects.html', name: 'projects' },
    { id: 'section-experience', file: 'sections/experience.html', name: 'experience' },
    { id: 'section-contact', file: 'sections/contact.html', name: 'contact' }
];

async function loadPortfolioSections() {
    const placeholders = PORTFOLIO_SECTIONS.filter(s => document.getElementById(s.id));
    if (placeholders.length > 0) {
        await Promise.all(placeholders.map(async s => {
            const el = document.getElementById(s.id);
            if (!el) return;

            // 1. Check if section content is preloaded via modular script (compatible with file:/// and HTTP)
            if (window.PORTFOLIO_SECTIONS_DATA && window.PORTFOLIO_SECTIONS_DATA[s.name]) {
                el.outerHTML = window.PORTFOLIO_SECTIONS_DATA[s.name];
                return;
            }

            // 2. Fallback to HTTP fetch if running through web server (Live Server, Node, Nginx)
            try {
                const res = await fetch(s.file);
                if (res.ok) {
                    const html = await res.text();
                    const targetEl = document.getElementById(s.id);
                    if (targetEl) targetEl.outerHTML = html;
                } else {
                    console.error(`Failed to load section: ${s.file} (${res.status})`);
                }
            } catch (err) {
                console.warn(`Local fetch bypassed for section ${s.file}. If using file://, ensure sections/${s.name}.js is loaded.`);
            }
        }));
    }

    // Initialize interactive elements after sections are inserted
    initPortfolioAfterSectionsLoaded();
}

// 1. Scroll Reveal Animations
let revealObserver = null;
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealObserver) {
        revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    }
    revealElements.forEach(el => revealObserver.observe(el));
}

// 2. Featured Projects Full-Page Slider Controller
let currentProjectSlide = 0;
const totalProjectSlides = 6;
let slideAutoTimer = null;
let isSliderHovered = false;

function goToProjectSlide(index, restartTimer = true) {
    currentProjectSlide = (index + totalProjectSlides) % totalProjectSlides;

    // Update Slide visibility with transition classes
    for (let i = 0; i < totalProjectSlides; i++) {
        const slide = document.getElementById(`project-slide-${i}`);
        if (slide) {
            if (i === currentProjectSlide) {
                slide.classList.add('slide-active');
            } else {
                slide.classList.remove('slide-active');
            }
        }

        // Update tabs inside all slides
        const tabs = document.querySelectorAll(`[data-tab-index="${i}"]`);
        tabs.forEach(tab => {
            const progressBar = tab.querySelector('.tab-progress-bar');
            if (i === currentProjectSlide) {
                tab.classList.add('tab-active');
                if (progressBar) {
                    progressBar.style.transition = 'none';
                    progressBar.style.width = '0%';
                    void progressBar.offsetWidth;
                    progressBar.style.transition = 'width 7.5s linear';
                    progressBar.style.width = '100%';
                }
            } else {
                tab.classList.remove('tab-active');
                if (progressBar) {
                    progressBar.style.transition = 'none';
                    progressBar.style.width = '0%';
                }
            }
        });
    }

    // Update Counter Text
    const counter = document.getElementById('slider-counter');
    if (counter) {
        counter.textContent = `0${currentProjectSlide + 1} / 0${totalProjectSlides}`;
    }

    // Update macOS Frame Header Meta
    const frameMetadata = [
        { url: 'hrms.internal.app — Executive Admin Console', badge: 'Project 01 / 06', status: '<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>Live' },
        { url: 'sushi-pos.production.app — Cashier & Kitchen Terminal', badge: 'Project 02 / 06', status: '<span class="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>Stable' },
        { url: 'sflcambodia.com — Official Brand & Logistics Portal', badge: 'Project 03 / 06', status: '<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>Live' },
        { url: 'pidan-inventory.internal.app — Silk Warehouse ERP', badge: 'Project 04 / 06', status: '<span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>Active Dev' },
        { url: 'biolabs-pos.internal.app — Omnichannel POS & Operations Hub', badge: 'Project 05 / 06', status: '<span class="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></span>New Release' },
        { url: 'pop-commercial-photo.internal.app — Studio & Client Portal', badge: 'Project 06 / 06', status: '<span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>New Project' }
    ];
    const meta = frameMetadata[currentProjectSlide];
    if (meta) {
        const urlEl = document.getElementById('window-frame-url');
        const badgeEl = document.getElementById('window-frame-badge');
        const statusEl = document.getElementById('window-frame-status');
        if (urlEl) urlEl.textContent = meta.url;
        if (badgeEl) badgeEl.textContent = meta.badge;
        if (statusEl) statusEl.innerHTML = meta.status;
    }

    // Update Indicator Dots
    const dotsContainer = document.getElementById('slide-indicator-dots');
    if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('button');
        dots.forEach((dot, idx) => {
            if (idx === currentProjectSlide) {
                dot.className = 'w-5 h-2.5 rounded-full bg-blue-500 transition-all cursor-pointer shadow-xs';
            } else {
                dot.className = 'w-2.5 h-2.5 rounded-full bg-slate-700 hover:bg-slate-500 transition-all cursor-pointer';
            }
        });
    }

    if (restartTimer) {
        resetSlideAutoTimer();
    }
}

function nextProjectSlide() {
    goToProjectSlide(currentProjectSlide + 1);
}

function prevProjectSlide() {
    goToProjectSlide(currentProjectSlide - 1);
}

function resetSlideAutoTimer() {
    if (slideAutoTimer) clearInterval(slideAutoTimer);
    slideAutoTimer = setInterval(() => {
        // Pause rotation if hovering, or if modal or lightbox is active
        const modal = document.getElementById('project-modal');
        const lightbox = document.getElementById('lightbox-overlay');
        const isModalOpen = modal && modal.classList.contains('active-modal');
        const isLightboxOpen = lightbox && !lightbox.classList.contains('hidden');

        if (!isModalOpen && !isLightboxOpen && !isSliderHovered) {
            nextProjectSlide();
        }
    }, 7500);
}

// Attach hover listener to pause auto rotation on projects stage
function initSliderHoverListeners() {
    const viewport = document.getElementById('project-slides-viewport');
    if (viewport) {
        viewport.addEventListener('mouseenter', () => { isSliderHovered = true; });
        viewport.addEventListener('mouseleave', () => { isSliderHovered = false; });
    }
}

// Master initializer executed after all modular HTML sections are injected
function initPortfolioAfterSectionsLoaded() {
    initScrollReveal();
    goToProjectSlide(0, true);
    initSliderHoverListeners();
    activateNavLinks();

    // If page was loaded with a URL hash (e.g. #projects or #contact), smoothly scroll to it now
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
}

// Start loading modular sections on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadPortfolioSections);
} else {
    loadPortfolioSections();
}

// 3. Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const mobileLinks = document.querySelectorAll('.mobile-nav-link');

if (mobileMenuBtn && mobileMenu && menuIcon) {
    mobileMenuBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.toggle('hidden');
        if (isHidden) {
            menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        } else {
            menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        });
    });
}

// 4. Scroll Spy Active Links
const navLinks = document.querySelectorAll('.nav-link');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

function activateNavLinks() {
    const pageSections = document.querySelectorAll('section, footer');
    let currentSectionId = '';
    pageSections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id');
        }
    });

    if (window.scrollY < 200) {
        currentSectionId = '';
    }

    navLinks.forEach(link => {
        link.classList.remove('text-blue-600', 'font-semibold');
        link.classList.add('text-slate-600');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('text-blue-600', 'font-semibold');
            link.classList.remove('text-slate-600');
        }
    });

    mobileNavLinks.forEach(link => {
        link.classList.remove('text-blue-600', 'font-semibold');
        link.classList.add('text-slate-600');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('text-blue-600', 'font-semibold');
            link.classList.remove('text-slate-600');
        }
    });
}

window.addEventListener('scroll', activateNavLinks);
window.addEventListener('load', activateNavLinks);

// 4b. Hide Navbar on Scroll Down, Show on Scroll Up
const mainNav = document.getElementById('main-nav');
let lastScrollY = window.scrollY;
const scrollDeltaThreshold = 8; // Small delta to prevent micro-jitter

window.addEventListener('scroll', () => {
    if (!mainNav) return;
    const currentScrollY = window.scrollY;

    // If mobile menu is open, don't hide the nav
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mainNav.classList.remove('-translate-y-full');
        lastScrollY = currentScrollY;
        return;
    }

    // Always show navbar at or near the very top of the page
    if (currentScrollY <= 60) {
        mainNav.classList.remove('-translate-y-full');
        lastScrollY = currentScrollY;
        return;
    }

    const scrollDifference = currentScrollY - lastScrollY;

    // Check if scroll delta exceeds threshold
    if (Math.abs(scrollDifference) > scrollDeltaThreshold) {
        if (scrollDifference > 0) {
            // Scrolling DOWN -> Hide Navbar
            mainNav.classList.add('-translate-y-full');
        } else {
            // Scrolling UP -> Reveal Navbar
            mainNav.classList.remove('-translate-y-full');
        }
        lastScrollY = currentScrollY;
    }
}, { passive: true });

// 5. Project Details & Interactive Multi-Tab Console Modal
let currentModalProject = null;
let currentGalleryIndex = 0;

function switchModalTab(tabName) {
    const tabs = ['gallery', 'arch', 'specs'];
    tabs.forEach(t => {
        const btn = document.getElementById(`tab-btn-${t}`);
        const view = document.getElementById(`modal-tab-${t}`);
        if (btn) {
            if (t === tabName) {
                btn.classList.add('active', 'bg-white', 'text-slate-900', 'shadow-xs');
                btn.classList.remove('text-slate-600');
            } else {
                btn.classList.remove('active', 'bg-white', 'text-slate-900', 'shadow-xs');
                btn.classList.add('text-slate-600');
            }
        }
        if (view) {
            if (t === tabName) {
                view.classList.remove('hidden');
            } else {
                view.classList.add('hidden');
            }
        }
    });
}

function openProjectModal(projectId) {
    if (typeof projectsData === 'undefined') return;
    const project = projectsData[projectId];
    if (!project) return;

    currentModalProject = project;
    currentGalleryIndex = 0;

    // Accent bar & badges
    const accentBar = document.getElementById('modal-accent-bar');
    if (accentBar) accentBar.className = `h-1 w-full bg-gradient-to-r ${project.accentGradient}`;

    const badgeEl = document.getElementById('modal-badge');
    if (badgeEl) {
        badgeEl.className = `px-2.5 py-1 rounded-full text-xs font-mono font-medium ${project.badgeClass}`;
        badgeEl.textContent = project.badge;
    }

    // Domain indicator
    const domainEl = document.getElementById('modal-domain');
    if (domainEl) domainEl.textContent = project.domain || 'system.internal';

    // Gallery count tab indicator
    const tabGalleryCount = document.getElementById('tab-gallery-count');
    const galleryBtn = document.getElementById('tab-btn-gallery');
    const hasImages = project.images && project.images.length > 0;

    if (tabGalleryCount) {
        tabGalleryCount.textContent = hasImages ? project.images.length : '0';
    }

    // Dynamic theme accent
    const modalBox = document.querySelector('.modal-content-box');
    if (modalBox) {
        modalBox.style.setProperty('--gallery-accent', project.themeAccent || '#2563eb');
        modalBox.style.setProperty('--gallery-accent-glow', project.themeGlow || 'rgba(37, 99, 235, 0.45)');
    }

    const counterEl = document.getElementById('gallery-counter');
    if (counterEl) {
        counterEl.className = `text-xs font-mono px-2 py-0.5 rounded-full font-semibold ${project.counterClass || 'bg-blue-100 text-blue-700 border border-blue-200'}`;
    }

    const titleEl = document.getElementById('modal-title');
    const descEl = document.getElementById('modal-description');
    if (titleEl) titleEl.textContent = project.title;
    if (descEl) descEl.textContent = project.description;

    // Render features in Specs tab
    const featuresContainer = document.getElementById('modal-features');
    if (featuresContainer && project.features) {
        featuresContainer.innerHTML = project.features.map(f => `
            <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-xs transition-all">
                <div class="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
                    <span class="text-base">${f.icon}</span>
                    <span>${f.title}</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">${f.desc}</p>
            </div>
        `).join('');
    }

    // Render tech stack in Specs tab
    const techContainer = document.getElementById('modal-tech-stack');
    if (techContainer && project.techStack) {
        techContainer.innerHTML = project.techStack.map(t => `
            <span class="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md text-xs font-mono border border-slate-200 font-medium">${t}</span>
        `).join('');
    }

    // Render Architecture Tab
    if (project.arch) {
        const archHeadline = document.getElementById('arch-headline');
        const archSubtext = document.getElementById('arch-subtext');
        if (archHeadline) archHeadline.textContent = project.arch.headline;
        if (archSubtext) archSubtext.textContent = project.arch.subtext;

        const pipelineContainer = document.getElementById('arch-pipeline-container');
        if (pipelineContainer && project.arch.pipeline) {
            pipelineContainer.innerHTML = project.arch.pipeline.map(p => `
                <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-200/90 flex flex-col justify-between hover:border-blue-300 transition-colors">
                    <div>
                        <div class="flex items-center justify-between gap-2 mb-2">
                            <span class="text-base">${p.icon}</span>
                            <span class="text-[10px] font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 font-semibold">${p.step}</span>
                        </div>
                        <h6 class="text-xs font-bold text-slate-900 mb-1">${p.title}</h6>
                        <p class="text-[11px] text-slate-600 leading-relaxed">${p.desc}</p>
                    </div>
                </div>
            `).join('');
        }

        const specsTbody = document.getElementById('arch-specs-tbody');
        if (specsTbody && project.arch.specs) {
            specsTbody.innerHTML = project.arch.specs.map(s => `
                <tr class="hover:bg-slate-50/70 transition-colors">
                    <td class="py-2.5 px-4 font-mono font-semibold text-slate-900">${s.domain}</td>
                    <td class="py-2.5 px-4 font-mono text-slate-600">${s.details}</td>
                </tr>
            `).join('');
        }
    }

    // Action buttons
    const liveBtn = document.getElementById('modal-live-btn');
    if (liveBtn) {
        if (project.liveUrl) {
            liveBtn.href = project.liveUrl;
            liveBtn.style.display = 'inline-flex';
            if (project.liveBtnClass) {
                liveBtn.className = `inline-flex items-center gap-1.5 ${project.liveBtnClass} font-mono text-xs px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 shadow-xs font-medium`;
            }
        } else {
            liveBtn.style.display = 'none';
        }
    }

    const githubBtn = document.getElementById('modal-github-btn');
    if (githubBtn) {
        if (project.githubUrl) {
            githubBtn.href = project.githubUrl;
            githubBtn.style.display = 'inline-flex';
        } else {
            githubBtn.style.display = 'none';
        }
    }

    // Gallery handling
    const galleryContainer = document.getElementById('gallery-container');
    const noGalleryMsg = document.getElementById('no-gallery-message');

    if (hasImages) {
        if (galleryContainer) galleryContainer.style.display = 'block';
        if (noGalleryMsg) noGalleryMsg.classList.add('hidden');
        if (galleryBtn) galleryBtn.style.display = 'flex';
        renderGalleryThumbnails(project.images);
        setGalleryImage(0);
        switchModalTab('gallery');
    } else {
        if (galleryContainer) galleryContainer.style.display = 'none';
        if (noGalleryMsg) noGalleryMsg.classList.remove('hidden');
        if (galleryBtn) galleryBtn.style.display = 'none';
        // For projects without screenshot gallery, land directly on Architecture
        switchModalTab('arch');
    }

    // Show modal & disable background scroll
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.classList.add('active-modal');
        document.body.classList.add('overflow-hidden');
        const scrollContainer = modal.querySelector('.modal-scroll');
        if (scrollContainer) scrollContainer.scrollTop = 0;
    }
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.classList.remove('active-modal');
        document.body.classList.remove('overflow-hidden');
    }
    currentModalProject = null;
}

function handleBackdropClick(e) {
    if (e.target.id === 'project-modal') {
        closeProjectModal();
    }
}

function renderGalleryThumbnails(images) {
    const thumbsContainer = document.getElementById('gallery-thumbnails');
    if (!thumbsContainer) return;
    thumbsContainer.innerHTML = images.map((img, idx) => `
        <button type="button" onclick="setGalleryImage(${idx})"
            class="gallery-thumb flex-shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-lg overflow-hidden border-2 border-slate-200 bg-slate-100 cursor-pointer focus:outline-none ${idx === 0 ? 'active' : ''}"
            data-index="${idx}" title="${img.title}">
            <img src="${img.src}" alt="${img.title}" class="w-full h-full object-cover pointer-events-none">
        </button>
    `).join('');
}

function setGalleryImage(index) {
    if (!currentModalProject || !currentModalProject.images || currentModalProject.images.length === 0) return;
    const images = currentModalProject.images;
    currentGalleryIndex = (index + images.length) % images.length;
    const imgData = images[currentGalleryIndex];

    const mainImg = document.getElementById('gallery-main-img');
    const scrollWrapper = document.getElementById('gallery-img-scroll-wrapper');
    if (mainImg) {
        mainImg.style.opacity = '0.3';
        setTimeout(() => {
            mainImg.src = imgData.src;
            mainImg.alt = imgData.title;
            mainImg.style.opacity = '1';
            if (scrollWrapper) scrollWrapper.scrollTop = 0;
        }, 100);
    }

    const counter = document.getElementById('gallery-counter');
    const title = document.getElementById('gallery-img-title');
    const desc = document.getElementById('gallery-img-desc');
    if (counter) counter.textContent = `${currentGalleryIndex + 1} / ${images.length}`;
    if (title) title.textContent = imgData.title;
    if (desc) desc.textContent = imgData.desc;

    // Update active thumbnail horizontally without scrolling the modal parent
    const thumbs = document.querySelectorAll('.gallery-thumb');
    const thumbsContainer = document.getElementById('gallery-thumbnails');
    thumbs.forEach((thumb, idx) => {
        if (idx === currentGalleryIndex) {
            thumb.classList.add('active');
            if (thumbsContainer) {
                const thumbLeft = thumb.offsetLeft - thumbsContainer.offsetLeft;
                const targetScroll = thumbLeft - (thumbsContainer.clientWidth / 2) + (thumb.clientWidth / 2);
                thumbsContainer.scrollTo({ left: targetScroll, behavior: 'smooth' });
            }
        } else {
            thumb.classList.remove('active');
        }
    });
}

function prevGalleryImage() {
    setGalleryImage(currentGalleryIndex - 1);
}

function nextGalleryImage() {
    setGalleryImage(currentGalleryIndex + 1);
}

function openLightbox() {
    if (!currentModalProject || !currentModalProject.images || currentModalProject.images.length === 0) return;
    const imgData = currentModalProject.images[currentGalleryIndex];
    const lightbox = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCap = document.getElementById('lightbox-caption');

    if (lightbox && lightboxImg && lightboxCap) {
        lightboxImg.src = imgData.src;
        lightboxImg.alt = imgData.title;
        lightboxCap.textContent = `${imgData.title} — ${imgData.desc}`;
        lightbox.classList.remove('hidden');
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox-overlay');
    if (lightbox) {
        lightbox.classList.add('hidden');
    }
}

// 6. Keyboard Controls
window.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox-overlay');
    const modal = document.getElementById('project-modal');

    if (lightbox && !lightbox.classList.contains('hidden')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            prevGalleryImage();
            openLightbox();
        } else if (e.key === 'ArrowRight') {
            nextGalleryImage();
            openLightbox();
        }
        return;
    }

    if (modal && modal.classList.contains('active-modal')) {
        if (e.key === 'Escape') {
            closeProjectModal();
        } else if (e.key === 'ArrowLeft') {
            prevGalleryImage();
        } else if (e.key === 'ArrowRight') {
            nextGalleryImage();
        }
        return;
    }

    // Keyboard navigation for Featured Projects slider when modal is closed
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInView) {
            if (e.key === 'ArrowLeft') {
                prevProjectSlide();
            } else if (e.key === 'ArrowRight') {
                nextProjectSlide();
            }
        }
    }
});
