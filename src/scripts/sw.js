import { precacheAndRoute } from 'workbox-precaching';

// do precaching
precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', () => {
  console.log('Service Worker: installed');
  self.skipWaiting();
});
