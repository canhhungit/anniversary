'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { logger } from '../lib';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logger.error('Global error:', error);
  }, [error]);

  return (
    <html lang="vi">
      <body className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-white">
        <div className="mx-auto max-w-md text-center">
          <div className="mb-6 text-6xl">⚠️</div>
          <h2 className="mb-4 text-2xl font-bold text-red-400">
            Đã xảy ra lỗi!
          </h2>
          <p className="mb-6 text-slate-400">
            {error.message ||
              'Một lỗi không mong muốn đã xảy ra. Vui lòng thử lại.'}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              Thử lại
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold text-white transition hover:border-white/40"
            >
              Về trang chủ
            </Link>
          </div>
          {error.digest && (
            <p className="mt-6 text-xs text-slate-500">
              Mã lỗi: {error.digest}
            </p>
          )}
        </div>
      </body>
    </html>
  );
}
