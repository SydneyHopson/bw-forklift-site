'use client';

import AboutSection from './section/About';
import FaqSection from './section/Faqs';
import Footer from './section/Footer';
import Headers from './section/Headers';
import Hero from './section/Hero';
import { Likes } from './section/Likes';
import ServicesSection from './section/ServicesSection';
import VeteranSupportBanner from './section/VeteranSupportBanner';
import WhyChooseUs from './section/WhyCHooseUs';



export default function HomePage() {
  return (
    <>
      <Headers />
      <Hero />
      <WhyChooseUs />
      <VeteranSupportBanner />
      <ServicesSection />
      <AboutSection />
      <Likes />
      <FaqSection />
      <Footer />
      
    </>
  );
}
