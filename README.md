# 💕 Kỷ Niệm 8 Năm Ngày Cưới

Trang web kỷ niệm 8 năm ngày cưới của **Cảnh Hưng & Quỳnh Hằng** (26/12/2017 - 26/12/2025)

![Anniversary](https://img.shields.io/badge/Anniversary-8%20Years-ff69b4)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8)

## ✨ Tính Năng

- 🎉 **Hero Section** - Countdown đến ngày kỷ niệm với hiệu ứng trái tim bay
- 💕 **Love Story** - Câu chuyện tình yêu ngọt ngào
- 📸 **Wedding Slideshow** - 12 ảnh cưới với lightbox xem lớn
- 📅 **Timeline** - 5 mốc quan trọng trong hành trình 8 năm
- 👧👧👧 **Ba Công Chúa** - Gallery ảnh cho Phương Thảo, Ánh Dương, Bảo My
- 🎵 **Background Music** - Nhạc nền lãng mạn (tùy chọn)
- 📱 **Responsive** - Hiển thị đẹp trên mọi thiết bị

## 🚀 Cài Đặt

```bash
# Clone repo
git clone <repo-url>
cd save

# Cài dependencies
yarn install

# Chạy development server
yarn dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem trang web.

## 📁 Cấu Trúc Thư Mục

```
src/
├── app/
│   ├── page.tsx           # Trang chính
│   └── globals.css        # CSS toàn cục + animations
├── components/
│   └── anniversary/
│       ├── HeroSection.tsx      # Hero với countdown
│       ├── LoveStory.tsx        # Câu chuyện tình yêu
│       ├── WeddingSlideshow.tsx # Slideshow ảnh cưới
│       ├── Timeline.tsx         # Timeline các mốc
│       ├── DaughtersSection.tsx # Gallery 3 con gái
│       ├── BackgroundMusic.tsx  # Player nhạc nền
│       └── Footer.tsx           # Footer
public/
└── anniversary/
    ├── music/
    │   └── background.mp3       # File nhạc nền
    └── images/
        ├── wedding/             # 12 ảnh cưới
        └── daughters/
            ├── phuong-thao/     # 16 ảnh Phương Thảo
            ├── anh-duong/       # 12 ảnh Ánh Dương
            └── bao-my/          # 15 ảnh Bảo My
```

## 🎨 Tùy Chỉnh

### Thêm nhạc nền

Đặt file MP3 vào `public/anniversary/music/background.mp3`

### Thêm ảnh

- Ảnh cưới: `public/anniversary/images/wedding/`
- Ảnh con: `public/anniversary/images/daughters/[tên-con]/`

### Thay đổi ngày

Sửa trong `src/components/anniversary/HeroSection.tsx`:

```tsx
const weddingDate = new Date('2017-12-26');
const anniversaryDate = new Date('2025-12-26');
```

## 🛠 Tech Stack

- **Framework**: Next.js 16 với TypeScript
- **Styling**: TailwindCSS 3.4
- **Fonts**: Playfair Display, Dancing Script, Inter
- **Icons**: Emoji-based
- **Animations**: CSS Keyframes

## 📄 License

Made with ❤️ for our family

---

💒 **26/12/2017 - 26/12/2025** | 8 Năm Hạnh Phúc
