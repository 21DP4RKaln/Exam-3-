import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['lv', 'en', 'ru'],
  defaultLocale: 'lv'
});
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};