'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">{t('notFound.title', 'Page not found')}</h2>
        <Link
          href="/"
          className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
        >
          {t('notFound.returnHome', 'Return to home')}
        </Link>
      </div>
    </div>
  )
} 