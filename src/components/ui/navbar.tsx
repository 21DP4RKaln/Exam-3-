'use client'

import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold">Apiroq</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link href="/configure">
              Konfigurēt PC
            </Link>
            <Link href="/about">
              Par mums
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}