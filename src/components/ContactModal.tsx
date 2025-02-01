'use client'

import { useState } from 'react'

export function ContactModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#1a1b26] p-8">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold text-white mb-6">Sazināties ar mums</h2>
        
        <div className="space-y-6">
          <p className="text-gray-300">
            Katrs Apiroq dators ir 15 gadu pieredzes rezultāts. Mūsu eksperti precīzi zina, 
            kādam jābūt spēļu datoram, darba stacijai vai serverim.
          </p>

          <p className="text-gray-300">
            Lai sāktu, pastāstiet par savām vajadzībām, termiņiem un budžetu, 
            un mēs piedāvāsim labāko risinājumu.
          </p>

          {/* Contact options */}
          <div>
            <h3 className="text-lg text-white mb-2">Zvanīt vai pieprasīt zvanu:</h3>
            <a 
              href="tel:+37112345678" 
              className="text-xl text-white font-bold hover:text-lime-400"
            >
              +371 12345678
            </a>
          </div>

          {/* Messaging */}
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

          {/* Email */}
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
  )
}