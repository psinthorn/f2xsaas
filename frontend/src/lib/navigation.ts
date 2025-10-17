import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['th', 'en', 'zh'] as const;
export const defaultLocale = 'th';

export const { Link, redirect, usePathname, useRouter } = createLocalizedPathnamesNavigation({
  locales,
  defaultLocale,
  pathnames: {
    '/': '/',
    '/about': '/about',
    '/pricing': '/pricing',
    '/resources': '/resources',
    '/login': '/login',
    '/register': '/register',
    '/dashboard': '/dashboard',
    '/chat': '/chat'
  }
});