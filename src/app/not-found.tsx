import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-white">
      <div className="mx-auto max-w-md text-center">
        <h1 className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-8xl font-extrabold text-transparent">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-semibold text-white">
          Trang không tồn tại
        </h2>
        <p className="mt-3 text-slate-400">
          Rất tiếc, trang bạn đang tìm kiếm không tồn tại hoặc đã được di
          chuyển.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-400"
          >
            Về trang chủ
          </Link>
          <Link
            href={siteConfig.links.docs}
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold text-white transition hover:border-white/40"
          >
            Xem tài liệu
          </Link>
        </div>
      </div>
    </div>
  );
}
