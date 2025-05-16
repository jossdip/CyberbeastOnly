'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ContactFormProps {
  isOpen: boolean
  onClose: () => void
  formTitle?: string
  defaultSubject?: string
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose, formTitle, defaultSubject }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: defaultSubject || '',
    message: '',
    company: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  useEffect(() => {
    if (defaultSubject) {
      setFormData(prev => ({ ...prev, subject: defaultSubject }))
    }
  }, [defaultSubject])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Basic client-side validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields.')
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          subject: defaultSubject || '',
          message: '',
          company: '',
          phone: ''
        })
        setTimeout(() => { 
          onClose() 
          setSubmitStatus(null) 
        }, 3000) // Close modal after 3s on success
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
    }
    setIsSubmitting(false)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-lg relative text-white border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-2xl"
              aria-label="Close modal"
            >
              &times;
            </button>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-blue-400">
              {formTitle || 'Contact Us'}
            </h2>
            
            {submitStatus === 'success' && (
              <div className="bg-green-600/20 border border-green-500 text-green-300 px-4 py-3 rounded-lg mb-6 text-center">
                <p className="font-semibold">Message Sent Successfully!</p>
                <p className="text-sm">We will get back to you shortly.</p>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-600/20 border border-red-500 text-red-300 px-4 py-3 rounded-lg mb-6 text-center">
                <p className="font-semibold">Submission Failed.</p>
                <p className="text-sm">Please try again or contact us directly.</p>
              </div>
            )}

            {!submitStatus || submitStatus === 'error' ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company Name (Optional for B2B)</label>
                  <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="Your Company Inc." />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number (Optional)</label>
                  <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="+1 555-123-4567" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                  <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="Inquiry about..." />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea name="message" id="message" value={formData.message} onChange={handleChange} rows={5} required className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none" placeholder="Your detailed message..."></textarea>
                </div>
                <div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300 transform hover:scale-105 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            ) : null}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ContactForm 