'use client'
import supabase from '@/lib/supabase'
import { useState } from 'react'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('Joining waitlist...')
    //connect to supabase here
    try {
      const { error } = await supabase.from('waitlist').insert({email})
      if (error) {
        throw error
      } 
      setStatus('success')
      setMessage('You\'re in! 🎉 We\'ll notify you when early access is ready.')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="mt-10">
      <div className="mb-8 space-y-4">
        <p className="text-lg font-semibold text-supp-red-600">🚀 Early Access Perks:</p>
        <ul className="text-left space-y-2 text-gray-600">
          <li className="flex items-center">
            <span className="mr-2">✓</span>
            First 3 months completely FREE
          </li>
          <li className="flex items-center">
            <span className="mr-2">✓</span>
            Priority access to new features
          </li>
          <li className="flex items-center">
            <span className="mr-2">✓</span>
            Exclusive founding member benefits
          </li>
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            name="email"
            id="email"
            className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-supp-red-600 sm:text-sm sm:leading-6"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="flex-none rounded-md bg-white px-8 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-supp-red-50 hover:text-supp-red-600 hover:ring-supp-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-supp-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
          </button>
        </div>
      </form>
      {message && (
        <p className={`mt-4 text-sm ${status === 'success' ? 'text-green-600' : 'text-supp-red-600'}`}>
          {message}
        </p>
      )}
    </div>
  )
} 