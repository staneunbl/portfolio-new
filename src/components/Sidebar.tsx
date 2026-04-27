'use client'
import Link from 'next/link'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
]

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 p-6 border-r border-neutral-200 dark:border-neutral-800 sticky top-0 h-screen">
      <h2 className="text-xl font-bold mb-8">SM</h2>
      <nav className="space-y-4">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="block hover:text-blue-500">
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}