import {getRequestConfig} from 'next-intl/server';
import thMessages from './messages/th.json';
import enMessages from './messages/en.json';
import zhMessages from './messages/zh.json';

const messages = {
  th: thMessages,
  en: enMessages,
  zh: zhMessages
} as const;

export default getRequestConfig(async ({locale}) => {
  // Default to 'th' if locale is undefined or invalid
  const validLocale = (locale && locale in messages) ? locale as keyof typeof messages : 'th';
  
  return {
    locale: validLocale,
    messages: messages[validLocale]
  };
});