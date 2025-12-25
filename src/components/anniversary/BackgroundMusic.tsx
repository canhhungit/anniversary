'use client';

import { useState, useRef, useEffect } from 'react';

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('/anniversary/music/background.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    // Check if user previously chose to play music
    const musicPreference = localStorage.getItem('anniversary-music');

    // Try to autoplay
    const tryAutoplay = async () => {
      if (!audioRef.current) return;

      try {
        await audioRef.current.play();
        setIsPlaying(true);
        setHasInteracted(true);
      } catch {
        // Autoplay was blocked - always show prompt
        setShowPrompt(true);
      }
    };

    // Small delay to ensure component is mounted
    const timer = setTimeout(tryAutoplay, 300);

    return () => {
      clearTimeout(timer);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Listen for any user interaction to start music if they previously enabled it
  useEffect(() => {
    const musicPreference = localStorage.getItem('anniversary-music');
    if (musicPreference !== 'enabled' || hasInteracted) return;

    const handleInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
            setShowPrompt(false);
          })
          .catch(() => {});
      }
    };

    document.addEventListener('click', handleInteraction, { once: true });
    document.addEventListener('touchstart', handleInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, [hasInteracted, isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          localStorage.setItem('anniversary-music', 'enabled');
        })
        .catch(() => {});
    }
    setShowPrompt(false);
    setHasInteracted(true);
  };

  const startWithMusic = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          localStorage.setItem('anniversary-music', 'enabled');
        })
        .catch(() => {});
    }
    setShowPrompt(false);
    setHasInteracted(true);
  };

  const declineMusic = () => {
    // Don't save preference - will ask again next visit
    setShowPrompt(false);
    setHasInteracted(true);
  };

  return (
    <>
      {/* BIG Modal Prompt if autoplay failed */}
      {showPrompt && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={startWithMusic}
        >
          <div
            className="glass rounded-3xl p-8 max-w-md text-center animate-bounce-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-7xl mb-6">💕</div>
            <h2 className="font-playfair text-3xl font-bold gradient-text mb-3">
              Kỷ Niệm 8 Năm
            </h2>
            <h3 className="font-dancing text-2xl text-gray-700 mb-4">
              Cảnh Hưng & Quỳnh Hằng
            </h3>
            <p className="text-gray-600 mb-6">
              Chào mừng bạn! Hãy bật nhạc để trải nghiệm trang web lãng mạn hơn
              nhé 🎵
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={startWithMusic}
                className="bg-gradient-to-r from-primary to-secondary text-white font-semibold px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg shadow-lg"
              >
                🎵 Bắt đầu với nhạc
              </button>
            </div>
            <button
              onClick={declineMusic}
              className="mt-4 text-gray-500 text-sm hover:text-gray-700 transition-colors"
            >
              Xem không nhạc →
            </button>
          </div>
        </div>
      )}

      {/* Floating Music Control */}
      <button
        onClick={togglePlay}
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isPlaying
            ? 'bg-gradient-to-r from-primary to-secondary animate-pulse-glow'
            : 'bg-white hover:bg-pink-50'
        }`}
        title={isPlaying ? 'Tắt nhạc' : 'Bật nhạc'}
      >
        {isPlaying ? (
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-primary"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
          </svg>
        )}
      </button>

      {/* Music Note Indicator */}
      {isPlaying && (
        <div className="fixed bottom-6 right-24 z-40 pointer-events-none">
          <span className="text-2xl animate-float-heart">🎵</span>
        </div>
      )}
    </>
  );
}
