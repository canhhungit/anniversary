'use client';

import { logger } from '@/lib/logger';
import { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const DISMISS_KEY = 'pwa_install_dismissed_at';
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    // Kiểm tra nếu user đã ấn bỏ qua trong vòng 24h
    const lastDismiss = localStorage.getItem(DISMISS_KEY);
    if (lastDismiss && Date.now() - Number(lastDismiss) < ONE_DAY_MS) {
      return; // không hiển thị
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallPrompt(true);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt,
      );
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    try {
      await deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    } catch (error) {
      logger.error('Error during app installation:', error);
    }
  };

  const handleDismiss = () => {
    localStorage.setItem(DISMISS_KEY, Date.now().toString());
    setShowInstallPrompt(false);
  };

  if (isInstalled || !showInstallPrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3">
      <div className="bg-gray-900 border border-blue-400 rounded-lg shadow-lg flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-2">
          <svg
            className="w-5 h-5 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 18h.01M6 6h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2z"
            />
          </svg>
          <span className="text-sm text-white">
            Cài đặt ứng dụng để có trải nghiệm tốt hơn
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleInstallClick}
            className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-1 rounded text-sm"
          >
            Cài đặt
          </button>
          <button
            onClick={handleDismiss}
            className="text-gray-400 hover:text-gray-200 text-sm"
          >
            Bỏ qua
          </button>
        </div>
      </div>
    </div>
  );
}
