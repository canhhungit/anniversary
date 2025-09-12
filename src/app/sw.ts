import { defaultCache } from '@serwist/next/worker';
import { Serwist, disableDevLogs, NetworkFirst, CacheFirst } from 'serwist';
import type { PrecacheEntry, SerwistGlobalConfig } from 'serwist';
import { logger } from '../lib';

disableDevLogs();
// This declares the value of `injectionPoint` to TypeScript.
// `injectionPoint` is the string that will be replaced by the
// actual precache manifest. By default, this string is set to
// `"self.__SW_MANIFEST"`.
declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  navigationPreload: true,
  clientsClaim: true,
  // Cấu hình runtimeCaching tùy chỉnh
  runtimeCaching:
    // defaultCache,
    [
      // --- Quy tắc bổ sung: Cache cho các trang HTML ---
      {
        matcher: ({ request }) => request.mode === 'navigate',
        handler: new NetworkFirst({
          cacheName: 'html-pages',
        }),
      },
      {
        matcher: ({ request }) =>
          request.destination === 'image' ||
          request.destination === 'style' ||
          request.destination === 'script',
        handler: new CacheFirst({
          cacheName: 'static-assets',
        }),
      },
      // Cache-First cho fonts
      {
        matcher: ({ request }) => request.destination === 'font',
        handler: new CacheFirst({
          cacheName: 'fonts',
        }),
      },

      // Cache-First cho manifest và icons
      {
        matcher: ({ url }) =>
          url.pathname.includes('manifest') || url.pathname.includes('icon'),
        handler: new CacheFirst({
          cacheName: 'manifest-icons',
        }),
      },

      // NetworkFirst cho API calls và dynamic content
      {
        matcher: ({ url }) => url.pathname.startsWith('/api/'),
        handler: new NetworkFirst({
          cacheName: 'api-cache',
        }),
      },

      // Sử dụng defaultCache cho các request khác
      ...defaultCache,
    ],
});

serwist.addEventListeners();

// self.addEventListener('push', (event) => {
//   const data = event.data?.json() || {};
//   const title = data.title || 'Thông báo mới';
//   const options = {
//     body: data.body,
//     icon: '/icon.png',
//     data: data.url, // url để mở khi click
//   };
//   event.waitUntil(self.registration.showNotification(title, options));
// });
self.addEventListener('install', () => {
  logger.info('service worker installed.');
});

const sendDeliveryReportAction = () => {
  logger.info('Web push delivered.');
};

self.addEventListener('push', function (event) {
  if (!event.data) {
    return;
  }

  const payload = event.data.json();
  const { body, icon, image, badge, url, title } = payload;
  const notificationTitle = title ?? 'Hi';
  const notificationOptions = {
    body,
    icon,
    image,
    data: {
      url,
    },
    badge,
  };

  event.waitUntil(
    self.registration
      .showNotification(notificationTitle, notificationOptions)
      .then(() => {
        sendDeliveryReportAction();
      }),
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const { url } = event.notification.data || {};

  if (url) {
    logger.info('Notification clicked:', url);
    event.waitUntil(
      self.clients
        .matchAll({ type: 'window', includeUncontrolled: true })
        .then((clientList) => {
          // Nếu tab đã mở, focus vào
          logger.info('Client list:', clientList);

          for (const client of clientList) {
            if (client.url === url && 'focus' in client) {
              return client.focus();
            }
          }

          // Nếu chưa có tab nào mở url đó, mở mới
          if (self.clients.openWindow) {
            return self.clients.openWindow(url);
          }
        }),
    );
  }
});
