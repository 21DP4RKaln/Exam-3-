'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLanguage, setCurrentLanguage] = useState('lv');

  const handleLanguageChange = (locale: string) => {
    setCurrentLanguage(locale);
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${locale}`);
    router.push(newPath);
  };

  return (
    <div className="relative group">
      <button className="text-gray-300 hover:text-white flex items-center gap-1">
        {currentLanguage.toUpperCase()}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className="absolute right-0 mt-2 w-24 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="divide-y divide-gray-100">
            <button 
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              onClick={() => handleLanguageChange('lv')}
            >
              Latviešu
            </button>
            <button 
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              onClick={() => handleLanguageChange('ru')}
            >
              Русский
            </button>
            <button 
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              onClick={() => handleLanguageChange('en')}
            >
              English
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}