import { getRequestConfig } from 'next-intl/server';

export const locales = ['th', 'en', 'zh'] as const;
export const defaultLocale = 'th';

export default getRequestConfig(async ({ locale }) => {
  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});