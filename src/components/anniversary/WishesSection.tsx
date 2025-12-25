'use client';

import { useState, useEffect } from 'react';

interface Wish {
  id: number;
  name: string;
  message: string;
  timestamp: number;
}

export default function WishesSection() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Load wishes from localStorage on mount
  useEffect(() => {
    const savedWishes = localStorage.getItem('anniversary-wishes');
    if (savedWishes) {
      setWishes(JSON.parse(savedWishes));
    } else {
      // Default wishes
      const defaultWishes: Wish[] = [
        {
          id: 1,
          name: 'Gia đình',
          message: 'Chúc anh chị mãi hạnh phúc bên nhau! 💕',
          timestamp: Date.now() - 86400000,
        },
        {
          id: 2,
          name: 'Bạn bè',
          message:
            'Happy anniversary! Gia đình anh chị thật đáng ngưỡng mộ! 🎉',
          timestamp: Date.now() - 43200000,
        },
      ];
      setWishes(defaultWishes);
      localStorage.setItem('anniversary-wishes', JSON.stringify(defaultWishes));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      const newWish: Wish = {
        id: Date.now(),
        name: name.trim(),
        message: message.trim(),
        timestamp: Date.now(),
      };

      const updatedWishes = [newWish, ...wishes];
      setWishes(updatedWishes);
      localStorage.setItem('anniversary-wishes', JSON.stringify(updatedWishes));

      setName('');
      setMessage('');
      setIsSubmitting(false);
      setShowSuccess(true);

      setTimeout(() => setShowSuccess(false), 3000);
    }, 500);
  };

  const formatTime = (timestamp: number) => {
    const diff = Date.now() - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (days > 0) return `${days} ngày trước`;
    if (hours > 0) return `${hours} giờ trước`;
    if (minutes > 0) return `${minutes} phút trước`;
    return 'Vừa xong';
  };

  return (
    <section
      id="wishes"
      className="py-20 px-4 bg-gradient-to-b from-purple-50 to-pink-50"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold gradient-text mb-4">
            Gửi Lời Chúc Mừng
          </h2>
          <p className="font-dancing text-2xl text-gray-600">
            Hãy để lại lời chúc tốt đẹp cho gia đình chúng mình nhé! 💌
          </p>
        </div>

        {/* Wish Form */}
        <div className="glass rounded-3xl p-8 mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Tên của bạn
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nhập tên của bạn..."
                className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-primary focus:ring-2 focus:ring-pink-200 outline-none transition-all bg-white/50"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Lời chúc
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Viết lời chúc của bạn..."
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-primary focus:ring-2 focus:ring-pink-200 outline-none transition-all resize-none bg-white/50"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Đang gửi...
                </>
              ) : (
                <>Gửi Lời Chúc ❤️</>
              )}
            </button>
          </form>

          {/* Success Message */}
          {showSuccess && (
            <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-xl text-green-700 text-center animate-bounce-in">
              ✅ Cảm ơn bạn đã gửi lời chúc!
            </div>
          )}
        </div>

        {/* Wishes List */}
        <div>
          <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-6 text-center">
            💕 Lời Chúc Đã Nhận ({wishes.length})
          </h3>

          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
            {wishes.map((wish, index) => (
              <div
                key={wish.id}
                className="glass rounded-2xl p-6 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {wish.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">
                        {wish.name}
                      </h4>
                      <span className="text-gray-400 text-sm">
                        {formatTime(wish.timestamp)}
                      </span>
                    </div>
                    <p className="text-gray-600">{wish.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
