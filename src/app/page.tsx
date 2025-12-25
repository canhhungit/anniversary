import type { Metadata } from 'next';
import {
  HeroSection,
  LoveStory,
  Timeline,
  DaughtersSection,
  FamilyGallery,
  WishesSection,
  BackgroundMusic,
  Footer,
  WeddingSlideshow,
} from '@/components/anniversary';

export const metadata: Metadata = {
  title: 'Kỷ Niệm 8 Năm Ngày Cưới | Cảnh Hưng & Quỳnh Hằng',
  description:
    'Trang web kỷ niệm 8 năm ngày cưới của gia đình Cảnh Hưng và Quỳnh Hằng. 26/12/2017 - 26/12/2025',
  keywords: ['kỷ niệm', 'ngày cưới', 'gia đình', 'tình yêu', 'anniversary'],
  openGraph: {
    title: 'Kỷ Niệm 8 Năm Ngày Cưới | Cảnh Hưng & Quỳnh Hằng',
    description: '8 năm bên nhau, 3 công chúa nhỏ, mãi yêu thương ❤️',
    type: 'website',
  },
};

export default function AnniversaryPage() {
  return (
    <main className="anniversary-page">
      {/* Background Music Player */}
      <BackgroundMusic />

      {/* Hero Section */}
      <HeroSection />

      {/* Love Story */}
      <LoveStory />

      {/* Wedding Photos Slideshow */}
      <WeddingSlideshow />

      {/* Timeline */}
      <Timeline />

      {/* Daughters Section */}
      <DaughtersSection />

      {/* Family Gallery */}
      {/* <FamilyGallery /> */}

      {/* Wishes Section */}
      {/* <WishesSection /> */}

      {/* Footer */}
      <Footer />
    </main>
  );
}
