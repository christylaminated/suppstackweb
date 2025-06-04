'use client'

export default function ScrollToWaitlist() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <a
      href="#waitlist"
      className="rounded-md bg-white px-8 py-3 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-supp-red-50 hover:text-supp-red-600 hover:ring-supp-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-supp-red-600 transition-colors"
      onClick={handleClick}
    >
      Join Waitlist
    </a>
  )
} 