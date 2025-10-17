import { getRequestConfig } from 'next-intl/server';
import thMessages from './messages/th.json';
import enMessages from './messages/en.json';
import zhMessages from './messages/zh.json';

export const locales = ['th', 'en', 'zh'] as const;
export const defaultLocale = 'th';

const messages = {
  th: thMessages,
  en: enMessages,
  zh: zhMessages
};

export default getRequestConfig(async ({ locale }) => {
  return {
    messages: messages[locale as keyof typeof messages] || messages[defaultLocale]
  };
});