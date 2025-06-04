'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import NavLinks from './NavLinks'

function MobileMenu({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
        <span className="text-2xl font-bold text-supp-red-600">SuppStack</span>
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          onClick={() => setIsOpen(false)}
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="px-2 pt-2 pb-3">
        <NavLinks onMobileClick={() => setIsOpen(false)} isMobile />
      </div>
    </div>
  )
}

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-supp-red-600">SuppStack</span>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <NavLinks />
          </div>
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
    </nav>
  )
} 