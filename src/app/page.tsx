'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ContactModal } from '@/components/ContactModal'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { useTranslations } from 'next-intl';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations();
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative">
        {/* Top info bar */}
        <div className="bg-[#1a1b26]/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-gray-300">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t('nav.support')}
              </span>
              <span>+371 12345678</span>
              <span className="text-gray-500">RĪGA, BRĪVĪBAS IELA 123</span>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://t.me/apiroq" className="text-gray-400 hover:text-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.03-2.753-.916c-.598-.183-.608-.598.126-.885l10.733-4.14c.505-.184.95.114.32.285z"/></svg>
              </a>
              <a href="https://wa.me/37112345678" className="text-gray-400 hover:text-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.5c-3.183 0-5.77 2.587-5.77 5.77 0 1.087.307 2.142.889 3.05L6.5 17.5l4.18-.759c.908.582 1.963.889 3.05.889 3.183 0 5.77-2.587 5.77-5.77 0-3.183-2.587-5.77-5.77-5.77z"/></svg>
              </a>
              <a href="https://youtube.com/apiroq" className="text-gray-400 hover:text-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
              <a href="https://instagram.com/apiroq" className="text-gray-400 hover:text-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="bg-gradient-to-r from-[#1a1b26] via-[#2a2c3e] to-[#1a1b26] border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <Image 
                  src="/logo.png" 
                  alt="Apiroq"
                  width={80}
                  height={5}
                />
              </Link>

              {/* Navigation links */}
              <div className="hidden md:flex items-center space-x-8">
                {/* Dropdown menu */}
                <div className="relative group">
                  <button className="text-gray-300 hover:text-white flex items-center gap-1">
                    DATORI
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Dropdown content */}
                  <div className="absolute left-0 mt-2 w-[600px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden -translate-x-1/4">
                      <div className="grid grid-cols-2">
                        <Link href="/gatavie-datori" className="p-6 hover:bg-gray-50">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">GATAVIE DATORI</h3>
                              <p className="text-sm text-gray-500 mt-1">
                                Gatavie datori, kurus samontējuši mūsu profesionāļi
                              </p>
                            </div>
                          </div>
                        </Link>
                        
                        <Link href="/konfigurators" className="p-6 hover:bg-gray-50">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">KONFIGURATORS</h3>
                              <p className="text-sm text-gray-500 mt-1">
                                Izveidojiet savu sapņu datoru mūsu konfiguratorā
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/peripherals" className="text-gray-300 hover:text-white">PERIFĒRIJA</Link>
                {/* Palīdzība dropdown */}
                <div className="relative group">
                  <button className="text-gray-300 hover:text-white flex items-center gap-1">
                    PALĪDZĪBA
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div className="absolute left-0 mt-2 w-[600px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden -translate-x-1/2">
                      <div className="grid grid-cols-2 gap-4 p-6">
                        {/* Kreisā puse */}
                        <div className="space-y-6">
                          <Link href="/how-to-order" className="flex items-start gap-4 group/item">
                            <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900 group-hover/item:text-pink-500">KĀ IZDARĪT PASŪTĪJUMU</h3>
                              <p className="text-sm text-gray-500 mt-1">
                                Paskaidrojam un parādam, kā veikt pasūtījumu mūsu vietnē
                              </p>
                            </div>
                          </Link>

                          <Link href="/delivery" className="flex items-start gap-4 group/item">
                            <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900 group-hover/item:text-pink-500">PAR PIEGĀDI</h3>
                              <p className="text-sm text-gray-500 mt-1">
                                Informācija par piegādes laikiem un nosacījumiem
                              </p>
                            </div>
                          </Link>
                        </div>

                        {/* Labā puse */}
                        <div className="space-y-3">
                          <Link href="/payment" className="block text-gray-900 hover:text-pink-500">
                            APMAKSAS VEIDI
                          </Link>
                          <Link href="/terms" className="block text-gray-900 hover:text-pink-500">
                            LĪGUMA NOSACĪJUMI
                          </Link>
                          <Link href="/privacy" className="block text-gray-900 hover:text-pink-500">
                            PRIVĀTUMA POLITIKA
                          </Link>
                          <Link href="/warranty" className="block text-gray-900 hover:text-pink-500">
                            GARANTIJAS NOSACĪJUMI
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Par mums dropdown */}
                <div className="relative group">
                  <button className="text-gray-300 hover:text-white flex items-center gap-1">
                    PAR MUMS
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div className="absolute right-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                      <div className="p-4">
                        <div className="space-y-3">
                          <Link 
                            href="/priekšrocības" 
                            className="block text-gray-900 hover:text-red-600 transition-colors py-2"
                          >
                            PRIEKŠROCĪBAS
                          </Link>
                          <Link 
                            href="/kontakti" 
                            className="block text-gray-900 hover:text-red-600 transition-colors py-2"
                          >
                            KONTAKTI
                          </Link>
                          <Link 
                            href="/par-kompaniju" 
                            className="block text-gray-900 hover:text-red-600 transition-colors py-2"
                          >
                            PAR KOMPĀNIJU
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side buttons */}
              <div className="flex items-center space-x-4">
                <LanguageSwitcher /> {/* Pievieno šo */}
                <button className="text-gray-300 hover:text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
                <button className="text-gray-300 hover:text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
              </div>
              </div>
            </div>
        </nav>
      </header>

      {/* Galvenā sadaļa */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              Spēļu datoru montāža un personalizācija
            </h1>
            <p className="text-gray-400 text-lg">
              Veidojam datorus atbilstoši jūsu budžetam un vajadzībām
            </p>
            
            {/* Info bloki */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4">
                <div className="text-red-500 text-xl mb-2">🚚</div>
                <h3 className="text-white font-medium">Bezmaksas piegāde</h3>
              </div>
              <div className="text-center p-4">
                <div className="text-red-500 text-xl mb-2">⚙️</div>
                <h3 className="text-white font-medium">Individuāla montāža</h3>
              </div>
              <div className="text-center p-4">
                <div className="text-red-500 text-xl mb-2">🛡️</div>
                <h3 className="text-white font-medium">3 gadu garantija</h3>
              </div>
            </div>

            <Link 
              href="/configure" 
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-red-700 transition-colors"
            >
              Izvēlēties datoru
            </Link>
          </div>

          <div className="relative h-[600px]">
            <Image
              src="/pc-case.png"
              alt="Gaming PC"
              fill
              style={{objectFit: 'contain'}}
              priority
            />
          </div>
        </div>
      </main>

      {/* Priekšrocību sekcija */}
      <section className="bg-[#1a1b26] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Priekšrocību kartes */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
              <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mb-4">
                <div className="text-red-600 text-2xl">⚡</div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Profesionāla un ātra montāža
              </h3>
              <p className="text-gray-400">
                Pielāgojam datoru jūsu vajadzībām un veicam pilnu personalizāciju
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
              <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mb-4">
                <div className="text-red-600 text-2xl">🚚</div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Bezmaksas piegāde
              </h3>
              <p className="text-gray-400">
                Vidējais piegādes laiks 2-4 dienas. Strādājam ar līgumu, sniedzam garantiju
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
              <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mb-4">
                <div className="text-red-600 text-2xl">👍</div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Droši pirkumi visos posmos
              </h3>
              <p className="text-gray-400">
                Iespēja maksāt ar dažādiem maksājumu veidiem, iekļauta garantijas apkalpošana
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Populārie modeļi */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Populārākie modeļi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Datoru kartes */}
            {[
              {
                name: "Apiroq | SILVER",
                description: "Dators spēlēm FullHD kvalitātē",
                price: "899€",
                image: "/pc-silver.png"
              },
              {
                name: "Apiroq | GOLD",
                description: "Moderns dators ar stilīgu dizainu",
                price: "1199€",
                image: "/pc-gold.png"
              },
              {
                name: "Apiroq | PALLADIUM",
                description: "Augstākās klases spēļu sistēma",
                price: "1499€",
                image: "/pc-palladium.png"
              }
            ].map((pc) => (
              <div key={pc.name} className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src={pc.image}
                    alt={pc.name}
                    fill
                    style={{objectFit: 'cover'}}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{pc.name}</h3>
                  <p className="text-gray-400 mt-2">{pc.description}</p>
                  <p className="text-2xl font-bold text-red-600 mt-4">{pc.price}</p>
                  <div className="flex gap-4 mt-6">
                    <button className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                      Detalizēti
                    </button>
                    <button className="flex-1 border border-red-600 text-red-600 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white">
                      Pasūtīt
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PC kategorijas */}
      <section className="py-16 bg-gradient-to-b from-[#1a1b26] to-[#1a1b26]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Specializētie datoru risinājumi
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "Straumēšanai", image: "/streaming.jpg" },
              { title: "FullHD spēlēm", image: "/gaming-fhd.jpg" },
              { title: "2K spēlēm", image: "/gaming-2k.jpg" },
              { title: "4K spēlēm", image: "/gaming-4k.jpg" },
              { title: "3D modelēšanai", image: "/3d-modeling.jpg" },
              { title: "Video apstrādei", image: "/video-editing.jpg" }
            ].map((category) => (
              <div key={category.title} className="group relative rounded-lg overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    style={{objectFit: 'cover'}}
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-medium text-center">
                      {category.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 soļu process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            4 soļi līdz jūsu jaunajam datoram
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Atstājiet pieteikumu",
                description: "Precizēsim pasūtījuma detaļas un vēlmes",
                icon: "💬"
              },
              {
                step: 2,
                title: "Pasūtam komponentes",
                description: "Atlasām un pasūtam nepieciešamās detaļas",
                icon: "🔧"
              },
              {
                step: 3,
                title: "Montāža",
                description: "Veicam montāžu un testēšanu",
                icon: "⚙️"
              },
              {
                step: 4,
                title: "Piegāde",
                description: "Droša piegāde visā Latvijā",
                icon: "🚚"
              }
            ].map((step) => (
              <div key={step.step} className="bg-white/5 backdrop-blur-sm rounded-lg p-8 relative">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold absolute -top-6 left-8">
                  {step.step}
                </div>
                <div className="text-3xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Telegram sekcija */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#1a1b26] rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-red-500 mb-2">KOPĀ AR MUMS JAU 55'000+ SPĒLĒTĀJU</div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Esi informēts! Pievienojies mums
                  <br />Telegram kanālā Apiroq
                </h2>
                <p className="text-gray-400 mb-6">
                  Tikai oriģināls saturs: jaunākās ziņas, aktuālie produkti un spēļu aprīkojuma izlozes
                </p>
                <Link 
                  href="https://t.me/apiroq" 
                  className="inline-flex items-center gap-2 bg-[#27A7E7] text-white px-6 py-3 rounded-lg hover:bg-[#229AD6]"
                >
                  <Image src="/telegram-logo.svg" alt="Telegram" width={24} height={24} />
                  PIEVIENOTIES TELEGRAM
                </Link>
                <div className="text-gray-400 mt-4 text-sm italic">
                  Notiek izloze par datoru 🎮
                </div>
              </div>
              <div className="relative h-[300px]">
                <Image
                  src="/telegram-preview.png"
                  alt="Telegram kanāla priekšskatījums"
                  fill
                  style={{objectFit: 'contain'}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Klientu atsauksmes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Pēdējie klientu vērtējumi
          </h2>
          <div className="relative">
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <Image
                      src="/review-pc.jpg"
                      alt="Klienta dators"
                      fill
                      style={{objectFit: 'cover'}}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Jānis</h3>
                    <p className="text-gray-400">
                      Ideāla kompānija datoru komplektēšanai. Ļoti labas cenas un atsaucīgs personāls.
                      Atbild nekavējoties. Pastāstīja visu detalizēti un godīgi palīdzēja. 
                      Saņēmu ideāli samontētu datoru un rakstisku atskaiti par pilnu pārbaudi.
                    </p>
                    <button className="mt-4 text-red-500 font-medium">
                      IZVĒLĒTIES DATORU
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Navigācijas pogas */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-red-600 p-2 rounded-full">
              <span className="sr-only">Iepriekšējā atsauksme</span>
              ←
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-red-600 p-2 rounded-full">
              <span className="sr-only">Nākamā atsauksme</span>
              →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1b26] border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Biznesa piedāvājumi */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                BIZNESA PIEDĀVĀJUMI
              </h3>
              <p className="text-gray-400 mb-4">
                Ir piedāvājums sadarbībai vai vēlaties izveidot datoru pēc individuālām prasībām?
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 text-white hover:text-red-500"
              >
                <span className="text-red-500">✉</span> Rakstiet uz ēpastu
              </Link>
            </div>

            {/* Tehniskais atbalsts */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                TEHNISKAIS ATBALSTS
              </h3>
              <p className="text-gray-400 mb-4">
                Radušies jautājumi vai nepieciešama palīdzība? Sazinieties ar mums, mēs palīdzēsim!
              </p>
              <div className="flex items-center gap-2 text-white">
                <span className="text-red-500">📞</span>
                <a href="tel:+37112345678" className="hover:text-red-500">+371 12345678</a>
              </div>
            </div>
          </div>

          {/* Sociālie tīkli */}
          <div className="flex gap-4 mb-8">
            <Link href="https://t.me/apiroq" className="text-gray-400 hover:text-white">
              <span className="sr-only">Telegram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.03-2.753-.916c-.598-.183-.608-.598.126-.885l10.733-4.14c.505-.184.95.114.32.285z"/>
              </svg>
            </Link>
            <Link href="https://wa.me/37112345678" className="text-gray-400 hover:text-white">
              <span className="sr-only">WhatsApp</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 4.5c-3.183 0-5.77 2.587-5.77 5.77 0 1.087.307 2.142.889 3.05L6.5 17.5l4.18-.759c.908.582 1.963.889 3.05.889 3.183 0 5.77-2.587 5.77-5.77 0-3.183-2.587-5.77-5.77-5.77zm3.31 8.183l-.534.533c-.887.887-2.53.887-3.417 0l-.534-.533c-.887-.887-.887-2.53 0-3.417l.534-.534c.887-.887 2.53-.887 3.417 0l.534.534c.887.887.887 2.53 0 3.417z"/>
              </svg>
            </Link>
            <Link href="https://www.instagram.com/apiroq" className="text-gray-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="https://www.youtube.com/apiroq" className="text-gray-400 hover:text-white">
              <span className="sr-only">YouTube</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          {/* Autortiesības */}
          <div className="text-center text-gray-500 text-sm">
            © COPYRIGHT 2024 APIROQ. VISAS TIESĪBAS AIZSARGĀTAS.
          </div>
        </div>
      </footer>
            
      {/* Kontaktu poga */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-colors duration-200"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {/* Kontaktu modālais logs */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50">
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#1a1b26] p-8">
            {/* Aizvēršanas poga */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-2xl font-bold text-white mb-6">Sazināties ar mums</h2>
            
            <div className="space-y-6">
              <p className="text-gray-300">
                Katrs Apiroq dators ir vairāku gadu pieredzes rezultāts. Mūsu eksperti precīzi zina, 
                kādam jābūt spēļu datoram, darba stacijai vai serverim.
              </p>

              <p className="text-gray-300">
                Lai sāktu, pastāstiet par savām vajadzībām, termiņiem un budžetu, 
                un mēs piedāvāsim labāko risinājumu.
              </p>

              {/* Kontaktu opcijas */}
              <div>
                <h3 className="text-lg text-white mb-2">Zvanīt vai pieprasīt zvanu:</h3>
                <a 
                  href="tel:+37112345678" 
                  className="text-xl text-white font-bold hover:text-[#9aca3c]"
                >
                  +371 12345678
                </a>
              </div>

              {/* Ziņapmaiņa */}
              <div>
                <h3 className="text-lg text-white mb-2">Rakstīt ziņu:</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://t.me/apiroq" 
                    className="px-4 py-2 bg-gray-800 rounded-lg text-white hover:bg-gray-700"
                  >
                    Telegram
                  </a>
                  <a 
                    href="https://wa.me/37112345678" 
                    className="px-4 py-2 bg-gray-800 rounded-lg text-white hover:bg-gray-700"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* E-pasts */}
              <div>
                <h3 className="text-lg text-white mb-2">Rakstīt e-pastu:</h3>
                <div className="flex gap-4">
                  <a 
                    href="mailto:info@apiroq.lv" 
                    className="px-4 py-2 bg-gray-800 rounded-lg text-white hover:bg-gray-700"
                  >
                    info@apiroq.lv
                  </a>
                </div>
              </div>

              <p className="text-gray-400 text-sm">
                Darba laiks: 10:00 - 22:00, katru dienu
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}