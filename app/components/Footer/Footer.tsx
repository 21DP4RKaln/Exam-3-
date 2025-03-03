'use client';

import { forwardRef, ForwardedRef } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { FooterContactModal } from '../ui/FooterContactModal';

const Footer = forwardRef((
  props: Record<string, unknown>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const t = useTranslations('footer');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <footer ref={ref} className="bg-gradient-to-r from-[#E63946]/5 via-[#97121c]/10 to-[#E63946]/5 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Biznesa piedāvājumi */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              {t('businessOffers.title')}
            </h3>
            <p className="text-gray-400 mb-4">
              {t('businessOffers.description')}
            </p>
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="inline-flex items-center gap-2 text-white hover:text-red-500"
            >
              <Mail size={20} className="text-red-500" /> {t('businessOffers.contactLink')}
            </button>
          </div>

          {/* Tehniskais atbalsts */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              {t('technicalSupport.title')}
            </h3>
            <p className="text-gray-400 mb-4">
              {t('technicalSupport.description')}
            </p>
            <div className="flex items-center gap-2 text-white">
              <Phone size={20} className="text-red-500" />
              <a href="tel:+37120699800" className="hover:text-red-500">
                {t('PhoneNumbers.support')}
              </a>
            </div>
          </div>
        </div>

        {/* Sociālie tīkli */}
        <div className="flex gap-4 mb-8">
          <Link href="https://t.me/ivaprolv" className="text-gray-400 hover:text-white">
            <span className="sr-only">Telegram</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.03-2.753-.916c-.598-.183-.608-.598.126-.885l10.733-4.14c.505-.184.95.114.32.285z"/>
            </svg>
          </Link>
          <Link href="https://wa.me/37120699800" className="text-gray-400 hover:text-white">
            <span className="sr-only">WhatsApp</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </Link>
          <Link href="https://www.youtube.com/channel/UCxERu5P_HVdrMKbrHestldg" className="text-gray-400 hover:text-white">
            <span className="sr-only">YouTube</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        {/* Autortiesības */}
        <div className="text-center text-gray-500 text-sm">
          {t('copyright')}
        </div>
      </div>

      {/* Izmantojam FooterContactModal */}
      <FooterContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;