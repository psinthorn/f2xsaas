import {getRequestConfig} from 'next-intl/server';
import thMessages from './messages/th.json';
import enMessages from './messages/en.json';

const messages = {
  th: thMessages,
  en: enMessages
} as const;

export default getRequestConfig(async ({locale}) => {
  // Default to 'en' if locale is undefined or invalid
  const validLocale = (locale && locale in messages) ? locale as keyof typeof messages : 'en';
  
  return {
    locale: validLocale,
    messages: messages[validLocale]
  };
});