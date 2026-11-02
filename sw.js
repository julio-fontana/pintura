// Service worker minimo: solo para que Chrome ofrezca "Instalar app".
// No guarda nada en cache: la app siempre carga la version publicada en GitHub.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* red normal */ });
