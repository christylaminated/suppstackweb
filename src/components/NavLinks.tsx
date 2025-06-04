'use client'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  onClick?: () => void
  isMobile?: boolean
}

function NavLink({ href, children, onClick, isMobile }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      if (onClick) onClick()
    }
  }

  return (
    <a
      href={href}
      className={`${
        isMobile
          ? 'block w-full px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-supp-red-600'
          : 'inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-supp-red-600'
      }`}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}

export default function NavLinks({ onMobileClick, isMobile }: { onMobileClick?: () => void; isMobile?: boolean }) {
  return (
    <div className={isMobile ? 'flex flex-col space-y-2' : 'flex space-x-8'}>
      <NavLink href="#how-it-works" onClick={onMobileClick} isMobile={isMobile}>
        How It Works
      </NavLink>
      <NavLink href="#about" onClick={onMobileClick} isMobile={isMobile}>
        About
      </NavLink>
      <NavLink href="#contact" onClick={onMobileClick} isMobile={isMobile}>
        Contact
      </NavLink>
    </div>
  )
} 