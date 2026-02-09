const CACHE_NAME = 'jara-cache-v1';
const urlsToCache = [
  '/',
  '/That-Jara-guy/index.html',
  '/That-Jara-guy/jara-story.mp3',
  '/That-Jara-guy/manifest.json'
  // Add more files if you have CSS, images, or JS
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
