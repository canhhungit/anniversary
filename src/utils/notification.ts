import { getEnv, logger } from '../lib';

/* eslint-disable @typescript-eslint/no-unused-vars */
const SERVICE_WORKER_FILE_PATH = '/sw.js';

export function notificationUnsupported(): boolean {
  let unsupported = false;
  if (
    !('serviceWorker' in navigator) ||
    !('PushManager' in window) ||
    !('showNotification' in ServiceWorkerRegistration.prototype)
  ) {
    unsupported = true;
  }
  return unsupported;
}

export function checkPermissionStateAndAct(
  onSubscribe: (subs: PushSubscription | null) => void,
): void {
  const state: NotificationPermission = Notification.permission;
  switch (state) {
    case 'denied':
      break;
    case 'granted':
      registerAndSubscribe(onSubscribe);
      break;
    case 'default':
      break;
  }
}

async function subscribe(
  onSubscribe: (subs: PushSubscription | null) => void,
): Promise<void> {
  navigator.serviceWorker.ready
    .then((registration: ServiceWorkerRegistration) => {
      return registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: getEnv('NEXT_PUBLIC_VAPID_PUBLIC_KEY'),
      });
    })
    .then((subscription: PushSubscription) => {
      logger.info('Created subscription Object: ', subscription.toJSON());
      submitSubscription(subscription).then(() => {
        onSubscribe(subscription);
      });
    })
    .catch((e) => {
      logger.error('Failed to subscribe cause of: ', e);
      // showToastr(e.message, 'error');
    });
}

async function submitSubscription(
  subscription: PushSubscription,
): Promise<void> {
  // Call API to save subscription
}

export async function registerAndSubscribe(
  onSubscribe: (subs: PushSubscription | null) => void,
): Promise<void> {
  try {
    await navigator.serviceWorker.register(SERVICE_WORKER_FILE_PATH);
    await subscribe(onSubscribe);
  } catch (e) {
    logger.error('Failed to register service-worker: ', e);
  }
}

export async function sendWebPush(message: string | null): Promise<void> {
  const endPointUrl = '/api/notification/sendPush';
  const pushBody = {
    title: 'Test Push',
    body: message ?? 'This is a test push message',
    image: '/next.png',
    icon: 'nextjs.png',
    url: 'https://google.com',
  };
  const res = await fetch(endPointUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pushBody),
  });
  const result = await res.json();
  logger.info(result);
}
