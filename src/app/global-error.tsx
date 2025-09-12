'use client';

import { useEffect } from 'react';
import { logger } from '../lib';

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    logger.error('Global error:', error);
  }, [error]);

  return (
    <html>
      <body className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Đã xảy ra lỗi!</h2>
        <p className="text-gray-300 mb-6">{error.message}</p>
      </body>
    </html>
  );
}
