import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import "../globals.css";

const locales = ['lv', 'en', 'ru'];

export const metadata: Metadata = {
  title: 'Apiroq - Datoru Konfigurācija',
  description: 'Personalizēto datoru konfigurācijas platforma',
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) notFound();

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages} locale={locale}>
        <body className="bg-[#1a1b26]">
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
