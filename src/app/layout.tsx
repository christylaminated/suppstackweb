import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'SuppStack - Your Personalized Supplement Stack',
  description: 'SuppStack uses real science to recommend supplement stacks that fit your goals — from sleep to performance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <footer className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                <div className="mt-4 space-y-4">
                  <a href="/privacy" className="text-base text-gray-500 hover:text-gray-900 block">Privacy Policy</a>
                  <a href="/terms" className="text-base text-gray-500 hover:text-gray-900 block">Terms of Service</a>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                <div className="mt-4 space-y-4">
                  <a href="/about" className="text-base text-gray-500 hover:text-gray-900 block">About</a>
                  <a href="/contact" className="text-base text-gray-500 hover:text-gray-900 block">Contact</a>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Social</h3>
                <div className="mt-4 space-y-4">
                  <a href="https://twitter.com" className="text-base text-gray-500 hover:text-gray-900 block">Twitter</a>
                  <a href="https://instagram.com" className="text-base text-gray-500 hover:text-gray-900 block">Instagram</a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-8">
              <p className="text-base text-gray-400 text-center">
                &copy; {new Date().getFullYear()} SuppStack. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
