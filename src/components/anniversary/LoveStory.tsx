'use client';

export default function LoveStory() {
  return (
    <section id="love-story" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold gradient-text mb-4">
            Câu Chuyện Của Chúng Mình
          </h2>
          <div className="flex justify-center items-center gap-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-pink-300" />
            <span className="text-3xl">💕</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-pink-300" />
          </div>
        </div>

        {/* Story Content */}
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Wedding Image */}
            <div className="w-full md:w-1/3">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/anniversary/images/wedding.jpg"
                  alt="Ảnh cưới Cảnh Hưng & Quỳnh Hằng"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Story Text */}
            <div className="w-full md:w-2/3">
              <p className="font-dancing text-3xl text-primary mb-6">
                &ldquo;Từ hai người xa lạ...&rdquo;
              </p>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Chúng mình bắt đầu tìm hiểu và gắn bó từ những ngày đầu tiên.
                  Trải qua thời gian, cả hai đã cùng nhau vượt qua nhiều thử
                  thách để xây dựng một mối quan hệ bền vững như hiện tại.
                </p>
                <p>
                  Ngày 26/12/2017 đánh dấu cột mốc thiêng liêng khi chúng mình
                  chính thức về chung một nhà. Trải qua 8 năm gắn bó, niềm hạnh
                  phúc ấy giờ đây càng thêm trọn vẹn khi tổ ấm nhỏ luôn rộn rã
                  tiếng cười của 3 thiên thần đáng yêu.
                </p>
                <p className="font-semibold text-primary">
                  ❤️ Cảm ơn vợ đã đồng hành cùng chồng suốt chặng đường này. Cảm
                  ơn cuộc đời đã cho chúng mình gặp nhau! ❤️
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="font-playfair text-3xl font-bold gradient-text">
                    8
                  </div>
                  <div className="text-gray-500 text-sm">Năm bên nhau</div>
                </div>
                <div className="text-center">
                  <div className="font-playfair text-3xl font-bold gradient-text">
                    3
                  </div>
                  <div className="text-gray-500 text-sm">Công chúa nhỏ</div>
                </div>
                <div className="text-center">
                  <div className="font-playfair text-3xl font-bold gradient-text">
                    ∞
                  </div>
                  <div className="text-gray-500 text-sm">Tình yêu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
