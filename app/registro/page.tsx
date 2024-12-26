'use client';

import { ContactForm } from '@/components/sections/contact-form';
import { Navbar } from '@/components/ui/navbar';
import Footer from '@/components/sections/footer-section';

export default function RegistrationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc]">
      {/* Navbar */}
      <Navbar />
      
      {/* Contenido principal */}
      <main className="flex-grow">
        <ContactForm />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
