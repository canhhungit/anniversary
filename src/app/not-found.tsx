import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4">
      <h1 className="text-7xl font-extrabold text-blue-500">404</h1>
      <p className="mt-4 text-lg text-gray-300">
        Oops! Trang bạn tìm không tồn tại.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow transition"
      >
        Quay về Trang chủ
      </Link>
    </div>
  );
}
