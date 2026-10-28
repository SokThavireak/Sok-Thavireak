/**
 * Service Worker: High-Performance Image & Asset Cache for Sok Thavireak Portfolio
 * Implements a Cache-First strategy for images to achieve instant loading.
 */

const CACHE_NAME = 'portfolio-static-v2';
const IMAGE_CACHE_NAME = 'portfolio-images-v1';

const STATIC_ASSETS = [
    './',
    './index.html',
    './css/style.css',
    './js/main.js',
    './js/projects-data.js',
    './sections/about.js',
    './sections/expertise.js',
    './sections/projects.js',
    './sections/experience.js',
    './sections/contact.js'
];

// Install: Cache critical shell assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(STATIC_ASSETS);
        }).then(() => self.skipWaiting())
    );
});

// Activate: Clean up outdated caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME && key !== IMAGE_CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch: Optimized Cache-First for images, Stale-While-Revalidate for static assets
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Only handle GET requests
    if (event.request.method !== 'GET') return;

    // Image Caching (Cache-First)
    if (url.pathname.match(/\.(png|jpg|jpeg|webp|svg|gif|ico)$/i) || url.pathname.includes('/img/')) {
        event.respondWith(
            caches.open(IMAGE_CACHE_NAME).then(async (cache) => {
                const cachedResponse = await cache.match(event.request);
                if (cachedResponse) {
                    return cachedResponse;
                }
                try {
                    const networkResponse = await fetch(event.request);
                    if (networkResponse && networkResponse.status === 200) {
                        cache.put(event.request, networkResponse.clone());
                    }
                    return networkResponse;
                } catch (error) {
                    return cachedResponse || Response.error();
                }
            })
        );
        return;
    }

    // Static assets (Stale-While-Revalidate)
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            const fetchPromise = fetch(event.request).then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200) {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                }
                return networkResponse;
            }).catch(() => cachedResponse);

            return cachedResponse || fetchPromise;
        })
    );
});
