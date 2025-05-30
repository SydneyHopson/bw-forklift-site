'use client';

import AboutSection from './section/About';
import WhyChooseUs from './section/ChooseUs'
import Faqs from './section/Faqs';


import Footer from './section/Footer';
import Headers from './section/Headers';
import Hero from './section/Hero';
import { Likes } from './section/Likes';
import ServicesSection from './section/ServicesSection';
import VeteranSupportBanner from './section/VeteranSupportBanner';





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
      <Faqs/>
      <Footer />
      
    </>
  );
}
