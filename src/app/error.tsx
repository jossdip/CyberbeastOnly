'use client'

import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const { t } = useTranslation()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
} 