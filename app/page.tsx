'use client';

import { Navbar } from '@/components/ui/navbar';
import { HeroSection } from '@/components/sections/hero-section';
import { MachineryCarousel } from '@/components/sections/machinery-carousel';
import { AboutSection } from '@/components/sections/about-section';
import { ContactForm } from '@/components/sections/contact-form';
import Footer from '@/components/sections/footer-section';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <MachineryCarousel />
        <AboutSection />
        <ContactForm />
      </main>
      <Footer/>

    </>
  );
}
