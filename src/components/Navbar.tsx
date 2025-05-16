import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white text-xl font-bold">
              Cybertruck Rental
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-white hover:text-gray-300">
              {t('nav.home')}
            </Link>
            <Link href="/book" className="text-white hover:text-gray-300">
              {t('nav.book')}
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-300">
              {t('nav.contact')}
            </Link>
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language}
              className="bg-black text-white border border-white rounded px-2 py-1"
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="de">DE</option>
              <option value="es">ES</option>
              <option value="it">IT</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 