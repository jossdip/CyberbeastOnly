'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { images, animations, stats, services, executives } from './constants';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const containerRef = useRef(null);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax and fade effects
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const statsParallax = useTransform(scrollYProgress, [0.2, 0.4], [0, -50]);
  const servicesParallax = useTransform(scrollYProgress, [0.4, 0.6], [50, 0]);
  const teamParallax = useTransform(scrollYProgress, [0.6, 0.8], [50, 0]);

  // Handle image loading errors
  const handleImageError = (e: any) => {
    e.target.src = 'https://images.unsplash.com/photo-1579547621706-1a9c79d5c9f1?q=80&w=2940&auto=format&fit=crop'; // Fallback image
  };

  const handleScroll = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main ref={containerRef} className="relative w-full overflow-hidden">
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />

      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <Image
            src={images.hero.main}
            alt="Watteville Group Headquarters"
            fill
            className="object-cover"
            priority
            onError={handleImageError}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={animations.staggerContainer}
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
        >
          <motion.h1 
            variants={animations.fadeInUp}
            className="text-6xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Watteville Group
          </motion.h1>
          <motion.p 
            variants={animations.fadeInUp}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            Shaping Tomorrow's Opportunities Today
          </motion.p>
          <motion.div variants={animations.fadeInUp}>
            <button
              onClick={handleScroll}
              className="inline-block bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Discover
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section with Parallax Background */}
      <section id="stats" className="relative py-20 overflow-hidden">
        <motion.div 
          style={{ y: statsParallax }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={images.backgrounds.stats}
            alt="Statistics Background"
            fill
            className="object-cover opacity-20"
            onError={handleImageError}
            sizes="100vw"
          />
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animations.staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={animations.fadeInUp}
                className="text-center w-full max-w-[200px]"
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <motion.div 
          style={{ y: servicesParallax }}
          className="max-w-7xl mx-auto px-4"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animations.staggerContainer}
            className="text-center"
          >
            <motion.h2 
              variants={animations.fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-16"
            >
              Our Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={animations.scaleUp}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => window.location.href = `/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="text-4xl mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <motion.div 
          style={{ y: teamParallax }}
          className="max-w-7xl mx-auto px-4"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animations.staggerContainer}
            className="text-center"
          >
            <motion.h2 
              variants={animations.fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-16"
            >
              Leadership Team
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {executives.map((executive, index) => (
                <motion.div
                  key={index}
                  variants={animations.scaleUp}
                  className="text-center"
                >
                  <div className="relative h-64 mb-6 rounded-lg overflow-hidden mx-auto max-w-[300px]">
                    <Image
                      src={images.team[index].image}
                      alt={executive.name}
                      fill
                      className="object-cover"
                      onError={handleImageError}
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{executive.name}</h3>
                  <p className="text-gray-600 mb-3">{executive.position}</p>
                  <p className="text-gray-500 italic">"{executive.quote}"</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Global Presence Section */}
      <section id="global" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animations.staggerContainer}
            className="grid grid-cols-1 gap-12"
          >
            <motion.div variants={animations.fadeInUp} className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-12">Strategic Locations</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                variants={animations.fadeInUp}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="text-3xl mb-4">🇨🇭</div>
                <h3 className="text-xl font-semibold mb-2">Switzerland</h3>
                <p className="text-gray-400">Global Headquarters</p>
                <p className="text-gray-400">Zurich</p>
              </motion.div>
              <motion.div
                variants={animations.fadeInUp}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="text-3xl mb-4">🇺🇸</div>
                <h3 className="text-xl font-semibold mb-2">United States</h3>
                <p className="text-gray-400">Corporate Office</p>
                <p className="text-gray-400">Delaware</p>
              </motion.div>
              <motion.div
                variants={animations.fadeInUp}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="text-3xl mb-4">🇲🇨</div>
                <h3 className="text-xl font-semibold mb-2">Monaco</h3>
                <p className="text-gray-400">Investment Office</p>
                <p className="text-gray-400">Monte Carlo</p>
              </motion.div>
              <motion.div
                variants={animations.fadeInUp}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="text-3xl mb-4">🇫🇷</div>
                <h3 className="text-xl font-semibold mb-2">France</h3>
                <p className="text-gray-400">European Operations</p>
                <p className="text-gray-400">Paris</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section with Parallax */}
      <section id="contact" className="relative py-20">
        <div className="absolute inset-0">
          <Image
            src={images.backgrounds.contact}
            alt="Contact Background"
            fill
            className="object-cover opacity-20"
            onError={handleImageError}
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animations.staggerContainer}
          >
            <motion.h2 
              variants={animations.fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-8"
            >
              Connect With Us
            </motion.h2>
            <motion.p 
              variants={animations.fadeInUp}
              className="text-xl mb-12 max-w-2xl mx-auto"
            >
              Discover how Watteville Group can help transform your business through innovative solutions and strategic partnerships.
            </motion.p>
            <motion.div variants={animations.fadeInUp}>
              <button
                onClick={() => setIsContactFormOpen(true)}
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all"
              >
                Get in Touch
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Watteville Group</h3>
            <p className="text-gray-400">Shaping the future of global business</p>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Watteville Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 