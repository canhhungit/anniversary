'use client';

import { useCallback, useEffect, useState } from 'react';
import { logger } from '@/lib/logger';
import {
  notificationUnsupported,
  registerAndSubscribe,
} from '@/utils/notification';

const BANNER_DISMISS_KEY = 'notification_permission_banner_dismissed_at';
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

export default function NotificationPermissionPrompt() {
  const [showBanner, setShowBanner] = useState(false);
  const [isUnsupported, setIsUnsupported] = useState(true);
  const [isRequesting, setIsRequesting] = useState(false);

  const handlePermissionGranted = useCallback(async () => {
    try {
      await registerAndSubscribe(() => null);
      if (typeof window !== 'undefined') {
        localStorage.removeItem(BANNER_DISMISS_KEY);
      }
      setShowBanner(false);
    } catch (error) {
      logger.error(
        'Failed to register notifications after permission granted:',
        error,
      );
    }
  }, []);

  const requestPermission = useCallback(async () => {
    if (typeof window === 'undefined') {
      return;
    }

    const unsupported = notificationUnsupported();
    setIsUnsupported(unsupported);

    if (unsupported) {
      return;
    }

    try {
      setIsRequesting(true);
      const result = await Notification.requestPermission();

      if (result === 'granted') {
        await handlePermissionGranted();
        return;
      }

      if (result === 'denied') {
        setShowBanner(true);
        return;
      }

      // Nếu người dùng đóng dialog mà không chọn, không làm gì thêm.
    } catch (error) {
      logger.error('Failed to request notification permission:', error);
    } finally {
      setIsRequesting(false);
    }
  }, [handlePermissionGranted]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const unsupported = notificationUnsupported();
    setIsUnsupported(unsupported);

    if (unsupported) {
      return;
    }

    const permission = Notification.permission;

    if (permission === 'granted') {
      void handlePermissionGranted();
      return;
    }

    if (permission === 'denied') {
      const lastDismiss = localStorage.getItem(BANNER_DISMISS_KEY);
      const dismissedRecently =
        lastDismiss && Date.now() - Number(lastDismiss) < ONE_DAY_MS;

      if (!dismissedRecently) {
        setShowBanner(true);
      }
      return;
    }

    void requestPermission();
  }, [handlePermissionGranted, requestPermission]);

  const handleDismiss = () => {
    if (typeof window === 'undefined') return;

    localStorage.setItem(BANNER_DISMISS_KEY, Date.now().toString());
    setShowBanner(false);
  };

  const handleTryAgain = async () => {
    if (typeof window === 'undefined') return;

    await requestPermission();
  };

  if (isUnsupported || !showBanner) {
    return null;
  }

  return (
    <div className="sticky top-0 z-50 bg-amber-400 text-slate-900 shadow-lg">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-1 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="flex flex-1 items-start gap-3">
          <span className=" text-lg">🔔</span>
          <div className="mt-1 space-y-1">
            {/* <p className="font-semibold">Thông báo đang bị tắt</p> */}
            <p className="text-xs sm:text-sm">
              Hãy bật thông báo để không bỏ lỡ các cập nhật quan trọng.
            </p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={handleTryAgain}
            disabled={isRequesting}
            className="rounded-md bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-200 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isRequesting ? 'Đang kiểm tra…' : 'Bật lại'}
          </button>
          <button
            type="button"
            onClick={handleDismiss}
            className="rounded-md px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:text-slate-900"
          >
            Bỏ qua
          </button>
        </div>
      </div>
    </div>
  );
}
