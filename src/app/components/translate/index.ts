import { I18n } from 'i18n-js';
import en from './en';
import es from './es';

const i18n = new I18n({
  en,
  es,
});

i18n.defaultLocale = 'en';
i18n.locale = 'en';

export function translate(key: string): string {
  return i18n.t(key);
}

export function setLocale(locale: string): void {
  i18n.locale = locale;
}

export default i18n;