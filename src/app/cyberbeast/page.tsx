'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Gestion d'erreur image
const handleImageError = (e: any) => {
  e.target.src = 'https://images.unsplash.com/photo-1579547621706-1a9c79d5c9f1?q=80&w=2940&auto=format&fit=crop';
};

export default function CyberbeastB2BPage() {
  const cyberbeastDetails = {
    mainImage: "https://hips.hearstapps.com/hmg-prod/images/2024-tesla-cybertruck-107-65e8945c693e2.jpg?crop=1xw:1xh;center,top&resize=980:*", // Cybertruck image
    heroBackground: "https://hips.hearstapps.com/hmg-prod/images/2024-tesla-cybertruck-115-662a6d20c035b.jpg?crop=1xw:1xh;center,top&resize=980:*", // Cybertruck background
    b2bAdvantages: [
      "Dominate Your Industry: Unrivaled presence and performance.",
      "Built for Business: Extreme durability for demanding commercial use.",
      "Sustainable Powerhouse: Enhance your brand with zero-emission capability.",
      "Custom Fleet Solutions: Flexible leasing and rental terms tailored to your needs.",
      "Priority Support: Dedicated B2B service and maintenance packages."
    ]
  };

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-24 md:py-40 flex items-center justify-center text-center overflow-hidden"
        style={{ 
          backgroundImage: `url(${cyberbeastDetails.heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        aria-label="Tesla Cyberbeast Hero Section"
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight"
          >
            Tesla Cyberbeast: <span className="block sm:inline text-blue-400">B2B Fleet Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Revolutionize your commercial fleet with the unparalleled power, durability, and cutting-edge technology of the Tesla Cyberbeast. Request a bespoke quote today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 150 }}
          >
            <Link href="/cyberbeast/request-quote">
              <span className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/50">
                Request B2B Quote
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Key B2B Advantages Section */}
      <section className="py-16 md:py-24 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-400">
            Unlock a New Era of Commercial Capability
          </h2>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl min-h-[250px]"
            >
              <Image
                src={cyberbeastDetails.mainImage}
                alt="Tesla Cyberbeast for Business Fleets"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={handleImageError}
                priority
              />
            </motion.div>
            <motion.ul 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="space-y-5 text-gray-300 text-lg md:text-xl"
            >
              {cyberbeastDetails.b2bAdvantages.map((feature, i) => (
                <li key={i} className="flex items-start p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                  <svg className="flex-shrink-0 h-7 w-7 text-blue-500 mr-4 mt-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* New Features Showcase Section */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-400">
            Explore Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 text-center">
            {[
              {
                imageUrl: "https://hips.hearstapps.com/hmg-prod/images/2024-tesla-cybertruck-105-65e8945a72254.jpg?crop=0.710xw:0.588xh;0.157xw,0.412xh&resize=1200:*",
                title: "Peak Track Performance",
                description: "Experience blistering acceleration and top speeds designed to dominate the track.",
              },
              {
                imageUrl: "https://hips.hearstapps.com/hmg-prod/images/2024-tesla-cybertruck-102-65e894591b71d.jpg?crop=1xw:1xh;center,top&resize=980:*",
                title: "Superior Handling & Agility",
                description: "Precise steering and adaptive suspension offer exceptional control through every turn.",
              },
              {
                imageUrl: "https://hips.hearstapps.com/hmg-prod/images/2024-tesla-cybertruck-106-65e8945add004.jpg?crop=1xw:1xh;center,top&resize=980:*",
                title: "Raw Power & Endurance",
                description: "A revolutionary powertrain delivering consistent power for sustained performance.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow flex flex-col"
              >
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image 
                    src={feature.imageUrl}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onError={handleImageError}
                    priority={i === 0}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 flex-grow">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action / Form Trigger Section */}
      <section id="request-quote-cta" className="py-20 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">
            Ready to Elevate Your Fleet?
          </h2>
          <p className="text-gray-300 mb-10 text-lg md:text-xl max-w-2xl mx-auto">
            Contact our B2B specialists today to discuss your requirements, explore leasing options, and receive a personalized quote for your Tesla Cyberbeast fleet.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/cyberbeast/request-quote">
              <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-12 py-4 rounded-lg text-xl font-semibold hover:shadow-xl transition-all duration-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500/70">
                Get Your Custom B2B Quote Now
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
} 