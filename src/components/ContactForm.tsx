'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('success') // For now, just show success. In a real app, you'd send this to your backend
    setMessage('')
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 max-w-xl mx-auto">
      <div className="grid grid-cols-1 gap-y-6">
        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-supp-red-600 sm:text-sm sm:leading-6"
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="block w-full rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-supp-red-600"
          >
            Send Message
          </button>
        </div>
      </div>
      
      {status === 'success' && (
        <p className="mt-4 text-sm text-green-600">Thanks! We'll get back to you soon.</p>
      )}
      {status === 'error' && (
        <p className="mt-4 text-sm text-red-600">Something went wrong. Please try again.</p>
      )}
    </form>
  )
} 