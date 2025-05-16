'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RequestQuotePage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    numberOfVehicles: '1',
    rentalDuration: '', // e.g., "3 months", "1 year", "Project-based"
    primaryUseCase: '',
    specificRequirements: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [submittedContactName, setSubmittedContactName] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Basic client-side validation (can be expanded)
    if (!formData.companyName || !formData.contactName || !formData.email || !formData.numberOfVehicles) {
      alert('Please fill in all required fields: Company Name, Contact Name, Email, and Number of Vehicles.');
      setIsSubmitting(false);
      return;
    }

    const payload = {
        ...formData,
        subject: `Cyberbeast B2B Quote Request: ${formData.companyName}`,
        // Re-map fields if your /api/contact expects different names, e.g. 'name' instead of 'contactName'
        name: formData.contactName, // Assuming API expects 'name' for contact person
        message: `Number of Vehicles: ${formData.numberOfVehicles}\nRental Duration: ${formData.rentalDuration}\nPrimary Use Case: ${formData.primaryUseCase}\nSpecific Requirements: ${formData.specificRequirements}`
    };

    try {
      const response = await fetch('/api/contact', { // Using the same API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload), // Send the mapped payload
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSubmittedContactName(formData.contactName); // Store before reset
        setSubmittedEmail(formData.email); // Store before reset
        setFormData({ // Reset form
          companyName: '',
          contactName: '',
          email: '',
          phone: '',
          numberOfVehicles: '1',
          rentalDuration: '',
          primaryUseCase: '',
          specificRequirements: '',
        });
      } else {
        const errorData = await response.json().catch(() => ({ message: "Could not parse error response." }));
        console.error("Server error:", errorData, "Status:", response.statusText);
        setSubmitStatus('error');
        alert(`Submission failed: ${errorData.message || response.statusText || 'An unexpected server error occurred.'}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      alert("An unexpected error occurred during submission. Please check your internet connection and try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <main className="bg-gray-800 text-white min-h-screen py-12 md:py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl mx-auto bg-gray-900 p-8 md:p-12 rounded-xl shadow-2xl border border-gray-700"
      >
        <div className="text-center mb-10">
          <Link href="/cyberbeast" legacyBehavior>
            <a className="text-blue-400 hover:text-blue-300 transition-colors mb-2 inline-block">&larr; Back to Cyberbeast Overview</a>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-3">Cyberbeast B2B Fleet Quotation</h1>
          <p className="text-gray-400 text-lg">Tell us about your fleet needs, and we'll provide a custom quote.</p>
        </div>

        <div className="my-8 text-center">
          <img 
            src="https://hips.hearstapps.com/hmg-prod/images/2024-tesla-cybertruck-105-65e8945a72254.jpg?crop=0.710xw:0.588xh;0.157xw,0.412xh&resize=1200:*" 
            alt="Cyberbeast fleet" 
            className="rounded-lg shadow-xl mx-auto max-w-full h-auto"
            style={{ maxWidth: '700px' }} // Optional: to constrain width further
          />
        </div>

        <div className="mb-10 px-4 md:px-0 text-gray-300">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-300 mb-4 text-center">Why Choose Cyberbeast for Your Fleet?</h2>
          <p className="mb-4 text-lg leading-relaxed">
            The Cyberbeast isn't just a vehicle; it's a statement of innovation and rugged capability. Designed for the toughest challenges, our B2B fleet program offers businesses like yours unparalleled advantages. From its virtually impenetrable exoskeleton to its adaptive air suspension, every Cyberbeast is built to perform and impress.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            Our fleet solutions are tailored to your specific operational needs, whether for secure transport, off-road utility, or making a bold corporate statement. With flexible leasing and purchasing options, dedicated support, and opportunities for custom outfitting, the Cyberbeast fleet is ready to electrify your business.
          </p>
          <p className="text-lg leading-relaxed">
            Fill out the form below to receive a personalized quotation and discover how Cyberbeast can drive your business forward.
          </p>
        </div>

        {submitStatus === 'success' && (
          <div className="bg-green-600/20 border border-green-500 text-green-300 px-6 py-4 rounded-lg mb-8 text-center">
            <h2 className="font-semibold text-xl mb-2">Quote Request Submitted!</h2>
            <p>Thank you, {submittedContactName || 'valued customer'}. Our B2B team will review your request and contact you shortly via {submittedEmail}.</p>
            <Link href="/" legacyBehavior>
                <a className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Return to Homepage
                </a>
            </Link>
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="bg-red-600/20 border border-red-500 text-red-300 px-6 py-4 rounded-lg mb-8 text-center">
            <h2 className="font-semibold text-xl mb-2">Submission Failed</h2>
            <p>We encountered an issue submitting your request. Please try again, or contact us directly if the problem persists.</p>
          </div>
        )}

        {!submitStatus || submitStatus === 'error' ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-1">Company Name *</label>
                <input type="text" name="companyName" id="companyName" value={formData.companyName} onChange={handleChange} required className="w-full input-class" placeholder="Your Corporation Ltd." />
              </div>
              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-300 mb-1">Contact Person Name *</label>
                <input type="text" name="contactName" id="contactName" value={formData.contactName} onChange={handleChange} required className="w-full input-class" placeholder="Jane Doe" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address *</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full input-class" placeholder="jane.doe@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="w-full input-class" placeholder="+1 555-0100" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                 <div>
                    <label htmlFor="numberOfVehicles" className="block text-sm font-medium text-gray-300 mb-1">Number of Cyberbeasts *</label>
                    <input type="number" name="numberOfVehicles" id="numberOfVehicles" value={formData.numberOfVehicles} onChange={handleChange} min="1" required className="w-full input-class" placeholder="e.g., 5" />
                </div>
                <div>
                    <label htmlFor="rentalDuration" className="block text-sm font-medium text-gray-300 mb-1">Estimated Rental/Lease Duration</label>
                    <input type="text" name="rentalDuration" id="rentalDuration" value={formData.rentalDuration} onChange={handleChange} className="w-full input-class" placeholder="e.g., 6 months, 2 years, project-based" />
                </div>
            </div>

            <div>
              <label htmlFor="primaryUseCase" className="block text-sm font-medium text-gray-300 mb-1">Primary Use-Case / Industry</label>
              <textarea name="primaryUseCase" id="primaryUseCase" value={formData.primaryUseCase} onChange={handleChange} rows={3} className="w-full input-class resize-none" placeholder="e.g., Construction site transport, VIP event shuttles, promotional vehicle for marketing campaigns, etc."></textarea>
            </div>

            <div>
              <label htmlFor="specificRequirements" className="block text-sm font-medium text-gray-300 mb-1">Specific Requirements / Questions</label>
              <textarea name="specificRequirements" id="specificRequirements" value={formData.specificRequirements} onChange={handleChange} rows={4} className="w-full input-class resize-none" placeholder="e.g., Need for vehicle wrapping, specific charging solutions, operational area details, any questions you have..."></textarea>
            </div>

            <div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-105 disabled:cursor-not-allowed text-lg"
              >
                {isSubmitting ? 'Submitting Request...' : 'Submit Quote Request'}
              </button>
            </div>
          </form>
        ) : null}
      </motion.div>
      <style jsx global>{`
        .input-class {
          background-color: #1F2937; /* bg-gray-800 */
          border: 1px solid #374151; /* border-gray-700 */
          border-radius: 0.5rem; /* rounded-lg */
          padding: 0.75rem 1rem; /* px-4 py-3 roughly */
          color: white;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .input-class:focus {
          outline: none;
          border-color: #3B82F6; /* focus:border-blue-500 */
          box-shadow: 0 0 0 2px #2563EB; /* focus:ring-2 focus:ring-blue-600 */
        }
        .input-class::placeholder {
            color: #6B7280; /* placeholder-gray-500 */
        }
      `}</style>
    </main>
  );
} 