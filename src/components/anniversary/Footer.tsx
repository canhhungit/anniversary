'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-gradient-to-b from-pink-50 to-rose-100">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative Hearts */}
        <div className="flex justify-center items-center gap-3 mb-6">
          <span
            className="text-2xl animate-float-heart"
            style={{ animationDelay: '0s' }}
          >
            💕
          </span>
          <span
            className="text-3xl animate-float-heart"
            style={{ animationDelay: '0.3s' }}
          >
            ❤️
          </span>
          <span
            className="text-2xl animate-float-heart"
            style={{ animationDelay: '0.6s' }}
          >
            💕
          </span>
        </div>

        {/* Names */}
        <h3 className="font-playfair text-3xl font-bold gradient-text mb-2">
          Cảnh Hưng & Quỳnh Hằng
        </h3>

        <p className="font-dancing text-xl text-gray-600 mb-6">
          8 năm bên nhau • 3 công chúa nhỏ • Mãi yêu thương
        </p>

        {/* Quote */}
        <div className="glass rounded-2xl inline-block px-8 py-4 mb-8">
          <p className="font-dancing text-2xl text-primary">
            &ldquo;Hạnh phúc là cùng nhau đi qua những năm tháng bình yên&rdquo;
          </p>
        </div>

        {/* Share Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Kỷ Niệm 8 Năm Ngày Cưới - Cảnh Hưng & Quỳnh Hằng',
                  text: 'Chúc mừng kỷ niệm 8 năm ngày cưới!',
                  url: window.location.href,
                });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Đã sao chép link!');
              }
            }}
            className="glass px-6 py-3 rounded-full text-gray-700 hover:bg-pink-100 transition-colors flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            Chia sẻ
          </button>
        </div>

        {/* Copyright */}
        <div className="border-t border-pink-200 pt-6">
          <p className="text-gray-500 text-sm">
            Made with ❤️ for our family • {currentYear}
          </p>
          <p className="text-gray-400 text-xs mt-1">26/12/2017 - 26/12/2025</p>
        </div>
      </div>
    </footer>
  );
}
