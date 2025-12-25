'use client';

import { useEffect, useRef } from 'react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const events: TimelineEvent[] = [
  {
    date: '26/12/2017',
    title: 'Ngày Cưới',
    description:
      'Ngày chúng mình chính thức trở thành vợ chồng, bắt đầu hành trình xây dựng tổ ấm.',
    icon: '💒',
    color: 'from-pink-500 to-rose-500',
  },
  {
    date: '16/03/2019',
    title: 'Phương Thảo chào đời',
    description:
      'Thiên thần đầu tiên xuất hiện, mang lại niềm vui vô bờ cho gia đình.',
    icon: '👶',
    color: 'from-purple-500 to-pink-500',
  },
  {
    date: '20/02/2024',
    title: 'Ánh Dương chào đời',
    description: 'Công chúa thứ hai ra đời, nhà mình thêm rộn ràng tiếng cười.',
    icon: '🌸',
    color: 'from-amber-500 to-orange-500',
  },
  {
    date: '28/08/2025',
    title: 'Bảo My chào đời',
    description: 'Thành viên mới nhất của gia đình, hoàn thiện niềm hạnh phúc.',
    icon: '🎀',
    color: 'from-rose-500 to-pink-500',
  },
  {
    date: '28/12/2025',
    title: '8 Năm Hạnh Phúc',
    description: 'Kỷ niệm 8 năm bên nhau với tình yêu ngày càng sâu đậm.',
    icon: '🎉',
    color: 'from-yellow-500 to-amber-500',
  },
];

export default function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 },
    );

    const items = timelineRef.current?.querySelectorAll('.timeline-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="timeline"
      className="py-16 px-4 bg-gradient-to-b from-white to-pink-50"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold gradient-text mb-3">
            Hành Trình Của Chúng Mình
          </h2>
          <p className="font-dancing text-xl md:text-2xl text-gray-600">
            Những dấu mốc đáng nhớ trong 8 năm qua
          </p>
        </div>

        {/* Timeline - Mobile: Left aligned, Desktop: Centered alternating */}
        <div ref={timelineRef} className="relative">
          {/* Vertical Line - Left on mobile, Center on desktop */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-300 via-purple-300 to-amber-300 rounded-full" />

          {/* Timeline Events */}
          {events.map((event, index) => (
            <div
              key={index}
              className="timeline-item fade-in-section relative mb-8 md:mb-12"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Mobile Layout - All on right side */}
              <div className="md:hidden flex items-start pl-2">
                {/* Icon - positioned on the timeline */}
                <div className="relative">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center text-xl shadow-lg z-10 border-4 border-white`}
                  >
                    {event.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="ml-4 flex-1 pb-2">
                  <div className="glass rounded-xl p-4">
                    <span className="text-xs font-semibold text-primary">
                      {event.date}
                    </span>
                    <h3 className="font-playfair text-base font-bold text-gray-800 mt-1">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Desktop Layout - Alternating left/right */}
              <div
                className={`hidden md:flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div
                  className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}
                >
                  <div className="glass rounded-2xl p-6 card-hover">
                    <span className="text-sm font-semibold text-primary">
                      {event.date}
                    </span>
                    <h3 className="font-playfair text-xl font-bold text-gray-800 mt-1">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mt-2 text-sm">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="w-2/12 flex justify-center">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center text-3xl shadow-lg z-10 animate-pulse-glow`}
                  >
                    {event.icon}
                  </div>
                </div>

                {/* Empty Space */}
                <div className="w-5/12" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
