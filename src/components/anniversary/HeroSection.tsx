'use client';

import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function HeroSection() {
  const weddingDate = new Date('2017-12-26');
  const anniversaryDate = new Date('2025-12-26');
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = anniversaryDate.getTime() - now.getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const yearsMarried = new Date().getFullYear() - weddingDate.getFullYear();

  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="text-center">Loading...</div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      {/* Floating Hearts Background - Fixed positions to prevent re-render jumps */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { left: '5%', delay: '0s', duration: '10s', size: '24px' },
          { left: '15%', delay: '2s', duration: '12s', size: '28px' },
          { left: '25%', delay: '4s', duration: '9s', size: '22px' },
          { left: '35%', delay: '1s', duration: '11s', size: '30px' },
          { left: '45%', delay: '3s', duration: '10s', size: '26px' },
          { left: '55%', delay: '5s', duration: '12s', size: '24px' },
          { left: '65%', delay: '2.5s', duration: '9s', size: '32px' },
          { left: '75%', delay: '4.5s', duration: '11s', size: '20px' },
          { left: '85%', delay: '1.5s', duration: '10s', size: '28px' },
          { left: '95%', delay: '3.5s', duration: '12s', size: '26px' },
        ].map((heart, i) => (
          <div
            key={i}
            className="absolute text-pink-300 opacity-40 animate-float-up"
            style={{
              left: heart.left,
              animationDelay: heart.delay,
              animationDuration: heart.duration,
              fontSize: heart.size,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Decorative Hearts */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <span
            className="text-4xl animate-float-heart"
            style={{ animationDelay: '0s' }}
          >
            💕
          </span>
          <span
            className="text-5xl animate-float-heart"
            style={{ animationDelay: '0.5s' }}
          >
            ❤️
          </span>
          <span
            className="text-4xl animate-float-heart"
            style={{ animationDelay: '1s' }}
          >
            💕
          </span>
        </div>

        {/* Names */}
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:whitespace-nowrap">
          <span className="gradient-text">Cảnh Hưng</span>
          <span className="text-gold mx-2 md:mx-4">&</span>
          <span className="gradient-text">Quỳnh Hằng</span>
        </h1>

        {/* Wedding Date */}
        <p className="font-dancing text-2xl md:text-3xl text-gray-600 mb-2">
          26 / 12 / 2017
        </p>

        {/* Anniversary Badge */}
        <div className="inline-block glass rounded-full px-8 py-3 mb-8 animate-pulse-glow">
          <span className="font-playfair text-xl md:text-2xl gold-text font-semibold">
            ✨ {yearsMarried} Năm Hạnh Phúc ✨
          </span>
        </div>

        {/* Quote */}
        <p className="font-dancing text-3xl md:text-4xl text-primary mb-12">
          &ldquo;Một chặng đường yêu thương&rdquo;
        </p>

        {/* Countdown */}
        <div className="mb-12">
          <p className="text-gray-600 text-lg mb-4">
            Đếm ngược đến ngày kỷ niệm
          </p>
          <div className="flex justify-center gap-4 md:gap-8">
            {[
              { value: timeLeft.days, label: 'Ngày' },
              { value: timeLeft.hours, label: 'Giờ' },
              { value: timeLeft.minutes, label: 'Phút' },
              { value: timeLeft.seconds, label: 'Giây' },
            ].map((item, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-4 md:p-6 min-w-[70px] md:min-w-[100px] card-hover"
              >
                <div className="font-playfair text-3xl md:text-5xl font-bold gradient-text">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-gray-500 text-sm md:text-base mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <a href="#love-story" className="inline-block">
            <div className="glass rounded-full p-3 cursor-pointer hover:bg-pink-100 transition-colors">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
